# Electric Generators

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Calculate the emf induced in a generator.
- Calculate the peak emf which can be induced in a particular generator system.
{term:Electric generators} induce an emf by rotating a coil in a magnetic field, as briefly discussed in [Induced Emf and Magnetic Flux](module:m42390). We will now explore generators in more detail. Consider the following example.

:::example {ex:fs-id1169737058290} Calculating the Emf Induced in a Generator Coil
The generator coil shown in [ref:import-auto-id1169737979702] is rotated through one-fourth of a revolution (from $\theta =0º$ to $\theta =\text{90º}$ ) in 15.0 ms. The 200-turn circular coil has a 5.00 cm radius and is in a uniform 1.25 T magnetic field. What is the average emf induced?

> FIGURE {fig:import-auto-id1169737979702} src=../../media/Figure_24_05_01.jpg
> alt: The figure shows a schematic diagram of an electric generator. It consists of a rotating rectangular coil placed between the two poles of a permanent magnet shown as two rectangular blocks curved on side facing the coil. The magnetic field B is shown pointing from the North to the South Pole. The two ends of this coil are connected to the two small rings. The two conducting carbon brushes are kept pressed separately on both the rings. The coil is attached to an axle with a handle at the other end. Outer ends of the two brushes are connected to the galvanometer. The axle is mechanically rotated from outside by an angle of ninety degree that is a one fourth revolution, to rotate the coil inside the magnetic field. A current is shown to flow in the coil in clockwise direction and the galvanometer shows a deflection to left.
> width: 250
> caption: When this generator coil is rotated through one-fourth of a revolution, the magnetic flux $Φ$  changes from its maximum to zero, inducing an emf.

**Strategy**
We use Faraday’s law of induction to find the average emf induced over a time $\Delta t$:

$$ \text{emf}=-N\frac{\Delta Φ}{\Delta t}\text{.} $$  {eq:eip-60}

We know that $N=\text{200}$ and $\Delta t=\text{15}\text{.}0\;\text{ms}$, and so we must determine the change in flux $\Delta Φ$ to find emf.
**Solution**
Since the area of the loop and the magnetic field strength are constant, we see that

$$ \Delta Φ=\Delta (\text{BA}\;\text{cos}\;\theta )=\text{AB}\Delta (\text{cos}\;\theta )\text{.} $$  {eq:eip-332}

Now, $\Delta (\text{cos}\;\theta )=-1\text{.}0$, since it was given that $\theta$  goes from  $\text{0º}$ to $\text{90º}$ . Thus $\Delta Φ=-\text{AB}$, and

$$ \text{emf}=N\frac{\text{AB}}{\Delta t}. $$  {eq:eip-175}

The area of the loop is $A={πr}^{2}=(3.14\text{...})(0.0500\;\text{m}{)}^{2}=7.85\times {\text{10}}^{-3}\;{\text{m}}^{2}$. Entering this value gives

$$ \text{emf}=\text{200}\frac{(7.85\times {\text{10}}^{-3}\;{\text{m}}^{2})(1.25\;\text{T})}{15.0\times {\text{10}}^{-3}\;\text{s}}=\text{131}\;\text{V.} $$  {eq:eip-949}

**Discussion**
This is a practical average value, similar to the 120 V used in household power.
:::
The emf calculated in [ref:fs-id1169737058290] is the average over one-fourth of a revolution. What is the emf at any given instant? It varies with the angle between the magnetic field and a perpendicular to the coil. We can get an expression for emf as a function of time by considering the motional emf on a rotating rectangular coil of width $w$ and height $ℓ$ in a uniform magnetic field, as illustrated in [ref:import-auto-id1169738035840].

> FIGURE {fig:import-auto-id1169738035840} src=../../media/Figure_24_05_02.jpg
> alt: The figure shows a schematic diagram of an electric generator with a single rectangular coil. The rotating rectangular coil is placed between the two poles of a permanent magnet shown as two rectangular blocks curved on side facing the coil. The magnetic field B is shown pointing from the North to the South Pole. The North Pole is on the left and the South Pole is to the right and hence the direction of field is from left to right. The angular velocity of the coil is given as omega. The velocity vector v of the coil makes an angle theta with the direction of field.
> width: 225
> caption: A generator with a single rectangular coil rotated at constant angular velocity in a uniform magnetic field produces an emf that varies sinusoidally in time. Note the generator is similar to a motor, except the shaft is rotated to produce a current rather than the other way around.

Charges in the wires of the loop experience the magnetic force, because they are moving in a magnetic field. Charges in the vertical wires experience forces parallel to the wire, causing currents. But those in the top and bottom segments feel a force perpendicular to the wire, which does not cause a current. We can thus find the induced emf by considering only the side wires. Motional emf is given to be $\text{emf}=Bℓv$, where the velocity *v* is perpendicular to the magnetic field $B$. Here the velocity is at an angle $\theta$ with $B$, so that its component perpendicular to $B$ is $v\;\text{sin}\;\theta$ (see [ref:import-auto-id1169738035840]). Thus in this case the emf induced on each side is $\text{emf}=Bℓv\;\text{sin}\;\theta$, and they are in the same direction. The total emf around the loop is then

$$ \text{emf}=2Bℓv\;\text{sin}\;\theta \text{.} $$  {eq:eip-258}

This expression is valid, but it does not give emf as a function of time. To find the time dependence of emf, we assume the coil rotates at a constant angular velocity $\omega$. The angle $\theta$ is related to angular velocity by *$\theta =ωt$*, so that

$$ \text{emf}=\text{2}Bℓv\;\text{sin}\;ωt\text{.} $$  {eq:eip-892}

Now, linear velocity $v$ is related to angular velocity $\omega$ by $v=rω$. Here $r=w/2$, so that *$v=(w/2)\omega$*, and

$$ \text{emf}=2Bℓ\frac{w}{2}\omega \;\text{sin}\;ωt=(ℓw)Bω\;\text{sin}\;ωt\text{.} $$  {eq:eip-667}

Noting that the area of the loop is $A=ℓw$, and allowing for $N$ loops, we find that

$$ \text{emf}=\text{NAB}\omega \;\text{sin}\;ωt $$  {eq:eip-959}

is the {term:emf induced in a generator coil} of $N$ turns and area $A$ rotating at a constant angular velocity $\omega$ in a uniform magnetic field $B$. This can also be expressed as

$$ \text{emf}={\text{emf}}_{0}\;\text{sin}\;ωt\text{,} $$  {eq:eip-944}

where

$$ {\text{emf}}_{0}=\text{NAB}\omega $$  {eq:eip-420}

is the maximum {term:(peak) emf}. Note that the frequency of the oscillation is *$f=\omega /2π$*, and the period is $T=1/f=2π/\omega$*.* [ref:import-auto-id1169737911320] shows a graph of emf as a function of time, and it now seems reasonable that AC voltage is sinusoidal.

> FIGURE {fig:import-auto-id1169737911320} src=../../media/Figure_24_05_03.jpg
> alt: The first part of the figure shows a schematic diagram of a single coil electric generator. It consists of a rotating rectangular loop placed between the two poles of a permanent magnet shown as two rectangular blocks curved on side facing the loop. The magnetic field B is shown pointing from the North to the South Pole. The two ends of this loop are connected to the two small rings. The two conducting carbon brushes are kept pressed separately on both the rings. The loop is rotated in the field with an angular velocity omega. Outer ends of the two brushes are connected to an electric bulb which is shown to glow brightly. The second part of the figure shows the graph for e m f generated E as a function of time t. The e m f is along the Y axis and the time t is along the X axis. The graph is a progressive sine wave with a time period T. The crest maxima are at E zero and trough minima are at negative E zero.
> width: 350
> caption: The emf of a generator is sent to a light bulb with the system of rings and brushes shown. The graph gives the emf of the generator as a function of time. ${\text{emf}}_{0}$ is the peak emf. The period is $T=1/f=2π/\omega$, where $f$ is the frequency. Note that the script E stands for emf.

The fact that the peak emf, ${\text{emf}}_{0}=\text{NAB}\omega$, makes good sense. The greater the number of coils, the larger their area, and the stronger the field, the greater the output voltage. It is interesting that the faster the generator is spun (greater $\omega$), the greater the emf. This is noticeable on bicycle generators—at least the cheaper varieties. One of the authors as a juvenile found it amusing to ride his bicycle fast enough to burn out his lights, until he had to ride home lightless one dark night.
[ref:import-auto-id1169738092356] shows a scheme by which a generator can be made to produce pulsed DC. More elaborate arrangements of multiple coils and split rings can produce smoother DC, although electronic rather than mechanical means are usually used to make ripple-free DC.

> FIGURE {fig:import-auto-id1169738092356} src=../../media/Figure_24_05_04.jpg
> alt: The first part of the figure shows a schematic diagram of a single coil D C electric generator. It consists of a rotating rectangular loop placed between the two poles of a permanent magnet shown as two rectangular blocks curved on side facing the loop. The magnetic field B is shown pointing from the North to the South Pole. The two ends of this loop are connected to the two sides of a split ring. The two conducting carbon brushes are kept pressed separately on both sides of the split rings. The loop is rotated in the field with an angular velocity w. Outer ends of the two brushes are connected to an electric bulb which is shown to glow brightly. The second part of the figure shows the graph for e m f generated as a function of time. The e m f is along the Y axis and the time t is along the X axis. The graph is a progressive and rectified sine wave with a time period T. The sine wave has only positive pulses. The crest maxima are at E zero.
> width: 225
> caption: Split rings, called commutators, produce a pulsed DC emf output in this configuration.

:::example {ex:fs-id1169737945918} Calculating the Maximum Emf of a Generator
Calculate the maximum emf, ${\text{emf}}_{0}$, of the generator that was the subject of [ref:fs-id1169737058290].
**Strategy**
Once $\omega$, the angular velocity, is determined, ${\text{emf}}_{0}=\text{NAB}\omega$ can be used to find ${\text{emf}}_{0}$. All other quantities are known.
**Solution**
Angular velocity is defined to be the change in angle per unit time:

$$ \omega =\frac{\Delta \theta}{\Delta t}\text{.} $$  {eq:eip-121}

One-fourth of a revolution is $π/2$ radians, and the time is 0.0150 s; thus,

$$ \begin{array}{lll}\omega & = & \frac{\pi /2\;\text{rad}}{\text{0.0150 s}} \\ & = & \text{104}.\text{7 rad/s}\text{.}\end{array} $$  {eq:eip-135}

104.7 rad/s is exactly 1000 rpm. We substitute this value for $\omega$ and the information from the previous example into ${\text{emf}}_{0}=\text{NAB}\omega$, yielding

$$ \begin{array}{lll}{\text{emf}}_{0} & = & \text{NAB}\omega \\ & = & \text{200}(7\text{.}\text{85}\times {\text{10}}^{-3}\;{\text{m}}^{2})(1\text{.}\text{25}\;\text{T})(\text{104}\text{.}7\;\text{rad/s}) \\ & = & \text{206}\;\text{V}\end{array}\text{.} $$  {eq:eip-910}

**Discussion**
The maximum emf is greater than the average emf of 131 V found in the previous example, as it should be.
:::
In real life, electric generators look a lot different than the figures in this section, but the principles are the same. The source of mechanical energy that turns the coil can be falling water (hydropower), steam produced by the burning of fossil fuels, or the kinetic energy of wind. [ref:import-auto-id1169737786586] shows a cutaway view of a steam turbine; steam moves over the blades connected to the shaft, which rotates the coil within the generator.

> FIGURE {fig:import-auto-id1169737786586} src=../../media/Figure_24_05_05.jpg
> alt: Photograph of a steam turbine connected to a generator.
> width: 300
> caption: Steam turbine/generator. The steam produced by burning coal impacts the turbine blades, turning the shaft which is connected to the generator. (credit: Nabonaco, Wikimedia Commons)

Generators illustrated in this section look very much like the motors illustrated previously. This is not coincidental. In fact, a motor becomes a generator when its shaft rotates. Certain early automobiles used their starter motor as a generator. In [Back Emf](module:m42411), we shall further explore the action of a motor as a generator.

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1518306} type=ap-test-prep 
PROBLEM:
The emf induced in a coil that is rotating in a magnetic field will be at a maximum when
(a) the magnetic flux is at a maximum.
(b) the magnetic flux is at a minimum.
(c) the change in magnetic flux is at a maximum.
(d) the change in magnetic flux is at a minimum.
SOLUTION:
(c)
:::

:::exercise {fs-id1448465} type=ap-test-prep 
PROBLEM:
A coil with circular cross section and 20 turns is rotating at a rate of 400 rpm between the poles of a magnet. If the magnetic field strength is 0.6 T and peak voltage is 0.2 V, what is the radius of the coil? If the emf of the coil is zero at *t* = 0 s, when will it reach its peak emf?
:::

## Section Summary {section:section-summary}
- An electric generator rotates a coil in a magnetic field, inducing an emfgiven as a function of time by
      

$$ \text{emf}=\text{NAB}\omega \;\text{sin}\;ωt\text{,} $$  {eq:eip-841}

where $A$ is the area of an $N$-turn coil rotated at a constant angular velocity $\omega$ in a uniform magnetic field $B$.
- The peak emf ${\text{emf}}_{0}$ of a generator is
          

$$ {\text{emf}}_{0}=\text{NAB}\omega \text{.} $$  {eq:eip-714}

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1169736737112} type=conceptual-questions 
PROBLEM:
Using RHR-1, show that the emfs in the sides of the generator loop in [ref:import-auto-id1169738092356] are in the same sense and thus add.
:::

:::exercise {fs-id1169738117063} type=conceptual-questions 
PROBLEM:
The source of a generator’s electrical energy output is the work done to turn its coils. How is the work needed to turn the generator related to Lenz’s law?
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1169736999795} type=problems-exercises 
PROBLEM:
Calculate the peak voltage of a generator that rotates its 200-turn, 0.100 m diameter coil at 3600 rpm in a 0.800 T field.
SOLUTION:
474 V
:::

:::exercise {fs-id1169738093195} type=problems-exercises 
PROBLEM:
At what angular velocity in rpm will the peak voltage of a generator be 480 V, if its 500-turn, 8.00 cm diameter coil rotates in a 0.250 T field?
:::

:::exercise {fs-id1169738080660} type=problems-exercises 
PROBLEM:
What is the peak emf generated by rotating a 1000-turn, 20.0 cm diameter coil in the Earth’s $5\text{.}\text{00}\times {\text{10}}^{-5}\;\text{T}$ magnetic field, given the plane of the coil is originally perpendicular to the Earth’s field and is rotated to be parallel to the field in 10.0 ms?
SOLUTION:
0.247 V
:::

:::exercise {fs-id1169737795654} type=problems-exercises 
PROBLEM:
What is the peak emf generated by the rotating coil in [ref:fs-id1169736985152](module:m42392)? Assume all the conditions (coil size, rotation rate, and magnetic field) are the same as in [ref:fs-id1169736985152](module:m42392)
:::

:::exercise {fs-id1169737905343} type=problems-exercises 
PROBLEM:
(a) A bicycle generator rotates at 1875 rad/s, producing an 18.0 V peak emf. It has a 1.00 by 3.00 cm rectangular coil in a 0.640 T field. How many turns are in the coil? (b) Is this number of turns of wire practical for a 1.00 by 3.00 cm coil?
SOLUTION:
(a) 50
(b) yes
:::

:::exercise {fs-id1169738116938} type=problems-exercises 
PROBLEM:
**Integrated Concepts**
This problem refers to the bicycle generator considered in the previous problem. It is driven by a 1.60 cm diameter wheel that rolls on the outside rim of the bicycle tire. (a) What is the velocity of the bicycle if the generator’s angular velocity is 1875 rad/s? (b) What is the maximum emf of the generator when the bicycle moves at 10.0 m/s, noting that it was 18.0 V under the original conditions? (c) If the sophisticated generator can vary its own magnetic field, what field strength will it need at 5.00 m/s to produce a 9.00 V maximum emf?
:::

:::exercise {fs-id1169736729580} type=problems-exercises 
PROBLEM:
(a) A car generator turns at 400 rpm when the engine is idling. Its 300-turn, 5.00 by 8.00 cm rectangular coil rotates in an adjustable magnetic field so that it can produce sufficient voltage even at low rpms. What is the field strength needed to produce a 24.0 V peak emf? (b) Discuss how this required field strength compares to those available in permanent and electromagnets.
SOLUTION:
(a) 0.477 T
(b) This field strength is small enough that it can be obtained using either a permanent magnet or an electromagnet.
:::

:::exercise {fs-id1169738048359} type=problems-exercises 
PROBLEM:
Show that if a coil rotates at an angular velocity $\omega$, the period of its AC output is $2π/ω$.
:::

:::exercise {fs-id1169737719383} type=problems-exercises 
PROBLEM:
A 75-turn, 10.0 cm diameter coil rotates at an angular velocity of 8.00 rad/s in a 1.25 T field, starting with the plane of the coil parallel to the field. (a) What is the peak emf? (b) At what time is the peak emf first reached? (c) At what time is the emf first at its most negative? (d) What is the period of the AC voltage output?
SOLUTION:
(a) 5.89 V
(b) At t=0
(c) 0.393 s
(d) 0.785 s
:::

:::exercise {fs-id1169738007419} type=problems-exercises 
PROBLEM:
(a) If the emf of a coil rotating in a magnetic field is zero at $t=0$, and increases to its first peak at $t=0\text{.}\text{100}\;\text{ms}$, what is the angular velocity of the coil? (b) At what time will its next maximum occur? (c) What is the period of the output? (d) When is the output first one-fourth of its maximum? (e) When is it next one-fourth of its maximum?
:::

:::exercise {fs-id1169738092977} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
A 500-turn coil with a $0\text{.}\text{250}\;{\text{m}}^{2}$ area is spun in the Earth’s $5\text{.}\text{00}\times {\text{10}}^{-5}\;\text{T}$ field, producing a 12.0 kV maximum emf. (a) At what angular velocity must the coil be spun? (b) What is unreasonable about this result? (c) Which assumption or premise is responsible?
SOLUTION:
(a) $1\text{.}\text{92}\times {\text{10}}^{6}\;\text{rad/s}$
(b) This angular velocity is unreasonably high, higher than can be obtained for any mechanical system.
(c) The assumption that a voltage as great as 12.0 kV could be obtained is unreasonable.
:::

## Glossary
- {def} **electric generator**: a device for converting mechanical work into electric energy; it induces an emf by rotating a coil in a magnetic field
- {def} **emf induced in a generator coil**: $\text{emf}=\text{NAB}\omega \;\text{sin}\;ωt$, where $A$  is the area of an  $N$-turn coil rotated at a constant angular velocity 
$\omega$  in a uniform magnetic field  $B$, over a period of time  $t$
- {def} **peak emf**: ${\text{emf}}_{0}=\text{NAB}\omega$

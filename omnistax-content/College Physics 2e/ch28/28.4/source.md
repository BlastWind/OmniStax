# Relativistic Addition of Velocities

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Calculate relativistic velocity addition.
- Explain when relativistic velocity addition should be used instead of classical addition of velocities.
- Calculate relativistic Doppler shift.

> FIGURE {fig:fs-id2806897} src=../../media/Figure_29_04_01a.jpg
> alt: A man with oar in his hand is kayaking downstream in a shallow fast-flowing river.
> width: 250
> caption: The total velocity of a kayak, like this one on the Deerfield River in Massachusetts, is its velocity relative to the water as well as the water’s velocity relative to the riverbank. (credit: abkfenris, Flickr)

If you’ve ever seen a kayak move down a fast-moving river, you know that remaining in the same place would be hard. The river current pulls the kayak along. Pushing the oars back against the water can move the kayak forward in the water, but that only accounts for part of the velocity. The kayak’s motion is an example of classical addition of velocities. In classical physics, velocities add as vectors. The kayak’s velocity is the vector sum of its velocity relative to the water and the water’s velocity relative to the riverbank.

## Classical Velocity Addition
For simplicity, we restrict our consideration of velocity addition to one-dimensional motion. Classically, velocities add like regular numbers in one-dimensional motion. (See [ref:fs-id1664936].) Suppose, for example, a girl is riding in a sled at a speed 1.0 m/s relative to an observer. She throws a snowball first forward, then backward at a speed of 1.5 m/s relative to the sled. We denote direction with plus and minus signs in one dimension; in this example, forward is positive. Let $v$ be the velocity of the sled relative to the Earth, $u$ the velocity of the snowball relative to the Earth-bound observer, and $u'$ the velocity of the snowball relative to the sled.

> FIGURE {fig:fs-id1664936} src=../../media/Figure_28_04_02.jpg
> alt: In part a, a man is pulling a sled towards the right with a velocity v equals one point zero meters per second. A girl sitting on the sled facing forward throws a snowball toward a boy on the far right of the picture. The snowball is labeled u primed equals one point five meters per second in the direction the sled is being pulled. The boy is labelled two point five meters per second. In figure b, a similar figure is shown, but the man’s velocity is one point zero meters per second, the girl is facing backward and throwing the snowball behind the sled. The snowball is labelled u primed equals negative one point five meters per second, and the boy is labelled u equals negative zero point five meters per second.
> width: 450
> caption: Classically, velocities add like ordinary numbers in one-dimensional motion. Here the girl throws a snowball forward and then backward from a sled. The velocity of the sled relative to the Earth is $\text{v=}1\text{.}0\;\text{m/s}$. The velocity of the snowball relative to the sled is $u'$, while its velocity relative to the Earth is $u$. Classically, $u=v+u'$.

:::note [] Classical Velocity Addition

$$ u=v+u' $$  {eq:eip-742}

:::
Thus, when the girl throws the snowball forward, $u=1.0 m/s+1.5 m/s=2.5 m/s$. It makes good intuitive sense that the snowball will head towards the Earth-bound observer faster, because it is thrown forward from a moving vehicle. When the girl throws the snowball backward, $u=1.0 m/s+(-1.5 m/s)=-0.5 m/s$. The minus sign means the snowball moves away from the Earth-bound observer.

## Relativistic Velocity Addition
The second postulate of relativity (verified by extensive experimental observation) says that classical velocity addition does not apply to light. Imagine a car traveling at night along a straight road, as in [ref:fs-id2834724]. If classical velocity addition applied to light, then the light from the car’s headlights would approach the observer on the sidewalk at a speed $u=v+c$. But we know that light will move away from the car at speed $c$ relative to the driver of the car, and light will move towards the observer on the sidewalk at speed $c$, too.

> FIGURE {fig:fs-id2834724} src=../../media/Figure_29_04_03a.jpg
> alt: A car is moving towards right with velocity v. A boy standing on the side-walk observes the car. The velocity of light u primed is shown to be c as observed by the girl in the car and the velocity of light u is also c as observed by the boy.
> width: 475
> caption: According to experiment and the second postulate of relativity, light from the car’s headlights moves away from the car at speed $c$ and towards the observer on the sidewalk at speed $c$. Classical velocity addition is not valid.

:::note [] Relativistic Velocity Addition

Either light is an exception, or the classical velocity addition formula only works at low velocities. The latter is the case. The correct formula for one-dimensional {term:relativistic velocity addition} is

$$ u=\frac{v+u'}{1+\frac{v\text{u}'}{{c}^{2}}}, $$  {eq:eip-716}

where $v$ is the relative velocity between two observers, $u$ is the velocity of an object relative to one observer, and $u'$ is the velocity relative to the other observer. (For ease of visualization, we often choose to measure $u$ in our reference frame, while someone moving at $v$ relative to us measures $u'$.) Note that the term  $\frac{vu'}{{c}^{2}}$ becomes very small at low velocities, and $u=\frac{v+u'}{1+\frac{vu'}{{c}^{2}}}$ gives a result very close to classical velocity addition. As before, we see that classical velocity addition is an excellent approximation to the correct relativistic formula for small velocities. No wonder that it seems correct in our experience.
:::

:::example {ex:fs-id1566574} Showing that the Speed of Light towards an Observer is Constant (in a Vacuum): The Speed of Light is the Speed of Light
Suppose a spaceship heading directly towards the Earth at half the speed of light sends a signal to us on a laser-produced beam of light. Given that the light leaves the ship at speed $c$ as observed from the ship, calculate the speed at which it approaches the Earth.

> FIGURE {fig:fs-id2692889} src=../../media/Figure_29_04_04a.jpg
> alt: A spacecraft is heading towards earth v equals zero point five zero zero times c. A laser beam from the ship travels towards the Earth with velocity c as shown by a vector. A second spaceship traveling away from the Earth. The velocity of the second ship and second laser are the same as the first, but in the opposite direction.
> width: 350
> caption: 

**Strategy**
Because the light and the spaceship are moving at relativistic speeds, we cannot use simple velocity addition. Instead, we can determine the speed at which the light approaches the Earth using relativistic velocity addition.
**Solution**
1. Identify the knowns. $\text{v=}0\text{.}\text{500}c$; $u'=c$
2. Identify the unknown. $u$
3. Choose the appropriate equation. $u=\frac{v+u'}{1+\frac{vu'}{{c}^{2}}}$
4. Plug the knowns into the equation.
    

$$ \begin{array}{lll}u & = & \frac{v+u'}{1+\frac{vu'}{{c}^{2}}} \\ & = & \frac{\text{0.500}c+c}{1+\frac{(\text{0.500}c)(c)}{{c}^{2}}} \\ & = & \frac{(\text{0.500}+1)c}{1+\frac{\text{0.500}{c}^{2}}{{c}^{2}}} \\ & = & \frac{\text{1.500}c}{1+\text{0.500}} \\ & = & \frac{\text{1.500}c}{\text{1.500}} \\ & = & c\end{array} $$  {eq:eip-898}

**Discussion**
Relativistic velocity addition gives the correct result. Light leaves the ship at speed $c$ and approaches the Earth at speed $c$. The speed of light is independent of the relative motion of source and observer, whether the observer is on the ship or Earth-bound.
:::
Velocities cannot add to greater than the speed of light, provided that $v$ is less than $c$ and $u'$ does not exceed $c$. The following example illustrates that relativistic velocity addition is not as symmetric as classical velocity addition.

:::example {ex:fs-id1363012} Comparing the Speed of Light towards and away from an Observer: Relativistic Package Delivery
Suppose the spaceship in the previous example is approaching the Earth at half the speed of light and shoots a canister at a speed of $0.750c$. (a) At what velocity will an Earth-bound observer see the canister if it is shot directly towards the Earth? (b) If it is shot directly away from the Earth? (See [ref:fs-id893371].)

> FIGURE {fig:fs-id893371} src=../../media/Figure_29_04_05a.jpg
> alt: In part a, a spaceship is moving towards the earth from left to right with a velocity v equals to zero point five zero times c. The spaceships shoots a canister towards earth with velocity u prime equals zero point seven five times c. A man stands stationary on earth observing. In part b, the spaceship shoots the canister away from earth with same velocity. In both the cases, the velocity of the ship is v equals 0 point five zero times c toward left.
> width: 450
> caption: 

**Strategy**
Because the canister and the spaceship are moving at relativistic speeds, we must determine the speed of the canister by an Earth-bound observer using relativistic velocity addition instead of simple velocity addition.
**Solution for (a)**
1. Identify the knowns. $\text{v=}0.500c$;

$u'=0\text{.}\text{750}c$
2. Identify the unknown. $u$
3. Choose the appropriate equation. $\text{u=}\frac{v+u'}{1+\frac{vu'}{{c}^{2}}}$
4. Plug the knowns into the equation.

$$ \begin{array}{lll}u & = & \frac{v+u'}{1+\frac{vu'}{{c}^{2}}} \\ & = & \frac{0.500\text{c +}0.750c}{1+\frac{(0.500c)(0.750c)}{{c}^{2}}} \\ & = & \frac{1.250c}{1+0.375} \\ & = & 0.909c\end{array} $$  {eq:eip-609}

**Solution for (b)**
1. Identify the knowns. $\text{v}=0.500c$; $u'=-0.750c$
2. Identify the unknown. $u$
3. Choose the appropriate equation. $\text{u}=\frac{v+u'}{1+\frac{v\text{u}'}{{c}^{2}}}$
4. Plug the knowns into the equation.
    

$$ \begin{array}{lll}u & = & \frac{v+u'}{1+\frac{vu'}{{c}^{2}}} \\ & = & \frac{0.500c +(-0.750c)}{1+\frac{(0.500c)(-0.750c)}{{c}^{2}}} \\ & = & \frac{-0.250c}{1-0.375} \\ & = & -0.400c\end{array} $$  {eq:eip-115}

**Discussion**
The minus sign indicates velocity away from the Earth (in the opposite direction from $v$), which means the canister is heading towards the Earth in part (a) and away in part (b), as expected. But relativistic velocities do not add as simply as they do classically. In part (a), the canister does approach the Earth faster, but not at the simple sum of  $1.250c$. The total velocity is less than you would get classically. And in part (b), the canister moves away from the Earth at a velocity of $-0.400c$, which is *faster* than the $−0.250c$ you would expect classically. The velocities are not even symmetric. In part (a) the canister moves $0.409c$ faster than the ship relative to the Earth, whereas in part (b) it moves  $0.900c$ slower than the ship.
:::

## Doppler Shift
Although the speed of light does not change with relative velocity, the frequencies and wavelengths of light do. First discussed for sound waves, a Doppler shift occurs in any wave when there is relative motion between source and observer.

:::note [] Relativistic Doppler Effects

The observed wavelength of electromagnetic radiation is longer (called a red shift) than that emitted by the source when the source moves away from the observer and shorter (called a blue shift) when the source moves towards the observer.

$$ {\text{=}\lambda}_{\text{obs}}{\text{=}\lambda}_{s}\sqrt{\frac{1+\frac{u}{c}}{1-\frac{u}{c}}}. $$  {eq:eip-158}

:::
In the Doppler equation, ${λ}_{\text{obs}}$ is the observed wavelength, ${λ}_{s}$ is the source wavelength, and $u$ is the relative velocity of the source to the observer. The velocity $u$ is positive for motion away from an observer and negative for motion toward an observer. In terms of source frequency and observed frequency, this equation can be written

$$ {f}_{\text{obs}}{\text{=f}}_{s}\sqrt{\frac{1-\frac{u}{c}}{1+\frac{u}{c}}}. $$  {eq:eip-73}

Notice that the – and + signs are different than in the wavelength equation.

:::note [] Career Connection: Astronomer

If you are interested in a career that requires a knowledge of special relativity, there’s probably no better connection than astronomy. Astronomers must take into account relativistic effects when they calculate distances, times, and speeds of black holes, galaxies, quasars, and all other astronomical objects. To have a career in astronomy, you need at least an undergraduate degree in either physics or astronomy, but a Master’s or doctoral degree is often required. You also need a good background in high-level mathematics.
:::

:::example {ex:fs-id2961720} Calculating a Doppler Shift: Radio Waves from a Receding Galaxy
Suppose a galaxy is moving away from the Earth at a speed $\text{0.825}c$ . It emits radio waves with a wavelength of $0\text{.}\text{525}\;\text{m}$. What wavelength would we detect on the Earth?
**Strategy**
Because the galaxy is moving at a relativistic speed, we must determine the Doppler shift of the radio waves using the relativistic Doppler shift instead of the classical Doppler shift.
**Solution**
1. Identify the knowns. $\text{u=}0\text{.}\text{825}c$
    ; ${λ}_{s}=0\text{.}\text{525}\;m$
2. Identify the unknown. ${λ}_{\text{obs}}$
3. Choose the appropriate equation. ${λ}_{\text{obs}}{\text{=}\lambda}_{s}\sqrt{\frac{1+\frac{u}{c}}{1-\frac{u}{c}}}$
4. Plug the knowns into the equation.
    

$$ \begin{array}{lll}{λ}_{\text{obs}} & = & {\lambda}_{s}\sqrt{\frac{1+\frac{u}{c}}{1-\frac{u}{c}}} \\ & = & (0.525 m)\sqrt{\frac{1+\frac{0\text{.}\text{825}\text{c}}{c}}{1-\frac{0\text{.}\text{825}\text{c}}{c}}} \\ & = & \text{1.70 m.}\end{array} $$  {eq:eip-52}

**Discussion**
Because the galaxy is moving away from the Earth, we expect the wavelengths of radiation it emits to be redshifted. The wavelength we calculated is 1.70 m, which is redshifted from the original wavelength of 0.525 m.
:::
The relativistic Doppler shift is easy to observe. This equation has everyday applications ranging from Doppler-shifted radar velocity measurements of transportation to Doppler-radar storm monitoring. In astronomical observations, the relativistic Doppler shift provides velocity information such as the motion and distance of stars.

:::exercise {eip-254} type=check-understanding Check Your Understanding

PROBLEM:
Suppose a space probe moves away from the Earth at a speed $0\text{.}\text{350}c$. It sends a radio wave message back to the Earth at a frequency of 1.50 GHz. At what frequency is the message received on the Earth?
SOLUTION:

$$ {f}_{\text{obs}}{\text{=f}}_{s}\sqrt{\frac{1-\frac{u}{c}}{1+\frac{u}{c}}}=(1\text{.}\text{50 GHz})\sqrt{\frac{1-\frac{0\text{.}\text{350}\text{c}}{c}}{1+\frac{0\text{.}\text{350}\text{c}}{c}}}=1\text{.}\text{04 GHz} $$  {eq:eip-id2444465}

:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id3762172} type=ap-test-prep 
PROBLEM:
What happens when velocities comparable to the speed of light are involved in an observation?
(a) Newton’s second law of motion, $F=ma$
, governs the motion of the object.
(b) Newton’s second law of motion, $F=ma$
, no longer governs the dynamics of the object.
(c) Such velocities cannot be determined mathematically.
(d) None of the above
:::

:::exercise {fs-id2630419} type=ap-test-prep 
PROBLEM:
How is the relativistic Doppler effect different from the classical Doppler effect?
SOLUTION:
The relativistic Doppler effect takes into account the special relativity concept of time dilation and also does not require a medium of propagation to be used as a point of reference (light does not require a medium for propagation).
:::

## Section Summary {section:section-summary}
- With classical velocity addition, velocities add like regular numbers in one-dimensional motion: $u=v+u'$, where $v$ is the velocity between two observers,

$u$ is the velocity of an object relative to one observer, and $u'$ is the velocity relative to the other observer.
- Velocities cannot add to be greater than the speed of light. Relativistic velocity addition describes the velocities of an object moving at a relativistic speed:

$$ \text{u=}\frac{v+u'}{1+\frac{v\text{u}'}{{c}^{2}}} $$  {eq:eip-373}

- An observer of electromagnetic radiation sees {term:relativistic Doppler effects} if the source of the radiation is moving relative to the observer. The wavelength of the radiation is longer (called a red shift) than that emitted by the source when the source moves away from the observer and shorter (called a blue shift) when the source moves toward the observer. The shifted wavelength is described by the equation
    

$$ {λ}_{\text{obs}}{\text{=}\lambda}_{s}\sqrt{\frac{1+\frac{u}{c}}{1-\frac{u}{c}}} $$  {eq:eip-823}

${λ}_{\text{obs}}$ is the observed wavelength, ${λ}_{s}$ is the source wavelength, and $u$ is the relative velocity of the source to the observer.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1493354} type=conceptual-questions 
PROBLEM:
Explain the meaning of the terms “red shift” and “blue shift” as they relate to the relativistic Doppler effect.
:::

:::exercise {fs-id2679250} type=conceptual-questions 
PROBLEM:
What happens to the relativistic Doppler effect when relative velocity is zero? Is this the expected result?
:::

:::exercise {fs-id2683301} type=conceptual-questions 
PROBLEM:
Is the relativistic Doppler effect consistent with the classical Doppler effect in the respect that ${λ}_{\text{obs}}$ is larger for motion away?
:::

:::exercise {fs-id2209137} type=conceptual-questions 
PROBLEM:
All galaxies farther away than about $\text{50}\times {\text{10}}^{6}\;\text{ly}$ exhibit a red shift in their emitted light that is proportional to distance, with those farther and farther away having progressively greater red shifts. What does this imply, assuming that the only source of red shift is relative motion? (Hint: At these large distances, it is space itself that is expanding, but the effect on light is the same.)
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1357569} type=problem-exercises 
PROBLEM:
Suppose a spaceship heading straight towards the Earth at $0\text{.}\text{750}c$ can shoot a canister at $0\text{.}\text{500}c$ relative to the ship. (a) What is the velocity of the canister relative to the Earth, if it is shot directly at the Earth? (b) If it is shot directly away from the Earth?
SOLUTION:
(a) $0\text{.}\text{909}c$
(b) $0\text{.}\text{400}c$
:::

:::exercise {fs-id2601119} type=problem-exercises 
PROBLEM:
Repeat the previous problem with the ship heading directly away from the Earth.
:::

:::exercise {fs-id1512938} type=problem-exercises 
PROBLEM:
If a spaceship is approaching the Earth at $0.100c$ and a message capsule is sent toward it at $0.100c$ relative to the Earth, what is the speed of the capsule relative to the ship?
SOLUTION:
$0\text{.}\text{198}c$
:::

:::exercise {fs-id1440845} type=problem-exercises 
PROBLEM:
(a) Suppose the speed of light were only $\text{3000 m/s}$. A jet fighter moving toward a target on the ground at $\text{800 m/s}$ shoots bullets, each having a muzzle velocity of $\text{1000 m/s}$. What are the bullets’ velocity relative to the target? (b) If the speed of light was this small, would you observe relativistic effects in everyday life? Discuss.
:::

:::exercise {fs-id2835463} type=problem-exercises 
PROBLEM:
If a galaxy moving away from the Earth has a speed of $1000 km/s$ and emits $\text{656 nm}$ light characteristic of hydrogen (the most common element in the universe). (a) What wavelength would we observe on the Earth? (b) What type of electromagnetic radiation is this? (c) Why is the speed of the Earth in its orbit negligible here?
SOLUTION:
a) $\text{658 nm}$
b) red
c) $v/\text{c}=9\text{.}\text{92}\times {\text{10}}^{-5}$ (negligible)
:::

:::exercise {fs-id1945618} type=problem-exercises 
PROBLEM:
A space probe speeding towards the nearest star moves at $0\text{.}\text{250}c$ and sends radio information at a broadcast frequency of 1.00 GHz. What frequency is received on the Earth?
:::

:::exercise {fs-id1419574} type=problem-exercises 
PROBLEM:
If two spaceships are heading directly towards each other at $0\text{.}\text{800}c$, at what speed must a canister be shot from the first ship to approach the other at $0\text{.}\text{999}c$ as seen by the second ship?
SOLUTION:
$0\text{.}\text{991}c$
:::

:::exercise {fs-id3255899} type=problem-exercises 
PROBLEM:
Two planets are on a collision course, heading directly towards each other at $0\text{.}\text{250}c$. A spaceship sent from one planet approaches the second at $0\text{.}\text{750}c$ as seen by the second planet. What is the velocity of the ship relative to the first planet?
:::

:::exercise {fs-id2733177} type=problem-exercises 
PROBLEM:
When a missile is shot from one spaceship towards another, it leaves the first at $0\text{.}\text{950}c$ and approaches the other at $0\text{.}\text{750}c$. What is the relative velocity of the two ships?
SOLUTION:
$-0\text{.}\text{696}c$
:::

:::exercise {fs-id2753552} type=problem-exercises 
PROBLEM:
What is the relative velocity of two spaceships if one fires a missile at the other at $0.750c$ and the other observes it to approach at $0.950c$?
:::

:::exercise {fs-id2772904} type=problem-exercises 
PROBLEM:
Near the center of our galaxy, hydrogen gas is moving directly away from us in its orbit about a black hole. We receive 1900 nm electromagnetic radiation and know that it was 1875 nm when emitted by the hydrogen gas. What is the speed of the gas?
SOLUTION:
$0\text{.}\text{01324}c$
:::

:::exercise {fs-id2638027} type=problem-exercises 
PROBLEM:
A highway patrol officer uses a device that measures the speed of vehicles by bouncing radar off them and measuring the Doppler shift. The outgoing radar has a frequency of 100 GHz and the returning echo has a frequency 15.0 kHz higher. What is the velocity of the vehicle? Note that there are two Doppler shifts in echoes. Be certain not to round off until the end of the problem, because the effect is small.
:::

:::exercise {fs-id2651524} type=problem-exercises 
PROBLEM:
Prove that for any relative velocity $v$ between two observers, a beam of light sent from one to the other will approach at speed $c$ (provided that $v$ is less than $c$, of course).
SOLUTION:
$u'\;=c$, so

$\begin{array}{lll}u & = & \frac{v+u'}{1+(vu′/{c}^{2})}=\frac{v+c}{1+(vc/{c}^{2})}=\frac{v+c}{1+(v/c)} \\ & = & \frac{c(v+c)}{c+v}=c\end{array}$
:::

:::exercise {fs-id2996441} type=problem-exercises 
PROBLEM:
Show that for any relative velocity $v$ between two observers, a beam of light projected by one directly away from the other will move away at the speed of light (provided that $v$ is less than $c$, of course).
:::

:::exercise {fs-id1566424} type=problem-exercises 
PROBLEM:
(a) All but the closest galaxies are receding from our own Milky Way Galaxy. If a galaxy $\text{12}\text{.}0\times {\text{10}}^{9}\;\text{ly}$ ly away is receding from us at 0.$0.900c$, at what velocity relative to us must we send an exploratory probe to approach the other galaxy at $0.990c$, as measured from that galaxy? (b) How long will it take the probe to reach the other galaxy as measured from the Earth? You may assume that the velocity of the other galaxy remains constant. (c) How long will it then take for a radio signal to be beamed back? (All of this is possible in principle, but not practical.)
SOLUTION:
a) $0\text{.}\text{99947}c$
b) $1\text{.}\text{2064}\times {\text{10}}^{\text{11}}\;\text{y}$
c) $1\text{.}\text{2058}\times {\text{10}}^{\text{11}}\;\text{y}$ (all to sufficient digits to show effects)
:::

## Glossary
- {def} **classical velocity addition**: the method of adding velocities when $v\text{<<}c$; velocities add like regular numbers in one-dimensional motion: $u=v+u'$, where $v$ is the velocity between two observers, $u$ is the velocity of an object relative to one observer, and $u'$ is the velocity relative to the other observer
- {def} **relativistic velocity addition**: the method of adding velocities of an object moving at a relativistic speed: $\text{u=}\frac{v+u'}{1+\frac{v\text{u}'}{{c}^{2}}}$, where $v$ is the relative velocity between two observers, $u$ is the velocity of an object relative to one observer, and $u'$ is the velocity relative to the other observer
- {def} **relativistic Doppler effects**: a change in wavelength of radiation that is moving relative to the observer; the wavelength of the radiation is longer (called a red shift) than that emitted by the source when the source moves away from the observer and shorter (called a blue shift) when the source moves toward the observer; the shifted wavelength is described by the equation
${λ}_{\text{obs}}{\text{=}\lambda}_{s}\sqrt{\frac{1+\frac{u}{c}}{1-\frac{u}{c}}}$
where ${λ}_{\text{obs}}$ is the observed wavelength, ${λ}_{s}$ is the source wavelength, and $u$ is the velocity of the source to the observer

# Damped Harmonic Motion

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Compare and discuss underdamped and overdamped oscillating systems.
- Explain critically damped system.

> FIGURE {fig:import-auto-id2615448} src=../../media/Figure_17_07_01.jpg
> alt: In the figure shown, a small child is seated in a spring swing, tied with a belt at his waist. In the back is his mother, who is pushing the swing in the to and fro motion.
> width: 200
> caption: In order to counteract dampening forces, this mom needs to keep pushing the swing. (credit: Erik A. Johnson, Flickr)

A guitar string stops oscillating a few seconds after being plucked. To keep a child happy on a swing, you must keep pushing. Although we can often make friction and other non-conservative forces negligibly small, completely undamped motion is rare. In fact, we may even want to damp oscillations, such as with car shock absorbers.
For a system that has a small amount of damping, the period and frequency are nearly the same as for simple harmonic motion, but the amplitude gradually decreases as shown in [ref:import-auto-id1577776]. This occurs because the non-conservative damping force removes energy from the system, usually in the form of thermal energy. In general, energy removal by non-conservative forces is described as

$$ {W}_{\text{nc}}=\Delta (\text{KE}+\text{PE})\text{,} $$  {eq:eip-478}

where ${W}_{\text{nc}}$ is work done by a non-conservative force (here the damping force). For a damped harmonic oscillator, ${W}_{\text{nc}}$ is negative because it removes mechanical energy (KE + PE) from the system.

> FIGURE {fig:import-auto-id1577776} src=../../media/Figure_17_07_02a.jpg
> alt: The figure shows a graph of displacement, along y axis, versus time for a harmonic oscillator, running along the x axis, equally in positive as well as negative quadrants. The amplitude, X, of the oscillations is shown by a green wave which is decreasing gradually as we move far from the y axis, but the time, T, shown here as the distance between adjacent crests remains the same throughout.
> width: 400
> caption: In this graph of displacement versus time for a harmonic oscillator with a small amount of damping, the amplitude slowly decreases, but the period and frequency are nearly the same as if the system were completely undamped.

If you gradually *increase* the amount of damping in a system, the period and frequency begin to be affected, because damping opposes and hence slows the back and forth motion. (The net force is smaller in both directions.) If there is very large damping, the system does not even oscillate—it slowly moves toward equilibrium. [ref:import-auto-id1999732] shows the displacement of a harmonic oscillator for different amounts of damping. When we want to damp out oscillations, such as in the suspension of a car, we may want the system to return to equilibrium as quickly as possible {term:Critical damping} is defined as the condition in which the damping of an oscillator results in it returning as quickly as possible to its equilibrium position. The critically damped system may overshoot the equilibrium position, but if it does, it will do so only once. Critical damping is represented by Curve A in [ref:import-auto-id1999732]. With less-than critical damping, the system will return to equilibrium faster but will overshoot and cross over one or more times. Such a system is {term:underdamped}; its displacement is represented by the curve in [ref:import-auto-id1577776]. Curve B in [ref:import-auto-id1999732] represents an {term:overdamped} system. As with critical damping, it too may overshoot the equilibrium position, but will reach equilibrium over a longer period of time.

> FIGURE {fig:import-auto-id1999732} src=../../media/Figure_17_07_03a.jpg
> alt: The given graph is of displacement, along y-axis, versus time along x axis. Symbol for displacement is given as X subscript zero and for time is given as t. Two curves start at a point along the y axis, where X subscript zero is greater than zero. Curve A is curved downward and meets x axis at a point. Curve B is curved upward and is over curve A and meets x axis at a point which is toward the far right of the meeting point of the curve A and x axis.
> width: 250
> caption: Displacement versus time for a critically damped harmonic oscillator (A) and an overdamped harmonic oscillator (B). The critically damped oscillator returns to equilibrium at $X=0$ in the smallest time possible without overshooting.

Critical damping is often desired, because such a system returns to equilibrium rapidly and remains at equilibrium as well. In addition, a constant force applied to a critically damped system moves the system to a new equilibrium position in the shortest time possible without overshooting or oscillating about the new position. For example, when you stand on bathroom scales that have a needle gauge, the needle moves to its equilibrium position without oscillating. It would be quite inconvenient if the needle oscillated about the new equilibrium position for a long time before settling. Damping forces can vary greatly in character. Friction, for example, is sometimes independent of velocity (as assumed in most places in this text). But many damping forces depend on velocity—sometimes in complex ways, sometimes simply being proportional to velocity.

:::example {ex:fs-id1427684} Damping an Oscillatory Motion: Friction on an Object Connected to a Spring
Damping oscillatory motion is important in many systems, and the ability to control the damping is even more so. This is generally attained using non-conservative forces such as the friction between surfaces, and viscosity for objects moving through fluids. The following example considers friction. Suppose a 0.200-kg object is connected to a spring as shown in [ref:import-auto-id2598999], but there is simple friction between the object and the surface, and the coefficient of friction ${μ}_{k}$ is equal to 0.0800. (a) What is the frictional force between the surfaces? (b) What total distance does the object travel if it is released 0.100 m from equilibrium, starting at $v=0$? The force constant of the spring is $k=\text{50}\text{.}0 N/m$.

> FIGURE {fig:import-auto-id2598999} src=../../media/Figure_17_07_04a.jpg
> alt:  The given figure (a) shows a spring on a frictionless surface attached to a bar or wall from the left side and on the right side of the spring, there is an object attached with mass m. Its amplitude is given by X, and X is equal to zero at the equilibrium level. Force F is applied to it from the right side, represented by a red arrow pointing toward the left and velocity v is equal to zero. An arrow showing the direction of force is also given alongside this figure as well as with the other four figures. The energy of the object is half k x squared.           In the given figure (b), after force is applied, the object moves to the left, compressing the spring slightly. The displacement of the object from its initial position is indicated by dots. The force F, here is equal to zero and velocity v, is maximum in the negative direction or the left. The energy of the object in this case is half m times negative v-max whole squared.           In the given figure (c), the spring has been compressed the maximum limit, and the amplitude is minus X. Now the force is toward the right, indicated here with a red arrow pointing to the right and the velocity, v, is zero. The energy of the object now is half k times negative x whole squared.           In the given figure (d), the spring is shown released from its compressed position and the object has moved toward the right side to reach the equilibrium level. Here, F is equal to zero, and the velocity, v, is the maximum. The energy of the object becomes half k times v max squared.           In the given figure (e), the spring has been stretched loose to the maximum possible limit and the object has moved to the far right. Now the velocity v, here is equal to zero and the direction of force is toward the left. As shown here, F is equal to zero. The energy of the object in this case is half k times x squared.
> width: 450
> caption: The transformation of energy in simple harmonic motion is illustrated for an object attached to a spring on a frictionless surface.

**Strategy**
This problem requires you to integrate your knowledge of various concepts regarding waves, oscillations, and damping. To solve an integrated concept problem, you must first identify the physical principles involved. Part (a) is about the frictional force. This is a topic involving the application of Newton’s Laws. Part (b) requires an understanding of work and conservation of energy, as well as some understanding of horizontal oscillatory systems.
Now that we have identified the principles we must apply in order to solve the problems, we need to identify the knowns and unknowns for each part of the question, as well as the quantity that is constant in Part (a) and Part (b) of the question.
**Solution a**
1. Choose the proper equation: Friction is $f={μ}_{k}\text{mg}$.
2. Identify the known values.
3. Enter the known values into the equation:
    

$$ f=\text{(0.0800)}(0\text{.200 kg)}(9\text{.80 m}/{\text{s}}^{\text{2}}\text{)}. $$  {eq:import-auto-id1393391}

4. Calculate and convert units:
$f=\text{0.157 N}.$
**Discussion a**
The force here is small because the system and the coefficients are small.
**Solution b**
Identify the known:
- The system involves elastic potential energy as the spring compresses and expands, friction that is related to the work done, and the kinetic energy as the body speeds up and slows down.
- Energy is not conserved as the mass oscillates because friction is a non-conservative force.
- The motion is horizontal, so gravitational potential energy does not need to be considered.
- Because the motion starts from rest, the energy in the system is initially ${\text{PE}}_{el,i}=(1/2){\text{kX}}^{2}$. This energy is removed by work done by friction ${W}_{\text{nc}}=-\text{fd}$, where
$d$
 is the total distance traveled and $f={μ}_{\text{k}}\text{mg}$ is the force of friction.  When the system stops moving, the friction force will balance the force exerted by the spring, so  ${\text{PE}}_{\text{e1,f}}=(1/2){\text{kx}}^{2}$ where  $x$ is the final position and is given by

$$ \begin{array}{lll}{F}_{\text{el}} & = & f \\ \text{kx} & = & {μ}_{\text{k}}\text{mg} \\ x & = & \frac{{μ}_{\text{k}}\text{mg}}{k}\end{array}. $$  {eq:eip-id2653335}

1. By equating the work done to the energy removed, solve for the distance
$d$
.
2. The work done by the non-conservative forces equals the initial, stored elastic potential energy. Identify the correct equation to use:
    

$$ {\text{W}}_{\text{nc}}=\Delta (\text{KE}+\text{PE})={\text{PE}}_{\text{el,f}}-{\text{PE}}_{\text{el,i}}=\frac{1}{2}k({(\frac{{μ}_{k}\text{mg}}{k})}^{2}-{X}^{2}). $$  {eq:import-auto-id1432098}

3. Recall that ${W}_{\text{nc}}=-\text{fd}$.
4. Enter the friction as $f={μ}_{\text{k}}\text{mg}$ into ${W}_{\text{nc}}=-\text{fd}$, thus
    

$$ {W}_{\text{nc}}={-μ}_{\text{k}}\text{mgd}. $$  {eq:import-auto-id3080578}

5. Combine these two equations to find
    

$$ \frac{1}{2}k({(\frac{{μ}_{k}\text{mg}}{k})}^{2}-{X}^{2})=-{μ}_{\text{k}}\text{mgd}. $$  {eq:import-auto-id2591277}

6. Solve the equation for
$d$
:
    

$$ d=\frac{\text{k}}{{\text{2}μ}_{\text{k}}\text{mg}}({X}^{2}-{(\frac{{μ}_{\text{k}}\text{mg}}{k})}^{2}). $$  {eq:import-auto-id3209867}

7. Enter the known values into the resulting equation:
    

$$ \begin{array}{l}d= \\ \frac{50.0 N/m}{2(0.0800)(0.200\;\text{kg})(9.80\;{\text{m/s}}^{2})}({(0.100\;\text{m})}^{2}-{(\frac{(0.0800)(0.200\;\text{kg})(9.80\;{\text{m/s}}^{2})}{50.0\;\text{N/m}})}^{2}).\end{array} $$  {eq:import-auto-id2429079}

8. Calculate
$d$
 and convert units:
    

$$ d=1\text{.}\text{59}\;\text{m}. $$  {eq:import-auto-id3164118}

**Discussion b**
This is the total distance traveled back and forth across $x=0$, which is the undamped equilibrium position. The number of oscillations about the equilibrium position will be more than $d/X=(1\text{.}\text{59}\;\text{m})/(0\text{.}\text{100}\;\text{m})=\text{15}\text{.}9$ because the amplitude of the oscillations is decreasing with time. At the end of the motion, this system will not return to $x=0$ for this type of damping force, because static friction will exceed the restoring force. This system is underdamped. In contrast, an overdamped system with a simple constant damping force would not cross the equilibrium position $x=0$ a single time. For example, if this system had a damping force 20 times greater, it would only move 0.0484 m toward the equilibrium position from its original 0.100-m position.
This worked example illustrates how to apply problem-solving strategies to situations that integrate the different concepts you have learned. The first step is to identify the physical principles involved in the problem. The second step is to solve for the unknowns using familiar problem-solving strategies. These are found throughout the text, and many worked examples show how to use them for single topics. In this integrated concepts example, you can see how to apply them across several topics. You will find these techniques useful in applications of physics outside a physics course, such as in your profession, in other science disciplines, and in everyday life.
:::

:::exercise {fs-id3256580} type=check-understanding Check Your Understanding

PROBLEM:
Why are completely undamped harmonic oscillators so rare?
SOLUTION:
Friction often comes into play whenever an object is moving. Friction causes damping in a harmonic oscillator.
:::

:::exercise {fs-id2611418} type=check-understanding Check Your Understanding

PROBLEM:
Describe the difference between overdamping, underdamping, and critical damping.
SOLUTION:
An overdamped system moves slowly toward equilibrium. An underdamped system moves quickly to equilibrium, but will oscillate about the equilibrium point as it does so. A critically damped system moves as quickly as possible toward equilibrium without oscillating about the equilibrium.
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1927486} type=ap-test-prep 
PROBLEM:
The non-conservative damping force removes energy from a system in which form?
(a) Mechanical energy
(b) Electrical energy
(c) Thermal energy
(d) None of the above
SOLUTION:
(c)
:::

:::exercise {fs-id3337953} type=ap-test-prep 
PROBLEM:
The time rate of change of mechanical energy for a damped oscillator is always:
(a) 0
(b) Negative
(c) Positive
(d) Undefined
:::

:::exercise {fs-id1548549} type=ap-test-prep 
PROBLEM:
A 0.5-kg object is connected to a spring that undergoes oscillatory motion. There is friction between the object and the surface it is kept on given by coefficient of friction ${μ}_{k} = 0.06$. If the object is released 0.2 m from equilibrium, what is the distance that the object travels? Given that the force constant of the spring is 50 N m<sup>-1</sup> and the frictional force between the objects is 0.294 N.
SOLUTION:
$d = \frac{k}{2{μ}_{K}mg}{({X}^{2}-\frac{{μ}_{K}mg}{k})}^{2}$   $where k = 50 \text{N}⋅{\text{m}}^{-1}$    ${μ}_{k} = 0.06$  $m = 0.5\text{kg}$   $d = \frac{50\text{N}⋅{\text{m}}^{-1}}{2\times 0.06\times 9.8\text{m}⋅{\text{s}}^{-2}}({(0.2)}^{2}-(\frac{{(0.06\times 0.5\text{kg}\times 9.8\text{m}⋅{\text{s}}^{-2})}^{2}}{{(50\text{N}⋅{\text{m}}^{-1})}^{2}}))$   $= 1.698 \text{m}$
:::

## Section Summary {section:section-summary}
- Damped harmonic oscillators have non-conservative forces that dissipate their energy.
- Critical damping returns the system to equilibrium as fast as possible without overshooting.
- An underdamped system will oscillate through the equilibrium position.
- An overdamped system moves more slowly toward equilibrium than one that is critically damped.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id990795} type=conceptual-questions 
PROBLEM:
Give an example of a damped harmonic oscillator. (They are more common than undamped or simple harmonic oscillators.)
:::

:::exercise {fs-id1352100} type=conceptual-questions 
PROBLEM:
How would a car bounce after a bump under each of these conditions?  
- overdamping
- underdamping
- critical damping

:::

:::exercise {fs-id1941660} type=conceptual-questions 
PROBLEM:
Most harmonic oscillators are damped and, if undriven, eventually come to a stop. How is this observation related to the second law of thermodynamics?
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1941607} type=problems-exercises 
PROBLEM:
The amplitude of a lightly damped oscillator decreases by $3\text{.}0%$ during each cycle. What percentage of the mechanical energy of the oscillator is lost in each cycle?
:::

## Glossary
- {def} **critical damping**: the condition in which the damping of an oscillator causes it to return as quickly as possible to its equilibrium position without oscillating back and forth about this position
- {def} **over damping**: the condition in which damping of an oscillator causes it to return to equilibrium without oscillating; oscillator moves more slowly toward equilibrium than in the critically damped system
- {def} **under damping**: the condition in which damping of an oscillator causes it to return to equilibrium with the amplitude gradually decreasing to zero; system returns to equilibrium faster but overshoots and crosses the equilibrium position one or more times

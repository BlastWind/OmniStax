# Torque on a Current Loop: Motors and Meters

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Describe how motors and meters work in terms of torque on a current loop.
- Calculate the torque on a current-carrying loop in a magnetic field.
{term:Motors} are the most common application of magnetic force on current-carrying wires. Motors have loops of wire in a magnetic field. When current is passed through the loops, the magnetic field exerts torque on the loops, which rotates a shaft. Electrical energy is converted to mechanical work in the process. (See [ref:import-auto-id1615457].)

> FIGURE {fig:import-auto-id1615457} src=../../media/Figure_23_08_01a.jpg
> alt: Diagram showing a current-carrying loop of width w and length l between the north and south poles of a magnet. The north pole is to the left and the south pole is to the right of the loop. The magnetic field B runs from the north pole across the loop to the south pole. The loop is shown at an instant, while rotating clockwise. The current runs up the left side of the loop, across the top, and down the right side. There is a force F oriented into the page on the left side of the loop and a force F oriented out of the page on the right side of the loop. The torque on the loop is clockwise as viewed from above.
> width: 330
> caption: Torque on a current loop. A current-carrying loop of wire attached to a vertically rotating shaft feels magnetic forces that produce a clockwise torque as viewed from above.

Let us examine the force on each segment of the loop in [ref:import-auto-id1615457] to find the torques produced about the axis of the vertical shaft. (This will lead to a useful equation for the torque on the loop.) We take the magnetic field to be uniform over the rectangular loop, which has width $w$ and height $l$. First, we note that the forces on the top and bottom segments are vertical and, therefore, parallel to the shaft, producing no torque. Those vertical forces are equal in magnitude and opposite in direction, so that they also produce no net force on the loop. [ref:import-auto-id2330568] shows views of the loop from above. Torque is defined as $τ=\text{rF}\;\text{sin}\;\theta$, where $F$ is the force, $r$ is the distance from the pivot that the force is applied, and $\theta$ is the angle between $r$ and $F$. As seen in [ref:import-auto-id2330568](a), right hand rule 1 gives the forces on the sides to be equal in magnitude and opposite in direction, so that the net force is again zero. However, each force produces a clockwise torque. Since $r=w/2$, the torque on each vertical segment is $(w/2)F\;\text{sin}\;\theta$, and the two add to give a total torque.

$$ τ=\frac{w}{2}F\;\text{sin}\;\theta +\frac{w}{2}F\;\text{sin}\;\theta =\text{wF}\;\text{sin}\;\theta $$  {eq:eip-287}

> FIGURE {fig:import-auto-id2330568} src=../../media/Figure_23_08_02a.jpg
> alt: Diagram showing a current-carrying loop from the top, and four different times as it rotates in a magnetic field. The magnetic field oriented toward the right, perpendicular to the vertical dimension of the loop. In figure a, the top view of the loop is oriented at an angle to the magnetic field lines, which run left to right. The force on the loop is up on the lower left side where the current comes out of the page. The force is down on the upper right side where the loop goes into the page. The angle between the force and the loop is theta. Torque is clockwise and equals w over 2 times I l B sine theta. Figure b shows the top view of the loop parallel to the magnetic field lines. The force on the loop is up on the left side where I comes out of the page. The force on the loop is down on the right side where I goes into the page. The angle theta between the F and B is ninety degrees. Torque is clockwise and equals w over 2 I l B equals maximum torque. Figure c shows the top view of the loop oriented perpendicular to B. The force on the loop is up at the top, where I comes out of the page, and down at the bottom where I goes into the page. Theta equals 0 degrees. Torque equals zero since sine theta equals 0. In figure d the force is down on the lower left side of the loop where I goes in, and up on the upper right side of the loop where I comes out. The torque is counterclockwise. Torque is negative.
> width: 600
> caption: Top views of a current-carrying loop in a magnetic field. (a) The equation for torque is derived using this view. Note that the perpendicular to the loop makes an angle $\theta$ with the field that is the same as the angle between $w/2$ and $F$. (b) The maximum torque occurs when $\theta$ is a right angle and $\text{sin}\;\theta =1$. (c) Zero (minimum) torque occurs when $\theta$ is zero and $\text{sin}\;\theta =0$. (d) The torque reverses once the loop rotates past $\theta =0$.

Now, each vertical segment has a length $l$ that is perpendicular to $B$, so that the force on each is $F=\text{IlB}$. Entering $F$ into the expression for torque yields

$$ τ=\text{wIlB}\;\text{sin}\;\theta . $$  {eq:eip-662}

If we have a multiple loop of $N$ turns, we get $N$ times the torque of one loop. Finally, note that the area of the loop is $A=\text{wl}$; the expression for the torque becomes

$$ τ=\text{NIAB}\;\text{sin}\;\theta . $$  {eq:eip-362}

This is the torque on a current-carrying loop in a uniform magnetic field. This equation can be shown to be valid for a loop of any shape. The loop carries a current $I$, has $N$ turns, each of area $A$, and the perpendicular to the loop makes an angle $\theta$ with the field $B$. The net force on the loop is zero.

:::example {ex:fs-id1982229} Calculating Torque on a Current-Carrying Loop in a Strong Magnetic Field
Find the maximum torque on a 100-turn square loop of a wire of 10.0 cm on a side that carries 15.0 A of current in a 2.00-T field.
**Strategy**
Torque on the loop can be found using $τ=\text{NIAB}\;\text{sin}\;\theta$. Maximum torque occurs when $\theta =\text{90º}$ and $\text{sin}\;\theta =1$.
**Solution**
For $\text{sin}\;\theta =1$, the maximum torque is

$$ {τ}_{\text{max}}=\text{NIAB}. $$  {eq:eip-370}

Entering known values yields

$$ \begin{array}{lll}{τ}_{\text{max}} & = & (\text{100})(\text{15.0 A})(\text{0.100}\;{\text{m}}^{2})(2\text{.}\text{00 T}) \\ & = & \text{30.0 N}⋅m.\end{array} $$  {eq:eip-447}

**Discussion**
This torque is large enough to be useful in a motor.
:::
The torque found in the preceding example is the maximum. As the coil rotates, the torque decreases to zero at $\theta =0$. The torque then *reverses* its direction once the coil rotates past $\theta =0$. (See [ref:import-auto-id2330568](d).) This means that, unless we do something, the coil will oscillate back and forth about equilibrium at $\theta =0$. To get the coil to continue rotating in the same direction, we can reverse the current as it passes through $\theta =0$ with automatic switches called *brushes*. (See [ref:import-fig03].)

> FIGURE {fig:import-fig03} src=../../media/Figure_23_08_03a.jpg
> alt: The diagram shows a current-carrying loop between the north and south poles of a magnet at two different times. The north pole is to the left and the south pole is to the right. The magnetic field runs from the north pole to the right to the south pole. Figure a shows the current running through the loop. It runs up on the left side, and down on the right side. The force on the left side is into the page. The force on the right side is out of the page. The torque is clockwise when viewed from above. Figure b shows the loop when it is oriented perpendicular to the magnet. In both diagrams, the bottom of each side of the loop is connected to a half-cylinder that is next to a rectangular brush that is then connected to the rest of the circuit.
> width: 400
> caption: (a) As the angular momentum of the coil carries it through $\theta =0$, the brushes reverse the current to keep the torque clockwise. (b) The coil will rotate continuously in the clockwise direction, with the current reversing each half revolution to maintain the clockwise torque.

{term:Meters}, such as those in analog fuel gauges on a car, are another common application of magnetic torque on a current-carrying loop. [ref:import-auto-id2028294] shows that a meter is very similar in construction to a motor. The meter in the figure has its magnets shaped to limit the effect of $\theta$ by making $B$ perpendicular to the loop over a large angular range. Thus the torque is proportional to $I$ and not $\theta$. A linear spring exerts a counter-torque that balances the current-produced torque. This makes the needle deflection proportional to $I$. If an exact proportionality cannot be achieved, the gauge reading can be calibrated. To produce a galvanometer for use in analog voltmeters and ammeters that have a low resistance and respond to small currents, we use a large loop area $A$, high magnetic field $B$, and low-resistance coils.

> FIGURE {fig:import-auto-id2028294} src=../../media/Figure_23_08_04a.jpg
> alt: Diagram of a meter showing a current-carrying loop between two poles of a magnet. The torque on the magnet is clockwise. The top of the loop is connected to a spring and to a pointer that points to a scale as the loop rotates.
> width: 350
> caption: Meters are very similar to motors but only rotate through a part of a revolution. The magnetic poles of this meter are shaped to keep the component of $B$ perpendicular to the loop constant, so that the torque does not depend on $\theta$ and the deflection against the return spring is proportional only to the current $I$.

## Section Summary {section:section-summary}
- The torque $τ$ on a current-carrying loop of any shape in a uniform magnetic field. is

$$ τ=\text{NIAB}\;\text{sin}\;\theta , $$  {eq:eip-id1168952555931}

where $N$ is the number of turns, $I$ is the current, $A$ is the area of the loop, $B$ is the magnetic field strength, and $\theta$ is the angle between the perpendicular to the loop and the magnetic field.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1347587} type=conceptual-questions 
PROBLEM:
Draw a diagram and use RHR-1 to show that the forces on the top and bottom segments of the motor’s current loop in [ref:import-auto-id1615457] are vertical and produce no torque about the axis of rotation.
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1615066} type=problems-exercises 
PROBLEM:
(a) By how many percent is the torque of a motor decreased if its permanent magnets lose 5.0% of their strength? (b) How many percent would the current need to be increased to return the torque to original values?
SOLUTION:
(a) $\text{}\tau$ decreases by 5.00% if B decreases by 5.00%
(b) 5.26% increase
:::

:::exercise {fs-id865642} type=problems-exercises 
PROBLEM:
(a) What is the maximum torque on a 150-turn square loop of wire 18.0 cm on a side that carries a 50.0-A current in a 1.60-T field? (b) What is the torque when $\theta$ is $\text{10}\text{.}9º?$
:::

:::exercise {eip-32} type=problems-exercises 
PROBLEM:
Find the current through a loop needed to create a maximum torque of $9\text{.}\text{00 N}⋅\text{m.}$ The loop has 50 square turns that are 15.0 cm on a side and is in a uniform 0.800-T magnetic field.
SOLUTION:
10.0 A
:::

:::exercise {fs-id1312411} type=problems-exercises 
PROBLEM:
Calculate the magnetic field strength needed on a 200-turn square loop 20.0 cm on a side to create a maximum torque of $\text{300 N}⋅\text{m}$ if the loop is carrying 25.0 A.
:::

:::exercise {fs-id2925094} type=problems-exercises 
PROBLEM:
Since the equation for torque on a current-carrying loop is $τ=\text{NIAB}\;\text{sin}\;\theta$, the units of $N⋅m$ must equal units of $A⋅{m}^{2}\;T$. Verify this.
SOLUTION:
$A⋅{m}^{2}⋅T=A⋅{m}^{2}(\frac{N}{A⋅m})=N⋅m$.
:::

:::exercise {fs-id1413114} type=problems-exercises 
PROBLEM:
(a) At what angle $\theta$ is the torque on a current loop 90.0% of maximum? (b) 50.0% of maximum? (c) 10.0% of maximum?
:::

:::exercise {fs-id1554187} type=problems-exercises 
PROBLEM:
A proton has a magnetic field due to its spin on its axis. The field is similar to that created by a circular current loop $0\text{.}\text{650}\times {\text{10}}^{-\text{15}}\;m$ in radius with a current of $1\text{.}\text{05}\times {\text{10}}^{4}\;A$ (no kidding). Find the maximum torque on a proton in a 2.50-T field. (This is a significant torque on a small particle.)
SOLUTION:
$3\text{.}\text{48}\times {\text{10}}^{-\text{26}}\;N⋅m$
:::

:::exercise {fs-id1369997} type=problems-exercises 
PROBLEM:
(a) A 200-turn circular loop of radius 50.0 cm is vertical, with its axis on an east-west line. A current of 100 A circulates clockwise in the loop when viewed from the east. The Earth’s field here is due north, parallel to the ground, with a strength of $3\text{.}\text{00}\times {\text{10}}^{-5}\;T$. What are the direction and magnitude of the torque on the loop? (b) Does this device have any practical applications as a motor?
:::

:::exercise {fs-id2089664} type=problems-exercises 
PROBLEM:
Repeat [ref:fs-id1615066], but with the loop lying flat on the ground with its current circulating counterclockwise (when viewed from above) in a location where the Earth’s field is north, but at an angle $\text{45}\text{.}0º$ below the horizontal and with a strength of $\text{6.}\text{00}\times {\text{10}}^{-5}\;T$.
SOLUTION:
(a) $\text{0.666 N}⋅m$ west
(b) This is not a very significant torque, so practical use would be limited. Also, the current would need to be alternated to make the loop rotate (otherwise it would oscillate).
:::

## Glossary
- {def} **motor**: loop of wire in a magnetic field; when current is passed through the loops, the magnetic field exerts torque on the loops, which rotates a shaft; electrical energy is converted to mechanical work in the process
- {def} **meter**: common application of magnetic torque on a current-carrying loop that is very similar in construction to a motor; by design, the torque is proportional to  $I$ and not  $\theta$, so the needle deflection is proportional to the current

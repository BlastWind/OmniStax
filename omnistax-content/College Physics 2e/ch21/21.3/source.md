# Kirchhoff’s Rules

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Analyze a complex circuit using Kirchhoff’s rules, using the conventions for determining the correct signs of various terms.
Many complex circuits, such as the one in [ref:import-auto-id1907339], cannot be analyzed with the series-parallel techniques developed in [Resistors in Series and Parallel](module:m42356) and [Electromotive Force: Terminal Voltage](module:m42357). There are, however, two circuit analysis rules that can be used to analyze any circuit, simple or complex. These rules are special cases of the laws of conservation of charge and conservation of energy. The rules are known as {term:Kirchhoff’s rules}, after their inventor Gustav Kirchhoff (1824–1887).

> FIGURE {fig:import-auto-id1907339} src=../../media/Figure_22_03_01.jpg
> alt: A complicated circuit diagram shows multiple resistances and voltage sources wired in series and in parallel. The circuit has three arms. The first has a cell of e m f script E sub one and internal resistance r sub one in series with a resistor R sub two. The second has a cell of e m f script E sub two and internal resistance r sub two in series with resistor R sub three. The third arm has a resistor R sub one. The three arms are connected in parallel.
> width: 175
> caption: This circuit cannot be reduced to a combination of series and parallel connections. Kirchhoff’s rules, special applications of the laws of conservation of charge and energy, can be used to analyze it. (Note: The script E in the figure represents electromotive force, emf.)

:::note [] Kirchhoff’s Rules

- Kirchhoff’s first rule—the junction rule. The sum of all currents entering a junction must equal the sum of all currents leaving the junction.
- Kirchhoff’s second rule—the loop rule. The algebraic sum of changes in potential around any closed circuit path (loop) must be zero.
:::
Explanations of the two rules will now be given, followed by problem-solving hints for applying Kirchhoff’s rules, and a worked example that uses them.

## Kirchhoff’s First Rule
Kirchhoff’s first rule (the {term:junction rule}) is an application of the conservation of charge to a junction; it is illustrated in [ref:import-auto-id2052595]. Current is the flow of charge, and charge is conserved; thus, whatever charge flows into the junction must flow out. Kirchhoff’s first rule requires that ${I}_{1}={I}_{2}+{I}_{3}$ (see figure). Equations like this can and will be used to analyze circuits and to solve circuit problems.

:::note [] Making Connections: Conservation Laws

Kirchhoff’s rules for circuit analysis are applications of {term:conservation laws} to circuits. The first rule is the application of conservation of charge, while the second rule is the application of conservation of energy. Conservation laws, even used in a specific application, such as circuit analysis, are so basic as to form the foundation of that application.
:::

> FIGURE {fig:import-auto-id2052595} src=../../media/Figure_22_03_02.jpg
> alt: This schematic drawing shows a T-junction, with one current I sub one flowing into the T and two currents I sub two and I sub three flowing out of the T junction.
> width: 180
> caption: The junction rule. The diagram shows an example of Kirchhoff’s first rule where the sum of the currents into a junction equals the sum of the currents out of a junction. In this case, the current going into the junction splits and comes out as two currents, so that ${I}_{1}={I}_{2}+{I}_{3}$. Here ${I}_{1}$ must be 11 A, since ${I}_{2}$ is 7 A and ${I}_{3}$ is 4 A.

## Kirchhoff’s Second Rule
Kirchhoff’s second rule (the {term:loop rule}) is an application of conservation of energy. The loop rule is stated in terms of potential, $V$, rather than potential energy, but the two are related since ${\text{PE}}_{\text{elec}}=\text{qV}$. Recall that {term:emf} is the potential difference of a source when no current is flowing.  In a closed loop, whatever energy is supplied by emf must be transferred into other forms by devices in the loop, since there are no other ways in which energy can be transferred into or out of the circuit. [ref:import-auto-id1024606] illustrates the changes in potential in a simple series circuit loop.
Kirchhoff’s second rule requires $\text{emf}-\text{Ir}-{\text{IR}}_{1}-{\text{IR}}_{2}=0$. Rearranged, this is $\text{emf}=\text{Ir}+{\text{IR}}_{1}+{\text{IR}}_{2}$, which means the emf equals the sum of the $\text{IR}$ (voltage) drops in the loop.

> FIGURE {fig:import-auto-id1024606} src=../../media/Figure_22_03_03.jpg
> alt: Part a shows a schematic of a simple circuit that has a voltage source in series with two load resistors. The voltage source has an e m f, labeled script E, of eighteen volts. The voltage drops are one volt across the internal resistance and twelve volts and five volts across the two load resistances. Part b is a perspective drawing corresponding to the circuit in part a. The charge is raised in potential by the e m f and lowered by the resistances.
> width: 200
> caption: The loop rule. An example of Kirchhoff’s second rule where the sum of the changes in potential around a closed loop must be zero. (a) In this standard schematic of a simple series circuit, the emf supplies 18 V, which is reduced to zero by the resistances, with 1 V across the internal resistance, and 12 V and 5 V across the two load resistances, for a total of 18 V. (b) This perspective view represents the potential as something like a roller coaster, where charge is raised in potential by the emf and lowered by the resistances. (Note that the script E stands for emf.)

## Applying Kirchhoff’s Rules
By applying Kirchhoff’s rules, we generate equations that allow us to find the unknowns in circuits. The unknowns may be currents, emfs, or resistances. Each time a rule is applied, an equation is produced. If there are as many independent equations as unknowns, then the problem can be solved. There are two decisions you must make when applying Kirchhoff’s rules. These decisions determine the signs of various quantities in the equations you obtain from applying the rules.
1. When applying Kirchhoff’s first rule, the junction rule, you must label the current in each branch and decide in what direction it is going. For example, in [ref:import-auto-id1907339], [ref:import-auto-id2052595], and [ref:import-auto-id1024606], currents are labeled ${I}_{1}$, ${I}_{2}$, ${I}_{3}$, and $I$, and arrows indicate their directions. There is no risk here, for if you choose the wrong direction, the current will be of the correct magnitude but negative.
2. When applying Kirchhoff’s second rule, the loop rule, you must identify a closed loop and decide in which direction to go around it, clockwise or counterclockwise. For example, in [ref:import-auto-id1024606] the loop was traversed in the same direction as the current (clockwise). Again, there is no risk; going around the circuit in the opposite direction reverses the sign of every term in the equation, which is like multiplying both sides of the equation by $–1.$
[ref:import-auto-id3116736] and the following points will help you get the plus or minus signs right when applying the loop rule. Note that the resistors and emfs are traversed by going from a to b. In many circuits, it will be necessary to construct more than one loop. In traversing each loop, one needs to be consistent for the sign of the change in potential. (See [ref:fs-id3008416].)

> FIGURE {fig:import-auto-id3116736} src=../../media/Figure_22_03_04.jpg
> alt: This figure shows four situations where current flows through either a resistor or a source, and the calculation of the potential change across each. The first two diagrams show the potential drop across a resistor, with the current flowing from left to right or right to left. The other two diagrams show a potential drop across a voltage source, when the terminals are in one orientation and then another.
> width: 350
> caption: Each of these resistors and voltage sources is traversed from a to b. The potential changes are shown beneath each element and are explained in the text. (Note that the script E stands for emf.)

- When a resistor is traversed in the same direction as the current, the change in potential is $-\text{IR}$. (See [ref:import-auto-id3116736].)
- When a resistor is traversed in the direction opposite to the current, the change in potential is $+\text{IR}$. (See [ref:import-auto-id3116736].)
- When an emf is traversed from $-$ to + (the same direction it moves positive charge), the change in potential is +emf. (See [ref:import-auto-id3116736].)
- When an emf is traversed from + to $-$ (opposite to the direction it moves positive charge), the change in potential is $-$emf. (See [ref:import-auto-id3116736].)

:::example {ex:fs-id3008416} Calculating Current: Using Kirchhoff’s Rules
Find the currents flowing in the circuit in [ref:import-auto-id2440725].

> FIGURE {fig:import-auto-id2440725} src=../../media/Figure_22_03_05.jpg
> alt: The diagram shows a complex circuit with two voltage sources E sub one and E sub two and several resistive loads, wired in two loops and two junctions. Several points on the diagram are marked with letters a through h. The current in each branch is labeled separately.
> width: 300
> caption: This circuit is similar to that in [ref:import-auto-id1907339], but the resistances and emfs are specified. (Each emf is denoted by script E.) The currents in each branch are labeled and assumed to move in the directions shown. This example uses Kirchhoff’s rules to find the currents.

**Strategy**
This circuit is sufficiently complex that the currents cannot be found using Ohm’s law and the series-parallel techniques—it is necessary to use Kirchhoff’s rules. Currents have been labeled ${I}_{1}$, ${I}_{2}$, and ${I}_{3}$ in the figure and assumptions have been made about their directions. Locations on the diagram have been labeled with letters a through h. In the solution we will apply the junction and loop rules, seeking three independent equations to allow us to solve for the three unknown currents.
**Solution**
We begin by applying Kirchhoff’s first or junction rule at point a. This gives

$$ {I}_{1}={I}_{2}+{I}_{3}, $$  {eq:eip-893}

since ${I}_{1}$ flows into the junction, while ${I}_{2}$ and ${I}_{3}$ flow out. Applying the junction rule at e produces exactly the same equation, so that no new information is obtained. This is a single equation with three unknowns—three independent equations are needed, and so the loop rule must be applied.
Now we consider the loop abcdea. Going from a to b, we traverse ${R}_{2}$ in the same (assumed) direction of the current ${I}_{2}$, and so the change in potential is $-{I}_{2}{R}_{2}$. Then going from b to c, we go from $-$ to +, so that the change in potential is $+{\text{emf}}_{1}$. Traversing the internal resistance ${r}_{1}$ from c to d gives $-{I}_{2}{r}_{1}$. Completing the loop by going from d to a again traverses a resistor in the same direction as its current, giving a change in potential of $-{I}_{1}{R}_{1}$.
The loop rule states that the changes in potential sum to zero. Thus,

$$ -{I}_{2}{R}_{2}+{\text{emf}}_{1}-{I}_{2}{r}_{1}-{I}_{1}{R}_{1}=-{I}_{2}({R}_{2}+{r}_{1})+{\text{emf}}_{1}-{I}_{1}{R}_{1}=0. $$  {eq:eip-476}

Substituting values from the circuit diagram for the resistances and emf, and canceling the ampere unit gives

$$ -{3I}_{2}+\text{18}-{6I}_{1}=0. $$  {eq:eip-366}

Now applying the loop rule to aefgha (we could have chosen abcdefgha as well) similarly gives

$$ +\;{I}_{1}{R}_{1}+{I}_{3}{R}_{3}+{I}_{3}{r}_{2}-{\text{emf}}_{2}\text{= +}{I}_{1}{R}_{1}+{I}_{3}({R}_{3}+{r}_{2})-{\text{emf}}_{2}=0. $$  {eq:eip-222}

Note that the signs are reversed compared with the other loop, because elements are traversed in the opposite direction. With values entered, this becomes

$$ +\;{6I}_{1}+{2I}_{3}-\text{45}=0. $$  {eq:eip-54}

These three equations are sufficient to solve for the three unknown currents. First, solve the second equation for ${I}_{2}$:

$$ {I}_{2}=6-{2I}_{1}. $$  {eq:eip-949}

Now solve the third equation for ${I}_{3}$:

$$ {I}_{3}=\text{22}\text{.}5-{3I}_{1}. $$  {eq:eip-614}

Substituting these two new equations into the first one allows us to find a value for ${I}_{1}$:

$$ {I}_{1}={I}_{2}+{I}_{3}=(6-{2I}_{1})+(\text{22}\text{.}5-{3I}_{1})=\text{28}\text{.}5-{5I}_{1}. $$  {eq:eip-531}

Combining terms gives

$$ {6I}_{1}=\text{28}\text{.}5, and $$  {eq:eip-223}

$$ {I}_{1}=4\text{.}\text{75 A}. $$  {eq:eip-552}

Substituting this value for ${I}_{1}$ back into the fourth equation gives

$$ {I}_{2}=6-{2I}_{1}=6-9.50 $$  {eq:eip-905}

$$ {I}_{2}=-3\text{.}\text{50 A}. $$  {eq:eip-882}

The minus sign means ${I}_{2}$ flows in the direction opposite to that assumed in [ref:import-auto-id2440725].
Finally, substituting the value for ${I}_{1}$ into the fifth equation gives

$$ {I}_{3}=\text{22.5}-{3I}_{1}=\text{22.5}-\text{14}\text{.}\text{25} $$  {eq:eip-996}

$$ {I}_{3}=8\text{.}\text{25 A}. $$  {eq:eip-109}

**Discussion**
Just as a check, we note that indeed ${I}_{1}={I}_{2}+{I}_{3}$. The results could also have been checked by entering all of the values into the equation for the abcdefgha loop.
:::

:::note [] Problem-Solving Strategies for Kirchhoff’s Rules

1. Make certain there is a clear circuit diagram on which you can label all known and unknown resistances, emfs, and currents. If a current is unknown, you must assign it a direction. This is necessary for determining the signs of potential changes. If you assign the direction incorrectly, the current will be found to have a negative value—no harm done.
2. Apply the junction rule to any junction in the circuit. Each time the junction rule is applied, you should get an equation with a current that does not appear in a previous application—if not, then the equation is redundant.
3. Apply the loop rule to as many loops as needed to solve for the unknowns in the problem. (There must be as many independent equations as unknowns.) To apply the loop rule, you must choose a direction to go around the loop. Then carefully and consistently determine the signs of the potential changes for each element using the four bulleted points discussed above in conjunction with [ref:import-auto-id3116736].
4. Solve the simultaneous equations for the unknowns. This may involve many algebraic steps, requiring careful checking and rechecking.
5. Check to see whether the answers are reasonable and consistent. The numbers should be of the correct order of magnitude, neither exceedingly large nor vanishingly small. The signs should be reasonable—for example, no resistance should be negative. Check to see that the values obtained satisfy the various equations obtained from applying the rules. The currents should satisfy the junction rule, for example.
:::
The material in this section is correct in theory. We should be able to verify it by making measurements of current and voltage. In fact, some of the devices used to make such measurements are straightforward applications of the principles covered so far and are explored in the next modules. As we shall see, a very basic, even profound, fact results—making a measurement alters the quantity being measured.

:::exercise {fs-id2296992} type=check-understanding Check Your Understanding

PROBLEM:
Can Kirchhoff’s rules be applied to simple series and parallel circuits or are they restricted for use in more complicated circuits that are not combinations of series and parallel?
SOLUTION:
Kirchhoff's rules can be applied to any circuit since they are applications to circuits of two conservation laws. Conservation laws are the most broadly applicable principles in physics. It is usually mathematically simpler to use the rules for series and parallel in simpler circuits so we emphasize Kirchhoff’s rules for use in more complicated situations. But the rules for series and parallel can be derived from Kirchhoff’s rules. Moreover, Kirchhoff’s rules can be expanded to devices other than resistors and emfs, such as capacitors, and are one of the basic analysis devices in circuit analysis.
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1561181} type=ap-test-prep 
PROBLEM:
An experiment was set up with the circuit diagram shown. Assume *R<sub>1</sub>* = 10 Ω, *R<sub>2</sub>* = *R<sub>3</sub>* = 5 Ω,*r* = 0 Ω and *E* = 6 V.

> FIGURE {fig:fs-id2570729} src=../../media/CNX_APPhysics_21_M3_S06.jpg
> alt: A circuit is drawn with points a, b, and c across the top from left to right and points h, g, and f across the bottom from left to right. Segment ah from top to bottom has a battery with voltage E and a resistor with resistance r. Segment bg from top to bottom has point i, a resistor marked R1, and point j. Segment cf from top to bottom has resistor with resistance R2, point d, point e, and a resistor with resistance R3.
> caption: 

a. One of the steps to examine the set-up is to test points with the same potential. Which of the following points can be tested?
  

(a) Points *b*, *c* and *d*.
(b) Points *d*, *e* and *f*.
(c) Points *f*, *h* and *j*.
(d) Points *a*, *h* and *i*.

b. At which three points should the currents be measured so that Kirchhoff’s junction rule can be directly confirmed?
  

(a) Points *b*, *c* and *d*.
(b) Points *d*, *e* and *f*.
(c) Points *f*, *h* and *j*.
(d) Points *a*, *h* and *i*.

c. If the current in the branch with the voltage source is upward and currents in the other two branches are downward, i.e. *I<sub>a</sub> = I<sub>i</sub> + I<sub>c</sub>*, identify which of the following can be true? Select *two* answers.
  

(a) *I<sub>i</sub> = I<sub>j</sub> - I<sub>f</sub>*
(b) *I<sub>e</sub> = I<sub>h</sub> - I<sub>i</sub>*
(c) *I<sub>c</sub> = I<sub>j</sub> - I<sub>a</sub>*
(d) *I<sub>d</sub> = I<sub>h</sub> - I<sub>j</sub>*

d. The measurements reveal that the current through *R*<sub>1</sub> is 0.5 A and *R*<sub>3</sub> is 0.6 A. Based on your knowledge of Kirchoff’s laws, confirm which of the following statements are true.
  

(a) The measured current for *R*<sub>1</sub> is correct but for *R*<sub>3</sub> is incorrect.
(b) The measured current for *R*<sub>3</sub> is correct but for *R*<sub>1</sub> is incorrect.
(c) Both the measured currents are correct.
(d) Both the measured currents are incorrect.

e. The graph shown in the following figure is the energy dissipated at *R*<sub>1</sub> as a function of time.

> FIGURE {fig:fs-id1673098} src=../../media/CNX_APPhysics_21_M3_S07_img.jpg
> alt: Plot of t versus E with a solid line drawn from the origin O to (E1, t1).
> caption: 

Which of the following shows the graph for energy dissipated at *R*<sub>2</sub> as a function of time?
  

(a) 
> FIGURE {fig:fs-id2020388} src=../../media/CNX_APPhysics_21_M3_S08a_img.jpg
> alt: Plot of t versus E with a solid line drawn from the origin O to (2E1, t1).
> caption: 

(b) 
> FIGURE {fig:fs-id1869983} src=../../media/CNX_APPhysics_21_M3_S08b_img.jpg
> alt: Plot of t versus E with a solid line drawn from the origin O to (E1, t1).
> caption: 

(c) 
> FIGURE {fig:fs-id1241643} src=../../media/CNX_APPhysics_21_M3_S08c_img.jpg
> alt: Plot of t versus E with a solid line drawn from the origin O to (E1/2, t1).
> caption: 

(d) 
> FIGURE {fig:fs-id1648620} src=../../media/CNX_APPhysics_21_M3_S08d_img.jpg
> alt: Plot of t versus E with a solid line drawn from the origin O to (E1/4, t1).
> caption: 

:::

:::exercise {fs-id1222161} type=ap-test-prep 
PROBLEM:
For this question, consider the circuit shown in the following figure.

> FIGURE {fig:fs-id3917009} src=../../media/CNX_APPhysics_21_M3_S09_img.jpg
> alt: Circuit that across the top from left to right goes point b, battery with voltage E1, point c, resistor with resistance r1, and point d; across the middle goes point a, battery with voltage E2, point k, resistor with resistance r2, point l, resistor with resistance R2, and point e; across the bottom goes point j, battery with voltage E3, point i, resistor with resistance r3, and point h; along the left side from top to bottom goes a resistor with resistance R1, point a, and a resistor with resistance R3; and along the right side goes a resistor with resistance R5, point e, a resistor with resistance r4, point f, a battery with voltage E4, and point g. Additionally, there are three arrows showing the direction of the current: one between point a and the resistor with resistance R1 pointing up; another between point a and the battery with voltage E2 pointing right; and another between point j and the resistor with resistance R3 pointing up.
> caption: 

a. Assuming that none of the three currents (*I*<sub>1</sub>, *I*<sub>2</sub>, and *I*<sub>3</sub>) are equal to zero, which of the following statements is false?
  

(a) *I*<sub>3</sub> = *I*<sub>1</sub> + *I*<sub>2</sub> at point *a*.
(b) *I*<sub>2</sub> = *I*<sub>3</sub> **-** *I*<sub>1</sub> at point *e*.
(c) The current through *R<sub>3</sub>* is equal to the current through *R<sub>5.</sub>*
(d) The current through *R<sub>1</sub>* is equal to the current through *R*<sub>5.</sub>

b. Which of the following statements is true?
  

(a) *E<sub>1</sub> + E<sub>2</sub> + I<sub>1</sub>R<sub>1</sub> - I<sub>2</sub>R<sub>2</sub> + I<sub>1</sub>r<sub>1</sub> - I<sub>2</sub>r<sub>2</sub> + I<sub>1</sub>R<sub>5</sub>* = 0
(b) *- E<sub>1</sub> + E<sub>2</sub> + I<sub>1</sub>R<sub>1</sub> - I<sub>2</sub>R<sub>2</sub> + I<sub>1</sub>r<sub>1</sub> - I<sub>2</sub>r<sub>2</sub> - I<sub>1</sub>R<sub>5</sub>* = 0
(c) *E<sub>1</sub> - E<sub>2</sub> - I<sub>1</sub>R<sub>1</sub> + I<sub>2</sub>R<sub>2</sub> - I<sub>1</sub>r<sub>1</sub> +<sub></sub> I<sub>2</sub>r<sub>2</sub> - I<sub>1</sub>R<sub>5</sub>* = 0
(d) *E<sub>1</sub> + E<sub>2</sub> - I<sub>1</sub>R<sub>1</sub> + I<sub>2</sub>R<sub>2</sub> - I<sub>1</sub>r<sub>1</sub> + I<sub>2</sub>r<sub>2</sub> + I<sub>1</sub>R<sub>5</sub>* = 0

c. If *I*<sub>1</sub> = 5 A and *I*<sub>3</sub> = -2 A, which of the following statements is false?
  

(a) The current through *R<sub>1</sub>* will flow from *a* to *b* and will be equal to 5 A.
(b) The current through *R<sub>3</sub>* will flow from *a* to *j* and will be equal to 2 A.
(c) The current through *R<sub>5</sub>* will flow from *d* to *e* and will be equal to 5 A.
(d) None of the above.

d. If *I<sub>1</sub>* = 5 A and *I<sub>3</sub>* = -2 A, *I<sub>2</sub>* will be equal to
  

(a) 3 A
(b) -3 A
(c) 7 A
(d) -7 A

SOLUTION:
a. (c)
b. (c)
c. (d)
d. (d)
:::

:::exercise {fs-id4214079} type=ap-test-prep 
PROBLEM:

> FIGURE {fig:fs-id2538394} src=../../media/CNX_APPhysics_21_M3_S10.jpg
> alt: A circuit with nothing on the top or bottom, but a battery marked E on the left, a resistor marked R1 in the middle, and a resistor marked R2 on the right.
> caption: 

In an experiment this circuit is set up. Three ammeters are used to record the currents in the three vertical branches (with *R*<sub>1</sub>, *R*<sub>2</sub>, and *E)*. The readings of the ammeters in the resistor branches (i.e. currents in *R*<sub>1</sub> and *R*<sub>2</sub>) are 2 A and 3 A respectively.
(a) Find the equation obtained by applying Kirchhoff’s loop rule in the loop involving *R*<sub>1</sub> and *R*<sub>2</sub>.
(b) What will be the reading of the third ammeter (i.e. the branch with *E*)? If *E* were replaced by 3*E*, how would this reading change?
(c) If the original circuit is modified by adding another voltage source (as shown in the following circuit), find the readings of the three ammeters.

> FIGURE {fig:fs-id1956475} src=../../media/CNX_APPhysics_21_M3_S11.jpg
> alt: A circuit a battery marked E on the left, a resistor marked R1 in the middle, and a resistor marked R2 on the right. There is nothing on the bottom, and on the top, there is a battery marked 2E between the two resistors.
> caption: 

:::

:::exercise {fs-id1175790} type=ap-test-prep 
PROBLEM:

> FIGURE {fig:fs-id1698711} src=../../media/CNX_APPhysics_21_M3_S12_img.jpg
> alt: Circuit with a battery with voltage E1 and resistor with resistance r1 across the top from left to right; point A, a resistor with resistance R1, and point B across the middle; and a battery marked E2 and a resistor with resistance r2 across the bottom. Additionally, on the left, from top to bottom there is a resistor with resistance R2 and point A; on the right, from top to bottom there is point B and a resistor with resistance R3.
> caption: 

In this circuit, assume the currents through *R*<sub>1</sub>, *R*<sub>2</sub> and *R*<sub>3</sub> are *I*<sub>1</sub>, *I*<sub>2</sub> and *I*<sub>3</sub> respectively and all are flowing in the clockwise direction.
(a) Find the equation obtained by applying Kirchhoff’s junction rule at point A.
(b) Find the equations obtained by applying Kirchhoff’s loop rule in the upper and lower loops.
(c) Assume *R*<sub>1</sub> = *R*<sub>2</sub> = 6 Ω, *R*<sub>3</sub> = 12 Ω, *r*<sub>1</sub> = *r*<sub>2</sub> = 0 Ω, *E*<sub>1</sub> = 6 V and *E*<sub>2</sub> = 4 V. Calculate *I*<sub>1</sub>, *I*<sub>2</sub> and *I*<sub>3</sub>.
(d) For the situation in which *E*<sub>2</sub> is replaced by a closed switch, repeat parts (a) and (b). Using the values for *R*<sub>1</sub>, *R*<sub>2</sub>, *R*<sub>3</sub>, *r*<sub>1</sub> and *E*<sub>1</sub> from part (c) calculate the currents through the three resistors.
(e) For the circuit in part (d) calculate the output power of the voltage source and across all the resistors. Examine if energy is conserved in the circuit.
(f) A student implemented the circuit of part (d) in the lab and measured the current though one of the resistors as 0.19 A. According to the results calculated in part (d) identify the resistor(s). Justify any difference in measured and calculated value.
SOLUTION:
(a) *I<sub>1</sub> + I<sub>3</sub> = I<sub>2</sub>*
(b) *E<sub>1</sub> - I<sub>1</sub>R<sub>1</sub> - I<sub>2</sub>R<sub>2</sub> - I<sub>1</sub>r<sub>1</sub>* = 0; **-** *E<sub>2</sub> + I<sub>1</sub>R<sub>1</sub> - I<sub>3</sub>R<sub>3</sub> - I<sub>3</sub>r<sub>2</sub>* = 0
(c) *I<sub>1</sub>* = 8/15 A, *I<sub>2</sub>* = 7/15 A and *I<sub>3</sub>* = **-**1/15 A
(d) *I<sub>1</sub>* = 2/5 A, *I<sub>2</sub>* = 3/5 A and *I<sub>3</sub>* = 1/5 A
(e) *P<sub>E1</sub>* = 18/5 W and *P<sub>R1</sub>* = 24/25 W, *P<sub>R2</sub>* = 54/25 W, *P<sub>R3</sub>* = 12/25 W. Yes, *P<sub>E1</sub>* =*P<sub>R1</sub>*+*P<sub>R2</sub>* +*P<sub>R3</sub>*
(f) *R<sub>3,</sub>* losses in the circuit
:::

## Section Summary {section:section-summary}
- Kirchhoff’s rules can be used to analyze any circuit, simple or complex.
- Kirchhoff’s first rule—the junction rule: The sum of all currents entering a junction must equal the sum of all currents leaving the junction.
- Kirchhoff’s second rule—the loop rule: The algebraic sum of changes in potential around any closed circuit path (loop) must be zero.
- The two rules are based, respectively, on the laws of conservation of charge and energy.
- When calculating potential and current using Kirchhoff’s rules, a set of conventions must be followed for determining the correct signs of various terms.
- The simpler series and parallel rules are special cases of Kirchhoff’s rules.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1525010} type=conceptual-questions 
PROBLEM:
Can all of the currents going into the junction in [ref:import-auto-id3353151] be positive? Explain.
:::

> FIGURE {fig:import-auto-id3353151} src=../../media/Figure_22_03_06.jpg
> alt: The diagram shows a T junction with currents I sub one, I sub two, and I sub three entering the T junction.
> width: 250
> caption: 

:::exercise {fs-id3137904} type=conceptual-questions 
PROBLEM:
Apply the junction rule to junction b in [ref:import-auto-id2616676]. Is any new information gained by applying the junction rule at e? (In the figure, each emf is represented by script E.)
:::

> FIGURE {fig:import-auto-id2616676} src=../../media/Figure_22_03_07-007f.jpg
> alt: The diagram shows a complex circuit with four voltage sources: E sub one, E sub two, E sub three, E sub four and several resistive loads, wired in two loops and two junctions. Several points on the diagram are marked with letters a through g. The current in each branch is labeled separately.
> caption: 

:::exercise {fs-id3154834} type=conceptual-questions 
PROBLEM:
(a) What is the potential difference going from point a to point b in [ref:import-auto-id2616676]? (b) What is the potential difference going from c to b? (c) From e to g? (d) From e to d?
:::

:::exercise {fs-id2383320} type=conceptual-questions 
PROBLEM:
Apply the loop rule to loop afedcba in [ref:import-auto-id2616676].
:::

:::exercise {fs-id2402513} type=conceptual-questions 
PROBLEM:
Apply the loop rule to loops abgefa and cbgedc in [ref:import-auto-id2616676].
:::

## Problem Exercises {section:problems-exercises}

:::exercise {fs-id2074624} type=problems-exercises 
PROBLEM:
Apply the loop rule to loop abcdefgha in [ref:import-auto-id2440725].
SOLUTION:

$$ -{I}_{2}{R}_{2}+{E}_{1}-{\text{I}}_{2}{r}_{1}+{\text{I}}_{3}{R}_{3}+{\text{I}}_{3}{r}_{2}-{E}_{2}=\text{0} $$  {eq:eip-id2422696}

:::

:::exercise {fs-id1936059} type=problems-exercises 
PROBLEM:
Apply the loop rule to loop aedcba in [ref:import-auto-id2440725].
:::

:::exercise {fs-id3191561} type=problems-exercises 
PROBLEM:
Verify the second equation in [ref:fs-id3008416] by substituting the values found for the currents ${I}_{1}$ and ${I}_{2}$.
:::

:::exercise {fs-id3454951} type=problems-exercises 
PROBLEM:
Verify the third equation in [ref:fs-id3008416] by substituting the values found for the currents ${I}_{1}$ and ${I}_{3}$.
:::

:::exercise {fs-id3199702} type=problems-exercises 
PROBLEM:
Apply the junction rule at point a in [ref:import-auto-id3173348].

> FIGURE {fig:import-auto-id3173348} src=../../media/Figure_22_03_08-1bf9.jpg
> alt: The diagram shows a complex circuit with four voltage sources E sub one, E sub two, E sub three, E sub four and several resistive loads, wired in two loops and many junctions. Several points on the diagram are marked with letters a through j. The current in each branch is labeled separately.
> caption: 

SOLUTION:

$$ {I}_{3}={\text{I}}_{1}+{\text{I}}_{2} $$  {eq:eip-id2363296}

:::

:::exercise {fs-id1993566} type=problems-exercises 
PROBLEM:
Apply the loop rule to loop abcdefghija in [ref:import-auto-id3173348].
:::

:::exercise {fs-id2601229} type=problems-exercises 
PROBLEM:
Apply the loop rule to loop akledcba in [ref:import-auto-id3173348].
SOLUTION:

$$ {\text{emf}}_{2}-{\text{I}}_{2}{r}_{2}-{\text{I}}_{2}{R}_{2}+{\text{I}}_{1}{R}_{5}+{I}_{1}{r}_{1}-{\text{emf}}_{1}+{\text{I}}_{1}{R}_{1}=0 $$  {eq:eip-id1312544}

:::

:::exercise {fs-id2601260} type=problems-exercises 
PROBLEM:
Find the currents flowing in the circuit in [ref:import-auto-id3173348]. Explicitly show how you follow the steps in the [ref:fs-id2401854](module:m42356)Problem-Solving Strategies for Series and Parallel Resistors.
:::

:::exercise {fs-id3080612} type=problems-exercises 
PROBLEM:
Solve [ref:fs-id3008416], but use loop abcdefgha instead of loop akledcba. Explicitly show how you follow the steps in the [ref:fs-id2401854](module:m42356)Problem-Solving Strategies for Series and Parallel Resistors.
SOLUTION:
(a) ${\text{I}}_{1}=\text{4.75 A}$
(b) ${\text{I}}_{\text{2}}=-3\text{.}\text{5 A}$ $$
(c) ${\text{I}}_{3}=8\text{.}\text{25 A}$
:::

:::exercise {fs-id3260674} type=problems-exercises 
PROBLEM:
Find the currents flowing in the circuit in [ref:import-auto-id2616676].
:::

:::exercise {fs-id2057574} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
Consider the circuit in [ref:fs-id1947335], and suppose that the emfs are unknown and the currents are given to be ${I}_{1}=5\text{.}\text{00 A}$, ${I}_{2}=3\text{.0 A}$, and ${I}_{3}=–2\text{.}\text{00 A}$. (a) Could you find the emfs? (b) What is wrong with the assumptions?

> FIGURE {fig:fs-id1947335} src=../../media/Figure_22_03_09.jpg
> alt: The diagram shows a complex circuit with two voltage sources E sub one and E sub two, and three resistive loads, wired in two loops and two junctions. Several points on the diagram are marked with letters a through h. The current in each branch is labeled separately.
> width: 250
> caption: 

SOLUTION:
(a) No, you would get inconsistent equations to solve.
(b) ${I}_{1}≠{I}_{2}+{I}_{3}$. The assumed currents violate the junction rule.
:::

## Glossary
- {def} **Kirchhoff’s rules**: a set of two rules, based on conservation of charge and energy, governing current and changes in potential in an electric circuit
- {def} **junction rule**: Kirchhoff’s first rule, which applies the conservation of charge to a junction; current is the flow of charge; thus, whatever charge flows into the junction must flow out; the rule can be stated ${I}_{1}={I}_{2}+{I}_{3}$
- {def} **loop rule**: Kirchhoff’s second rule, which states that in a closed loop, whatever energy is supplied by emf must be transferred into other forms by devices in the loop, since there are no other ways in which energy can be transferred into or out of the circuit. Thus, the emf equals the sum of the $\text{IR}$ (voltage) drops in the loop and can be stated: $\text{emf}=\text{Ir}+{\text{IR}}_{1}+{\text{IR}}_{2}$
- {def} **conservation laws**: require that energy and charge be conserved in a system

# Electric Field: Concept of a Field Revisited

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Describe a force field and calculate the strength of an electric field due to a point charge.
- Calculate the force exerted on a test charge by an electric field.
- Explain the relationship between electrical force (F) on a test charge and electrical field strength (E).
Contact forces, such as between a baseball and a bat, are explained on the small scale by the interaction of the charges in atoms and molecules in close proximity. They interact through forces that include the {term:Coulomb force}. Action at a distance is a force between objects that are not close enough for their atoms to “touch.” That is, they are separated by more than a few atomic diameters.
For example, a charged rubber comb attracts neutral bits of paper from a distance via the Coulomb force. It is very useful to think of an object being surrounded in space by a {term:force field}. The force field carries the force to another object (called a test object) some distance away.

## Concept of a Field
A field is a way of conceptualizing and mapping the force that surrounds any object and acts on another object at a distance without apparent physical connection. For example, the gravitational field surrounding the earth (and all other masses) represents the gravitational force that would be experienced if another mass were placed at a given point within the field.
In the same way, the Coulomb force field surrounding any charge extends throughout space. Using Coulomb’s law, $F=k|{q}_{1}{q}_{2}|/{r}^{2}$, its magnitude is given by the equation  $F=k|qQ|/{r}^{2}$, for a {term:point charge} (a particle having a charge *$Q$*) acting on a {term:test charge}$q$ at a distance $r$ (see [ref:import-auto-id2408057]). Both the magnitude and direction of the Coulomb force field depend on *$Q$* and the test charge $q$.

> FIGURE {fig:import-auto-id2408057} src=../../media/Figure_19_04_02a.jpg
> alt: In part a, two charges Q and q one are placed at a distance r. The force vector F one on charge q one is shown by an arrow pointing toward right away from Q. In part b, two charges Q and q two are placed at a distance r. The force vector F two on charge q two is shown by an arrow pointing toward left toward Q.
> width: 200
> caption: The Coulomb force field due to a positive charge $Q$ is shown acting on two different charges. Both charges are the same distance from $Q$. (a) Since ${q}_{1}$ is positive, the force ${F}_{1}$ acting on it is repulsive. (b) The charge ${q}_{2}$ is negative and greater in magnitude than ${q}_{1}$, and so the force ${F}_{2}$ acting on it is attractive and stronger than ${F}_{1}$. The Coulomb force field is thus not unique at any point in space, because it depends on the test charges ${q}_{1}$ and ${q}_{2}$ as well as the charge $Q$.

To simplify things, we would prefer to have a field that depends only on *$Q$* and not on the test charge $q$. The electric field is defined in such a manner that it represents only the charge creating it and is unique at every point in space. Specifically, the electric field $E$ is defined to be the ratio of the Coulomb force to the test charge:

$$ \text{E}=\frac{\text{F}}{q}, $$  {eq:eip-853}

where $\text{F}$ is the electrostatic force (or Coulomb force) exerted on a positive test charge $q$. It is understood that $\text{E}$ is in the same direction as $\text{F}$. It is also assumed that $q$ is so small that it does not alter the charge distribution creating the electric field. The units of electric field are newtons per coulomb (N/C). If the electric field is known, then the electrostatic force on any charge $q$ is simply obtained by multiplying charge times electric field, or $\text{F}=q\text{E}$. Consider the electric field due to a point charge $Q$. According to Coulomb’s law, the force it exerts on a test charge  $q$ is  $F=k|qQ|/{r}^{2}$. Thus the magnitude of the electric field, $E$, for a point charge is

$$ E=|\frac{F}{q}|=k|\frac{\text{qQ}}{{qr}^{2}}|=k\frac{|Q|}{{r}^{2}}. $$  {eq:eip-588}

Since the test charge cancels, we see that

$$ E=k\frac{|Q|}{{r}^{2}}. $$  {eq:eip-222}

The electric field is thus seen to depend only on the charge *$Q$* and the distance $r$; it is completely independent of the test charge $q$.

:::example {ex:fs-id2598952} Calculating the Electric Field of a Point Charge
Calculate the strength and direction of the electric field $E$ due to a point charge of 2.00 nC (nano-Coulombs) at a distance of 5.00 mm from the charge.
**Strategy**
We can find the electric field created by a point charge by using the equation $E=\text{kQ}/{r}^{2}$.
**Solution**
Here $Q=2\text{.}\text{00}\times {\text{10}}^{-9}$ C and $r=5\text{.}\text{00}\times {\text{10}}^{-3}$ m. Entering those values into the above equation gives

$$ \begin{array}{lll}E & = & k\frac{Q}{{r}^{2}} \\ & = & (\text{8.99}\times {\text{10}}^{9}\;\text{N}⋅{\text{m}}^{2}{\text{/C}}^{2})\times \frac{(\text{2.00}\times {\text{10}}^{-9}\;\text{C})}{(\text{5.00}\times {\text{10}}^{-3}\;\text{m}{)}^{2}} \\ & = & \text{7.19}\times {\text{10}}^{5}\;\text{N/C.}\end{array} $$  {eq:eip-380}

**Discussion**
This {term:electric field strength} is the same at any point 5.00 mm away from the charge *$Q$* that creates the field. It is positive, meaning that it has a direction pointing away from the charge *$Q$*.
:::

:::example {ex:fs-id2429320} Calculating the Force Exerted on a Point Charge by an Electric Field
What force does the electric field found in the previous example exert on a point charge of $–0.250\;μ\text{C}$?
**Strategy**
Since we know the electric field strength and the charge in the field, the force on that charge can be calculated using the definition of electric field $\text{E}=\text{F}/q$ rearranged to $\text{F}=q\text{E}$.
**Solution**
The magnitude of the force on a charge $q=-0\text{.}\text{250}\;\mu \text{C}$ exerted by a field of strength $E=7\text{.}\text{20}\times {\text{10}}^{5}$ N/C is thus,

$$ \begin{array}{lll}F & = & -\text{qE} \\ & = & (\text{0.250}\times {\text{10}}^{\text{–6}}\;\text{C})(7.20\times {\text{10}}^{5}\;\text{N/C}) \\ & = & \text{0.180 N.}\end{array} $$  {eq:eip-502}

Because  $q$ is negative, the force is directed opposite to the direction of the field.
**Discussion**
The force is attractive, as expected for unlike charges. (The field was created by a positive charge and here acts on a negative charge.) The charges in this example are typical of common static electricity, and the modest attractive force obtained is similar to forces experienced in static cling and similar situations.
:::

:::note [interactive] Electric Field of Dreams

Play ball! Add charges to the Field of Dreams and see how they react to the electric field. Turn on a background electric field and adjust the direction and magnitude.
[Click to view content](https://openstax.org/l/02electric_field_dreams).
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1541667} type=ap-test-prep 
PROBLEM:
Two particles with charges +2*q* and +*q* are separated by a distance *r*. The +2*q* particle has an electric field *E* at distance *r* and exerts a force *F* on the +*q* particle. Use this information to answer questions 31–32.
What is the electric field of the +*q* particle at the same distance and what force does it exert on the +2*q* particle?
(a) *E*/2, *F*/2
(b) *E*, *F*/2
(c) *E*/2, *F*
(d) *E*, *F*
SOLUTION:
(c)
:::

:::exercise {fs-id2454673} type=ap-test-prep 
PROBLEM:
When the +*q* particle is replaced by a +3*q* particle, what will be the electric field and force from the +2*q* particle experienced by the +3*q* particle?
(a) *E*/3, 3*F*
(b) *E*, 3*F*
(c) *E*/3, *F*
(d) *E*, *F*
:::

:::exercise {fs-id1451013} type=ap-test-prep 
PROBLEM:
The direction of the electric field of a negative charge is
(a) inward for both positive and negative charges.
(b) outward for both positive and negative charges.
(c) inward for other positive charges and outward for other negative charges.
(d) outward for other positive charges and inward for other negative charges.
SOLUTION:
(a)
:::

:::exercise {fs-id1737728} type=ap-test-prep 
PROBLEM:
The force responsible for holding an atom together is
(a) frictional
(b) electric
(c) gravitational
(d) magnetic
:::

:::exercise {fs-id2204572} type=ap-test-prep 
PROBLEM:
When a positively charged particle exerts an inward force on another particle *P*, what will be the charge of *P*?
(a) positive
(b) negative
(c) neutral
(d) cannot be determined
SOLUTION:
(b)
:::

:::exercise {fs-id1105673} type=ap-test-prep 
PROBLEM:
Find the force exerted due to a particle having a charge of 3.2×10<sup>−19</sup> C on another identical particle 5 cm away.
:::

:::exercise {fs-id1434631} type=ap-test-prep 
PROBLEM:
Suppose that the force exerted on an electron is 5.6×10<sup>−17</sup> N, directed to the east.
(a) Find the magnitude of the electric field that exerts the force.
(b) What will be the direction of the electric field?
(c) If the electron is replaced by a proton, what will be the magnitude of force exerted?
(d) What will be the direction of force on the proton?
SOLUTION:
(a) 350 N/C, (b) west, (c) 5.6×10−17 N, (d) west.
:::

## Section Summary {section:section-summary}
- The electrostatic force field surrounding a charged object extends out into space in all directions.
- The electrostatic force exerted by a point charge on a test charge at a distance $r$ depends on the charge of both charges, as well as the distance between the two.
- The electric field $\text{E}$ is defined to be
    

$$ \text{E}=\frac{\text{F}}{q,} $$  {eq:eip-652}

where $\text{F}$ is the Coulomb or electrostatic force exerted on a small positive test charge $q$. $\text{E}$ has units of N/C.
- The magnitude of the electric field $\text{E}$ created by a point charge *$Q$* is
    

$$ \text{E}=k\frac{|Q|}{{r}^{2}}. $$  {eq:eip-915}

where $r$ is the distance from *$Q$*. The electric field $\text{E}$ is a vector and fields due to multiple charges add like vectors.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id3047767} type=conceptual-questions 
PROBLEM:
Why must the test charge $q$ in the definition of the electric field be vanishingly small?
:::

:::exercise {fs-id2668714} type=conceptual-questions 
PROBLEM:
Are the direction and magnitude of the Coulomb force unique at a given point in space? What about the electric field?
:::

## Problem Exercises {section:problems-exercises}

:::exercise {fs-id1586790} type=problems-exercises 
PROBLEM:
What is the magnitude and direction of an electric field that exerts a $2\text{.}\text{00}\times {\text{10}}^{-5}\;\text{N}$ upward force on a $–1.75\;μ\text{C}$ charge?
:::

:::exercise {fs-id2989956} type=problems-exercises 
PROBLEM:
What is the magnitude and direction of the force exerted on a $3.50\;μ\text{C}$ charge by a 250 N/C electric field that points due east?
SOLUTION:
$8\text{.}\text{75}\times {\text{10}}^{-4}$ N
:::

:::exercise {fs-id2588568} type=problems-exercises 
PROBLEM:
Calculate the magnitude of the electric field 2.00 m from a point charge of 5.00 mC (such as found on the terminal of a Van de Graaff).
:::

:::exercise {fs-id1537546} type=problems-exercises 
PROBLEM:
(a) What magnitude point charge creates a 10,000 N/C electric field at a distance of 0.250 m? (b) How large is the field at 10.0 m?
SOLUTION:
(a) $6\text{.}\text{94}\times {\text{10}}^{-8}\;\text{C}$
(b) $6\text{.}\text{25}\;\text{N/C}$
:::

:::exercise {fs-id2001055} type=problems-exercises 
PROBLEM:
Calculate the initial (from rest) acceleration of a proton in a $5\text{.}\text{00}\times {\text{10}}^{6}\;\text{N/C}$ electric field (such as created by a research Van de Graaff). Explicitly show how you follow the steps in the Problem-Solving Strategy for electrostatics.
:::

:::exercise {fs-id2937300} type=problems-exercises 
PROBLEM:
(a) Find the magnitude and direction of an electric field that exerts a $4\text{.}\text{80}\times {\text{10}}^{-\text{17}}\;\text{N}$ westward force on an electron. (b) What magnitude and direction force does this field exert on a proton?
SOLUTION:
(a) $\text{300}\;\text{N/C}\;(\text{east})$
(b) $4\text{.}\text{80}\times {\text{10}}^{-\text{17}}\;\text{N}\;(\text{east})$
:::

## Glossary
- {def} **field**: a map of the amount and direction of a force acting on other objects, extending out into space
- {def} **point charge**: A charged particle, designated *$Q$,* generating an electric field
- {def} **test charge**: A particle (designated $q$) with either a positive or negative charge set down within an electric field generated by a point charge

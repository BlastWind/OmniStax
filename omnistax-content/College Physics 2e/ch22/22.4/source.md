# Magnetic Field Strength: Force on a Moving Charge in a Magnetic Field

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Describe the effects of magnetic fields on moving charges.
- Use the right hand rule 1 to determine the velocity of a charge, the direction of the magnetic field, and the direction of the magnetic force on a moving charge.
- Calculate the magnetic force on a moving charge.
What is the mechanism by which one magnet exerts a force on another? The answer is related to the fact that all magnetism is caused by current, the flow of charge. *Magnetic fields exert forces on moving charges*, and so they exert forces on other magnets, all of which have moving charges.

## Right Hand Rule 1
The magnetic force on a moving charge is one of the most fundamental known. Magnetic force is as important as the electrostatic or Coulomb force. Yet the magnetic force is more complex, in both the number of factors that affects it and in its direction, than the relatively simple Coulomb force. The magnitude of the {term:magnetic force} $F$ on a charge $q$ moving at a speed $v$ in a magnetic field of strength $B$ is given by

$$ F=\text{qvB}\;\text{sin}\;\theta \text{,} $$  {eq:import-auto-id1848216}

where $\theta$ is the angle between the directions of $\text{v}$ and $\text{B}.$ This force is often called the {term:Lorentz force}. In fact, this is how we define the magnetic field strength $B$—in terms of the force on a charged particle moving in a magnetic field. The SI unit for magnetic field strength $B$ is called the {term:tesla} (T) after the eccentric but brilliant inventor Nikola Tesla (1856–1943). To determine how the tesla relates to other SI units, we solve $F=\text{qvB}\;\text{sin}\;\theta$ for $B$.

$$ B=\frac{F}{\text{qv}\;\text{sin}\;\theta} $$  {eq:import-auto-id1536271}

Because $\text{sin}\;\theta$ is unitless, the tesla is

$$ \text{1 T}=\frac{\text{1 N}}{C⋅\text{m/s}}=\frac{\text{1 N}}{A⋅m} $$  {eq:import-auto-id1593576}

(note that C/s = A).
Another smaller unit, called the {term:gauss} (G), where $1 G={\text{10}}^{-4}\;T$, is sometimes used. The strongest permanent magnets have fields near 2 T; superconducting electromagnets may attain 10 T or more. The Earth’s magnetic field on its surface is only about $5\times {\text{10}}^{-5}\;T$, or 0.5 G.
The *direction* of the magnetic force $\text{F}$ is perpendicular to the plane formed by $\text{v}$ and $\text{B}$, as determined by the {term:right hand rule 1} (or RHR-1), which is illustrated in [ref:import-auto-id1473446]. RHR-1 states that, to determine the direction of the magnetic force on a positive moving charge, you point the thumb of the right hand in the direction of $\text{v}$, the fingers in the direction of $\text{B}$, and a perpendicular to the palm points in the direction of $\text{F}$. One way to remember this is that there is one velocity, and so the thumb represents it. There are many field lines, and so the fingers represent them. The force is in the direction you would push with your palm. The force on a negative charge is in exactly the opposite direction to that on a positive charge.

> FIGURE {fig:import-auto-id1473446} src=../../media/Figure_23_04_01.jpg
> alt: The right hand rule 1. An outstretched right hand rests palm up on a piece of paper on which a vector arrow v points to the right and a vector arrow B points toward the top of the paper. The thumb points to the right, in the direction of the v vector arrow. The fingers point in the direction of the B vector. B and v are in the same plane. The F vector points straight up, perpendicular to the plane of the paper, which is the plane made by B and v. The angle between B and v is theta. The magnitude of the magnetic force F equals q v B sine theta.
> width: 275
> caption: Magnetic fields exert forces on moving charges. This force is one of the most basic known. The direction of the magnetic force on a moving charge is perpendicular to the plane formed by $\text{v}$ and $\text{B}$ and follows right hand rule–1 (RHR-1) as shown. The magnitude of the force is proportional to $q$, $v$, $B$, and the sine of the angle between $\text{v}$ and $\text{B}$.

:::note [] Making Connections: Charges and Magnets

There is no magnetic force on static charges. However, there is a magnetic force on moving charges. When charges are stationary, their electric fields do not affect magnets. But, when charges move, they produce magnetic fields that exert forces on other magnets. When there is relative motion, a connection between electric and magnetic fields emerges—each affects the other.
:::

:::example {ex:fs-id1549068} Calculating Magnetic Force: Earth’s Magnetic Field on a Charged Glass Rod
With the exception of compasses, you seldom see or personally experience forces due to the Earth’s small magnetic field. To illustrate this, suppose that in a physics lab you rub a glass rod with silk, placing a 20-nC positive charge on it. Calculate the force on the rod due to the Earth’s magnetic field, if you throw it with a horizontal velocity of 10 m/s due west in a place where the Earth’s field is due north parallel to the ground. (The direction of the force is determined with right hand rule 1 as shown in [ref:import-auto-id1698149].)

> FIGURE {fig:import-auto-id1698149} src=../../media/Figure_22_04_02-7c69.jpg
> alt: The effects of the Earth’s magnetic field on moving charges. Figure a shows a positive charge with a velocity vector due west, a magnetic field line B oriented due north, and a magnetic force vector F straight down. Figure b shows the right hand facing down, with the fingers pointing north with B, the thumb pointing west with v, and force down away from the hand.
> width: 400
> caption: A positively charged object moving due west in a region where the Earth’s magnetic field is due north experiences a force that is straight down as shown. A negative charge moving in the same direction would feel a force straight up.

**Strategy**
We are given the charge, its velocity, and the magnetic field strength and direction. We can thus use the equation $F=\text{qvB}\;\text{sin}\;\theta$ to find the force.
**Solution**
The magnetic force is

$$ F=\text{qvB}\;\text{sin}\;\theta . $$  {eq:import-auto-id1535424}

We see that $\text{sin}\;\theta =1$, since the angle between the velocity and the direction of the field is $\text{90º}$. Entering the other given quantities yields

$$ \begin{array}{lll}F & = & (\text{20}\times {\text{10}}^{–9}\;C)(\text{10 m/s})(5\times {\text{10}}^{–5}\;T) \\ & = & 1\times {\text{10}}^{\text{–11}}\;(C⋅\text{m/s})(\frac{N}{C⋅\text{m/s}})=1\times {\text{10}}^{\text{–11}}\;N.\end{array} $$  {eq:import-auto-id2093723}

**Discussion**
This force is completely negligible on any macroscopic object, consistent with experience. (It is calculated to only one digit, since the Earth’s field varies with location and is given to only one digit.) The Earth’s magnetic field, however, does produce very important effects, particularly on submicroscopic particles. Some of these are explored in [Force on a Moving Charge in a Magnetic Field: Examples and Applications](module:m42375).
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1822638} type=ap-test-prep 
PROBLEM:
A proton moves in the –*x*-direction and encounters a uniform magnetic field pointing in the +*x*-direction. In what direction is the resulting magnetic force on the proton?
(a) The proton experiences no magnetic force.
(b) +*x*-direction
(c) −*y*-direction
(d) +*y*-direction
SOLUTION:
(a)
:::

:::exercise {fs-id2770151} type=ap-test-prep 
PROBLEM:
A proton moves with a speed of 240 m/s in the +*x*-direction into a region of a 4.5-T uniform magnetic field directed 62° above the +*x*-direction in the *x*,*y*-plane. Calculate the magnitude of the magnetic force on the proton.
:::

## Section Summary {section:section-summary}
- Magnetic fields exert a force on a moving charge *q*, the magnitude of which is
    

$$ F=\text{qvB}\;\text{sin}\;\theta , $$  {eq:import-auto-id1758727}

where $\theta$ is the angle between the directions of $v$ and $B$.
- The SI unit for magnetic field strength $B$ is the tesla (T), which is related to other units by
    

$$ 1 T=\frac{\text{1 N}}{C⋅\text{m/s}}=\frac{\text{1 N}}{A⋅m}. $$  {eq:import-auto-id2091790}

- The *direction* of the force on a moving charge is given by right hand rule 1 (RHR-1): Point the thumb of the right hand in the direction of $v$, the fingers in the direction of $B$, and a perpendicular to the palm points in the direction of $F$.
- The force is perpendicular to the plane formed by $\text{v}$ and $\text{B}$. Since the force is zero if $\text{v}$ is parallel to $\text{B}$, charged particles often follow magnetic field lines rather than cross them.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id2869610} type=conceptual-questions 
PROBLEM:
If a charged particle moves in a straight line through some region of space, can you say that the magnetic field in that region is necessarily zero?
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {fs-id1399302} type=problems-exercises 
PROBLEM:
What is the direction of the magnetic force on a positive charge that moves as shown in each of the six cases shown  in [ref:import-auto-id1755657]?

> FIGURE {fig:import-auto-id1755657} src=../../media/FIgure_23_04_03a-780c.jpg
> alt: figure a shows magnetic field line direction symbols with solid circles labeled B out; a velocity vector points down; figure b shows B vectors pointing right and v vector pointing up; figure c shows B in and v to the right; figure d shows B vector pointing right and v vector pointing left; figure e shows B vectors up and v vector into the page; figure f shows B vectors pointing left and v vectors out of the page
> caption: 

SOLUTION:
(a) Left (West)
(b) Into the page
(c) Up (North)
(d) No force
(e) Right (East)
(f) Down (South)
:::

:::exercise {fs-id1116147} type=problems-exercises 
PROBLEM:
Repeat [ref:fs-id1399302] for a negative charge.
:::

:::exercise {fs-id1327231} type=problems-exercises 
PROBLEM:
What is the direction of the velocity of a negative charge that experiences the magnetic force shown in each of the three cases in [ref:import-auto-id1396305], assuming it moves perpendicular to $\text{B}?$

> FIGURE {fig:import-auto-id1396305} src=../../media/Figure_23_04_04a-ae97.jpg
> alt: Figure a shows the force vector pointing up and B out of the page. Figure b shows the F vector pointing up and the B vector pointing to the right. Figure c shows the F vector pointing to the left and the B vector pointing into the page.
> caption: 

SOLUTION:
(a) East (right)
(b) Into page
(c) South (down)
:::

:::exercise {fs-id1687884} type=problems-exercises 
PROBLEM:
Repeat [ref:fs-id1327231] for a positive charge.
:::

:::exercise {fs-id2031113} type=problems-exercises 
PROBLEM:
What is the direction of the magnetic field that produces the magnetic force on a positive charge as shown in each of the three cases in the figure below, assuming $\text{B}$ is perpendicular to $\text{v}$?

> FIGURE {fig:import-auto-id1612786} src=../../media/Figure_23_04_05a-efb2.jpg
> alt: Figure a shows a force vector pointing toward the left and a velocity vector pointing up. Figure b shows the force vector pointing into the page and the velocity vector pointing down. Figure c shows the force vector pointing up and the velocity vector pointing to the left.
> caption: 

SOLUTION:
(a) Into page
(b) West (left)
(c) Out of page
:::

:::exercise {fs-id1572551} type=problems-exercises 
PROBLEM:
Repeat [ref:fs-id2031113] for a negative charge.
:::

:::exercise {fs-id1726851} type=problems-exercises 
PROBLEM:
What is the maximum magnitude of the force on an aluminum rod with a $0\text{.}\text{100}\text{-}\mu \text{C}$ charge that you pass between the poles of a 1.50-T permanent magnet at a speed of 5.00 m/s? In what direction is the force?
SOLUTION:
$7\text{.}\text{50}\times {\text{10}}^{-7}\;\text{N}$ perpendicular to both the magnetic field lines and the velocity
:::

:::exercise {fs-id1911116} type=problems-exercises 
PROBLEM:
(a) Aircraft sometimes acquire small static charges. Suppose a supersonic jet has a $0\text{.}\text{500}\text{-}\mu \text{C}$ charge and flies due west at a speed of 660 m/s over the Earth’s magnetic south pole (near Earth's geographic north pole), where the $8\text{.}\text{00}\times {\text{10}}^{-5}\text{-T}$ magnetic field points straight down. What are the direction and the magnitude of the magnetic force on the plane? (b) Discuss whether the value obtained in part (a) implies this is a significant or negligible effect.
:::

:::exercise {fs-id2092579} type=problems-exercises 
PROBLEM:
(a) A cosmic ray proton moving toward the Earth at $\text{5.00}\times {\text{10}}^{7}\;\text{m/s}$ experiences a magnetic force of $1\text{.}\text{70}\times {\text{10}}^{-\text{16}}\;\text{N}$. What is the strength of the magnetic field if there is a $\text{45º}$ angle between it and the proton’s velocity? (b) Is the value obtained in part (a) consistent with the known strength of the Earth’s magnetic field on its surface? Discuss.
SOLUTION:
(a) $3\text{.}\text{01}\times {\text{10}}^{-5}\;\text{T}$
(b) This is slightly less then the magnetic field strength of $5\times {\text{10}}^{-5}\;\text{T}$ at the surface of the Earth, so it is consistent.
:::

:::exercise {fs-id1809133} type=problems-exercises 
PROBLEM:
An electron moving at $4\text{.}\text{00}\times {\text{10}}^{3}\;\text{m/s}$ in a 1.25-T magnetic field experiences a magnetic force of $1\text{.}\text{40}\times {\text{10}}^{-\text{16}}\;\text{N}$. What angle does the velocity of the electron make with the magnetic field? There are two answers.
:::

:::exercise {fs-id1645778} type=problems-exercises 
PROBLEM:
(a) A physicist performing a sensitive measurement wants to limit the magnetic force on a moving charge in her equipment to less than $1\text{.}\text{00}\times {\text{10}}^{-\text{12}}\;N$. What is the greatest the charge can be if it moves at a maximum speed of 30.0 m/s in the Earth’s field? (b) Discuss whether it would be difficult to limit the charge to less than the value found in (a) by comparing it with typical static electricity and noting that static is often absent.
SOLUTION:
(a) $6\text{.}\text{67}\times {\text{10}}^{-\text{10}}\;\text{C}$ (taking the Earth’s field to be $5\text{.}\text{00}\times {\text{10}}^{-5}\;\text{T}$)
(b) Less than typical static, therefore difficult
:::

## Glossary
- {def} **right hand rule 1 (RHR-1)**: the rule to determine the direction of the magnetic force on a positive moving charge: when the thumb of the right hand points in the direction of the charge’s velocity $\text{v}$ and the fingers point in the direction of the magnetic field $\text{B}$, then the force on the charge is perpendicular and away from the palm; the force on a negative charge is perpendicular and into the palm
- {def} **Lorentz force**: the force on a charge moving in a magnetic field
- {def} **tesla**: T, the SI unit of the magnetic field strength; $\text{1 T}=\frac{\text{1 N}}{A⋅m}$
- {def} **magnetic force**: the force on a charge produced by its motion through a magnetic field; the Lorentz force
- {def} **gauss**: G, the unit of the magnetic field strength; $\text{1 G}={\text{10}}^{–4}\;T$

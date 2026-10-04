# Chapter 19 colour plan

Prepared 2026-09-14, brought under root item 7 on 2026-10-04. The rule is
item 7 and its four ways; the book's `COLOR.md` names the categories. This
file records what the chapter decides that a section should not have to
decide again. No figure hard-codes a hue.

## Categories

Every category is coloured on every page. The ones this chapter meets most:

| Quantity | Category |
|---|---|
| Electric potential $V$, potential difference $\Delta V$, $V_\text{A}$, $V_\text{B}$, $V_\text{AB}$, the voltages $V_1$, $V_2$, $V_3$ across capacitors in series | `voltage` (declared here) |
| Capacitance $C$, $C_\text{air}$, $C_1$, $C_2$, $C_3$, $C_\text{S}$, $C_\text{p}$, $C_\text{tot}$ | `capacitance` (declared here) |
| Charge $q$, $Q$, the charges $Q_1$, $Q_2$, $Q_3$ on capacitors in parallel | `charge` (Chapter 18) |
| Electric field $E$, $E_0$, field lines and field arrows | `electric-field` (Chapter 18) |
| $\text{PE}$, $\Delta\text{PE}$, $\text{KE}$, work $W$, the energy stored in a capacitor $E_\text{cap}$, an energy in electron volts | `energy` |
| The force $F = qE$ on a charge | `force` |
| The speed $v$ of an accelerated particle | `velocity` |
| Plate separation $d$, distance $r$, the step $\Delta s$, a diameter, a gap, the height $h$ of the gravitational analogy | `position` |
| Plate area $A$ | `area` |
| Mass $m$ | `mass` |
| The angle $\theta$ between force and path, the bond angle of water | `angle` |
| A headlight's 30.0 W | `power` |

The dielectric constant $\kappa$ (a ratio of two fields), the dielectric
strength, the electron count $n_\text{e}$, Coulomb's constant $k$ and the
permittivity $\varepsilon_0$ stay in ink, including the dropdown of Table
19.1's materials.

Voltage is not energy and not field. The chapter's first lesson is that a
motorcycle battery and a car battery have the same voltage and store
different energies, and its second is that $V$ is a scalar tied to energy
where $E$ is a vector tied to force. Each of the three is a category with its
own hue, and the figures never let one borrow another's: the electrical hill
of 19.1 is drawn with its height in the voltage hue and the energy the charge
gains as bars in the energy hue, and 19.2's graph of $V$ against distance has
its height in the voltage hue and its slope, which is $E$, in the field hue.
The readout $\Delta\text{PE} = q\Delta V$ reads as energy equals charge times
voltage in three colours, which is the equation.

Equipotential lines wear the voltage hue and field lines the field hue, since
a line of constant potential is a drawing of the potential and a field line is
a drawing of the field; the book's blue and green become those two hues. The
point charges that make 19.4's maps wear the charge hue, and the arrangement
is a choice, never a hue.

A capacitor's charge, voltage and capacitance are three colours: the $+Q$ and
$-Q$ on its plates wear the charge hue, the field lines between them the field
hue, the voltage across them the voltage hue, and the capacitance the figure
computes its own hue on the readout and on the capacitor's label. The wires,
the battery symbols and a capacitor that is no referent are the frame and are
drawn in ink. The dielectric slab is ink and its molecules are told by shape
and orientation; the surface layer of charge they present to the plates wears
the charge hue.

The scheme sets the electric-field hue and the voltage hue two places apart,
so they come out close to each other, and the chapter invents no hue to
separate them. Where both are drawn at once, a field line carries an
arrowhead and an equipotential line carries its own voltage in volts.

## Referents

Each section lists its referents in `referents`, and their outlines and name
labels take `F.ref`; a quantity drawn on a referent keeps its category's hue.

- 19.1: plates A and B of the electrical hill, the battery, its terminals A and
  B and the headlight of Example 19.2, and plates A and B of the electron gun.
- 19.2 and 19.4: plates A and B of the parallel plates; in 19.2 the potentials
  $V_\text{A}$ and $V_\text{B}$ are split to them.
- 19.3: the two point charges of the sim that adds potentials (their labels
  stay in the charge hue), and the sphere and voltmeter of the Van de Graaff
  generator.
- 19.6: the three capacitors and the equivalent capacitor. $C_1$, $Q_1$ and
  $V_1$ are split to the first capacitor, and so on for the second and third;
  Figure 19.22's mixed circuit draws the same three capacitors and uses the
  same referents, while its intermediate $C_\text{S}$ and its $C_\text{tot}$
  stay in ink.
- 19.7: the defibrillator of Example 19.11, its capacitor and its paddles.

19.5 has none: its capacitors, atoms and membrane are each one of a kind, and
the text never keeps two apart. The categorical palette `F.cat(i)` is used
nowhere in the chapter.

## Facts and conventions

The element palette arises in four figures: the electron, proton and helium
nucleus of 19.1's electron gun and battery, the electrons and nucleus of
19.17's polarized atom (`F.el('e-')`, `F.el('p+')`), the water molecule of
19.18 (`F.el('O')`, `F.el('H')`) and the ions of 19.19's membrane
(`F.el('K')`, `F.el('Cl')`, `F.el('Na')`). The spark of a gap that has broken
down is drawn in ink.

Turning colour off must leave labels, line styles and arrow directions
sufficient to understand every figure: a field line and an equipotential line
are then told apart by the arrowheads the field lines carry and the voltage
labels the equipotentials carry.

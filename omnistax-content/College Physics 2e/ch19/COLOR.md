# Chapter 19 colour plan

Prepared 2026-09-14. Approved with `config.md`. This chapter uses the book's
declared physical types and the app's selected palette, as root rule 7
requires, and adds two types of its own. No figure hard-codes hues, and every
page binds only the union of the types its own figures actually draw. The
introduction binds none.

| Quantity | Type | Treatment |
|---|---|---|
| Electric potential $V$, potential difference $\Delta V$, $V_\text{A}$, $V_\text{B}$, $V_\text{AB}$, the voltages $V_1$, $V_2$, $V_3$ across capacitors in series | `voltage` (new) | One hue; the height of the electrical hill of 19.1, the slider that sets the voltage across two plates, the label on every equipotential line of 19.4, the voltage across every capacitor and every readout that writes $\Delta V = \Delta\text{PE}/q$, $V_\text{AB} = Ed$, $V = kQ/r$ or $Q = CV$ wear it. A potential and a potential difference are one type told apart by the $\Delta$; a zero of potential is a reference and is drawn in ink |
| Capacitance $C$, $C_\text{air}$, $C_1$, $C_2$, $C_3$, $C_\text{S}$, $C_\text{p}$, $C_\text{tot}$ | `capacitance` (new) | One hue; the readout of the parallel plate capacitor as $A$ and $d$ move, the label on each capacitor of a circuit and on the equivalent capacitor drawn beside it, the slider that sets an individual capacitance. A capacitor's plates are ink; its capacitance is a number in this hue on its label |
| Charge $q$, $Q$, $q_e$, $q_1$, $q_2$, the charges $Q_1$, $Q_2$, $Q_3$ on capacitors in parallel | `charge` (Chapter 18) | One hue; declared by Chapter 18 in the same wave and used here by name. It wears the hue on the test charge that falls between the plates, on the $+Q$ and $-Q$ of a capacitor's plates, on the slider that sets a charge and on every readout; the sign of a charge is told by its label and its direction of motion, never by a second hue |
| Electric field $E$, $E_0$ | `electric-field` (Chapter 18) | One hue; declared by Chapter 18 and used here by name. Field lines wear it in every figure that draws them (19.5, 19.8 to 19.11, 19.13, 19.16), as do the field arrow between two plates, the slope of $V$ against distance in 19.2 and every readout that writes $E = V_\text{AB}/d$ or $E = -\Delta V/\Delta s$; the book's blue field lines become this hue |
| Electric potential energy $\text{PE}$, $\Delta\text{PE}$, $\text{PE}_\text{i}$, $\text{PE}_\text{f}$, $\Delta\text{PE}_\text{cycle}$, $\Delta\text{PE}_\text{car}$; kinetic energy $\text{KE}$, $\text{KE}_\text{i}$, $\text{KE}_\text{f}$; work $W$; the energy stored in a capacitor $E_\text{cap}$; the electron volt | `energy` | One hue; the two bars that trade potential for kinetic energy as a charge falls through a voltage, the work along an equipotential that reads zero, the shaded triangle under $V$ against $Q$ that is a capacitor's stored energy, and every readout that writes $\Delta\text{PE} = q\Delta V$, $\text{KE} + \text{PE} = \text{constant}$ or $E_\text{cap} = QV/2$. Potential and kinetic energy are one type told apart by their labels and by which bar is which |
| Force $F$ on a charge | `force` | Bind only where a figure draws the force arrow $F = qE$ (Example 19.5 in 19.2, if drawn) |
| Speed $v$ of an accelerated electron | `velocity` | Bind only where a figure of 19.1 draws the electron's final speed as an arrow or states it on a readout (Example 19.3) |
| Plate separation $d$, distance $r$ from a point charge, the step $\Delta s$ over which the potential changes, the height $h$ of the gravitational analogy | `position` | Bind only where a figure brackets the separation or carries it on a slider: 19.2's plates, 19.3's point charge, 19.5's parallel plate capacitor and 19.6's equivalent capacitor with its larger $d$. Chapter 18 writes the Coulomb separation in ink; this chapter's sliders make $d$ and $r$ quantities the reader moves and so binds the type |
| Area $A$; mass $m$; the dielectric constant $\kappa$; the dielectric strength; the number of electrons $n_\text{e}$; Coulomb's constant $k$; the permittivity $\varepsilon_0$; the angle $\theta$ | Untyped | Ink, including the sliders that set $A$ and $\kappa$, the dropdown of Table 19.1's materials and the equation symbols. A dielectric constant is a ratio of two fields and a pure number, as an efficiency is |

Three rules of rule 7 bite in this chapter and are written down so that no
section has to decide them twice.

Voltage is not energy and not field. The chapter's first lesson is that a
motorcycle battery and a car battery have the same voltage and store
different energies, and its second is that $V$ is a scalar tied to energy
where $E$ is a vector tied to force. Each of the three is a type with its
own hue, and the figures never let one borrow another's: the electrical
hill of 19.1 is drawn with its height in the voltage hue and the energy the
charge gains as bars in the energy hue, and 19.2's graph of $V$ against
distance has its height in the voltage hue and its slope, which is $E$, in
the field hue. The readout $\Delta\text{PE} = q\Delta V$ reads as energy
equals charge times voltage in three colours, which is the equation.

Equipotential lines wear the voltage hue and field lines the field hue.
The book draws 19.4 with blue field lines and green equipotentials and says
so in its text; under rule 7 those become the two type hues, since a line
of constant potential is a drawing of the potential and a field line is a
drawing of the field. The charges that make the map wear the charge hue,
and the arrangement (one charge, an opposite pair, two negatives, two
plates) is a choice, never a hue. Nothing else on the map is coloured: the
frame, the scale and the reader's marker are ink.

A capacitor's plates are ink and its charge, voltage and capacitance are
three colours. The plates of a parallel plate capacitor, the wires and the
battery symbol are the frame of the figure and are drawn in ink; the $+Q$
and $-Q$ on the plates wear the charge hue, the field lines between them
the field hue, the voltage across them the voltage hue, and the capacitance
the figure computes wears its own hue on the readout and on the capacitor's
label. The dielectric slab is ink and its molecules are told by shape and
orientation, not tint; the surface layer of charge they present to the
plates wears the charge hue, since it is a charge. The element palette
arises in two figures only: the water molecule of 19.18 is drawn with
`F.el('O')` and `F.el('H')`, since a molecule with an identity is always
drawn in it, and the ions of 19.19's membrane with `F.el('K')`,
`F.el('Cl')` and `F.el('Na')`. The polarized atom of 19.17 is a generic
atom whose nucleus and electrons are drawn as Chapter 18's pages draw
theirs; the 19.5 agent should read `ch18/COLOR.md` for that decision when it
has landed and follow it.

A page binds only what it draws, and these are the bindings as the seven
pages were built. 19.1 binds voltage, charge, energy and velocity, the last
because the electron gun states the speed the voltage gives its particle.
19.2 binds voltage, electric-field, position, charge and force, the force
because Example 19.5 draws the arrow $F = qE$ on the electron. 19.3 binds
voltage, charge, position, electric-field and energy: the field because the
$1/r$ potential and the $1/r^2$ field are drawn against each other, and the
energy because the figure that adds two potentials writes the work a charge
takes to reach the marked point. 19.4 binds voltage, electric-field, charge,
energy and position, the energy because the readout writes the zero work
along an equipotential and the position because the plates carry their
separation on a slider. 19.5 binds capacitance, charge, voltage,
electric-field and position; 19.6 binds capacitance, voltage, charge and
position; and 19.7 binds energy, voltage, capacitance and charge. No page
binds a type it does not draw, and the categorical palette is used nowhere in
the chapter, as this plan expected.

The scheme sets the electric-field hue and the voltage hue two places apart
on a circle of twenty-nine, so they come out close to each other, and the
chapter invents no hue to separate them. Where both are drawn at once, the
figure tells them apart in its drawing: a field line carries an arrowhead
and an equipotential line carries its own voltage in volts. No page binds
a type merely because the chapter declares it. The categorical palette
`F.cat(i)` is not expected on any page: the three capacitors of 19.6 are
told apart by their labels $C_1$, $C_2$, $C_3$ in the capacitance hue and by
position, and a section agent who needs it must say so in the plan and keep
it out of every hue the page binds.

All canvas colours come from `C(type)` and `PAL`, with the element palette
as the one exception named above. Turning colour off must leave labels,
line styles and arrow directions sufficient to understand every figure: a
field line and an equipotential line are then told apart by the arrowheads
the field lines carry and the voltage labels the equipotentials carry.

# Chapter 22 colour plan

Prepared 2026-09-15. Approved with `config.md`. This chapter uses the book's
declared physical types and the app's selected palette, as root rule 7
requires, and adds one type of its own. No figure hard-codes hues, and every
page binds only the union of the types its own figures actually draw. The
introduction binds none.

| Quantity | Type | Treatment |
|---|---|---|
| Magnetic field $B$, $B_1$ | `magnetic-field` (new) | One hue; every field line of the chapter, every dot and cross that stands for a field out of or into the page, the slider that sets the field strength, the arrow that carries the field through the Hall slab and the solenoid's interior, and every readout that writes $F = qvB\sin\theta$, $r = mv/qB$, $\varepsilon = Blv$, $F = IlB\sin\theta$, $\tau = NIAB\sin\theta$, $B = \mu_0 I/2\pi r$, $B = \mu_0 I/2R$ or $B = \mu_0 nI$. A field made by a current wears the same hue as a field made by a magnet, because it is the same quantity; a bar magnet's body is ink and its poles are told by their N and S labels, never by a tint |
| Current $I$, $I_1$, $I_2$ | `current` (Chapter 20) | One hue; declared by Chapter 20 in the same wave and used here by name. The arrow along a wire, the slider that sets the current, the label on each of two parallel wires and every readout that writes a current wear it. The direction of a current is told by its arrowhead or by the dot-and-cross symbol, never by a second hue |
| Force $F$, $F_1$, $F_2$, the force per unit length $F/l$ | `force` (Chapter 4) | One hue; the arrow on a moving charge, on a length of wire, on each side of a current loop and on each of two parallel wires, and every readout that states a magnitude. A magnetic force is a force and wears the force hue; nothing in this chapter gets a hue of its own for being magnetic |
| Torque $\tau$, $\tau_\text{max}$ | `torque` (Chapter 9) | One hue; the curved arrow about the motor's shaft, the bar that rises and falls with $\sin\theta$ on the motor's readout, and the deflection the meter's spring balances |
| Velocity $v$, the drift velocity $v_\text{d}$ | `velocity` (Chapter 2) | One hue; the arrow on a charge crossing a field, the tangent to a circling charge, the slider that sets a speed, and the average speed a Hall flow probe reports |
| Charge $q$, $q_\text{e}$ | `charge` (Chapter 18) | One hue; the moving particle in every figure of 22.4 and 22.5, the carriers that pile up on one face of a Hall conductor, and the sliders that set the size of a charge. The sign of a charge is told by its label and by which way it turns, never by a second hue |
| Electric field $E$ | `electric-field` (Chapter 18) | Bind only in 22.6, where the electric field of the separated charge balances the magnetic force, and in 22.11's velocity selector, where the two fields cancel. Field lines of the two kinds are told apart in the drawing as Chapter 19 tells them apart, by what each line carries |
| Hall emf $\varepsilon$, the accelerating voltage $V$ | `voltage` (Chapter 19) | Bind in 22.6, where the Hall emf is the section's result, and in 22.11's velocity selector and electron gun. Chapter 21's emf row is used by name where it lands |
| The radius $r$ of a charge's circle, the radius $R$ of a loop, the distance $r$ to a wire, the separation of two wires | `position` (Chapter 2) | Bind where a figure brackets the distance or carries it on a slider: 22.5's circle, 22.9's wire and loop, 22.10's separation |
| Permeability of free space $\mu_0$; the area $A$ of a loop; the number of turns $N$; the turns per unit length $n$; the length $l$ of wire in the field and the width $l$ of a Hall conductor; the loop's width $w$; the mass $m$; the angle $\theta$; the Curie temperature's material | Untyped | Ink, including the sliders that set $N$, $A$, $l$ and $\theta$ and the labels on every axis and frame |

Three rules of rule 7 bite in this chapter and are written down so that no
section has to decide them twice.

The field is one type, whatever makes it. A bar magnet's field, a wire's field,
a loop's field and a solenoid's field are the same physical quantity, and the
whole argument of 22.2 and 22.9 is that they are. So one hue carries every
field line on every page of the chapter, and a reader who has learnt it on the
compass map of 22.3 reads the solenoid of 22.9 without being told. The dot and
the cross that stand for a field out of and into the page wear the field hue
too, since they are field lines seen end-on, and this is the one place in the
book where a hue must survive being drawn as a mark two pixels wide: the
figures draw the dot filled and the cross heavy enough to read at the page's
smallest size, and the legend names both.

The magnetic force is a force, and the current is a current. Nothing in this
chapter is given a hue for being magnetic. $F$ on a charge, $F$ on a wire and
$F$ between two wires all wear Chapter 4's force hue, the torque on a loop
wears Chapter 9's, and the current wears Chapter 20's. This is what makes the
chapter's four product formulas legible as one family: $F = qvB\sin\theta$
reads as force equals charge times velocity times field, and $F = IlB\sin\theta$
as force equals current times length times field, in the same colours, with
only the middle factor changed. The sine and the angle are ink in both, because
an angle is untyped.

A body is never tinted. A bar magnet is drawn in ink with N and S on its ends,
a wire is ink, a conductor's slab is ink, a coil is ink, and the iron of 22.2 is
ink whose domains are told by the direction of the little arrows inside it and
by how large they have grown, not by colour. The one exception root rule 7
grants is the element palette, which arises where a page draws a named
particle: the electron, proton and neutron of 22.2's atomic models and of
22.5's cosmic rays are drawn with `F.el('e-')`, `F.el('p')` and `F.el('n')` as
the element palette names them, and the ions of 22.11's mass spectrometer with
their own element symbols, since a particle with an identity is always drawn in
that palette.

A page binds only what it draws, and these are the bindings the eleven pages are
expected to take. 22.1 binds nothing: its figures are magnets, poles and the
forces between them, and the forces bind `force`. 22.2 binds `magnetic-field`
and `current`. 22.3 binds `magnetic-field` and `current`. 22.4 binds
`magnetic-field`, `force`, `velocity` and `charge`. 22.5 binds
`magnetic-field`, `force`, `velocity`, `charge` and `position`. 22.6 binds
`magnetic-field`, `voltage`, `electric-field`, `velocity`, `charge` and
`current`. 22.7 binds `magnetic-field`, `force` and `current`. 22.8 binds
`magnetic-field`, `torque`, `force` and `current`. 22.9 binds `magnetic-field`,
`current` and `position`. 22.10 binds `magnetic-field`, `force`, `current` and
`position`. 22.11 binds `magnetic-field`, `velocity`, `electric-field`,
`voltage` and `position`. A section agent who needs a type this list does not
give its page must say so in the plan and say what draws it.

The categorical palette `F.cat(i)` is expected on two pages only, and never in
a hue the page has bound: the two isotopes that part along two arcs in 22.11's
mass spectrometer, which carry no type of their own and must be told apart, and
the two ions of 22.5's separation problem. The two wires of 22.10 are told
apart by their labels 1 and 2 and by position, not by colour, since both wear
the current hue. A colour that is the physical fact arises once, on the
introduction's aurora photograph, which is kept as the book prints it.

All canvas colours come from `C(type)` and `PAL`, with the element palette as
the one exception named above. Turning colour off must leave labels, line
styles and arrow directions sufficient to understand every figure: a field line
is then told from a force arrow by its shape, the field lines carrying no
arrowhead where they close on themselves and the force arrows carrying one, and
every readout stays legible from its symbols.

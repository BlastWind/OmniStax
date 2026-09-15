# Chapter 18 colour plan

Prepared 2026-09-14. Approved with `config.md`. This chapter uses the book's
declared physical types and the app's selected palette, as root rule 7
requires, and adds two types of its own, the first two of electricity, which
the rest of the book will reuse. No figure hard-codes hues, and every page
binds only the union of the types its own figures actually draw. The
introduction binds none.

| Quantity | Type | Treatment |
|---|---|---|
| Charge $q$, $Q$, $q_1$, $q_2$, $q_\text{e}$, $q_\text{tot}$, $q_\text{a}$ to $q_\text{d}$ | `charge` (new) | One hue for every charge, positive or negative. The label on a charged body, the slider that sets a charge, the readout that writes $F = k\lvert q_1 q_2\rvert/r^2$ or $E = F/q$ and the bar or count that states how much charge a body holds wear it. A charge's sign is told by the sign on its label and, where a body is drawn, by the $+$ and $-$ marks the book draws on it, never by a second hue and never by a tint on the body; a negative charge is the same kind of thing as a positive one, pointing the other way |
| Electric field $E$, $E_1$, $E_2$, $E_\text{tot}$, $E_\parallel$, $E_\perp$ | `electric-field` (new) | One hue; every field arrow, every field line, the probe's readout and the slider that sets a uniform field wear it. Field lines are the field and take its hue at every point; their density and direction, not a change of colour, tell strength and sense. A component keeps the hue and is told by its subscript |
| Coulomb force $F$, $F_1$, $F_2$, $F_\parallel$, the gravitational force $F_\text{G}$, the weight $w$, the net force $F_\text{net}$ | `force` (Chapter 4) | One hue; a force arrow on a charge, told from the field arrow at the same point by its hue and its label. Attraction and repulsion are told by direction, not colour |
| Acceleration $a$ of a charged drop or particle | `acceleration` | Bind only where a figure of 18.8 draws it |
| Speed of light $c$ | `velocity` | Not expected to be bound; 18.1 writes $\Delta m = E/c^2$ once in prose and no figure draws it |
| Energy $E$ of a created pair | `energy` | Not expected to be bound; the same sentence of 18.1, and the symbol clash with the field is why the field is `E_field` |
| Coulomb's constant $k$, the gravitational constant $G$, the masses $m$, $M$, $m_\text{e}$, $\Delta m$, the separation $r$ and the distances $r_1$, $r_2$, the angle $\theta$, the side $d$ of a square, every count of electrons or protons, every fraction and percentage | Untyped | Ink, including the sliders that set a separation and the equation symbols. A distance between charges is a length and not a position, so no figure of the chapter binds `position` for it |

Three rules of rule 7 bite in this chapter and are written down so that no
section has to decide them twice.

Electrons and protons are particles with an identity. Rule 7 puts every
atom, ion, molecule or particle with an identity in the element palette,
`F.el()`, so the electrons that drift across an electroscope, the pairs that
appear and annihilate in Figure 18.9, the nucleus and its orbiting electrons
in 18.5 and the ions of 18.6 are never anonymous ink dots. The app's map
(`omnistax-web/src/lib/fig/elements.ts`) named the chemical elements and no
particle when this file was first written; on 2026-09-14 it added the three
particles of this chapter, keyed by their charge sign, so a page draws an
electron with `F.el('e-')`, a proton with `F.el('p+')` and a neutron with
`F.el('n0')`, and an ion with its element's own symbol (`F.el('Na')`,
`F.el('Cl')`). The earlier instruction to draw a proton as `F.el('H')` and
an electron as an ink dot is superseded, and every figure of the chapter
that draws a particle uses the particle keys. The palette names no
antiparticle, so the antielectron of Figure 18.9 is drawn in the electron's
hue, hollow, and takes a key of its own if the app ever adds one. What any
of them carries, the charge, wears the charge hue on its label and in the
readout that counts it. The two are never confused: the particle is a
thing, coloured as the thing it is, and its charge is a quantity, coloured
as the quantity it is. A rod, a sphere, a cloth, a plate and a drum are
bodies and are ink, with the book's $+$ and $-$ marks drawn on them in ink;
the charge such a body holds is stated in the charge hue beside it.

A sign is not a hue. The temptation in electrostatics is to paint positive
red and negative blue, which every other textbook does; rule 7 forbids it,
since a colour belongs to a kind of quantity and both signs are charge. The
figures tell sign the way the book does, by the $+$ and $-$ on the body and
on the label, and by which way the arrows point: field lines leave a
positive charge and enter a negative one, and a force on a negative charge
points against the field. Colour-off must leave every figure legible from
those marks alone, which is the test the book's `COLOR.md` sets.

Two hues at one point. From 18.4 on, a force arrow and a field arrow often
stand at the same point, as in Figure 18.18, and the whole lesson is that
one depends on the test charge and the other does not. They are told apart
by hue, force in Chapter 4's and field in this chapter's, and by label, and
the readout writes $E = F/q$ with all three in their colours, so the reader
sees a force divided by a charge give a field.

A page binds only what it draws, and this is what the built pages bind. The
introduction binds none. 18.1 binds `charge` alone; 18.2 binds `charge`;
18.3 binds `charge` and `force`; 18.4 binds `charge`, `force` and
`electric-field`; 18.5 binds `charge` and `electric-field`, and not `force`,
since no figure of that page draws a force arrow; 18.6 binds `charge`,
`electric-field` for the screened lines and `force` for the attraction
between the water molecule and the ion it surrounds; 18.7 binds `charge`,
`electric-field` and `force` for Figure 18.26's parallel force; and 18.8
binds `charge`, `electric-field`, `force` and `acceleration` for the drop of
Example 18.5. No page binds a type merely because the chapter declares it.

All canvas colours come from `C(type)` and `PAL`, with two exceptions the
families of rule 7 allow. The element palette draws every electron, proton,
neutron and ion, as above. The categorical palette
`F.cat(i)` tells apart the two spheres of Figure 18.12, the two suspended
balls of 18.2's AP item and the two glass rods of Figure 18.4(b) only where
a label cannot, and is never used in a hue the page has bound; the
photographs of a flame or a spark, where a page keeps one, are the physical
fact and stay as the book prints them. Turning colour off must leave the
$+$ and $-$ marks, the labels, the arrow directions and the line density
sufficient to understand every figure.

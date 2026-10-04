# Chapter 18 colour plan

Prepared 2026-09-14. Approved with `config.md`. This chapter uses the book's
declared physical types and the app's selected palette, as root item 7
requires, and adds two types of its own, the first two of electricity, which
the rest of the book will reuse. No figure hard-codes hues.

| Quantity | Type | Treatment |
|---|---|---|
| Charge $q$, $Q$, $q_1$, $q_2$, $q_\text{e}$, $q_\text{tot}$, $q_\text{a}$ to $q_\text{d}$ | `charge` (new) | One hue for every charge, positive or negative. The label on a charged body, the slider that sets a charge, the readout that writes $F = k\lvert q_1 q_2\rvert/r^2$ or $E = F/q$ and the bar or count that states how much charge a body holds wear it. A charge's sign is told by the sign on its label and, where a body is drawn, by the $+$ and $-$ marks the book draws on it, never by a second hue and never by a tint on the body; a negative charge is the same kind of thing as a positive one, pointing the other way |
| Electric field $E$, $E_1$, $E_2$, $E_\text{tot}$, $E_\parallel$, $E_\perp$ | `electric-field` (new) | One hue; every field arrow, every field line, the probe's readout and the slider that sets a uniform field wear it. Field lines are the field and take its hue at every point; their density and direction, not a change of colour, tell strength and sense. A component keeps the hue and is told by its subscript |
| Coulomb force $F$, $F_1$, $F_2$, $F_\parallel$, the gravitational force $F_\text{G}$, the weight $w$, the net force $F_\text{net}$ | `force` (Chapter 4) | One hue; a force arrow on a charge, told from the field arrow at the same point by its hue and its label. Attraction and repulsion are told by direction, not colour |
| Acceleration $a$ of a charged drop or particle | `acceleration` | The drop of Example 18.5 and its readout |
| Speed of light $c$ | `velocity` | The symbol where 18.1 writes $\Delta m = E/c^2$ |
| Energy $E$ of a created pair | `energy` | The symbol in the same sentence of 18.1 and the energy arrow of Figure 18.9; the symbol clash with the field is why the field is `E_field` |
| The masses $m$, $M$, $m_\text{e}$, $\Delta m$ | `mass` | The symbols, the mass slider and the mass label of the charged drop |
| The separation $r$, the distances $r_1$, $r_2$, a radius, the distance to a probe | `position` | The symbols, the sliders that set a separation, a radius or a distance, and the rule drawn between the two ends |
| The angle $\theta$ of the total field, the angle of an applied field, the angle the leaves of an electroscope stand apart | `angle` | The symbol, the arc, the slider and the label |
| Coulomb's constant $k$, the gravitational constant $G$, the side $d$ of a square, every count of electrons or protons, every fraction and percentage | Untyped | Ink |

Three points of item 7 bite in this chapter and are written down so that no
section has to decide them twice.

Electrons and protons are particles with an identity. Item 7 puts every
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
as the quantity it is. A rod, a sphere, a cloth, a plate and a drum that
the text names are referents and wear their referent colours on outline and
name, with the book's $+$ and $-$ marks drawn on them in ink; the charge such
a body holds is stated in the charge hue beside it.

A sign is not a hue. The temptation in electrostatics is to paint positive
red and negative blue, which every other textbook does; item 7 forbids it,
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

Every page colours each category wherever it names a particular one. The
figures draw charge throughout, the field from 18.4 on, force wherever a
force arrow is drawn, position for every separation, radius and distance,
angle in 18.2, 18.5 and 18.7, energy in Figure 18.9, and mass and
acceleration for the drop of Example 18.5.

Canvas colours come in item 7's four ways. The element palette draws every
electron, proton, neutron and ion, as above. The referents of each section,
listed in its `referents` table and drawn with `F.ref`, tell apart the
things its text names: the rods and cloths of Figure 18.4, the amber and
the cloth of Figure 18.8, the two spheres of Figure 18.12, the point charges
of Coulomb's law and of Example 18.4, the corners of the two squares, the
machine parts of 18.8 and the rest. A force or a field drawn on one keeps
its category's hue. `F.cat(i)` is left only for the three quarks of Figure
18.7, which the text never names one by one. The photographs of a flame or
a spark, where a page keeps one, are the physical fact and stay as the book
prints them. Turning colour off must leave the
$+$ and $-$ marks, the labels, the arrow directions and the line density
sufficient to understand every figure.

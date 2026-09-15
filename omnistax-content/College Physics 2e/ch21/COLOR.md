# Chapter 21 colour plan

Prepared 2026-09-15 in the chapter's prep pass, beside `config.md`. This chapter
uses the book's declared types and the app's selected palette, as root rule 7 and
root rule 22 require. It declares no type of its own, hard-codes no hue, and every
page binds only the union of the types its own figures draw.

| Quantity | Existing type | Treatment |
|---|---|---|
| Every current: the source's current, a branch current, an initial current, the current through a galvanometer | `current` (Chapter 20) | One hue for all; branches are told apart by label, by the path they run along and by the arrow's direction, never by a second hue |
| Every resistance: a single resistor, a series or parallel equivalent, a load, an internal resistance, a shunt, an unknown | `resistance` (Chapter 20) | One hue; an equivalent resistance keeps the hue and is told by its subscript, and the internal resistance by the lower-case $r$ the book uses |
| Every voltage: a source's output, an emf, a terminal voltage, a voltage drop across a resistor, the voltage across a capacitor | `voltage` (Chapter 19) | One hue; the emf and the terminal voltage share it deliberately, since $V = \mathcal{E} - Ir$ is a comparison of the two |
| Capacitance | `capacitance` (Chapter 19) | Bound on 21.6 alone |
| Charge stored on a plate | `charge` (Chapter 18) | Bound on 21.6 alone |
| Elapsed time and the time constant $\tau = RC$ | `time` (Chapter 2) | Bound on 21.6, where a time axis is drawn |
| Power dissipated or delivered | `power` (Chapter 7) | Bound where a readout states a dissipation, which is 21.1 and 21.2 |
| A resistance ratio, a fraction of a time constant, a current sensitivity given as a number, a count of cells, the letters G, V and A on a meter and the letters a to h on a loop | Untyped | Ink, including the frame, the wires and every label |

Which section binds what:

| Section | Types bound |
|---|---|
| intro | none |
| 21.1 | `resistance`, `current`, `voltage`, `power` |
| 21.2 | `voltage`, `resistance`, `current`, `power` |
| 21.3 | `current`, `voltage`, `resistance` |
| 21.4 | `resistance`, `current`, `voltage` |
| 21.5 | `resistance`, `voltage`, `current` |
| 21.6 | `voltage`, `time`, `capacitance`, `resistance`, `current`, `charge` |

Of root rule 7's four families this chapter uses two. Type hues carry every
quantity the schematics draw. The categorical palette `F.cat(i)` tells apart the
branches of a network where the reader must follow one path rather than another,
and the arms of a bridge, and it is never used in a hue the page has bound. No
figure of this chapter draws an atom or a molecule, so the element palette does
not arise, and nothing here is a colour that is a physical fact: a wire is ink, a
battery is ink, and a resistor's box is ink with its resistance written beside it
in the resistance hue. A galvanometer needle is ink.

The test for one figure is root rule 7's: everything in it with an identity is
coloured, or the whole figure is ink. Colour-off drops the type hues and keeps the
categorical ones, so every schematic must stay legible from its labels, its arrow
directions and its caption alone.

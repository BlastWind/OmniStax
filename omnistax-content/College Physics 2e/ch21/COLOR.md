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
| A galvanometer's current sensitivity | `current` (Chapter 20) | It is a current, the one that gives a full-scale deflection, so it wears the current hue on its slider and in the prose beside the dial |
| A resistance ratio, a fraction of a time constant, a percentage error, a count of cells, the letters G, V and A on a meter and the letters a to h on a loop | Untyped | Ink, including the frame, the wires and every label |

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

Of root rule 7's four families this chapter uses two, as it was built. Type hues
carry every quantity the schematics draw. The element palette `F.el('e-')` colours
the two electrons the chemical reaction drives onto the anode in Figure 21.11 of
21.2, which is the one place in the chapter where a particle with an identity is
drawn. The categorical palette was offered to the branches of a network and to the
arms of a bridge and in the end no figure needed it: a branch is told apart by its
label, by the path it runs along and by the direction of its arrow, and an arm of
the bridge by the letter at its corner, so nothing here is drawn in a categorical
hue. Nothing here is a colour that is a physical fact either: a wire is ink, a
battery is ink, and a resistor's box is ink with its resistance written beside it
in the resistance hue. A meter's needle takes the hue of the quantity it shows, the
current hue on a galvanometer and an ammeter and the voltage hue on a voltmeter, and
it turns to ink when it is driven past the end of its scale.

The test for one figure is root rule 7's: everything in it with an identity is
coloured, or the whole figure is ink. Colour-off drops the type hues and keeps the
categorical ones, so every schematic must stay legible from its labels, its arrow
directions and its caption alone.

## What the build bound

The table above is the chapter as it stands after the chapter pass of 2026-09-15:
every section binds exactly the types listed for it, which is the union of what its
own figures draw, and no page binds a type it does not draw. No type was added and
none was dropped.

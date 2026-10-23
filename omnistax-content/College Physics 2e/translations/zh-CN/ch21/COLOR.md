# Chapter 21 colour plan

Prepared 2026-09-15 in the chapter's prep pass, beside `config.md`, and restated
2026-10-04 under root `RULES.md` item 7. It refines the book's `COLOR.md` and
invents no hue: the chapter uses the book's declared categories and declares
none of its own. Every category is coloured on every page, in prose where a
phrase names a particular one, in maths through its symbol's variables row, and
in every figure that draws it. No figure hard-codes a hue.

## Categories

| Quantity | Category | Notes |
|---|---|---|
| Every current: the source's current, a branch current, an initial current, the current through a galvanometer, a galvanometer's current sensitivity | `current` | Branches are told apart by label, by the path they run along and by the arrow's direction. The sensitivity is the current that gives a full-scale deflection, so it wears the current hue on its slider and in the prose beside the dial |
| Every resistance: a single resistor, a series or parallel equivalent, a load, an internal resistance, a shunt, an unknown | `resistance` | An equivalent resistance is told by its subscript, the internal resistance by the lower-case $r$ the book uses |
| Every voltage: a source's output, an emf, a terminal voltage, a voltage drop, a change in potential around a loop, the voltage across a capacitor | `voltage` | The emf and the terminal voltage share the hue deliberately, since $V = \mathcal{E} - Ir$ compares the two |
| Power dissipated or delivered | `power` | The glow of a bulb is drawn in it, as the share of its full power the bulb gives out |
| Capacitance | `capacitance` | |
| Charge stored on a plate, the charge in $\text{PE} = qV$ | `charge` | |
| Elapsed time and the time constant $\tau = RC$, a flash's duration | `time` | |
| The energy a source supplies and the resistors dissipate, the 2 eV a reaction gives an electron | `energy` | |
| The bullet's velocity and the apple's diameter in Example 21.6 | `velocity`, `position` | |
| A resistance ratio, a fraction of a time constant, a percentage error, a count of cells, the letters G, V and A on a meter and the letters a to h on a loop | ink | A rating, a count or a label, and the frame, the wires and every label of the frame |

## Facts and conventions

The element palette `F.el('e-')` colours the two electrons the chemical
reaction drives onto the anode in Figure 21.11 of 21.2, the one place in the
chapter where a particle with an identity is drawn. Nothing here is a colour
that is a physical fact: a wire is ink, a battery is ink, and a resistor's
value is written beside it in the resistance hue. A meter's needle takes the
hue of the quantity it shows, the current hue on a galvanometer and an ammeter
and the voltage hue on a voltmeter, and turns to ink when it is driven past the
end of its scale.

## Referents

Each section lists its referents in `referents`; the figure draws each body
(a zigzag, a cell's plates, a meter's rim, a case, a plate) with `F.ref` and the
text marks every reference, pronouns included. A quantity drawn on a referent,
a resistor's name and value or a cell's emf, keeps its category's hue. A
resistor named $R_1$ is the same referent in every figure of its section that
labels a resistor $R_1$, so the subscript the variables row splits to it wears
one colour across the page.

- 21.1: the resistors $R_1$ to $R_4$, whose $R$, $I$, $V$ and $P$ subscripts split to them; in Figure 21.7 they are the wires, the bulb and the motor. The seven resistors of Figure 21.5 are the network's own, never named one by one, and stay ink with unsplit subscripts.
- 21.2: the first and the second source (the two cells, or the charger and the battery on charge), whose $\mathcal{E}$ and $r$ subscripts split to them; the load, whose $R_\text{load}$ splits to it; the anode and the cathode of the lead-acid cell.
- 21.3: the two sources and the resistors $R_1$, $R_2$ and $R_3$ of the two-loop circuit, with $R_1$ and $R_2$ of the loop rule's circuit under the same names. The branch currents $I_1$ to $I_3$ stay unsplit, since their subscripts name branches and not things drawn.
- 21.4: the voltmeter and the ammeter; the galvanometer of the running example, whose $I_\text{G}$ splits to it.
- 21.5: the battery and the voltmeter of Figure 21.33; the unknown and the standard cell, whose $\mathcal{E}_x$ and $\mathcal{E}_s$ split to them, and the long wire; the bridge's arms $R_1$, $R_2$ and $R_3$, its unknown resistance and its galvanometer. $R_x$ and $R_s$ stay unsplit, since $R_x$ is both a length of wire and the bridge's unknown.
- 21.6: the capacitor, whose $V_c$ splits to it, the resistor and the lamp.

Colour off drops every hue, so every schematic must stay legible from its
labels, its arrow directions and its caption alone.

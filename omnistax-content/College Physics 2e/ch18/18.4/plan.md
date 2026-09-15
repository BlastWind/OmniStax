# Plan: 18.4 Electric Field: Concept of a Field Revisited

Written before the page was built, as `ch18/config.md` asks in place of the
per-section stop (root rules 2 and 5).

## Sub-concepts and their spans

The book prints one header of its own in this section, "Concept of a Field",
and it is kept as the book writes it. The two paragraphs that stand before it
carry an idea of their own, action at a distance and the force field that
carries it, so they are headed by the agent, as `config.md` allows. The
passage that defines the field and the passage that applies the definition to
a point charge print no headers in the book and are headed by the agent.

| span | header | what it carries |
|---|---|---|
| `force-field` | Action at a distance, and the force field (agent's) | the two opening paragraphs, contact forces, the comb and the bits of paper, the force field and the test object |
| `concept-of-a-field` | Concept of a Field (the book's) | what a field is, the gravitational field as the example, the Coulomb force field and Figure 18.18 |
| `electric-field-defined` | The electric field, force per unit charge (agent's) | the definition $E = F/q$, its direction, its units, the vanishingly small test charge, and $F = qE$ |
| `field-of-point-charge` | The field of a point charge (agent's) | the derivation in which the test charge cancels, $E = k\|Q\|/r^2$, Example 18.2 and Example 18.3 |

## Concept nodes, and where each is introduced

The six nodes are already in `book.json`; the page introduces each in one span.

| concept | span | verb |
|---|---|---|
| `coulomb-force-field` | `force-field` | introduces |
| `coulomb-force-field` | `concept-of-a-field` | reinforces (Figure 18.18 is the argument that it is not unique) |
| `test-charge` | `concept-of-a-field` | introduces |
| `test-charge` | `electric-field-defined` | uses |
| `electric-field` | `electric-field-defined` | introduces |
| `electric-field-direction` | `electric-field-defined` | introduces |
| `force-from-electric-field` | `electric-field-defined` | introduces |
| `field-of-point-charge` | `field-of-point-charge` | introduces |
| `electric-field` | `field-of-point-charge` | uses |
| `force-from-electric-field` | `field-of-point-charge` | reinforces (Example 18.3) |
| `electric-field-direction` | `field-of-point-charge` | reinforces (the discussion of Example 18.2) |

No node of this section is without a book exercise, so nothing is generated
(rule 13).

## Figures

Two figures, and the plan argues that two is the right number. The section
states four relations, but three of them, $E = F/q$, $F = qE$ and
$E = k|Q|/r^2$, are one picture: a charge, a point a chosen distance from it,
and a test charge set down there. Drawing them apart would draw the same
scene three times and would hide the very thing the section is for, that the
field at the point does not move when the test charge changes while the force
on the test charge does. So the second figure carries all three, and it is
the page's centre.

```
sim-force-field · Figure 18.18 · coulomb-force-field, test-charge · variation by slider: the book draws two panels, one repulsion and one attraction, and the reader must imagine the rest; here the two test charges are set through zero and across sign at once and the pair of forces answers together, which is what "not unique at any point in space" means · still, because two charges held at a fixed separation while the reader decides how much charge each carries has no time in it · sliders Q (charge), q1 (charge, through zero and across sign), q2 (charge, through zero and across sign), r (untyped, the separation, in ink) · headline says which way each force points and which is the stronger · no graph · 2D, a flat scene, as rule 28.1 has it
```

Tier: still simulation, the lowest tier that delivers the named value add
(rule 24.5). The book's numbers are the defaults, so the figure loads as the
book's two panels side by side: $q_1$ positive and smaller, $q_2$ negative
and larger in magnitude. Labels: four entities, all named on the canvas, so
they are on with no Labels button (rule 26.7). Readout: the two Coulomb
forces written out with the live numbers.

```
sim-point-charge-field · Sim · electric-field, field-of-point-charge, force-from-electric-field, electric-field-direction, test-charge · variation by slider and standardisation: the field arrow at the probe holds still while the test charge is dragged through zero and across sign and the force arrow shrinks, vanishes and turns about, which is the section's whole argument and which no still figure shows; the graph beside it gives the inverse square its shape · still, because a charge held at a distance from another has no clock in it and a transport here would be the dummy loop rule 14 forbids · sliders Q (charge), r (untyped, the distance to the probe, in ink), q (charge, through zero and across sign) · headline states the field at the probe and the force on the test charge there · graph below the scene, E against r, since the scene is horizontal · 2D
```

Tier: still simulation. Defaults are the book's: $Q = 2.00$ nC and
$r = 5.00$ mm, which is Example 18.2 and reads $7.19 \times 10^{5}$ N/C on
load, and $q = -0.250$ μC, which is Example 18.3 and reads 0.180 N attractive.
So the two worked examples are one state of the figure, as rule 25 asks.
Axis ranges are fixed from the slider maxima: $r$ from 1.00 mm to 20.0 mm,
$E$ from 0 to $2.0 \times 10^{6}$ N/C, and a value above the top goes through
`pinned()`. Labels: five entities, named on the canvas, on by default.

No figure of this section folds another, and neither figure has a clock, so
neither carries a transport.

## Photographs and unnumbered images

The section prints no photograph and no unnumbered image. Figure 18.18 is
the section's one book figure and is kept as the original of
`sim-force-field`, at the 200 px width the CNXML gives it.

## Extra simulations offered

None survives the test of rule 15. A field map of the single charge is 18.5's
own work and would take the reader past what this page has taught; a
force-against-distance graph would say only what the $E$ against $r$ graph
already says.

## Exercises

| kind | count | placement |
|---|---|---|
| conceptual question | 2 | the first inline after `electric-field-defined`, since it is a short check on the vanishingly small test charge; the second at the end |
| AP test prep | 7 | all at the end; 4 keyed as the book keys them, 3 kept as open items with their options and an AI-marked approach |
| problem | 3 of 6 | at the end; the three the book leaves unkeyed are left out and named in the notes |

The AP item that follows "questions 31–32" carries the shared setup repeated
in its own prompt, as `config.md` asks, since each item stands on its own card.
Nothing is taken from another section and nothing is held for a later page.

## Tables

The section prints none.

## Types the page binds

`charge`, `force` and `electric-field`, which is what `ch18/COLOR.md` says
18.4 binds. Coulomb's constant $k$, the separation $r$ and the distances stay
untyped and in ink. No body wears a hue: a charge's sign is told by the sign
on its label and by the $+$ and $-$ drawn on it.

## Wanted at chapter level

- `eq-electric-field` → 18.4-electric-field-defined
- `eq-force-from-field` → 18.4-electric-field-defined
- `eq-field-of-point-charge-derivation` → 18.4-field-of-point-charge
- `eq-field-of-point-charge` → 18.4-field-of-point-charge
- `E_field` → 18.4-electric-field-defined
- `F` → 18.4-electric-field-defined
- `q` → 18.4-concept-of-a-field
- `Q_charge` → 18.4-concept-of-a-field
- `r` → 18.4-concept-of-a-field
- No concept or symbol row of this section needs a correction.

**Applied by the chapter pass (2026-09-15).** All four equation anchors and
all five variable anchors are written exactly as listed. No concept or
symbol row was changed.

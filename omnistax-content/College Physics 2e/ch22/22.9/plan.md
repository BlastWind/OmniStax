# Plan: 22.9 Magnetic Fields Produced by Currents: Ampere's Law

Written before the page was built, and left for review after it, as `ch22/config.md`
records (root rules 2, 5 and 15 are replaced by this file for the wave).

## Sub-concepts, and where each concept is introduced

The module prints four headers of its own and `config.md` keeps them as the book
writes them. Two spans are the agent's: the opening paragraph, which asks the
section's question before any header, and the closing paragraph on the toroid,
which the book leaves under the solenoid's header although it is about neither a
solenoid nor a flat coil.

| span | header | concepts |
|---|---|---|
| `shapes-of-current` | What the shape of a current does to its field (agent) | uses `magnetic-field`, `current-is-the-source-of-magnetism` |
| `straight-wire` | Magnetic Field Created by a Long Straight Current-Carrying Wire: Right Hand Rule 2 (book) | introduces `right-hand-rule-2`, `field-of-a-long-straight-wire`, `permeability-of-free-space`; uses `direction-of-field-lines` |
| `amperes-law` | Ampere's Law and Others (book) | introduces `amperes-law`; reinforces `field-of-a-long-straight-wire`; uses `rules-for-magnetic-field-lines` |
| `loop` | Magnetic Field Produced by a Current-Carrying Circular Loop (book) | introduces `field-at-the-centre-of-a-loop`; uses `right-hand-rule-2`, `electromagnet` |
| `solenoid` | Magnetic Field Produced by a Current-Carrying Solenoid (book) | introduces `field-inside-a-solenoid`; uses `right-hand-rule-2`, `permeability-of-free-space` |
| `toroid` | Toroids, and the other shapes a coil is wound in (agent) | reinforces `field-inside-a-solenoid`; uses `magnetic-confinement` |

All six of the section's own concept nodes are introduced on the page. Example 22.6
belongs to `straight-wire` and Example 22.7 to `solenoid`; neither gets a figure of
its own, since the section figure opens on the numbers of each (rule 14).

## Figures

```
sim-field-of-a-current · Figure 22.37 + 22.38 + 22.39 · field-of-a-long-straight-wire,
right-hand-rule-2, permeability-of-free-space, field-at-the-centre-of-a-loop,
field-inside-a-solenoid · value add: shape in space, variation by slider and
standardisation, since the three arrangements are one field seen three ways and the
reader must otherwise imagine the third dimension three separate times · still, because
a steady current makes a field that is a state of the arrangement and nothing in it has
a clock · choice: the arrangement, as a dropdown because the three names would wrap a button
row (rule 26.1), choice: the right hand (shown, hidden); sliders: I (current), r or R (position) or n (untyped, the
turns per metre), N (untyped, the turns of a flat coil, on the loop alone) · headline: the
live sentence, "A current of 25 A makes a field of 1.00 × 10⁻⁴ T at 5.0 cm from the wire,
twice the Earth's field." · graph below the scene, B against the distance, the radius or
the turns per metre · 3D, the pitch held between 17° below the horizontal and 86° above
it and the yaw free
```

*The tier* (rules 24.5, 28.3, and the grant in `ch22/config.md`). The lowest tier that
delivers the value adds is not the flat one and not the locked view. What the section
teaches is that one field, circular about a current, is arranged three different ways in
space: wrapped round a line, wrapped round a ring so that the wraps crowd together at the
ring's centre, and wrapped round each turn of a cylinder so that the crowding fills the
whole interior and nothing is left outside. A flat drawing can show one of those three,
and the book draws each of them once in perspective; what it cannot do is let the reader
carry the same circles from one arrangement to the next, which is the argument. A locked
view would fix one viewpoint, and the viewpoint that shows the wire's circles best (down
the wire) is the one that shows the solenoid's interior worst (end-on). Turning the scene
is the lesson, so the full tier is earned.

*The orbit's bound* (rule 26.3). The pitch runs from 17° below the horizontal to 86°
above it. The top of the range looks straight down onto the loop's own axis, where the field lines are the concentric circles the compasses map, and it stops
four degrees short of the pole so the scene never collapses to a line seen edge-on. The
bottom stops before the scene turns over: the sense of every circle here is carried by an
arrowhead and by the right hand, and a reader looking up at the arrangement from
underneath reads the curl of the fingers the wrong way round, which is exactly the mistake
right hand rule 2 exists to prevent. The yaw is free, because there is no privileged
compass direction about a current and every one of them shows the same circles; the three
snap buttons are three quarters on, along the wire and from above.

*Labels* (rule 26.7). The frame — the headline, the slider names, the axis titles of the
graph — is always shown. Of the entities, at most five are named at once (the current, the
field, the distance or the radius or the turns, and the solenoid's two ends), they are
spread round the scene and they do not collide at any setting, so they are on by default;
the conductor, the guide rings and the parts of the hand carry hover names instead.

*Defaults, ranges and scales.* The straight wire opens on Example 22.6, 25 A at 5.0 cm,
and gives its 1.00 × 10⁻⁴ T. The loop opens on the same 25 A at the same 5.0 cm, so that
the reader can read the loop's field against the wire's and see the factor of π the two
formulas differ by. The solenoid opens on Example 22.7, 1000 turns per metre at 1600 A,
and gives its 2.01 T. Currents run 5 to 50 A for the wire and the loop and 200 to 2000 A
for the solenoid; distances and radii run 2 to 12 cm; the turns per metre run 200 to 2000;
the flat coil runs 1 to 4 turns on soft detents. Each arrangement holds one fixed scale
taken from its greatest extent: 1.7 scene units to 12 cm for the wire and the loop, and a
solenoid 3.2 units long standing for the book's 2.00 m coil, whose winding is drawn one
turn to every hundred the metre really holds, which the readout states. The graph's axes
are fixed per arrangement and stated in the code; a value past them goes through
`pinned()`.

*The flat fallback* (rule 28.3). Where the browser has no WebGL the canvas draws the
arrangement flat instead — the wire end-on with its circles, the loop from the side, the
solenoid in section — under the same sliders, the same readout and the same graph, and
says in the figure that the scene could not be turned.

```
sim-toroid · Sim · field-inside-a-solenoid, magnetic-confinement · value add: shape in
space and variation by slider, since the reader is asked to picture a solenoid bent into a
circle and to see that its field then has nowhere to leave from · still, because the field
of a steady current is a state and the charged particles the paragraph mentions are named,
not drawn · choice: the coil (straight, bent into a ring); sliders: I (current), N
(untyped, the turns of the coil, 1200 to 4000, the winding drawn one turn to every two
hundred the coil holds) · headline: the live sentence, "The same 2000 turns
carrying 1600 A make 2.01 T inside, whether the coil is straight or bent into a ring." ·
no graph, since the shape of the field is the whole of the idea · a locked view, no orbit
```

*The tier* (rules 24.5, 28.2, and the locked-view list in `ch22/config.md`). This is a
solid the book would print in perspective and prints no picture of at all, so it is drawn
from a locked view. Nothing about the arrangement changes with where the reader stands:
one viewpoint, a little above the plane of the ring, shows the winding, the hole and the
closed interior field at once, and an orbit would reveal no second thing. The value add is
delivered at the cheaper tier, so the cheaper tier is where it stays.

*Why the choice is a choice and not a slider* (rule 26.1). Straight and bent are two
states, not a quantity, so they are a button row. The point of the figure is that the
turns per metre, and so the field inside, are the same in both: bending the coil takes
the two ends away, and with them the only place the field had to leave from.

## Photographs and unnumbered images

None. The section prints three images, all of them diagrams, and all three are folded into
`sim-field-of-a-current` and kept as its originals. No exercise of the section refers to
an image, so nothing travels on an exercise card.

## Tables

None.

## Exercises

| id | source | kind | Bloom | place | answer |
|---|---|---|---|---|---|
| `ap1` | `fs-id1555420` | ap-test-prep | Analyze | end | choice, keyed (e) |
| `ap2` | `fs-id1892424` | ap-test-prep | Apply | end | open, AI approach |
| `ap3` | `fs-id2346142` | ap-test-prep | Apply | end | choice, keyed (c) |
| `ap4` | `fs-id3324784` | ap-test-prep | Understand | end | open, AI approach |
| `cq1` | `eip-401` | conceptual-question | Analyze | end | open, AI approach |

The module prints no Problems and Exercises section and no Check Your Understanding box,
so the page sets five items and none of them is inline. `eip-401` is untyped in the CNXML
and is classed by the Conceptual Questions header it sits under, as the book's rules ask.
The CNXML was read for each AP item's key rather than the note: `fs-id1555420` and
`fs-id2346142` carry a printed solution, and the solutions of `fs-id1892424` and
`fs-id3324784` are commented out of the source, so those two are unkeyed and are kept as
open items with an AI-marked suggested approach. `fs-id2346142` opens with a paragraph
about the left-hand rule that answers the previous item's part (b) rather than asking
anything; the book prints it inside the problem and the page carries it as printed.

## Wanted at chapter level

Anchors, one per equation row of the section:

- `eq-field-of-a-straight-wire` → `22.9-straight-wire`
- `eq-field-at-centre-of-a-loop` → `22.9-loop`
- `eq-field-of-a-flat-coil` → `22.9-loop`
- `eq-field-inside-a-solenoid` → `22.9-solenoid`
- `eq-turns-per-unit-length` → `22.9-solenoid`

No concept or symbol fix is wanted. The three variables the chapter holds for this section
(`μ_0`, `R`, `n`) and the five equations are right as they stand, and every symbol the page
writes already has a row: `B_mag`, `I_curr`, `r_curv`, `R`, `n`, `N_count`, `l`, `μ_0`.

## Extra simulations offered, none built

- A sim that builds a current of any shape out of short segments and adds their fields
  one at a time, so that the reader sees Ampere's law as the sum the section says it is:
  drag the segments into a straight line and the circles come back, close them into a ring
  and the fields crowd at the centre. It opens a view the text does not give, but the text
  says plainly that summing the segments needs integral calculus, and a figure that does
  the sum for the reader would teach past the page (rule 26.5).
- A sim that lays the Earth's field, an overhead power line's field and a refrigerator
  magnet's field on one scale, so that the opening question about surveyors is answered by
  eye. 22.4's tesla-and-gauss figure already carries a scale of field strengths, and a
  second one would repeat it.

**Chapter pass, 2026-09-15.** All eight anchors written with `ost set`: the five
equation rows carry `22.9-straight-wire`, `22.9-loop`, `22.9-loop`,
`22.9-solenoid` and `22.9-solenoid` in that order, and the three variable rows
the section holds are anchored with them, `μ_0` to `22.9-straight-wire`, `R` to
`22.9-loop` and `n` to `22.9-solenoid`. `config.md`'s line about the four
sketching and drawing problems is corrected: this section prints no problems at
all, so the chapter has two of them. The AP item fs-id2346142 keeps the
paragraph that answers the item before it, and the summary keeps its $n$ where
the body writes $N$; both are gathered in `ch22/exploration.md` under Errata.
The field lines this page draws round a current carry no arrowhead and are told
by the field vectors drawn tangent to them, which `ch22/COLOR.md` now names as
one of the three ways a current's field line may carry its sense.

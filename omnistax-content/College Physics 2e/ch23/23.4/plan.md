# Plan: 23.4 Eddy Currents and Magnetic Damping (m42404)

Source: `source.md`, converted from the CNXML. Written before building, left for
review afterwards, as `ch23/config.md` records. The chapter's one wholly
qualitative section: no equation, no worked example, no Check Your Understanding
box, five drawings and two photographs, two conceptual questions and two
problems, both of the problems unkeyed.

## Sub-concepts (page headers)

The book prints two headers of its own and `config.md` keeps them as it writes
them, so the page is two spans:

1. **Eddy Currents and Magnetic Damping** (`eddy-currents`): the pendulum
   demonstration of Figure 23.12, the plate entering and leaving the field in
   Figure 23.13, and the slotted plate of Figure 23.14.
2. **Applications of Magnetic Damping** (`applications`): the laboratory balance
   (Figure 23.15), the recycling ramp (Figure 23.16), the metal detector
   (Figure 23.17), the roller coaster's brakes (Figure 23.18) and the induction
   cooktop.

## Concept nodes

The four nodes are already in `book.json` from the chapter's preparation and this
page introduces all four. Where each is introduced, and what the spans lean on:

| id | kind | span | verb |
|---|---|---|---|
| `eddy-current` | idea | `eddy-currents` | introduces |
| `magnetic-damping` | result | `eddy-currents` | introduces |
| `slotting-reduces-eddy-currents` | result | `eddy-currents` | introduces |
| `applications-of-magnetic-damping` | idea | `applications` | introduces |

`eddy-currents` uses `motional-emf` (23.3), `faradays-law` and `lenzs-law`
(23.2), `magnetic-force-on-a-current-carrying-wire` and `right-hand-rule-1`
(22.7, 22.4) and `damped-harmonic-motion` (16.7); `applications` reinforces
`eddy-current`, `magnetic-damping` and `slotting-reduces-eddy-currents`.

`magnetic-damping` has no exercise of its own on this page: the one problem that
tests it, the redrawing of Figure 23.13 with the pendulum going the other way,
has no answer in the book's key and is left out. No question is generated in its
place (rule 13, and `config.md`).

## Figures

id · replaces · concepts · value add · moving or still · sliders and choices ·
headline · graph · depth

1. `sim-magnetic-damping` · Figure 23.12 · eddy-current, magnetic-damping,
   slotting-reduces-eddy-currents · value add: intuition and flow by animation,
   plus variation by slider — the reader sees the three bobs of the book's three
   panels released at the same moment and watches the solid one stop while the
   insulating one keeps swinging, which is the whole demonstration and which
   three stills cannot give · **moving**: damping is a process in time and the
   figure has a clock, one pass of 10 s of model time in 5 real seconds with a
   1.2 s hold · sliders: the field strength $B$ (0 to 0.80 T, default 0.50,
   magnetic-field hue) and the starting displacement (4 to 14 cm, default 10,
   position hue); no choice, since all three bobs are shown at once · headline:
   "After 2.4 s the metal bob has fallen to 0.9 cm of swing, the slotted bob to
   6.1 cm and the insulating bob is still at 10.0 cm" · graph below the
   horizontal scene: displacement against time, three curves · **locked view**
   (rule 28.2), the pole pieces drawn in the book's own perspective with
   `view()`/`face()` and no orbit, because the book prints them that way and the
   bob must be seen to swing *between* them; the rest of the scene is flat.
   Labels: three bobs and three curves named, five entity labels in all, so they
   are on by default (rule 26.7). The three bobs carry no type of their own and
   must be told apart, so their curves, their rims and their names take
   `F.cat(0..2)`, which `ch23/COLOR.md` grants this page; everything else in the
   figure is ink but the field, the speed and the drag.

2. `sim-eddy-currents-in-a-plate` · Figure 23.13 + Figure 23.14 (the fold
   `config.md` names: one plate crossing the pole faces, solid or slotted) ·
   eddy-current, magnetic-damping, slotting-reduces-eddy-currents · value add:
   variation by slider — the reader walks the plate through the field and stops
   it where the book cannot, in the middle, where the flux is constant and no
   current runs at all · **still**: the idea is a position and not a process, and
   the state the book's own sentence turns on, the plate wholly inside the field,
   is the one an animation flashes past; the plate's speed is a number the figure
   states, not a clock it keeps · sliders: the plate's position (−28 to +28 cm,
   default −8, position hue), the field strength $B$ (0 to 0.80 T, default 0.50,
   magnetic-field hue) and the speed $v$ (0.10 to 0.60 m/s, default 0.30,
   velocity hue); choice: solid, slotted, insulating (rule 26.1) · headline: "The
   plate is entering the field, so the part of it inside the poles is growing,
   the eddy current runs counterclockwise and the force on it is to the left" ·
   graph below the horizontal scene: the drag force against the plate's position,
   two humps with a flat zero between them · 2D, flat, since the current loops
   and the force lie in the plane of the plate and nothing is hidden by depth.
   Labels on: four named things. The drag is drawn as a fraction of the greatest
   the sliders can reach, since the section gives no equation for it and the page
   will not invent newtons; the axis and the caption say so.

3. `sim-damped-balance` · Figure 23.15 · magnetic-damping,
   applications-of-magnetic-damping · value add: intuition by animation and
   variation by slider — the book's sentence is that the oscillations are damped
   quickly and that the damping force then disappears, which is a claim about how
   a reading settles and cannot be drawn in one still · **moving**: the beam
   swings and its pan writes a trace on the graph below, one pass of 6 s of model
   time in 5 real seconds with a 1.2 s hold · sliders: the field strength $B$ (0
   to 0.60 T, default 0.35, magnetic-field hue) and how far the pan is lifted
   before the beam is let go (2 to 20 mm, default 14, position hue) · headline:
   "With the disc in a field of 0.35 T the pan is inside one division after 2.6 s,
   and the drag on the beam has fallen to 0.20 of its greatest" · graph below the
   horizontal scene: how far the pan stands off its level against time, with the
   envelope dashed and one division marked either way · 2D, flat.
   Set $B$ to zero and the beam rings on, which is the friction-free balance the
   book says is useless. Labels on: three named things.

4. `sim-recycling-ramp` · Figure 23.16 · applications-of-magnetic-damping,
   magnetic-damping · value add: flow by animation — the separation is the point
   and it happens over the length of the ramp, so the still drawing of a truck
   and a ramp cannot show it · **moving**: three pieces are released together and
   the figure follows them down, one pass of 6 s of model time in 5 real seconds
   with a 1.2 s hold · sliders: the field strength $B$ of the magnet under the
   ramp (0 to 0.90 T, default 0.60, magnetic-field hue) and how far up the ramp
   the three are let go (0.20 to 0.85 m, default 0.70, position hue), which sets
   the speed they reach the magnet at · headline: "The copper fitting comes to
   rest 0.49 m past the foot of the ramp, the aluminum can 0.62 m and the plastic
   bottle runs on to 1.45 m" · no graph: where each piece lands is the result, and
   it is drawn along the ramp itself against a scale in meters ·
   2D, flat. Labels on: three pieces and the magnet, four in all, queued through
   the library's labeller so that no name is ever set over another piece however
   close together the three run. The pieces are objects and are drawn in ink with
   their names, as rule 7 asks of a device; the field under the ramp, the speeds
   and the drag wear their type hues.

Photographs, two kept and none dropped, as `config.md` settles:

- `fig-metal-detector` · Figure 23.17, the soldier with a metal detector (credit:
  U.S. Army), width 325 · **keep**: the passage is about portable metal detectors
  and points the reader at it.
- `fig-coaster-magnets` · Figure 23.18, the rows of rare earth magnets on a
  roller coaster track (credit: Stefan Scheer, Wikimedia Commons), width 325 ·
  **keep**: the passage names the magnets and the metal fins that pass through
  them, and the photograph is the thing it describes.

The unnumbered drawing inside the second problem, a coil moved into and out of a
region of uniform field, goes with that problem, which is unkeyed and left out.

Extra simulations (rule 15): three candidates were judged and none survives. A
laminated core cut open would repeat what the slotted plate of figure 2 already
shows. An induction cooktop heating a pan would be a mechanism animation of a
sentence the book gives no numbers for. A metal detector's two coils belong to
23.9, where mutual inductance is the subject and the apparatus is drawn.

## Exercises

- No Check Your Understanding box: the module prints none, so the page has no
  inline exercise and no `div.exercises` host inside the text.
- 2 conceptual questions, both open, both at the end, each with an AI-marked
  suggested approach. `cq1` (thin conducting layers separated by insulation)
  tests `slotting-reduces-eddy-currents` and touches `eddy-current` at weight 2;
  `cq2` (detecting metals by induction) tests
  `applications-of-magnetic-damping` and leans on `eddy-current` at weight 3.
  Both weights are the agent's and carry `"weights_by": "ai"`.
- 2 problems, both left out: neither carries a `<solution>` in the CNXML, so
  neither has an answer in the book's key. The first asks for a drawing of
  Figure 23.13 with the pendulum going the other way; the second asks for the
  direction of the induced current and the force at five positions of a coil, and
  its unnumbered figure goes with it. Both are named in `notes`.
- No generated questions.

## Tables and views

- No equation: the section prints none, and none is written for it.
- No variable rows at present. The page's figures state a field strength, a
  speed, a displacement and a drag, so five rows are wanted at chapter level
  (below); the glossary already carries the section's two terms, eddy current and
  magnetic damping.
- Concept map: the four nodes above, with the prerequisite edges the chapter's
  preparation already wrote.

## Colour

The page binds the five types `ch23/COLOR.md` gives it and one more:
`magnetic-field` (every field line, every cross into the page, the sliders that
set $B$), `current` (the eddy current loops in the plate, the bob and the disc),
`force` (the drag that opposes the motion, and the graph of it in figure 2),
`velocity` (the speed of a plate and of a piece of trash), `position` (a
displacement, a starting deflection, a plate's position and the scale a piece
lands against) and `time`. The chapter's file does not list `time` for this page,
but figures 1 and 3 graph a displacement against time and their readouts state
how long a swing takes to die away, and the chapter's own rule is to bind `time`
wherever a figure has a clock in it, so the axis and the seconds wear the time
hue rather than sitting in ink.

The flux is not bound and is not drawn as a quantity. The section prints no flux
symbol and no equation, and `ch23/COLOR.md` keeps `magnetic-flux` off this page;
so the overlap of the plate with the field is an area, untyped, bracketed in ink,
and the sentence that the flux through the plate is growing, constant or falling
is said in words in the headline and the caption. The three pendulum bobs take
`F.cat(0..2)`, which `ch23/COLOR.md` grants; no other categorical colour appears.
Every device — a magnet, a pole piece, a plate, a beam, a ramp, a bin — is ink.
No hex literal anywhere.

## Wanted at chapter level

- `ch23/COLOR.md` → the paragraph of bindings should read that 23.4 binds
  `magnetic-field`, `current`, `force`, `velocity`, `position` and `time`; the
  page's two moving figures graph a displacement against time and colour that
  axis, which the list as written leaves out.
- `23.4` → variables rows wanted, five, so that the page's definitions view names
  what its figures draw: `B_mag` (the strength of the field between the poles, T),
  `v` (the speed of the conductor through the field, m/s), `I_curr` (the eddy
  current induced in the conductor, A), `F` (the magnetic drag on the eddy
  current, N) and `x` (the displacement of a bob or a plate, m). The section
  prints none of them in an equation, so the chapter pass may prefer to leave the
  section with no variables at all; the page works either way.
- `eddy-current` → `23.4-eddy-currents`
- `magnetic-damping` → `23.4-eddy-currents`
- `slotting-reduces-eddy-currents` → `23.4-eddy-currents`
- `applications-of-magnetic-damping` → `23.4-applications`
- No concept, symbol or type fix is wanted: the four nodes, the two glossary
  terms and the five bound types are all as the chapter's preparation left them,
  and the page writes no symbol of its own.

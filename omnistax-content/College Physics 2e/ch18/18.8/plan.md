# Plan: 18.8 Applications of Electrostatics

Written before the page was built, as `ch18/config.md` asks in place of the
per-section stop (root rules 2 and 5).

## Sub-concepts and their spans

The book prints six headers of its own in this section and they are kept as it
writes them. The sentence that opens the module carries an idea of its own,
what electrostatics is and that the section is a tour of its uses, so it is
headed by the agent, as `config.md` allows. The boxed Problem-Solving
Strategies for Electrostatics stands between the last application and the
Integrated Concepts header and is given a span of its own, since it is a skill
and not an application.

| span | header | what it carries |
|---|---|---|
| `what-electrostatics-is` | The study of electrostatics (agent's) | the opening sentence, the defined term electrostatics |
| `van-de-graaff` | The Van de Graaff Generator (the book's) | the machine, its parts, the limit set by the surrounding air, Figure 18.34, the Take-Home Experiment |
| `xerography` | Xerography (the book's) | the photoconducting drum, the four stages, Figure 18.35 + 18.36 |
| `laser-printers` | Laser Printers (the book's) | the laser writing the image on the same drum, and why the image is sharp |
| `ink-jet` | Ink Jet Printers and Electrostatic Painting (the book's) | the charged droplet steered by charged plates, Figure 18.37, electrostatic painting |
| `precipitators` | Smoke Precipitators and Electrostatic Air Cleaning (the book's) | charging the particles and collecting them on an oppositely charged grid, Figure 18.38 |
| `problem-solving` | Problem-Solving Strategies for Electrostatics (the book's box) | the six steps, kept as the book's numbered list |
| `integrated-concepts` | Integrated Concepts (the book's) | the six chapter titles as plain text, Example 18.5, the Unreasonable Results note and its three-step strategy |

## Concept nodes, and where each is introduced

The six nodes are already in `book.json`; the page introduces each in one span.

| concept | span | verb |
|---|---|---|
| `van-de-graaff-generator` | `van-de-graaff` | introduces |
| `charge-concentrates-at-points` | `van-de-graaff` | uses (the points that spray and pick off the charge) |
| `excess-charge-on-surface` | `van-de-graaff` | uses (the charge moves to the outside of the sphere) |
| `xerography` | `xerography` | introduces |
| `grounding` | `xerography` | uses (the drum is grounded under the selenium) |
| `xerography` | `laser-printers` | reinforces (the same drum, the image written by a laser) |
| `ink-jet-printer` | `ink-jet` | introduces |
| `force-from-electric-field` | `ink-jet` | uses (the charged droplet steered between the plates) |
| `field-perpendicular-to-conductor` | `ink-jet` | uses (the paint arriving perpendicular, the corners taking extra) |
| `electrostatic-precipitator` | `precipitators` | introduces |
| `electrostatics-problem-solving` | `problem-solving` | introduces |
| `integrated-electrostatics` | `integrated-concepts` | introduces |
| `electrostatics-problem-solving` | `integrated-concepts` | reinforces (Example 18.5 follows the steps) |
| `force-from-electric-field` | `integrated-concepts` | reinforces ($F = qE$ on the drop) |

No node of this section is without a book exercise, so nothing is generated
(rule 13).

## Figures

Five figures: one for each of the four machines the section introduces, with
the copier and the laser printer folded into one, and one for the worked
example that joins the field to Newton's laws. The four machines are the
section's four results, and each is a mechanism whose parts do something in
order, which is exactly the case root rule 24.1 calls kinematic: charge rides
up a belt, a drum turns through four stations, droplets fly between plates,
dust drifts through grids. `ch18/config.md` allows the machines of 18.8 to
move because the machine moves, and each line below says what moves and why.

```
sim-van-de-graaff · Figure 18.34 · van-de-graaff-generator · variation by slider and flow by animation: the book's schematic is a still cutaway with labels, and what it cannot show is that the charge arrives a little at a time and piles up on the outside of the sphere until the air around it gives way, which is the whole of the passage's "practical limits arise" · moving, the belt carries charge from the spraying points at the bottom to the picking-off points at the top and the charge on the sphere grows with it, holding when the surface field reaches the strength air breaks down at · sliders: the charge the belt delivers each second (charge), the radius of the sphere (untyped, in ink) · headline says how much charge the sphere holds and whether the air around it has given way · no graph · 2D, a flat cutaway as the book draws it
sim-xerography · Figure 18.35 + 18.36 · xerography · standardisation and variation by choice: the book prints the process twice, four panels for the copier and one for the laser printer, and the reader must carry the drum's charge pattern from panel to panel in his head; one drawing whose station and whose way of writing the image the reader sets shows the same charge pattern all the way through and makes plain that the laser printer differs in one station only · still, because the reader chooses which station to look at and what is written on the drum, and nothing between two stations is what is being taught · choice: the station (charge the drum, write the image, apply the toner, transfer to paper); choice: the image is written by a lamp and an original or by a laser; slider: the charge sprayed onto the selenium (charge) · headline says what the station does to the charge on the drum · no graph · 2D
sim-ink-jet · Figure 18.37 · ink-jet-printer, force-from-electric-field · variation by slider and flow by animation: the book draws one nozzle and one undeflected stream, and the idea is that the same nozzle writes anywhere on the page because the charge given to a droplet and the field between the plates decide where it lands · moving, the droplets leave the nozzle, take their charge and are pulled aside between the plates, which is the path the still figure cannot draw · sliders: the charge given to each droplet (charge, through zero and across sign), the field between the deflection plates (electric-field) · headline says where on the paper the droplets are landing · no graph · 2D
sim-precipitator · Figure 18.38 · electrostatic-precipitator · variation by slider and flow by animation: the book's schematic shows the particle count falling from grid to grid, and the reader must imagine the drift that empties the air; here the air carries its load through the grids and the reader turns the charging grid down and watches the cleaning fail · moving, the particles drift with the air and are drawn out of it as they pass the collecting grid · sliders: the charge placed on each particle (charge), the field at the collecting grid (electric-field) · headline says what fraction of the particles has been collected · no graph · 2D
sim-charged-drop · Sim · integrated-electrostatics, electrostatics-problem-solving · variation by slider: Example 18.5 works one drop at one field, and the point of an integrated problem is that the answer is a contest between two forces, so the reader sets the charge, the field and the mass and watches the net force change sign · still, because the example asks for the acceleration at the moment the drop is in the field and not for the flight that follows · sliders: the charge on the drop (charge), the field strength (electric-field), the mass of the drop (untyped, in ink) · headline says which force is the greater and which way the drop accelerates · no graph · 2D
```

Tiers (rule 24.5): the first four are moving simulations, the lowest tier that
delivers a flow the still drawing cannot; `sim-xerography` and
`sim-charged-drop` are still simulations, and neither registers a cycle, so
neither carries a transport. No figure of this section is in 3D: every scene is
a schematic of a machine drawn from the side, which is how the book draws it
and how it reads best (rule 28.1).

Labels (rule 26.6): each machine carries more than six named parts, so the
parts are named on the drawing only where the book names them in its own
caption, and the rest are left to the hover names; the frame, the headline and
the sliders are always shown.

The book's numbers are the defaults where the book gives one: the drop of
Example 18.5 loads at $4.00 \times 10^{-15}$ kg, $3.20 \times 10^{-19}$ C and
$3.00 \times 10^{5}$ N/C and reads 14.2 m/s².

### Photographs and unnumbered images

| image | keep or drop | why |
|---|---|---|
| Figure_19_08_02.jpg (18.34) | keep as the original of `sim-van-de-graaff` | the book's cutaway, swapped in behind the simulation |
| Figure_19_08_03a.jpg (18.35) | keep as an original of `sim-xerography` | the four panels of the copier |
| Figure_19_08_04a.jpg (18.36) | keep as the second original of `sim-xerography` | the laser printer, the figure the fold takes in |
| Figure_19_08_05a.jpg (18.37) | keep as the original of `sim-ink-jet` | the nozzle, the charging electrodes and the plates |
| Figure_19_08_06a.jpg (18.38) | keep as the original of `sim-precipitator` | panels (a) and (b) are one image file, so the smokeless power plant `config.md` asks for rides with the schematic in that one original rather than as a second one |
| the five unnumbered images inside the problems (Figure_19_08_07a, 08a, 10a, 11a, 12a) | drop | each belongs to a problem the book leaves unkeyed, and every one of those problems is left out, so no card refers to them |

No extra simulation is proposed beyond the five: the section is a tour of
applications, and a sixth machine would repeat the lesson the first four give.

Figure pass, 2026-09-15 (Claude Fable 5.1). `sim-ink-jet`: the landing mark's reading had collided with the "cm" of the paper's scale at the axis; the unit now heads the scale and the reading sits on the paper beside its mark. `sim-precipitator`: the name of the outgoing air when the charging grid is off ran off the right edge; it now reads "still dirty". `sim-van-de-graaff`, `sim-xerography` and `sim-charged-drop` left as built.

## Exercises

| kind | count | placement |
|---|---|---|
| problem | 4 of 18 | all at the end; the fourteen the book leaves unkeyed are left out and named in the notes |

The section sets no Check Your Understanding, no conceptual question and no AP
item, so the page has no inline exercise and no suggested approach. Nothing is
taken from another section and nothing is held for a later page. Of the four
kept, two are numeric, one is the statement that $q_2$ is nine times $q_1$ and
one is the Critical Thinking item, whose keyed answer the book prints in full.

## Tables

The section prints none.

## Types the page binds

`charge`, `electric-field`, `force` and `acceleration`, which is what
`ch18/COLOR.md` says 18.8 binds. The masses, the radii, the distances, the
counts of particles and the fractions stay untyped and in ink, and no body
wears a hue: a rod, a belt, a drum, a plate and a grid are ink with the book's
$+$ and $-$ marks on them, and the charge each holds is stated beside it in the
charge hue.

## Wanted at chapter level

- `eq-weight-of-drop` → 18.8-integrated-concepts
- `eq-electric-force-on-drop` → 18.8-integrated-concepts
- `eq-acceleration-of-drop` → 18.8-integrated-concepts
- `w` → 18.8-integrated-concepts
- `m` → 18.8-integrated-concepts
- `F` → 18.8-integrated-concepts
- `q` → 18.8-integrated-concepts
- `E_field` → 18.8-integrated-concepts
- `F_net` → 18.8-integrated-concepts
- `a` → 18.8-integrated-concepts
- `ch18/config.md` says the smokeless power plant is a second original of Figure 18.38; the bundle prints panels (a) and (b) in one image file (`Figure_19_08_06a.jpg`, width 675), so the row carries one original and one width. No change is wanted, only the record.
- No concept or symbol row of this section needs a correction.

**Applied by the chapter pass (2026-09-15).** The three equation anchors and
the seven variable anchors are written at `18.8-integrated-concepts`. Figure
18.38's single original with its two panels is now the record in
`ch18/config.md`, under "What the build changed", which also says that seven
photographs are kept as rows of their own rather than the eight the table
first counted. No concept or symbol row was changed.

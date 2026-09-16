# Plan: 23.1 Induced Emf and Magnetic Flux (m42390)

Source: `source.md`, converted from the CNXML module. Status: built
2026-09-15 without a review stop, on Chen's instruction to finish the book in
waves without check-ins; the per-section stop of rule 2 and the plan review of
rule 5 are replaced by this file, written before the section was built and
left for review after, as `ch23/config.md` records.

The chapter opens on one experiment and one definition. Faraday closed a
switch and a needle swung; he left it closed and the needle sat at zero. A bar
magnet pushed into a coil does the same, and so does a coil turned in a field.
What the three have in common is a change in the magnetic flux
$\kPhi = \kBmag A\cos\theta$, and the section ends by saying that every
induction in the chapter is a change in that one quantity. Two equations, four
narrative sketches (Figures 23.3 to 23.6), no worked example, no boxed note, no
table, no Check Your Understanding box, two AP items (the first keyed), four
conceptual questions and two problems (the first keyed). One page (rule 11).

## Sub-concepts (page headers)

The book prints no header of its own. The argument divides into three blocks:
the experiments, the quantity they have in common, and the sentence that ties
them together.

1. `changing-field` **A change in the magnetic field induces an emf** (book:
   Faraday's iron ring and its switch; the bar magnet pushed in and out of a
   coil; the coil rotated in a field; Figures 23.3, 23.4 and 23.5). The
   glossary terms induction and electromagnetic induction belong to this
   passage and the next.
2. `flux-defined` **Magnetic flux** (book: $\kPhi = \kBmag A\cos\theta$, its
   units $\text{T}\cdot\text{m}^2$, the perpendicular component and
   $\kPhi = \kBmag_{\perp}A$; Figure 23.6). Both equations and all four
   variables anchor here.
3. `all-induction` **Every induced emf is a change in flux** (book: the switch,
   the bar magnet and the rotating coil read again as changes in $\kPhi$, and
   the forward look to Faraday's law).

Learning objectives, section summary and glossary come out of the running text
into the tables and views. Cross references: the next section, named in the
book's words with no link.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| induction | idea | changing-field | Figures 23.3 and 23.4; the needle at rest in the fifth stage; AP item 1; conceptual questions 1 and 2 |
| magnetic-flux | idea, eq-magnetic-flux | flux-defined | the display equation; Figure 23.6; AP item 2; problem 1 |
| flux-and-orientation | result, eq-flux-perpendicular | flux-defined | $\kPhi = \kBmag_{\perp}A$; Figure 23.6; conceptual question 3; problem 1 |
| ways-to-change-flux | skill | all-induction | the closing paragraph; conceptual question 4; the second learning objective |

The section leans on `magnetic-field` and `direction-of-field-lines` (22.3),
`electromagnet` (22.2), `meter-and-galvanometer` (22.8), `electric-current`
(20.1) and `emf` (21.2), marked as used where the text uses them.

## Figures

id · replaces · concepts · value add · motion · sliders and choices · headline ·
graph · depth

1. `sim-faraday-ring` · replaces Figure 23.3 (Faraday's apparatus) ·
   induction · **flow by animation and variation**: the book's still cannot
   show the one thing the paragraph is about, that the needle moves only while
   the field is changing, so the switch is thrown for the reader and the flux
   through the lower coil is drawn as a bar beside the needle; the reader then
   takes the iron out of the ring and watches the same switch do almost
   nothing, which is what the section's first conceptual question asks about ·
   **moving**: the idea is a transient, and the whole lesson is in the interval
   while the field rises and falls, so the figure registers a cycle of 6.0 s
   (the switch closed at 0.4 s, held, opened at 3.4 s, held) and takes the
   transport · the field the upper coil raises in the ring $\kBmag$ (0.05 to
   0.60 T, default 0.25 T, magnetic-field), the number of turns $N$ on the
   lower coil (1 to 20, default 8, ink), and a choice of core, the iron ring
   or air, as a button row (rule 26.1) · "The switch has been closed for 1.2 s,
   the field in the ring is steady, and the needle has fallen back to zero." ·
   none: the flux is carried on a bar beside the meter, since a graph against
   time would draw the rate the next section defines · **2D from a locked
   view** (rule 28.2, and `ch23/config.md` names this figure for one): the book
   prints the ring in perspective, so the ring is projected from the book's own
   viewpoint with `view()`/`face()` and does not orbit. Five labels, all on
   fixed parts of the frame, so they are on (rule 26.7). Readout:
   $\kPhi = \kBmag A$ through the lower coil with the live numbers; small line
   that the meter answers the change and not the field. Draws magnetic-field,
   magnetic-flux, voltage.
2. `sim-magnet-coil` · replaces Figure 23.4 (five stages of a magnet moved
   relative to a coil) · induction, ways-to-change-flux · **variation and flow
   by animation**: the book draws five stills of one experiment, and one live
   drawing holds all five, since the pole that faces the coil and what is
   moved are choices and the speed is a slider; the reader sees the needle
   change ends when the magnet is pulled out, change ends again when the magnet
   is turned round, grow when the hand moves faster, and sit at zero when
   nothing moves · **moving**: the emf follows the speed of the hand, which is
   a rate and has a clock in it; one loop pushes the magnet in and pulls it out
   again, its length set by the speed slider, and the figure takes the
   transport · the speed of the motion $\kv$ (0 to 1.2 m/s, default 0.40,
   velocity), the strength of the magnet $\kBmag$ at the face of the coil
   (0.02 to 0.20 T, default 0.08, magnetic-field), a choice of the pole that
   faces the coil (north or south) and a choice of what moves (the magnet, the
   coil, or neither) · "The magnet is moving into the coil at 0.40 m/s, the
   flux through it is growing, and the needle stands to the right." · none ·
   **2D, flat** (rule 28.1): the coil is seen from the side with the magnet on
   its axis, which is the arrangement the book draws, and nothing in it turns
   out of the page. Six labels, two of them on the moving magnet, so they are
   behind a Labels button, off by default, with hover names (rule 26.7).
   Readout: $\kPhi = \kBmag A$ with the live field at the coil; small line on
   the fifth stage, where nothing moves and nothing is induced. Draws
   magnetic-field, magnetic-flux, voltage, velocity.
3. `sim-rotating-coil` · replaces Figure 23.5 (the coil turned in a field) ·
   ways-to-change-flux, flux-and-orientation · **variation and flow by
   animation**: the third way of changing the flux is the one the book draws
   without moving, and the reader needs to see that the field and the area both
   stand still while the angle alone runs round, carrying the flux from its
   greatest value through zero to its greatest value the other way · **moving**:
   a turning coil is a clock, and the cycle is one full turn, $2\pi/\kw$ long,
   with the transport · the field between the poles $\kBmag$ (0.10 to 0.40 T,
   default 0.20, magnetic-field), the rate the coil is turned $\kw$ (1 to 12
   rad/s, default 4, angular-rate), the area of the coil $A$ (0.04 to 0.16 m²,
   default 0.08, ink; the two ranges are kept narrow enough that the flux bar
   holds one fixed scale it can fill without ever being pinned) · "The coil has turned through 137°, so the flux through
   it is 6.4 × 10⁻³ T·m² and falling." · none: the flux is carried on a bar
   beside the meter, and the sinusoid a generator draws belongs to 23.5, which
   is where the book draws it · **2D, flat** (rule 28.1): the coil and the pole
   faces are seen from above, so that the angle between the field and the
   perpendicular to the coil is drawn full size and the loop's face foreshortens
   as it turns, which is the whole content; the slip rings and brushes are
   drawn below in ink as the book draws them. The frame's own names — the field,
   the poles, the angle $\theta$ and the note that the scene is seen from above
   — are always on; the two names that sit on the turning coil, the coil itself
   and the perpendicular to it, go behind a Labels button, off by default, since
   a label that travels round a circle twice a second is a label nobody reads
   (rule 26.7). Readout: $\kPhi = \kBmag A\cos\theta$ with the
   live angle; small line that the field and the area never change. Draws
   magnetic-field, magnetic-flux, voltage, angular-rate.
4. `sim-flux-angle` · replaces Figure 23.6 (the field at an angle to an area) ·
   magnetic-flux, flux-and-orientation · **shape in 3D and variation**: the
   definition is an angle between a field in space and the perpendicular to a
   surface, and the reader has to hold both at once; the scene draws the field
   as lines through the space and colours each line where it crosses the
   surface, so the flux is literally the count of lines caught, and turning the
   loop to 90° empties it while the field stays exactly as strong as it was,
   which is the section's third conceptual question · **still**: an orientation
   is a state and not a process, so it registers no cycle and takes no
   transport; it redraws on its sliders (rule 14) · the field $\kBmag$ (0.5 to
   3.0 mT, default 1.5, magnetic-field; the lines are drawn more closely as it
   grows), the area $A$ of the loop (0.05 to 0.40
   m², default 0.20, ink), the angle $\theta$ between the field and the
   perpendicular to the loop (0° to 90°, default 60°, ink); the defaults are
   the numbers of the section's second AP item, so the figure opens on it ·
   "A 1.5 mT field through 0.20 m² at 60° to the perpendicular gives a flux of
   1.5 × 10⁻⁴ T·m², half of what the same field gives face on." · none ·
   **3D, a full scene** (rule 28.3), argued: what is being taught is an
   arrangement in space, a plane surface and a direction in the space around
   it, and a flat drawing has to choose one of the two to lie about — either
   the surface is drawn as a line, and the reader is asked to imagine the area,
   or the surface is drawn square and the field has to be drawn lying in the
   page. The book's own Figure 23.6 takes the first way and draws the surface
   as a parallelogram from a fixed viewpoint, which is a picture the reader
   cannot turn to check; here the reader turns it and sees the count of lines
   through the surface fall to nothing as the surface comes edge on, which is
   the one thing every later section of the chapter rests on. Built on
   `F.view3d` with the chrome of rule 26.2: auto-rotate off by default with its
   button (the scene has no motion of its own, so an idle spin is offered and
   not taken), snap views "the book's view" (three quarters on, the tilt in the
   plane of the page), "along the field" (looking down the lines, where the
   loop shows exactly the area the field goes through, $A\cos\theta$) and "from
   above" (looking down the axis the loop turns about, where the angle $\theta$
   between the field and the perpendicular is drawn full size), zoom in and out
   with the wheel doing the same.
   **The orbit is bounded** from 8° below the plane the field lies in to 85°
   above it, with the yaw free. The loop is turned about the vertical, so the
   scene is symmetric about that plane and a view from underneath only repeats
   one from above, while the reach to 85° is kept because that is where the
   angle $\theta$ is read full size; every yaw is worth standing at, since there
   is no ground and no front to the scene. Four labels ($\kBmag$, $\theta$, the
   perpendicular and $A$), static, so they are on, and every body carries a
   hover name; the count of lines caught is stated in the headline and the
   readout rather than labelled in the scene.
   **Flat fallback**: where WebGL is missing, the canvas draws the book's own
   view instead — the surface edge on, its perpendicular, the field at
   $\theta$ to it and the component $\kBmag\cos\theta$ along the perpendicular
   — and says why it is drawn flat. Readout:
   $\kPhi = \kBmag A\cos\theta$ with the live numbers; small line with
   $\kPhi = \kBmag_{\perp}A$ and the perpendicular component. Draws
   magnetic-field, magnetic-flux.

**The fold this section does not make.** `ch23/config.md` names Figures 23.4
and 23.6 as a candidate fold, one loop in a field whose tilt and whose magnet
the reader moves. They are kept apart. The two figures answer different
questions and, decisively, they take different motion decisions (rule 14): 23.4
is a rate, and the needle exists only while the magnet moves, so it registers a
cycle and takes the transport; 23.6 is an orientation, a state with no clock in
it, and a transport on it would be the dummy loop rule 14 forbids. Folding them
would force one of the two answers on both. The five stills of 23.4 are folded
into one figure, as the config asks, but they are five states of that figure,
not five numbered figures, so they need no `folds` row.

**Photographs**: the section prints none, and `ch23/config.md` lists none for
23.1.

**Images inside the exercises**: three, none numbered, each travelling on the
card of the exercise that refers to it (the second of the two ways
`ch23/config.md` names). The oval loop in a uniform field
(`CNX_APPhysics_23_M1_S01_img.jpg`) is printed at the foot of the first AP
item's answer but is the figure the second AP item means by "the figure above",
so it rides on the second item's card. The stretched circular coil
(`Figure_24_01_05.jpg`, 450 px) rides on the fourth conceptual question. The
two perpendicular coils and the wire beside a coil (`Figure_24_01_06-9353.jpg`)
ride on the first problem's card, which is the only one of the two problems
that is kept.

Extra simulations (rule 15), considered and left:

- A pair of coils side by side, the reader opening and closing the switch by
  hand: the same content as `sim-faraday-ring` with the reader doing the
  timing, and the transport already lets the reader scrub the transient. Left.
- A flux counter over an arbitrary surface in a non-uniform field: the section
  defines the flux for a uniform field over a flat area, and anything more
  belongs to a later course. Left.

None built.

**Figure pass, 2026-09-16 (Claude Fable 5.1).** `sim-faraday-ring`: the two coils were drawn as bars laid across the ring and did not read as wire wound on iron; each turn is now a loop drawn round the tube's cross-section, its far half hidden, and the name of the lower coil sits below the ring instead of on its rim. `sim-magnet-coil`: the library's `fist` did not read as a hand on the magnet; a hand that grips the end of the bar, forearm, palm, four fingers and thumb, is drawn in this file as `gripHand()` and holds the magnet or the top of the coil, whichever moves (a candidate for the library); the three-state "what moves" control wrapped into two rows beside the other controls and is a dropdown (rule 26.1). `sim-rotating-coil` and `sim-flux-angle` were judged in the browser in both themes and left as built.

## Exercises

- `ap1` (fs-id1457853): what may be moved to produce a current, a choice item
  with the book's own key, (c); Understand; tagged `induction` and
  `ways-to-change-flux` at weight 3.
- `ap2` (fs-id1583528): the flux through 0.2 m² at 60° to a 1.5 × 10⁻³ T field,
  and the angle at which it is greatest; Apply; the book prints no answer for
  it (the CNXML carries one commented out and unprinted), so it is kept as an
  open item with an AI-marked suggested approach; the oval loop travels on its
  card; tagged `magnetic-flux` and `flux-and-orientation` at weight 3.
- `cq1` (fs-id1169736739851): what the multiple loops and the iron ring do for
  the observation; Understand; AI approach; tagged `induction` and
  `magnetic-flux` at weight 2.
- `cq2` (fs-id1169738069605): the direction of the force on a magnet thrust
  into a coil, with a diagram; Analyze; AI approach; tagged `induction` and
  `ways-to-change-flux` at weight 2.
- `cq3` (fs-id1169737926882): how the flux can be zero when the field is not;
  Understand; AI approach; tagged `flux-and-orientation` and `magnetic-flux` at
  weight 3.
- `cq4` (fs-id1169737882391): whether stretching a coil in a field induces an
  emf; Apply; AI approach; the stretched coil travels on its card; tagged
  `ways-to-change-flux` and `magnetic-flux` at weight 3.
- `p1` (fs-id1169737949952): the flux at coil 2 due to coil 1, keyed Zero;
  Apply; the two arrangements travel on its card; tagged `flux-and-orientation`
  and `magnetic-flux` at weight 3.
- Left out: the second problem (fs-id1169737994350), the flux through the coil
  in Figure (b) due to the wire, which the book does not key; named in `notes`.
- No generated questions: every node of the section has a book exercise.

## Views

- Formulas: two equations, $\kPhi = \kBmag A\cos\theta$ important and
  $\kPhi = \kBmag_{\perp}A$ not.
- Definitions: the four variables of the section; the three glossary terms.
- Concept map: the four nodes with their edges into 20.1, 21.2, 22.2 and 22.3.

## Colour

The page binds `magnetic-flux`, `magnetic-field` and `voltage`, which is what
`ch23/COLOR.md` gives 23.1, and two the list does not give it:

- `velocity`, drawn by `sim-magnet-coil`: the speed of the magnet is the
  section's own sentence ("The faster the motion, the greater the emf"), it is
  the slider that makes the sentence visible, and a speed is a velocity and
  cannot be put in ink without the coercion rule 7 forbids. The chapter's own
  slider list names "the speed of a magnet moved into a coil".
- `angular-rate`, drawn by `sim-rotating-coil`: the rate the coil is turned is
  what the book's own sentence makes the emf depend on, and it carries the
  slider and the readout of that figure. `ch23/COLOR.md` binds it in 23.5 and
  23.6, where the same quantity does the same work.

The flux never wears the field's hue, as `ch23/COLOR.md` requires: the lines
drawn in space are in the field hue and the part of them caught by a surface —
the shaded face of a loop, the bar beside a meter, the number in the readout —
is in the flux hue. The galvanometer's needle and the scale it swings over are
in the voltage hue, since what the meter stands for in this section is the
induced emf, which the book says is more basic than the current. Every body is
ink: the coils, the iron ring, the magnet with N and S lettered on its ends,
the pole faces, the battery, the switch and the meter case. The number of turns
$N$, the area $A$, the angle $\theta$ and every axis and frame label stay in
ink.

## Wanted at chapter level

- variables `Φ` → 23.1-flux-defined
- variables `B_mag` → 23.1-flux-defined
- variables `A` → 23.1-flux-defined
- variables `θ` → 23.1-flux-defined
- equations `eq-magnetic-flux` → 23.1-flux-defined
- equations `eq-flux-perpendicular` → 23.1-flux-defined
- equations `eq-flux-perpendicular` has no `ktex`; the page writes the form as
  `\kPhi = \kBmag_{\perp}A`, and the row wants that string so the formulas view
  colours it as the text does.
- `ch23/COLOR.md` gives 23.1 three types; the page binds five, adding
  `velocity` (the speed of the magnet in `sim-magnet-coil`) and `angular-rate`
  (the rate the coil is turned in `sim-rotating-coil`), for the reasons under
  Colour above. The chapter pass may write the two into that file's list for
  23.1.

### Decided by the chapter pass (2026-09-16)

- All four `variables` rows and both `equations` rows are anchored to
  `23.1-flux-defined`, as asked.
- `eq-flux-perpendicular` now carries the `ktex` `\kPhi = \kBmag_{\perp}A`,
  so the formulas view colours it as the paragraph does.
- `ch23/COLOR.md` is rewritten to the bindings as built and gives 23.1
  `velocity` and `angular-rate` as well as its three.
- The second AP item's commented-out key is recorded in `exploration.md` §
  Errata and is not used; the item stays open with an AI-marked approach.

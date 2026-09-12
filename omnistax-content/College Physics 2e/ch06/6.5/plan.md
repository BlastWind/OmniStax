# Plan: 6.5 Newton’s Universal Law of Gravitation (m42143)

Source: `source.md`, converted from the CNXML module. Status: built
2026-09-11 without a review stop, on Chen’s instruction to finish the book
in one job; the per-section stop of rule 2 and the plan review of rule 5
are replaced by this file, written before the section was built and left
for review after, as Chapters 1 to 3 did it.

The longest section of the chapter and the one that carries the centripetal
force of 6.2 and 6.3 out to the Moon and the planets. Its spine is one
equation, $F = GmM/r^2$, and the three things the book does with it: get the
acceleration due to gravity out of it, get Earth’s mass out of that, and
show that it supplies the Moon’s centripetal acceleration. Around the spine
sit three descriptive passages the book gives headers of its own — the
tides, weightlessness and microgravity, and the Cavendish experiment. Nine
book figures: three photographs or artwork the text points at, and six
sketches. One worked example, one Misconception Alert, one Take-Home
Experiment and one Making Connections box. Six AP test prep items, four
conceptual questions and ten problems. One page (rule 11).

## Sub-concepts (page headers)

The book prints three headers of its own and they are kept word for word;
the run before them is divided into four blocks, one per step of the
argument.

1. `universal-law` **Newton’s universal law of gravitation** (book: the
   aching feet, the falling apple and the orbit of the Moon; Newton,
   Galileo, Hooke, Wren, Halley and Émilie du Châtelet, with Figure 6.17;
   the law stated in words; Figure 6.18; the Misconception Alert; the
   center of mass; the equation $\kF = GmM/\kr^2$ and the sentence that names $G$). The
   variables $\kF$, $m$, $M$, $\kr$ and $G$ and the equation
   `eq-gravitation` anchor here.
2. `gravitational-constant` **The gravitational constant G** (book: what
   $G$ is, its measured value, its units, the two 1.000 kg masses that
   attract each other with $6.674\times10^{-11}$ N, and our own weight as
   the pull of the whole Earth). `eq-G` anchors here; $G$ itself anchors in `universal-law`, where the sentence after the equation names it.
3. `g-from-gravity` **The acceleration due to gravity** (book: substituting
   $mg$ for $\kF$; Figure 6.19; the mass of the object cancelling; the
   substitution of Earth’s mass and radius; $9.80\ \text{m/s}^2$ and its
   independence of the body’s mass; the Take-Home Experiment with the
   marble, the ball and the spoon; the Making Connections box on general
   relativity). $\kg$, `eq-mg-gravitation` and `eq-g-GM` anchor here.
4. `moon` **Gravity as the Moon’s centripetal force** (book: Newton’s own
   comparison; Example 6.6 with both accelerations; why Earth does not
   remain stationary; Figure 6.20). $\kac$ and $\kw$ anchor here; the
   worked example is `ex-moon`.
5. `tides` **Tides** (the book’s header: the two bulges, two tides a day,
   Figure 6.21, spring and neap tides, Figure 6.22, the tides near a black
   hole and Figure 6.23).
6. `weightlessness` **“Weightlessness” and Microgravity** (the book’s
   header: free fall in orbit, the broken lift cable, Figure 6.24, what
   microgravity does to muscle, bone, the circulation and the immune
   system, and what it does to crystals and to plants).
7. `cavendish` **The Cavendish Experiment: Then and Now** (the book’s
   header: Cavendish in 1798, Earth’s mass from $g$ and the radius,
   $M = gr^2/G$, Eötvös and the modern torsion-balance work, Figure 6.25).
   `eq-M-from-g` anchors here.

Cross references to chapters the app has not built are plain text
(“Particle Physics”, “Satellites and Kepler’s Laws: An Argument for
Simplicity”). The book’s masses $m$ and $M$ and its constant $G$ stay in
ink; $\kF$, $\kr$, $\kg$, $\kac$ and $\kw$ take their `\k` macros. The
module carries no PhET note, so there is none to drop here; the three PhET
links of the chapter are in 6.1, 6.2 and 6.3.

The converter left a stray `}` closing the `array` of `eip-859`, the pair
of forms of the centripetal acceleration, and wrote the three multi-line
displays of the worked example as `array{l}` with `&=&` in them. All four
are written cleanly as `aligned` blocks with the same content the book
prints.

Learning objectives, the section summary and the four glossary terms come
out of the running text into the tables and the views. The section has no
Check Your Understanding box, so nothing is inline; the AP items, the
conceptual questions and the problems go to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| universal-gravitation | result, eq-gravitation | universal-law | the law in words and in symbols; Figure 6.18; the Misconception Alert; the baby-and-father, mountain and Neptune problems |
| center-of-mass | idea | universal-law | the definition before the equation; Figures 6.18 and 6.19; the Earth-Moon center-of-mass problem |
| gravitational-constant | idea, eq-G | gravitational-constant | the value and the units; the two 1.000 kg masses; AP item 3; the Cavendish passage |
| g-from-gravitation | result, eq-g-GM | g-from-gravity | the derivation and Earth’s value; Example 6.6(a); AP items 1, 4 and 5; the Moon-and-Mars problem |
| gravity-as-centripetal-force | result | moon | Example 6.6; Newton’s “pretty nearly”; the Earth-Moon center-of-mass problem |
| tides | idea | tides | the two bulges and the two tides a day; Figures 6.21 and 6.22 |
| weightlessness | idea | weightlessness | the broken lift cable; Figure 6.24; the microgravity passage; the conceptual question on Anna and Tom |
| cavendish-experiment | idea | cavendish | the apparatus and Figure 6.25; Eötvös; Earth’s mass |
| mass-from-g | skill, eq-M-from-g | cavendish | $M = gr^2/G$ and its use for Earth; problem 1; the AP item on Titan |

The section leans on `force` and `newtons-third-law` (4.1 and 4.4),
`weight` and `mass` (4.3 and 4.2), `apparent-weight` (4.7),
`acceleration-due-to-gravity` and `free-fall` (2.7),
`centripetal-acceleration` and `centripetal-acceleration-magnitude` (6.2),
`centripetal-force` (6.3), `angular-velocity` and `linear-angular-velocity`
(6.1), and `inertial-frame` (4.5); the coverage rows mark each as used
where the text uses it.

## Figures

id · replaces · concepts · what moves or still · sliders · headline ·
graph · 3D

1. `sim-two-masses` · replaces Figure 6.18 (the two bodies, the line
   joining their centers of mass and the equal and opposite forces) ·
   universal-gravitation, center-of-mass, gravitational-constant ·
   **still**: the idea has no time in it. The two bodies attract each
   other with a force that answers the masses and the separation and
   nothing else, so there is nothing for a clock to do and the figure gets
   no transport (rule 14) · the smaller mass $m$ (0.5 to 100 kg, default
   1.000, ink), the larger mass $M$ (0.5 to 100 kg, default 1.000, ink),
   the separation $\kr$ (0.5 to 5.0 m, default 1.000, position) · “two
   1.000 kg masses 1.000 m apart attract each other with 6.674 × 10⁻¹¹ N,
   the same force on each” · graph below: $\kF$ against $\kr$ for the
   masses set, the inverse-square curve with the current separation
   marked, so that doubling the separation quarters the force · no.
   Readout: $\kF = G\,mM/\kr^2$ with the numbers; small line on the equal
   magnitudes that Newton’s third law requires. Draws force, position.
2. `sim-surface-gravity` · replaces Figure 6.19 (Earth, the house on its
   surface and the radius between the two centers of mass) ·
   g-from-gravitation, mass-from-g, center-of-mass · **still**: the figure
   answers its sliders, and nothing in $g = GM/r^2$ runs on a clock · the
   body’s mass (0.01 to 320 Earth masses, default 1.00, ink), the body’s
   radius (0.10 to 12.0 Earth radii, default 1.00, ink) · “a body of one
   Earth mass and one Earth radius gives g = 9.80 m/s² at its surface,
   where r = 6.38 × 10⁶ m is very nearly the distance to the center of
   mass of a house standing on it” · graph beside the round scene:
   $\kg$ against $\kr$ out to four radii, the inverse-square fall with the
   surface value marked · no. Readout: $\kg = GM/\kr^2$ with the numbers;
   small line turning it round, $M = \kg\kr^2/G$, which is how Earth’s
   mass was first found. The sliders are ratios so that the AP items read
   straight off them: 300 masses and 11 radii is Jupiter, and two masses
   and two radii is the newly discovered planet. Draws acceleration,
   position.
3. `sim-earth-moon` · replaces Figure 6.20 (a) and (b) (Earth and the Moon
   turning about their common center of mass, and the wiggle in Earth’s
   path around the Sun) · gravity-as-centripetal-force, center-of-mass,
   g-from-gravitation · **moves**: the pair turns about the common center
   of mass once a lunar month, which is a time in the idea, so the figure
   runs a cycle of one orbit and gets the transport; beneath the pair the
   center of mass travels in a straight line while Earth traces the
   wiggle the book draws in (b) · the orbital radius $\kr$ (2.0 to 6.0
   × 10⁸ m, default 3.84, position), the period $\kT$ (10 to 60 d, default
   27.3, time) · “at 3.84 × 10⁸ m and 27.3 d, gravity gives 2.70 × 10⁻³
   m/s² at the Moon and the orbit needs 2.72 × 10⁻³ m/s²” · none: the two
   orbits and the wiggle are the picture · no. Readout:
   $\kac = \kr\kw^2$ beside $\kg = GM/\kr^2$ with both numbers; small line
   on how far apart the two values are, which is Newton’s own test of the
   law. The sizes and the offset of the center of mass are drawn larger
   than they are, as the book’s figure draws them. Draws position, time,
   acceleration, angular-rate.
4. `sim-tides` · replaces Figure 6.21 and folds Figure 6.22, whose three
   panels draw the same Earth and the same bulges with the Sun added ·
   tides, universal-gravitation · **moves**: Earth turns under the tidal
   bulge once a day, which is why a coast passes through two high and two
   low tides, so the figure runs a cycle of one day and gets the transport
   · the angle of the Sun from the Earth-Moon line (0º to 90º, default 0º,
   ink) · “t = 6.2 h · the marked coast has turned a quarter turn since
   high tide and the water there is at its lowest” · none: the scene is
   the picture · no. Three arrows show the Moon’s pull on the near water,
   on Earth and on the far water, longest on the near side and shortest on
   the far one, which is the whole of the book’s argument for two bulges.
   Readout: $\kF = G\,mM/\kr^2$ at the near and the far side with the
   numbers; small line on the spring tides at 0º and the neap tides at
   90º. Draws force, position.
5. `sim-cavendish` · replaces Figure 6.25 (the torsion balance, the
   mirror, the light source and the scale) · cavendish-experiment,
   gravitational-constant, universal-gravitation · **still**: the balance
   settles where the attraction and the twist of the fiber balance, and
   the figure answers its sliders; nothing accumulates as a clock runs ·
   the suspended masses $m$ (0.2 to 5.0 kg, default 1.0, ink), the masses
   on the stand $M$ (2 to 50 kg, default 20, ink), the distance between
   the centers $\kr$ (0.05 to 0.50 m, default 0.10, position) · “1.0 kg
   spheres 0.10 m from 20 kg spheres attract with 1.33 × 10⁻⁷ N, and the
   light spot rests that far along the scale” · none · no. Readout:
   $\kF = G\,mM/\kr^2$ with the numbers; small line on the scale reading
   being proportional to the attraction, which is how a force this small
   is measured at all. Draws force, position.

Photographs and artwork, each with keep or drop and the reason:

- Figure 6.17, the apple and Émilie du Châtelet
  (`OSX_CP2e_Figure_07_05_01.jpg`, 225 px): **keep**. The text points at it
  (“See Figure 6.17”) and the caption carries the whole story of how the
  law was received and who established it in France. `photo` row, number
  6.17.
- Figure 6.23, the black hole tearing matter from its companion star
  (`Figure_07_05_07aa.jpg`, 300 px): **keep**. The text points at it (“see
  Figure 6.23”) and it shows the thing the passage is about, the most
  extreme tides there are. `photo` row, number 6.23.
- Figure 6.24, the astronauts aboard the International Space Station
  (`Figure_07_05_07.jpg`, 350 px): **keep**. It shows the thing the
  weightlessness passage is about and carries the NASA credit. `photo`
  row, number 6.24.

No photograph is dropped: the section has no splash image and every
picture in it is one the text works with.

Figures that serve exercises: none. The section’s problems and AP items
refer to no figure of their own, and the two AP items on the surface
gravity of Jupiter and of a doubled planet are driven straight off
`sim-surface-gravity`, whose sliders are multiples of Earth’s mass and
radius.

Extra simulations (rule 15), considered and left:

- A person on a bathroom scale in a lift whose cable breaks, the reading
  falling to zero as the lift accelerates at $g$: it would open the
  weightlessness passage, which the section only describes. Apparent
  weight is Chapter 4’s idea and 4.7 is being built beside this section
  with the lift as its own subject, so the figure belongs there. Left.
- A ladder of gravitational forces on one logarithmic scale — the father
  and the baby, Jupiter and the baby, the mountain and the walker, Earth
  and the walker — to show at a glance why we notice only Earth’s pull:
  the comparison is real, but every rung would be a number the book does
  not print, and `sim-two-masses` already lets the reader dial any pair
  and read the force. Left.
- Two bodies of very different mass released from rest, feeling the same
  force and picking up very different accelerations, for the Misconception
  Alert: that is Newton’s second and third laws rather than this section’s
  idea, and `sim-two-masses` already draws the two arrows the same length.
  Left.

None built.

## Exercises

- No Check Your Understanding box; nothing inline.
- 6 AP test prep items, all kept. `ap1` (fs-id1372020, Jupiter’s surface
  gravity against Earth’s, choice keyed (a), Apply), `ap3` (fs-id1110266,
  what $G$ represents, choice keyed (b), Remember) and `ap5`
  (fs-id1841502, the planet of twice the mass and twice the radius, choice
  keyed (b), Apply) are graded choices with the book’s key. `ap2`
  (fs-id674030, the circumstances that maximise the force, Understand),
  `ap4` (fs-id1678996, Titan’s mass from its radius and its field, Apply)
  and `ap6` (fs-id1545601, the Sun’s field at Mercury against its field at
  Earth, Apply) have no key and are kept as open items with an AI-marked
  suggested approach, never as graded choices. `ap2` names “Equation
  6.40”, a number OmniStax does not print; the book’s wording is kept as
  the book prints it and the item cites `universal-law`, the passage that
  states the law. The leading “4. ” that the CNXML leaves on `ap6` is a
  stray list number from the source and is not printed.
- 4 conceptual questions, `cq1` to `cq4`, with AI-written suggested
  approaches. `cq1` (fs-id959677, action at a distance, Understand) and
  `cq2` (fs-id3122954, Anna and Tom on whether a satellite is in free
  fall, Understand) are printed word for word in 6.4 as well; gravity is
  introduced here, so under rule 12 the pair is kept here and 6.4 leaves
  its copies out, with both sections’ `exercise_notes` saying so. `cq3`
  (fs-id3233493, the free body diagram of a satellite in an elliptical
  orbit, Analyze) tests the direction of the gravitational force, which
  this section introduces, so it stays here; the change of speed it asks
  about is taken up by Kepler’s second law in 6.6, and
  `exercise_notes` says so. `cq4` (fs-id1890173, whether underlying order
  will always be found, Evaluate).
- 6 problems keyed and kept: `p1` (fs-id1845493, Earth’s mass from $g$ at
  the pole, number with the comparison in the solution, Apply), `p3`
  (fs-id1427117, $g$ on the Moon and on Mars, multi, Apply), `p5`
  (fs-id3135282, the accelerations at the Earth-Moon center of mass,
  multi, Analyze), `p7` (fs-id1516358, the father, the baby and Jupiter,
  multi, Apply), `p9` (fs-id1422828, the Sun’s galactic orbit, multi,
  Analyze) and `p10` (fs-id3202966, the Unreasonable Result of the
  mountain, multi, Evaluate).
- 4 problems left out, having no answer in the book’s key: 2
  (fs-id2991154, the Moon’s and the Sun’s accelerations at Earth), 4
  (fs-id3115601, the Sun’s surface gravity), 6 (fs-id3051529, part (b) of
  Example 6.6 re-solved with $a_{\text{c}} = v^2/r$) and 8 (fs-id2407168,
  Neptune, Pluto and Uranus). Each is named in `notes` and
  `exercise_notes`.
- Nothing is taken from another section and nothing is held for a later
  one. 6.2’s satellite-altitude problem (fs-id3257966) needs
  $g = GM/r^2$, which this section gives, but it has no key, so 6.2 leaves
  it out and names it rather than holding it here.
- No generated questions. `center-of-mass` has no book exercise that turns
  on it alone; the Earth-Moon center-of-mass problem (`p5`) tests it
  alongside the centripetal acceleration and is tagged for both, and no
  question is generated for the node.
- Weights: `p5` gives `gravity-as-centripetal-force` its full value,
  `g-from-gravitation` weight 3 and `center-of-mass` weight 2, since the
  center of mass is where the problem puts the reader rather than what it
  asks for; `p7` gives `gravitational-constant` weight 1, since the
  constant is only carried through the arithmetic; `p9` gives
  `centripetal-acceleration-magnitude` its full value,
  `gravity-as-centripetal-force` weight 3 and `g-from-gravitation` weight
  1, the work being the centripetal acceleration of 6.2; `p10` gives
  `unreasonable-results` its full value and `universal-gravitation`
  weight 3; `p1` and `ap4` give `mass-from-g` their full value and
  `g-from-gravitation` weight 3; `ap1` gives `g-from-gravitation` its full
  value and `universal-gravitation` weight 2; `ap2` and `cq1` give
  `universal-gravitation` their full value and `gravitational-constant`
  weight 1; `cq2` gives `weightlessness` its full value,
  `g-from-gravitation` weight 3 and `free-fall` weight 2; `cq3` gives
  `universal-gravitation` its full value and `free-body-diagram` weight 2.

## Views

- Formulas: the five equations of the section already in `chapter.json`,
  four of them important and the step $mg = GmM/r^2$ not.
- Definitions: the eight variables of the section; the four glossary terms
  (the gravitational constant, the center of mass, microgravity and
  Newton’s universal law of gravitation).
- Concept map: the nine nodes above with their sixteen edges into 2.7,
  4.1, 4.3, 4.5, 4.7 and 6.2.

## Colour

The page binds force, position, acceleration and angular rate, and time
through the period of the Moon’s orbit. Every sim draws the gravitational
force or the acceleration it produces: `sim-two-masses` and
`sim-cavendish` draw $\kF$ and carry $\kr$ on a slider,
`sim-surface-gravity` draws $\kg$ against $\kr$, `sim-earth-moon` states
$\kac$ and $\kg$ and carries $\kr$ and $\kT$ on sliders and $\kw$ in its
readout, and `sim-tides` draws the Moon’s pull on the near and the far
water. The masses $m$ and $M$, the constant $G$, the angle of the Sun and
the two slider ratios of `sim-surface-gravity` stay untyped and in ink, as
the book’s rules say.

## Wanted at chapter level

- variables `F` → 6.5-universal-law
- variables `G` → 6.5-universal-law
- variables `m` → 6.5-universal-law
- variables `M` → 6.5-universal-law
- variables `r_curv` → 6.5-universal-law
- variables `g` → 6.5-g-from-gravity
- variables `a_c` → 6.5-moon
- variables `ω` → 6.5-moon
- equations `eq-gravitation` → 6.5-universal-law
- equations `eq-G` → 6.5-gravitational-constant
- equations `eq-mg-gravitation` → 6.5-g-from-gravity
- equations `eq-g-GM` → 6.5-g-from-gravity
- equations `eq-M-from-g` → 6.5-cavendish
- The CNXML of the module carries a worked solution for each of the three
  unkeyed AP items (`fs-id674030`, `fs-id1678996`, `fs-id1545601`) inside
  an XML comment, so the converter drops it and the book does not print
  it. The three are kept as open items with an AI-marked approach, as the
  chapter config asks. If Fable would rather treat a commented-out
  solution as the book’s key, the three answers would become
  `generated_by: "source"` and the approaches would be replaced by the
  book’s own words; that is a decision for the whole book, not for this
  section.

### Decided in the chapter pass

- Every anchor above is written on its variable and equation row in
  `chapter.json`.
- A worked solution that the CNXML carries inside an XML comment is not the
  book's key: the book does not print it, and the rule is that answers come
  from the printed key only. The three AP items stay open items with their
  AI-marked approaches, exactly as the section built them.

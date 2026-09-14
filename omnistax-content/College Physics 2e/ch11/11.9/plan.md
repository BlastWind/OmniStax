# Plan: 11.9 Pressures in the Body (m42199)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book without
check-ins; the per-section stop of rule 2, the plan review of rule 5 and the
user picks of rule 15 are replaced by this file, written before the section
was built and left for review after, as `ch11/config.md` records.

The chapter's closing section, which turns everything the eight sections
before it built on the body. Every pressure a physician measures is a gauge
pressure quoted in millimeters of mercury, and the section takes them in turn:
the blood pressure that a cuff reads and that rises in the feet of a standing
person by exactly the weight of the column of blood between heart and feet
($\kdPr = \kdh\krho\kg$), the pressure that holds the eye in shape and the
force it becomes when glaucoma raises it ($\kF = \kPr A$), the pressure inside
the lungs that swings below and above atmospheric with each breath, the fluid
that floats the brain, the bladder and its reflex, and the largest pressures
of all, between the vertebrae. Three numbered figures (11.34 a schematic of the
circulation, 11.35 a photograph of a tonometer, 11.36 the chest inhaling and
exhaling), one table (11.5), one worked example (11.13, the eardrum), three
boxed notes, five glossary terms, twenty problems of which eight are keyed and
kept, and no conceptual questions, AP items or Check Your Understanding boxes.
One page (rule 11).

## Sub-concepts (page headers)

The module prints its own headers, and `ch11/config.md` keeps them as the
book writes them; the three sub-headers under "Other Pressures in the Body"
become sections of their own so that each concept has a span, and the
umbrella header stands over the first of them.

1. `body-pressures` **Pressure in the Body** (book: the two opening
   paragraphs and Table 11.5). The variable $\kPg$ anchors here.
2. `blood-pressure` **Blood Pressure** (book: the paragraph on systolic and
   diastolic pressure; the paragraph on the pressure falling around the
   circulation and rising in the feet, with its equation; the boxed note
   Increase in Pressure in the Feet of a Person; the paragraphs on standing,
   on catheters and on the two pumps; the boxed note Two Pumps of the Heart;
   Figure 11.34). The variables $\kdPr$, $\kdh$ and $\krho$ and the equation
   `eq-pressure-in-feet` anchor here.
3. `eye` **Pressure in the Eye** (book: the paragraph on intraocular pressure
   and glaucoma with its force calculation; the boxed note Eye Pressure; the
   paragraphs on the 680 g mass and on the tonometer; Figure 11.35; Example
   11.13, the eardrum). The variables $\kF$, $A$ and $\kh$ and the equation
   `eq-eye-force` anchor here. The example is `ex-eardrum`.
4. `lungs` **Pressure Associated with the Lungs** (book: the three paragraphs
   on breathing, on the mechanisms that control lung pressure and on the
   liquid attaching the lungs to the chest wall; Figure 11.36).
5. `spinal-fluid` **Other Pressures in the Body**, with the book's sub-header
   **Spinal Column and Skull** as an `<h3>` (book: the paragraph on the
   cerebrospinal fluid).
6. `bladder` **Bladder Pressure** (book: the paragraph on the bladder and the
   micturition reflex).
7. `skeletal` **Pressures in the Skeletal System** (book: the paragraph on the
   5000 N between vertebrae; the paragraph on the digestive system, the
   middle ear and the Eustachian tubes; the closing sentence on fluid flow).

The book numbers its example on openstax.org as Example 11.13, the chapter's
thirteenth, and the page follows that. Cross references are plain text: the
three to Fluid Dynamics and Its Biological and Medical Applications, because
Chapter 12 is being built in this same job and the validator refuses a link
into a chapter not yet in `book.json` (`ch11/config.md`; the chapter pass
links them); the one to Cohesion and Adhesion in Liquids, because it is a
section of this chapter; and the one to Forces and Torques in Muscles and
Joints, because the built pages of this book write every section reference as
the book's title in plain text. Learning objectives, the section summary and
the glossary come out of the running text into the tables and the views
(rule 4). The book defines systolic and diastolic pressure here a second time;
the glossary rows sit under 11.6, which defines them first, and the page bolds
the terms as the book does.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| pressures-in-the-body | idea | body-pressures | the opening paragraphs, Table 11.5, the spinal manometer problem |
| blood-pressure-and-height | result, eq-pressure-in-feet | blood-pressure | the 1.4 m calculation in the text and the note, Figure 11.34 |
| intraocular-pressure | idea, eq-eye-force | eye | the 6.8 N calculation, the note, the tonometer, the glossary rows |
| lung-pressures | idea | lungs | the three paragraphs and Figure 11.36; the exhalation, balloon and reed problems |
| bladder-pressure | idea | bladder | the bladder paragraph and the fetus problem |
| skeletal-pressures | idea | skeletal | the 5000 N calculation; the spinal disk problem |

The section leans on `pressure` and `force-from-pressure` (11.3),
`pressure-from-weight-of-fluid` (11.4), `gauge-pressure`, `manometer` and
`blood-pressure-measurement` (11.6), `buoyant-force` (11.7), `surface-tension`
and `alveoli-and-surfactant` (11.8), `youngs-modulus` (5.3) and
`newtons-second-law` (4.3); the coverage rows mark each as used where the text
uses it.

## Figures

id · replaces or Sim · concepts · what moves or still · sliders · headline ·
graph · 3D

1. `sim-body-pressures` · Sim (it replaces no figure; Table 11.5 stays in the
   text as a table) · pressures-in-the-body, gauge-pressure · value add:
   intuition and variation, the thirteen ranges of the table laid on one
   fixed gauge-pressure axis so the reader sees at a glance that the
   pressures of the body run from a few millimeters of mercury below
   atmospheric to a hundred and fifty above, and a pressure of the reader's
   choosing placed among them · **still**: a table of typical values has no
   time in it, so the figure answers its slider and its choice and registers
   no cycle (rule 14) · $\kPg$ (−10 to 150 mm Hg, default 120, pressure, with
   detents at 12, 24, 80, 85 and 120, which are the normal eye pressure, its
   upper bound, the diastolic and systolic readings and the glaucoma value
   the text works), and a choice of the unit the axis is written in (mm Hg,
   kPa, cm of water, atm; default mm Hg), a unit being a state and not a
   quantity (rule 26.1) · "A gauge pressure of 120 mm Hg, which is 16.0 kPa,
   lies in the systolic range of the large arteries and above every other
   pressure of the table." · the chart is the scene: thirteen range bars in
   the pressure hue on a fixed axis from −10 to 150 mm Hg (rounded to ticks
   of 20, never rescaled; the same axis relabelled when the unit changes),
   each row named in ink at the left, hover names carrying each row's range
   (rule 26.6), the chosen pressure a dashed line in the pressure hue · 2D.
   Readout: $\kPg = 120\ \text{mm Hg} = 120 \times 133\ \text{N/m}^2 = 1.60
   \times 10^{4}\ \text{N/m}^2$ with the live numbers; small line naming the
   rows the value falls inside. Labels: thirteen row names, which exceed six,
   but they are the frame of a chart (its category axis) rather than entity
   labels on the drawing, so they stay on (rule 26.7). Every bar is a pressure
   and takes the pressure hue; the rows are told apart by their names, so the
   categorical palette `ch11/COLOR.md` offered for the body systems is not
   used, since a bar that is a pressure may not wear a colour that says
   otherwise (rule 7). Draws pressure.
2. `sim-circulation` · replaces Figure 11.34, the schematic of the
   circulatory system with its typical pressures · blood-pressure-and-height,
   pressures-in-the-body, blood-pressure-measurement · value add:
   standardisation and intuition, the loop redrawn with its two pumps and,
   beside it, the pressure at each station of the circuit laid on one axis in
   circuit order, so the two rises the pumps make and the two long falls
   between them can be read as a profile, which the schematic alone does not
   show · **still**: the figure states the pressure at each point of a
   circuit, and the flow that carries blood between them is Chapter 12's
   subject; `ch11/config.md` keeps every figure of the chapter but three
   still, so the direction of flow is marked with fixed arrowheads and
   nothing moves (rule 14) · a choice of station (aorta 120, small arteries
   85, arterioles 35, venules 15, vena cavae 4, pulmonary artery 25,
   pulmonary veins 8; default the aorta), as a dropdown because a row of
   seven names would wrap (rule 26.1); the book gives the capillaries no
   number so they are drawn but not a station · "Blood leaves the left side
   of the heart into the aorta at about 120 mm Hg, the highest pressure in
   the circuit." · graph beside: the seven stations in circuit order on a
   fixed axis from 0 to 140 mm Hg, the chosen station's bar marked, the two
   pumps drawn as rises · 2D. Readout: $\kPg$ at the station in mm Hg and
   N/m², with a small line on how much of the aortic pressure has been lost
   by that point. Colours that are the physical fact (rule 7, named here):
   blood carrying oxygen is bright red, `#C93A2E`, and blood returning to the
   heart is dark red, `#7B2A3B`, for the two sides of the loop and of the
   heart, so the figure reads like the book's; every pressure is in the
   pressure hue; vessel walls, labels and the lungs are ink. Labels: seven
   station names plus the heart's four chambers, the lungs and the
   capillaries exceed six, so the station names sit on the chart's category
   axis (frame, always shown) and the anatomical names on the loop are off by
   default behind a Labels button with hover names (rule 26.7). Draws
   pressure.
3. `sim-blood-column` · Sim (it replaces no figure of the book) ·
   blood-pressure-and-height, pressure-from-weight-of-fluid · value add:
   variation and intuition, the 1.4 m of the book's one calculation put on a
   slider so the reader sees the pressure in a standing person's arteries
   rise below the heart and fall above it by the weight of the column of
   blood, and vanish when the person lies down · **still**: a person
   standing or lying still is a static column of blood, which is exactly what
   the text says it calculates, so the figure answers its slider and its
   choice and registers no cycle (rule 14) · $\kdh$, the depth of a point on
   the body below the heart (−0.40 to 1.40 m, default 1.40, position, the
   feet of the book's calculation; negative values are above the heart, up
   to the top of the head), and a choice of posture (standing, lying down;
   default standing), a posture being a state (rule 26.1); lying down puts
   every point at the heart's level, so the marked point still travels along
   the body while $\kdh$ and $\kdPr$ read zero, which is the consequence the
   text names · "Standing, the feet are 1.40 m below the heart, and the
   pressure of the blood there is 108 mm Hg higher than at the heart." ·
   graph beside, because the scene is a standing person: $\kdPr$ in mm Hg
   against $\kdh$ in m, fixed axes −0.4 to 1.4 m and −40 to 120 mm Hg (from
   the slider range), the line $\kdPr = \kdh\krho\kg$ and the current point ·
   2D. Readout: $\kdPr = \kdh\krho\kg = (1.40\ \text{m})(1050\
   \text{kg/m}^3)(9.80\ \text{m/s}^2) = 1.44\times 10^{4}\ \text{Pa} = 108\
   \text{mm Hg}$ with the live numbers; small line on the column being a
   static one. The person is drawn by the figure itself in ink, 1.80 m tall
   with the heart 1.40 m above the feet, rather than with the library's
   person sprite: the sprite is built for a body 80 to 120 units long and
   its head is a quarter of its height, so scaled to a metre rule with the
   heart 1.40 m up it would stand 2.2 m tall and the scale beside it would
   say so. The same drawing is turned through a right angle to lie on the
   bed. The heart is
   a small mark in blood red (the physical fact, `#C93A2E`); the density of
   blood and $\kg$ are stated and untyped on this page (`ch11/COLOR.md` binds
   only pressure, position and force here). Draws pressure, position.
4. `sim-eye-force` · Sim (it replaces no figure of the book) ·
   intraocular-pressure, force-from-pressure · value add: variation and
   intuition, the text's one calculation ($6.8\ \text{N}$ at 85.0 mm Hg on
   $6.0\ \text{cm}^2$) put on sliders, so the reader sees how small a
   pressure of a few millimeters of mercury is as a force on the back of the
   eye and how large glaucoma makes it, against the weight of a mass resting
   on the eye · **still**: a pressure held in the eye has no time in it
   (rule 14) · $\kPg$ (0 to 100 mm Hg, default 85.0, pressure, detents at
   12, 24 and 85, which are the normal range's ends and the text's glaucoma
   value) and $A$ (3.0 to 9.0 cm², default 6.0, ink) · "A pressure of 85.0 mm
   Hg on the 6.0 cm² at the back of the eye is a force of 6.8 N, the weight
   of a 0.69 kg mass resting on the eye." · none: the eye in cross section,
   the fluid pressing on the back of it with a field of small arrows in the
   pressure hue, their sum one force arrow in the force hue, and beside it a
   mass on a pan whose weight arrow is the same length · 2D. Readout: $\kF =
   \kh\krho\kg A$ with the live numbers, written as the book writes it with
   $\kh$ the height of the mercury column the pressure supports; small line
   on the equivalent mass and on the normal range. Draws pressure, force,
   position.
5. `fig-tonometer` · Figure 11.35, the photograph of a tonometer in use ·
   keep: the text points at it ("A noncontact approach uses a puff of air and
   a measurement is made of the force needed to indent the eye (Figure
   11.35)"), and it shows the instrument the passage is about; the book's
   caption and credit kept, width 400.
6. `sim-breath` · replaces Figure 11.36 (a) and (b), inhalation and gentle
   exhalation · lung-pressures, gauge-pressure, alveoli-and-surfactant ·
   value add: flow by animation and intuition; the book draws two instants of
   one breath, and the reader would otherwise have to imagine the diaphragm
   moving, the chest expanding and the pressure inside the lungs swinging
   from below atmospheric to above it and back, which is the mental
   translation rule 24.3 names · **moving**, with the reason `ch11/config.md`
   and the chapter notes allow: a breath has a genuine clock, the text says
   the pressure "increases and decreases with each breath", and the two
   arrows of the book's figure are the flow of air, which is kinematic (rule
   24.1); one breath of 5 s (2.2 s in, 2.8 s out) registers a cycle and gets
   the app's transport with its scrubber; the diaphragm, the lungs, the chest
   wall and the air move · no sliders: the book gives the pressures of one
   ordinary breath and nothing in the passage is a quantity the reader should
   vary, so the transport (play, pause, scrub, speed) is the figure's whole
   control · "Breathing in, the diaphragm moves down and the chest expands,
   the pressure inside the lungs falls to −2.0 mm Hg, and air flows in." ·
   graph beside, because the chest is drawn upright: both gauge pressures in
   mm Hg against time over one breath, fixed axes 0 to 5 s and −8 to +4 mm
   Hg, the pressure inside the lungs a solid curve and the pressure between
   the lungs and the chest wall a dashed one, both in the pressure hue and
   told apart by the legend and the dash (rule 7, variants of one type), the
   moving points and a drop line · 2D. Model: the phase $\phi$ runs 0 to $\pi$
   through inhalation and $\pi$ to $2\pi$ through exhalation; the pressure
   inside the lungs is $-2.0\sin\phi$ mm Hg breathing in and $-3.0\sin\phi$
   breathing out, so it reaches the book's −2.0 and +3.0; the pressure
   between the lungs and the chest wall is $-4.25 - 1.75\sin\phi$ mm Hg, so it
   reads −6.0 at the middle of inhalation and −2.5 at the middle of
   exhalation, which are the book's two panels as two states of the one
   figure (rule 25), and it never reaches zero. The lungs, the chest and the
   diaphragm are ink outlines; the air arrows are ink; the two pressures are
   in the pressure hue. Labels: trachea, lungs, diaphragm, chest wall and the
   liquid between lungs and chest wall are five, at fixed positions beside
   the chest with leaders, so they stay on (rule 26.7). Draws pressure.

Photographs: one, Figure 11.35, kept (above). The section has no splash image.

Figures that serve exercises: the book prints three images inside this
section's problems. The water manometer on the spinal fluid
(`Figure_12_09_04a-b4ea.jpg`) travels on the card of `p8`, as
`ch11/config.md` decides for the chapter. The piston that puts a liquid
under tension and the backhoe travel with their items to 11.8 and 11.5 and
are not copied here.

Extra simulations (rule 15), thought through, judged and decided:

- **The pressures of the body on one axis (`sim-body-pressures`): built.**
  Table 11.5 is thirteen numbers in a column, and nothing in the book lets
  the reader see them together or ask where a given reading falls.
- **The column of blood in a standing person (`sim-blood-column`):
  built.** The section's one equation is worked once for 1.4 m and never
  drawn, and the problems ask what happens when a person sits up or lies
  down.
- **The force on the back of the eye (`sim-eye-force`): built.** It is the
  section's second calculation and the one the glossary's two terms hang on.
- The eardrum of Example 11.13, with a diver's depth on a slider. Left: it
  is $\kF = \kPr A$ and $\kh = \kPr/\krho\kg$ with the example's numbers, and
  `sim-eye-force` and 11.4's depth figure already give both views.
- The brain floating in cerebrospinal fluid. Left: it is 11.7's buoyant
  force with two nearly equal densities, and a figure would show a body
  neither rising nor sinking, which a still sentence says as well.
- The bladder filling with its pressure climbing to 25 mm Hg. Left: the book
  gives two numbers and a reflex, not a relation, and a slider between them
  would invent the curve.

## Exercises

- No conceptual questions, no AP items and no Check Your Understanding box:
  the module prints only problems, so nothing is set inline and there is no
  exercise host in the text.
- 8 problems keyed and kept, at the end: `p1` (fs-id2399643, the 60.0 mm Hg
  of forced exhalation on the 600 cm² of the diaphragm, keyed 479 N, Apply),
  `p3` (fs-id3158494, the balloon squeezed to 4.00 cm of water over 50.0
  cm², keyed 1.96 N, Apply), `p4` (fs-id2397587, breathing through a reed
  60.0 cm under water, keyed −63.0 cm of water, Analyze), `p6`
  (fs-id2590540, the 3.50 kg fetus on 90.0 cm² of bladder, keyed
  $3.81\times 10^{3}\ \text{N/m}^2$ and 28.7 mm Hg, Apply), `p8`
  (fs-id1977857, the water manometer on the spinal fluid, keyed 13.6 and
  76.5 cm of water, Analyze, with the book's image on its card), `p10`
  (fs-id1973660, the spinal disk under 5000 N, keyed $3.98\times 10^{6}\
  \text{Pa}$ and $2.1\times 10^{-3}\ \text{cm}$, Apply), `p14`
  (fs-id1390466, the hammer and the steel nail, keyed $2.01\times 10^{4}\
  \text{N}$, $1.17\times 10^{-3}\ \text{m}$ and $2.56\times 10^{10}\
  \text{N/m}^2$, Analyze) and `p18` (fs-id3026192, the bicycle pump with a
  2.00 cm piston, keyed 867 N for part (a) with the book's own answers to
  (b) and (c) in the solution, Evaluate).
- The key to `p8` prints part (a) as "13.6 m water". The number is the
  book's and is kept; the unit is centimeters of water, since 10.0 mm Hg is
  the weight of 13.6 cm of water and part (b) of the same key reads 76.5 cm
  water, so the card writes 13.6 cm of water and `exercise_notes` says so.
  Nothing is computed in the key's place.
- 9 problems left out, having no answer in the book's key: the tooth on
  1.00 mm² (fs-id3408317), the infant's skull (fs-id982366), the stomach
  fluid rising in the esophagus (fs-id1174050), the aneurysm
  (fs-id3161402), the brain raised 36.0 cm (fs-id3232798), the Marianas
  Trench repeated with a bulk modulus (fs-id3398477), the mine shaft
  (fs-id2683813) and the two Construct Your Own Problem items, the people
  clinging to a log (fs-id2446574) and the alveoli in emphysema
  (fs-id2400498). They are named in `notes` and in `exercise_notes`.
- 3 problems the book prints here go to other pages, as `ch11/config.md` and
  `ch11/exploration.md` decide: the capillary tube and the energy the water
  gains (fs-id2382586) and the device that reaches −25.0 atm (fs-id2392422)
  to 11.8 with `source_section: "11.9"`, since both are capillary action and
  surface tension, and the backhoe's hydraulics (fs-id3077567) to 11.5, since
  it is Pascal's principle and a lever. `exercise_notes` says so here and
  those pages' notes say so too.
- The hammer and the steel nail (`p14`) stays here although its physics is
  Chapter 4's average force and 5.3's compression: the book sets it among
  the pressures on small areas, and `ch11/config.md` keeps it. Nothing is
  taken from another section.
- No generated questions: every node of the section has a book problem that
  tests it except `intraocular-pressure`, whose numbers the book works in the
  text and tests in no keyed problem (the aqueous humor problem sits in
  11.4); the node is noted here and no question is generated.
- Weights: `p1` gives `lung-pressures` its full value and
  `force-from-pressure` 3; `p3` gives `force-from-pressure` its full value,
  `pressure-from-weight-of-fluid` 2 and `lung-pressures` 2; `p4` gives
  `lung-pressures` its full value, `pressure-from-weight-of-fluid` 3 and
  `gauge-pressure` 2; `p6` gives `bladder-pressure` its full value and
  `pressure` 3; `p8` gives `pressures-in-the-body` its full value,
  `manometer` 4 and `blood-pressure-and-height` 3, since sitting up adds a
  column of fluid exactly as standing does; `p10` gives
  `skeletal-pressures` its full value, `pressure` 3 and `youngs-modulus` 3;
  `p14` gives `pressure` its full value, `newtons-second-law` 3,
  `youngs-modulus` 3 and `skeletal-pressures` 2; `p18` gives
  `force-from-pressure` its full value and `pressure` 2.

## Views

- Formulas: the two equations of the section already in `chapter.json`,
  both important (`eq-pressure-in-feet`, `eq-eye-force`).
- Definitions: the seven variables of the section, and three glossary terms,
  glaucoma, intraocular pressure and micturition reflex; systolic and
  diastolic pressure are 11.6's rows.
- Concept map: the six nodes above with their edges into 11.3, 11.4, 11.6
  and 11.8.

## Colour

The page binds pressure, position and force, as `ch11/COLOR.md` allots it.
Every figure states a pressure (the bars of the table, the stations of the
circuit, the rise in the feet, the pressure in the eye, the two pressures of
the chest); two measure a position (the depth of a point below the heart, the
height of mercury the eye's pressure supports); one draws a force (the force
on the back of the eye and the weight it equals). The density of blood, of
mercury and of water, $\kg$, every area and every mass stay untyped and in
ink, since the page binds neither density nor acceleration. Blood is drawn
in the two reds that are its colour (rule 7, the physical fact), named in the
plan lines of `sim-circulation` and `sim-blood-column`; nothing else on the
page carries a hex.

## Wanted at chapter level

- variables `P_g` (the 11.9 row) → 11.9-body-pressures
- variables `ΔP` → 11.9-blood-pressure
- variables `Δh` → 11.9-blood-pressure
- variables `ρ_dens` (the 11.9 row) → 11.9-blood-pressure
- variables `F` (the 11.9 row) → 11.9-eye
- variables `A` (the 11.9 row) → 11.9-eye
- variables `h` (the 11.9 row) → 11.9-eye
- equations `eq-pressure-in-feet` → 11.9-blood-pressure
- equations `eq-eye-force` → 11.9-eye
- concepts `intraocular-pressure`: the `why` field carries a literal tab
  character where `\text` was meant (`$6.0\;<tab>ext{cm}^2$`), so the math
  does not render; write `\\text` in the JSON.
- concepts `bladder-pressure`: the same tab in `why` (`$500\;<tab>ext{cm}^3$`)
  and in `evidence` (`$90.0\;<tab>ext{cm}^2$`).
- concepts `skeletal-pressures`: the same tab in `why` (`$10\;<tab>ext{cm}^2$`
  and `$5.0<tab>imes 10^{6}\;<tab>ext{N/m}^2$`) and in `evidence`
  (`$1.00\;<tab>ext{mm}^2$`).
- The three references to Fluid Dynamics and Its Biological and Medical
  Applications in `text.html` (in `blood-pressure`, in the caption of Figure
  11.34 and in `skeletal`) are plain text and wait for Chapter 12 to be
  merged, as `ch11/config.md` says.
- 11.8's `exercise_notes` should say that fs-id2382586 and fs-id2392422 come
  from 11.9, and 11.5's that fs-id3077567 does, as this page's notes say they
  went.

# Plan: 12.5 The Onset of Turbulence (m42210)

Source: `source.md` (converted from CNXML). Status: built 2026-09-14 without
a review stop, on Chen's standing instruction to finish the book in waves;
`ch12/config.md` records that the plan file replaces the check-in.

The section that puts a number on the difference between laminar and
turbulent flow. One sketch figure (12.22, the artery narrowed by plaque), one
photograph inside a conceptual question (12.23, the sink-drain insert), one
worked example (12.9, the needle of Example 12.8), one boxed note (the
Take-Home Experiment on inhalation), three conceptual questions and eleven
problems, six of them keyed. No Check Your Understanding box, no AP item, no
PhET note. One page (rule 11).

## Sub-concepts (page headers)

The book prints no headers of its own here, so these are OmniStax's, one
block per idea:

1. `predicting-turbulence` **Predicting whether a flow will be laminar or
   turbulent** (book: the opening paragraph; smooth tubes at low speed,
   turbulence at high speed, oscillation in between). Uses `laminar-flow`
   and `turbulent-flow` from 12.4.
2. `turbulence-in-circulation` **Turbulence in the circulatory system**
   (book: the occlusion paragraph with Figure 12.22, Korotkoff sounds,
   aneurysms, heart murmurs, Doppler ultrasound). Introduces
   `turbulence-in-circulation`; uses `turbulent-flow`,
   `radius-fourth-power-sensitivity` and `blood-pressure-measurement`.
3. `reynolds-number` **The Reynolds number** (book: the definition
   $N_{\text{R}} = 2\krho\kv r/\keta$, that it is unitless, the thresholds
   of about 2000 and 3000, the aorta). Introduces `reynolds-number` and
   `turbulence-onset-thresholds`; uses `viscosity` and `density`. The
   chapter's variables $N_{\text{R}}$, $\krho$, $\kv$, $r$ and $\keta$ and
   the equation `eq-reynolds-tube` anchor here.
4. `checking-flow` **Checking whether a flow is laminar** (book: Example
   12.9, which computes $N_{\text{R}} = 523$ for the needle of Example 12.8,
   and the Take-Home Experiment: Inhalation). Uses `reynolds-number`,
   `turbulence-onset-thresholds` and `flow-rate-velocity`. The example is
   `ex-laminar-check`; its reference to Example 12.8 links to the 12.4 page.
5. `chaos` **Chaos** (book: the closing paragraph on chaotic systems, flow
   between 2000 and 3000 as the example, Pluto and irregular heartbeats).
   Introduces `chaotic-flow`; uses `turbulence-onset-thresholds`.

Learning objectives, the section summary and the glossary entry come out of
the running text into the tables and views. The book's "[ref]" to Figure
12.22 is written as the figure number; the reference to Example 12.8 was
built as a link to the 12.4 page and is plain text after the chapter pass,
which decided every cross-reference of the chapter the way the rest of the
book writes them (`ch12/config.md`).
Every angle and temperature degree is `°`.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| reynolds-number | result, eq-reynolds-tube | reynolds-number | the definition; Example 12.9; problems 1, 3, 5, 7, 9 and the Unreasonable Results item |
| turbulence-onset-thresholds | result | reynolds-number | the 2000 and 3000 thresholds; Example 12.9's discussion; problems 1, 3, 5, 7, 9 |
| turbulence-in-circulation | idea | turbulence-in-circulation | Figure 12.22; Korotkoff sounds and murmurs; conceptual question 1; problem 7 |
| chaotic-flow | idea | chaos | the closing paragraph; conceptual question 3 |

## Figures

id · replaces · concepts · value add · motion · sliders · headline · graph · 3D

1. `sim-turbulence` · replaces Figure 12.22 (the blood vessel narrowed by
   plaque, laminar on the left and turbulent on the right) ·
   turbulence-in-circulation, reynolds-number, turbulence-onset-thresholds ·
   value add: flow by animation (threads of dye that stay straight where the
   Reynolds number is low and roll up into eddies where it is high, which
   the still can only draw with curly arrows), variation by slider (the flow
   rate, the narrowed radius and the viscosity each move the Reynolds
   number of the narrow part across 2000 and 3000), and intuition (the
   graph beneath puts the Reynolds number along the vessel so the reader
   sees where along it the flow turns) · **moves**: four threads of dye,
   injected in pulses at the left so their motion shows where they run
   straight, are advected as material lines through a seeded field of
   decaying vortices; a vortex is born where the local $N_{\text{R}}$ is
   above 3000, or between 2000 and 3000 while a random switch is on (the
   book's "oscillates chaotically"), rides downstream, swells and decays,
   and is mirrored in both walls, so the threads visibly wind into eddies
   and stay inside the lumen, where they are also clipped; the eddies of
   a wide vessel turn at least once in 1.6 s so they roll up within the
   run; 6 s cycle with a 1.2 s hold and the transport, one seeded run per
   slider state, integrated through a 1.2 s lead-in and then frame by frame,
   every frame kept for the scrubber; the readout's small line states the
   slow-motion factor (rule 28.4) · flow rate $\kQ$ (1.0 to 16.0 cm³/s,
   default 8.0, flow-rate), radius of the narrowed part $\krtwo$ (0.50 to
   2.00 mm, default 0.75, position; at 2.00 mm the vessel is uniform),
   viscosity $\keta$ (0.5 to 4.0 mPa·s, default 2.084, viscosity, with
   unlabelled detents at Table 12.1's water at 20 °C, blood plasma at
   37 °C, whole blood at 37 °C and whole blood at 20 °C, the small line
   naming the fluid when the thumb sits on one), dashed circles on $\kQ$
   and $\krtwo$ where the narrow part reaches 2000 and 3000; the density is
   blood's 1025 kg/m³ and $r_1 = 2.00$ mm is fixed · headline as before,
   "In the wide part the Reynolds number is 1,250 and the flow is laminar;
   where plaque narrows the vessel to 0.75 mm it is 3,340 and the flow is
   turbulent." · graph below (horizontal scene): $N_{\text{R}}$ against
   position, axis fixed 0 to 8000 with the 2000 to 3000 band, `pinned()`
   where the curve leaves the range · 2D; no fold or split. Readout:
   $N_{\text{R}} = 2\krho\kv\krad/\keta$ with the narrow part's numbers.
   Labels through the labeller, which blocks the vessel so no label sits
   in the eddy zone: $r_1$, $r_2$ and "lines of dye" above the wall,
   $\kvone$ and $\kvtwo$ under their arrows, which run under the vessel
   at a fixed 100 units per m/s and are clipped with a hollow tip, "plaque"
   in the hatch. Draws flow-rate, velocity, viscosity, density, position.

Photograph 12.23 (the sink-drain insert) is kept, since conceptual question
2 asks how it works, and travels on that exercise's `figure` field as the
chapter config says; it is not a figure row. No other image. Example 12.9
gets no figure of its own: the needle's numbers are a uniform tube, which
`sim-turbulence` reaches at $r_2 = 2.00$ mm, and it adds no quantity the
figure does not show.

Extra simulations (rule 15), considered and left:

- A stethoscope over a cuffed brachial artery, the Korotkoff sounds
  appearing as the cuff pressure falls: the text tells it in one sentence
  and 11.6 built the measurement; the sound cannot be drawn. Left.
- The trachea of the take-home experiment with the reader's own breath
  time: the problem that uses it is unkeyed and left out. Left.

None built.

Figure pass (2026-09-15, Claude Fable 5.1). `sim-turbulence`: the speed labels and the "lines of flow" label sat on translucent panels that the dye threads showed through at high flow; the panels are opaque.

## Exercises

- No Check Your Understanding boxes; nothing inline.
- 3 conceptual questions, `cq1` to `cq3`, Understand, with AI-written
  suggested approaches, citing `turbulence-in-circulation`, `reynolds-number`
  and `reynolds-number`; `cq2` carries Figure 12.23 on its card.
- 6 problems keyed and kept: `p1` (the oil gusher, number, $1.99\times
  10^3$), `p3` (the nozzle and the hose, multi), `p5` (the concrete, number,
  2.54), `p7` (the artery, multi with the speed and the flow rate), `p9`
  (the gasoline pipeline, multi with the diameter and the pressure
  difference), `p11` (Unreasonable Results, the garden hose, multi with the
  keyed numbers of (a) and (d) and the book's words for (b) and (c) in the
  solution).
- 5 problems left out, having no answer in the book's key: 2
  (fs-id1236511, the units of $N_{\text{R}}$), 4 (fs-id1999575, the fire
  hose), 6 (fs-id2489688, the water main), 8 (fs-id3305938, the trachea)
  and 10 (fs-id1974364, the aorta).
- No AP items in this section and none taken from another.
- No generated questions: every node has a book exercise.
- Weights: `p3` and `p5` turn on the Reynolds number and its thresholds and
  touch `flow-rate-velocity` at weight 1, since the speed comes from
  $\kQ = A\kvb$; `p7` gives `turbulence-in-circulation` weight 1 beside the
  full value for the two results; `p9` touches `poiseuilles-law` at weight
  2 for its part (b); `p11` gives `poiseuilles-law` weight 2 for part (a).

## Views

- Formulas: `eq-reynolds-tube`, already in `chapter.json`, important.
- Definitions: the five variables of the section; the one glossary term.
- Concept map: the four nodes above with their edges into 11.2, 11.6 and
  12.4.

## Colour

The page binds flow-rate, velocity, viscosity and density: the dye threads
are the stream and wear the flow-rate hue with the $\kQ$ slider, the two
speed arrows and their labels wear the velocity hue, the $\keta$ slider and
the readout's $\keta$ wear the viscosity hue, and the readout states
$\krho = 1025$ kg/m³ in the density hue. The vessel wall, the plaque, the
radii, the Reynolds number, its graph and its bands are ink.

## Wanted at chapter level

- variables `N_R` → 12.5-reynolds-number
- variables `ρ_dens` → 12.5-reynolds-number
- variables `v` → 12.5-reynolds-number
- variables `r` → 12.5-reynolds-number
- variables `η_visc` → 12.5-reynolds-number
- equations `eq-reynolds-tube` → 12.5-reynolds-number

Applied in the chapter pass (2026-09-14): every anchor above is written on its
row; the link on Example 12.8 is plain text.

House-style pass (2026-09-28, Claude Opus 5.5). `sim-turbulence`: dashed circles on $r_2$ and on $\kQ$ where the narrowed part reaches $N_{\text{R}} = 2000$ and $3000$, the two thresholds the text names, each solved from the other two sliders; landing on one puts the narrow part exactly on a boundary. Motion unchanged.

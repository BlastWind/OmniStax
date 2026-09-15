# Plan: 17.4 Doppler Effect and Sonic Booms (m42712)

Source: `source.md` (converted from CNXML). Status: built 2026-09-14 without
a review stop, under the chapter's `config.md` and the wave-5 brief; the plan
is left for review after the build.

The section that turns the wave relation of 17.2 into the Doppler shift and
carries it past the speed of sound. Five sketch figures (17.13 to 17.17), two
photographs (17.18, 17.19), one boxed note (The Doppler Effect), one worked
example (Example 17.4, the train horn, which is where the both-moving
equation appears), two Check Your Understanding boxes, two AP items (one with
an unnumbered graph), three conceptual questions and eight problems, four of
them keyed. The book prints one header of its own, "Sonic Booms to Bow
Wakes", kept as it stands. One page (rule 11).

## Sub-concepts (page headers)

1. `doppler-effect` **The Doppler effect** (book: the motorcycle, the
   definition of the Doppler effect and the Doppler shift, Christian Doppler
   and his musicians). Introduces `doppler-effect`; uses `frequency`.
   Check Your Understanding 1 (why Doppler observed both on and off the
   train) is inline after it.
2. `wavefronts` **What causes the Doppler shift** (book: the paragraph that
   compares stationary and moving sources and moving observers, Figures
   17.13, 17.14 and 17.15 folded into one moving figure, the paragraph on
   $\kvw = \kf\klam$ and the boxed note The Doppler Effect). Reinforces
   `doppler-effect`; uses `speed-of-sound-frequency-wavelength` and
   `relative-velocity`.
3. `doppler-shift` **The Doppler shift for a moving source and for a
   moving observer** (book: the two equations and the sign rules; the Sim
   that graphs the observed frequency against speed sits after them).
   Introduces `doppler-shift-moving-source` and
   `doppler-shift-moving-observer`. The variables $\kfobs$, $\kfsrc$,
   $\kvs$, $\kvobs$ and $\kvw$ and the two equations anchor here.
4. `ex-train-horn` **Example 17.4 · Calculate Doppler Shift: A Train Horn**
   (book: the example whole; part (b) is where the product of the two
   shifts is written). Introduces `doppler-shift-source-and-observer`; uses
   the two single shifts. The equation `eq-doppler-source-and-observer`
   anchors here.
5. `sonic-boom` **Sonic Booms to Bow Wakes** (the book's own header; book:
   the jet approaching the speed of sound, the observed frequency going to
   infinity, Figure 17.16, the definition of the sonic boom, the two booms
   of an aircraft and Figure 17.17, the ban on supersonic flight).
   Introduces `sonic-boom`; uses `doppler-shift-moving-source`. $\theta$
   anchors here.
6. `bow-wake` **Bow wakes** (book: the bow wake defined, the duck's wake in
   Figure 17.18, Cerenkov radiation and Figure 17.19; the book's unclosed
   parenthesis in this paragraph is kept as the config says). Introduces
   `bow-wake`; uses `sonic-boom`. $\kc$ anchors here.
7. `applications` **Doppler shifts at work** (book: the closing paragraph
   on ultrasound, radar, weather and the red shift). Reinforces
   `doppler-effect` and `sonic-boom`. Check Your Understanding 2 (relying
   on the shift near traffic) is inline after it, where the book prints it.

Cross-references are plain text; the book's citations of Figures 17.13 to
17.19 and Example 17.4 are on this page and the app links them. The
converter's `º` is `°` in prose and `^\circ` in math. The section summary
goes to `summary_html`; the objectives and glossary to the tables.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| doppler-effect | idea | doppler-effect | glossary (Doppler effect, Doppler shift); CYU 1, 2; AP 1; CQ 1 |
| doppler-shift-moving-source | result, eq-doppler-moving-source | doppler-shift | Example 17.4(a); AP 1, 2; problems 1, 3, 5 |
| doppler-shift-moving-observer | result, eq-doppler-moving-observer | doppler-shift | Example 17.4(b); problem 7 |
| doppler-shift-source-and-observer | result, eq-doppler-source-and-observer | ex-train-horn | Example 17.4(b); problem 7 |
| sonic-boom | idea | sonic-boom | glossary (sonic boom); CQ 2, 3 |
| bow-wake | idea | bow-wake | glossary (bow wake); CQ 2 |

## Figures

id · replaces · concepts · value add · motion · sliders · headline · graph · 3D

1. `sim-doppler` · replaces Figure 17.13 + 17.14 + 17.15 (the stationary
   source, the moving source, the moving observers; one scene drawn three
   times in the book) · doppler-effect, doppler-shift-moving-source,
   doppler-shift-moving-observer · value add: flow by animation and
   variation by slider; the reader sees each wavefront leave the point
   where it was emitted and spread at the speed of sound while the car has
   moved on, so the crests bunch ahead and stretch behind, and sees the two
   observers walk through the crests · **moves**: the car drives along the
   road at $\kvs$ emitting a wavefront every period of its 150 Hz horn, the
   wavefronts grow at $\kvw = 340$ m/s from their emission points (ink dots
   left on the road), and X and Y walk at $\kvobs$; twelve periods per loop,
   then the hold, so the last frame is the book's picture and the reader can
   scrub through it · source velocity $\kvs$ (velocity, 0 to 170 m/s,
   default 100 m/s so the bunching is visible on load; 0 is Figure 17.13)
   and observers' velocity $\kvobs$ (velocity, −80 to 80 m/s, positive to
   the right, default 0; the book's 17.15 is a negative value with the car
   stopped) · "The car moves at 100 m/s toward Y, who hears 212 Hz, and
   away from X, who hears 116 Hz, from a horn that sounds at 150 Hz." · no
   graph: the rings are the picture · 2D. The wavelength ahead and behind
   is bracketed on the road in the position hue between consecutive
   crests; the frequency each observer receives is written beside them in
   the frequency hue and a small ring pulses at their head as each crest
   arrives; the velocity arrows wear the velocity hue. Labels: X and Y under
   the observers and $\kvs$, $\kvobs$, $\lambda$ beside their arrows and
   brackets, five labels, on (rule 26.7); the wavefronts are one kind and
   are not numbered. Readout: $\kfobs = \kfsrc\left(\frac{\kvw \pm
   \kvobs}{\kvw}\right)\left(\frac{\kvw}{\kvw \mp \kvs}\right)$ for Y with
   the numbers, and a small line for X. Draws frequency, velocity, position.
2. `sim-shift` · Sim (replaces nothing) · doppler-shift-moving-source,
   doppler-shift-moving-observer · value add: intuition and variation; the
   graph shows what no single number can, that the shift for a moving
   source is not the shift for a moving observer at the same speed, that
   toward and away are not symmetric, and that the source's curve climbs
   without bound as $\kvs$ nears $\kvw$, which is the doorway to the sonic
   boom · **still**: nothing in it has a clock; it redraws on input ·
   speed of the moving one $\kv$ (velocity, 0 to 330 m/s, default 35.0
   m/s) and source frequency $\kfsrc$ (frequency, 50 to 200 Hz, default
   150 Hz), the speed of sound fixed at 340 m/s as in Example 17.4 · "At
   35.0 m/s a 150 Hz horn is heard at 167 Hz coming and 136 Hz going when
   the source moves, and at 165 Hz and 135 Hz when the observer does." ·
   graph alone: $\kfobs$ against speed, 0 to 340 m/s by 0 to 600 Hz, fixed;
   four curves, moving source solid and moving observer dashed, toward
   above and away below, the current speed dropped and the four values
   marked through `pinned()` · 2D. Labels: the four curves named once in a
   legend. Readout: the moving-source equation with the numbers, small line
   for the moving observer. Draws frequency, velocity.
3. `sim-sonic-boom` · replaces Figure 17.16 (the cone) · sonic-boom,
   doppler-shift-moving-source · value add: flow by animation and variation
   by slider; the reader drags the source from below the speed of sound,
   where the crests nest as in 17.14, through $\kvs = \kvw$, where every
   crest is tangent at the front and the text says the frequency is
   infinite, to beyond it, where the source outruns its sound and the
   crests pile up along two lines · **moves**: the source moves along its
   line emitting a wavefront each period, six periods per loop, the
   wavefronts growing from their emission points; the last frame is the
   book's figure · source speed $\kvs$ (velocity, 200 to 1000 m/s, a soft
   detent at 340 m/s, default 800 m/s, which is the ratio the book drew)
   with $\kvw = 340$ m/s fixed · "At 800 m/s the source outruns its own
   sound, 2.35 times faster than the wavefronts, and they pile up along two
   lines 50° apart." · none · 2D. The two tangent lines and the angle
   $\theta$ are drawn in ink when $\kvs > \kvw$, the velocity arrow in the
   velocity hue; the emission points are ink dots. Readout: $\kvs = 2.35\,
   \kvw$ and $\theta$, small line on why the half-angle satisfies
   $\sin(\theta/2) = \kvw/\kvs$, which is read straight off the drawing.
   Draws velocity.
4. `sim-two-booms` · replaces Figure 17.17 (two booms observed on the
   ground) · sonic-boom · value add: flow by animation; the text's point is
   an order in time, the aircraft has passed before its shock wave reaches
   the ground, and the still cannot show the cones sweeping over one
   observer after another · **moves**: the aircraft flies across the frame
   at $\kvs$ trailing a nose cone and a tail cone; each observer on the
   ground is passed by the aircraft first and by the two shock fronts
   later, a burst marking each boom at the head; one crossing per loop ·
   aircraft speed $\kvs$ (velocity, 400 to 1000 m/s, default 600 m/s) and
   altitude $h$ (ink, 500 to 2000 m, default 1000 m) · "The aircraft has
   passed 2.1 km beyond the middle observer, 3.5 s ago, when its first boom
   reaches him." · none · 2D. The aircraft is drawn far larger than its
   scale so that the two cones can be seen apart; the readout states the
   true separation of the two booms, the aircraft's length over its speed.
   Labels: the three observers by what they are hearing. Draws velocity.
5. `fig-duck` · Figure 17.18 · photograph, **keep**: the text points at it
   ("such as the one in Figure 17.18") and it is the bow wake itself.
   Width 200.
6. `fig-cerenkov` · Figure 17.19 · photograph, **keep**: the text points at
   it ("as illustrated in Figure 17.19"). Width 200.

The unnumbered graph of perceived frequency against time inside the second
AP item travels on that card's `figure` field, as the chapter config says,
and is not redrawn.

No extra simulations proposed beyond `sim-shift`: a Doppler radar or red
shift scene would draw ideas the book only names here.

## Exercises

- `cyu1` (fs-id1864432), check-understanding, Understand, inline after
  `doppler-effect`, open with the book's answer; tags doppler-effect.
- `cyu2` (fs-id2687479), check-understanding, Apply, inline after
  `applications`, open with the book's answer; tags doppler-effect.
- `ap1` (fs-id3078306), ap-test-prep, Analyze, keyed (c), a choice; tags
  doppler-effect and doppler-shift-moving-source.
- `ap2` (fs-id1937370), ap-test-prep, Analyze, unkeyed, open with an
  AI-marked suggested approach and the book's graph on the card; tags
  doppler-shift-moving-source at full value and doppler-effect at weight 2.
- `cq1` (fs-id1562301) Understand, `cq2` (fs-id3415376) Analyze, `cq3`
  (fs-id1272247) Understand: open with AI-marked suggested approaches;
  cq1 tags doppler-effect; cq2 tags sonic-boom, bow-wake at weight 2 and
  17.2's speed-of-sound-temperature at weight 2; cq3 tags sonic-boom.
- Problems keyed: `p1` (fs-id3285716, the ambulance, multi 878 and 735
  Hz), `p3` (fs-id1421237, the hawk, number 3.79 × 10³ Hz), `p5`
  (fs-id3004322, the commuter train, multi 12.9 m/s and 193 Hz), `p7`
  (fs-id2023850, the two eagles, multi 4.23 × 10³ and 3.56 × 10³ Hz). p1,
  p3 Apply and p5 Analyze tag doppler-shift-moving-source; p7 Analyze tags
  doppler-shift-source-and-observer at full value with the two single
  shifts at weight 2.
- Left out, no answer in the key: problems 2 (fs-id2588526), 4
  (fs-id1825009), 6 (fs-id2679736) and 8 (fs-id3294327).
- No generated questions: every node has a book exercise.

## Views

- Formulas: the three equations of the section in `chapter.json`, all
  important.
- Definitions: the seven variables of the section; the four glossary
  terms.
- Concept map: the six nodes with their edges into 3.5, 16.2 and 17.2.

## Colour

The page binds frequency, velocity and position: every figure carries a
velocity on a slider and draws it as an arrow, `sim-doppler` and
`sim-shift` write the observed frequency in the frequency hue and carry
$\kfsrc$ on a slider, and `sim-doppler` brackets the wavelength ahead and
behind the car in the position hue. The cone angle $\theta$, the altitude,
the aircraft's length, the counts of periods and the medium stay in ink.

## Wanted at chapter level

- variables `f_obs` → 17.4-doppler-shift
- variables `f_src` → 17.4-doppler-shift
- variables `v_s` → 17.4-doppler-shift
- variables `v_obs` → 17.4-doppler-shift
- variables `v_w` → 17.4-doppler-shift
- variables `θ` → 17.4-sonic-boom
- variables `c` → 17.4-bow-wake
- equations `eq-doppler-moving-source` → 17.4-doppler-shift
- equations `eq-doppler-moving-observer` → 17.4-doppler-shift
- equations `eq-doppler-source-and-observer` → 17.4-ex-train-horn


## Applied by the chapter pass (2026-09-14)

The seven variable rows and the three equation rows carry the anchors this
plan names. The folded caption of `sim-doppler` was rewritten to the form
the chapter's other three folds use, "(Figure 17.13) … (Figure 17.14) …
(Figure 17.15) …", so that all four folds read alike; the words of each of
the book's three captions are unchanged. The unclosed parenthesis in the
bow-wake paragraph is kept as printed.

## Figure pass (2026-09-15, Claude Fable 5.1)

`sim-doppler`: X and Y are filled silhouettes 143 units tall, walking with a
stride when $\kvobs \neq 0$ and standing to face the car when it is zero.
`sim-two-booms`: the three observers are silhouettes. `sim-shift`: the four
frequency values step out to the right of the drop line when the speed is
small, where the axis left them no room on the left, the axis band is blocked
to the labeller, and the speed label clears the axis title. `sim-sonic-boom`
is unchanged.

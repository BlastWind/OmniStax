# Plan: 16.7 Damped Harmonic Motion (m42246)

Source: `source.md` (converted from CNXML). Book pages 733 to 735.
Status: written and built 2026-09-14 in the wave that finishes Chapter 16;
left for review, as the chapter's `config.md` records for 16.7 to 16.11.

A short section with one stated result, three definitions, one long
worked example, two Check Your Understanding boxes, three AP items,
three conceptual questions and one problem. One photograph, two graphs
and one drawing to place.

## Sub-concepts (page headers)

The book prints no header of its own here. Proposed page structure:

1. **Damping removes energy from an oscillation** (span `damping`): the
   opening paragraph on the guitar string, the swing and the shock
   absorber; the lightly damped trace of Figure 16.20; the result
   $W_\text{nc} = \Delta(\text{KE} + \text{PE})$ and why it is negative.
2. **Critical damping, underdamping and overdamping** (span `regimes`):
   the paragraph that names the three regimes against curves A and B of
   Figure 16.21, and the paragraph on the bathroom scale and on damping
   forces that depend on velocity.
3. **Damping by friction** (span `friction-example`): Example 16.7, the
   0.200-kg object on the 50.0 N/m spring with $\mu_\text{k} = 0.0800$,
   with Figure 16.22 inside it.

Check Your Understanding 1 (why undamped oscillators are rare) sits
inline after block 1; Check Your Understanding 2 (the difference between
the three regimes) inline after block 2. Both hosts are written into
`text.html` as `div.exercises` with the matching `data-place`.

The book's own slips are kept verbatim and named in `notes`: the glossary
writes "over damping" and "under damping" as two words against
"overdamped" and "underdamped" in the text, and the sentence "we may want
the system to return to equilibrium as quickly as possible {term:Critical
damping} is defined as…" runs two sentences together.

## Concept nodes

Staged by the prep pass; this page introduces all six and writes the
spans they are introduced in.

| id | kind | introduced in | evidence |
|---|---|---|---|
| damped-harmonic-motion | idea | `damping` | glossary and opening paragraph; CYU 1; conceptual questions 1 and 3 |
| nonconservative-work-damping | result, eq-wnc-damping | `damping` | the stated equation; AP item 1; AP item 2 |
| critical-damping | idea | `regimes` | glossary; CYU 2; conceptual question 2 |
| underdamping | idea | `regimes` | glossary; CYU 2; conceptual question 2 |
| overdamping | idea | `regimes` | glossary; CYU 2; conceptual question 2 |
| friction-damped-oscillator | skill, eq-friction-distance | `friction-example` | Example 16.7; AP item 3 |

## Figures

id · replaces · concepts · value add · motion · sliders and choices ·
headline · graph · depth

1. `sim-damped-amplitude` · Figure 16.20 · damped-harmonic-motion,
   nonconservative-work-damping · variation by slider and flow by
   animation: the book prints one decaying trace, and the reader has to
   imagine both the motion behind it and what a different amount of
   damping would look like (rule 24.3) · **moving**, because the idea has
   a clock in it: the amplitude falls as time passes, and the figure is
   about how fast. Finite, six seconds and then again from the start,
   which is the damped motion the chapter's `config.md` gives the
   scrubber; the block runs on its strip while the trace grows behind it · amplitude $X$ (0.02 to 0.20 m, default 0.10,
   position hue), period $T$ (0.5 to 3.0 s, default 1.0, time hue), the
   amplitude lost each cycle (0 to 30 %, default 10 %, ink, since the
   book names no damping constant) · "After 3.0 s, or 3.0 cycles, the
   amplitude is down to 0.073 m and the energy to 53 % of what it was" ·
   graph below the horizontal scene: $x$ against $t$ with the envelope
   dashed, and an energy bar beside it falling as the square of the
   amplitude · 2D, tier "moving simulation". Binds position, time and
   energy.
2. `sim-damping-regimes` · Figure 16.21 · critical-damping, underdamping,
   overdamping · variation and animation: the book draws curves A and B
   still and leaves the underdamped curve on the previous figure, so the
   reader cannot see the one thing that separates the three, which is
   which reaches equilibrium first (rule 24.3) · **moving**, finite, four seconds: the
   three systems are released together at $X$ and three markers ride
   their curves on one clock, then the figure holds so the arrival order
   can be read · a choice, not a slider, for the regime the headline
   describes (underdamped, critically damped, overdamped; rule 26.1), and
   sliders for the release displacement $X$ (0.02 to 0.20 m, default
   0.10, position hue) and the undamped period $T$ (0.5 to 3.0 s, default
   1.0, time hue) · "The critically damped system is back at equilibrium
   after 0.38 s; the overdamped one is still 0.021 m out" · the graph is
   the figure, as it is in the book · 2D, tier "moving simulation". Binds
   position and time. The three curves are told apart by the categorical
   palette with a legend, as `ch16/COLOR.md` allows where labels alone
   cannot do it, and the regime is named in words, never by a hue.
3. `sim-friction-damped` · Figure 16.22 · friction-damped-oscillator,
   nonconservative-work-damping · variation, animation and a quantity the
   still figure cannot carry: the book's figure draws the energy of an
   undamped oscillator in five panels, while the example asks how far the
   object travels before friction stops it, and only a running figure can
   count that distance out (rule 24.3, 24.4) · **moving**, finite: the
   object is released at $X$ and runs until the spring can no longer beat
   static friction, then the figure holds with the total distance
   standing · amplitude $X$ (0.02 to 0.20 m, default 0.100, position
   hue), force constant $k$ (10 to 200 N/m, default 50.0, stiffness hue),
   mass $m$ (0.05 to 1.00 kg, default 0.200, ink), coefficient of
   friction $\mu_\text{k}$ (0.02 to 0.20, default 0.0800, ink) · "The object
   has covered 0.93 m of the 1.59 m it will travel, and 0.093 m of its
   0.100 m of stored energy is gone" · graph below the horizontal scene:
   $x$ against $t$, the envelope falling in a straight line because the
   friction is constant · 2D, tier "moving simulation". Binds position,
   force, stiffness and energy.

Four sliders on figure 3 rather than three: the example's answer is
built from all four numbers, and dropping one would leave the reader
unable to reproduce the book's 1.59 m.

Photographs:

- Figure 16.19, the mother pushing a child on a swing (credit: Erik A.
  Johnson, Flickr): **drop**. It is the splash image at the head of the
  section and the text points at it only in passing, which the chapter's
  `config.md` settles as a drop.

No figure serves an exercise: the one problem is unkeyed and left out,
and none of the three AP items carries an image.

Extra simulations (rule 15): considered a needle gauge on a bathroom
scale settling without oscillating, which figure 2 already shows as the
critically damped curve; a car crossing a bump under the three regimes,
which is the same curves with a car drawn on them; and a velocity-dependent
damping force beside the constant friction one, which the section names
in one clause and does not develop. None survives.

## Exercises

- 2 Check Your Understanding, open, inline after blocks 1 and 2, with the
  book's own answers.
- 3 AP test prep items. Item 1 (the form the damping force removes energy
  in, keyed c) is a graded choice. Item 2 (the sign of the rate of change
  of mechanical energy) has no key, so under the job's standing decision
  it is kept as an open item with its options as the book prints them and
  an AI-marked suggested approach, never as a graded choice. Item 3 (the
  0.5-kg object, keyed 1.698 m) is a number, with the book's own working
  as its solution.
- 3 conceptual questions, open, each with an AI-marked suggested
  approach. Question 3, on the second law of thermodynamics, is tagged to
  15.6's `second-law-entropy-statement` beside `damped-harmonic-motion`,
  as the chapter's `config.md` records.
- 1 problem. Problem 1 (the amplitude falling 3.0 % a cycle) has no keyed
  answer and is left out, named in `notes` and in `exercise_notes`.
- No generated questions: every node this page introduces has a book
  exercise testing it.

## Views

- Formulas: `eq-wnc-damping` ($W_\text{nc} = \Delta(\text{KE}+\text{PE})$,
  important), `eq-friction-stop-position`, `eq-friction-work` and
  `eq-friction-distance` (important), all four already in
  `ch16/chapter.json` from the prep pass.
- Definitions: the eleven variables of the section and the three glossary
  terms, all staged.
- Concept map: the six nodes above, with edges into 5.1, 7.4, 7.5, 16.1,
  16.2, 16.3 and 16.5 as staged.

## Colour

The page binds `position`, `time`, `energy`, `force` and `stiffness`, which
is what `ch16/COLOR.md` expects of it. Mass, the coefficient of friction and
the amount of damping are ink, and the three regimes are told apart in words
and by the categorical palette, never by a hue of their own. No new type and
no new symbol: every symbol the page colours already has a row, `\kWnc`,
`\kKE`, `\kPEtot`, `\kff`, `\kk`, `\kX`, `\kx`, `\kd`, `\kt`, `\kT` and
`\kg` among them.

## Wanted at chapter level

Anchors, one per row, to be written by the chapter pass:

- eq-wnc-damping → 16.7-damping
- eq-friction-stop-position → 16.7-friction-example
- eq-friction-work → 16.7-friction-example
- eq-friction-distance → 16.7-friction-example

No concept fix and no symbol fix: the six concepts, the eleven variables,
the four equations and the three glossary rows the prep pass staged are
right as they stand.

Built as planned, with three notes. The three headlines go through
`topline()`, since each states four live numbers and would otherwise run
past the canvas. The damping slider of figure 1 is labelled simply
"damping" and its caption says what the percentage counts, because a
label of its own words crowds the value beside it. Figure 3 stops the
object at the first turning point inside the band where the spring can no
longer beat the friction, which is the motion itself, while the equation
of the example takes it to that position exactly; the two can differ in
the last digit, and the readout says so rather than hiding it.

**The chapter pass, 2026-09-14.** Every anchor above is written, and so is
one on each of the eleven variable rows: the work, the kinetic and the
potential energy, the amplitude and the displacement on `16.7-damping`,
and the friction, the coefficient, the mass, $g$, the force constant and
the distance on `16.7-friction-example`. No concept, symbol or glossary
row was changed.

**Figure pass, 2026-09-15 (Claude Fable 5.1).** `sim-damped-amplitude` and `sim-friction-damped` step their floor marks apart at the smallest release displacement through a shared `marks()` helper, where before the three labels sat on one another; the envelope's name in `sim-damped-amplitude` moved above the box, off the trace, and reads "with no damping the amplitude holds" at zero damping. `sim-damping-regimes` sets its "equilibrium" under the line at the right, where the three curves have all but met it, instead of on the curves at the left.

# Plan: 24.1 Maxwell's Equations: Electromagnetic Waves Predicted and Observed

Written before the page was built, under `ch24/config.md`, which replaces the
per-section stop of root rule 2 and the plan review of root rule 5 with a plan
file left for review.

## Sub-concepts and where each concept is introduced

| span | header | concepts introduced |
|---|---|---|
| `maxwell` | The four equations of electromagnetism | `maxwells-equations` |
| `symmetry` | The symmetry Maxwell added | `changing-fields-generate-each-other` |
| `prediction` | The wave Maxwell predicted, and the speed it travels at | `speed-of-light-from-constants`, `light-is-an-electromagnetic-wave` |
| `hertz` | Hertz's Observations | `hertz-observations` |

The module prints one narrative header of its own, Hertz's Observations, and it
is kept where the book sets it; the three spans before it are the agent's, and
they cut the running text only where the book itself turns (at "Maxwell's
equations encompass the major laws" and at "Since changing electric fields
create relatively weak magnetic fields"). The prediction of the speed and the
conclusion that light is a wave of that kind are one span rather than two,
because the book draws the conclusion in the same breath as the arithmetic —
the sentence that states it begins "which is the speed of light", and a heading
cannot be set in the middle of a sentence. The two boxed notes are kept verbatim as `div.note`, Maxwell's Equations
with the book's own numbered list of four and Making Connections: Unification of
Forces. The page binds `velocity`, `frequency`, `electric-field` and
`magnetic-field`, which is what `ch24/COLOR.md` gives 24.1, and `position` for
the wavelength Hertz measures, which the chapter's colour plan should add (see
`## Wanted at chapter level`).

## Figures

```
photo-maxwell · Figure 24.3 · maxwells-equations · kept: the text points the reader at it by number, "(See Figure 24.3.)" · still photograph, no simulation · no controls · the book's caption stands · no graph · 2D
sim-maxwell-four · Sim · maxwells-equations, changing-fields-generate-each-other · intuition and standardisation: the book states its one learning objective as restating the four equations and then paraphrases them in four paragraphs of words, drawing nothing at all, so the reader has no picture to restate them from; here each of the four is one field picture the reader steps through, and the source of each can be reversed or taken away entirely · still, because none of the four statements is a thing that happens over time: the third and the fourth speak of a field that is changing, but what the reader is asked to see is which way the induced field then points, which is a state of the picture and not a stage of a motion, and the wave that does have a clock in it is set moving in 24.2 · dropdown of the four equations (untyped), slider "the source" (untyped, −4 to 4, which is the charge in the first, which end of the magnet faces right in the second, how fast the magnetic field through the loop is changing in the third, and how fast the charge moves or the electric field grows in the fourth; zero is no source at all in every one of them) · headline reads which of the four is showing and what it says of the picture below it · graph none · 2D, since every one of the four is a pattern of field lines in one plane and the book's own paraphrase names no arrangement in space
sim-hertz · Figure 24.4 · hertz-observations, speed-of-light-from-constants, light-is-an-electromagnetic-wave · variation by slider and intuition: the book's drawing is one fixed apparatus, whereas the whole of Hertz's argument is that the circuit's resonant frequency and the measured wavelength multiply to the speed of light, so the reader sets the inductance and the capacitance, watches the resonant frequency and with it the length of the wave crossing the laboratory change together, and reads the product off the readout · still, because the idea of the figure is a measurement taken of a wave rather than the travelling of it: Hertz's wavelength came from an interference pattern that stands still and his frequency from the circuit, and the product of the two is an arithmetic, not a motion; the wave is set running in 24.2, where its production is the lesson · sliders L and C (both untyped, since the book writes the resonance condition with L and C in plain letters and this page binds neither inductance nor capacitance), a dropdown for the receiver, tuned to the transmitter or tuned elsewhere, taken as a dropdown rather than a button row because the row wraps beside the two sliders (root rule 26.1) · headline reads the frequency the circuit resonates at, the length of the wave that leaves the loop and whether the far loop sparks · graph none · 2D
```

Figure pass, 2026-09-16 (Claude Fable 5.1). `sim-hertz`: the driving circuit
moved left and its leads taken round at x = 254, so the spark at the
transmitter's gap no longer runs through the wires that feed it, and the
flashes about both sparks shortened; the two loop names moved above the loops,
where the transmitter's no longer crossed the wavelength's drop line; the two
notes under the wave and the circuit's name raised from muted 17 to 18 and 19
so they are not faint. `sim-maxwell-four`: the arrowhead inside the magnet moved
to the pole face, clear of the N and S. Nothing else changed; every slider,
default and id stands.


Root rule 26.7 on `sim-hertz`: the figure carries more than six entity labels,
and they stay on. A schematic whose parts are not named cannot be read at all,
every one of those labels sits on a fixed lattice that no slider moves — the
four parts of the circuit, the two loops, the tuner — and the only label the
sliders carry is the wavelength bracket's, which `hbracket` clamps inside the
canvas. They do not collide at either slider extreme.

Every photograph and unnumbered image of the module: the module draws two
images and no more. Figure 24.3, the engraving of Maxwell, is kept as a
photograph because the text points at it by number. Figure 24.4, the apparatus,
is a drawing and is replaced by `sim-hertz`, which carries it as its original.
The module sets no image inside an exercise.

## Extra simulations offered, one built

- Built: `sim-maxwell-four`, above. It opens a view the module does not give at
  all, since the module draws no field of any kind, and it answers the section's
  one learning objective.
- Left: a figure that enters the two measured constants into
  $c = 1/\sqrt{\mu_0\varepsilon_0}$ and watches the speed come out. Both of the
  section's problems ask for exactly that arithmetic, and a figure that does it
  for the reader would answer the only two questions the book sets here; the
  numbers are in the readout of `sim-hertz` instead, where they are what the
  wave is measured against.
- Left: a ripple spreading from a jumping fish, the book's own simile for the
  field propagating from its source. It is a picture of the sentence rather than
  of the physics, and 24.2 draws the wave leaving the antenna properly.

## Exercises

| kind | count | placement |
|---|---|---|
| `problem` | 0 of 2 | none set |

The module sets two problems, no conceptual question, no AP item and no Check
Your Understanding box. Neither problem is keyed — the first asks the reader to
verify the value of $c$ from the two constants and the second to verify that the
units of the right-hand side are m/s — so under `ch24/config.md` both are left
out and named in `notes` and in `exercise_notes`. Every one of the section's
five concepts is therefore untested by the book on this page, and no question is
generated in its place (root rule 13); the concepts are reached again by the
problems of 24.2 and 24.3, which rest on them.

## Tables

The module prints no table. The one learning objective, the section summary and
the eight glossary entries go to the tables, as root rule 4 asks.

## Wanted at chapter level

- eq-speed-of-light-constants → 24.1-prediction
- eq-rlc-resonant-frequency → 24.1-hertz
- c → 24.1-prediction
- μ_0 → 24.1-prediction
- ε_0 → 24.1-prediction
- f_0 → 24.1-hertz
- `ch24/COLOR.md`: the row "Which section binds what" gives 24.1 `velocity`,
  `frequency`, `electric-field` and `magnetic-field`; it should also give it
  `position`, since the section ends on Hertz determining a wavelength from an
  interference pattern and `sim-hertz` draws that wavelength as a bracket across
  the laboratory. The colour is the one the chapter's own table already assigns
  to a wavelength, so nothing new is invented.

No concept and no symbol needs fixing: the five concepts of 24.1 and every
symbol the page colours ($c$, $f_0$, $\lambda$, $E$, $B$) are in `book.json` as
the prep pass left them.

### What the chapter pass did (2026-09-15)

Every line above is applied. `eq-speed-of-light-constants`, `c`, `μ_0` and
`ε_0` are anchored to `24.1-prediction`, and `eq-rlc-resonant-frequency` and
`f_0` to `24.1-hertz`. `ch24/COLOR.md` now gives 24.1 `position` beside
`velocity`, `frequency`, `electric-field` and `magnetic-field`, since
`sim-hertz` draws the wavelength as a bracket across the laboratory. No concept
and no symbol row needed changing, as the plan said. The section's two concepts
that reach back to Chapter 23 gained their edges at chapter level:
`maxwells-equations` now takes Faraday's law and Lenz's law, and
`hertz-observations` takes the resonant frequency of an RLC circuit.

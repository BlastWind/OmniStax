# Plan: 30.1 Discovery of the Atom (m42589)

Written before the page was built (root rule 5), under `ch30/config.md`, which
replaces the per-section stop with a plan left for review.

A short, qualitative section: a history of the evidence for atoms, one drawing
(Figure 30.2, Brownian motion), one photograph (Figure 30.3, gold atoms), one
Patterns and Systematics box, three conceptual questions and three problems.
No worked example, no equation, no Check Your Understanding box, no AP item, no
PhET link.

## Sub-concepts

The book prints no header inside the module, so the five headers are OmniStax's,
cut where the account turns from one kind of evidence to the next. The opening
question is the section's own introduction and stays at the top of the first
block (rule 21.3).

| Span | Header | What it holds |
|---|---|---|
| `atoms-as-an-idea` | Atoms as an idea | The opening question, Leucippus and Democritus, the term atom, the four elements |
| `evidence-from-chemistry` | Indirect evidence from chemistry and kinetic theory | Alchemy to chemistry, Dalton's mass ratios, Avogadro's number, the Patterns and Systematics box, Mendeleev's table, kinetic theory |
| `brownian-motion` | Brownian motion | Brown's pollen grains, the term Brownian motion, Figure 30.2 |
| `size-of-atoms` | Measuring the size of atoms | Einstein's theory, the $10^{-10}$ m estimate, Perrin's measurements and Avogadro's number |
| `evidence-today` | Evidence for atoms today | Mass spectrometers, the scanning tunneling microscope, Figure 30.3, the substructure ahead |

## Concepts

All three are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `atom` | `atoms-as-an-idea` | reinforced in `evidence-from-chemistry`, `evidence-today` |
| `brownian-motion` | `brownian-motion` | used in `size-of-atoms` |
| `size-of-atoms` | `size-of-atoms` | — |

Earlier concepts used: `avogadros-number` (13.3) in `evidence-from-chemistry` and
`size-of-atoms`; `kinetic-theory` (13.4) in `evidence-from-chemistry` and
`brownian-motion`; `mass-spectrometry` (22.11) in `evidence-today`.

## Types the page binds

None in a figure: the only sim draws counts, which are untyped, and the page has
no variables row. The prose colours what it names: mass, density, volume, the
latent heat of vaporization and surface tension by their concepts, and the sizes
of atoms and molecules as `position` values (`data-type`). The water molecules are
drawn in the element palette, `F.el('O')` and `F.el('H')` (convention); the pollen
grain is drawn in its own yellow, `#E0A43A` through `F.fact` (a material's own
colour, rule 7.1), as the book draws it.

## Figures

```
sim-brownian-motion · Figure 30.2 · brownian-motion, size-of-atoms · value add: flow by animation (water molecules strike the grain from every side, the grain wanders, and its position is marked at equal intervals, so the zigzag of the book is built up in time from the hits that cause it, with the true path between marks drawn faintly) and variation by slider (the same water divided into more, smaller molecules: the hits on the two sides even out and the wandering shrinks, which is the book's "the smaller and more numerous they are, the smaller the fluctuations") · arrows: kinematic (the arrowheads along the grain's measured path give the direction it moved) · moving: molecules, grain and the growing path on a 6-s loop holding 1.2 s, physical time, linear; a molecular simulation with elastic hits on the grain, deterministic from its seed so the scrubber replays it exactly · slider: molecules in view (untyped count, 150 to 1200, 300 by default; the total mass and thermal energy of the water held fixed, so each molecule's mass and energy fall as their number rises, and the area they cover stays a quarter of the view) · headline: "300 molecules strike the pollen grain, a few more on one side than the other, and push it first this way, then that." · no graph: beside the field of view a tally of the hits from the left and from the right in the last interval; readout (N_left − N_right)/(N_left + N_right) with the live counts, the share by which one side outnumbers the other · 2D, a microscope's field of view is a flat picture (rule 28.1)
photo-gold-atoms · Figure 30.3 · kept photograph: the text points at it ("See Figure 30.3") and it is the direct image of individual atoms the passage describes · still · 2D
```

Labels on sim-brownian-motion: nothing is lettered on the grain or the molecules,
which move (rule 26.7). A legend beside the field of view names the water
molecule, the pollen grain, the marked positions and the path between marks; the
tally names its two bars. Hover names: the grain, its first marked position, each
mark, each molecule.

Book numbers: there is no number in the passage to make a default; the book's
picture (a grain wandering among molecules, its positions joined by straight
segments with arrows) is the figure's state on load.

Widths: Figure 30.2 is printed at 200 and Figure 30.3 at 200.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_31_01_01a.jpg` (30.2) | original of `sim-brownian-motion` | replaced |
| `Figure_31_01_02a.jpg` (30.3) | kept, photo row | the text points at it |

## Extra simulations considered

- A drop of oil spread to a one-molecule film to estimate a molecular size. Left: the
  book does not describe it, and the size of atoms here comes from Brownian motion.
- Kinetic theory's molecules in a box. Left: Chapter 13 draws it, and the passage only
  names kinetic theory as indirect evidence.

## Exercises

| Kind | In the book | Set here | Left out or moved |
|---|---|---|---|
| Conceptual question | 3 | 3 (AI suggested approaches) | — |
| Problem | 3 | 0 | `fs-id2398973` and `fs-id1577658` (keyed) moved to 30.2; `fs-id2409422` unkeyed, left out |

The two keyed problems need the charge-to-mass ratios and the size of the nucleus
that 30.2 introduces, so they are set there (rule 12) and both sections'
`exercise_notes` say so.

## Tables

None.

## Wanted at chapter level

- No anchors: the section has no variables row and no equation.
- Edge `brownian-motion` ← `kinetic-theory` is redundant (reached through `atom` ← `kinetic-theory`); drop it for the Hasse reduction.
- `ch30/COLOR.md`: 30.1 binds no type; its sim draws the element colours of O and H and the pollen grain's own colour as a fact.
- No concept or symbol row needs changing.

Applied by the chapter pass (2026-10-05): the edge `brownian-motion` ← `kinetic-theory` is dropped; `COLOR.md` records the element and fact colours.

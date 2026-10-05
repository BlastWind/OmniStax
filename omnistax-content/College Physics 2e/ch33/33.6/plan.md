# Plan: 33.6 GUTs: The Unification of Forces

Written before the page was built (root rule 5), under `ch33/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints no headers, so all seven are OmniStax's, set at the stops of its
argument.

| Span | Header | What it holds |
|---|---|---|
| `unification` | Unifying the forces | The opening paragraph, the Grand Unified Theory named |
| `electroweak-theory` | Electroweak theory | The $Z^{0}$ paragraph, Figure 33.21, the weak force in atomic spectra |
| `gluons-and-color` | Gluons and color | The gluon paragraph and Figure 33.22 |
| `quarks-in-pion-exchange` | Pion exchange among quarks | The quark and gluon details of pion exchange, Figure 33.23 |
| `standard-model` | The Standard Model | QCD and electroweak theory together; the Making Connections note |
| `forces-converge` | Strengths that converge | "How can forces be unified?", Figure 33.24, the GUT and TOE energies, superstrings |
| `proton-decay` | Proton decay | The proposed decay, its lifetime, the detector (Figure 33.25), the turn to cosmology |

## Concepts

All six are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `grand-unified-theories` | `unification` | reinforced in `forces-converge` |
| `electroweak-unification` | `electroweak-theory` | reinforced in `forces-converge`, used in `standard-model` |
| `gluons-and-qcd` | `gluons-and-color` | reinforced in `quarks-in-pion-exchange` |
| `standard-model` | `standard-model` | — |
| `higgs-boson` | `forces-converge` | — |
| `proton-decay` | `proton-decay` | — |

Earlier concepts used: `four-basic-forces` (4.8), `properties-of-the-four-forces` and
`virtual-particle-exchange` in `unification`; `feynman-diagrams`, `carrier-mass-sets-range`
in `electroweak-theory`; `gluon`, `quark-color`, `quark-confinement` in `gluons-and-color`;
`pion`, `quark-composition-of-hadrons` in `quarks-in-pion-exchange`; `quantum-chromodynamics`
in `standard-model`; `range-and-carrier-mass` in `forces-converge`; `baryon-number-conservation`,
`lepton-family-numbers` in `proton-decay`. The Higgs boson and the Standard Model have
book exercises only among the conceptual questions.

## Types the page binds

`energy` (the energy put into a system, $\kdE$, the x axis of Figure 33.24), `position`
(the distance it probes, $\kd$, that figure's second axis, the x axis of the Feynman
diagrams), `time` (their t axis), `velocity` ($\kc$ in the readout). Words: energy,
distance and range, time, mass (the carriers' and the Higgs boson's masses) and momentum
(the quarks' momenta) where the text names a particular one. Relative strength, $h$ and
counts are ink.

Referents (`ch33/COLOR.md`): the red down quark (`down-quark`) and the green strange quark
(`strange-quark`) of Figure 33.22(b), whose bodies wear their color charge as the fact
and whose outlines and labels wear the referent hue; the four forces of Figure 33.24
(`strong-force`, `em-force`, `weak-force`, `gravity`), one curve each. Conventions:
`F.el('e-')`, `F.el('nu')` (33.21), `F.el('p+')`, `F.el('n0')` (33.23). The $Z^{0}$ and the
quark flavors u and d of 33.23 are `F.cat`. Facts: the color charges as six named
constants, red `#e62828`, green `#28be3c`, blue `#2850e6`, and the anticolors cyan
`#50ffff` (antired), magenta `#ff78ff` (antigreen), yellow `#ffe664` (antiblue), with
white `#ffffff` for the two colorless gluons, used for nothing else.

## Figures

```
fig-z-exchange · Figure 33.21 · electroweak-unification, feynman-diagrams · value add: standardisation only, so a faithful copy (the book's diagram in the house style, the electron and neutrino in their convention colours; one exchange with nothing to vary and no clock beyond the diagram's own axis) · arrows: symbolic (the time arrows along the lines, the axes) · still: a Feynman diagram is already a history drawn whole · no controls · no headline (the caption says it) · no readout · graph: the diagram is the figure, t up and x across · 2D
sim-gluon-exchange · Figure 33.22 · gluons-and-qcd, gluon, quark-color · value add: variation by choice (the eight gluons of (a) in a row, the one exchanged in (b) picked from them: each of the six colored gluons, exchanged between a quark of its color and a quark of its anticolor's color, swaps the two quarks' colors, while a white gluon leaves both as they were; the readout balances the color at both vertices, so the reader sees the rule behind the book's one example) and standardisation · arrows: symbolic (time arrows along the quark lines) · still: the choice redraws, with the quark colors crossfading; no clock · choice: gluon (RḠ, GR̄, BR̄, RB̄, GB̄, BḠ, white), discrete, RḠ by default as the book · headline per gluon, e.g. "The $R\bar{G}$ gluon leaves the down quark green and turns the strange quark red." · readout: $R \to G + R\bar{G}$ at the down quark and $R\bar{G} + G \to R$ at the strange quark, one line · graph: (a) left, the diagram (b) right, t up and x across · 2D · facts: the six color-charge constants and white, named above
sim-quark-pion-exchange · Figure 33.23 · gluons-and-qcd, quark-composition-of-hadrons, pion · value add: flow by animation (the book's dense diagram told in the order the text tells it: the quarks of the proton and neutron move along exchanging gluons, a gluon creates a $d\bar{d}$ pair, the $d$ stays and the proton is a neutron, $u$ and $\bar{d}$ cross as the $\pi^{+}$, the $\bar{d}$ annihilates a $d$ and the neutron is a proton; each hadron's quark content changes at the moment it happens, in the readout and in the hadron's colour) · arrows: symbolic (time arrows on the quark lines), but the text narrates a sequence, which is why the figure moves · moving as a story slider, not a clock (stops: approach, pair created, π⁺ crosses, annihilation, proton): the steps are a sequence of meaning to step through and scrub; the diagram is traced up to the present line, everything a function of the story's value · no other control · headline per stop, from the text, e.g. "As the $u$ quark leaves the proton, a gluon creates a $d$ quark and a $\bar{d}$ antiquark." · readout: the quark content at the stop, morphing by meaning: $p\,(uud) + n\,(udd)$, $g \to d + \bar{d}$, $p\,(uud) \to n\,(udd) + \pi^{+}\,(u\bar{d})$, $\pi^{+}\,(u\bar{d}) + n\,(udd) \to p\,(uud)$, $p + n \to n + p$ · graph: the diagram is the figure, t up and x across · 2D
sim-force-strengths · Figure 33.24 · grand-unified-theories, electroweak-unification, range-and-carrier-mass · value add: variation by slider (the energy put into a system runs along a log axis from a few eV to beyond the TOE, a line across the four strength curves showing which forces are still distinct there, with a second axis above reading the distance that energy probes, $\kd \approx h\kc/4\pi\kdE$, as 33.1 found the range; the band that accelerators reach is shaded, so the reader sees how far beyond it the GUT and TOE lie) · arrows: none · still: an energy is a setting, not a process (rule 14) · slider: $\log_{10}(\kdE/\text{GeV})$ (energy, −9 to 20, 2 by default, the book's 100 GeV), dashed circles at 2 (EW), 15 (GUT) and 19 (TOE), which the text names · headline per regime, e.g. "At $\kdE = 1.0\times10^{2}$ GeV the electromagnetic and weak forces have become one, the electroweak force." · readout: $\kd \approx h\kc/4\pi\kdE$ with the numbers (100 GeV gives $9.88\times10^{-19}$ m, the book's "approximately $10^{-18}$ m"); note, past the band, how many times the accelerators' reach the energy is · graph: the graph is the figure, x from $10^{-10}$ to $10^{20}$ GeV fixed with headroom for the slider, the distance axis above from $10^{-10}$ to $10^{-35}$ m; strength unscaled as the book draws it · 2D
```

Model of `sim-force-strengths`, stated in the code: the book's graph has no scale on its
strength axis, so the curves are its shapes, smooth and joining tangentially at 100 GeV,
$10^{15}$ GeV and $10^{19}$ GeV; past each join the merged curve is drawn in interleaved
dashes of the forces it unites, so "identical" is seen. $h = 6.63\times10^{-34}$ J·s,
$\kc = 3.00\times10^{8}$ m/s, 1 GeV $= 1.602\times10^{-10}$ J; accelerators reach about
$10^{4}$ GeV, the SSC's energy, which the text puts $10^{10}$ below the $10^{14}$ GeV of
GUTs.

Model of `sim-quark-pion-exchange`: x and t in the diagram's own units; the two hadrons
approach and recede along mirrored parabolas; the pair is created at t = 0.40 at the
proton's third quark line, the $\pi^{+}$ crosses to the neutron and the $\bar{d}$
annihilates the neutron's first $d$ at t = 0.52. Gluons inside each hadron are drawn as
short wiggles between neighbouring quark lines.

Labels. `fig-z-exchange`: the four line ends ($e^{-}$, $\nu_{e}$) and $Z^{0}$, five.
`sim-gluon-exchange`: the four quark ends ("red d", "green s" and their colors after) and
the gluon, five; (a)'s rows carry "color" and "anticolor" and the letters as the book; hover
names every gluon. `sim-quark-pion-exchange`: "proton" and "neutron" at the line starts and,
once reached, at the line ends, and "π⁺" on its finished track, five; the moving quark
dots carry none and are named by hover and a legend (u, d, d̄, gluon). `sim-force-strengths`:
the four force names at the left ends, "Electroweak" on the merged curve, EW, GUT and TOE at
the joins (each one label), the band's name; the probe's crossings are named by hover.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_34_06_01.jpg` (33.21) | original of `fig-z-exchange` | sketch redrawn, width 250 |
| `Figure_34_06_02.jpg` (33.22) | original of `sim-gluon-exchange` | sketch replaced, width 450 |
| `Figure_34_06_03.jpg` (33.23) | original of `sim-quark-pion-exchange` | sketch replaced, width 270 |
| `Figure_34_06_04.jpg` (33.24) | original of `sim-force-strengths` | graph replaced, width 350 |
| `Figure_34_06_05.jpg` (33.25) | kept, `photo-detector` | the text points at it; width 400; its caption (a Tevatron Higgs search) does not describe the image (a proton-decay detector), carried as printed and named in `notes` |
| `Figure_34_06_06-3872.jpg` | on `p1`'s card | the problem says "as seen in the figure given below" |

## Extra simulations considered

- The weak force's carriers losing their mass at high energy. Left: the text says only
  that it would happen; nothing to vary.
- A proton-decay tank counting decays against lifetime. Left: Problem `p4` asks exactly
  this, and a figure would answer it.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Conceptual | 3 (+2 moved from 33.5) | 5, open with AI-marked approaches: `fs-id1169737846704`, `fs-id1169738007754`, `fs-id1169737933127`, and from 33.5 `fs-id1169738156095`, `fs-id1169737762764` | — |
| Problem | 11 | 5 keyed: `fs-id1169738035555` (5×10¹⁰; 5×10⁴ /m², with the cosmic-ray image), `fs-id1169737802107` (2.5×10⁻¹⁷ m), `fs-id1169737724483` (33.9 MeV; 29.8 and 4.1 MeV), `fs-id1169737813954` (7.2×10⁵ kg; 7.2×10² m³; 100 months), `exer-23557` (3.34×10⁻²⁷ kg; 3.01×10⁻¹⁰ J twice; (d) in words) | unkeyed: `fs-id1169737781401`, `fs-id1169738164212`, `fs-id1169736815277`, `fs-id1169737806591`, and the two Construct Your Own Problem items `fs-id1169737826378`, `fs-id1169737723557` |

No Check Your Understanding box, so nothing inline. Errata carried as printed and named in
`notes`: "transform the, and $Z^{0}$" (the $W^{+}$, $W^{-}$ dropped); "the carriers of the
weak and certainly of the electromagnetic force" (the strong force is meant); Figure
33.25's caption against its image.

## Wanted at chapter level

- form `eq-proton-decay` → 33.6-proton-decay
- variables rows in 33.6 for the symbols `sim-force-strengths` writes, none of which has a 33.6 row: `ΔE` (`\kdE`, energy, the energy put into a system to probe a distance, in GeV), `d` (`\kd`, position, the distance that energy probes), `c` (`\kc`, velocity), `h_planck` (untyped)
- glossary: "superstring theory" names no concept; a definition `superstring-theory` (33.6, span `forces-converge`, prerequisite `grand-unified-theories`) carrying the term, or the term added to `grand-unified-theories`
- `ch33/COLOR.md` 33.6 row: the page binds `velocity` too ($\kc$ in the readout), beside energy, position and time

Applied by the chapter pass (2026-10-05): `eq-proton-decay` anchored at `33.6-proton-decay`; `ΔE` and `d` (both with `redefines`), `c` and `h_planck` added at `33.6-forces-converge`. Superstring theory: Chapter 34's build added `superstring-theory` (34.3, carrying the term and an edge to `grand-unified-theories`) while this pass was staging the same concept, so 33.6 reuses it: the bold term is marked `data-concept="superstring-theory"` and the coverage row at `forces-converge` says `uses`. The gluon figure's six color constants are now 33.5's, so a color wears one hue across the chapter. `ch33/COLOR.md` binds velocity for 33.6.

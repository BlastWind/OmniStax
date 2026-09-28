# Plan: 29.8 The Particle-Wave Duality Reviewed

Written before the page was built (root rule 5), under `ch29/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints one narrative header, Integrated Concepts; the opening
passage has none and takes the agent's.

| Span | Header | What it holds |
|---|---|---|
| `particles-with-and-without-mass` | Particles With and Without Mass (the agent's) | the definition of the duality, Figure 29.24, particles with mass and $\klam = h/\kp$, massless particles and $\kp = h/\klam$, Figure 29.25, the unity of nature and Blake's four lines, kept as verse |
| `integrated-concepts` | Integrated Concepts (the book's) | the paragraph on integrated problems, the list of topics, the Problem-Solving Strategy note, Example 29.10 with its Topics list kept as a plain list |

## Concepts

| Concept | Span | Verb |
|---|---|---|
| `particle-wave-duality-universal` | `particles-with-and-without-mass` | introduces |
| `classical-limit-of-duality` | `particles-with-and-without-mass` | introduces |
| `de-broglie-wavelength` | `particles-with-and-without-mass` | reinforces |
| `integrated-quantum-problem` | `integrated-concepts` | introduces |
| `photon-momentum` | `integrated-concepts` | uses |
| `photon-momentum-conservation` | `integrated-concepts` | uses |

## Types the page binds

`momentum` ($\kp$, the photon's and the grain's momentum arrows), `velocity`
($\kv$, $\kc$, the grain's recoil) and `position` ($\klam$ on the slider), as
`ch29/COLOR.md` gives 29.8. Planck's constant $h$ and the mass $m$ are ink. A
visible photon is drawn in the colour of its wavelength through the chapter's
`wavelengthColor` fit (the one physical-colour function, as in 29.4); outside
380 to 700 nm it is ink with its band named. The dust grain is ink.

## Figures

photo-duality-particles · Figure 29.24 · particle-wave-duality-universal · kept drawing: rule 24's gate fails; the figure is a juxtaposition of an electron and a photon each carrying a wave, and the variation it could carry (the wavelength as the momentum changes, an electron beside a photon of equal momentum) is already live in 29.4's `sim-photon-electron` and 29.6's `sim-de-broglie` · still · none · — · none · 2D
photo-duality-classical · Figure 29.25 · classical-limit-of-duality · kept drawing: rule 24's gate fails; a rock beside an EM wave is an analogy, the wavelength of a massive body against its size is 29.6's `sim-de-broglie`, and the EM wave in 3D is Chapter 24's scene · still · none · — · none · 2D
sim-dust-recoil · Sim · integrated-quantum-problem, photon-momentum, photon-momentum-conservation · value add: variation by slider and choice; the example's two steps are one conservation law, drawn as the photon's momentum arrow passing whole to the grain when the reader switches from before to after absorption, with the recoil speed read live for any visible wavelength and any grain mass (tier: still simulation, two sliders, one choice) · still: the idea is a before and an after, a discrete pair of states, so the switch is a choice whose change morphs the photon into the grain's arrow over 0.9 s; no clock, no transport · sliders: $\klam$ (`position`), 380 to 700 nm, default 550 nm; $m$ (untyped), 0.10 to 10.00 μg, default 1.00 μg; choice: before or after absorption, `'before'` and `'after'` · headline: "A 550-nm photon carries 1.21 × 10⁻²⁷ kg·m/s, and the 1.00-μg grain that absorbs it recoils at 1.21 × 10⁻¹⁸ m/s." · no graph · 2D, flat (rule 28.1: the collision is along one line).

Labels: sim-dust-recoil labels the photon (with its wavelength), the grain (with its mass) and the one momentum arrow $\kp$, three in all, plus $\kv$ on the grain after absorption; hover names the photon and the grain. The arrow is drawn at one fixed length whatever the wavelength, since its size at any honest scale is the point of the readout, not of the picture; the headline and readout carry the numbers.

## Extra simulations considered

- A body's de Broglie wavelength against its size as the mass grows (the classical limit). Left: 29.6's `sim-de-broglie` draws exactly this on a log axis of length.
- Photons accumulating on the grain until its recoil is visible, as in comet tails. Left: the count would need a log slider over twenty decades, and the readout of `sim-dust-recoil` already states how long one photon's recoil takes to carry the grain a millimeter.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Conceptual question | 1 | 1 (AI approach) | — |
| Problem | 16 | 9 | 7 unkeyed |
| AP test prep | 2 | 2 (one graded choice, one open with AI approach) | — |

Unkeyed problems left out: `fs-id2032348` (electron single slit), `fs-id1414297` (microwave pasta), `fs-id2342310` (SLAC electron), `fs-id2299714` (electron microscope aperture), `fs-id650595` (laser on calcium), `fs-id1682095` (1.00-fm photon), `fs-id2658363` (solar sail). `exer-00001` (empty `type=`, under Problems & Exercises) is a problem. AP `fs-id2679541` leans on 29.7 and is tagged to `position-momentum-uncertainty` and `uncertainty-negligible-for-large-objects` too.

Errata kept as printed, named in `notes`: `exer-00001` (a) writes "1.21 kg × 10⁻²⁷ m/s"; the module writes degrees with `º`, set here as `°`.

## Wanted at chapter level

- none: the section has no variables, equations or glossary rows of its own, and no anchor is wanted.

Applied by the chapter pass (2026-09-28): the edge `integrated-quantum-problem` ← `relativistic-momentum` (Chapter 28) was added and merged.

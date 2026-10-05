# Plan: 31.7 Tunneling

Written before the page was built (root rule 5), under `ch31/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints no header of its own in this module; the three headers are
OmniStax's, set where the text turns to a new question.

| Span | Header | What it holds |
|---|---|---|
| `bound-in-a-well` | Bound in a well | The marble in the bowl atop a volcano (Figure 31.26), the nuclear potential as the bowl and the Coulomb repulsion as the slope outside, and the question of how the α gets out |
| `tunneling` | Tunneling out of the nucleus | Gamow's answer, the wave function through the barrier (Figures 31.27 and 31.28), barrier penetration, and the half-lives of α decay |
| `tunneling-in-solids` | Tunneling in solids | Electrons tunneling between objects and the scanning tunneling microscope (Figure 31.29) |

## Concepts

All four are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `bound-in-a-potential-well` | `bound-in-a-well` | used in `tunneling` |
| `quantum-tunneling` | `tunneling` | reinforced in `tunneling-in-solids` |
| `alpha-decay-by-tunneling` | `tunneling` | — |
| `scanning-tunneling-microscope` | `tunneling-in-solids` | — |

Earlier concepts used: `kinetic-energy` (7.2), `potential-energy` (7.3),
`binding-energy` (31.6), `electric-potential-energy` (19.1), `electrostatic-force`
(18.3), `alpha-decay-process` (31.4) and `nucleons` (31.3) in `bound-in-a-well`;
`probability-distribution` (29.7), `de-broglie-wavelength` (29.6), `half-life`
(31.5) and `alpha-decay-process` in `tunneling`; `electric-current` (20.1) and
`electron-microscope` (29.6) in `tunneling-in-solids`.

## Types the page binds

`energy` (the marble's kinetic and potential energy, the α's energy, the 8 MeV
binding, the potential energy curve), `position` (the barrier's thickness $\kd$,
the distance $r$ from the nucleus's centre, the probe's gap), `time` (the
half-life $\kthalf$) and `current` (the tunneling current $\kI$), the chapter's
31.7 row. The wave function is no category and is ink. Conventions: the α is two
protons `F.el('p+')` and two neutrons `F.el('n0')`. Referents: `marble`, the
marble of Figure 31.26, which the text points at five times and the Figure draws.
The probe and the surface of the STM Sim are named once each by label and are not
referents, since the text names no particular one.

## Figures

```
sim-marble-bowl · Figure 31.26 · bound-in-a-potential-well · value add: flow by animation (the marble rolls to and fro, turning at the dashed line forever, or rolls out and gains speed downhill; the book freezes it as two arrows) and variation by slider (its energy against the rim's, with the threshold marked) · arrows: kinematic (the marble rolling in the bowl and down the outside) · moving: the marble's roll is a motion in time, slowed four times, two swings of the bowl looping with no hold when trapped, the roll out holding 1.2 s · slider: KE (energy, the marble's kinetic energy at the bottom of the bowl, 5.0 to 30.0 mJ, 15.0 mJ by default, a 20-g marble in a bowl 10.0 cm deep; a dashed circle at 19.6 mJ, mgh at the rim, the threshold the caption names); choice: rim solid or with a tunnel 6.0 cm up (a discrete state: the book's "if it could find a tunnel") · headline: "With 15.0 mJ the marble reaches 7.7 cm, short of the 10.0-cm rim, and is trapped forever." · readout: KE = 15.0 mJ < PE_g(rim) = 19.6 mJ · graph none: the profile is the picture · 2D, a section through the volcano (rule 28.1)
sim-alpha-tunneling · Figure 31.27 + 31.28 · quantum-tunneling, alpha-decay-by-tunneling, bound-in-a-potential-well · value add: flow by animation (the α bounces inside the well, then is gone from the nuclear surface and appears at the barrier's far side without crossing it, and rolls away gaining speed) and variation by slider (raise the α's energy and its level climbs the barrier, the barrier it faces thins, the wave function's exponential fall inside it shortens, its tail outside grows and the half-life falls by powers of ten) · arrows: kinematic (the α inside and the α leaving; Figure 31.28's leader arrows are notation) · moving: the escape is an event in time, the α's speed at each r from its kinetic energy E − PE, about 4.5 s looping with a 1.2-s hold · slider: E (energy, the α's energy, 4.0 to 9.5 MeV, 5.25 MeV by default, Example 31.2's α decay of ²³⁹Pu, whose daughter ²³⁵U sets the barrier) · headline: "A 5.25-MeV α faces a barrier 41.2 fm thick, and the half-life is of order 10¹¹ s." (Gamow's estimate with r₀ = 1.2 fm, to the power of ten) · readout: d = 50.5 fm − 9.3 fm = 41.2 fm; note: outside the barrier the true wave function is 10⁻¹⁶ of its height inside, drawn far larger · graph alone, two panels on one r axis (fm, 0 to 70 fixed; the far turning point reaches 66.2 fm at 4.0 MeV): above, PE (MeV, −40 to 30 fixed) with the nuclear well and the Coulomb barrier as one energy-coloured curve, the α's energy as a dashed level and a bracket d under the barrier; beneath, the wave function in ink on its own baseline, as Figure 31.28 draws it, with the barrier's extent shaded · 2D, a relation between energy and distance (rule 28.1)
photo-stm · Figure 31.29 · kept photograph, whole: the book prints the probe sketch (a) and the beetle (b) as one image; the text points at it, and (a) is also drawn live as sim-stm-scan · still · 2D
sim-stm-scan · Sim · scanning-tunneling-microscope, quantum-tunneling · value add: flow by animation (the probe sweeps over a row of atoms and the current is traced as it goes, where the book draws five frozen probes and an arrow) and variation by slider (bring the probe 0.1 nm closer and the current grows about sevenfold, the text's "extremely sensitive") · arrows: kinematic (the probe's travel) · moving: the scan is a motion in time, 5.0 s holding 1.2 s · slider: d (position, the gap between the probe's tip and the tops of the atoms, 0.30 to 0.70 nm, 0.35 nm by default) · headline: "With the tip 0.35 nm above the atoms, the current peaks at 5.0 nA over each one." · readout: I = I₀e^{−2κd} = (5.5 μA)e^{−(20 nm⁻¹)(0.35 nm)} = 5.0 nA, with κ = 10 nm⁻¹ for a typical barrier (OmniStax's model numbers; the book gives none); note: between atoms d is 0.10 nm greater and I is e² = 7.4 times smaller · graph below: I (nA, 0 to 15 fixed; 13.6 nA at 0.30 nm, pinned() never needed) against the probe's position x (nm, 0 to 2.7, the scene's own scale so the trace sits under the tip) · 2D, a section through probe and surface (rule 28.1); no electrons are drawn in the gap, since the text says the particle is never in between
```

Labels on `sim-marble-bowl`: "rim" at the right peak, "reach" on the dashed line,
"tunnel" when it is chosen; three. The marble moves and is named by hover and by
the caption. Labels on `sim-alpha-tunneling`: the axis titles ("wave function" is the lower
panel's), "attractive nuclear force" by the well, "repulsive Coulomb force" on
the slope, "E" on the level and the bracket "d"; the moving α is named by hover. Labels on
`sim-stm-scan`: "surface atoms" (one representative) and the axis titles; the
probe and its gap bracket move and carry no label (rule 26.7), and hover names
them.

Widths: 275 (Figure 31.26's original), 200 and 350 (Figure 31.27 + 31.28's
originals), 350 (Figure 31.29).

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_32_07_01.jpg` (31.26) | original of `sim-marble-bowl` | replaced |
| `Figure_32_07_02.jpg` (31.27) | original of `sim-alpha-tunneling` | replaced, folded |
| `Figure_32_07_03.jpg` (31.28) | original of `sim-alpha-tunneling` | replaced, folded: the same barrier drawn twice, once with the α and once with its wave |
| `Figure_32_07_04.jpg` (31.29) | kept whole, photo row | the text points at it; (b) is a photograph and the two parts are one image |

## Extra simulations considered

- The half-lives of the five nuclides in the unkeyed problem plotted against
  their α energies. Left: it would print the answer to a problem left out for
  want of a key.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Conceptual question | 2 | 2 (AI suggested approaches) | — |
| Problem | 8 | 0 | 3 unkeyed: `fs-id2648508` (with its table), `fs-id3091745`, `fs-id2931427` |

Moved out with `source_section` 31.7: `fs-id1186653` to 31.1, `fs-id2659160` and
`fs-id3137818` to 31.4, `eip-467` and `exer-00001` to 31.3. No AP items, no Check
Your Understanding box.

## Wanted at chapter level

- variables row `KE` → 31.7-bound-in-a-well (energy, mJ, "the marble's kinetic energy at the bottom of the bowl", concept `kinetic-energy`)
- variables row `PE_g` → 31.7-bound-in-a-well (energy, mJ, "the marble's gravitational potential energy at the rim", concept `gravitational-potential-energy`)
- variables row `E` → 31.7-tunneling (energy, MeV, "the energy of the α particle, which it carries away in α decay", concept `nuclear-reaction-energy`)
- variables row `d` → 31.7-tunneling (position, fm, "the thickness of the barrier a particle tunnels through: for the α, the barrier above its energy; for the microscope, the gap between the probe and the surface"; no concept)
- variables row `t_half` → 31.7-tunneling (time, s, "the half-life of the α emitter", concept `half-life`)
- variables row `I` → 31.7-tunneling-in-solids (current, nA, "the tunneling current between the probe and the surface", concept `electric-current`)
- edge `quantum-tunneling` ← `probability-distribution` (29.7)
- `ch31/COLOR.md` 31.7 row: the page binds `energy`, `position`, `time`, `current`; conventions `p+`, `n0`.

Applied by the chapter pass (2026-10-05):

- Variables rows `KE`, `PE_g`, `E`, `d`, `t_half` added as listed; the current is `I_curr` (`\kIcur`, `electric-current`) rather than `I`, whose macro is the moment of inertia's, and the text and Sim now write `\kIcur`.
- Edge `quantum-tunneling` → `probability-distribution` added.
- `ch31/COLOR.md` records the bindings as built.

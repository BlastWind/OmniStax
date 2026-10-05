# Plan: 32.1 Diagnostics and Medical Imaging

Written before the page was built (root rule 5), under `ch32/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints one header, Medical Application, over everything after the
opening two paragraphs and Figure 32.2; the opening is the module's own
introduction and stays as the first block. The other headers are OmniStax's,
one per imaging method.

| Span | Header | What it holds |
|---|---|---|
| `radioactive-tags` | Radioactive tags | Radioimmunoassay; why nuclear radiation is a useful probe; tagged compounds and radiopharmaceuticals; Figure 32.2 |
| `medical-application` | Medical Application | The book's header: diagnostic uses, Table 32.1, technetium-99m |
| `anger-camera` | The Anger camera | The Anger or gamma camera and its lack of depth, Figure 32.3 |
| `spect` | SPECT | Single-photon-emission computed tomography, Figure 32.4 |
| `pet` | PET | Positron emission tomography, Figure 32.5 |

## Concepts

All seven are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `tagged-compound` | `radioactive-tags` | — |
| `radiopharmaceuticals-and-tagging` | `radioactive-tags` | reinforced in `medical-application`, used in `anger-camera` |
| `technetium-99m` | `medical-application` | — |
| `mass-from-activity` | `medical-application` | — |
| `anger-camera` | `anger-camera` | used in `spect` |
| `spect-imaging` | `spect` | used in `pet` |
| `pet-annihilation-pair` | `pet` | — |

`mass-from-activity` is never worked in the prose; Table 32.1's activities with
the 6.0-h half-life of ⁹⁹ᵐTc are where the text comes nearest, and two keyed
problems ask it. Earlier concepts used: `gamma-decay`, `range-of-radiation`,
`nuclide` in `radioactive-tags`; `activity`, `curie`, `becquerel`, `half-life`,
`beta-decay`, `isotopes` in `medical-application`;
`scintillator-and-photomultiplier` in `anger-camera`; `x-ray-imaging` in `spect`;
`positron`, `beta-plus-decay-and-electron-capture`, `rest-energy`,
`conservation-of-momentum` in `pet`.

## Types the page binds

`activity` (Table 32.1's millicuries, the Anger camera's slider and readout),
`time` (the 6.0-h half-life, the PET arrival-time difference), `position` (the
tumor's depth, the source's position across the ring, the distances to the
detectors, the 1-cm and 0.5-cm resolutions), `energy` (the 0.142-MeV and
0.511-MeV γ rays) and `velocity` ($c$ in the PET readout). Conventions: the γ
rays and the scintillation light `F.el('gamma')`, the positron `F.el('e+')`, the
electron `F.el('e-')`. Referent: `tumor`, the tumor the Anger camera paragraph
names and `sim-anger-camera` draws.

## Figures

```
photo-alzheimers-brain · Figure 32.2 · kept photograph: the text points at it ("as seen in Figure 32.2") and it is the image a radiopharmaceutical makes · arrows: none · still · 2D
sim-anger-camera · Figure 32.3 · anger-camera, radiopharmaceuticals-and-tagging · value add: flow by animation (γ rays leave the tagged tumor toward the camera, the lead stops every one not running along a hole, each one that passes makes a flash in the scintillator, the photomultipliers behind it fire, and the image builds count by count, where the book freezes four rays) and variation by slider (the tumor's depth: the image forms at the same height whatever the depth, the text's "no depth information"; the activity sets how fast the image fills) · arrows: kinematic (the γ rays leaving the head; the electronic output to the computer) · moving: γ rays at a drawn speed, one loop of 6 s holding 1.2 s, the image cleared each loop, because the image is counts gathered in time · sliders: d (position, the tumor's depth below the side of the head facing the camera, 1.0 to 14.0 cm, 4.0 cm by default), R (activity, 1.5 to 10.0 mCi with soft detents at Table 32.1's ⁹⁹ᵐTc activities 1.5, 2, 7.5 and 10 mCi, 7.5 mCi by default, the brain scan) · headline: "Only γ rays running along a hole reach the scintillator, so a tumor 4.0 cm deep lights the image at the same height as at any depth." · readout: R = 7.5 mCi = (7.5)(3.7 × 10⁷ Bq) = 2.8 × 10⁸ Bq; note: one γ ray is drawn for every 3.5 million the source emits (rule 28.4) · graph beside: the image, the counts in each row of the collimator as bars on a fixed 0 to 30 axis with pinned() past it · 2D, the book's schematic read as a section, the depth across the page (rule 28.1; no locked view, as `exploration.md` decides)
sim-pet · Figure 32.5 · pet-annihilation-pair · value add: flow by animation (a positron meets an electron, two γ rays leave back to back, two detectors on opposite sides fire and the line between them is kept; the lines pile up and cross at the source, where the book draws one pair) and variation by slider (the source's position across the ring: the lines follow it, and the difference in the two arrival times grows from zero on the axis) · arrows: kinematic (the two γ rays) · moving: one annihilation every 0.4 s, the γ rays drawn 10⁹ times slower than light, one loop of 6 s holding 1.2 s, the lines cleared each loop, because detection is events in time · slider: x (position, the source's position across the ring from its axis, −6.0 to 6.0 cm, 3.0 cm by default) · headline: "Every pair of 0.511-MeV γ rays marks a line through the source, and the lines cross 3.0 cm from the axis." · readout: Δt = (r₁ − r₂)/c with the latest pair's distances, e.g. (21.3 cm − 14.7 cm)/(3.00 × 10⁸ m/s) = 0.22 ns, driven by the clock and never highlighted; note: the γ rays are drawn 10⁹ times slower than light (rule 28.4) · graph beside: the arrival times of the latest pair to reach both detectors, whose two detectors are outlined in the ring, on a fixed 0 to 1.0 ns axis (the farthest detector is 18.0 + 6.0 = 24.0 cm, 0.80 ns, away), with a bracket for Δt · 2D, a cut through the ring down its axis as the book's end view shows it: every line of a pair lies in the ring's plane, so the cut holds all of it (rule 28.1); a 3D ring would add only the stacking of rings, which the text does not discuss
photo-spect · Figure 32.4 · kept photograph: the text points at it ("Figure 32.4 shows a patient in a circular array of detectors") and it is the machine the passage describes · arrows: none · still · 2D
```

Labels on `sim-anger-camera`: "head", "tumor" (in its referent colour), "γ rays"
(fixed, at the head's edge), "lead collimator", "scintillator", "photomultiplier
tubes", with "image" and "counts" as the graph's frame. The moving γ rays and
flashes are named by hover. Labels on `sim-pet`: "ring of detectors", "head",
"source", and a legend for e⁺, e⁻ and γ; detector 1 and detector 2 are named only
on the timing panel and by hover, since which two fire changes with every pair.

Widths: 200 for Figure 32.2 and 250 for Figure 32.4 (photo rows); 400 for Figure
32.3's original and 225 for Figure 32.5's.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_33_01_01.jpg` (32.2) | kept, photo row | the text points at it, and it is what the passage is about |
| `Figure_33_01_02.jpg` (32.3) | original of `sim-anger-camera` | replaced |
| `Figure_33_01_04.jpg` (32.4) | kept, photo row | the text points at it |
| `Figure_33_01_05.jpg` (32.5) | original of `sim-pet` | replaced |

## Extra simulations considered

- A SPECT mode on the PET ring, collimated single photons against coincident
  pairs. Left: SPECT's cameras rotate with parallel-hole collimators, which the
  book does not describe, and the Anger camera figure already shows collimated
  single photons.
- A 3D ring with stacked detector rings answering the Critical Thinking problem's
  "information in three dimensions". Left: the text does not discuss the
  stacking, and the flat cut holds every line.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Conceptual question | 2 | 2 (AI suggested approaches) | — |
| Problem | 7 | 3 keyed (`fs-id2654437`, `fs-id2688094`, `fs-id2973764`) and 1 keyed equation as an open item (`fs-id2688305`) | 3 unkeyed: `fs-id1996812`, `fs-id1816344`, `fs-id1546485` |
| Moved in | — | `exer-00001` from 32.7 (Critical Thinking, a β⁺ target; keyed, open, `source_section` 32.7) | — |

No AP items, no Check Your Understanding box.

## Wanted at chapter level

- 32.1/R_act → 32.1-medical-application
- 32.1/t_half → 32.1-medical-application
- 32.1/E → 32.1-medical-application
- variables row `d` for 32.1 (position, cm: the depth of the tumor below the side of the head that faces the camera) → 32.1-anger-camera; the Sim's slider writes `\kd`
- variables row `x` for 32.1 (position, cm: the position of the source across the PET ring, measured from its axis) → 32.1-pet; the Sim's slider writes `\kx`
- variables rows `r_1` and `r_2` for 32.1 (position, cm: the distances from the annihilation to the farther and the nearer detector) → 32.1-pet; the readout writes `\krone`, `\krtwo`
- variables row `Δt` for 32.1 (time, ns: the difference between the arrival times of the two γ rays) → 32.1-pet; the readout writes `\kdt`
- variables row `c` for 32.1 (velocity: the speed of light, at which both γ rays travel) → 32.1-pet; the readout writes `\kc`
- `ch32/COLOR.md`: 32.1 binds `velocity` as well as energy, activity, time and position, through $c$ in the PET readout
- No concept, edge or symbol row needs changing.

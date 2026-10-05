# Plan: 31.5 Half-Life and Activity

Written before the page was built (root rule 5), under `ch31/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints three headers; the untitled opening paragraph gets an OmniStax header of
its own, and the long Half-Life and Activity blocks continue past their examples in
header-less blocks, as the book runs on without a header.

| Span | Header | What it holds |
|---|---|---|
| `lifetimes` | Lifetimes of nuclei (OmniStax) | The section's own introduction |
| `half-life` | Half-Life | Half-life as a 50% chance, Figure 31.19, the range of half-lives, $N = N_0e^{-\lambda t}$, the decay constant, whole half-lives |
| `radioactive-dating` | (continues) | Radioactive dating, carbon-14 dating, the Shroud of Turin, Figure 31.20 |
| `shroud-example` | Example 31.4 · How Old Is the Shroud of Turin? | |
| `rock-dating` | (continues) | Dating rocks by ²³⁸U |
| `activity` | Activity, the Rate of Decay | Activity, the becquerel, the curie, $R = 0.693N/t_{1/2}$ |
| `carbon-activity-example` | Example 31.5 · How Great Is the ¹⁴C Activity in Living Tissue? | |
| `artificial-radioactivity` | (continues) | Human-made radioactivity, Chernobyl |
| `human-medical` | Human and Medical Applications | Figure 31.21 |
| `chernobyl-example` | Example 31.6 · What Mass of ¹³⁷Cs Escaped Chernobyl? | |
| `activity-decays` | (continues) | $R = R_0e^{-\lambda t}$ and Sim (dating by activity) |

## Concepts

All eleven are the prep pass's rows; the page adds none.

| Concept | Introduced in |
|---|---|
| `half-life`, `exponential-decay-law`, `decay-constant` | `half-life` |
| `radioactive-dating-technique`, `carbon-14-dating` | `radioactive-dating` |
| `radioactive-dating` | `shroud-example` |
| `activity`, `becquerel`, `curie`, `activity-from-number-and-half-life` | `activity` |
| `activity-decays-exponentially` | `activity-decays` |

Earlier concepts used: `nuclear-radioactivity` (31.1) in `lifetimes`; `nucleus` (31.3),
`time` (2.3) in `half-life`; `parent-daughter-decay-series` (31.4) in `rock-dating`;
`mole`, `avogadros-number` (13.3) in `carbon-activity-example` and `chernobyl-example`;
`mass` (4.2) in `chernobyl-example`; `radioactive` (31.1) in `artificial-radioactivity`.

## Types the page binds

`time` ($\kt$, $\kthalf$, $\kdt$), `decay-constant` ($\klamdec$), `activity` ($\kRact$,
$\kRoact$), and in prose `mass` and `energy`. $N$, $N_0$, $\Delta N$, $A$ and the fraction
$N/N_0$ are counts and stay in ink. No referents: the figures draw no particular source
the text names (the shroud is a detent on a slider, not a drawn thing). A nucleus in the
sample is a generic nuclide; by the chapter's `COLOR.md` its state is told by fill, solid
for not yet decayed and hollow for decayed, never by a hue.

## Figures

```
sim-decay-curve · Figure 31.19 · half-life, exponential-decay-law, decay-constant · value add: flow by animation and variation by slider (a sample of up to 1000 nuclei, each going hollow at a random moment, beside the graph of the count; the jagged count is traced against the smooth $N_0e^{-\lambda t}$, so the reader sees that no nucleus ages, that halving is true only of many, and that a small sample wanders, which answers the conceptual question on "exactly half" by looking; the half-life slider stretches the curve, so a shorter half-life is a larger $\lambda$ and a faster fall) · arrows: none (the book's figure is a graph) · moving: the sample decays on a clock from 0 to 50 s while the count is traced; each loop draws a fresh sample, so the jagged line differs run to run while the law stays; the idea is a statistical clock (rule 14) · sliders: $N_0$ (untyped count, 10 to 1000, default 1000, the largest a grid can show of the book's 10⁶), $\kthalf$ (time, 1.0 to 20.0 s, default 5.0 s, so the axis spans the book's ten half-lives) · headline: "Each nucleus has a 50% chance of lasting each half-life, $\kthalf = 5.0$ s, however long it has lasted already." · readout: $N = N_0e^{-\klamdec\kt}$ with the live numbers and $\klamdec = 0.693/\kthalf$ written as its value; note: the count actually left in the sample · graph beside (the grid is square): $N/N_0$ from 0 to 1 against $\kt$ from 0 to 50 s, fixed; the law dashed as the average it is, the sample's count solid; the book's dashed drop lines at one, two and three half-lives · 2D
photo-shroud · Figure 31.20 · kept photograph: the text points at it ("see Figure 31.20") and the example is about it · still · 2D
photo-chernobyl · Figure 31.21 · kept photograph: the text points at it ("see Figure 31.21") · still · 2D
sim-carbon-dating · Sim · radioactive-dating, carbon-14-dating, activity-decays-exponentially · value add: variation by slider (the fraction of ¹⁴C left is dragged along the decay curve of ¹⁴C and the age is read back off the time axis, Example 31.4's 0.92 and 690 y on load; the same curve read on a second axis is the activity of one kilogram of the sample's carbon, 250 Bq in living tissue by Example 31.5, so $R = R_0e^{-\lambda t}$ is the same fall; on the flat tail a small change in what is left moves the age by thousands of years, which is why the text says the method is best for younger samples and fails past 50 or 60 thousand years) · arrows: none · still: the reader moves a measured fraction, nothing in the idea runs on a clock (rule 14) · slider: $N/N_0$ (untyped, 0.001 to 1.000, default 0.92) with a detent at 0.92 (shroud) and a special at 0.5 (one half-life, which the text names) · headline: "A sample with $N/N_0 = 0.92$ of the ¹⁴C of living tissue died $\kt = 690$ y ago." · readout: $\kt = -\ln(N/N_0)/\klamdec$ with the numbers; note: the activity of a kilogram of its carbon now, $\kRact$, against $\kRoact = 250$ Bq · graph alone (the graph is the idea): $N/N_0$ from 0 to 1 on the left, $\kRact$ from 0 to 250 Bq on the right, $\kt$ from 0 to 60 000 y, fixed · 2D
```

Labels. `sim-decay-curve`: no label on the moving nuclei; a two-entry legend under the
grid (filled, not yet decayed; hollow, decayed), a two-entry legend in the graph (the law,
this sample), and a $t_{1/2}$ bracket on the graph; hover names carry the sample and the
drop points. `sim-carbon-dating`: the point carries no label (it moves); the age and the
activity are written on the axes where the drop lines meet them; hover names carry the
point and the half-life mark.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_32_05_01a.jpg` (31.19) | original of `sim-decay-curve` | graph replaced |
| `Figure_32_05_02a.jpg` (31.20, the shroud) | kept, photo row | the text points at it |
| `Figure_32_05_03a.jpg` (31.21, Chernobyl) | kept, photo row | the text points at it |

The PhET note Alpha Decay is dropped and named in `notes`.

## Extra simulations considered

- A source's activity falling for a choice of nuclides (¹³¹I, ⁶⁰Co, ¹³⁷Cs). Left: every
  choice draws the same exponential on a stretched axis, so the positions look alike (rule
  24.9); `sim-carbon-dating` already shows $R = R_0e^{-\lambda t}$.

## Exercises

| Kind | In the book | Set here | Elsewhere |
|---|---|---|---|
| AP test prep | 2 | 2: `fs-id1400928` keyed (α, 4.1 × 10¹¹), `fs-id1705205` open with its options (key commented out) | — |
| Conceptual question | 7 | 3 (AI suggested approaches) | `fs-id1562211`, `fs-id3181573`, `fs-id2621402`, `fs-id1464742` to 31.6 (binding energy) |
| Problem | 25 | 12 keyed | 13 unkeyed left out: `fs-id3148681`, `fs-id3081858`, `fs-id3116466`, `fs-id2382905`, `fs-id2653513`, `fs-id2617155`, `fs-id3046854`, `fs-id3052731`, `fs-id1429071`, `eip-947`, `eip-575`, `eip-528`, `eip-751` |

Errata kept as printed and named in `notes`: the key of `fs-id1400928` writes 0.00173 s for
the 1.78-ms half-life (its result, 4.1 × 10¹¹, is that of 1.78 ms); "solar neutrinos strike
¹⁴N" in `radioactive-dating`; `eip-525`(c) keyed "＄2.9 × 10³". The nuclides of
`fs-id1400928`, flattened by the converter, are rebuilt from the CNXML as ²¹⁵₈₄Po and ²¹¹₈₂Pb.

## Wanted at chapter level

- variables row `31.5/m` (mass) for the mass of ¹³⁷Cs in `chernobyl-example`, written in ink until it exists
- variables row `31.5/A` (untyped, mass number) for `chernobyl-example`'s ${}^{A}X$, written as plain $A$
- the term "rate of decay" (31.5 glossary) as a term of `activity`; the term "lifetime" names no concept and stays ink
- concepts `radioactive-dating-technique` and `radioactive-dating` are near twins (a definition and a skill); the chapter pass may keep both or fold the definition into the skill
- edge `half-life` → `probability` or the 29.7 probability concept, if the chapter pass wants the 50% chance tied to the book's first probability idea

# Plan: 28.5 Relativistic Momentum

Written before the page was built (root rule 5), under `ch28/config.md`, which
records that the per-section stop is replaced by a plan file left for review
(applied as proposed on 2026-09-28, on Chen's instruction to finish the book
without check-ins).

## Sub-concepts

The module prints no headers, so the page gives it three of its own, one per idea.

| Span | Header | What it holds |
|---|---|---|
| `relativistic-momentum` | Defining Relativistic Momentum | The opening paragraphs, the boxed Relativistic Momentum note, the use of $\ku$ for one observer's velocity, the paragraph on momentum approaching infinity and Figure 28.19 |
| `rest-mass` | Rest Mass | The Misconception Alert on relativistic mass and momentum |
| `momentum-conserved` | Conservation of Relativistic Momentum | The two closing paragraphs and the Check Your Understanding |

## Concepts

| Concept | Introduced in | Also |
|---|---|---|
| `relativistic-momentum` | `relativistic-momentum` | used in `rest-mass` |
| `rest-mass` | `rest-mass` | used in `relativistic-momentum` |
| `relativistic-momentum-conserved` | `momentum-conserved` | used in `relativistic-momentum` |

Used from 28.2: `relativistic-factor` in `relativistic-momentum`.

## Types the page binds

`momentum` ($\kp$, $\kptot$) and `velocity` ($\ku$, $\kc$), as `ch28/COLOR.md` gives 28.5. $\gamma$, $m$ and $\ku/\kc$ are untyped and in ink. The classical momentum $m\ku$ is the dashed variant of the momentum hue, as $\text{KE}_{\text{class}}$ is in 28.6. The wall at $\kc$ is a dashed line in the velocity hue.

## Figures

```
sim-momentum-graph · Figure 28.19 · relativistic-momentum, relativistic-factor · value add: variation by slider and comparison, since the book draws one curve and the reader here drags u toward c and watches the relativistic momentum part from the classical line mu, which it follows closely at low speeds, and climb without limit at the wall; the particle choice turns the point on the curve into the momentum in kg·m/s the Check Your Understanding and the helium problem ask for · still: a graph of one relation, nothing in the idea has a clock, so no cycle and no transport · slider: u/c (velocity class, 0 to 0.990, step 0.001, 0.985 by default, specials at 0.985 "electron, CYU" and 0.200 "helium nucleus"); choice: particle, electron or helium nucleus (strings 'e', 'he') · headline: "At 0.985c the momentum is 5.79 times the classical mu." · graph: p/(mc) against u/c on fixed axes, u/c 0 to 1.0, p/(mc) 0 to 8; the relativistic curve solid in the momentum hue, the classical line dashed in it, the wall at c dashed in the velocity hue; a point on each through `pinned()` · 2D, flat (rule 28.1: a relation between two quantities)
```

Labels: the curve names $\gamma m\ku$, the dashed line $m\ku$, and the wall $\ku = \kc$; with the two axis titles and the headline that is the frame plus three kinds, under rule 26.7's six, so all are drawn. Readout: one inline equation, $\kp = \gamma m\ku$ with the chosen particle's mass and the speed, to three figures.

Photographs: Figure 28.18 (`Figure_29_05_01a.jpg`, the football players) is dropped as a section-opening splash image, as `ch28/config.md` says; its caption's point is made in full by the opening paragraph. Figure 28.19 is kept only as the original of its replacement.

## Extra simulations considered

- A one-dimensional collision seen from two frames, with the relativistic momentum conserved in both and the classical momentum conserved in neither. Left: the section states conservation and gives no worked collision, so the figure would teach beyond the text (rule 26.5).

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Check Your Understanding | 1 | 1, inline after `momentum-conserved` | — |
| AP test prep | 0 | 1 moved in from 28.4 (`fs-id3762172`), an open item with its options and an AI-marked suggested approach | — |
| Conceptual question | 2 | 2, AI-marked suggested approaches | — |
| Problem | 8 | 4 keyed | 4 unkeyed: `fs-id1665120` (electron at 0.980c), `fs-id3068020` (2000 kg satellite), `fs-id1346384` (proton momentum, printed "4.48 × −10⁻¹⁹"), `fs-id1949487` (proton of 1.00 kg·m/s) |

The answer schema checks every number to 2%, so the keyed speed $2.9957\times 10^{8}$ m/s and the ratio 1.000000005 are graded more loosely than their printed digits; the schema carries no tolerance field to tighten.

## Wanted at chapter level

- `eq-relativistic-momentum` → 28.5-relativistic-momentum
- `eq-gamma-u` → 28.5-relativistic-momentum
- `p` → 28.5-relativistic-momentum
- `m` → 28.5-rest-mass
- 28.4 `exercise_notes` already names `fs-id3762172` as set in 28.5; this page's `exercise_notes` says so too.
- Errata for the chapter log: `fs-id1346384` prints "4.48 × −10⁻¹⁹ kg·m/s" and is left out as unkeyed; the text links "Work, Energy, and Energy Resources" where it means the chapter on linear momentum, carried as printed in plain text.
- Answer schema: no per-exercise tolerance, so `fs-id1292487` (2.9957 × 10⁸ m/s) and `fs-id1580653` (b) (1.000000005) are checked at 2%.
- No concept, edge or symbol row needs changing.

Applied by the chapter pass: The chapter pass set every anchor listed above and gathered the errata. The answer schema now takes a relative tolerance, so `fs-id1292487` carries `tol` 2e-5 and both parts of `fs-id1580653` carry `tol` 2e-9; each is checked to its printed digits.

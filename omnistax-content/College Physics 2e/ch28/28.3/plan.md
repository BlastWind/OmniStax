# Plan: 28.3 Length Contraction

Written before the page was built (root rule 5), under `ch28/config.md`, which
records that the per-section stop is replaced by a plan file left for review
(applied as proposed on 2026-09-28, on Chen's instruction to finish the book
without check-ins).

## Sub-concepts

The module prints two headers, and the page keeps them as its two spans.

| Span | Header | What it holds |
|---|---|---|
| `proper-length` | Proper Length | The opening paragraph on the long road, the muon's two distances (2.01 km and 0.627 km), the boxed Proper Length note and Figure 28.10 |
| `length-contraction` | Length Contraction | The derivation from $\kLo/\kdt = \kLrel/\kdto$, the boxed Length Contraction note, Example 28.2 with Figure 28.11, the paragraphs on travel to the stars and on everyday speeds, and Figure 28.12 with the electron at SLAC |

## Concepts

| Concept | Introduced in | Also |
|---|---|---|
| `observers-agree-on-relative-speed` | `proper-length` | used in `length-contraction` |
| `proper-length` | `proper-length` | reinforced in `length-contraction` |
| `length-contraction-equation` | `length-contraction` | — |
| `calculate-length-contraction` | `length-contraction` | — |
| `relativity-at-everyday-speeds` | `length-contraction` | — |

Used from 28.2: `proper-time`, `time-dilation-equation` and `relativistic-factor` in `length-contraction`, `proper-time` in `proper-length`.

## Types the page binds

`position` ($\kLo$, $\kLrel$), `velocity` ($\kv$, $\kc$) and `time` ($\kdt$, $\kdto$), as `ch28/COLOR.md` gives 28.3. $\gamma$ and $\kv/\kc$ are untyped and in ink. The proper value is the dashed variant of its hue: the $\kLo$ bracket and the $\kdto$ clock hand are dashed. The two frames are told apart by `F.cat(0)` (the Earth) and `F.cat(1)` (the muon, the astronaut) on their frame tags. The muon, the ship, the clouds, the Earth and the star are ink; the electron in Figure 28.12 is `F.el('e-')`. Its field lines are drawn in ink, since the page binds no electric-field type and the lines are a picture of shape, not a quantity read off.

## Figures

```
sim-muon-frames · Figure 28.10 · proper-length, observers-agree-on-relative-speed, length-contraction-equation · value add: variation by slider and flow by animation, since the book draws one speed in two frames and the reader here sets any speed and watches the same trip happen in both frames on one clock, the Earth panel's muon crossing L_0 while its clock reads Δt and the muon panel's ground sliding by a shorter L while the muon's clock reads Δt_0 · moving: the trip from production to decay is the clock of the idea (linear, one loop about 5 s, hold 1.2 s), both panels driven by the same fraction of the trip · slider: v/c (velocity class, 0 to 0.990, 0.950 by default with a special at 0.950); the muon's proper lifetime is held at the section's 2.20 μs · headline: "At 0.950c the Earth measures 2.01 km in 7.05 μs; the muon measures 0.627 km in 2.20 μs." · graph: none; two stacked strips, the Earth's frame above, the muon's below, on one fixed scale of 200 units per km (0.990c reaches 4.63 km, 926 units) · 2D, flat (rule 28.1: the effect lies along one line)
sim-alpha-centauri · Figure 28.11 · length-contraction-equation, calculate-length-contraction · value add: variation by slider, since the example works γ = 30.00 once and the reader here drags v from everyday speeds to 0.9999c and watches the 4.300 ly between the Earth and Alpha Centauri close up in the astronaut's frame, with the two travel times beside it · moving: the ship's trip is the clock (linear, about 5 s, hold 1.2 s); in the Earth panel the ship crosses L_0, in the ship panel the Earth and the star slide past the ship through L · slider: v/c (velocity class, 0 to 0.9999, step 0.0000001, 0.99944 by default with specials at 0.99944 labelled γ = 30.00 and 0.950) · headline: "At γ = 30.00 the astronaut measures 0.1433 ly between the Earth and Alpha Centauri, not 4.300 ly." · graph: none; two strips on one fixed scale, L_0 = 4.300 ly drawn 950 units long · 2D, flat
sim-contracted-field · Figure 28.12 · length-contraction-equation, relativity-at-everyday-speeds · value add: variation by slider, since the book prints one compressed pattern and the reader here sets the electron's speed and sees the field lines stay radial and even at everyday speeds and crowd toward the perpendicular as v nears c, each line's slope along the pipe cut by γ (tan θ = γ tan θ_0, the rest pattern contracted along the motion) · still, because a charge moving uniformly carries the same pattern with it at every instant; nothing in the idea changes with time, so no cycle and no transport · slider: v/c (velocity class, 0 to 0.990, 0.950 by default, with the special at 0.950 from the muon) · headline: "At 0.950c the field pattern is 0.312 of its rest length along the pipe." · graph: none; the pipe, the electron with its velocity arrow, 24 field lines, and a coil around the pipe · 2D, flat
```

Photographs: Figure 28.9 (`Figure_29_03_01a.jpg`, the long road) is dropped as a section-opening splash image; the opening paragraph says the same in full. Figures 28.10, 28.11 and 28.12 are kept only as the originals of their replacements. Folding 28.10 with 28.11 was considered and left: the muon holds its proper time fixed and the ship holds its proper length fixed, so one scale cannot carry both at honest size.

Labels: each strip figure names the two frame tags, $\kLo$ or $\kLrel$ on the bracket, the clock and the moving body, five things per panel pair, under the six of rule 26.7, so all are drawn. Figure 28.12 names the electron, $\kv$, and the coil; the field lines are a kind and are not labelled one by one.

## Extra simulations considered

- A car on a road at everyday speed with the contraction printed to many digits. Left: the slider of Figure 28.12 and of Figure 28.10 already reach low speeds, and the readout shows $\gamma = 1.000$.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Check Your Understanding | 1 | 1, inline after `length-contraction` | — |
| Conceptual question | 3 | 3, AI-marked suggested approaches | — |
| Problem | 8 | 4 keyed, plus `exer-00001` moved in from 28.6 | 4 unkeyed: the 6.0 m sports car, the muon at 0.0500c, the 100 m race in yards, the canister at 1.20c |

`exer-00001` (28.6 Critical Thinking, the space rock) tests length contraction and is set here with `source_section: "28.6"`.

## Wanted at chapter level

- `eq-length-contraction` → 28.3-length-contraction
- `eq-length-contraction-gamma` → 28.3-length-contraction
- `L_0` → 28.3-proper-length
- `L_rel` → 28.3-length-contraction
- 28.6 `exercise_notes`: `exer-00001` is set in 28.3 with `source_section: "28.6"`.
- Errata for the chapter log: Example 28.2 prints "$L_0 - 4.300$ ly" for "$L_0 = 4.300$ ly", carried as printed; the section gives the muon 7.05 μs and 2.20 μs where Example 28.1 gives 4.87 μs and 1.52 μs, carried as printed; the section's "The relativistic effect is so great than the accelerator" is carried as printed.
- No concept, edge or symbol row needs changing.

Applied by the chapter pass: The chapter pass set every anchor listed above and gathered the errata in `exploration.md` and the chapter log; 28.6's `exercise_notes` already agreed on `exer-00001`.

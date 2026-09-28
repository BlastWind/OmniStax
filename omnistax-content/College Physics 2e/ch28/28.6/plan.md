# Plan: 28.6 Relativistic Energy

Written before the page was built (root rule 5), under `ch28/config.md`, which
records that the per-section stop is replaced by a plan file left for review
(applied as proposed on 2026-09-28, on Chen's instruction to finish the book
without check-ins).

## Sub-concepts

The book prints four headers; the two opening paragraphs sit before the first of
them and get a header of OmniStax's own, as 28.1's opening does.

| Span | Header | What it holds |
|---|---|---|
| `energy-conserved` | Conserving Relativistic Energy | Figure 28.20 (the NSTX reactor) and the two opening paragraphs |
| `total-rest-energy` | Total Energy and Rest Energy | The Total Energy and Rest Energy notes, Example 28.6, the paragraphs on mass converted to energy and Figure 28.21 |
| `stored-energy` | Stored Energy and Potential Energy | The paragraph on stored energy and Example 28.7 (the car battery) |
| `kinetic-energy` | Kinetic Energy and the Ultimate Speed Limit | The relativistic work-energy theorem, the Relativistic Kinetic Energy note, the low-velocity limit, The Speed of Light note, Figure 28.22, Example 28.8 and Figure 28.23 |
| `energy-momentum` | Relativistic Energy and Momentum | $\kE^2 = (\kp\kc)^2 + (m\kc^2)^2$, massless particles, the seven Problem-Solving Strategies for Relativity as the book's numbered list, and the Check Your Understanding |

## Concepts

| Concept | Introduced in | Also |
|---|---|---|
| `total-energy` | `total-rest-energy` | used in `energy-conserved`, `kinetic-energy`, `energy-momentum` |
| `rest-energy` | `total-rest-energy` | used in `kinetic-energy`, `energy-momentum` |
| `mass-energy-equivalence` | `total-rest-energy` | used in `energy-conserved`, `stored-energy` |
| `find-mass-change-from-energy` | `stored-energy` | used in `total-rest-energy` |
| `relativistic-kinetic-energy` | `kinetic-energy` | |
| `relativistic-ke-classical-limit` | `kinetic-energy` | |
| `no-mass-reaches-c` | `kinetic-energy` | |
| `energy-momentum-relation` | `energy-momentum` | |
| `massless-particles` | `energy-momentum` | |

Used from earlier sections: `relativistic-factor` (28.2) in `total-rest-energy` and `kinetic-energy`; `relativistic-momentum` (28.5) in `energy-momentum`.

## Types the page binds

`energy` ($\kE$, $\kErest$, $\kKErel$, $\kKEclass$, $\kWnet$), `velocity` ($\kv$, $\kc$) and `momentum` ($\kp$), as `ch28/COLOR.md` gives 28.6. $\gamma$, $m$, $\Delta m$ and $\kv/\kc$ are untyped and in ink. $\kErest$ is the dashed variant of the energy hue, and so is $\kKEclass$ beside the relativistic curve. The wall at $\kc$ is a dashed line in the velocity hue. In Example 28.7 the charge, voltage, current and time are plain letters in ink, since the page draws none of them ($\kI$ is moment of inertia in this book).

## Figures

```
fig-nstx · Figure 28.20 · photo, kept: the opening paragraph speaks of the tokamak the photograph shows, and its caption states the section's idea, a small mass of fuel converted into a large amount of energy · no sliders · 2D
fig-sun-station · Figure 28.21 · photo, kept: the text points at it ("See Figure 28.21") · no sliders · 2D
sim-ke-graph · Figure 28.22 · relativistic-kinetic-energy, relativistic-ke-classical-limit, no-mass-reaches-c · value add: variation by slider and comparison, since the book draws two curves and the reader here drags v toward c, sees the classical ½mv² follow the relativistic curve at low speed, part from it, and the relativistic curve climb without limit at the wall; the point on the curve is Example 28.8's electron at 0.990c and the Check Your Understanding's at 0.992c, read in joules · still: a graph of one relation, nothing in the idea has a clock, so no cycle and no transport · slider: v/c (velocity class, 0 to 0.995, step 0.001, 0.990 by default, specials at 0.990 "Example 28.8" and 0.992 "Check Your Understanding") · headline: "At 0.990c the relativistic kinetic energy is 12.4 times the classical value." · graph alone: KE/(mc²) against v/c on fixed axes, 0 to 1 and 0 to 8; KE_rel solid in the energy hue, KE_class dashed in it, the wall dashed in the velocity hue; points through pinned() · 2D, flat (rule 28.1: a relation between two quantities)
sim-energy-triangle · Sim · energy-momentum-relation, massless-particles, rest-energy · value add: intuition and variation, since E² = (pc)² + (mc²)² is Pythagoras, and a right triangle whose hypotenuse is E, whose base is the rest energy mc² and whose upright is pc shows at a glance why E = mc² at rest and E ≈ pc at high speed: the angle at the base has sine v/c (pc/E = v/c), so dragging v toward c tips the triangle up until the rest-energy leg is a sliver and E lies almost along pc, as it does exactly for a massless particle · still: no clock, only the slider · slider: v/c (velocity class, 0 to 0.9999, step 0.0001, 0.990 by default, specials at 0.990 "Example 28.8" and 0.99944 "γ = 30.0", the twin paradox's astronaut the problems ask about) · headline: "At 0.990c, pc is 98.99% of the total energy E." · no graph; the triangle is drawn with the hypotenuse E at a fixed length, so the reader's eye is on the shape, and the readout gives the electron's numbers in MeV · 2D, flat
fig-fermilab · Figure 28.23 · photo, kept: the text points at it ("See Figure 28.23") · no sliders · 2D
```

Labels, sim-ke-graph: the two curves are named $\text{KE}_{\text{rel}}$ and $\text{KE}_{\text{class}}$ and the wall $\kv = \kc$; with the axis titles and headline that is the frame plus three kinds, all drawn. Readout: $\kKErel = (\gamma - 1)m\kc^2$ with the electron's mass, three figures.

Labels, sim-energy-triangle: the three sides are named $E$, $pc$ and $mc^2$, and the angle whose sine is $v/c$ is marked; four labels, all drawn, each beside its side. The upright $pc$ is the momentum $p$ scaled by the constant $c$, drawn in the momentum hue; $E$ solid and $mc^2$ dashed in the energy hue. Readout: $\kE^2 = (\kp\kc)^2 + (m\kc^2)^2$ with the electron's numbers in MeV.

Photograph dropped: none. Figure 28.22 is kept only as the original of its replacement.

## Extra simulations considered

- A balance comparing a charged and a flat battery, magnified by $10^{11}$. Left: Example 28.7 makes the point in numbers, and a drawing whose only difference sits in an exaggeration factor adds little (rule 24.9, slider positions that look alike).

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Check Your Understanding | 1 | 1, inline at the end of `energy-momentum` | — |
| AP test prep | 3 | `fs-id3365158` keyed (open, the book's derivation); `fs-id2015058` unkeyed, AI-marked approach; `fs-id2691530` unkeyed choice, an open item with its options and an AI-marked approach | — |
| Conceptual question | 7 | 7, AI-marked suggested approaches | — |
| Problem | 31 | 14 keyed | 16 unkeyed: `fs-id2721624`, `fs-id2720780`, `fs-id2572932`, `fs-id1780374`, `fs-id2702554`, `fs-id2753673`, `fs-id2600562`, `fs-id2725006`, `fs-id2834155`, `fs-id3164443`, `fs-id3259500`, `fs-id3143371`, `fs-id3159094`, `fs-id2791387`, `fs-id1936682`, `fs-id2929431`; `exer-00001` (Critical Thinking, the space rock) is set in 28.3 as its `p5` with `source_section: "28.6"` |

The chapter notes count 15 keyed problems here; the CNXML carries 14 solutions among the 30 problems left after `exer-00001` moves. Speeds near $c$ carry a `tol`: 0.999988c at $10^{-6}$ and 0.99995c at $10^{-5}$.

## Wanted at chapter level

- `eq-total-energy` → 28.6-total-rest-energy
- `eq-rest-energy` → 28.6-total-rest-energy
- `eq-relativistic-work-energy` → 28.6-kinetic-energy
- `eq-relativistic-kinetic-energy` → 28.6-kinetic-energy
- `eq-gamma-low-velocity` → 28.6-kinetic-energy
- `eq-energy-momentum` → 28.6-energy-momentum
- `E` → 28.6-total-rest-energy
- `E_0rest` → 28.6-total-rest-energy
- `Δm` → 28.6-stored-energy
- `W_net` → 28.6-kinetic-energy
- `KE_rel` → 28.6-kinetic-energy
- `KE_class` → 28.6-kinetic-energy
- 28.3's `exercise_notes` already names `exer-00001` as moved from here; this page's `exercise_notes` and `notes` say so too.
- Errata for the chapter log: Example 28.8(b) uses $9.00\times10^{-31}$ kg for the electron where the problem gives 9.11; AP `fs-id3365158` asks to show the limit "when $v = c$" and answers "when $v \ll c$"; the Check Your Understanding has a photon "decay" into an electron-positron pair; Example 28.7's unit conversion prints an unbalanced parenthesis; all carried as printed.
- Keyed count: 14 problems, not the 15 the chapter notes give.
- No concept, edge or symbol row needs changing.

Applied by the chapter pass: The chapter pass set every anchor listed above and gathered the errata in `exploration.md` and the chapter log; the keyed count of 14 stands.

# Plan: 30.8 Quantum Numbers and Rules

Written before the page was built (root rule 5), under `ch30/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints one header, "Intrinsic Spin Angular Momentum Is Quantized in
Magnitude and Direction", which is kept and covers everything after it (the
summary of the quantum numbers, Table 30.1 and the probability clouds
included). The unheaded opening is cut into three by OmniStax where the subject
turns, and Example 30.4 is a block of its own.

| Span | Header | What it holds |
|---|---|---|
| `quantum-numbers` | Quantum numbers | The opening paragraph, the principal quantum number $n$ |
| `magnitude-of-angular-momentum` | The magnitude of angular momentum | $L = \sqrt{l(l+1)}\,h/2\pi$, the rule for $l$, the ground state with $L = 0$, $l = 2$ worked |
| `direction-of-angular-momentum` | The direction of angular momentum | $L_z = m_l h/2\pi$, the rule for $m_l$, Figure 30.52 |
| `allowed-directions` | Example 30.4 · What Are the Allowed Directions? | The three angles for $l = 1$, the cones, the correspondence principle |
| `intrinsic-spin` | Intrinsic Spin Angular Momentum Is Quantized in Magnitude and Direction | $S$, $S_z$, spin up and down, the Intrinsic Spin note, the summary paragraph, Table 30.1, Figure 30.53, the closing paragraph |

## Concepts

All twelve are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `quantum-number` | `quantum-numbers` | — |
| `principal-quantum-number` | `quantum-numbers` | reinforced in `intrinsic-spin` |
| `orbital-angular-momentum-magnitude` | `magnitude-of-angular-momentum` | used in `allowed-directions` |
| `angular-momentum-quantum-number` | `magnitude-of-angular-momentum` | reinforced in `intrinsic-spin` |
| `z-component-of-angular-momentum` | `direction-of-angular-momentum` | reinforced in `allowed-directions` |
| `angle-of-angular-momentum` | `allowed-directions` | — |
| `spin-quantum-numbers`, `spin-quantum-number`, `spin-projection-quantum-number`, `spin-angular-momentum-magnitude`, `spin-angular-momentum-z-component` | `intrinsic-spin` | — |
| `allowed-quantum-numbers` | `intrinsic-spin` | — |

Earlier concepts used: `quantized` (29.1), `hydrogen-like-energies` and `bohr-orbit-radii` (30.3) in `quantum-numbers`; `bohr-angular-momentum-quantization` (30.3), `orbital-angular-momentum` (30.7), `probability-cloud` (30.6) and `heisenberg-uncertainty-principle` (29.7) in `magnitude-of-angular-momentum`; `zeeman-effect` and `space-quantization` (30.7) in `direction-of-angular-momentum`; `components-from-magnitude-angle` (3.3) and `correspondence-principle` (29.1) in `allowed-directions`; `intrinsic-spin` and `fine-structure` (30.7), `probability-cloud` and `heisenberg-uncertainty-principle` in `intrinsic-spin`.

## Types the page binds

`angular-momentum` ($L$, $L_z$, $S$, $S_z$ through `\kL`, `\kLz`, `\kSspin`, `\kSz`), `angle` ($\theta$ through `\ktheta`, in the example and the 3D scene's arc), `energy` ($E_n$ once, `\kEn`), `position` (the scale bar of the probability clouds, $a_{\text{B}}$ through `\kaB`). Quantum numbers $n$, $l$, $m_l$, $s$, $m_s$ and $h$ are ink. The chapter's `COLOR.md` names angular momentum and angle for 30.8; the two others are asked for below. The variables rows of 30.8 carry no $\theta$, so `\ktheta` and its subscripts are asked for below.

Referents: the three orientations of $L$ for $l = 1$ that the example and Figure 30.52 both name, `ml-plus-one`, `ml-zero`, `ml-minus-one` (`COLOR.md`). Each cone of the scene wears its referent's colour; the arrows on them keep the angular-momentum hue, the arcs the angle hue. The cones for $m_l = \pm 2, \pm 3$ are instances the text never names and take `F.cat`. Electrons in the cloud figure are `F.el('e-')`.

## Figures

```
sim-allowed-directions · Figure 30.52 · z-component-of-angular-momentum, angle-of-angular-momentum, orbital-angular-momentum-magnitude · value add: 3D visualization impossible in the book (L lies anywhere on a cone about z whose angle m_l fixes, the "cones as illustrated" of the example's discussion that the book draws only as flat ellipses) and variation by choice (l from 0 to 3 opens 2l + 1 cones, and the smallest angle closes toward z as l grows, the correspondence argument) · arrows: symbolic (L and L_z are vectors as notation; nothing moves) · still: an allowed direction is a state, nothing in the idea has a clock · choices: l (0, 1, 2, 3; 1 by default, the example's) and m_l (−3 to +3, only −l to l shown; +1 by default, θ₁ of the example), both discrete states · headline: "With l = 1 there are 3 allowed angles; m_l = +1 puts L at 45.0° to the z-axis, anywhere around its cone." · no graph; readout θ = cos⁻¹(L_z/L) = cos⁻¹(m_l/√(l(l+1))) with the live numbers, and a note giving the one length every arrow shares, L = √(l(l+1)) h/2π in J·s · mathematical 3D (rule 28.3): ink axis, cones and rims in their referent colours, L and L_z in the angular-momentum hue, θ's arc in the angle hue, no ground, free orbit (yaw free, pitch ±90°), snap views "across z" (the book's view, slightly above) and "along z" (looking down the axis, where every L of one cone is seen to have the same length of projection), zoom buttons, auto-rotate off by default; the camera's zoom glides with l so the largest cone stays framed (manim-style 7); flat fallback without WebGL draws the book's side view
sim-probability-clouds · Figure 30.53 · probability-cloud, principal-quantum-number, angular-momentum-quantum-number, allowed-quantum-numbers · value add: flow by animation (the text's "repeated measurements… each measurement finds the electron in a definite location… the pattern of probability emerges": each measurement is a dot, and the cloud builds up out of them) and variation by choice (the book's ten states, one at a time, at one fixed scale so that the cloud grows with n as the book draws it) · arrows: none · moving: the measurements arrive, 4000 dots over 5 s, holding 1.2 s, linear; the samples are fixed per state so scrubbing back is exact · choice: the state (n, l, m_l), a dropdown of the book's ten, (3, 2, ±1) by default (the caption's example) · headline: "After 2000 measurements in the (3, 2, ±1) state, the dots crowd where the electron is most often found." · no graph; the slice through the z-axis on a fixed scale of ±24 a_B with a 10 a_B bar and a legend dot; readout L = √(l(l+1)) h/2π with the state's numbers · 2D: a cross-section through the z-axis shows the nodes (the rings of (3, 0, 0), the gap between the lobes of (2, 1, 0)) that a turning point cloud would blur, and every state is symmetric about z, so the slice loses nothing; the book's shaded 3D renderings stay one click away as the original
```

Labels on sim-allowed-directions: "z-axis", L and L_z on the chosen orientation, θ at its arc, the chosen cone's m_l at its rim; at most five, and seen along z the three that sit on the axis (z-axis, L_z, θ) are not drawn. Every other cone, rim and arrow is named by hover ("the cone of directions L may take with m_l = +2"). On sim-probability-clouds: z at the axis, the scale bar, the legend; the dots are a kind, named once in the legend.

Motion: Figure 30.52 is still (no transport). Figure 30.53 moves, since the text's idea has a clock in it: measurement after measurement.

Widths: 250 (30.52), 400 (30.53).

## Tables

Table 30.1 Atomic Quantum Numbers stays in the text as a `div.book-table`, its footnote on $s$ as a `p.tnote`.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_31_08_00a.jpg` (30.52) | original of `sim-allowed-directions` | replaced |
| `Figure_31_08_01a.jpg` (30.53) | original of `sim-probability-clouds` | replaced |

## Extra simulations considered

- The spin of 30.51 as a cone pair at 54.7° and 125.3° in the same scene. Left: 30.7 draws spin up and down, and the one keyed problem on those angles needs no figure.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Conceptual question | 4 | 4 (AI suggested approaches) | — |
| Problem | 9 | 5 keyed (`fs-id1599368`, `fs-id3354859`, `fs-id2663083`, `fs-id957081` written in full for $l = 3$, `fs-id2991428`) | 4 unkeyed: `fs-id3033541`, `fs-id2659412`, `fs-id2442300`, `fs-id3449672` |

No AP items; nothing moves in or out (`ch30` notes).

## Errata kept as printed, named in `notes`

The example's "the maximum value of $m_l = 0$, namely $m_l = l$"; the summary paragraph's "$l = 1, 2, 3, \ldots, n - 1$" (the rule starts at 0); Figure 30.53's caption giving the ground state as (0, 0, 0). The example's `º` is written `^\circ`.

## Wanted at chapter level

- anchors: `eq-principal-quantum-number` → 30.8-quantum-numbers; `eq-orbital-angular-momentum` → 30.8-magnitude-of-angular-momentum; `eq-z-component-angular-momentum` → 30.8-direction-of-angular-momentum; `eq-angle-of-angular-momentum` → 30.8-allowed-directions; `eq-spin-magnitude` → 30.8-intrinsic-spin; `eq-spin-projection` → 30.8-intrinsic-spin; `eq-spin-angular-momentum-magnitude` → 30.8-intrinsic-spin; `eq-spin-angular-momentum-z-component` → 30.8-intrinsic-spin
- variables row `30.8/θ`, type angle, "the angle between the angular momentum $L$ and the $z$-axis"; symbol `θ_3` ($\theta_3$, macro `\kthetathree`) and variables rows `30.8/θ_1`, `30.8/θ_2`, `30.8/θ_3` with `ref` `ml-plus-one`, `ml-zero`, `ml-minus-one`, then the text's `\ktheta_1`, `\ktheta_2`, `\ktheta_3` swapped for the macros
- `ch30/COLOR.md` 30.8 row: the page binds `angular-momentum`, `angle`, `energy` (one $E_n$) and `position` (the clouds' scale bar)
- concepts `spin-quantum-numbers` and the pair `spin-angular-momentum-magnitude` + `spin-angular-momentum-z-component` state the same two forms twice (`eq-spin-magnitude` = `eq-spin-angular-momentum-magnitude`, `eq-spin-projection` = `eq-spin-angular-momentum-z-component`); fold `spin-quantum-numbers` into the other two or drop the duplicate forms
- edges not Hasse-reduced: drop `angular-momentum-quantum-number · quantum-number` (through `principal-quantum-number`), `allowed-quantum-numbers · quantum-number` (through `z-component-of-angular-momentum`), `spin-quantum-numbers · intrinsic-spin` (through `spin-quantum-number`)
- concept `orbital-angular-momentum-magnitude` has no symbol or type; its symbol is `L` and its type `angular-momentum` (the variables row `30.8/L` names `orbital-angular-momentum`; leave it or point it here)

Applied by the chapter pass (2026-10-05): all anchors as listed, and the nine rows anchored; rows `θ`, `θ_1`, `θ_2`, `θ_3` (with symbol `θ_3`, `\kthetathree`) and `E_n`, the text's subscripted thetas swapped for the macros; the forms `eq-spin-magnitude` and `eq-spin-projection` removed from `spin-quantum-numbers`, which keeps its statement because Chapter 33 rests on it; the three edges dropped; `orbital-angular-momentum-magnitude` takes symbol `L` and type `angular-momentum`, and the row `30.8/L` now names it. Example 30.4 is renumbered 30.3.

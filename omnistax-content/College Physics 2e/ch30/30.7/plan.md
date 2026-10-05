# Plan: 30.7 Patterns in Spectra Reveal More Quantization

Written before the page was built (root rule 5), under `ch30/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints no header in this module; the four are OmniStax's, cut where
the subject turns.

| Span | Header | What it holds |
|---|---|---|
| `zeeman-effect` | The Zeeman effect | The opening paragraph, Lorentz and Zeeman, the spread proportional to the field, Figure 30.47 |
| `orbits-in-a-field` | An orbit in a magnetic field | The orbit as a current loop, $B_{\text{orb}}$ along $L_{\text{orb}}$, the torque and the energy of a tilted orbit, Figure 30.48 + 30.49 |
| `space-quantization` | Space quantization | The direction of orbital angular momentum is quantized |
| `fine-structure-and-spin` | Fine structure and electron spin | Doublets, Goudsmit and Uhlenbeck, intrinsic spin and $B_{\text{int}}$, spin up and down, Figure 30.50 + 30.51, MRI |

## Concepts

All seven are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `zeeman-effect` | `zeeman-effect` | reinforced in `orbits-in-a-field` |
| `orbital-magnetic-field` | `orbits-in-a-field` | used in `fine-structure-and-spin` |
| `orbital-angular-momentum` | `orbits-in-a-field` | used in `space-quantization` |
| `space-quantization` | `space-quantization` | reinforced in `fine-structure-and-spin` |
| `fine-structure` | `fine-structure-and-spin` | — |
| `intrinsic-spin` | `fine-structure-and-spin` | — |
| `intrinsic-magnetic-field` | `fine-structure-and-spin` | — |

Earlier concepts used: `discrete-atomic-spectra` (30.3) and `magnetic-force-on-a-moving-charge` (22) in `zeeman-effect`; `field-at-the-centre-of-a-loop`, `torque-on-a-current-loop` (22) and `planetary-model` (30.2) in `orbits-in-a-field`; `bohr-angular-momentum-quantization` (30.3) in `space-quantization`; `angular-momentum` (10.5) in `fine-structure-and-spin`.

## Types the page binds

`magnetic-field` (B_ext, B_orb, B_int), `angular-momentum` (L_orb, S), `angle` (the angle to the field in two readouts) and `energy` (the spacing of Zeeman lines in one readout). The chapter's `COLOR.md` gives 30.7 only the first two; the other two are asked for below. The section has no variables rows: the text writes the four subscripted symbols the book prints through the book's macros with the subscript added (`\kBmag_{\text{orb}}`, `\kL_{\text{orb}}`), so they wear their type, and $S$ is `\kSspin`; the symbol rows they want are asked for below. Spectral lines here belong to no named element and no stated wavelength, so they are ink, never a false colour. The electron is `F.el('e-')` and the nucleus `F.el('p+')`. No referents: nothing in the text is one particular thing a figure draws.

## Figures

```
sim-zeeman · Figure 30.47 · zeeman-effect · value add: variation by slider (the field opens each line into three or five and the reader sees the spread grow in proportion, the book's (a), (b) and (c) being three positions of one slider) and standardisation · arrows: none (the dashed guides are notation) · still: the splitting answers the field and nothing in the idea has a clock · slider: B_ext (magnetic-field, 0 to 2.00 T, 1.00 T by default; a dashed circle at 0, "no field", the book's (a)) · headline: "In a 1.00-T field the left line splits into three lines and the right into five." · no graph: two spectrum strips, the field-free one above as the book's (a) and the live one below, dashed guides between; readout ΔE = (5.79 × 10⁻⁵ eV/T) B_ext, the spacing of neighbouring lines, with a bracket on the triplet · 2D, a relation between quantities (rule 28.1)
sim-orbit-in-field · Figure 30.48 + 30.49 · orbital-magnetic-field, orbital-angular-momentum, space-quantization, zeeman-effect · value add: flow by animation (the electron circling is the current loop that makes B_orb) and variation by choice (one of the five allowed directions of L_orb, each tilting the orbit, and the line of the five-line Zeeman pattern that orientation gives lights up, so each split line is seen to belong to one angle, as the caption of 30.49 says) · arrows: kinematic (the electron's motion round the orbit, Figure 30.48's velocity arrow, which the moving electron replaces); L_orb, B_orb and B_ext symbolic · moving: the electron circles the orbit twice in a 5 s loop holding 1.2 s, linear · choice: θ, the angle of L_orb to B_ext, 35.3°, 65.9°, 90°, 114.1°, 144.7° (the five directions the book draws, the angles of a five-line pattern), a discrete state, 35.3° by default (Figure 30.48's tilt); the change crossfades, since no angle between two allowed ones exists · headline: "With L_orb at 35.3° to the field, B_orb points away from it and the orbit has the highest of five energies." · graph beside: the five lines of the right-hand line of Figure 30.47 in a 1.00-T field, the chosen one marked · locked view (rule 28.2): the book draws the orbit in perspective; the five directions lie in one plane, so a fixed view from slightly above reads the angle and the tilt, and the freedom of direction round z (cones) is 30.8's lesson, not this one
sim-spin-doublet · Figure 30.50 + 30.51 · intrinsic-spin, intrinsic-magnetic-field, fine-structure · value add: flow by animation (the electron's crude picture, a charge spinning on its axis) and variation by choice (spin up or down sets B_int at one of its two angles and picks one line of the doublet, which is why a line is two) · arrows: kinematic (the curl round the electron in 30.51, its spin); B_orb, B_int symbolic; the curved arrows of 30.50 are magnifier callouts, notation · moving: the electron turns on its axis, three turns in a 5 s loop holding 1.2 s; it stays where the book puts it on the orbit, so its labels sit still · choice: spin up or spin down, a discrete state, up by default; the change crossfades · headline: "Spin up: B_int makes 54.7° with B_orb, and the electron's level gives one line of the doublet." · graph beside: two spectral lines with one magnified into its doublet, the chosen one marked · locked view (rule 28.2), as the book's perspective orbit
```

Labels on sim-orbit-in-field: B_ext (z-axis), L_orb, B_orb, θ at the arc, the strip's axis title; five. The electron moves, so it is named by hover only; the faint unchosen directions and the nucleus by hover. On sim-spin-doublet: B_orb, B_int, θ, the strip's axis title, "magnified"; the electron and nucleus by hover. On sim-zeeman: the two strips' field values and the axis title; the lines by hover.

Readouts: sim-zeeman writes $\Delta E = (5.79\times10^{-5}\ \text{eV/T})\,B_{\text{ext}}$ with the live field; sim-orbit-in-field writes $\theta$ of the chosen direction; sim-spin-doublet writes $\theta = 54.7^\circ$ or $\theta = 180^\circ - 54.7^\circ = 125.3^\circ$, the angle of B_int to B_orb. No notes: each would repeat a headline.

Widths: 350 (30.47); 225 and 200 (30.48, 30.49); 225 and 200 (30.50, 30.51).

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_31_07_00a.jpg` (30.47) | original of `sim-zeeman` | replaced |
| `Figure_31_07_01a.jpg` (30.48) | original of `sim-orbit-in-field` | folded |
| `Figure_31_07_02a.jpg` (30.49) | original of `sim-orbit-in-field` | folded |
| `Figure_31_07_03a1.jpg` (30.50) | original of `sim-spin-doublet` | folded |
| `Figure_31_07_04a.jpg` (30.51) | original of `sim-spin-doublet` | folded |

## Extra simulations considered

- A 3D scene of the allowed directions as cones about $z$. Left: that is Figure 30.52 in 30.8, where $l$ and $m_l$ give the cones their angles; here the book draws the directions in one plane.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Conceptual question | 1 | 1 (AI suggested approach) | — |

No problems or AP items in the module; none moved in or out (`ch30` notes).

## Wanted at chapter level

- symbols `B_orb` ($B_{\text{orb}}$, magnetic-field), `B_int` ($B_{\text{int}}$, magnetic-field), `B_ext` ($B_{\text{ext}}$, magnetic-field), `L_orb` ($L_{\text{orb}}$, angular-momentum), with macros `\kBorb`, `\kBint`, `\kBext`, `\kLorb`; then variables rows for 30.7 (`B_orb` → `orbital-magnetic-field`, `B_int` → `intrinsic-magnetic-field`, `B_ext` → `magnetic-field`, `L_orb` → `orbital-angular-momentum`, `S_spin` → `intrinsic-spin`), and the text's and figures' `\kBmag_{\text{orb}}`, `\kBmag_{\text{int}}`, `\kBmag_{\text{ext}}`, `\kL_{\text{orb}}` swapped for them
- variables `ΔE` → 30.7-zeeman-effect, meaning "the energy between neighbouring lines of a Zeeman triplet"; `θ` → 30.7-orbits-in-a-field, "the angle between an angular momentum or its field and the field it lies in"
- `ch30/COLOR.md` 30.7 row: the page binds `magnetic-field`, `angular-momentum`, `angle`, `energy`
- No concept or edge row needs changing.

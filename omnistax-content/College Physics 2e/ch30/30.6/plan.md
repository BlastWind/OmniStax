# Plan: 30.6 The Wave Nature of Matter Causes Quantization

Written before the page was built (root rule 5), under `ch30/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints no headers in this module; all four are OmniStax's, at the
places the argument turns. The module's opening paragraph is its own
introduction and stays at the top of the first block.

| Span | Header | What it holds |
|---|---|---|
| `allowed-orbits` | Waves in an orbit | The opening paragraph, de Broglie's waves bound in an atom, Figure 30.44 + 30.45 |
| `orbit-condition` | The condition for an allowed orbit | $n\klamorb = 2\pi\krn$, the de Broglie substitution, $\kL = \kme\kv\krn = nh/2\pi$, the note Waves and Quantization |
| `probability-cloud` | Clouds of probability | The probability cloud of the ground state, Figure 30.46 |
| `bound-systems` | Quantization in bound systems | The particle in a box, large systems and the correspondence principle, unbound systems |

## Concepts

The three are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `electron-standing-wave-orbit` | `allowed-orbits` | reinforced in `orbit-condition`, `bound-systems` |
| `angular-momentum-quantization-from-waves` | `orbit-condition` | — |
| `probability-cloud` | `probability-cloud` | — |

Earlier concepts used: `de-broglie-wavelength` (29.6), `constructive-interference` and `standing-wave` (16.10), `bohr-angular-momentum-quantization`, `bohr-orbit-radii`, `bohr-radius`, `limits-of-bohr-theory` (30.3), `angular-momentum` (10.5), `position-momentum-uncertainty` (29.7), `correspondence-principle`, `quantized`, `blackbody` (29.1).

## Types the page binds

`position` (the orbit radius $r_n$, the wavelength $\lambda_n$, the Bohr radius $a_{\text{B}}$, the circumference) and `angular-momentum` (the note under Figure 30.44 + 30.45's readout). The text also colours $\kv$, $\kme$, $\kp$, and the summary's $\kdE$, $\kEini$, $\kEfin$ and $\kf$; no figure draws them. Planck's $h$, $n$ and counts of measurements are ink. Conventions: the electron's wave and the specks of the cloud are `F.el('e-')`, the nucleus `F.el('p+')`. No facts, no referents: nothing in the text is named one by one.

## Figures

```
sim-orbit-wave · Figure 30.44 + 30.45 · electron-standing-wave-orbit, angular-momentum-quantization-from-waves · value add: variation by slider (the radius swept continuously, so the reader sees the wave close on itself only at the orbits r_n = n²a_B and miss everywhere between, where the book draws one allowed orbit, one forbidden orbit and the pair n = 3, 4) and standardisation (30.44's string and orbits and 30.45's pair are one drawing: the orbit and the same wave unrolled into a string) · arrows: symbolic (the radius arrows, the λ arcs of 30.45 and the leaders are notation; the several outlines of 30.44(a)'s string are the notation for a standing wave, not a path) · still: whether a wave fits is a condition of the radius, not a history, so nothing has a clock · slider: r_n (position, 0.030 to 0.900 nm, 0.476 nm = 9a_B by default, n = 3 as in 30.44(b) and the inner orbit of 30.45; dashed circles at n²a_B for n = 1 to 4 with a slight snap; landing on one morphs the readout's ratio into nλ_n = 2πr_n) · the wavelength follows the radius: v from the Coulomb force as the centripetal force (30.3), λ = h/m_e v = 2π√(r a_B), so 2πr/λ = √(r/a_B) · headline: "Exactly 3 wavelengths fit round the orbit, so the wave meets itself crest to crest: an allowed orbit." or "2.75 wavelengths fit round the orbit, so the wave comes back out of step with itself: a forbidden orbit." · graph beside: the orbit unrolled into a string, the wave against distance s along the orbit (0 to 7 nm, fixed: 2π × 0.900 nm = 5.65 nm plus one wavelength of 1.37 nm), brackets for 2πr and λ, past the end a faded second trip beside the dashed wave as it began · 2D, a relation in one plane (rule 28.1)
sim-probability-cloud · Figure 30.46 · probability-cloud · value add: flow by animation (each speck is one measurement and the cloud builds up from them one at a time, which the book's finished shading cannot show) and a count of the measured distances that crowds round a_B, the most probable distance the book labels · arrows: symbolic (the radius arrow and the leaders) · moving: measurements arrive one by one, slowly at first and then faster, 1500 in a 6 s loop holding 1.2 s, because the text describes a cloud built by repeated measurement · no slider: the book draws one state, the ground state, and nothing in the passage varies · headline: "412 measurements so far; each finds the electron at one place, and their distances from the nucleus crowd round a_B." · graph beside: measurements against r, 0 to 0.25 nm in bins of 0.01 nm, 0 to 200 counts, fixed (the peak bin expects 153 at 1500), the expected count dashed, a_B marked · locked view (rule 28.2): the book draws the three axes through the nucleus in perspective, and the specks are points in space projected from that view; no orbit, since the cloud of the ground state is the same from every side
```

Labels on `sim-orbit-wave`: the radius $r$ with its value, "electron wave", "allowed orbits" on the outermost dashed circle, the brackets $2\pi r$ and $\lambda$ on the string; five. The four dashed orbits are told apart by hover names, since $n = 1$ and $n = 2$ are too close to the nucleus to letter; the seam, the second trip and the dashed first trip carry hover names. Labels on `sim-probability-cloud`: "nucleus", "$r_1 = a_B$" beside the radius arrow and the $a_B$ line on the graph; three. The specks are one kind and named by a hover on the latest one.

The readout of `sim-orbit-wave` writes $2\pi\krn/\klamorb$ with its numbers, always true; on an allowed orbit it becomes $n\klamorb = 2\pi\krn$. Its note is the fact the count makes visible, $\kL = h\krn/\klamorb = N\,h/2\pi$. The readout of `sim-probability-cloud` splits the count so far into those nearer than $\kaB$ and those farther, a sum true as written; its note says why the projected cloud looks densest over the nucleus although the electron is seldom found that close.

Widths: 450 and 225 for Figure 30.44 + 30.45, 225 for 30.46.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_31_06_00a.jpg` (30.44) | original of `sim-orbit-wave` | replaced |
| `Figure_31_06_01a.jpg` (30.45) | original of `sim-orbit-wave` | folded: the same orbit and wave, drawn again for n = 3 and 4 |
| `Figure_31_06_02a.jpg` (30.46) | original of `sim-probability-cloud` | replaced |
| `ch30_M6_wave.jpg` (AP items) | kept on the cards of `ap1` and `ap2` | both questions read it; per `config.md`, an exercise image travels on the card |

## Extra simulations considered

- The particle in a box, its allowed wavelengths as the box narrows. Left: the text names the model in one sentence and no exercise uses it; the unrolled string of Figure 30.44 + 30.45 already shows a wavelength that must fit a length.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| AP test prep | 4 | 4 (open, AI suggested approaches; `ap1` and `ap3` with the book's options) | — |
| Conceptual question | 1 | 1 (AI suggested approach) | — |
| Problem | 0 | — | — |

No item in the module carries a solution in the CNXML. No exercise moves in or out.

## Tables

None.

## Wanted at chapter level

- `eq-standing-wave-orbit` → 30.6-orbit-condition
- `eq-wave-orbit-substituted` → 30.6-orbit-condition
- variables for 30.6: `L` (angular-momentum, `angular-momentum`), `v` (`velocity`), `m_e` (`mass`), `λ` (`wavelength`), `p` (`linear-momentum`), `m` (`mass`), `n` (untyped) → 30.6-orbit-condition; `a_B` (`bohr-radius`) → 30.6-probability-cloud; and for the summary `ΔE`, `E_ini`, `E_fin`, `f`, the meanings of 30.3
- edge `electron-standing-wave-orbit` ← `de-broglie-wavelength` (29.6)
- edge `probability-cloud` ← `position-momentum-uncertainty` (29.7)
- `ch30/COLOR.md` 30.6 row stands: `position`, `angular-momentum`.
- No concept or symbol row needs changing.

Applied by the chapter pass (2026-10-05): both forms and both rows anchored; the rows added as listed, with `r` besides, the summary's `ΔE`, `E_ini`, `E_fin`, `f` anchored at `orbit-condition`; edges `electron-standing-wave-orbit` ← `de-broglie-wavelength` (dropping `constructive-interference`) and `probability-cloud` ← `position-momentum-uncertainty`.

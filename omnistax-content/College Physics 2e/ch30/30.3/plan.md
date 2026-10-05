# Plan: 30.3 Bohr’s Theory of the Hydrogen Atom

Written before the page was built (root rule 5), under `ch30/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints three headers (Mysteries of Atomic Spectra, Bohr’s Solution for
Hydrogen, Triumphs and Limits of the Bohr Theory). The opening paragraph has none,
and the long middle part is split at its changes of subject, as 29.3 did; those
headers are OmniStax’s. Example 30.1 is an `<h3>` span of its own.

| Span | Header | What it holds |
|---|---|---|
| `bohr-and-the-atom` | Bohr and the Planetary Model | The opening paragraph and Figure 30.13 |
| `mysteries-of-atomic-spectra` | Mysteries of Atomic Spectra | Discrete spectra, Figure 30.14, the hydrogen series, $1/\klam = R(1/n_{\text{f}}^2 - 1/n_{\text{i}}^2)$, $R$, Figure 30.15 |
| `hydrogen-line-example` | Example 30.1 | The second Balmer line, 486 nm, through a grating at 15° |
| `bohr-solution` | Bohr’s Solution for Hydrogen | Quantized orbits, $\kdE = h\kf = \kEini - \kEfin$, Figure 30.16 + 30.17 + 30.18 + 30.19, the energy-level diagram |
| `quantized-angular-momentum` | Quantized angular momentum | $\kL = m_{\text{e}}\kv\krn = nh/2\pi$, hydrogen-like atoms and $Z$, Coulomb = centripetal |
| `orbit-radii` | The radii of the allowed orbits | $\krn = (n^2/Z)\kaB$, the Bohr radius |
| `orbital-energies` | The orbital energies | $\kEn = \kKE + \kPEtot$, $\kEn = -(Z^2/n^2)\kEobohr$, $\kEobohr = 13.6$ eV, ionization |
| `rydberg-from-bohr` | Bohr’s formula for the spectrum | The downward transition, $R = 13.6\ \text{eV}/hc$, Balmer’s recipe derived |
| `triumphs-and-limits` | Triumphs and Limits of the Bohr Theory | The two closing paragraphs |

## Concepts

All fourteen are the prep pass’s rows; the page adds none.

| Concept | Introduced in |
|---|---|
| `discrete-atomic-spectra`, `hydrogen-spectrum-wavelengths`, `rydberg-constant` | `mysteries-of-atomic-spectra` |
| `bohr-transition-energy`, `energy-level-diagram-definition`, `energy-level-diagram` | `bohr-solution` |
| `bohr-angular-momentum-quantization`, `hydrogen-like-atom`, `atomic-number` | `quantized-angular-momentum` |
| `bohr-orbit-radii`, `bohr-radius` | `orbit-radii` |
| `hydrogen-like-energies`, `ionization-energy` | `orbital-energies` |
| `limits-of-bohr-theory` | `triumphs-and-limits` |

Reinforced: `hydrogen-spectrum-wavelengths` in `hydrogen-line-example` and `rydberg-from-bohr`, `rydberg-constant` and `bohr-transition-energy` in `rydberg-from-bohr`, `discrete-atomic-spectra` in `bohr-solution`, `bohr-angular-momentum-quantization` in `triumphs-and-limits`.
Earlier concepts used: `planetary-model` (30.2), `energy-quantization` (29.1), `photon-energy` (29.2), `wavelength` (16.9), `diffraction-grating` (27.4), `double-slit-constructive` (27.3), `angular-momentum` (10.5), `centripetal-force` (6.3), `coulombs-law` (18.3), `kinetic-energy` (7.2), `electric-potential-energy` (19.1), `potential-of-point-charge` (19.3), `plancks-constant` (29.1).

## Types the page binds

`energy` (every level, $\kdE$, $\kEn$, $\kEobohr$), `position` (the wavelength, $\krn$, $\kaB$, the grating’s $\kd$), `angle` (Example 30.1’s $\ktheta$, which Figure 30.14’s readout writes), `angular-momentum` ($\kL$), `rotational-inertia` and `angular-rate` (the $\kL = \kI\kw$ aside), `velocity` ($\kv$), `charge` ($\kqe$), `frequency` ($\kf$ in $h\kf$). $R$, $h$, $k$, $Z$, $n$, $n_{\text{i}}$, $n_{\text{f}}$, the order $m$ and $m_{\text{e}}$ are ink. Visible light and lines are drawn in their true colours through `spectral(nm)`, the piecewise fit 27.4 uses, through `F.fact` (rule 7’s first way; facts `spectrum`); a UV or IR photon is ink and its wavelength is read in the headline. The electron is `F.el('e-')`, the hydrogen nucleus `F.el('p+')`. The Lyman, Balmer and Paschen series are the section’s referents (`lyman`, `balmer`, `paschen`), drawn with `F.ref`, a visible Balmer line keeping its own colour as the fact.

## Figures

```
photo-bohr · Figure 30.13 · kept photograph: the text points at it ("([ref])") and it is the portrait of the man the section is about · still · 2D
sim-line-spectrum · Figure 30.14 · discrete-atomic-spectra · value add: flow by animation (light leaves the glowing tube, passes the slit, and the grating sends each wavelength off at its own angle to the film) and variation by choice (each element in the tube gives its own set of lines, the caption’s "unique to each element") · arrows: kinematic (the book’s arrows of light leaving the tube) · moving: pulses of light run from tube to slit to grating at one speed and on along every line’s ray to the film, a whole number of spacings a 5 s loop holding 1.2 s, because the book’s arrows are the light’s travel · choice: element (hydrogen, helium, neon, mercury, iron; iron by default, the book’s part (b)) · headline: "The light of iron leaves the grating only at certain angles, so the film records separate bright lines." · no graph: the film as developed is a strip beneath, 400 to 700 nm across, the book’s part (b) · 2D, seen from above so every angle is true (rule 28.1; the book’s perspective only shows that the plates are plates), with the grating of Example 30.1 (d = 1.88 μm, first order); the readout writes θ = sin⁻¹(mλ/d) for one named line of the element (hydrogen’s 486-nm line of Example 30.1, at 15.0°), which the scene marks with its angle arc
sim-hydrogen-series · Figure 30.15 · hydrogen-spectrum-wavelengths, rydberg-constant · value add: standardisation (the three series on one true logarithmic wavelength scale with the visible band in its colours, where the book breaks its axis) and variation by choice (any line of any series, its n_i and wavelength read in the formula, the lines crowding to the series limit) · arrows: none (the book’s curly leaders are notation) · still, the formula has no clock · choices: series (Lyman n_f = 1, Balmer n_f = 2, Paschen n_f = 3; Balmer by default) and line (1st to 5th, and the series limit; second by default, Example 30.1’s 486-nm line) · headline: "The second Balmer line, from $n_{\text{i}} = 4$, lies at 486 nm, in the visible." · no graph: the wavelength scale is the scene, 80 to 2000 nm, fixed · 2D
sim-bohr-atom · Figure 30.16 + 30.17 + 30.18 + 30.19 · bohr-transition-energy, energy-level-diagram, bohr-orbit-radii, hydrogen-like-energies · value add: flow by animation (the electron drops from its orbit and the photon it makes leaves the atom, both drawn on the orbits and on the level diagram at once), standardisation (the orbits drawn to scale, r_n ∝ n², and the levels on a linear energy axis, so the book’s four drawings of one atom become one) and variation by choice (any transition of the three series) · arrows: kinematic (the electron’s drop between orbits and the photon leaving, Figure 30.16); symbolic (the transition arrows of the level diagrams, 30.17 and 30.19, and the radius arrows of 30.18, drawn once and never moved) · moving: the electron circles orbit n_i at its Bohr speed (v ∝ 1/n, so ω ∝ 1/n³), drops to n_f while its dot on the level diagram drops along the transition arrow, and the photon runs out of the atom in its own colour, a 5 s loop holding 1.2 s, since a transition is an event in time · choices: n_i (2 to 6) and n_f (1 Lyman, 2 Balmer, 3 Paschen); 4 → 2 by default, the book’s E₄ → E₂; picking n_i at or below n_f moves the other to the nearest level that keeps n_i > n_f · headline: "Dropping from $n = 4$ to $n = 2$, the electron gives off a 2.55-eV photon of 486 nm, visible light." · graph beside: the energy-level diagram (0 to −13.6 eV, fixed) right of the orbits, the book’s 30.19 with all three series faint and the chosen transition bold · 2D, both are relations in a plane
```

Labels on sim-line-spectrum: discharge tube, slit, grating, film, θ and the named line’s wavelength, six; the other lines carry hover names (wavelength and angle). On sim-hydrogen-series the series brackets and their names are the frame, and only the chosen line is lettered ($n_{\text{i}}$ and its wavelength); every other line has a hover name. On sim-bohr-atom the two radius arrows are lettered ($r$ with the levels’ numbers), the level diagram’s rungs carry the frame’s $n$ and eV values for $n$ = 1 to 4 and ∞, the three series names sit under their groups and the chosen arrow carries $\kdE$; the orbits, the nucleus, the electron and the photon have hover names, since the electron and photon move.

No figure serves an exercise. The book’s widths are kept: 300 for 30.13, 500 for 30.14 and 30.15, and 250, 250, 300, 250 for 30.16 to 30.19.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_31_03_01a.jpg` (30.13) | kept, photo row | the text points at it |
| `Figure_31_03_02a.jpg` (30.14) | original of `sim-line-spectrum` | replaced; its part (b), iron’s spectrum, is the default state of the strip |
| `Figure_31_03_03a.jpg` (30.15) | original of `sim-hydrogen-series` | replaced |
| `Figure_31_03_04a.jpg` to `_07a.jpg` (30.16 to 30.19) | originals of `sim-bohr-atom` | folded |

## Extra simulations considered

- Hydrogen-like ions ($Z$ = 2 to 6) in sim-bohr-atom. Left: orbits shrink as $1/Z$ and energies deepen as $Z^2$, so one fixed scale either crushes hydrogen or pins every He⁺ level below the axis; the readout of $\kEn = -(Z^2/n^2)\kEobohr$ and the problems on He⁺, Be³⁺ and C⁵⁺ carry it.
- An absorption mode (photon in, electron up). Left: the book draws only emission in this section, and absorption is 30.5’s subject.

## Exercises

| Kind | In the module | Set here | Left out |
|---|---|---|---|
| AP test prep | 4 | 4 (2 keyed choices, 2 open with AI approaches; their solutions are commented out of the source) | — |
| Conceptual question | 3 + 2 from 30.5 | 5 (AI suggested approaches) | — |
| Problem | 18 + 4 from 30.9 | 13 | 9 unkeyed |

Moved in with `source_section`: 30.9 → `fs-id2378650` (receding galaxy), `fs-id1985082` (pulsar), `fs-id3065607` (muon in uranium), `exer-00001` (carbon transitions, classed `problem`; its printed solution writes $E_3 - E_2$ for the second step as well, kept as printed and named); 30.5 → conceptual `fs-id2601140`, `fs-id1397225`. Kept here: the correspondence-principle question `fs-id3172772` (30.2’s and 30.5’s reprints are left out there). Unkeyed problems left out: third Lyman line, verify $E_0$, $n$ for 0.850 eV, $13.6\ \text{eV}/hc = R$, the Paschen series in the IR, Balmer lines in the UV and visible, He⁺’s radius, C⁵⁺, the Balmer percentage difference.

## Wanted at chapter level

- `eq-hydrogen-wavelengths` → 30.3-mysteries-of-atomic-spectra
- `eq-rydberg-constant` → 30.3-mysteries-of-atomic-spectra
- `eq-bohr-transition` → 30.3-bohr-solution
- `eq-bohr-angular-momentum` → 30.3-quantized-angular-momentum
- `eq-bohr-radii` → 30.3-orbit-radii
- `eq-bohr-radius` → 30.3-orbit-radii
- `eq-orbital-energy-sum` → 30.3-orbital-energies
- `eq-hydrogen-like-energies` → 30.3-orbital-energies
- `eq-ground-state-energy` → 30.3-orbital-energies
- `eq-hydrogen-energies` → 30.3-orbital-energies
- variables `λ`, `R_ryd`, `n_f`, `n_i` → 30.3-mysteries-of-atomic-spectra; `ΔE`, `E_ini`, `E_fin` → 30.3-bohr-solution; `L`, `n`, `Z` → 30.3-quantized-angular-momentum; `r_n`, `a_B` → 30.3-orbit-radii; `E_n`, `E_0bohr` → 30.3-orbital-energies
- variables rows for 30.3 the text writes with macros and the chapter lacks: `v` (velocity, the electron’s orbital speed) → 30.3-quantized-angular-momentum; `q_e` (charge, the electron’s charge), `I` (rotational inertia), `ω` (angular rate) and `r` (position, a radius) → 30.3-quantized-angular-momentum; `f` (frequency, the photon’s frequency) → 30.3-bohr-solution; `KE`, `PE` (energy, the electron’s kinetic and electric potential energy) and `V_volt` (voltage, the potential due to the nucleus) → 30.3-orbital-energies; `c` (velocity, the speed of light) → 30.3-rydberg-from-bohr; `d` (position, the distance between slits) and `θ` (angle, the angle from the original direction of the beam) → 30.3-hydrogen-line-example
- `ch30/COLOR.md` 30.3 row: the page binds `energy`, `position`, `angle` (Example 30.1’s θ in Figure 30.14’s readout), `angular-momentum`, `rotational-inertia`, `angular-rate`, `velocity`, `charge`, `frequency`, `voltage`; the figures draw energy, position and angle.
- Edges from the notes, for the chapter pass: `photon-energy` (29.2) → `bohr-transition-energy`; `atomic-spectra-quantized` or `energy-quantization` (29.1) → `discrete-atomic-spectra`; `double-slit-constructive` (27.3) → `hydrogen-spectrum-wavelengths` (Example 30.1).
- No concept or symbol row needs changing.

Applied by the chapter pass (2026-10-05): all ten forms and fourteen rows anchored as listed; the new rows added as listed, with `m_e` and `m` besides (the text's $m_{\text{e}}$ and the $m$ of $L = mvr$ now written `\kme` and `\km`), `V_volt` and `d` marked `redefines` beside 30.2's; edges `bohr-transition-energy` ← `photon-energy` (dropping `conservation-of-energy`, now reached through it) and `discrete-atomic-spectra` ← `atomic-spectra-quantized` (dropping `atomic-spectra` and `electromagnetic-spectrum`); no edge from the double slit into `hydrogen-spectrum-wavelengths`, since the law does not rest on it and Example 30.1's block already uses `double-slit-constructive` and `diffraction-grating`; `COLOR.md` row as asked, with mass.

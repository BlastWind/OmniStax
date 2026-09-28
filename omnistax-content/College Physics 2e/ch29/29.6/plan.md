# Plan: 29.6 The Wave Nature of Matter

Written before the page was built (root rule 5), under `ch29/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book's own two narrative headers, the worked example a span of its own, and
the Making Connections box on Bragg reflection a span of its own, since it
carries the section's second equation.

| Span | Header | What it holds |
|---|---|---|
| `de-broglie-wavelength` | De Broglie Wavelength | De Broglie's proposal, $\klam = h/\kp$, the bowling ball, Davisson, Germer and Thomson, Figure 29.18, the Connections note |
| `electron-wavelength-example` | Example 29.7 | The 0.167-nm electron: its speed and its 54.0 eV |
| `electron-microscopes` | Electron Microscopes | Resolution and wavelength, the TEM and SEM, Figure 29.19, other particles |
| `bragg-reflection` | (the Making Connections box) | Planes of atoms as a grating, Figure 29.20, $n\klam = 2\kd\sin\theta$ |

## Concepts

All six are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `de-broglie-wavelength` | `de-broglie-wavelength` | used in the example and in `bragg-reflection` |
| `wave-effects-need-matching-size` | `de-broglie-wavelength` | reinforced in `electron-microscopes` and `bragg-reflection` |
| `electron-diffraction` | `de-broglie-wavelength` | used in `bragg-reflection` |
| `electron-wavelength-and-energy` | `electron-wavelength-example` | used in `electron-microscopes` (the 54-V electrons) |
| `electron-microscope` | `electron-microscopes` | — |
| `bragg-equation` | `bragg-reflection` | — |

Earlier concepts used: `photon-momentum` (29.4) in `de-broglie-wavelength`.

## Types the page binds

`position` (λ, d, the path length difference), `momentum` (p), `velocity` (v), `energy` (KE). Planck's constant, the mass, the order n and the angle θ are ink. Atoms of the crystal are `F.el('Ni')`, the nickel of Davisson and Germer's crystal, named on hover; an electron is `F.el('e-')`. No photon is drawn, so no wavelength colour appears.

## Figures

```
photo-silicon-diffraction · Figure 29.18 · electron-diffraction · kept photograph: the text points at it and it is the evidence · still · none · — · none · 2D
sim-de-broglie · Sim · de-broglie-wavelength, wave-effects-need-matching-size, electron-wavelength-and-energy · value add: variation by choice and slider (a bowling ball, an electron, a proton or a neutron at any speed) and standardisation on one log axis of length, where the λ of each lands among an atom, a nucleus and visible light · still: no time in it · choice: the particle (bowling ball 3 kg, electron by default, proton, neutron), a discrete set (rule 26.1); slider v (velocity; its range follows the particle, 1 to 20 m/s for the ball, 0.5 to 10 × 10⁶ m/s for the others, 4.36 × 10⁶ m/s by default, so Example 29.7 is the opening state) · headline: "An electron moving at 4.36 × 10⁶ m/s has a de Broglie wavelength of 0.167 nm, about the spacing of atoms in a crystal." · graph below: a log axis of length, 10⁻³⁶ to 10⁻⁶ m, fixed · 2D
photo-sem · Figure 29.19 · electron-microscope · kept photograph: the text points at it twice; the schematic and the photograph are one image, and the schematic is a labelled diagram with nothing varying (rule 24.3 gate fails) · still · none · — · none · 2D
sim-bragg · Figure 29.20 · bragg-equation, electron-diffraction, de-broglie-wavelength · value add: variation by slider (electron speed, plane spacing, angle) and intuition: the two electron waves are drawn along their paths at the crystal's own scale, so the reader sees their crests line up on leaving exactly when the path length difference is a whole number of wavelengths · still: the idea is a relation between angle and path difference, which the slider shows exactly · sliders: v (velocity, 2 to 10 × 10⁶ m/s, 4.36), d (position, 0.05 to 0.25 nm, 0.091, the nickel spacing of the AP item), θ (untyped, 5 to 90°, dashed circles at every θ with nλ = 2d sin θ, opening on the first) · headline: "At θ = 66.6° the path length difference is 1.00 λ, and the electrons interfere constructively." · graph beside: intensity against θ, 0 to 90°, fixed, for four planes · 2D, a relation between paths in a plane (rule 28.1)
```

Labels: sim-de-broglie labels the particle's marker and the three reference lengths (atom, nucleus, visible light), four; sim-bragg labels d, the PLD (the highlighted path A to B to C), θ and the two crystal planes by hover only, four drawn. The Bragg peaks' order n is written on the graph at each peak.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_30_06_01a.jpg` (29.18) | kept, photo row | the text points at it and it is the evidence of the section |
| `Figure_30_06_02a.jpg` (29.19) | kept, photo row | the text points at it twice; one image holds the schematic and the shark tooth |
| `Figure_30_06_03a.jpg` (29.20) | original of `sim-bragg` | replaced |

## Extra simulations considered

- An electron microscope's resolution against the accelerating voltage beside an optical microscope's. Left: the de Broglie sim already puts 54-V electrons against visible light on one axis.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| AP test prep | 4 | 4 (2 keyed choices, 2 open with AI approaches) | — |
| Conceptual question | 3 | 3 (AI suggested approaches) | — |
| Problem | 13 | 7 | 6 unkeyed |

Erratum kept as printed and named in `notes`: the key to `fs-id1308269` gives the velocity in m. The conceptual question `fs-id1278570` is tagged to `photoelectric-effect` and `compton-effect` too.

## Tables

None.

## Wanted at chapter level

- `eq-de-broglie-wavelength` → 29.6-de-broglie-wavelength
- `eq-electron-speed-from-wavelength` → 29.6-electron-wavelength-example
- `eq-bragg-equation` → 29.6-bragg-reflection
- variables `m`, `v` → 29.6-electron-wavelength-example; `d`, `θ` → 29.6-bragg-reflection
- No concept, edge or symbol row needs changing.

Applied by the chapter pass (2026-09-28): all three equation anchors and four variable anchors as asked. Example 29.7 is the 54.0-eV, 0.167-nm electron that 29.8's first problem cites.

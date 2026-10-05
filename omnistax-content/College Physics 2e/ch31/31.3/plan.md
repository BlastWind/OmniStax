# Plan: 31.3 Substructure of the Nucleus

Written before the page was built (root rule 5), under `ch31/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints one header, Nuclear Forces and Stability, two thirds of the way
down; the other headers are OmniStax's, set where the text turns to a new
question. The opening paragraph is the module's own introduction and stays as the
first block. Example 31.1 is an `<h3>` span of its own.

| Span | Header | What it holds |
|---|---|---|
| `inside-the-nucleus` | What is inside the nucleus? | The opening questions and Figure 31.10 |
| `nucleons` | Protons and neutrons | Nucleons, the neutron, the masses of Table 31.2, the unified atomic mass unit, MeV/$c^2$ and $E = mc^2$ |
| `nuclides` | Nuclides | The notation ${}^{A}_{Z}\text{X}_{N}$, the atomic number, the mass number $A = N + Z$, the mass close to $A$ u |
| `isotopes` | Isotopes | The three hydrogens, the α particle, isotopes and the simpler notation ${}^{A}\text{X}$ |
| `nuclear-size` | The size of a nucleus | The packed ball, $r = r_0 A^{1/3}$, Figure 31.11 and the paragraph under it |
| `nuclear-density` | Example 31.1 · How Small and Dense Is a Nucleus? | The radius and density of ⁵⁶Fe |
| `nuclear-forces` | Nuclear Forces and Stability | The strong and weak nuclear forces and the energy of decay |
| `chart-of-the-nuclides` | The chart of the nuclides | The chart (Figure 31.12), the pattern of stable nuclei, magic numbers, Figure 31.13 |

## Concepts

All fifteen are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `nucleus` | `nucleons` | used in `inside-the-nucleus` (the opening question names it before the text defines it) |
| `nucleons` | `nucleons` | reinforced in `nuclear-size` |
| `neutron` | `nucleons` | — |
| `atomic-mass-unit` | `nucleons` | used in `nuclides`, `nuclear-density` |
| `nuclide` | `nuclides` | reinforced in `chart-of-the-nuclides` |
| `nuclide-notation` | `nuclides` | reinforced in `isotopes` |
| `mass-number` | `nuclides` | used in `nuclear-size`, `chart-of-the-nuclides` |
| `neutron-number` | `nuclides` | used in `chart-of-the-nuclides` |
| `atomic-mass` | `nuclides` | — |
| `isotopes` | `isotopes` | reinforced in `chart-of-the-nuclides` |
| `nuclear-radius` | `nuclear-size` | used in `nuclear-density` |
| `nuclear-density` | `nuclear-density` | — |
| `strong-and-weak-nuclear-forces` | `nuclear-forces` | used in `chart-of-the-nuclides` |
| `chart-of-the-nuclides` | `chart-of-the-nuclides` | — |
| `magic-numbers` | `chart-of-the-nuclides` | — |

Earlier concepts used: `alpha-beta-gamma-rays` and `nuclear-radioactivity` (31.1)
in `inside-the-nucleus`; `proton` (18.1), `rest-energy` (28.6) and `electron-mass`
(30.2) in `nucleons`; `atomic-number` (30.3) in `nuclides`; `volume` (1.4) in
`nuclear-size`; `density` (11.2) in `nuclear-density`; `coulombs-law` (18.3) and
`work` (7.1) in `nuclear-forces`.

## Types the page binds

`position` (the radius $r$ and $r_0$, the 4.6-fm radius and the sizes of nuclei
and atoms, the separation $r$ in the Coulomb force and the distance $d$ in the
work), `density` (nuclear density), `mass` ($m_\text{p}$, $m_\text{n}$,
$m_\text{e}$, $m$ in $E = mc^2$ and $\rho = m/V$, the 56 u of iron), `volume`
($V$ of a nucleus), `energy` ($E$, the 938.27 MeV and 931.5 MeV, the energies of
decay, the work $W$), `velocity` ($c$), `force` (the nuclear and Coulomb forces,
$F$ in the work), `charge` (the proton's charge, $q = 0$ for the neutron) and
`angle` ($\theta$ in the work). $Z$, $N$ and $A$ are counts and stay in ink,
as the book's `COLOR.md` says; $Z$ is written plainly, never `\kZ` (acoustic
impedance). Conventions: protons `F.el('p+')` and neutrons `F.el('n0')` in Figure
31.11, which overrides the book's blue and green. The chart of the nuclides is a
map of places: stable nuclides are filled ink dots and the band of unstable ones a
hollow outline, as `ch31/COLOR.md` asks, never a hue. No referents: the page
names no particular thing that a figure draws and the text points back at.

## Figures

```
photo-coal-uranium-cesium · Figure 31.10 · kept photograph: the opening questions are asked of it ("See Figure 31.10") · still · 2D
sim-nucleus-model · Figure 31.11 · nuclear-radius, nucleons, nuclear-density · value add: variation by slider (the mass number grows a ball of packed protons and neutrons while the graph beneath traces r = r₀A^{1/3}, so V ∝ A is seen as nucleons packed with no room between them) and 3D (the packing is an arrangement in space; a flat disc of packed circles would grow as A^{1/2} and misstate the law the section is about) · arrows: none · still: the book's nucleons move rapidly, but the idea drawn, how big a packing of A nucleons is, has no clock, and an idle spin of the camera carries the depth · slider: A (mass number, untyped count, 1 to 238, 56 by default for Example 31.1's ⁵⁶Fe; detents at 4, the α particle of the problems, 56 and 238, the ²³⁸U the text reads), the nucleus drawn as the stable nuclide of that A nearest the valley of stability, or the longest-lived where none is stable, so Z and N follow A · headline: "⁵⁶Fe packs 56 nucleons into a ball 4.6 fm in radius." · readout: r = r₀A^{1/3} = (1.2 fm)(56)^{1/3} = 4.6 fm; note: each nucleon adds the same volume, so ρ = 2.3 × 10¹⁷ kg/m³ at every A · graph below: r (fm, 0 to 8 fixed, 7.4 at A = 238) against A (0 to 250) with the current nucleus as a point and a drop line; a legend row above the graph names the proton and the neutron with their counts · 3D, physical class (rule 28.3, the matter's packing is the lesson), F.view3d with honest proportions: nucleons of radius 1.09 fm on a close-packed lattice whose volume per site is (4/3)πr₀³, so A of them fill a ball of radius r₀A^{1/3}; a ring in the position hue marks r round the ball; yaw free and pitch within ±70°: a ball has no ground and no privileged side, and the bound only keeps the ring from closing to a line; idle spin, zoom buttons, no snap views since no viewpoint carries a meaning of its own; without WebGL the ball is drawn flat from the front on the canvas above the same graph
sim-nuclide-chart · Figure 31.12 · chart-of-the-nuclides, isotopes, nuclide-notation, mass-number, magic-numbers · value add: variation by slider (any nuclide placed by Z and N and read in the notation with A = N + Z; walking N up one column shows an element's isotopes and which of them are stable; the stable band leaving N = Z as Z grows is seen from any point) and standardisation of the book's simplified chart · arrows: none · still: a chart of nuclides is a map with no clock · sliders: Z (count, 1 to 110, 26 by default) and N (count, 0 to 160, 30 by default), Example 31.1's ⁵⁶Fe; each carries a dashed circle at N = Z, the equal pair the text names for light nuclei · headline: "⁵⁶Fe, with 26 protons and 30 neutrons, is stable." or "… is not stable: it lies off the band of stable nuclei." · readout: ⁵⁶₂₆Fe₃₀: A = N + Z = 30 + 26 = 56; note: the element's column holds its isotopes, and how many are stable (with a magic Z or N named as magic) · graph alone: N (0 to 165) against Z (0 to 115), the book's ranges; the 251 stable nuclides as filled ink dots, the band of known unstable nuclides as a hollow outline, the dashed N = Z line, diagonals of constant A every 10 with the book's A labels every 20, faint lines at the magic numbers 2, 8, 20, 28, 50, 82 and 126 · 2D, a relation between counts (rule 28.1)
photo-goeppert-mayer · Figure 31.13 · kept photograph: a portrait of the physicist the text is about · still · 2D
```

Labels on `sim-nucleus-model`: the frame (headline band, axis titles, slider),
the legend's proton and neutron with their counts, and "r" with its value on the
ring; a nucleon is never labelled one by one, and hover names call each one a
proton or a neutron. Labels on `sim-nuclide-chart`: "N = Z" on the dashed line, the A labels along the band's
upper side (frame, as the book prints them), a legend naming the stable dots, the
unstable outline, the dotted magic-number lines and the diagonals, and the chosen
nuclide's symbol beside its ring; hover names carry
each stable nuclide's notation.

The stable nuclides are the 251 of the standard list (the primordial nuclides
not observed to decay, with ¹⁸⁰ᵐTa counted), written into `figures.js` as each
element's stable mass numbers; the unstable band is a smooth outline round the
valley, as simplified as the book's.

Widths: 325 (Figure 31.10), 200 (Figure 31.11's original), 250 (Figure 31.12's
original), 185 (Figure 31.13).

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_32_03_01a.jpg` (31.10) | kept, photo row | the opening questions are asked of it |
| `Figure_32_03_02a.jpg` (31.11) | original of `sim-nucleus-model` | replaced |
| `Figure_32_03_03a.jpg` (31.12) | original of `sim-nuclide-chart` | replaced |
| `Figure_32_03_04a.jpg` (31.13) | kept, photo row | a portrait the text is about |

## Extra simulations considered

- The nuclear force against the Coulomb force for two protons as their separation
  grows. Left: the book gives no curve, only "about 100 times" and "a few fm", so
  any curve would be OmniStax's invention; 31.6's Figure 31.25 draws the range of
  the nuclear force inside a nucleus.

## Tables

Table 31.2, Masses of the Proton, Neutron, and Electron, a `div.book-table` in
`nucleons`.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| AP test prep | 1 | 1 (keyed (a), graded) | — |
| Conceptual question | 3 | 3 (AI suggested approaches) | — |
| Problem | 12 | 6 own keyed + 2 moved in from 31.7 | 6 unkeyed |

Moved in from 31.7 with `source_section`: `eip-467` (Unreasonable Results, a
nucleus 7.5 × 10⁻¹³ m in radius) and `exer-00001` (Critical Thinking, the density
of ²³⁵U and its fission fragments). Unkeyed problems left out: the cube of 1.0 kg
of nuclear matter, the radius of ²³⁸Pu, 1 u converted to 931.5 MeV, the lead
absorbing γ rays, the density independent of $A$, and the β ray at $0.998c$.

## Wanted at chapter level

- `eq-atomic-mass-unit` → 31.3-nucleons
- `eq-proton-rest-energy` → 31.3-nucleons
- `eq-nuclide-notation` → 31.3-nuclides
- `eq-mass-number` → 31.3-nuclides
- `eq-nuclear-radius` → 31.3-nuclear-size
- `eq-nuclear-density` → 31.3-nuclear-density
- variables rows for 31.3, for symbols the text writes through their macros: `E` (`\kE`, energy, MeV, "the energy a mass gives when converted entirely, $E = mc^2$", concept `rest-energy`) and `m` (`\km`, "a mass, converted into energy or divided by a volume", concept `mass`) → `nucleons`; `q` (`\kq`, "the charge of a particle, zero for the neutron", concept `electric-charge`) → `nucleons`; `V` (`\kvol`, "the volume of a nucleus", concept `volume`) → `nuclear-size`; `W` (`\kW`), `F` (`\kF`), `d` (`\kd`), `θ` (`\ktheta`) for $W = Fd\cos\theta$ and `r` (`\krad`, "the separation of two charges in the Coulomb force") → `nuclear-forces`
- `ch31/COLOR.md` 31.3 row: the page binds `position`, `density`, `mass`, `volume`, `energy`, `velocity`, `force`, `charge`, `angle`; conventions `p+`, `n0`.
- `source_section` "31.7" on `p7` and `p8` is an error in `ost check` until 31.7 is built.
- No concept, edge or symbol row needs changing.

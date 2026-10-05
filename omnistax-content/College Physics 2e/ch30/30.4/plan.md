# Plan: 30.4 X Rays: Atomic Origins and Applications

Written before the page was built (root rule 5), under `ch30/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints two headers (Medical and Other Diagnostic Uses of X-rays, X-Ray
Diffraction and Crystallography); the first two headers are OmniStax's, splitting the
untitled opening where it turns from the tube to the atom. The worked example is an
`<h3>` span of its own.

| Span | Header | What it holds |
|---|---|---|
| `x-ray-production` | X rays from a tube | The section's own introduction, the tube, bremsstrahlung and characteristic x rays, Figure 30.20 + 30.21, $\kEmax = hf_{\text{max}} = \kqe\kV$ |
| `characteristic-x-rays` | Characteristic x rays | Inner-shell vacancies and the labels $K_\alpha$, $K_\beta$, $L_\alpha$ |
| `characteristic-x-ray-energy` | Example 30.3 | The tungsten $K_\alpha$ x ray, 54.4 keV, with $Z - 1 = 73$ |
| `medical-uses` | Medical and Other Diagnostic Uses of X-rays | Shadows and density, Compton attenuation, mammograms, CT; Figures 30.22 to 30.26 |
| `x-ray-diffraction` | X-Ray Diffraction and Crystallography | $\klam = hc/E$, DNA, von Laue and the Braggs, other uses; Figure 30.27 |

## Concepts

All five are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `bremsstrahlung-and-characteristic-x-rays` | `x-ray-production` | reinforced in `characteristic-x-rays` |
| `x-ray-maximum-energy` | `x-ray-production` | — |
| `characteristic-x-ray-energy` | `characteristic-x-ray-energy` | — |
| `x-ray-imaging` | `medical-uses` | — |
| `x-ray-diffraction` | `x-ray-diffraction` | — |

Earlier concepts used: `x-ray-radiation` (24.3), `electron-volt` (19.1),
`bremsstrahlung` and `characteristic-x-rays` (29.3, reinforced), `x-ray-tube-maximum-energy`
(29.3, reinforced) in `x-ray-production`; `energy-level-diagram` (30.3) in
`characteristic-x-rays`; `hydrogen-like-energies` (30.3) in the example; `compton-effect`
(29.4) and `density` (11.2) in `medical-uses`; `photon-energy-from-wavelength` (29.2) and
`size-of-atoms` (30.1) in `x-ray-diffraction`.

## Types the page binds

`energy`, `voltage` (the chapter's 30.4 row), and `frequency` for the spectrum's axis
and $f_{\text{max}}$ (the chapter COLOR.md admits frequency in readouts of $hf$; the
axis of Figure 30.20 is that frequency). The intensity is relative and in ink; $Z$,
$n$ and $h$ are ink. The x rays are ink, as the chapter's colour plan says. The anode
is the section's one referent (`anode`, the chapter COLOR.md's "anode of an x-ray
tube"), named under the level diagram in its referent colour.

## Figures

```
sim-x-ray-levels · Figure 30.20 + 30.21 · bremsstrahlung-and-characteristic-x-rays, x-ray-maximum-energy, characteristic-x-ray-energy · value add: variation by slider and choice (the level diagram of the anode beside its spectrum, so the reader sees that each peak is a transition, that the peaks move as (Z − 1)² with the anode, that the bremsstrahlung ends at f_max = q_eV/h, and that the K peaks appear only once q_eV passes the K-shell energy, 72.5 keV for tungsten, as Example 30.3's discussion says) and standardisation · arrows: symbolic (each transition arrow pairs two levels on an energy-level diagram; nothing moves along it) · still: nothing in the idea has a clock, and Figure 29.11 + 29.12 already shows the spectrum being counted photon by photon · slider: V (voltage, 5 to 120 kV, 100 kV by default, the book's 100-kV tube; detents at 50 and 100 kV, the book's chest and leg; a dashed circle at the K-shell energy (Z − 1)²E₀/q_e, 72.5 kV for tungsten, the threshold the text names); choices: anode copper, molybdenum, tungsten (tungsten by default, Example 30.3; copper is the problem's), and line Kα, Kβ (Kα by default), discrete states · headline: "Electrons accelerated through $\kV = 100$ kV make x rays of up to $\kEmax = 100$ keV, enough to empty tungsten's K shell at 72.5 keV." (or "too little to empty …, so no K lines appear") · readout: $E_{K_\alpha} = \kdE = \kEini - \kEfin = (74 - 1)^2(13.6\ \text{eV})(1/1^2 - 1/2^2) = 54.4$ keV, morphing between Kα and Kβ; no note, the readout and the labelled levels say it all · graph beside: the level diagram is vertical (E = 0 at the top, K at the bottom, drawn to the model's 1/n² proportions with K, L, M labelled with their energies), the spectrum beside it, intensity (relative, no tick values, fixed 0 to 1.1) against f (0 to 30 × 10¹⁸ Hz fixed; 120 kV gives 29.0), f_max dashed · 2D, a relation between quantities (rule 28.1)
photo-teeth · Figure 30.22 · kept photograph: the text points at it · still · 2D
photo-chest · Figure 30.23 · kept photograph: the text points at it · still · 2D
photo-luggage · Figure 30.24 · kept photograph: the text points at it · still · 2D
photo-ct-scanner · Figure 30.25 · kept photograph: the text points at it and it shows the scanner the passage describes · still · 2D
photo-ct-skull · Figure 30.26 · kept photograph: the text points at it · still · 2D
photo-lysozyme · Figure 30.27 · kept photograph: the text points at it, and it is the pattern the passage explains · still · 2D
```

Levels on sim-x-ray-levels follow the example's model, $E_n = -(Z - 1)^2 E_0/n^2$, the
same for every level, so the diagram keeps its shape and its energies change with the
anode; the book's own diagram is schematic and is one state of it (tungsten). The
model gives the book's keyed copper values, 8.00 and 9.48 keV, and the tungsten 54.4
keV. Lα and Lβ are drawn as the book draws them, muted and unnumbered, since the book
estimates only K lines this way; the spectrum shows the two K peaks, as the book's
spectrum shows two. Peak heights and the bremsstrahlung's shape are schematic, as in
the book.

Labels: the shell names (K, L, M, N with n) and the energies of K, L and M are the
frame; the four transition names, one per arrow; "vacancy" under the hollow circle on
K; the peak names Kα and Kβ; f_max; "bremsstrahlung" once on the smooth curve; the
anode's name under the diagram. Hover names carry N's energy, the electron, every
level and the peaks. Labels on the copper peaks, which sit 8 px apart, step out
through the labeller.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_31_04_01aa.jpg` (30.20) | original of `sim-x-ray-levels` | folded |
| `Figure_31_04_02aa.jpg` (30.21) | original of `sim-x-ray-levels` | folded |
| `Figure_31_04_04aa.jpg` (30.22, teeth) | kept, photo row | the text points at it |
| `Figure_31_04_05aa.jpg` (30.23, chest) | kept, photo row | the text points at it |
| `Figure_31_04_03aa.jpg` (30.24, luggage) | kept, photo row | the text points at it |
| `Figure_31_04_06aa.jpg` (30.25, CT scanner) | kept, photo row | the text points at it |
| `Figure_31_04_07aa.jpg` (30.26, CT skull) | kept, photo row | the text points at it |
| `Figure_31_04_08aa.jpg` (30.27, lysozyme) | kept, photo row | the text points at it |

The text's "(See Figure 30.23 and Figure 30.24.)" for dental and medical x rays and
"as shown in Figure 30.22" for luggage are kept as printed; the teeth are 30.22
(erratum, named in `notes`).

## Extra simulations considered

- A CT scanner turning round a slice, its detector's shadow changing with direction and
  the slice building up from them. Left: the page does not teach how the image is
  computed (rule 26.5), so the reader would see only shadows turning, which the
  passage and Figure 30.25 already give.
- Penetration against tube voltage (the 50.0-kV chest and the 100-kV leg in a cast).
  Left: the page gives no relation for attenuation to draw.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Conceptual question | 6 | 5 (AI suggested approaches) | the CD question `fs-id2688121`, reprinted in 30.5 and kept there |
| Problem | 5 | 3 + 1 from 30.9 | 2 unkeyed |

Kept problems: `fs-id2206501` (50.0-kV tube), `fs-id1526656` (100-kV tube),
`fs-id1422659` (copper Kα and Kβ), and from 30.9 `fs-id3303454` (Unreasonable Results,
0.0100-fm x rays; `source_section` 30.9). Left out, unkeyed: `fs-id2025069` (the
30.0-kV television tube) and `fs-id3090099` (free-electron capture into tungsten's K
shell). No AP items, no Check Your Understanding.

## Wanted at chapter level

- `eq-x-ray-maximum-energy-30` → 30.4-x-ray-production
- `eq-k-alpha-energy` → 30.4-characteristic-x-ray-energy
- variables `E_max`, `V_volt` → 30.4-x-ray-production
- edge `bremsstrahlung-and-characteristic-x-rays` ← `x-ray-tube-spectrum` (29.3), as the ch29 pass asked
- edge `x-ray-maximum-energy` ← `x-ray-tube-maximum-energy` (29.3): the two concepts state one result, $E_{\text{max}} = hf_{\text{max}} = q_{\text{e}}V$; the chapter pass may merge them instead
- edge `x-ray-diffraction` ← `photon-energy-from-wavelength` (29.2), for $\lambda = hc/E$
- variables rows in 30.4 for the symbols the text, figure and cards write that the prep pass gave no 30.4 row: `E_n`, `E_0bohr`, `ΔE`, `E_ini`, `E_fin`, `q_e`, `λ`, `c`, `E` (the checker does not ask for them)

Applied by the chapter pass (2026-10-05): both forms and both rows anchored; the nine rows added as listed; edges `bremsstrahlung-and-characteristic-x-rays` ← `x-ray-tube-spectrum` (dropping `electromagnetic-spectrum`), `x-ray-maximum-energy` ← `x-ray-tube-maximum-energy` (dropping `electron-volt`; the two concepts are not merged, which waits on Chen), `x-ray-diffraction` ← `photon-energy-from-wavelength` and ← 29.6's `bragg-equation` (dropping `c-equals-f-lambda`). Example 30.3 is renumbered 30.2, as the publisher prints it.

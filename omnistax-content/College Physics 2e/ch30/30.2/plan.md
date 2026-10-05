# Plan: 30.2 Discovery of the Parts of the Atom: Electrons and Nuclei

Written before the page was built (root rule 5), under `ch30/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints two headers (The Electron, The Nucleus). The introduction has no
header of its own, and the long Electron part changes subject three times, so
four headers are OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `parts-of-the-atom` | Substructures of the atom | The opening paragraph and the note Charges and Electromagnetic Forces |
| `the-electron` | The Electron | Gas discharge tubes, cathode rays, Figure 30.4 |
| `thomson-charge-to-mass` | Thomson’s charge-to-mass ratio | Thomson, Figure 30.5, Figure 30.6 + 30.7, $\kF = \kqe\kEf$ to $\kqe/\kme = \ka/\kEf$, the electron’s and the proton’s ratios, Thomson’s Nobel Prize |
| `millikan-oil-drop` | Millikan’s oil drop experiment | Faraday’s estimate, Figure 30.8, Figure 30.9, $\kmdrop\kg = \kqe\kEf$ and $\kq = \kmdrop\kg\kd/\kV$ |
| `electron-mass` | The mass of the electron | $m = \kqe/(\kqe/\kme)$, $\kme$ and $\kmp$, identical electrons |
| `the-nucleus` | The Nucleus | Radioactivity, Rutherford’s experiment, Figure 30.10 + 30.11, the analysis and its size of $10^{-15}$ m |
| `planetary-model` | The planetary model of the atom | The planetary model, Figure 30.12, the closing paragraph |

## Concepts

All eight are the prep pass’s rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `cathode-ray-tube-device` | `the-electron` | — |
| `cathode-ray-tube` | `the-electron` | used in `thomson-charge-to-mass` |
| `electron-charge-to-mass-ratio` | `thomson-charge-to-mass` | used in `electron-mass` |
| `millikan-oil-drop` | `millikan-oil-drop` | used in `electron-mass` |
| `electron-mass` | `electron-mass` | — |
| `identical-particles` | `electron-mass` | — |
| `rutherford-scattering` | `the-nucleus` | used in `planetary-model` |
| `planetary-model` | `planetary-model` | — |

Earlier concepts used: `electron` and `charge-of-electron-and-proton` (18.1) in `parts-of-the-atom`; `magnetic-force-on-a-moving-charge` (22.4) in `the-electron`; `velocity-selector` (22.11), `electric-field` (18.4) and `newtons-second-law` (4.3) in `thomson-charge-to-mass`; `elementary-charge` (18.1), `weight` (4.3) and `voltage-across-uniform-field` (19.2) in `millikan-oil-drop`; `size-of-atoms` (30.1), `coulombs-law` (18.3) and `conservation-of-energy` (7.6) in `the-nucleus`; `gravity-as-centripetal-force` (6.5) in `planetary-model`.

## Types the page binds

`velocity`, `acceleration`, `electric-field`, `magnetic-field`, `charge`, `mass`,
`voltage`, `force` (the electric and magnetic forces on the electron and the
two forces on the drop are drawn as arrows) and `position` (the plate
separation, the spot’s height on the screen, the sizes $10^{-10}$ m and
$10^{-15}$ m). Counts of alpha particles, numbers of electrons, $k$ and the
element of a nucleus are ink. Electrons are `F.el('e-')`, alpha particles
`F.el('He')`, the gold nuclei and atoms `F.el('Au')`; no figure paints a fact.
Referents: Thomson’s tube (`thomson-tube`, in `sim-thomson-tube`) and
Millikan’s drop (`oil-drop`, in `sim-millikan`), as `ch30/COLOR.md` names them.

## Figures

```
photo-discharge-tube · Figure 30.4 · kept photograph: the text points at it and it shows the glow the passage describes · still · 2D
photo-thomson · Figure 30.5 · kept portrait: the text points at it (“See Figure 30.5 and Figure 30.6”) · still · 2D
sim-thomson-tube · Figure 30.6 + 30.7 · cathode-ray-tube, electron-charge-to-mass-ratio · value add: flow by animation (the electrons stream from the cathode through the plates to the screen, which is what a beam is) and variation by slider (the electric field pushes the beam up, the magnetic field pushes it down, and where they cancel the beam runs straight and $\kv = \kEf/\kBmag$), standardisation of 30.6’s tube and 30.7’s crossed fields into one side view · arrows: kinematic (the beam of electrons with its $\kv$, flowing cathode to screen); symbolic (the forces F_E and F_B on the electron, $\kEf$ between the plates, $\kBmag$ into the page) · moving: the electrons run along the beam at a drawn speed that grows with $\kv$, a steady flow with no loop to restart · sliders: $\kEf$ (electric-field, 0 to 5.00 × 10⁴ N/C, 3.00 × 10⁴), $\kBmag$ (magnetic-field, 0 to 1.00 mT, 0.500 mT), $\kv$ (velocity, 2.00 to 8.00 × 10⁷ m/s, 6.00 × 10⁷, the speed of the moved problem fs-id3450401); dashed circles where $\kEf = \kv\kBmag$ on each, labelled “balanced” · headline: “The forces cancel and the beam runs straight, so $\kv = \kEf/\kBmag$ = 6.00 × 10⁷ m/s.” or “The electric force is larger, so the beam bends up toward the + plate.” · no graph; the screen carries a centimeter scale · 2D, side view: the deflection lies in the plane of $\kv$ and $\kEf$, and $\kBmag$, perpendicular to both, reads as the into-the-page crosses of Chapter 22 (rule 28.1); a 3D scene would add a turn but no relation the side view hides
photo-millikan · Figure 30.8 · kept portrait: the text points at it (“see Figure 30.8”) · still · 2D
sim-millikan · Figure 30.9 · millikan-oil-drop, electron-mass · value add: variation by slider and choice (the reader sets the voltage until the electric force on the drop balances its weight, and the charge that the balance gives comes out a whole number of electron charges, whichever drop) and standardisation of the book’s zoomed plates · arrows: symbolic ($\kEf$ between the plates, the electric force and the weight on the drop); no motion arrow · still: the balance is a condition, read from two arrows and the readout, and nothing in it is a history · sliders: $\kV$ (voltage, 0 to 2000 V, 1000 V), $\kmdrop$ (mass, 0.50 to 3.00 × 10⁻¹⁵ kg, 2.45 × 10⁻¹⁵ kg); dropdown (a button row wraps beside the two sliders): extra electrons on the drop, 1 to 4, 3 by default, a discrete state (an electron gained or lost is the sudden change Millikan saw); a dashed circle on $\kV$ at $\kmdrop\kg\kd/\kq$, labelled “held”; $\kd$ = 2.00 cm fixed · headline: “At 1000 V the electric force balances the weight and the drop hangs still.” · no graph · 2D, the book’s own zoomed side view, flat because the lesson is a balance of two forces (rule 28.1)
sim-rutherford · Figure 30.10 + 30.11 · rutherford-scattering · value add: flow by animation (alphas fly from the source through the foil to the screen, and the screen and the magnified foil fill with their paths, so the reader sees most pass straight and a rare one come back) and variation by choice (Thomson’s spread-out positive charge against Rutherford’s tiny nucleus) · arrows: kinematic (the alpha rays from the source and through the foil’s atoms) · moving: alphas leave the source at 50 per second and the counts build up over a 6 s loop held 1.2 s · choice: where the positive charge sits, “spread through the atom” (Thomson) or “in a tiny nucleus” (Rutherford, default), a discrete state that morphs the spread charge into the nucleus · headline: “2 of the 300 alphas so far came back toward the source.” · no graph; the screen ring carries the hits and the readout the counts · 2D, top view of the apparatus and the book’s magnified foil beside it; the angles of scattering lie in one plane, so the flat view states them truly where the book’s perspective bends them (rule 28.1)
sim-planetary-model · Figure 30.12 · planetary-model · value add: flow by animation (the electrons orbit as the book’s arrows say they do, the inner ones faster, as planets do) · arrows: kinematic (the electrons’ motion round their orbits) · moving: three electrons orbit with periods in the ratio the inverse-square pull sets ($T \propto r^{3/2}$), a steady motion with no loop to restart · no slider: the model has no quantity the section varies · headline: “Low-mass electrons orbit a small, massive nucleus, far out compared with its size.” · no graph · 2D, the book’s tilted view of three circular orbits drawn as a locked view (rule 28.2), the orbits being circles seen obliquely
```

Labels. `sim-thomson-tube`: the + and − plates; the fields, the velocity and the two forces are named in an enlarged view of the plates above the tube, as Figure 30.7 draws it, on one still electron there ($\kEf$, $\kBmag$, $\kv$, F_E and F_B), never on a moving one; the cathode, the anodes and the screen by hover; the screen scale is frame. `sim-millikan`: the plates with their signs, $\kEf$ on one field line, F_E and w beside their arrows, the drop named with its mass, the atomizer and the light; six. `sim-rutherford`: the source, the gold foil, the screen, “atom, about 10⁻¹⁰ m”, “nucleus, drawn far larger than scale” (or “positive charge spread through the atom”), and the alpha once on a legend, never on a moving one; the inset draws every deflected alpha’s path and one straight path in four, so it stays readable. `sim-planetary-model`: the nucleus and one electron named, the other two by hover.

Readouts. `sim-thomson-tube`: $\ka = \frac{|\kqe|}{\kme}(\kEf - \kv\kBmag)$ with the numbers, up positive, at the moment the electron enters the plates; note the spot’s height on the screen, or that the beam strikes a plate or the side of the tube. `sim-millikan`: the electric force $\kq\kV/\kd$ with the numbers set against the weight $\kmdrop\kg$ by $<$, $=$ or $>$; note, while held, $\kq = \kmdrop\kg\kd/\kV$ as a multiple of $1.60 \times 10^{-19}$ C. `sim-rutherford`: $N = N_{<10^\circ} + N_{10^\circ\text{ to }90^\circ} + N_{>90^\circ}$ with the counts; note that Rutherford saw about one alpha in 8000 come straight back and that the nuclei drawn here, far larger than scale, send back about one in 150. `sim-planetary-model`: the ratio of the atom’s size to the nucleus’s, $10^{-10}\ \text{m}/10^{-15}\ \text{m} = 10^{5}$, which the drawing cannot show to scale; no note.

Widths: 30.4 250, 30.5 175, 30.6 + 30.7 300 and 500, 30.8 200, 30.9 200, 30.10 + 30.11 450 and 225, 30.12 250.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_31_02_01a1.jpg` (30.4) | kept, photo row | the text points at it |
| `Figure_31_02_01b1.jpg` (30.5) | kept, photo row | the text points at it |
| `Figure_31_02_02a1.jpg` (30.6) | original of `sim-thomson-tube` | folded |
| `Figure_31_02_02b1.jpg` (30.7) | original of `sim-thomson-tube`, and the card figure of the moved problem fs-id2378469 | folded; the problem asks about “the situation shown” |
| `Figure_31_02_03a1.jpg` (30.8) | kept, photo row | the text points at it |
| `Figure_31_02_03b1.jpg` (30.9) | original of `sim-millikan` | replaced |
| `Figure_31_02_04a.jpg` (30.10) | original of `sim-rutherford` | folded |
| `Figure_31_02_05a.jpg` (30.11) | original of `sim-rutherford` | folded |
| `Figure_31_02_06a.jpg` (30.12) | original of `sim-planetary-model` | replaced |

## Extra simulations considered

- Millikan’s drop drifting up or down at its terminal speed until the voltage holds it. Left: the balance reads from the two arrows, and the drift would only restate their difference.
- A beam bent into a circle by $\kBmag$ alone, the moved problem’s 6.80-cm radius. Left: setting $\kEf$ to zero in `sim-thomson-tube` already bends the beam by the magnetic force alone, and the circle would answer the problem.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| AP test prep | 2 | 2 | — |
| Conceptual question | 2 | 1 (AI suggested approach) | `fs-id1447246`, the correspondence question, kept once in 30.3 |
| Problem | 3 + 5 moved in | 7 | `fs-id3077987`, unkeyed |

Moved in: `fs-id2398973` and `fs-id1577658` from 30.1, `fs-id2378469`, `fs-id3188615` and `fs-id3450401` from 30.9. The first AP item is keyed “(a), (d)” for a select-two question and is kept as an open item with its options and the book’s key; the second has its solution commented out of the CNXML and is open with an AI-marked approach. The conceptual question prints three options and no key, and is kept open with its options and an AI-marked approach. `eip-200` has an empty type and is a problem; its part (a) is a number and part (b) the book’s words.

## Errata

The proton’s ratio is printed $9.58 \times 10^{7}$ C/kg in the text and $9.57 \times 10^{7}$ C/kg in the summary; both are kept as printed and named in `notes`.

## Wanted at chapter level

- `eq-electron-charge-to-mass` → 30.2-thomson-charge-to-mass
- `eq-electron-charge-to-mass-value` → 30.2-thomson-charge-to-mass
- `eq-proton-charge-to-mass-value` → 30.2-thomson-charge-to-mass
- `eq-millikan-balance` → 30.2-millikan-oil-drop
- `eq-millikan-charge` → 30.2-millikan-oil-drop
- `eq-electron-mass` → 30.2-electron-mass
- `eq-proton-mass` → 30.2-electron-mass
- variables `q_e`, `m_e`, `E_field`, `B_mag`, `a`, `v`, `q_p`, `m_p` → 30.2-thomson-charge-to-mass; `m_drop`, `q`, `V_volt`, `d` → 30.2-millikan-oil-drop
- new variables rows in 30.2: `F` (force, the electric force on the electron, concept `force`), `g` (acceleration, the acceleration due to gravity) and `m` (mass, the electron’s mass in $m = q_e/(q_e/m_e)$, concept `electron-mass`); the figures label their force arrows F_E, F_B and w in figure text only
- new symbol `F_mag` (latex `F_{\text{mag}}`, force) with a 30.2 variables row, the magnetic force on the electron in “$F_{\text{mag}} = q_e vB$”; the text writes it `\kF_{\text{mag}}` until the macro exists
- `ch30/COLOR.md` 30.2 row: the page binds `velocity`, `acceleration`, `electric-field`, `magnetic-field`, `charge`, `mass`, `voltage`, `force` and `position`; `force` and `position` are new to the row.
- No concept or edge row needs changing.

Applied by the chapter pass (2026-10-05): the seven forms and twelve variables rows anchored as listed; new rows `F`, `g` (acceleration, the book's 9.80 m/s²) and `m` (concept `electron-mass`); symbol `F_mag` with macro `\kFmag` and its row, and the text's `\kF_{\text{mag}}` swapped for it; the forms' $m_{\text{e}}$, $m_{\text{p}}$ and $m_{\text{drop}}$ written with their macros, since the book types mass; `COLOR.md` row as asked.

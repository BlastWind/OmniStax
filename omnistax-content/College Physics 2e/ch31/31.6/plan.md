# Plan: 31.6 Binding Energy

Written before the page was built (root rule 5), under `ch31/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints one header of its own, Problem-Solving Strategies; the other
headers are OmniStax's, set where one idea stops and the next begins. Example
31.7 is its own block under an `<h3>`, as the book's examples are throughout.

| Span | Header | What it holds |
|---|---|---|
| `binding-energy` | Binding energy | The opening paragraph: binding energy defined, and $E = (\Delta m)c^2$ |
| `mass-defect` | Mass defect | Pulling a nuclide apart, the mass defect, the two forms of BE, atomic masses, Figure 31.22 |
| `earths-hot-interior` | Nuclear decay and Earth’s interior | The Things Great and Small box, verbatim, with Figure 31.23 inside it |
| `binding-energy-per-nucleon` | Binding energy per nucleon | BE ∝ A, BE/A defined, the curve and its explanation by the short-ranged nuclear force, Figure 31.24 + 31.25 |
| `tightly-bound-nuclei` | Tightly bound nuclei | The spikes, closed shells, cosmic abundances |
| `alpha-particle-binding` | Example 31.7 · What Is BE/A for an Alpha Particle? | The worked example |
| `energy-production` | Binding energy and energy production | The closing paragraph: stars, fusion and fission |
| `problem-solving-strategies` | Problem-Solving Strategies | The book's strategy box, its six steps |

## Concepts

All six are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `binding-energy` | `binding-energy` | reinforced in `mass-defect` |
| `mass-defect` | `mass-defect` | used in `alpha-particle-binding` |
| `binding-energy-from-atomic-masses` | `mass-defect` | reinforced in `alpha-particle-binding`, `problem-solving-strategies` |
| `binding-energy-per-nucleon` | `binding-energy-per-nucleon` | reinforced in `alpha-particle-binding` |
| `binding-energy-per-nucleon-curve` | `binding-energy-per-nucleon` | reinforced in `tightly-bound-nuclei`, `energy-production` |
| `short-range-nuclear-force-and-coulomb-repulsion` | `binding-energy-per-nucleon` | — |

Earlier concepts used: `strong-and-weak-nuclear-forces` (31.3) and
`mass-energy-equivalence` (28.6) in `binding-energy`; `work` (7.1), `rest-mass`
(28.5), `atomic-mass`, `atomic-mass-unit`, `nuclide-notation`, `nucleons` (31.3) in
`mass-defect`; `radioactive-dating-technique`, `half-life`, `activity` (31.5),
`conduction`, `convection`, `radiation-heat-transfer` (14.4), `alpha-decay-process`
(31.4) in `earths-hot-interior`; `mass-number` (31.3), `electrostatic-force`
(18.3), `chart-of-the-nuclides` (31.3) in `binding-energy-per-nucleon`;
`magic-numbers` (31.3) in `tightly-bound-nuclei`; `alpha-decay-process` in
`alpha-particle-binding`; `nuclear-reaction-energy` (31.4) and
`activity-from-number-and-half-life` (31.5) in `problem-solving-strategies`.

## Types the page binds

`energy` (BE, BE/$A$, the work done), `position` (the range of the nuclear force),
as the chapter gives, and with them `mass` ($\Delta m$, $m_{\text{n}}$, $m_{\text{p}}$,
$m_{\text{tot}}$, as the chapter's `COLOR.md` types every mass of the chapter),
`velocity` ($c$), and in Figure 31.23 `time` ($t$, $t_{1/2}$) and `activity`
($R$, $R_0$). $Z$, $N$ and $A$ are counts and stay in ink; so do $m({}^{1}\text{H})$
and $m({}^{A}\text{X})$, which have no symbol rows. Conventions: protons
`F.el('p+')`, neutrons `F.el('n0')`, the β of Figure 31.23 `F.el('e-')`, its γ
`F.el('gamma')`; an α is two protons and two neutrons. No referents: no example
or figure points at a particular thing the text marks twice. No fact colours: the
Earth's layers are told by label and texture, never by a hot tint.

## Figures

```
sim-binding-energy · Figure 31.22 · binding-energy, mass-defect, binding-energy-from-atomic-masses · value add: variation by choice (four nuclides from ⁴He to ⁵⁶Fe: the nucleus grows, the separated pieces with it, and the mass defect and BE grow nearly in proportion to A) and standardisation (one bar read on two scales, Δm in u above and BE in MeV below, which is BE = (Δm)c² made visible; the book's table and hand become the library's hand and a flat row of nucleons) · arrows: symbolic (the pull on the nucleon is a force times a distance, the work; the curved arrow says "becomes") · still: pulling apart is a before and an after, and nothing in the idea has a clock · choice: nucleus ⁴He | ¹⁶O | ²⁴Mg | ⁵⁶Fe (strings, ⁴He by default, Example 31.7's numbers: Δm = 0.030378 u, BE = 28.3 MeV); ¹²C, ²H, ²⁰⁹Bi and ¹⁴C are left out because the kept problems ask for them · headline: "Pulling ⁴He apart takes 28.3 MeV of work, and the separated pieces have 0.030378 u more mass." · readout: BE = {[Zm(¹H) + Nm_n] − m(ᴬX)}c² = {[2(1.007825 u) + 2(1.008665 u)] − 4.002602 u}c² = (0.030378 u)c² = 28.3 MeV; no note, the caption says the bar reads on two scales · graph below: the Δm bar on a fixed axis 0 to 0.6 u (⁵⁶Fe's 0.528 u is the largest) with BE 0 to 559 MeV under it · 2D: the book's table is in perspective but is a stage, not the lesson (rule 28.1)
sim-earth-interior · Figure 31.23 · radioactive-dating-technique (used), half-life, activity, binding-energy (the energy decays release) · value add: flow by animation (heat leaves the core by convection, crosses the mantle by conduction and leaves the surface as radiation, and in the blowup nuclei decay one at a time and their α, β and γ are stopped in the rock, which the book freezes as arrows) and variation by slider (looking back in time, the primordial nuclides were more numerous and decayed faster, by 2.0 times for ²³⁸U and 11.4 times for ⁴⁰K over 4.5 × 10⁹ y, the text's "perhaps by an order of magnitude") · arrows: kinematic (the radiation leaving the surface, the conduction outward, the convection loop, the α, β and γ from each decay) · moving: a 6 s loop holding 0.6 s, the heat flowing steadily and the decays scheduled within the loop, their number per loop in proportion to R₀/R · slider: t, time before today (time, 0 to 4.5 × 10⁹ y, 0 by default, today as the book draws it; detents at the book's 1, 3.5 and 4.5 × 10⁹ y); choice: nuclide ²³⁸U | ⁴⁰K (strings; half-lives 4.47 × 10⁹ y and 1.28 × 10⁹ y from the book's Appendix A) · headline: "4.5 × 10⁹ y ago, ⁴⁰K decayed 11.4 times as fast as it does today." (today: "Decays of ²³⁸U deep inside release energy that slows the cooling.") · readout: R₀/R = e^{0.693 t/t½} = e^{0.693(4.5 × 10⁹ y)/(4.47 × 10⁹ y)} = 2.0 · no graph · 2D: the book's cut-away globe read as a flat cross-section, which shows the same three layers without guessing a perspective (rule 28.1)
sim-binding-curve · Figure 31.24 + 31.25 · binding-energy-per-nucleon, binding-energy-per-nucleon-curve, short-range-nuclear-force-and-coulomb-repulsion · value add: variation by slider (walking A from ²H to ²³⁸U moves the point along the book's curve while the nucleus beside it grows, so the rise, the iron peak and the slow fall are seen together with their cause: up to A ≈ 60 the whole nucleus lies within the range of the nuclear force of any one nucleon, beyond it more and more nucleons lie out of reach, while the Coulomb repulsion reaches them all; and the neutrons outnumber the protons more and more past A ≈ 40) and standardisation (the curve redrawn from the book's Appendix A masses) · arrows: symbolic (31.25's range marker and its pointer) · still: the curve is a relation, nothing moves · slider: A (count, untyped, 2 to 238, snapping to the 102 naturally occurring nuclides of Appendix A, the most tightly bound where several share an A, with ⁶³Cu left out because its tabulated mass would put a dip in the curve that the book's graph does not show; ⁴He by default, Example 31.7; a dashed circle at A = 56, ⁵⁶Fe, the peak the text names as "roughly ... iron") · headline: "⁴He holds each of its 4 nucleons by BE/A = 7.07 MeV on average." (past the point where nucleons fall out of range it adds "less than near iron") · readout: BE = (BE/A)A = (7.07 MeV)(4) = 28.3 MeV; note: how many of the nucleons lie beyond the range of the marked one, a fact the nucleus shows · graph beside: BE/A (energy) against A, axes fixed at 0 to 250 and 0 to 10 MeV, the stable nuclides joined as the book joins them, the current one marked with drop lines · 2D: the nucleus as the book draws it, a cluster of spheres seen from one side (an fcc packing at the density r = r₀A^{1/3} gives, nearest A sites), the range of the nuclear force a dashed circle about the leftmost nucleon with radius the diameter of an A = 60 nucleus, which the book's problem on this curve names, taken centre to centre across the A = 60 cluster (8.96 fm), so the first nucleon out of range comes at A = 72; counting is done in three dimensions. A turnable 3D cluster adds no view: the point is distance, which the flat circle shows (rule 28.5)
```

Labels on `sim-binding-energy`: the nucleus's name, "Z protons" and "N neutrons" at the
row ends, the hand's "work done = BE", the two masses under the two states; six. Every
nucleon is named by hover. On `sim-earth-interior`: "radiation", "conduction",
"convection", "inner core", "nuclear decay" over the blowup, and the α, β, γ legend;
the moving particles are named by hover. On `sim-binding-curve`: ⁴He, ⁵⁶Fe and
²³⁸U on the curve as the book labels them, the current nuclide, and "range of the
nuclear force"; every point of the curve and every nucleon is named by hover.

Widths: 250 for Figure 31.22's original and 250 for Figure 31.23's; 450 and 225 for
Figure 31.24 + 31.25's two originals.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_32_06_01a.jpg` (31.22) | original of `sim-binding-energy` | replaced |
| `Figure_32_06_02a.jpg` (31.23) | original of `sim-earth-interior` | replaced |
| `Figure_32_06_03a.jpg` (31.24) | original of `sim-binding-curve` | folded |
| `Figure_32_06_04a.jpg` (31.25) | original of `sim-binding-curve` | folded |

## Extra simulations considered

- BE/A spread over the chart of the nuclides, the valley of stability lit by its
  binding. Left: the chart is 31.3's and 31.4's, and the curve already gives the one
  number per A the text discusses.
- The mass defect of a two-neutron "dineutron" from the Unreasonable Results problem.
  Left: it is the problem's own answer.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| AP item | 1 | 1 open (`fs-id932978`, its key commented out; AI suggested approach) | — |
| Conceptual question | 1 | 5 (AI suggested approaches): `fs-id2374875`, and `fs-id1562211`, `fs-id3181573`, `fs-id2621402`, `fs-id1464742` moved in from 31.5 | — |
| Problem | 8 | 5 keyed: `fs-id1417224`, `fs-id2929599`, `fs-id3036979`, `fs-id3046036` (no key for (d)), `eip-268` | 3 unkeyed: `fs-id1414262` (⁵⁶Fe), `fs-id3119264` (²³⁵U and ²³⁸U), `fs-id3245318` (the A = 60 diameter, ⁵⁸Ni and ⁹⁰Sr) |

No Check Your Understanding box, so no inline host. Errata kept as printed: the key of
`fs-id3046036` has no (d); the moved `fs-id2621402` prints $ZM({}^{1}\text{H})$. The
AP item's nuclide, flattened by the converter, is rebuilt from the CNXML as
${}^{4}_{2}\text{He}$.

## Wanted at chapter level

- variables row `Δm` → 31.6-mass-defect (the mass defect, `mass-defect`; the text, the readout and Figure 31.22's bar write `\kdm`)
- variables rows `m_n` and `m_p` → 31.6-mass-defect (the masses of the neutron and the proton, as 31.3 gives them)
- variables row `c` → 31.6-binding-energy (the speed of light, as 31.3 gives it)
- variables rows `Z`, `N_neut`, `A_nuc` → 31.6-mass-defect (untyped counts, as 31.3 gives them)
- variables row `E` → 31.6-binding-energy (the energy in $E = (\Delta m)c^2$)
- variables rows `t`, `t_half`, `R_act`, `R_0act` → 31.6-earths-hot-interior (Figure 31.23's slider and readout, with 31.5's meanings)
- form anchors: `eq-mass-defect` → 31.6-mass-defect, `eq-binding-energy-nuclear` → 31.6-mass-defect, `eq-binding-energy` → 31.6-mass-defect
- `ch31/COLOR.md` 31.6 row: the page binds `energy`, `position`, `mass`, `velocity`, and `time` and `activity` in Figure 31.23
- No concept, edge or symbol row needs changing.

Applied by the chapter pass (2026-10-05):

- Variables rows `Δm` (`mass-defect`, typed mass), `m_p`, `m_n`, `Z`, `N_neut`, `A_nuc`, `c` at `mass-defect`; `E` at `binding-energy`; `t`, `t_half`, `R_act`, `R_0act` at `earths-hot-interior`. `BE` and `m_tot` anchored.
- The three forms anchored at `mass-defect`.

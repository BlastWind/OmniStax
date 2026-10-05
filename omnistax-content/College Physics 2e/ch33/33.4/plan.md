# Plan: 33.4 Particles, Patterns, and Conservation Laws

Written before the page was built (root rule 5), under `ch33/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints four headers; the book's are kept and three of OmniStax's
are added at changes of subject. Example 33.3 is an `<h3>` span of its own.

| Span | Header | What it holds |
|---|---|---|
| `particle-zoo` | The particle zoo (OmniStax) | The known particles of the early 1930s, Dirac's theory and the positron, the particle zoo; Figure 33.12 |
| `matter-and-antimatter` | Matter and Antimatter | Antiparticles, annihilation, antiprotons and antihydrogen, traps; `sim-annihilation` (Figure 33.13) |
| `hadrons-and-leptons` | Hadrons and Leptons | Particles grouped by the forces they feel, hadrons and leptons, gauge bosons, bosons and fermions; Table 33.2 |
| `lepton-families` | Three lepton families (OmniStax) | Six leptons, $L_{e}$, the muon decay and $L_{\mu}$, the tau decay and $L_{\tau}$, oscillations |
| `mesons-and-baryons` | Mesons and Baryons | Mesons and baryons by decay, baryon number $B$ and its conservation |
| `forces-reactions` | Forces, Reactions, and Reaction Rates | Penetration and production by force, lifetime by force, $n \to p + e^{-} + \bar{\nu}_{e}$, strangeness $S$ |
| `quantum-numbers-in-two-decays` | Example 33.3 · Calculating Quantum Numbers in Two Decays | $\Xi^{-} \to \Lambda^{0} + \pi^{-}$ and $K^{+} \to \mu^{+} + \nu_{\mu}$ checked; `sim-decay-checker` |
| `substructure` | Hints of substructure (OmniStax) | Hundreds of hadrons, a small set of conserved quantities, quarks; Figure 33.14 |

## Concepts

All twenty are the prep pass's rows; the page adds none.

| Concept | Introduced in |
|---|---|
| `antimatter-and-annihilation` | `matter-and-antimatter` |
| `hadrons-and-leptons`, `hadron`, `lepton`, `bosons-and-fermions`, `boson`, `fermion` | `hadrons-and-leptons` |
| `electron-family-number`, `muon-family-number`, `tau-family-number`, `lepton-family-numbers`, `muon-family-number-conservation` | `lepton-families` |
| `mesons-and-baryons`, `baryon`, `baryon-number`, `baryon-number-conservation` | `mesons-and-baryons` |
| `particle-lifetime-and-force`, `strangeness`, `strangeness-conservation` | `forces-reactions` |
| `check-conservation-in-decays` | `quantum-numbers-in-two-decays` |

Earlier concepts used: `positron`, `antimatter`, `neutrino`, `beta-decay`,
`conservation-of-electron-family-number` (31.4), `half-life` (31.5),
`photon` (29.2), `quantum-electrodynamics` (33.2), `pion`, `meson` (33.1),
`carrier-particle`, `four-basic-forces` (4.8), `strong-and-weak-nuclear-forces`,
`nucleons` (31.3), `conservation-of-nucleon-number` (31.4),
`electromagnetic-force`, `electric-charge`, `conservation-of-charge` (18.1),
`intrinsic-spin` (30.7), `pauli-exclusion-principle` (30.9),
`mass-energy-equivalence` (28.6), `quark` (8.3).

## Types the page binds

`energy` (the rest energy $\kErest$ of each particle and the photon energy
$\kEgam$ in Figure 33.13's readout), `mass` (Table 33.2's rest masses),
`time` (the lifetimes, the decay checker's ruler), `charge` (the charge row of
the decay checker, in units of $q_{e}$). $B$, $L_{e}$, $L_{\mu}$, $L_{\tau}$
and $S$ are untyped and stay ink. Conventions: `F.el('e-')`, `F.el('e+')`,
`F.el('gamma')`, `F.el('nu')` (every neutrino; an antineutrino open),
`F.el('p+')`, `F.el('n0')`, `F.el('Be')` and `F.el('He')` for the
${}^{8}\text{Be}$ nucleus and the $\alpha$ particles. Referents (`ch33/COLOR.md`):
`xi-minus`, `lambda-zero`, `pi-minus` of Example 33.3(a) and `k-plus`,
`mu-plus` of (b), drawn with `F.ref` in `sim-decay-checker`. The muon and the
tau of the other decays are `F.cat(3)` and `F.cat(5)` (0 and 1 sat too near the electron's blue).

## Figures

```
sim-annihilation · Figure 33.13 · antimatter-and-annihilation · value add: flow by animation (the electron and the positron close in head-on, vanish in a flash, and two photons leave back to back along a new line, faster than the pair came in, so the reader sees the momentum stay zero rather than reading it) · arrows: kinematic (the book's arrows on the incoming pair and the outgoing photons) · moving: the pair and the photons on one clock, 0 to 4.6 model seconds at rate 1, the meeting at 2.2, hold 1.2 s; physical time, linear · no slider or choice: the book's one case is the lesson, and a speed or a second pair would change nothing the reader is asked to see · headline per phase: "An electron and a positron close in head-on, so their total momentum is zero." then "They annihilate into two identical photons that move apart in opposite directions." · readout: $\kErest + \kErest = 2(0.511\;\text{MeV}) = \kEgam + \kEgam$; no note · graph none · 2D, motion along lines in a plane (rule 28.1)
sim-decay-checker · Sim · check-conservation-in-decays, strangeness-conservation, lepton-family-numbers, baryon-number-conservation, particle-lifetime-and-force · value add: variation by choice (eight decays the section names, each summed before and after for charge, $B$, $L_{e}$, $L_{\mu}$, $L_{\tau}$ and $S$, the change named where a number is not conserved) and standardisation (Example 33.3's bookkeeping as one table the reader can turn to any decay), with the parent's lifetime marked against the ranges of strong and weak decays · arrows: symbolic (the reaction arrow) · still: a decay's quantum numbers have no clock, and the products are not shown flying (rule 14) · choice: decay (F.select, eight options; Ξ⁻ → Λ⁰ + π⁻ the default, Example 33.3(a); then K⁺ → μ⁺ + ν_μ, μ⁻ → e⁻ + ν̄_e + ν_μ, τ⁻ → μ⁻ + ν̄_μ + ν_τ, n → p + e⁻ + ν̄_e, ⁸Be → α + α from the text, and the two decays the text rules out, n → p + e⁻ with no antineutrino and μ⁻ → e⁻ + ν̄_e with no ν_μ); a change crossfades the particles, tallies and verdict (rule 15 of manim-style) · headline from the tallies, e.g. "Strangeness changes by +1 while everything else is conserved, so only the weak force can cause this decay." or "$L_{e}$ goes from 0 to +1, so this decay never happens." · readout: the decay and its telling sum, e.g. $\Xi^{-} \to \Lambda^{0} + \pi^{-}\quad S:\ -2 \to -1 + 0 = -1$, morphing by meaning between decays; no note · graph: a log ruler of lifetime, $10^{-24}$ to $10^{4}$ s fixed, the strong band $10^{-23}$ to $10^{-16}$ s and the weak range from $10^{-16}$ s on, below the table · 2D, a table and a ruler (rule 28.1)
```

Labels on `sim-annihilation`: everything moves, so nothing is labelled on the
scene (rule 26.7); a legend names the electron, the positron and the photon,
and hover names carry each body. Labels on `sim-decay-checker`: each particle's
symbol under its disc (at most four, still), the six row names and the column
heads "before" and "after"; the ruler's two bands named once. Antiparticles
are open discs in their particle's hue, the bar in the label.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_34_04_01.jpg` (33.12) | keep, photo, 200 | the text points at it ("see Figure 33.12") |
| `Figure_34_04_02.jpg` (33.13) | original of `sim-annihilation`, 225 | sketch replaced |
| `Figure_34_04_03.jpg` (33.14) | keep, photo, 200 | the portrait of the man who proposed quarks, closing the section's turn to substructure (chapter notes) |

## Extra simulations considered

- The table's particles on a log mass axis, leptons beside hadrons. Left: Table
  33.2 gives the masses, and the section's lesson is in its quantum numbers.
- The π⁰ as its own antiparticle in the annihilation figure. Left: its photon
  energy is the keyed answer to the first problem.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Problem | 8 | 4 keyed: `fs-id1169737757656` (67.5 MeV), `fs-id1169738110551` (1 × 10¹⁴, 2 × 10¹⁷), `fs-id1169738123938` (1671 MeV, card `p3`, its CNXML id shared with 33.1's Example 33.1), `fs-id1169737817502` (3.9 eV, 2.9 × 10⁻⁸) | 4 unkeyed: `fs-id1169737793274` (π⁻ decay energy), `fs-id1169738163628` (μ⁻ decay), `fs-id1169736621520` (Σ⁰ decay), `fs-id1169737813243` (τ⁻ energy uncertainty) |
| AP test prep | 2 + 1 moved | `fs-id1858217` keyed (b), choice; `fs-id2783273` from 33.3, keyed (a), choice; `fs-id3217300` unkeyed, open with an AI approach | — |
| Conceptual | 9 | all 9, open, AI-marked approaches | — |

No Check Your Understanding box, so no `data-place` host.

## Wanted at chapter level

- variables `E_0rest` (rest energy of the electron or the positron, 0.511 MeV, concept `rest-energy`) and `E_gamma` (energy of each photon of the annihilation, concept `photon-energy`) → 33.4-matter-and-antimatter; the annihilation readout writes `\kErest` and `\kEgam`.
- variables `B_bary` → 33.4-mesons-and-baryons; `L_e`, `L_mu`, `L_tau` → 33.4-lepton-families; `S_str` → 33.4-forces-reactions.
- forms `eq-muon-decay`, `eq-tau-decay` → 33.4-lepton-families; `eq-neutron-decay-33` → 33.4-forces-reactions.
- `ch33/COLOR.md` 33.4 row: the page binds `energy`, `mass`, `time` and also `charge` (the decay checker's charge row); `xi-minus`, `lambda-zero`, `pi-minus`, `k-plus`, `mu-plus` are the referents, and the checker's muon and tau take `F.cat(3)` and `F.cat(5)` (0 and 1 sat too near the electron's blue).
- the key of `fs-id1169738123938`(c) prints the $\tau^{-}$ decay as $\tau^{-} \to \mu^{-} + \nu_{\mu} + \bar{\nu}_{\tau}$, the text as $\tau^{-} \to \mu^{-} + \bar{\nu}_{\mu} + \nu_{\tau}$ (eq-tau-decay); kept as printed and named in `notes`.

Applied by the chapter pass (2026-10-05): All three form anchors and the five variable anchors as asked; `E_0rest` (with `redefines`, the electron's or positron's 0.511 MeV) and `E_gamma` (concept `photon-energy`, typed `energy` on the row as in 30.4) added at `33.4-matter-and-antimatter`. The AP item on the Z boson's decay arrives from 33.3 as `ap4`. `ch33/COLOR.md` binds energy, charge and time for 33.4 and records the checker's `F.cat(3)` and `F.cat(5)`. The tau key is kept as printed and named in `notes`.

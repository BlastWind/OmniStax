# Plan: 33.1 The Yukawa Particle and the Heisenberg Uncertainty Principle Revisited

Written before the page was built (root rule 5), under `ch33/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints no headers of its own; the four below are OmniStax's, set at
its changes of subject. Example 33.1 is an `<h3>` span of its own.

| Span | Header | What it holds |
|---|---|---|
| `force-carriers` | Forces carried by particles (OmniStax) | Yukawa's proposal that a force is carried by exchanged particles; Figure 33.3 |
| `virtual-particles` | Virtual particles (OmniStax) | The pion named, $\kdE\,\kdt \ge h/4\pi$, $\kdE = \km\kc^{2}$, $\kd \approx \kc\,\kdt$, virtual particles defined |
| `pion-mass` | Example 33.1 · Calculating the Mass of a Pion | 1 fm gives $3.3\times10^{-24}$ s, 100 MeV, $100\;\text{MeV}/c^{2}$ |
| `pions-and-muons` | Pions and muons (OmniStax) | Freeing the pion, the three pions found, mesons named, the muon and "Who ordered that?" |

## Concepts

All seven are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `virtual-particle-exchange` | `force-carriers` | reinforced in `virtual-particles` |
| `pion`, `virtual-particle`, `range-and-carrier-mass` | `virtual-particles` | `range-and-carrier-mass` used in `pion-mass` |
| `estimate-carrier-mass` | `pion-mass` | — |
| `meson`, `pions-and-muons` | `pions-and-muons` | — |

Earlier concepts used: `carrier-particle` and `force-field` (4.8) and
`strong-and-weak-nuclear-forces` (31.3) in `force-carriers`;
`energy-time-uncertainty` (29.7), `rest-energy` (28.6), `plancks-constant`
(29.1), `speed-of-light-in-vacuum` (25.3), `conservation-of-energy` (7.6) in
`virtual-particles`; `uncertainty-principle-calculation` (29.7),
`electron-volt` (19.1), `mass-energy-equivalence` (28.6) in `pion-mass`;
`nucleons` (31.3) in `pions-and-muons`.

## Types the page binds

`energy` ($\kdE$, the MeV the pion borrows), `time` ($\kdt$), `position` (the
range $\kd$), `velocity` ($\kc$), `mass` ($\km$, the pion masses in
MeV/$c^{2}$). Planck's constant is ink. Conventions: the proton `F.el('p+')`,
the neutron `F.el('n0')`. Referent: `pion`, the pion that Figure 33.3 draws and
Example 33.1 weighs, drawn with `F.ref`.

## Figures

```
sim-pion-exchange · Figure 33.3 · virtual-particle-exchange, virtual-particle, range-and-carrier-mass, estimate-carrier-mass, pion · value add: flow by animation (the π⁺ leaves the proton, which becomes a neutron, crosses the gap at nearly c and is caught by the neutron, which becomes a proton, while the borrowed ΔE is held only for the crossing), variation by slider (the range d sets how long the pion may live and so how much energy, and mass, it may borrow) and a graph the book lacks (the borrowed ΔE against time, a rectangle whose corner always lands on ΔE Δt = h/4π) · arrows: kinematic (the pion's flight from proton to neutron) · moving: the pion flies on a clock in units of 10⁻²⁴ s, linear, 1.2 units a second, the scene half a unit before emission and after capture, hold 1.2 s; the exchange is an event in time and its duration is the lesson (rule 14) · slider: d (position, the range, 0.30 to 3.00 fm, step 0.05, default 1.00 fm, Example 33.1's; a dashed circle at 0.71 fm, where the estimate gives the measured π± mass of 139.6 MeV/c², which the text names; the lower end stays above the 0.2 fm that answers the K-meson problem) · headline: "A pion with range $\kd = 1.00$ fm, moving at nearly $\kc$, can exist for $\kdt \approx \kd/\kc = 3.3\times10^{-24}$ s." (at the circle: "... the estimate lands on the measured $\pi^{\pm}$ mass, $140\;\text{MeV}/c^{2}$.") · readout: $\kdE \approx \frac{h}{4\pi\,\kdt} = \frac{6.63\times10^{-34}\;\text{J·s}}{4\pi(3.3\times10^{-24}\;\text{s})} \approx 100\;\text{MeV}$, so $\km \approx 100\;\text{MeV}/\kc^{2}$, the book's rounding chain (Δt to two figures, then ΔE, 1 MeV = 1.6 × 10⁻¹³ J); no note, the readout says it all · graph below: ΔE (0 to 400 MeV, fixed; the 0.30-fm end needs 330) against t (0 to 10 × 10⁻²⁴ s, fixed; 3.00 fm needs 10), with the scene's x drawn to the same horizontal scale (3 fm to 10 × 10⁻²⁴ s, since the pion moves at c), so the pion sits above its moment on the time axis; the rectangle fills as the pion flies, the hyperbola dashed · 2D, a relation between quantities on a line (rule 28.1)
```

Labels on `sim-pion-exchange`: "proton" and "neutron" beside the two nucleons,
which stand still, each flipping with the identity it takes; the bracket
"d = 1.00 fm" under them; "ΔE Δt = h/4π" on the hyperbola. The pion moves, so it
carries no label (rule 26.7): a legend swatch names it π⁺, and hover names carry
the pion, both nucleons, the rectangle and the curve. Five labels, under six.
The nucleons are drawn far smaller than the gap, as the book draws them.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_34_01_01.jpg` (33.3) | original of `sim-pion-exchange` | sketch replaced |
| `Figure_34_01_02.jpg` | not in the module's text | unused by the book |

## Extra simulations considered

- A carrier choice (pion, kaon, W) landing on its range. Left: the kaon's range
  is the keyed K-meson problem, and the W belongs to 33.2 and 33.6.
- The muon beside the pion on one mass scale. Left: the text's point about the
  muon is that it ignores the strong force, which no slider shows.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Problem | 3 | 2 keyed: `fs-id1169738014931` (3 × 10⁻³⁹ s), `fs-id1169737742485` (1.99 × 10⁻¹⁶ m) | 1 unkeyed: `fs-id1169738013472` (the mass of a carrier with range 10⁻³⁰ m) |

No conceptual questions, AP items or Check Your Understanding boxes. The id of
Example 33.1 (`fs-id1169738123938`) is reused by a problem in 33.4, which gives
its card its own id; the example's anchor here is unchanged.

## Wanted at chapter level

- `eq-energy-time-uncertainty-33` → 33.1-virtual-particles
- `eq-virtual-particle-time` → 33.1-virtual-particles
- `eq-virtual-particle-energy` → 33.1-virtual-particles
- `eq-range-of-force` → 33.1-virtual-particles
- `eq-pion-lifetime` → 33.1-pion-mass
- `eq-pion-energy` → 33.1-pion-mass
- `eq-pion-mass` → 33.1-pion-mass
- variables `ΔE`, `Δt`, `h_planck`, `m`, `c` → 33.1-virtual-particles; `d` → 33.1-virtual-particles
- forms `eq-virtual-particle-energy` and `eq-pion-mass` write plain `m` in `ktex`/`latex`; the page writes `\km` (mass is typed since 2026-10-04), so their `ktex` could take `\km`.
- edge `meson` → `hadron` points forward (meson is introduced in 33.1, hadron in 33.4), and the meson statement's "made of a quark and an antiquark" is 33.5's; the chapter pass may move the edge or the statement.
- `ch33/COLOR.md` 33.1 row: the page binds `energy`, `time`, `position`, `velocity` and `mass`.

Applied by the chapter pass (2026-10-05): All seven form anchors and the six variable anchors as asked; `eq-virtual-particle-energy` and `eq-pion-mass` now write `\km` in their `ktex`, and so does 33.3's `eq-mass-from-energy-33`. The edge `meson` → `hadron` is gone and `meson` rests on `mass`; its statement is now the 33.1 glossary's, a particle whose mass is intermediate between the electron and nucleon masses, the name now covering a class, and 33.4's `mesons-and-baryons` rests on `meson`, so the quark-antiquark make-up stays with 33.5's `quark-composition-of-hadrons`. `ch33/COLOR.md` binds mass in 33.1.

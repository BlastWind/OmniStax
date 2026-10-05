# Plan: 33.2 The Four Basic Forces

Written before the page was built (root rule 5), under `ch33/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints no headers, so all five are OmniStax's, set at the stops of its
argument: the forces tabulated, the force carried by a virtual particle and graphed,
QED, the gluon, and the carrier's mass setting the range.

| Span | Header | What it holds |
|---|---|---|
| `four-forces` | The four basic forces (OmniStax) | The opening paragraph and Table 33.1 |
| `carrier-exchange` | Forces carried by virtual particles (OmniStax) | "Although these four forces …", `sim-carrier-exchange`, the paragraph naming the Feynman diagram |
| `qed` | Feynman diagrams and QED (OmniStax) | The pion diagram, Feynman, QED |
| `gluons` | Gluons (OmniStax) | Why gluons and not pions; carriers are bosons |
| `carrier-mass-and-range` | Carrier mass and range (OmniStax) | Massless carriers reach infinitely far, the massive W and Z do not; strengths change at close range |

## Concepts

All five are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `properties-of-the-four-forces` | `four-forces` | reinforced in `carrier-mass-and-range` |
| `feynman-diagrams` | `carrier-exchange` | reinforced in `qed` |
| `quantum-electrodynamics` | `qed` | — |
| `gluon` | `gluons` | — |
| `carrier-mass-sets-range` | `carrier-mass-and-range` | — |

Earlier concepts used: `four-basic-forces` (4.8) in `four-forces`;
`virtual-particle-exchange`, `virtual-particle` (33.1) in `carrier-exchange`; `pion` (33.1)
in `qed` and `gluons`; `photon` (29.2) in `carrier-exchange`; `range-and-carrier-mass`,
`rest-mass` in `carrier-mass-and-range`; `strong-and-weak-nuclear-forces` (31.3) in
`gluons`. QED, the gluon and the bosons have no book exercise here; the gluon comes back
in 33.6.

## Types the page binds

`position` (the separation $\kd$ and the diagram's $x$ axis, a range), `time` (the
diagram's $t$ axis and the carrier's flight $\kdt$), `energy` (the borrowed $\kdE$ and the
pion's rest energy $\kErest$ in the readout), `velocity` ($\kc$ in the readout). Planck's
constant, the relative strengths and counts are ink. Referents, as `ch33/COLOR.md` names
them: the two positive charges of Figure 33.4 (`charge-1`, `charge-2`) and the exchanged
$\pi^{+}$ of Figure 33.6 (`pion`). The proton and the neutron of Figure 33.6 wear
`F.el('p+')` and `F.el('n0')` and are not referents; the photon wears `F.el('gamma')`.

## Figures

```
sim-carrier-exchange · Figure 33.4 + 33.5 + 33.6 · feynman-diagrams, virtual-particle-exchange, carrier-mass-sets-range, quantum-electrodynamics · value add: flow by animation (the carrier leaves the first particle, which recoils at once, crosses the gap at the speed of light and is caught by the second, which recoils only then; the Feynman diagram above is traced line by line from the same clock, on the same x axis as the particles beneath, so the diagram is read as the history of the scene) and variation by choice and slider (the carrier, a photon between two positive charges or a π⁺ between a proton and a neutron that change identity at its two ends; an eye that catches the carrier in passage, Figure 33.4(b); the separation, which a photon crosses at any length and a π⁺ only within 0.71 fm) · arrows: kinematic (the book's recoil arrows on the charges of 33.4(a), the carrier travelling between them), plus the symbolic time arrows on the diagram's lines · moving: the particles and the carrier on one clock, 0 to 20 × 10⁻²⁴ s in about 5.7 s, holding 1.2 s; physical time, linear · choices: carrier (photon, π⁺), observer (none, an eye), discrete states; slider: d (position, 0.40 to 2.00 fm, 0.50 fm by default; a dashed circle at 0.71 fm, the π⁺'s reach, with the π⁺ chosen) · headline per state, e.g. "Charge 2 recoils only when the virtual photon arrives, $\kdt = 1.67 \times 10^{-24}$ s after charge 1." · readout: $\kdE \approx h\kc/4\pi\kd$ with the numbers, as Example 33.1 runs it; note: the photon has no rest energy and crosses any $\kd$, or the π⁺ needs its rest energy $\kErest = 139.6$ MeV and reaches only 0.71 fm · graph: the Feynman diagram above the scene strip, sharing its x axis (x −1.5 to 1.5 fm, t 0 to 20 × 10⁻²⁴ s, fixed; the extremes reach ±1.18 fm) · 2D, a graph and a line of particles (rule 28.1)
```

Model, stated in the code: both particles start at rest, as in Figure 33.4(a), so their
lines run straight up the diagram until the exchange. The first emits at
$t = 7\times10^{-24}$ s; the carrier crosses $\kd$ at $\kc$, so the second recoils
$\kdt = \kd/\kc$ later. The recoil speed drawn grows with the energy the carrier takes
across ($\propto 1/\kd$); it is drawn, not computed, since the book gives no force law for
the exchange. The book's Figure 33.5 and 33.6 draw the particles approaching before the
exchange; starting them at rest keeps a separation the slider can set, since approaching
particles would close any gap. With the π⁺ chosen and $\kd$ beyond its reach, nothing is
emitted and both lines run straight up: the bracket of its reach falls short of the
neutron. The eye stops the carrier at seven tenths of the gap; the first particle has
recoiled, the second never does. $h = 6.63\times10^{-34}$ J·s, $\kc = 3.00\times10^{8}$
m/s, 1 MeV $= 1.602\times10^{-13}$ J, the π⁺'s rest energy 139.6 MeV (33.1), so its reach
is $h\kc/4\pi\kErest = 0.71$ fm.

Labels: on the diagram, the lines' names where they start and, for the pion, where they
leave the vertices (charge 1, charge 2; or p, n, n, p), the carrier's name under its line,
and the brackets $\kd$, $\kdt$ and the π⁺'s reach; "eye" over its line. At most six entity
labels; the moving particles in the strip carry none, and hover names say what each is.
A charge's sign is a + drawn on its ball, so the π⁺ is seen carrying the proton's + across.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_34_02_01.jpg` (33.4) | original of `sim-carrier-exchange` | sketch replaced |
| `Figure_34_02_02.jpg` (33.5) | original of `sim-carrier-exchange` | folded |
| `Figure_34_02_04.jpg` (33.6) | original of `sim-carrier-exchange` | folded: the same exchange with another carrier, one choice away |

Widths 350, 250, 250. Table 33.1 stays in the text as a `div.book-table` with its three
footnotes.

## Extra simulations considered

- The four forces' carriers on a log axis of mass against range (Table 33.1 drawn). Left:
  33.1's figure walks the range against the carrier's mass, and the range slider here
  already shows a massless carrier against a massive one.
- The relative strengths on a log ruler. Left: the table reads four numbers better, and
  33.6 draws the strengths against energy.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| AP test prep | 8 | 8: keyed `fs-id3312644` (d), `fs-id1951741` (d), `fs-id3634087` (b), `fs-id2185855` (a); open with AI-marked approaches `fs-id1880717`, `fs-id3276851`, `fs-id1277434`, `fs-id1823451` | — |
| Problem | 2 | 1: `fs-id1169738014296` (multi, 10⁻¹¹ and 1) | `fs-id1169737705364`, unkeyed |

No Check Your Understanding box, so nothing inline. Erratum carried as printed and named in
`notes`: the fourth objective reads "the exchange of a between a proton and a neutron",
the $\pi^{+}$ missing.

## Wanted at chapter level

- variables rows in 33.2 for the symbols the figure's slider, labels and readout write, none of which has a 33.2 row: `d` (`\kd`, position, the separation the carrier crosses), `Δt` (`\kdt`, time, the carrier's flight), `ΔE` (`\kdE`, energy, the energy borrowed for the carrier), `c` (`\kc`, velocity), `E_0rest` (`\kErest`, energy, the π⁺'s rest energy), `h_planck` (untyped)
- `ch33/COLOR.md` 33.2 row: the page binds `time`, `position`, `energy` and `velocity` (the readout writes $\kdE$, $\kErest$ and $\kc$), not only time and position
- No anchors (the section has no forms); no concept, edge or symbol row needs changing.

Applied by the chapter pass (2026-10-05): Variables `d` (with `redefines`, the separation the carrier crosses), `Δt`, `ΔE`, `c`, `E_0rest` and `h_planck` added, anchored at `33.2-carrier-exchange`; `ch33/COLOR.md` gives 33.2 time, position, energy and velocity.

# Plan: 32.5 Fusion

Written before the page was built (root rule 5), under `ch32/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints no header of its own in this module; every header is
OmniStax's, set where one idea stops and the next begins. The opening paragraph
is the section's own introduction and stays first. Example 32.2 is its own block
under an `<h3>`, as the book's examples are throughout.

| Span | Header | What it holds |
|---|---|---|
| `nuclear-fusion` | Nuclear fusion | The opening paragraph and Figure 32.11; fusion defined and read off the BE/$A$ curve, Figure 32.12 |
| `coulomb-barrier` | The Coulomb barrier | The hill with a well in it, Figure 32.13 + 32.14 |
| `fusion-by-tunneling` | Tunneling and temperature | Why the Sun fuses at all, and why temperature sets the rate |
| `proton-proton-cycle` | The proton-proton cycle | The three reactions, their overall effect, the Sun's thermostat, Figure 32.15 |
| `solar-neutrinos` | Solar neutrinos | Bethe, the neutrino detectors and the solar neutrino problem, Figures 32.16 and 32.17 |
| `fusion-on-earth` | Fusion reactions on Earth | The deuterium and tritium reactions, the fuel in sea water, the neutron reactions |
| `ignition-and-break-even` | Ignition and break-even | Temperature, density and time; the two milestones |
| `magnetic-confinement` | Magnetic confinement | The tokamak and ITER, Figure 32.18 |
| `inertial-confinement` | Inertial confinement | Laser-driven pellets, Figure 32.19 |
| `fusion-energy-and-power` | Example 32.2 · Calculating Energy and Power from Fusion | The worked example |

## Concepts

All fourteen are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `nuclear-fusion` | `nuclear-fusion` | used in `proton-proton-cycle` |
| `fusion-releases-energy` | `nuclear-fusion` | reinforced in `proton-proton-cycle`, `fusion-on-earth` |
| `coulomb-barrier-to-fusion` | `coulomb-barrier` | used in `fusion-by-tunneling` |
| `fusion-by-tunneling-and-temperature` | `fusion-by-tunneling` | used in `ignition-and-break-even` |
| `proton-proton-cycle` | `proton-proton-cycle` | used in `solar-neutrinos`, `fusion-on-earth` |
| `solar-neutrinos` | `solar-neutrinos` | — |
| `deuterium-tritium-fusion` | `fusion-on-earth` | used in `inertial-confinement`, `fusion-energy-and-power` |
| `ignition-and-break-even` | `ignition-and-break-even` | used in `magnetic-confinement` |
| `ignition`, `break-even` | `ignition-and-break-even` | — |
| `magnetic-and-inertial-confinement` | `magnetic-confinement` | reinforced in `inertial-confinement` |
| `magnetic-confinement-fusion` | `magnetic-confinement` | — |
| `inertial-confinement` | `inertial-confinement` | — |
| `fusion-energy-from-a-mass-of-fuel` | `fusion-energy-and-power` | — |

Earlier concepts used: `binding-energy`, `binding-energy-per-nucleon`,
`binding-energy-per-nucleon-curve`, `mass-energy-equivalence`, `mass-defect` in
`nuclear-fusion`; `electric-potential-energy`, `kinetic-energy`,
`short-range-nuclear-force-and-coulomb-repulsion` in `coulomb-barrier`;
`quantum-tunneling`, `temperature` in `fusion-by-tunneling`; `positron`,
`electron-neutrino`, `nuclear-reaction-energy` in `proton-proton-cycle`;
`neutrino` in `solar-neutrinos`; `isotopes` in `fusion-on-earth`;
`avogadros-number`, `mole`, `atomic-mass`, `power` in `fusion-energy-and-power`.

## Types the page binds

`energy` (the energy released, KE, PE, the 26.7 MeV), `position` (the separation
$r$ of two nuclei), `mass` ($m_\text{i}$, $m_\text{f}$), `velocity` ($c$), `power`
and `time` (Example 32.2), `temperature` (the $10^{8}$ K of the text). The
mass number $A$, BE/$A$'s divisor, is a count and stays in ink, as do the
constant $ke^2$ and the probability of tunneling. Conventions: protons
`F.el('p+')`, neutrons `F.el('n0')`, electrons `F.el('e-')`, positrons
`F.el('e+')`, neutrinos `F.el('nu')`, γ rays `F.el('gamma')`. No referents: the
text names no particular nucleus twice; the figures' nuclei are kinds, told by
their labels. No fact colours: the Sun is drawn in ink and soft panels, never in
a flame tint, so its layers are told by label.

## Figures

```
sim-fusion-curve · Figure 32.12 · fusion-releases-energy, deuterium-tritium-fusion, proton-proton-cycle (reinforced) · value add: variation by choice (each of the section's seven fusion reactions placed on the BE/A curve, reactants hollow and products filled, so the climb to greater BE/A is seen for every one, while the readout turns the mass destroyed into the energy the book prints) and standardisation (the curve redrawn from the book's Appendix A masses, its light end enlarged beside the whole so ²H, ³H, ³He and ⁴He can be told apart) · arrows: symbolic (reactant to product, "fuses into", as the book's bracket says "fusion produces energy") · still: a reaction is a before and an after, nothing in the idea has a clock · choice (dropdown, seven options would wrap): reaction ¹H + ¹H | ¹H + ²H | ³He + ³He | ²H + ²H → ³H | ²H + ²H → ³He | ²H + ³H | ²H + ²H → ⁴He (strings; ²H + ³H by default, Example 32.2's reaction, 17.59 MeV) · headline: "Fusing ²H and ³H into ⁴He raises BE/A from 1.11 and 2.83 MeV to 7.07 MeV." · readout: E = (m_i − m_f)c² = (5.030151 u − 5.011268 u)c² = (0.018883 u)c² = 17.59 MeV; a note only for ¹H + ¹H, where m_f counts the positron and the electron the ²H atom gives up · graph alone, two panels: the whole curve (A 0 to 250, BE/A 0 to 10 MeV, the book's) with its light end boxed, and that box enlarged (A 0 to 8, BE/A 0 to 8 MeV) · 2D: a relation between quantities (rule 28.1)
sim-coulomb-barrier · Figure 32.13 + 32.14 · coulomb-barrier-to-fusion, fusion-by-tunneling-and-temperature · value add: flow by animation (a deuteron approaches a triton, slows, stops and is turned back, or tunnels through and fuses into ⁴He and a neutron, which the book freezes as arrows in two panels) and variation by slider (the kinetic energy decides how far up the barrier the pair climbs, how wide the barrier left is and how often a pair tunnels) · arrows: kinematic (the nuclei approaching and flying apart, the neutron and ⁴He leaving a fusion, the ball rolling on the hill) · moving: one approach per loop in the frame of the triton, time linear, the speed from energy conservation; each loop's outcome drawn from the tunneling probability (WKB through a Coulomb barrier cut at contact), seeded by the loop, above the barrier top every pair fuses; a loop is the trajectory, at least 4 s, holding 1 s · slider: KE, the kinetic energy of the pair far apart (energy, 0.05 to 0.60 MeV, 0.10 by default, a dashed circle at the barrier top ke²/R = 0.444 MeV, where R = 3.24 fm is the contact distance from r = r₀A^{1/3}) · headline: "A deuteron with 0.10 MeV turns back 14.4 fm from the triton unless it tunnels through the barrier." (above the top: "With 0.60 MeV the deuteron passes over the barrier and fuses.") · readout: r_min = ke²/KE = (1.44 MeV·fm)/(0.10 MeV) = 14.4 fm; above the top KE = 0.60 MeV > ke²/R = (1.44 MeV·fm)/(3.24 fm) = 0.444 MeV, a new form, so the formula morphs; note: about how many pairs in 100 tunnel at this energy, which the loops make visible · graph below: PE against r (0 to 40 fm, −0.2 to 0.8 MeV, fixed), the energy as a level line, the point at the deuteron's r riding it, the barrier left between r_min and R shaded; the nuclear well drops out of the box as the book's does, its depth tens of MeV · 2D: the scene and graph share one r axis, so the hill and the nuclei line up (rule 28.1)
sim-sun-fusion · Figure 32.15 · proton-proton-cycle, solar-neutrinos, nuclear-fusion (used) · value add: flow by animation (six protons and two electrons become ⁴He, two protons, two neutrinos and six γ rays step by step, the first two reactions twice over, the positrons annihilating; the neutrinos leave the Sun at once while the γ energy wanders; then the core expands when too hot and contracts when too cool, the book's arrows played) and standardisation (one energy tally adding the three reactions and the annihilations to the book's 26.7 MeV) · arrows: kinematic (the neutrino leaving, the photon's random walk, the expanding and contracting core) · moving: a story slider, since the cycle is an order of steps rather than a clock (stops: start, ²H, annihilation, ³He, ⁴He, too hot, too cool), its transport play · timeline · speed · story slider: step (untyped, 0 to 6, 0 by default) · headline per stop, e.g. "Twice, two protons fuse into ²H, giving off a positron and a neutrino: 0.42 MeV each time." · readout: E = 2(0.42 MeV) + 2(1.02 MeV) + 2(5.49 MeV) + 12.86 MeV = 26.7 MeV, built term by term, morphing at each stop, never highlighted · graph: the energy tally as one bar under the blowup, 0 to 27 MeV · 2D: the Sun as the book draws it, a cross-section; its layers are a radius, not an arrangement in space (rule 28.1)
```

Labels on `sim-fusion-curve`: the reaction's nuclides beside their points (at most
four), ⁵⁶Fe on the whole curve, "fusion" on the box; every curve point is named by
hover. On `sim-coulomb-barrier`: "repulsive Coulomb" and "attractive nuclear" on the
curve as the book labels them (the first stepping aside where the level would cross it),
"contact" at R, "³H" under the fixed triton and a proton and neutron legend; the level line,
the moving deuteron and the fusion products are named by hover, never labelled while they move. On
`sim-sun-fusion`: "He core", "H", "fusion" on the Sun, the nuclide names in the
blowup at rest only on the stops' products (hover carries every particle), the four
segments of the tally.

Widths: 450 for Figure 32.12's original; 275 and 350 for Figure 32.13 + 32.14's two
originals; 250 for Figure 32.15's.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_33_05_01a.jpg` (32.11) | keep, photo, 275 | the text points at it: the Sun's energy |
| `Figure_33_05_02a.jpg` (32.12) | original of `sim-fusion-curve` | replaced |
| `Figure_33_05_03a.jpg` (32.13) | original of `sim-coulomb-barrier` | folded |
| `Figure_33_05_04a.jpg` (32.14) | original of `sim-coulomb-barrier` | folded |
| `Figure_33_05_05a.jpg` (32.15) | original of `sim-sun-fusion` | replaced |
| `Figure_33_05_06a.jpg` (32.16) | keep, photo, 250 | pointed at: the neutrino detector |
| `Figure_33_05_07a.jpg` (32.17) | keep, photo, 250 | pointed at: Supernova 1987A |
| `Figure_33_05_08a.jpg` (32.18) | keep, photo, 250 | pointed at: ITER, the tokamak |
| `Figure_33_05_09a.jpg` (32.19) | keep, photo, 250 | pointed at: the National Ignition Facility |
| `CNX_APPhysics_32_M5_S01_img.jpg` | on `ap1`'s card | the AP item's graph |

## Extra simulations considered

- The energy and power from a mass of fuel (Example 32.2) on two sliders. Left: it adds
  nothing a reader sees; the example is arithmetic, and two keyed problems drill it.
- The three keys, temperature, density and time, traded against one another on the way
  to ignition. Left: the book gives no criterion, so the figure would have to invent one.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| AP item | 4 | 2 keyed choices (`fs-id2720847` with its graph on the card, `fs-id1860061`); 2 open with AI approaches (`fs-id2380256` with its options, `fs-id3172212`) | — |
| Conceptual question | 4 | 4 (AI suggested approaches) | — |
| Problem | 17 | 9 keyed: `fs-id1909383`, `fs-id1403001`, `fs-id2447454`, `fs-id1586899`, `fs-id3094380`, `fs-id1514231`, `fs-id1517224`, `fs-id3154583`, `fs-id3043838` | 8 unkeyed: `fs-id2053264`, `fs-id1430227`, `fs-id2668675`, `fs-id3407549`, `fs-id2683384`, `fs-id1577856`, `fs-id1380348`, `fs-id2447565` |

No Check Your Understanding box, so no inline host. No exercise moves in or out.
Errata kept as printed and named in `notes`: the second neutron reaction printed
$n + {}^{1}\text{H} \to {}^{2}\text{H} + \gamma$ with 20.68 MeV; ITER's completion
"scheduled for 2018"; Figure 32.18's caption opening "(a)" with no (b). This page's
`fs-id1586899` is kept; 32.6 carries an unkeyed exercise of the same id, left out
there.

## Wanted at chapter level

- variables rows in 32.5: `E` (`\kE`, energy, the energy released by a reaction or a mass of fuel, as 32.1 gives it) → 32.5-nuclear-fusion; `KE` (`\kKE`, energy, the kinetic energy of two nuclei far apart) → 32.5-coulomb-barrier; `PE` (`\kPEtot`, energy, the potential energy of two nuclei) → 32.5-coulomb-barrier; `r` (`\krad`, position, the distance between the centers of two nuclei) → 32.5-coulomb-barrier
- anchors: `eq-pp-step-1`, `eq-pp-step-2`, `eq-pp-step-3`, `eq-pp-overall` → 32.5-proton-proton-cycle; `eq-dd-tritium`, `eq-dd-helium-3`, `eq-dt-fusion`, `eq-dd-gamma` → 32.5-fusion-on-earth; `eq-average-power-32` → 32.5-fusion-energy-and-power; `eq-fusion-energy-from-masses` → 32.5-nuclear-fusion (the form is `nuclear-reaction-energy`'s; the text states no such equation, the figure's readout does)
- `ch32/COLOR.md`: 32.5 binds `position` (the separation of two nuclei) and `velocity` ($c$) besides the chapter's list
- No concept, edge or symbol row needs changing.

# Plan: 32.6 Fission

Written before the page was built (root rule 5), under `ch32/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints no header of its own; these are OmniStax's, one per idea, with
the two worked examples as `<h3>` spans of their own.

| Span | Header | What it holds |
|---|---|---|
| `fission` | Nuclear fission | Fission defined; nuclear power in the world, Figure 32.20; why splitting a heavy nucleus releases energy, read off $\kBE/A$ |
| `fission-energy-example` | Example 32.3 | Calculating Energy Released by Fission |
| `neutron-induced-fission` | Neutron-induced fission | Spontaneous and neutron-induced fission, the liquid drop model, fission fragments, the chain reaction when $x > 1$, the ²³⁵U reaction and its conservation, Figure 32.21 + 32.22 |
| `critical-mass` | Critical mass and fission fuels | Neutrons lost, critical mass, why odd-$N$ nuclei fission easily, enrichment |
| `reactors` | Fission reactors | Thermalizing the neutrons, the pressurized water reactor, Figure 32.23, control rods, criticality and supercriticality, loss of coolant |
| `fuel-energy-example` | Example 32.4 | Calculating Energy from a Kilogram of Fissionable Fuel |
| `breeding` | Breeding | ²³⁹Pu, the breeding reactions, breeder reactors, plutonium as a fuel |

## Concepts

All fifteen are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `nuclear-fission`, `fission-releases-energy` | `fission` | — |
| `fission-energy-from-masses` | `fission-energy-example` | — |
| `neutron-induced-fission`, `liquid-drop-model`, `fission-fragments`, `chain-reaction-and-critical-mass` | `neutron-induced-fission` | chain reinforced in `critical-mass` and `reactors` |
| `critical-mass`, `odd-neutron-number-fissile` | `critical-mass` | — |
| `reactor-moderation-and-control`, `criticality`, `supercriticality` | `reactors` | — |
| `fission-energy-per-kilogram` | `fuel-energy-example` | — |
| `breeding-plutonium`, `breeder-reactor` | `breeding` | — |

Earlier concepts used: `binding-energy-per-nucleon`, `binding-energy-per-nucleon-curve`,
`nuclear-fusion` in `fission`; `nuclear-reaction-energy`, `atomic-mass-unit` in
`fission-energy-example`; `strong-and-weak-nuclear-forces`, `surface-tension`,
`coulombs-law`, `conservation-of-nucleon-number`, `conservation-of-charge`,
`alpha-decay-process` in `neutron-induced-fission`; `isotopes`, `rms-speed`,
`diffusion` in `critical-mass`; `mole`, `avogadros-number`,
`fusion-energy-from-a-mass-of-fuel` in `fuel-energy-example`;
`beta-minus-decay-and-the-neutrino`, `half-life`, `gamma-decay` in `breeding`.

## Types the page binds

`energy` (the 7.6 and 8.6 MeV/nucleon, 240 MeV and 171 MeV, the 2 MeV deposited,
200 MeV per fission, $8.21\times10^{13}$ J), `mass` (the masses of Example 32.3,
$m_{\text{products}}$ and $\Delta m$), `velocity` ($c$ in Example 32.3),
`power` (the reactor's power, relative to its start, in `sim-reactor`), `time`
(the half-lives of the breeding reactions and of ²³⁹Pu). Untyped: $x$, $A$, $Z$,
$N$, the share of neutrons that go on to cause fission, the percentage of rod
insertion and the count of generations and fissions. Conventions: `F.el('n0')`
for neutrons, `F.el('p+')` and `F.el('n0')` for the nucleons of a nucleus drawn
as a packing, `F.el('U')` for a ²³⁵U nucleus drawn small. Referents: `ff-1` and
`ff-2`, the two fission fragments $\text{FF}_1$ and $\text{FF}_2$ that the text
names and `sim-fission-chain` draws (chapter `COLOR.md`); the fragments' bodies
keep the nucleon convention, and their outline and their name labels wear the
referent colour.

## Figures

```
photo-power-plant · Figure 32.20 · kept photograph: the text points at it ("as seen in Figure 32.20") and its caption carries the section's facts (16% of the world's electrical power) · arrows: none · still · 2D
sim-fission-chain · Figure 32.21 + 32.22 · neutron-induced-fission, liquid-drop-model, fission-fragments, chain-reaction-and-critical-mass, critical-mass · value add: flow by animation (a neutron strikes a ²³⁵U nucleus that is drawn close up as a packing of nucleons; the drop stretches, narrows in the middle and pops into FF₁, FF₂ and x neutrons, and the same fission, with three more struck at once, starts a chain in a lump of fuel beside it, generation by generation, where the book freezes one moment of each) and variation (x and the share of neutrons that go on to cause fission: the chain dies away, holds steady or runs away, read from the bars of fissions per generation) · arrows: kinematic (the neutrons in flight, the fragments flying apart) · moving: the first fission over 1.5 s, then six generations of 0.7 s, holding 1.2 s, because a chain reaction is fissions one generation after another · controls: x (choice 2 · 3 · 4, untyped; 3 by default, the book's ²³⁵U reaction), share (slider, untyped, 0.10 to 1.00 in steps of 0.01, 0.67 by default, the two of three neutrons the book's Figure 32.22 sends on; a dashed special circle at 1/x, criticality, where the readout morphs to $x \times \tfrac{1}{x} = 1$) · headline: "Each fission sends 2.01 neutrons on to cause another, so the fissions grow from one generation to the next." (die away, hold steady) · readout: $x \times \text{share} = 3 \times 0.67 = 2.01$ neutrons that go on to cause fission per fission, forms subcritical, critical, supercritical; no note · graph beside: fissions in each generation, 0 to 6, bars on a fixed 0 to 40 axis with pinned() past it; the lump holds 100 nuclei and generation 0 is four of them, so a steady chain stands at four fissions a generation and the runaway uses the fuel up · 2D, the book's flat drawings (rule 28.1)
sim-reactor · Figure 32.23 · reactor-moderation-and-control, criticality, supercriticality, chain-reaction-and-critical-mass · value add: flow by animation (the primary water circulating through the core and the heat exchanger, steam driving the turbine and the generator, condensing and pumped back, where the book draws arrows) and variation (how far the control rods are in, and the water present or boiled away: the power climbs, holds or dies, and with the water gone the chain stops, the book's inset) · arrows: kinematic (the water and steam flowing, the turbine and generator turning, the neutrons in the core) · moving: one loop of ten neutron generations over 5 s, holding 1.2 s; the flow and the turning follow the power · controls: rods in (slider, untyped percent, 0 to 100%, 25% by default with a dashed special circle at criticality, where the readout morphs to = 1), core (choice: water · boiled away) · headline: "With the control rods 25% in, each fission sends exactly one neutron on, and the reactor's power holds steady." · readout: $\kP_{10}/\kP_{0} = (x \times \text{share})^{10} = (3 \times 0.33)^{10}$ … (to $1$ at the special), the share falling linearly with the rods from 0.40 with them out to 0.13 with them in, and to 0.02 with the water gone (a schematic model, said so in the caption) · graph beside: power over ten generations as a multiple of its starting value, fixed 0 to 3 with pinned() past it, a dashed level at 1 · 2D, the book's schematic read as a section (rule 28.1)
```

Labels on `sim-fission-chain`: "one fission, close up" over the close-up panel;
a legend for the neutron, the proton and neutron of the packing, the ²³⁵U
nucleus and FF₁, FF₂ in their referent colours; FF₁ and FF₂ are named beside the
close-up fragments once they have come to rest. Every nucleus, fragment and
neutron in the chain is named by hover, since they number up to seventy and
move. Labels on `sim-reactor` (six): "control rods", "fuel rods", "heat
exchanger", "steam turbine", "generator", "condenser"; the core, the water, the
containment, the pumps and the cooling water by hover.

Widths: 250 for Figure 32.20 (photo row); 225 and 350 for the originals of
Figure 32.21 + 32.22; 550 for Figure 32.23.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_33_06_01a.jpg` (32.20) | kept, photo row | the text points at it |
| `Figure_33_06_02a.jpg` (32.21) | original of `sim-fission-chain` | replaced |
| `Figure_33_06_03a.jpg` (32.22) | original of `sim-fission-chain` | replaced, folded |
| `Figure_33_06_04a.jpg` (32.23) | original of `sim-reactor` | replaced |

## Extra simulations considered

- The breeding chain, ²³⁸U capturing a neutron and decaying through ²³⁹Np to
  ²³⁹Pu on its two half-lives. Left: three reaction equations read well as text,
  and the build-up of ²³⁹Pu is a problem's answer.
- The energy of Example 32.3 as a bar of masses. Left: it adds no quantity the
  example does not show, and 31.6's binding-energy curve already carries it.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| AP test prep | 4 | 2 keyed choices (`fs-id2500538`, `fs-id2181068`); 2 unkeyed as open items with AI approaches (`fs-id2328532` with its options, `fs-id2701414`) | — |
| Conceptual question | 8 | 8 (AI suggested approaches) | — |
| Problem | 8 | 4 keyed (`fs-id1151311`, `fs-id2449340`, `fs-id1248028`, `fs-id744835`) | 4 unkeyed: `fs-id2070007`, `fs-id1586899`, `fs-id3008175`, `fs-id1871891` |

No Check Your Understanding box. No exercise moves in or out.

## Wanted at chapter level

- 32.6/Δm → 32.6-fission-energy-example
- 32.6/m_products → 32.6-fission-energy-example
- 32.6/FF_1 → 32.6-neutron-induced-fission
- 32.6/FF_2 → 32.6-neutron-induced-fission
- 32.6/x_fis → 32.6-neutron-induced-fission
- eq-neutron-induced-fission → 32.6-neutron-induced-fission
- eq-uranium-235-fission → 32.6-neutron-induced-fission
- eq-fission-energy → 32.6-fission-energy-example
- eq-breeding-capture → 32.6-breeding
- eq-breeding-uranium-decay → 32.6-breeding
- eq-breeding-neptunium-decay → 32.6-breeding
- variables rows 32.6/FF_1 and 32.6/FF_2: set `ref` to `ff-1` and `ff-2`, the section's referents
- variables row `P` for 32.6 (power: the reactor's power, here as a multiple of its starting value) → 32.6-reactors; the reactor Sim's readout writes `\kP`
- variables rows `E` (energy: the energy released, Example 32.3 and 32.4), `c` (velocity) and `m` (mass of a nuclide or the neutron, Example 32.3) for 32.6 → 32.6-fission-energy-example; the text writes `\kE`, `\kc`
- variables row `BE` for 32.6 (energy: the binding energy, read as $\kBE/A$ off the curve) → 32.6-fission; the text writes `\kBE`
- variables row `t_half` for 32.6 (time: the half-lives of ²³⁹U, ²³⁹Np and ²³⁹Pu) → 32.6-breeding
- `ch32/COLOR.md`: 32.6 binds `mass`, `velocity` and `time` as well as `energy` and `power`
- No concept, edge or symbol row needs changing.

Applied by the chapter pass (2026-10-05): the five rows and five forms anchored as listed, `FF_1` and `FF_2` given `ref` `ff-1` and `ff-2`; rows added for `P` at `32.6-reactors`, `E`, `c`, `m` at `32.6-fission-energy-example`, `BE` at `32.6-fission` and `t_half` at `32.6-breeding`; Example 32.3's four given masses now write `\km` so the row has its uses; `ch32/COLOR.md` records `mass`, `velocity` and `time`.

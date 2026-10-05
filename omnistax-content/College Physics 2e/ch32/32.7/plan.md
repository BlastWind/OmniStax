# Plan: 32.7 Nuclear Weapons

Written before the page was built (root rule 5), under `ch32/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints no header of its own in this module, so the six blocks carry
OmniStax headers.

| Span | Header | What it holds |
|---|---|---|
| `race-for-the-bomb` | The discovery of fission and the Manhattan Project (OmniStax) | Fission discovered in 1938, Einstein's letter, the Manhattan Project, Fermi's pile |
| `fission-bombs` | Fission bombs (OmniStax) | The gun-type uranium bomb and the plutonium implosion, Figure 32.24 + 32.25 |
| `first-bombs` | Trinity, Hiroshima and Nagasaki (OmniStax) | The Trinity test and its 10-kT yield, the two bombs dropped on Japan, Figures 32.26 and 32.27 |
| `thermonuclear-bombs` | Thermonuclear bombs (OmniStax) | The Super, the 10-MT Eniwetok test, how the H-bomb is built, Figure 32.28 |
| `energy-output` | Yield and energy output (OmniStax) | Yields from 0.1 kT to 20 MT, the energy fractions, the neutron bomb, Figure 32.29 and the yield Sim |
| `arsenals` | Arsenals and proliferation (OmniStax) | Strategic and tactical weapons, treaties, the spread of fissionable material |

## Concepts

All three are the prep pass's rows; the page adds none.

| Concept | Introduced in |
|---|---|
| `fission-bomb-assembly` | `fission-bombs` |
| `thermonuclear-bomb` | `thermonuclear-bombs` |
| `nuclear-weapon-energy-output` | `energy-output` |

Earlier concepts used: `nuclear-fission`, `neutron-induced-fission`,
`chain-reaction-and-critical-mass`, `reactor-moderation-and-control`, `breeding-plutonium`
(32.6) in `race-for-the-bomb`; `critical-mass`, `supercriticality`,
`odd-neutron-number-fissile` (32.6) in `fission-bombs`; `nuclear-fusion`,
`deuterium-tritium-fusion` (32.5) in `thermonuclear-bombs`; `energy` (7) in
`energy-output`.

## Types the page binds

`energy` (the yields, $\kE$ in the readouts of `sim-fission-chain` and `sim-weapon-yield`),
`mass` (the mass destroyed, $\kdm$, in the readout of `sim-weapon-yield`) and `velocity` ($\kc$
there). No referents: the bombs the text names (Trinity, Hiroshima, Nagasaki, Eniwetok) appear in
the figures only as yields marked on a scale and as the default of a choice, never as drawn things
the text and a figure both point at. Nuclides and particles wear the element palette: `F.el('U')`,
`F.el('Pu')`, `F.el('Li')`, `F.el('Be')`, `F.el('H')`, `F.el('He')`, `F.el('n0')`,
`F.el('gamma')` (`ch32/COLOR.md`). The fireball is a fact, `F.fact('#FFF1B8')` at its core to
`F.fact('#F08A24')` at its edge, and so is the glow of the burning fuel. The four kinds of energy
output of Figure 32.29 (blast, thermal, prompt radiation, delayed radiation) are kinds with no type,
`F.cat(0..3)` with a legend.

## Figures

```
sim-fission-chain · Figure 32.24 + 32.25 · fission-bomb-assembly, chain-reaction-and-critical-mass, supercriticality · value add: flow by animation and variation by choice (the slug fired down the barrel onto the target, or the lenses' shock converging on the plutonium and crushing it, joining subcritical material into one supercritical mass; then the initiator fires and the chain doubles generation by generation, the energy climbing a straight line on a log graph until it reaches the bomb's yield and the fireball forms, so the reader sees why the mass must be held together while some eighty generations run) · arrows: kinematic (the book's green arrow drives the slug down the barrel; the arrows between 32.25's three stages are the sequence itself) · moving: the slug or the shock and the shrinking sphere, then the neutrons of the first generations, the glow of the chain and the fireball, on one clock (assembly 1.8 s, chain 2.8 s, burst 0.9 s, hold 1.2 s) · choice: design, gun-type ²³⁵U (Hiroshima, 15 kT, default) or implosion ²³⁹Pu (Nagasaki, 20 kT) · headline per stage, e.g. "The propellant fires one subcritical ²³⁵U mass down the barrel onto the other, making one supercritical mass." · readout: $\kE = 2^{g}(200\ \text{MeV})$ with the live generation and energy, and the yield in kT at the end; each generation is taken to double the fissions (stated in the caption), 200 MeV is the section's own energy per fission and 1 kT is 4.2 × 10¹² J (Table 7.1's 4.2 × 10⁹ J per ton of TNT) · graph below (the gun is horizontal): log₁₀ of the energy in J from 10⁻¹⁵ to 10¹⁵ against the generation g from 0 to 90, fixed (the chain ends at g = 80.7 for 15 kT and 81.1 for 20 kT), the yield a dashed level · 2D: a flat section of each device, as the book draws them (rule 28.1)
sim-hbomb · Figure 32.28 · thermonuclear-bomb, deuterium-tritium-fusion, neutron-induced-fission · value add: flow by animation and standardisation (the book's schematic redrawn in section with its parts in the element palette; the story plays what the caption says in words: neutrons and γ rays from the trigger carry its energy into the fuel, neutrons make tritium from ⁶Li, the fuel is heated and compressed and fuses, and the ²³⁸U shell reflects fast neutrons back and fissions under others; each stage writes its own reaction) · arrows: none in the book (its lines are leaders), but the caption's neutrons and γ rays transmitting energy are a flow, which is why the figure moves · moving as a story slider, not a clock: the stages are a sequence of meaning the reader steps through and scrubs (stops: at rest, trigger, tritium, fusion, ²³⁸U shell); everything is a function of the story's value · no other control · headline per stage, e.g. "Neutrons from the trigger turn ⁶Li into tritium while γ rays heat and compress the fuel." · readout: the stage's reaction, morphing by meaning between stops (the tritium made in one stage moves to the reactant side of the next): n + ²³⁹Pu → FF₁ + FF₂ + xn, n + ⁶Li → ³H + ⁴He, ²H + ³H → ⁴He + n, n + ²³⁸U → FF₁ + FF₂ + xn · graph none · 2D, a flat section as the book draws it
fig-energy-fractions · Figure 32.29 · nuclear-weapon-energy-output · value add: standardisation only, so a faithful copy (the three pies side by side, as the reader compares them, in the category colours with a legend; every state the book shows is already drawn, so nothing is left to imagine) · arrows: none (leaders) · still: nothing in it has a clock or a variable · no controls · headline: "A nuclear bomb puts far more of its energy into heat and radiation than a conventional bomb does." · no readout · graph: the three pies are the figure · 2D
sim-weapon-yield · Sim · nuclear-weapon-energy-output, find-mass-change-from-energy · value add: variation by slider (the yield slides along a log ruler from 1 ton to 100 MT on which the largest conventional bombs, Trinity, Hiroshima, Nagasaki, the 10-MT Eniwetok test, the 67-MT device and the band of current arsenals are marked, and a second scale beneath reads the mass destroyed, so the reader sees that the yields of 0.1 kT to 20 MT are a few milligrams to about a kilogram of mass turned into energy, and every factor of ten in yield is one in mass) · arrows: none · still: a yield is a value, not a process (rule 14) · slider: yield (energy, log₁₀ of kT from −1 to 4.83, 0.1 kT to 67 MT, written as a yield), with specials at Trinity 10 kT, Hiroshima 15 kT (default), Nagasaki 20 kT, Eniwetok 10 MT and the 67-MT device · headline: "A yield of 15 kT, the Hiroshima bomb, is $\kE = 6.3\times10^{13}$ J, the energy of 15,000 tons of TNT." · readout: $\kdm = \kE/\kc^{2}$ with the yield converted at 4.2 × 10¹² J/kT · graph: the ruler is the figure, fixed from 1 t to 100 MT · 2D
```

Labels. `sim-fission-chain`: gun, four entity labels (explosive propellant, gun barrel, ²³⁵U target, neutron initiator); the moving slug is named by hover only (rule 26.7). Implosion, four (detonators, high-explosive lenses, ²³⁹Pu, neutron initiator), the plutonium's label leadered to a point inside its smallest radius. The graph's yield level is labelled. `sim-hbomb`: five labels (²³⁸U shell, ²³⁹Pu trigger, lithium deuteride, ²³⁹Pu and ²³⁵U rod, Styrofoam); the beryllium reflector and the shape charges are named by hover, and a legend names the neutron, the γ ray, ³H and ⁴He. `fig-energy-fractions`: a title over each pie, its percentages on the wedges, the kinds once in a legend. `sim-weapon-yield`: the two scale names, the band, and the marks; Trinity, Hiroshima and Nagasaki sit within a third of a decade, so their names step apart through the labeller with leaders.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_33_07_01a.jpg` (32.24) | original of `sim-fission-chain`, width 375 | sketch replaced |
| `Figure_33_07_02a.jpg` (32.25) | original of `sim-fission-chain` (fold), width 200 | sketch replaced |
| `Figure_33_07_03a.jpg` (32.26) | kept, `photo-trinity`, width 250 | the text points at it; the history the section tells |
| `Figure_33_07_04a.jpg` (32.27) | kept, `photo-hiroshima`, width 275 | the text points at it; the history the section tells |
| `Figure_33_07_05a.jpg` (32.28) | original of `sim-hbomb`, width 225 | sketch replaced |
| `Figure_33_07_06a.jpg` (32.29) | original of `fig-energy-fractions`, width 200 | graph redrawn faithfully |

## Extra simulations considered

- A shape charge, its blast thrown one way as momentum and energy conservation require (the
  second conceptual question). Left: the book gives no numbers or drawing for it, and the
  implosion of `sim-fission-chain` already shows the charges driving inward.
- Fallout of ⁹⁰Sr and ¹³⁷Cs decaying from 1963 against their half-lives. Left: the fourth
  conceptual question asks why the measured activities fall faster, and a figure would answer it.

## Exercises

| Kind | In the book | Set here | Elsewhere |
|---|---|---|---|
| Conceptual question | 4 | 4 (AI suggested approaches) | — |
| Problem | 12 (7 keyed) | 6 keyed | `exer-00001` (Critical Thinking, the β⁺ target; keyed) set in 32.1, where PET is taught, `source_section` 32.7 |

Five unkeyed problems are left out and named in `notes` and `exercise_notes`: `fs-id1888451`
(mass converted by 1.00 MT), `fs-id2054424` (the arsenal in kW·h and its value), `fs-id1398483`
(²³⁹Pu nuclei and mass for 20.0 kT), `fs-id2415241` (the aircraft carrier lifted),
`fs-id3179646` (heat at 10.0 km from 1.00 MT). `fs-id1596002`'s key "10 overheads" is kept as
printed. No Check Your Understanding box and no AP items, so nothing inline. No glossary.

## Wanted at chapter level

- variables row `32.7/E` (energy, `energy`): the energy released by a nuclear weapon, its yield, in the readouts of `sim-fission-chain` and `sim-weapon-yield`
- variables row `32.7/Δm` (mass, `mass`, as 32.6's row): the mass destroyed in the explosion, in the readout of `sim-weapon-yield`
- variables row `32.7/c` (`speed-of-light-in-vacuum`): in the readout of `sim-weapon-yield`

Applied by the chapter pass (2026-10-05): rows added for `E`, `Δm` and `c` at `32.7-energy-output`; the form `eq-lithium-tritium` anchored at `32.7-thermonuclear-bombs`.

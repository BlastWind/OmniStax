# Plan: 34.6 High-temperature Superconductors

Written before the page was built (root rule 5), under `ch34/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints no header, so the three headers are OmniStax's, each where the
subject changes.

| Span | Header | What it holds |
|---|---|---|
| `critical-temperature` | Superconductors and the critical temperature | Zero resistivity and its uses; Onnes and mercury at 4.2 K; $T_{\text{c}}$ defined; the elements all below 10 K |
| `ceramics` | Ceramics above 77 K | The 1986 ceramic at 35 K and the thallium ceramic at 125 K; liquid helium against liquid nitrogen and their prices; wires and uses; `sim-critical-temperature` (Figure 34.23) and `photo-levitation` (Figure 34.24), where the module sets them |
| `unidentified-superconductors` | Unidentified superconducting objects | The search for higher $T_{\text{c}}$, reports above 200 K that do not reproduce, USOs; the theory and its difficulty; `sim-ceramic` (Figure 34.25) |

## Concepts

All five are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `superconducting-critical-temperature` | `critical-temperature` | used in `ceramics`, `unidentified-superconductors` |
| `high-temperature-superconductors` | `ceramics` | reinforced in `unidentified-superconductors` |
| `superconductors-exclude-flux` | `ceramics` (the caption of Figure 34.24) | — |
| `superconductor-cooling-cost` | `ceramics` (the prices of the two coolants and the electric energy saved) | tested by the one keyed problem |
| `reproducibility-at-the-frontier` | `unidentified-superconductors` | — |

Earlier concepts used: `superconductivity` (20.3, its glossary word "superconductors" bolded here as the book bolds it, so reinforced), `resistivity` and `resistance` (20.2, 20.3), `magnetic-resonance-imaging` (22.11), `absolute-zero` (13.1), `magnetic-flux` (23.1), `electrical-energy-and-cost` (20.4).

## Types the page binds

`temperature` ($\kTemp$, $\kTempc$, the coolants' boiling points, every particular temperature the text names: 4.2 K, 10 K, 35 K, 77 K, 125 K, 293 K, 200 K, 270 K) and `resistivity` ($\krhomat$, the axis of Figures 34.23 and 34.25(a)), as `ch34/COLOR.md` plans. The notes file's "resistivity stays ink" is overruled by `COLOR.md` and the book's tables, which type it. No referents: Figure 34.23 shows one sample at a time, a single curve that keeps `resistivity` as `COLOR.md` says, and the three trials of Figure 34.25(a), which the text does not name one by one, take `F.cat(0..2)`. Conventions: `F.el` for the four elements of the lattice, Cu, O, Ba and Y.

The lattice the book draws in 34.25(b) is yttrium barium copper oxide, YBa₂Cu₃O₇: copper at the corners and at a third and two thirds along the long edges, barium and yttrium inside, oxygen between the coppers, the long axis lying across the page, two cells side by side. The chapter notes expected the thallium ceramic's five elements; the figure draws the four the book's picture shows.

## Figures

```
sim-critical-temperature · Figure 34.23 · superconducting-critical-temperature, high-temperature-superconductors, superconductor-cooling-cost · value add: variation by choice and slider (the sample sets T_c and the temperature walks through it, the resistivity falling to zero at T_c; on one logarithmic temperature scale from 1 K to 400 K, the boiling points of liquid helium and liquid nitrogen and room temperature stand beside the three critical temperatures the text gives, so the reader sees which samples cheap liquid nitrogen keeps superconducting, the economic point the text makes in words) and standardisation of the book's graph · arrows: none (the book's arrow points a label at a point) · still: a sample held at a temperature has no clock · choice: sample, a dropdown since the three names wrap as a button row (mercury, 1911, T_c = 4.2 K; the 1986 ceramic, 35 K; the 1988 thallium ceramic, 125 K), mercury by default as the book draws it, the curve's jump sliding to the new T_c as it changes; slider: T (temperature, 4.2 K by default; its range follows the sample so that T_c can be crossed by hand, 1 to 10 K for mercury, 1 to 100 K for the 1986 ceramic, 1 to 300 K for the thallium ceramic, and the reading starts at 77 K for the ceramics; dashed circles at 4.2 K liquid helium, 77 K liquid nitrogen and 293 K room temperature, the temperatures the text names, and at the sample's T_c, wherever they fall in the range) · headline: "At 4.2 K, mercury is at its $\kTempc$ and superconducts: its resistivity is zero." / "At 150.0 K, the thallium ceramic is above its $\kTempc$ and has resistivity like an ordinary conductor." · readout: $\kTemp = 4.2\;\text{K} = \kTempc$: $\krhomat = 0$ (or <, >, with $\krhomat > 0$), true in every state; note: the coldest coolant needed, "Only liquid helium, at 4.2 K, holds it at or below $\kTempc$." / "Liquid nitrogen, at 77 K, holds it below $\kTempc$.", which the coolant lines make visible and no other part says · graph alone: resistivity against temperature, log T from 1 to 400 K fixed (ticks 1, 10, 100 K), ρ from 0 to 1.15 of the room-temperature value with only 0 marked, since the three samples' resistivities differ in size and unit and the shape is the lesson; the book's own graph, mercury between 4.1 and 4.4 K in ohms, is the original · 2D: a relation between two quantities (rule 28.1)
photo-levitation · Figure 34.24 · kept photograph: the text points at it ("see Figure 34.24") and the caption carries flux exclusion · still · 2D
sim-ceramic · Figure 34.25 · reproducibility-at-the-frontier, high-temperature-superconductors · value add: 3D for (b) (the lattice is an arrangement in space, drawn by the book in perspective with its layers stacked behind one another; turned, seen along the layers or down the long axis, it shows the systematic order the caption claims), and standardisation of (a), redrawn on the book's axes and numbers · arrows: none · still: neither part has a clock, and no quantity of either is the reader's to vary (the graph is a record of three measurements); the idle spin carries the depth · no sliders or choices · headline: (a) "One sample, three trials: only once did its resistivity fall to zero, below about 230 K." (b) "Turn the ceramic to see its atoms lie in flat layers, repeated cell after cell." · no readout and no note: the figure has no live number, and a fixed one would repeat the headline (rule 26.13) · graph above the scene: (a) ρ (mΩ·cm, −0.1 to 0.6, the book's) against T (100 to 300 K, the book's), the three trials in F.cat(0), F.cat(1), F.cat(2) · 3D, physical class (rule 28.3): YBa₂Cu₃O₇ at its real cell (a = 3.82 Å, b = 3.89 Å, c = 11.68 Å) and atom positions, two cells side by side along b as the book draws them, its long c axis across the scene; balls at the book's relative sizes (barium largest, then yttrium, copper, oxygen), rods between copper and oxygen and from barium and yttrium to their nearest oxygens, as the book's scaffold has them; no ground, so pitch bounded to ±80° (the crystal has no up, but the turntable's poles would tumble it); yaw free; idle spin; snap views "as the book" (from a little above and to the side), "along the layers" (down b, the layers edge-on) and "down the long axis" (down c, the square grid); zoom buttons; hover names for each kind; without WebGL the same lattice drawn flat from the book's view, below the graph on the canvas
```

Labels on `sim-critical-temperature`: "liquid helium 4.2 K", "liquid nitrogen 77 K" and "room 293 K" beside their lines at the top of the graph, and $T_{\text{c}}$ with its value at the jump; four in all, none on a moving body; the sample is named in the headline. Labels on `sim-ceramic`: a legend of the three trials above the graph, $T_{\text{c}} \approx 230$ K at the jump, and a legend of the four elements under the graph for (b); the atoms carry hover names.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_35_06_01-a4ce.jpg` (34.23) | original of `sim-critical-temperature`, width 250 | replaced |
| `Figure_35_06_02-4648.jpg` (34.24) | kept, photo row, width 250 | the text points at it |
| `Figure_35_06_03-15a6.jpg` (34.25) | original of `sim-ceramic`, width 375 | replaced |

## Extra simulations considered

- The cost of cooling a superconducting wire against the energy a normal wire loses, with sliders on current and coolant. Left: the problem asks exactly this, and a figure would hand over its answer.
- A magnet floating over a superconductor that sinks as the sample warms through $T_{\text{c}}$. Left: the photograph shows it, and the text gives no number for the levitation to read out.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Conceptual question | 3 | 3 (AI suggested approaches) | — |
| Problem | 2 | 1 | the Critical Thinking problem on Hubble's law, `exer-87234`, moved to 34.1 where it is set as `p10` with `source_section` 34.6 |

The keyed problem: the resistance of a normal wire that wastes as much in electric energy as the liquid nitrogen costs, 0.30 Ω (the CNXML key).

## Errata carried as printed

The summary's "as high as 250 K" where the text gives reports in the vicinity of 270 K; Figure 34.23 plots resistance $R$ in ohms under a caption about resistivity; "Problem Exercises" as the header, set as problems. Dollar signs in the prose are written `&#36;`.

## Wanted at chapter level

- new variables rows for 34.6: `T_temp` (temperature, `\kTemp`, the temperature of the sample), `ρ` (resistivity, `\krhomat`, the resistivity of the sample), both written by the figure's readout and slider
- `ch34/COLOR.md` 34.6 row: binds temperature and resistivity; conventions Cu, O, Ba, Y (the lattice of 34.25(b) is YBa₂Cu₃O₇, not the thallium ceramic); no referents, the trials of 34.25(a) as `F.cat`
- No concept, edge or symbol row needs changing.

Applied by the chapter pass (2026-10-05): `T_c` anchored to 34.6-critical-temperature; `T_temp` and `ρ` (resistivity) added there. `ch34/COLOR.md` records Y, Ba, Cu and O, and the trials as `F.cat`. The 3D view once called "as the book" is now "the book’s view", as the book's other lattices name it.

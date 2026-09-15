# Plan: 19.5 Capacitors and Dielectrics

Written before the page was built, under `ch19/config.md`, which replaces the
per-section stop of rule 2 and the plan review of rule 5 with a plan file left
for review. Module m42331. Six figures and one photograph, the book's numbers
19.12 to 19.19 and Table 19.1.

## Sub-concepts, and where each concept is introduced

| span | header | concepts introduced |
|---|---|---|
| `capacitor-defined` | A capacitor stores separated charge (the agent's) | `capacitor` |
| `charge-and-voltage` | The charge stored, the voltage applied, and capacitance (the agent's) | `capacitance` |
| `parallel-plate` | Parallel Plate Capacitor (the book's) | `parallel-plate-capacitance` |
| `membrane` | The potential difference across a cell membrane (the agent's) | — (uses the two above) |
| `dielectric` | Dielectric (the book's) | `dielectric`, `capacitance-with-dielectric`, `dielectric-strength` |
| `polarization` | Why a dielectric raises the capacitance (the agent's) | `dielectric-polarization` |

The book prints two headers of its own, Parallel Plate Capacitor and
Dielectric, and `config.md` keeps them as it writes them; the other four are
the agent's. The membrane paragraph is given a span of its own because it is
the one passage of the section that is not about a manufactured capacitor,
and because Figure 19.19 belongs beside it: the book prints that figure among
the conceptual questions, which leave the text for the Exercises tab, so the
figure sits at the one place in the narrative that discusses the membrane.
`notes` says so.

## Figures

`sim-capacitor` · Figure 19.12 · `capacitor` · value add: standardisation and
intuition, since the rolled capacitor and the parallel plate one are the same
two conductors and the reader is shown that by a choice rather than by two
drawings · still, because a charged capacitor sitting on a battery has no time
in it · choice of construction (parallel plate, rolled) and a slider on the
stored charge $Q$ (`charge`) · headline reads that the two conductors hold
$+Q$ and $-Q$ and the capacitor is neutral overall · no graph · 2D.

`sim-field-charge` · Figure 19.13 · `capacitance` · value add: variation, since
the number of field lines is drawn proportional to the charge and the reader
watches $E$, and with it $V$, follow $Q$ up and down, which a single drawing
cannot show · still, for the same reason · sliders on the charge $Q$
(`charge`) and the capacitance $C$ (`capacitance`) · headline reads
$Q = CV$ with the live numbers · no graph · 2D. It is not folded into
Figure 19.15: the book draws the plates twice because it is making two
different points, one that the field and the voltage follow the charge and one
that the capacitance follows the geometry, and a reader who has both points on
one canvas with four sliders cannot see which slider carries which argument.

`fig-typical-capacitors` · Figure 19.14 · `capacitor` · photograph, kept: the
text points the reader at it, "Figure 19.14 shows some common capacitors",
and it shows how little the size of a capacitor says about its value.

`sim-parallel-plate` · Figure 19.15 · `parallel-plate-capacitance` · value add:
variation, since the two factors the section argues for from the Coulomb force,
a larger area and a smaller separation, are put under the reader's hand and the
capacitance answers · still · sliders on the plate area $A$ (untyped, ink), the
separation $d$ (`position`) and the voltage $V$ (`voltage`), defaulting to
Example 19.8's $1.00\ \text{m}^2$, $1.00\ \text{mm}$ and $3.00\ \text{kV}$, so
the figure loads on the worked example · headline reads
$C = \varepsilon_0 A/d$ and $Q = CV$ with the live numbers · no graph · 2D.

`sim-dielectric` · Figure 19.16 · `capacitance-with-dielectric`,
`dielectric-strength`, `dielectric-polarization` · value add: variation and
intuition, since the material is a choice from Table 19.1 and the same charge
then gives a smaller field, a smaller voltage and a greater capacitance, which
is the whole argument of the Dielectric header made visible · still: the
molecules turning to face the plates is the state the material and the charge
put them in, not a process with a clock, as `config.md` records · a dropdown
of Table 19.1's thirteen materials (untyped, since $\kappa$ is a pure number,
and a dropdown because a row of thirteen buttons would wrap, rule 26.1) and
sliders on the charge $Q$ (`charge`) and the separation $d$ (`position`) ·
headline reads $E = E_0/\kappa$ and $C = \kappa\varepsilon_0 A/d$ with the live
numbers, and a second line gives the voltage the material's dielectric strength
allows at this separation · no graph · 2D.

`sim-polarized-atom` · Figure 19.17 · `dielectric-polarization` · value add:
standardisation alone, so by rule 24.4 it is a faithful copy: no sliders and no
motion. The book's own figure is an artist's conception whose shift is drawn
exaggerated and carries no number, so a slider would have to invent one, and
polarization is already under the reader's hand in Figure 19.16 · still · no
controls · headline names the unpolarized atom and the polarized one · no
graph · 2D.

`sim-water-molecule` · Figure 19.18 · `dielectric-polarization` · value add:
standardisation alone, a faithful copy for the same reason · still · no
controls · headline names the oxygen end and the hydrogen ends and the
$104.5^\circ$ between the bonds · no graph · 2D. Drawn in the element palette,
`F.el('O')` and `F.el('H')`, as rule 7 requires of a molecule with an identity.

`sim-membrane` · Figure 19.19 · `capacitor`, `parallel-plate-capacitance` ·
value add: animation, since diffusion carrying ions across until the Coulomb
force halts them is a process in time and the still picture shows only its end ·
**moving**: potassium ions leave the cell and chloride ions enter until the
layers of charge they leave behind hold the rest back, one loop of about five
seconds with a hold at the end · slider on the membrane thickness $d$
(`position`, 7 to 10 nm, the book's range) · headline reads $E = V/d$ with the
live numbers at the book's $-70\ \text{mV}$ · no graph · 2D. The ions are
drawn in the element palette, `F.el('K')`, `F.el('Cl')` and `F.el('Na')`.

Figure 19.12's book image is `Figure_20_05_01a.jpg` at 200, 19.13's
`Figure_20_05_02a.jpg` at 150, 19.14's `Figure_20_05_03a.jpg` at 250, 19.15's
`Figure_20_05_04a.jpg` at 150, 19.16's `Figure_20_05_05a.jpg` at 200, 19.17's
`Figure_20_05_06(a)a.jpg` at 200, 19.18's `Figure_20_05_06(b)a.jpg` at 250 and
19.19's `Figure_20_05_07a-a478.jpg` at no width the book gives, so that row's
`widths` stays empty. The parentheses in two of the file names are the book's
own and are kept; only a space would be replaced.

### Extra simulations considered and not built

A graph of $C$ against $d$ at several areas was considered and dropped: the
hyperbola adds nothing the slider of Figure 19.15 does not already show, and
rule 24.9 refuses a figure whose states look alike. A charging capacitor with
charge flowing onto the plates over time was dropped: the section never treats
the charging process, and the clock would be a dummy one.

## Types the page binds

`capacitance`, `charge`, `voltage`, `electric-field` and `position`, which is
what `ch19/COLOR.md` says 19.5 binds. The area $A$, the dielectric constant
$\kappa$, the dielectric strength and the permittivity $\varepsilon_0$ are
untyped and stay in ink, as do the plates, the wires, the battery symbol, the
dielectric slab and every frame and label.

## Tables

One numbered: Table 19.1, Dielectric Constants and Dielectric Strengths for
Various Materials at 20 °C, rebuilt as a `div.book-table` whose eyebrow is the
book's number, its math kept in its cells and the em dashes of the vacuum and
water rows kept. One unnumbered, the dimension-and-charge table inside the
fifth AP item, which travels in that item's prompt.

## Exercises

Seven conceptual questions, all open, each with an AI-marked suggested
approach; six AP items of the section's own, three keyed as graded choices
(`fs-id1793317` d, `fs-id1673098` a, `fs-id1622873` c) and three unkeyed and
kept as open items with an AI-marked approach; and 19.2's `fs-id2337566`, the
two plates carrying $\pm 0.225\ \text{C}$ over $0.75\ \text{m}^2$, which needs
$\varepsilon_0$ and this section's parallel plate capacitance, set here with
`source_section: "19.2"` and open. Six of the eleven problems are keyed and
kept; five are unkeyed and left out under the job's rule: the charge on an
8.00 pF capacitor at 5.50 V, the voltage on a 2.00 µF capacitor holding
3.10 µC, the capacitance that stores 3.00 µC at 120 V, the capacitance of
5.00 m² plates separated by 0.100 mm of Teflon, and the Integrated Concepts
problem in which a prankster's capacitor burns a finger. The section has no
Check Your Understanding box, so it hosts no inline exercise and its text
carries no `div.exercises`.

## Wanted at chapter level

- `eq-charge-proportional-to-voltage` → 19.5-charge-and-voltage
- `eq-charge-stored` → 19.5-charge-and-voltage
- `eq-capacitance` → 19.5-charge-and-voltage
- `eq-farad` → 19.5-charge-and-voltage
- `eq-parallel-plate-capacitance` → 19.5-parallel-plate
- `eq-parallel-plate-dielectric` → 19.5-dielectric
- `eq-dielectric-constant` → 19.5-polarization
- `Q_charge` → 19.5-capacitor-defined
- `V_volt` → 19.5-charge-and-voltage
- `C_cap` → 19.5-charge-and-voltage
- `E_field` → 19.5-charge-and-voltage
- `A` → 19.5-parallel-plate
- `d` → 19.5-parallel-plate
- `ε_0` → 19.5-parallel-plate
- `κ` → 19.5-dielectric
- `C_air` → 19.5-dielectric
- `E_0field` → 19.5-polarization
- The untyped symbol row for the dielectric constant, LaTeX `\kappa`, may now
  be staged and merged: the app's symbol test no longer refuses an untyped row
  whose LaTeX begins with `\k` (`notes-ch19.md`). Until it is merged this page
  writes $\kappa$ in plain LaTeX, which renders correctly and only leaves the
  symbol without a hover card.
- No symbol row was changed, and none is asked for beyond the `κ` row above.

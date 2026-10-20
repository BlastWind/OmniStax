# Plan: 11.2 Experimental History

Source: `source.md` (PDF pages 236–238, no equations, Figure 11.1, no footnotes). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

One block, no heading (config: no subsections or run-ins).

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the four paragraphs, Figure 11.1 after the paragraph that cites it |

## Concepts (4, prep-merged)

| concept | introducing span |
|---|---|
| superfluid-helium-depletion | `helium-depletion` ("superfluid helium to be a Bose condensate with a strong quantum depletion …") |
| gas-bec-metastability | `metastable` ("a metastable state to realize condensation which would last long enough to measure") |
| spin-polarized-hydrogen | `spin-polarized-hydrogen` ("Spin-polarized hydrogen", the first mention) |
| alkali-stability-window | `stability-window` ("a stability window for the alkali gases …") |

Concept spans, judged per mention: every "superfluid helium" and "quantum depletion" `superfluid-helium-depletion`; "Bose condensation", "BEC", "Bose condensate", "Bose condense" `bose-condensation`; "the critical temperature for condensation", "the condensation temperature" `critical-temperature`; the gas's "density" in "temperature and density" `atom-number-density`; both "Spin-polarized hydrogen" `spin-polarized-hydrogen`; "metastable state" (paragraph 3) `gas-bec-metastability`; "trapped with magnetic fields" and "magnetic" (… trap) `magnetic-trap`; "evaporatively cooled", "evaporative cooling" `evaporative-cooling`; "laser cooling" `laser-cooling`; "magneto-optical trap" `magneto-optical-trap`; "optical molasses" `optical-molasses`; "off-resonant optical trap" `dipole-trap`; "elastic scattering rate", "two-body elastic scattering rate" `evaporation-rate`; "inelastic scattering rate", "recombination into bound states", "three-particle collision", "three-body recombination rate" `trap-loss-processes`. Plain: "metastable triplet state" (a state of a pair of atoms, not the condensate's metastability), "superfluid behaviour" (the Landau criterion is 11.5's and not what is meant), "ground state", "ideal gas", "density of H on the walls" (an areal density, not n), "spin-flip collisions", "recombine into H₂".

Coverage: the four `introduces` rows above.

## Symbols and variables

None owned. The caption of Figure 11.1 writes $T$, $\kTc$ and $\kndens$ through the macros; rows for `T`, `T_c`, `n_dens` in 11.2 only if the checker asks for them.

## Referents

None.

## Figures

- fig-phase-diagram · Figure 11.1 · gas-bec-metastability, superfluid-helium-depletion, critical-temperature · standardisation only: the book's drawing is qualitative (no scale on either axis) and its one derived curve, $\kTc(\kndens)$ of (11.3), is already 11.1's Sim; the coexistence curve bounding the forbidden region is material-specific and the book gives no numbers for it, so a slider (an element's mass moving $\kTc(\kndens)$, say) would move one boundary against an invented other and the reader imagines nothing the still drawing withholds (root 24.3 fails) → faithful copy, redrawn in house style · arrows: symbolic (the pointer to superfluid helium) · still: nothing in it varies · no sliders or choices · no headline, no readout (nothing live to state) · graph alone · 2D. Regions as the book draws them: vapor, forbidden (grey, under the coexistence curve), condensed matter, BEC (below the $\kTc(\kndens)$ line, temperature hue, the line straight on the log–log axes as (11.3) makes it), superfluid helium a He square (`F.el('He')`) with its pointer. The book's labels drawn (five, fixed, none moves); every region, the two curves and the marker named on hover. The thin grey diagonal across the book's forbidden region is the seam of its two-triangle fill, not a line of the figure, and is not drawn. Axis titles "log(density)" in the density hue and "log(temperature)" in the temperature hue. Conventions: `He`.

`draws`: `temperature`, `density`.

### Extra sims (root 15), not built

- The same diagram with real numbers for one element (H, Na, Rb on a choice): $\kTc(\kndens)$ from (11.3) and the element's vapor-pressure curve, with the evaporative-cooling path of a trapped alkali gas threading the stability window at low density. Needs vapor-pressure data the book does not give.

## Exercises

None (prep, config).

## Lead draft (AI-marked)

> Why a condensate in a gas came so late: superfluid helium, a condensate with a strong quantum depletion; the metastable state a gaseous condensate must be; spin-polarized hydrogen and the walls that stopped it; and the stability window in which laser-cooled alkali atoms can be evaporatively cooled.

## Objectives, summary, notes

`objectives` and `summary_html` empty. `notes`: one sentence saying Figure 11.1 is a faithful copy.

## Book faults kept verbatim

- "quantatively" (for "quantitatively").
- "Walraven" without a first name (Jook Walraven), unlike the others.
- "behaviour", "nano-Kelvin".

## Corrections

| id | attaches to | the book prints | note |
|---|---|---|---|
| c-triplet | "has no bound state", paragraph 3 | "the metastable triplet state of hydrogen has no bound state" | Meant is the triplet state of a pair of hydrogen atoms whose electron spins are parallel: their interaction potential holds no bound state, so the pair cannot form H₂. |

## Wanted at chapter level

- `media/ch11/fig-11-12.png` and `fig-11-15.png` exist, though the book's RULES (Licence) say Figures 11.12 and 11.15 are never copied into `media/`: the chapter pass should remove them.
- A `$…$` inside a figure's `data-original-caption` attribute is rendered by the build inside the attribute and breaks the tag (seen here; 9.3 and 10.2 avoid it with plain text). 11.2's attribute writes "T = Tc(n)"; `original_caption` in `section.json` keeps the book's `$T = T_c(n)$`. Worth an app fix or a checker warning.

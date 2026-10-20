# Plan: 11.1 Introduction

Source: `source.md` (PDF pages 234–236, Eqs. 11.1–11.10, no figures, no footnotes). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

The book's opening paragraphs are the first block with no heading; 11.1.1 and 11.1.2 are `<h2>` (config).

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | Eqs. 11.1–11.3, the condensation paragraph, `sim-degeneracy` |
| `bose-einstein-statistics` | 11.1.1 Bose-Einstein statistics | the distinguishability paragraph, Eqs. 11.4–11.8 |
| `bec-ideal-gas` | 11.1.2 BEC in an ideal gas | Eqs. 11.9–11.10, the closing sentence |

Every numbered display is `<div class="equation" id="eq-11-K">` with `\tag{11.K}`.

## Concepts (10, prep-merged)

| concept | introducing span |
|---|---|
| de-broglie-wavelength | `debroglie` ("the deBroglie wavelength") |
| bec-criterion | `criterion` ("A quantitative calculation shows that the transition … occurs") |
| atom-number-density | `density` ("the density n") |
| critical-temperature | `critical-temperature` ("this critical temperature") |
| bose-condensation | `bose-condensation` ("Bose condensation") |
| bose-einstein-distribution | `be-statistics` ("Bose-Einstein statistics", the first sentence of 11.1.1) |
| indistinguishability-statistics | `distinguishability` ("the role that distinguishability plays in determining this distribution") |
| chemical-potential | `eq-11-4` (the book never names μ in 11.1; the equation is where it first stands) |
| ground-state-occupation-bookkeeping | `bookkeeping` ("When converting these summations into integrals … the ground state ϵ₀") |
| ideal-gas-condensate-fraction | `gs-occupation` ("a macroscopic ground state occupation number") |

Terms moved (`ost set`): "condensation temperature" names T_c, so it leaves `ideal-gas-condensate-fraction` (which takes "ground state occupation number") for `critical-temperature`.

Forms anchored at `11.1-eq-11-K` (eq-11-1 … eq-11-10, no form for 11.8).

Concept spans, judged per mention: "matter wavepackets" and "the atomic wavepackets" wear `de-broglie-wavelength` (its terms); "the temperature T_c" and "the condensation temperature" wear `critical-temperature`; "the phase space density" `bec-criterion`; "the Bose-Einstein distribution" `bose-einstein-distribution`; "indistinguishable particles", "indistinguishable" `indistinguishability-statistics`; "the density of states" `ground-state-occupation-bookkeeping`; "the condensate" (closing sentence) `bose-condensation`; "dilute atomic gases" `dilute-quantum-gas` (11.4's). Plain: "quantum statistics" (generic), "high/low temperature", "dense", "distinguishable" (the contrasting case), "the lowest energy state", "ground state", "grand canonical ensemble", "interact", headings.

## Symbols and variables

`ost meanings` run for every symbol. Rows (chapter 11, section 11.1): lambda_dB → de-broglie-wavelength; n_dens → atom-number-density; T_c → critical-temperature; n_i → bose-einstein-distribution; mu_chem → chemical-potential; N_gs → ideal-gas-condensate-fraction; epsilon_i (energy, unlinked); T (temperature, 4.2's "The temperature of the gas"); m (mass, "The mass of the atom"); epsilon (energy: the integration variable of (11.7)–(11.8), new meaning for 7.1's key); epsilon_0 (energy: the ground-state energy, new meaning for 7.3's key); E_tot, a new book symbol (latex E, `\kEtot`, energy: the total energy of (11.6) and (11.8)), staged with `ost add symbols --chapter 11`, since E_n is a level energy and E_cav a field.

Ink: N (a count), k_B, ζ, g(ϵ) (the density of states; `g` is the coupling key), and the italic λ_{dB} of (11.3), kept as printed and so without the macro.

## Referents

None. No example names a particular thing.

## Figures

The section prints no figure. Units: ⁸⁷Rb (m = 86.909 u), densities in 10¹⁴ cm⁻³ and temperatures in nK, the scale of the alkali experiments the chapter goes on to describe; the book gives no numbers.

- sim-degeneracy · Sim · de-broglie-wavelength, bec-criterion, atom-number-density, critical-temperature, bose-condensation, ideal-gas-condensate-fraction · variation by slider: the reader cools the gas and watches each atom's wavepacket swell as T^{−1/2} until neighbours overlap where nλ_dB³ reaches 2.612, then sees atoms leave the thermal cloud for the condensate, a single wave spread through the gas, as the graph follows N_g.s./N; raising n raises T_c by (11.3), which the text states and the reader would otherwise have to imagine · arrows: none · still: T and n are parameters, not a clock · sliders T (temperature, 20 to 2000 nK, default 600; special T_c(n)) and n (density, 0.25 to 4 × 10¹⁴ cm⁻³, default 1; special the n at which the gas at T condenses) · headline states λ_dB against the spacing n^{−1/3}, or the condensed fraction below T_c · graph below: N_g.s./N against T (0 to 2000 nK, 0 to 1, fixed), Eq. (11.9) solid with the live point, Eq. (11.10) dashed at the same T_c for comparison (the second candidate of prep, folded in as a graph, since a separate figure would repeat this one's axis), T_c a dashed drop line · 2D (a slice of a homogeneous gas; nothing in it is an arrangement in space). Scene: a slice 6 µm × 1.45 µm one spacing thick, atoms on a jittered lattice of spacing n^{−1/3} as Rb dots, each with a translucent disc λ_dB across; below T_c the atoms of lowest fixed rank join the condensate, a uniform Rb tint whose depth is N_g.s./N. Two bars under the slice, from one left edge, compare n^{−1/3} (density hue) with λ_dB (length hue). Labels: the two bars, "condensate" on the tint once it shows; atoms are unlabelled (hundreds), named by hover. Readout: (11.2) with the live numbers, nλ_dB³ = … against ζ(3/2) ≈ 2.612; note (11.9) with the live fraction below T_c, or T against T_c above. Conventions: `Rb`.

`draws`: `temperature`, `density`, `length`.

### Extra sims (root 15), not built

- The Bose-Einstein occupations n_i of (11.4) on a ladder of levels as μ rises toward ϵ₀ at fixed N: the ground level's bar shooting up while every excited level saturates, which is why (11.7) keeps ϵ₀ out of the integral.
- Ten particles in two states, the statistical weight of each split {k, 10 − k}: the binomial 252 : 1 for distinguishable particles beside a flat row for indistinguishable ones, N on a slider so the reader sees the distinguishable peak sharpen.

## Exercises

None (prep, config).

## Lead draft (AI-marked)

> When a cold gas stops behaving classically: the atoms' matter wavepackets, the density and temperature at which they overlap, the Bose-Einstein statistics of indistinguishable atoms, and the number of atoms that gather in the ground state of an ideal Bose gas, free or in a harmonic trap.

## Objectives, summary, notes

`objectives` and `summary_html` empty. `notes` empty: nothing is left out.

## Book faults kept verbatim

- "deBroglie" (one word), "behaviour", "lowest energy state–even at finite temperature" (the book's dash).
- Eq. (11.3): the subscript of λ_{dB}² italic, upright in (11.1) and (11.2).

## Corrections

| id | attaches to | the book prints | note |
|---|---|---|---|
| c-eq-11-7 | `eq-11-7` | ϵ_i in the integrand's exponent | The integrand of (11.7) is g(ϵ)/(e^{(ϵ − μ)/k_BT} − 1): the integration variable ϵ, not a level ϵ_i, stands in the exponent. |
| c-eq-11-8 | `eq-11-8` | ϵ_i in the integrand's exponent | As in (11.7), the exponent of (11.8)'s integrand is (ϵ − μ)/k_BT. |

The concept form eq-11-7 states the corrected relation (prep).

## Wanted at chapter level

- `E_tot` (E, total energy) is a new book symbol staged in `ch11/book-rows.json`; later sections that write a total energy E may reuse it.
- `epsilon` and `epsilon_0` take new meanings in 11.1 (Chapter 7 owns the keys); 11.8 reuses `epsilon_i` for a site energy with `redefines`, as prep says.
- Colour: the length hue (the λ_dB bar, "matter wavepackets" in prose) sits close to Rb's CPK violet (the atoms and the condensate tint), and every alkali is violet in CPK. Rerunning `npm run colours:default -- lukin-amo-ii` once the chapter's `Rb` conventions are in may pull them apart.

## Build notes

Built 2026-10-11: `ost check --section 11.1` ok; astro build ok; Playwright in light and dark: no console or page errors, no KaTeX errors, the Sim has its canvas and no transport, eyebrow "Sim", both correction markers numbered [1], [2]. Screenshots at the slider corners (20 and 2000 nK, 0.25 and 4 × 10¹⁴ cm⁻³) and at T_c; one fix pass (a decimal on the fraction when more than 99 % condense).

## Derivations

- 11.1 the condensation temperature (11.2)–(11.3) · score 9 · not built: "a quantitative calculation shows" cites the textbook result, and its working rests on the free-particle density of states and the Bose integral Γ(3/2)ζ(3/2), which the book never states.
- 11.1.2 the condensate fraction (11.9)–(11.10) · score 7 · not built: "the textbook treatment" is cited, not worked, and the densities of states (free and harmonic) and the Bose integrals it needs are never stated.

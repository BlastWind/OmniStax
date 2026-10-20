# Plan: 11.3 Experimental techniques used in Bose condensation of atoms

Source: `source.md` (PDF pages 238–250, Eqs. 11.11–11.38, Figures 11.2–11.4, Tables 11.1–11.3, no footnotes). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

The book's opening paragraph is the first block with no heading; 11.3.1–11.3.7 are `<h2>`, the run-ins `<h3>` (config).

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | trapping and cooling |
| `atom-surface` | 11.3.1 Atom-surface interactions | Table 11.1, Eqs. 11.11–11.12, Table 11.2, bakeout, surface cooling |
| `trap-depths` | 11.3.2 Trap depths | Table 11.3 |
| `initial-cooling` | 11.3.3 Initial Cooling | h3 Laser cooling, h3 Buffer gas cooling, Figure 11.2 |
| `traps` | 11.3.4 Optical and Magnetic traps | Eqs. 11.13–11.15, quadrupole, TOP and Ioffe-Pritchard traps |
| `evaporative-cooling` | 11.3.5 Evaporative cooling | Figure 11.3, h3 History, Idealized evaporative cooling, Figure 11.4, Competing processes, Three-body recombination, Inelastic collisions, Background gas |
| `evaporation-theory` | 11.3.6 The theory of evaporative cooling | Eqs. 11.16–11.21, h3 Including two-body processes (11.22–11.26), h3 Evaporation itself (11.27–11.34) |
| `probing` | 11.3.7 Probing atomic ensembles | Eqs. 11.35–11.38 |

Every numbered display is `<div class="equation" id="eq-11-K">` with `\tag{11.K}`; (11.18)–(11.21) and (11.23)–(11.26), (11.27)–(11.28) are separate numbered rows in the book and stay separate displays. Tables are `div.book-table` with the book's titles (Chemistry 2e 1.4's markup); Table 11.1's "∼" column folded into the value, Table 11.3's clipped last column from the text layer (source notes).

## Concepts (19, prep-merged)

| concept | introducing span |
|---|---|
| trapping-and-cooling | `trapping-cooling` ("an intimate relationship between trapping and cooling") |
| surface-sticking | `sticking` ("the probability for an atom to stick is essentially unity") |
| surface-resonance-time | `resonance-time` ("some characteristic resonance time τ_R") |
| trap-depth | `trap-depth` ("The depth of a trap can be expressed in terms of the highest temperature atoms it can confine") |
| buffer-gas-cooling | `buffer-gas` ("if the chamber contains sufficient cold buffer gas …") |
| magnetic-trap | `magnetic-trap` ("Magnetic traps use the magnetic dipole interaction …") |
| adiabatic-spin-following | `adiabatic-following` ("their spin must adiabatically follow the magnetic field direction") |
| quadrupole-trap | `quadrupole` ("a quadrupole trap") |
| ioffe-pritchard-trap | `ioffe-pritchard` ("This so-called “Ioffe-Pritchard” trap") |
| evaporative-cooling | `evaporative-cooling-def` ("Evaporative cooling has provided the most effective method …") |
| rf-knife | `rf-knife` ("this so-called “RF knife”") |
| trap-loss-processes | `competing` ("Three-body recombination, inelastic scattering, and collisions with background gas conspire …") |
| linear-trap-atom-number | `linear-trap` ("we can approximate the trap as a spherical linear potential") |
| two-body-loss | `two-body` ("Two-body losses must happen at a rate proportional to the square of the atomic density") |
| evaporation-rate | `evaporation-rate` ("The evaporation rate is approximately") |
| evaporation-figure-of-merit | `loss-ratio` ("the ratio of the evaporative loss to the inelastic loss") |
| absorption-imaging | `absorption-imaging` ("Absorptive imaging measures the spatially dependent transmission coefficient") |
| time-of-flight-imaging | `tof` ("time-of-flight imaging is used") |
| phase-contrast-imaging | `phase-contrast` (“phase-contrast imaging”) |

`uses` rows: de-broglie-wavelength and chemical-potential (eq-11-11), laser-cooling, doppler-cooling, magneto-optical-trap, polarization-gradient, bec-criterion (`laser-cooling` block paragraph), dipole-trap (`dipole-trap` paragraph), weak-field-zeeman-shift (eq-11-13), adiabaticity-condition (eq-11-14), landau-zener (`sim-rf-knife` caption span `rf-landau-zener`), atom-number-density (eq-11-17), absorption-cross-section (eq-11-37), refractive-index (eq-11-35). Forms anchored at `11.3-eq-11-K` (14 forms).

Concept spans, judged per mention: "binding energy/energies" naming the atom–surface binding wears `surface-sticking`; "resonance time" `surface-resonance-time`; "trap depth(s)", "the depth of a trap" `trap-depth`; "buffer gas" where it names the cooling scheme `buffer-gas-cooling` (the gas itself, "cold buffer gas", too: it is the scheme's term); "magnetic trap" naming the device `magnetic-trap`, "weak-field-seeking states" `magnetic-trap`; "spin flips", "Majorana flops" `adiabatic-spin-following`; "evaporative cooling", "evaporation", "boil off" `evaporative-cooling`; "phase space density" `bec-criterion`; "dipole force" (optical trap) `dipole-trap`; "magneto-optical trap" `magneto-optical-trap`; "Doppler" cooling `doppler-cooling`; "polarization gradient cooling" `polarization-gradient`; "Laser cooling" (prose) `laser-cooling`; "Three-body recombination", "dipolar", "inelastic" (processes) `trap-loss-processes`; "optical depth" `absorption-imaging`; "deBroglie wavelength" `de-broglie-wavelength`; "density" of the gas `atom-number-density`; "chemical potentials" `chemical-potential`; "index of refraction" `refractive-index`; "cross-section σ₀" `absorption-cross-section`; "Landau-Zener" `landau-zener`. Plain: "trap" as a general word ("traps prevent atoms…" is the general sense, but "magnetic, electric, or gravitational traps" stays plain), "cooling" alone, "temperature", "surface", "vacuum", "inelastic scattering" in the competing list (wrapped: it names the process), headings, table headers.

## Symbols and variables

`ost meanings` run for every symbol. New book symbols (staged with `ost add symbols --chapter 11`), since the book writes these glyphs and no key sets them: `lambda_DB` (λ_DB, `\klambdaDB`: the book's own spelling in this section, linked to de-broglie-wavelength), `v_bar` (v̄, `\kvbar`, velocity), `mu_mag` (μ, `\kmumag`, magnetic moment), `V_geo` (V₀, `\kVgeo`, volume), `Gamma_th` (Γ, `\kGammath`, rate).

11.3 rows: E_B → surface-sticking; tau_R → surface-resonance-time; lambda_DB → de-broglie-wavelength; n_dens → atom-number-density (11.1's meaning); omega_Larmor → adiabatic-spin-following; eta_ev → linear-trap-atom-number; g_in → two-body-loss; sigma_el → evaporation-rate; d_OD → absorption-imaging; n_ref → refractive-index ("the complex index of refraction of the atom cloud"); v_bar (velocity); T (temperature); mu_B, B_z (1.3's meanings); B (the trap's field of (11.15)); theta (phase, the field's angle, `redefines`); mu_mag (magnetic moment); n_0 (density, the density at the trap's centre; 11.4 links the key to condensate-density); V_geo (volume); Gamma_th (rate); phi (phase, the imprinted phase, `redefines`).

Ink: s (sticking probability), σ (areal density), 𝓛, d (the atom diameter), k_B, H of (11.13) (the book's unhatted H, so not `\kH`), B̃_i, B_i, x_i, B₀, B₁, B₂ of (11.15), B(ρ), B₀, ρ, ρ₀ of (11.16) (B₀ means the bias in (11.15) and the edge field in (11.16): one key could not carry both), N, u, Φ, the energies Ē, K̄, Ū, E_v, E_th, E_d (a stray energy key would add nothing the colour of k_BT does not), g_el, α (polarizability; no type fits it), t (transmission, a ratio), δ (the normalized detuning, a ratio), ω, ω₀, Γ of (11.37), n_c, σ₀, N/V.

## Referents

None: no example names a particular thing. He in Figure 11.2 wears `F.el('He')`.

## Figures

- fig-buffer-gas · Figure 11.2 · buffer-gas-cooling · standardisation only: the chamber, its liquid-He walls, the He buffer gas and the cooled atom in house style, He in its CPK colour · arrows: symbolic (label leaders) · still: the figure names parts, nothing in it varies · no controls · no headline (the caption carries it) · graph none · 2D. Faithful copy, kind `figure`. Labels: the book's three ("walls coated with liquid He", "vapor pressure He buffer gas", "cooled atom"), each leadered; every He atom and the walls carry hover names. Conventions: `He`.
- sim-evaporation · Figure 11.3 · evaporative-cooling, linear-trap-atom-number, trap-depth · animation and variation: the reader watches the hot tail above the trap depth boil off, the kept atoms rethermalize to a colder, narrower distribution, and the depth come down to the same multiple of k_BT for the next round, three rounds as the book draws three curves; with the depth held fixed instead, each round cuts less and cools less, the slowdown the "Idealized evaporative cooling" paragraph warns of; the book's still shows three end states and leaves the process to the imagination · arrows: kinematic (the evaporating tail drifts up and away), symbolic (the trap-depth marker) · moving: the rounds play on a clock, 2 s each (cut 0.6 s, rethermalize 0.9 s, lower the depth 0.5 s), transport · slider η = E_th/k_BT (untyped, 3 to 10, default 6; special 5, where (11.21) calls the edge density negligible); choice depth (lowered with T · held fixed), default lowered (the book's "variable trap depth") · headline names the round's step with its live numbers · graph alone: dN/dE against E for the linear trap of 11.3.6, g(E) ∝ E^{7/2}, so the mean energy is (11.32)'s 9/2 k_BT; E 0 to 14 k_BT₀, dN/dE 0 to 0.25 N₀/k_BT₀, fixed (the tallest curve any setting reaches is 0.22) · 2D. Earlier distributions stay as faint traces, as the book's three curves, named by hover; the current curve is labelled with its T, the depth marker E_th. Readout: (11.32) giving the new T from the kept atoms' mean energy, with the live numbers; note: atoms left and the gain in phase-space density n₀λ_DB³ ∝ N/T^{9/2} (from (11.21) and (11.11)'s λ_DB). The book's axis is kinetic energy; the figure draws total energy in the section's linear trap so that the cut is (11.19)'s η and the numbers are (11.32)'s, and says so in its caption. `draws`: energy, temperature, density and length (n₀ and λ_DB in the note).
- sim-rf-knife · Figure 11.4 · rf-knife, trap-depth, landau-zener (uses) · variation by slider: the reader moves the RF frequency and watches the avoided crossings slide along the trap, the hump between them and the depth they leave, and raises the RF amplitude to open the gap, the Landau-Zener width; the still leaves both to words · arrows: symbolic (the spin-flip markers at the crossings, the depth bracket) · still: ν_RF and Ω_RF are parameters, not a clock · sliders ν_RF (frequency, 1 to 16 MHz, default 10; special 2μB₀/h, where the knife reaches the trap centre and the trap is gone) and Ω_RF (coupling, 0 to 1.5 MHz, default 0.5; special 0, the bare crossing) · headline states where the knife cuts and the depth it leaves, in MHz and µK · graph alone: energy/h (MHz, −8 to 16) against x (µm, −100 to 100) for an Ioffe-Pritchard trap μB(x)/h = √(1 + (x/10 µm)²) MHz, fixed; the bare curves E_trapped and E_untrapped + hν_RF dashed, the dressed curves solid, the lower one (the trapped atoms' path) heavy · 2D (book RULES: potentials are 2D curves). Labels: the book's E_trapped and E_untrapped + hν_RF on the bare curves at the right edge, "RF-induced spin flips" with markers to both crossings, the depth bracket; the gap carries a hover name. Readout: depth/h = √((ν_RF/2 − μB₀/h)² + Ω²) − Ω with the live numbers; note the depth as a temperature (h × 1 MHz = k_B × 48 µK). `draws`: energy, frequency, coupling, length, magnetic-moment.

Tables 11.1–11.3 are tables in the text, not figures.

### Extra sims (root 15), not built

- Surface resonance time: τ_R of (11.12) against the wall temperature on a log axis for the pairs of Table 11.1, the exponential climb as T falls below E_B and the line where atoms pile up; a choice of pair.
- The hole in the quadrupole trap: an atom's orbit through the field zero with the field direction's turning rate dθ/dt beside ω_Larmor of (11.14), spin flips where the rate wins; a TOP choice that moves the zero away.
- The loss ratio (11.31) against η for a few g_el/g_in, the window where evaporation beats dipolar heating.
- Absorption and phase-contrast: the column density of a condensate on its thermal pedestal, the transmission e^{−d/2} and phase −δd/2 profiles of (11.36)–(11.38) as the detuning δ grows, d ∼ 300 black on resonance.

## Exercises

None: the section prints no invitation and prep maps no MIT problem here.

## Lead draft (AI-marked)

> How atoms are brought to the cold, dense conditions of Bose condensation: why surfaces capture atoms, how deep laboratory traps are, the cooling that loads them, optical and magnetic traps, evaporative cooling and the theory of its gains and losses, and how a cold cloud is imaged.

## Objectives, summary, notes

`objectives` and `summary_html` empty. `notes` empty: nothing is left out.

## Book faults kept verbatim

- "the outside word", "Majorana flops" (correction row), "resonantly excite atoms into an untrapped, thus selecting" (a noun missing).
- "From Table 11.3, one can see that it is indeed possible to cool hydrogen using a cold He surface to ∼1K and capture it directly in a magnetic trap": prep suspected Table 11.1; Table 11.3's magnetic depth (60 mK–15 K) is what shows the direct capture, so the citation stands, linked to Table 11.3, no correction.
- "(see Figure 11.4)" after lowering the barrier: the words stay, the link goes to Figure 11.3 (sim-evaporation), whose caption says it; correction row.
- Eq. (11.32) unpunctuated; Eq. (11.34) "6/2k_BT" (= 3k_BT, correct as meant).
- Table 11.2's densities do not follow (11.11) with one E_B (the 10 K and 0.1 K rows imply different binding energies); a rough table, not verifiable, no row.

## Corrections

| id | attaches to | note |
|---|---|---|
| c-majorana | "Majorana flops" | The spin flips are known as Majorana flips. |
| c-quadrupole-sum | "∑\|B̃_i\| = 0" | ∇·B = 0 requires ∑B̃_i = 0; with absolute values the sum vanishes only for a zero field. |
| c-fig-11-4-cited | "(see Figure 11.4)" | Figure 11.3 shows the lowered trap depth; Figure 11.4 is the RF knife of the next paragraph. |
| c-eq-11-21 | eq-11-21 | n₀ is dropped: (11.20) gives N = 6(4πρ₀³/3)n₀/η³. The concept form states the corrected relation. |
| c-eq-11-29 | eq-11-29 | A per-atom thermalization rate goes as n₀v̄σ_el (n₀² is the collision rate per volume), and σ_el is a cross-section, not a rate. |
| c-table-11-3-electric | Table 11.3, electric field strengths | 1–100 MV/cm would give depths of order 1 K to 10⁴ K for an alkali (½αE²); the depths listed belong to 1–100 kV/cm. |
| c-table-11-3-gravity | Table 11.3, gravitational depth | mg/k_B is 1.2 mK per metre for hydrogen, 27 mK/m for sodium and 0.10 K/m for ⁸⁷Rb, above the range printed. |

## Wanted at chapter level

- Five new book symbols staged in `ch11/book-rows.json`: `lambda_DB` (λ_DB, the book's spelling of λ_dB in 11.3), `v_bar`, `mu_mag`, `V_geo`, `Gamma_th`. Later sections writing λ_DB or v̄ may reuse them.
- `n_0` carries a 11.3 row with no concept (the density at the trap's centre); 11.4 links its own row to condensate-density.
- `theta` and `phi` take 11.3 meanings with `redefines`; 11.4 (scattering angle θ) and 11.6–11.7 (phases φ) may meet them.
- `media/ch11/fig-11-12.png` and `fig-11-15.png` exist although book RULES forbid copying Figures 11.12 and 11.15 into media; 11.6 and 11.8 (or the chapter pass) should remove them.

## Derivations

- 11.3.1 the surface resonance time (11.11)–(11.12) · score 3 · built as drv-surface-resonance-time: a thin printed block (flux balance, (11.11) substituted), placed after the paragraph defining its symbols; (11.11) stays printed as the fact it rests on.
- 11.3.6 the theory of evaporative cooling (11.16)–(11.34) · score 6 · split at the book's prose breaks: (11.18)–(11.21) built as drv-linear-trap-atom-number (the dropped n₀ of (11.21) is the node's note; the c-eq-11-21 correction row and marker removed); (11.23)–(11.26) built as drv-dipolar-loss-rate; (11.27)–(11.28) built as drv-evaporation-flux. Not built: (11.29)–(11.30) are stated proportionalities and an "approximately" with η^~1.5, nothing to work; (11.31) is their ratio in three moves with g_el never defined, below the four-move bar; (11.32)–(11.34) are stated estimates resting on mean energies the book never derives.

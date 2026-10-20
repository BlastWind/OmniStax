# Plan: 11.6 First-order coherence of Bose condensates

Source: `source.md` (PDF pages 278–281, no equations, Figures 11.11–11.12, footnote 1). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the one-sentence opening |
| `two-clouds` | 11.6.1 Interference of two atomic clouds | three paragraphs, footnote 1, Figure 11.11 after the third (where the book stands it, page 279) |
| `symmetry-breaking` | 11.6.2 Spontaneous symmetry breaking | two paragraphs, Figure 11.12 after the first (page 280) |

Figure 11.12 sits in 11.6.2 as the book places it, though the paragraph that cites it ("As shown in Figure 11.12") is in 11.6.1; the citation links to it.

## Concepts (4, prep-merged)

| concept | introducing span |
|---|---|
| condensate-first-order-coherence | `first-order` ("they correspond to first-order coherence of the atomic matter wave") |
| condensate-interference-fringes | `fringes` ("interference between two such condensates will result in observable fringes in the atom number distribution") |
| atom-laser | `atom-laser` ("the atomic equivalent of a laser beam") |
| relative-phase-symmetry-breaking | `ssb` ("spontaneous symmetry breaking in the measurement process") |

`uses`: time-of-flight-imaging ("expansion techniques", `two-clouds`); gross-pitaevskii-equation ("the condensate wavefunction ψ") and matter-wave-symmetry-breaking ("a well-defined (though arbitrary) phase"), both `two-clouds`; de-broglie-wavelength (`two-clouds`); bose-condensation (`two-clouds`, `symmetry-breaking`); zeeman-effect (footnote and "Zeeman shift", `two-clouds`); critical-temperature and ideal-gas-condensate-fraction (Figure 11.12's sim, `symmetry-breaking`).

Spans judged per mention. Wrapped: "classical coherence" (opening, 11.6.1: the book's name for first-order coherence, set against the quantum states of 11.7) and "first-order coherence", "first order coherence", "long-range coherence", "long range condensate coherence" → condensate-first-order-coherence; "expansion techniques" → time-of-flight-imaging; "the condensate wavefunction ψ" → gross-pitaevskii-equation; "well-defined (though arbitrary) phase" → matter-wave-symmetry-breaking; "condensate(s)", "Bose condensates", "the condensate fraction" → bose-condensation where they name the condensed state; "deBroglie wavelength", "the thermal atom wavepacket" → de-broglie-wavelength; "atom laser beam", "atom lasers" → atom-laser; "Zeeman shift", "Zeeman energy" → zeeman-effect; "spontaneous symmetry breaking" → relative-phase-symmetry-breaking. Plain: "interference fringes" of laser light, "incoherent light", "thermal atoms", "magnetic field gradient", "hyperfine state" (the trapped state is a state, not 1.3's hyperfine interaction), "relative phase" in the question of 11.6.2 (the idea is the answer, in the last paragraph), "number uncertainty", headings.

## Symbols and variables (chapter 11, section 11.6)

`ost meanings` run for each. New book symbols, staged in `ch11/book-rows.json` through `ost add … symbols --chapter 11`: `Delta_R_s` (\kDeltaRs, ∆R_s), `Delta_R` (\kDeltaR, ∆R), `Delta_z` (\kDeltaz, ∆z; the separation of the two outcoupled regions in Figure 11.12; `r` is the position operator r̂ book-wide).

Rows: psi_GP → gross-pitaevskii-equation (the condensate wavefunction; 11.4's quantity); Delta_R_s (length, no concept: the separation of the two condensates); Delta_R → condensate-interference-fringes, type length (the fringe spacing, the result's quantity), and the concept's `symbol` set to it; tau (time, the expansion time, as 11.5 uses it); m (mass, 11.1's meaning); phi (phase, the relative phase of the two condensates, redefines); lambda_dB, T, T_c (11.1's meanings) and N_gs (11.1's) for Figure 11.12's sim; Delta_z (length, no concept). In ink: N₁, N₂, n, n₁, n₂ (counts), the visibility 𝒱 (a ratio).

## Referents

One group (both figures sit in 11.6.1's and 11.6.2's text, which mark all four).

| id | label | figures |
|---|---|---|
| bec-1 | condensate 1 | sim-two-condensates |
| bec-2 | condensate 2 | sim-two-condensates |
| condensate | the condensed atoms of the cloud | sim-spatial-coherence |
| thermal | the thermal atoms of the cloud | sim-spatial-coherence |

Text marks: "two such condensates" and the condensates of 11.6.2 ("two independently prepared Bose condensates", "the two condensates", "the two clouds", "each of the two condensates", "which condensate they came from", "the two condensates" remaining, "the condensates") as `bec-1 bec-2`; "thermal atom coherence" → `thermal` and "the coherence of the condensate fraction" → `condensate` in the sentence that cites Figure 11.12.

## Figures

Units: Figure 11.11 takes the numbers of the MIT experiment the caption cites (sodium, m = 23 u, released condensates about 40 µm apart, imaged after 40 ms), each cloud a Gaussian of initial width σ₀ = 1.5 µm expanding freely (interactions neglected). Figure 11.12 is dimensionless: distance in units of λ_dB(T_c), temperature as T/T_c.

- sim-two-condensates · Figure 11.11 · condensate-interference-fringes, condensate-first-order-coherence, time-of-flight-imaging · animation and variation: the two released clouds spread, reach each other and the overlap fills with fringes whose spacing grows in time as 2πℏτ/m∆R_s, which the book's before-and-after pair leaves to the imagination; ∆R_s tightens the fringes as it grows, and the relative phase φ slides them under a fixed envelope, the arbitrary phase of 11.6.1 and the measured phase of 11.6.2 · arrows: none (the clouds spread, nothing travels along a path; the two brackets are notation) · moving: the expansion runs 0 to 40 ms after release, linear in time, transport · sliders ∆R_s (length, 20 to 80 µm, default 40), φ (phase, 0 to 2π, default 0); ∆R_s restarts the clock, φ does not · headline: the time since release, the clouds' width and, once they overlap, the fringe spacing · graph alone: density against x, −200 to 200 µm, the density drawn relative to its peak at each moment (axis says so), since the absolute density falls as the clouds spread · 2D. Drawn: each condensate's own density thin in its referent colour, the total density thick in the density hue with a light fill; the initial centres hollow on the axis with the ∆R_s bracket under them, the ∆R bracket over two neighbouring central maxima once fringes are resolved. Legend for the three curves (they overlap and move; labels on them would sit on moving things); hover names on the markers and the bracket. Readout: ∆R ≈ 2πℏτ/(m∆R_s) with the live numbers (≈: the drawn spacing is the exact 2πσ₀²(1+θ²)/(∆R_s θ), θ = ℏτ/mσ₀², within 1 % of it after 7 ms). Caption names the MIT experiment.
- sim-spatial-coherence · Figure 11.12 (`withheld`: published data) · condensate-first-order-coherence, atom-laser, critical-temperature, ideal-gas-condensate-fraction · variation by slider: the visibility of the atom-laser fringes against the distance ∆z of the two outcoupled regions, the thermal atoms' part falling as e^{−π∆z²/λ_dB²} and the condensate's part a plateau at N_g.s./N = 1 − (T/T_c)³ of Eq. (11.10); lowering T/T_c through 1 lifts the plateau out of zero and widens the thermal fall (λ_dB grows), so the reader sees the book's four traces as states of one model, which the text states only in words · arrows: none · still: T/T_c is a parameter, not a clock · slider T/T_c (temperature, 0.2 to 2, default 0.8; special 1, the critical temperature) · headline: the plateau's height and the distance over which the thermal part dies · graph alone: 𝒱 (0 to 1) against ∆z/λ_dB(T_c) (0 to 2.5), the two parts stacked as filled bands in the `condensate` and `thermal` referent colours, their sum the ink curve, the λ_dB bracket on the axis in the length hue · 2D. Labels: the two bands named once inside them where there is room, else by hover; the plateau line labelled with its value. Readout: 𝒱(∆z) = N_g.s./N + (1 − N_g.s./N) e^{−π∆z²/λ_dB²} with the live numbers; note: N_g.s./N by Eq. (11.10) and λ_dB(T) = λ_dB(T_c)(T_c/T)^{1/2}. The model is a uniform ideal gas's thermal coherence beside a harmonic trap's condensed fraction; the caption says it is computed and names Bloch et al., Nature 403, 166 (2000). No `originals`.

`draws`: sim-two-condensates `density`, `length`, `phase`, `time`, `mass`; sim-spatial-coherence `temperature`, `length`. No facts or conventions: no element is drawn as an atom (sodium enters only through its mass).

### Extra sims (root 15), not built

- The measurement of 11.6.2: atoms detected one at a time from two Fock-state condensates, each detection a dot on the screen; after a few the fringe phase is random from run to run but sharp within one, while the readout tracks how far n₁ − n₂ has spread. Opens the view the last paragraph gives in words.

## Exercises

None (prep, config). No inline invitation.

## Lead draft (AI-marked)

> The classical, first-order coherence of a condensate: two clouds released together interfere into fringes, coherence in a thermal cloud reaches only about a deBroglie wavelength while a condensate's spans the cloud, as an atom laser measures, and two condensates of fixed atom number gain a relative phase only when their atoms are detected.

## Objectives, summary, notes

`objectives` and `summary_html` empty. `notes`: one sentence saying Figure 11.12 is computed from a model, the book's image (published data) not shown.

## Footnotes

`footnote-1` (book, number 1): the gravity sag, marker after "magnetic field gradient".

## Book faults kept verbatim

- "deBroglie" (one word), "c.f.", "BECs".
- Figure 11.11's caption writes τ where the figure's label writes t; the sim uses τ, as 11.5 does for the expansion time.
- "∆R ∼ ℏτ/∆R_s m": an order of magnitude; the exact far-field spacing is 2πℏτ/m∆R_s, which the sim's readout states. Not a correction (the ∼ allows it).

## Corrections

| id | attaches to | the book prints | note |
|---|---|---|---|
| c-fig-11-11 | figure `sim-two-condensates` (original caption) | "Science 275, p637 (2000)" | Andrews et al., "Observation of interference between two Bose condensates", appeared in Science 275, 637 in 1997. |

## Wanted at chapter level

- `media/ch11/fig-11-12.png` exists though the book's RULES (Licence) say Figure 11.12 is never copied into `media/` (11.2 asks the same for 11.12 and 11.15): the chapter pass should remove it. 11.6 does not reference it.
- `tau` in 11.5 (expansion time) and 11.6 should share one meaning; 11.6 words it "The time the clouds expand after release before they are imaged".

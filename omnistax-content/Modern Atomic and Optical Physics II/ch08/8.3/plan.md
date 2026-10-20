# Plan: 8.3 Doppler Cooling

Source: `source.md` (PDF pages 141–146, Eqs. 8.28–8.33, Figures 8.1–8.3, no footnotes). Planned and built in one go (config: no stops); left for review after.

## Blocks

No numbered subsections: an opening block, then the five run-in headings as `<h2>` without numbers (config).

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the opening paragraph |
| `molasses` | Optical molasses | Eq. 8.28, Figures 8.1 + 8.2 (`sim-doppler-force`), Eqs. 8.29–8.30, the energy-conservation and Doppler-shift paragraphs, the 3D sentence |
| `max-friction` | Maximum value of the friction coefficient | Eqs. 8.31–8.33, the ω_R timescale |
| `finite-velocity` | Behavior at finite velocity | the capture range, `sim-molasses` |
| `mot` | The magneto-optical trap (MOT) | Figure 8.3 (`sim-mot`), the reference paragraph |
| `doppler-limit` | The Doppler limit | the three closing paragraphs |

Figure 8.3 stands in the book on page 145 inside the Doppler-limit paragraph (a float); its figure goes at the end of the MOT paragraph that cites it ("shown in Figure 8.3"), which links to it. Figure 8.2's float sits in the MOT block too; it is folded into Figure 8.1's place. Figures 8.1 and 8.2 are never cited by number in the text.

## Concepts (8, prep-merged) and their introducing spans

| concept | span |
|---|---|
| doppler-cooling | `doppler-cooling` ("The technique of Doppler cooling") |
| zero-velocity-excitation-rate | `zero-velocity-rate` ("R⁰_opt as the optical excitation rate for atoms with zero velocity") |
| low-velocity-doppler-force | `eq-8-28` |
| friction-coefficient | `friction-coefficient` ("η is the friction coefficient") |
| optical-molasses | `optical-molasses` ("known as optical molasses") |
| maximum-friction-coefficient | `friction-largest` ("The friction coefficient η is largest …") |
| capture-range | `capture-range` (“capture range”) |
| magneto-optical-trap | `mot-idea` ("simultaneously cool and trap the atoms") |

Form anchors: eq-8-28 → `8.3-eq-8-28`, eq-8-zero-velocity-rate → `8.3-zero-velocity-rate`, eq-8-29/30/31/32/33 → their equations, eq-8-capture-range → `8.3-capture-range`.

`uses` rows: dissipative-force (opening, molasses), atomic-recoil (opening), recoil-shifted-resonance ("Doppler shifts", `doppler-picture`), spontaneous-emission (`doppler-picture`, `limit-kicks`), optical-pumping-rate (`friction-largest`), spontaneous-emission-rate (`friction-largest`), recoil-frequency (`eq-8-33`), semiclassical-force-validity (`rate-omega-r`), zeeman-effect and polarization-selection-rules (`mot-config`).

Concept spans, judged per mention: "Doppler cooling" always `doppler-cooling`, bare "cooling" only where it stands for the technique ("the typical timescale for cooling"), never the general verb or "any cooling method"; "viscous force" `friction-coefficient`, "viscosity" plain; "dissipative force(s)" and "the Doppler force" `dissipative-force`; "momentum kick(s)" `atomic-recoil`; "Doppler shift(s)/shifted" `recoil-shifted-resonance`; "detuning", "far-detuned", "red-detuned", "Blue-detuned" `detuning`; "decoherence rate" and "dephasing rate" (both name γ₁₂ here) `coherence-decay-rate`; "optical pumping rate" `optical-pumping-rate`; "spontaneous emission rate" `spontaneous-emission-rate`; "spontaneously emits", "radiates spontaneously", "spontaneous emission" `spontaneous-emission`; "the light force" `semiclassical-light-force`; "Zeeman shifts" `zeeman-effect`; "circular polarizations" `spherical-polarization-basis`; "couple different atomic transitions" `polarization-selection-rules`; "MOT" `magneto-optical-trap`; "Heisenberg-Langevin approach" `heisenberg-langevin-equation`. Headings plain.

## Symbols and variables (8.3 rows, `ost meanings` run for each)

New book symbols (staged in `ch08/book-rows.json` by `ost add symbols --chapter 8`): `F_p` (F₊, `\kFp`) and `F_m` (F₋, `\kFm`), so each subscript wears its beam's colour (root 7). Reused: `F_mag` (8.2's italic F), `v_mag` (italic v), `k_mag` (8.1's italic k), `k` (bold 𝐤), `v` (bold 𝐯), `v_z`, `p_cm` (italic p).

Rows: F_mag, F_p (ref beam-plus), F_m (ref beam-minus) → dissipative-force; R_opt_0 → zero-velocity-excitation-rate; eta → friction-coefficient; v_c → capture-range; omega_R → recoil-frequency; delta → detuning, Omega → rabi-frequency, gamma_12 → coherence-decay-rate, gamma → spontaneous-emission-rate, R_opt → optical-pumping-rate (earlier meanings reused); k, k_mag (wavevector), v, v_mag, v_z (velocity), m (mass of the atom), p_cm (momentum), no concept.

## Referents

One group: the two beams of the 1D molasses (which are the σ₊ and σ₋ beams of the trap) and the levels of the J = 0 → J = 1 scheme.

| id | label | figures |
|---|---|---|
| beam-plus | the beam travelling along +z (wavevector 𝐤; σ₊ in the trap) | sim-doppler-force, sim-mot |
| beam-minus | the beam travelling along −z (wavevector −𝐤; σ₋ in the trap) | sim-doppler-force, sim-mot |
| lvl-ground | the J = 0 ground state | sim-mot |
| lvl-m-minus | the m = −1 sublevel of J = 1 | sim-mot |
| lvl-m-zero | the m = 0 sublevel of J = 1 | sim-mot |
| lvl-m-plus | the m = +1 sublevel of J = 1 | sim-mot |

## Figures

Units: the book gives no numbers. Frequencies are in units of γ₁₂; velocity in γ₁₂/k (kv in γ₁₂); forces in ℏkR⁰_opt(δ = 0), one beam's push on resonance (Eq. 8.31's own scale), so |Ω| drops out of the force curves; the trap's position in z₀, the distance at which the Zeeman shift of m = ±1 reaches γ₁₂; molasses time in 1/ω_R. Each beam's force is Eq. (8.23)'s weak-field ℏkR_opt with its Doppler (and Zeeman) shift, summed as the text sums them; no saturation, since the text's heuristic sum does not hold there and a saturated model would contradict Eq. (8.32).

- sim-doppler-force · Figure 8.1 + 8.2 · low-velocity-doppler-force, friction-coefficient, maximum-friction-coefficient, capture-range, doppler-cooling · variation by slider: the book draws the beams (8.1) and three sum curves (8.2) apart; here the reader moves the atom's velocity and sees which beam it is Doppler-shifted towards push harder (the two force arrows on the atom and the two beam curves), the sum's sign flip from red to blue detuning, the linear ηmv of Eq. (8.30) as the tangent at v = 0, and v_c moving out as |δ| grows (the book's three curves are states of δ) · arrows: symbolic (the beams' k arrows, the force arrows F₊, F₋, F and the velocity arrow are vectors drawn on the atom) · still: δ and v are parameters, nothing has a clock · sliders δ (frequency, −4 to 2 γ₁₂, default −1, specials 0 "resonance" and −1 "δ = −γ₁₂", Eq. 8.31's) and v (velocity, −6 to 6 γ₁₂/k, default 1, specials ±v_c from the curve's maximum) · headline: which beam pushes harder at the live v, and the net F · scene above (the book's Figure 8.1: the two beams in their referent colours, the atom, its arrows), graph below (F₊, F₋ dashed in the beams' colours, F solid in the force hue, ηmv dashed in the friction hue, capture range shaded, F against v on fixed axes v −6…6, F −1…1) · 2D. Labels: k, −k, F₊, F₋, F, v on the scene; F₊, F₋, F, ηmv, ±v_c on the graph (six on the graph); hover names on the curve points.
- sim-molasses · Sim · doppler-cooling, optical-molasses, capture-range, friction-coefficient · animation: cooling is the narrowing of a velocity distribution in time, which the force curve leaves to the imagination; the reader watches 2000 atoms' velocities obey m dv/dt = F(v): inside ±v_c they collapse towards v = 0 at the rate η of Eq. (8.30), outside it they are barely slowed, and with blue detuning the distribution splits and runs away · arrows: none (atoms are counted in bars, not drawn moving) · moving: the histogram evolves over 0 to 15/ω_R; transport · slider δ (frequency, −4 to 2 γ₁₂, default −1, specials 0 and −1); |Ω| fixed at 0.3γ₁₂ (weak field) and stated in the caption, since it only sets the clock · headline: the time, the share of atoms slower than 0.5γ₁₂/k now and at the start · graph alone: atoms per bin against v (−6…6 γ₁₂/k, bins 0.25), the start hollow and dashed, the present filled; a bar past the top is clipped and carries its share; ±v_c dashed · 2D. Readout: Eq. (8.30) with the live η in units of ω_R.
- sim-mot · Figure 8.3 · magneto-optical-trap, optical-molasses · 3D for the top half (book RULES: the MOT's beams and coils are apparatus whose arrangement is the explanation; physical class): the book's top panel is a 1D cut, and the scene shows the six beams of three molasses pairs, the anti-Helmholtz pair of coils with opposite currents, and the field B = B₀z ẑ along the axis (and −B₀r/2 inward in the midplane) that the 1D cut stands for; the bottom is the book's level diagram made a function of position: the m = −1, 0, +1 levels of J = 1 fan out with z, the laser line sits at δ, the σ₊ and σ₋ arrows reach it from J = 0 at the atom, and the force panel beneath gives F₊, F₋ and F against z, so the book's two panels (z < 0, z > 0) are two states of the slider · arrows: symbolic (beam arrows, σ± transitions, field arrows, force arrows) · still: position and detuning are parameters · sliders z (length, −4 to 4 z₀, default −1, the book's left panel; special 0 "centre") and δ (frequency, −4 to 2 γ₁₂, default −1; special 0) · headline: which transition the field brings nearer the laser and the push · 3D stage above (physical, no ground since the trap stands in vacuum, yaw free, pitch bounded to ±75° so the coils are never seen exactly edge-on from the poles; no spin or zoom button: the scene is coarse and one turn by hand shows the six beams), 2D canvas below (levels against z above the force against z, one z axis) · without WebGL the canvas draws the book's 1D top strip instead. Labels: σ₊, σ₋ and z in the scene, the x and y beams named by hover only; m = −1, 0, +1, J = 0, the laser line, F₊, F₋, F on the canvas.

`draws` (readouts included): sim-doppler-force `velocity`, `force`, `frequency`, `friction`, `wavevector`, `rate`, `mass`; sim-molasses `velocity`, `frequency`, `friction`, `time`, `wavevector`, `rate`, `coupling`, `mass`; sim-mot `length`, `frequency`, `force`, `magnetic-field`, `wavevector`, `rate`. No facts or conventions (the generic atom is ink; no laser wavelength is named).

### Extra sims (root 15), not built

- The MOT in phase space: an atom released off centre spirals in (z, v) to the origin under F(z, v), damped or overdamped by δ; it opens the combination the text states in one sentence ("simultaneously localizes and cools").
- The three capture-range regimes (γ₁₂/k, Ω/k, δ/k) on one log–log map with a saturated force; needs the saturated two-beam theory the text only guesses at.

## Exercises

None: 8.3 prints no invitation, and the config maps no MIT problem here (hw9.1 and hw9.2 moved to 8.2).

## Lead draft (AI-marked)

> How light can cool atoms rather than only slow them: a velocity-dependent force from two counterpropagating red-detuned beams, its friction coefficient and capture range, optical molasses in three dimensions, the magneto-optical trap, and why the cooling must stop at a limit.

## Objectives, summary, notes

Empty (the book prints none); `notes` empty: nothing is left out.

## Book faults kept verbatim

"than slower atoms ." (space), "pushes that atom back", "Bill Phillips’", m set upright in "where m is the mass", (8.28)'s bold k against (8.30)'s italic k: typos kept, no correction (config).

## Corrections

| id | attaches to | the book prints | meant |
|---|---|---|---|
| c-eta-sign | after "d/dt p = −ηp" (`rate-omega-r`) | dp/dt = −ηp with η > 0, and Eqs. (8.31)–(8.33) positive | By Eqs. (8.29)–(8.30) η ∝ δ is negative when the beams cool (δ < 0), so dp/dt = ηp; −ηp and Eqs. (8.31)–(8.33) take η as its magnitude |η|, largest near δ = −γ₁₂ |
| c-cooling-timescale | after "ω_R ∼ 10 kHz" | "the typical timescale for cooling is ω_R" | ω_R is the cooling rate; the timescale is 1/ω_R |

The v_c ∼ rate/k "wavelength multiplied by the dominant rate" holds as a scaling (λ = 2π/k), so it is not corrected.

## Wanted at chapter level

- Symbols `F_p`, `F_m` staged by this section; 8.6 (Sisyphus force) may want them.
- The units of the figures (γ₁₂, γ₁₂/k, ℏkR⁰_opt(δ = 0), 1/ω_R) are this section's choice; 8.5 and 8.6 (Figure 8.6 compares the Doppler force with the Sisyphus force) may want the same.
- `heisenberg-langevin-equation` is worn in 8.3 before 8.4 introduces it (a forward mention, no coverage row).
- Chapter pass: 8.3's `F_mag` row now `redefines` (dissipative force after 8.2's semiclassical force); figure units stay γ₁₂, each caption stating them.

## Derivations

- Optical molasses (8.28)–(8.30) · block (score 2) · built as two at the book's break: drv-doppler-force-expansion ((8.28), the first-order expansion of (8.23)) and drv-friction-coefficient (the two-beam sum and (8.30)); (8.29) stays as the definition of η; "where we recognize" becomes "Here we recognize"; links to (8.28) and (8.30), the figure's caption included, re-pointed (c-eta-sign too)
- Maximum friction coefficient (8.31)–(8.33) · score 4 · not built: (8.31) is one substitution δ = γ₁₂ into (8.30) (three moves); (8.32) is "a more careful analysis" of saturation the notes never give (summing (8.26) over two beams does not reproduce it); (8.33) is two moves from (8.32)

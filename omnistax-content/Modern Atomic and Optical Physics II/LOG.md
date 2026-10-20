# Experiment log: Modern Atomic and Optical Physics II (Lukin)

Source: lectures by Mikhail D. Lukin (Harvard), notes taken and typed by
Lilian Childress, last updated December 2016; unpublished, no licence
statement. `source/lukin-amo2.pdf`, 293 pages of pdfTeX, with its text layer
in `source/text-layer.txt`. Eleven chapters, 45 sections. Local only: the
folder is gitignored and permission was requested from the authors on
2026-10-11. Candidate exercises: the MIT 8.422 problem sets in
`source/mit-8422/` (Ketterle, Spring 2013, CC BY-NC-SA 4.0, no solutions).

Workflow: the full-book pass of root rule 18 first, then Chapter 1 one
section at a time with a stop after the first for review.

## Pass 1: the full-book pass (2026-10-11)

Prompted by: Chen asking to bring this book into OmniStax, and root rule 18.

What the exploration found, in brief (`exploration.md` has the whole of it).
A PDF made from LaTeX lecture notes, with no source files: the text layer
keeps the prose and scrambles every equation, so the page image is the
source of the mathematics, and the converter is a renderer plus a
transcribing agent rather than a parser. The structure is regular: chapter,
section N.M, subsection N.M.K, and unnumbered run-in headings; Chapters 3 to
11 open with prose before their first section. About 1120 numbered
equations, 66 numbered figures (almost all vector sketches of the theory's
curves and level schemes; eight or nine hold raster images, four of them published
experimental data, two marked "without permission"), four tables, thirteen
examples written as titled derivations, per-chapter footnotes, informal
references to other books and papers. No exercises, no objectives, no
summaries, no key equations, no glossary. Three citations point at the wrong
number. Twenty-four of the twenty-nine MIT 8.422 problems match a Lukin
section; Chapters 4 to 7 have none.

What was decided, in `RULES.md` and `COLOR.md`:
- one section, one page; the h2s are the numbered subsections, else the
  run-in headings; chapter openings 3–11 are `intro/` pages; Chapter 1
  "Preface" is a chapter and 1.1 a section, with no book-level intro page;
- the pipeline `pages.py` → `convert.py` → transcription by `TRANSCRIBE.md`
  → `checkprose.py`, written by the tools pass in parallel;
- the experimental and unattributed raster figures are never copied: the
  idea is recomputed from the model or left out;
- twenty-nine types. Frequency, coupling and rate are three types, decided
  by their place in the rotating-frame Hamiltonian (diagonal, off-diagonal,
  non-Hermitian), with detunings a variant of frequency; amplitude,
  population and coherence are three, since a probability, a complex
  amplitude and a bounded off-diagonal element are different things to
  reason with; levels and fields of a scheme are referents;
- facts are almost absent: the sodium D lines only; red and blue detuning
  are not drawn in red and blue;
- two exercise kinds, `exercise` (the two invitations in the text, inline)
  and `problem` (MIT 8.422, mapped by section, AI-marked solutions), both
  used only as a chapter's config allows;
- the Bloch sphere is 3D mathematical; level diagrams, potentials, phase
  space and time plots are 2D; the MOT and the Paul trap are 3D.

`book.json` carries the identity, the licence fact ("No licence stated; used
locally while permission is requested"), the twenty-nine types with default
colours from `npm run colours:default -- lukin-amo-ii`, the two exercise
kinds, and empty `chapters`, `symbols`, `concepts` and `concept_prereqs`.
`chapters` stays empty until the chapter folders hold their `chapter.json`,
since the checker opens every chapter listed.

Checks: `python3 omnistax-content/tools/ost.py check lukin-amo-ii` reports
"0 chapters, 0 sections, 24 checks, no errors".

Left for Chen: the Chapter 1 config list, the use of MIT problems, and the
questions in the pass report.

## Pass 2: Chapter 1, the chapter pass (2026-10-11)

Prompted by: sections 1.1, 1.2 and 1.3 built, and the chapter pass of
`docs/prompts/briefs/final.md`.

What was decided, in `RULES.md`:
- an h2 carries the book's subsection number before its verbatim title
  ("1.2.1 States", "1.3.5 Hyperfine interaction"), since the notes cite
  sections by number and the app's outline shows the heading text with no
  number of its own; 1.2 and 1.3 now both do;
- a numbered equation is `<div class="equation" id="eq-N-K">$$…
  \tag{N.K}$$</div>`, anchored in the app as `N.M-eq-N-K`; the build renders
  and anchors every one of 1.2's 13 and 1.3's 48;
- `ch01/1.3` is the template for a section with figures, a Try It,
  referents and numbered equations, `ch01/1.2` for a text-only one.

Term spans: `terms_pass.py candidates --chapter 1` found two bare mentions,
both the word "simple" in its everyday sense ("a particularly simple form",
"the spin argument is simple"); both stay plain.

Symbols: V_SL, V_HFS, H_HFS, H_Z and U are energies by `COLOR.md`, so each is
now a symbol with a 1.3 variables row and 1.3's text writes its macro.

Checks: `ost check lukin-amo-ii` reports 1 chapter, 3 sections, no errors;
the astro build with `OMNISTAX_BOOKS=lukin-amo-ii` passes.

Left for Chen: the book's Eq. (1.23) and the 1.3.5 hyperfine shifts use the
square of the quantum number where J(J+1) belongs. The book gives the fine
splitting of the Na 3P level as A and the ground hyperfine splitting as
3A_HFS/2; the eigenvalues of A L·S and A_HFS I·J give 3A/2 and 2A_HFS. The
text keeps the book's words, and the 1.3 figure readouts show the eigenvalue
arithmetic. Should the text carry a note, or the readouts follow the book?


## Pass 3 (2026-10-11): Pass 3: Chapter 2, the chapter pass (2026-10-11)

Prompted by: sections 2.1, 2.2 and 2.3 built, the chapter pass of
`docs/prompts/briefs/final.md`, and the notes table of commit 81836d64.

Notes: the book's footnotes 1–4 are `footnotes` rows of kind `book` under
their numbers (`footnote-N`), each with its marker where the book sets the
mark; the ad-hoc `<sup>N</sup>` and closing small paragraphs are gone, and
`RULES.md` names the table. Fifteen corrections, each a `correction` row
with its marker right after the misprint, the words kept as printed:
- 2.1: the period inside the bracket of Eq. (2.2); "Eq. (2.10)" cited for
  the equation of ċ₁, which is (2.11); the missing ℏ in Eqs. (2.25)–(2.26);
  dU/dt for dÛ/dt in (2.36) and (2.38); the unmatched parenthesis of (2.37);
  Figure 2.2b's dressed-state labels swapped, marked at the figure's head;
- 2.2: the sign of ε in the exponent of Eq. (2.48); "each bound state |k⟩"
  for the unbound continuum states;
- 2.3: ∂²t for ∂t² in (2.55); ν_i for ν_j in (2.58); the Gaussian
  ∇²φ = 4πρ, sign dropped, in an S.I. section; the Gaussian p̂ − qÂ/c;
  V/(2π)² for V/(2π)³ in (2.81); sin θ² for sin²θ in (2.84).
None of the plans' corrections was dropped.

Variables: γ keeps two concepts, decay into a continuum in 2.2 and the
spontaneous emission rate in 2.3, with 2.3's row `redefines` and its meaning
naming the vacuum modes as the continuum. 2.3's ω, Ω and μ and 2.2's c₁ and
p₁ now read as 2.1's. `redefines` is set where the book changes the thing
named: 2.2's Ω_k and ω_k (continuum states, not 2.1's ladder of levels),
2.3's ν, ν_k, c₁ and c₂ (field modes and atom-plus-field states).

Units: 2.1's and 2.2's sims keep μs⁻¹ and μs, the book giving no numbers;
2.3's photon wavepacket keeps optical values. Each caption now says its
scale.

Colour: frequency and dipole stand ΔE_OK 0.127 apart in light and 0.128 in
dark, above the 0.12 target, so `colours:default` was not rerun.

Term spans: `terms_pass.py candidates --chapter 2` found 26 bare mentions;
14 wear their concept (two-level atom, spontaneous emission, continuum, the
field's modes), 12 stay plain ("simple" in its everyday sense,
Hermite-Gaussian modes, an initial wavepacket, and the polarization of light,
which no concept carries: `atomic-polarization` is the medium's).

Exercises: MIT 8.422 Problem Set 7, Problem 3 (dressed states, five parts) in
2.1; Problem Set 5, Problem 1 (Rayleigh and Thomson scattering, two parts) and
Problem Set 7, Problem 2 (one atom and one photon, six parts) in 2.3, all with
AI-marked solutions, none held; the book's invitation in 2.1.1 is an inline
Try It.

Checks: `ost check lukin-amo-ii` reports 2 chapters, 6 sections, no errors;
the astro build with `OMNISTAX_BOOKS=lukin-amo-ii` passes; the three pages
show their notes lists with no console errors.

Left for Chen: a concept for the polarization of light; whether the Figure 2.2
correction belongs at the figure's head, the prose never citing the figure.


## Pass 4 (2026-10-11): Chapter 4, the chapter pass (2026-10-11). Sections 4.1, 4.2, 4.3 and the

intro page, built in parallel on prep's rows, checked together.

Edges: two-level-susceptibility now rests on steady-state-coherence and
weak-field-response (3.4), nonlinear-susceptibility on steady-state-coherence,
saturation-parameter on optical-pumping-rate, and independent-atoms on 3.1's
density-matrix, all through ch04/book-rows.json and `ost merge`.

Symbols: a scalar wavevector k (`k_mag`, macro \kkmag, type wavevector),
COLOR.md's wavevector type covering it; kv_z, kv_T, α₋ = k Im χ₋ and
Eq. (4.75)'s 1/k in 4.2 and 4.3 and 4.2's Doppler slider wear it. k₀ = 2π/λ
in 4.2 stays in ink. ρ₂₁ and ρ₁₂ in 4.1's property (2) and the intro's
Eqs. (4.1), (4.2), (4.4) now wear their macros, with 4.1 rows linking
density-matrix-coherences. The 4.2 and 4.3 rows for ρ₁₁, ρ₂₂, ρ₂₁ and γ₁₂
take Chapter 3's wording, each keeping its own clause; R_opt already matched.

Term spans: `terms_pass.py candidates --chapter 4` found 36 bare mentions;
28 wear their concept (density matrix, optical Bloch equations, reservoir,
the medium's polarization as atomic-polarization, absorption, detunings), 8
stay plain ("coherent and incoherent interactions" in general, the SVEA's
"slowly varying amplitudes", the solid-state "environment", a Gaussian
spectrum, "simple", running waves, "Doppler-free" linewidth, and "absorption"
inside "absorption cross section" whose span is the cross section's).

Corrections: as the sections' plans list them (Eqs. 4.7, 4.22, 4.28, 4.50,
4.53, 4.59, 4.76, the resonant-field slip in 4.2, Figure 4.4's swapped
labels); the sign convention of Chapter 3's optical Bloch equations is stated
on Eq. (4.53).

Exercises: none; no MIT 8.422 problem maps to Chapter 4.

Figures: Figure 4.1 (Re and Im χ, δν and γ₁₂ sliders), Figure 4.2 (the
Doppler sum of Lorentzians, kv_T, γ₁₂, δν), Figure 4.3 (saturated decay,
I(0)/I_sat), Figure 4.4 + 4.5 (pump hole and probe class, the Lamb dip); all
still. The pulse-through-the-cell Sim was not built.

Colour: closest types on one page, OKLab: 4.1 time and wavevector 0.088,
4.2 density and time 0.084, 4.3 dipole and susceptibility 0.112, all under
the 0.12 target in light and dark; reported, not re-picked.

Left for Chen: a correction marker inside a footnote's html and id-qualified
links in footnotes (app); a cross-page citation to the intro's equations; a
concept of their own for the Maxwell-Bloch equations; whether the colour
pairs above warrant rerunning `colours:default`.


## Pass 5 (2026-10-11): Chapter 3, the chapter pass (2026-10-11)

Sections 3.1–3.4 and the intro page, built in parallel on prep's rows,
checked together.

Sign convention: Eq. (3.84) couples the levels through +ℏΩ|2⟩⟨1|, where
Section 2.1 has −ℏΩ|2⟩⟨1| (from −μ̂·E). Checked by hand: (3.86)–(3.89) and
(3.99) follow correctly from (3.84), so this is an unstated convention, not
a misprint; every Ω changes sign between the two. One note, `c-eq-3-84`, at
its first appearance on (3.84), naming (4.43)'s form; 4.3's correction on
(4.53) already states it from the other side.

Variables: 3.4's Ŝ, Ĥ_SR, ρ̃ and τ_c rows now read as 3.3's, each keeping
its own clause (Ŝ_p and Ŝ = |1⟩⟨2|; ρ̃_S, ρ̃_R, ρ̃_corr); 3.4's Ŝ no
longer `redefines`, 3.3's does against 3.1–3.2's "a system observable".
ρ̂ and ψ keep `redefines` in 3.2 and 3.3 (the universe, not the system).
f(t) keeps latex `f`.

Corrections: as the sections' plans list them (3.1's property (3) and
Eq. 3.16; 3.3's Eqs. 3.23, 3.33, 3.52, 3.62, 3.70, 3.74; 3.4's Eqs. 3.82,
3.95), plus the convention note above. Footnotes 1–2 in 3.3 are `book` rows.

Term spans: `terms_pass.py candidates --chapter 3` found 28 bare mentions;
20 wear their concept (reservoir, environment as open-system; pure states;
decoherence as dephasing-rate; detuning), 8 stay plain (the intro's
"modes", "memory" as Markovian not the continuum's, "coherent
interactions", "population decay" and the coherence "decay rate", which
continuum-decay-rate does not name).

Exercises: MIT 8.422 Problem Set 6, Problem 3 (three parts) after 3.4.2 and
Problem Set 7, Problem 1 (two parts) after 3.4.3, all AI-marked solutions,
none held.

Figures: the book draws none; three Sims: sim-thermal (3.1),
sim-spin-echo (3.3), sim-damped-bloch (3.4).

Colour: closest types on one page, OKLab: 3.1 dipole and frequency
0.127/0.128, 3.3 state and time 0.132/0.129, 3.4 state and rate
0.136/0.137 (light/dark), all above the 0.12 target.

Checks: `ost check --section` clean for 3.intro and 3.1–3.4; the astro
build with `OMNISTAX_BOOKS=lukin-amo-ii` passes; the five pages show no
console errors in light or dark and their notes lists render.

Left for Chen: whether the convention note belongs as a correction row
(the only AI-note kind the app has).


## Pass 6 (2026-10-11): Prerequisites: Chapter 3 is merged, so the stand-ins are replaced.

`lindblad-master-equation` now rests on `generalized-master-equation` (the
Ŝ_p sum that (6.1) writes in Lindblad form), and the stand-in edge to
`spontaneous-emission-rate` is dropped, since that concept is reached
through master-equation and thermal-field-correlator. The edge from
`stochastic-master-equation` to `density-operator` is not added because it
is reached already. `non-hermitian-evolution` now takes
`density-matrix-populations`, for 6.3's ρ₂₂ leak.

Variables: 6.1's ρ̂_S, n̄ and γ rows already read as Chapter 3's (3.4's n̄).
γ_k keeps its own meaning, "the rate of jump channel k". Ŝ_k stays ink with no
row, because (6.3)–(6.4) only name it. δp_α (`delta_p`), δp_{k,α}
(`delta_p_k`) and 6.2's unsubscripted δp (`delta_p_atom`) are kept as a
set: the book drops α in 6.2, where only one trajectory of the decaying atom
is followed.

Corrections: 6.1's tilde on (6.10) and Table 6.1's steps (3) and (7); 6.2's
sign in (6.24) and the missing ⟨2|ψ⟩ in (6.25). The |a₂²| in (6.23) and
(6.26), which the config had listed as misprints, is correct (|z²| = |z|²)
and carries no note. The config now says so.

Term spans: `terms_pass.py candidates --chapter 6` found 10 bare mentions.
8 now wear their concept: the intro's "master equation" and "density
matrix", 6.1's "environment" as open-system and "pure state", and 6.3's
"two-level system". 2 stay plain: 6.1's "absorption" terms and 6.3's
"simple". In 6.1 the master equation that is rewritten and discretized from
(6.1) is `lindblad-master-equation`; the one "we derived" is
`master-equation`. The book never says "Markov", and the intro never says
"density operator".

Exercises: none, since no MIT 8.422 problem maps to Chapter 6.

Figures: the book draws none. There are three Sims: 6.1's Table 6.1
procedure, 6.2's no-jump population and 6.3's `sim-weak-leak`. The config
did not expect the last one. It is kept by root 24, because it shows the
section's limit (∫γρ₂₂ ∝ |Ω|²) holding and failing, which 6.2's undriven
Sim cannot show.

Colour: the closest types on one page, in OKLab, are state and time on 6.1
to 6.3 at 0.132 light and 0.129 dark, above the 0.12 target.

Checks: `ost check --section` is clean for 6.intro and 6.1 to 6.3.


## Pass 7 (2026-10-11): Chapter 5, the chapter pass

Sections 5.1–5.3 and the intro page, built in parallel on prep's rows, checked together.

Figures: Figure 5.1 (intro, still copy); 5.1 builds Figure 5.2 (still) and Figure 5.3 as its own Sim (sim-raman-absorption) plus sim-two-photon-rabi; 5.2 folds Figures 5.4 + 5.5 into sim-eit and adds sim-dark-state; 5.3 builds Figure 5.6 (still) and Figure 5.7 (sim-phase-matching). The config's three-way fold was dropped for 5.1's Figure 5.3.

Symbols: rho_31, gamma_13 and v are new book symbols, and 5.1 and 5.2 now write them, and gamma_2, as macros. P_jump belongs to 6.1's `jump-probability`, which introduces it; 7.4's `quantum-jump-error` must not claim P_jump as its symbol.

Edges: `lambda-density-matrix-equations` now takes Chapter 3's `master-equation` in place of `lindblad-master-equation`; `complex-decay-rate` takes `coherence-decay-rate`. `stirap` ← `dark-state-preparation` is left for Chapter 7's pass (ch07/book-rows.json was in use).

Corrections: as the sections' plans list them, plus `c-eq-5-21` on (5.21) (the same ℏ mix 5.2 corrects on (5.48), since (5.24)–(5.25) carry none) and `c-fig-7-3` on the intro's "Figure 7.3". The wrong citations "Figure 9.3" and "Figure 7.3" keep their words, link to the figure meant and carry a correction each.

Term spans: `terms_pass.py candidates --chapter 5` found 51 bare mentions; 29 wear their concept (detuning, the Λ detunings, dephasing, dispersion, the intro's density matrix), 22 stay plain (the partial "decay rate"s, "simple", bare "absorption", the cascade's "two-photon resonance", "nonlinear susceptibility" meaning χ⁽³⁾).

Exercises: none (no MIT 8.422 problem maps to Chapter 5).

Colour: closest types on one page, OKLab: 5.1 state and rate 0.136, 5.2 dipole and velocity 0.095, 5.3 dipole and susceptibility 0.112 (light; dark the same to 0.001); 5.2 and 5.3 sit under the 0.12 target. 5.3's referents lvl-1, lvl-2 and field-3 are dealt as close greens. Reported, not re-picked.

Checks: `ost check --section` clean for 5.2 and 5.3; 5.intro and 5.1 keep three warnings, one per wrong citation, because the checker counts a cited number no figure row carries even when the builder's link and correction cover it. The astro build passes; the four pages show no console errors in light or dark, and their notes lists render.

Left for Chen: let the checker skip a figure citation that already sits inside a hand-written link (the build's linker already leaves these alone), which silences the three warnings.


## Pass 8 (2026-10-11): Chapter 7, the chapter pass

Sections 7.1–7.4 and the intro page, built in parallel on prep's rows, checked together.

Rows: `ch07/book-rows.json` carries every symbol the sections write (P_1, P_2, epsilon, c_inst, Omega_3, Omega_4, epsilon_0, Delta_omega; epsilon_k gone). P_jump stays a book symbol and no Chapter 7 concept claims it (it is 6.1's `jump-probability`'s).

Edges: `three-level-dressed-states` now takes 5.2's `dark-state` in place of the stand-ins `dressed-states` and `multilevel-rotating-frame`; `stirap` takes `dark-state-preparation`. The other deferred edges (to `dark-resonance`, `pure-and-mixed-states`, `density-matrix-populations`) were already reached and fell to the Hasse reduction, with `hamiltonian`, `schrodinger-equation`, `rabi-frequency`, `detuning`, `lambda-non-hermitian-evolution` and `bright-dark-basis` ← `dark-state`.

Terms: “counterintuitive” moves from `stirap` to 5.2's `dark-state-preparation` (the same pulse order 5.2 calls “counter-intuitive pulse sequence”), and 7.3's two spans follow it. "bright state" becomes the term of 5.2's `bright-state`. `terms_pass.py candidates --chapter 7` found 30 bare mentions; 24 wear their concept (adiabatic, dark state, two-level system, light polarization, detuning), 6 stay plain ("simple" three times, "in phase", "dynamical control", and 7.4.1's "adiabatic passage" of the beamsplitter, which is STIRAP's and not rapid adiabatic passage).

Corrections: as the sections' plans list them. 5.1's (5.22) was checked against 7.4's (7.56): (5.21) writes the decay as −iγ/2 in the Hamiltonian, so the norm falls at γ|c|² and (5.22) is right; the factor 2 in 7.4 comes from (7.43) writing ċ₃ = −γ₁₃c₃. No row added.

Figures: prep's crops `media/ch07/fig-7-3.png` and `fig-7-6.png` (experimental data, never copied) are deleted. Credits open for Chen to confirm: 7.3's Figure 7.3 caption names "Bergmann and co-workers", and 7.4's names "Theuer, Unanyan, Habscheid, Klein and Bergmann, Optics Express 4, 77 (1999)"; both were written from the figures' look and memory, the book cites neither.

Exercises: none (no MIT 8.422 problem maps to Chapter 7).

Colour: closest types on one page, OKLab: phase and time 0.103 on 7.1–7.3, state and time 0.132 on 7.4, amplitude and electric field 0.145 on the intro (dark within 0.003); 7.1–7.3 sit under the 0.12 target. Reported, not re-picked.


## Pass 9 (2026-10-11): Chapter 8, the chapter pass

Sections 8.1–8.6 and the intro page, built in parallel on prep's rows, checked together.

Variables: one glyph, one macro throughout: plain p `\kpcm`, p̂ `\kp`, plain k `\kkmag`, plain F `\kFmag`, F̂ `\kF`, plain v `\kvmag`. 8.2's `F_force` (the book's bold F of Eqs. 8.23–8.27) is used and kept. 8.3's `F_mag` row now `redefines` (dissipative force after 8.2's semiclassical force); the `p_cm` rows of 8.3, 8.5, 8.6 read as 8.1's. η keeps two wordings, 8.4's `redefines`: the Brownian drag −ηp and the laser friction ηmv_z differ in sign. f̂, Ŝ, T_D already agreed; D and 𝓕̂ keep 8.4's general meanings with 8.5's and 8.6's `redefines`.

Corrections: as the plans list them. 8.5's `c-rms-momentum` now matches 8.4's `c-eq-8-49` (Eq. 8.49 drops a factor of two; 2Dt from rest).

Concepts: `laser-cooling` added (idea, 8.1, term "laser cooling", prerequisite of `doppler-cooling`): the generic sense recurred twenty times with only `doppler-cooling` to wear. Term spans: `terms_pass.py candidates --chapter 8` found 47 bare mentions; 28 wear their concept (laser cooling 20, Doppler, sub-Doppler and Sisyphus cooling, light polarization, open system, effective Hamiltonian, quantum jump), 19 stay plain ("simple", "in phase", "rapid", "adiabatic approximation", 8.4's classical g(t − t′), the Metcalf–van der Straten title).

Figures: every caption states its unit. 8.2, 8.3 and 8.5 use γ₁₂; 8.6's Figure 8.6 uses γ with γ₁₂ = γ/2 said in the caption, kept rather than refitted; 8.4's Sim uses ℏk and μs. All figure `ai` rows record effort high.

Exercises: MIT 8.422 hw8.1, hw10.3, hw9.1, hw9.2 in 8.2 and hw9.3 in 8.5, as config sets; hw9's numbers held.

Colour: closest concept colours on one page, OKLab, about 0.09–0.10 on 8.1–8.6 in both themes (8.3's m = 0 level and σ₋ beam share a teal, as 8.3 reported), under the 0.12 target. Reported, not re-picked.

Checks: `ost check` clean for 8.intro and 8.1–8.6; the book's remaining errors are Chapters 9 and 10's. The build passes; the pages show their notes with no console errors in light and dark.


## Pass 10 (2026-10-11): Chapter 9, the chapter pass

Sections 9.1–9.4 and the intro page, built in parallel on prep's rows, checked together.

Variables: `alpha_coh` reads as 9.1's coherent amplitude in 9.1–9.4; 9.3's `g` reads as the single-photon Rabi frequency of 2.3, 9.2 and 9.4; 9.3's `x_quad`, `p_quad` read as 9.1's in-phase and out-of-phase quadratures (`p_quad` now linked to `quadrature-operators`), 9.4's pump-phase-weighted pair keeps its `redefines`. 9.4's `F_noise` reads as 9.3's and no longer `redefines`. `kappa` already agreed. `E_hat` keeps 9.3's input field and 9.4's output field as `redefines`; `phi` keeps 9.2's Fock-component phase and 9.4's local-oscillator phase as `redefines`.

Concepts: `mean-photon-number` added (definition, 9.1, terms "mean photon number", "average number", symbol n̄, prerequisite `photon-statistics`, now a prerequisite of `poisson-photon-statistics`, whose direct edge to `photon-statistics` it replaces); introduced on "the average number" before Eq. (9.7). 9.1's and 9.2's `n_bar` rows link to it (one meaning, n̄ = Σ n ρ_nn); 9.4's reservoir n̄ stays Chapter 3's `mean-thermal-photon-number`. The concept carries no form: Eq. (9.7)'s id is the form of `thermal-photon-distribution`.

Term spans: `terms_pass.py candidates --chapter 9` found 98 bare mentions; 53 wear their concept (field modes 18, decay rate 10, input field, reservoir, squeezed, polarization, detunings, average number, finesse, rotating frame), 45 stay plain ("phase shift" is not the scattering phase shift, "entangled" photon pairs are not system-environment entanglement, "dissipative" rates are not the light force, "continuum" modes, "coherent interactions", "collapse" of a squeezed state, normal modes, "simple").

Figures: Figure 9.4 (9.3) and 9.2's `sim-collapse-revival` stay separate; 9.4's caption links to Figure 9.3, whose phase-space panel reaches the cat at gt = π√n̄. Eq. (9.105) stays inside footnote 3 with its id; no form or citation needs it, and anchors do not reach ids inside notes.

Exercises: MIT 8.422 Problem Set 10, Problem 1(a)–(e) (light shift, polarizability against the oscillator model, its d.c. limit and the rotating wave approximation, Rabi oscillation from the dressed states, the dressed-state force) are set in 2.1 after Problem Set 7, Problem 3, restated in its notation with AI solutions; (f) stays in 9.3. 2.1's and 9.3's `exercise_notes` say so.

Colour: closest concept colours on one page, OKLab: 9.1 0.122 light, 0.105 dark (quadrature operators and field-mode expansion); 9.2 0.127; 9.3 0.095 (beamsplitter loss model and atom density); 9.4 0.086 (spin squeezing and cavity loss rate). 9.1 dark, 9.3 and 9.4 sit under the 0.12 target. Reported, not re-picked.

Checks: `ost check` clean for 9.intro, 9.1–9.4 and 2.1; the book's remaining errors are Chapters 10 and 11's. The build passes; the pages show their notes with no console or KaTeX errors in light and dark.


## Pass 11 (2026-10-12): Chapter 10, the chapter pass

Sections 10.1–10.4 and the intro page, built in parallel on prep's rows, checked together.

Referents: by Chen's ruling of 2026-10-11 (COLOR.md) the bare resonance and the red and blue sidebands are frequencies, not referents. 10.2 and 10.3 drop the `carrier`, `red-sb`, `blue-sb` rows and their text spans; the ladder, spectrum and state-preparation Sims draw them in the frequency hue, told apart by their labels (and in 10.3's pulse-area bars by a −ν or 0 above each bar). |g⟩ and |e⟩ stay referents. The figures say "bare resonance", the book's words; the concept term "carrier" stays.

Variables: `x_ion` is 10.2's operator x̂ only; 10.4's classical displacements keep `x_disp`. 10.4's Ω₁, Ω₂ stay `\kOmega` with a subscript (the Rabi frequency of each ion's laser, 10.2's Ω), not Chapter 5's `Omega_1`, `Omega_2`, which name the probe and coupling fields of EIT. 10.1's Paul figure caption and readout name the slow swing's frequency ν.

Licence: `media/ch10/fig-10-1.png`, `fig-10-2.png`, `fig-10-7.png` deleted; no page references them.

Term spans: `terms_pass.py candidates --chapter 10` found 11 bare mentions; 2 wear their concept (10.4's creation and annihilation operators), 9 stay plain ("out of phase" with the trap, "reservoir" and "environment" of the isolated ion, "characteristic size", "cooling" and "decay rate" of sideband cooling, "memory", "collective").

Corrections: as the plans list them. Exercises: MIT 8.422 hw10.2(a)–(c) in 10.2, (d) held, as config sets.

Colour: not measured in this pass; the frequency hue now carries three curves in 10.2's spectrum Sim, told apart by label.

Checks: `ost check` clean for 10.intro and 10.1–10.4; the book's remaining errors are Chapter 11's. The build passes; the pages show their notes with no console or KaTeX errors.


## Pass 12 (2026-10-12): Chapter 11, the chapter pass

Sections 11.1–11.8 and the intro page, built in parallel on prep's rows, checked together. Chapter 11 is the book's last; the whole-book check is clean.

Licence: `media/ch11/fig-11-12.png` and `fig-11-15.png` deleted; no page references them. Figures 11.12 (11.6) and 11.15 (11.8) are recomputed from their models with `withheld` set.

Variables: U₀ has two meanings. 11.4 and 11.5 share the contact strength 4πℏ²a/m (J·m³); 11.7 and 11.8 share the energy of two atoms on one site (J, `redefines`), both linked to `on-site-interaction`, the double well being a two-site lattice. 11.8's `U_pair` is the pair potential and stays its own. 11.7's and 11.8's t share one meaning, the tunnelling amplitude, linked to `lattice-hopping`. 11.4's V (volume) takes `redefines` against the external potential of 11.5, 11.7, 11.8. 11.5's n₀, a_t, ξ and ψ take 11.4's wording, as does 11.6's ψ; 11.5's and 11.6's τ say "The time the released cloud expands before it is imaged". `landau-criterion` carries `symbol: v_c` and `type: velocity`; 11.5's v_c row inherits them.

Term spans: `terms_pass.py candidates --chapter 11` found 122 bare mentions; 57 wear their concept (atom density, creation and annihilation operators, open and closed channels, chemical potential, inelastic, coherent states, partial cross-section, scattering amplitudes, trap depths, the metastable gas), 65 stay plain ("cooling" not Doppler cooling, "modes" and "eigenmodes" of a condensate, "homogeneous" potentials, "non-classical" matter, "gaussian" clouds, "simple", areal and column densities, the helium superfluid).

Corrections and exercises: as the plans list them; MIT 8.422 hw5.2 and hw6.1 in 11.4, hw4.2 in 11.7 with its numerical parts held, as config sets.

Colour: not re-picked. 11.1 notes the length hue sits close to Rb's CPK violet; left for the closing colour run.

Checks: `ost check lukin-amo-ii` clean for the whole book.


## Pass 13 (2026-10-16): Chapter 1, derivations (root 29)

Built: 1.3 drv-rydberg-estimate (the estimate of R∞, (1.15)–(1.16)) and drv-fine-structure-splitting ((1.21)–(1.23)). Each replaces its printed lines; the prose that sets up the estimate and the question of the splitting stay. The fine-structure corrections c-eq-1-21 and c-eq-1-23 become notes on the nodes that carry (1.21) and (1.23), and the work gives the correct 3A/2.

Judged out: the hyperfine ground state (inline, score 3), the Clebsch–Gordan table (stated, not derived), the Landé factors ("can be shown", the projection theorem never stated), the parity argument for odd ΔL (prose, score 3) and ΔL = ±1 from (1.46) (it needs the eigenvalue ħ²L(L+1), which the notes never state). 1.2's (1.7) ⇒ (1.8) is one implication.

Symbols: Δr and Δp added as `\kDeltar`, `\kDeltap` (ink). Forms (1.15), (1.16), (1.22), (1.23) anchor on their derivations.

Checks: `ost check lukin-amo-ii` clean.


## Pass 14 (2026-10-16): Chapter 2, derivations (root 29)

Built, fourteen: 2.1 drv-rotating-frame-equations, drv-rwa-equations, drv-rabi-oscillations, drv-pulse-area, drv-far-detuned-excitation, drv-ac-stark-shift, drv-dressed-states, drv-multilevel-rotating-frame; 2.2 drv-continuum-decay, drv-continuum-amplitudes; 2.3 drv-field-hamiltonian-ladder, drv-atom-field-coupling, drv-spontaneous-emission-rate, drv-dipole-decay. Long blocks that the book interrupts with prose of its own are split at those breaks, one derivation each side, so the prose keeps its place; definitions the work cites ((2.4), (2.5), (2.8), (2.9), (2.49), (2.78)–(2.79)) stay in the text.

Corrections found: (2.50) and the decay law after it carry −iΔ_Stark where (2.49) gives +i (new footnote c-decay-law, node note); 2.1's "the second term is just Σħν_k" has the wrong sign; (2.93)–(2.94) exchange μ and μ*. The old correction c-eq-2-81 was itself wrong ((2.81) is right, the 2π of (2.80) absorbed) and is deleted. The corrections on lines a derivation now carries (c-eq-2-36, c-eq-2-37, c-eq-2-48, c-eq-2-84) move into node notes.

Judged out: the Bloch equation (2.33) (set as an exercise); (2.62)→(2.63) (an integral of mode functions the notes never state); (2.71), (2.73) (one substitution each); (2.90)–(2.92), (2.95) (stated, or 2.2 restated); the wavepacket (2.100) (a contour integral the notes leave to Scully and Zubairy).

Links: in-text citations of (2.10), (2.11), (2.47), (2.89) and footnote 1 open their derivations. Coverage on eq-eom, detunings move to their hosts; variables δ_k, t (2.2), V_af, g, H (2.3) re-anchored.

Checks: `ost check lukin-amo-ii` clean.


## Pass 15 (2026-10-16): Chapter 3, derivations (root 29)

Built, fourteen: 3.1 drv-expectation-as-trace; 3.2 drv-reduced-density-operator; 3.3 drv-density-operator-evolution, drv-decaying-atom-density-matrix, drv-reduced-density-equation, and the master equation as five derivations at the book's breaks (drv-coarse-grained-change, drv-first-reservoir-term, drv-second-reservoir-term, drv-thermal-correlator, drv-master-equation); 3.4 drv-memoryless-factorization, drv-optical-bloch-equations, drv-weak-field-response, drv-steady-state-population. The correlator definitions (3.58)–(3.61), the factorization (3.49)–(3.50), the transforms (3.95)–(3.96) and the Hamiltonian (3.84) stay in the text as the facts the work cites. The expansion (3.57)→(3.69) and the optical Bloch equations were checked numerically.

Corrections: c-eq-3-23, c-eq-3-52, c-eq-3-62, c-eq-3-70, c-eq-3-74 and c-eq-3-82 move into node notes; c-eq-3-84 and c-eq-3-95 stay on the lines the text keeps.

Judged out: 3.1's two examples (substitutions into the thermal state; their sums are series the notes never state), (3.92) (read off (3.88) in one line), (3.98) (stated), (3.104) (restates the steady-state derivation's middle line, kept as printed).

Links and anchors: citations of (3.20), (3.48), (3.78), (3.89), (3.99) open their derivations; coverage on eq-3-21, eq-3-23, eq-3-31, eq-3-72, principal-part, eq-3-85, eq-3-100 moves to the hosts; forms and variables rows re-anchored.

Checks: `ost check lukin-amo-ii` clean.


## Pass 16 (2026-10-16): Chapter 4, derivations (root 29)

Built, fourteen: 4.1 drv-wave-equation, drv-svea-propagation; 4.2 drv-linear-propagation, drv-group-velocity, drv-two-level-susceptibility, drv-resonant-cross-section, drv-doppler-cross-section; 4.3 drv-nonlinear-susceptibility, drv-nonlinear-propagation, drv-far-detuned-susceptibility, drv-weak-saturation-expansion, and the saturated-absorption block as three at the book's breaks (drv-probe-coherence, drv-probe-susceptibility, drv-saturated-absorption-dip). Definitions the work cites ((4.11), (4.12), (4.29)–(4.31), (4.38), (4.53)–(4.55), (4.66)–(4.71), (4.73)) stay in the text.

The wave equation: the notes work it in footnote 1, (4.7)–(4.9), and print the result again as (4.10). The derivation stands in place of (4.10) and carries the footnote whole, so footnote-1 and its marker are removed with it.

Corrections: c-eq-4-7, c-eq-4-59 and c-eq-4-76 move into node notes; c-eq-4-22 goes with the empty line (4.22); c-eq-4-50 and c-eq-4-53 stay on the lines the text keeps, and the derivations that use them work the corrected lines with a note. (4.76) checked numerically.

Judged out: (4.25), the plane-wave case, one move; (4.44), two moves past the book's own paragraph; (4.61)–(4.62), three hidden moves; the multimode equation (4.28), a restatement of (4.24) per harmonic.

Links and anchors: citations of (4.10) open drv-wave-equation; coverage on eq-4-10, group-velocity, eq-4-43, cross-section, eq-4-56, eq-4-58, eq-4-59 moves to the hosts; forms and the variables P, v_g and σ̃ re-anchored.

Checks: `ost check lukin-amo-ii` clean.


## Pass 17 (2026-10-19): Chapter 5, derivations (root 29)

Built, thirteen: 5.1 drv-raman-coupling, drv-lambda-density-matrix, drv-weak-probe-coherences, drv-probe-response, drv-raman-resonance; 5.2 drv-dark-resonance-absorption, drv-dark-state, drv-dark-resonance-dispersion, drv-slow-light; 5.3 drv-cascade-susceptibility, drv-sfg-propagation, drv-sum-frequency-output, drv-maximal-sum-frequency-field. Definitions and given equations the work cites ((5.1)–(5.5), (5.10)–(5.11), (5.17)–(5.27), (5.31), (5.46), (5.48)–(5.49), (5.55), (5.61)–(5.63), (5.66)–(5.72)) stay in the text; (5.75) becomes a fact card after its "where".

Slow light: the notes state (5.56) and leave its working to problem set 3, so it is built as hidden work from (5.54), (5.55), the probe susceptibility and the radiative decay rate of 4.2.

Corrections: c-eq-5-35 (the halves of (5.35)), c-eq-5-64 (the sign of (5.64)–(5.65)), c-eq-5-76 (the missing dz) and c-eq-5-79 (the prefactor −1/2, which is −2) move into node notes; c-eq-5-10, c-eq-5-21, c-eq-5-31, c-eq-5-38, c-eq-5-48 and c-delta-k stay on the lines the text keeps, and c-delta-k now names the sign of Δk as well as its factor.

Judged out: (5.36), two moves after the book's prose; the dressed-state interpretation (5.37)–(5.39), whose width is (5.35) reached a second way and whose states are two moves each; 5.1.5's no-jump condition (5.40)–(5.41), three moves; (5.57), stated earlier in 5.2.1; (5.80), an order-of-magnitude estimate.

Links and anchors: the citations of (5.76) open drv-sum-frequency-output; the sentence after drv-slow-light no longer opens with "so that"; coverage on eq-5-65, eq-5-75, eq-5-78, eq-5-79 and the earlier hosts moves to the derivations; forms and the variables Δk, L, k, n and V re-anchored.

Checks: `ost check lukin-amo-ii` clean.


## Pass 18 (2026-10-19): Chapter 6, derivations (root 29)

Built, seven: 6.1 drv-master-equation-pure-states, drv-effective-hamiltonian-master-equation, drv-no-jump-norm, drv-no-jump-probability, drv-jump-decomposition; 6.2 drv-two-level-jump-probability, drv-no-jump-two-level-state. The chapter's one long block (6.5)–(6.21) is split at the book's own prose and definitions, one derivation each side, so the definitions (6.7), (6.14), (6.15) and (6.19) and the discrete-time Schrodinger equation (6.9)–(6.10) keep their places as printed facts.

Corrections: c-eq-6-25 (the missing amplitude ⟨2|ψ⟩) moves into its node's note; c-eq-6-24 stays on the printed Hamiltonian, which the derivation uses with the minus sign of (6.7); c-tilde and the two Table 6.1 corrections are untouched.

Judged out: (6.17) and (6.18), single equations of one or two moves; the ensemble average of 6.2 ("one can show" the excited population decays as $e^{-\gamma t}$), three hidden moves; 6.3 prints no equations; Table 6.1 is a prose algorithm.

Links and anchors: the citations of (6.8) and (6.21) open their derivations; coverage on eq-6-21 and eq-6-26 and the forms of (6.8), (6.16), (6.20), (6.21), (6.23), (6.26) move to the hosts.

Checks: `ost check lukin-amo-ii` clean.


## Pass 19 (2026-10-19): Chapter 10, derivations (root 29)

Built, four: 10.2 drv-sideband-couplings ((10.19)–(10.22), a printed block); 10.4 split at the book's prose into drv-two-ion-expansion ((10.31) → (10.32), hidden: positions about equilibrium, the Coulomb term to second order, the force balance), drv-two-ion-normal-modes ((10.37) with (10.33)–(10.36)) and drv-two-ion-hamiltonian ((10.39), hidden: kx_{1,2} in the two modes' operators through (10.2), then (10.4) and (10.38)). The definitions the work cites ((10.14), (10.31), (10.33)–(10.36), (10.38)) stay in the text. (10.32) and (10.37) checked with sympy.

Corrections: (10.19) is the element between ⟨g|⟨n| and |e⟩|m⟩, which the coupling's Hermitian conjugate gives, so the work carries Ω* and e^{−iη(a+a†)}, and (10.21)–(10.22) carry the phase −i the book drops; each is its node's note, and the forms eq-10-19…22 carry the corrected lines. c-eq-10-39 (η_cm and η_s never defined) is deleted with its marker: drv-two-ion-hamiltonian defines them in a step and its note gives them in terms of η. c-eq-10-24 and c-eq-10-25 stay on the lines the text keeps.

Judged out: the Lamb-Dicke parameter (10.13), three substitutions; the effective Hamiltonians (10.23)–(10.25), three moves each from (10.14) and printed apart between figures and prose; (10.26), one expansion; 10.3's preparation procedure and the swap (10.29) → (10.30), a prose algorithm with no equations (the orchestrator's ruling for this book).

Links and anchors: coverage on eq-10-39 moves to drv-two-ion-hamiltonian; forms eq-10-19…22, eq-10-32, eq-10-37, eq-10-39 and the variables H (10.2), x_disp and a_sep (10.4) re-anchored.

Checks: `ost check lukin-amo-ii` clean.


## Pass 20 (2026-10-19): Chapter 11, derivations (root 29)

Built, twenty-eight: 11.3 drv-surface-resonance-time, and the evaporative-cooling block at the book's breaks (drv-linear-trap-atom-number, drv-dipolar-loss-rate, drv-evaporation-flux); 11.4 drv-born-amplitude, drv-partial-wave-amplitude, drv-partial-wave-ultracold, drv-s-wave-amplitude, drv-mean-field-energy, drv-identical-particle-cross-section, drv-weakly-bound-state, the Feshbach block as drv-closed-channel-coupling, drv-feshbach-scattering-length and drv-feshbach-binding-energy, drv-field-commutator, drv-contact-hamiltonian, drv-field-equation-of-motion, drv-gross-pitaevskii-equation, drv-thomas-fermi-condensate; 11.5 drv-linearized-field-equation, drv-bogoliubov-equations, drv-bogoliubov-spectrum, drv-landau-critical-velocity, drv-attractive-stability; 11.8 drv-site-frequency, drv-on-site-interaction, drv-weak-lattice-band, drv-mott-transition-estimate. Every node that starts from an earlier result starts from that result's last line, keys included: the amplitudes f_l and f_0 are read off (11.62) itself, the Feshbach and Bogoliubov chains start from (11.99), (11.92), (11.128), (11.143) and (11.151) as their derivations end them, and (11.128)'s V_trap becomes the V(r) of (11.143) in a step.

The Mott transition: (11.208) is worked from the homogeneous Hubbard Hamiltonian in the product of coherent site states; its hopping energy is −t·z, not the printed −t·z·2, and (11.210) follows as t·z·2 ∼ U₀ for the printed t·z·4 (two node notes; form eq-11-210 carries the corrected line).

Corrections that a derivation now carries move into node notes: c-eq-11-21, c-eq-11-82, c-eq-11-91, c-eq-11-99-cited, c-eq-11-139, c-eq-11-159, c-eq-11-199, with the book's ⟨ψ_c^res|g|η⟩ of (11.105). Those on lines the text keeps stay (c-eq-11-81, c-eq-11-127, c-eq-11-158, the 11.4.5 signs, c-josephson, c-exact-value).

Judged out: the condensation temperature and condensate fraction of 11.1 (Bose integrals and densities of states the notes never state); the van der Waals C₆ (11.41) and the exchange energy −2t²/U₀ (second-order perturbation theory, never stated); the slab integral of 11.4.5; the healing length (11.140), three moves; the evaporation estimates (11.29)–(11.34); the Josephson energy of 11.7, three moves, and (11.172) → (11.173), one; the Hubbard pieces (11.191)–(11.194), stated or one move; (11.209) and the variational (11.212), stated.

Links and anchors: citations of (11.21), (11.124), (11.143) open their derivations; coverage moved to the hosts where a span went with a display; forms and variables re-anchored (E_SF to drv-mott-transition-estimate).

Checks: `ost check lukin-amo-ii` clean.


## Pass 21 (2026-10-19): Chapter 9, derivations (root 29)

Built, twenty-eight: 9.1 drv-shift-operator-on-vacuum, drv-coherent-photon-statistics, drv-coherent-state-completeness, drv-coherent-state-overlap; 9.2 drv-jaynes-cummings-equations, drv-jaynes-cummings-solution, drv-coherent-field-state, drv-naive-rabi-oscillation, drv-rabi-phase-expansion, drv-field-splitting; 9.3 drv-cavity-field-evolution, drv-damped-coherent-amplitude, drv-damped-quadrature-variance, drv-purcell-elimination, drv-purcell-rate, drv-strong-coupling-figure-of-merit, drv-suppressed-decay; 9.4 drv-phase-dependent-amplification, drv-two-photon-drive, drv-squeezing-equations, drv-pair-state, drv-quadrature-squeezing, drv-damped-quadrature-equations, drv-damped-squeezing, drv-output-squeezing, drv-homodyne-intensities, drv-homodyne-difference, drv-squeezed-phase-sensitivity. Blocks the book breaks with its own prose are split at those breaks; definitions the work cites ((9.147)–(9.148), (9.162)–(9.163), (9.176)–(9.177), (9.189), (9.200)–(9.201)) stay in the text. A node that starts from an earlier result carries that result's line with its keys (drv-jaynes-cummings-solution's (9.58) node corrected to match).

Corrections: c-eq-9-26, c-eq-9-36, c-eq-9-74, c-eq-9-76, c-eq-9-106, c-eq-9-118, c-eq-9-128, c-eq-9-143, c-beta-star and c-eq-9-181 move into node notes (rows and markers removed). New in the work: (9.119) as printed has the shift term's sign of the (9.110) convention, not of the printed (9.116)–(9.118); (9.157) carries ξ² where the second order gives ξ²/2. c-eq-9-146 now also says that (9.146)'s −ig_j â†σ̂12 term has the wrong sign, which would cancel (9.149).

Judged out: 9.1.1 (a restatement of 3.1's thermal state); (9.30) (three moves); the P representation (9.43), the linear amplifier (9.135) and the Walls–Milburn statistics (9.158) (cited, not derived); (9.44)–(9.52), (9.60)–(9.62), (9.70)–(9.71), (9.100), (9.127), (9.132), (9.159), (9.184)–(9.185) (under the bar); 9.3.2's noise model (8.4.2's reservoir algebra reviewed with Ŝ = â, built there); (9.203)–(9.206) (beamsplitter phases the notes never fix).

Links and anchors: citations of (9.24), (9.65), (9.78), (9.107), (9.175), (9.191) open their derivations; forms and variables rows re-anchored to the hosts; coverage on eq-9-157 moves to drv-pair-state.

Checks: `ost check lukin-amo-ii` clean.


## Pass 22 (2026-10-19): Chapter 7, derivations (root 29)

Built, nine: 7.1 drv-adiabatic-amplitudes, drv-adiabatic-condition; 7.2 drv-two-level-adiabaticity, drv-pulse-area-condition; 7.3 drv-lambda-dressed-states, drv-tripod-dark-states; 7.4 drv-stirap-zeroth-order, drv-stirap-first-order, drv-stirap-fidelity. Printed blocks the book breaks with its own prose are split at those breaks; the definitions and given equations the work cites ((7.1)–(7.2), (7.5)–(7.6), (7.11)–(7.16), (7.24), (7.39)–(7.44)) stay in the text, and (7.28) and the Ω of (7.29) become fact cards after their "where".

Hidden work built: the Λ dressed states (7.25)–(7.32), the four-level dark states (7.35)–(7.38) and the STIRAP fidelity (7.58), which the notes state without working. The fidelity is worked from the norm lost at 2γ₁₃|c₃|², with c₃ following the dark amplitude as in (7.51); integrating (7.41)–(7.43) exactly gives 0.859 at γ₁₃/Ω²τ = 0.05, against 0.855 worked and 0.924 from the printed exponent.

Corrections: c-eq-7-9, c-eq-7-18, c-eq-7-29, c-eq-7-30, c-eq-7-38 and c-eq-7-58 move into node notes, their rows and markers gone; c-eq-7-21, c-theta-dot, c-eq-7-23, c-d13, c-omega4, c-eq-7-56 and c-final-time stay on the lines the text keeps.

Judged out: 7.2's dressed states (7.13)–(7.16), whose energies restate 2.1's drv-dressed-states; (7.17), three moves from (7.19); Landau–Zener (7.21)–(7.23), quoted from Landau and Zener rather than derived; (7.53), an order-of-magnitude reading of (7.52); (7.56)–(7.57), one line and a restatement; 7.4.1's (7.62)–(7.65), single equations of two moves inside the physical argument.

Links and anchors: the citations of (7.4) and (7.10) open their derivations; coverage, forms and variables on the removed equations move to the hosts.

Checks: `ost check lukin-amo-ii` clean for chapters 4 to 7.


## Pass 23 (2026-10-19): Chapter 8, derivations (root 29)

Built, thirty-five: 8.1 drv-plane-wave-coupling, drv-recoil-shifted-resonance; 8.2 drv-light-force-operator, drv-semiclassical-light-force, drv-dissipative-force, drv-scattering-force, drv-maximum-dissipative-force; 8.3 drv-doppler-force-expansion, drv-friction-coefficient; 8.4 drv-langevin-solution, drv-mean-square-momentum, drv-long-time-momentum, drv-einstein-relation, drv-naive-commutator-decay, drv-system-operator-equation, drv-reservoir-operator, drv-markov-decay, drv-quantum-langevin-moments, drv-heisenberg-langevin-equation, drv-fluctuation-dissipation-theorem; 8.5 drv-coherence-noise, drv-noise-moment, drv-fluctuating-force, drv-diffusion-constant, drv-doppler-limit; 8.6 drv-lin-perp-lin-field, drv-sisyphus-light-shifts, drv-sisyphus-reactive-force, drv-population-relaxation, drv-steady-state-force, drv-population-lag, drv-lag-force, drv-sisyphus-solution, drv-sisyphus-friction, drv-sisyphus-limit. The chapter's long blocks are split at the book's own prose; definitions the work cites ((8.9), (8.25), (8.29), (8.50), (8.53)–(8.56), (8.63), (8.71)–(8.73), (8.79)–(8.80), (8.83), (8.99)–(8.104), (8.110)–(8.111), (8.117)) stay in the text.

Footnote 1, the commutator identity (8.11)–(8.13), is worked whole as the first node of drv-light-force-operator, so footnote-1 and its marker are removed. The "bit of algebra" behind (8.24) is the steady state of (3.86), with Chapter 3's Ω of the opposite sign to (8.2)'s. The proof of (8.73) carries the book's argument on the three terms as its facts and reasons.

Corrections: c-eq-8-52, c-eq-8-74, c-eq-8-107, c-eq-8-108, c-eq-8-133 move into node notes (rows and markers removed). The Doppler limit takes |η| in the Einstein relation (node note on (8.95)); c-eq-8-95 moves to the kept sentence's "δ ≈ γ₁₂" and now says the optimum is δ ≈ −γ₁₂.

Judged out: (8.19) (printed in the prose, one skipped move); (8.31)–(8.33) (one substitution; a "more careful analysis" of saturation the notes never give); (8.45), (8.49) (one move each, corrections kept); (8.70) (three moves); (8.79) (8.2's force operator recalled); (8.127)–(8.130), (8.134)–(8.135) (one move each); (8.132) (cited from Dalibard and Cohen-Tannoudji).

Links and anchors: citations of (8.24), (8.28), (8.30), (8.57), (8.91), (8.93), (8.106)–(8.107), (8.124)–(8.125) open their derivations, in the figures' captions and c-eta-sign too; forms and variables rows re-anchored; coverage on eq-8-23, eq-8-24, eq-8-28, eq-8-44, eq-8-52, eq-8-57, eq-8-61, eq-8-62, eq-8-65, eq-8-113, eq-8-124, fluctuating-force, al-split and pumping-drops moves to the hosts.

Checks: `ost check lukin-amo-ii` clean.

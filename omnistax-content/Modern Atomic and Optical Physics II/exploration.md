# Exploration: Modern Atomic and Optical Physics II (Lukin), the full-book pass

Written 2026-10-11, before any section was converted. The source of record is
`source/lukin-amo2.pdf`, 293 pages typeset with pdfTeX (created 2017-03-20; the
notes say "last updated December 2016"): lectures by Mikhail D. Lukin at
Harvard, notes taken and typed by Lilian Childress. `source/text-layer.txt` is
its whole text layer with `<<<PAGE n>>>` markers. The PDF has no outline, no
metadata title and no licence or copyright statement anywhere.

What was read in full: the table of contents, the whole of Chapters 1 and 2,
and of every other chapter its opening and at least two sections: 3.1, 3.4;
4.1, 4.2 (opening); 5.1 (opening), 5.2; 6.1, 6.2, 6.3; 7.1 (opening), 7.3.1;
8.1, 8.3, 8.6.2 to 8.6.3; 9.1 (end), 9.2, 9.3.2, 9.3.3; 10.1, 10.2; 11.1,
11.8. Every figure caption of the book was read from the text layer, and every
page was checked for raster images. All ten MIT 8.422 problem sets were read.

## The organising units

book → chapters (11) → sections (N.M) → numbered subsections (N.M.K) → run-in
headings (an unnumbered bold line opening a paragraph: "Resonant field δ = 0",
"Dressed States", "The Bloch sphere picture"). Forty-five sections:

| Id | Chapter | Sections | PDF pages |
|---|---|---|---|
| ch01 | Preface: Quantum mechanics and atomic physics review | 3 | 7–19 |
| ch02 | Basic processes in AMO physics and quantum optics | 3 | 20–42 |
| ch03 | Mathematical methods for open systems | 4 | 43–63 |
| ch04 | Propagation of light in a resonant medium | 3 | 64–81 |
| ch05 | Coherent interactions in multi-level systems | 3 | 82–105 |
| ch06 | Stochastic Wavefunctions | 3 | 106–112 |
| ch07 | Adiabatic Processes | 4 | 113–133 |
| ch08 | Atomic motion in laser light | 6 | 134–168 |
| ch09 | Quantum properties of light interacting with matter | 4 | 169–216 |
| ch10 | Trapped ions: quantum state engineering | 4 | 217–233 |
| ch11 | Quantum dynamics of atomic matter waves | 8 | 234–293 |

A PDF page is the printed page plus one (the title page is unnumbered, the
contents run printed 1–5 on PDF 2–6). `tools/pages.py` reads the section
starts from the text layer and writes `toc.md` and `sections.json`, which give
every section its title and its PDF page range; a section that starts mid-page
shares that page with the one before it, and the converter crops at the
heading.

One section is one page, never folded (root 11), however thin: 6.3 is two
paragraphs, 1.1 one page. Chapter 1 is a chapter like the others, though the
book titles it "Preface": its 1.1 Introduction is a numbered section, a page of
ch01, not the book's `intro/` page, and the book has no book-level
introduction or summary.

**h2 blocks.** A numbered subsection N.M.K is an h2, its title verbatim. A
section with no numbered subsections (2.2, 3.1, 3.2, 4.1, 6.1–6.3, 8.1–8.3,
11.2), or with one that spans the whole section (2.1 is all 2.1.1), takes its
run-in headings as the h2s, the text before the first one being the opening
block. Inside a numbered subsection, run-in headings are h3s. 3.3.3 (pages
50–57, the master-equation derivation) and 9.4.1 are long enough that the
section's plan may split on the book's run-in headings; nothing is invented
where the book prints none.

**Chapter introductions.** Chapters 3 to 11 open with one to four paragraphs
before the first section (Chapter 4's carries equations 4.1–4.10 and a
footnote, Chapter 5's a numbered list of three classes of process, Chapter 6's
the history of Dalibard–Castin–Mølmer and Carmichael). Each is the chapter's
`intro/` page (root 21). Chapters 1 and 2 start directly on a section. No
chapter has a summary; 6.3 "Non-Hermitian evolution: Summary" is a numbered
section and stays one.

## Apparatus

- **Equations** are the body of the book: numbered (N.K) chapter-wide, about
  1120 of them (over 200 in each of Chapters 9 and 11), cited as "Eq. (2.33)". Many are multi-line aligned systems with
  one number per line and under-braces naming a term (`γ/2`, `∆Stark`,
  `Ropt`). The text layer scrambles every one of them; transcription reads
  the rendered page.
- **Figures**: 66 numbered captions (Figure N.K, chapter-wide) and about 91
  references to them. Almost all are vector line drawings; eight pages hold
  raster images. Kinds, with examples:
  - level diagrams: 2.1, 5.1, 5.2, 5.6, 7.4, 7.7, 8.4, 9.8, 10.4, 10.6, 10.8
  - plotted curves of the theory: 2.2b dressed energies, 4.1 Re/Im χ, 4.2
    Doppler profile, 4.5 saturated-absorption spectrum, 5.3–5.5 Raman and EIT
    susceptibilities, 8.2 and 8.6 cooling forces, 9.2 Poisson distribution,
    9.3 collapse and revival, 11.6–11.10 scattering length, Feshbach
    resonance, Bogoliubov spectrum
  - the Bloch sphere: 2.3, three panels in perspective
  - phase space: 9.1, 9.4, 9.10, 9.11 (coherent, cat and squeezed states as
    areas in the quadrature plane)
  - pulse sequences against time: 7.1, 7.2, 7.5
  - potentials in space: 8.5 Sisyphus hills, 10.3, 11.5, 11.7, 11.8, 11.13
    double well, 11.14 lattice with ν = 1, 2, 3 Mott shells
  - apparatus schematics: 4.4 pump–probe, 8.1 beams, 8.3 MOT, 9.5–9.7 loss
    and cavity models, 9.9 OPO, 9.12–9.14 homodyne and interferometers,
    10.1 Penning and 10.2 Paul traps, 10.7 ion string
  - experimental data from published papers: 7.3 (STIRAP transfer), 7.6
    (neon beamsplitter), 11.12 ("taken from Nature 403 p166 (2000) without
    permission"), 11.15 ("taken from Nature 415, 39 without permission");
    10.1, 10.2 and 10.7 are raster images of unstated origin.
- **Tables**: Table 6.1 (the Monte Carlo procedure, seven steps) and Tables
  11.1–11.3 (binding energies, trap depths). Numbered chapter-wide.
- **Examples** (13) are not boxed: a subsection or run-in heading titled
  "Example: …" (1.3.1 the hydrogen atom, 3.4.2 the two-level atom, 5.3.1 the
  cascade system, 6.2, "Example 1/2" in 3.1, "Example: Coherent state" in
  9.3.2, "Example: homogeneous potential" in 11.5). They are prose
  derivations with no problem, no answer and no check; they stay in the text
  as their blocks.
- **Remarks** (2.3.3, 3.4.1, 5.1.6, 7.4.1, the "Remark concerning the
  wavefunctions" run-in in 1.3.4) are subsections like any other.
- **Footnotes** are numbered per chapter (Chapter 2 has 1–4), usually a
  derivation step or a caveat; they are kept with their number.
- **References to other texts** are inline and informal: Vanier and Audoin,
  Sakurai, Metcalf and van der Straten, Meystre and Sargent, Cohen-Tannoudji
  et al., Scully and Zubairy, Sargent–Scully–Lamb, and journal citations
  ("Phys. Rev. Lett. 94, 010401 (2005)"). There is no bibliography. They stay
  in the prose as printed, unlinked.
- **References to the course** that the notes do not carry: "see e.g.
  homework problem 5" (2.2), "see problem set 3" (5.2, twice). Kept verbatim;
  where an MIT problem covers the same ground, the section's notes may say so.
- **Wrong cross-references.** The notes cite numbers that point elsewhere:
  Chapter 5 cites "Figure 7.3" and "Figure 9.3" for its own Figures 5.1 and
  5.2, and 9.2 cites "Eq. (11.6)" for its own (9.6x). The words stay; the link
  goes to the figure or equation meant, and the plan says so.
- **Spelling** is the notes' own ("exercize", "Schroedinger" beside
  "Schrodinger", "Clebsch-Gordon" beside "Clebsch-Gordan") and is kept.

### What the book does not have

No exercises, problems, answers or key. Two in-text invitations ("it is a good
exercize to know how to derive an expression for it", 1.3.1; "it is a useful
exercise to show that the Hamiltonian of Eq. (2.32) leads to the equations of
motion", 2.1.1). No learning objectives, no section or chapter summaries, no
key-equations lists, no glossary and no index. No colour anywhere except the
red and blue curves of Figure 2.2b. Defined terms are set in quotation marks
at first use ("Rabi oscillations", "dressed states", "master equation",
"optical Bloch equations", "rate equations", "dark state", "Mott insulator"),
which is where concepts and their glossary words come from.

## Notation

- Operators wear hats (Ĥ, d̂, â, ρ̂), though the notes drop them in places
  (ρ, H in Chapter 3's later equations). Dirac notation throughout;
  projectors written |i⟩⟨j| or σ_ij = |i⟩⟨j|.
- ℏ is kept explicit; SI units (Chapter 2 says so), with Gaussian e²/r in
  1.3.1 and ∇²φ = 4πρ in 2.3.3.
- Levels are numbers: |1⟩ ground and |2⟩ excited in Chapters 2–4; in the Λ
  system of Chapters 5 and 7, |1⟩ and |2⟩ are the lower states and |3⟩ the
  excited one. Chapter 10 uses |g⟩, |e⟩ (and |r⟩ for the cooling level);
  Chapter 9 labels the atom |1⟩_a, |2⟩_a beside Fock states |n⟩.
- A tilde marks the rotating frame (c̃₂, |2̃⟩, H̃) and is dropped once the
  frame is understood ("the tilde may be dropped", 2.1.1).
- Frequencies: ω the atomic transition, ν the applied field; δ = ν − ω (so
  δ > 0 is blue), the figure writing −δ = ω − ν. Chapter 5: single-photon
  detunings ∆₁ = ν₁ − ω₁₃, ∆₂ = ν₂ − ω₂₃ and the two-photon δ = ∆₁ − ∆₂.
  Chapter 10 reuses ν for the trap frequency and ∆ for the laser detuning;
  Chapter 9 uses ν for the cavity and ω_k for modes; 11.8 uses ν for the
  filling factor and t for the hopping.
- Rabi frequency Ω = ℰμ/ℏ, with no factor 2: populations oscillate as
  cos²|Ω|t and the dressed splitting is 2|Ω|. MIT 8.422 writes Ω/2 in the
  Hamiltonian, so its Ω is twice Lukin's.
- Decay: γ the population decay rate, γ_ij the decay of a coherence,
  γ_d dephasing, κ cavity loss, Γ_21 = γ_21 − iδ a complex rate. MIT 8.422
  writes Γ for the natural linewidth. g is the single-photon Rabi frequency.
- η is the friction coefficient in Chapter 8 and the Lamb–Dicke parameter in
  Chapter 10; ρ is a density matrix everywhere except |r| in 1.3.7.

## Exercises: the MIT 8.422 problem sets

`source/mit-8422/hw1.pdf`–`hw10.pdf` are Ketterle's Spring 2013 problem sets
for MIT 8.422 Atomic and Optical Physics II, from MIT OpenCourseWare (CC
BY-NC-SA 4.0, no solutions published). Twenty-nine problems; most are
derivations ("show that", "compute") whose stated result is in the prompt;
hw9 is numerical (sodium, 589 nm, 2π × 10 MHz). They use their own notation
(|g⟩, |e⟩, ρ_ee, Γ, Ω/2, ω_L). The match to Lukin's sections, by what each
problem tests:

| Problem | Subject | Lukin section |
|---|---|---|
| hw1.1 | properties of the coherent state | 9.1 (9.1.2) |
| hw1.2 | Hanbury Brown–Twiss and g⁽²⁾ | 9.1 (weak: Lukin has no g⁽²⁾ section) |
| hw1.3 | Q-function plots: cat, squeezed, Kerr | 9.4 (9.4.2), with 9.2 for the cat |
| hw2.1 | the quantum beamsplitter | 9.1 (beamsplitter, eqs. 9.47–9.52) |
| hw2.2 | a beam attenuator as a beamsplitter | 9.3 (9.3.1, Fig. 9.5) |
| hw2.3 | the Schmidt measure of entanglement | none |
| hw3.1 | lossy interferometer | 9.3 (9.3.1) |
| hw3.2 | squeezed states by two-photon interaction | 9.4 (9.4.1, 9.4.2) |
| hw3.3 | noise properties of squeezed states | 9.4 (9.4.2, 9.4.3) |
| hw3.4 | teleportation | none |
| hw4.1 | Heisenberg-limited interferometry, the Yurke state | 9.4 (Figs. 9.13, 9.14) |
| hw4.2 | Hanbury Brown–Twiss with atoms | 11.7 (higher-order coherence) |
| hw5.1 | Rayleigh and Thomson scattering, d·E against p·A | 2.3 (2.3.3) |
| hw5.2 | van der Waals interaction of ground-state atoms | 11.4 (11.4.1) |
| hw6.1 | excited and ground-state atom at long range | 11.4 (11.4.1) |
| hw6.2 | Casimir model of the electron | none |
| hw6.3 | physical origin of T₂ (phase damping) | 3.4 (3.4.2, γ_d) |
| hw7.1 | optical Bloch equations, weak and short-time limits | 3.4 (3.4.3) |
| hw7.2 | one atom and one photon: spontaneous emission | 9.2 (9.2.2), else 2.3.4 |
| hw7.3 | driven two-level atom: dressed states | 2.1 |
| hw8.1 | classical model of the light force | 8.2 |
| hw8.2 | master equation for a damped cavity | 9.3 (9.3.2) |
| hw9.1 | a Zeeman slower | 8.3 (Lukin has no slower) |
| hw9.2 | slowing with off-resonant light | 8.3 |
| hw9.3 | density limit in a MOT | 8.5 (8.5.3, dense sample) |
| hw10.1 | the dressed atom, quantized field | 9.3 (9.3.3, Fig. 9.8) |
| hw10.2 | sideband cooling | 10.2 (10.2.4) |
| hw10.3 | optical dipole trap energetics | 8.2 |

Twenty-four map to a section; hw2.3, hw3.4 and hw6.2 have no home, and hw1.2
and hw9.1 rest on matter Lukin only touches. Chapters 4, 5, 6, 7 and most of 1
have no problem at all. `source/mit-8422/` also holds three OCW lecture notes
(`casimir_effect.pdf`, `homodyne_notes.pdf`, `vanderwalInter.pdf`), not
exercises and not used.

## What has no place yet

Objectives, summaries, key-equation lists and a glossary: the book prints
none, and root 21 forbids inventing an introduction or a summary. The
equations table of a chapter is still filled from the concepts' forms, as for
every book. Book-level introduction and summary pages: none. Sheets: none is
needed for the first chapters; a table of constants or of alkali D-line data
would be a sheet if a later chapter wants one.

## What would make this book intuitive and stunning (root 23)

The notes are a theorist's: equations carry the story, and the figures are
schematic sketches of curves the equations already imply. Almost every idea in
the book is a two-, three- or few-level system evolving in time under a
handful of numbers (Ω, δ, γ, κ, g), so almost every idea can be run. What
print cannot give is the motion, and the comparison of rates the whole book
turns on (Ω ≪ δ, γ ≪ ν, g ≫ κ, γ). Colour carries the comparison, the
simulation the motion: a reader should see a Rabi frequency and a decay rate
in different hues in every equation and on every slider, and watch the
state move. The common thread is one live object, a Bloch sphere or level
diagram whose populations and coherences are drawn as they evolve, reused
from chapter to chapter so that each new effect is the old picture with one
more knob.

Per chapter, the stories, judged by root 24 (the value add is named) and 28:

- **1 Review.** Fine and hyperfine ladders: the hydrogen n = 2 manifold
  splitting as corrections switch on in turn (choice: Bohr, + fine, +
  hyperfine), still. Zeeman: the 87Rb/23Na F = 1, 2 ground levels against B
  from the weak-field F, m_F regime to the strong-field m_I, m_S regime
  (slider B; the Breit–Rabi curves the notes imply but never draw), still.
  Selection rules: a level diagram where σ±/π choices light the allowed
  m-transitions. Mostly still tier.
- **2 Two-level atom.** The signature figure of the book: the Bloch sphere
  (3D, mathematical) with the state precessing about the drive vector
  {−2ReΩ, −2ImΩ*, −δ}, sliders Ω and δ, a strip below showing p₂(t);
  replaces Figure 2.3 and carries Rabi flopping with detuning (generalised
  Rabi frequency, reduced contrast). Pulse area: a pulse whose area the
  reader sets (π, π/2 detents) drives the vector; moving. Dressed states:
  Figure 2.2b live, energies ϵ± against δ with the eigenvector mixture drawn
  as bars at the cursor, an avoided crossing whose gap is 2|Ω|; still.
  Adiabatic elimination: exact c₁(t) beside the light-shifted e^{−i|Ω|²t/δ},
  the fast wiggle averaging out as δ grows; moving. Spontaneous emission:
  the outgoing photon wavepacket e^{−γ(t−z/c)/2} leaving the atom; moving.
- **3 Open systems.** The Bloch vector shrinking into the sphere under γ and
  γ_d (pure state on the surface, mixed inside: |ρ₁₂|² ≤ ρ₁₁ρ₂₂ made
  visible); damped Rabi oscillation to the steady state ρ₂₂ → R/(γ+2R),
  saturating at ½ as Ω grows. One figure, moving.
- **4 Propagation.** Re χ and Im χ against detuning (Figure 4.1) with a pulse
  crossing the medium, absorbed and phase-shifted; Doppler broadening as the
  sum of shifted Lorentzians (Figure 4.2) with a temperature slider;
  saturation spectroscopy's Lamb dip appearing when pump and probe address
  the same velocity class (Figures 4.4–4.5), moving atoms coloured by
  velocity class.
- **5 Λ systems.** The EIT window: probe absorption and dispersion against
  probe detuning, the dip opening as Ω₂ grows (Figures 5.4–5.5 folded), with
  the dark state |D⟩ ∝ Ω₂|1⟩ − Ω₁|2⟩ drawn on the level diagram, |3⟩
  emptying; slow light as a pulse compressing inside the medium as Ω₂ falls.
  Two-photon Rabi oscillation between |1⟩ and |2⟩ at large ∆. Phase matching
  (Figure 5.7): the sum-frequency field growing and falling back with ∆k.
- **6 Stochastic wavefunctions.** Quantum-jump trajectories of a decaying
  atom: a dozen trajectories of p₂(t), each smooth then jumping, their
  average converging on e^{−γt} as the count grows (Carmichael's question:
  the no-jump evolution still empties |2⟩). Moving; the best case in the book
  for a sim that tells a story no static figure can.
- **7 Adiabatic processes.** Rapid adiabatic passage: a chirped pulse sweeping
  δ through resonance, the Bloch vector following the drive vector from pole
  to pole, failing when the sweep is too fast (Landau–Zener). STIRAP: the
  counter-intuitive pulse order (Figure 7.2 live): sliders for pulse delay
  and two-photon detuning, populations P₁, P₂, P₃ against time, with the
  mixing angle θ and the dark state on a level diagram; reversing the order
  (intuitive) loses the population to |3⟩. Figure 7.3's experimental map
  (transfer against delay and detuning) is recomputed from the model, not
  copied.
- **8 Laser cooling.** Doppler molasses: the force F(v) of each beam and
  their sum (Figure 8.2) with an ensemble of atoms whose velocity histogram
  narrows to the Doppler limit; red against blue detuning flips cooling to
  heating. Sisyphus: an atom climbing the lin⊥lin light-shift hills of
  Figure 8.5 and being pumped to the lower one at each crest, its kinetic
  energy stepping down; moving. MOT (Figure 8.3): a restoring force from
  the Zeeman-shifted σ± beams, 3D physical apparatus.
- **9 Quantum light.** Coherent state as a displaced disk rotating in phase
  space with its Poisson number distribution (Figures 9.1–9.2). Jaynes–
  Cummings collapse and revival (Figure 9.3) with ⟨n⟩ = |α|² as a slider, the
  Rabi frequencies g√(n+1) drawn as a comb that dephases and rephases; the
  field splitting into the two components of the cat state of 9.2.2 and
  rejoining at the revival. Vacuum Rabi splitting against g/κ/γ (strong
  versus weak coupling). Squeezed states: an ellipse whose axis ratio is the
  squeezing, quadrature noise traced under the ellipse (Figures 9.10–9.11);
  homodyne detection as rotating the measured quadrature.
- **10 Trapped ions.** The Paul trap's rotating saddle (3D, mathematical) with
  an ion's micromotion; the sideband spectrum (carrier and red/blue sidebands
  at ±ν, heights ∝ η²n̄) shrinking on the red side as sideband cooling pumps
  |n⟩ → |0⟩ on the ladder of Figure 10.6; a two-ion phase gate as a sequence
  on the internal-motional ladder.
- **11 BEC.** The de Broglie wavepackets overlapping as T falls toward T_c
  (the phase-space density criterion nλ³ = 2.612); evaporation with the RF
  knife cutting the hot tail of the distribution (Figure 11.3); the scattering
  length through a Feshbach resonance (Figure 11.9); interference of two
  condensates (11.6); the double well and the Bose–Hubbard lattice: number
  fluctuations per site and the momentum-space interference peaks fading as
  U₀/t crosses the superfluid → Mott transition (redrawn from the model, not
  from Nature 415's images), with the ν = 1, 2, 3 wedding-cake shells of
  Figure 11.14 in a harmonic trap.

Judged strictly: the Bloch sphere, Rabi flopping, the dressed-state crossing,
quantum jumps, STIRAP, the EIT window, Sisyphus, collapse and revival, the
sideband spectrum and the superfluid–Mott transition each show what the reader
would otherwise imagine (motion or variation), and are the survivors. Level
diagrams, apparatus schematics and pulse-free sketches stay faithful copies
unless a section's plan names a value add.

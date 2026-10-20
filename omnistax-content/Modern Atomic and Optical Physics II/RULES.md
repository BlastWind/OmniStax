# Modern Atomic and Optical Physics II: the book's rules

What is true of this book and of no other; the rules for every book are the root `RULES.md`, and this is the file its item 18 asks for. A chapter's decisions are in its `config.md`, the colour plan in `COLOR.md` beside this file (root 22), the findings of the full-book pass in `exploration.md`.

## Source

`source/lukin-amo2.pdf`, 293 pages of pdfTeX, the notes as last updated December 2016; `source/text-layer.txt` is its text layer with `<<<PAGE n>>>` markers. A PDF page is the printed page plus one. The text layer keeps the prose and scrambles the mathematics, so the PDF page image is the source of every equation, figure and table.

The pipeline, run from this folder: `python3 tools/pages.py` writes `toc.md` and `sections.json` (every section's number, title and PDF page range, read from the section starts). `python3 tools/convert.py 2.1` renders the section's pages to PNGs and crops its figures to `media/ch02/fig-2-K.png`. An agent then transcribes the PNGs into `ch02/2.1/source.md` following `tools/TRANSCRIBE.md`, LaTeX for every equation with its number, the figures as markers, footnotes and run-in headings kept. `python3 tools/checkprose.py 2.1` checks the transcribed prose word by word against the text layer and reports every difference; a section's `source.md` is done when the report is clean or every remaining line is a known difference (mathematics, ligatures, hyphenation).

## Structure

book → chapters (11) → sections N.M (45) → subsections N.M.K → run-in headings. One section, one page, never folded (root 11), not even 6.3. A chapter folder is `ch` plus the two-digit number (`ch01`…`ch11`). Chapter 1, titled "Preface" by the book, is a chapter: 1.1 Introduction is its first section, and the book has no `intro/` or `summary/` page. Chapters 3 to 11 print an opening before their first section; each is the chapter's `intro/` page (root 21), with no lead, objectives, summary or exercises. No chapter prints a summary.

The h2 blocks are the numbered subsections, titled verbatim with the book's number first (`<h2>1.2.1 States</h2>`), since the notes cite "section 1.3.5" and the app's outline shows the heading text unnumbered. A section with none, or whose only subsection spans it (2.1), takes its run-in headings as h2s after an opening block; inside a numbered subsection a run-in heading is an h3. Nothing is invented where the book prints no heading.

## Apparatus

Equations are numbered (N.K) chapter-wide and keep their numbers in the text, each as `<div class="equation" id="eq-N-K">$$… \tag{N.K}$$</div>`; an equation the prose cites is an anchor the citation links to (`N.M-eq-N-K`). Under-braces naming a term are kept as `\underbrace`. Examples are titled subsections or run-in headings ("Example: the two-level atom") holding a derivation, and stay in the text. Remarks are subsections. Footnotes are numbered per chapter and kept under their numbers as `footnotes` rows of kind `book` (id `footnote-N`), each named by its marker where the book sets the mark; a misprint gets a `correction` row with its marker right after it, the words kept as printed. References to other books and papers stay in the prose as printed, unlinked. "See homework problem 5" and "see problem set 3" refer to the Harvard course and are kept verbatim.

The notes misnumber some citations (Chapter 5's "Figure 7.3" and "Figure 9.3", 9.2's "Eq. (11.6)"). The words stay as printed; the link goes to the figure or equation meant, and the section's `plan.md` lists each one. The notes' own spellings ("exercize", "Schroedinger") are kept.

The book prints no objectives, summaries, key-equation lists or glossary, so `objectives` and `summary_html` stay empty and nothing is generated for them unless the chapter's config says so. A concept's glossary words are the terms the book sets in quotation marks at first use ("dressed states", "optical Bloch equations"); the span that introduces it is that first use.

The formulas list is called **Equations**.

## Licence and attribution

The notes carry no licence and no copyright notice; they are unpublished, and this book is local only: its folder is gitignored and nothing in it is committed or deployed. Permission was requested from the authors on 2026-10-11; until it is granted the book stays off `main`'s content and off the public site. The footer credits Mikhail D. Lukin for the lectures and Lilian Childress for taking and typing the notes, as `book.json` says. Figures 7.3, 7.6, 11.12 and 11.15 reproduce published experimental data (the last two say "without permission"), and 10.1, 10.2 and 10.7 are raster images of unstated origin: none of them is copied into `media/` or shown as an original; the idea is redrawn from the model with the paper named in the caption, or left out and named in `notes`.

MIT 8.422 problems (`source/mit-8422/hw1.pdf`–`hw10.pdf`, Ketterle, Spring 2013, MIT OpenCourseWare) are CC BY-NC-SA 4.0. An exercise taken from one names the source in `origin` (the `mit-8422` row of `book.json`'s `exercise_sources`), its number as MIT prints it in `source_number` ("Problem Set 3, Problem 2"), `hwN.K` in `source_id`, and in `changes` one plain sentence saying what was altered (notation restated, a part left out); the card shows the credit, the licence and the changes.

## Types

Twenty-nine in `book.json`, in scheme order: time, frequency, coupling, rate, energy, amplitude, population, coherence, state, electric field, dipole, susceptibility, intensity, phase, quadrature, momentum, velocity, force, friction, diffusion, temperature, length, wavevector, magnetic field, magnetic moment, angular momentum, density, volume, mass. `COLOR.md` says why each is a type and what its variants are; the three that carry the book are frequency (ω, ν and the detunings δ, ∆), coupling (Ω, g) and rate (γ, κ), kept apart because every approximation in the book compares them.

Untyped and in ink: constants of nature whose kind nothing else shares (ℏ, k_B, ε₀, e); counts and labels (quantum numbers, photon number n and n̄, atom number N, level labels); ratios (the Lamb–Dicke η, g-factors, Clebsch–Gordan coefficients, g⁽²⁾, the saturation parameter, phase-space density, the filling factor); operators that are neither an observable of a type nor a state (σ_ij, jump operators ĉ_k, the Liouvillian). A constant that is a value of a type wears it: c a velocity, a_B a length, μ_B a magnetic moment, R∞ an energy.

A symbol takes its type from its variables row, which links the concept it names (root 7 and 19). ν is a frequency both as the laser (Chapter 2) and as the trap (Chapter 10), with a meaning per section; η is a friction coefficient in Chapter 8 and an untyped ratio in Chapter 10; t is time everywhere except the Bose–Hubbard hopping of 11.8, a coupling. Each is a `redefines` row where the chapter reuses it.

## Exercise kinds

Two, declared in `book.json`, used only as the chapter's config allows. `exercise`: the two invitations printed in the reading (1.3.1, 2.1.1), inline as Try Its whose reveal is the result the book states. `problem`: an MIT 8.422 problem, in the Exercises document with the section `exploration.md` maps it to (root 12), its prompt restated in Lukin's notation (MIT's Ω is twice Lukin's; MIT's Γ is Lukin's γ) and otherwise kept in MIT's words, every alteration named in `changes` and the restated prompt wearing the AI mark there (Chen, 2026-10-11). No problem has a key: a "show that" or derivation problem carries an AI-marked solution (root 13); a numerical problem or part is held and named in `exercise_notes` unless the config says otherwise. Problems with no matching section (hw2.3, hw3.4, hw6.2) are not used.

## Figures

Figures and tables are numbered chapter-wide as the book prints them. Most figures are vector sketches of the theory's curves and level schemes, so the default for a curve or a level scheme the text derives is an interactive figure with the book's numbers, and for an apparatus schematic a faithful copy. A figure the book never draws but the text derives (the Breit–Rabi curves, a damped Rabi oscillation) is a Sim.

Flat or 3D (root 24.8, 28), settled for this book's borderline groups:
- **The Bloch sphere** is 3D, mathematical: the state is a direction, the drive vector another, and precession is motion about it; free orbit, no ground, populations and phases on a flat strip beneath.
- **Level diagrams** are 2D: energy is the one axis and horizontal position means nothing. Populations are drawn on the levels (bar or filled disc), transitions as arrows; a laser's arrow is symbolic, a decay's squiggle is symbolic, and population flowing between levels is kinematic.
- **Potentials** (light-shift hills, traps, double wells, lattices, scattering potentials) are 2D curves of energy against position, the atom a moving dot on them. A lattice is 3D only where a section draws a 2D lattice as a surface and its plan argues it.
- **Phase space** (coherent, squeezed and cat states) is 2D, the quadrature plane with the state's distribution shaded on one scale with its legend; the cat state's Wigner function, whose negative fringes are the lesson, is the one candidate for a 3D surface, argued in its plan.
- **Apparatus** whose arrangement in space is the explanation (the MOT's six beams and coils, the Paul trap's electrodes and rotating saddle) is 3D, physical for the hardware and mathematical for the saddle potential; other schematics (beamsplitters, cavities, interferometers, the pump–probe set-up) are 2D faithful copies.
- **Time plots** (pulse sequences, Rabi oscillations, collapse and revival) are 2D, with a transport where the idea has a clock.

Experimental figures are never copied (see Licence); a figure recomputed from the model says what it computes in its caption. An atom drawn without a named element is ink, and one with a name (Na, Rb, Ne, an ion) takes `F.el`. Nothing in the book has a real colour except the sodium D lines; `COLOR.md` says what is a fact.

## Files

The root layout, plus `toc.md`, `sections.json`, `COLOR.md` and `tools/` (`pages.py`, `convert.py`, `TRANSCRIBE.md`, `checkprose.py`). Figure crops are `media/chNN/fig-N-K.png`; the rendered page PNGs are working files and are not served.

## Template sections

`ch01/1.3` is the template for a section with figures, an inline Try It, referents and numbered equations; `ch01/1.2` for a text-only section with numbered equations.

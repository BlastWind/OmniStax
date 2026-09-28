# Exploration: College Physics 2e, Chapter 34 Frontiers of Physics

Read by the prep agent on 2026-09-28, before the chapter's seven section pages
were built in parallel. The book's own rules are in the folder above; this file
records what the chapter's eight modules hold, what is new in them, and how the
chapter should look when it is built.

## Why this chapter

The book's last chapter turns from what is known to what is being asked. It
reads the universe on the largest scale with the tools of the smallest: the red
shift and the background radiation say the universe began hot and dense, and
the unification of forces from Chapter 33 names its first instants. General
relativity bends light and closes black holes; dark matter outweighs everything
we see; chaos, complexity and superconductors show frontiers on the human scale;
and the chapter ends with a list of questions rather than answers. It is almost
all qualitative, with three formulas: $v = H_{0}d$, $R_{\text{S}} = 2GM/c^{2}$
and $\rho_{\text{c}} \approx 10^{-26}\;\text{kg/m}^{3}$.

## Chapter 34 modules

Counts are of the numbered figures of the narrative, the numbered tables, the
examples and the exercises by kind as the CNXML prints them, before any move.

| Section | Module | Numbered figures | Tables | Examples | AP | Conceptual | Problems (keyed) | Glossary | Objectives |
|---|---|---|---|---|---|---|---|---|---|
| intro Introduction to Frontiers of Physics | m42683 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | none |
| 34.1 Cosmology and Particle Physics | m42686 | 8 (+ 34.26 in a problem) | 0 | 0 | 0 | 11 | 21 (10) | 11 | 2 |
| 34.2 General Relativity and Quantum Gravity | m42689 | 8 | 0 | 0 | 0 | 6 | 4 (2) | 10 | 3 |
| 34.3 Superstrings | m42691 | 0 | 0 | 0 | 0 | 0 | 1 (1) | 1 | 2 |
| 34.4 Dark Matter and Closure | m42692 | 3 | 0 | 0 | 0 | 4 | 4 (2) | 12 | 2 |
| 34.5 Complexity and Chaos | m42694 | 2 | 0 | 0 | 0 | 2 | 0 | 2 | 2 |
| 34.6 High-temperature Superconductors | m42696 | 3 | 0 | 0 | 0 | 3 | 2 (2) | 2 | 2 |
| 34.7 Some Questions We Know to Ask | m42704 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 3 |

Twenty-six numbered figures, no table, no worked example, no AP item and no
Check Your Understanding box (so no `data-place` host). 28 conceptual questions,
none keyed; 32 problems, 17 keyed. The collection goes on after 34.7 with four
appendix modules (m42699 Atomic Masses, m42702 Selected Radioactive Isotopes,
m42720 Useful Information, m42709 Glossary of Key Symbols and Notation): these
are back matter, not a closing summary, and the book prints no summary of its own
(book `RULES.md` § Structure), so root rule 21 makes no `summary/` page; the
appendices are candidates for the constants sheet the book's rules want, not
pages of this chapter.

## Figure numbers

Checked against openstax.org: 34.1 runs Figures 34.2 to 34.9, and the parallax
drawing inside the Problems & Exercises is numbered **Figure 34.26** (unlike the
unnumbered exercise images of earlier chapters). Bundle names are
`Figure_35_0S_0N…jpg` (the first edition's chapter 35), no spaces; several have
unused twins (`_02_01` beside `_02_01a`, the `-68f2`, `-3e67`, `-cd54`, `-54ad`
suffixes); use the name the CNXML gives, listed here.

| Section | Figures |
|---|---|
| intro | 34.1 galaxy ejecting jets (photo, splash, kept; `Figure_35_00_01a_D.jpg`, no width) |
| 34.1 | 34.2 galaxy clusters (photo, 300, `_01_01a`); 34.3 Milky Way (a) side view with dimensions, (b) above, (c) from Earth (drawing + photos, 250, `_01_02a`); 34.4 Andromeda and the most distant galaxy (photos, 250, `_01_03a`); 34.5 red shift against distance (graph, 250, `_01_04a`); 34.6 galaxies flying apart around MW (sketch, 200, `_01_05a`); 34.7 (a) Big Bang, (b) CMBR spectrum (art + graph, 275, `_01_06a`); 34.8 WMAP sky map (photo, 250, `_01_07a`); 34.9 evolution of the universe on a log time bar (diagram, no width, `_01_08a-03a9`); 34.26 parallax cone (sketch, 225, `_01_09a`, inside `fs-id1169737812426`) |
| 34.2 | 34.10 elevator and flashlight (a)(b) (sketch, 250, `_02_01`); 34.11 starlight bent by the Sun (sketch, 400, `_02_02`); 34.12 (a) lensing paths, (b) lensed images (sketch + photo, 500, `_02_03`); 34.13 black hole and companion, accretion disk (art, 250, `_02_04`); 34.14 NGC 4261 core (photo, 350, `_02_05`); 34.15 LIGO control room (photo, 300, `_02_06`); 34.16 Stephen Hawking (photo, 300, `_02_07`); 34.17 pairs at the event horizon (art, 300, `_02_08`) |
| 34.4 | 34.18 (a) Doppler-shifted rotating galaxy, (b) rotation curve, (c) X-ray cluster image (sketch + graph + photo, 275, `_04_01`); 34.19 Hubble Space Telescope (photo, 275, `_04_03a`); 34.20 leaves on a stream (photo, 275, `_04_04a`) |
| 34.5 | 34.21 Mandelbrot-related image (250, `_05_01`); 34.22 Great Red Spot (photo, 250, `_05_02`) |
| 34.6 | 34.23 resistivity of mercury against temperature (graph, 250, `_06_01-a4ce`); 34.24 levitating magnet (photo, 250, `_06_02-4648`); 34.25 (a) three trials of one sample, (b) ceramic lattice (graph + drawing, 375, `_06_03-15a6`) |

## What is new

- Cosmology: galaxies and light years, look-back time, cosmological red shift,
  Hubble's law $v = H_{0}d$ with $H_{0} = 20\;\text{(km/s)/Mly}$, the CMBR at
  2.725 K, matter over antimatter, the wrinkles, the epochs (TOE, GUT,
  electroweak), spontaneous symmetry breaking and inflation.
- General relativity: equivalence of acceleration and gravity, light bent by
  the Sun, lensing, black holes, the event horizon and
  $R_{\text{S}} = 2GM/c^{2}$, neutron stars, quasars, gravitational waves,
  quantum gravity and black-hole radiation, the shortest time.
- Superstrings and the smallest length; dark matter, the flat rotation curve,
  critical density, open, closed and flat universes, MACHOs, neutrino
  oscillations, WIMPs; complexity and chaos; high-$T_{\text{c}}$
  superconductors; open questions by scale.
- No new type. New symbols: `H_0` (untyped), `R_S` (position, `\kRS`), `ρ_c`
  (density, `\krhoc`).

## Notes, boxes and links

Kept verbatim: Making Connections: Cosmology and Particle Physics (34.1). No
PhET or Link to Learning item. The introduction prints no Learning Objectives.
Cross-references to Chapters 28, 33 and to other sections are plain text.

## Exercises that belong to another section

Each moved item carries `source_section` and a note in both sections.

- `exer-87234` (Critical Thinking, keyed, two galaxies separating by Hubble's law) 34.6 → 34.1.
- `fs-id1169738012582` (keyed 960 rev/s, the spin of a neutron star formed in a supernova) 34.1 → 34.2, where neutron stars are introduced; its unkeyed follow-up `fs-id1169736815248` is left out in 34.1.

## Keyed and unkeyed

| Section | Problems kept (left out) | Conceptual (all open) |
|---|---|---|
| 34.1 | 10 after the moves (11) | 11 |
| 34.2 | 3 after the move (2: `fs-id1169738069541`, `fs-id1169738198524`) | 6 |
| 34.3 | 1 (0) | 0 |
| 34.4 | 2 (2: `fs-id1169737909875`, `fs-id1169738155048`) | 4 |
| 34.5 | 0 | 2 |
| 34.6 | 1 after the move (0) | 3 |
| 34.7 | 0 | 2 |

34.1 leaves out `fs-id1169737738450`, `fs-id1169737711876`, `fs-id1169737795538`, `fs-id1169738183096`, `fs-id1169737910677`, `fs-id1169738031850`, `fs-id1169737802496`, `fs-id1169738249075`, `fs-id1169736815248`, `fs-id1169738109995`, `fs-id1169737765008` (Construct Your Own Problem). 34.5 and 34.7 have no problem; their Exercises tab is conceptual questions only.

## Errata to carry as printed

- 34.1: "moving away from us at speed of 100,000 km/s" while the calculation uses 10,000 km/s; the summary writes $H_{0} = 20\;\text{km/s}\cdot\text{Mly}$ (a product) where the text has (km/s)/Mly, as do `fs-id1169738183096` and the key of `fs-id1169737820271`; the WMAP sentence cites Figure 34.7 in the CNXML (openstax.org prints 34.8, so link 34.8); "$200\;\mu\text{k}$" lowercase k; Figure 34.7's caption says "10 to 20 billion years" where the text says 13 to 15; glossary: electroweak, GUT and TOE epochs drop the "s", and the inflationary scenario's factor is printed $10^{-50}$; `fs-id1169737812426`'s key is printed with º (write °).
- 34.2: "Discuss black hole." objective; the second "(See Figure 34.13.)" is on the M87 disk, which fits Figure 34.14; the summary says gravitational waves are "not yet observed" while the text reports LIGO's 2015 detection; "Stephen Hawking (b. 1942)"; neutron stars limited to "about eight solar masses".
- 34.4: the speeds "should decrease as the square root of the distance" (inversely is meant); "Problems Exercises" header; WIMPs called "leptons".
- 34.6: prose dollar signs (`&#36;`); the summary's "as high as 250 K" against the text's 270 K; "Problem Exercises" header.
- 34.7: "Theorists would like it to be just barely closed" against 34.4's "just barely open".

## 3D, locked views (root rule 28)

- 34.3 the Milky Way, side view and view from above: physical 3D candidate, a
  disk of stars with bulge and halo seen through two snap-to-view buttons
  (side, above), orbit bounded between them; dimensions labelled. 34.1 decides;
  a flat pair of drawings is the fallback.
- 34.25(b) the ceramic lattice: physical 3D, `F.view3d` with `F.el` atoms, bounded
  orbit, no ground; 34.6 decides against a faithful copy.
- Open, closed and flat universes (34.4, a Sim): mathematical 3D, a sphere, a
  saddle and a plane each carrying a triangle whose angle sum is read out; free
  orbit. The strongest 3D case in the chapter.
- 34.12 lensing could lift into an Einstein ring on axis (mathematical); flat
  paths are the default.
- Everything else flat: graphs, timelines, the elevator, ray paths.

## BE INSPIRING (root rule 23)

This chapter is the one place the reader can hold the whole universe in a
slider. Each proposal is a Sim or a transformed Figure; the section's plan
decides.

- 34.1: an expanding lattice of galaxies (Figure 34.6) where a choice picks
  the home galaxy and every other one recedes at $v = H_{0}d$ from it, no
  center anywhere; Figure 34.5 as a live graph whose slope is $H_{0}$ and
  whose inverse is an age of the universe; the CMBR spectrum (34.7(b)) as a
  blackbody curve stretched by expansion, a slider on temperature from the
  3000 K of recombination down to 2.725 K; Figure 34.9 as a log-time bar with
  a pointer that reads the energy, temperature and which forces are one.
- 34.2: the elevator (34.10) with an acceleration slider and the beam's fall
  exaggerated with the true drop stated (root rule 28.4); light bending past a
  mass with the apparent position of the star (34.11); lensing (34.12); a
  mass slider on a logarithmic scale that sizes the event horizon from a
  mountain to a supermassive black hole, $R_{\text{S}} = 2GM/c^{2}$.
- 34.3: a powers-of-ten ruler from $10^{-35}$ m to $10^{26}$ m placing the
  string, the quark, the nucleus, the atom, the Earth and the observable
  universe.
- 34.4: the rotation curve (34.18(b)) with the luminous mass alone falling as
  $1/\sqrt{r}$ and a halo slider that flattens it; the curvature Sim above.
- 34.5: two double pendulums released a hair apart, drifting together and then
  apart (moving); the Mandelbrot set that zooms (34.21).
- 34.6: resistivity against temperature (34.23) with a temperature slider and
  $T_{\text{c}}$ as a dashed special value, liquid helium and nitrogen marked.

# Experiment log: Notes on Diffy Qs (Jiří Lebl)

Source: Jiří Lebl, *Notes on Diffy Qs: Differential Equations for
Engineers*, edition 6 (version 6.11, git 658bcae, 2026-07-12), dual
CC BY-NC-SA 4.0 / CC BY-SA 4.0, taken here under CC BY-SA 4.0. LaTeX
source: `source/diffyqs/`, a clone of github.com/jirilebl/diffyqs
(gitignored): an Introduction (0.1–0.3), Chapters 1–8, Appendix A (six
sections) and Appendix B (a table). No PDF. The table of contents with
labels is `toc.md`.

Workflow: the full-book pass of root rule 18 first, then chapters by the
prep / sections / chapter-pass split.

## Pass 1: the full-book pass (2026-10-19)

Prompted by: job 435c028b, the Notes on Diffy Qs full-book pass, and root
rule 18.

What the exploration found, in brief (`exploration.md` has the whole of
it). One `\section` is one section, labelled; 53 sections in Chapters
0–8 and six in Appendix A. No chapter introduction or summary, no
glossary, no photographs. Apparatus inline: section notes for the
instructor, defined terms as italic index entries (403 + 195), theorems
(48, rarely proved), examples (160, prose with no Solution heading),
remarks (3), boxed formulas (112), inline exercises (62, unkeyed), end
exercises (685) of which exactly the 101+ set is keyed (251), each answer
on the line after its exercise; footnotes (95), tables (9), citations to
an 11-book Further Reading. 130 figures: about 150 Genius plots (eight
surfaces, the Lorenz curve in 3D) and 42 xfig sketches. Calculus 8.1–8.5
and 17.1–17.4 cover 0.2–2.6 and 7.2 in part.

What was decided, in `RULES.md` and `COLOR.md`:
- book id `diffyqs`, licence CC BY-SA 4.0 of the dual pair, Jiří Lebl as
  author, publisher and copyright holder, `source_url` the book's home
  page;
- chapters `ch00`–`ch08` and `appA` (chapter id `A`); Appendix B a sheet;
  no intro or summary pages unless 0.1 becomes the book's intro;
- a section's `module` is its `\label`; `slug` waits for the HTML
  edition's naming to be confirmed;
- defined terms are `definition`, theorems `result`; section notes
  dropped; boxed formulas are forms and enter the formulas list,
  "Equations and formulas";
- fifteen types in scheme order (function, derivative, integral, point,
  eigenvalue, vector, matrix, vector field, curve, frequency, series,
  sequence, transform, error, region), Calculus's ids kept where the role
  is the same; variables, constants, indices, model parameters and
  operators in ink; a temperature field is a false-colour fact;
- two exercise kinds, `inline-exercise` and `exercise`; 101+ keyed by
  the book, the unkeyed rest by the chapter's config;
- every plot drawn live from the book's equation; apparatus sketches
  become scenes; surfaces u(x, t) built flat as motion first, steady
  states over a plate or disc and the Lorenz attractor in 3D;
- overlap with Calculus taken up by shared concept ids and links, never
  by folding or trimming Lebl's pages.

`book.json` carries the identity, the licence, the fifteen types with the
default colours from `npm run colours:default -- diffyqs`, the two kinds,
and empty `chapters`, `symbols`, `concepts` and `sheets`. `ost check
diffyqs` and `OMNISTAX_BOOKS=diffyqs npm run check:content`: 0 chapters,
27 checks, no errors.

`ch00/config.md` is the Chapter 0 config list, a draft awaiting Chen,
with eight open questions.

Left for the converter pass (running alongside): `tools/`, `toc.md`,
`modules.json`, `media/` and each section's `source.md`.


## Pass 2 (2026-10-19): Chapter 0, Introduction, had its chapter pass (`docs/prompts/briefs/final.md`) by one agent in one run after its three sections were built

The sections' "Wanted at chapter level" lists were applied. The `eq-gateway-arch` form of `catenary` now writes `\ky` in its `ktex`, as the text and the arch Sim do (`ost set diffyqs forms`, merged into `book.json` from `ch00/book-rows.json`); the Sim's readout writes `\ky` too. Two variables rows were added for the exercises' second derivatives, `0.3/y_dprime` and `0.3/x_dprime` (`derivative`; `ost meanings` shows every row of each across the book as the second derivative of the same letter, so neither redefines), and four anchors moved onto the displays where the symbols stand: y′ and x′ to `0.3-eq-system`, ∂²y/∂t² and ∂⁴y/∂x⁴ to `0.3-eq-beam`. 0.2's mention of Newton's law of cooling in `p#de-definition` wears the Chapter 1 concept's span as 0.3's mentions do, with no coverage row. `npm run colours:default -- diffyqs` was rerun under the merge lock (config 19) and wrote `book.json`'s `colours` for 15 types over 13 pages; the checker stayed clean.

Cross-section: no exercise is kept twice (0.2.1–0.2.14 and 0.2.101–0.2.106; 0.3.1–0.3.4 and 0.3.101–0.3.103), nothing was held; Figures 1 and 2 and equations (1)–(5) run in book order with no gap (there is no Figure 3: the source's `[3]` is `\pagebreak[3]`); every concept id resolves; every in-book link with a fragment and every Calculus link (3.2, 1.5, 1.3, 6.9, 14.3, 16.5) points at an id that exists, scripted over the built pages; 0.1's links to chapters not yet built name sections of the book and will resolve as those chapters land.

Reading pass (rule 17): two of 0.2's captions spoke to the reader about the controls ("drag C and watch", "Drag the point along the curve") and were trimmed to the subject; the maker was already listed. No leftover marker, stray dollar sign, hex colour, dummy cycle or unmarked referent was found; "demos" occurs only in the book's own list of its computer resources.

Conventions decided for the chapter, in `config.md`: item 5 corrected, since the Introduction is `\chapter*` and prints Figure 1, Figure 2 and equations (1)–(5) with no chapter part, which the pages keep and link by hand (the app's linker links only "Figure N.M"); item 17 extended, the six Further Reading footnotes of 0.1 keeping their citation keys (EP, BD, I, F, BM, T) as `number`, so the marker and the Notes list label each entry as the bibliography does and later citations link `/diffyqs/ch00/0.1/#0.1-fn-<key>`; item 19 marked done for Chapter 0. The Organisation diagram's "Introduction" node now links to 0.2, where the material Chapter 1 builds on begins, instead of to 0.1 itself; the prose's chapter references keep the chapter-to-first-section convention.

Checks: `ost check diffyqs` clean for the whole book; the chapter built, served and walked with Playwright in light and dark (no console or page errors, a canvas in every Sim, a transport only on 0.3's moving pendulum, every slider and choice changing its figure, readouts true at the defaults).


## Pass 3 (2026-10-19): Chapter 1, First-order equations, had its chapter pass (`docs/prompts/briefs/final.md`) by one agent in one run after its nine sections were built

The sections' "Wanted at chapter level" lists were applied, each decision recorded under that heading in its plan. Anchors: 71 variables rows of `ch01/chapter.json` now carry the qualified span that introduces the symbol (`ost set diffyqs variables`), and the 14 rows used only in the exercises (1.1's y″, dx/dt and r; 1.2's g; 1.3's and 1.7's x, dx/dt, x′; 1.4's P and dP/dt; 1.8's y′ and g) carry none; all 50 forms of the chapter's concepts carry theirs (`ost set diffyqs forms`, staged in `book-rows.json` and merged), the derivations' results anchored on the derivation that states them (`1.4-drv-integrating-factor`, `1.5-drv-bernoulli`, `1.5-drv-homogeneous`, `1.8-drv-exactness-test`, `1.8-drv-exact-factor-condition`, `1.8-drv-exact-factor`, `1.9-drv-transport`). The term "characteristics" moved from `method-of-characteristics` to `characteristic-curve`, which is what the word names in 1.9. `1.4/x`'s meaning now names the temperature of Exercise 1.4.10 and the grams of salt of 1.4.11–1.4.12 beside the tank's kilograms, one function role. `equilibrium-solution` was not given the symbol x 1.6 suggested: a concept's symbol is the sym of a variables row linked to it, and `1.6/x` names the dependent variable, which the equilibrium solution only uses (root rule 6). `drv-transport`'s `source` now names Example 1.9.1, since the app's derivation label reads "Example 1.9.1" correctly after `derivation.ts`'s regex was widened to N.M.k.

Footnotes, decided once for the chapter (`config.md` item 21): the book's `number` is its running number through the book. `diffyqssetup.sty` runs the counter through the book (`\counterwithout{footnote}{chapter}`) and prints it as a per-page symbol, so the sections' "1" per section and the suggested "∗" were both set aside; Chapter 0 prints no footnote, so Chapter 1's nine are 1–9 in book order (1.1: 1; 1.2: 2; 1.5: 3; 1.6: 4, 5; 1.7: 6; 1.8: 7, 8; 1.9: 9), seven of them reset (`ost set diffyqs footnotes`), and Chapter 2 continues from 10.

Cross-section: no exercise is kept twice (124 cards, 1.1.1–1.9.103, every `source_id` once) and nothing was held across sections; Figures 1.1–1.23 run in book order with the four folds (1.2 + 1.3 + 1.4, 1.13 + 1.14 + 1.15, 1.16 + 1.17, 1.20 + 1.21), Tables 1.1 and 1.2 and equations (1.1)–(1.6) likewise; every concept id resolves (`ost check`). Links, scripted over the built pages' ids: 1.5's three links to formula (1.4) pointed at the prep's `1.4-lei-defsol`, an id 1.4 never built, and now point at `1.4-eq-1-4`; the other in-book links with a fragment (1.4 → Theorem 1.2.1, 1.6 → 1.1's blow-up and Example 1.3.3, 1.8's solution → Example 1.3.1) and every Calculus link (3.2, 3.6, 3.7, 3.8, 5.3, 5.5, 8.4, 14.2, 14.3, 14.5, 16.3) resolve; 1.9's links to §4.8, chapter 3 and chapter 8 name pages not yet built. Every link into Chapter 1 from another chapter's page (0.1's sixteen, 2.1's one) is a page link that resolves.

Reading pass (rule 17): twelve caption sentences that spoke to the reader about the controls ("Drag the point.", "drag α to send the peak the other way", "are yours to set", "take h down the halvings and watch") were trimmed to the subject, as Chapter 0's pass did for 0.2, the maker already listed in every section; no leftover marker, stray dollar sign, hex colour, dummy cycle, unmarked referent or slider for a discrete state was found, the four moving figures (1.2 + 1.3 + 1.4, 1.10, 1.20 + 1.21, 1.23) are the plans', and plain "Figure 1.N" citations are linked by the app.

Checks: `ost check diffyqs` clean for the whole book at the pass's end (see `build-status.md` for what another chapter's in-flight merge raised meanwhile); `npm test` fails only "every book on disk passes every check" and "the only warnings a book on disk raises are…", both on Chapter 3's just-merged rows (`matrix`, `vector`, `transpose` symbols with no linked variables row; `ch03/chapter.json` x₁, x₂ "sets itself in ink"), none of Chapter 1; `astro check` reports one error, `src/lib/content/load.ts:275` (ts(2339), `concept` on a coverage summary type), an app error outside this chapter. The chapter built, served and walked with Playwright in light and dark: nine pages, 21 figures, no console or page error, every figure.sim with a canvas, transports only on the four moving figures, every slider and choice changing its figure; no fix was needed.

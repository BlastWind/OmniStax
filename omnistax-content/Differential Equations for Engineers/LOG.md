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


## Pass 4 (2026-10-19): Chapter 2, Higher order linear ODEs, had its chapter pass, after its six sections were built by six agents (2.4's finished by the pass after a spend limit cut its agent off before the last check)

Anchors from every section's "Wanted at chapter level": 97 forms and 106 variables rows, with `ref` yc/yp on 2.5's y_c, y_p and xtr/xsp on 2.6's x_tr, x_sp. Two symbols added for 2.5, `y_p_tilde_prime` and `y_p_tilde_dprime` (ỹ_p′, ỹ_p″ in `derivative`, like y_p′ and y_p″), merged and written in the page's w computation. The meanings of 2.2's α and β widened to the exercises, where they are real roots.

Footnotes take the book's running number (Chapter 1's convention): 10–13 for the four of 2.2, 2.3, 2.4, 2.6, where every section had written "1". The chapter COLOR.md's `derivative` line no longer lists C′(ω), which the 2.6 decision keeps in ink.

Checked: every in-book and Calculus link resolves, footnotes render 10–13, every Sim has a canvas, transports only on the six moving figures, every slider changes its figure, no console or page error in light or dark.


## Pass 5 (2026-10-19): (2026-10-19): Chapter 3, Systems of ODEs, had its chapter pass, after its nine sections were built by nine agents

Anchors from every section's "Wanted at chapter level": 142 forms and 244 variables rows (all 250 rows but the six 3.9 rows used only in its exercises). Meanings widened: 3.7's v⃗₂ and v⃗₃ (an ordinary eigenvector of Theorem 3.7.1 or a link of a chain), 3.9's a⃗ (also the unknown vector of a guess). Through `book-rows.json` and `ost merge diffyqs 3`: the glossary term "associated homogeneous equation" moved from `general-solution-of-a-nonhomogeneous-system` to `homogeneous-system`; the statement of `derivative-of-the-matrix-exponential` lost its last sentence, 3.9's commuting fact. No `ref` on the x₁, x₂, x₃ of 3.1 and 3.6 or the ξ₁, ξ₂ of 3.9 (each row names several referents or the general coordinates); no optional y₃, y₄ or v⃗ₖ₋₂ symbol.

Chapter COLOR.md: `region` added to the categories (3.2's parallelogram) and the referents of 3.8 (`column-1`, `column-2`) and 3.9 (`xi-1`, `xi-2`). Footnotes take the book's running number: 3.8's Moler–Van Loan is 14, the chapter's only one (config line 21); Chapter 4 starts at 15.

Checked: Figures 3.1–3.17 and Table 3.1 in book order with the four folds; every in-book and Calculus link from Chapter 3's pages and from 1.9 resolves against the built pages and Calculus's text.html (1.9's link to 8.1 waits on Chapter 8); every Sim has a canvas, transports only on the eleven moving figures, no console or page error in light or dark.


## Pass 6 (2026-10-19): Chapter 5 chapter pass (2026-10-19, `pass-ch05`)

Applied every chapter-level want of 5.1–5.3: 106 anchors on forms and variables rows; three `ktex` fixes in 5.1 (no bracket arguments on \klambda, \kc, \ky) and `eq-beam-frequencies` without ω_n; eight variables rows added (5.1 X′, X″, u_t, u_xx, dy/dx, c; 5.2 ∂⁴y/∂x⁴, ∂²y/∂t²). Footnotes numbered 24–27 by the book's running count; 25 kept as a note in Exercise 5.1.102's prompt. Cross-chapter links checked, the three pages checked in a browser in both themes, nothing to fix. Colour notes for the final recolour left in `ch05/build-status.md`.


## Pass 7 (2026-10-19): Chapter 4, Fourier series and PDEs, had its chapter pass, after its ten sections were built by ten agents

Anchors from every section's "Wanted at chapter level": 155 variables rows and 90 forms, `eq-wave-characteristic-coordinates` (on 1.9's `characteristic-coordinates`) at `4.8-change-variables`. New variables rows (16, each after `ost meanings`): 4.1/λ_1, λ_2, x_1_prime, x_2_prime, x_1_dprime, x_2_dprime; 4.2/S and 4.3/S (`series`, the partial sum S_N); 4.3/f_dprime; 4.4/x_prime; 4.6/u_1, u_2, X_prime; 4.7/X_dprime, λ, T_prime. New symbol `f_dprime` (\kfdprime): 4.3's plain f″ (text, Exercises 4.3.1–4.3.2, the term-by-term Sim's headline) now wears `derivative`; 4.2's S_N(t) now \kS_N(t).

Concept map: 4.10's chain mended (polar-coordinate-system no longer rests on dirichlet-problem, the geometric series no longer on the disc problem; the polar Laplacian rests on the Laplace operator, the disc problem on the Dirichlet problem, the Poisson kernel on the disc problem); the whole-book Hasse reduction then took the four other wanted edges out as implied. 86 concepts, 145 edges, 43 symbols merged; no cycle, no redundant edge.

Config: line 7 no longer names Example 4.7.1 (the book prints no name); line 21 records the footnotes: the book's running number, 15–23 in this chapter (4.1 15–17, 4.2 18, 4.8 19–20, 4.9 21–22, 4.10 23), read against the nine `\footnote`s of `ch-fourier-and-pde.tex`; Chapter 5 starts at 24.

Checked: every in-book and Calculus link from Chapter 4's pages and from 1.9 and 5.3 resolves against the built pages and Calculus's text.html (43 links); every Sim has a canvas, transports only on the six moving figures, no console or page error in light or dark; `ost check diffyqs` no errors, `npm test` 936 pass, `astro check` 0 errors.


## Pass 8 (2026-10-19): Chapter 7, Power-series methods, had its chapter pass, after its three sections were built by three agents

Anchors from every section's "Wanted at chapter level": 46 forms and 29 variables rows. Six derivative rows added: 7.1's f′ and f″ (the Taylor series (7.2) now writes them with their macros), 7.2's y₁′ and y₂′, 7.3's y₁′ and y₁″. 7.1's plan corrected to the merged form id `eq-power-series-term-by-term-derivative`. No concept, edge or glossary change.

Chapter COLOR.md: `error` added (Figure 7.2's truncation error). Footnotes take the book's running number: 40 (7.1), 41–42 (7.2), 43–45 (7.3), config line 21; Chapter 8 starts at 46. The near hues of `function` and `series` in the default palette, drawn together on every Chapter 7 figure, are left to the final `colours:default`.

Checked: Figures 7.1–7.4 in book order; every in-book and Calculus link from Chapter 7's pages resolves; every Sim has a canvas, no transports (all figures still), no console or page error in light or dark.


## Pass 9 (2026-10-19): Chapter 6, The Laplace transform, had its chapter pass, after its five sections were built by five agents

Anchors from every section's "Wanted at chapter level": 68 forms and 66 variables rows (6.2's F′ and 6.3's x‴ left without, written only in exercises); no rows added, no concept, edge or glossary change. Footnotes take the book's running number: 28–30 (6.1), 31–32 (6.3), 33–37 (6.4), 38–39 (6.5), twelve as in `ch-laplace.tex` (config line 21); Chapter 7 starts at 40.

Links: 6.1 built Table 6.1 as `tab-6-1`, so 6.3's two links and its correction note on Example 6.3.3's "Table 6.2" now open `/diffyqs/ch06/6.1/#6.1-tab-6-1`. 6.2's link to Example 6.1.4 and 6.5's to (6.1) in 6.2 resolve; the Appendix B sheet link builds.

Checked: every in-book link from Chapter 6's pages resolves against the built pages; every Sim has a canvas, transports only on the four moving figures, no console or page error in light or dark. The `transform` type shows in ink until the book's final `colours:default`.


## Pass 10 (2026-10-19): Appendix A, Linear algebra, had its chapter pass (`docs/prompts/briefs/final.md`) by one agent in one run after its six sections were built

The sections' "Wanted at chapter level" lists were applied, each decision recorded under that heading in its plan. Anchors: 53 variables rows of `appA/chapter.json` and 65 forms. Two variables rows were added after `ost meanings`: A.5/f and A.5/g, the two functions of the inner product of functions. One edge was fixed through `appA/book-rows.json` and `ost merge diffyqs A`: `triangular-matrix` rests on `square-matrix`, not `diagonal-matrix`; the whole-book Hasse check finds no cycle and no redundant edge. A.4's Referents line in `COLOR.md` was corrected. Chapter 4's 4.1 links its finite-dimensional Fredholm alternative to A.4.

Footnotes: the book's running numbers 56–64 (A.1 56–60, A.2 61–62, A.3 63, A.5 64), confirmed against `ap-linear-algebra.tex` after Chapter 8's 55 (`config.md` 22).

Cross-section: every in-book and Calculus link of the six pages resolves (30 checked); the "Figure A.k" hand links stay, now that the app links them too.

Checks: `ost check diffyqs` clean for the whole book; `astro check` 0 errors; the appendix built, served and walked with Playwright in light and dark (no console or page errors, a canvas in every Sim, no transport on these still figures, every control changes its figure).

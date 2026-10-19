# Notes on Diffy Qs: the book's rules

What is true of this book and of no other; the rules for every book are the root `RULES.md`, and this is the file its item 18 asks for. A chapter's decisions are in its `config.md`, the book's colour plan in `COLOR.md` beside this file (root rule 22). `exploration.md` has the counts and the reasons.

## Source

Jiří Lebl, *Notes on Diffy Qs: Differential Equations for Engineers*, edition 6 (version 6.11, git 658bcae, 2026-07-12), from the LaTeX at `source/diffyqs/` in this folder (a clone of github.com/jirilebl/diffyqs, gitignored, read-only). `diffyqs.tex` inputs one file per chapter, macros are in `diffyqssetup.sty`, figures in `figures/` (Genius plots as `.pdf`, xfig sketches as `.pdf_t` with their `.fig`). `%mbx` comments drive the author's PreTeXt conversion and mark what the HTML edition keeps or drops; the converter honours `%mbxSTARTIGNORE`/`%mbxENDIGNORE` where they hide print-only matter.

The tools in `tools/` convert one `\section` to `source.md`; a section's `module` is its `\label` (`introde:section`, `sec:mv`), and `toc.md` and `modules.json` map every section to its file and label. An exercise's `source_id` is its printed number, `1.2.101`.

## Structure

book → chapters → sections (N.M) → subsections (one level, `<h2>`, the book's own) → examples. One `\section`, one page; sections are never folded. No chapter prints an introduction or a summary, and the book prints neither: there are no `intro/` or `summary/` pages, unless Chen makes 0.1 the book's `intro/` (`ch00/config.md`).

| Id | Chapter | File |
|---|---|---|
| ch00 | Introduction (0.1–0.3) | ch-intro.tex |
| ch01 | First-order equations | ch-first-order-ode.tex |
| ch02 | Higher-order linear ODEs | ch-higher-order-ode.tex |
| ch03 | Systems of ODEs | ch-systems.tex |
| ch04 | Fourier series and PDEs | ch-fourier-and-pde.tex |
| ch05 | More on eigenvalue problems | ch-eigenvalue-probs.tex |
| ch06 | The Laplace transform | ch-laplace.tex |
| ch07 | Power-series methods | ch-power-ser.tex |
| ch08 | Nonlinear systems | ch-nonlin-systems.tex |
| appA | Linear algebra (A.1–A.6) | ap-linear-algebra.tex |

The Introduction is `\chapter*` but numbers its sections 0.1–0.3, so it is chapter `0`. Appendix A is a chapter of six sections with exercises, built like the others in `appA/`, its chapter id `A`, listed after Chapter 8. Appendix B (Table of Laplace Transforms) is a sheet, `sheets/laplace-table.json`, kind `table`, `"generated_by": "tool"`. Further Reading is not built; a `\cite` keeps the book's bracket (\[EP\]) and the bibliography entry it names goes in a footnote of the section the first time it is cited. A chapter's book-level rows are staged in its `book-rows.json` and merged with `ost merge diffyqs N`.

## Apparatus

- **Section notes** (`\sectionnotes`: lecture counts, "can safely be skipped", Edwards–Penney and Boyce–DiPrima section numbers) are instructor apparatus and are dropped, named in `notes`.
- A **defined term** is the italic `\emph{\myindex{…}}` (or `\emph{…}\index{…}`) in running prose; it stays in the prose, its concept a `definition` whose `terms` are the italicised words. There is no glossary.
- A **Theorem** stays in the text as `<div class="note">` with the eyebrow "Theorem N.M.k" and the book's bracketed name; its concept is a `result`. The book states no axioms; a physical law it uses (Newton's second law, Hooke's law, Newton's law of cooling) is an `axiom` only where the section states it as given, else a cross-book link. The informal justification after a theorem stays in the prose; a proof written as equations is a derivation (root rule 29).
- An **Example** is Example N.M.k, a run of prose with no Solution heading; it stays in the text whole, with the book's name for it where given.
- A **Remark** (three) is a note with the eyebrow "Remark N.M.k".
- A **boxed formula** (`\mybxbg`, `\mybxsm`) is the book marking a result to remember: it is a form of its concept and enters the formulas list; the text keeps it in place, framed.
- A **footnote** is a book footnote (the `footnotes` table, the book's mark), kept with its Wikipedia link.
- **Tables** stay in the text as `div.book-table` with the book's number.
- **Computer resources** (SAGE demos, WeBWorK, IODE, Genius, YouTube) are named only in 0.1; a link elsewhere is kept as the book prints it.

## Licence and attribution

The book is dual-licensed CC BY-NC-SA 4.0 and CC BY-SA 4.0 (`LICENSE.md`): a derivative must carry at least one and be "prominently marked as such". OmniStax takes **CC BY-SA 4.0**, `license_url` https://creativecommons.org/licenses/by-sa/4.0/. Copyright 2008–2026 Jiří Lebl, who publishes it himself; `publisher` and `copyright` are his name and `source_url` the book's home page, https://www.jirka.org/diffyqs/. The footer generates the attribution from `book.json`: the title, Jiří Lebl, the home page and CC BY-SA 4.0, with the page named as adapted, which is the prominent mark the licence asks for. Adapted pages are shared under CC BY-SA 4.0.

## Types

Fifteen types in `book.json`, in scheme order: function, derivative, integral, point, eigenvalue, vector, matrix, vector field, curve, frequency, series, sequence, transform, error, region. The ids shared with Calculus mean the same thing in both books (function, derivative, integral, point, vector, matrix, vector-field, curve, series, sequence, error, region), so a linked concept wears one role across them. `COLOR.md` says why each is there and what its variants are.

A type is a role, not a letter: x⃗(t) is a `vector` where the section treats a system's solution as one vector, and its components x₁(t), x₂(t) are `function`s; y′ is a `derivative`; a characteristic root r and an eigenvalue λ are one `eigenvalue`. Untyped and in ink: an independent variable (t, x, s in the Laplace chapter, θ and r of polar coordinates), an arbitrary constant (C, C₁, A, B), an index or count (n, k as a mode number), a parameter of a model (m, c, k of a spring, k of the heat equation, L, a, the coefficients p and q of an equation unless a section draws them as functions), and an operator (L, d/dx, Δ, ℒ written as a symbol), which is notation on every line and is never drawn.

## Formulas list

The chapter's equations table is printed as **Equations and formulas**: the book's boxed formulas plus the forms of every theorem and the named equations the section states (the heat equation, the wave equation, Laplace's equation).

## Exercise kinds

Two, declared in `book.json`, both labelled "Exercise" as the book prints them. `inline-exercise`: an exercise in the running text, kept inline as a Try It at its place. `exercise`: an end-of-section exercise, in the Exercises document. The book keys exactly the end exercises numbered 101 and up (251 of 685), each with its `\exsol` on the next line; no inline exercise and no exercise below 101 is keyed. A keyed exercise carries the book's answer and no generated approach. An unkeyed exercise follows the chapter's `config.md` (proposed default: kept, with an AI-marked approach for a proof, a "show", "verify" or "explain" question, left out and named in `exercise_notes` where the answer would have to be computed). A `tasks` list is one card with parts a), b), …, and the book's answer keeps its parts. No answer is ever generated.

## Figures

Figures and tables are numbered chapter-wide (Figure 4.12, Figure A.7, Figure 0.2); the book has no photographs. Every plot is a computation the reader can run, so it is the book's sketch figure under root rule 14: drawn live, the book's equation, initial conditions and window its defaults, and the original kept behind the toggle. An xfig sketch of apparatus (tanks, carts, pendulum, RLC circuit, beam, strings, wire) becomes the scene its section's equation drives, the graph below a horizontal scene and beside a vertical one; a dependency diagram or the modelling cycle (0.1, 0.2) is a faithful copy. Images are copied to `media/<chapter>/` as SVG or PNG from the book's PDFs under the book's file names.

The borderline groups (root rules 24 and 28):

- **Solution curves and slope fields** are 2D, still unless the section's idea is the flow of time: a solution traced from a dropped initial point is a moving tier (the trace is kinematic), a family of curves under a parameter slider is still.
- **Phase portraits** (3.5, 8.1–8.4) are 2D with trajectories that flow (moving tier); arrows on a portrait are the vector field (symbolic) and the moving dots are the state (kinematic).
- **Oscillators** (2.4, 2.6, 3.6, 8.3) are a moving scene with its graph; the damping and forcing sliders change the idea, the transport runs time.
- **Fourier partial sums** are still under an N slider; a choice of function (sawtooth, square wave, triangle) is a segmented control.
- **Surfaces u(x, t)** (1.9, 4.6, 4.7, 5.3) are built flat first: the string or wire moving in time is the lesson, and the u(x, t) surface is the history of that motion; the flat moving figure replaces the surface, and the surface is added beside it only where the plan argues the shape over the (x, t) plane teaches something the motion does not (the characteristic lines of 1.9, d'Alembert's two waves). A steady state u(x, y) over a plate or a disc (4.9, 4.10) is mathematical 3D, a surface over its region with the boundary data the reader sets, beside a flat heat map of the same.
- **The Lorenz attractor** (8.5) is mathematical 3D, a curve drawn as it runs, free orbit, spin offered.
- **Linear algebra arrows** (A.1, A.5) are 2D.

## Files

The root layout, plus `sheets/` (the Laplace table), `COLOR.md`, `modules.json`, `toc.md` and `tools/`. The appendix chapter is `appA/`.

## Template sections

None yet: `ch00/0.2` becomes the template for prose with defined terms, examples, inline exercises and keyed exercises once built, and `ch01/1.2` for slope fields and theorems.

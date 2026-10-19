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

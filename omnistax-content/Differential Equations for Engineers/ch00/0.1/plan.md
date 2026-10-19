# Plan: 0.1 Notes about these notes (notes:section)

Source: `source.md` from `tools/convert.py 0`. Status: built 2026-10-19 straight through (config 2); text and `section.json` reviewed against the source and the rules, `ost check diffyqs --section 0.1` clean, built and checked in the browser in light and dark on 2026-10-19 (sec-0.1 task). The template is 0.2 (its "Conventions for later sections").

Config 3 decides the page: a section page like the others, the book's prose kept as printed (the opening paragraph, Organization, Typical courses, Computer resources, Acknowledgments), the Organisation diagram a faithful copy whose chapter names link to the chapters, no exercises, no figures beyond the diagram, no lead result. The section notes ("A section for the instructor.") are dropped and named in `notes` (config 4).

## Sub-concepts (page headers)

The opening paragraph stands before the first header as `p#origins` (the section's own introduction, root rule 21.3, as Calculus 8.1 does). Then the book's own subsections, kept: `organization` **Organization** (`p#dependence`, the diagram, `p#skippable`); `typical-courses` **Typical courses** (`p#uiuc-courses`, `p#math-286`, `p#math-285-intro`, `p#math-285`, `p#no-systems-pdes`, `p#core-sections`, `p#lecture-count`, `p#two-semesters`, `p#combined-course-intro`, `p#combined-course`, `p#topics`); `computer-resources` **Computer resources** (`p#website`, the four-item list, `p#iode`, `p#latex-source`); `acknowledgments` **Acknowledgments** (`p#acknowledgments-text`). No section summary (the book prints none).

## Concepts

The section introduces none (`ost rows diffyqs concepts --where section=0.1` is empty), so `coverage` carries only `uses` rows: "differential equations" in `p#origins` names `differential-equation`; "ODEs" and "PDEs" in `p#uiuc-courses`, `p#core-sections`, `p#no-systems-pdes` and `p#combined-course` name `ordinary-differential-equation` and `partial-differential-equation` (all three of 0.2). The Laplace transform, power series, Sturm–Liouville, nonlinear systems and linear algebra are chapter names here and their concepts are unbuilt, so those words stay plain. No variables, no forms, no referents.

## Citations and footnotes (config 17)

The six citations [EP], [BD], [I], [F], [BM], [T] keep the book's bracket in the prose, each followed by a book footnote (`footnotes`, kind `book`, no number, ids `EP`, `BD`, `I`, `F`, `BM`, `T`) carrying the Further Reading entry word for word, with the book's Google Books or publisher link. Later sections that cite a work link here (`/diffyqs/ch00/0.1/#0.1-fn-EP` and so on) rather than repeat the entry. "See the Further Reading chapter at the end of the book." stays as printed, unlinked, since Further Reading is not built (book `RULES.md`).

## Links

A chapter reference links to the first section of the chapter (`/diffyqs/ch01/1.1/`, …, `/diffyqs/appA/A.1/` for the appendix, `/diffyqs/ch00/0.1/` for the Introduction), a section reference to the section (`/diffyqs/ch03/3.2/`, `/diffyqs/ch06/6.5/`, `/diffyqs/ch00/0.2/`). The universities, the book's website, IODE, Genius and GitHub keep the book's own external links. The Wikipedia-style links of the book's footnotes: none in this section.

## Figures

- `fig-chapter-diagram` · the unnumbered Organisation diagram (`chapterdiagram.svg`) · serves no concept · value add: standardisation only, so a faithful copy (config 3): the same ten names at the book's positions, the same eight solid and three dotted arrows (Introduction → 1 → 2 → 3, 4, 6, 7; 3 → 8; 4 → 5; dotted A → 3, 3 → 4, 4 → 6), drawn as inline SVG in `text.html` with the chapter names as links to the chapters, which neither an `<img>` nor a figlib drawing can carry (figlib has no link primitive; root rule 14 and `interactive-figures.md` allow the faithful copy as a still of the book's own layout) · arrows: symbolic (dependence), the dotted ones the book's loose dependences · still · no controls · row kind `figure`, no number, eyebrow "Figure", class `sim` with the SVG in a `div.stage` so the Original button swaps the book's own image in, `originals` the copied SVG, no figures.js block (none is needed; the build serves an empty module) · 2D. Ink and currentColor only, so both themes read it; no `<marker>` ids (the build qualifies every id and would break a `url(#…)`), arrowheads drawn as paths. The names are underlined as the prose links are.

No Sims (config 3: no figures beyond the diagram), no derivations, no exercises (the book sets none in 0.1).

## Wanted at chapter level

- Nothing: 0.1 has no variables, forms, concepts or referents, and introduces no glossary word.
- App note (not a chapter row): the shell's link handler (`Shell.svelte` `onLink`) reads `link.target` and `link.origin`, which on an SVG `<a>` are an `SVGAnimatedString` and `undefined`, so a chapter name in the diagram opens its page by a full navigation rather than as a tab; reading `getAttribute('href')` through `new URL` would make SVG links open like the prose's.

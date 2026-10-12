# Experiment log: Calculus (OpenStax Calculus Volumes 1, 2 and 3)

Source: OpenStax Calculus Volumes 1, 2 and 3, CC BY-NC-SA 4.0, copyright
Rice University, senior contributing authors Gilbert Strang and Edwin
“Jed” Herman. CNXML source: `source/osbooks-calculus-bundle/`, a clone of
github.com/openstax/osbooks-calculus-bundle (gitignored), three
collections over one module folder, merged into one book: a Preface, 17
chapters of 110 sections with an introduction each, and 3 appendices. No
PDF. The table of contents with module ids is `toc.md`.

Workflow: the full-book pass of root rule 18 first, then chapters by the
prep / sections / chapter-pass split.

## Pass 1: the full-book pass (2026-10-12)

Prompted by: Chen asking for "Calculus volume 1 to 3 openstax, as one
omnibook", and root rule 18.

What the exploration found, in brief (`exploration.md` has the whole of
it). The three volumes overlap by module id (Volume 2's Chapters 1–2 are
Volume 1's 5–6, Volume 3's Chapter 1 is Volume 2's 7, the appendices are
shared), so the merged book takes each module once and numbers chapters
1–17. Cross-references are number-less links and renumber for free; the
prose names another volume once ("Section 6.6 of Volume 1", in 15.6). One
module is one section and everything sits inside it: objectives,
definitions (186), theorems (203), rules (40), proofs (75),
problem-solving strategies (36), examples (785) with their solutions,
checkpoints (641, 633 keyed, most with a hint), Media links (42), Student
Projects (21, unkeyed question lists), Key Equations (75 sections), Key
Concepts, Section Exercises (5870) and the glossary (508); Chapter Review
Exercises (446) sit in each chapter's last module and are the only thing
aggregated. Exercise numbers run through the chapter and the key is
exactly the odd-numbered ones (2872 + 220). 847 numbered figures, about
1140 images by alt text are graphs, about 200 are solids, surfaces and
vectors in space, about 45 are photographs; every image is a JPEG.

What was decided, in `RULES.md` and `COLOR.md`:
- book id `calculus`, title "Calculus", Volume 1's Preface as the book's
  `intro/` page, each chapter's introduction its `intro/` page;
  Appendices A and B are sheets, C a page later;
- `openstax` is `https://openstax.org/books/` and each slug carries its
  home volume, a shared module's home being the earliest volume;
- definitions are `definition`, theorems and rules `result`, strategies
  `skill`; the book states no axioms;
- nine types in scheme order (function, derivative, integral, limit,
  sequence, series, vector, vector field, region); variables, indices,
  constants, ε and δ, coordinates and application parameters stay in ink;
  a type is a role, so a symbol takes the type of the concept its
  variables row names in that section;
- the formulas list is named "Theorems and formulas";
- three exercise kinds: `checkpoint` (inline), `exercise` and
  `review-exercise` (the Exercises document); Student Projects stay in
  the text as notes;
- a graph is always drawn live; 3D is for solids, space, surfaces and
  fields through a surface, with a surface read by its level curves built
  flat and 3D side by side.

`book.json` carries the identity, the licence, the Preface as `intro`, the
nine types with the default colours from `npm run colours:default --
calculus`, the three kinds, and empty `chapters`, `symbols`,
`exercise_sources`, `concepts` and `concept_prereqs`. `ost check calculus`
and `npm run check:content` pass with no chapters. `exploration.md` closes
with what live figures could show per chapter and the figure-library parts
the book wants, the first a draggable point on a graph.

Left for the chapter passes: the converter's support for this bundle,
`toc.md` and `modules.json` (a parallel pass); the Preface page; the two
sheets; the figure-library parts; rerunning the colour default once pages
exist; and the config list for Chapter 1, which this pass puts to Chen.


## Pass 2 (2026-10-12): eighteen types

Prompted by: Chen's ruling that the nine types of Pass 1 were too lean.
Pass 1 had been told to keep the categories few; root rule 7 fits the
palette to the categories, never the other way round.

What was decided, in `RULES.md`, `COLOR.md` and `ch01/COLOR.md`:
- nine types added, eighteen in all, in scheme order function,
  derivative, integral, limit, point, set, line, angle, error, region,
  sequence, series, curve, vector, plane, surface, vector field, matrix,
  so the types of the early pages take the hues farthest apart in book
  order;
- `set` for a domain, a range, an interval and its notation, an interval
  of convergence and a solution set; `point` for (a, f(a)), zeros,
  intercepts and critical, inflection and extreme points; `line` for
  tangent, secant and normal lines, asymptotes and lines in space;
  `angle` for θ in radians or degrees, the polar θ and the angle between
  two vectors; `error` for an approximation's error, the Taylor
  remainder Rₙ and the trapezoid and Simpson error bounds; `matrix` for
  the Jacobian and determinants; `plane` for planes in space and tangent
  planes;
- `curve` and `surface` are split out of `region`, which keeps only the
  sets of the plane and of space that an integral is taken over and the
  solids;
- an applied quantity wears the mathematical type it is (a velocity is a
  derivative, work, mass and a total change are integrals, a position or
  a cost is a function), and the book has no physical quantity types;
  variables, indices and the constants e, π and C stay in ink, and ε and
  δ are bands in the colour of what they bound.

Chapter 1 was retyped with `ost set`: `domain`, `range`,
`interval-notation`, `natural-domain` and `restricted-domain` are `set`;
`zeros-of-a-function` and `y-intercept` are `point`; the three forms of a
line's equation in 1.2 are `line`; `radian` is `angle`. θ in 1.3 is an
angle; b of the intercept (0, b) stays in ink as a coordinate; D, R, θ, A,
B and the new E have macros, and A, B and E are sets in 1.1's definition
of a composite. The 1.1 page marks its written domains, ranges, intervals
and intercepts with `data-type`, and its figures draw the ovals of the
maps and the bands of the domain finder in `set`, the marked and dragged
points in `point` and the vertical line test's line in `line`.
`npm run colours:default -- calculus` was rerun with 1.1 built.


## Pass 3 (2026-10-12): Chapter 1 pass

Every section's "Wanted at chapter level" was applied: the anchors of all
81 forms of the chapter and of every variables row, two new forms of
`trigonometric-functions` (`eq-trig-radius-r`, `eq-trig-right-triangle`),
and new variables rows for h and t in 1.3 and f, D, g, h and θ in 1.4.
The chapter review exercises held in 1.5 landed with the section that
introduces what each tests: 311 in 1.1; 319 and 331 in 1.2; 321, 323 and
333 in 1.3; 310, 312 (AI-marked), 313, 327 and 329 in 1.4; 315, 317, 325
and 335 stay in 1.5. Three corrections were added as notes: Example
1.38's "e = 3" where b = e is meant, and the keys to 327 and 329, which
write y where x is meant. The chapter opener's link to Example 1.39 names
the qualified id. `npm run colours:default -- calculus` was rerun with the
chapter built.


## Pass 4 (2026-10-12): Chapter 2 pass

Every section's "Wanted at chapter level" was applied: the anchors of all
the chapter's forms and variables rows, and new variables rows for g, h
and k in 2.1 (k with its macro, `\kk`) and m in 2.2, Einstein's moving
mass (`\km`); g and h in 2.1 and h in 2.2 redefine Chapter 1's meanings.
The chapter review exercises held in 2.5 landed with the section that
introduces what each tests: 231 in 2.1; 210 (AI-marked) in 2.2; 209, 213,
215, 217, 219, 221, 223 and 224 (AI-marked) in 2.3; 208 and 230
(AI-marked), 211, 225 and 227 in 2.4; 228 and 229 stay in 2.5. Two
corrections were added as notes: the key's [2, ∞] for 225, meant
[2, ∞), and the key's reason for 211, where a removable discontinuity is
no counterexample. `tangent-line` wears `line`, its slope `derivative`,
and 2.1's figures draw the tangent in `line`. The chapter opener's link
to Example 2.12 names the qualified id.


## Pass 5 (2026-10-12): No volumes

Chen's ruling: the merged book drops the volumes for the reader. The Preface's words that assume three volumes are changed to the one book, its three coverage lists made one list of Chapters 1–17 in the merged numbers, and each change carries a correction note giving what the book printed (v-welcome, v-licence, v-about (heading and paragraph), v-coverage, v-chapters, v-pedagogy, v-transcendentals). "Over 60 Proofs" stays, still true of the whole book. RULES and the chapter configs now say that 15.6's "Section 6.6 of Volume 1" becomes "Section 6.6" with a note. Chapters 1 and 2 print no volume.

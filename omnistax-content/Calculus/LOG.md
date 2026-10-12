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

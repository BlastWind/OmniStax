# Plan: 18.3 Coulomb's Law (m42308)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2, the plan review of rule 5 and the user picks
of rule 15 are replaced by this file, written before the section was built
and left for review after, as `ch18/config.md` records.

The chapter's first quantitative section. 18.1 and 18.2 say that there are
two kinds of charge, that like charges repel and unlike attract, and that
the force weakens with distance; this section turns those three statements
into one formula, gives the constant that fixes its size, and then sets the
Coulomb force beside gravity for the two commonest particles in nature to
show how enormously the electrical force wins on a small scale and how
completely it loses on a large one. One numbered diagram (18.17), one
dropped splash photograph (18.16), one boxed note, one worked example, three
glossary terms, six AP items, three conceptual questions and seventeen
problems. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all three are the agent's
(rule 3 and `config.md`).

1. `electrostatic-force` **The force between two point charges** (book: the
   opening paragraph naming the electrostatic force and Coulomb; the boxed
   Coulomb's Law note with its two equations; Figure 18.17). The variables
   $\kF$, $\kqone$, $\kqtwo$, $r$ and $k$ and the equations
   `eq-coulombs-law` and `eq-coulomb-constant` anchor here.
2. `inverse-square` **How the force falls off with distance** (book: the
   paragraph beginning "Although the formula for Coulomb's law is simple",
   with the inverse square verified to one part in $10^{16}$).
3. `against-gravity` **The Coulomb force compared with gravity** (book:
   Example 18.1, How Strong is the Coulomb Force Relative to the
   Gravitational Force?, with its strategy, solution and discussion; the
   closing paragraph that defines the Coulomb forces and says why gravity
   wins on a large scale). The variables $\kFG$, $G$, $m$ and $M$ and the
   equations `eq-gravitational-force` and `eq-coulomb-gravity-ratio` anchor
   here.

The book gives its one worked example no number in the CNXML; the publisher
prints it as Example 18.1, the chapter's first, and the page follows that.
Cross references are plain text: the problem that cites "the Problem-Solving
Strategy for electrostatics" points at 18.8's box and is left as the book
writes it. Learning objectives, the section summary and the three glossary
terms come out of the running text into the tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| coulombs-law | result, eq-coulombs-law | electrostatic-force | the boxed law; Figure 18.17; Example 18.1; every problem of the section |
| coulomb-constant | idea, eq-coulomb-constant | electrostatic-force | the constant in the boxed note; the AP item on two charges of 1 C |
| coulomb-force-direction | idea | electrostatic-force | the boxed note's sentence on the line joining the charges; Figure 18.17's equal and opposite pairs |
| coulomb-force-scaling | skill | inverse-square | $F \propto 1/r^2$ to one part in $10^{16}$; the three AP items on a force $F$; the problems on tripling and on the factor of 25 |
| coulomb-versus-gravity | result, eq-coulomb-gravity-ratio | against-gravity | Example 18.1 and its ratio $2.27 \times 10^{39}$; the closing paragraph on cancellation |

The section leans on `electric-charge`, `like-charges-repel` and
`elementary-charge` (18.1), `force` and `newtons-third-law` (4.x),
`newtons-second-law` and `weight` (4.3), and `universal-gravitation` and
`gravitational-constant` (6.5); the coverage rows mark each as used where
the text uses it. `polar-molecule` (18.6) is tagged on the three conceptual
questions as `exploration.md` says, and nothing of this section is held for
a later page except the two problems named under Exercises below.

## Types bound

`charge` and `force`, exactly as `ch18/COLOR.md` gives this page. The
separation $r$, the constants $k$ and $G$ and the masses $m$ and $M$ stay
untyped and in ink. The electron and the proton are particles with an
identity and are drawn from the element palette, `F.el('e-')` and
`F.el('p+')`, per the chapter notes that supersede `COLOR.md` on this point;
a charge's sign is told by the $+$ or $-$ on its label, never by a hue.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `sim-coulomb-pair` · replaces Figure 18.17 (a) and (b), the two panels of
   like and unlike charges · coulombs-law, coulomb-constant,
   coulomb-force-direction, coulomb-force-scaling · value adds:
   **variation by slider**, since the book draws two states of a formula
   with four quantities in it, and the reader can instead set both charges
   and their separation and watch the pair of arrows turn, grow and shrink;
   and **intuition**, since the graph of $F$ against $r$ drawn beneath the
   scene makes the inverse square something seen rather than read (rule
   24.4) · **still**: two charges held at a chosen separation have no time
   in them, the book's two panels are two answers to the sliders and not two
   moments of one motion, so the figure registers no cycle and gets no
   transport (rule 14; `config.md` makes the same decision for this figure)
   · sliders $\kqone$ ($-5.00$ to $+5.00$ μC, default $+2.00$, charge),
   $\kqtwo$ ($-5.00$ to $+5.00$ μC, default $+2.00$, charge), $r$ (2.0 to
   20.0 cm, default 10.0, untyped and in ink) · headline states the size of
   the force, whether it is a repulsion or an attraction, and that the two
   arrows are equal and opposite · graph **below** the scene, which is
   horizontal (rule of the prompt): $F$ against $r$ over the slider's own
   range, 2 to 20 cm, with the vertical axis fixed at 0 to 20 N and a value
   past the top taken by `pinned()`, the curve clipped to the box · 2D
   (rule 28.1: the relation between four scalars is clearest flat). Arrow
   lengths follow the square root of the force, so that a weak force and a
   strong one both fit one picture; the readout states the true numbers and
   the small line says so (rule 28.4). Tier: still simulation.

2. `sim-coulomb-versus-gravity` · **Sim**, replacing nothing in the book ·
   coulomb-versus-gravity · value adds: **intuition**, since the two forces
   in Example 18.1 differ by thirty-nine orders of magnitude and no drawing
   to scale can hold both, so the figure draws them on a logarithmic axis
   where both are visible at once; and **variation by slider**, since
   dragging the separation shows both forces falling and the ratio between
   them standing still, which is the point the discussion makes in words
   (rule 24.4) · **still**: the electron and the proton are held at a
   separation the reader chooses and nothing in the comparison runs on a
   clock (rule 14) · slider $r$ ($0.100$ to $5.00 \times 10^{-10}$ m,
   default $0.530$, the book's own number, untyped and in ink). One slider
   and no second: the comparison has exactly one free quantity, and the only
   other quantity that could be made variable, which pair of particles is
   being compared, would print the answer to the unkeyed AP item that asks
   for the ratio between two electrons and between two protons · headline
   states both forces and their ratio at the current separation · the two
   **bars** sit below the atom on a logarithmic axis from $10^{-50}$ to
   $10^{-5}$ N, which is the graph · 2D. Tier: still simulation.

No third figure. Example 18.1 is the only worked example and figure 2 is
its picture; the AP items and the conceptual questions need no drawing of
their own except the water molecule, which rides on its card.

## Photographs and unnumbered images

| image | keep or drop | why |
|---|---|---|
| Figure 18.16, the galaxies of Arp 87 | **drop** | the splash image at the head of the module; the contrast its caption draws is the discussion of Example 18.1, which the page carries in words (rule 14 and `config.md`) |
| Figure 18.17, the two panels of forces | **transformed**, not kept as an image of its own | it is the original of `sim-coulomb-pair`, carried on the row and swapped in by the app |
| the water molecule's electron cloud, unnumbered, in the first conceptual question | **keep on the card** | the question and the one after it both say "shows the charge distribution in a water molecule" and cannot be read without it; it travels on the exercise's own `figure` field, as `config.md` sets for this chapter |

Both kept images are copied to `media/ch18/` under the bundle's own names,
`Figure_19_03_02a.jpg` (350 px) and `Figure_19_03_03a.jpg` (158 px).

## Exercises

Six AP items, three conceptual questions and seventeen problems in the
source. Placement follows rule 12 and `config.md`:

- **AP test prep**, all six at the end. Three are keyed: the force when the
  distance is halved (a graded choice), the gravitational force between the
  particles (a graded choice), and the two charges of 1 C at 0.5 m and at
  1 m (keyed in both parts, a `multi` answer). Three are unkeyed and are
  kept as open items with their options as the book prints them and an
  AI-marked suggested approach, never as graded choices. The shared setup of
  "for questions 25–27" is kept in the first item's words and repeated in
  the third, which needs it.
- **Conceptual questions**, all three at the end, each with an AI-marked
  suggested approach. They read Coulomb's law through the polar molecule,
  which the book defines in 18.6; `exploration.md` keeps them here and tags
  them with `polar-molecule` as a placeholder inside the chapter.
- **Problems**, the six keyed ones at the end: the glass rod and the silk,
  the separation decreased by a factor of 5, the acceleration of two
  protons, the factor of 3.2, the charge on the transparent tape, and the
  fraction of the nickel's electrons. The nine unkeyed problems that belong
  to this section are left out and named in the notes.
- **Held for 18.5**: the keyed problem on where a third charge feels no net
  force and the unkeyed one on the test charge halfway between $+6$ μC and
  $+4$ μC both need two Coulomb forces added as vectors, which is 18.5's
  `superposition-of-coulomb-forces`; they go to 18.5 with
  `source_section: "18.3"` and this section's `exercise_notes` says so.

## Tables

None. The section prints no table, and the AP items here carry none.

## Wanted at chapter level

- `eq-coulombs-law` → 18.3-electrostatic-force
- `eq-coulomb-constant` → 18.3-electrostatic-force
- `eq-gravitational-force` → 18.3-against-gravity
- `eq-coulomb-gravity-ratio` → 18.3-against-gravity
- No concept or symbol fix: the five concept rows, the nine variable rows
  and the three glossary rows of 18.3 are right as they stand, and every
  symbol the page writes already has its row.

**Applied by the chapter pass (2026-09-15).** The four equation anchors are
written, `eq-coulombs-law` and `eq-coulomb-constant` at
`18.3-electrostatic-force` and `eq-gravitational-force` and
`eq-coulomb-gravity-ratio` at `18.3-against-gravity`. The nine variable rows
are anchored to the same two spans, `F`, `q_1`, `q_2`, `r` and `k_coul` to
the first and `F_G`, `G`, `m` and `M` to the second, since root rule 20's
sister requirement is that every variable row carry an anchor. No concept,
symbol or glossary row was changed. The section's `exercise_notes` now say
that only the keyed one of the two problems that belong in 18.5 is set
there, the unkeyed one being left out as every unkeyed problem is.

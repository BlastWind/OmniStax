# Plan: 18.6 Electric Forces in Biology (m42315)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves; the
per-section stop of rule 2, the plan review of rule 5 and the user picks of
rule 15 are replaced by this file, written before the section was built and
left for review after, as Chapters 1 to 15 did it.

The one biological section of the chapter. It says that the large molecules
of life are charged, that DNA is charged enough to be held together by the
Coulomb force it has just met, that the force is nevertheless diluted inside
a cell by screening, and that water, being polar, is the best example of
what does the screening. It prints no equation of its own, two diagrams
(18.24, the double helix, and 18.25, two water molecules as dipoles), one
conceptual question, four glossary terms and no worked example. A thin
section is still a page of its own (rule 11).

## Sub-concepts (page headers)

The book prints one header of its own, Polarity of Water Molecules, with two
third-level headers under it, Cell Membranes and Bioelectricity and Wound
Healing, and all three are kept as the book writes them (`ch18/config.md`).
The opening passage, which carries DNA and the dilution of the Coulomb
force, comes before the book's first header and is given a header of its own
(rule 3), as the config allows.

1. `charged-molecules` **Charged molecules in the living cell** (book: the
   four paragraphs from "Classical electrostatics has an important role" to
   the sentence on screening; Figure 18.24). Introduces
   `charged-biomolecules` and `electrostatic-screening`. The variable
   $\kqe$ anchors here.
2. `polarity` **Polarity of Water Molecules** (the book's header; its two
   paragraphs and Figure 18.25). Introduces `polar-molecule`.
   The book's two third-level headers, Cell Membranes and Bioelectricity and
   Wound Healing, sit inside this span as `<h3>`, as the book prints them
   under its own header, so the page carries two spans and not four: the
   ions, the microtubules, the work of Ernest Everett Just and the three
   paragraphs on wound healing are all the same idea read through the polar
   molecule, and nothing on the page cites them separately. Cross references are none: the section cites no other section, no
example and no strategy box. Learning objectives, the section summary and
the four glossary terms come out of the running text into the tables and the
views (rule 4). The converter's `$F\propto 1/r^2$` and the book's
$2q_{\text{e}}$ per 0.3 nm are kept as the book writes them.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| charged-biomolecules | idea | charged-molecules | the charge on DNA, about $2\kqe$ per 0.3 nm; the base pairs held by the Coulomb force; `sim-dna` |
| polar-molecule | idea | polarity | the ten electrons of water sitting closer to oxygen; the two centres of charge of Figure 18.25; `sim-water` |
| electrostatic-screening | idea | charged-molecules, drawn again in polarity | the Coulomb force "diluted" between molecules; the field lines water terminates; `sim-screening`; the conceptual question on the cell membrane |

The section leans on `coulombs-law`, `coulomb-force-scaling` and
`coulomb-force-direction` (18.3), `electric-charge`, `like-charges-repel`
and `elementary-charge` (18.1), `polarization` (18.2), and
`electric-field-lines` and `field-line-properties` (18.5); the coverage rows
mark each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. `sim-dna` · replaces Figure 18.24, the double helix · charged-biomolecules,
   coulombs-law, coulomb-force-scaling · value adds: variation by slider and
   intuition (rule 24.4). The book's rendering says that DNA is charged and
   stops; the sentence that matters, that the base pairs must be close
   because the Coulomb force drops as $1/r^2$, is a number the reader cannot
   read off a picture. Here the two charged sites are set apart and the force
   between them is read at every separation, so the reader sees it fall by a
   factor of eleven between the 0.3 nm inside a base pair and the 1 nm across
   the two strands · **still**: two charged sites held at a separation the
   reader chooses have no time in them, so the figure answers its sliders,
   registers no cycle and carries no transport (rule 14) · the separation $r$
   (0.10 to 2.00 nm, default 0.30, untyped and in ink, since a distance
   between charges is a length) and the number of elementary charges at each
   site (1 to 4, default 2, charge, the book's $2\kqe$ per 0.3 nm) · "Two
   charges of 2 q_e set 0.300 nm apart attract each other with 1.02 × 10⁻⁸
   N." · graph beside, because the helix is drawn upright and a graph below a
   tall scene would push the figure past a screen; the graph is $F$ against
   $r$ with the $1/r^2$ curve, the live point on it and the two distances the
   book names, 0.3 nm and 1 nm, marked · 2D (rule 28.1: the helix is drawn as
   the book draws it, two strands and their rungs in a plane, and the lesson
   is a force against a distance, not an arrangement in space). Readout:
   $F = k\lvert q_1 q_2\rvert/r^2$ with the live numbers; small line giving
   the force at 1 nm for comparison. Draws charge and force.
2. `sim-water` · replaces Figure 18.25, two water molecules as dipoles ·
   polar-molecule, coulomb-force-direction, like-charges-repel · value adds:
   variation by slider and intuition. The book draws one arrangement, the
   oxygen of one molecule facing the hydrogen of the other, and the reader
   has to take on trust that this is the arrangement water settles into.
   Turning the second molecule about and watching the force between the
   nearest two centres of charge change sign is what makes the dipole an
   idea rather than a picture · **still**: the reader turns the second
   molecule and reads the force; nothing in the passage has a clock in it,
   and a molecule set spinning would be the dummy loop rule 14 forbids · the
   partial charge $\delta$ on each centre (0.10 to 0.60 $\kqe$, default 0.33,
   charge; the book names the two centres and gives them no size, so the
   figure carries it on a slider and the readout states it), the separation
   of the two molecules (0.20 to 0.80 nm, default 0.30, ink), and a choice of
   how the second molecule is turned: oxygen to hydrogen (the book's
   arrangement, the default), hydrogen to hydrogen, or oxygen to oxygen,
   which is a state and not a quantity (rule 26.1), carried as a dropdown
   because a row of three phrases that long wraps out of the panel (rule
   26.1) · "The hydrogen end of one
   molecule and the oxygen end of the other, 0.30 nm apart, attract with
   2.78 × 10⁻¹⁰ N." · none: the two molecules with their $\delta^-$ and
   $\delta^+$ marks and the force between them are the whole picture · 2D.
   Readout: $F = k\lvert q_1 q_2\rvert/r^2$ with the live numbers and the
   word attract or repel; small line on the ten electrons sitting closer to
   oxygen. Draws charge and force. Oxygen is `F.el('O')` and hydrogen
   `F.el('H')` outlined in ink, as the element palette asks (rule 7).
3. `sim-screening` · Sim (it replaces no figure of the book) ·
   electrostatic-screening, electric-field-lines, field-line-properties ·
   value adds: variation by slider and intuition. The section's own idea,
   that the Coulomb force is short range inside a cell, is the one thing the
   book prints no figure for at all: it says the centres of charge "terminate
   some of the electric field lines coming from a free charge" and leaves the
   reader to imagine it. Here the free charge on a DNA strand sends its lines
   out towards a distant ion, water molecules are put in between one at a
   time, and each turns its negative end to the charge and takes a line out
   of the count, so the reader sees how a $1/r^2$ force is made short range ·
   **still**: the reader adds water molecules and moves the ion, and reads
   what gets through; the settling of the molecules is not the idea and no
   transport is earned (rule 14) · the number of water molecules between the
   two (0 to 8, one for each line drawn, default 4, ink, a count), and the distance of the ion from
   the charged strand (0.5 to 4.0 nm, default 2.0, ink) · "Six water
   molecules take six of the twelve lines, so the ion feels half the force it
   would feel in empty space." · none: the strand, the dipoles between and
   the ion in one flat map is the picture, as the book draws field lines
   flat · 2D. Readout: $\kEf$ at the ion written as the fraction of lines
   that get through times the unscreened field, with the live numbers; small
   line saying the force on the ion is $F = q\kEf$. Draws charge, electric
   field and force.

Photographs: the section prints none. Its two images are diagrams and both
are replaced by simulations, each keeping the book's image as its original
and the book's caption as its `original_caption`, with the widths the CNXML
gives, 250 and 200.

Figures that serve exercises: none. The section's one conceptual question
prints no image and asks the reader to draw one.

Extra simulations (rule 15), thought through, judged and decided:

- **The screening map (`sim-screening`): built**, for the reason its plan
  line gives: it is the section's title idea and the book draws nothing for
  it.
- A cell drawn with its membrane charged inside and out, which is the
  section's conceptual question. Left: the question asks the reader to draw
  exactly that, and a figure of it on the page would answer the question
  before it is asked. The suggested approach describes the drawing in words
  instead.
- A sodium, potassium and chloride ion crossing a membrane, since the text
  names all three. Left: the passage names them in one sentence and neither
  the objectives nor the exercises go near a nerve impulse, and a membrane
  with channels in it would teach a mechanism this book has not taught.
- A microtubule carrying a field further than screening allows. Left: the
  text reports it as a recent study and gives no quantity; a picture would
  have to invent the physics.

Figure pass, 2026-09-15 (Claude Fable 5.1). `sim-water`: the oxygen's δ⁻ mark had landed on the upper hydrogen; it now sits on the oxygen's far side, away from the two hydrogens, and each δ⁺ stands clear of its hydrogen along the bond. `sim-screening`: the water molecules are drawn smaller where the gap is narrow so that eight still stand between the strand and the ion at 0.5 nm without touching either, the force arrow is capped so it never enters the strand, and the force reads above the ion. `sim-dna` left as built.

## Exercises

- 1 conceptual question, the section's only exercise: `cq1` (fs-id2681100,
  the cell membrane charged $-2.5\times10^{-6}$ C/m² inside and
  $+2.5\times10^{-6}$ C/m² outside, and what field it makes). It has no key,
  so it is an open item with an AI-marked suggested approach (rule 13), set
  at the end, Analyze, citing `polarity`. It tests `electrostatic-screening`
  at full weight and `electric-field-lines` at 4 and `field-line-properties`
  at 3, since the drawing it asks for is a field-line drawing and the point
  of it is that the two layers screen each other.
- No problems and no AP items: the module prints none, and nothing is taken
  from another section. Nothing of this section's is held back.
- No generated questions. `charged-biomolecules` and `polar-molecule` have
  no book exercise of their own here; the chapter's later sections do not
  test them either, and rule 13 forbids generating one, so both are noted as
  covered by the text and the figures alone.

## Views

- Formulas: none. The section states no equation, and `chapter.json` carries
  none for it.
- Definitions: the one variable of the section, $\kqe$, and the four glossary
  terms, dipole, polar molecule, screening and the Coulomb interaction.
- Concept map: the three nodes above with their edges into 18.1 to 18.5.

## Colour

The page binds `charge`, `force` and `electric-field`. `ch18/COLOR.md` gives
18.6 `charge`, and `electric-field` where a figure draws the screened lines;
the page binds `force` as well, which that line does not name, because all
three of its figures draw a Coulomb force arrow and two of them write
$F = k\lvert q_1 q_2\rvert/r^2$ in the readout, and rule 7 asks that a drawn
force wear the force hue rather than be left in ink. This is the record that
line asks a section for.

Oxygen and hydrogen are the element palette, `F.el('O')` and `F.el('H')`, the
hydrogen outlined in ink so that it reads on a light page; the ion of
`sim-screening` is `F.el('Na')`, since the text names Na⁺ first among the
ions of the cell. A charge's sign is told by the $+$, $-$, $\delta^+$ and
$\delta^-$ marks and by the direction of the arrows, never by a hue. The
separations, the counts and the nanometre scales are untyped and in ink.

## Wanted at chapter level

- variables `q_e` → 18.6-charged-molecules

**Applied by the chapter pass (2026-09-15).** `q_e` is anchored at
`18.6-charged-molecules`. The page binds `force` as well as `charge` and
`electric-field`, for the attraction between a water molecule and the ion it
surrounds, and `ch18/COLOR.md` now records that binding as built.

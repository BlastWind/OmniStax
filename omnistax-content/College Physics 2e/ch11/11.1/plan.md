# Plan: 11.1 What Is a Fluid? (m42186)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2, the plan review of rule 5 and the user picks
of rule 15 are replaced by this file, written before the section was built
and left for review after, as `ch11/config.md` records.

The chapter's opening section, and a qualitative one: no equation, no
worked example, no problem set and no Check Your Understanding box. It
names the four common phases of matter, says that liquids, gases and
plasmas are fluids because they yield to a shearing force while a solid
resists one, and explains all of it by the forces between atoms in each
phase. One book figure (11.2, the four panels of atoms), one Connections
note, one PhET note, four conceptual questions and one glossary term. The
PhET note (States of Matter—Basics) is dropped per the chapter config and
named in `notes`. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all three are the agent's
(rule 3).

1. `phases` **The common phases of matter** (book: the opening paragraph
   that names solid, liquid, gas and plasma, says which have a definite
   shape and which a definite volume, calls liquids, gases and plasmas
   fluids because they yield to shearing forces, and points at the figure;
   Figure 11.2 sits here where the book prints it). The concepts
   `phases-of-matter` and `fluid` are introduced here.
2. `solids` **Atoms in a solid** (book: the paragraph on atoms in close
   contact held by forces that act like springs, so that a solid resists
   every kind of stress and resists compression; the Connections note on
   the submicroscopic explanation of solids and liquids, kept as a
   `div.note`). `atomic-arrangement-and-phase` is introduced here.
3. `fluids` **Atoms in a liquid, a gas, and a plasma** (book: the paragraph
   on liquids that deform, flow, stay in an open container and resist
   compression; the paragraph on gases and plasmas whose particles are far
   apart, so that they flow, compress easily and escape an open container;
   the sentence that fixes the word *fluids* for the rest of the chapter,
   which is the glossary term). `atomic-arrangement-and-phase` is used and
   `fluid` reinforced here.

The book's cross references to Viscosity and Laminar Flow; Poiseuille's Law
(m42209, Chapter 12, unbuilt) and to Conservation of Momentum (m42162,
which is 8.3) are plain text, as every built section of the book writes
them. Learning objectives, the section summary and the one glossary term
come out of the running text into the tables and the views (rule 4). The
section has no variable, no equation and no example.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| phases-of-matter | idea | phases | the opening paragraph; Figure 11.2; CQ 2 (which substances are fluids), CQ 4 (how gases differ from liquids) |
| fluid | idea | phases | the definition beside the figure; the glossary; CQ 1 (what distinguishes a fluid from a solid) |
| atomic-arrangement-and-phase | idea | solids | the three paragraphs on atoms in each phase; the Connections note; CQ 3 (why gases compress more easily) |

## Figures

id · replaces · concepts · value add · moving or still · sliders and choices · headline · graph · 3D

1. `sim-phases` · replaces Figure 11.2 (the four panels: a solid, a liquid,
   a gas, a plasma) · phases-of-matter, fluid,
   atomic-arrangement-and-phase · value add: flow by animation and
   variation by a choice. The book's arrows on the atoms are kinematic
   (rule 24.1) and the reader would otherwise have to imagine the three
   kinds of motion the figure is about (rule 24.3): atoms that vibrate about
   fixed places, molecules that slide past one another while staying in
   contact, and molecules and charged particles that fly freely across
   space that is large compared with their size. The choice then shows what
   the still cannot, which is the response the text claims for each phase:
   a shearing push that a solid resists and every fluid yields to, a
   compression that solids and liquids refuse and a gas takes easily, and
   an open lid that lets a gas escape and leaves a liquid where it is ·
   **moving**: the idea is motion, and the four samples move all the time;
   the motion has no period, so the figure registers an unbounded cycle
   and carries play, stop and speed with no scrubber, and reduced motion
   shows it stopped · one choice, `\text{push on the samples}`, with the
   options *leave them*, *shear them*, *compress them* and *open the lids*,
   untyped, the default *leave them* being the book's picture; no slider,
   since nothing in the idea is a quantity · headline: for *leave them*,
   "Left alone, the atoms of the solid vibrate about fixed places, the
   molecules of the liquid slide past one another in contact, and the
   molecules of the gas and the particles of the plasma fly freely."; for
   *shear them*, "The sideways push slides the plate freely across the
   liquid, the gas and the plasma, and hardly moves it across the solid,
   which leans and holds."; for *compress them*, "The piston stops almost
   at once on the solid and the liquid, whose atoms are already in
   contact, and travels half way down the gas and the plasma."; for *open
   the lids*, "With the lids off, the gas and the plasma escape, and the
   liquid stays in its open container." · no graph; the four panels are
   the scene · 2D, flat (rule 28.1), since the lesson is packing and
   motion, not an arrangement in depth.

   The four samples are named substances so that every particle has an
   identity and takes the element palette (rule 7, chapter `COLOR.md`):
   (a) a solid, a crystal of iron drawn as a four-by-four lattice of iron
   atoms joined by thin ink springs, standing for the forces between
   neighbors as the book's caption says, each atom jiggling about its
   lattice site; (b) a liquid, water in an open beaker, some thirty water
   molecules, an oxygen atom with two hydrogens, packed in contact under
   gravity and free to slide over one another, tumbling as they go; (c) a
   gas, oxygen in a closed container, ten O₂ molecules crossing the box in
   straight lines and bouncing off its walls; (d) a plasma, hydrogen
   stripped into protons and electrons in a closed container, the protons
   drawn as hydrogen from the element palette with an ink outline and a
   plus sign and the electrons as small ink dots, both flying freely, the
   electrons faster. A phase is told by packing and by motion, never by a
   tint on the sample; the containers, the springs, the ground, the plate
   and the piston are ink. The pushing plate and the piston are the
   library's hatched fixed surface. The page binds no type: nothing on it is
   a physical quantity with a type, and the push is drawn as a plate that
   moves rather than as a force arrow, so `draws` is empty.

   Labels (rule 26.7): the frame is the headline, the choice and the four
   panel captions, "(a) solid: a crystal of iron", "(b) liquid: water in an
   open beaker", "(c) gas: oxygen in a closed container", "(d) plasma:
   protons and electrons", each with a one-line note beneath on how its
   particles move; the plate and the piston are labelled once, on the first
   panel, and every particle, spring, container, plate and piston has a
   hover name, so no label sits on a moving thing. Readout: one sentence
   stating the relation the current choice shows (a fluid yields to a
   shearing force, a solid resists one; solids and liquids resist
   compression, gases do not; a gas escapes an open container, a liquid
   does not), with a small line saying why in terms of the atoms.

   Under *leave them* the picture is the book's: the same four samples with
   the same packing, the arrows replaced by the motion they stood for. The
   response to the push is prescribed, not computed from a force law: the
   plate on the solid moves a hair and holds and springs back when the push
   is removed, the plate on the fluids slides at a steady speed across the
   sample, the piston stops after two percent of the sample's height on the
   solid and the liquid and after half the container's height on the gas
   and the plasma; the readout says what is shown.

Photographs: none. The book's Figure 11.2 is a drawing, replaced as above,
with its image kept as the figure's original and its caption as the
original caption (width 400 from the CNXML).

Figures that serve exercises: none.

Extra simulations (rule 15): none proposed. The one figure already opens
the views the text does not give, and a second scene (the four substances
of the second conceptual question sorted into fluids and solids, say) would
add a list, not a view.

## Tables

None.

## Exercises

- No Check Your Understanding box, so nothing inline.
- 4 conceptual questions, all in the Exercises document, each with an
  AI-written suggested approach marked as such: `cq1` (what distinguishes
  a fluid from a solid; cites `phases`), `cq2` (which of air, mercury,
  water and glass are fluids at room temperature; cites `fluids`), `cq3`
  (why gases are easier to compress than liquids and solids; cites
  `fluids`), `cq4` (how gases differ from liquids; cites `fluids`). The
  third is untyped in the CNXML and is classed by the header it sits under,
  as the book's rules say.
- No problems, no AP items, nothing taken from another section and nothing
  of this section's own held for a later page.
- No generated questions: every node has a book exercise.
- Weights: none; the Bloom table applies.

## Views

- Formulas: none; the section states no equation.
- Definitions: no variable; the one glossary term, *fluids*.
- Concept map: the three nodes above.

## Colour

The page binds nothing. Every particle takes the element palette (iron,
oxygen and hydrogen), the electrons and everything else are ink, and no
type hue appears on the page, as the chapter's `COLOR.md` says for 11.1.
No new hue, no new macro, no new symbol.

## Wanted at chapter level

- Nothing. The section has no variable and no equation, so no anchor is
  wanted, and its concept rows and glossary row stand as the prep pass
  wrote them.

Applied in the chapter pass (2026-09-14). Nothing was wanted and no row
was written. The one change to the page is the first sentence of Figure
11.2's caption, which named the book and now names the four samples. The
figure moves, which `ch11/config.md` had not foreseen for this section; the
plan's reason stands and the config's "What the build changed" block records
it.

Figure pass, 2026-09-15 (Claude Fable 5.1). `sim-phases`: the plate and the piston now carry the push that moves them, an ink arrow onto the plate's end for the shear and onto the piston's middle for the compression, since the page binds no type; the plasma's electrons are drawn a little larger so the panel reads at page width. Nothing else changed.

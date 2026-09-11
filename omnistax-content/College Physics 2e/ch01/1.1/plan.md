# Plan: 1.1 Physics: An Introduction (m42092)

Source: `source.md` (converted from CNXML). Book page 26.
Status: built 2026-09-11 without a review stop, on Chen's instruction to build the whole chapter in one pass.

A qualitative section: no equations, no worked examples, no problems.
Thirteen photographs and one sketch, one boxed note in the running text,
one boxed note that is a passage of its own, one Check Your
Understanding, nine conceptual questions, none of them keyed. It stays a
page of its own (rule 11).

## Sub-concepts (page headers)

The book has an untitled opening and four titled passages. Proposed page
structure, one block per idea:

1. **Science, and the realm of physics** (`realm`; book: the three
   opening paragraphs on the order of nature and the aims of the text,
   then "Science and the Realm of Physics": what science is, what
   physics is concerned with, the smart phone and the GPS system, with
   Figure 1.3 after the paragraph that names it)
2. **Applications of physics** (`applications`; book: the four paragraphs
   on everyday uses, the other disciplines, the biological sciences and
   why the basic laws are what is worth knowing, then Figures 1.4 to 1.7
   in the book's order)
3. **Models, theories, and laws, and the role of experimentation**
   (`models`; book: the laws of nature and their discovery, Newton and
   Curie, curiosity and data, the model, the theory in the two
   paragraphs the book prints, the law, principles, the planetary atom
   as the demo that replaces Figure 1.10, the note "Models, Theories,
   and Laws", the two closing paragraphs on prediction and on science as
   exploration; the Check Your Understanding goes inline at its end)
4. **The scientific method** (`scientific-method`; book: the boxed note
   "The Scientific Method", kept as a note with that eyebrow, three
   paragraphs: Ibn al-Haytham, the process, the car that will not start)
5. **From natural philosophy to classical and modern physics**
   (`classical-modern`; book: "The Evolution of Natural Philosophy into
   Modern Physics", Aristotle, Hevelius and Bohr, the conditions of
   classical physics and why models help in modern physics, the note
   "Limits on the Laws of Classical Physics", the STM gold, the advances
   of modern physics, relativity and quantum mechanics)

The book repeats the sentence "Some theories include models to help
visualize phenomena, whereas others do not" and the sentence on Newton's
theory of gravity at the head of two successive paragraphs; both
paragraphs stay as printed.

Learning objectives, section summary and glossary come out of the running
text into the views. The PhET note "Equation Grapher" is dropped: it is
about graphing polynomials and has nothing to do with the section. The
conceptual questions go to the Exercises document.

## Concept nodes

All seven were written into `book.json` before the section was built; the
section uses them as they stand.

| id | kind | name | prereqs | evidence |
|---|---|---|---|---|
| physics | idea | Physics and its realm | none | glossary; the realm passage; CQ 7 and 9 through its classical branch |
| model | idea | Model | physics | glossary; CQ 1, 2, 6 |
| theory | idea | Theory | model, scientific-method | glossary; CYU; CQ 2, 3, 4, 6 |
| law | idea | Law | theory, scientific-method | glossary; CYU; CQ 6 |
| scientific-method | idea | Scientific method | physics | glossary; the car that will not start; CQ 5 |
| classical-physics | idea | Classical physics | physics | glossary; the boxed limits; CQ 7, 9 |
| modern-physics | idea | Modern physics | classical-physics | glossary; CQ 8 |

Coverage: `realm` introduces physics; `applications` uses physics;
`models` introduces model, theory and law; `scientific-method` introduces
scientific-method; `classical-modern` introduces classical-physics and
modern-physics and uses model (the paragraph on why models are so useful
in modern physics).

The `physics` node has no exercise of its own: no question in the book
tests the definition on its own, and the config says no question is
generated, so none is.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `demo-atom-model` · Figure 1.10 (the planetary model of the atom) ·
   model · a nucleus at the centre drawn as a cluster of protons, and
   electrons on circular orbits of increasing radius, filling shells of
   two, eight and eight, going round endlessly (an endless cycle, so the
   plain transport with no scrubber) · the number of electrons Z, 1 to
   18, default 1 for hydrogen, ink, since a count has no type · "helium:
   two electrons orbit a nucleus of two protons, in the picture the model
   gives us" · none · no.
   Readout: diameter of the atom ≈ 10⁻¹⁰ m. Small line: the nucleus is
   about 10⁵ times smaller than the atom, so a drawing to scale would
   show nothing but the orbits; the model is not a photograph but a
   picture that helps explain what we can measure.
   The section introduces no physical quantity, so the figure has one
   slider, and that is enough: what is variable in the idea is which
   atom the model is a picture of, and the point the book's caption makes
   is that the drawing is a mental image of something too small to see.
   Draws nothing: `draws: []`, all ink and rule.

No figure for the other ideas (theory, law, scientific method, classical
and modern physics): none of them names a quantity, and a drawing would
only illustrate a definition (rule 14 asks for a demo where an idea has
something variable in it).

Photographs, thirteen:

- Fig 1.2, the Canada geese (credit: David Merrett): **drop**. It is
  the chapter's splash image; the text never refers to it.
- Fig 1.3, the iPhone taken apart (credit: Tinh tế Photo/Flickr):
  **keep**, `fig-iphone`. The text says "Consider a smart phone
  (Figure 1.3)" and the passage is about what physics describes inside
  it.
- Fig 1.4, the microwave oven (credit: MoneyBlogNewz): **keep**,
  `fig-microwave`. "See Figure 1.4 and Figure 1.5."
- Fig 1.5, the MRI scan (credit: Rashmi Chawla, Daniel Smith, and Paul E.
  Marik): **keep**, `fig-mri`. Named with 1.4; the caption is the point
  the paragraph makes, that the two applications share their physics.
- Fig 1.6, the onion cells (credit: Umberto Salvagnin): **keep**,
  `fig-onion`. "cell walls and cell membranes (Figure 1.6 and
  Figure 1.7)".
- Fig 1.7, the cell membrane drawing (credit: Mariana Ruiz): **keep**,
  `fig-membrane`. Named with 1.6.
- Fig 1.8, Isaac Newton (credit: Shuster and Shipley): **keep**,
  `fig-newton`. "(See Figure 1.8 and Figure 1.9.)" on the human endeavour
  of discovering laws.
- Fig 1.9, Marie Curie (credit: Wikimedia Commons): **keep**,
  `fig-curie`. Named with 1.8.
- Fig 1.10, the planetary model of the atom: **replaced** by
  `demo-atom-model`, which keeps the number, the book's image as its
  original and the book's caption.
- Fig 1.11, Aristotle (credit: Jastrow (2006)/Ludovisi Collection):
  **keep**, `fig-aristotle`. "(See Figure 1.11, Figure 1.12, and
  Figure 1.13.)" on the branching of natural philosophy.
- Fig 1.12, the Hevelius cover with al-Haytham and Galileo (credit:
  Hevelius, Boÿ, Falck; Houghton Library): **keep**, `fig-hevelius`.
  Named with 1.11, and al-Haytham is the subject of the scientific
  method note.
- Fig 1.13, Niels Bohr (credit: Library of Congress): **keep**,
  `fig-bohr`. Named with 1.11.
- Fig 1.14, the STM image of gold (credit: Erwinrossen): **keep**,
  `fig-stm`. The paragraph ends on new instrumentation that lets us
  "picture" the atom, and this is that picture.

The italicised names in the Newton, Curie, Aristotle and Bohr captions
become `<em>`; every caption keeps its credit clause.

Figures that serve exercises: none in this section.

Extra simulations (rule 15): none proposed, as the config says. A
scientific-method flowchart and a speed ladder for the 1% limit were
considered; both would be static diagrams of a definition and open no
view the text does not give.

## Exercises

- 1 Check Your Understanding (`cyu1`, fs-id2634383), open, inline after
  `models`, with the book's answer; tests law and theory (Understand).
- 9 conceptual questions, all open, no key in the book, each with an
  AI-written suggested approach marked as such:
  `cq1` (what is a model; model), `cq2` (model against theory; model,
  theory), `cq3` (two theories that fit equally well; theory, Analyze),
  `cq4` (what makes a theory valid; theory), `cq5` (strictness of
  criteria for an expected against an unexpected result;
  scientific-method, Analyze), `cq6` (limited validity of a model against
  a theory or a law; model, theory, law, Analyze), `cq7` (when classical
  physics is a good approximation; classical-physics, Remember), `cq8`
  (when relativistic quantum mechanics is necessary; modern-physics,
  Remember), `cq9` (a satellite at 7500 m/s; classical-physics, Apply).
  `cq9`'s approach does the arithmetic in words: 7500 m/s is
  2.5 × 10⁻⁵ of the speed of light, far below 1%.
- No problems, no AP items, nothing keyed by number, nothing held for a
  later page, nothing held from another section.
- Nothing left out except the PhET note.
- No generated questions; the `physics` node has no exercise of its own
  and the config says none is generated.

## Views

- Formulas: none. The section states no equation; $F = ma$ appears as an
  illustration of what a law looks like, not as a result of its own.
- Definitions: the nine glossary terms (classical physics, physics,
  model, theory, law, scientific method, modern physics, relativity,
  quantum mechanics), already in `chapter.json`.
- Concept map: the seven nodes above, with the edges `book.json` already
  carries; no placeholder is reached.

## Colour

The page binds nothing. The one demo draws a count in ink, its orbits in
the rule colour and its nucleus in ink; no typed symbol appears in the
text except $F = ma$, whose $F$ and $a$ take their macros and render in
ink since no figure on the page draws force or acceleration.

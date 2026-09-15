# Plan: 18.1 Static Electricity and Charge: Conservation of Charge (m42300)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves without check-ins; the per-section stop of rule 2, the plan review of
rule 5 and the user picks of rule 15 are replaced by this file, written before
the section was built and left for review after, as `ch18/config.md` records.

The chapter's first section and the one that names the quantity every later
page draws. It says what static electricity is and that rubbing makes it,
that there are two kinds of charge and how we know, that electrons and
protons carry them in one basic amount, how many of them make a coulomb, that
rubbing separates charge rather than making it, and that the total charge of
any process never changes, even when a pair of particles is made from energy.
Seven book figures (three photographs, four diagrams), two boxed notes and a
boxed law, no worked example, four glossary terms of its own and two the
introduction hands it, eleven AP items (six keyed), two conceptual questions,
four problems (two keyed). One page (rule 11).

## Sub-concepts (page headers)

The module prints two headers of its own, Charge Carried by Electrons and
Protons and Separation of Charge in Atoms, and they are kept as the book
writes them. The opening passage carries two ideas of its own and gets two
headers before the book's first, as `ch18/config.md` allows; the passage on
pair creation that closes the module carries an idea of its own as well, so
it gets a header after the book's last, and the Van de Graaff and the quark
carry the book's own Things Great and Small under a header of their own,
which is the agent's call under rule 3.

1. `static-electricity` **Static electricity, and what rubbing does** (book:
   Figure 18.3, the amber; the two opening paragraphs; the list of four
   basic characteristics).
2. `two-types-of-charge` **Two types of charge** (book: the "How do we know
   there are two types" paragraph; Figure 18.4; the "More sophisticated
   questions" paragraph).
3. `electrons-and-protons` **Charge Carried by Electrons and Protons** (book's
   header: Franklin; the atom paragraph; Figure 18.5; the paragraph that
   states the basic charge and `eq-elementary-charge`; the symbol $q$; the
   coulomb, `eq-protons-per-coulomb` and the paragraph on the smallest bit
   of charge). The variables $\kq$ and $\kqe$ and both equations anchor here.
4. `origin-of-charge` **The submicroscopic origin of charge** (book: the
   boxed Things Great and Small; the Van de Graaff paragraph and Figure 18.6;
   the quark paragraph and Figure 18.7).
5. `separation-of-charge` **Separation of Charge in Atoms** (book's header:
   the rubbing paragraph; Figure 18.8; the "No charge is actually created"
   paragraph; the boxed Law of Conservation of Charge).
6. `pair-creation` **Charge made in pairs** (book: the paragraph on mass
   created from energy; the boxed Making Connections on conservation laws;
   Figure 18.9; the closing paragraph). The variables $\Delta m$, $E$, $c$
   and $m_\text{e}$ and `eq-mass-from-energy` anchor here.

Learning objectives, the section summary and the glossary come out of the
running text into the tables and the views (rule 4); the six glossary rows
(the introduction's static electricity and electromagnetic force among them)
are already in `chapter.json`. Cross references are plain text: "see Figure
18.3", "Figure 18.4 shows", and the book's own pointer to its boxed note. The
PhET note (Balloons and Static Electricity) is dropped and named in `notes`.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| electric-charge | idea | static-electricity | the four characteristics; the amber; AP items 1 and 11 |
| like-charges-repel | idea | two-types-of-charge | Figure 18.4 in its three panels; AP items 3, 5, 8 and 11 |
| charge-of-electron-and-proton | idea | electrons-and-protons | Figure 18.5, the Things Great and Small box, Figure 18.6; conceptual questions 1 and 2 |
| elementary-charge | result, eq-elementary-charge | electrons-and-protons | the stated magnitude; the quark caption's sum; AP item 2 |
| count-charges-from-charge | skill, eq-protons-per-coulomb | electrons-and-protons | the protons per coulomb; problems 1 and 3; AP items 9 and 10 |
| charge-separation-by-rubbing | idea | separation-of-charge | Figure 18.8; AP items 1, 6 and 7 |
| conservation-of-charge | result | separation-of-charge | the boxed law; Figure 18.9; AP items 2, 4, 6 and 9 |

The section leans on `physical-quantity` (1.1), `four-basic-forces` (4.8),
`force` (4.1), `model` (1.1), `unit-conversion` (1.2) and
`conservation-of-energy` (7.6), and `pair-creation` uses `conservation-of-momentum`
(8.3) and `conservation-of-angular-momentum` (10.5) by name. Four AP items
turn on a neutral object being attracted by either sign, which is 18.2's
`attraction-of-neutral-objects`, and two on charge shared by contact, which
is 18.2's `charging-by-contact`; they stay here as `ch18/exploration.md`
decided and are tagged with those ids as placeholders inside the chapter.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders
and choices · headline · graph · 3D

1. `fig-amber` · Figure 18.3, the Borneo amber · photograph, **kept**: the
   text points at it ("see Figure 18.3") and it is the amber the Greeks
   rubbed, which is the passage; width 300 as the book prints it.
2. `sim-rods-and-silk` · replaces Figure 18.4 (a)(b)(c), the glass rod on a
   thread with the silk, with a second rod, and the two cloths ·
   like-charges-repel, electric-charge, charge-separation-by-rubbing ·
   value add: variation by choice and slider, the reader sees the hanging
   body swing toward or away and by how much as the charge and the distance
   change, which three still panels cannot show · **still**: a body hanging
   from a thread has settled where the force holds it, and the question is
   which way and how far, not how it got there, so the figure answers its
   controls and registers no cycle (rule 14; `ch18/config.md` says most of
   the chapter is still) · a choice of the pair, glass rod and silk, two
   glass rods, two silk cloths, the book's three panels (rule 26.1); $\kq$,
   the charge rubbed onto each body (0.5 to 5.0 nC, default 3.0, charge),
   one slider because rubbing glass with silk gives the two equal and
   opposite charges, and two rods each rubbed hold the same sign; the
   separation between the hanging body and the one brought near (2 to 12 cm,
   default 6, ink) · "A glass rod holding +3.0 nC hangs by a thread, and silk
   holding −3.0 nC is brought to 6 cm: unlike charges, so the rod swings
   toward the silk." · none · 2D. The scene is the book's, seen from
   the front: the body hangs from a thread, a rod by its middle and a cloth
   by its top, and swings about that point. The swing is drawn as an angle that grows
   with the charges and shrinks with the distance and is never stated as a
   number, since the section says only that the force decreases with
   distance and Coulomb's law is 18.3's; the direction is the book's arc
   arrow in ink. Readout: $\kq_{\text{glass}} = +3.0\ \text{nC}$,
   $\kq_{\text{silk}} = -3.0\ \text{nC}$ and the words unlike or like, attract
   or repel; small line on the distance. Labels: two bodies and a thread,
   on. Draws charge.
3. `sim-atom` · replaces Figure 18.5, the planetary model ·
   charge-of-electron-and-proton, elementary-charge, electric-charge ·
   value add: variation by slider, the reader sets how many protons and how
   many electrons the atom has and reads its net charge, seeing the neutral
   atom become an ion, which the summary names and the still cannot show ·
   **still**: `ch18/config.md` names electrons orbiting merely to look like
   an atom as the dummy loop rule 14 forbids, and the count of charges is
   the idea, so the electrons sit on the book's three orbits and nothing
   registers a cycle · protons (1 to 10, default 3, ink) and electrons (0 to
   12, default 3, ink), both counts; the nucleus is drawn with the neutrons
   of the most common isotope for that many protons, since a neutron changes
   nothing in the charge and a slider for it would have no visible
   consequence in the idea (rule 24.6) · "Three protons and three electrons:
   the charges cancel and the atom is neutral." · none · 2D. Particles in
   the element palette, `F.el('p+')`, `F.el('n0')`, `F.el('e-')`, named once
   each in a legend (rule 26.7); the charge type's hue on the readout only.
   Readout: $\kq = (N_\text{p} - N_\text{e})|\kqe|$ with the live numbers in
   $\kqe$ and in coulombs. Draws charge.
4. `fig-van-de-graaff` · Figure 18.6, the person at the Van de Graaff with
   the blown-up hair · photograph, **kept** with its inset as the book prints
   it: "Figure 18.6 shows a person touching a Van de Graaff generator", and
   the inset is the book's own artist's conception, which the text describes;
   width 250.
5. `sim-quarks` · replaces Figure 18.7, the three quarks in a proton ·
   elementary-charge, charge-of-electron-and-proton · value add: variation by
   slider, the reader sees that any three quark charges of $-\tfrac{1}{3}$ or
   $+\tfrac{2}{3}$ add to a whole number of $\kqe$, which is why every
   observed charge is unitary although its parts are fractions; the still
   shows one sum · **still**: a sum has no time in it · the number of quarks
   carrying $+\tfrac{2}{3}\kqe$ (0 to 3, default 2, ink, step 1), the rest
   carrying $-\tfrac{1}{3}\kqe$ · "Two quarks of +2/3 and one of −1/3 add to
   +1 q_e, the charge of the proton." · none · 2D. Quarks are drawn as three
   filled balls in the categorical palette told apart by their written
   charges, not a type and not an element (rule 7); the charge hue on the
   labels and the readout. Readout: the book's caption sum with the live
   terms, $\kqtot = \ldots = +1\kqe$. Draws charge.
6. `sim-rubbing` · replaces Figure 18.8 (a)(b)(c), the amber and the cloth
   rubbed · charge-separation-by-rubbing, conservation-of-charge,
   charge-of-electron-and-proton · value add: variation by slider, the reader
   moves electrons from the cloth to the amber one at a time and watches the
   two net charges grow equal and opposite while their sum stays at zero,
   which the still shows for one transfer only · **still**: the config lists
   the charging sequences of 18.2 as the transfers that may move, and here
   the count transferred is what matters and the reader sets it, so the
   figure answers its slider and registers no cycle · electrons transferred
   from the cloth to the amber (0 to 3, default 2, ink; the book draws the
   amber with two protons and two electrons and the cloth with three and
   three, and its panel (c) is two transferred, so those are the counts and
   the default) · "Two electrons have moved from the cloth to the amber: the
   amber holds −2 q_e, the cloth +2 q_e, and the total is still zero." · none
   · 2D. Bodies in ink; the charges in them as `F.el('p+')` and `F.el('e-')`
   dots with their signs, a legend naming each once; each body's net charge
   in the charge hue beside it. Readout:
   $\kqtot = \kq_{\text{amber}} + \kq_{\text{cloth}} = (-2\kqe) + (+2\kqe) = 0$.
   Draws charge.
7. `sim-pair` · replaces Figure 18.9 (a)(b), the pair created and
   annihilated · conservation-of-charge, charge-of-electron-and-proton ·
   value add: flow by animation, the reader sees energy arrive and become
   two particles that fly apart, or two particles meet and become energy,
   with the total charge written before, during and after, which the two
   still panels leave to the imagination · **moving**: the event has a
   before and an after and the pair travels, so the idea has a clock in it,
   as `ch18/config.md` allows for this figure; one cycle of about five
   seconds, held 1.2 s · a choice of the event, creation or annihilation, the
   book's two panels (rule 26.1); no slider, since the book gives the event
   no number to vary and a slider for the energy would only add what the
   section does not teach; a Labels button, off by default, because the two
   names would sit on particles that travel (rule 26.7), with hover names on
   both at every moment · "Energy arrives, and out of it come an electron
   and an antielectron: the total charge is zero before and zero after." ·
   none · 2D. The electron is `F.el('e-')` filled; the antielectron, which the
   palette has no key for, keeps the electron's hue and is hollow, told by
   its label $e^+$, a variant by decoration; the energy is the book's wide
   ink arrow, since energy is not bound on this page. Readout: $\kqtot = 0$
   before and $\kqtot = (-1)\kqe + (+1)\kqe = 0$ after, with
   $\Delta m = 2m_{\text{e}} = E/c^2$ written plain. Draws charge.

Photographs: two kept (18.3, 18.6), none dropped; the section has no
splash image of its own. Figures that serve exercises: none in this section.

Extra simulations (rule 15), thought through, judged and left:

- A coulomb counter, a slider for a charge from nanocoulombs to coulombs
  with the number of electrons it takes. Left: the relation is one division
  the readout of `sim-atom` already writes, and the slider positions would
  look alike, a number changing under a picture that does not (rule 24.9);
  the two keyed problems drill it.
- The three latex spheres of the second AP item colliding and separating.
  Left: how identical spheres share charge is 18.2's charging by contact,
  and a figure for it here would answer the item.
- A balloon on a sweater, the PhET's scene. Left: `sim-rubbing` is the same
  transfer with the book's own bodies.

Figure pass, 2026-09-15 (Claude Fable 5.1). `sim-rods-and-silk`: the silk cloth, which had been an irregular blob, is now a draped cloth, pinched where the thread holds it, widening as it hangs, with a scalloped hem and three faint folds, so it reads as a cloth without its label; the swing's arc arrow has a larger head; the body brought near in the two-cloths case is named "a second cloth, brought near". `sim-rubbing` takes the same cloth. `sim-atom`, `sim-quarks` and `sim-pair` were looked at in both themes and at every control and left as built.

## Exercises

- 1 conceptual question inline: `cq1` (fs-id2222446, why most objects show
  no static electricity), a short Understand check on the passage that says
  matter holds equal numbers of both charges, set after
  `electrons-and-protons` with a host in the text.
- 1 conceptual question at the end: `cq2` (fs-id1714026, why objects hold
  nearly equal numbers), Understand. Both approaches are AI-written and
  marked.
- 11 AP items, all at the end, in the book's order `ap1` to `ap11`. Six are
  keyed: `ap1` (fs-id1943517, keyed (b)), `ap3` (fs-id2013498, keyed (c)),
  `ap5` (fs-id1306825, keyed (a)) and `ap7` (fs-id1049967, keyed (b)) are
  graded choices; `ap9` (fs-id1337782) keys three numbers and one sentence
  and is a multi with parts (a), (b) and (d) and the book's part (c) in its
  solution; `ap11` (fs-id1409750, W X Y Z) keys a sentence and is an open
  item with the book's answer. Five are unkeyed and are open items with
  their options as printed and an AI-marked approach: `ap2` (fs-id3322928,
  select two, its options carried as an HTML table in the prompt), `ap4`
  (fs-id1456969), `ap6` (fs-id1450214), `ap8` (fs-id2399594, select two)
  and `ap10` (fs-id1860256, three numeric parts).
- 2 problems keyed and kept: `p1` (fs-id2878870, the electrons in −2.00 nC
  and in 0.500 μC, keyed $1.25 \times 10^{10}$ and $3.13 \times 10^{12}$, a
  multi) and `p3` (fs-id1969597, the starter motor, keyed −600 C).
- 2 problems left out, having no answer in the book's key: the pocket
  calculator (fs-id1893695) and the lightning bolt (fs-id2272902); named in
  `notes` and `exercise_notes`.
- Nothing is taken from another section and nothing is held back; the items
  that lean on 18.2's ideas stay here as `ch18/exploration.md` decided.
- No generated questions: every node has a book exercise that tests it.
- Weights: `ap3`, `ap5`, `ap7`, `ap8` and `ap11` give
  `attraction-of-neutral-objects` weight 2 beside the full value for the 18.1
  concept they turn on, since the neutral object is one option or one line
  of each; `ap2` gives `elementary-charge` 3 beside `conservation-of-charge`;
  `ap4` and `ap10` give `charging-by-contact` 2; `ap1`, `ap6` and `cq1` give
  their second concept 2.

## Views

- Formulas: the three equations of the section already in `chapter.json`,
  the elementary charge important, the protons per coulomb and the mass from
  energy not.
- Definitions: the six variables of the section and six glossary terms.
- Concept map: the seven nodes above with their edges into 1.1, 1.2, 4.1,
  4.8 and 7.6, and 18.2's two placeholders reached by the exercises.

## Colour

The page binds charge alone, as `ch18/COLOR.md` says of 18.1: every
simulation states a charge in its readout and `sim-rods-and-silk` carries a
charge slider. The particles of `sim-atom`, `sim-rubbing` and `sim-pair` are
the element palette's electron, proton and neutron; the quarks of
`sim-quarks` are the categorical palette. Distances, counts, the masses, the
energy $E$ and the speed of light $c$ are ink; the readout of `sim-pair`
writes $E$ and $c$ plain so that energy and velocity stay unbound, though the
prose writes them with their macros as the equation row does, and they render
in ink there because nothing on the page binds them.

## Wanted at chapter level

- variables `q` → 18.1-electrons-and-protons
- variables `q_e` → 18.1-electrons-and-protons
- variables `Δm` → 18.1-pair-creation
- variables `E` → 18.1-pair-creation
- variables `c` → 18.1-pair-creation
- variables `m_e` → 18.1-pair-creation
- equations `eq-elementary-charge` → 18.1-electrons-and-protons
- equations `eq-protons-per-coulomb` → 18.1-electrons-and-protons
- equations `eq-mass-from-energy` → 18.1-pair-creation
- The element palette has no key for an antiparticle; `sim-pair` draws the
  antielectron in the electron's hue, hollow. If the app adds a key
  (`e+`), the figure should take it.

**Applied by the chapter pass (2026-09-15).** Every anchor above is written:
`q` and `q_e` and the two equations of the elementary charge at
`18.1-electrons-and-protons`, and `Δm`, `E`, `c`, `m_e` and
`eq-mass-from-energy` at `18.1-pair-creation`. The element palette still
names no antiparticle, so `sim-pair` keeps the antielectron in the electron's
hue, hollow; the request for an `e+` key is recorded in `ch18/COLOR.md` and
in `config.md`, and the figure takes the key if the app adds one.

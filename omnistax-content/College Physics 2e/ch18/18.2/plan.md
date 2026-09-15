# Plan: 18.2 Conductors and Insulators (m42306)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves without check-ins; the per-section stop of rule 2, the plan review of
rule 5 and the user picks of rule 15 are replaced by this file, written
before the section was built and left for review after, as `ch18/config.md`
records.

The section that says which materials let charge move and which hold it
where it is, and then uses that difference three times: to charge a body by
touching it, to charge one without touching it, and to explain why a charged
object attracts a neutral one at all. Six book figures (one splash
photograph dropped, four diagrams, one photograph inside the Check Your
Understanding box), no worked example, no equation and no variable of its
own, seven glossary terms, nine AP items (four keyed), six conceptual
questions, five problems (three keyed). One page (rule 11).

## Sub-concepts (page headers)

The module prints two headers of its own, Charging by Contact and Charging
by Induction, and they are kept as the book writes them. The opening
passage defines the conductor and the insulator and carries an idea of its
own, so it gets a header before the book's first, and the closing passage on
polarization and the net attraction of a neutral object carries another, so
it gets a header after the book's last, as `ch18/config.md` allows.

1. `conductors-and-insulators` **Conductors and insulators** (book: the two
   opening paragraphs, the free electrons, the ions in salty water, and the
   $10^{23}$ times slower charges of an insulator).
2. `charging-by-contact` **Charging by Contact** (book's header: Figure
   18.11 and the two paragraphs on the electroscope and the repulsion in its
   leaves).
3. `charging-by-induction` **Charging by Induction** (book's header: the
   three paragraphs on the two touching spheres, on induced polarization and
   on the grounded sphere, with Figures 18.12 and 18.13).
4. `polarization-and-attraction` **Why a charged object attracts a neutral
   one** (book: Figure 18.14, the paragraph on straw, combs and paper and
   the paragraph on the shifted distribution of charge and on polar
   molecules, closing on the Check Your Understanding box and its
   photograph, Figure 18.15).

Learning objectives, the section summary and the glossary come out of the
running text into the tables and the views (rule 4); the seven glossary rows
are already in `chapter.json`. Cross references are plain text, as the rest
of the book writes them. The PhET note (John Travoltage) is dropped and
named in `notes`.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| conductor | idea | conductors-and-insulators | the definition; the free electrons and free ions; AP item 7 |
| insulator | idea | conductors-and-insulators | the definition against the conductor; the glass rod that must touch; conceptual question 4 |
| charging-by-contact | idea | charging-by-contact | Figure 18.11 in its three panels; AP items 1 and 9 |
| charging-by-induction | idea | charging-by-induction | Figures 18.12 and 18.13; AP items 1, 3, 6, 7, 8 and 9 |
| grounding | idea | charging-by-induction | Figure 18.13(b) and (c); conceptual question 6; AP items 5, 6 and 8 |
| polarization | idea | charging-by-induction | Figures 18.12(b), 18.13(a) and 18.14; AP items 2, 3 and 4 |
| attraction-of-neutral-objects | result | polarization-and-attraction | Figure 18.14; the Check Your Understanding box; conceptual questions 3 and 4 |

The section leans on `electric-charge`, `like-charges-repel`,
`charge-of-electron-and-proton`, `charge-separation-by-rubbing` and
`conservation-of-charge` (18.1), on `force` (4.1) and `weight` (4.5) for the
leaves of the electroscope, and on `count-charges-from-charge` and
`elementary-charge` (18.1) for its five problems, which count electrons and
protons and are tagged with those nodes, as `ch18/exploration.md` decided.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders
and choices · headline · graph · 3D

1. `sim-conductor-insulator` · **Sim**, replacing nothing the book draws
   (its one image here, the laptop adapter of Figure 18.10, is a splash
   photograph and is dropped) · conductor, insulator · value add: flow by
   animation and variation by choice, the reader puts a patch of extra
   electrons on one end of a piece of material and watches them spread
   through a metal, drift as ions through salty water and stay where they
   were put in glass, which is the whole difference between the two words
   and which the section states only as a ratio of speeds · **moving**: the
   definition of a conductor is that charge moves through it, and the
   section gives the difference as a rate, that charges in an insulator move
   as much as $10^{23}$ times more slowly than in a conductor, so the idea
   has a time in it and the figure registers a cycle of about five seconds
   and takes the app's transport (rule 14; `ch18/config.md` decides motion
   per figure and this reason is the one it asks for). The true ratio is far
   too large to draw, so the drift in the insulator is exaggerated and the
   readout states the true figure and says that the picture is slowed
   (rule 28.4) · a choice of the material, copper, salty water and glass
   (rule 26.1); $\kq$, the charge placed on the left end (1 to 20 nC,
   default 10, charge) · "Ten nanocoulombs of extra charge is placed on the
   left end of the copper: the free electrons carry it through the metal
   within a moment and it spreads over the whole piece." · none · 2D. The
   piece of material is ink; the free electrons are `F.el('e-')`, the ions
   of salty water `F.el('Na')` and `F.el('Cl')`, each named once in a
   legend; the charge placed and the charge left at each end are stated in
   the charge hue. Labels: four, on. Draws charge.
2. `sim-electroscope` · replaces Figure 18.11 (a)(b)(c), the electroscope
   charged by a glass rod · charging-by-contact, conductor, insulator ·
   value add: variation by choice and slider, the reader steps through the
   three panels and sets how much charge the rod carries, and the leaves
   separate by an angle that answers it, so the repulsion the book names is
   something the reader can make larger and smaller instead of reading once
   · **still**: each of the book's three panels is a settled state, the
   leaves hanging where the electrostatic force and their weight hold them,
   and what the reader wants is which state and how far the leaves stand
   apart, so the figure answers its controls and registers no cycle · a
   choice of the step, rod brought near, rod touching the ball, rod removed,
   the book's three panels (rule 26.1); $\kq$, the charge on the rod (1 to
   12 nC, default 6, charge) · "A glass rod holding +6.0 nC is brought near
   the ball: electrons are drawn up to the top, the leaves are left positive
   and repel, and they stand 14° apart." · none · 2D. The jar, stem and
   leaves are ink with the book's + and − marks on them; the electrons drawn
   to the top are `F.el('e-')`; the net charge of the leaves is stated in the
   charge hue. Labels: five, on. Draws charge.
3. `sim-induction-spheres` · replaces Figure 18.12 (a)(b)(c)(d), the two
   touching spheres charged by induction · charging-by-induction,
   polarization, conductor · value add: flow by animation, the reader
   watches the electrons of the two spheres run to the near one as the rod
   comes up, the spheres part with what they hold, and the rod go away
   without having lost anything, which is the argument of the passage and
   which four still panels leave to the imagination · **moving**: the book's
   four panels are four moments of one event, the charge crosses from one
   sphere to the other and the spheres are separated in a particular order,
   so the idea has a clock in it, as `ch18/config.md` allows for this figure
   because the transfer is the idea; one cycle of about six seconds, held
   1.2 s · $\kq$, the charge on the rod (1 to 12 nC, default 6, charge); no
   second slider, since the rest of the event is an order of steps and not a
   quantity · "The rod is brought near, and the electrons of both spheres
   run to the near one: the left sphere is left negative and the right one
   positive, though the two together are still neutral." · none · 2D.
   Spheres and rod in ink with the book's marks; the electrons that cross
   are `F.el('e-')`; each sphere's net charge in the charge hue. Labels:
   four, on, and none of them sits on a thing that travels. Draws charge.
4. `sim-induction-ground` · replaces Figure 18.13 (a)(b)(c)(d), one sphere
   charged by induction through a ground wire · charging-by-induction,
   grounding, conductor · value add: variation by choice, the reader holds
   any one of the four steps and reads what the sphere holds at that moment,
   and can go back a step, which is what the passage asks the reader to keep
   track of: the ground connection is broken before the rod is taken away,
   and taking them away in the other order leaves the sphere neutral ·
   **still**: the reader picks the step and the question at each step is
   what the sphere holds, not how fast the charge got there; the transfer
   itself is drawn moving in `sim-induction-spheres`, and a second clock
   would say nothing new (rule 24.9) · a choice of the step, rod near, rod
   near and grounded, ground broken, rod removed, the book's four panels,
   and a second choice of the order in which the rod and the ground wire are
   taken away, the book's order and the other one, which is the point of the
   passage (rule 26.1); $\kq$, the charge on the rod (1 to 12 nC, default 6,
   charge) · "The ground wire is attached while the rod is near: electrons
   come up out of the earth to the sphere, and the sphere holds −6.0 nC." ·
   none · 2D. Sphere, stand, rod and ground wire in ink with the book's
   marks; the electrons that come up from the earth are `F.el('e-')`; the
   sphere's net charge in the charge hue. Labels: five, on. Draws charge.
5. `sim-polarization` · replaces Figure 18.14 (a)(b)(c), a charged rod near a
   neutral insulator and near a neutral conductor · polarization,
   attraction-of-neutral-objects, insulator, conductor · value add:
   variation by slider, the reader brings the rod closer and watches the
   molecules turn, the near charges come nearer and the far ones go farther,
   and reads the two pulls the book compares, the attraction of the near
   unlike charges and the weaker repulsion of the far like ones, so the net
   attraction is something to watch grow rather than a sentence to believe ·
   **still**: a polarized molecule has turned as far as the rod turns it and
   stays there, so the figure answers its controls and registers no cycle ·
   a choice of the panel, positive rod near an insulator, negative rod near
   an insulator, charged rod near a conductor, the book's three (rule 26.1);
   the distance from the rod to the neutral object (2 to 10 cm, default 4,
   ink); $\kq$, the charge on the rod (1 to 12 nC, default 6, charge) ·
   "A rod holding +6.0 nC is held 4.0 cm from a neutral insulator: every
   molecule turns its negative end toward the rod, and the nearer unlike
   charges are pulled harder than the farther like ones are pushed, so the
   object is attracted." · none · 2D. Rod and object in ink with the book's
   marks; the molecules are drawn as the book draws them, a pair of lobes
   with a + end and a − end, in ink, since a molecule of no named substance
   has no element key. The page binds charge alone (`ch18/COLOR.md`), so the
   two pulls are drawn as ink arrows of different length and named, and no
   force is stated as a number, since Coulomb's law is 18.3's. The net charge of the object stays
   zero and is stated in the charge hue. Labels: five, on. Draws charge.
6. `fig-water-stream` · Figure 18.15, the bent stream of water · photograph,
   **kept**: it is the Check Your Understanding box's own photograph and the
   question is about it; the book prints it with no caption, so the row
   carries none; width 200 as the book prints it.

Photographs: one kept (18.15), one dropped, the laptop adapter of Figure
18.10, which is a splash image at the head of the section and is named in
`notes`. Figures that serve exercises: the balloon and sphere and the rod
and the two suspended metal balls, the two unnumbered images inside the AP
items, travel on the `figure` field of the cards that refer to them, as
`ch18/config.md` decided; the balloon and sphere is carried by all five
cards of its group, since each is read on its own.

Extra simulations (rule 15), thought through, judged and left:

- A charge placed on a sphere spreading over its surface. Left: where the
  excess charge of a conductor sits is 18.7's first property, and a figure
  for it here would answer that section's question.
- The leaves of the electroscope used as a meter, brought near objects of
  unknown charge, which is the second conceptual question. Left: it is the
  question, and `sim-electroscope` already draws the leaves answering a
  charge.
- A comb picking up pieces of paper. Left: `sim-polarization` is the same
  attraction with the book's own bodies.

Figure pass, 2026-09-15 (Claude Fable 5.1). `sim-electroscope`: the leaves, which had been two thick strokes like a wishbone, are now thin tapered foils hung from the foot of the stem with their marks on the outer faces, and the leaves' label sits beside the lower leaf. `sim-induction-spheres`: the rod, taken away in the last moment, now stops at the canvas edge instead of leaving it. `sim-polarization`: the two pulls were floating in a band under the object with the attraction's head hidden under its own label; they are now set under the two faces whose charges feel them, the attraction under the near face toward the rod and the weaker repulsion under the far face away from it, each with a clamped label below it; the distance is dimensioned in the gap above the bodies' centre line; the rod's name stands to its left and the object's above it, so neither meets the net-charge line at the top right at any distance; the canvas is 600 tall. `sim-conductor-insulator` and `sim-induction-ground` left as built.

## Exercises

- 1 Check Your Understanding inline: `cyu1` (fs-id1824436, why the stream of
  water bends toward the charged rod), Understand, set after
  `polarization-and-attraction` with a host in the text, its answer the
  book's own. It points at Figure 18.15, which stands above it in the text.
- 6 conceptual questions at the end, `cq1` to `cq6`, in the book's order,
  none keyed; every approach is AI-written and marked.
- 9 AP items at the end, in the book's order `ap1` to `ap9`. Four are keyed
  graded choices: `ap2` (fs-id2066915, keyed (c)), `ap4` (fs-id2026590,
  keyed (c)) and `ap6` (fs-id2143149, keyed (b)); `ap8` (fs-id1929188) keys
  four sentences and is an open item carrying the book's answer. Five are
  unkeyed and are open items with their options as printed and an AI-marked
  approach: `ap1` (fs-id1741542), `ap3` (fs-id2058933), `ap5`
  (fs-id2008081), `ap7` (fs-id1737616) and `ap9` (fs-id1527236). `ap2` to
  `ap6` read one figure and one setup, which is repeated on each card that
  needs it, as `ch18/config.md` asks.
- 3 problems keyed and kept: `p1` (fs-id2853264, the speck of dust in a
  precipitator, keyed $1.03 \times 10^{12}$), `p3` (fs-id1606617, the ball
  of copper, keyed $9.09 \times 10^{-13}$) and `p5` (eip-59, the plutonium,
  keyed $1.48 \times 10^{8}$ C).
- 2 problems left out, having no answer in the book's key: the amoeba
  (fs-id1966351) and the piece of sulfur (fs-id855344); named in `notes` and
  `exercise_notes`.
- The five problems count electrons and protons, which is 18.1's
  `count-charges-from-charge`, and they stay where the book prints them and
  are tagged with that node, as `ch18/config.md` decided; nothing is taken
  from another section and nothing is held back.
- No generated questions: every node has a book exercise that tests it.
- Weights: `ap1`, `ap3`, `ap5` and `ap9` give their second concept weight 3
  and their third weight 2; `cq3` gives `polarization` 3 beside
  `attraction-of-neutral-objects`; `p1`, `p3` and `p5` give `conductor`
  weight 2 beside the 18.1 node they turn on, since the material each names
  is one word of the problem.

## Views

- Formulas: none; the section states no equation.
- Definitions: no variable of its own and the seven glossary terms.
- Concept map: the seven nodes above with their edges into 18.1, 4.1 and
  4.5.

## Colour

The page binds charge alone, as `ch18/COLOR.md` says of 18.2: four of the
five simulations carry a charge slider and every one of them states a charge
in its readout. The electrons that cross in every figure are the element
palette's electron and the ions of salty water its sodium and chlorine; a
sign is told by the book's + and − marks and by which way an arrow points,
never by a hue. The distances, the counts and the angle the leaves stand
apart are ink, and no force is given a number or a hue anywhere on the page,
since Coulomb's law is 18.3's.

## Wanted at chapter level

- The section has no variable and no equation of its own, so it asks for no
  anchor.
- `ch18/COLOR.md` tells a page to draw a proton with `F.el('H')` and an
  electron as an ink dot; the app named the particles on 2026-09-14 and this
  page uses `F.el('e-')`, as `notes-ch18.md` says, so the correction the
  chapter pass already owns covers this section too.

**Applied by the chapter pass (2026-09-15).** The section asked for no
anchor and wanted none. `ch18/COLOR.md` is corrected: it now says that the
app named `e-`, `p+` and `n0` on 2026-09-14 and that the earlier instruction
to draw a proton with `F.el('H')` and an electron as an ink dot is
superseded. Every figure of the chapter that draws a particle uses the
particle keys, this section's electroscope and induction scenes among them.

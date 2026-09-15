# Plan: 22.2 Ferromagnets and Electromagnets (m42368)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves without check-ins; the per-section stop of rule 2, the plan review of
rule 5 and the user picks of rule 15 are replaced by this file, written
before the section was built and left for review after, as `ch22/config.md`
records.

The section that turns magnetism from a property of certain rocks and bars
into a consequence of moving charge. It names the ferromagnetic materials,
explains magnetization by the growth and alignment of domains, gives the
Curie temperature above which the alignment cannot be held, introduces the
electromagnet and Oersted's discovery, and closes on the sentence the rest
of the chapter is built on: electric current is the source of all magnetism.
It carries no equation, no variable and no worked example. Seven numbered
book figures, two boxed items (the Electric Currents and Magnetism note and
the PhET link), seven glossary terms, six AP test prep items and nothing
else. One page (rule 11).

## Sub-concepts (page headers)

The module prints three headers of its own and `ch22/config.md` keeps them
as the book writes them (rule 3), so none of the three is the agent's.

1. `ferromagnets` **Ferromagnets** (book: the paragraph naming iron, cobalt,
   nickel, gadolinium and the rare earth alloys; Figure 22.7, the iron bar
   magnetized between two magnets; the paragraph on domains with Figure
   22.8; the paragraph on demagnetization and the Curie temperature).
2. `electromagnets` **Electromagnets** (book: Oersted and the deflected
   compass needle; Figure 22.9, the MRI machine; Figure 22.10, the iron
   filings round a coil and round a bar magnet; the paragraph on
   ferromagnetic cores with Figure 22.11; the paragraph on memory devices
   with Figure 22.12).
3. `current-source` **Current: The Source of All Magnetism** (book: the
   paragraph on submicroscopic currents with Figure 22.13; the paragraph on
   monopoles; the boxed note Electric Currents and Magnetism).

Learning objectives, the section summary and the glossary come out of the
running text into the tables and the views (rule 4); all seven glossary rows
are already in `chapter.json`. The section names Chapter 20's current and
the sections that come later in this chapter in the book's own words, as
plain text with no link (`ch22/config.md`). The PhET item Magnets and
Electromagnets is dropped and named in `notes`.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| ferromagnetic-materials | idea | ferromagnets | the opening paragraph; Figure 22.7; the glossary terms ferromagnetic and magnetized |
| magnetic-domains | idea | ferromagnets | Figure 22.8 in its three panels; the third and fifth AP items |
| curie-temperature | result | ferromagnets | the paragraph on demagnetization, with iron's 1043 K; the glossary term |
| electromagnet | idea | electromagnets | Oersted's compass needle; Figure 22.10, the filings round a coil beside the filings round a magnet; Figures 22.9, 22.11 and 22.12 |
| current-is-the-source-of-magnetism | idea | current-source | the boxed note; Figure 22.13; the paragraph on monopoles |

The section leans back on 22.1's `magnetic-poles` and `no-magnetic-monopoles`
and on Chapter 20's `electric-current` and `conventional-current`, and every
later section of the chapter leans on `current-is-the-source-of-magnetism`.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders
and choices · headline · graph · 3D

1. `sim-magnetize` · replaces Figure 22.7, the iron bar between two magnets
   · ferromagnetic-materials · value add: variation by choice, the reader
   does to the iron each of the things the book's one sentence lists, heats
   and cools it, taps it cold, or neither, and then takes the magnets away
   and sees whether the magnetization stays; the book draws one outcome and
   names the treatments in passing · **still**: the iron between two magnets
   is magnetized for as long as they are there, and what the figure reports
   is the state the treatment leaves, not the path to it, so it answers its
   controls and registers no cycle (rule 14) · a choice for what is done to
   the iron (left alone, tapped, heated, which the readout spells out as
   tapped while cold and heated and then cooled), a choice for the magnets
   (in place, taken away) and the gap between the iron and each magnet (1 to
   6 cm, default 2, ink, greyed out once the magnets are taken away, since
   the gap then has no consequence) · "Heated between the magnets and then
   cooled, the iron keeps its poles after the magnets are taken away." ·
   none · 2D, flat: three ink bars in a row on the plane of the page, as the
   book draws them (rule 28.1). The two original magnets and the iron are
   ink with their poles lettered; the field that crosses the gaps is drawn
   in the field hue, and the iron's induced poles are lettered S under the
   end nearest the north pole of the magnet on its left and N under the end
   nearest the south pole of the magnet on its right, which is the
   arrangement the caption states; the letters sit below the bar rather than
   inside it, because the domain arrows fill the bar. Each gap is bracketed
   and the left bracket carries the measure. No force arrow is drawn, since
   this page binds no force (`ch22/COLOR.md`); the attraction between the
   bars is said in the caption and in the readout instead. Readout: what was
   done, where the magnets are, and whether the iron is a magnet now.
   Labels: five, all on (rule 26.7). Draws magnetic-field.
2. `sim-domains` · replaces Figure 22.8, the same piece of iron with random
   domains, with aligned domains and as a single domain · magnetic-domains,
   curie-temperature · value add: flow by animation and variation by slider,
   the reader raises the external field and watches the favourably oriented
   domains grow at the expense of the rest while the others swing into line,
   which is the growth the book's three panels can only stand still for, and
   then raises the temperature past 1043 K and watches the thermal motion
   take the alignment apart again · **moving**: the growth of a domain and
   the swing of its neighbours is a process in time and not a state, and
   `ch22/config.md` names it as one of the chapter's five moving ideas; one
   loop takes the sample from the random state to the state the two sliders
   command and holds it · the external magnetic field (0 to 50 mT, default
   20, which carries the sample to the book's panel (b) on load while 0
   leaves it in panel (a), `magnetic-field`) and the temperature of the iron
   (300 to 1300 K, default 300, `temperature`, with iron's Curie temperature
   of 1043 K, the book's own number, marked on the slider's track as a soft
   detent and drawn as a line the sample crosses) · "In a field of 30 mT at
   300 K the domains pointing along the field have grown to hold four fifths
   of the sample." · none · 2D, flat: the book's own square of iron, its
   domains drawn as cells with a small ink arrow in each (rule 28.1). Cells
   are ink and never tinted, as `ch22/COLOR.md` requires of a body; the
   external field is drawn as arrows in the field hue across the sample, and
   the sample's own poles are lettered N and S when the alignment is strong
   enough to give it any. Readout: the field, the temperature, the share of
   the sample lying along the field and the number of domains left, with a
   second line saying that above the Curie temperature no field holds the
   alignment. Labels: four, all on, with the temperature drawn on a column
   of its own beside the sample and the Curie temperature ruled across it.
   Draws magnetic-field and temperature. **This page binds `temperature`,
   which `ch22/COLOR.md` does not list for 22.2**: the Curie temperature is
   the section's third learning objective and its one result, and a figure
   that shows it must carry a temperature the reader can raise, so the
   slider and the readout wear Chapter 13's hue rather than standing in ink.
3. `fig-mri` · Figure 22.9, the MRI machine · photograph, **kept**: the text
   points the reader at it in the sentence that lists what electromagnets
   are used for, "See Figure 22.9" (`ch22/config.md`); width 300 as the book
   prints it, with the book's caption and its credit to Bill McChesney.
4. `fig-filings` · Figure 22.10, iron filings round a current-carrying coil
   and round a bar magnet · photograph, **kept**: the whole argument of the
   section's second half is that the two patterns are the same, and a
   drawing of filings would be a worse witness than the photograph of them
   (`ch22/config.md`); width 300 as the book prints it.
5. `sim-electromagnet` · replaces Figure 22.11, the coil wound round a
   ferromagnetic core · electromagnet · value add: variation by slider and
   depth, the reader turns the current up and down, adds and removes turns
   and puts the iron core in and takes it out, and watches the field at the
   ends grow, weaken and reverse, which the book's single small drawing
   cannot show · **still**: a coil carrying a steady current holds a steady
   field, and the figure reports that state; nothing in it has a clock (rule
   14) · the current in the coil (−4 to 4 A, default 2, `current`; the sign
   is on the slider rather than in a choice because reversing it is a
   continuous pass through zero and the reader should see the field die away
   and come back the other way), the number of turns (4 to 20, default 10,
   ink) and a choice of core (iron, none) · "Ten turns carrying 2.0 A round
   an iron core make a magnet with its north pole at the right-hand end." ·
   none · **a locked view** (rule 28.2; `ch22/config.md` names the
   electromagnet among the chapter's locked views): the book prints the coil
   in perspective, and a helix drawn flat is a row of arcs that no reader
   reads as a winding, but nothing here is learnt by turning the scene, so
   the figure projects from one fixed viewpoint with `F.view`, at yaw 0.55
   and pitch 0.28, and carries no orbit and none of rule 26.2's buttons. The
   core is an ink box with its lit faces shaded, the winding is drawn in the
   current hue with the turns behind the core drawn first and the turns in
   front drawn over it, and the field lines close from one end of the core
   round to the other in the field hue, carrying no arrowhead, as
   `ch22/COLOR.md` asks of a line that closes on itself, with the poles
   lettered N and S so that the reader is told which way the field runs.
   Readout: the current, the turns and the core, with a second line saying
   in words what the section states, that the field grows with the current
   and with the number of turns and is much stronger with the iron core; the
   section prints no equation for the field, which is 22.9's, so the readout
   writes none. Draws current and magnetic-field.
6. `sim-recording` · replaces Figure 22.12, the recording head over a
   magnetic medium · electromagnet · value add: variation by slider and by
   choice, the reader sets the current in the head's coil and watches the
   region under the gap take its direction, and switches between digital
   storage, where a region is magnetized one way or the other, and analog,
   where the strength of the region follows the strength of the current,
   which is the difference the book's caption states in a sentence and does
   not draw · **still**: the strip under the head is drawn with the regions
   already written and the region now being written, which is a state of the
   current in the coil, and an animation of the strip passing would add
   nothing to the idea (rule 14) · the current in the head's coil (−3 to 3
   A, default 2, `current`) and a choice of storage (digital, analog) · "A
   current of 2.0 A writes a region magnetized to the right; in digital
   storage only its direction is kept." · none · 2D, flat: the book's own
   side view of the head above the medium. The head's core is an ink C-shape
   with a gap, its winding is drawn in the current hue, and the regions in
   the medium are ink cells with an arrow in each in the field hue. Readout:
   the current, the storage and what the region under the gap is being
   written as. Draws current and magnetic-field.
7. `sim-atomic-currents` · replaces Figure 22.13, the planetary model and
   the spinning electron · current-is-the-source-of-magnetism · value add:
   intuition and variation by choice, the reader swaps between the two
   models the book draws and reverses the way the charge goes round, and
   sees in every one of the four cases a closed current loop with a north
   pole at one face and a south pole at the other, which is the section's
   argument that a loop can never leave a pole on its own · **still**: the
   models are pictures of an arrangement, and the book itself says neither
   is consistent with modern physics, so setting the electron running would
   claim a motion the section does not stand behind (rule 14) · a choice of
   model (an electron in orbit, an electron spinning) and a choice for the
   way the charge goes round (counterclockwise, clockwise) · "An electron
   going counterclockwise round the nucleus, seen from above, is a clockwise
   current, and the loop has its north pole on its lower face." · none · 2D,
   flat: the book's own two panels, one at a time, the loop drawn as a ring
   seen at a slant so that the field can be shown closing through it in the
   plane of the page rather than as a dot and a cross, which is a convention
   the section has not reached (rule 26.5). The nucleus is drawn with
   `F.el('p+')` and `F.el('n0')` and the electron with `F.el('e-')`, as rule
   7 requires of a named particle, and the sign of the charge is told by its
   label and by the direction of the conventional current, never by a hue.
   The orbit is an ink ellipse, the conventional current runs round it in
   the current hue against the electron's travel, and the field lines close
   through the loop in the field hue, without arrowheads, with N and S
   lettered above and below the loop for its two faces. Readout: the model,
   the way the electron goes, the way the current runs and where the poles
   are. Draws current and magnetic-field.

Photographs: two kept (22.9 and 22.10), none dropped; the section has no
splash image of its own. Figures that serve exercises: the eight small arrow
panels of the fifth AP item are not copied, since `ch22/config.md` carries
that item's table in its prompt as the four lettered rows described in words.

Extra simulations (rule 15), thought through, judged and left:

- Oersted's own experiment, a compass needle under a wire that deflects when
  the current is switched on. Left: the field a current makes is 22.9's
  subject and the direction of it is 22.9's right hand rule, and built here
  the figure would need a rule the page has not reached (rule 26.5).
- A hysteresis loop for the iron of `sim-domains`, the magnetization plotted
  against the applied field as it is raised and lowered. Left: the book
  prints no hysteresis curve anywhere in the chapter and states no law for
  the shape of one, so the graph would carry numbers the book does not stand
  behind (rule 13).

## Types the page binds

`magnetic-field` and `current`, as `ch22/COLOR.md` says this page should
bind, and `temperature`, which it does not: the Curie temperature is the
section's one result and `sim-domains` carries it on a slider and states it
in a readout, so it is a bound type here and the figure is listed above with
the reason. Every gap, count of turns, share of the sample and count of
domains on the page is untyped and in ink, and no body is tinted: a bar
magnet, an iron core, a domain cell and a recording head are ink, and the
electron, proton and neutron of `sim-atomic-currents` wear the element
palette.

## Exercises

Six, all AP test prep, all in the Exercises document (`ch22/config.md`), none
inline, since the module prints no Check Your Understanding box. Three carry
the book's key and are set as graded choices: the compass needle north of a
bar magnet (a), the domains of an iron rod in a strong external field (b),
and the iron and lead blocks (b), whose four options are the book's eight
arrow panels described in words, as `ch22/config.md` directs. Three have no
key and are kept as open items with AI-marked suggested approaches: the
compass carried west along the equator, the steps that make an iron rod
permanently magnetic, and the weather vane compared with a magnetic domain.
No problem and no conceptual question in the module, none held here for a
later section and none of this section's brought forward.

## Wanted at chapter level

Nothing. The section has no variable and no equation, so it asks for no
anchor, and all seven glossary rows and all five concept rows were written
before the build.

**Chapter pass, 2026-09-15.** Nothing was wanted and nothing was done. The
section's rows stood as they were written.

# Plan: 22.5 Force on a Moving Charge in a Magnetic Field: Examples and Applications (m42375)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves without check-ins; the per-section stop of rule 2, the plan review of
rule 5 and the user picks of rule 15 are replaced by this file, written
before the section was built and left for review after, as `ch22/config.md`
records.

One of the three long sections of the chapter. It takes the force law of
22.4 and lets it act for a while: because the magnetic force is always
perpendicular to the velocity it does no work, so the speed never changes
and the path bends into a circle of radius $r = mv/qB$. Everything else in
the section follows from reading that fraction or from tipping the velocity
out of the plane, which turns the circle into a spiral about a field line
and, where the lines crowd together, into a bounce off a magnetic mirror.
The last third of the section is a list of the places this happens: the
aurora, the Van Allen belts, an accelerator, a tokamak, a magnetron and a
mass spectrometer. Ten book images, five equation displays, one worked
example, no glossary entry, eighteen exercises. One page (rule 11).

## Sub-concepts (page headers)

The module prints no header of its own, so all four headers are the agent's
(rule 3). The breaks fall where the book's own subject changes: from the
claim that the path curves, to the number that says how much, to what
happens when the velocity is not perpendicular, to the devices built on it.

1. `curved-paths` **Why a magnetic force bends a path without changing the
   speed** (book: the opening paragraph on cosmic rays and accelerators;
   Figure 22.18, the bubble chamber; the paragraph that argues from
   perpendicularity to uniform circular motion; Figure 22.19, the negative
   charge circling in a field into the page).
2. `radius` **The radius of the circle** (book: $qvB = mv^2/r$; $r = mv/qB$;
   the paragraph on what happens when the velocity is not perpendicular;
   Example 22.2, the magnet on a TV screen).
3. `spirals` **Spirals, mirrors and the belts above the atmosphere** (book:
   the paragraph on electrons following field lines; Figure 22.21, the
   magnetic mirror; the paragraph on the aurora and cosmic rays; Figure
   22.22, the field lines cosmic rays follow; the Van Allen paragraph;
   Figure 22.23, the two belts).
4. `confinement` **Fields built to hold charged particles** (book: the
   accelerator paragraph; Figure 22.24, Fermilab; the tokamak and magnetron
   paragraph; Figure 22.25, the tokamak; the closing paragraph on mass
   spectrometers).

Learning objectives, the section summary and the AP heading come out of the
running text into the tables and the views (rule 4). The section defines no
term, so it adds no glossary row. It names four other places in the book
(Introduction to Magnetism for the aurora photograph, More Applications of
Magnetism twice, and the problem set's own pointer to it), all of them plain
text as `ch22/config.md` asks. It carries no PhET link and no boxed note.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| magnetic-force-does-no-work | idea | curved-paths | the paragraph that answers "So does the magnetic force cause circular motion?"; the first conceptual question |
| circular-motion-in-a-magnetic-field | result | curved-paths | Figure 22.19; Figure 22.18's curved tracks; $qvB = mv^2/r$ |
| radius-of-curvature | result | radius | $r = mv/qB$; the section summary; Example 22.2; four of the problems |
| spiral-along-field-lines | idea | spirals | the paragraph on the component parallel to the field; Figure 22.20 |
| magnetic-mirror | idea | spirals | Figure 22.21; Figure 22.22; Figure 22.23; the aurora paragraph |
| magnetic-confinement | idea | confinement | Figure 22.24; Figure 22.25; the magnetron and mass spectrometer paragraphs |

The section leans on 22.4's `magnetic-force-on-a-moving-charge` and
`right-hand-rule-1`, on Chapter 6's `centripetal-force` and
`uniform-circular-motion`, on Chapter 7's `work-done-by-a-force` for the
no-work argument, and on Chapter 18's `electric-charge`. Chapter 22's own
22.11 leans back on `radius-of-curvature` for its mass spectrometer.

## Figures

id · replaces or Sim · concepts · value add · what moves or still · sliders
and choices · headline · graph · 3D

1. `sim-circle-radius` · **Figure 22.18 + 22.19**, the bubble chamber tracks
   and the negative charge circling in a field into the page · concepts
   magnetic-force-does-no-work, circular-motion-in-a-magnetic-field,
   radius-of-curvature · value add: **animation and variation**. The book
   draws the same scene twice, once as the tracks an experiment leaves and
   once as the mechanism that leaves them, and one live drawing is both: the
   charge runs round its circle leaving the track behind it, with the force
   always turning to stay perpendicular to the velocity. The reader who
   watches the arrows sees what no still drawing states, that the force
   never has a component along the motion and so the speed never changes,
   and the two sliders turn $r = mv/qB$ from a formula into a circle that
   visibly tightens · **moving**, and the idea has the clock in it: the
   period is $2\pi m/qB$ and the figure's loop is one revolution, its length
   set in proportion to the true period, so raising the field both tightens
   the circle and quickens the lap while the speed slider changes the lap
   not at all, which is the fact the rest of the chapter's accelerators rest
   on (rule 14; `ch22/config.md` lists this figure among the five of the
   chapter that have a clock) · the speed of the electron $\kv$ ($4.0$ to
   $8.0 \times 10^7$ m/s, default $6.00 \times 10^7$, velocity) and the field
   strength $\kBmag$ (0.30 to 0.90 T, default 0.500, magnetic-field), the
   two of them the numbers Example 22.2 gives, so the figure loads showing
   the example's own 0.683 mm circle; a choice for the sign of the charge,
   negative as the book draws it or positive, which reverses the circulation
   and nothing else (rule 26.1) · "A negative charge at $6.00 \times 10^7$
   m/s across a 0.500 T field runs round a circle 0.683 mm in radius, once
   every 71.5 ps." · none · **2D, flat**: the field is perpendicular to the
   page and the motion is in the page, which is exactly the case a flat
   drawing states without lying (rule 28.1); the field into the page is
   drawn as the book draws it, as crosses in the field hue, and the legend
   names the mark. One fixed scale, 184 units to the millimetre, taken from
   the largest circle the sliders reach (1.52 mm in radius), with a
   millimetre ruler under the scene so the reader can read the size off it.
   Labels: five, all on; the two vector names ride with their own arrows,
   which are the frame of the figure rather than the names of bodies (rule
   26.7). The charge itself is the book's own unnamed particle, not an
   electron by name, so it wears the charge hue and its sign is told by the
   letter on it, which is what `ch22/COLOR.md` asks of the moving particle in
   every figure of 22.4 and 22.5. Readout:
   $\kq\kv\kBmag = m\kv^2/\kr$ and $\kr = m\kv/\kq\kBmag$ with the live
   numbers, and a second line on the period. Draws magnetic-field, velocity,
   force, charge, position.
2. `sim-isotope-arcs` · **Sim**, replacing nothing the book draws · concept
   radius-of-curvature · value add: **variation by slider**, of the one
   factor the figure above holds fixed. The electron of Example 22.2 has the
   mass it has, so the radius engine can say nothing about $m$; here two
   ions of the same charge enter the same field at the same speed and part
   company because one is heavier, and the reader sets how much heavier and
   watches the gap between the two landing points open and close. This is
   the section's own keyed problem, the oxygen-16 and oxygen-18 of a glacial
   ice sample, and it is the reason the section says the curvature "is
   related to its mass and is measured to obtain mass information"; the
   spectrometer itself, with its velocity selector and its detector, is
   22.11's figure and is not drawn here · **still**: two arcs from one
   source are a state of the field and the speed, and the answer wanted is
   where each one lands, not how long it took to get there; nothing about
   the separation is a fact about time (rule 14) · the mass of the heavier
   ion (17 to 22 u, default 18, ink and untyped, with soft detents at 18,
   20 and 22 so the isotopes of the book's problem can be settled on
   exactly; the range is held there because a heavier ion swings so much
   wider that one fixed scale would leave the default pair of arcs too
   small to read), the field strength $\kBmag$ (1.00 to
   1.60 T, default 1.20, magnetic-field) and the speed $\kv$ ($4.2$ to
   $6.0 \times 10^6$ m/s, default $5.00 \times 10^6$, velocity), the three
   of them the numbers the book's problem gives, so the figure loads on the
   problem's own answer of 0.173 m · "Oxygen-16 and oxygen-18 enter at
   $5.00 \times 10^6$ m/s, cross a 1.20 T field and land 0.173 m apart." ·
   none · **2D, flat**: two semicircles in the plane perpendicular to the
   field, which is the plane of the page (rule 28.1). One fixed scale taken
   from the widest pair of arcs the sliders reach. The lighter ion is
   `F.cat(0)` and the heavier `F.cat(1)`, since both are oxygen and the
   element palette would give them one colour, and `ch22/COLOR.md` names
   this as one of the chapter's two categorical cases; the two arcs are named
   in a key in the corner rather than on the curves, since the curves cross
   and come together as the sliders move (rule 26.6), and the gap between
   the landing points is bracketed in the position hue, with a hover name on
   each landing point giving its radius. Labels: four, all on, plus the key
   and the field legend. Draws magnetic-field, velocity, charge, position.
3. `sim-spiral-mirror` · **Figure 22.20 + 22.21**, the magnet held against a
   screen with electrons spiralling along its field lines, and the magnetic
   mirror that turns a particle back · concepts spiral-along-field-lines,
   magnetic-mirror · value add: **animation and variation**. The book draws
   one thing twice: a charge whose velocity is not perpendicular to the
   field, walking along a field line into a region where the lines crowd
   together. Drawn still, the spiral is a squiggle the reader must take on
   trust; drawn live, the reader sees the turns tighten as the field rises,
   sees the walk along the line slow, stop and reverse, and can make the
   particle escape instead by flattening its entry angle, which is the
   mirror condition stated as a thing that happens rather than a rule ·
   **moving**, and the clock is the bounce: the particle runs in, turns and
   comes back out, and the loop is that round trip (rule 14;
   `ch22/config.md` lists the helix walking into a converging field among
   the chapter's five moving figures) · the angle $\theta$ between the
   velocity and the field where the particle enters (10° to 60°, default
   30°, ink, since an angle is untyped in this book) and the field strength
   at the crowded end $\kBmag$ (0.050 to 0.500 T, default 0.250,
   magnetic-field), the field at the open end being fixed at 0.050 T and
   written on the figure · "Entering at 30° where the field is 0.050 T, the
   charge is turned back where the field reaches 0.200 T, short of the 0.250
   T at the throat." · none · **2D, flat**: the book draws both figures in
   the plane that holds the field lines, and the lesson is the parallel
   component of the velocity, which lives in that plane; a turnable helix
   would put the reader's attention on the shape of the spiral rather than
   on the thing that changes along it, so the locked view
   `ch22/exploration.md` allows the agent to argue for is declined and the
   figure is flat (rule 28.1). The field lines are drawn in the field hue,
   pinched toward the right, and the magnet whose pole crowds them is ink
   with N and S on its ends, which is the book's own Figure 22.20; the
   helix is drawn as the projection of the true motion, its transverse swing
   narrowing as the field rises, with the velocity split into its component
   along the line and its component across it. Labels: seven, all on, and
   the ones on the moving particle ride with it. Readout: $\theta$, the two
   field strengths, the field at the turning point $\kBmag_\text{entry}/
   \sin^2\theta$, and whether the charge is turned back or gets through.
   Draws magnetic-field, velocity, force, charge.
4. `sim-earth-trap` · **Figure 22.22 + 22.23**, the cosmic rays that follow
   Earth's field lines and the two Van Allen belts · concept magnetic-mirror
   · value add: **variation by slider**. The book prints the same
   cross-section of the Earth twice, once with the paths that come in at the
   poles and once with the regions where particles are held, and the
   sentence that joins them is about latitude: a particle arriving near a
   pole runs along the lines and reaches the atmosphere, while one arriving
   at middle latitudes must cross them and is turned away. That is a
   variation, and one drawing with the arrival latitude on a slider says it
   where two stills can only assert it · **still**: where a particle ends up
   is decided by where it arrives and by nothing that happens in time, and
   the bouncing of a trapped particle is the previous figure's clock, not
   this one's (rule 14) · the latitude at which the particle arrives, or at which a trapped particle is turned back (0° to
   80°, default 72°, ink) and a choice between a cosmic ray arriving from
   outside, a particle trapped in the inner belt and one trapped in the
   outer belt, which are the three things the book's two figures show (rule
   26.1); the section states no further quantity here, so the figure carries
   one slider and one choice rather than the two to four sliders the usual
   case has · "A cosmic ray arriving at
   72° of latitude meets the field lines at 9°, almost end-on, so it
   spirals along them and reaches the atmosphere near the pole." · none · **2D, flat**: the
   book draws a cross-section through the Earth and its dipole field, and
   `ch22/exploration.md` settles this pair as flat because a cross-section
   is what makes the belts legible (rule 28.1). Earth is an ink circle, the
   field lines are dipole lines in the field hue, the two belts are faint
   bands named in words, and the particle is one of the protons the book's
   caption names, so it is drawn with `F.el('p+')` from the element palette,
   which root rule 7 and `ch22/COLOR.md` ask for a particle with an identity.
   Labels: five, all on. Readout: the latitude, the angle the arriving
   velocity makes with the field line there, and whether the particle is
   guided in or turned away. Draws magnetic-field and velocity; the charge
   hue is not bound here, since nothing on this figure states a charge.
5. `fig-fermilab` · **Figure 22.24**, the Fermilab accelerator · photograph,
   **kept**: the passage names the orange magnets in it and points the
   reader at the picture to see them, so it shows the thing the paragraph is
   about (`ch22/config.md`); width 250 as the book prints it, and the
   book's credit clause is kept on the caption.
6. `sim-tokamak` · **Figure 22.25**, the tokamak · concept
   magnetic-confinement · value add: **variation by slider**, and the
   arrangement. The book's caption says only that the magnetic fields
   "contain and direct the reactive charged particles", which leaves the
   reader with no reason why a doughnut holds a plasma that a straight tube
   would not. The reason is the section's own equation: the radius of a
   charge's circle about a field line is $mv/qB$, and as long as that radius
   is small against the minor radius of the chamber the particle spirals
   round the ring forever without reaching the wall. Two sliders make that
   visible, and the figure states the true size beside the drawn one · **still**: what
   is asked is how wide the spiral is against the width of the chamber,
   which is a state of the field and the speed; the particle's circuit of
   the ring adds no fact the drawn path does not already carry (rule 14) ·
   the field inside the chamber $\kBmag$ (1.0 to 5.0 T, default 3.0,
   magnetic-field, the range of a working tokamak) and the speed of the
   proton $\kv$ ($2.0$ to $10.0 \times 10^5$ m/s, default $5.0 \times
   10^5$, velocity) · "A proton at $5.0 \times 10^5$ m/s in a 3.0 T field
   circles a field line every 1.74 mm, a 575th of the chamber's half width,
   so it follows the ring round without touching the wall." · none ·
   **2D, locked view** (rule 28.2): the book draws its tokamak diagram in
   perspective, a torus wound with a current-carrying coil, because a
   doughnut cannot be drawn honestly flat; the figure projects it from the
   book's own viewpoint with `F.view` and `F.face` and does not turn, since
   nothing here is an angle the reader must discover and the section is not
   the place where the field a coil makes is explained. The chamber is ink,
   the windings are ink, the field line running round inside the torus is in
   the field hue, and the plasma's proton, drawn with `F.el('p+')` as a
   particle with an identity must be, spirals about it to the scale
   the sliders set, against a bracketed half width of the chamber. The circle
   a deuteron makes is a few millimetres across where the chamber is a metre,
   which is far too small to draw at the chamber's own scale, so the spiral
   is drawn fifty times its true width and the readout states both the true
   radius and the factor drawn, as rule 28.4 asks. Labels: four, all on,
   with a note in the margin stating the factor. Readout: $\kr =
   m\kv/\kq\kBmag$ with the live numbers and the ratio of the true radius to
   the chamber's half width. Draws magnetic-field, velocity, charge,
   position.

Photographs: one kept (22.24, Fermilab), none dropped; the section has no
splash image of its own, and the tokamak's photograph is kept as one of the
two images of the row for Figure 22.25, as `ch22/config.md` asks.

Figures that serve exercises: two, and both travel on the card of the
exercise that refers to them, which is the way `ch22/config.md` sets for
this chapter. The three particle tracks whose signs are asked for go on the
fourth conceptual question, and the two tracks of different radius go on the
fifth; the sixth conceptual question asks about the same picture and is
given the same image, since the book prints one figure for the two
questions.

Extra simulations (rule 15), thought through, judged and left:

- `sim-isotope-arcs` above is the one survivor of this list, and its line
  states the view it opens that the required figures do not.
- A magnetron: oscillating electrons held in a crossed field, making the
  microwaves that cook. Left: the section names it in half a sentence and
  states no result about it, so a figure would have to invent the physics
  the book withholds (rule 13).
- A bubble chamber reading exercise: a track, a known field, and a radius
  the reader measures to get the particle's momentum. Left: it is a figure
  for problems the book does not set here, and the two conceptual questions
  that read tracks already have the book's own images on their cards.
- An aurora: the spiralling particles of the mirror figure arriving at the
  atmosphere and lighting it. Left: the chapter's introduction carries the
  photograph of the real thing, and a drawing of it would be decoration
  beside the mechanism the mirror figure already shows (rule 24.9).

## Types the page binds

`magnetic-field`, `velocity`, `force`, `charge` and `position`, which is
exactly the list `ch22/COLOR.md` gives this page. The mass $m$, the angle
$\theta$, the latitude, the mass number of an ion and every count and ratio
on the page are untyped and in ink, and no body is tinted: Earth is an ink
circle, a bar magnet is ink with N and S on its ends, the tokamak's chamber
and windings are ink, and the two oxygen ions are told apart by `F.cat`,
which `ch22/COLOR.md` names as one of the chapter's two categorical cases.
The dot and cross that stand for a field out of and into the page wear the
field hue, as the chapter's colour plan sets.

## Exercises

Eighteen in the module; twelve are carried.

- Seven conceptual questions, all of them kept, in the Exercises document
  with AI-marked suggested approaches, since the book prints no key for any
  of them (`ch22/config.md`). Two of them carry a book image on the card,
  and a third asks about the second of those images and is given it too.
- Ten problems, of which five carry the book's answer. Four of the five are
  kept: the cosmic ray electron's radius, the antiproton storage field, the
  CRT electron's straightening field and voltage, and the oxygen isotope
  separation. The fifth, the electron in the same field as "the proton in"
  the problem before it, is left out with that problem, because the book
  leaves the proton's field unanswered and the question cannot be read
  without it. The other five have no keyed answer and are left out, as the
  chapter's config sets.
- One AP test prep item, which asks for the direction of the force on a
  current-carrying *wire* in the Earth's field. Force on a wire is 22.7's
  result, so the item is set in 22.7 with `source_section: "22.5"`, and both
  sections' `exercise_notes` say so (`ch22/exploration.md` § Exercises that
  belong to another section).
- No Check Your Understanding box in the module, so the page hosts no
  inline exercise; every exercise it carries is set at the end.
- Every concept node of the section has a book exercise of its own except
  `magnetic-confinement`, which the book tests nowhere in this module; no
  question is generated for it (rule 13), and 22.11's problem set returns to
  it.

## Wanted at chapter level

- variables `r_curv` → 22.5-radius
- variables `m` → 22.5-radius
- equations `eq-magnetic-force-is-centripetal` → 22.5-radius
- equations `eq-radius-of-curvature` → 22.5-radius

**Chapter pass, 2026-09-15.** All four anchors written with `ost set`: the two
variable rows and the two equation rows of the section now carry `22.5-radius`.
The two ions of the separation figure keep `F.cat(0)` and `F.cat(1)`, which
`ch22/COLOR.md` now settles for the chapter: two isotopes of one element share
one element colour, so the categorical palette is what tells them apart, while
a particle the page names, such as this section's proton, keeps `F.el`.

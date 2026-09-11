# Plan: 1.2 Physical Quantities and Units (m42091)

Source: `source.md` (converted from CNXML); the three tables written from
the CNXML itself, since the converter flattened their spanned headers.
Status: built 2026-09-11 without a review stop, on Chen's instruction to
build the whole chapter in one pass.

A long, qualitative section: six photographs (one a splash image), one
sketch, three tables, one worked example, two Check Your Understanding
boxes, one conceptual question and ten problems, five of them keyed. No
AP items, no PhET note. It stays one page (rule 11).

## Sub-concepts (page headers)

The book has five titled runs of text, with three sub-titles inside the
third. Page structure, one block per idea, span ids as the chapter's
anchors expect them:

1. `quantities` **Physical quantities and their units** (book: the
   immense range of physics, a physical quantity defined by how it is
   measured or calculated, units as standardized values, the map in
   unknown units, SI against English units)
2. `si-units` **SI units: fundamental and derived units** (book: Table
   1.1, the four fundamental quantities, derived units as algebraic
   combinations of them)
3. `base-units` **The second, the meter, and the kilogram** (book: the
   three sub-titled passages, kept as `<h3>` sub-headers with the book's
   ids `second`, `meter`, `kilogram`; the atomic clock; light along the
   meter stick; the 2019 kilogram; the ampere deferred to a later
   chapter). The chapter's variables `c` and `t` anchor here.
4. `prefixes` **Metric prefixes and orders of magnitude** (book: the
   metric system, conversions by powers of 10, order of magnitude, the
   note on microscopic standards, Table 1.2). Both Check Your
   Understanding items go inline at the end of this block: the first
   asks for a fundamental unit and a prefix, the second for what a
   milliliter says about derived units, and both need the prefixes.
5. `ranges` **Known ranges of length, mass, and time** (book: the
   paragraph on the vastness of the universe, the phytoplankton, the
   colliding galaxies, Table 1.3). The book prints Table 1.3 after the
   conversion passage, but the table belongs to this paragraph, which
   refers to it and to nothing else, so it is kept here.
6. `conversion` **Unit conversion and dimensional analysis** (book: the
   cookbook and the walking directions, the 80 m to 0.080 km worked
   through in steps, the Appendix C link, Example 1.1, the note on
   nonstandard units). The chapter's equations anchor at `conversion`
   (the 80 m step) and `ex-drive` (average speed).

The order-of-magnitude paragraph reads "Each power of $10$, and so forth
are all different orders of magnitude" in the book itself; it is kept as
printed. The cross-reference to "Accuracy, Precision, and Significant
Figures" at the end of Example 1.1 stays plain text, as the spec asks.

Learning objectives, section summary and glossary come out of the running
text into the views. The conceptual question and the problems go to the
Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| physical-quantity | idea | quantities | glossary; Example 1.1 |
| units | idea | quantities | glossary (units, SI units, English units); CQ 1; every problem |
| fundamental-units | idea | si-units | glossary; Table 1.1; base-units; CYU 1 |
| derived-units | idea | si-units | glossary; CYU 2 |
| metric-prefixes | idea | prefixes | glossary (metric system); Table 1.2; CYU 1 and 2; CQ 1; problems 7, 9 |
| order-of-magnitude | idea | prefixes | glossary; Table 1.3; CYU 1 |
| conversion-factor | idea | conversion | glossary; the 80 m step; Example 1.1; problems 1, 3, 5, 7, 9 |
| unit-conversion | skill, eq-unit-conversion | conversion | Example 1.1; problems 1, 3, 5, 7, 9 |

Example 1.1 also leans on `average-speed` (2.3, a placeholder until that section was built): the
book says to take average speed as given for now.

## Figures

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-light-meter` · replaces Figure 1.18 (the flashlight and the meter
   stick) · fundamental-units · a pulse of light leaves a flashlight at
   the left end of a meter stick and runs along it at the speed of
   light; the stick is drawn 1.5 m long with 10 cm ticks so a longer
   time runs past the meter mark, a bracket under the stick measures the
   distance covered, and the elapsed time is written above the pulse ·
   elapsed time $\kt$ in ns (0.50 to 5.00, step 0.05, default 3.34, time
   hue) · "in 3.34 ns light travels 1.00 m, which is what the meter is
   defined to be" · none · no. Finite motion (the pulse stops where the
   time runs out), one loop in about 5 real seconds, so it gets the
   scrubber. Readout: $d = \kc\,\kt = (299{,}792{,}458\ \text{m/s})(3.34
   \times 10^{-9}\ \text{s}) = 1.00\ \text{m}$; small line on the speed
   of light being exact by definition and the meter being what is
   measured. The pulse is drawn in the velocity hue, the bracket in ink,
   the time label in the time hue. Draws time and velocity.
2. `sim-ladder` · new · metric-prefixes, order-of-magnitude · a
   horizontal logarithmic ladder from $10^{-18}$ m to $10^{26}$ m, a
   tick per decade and a label every three, the prefixes of Table 1.2
   written under their powers of 10 (atto at −18 up to exa at 18, on
   three rows where they crowd), twelve of the lengths of Table 1.3
   marked above the ladder on three staggered rows (proton, hydrogen
   atom, cell membrane, visible light, grain of sand, child, football
   field, Earth, Earth to the Sun, light year, Milky Way, known
   universe), the decade the value falls in shaded, and a marker at
   $m \times 10^{n}$ · mantissa m (1.0 to 9.9, step 0.1, default 4.5,
   ink), exponent n (−18 to 26, step 1, default 2, ink) · "4.5 × 10² m is
   450 m, or 4.5 hm, and its order of magnitude is 10²"; when n has no
   prefix of its own the headline says so and gives the nearest prefix
   below it · none · no. No motion: the figure draws once per slider
   change. Readout: $4.5 \times 10^{2}\ \text{m} = 450\ \text{m}$ (plain
   decimal for |n| ≤ 3, the nearest prefix otherwise); small line: every
   number from 1 × 10² to 9.9 × 10² is of the same order of magnitude,
   10², just as 800 and 450 are. All ink; draws nothing.
3. `sim-drive` · new, for Example 1.1 · unit-conversion,
   conversion-factor, physical-quantity · a car drives from a school at
   the left to a house at the right along a strip marked in kilometers
   while a stopwatch beside the strip counts up; a velocity arrow on the
   car and the speed written in the velocity hue · distance d in km (2.0
   to 40.0, step 0.5, default 10.0, ink), time $\kt$ in min (5 to 60,
   step 1, default 20.0, time hue) · "10.0 km in 20.0 min is 0.500
   km/min, which is 30.0 km/h, or 8.33 m/s" · none: the stopwatch and the
   strip are the graph · no. Finite motion, one run per set time in
   about 5 real seconds, so it gets the scrubber. Readout:
   $\text{average speed} = \frac{10.0\ \text{km}}{20.0\ \text{min}}
   \times \frac{60\ \text{min}}{1\ \text{h}} = 30.0\ \text{km/h}$; small
   line: two more conversion factors, hours to seconds and kilometers to
   meters, turn 30.0 km/h into 8.33 m/s. The stopwatch hand and the
   elapsed time are in the time hue, the speed in the velocity hue.
   Draws time and velocity.

The example gets a figure of its own because it adds what the section
figures do not show: a speed, which is a physical quantity calculated
from two others, and the chain of conversion factors that carries it
from one unit to the next.

Photographs, six:

- Figure 1.15, the Earth from the Moon (credit: NASA): **drop**. It is
  the splash image at the head of the section; nothing in the text
  refers to it. Not copied.
- Figure 1.16, the boy with a map in unknown units: **keep** as
  `fig-map`. The text says "See Figure 1.16", and the caption is the
  point of the passage on units.
- Figure 1.17, the atomic fountain clock (credit: Steve
  Jurvetson/Flickr): **keep** as `fig-clock`. The text says "See Figure
  1.17", and it shows the thing the second is now defined by.
- Figure 1.18, light along a meter stick: a sketch, **replaced** by
  `sim-light-meter`, which keeps the number 1.18, the book's image as
  its original and the book's caption.
- Figure 1.19, the phytoplankton (credit: Prof. Gordon T. Taylor, Stony
  Brook University; NOAA Corps Collections): **keep** as `fig-plankton`.
  The text says "See Figure 1.19 and Figure 1.20"; the two together are
  the range the passage is about.
- Figure 1.20, the colliding galaxies (credit: NASA/CXC/UVic./A. Mahdavi
  et al. Optical/lensing: CFHT/UVic./H. Hoekstra et al.): **keep** as
  `fig-galaxies`, for the same reason.

Figures that serve exercises: none. Problem 10 refers to Table 1.3, which
is in the text.

Extra simulations (rule 15): none proposed. The chapter is qualitative,
and the three figures already open the views the text does not give
(light covering the meter in a set time, a value placed on the ladder of
powers of 10, a speed carried through a chain of conversion factors).

## Tables

Three, written from the CNXML with their spanned headers, every cell as
the book prints it, each in a `div.book-table` numbered as openstax.org
numbers it:

- Table 1.1 Fundamental SI Units (four columns, two rows), in
  `si-units`.
- Table 1.2 Metric Prefixes for Powers of 10 and their Symbols (Prefix,
  Symbol, Value, and Example spanning four columns), in `prefixes`.
- Table 1.3 Approximate Values of Length, Mass, and Time (three spanned
  pairs, a power of ten and a description), in `ranges`, beside the
  paragraph that refers to it rather than after the conversion passage
  where the book prints it.

## Exercises

- 2 Check Your Understanding, open, both inline after `prefixes`, with
  the book's answers: `cyu1` (the hummingbird's wingbeat, citing
  `prefixes`), `cyu2` (a cubic centimeter and a milliliter, citing
  `si-units`).
- 1 conceptual question, `cq1` (advantages of metric units), with an
  AI-written suggested approach.
- 5 problems keyed and kept: `p1` (100 km/h in m/s and mph), `p3` (show
  1.0 m/s = 3.6 km/h; the key is a chain of factors, kept as an open
  answer), `p5` (a soccer field in feet and inches, four parts), `p7`
  (Mount Everest in km), `p9` (a tectonic plate's speed, two parts).
- 5 problems left out, having no answer in the book's key: 2
  (fs-id1544895, 33 m/s), 4 (fs-id1434985, a 100 yd field), 6
  (fs-id3159821, a person 6 ft 1.0 in), 8 (fs-id3158542, the speed of
  sound), 10 (fs-id1564148, the Earth's orbital speed from Table 1.3).
- No AP items, nothing held for a later page, nothing held from 1.1.
- No generated questions: every node has a book exercise, except
  `physical-quantity`, which Example 1.1 uses and no problem tests on
  its own.
- Weights: problem 7 (Everest in km) merely names a prefix, so
  `metric-prefixes` gets weight 1 there.

## Views

- Formulas: eq-average-speed (important, from Example 1.1),
  eq-unit-conversion (the 80 m step, not important). Both already in
  `chapter.json`.
- Definitions: variables `c` and `t`; the twelve glossary terms.
- Concept map: the eight nodes above, with `average-speed` (2.3)
  tagged on Example 1.1 only.

## Colour

The page binds time and velocity, from the two sims that carry a time
on a slider and draw a speed: the pulse of light and the car. Every other
quantity on the page (a length, a mass, a mantissa, an exponent, a
distance in kilometers) is untyped and in ink, as the chapter config
says. No new hue, no new macro.

# Plan: 12.7 Molecular Transport Phenomena: Diffusion, Osmosis, and Related Processes (m42212)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's instruction to finish the book in waves;
the per-section stop of rule 2, the plan review of rule 5 and the user picks
of rule 15 are replaced by this file, written before the section was built
and left for review after, as `ch12/config.md` records.

The section that leaves the pipes behind. Every earlier section of the
chapter moved fluid in bulk, and this one asks how a substance gets anywhere
when nothing is flowing at all: by the random thermal motion of its
molecules, which carries them a distance that grows only as the square root
of the time. It reads the diffusion constants of six molecules off a table,
finds that a glucose molecule needs twenty-one hours to cross a centimeter of
water, argues the direction and rate of diffusion from simple chance, and
then follows diffusion through membranes, where osmosis raises a column of
fluid until the back pressure $ρgh$ stops it, reverse osmosis desalinates
water, and a living membrane spends energy to move things the wrong way.
Four sketch figures (12.26 to 12.29), one table (12.2), no photograph, no
boxed note, one worked example, nine glossary terms, two conceptual
questions and five problems of which three are keyed. One page (rule 11).

## Sub-concepts (page headers)

The module prints three headers of its own, and `ch12/config.md` keeps them
as the book writes them; the four others are the agent's (rule 3), added
where one book header carried several ideas.

1. `diffusion` **Diffusion** (book header; the fishy ice cube and the
   Epsom salt, the random walk and Figure 12.26, the definition of
   diffusion, the paragraph that states $\kxrms = \sqrt{2D\kt}$ and names
   $D$). The variables $\kxrms$, $D$ and $\kt$ and the equation
   `eq-rms-distance` anchor here.
2. `diffusion-constant` **The diffusion constant** (Table 12.2 and the
   paragraph that reads it: $D$ falls with molecular mass, is far smaller
   in water than in air, and rises with temperature because the average
   kinetic energy $\tfrac12 m\kv^2$ is proportional to absolute
   temperature; Example 12.11, How Long Does Glucose Diffusion Take; the
   cornea paragraph). The example is `ex-glucose`.
3. `rate-direction` **The Rate and Direction of Diffusion** (book header;
   the drop of food coloring, free diffusion, the argument from chance,
   Figure 12.27, the rate proportional to the concentration difference and
   to $D$, and the paragraph on blood, tissue, lungs and circulatory
   systems).
4. `membranes` **Osmosis and Dialysis—Diffusion across Membranes** (book
   header; the swollen ankle, the thickness of a membrane, selective
   permeability and Figure 12.28).
5. `osmosis` **Osmosis and dialysis** (the paragraph that defines both and
   names the kidneys).
6. `osmotic-pressure` **The back pressure that stops osmosis** (the
   paragraph on the pressure osmosis can create, Figure 12.29, the 25.9 atm
   of sea water and its 268 m, turgor; the reverse osmosis and reverse
   dialysis paragraph).
7. `active-transport` **Active transport** (the cypress roots, the
   kidneys and the quarter of the body's energy).

The book gives its one example no number in the CNXML; the publisher prints
it as Example 12.11, the chapter's eleventh, by the count `ch12/exploration.md`
confirms. The references to Figures 12.26 to 12.29 and to Table 12.2 are
plain text, since they name this page's own figures; the section names no
other section. Learning objectives, the section summary and the nine
glossary terms come out of the running text into the tables and the views
(rule 4). No exercise is set inline: the chapter has no Check Your
Understanding box, and every section of it sets its items at the end, as
`ch12/config.md` decided.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| diffusion | idea | diffusion | the fishy ice cube, the random walk of Figure 12.26, the glossary term, the perfume problem that shows a smell does not arrive by diffusion |
| random-walk-distance | result, eq-rms-distance | diffusion | the equation, Example 12.11, the summary, every keyed problem |
| diffusion-constant | idea | diffusion-constant | Table 12.2 and the paragraph that reads it; the cornea problem and the gas chromatography problem; the first conceptual question |
| diffusion-rate-direction | idea | rate-direction | Figure 12.27, the argument from chance, the concentration difference |
| semipermeable-membrane | idea | membranes | Figure 12.28, the thickness in meters, the glossary term |
| osmosis | idea | osmosis | the definition against the Epsom salt, the second conceptual question |
| dialysis | idea | osmosis | the definition beside osmosis, the second conceptual question |
| osmotic-pressure | idea | osmotic-pressure | Figure 12.29(b), the 25.9 atm and 268 m of sea water, turgor, reverse osmosis and reverse dialysis in the glossary |
| active-transport | idea | active-transport | the cypress roots, the kidneys, the glossary term |

The section leans on `fluid` (11.1), `distance` (2.1), `mass` (4.2),
`kinetic-energy` (7.2), `pressure` (11.3) and
`pressure-from-weight-of-fluid` (11.4); the coverage rows mark each as used
where the text uses it.

## Figures

id · replaces or Sim · concepts · value add (rule 24.4) · moving or still,
with the reason · sliders and choices with their types · headline · graph ·
3D

1. `sim-random-walk` · replaces Figure 12.26, the random walk from start to
   finish · diffusion, random-walk-distance, diffusion-constant · flow by
   animation (the walk unfolds step by step), variation by choice and
   slider (which molecule in which medium, and how long it walks), and
   intuition: the reader sees three molecules released together scatter
   about a circle whose radius is $\kxrms$, and sees that circle grow as
   $\sqrt{\kt}$ on the graph while the walks themselves thrash about ·
   **moving**: the idea has a clock in it, since what the book asks the
   reader to believe is that the distance grows as the square root of the
   time and not as the time, and `ch12/config.md` names this as one of the
   chapter's three figures that may move. The loop runs the walk from
   $\kt = 0$ to the time on the slider in about five real seconds, holds,
   and starts three new walks, so the reader sees the average hold while
   the individual paths differ · a dropdown for the diffusing molecule and
   its medium, one option per row of Table 12.2 (a discrete state, rule
   26.1; six options would wrap as buttons), default oxygen in water, which
   is the case the text works in words; $\kt$ (0.2 to 5.0 s, default 1.0
   s, time), the time the walk has to run · "After 1.00 s an oxygen
   molecule in water has wandered, on average, 45 μm from where it
   started." · graph beside the scene, since the scene is square: $\kxrms$
   against $\kt$ from 0 to the slider's maximum of 5 s, the curve
   $\sqrt{2D\kt}$ with the moving point on it and a hollow dot for each
   walker's actual distance at the same instant, so the scatter about the
   average is on the graph as well as in the scene · 2D. The distance scale
   of the scene and of the graph's vertical axis is set by the molecule
   chosen, at $\kxrms$ for 5 s, and stated by a scale bar and the tick
   labels; it is fixed against the slider (rule of the figure audit) and
   changes only with the choice, because the six molecules of the table
   differ by a factor of ten thousand in $D$ and one scale would leave five
   of them as a dot. What the reader sees across the choice is the same
   $\sqrt{\kt}$ curve with a scale bar that reads 3 cm for hydrogen in
   air and 4 μm for DNA in water. The slider stops at 5 s rather than
   farther because the book's own case, one second, must not be left a dot
   in the frame. Readout: $\kxrms = \sqrt{2D\kt}$ with the
   live numbers, in meters and in a convenient unit; small line on the
   three walks' actual distances as multiples of $\kxrms$ and on the
   root-mean-square being the average over very many walks. The three
   walkers carry no type and are told apart with `F.cat(i)`, as
   `ch12/COLOR.md` directs, named in a legend and by hover; the circle of
   radius $\kxrms$ wears the position hue. Draws position, time.
2. `sim-concentration` · replaces Figure 12.27, the tube with a region of
   high concentration and one of low · diffusion-rate-direction,
   diffusion-constant · variation by slider: the two concentrations are
   the sliders, and the reader sees the flow of molecules each way across
   the slab and the net flow as their difference, which vanishes when the
   two are equal · **still**: the chapter allows motion only in the random
   walk, and this figure answers its sliders; the arrows across the slab
   are a rate stated as a quantity, drawn in the arrow style of a vector and
   not animated (rule 14; `ch12/config.md`) · $C_1$ (0 to 60 molecules in
   region 1, default 40, ink) and $C_2$ (0 to 60 in region 2, default 10,
   ink); the book has no symbol rows for the concentrations and they are
   untyped, written in plain LaTeX · "Forty molecules in region 1 and ten in
   region 2 send a net flow of molecules to the right, since more leave the
   crowded region than enter it." · none: the tube in section, with the
   molecules scattered through its three regions and the crossing rates
   drawn on the slab, is the picture · 2D. Readout: the section's relation,
   $\text{net rate} \propto D\,(C_1 - C_2)$ with the live numbers, the
   direction stated in words; small line on the rate being highest at the
   start and zero when the concentrations match. The molecules are the
   book's unnamed substance, a drop of food coloring, and carry no identity,
   so they are ink, with a legend naming them. Draws nothing typed; the
   figure is ink.
3. `sim-membrane` · replaces Figure 12.28 (a) and (b), the two kinds of
   semipermeable membrane · semipermeable-membrane · variation by slider
   and choice: the reader widens the pores and watches which of three sizes
   of molecule the membrane admits, and switches to the membrane the
   molecules dissolve in · **still**: which molecules a membrane passes is
   a property of the membrane, not a process with a clock; the figure
   answers its controls (rule 14) · a choice of membrane, "pores" or
   "dissolving", default pores (rule 26.1), and the pore width (0.2 to 2.0
   nm, default 0.6 nm, ink), a slider that the dissolving membrane holds
   disabled since it has no pores; the molecules are drawn at 0.3, 0.9 and
   1.6 nm across, sizes chosen so that the default admits the smallest only,
   and are named small, medium and large, since the book names none of them
   · "Pores 0.6 nm wide let the small molecules through and hold back the
   medium and large ones." · none · 2D. Readout: the relation the book
   states in words, that a pore passes a molecule smaller than itself, with
   the pore width and the three diameters as the live numbers; small line
   on the membrane's thickness, 6.5 to 10 nm, and on the dissolving membrane
   passing what dissolves in it regardless of size. Everything is ink: the
   molecules have no identity in the book's figure, so by the test of rule 7
   the whole figure is ink, and the three kinds are told apart by size and
   legend. Draws nothing typed.
4. `sim-osmosis` · replaces Figure 12.29 (a) and (b), the two sugar
   solutions before and after the fluid rises · osmosis, osmotic-pressure,
   dialysis · variation by slider and intuition: the reader sets the
   osmotic pressure of the concentration difference and the height the
   right-hand column has risen, and sees two opposing arrows, the osmotic
   drive to the right and the back pressure $ρgh$ to the left, with the net
   transfer of water as their difference: still to the right while the
   column is low, zero at the height the book draws, and reversed when the
   column is pushed higher, which is the reverse osmosis of the next
   paragraph · **still**: the rising column has a clock in it, but the
   chapter allows motion only in the random walk, and the height is the
   thing the reader sets, so the figure answers its sliders (rule 14;
   `ch12/config.md`) · the relative osmotic pressure of the two solutions
   (0 to 3.00 kPa, default 0.98 kPa, pressure) and $\kh$, the extra height
   of fluid on the right (0 to 30.0 cm, default 10.0 cm, position); at the
   defaults $ρgh$ equals the osmotic pressure and the figure is the book's
   panel (b), and $\kh = 0$ is its panel (a). The density is water's,
   $1.00 \times 10^3$ kg/m³, stated in the readout and not a slider, since
   the book's argument is about the height and the pressure and not about
   which solution stands in the beaker · "With 10.0 cm of extra height on
   the right the back pressure is 0.98 kPa, equal to the osmotic pressure,
   so the net transfer of water is zero." · none: the beaker in section
   with the membrane, the two levels and the bracket for $\kh$ is the
   picture · 2D. Readout: $\kPr = ρ\kg\kh$ with the live numbers as the back
   pressure, set against the osmotic pressure; small line saying which way
   the water goes and why, and naming reverse osmosis when the column is
   pushed past the balance. Water molecules are drawn as a small sprite of
   one oxygen and two hydrogens in the element palette and sugar as a
   larger disc in carbon's, since `ch12/COLOR.md` has a molecule take
   `F.el(symbol)`; a legend names both. The back pressure and the osmotic
   drive wear the pressure hue, the bracket for $\kh$ the position hue;
   $ρ$ and $\kg$ are stated but not drawn, so they stay in ink on this
   page. Draws pressure, position.

Photographs: the section has none, so none is kept and none is dropped.

Figures that serve exercises: the section prints none, and its problems
refer to no figure.

Table 12.2, Diffusion Constants for Various Molecules, is rebuilt by hand
as a `div.book-table` in `diffusion-constant`, its eyebrow the book's
number, its caption the book's title, its footnote "At 20°C and 1 atm"
under it, as `ch12/config.md` asks.

Extra simulations (rule 15), thought through, judged and left:

- The glucose of Example 12.11 crossing a centimeter in twenty-one hours.
  Left: `sim-random-walk` with glucose chosen and the readout does the
  arithmetic, and a slider that runs to twenty-one hours would leave every
  other molecule of the table off the frame.
- A bar for each molecule of Table 12.2 at one time, to compare the six
  distances at a glance. Left: the six differ by a factor of a hundred in
  distance and the bars would need a logarithmic axis the book has not
  taught; the dropdown of `sim-random-walk` and its scale bar make the
  comparison one choice at a time.
- The sea water and pure water of the 268 m column. Left: it is
  `sim-osmosis` with a number too large to draw beside a beaker, and the
  text states it.

## Exercises

- All items sit at the end (`ch12/config.md`).
- 2 conceptual questions, neither keyed, each an open item with an AI-marked
  suggested approach: `cq1` (fs-id3076697, why the rate of diffusion rises
  with temperature, Understand, citing `diffusion-constant`) and `cq2`
  (fs-id3397393, how osmosis and dialysis are alike and how they differ,
  Understand, citing `osmosis`).
- 3 problems keyed and kept: `p1` (fs-id3095372, the perfume molecule's
  distance in one second, keyed $1.41 \times 10^{-3}$ m, Apply), `p3`
  (fs-id2621123, oxygen through a 0.500-mm tear layer, keyed
  $1.3 \times 10^2$ s, Apply) and `p5` (fs-id2603271, the time before
  hydrogen is 1.00 s ahead of oxygen, keyed 0.391 s, Analyze).
- 2 problems left out, having no answer in the book's key: the ratio of the
  distances oxygen diffuses in air and in water (fs-id1613606) and the
  0.200-mm tear layer with its volume of oxygen (fs-id3113937). Both are
  named in `notes` and `exercise_notes`.
- No AP items in this section, and nothing taken from or held for another.
- No generated questions. Four nodes have no book exercise of their own,
  `diffusion-rate-direction`, `semipermeable-membrane`, `osmotic-pressure`
  and `active-transport`; `config.md` says a node with no exercise is noted
  and no question generated.
- Weights: `p1` gives `random-walk-distance` its full value and `diffusion`
  weight 2, since the point of the problem is that the smell does not
  arrive by diffusion; `p3` gives `random-walk-distance` the full value and
  `diffusion-constant` 2 for reading the table; `p5` gives
  `random-walk-distance` the full value and `diffusion-constant` 3, since
  the problem turns on two constants at once; `cq1` gives
  `diffusion-constant` the full value and `diffusion` 2; `cq2` gives
  `osmosis` and `dialysis` the full value each and `semipermeable-membrane`
  2.

## Views

- Formulas: the one equation of the section already in `chapter.json`,
  `eq-rms-distance`, important.
- Definitions: the three variables of the section, $\kxrms$, $D$ and $\kt$,
  and nine glossary terms.
- Concept map: the nine nodes above with their edges into 2.1, 4.2, 7.2,
  11.1, 11.3 and 11.4 and within the section.

## Colour

The page binds position, time and pressure, as `ch12/COLOR.md` allots to
12.7. `sim-random-walk` draws the circle of radius $\kxrms$ and the graph's
vertical axis in the position hue and its time slider and axis in the time
hue; `sim-osmosis` draws the osmotic drive and the back pressure in the
pressure hue and the bracket for $\kh$ in the position hue. The diffusion
constant $D$, the concentrations, the pore width and every molecule's size
are untyped and in ink; $ρ$ and $\kg$ appear in the readout of
`sim-osmosis` and in the prose but are not drawn, so they render in ink on
this page. The three walkers of the random walk take `F.cat(i)`; the water
and sugar of the osmosis figure take the element palette; the molecules of
`sim-concentration` and `sim-membrane` have no identity and are ink.

## Wanted at chapter level

- variables `x_rms` → 12.7-diffusion
- variables `D_diff` → 12.7-diffusion
- variables `t` → 12.7-diffusion
- equations `eq-rms-distance` → 12.7-diffusion
- Nothing else: no concept or symbol row of the section needs a fix, and
  the section adds no symbol of its own.

Applied in the chapter pass (2026-09-14): every anchor above is written on its
row; nothing else was wanted and nothing else was changed.

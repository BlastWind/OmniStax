# Plan: 15.7 Statistical Interpretation of Entropy and the Second Law of Thermodynamics: The Underlying Explanation (m42238)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-14
without a review stop, on Chen's standing instruction to finish the book in
waves; the per-section stop of rule 2, the plan review of rule 5 and the user
picks of rule 15 are replaced by this file, written before the section was
built and left for review after, as `ch15/config.md` records.

The chapter's closing section. It answers the question the other
formulations of the second law leave open, why heat transfer goes only from
hot to cold and why disorder grows, by counting: a macrostate is what you see,
a microstate is one way of arranging the parts, every microstate is equally
probable, and the disorderly macrostates have vastly more of them. Five coins
make the point, a hundred make it overwhelming, a gas makes it a law, and
Boltzmann's $\kSent = k\ln W$ ties the count to the entropy of 15.6. One
photograph (15.37), one diagram (15.38), three tables (15.3, 15.4 and, among
the problems, 15.5), one worked example, one Problem-Solving Strategies box,
three glossary terms, two AP items, one conceptual question and eight
problems of which four are keyed. One page (rule 11).

## Sub-concepts (page headers)

The book prints two headers of its own, Coin Tosses and Disorder in a Gas,
and they are kept as written (`ch15/config.md`). The opening block has no
header and gets one; Example 15.9 and the strategy box sit under the Disorder
in a Gas header in the book but carry two concepts of their own, so each is
given a header of the agent's.

1. `why-disorder` **Why disorder is more likely than order** (book: the two
   opening paragraphs, the second law's formulations and the rain).
2. `coin-tosses` **Coin Tosses** (book: the six macrostates of 5 coins, the
   definitions of macrostate and microstate, Table 15.3, the paragraphs on
   order and probability, Table 15.4 and the 100-coin paragraph). The
   variable $W$ (`W_micro`) first appears here as the column head of Table
   15.4.
3. `disorder-in-a-gas` **Disorder in a Gas** (book: the two paragraphs on
   the gas and statistical analysis, Figure 15.38, the paragraph on the
   local decrease of entropy, Boltzmann and $\kSent = k\ln W$, the paragraph
   that explains the second law). The variables $\kSent$, $W$ and $k$ and the
   equation `eq-boltzmann-entropy` anchor here.
4. `entropy-change` **The change in entropy between two macrostates** (book:
   Example 15.9 with its strategy, solution and discussion, and Table 15.5,
   which the book prints among the problems and two problems point at, kept
   in the text where the reader can consult it). The variables $\kdS$,
   $\kSi$, $\kSf$, $W_{\text{i}}$, $W_{\text{f}}$ and the equation
   `eq-entropy-change-microstates` anchor here.
5. `entropy-strategy` **Solving problems that involve entropy** (book: the
   boxed Problem-Solving Strategies for Entropy, kept as the book's numbered
   list).

The example is numbered 15.9 as the publisher prints it. The three
cross-references to the tables and the one to Figure 15.38 are plain text,
as every cross-reference of the book is (the app links the figure number
itself). The book's lowercase "this expression for $s$" and the five
microstates Table 15.3 prints twice in its 3-heads row are kept as printed
and named in `notes`. The converter's `º` is `°` in prose and `^\circ` in
math. Learning objectives, the section summary and the three glossary terms
come out of the running text into the tables and the views (rule 4).

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| statistical-second-law | idea | why-disorder | the opening questions and their answer; reinforced by the gas passage and Figure 15.38; the keyed AP item on the flash-heated layer |
| macrostate-and-microstate | idea | coin-tosses | the two definitions; Table 15.3; the bricks question |
| disorder-is-more-probable | result | coin-tosses | Tables 15.3 and 15.4 and the paragraphs between them; the keyed problems on 100 heads and on the three most likely macrostates |
| boltzmann-entropy | result, eq-boltzmann-entropy | disorder-in-a-gas | the equation and the sentence on probability; the summary |
| calculate-entropy-from-microstates | skill, eq-entropy-change-microstates | entropy-change | Example 15.9; the keyed problems on 10 coins and on 6 coins |
| entropy-problem-solving | skill | entropy-strategy | the boxed strategy; 15.6's problems that ask for it by name |

The section leans on `entropy`, `change-in-entropy`,
`second-law-entropy-statement`, `entropy-and-disorder` and `entropy-and-life`
(15.6), on `kinetic-theory`, `maxwell-boltzmann-distribution` and
`boltzmann-constant` (13.3 and 13.4), on `ideal-gas` (13.3) and on
`latent-heat` (14.3) in the example's discussion of the ice; the coverage
rows mark each as used where the text uses it.

## Figures

id · replaces or Sim · concepts · value add · moving or still · sliders ·
headline · graph · 3D

1. Figure 15.37, the tossed coins · photograph, **dropped**: a splash image
   at the head of the section whose question the two tables answer
   (`ch15/config.md`); nothing in the text points at it.
2. `sim-coin-tosses` · Sim · macrostate-and-microstate,
   disorder-is-more-probable, boltzmann-entropy · flow by animation and
   intuition: Tables 15.3 and 15.4 are lists of numbers from 1 to $10^{29}$
   that cannot be read as a shape; here the coins are tossed over and over,
   each toss lands as a tally on its macrostate, the histogram fills the
   middle and never the ends, and the exact count of microstates from the
   tables is drawn behind it as the outline the tally settles onto, with a
   second row of columns beneath giving the entropy $\kSent = k\ln W$ of
   each macrostate · **moving**: a run of tosses is a sequence in time, and
   the argument is the histogram filling as they accumulate, which
   `ch15/config.md` names as one of the chapter's three ideas with a clock;
   one loop is 300 tosses over six seconds, then a hold; the tosses are
   drawn from a seeded generator so the scrubber replays the same run ·
   number of coins (2 to 100, detents at 5, 10 and 100, default 5, untyped,
   rule 26.1: a count with preset values is a slider with soft detents), and
   the chance of heads (30% to 70%, default 50%, untyped), which lets the
   reader break the book's crucial assumption that every microstate is
   equally probable and watch the tally slide off the count of microstates,
   which is the book's "the analysis will be erroneous" made visible; the
   book's numbers are the defaults, 5 fair coins as Table 15.3 · "After 300
   tosses of 5 fair coins, 3 heads and 2 tails came up 92 times and 5 heads
   9 times; the last toss gave 2 heads and 3 tails, a macrostate with 10
   microstates." · graph below the coins: the tally of tosses per
   macrostate, and beneath it the entropy of each macrostate as columns in
   the entropy hue with the current macrostate marked on both · 2D. Readout:
   $\kSent = k\ln W$ with the current macrostate's $W$; small line on how
   often the ends came up. Labels: the frame only (axis titles, the outline's
   legend); the coins carry H and T on their faces, which is the label; on
   by default (rule 26.7). Draws entropy.
3. `sim-entropy-change` · Sim · calculate-entropy-from-microstates,
   boltzmann-entropy, disorder-is-more-probable · variation by slider:
   Example 15.9 computes one change, 60 heads to 50 of 100 coins, and the
   problems ask for 45 to 51, 45 to 75, 5 to 2 of 10 coins and 3 heads
   against 5 of 6; here the two macrostates are set on the same row of
   entropy columns, the change is the difference in height and the ratio of
   the two counts of microstates says how much more likely the final state
   is, which is what every problem of the section asks for · **still**: two
   macrostates compared have no time in them (rule 14) · number of coins (2
   to 100, detents at 5, 6, 10 and 100, default 100, untyped), initial heads
   (0 to the number of coins, default 60, untyped), final heads (0 to the
   number of coins, default 50, untyped); the book's numbers are the
   defaults · "Going from 60 heads to 50 heads of 100 coins raises the
   entropy by 2.7 × 10⁻²³ J/K; the final macrostate has 7.3 times as many
   microstates and is that much more likely." · graph alone: the entropy of
   each macrostate as columns, the two chosen ones filled and bracketed by
   $\kdS$ · 2D. Readout: $\kdS = \kSf - \kSi = k\ln W_{\text{f}} - k\ln
   W_{\text{i}}$ with the live numbers; small line on the odds. Labels: the
   frame, and the two chosen columns named "initial" and "final", on by
   default. Draws entropy.
4. `sim-gas-disorder` · replaces Figure 15.38 (a) and (b), the gas in its
   likely and its highly unlikely state · statistical-second-law,
   boltzmann-entropy, macrostate-and-microstate · flow by animation and
   intuition: the book draws the two states and says in words that the
   atoms "will quickly disperse and become uniformly distributed and will
   never return"; here the atoms are released from one corner with one
   speed in random directions, collide elastically with each other and the
   walls, spread through the container, and the entropy of the arrangement
   is counted live: the container is divided into four quarters, the number
   of atoms in each is written in it, $W$ is the number of ways of assigning
   the atoms to the quarters in those numbers, and $\kSent = k\ln W$ rises
   from zero to its maximum and then only flickers beneath it, which is the
   second law as a count · **moving**: the dispersal is a process in time
   and the book's own caption narrates it; one loop is six seconds from the
   release, then a hold; the atoms are seeded and integrated in fixed steps
   so the scrubber replays the same run; this is not the dummy jitter
   `ch15/config.md` forbids, since the motion is the idea, not the warmth ·
   a choice of the starting state (rule 26.1: the book's two panels are two
   states, not a quantity), "released from one corner" (Figure 15.38(b), the
   default) or "already spread out" (Figure 15.38(a)), and the number of
   atoms (10 to 80, default 40, untyped) · "1.5 s after the atoms were
   released from the corner, the four quarters hold 22, 9, 6 and 3 atoms,
   and the entropy of the arrangement has risen to 5.6 × 10⁻²² J/K." · graph
   beside the container (the scene is upright): the entropy of the
   arrangement against time since the release, in the entropy hue, with the
   maximum for an even split as a dashed level · 2D. Readout: $\kSent =
   k\ln W$ with the live count; small line on how many of the possible
   arrangements the current one is among. Labels: the frame and the four
   counts, on by default; the atoms carry no label, being one kind, and are
   ink (`ch15/COLOR.md`: the book says only "a gas"). Draws entropy and
   time, the second because the graph's horizontal axis is the time since
   the release, which is a typed quantity and is not drawn in ink.

Photographs: one, Figure 15.37, dropped as above.

Figures that serve exercises: none; no exercise of the section refers to a
figure of its own.

Extra simulations (rule 15), thought through, judged and left:

- The rain of the opening paragraph, drops falling in orderly rows against
  drops falling at random. Left: it is a picture of the same count the
  coin figure makes, and a figure of rain would add a sprite and no number.
- The bricks and the pile of the conceptual question. Left: the count it
  asks for is the reader's to make, and a figure would answer the question.
- The five coins enumerated, all 32 sequences laid out and grouped. Left:
  Table 15.3 already lists them, and `sim-coin-tosses` at 5 coins shows the
  same 32 as the outline the tally settles onto.

## Exercises

- All at the end: the chapter has no Check Your Understanding box and the
  conceptual questions go to the Exercises tab (`ch15/config.md`).
- 1 conceptual question, unkeyed, an open item with an AI-marked suggested
  approach: `cq1` (eip-558, the building of bricks and the pile, Analyze,
  citing `coin-tosses`). The CNXML leaves it untyped and it is classed by
  its header. It repeats 15.6's last conceptual question word for word; the
  book prints both, 15.6 keeps its own copy, and it is set here as well
  because the count of microstates it asks for is taught here
  (`ch15/exploration.md`); `exercise_notes` says so.
- 2 AP items: `ap1` (fs-id2253927, the flash-heated layer of gas next to
  the closed end of a cylinder, keyed (b), a graded choice, Analyze,
  `disorder-in-a-gas`), `ap2` (fs-id3590952, design a macroscopic
  simulation of one high-energy particle sharing its energy, unkeyed, open
  with an AI-marked approach, Create, `disorder-in-a-gas`).
- 4 problems keyed and kept: `p1` (fs-id1169737789408, 100 heads once in
  2 × 10²² years, keyed 2.0 × 10²² y), `p3` (fs-id1169738042871, the three
  most likely macrostates of 100 coins, keyed 3.0 × 10²⁹ and 24%), `p5`
  (fs-id1169737855554, 10 coins from 5 heads to 2, keyed −2.38 × 10⁻²³ J/K,
  5.6 times, and the book's answer on the odds of 252 to 45 in the
  solution), `p7` (fs-id1169738036628, the table for 6 coins, keyed (b) 7,
  (c) 64, (d) 9.38%, (e) 3.33; part (a) is the table itself and the card
  checks the four numbers).
- 4 problems left out, having no answer in the book's key: the percent of
  tosses from 60 heads through 40 heads (fs-id1169738131468), 100 coins
  from 45 heads to 51 and to 75 (fs-id1169737772142), the three most
  likely macrostates of 10 coins and how long to toss 10 heads
  (fs-id1169738199118), and the air conditioner whose heat transfer is
  measured in melted ice (fs-id1169738218686); named in `notes` and
  `exercise_notes`.
- No generated questions: every node has a book exercise that tests it.
- Weights: `ap1` gives `statistical-second-law` its full value and
  `kinetic-theory` 2; `ap2` gives `statistical-second-law` its full value
  and `thermal-energy` 2; `cq1` gives `macrostate-and-microstate` its full
  value and `entropy-and-disorder` 2; `p1` gives
  `disorder-is-more-probable` its full value and `macrostate-and-microstate`
  2; `p3` gives `disorder-is-more-probable` its full value and
  `macrostate-and-microstate` 2; `p5` gives
  `calculate-entropy-from-microstates` its full value and
  `boltzmann-entropy` 3 and `disorder-is-more-probable` 2; `p7` gives
  `macrostate-and-microstate` its full value and
  `disorder-is-more-probable` 3.

## Views

- Formulas: the two equations of the section in `chapter.json`, both
  important (`eq-boltzmann-entropy`, `eq-entropy-change-microstates`); the
  worked substitution of the example is not a row.
- Definitions: the eight variables of the section, and three glossary
  terms, macrostate, microstate, statistical analysis.
- Concept map: the six nodes above with their edges into 13.3, 13.4, 14.3
  and 15.6.

## Colour

The page binds entropy, as `ch15/COLOR.md` decides for 15.7, and time,
which `sim-gas-disorder` draws as the horizontal axis of its entropy graph.
Entropy wears its hue on the columns whose height is $k\ln W$, on the
rising bar and trace of the gas figure and on every readout that writes
$\kSent = k\ln W$ or $\kdS = k\ln W_{\text{f}} - k\ln W_{\text{i}}$. The
number of microstates $W$, the number of coins, the counts of heads and
tails, the number of atoms and Boltzmann's constant $k$ are untyped and in
ink, and so are their sliders. The coins are ink, heads and tails told by a
filled and a hollow face carrying H and T; the atoms are ink, one kind with
no identity of their own; the tally histogram is a count and is drawn in the
soft ink fill; the categorical palette is not needed, since nothing on the
page is an instance that must be told from another of its kind. No heat
transfer or temperature is drawn, so neither energy nor temperature is
bound.

## Wanted at chapter level

- variables `W_micro` → 15.7-coin-tosses
- variables `S_ent` → 15.7-disorder-in-a-gas
- variables `k_boltz` → 15.7-disorder-in-a-gas
- variables `ΔS` → 15.7-entropy-change
- variables `S_i` → 15.7-entropy-change
- variables `S_f` → 15.7-entropy-change
- variables `W_microi` → 15.7-entropy-change
- variables `W_microf` → 15.7-entropy-change
- equations `eq-boltzmann-entropy` → 15.7-disorder-in-a-gas
- equations `eq-entropy-change-microstates` → 15.7-entropy-change
- No concept or symbol row needs changing; the symbol rows the section
  writes ($\kSent$, $\kdS$, $\kSi$, $\kSf$, `W_micro`, `W_microi`,
  `W_microf`, `k_boltz`) are all staged and merged.

Applied in the chapter pass (2026-09-14): the eight variable anchors and the two equation anchors are set on `chapter.json` as listed. The page's binding of `time`, which `ch15/COLOR.md` had not foreseen for 15.7, is settled in that file's table and its bindings paragraph: `sim-gas-disorder` draws the time since the release as the horizontal axis of its entropy graph, and a typed quantity is never drawn in ink. One phrase of the Sim caption of `sim-entropy-change` that spoke of the reader is reworded in the book's second person. No symbol row was changed.

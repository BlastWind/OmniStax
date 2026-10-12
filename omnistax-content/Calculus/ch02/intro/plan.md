# Plan: Chapter 2 introduction, Limits (m53483)

Source: `source.md`, converted with `tools/convert.py 2`. Status: plan; config 2 waives the review for this run, decisions reported afterwards.

A chapter introduction page (root rule 21.1): the splash photograph, Einstein's mass equation and two paragraphs, verbatim. No lead, objectives, summary, exercises or coverage; no concepts.

## Blocks

1. `introduction` **Introduction**, the one `<h2>` (the page title carries the chapter's name): the opener photograph, the first paragraph with the equation m = m₀/√(1 − v²/c²) as display math, then the second paragraph. "(We explore this problem further in [Example 2.12].)" links to `2.2` `ex-einstein` (the id the 2.2 builder gives `fs-id1170572624544`); if the checker refuses a link into an unbuilt section, the words stay plain until the chapter pass links them.

## Figures

- `fig-spaceship` · Figure 2.1 · photo, kept: the chapter opener (config 20), the book's caption with its credit clause "(credit: NASA)" whole; served from `media/ch02/CNX_Calc_Figure_02_00_001.jpg`. Root rule 24.9: a splash photograph is never a simulation.

## Colour and referents

None. m, m₀, v and c name no concept of this book (mass and speed are physics), so they stay ink, plain letters with no `\k` macro; "limit" in "a limit exists to how fast" and "The idea of a limit" names the concept `limit` (introduced in 2.1), and is marked `data-concept="limit"` only if the checker accepts a mention ahead of the introducing span; otherwise plain.

## Exercises

None.

## Extra simulations (rule 15)

None here: the speed limit the opener promises is 2.2's `sim-einstein` (Example 2.12), where v/c is dragged toward 1.

## Wanted at chapter level

- Nothing: no variables, forms or concepts.

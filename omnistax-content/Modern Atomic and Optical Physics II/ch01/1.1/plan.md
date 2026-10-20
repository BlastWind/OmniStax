# Plan: 1.1 Introduction

Source: `source.md` (PDF page 7, two paragraphs, no equations, figures, footnotes or headings). checkprose clean.

## Blocks

The book prints no subsection or run-in heading, and the two paragraphs are one train of thought (what the course covers, then how it builds), so the page is one block. Nothing is invented where the book prints no heading (book RULES, Structure).

| id | `<h2>` | holds |
|---|---|---|
| `1.1-introduction` | Introduction | both paragraphs, verbatim |

Alternative for Chen: two blocks, "Three themes" and "Simple systems first", would be invented headers; not proposed.

## Concepts (staged in `ch01/book-rows.json`, not merged)

| id | kind | statement | prereqs | introducing span |
|---|---|---|---|---|
| `coherent-and-dissipative-dynamics` | idea | Atomic physics is approached through a unified picture of coherent evolution and environmental decoherence and dissipation, and to understand the dynamics of the systems studied both must be treated on an equal footing. | none (first concept of the book) | "a unified picture of coherent evolution and environmental decoherence and dissipation" (paragraph 1) |
| `simple-quantum-systems` | idea | A theoretical understanding is built first for simple systems, those where only a few states, a few particles, or a few quanta are relevant; more complex systems are then understood by combining these building blocks. | none | ”simple” systems (paragraph 2) |

Terms: the book quotes ”simple” and ”real world”. Only ”simple” names a concept; its term is staged as `simple`, which would underline every "simple" in the chapter's prose. Call for Chen: keep `simple` as the term, or leave `terms` empty and mark only the one span by hand. ”real world” names no concept and stays ink.

No coverage `uses` rows: 1.1 rests on nothing earlier.

## Symbols and variables

None. The section writes no mathematics; no `ost meanings` lookups were needed. `chapter.json` carries no variables yet (1.2 and 1.3 rows wait for their plans and the merge).

## Referents

None: no example, no figure, no particular thing the text and a figure share.

## Colour

No `data-concept` spans beyond the two concepts above, which are untyped ideas (ink). Words like "states", "particles", "quanta", "spectroscopy" name no concept introduced by 1.1; "states" could be marked `state-vector` (type state) once 1.2 is built, but here it is used loosely ("a few states") and stays ink.

## Figures

None. The book draws nothing in 1.1, and root 24's gate is not met: the prose names themes, not a motion, a variation or a depth the reader must imagine. Config allows no figure here.

## Exercises

None. 1.1 prints no question; the R∞ invitation is 1.3.1's inline Try It, and no MIT 8.422 problem maps to Chapter 1 (config). `exercises` stays empty.

## Objectives, summary, notes

`objectives` and `summary_html` empty (book prints neither; config). `notes`: none needed, nothing is left out.

## Lead draft (AI-marked, 30 words)

> The course's starting point: atoms studied as systems whose coherent quantum evolution and whose losses to the environment must be described together, beginning with systems of only a few states, particles or quanta.

## Extra sims (root 15)

None survives the strict test. A "map of the course" (themes linked to chapters) would be navigation, not a view of the subject; a toy two-level atom with and without decay would preview 2.1 and 3.4 with nothing yet taught to label it (root 26.5).

## Book typos kept

- "including, for example discussion of": missing comma after "example".
- ”simple” and ”real world” open with a closing quotation mark.

## Wanted at chapter level

- `book.json` `chapters` has `ch01` (done); `ost merge lukin-amo-ii 1` once Chen approves the concept rows.

## For the chapter plan: 1.2 and 1.3

- 1.2 (6 subsections, Eqs. 1.1–1.13) is pure review; no figure is called for by config. 1.2.2 superposition/interference is the only candidate for an extra Sim (two amplitudes as phasors, P_n against relative phase), to be judged in 1.2's plan.
- 1.3 has seven numbered subsections (1.3.1–1.3.7) as h2s; run-ins "Remark concerning the wavefunctions of hydrogen-like atoms" (1.3.4) and "Structure of the alkali ground state" (1.3.5) are h3s per config. "Selection rules" (1.3.7) is a third bold run-in the config table does not list; it should also be an h3.
- Both config Sims belong to 1.3: the fine and hyperfine ladder sits in the 1.3.4 block (spanning 1.3.3–1.3.5: Bohr → +L lifting → +fine (A, Eq. 1.23) → +hyperfine (A_HFS/2, 3A_HFS/2)); the Zeeman levels against B sit in 1.3.6 (Eqs. 1.30, 1.37–1.39; F = 1, 2 of ²³Na/⁸⁷Rb, weak to strong field). Na named, so `F.el('Na')`; D lines 589.0/589.6 nm are the book's one colour fact.
- 1.3's Try It: the R∞ estimate (1.3.1, reveal Eq. 1.16).
- Book faults to list in 1.3's plan: Eq. (1.21) prints Ŝ·L = J² − L² − S² (missing factor 2 and hat); term symbols print ³S₁/₂, ³P where the doublet ²S, ²P is meant; "Clebsch-Gordon"/"Gordan", "Simliarly", "exercize", "have n are allowed", "principal quantum n number", "a reduced the energy", "interaction interaction", "transitions strengths". No misnumbered citations in Chapter 1 ("Eq. 1.54", "Eq. 1.61" are correct).
- 1.3's `text-layer.md` was corrected by hand in three spots where the PDF layer scrambles (noted in its source.md).
- Concept rows for 1.2 (14) and 1.3 (28) are staged with forms (no anchors yet) and 52 prereq edges; 21 symbols with `\k` macros. Ids reuse canonical ones from other books where they match (`superposition`, `heisenberg-uncertainty-principle`, `rydberg-constant`, `fine-structure`, `zeeman-effect`, `principal-quantum-number`). The prereqs are hand-reduced; no Hasse script exists yet.

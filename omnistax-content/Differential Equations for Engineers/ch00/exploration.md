# Chapter 0 exploration: Introduction

Converted with `tools/convert.py 0`; three sections, all read.

| Section | Label | Examples | Inline ex. | End ex. (keyed) | Figures | Displays numbered |
|---|---|---|---|---|---|---|
| 0.1 Notes about these notes | notes:section | 0 | 0 | 0 | the chapter diagram (unnumbered) | none |
| 0.2 Introduction to differential equations | introde:section | 2 | 3 | 17 (6) | Figures 1, 2; the modelling cycle (unnumbered) | (1) |
| 0.3 Classification of differential equations | classification:section | 0 | 0 | 7 (3) | none | (2)–(5) |

Numbering. The Introduction is `\chapter*`, so LaTeX's book class prints its figures and equations with no chapter part: Figure 1, Figure 2, equations (1)–(5). Sections print 0.1–0.3 and examples and exercises 0.2.k, 0.3.k. The pages keep the printed numbers (config 5 corrected to say so).

What is new: everything; Calculus 8.1 overlaps 0.2 and 0.3 (differential equation, solution, general and particular solution, order, autonomous), and its ids are reused.

Figures: Figure 1 (three solutions of dx/dt + x = 2 cos t) and Figure 2 (bacteria growth) are Genius plots, drawn live; the modelling cycle and the chapter diagram are xfig sketches, faithful copies. No photographs.

Exercises: none held for another section. 0.2.1–0.2.3 are inline. The `[3]` after 0.3's last display is the converter's reading of `\pagebreak[3]` and is dropped.

Rule 23 for this chapter: the opening chapter should make "a solution is a function that makes the equation hold" something the reader sees: a family of solutions converging to one steady wave, two measurements pinning a growth curve, each fundamental equation's derivative drawn against its function, the arch that is not a parabola, and the linear pendulum drifting away from the true one.

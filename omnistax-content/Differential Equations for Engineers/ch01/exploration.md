# Chapter 1 exploration: First-order equations

Written 2026-10-19 at prep, from the nine `source.md` files (converted by `tools/convert.py 1` from `ch-first-order-ode.tex`) and the nine `plan.md`s. The book's own exploration (`../exploration.md`) has the apparatus and the provenance; this file has what is particular to Chapter 1.

## Modules

| Section | Module | Examples | Theorems | Figures | Tables | Inline | End (keyed) | Footnotes |
|---|---|---|---|---|---|---|---|---|
| 1.1 Integrals as solutions | integralsols:section | 6 | 0 | 1.1 | — | 1 (1.1.1) | 18 (7: 101–107) | 1 (closed form) |
| 1.2 Slope fields | slopefields:section | 3 | 1 (1.2.1 Picard) | 1.2–1.7 | — | 0 | 18 (6: 101–106) | 1 (Picard) |
| 1.3 Separable equations | separable:section | 4 | 0 | 1.8–1.9 | — | 0 | 19 (7: 101–107) | 0 |
| 1.4 Linear equations and the integrating factor | intfactor:section | 2 | 0 (Remark 1.4.1) | 1.10 + the tank sketch | — | 3 (1.4.1–1.4.3) | 14 (5: 101–105) | 0 |
| 1.5 Substitution | substitution:section | 2 | 0 | none | the substitution table (unnumbered) | 0 | 10 (4: 101–104) | 1 (Bernoulli) |
| 1.6 Autonomous equations | auteq:section | 0 | 0 | 1.11–1.15 + 2 unnumbered phase diagrams | — | 2 (1.6.1–1.6.2) | 9 (4: 101–104) | 2 (semistable) |
| 1.7 Numerical methods: Euler’s method | numer:section | 0 | 0 | 1.16–1.17 | 1.1, 1.2 | 2 (1.7.1–1.7.2) | 9 (4: 101–104) | 1 (Euler) |
| 1.8 Exact equations | exact:section | 7 | 1 (1.8.1 Poincaré) | 1.18–1.19 | — | 1 (1.8.1) | 9 (3: 101–103) | 2 (equipotential, Poincaré) |
| 1.9 First-order linear PDEs | fopde:section | 3 | 0 | 1.20–1.23 | — | 0 | 9 (3: 101–103) | 1 (moving left) |
| **Chapter** | | **27** | **2** | **23 numbered** | **2 numbered** | **9** | **115 (43)** | **9** |

The converter numbers the figures 1.1–1.23 in caption order (the book's exploration counted 21 from the `.tex`; the two extra are the side-by-side pairs 1.9 and 1.16, each one caption). Numbered equations: (1.1) and (1.2) in 1.1, (1.3) and (1.4) in 1.4 (the boxed (1.4)), (1.5) in 1.8, (1.6) in 1.9. Exercise images: 1.2.6 (three slope fields), 1.2.101 (one, in the answer), 1.2.104 (three). Every end exercise sits in its own section; the answers to 101+ follow each exercise in the `.tex` (rule 9: nothing to scan elsewhere). The 1.7 paragraphs on Runge–Kutta and the improved Euler method are printed among the exercises and are kept in the text before the Exercises.

## What is new in this chapter

The chapter's work is the four ways to solve a first-order equation (integration, separation, the integrating factor, substitution) and the three ways to understand one without solving it (the slope field, the phase diagram, Euler's method), then exact equations and the method of characteristics. Picard's theorem (1.2) and the Poincaré Lemma (1.8) are its two theorems; (1.4) its one boxed formula. Calculus 8.1–8.5 covers 1.1–1.4, 1.6 and 1.7 more briefly, and Chapters 14–16 the partial derivatives, vector fields and potentials of 1.8; those concept ids are reused (`config.md` line 6), and the prose links Calculus for what it assumes.

## Figures: sketches to replace, photographs

No photographs. Every numbered figure is a Genius plot of a computation (a solution curve, a slope field with solutions, a surface u(x, t)), drawn live per the book's `RULES.md`, the original behind the toggle; the plans fold 1.2 + 1.3 + 1.4, 1.13 + 1.14 + 1.15, 1.16 + 1.17 and 1.20 + 1.21. Three xfig sketches: the brine tank of Example 1.4.2 (the scene of Figure 1.10, moving), the phase diagram of x′ = 0.1x(5 − x) (folded into `sim-logistic`), and the four one-point phase diagrams (kept as the book's image). The exercise images stay in their cards.

## Notes, remarks, resources

Section notes (lecture counts, [EP]/[BD] numbers, "can safely be skipped" on 1.5, 1.7, 1.8, 1.9) are dropped and named in `notes`. One remark (1.4.1). Nine book footnotes, kept with their Wikipedia links. No computer resources are named in the chapter; no citations beyond the dropped notes.

## Exercises that belong to another section

None: every end exercise tests what its own section introduces. Exercise 1.4.10 uses Newton's law of cooling (1.3) to set up a linear equation, 1.8.103 rewrites Example 1.3.1 as an exact equation, and 1.6 returns to the cooling coffee of 1.3; each stays where the book prints it, tagged with the earlier section's concept as well.

## The chapter's answer to rule 23

A first-order equation is a rule for a slope, and this chapter is where the reader first sees the rule drawn: a slope field the reader can put a point into and watch a solution flow out of both ways (1.2), the same field showing where two solutions can meet (y′ = 2√|y|) and where one blows up (y′ = y²); the definite integral of (1.2) as an area that becomes a graph though it has no closed form (1.1); Bob's coffee cooling toward the room (1.3) and the brine tank filling while its salt mixes (1.4); the lost solution y = x that no D reaches (1.5); the phase diagram beside its slope field, the harvesting rate sliding until the two equilibria merge and vanish (1.6); Euler's polyline closing on the true curve as h halves, and the error falling by a half, a quarter or a sixteenth by method (1.7); level curves of a potential with the field square to them (1.8); and a bump riding its characteristic line, drawn flat first and then as the surface over the (x, t) plane (1.9).

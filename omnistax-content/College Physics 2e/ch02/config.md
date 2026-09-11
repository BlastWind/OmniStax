# Config: College Physics 2e, Chapter 2

Proposed by the agent after exploration (2026-09-06). Status: confirmed
2026-09-06 for 2.1 and 2.5. On 2026-09-11 Chen asked for the rest of the
chapter (2.2, 2.3, 2.4, 2.6, 2.7 and 2.8) to be built in one job without
check-ins, as Chapter 1 was: the per-section stops of rule 2 and the plan
reviews of rule 5 are replaced by a plan file per section, written before
the section is built and left for review after, and the photographs line
below is brought up to the root rule 14 as it now stands. The chapter
was completed that day (LOG Pass 20). Each line is a
setting and its value.

| Setting | Value |
|---|---|
| Unit of work | one section = one page; sections never folded (rule 11) |
| Order | 2.1, 2.2, 2.3, 2.4, re-link 2.5, 2.6, 2.7, 2.8; the chapter introduction as a page of its own in `intro/`, listed before 2.1 (root rule 21; built 2026-09-11) |
| Loop | per section: plan message → build → stop for feedback |
| Site | one page per section, built by the Astro app in `omnistax-web/` (the earlier `tools/build_site.py` is gone since Pass 7); other sections load into tabs on demand |
| Prose | verbatim; objectives, summary, glossary pulled into views |
| Sub-concept headers | agent decides per section, reported in the plan |
| Figures | a sim per idea or result the section introduces; every sketch figure replaced by a sim; a photograph kept when the text points the reader at it or it shows the thing the passage is about, dropped when it is decoration such as a splash image, each listed in the plan with the reason; 3D only when spatial (rule 14) |
| Sim sliders | whatever is interesting and variable in the idea, not necessarily one equation's variables |
| Figures that serve exercises | copied over faithfully, no sliders (rule 14) |
| Extra simulations | agent proposes only those that open a view the required figures do not; user picks from the plan (rule 15) |
| Feedback stops | agent waits until the user has answered every point before building (rule 16) |
| Colour coding | t, x, v, a hues from RULES.md; g under the acceleration hue |
| Inline exercises | Check Your Understanding and other Remember/Understand items, after the passage they test |
| Exercises tab | end-of-section problems, conceptual questions, AP test prep |
| AP test prep | included |
| PhET interactive links | dropped |
| Answers to book problems | book answer key only; never generated; unkeyed problems are left out unless the user supplies an answer |
| Suggested approaches for open questions | generated, marked AI |
| Generated questions | none; agent asks only when a concept has no book exercise testing it |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; one map file that grows across the chapter |

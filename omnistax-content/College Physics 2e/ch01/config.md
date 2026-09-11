# Config: College Physics 2e, Chapter 1

Proposed by the agent after exploration (2026-09-11). Status: applied as
proposed, since Chen asked for the whole chapter to be built in one job
("do everything before ch2"); the per-section stops of rule 2 and the plan
reviews of rule 5 were replaced by a plan file per section, written before
the section was built and left for review after. Each line is a setting
and its value. Lines that repeat the Chapter 16 config are unchanged
unless marked.

| Setting | Value |
|---|---|
| Chapter | 1 Introduction: The Nature of Science and Physics, modules m42119 to m42121 (m42092, m42091, m42120, m42121 in book order), PDF pp. 25–56 |
| Front matter | the Preface (m42955) is not built; the chapter introduction (m42119) is recorded as `intro_module` and waits for a chapter landing page (new) |
| Unit of work | one section = one page; sections never folded (rule 11); 1.4 stays a page of its own |
| Order | 1.1 to 1.4 in book order |
| Loop | plan file → build → validator, all four sections in one pass; review after (new, on Chen's instruction) |
| Prose | verbatim; objectives, summary, glossary pulled into views; the book's boxed notes (Models, Theories, and Laws; The Scientific Method; Limits on the Laws of Classical Physics; The Quest for Microscopic Standards; Nonstandard Units; Fevers or Chills) kept verbatim as notes |
| Tables | the book's three tables kept in the text as tables, numbered as openstax.org numbers them (new) |
| Sub-concept headers | agent decides per section, reported in the plan |
| Figures | a demo per idea or result the section introduces; every sketch replaced by a demo (the planetary atom, the meter of light, the two bull's-eyes); a photograph kept when the text refers to it or it shows the thing the passage is about, dropped when it is a splash image (the geese, the Earth from the Moon, the two balances); each listed in the plan (rule 14) |
| Demo sliders | whatever is interesting and variable in the idea: the number of electrons, a time for light, a power of ten, a distance and a time, a spread and an offset, a value and its uncertainty, a ruler's smallest division, stories and people |
| Motion | the atom's electrons and the car run as an endless cycle; light along the meter, the estimates and the ruler are finite and get the scrubber |
| Figures that serve exercises | none kept: the Salmonella photograph belongs to an unkeyed problem and goes with it |
| Extra simulations | none proposed beyond the required figures; the chapter is qualitative and the required figures already open the views the text does not (rule 15) |
| Colour coding | time and velocity hues from the global tier, for the two 1.2 demos that carry a time or a speed; every other quantity in the chapter (a length, a mass, a count, a value and its uncertainty) is untyped and in ink; `c` joins the symbol table under the velocity type (new) |
| Inline exercises | Check Your Understanding items, after the passage they test (1.1's on law against theory goes after the models block; 1.2's two go after the prefixes; 1.3's stopwatch goes after uncertainty) |
| Exercises tab | end-of-section problems and conceptual questions |
| AP test prep | none in this chapter |
| PhET interactive links | dropped (1.1's Equation Grapher is about polynomials, not the section) |
| Cross-references to other chapters | plain text where the target is unbuilt; the Appendix C link points at the publisher's page (new) |
| Answers to book problems | book answer key only; never generated; unkeyed problems are left out; a "sample answer" to an approximation problem is kept as an open answer the reader compares with, not as a number checked to 2% (new) |
| Suggested approaches for open questions | generated, marked AI |
| Generated questions | none; the one node with no exercise of its own (physics) is noted in the 1.1 plan, no question generated |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 24 nodes written into `book.json` before the sections were built; `average-velocity` (2.3) is the one placeholder the chapter reaches, from the speed problems |
| Formulas | `ch01/chapter.json`: average speed (important, from Example 1.1), the 80 m conversion (not important), percent uncertainty (important) |
| Book manifest | `ch01` first in `book.json` chapters |

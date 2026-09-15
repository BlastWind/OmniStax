# Config: College Physics 2e, Chapter 16

Proposed by the agent after exploration (2026-09-07). Status: confirmed
2026-09-07. Each line is a setting and its value. Lines that
repeat the Chapter 2 config are unchanged unless marked.

| Setting | Value |
|---|---|
| Chapter | 16 Oscillatory Motion and Waves, modules m42239 to m42250, PDF pp. 703–752 |
| Unit of work | one section = one page; sections never folded (rule 11); 16.2 stays a page of its own |
| Order | 16.1 to 16.11 in book order; chapter intro as a short landing page |
| Loop | per section: plan message → build → stop for feedback |
| Prose | verbatim; objectives, summary, glossary pulled into views; Take-Home Experiment boxes kept verbatim as notes (new) |
| Sub-concept headers | agent decides per section, reported in the plan |
| Figures | a sim per idea or result the section introduces; every sketch and graph replaced by a sim; a photograph kept when it serves the narrative and the text, dropped when it is decoration, each listed in the plan (the Tacoma Narrows photograph is kept); no 3D expected, the chapter is planar (rule 14) |
| Sim sliders | whatever is interesting and variable in the idea (mass, force constant, amplitude, damping, drive frequency, string length, harmonic number) |
| Motion | steady oscillations and travelling waves run as an endless cycle; damped, driven and released motions are finite and get the time scrubber (new) |
| Figures that serve exercises | none of its own, corrected in the audit pass (2026-09-12) from the proposal above: the two AP items of 16.3 that carry images, the pair of oscillation graphs and the single spring graph, are unkeyed in the source, so under rule 13 both items were left out and their images with them, and 16.9 and 16.10 are not built. The chapter therefore has no `figure` row without a number and no bare “Figure” eyebrow; the one book image an exercise of this chapter refers to, the two skydivers beside problem 9 of 16.3, travels on that exercise card's own `figure` field, which is the second of the two routes the book's `RULES.md` allows |
| Extra simulations | agent proposes only those that open a view the required figures do not; user picks from the plan (rule 15) |
| Feedback stops | agent waits until the user has answered every point before building (rule 16) |
| Colour coding | t, x, v, a hues carried over; T, f and ω share the time hue; amplitude and wavelength share the position hue; force and force constant get a new force hue; kinetic, potential and total energy get a new energy hue; both new hues added to `book.json` and RULES.md at 16.1 (new) |
| Inline exercises | Check Your Understanding items, after the passage they test; an untyped exercise is classed by the header it sits under (16.1's is a conceptual question) |
| Exercises tab | end-of-section problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests; one placed early by the book is held for the later page (AP question 1 of 16.1 goes to 16.3) |
| AP test prep | included |
| Answers to book problems | book answer key only; never generated; unkeyed problems are left out unless the user supplies an answer |
| Suggested approaches for open questions | generated, marked AI |
| Generated questions | none; agent asks only when a concept has no book exercise testing it |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; one concepts table in the book's `book.json` that grows across the chapter; prerequisites in Chapters 2, 4, 5, 6 and 7 become placeholder nodes that open the OpenStax page until those sections are built |
| Formulas | the variables and equations tables of `ch16/chapter.json`, same shape as Chapter 2 |
| Book manifest | `ch16` added to `book.json` chapters when 16.1 is built, not before |

## Settings for 16.7 to 16.11 (prep pass, 2026-09-14)

Proposed by the prep agent for the wave that builds the five remaining
sections in parallel. Status: applied as proposed, on Chen's standing
instruction to finish the book in waves without check-ins; the per-section
stops of rule 2 and the plan reviews of rule 5 are replaced by a plan file
per section, written before the section is built and left for review after.
Every line of the table above still holds unless a line here changes it.

| Setting | Value |
|---|---|
| Sections | 16.7 (m42246), 16.8 (m42247), 16.9 (m42248), 16.10 (m42249), 16.11 (m42250), built in parallel by one agent per section; the introduction and 16.1 to 16.6 are built and are not touched |
| Loop | plan file → build → validator, the five in one wave; review after (changed) |
| Prose | verbatim, the book's slips included (16.7's "under damping" and "over damping" as two words in the glossary against "underdamped" and "overdamped" in the text; the unclosed sentence "as quickly as possible {term:Critical damping} is defined" in 16.7's paragraph, where the book runs two sentences together; 16.11's "Decibels will be discussed in some detail in a later chapter." with its opening parenthesis never closed), each named in `notes`; objectives, summary, glossary pulled into the tables and views; the boxed notes kept verbatim (16.9's Misconception Alert and Take-Home Experiment, 16.10's Making Career Connections) |
| Cross-references | plain text, as every page of the book writes them: 16.10's link to "Waves" (m42248) and 16.11's two links to "Superposition and Interference" (m42249) are the section titles in the book's words with no link, and the app links a figure or example number that sits on the same page by itself |
| Worked examples | numbered to the publisher's count: Example 16.7 in 16.7, 16.8 in 16.9, 16.9 and 16.10 in 16.11 |
| Figures | a sim per idea or result the section introduces; every graph and drawing replaced by a sim with the book's image kept as its original; a photograph kept where the text points at it or it shows the thing the passage is about (the Tacoma Narrows Bridge 16.26, the river's surface 16.32), dropped where it is a splash image (the swing 16.19, the piano 16.23, the ocean 16.27, the earthquake 16.40; the guitar and paper 16.31 is the plan's call); folds judged per section, the candidates being 16.20 + 16.21, 16.24 + 16.25, 16.29 + 16.30, 16.33 + 16.34 + 16.35 and 16.37 + 16.38 (rule 14) |
| Sim sliders | whatever is interesting and variable: the amount of damping (an untyped quantity the book never names, an ink slider), the coefficient of friction, the driving frequency, the wavelength and period of a wave, the phase and wavelength of a second wave, the string's length and wave speed, the two frequencies that beat, the power and the area. A choice, never a slider, for transverse against longitudinal, for the harmonic number and for the three damping regimes where a figure names them (rule 26.1) |
| Motion | decided per figure (rule 14), as the table above says: damped and driven motions are finite and get the scrubber; a travelling wave, a standing wave, the string's harmonics and beats are endless and run as a cycle with the plain transport; the superposition of two waves and the intensity figures are still unless the plan argues otherwise; a still figure carries no transport (new, from the job's standing decisions) |
| 3D | none; every figure of the five is a graph, a strip or a cord drawn along a line, and each is clearest flat (rule 28.1) |
| Figures that serve exercises | the second of the two routes the book's rules allow, as the chapter already uses it: the wave graph of 16.9's last AP item (`new.jpg`, keyed "2π m") and the rarefaction image of 16.10's third AP item travel on the `figure` field of their exercise cards; the seismograph inside 16.9's unkeyed problem 10 leaves with it. No `figure` row without a number (changed from the audit line above, which left out unkeyed AP items with images: under this job's standing decision an unkeyed AP choice item is kept as an open item with its options, so the rarefaction item stays, with its image on its card) |
| Colour coding | no new type. The five bind, as their figures draw them: `time` ($t$, $T$), `position` ($x$, $X$, $d$, $\lambda$, $x_1$, $x_2$, $\lambda_1$, $\lambda_2$, $X'$), `velocity` ($v_\text{w}$), `force` ($f$ the friction), `energy` ($W_\text{nc}$, KE, PE, $E$), `stiffness` ($k$), `frequency` ($f$, $f_0$, $f_1$, $f_2$, $f_3$, $f_\text{B}$, $f_\text{ave}$), Chapter 7's `power` ($P$) and Chapter 17's `intensity` ($I$, $I'$), both used by name and never restaged. The amount of damping, $\mu_\text{k}$, $m$, the string's length $L$, the harmonic number $n$, the area $A$ and every ratio stay in ink; $g$ is an acceleration and is coloured only if a figure draws it. `ch16/COLOR.md`, written in this pass, says which section binds what |
| Symbols | eight rows staged in `ch16/book-rows.json` and merged: `f_0` (`f_0`, frequency, `\kfo`), `f_ave` (`f_{\text{ave}}`, frequency, `\kfave`), `x_1` and `x_2` (position, `\kxone`, `\kxtwo`), `λ_1` and `λ_2` (position, `\klamone`, `\klamtwo`), `I_intensprime` (`I'`, intensity, `\kIntensprime`, since `I_prime` is Chapter 10's moment of inertia), `X_prime` (`X'`, position, `\kXprime`). Rows used as they stand: `λ` (`\klam`), `v_w` (`\kvw`), `f_1`, `f_2`, `f_3`, `f_B`, `I_intens`, `I_0` (Chapter 17's), `X`, `x`, `d`, `k`, `f`, `T`, `t`, `W_nc`, `KE`, `PE`, `E`, `P`, `f_fric`, `μ_k`, `m`, `g`, `A`, `L_len`, `n` |
| Inline exercises | the eight Check Your Understanding boxes (two in 16.7, one in 16.8, one in 16.9, three in 16.10, one in 16.11), after the passage they test |
| Exercise placement | an exercise goes with the section that introduces what it tests, and nothing in the five is placed early by the book: 16.8's energy problems are tagged to 16.5's `shm-energy` and 7.4's `elastic-potential-energy` beside 16.8's skill; 16.7's third conceptual question to 15.6's `second-law-entropy-statement` beside `damped-harmonic-motion`; 16.8's problem 4 tests 16.7's `friction-damped-oscillator` and is unkeyed, so it is left out and named in 16.8's `exercise_notes` |
| Answers to book problems | book answer key only; never generated; the 15 unkeyed problems of the five (16.7: 1; 16.8: 2, 4; 16.9: 2, 4, 6, 8, 10; 16.10: 2, 4, 6; 16.11: 2, 4, 7, 9) are left out and named in the notes |
| AP test prep | included; an unkeyed AP item is kept as an open item with its options as the book prints them and an AI-marked suggested approach, never as a graded choice (16.7's item 2; 16.8's item; 16.9's items 2 and 4; 16.10's items 1, 3, 5 and 7) |
| Suggested approaches for open questions | generated, marked AI: the nine conceptual questions and the eight unkeyed AP items |
| PhET interactive links | dropped (Wave on a String in 16.9, Wave Interference in 16.10) and named in `notes` |
| Concept nodes | 28 nodes staged in `ch16/book-rows.json` before the sections are built (6 for 16.7, 4 for 16.8, 6 for 16.9, 8 for 16.10, 4 for 16.11), with edges into Chapters 2, 5, 7, 11, 13, 15 and the built sections of 16, and within the chapter; the 18 nodes of 16.1 to 16.6 are carried in the staged file unchanged, since a merge replaces every row the chapter owns |
| Formulas | `ch16/chapter.json`: the stated results important ($W_\text{nc} = \Delta(\text{KE} + \text{PE})$, $v_\text{w} = \lambda/T$, $v_\text{w} = f\lambda$, $f_1 = v_\text{w}/2L$, $f_\text{B} = \lvert f_1 - f_2\rvert$, $I = P/A$, energy $\propto$ amplitude squared) and the worked substitution steps not; no anchor on any new row, since the validator refuses an anchor into an unbuilt section, and the chapter pass writes them from the section plans (rows of 16.1 to 16.6 keep theirs) |
| Credit and date | `ai` is `{"text": "Claude Opus 5", "figures": "Claude Opus 5"}` and `built` is `2026-09-14` on every page of the five |

## What the build changed (chapter pass, 2026-09-14)

The five sections were built in one wave and passed over together. Four
lines of the block above were settled differently by the build, and two
things about the tools are recorded here for the pass that maintains them.

| Line | What the build settled |
|---|---|
| AP test prep | 16.11 prints no AP test prep at all, so the eight unkeyed AP items the block above lists for the wave sit in 16.7 to 16.10 alone: one in 16.7, one in 16.8, two in 16.9 and four in 16.10 |
| Colour coding | 16.8 binds `stiffness`, `power` and `energy` beyond the frequency, position and time the colour plan expected, because `sim-driven-energy` draws the store of energy the marching soldiers fill; 16.11 binds `force` and `stiffness` beyond the five expected, because `sim-amplitude-energy` draws the restoring force and shades the work under it; 16.9 binds no frequency, because both of its figures set a period and read a speed from it. `ch16/COLOR.md` records all of this as built |
| Anchors | every variable and every equation row of the five carries an anchor, written in this pass from the section plans: 47 variables and 19 equations, each pointing at the block of `text.html` that introduces it |
| Figure numbers | the chapter's figures run 16.20 to 16.41 without a gap other than the four splash photographs the sections dropped (16.19, 16.23, 16.27 and 16.40), and no exercise carries a figure row of its own, the two images that serve exercises travelling on their cards |

Two gaps in the tools, for the pass that maintains them, neither of them a
change to any rule:

- Math inside a caption attribute. A `$…$` written into
  `data-original-caption` is swept into KaTeX markup that carries quotes,
  the attribute ends early and the rest of the caption spills into the page
  as text, and neither `npm run check:content` nor the build reports it.
  Three builders of this wave met it. Until the sweep is taught to leave
  attributes alone, or the validator is taught to read them, a caption
  attribute writes its symbols as plain text, as the book's `RULES.md` now
  says and as every caption attribute of 16.7 to 16.11 does.
- `weights_by`. Root rule 20 asks that a weighted `exercise_concepts` row
  be marked `"weights_by": "ai"`, and the field is in the app's schema and
  in `docs/content-format.md`, but the `exercise_concepts` shape in
  `omnistax-content/tools/ost.py` lists only `exercise`, `concept` and
  `weight`, so `ost` refuses the field as unknown and no row can be written
  through the tool that carries it. The tool's table is the thing to widen;
  the rule stands as it is. Twenty-eight rows of the five sections carry a
  `weight`, and not one of them can carry the mark the rule asks for until
  the tool's table is widened.

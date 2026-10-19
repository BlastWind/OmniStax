# Chapter 0 build status

Kept current by whoever touches the chapter (read it first). Config: `config.md`; colour: `COLOR.md`; the chapter's rows are merged (`ost rows diffyqs concepts --chapter 0`).

## Done

- Prep (paused job, 2026-10-19): `exploration.md`, `config.md`, `COLOR.md`, `chapter.json` (sections 0.1–0.3, 37 variables), `book-rows.json` merged (31 concepts, 17 forms, prereqs), every section converted to `source.md`.
- **0.2 Introduction to differential equations** (sec-0.2 task, 2026-10-19): the book's template section. `plan.md`, `text.html` (4 subsections, 2 examples, 5 figures, 3 inline Try Its placed), `figures.js` (Figure 1 live family under C, the modelling cycle as a faithful copy, Figure 2 live under P(0) and P(10), the four-fundamental-equations Sim with a choice and a dragged point, the Gateway Arch Sim), `section.json` (lead, 5 figure rows, 21 `introduces` + 43 `uses` coverage rows, 20 exercises: 0.2.1–0.2.3 inline and 0.2.4–0.2.14 with AI-marked solutions checked with SymPy, 0.2.101–0.2.106 with the book's `\exsol`, 39 exercise_concepts rows). `ost check diffyqs --section 0.2` clean; built and checked with Playwright in light and dark (no console or page errors, every sim has a canvas, no transports, the inline Try Its render, sliders and the choice change the figures and the readouts read true).
- **0.1 Notes about these notes** (sec-0.1 task, 2026-10-19): `plan.md`, `text.html` (the opening paragraph and the book's 4 subsections, 1 figure: the Organisation diagram as a faithful inline-SVG copy whose 10 chapter names link to the chapters, the book's SVG behind the Original button; 6 book footnotes carrying the Further Reading entries of [EP], [BD], [I], [F], [BM], [T], labelled by their keys), no `figures.js`, `section.json` (lead, 1 figure row, 7 `uses` coverage rows on 0.2's three concepts, no exercises). `ost check diffyqs --section 0.1` clean; built and checked with Playwright in light and dark (no console or page errors, the Original toggle and the chapter links work; an SVG link opens by full navigation, since `Shell.svelte`'s `onLink` reads `link.target`/`link.origin`, which an SVG `<a>` lacks).

## In progress

Nothing in this chapter at the time of writing; 0.3 and 0.1 are separate tasks.

## Next

1. 0.3 Classification of differential equations (its own task; the template is 0.2 now).
2. 0.1 Notes about these notes (config 3: a section page, the Organisation diagram a faithful copy with links, no exercises).
3. Chapter pass (`docs/prompts/briefs/final.md`): apply 0.2's "Wanted at chapter level" (the `eq-gateway-arch` form's `ktex` should write `\ky`), rerun `npm run colours:default -- diffyqs`, write `log-pass.md` and `ost log diffyqs 0`.

## Decisions Chen must hear

- 0.2's template conventions (end of `ch00/0.2/plan.md`) are what every later section copies; the paused job's list was corrected to what was actually built (inline placement after the paragraph the book prints before the exercise, `kind: figure` for the unnumbered modelling cycle, `uses` coverage on every leaning span, answer shapes per question).
- Figure 2's two sliders are typed `point` (the chapter `COLOR.md`'s two measured points), not untyped as the paused plan said; the plan now says so.
- The Gateway Arch Sim: the catenary and the parabola through the same top and feet differ by up to 90 ft at the Arch's own C = 3.0022 (the paused plan said 37 ft; the figure computes it live and the plan is corrected). The arch's height from the book's formula is 625.07 ft.
- The text writes the arch's `y` as `\ky` (function), matching the figure; the merged form `eq-gateway-arch` still carries plain `y` in its `ktex` and should be set in the chapter pass (staged row, `ost set diffyqs forms eq-gateway-arch`).
- App limitation, not a content fault: the figure linker links only "Figure N.M", so Chapter 0's "Figure 1"/"Figure 2" are linked by hand in the prose; the same applies to 0.3's "Figure 3". Equations (1)–(5) are linked by hand as `<a href="#eq-n">(n)</a>` everywhere anyway.
- Exercise 0.2.11 d) makes x a function of y; its x and x′ stay plain rather than wear the section's x (a function of t) so the hover meaning does not mislead. 0.2.13's city population wears `\kP` (the type is right; the hover meaning says bacteria).
- The book's note "Exercises with numbers 101 and higher have solutions." is the `exercises_lead`; the book prints it between 0.2.14 and 0.2.101.

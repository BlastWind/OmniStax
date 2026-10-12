# Chapter 7 build status

Task ch07, port 8124, scratch /home/flober/.claude/jobs/a080ae38/tmp/ch07/ (tools: `draft.py` source → draft; `enrich.py` + `<sec>/conf.py`; `<sec>/finish.py` → text.html; `buildex.py` + `<sec>/spec.py`; `mksection.py` + `<sec>/sec.py` → section.json (`--with-review` lands review rows); `mkrows.py` → book-rows.json; `anchors.sh`; `build-real.sh`; `shoot.py <sec>`; `verify/` key checks).

## Done (2026-10-12)
- Prep, intro, 7.1–7.7, chapter pass. Merged (`ost merge calculus 7`: 40 concepts, 77 edges, symbol f_4) after ch06; logged as Pass 7.
- Anchors on all 33 forms and every variables row; review exercises landed; corrections in place.
- Checks: `ost check` clean for ch07 (remaining errors belong to ch06 6.5 and ch08 8.1, in progress); content tests 89/90 (the one failure is ch06's); astro check 0 errors; real build; Playwright light and dark on every page: no page errors, images load, every figure.sim has a canvas, no transports (all figures still), Try Its placed; one fix pass (7.2 legend, 7.3 degenerate triangle, 7.5 bracket, 7.6 ticks and readout notes, 7.7 horn scale, 7.2 Figure 7.2 legend).

## Decisions
- Equations: 21 numbered (classless <equation> are numbered too), not 7.
- Mₙ, Tₙ, Sₙ written \kM_{n} etc. on rows M, T, S (as ch05's Lₙ); the error-bound M plain.
- u, v of integration by parts ink.
- Review placement and left-outs as in log; 431 left out with 430.
- Corrections: ex 77, 291, 333, r417 keys; 7.3 dx, Ex 7.26, 7.27; 7.6 Simpson derivation, Ex 7.45, CP 7.24, CP 7.25; 7.7 Ex 7.49 (two), Ex 7.50.

# Chapter 4 build status

Agent: chapter agent (brief /home/flober/.claude/jobs/a080ae38/briefs/chapter.md, N=4, port 8121). Scratch /home/flober/.claude/jobs/a080ae38/tmp/ch04/ (ost wrapper `ost`, survey.py, digest.py).

## Done
- Sources converted (`tools/convert.py 4`), 11 modules; media copied to media/ch04 (142 files).
- Prep: exploration.md, config.md (agreed by carry-over), COLOR.md, chapter.json, book-rows.json; `ost merge calculus 4` (55 concepts, 109 edges, 10 symbols + V_prime, r_prime).
- intro page (photo, link to Example 4.3).
- 4.10 built (2 Sims), review 545 set there.
- Chapter pass: review exercises landed in 4.1–4.9 (source_section 4.10), all variables and form anchors set, COLOR.md and config.md updated to what was built, log-pass.md appended as LOG Pass 9; ost check clean for ch04 (the one book error is 6.5's `work`, another chapter's); npm test 903/905 (both failures ch06: 6.5 work, 6.6 missing section.json); astro check 0 errors; full build + Playwright light/dark/reduced on all 11 pages: no console or page errors, no broken images, every Try It placed.
- 4.9 built (3 Sims, 4 copies, 1 kept image), checked, Playwright clean.
- 4.8 built (2 Sims, 4 copies), checked, Playwright clean.
- 4.7 built (6 Sims, folds 4.62+4.63, 4.64+4.65, 4.69+4.70), checked, Playwright clean.
- 4.6 built (4 Sims, 22 copies), checked, Playwright clean.
- 4.5 built (1 Sim, 9 copies), checked, Playwright clean.
- 4.4 built (1 Sim folding 4.25+4.26, 7 copies), checked, Playwright clean.
- 4.3 built (2 Sims, 7 faithful copies), checked, Playwright clean.
- 4.2 built (5 still Sims), checked, Playwright clean.
- 4.1 built: text, figures (4 moving scenes + 1 still), section.json, checked, Playwright light/dark/reduced clean.

## In progress
- none: chapter complete.

## Next
- Orchestrator: commit; colours:default at the end of the run (the `error` hue now sits near `function`).

## Decisions so far
- Review exercises 525–552 placed: 525→4.4, 526→4.3 (AI approach), 527→4.5, 528→4.5 (AI approach), 529→4.5, 531→4.2, 533→4.3, 535 537→4.5, 539 547→4.6, 541→4.8, 543→4.9, 545→4.10, 549→4.1, 551→4.7; unkeyed computational 530 532 534 536 538 540 542 544 546 548 550 552 left out.
- Tooling: scratch conv.py (source.md → text.html draft + exercise rows), sec.py (section.json assembly), s4N.py per section (re-runnable config), shoot.py (Playwright), build.sh.
- 4.1: four moving scenes share one pattern (scene + graph of the asked quantity vs t, tangent slope = the rate), each loop ends and holds on the example's instant; rocket assumes constant 600 ft/sec (stand-in, book gives the instant only); unnumbered step-5 triangle kept as a still faithful copy (kind figure, eyebrow "Figure"); no extra Sims; all 22 even exercises computational, left out; r549 deferred to chapter pass (checker refuses source_section 4.10 until 4.10 is built).
- 4.2: Figures 4.7–4.10 not folded (each example cites its own); one still kind: f, tangent L, dragged x, error bracket; 4.7 and 4.10 keep the book's (b) zoom window as a second panel; sine figure in degrees; Figure 4.11 stand-in f = 1 + x²/4 (book has no formula; avoids answering Checkpoint 4.9); AI approaches 46, 48, 87, 88, 89 (87, 89 odd but unkeyed); 19 even computational left out; r531 deferred; numbered equations get \tag{4.N} and "Equation 4.N" (book numbers them; conv counts chapter-wide).
- Colour note: `error` type is first used in ch04; its current default hue sits near `function` (both red); the end-of-run colours:default reassignment should split them.
- 4.3: Figure 4.19 made live as sim-closed-interval (drag a, b; candidates and absolute extrema re-found); Figure 4.14 stand-in 2x³−3x²+1 then 5−6(x−2) for the book's formula-less sketch, as sim-local-extremum (c and an interval I); Figures 4.13, 4.15 six- and five-panel faithful copies; 4.16–4.18 not folded; correction c-critical-point ("a critical number" for the point); AI approaches 90, 92, 94, 96, 98 and 91, 93, 105, 107 (key "Answers may vary"); 140/141 stemless; 24 left out; r526 (AI) and r533 deferred.
- 4.4: Figures 4.25 + 4.26 folded into sim-mean-value (secant, parallel tangents, and the proof's g(x) in a panel below; dashed circle where f(a)=f(b) = Rolle); stand-in cubic; corrections c-decreasing (book's f(x)₁ for f(x₁)), c-key-191/c-key-193 (193's key is 191's car proof: moved to 191, 193 gets an AI approach); AI approaches 148, 150, 168, 170, 182, 184, 190, 192, 193; 15 left out; r525 deferred.
- 4.5: Figure 4.37 made live as sim-shape-signs (f, f′, f″ stacked, positive-shaded, drag x; choice of Figure 4.37's stand-in 2 − cos x and Examples 4.17, 4.19, 4.20); stand-ins for formula-less 4.31 (built from a chosen g′), 4.35, 4.38; correction c-local-maximum-at-0; AI approaches 194, 196, 198, 200, 242, 244, 246, 248, 250 and 217, 219 ("Answers will vary"); 20 left out; r527–529, 535, 537 deferred. f″ is not drawn dashed (plot has no dash option); it sits in its own labelled panel.
- 4.6: Sims sim-epsilon-n (4.48, on Ex 4.22's 2+1/x), sim-m-n (4.49, on x³), sim-leading-term (4.52, window choice 2/10/100/1000, referents poly-f, lead-g), sim-oblique-asymptote (4.56, window choice); 22 faithful copies incl. 4 unnumbered example graphs (eyebrow "Figure"); Example 4.21's figures not folded; corrections c-limit-minus-infinity (Ex 4.27), c-interval ((−1,−1) in Ex 4.29), c-cp22-exponent, c-cp25-sign, c-cp26-hint; 307's "and" set as \text; AI 306, 308, 310; 27 left out; r539, r547 deferred.
- 4.7: every scene joined to the graph of its optimized quantity; sim-revenue shows R = n×p as the rectangle under n(p); boxes in a locked perspective (F.view/face); R_prime existed (another chapter), S_prime added; variables A′,V′,T′,R′,S′ rows; correction c-cp35-rectangle; bare "$50" and ¢ handled as markup; AI 312, 314; 20 left out; r551 deferred. Video note dropped (notes).
- 4.8: sim-lhopital-zoom (4.71 on Ex 4.38b's sin(πx), ln x; window choice), sim-exp-vs-power (4.75, p slider); compared curves are F.cat instances, not referents (departs from chapter COLOR.md plan); corrections c-all-limits (Ex 4.43), c-fig-4-71 (caption, figure note); AI 362, 364, 366; 22 left out; r541 deferred.
- 4.9: sim-newton is a story slider (steps x₀…x₅) on Ex 4.46's cubic, x₀ ∈ [1.1, 3] (avoids Checkpoint 4.45); sim-cobweb (Ex 4.49), sim-logistic-cobweb (project, r slider, 3.55 detent); Figure 4.80 stand-in x³/4 − x; Mandelbrot image kept as photo; correction c-cp48-index; AI 436, 446, 448, 454; 26 left out; r543 deferred.

# Chapter 3 build status

- Done: prep (9e1efd6e); intro; 3.1–3.9 (each: text, figures, section.json, check clean, Playwright light/dark clean); review rows landed; config.md updated; log-pass.md written.
- Chapter pass done: ost log (Pass 8), final build + Playwright light/dark over all ten pages clean; astro check 0 errors; npm test 904/905 and check:content 1 error, both from 6.5 (concept `work` introduced twice, Chapter 6's in-progress work).
- Next: nothing; report sent.
- Tools: tmp/ch03/draft.py (source → draft html + ex.json), enrich.py (macros + concept spans), lib/sec.py (section.json rows), <sec>/fix.py + mk.py per section, shoot.py (Playwright), build.sh.

## Decisions
- intro: photo Figure 3.1 kept with credit; link to Example 3.8.
- 3.1: Figs 3.3+3.4 folded (secant→tangent, x-form/h-form choice); Fig 3.5 a zoom sim (w slider, nice axes); 3.6–3.9 live still copies; 3.8 stand-in s(t)=1+3 sin(πt/9); photos 3.2, 3.10 kept; numbered equations carry \tag{3.N}; 42, 44 AI proofs; correction cp 3.2 hint; r391 here.
- 3.2: figlib F.deriv + F.secants; Figs 3.12+3.13 folded (tracer), 3.14+3.15+3.16 folded (three failures, h slider), 3.17 smooth-track sim; Ex 3.13 images kept; AI answers 74, 76, 90, 92, 94, 98, 100, r368, r370; corrections cp 3.10 hint, e105 key; ost.py find_row fix.
- 3.3: extra Sim sim-product-rule-area (referents factor-f/g); Fig 3.18's f, g as referents; photo 3.20 kept; sheet links on book words; correction cp 3.17.
- 3.4: Fig 3.22 sim (error gap in `error`), Figs 3.23+3.24 moving particle; Ex 3.34 graph live; no calculator link; symbols C′, R′, v′; corrections Ex 3.34 v(2), keys 153, 167, 169. Recolour needed: error vs function both red.
- 3.5: Fig 3.25 h-slider sim, 3.26 still, 3.27 tracer; AI derivations 205–208; r389 moved to 3.6.
- 3.6: extra Sim sim-chain-stretch; symbol k′; correction cp 3.40 hint.
- 3.7: Fig 3.28 sim (referents tangent-f/tangent-inverse), 3.29 still triangle; corrections Ex 3.64 ref, cp 3.43.
- 3.8: Fig 3.30 choice sim, 3.31+3.32 folded with the ellipse (direction slider, not a drag); corrections split domain, Ex 3.70 d/dy.
- 3.9: Figs 3.33+3.34 folded (base slider, special e), 3.35 tracer; 366 AI; corrections Ex 3.79 ref, e361 key.

# Plan: 4.1 Related Rates (m53604)

Source: `source.md`, converted with `tools/convert.py 4`. Status: plan; config 2 waives the review for this run, decisions reported afterwards. Built 2026-10-12.

Three objectives, an opening paragraph, one Problem-Solving Strategy, Figures 4.2 to 4.6 (4.4 the opener's photograph again), one unnumbered triangle, Examples 4.1 to 4.4 each with its checkpoint (4.1–4.4), five Key Concepts, no Key Equations, 45 section exercises (23 keyed), one glossary term. One page.

## Sub-concepts (page headers)

The book's headers apply (root rule 3).

0. `intro` (no header): the opening paragraph on the balloon, the section's own introduction (root rule 21.3).
1. `setting-up` **Setting up Related-Rates Problems**: related rates defined on the balloon, Example 4.1 (Inflating a Balloon) with Figure 4.2 and its checkpoint, the Problem-Solving Strategy note `related-rates-strategy`, and the paragraph on substituting too soon. Introduces `related-rates`, `solving-related-rates-problems`.
2. `examples-of-the-process` **Examples of the Process**: Example 4.2 (the airplane, Figure 4.3), Example 4.3 (the chapter opener's rocket, Figures 4.4 and 4.5 and the unnumbered triangle), Example 4.4 (the funnel, Figure 4.6), each with its checkpoint. Uses both concepts and `chain-rule`, `implicit-differentiation`, `trigonometric-functions`.

Objectives to `objectives`; Key Concepts to `summary_html`; the glossary word on `related-rates`. Example ids are the book's (`fs-id1165042990634`, `fs-id1165043105132`, `fs-id1165043116552`, `fs-id1165043112989`); the chapter introduction links to Example 4.3 by its id.

## Concepts (merged in prep)

`related-rates` (definition, type derivative): introduced in `setting-up` at the term. `solving-related-rates-problems` (skill): introduced at the strategy note. Prerequisite edges as merged.

## Colour, referents and function tokens

Types (chapter `COLOR.md`): `derivative` for every rate, the symbols dV/dt, dr/dt, dx/dt, ds/dt, dh/dt, dθ/dt and V′(t), r′(t), and the words "rate of change" where they name the rate of a quantity of the problem; `angle` for θ. The changing quantities V, r, x, s, h are the variables of the equation relating them and stay ink, written plain; in the figures their graph against t is the curve of a function of time and wears `function`, its tangent `line` and its slope `derivative`. No referents: each scene has one of each thing. No function tokens: the section's formulas relate quantities (V = 4πr³/3, x² + 4000² = s²) and are not rules in x for the grapher.

## Figures

The four examples are the section's scenes, and each is a clock: quantities change with time, which is what related rates are. One pattern serves all four: the scene above or beside, the graph of the quantity asked about against t beside it with its tangent at the current time, so the rate the example asks for is the tangent's slope, and a readout writing the step-4 equation with the live numbers. Each loop runs from a start state to the example's instant and holds there, so the figure ends on the book's answer.

- `sim-balloon` · Figure 4.2 · `related-rates`, `solving-related-rates-problems` · value add: flow by animation and standardisation: the book's three balloons become one balloon filling at 2 cm³/sec, so the reader sees the radius grow ever more slowly while the volume grows at a constant rate · arrows: kinematic (the air flowing in at the neck) · moving, model time 0 to 56.3 sec (r from 0.5 cm to 3 cm), then holds at r = 3 · no sliders (the example fixes the rate; the transport scrubs t) · headline "t = 30.0 sec: r = 2.44 cm, growing at 0.0267 cm/sec" live · graph beside (the balloon is round and tall): r(t) in `function`, the tangent at t in `line` · readout dV/dt = 4πr² dr/dt with the numbers · 2D.
- `sim-plane` · Figure 4.3 · `related-rates`, `solving-related-rates-problems` · value add: flow by animation: the plane flies from straight over the man to straight over the tower at 600 ft/sec, the triangle redrawn as it goes, and s(t) bends from flat to steep, so ds/dt climbs from 0 to 360 ft/sec · arrows: kinematic (the plane's velocity, dx/dt) · moving, model time 0 to 5 sec (x from 0 to 3000 ft), holds over the tower · no sliders (a speed slider would answer the checkpoint) · headline "x = 1800 ft: s = 4386 ft, increasing at 246 ft/sec" · graph beside (the triangle stands 4000 ft high over 3000 ft, taller than wide): s(t) and its tangent · readout x dx/dt = s ds/dt with the numbers · 2D.
- `fig-rocket-photo` · Figure 4.4 · photo, kept: Example 4.3's problem is printed under it and it is the chapter opener's question (config 20); its caption is the credit clause alone, kept whole.
- `sim-rocket-camera` · Figure 4.5 · `related-rates`, `solving-related-rates-problems` · value add: flow by animation: the rocket rises past the camera 5000 ft away while the camera's line of sight tilts after it, and θ(t) flattens as the rocket climbs · arrows: kinematic (the rocket's velocity dh/dt) · moving, model time 0 to 5/3 sec (h from 0 to 1000 ft) at the instant's 600 ft/sec, held constant over the run as a stand-in (the book gives only the velocity at h = 1000), holds at h = 1000 · no sliders · headline "h = 600 ft: θ = 0.1194 rad, turning at 0.1183 rad/sec" · graph beside: θ(t) in `angle`, drawn faint on to t = 8 sec so its flattening shows, and its tangent · readout dh/dt = 5000 sec²θ dθ/dt with the numbers · 2D.
- `fig-camera-triangle` · Sim (replaces the unnumbered image in Example 4.3's step 5, `CNX_Calc_Figure_04_01_005`, kept as its original) · `solving-related-rates-problems` · value add: standardisation only, a faithful still copy: the triangle with legs 5000 and 1000 and hypotenuse c, the angle θ · arrows: none · still · no controls · no headline · no graph · 2D.
- `sim-funnel` · Figure 4.6 · `related-rates`, `solving-related-rates-problems` · value add: flow by animation: the water drains at 0.03 ft³/sec and the level falls faster the lower it gets, the similar triangles r/h = 1/2 drawn on the cone · arrows: kinematic (the drops leaving the tip) · moving, model time 0 to 68.7 sec (h from 2 ft to 1/2 ft), holds at h = 1/2; it stops before h = 1/4, the checkpoint's height · no sliders · headline "h = 1.00 ft: the level falls at 0.038 ft/sec" · graph beside (the funnel is vertical): h(t), its tangent · readout dV/dt = (π/4)h² dh/dt with the numbers · 2D.

Labels: each scene labels its quantities once (r; x, s and 4000 ft; h, θ and 5000 ft; h and r) on the scene; the graph's axis titles name the quantity and the tangent is named by hover, since it moves (rule 26.7). Photographs: Figure 4.4 kept (above). Exercise figures: the book's images stay in their cards (5's ladder, 7's planes, 31's tank, 39's lighthouse, the baseball diamond of 42–45).

## Exercises

- Checkpoints 4.1–4.4, kind `checkpoint`, inline after Examples 4.1–4.4, hint and answer behind reveals (config 6). 4.1 is a number (1/(72π) ≈ 0.0044 cm/sec); 4.2 (500 ft/sec), 4.3 (1/10 rad/sec) and 4.4 (−0.61 ft/sec) are numbers.
- Section exercises 1–45, kind `exercise`, each with its group's stem (config 10), "[T]" kept. The 23 odd ones are keyed and kept; the cone stem covers 25–27 and the pool stem 32–34, the book printing no new stem for the standalone problems after them, so 28–31 and 35–36 carry the group stem of their own kind only where the book's stem names them. The 22 even ones are computational (related-rates problems) and are left out, named in `exercise_notes` (config 12).
- Review exercise 549 (the car compactor, keyed) is set here, `source_section` 4.10; 550 (kinetic energy, unkeyed) is left out and named in 4.10's notes.
- Every card tagged with `solving-related-rates-problems` and `related-rates`; the angle problems (23, 37, 39, 41) with `trigonometric-functions` too. Bloom Apply.

## Extra simulations (rule 15)

Judged and dropped: a "substitute too soon" toggle on the plane (the book's note shows 0 = s ds/dt in two lines; a figure would only repeat it, and a toggle that breaks the figure is a visual setting); a ladder-sliding Sim for exercise 5 (it would answer a keyed exercise). None built.

## Wanted at chapter level

- variables `4.1/dV/dt`, `4.1/dr/dt`, `4.1/V_prime`, `4.1/r_prime` → `4.1-setting-up`; `4.1/dx/dt`, `4.1/ds/dt` → `4.1-fs-id1165043105132`; `4.1/dh/dt`, `4.1/dθ/dt`, `4.1/θ` → `4.1-fs-id1165043116552`.
- symbols `V_prime` (V′, `\kVprime`) and `r_prime` (r′, `\krprime`), and variables rows for them and for θ (the camera's angle, type angle).
- Review 549 waits for 4.10's build only in that the checker refuses a `source_section` the app has not built; added in the chapter pass if refused here.


## Derivations

- Example 4.3 · Chapter Opener: A Rocket Launch · score 5 · not built: a related-rates worked example that applies the section's strategy (triangle, equation, differentiate, substitute); the Pythagorean side line is part of that method, so it stays as printed
- Example 4.4 · Water Draining from a Funnel · score 4 · not built: the same, the cone's volume and similar triangles set up by the strategy and the numbers substituted

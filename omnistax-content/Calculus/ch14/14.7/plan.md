# Plan: 14.7 Maxima/Minima Problems (m53942)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Three objectives, an opening paragraph, three definitions, four theorems (Fermat's, the second derivative test, the extreme value theorem, finding extreme values), two problem-solving strategies, Examples 14.38–14.41, three checkpoints (14.34–14.36), thirteen figures (14.46–14.58), Equation 14.43, five Key Concepts, one Key Equation, 48 section exercises (24 keyed), three glossary terms.

## Sub-concepts (page headers)

0. The opening paragraph (`extrema-intro`).
1. `critical-points` **Critical Points**: the definition, Example 14.38 with Figure 14.46, Checkpoint 14.34, local and global extrema (definition, Figure 14.47), Fermat's theorem.
2. `second-derivative-test` **Second Derivative Test**: the saddle z = x² − y² (Figure 14.48, definition), the discriminant (Equation 14.43) and the test (Figure 14.49), the strategy, Example 14.39 with Figures 14.50, 14.51, Checkpoint 14.35.
3. `absolute-extrema` **Absolute Maxima and Minima**: bounded sets, the extreme value theorem, finding extreme values, the strategy, Example 14.40 with Figures 14.52–14.55, Checkpoint 14.36, Example 14.41 (the chapter opener) with Figures 14.57, 14.58.

## Concept nodes

Introduced: `critical-point-of-a-function-of-two-variables`, `local-extremum-of-a-function-of-two-variables`, `fermats-theorem-for-functions-of-two-variables`, `saddle-point`, `discriminant` (`eq-discriminant`), `second-derivative-test-for-functions-of-two-variables`, `using-the-second-derivative-test`, `bounded-set`, `extreme-value-theorem-for-functions-of-two-variables`, `finding-extreme-values-of-a-function-of-two-variables`, `finding-absolute-maximum-and-minimum-values`. Uses: `critical-point`, `local-extremum`, `fermats-theorem`, `second-derivative-test`, `extreme-value-theorem`, `closed-set`, `vertical-trace`, `hyperbola`.

## Colour

f_x … f_yy and g_x … g_yy wear `derivative`; f, g `function`; the discriminant D, which shares its letter with the domain D of the last part, stays ink in both. Critical points and extrema `point`; graphs `surface`; domains `region`; boundaries and traces `curve`. No referents.

## Figures

Heights at a stated fraction of the scale of x and y where the graph is steep (rule 28.4); z ticks read true values. Five live scenes and two painted ones (`locked`) keep the page within config 23.

- `sim-critical-g` · Figure 14.46 · `critical-point-of-a-function-of-two-variables` · standardisation and 3D: a painted view (locked) of g's graph with (−1, −1, 5) marked · still · no controls.
- `sim-hemisphere-extrema` · Figure 14.47 · `local-extremum-of-a-function-of-two-variables` · painted (locked): the hemisphere, its maximum at the top and the circle of minima at the rim · still.
- `sim-second-derivative-test` · Figure 14.48 + 14.49 · `second-derivative-test-for-functions-of-two-variables`, `saddle-point`, `discriminant` · variation and 3D: f = ½(Ax² + 2Bxy + Cy²), whose second partials at the origin are A, B, C; sliders A, B, C (−2 to 2, defaults the saddle z = x² − y²) with dashed specials where D = AC − B² = 0; the two traces through the origin show the saddle's up-and-down; the book's three panels (a), (b), (c) are states of it · readout D with the verdict · 3D free orbit.
- `sim-local-extrema` · Figure 14.50 + 14.51 · `using-the-second-derivative-test` · 3D: a choice of Example 14.39's f (minimum) or g (minimum and saddle), points marked with coordinates · still · readout the test's numbers.
- `sim-extrema-rectangle` · Figure 14.52 + 14.53 · `finding-absolute-maximum-and-minimum-values` · 3D: the rectangle on the floor, its four segments carried onto the graph, the interior critical point (min 17) and the boundary candidates, the corner maximum 36 · still · readout the candidates' values.
- `sim-extrema-disk` · Figure 14.54 + 14.55 · `finding-absolute-maximum-and-minimum-values` · 3D: the disk and its circle carried onto the graph, the interior minimum −13 and the boundary maximum ≈ 44.844 · still. (The book's Figure 14.55 labels points that do not match the example's solution; the Sim marks the solution's.)
- `sim-golf-profit` · Figure 14.57 + 14.58 · `finding-absolute-maximum-and-minimum-values` · 3D: the profit over 0 ≤ x ≤ 50, 0 ≤ y ≤ 25 with its maximum (21, 3, 648) · still.
- Figure 14.56 (golf balls inside Example 14.41) repeats the opener: dropped, named in `notes`.

## Exercises

- Checkpoints 14.34–14.36 inline, hints as `hint`.
- Section exercises 310–357: odd keyed ones kept; even ones left out.
- Review 397 (true or false, keyed False) held here.

## Extra simulations (rule 15)

None: `sim-second-derivative-test` gives the one view the examples do not, the family passing from bowl to saddle.

## Corrections

- "Step 3 states to check the [Fermat's theorem] Second Derivative Test …": the book's link points at Fermat's theorem; the link goes to the Second Derivative Test, with a note.
- Example 14.40a, L₃: "The critical value corresponds to the point (4, 2)" printed without the value (t = 4); Example 14.41, L₂: "connecting and (50, 25)" printed without (50, 0). Notes at the spots.

## Wanted at chapter level

- forms: `eq-discriminant` → `14.7-fs-id1167793873509`.
- variables anchored at build. Review 397 placed here.

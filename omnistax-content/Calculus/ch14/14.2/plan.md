# Plan: 14.2 Limits and Continuity (m53933)

Source: `source.md`. Status: plan; config 2 waives the review for this run, built 2026-10-12. Template: `ch01/1.1`.

Three objectives, an opening paragraph, eight definition notes, four theorem notes (the limit laws with Equations 14.2–14.11, and the sum, product and composition of continuous functions), Examples 14.8–14.13, six checkpoints (14.6–14.11), seven figures (14.14–14.20), five Key Concepts, no Key Equations, 52 section exercises (26 keyed), eight glossary terms.

## Sub-concepts (page headers)

0. The opening paragraph (`limits-intro`).
1. `limits` **Limit of a Function of Two Variables**: the one-variable definition recalled, the δ disk (definition, Figure 14.14), the limit (definition, Figure 14.15), the limit laws (theorem), Example 14.8, Checkpoint 14.6, limits along paths, Example 14.9 with Figure 14.16, Checkpoint 14.7.
2. `interior-boundary` **Interior Points and Boundary Points**: interior and boundary points (definition, Figure 14.17), open and closed sets, connected sets and regions, the limit at a boundary point (definition), Example 14.10 with Figures 14.18 and 14.19, Checkpoint 14.8.
3. `continuity` **Continuity of Functions of Two Variables**: the three conditions (definition), Example 14.11, Checkpoint 14.9, the ε–δ form, the three theorems with Figure 14.20, Example 14.12, Checkpoint 14.10.
4. `three-variables` **Functions of Three or More Variables**: the δ ball (definition), Example 14.13, Checkpoint 14.11.

The terms "δ disk" and "δ ball" are bold as the book sets its glossary words; δ and ε are written \delta and \varepsilon in math.

## Concept nodes

Introduced: `delta-disk` (`eq-delta-disk`), `limit-of-a-function-of-two-variables` (`eq-limit-two-variables`), `limit-laws-for-functions-of-two-variables` (ten forms, Equations 14.2–14.11), `path-dependence-of-a-limit`, `interior-point`, `boundary-point`, `open-set`, `closed-set`, `connected-set`, `region`, `limit-at-a-boundary-point`, `continuity-of-a-function-of-two-variables` (`eq-continuity-two-variables`), `sum-of-continuous-functions`, `product-of-continuous-functions`, `composition-of-continuous-functions`, `delta-ball` (`eq-delta-ball`). Uses: `epsilon-delta-definition-of-the-limit`, `limit-laws`, `continuity-at-a-point`, `composite-function`, `domain`, `range`.

## Colour

f, g wear `function`; L and M `limit` (`\kL`, `\kM`); D `set`; a δ disk, δ ball, S and its kinds `set`, a region `region`; P₀, (a, b) `point`. ε and δ are ink in the text and drawn as bands in the colour of what they bound (book COLOR): the ε slab about L in `limit`, the δ disk in `set`. No referents.

## Figures

- `sim-delta-disk` · Figure 14.14 · `delta-disk` · variation: the δ disk about (2, 1), slider δ (0.05 to 1.5, default 0.3 as the book draws it); drag a point and the readout tells whether it lies in the disk · arrows none · still · slider δ, point by drag (sliders x, y) · headline the distance from (2, 1) against δ · graph alone, axes −1.5 to 3.5 by −1 to 3, one scale · 2D.
- `sim-limit-eps-delta` · Figure 14.15 · `limit-of-a-function-of-two-variables`, `delta-disk` · variation and 3D: a surface over the plane (stand-in f(x, y) = 3 + 0.3x − 0.2(x² + y²), the book prints none) with (a, b) = (1, 1) and L = f(1, 1) = 2.9; the ε slab L − ε < z < L + ε as two translucent planes in `limit`, the δ disk on the floor in `set` and its image on the surface; slider ε (0.05 to 1), slider δ (0.05 to 1.5) with a dashed special at the largest δ that works for the current ε (solved numerically); the image turns from `limit`-safe to the error colour where it leaves the slab · arrows none · still · readout max |f(x, y) − L| over the disk against ε · 3D free orbit, mathematical (28.3); no buttons. Reason for 3D: the definition is an arrangement of a disk under a sheet and a slab around its height.
- `sim-path-limits` · Figure 14.16 · `path-dependence-of-a-limit` · variation and 3D: Example 14.9's surfaces, a choice of function (a. 2xy/(3x² + y²), b. 4xy²/(x² + 3y⁴)) and of path (line y = kx, parabola x = ky²), slider k (−3 to 3, detents 0, 1); the path lifted onto the surface runs at one height into the origin, so the readout gives the value along it: 2k/(3 + k²) on lines for a, 0 on lines and 4k/(k² + 3) on parabolas for b · arrows none · still · 3D free orbit; the surface drawn over 0.04 ≤ r ≤ 2 so the missing point (0, 0) stays a hole. Checkpoint 14.7's lines through (2, 1) are a translate of the same idea.
- `sim-interior-boundary` · Figure 14.17 · `interior-point`, `boundary-point`, `open-set`, `closed-set` · variation: the set S (stand-in r(θ) = 4.21 − 0.65 sin 2θ, so (2, 3) lies on its boundary and (−1, 1) inside, as the book draws), a point P₀ dragged with its δ disk (slider δ 0.1 to 1.5, default 0.5); the readout names P₀ interior, boundary or outside; a choice of boundary (excluded: an open set, drawn dashed; included: a closed set, solid; half included: neither) · arrows none · still · graph alone, axes −5 to 5, one scale · 2D.
- `sim-boundary-limit` · Figure 14.18 + 14.19 · `limit-at-a-boundary-point` · 3D and variation: Example 14.10's hemisphere f = √(25 − x² − y²) over its domain, the closed disk of radius 5 drawn on the floor; slider d (0 to 2.5) puts the point at distance d from (4, 3) inside the domain along the radius, its height f falling to 0 as d → 0 (special 0) · arrows none · still · readout f(x, y) = √(25 − x² − y²) → 0 · 3D free orbit; no buttons.
- `fig-composition` · Figure 14.20 · `composition-of-continuous-functions` · standardisation alone: a faithful copy (kind figure) of the book's diagram, the domain of g with (x, y), the number line with z = g(x, y), the range of f with f(z), arrows g and f · arrows symbolic · still · no controls · 2D.

Images: Checkpoint answers carry no images; exercise answer images (103, 105) stay in their cards.

## Exercises

- Checkpoints 14.6–14.11 inline, hints as `hint`. Checkpoint 14.9's key prints √(16 − 2(2)² − (−3)²) = 3 for f(2, −3); it is √(26 − 8 − 9) = 3 (correction under the card).
- Section exercises 60–111: the odd keyed ones kept except 87 and 89, which evaluate "using the results of previous problem" (86, 88: unkeyed and left out); unkeyed 62 (show), 78 (complete the statement) and 106 (true or false) kept with AI approaches; the other even ones left out.
- Review 401 and 403 held here, `source_section` 14.8.

## Extra simulations (rule 15)

None: `sim-path-limits` covers the paths of Example 14.9 and Checkpoint 14.7, and `sim-limit-eps-delta` the definition; a Sim of the limit laws would only evaluate polynomials.

## Wanted at chapter level

- forms: `eq-delta-disk` → `14.2-fs-id1167793269223`; `eq-limit-two-variables` → `14.2-fs-id1167793965522`; the ten limit-law forms → `14.2-fs-id1167793882997`; `eq-continuity-two-variables` → `14.2-fs-id1167793504466`; `eq-delta-ball` → `14.2-fs-id1167793420694`.
- variables of 14.2 anchored at build.
- Review 401, 403 placed here.

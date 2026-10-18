# Plan: 11.5 Conic Sections (m53846)

Source: `source.md`, converted with `tools/convert.py 11`. Status: plan; config 2 waives the review for this run (Chen, 2026-10-12), built the same day, decisions reported afterwards. Template: `ch01/1.1` for conventions.

Six objectives, two opening paragraphs, three definition notes, a definition of eccentricity, four theorem notes (Equations 11.11–11.15), Table 11.1, Examples 11.19–11.24, six checkpoints (11.18–11.23), Figures 11.43–11.57 and one unnumbered image (the satellite dish), six Key Concepts, 67 section exercises (34 keyed), the Chapter Review Exercises 322–348, twelve glossary terms. One page.

## Sub-concepts (page headers)

The book's six headers apply and are kept.

0. `intro` (no header): the history, nappes and the four sections (Figures 11.43, 11.44). Introduces `nappe`, `conic-section`.
1. `parabolas` **Parabolas**: the definition note, the distance formula and the derivation x² = 4py (Figure 11.45), the theorem note (Equation 11.11), the four directions (Figure 11.46), general form, Example 11.19 (Figure 11.47), Checkpoint 11.18, the reflective property (the dish image) and the dish and headlight paragraph. Introduces `parabola`, `focus`, `directrix`, `vertex-of-a-conic-section`, `standard-form-of-a-parabola`, `general-form-of-a-conic`, `converting-a-conic-to-standard-form`, `reflective-properties-of-conics`.
2. `ellipses` **Ellipses**: the definition note, Figure 11.48, the derivation, the theorem note (Equations 11.12, 11.13), Example 11.20 (Figure 11.49), Checkpoint 11.19, Kepler and Statuary Hall (Figure 11.50). Introduces `ellipse`, `major-axis`, `minor-axis`, `standard-form-of-an-ellipse`.
3. `hyperbolas` **Hyperbolas**: the definition note, Figure 11.51, the derivation, the theorem note (Equations 11.14, 11.15), Example 11.21 (Figure 11.52), Checkpoint 11.20, the hyperbolic mirror (Figure 11.53). Introduces `hyperbola`, `standard-form-of-a-hyperbola`.
4. `eccentricity` **Eccentricity and Directrix**: the definition note (`eccentricity`), Figure 11.54, e = c/a, Example 11.22, Checkpoint 11.21. Introduces `eccentricity`.
5. `polar-conics` **Polar Equations of Conic Sections**: the focal parameter and Table 11.1, the theorem note, Example 11.23 (Figure 11.55), Checkpoint 11.22. Introduces `focal-parameter`, `polar-equation-of-a-conic`.
6. `degree-two` **General Equations of Degree Two**: the general equation, the discriminant, xy = 1 (Figure 11.56), rotation of axes and the five-step procedure, Example 11.24 (Figure 11.57), Checkpoint 11.23. Introduces `general-equation-of-degree-two`, `discriminant-of-a-conic`, `rotation-of-axes`, `graphing-a-rotated-conic`.

Then the Chapter Review Exercises (322–348): placed with their sections (exploration.md); the ones held here are 341, 343, 345, 347.

## Colour, referents and function tokens

Categories: `curve` for the conics and their names; `point` for foci, vertices, the moving point P or A; `line` for directrices, asymptotes, the major and minor axes, the rotated axes x′ and y′; `surface` for the cone and its nappes; `plane` for the cutting plane; `angle` for the plane's tilt and the angle of rotation θ. No referents: the two foci are told apart by their labels F and F′ (F₁ and F₂). Function tokens: none.

## Figures

- `sim-cone-section` · Figure 11.43 + 11.44 · `nappe`, `conic-section` · depth (mathematical 3D: a plane through a double cone is an arrangement in space, `RULES.md` Figures) and variation: the cone the book generates by revolving y = 3x around the y-axis, both nappes, cut by a plane through (0.6, 1.5, 0) tilted φ from the horizontal; the section is drawn in `curve`: a circle at φ = 0, ellipses, a parabola at the generating line's angle φ = tan⁻¹3 ≈ 71.6° (where the plane is parallel to it), hyperbolas past it, cutting both nappes · arrows: none · still · slider φ (angle, 0° to 90°, default 40°, specials at 0° and 71.6°) · free orbit (house style, no ground), no buttons · headline "φ = 40°: the plane cuts one nappe at an angle to the axis: an ellipse" · readout: the plane's angle with the axis 90° − φ against the generating line's 18.4°. Hover names on the cone, its nappes, the plane and the section.
- `sim-parabola` · Figure 11.45 + 11.46 · `parabola`, `focus`, `directrix`, `vertex-of-a-conic-section`, `standard-form-of-a-parabola` · variation: the point P runs the parabola and its distances to the focus and the directrix stay equal; the book's four directions as a choice, the vertex (h, k) and p sliders · still · choice (up, down, right, left), sliders p (ink, 0.5 to 3, default 1.5), h, k (ink, −3 to 3, default 0) and P's position s (ink) with P dragged · headline "d(F, P) = d(P, Q) = 3.25" · 2D, one scale. Readout: the distances and the standard form with the numbers.
- `sim-parabola-example` · Figure 11.47 · `converting-a-conic-to-standard-form` · Example 11.19's parabola y = ⅛(x − 2)² + 1 with its vertex (2, 1), focus (2, 3) and directrix y = −1, P dragged along it · still · slider s · 2D. Built on the same helper.
- `sim-dish` · Sim (replaces the unnumbered image of the dish, kept as its original) · `reflective-properties-of-conics` · flow by animation: parallel waves come down into the dish x² = 4py and reflect to the focus, all arriving together because every path from the line y = 6 to the focus has length 6 + p · arrows: kinematic (the waves travel) · moving: five pulses, 4 s · no sliders · readout: (6 − y) + d(M, F) = 6 + p for the middle ray's numbers · 2D.
- `sim-ellipse` · Figure 11.48 · `ellipse`, `major-axis`, `minor-axis`, `standard-form-of-an-ellipse` · variation: A runs the ellipse and d(A, F) + d(A, F′) stays 2a; the green segments FQ and F′Q of length a shown; a and b sliders · still · sliders a (ink, 2 to 5, default 4), b (ink, 1 to 4.5, default 3), A's position t (ink) with A dragged · 2D, one scale.
- `sim-ellipse-example` · Figure 11.49 · `converting-a-conic-to-standard-form` · Example 11.20's ellipse (x − 2)²/4 + (y + 3)²/9 = 1 on the same helper · still · slider t · 2D.
- `fig-orbit-hall` · Figure 11.50 · photo, kept: the text points at its parts (a) and (b).
- `sim-hyperbola` · Figure 11.51 · `hyperbola`, `standard-form-of-a-hyperbola`, `major-axis`, `minor-axis` · variation: P runs the right branch and d(P, F₁) − d(P, F₂) stays 2a; the asymptotes y = ±(b/a)x, the box of the axes · still · sliders a, b, P's position s · 2D. The original caption's "any point on the ellipse" is corrected through the row's `figure` note.
- `sim-hyperbola-example` · Figure 11.52 · `converting-a-conic-to-standard-form` · Example 11.21's (x + 2)²/16 − (y − 1)²/9 = 1 with its asymptotes y = 1 ± ¾(x + 2) · still · slider s · 2D.
- `sim-hyperbolic-mirror` · Figure 11.53 · `reflective-properties-of-conics` · flow by animation: starlight aimed at the focus F₂ behind the mirror (the branch) strikes it and is reflected to the other focus F₁ · arrows: kinematic (light travels) · moving: three pulses, 4 s · no sliders · readout: |MF₁| − |MF₂| = 2a for the middle ray · 2D.
- `sim-eccentricity` · Figure 11.54 · `eccentricity`, `focus`, `directrix` · variation: one focus at the pole and one directrix x = −2; the eccentricity e bends the conic r = 2e/(1 − e cos θ) from ellipse (e < 1) through the parabola (e = 1, special) to a hyperbola (e > 1); P dragged on it with PF/PD = e · still · sliders e (ink, 0.2 to 2, default 0.6, special at 1), θ (angle) · 2D.
- `sim-polar-hyperbola` · Figure 11.55 · `polar-equation-of-a-conic` · variation: Example 11.23's r = 3/(1 + 2 cos θ) drawn up to θ; where 1 + 2 cos θ < 0, r < 0 and the point is on the left branch behind the pole · still · slider θ (angle, 0 to 2π, default 2π) · 2D, the polar frame. Readout r with the table's numbers.
- `sim-rotate-xy` · Figure 11.56 · `rotation-of-axes`, `discriminant-of-a-conic` · variation: the axes x′, y′ (the book's red dashed lines) turned by θ; the cross term's coefficient B′ vanishes at θ = 45° (special), where xy = 1 reads x′²/2 − y′²/2 = 1 · still · slider θ (angle, 0° to 90°, default 45°) · 2D. Readout A′, B′, C′ with the numbers.
- `sim-rotate-ellipse` · Figure 11.57 · `rotation-of-axes`, `graphing-a-rotated-conic` · Example 11.24's 13x² − 6√3xy + 7y² − 256 = 0 on the same helper, B′ = 0 at θ = 60° (special, default), x′²/64 + y′²/16 = 1 · still · slider θ · 2D.

## Exercises

- Checkpoints 11.18–11.23 inline after Examples 11.19–11.24: 11.21 a number (√74/7 ≈ 1.229), the rest open.
- Section exercises 255–321: the 34 keyed odd ones kept; the 33 even ones are computational and left out.
- Review exercises held here (`source_section` 11.5, their own section): 341, 343 (Cartesian equations of a parabola and a hyperbola), 345 (an ellipse, e = 2/3), 347 (Pluto's orbit); 342, 344, 346, 348 (unkeyed) left out. Section 11.5 prints the whole review set; the others are placed with 11.1–11.4.
- Keys checked: 319's key prints ep = 2.616 for Hale-Bopp; a(1 − e²) = 262.955(1 − 0.995²) ≈ 2.623 (a correction under the card).

## Corrections

- `c-pythagoras`: "c² = b² = a² and b² + a² = c²": the right triangle gives b² + c² = a².
- `c-ex20-ref`: "Comparing this to Equation 11.14": the vertical ellipse is Equation 11.13.
- `c-ex21-ref`: "Comparing this to Equation 11.15": the horizontal hyperbola is Equation 11.14.
- `c-hyperbola-caption` (figure `sim-hyperbola`): the caption's "any point on the ellipse" means the hyperbola.
- `c-rotated-c`: Example 11.24's C′ lines.
- `c-e319` under exercise 319.

## Extra simulations (rule 15)

The dish and mirror Sims replace the book's own images; no others: a discriminant classifier (A, B, C sliders) shows a sign the two rotation figures already show.

## Wanted at chapter level

- forms `eq-parabola-standard-form` → `11.5-fs-id1167793813448`, `eq-parabola-at-origin` → `11.5-parabola-derivation`, `eq-parabola-general-form` → `11.5-general-form`, `eq-ellipse-standard-form` → `11.5-fs-id1167793291784`, `eq-ellipse-vertical-standard-form` → `11.5-fs-id1167794020407`, `eq-hyperbola-standard-form` → `11.5-fs-id1167794136510`, `eq-hyperbola-vertical-standard-form` → `11.5-fs-id1167793379067`, `eq-eccentricity` → `11.5-eccentricity-ca`, `eq-polar-conic` → `11.5-fs-id1167793377609`, `eq-general-degree-two` → `11.5-degree-two`, `eq-conic-discriminant` → `11.5-degree-two`, `eq-rotation-angle` → `11.5-rotation`.
- variables `11.5/F`, `/P`, `/p`, `/h`, `/k` → `11.5-parabolas`; `/a`, `/b`, `/c` → `11.5-ellipses`; `/e` → `11.5-eccentricity`; `/r` → `11.5-polar-conics`; `/θ` → `11.5-rotation`.

Applied in the chapter pass (2026-10-13): every form and variables anchor above set with `ost set` (anchors resolve, `ost check` clean); the review rows written into section.json with `source_section` 11.5.

## Derivations

- Parabolas · x² = 4py and the shifted form (11.11) · score 4 · built as drv-equation-of-a-parabola (the printed block, then "going through the same derivation" inserted for the vertex (h, k), solved for y; form eq-parabola-at-origin and a coverage row re-anchored)
- Ellipses · the equation in standard form · score 4 · built as drv-equation-of-an-ellipse (the printed block; b² + c² = a² a fact card, the book's misprinted Pythagorean line keeps its note c-pythagoras in the text)
- Ellipses · the directrices x = ±a²/c and the constant ratio · score 7 · not built: the theorem states the directrices with no claim that they follow
- Hyperbolas · the equation in standard form · score 2 · built as drv-equation-of-a-hyperbola (the book adds the radicals the wrong way round from its second line; the derivation keeps them in place and the notes give what is printed)
- Hyperbolas · the asymptotes · score 5 · not built: stated in the theorem, no claim that they follow
- Eccentricity and Directrix · e = c/a · score 4 · built as drv-eccentricity-of-ellipse-and-hyperbola (the printed ellipse line, and the hyperbola's "similar calculation" inserted; form eq-eccentricity re-anchored)
- Polar Equations of Conic Sections · Table 11.1 · score 4 · not built: the focal parameters are stated in a table, no claim that they follow
- Theorem · Polar Equation of Conic Sections · score 7 · built as drv-polar-equation-of-a-conic, after the theorem ("it is possible to prove"): the eccentricity's definition, the focus at the pole and the directrix x = ±p or y = ±p
- General Equations of Degree Two · rotation of axes, cot 2θ and the rotated coefficients · score 12 · not built: stated, and the rotation x = x′cos θ − y′sin θ they rest on is never stated in the book
- The reflective properties · score 10 · not built: stated, and their proofs rest on mathematics the book never gives

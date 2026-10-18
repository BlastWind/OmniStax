# Plan: 13.4 Motion in Space (m53930)

Source: `source.md`, converted with `tools/convert.py 13`. Status: plan; config 2 waives the review for this run (Chen, 2026-10-12), decisions reported afterwards. Template: `ch01/1.1` for conventions.

Three objectives, the opening paragraph, one definition note and three theorem notes (Equations 13.20–13.30), two proofs, two media notes (dropped), Examples 13.14–13.18, Checkpoints 13.14–13.17, Table 13.4, Figures 13.11–13.22, one Student Project, five Key Equations, four Key Concepts, 47 section exercises (23 keyed) and the chapter's 27 review exercises (13 keyed). One page.

## Sub-concepts (page headers)

The book's four headers apply and are kept.

0. `intro` (no header): the opening paragraph.
1. `motion-vectors` **Motion Vectors in the Plane and in Space**: the definition note (Equations 13.20–13.22), Table 13.4, Example 13.14 (Figure 13.11), Checkpoint 13.14, the curvy road (Figures 13.12, 13.13). Introduces `velocity-vector`, `acceleration-vector`, `speed-of-a-moving-object`.
2. `acceleration-components` **Components of the Acceleration Vector**: the theorem The Plane of the Acceleration Vector and its Proof, the components named, the theorem Tangential and Normal Components of Acceleration (Equations 13.23–13.25), centripetal acceleration and Figure 13.14, Example 13.15, Checkpoint 13.15. Introduces `plane-of-the-acceleration-vector`, `tangential-component-of-acceleration`, `normal-component-of-acceleration`.
3. `projectile-motion` **Projectile Motion**: gravity (Figure 13.15), the antiderivatives, the angle θ (Figure 13.16), Example 13.16 (Figure 13.17), Checkpoint 13.16, the range and 45°. Introduces `projectile-motion`, `range-of-a-projectile`.
4. `keplers-laws` **Kepler’s Laws**: the theorem note (Figure 13.18), the astronomical unit and Tₚ² = Dₚ³, the Proof of the first law (Figure 13.19, Equations 13.26–13.29), Example 13.17 (Equation 13.30), Checkpoint 13.17, Example 13.18 (Halley's Comet), the Student Project Navigating a Banked Turn (Figures 13.20–13.22). Introduces `keplers-laws-of-planetary-motion`, `astronomical-unit`, `orbit-as-a-conic`, `keplers-third-law-for-other-orbits`.

Links: "Arc Length and Curvature" → 13.3. A reference to a theorem note reads as its title, linked.

## Colour, referents and function tokens

Categories: `curve` for r, s and the paths; `vector` for v, a, v′, r′, r″, T, N, v₀, F, i, j, k (a_T T and a_N N dashed); `derivative` for the speed v, v′ and κ; `angle` for θ; `point` for the Sun and marked points. a_T and a_N are ink. No referents: the car, the planet and the cannonball are each the one moving thing of their figure. Function tokens: none.

## Figures

- `sim-parabola-motion` · Figure 13.11 · `velocity-vector`, `acceleration-vector`, `speed-of-a-moving-object` · flow by animation: Example 13.14's particle r(t) = t² i + √(5 − t²) j runs its parabola for 0 ≤ t ≤ 2.1, carrying v(t) (tangent, growing) and a(t) at the point; t = 1, the book's state, marked with v(1) = 2i − ½j and a(1) = 2i − ⅝j · arrows: kinematic (the particle); v and a symbolic · moving: 6 s a run (the scrub reaches t = 1) · none · headline "t = 1.00: v = ⟨2.00, −0.50⟩, speed 2.06" · graph alone, one scale · 2D. Readout v(t), a(t) and v(t) with the numbers.
- `sim-road` · Figure 13.12 + 13.13 + 13.14 · `velocity-vector`, `plane-of-the-acceleration-vector`, `tangential-component-of-acceleration`, `normal-component-of-acceleration` · flow by animation: a car (a point) drives a curvy road seen from above, its velocity tangent to the road, its acceleration split into a_T T along the road and a_N N toward the inside of the turn, with the osculating circle of each bend; the choice driving (steady, braking into the bends) is the book's two cases: at a steady speed a is all normal, braking into the bend tips a backward as at the book's B · arrows: kinematic (the car), v, a and the components symbolic · moving: 8 s a lap · choice driving · headline "a_T = −0.80, a_N = 2.10: the car is slowing into the bend" · graph alone · 2D. Folded: the book draws the road, the car's components, and the road's three points; one moving car shows all three. Readout a = a_T T + a_N N with a_N = κv². Road: the stand-in y = 1.2 sin(0.9x) over a window 12 wide (the book's road prints no function).
- `sim-acceleration-plane` · Sim · `plane-of-the-acceleration-vector` · depth: Example 13.15's r(t) = t² i + (2t − 3) j + (3t² − 3t) k in space for 0.5 ≤ t ≤ 2.1, the moving point carrying T, N, the osculating plane they span and a(t) = 2i + 6k lying in it, drawn as a_T T + a_N N; the theorem's "lies in the plane formed by T and N" is a fact about space the flat road cannot show · arrows: kinematic (the point), the vectors symbolic · moving: 6 s for the run, t = 2 marked · none · `S.headline` "t = 2.00: a_T = 6.17, a_N = 1.39" · 3D, free orbit, no buttons; one WebGL scene. Readout a_T = (v · a)/‖v‖, a_N = ‖v × a‖/‖v‖ with the numbers.
- `sim-falling-ball` · Figure 13.15 · `projectile-motion` · flow by animation: a ball dropped from rest falls under gravity, its acceleration −g j constant, its velocity −gt j growing, the distance fallen marked · arrows: kinematic (the ball); a and v symbolic · moving: the fall of 2.5 s at g = 9.8 m/sec² (30.6 m), shown in 4 s · none · headline "t = 1.50 sec: the ball has fallen 11.0 m" · scene alone (vertical) · 2D. Readout a = −g j, v(t) = −gt j, s(t) = −½gt² j with numbers.
- `sim-projectile` · Figure 13.16 · `projectile-motion`, `range-of-a-projectile` · flow by animation and variation: a projectile thrown from the origin at angle θ with speed v₀ flies its parabola, the velocity at five points split into a constant horizontal part and a changing vertical part, the height H and range R bracketed; θ at 45° (dashed circle, the text's best angle) gives the longest range · arrows: kinematic (the projectile), velocities symbolic · moving: the flight, 5 s · sliders θ (angle, 10° to 80°, step 1°, default 50°, special 45°) and v₀ (ink, 10 to 25 m/sec, default 20; the book prints no numbers for this figure) · headline "θ = 50°: R = 40.2 m, H = 12.0 m" · graph alone · 2D. Readout s(t) = v₀t cos θ i + (v₀t sin θ − ½gt²) j and R = v₀² sin 2θ/g.
- `sim-cannonball` · Figure 13.17 · `projectile-motion` · flow by animation: Example 13.16's cannonball fired at 30° and 600 ft/sec from a cliff 100 ft above the water; the maximum height 1406.25 ft above the cannon at 9.375 sec and the splash 9914 ft out at about 19.08 sec marked · arrows: kinematic (the ball) · moving: 19.08 sec of flight in 6 s · none · headline "t = 9.38 sec: the ball is 1506 ft above the water" · graph alone · 2D. Readout s(t) = 300√3 t i + (300t − 16t²) j with the numbers.
- `sim-kepler` · Figure 13.18 + 13.19 · `keplers-laws-of-planetary-motion`, `orbit-as-a-conic` · flow by animation and variation: a planet runs its ellipse with the Sun at a focus, Kepler's equation timing it, so it races through perihelion; the radius from the Sun sweeps a sector each equal interval of time, the six sectors (the book's A to F) of equal area shaded; the gravitational force F toward the Sun, longest where the planet is nearest; slider e the eccentricity · arrows: kinematic (the planet), F symbolic · moving: one period in 8 s · slider e (ink, 0 to 0.8, default 0.5) · headline "e = 0.50: each sector has area 1.70" · graph alone, one scale · 2D. Folded: 13.19 draws the same orbit with the force.
- `fig-banked-turn` · Figure 13.20 + 13.21 · the project's banked turn · standardisation only: the overhead view (the car on its circle of radius R, v tangent and a toward the centre) and the front view (the car on the bank at angle θ, height h, with the three forces N, mg and f) drawn as a still copy (config 18: the project's questions read it; a slider would answer them) · arrows: symbolic · still · no controls · 2D. Folded: 13.21 is 13.20's front view with its forces.
- `fig-bristol` · Figure 13.22 · photo, kept: the project points at the track's shape; the caption's credit clause whole.

The Halley's Comet image inside Example 13.18 repeats the opener and is dropped (named in `notes`). Exercise images stay in their cards. Media notes (projectile video, triple cross product) dropped, named in `notes`.

## Exercises

- Checkpoints 13.14–13.17 inline after Examples 13.14–13.17.
- Section exercises 155–201: the 23 keyed odd ones kept; 199 ("Show that the particle moves on a circular cone", odd and unkeyed), 164 (show a ∝ r) and 182 (prove a = 0 on a straight line at constant speed) kept with AI-marked approaches; the other 21 even ones are computational and left out, named in `exercise_notes`.
- Review exercises here (`source_section` 13.4, the section that prints them): 205, 223, 225, 227 (keyed). 224, 226 and 228 (unkeyed, computational) left out.

## Corrections (book-corrections-as-notes)

- `c-max-height`: Example 13.16: "1406.39 ft above the cannon, or 1506.39 ft above sea level"; the line above gives 1406.25 j, so 1406.25 ft and 1506.25 ft.
- `c-range-j`: the range at 45° is written (v₀²/g) j; the distance is along i.
- `c-r227`: review 227's key gives three components ⟨v₀(cos θ)t, v₀(sin θ)t, −(g/2)t²⟩; the plane motion is ⟨v₀t cos θ, v₀t sin θ − (g/2)t²⟩ (under its card).
- Others as the key check finds them.

## Extra simulations (rule 15)

Built: `sim-acceleration-plane` (above). Judged and not built: a figure for Example 13.17's Moon (Kepler's third law is a number; the readout of `sim-kepler` carries the orbit); the banked turn with sliders (it would answer the project's questions).

## Wanted at chapter level

Applied in the chapter pass (tmp/ch13/anchors13.py); the variables anchor to the motion definition note `fs-id1169737743731`, the plane-of-acceleration theorem `fs-id1169737814963` and the paragraphs `projectile-angle`, `kepler-proof` and `motion-table`.


- forms `eq-velocity-vector` → `13.4-fs-id1169738144149`, `eq-acceleration-vector` → `13.4-fs-id1169738166350`, `eq-speed-vector` → `13.4-fs-id1169737947455`; `eq-acceleration-in-tn` → `13.4-fs-id1169737833100`, `eq-acceleration-components` → `13.4-fs-id1169737263883`; `eq-tangential-acceleration` → `13.4-fs-id1169738185179`, `eq-normal-acceleration` → `13.4-fs-id1169738191530`; `eq-projectile-position` → `13.4-fs-id1169737492856`, `eq-projectile-position-angle` → `13.4-fs-id1169738165365`; `eq-projectile-range` → `13.4-fs-id1169737389226`; `eq-keplers-third-law` → `13.4-fs-id1169737148857`; `eq-orbit-conic` → `13.4-fs-id1169738166961`; `eq-keplers-third-law-general` → `13.4-fs-id1169737204126`.
- variables to the definition note (motion), the components theorem, `projectile-motion` and `keplers-laws`, as built.

## Derivations

- The Plane of the Acceleration Vector · Proof · score 4 · built as drv-plane-of-acceleration (v = vT, then its derivative worked to v′T + κv²N; the prose's T′ = ‖T′‖N and ‖T′‖ = κ‖r′‖ are the reasons of their moves)
- Projectile Motion, from F = F_g to the velocity and the position · score 2 · built as drv-projectile-velocity (F = F_g to v(t) = −gt j + C₁) and drv-projectile-position (s′ to s(t) = −½gt² j + v₀t + C₂): the book breaks the block with the sentences that name the initial velocity and the initial position, which keep their places with their inline lines, so the derivation is split there
- the same passage, the position thrown at an angle θ · score 0 · built as drv-projectile-at-an-angle, after the paragraph and figure that set s₀ = 0 (the book's reordering line folded into the grouping of the j terms)
- Projectile Motion, the range and the best angle · score 2 · built as drv-projectile-range (time of flight; s at landing, its j-component worked to zero; the derivative in θ; the range at 45°). The book's R written as a vector and its last line's j are the nodes' notes; footnote c-range-j removed. "This value of θ is the smallest positive value …" stays after it
- Kepler's Laws · Proof of the first law · score 9 · built as drv-kepler-constant-vector (dv/dt parallel to r, d/dt(r × v) = 0) and drv-keplers-first-law ((13.26) to the polar equation of a conic), split at the book's paragraph on the plane of motion, which keeps its place; (13.26)–(13.29) keep their numbers on their nodes, the triple cross product formula a reason
- the law of equal areas (stated, proved for the first law only) · score 6 · built as drv-kepler-equal-areas after the proof: r × v in polar coordinates is ‖r‖² θ′ k = C, and the polar area formula of 11.4 with the substitution t gives A = ½‖C‖(t₂ − t₁)
- Example 13.17 · Kepler's third law (13.30) · score 12 · not built: stated with no claim that it follows from anything, and the mass m + M rests on two-body motion the book never states
- Student Project · Navigating a Banked Turn · score 15 · not built: the project poses the steps for the reader

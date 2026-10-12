# Exploration: Calculus, Chapter 17 Second-Order Differential Equations

Written 2026-10-13, before the chapter's sections were built. The five modules (Volume 3, Chapter 7) were converted with `python3 tools/convert.py 17` and read; the book's organization and apparatus are as `RULES.md` records them. `config.md` beside this file is the agreed list. This is the book's last chapter: after 17.4 the book prints only its back matter (the appendices, already sheets, and the answer key, which lives in the modules), and no back-matter page is built.

## Why this chapter

The chapter solves equations that carry a second derivative. 17.1 classifies second-order equations (linear or not, homogeneous or not), states the superposition principle, defines linear dependence, gives the general solution of a homogeneous equation from two independent solutions, and solves ay″ + by′ + cy = 0 through its characteristic equation in three cases (distinct real roots, a repeated root, complex conjugate roots by Euler's formula), then initial-value and boundary-value problems. 17.2 adds the right-hand side r(x): the complementary equation, particular solutions, y = c₁y₁ + c₂y₂ + y_p, the method of undetermined coefficients with its table of guesses and its multiply-by-x pitfall, Cramer's rule and the method of variation of parameters. 17.3 applies them: the spring-mass system and simple harmonic motion, the amplitude-phase form, damping in three regimes (over-, critically and underdamped), the motorcycle suspension of the opener, the lander project, forced vibrations with their transient and steady-state parts, the resonance project, and the RLC series circuit. 17.4 solves equations by power series and finds the series of the Bessel function of order 0.

## Modules

Ex. = worked examples, Fig. = numbered figures, CP = checkpoints, Exer. = section exercises (chapter-wide numbers), Keyed = those carrying the book's solution, Gl. = glossary entries, KE = Key Equations rows, Eq. = equations the book numbers.

| Section | Module | Ex. | Fig. | Notes | CP | Exer. | Keyed | Gl. | KE | Eq. |
|---|---|---|---|---|---|---|---|---|---|---|
| Intro | m54039 | 0 | 1 photo | — | 0 | — | — | 0 | 0 | 0 |
| 17.1 Second-Order Linear Equations | m54040 | 10 | 0 (4 unnumbered images, 2 in checkpoints) | 3 definitions, 3 theorems, 1 strategy | 9 | 1–53 | 24 | 7 | 2 | 2 (17.1, 17.2) |
| 17.2 Nonhomogeneous Linear Equations | m54047 | 6 | 0 | 1 definition, 1 theorem with proof, 1 rule, 2 strategies | 5 | 54–85 | 16 | 4 | 2 | 2 (17.3, 17.4) |
| 17.3 Applications | m54044 | 8 | 12 (17.2–17.13) | 1 theorem, 2 Student Projects | 7 | 86–103 | 9 | 3 | 5 | 5 (17.5–17.9) |
| 17.4 Series Solutions of Differential Equations | m54046 | 2 | 0 (1 unnumbered image) | 1 strategy | 2 | 104–116 | 6 | 0 | 0 | 1 (17.10) |
| Review (in 17.4) | — | — | — | — | — | 117–141 | 12 | — | — | — |

116 section exercises, 55 keyed; 25 review exercises, 12 keyed; 23 checkpoints (17.1–17.9 in 17.1, 17.10–17.14 in 17.2, 17.15–17.21 in 17.3, 17.22–17.23 in 17.4); 26 worked examples (17.1–17.26); 14 glossary entries. `modules.json`'s exercise ranges agree with the count.

## Figure, table, example and equation numbers

Counted from the CNXML in book order, the opener as Figure 17.1.

| Section | Figures | Tables | Examples | Equations |
|---|---|---|---|---|
| intro | 17.1 a motorcycle's shock absorber (splash photo) | — | — | — |
| 17.1 | none numbered; unnumbered graphs in Examples 17.8 (y = e^{−3x} sin 2x) and 17.9 (y = e^{−t} + te^{−t}) and in Checkpoints 17.7 and 17.8 | 17.1 the three cases | 17.1–17.10 | 17.1 the second-order linear equation; 17.2 ay″ + by′ + cy = 0 |
| 17.2 | none | 17.2 the key forms of undetermined coefficients | 17.11–17.16 | 17.3 the complementary equation; 17.4 y = c₁y₁ + c₂y₂ + y_p |
| 17.3 | 17.2 a spring natural, at equilibrium, oscillating; 17.3 simple harmonic motion and its period; 17.4 the same with a phase shift; 17.5 a dashpot (photo); 17.6 overdamped (a, b); 17.7 critically damped (a, b); 17.8 underdamped; 17.9 the shock absorber (photo, in Example 17.22); 17.10 the suspension at natural and equilibrium positions; 17.11 the equation of motion over one second; 17.12 the lander (a photo beside two diagrams, in the Landing Vehicle project); 17.13 the RLC series circuit | — | 17.17–17.24 | 17.5 x″ + ω²x = 0; 17.6 x = c₁ cos ωt + c₂ sin ωt; 17.7 x = A sin(ωt + ϕ); 17.8 mx″ + bx′ + kx = f(t); 17.9 the RLC equation |
| 17.4 | none numbered; the unnumbered graph of the Bessel series in Example 17.26 | — | 17.25–17.26 | 17.10 the series of the Bessel function of order 0 |

The equations are numbered as openstax.org does (every `<equation>` not classed unnumbered) and each carries `\tag{17.N}`. The book cites Equation 17.1 where its words concern ay″ + by′ + cy = 0 (Equation 17.2) and once cites Example 17.1 for that equation; these stay as printed with correction notes.

## What is new

- Types: `function` for the solution y and its pieces y₁, y₂, y_p, the right-hand side r(x), a displacement x(t), a charge q(t), an external force f(t) and a voltage E(t); `derivative` for y′, y″, y₁′, y₂′, y_p′, y_p″, u′, v′, a velocity x′, an acceleration x″ and a current I = dq/dt; `series` for the Bessel series. In ink: x and t as variables, the constants c₁, c₂, a, b, c, the roots λ, α, β, the physical parameters m, b, k, g, s, L, R, C, ω, A, ϕ, T and the frequency f, the coefficients aₙ and the unknowns z₁, z₂ of Cramer's rule.
- New symbols: y₁, y₂ (`\kyone`, `\kytwo`), y_p (`\kyp`), y₁′, y₂′ (`\kyoneprime`, `\kytwoprime`), y_p′, y_p″ (`\kypprime`, `\kypdprime`), r (`\krfn`), u′ (`\kuprime`), x as a displacement (`\kxfn`), x″ (`\kxdprime`), x_p (`\kxp`). Reused: y (`\kyfn`), y′, y″, u (`\kufn`), v, v′, x′, q, I, E, f.
- Prerequisites: 1.2 the quadratic formula; 1.3 amplitude, period and trigonometric identities; 3.2 higher-order derivatives; 3.4 velocity and acceleration; 3.9 the derivative of e^{x}; 4.6 limits at infinity; 4.10 differential equations and initial-value problems; 6.5 Hooke's law; 7.4 equating coefficients; 8.1 general and particular solutions; 8.5 first-order linear equations and Kirchhoff's loop rule; 9.1 recurrence relations; 10.2–10.4 power series, term-by-term differentiation, the Maclaurin series of eˣ, sin and cos, and power-series solutions; 12.4 determinants.
- Concepts: 35, every glossary word among their `terms`. 17.2's "particular solution" is 8.1's `particular-solution` (the same idea: a solution with no arbitrary constants), and 17.4's strategy is 10.4's `power-series-solution-of-a-differential-equation`; both are reinforced, not introduced again.

## Sketches to replace and photographs

The book draws almost nothing in 17.1, 17.2 and 17.4: their ideas are the shapes of solutions, so each gets Sims where the text alone leaves the reader imagining the curve. 17.1: the roots of the characteristic equation moving in the plane of λ as b and c change, beside the solution they give (the three cases of Table 17.1 as one picture, the repeated root a dashed circle); Example 17.8's graph live with the two initial conditions as sliders; Example 17.9's graph with the position and velocity read along it; Example 17.10's boundary-value problem as the family of solutions pinned at one boundary point, which meets the other in one, all or none of its members. 17.2: the solutions of y″ + 4y′ + 3y = 3x all closing on the line y_p = x − 4/3, and the multiply-by-x pitfall as a guess Ae^{−2x} whose left side stays flat at zero whatever A is. 17.3: the spring-mass system moving beside its graph (Figures 17.2 + 17.3 + 17.4), the three damping regimes on one damping slider with the critical value a dashed circle (Figures 17.6 + 17.7 + 17.8), the motorcycle's landing (Figures 17.10 + 17.11), forced vibrations with the transient dying away under the steady state, and the RLC circuit with its current running and its capacitor charging (Figure 17.13). 17.4: the partial sums of the Bessel series closing on the Bessel function (Example 17.26's image).

Photographs: Figure 17.1 (the opener) kept; Figure 17.5 (a dashpot) kept, since the text points at it for the word; Figure 17.9 (the shock absorber, printed at the head of Example 17.22) kept with its credit; Figure 17.12 (the lander photo with its two diagrams, printed in the Landing Vehicle project, which reads it) kept whole with its credit. Checkpoint and exercise images stay in their cards.

## Notes and media

Six media notes, dropped and named in `notes`: two in 17.1 (websites on second-order equations), four in 17.3 (a simulation of forced vibrations, which seeds `sim-forced`; the Tacoma Narrows Bridge page and video; the Mythbusters glass video). Two Student Projects in 17.3 (Landing Vehicle; Resonance) are notes with their question lists, the media notes inside the second dropped. Problem-Solving Strategies: 17.1 (the characteristic equation), 17.2 (undetermined coefficients; variation of parameters), 17.4 (power series solutions). Proof: 17.2's general solution to a nonhomogeneous equation, under its theorem.

## Exercises that belong to another section

The review exercises (117–141, printed in 17.4) go to the section that introduces what each tests: 117, 119, 120, 121, 123, 125, 133, 135 to 17.1; 118, 127, 129, 131 to 17.2; 137, 139, 141 to 17.3. Unkeyed computational ones are left out (122, 124, 126, 128, 130, 132, 134, 136, 138, 140); 118 and 120 (true or false) and 139 (a show) keep an AI-marked approach.

## Book slips found in reading

To be corrected under book-corrections-as-notes, words kept as printed, as each section is built: 17.1's citations of Equation 17.1 (and once of Example 17.1) for ay″ + by′ + cy = 0, Equation 17.2; 17.1's "Assume f₁(x) and f₂(x) are linearly independent" in the argument that begins from linear dependence; 17.3's "as shown in Figure 17.10" for the RLC circuit, which is Figure 17.13 (twice); 17.4's "this choice of c₁ and c₂" for the constants c₀ and c₁ just chosen, and "(step 3)" at a₂ = 2a₀ + 2, where the coefficients are equated (step 5). Keys: checked as each section is built.

## Rule 23: what would make this chapter stunning

A second-order equation is a mass on a spring. The reader should watch two roots of a quadratic slide along the real line toward each other, touch, and lift off as a complex pair while the solution beside them turns from a sum of decaying exponentials into a decaying wave; pin a solution at one point and see the whole family fan out through it, meeting a second point in one curve, in every curve or in none; watch every solution of a nonhomogeneous equation forget its start and fall onto the particular solution; and then see it physically: a mass bobbing on its spring beside the curve it traces, a dashpot slowing it until at one exact damping it stops oscillating, a motorcycle landing and its wheel settling, a driven system shaking off its transient and keeping the beat of the force, a current running round an RLC loop while the capacitor charges to its steady value, and a power series, term by term, bending onto the Bessel function of a vibrating drum.

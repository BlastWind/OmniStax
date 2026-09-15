# Plan: 18.7 Conductors and Electric Fields in Static Equilibrium

Written before the page was built, as `ch18/config.md` asks in place of the
stop of rule 2. Module m42317. The page binds `charge`, `electric-field` and
`force`, which is what `ch18/COLOR.md` says 18.7 binds; `position` is not
bound, since every distance here is a length and stays in ink.

## Sub-concepts, and where each concept is introduced

| span | what it holds | concepts introduced |
|---|---|---|
| `free-charges-and-equilibrium` | the opening passage, with a header of the agent's own, and Figure 18.26 | `electrostatic-equilibrium`, `field-perpendicular-to-conductor` |
| `polarized-conductor` | the polarization passage with Figure 18.27, the book's Misconception Alert with Figure 18.28 inside it, the three numbered Properties of a Conductor, and the sentence that follows them | `field-inside-conductor-zero`, `excess-charge-on-surface` |
| `parallel-plates` | the passage on two plates, with Figure 18.29 | `uniform-field-between-plates` |
| `earths-field` | the book's header Earth's Electric Field, with the photograph 18.30 | `earths-electric-field` |
| `uneven-surfaces` | the book's header Electric Fields on Uneven Surfaces, with the folded Figure 18.31 + 18.32 | `charge-concentrates-at-points` |
| `applications` | the book's header Applications of Conductors, with the photographs 18.33 | `lightning-rod`, `faraday-cage` |
| `four-charges` | a closing block carrying the square of four charges that nine of the section's exercises read | — |

Concepts the page uses without introducing: `conductor`, `insulator`,
`polarization`, `grounding`, `electric-field`, `electric-field-direction`,
`electric-field-lines`, `field-line-properties`, `field-of-point-charge`,
`force-from-electric-field`, `coulombs-law`, `like-charges-repel`,
`superposition-of-electric-fields`, `electrostatic-screening`.

## Figures

sim-parallel-component · Figure 18.26 · electrostatic-equilibrium, field-perpendicular-to-conductor · intuition and flow by animation: the reader is told that free charges move *until* the parallel component is gone, and the still picture shows only the two ends of that sentence · moving, the free charge drifting along the surface while the parallel component falls away and the net field turns until it stands perpendicular, because the settling to equilibrium is the whole argument and it has a clock in it · sliders: the applied field $\kEf$ (electric-field), the angle the applied field makes with the surface (untyped) and the free charge $\kq$ (charge) · headline: the applied field, its two components and the force left on the free charge at this instant · graph none, the scene is the whole figure · 2D, a surface seen edge on, which is how the book draws it

sim-sphere-in-field · Figure 18.27 · field-inside-conductor-zero, field-perpendicular-to-conductor · variation by slider and by choice: the book draws a metal sphere only, and the same drawing with an insulating sphere in its place is what settles two of the section's conceptual questions · still, since what is drawn is the equilibrium the charges have already reached and nothing in it changes with time · slider: the applied field $\kEf$ (electric-field) and the radius of the sphere (untyped); choice: the sphere is a conductor or an insulator · headline: whether any field is left inside, and what the induced charge on the two faces has done to the lines · graph none · 2D, a plane through the middle of the sphere, as the book draws it

sim-charged-sphere · Figure 18.28 · excess-charge-on-surface, field-of-point-charge · variation by slider: the claim is that the outside field does not know the sphere from a point charge at its centre, and one drawing in which the radius is dragged while the outside field stands still is the only way to see it · still, the charge has already spread itself evenly and nothing moves afterwards · sliders: the excess charge $\kq$ (charge), the radius of the sphere (untyped) and the distance of the probe from the centre (untyped) · headline: the field the probe reads, and that it is zero everywhere inside · graph none · 2D

sim-parallel-plates · Figure 18.29 · uniform-field-between-plates · variation by slider: the book says the edge effects are less important when the plates are close together and never shows it, and the lines are traced from the charge on the plates themselves so the bowing at the ends is drawn rather than asserted · still, the charges have settled and the field stands · sliders: the charge on each plate $\kq$ (charge), the separation of the plates (untyped) and the length of the plates (untyped) · headline: how far the field at the edge departs from the field at the middle at this separation · graph none · 2D

sim-sharp-end · Figure 18.31 + 18.32 · charge-concentrates-at-points, lightning-rod · variation by slider and by choice: the book draws one body three times over in 18.31 and a sharper one again in 18.32, and one body whose end the reader sharpens from a round shoulder to a needle is that whole run of pictures at once, with the field at the tip stated as a number so that the reader can drive it past the 3 × 10⁶ N/C at which air breaks down. Folded because it is one scene drawn four times, and every number the prose cites links to it · still, the charge has settled on the surface and the question asked of it is where it has settled, not how it got there · sliders: the excess charge (charge) and the sharpness of the end (untyped); choice: the repulsion at the two ends, the charge and the field it makes, or the same body in an applied field, which are the book's panels (a), (b) and (c) · headline: the field at the point and at the flat end, and whether the air at the point has broken down · graph none · 2D

fig-square · Figure (unnumbered) · — · standardisation alone: the four corner charges and the charge at the centre are read by five conceptual questions and four problems, and the labels on the image the cards carry are small · no sliders and no animation, a faithful copy · headline: the square, its side and the five charges on it · graph none · 2D

Photographs, each with keep or drop:

- Figure 18.30, the fair-weather field and the storm (`Figure_19_07_06a.jpg`) · kept · the passage on Earth's field points at both panels and the two weathers are the thing it is about.
- Figure 18.33, the lightning rod and the Van de Graaff sphere (`Figure_19_07_09a.jpg`) · kept · the text says "See Figure 18.33", and the smooth sphere beside the sharp rod is the contrast the passage draws.
- The twenty-five unnumbered images inside the exercises · the twelve that belong to this section ride on the cards of the exercises that read them, as `config.md` settles for the chapter; the square of four charges is drawn as `fig-square` as well, since nine exercises read it.

No extra simulations are proposed. The section's remaining ideas, the
Faraday cage and the metal car, are the third property of a conductor
applied to a closed shell, and the charged sphere already draws a field that
is zero inside a conductor; a cage drawn again would open no view the reader
does not already have.

## Exercises

Sixteen conceptual questions, four AP items and fourteen problems. All of
them sit in the Exercises document: the section prints no Check Your
Understanding box, and `config.md` gives the chapter one inline exercise, in
18.2. Nine of the fourteen problems have no keyed answer and are left out,
named in `notes` and in `exercise_notes`. The two keyed AP items are set as
the book keys them, one a lettered choice and one an open answer; the two
unkeyed ones are open items, the first keeping its four options in the
prompt as `config.md` asks. Every conceptual question carries an AI-marked
suggested approach.

## Types the page binds

`charge`, `electric-field` and `force`. Coulomb's constant, every distance,
every angle and every count stay untyped and in ink.

## Wanted at chapter level

- `eq-parallel-force` → 18.7-free-charges-and-equilibrium
- `electrostatic-equilibrium` → 18.7-free-charges-and-equilibrium
- `field-perpendicular-to-conductor` → 18.7-free-charges-and-equilibrium
- `field-inside-conductor-zero` → 18.7-polarized-conductor
- `excess-charge-on-surface` → 18.7-polarized-conductor
- `uniform-field-between-plates` → 18.7-parallel-plates
- `earths-electric-field` → 18.7-earths-field
- `charge-concentrates-at-points` → 18.7-uneven-surfaces
- `lightning-rod` → 18.7-applications
- `faraday-cage` → 18.7-applications
- No concept or symbol row needs changing. The nine rows `ch18/config.md`
  stages for this section (`q`, `q_a` to `q_d`, `E_field`, `E_par`,
  `E_perp`, `F_par`) are the ones the page writes, and no existing row is
  touched.

**Applied by the chapter pass (2026-09-15).** `eq-parallel-force` is
anchored at `18.7-free-charges-and-equilibrium`, and so are the variable
rows `q`, `E_field`, `E_par`, `E_perp` and `F_par`; `q_a` to `q_d`, which
label the square the exercises read, are anchored at `18.7-four-charges`.
The nine concept ids listed above resolve, and no concept or symbol row was
changed.

# Plan: 23.3 Motional Emf

Written before the page was built, as `ch23/config.md` says the plan file
stands in place of the per-section stop (root rules 2 and 5).

## Sub-concepts

The module prints no headers of its own, so these four are the agent's, and
they are the spans the coverage rows name.

1. `motion-induces` — Motion as a cause of induction. The two opening
   paragraphs: any change in flux induces an emf, motion is one of the major
   causes of it, and the Hall effect, which gave $\text{emf} = B\ell v$ in the
   preceding chapter, turns out to be one case of induction rather than a
   separate effect.
2. `rod-on-rails` — A rod sliding along a pair of rails. The apparatus, the
   derivation in its three steps, the two display equations, and the boxed
   Making Connections: Unification of Forces, which the book prints straight
   after the result.
3. `relative-motion` — Which way the current runs, and what has to be moving.
   Lenz's law applied to the rails, and the paragraph that says the field may
   move instead of the rod because only the relative motion matters.
4. `earths-field` — Motional emf in the Earth's field. The screwdriver that
   develops 150 µV, the Tethered Satellite experiment and the worked example
   that calculates its 7.80 kV.

## Concepts

Four, all written into `book.json` by the prep pass; the page introduces each
one once and uses the first of them throughout.

| concept | kind | introduced in | used in |
|---|---|---|---|
| `relative-motion-induces` | idea | `motion-induces` | `relative-motion` reinforces it |
| `motional-emf` | result | `rod-on-rails` | `motion-induces`, `relative-motion`, `earths-field` |
| `motional-emf-from-faradays-law` | skill | `rod-on-rails` | `relative-motion` reinforces it |
| `motional-emf-power-conversion` | idea | `earths-field` | — |

No concept of this section is without a book exercise of its own, so nothing
is generated (rule 13).

## Figures

One line per figure in the format of `docs/prompts/interactive-figures.md`.

`sim-rod-rails` · Figure 23.10 · `motional-emf`, `motional-emf-from-faradays-law` · value add: intuition, since the field, the rod and the velocity stand at right angles to one another in space and the book's page of crosses can only assert it; variation, since $B$, $\ell$ and $v$ each change the emf and the reader can set the 1.50 T, 30.0 cm and 2.22 m/s of the section's fifth problem and read 1.00 V; flow, since the flux is a rate and the reader must see the area grow while the flux line climbs · moving: the rod slides the length of its rails once every loop and the enclosed area grows as it goes, so the idea has a clock in it and the figure takes the transport (rule 14) · sliders $B$ (magnetic-field), $\ell$ (untyped, ink), $v$ (velocity), and a choice of what the drawing carries, the area swept and the polarity of the rod, which is the book's part (a), or the induced current, the field it raises and the drag on the rod, which is the book's part (b), set as a dropdown rather than a button row because four controls in one row leave a segmented control too narrow to name either state (rule 26.1) · headline: the live sentence "The rod has moved 0.42 m in 0.19 s, sweeping 0.13 m² of new area, so the flux through the circuit has grown by 0.19 Wb." · graph below the scene, which is a horizontal one: the flux against time, whose slope is the emf · 2D on a locked view (rule 28.2), not a full 3D scene: the rails lie flat like a table top and the field runs straight down through them, so that $B$, $\ell$ and $v$ are seen to be mutually perpendicular; the viewpoint is fixed at a yaw of 0.36 and a pitch of 0.60, from above and to the right, and the reader never turns it, because one viewpoint says everything the arrangement has to say and a turn would cost the fixed scale the swept area is measured on. Entity names: six at most in either state, each beside its own thing, so they are shown rather than held behind a Labels button (rule 26.7).

`sim-relative-motion` · Sim · `relative-motion-induces`, `motional-emf` · value add: variation by choice, since the same apparatus at the same speed gives the same emf when the rod moves and when the rails and the field move the other way, and no emf at all when everything moves together; intuition, since the reader can see that what the emf follows is the separation of the rod from the resistor and not the motion of any one part · moving: the whole point is a comparison of three motions, so something slides in every state and the figure takes the transport; the third state, in which the apparatus moves as one piece, is the exception that makes the point, and its flux line is flat · slider $v$ (velocity), the speed whichever part is carrying it; a choice of what moves, the rod, the rails and the field, or both together (rule 26.1) · headline: the live sentence "The rod and the rails are separating at 2.00 m/s, so the emf is 0.90 V." · graph below the scene, the flux against time again, so that the flat line of the third state stands beside the two climbing ones · 2D on the same locked view as Figure 23.10, for the same reason and with the same viewpoint.

`sim-tether` · Figure 23.11 · `motional-emf-power-conversion`, `motional-emf` · value add: variation, since the length, the orbital speed and the angle between the velocity and the Earth's field each change the emf, and the reader can reach the 7.80 kV of the worked example, the 5 kV the experiment expected and the 40.0 V of the August 1992 flight; intuition, since the drawing shows the current going out along the tether and back through the ionosphere, which is what makes the circuit a circuit, and the drag that pays for the electrical energy · still: an orbiting tether develops a steady emf and nothing here has a clock, so there is no cycle and no transport (rule 14) · sliders $\ell$ (untyped, ink), $v$ (velocity) and $\theta$ (untyped, ink), with $B$ held at the Earth's $5.00 \times 10^{-5}$ T and stated on the drawing · headline: the live sentence "A 20.0 km tether moving at 7.80 km/s across the Earth's field develops 7.80 kV between its ends." · no graph: the scene and its readout carry the relation, and a straight line of emf against length would say nothing the readout does not · 2D and flat (rule 28.1), since the arrangement is a length, a velocity and a field in one plane.

Both of the section's images are book figures and both are replaced, each
keeping the book's number, its image as its `originals` and its caption as
`original_caption`: `Figure_23_03_01.jpg` at 450 px for Figure 23.10, whose
parts (a) and (b) are sub-figures of one number and become the figure's one
choice, and `Figure_24_03_02.jpg` at 225 px for Figure 23.11. The section has
no photograph and no unnumbered image, so nothing is dropped.

## Extra simulations offered

`sim-relative-motion` above is the one candidate that survived the test of
rule 15, and `ch23/config.md` lets the plan decide. Two others were judged and
dropped: a rod whose rails are not perpendicular to the field, which is the
seventh problem and would need the $\sin\theta$ the section does not derive,
and which `sim-tether` already carries on its angle slider; and a screwdriver
swung through the Earth's field, which would be the same figure as the rails
with smaller numbers.

## Exercises

Fifteen in the module: 4 conceptual questions and 11 problems, and no Check
Your Understanding box, so nothing is set inline and the page carries no
`div.exercises` host. The conceptual questions are all unkeyed and each gets an
AI-marked suggested approach. Three problems carry the book's answer and are
kept, with their own numbers: `p3` the jet's wingspan, `p5` the speed of the
sliding rod, and `p11` the drag on the Tethered Satellite. The other eight are
unkeyed and are left out and named in `notes`: two ask the reader to show that
the magnetic force opposes the velocity, one asks for a proof of
$\text{emf} = B\ell v\sin\theta$, and the rest are unkeyed numerical or
Integrated Concepts items. Nothing is held for a later section and nothing
comes from another one.

## Tables

None. The module prints no table.

## Types the page binds

`magnetic-field`, `magnetic-flux`, `voltage`, `current`, `velocity`, `force`
and `position`, which is what `ch23/COLOR.md` gives the page, and two it does
not list for this page: `time`, which the horizontal axis of both rail figures
carries and which that file's own time row grants to a figure with a clock in
it, and `power`, because `sim-tether`'s readout states the 78.0 kW the tether
takes out of the shuttle's orbit, which is the whole of
`motional-emf-power-conversion` in one number, and a page that states a power
colours it. The area $\Delta A$, the length $\ell$, the angle $\theta$ and the
number of turns stay untyped and in ink, and the flux never wears the field's
hue.

## Wanted at chapter level

- `eq-swept-area` → `23.3-rod-on-rails`
- `eq-motional-emf` → `23.3-rod-on-rails`
- `23.3/ΔA` → `23.3-rod-on-rails`
- `23.3/v` → `23.3-rod-on-rails`
- `23.3/l` → `23.3-rod-on-rails`
- `ch23/COLOR.md`, the paragraph of expected bindings: 23.3 binds `time` and
  `power` as well as the seven types listed there, the first for the time axis
  of the two rail figures and the second because `sim-tether` states the power
  converted from the shuttle's orbit.

### Decided by the chapter pass (2026-09-16)

- Both `equations` rows and all three `variables` rows are anchored to
  `23.3-rod-on-rails`, as asked.
- `ch23/COLOR.md` now gives 23.3 `time` and `power` as well as its seven.

# Config: College Physics 2e, Chapter 28

Written by the prep agent after exploration (2026-09-28). Status: applied as
proposed on 2026-09-28, on Chen's instruction to finish the book without
check-ins; the per-section stops of rule 2 and the plan reviews of rule 5 are
replaced by a plan file per section, written before the section is built and left
for review after. Each line is a setting and its value.

| Setting | Value |
|---|---|
| Chapter | 28 Special Relativity, modules m42525 (introduction), m42528, m42531, m42535, m42540, m42542, m42546 |
| Front matter | the introduction (m42525) is a page of its own in `ch28/intro/`, built in the prep pass, keeping both photographs (Figure 28.1, the tagged shark, and 28.2, Einstein); its italic run-in word *Relativity* heads its second part |
| Media file names | no spaces; the bundle mixes `Figure_29_…a.jpg` with three `Figure_28_….jpg` files (28.4, 28.6, 28.14), copied under the bundle's own names to `media/ch28/` |
| Unit of work | one section = one page; never folded (rule 11); 28.1 and 28.5 stay pages of their own |
| Order | 28.1 to 28.6 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all six sections in one wave; review after |
| Prose | verbatim; objectives, summary and glossary to the tables; the boxed notes kept verbatim (listed in `exploration.md`), and the seven numbered Problem-Solving Strategies for Relativity in 28.6 kept as the book's numbered list |
| Tables | none in this chapter |
| Sub-concept headers | the book's own where it prints them (28.1 two, 28.2 three, 28.3 two, 28.4 three, 28.6 four); the agent's in 28.5, which prints none |
| Figures | a figure per idea or result the section introduces; every drawing and both graphs replaced (28.5–28.8, 28.10–28.12, 28.14–28.17, 28.19, 28.22) with the book's image as original; folds judged per section (candidates 28.6 + 28.7, 28.10 + 28.11, 28.16 + 28.17) |
| Photographs | 28.1, 28.2 (intro), 28.20, 28.21, 28.23 kept, the text points at them; the section openers 28.3, 28.4, 28.9, 28.13 and 28.18 are splash images and dropped unless the section's plan argues the caption carries the idea |
| Sim sliders | the relative speed $v$ (or $u$) as a fraction of $c$ with dashed specials at the book's values ($0.950c$, $\gamma = 30.00$, $0.500c$, $0.750c$, $0.825c$, $0.990c$), the proper time or proper length, the thrown velocity $u'$, the source wavelength, the rest mass |
| Motion | allowed where the idea has a clock: the flashes (28.5), the light clock (28.6), the muon and the ship (28.10, 28.11), the thrown canister (28.17); the graphs and the Doppler figure are still |
| 3D | none; every effect is along the line of motion and the book draws side-on; no locked view |
| Colour coding | see `COLOR.md`; no new type; $\gamma$ untyped and in ink; mass untyped |
| Symbols | nine staged: `γ_rel` untyped; `Δt_0` `\kdto`; `L_rel` `\kLrel`; `u_prime` `\kuprime`; `λ_s` `\klams`; `λ_obs` `\klamobs`; `E_0rest` `\kErest`; `KE_rel` `\kKErel`; `KE_class` `\kKEclass`. Reused: `c` `\kc`, `v` `\kv`, `u` `\ku`, `Δt` `\kdt`, `D` `\kD`, `s` `\ks`, `L_0` `\kLo`, `p` `\kp`, `p_tot` `\kptot`, `E` `\kE`, `W_net` `\kWnet`, `KE` `\kKE`, `f_obs` `\kfobs`, `f_src` `\kfsrc`, `m`, `Δm` |
| Inline exercises | one Check Your Understanding per section, each on a `div.exercises` host with `data-place` after the passage it tests |
| Exercises tab | problems, conceptual questions, AP test prep |
| Exercise placement | `exer-00001` 28.6 → 28.3 (`source_section: "28.6"`); `fs-id3762172` 28.4 AP → 28.5 (`source_section: "28.4"`); both sections' `exercise_notes` say so |
| Untyped exercise blocks | `exer-00001` has an empty `type=` and is classed `problem` |
| AP test prep | included; three of six keyed; the unkeyed choice items `fs-id3762172` and `fs-id2691530` kept as open items with their options, `fs-id2015058` with a suggested approach, never graded |
| Answers | book key only; the 35 unkeyed problems left out and named in `exercise_notes` |
| Suggested approaches | generated, marked AI: all 22 conceptual questions and the three unkeyed AP items |
| Generated questions | none |
| Concept nodes | 33 merged before the sections are built (4, 7, 5, 5, 3, 9) with 73 prerequisite edges into Chapters 2, 3, 4, 6, 7, 8, 16, 17, 19, 24, 25 and within the chapter |
| Formulas | 18 equations in `chapter.json`, the stated ones important; no anchors until the sections are built |
| Cross-references | plain text to General Relativity and Quantum Gravity, Particle Physics and every unbuilt chapter; 28.1's link to The Law of Refraction (25.3) is plain text until Chapter 25 is built |
| Errata | carried as printed, listed in `exploration.md`, named in the section's `notes` |
| Book manifest | `ch28` merged with `ost merge college-physics-2e 28` |

## What the build changed

| Setting | As built |
|---|---|
| Folds | Figure 28.16 + 28.17 is one figure, the ship sending a laser beam or a canister with a choice; 28.6 + 28.7 and 28.10 + 28.11 stay apart, each its own figure; 28.1 adds a Sim of light from a moving source, 28.4 a Sim of the relativistic Doppler shift, 28.6 a Sim of the energy-momentum triangle |
| Motion | the Sim of 28.1, the flash lamps and the light clock of 28.2, and Figures 28.10 and 28.11 of 28.3 register a cycle; the muon's γ curve, the twins, every figure of 28.4 (the canister included), both graphs and the energy triangle are still |
| Photographs | the section openers 28.3, 28.4, 28.9, 28.13 and 28.18 are dropped; 28.20, 28.21 and 28.23 are kept in 28.6 |
| Colour coding | 28.1 binds `velocity`; 28.2 draws the twins in `time` alone; 28.3's electron wears the element palette through `F.el` |
| Tolerances | the near-c and near-1 answers carry `tol`: 28.2's 0.99995c, 28.5's 2.9957 × 10⁸ m/s and both parts of the asteroid problem |
| Anchors | every equation and variable row anchored by the chapter pass; glossary rows carry none |

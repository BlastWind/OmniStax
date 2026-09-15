# Plan: 16.11 Energy in Waves: Intensity (m42250)

Source: `source.md` (converted from CNXML). Written 2026-09-14 in the wave
that builds 16.7 to 16.11 in parallel; under `ch16/config.md`'s dated block
the per-section stop of root rule 2 is replaced by this file, left for review
after the page is built.

The chapter's last section, and a short one: one learning objective, two
short passages, one definition, two worked examples, one Check Your
Understanding, two conceptual questions, nine problems and no AP items. One
splash photograph and one drawing to settle.

## Sub-concepts (page headers)

The book prints no header of its own. Two blocks:

1. **The energy of a wave depends on its amplitude** (span `wave-energy`):
   the opening paragraphs on earthquakes, loud sounds, ultrasound and
   breakers, and the argument that a wave is a displacement resisted by a
   restoring force, so that $W \propto Fx = kx^2$ and a wave's energy is
   proportional to its amplitude squared.
2. **Intensity is the power per unit area** (span `intensity`): time and
   area as the other two factors, the definition $I = P/A$ with its unit and
   its examples (1300 W/m² above the atmosphere, 10⁻³ W/m² for 90 decibels),
   Example 16.9 (the solar collector and the magnifying glass), Example 16.10
   (two waves interfering perfectly constructively, with Figure 16.41), and
   the Check Your Understanding after them.

The publisher's example numbers are kept: 16.9 and 16.10 both sit here.

## Concept nodes

Staged in the prep pass and used as they stand; nothing new is added.

| id | kind | introduced in |
|---|---|---|
| wave-energy-amplitude | result | `wave-energy` |
| intensity | idea | `intensity` |
| energy-from-intensity | skill | `intensity` (Example 16.9 a) |
| intensity-area-ratio | skill | `intensity` (Example 16.9 b) |

The span `wave-energy` uses `hookes-law` (16.1), `amplitude` (16.3) and
`wave` (16.9); the span `intensity` uses `power` (7.7), `energy-from-power`
(7.7) and `constructive-interference` (16.10), and reinforces
`wave-energy-amplitude` through Example 16.10.

## Figures

id · replaces · concepts · value add · motion · sliders · headline · graph · 3D

1. `sim-amplitude-energy` · Sim (the book draws nothing here) ·
   wave-energy-amplitude · value add: variation by slider, and the area that
   is the work made visible, neither of which the printed equation gives ·
   still, because the relation between amplitude and energy has no clock in
   it and a travelling wave would only decorate it (tier: still simulation) ·
   amplitude $X$ (0.01 to 0.20 m, default 0.05, position hue), force constant
   $k$ (10 to 200 N/m, default 50, stiffness hue) · "an amplitude of 0.100 m
   is twice 0.050 m, and it carries four times the energy" · the force graph
   sits below the horizontal wave, with the two energy bars beside it
   · 2D. A wave profile along the top with its amplitude bracketed, the
   reference amplitude drawn dashed behind it; below, $F = kx$ with the
   triangle under it shaded, which is the work done to create the
   displacement; beside the graph, two bars, the reference wave and this one,
   in the energy hue, so that doubling the amplitude quadruples the bar.
2. `sim-intensity-area` · Sim (the definition has no figure) · intensity,
   energy-from-intensity, intensity-area-ratio · value add: variation by
   slider and the inverse relation drawn as a curve, so that concentrating a
   beam is seen rather than asserted · still, because the beam is steady and
   the time enters only as a number in $E = IAt$ (tier: still simulation) ·
   power $P$ (50 to 1000 W, default 350, power hue), area $A$ (0.05 to 2.00
   m², default 0.500, ink), time $t$ (0.5 to 8.0 h, default 4.00, time hue),
   and a choice, spread or focused by a magnifying glass onto an area 200
   times smaller (a discrete state, so a button row, rule 26.1) · "350 W
   through 0.500 m² is an intensity of 700 W/m², and in 4.00 h it delivers
   5.04 × 10⁶ J" · $I$ against $A$ below the horizontal scene, the curve
   $I = P/A$ with the current point on it; the focused state lies off the
   left of the axis and is pinned there with its value · 2D. The book's
   numbers of Example 16.9 are the defaults, so the figure loads showing that
   example, and the focused button is its part (b).
3. `sim-speaker-interference` · Figure 16.41 · intensity,
   wave-energy-amplitude · value add: variation by slider; the book prints
   one room at one wavelength, and the reader has to imagine what a longer
   wavelength or a wider spacing does to the pattern · still, because the
   pattern itself stands where it is; only the room's sound moves, and
   animating it would hide the standing pattern the figure is about (tier:
   still simulation) · wavelength $\lambda$ (0.2 to 2.0 m, default 0.80,
   position hue), speaker separation $d$ (0.5 to 4.0 m, default 2.0, position
   hue), listening position $x$ along the far wall (−4.0 to 4.0 m, default
   0, position hue) · "at $x$ = 0.00 m the two waves arrive in step, and the
   intensity is 4.00 W/m², four times either wave alone" · none; the shaded
   room is the graph · 2D. The room is shaded in the intensity hue, dark
   where the two waves arrive in step and pale where they cancel, with the
   listening post marked on the far wall and the two path lengths drawn to
   it. Labels: the two speakers, the listener and one loud and one silent
   place are named, five in all, so labels stay on (rule 26.6).

Photographs:

- Figure 16.40, the earthquake damage in Port-au-Prince (credit: Petty
  Officer 2nd Class Candice Villarreal, U.S. Navy): **drop**. The text names
  no figure, and it heads the section as a splash image, which `config.md`
  drops.
- Figure 16.41, the two speakers: **replaced**, not kept. It is a drawing of
  a shaded interference pattern, and the text points at it from Example
  16.10, so it becomes the simulation above and travels as that row's
  original, at the 325 units the book prints it at.

Extra simulations (rule 15): considered a spreading circular wave whose
amplitude falls as it travels, for the second conceptual question. It would
say the same thing as `sim-intensity-area`'s curve with a larger area, and
Chapter 17 is where a spreading wave is treated, so it is not proposed.

## Exercises

- 1 Check Your Understanding, open, inline after the `intensity` block, with
  the book's answer.
- 2 conceptual questions, open, in the Exercises document, each with an
  AI-marked suggested approach.
- 9 problems. Kept, with the book's keyed answers: 1 (the ultrasound head,
  0.225 W), 3 (the factor on the amplitude, 7.07), 5 (the energy from the
  Sun, 16.0 d), 6 (the ocean breakers, 2.50 kW), 8 (the microphone, 3.38 ×
  10⁻⁵ W/m²). Left out as unkeyed, and named in `notes`: 2 (the low-frequency
  speaker), 4 (the insolation meter), 7 (the photovoltaic array), 9 (the
  laser beam).
- No AP test prep: the module prints none.
- No generated questions; every node has a book exercise.

## Tables and views

- Formulas: the five equation rows the prep pass staged, all important —
  `eq-wave-energy-amplitude`, `eq-intensity`, `eq-energy-from-intensity`,
  `eq-intensity-area-ratio`, `eq-intensity-amplitude-squared`.
- Definitions: the twelve variable rows of the section and the one glossary
  term, intensity.
- The section summary goes to `summary_html`, the objective to `objectives`.

## Colour

The page binds `intensity` and `power` (Chapters 17 and 7, used by name and
never restaged), `position` ($X$, $X'$, $x$, $\lambda$, $d$), `energy` ($W$,
$E$), `time` ($t$), `force` ($F$) and `stiffness` ($k$). The area $A$, every
ratio and every count stay in ink. Force and stiffness are two more than
`ch16/COLOR.md` expected of this page; they are bound because figure 1 draws
the restoring force against the displacement, which is the book's own
argument for $W \propto kx^2$, and the chapter pass is asked to record it.

## Wanted at chapter level

- `eq-wave-energy-amplitude` → 16.11-wave-energy
- `eq-intensity-amplitude-squared` → 16.11-wave-energy
- `eq-intensity` → 16.11-intensity
- `eq-energy-from-intensity` → 16.11-intensity
- `eq-intensity-area-ratio` → 16.11-intensity
- `ch16/COLOR.md`: 16.11 binds `force` and `stiffness` as well as the five
  the file expects, because `sim-amplitude-energy` draws $F = kx$ and shades
  the work under it.
- `ch16/config.md`: the section prints no AP test prep, so the four unkeyed
  AP items the dated block lists for the wave are all in 16.7 to 16.10.

**The chapter pass, 2026-09-14.** The five equation anchors are written, and so
is one on each of the twelve variable rows. `ch16/COLOR.md` records that
16.11 binds `force` and `stiffness` as built, and `config.md`'s new block
corrects the AP line: 16.11 prints no AP test prep, so the wave's eight
open AP items sit in 16.7 to 16.10 alone.

**Figure pass, 2026-09-15 (Claude Fable 5.1).** All three figures were looked at in light and dark at every slider extreme and every choice and left as built: no label sits on a line or another label, nothing is clipped, and the axes hold at every setting.

# Plan: 34.5 Complexity and Chaos

Written before the page was built (root rule 5), under `ch34/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints no header, so the four headers are OmniStax's, each where the
subject changes.

| Span | Header | What it holds |
|---|---|---|
| `complex-systems` | Complex adaptive systems | Complexity defined; the primordial ocean and the emergence of life |
| `complexity-discipline` | Complexity as a discipline | Parallels between economic, cultural and biological systems; complexity in thermodynamics, crystal growth, alloys and magnetic domains |
| `chaos` | Chaos | Chaos defined by sensitivity to initial conditions; Pluto's orbit, a decaying satellite, a chaotic heartbeat; the Sim |
| `order-in-chaos` | Order in chaos | Simple and complex chaotic systems, fractals (Figure 34.21), the planets' orbits and the Great Red Spot (Figure 34.22); the closing paragraph |

## Concepts

All three are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `complexity` | `complex-systems` | reinforced in `complexity-discipline`, `order-in-chaos` |
| `chaos` | `chaos` | reinforced in `order-in-chaos` |
| `order-in-chaos` | `order-in-chaos` | — |

Earlier concepts used: `heat-transfer-methods` (14.4) and `magnetic-domains` (22.2) in `complexity-discipline`; `rotational-kinetic-energy` (10.4) in `order-in-chaos`.

## Types the page binds

`angle`, `position` and `time`, all in the Sim: the release angle and the start difference, the horizontal position of a lower bob, and the time since release. In the prose, "500 million years" and "at least 400 years" wear `time` as values, and "rotational energy" wears `energy` by its concept. The chapter's `COLOR.md` expected none or time; the Sim adds `angle` and `position` by the book's table.

## Referents

`pendulum-1` (the first pendulum) and `pendulum-2` (the second pendulum), released from starts a hair apart: each drawn in its own colour in the scene and as its own curve on the graph, and marked in the Sim's caption.

## Figures

The module prints two images, both pointed at by the text, and no sketch. Rule 14 gives the section's new definition, chaos, a figure: the text names the double pendulum as a chaotic system and defines chaos by sensitivity to initial conditions, which the reader can only imagine from the words.

```
sim-double-pendulums · Sim · chaos, order-in-chaos · value add: flow by animation and variation by slider (two double pendulums released from starts 0.001° apart swing as one, then part and go their own ways; the graph of each lower bob's horizontal position shows the two curves lying on one another and then splitting; a row of parting times, one for each start difference from 1° to 0.000001°, shows that a start a million times closer buys only a few seconds more, so the long-term motion cannot be predicted; the release angle shows that the same pendulum swung gently is not chaotic and never parts) · arrows: none · moving, both pendulums integrated from rest on the clock, 20 s of model time at true speed with a 2 s hold, since parting takes seconds; the house's 4 to 6 s loop would hide it · sliders: θ₀ (angle, 30° to 150°, 120° by default), log₁₀(Δθ₀/1°) (angle, −6 to 0, step 1, −3 by default); no specials, since the text names no particular value · headline: "Started 0.001° apart, the two pendulums swing as one" until they part, then "… part at t = 7.1 s and swing their own ways", or "… swing as one for all 20 s" when gentle · readout: |x₁ − x₂| = |x₁ − (x₂)| = Δx at t, numbers adding up, clock-driven so never highlighted; note: how much later a start ten times closer parts, on average over the row, or that a gentle swing never parts · graph beside: the pendulum hangs, a vertical scene; x of the lower bob (−1 to 1 m, the reach of both arms) against t (0 to 20 s), fixed · 2D, the motion is in one plane and the lesson is a relation in time (rule 28.1)
```

Labels: the release pose is a faint straight line with its angle arc labelled θ₀; the moving bobs carry no label (rule 26.7), and hover names carry each pendulum's upper and lower bob. The two referent colours are named once, in a legend in the scene's lower left corner, outside the reach of the arms. The parting time is a dashed vertical line on the graph labelled "part"; the row of parting times under the time axis is named once in ink, and its marks carry hover names ("started 0.001° apart: part at 7.1 s"), the current one filled. Arms are 0.5 m each, the bobs of equal mass; the pendulums' own numbers appear nowhere in the text, so these are OmniStax's.

## Photographs and unnumbered images

- Figure 34.21, the image related to the Mandelbrot set: kept as a photo row (width 250). The text points at it ("such as in Figure 34.21") as an example of a fractal pattern; it is a credited computer-generated image, not a sketch.
- Figure 34.22, the Great Red Spot: kept as a photo row (width 250). The text points at it ("See Figure 34.22").

## Extra simulations considered

- A zoom into the Mandelbrot set (Figure 34.21) showing ever finer patterns. Left: the book offers the image only as an example of order in chaos and teaches nothing of the set itself; the zoom would teach the mathematics of the set, not the physics of the section, and the photograph's credited image would be lost.
- A vortex street settling into one large stable vortex, after the Great Red Spot. Left: no fluid model the book has taught can show self-organization honestly.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Conceptual question | 2 | 2 | — |

Neither is keyed; both carry AI-marked suggested approaches. No problems, AP items or Check Your Understanding in the module.

## Wanted at chapter level

- variable `θ_0` (angle, "the angle from the vertical at which both arms of a double pendulum are released, in a straight line") → 34.5-chaos; the Sim's slider and caption write `\ktheta_{0}`.
- variable `Δθ_0` (angle, "the difference between the release angles of two double pendulums") → 34.5-chaos; the Sim's slider and readout write `\Delta\ktheta_{0}`.
- variable `x` (position, "the horizontal position of a double pendulum's lower bob, measured from below the pivot", with `x_1` and `x_2` naming the referents `pendulum-1` and `pendulum-2` in `ref`) → 34.5-chaos.
- variable `t` (time, "the time since the two double pendulums were released") → 34.5-chaos.
- `ch34/COLOR.md` 34.5 row: the page binds `angle`, `position` and `time`, and draws the two pendulums as referents.
- No concept, edge or symbol row needs changing.

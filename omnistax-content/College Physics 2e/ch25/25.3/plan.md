# Plan: 25.3 The Law of Refraction

Written before the page was built (root rule 5), under `ch25/config.md`, which
replaces the per-section stop with a plan left for review: applied as proposed on
2026-09-28, on Chen's instruction to finish the book without check-ins.

## Sub-concepts

The module prints two narrative headers, The Speed of Light and Law of
Refraction; the opening passage before them takes a header of OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `refraction` | Refraction | The fish tank, the definition of refraction, the boxed Refraction and Speed of Light, Figure 25.10, and the paragraph that says light bends because it changes speed |
| `speed-of-light` | The Speed of Light | Roemer and Michelson, Figure 25.11, the value of $\kc$, the definition $n = \kc/\kv$, the two boxed equations, Table 25.1 and Example 25.1 (zircon) |
| `law-of-refraction` | Law of Refraction | Figure 25.12, Snell's law, the boxes The Law of Refraction and Take-Home Experiment: A Broken Pencil, Example 25.2 (water from its angles) and Example 25.3 (diamond) |

## Concepts

All seven were written by the prep pass; the page introduces all of them and adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `refraction` | `refraction` | reinforced in `law-of-refraction` |
| `speed-of-light-in-vacuum` | `speed-of-light` | used in `law-of-refraction` |
| `index-of-refraction` | `speed-of-light` | used in `law-of-refraction` |
| `speed-in-a-medium-from-the-index` | `speed-of-light` | — |
| `snells-law` | `law-of-refraction` | — |
| `bending-toward-or-away-from-the-normal` | `law-of-refraction` | — |
| `find-an-index-or-an-angle` | `law-of-refraction` | — |

## Types the page binds

`velocity` (the speed of light $\kc$ and the speeds $\kv$ in each medium), `position`
(Michelson's distance $\kd$ to the stationary mirror) and `time` (the round-trip
time and the period of the rotating mirror), which is what `ch25/COLOR.md` gives
25.3. Every index of refraction and every angle is untyped and in ink; the scene
lengths of the fish tank are untyped too. Light carries no wavelength on this page,
so every ray is ink; the two paths of the fish tank are told apart by `F.cat`.

## Figures

```
sim-fish-tank · Figure 25.10 · refraction · value add: variation by slider, since the reader moves the fish and watches both of its images move with it, so the two paths are a consequence of bending at two faces rather than a picture to take on trust · still, because the paths are a state of the tank and have no clock in them · sliders: the fish's place across the tank (untyped, −0.8 to 0.8 of the half width, 0 by default, the book's fish on the diagonal) and its distance back from the near corner (untyped, 0.3 to 0.9 of the diagonal, 0.6 by default); no choice · headline: "Light from the fish leaves through both front faces, so the eye sees the fish in two places." · graph: none; the book's own top view (its inset), the tank a square turned corner-on to the eye, water n = 1.333 and the thin glass walls left out, as a thin parallel wall changes no final direction · 2D, since the book's inset is the plan view and the perspective drawing beside it adds nothing the plan view lacks (rule 28.1)
sim-michelson · Figure 25.11 · speed-of-light-in-vacuum · value add: flow by animation and variation by slider, since the measurement is a race between a pulse of light and the turning mirror, which the book's three still stages can only list · moving: the pulse travels out and back at a steady scaled speed while the eight-sided mirror turns, one loop about 5 s and a hold of 1.2 s; the clock is the measurement itself · sliders: the distance d to the stationary mirror (position, 10.0 to 50.0 km, 35.0 km by default, the book's) and the period T of one turn of the mirror (time, 1.00 to 4.00 ms, 1.87 ms by default), with a dashed circle on T where one eighth of a turn takes exactly the round trip, T = 16d/c, which is the special value the text names ("the correct rotation rate") · headline: "The light is back after 0.233 ms, just as the next face turns into place, so the observer sees it." and its miss case · graph: none · 2D, the book's own plan view
sim-refraction · Figure 25.12 · snells-law, bending-toward-or-away-from-the-normal, index-of-refraction, speed-in-a-medium-from-the-index, find-an-index-or-an-angle · value add: variation by slider and choice, since the book draws one slowing and one speeding case and the reader can set any angle and any two media of Table 25.1, and intuition, since the wavefronts crossing the surface are the lawn mower's axle: the end that reaches the slower medium first is held back and the front swings toward the perpendicular · still, because a refracted ray is a state and the wavefronts are drawn as a set at equal times, not played · slider: θ₁ (untyped, 0 to 89°, 30.0° by default, Examples 25.2 and 25.3); choices: medium 1 and medium 2, each a dropdown of eight media from Table 25.1 (a discrete state, rule 26.1), air into water by default, so the figure opens on Example 25.2's 30.0° and 22.0°, and air into diamond gives Example 25.3's 11.9° · headline: "Going from air into water, light slows from 3.00 to 2.25 × 10⁸ m/s and bends toward the perpendicular." · graph: none · 2D (rule 28.1)
```

Labels: the fish tank names the eye, the fish and its two images (four); Michelson
names the source, the rotating mirror, the stationary mirror and the observer
(four) and brackets d; the refraction figure names the two media, the
perpendicular and the two angles (five) and writes each medium's speed. No figure
exceeds six. Where medium 1 has the greater index and θ₁ is large enough that
sin θ₂ would exceed 1, the refraction figure draws no refracted ray and says that
no light crosses; the name of that case belongs to 25.4 and is not used here.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_26_03_01.jpg` (25.10), `Figure_26_03_02.jpg` (25.11), `Figure_26_03_03.jpg` (25.12) | Kept as originals of the three sims | They are the drawings the sims replace |
| `CNX_APPhysics_25_M3_twopaths_img.jpg` (AP item `fs-id1723704`) | Kept on the card's `figure` field | The item is keyed and asks about the two paths drawn |
| `Figure 26_03_04-695d.jpg` (the scuba diver), `Figure 26_03_05.jpg` (the three-medium slab) | Not copied | Both belong to problems with no keyed answer, which are left out |
| `Figure 26_06_14.jpg` (the thermometer) | Not copied here | Its question moves to 25.6, whose build copies it |

## Extra simulations considered

- A pencil in a glass of water (the Take-Home Experiment). Left: it is an
  apparent-depth picture, which the fish tank already shows, and the box asks the
  reader to do it by hand.
- Roemer's moon of Jupiter. Left: the text gives it one paragraph and no quantity
  the section uses.

## Exercises

| Kind | In the book | Set here | Left out or moved |
|---|---|---|---|
| Check Your Understanding | 0 | 0 | — |
| AP test prep | 7 | 7 | — |
| Conceptual question | 8 | 7 | the curved thermometer (`fs-id2104353`) moves to 25.6 |
| Problem | 15 | 7 | 8 unkeyed left out |

Keys were read from the CNXML. Four AP items are keyed (`fs-id2040860` as a graded
choice, `fs-id1723704` and `fs-id1757613` as open items with the book's solution,
`fs-id2377940` as two numbers). Three choice items (`fs-id1292246`,
`fs-id2702712`, `fs-id1379992`) carry solutions the publisher commented out, so the
book prints no key; each is kept as an open item with its options and an
AI-marked suggested approach. All seven conceptual questions carry AI approaches.
Problems left out: the speed of light in air and crown glass, the substance with
2.290 × 10⁸ m/s, both scuba diver problems, the Moon's corner reflector, the
displacement through crown glass, the three-medium proof and the Construct Your
Own Problem item on sunrise. The gemstone Unreasonable Results item is keyed as
c/5.00 and is set as an open item with that key, since the key is not a number.

## Tables

Table 25.1 Index of Refraction in Various Media, in the text as a `div.book-table`
after the paragraph that cites it, with its three group headers spanning both
columns; the book's `0ºC` written 0°C.

## Wanted at chapter level

- `eq-speed-of-light` → 25.3-speed-of-light
- `eq-index-of-refraction` → 25.3-speed-of-light
- `eq-speed-from-index` → 25.3-speed-of-light
- `eq-snells-law` → 25.3-law-of-refraction
- `eq-index-from-angles` → 25.3-law-of-refraction
- `eq-refracted-angle` → 25.3-law-of-refraction
- variables `c`, `v`, `n` → 25.3-speed-of-light; `n_1`, `n_2`, `θ_1`, `θ_2` → 25.3-law-of-refraction
- glossary `refraction` → 25.3-refraction; `index of refraction` → 25.3-speed-of-light
- Move: `fs-id2104353` (the curved thermometer) is set with 25.6 with `source_section: "25.3"`; 25.3's `exercise_notes` says so.
- No concept, edge or symbol row needs changing.

Applied by the chapter pass (2026-09-28):

- The six equation anchors and seven variable anchors are written as listed. Glossary rows carry no anchor field, so the glossary lines need no row change; the terms stand as the section wrote them.
- The curved thermometer is set with 25.6 with `source_section: "25.3"`, and both notes agree.

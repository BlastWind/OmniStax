# Plan: 28.4 Relativistic Addition of Velocities

Written before the page was built (root rule 5), under `ch28/config.md`, which
records that the per-section stop is replaced by a plan file left for review
(applied as proposed on 2026-09-28, on Chen's instruction to finish the book
without check-ins).

## Sub-concepts

The module prints three headers, and the page keeps them as its three spans.

| Span | Header | What it holds |
|---|---|---|
| `classical-velocity-addition` | Classical Velocity Addition | The opening paragraph on the kayak, the girl on the sled with Figure 28.14, the boxed Classical Velocity Addition note and the two snowball sums |
| `relativistic-velocity-addition` | Relativistic Velocity Addition | The headlights of Figure 28.15, the boxed Relativistic Velocity Addition note, Examples 28.3 and 28.4 with Figures 28.16 and 28.17 folded into one figure |
| `doppler-shift` | Doppler Shift | The boxed Relativistic Doppler Effects note (its stray leading "=" dropped), the frequency form, the Career Connection, Example 28.5 on the receding galaxy, the closing paragraph and the Check Your Understanding |

## Concepts

| Concept | Introduced in | Also |
|---|---|---|
| `classical-velocity-addition-1d` | `classical-velocity-addition` | used in `relativistic-velocity-addition` |
| `relativistic-velocity-addition` | `relativistic-velocity-addition` | — |
| `calculate-relativistic-velocity-addition` | `relativistic-velocity-addition` | — |
| `relativistic-doppler-effect` | `doppler-shift` | — |
| `relativistic-doppler-frequency` | `doppler-shift` | — |

Used from earlier sections: `second-postulate` (28.1) in `relativistic-velocity-addition`, `doppler-effect` (17.4) in `doppler-shift`.

## Types the page binds

`velocity` ($\kv$, $\ku$, $\kuprime$, $\kc$), `position` ($\klams$, $\klamobs$) and `frequency` ($\kfsrc$, $\kfobs$), as `ch28/COLOR.md` gives 28.4. $v/c$ and $u/c$ are untyped and in ink. $\kuprime$ is the velocity measured in the other frame and is drawn dashed, as a variant of the one velocity hue; the classical sum $v + u'$ is a hollow marker, the relativistic $u$ a filled one. The source wavelength $\klams$ carries the dashed bracket and $\klamobs$ the solid one. People are `F.silhouette()` in ink; the sled, the car, the ship, the canister and the Earth are ink. One physical-fact colour: the spectral colour of the hydrogen light in the Doppler sim, computed from its wavelength and drawn only while the wavelength is visible.

## Figures

```
sim-sled-snowball · Figure 28.14 · classical-velocity-addition-1d · value add: variation by slider and a discrete choice, since the book prints the two throws as two pictures and here one choice flips the throw while the sliders set the sled's speed and the throw's speed, and a head-to-tail strip below the scene adds v and u' as numbers on one line · still, since the idea is a sum and has no clock; no cycle, no transport · choice: thrown forward / thrown backward (strings 'fwd', 'back'); sliders v (velocity class, 0 to 3.0 m/s, 1.0 by default, special 1.0) and u' (velocity class, 0 to 3.0 m/s, 1.5 by default, special 1.5) · headline: "Thrown forward, the snowball moves at u = 2.5 m/s relative to the Earth." · graph: none; the scene (man pulling, girl on the sled, snowball, boy watching) above a velocity strip from −4 to 7 m/s · labels: man, girl, boy named once each, v, u', u on their arrows, six in all · 2D, flat (rule 28.1: one line of motion)
sim-headlights · Figure 28.15 · relativistic-velocity-addition · value add: variation by slider, since the book draws one car and the reader here drives it from rest to 0.99c and sees the light reach the sidewalk at c every time, while the classical sum v + c, drawn as a hollow ghost beside it, grows past c · still, the relation has no clock · slider: v/c (velocity class, 0 to 0.99, 0.500 by default, special 0.500) · headline: "At 0.500c the light leaves the car at c and reaches the sidewalk at c, not 1.500c." · graph: none; the road, the car with its driver, the beam, the observer, two arrows of length c and the dashed ghost of v + c on one fixed velocity scale · labels: driver, observer, u' = c, u = c, v + c; five · 2D, flat
sim-ship-canister · Figure 28.16 + 28.17 · relativistic-velocity-addition, calculate-relativistic-velocity-addition, classical-velocity-addition-1d · value add: fold and variation, since the two examples are one ship and one projectile whose speed u' runs from −c to c, the laser of Example 28.3 is its end at c and the canister of Example 28.4 its points ±0.750c; a velocity line under the scene shows the classical sum escaping past the walls at ±c while the relativistic u stays inside them · still; the idea is the relation between three velocities and needs no clock, so no cycle and no transport · sliders: v/c (velocity class, 0 to 0.99, 0.500 by default, special 0.500) and u'/c (velocity class, −1 to 1, 0.750 by default, specials 0.750, −0.750 and 1 labelled laser) · headline: "The Earth sees the canister at 0.909c, not the 1.250c classical addition gives." · graph: none; the ship, its projectile and the Earth with its observer above a velocity line from −2c to 2c with the walls at ±c dashed · labels: ship, Earth, v, u', u, classical; six · 2D, flat
sim-relativistic-doppler · Sim · relativistic-doppler-effect, relativistic-doppler-frequency · value add: variation by slider and choice, since the text gives only the equation and one galaxy; here the reader moves the source from approaching at 0.90c to receding at 0.90c and watches the received wave stretch (red shift) or crowd (blue shift) beside the emitted one, and with hydrogen's 656 nm light sees the received colour pass out of the visible band · still, the relation between u and the wavelength has no clock · slider: u/c (velocity class, −0.90 to 0.90, 0.825 by default, specials 0.825 labelled galaxy, 0.350 labelled probe, 0); choice: radio waves, 0.525 m / hydrogen light, 656 nm ('radio', 'hydrogen') · headline: "Receding at 0.825c, 0.525 m radio waves arrive 1.70 m long: a red shift." · graph: none; the source with its velocity arrow, two wave strips, emitted above with λ_s dashed and received below with λ_obs solid, on one fixed scale of 120 units per λ_s, and the frequencies f_s and f_obs written beside the strips · labels: source, Earth, λ_s, λ_obs, f_s, f_obs; six · 2D, flat
```

Photographs: Figure 28.13 (`Figure_29_04_01a.jpg`, the kayak on the Deerfield River) is dropped as a section-opening splash image; the opening paragraph describes the same kayak in full, and the page mentions the figure nowhere else. Figures 28.14 to 28.17 are kept only as the originals of their replacements. Figures 28.16 and 28.17 print no caption in the book, so the folded row's original caption is empty, as the book leaves it, and the figure carries its own caption.

## Extra simulations considered

- A plot of $u$ against $u'$ for several $v$. Left: the velocity line of Figure 28.16 + 28.17 carries the same relation for the reader's own $v$ and is easier to read against the examples.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Check Your Understanding | 1 | 1, inline after `doppler-shift` | — |
| AP test prep | 2 | 1 keyed (`fs-id2630419`) | `fs-id3762172` moves to 28.5 with `source_section: "28.4"` |
| Conceptual question | 4 | 4, AI-marked suggested approaches | — |
| Problem | 15 | 8 keyed | 7 unkeyed: `fs-id2601119`, `fs-id1440845`, `fs-id1945618`, `fs-id3255899`, `fs-id2753552`, `fs-id2638027`, `fs-id2996441` |

## Wanted at chapter level

- `eq-classical-velocity-addition` → 28.4-classical-velocity-addition
- `eq-relativistic-velocity-addition` → 28.4-relativistic-velocity-addition
- `eq-relativistic-doppler-wavelength` → 28.4-doppler-shift
- `eq-relativistic-doppler-frequency` → 28.4-doppler-shift
- `u` → 28.4-classical-velocity-addition
- `u_prime` → 28.4-classical-velocity-addition
- `λ_s` → 28.4-doppler-shift
- `λ_obs` → 28.4-doppler-shift
- `f_src` → 28.4-doppler-shift
- `f_obs` → 28.4-doppler-shift
- 28.5 `exercise_notes`: `fs-id3762172` (AP, whether $F = ma$ governs near $c$) is printed in 28.4 and set in 28.5 with `source_section: "28.4"`, as an open item with its options.
- Errata for the chapter log: `fs-id1566424` prints "0.$0.900c$", carried as "0.0.900c"; the Doppler equations' stray leading "=" from the CNXML markup is dropped.
- No concept, edge or symbol row needs changing.

Applied by the chapter pass: The chapter pass set every anchor listed above and gathered the errata in `exploration.md` and the chapter log; 28.5's `exercise_notes` already agreed on `fs-id3762172`.

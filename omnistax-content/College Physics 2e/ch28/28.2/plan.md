# Plan: 28.2 Simultaneity And Time Dilation

Written before the page was built (root rule 5), under `ch28/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book's three headers. The opening paragraph, which asks whether time
intervals depend on who observes them, is set under the first.

| Span | Header | What it holds |
|---|---|---|
| `simultaneity` | Simultaneity (the book’s) | the opening question, the flash lamps on the rail car, Figure 28.5, the thought experiment, the summary sentence on simultaneity |
| `time-dilation` | Time Dilation (the book’s) | the Time dilation note, the light clock (Figure 28.6), the derivation to $\kdt = \gamma\kdto$, the Proper Time note, the low-velocity limit and the limit at $\kc$, the muon, Example 28.1 (Figure 28.7), the astronaut’s clocks, the Real-World Connections note on GPS |
| `twin-paradox` | The Twin Paradox (the book’s) | the twins at $\gamma = 30.0$ (Figure 28.8), why the premise is faulty, Hafele and Keating, Check Your Understanding |

## Concepts

| Concept | Span | Verb |
|---|---|---|
| `relativity-of-simultaneity` | `simultaneity` | introduces |
| `time-dilation` | `time-dilation` | introduces |
| `proper-time` | `time-dilation` | introduces |
| `relativistic-factor` | `time-dilation` | introduces |
| `time-dilation-equation` | `time-dilation` | introduces |
| `calculate-time-dilation` | `time-dilation` | introduces |
| `twin-paradox` | `twin-paradox` | introduces |
| `time-dilation` | `twin-paradox` | uses |

## Types the page binds

`time` ($\kdt$, $\kdto$, the clocks and the age bars), `velocity` ($\kv$, $\kc$,
the wall at $\kc$) and `position` ($\kD$, $\ks$, and the leg $L = \kv\kdt/2$ of
the light clock), as `ch28/COLOR.md` gives 28.2. Proper time is the hollow or
dashed variant of the time hue. $\gamma$ and $\kv/\kc$ are untyped and in ink;
the observers A and B and the two twins are told apart by `F.cat`; the light,
the rail car, the ship, the muon and the Earth are ink. The leg $L$ of the
light-clock triangle has no symbol row of its own and is written as a plain $L$
in the text (never `\kL`, angular momentum, nor `\kLrel`, the contracted length).

## Figures

- Figure 28.4 (`Figure_28_02_01.jpg`, the runner at the finish line): dropped. It is the section's splash image; the opening paragraph asks the same question the caption does, in full.
- `sim-flash-lamps` · Figure 28.5 · `relativity-of-simultaneity` · value add: the section's claim is that two frames disagree about one pair of events, and the book prints only B's frame; here a choice sets the same flashes in either frame, so the reader watches the lamps flash together for B and the right lamp flash first for A, while both agree the right flash reaches A first and both flashes reach B together (tier: moving scene, one slider, one choice) · moving: the flashes travel from the lamps to the observers, which is the clock of the idea (linear frame time, the window from the first flash to the last arrival, about 1.5 s per crossing of the half-car, hold 1.2 s) · slider: $\kv/\kc$ (untyped value, coloured `velocity`), 0 to 0.50, default 0.40; choice: B's frame (on the platform) or A's frame (on the rail car), `'B'` and `'A'` · headline: "In B’s frame the two lamps flash at the same time, and the right flash reaches A first." (reworded per frame) · no graph · 2D, flat (rule 28.1: every event lies on one line). Labels: A, B, the two lamps and $\kv$, five in all; the order in which each observer receives the flashes is written above that observer as it happens. The car is drawn to its own length in A's frame and, as the events require, a little shorter in B's; the caption names that as an effect the next section takes up.
- `sim-light-clock` · Figure 28.6 · `time-dilation`, `proper-time`, `time-dilation-equation` · value add: the astronaut's straight path and the Earth-bound observer's slanted one are run on one clock, so the reader sees the slanted path take longer and the two timers part by $\gamma$ as $\kv$ is dragged toward $\kc$; part (c)'s triangle is traced by the light itself, with $\kD$, $\ks$ and $L$ marked as they complete (tier: moving scene, one slider) · moving: one round trip of the light in each frame, light drawn at the same speed $\kc$ in both panels at every setting, so the ship's panel finishes after $\kdto$ and the Earth's after $\gamma\kdto$ (linear, 1.4 s per $\kdto$, hold 1.2 s) · slider: $\kv/\kc$ (coloured `velocity`), 0 to 0.95, default 0.60, special at 0.950 (Example 28.1) · headline: "At v = 0.60c the Earth-bound observer times the round trip at 1.25 times the astronaut’s proper time." · no graph; (a) left, (b) right, each with its dial (proper time dashed) · 2D, flat (rule 28.1: the light's triangle is planar and the book draws it side-on).
- `sim-muon-gamma` · Figure 28.7 · `relativistic-factor`, `calculate-time-dilation` · value add: the book works $\gamma$ once, at $0.950\kc$; here the $\gamma$ curve is drawn over every speed, flat near 1 at everyday speeds and rising without limit at the dashed wall at $\kc$, and the muon's two lifetimes stand beside it as bars, so the example is one point on a curve the reader can run along (tier: still graph beside a scene, two sliders) · still: $\gamma$ and the two lifetimes are states of a speed, with no clock in them · sliders: $\kv/\kc$ (coloured `velocity`), 0 to 0.995, default 0.950, special at 0.950; $\kdto$ (`time`), 0.50 to 3.00 μs, default 1.52 μs · headline: "At v = 0.950c, γ = 3.20, so a muon that lives 1.52 μs by its own clock lives 4.87 μs by the Earth’s." · graph beside the scene (the scene is vertical: the muon above the Earth) · 2D, flat. Fixed ranges: $\kv/\kc$ 0 to 1, $\gamma$ 0 to 10 (the slider's 0.995 gives 10.0), bars 0 to 20 μs with `pinned`-style chevrons past the end.
- `sim-twins` · Figure 28.8 · `twin-paradox` · value add: the paradox is two reckonings of one trip that cannot both hold; a choice sets the Earth-bound twin's reckoning beside the one the astronaut would make if her frame were inertial, the slider carries $\gamma$ to the book's 30.0 and beyond, and the four accelerations that break the symmetry are marked on the trip (tier: still scene, two sliders, one choice) · still: the figure compares ages at the return, a state with no clock in it · sliders: $\gamma$ (untyped), 1.0 to 40.0, default 30.0, special at 30.0; the trip time in her frame $\kdto$ (`time`), 1.00 to 4.00 y, default 2.00 y; choice: the Earth-bound twin's frame or the astronaut's frame, `'earth'` and `'ship'` · headline: "By the Earth-bound twin’s clock the trip takes 60.0 years; the astronaut ages 2.00." · no graph; the two twins with their ages and bars of years aged on one scale, 0 to 80 years, chevron past it · 2D, flat.

## Extra simulations considered

- The GPS correction, the satellite clock falling behind the ground clock by microseconds a day. Left: the section states no numbers for it, and the figure would repeat `sim-muon-gamma` at a speed where $\gamma - 1$ is too small to draw.
- Hafele and Keating's clocks flown round the Earth. Left: the result mixes special and general relativity, which the book does not separate.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Check Your Understanding | 1 | 1 | — |
| Conceptual question | 3 | 3 | — |
| Problem | 11 | 6 | 5 |

- `cyu1` (`fs-id2680242`): inline at the end of `twin-paradox`, where the book prints it; keyed, two numerical parts.
- `cq1` to `cq3` (`fs-id3159158`, `fs-id2725128`, `fs-id2790874`): unkeyed, AI-marked suggested approaches.
- Keyed problems: `fs-id1745109`, `fs-id1780163`, `fs-id1352226`, `fs-id2944491`, `fs-id1310375`, `fs-id2723163` (Unreasonable Results; part (a) graded, (b) and (c) in the solution).
- Left out, unkeyed: `fs-id1541351` ($\gamma$ at 0.100c and 0.900c), `fs-id3167345` (the kaon at 0.980c), `fs-id2784785` (the neutron living 2065 s), `fs-id1326175` ($\gamma = 1.03$), `fs-id1349718` ($\gamma = 2.00$ and 10.0).
- No exercise moves into or out of this section.

## Tables

The module prints none.

## Wanted at chapter level

- `eq-proper-time-light-clock` → 28.2-time-dilation
- `eq-earth-time-light-clock` → 28.2-time-dilation
- `eq-time-dilation` → 28.2-time-dilation
- `eq-gamma` → 28.2-time-dilation
- variables `v`, `γ_rel`, `Δt_0`, `Δt`, `D`, `s` → 28.2-time-dilation
- Errata for `exploration.md`, carried as printed and named in `notes`: the second sentence of the flash-lamp paragraph ("B will measure the light from the right bulb and arrive at observer A before…") is garbled in the book; "*Simultaneity is not absolute.*." carries a double stop; "In the case of the astronaut observe the reflecting light" is the book's.
- No concept, edge or symbol row needs changing.

Applied by the chapter pass: The chapter pass set every anchor listed above, gathered the errata in `exploration.md` and the chapter log, and gave `fs-id1310375` (b) a tolerance of 0.000005, so 0.99995c is checked to its printed digits and $\kc$ itself is marked wrong.

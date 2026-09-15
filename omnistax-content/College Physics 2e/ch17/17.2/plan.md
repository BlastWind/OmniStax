# Plan: 17.2 Speed of Sound, Frequency, and Wavelength (m42256)

Source: `source.md` (converted from CNXML). Status: built 2026-09-14 without a
review stop, per `ch17/config.md`; the plan is left for review after.

The section that ties the speed of sound to its frequency and wavelength,
tabulates the speed in gases, liquids and solids, gives the speed in air
against temperature, and says that the speed is nearly independent of
frequency. One photograph (17.7), three drawings (17.8, 17.9, 17.10), one
table (17.1), one worked example (17.1), one Take-Home Investigation, two
Check Your Understanding boxes, two AP items, two conceptual questions and
eleven problems, six of them keyed. No PhET note.

## Sub-concepts (page headers)

The book prints no header of its own; the run is divided by idea:

1. `pitch` **Pitch and the wavelength of a sound** (the opening paragraph:
   the fireworks, pitch defined, the piccolo and the tuba). The glossary term
   `pitch` is marked here.
2. `wave-relation` **The speed of sound, its frequency and its wavelength**
   ($v_\text{w} = f\lambda$, the definition of the wavelength, Figure 17.8).
   $v_\text{w}$, $f$ and $\lambda$ anchor here.
3. `media` **The speed of sound in different media** (the rigidity and
   density paragraph, Table 17.1, the earthquake paragraph).
4. `temperature` **The speed of sound and temperature** (the formula in air,
   the rms speed it rests on, the 4% remark, the bat's echo and Figure 17.9).
   $T$, $v_\text{rms}$, $k$ and $m$ anchor here; the echo idea is introduced
   by the figure's caption and this passage, so `echo-ranging` is introduced
   here too.
5. `frequency` **The speed of sound is nearly independent of frequency**
   (the marching band, $v_\text{w} = f\lambda$ again, Figure 17.10, then
   Example 17.1 as `ex-wavelengths`).
6. `crossing` **Crossing from one medium to another** (the paragraph after
   the example, the Take-Home Investigation as a note).

Cross references are plain text. Every `º` of the source is `°C` outside
math and `^\circ\text{C}` inside; the book's $\text{331}\;\text{m/s}$ is set
as $331\ \text{m/s}$ and its bare ${v}_{w}$ as $\kvw$.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| pitch | idea | pitch | the opener, CYU 2 |
| speed-of-sound-frequency-wavelength | result, eq-speed-frequency-wavelength | wave-relation | Figure 17.8, Example 17.1, problems 1 and 3, AP 2 |
| speed-of-sound-in-media | idea | media | Table 17.1, the earthquakes, AP 1, problem 7, problem 9 |
| speed-of-sound-temperature | result, eq-speed-of-sound-air | temperature | Example 17.1, problems 5, 7, 11, AP 1 |
| speed-of-sound-independent-of-frequency | idea | frequency | Figure 17.10, AP 1 (its third statement), AP 2 |
| frequency-fixed-across-media | idea | crossing | CQ 2, problem 7 |
| echo-ranging | skill | temperature | Figure 17.9, CYU 1, problems 9 and 11 |

Used: `frequency` (pitch, wave-relation); `period-frequency` (wave-relation);
`bulk-deformation`, `shear-deformation`, `density` (media); `rms-speed`,
`kinetic-theory`, `boltzmann-constant`, `temperature-scales`, `elapsed-time`,
`average-speed` (temperature); `speed-of-sound-frequency-wavelength`
(frequency, ex-wavelengths, crossing); `speed-of-sound-temperature`
(ex-wavelengths); `speed-of-sound-in-media` (crossing).

## Figures

id · replaces · concepts · value add · motion · sliders · headline · graph · 3D

1. `sim-tuning-fork` · **Figure 17.8** (the tuning fork and its wavefronts)
   · speed-of-sound-frequency-wavelength, speed-of-sound-temperature, pitch ·
   variation by slider, intuition (a higher pitch packs the wavefronts
   closer; warmer air spreads them a little) · **still**, as the config
   says: the figure is the pattern, and its two sliders answer it · $f$
   (100 to 1000 Hz, default 440, frequency, detents at 256 and 440), $T$
   (−20 to 50 °C, default 20.0, temperature, detents at 0, 20 and 30) ·
   "At 20.0 °C sound travels at 343 m/s, so a 440 Hz tone has a wavelength
   of 0.780 m." · below: $v_\text{w}$ against $T$ from the formula, the
   current point filled, axes fixed at −20 to 50 °C and 300 to 380 m/s
   (the slider's own range) · 2D. The scene: a fork in ink at the centre,
   compressions as solid ink arcs at radii $n\lambda$ to 4.0 m on either
   side and rarefactions as dashed arcs between, a 1 m scale bar, $f$ on the
   fork in the frequency hue, $v_\text{w}$ arrows at both ends in the
   velocity hue, and $\lambda$ bracketed between two compressions in the
   position hue. Readout: $\kvw = (331\ \text{m/s})\sqrt{\kTemp/273\ \text{K}}$
   and $\klam = \kvw/\kf$ with the live numbers; small line on the 4%
   between 0 °C and 20 °C. Example 17.1's 20 Hz and 20 000 Hz lie outside a
   drawable range and are left to the example's own text, though its 30.0 °C
   detent gives its 348.7 m/s. Draws frequency, velocity, position,
   temperature.
2. `sim-bat` · **Figure 17.9** (the bat and its echo) · echo-ranging,
   speed-of-sound-temperature · flow by animation (the pulse goes out and the
   echo comes back, and the time it takes is the measurement), variation by
   slider · **moves**: a wavefront leaves the bat's mouth as an expanding arc,
   reaches the insect $d$ away, and a second arc returns from the insect to
   the bat while a clock counts the milliseconds; one cycle is the round trip
   $2d/v_\text{w}$ in model time, played over four real seconds and held ·
   $d$ (0.5 to 10.0 m, default 3.00 m, position, detent at 3.00), $T$ (−20 to
   50 °C, default 20.0, temperature, detents at 5, 20 and 35, the problem's
   two temperatures) · "The echo from an insect 3.00 m away returns to the
   bat after 17.5 ms at 20.0 °C." · below: echo time against distance, the
   line $t = 2d/v_\text{w}$ through the origin and the current point, axes
   fixed at 0 to 10 m and 0 to 70 ms (10 m at −20 °C) · 2D. The scene is a
   horizontal strip of air with a ruler in metres, the bat drawn at the left
   and the insect at $d$; the outgoing and returning fronts are ink arcs told
   apart by the dashed return, the clock is in the time hue, the distance
   bracket in the position hue. Readout: $\kvw$ from the formula and
   $\kt = 2\kd/\kvw$; small line that a 30 °C rise changes the time by 5%,
   which is problem 11. Draws position, velocity, temperature, time.
3. `sim-woofer` · **Figure 17.10** (the woofer and the tweeter) ·
   speed-of-sound-independent-of-frequency, pitch · flow by animation (both
   sets of wavefronts cross the room at one speed, which no still can show),
   variation by slider · **moves**, endlessly: two sets of arcs leave the
   two drivers of one cabinet, the tweeter's above and the woofer's below,
   and travel right at the same $v_\text{w}$ while their spacings differ ·
   $f_1$ (50 to 500 Hz, default 100, frequency, the woofer), $f_2$ (500 to
   4000 Hz, default 2000, frequency, the tweeter) · "Both sets of wavefronts
   cross the room at 343 m/s: the 100 Hz sound is 3.43 m from crest to crest
   and the 2000 Hz sound 0.172 m." · none, the scene is the idea · 2D. Air
   at 20 °C, 343 m/s, stated in the caption; the two speeds are marked by
   a filled marker riding the front that left each driver at the same
   instant, so the reader sees them keep pace. Readout: $\kvw = \kfone\klam_1
   = \kftwo\klam_2$ with the numbers, the subscripts on the position
   hue's macro for $\lambda$.
   Draws frequency, velocity, position.
4. `sim-boundary` · **Sim** · frequency-fixed-across-media,
   speed-of-sound-in-media, speed-of-sound-frequency-wavelength · flow by
   animation, variation by slider and choice, intuition (the same count of
   fronts crosses the boundary each second, and only their spacing changes)
   · **moves**, endlessly: a plane wave of frequency $f$ runs from air at
   20 °C through a boundary into the medium you choose; the media are ink
   dots displaced along the wave so that a compression is a dense column,
   with an ink line on each compression, and the fronts on the right move
   faster and sit farther apart in proportion to the speed · $f$ (50 to 250
   Hz, default 100, frequency), the second medium (carbon dioxide, helium,
   fresh water, sea water, steel, from Table 17.1, a dropdown, default sea
   water, ink) · "At 100 Hz the wave passes from air into sea water: the
   frequency stays 100 Hz, the speed rises from 343 to 1540 m/s, and the
   wavelength stretches from 3.43 m to 15.4 m." · none · 2D. The strip is
   32 m long, 16 m of each medium; a wavelength longer than the strip is
   said in its label rather than bracketed. Readout: $\kf$ the same on both
   sides, $\klam_1 = \kvw/\kf$ and $\klam_2$, and $\lambda_2/\lambda_1 =
   v_2/v_1$, which for sea water is 4.49, the inverse of problem 7's 0.223.
   Draws frequency, velocity, position.

Photographs: Figure 17.7, the fireworks (credit: Dominic Alves, Flickr),
**dropped** as the splash image at the head of the section; the text
describes the display and the first Check Your Understanding asks about
one, but neither points at the photograph. Named in `notes`.

Extra simulations (rule 15) considered and left: the P-wave and S-wave
leaving an epicentre with a seismograph at a chosen distance, which would
show the lag growing with distance and is an aside of the media passage; the
flash and bang of a firework at a chosen distance, which `sim-bat` already
shows as a time proportional to a distance. None built.

## Exercises

- `cyu1` (fs-id1437960), Understand, inline after `temperature`, open, the
  book's answer; it turns on a lag growing with distance and is tagged
  echo-ranging, with speed-of-sound-in-media at weight 1 for sound against
  light.
- `cyu2` (fs-id1526208), Understand, inline after `pitch`, open, the book's
  answer; tagged pitch and speed-of-sound-frequency-wavelength at weight 2.
- `ap1` (fs-id2584112), Analyze, keyed (b), a graded choice with the book's
  three statements in the prompt and five options; tagged
  speed-of-sound-in-media, speed-of-sound-temperature and
  speed-of-sound-independent-of-frequency.
- `ap2` (fs-id1207107), Evaluate, unkeyed, open with an AI-marked approach;
  tagged speed-of-sound-independent-of-frequency and
  speed-of-sound-frequency-wavelength.
- `cq1` (fs-id1375143), Understand, open, AI-marked approach; tagged
  speed-of-sound-temperature.
- `cq2` (fs-id3008692), Understand, open, AI-marked approach; tagged
  frequency-fixed-across-media.
- Problems kept, keyed: `p1` the soprano (0.288 m), `p3` the 1500 Hz tone
  (332 m/s), `p5` the speed at 20.0 °C (open, the book's worked line as its
  solution), `p7` the dolphin (0.223), `p9` the sonar's resolution (7.70 m
  for (a), the book's discussion of (b) in the solution), `p11` the bat (a
  multi: 18.0 ms and 17.1 ms for (a), 5.00% for (b), the book's (c) in the
  solution).
- Left out, unkeyed: fs-id2000830 (the 0.10 m wavelength), fs-id2443672
  (the 5.96 cm wavelength at 100 kHz), fs-id2666191 (the Sahara),
  fs-id1560729 (the submarine's 1.20 s echo), fs-id1381531 (the physicist
  at the fireworks).
- No generated questions; every node has a book exercise.

## Colour

The page binds frequency, velocity, position, temperature and time:
`sim-tuning-fork` and `sim-woofer` carry $f$ on sliders and draw $v_\text{w}$
arrows and $\lambda$ brackets; `sim-tuning-fork` and `sim-bat` carry $T$ on
a slider and on a graph axis; `sim-bat` carries $d$ on a slider and states
the echo time in the time hue. The medium is a name in ink, the fork, the
bat, the insect, the cabinet and every wavefront are ink, and the dots of the
media are ink whose packing is the wave. No categorical or element colour
and no hex.

## Wanted at chapter level

- variables `v_w` → 17.2-wave-relation
- variables `f` → 17.2-wave-relation
- variables `λ` → 17.2-wave-relation
- variables `T_temp` → 17.2-temperature
- variables `v_rms` → 17.2-temperature
- variables `k_boltz` → 17.2-temperature
- variables `m` → 17.2-temperature
- equations `eq-speed-frequency-wavelength` → 17.2-wave-relation
- equations `eq-speed-of-sound-air` → 17.2-temperature
- equations `eq-rms-speed` → 17.2-temperature
- equations `eq-wavelength-from-speed` → 17.2-ex-wavelengths

## Built as planned, with these corrections (2026-09-14)

The four figures are built as the lines above describe, with the numbers
settled against the drawing. `sim-tuning-fork` draws its sectors at a
half-angle of 0.62 rad and clips them to a band 100 to 430 units deep, so
the arcs never run under the metre bar or the graph; the wavelength is
bracketed from one compression to the next, or from the fork to the first
compression at the lowest frequencies, where only one fits on each side.
`sim-bat` plays its round trip over four real seconds and holds, so a long
distance is watched rather than flashed; its bat is a sprite of two
membranes with finger struts, a body and an eared head. `sim-woofer` names
each driver in ink under it and writes its frequency beneath the name in
the frequency hue, since a single line ran across the cabinet's edge.
`sim-boundary` displaces its dots by 55% of a wavelength's own measure,
capped at 20 units, so the compressions read as crowding rather than as
solid columns, and each compression carries a thin ink line; the label
says when a wavelength is longer than the 16 m the strip shows, which
sea water and steel both are. Every figure's labels are on: none exceeds
six and none sits on a moving body, the hover names carrying the rest.


## Applied by the chapter pass (2026-09-14)

Every line above is applied: the seven variable rows and the four equation
rows carry the anchors this plan names. The page binds time as well as
frequency, velocity, position and temperature, because the bat's echo is
clocked and its graph carries a time axis; `COLOR.md` records it.

## Figure pass (2026-09-15, Claude Fable 5.1)

`sim-tuning-fork`: the arcs are clipped out of a window round the fork, so
no compression crosses the prongs at 1000 Hz, and $f$ is written above the
prongs on a panel instead of on the stem. `sim-bat`: the insect is now a
moth about 60 units across, forewings, hindwings, body and antennae, drawn
here since the library has no insect, and its label and the bat's sit under
the bodies. `sim-woofer`: the clock and the air's temperature move to the
bottom right, where the tweeter's wavelength bracket no longer meets them.
`sim-boundary`: the dots' displacement is $Ak = 0.62$ on both sides with no
cap, so a compression is three times as dense as a rarefaction whatever the
wavelength, and the dots are larger and darker; the compressions were
invisible in sea water before.

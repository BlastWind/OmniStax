# Config: College Physics 2e, Chapter 17

Proposed by the prep agent after exploration (2026-09-14). Status: applied as
proposed, on Chen's standing instruction to finish the book in waves without
check-ins; the per-section stops of rule 2 and the plan reviews of rule 5 are
replaced by a plan file per section, written before the section is built and
left for review after, as Chapters 1 to 16 did it. Each line is a setting and
its value. Lines that repeat the Chapter 1 to 16 configs are unchanged unless
marked.

| Setting | Value |
|---|---|
| Chapter | 17 Physics of Hearing, modules m42254 (introduction), m42255, m42256, m42257, m42712, m42296, m42297, m42298 |
| Front matter | the chapter introduction (m42254) is a page of its own in `ch17/intro/`, listed before 17.1 (rule 21), built in the prep pass |
| Unit of work | one section = one page; sections never folded (rule 11); 17.1, which has five figures, two defined terms and no exercise or equation at all, stays a page of its own |
| Order | 17.1 to 17.7 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all seven sections in one wave; review after |
| Prose | verbatim, the book's own slips included (the misplaced square on 17.3's intensity formula in Example 17.2's strategy and in the paragraph before Table 17.3, the unclosed parenthesis in 17.4's bow-wake paragraph, the doubled sentence in Example 17.8's Solution for (b), $F_\text{B}$ against $f_\text{B}$ in 17.7; each named in the section's `notes` and in `exploration.md` under Errata); objectives, summary, glossary pulled into the tables and views; the book's boxed notes kept verbatim (17.2's and 17.3's Take-Home Investigations, 17.4's The Doppler Effect, 17.5's Interference and Real-World Applications, 17.6's The Hearing Mechanism with Figure 17.37 inside it, 17.7's three notes) |
| Tables | five, each rebuilt as a `div.book-table` whose eyebrow is the book's number: Table 17.1 Speed of Sound in Various Media in 17.2 (three group rows spanning both columns), Table 17.2 Sound Intensity Levels and Intensities and Table 17.3 Ratios of Intensities and Corresponding Differences in Sound Intensity Levels in 17.3 (17.2 carries the book's footnote on 85 dB in its cell), Table 17.4 Sound Perceptions in 17.6, Table 17.5 The Ultrasound Properties of Various Media in 17.7. The four unnumbered tables inside 17.5's AP items travel in the exercise prompts |
| Sub-concept headers | 17.4 (Sonic Booms to Bow Wakes) and 17.7 (Ultrasound in Medical Therapy, Ultrasound in Medical Diagnostics) print headers of their own and those are kept as the book writes them; the other sections print none, so their headers are the agent's |
| Figures | a sim per idea or result the section introduces; every diagram replaced by a sim with the book's image kept as its original; a photograph kept where the text points at it or it shows the thing the passage is about, dropped where it is decoration; each listed in the plan (rule 14) |
| Photographs kept | the fallen tree that opens the chapter (Figure 17.1, kept by rule 21); the duck's bow wake (17.18) and the Cerenkov glow (17.19), which the text points at; 17.7's fetal ultrasound (17.40), tumour probe (17.41), abdominal scan (17.43), 3D fetus (17.44), Doppler image of an artery (17.45) and the probe on a hand inside Example 17.8 (17.46), which the passages say "See" and "shows". Dropped as splash images unless the plan says why: the shattered glass (17.2), the fireworks (17.7, which the first Check Your Understanding does point at), the Delhi traffic (17.11), the headphones (17.20), the band (17.33). The guitar and violin (17.31) and the marimba (17.32) are pointed at and may be kept |
| Folds | judged per section. The cases: 17.1's vibrating string drawn three times (17.3 + 17.4 + 17.5); 17.4's stationary source, moving source and moving observers (17.13 + 17.14 + 17.15), and the supersonic cone (17.16) if the plan makes it one state of the same scene; 17.5's closed tube in four moments (17.22 + 17.23 + 17.24 + 17.25), which may take 17.26 too, and the two harmonic ladders (17.28 + 17.30) as one sim with a choice of tube. 17.43 prints (a) and (b) under one number and is one row with two originals, not a fold |
| Sim sliders | whatever is interesting and variable in the idea: the frequency of a source and the temperature of the air, the pressure amplitude of a wave, the sound intensity level over its twelve decades, the speed of a source and of an observer, the length of a tube, the phase of a second sound against a first, the two lever arms and areas of the middle ear, the speed of blood in an artery. A choice, never a slider, for the medium (air, water, steel, the tissues of Table 17.5), for a tube closed at one end against open at both, for the harmonic number, and for the observer ahead of or behind the source (rule 26.1) |
| Motion | decided per figure (rule 14). Sound has a clock in it and several of the chapter's ideas are a sequence in time: the compressions leaving a vibrating string (17.3 + 17.4 + 17.5), the wavefronts of the Doppler scene spreading from their points of emission (17.13 to 17.16), an echo returning to a bat (17.9), a pulse travelling down a closed tube and reflecting (17.22 to 17.25), and a standing wave oscillating in its envelope (17.27, 17.28, 17.30) may move, and the plan line must say why. Still are the tuning fork's wavefronts as a pattern (17.8), the pressure graphs of 17.12, the decibel ladder, the cone of 17.16 if drawn as a still, the harmonic ladders drawn as envelopes, the phon curves, the middle ear's lever, and 17.7's boundary. A moving figure registers a cycle and gets the transport; a still one redraws on input and gets none; air drawn jittering merely to look like air is the dummy loop rule 14 forbids (new) |
| 3D | none; every scene of the chapter is a wave drawn along one line or across a plane, a graph or a schematic, and each is clearest flat (rule 28.1). The ear's anatomy (17.37, 17.39) is a labelled drawing and stays a faithful copy or a kept image; the cone of 17.16 is "actually a cone in three dimensions" but the book draws its section and so does the page |
| Figures that serve exercises | the book's own rules give two ways of carrying an image an exercise refers to, and this chapter uses the second throughout: 17.4's graph of perceived frequency against time and 17.5's eight AP images (the two pulses and their four candidate overlaps, the ripple tank, the string between posts, the two tubes before a speaker, the oscillator and pulley) travel on the `figure` field of the exercise cards that refer to them, as Chapters 4, 9.3, 9.6, 12 and 15 do; none is redrawn as a `figure` row of the text |
| Colour coding | one new type, `intensity` (W/m²), because 17.3's figures draw it as a bar and state it in their readouts, 17.6's problems and 17.7's boundary figure turn on it, and Chapters 24 and 27 will draw it for light. The sound intensity level $\beta$ in decibels is a logarithm of a ratio and stays untyped and in ink, as do the acoustic impedance $Z$ (a property of the medium, tabulated like a conductivity), the intensity reflection coefficient $a$, the harmonic number $n$, the length $L$ of a tube, the area $A$, the mass $m$, the cone angle $\theta$, loudness in phons and the Boltzmann constant. The wavelength $\lambda$ is a `position`; the speed of sound, the source and observer speeds and the blood speed are `velocity`; the pressure amplitude $\Delta p$ is a `pressure`; every frequency is a `frequency`; the temperature in the speed-of-sound formula is Chapter 13's `temperature` and the density Chapter 11's `density`, both used by name and never restaged. Symbol rows added are listed under "Symbols" below |
| Inline exercises | the ten Check Your Understanding boxes (two each in 17.2, 17.3, 17.4 and 17.5, one each in 17.6 and 17.7), after the passage they test; 17.1 has none |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests; nothing in this chapter is placed early by the book and nothing moves. 17.5's AP items on pulses and standing waves on strings and its four beat-frequency problems test 16.10's matter, which is not built and may not be pointed at, so they stay with 17.5 and are tagged to its interference and resonance concepts, the section's `exercise_notes` saying so; 17.7's three decibel problems on ultrasound stay with 17.7 and are tagged to 17.3's `sound-intensity-level` beside 17.7's own concept |
| AP test prep | included; the chapter's 22 AP items sit in 17.2, 17.3, 17.4 and 17.5 (sixteen in 17.5). An unkeyed AP item is kept as an open item with its options as the book prints them and an AI-marked suggested approach, never as a graded choice. 17.5's ruler item (`eip-781`) carries no `type` in the CNXML and sits under the AP header, so it is an `ap-test-prep` item, keyed with a sentence |
| PhET interactive links | dropped (Wave Interference in 17.1) and named in `notes` |
| Cross-references | plain text throughout, as every other page of the book writes them: a reference to another section, another chapter or a figure on another page (17.5's problems cite Figures 17.35 and 17.37 of 17.6; 17.1 cites Chapter 15's second law) is the book's words with no link, and the app links "Figure 17.14" and an "Example 17.4" that sits on the same page by itself |
| Answers to book problems | book answer key only; never generated; the 40 unkeyed problems are left out and named in the notes |
| Suggested approaches for open questions | generated, marked AI: all 15 conceptual questions of the chapter and the 10 unkeyed AP items |
| Generated questions | none; a node with no book exercise of its own is noted in the plan, no question generated; 17.1's three nodes have no exercise at all, since the section prints none |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 43 nodes written into `book.json` before the sections were built (3 for 17.1, 7 for 17.2, 7 for 17.3, 6 for 17.4, 8 for 17.5, 7 for 17.6, 5 for 17.7) with edges into Chapters 1, 2, 3, 5, 7, 9, 11, 13, 15 and the built sections of 16, and within the chapter; no edge into 16.9 to 16.11, which are not built (`exploration.md` lists the edges that wait) |
| Formulas | `ch17/chapter.json`: the stated and named results important (the wave relation for sound, the speed of sound against temperature, the rms speed it rests on, the two forms of intensity, the sound intensity level and the difference of two levels, the two Doppler shifts and their product, the closed-tube and open-tube harmonics, the acoustic impedance, the intensity reflection coefficient, the beat frequency of a Doppler echo) and the worked substitution steps not; no anchor on any row, since the validator refuses an anchor into an unbuilt section, and the chapter pass writes them from the section plans |
| Book manifest | `ch17` after `ch16` in `book.json` chapters, added by `ost merge college-physics-2e 17` |

## Symbols

Never change an existing symbol row (rule of the job). Rows the chapter
would otherwise have wanted are already taken and are **not** reused for this
chapter's meanings:

- `I` is the **moment of inertia** with `\kI` (Chapter 10). Intensity is
  `I_intens` with `\kIntens`; its threshold and its two compared values are
  `I_0`, `I_1` and `I_2`.
- `β` is Chapter 13's untyped **coefficient of volume expansion**. The sound
  intensity level is `β_dB`, LaTeX `\beta`, untyped and without a macro; a
  page writes $\beta_1$ and $\beta_2$ in plain LaTeX.
- `Δp` is Chapter 8's **impulse** with `\kdp`. The pressure amplitude is
  `Δp_press` (LaTeX `\Delta p`, `\kdpamp`, type `pressure`).
- `f_s` is Chapter 5's **static friction** with `\kfs`. The source frequency
  is `f_src` (LaTeX `f_{\text{s}}`, `\kfsrc`).
- `a` is **acceleration** with `\ka`. The intensity reflection coefficient is
  `a_refl`, LaTeX `a`, untyped.
- `L` is **angular momentum** with `\kL` (Chapter 10). The length of a tube
  is the book's untyped `L_len`, as it stands.
- `k` is a **force constant** with `\kk` (Chapter 16); Boltzmann's constant is
  Chapter 13's untyped `k_boltz`. `P` is **power** with `\kP` and is the
  power of $I = P/A$; pressure is Chapter 11's `P_press`. `ρ` is untyped and
  `ρ_dens` (`\krho`) is the density this chapter writes.
- `v̄` holds the macro `\kvb`, so the blood velocity of 17.7 is `v_blood`
  with `\kvblood`.
- `v_w` is Chapter 3's **wind velocity** with `\kvw` and the same LaTeX
  $v_\text{w}$ the book gives the speed of sound; both are velocities, so
  the row is used as it stands and this chapter's variables table gives it
  the meaning the speed of sound (new).

Rows this chapter stages, with the sections that write them:

| sym | LaTeX | type | macro | where |
|---|---|---|---|---|
| `λ` | `\lambda` | position | `\klam` | 17.2, 17.4, 17.5, 17.7 |
| `λ_prime` | `\lambda'` | position | `\klamprime` | 17.5 |
| `v_s` | `v_{\text{s}}` | velocity | `\kvs` | 17.4, 17.7 |
| `v_obs` | `v_{\text{obs}}` | velocity | `\kvobs` | 17.4, 17.7 |
| `v_blood` | `v_{\text{b}}` | velocity | `\kvblood` | 17.7 |
| `f_obs` | `f_{\text{obs}}` | frequency | `\kfobs` | 17.4, 17.7 |
| `f_src` | `f_{\text{s}}` | frequency | `\kfsrc` | 17.4, 17.7 |
| `f_prime` | `f'` | frequency | `\kfprime` | 17.5 |
| `f_n` | `f_n` | frequency | `\kfn` | 17.5 |
| `f_1` | `f_1` | frequency | `\kfone` | 17.5, 17.7 |
| `f_2` | `f_2` | frequency | `\kftwo` | 17.5, 17.7 |
| `f_3` | `f_3` | frequency | `\kfthree` | 17.5 |
| `f_B` | `f_{\text{B}}` | frequency | `\kfB` | 17.7 |
| `I_intens` | `I` | intensity | `\kIntens` | 17.3, 17.6, 17.7 |
| `I_0` | `I_0` | intensity | `\kIo` | 17.3, 17.6 |
| `I_1` | `I_1` | intensity | `\kIone` | 17.3 |
| `I_2` | `I_2` | intensity | `\kItwo` | 17.3 |
| `Δp_press` | `\Delta p` | pressure | `\kdpamp` | 17.3 |
| `β_dB` | `\beta` | — | — | 17.3, 17.6, 17.7 |
| `Z` | `Z` | — | — | 17.7 |
| `Z_1` | `Z_1` | — | — | 17.7 |
| `Z_2` | `Z_2` | — | — | 17.7 |
| `a_refl` | `a` | — | — | 17.7 |

Twenty-three rows in all, and one type, `intensity`.

Rows used as they stand: `f` (`\kf`), `T` (`\kT`), `v_w` (`\kvw`), `v`
(`\kv`), `v_rms` (`\kvrms`), `c` (`\kc`), `P` (`\kP`), `P_press` (`\kPr`),
`ρ_dens` (`\krho`), `T_temp` (`\kTemp`), `F` (`\kF`), `d` (`\kd`), `t`
(`\kt`), `X` (`\kX`), `A`, `m`, `n`, `θ`, `L_len`, `k_boltz`.

## What the build changed (chapter pass, 2026-09-14)

The table above stood almost whole. Four lines needed a word after the
seven sections were built, and each is corrected in it.

- **A photograph kept that the table had listed as a drop.** The glass
  shattered by sound, Figure 17.2, stands at the head of 17.1 and the text
  never points at it, which is the table's own mark of a splash image. It is
  kept because its caption is the section's one demonstration of the claim
  the second paragraph makes, that sound is a physical disturbance whose
  effects are real whether or not anyone hears it, and because the `sound`
  concept row already names it as evidence. 17.1's `plan.md` argues it. The
  other four splash images named in the table are dropped as the table says,
  and each section's `notes` says so.
- **Types bound.** Four pages bound a type the chapter's `COLOR.md` had not
  expected, in every case because a figure draws it: frequency on 17.1,
  time on 17.2 and 17.7, temperature on 17.5, and position on 17.7. One
  type the expectation named is not bound: 17.3 writes the power of
  $I = P/A$ in ink and colours only the intensity, the pressure amplitude,
  the density and the speed of sound. `COLOR.md` now carries the bindings
  as built.
- **Prerequisite edges into Chapter 16's wave sections.** The table says no
  edge goes into 16.9 to 16.11 because those pages were not built. They
  were built in the same wave and merged before this pass ran, so the
  eleven edges `exploration.md` listed are placed: two from 17.2, one from
  17.3 and eight from 17.5, into 16.8's resonance, 16.9's wavelength and
  wave velocity, 16.10's superposition, interference, standing waves,
  nodes and antinodes on a string, string harmonics and beats, and 16.11's
  intensity. For the same reason 17.5's AP items on pulses and standing
  waves and its beat problems, which the table holds in 17.5 tagged to the
  section's own concepts, are tagged to 16.9 to 16.11's concepts beside
  them, as the section's `exercise_notes` says.
- **Symbols.** Twenty-three rows and one type, as the table says, and no
  existing row was changed. The chapter's variables table gained six rows
  that need no new symbol: 17.6's $P_1$, $P_2$, $F_1$, $F_2$, $A_1$ and
  $A_2$, which the middle ear's lever writes with symbols the book already
  carries, and which the section's figure draws and its readout colours.
  The table now holds 64 variable rows, every one of them anchored, as is
  every one of the chapter's twenty equation rows.

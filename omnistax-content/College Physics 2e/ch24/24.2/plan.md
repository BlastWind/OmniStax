# Plan: 24.2 Production of Electromagnetic Waves

Module m42440. Written before the page was built, and left for review, as
`ch24/config.md` records in place of the stop of root rule 2 and the review of
root rule 5.

## Sub-concepts and where each concept is met

The module prints three narrative headers of its own and opens with an untitled
block. The three are kept word for word, and the opening block is divided in two,
since it carries two separate ideas: that a varying current sends a wave out at
all, and what one cycle of the antenna makes.

| Span | Header | Concepts |
|---|---|---|
| `varying-current` | A varying current sends out a wave | introduces `em-waves-from-accelerating-charges`; uses `maxwells-equations`, `changing-fields-generate-each-other`, `alternating-current`, `electric-current`, `electric-field` |
| `one-cycle` | One cycle of the antenna | introduces `antenna-field-cycle`; uses `electric-field-direction`, `period-frequency`, `wavelength`, `amplitude` |
| `e-and-b-together` | Electric and Magnetic Waves: Moving Together | introduces `magnetic-part-of-the-wave`, `em-wave-is-transverse`, `antenna-resonance`; uses `amperes-law`, `right-hand-rule-2`, `field-of-a-long-straight-wire`, `transverse-wave`, `standing-wave`, `resonance` |
| `receiving` | Receiving Electromagnetic Waves | reinforces `antenna-resonance`, `em-waves-from-accelerating-charges` |
| `field-ratio` | Relating $E$-Field and $B$-Field Strengths | introduces `e-over-b-equals-c`, `find-b-from-e`, `em-wave-in-a-medium`; uses `ohms-law`, `volts-per-meter`, `the-tesla` |

`antenna-resonance` is met for the first time in the last paragraph under the
book's own header, where the antenna is called a standing wave driven by the AC
and the phenomenon is named resonant, so that span introduces it and Receiving
Electromagnetic Waves comes back to it.

## Types the page binds

`electric-field`, `magnetic-field`, `velocity`, `position`, `time`, `charge`,
`current`, `frequency` — the union of what the four figures draw, which is what
`ch24/COLOR.md` gives 24.2. The index of refraction $n$, the distance in metres
along a ruler that is the frame rather than a drawn quantity, every count and
every label stay untyped and in ink. No hue is hard-coded anywhere on the page
and no new type is declared.

## Figures

```
sim-antenna-cycle · Figure 24.5 · em-waves-from-accelerating-charges, antenna-field-cycle · intuition and flow by animation and variation by slider: the book freezes the antenna at four instants and asks the reader to supply the motion between them, and nothing in the four panels says what sets the amplitude or what sets the wavelength · moving, the charges run up and down the antenna and the field they made travels off at c, since the idea has a period in it; the model runs two periods so that the wave builds out to two wavelengths as the book's four panels do, then holds · sliders: f (frequency) and E_0 (electric-field) · headline: the phase the antenna stands at, the field beside it and how far the first crest has gone · graph: none, the travelling wave is the scene · 2D, flat (root rule 28.1): the field against distance is a relation between two quantities and is honest drawn flat with a metre ruler under it
```

```
sim-antenna-b · Figure 24.6 · magnetic-part-of-the-wave, em-waves-from-accelerating-charges · intuition and flow by animation and variation by slider: the book's three panels are the same instant seen three ways, and the one thing they cannot show is that the rings round the wire grow, shrink and reverse with the current while the wave that left earlier keeps going · moving, the current in the antenna has a period, and the magnetic wave leaves at c · sliders: f (frequency) and I_0 (current) · headline: which way the current runs, how strong the field is half a metre out and which way the rings turn · graph: none · 2D with the rings and the receding wave on a locked view (root rule 28.2), the viewpoint the book itself prints them from: circles round a wire drawn flat are either a pair of dots and crosses or a lie, and nothing about the arrangement changes with where the reader stands, so there is no orbit
```

```
sim-em-wave-3d · Figure 24.7 · em-wave-is-transverse, e-over-b-equals-c · shape in 3D, flow by animation and variation by slider: the arrangement of the two fields and the line of travel is itself the lesson, and it is what settles the section's three questions about a receiving wire and a receiving loop · moving, the whole pattern travels along the beam at c over one period, then holds · sliders: E_0 (electric-field) and f (frequency); a dropdown for the receiver held in the beam, five states, so a discrete state is a choice and not a slider (root rule 26.1) · headline: where the wave stands, what the two amplitudes are and whether the receiver is being driven · graph below the scene: the two fields against distance along the beam at this instant, on their own two scales, which is where in phase and E/B = c can be read off · 3D (root rule 28.3), argued below
```

```
sim-field-ratio · Sim · e-over-b-equals-c, find-b-from-e, em-wave-in-a-medium · variation by slider and standardisation: the section states the ratio and works one number through it, and the figure lets the reader move the electric field and the medium and see both the answer and how small the magnetic part is beside the Earth's own field · still, a ratio is a state of the wave and has no clock, so no cycle and no transport (root rule 14) · sliders: E (electric-field) and n, untyped · headline: the two field strengths and how the magnetic one stands against the Earth's · graph: none, two arrows to their own fixed scales over a logarithmic strip of field strengths · 2D, flat
```

### Why Figure 24.7 is the chapter's one full 3D scene, and how far the orbit runs

Root rule 28.3 asks for a spatial arrangement that a flat drawing would have to
lie about. This is one. The electric field oscillates in one plane, the magnetic
field in a plane at right angles to it, and the wave travels along the line where
the two planes meet; the book prints the figure in perspective because there is
no other way to draw it. Three of the section's conceptual questions — which of
two orientations of an arriving wave better induces a current in a straight wire,
which better induces one in a loop, and how a radio's wire and a loop antenna
should be aligned — are answered by turning that arrangement against a receiver
and looking, which is what a reader can do here and cannot do on the page. The
lower tiers were tried and fail: flat, the two fields collapse onto one another or
one of them is drawn as dots and crosses; a locked view fixes the very thing the
questions ask the reader to vary.

The orbit is bounded. The antenna stands at the near end of the beam and the wave
leaves it, so the camera is kept in the hemisphere the wave travels into: the yaw
runs from −140° to +14°, which reaches from well past the view straight down the
beam round to the book's own side view and a little beyond, and stops before the
reader can get round behind the source and watch the wave arrive at it. The pitch
runs from −70° to +70°, so the beam is never seen from straight above or straight
below, where the plane of one field or the other would close to a line. Three snap
views are given (root rule 26.2): the book's own three-quarter view, which is the
default; straight down the beam, where the two fields cross as two perpendicular
lines and the perpendicularity is plainest; and from above the beam, which lays
the magnetic plane out flat. Zoom is on the wheel and on two buttons. Auto-rotate
has a button, and it starts off rather than idling, because the yaw is bounded and
an idle spin would sit against the bound. Where a browser has no WebGL the same
canvas draws the book's own oblique view of the wave above the graph and says so.

### Labels (root rule 26.7)

Each figure names its frame — axis titles, slider names, the metre ruler — always.
In the scene of 24.7 five entities carry names: $E$, $B$, the direction of travel,
the antenna and the receiver, which is under the six of root rule 26.7 and none of
them collides at any setting, so the names are on by default and the bodies carry
hover names as well. In 24.5 and 24.6 the individual charge marks are not labelled,
since the kind is labelled once beside the antenna and the sign of each is its own
glyph.

## Photographs and unnumbered images

The module prints no photograph. Three unnumbered images sit inside conceptual
questions — the wave meeting a straight wire, the wave meeting a loop, and the
interference pattern of two antennas — and each is kept on the card of the question
that refers to it, in the exercise's own `figure` field, as `ch24/config.md`
settles for this chapter. None of the three needs a figure row.

## Tables

The module prints none.

## Exercises

| Kind | Count | Notes |
|---|---|---|
| `problem` | 1 of 3 | Only the maximum electric field from a magnetic field of $5.00\times10^{-4}$ T is keyed, at 150 kV/m. The wave in a medium at $0.75c$ and the check that $E/c$ really is in teslas have no key and are left out and named in the notes |
| `conceptual-question` | 10 | None is keyed; each gets an AI-marked suggested approach. Three carry the book's own image on the card |
| `ap-test-prep` | 6 of 8 | Two are keyed in the CNXML and are kept as graded choices: the equation of the wave at the antenna, (d), and Hertz's two loops, (d). Four have their solution commented out in the CNXML rather than printed, so they count as unkeyed and are kept as open items with an AI-marked suggested approach. The item on the period and wavelength of a 3 GHz wave and the item on a wave reaching the end of a medium both need $c = f\lambda$, which 24.3 introduces, and are set with 24.3 with `source_section: "24.2"` |

No Check Your Understanding box is printed anywhere in the module, so nothing is
set inline and the page hosts no inline exercise.

## Extra simulations proposed (root rule 15)

- **The standing wave on the antenna itself**, with the antenna's length against
  the wavelength and the charge piling at the ends. *Left unbuilt.* It would have
  to state the half-wavelength condition to say anything, and that condition and
  its figure belong to 24.3; the standing wave of charge is already drawn along
  the antenna of Figures 24.5 and 24.6, which is as far as this section takes it.
- **Two antennas and their interference pattern**, from the last conceptual
  question. *Left unbuilt.* The book prints the pattern only inside that question,
  and interference of two sources is Chapter 16's, not this section's; the image
  rides on the card.

`antenna-resonance` is therefore the one concept of the section with no figure of
its own, and no question is generated for it: the book sets it one conceptual
question already, on whether an antenna can be any length.

## Wanted at chapter level

- equation `eq-e-over-b` → anchor `24.2-field-ratio`
- equation `eq-b-from-e` → anchor `24.2-field-ratio`
- equation `eq-speed-in-medium` → anchor `24.2-field-ratio`
- equation `eq-e-over-b-medium` → anchor `24.2-field-ratio`
- variable `E_field` (24.2) → anchor `24.2-varying-current`
- variable `c` (24.2) → anchor `24.2-varying-current`
- variable `B_mag` (24.2) → anchor `24.2-e-and-b-together`
- variable `T` (24.2) → anchor `24.2-one-cycle`
- variable `f` (24.2) → anchor `24.2-one-cycle`
- variable `λ` (24.2) → anchor `24.2-one-cycle`
- variable `v` (24.2) → anchor `24.2-field-ratio`
- variable `n` (24.2) → anchor `24.2-field-ratio`
- No symbol row is added and none is changed: $E$, $B$, $c$, $T$, $f$, $\lambda$,
  $v$ and $n$ all have rows already.

### What the chapter pass did (2026-09-15)

Every anchor above is written: the four equations to `24.2-field-ratio`, and the
eight variables to `24.2-varying-current`, `24.2-e-and-b-together`,
`24.2-one-cycle` and `24.2-field-ratio` as the lines name them. No symbol row was
added or changed. Two things the plan did not name were corrected: the `draws`
columns of `sim-antenna-b` and `sim-em-wave-3d` gained `frequency`, which the
frequency slider of each binds, and `ch24/COLOR.md` now gives the section that
type; and the hover names and headline of `sim-antenna-b` are in American
spelling, as the reader-facing words of the book are.

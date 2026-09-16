# Plan: 24.3 The Electromagnetic Spectrum

Written before the page was built, under the standing decision recorded in
`ch24/config.md` that the per-section stop of root rule 2 and the plan review of
root rule 5 are replaced by a plan file left for review. This is the chapter's
long section: it carries Table 24.1 and Figures 24.8 to 24.21, two worked
examples, twelve conceptual questions, twenty-four problems and four AP items,
two of which the book prints in 24.2.

## Sub-concepts, and where each concept node is introduced

The module prints fifteen narrative headers of its own and opens with two
unheaded passages, so the page is seventeen spans: the book's fifteen headers,
kept word for word, and two headers of OmniStax's for the opening (root rule 3
and the chapter's `config.md`).

| span | header | concepts it introduces |
|---|---|---|
| `wave-relation` | Frequency, wavelength and the speed of light (ours) | `c-equals-f-lambda`, `sources-across-the-spectrum` |
| `spectrum` | The electromagnetic spectrum (ours) | `electromagnetic-spectrum`, `spectrum-rules-of-thumb` |
| `transmission` | Transmission, Reflection, and Absorption | `transmission-reflection-absorption` |
| `radio-tv` | Radio and TV Waves | `radio-waves-and-modulation` |
| `fm-radio` | FM Radio Waves | `find-wavelength-or-frequency`, `antenna-length-and-wavelength` |
| `radio-interference` | Radio Wave Interference | — |
| `microwaves` | Microwaves | `microwaves-and-their-uses` |
| `microwave-heating` | Heating with Microwaves | — |
| `infrared` | Infrared Radiation | — |
| `visible-light` | Visible Light | — |
| `ultraviolet` | Ultraviolet Radiation | — |
| `uv-exposure` | Human Exposure to UV Radiation | `radiation-and-living-tissue` |
| `ozone` | UV Light and the Ozone Layer | — |
| `uv-benefits` | Benefits of UV Light | — |
| `x-rays` | X-Rays | — |
| `gamma-rays` | Gamma Rays | — |
| `detecting-from-space` | Detecting Electromagnetic Waves from Space | — |

All ten of the section's concept nodes are introduced; the spans that follow
use or reinforce them, and the `coverage` table carries a row for each.

## Types the page binds

`frequency`, `position` (wavelength and every distance along a wave),
`velocity` (the speed of light), `time`, `electric-field` and `energy` — the
union `ch24/COLOR.md` allots to this section, and no more. The permittivity,
the permeability, the index of refraction, an emissivity, a count and a
percentage stay untyped and in ink, as do every band name, every frame and
every label. The element palette appears once, as `F.el('e-')` on the striking
and captured electrons of the X-ray figure. The categorical palette tells apart
the carrier wave from the audio signal in the two modulation figures and the
two mechanisms of X-ray production, in hues the page has not bound. One
refinement on `ch24/COLOR.md`: that file tells the two modulation figures to
separate the carrier wave from the audio signal with the categorical palette,
and the carrier and the wave it becomes are drawn instead in the electric-field
hue, since they are the electric field of the radio wave and root rule 7 gives a
drawn thing the colour of its result type. The audio signal, which is no field
of a wave, keeps the categorical hue, so the two are still told apart by colour
and by a palette the page has not bound.

**The one hex on the page.** The visible strip of Figure 24.15, and the visible
band inside the spectrum of Figure 24.8, are painted in true spectral colour,
which is root rule 7's third family: a colour that is the physical fact. A
wavelength between about 380 and 750 nm is turned into a red, green and blue
triple by the usual piecewise fit and written as a hex literal in `figures.js`
(the function `spectral(nm)`), and the marker that runs along the strip takes
that colour while it is inside the band and is ink outside it. Nothing else on
the page carries a hex.

## Figures

Every drawing the book prints in this module is replaced by a simulation, as
`config.md` asks; the seven photographs are kept, since the text points the
reader at six of them by number and the seventh is the picture its paragraph is
about. One further simulation is built, the antenna one, and the rest of the
proposals are listed unbuilt below.

```
sim-spectrum · Figure 24.8 · electromagnetic-spectrum, spectrum-rules-of-thumb, c-equals-f-lambda, sources-across-the-spectrum · standardisation and variation by slider: the book prints one chart of the whole spectrum and the reader has to read two axes of powers of ten off it by eye, while here a marker walks the spectrum and the band, the wavelength and the frequency are all read out together at every point · still, because a chart of frequencies has no clock in it and the marker is the reader's hand and not the passage of time · one slider, log_10(f / Hz) from 1 to 22 carrying the frequency hue, with soft detents at the frequencies the module names (60 Hz power line, 1 kHz ELF, 1530 kHz AM, 105.1 MHz FM, 1.90 GHz cell phone, 2.45 GHz oven, 1.20e15 Hz UV microscope, 3e18 Hz X-ray) · the headline names the band the marker stands in, gives the wavelength in the unit that suits it and states the smallest detail a wave of that wavelength can resolve · graph none, the spectrum is two scales and the bands drawn between them · 2D
sim-elf-submarine · Figure 24.10 · transmission-reflection-absorption, c-equals-f-lambda, find-wavelength-or-frequency · intuition and variation by slider: the book draws one curved line reaching a submarine, while here the wavelength itself is drawn to a true scale against a sea two kilometres wide, so the reader sees that an ELF wavelength is far wider than the whole picture and an FM wavelength is shorter than the submarine · still, because the question is what one frequency's wavelength looks like beside the sea, and nothing in it runs on a clock · one slider, log_10(f / Hz) from 3 to 8 carrying the frequency hue, with detents at 1 kHz (ELF), 540 kHz (the bottom of the AM band) and 100 MHz (FM) · the headline gives the wavelength and says whether a wave that long reaches a submerged submarine · graph none · 2D
sim-am · Figure 24.11 · radio-waves-and-modulation · animation and variation by slider: the book prints three still waveforms and the reader has to imagine the audio riding on the carrier, while here a cursor runs along all three at once and the value the receiver recovers is read off the envelope as it passes · moving, because a carrier being modulated by an audio signal has a time in it; the cursor sweeps once per two audio periods, which is the figure's cycle · three sliders: the carrier frequency in kHz across the AM band, detent at the book's 1530 kHz, in the frequency hue; the audio frequency in Hz, in the frequency hue; and the depth of the modulation from 0 to 1, untyped and in ink · the headline states the carrier frequency, the audio frequency and the depth, and says that the carrier's frequency never changes · graph below is not needed: the three traces are the figure, stacked one above another as the book stacks them · 2D
sim-fm · Figure 24.12 · radio-waves-and-modulation · animation and variation by slider: the crests of a frequency-modulated wave bunch and spread, which a still drawing can show only once, and the reader can here watch the bunching travel with the audio signal that causes it · moving, for the same reason as the AM figure, and with the same cycle · three sliders: the carrier frequency in MHz across the FM band, detent at the book's 105.1 MHz, in the frequency hue; the audio frequency in Hz, in the frequency hue; and the frequency swing in kHz from 0 to 20, the book's own limit, in the frequency hue · the headline states the carrier frequency, the swing and the two frequencies the wave reaches, and says that the amplitude never changes · graph none, the three traces are the figure · 2D
sim-visible · Figure 24.15 · electromagnetic-spectrum, c-equals-f-lambda, find-wavelength-or-frequency · standardisation and variation by slider: the book prints the strip and names the colours, and here the reader may stand at any wavelength in it and read the frequency, and may walk out of the strip into the infrared and the ultraviolet and watch the marker go dark · still, because a colour at a wavelength has no clock in it · one slider, the wavelength from 300 to 800 nm carrying the position hue, with detents at 380 nm and 750 nm, the two ends of the visible range the book gives · the headline names the colour the wavelength is, or says the wave is invisible and which side of the strip it lies on · graph none · 2D
sim-xray · Figure 24.18 + 24.19 · sources-across-the-spectrum, radiation-and-living-tissue · intuition and variation by choice and slider: the book draws the same energetic electron striking the same material twice, once knocking an inner electron out and once being slowed by collisions, and one scene with a choice of mechanism puts the two side by side, with a bar of energy under each that shows why one X-ray belongs to the atom and the other to the electron · still, because the book's own two pictures are before and after, not a motion, and a replay of them would be the mechanism animation root rule 24.9 forbids · one choice, the mechanism (characteristic, braking), and one slider, the energy the striking electron arrives with, from 5 to 120 keV, carrying the energy hue · the headline says what the chosen mechanism does with that energy · graph none, the two energy bars stand under the scene · 2D
sim-antenna-length · Sim · antenna-length-and-wavelength, find-wavelength-or-frequency, c-equals-f-lambda · variation by slider, on a result the book states in words and never draws: the most efficient antenna is half a wavelength long, and the reader is told that AM needs a very large one without ever being shown how large · still · one slider, log_10(f / Hz) from 5 to 10 carrying the frequency hue, with detents at the three frequencies of Example 24.2 (1530 kHz, 105.1 MHz, 1.90 GHz), and one choice, whether the antenna stands free (L = λ/2) or has one end on the ground (L = λ/4) · the headline gives the frequency, the wavelength and the antenna length, and compares that length with the height of a person · graph alone, because the graph is the idea: antenna length against frequency on log–log axes, a straight line with a pinned marker, and a silhouette drawn beside the axis at 1.7 m as the one scale the reader already has · 2D
```

Figures 24.8, 24.10, 24.11, 24.12 and 24.15 are the book's drawings kept under
their own numbers; 24.18 and 24.19 fold into one, since the book draws the same
electron striking the same material twice and one scene with a choice of
mechanism is clearly better, so the row's number is 24.18, its fold is 24.19,
its eyebrow reads "Figure 24.18 + 24.19", and both numbers in the prose link to
it (root rule 14). `sim-antenna-length` replaces nothing in the book and is a
Sim.

Every simulation here is flat (root rule 28.1). Each is a relation between
quantities — a wavelength against a frequency, a field against time, a length
against a frequency — and each is clearest drawn with a fixed frame and honest
labels. The chapter's one full 3D scene is Figure 24.7 in 24.2, and the locked
view is Figure 24.6(a) there; nothing in this section needs either.

Labels (root rule 26.7). The band names of Figure 24.8 and the colour names of
Figure 24.15 are on by default: the bands are fixed, each name sits inside its
own band, and none of them can collide at any slider position, while a spectrum
whose bands are not named cannot be read at all. Everywhere else the entity
labels number fewer than six.

### Photographs

| number | image | keep or drop | why |
|---|---|---|---|
| 24.9 | `Figure_25_03_03a.jpg` | keep | The text points at it by number: it is the picture of the power line whose 50 or 60 Hz wave the paragraph is about. |
| 24.13 | `Figure_25_03_07a.jpg` | keep | The text points at it by number, and it shows why FM and TV antennas are small but stand high. |
| 24.14 | `Figure_25_03_08a.jpg` | keep | The text points at it by number: a surface mapped by microwaves through an atmosphere that visible light cannot cross. |
| 24.16 | `OSX_CP2e_Figure_25_03_18.jpg` | keep | It is the picture its paragraph is about, the first image of the Earth taken in ultraviolet, and the instrument and its designer beside it. |
| 24.17 | `OSX_CP2e_Figure_25_03_12.jpg` | keep | The text points at it by number: the ozone over Antarctica in September 2020. |
| 24.20 | `Figure_25_03_15a.jpg` | keep | The text points at it by number as the simplest kind of X-ray image. |
| 24.21 | `Figure_25_03_16a.jpg` | keep | The text points at it by number as a medical image made from gamma rays. |

Nothing in this module is a splash image at the head of a section, so nothing
is dropped. The unnumbered image inside the TV-antenna problem is not copied,
because that problem has no keyed answer and is left out.

### Simulations proposed and not built (root rule 15)

- **Transmission, reflection and absorption of one beam at one slab**, with a
  choice of material and a choice of band. Left unbuilt: the book states which
  materials are transparent to which bands and gives not one number for any of
  them, so every fraction the figure drew would be OmniStax's invention.
- **The hot spots in a microwave oven**, the standing wave between the walls and
  the turntable that spreads it. Left unbuilt: the interference of two waves is
  Chapter 16's, and the oven's own dimensions are nowhere in the book.
- **The greenhouse balance**, sunlight in and infrared out. Left unbuilt: it
  would need the emissivities and the Stefan-Boltzmann law of Chapter 14 to say
  anything quantitative, and without them it is a diagram of arrows.

## Tables

One: Table 24.1, *Electromagnetic Waves*, the production, applications, life
science aspect and hazards of every band. It stays in the text as a
`div.book-table` with the book's eyebrow and its own title, and takes no figure
row (root rule 19).

## Exercises

| kind | count | placement |
|---|---|---|
| `problem` | 12 of 24 | the Exercises document; the other twelve have no keyed answer and are left out |
| `conceptual-question` | 12 | the Exercises document, each with an AI-marked suggested approach |
| `ap-test-prep` | 4 | the Exercises document: two of this module, and two the book prints in 24.2 |

The module prints no Check Your Understanding box, so nothing is set inline and
the text carries no `div.exercises` host. Of the four AP items, three are keyed
in the CNXML and are set as graded choices — this module's ordering by
wavelength, and 24.2's 3 GHz item and end-of-medium item, both of which need
$c = f\lambda$ and so are set here with `source_section: "24.2"` — and the
fourth, on what vision in the radio band would be like, is unkeyed and is kept
as an open item with an AI-marked suggested approach.

## Wanted at chapter level

- `eq-wave-speed-general` → `24.3-wave-relation`
- `eq-c-equals-f-lambda` → `24.3-wave-relation`
- `eq-wavelength-from-frequency` → `24.3-fm-radio`
- `eq-half-wavelength-antenna` → `24.3-fm-radio`
- `eq-quarter-wavelength-antenna` → `24.3-fm-radio`
- `c` → `24.3-wave-relation`
- `f` → `24.3-wave-relation`
- `λ` → `24.3-wave-relation`
- `v_w` → `24.3-wave-relation`
- `config.md` records that the TV reception antenna of this section travels on
  its exercise card; the problem it belongs to has no keyed answer, so the
  problem is left out and the image is not copied. The chapter pass should
  strike that clause from the Figures-that-serve-exercises line, which now
  names only 24.2's three images and 24.4's satellite dish.
- No concept, symbol or type row needs changing: the four variables, five
  equations and seventeen glossary terms the prep pass staged for 24.3 are the
  ones the page uses, and the section binds no type beyond the six
  `ch24/COLOR.md` allots it.

### What the chapter pass did (2026-09-15)

Every anchor above is written: `eq-wave-speed-general` and `eq-c-equals-f-lambda`
with `c`, `f`, `λ` and `v_w` to `24.3-wave-relation`, and the three antenna
equations to `24.3-fm-radio`. The clause naming the TV reception antenna is
struck from the Figures-that-serve-exercises line of `config.md`, which now
records that an image belonging to an unkeyed problem is not copied and that the
rule took this image and 24.4's satellite dish. `ch24/COLOR.md` now records what
the two modulation figures do: the carrier wave and the modulated wave are both
the electric field of a wave and take that hue, and the audio signal alone takes
the categorical palette, as does the emitted ray of the X-ray figure.

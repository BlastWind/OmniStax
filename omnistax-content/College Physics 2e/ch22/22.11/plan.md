# Plan: 22.11 More Applications of Magnetism (m42388)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves without check-ins; the per-section stop of rule 2, the plan review of
rule 5 and the user picks of rule 15 are replaced by this file, written
before the section was built and left for review after, as `ch22/config.md`
records.

The chapter's last section, and the one that carries the chapter's review
set. Its prose is short and mostly qualitative: a mass spectrometer, which
is the radius of 22.5 read backwards as a weighing machine, with a velocity
selector in front of it that is the one piece of new physics the section
proves; a cathode ray tube, where coils steer a beam; magnetic resonance
imaging, where a field that varies across the body makes position report
itself as a frequency; and the magnetocardiogram and the
magnetoencephalogram, fields so weak that the number is the whole lesson.
Two book images, two equation displays, no worked example, four glossary
entries, one dropped PhET link, and 41 exercises, which is the chapter's
review set and not this section's own (rule 9, `ch22/config.md`). One page
(rule 11).

## Sub-concepts (page headers)

The module prints four headers of its own and `ch22/config.md` keeps them as
the book writes them, so none of the four is the agent's (rule 3). The
velocity selector has no header in the book: it is proved inside Mass
Spectrometry, because the selector is a stage of the instrument, and it is
introduced in that span.

1. `spectrometry` **Mass Spectrometry** (book: the radius $r = mv/qB$; the
   paragraph on fixing $v$, $q$ and $B$; Figure 22.41, the instrument; the
   balance of the two forces and $v = E/B$; the paragraph on what mass
   spectrometry is used for).
2. `crt` **Cathode Ray Tubes—CRTs—and the Like** (book: the paragraph on
   electron guns and steering coils; Figure 22.42, the tube).
3. `mri` **Magnetic Resonance Imaging** (book: the five paragraphs on
   nuclear magnetic resonance, the superconducting magnet, how a varying
   field turns position into frequency, the limits of MRI and fMRI).
4. `biomagnetic` **Other Medical Uses of Magnetic Fields** (book: the
   paragraphs on the magnetocardiogram and the magnetoencephalogram, the
   SQUID, and the closing paragraph on magnetic cures).

Learning objectives, the section summary and the four glossary entries come
out of the running text into the tables and the views (rule 4). The section
names two other places in the book, Oscillatory Motion and Waves for
resonance and the current loops of this chapter, and both are plain text as
`ch22/config.md` asks. The PhET link Magnet and Compass is dropped and named
in `notes`.

## Concept nodes (already in `book.json`)

| id | kind | introduced in | evidence |
|---|---|---|---|
| mass-spectrometry | idea | spectrometry | Figure 22.41; the paragraph on fixing $v$, $q$ and $B$ |
| velocity-selector | result | spectrometry | $qE = qvB$ and $v = E/B$; the section summary |
| steering-an-electron-beam | idea | crt | Figure 22.42; the paragraph on electron guns |
| magnetic-resonance-imaging | idea | mri | the glossary entries for MRI and NMR; the five paragraphs |
| biomagnetic-measurement | idea | biomagnetic | the glossary entries for the MCG and the MEG; the SQUID |

No node of this section is left without an exercise: the review set tests
the velocity selector through the conceptual question on telling a field's
kind, and mass spectrometry through the Critical Thinking item and the
cyclotron pair.

## Types the page binds

`magnetic-field`, `electric-field`, `velocity`, `voltage`, `position`,
`charge` and `force`. The first five are the list `ch22/COLOR.md` gives this
page. The last two are beyond it and are named here as that file asks: the
velocity selector draws the electric force $qE$ against the magnetic force
$qvB$ and cannot be drawn without the force hue, and the same pair of
arrows returns on the steered beam; and $q$ is written in the readout of
every one of the first three figures, where the point of the selector is
that the charge cancels. The mass, the number of turns, the gradient in
millitesla per metre, the isotope numbers and every angle stay untyped and
in ink.

`ch22/COLOR.md` says in one place that the ions of this section's mass
spectrometer are drawn from the element palette with their own symbols, and
in another that the two isotopes that part along two arcs here are one of
the chapter's two categorical cases. Two isotopes of one element have one
element colour and cannot be told apart by it, so the figure draws them with
`F.cat`, and the contradiction is listed below for the chapter pass.

## Figures

Rule 24's gate, rule 24.5's tiers and rule 26's controls; one line each in
the format of `docs/prompts/interactive-figures.md`.

- `sim-mass-spectrometer` · Figure 22.41 · mass-spectrometry,
  velocity-selector · value add: variation by slider, since the radius is
  the mass read off a ruler and the reader can see the two arcs close up and
  part again, and flow by animation, since the two ions leave the source
  together and land apart · moving, the two ions flying from the source
  through the selector and round their arcs to the detector wall, because
  the flight has a clock in it and the lighter ion arrives first, $\pi r/v$
  being shorter for it · sliders: the speed the selector passes, 1.70 to
  3.60 × 10⁶ m/s (velocity), and the field of the chamber, 0.500 to 0.700 T
  (magnetic-field) · headline: the two radii, where the ions land and how
  far apart · graph none, the detector wall carries the two brackets and a
  metre scale · 2D, since the instrument lies in one plane and the book
  draws it flat. Defaults 2.50 × 10⁶ m/s and 0.600 T are the book's own
  oxygen problem read through the selector: they give 0.693 m and 0.779 m
  and a separation of 0.173 m, the answer the book keys in 22.5. Fixed
  scale 270 units to the metre, from the widest pair of arcs the sliders
  reach (2.69 m).
- `sim-velocity-selector` · Sim · velocity-selector · value add: variation
  by slider and the selection itself, since three speeds enter and only one
  leaves, which no still drawing of one balanced ion can show · still,
  because which ion gets through is a state of the two fields and nothing
  about it is a fact about time · sliders: the electric field between the
  plates, 1.00 to 2.00 × 10⁶ V/m (electric-field), and the magnetic field
  across them, 0.500 to 0.700 T (magnetic-field); choice: the sign of the
  ion, positive or negative, since both forces reverse together and the
  selected speed does not move · headline: the speed the setting passes and
  which of the three ions goes straight · graph none · 2D. Defaults
  1.50 × 10⁶ V/m and 0.600 T pass 2.50 × 10⁶ m/s, the speed the spectrometer
  above is set to.
- `sim-crt-steering` · Figure 22.42 · steering-an-electron-beam · value add:
  variation by slider, since the gun's voltage and the coil's field pull the
  spot in opposite directions and the reader can find the pair that puts it
  where it is wanted · still, because where the spot lands is a state of the
  two settings and the flight of the electron is not what the figure teaches
  · sliders: the accelerating voltage, 5.00 to 20.0 kV (voltage), and the
  field of the steering coil, 0.200 to 1.00 mT (magnetic-field); choice: the
  field into or out of the page, which moves the beam down or up as the
  book's figure moves it down · headline: the speed of the electrons, the
  radius inside the coils and how far down the screen the spot sits · graph
  none; an inset in the corner carries right hand rule 1 as the book's own
  figure does · 2D. The default 10.0 kV gives 5.93 × 10⁷ m/s, the speed the
  book uses for a CRT electron in 22.5. Fixed scale 2750 units to the metre.
- `sim-mri-gradient` · Sim · magnetic-resonance-imaging · value add:
  variation by slider, since turning the gradient to zero leaves every slice
  answering the same frequency and the image with nowhere to come from,
  which is the argument of the book's paragraph · still, because the tuning
  of the receiver is a state and the sweep it stands for is not drawn ·
  sliders: the field of the magnet, 1.00 to 2.00 T (magnetic-field), the
  gradient across the patient, 0 to 20.0 mT/m (untyped), and the field
  strength the broadcast answers to, 1.00 to 2.05 T (magnetic-field) ·
  headline: which slice is in resonance, or that none is · graph below, the
  scene being horizontal: the field above the magnet's own value in
  millitesla against the distance along the patient, with the tuned level
  dashed across it and the resonant slice pinned · 2D. The patient is the one
  person this page draws and is not `F.silhouette`: the library's silhouette
  stands on its feet and has no supine pose, and a standing pose turned on its
  side reads as a person falling over rather than one lying in a bore, so the
  figure draws its own outline from a profile of half widths down the body
  (rule 25), in ink and with no limb heavier than the frame.
- `sim-field-scale` · Sim · biomagnetic-measurement · value add: intuition,
  since fourteen decades separate an MRI magnet from the field of a brain
  and the sentence "10⁻⁶ to 10⁻⁸ less than the Earth's" cannot be held in
  the head as a picture · still, because a scale of strengths has no clock ·
  choice: the source, one of an MRI magnet, a permanent magnet, the Earth,
  the heart and the brain; slider: the factor the book gives for the two
  biomagnetic fields, 10⁻⁶ to 10⁻⁸ (untyped) · headline: the strength of the
  chosen source in tesla and as a multiple of the Earth's field · graph
  none, the logarithmic scale is the figure · 2D. Every number on it is the
  book's: 1 to 2 T for the MRI magnet, 0.500 T for a permanent magnet,
  5.00 × 10⁻⁵ T for the Earth, and the heart's and brain's fields from the
  factor the section states.

No figure of this section earns a full 3D scene: the spectrometer, the tube
and the patient are each one plane and the book draws all three flat, so
rule 28.1 settles them, and `ch22/config.md` puts this section's figures
among the flat ones.

## Photographs and unnumbered images

The section prints no photograph; both of its numbered images are diagrams
and both become simulations with the book's image as the original. Of the
six unnumbered images inside its exercises, four are copied to
`media/ch22/` and travel on the cards of the exercises that refer to them
(`Figure_23_11_06a.jpg`, `Figure_23_11_08a.jpg`, `Figure_23_11_11a.jpg` and
`Figure_23_11_14a-7734.jpg`), and two are dropped with the unkeyed exercises
they belong to (`Figure_23_11_07a.jpg` and `Figure_23_11_09a.jpg`). A fifth
image, `Figure_23_11_10a-c140.jpg`, belongs to 22.10's problem set and is
copied here too, because two kept problems of this section ask about it.

## Exercises

41 in the source: 6 conceptual questions and 35 problems. 24 are kept.

- The 6 conceptual questions are open items with an AI-written suggested
  approach, since the book keys none of them (rule 13).
- 18 of the 35 problems carry the book's own answer and are kept with it.
- 17 problems have no keyed answer and are left out, named in `notes` and in
  `exercise_notes`: the directions of the fields in a loop and two coils,
  the field at the centre of a motor's loop, the field inside a
  10,000-turn-per-metre solenoid, the distance from a starter cable, the
  wire touching a loop, the second of the two vector-addition problems, the
  field under a power line, the voltage that accelerates an electron to
  6.00 × 10⁶ m/s, the water meter, the torque on a galvanometer's coil, the
  period of a circular orbit, the curving baseball, the wire held up by
  repulsion, the helium ion of unreasonable charge, the Hall voltage in a
  blood vessel, and the two Construct Your Own Problem items.
- Three kept problems lean on an item that is left out or sits in another
  section, so each quotes what it needs inside the prompt in the book's own
  words, as 9.5 does it: the solenoid current quotes the solenoid, the
  cyclotron frequency quotes the period it is told to use, and the MHD
  pressure quotes the drive's tube, current and field from Magnetic Force on
  a Current-Carrying Conductor.
- The Critical Thinking item is kept exactly as the book prints it,
  misprinted electron mass and all: its key divides by $9.11 \times 10^{-11}$
  where it means $9.11 \times 10^{-31}$ kg, which is why the time it reports
  is $2.85 \times 10^{15}$ s. It is named in `notes`.
- No exercise of this section is held for another section and none is held
  here from another: the review set is tagged across 22.5 to 22.10's
  concepts where it tests them, as `ch22/config.md` directs, and
  `exercise_notes` records it.

## Wanted at chapter level

- variables `E_field` → 22.11-spectrometry
- variables `B_mag` → 22.11-spectrometry
- variables `v` → 22.11-spectrometry
- variables `r_curv` → 22.11-spectrometry
- variables `q` → 22.11-spectrometry
- equations `eq-mass-spectrometer-radius` → 22.11-spectrometry
- equations `eq-velocity-selector` → 22.11-spectrometry
- glossary `22.11/magnetic resonance imaging (MRI)` → 22.11-mri
- glossary `22.11/nuclear magnetic resonance (NMR)` → 22.11-mri
- glossary `22.11/magnetocardiogram (MCG)` → 22.11-biomagnetic
- glossary `22.11/magnetoencephalogram (MEG)` → 22.11-biomagnetic
- `ch22/COLOR.md` contradicts itself on the ions of this section's mass
  spectrometer, naming them for the element palette in the paragraph on
  bodies and for the categorical palette in the paragraph on `F.cat`. This
  page draws them with `F.cat`, since two isotopes of one element share one
  element colour; settle the wording once for the chapter.
- `ch22/COLOR.md` gives this page five types to bind and it binds seven;
  `force` and `charge` are added for the reason given under "Types the page
  binds" above.
- `ch22/config.md` counts six exercise images copied for this section; four
  of the six are, since two belong to problems the book leaves unkeyed, and
  one of 22.10's is copied here as well.
- The MRI figure draws a supine body of its own rather than `F.silhouette`,
  for the reason given in its plan line. If another section of the book ever
  needs a person lying down, a supine pose belongs in the library.

**Chapter pass, 2026-09-15.** The two equation rows of the section now carry
`22.11-spectrometry`. The four variable lines this plan asked for are declined,
and why: a `variables` row is keyed by section and symbol, and `E_field`, `v`
and `q` belong to 22.4 and 22.6 and `r_curv`, `B_mag` to 22.4 and 22.5, where
each is introduced and each is now anchored. The chapter, like every chapter of
this book, gives a section a variable row only for a symbol that section
introduces, so 22.11 holds none and none was invented. The four glossary lines
are declined too: a glossary row carries no anchor field, as the schema has it,
and the app reaches a glossary term through the text rather than through a row.

`ch22/COLOR.md` no longer contradicts itself on the ions: it now says once, for
the whole chapter, that two isotopes of one element are told apart by
`F.cat`, since they share one element colour, and that `F.el` is for a particle
the page names. The `force` and `charge` this page binds beyond the plan's five
are in the colour plan's binding list with the reason. `config.md`'s count of
the images copied for this section is corrected there, to five images on six
cards with one of them shared with 22.10. The supine pose the MRI figure draws
for itself is left where it is, and the library gap is recorded for the section
that wants a person lying down next.

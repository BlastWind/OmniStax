# Plan: 30.5 Applications of Atomic Excitations and De-Excitations

Written before the page was built (root rule 5), under `ch30/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints two headers, Fluorescence and Phosphorescence, and Lasers. The
opening passage gets OmniStax's header, and the long Lasers part is split at its
changes of subject, as 29.3 did: the helium-neon laser, the applications, and
holography. The phosphorescence paragraph gets a header of its own, since the
metastable state it defines is what the laser passage builds on.

| Span | Header | What it holds |
|---|---|---|
| `color-and-energy-levels` | Color and energy levels | The opening paragraph, Figure 30.28, the color of a tomato and the transparency of air |
| `fluorescence` | Fluorescence and Phosphorescence | Figure 30.29, the fluorescence process, the energy inputs, the paragraph that reads as a lost caption, Sim fluorescence, the glow-worms, biology, Figures 30.30 and 30.31, the Nano-Crystals box and Figure 30.32 |
| `phosphorescence` | Metastable states and phosphorescence | Lifetimes, metastable states, phosphorescence, thermoluminescence, Figure 30.33 |
| `lasers` | Lasers | Uses, coherence, population inversion, Figure 30.34 + 30.35 + 30.36, stimulated emission, the name and history, chirped pulse amplification |
| `helium-neon-laser` | The helium-neon laser | Lasing materials, Figure 30.37, diode lasers |
| `laser-applications` | Lasers in medicine and technology | Medical uses, Figure 30.38, dentistry, Figure 30.39, CDs, Figure 30.40 |
| `holography` | Holography | Figure 30.41, the name, Figure 30.42 + 30.43, transmission and reflection holograms, medical holograms |

The paragraph "This atom is excited to one of its higher levels…" stands in the
CNXML as an ordinary paragraph, as do the glow-worm paragraph after it; both are
kept as printed, in place.

## Concepts

All thirteen are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `color-from-energy-levels` | `color-and-energy-levels` | reinforced in `laser-applications` |
| `atomic-excitation` | `fluorescence` | used in `phosphorescence` |
| `atomic-de-excitation` | `fluorescence` | used in `phosphorescence`, `lasers` |
| `fluorescence` | `fluorescence` | reinforced in `phosphorescence` |
| `metastable-state` | `phosphorescence` | used in `lasers`, `helium-neon-laser` |
| `phosphorescence` | `phosphorescence` | — |
| `metastable-state-and-phosphorescence` | `phosphorescence` | used in `lasers` |
| `population-inversion` | `lasers` | used in `helium-neon-laser` |
| `stimulated-emission` | `lasers` | — |
| `laser` | `lasers` | used in `helium-neon-laser`, `laser-applications`, `holography` |
| `wavelength-from-a-level-spacing` | `helium-neon-laser` | — |
| `hologram` | `holography` | — |
| `holography` | `holography` | — |

Earlier concepts used: `photon-energy` (29.2) in `color-and-energy-levels` and
`fluorescence`; `energy-level-diagram` (30.3) in `fluorescence` and `lasers`;
`bohr-transition-energy` (30.3) in `fluorescence`; `coherent` (27.3) in `lasers`;
`constructive-interference` and `destructive-interference` (16.10) and
`diffraction-grating` (27.4) in `holography`.

## Types the page binds

`energy` (level energies, photon energies, the readouts of the fluorescence and
helium-neon figures) and `position` (wavelengths, track spacing, the size of a
pit) are bound by the figures; `time` (10⁻⁸ s), `power` (10¹² W) and
`temperature` are marked in the prose only. Counts of atoms and photons, the
pumping rate and the viewing angle are untyped, except that the viewing angle is
an `angle` and binds it. Planck's constant and $hc = 1240$ eV·nm are ink.

Facts: every visible photon is drawn in the colour of its wavelength through one
function, `wavelengthColor(nm)`, the same fit 29.2 and 29.3 use (`spectrum`); the
laser photons of the cavity and the helium-neon figure are the 633-nm red the
section names; ultraviolet and infrared photons are ink with their wavelength.
Conventions: `F.el('e-')` for every electron, `F.el('He')` and `F.el('Ne')` for
the two gases of Figure 30.37. The lasing atoms of Figure 30.34 + 30.35 + 30.36
are a material the book does not name, drawn in ink, hollow in the ground state
and filled when excited, with a legend. The two objects of the hologram are
`F.cat(0)` and `F.cat(1)`: the text names one object only, so they are not
referents. The section has no referents.

## Figures

```
photo-laser-beams · Figure 30.28 · kept photograph: the text points at it ("See Figure 30.28") · arrows: none · still · 2D
photo-scorpion · Figure 30.29 · kept photograph: the text points at it twice and it is the example of fluorescence · arrows: none · still · 2D
sim-fluorescence · Sim · atomic-excitation, atomic-de-excitation, fluorescence, color-from-energy-levels, wavelength-from-a-level-spacing · value add: flow by animation (a photon arrives, the electron jumps up, and the atom gives the energy back as one photon or as several longer-wavelength photons, the story the orphaned paragraph tells and the book no longer draws) and variation by slider and choice (only a photon whose energy matches a level spacing is absorbed; the path down is chosen) · arrows: kinematic (photons travel in and out); the transition arrows on the level diagram are notation, drawn once and held · moving, a 5 s loop holding 1.2 s: the incoming photon crosses, is absorbed or passes, and the steps down follow one by one, because excitation and de-excitation happen in time · slider: λ of the incoming photon (position, 200 to 700 nm, 253 nm by default; dashed circles at 253, 428 and 590 nm, the three spacings above the ground state, with a slight snap); choice: down in one step / in smaller steps (a discrete state) · headline: "A 253-nm ultraviolet photon lifts the electron 4.90 eV, and it comes down in smaller steps." · no graph: the level diagram is the scene, photons leave to the right in their own colours · 2D, a level diagram is a relation in a plane (rule 28.1)
photo-fluorescein · Figure 30.30 · kept photograph: the text points at it · arrows: none · still · 2D
photo-dye-in-water · Figure 30.31 · kept photograph: the text points at it · arrows: none · still · 2D
photo-chicken-cells · Figure 30.32 · kept photograph: the Nano-Crystals box points at it · arrows: none · still · 2D
photo-ceramic-lion · Figure 30.33 · kept photograph: the text points at it ("See Figure 30.33") · arrows: none · still · 2D
sim-laser · Figure 30.34 + 30.35 + 30.36 · population-inversion, stimulated-emission, laser, metastable-state, atomic-excitation · value add: flow by animation (pumping lifts atoms, the short-lived states empty into the metastable state, one spontaneous photon starts a cascade of stimulated photons in phase, and the mirrors send it back and forth until the beam leaves through the partial mirror) and variation by slider (the pumping decides whether a population inversion forms, and below it absorption eats the photons as fast as stimulated emission makes them) · arrows: kinematic (the photons of 30.35 and 30.36 travel; the book's pumping and decay arrows of 30.34 become atoms changing state in time) · moving, an endless steady process with no scrubber (the metastable lifetime drawn about a second, the real ones far shorter; the readout averages the metastable count over 2 s, since lasing holds it near one half): atoms are pumped and decay at random, photons fly at a fixed speed, a photon passing an atom stimulates it if it is metastable and is absorbed if it is in the ground state, with equal probability (the book's Einstein point), because the cascade and the build-up are histories · slider: pumping (untyped, 0 to 4 per metastable lifetime, 3 by default, the book's "massive energy input"; a dashed circle at 1, where the steady share in the metastable state passes one half, the population inversion); choice: mirrors at both ends / no mirrors (the book's (a) against (b) and (c), a discrete state) · headline: "With a population inversion, stimulated emission outruns absorption and the beam builds between the mirrors." · graph below: the level diagram of 30.34 with the atoms counted on each rung and the half-way mark on the ground and metastable rungs, the cavity of 30.36 above · 2D; the config's locked view for 30.36 is not used, since the book prints the cavity flat and the lesson runs along one axis
sim-he-ne · Figure 30.37 · wavelength-from-a-level-spacing, population-inversion, metastable-state, laser · value add: flow by animation (the book's curved arrow "Collision transfers energy" is played: a discharge electron lifts a helium atom 20.61 eV, the helium atom meets a neon atom and the energy passes, and neon drops 1.96 eV with a 633-nm photon, then falls the rest of the way) · arrows: kinematic (the energy carried from helium to neon in a collision, the photon leaving); the level arrows are notation and are drawn once and held · moving, a 6.4 s loop holding 1.2 s, because the transfer is a sequence in time · no slider: the book's numbers are fixed facts of the two atoms, and the exercises read them · headline: "A helium atom raised 20.61 eV hands its energy to neon in a collision, and neon drops 1.96 eV to emit a 633-nm photon." · no graph: the two level diagrams side by side with the atoms below them · 2D
photo-retina · Figure 30.38 · kept photograph: the text points at it · arrows: none · still · 2D
photo-livermore · Figure 30.39 · kept photograph: the text points at it · arrows: none · still · 2D
sim-cd · Figure 30.40 · laser, color-from-energy-levels (the wavelength chosen) · value add: flow by animation (the disc spins and the pits pass under the laser spot, and the light scattered back dips at every pit, so the digital pattern is read) and variation by choice (a shorter wavelength focuses to a smaller spot, so tracks and pits can be closer, the caption's "shorter-wavelength lasers enable greater storage capacity") · arrows: kinematic (the laser beam to the disc and back); the book's two grey zoom arrows are notation and become the frame of the close-up · moving, an endless spin: the track moves under a fixed spot at a steady speed, because reading is a history · choice: CD, 780-nm infrared (by default, the book's disc) / DVD, 650-nm red / Blu-ray, 405-nm violet, a discrete state; real track spacings 1.6, 0.74 and 0.32 µm and pit sizes drawn to one fixed scale in µm · headline: "A 780-nm infrared laser reads a CD whose tracks are 1.6 µm apart." · graph below: the light scattered back from the middle track, against position along it, drawn as the track passes the spot, the pit depth t marked on a cut along the track · 2D, the close-up is the bottom of the disc seen face on, with a small disc beside it showing the spiral track and where the close-up lies
photo-hologram-card · Figure 30.41 · kept photograph: the text points at it · arrows: none · still · 2D
sim-hologram · Figure 30.42 + 30.43 · holography, hologram, laser · value add: flow by animation (the reference and object waves travel to the film and their fringes are drawn on it; in viewing, the reference wave passes through and is diffracted into the waves that come from the virtual image and converge on the real one) and variation by slider (moving the eye changes the perspective: the nearer object shifts against the farther one, the book's test of a true three-dimensional image) · arrows: kinematic (the light of the reference and object waves travels); nothing else is drawn as an arrow · moving, an endless steady flow: wave crests move along the rays at a fixed speed, because the waves are what the passage is about · choice: recording / viewing, a discrete state, the same plate, mirror and laser kept between the two and the rays bending from one into the other; slider: the eye's direction θ (angle, 0° to 30° above the film's normal, 15° by default, in viewing only, fading out in recording) · readout: the distances of the two objects from the film in recording, and in viewing how far the nearer ball appears above or below the block from θ · headline: "Light scattered from the object meets the reference beam on the film, and their interference is recorded." / "The reference beam diffracted by the film reconstructs the object wave: a virtual image behind the film and a real image in front." · no graph: an inset of the exposed film's fringes in recording (computed with the wavelength drawn about 10⁴ times longer, so the fringes show), and of what the eye sees in viewing; the two objects are a ball and a block, which read the same from the side and from the eye, in place of the book's dinosaur · 2D, a side view; a 3D scene would add a turning view of the bench, which teaches nothing the side view and the eye's inset do not
```

Labels. Sim fluorescence: the four rungs carry their energies (ground state, 2.10, 2.90 and
4.90 eV) and each transition arrow drawn carries its photon's energy and
wavelength; no label on a moving photon (hover names carry them). Sim laser: the
two mirrors, a three-entry legend for the atoms, the rungs' names (ground state,
first metastable, second, third) and the counts; photons and atoms are named by
hover. Figure 30.37: the book's labels (Helium, Neon, Ground state, First,
Metastable, 20.61, 20.66 and 1.96 eV, "Collision transfers energy"). Figure 30.40: Spiral track,
Pit, Land, the laser, the pit depth t and the detector signal; five entity
labels. Figure 30.42 + 30.43: Laser, the partially silvered mirror, Mirror,
Object, Photo plate or Hologram, Reference wave, Object wave, Virtual image, Real
image, the eye; in each state no more than six show at once, the rest by hover.

Figures 30.34 + 30.35 + 30.36 keep widths 350, 500 and 250; 30.37 400; 30.40 185;
30.42 + 30.43 225 and 250. Photographs: 225 except 30.33 (200), 30.41 (250).

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_31_05_00.jpg` (30.28) | kept, photo row | the text points at it |
| `Figure_31_05_01.jpg` (30.29) | kept, photo row | the text points at it twice |
| `Figure_31_05_02.jpg` (30.30) | kept, photo row | the text points at it |
| `Figure_31_05_03.jpg` (30.31) | kept, photo row | the text points at it |
| `Figure_31_05_04.jpg` (30.32) | kept, photo row | the Nano-Crystals box points at it |
| `Figure_31_05_05.jpg` (30.33) | kept, photo row | the text points at it |
| `Figure_31_05_06.jpg`, `_07`, `_08` (30.34–30.36) | originals of `sim-laser` | folded |
| `Figure_31_05_09.jpg` (30.37) | original of `sim-he-ne`, and the figure on problem p1's card | replaced; the card needs the numbers |
| `Figure_31_05_10.jpg` (30.38) | kept, photo row | the text points at it |
| `Figure_31_05_11.jpg` (30.39) | kept, photo row | the text points at it |
| `Figure_31_05_12.jpg` (30.40) | original of `sim-cd` | replaced |
| `Figure_31_05_13.jpg` (30.41) | kept, photo row | the text points at it |
| `Figure_31_05_14.jpg`, `_15` (30.42, 30.43) | originals of `sim-hologram` | folded |
| `Figure_31_05_16.jpg` (chromium in ruby) | on problem p2's card | the problem reads it |
| `Figure_31_05_18.jpg` (neodymium in glass) | on problem p3's card | the problem reads it |

## Extra simulations considered

- Phosphorescence as a third path in the fluorescence Sim, the electron lingering in a metastable level. Left: the laser fold already shows the metastable state filling and emptying, and the glow's real lifetime (milliseconds to hours) cannot be shown on the same clock as $10^{-8}$ s.
- Thermoluminescence dating, the glow of a heated ceramic against its age. Left: the book gives no numbers, and the relation would be invented.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| AP test prep | 6 | 6 (3 keyed choices, 3 open with AI approaches; their solutions are commented out of the CNXML) | — |
| Conceptual question | 7 | 4 (AI approaches) | `fs-id2407133`, a reprint of the correspondence question kept in 30.3; `fs-id2601140` and `fs-id1397225`, moved to 30.3 |
| Problem | 5 + 2 from 30.9 | 5 (3 own keyed, `fs-id3168724` and `fs-id1545878` from 30.9) | `fs-id1413589` (wavelength to pump He-Ne) and `fs-id3064373` (photons that pump chromium), unkeyed |

Problems p1 (the neon transitions), p2 (ruby) and p3 (neodymium) carry their
level diagrams on the card's `figure` field. Problem p3(b) and p1(b) ask the
reader to verify a printed number; the key's number is the answer.

## Tables

None.

## Wanted at chapter level

- variables for 30.5 (none exist): `λ` "the wavelength of a photon emitted or absorbed between two levels" (`wavelength`) → 30.5-helium-neon-laser; `E` "the energy of a single photon" (`photon-energy`) → 30.5-fluorescence. The readouts write `\klam`, `\kE`, `\kdE` and `\kc` and wear the book's shared types meanwhile.
- `ΔE` variables row for 30.5, "the spacing between two energy levels" (`bohr-transition-energy`) → 30.5-helium-neon-laser.
- edge `fluorescence` <- `atomic-excitation` and <- `atomic-de-excitation` (the definition the idea is stated with, in the same paragraph).
- edge `population-inversion` <- `metastable-state` (its statement names the metastable state; today it reaches it only through `metastable-state-and-phosphorescence`).
- `metastable-state-and-phosphorescence` overlaps the two definitions `metastable-state` and `phosphorescence` introduced in the same span; the chapter pass may fold it into them.
- edge `holography` <- `diffraction-grating` (27.4): the book says the film "acts much like a collection of diffraction gratings".
- `ch30/COLOR.md` 30.5 row: the page binds `energy`, `position` and `angle`, not `energy` alone.
- No symbol row needs changing.

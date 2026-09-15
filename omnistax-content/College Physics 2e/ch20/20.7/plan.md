# Plan: 20.7 Nerve Conduction–Electrocardiograms (m42352)

Source: `source.md`, converted from the CNXML. Status: built 2026-09-15
without a review stop, on Chen's standing instruction to finish the book in
waves; `ch20/config.md` records that the stop of rule 2 and the review of
rule 5 are replaced by this file.

The chapter's closing section, and the one place in it where the current is
carried by ions across a membrane rather than by electrons along a wire.
Nine book figures (20.24 to 20.32), one of them a photograph, one boxed note
that is the dropped PhET link, no worked example, no AP item, no numbered
table, no Check Your Understanding box, three conceptual questions and three
problems, two of them keyed. One page (rule 11).

## Sub-concepts (page headers)

The book prints two headers of its own, Nerve Conduction and
Electrocardiograms, and those are kept as the book writes them
(`config.md`). The first of them covers five distinct ideas and four
figures, so the page divides it into five blocks and keeps the book's words
for the header of the first, as 20.2 and 20.5 did.

1. `nerve-conduction` **Nerve Conduction** (book: the three functions of
   nerves, bioelectricity, and the neuron with its dendrites, synapses and
   axon; Figure 20.24).
2. `resting-potential` **The resting potential across a cell membrane**
   (book: the Coulomb force and diffusion, the semipermeable membrane and
   the two layers of charge, the 70 to 90 mV across it, the 8-nm thickness
   and the field of 11 MV/m, the resting potential of about −90 mV and the
   quarter of the cell's energy that maintains it; Figure 20.25).
3. `action-potential` **The action potential** (book: a stimulus changes
   the permeability, sodium rushes in and depolarizes the membrane,
   potassium returns it and repolarizes it, and the sequence is a voltage
   pulse; active transport and the sodium-potassium pump; Figure 20.26).
4. `nerve-impulse` **How a nerve impulse propagates** (book: the changing
   voltage and field alter the permeability of the adjacent membrane, so
   the pulse moves along at about 1 m/s; Figure 20.27 + 20.28).
5. `myelin` **Myelin sheaths and the nodes between them** (book: myelin as
   an insulator, the nodes of Ranvier, the $\text{IR}$ loss in the sheath
   and the regeneration in the gap, cross talk, multiple sclerosis, and the
   muscle cells and the electric eel that close the block; Figure 20.29).
6. `electrocardiograms` **Electrocardiograms** (book: the depolarization
   wave across the heart from the sinoatrial node, the three electrodes and
   the lead potentials, the four-chamber action, the P wave, the QRS
   complex and the T wave against arterial blood pressure, and the twelve
   leads of a modern ECG; Figure 20.30 + 20.31 and Figure 20.32).

Cross references to other sections are plain text, as the rest of the book
writes them: "Molecular Transport Phenomena: Diffusion, Osmosis, and
Related Processes" and "Viscosity and Laminar Flow; Poiseuille's Law". The
PhET note (Neuron) is dropped and named in `notes`. Learning objectives,
the section summary and the four glossary entries come out of the running
text into the tables.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| resting-potential | idea | resting-potential | the two layers of charge, 70 to 90 mV, $E = V/d$ across 8 nm; Figure 20.25; cq1 |
| action-potential | idea | action-potential | the pulse of Figure 20.26; objective 1; cq2 |
| nerve-impulse-propagation | idea | nerve-impulse | Figure 20.27 and the speed of about 1 m/s |
| myelin-sheath | idea | myelin | Figure 20.28; objective 2; cq3 |
| electrocardiogram | idea | electrocardiograms | Figures 20.30 and 20.31; objective 3; p1 |

The page leans on `semipermeable-membrane`, `diffusion` and
`active-transport` (12.7), `coulombs-law` (18.3), `insulator` (18.2),
`potential-difference` (19.1) and `voltage-across-uniform-field` (19.2),
`electric-current` (20.1) and `ir-drop` (20.2); the coverage rows mark each
as used where the text uses it. No node of this section is left without a
book exercise, and no question is generated (`config.md`).

## Types the page binds

`voltage`, `charge`, `electric-field`, `position` and `time`, the five the
chapter's COLOR.md gives 20.7, and no others. The membrane, the axon, the
heart and the body are the frame of a drawing and are in ink; the sodium,
potassium and chlorine ions are drawn with `F.el('Na')`, `F.el('K')` and
`F.el('Cl')`, and the sign of an ion is told by its label and by the way it
moves, never by a hue (`COLOR.md`). The speed of a nerve impulse is a
number the readouts state in ink, since the page draws no velocity and
binds no velocity hue.

## Figures

id · replaces · concepts · value add · motion · sliders and choices ·
headline · graph · depth

1. `sim-neuron` · replaces Figure 20.24 · nerve-impulse-propagation,
   myelin-sheath · value add: **standardisation** (one clean drawing of the
   cell whose parts the rest of the section names) and **variation by
   slider** (the axon's length is the thing the book calls remarkable, "some
   of them many centimeters long", and the reader sets it and reads the time
   the impulse takes to cross it) · **still**: an anatomical drawing has no
   clock in it, the travel time is a number the slider answers, so no cycle
   and no transport · slider $\kd$ (2 to 100 cm, default 30, position); a
   choice of the part the drawing names, the whole cell, the dendrites and
   synapses, the cell body, or the axon and its endings, which highlights
   that part and leaves the rest muted · headline: "A signal crossing a
   30-cm axon at about 1 m/s takes 0.30 s, which is why a reflex is quick
   but not instant." · graph: none, the cell is the picture · 2D, tier:
   still simulation. Readout: the travel time $\kt = \kd/v$ with the live
   numbers, and a small line on the 1-mm sheaths and the 0.001-mm nodes the
   book's alt text gives. Draws position and time. Labels on by default:
   six parts, none of them colliding, and hover names beneath them.
2. `sim-membrane` · replaces Figure 20.25 · resting-potential · value add:
   **flow by animation** (diffusion carrying ions across until the Coulomb
   force stops them is a balance reached over time, and the reader must
   otherwise imagine the crossing and the halt) and **variation by slider**
   (the field across the membrane is the quantity the section computes, and
   it is huge only because the membrane is thin) · **moving**: the ions
   cross while the charge layers build and the transfer stops when the
   Coulomb force balances diffusion, which is a time the reader has to see;
   the figure registers one crossing cycle and takes the app's transport ·
   sliders $\kdV$ (70 to 90 mV, default 90, voltage) and $\kd$ (4 to 12 nm,
   default 8, position); a choice of which ion the membrane passes, the
   resting state that passes $\text{K}^+$ and $\text{Cl}^-$, potassium
   alone, chlorine alone, or a membrane opened to $\text{Na}^+$, which is
   the state 20.26 begins from · headline: "Diffusion carries potassium out
   and chlorine in until the layers of charge they leave behind hold the
   rest back." · graph: none; the membrane, its two charge layers and the
   field arrow across it are the picture · 2D, tier: moving simulation.
   Readout: $\kEf = \kdV/\kd$ with the live numbers, in millivolts,
   nanometres and megavolts per metre. Draws voltage, charge,
   electric-field and position.
3. `sim-action-potential` · replaces Figure 20.26 · action-potential ·
   value add: **flow by animation** (the pulse is a sequence of four states
   of one membrane and the graph is the record of them, and the reader has
   to see the two run together) and **variation by slider** · **moving**:
   the action potential is a pulse in time and nothing else; the cycle runs
   one pulse and the hold at the end is the resting state, and the figure
   takes the app's transport · sliders $\kVo$ (0 to 60 mV, default 50,
   voltage, the peak the depolarization reaches) and $\kdV$ (−110 to −70
   mV, default −90, voltage, the resting potential); a choice of the trace
   alone or the trace with the membrane inset above it · headline: "At 3.4
   ms sodium is rushing in, the inside of the membrane has gone positive,
   and the trace is climbing to its peak of 50 mV." · graph: membrane
   voltage against time, axes fixed at 0 to 8 ms and −120 to 60 mV, the
   present value pinned · 2D, tier: moving simulation. Readout: the
   voltage now, the phase it belongs to, and the peak and resting values.
   Draws voltage and time.
4. `sim-impulse` · replaces Figure 20.27 + 20.28, folded (the impulse
   running along a bare membrane, and the same impulse down a myelinated
   axon; one strip and one travelling pulse carry both, with the myelin as
   a state, and the eyebrow reads both numbers) · nerve-impulse-propagation,
   myelin-sheath · value add: **flow by animation** (propagation is the
   subject and the book draws five frozen stages of it) and **variation by
   slider** (the sheath is what makes the difference, and the reader sets
   its length and watches the speed and the loss answer) · **moving**: the
   impulse travels the length of the strip, the depolarized patch moving
   with it, and each crossing is one cycle of the app's transport ·
   slider $\kd$ (0.2 to 2 mm, default 1.0, position, the sheath's length,
   held out of the way on the bare membrane); a choice of the bare membrane
   or the myelinated axon · headline: "On the myelinated axon the pulse
   runs through each 1.0-mm sheath losing voltage and is regenerated at full
   height in the node, so it crosses about twenty times faster than the bare
   membrane does." · graph: none; the strip with its charge layers, the
   moving pulse and the sheaths are the picture · 2D, tier: moving
   simulation. The true crossing takes 20 ms on the bare membrane and one
   millisecond on a myelinated axon, which is too quick to watch, so the
   drawing slows both and slows the fast one more; the readout states the
   true speed and the time the drawing takes over it (rule 28.4). Readout:
   the speed in metres per second and the voltage the pulse carries at the
   point it has reached. Draws voltage, charge,
   position and time.
5. `fig-eel` · photograph, Figure 20.29, kept with the book's caption and
   its credit (`config.md`: the passage names the electric eel) · no
   sliders, no animation.
6. `sim-ecg` · replaces Figure 20.30 + 20.31, folded (the depolarization
   vector crossing the heart with its three electrodes, and the lead II
   trace with the arterial blood pressure beneath it; one heartbeat drives
   both, and the eyebrow reads both numbers) · electrocardiogram · value
   add: **flow by animation** (the trace is written by the wave, and seeing
   the P wave appear as the atria depolarize is the whole lesson) and
   **variation by slider** · **moving**: a heartbeat is a period, the wave
   crosses the heart while the trace is drawn under it, and the cycle is one
   beat, so the figure takes the app's transport · slider the heart rate
   (40 to 160 beats per minute, default 80, in ink, since a rate of beating
   is a frequency the page does not draw as one and `COLOR.md` binds no
   frequency here); a choice of the lead, I, II or III, which changes which
   component of the vector is traced · headline: "At 0.16 s the wave is
   crossing the ventricles, the lead II potential is at the R peak of 1.0
   mV, and the systolic pressure follows a moment later." · graph: the
   lead potential against time, axes fixed at 0 to 1.5 s and −0.5 to 1.2
   mV, with the arterial pressure on a second frame fixed at 60 to 140 mm
   Hg and drawn in ink on a dashed stroke, since `COLOR.md` binds no
   pressure on this page and the pressure here is the context the trace is
   read against rather than a quantity the section teaches · 2D, tier:
   moving simulation. Readout: the lead potential now, the
   beat's period and the rate, and the pressure. Draws voltage and time.
7. `sim-electrodes` · replaces Figure 20.32 · electrocardiogram · value
   add: **standardisation** and **variation** (the page has just told the
   reader that the three-electrode ECG of decades ago became the twelve
   leads of today, and the one drawing that shows both is worth more than
   either) · **still**: where the electrodes sit does not change with time;
   no cycle, no transport · a choice of the three-electrode placement or
   the twelve-lead placement, and, on the first, a choice of which lead is
   drawn across the body · headline: "Lead II runs from the right arm to the
   left leg, which is the pair most often graphed." · graph: none · 2D,
   tier: still simulation. Readout: the electrodes on the chest and on the
   limbs, counted, and the pair the chosen lead reads. Draws voltage.

Every figure is legible with colour off: the ions are told by their labels
and by the direction they move, the charge layers by their plus and minus
signs, the two traces of `sim-ecg` by a solid and a dashed stroke as well as
by their hues, and the myelinated state by the sheaths drawn on the axon.
Labels are on by default in all six simulations; the only figure whose
labels would crowd is `sim-membrane`, where the ions are many and small, and
there the kinds are labelled once in a legend and the individual ions carry
hover names (rule 26.6 and 26.7).

No extra simulation survived the test of rule 15. A sodium-potassium pump
turning over ion by ion would replay a mechanism the book states in one
sentence and draws nowhere, which rule 24.9 refuses; a twelve-lead display
with twelve traces would need vector components the book does not give.

## Exercises

Three conceptual questions (cq1, cq2, cq3) and the two problems the book
keys, which become p1 and p2. All go to the Exercises document: the section
prints no Check Your Understanding box, so nothing is inline and `text.html`
carries no exercise host.

The book's second problem, the lag of systolic pressure behind the QRS
complex, is unkeyed and is left out and named in `notes`. The three
conceptual questions are open items with AI-marked suggested approaches. p2,
the Critical Thinking problem, stays in 20.7 as the book prints it
(`config.md`) and is tagged to 20.3's `resistivity`,
`resistance-and-temperature` and `resistance-of-cylinder` and 20.4's
`electric-power` as well as to this section's own concepts; it is cited
against the `myelin` span, the one place on the page where a resistance and
an $\text{IR}$ loss are spoken of, and its key is kept verbatim, including
the book's slip of writing $3.25\times 10^{-3}$ J/s for a stem of 3.25 MJ,
which `notes` records.

## Tables

None. The section prints no numbered table and no unnumbered one.

## Wanted at chapter level

Anchors, `<row id> → <anchor>`:

- ΔV_volt (variable row, section 20.7) → 20.7-resting-potential
- d (variable row, section 20.7) → 20.7-resting-potential

No equation row belongs to this section, and the chapter's tables carry
none for it. No concept or symbol fix is wanted: the five concept rows and
the two variable rows read correctly as the prep pass wrote them, and the
symbols `ΔV_volt`, `d`, `E_field`, `I_curr` and `R_res` are used as
`ch20/config.md` stages them.

Applied in the chapter pass of 2026-09-15. Both variable anchors above were
written to `ch20/chapter.json`.

One figure row was corrected: `sim-ecg` shades the depolarized part of the
heart in the charge hue and so draws `charge`, which its `draws` column did
not list. The page already binds charge for `sim-membrane` and `sim-impulse`,
so `ch20/COLOR.md` is unchanged.

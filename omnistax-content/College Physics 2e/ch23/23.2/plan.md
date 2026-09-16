# Plan: 23.2 Faraday's Law of Induction: Lenz's Law

Module m42392. Written before the page was built, left for review after, as
`ch23/config.md` records. Root rules cited by number.

## Sub-concepts and headers

The module prints two headers of its own and `config.md` keeps them as the book
writes them, so the page has two spans and no header of the agent's:

1. `faradays-and-lenzs-law` — **Faraday's and Lenz's Law**. The three factors
   Faraday found, the law itself, the minus sign, Figure 23.7, and the
   Problem-Solving Strategy for Lenz's Law as the book's own numbered list.
2. `applications` — **Applications of Electromagnetic Induction**. Tape and
   hard disks, the magnetic stripe, the cochlear implant, transcranial magnetic
   stimulation and the apnea monitor; then the Making Connections box on
   conservation of energy and Example 23.1, both of which the book stands here.

The dropped PhET link sat between the example and the section summary.

## Concept nodes

Six, all already in `book.json` from the prep pass. Introduced:
`faradays-law`, `turns-multiply-emf`, `lenzs-law` and `apply-lenzs-law` in
`faradays-and-lenzs-law`; `lenz-from-energy-conservation` and
`induction-applications` in `applications`. Used: `magnetic-flux`,
`induction`, `flux-and-orientation` and `ways-to-change-flux` from 23.1,
`right-hand-rule-2` and `magnetic-field` from Chapter 22, `emf` from 21.2,
`electric-current` from 20.1 and `conservation-of-energy` from 7.6. Every node
has a book exercise of its own except `induction-applications`, which the
module tests only through its first conceptual question; no question is
generated for it.

## Figures

```
sim-lenz · Figure 23.7 · lenzs-law, apply-lenzs-law, faradays-law, induction · value add: animation and variation (the reader would otherwise have to imagine the magnet moving and imagine the flux rising and falling with it, which is the whole of the minus sign) · moving: the magnet travels in, is held still inside, travels back out and is held still far away, one cycle of 5.0 s, because induction is a rate and the dwell is the lesson — a magnet held inside the coil induces nothing · choice: the pole facing the coil (N, S); sliders: N the turns (ink), \kBmag the strongest field the magnet puts through the coil (magnetic-field) · headline: which way the flux is changing, which way the induced field points and which way the current runs, with the emf in millivolts · graphs below the scene, two panels sharing the time axis: \kPhi against t and emf against t · 2D: the book draws it flat, a magnet on the axis of a coil is an arrangement along one line and nothing about it is hidden by depth (rule 28.1)
sim-faraday · Sim · faradays-law, turns-multiply-emf, magnetic-flux · value add: variation by slider (Faraday's three factors, one slider each) and standardisation of a computation the book prints only as a chain of numbers · still: the two states of Example 23.1 are a before and an after, not a process with a clock, and nothing here registers a cycle · sliders: N the turns (ink), the change \Delta(B\cos\theta) (magnetic-field), \Delta t (time) · headline: the emf the three factors come to, in millivolts · graph below the scene: \kPhi against t, a ramp from the first flux to the second whose slope is \kdPhi/\kdt, with the two changes bracketed · 2D
fig-cochlear · photograph, Figure 23.9 · kept: the passage is about the implant and points at it ("Consider the cochlear implant shown below") · width 200
```

Figure 23.8, the photograph of tape recording and playback heads, is **dropped**
as decoration for a technology the reader has not used; `config.md` names it and
`notes` says so. The two unnumbered images inside the problem set are kept the
second of the book's two ways (`config.md`): they travel on the `figure` field
of the cards that refer to them, `Figure_24_02_04-3a94.jpg` on the first problem
and on the integrated-concepts problem about the distance from the wire, and
`Figure_24_02_05.jpg` on the problem about the three coils and the switch.

Both figures answer rule 24.7 with a readout that writes
$\text{emf} = -N\Delta\Phi/\Delta t$ in the type colours with the live numbers.
Labels are on by default in both (rule 26.7): four entity names in `sim-lenz`
and three in `sim-faraday`, each drawn in a band of its own that no slider
position reaches, none of them riding on the magnet as it travels.

## Types the page binds

`magnetic-flux`, `magnetic-field`, `voltage`, `current` and `time`, which is
exactly what `ch23/COLOR.md` gives the page. The flux never wears the field's
hue: the field lines are drawn in the field hue in the space around the magnet
and in the flux hue where they pass through the coil's opening. The number of
turns $N$, the coil's radius, the magnet's travel and the angle are untyped and
in ink, as is every frame and axis title.

## Photographs

One kept (Figure 23.9, the cochlear implant), one dropped (Figure 23.8, the tape
heads).

## Tables

None; the module prints no table.

## Exercises

Two conceptual questions and twelve problems, none of them moved and none of
them inline, since the module prints no Check Your Understanding box. Of the
twelve problems the book keys five, and those five are kept: the direction of
the current in coil 2, the directions in the three coils around a switched
electromagnet, the emf induced in an MRI technician's wedding ring, the emf of a
1000-turn coil turned in the Earth's field, and how the emf in a loop beside a
long wire falls off with distance. The seven unkeyed problems are left out and
named in `exercise_notes`. The two conceptual questions get AI-written suggested
approaches, marked as such. No AP item belongs to this section.

The book leaves `type=` empty on the problem about the 1000-turn coil turned in
the Earth's field, the ninth in the module's problem set; it sits under
**Problems & Exercises** and is classed a problem by that header, as
`config.md` and the book's own rules require, and `notes` says so.

## Wanted at chapter level

Anchors, one row per line:

- `eq-faradays-law` → `23.2-faradays-and-lenzs-law`
- `ΔΦ` → `23.2-faradays-and-lenzs-law`
- `Δt` → `23.2-faradays-and-lenzs-law`
- `emf` → `23.2-faradays-and-lenzs-law`
- `N_count` → `23.2-faradays-and-lenzs-law`

No concept row and no symbol row needs a correction for this section: the six
concepts read correctly, and `Φ`, `ΔΦ`, `emf`, `N_count`, `Δt` and `B_mag` are
all staged or already in the book with the types this page draws them in.

### Decided by the chapter pass (2026-09-16)

- The one `equations` row and all four `variables` rows are anchored to
  `23.2-faradays-and-lenzs-law`, as asked. No concept or symbol row needed a
  correction.
- Figure 23.8, the tape heads, is the one number of the chapter with no row,
  and this section's `notes` says so; the chapter pass confirms that no other
  number is missing.

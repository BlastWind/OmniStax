# Plan: 32.3 Therapeutic Uses of Ionizing Radiation

Written before the page was built (root rule 5), under `ch32/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints one header, Medical Application, over everything after the
opening paragraph. The opening is the module's own introduction and stays as
the first block under an OmniStax header; the Medical Application header keeps
the radium history and Figure 32.8, and the narrative it runs on into continues
under OmniStax headers, one per technique, as 32.1 does.

| Span | Header | What it holds |
|---|---|---|
| `radiotherapy` | Radiotherapy (OmniStax) | The section's introduction: radiotherapy defined, cancer therapy |
| `medical-application` | Medical Application | The book's header: radium cosmetics, elixirs and mine tours; Figure 32.8 |
| `crossfire` | The therapeutic ratio (OmniStax) | Sensitivity of cancer cells, the therapeutic ratio, the rotating source of Figure 32.9, accelerator beams |
| `implants` | Implants and radiopharmaceuticals (OmniStax) | Radioactive seeds, thyroid iodine, tagged antibodies |
| `therapeutic-doses` | Therapeutic doses (OmniStax) | Fractionated doses, Table 32.7, chemotherapy |

## Concepts

All four are the prep pass's rows; the page adds none.

| Concept | Introduced in |
|---|---|
| `radiotherapy` | `radiotherapy` |
| `therapeutic-ratio`, `crossfire-beams` | `crossfire` |
| `therapeutic-doses` | `therapeutic-doses` |

Earlier concepts used: `ionizing-radiation` (31.1) in `radiotherapy` and
`medical-application`; `nuclear-radioactivity` (31.1) in `medical-application`;
`radiation-damages-dna`, `dose-equivalent-rem-and-sievert`,
`relative-biological-effectiveness` (32.2) in `crossfire`; `half-life` (31.5),
`alpha-decay` (31.4), `range-of-radiation` (31.1),
`radiopharmaceuticals-and-tagging` (32.1) in `implants`;
`immediate-effects-and-dose-levels`, `rem`, `sievert` (32.2) in
`therapeutic-doses`. `therapeutic-ratio` is reinforced in `implants`.
`crossfire-beams` and `therapeutic-ratio` have no book exercise of their own;
the figure carries them.

## Types the page binds

`dose` (the 200-rem treatments, Table 32.7's doses named in prose, the figure's
dose map, profile and readout), `position` (the tumor's width $\kd$ and the
profile's $x$), `angle` (the arc $\ktheta$ the source sweeps and the arc
$\kdtheta$ from which a patch of skin is crossed), `time` (the 6-month and
3-month half-lives in prose). RBE and QF are ratings and stay in ink. The
dose map is one scalar over a region, drawn in the dose hue at an opacity
proportional to the dose, on one scale with its legend (rule 7.1).
Conventions: the γ beam `F.el('gamma')`, the ⁶⁰Co capsule `F.el('Co')`.
Referent: `tumor`, the tumor the crossfire paragraph and Figure 32.9's caption
point at, drawn with `F.ref`.

## Figures

```
photo-radium-ad · Figure 32.8 · kept photograph: the text points at it ("as seen in Figure 32.8") and the Medical Application passage is about it · arrows: none · still · 2D
sim-crossfire · Figure 32.9 · crossfire-beams, therapeutic-ratio · value add: flow by animation (the ⁶⁰Co source turns about the patient with its beam always through the tumor, and the dose builds up in the chest as it turns: the tumor stays in the beam the whole time, each patch of healthy tissue only while the beam sweeps across it, so the map ends bright at the crossing point and faint everywhere else, which the book's frozen three positions leave to the imagination) and variation by slider (the arc swept, down to zero, where one fixed beam gives every patch on its path the tumor's whole dose; the tumor's width, since the beam is as wide as the tumor and a wider beam crosses each patch of skin for longer, the book's "works for well-defined tumors") · arrows: kinematic (the source's path round the patient; the γ rays leaving the source) · moving: the source sweeps its arc in 5 s on a clock, the γ rays travel along the beam, the dose accumulates, hold 1.2 s with the beam off; the treatment is a dose delivered over time (rule 14) · sliders: θ (angle, the arc the source sweeps, 0 to 360°, default 360°, the book's full turn), d (position, the tumor's width and the beam's, 1.0 to 8.0 cm, default 3.0 cm); the tumor's dose per treatment is the text's 200 rem, 2.00 Sv, fixed · headline: "Swept through $\ktheta = 360^\circ$, the beam never leaves the tumor, but crosses each patch of skin for at most $\kdtheta = 38^\circ$." (one beam: "From one fixed direction the beam gives the tissue all along its path the tumor’s whole dose.") · readout: $\kdose_\text{skin} = \frac{\kdtheta}{\ktheta}\kdose_\text{tumor}$ with the numbers for the most exposed patch of skin, e.g. $\frac{38^\circ}{360^\circ}(2.00\ \text{Sv}) = 0.21$ Sv; at θ = 0 it becomes $\kdose_\text{skin} = \kdose_\text{tumor} = 2.00$ Sv (a new form, so the formula morphs); note: tissue just outside the tumor is in the beam from almost every direction, so its dose stays close to the tumor's · graph beside (the scene is round): the dose along the line $x$ through the tumor, 0 to 2.5 Sv against $x$ from −15 to 25 cm, fixed, the live profile solid in the dose hue over the treatment's end profile dashed, the tumor's band shaded · 2D: a cut through the patient in the plane the source turns in; every beam lies in that plane, so the cut holds the whole crossfire (rule 28.1), and a 3D body round it would add no relation the cut lacks (rule 28.5); no locked view
```

Labels. `sim-crossfire`: "tumor" once, leadered, in the referent's colour;
"table" once; the source moves, so it carries no label (rule 26.7) and is named
by hover and in the legend with the γ beam; the dose scale is a legend bar under
the graph; the most exposed patch of skin is a hollow marker named by hover.
Hover names carry the chest, the source, the beam, the table, the profile line
and the marker. The orbit is drawn closer than a real unit's (about 80 cm) so
the patient fills the cut; the beam is drawn parallel-sided and unattenuated,
as the text treats it.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_33_03_01a-7e5b.jpg` (32.8, the Undark advertisement) | kept, photo row | the text points at it |
| `Figure_33_03_02a-2692.jpg` (32.9, the rotating source) | original of `sim-crossfire` | sketch replaced |

## Tables

Table 32.7 Cancer Radiotherapy stays a `div.book-table` with the book's eyebrow
and title.

## Extra simulations considered

- Fractionation, dose by dose over weeks with normal tissue repairing between
  treatments. Left: the text gives no repair rate, so the curve would be invented.
- Table 32.7's doses as bars against the whole-body doses of Table 32.4. Left:
  standardisation alone (rule 24.4); the table reads as well as a chart would.

## Exercises

| Kind | In the book | Set here | Elsewhere |
|---|---|---|---|
| Conceptual question | 1 | 1 (AI suggested approach) | — |
| Problem | 10 | 5 keyed: `fs-id2422392`, `fs-id1537567`, `fs-id2397941`, `fs-id954847`, `fs-id2673962` | 5 unkeyed left out: `fs-id1940974` (ion pairs in food, a 32.4 topic), `fs-id1472996`, `fs-id1471930`, `fs-id2683352`, `fs-id2683346` |

Errata kept as printed and named in `notes`: "¹³⁵I (6-month half life)" in
`implants`; the stray "N" after $1.3\times10^{-12}$ in `fs-id2673962`.

## Wanted at chapter level

- variables row `32.3/dose` (type `dose`, concept `dose-equivalent-rem-and-sievert`): the dose the tumor and the skin receive in a treatment, in Sv; the readout writes $\kdose$
- variables row `32.3/θ` (type `angle`, concept `angle`): the arc the ⁶⁰Co source sweeps about the patient
- variables row `32.3/Δθ` (type `angle`, concept `angle`): the arc of the source's path from which the beam crosses a patch of skin
- variables row `32.3/d` (type `position`, concept `position`): the width of the tumor, and of the beam collimated to it

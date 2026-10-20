# Plan: 10.1 Ion traps

Source: `source.md` (PDF pages 217–219, Eq. 10.1, Figures 10.1–10.2, no footnotes). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

The section has no subsections or run-ins (config): one block, `ion-traps`, with no `<h2>`, holding the three paragraphs, Eq. (10.1) and both figures. Each figure stands after the paragraph that cites it (the book sets both after the Paul-trap paragraph, on the page after); Figure 10.1 between the Penning and Paul paragraphs, Figure 10.2 at the end.

## Concepts (5, prep-merged)

| concept | introducing span |
|---|---|
| ion-trap-principle | `static-minimum` ("one cannot create a static electric field minimum, an ion cannot be confined using static electric fields") |
| penning-trap | `penning` ("The Penning trap") |
| quadrupole-potential | `quadrupole` ("a quadrupole electric field") |
| paul-trap | `paul` ("The Paul trap") |
| micromotion | `micromotion` (“micromotion”) |

Forms: eq-10-1 → `10.1-eq-10-1`, eq-10-laplace → `10.1-laplace` (the inline α + β + γ = 0).

Concept spans, judged per mention: "Penning trap", "cyclotron motion" (twice: the charged particle's and the ion's usual one), "magnetron motion" wear `penning-trap`; "Paul trap" wears `paul-trap`; “micromotion” `micromotion`; "quadrupole electric field" `quadrupole-potential`. Plain: "traps", "trap" (the trap in general or the Paul trap's potential in "the motion of the trap", "the center of the trap"), "confining", "repulsive potential", "endcaps", "the Coulomb force" (no concept in the book).

## Symbols and variables

Eq. (10.1)'s Φ, φ₀, α, β, γ stay untyped and in ink, as in prep (no rows). The figures' readouts need typed frequencies the text does not name, so five new book symbols (staged in `ch10/book-rows.json` through `ost add`), each a 10.1 variables row of type frequency with no concept (a frequency of the motion names no concept of the book), anchored at its figure: `omega_c` (ω_c, \komegac, cyclotron frequency eB/m), `omega_plus` (ω₊, \komegaplus, the ion's cyclotron frequency in the trap), `omega_minus` (ω₋, \komegaminus, magnetron), `omega_z` (ω_z, \komegaz, axial), `Omega_RF` (Ω_RF, \kOmegaRF, the Paul trap's drive). Rows reusing earlier meanings: `B` (magnetic field, the Penning trap's) and `t` (time).

## Referents

None. The ion of each figure is the only thing drawn and the text names it only generally ("the ion").

## Figures

Both book figures are rasters of unstated origin (10.2 a scanned J. Appl. Phys. figure, with that journal's own caption): never copied, no `originals`, no `original_caption`. Each figure recomputes the idea from the model, keeps its number and sets `withheld`.

- sim-penning · Figure 10.1 · penning-trap, ion-trap-principle, quadrupole-potential · animation and variation: a ⁹Be⁺ ion traces the sum of its three motions, r = R₊e^{−iω₊t} + R₋e^{−iω₋t}, z = Z cos ω_z t, and the reader watches the fast cyclotron loops ride round the slow magnetron circle while the ion bounces along B; the book's still shows the shape of the path but not that the three run at three very different rates, nor how B and the endcap voltage set them (raise B and the loops quicken while the magnetron circle slows; raise the voltage and the bounce and the magnetron drift both quicken) · arrows: kinematic (the ion's path, traced as it goes), symbolic (B, four field arrows) · moving: the ion runs once round the magnetron circle, playback slowed so the loops stay visible (5 to 12 s); transport · sliders B (magnetic-field, 0.8 to 1.6 T, default 1.4) and endcap voltage U₀ (untyped, 0.4 to 1.2 V, default 0.6; the defaults give some seventy cyclotron turns per magnetron circle, the dense coil of the book's drawing), d = 1 mm; ranges chosen so the trap is stable throughout (ω_z² < ω_c²/2, a limit the book does not teach, so no special) · headline states the live number of cyclotron loops per magnetron orbit and of axial bounces · graph none · 2D, locked perspective (root 28.2): the book prints the path in perspective, so `view()` projects it from a fixed viewpoint above the magnetron plane; nothing in it needs an orbit. Endcaps as two shaded discs above and below, B arrows beside. Labels: "magnetron" on the fixed dashed guiding circle, "cyclotron" on one fixed loop of the faint full path, "axial" on a bracket at the side, each with its frequency symbol; the moving ion is unlabelled, named by hover and the headline. Readout: ω₊ + ω₋ = ω_c = eB/m with live numbers (in 2π × MHz); note: the endcaps' potential is Eq. (10.1) with α = β = −1, γ = 2 (α + β + γ = 0), confining along B at ω_z, and 2ω₊ω₋ = ω_z². Conventions: `Be`.
- sim-paul · Figure 10.2 · paul-trap, micromotion, quadrupole-potential, ion-trap-principle · 3D visualisation, animation and variation: Eq. (10.1)'s saddle, α = −β = cos Ω_RF t, γ = 0, drawn as the surface Φ(x, y) over the radial plane and flipping at the drive frequency, with a ⁴⁰Ca⁺ ion riding it from rest off centre; the reader sees the ion jitter at the drive (micromotion) on top of a slow swing that stays near the centre, and with the strip beneath sees that it is farthest out when its direction confines (shaded) and nearest when it repels, the book's "180 degrees out of phase"; slow the drive and the ion is thrown out, hold the saddle still (Ω_RF = 0) and it rolls off along y, which is the section's opening claim · arrows: kinematic (the ion's motion), none symbolic · moving: the saddle flips and the ion moves over one slow swing (or until it leaves), playback slowed so the flips stay under about 2.5 per second; transport · slider Ω_RF/2π (frequency, 0 to 16 MHz, default 10; special 0, "static", the static field the text says cannot trap) · headline names the live slow-swing frequency, or that the ion is lost · graph below: x(t) solid and y(t) dashed in μm, −8 to 8 μm, over the same time, the half-cycles in which x confines shaded · 3D, mathematical class (root 28.3: a potential drawn as a surface; the book's RULES: the Paul trap's saddle is mathematical 3D): free orbit, no ground, no spin or zoom buttons (the saddle already moves and nothing is fine; the wheel still zooms), no snap view. Labels: axes x, y and Φ; the ion is unlabelled while it moves, named by hover and a legend line in the strip. Readout: Eq. (10.1) with α = −β = cos Ω_RF t, γ = 0; note: the live Ω_RF and the slow swing's frequency (from the Mathieu equation the motion obeys, computed exactly by the figure) beside the drive. The saddle's curvature is fixed so that held still it would swing the ion at 2π × 4 MHz along the confining direction; the trap fails below Ω_RF ≈ 2π × 5.9 MHz (q = 0.908), not a value the text names, so no special. The book's own figure draws the electrodes of a linear trap; the radial plane here is its panel (b), and the endcaps it adds are named in the caption. Without WebGL a flat canvas draws the radial plane from above. Conventions: `Ca`.

`draws`: sim-penning `magnetic-field`, `frequency`; sim-paul `frequency`, `length`, `time`.

### Extra sims (root 15), not built

- The rotating saddle the paragraph's words describe: the same surface turning at Ω_RF/2 instead of flipping, a ball held on it by the same averaging (Paul's own mechanical model), beside the flipping trap. It reconciles "rotates" with the Paul trap, but the correction note does that in a sentence.

## Exercises

None (prep, config).

## Lead draft (AI-marked)

> Why an ion cannot be held by static electric fields alone, and the two traps that get round it: the Penning trap, which adds a magnetic field to charged endcaps, and the Paul trap, whose quadrupole potential oscillates at radio frequency.

## Objectives, summary, notes

`objectives` and `summary_html` empty. `notes`: none beyond the withheld images, which the figure rows carry.

## Book faults kept verbatim

- "LaPlace’s equation" (capitalisation).
- "so that when the is near the center of the trap" (a missing word).
- "the position of the atom", "when the atom is far" (ion).
- Figure 10.1's "illustrated below" (drawn beside), and both captions' stray "." lines: the original captions are not shown (withheld).

## Corrections

| id | attaches to | the book prints | note |
|---|---|---|---|
| c-rotates | "rotates this potential in time" | rotates | A Paul trap does not turn its potential: the drive reverses its sign at the radio frequency, α = −β = cos Ω_RF t in Eq. (10.1), so the confining and repulsive directions swap each half-cycle, which is the oscillation the rest of the paragraph describes. A saddle that rotates confines by the same averaging and is the mechanical model of the trap. |

## Wanted at chapter level

- Five new symbols for the figures (ω_c, ω₊, ω₋, ω_z, Ω_RF); 10.2 writes the trap frequency as ν, which is the secular frequency the Paul figure's note computes. The chapter pass may want the note to name it ν.

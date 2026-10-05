# Plan: 33.3 Accelerators Create Matter from Energy

Written before the page was built (root rule 5), under `ch33/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints two headers, Early Accelerators and Modern Behemoths and
Colliding Beams, kept as they stand. The opening paragraph before the first is
the section's own introduction, under an OmniStax header. Example 33.2 is an
`<h3>` span of its own.

| Span | Header | What it holds |
|---|---|---|
| `matter-from-energy` | Creating matter from energy (OmniStax) | Beams on targets, $\km = \kdE/\kc^{2}$, conservation laws as limits |
| `early-accelerators` | Early Accelerators | The Van de Graaff and Figure 33.7, the cyclotron and Figure 33.8, the synchrotron and Figure 33.9, synchrotron radiation |
| `colliding-beams` | Modern Behemoths and Colliding Beams | Recoil and colliding beams, antimatter beams, Figure 33.10 + 33.11, detectors, Tevatron, LHC, SSC, SLAC and LEP |
| `gap-voltage` | Example 33.2 · Calculating the Voltage Needed by the Accelerator Between Accelerating Tubes | 800 MeV over 2000 gaps, 400 kV |

## Concepts

All nine are the prep pass's rows; the page adds none.

| Concept | Introduced in |
|---|---|
| `accelerators-create-matter` | `matter-from-energy` |
| `van-de-graaff`, `cyclotron`, `van-de-graaff-and-cyclotron`, `synchrotron`, `synchrotron-radiation` | `early-accelerators` |
| `colliding-beams`, `linear-accelerator` | `colliding-beams` |
| `accelerator-gap-voltage` | `gap-voltage` |

Earlier concepts used: `mass-energy-equivalence` (28.6), `rutherford-scattering`
(30.2), `alpha-rays` (31.1), `conservation-of-energy`, `conservation-of-momentum`,
`conservation-of-charge` in `matter-from-energy`; `potential-difference`,
`energy-from-potential-difference` (19.1), `electric-field` (18.4),
`magnetic-field` (22.3), `circular-motion-in-a-magnetic-field`,
`radius-of-curvature` (22.5), `magnetic-force-on-a-moving-charge` (22.4),
`frequency`, `superconductivity` (20.3), `electromagnetic-wave` (24.1) in
`early-accelerators`; `wavelength`, `recoil`, `kinetic-energy`, `antimatter`,
`positron` (31.4) in `colliding-beams`; `electric-potential-energy`,
`electron-volt`, `electric-charge` in `gap-voltage`.

## Types the page binds

`energy` ($\kdE$, $\kPE$, $\kKE$, beam and collision energies), `mass` ($\km$),
`voltage` ($\kVgap$, the 50 MV of a Van de Graaff), `charge` ($\kq$),
`magnetic-field` ($\kBmag$, the ⊗ marks), `electric-field` (the gap arrows of
33.8 and 33.9, which the book draws), `velocity` ($\kv$, $\kc$), `position`
($\krad$, the ring radius), `time` (the cyclotron's time axis). The Lorentz
factor $\gamma$ is ink. Conventions: `F.el('p+')`, `F.el('e-')`, `F.el('e+')`;
the antiproton is the proton's hue as an open marker with its bar in the
legend. Referents (`ch33/COLOR.md`): `dees` (the cyclotron's two Ds),
`tubes` (the synchrotron's accelerating tubes), `tevatron` (the Fermilab
rings) and `slac` (the Stanford Linear Accelerator, which the text and 33.11
both name), each drawn with `F.ref` and marked `data-ref` in the text.

## Figures

```
photo-van-de-graaff · Figure 33.7 · van-de-graaff · kept: an artist's drawing of the object the text points at; nothing in it moves or varies that the reader must imagine (rule 24.3) · arrows: none · still · no controls · no headline · none · 2D
sim-cyclotron · Figure 33.8 · cyclotron, van-de-graaff-and-cyclotron, accelerator-gap-voltage · value add: flow by animation (the proton spirals out half turn by half turn while the gap voltage alternates at one fixed frequency, the E arrows reversing between crossings), variation by slider (the gap voltage sets how much each crossing adds and so how many turns the proton makes before it reaches the rim) and a graph the book lacks (energy against time, a staircase of equal steps at equal intervals) · arrows: kinematic (the dashed spiral of the beam and the external beam leaving the rim) · moving: the proton on a clock in ns, linear, 70 ns a second; each half turn takes 32.8 ns (B = 1.00 T), the gap 3 ns of it; the voltage is V_gap cos 2πt/T, the "+" and "−" of each D above it; hold 1.2 s · slider: V_gap (voltage, 100 to 300 kV, step 10, default 150 kV, which gives the book's four turns; the protons leave at 1.20 MeV, r = 0.158 m, so the crossings are the whole number below 1.20 MeV/qV_gap, 12 down to 4) · headline: "The gap voltage reverses every half turn, so the proton gains $\kq\kVgap = 150\;\text{keV}$ at each of its 8 crossings." · readout: $\kKE = n\,\kq\kVgap = 5 \times (1\,e)(150\;\text{kV}) = 750\;\text{keV}$, n the crossings so far; note: every half turn takes the same 32.8 ns, small circle or large (the equal steps make it visible) · graph beside (the dees are round): KE 0 to 1.40 MeV against t 0 to 450 ns, fixed (12 crossings end at 361 ns, the exit at 410 ns), the staircase traced in energy over its dashed whole · 2D, the book's own top-down plan of a flat machine (rule 28.1)
sim-synchrotron · Figure 33.9 · synchrotron · value add: flow by animation (the proton circles a ring of eight accelerating tubes; while it is inside a tube every tube's polarity reverses, so it is pushed forward at every gap, the book's (b) and (c) as one moving state) and variation by slider (a faster proton circles sooner, so the reversals come faster, and needs a stronger field to stay on the same radius; a larger ring needs less) · arrows: symbolic in the book (the E arrows of (b) and (c)); the proton's circling is the motion the text describes, "the same distance in a shorter time with each cycle" · moving: the proton circles at an angular rate proportional to v, one turn at c taking 1.2 s, linear, seamless loop; the tube signs and gap arrows follow cos 4θ of the proton's own angle, so the reversal rate rises with v · sliders: v (velocity, 0.20 to 0.99 c, step 0.01, default 0.60 c), r (position, 5.0 to 50.0 m, step 0.5, default 10.0 m); no numbers in the book for this figure · headline: "The tubes reverse while the proton is inside one, so every gap pushes it forward; a faster proton needs faster reversals and a stronger field." · readout: $\kBmag = \frac{\gamma\km\kv}{\kq\krad} = \frac{(1.25)(1.67\times10^{-27}\;\text{kg})(1.80\times10^{8}\;\text{m/s})}{(1.60\times10^{-19}\;\text{C})(10.0\;\text{m})} = 0.235\;\text{T}$ (22.5's radius with 28.5's relativistic momentum), γ and v rounded to three figures and B computed from them; note: one turn takes $2\pi\krad/\kv$ · graph beside: B 0 to 5 T against v/c 0 to 1, fixed (r = 5 m at 0.99 c needs 4.4 T), the curve for the present r with the present point · 2D, a ring read from above (rule 28.1)
sim-colliders · Figure 33.10 + 33.11 · colliding-beams, linear-accelerator, accelerators-create-matter · value add: flow by animation (the book's coloured arrows of motion become bunches: protons and antiprotons circling the Tevatron in opposite directions, electrons and positrons down the SLAC linac and round its two arcs, meeting head-on in the detector) and variation by choice (ring or linac, and the energy each makes available) · arrows: kinematic (the beams' directions of travel in both schematics) · moving: bunches on a clock of one 4-s pass, linear, the burst in the detector at the end, hold 1.2 s · choice: machine (Fermilab | SLAC), the scene crossfading · headline: "The two beams meet head-on in the detector, where their total momentum is zero." · readout: $\km = \frac{\kdE}{\kc^{2}} = \frac{2(1\;\text{TeV})}{\kc^{2}} = 2\;\text{TeV}/\kc^{2}$; no note · graph none; a scale bar in km under each machine (2.00 km across the Tevatron, 3.2 km of linac) · 2D, the book's plan views (rule 28.1)
```

Labels on `sim-cyclotron`: "B" beside one ⊗, "E" above the gap, "external beam"
at the end of its line; the dees carry the "+"/"−" of their potential, which
flip. The proton moves, so it carries no label: a legend names p⁺ and the
velocity arrow $\kv$; hover names carry the dees, the gap, the field, the AC
source and the proton.

Labels on `sim-synchrotron`: "E" beside one gap, "B" beside one ⊗, "r" on the
radius line; eight "+"/"−" signs beside the tubes, fading through each
reversal. The proton moves and carries no label; the legend names p⁺ and $\kv$.

Labels on `sim-colliders`: Fermilab "proton source", "antiproton source",
"Tevatron ring", "collision detector"; SLAC "linear accelerator",
"Mark II detector", "electron and positron sources". The bunches move and
carry no labels; the legend names p⁺ and p̄, or e⁻ and e⁺.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_34_03_01.jpg` (33.7) | kept as a photo row | the text points at it; a drawing of an object |
| `Figure_34_03_02.jpg` (33.8) | original of `sim-cyclotron` | sketch replaced |
| `Figure_34_03_04.jpg` (33.9) | original of `sim-synchrotron` | sketch replaced, (a)(b)(c) one scene |
| `Figure_34_03_05.jpg` (33.10), `Figure_34_03_06.jpg` (33.11) | originals of `sim-colliders` | schematics replaced, folded |
| `Figure_34_03_03.jpg` | not in the module's text | unused by the book |

## Extra simulations considered

- Fixed target against colliding beams, the recoil taking its share. Left: the
  available energy of a fixed target at these energies needs the invariant
  mass, which the book never teaches.
- Example 33.2 as a linac of 2000 gaps. Left: it adds no quantity the cyclotron
  readout ($n\,q V_{\text{gap}}$) does not show.

## Exercises

| Kind | In the book | Set here | Left out or moved |
|---|---|---|---|
| AP | 6 | 2 keyed: `fs-id1719206` (c), `fs-id1683776` (d); 3 open with AI approaches: `fs-id2642532`, `fs-id2432948`, `fs-id2029704` | `fs-id2783273` (keyed (a), needs Table 33.2) held for 33.4 |
| Conceptual | 4 | 4 open with AI approaches | — |
| Problem | 7 | 4 keyed: `fs-id1169737758220` (2.09 × 10⁻⁵ s, 4.77 × 10⁴ Hz), `fs-id1169737967042` (78.0 cm), `fs-id1169738163978` (1.40 × 10⁶), `fs-id1169738093631` (100 GeV) | 3 unkeyed: `fs-id1169737814503`, `fs-id1169737946496`, `fs-id1169738006665` |

No Check Your Understanding box, so no inline host. Erratum carried: the key
of `fs-id1719206` reads "(c), though this comes from Einstein's special
relativity".

## Wanted at chapter level

- `eq-mass-from-energy-33` → 33.3-matter-from-energy
- `eq-gap-energy` → 33.3-gap-voltage
- `eq-gap-voltage-example` → 33.3-gap-voltage
- variables `ΔE`, `m` → 33.3-matter-from-energy; `PE_el`, `q`, `V_gap` → 33.3-gap-voltage
- variable `V` (the gap's potential difference in Example 33.2's Strategy, voltage, which the text writes `\kV`) → 33.3-gap-voltage
- variables wanted for the readouts: `KE` (the proton's kinetic energy in the cyclotron, energy), `B_mag` (the field that holds the synchrotron's proton on its ring, magnetic-field), `r` (the synchrotron ring's radius, position), `v` (the proton's speed, velocity), `γ_rel` (untyped), `c` (speed-of-light-in-vacuum)
- `ch33/COLOR.md` 33.3 row: the page also binds `electric-field` (the gap arrows the book draws), `position` (the ring radius), `mass`, `charge` and `time`; the referent list gains `slac`.
- AP `fs-id2432948` (Z decay into K⁰, electrons and positrons) needs Table 33.2's masses like the moved `fs-id2783273`; the chapter pass may move it to 33.4 too.

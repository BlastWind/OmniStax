# Plan: 34.4 Dark Matter and Closure

Written before the page was built (root rule 5), under `ch34/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints three headers after an untitled opening paragraph; the
book's headers are kept as they are and the opening gets one of OmniStax's.

| Span | Header | What it holds |
|---|---|---|
| `missing-matter` | More matter than we see (OmniStax) | Ten times the luminous mass, dark matter named, why it is a problem |
| `evidence` | Evidence | Zwicky and Rubin, the flat rotation curve, clusters, X rays; `sim-rotation-curve` (Figure 34.18) |
| `closure` | Theoretical Yearnings for Closure | The cosmological constant, the accelerating expansion, $\krhoc \approx 10^{-26}\;\text{kg/m}^{3}$, 10% to 40% of closure, open, closed and flat; `sim-curvature` |
| `indirect-dark-matter` | What Is the Dark Matter We See Indirectly? | MACHOs and microlensing, red and white dwarfs, neutrino oscillations, WIMPs, neutralinos and axions; Figures 34.19 and 34.20 |

## Concepts

All fifteen are the prep pass's rows; the page adds none.

| Concept | Introduced in |
|---|---|
| `dark-matter` | `missing-matter` |
| `flat-rotation-curve` | `evidence` |
| `cosmological-constant`, `critical-density`, `open-closed-flat-universe`, `negatively-curved-universe`, `positively-curved-universe`, `flat-universe` | `closure` |
| `machos-and-microlensing`, `macho`, `microlensing`, `neutrino-oscillations`, `wimps`, `neutralino`, `axion` | `indirect-dark-matter` |

Earlier concepts used: `mass` (4.2), `orbital-speed` (6.6),
`relativistic-doppler-effect` (28.4), `density` (11.2), `nucleons` (31.3),
`neutrino` (31.4), `solar-neutrinos` (32.5), `lepton`, `lepton-family-numbers`,
`hadrons-and-leptons` (33.4), `weak-force-changes-flavor`, `quark-confinement`
(33.5), `time-dilation` (28.2), `speed-of-light-in-vacuum` (25.3), `big-bang`,
`hubble-law`, `cosmic-microwave-background`, `inflationary-scenario` (34.1),
`general-relativity`, `gravitational-lensing`, `black-hole` (34.2),
`nuclear-fusion` (32.5).

## Types the page binds

`velocity` (a star's orbital speed $\kv$, the rotation curve's axis),
`position` (the distance $\krad$ from the galactic center), `mass` (the mass
$\kM$ inside an orbit, in the rotation readout), `time` (the clock of the
rotating galaxy), `density` ($\krhoc$ and the average density $\krhobar$),
and `angle` (the angle marks of the curvature Sim's triangle). `ch34/COLOR.md`
plans velocity, position and density for 34.4; mass, time and angle are asked
for below. The ratio of halo to luminous mass and the fractions of the critical
density stay ink. Facts: the red and blue shift of the galaxy's receding and
approaching sides, `#d8473b` and `#3b6fd8` through `F.fact`, the colours the
book's Figure 34.18(a) gives the two lines of sight. Referents: the two curves
of Figure 34.18(b), `luminous-curve` (the speeds the luminous matter alone
would give, which the text says should decrease) and `rotation-curve` (the
galaxy's curve, which the text says is almost flat), one curve per referent.

## Figures

```
sim-rotation-curve · Figure 34.18 · flat-rotation-curve, dark-matter · value add: flow by animation (the stars of a spiral galaxy orbit from a line across its diameter, each at the speed of the curve at its radius, so a flat curve is seen as every star covering the same path while the inner ones go round further) and variation by slider (the dark halo's mass flattens the curve that luminous matter alone makes fall), and standardisation of (a) and (b) into one scene · arrows: kinematic (the book's curved arrows of the galaxy's rotation) · moving: the stars orbit at their curve speeds on a 5 s loop holding 1.2 s, 60 million years of the galaxy's time, physical time linear; the receding side's stars are tinted red and the approaching side's blue in proportion to their speed along the line of sight, as (a) shows · slider: the dark halo's mass inside the disk as a multiple of the luminous mass, M_halo/M_lum (ratio, ink, 0 to 12, 10 by default for the text's "about 10 times"; detents at 0 and 10) · headline: "With dark matter of 10 times the luminous mass, the outer stars orbit as fast as the inner ones: the rotation curve is flat." (or "… the outer stars fall behind: …") · graph beside: v (km/s, 0 to 300, fixed; the largest the slider reaches is 241) against r (thousand ly, 0 to 50, the disk's radius from 34.1) with the luminous curve and the galaxy's curve, the Sun marked at 30 thousand ly as the book marks it; readout at the disk's edge: r = 5.0 × 10⁴ ly: v = √(M/M_lum) v_lum = √11.0 (65 km/s) = 217 km/s, true at any radius because v² = GM/r there; no note, the readout says it · locked view (rule 28.2): the book draws the galaxy in perspective, so the disk is seen from a fixed 25° above its plane with view(); a flat relation for the graph
sim-curvature · Sim · open-closed-flat-universe, negatively-curved-universe, positively-curved-universe, flat-universe, critical-density · value add: 3D (curvature is the shape of a surface in space; a flat drawing of a saddle or a sphere hides which way it bends) and variation by slider (the average density walks space from a saddle through a plane into a sphere that closes on itself, and a triangle on it shows its angles adding to less than, exactly or more than 180°) · arrows: none · still: the curvature is a state of the universe set by its density, with no clock in the idea; the idle spin carries the depth · slider: average density ρ̄ (density, 0.05 to 2.00 × 10⁻²⁶ kg/m³, 0.40 by default for the text's 40% of closure; detents at 0.10 and 0.40, the text's 10% and 40%; a dashed circle at ρ_c = 1.00, the special value the text names, landing on which leaves space exactly flat) · headline: "Open: space curves like a saddle and goes on without end." / "Flat: …" / "Closed: space curves round like a sphere and closes on itself." · readout: ρ̄ = 0.40 ρ_c < ρ_c: open, negatively curved; note: the triangle's angles add to 136°, less than 180° (the angle sum is what the drawing makes visible and no other part says) · no graph · 3D, mathematical class (rule 28.3): a geodesic disk of space as a wire grid in ink with a translucent face, its Gaussian curvature proportional to ρ̄ − ρ_c (on a sphere of radius 1/√K above ρ_c, a saddle z = ½√−K (x² − y²) below it), and an equilateral triangle whose angle marks wear the angle hue; the angles are exact for a triangle of that circumradius on a surface of that constant curvature (cot(A/2) = √3 cos(√K R), or cosh below ρ_c); yaw free, pitch from 5° to 83° above the disk, so the surface is never seen from beneath where a sphere's cap reads as a bowl; idle spin, snap views "from the side" and "from above" (the curvature and the bowed sides of the triangle), zoom buttons; without WebGL the same wire drawing is projected flat on the canvas from a fixed view
photo-hubble · Figure 34.19 · kept photograph: the text points at it ("see Figure 34.19") on the lensing search for MACHOs · still · 2D
photo-leaves · Figure 34.20 · kept photograph: the text points at it ("see Figure 34.20") and the caption carries the analogy of dark matter shepherding normal matter · still · 2D
```

Labels on `sim-rotation-curve`: "red shift" and "blue shift" beside the two
ends of the disk, "dark halo" over the halo (faded out with it at 0), the
clock in the corner, and the legend of the graph's two curves; the Sun is a
marked star named in a legend line and on the graph ("Sun"), and every other
star carries its distance and speed as a hover name, since they move. Five
labels in the scene. Labels on `sim-curvature`: none in the scene; the
headline names the shape and the note the angle sum.

Figure 34.18(c), the X-ray image of a cluster, is a photograph inside the same
book image as (a) and (b); it stays with the original, which the figure swaps
in, and the caption keeps the book's (c) sentence through `original_caption`.
Figure 34.18 keeps its width, 275.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_35_04_01.jpg` (34.18) | original of `sim-rotation-curve` | replaced; (c) shown with the original |
| `Figure_35_04_03a.jpg` (34.19) | kept, photo row, 275 | the text points at it |
| `Figure_35_04_04a.jpg` (34.20) | kept, photo row, 275 | the text points at it |

## Extra simulations considered

- Microlensing: a dark body crossing in front of a star and the star's light
  curve rising and falling. Left: 34.2's lensing figure shows the bending, and
  the passage here only names the effect.
- Neutrino oscillations: the chance of finding each flavor along the path.
  Left: the text gives no formula or number for it, so a readout would have
  nothing of the book's to write.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Conceptual question | 4 | 4 (AI suggested approaches) | — |
| Problem | 4 | 2 | 2 unkeyed |

Kept: the number of MACHOs ($1.5 \times 10^{15}$) and the protons per cubic
meter ($0.6\;\text{m}^{-3}$). Left out, unkeyed: the critical density in
eV/c²·m³ and the neutrinos to close the universe, and the Sun spread to the
critical density.

## Errata carried as printed

"Should decrease as the square root of the distance" (inversely is meant), the
"Problems Exercises" header (set as problems), and WIMPs called "leptons". The
CNXML writes the muon and tau neutrinos with a Latin v; the page sets ν, as
the book prints them.

## Wanted at chapter level

- `eq-critical-density` → 34.4-closure
- variables `ρ_c` → 34.4-closure
- new variables rows for 34.4: `v` (velocity, the orbital speed of a star at distance r from the galaxy's center), `r` (position, `\krad`, the star's distance from the galactic center), `M` (mass, the mass inside the star's orbit), `ρ_bar` (density, `\krhobar`, the average density of the universe), all four drawn by the page's figures and readouts
- `ch34/COLOR.md` 34.4 row: binds velocity, position, density, mass, time and angle; facts `#d8473b` and `#3b6fd8` (red and blue shift); referents `luminous-curve`, `rotation-curve`
- No concept, edge or symbol row needs changing.

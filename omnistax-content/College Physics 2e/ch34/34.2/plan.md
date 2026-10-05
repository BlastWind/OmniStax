# Plan: 34.2 General Relativity and Quantum Gravity

Written before the page was built (root rule 5), under `ch34/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints two headers, General Relativity and Quantum Gravity, and seven
bold-italic run-in heads under them; each run-in head opens a block of its own
(config), and Quantum Gravity heads the block of its first run-in head. Three
blocks are OmniStax's, where a run-in passage carries two ideas.

| Span | Header | What it holds |
|---|---|---|
| `beyond-special-relativity` | Beyond special relativity (OmniStax) | The opening paragraph: general relativity, quantum gravity, the TOE |
| `general-relativity` | General Relativity | The elevator thought experiment, `sim-elevator` |
| `light-bent-by-the-sun` | Light bent by the Sun (OmniStax) | The 1919 eclipse, `sim-starlight`, the forefront efforts |
| `gravitational-lensing` | Gravitational lensing | Lensing, Figure 34.12 |
| `black-holes` | Black holes | Escape velocity, the dark star, the event horizon and $R_{\text{S}}$ |
| `observing-black-holes` | Observing black holes (OmniStax) | Tidal X rays, neutron stars, supermassive holes and quasars, Figure 34.13 |
| `gravitational-waves` | Gravitational waves | Taylor and Hulse, Weber, LIGO and VIRGO |
| `black-holes-radiate` | Quantum Gravity, then Black holes radiate as `<h3>` | Zel’dovich and Hawking, pair creation at the horizon, Figures 34.14 to 34.16, `sim-black-hole` |
| `wormholes-and-time-travel` | Wormholes and time travel | |
| `shortest-time` | The shortest time | |
| `future-of-quantum-gravity` | The future of quantum gravity | |

Figures stand where the CNXML stands them: 34.14 to 34.17 all follow the Black holes
radiate paragraph, so the LIGO photograph sits there too.

## Concepts

All sixteen are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `general-relativity`, `quantum-gravity` | `beyond-special-relativity` | relativity reinforced in `general-relativity`; quantum gravity in `black-holes-radiate`, `future-of-quantum-gravity` |
| `thought-experiment`, `equivalence-of-acceleration-and-gravity` | `general-relativity` | |
| `gravity-bends-light` | `light-bent-by-the-sun` | reinforced in `gravitational-lensing` |
| `gravitational-lensing` | `gravitational-lensing` | |
| `black-hole`, `escape-velocity`, `event-horizon`, `black-holes-and-event-horizon`, `schwarzschild-radius`, `find-schwarzschild-radius` | `black-holes` | horizon and $R_{\text{S}}$ reinforced in `black-holes-radiate` |
| `neutron-stars`, `quasar` | `observing-black-holes` | |
| `gravitational-waves` | `gravitational-waves` | |
| `quantum-gravity-and-black-hole-radiation` | `black-holes-radiate` | |

Earlier concepts used: `special-relativity`, `relativity` (28.1); `acceleration`,
`acceleration-due-to-gravity`, `non-inertial-frame`; `massless-particles`, `photon`;
`speed-of-light-in-vacuum`; `converging-lens`; `cosmological-red-shift` (34.1, built in the
same wave); `universal-gravitation`, `gravitational-constant`, `mass`; `youngs-double-slit`;
`beta-minus-decay-and-the-neutrino`, `strong-and-weak-nuclear-forces`, `x-ray-radiation`;
`antimatter`, `virtual-particle-exchange`, `energy-time-uncertainty`, `rest-mass`,
`grand-unified-theories`. `thought-experiment`, `quasar`, `gravitational-lensing` and
`quantum-gravity-and-black-hole-radiation` have no book problem; the conceptual questions
reach the lensing, the horizon, the waves and the radiation.

## Types the page binds

`acceleration` ($\ka$, $\kg$), `position` ($\kdy$, $\krad$, $\kRS$, a scale bar), `time` ($\kt$),
`angle` ($\ktheta$, the bend), `mass` ($\kM$), `velocity` ($\kc$ in two readouts). $G$, counts
and the factor a drawing is enlarged by are ink. In prose a value the reader can point at wears
its type: the 10 km of a supernova's hole, the eight solar masses, the $10^{67}$ years, the
$10^{-43}$ s and $10^{-95}$ s, the $10^{19}$ GeV and $10^{-35}$ m.

Referents, as `ch34/COLOR.md` plans them for the figures this page draws: the elevator
accelerated upward (`elevator-accelerated`) and the elevator at rest in a gravitational field
(`elevator-at-rest`), both in `sim-elevator`; the Sun (`sun`) and the star whose light it
bends (`star`), both in `sim-starlight`. Their bodies wear facts where a fact wins (the Sun's
and the star's glow), their name labels the referent colour. The lensing galaxy, the quasar
and the companion star of 34.12 and 34.13 are drawn by no figure of the page (both kept as
the book's images), so they are not referents. Facts: the flashlight's light `#E8A317`, the
Sun `#F5A524`, the star `#F2C230`, the Earth `#3A7BC8`, the black hole `#000000`.
Conventions: `e-`, `e+`, `p+`, `gamma`; the antiproton is an open disc in the proton's hue;
the muon pair is `F.cat(0)`, filled and open, as 33.4 draws an antiparticle.

## Figures

```
sim-elevator · Figure 34.10 · equivalence-of-acceleration-and-gravity, thought-experiment, gravity-bends-light · value add: flow by animation (the light crosses while the left elevator rises round it, so the beam strikes the far wall low; the right elevator stands still on the Earth and the same beam falls) and variation by slider (the acceleration upward and the gravitational field, each with an equal-pair circle at the other's value, where the two beams' traces coincide, which is the equivalence) · arrows: kinematic (the book's "Accelerated up" arrow, the light crossing), plus the symbolic g vector · moving: the beam's front crosses 2.00 m in 6.67 × 10⁻⁹ s, played over 4.5 s and held 1.2 s; the left elevator rises ½at² from rest; physical time, linear · sliders: a (acceleration, 0 to 25 m/s², 9.80 by default; special at g's value), g (acceleration, 0 to 25 m/s², 9.80; special at a's value) · headline: "With $\ka = \kg$ the two beams fall alike, so no one inside can tell acceleration from gravity." or, unequal, which falls further · readout: ½at² and ½gt² with their values, 2.18 × 10⁻¹⁶ m by default; note: the crossing time and the factor the drop is drawn at, 10¹⁵ (rule 28.4) · graph: none, the two elevators side by side as the book's (a) and (b) · 2D: a cutaway elevator is a relation between heights, flat (rule 28.1)
sim-starlight · Figure 34.11 · gravity-bends-light, schwarzschild-radius · value add: variation by slider (the line of sight's closest approach to the Sun; the star seen nearest the Sun is shifted most, and the shift dies away as 1/r, the text's "those in a line of sight nearest the Sun"), standardisation · arrows: none (the book draws the ray as a line) · still: nothing in the idea moves; the light's flight adds no clock the bend needs · slider: r (position, 1.0 to 3.0 solar radii, 1.0 by default) · headline: "Starlight passing $\krad$ = 1.0 solar radius from the Sun's center bends toward it, so the star seems higher than it is." · readout: Einstein's bend written through the section's own radius, θ = 2R_S/r = 2(2.95 km)/(6.96 × 10⁵ km) = 8.48 × 10⁻⁶ rad; note: the bend is drawn 3 × 10⁴ times its true size (rule 28.4) · graph: none · 2D, the book's own plane of star, Sun and Earth
sim-black-hole · Figure 34.17 · quantum-gravity-and-black-hole-radiation, event-horizon, schwarzschild-radius, find-schwarzschild-radius · value add: flow by animation (the book's four pairs created just outside the horizon, one of each falling in and the other escaping, both muons falling in, the escaping positron annihilating with an electron outside into two γ rays that leave), variation by slider (the mass sets the horizon's radius on a fixed kilometer scale, R_S in proportion to M) · arrows: kinematic (the book's "escapes" arrows and the wavy γ arrows) · moving: four pairs staggered over a 6 s loop, held 1.2 s; physical time, linear · slider: M (mass, 1.0 to 6.0 solar masses, 1.7 by default, the "perhaps 10 km across" of the text) · headline: "Pairs form just outside the event horizon, $\kRS$ = 5.01 km from the center, and one of a pair may escape." · readout: R_S = 2GM/c² with the numbers, 5.01 km by default · graph: none; a legend names the seven kinds of particle · 2D, the book's own face-on view
```

Models, stated in the code. Elevator: 2.45 m wide inside, the flashlight's lens 2.00 m
from the far wall, $\kc = 3.00\times10^{8}$ m/s, so $\kt = 6.67\times10^{-9}$ s and
$\tfrac{1}{2}(9.80)(6.67\times10^{-9})^{2} = 2.18\times10^{-16}$ m. In the elevator's own
frame the beam falls $\tfrac{1}{2}a(x/c)^{2}$ in both elevators; the left one, at rest when
the light leaves, rises $\tfrac{1}{2}at^{2}$, so the beam's front crosses the page level while
the walls move up round it. Every drop and rise is drawn $10^{15}$ times its true size.
Starlight: the deflection $\theta = 4GM/c^{2}r = 2R_{\text{S}}/r$ is Einstein's prediction
for light passing a mass, the amount the text says the 1919 eclipse confirmed; with the
Sun's $R_{\text{S}} = 2.95$ km and radius $6.96\times10^{5}$ km it is
$8.48\times10^{-6}$ rad at the limb. The ray is two straight runs joined by a short bend
at its closest approach; distances are not to scale, as the book says. Black hole:
$M_{\odot} = 1.99\times10^{30}$ kg, $G = 6.67\times10^{-11}$ N·m²/kg², so
$R_{\text{S}} = 2.95$ km per solar mass, drawn at 8 units per km on a fixed scale (the 6.0
solar masses at the top of the slider reach 142 units). The pairs and their paths are drawn,
not computed: the book gives no rate, and the particles are not to the horizon's scale.

Labels: elevator, the arrows' $\ka$ and $\kg$, the drop $\kdy$ at each far wall, "Earth" on
the ground; the person, the flashlight and the beam by hover. Starlight: actual star,
apparent position, Sun, Earth-bound observer, the bend $\theta$ and $\krad$, five entity
labels. Black hole: event horizon and $\kRS$ only; every particle moves, so none carries a
label, and a legend and hover names say what each is.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_35_02_01.jpg` (34.10) | original of `sim-elevator` | sketch replaced |
| `Figure_35_02_02.jpg` (34.11) | original of `sim-starlight` | sketch replaced |
| `Figure_35_02_03.jpg` (34.12) | kept, photo row | (b) is the photograph of the lensed images the text points at; (a) is the bend of 34.11 drawn twice round a galaxy, which `sim-starlight` already makes live, and a lens equation the book never gives would be needed to vary it honestly |
| `Figure_35_02_04.jpg` (34.13) | kept, photo row | an artist's rendition the text points at twice; it draws no arrows, and the flow of matter off the star adds nothing the text asks the reader to imagine |
| `Figure_35_02_05.jpg` (34.14) | kept | the accretion disk and jets the passage describes |
| `Figure_35_02_06.jpg` (34.15) | kept | the LIGO control room, pointed at by the text |
| `Figure_35_02_07.jpg` (34.16) | kept | Hawking, pointed at by the text |
| `Figure_35_02_08.jpg` (34.17) | original of `sim-black-hole` | an artist's rendition whose escape arrows are kinematic (rule 24.5) |

Widths 250, 400, 500, 250, 350, 300, 300, 300.

## Extra simulations considered

- A logarithmic mass slider sizing the horizon from the Earth's mass to $10^{9}$ Suns.
  Left: the two keyed problems walk that range, and the kilometer scale of `sim-black-hole`
  already shows how small a stellar black hole is.
- Lensing round a galaxy with an Einstein ring in 3D. Left: it needs the lens equation,
  which the book does not give.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Conceptual | 6 | 6, open with AI-marked approaches | — |
| Problem | 4, plus 1 moved in | 3: `fs-id1169736627768` (23.6 km), `fs-id1169737955676` (multi, $2.95\times10^{12}$ m, $3.12\times10^{-4}$ ly), `fs-id1169738012582` from 34.1 (960 rev/s, `source_section` 34.1) | `fs-id1169738069541` and `fs-id1169738198524` (Construct Your Own Problem), unkeyed |

No Check Your Understanding box, so nothing inline. Errata carried as printed and named in
`notes`: the objective "Discuss black hole."; the second "(See Figure 34.13.)", on the M87
disk, which fits Figure 34.14 (the link goes to 34.13 as printed); the summary's
gravitational waves "not yet observed" against the text's LIGO detection; "Stephen Hawking
(b. 1942)"; neutron stars limited to "about eight solar masses".

## Wanted at chapter level

- variables rows in 34.2 for the symbols the figures write: `a` (`\ka`, acceleration, the elevator's acceleration upward), `g` (`\kg`, acceleration, the gravitational field in the elevator at rest), `t` (`\kt`, time, the light's time to cross the elevator), `Δy` (`\kdy`, position, how far the beam falls crossing the elevator), `θ` (`\ktheta`, angle, the angle through which starlight passing the Sun is bent), `r` (`\krad`, position, the closest approach of the starlight to the Sun's center)
- `ch34/COLOR.md` 34.2 binds: add `angle` (the bend of 34.11), `mass` (the slider of 34.17) and `time` stays; the lensing galaxy, quasar and companion star are not referents, since 34.12 and 34.13 are kept as the book's images
- anchor `eq-schwarzschild-radius` → 34.2-black-holes
- No concept, edge or symbol row needs changing.

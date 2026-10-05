# Plan: 34.1 Cosmology and Particle Physics

Written before the page was built (root rule 5), under `ch34/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints two bold-italic run-in heads (Matter versus antimatter; How can
something so old have so few wrinkles?), which stay as the book's headers; the other
six are OmniStax's, set where the argument turns.

| Span | Header | What it holds |
|---|---|---|
| `large-and-small` | The very large and the very small | The opening, Figure 34.2, the Things Great and Small paragraph |
| `galaxies` | Galaxies and their distances | Cosmology defined, the Milky Way (Figure 34.3), distances (Figure 34.4), light from the past |
| `expansion` | The expanding universe | The Big Bang, the cosmological red shift, $\kv = H_{0}\kd$ and its examples, Figure 34.5 + 34.6, the faster expansion, the questions |
| `cmbr` | The cosmic microwave background | Gamow's prediction, Penzias and Wilson, Figure 34.7, the Making Connections note |
| `matter-antimatter` | Matter versus antimatter | The book's head; both paragraphs |
| `wrinkles` | How can something so old have so few wrinkles? | The book's head; COBE, WMAP, Figure 34.8 |
| `epochs` | The epochs of the universe | Figure 34.9, going back in time, the electroweak, GUT and TOE epochs, the superforce |
| `inflation` | Symmetry breaking and inflation | Spontaneous symmetry breaking, the inflationary scenario, the last two paragraphs |

## Concepts

All eighteen are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `cosmology` | `galaxies` | — |
| `look-back-time` | `galaxies` | used in `expansion` |
| `big-bang` | `expansion` | reinforced in `cmbr` |
| `cosmological-red-shift` | `expansion` | — |
| `hubble-law` | `expansion` | — |
| `hubble-constant` | `expansion` | — |
| `recession-speed-and-distance` | `expansion` | — |
| `cosmic-microwave-background` | `cmbr` | used in `wrinkles` |
| `matter-antimatter-asymmetry` | `matter-antimatter` | — |
| `cmbr-wrinkles` | `wrinkles` | used in `inflation` |
| `epochs-of-the-universe` | `epochs` | — |
| `electroweak-epoch`, `gut-epoch`, `toe-epoch`, `superforce` | `epochs` | — |
| `spontaneous-symmetry-breaking`, `inflationary-scenario`, `symmetry-breaking-and-inflation` | `inflation` | — |

Earlier concepts used: `four-basic-forces` (4.8) and `universal-gravitation` (6.5) in
`large-and-small`; `speed-of-light-in-vacuum` (25.3) in `galaxies`; `relativistic-doppler-effect`
(28.4) and `velocity`, `distance` in `expansion`; `blackbody-radiation` (29.1) and `wavelength`
in `cmbr`; `antimatter` (31.4) and `antimatter-and-annihilation` (33.4) in `matter-antimatter`;
`temperature` in `wrinkles`; `grand-unified-theories` and `electroweak-unification` (33.6) and
`kinetic-energy` in `epochs`. Every concept of the section has a book exercise except
`superforce`, `spontaneous-symmetry-breaking` and `inflationary-scenario`, which only
`cq7` touches through the wrinkles.

## Types the page binds

`velocity` ($\kv$, a galaxy's recession velocity, the speeds of the text), `position`
($\kd$, a galaxy's distance, distances in light years, the wavelength $\klam$), `time` ($\kt$,
time since the Big Bang, look-back times), `temperature` (the CMBR's 2.725 K, the
temperatures of the epochs), `energy` (average particle energy $\kKEbar$, the energies of
the epochs), `intensity` (the spectrum's axis). $H_{0}$, $k$, counts and ratios are ink.
Mass appears only in the problems and is not drawn.

Referents (`ch34/COLOR.md`): `milky-way`, our galaxy, and `distant-galaxy`, the galaxy
100 Mly away of the text's example, both drawn in `sim-hubble-expansion`. The other
galaxies are unnamed and drawn in ink with hover names. No convention or fact colours:
the fireball and galaxies of 34.7(a) are ink, since a microwave glow has no visible colour.

## Figures

```
photo-clusters · Figure 34.2 · kept: the text asks the reader to see it twice ("see Figure 34.2", galaxies forming clusters such as shown) · width 300
photo-milky-way · Figure 34.3 · kept: the text points at it, and its three images are a rendering seen edge-on, an artist's view from above and a photograph from Earth, not a sketch with numbers; the dimensions are in the prose · width 250
photo-andromeda · Figure 34.4 · kept: the text points at it for the most distant galaxy · width 250
sim-hubble-expansion · Figure 34.5 + 34.6 · hubble-law, hubble-constant, recession-speed-and-distance, cosmological-red-shift, big-bang · value add: flow by animation (34.6's galaxies flying apart, the space between them growing at the rate $H_{0}$) and variation by choice and slider (the galaxy watched from, the Milky Way or the distant galaxy, shows the same law from either, so no galaxy is the center; $H_{0}$ steepens the line of 34.5, whose slope it is) · arrows: kinematic (each galaxy's recession velocity, measured from the galaxy watched from) · moving, the galaxies on a clock of model time: 5 billion years in 5 s at a constant $H_{0}$, the book's own assumption · choice: watched from (the Milky Way, the distant galaxy), discrete; slider: $H_{0}$ (untyped, 10 to 30 (km/s)/Mly, 20 by default, the book's value) · headline per choice: "From the Milky Way every galaxy recedes at a speed proportional to its distance, $\kv = H_{0}\kd$." · graph below: $\kv$ (velocity, 0 to 15,000 km/s) against $\kd$ (position, 0 to 500 Mly), one point per galaxy on screen, the line $\kv = H_{0}\kd$ · readout: $\kv = H_{0}\kd$ for the other referent, 2000 km/s at 100 Mly on load as the book's example, the clock's readout never highlighting · 2D, a slice of space and a relation
sim-cmbr-stretch · Figure 34.7 · cosmic-microwave-background, big-bang, cosmological-red-shift, blackbody-radiation · value add: flow by animation (34.7(a)'s galaxies flying out as the remnant of the fireball expands) and intuition (the same expansion stretches every wavelength of the radiation by one factor, so (b)'s blackbody shape slides to longer wavelengths and looks cooler, landing on the measured 2.725 K spectrum) · arrows: kinematic (the galaxies' velocities in (a)) · moving, the size of the universe on the clock from a quarter of its present size to today in 5 s · no controls: the expansion is the only variable, and a slider would replace the clock · headline: "With the universe at 0.40 of its present size, the radiation peaks at 0.43 mm and looks like a 6.8 K blackbody." · graph beside the scene: intensity (intensity, arbitrary scale, each spectrum drawn to the height of the book's) against $\klam$ (position, 0.1 to 10 mm, logarithmic as the book's), the book's measured points as squares at 2.725 K · readout: $\kTemp = (2.725\;\text{K})(\text{size today}/\text{size then})$ · 2D
photo-wmap · Figure 34.8 · kept: the text points at it (the CNXML cites 34.7; openstax.org prints 34.8, which the page links) · width 250
sim-epochs · Figure 34.9 · epochs-of-the-universe, electroweak-epoch, gut-epoch, toe-epoch, superforce, spontaneous-symmetry-breaking, inflationary-scenario · value add: variation by slider (the book's bar becomes a scale the reader walks, reading at each moment the temperature, the average particle energy and which forces are still one) and standardisation (the time axis truly logarithmic, the band's height the size of the universe on a log scale, so inflation's factor of $10^{50}$ is seen) · arrows: none · still: a moment chosen on a scale is a setting, and the universe's history is the axis, not a clock (rule 14) · slider: $\log_{10}(\kt/\text{s})$ (time, −44 to 17.7, −12 by default, the text's $10^{-12}$ s), dashed circles at −43 (TOE ends), −35 (symmetry breaking), −32 (inflation ends) and −11 (electroweak ends), which the text names · headline per epoch, e.g. "At $\kt = 1\times10^{-12}$ s the universe is in the electroweak epoch, where the electromagnetic and weak forces are one." · graph: the band is the figure, time along the top, the average energy along the bottom at $10^{19}$, $10^{14}$, $10^{2}$ and 1 GeV · readout: $\kKEbar = \frac{3}{2}k\kTemp$ with the numbers · 2D
fs-id1169737812426's card · Figure 34.26 · faithful copy on the card's `figure` field (the book's image and caption), since the problem asks about its angles · width 225
```

Model of `sim-hubble-expansion`, stated in the code: galaxies on a jittered lattice 50 Mly
apart in a slice ±400 Mly wide and ±60 Mly high, the Milky Way at the center and the distant
galaxy 100 Mly to its right; every separation grows as $e^{H_{0}t}$ with
$H_{0} = 20\;\text{(km/s)/Mly} = 0.0667$ per billion years, so in 5 billion years the space
between galaxies grows by a factor of 1.40. The scene keeps the galaxy watched from fixed on
screen. Arrows: 0.0075 px per km/s.

Model of `sim-cmbr-stretch`: Planck's $\klam^{-5}/(e^{hc/\klam k\kTemp} - 1)$ with
$hc/k = 14.39$ mm·K; size from 0.25 to 1 of today's, $\kTemp = 2.725\;\text{K}/\text{size}$, so
from 10.9 K (peak 0.27 mm) to 2.725 K (peak 1.06 mm). Each curve is scaled to the book's
peak height of 1.15 on the arbitrary scale.

Model of `sim-epochs`: $\kTemp = 10^{10}\;\text{K}\,(\kt/1\;\text{s})^{-1/2}$ while radiation
dominates, then $\kTemp \propto \kt^{-2/3}$ from $2.0\times10^{13}$ s, chosen so that the present,
$1.5\times10^{10}$ y, lands on 2.725 K; $\kKEbar = \frac{3}{2}k\kTemp$. This gives
$10^{19}$ GeV near $10^{-43}$ s and $10^{14}$ GeV near $10^{-34}$ s as the text says, about
1 TeV at $10^{-12}$ s, and 3000 K near $3\times10^{5}$ y, where the book puts atoms. The size
of the universe goes as $\kt^{1/2}$, then $\kt^{2/3}$, with inflation's $10^{50}$ between
$10^{-35}$ and $10^{-32}$ s. The book's figure prints Earth, Life and Now at $10\times10^{10}$,
$10.5\times10^{10}$ and $15\times10^{10}$ y, ten times too late against the text's 13 to 15
billion years; the figure places them at $1.0\times10^{10}$, $1.05\times10^{10}$ and
$1.5\times10^{10}$ y.

Labels. `sim-hubble-expansion`: the galaxy watched from is named under itself (it stays
put); the two referents are named in a legend; every other galaxy by hover; the scale bar
"100 Mly"; on the graph the line's slope. `sim-cmbr-stretch`: (a) and (b), "measured,
2.725 K" beside the squares, the peak; galaxies by hover. `sim-epochs`: TOE, GUT, inflation,
electroweak over the band, "now" at its end; the eras of the book's figure (quark, lepton,
photon, nucleosynthesis, atoms, stars and protogalaxies, galaxies, Earth, life) as ticks
named by hover, since nine more labels would crowd the band.

## Extra simulations considered

- The Milky Way as a 3D disk turned between the side and the top. Left: the book's images
  already show both views, and the dimensions are a sentence of the text.
- A ruler of look-back time from the Magellanic Clouds to the most distant galaxy. Left:
  the text's one sentence ("the time in years is the same as the distance in light years")
  says it all.

## Exercises

| Kind | In the book | Set here | Left out |
|---|---|---|---|
| Conceptual | 11 | 11, open with AI-marked approaches | — |
| Problem | 21 | 9 keyed: `fs-id1169738060667`, `fs-id1169738109498`, `fs-id1169738128083`, `fs-id1169737802923`, `fs-id1169737753519`, `fs-id1169738077849`, `fs-id1169737794400`, `fs-id1169737820271`, `fs-id1169737812426` (with Figure 34.26); and from 34.6 the keyed Critical Thinking `exer-87234` | unkeyed: `fs-id1169737738450`, `fs-id1169737711876`, `fs-id1169737795538`, `fs-id1169738183096`, `fs-id1169737910677`, `fs-id1169738031850`, `fs-id1169737802496`, `fs-id1169738249075`, `fs-id1169736815248`, `fs-id1169738109995`, and the Construct Your Own Problem `fs-id1169737765008`; moved to 34.2: `fs-id1169738012582` |

No Check Your Understanding box, so nothing inline. Errata carried as printed and named
in `notes`: "100,000 km/s" against the 10,000 km/s of the calculation; $H_{0}$ written as
km/s·Mly in the summary and in `fs-id1169737820271`'s key; "$200\;\mu\text{k}$"; Figure 34.7's
"10 to 20 billion years" against the text's 13 to 15; Figure 34.9's times ten times too
large; the glossary's epochs without "s" and inflation's $10^{-50}$ (in the concept rows,
not this page); the parallax key's º written °.

## Wanted at chapter level

- form `eq-hubble-law` → 34.1-expansion
- variables rows in 34.1 for the symbols the figures write, none of which has a 34.1 row: `t` (`\kt`, time, the time after the Big Bang), `T_temp` (`\kTemp`, temperature, the temperature of the universe or of its background radiation), `KE_bar` (`\kKEbar`, energy, the average kinetic energy of a particle at that temperature), `λ` (`\klam`, position, the wavelength of the background radiation, on the axis of Figure 34.7)
- `ch34/COLOR.md` 34.1 row: the page binds velocity, position, time, temperature, energy and intensity, as planned; referents `milky-way` and `distant-galaxy`

# Plan: 33.5 Quarks: Is That All There Is?

Written before the page was built (root rule 5), under `ch33/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The module prints seven headers of its own; its opening paragraph, which prints none,
takes an OmniStax header. Example 33.4 is a block of its own with an `<h3>`.

| Span | Header | What it holds |
|---|---|---|
| `fundamental-particles` | Fundamental particles (OmniStax) | The opening paragraph and `sim-quark-content` (Figure 33.15 + 33.19) |
| `conception-of-quarks` | Conception of Quarks | Gell-Mann and Zweig, the flavors u, d, s, fractional charge |
| `how-does-it-work` | How Does it Work? | p, n and the pions as quarks, neutron decay as $d \to u$, Tables 33.3 and 33.4, flavor change by the weak force, the two rules for combining quarks |
| `all-combinations` | All Combinations are Possible | The $\Omega^{-}$ predicted and found, the note Patterns and Puzzles, the photograph 33.16 |
| `quark-numbers-example` | Example 33.4 · Quantum Numbers From Quark Composition | The $\Xi^{0}$ checked against its quarks |
| `direct-evidence` | Now, Let Us Talk About Direct Evidence | SLAC scattering, `sim-quark-scattering` (Figure 33.17), jets, the photograph 33.18 |
| `ups-and-downs` | Quarks Have Their Ups and Downs | Charm, the $J/\psi$, the tau, bottom and top |
| `color` | What’s Color got to do with it?—A Whiter Shade of Pale | Color, white hadrons, confinement, QCD |
| `three-families` | The Three Families | Leptons, quarks and carriers in three families, `fig-three-families` (Figure 33.20) |

## Concepts

All seventeen are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `fundamental-particles` | `fundamental-particles` | reinforced in `three-families` |
| `quark-flavors`, `up-quark`, `down-quark`, `strange-quark` | `conception-of-quarks` | flavors reinforced in `ups-and-downs` |
| `quark-composition-of-hadrons`, `weak-force-changes-flavor` | `how-does-it-work` | composition reinforced in `all-combinations` |
| `evidence-for-quarks` | `all-combinations` | reinforced in `direct-evidence` |
| `quantum-numbers-from-quarks` | `quark-numbers-example` | — |
| `charm-quark`, `bottom-quark`, `top-quark` | `ups-and-downs` | — |
| `quark-color`, `quark-color-and-confinement`, `quark-confinement`, `quantum-chromodynamics` | `color` | — |
| `three-families` | `three-families` | — |

Earlier concepts used: `quark` (8.3) and `hadrons-and-leptons` in `fundamental-particles`;
`bosons-and-fermions`, `mesons-and-baryons`, `electric-charge`, `elementary-charge` in
`conception-of-quarks`; `beta-minus-decay-and-the-neutrino`, `pauli-exclusion-principle`,
`baryon-number`, `strangeness`, `pion` in `how-does-it-work`; `strangeness` in
`all-combinations` and the example, with `baryon-number`; `de-broglie-wavelength`,
`wavelength`, `energy` in `direct-evidence`; `lepton-family-numbers` in `ups-and-downs`
and `three-families`; `pauli-exclusion-principle` in `color`; `gluon` and
`properties-of-the-four-forces` in `three-families`.

## Types the page binds

`charge` (the quark charges in $\kqe$, the hadron's $\kq$ in the readout), `position` (the
probe wavelength $\klam$, the scale bar of the proton), `energy` (the beam energy $\kE$ the
scattering readout writes, the text's 20-GeV electrons), `velocity` ($\kc$ in that
readout). Spin, $B$, $S$, charm, bottomness, counts and $h$ are ink.

Referents, as `ch33/COLOR.md` names them: the $\pi^{+}$ and $\pi^{-}$ of Figure 33.15
(`pi-plus`, `pi-minus`), whose outline and name wear the referent colour when chosen, and
the three families of Figure 33.20 (`family-1`, `family-2`, `family-3`), whose column
headings and particles wear them where no convention wins. The electron, the neutrinos and
the photon wear `F.el('e-')`, `F.el('nu')` and `F.el('gamma')`.

Facts, named constants through `F.fact`, used for color charge and nothing else: red
`#e62828`, green `#28be3c`, blue `#2850e6`, and the anticolors as the sums of the other
two, cyan `#50ffff` (antired), magenta `#ff78ff` (antigreen) and yellow `#ffe664`
(antiblue), with white `#ffffff` where they meet. The three primaries are chosen so that
any two add to the anticolor of the third and all three, or a color and its anticolor,
clip to white when the channels are summed, which is the analogy the book draws. Where
color charge is drawn a quark's flavor is its letter, never a hue.

## Figures

```
sim-quark-content · Figure 33.15 + 33.19 · quark-composition-of-hadrons, quark-flavors, quantum-numbers-from-quarks, quark-color, quark-color-and-confinement · value add: variation by choice (any hadron of Table 33.4 and the antiproton of its footnote, built from its quarks with their spins and color charges, the spin, B, S, charm and bottomness of each quark added beside it and the charges in the readout, so the reader runs Example 33.4 and Table 33.4's every row the way the book runs the proton) and standardisation (the white hadron of 33.19 drawn as the additive sum of the quarks' colors, a color overlap beside each hadron whose center is white) · arrows: symbolic (the spin arrows) · still: nothing in a hadron's makeup has a clock; a new choice morphs the quarks into their new places, flavors and colors · choice: hadron (F.select, 22 options, p by default; p, n, π⁺, π⁻ first as the book draws them) · headline: "The proton is $uud$, three quarks whose colors add to white." · readout: $\kq = +\tfrac{2}{3}\kqe + \tfrac{2}{3}\kqe - \tfrac{1}{3}\kqe = +\kqe$ with the chosen quarks' charges, morphing by meaning when the number of quarks changes; note only where Table 33.4's footnote applies (the Δ⁺ and Δ⁰ have the quarks of the proton and the neutron, the Σ⁰ those of the Λ⁰) · graph: none; the hadron, its color overlap and the sum rows side by side · 2D, a diagram on a plane (rule 28.1)
```

Model, stated in the code: charges in thirds of $\kqe$, $B = \pm\tfrac{1}{3}$, $S = -1$
for $s$, charm $+1$ for $c$, bottomness $-1$ for $b$, all negated for an antiquark (Table
33.3). Spins: the proton, neutron and pions as Figure 33.15 draws them; the other spin-½
baryons up, down, up; the Δ's and the $\Omega^{-}$ (spin 3/2) and the $J/\psi$ and
$\Upsilon$ (spin 1) all up; the kaons as the pions. Colors: Figure 33.15's for its four
hadrons, except that the $\pi^{-}$'s antiquark $\bar{u}$ wears antigreen and its $d$ green
(the book's image prints them the other way round, against its own rule that a meson is a
color and its anticolor); otherwise R, G, B in order for a baryon, their anticolors for the
antiproton, and R with antired for a meson. The $\pi^{0}$ and $\eta^{0}$, mixtures of
$u\bar{u}$ and $d\bar{d}$, are left out of the choice, since no one pair draws them.
Labels: the hadron's name under it, the flavor letter in each quark (an identity mark, as an
element's symbol is), and R, G, B (or their bars) beside the color overlap: four entity
labels. Hover names give each quark's flavor, charge, color and spin.

```
sim-quark-scattering · Figure 33.17 · evidence-for-quarks, de-broglie-wavelength · value add: flow by animation (electrons fired one after another at the proton, most passing through, a few thrown back from a hard point, the paths building up into the book's picture) and variation by slider (the probe wavelength: long enough and the electrons see one smooth proton and barely bend, short enough and three point-like quarks throw them through large angles) · arrows: kinematic (the electrons' paths of 33.17) · moving: twelve electrons on one clock, launched 0.36 s apart, each crossing in about 1.7 s, 6.0 s a loop, holding 1.2 s; physical time, linear · slider: λ (position, 0.050 to 3.000 fm, 0.062 fm by default, the wavelength of the text's 20-GeV electrons, marked with a dashed circle "SLAC, 20 GeV") · headline per regime, e.g. "Electrons of $\klam = 0.062$ fm are thrown back from three hard points inside the proton." · readout: $\kE \approx h\kc/\klam$ with the numbers, in J and in GeV; note: how many times smaller or larger $\klam$ is than the proton's 2.4 fm diameter · graph: none; a scene · 2D, a beam on a plane (rule 28.1)
```

Model, stated in the code: the proton is a circle of radius 1.2 fm ($r = r_{0}A^{1/3}$ with
$A = 1$, Section 31.3) with its three quarks where Figure 33.17 puts them, $u$ above left,
$d$ right, $u$ below left. Each quark pulls ($u$, $+\tfrac{2}{3}\kqe$) or pushes ($d$,
$-\tfrac{1}{3}\kqe$) the electron through a bump of width $\klam$ whose strength falls as
$1/\klam$, so a short wavelength sees three sharp points and a long one a single soft
proton; the paths are drawn, not computed from the theory of scattering, which the book does
not give. The electrons keep their speed (they move at nearly $\kc$) and only turn. Each
carries a short wave train of its wavelength $\klam$ to scale, so the probe's size is seen
beside the quarks. $E \approx pc$ for so fast an electron, so $\klam = h/p$ (29.6) gives
$\kE \approx h\kc/\klam$; $h = 6.63\times10^{-34}$ J·s, $\kc = 3.00\times10^{8}$ m/s,
1 GeV $= 1.602\times10^{-10}$ J. Labels: the proton's name, $u$, $d$, $u$ in the quarks,
"e⁻ beam" at the left edge, where nothing moves, and a 1-fm scale bar; no label on a moving
electron, whose hover name says what it is.

```
fig-three-families · Figure 33.20 · three-families, fundamental-particles · value add: standardisation only, so a faithful copy (the book's chart of leptons, quarks and carrier particles in three family columns, each column in its referent colour as the text names "the first family", "the second", "the third"; every state is already drawn) · arrows: none · still: nothing in it has a clock or a variable · no controls · headline: "Leptons, quarks and carrier particles each fall into three analogous families." · no readout · graph: the chart is the figure · 2D
```

The chart's symbols are its entries, as a table's are, so all seventeen are drawn; nothing
moves and nothing can collide. Hover names give each particle's name. The book's alt text
calls the family 1 carrier "upsilon"; its image draws the photon, $\gamma$, as drawn here.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_34_05_01.jpg` (33.15) | original of `sim-quark-content` | sketch replaced, width 500 |
| `Figure_34_05_05.jpg` (33.19) | original of `sim-quark-content` | folded: the same hadrons drawn again for their colors, width 400 |
| `Figure_34_05_02.jpg` (33.16) | kept, `photo-omega-minus` | the bubble-chamber trace of the $\Omega^{-}$'s discovery, the data the text points at, width 275; also on AP `fs-id1742950`'s card |
| `Figure_34_05_03.jpg` (33.17) | original of `sim-quark-scattering` | sketch replaced, width 250 |
| `Figure_34_05_04.jpg` (33.18) | kept, `photo-alice-collision` | a simulation image of jets, pointed at, width 300 |
| `Figure_34_05_06.jpg` (33.20) | original of `fig-three-families` | chart redrawn faithfully, width 350 |
| `Figure_34_05_07.jpg` | dropped | serves only the unkeyed $\Delta^{++}$ problem, left out |
| `graphics1-5623.jpg` | kept in the key of `fs-id1169738209045` | the book's answer to (b), a quark-flow diagram |

Tables 33.3 and 33.4 stay in the text as `div.book-table`s with their footnotes; Table
33.4's Mesons and Baryons are spanning rows.

## Extra simulations considered

- A free builder of three quark slots with a flavor choice in each. Left: the hadron choice
  already reaches every row of Table 33.4, and three rows of six buttons would bury the
  figure in chrome.
- The jets of Figure 33.18 drawn as the quarks are pulled apart and the energy turns into
  particles. Left: the photograph is a simulation image the text points at, and the text
  gives no numbers to vary.

## Exercises

| Kind | In the book | Set here | Left out or moved |
|---|---|---|---|
| AP test prep | 2 | 2: keyed `fs-id3323573` (b); open with an AI-marked approach `fs-id1742950`, the trace on its card | — |
| Conceptual | 16 | 14, all open with AI-marked approaches | `fs-id1169738156095` and `fs-id1169737762764` moved to 33.6 |
| Problem | 22 | 11 keyed: `fs-id1169737796129`, `fs-id1169738209045`, `fs-id1169737780424`, `fs-id1169737798978`, `fs-id1169736617938`, `fs-id1169736583840`, `fs-id1169737845007`, `fs-id1169737860358`, `fs-id1169738129887`, `fs-id1169737803621`, `fs-id1169737724461` | 11 unkeyed: `fs-id1169738092971`, `fs-id1169737821465`, `fs-id1169737827156`, `fs-id1169737767952`, `fs-id1169737700767`, `fs-id1169737909340`, `fs-id1169738035761`, `fs-id1169738029353`, `fs-id1169737786195`, `fs-id1169736590893`, `fs-id1169737796216` |

`fs-id1169737780424` ("Repeat the previous problem") restates the left-out problem's three
parts in its prompt; `fs-id1169738209045` ("described in the preceding problem") says in its
prompt that the $\Delta^{++}$ is a very short-lived particle made when a $\pi^{+}$ strikes a
proton. No Check Your Understanding box, so nothing inline. Errata carried as printed and
named in `notes`: conceptual `fs-id1169737905434`'s "composition $W^{-}$ or $t\bar{t}$",
`fs-id1169737780424`'s key "$Z==0+(-1)$", and the glossary's color "a quark flavor".

## Wanted at chapter level

- No anchors: the section's forms `eq-neutron-decay-quarks` and `eq-down-to-up` → 33.5-how-does-it-work, if the chapter pass anchors forms
- variables rows in 33.5 for the symbols the figures and the prose write: `q` (`\kq`, charge, the charge of a hadron, the sum of its quarks' charges), `λ` (`\klam`, position, the wavelength of the electrons that probe the proton), `E` (`\kE`, energy, the energy of the probing electrons), `c` (`\kc`, velocity), `h_planck` (untyped)
- `ch33/COLOR.md` 33.5 row: the page binds `charge`, `position`, `energy` and `velocity` (the scattering readout writes $\kE$ and $\kc$), not only charge and position
- glossary: the book's term "quarks" names `quark` (8.3); its `terms` already carry "quark", so nothing is wanted
- No concept, edge or symbol row needs changing.

Applied by the chapter pass (2026-10-05): Both form anchors set at `33.5-how-does-it-work`; existing rows anchored (`q_e` at `33.5-conception-of-quarks`, `B_bary` and `S_str` at `33.5-how-does-it-work`); `q` added at `33.5-fundamental-particles` and `λ`, `E`, `c`, `h_planck` at `33.5-direct-evidence`. `ch33/COLOR.md` gives 33.5 charge, position, energy and velocity, and names the six quark color constants, which 33.6's gluon figure now shares.

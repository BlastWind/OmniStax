# Chapter 33 colour plan

Prepared 2026-09-28 in the chapter's prep pass, beside `config.md`. This chapter
uses the book's declared types and the app's selected palette, as root rule 7 and
root rule 22 require. It declares no type of its own.

| Quantity | Type | Treatment |
|---|---|---|
| Borrowed energy $\Delta E$, rest energy, collision and beam energy, decay energy | `energy` | One hue; a mass in MeV/$c^{2}$ is drawn untyped, the energy it equals in `energy` |
| Time a virtual particle lives $\Delta t$, a lifetime; the time axis of a Feynman diagram | `time` | One hue |
| Range $d$, the position axis of a Feynman diagram, a track length, a probed distance | `position` | One hue |
| $c$, a beam particle's speed | `velocity` | Coloured where a readout converts time to range |
| Gap voltage $V_{\text{gap}}$, a Van de Graaff potential | `voltage` | 33.3 only |
| The cyclotron's and synchrotron's magnetic field | `magnetic-field` | 33.3 only, where the figure draws the field |
| Particle charge, quark charge in units of $q_{e}$ | `charge` | Coloured where a readout adds quark charges (33.5) |
| Mass, the quantum numbers $B$, $L_{e}$, $L_{\mu}$, $L_{\tau}$, $S$, spin, relative force strength, a count | Untyped | Ink |

Which section colours what:

| Section | Types coloured |
|---|---|
| intro | none |
| 33.1 | `energy`, `time`, `position`, `velocity` |
| 33.2 | `time`, `position` |
| 33.3 | `energy`, `voltage`, `magnetic-field`, `velocity` |
| 33.4 | `energy`, `time` |
| 33.5 | `charge`, `position` |
| 33.6 | `energy`, `position`, `time` |

Particles use the element palette of root rule 7 where it has them:
`F.el('e-')`, `F.el('p+')`, `F.el('n0')`, `F.el('e+')`, `F.el('nu')`,
`F.el('gamma')`. Every other particle (quarks by flavor, pions, kaons, muons,
taus, $W$, $Z$, gluons, the hyperons) takes `F.cat(i)` with a legend or a hover
name, the index fixed per particle across the chapter: $u$ 0, $d$ 1, $s$ 2,
$c$ 3, $b$ 4, $t$ 5 for quark flavors; π 0, $K$ 1, μ 2, τ 3 for other particles
where no quark is drawn beside them. A particle and its antiparticle share a hue
and differ by the bar in their label (and an open marker for the antiparticle).

Quark color is the one physical-fact exception (root rule 7's fourth family):
red, green and blue for the color charges and cyan, magenta and yellow for the
anticolors are the book's analogy itself, which only works if the three add to
white on screen. A figure drawing color charge may use those six literal hues,
named in its plan line, and never uses them for anything else; flavor is then
carried by the letter, not the hue. Colour-off drops the type hues and keeps
element and categorical colours and the color-charge hues, so every figure must
stay legible from its labels.

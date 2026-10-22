# Chapter 13 colour plan

Prepared 2026-09-14, brought under item 7 on 2026-10-04. This chapter uses
the book's declared categories and the app's selected palette, as root
`RULES.md` item 7 requires, and declares two of its own, `temperature` and
`temperature-coefficient`. No figure hard-codes hues.

| Quantity | Category |
|---|---|
| Temperature $T$, a temperature change $\Delta T$, an initial, final, critical or Reaumur temperature, a temperature on one scale $T_{^\circ\text{C}}$, $T_{^\circ\text{F}}$, $T_\text{K}$ | `temperature` (declared here) |
| The coefficients of linear and volume expansion $\alpha$ and $\beta$, and $\beta$ of the steel tank and of the gasoline in Example 13.4 | `temperature-coefficient` (declared here) |
| Pressure $P$, $P_0$, $P_\text{f}$, a vapor pressure and a partial pressure | `pressure` (Chapter 11) |
| Density $\rho$, the density of water against temperature, a vapor density | `density` (Chapter 11) |
| Area $A$ and its change $\Delta A$ | `area` |
| Volume $V$, $V_0$, $V_\text{f}$, its change $\Delta V$, the volumes of the tank, the gasoline and the spill | `volume` |
| The mass $m$ of a molecule, a mass of air | `mass` |
| A length $L$, its change $\Delta L$, the box length $l$, a diameter, a height or an altitude | `position` |
| Molecular speed $v$, the rms speed $v_\text{rms}$, the most probable speed $v_\text{p}$, a component $v_x$, an escape velocity | `velocity` |
| Momentum change $\Delta p$ at the wall | `momentum` |
| The force $F$ on the wall or of a liquid on its container, a buoyant force | `force` |
| The average translational kinetic energy $\overline{\text{KE}}$ | `energy` |
| Bulk modulus $B$ | `elastic-modulus` |
| The time $\Delta t$ between collisions, the time on a graph of cooling | `time` |
| The counts $N$ and $n$, the molar mass $M$, the constants $k$, $R$, $N_\text{A}$, the mean square speed $\overline{v^2}$, every percentage and relative humidity | ink |

**Temperature is never a tint on a body.** A gas at 600 K and a gas at 300 K
are drawn in the same colours: their molecules wear the element palette
(`F.el('N')`, `F.el('O')`, `F.el('He')`), the box is ink, and the reader tells
the hot gas from the cold one by how fast the molecules move and how hard the
gauge reads. A bimetallic strip at $T_0$ and at $T$ is the same two metals in
the same two referent colours, told apart by its bend. Two Maxwell-Boltzmann
curves at $T_1$ and $T_2$ are the same ink curve, the second dashed, told
apart by where they sit and by their labels. A liquid and its vapor are told
apart by packing, and a heated beaker is not drawn redder as it warms. The
temperature hue appears on the symbol, the words that name a particular
temperature, the slider that sets it and the temperature axis of a graph. No
thermograph palette, no red-for-hot, no blue-for-cold; the one image that uses
such a palette, Figure 13.8, is a photograph and is kept as one.

**A count is not a category.** $N$ and $n$ vary on the sliders of 13.3 and
13.4 and stay in ink; what changes colour when the reader pumps air into the
tire is the pressure gauge and the readout, which writes $PV = NkT$ with $P$,
$V$ and $T$ in their hues and $N$ and $k$ in ink. The constants $k$, $R$ and
$N_\text{A}$ are ink as $G$ was in Chapter 6.

Of item 7's four ways this chapter uses three. The element palette
`F.el(symbol)` colours every molecule drawn in a box, a liquid or a vapor: a
nitrogen molecule is nitrogen's colour, an oxygen molecule oxygen's, a helium
atom helium's, a water molecule an oxygen and two hydrogens or oxygen's colour
with a hover name. Referents, drawn with `F.ref` and marked in the text, are
the things a figure and its passage both point at: the brass and steel of the
bimetallic strip, gases 1 to 4 of Figure 13.10, the two blocks and the plate
of the thermal equilibrium Sim (13.1); the bridge span, the plate, plug, hole
and box of Figure 13.12, and the tank and its liquid in Example 13.4 and the
thermal stress Sim, whose subscripts s and gas split in the referents' colours
(13.2); the bicycle tire, Mount Everest and the mole of balls (13.3); the
molecule followed and the right wall of the box (13.4); the container and its
lid, the beaker and its bubble (13.6). Categories carry every quantity in the
table. A colour that is the physical fact does not arise here.

All canvas colours come from `C(type)`, `F.el()`, `F.ref()` and `PAL`. With
colour off every figure stays legible from its labels, its motion, its curve
positions and its caption alone.

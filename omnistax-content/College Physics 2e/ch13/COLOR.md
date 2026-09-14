# Chapter 13 colour plan

Prepared 2026-09-14. Approved with `config.md`. This chapter uses the book's
declared physical types and the app's selected palette, as root rule 7
requires, and adds one type of its own, `temperature`. No figure hard-codes
hues, and every page binds only the union of the types its own figures
actually draw. The introduction binds none.

| Quantity | Type | Treatment |
|---|---|---|
| Temperature $T$, a temperature change $\Delta T$, an initial, final or critical temperature, a temperature on one scale $T_{^\circ\text{C}}$, $T_{^\circ\text{F}}$, $T_\text{K}$ | `temperature` (new) | One hue; the symbol in a readout, the slider that sets it and the axis of a graph whose axis is temperature wear it. Nothing else does: see the rule below |
| Pressure $P$, $P_0$, $P_\text{f}$, $P_1$, $P_2$, $P_\text{atm}$, a vapor pressure and a partial pressure | `pressure` (Chapter 11) | One hue; declared by Chapter 11 and used here by name. The gauge on a tire, the axis of a $PV$ or $PT$ diagram and the pressure term of every gas law wear it |
| Density $\rho$, the density of water against temperature, a vapor density | `density` (Chapter 11) | One hue; declared by Chapter 11 and used here by name |
| Molecular speed $v$, the rms speed $v_\text{rms}$, the most probable speed $v_\text{p}$, a component $v_x$ | `velocity` | One hue; the speed axis of the Maxwell-Boltzmann graph and the marks on it wear it. An rms speed is the same type as an instantaneous one and is told by its subscript |
| Momentum $p$ and its change $\Delta p$ at the wall | `momentum` | Bind in 13.4 only, where the collision with the wall is drawn |
| Force $F$ on the wall or the piston | `force` | Bind where a figure draws the force a gas exerts |
| Kinetic energy $\text{KE}$ and the average translational kinetic energy $\overline{\text{KE}}$ | `energy` | Bind in 13.4, where thermal energy is stated and drawn |
| The change in length $\Delta L$ of an expanding body | `position` | Bind where a figure draws the extension growing; the row is Chapter 5's and keeps its hue |
| Bulk modulus $B$ | `elastic-modulus` | Bind in 13.2 only, where thermal stress is stated |
| Elapsed time $\Delta t$ between collisions | `time` | Bind only where a moving figure exposes a clock |
| Length $L$, area $A$, volume $V$, their changes $\Delta A$ and $\Delta V$, the box length $l$; the number of molecules $N$, the number of moles $n$, molar mass $M$ and the mass $m$ of a molecule; the constants $k$, $R$, $N_\text{A}$; the coefficients $\alpha$ and $\beta$; the mean square speed $\overline{v^2}$; every percentage and ratio | Untyped | Ink, including the sliders that set them and the equation symbols |

Two rules of root rule 7 bite in this chapter and are written down so that no
section has to decide them twice.

**Temperature is never a tint on a body.** Root rule 7 § temperature says it
in one clause and this chapter is where it is tested. A gas at 600 K and a gas
at 300 K are drawn in the same colours: their molecules wear the element
palette (`F.el('N')`, `F.el('O')`, `F.el('He')`), the box is ink, and the
reader tells the hot gas from the cold one by how fast the molecules move and
how hard the gauge reads. A bimetallic strip at $T_0$ and at $T$ is the same
two metals in the same two colours, told apart by its bend. Two
Maxwell-Boltzmann curves at $T_1$ and $T_2$ are the same curve wearing the same
ink, told apart by where they sit and by their labels. A liquid and its vapor
are told apart by packing, not by colour, and a heated beaker is not drawn
redder as it warms. The temperature hue appears on the symbol $T$ wherever a
readout or a label writes it, on the slider that sets it, and on the
temperature axis of a graph, and nowhere else. No thermograph palette, no
red-for-hot, no blue-for-cold, anywhere in the chapter; the one image that
uses such a palette, Figure 13.8, is a photograph and is kept as one.

**A count is not a type.** $N$ and $n$ vary on the sliders of 13.3 and 13.4
and stay in ink; what changes colour when the reader pumps air into the tire
is the pressure gauge, which is a pressure, and the readout, which writes
$PV = NkT$ with $P$ and $T$ in their hues and $N$ and $k$ in ink. The same
holds for the constants $k$, $R$ and $N_\text{A}$, which are ink as $G$ was in
Chapter 6, and for $\alpha$ and $\beta$, which are material constants with
the standing of a coefficient of friction.

A page binds only what it draws, and after the build the pages bind this
(brought into line with the pages in the chapter pass): 13.1 binds
temperature, pressure on the axis and slider of Figure 13.10, and time on the
graph of the two blocks and the plate, the one figure of the page with a
clock; 13.2 binds temperature, position on the extension of the linear
expansion Sim, density on the axis of Figure 13.13, and pressure and elastic
modulus on the gauge and slider of the thermal stress Sim; 13.3 binds
temperature and pressure; 13.4 binds temperature, pressure, velocity,
momentum, energy and force, and not time, since no readout of the collision
scene colours $\Delta t$; 13.5 binds temperature and pressure, and not
density, since no figure of the page reads a volume as a density; 13.6 binds
temperature, pressure and density. No page binds a type merely because the
chapter declares it.

Of root rule 7's four families this chapter uses three. Type hues from the
scheme carry every quantity above. The element palette `F.el(symbol)` is
used, for the first time in this book, for every molecule drawn in a box, a
liquid or a vapor: a nitrogen molecule is nitrogen's colour, an oxygen
molecule oxygen's, a helium atom helium's, a water molecule is drawn as an
oxygen and two hydrogens or in oxygen's colour with a hover name, and no gas
box draws an anonymous grey dot. The categorical palette `F.cat(i)` tells
apart the four gases of Figure 13.10, which carry no type and must be
distinguished, the two metals of the bimetallic strip, and the two blocks
and the plate of 13.1's thermal equilibrium Sim; it is never used in a hue
the page has bound. A colour that is the physical fact does not arise
here.

All canvas colours come from `C(type)`, `F.el()`, `F.cat()` and `PAL`.
Turning colour off drops the type hues and keeps the element and categorical
colours, so every figure must stay legible from its labels, its motion, its
curve positions and its caption alone.

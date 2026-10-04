# Chapter 20 colour plan

Prepared 2026-09-14 and restated 2026-10-04 under root `RULES.md` item 7. It
refines the book's `COLOR.md` and invents no hue. The chapter declares three
categories of its own, `current`, `resistance` and `resistivity`, and uses
the book's others by name. Every category is coloured on every page, in prose
where a phrase names a particular one, in maths through its symbol's
variables row, and in every figure that draws it.

## Categories

| Quantity | Category | Notes |
|---|---|---|
| Current $I$, the peak current $I_0$, the rms current $I_\text{rms}$, the current through a person, a fuse's rating | `current` | The arrows round every loop, the sine of the AC current, the dot read against the shock table and every readout that writes $I = \Delta Q/\Delta t$, $I = nqAv_\text{d}$ or $I = V/R$. A peak is told by its subscript, the AC trace by a dashed stroke beside the voltage's solid one |
| Resistance $R$, $R_0$, the supply wires' $R_\text{w}$, a short's $r$, the resistance of a body | `resistance` | The number on a resistor's label, the slider that sets it, the curve of 20.11 and of the temperature sim, and every readout that writes $R = V/I$, $R = \rho L/A$ or $R = R_0(1 + \alpha\Delta T)$ |
| Resistivity $\rho$, $\rho_0$ | `resistivity` | The $\rho$ on the cylinder of 20.10 and the axis of the resistivity scale. A material is chosen from a list, and its resistivity wears this hue whichever material it is |
| The temperature coefficient of resistivity $\alpha$ | `temperature-coefficient` | Chapter 13's category for a fractional change per degree |
| Voltage $V$, $\Delta V$, $V_0$, $V_\text{rms}$, the resting and action potentials, a lead potential | `voltage` | The source's label, the AC voltage wave, the membrane's voltage and the ECG trace |
| Charge $q$, $\Delta Q$, the layers of charge on a membrane | `charge` | The counter of 20.2 + 20.4 and the signs on either face of a membrane; a carrier's sign is told by its label, never by a hue |
| Electric field $E$ in a conductor or across a membrane | `electric-field` | |
| Power $P$, $P_\text{ave}$, $P_0$, a bulb's rating in watts | `power` | |
| Energy $E$, $\text{PE}$, the kilowatt-hours of a bill | `energy` | |
| Drift velocity $v_\text{d}$, the speed of a nerve impulse | `velocity` | |
| Frequency $f$ of an AC source, a heart rate | `frequency` | |
| Temperature $T$, $\Delta T$ | `temperature` | |
| Time $t$, $\Delta t$ | `time` | Including the time axes of the AC, action-potential and ECG graphs |
| Length $L$, diameter $D$, radius $r$, a distance $x$, a membrane's thickness $d$, an axon's or a sheath's length | `position` | |
| Cross-sectional area $A$ | `area` | |
| Volume of the shaded segment, $Ax$ | `volume` | |
| Density of copper | `density` | |
| Arterial blood pressure | `pressure` | The pressure curve under the ECG |
| The free-charge density $n$, the number of electrons, a price per kilowatt-hour, a percentage | ink | A count or a rating |

Current is not charge and not flow rate. $I = \Delta Q/\Delta t$ reads as one
colour equal to another over a third. Chapter 12's flow rate keeps its own hue
and its own letter, and the pump-and-pipe analogy of 20.8 + 20.9 colours only
the electrical quantities it stands for.

Voltage, current and resistance are three categories and three colours, and
the power of 20.4 is a fourth, so $I = V/R$, $P = IV$ and $P = I^2R$ each read
in their own colours.

A material is a choice, not a hue: the resistivity and the resistance it gives
change colour as quantities, never the material itself. The conductor,
semiconductor and insulator groupings of the resistivity scale are instances
no referents row names and are told apart with `F.cat(i)`, as are the seven
bands of Table 20.3 on 20.21.

## Facts and conventions

Every free electron drawn in a wire is `F.el('e-')`, a positive carrier
`F.el('p+')`, and the membrane's ions `F.el('Na')`, `F.el('K')` and
`F.el('Cl')`, as Chapter 19 drew them. The chapter draws no colour as a fact.

## Referents

Each section lists its referents in `referents`; the figure draws each with
`F.ref` and the text marks every reference, pronouns included.

- 20.1: the truck battery, the headlight, the small battery and the penlight of 20.3; the shaded segment and the 12-gauge copper wire of 20.7 and Example 20.3.
- 20.2: the battery, the resistor, the voltmeter, the pump and the narrow pipe of 20.8 + 20.9.
- 20.3: the cylinder of 20.10; the sample of mercury of 20.11.
- 20.4: the source and the headlight of the power sim and Example 20.7; the 60-W incandescent bulb and the 15-W CFL of the cost sim and Example 20.8, whose cost curves wear their colours.
- 20.5: the battery, the alternating source and the resistor of 20.14 + 20.15; the plant, the transmission line and the city of the transmission sim and Example 20.10.
- 20.6: the toaster, the short and the worn cord of 20.18, whose power bars wear the toaster's and the short's colours; the supply wires, the fuse and the breaker of 20.19 + 20.20, with $R_\text{w}$ split to the wires; the person and the live wire of 20.21.
- 20.7: the axon of 20.24; the membrane of 20.25; the bare membrane and the myelinated axon of 20.27 + 20.28; the heart and the electrodes RA, LA and LL of 20.30 + 20.31.

Turning colour off must leave labels, line styles and arrow directions
sufficient to understand every figure: the AC voltage and current traces are
solid and dashed, the CFL's cost curve is dashed beside the bulb's solid one,
and every referent is named on its figure.

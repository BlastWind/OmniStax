# Chapter 20 colour plan

Prepared 2026-09-14, approved with `config.md`, and brought to the bindings
the seven pages were built with in the chapter pass of 2026-09-15. This
chapter uses the book's declared physical types and the app's selected
palette, as root rule 7 requires, and adds two types of its own. No figure
hard-codes hues, and every page binds only the union of the types its own
figures actually draw. The introduction binds none.

| Quantity | Type | Treatment |
|---|---|---|
| Current $I$, the peak current $I_0$, the rms current $I_\text{rms}$, the current through a person | `current` (new) | One hue; the arrows that run along every wire of the chapter, the slider that sets the current in 20.1 and 20.2, the sine wave of the AC current in 20.5, the bar read against the shock table in 20.6, and every readout that writes $I = \Delta Q/\Delta t$, $I = nqAv_\text{d}$, $I = V/R$ or $P = I^2R$. A current and its peak and rms values are one type told apart by their subscripts, the peak drawn hollow and the rms dashed |
| Resistance $R$, the original resistance $R_0$, a wire's $R_\text{w}$, a short's $r$ | `resistance` (new) | One hue; the resistor's label in every schematic, the slider that sets it, the number the cylinder's length, area and material give in 20.3, the curve of resistance against temperature in 20.11, the body resistance of 20.6, and every readout that writes $R = V/I$, $R = \rho L/A$ or $R = R_0(1 + \alpha\Delta T)$. The resistor's zigzag is ink and its resistance is a number in this hue on its label |
| Voltage $V$, potential difference $\Delta V$, the peak voltage $V_0$, the rms voltage $V_\text{rms}$, the membrane's resting potential and the lead II potential | `voltage` (Chapter 19) | One hue; declared by Chapter 19 and used here by name. The battery's label, the slider that sets the source, the height of the AC voltage wave, the voltage across the membrane in 20.7 and the vertical axis of the ECG wear it, as does every readout that writes $V = IR$ or $V = V_0\sin 2\pi ft$ |
| Charge $q$, $Q$, the charge $\Delta Q$ that crosses an area, the electron's charge $q_\text{e}$ | `charge` (Chapter 18) | One hue; declared by Chapter 18 and used here by name. It wears the hue on the carriers counted through the cross-section of 20.2, on the charge the truck battery sets in motion, on the layers of charge either side of the membrane in 20.7 and on every readout that states a charge in coulombs; the sign of a carrier is told by its label and its direction of motion, never by a second hue |
| Electric field $E$ inside a current-carrying conductor | `electric-field` (Chapter 18) | One hue; the field arrow drawn along the wire in 20.4 and 20.6, which is what drives the carriers, and the field across the cell membrane in 20.7. Bind only where a figure draws it |
| Power $P$, the average AC power $P_\text{ave}$, the peak power $P_0$ | `power` (Chapter 7) | One hue; the power curve of 20.16, the shaded band of power lost in a transmission line, the rating on a light bulb and every readout that writes $P = IV$, $P = V^2/R$ or $P = I^2R$ |
| Energy $E$, the electrical energy a bill is written in, the potential energy $\text{PE}$ a charge carries through a circuit | `energy` (Chapter 7) | One hue; the accumulating bar of kilowatt-hours in 20.4 and every readout that writes $E = Pt$ or $\text{PE} = qV$ |
| Drift velocity $v_\text{d}$, and the electron's own speed | `velocity` (Chapter 2) | One hue; the arrow on the crowd of electrons in 20.1 and the two readouts that state the drift velocity beside the speed of an individual electron, the pair of numbers the section exists to separate |
| Frequency $f$ of an AC source, and the frequency axis of 20.22 | `frequency` (Chapter 16) | One hue; the slider that sets 60 Hz or 400 Hz and the horizontal axis of the sensitivity curves in 20.6 |
| Temperature $T$, the change $\Delta T$ of a filament or a thermistor | `temperature` (Chapter 13) | One hue; the slider that heats the tungsten filament in 20.3, the horizontal axis of the mercury curve, and the readout that writes $R = R_0(1 + \alpha\Delta T)$. A hot body is never tinted; its temperature wears the hue on its symbol and its slider |
| Length $L$ of a cylinder, its diameter $D$, the plate separation and the membrane's thickness | `position` (Chapter 2) | Bind only where a figure brackets the length or carries it on a slider: 20.3's cylinder, whose length and diameter the reader sets, and 20.7's 8-nm membrane |
| Resistivity $\rho$ and $\rho_0$; the temperature coefficient $\alpha$; the free-charge density $n$; the cross-sectional area $A$; the number of electrons $n_\text{e}$; a mass, a specific heat and a cost per kilowatt-hour | Untyped | Ink, including the sliders that set $A$ and $n$ and the dropdown of Table 20.1's materials. A resistivity belongs to the material and not to the object, and the book's rules put every material constant in ink |

Four rules of rule 7 bite in this chapter and are written down so that no
section has to decide them twice.

Current is not charge and not flow rate. The chapter's first sentence is
that current is the rate at which charge flows, and the figure that draws
it has a charge crossing an area and a current reading beside it; each is
a type with its own hue, so that $I = \Delta Q/\Delta t$ reads as one
colour equals another over a third, which is the equation. Chapter 12's
flow rate $Q$ is a volume per second and keeps its own hue and its own
letter; nothing on this chapter's pages is coerced into it, even where the
book draws the pipe analogy, and a figure that draws the analogy draws the
pipe in ink with the current hue on the electrical side alone.

Voltage, current and resistance are three types and three colours. Ohm's
law is the chapter's central statement and the figure that teaches it must
show three separate things changing. The battery's voltage wears the
voltage hue, the arrows round the loop the current hue, and the resistor's
label the resistance hue, so that turning the voltage slider moves two
colours and turning the resistance slider moves two others. A readout that
writes $I = V/R$ in three colours is the whole lesson of 20.2 in one line,
and the same three colours carry through 20.4's $P = IV$ and $P = I^2R$,
where the power is a fourth.

A material is a choice, not a hue. 20.3 sets the resistivity from a
dropdown of the book's own table, from silver to Teflon, and the
resistivity is ink on the readout however the reader sets it; what changes
colour is the resistance the figure computes from it. The same holds for
the temperature coefficient and for the conductor, semiconductor and
insulator groupings, which are told apart by their position on a
logarithmic scale and by their labels, never by three hues. Where the
three groups must be distinguished as instances, the categorical palette
`F.cat(i)` is used and never in a hue the page has bound.

The element palette carries the carriers. Every free electron drawn in
20.1's wire, in 20.5's reversing circuit and in 20.7's membrane is drawn
with `F.el('e-')`, and the membrane's ions with `F.el('Na')`, `F.el('K')`
and `F.el('Cl')`, as Chapter 19's 19.19 drew them. A carrier is never an
anonymous grey dot, and the positive carriers of 20.4's panel (a) are
drawn with `F.el('p+')` where the book draws bare positive charges, or as
labelled charges in the charge hue where it does not.

A page binds only what it draws, and these are the bindings the seven
plans expected, written here as the seven pages were built. 20.1 binds
current, charge, velocity, electric-field and time. 20.2 binds current,
resistance and voltage. 20.3 binds resistance, position and temperature;
its cylinder is set from a length, a diameter and a material and its two
temperature figures from a temperature, so no figure of the section
measures a resistance from a current and a voltage and the page binds
neither. 20.4 binds power, current, voltage, resistance and energy, and
time as well, since the cost figure carries the hours the lamps are left
on. 20.5 binds voltage, current, resistance, power and frequency: Ohm's
law for alternating current is the section's own result, the resistance is
a slider on all three of its figures, and their readouts write
$I_\text{rms} = V_\text{rms}/R$. 20.6 binds current, voltage, resistance,
power and frequency. 20.7 binds voltage, charge, electric-field, position and
time. No page binds a type it does not draw.

All canvas colours come from `C(type)` and `PAL`, with the element palette
as the one exception named above. Turning colour off must leave labels,
line styles and arrow directions sufficient to understand every figure: in
the AC figures the voltage and current traces are told apart by a solid
and a dashed stroke as well as by their hues, and in the simple circuit
the current is told by the arrowheads on the loop and the resistance by
the zigzag it labels.

# Chapter 23 colour plan

Prepared 2026-09-15. Approved with `config.md`. This chapter uses the book's
declared physical types and the app's selected palette, as root rule 7
requires, and adds two types of its own. No figure hard-codes hues, and every
page binds only the union of the types its own figures actually draw. The
introduction binds none.

| Quantity | Type | Treatment |
|---|---|---|
| Magnetic flux $\Phi$ and its change $\Delta\Phi$ | `magnetic-flux` (new) | One hue; the field lines that are counted through a loop rather than drawn in space, the shaded area a rod sweeps out on its rails, the bar or dial that rises and falls as a loop turns, the slider that sets a flux where a figure carries one, and every readout that writes $\Phi = BA\cos\theta$, $\text{emf} = -N\Delta\Phi/\Delta t$ or $L = N\Delta\Phi/\Delta I$. A flux is never drawn in the field's hue: the whole difficulty of 23.1 is that a field can be strong while the flux through a loop is zero, and the two must never look like the same quantity |
| Self-inductance $L$ and mutual inductance $M$ | `inductance` (new) | One hue; the coil whose inductance a slider sets, the inductor symbol in every circuit of 23.10, 23.11 and 23.12, the henries printed beside it, and every readout that writes $\text{emf} = -L\Delta I/\Delta t$, $L = \mu_0 N^2 A/\ell$, $E_\text{ind} = \frac{1}{2}LI^2$, $\tau = L/R$, $X_L = 2\pi fL$ or $f_0 = 1/2\pi\sqrt{LC}$. Mutual inductance wears the same hue as self-inductance, because $M$ and $L$ are the same physical quantity measured between two devices and within one |
| Magnetic field $B$ | `magnetic-field` (Chapter 22) | One hue; every field line, every dot and cross for a field out of or into the page, the field a permanent magnet carries into a coil, the field a coil raises to oppose it, the field inside a solenoid, and the slider that sets a field strength. The induced field and the applied field wear the same hue and are told apart by their labels and their directions, as Chapter 22's plan requires |
| Resistance $R$, inductive reactance $X_L$, capacitive reactance $X_C$, impedance $Z$ | `resistance` (Chapter 20) | One hue for all four; the resistor in every circuit, the reactance curves against frequency in 23.11, the two legs and the hypotenuse of 23.12's impedance triangle, and every readout that writes $X_L = 2\pi fL$, $X_C = 1/2\pi fC$, $Z = \sqrt{R^2 + (X_L - X_C)^2}$ or $\cos\phi = R/Z$. The four are told apart by their subscripts, their labels and their positions in the drawing, never by a second hue: they are the same kind of quantity, measured in ohms, standing in the same place in Ohm's law, and 23.12's whole argument is that they combine into one number. `exploration.md` § The type cases this chapter had to settle gives the reasoning |
| Current $I$, its peak or final value $I_0$, the rms current $I_\text{rms}$, the change $\Delta I$, the two coils' currents, a transformer's primary and secondary currents, an eddy current and a leakage current | `current` (Chapter 20) | One hue; the arrow along every wire, the loop drawn inside an eddy-current plate, the current that grows and decays through an RL circuit's time constants, the sliders that set a current, and every readout that states one. A leakage current and an eddy current are currents and wear the current hue; nothing in this chapter gets a hue of its own for being unwanted |
| Emf $\mathcal{E}$, peak emf $\mathcal{E}_0$, back emf, the induced emfs of two coils, voltage $V$, its peak $V_0$ and rms value $V_\text{rms}$, a transformer's $V_\text{p}$ and $V_\text{s}$, the element voltages $V_R$, $V_L$ and $V_C$ and their peaks | `voltage` (Chapters 19 and 21) | One hue; the sinusoid a generator draws, the rectified pulses a split ring draws, the three phase curves of 23.11, the stacked curves of 23.12 and their sum, the sliders that set a driving voltage, and every readout that states one. A back emf is a voltage and takes the voltage hue, told from the driving emf by its label and by the direction of its arrow; the three element voltages of 23.12 are told apart by their subscripts, since telling them apart by hue would say they are three kinds of quantity when the section's point is that they are one kind, added wrongly |
| Capacitance $C$ | `capacitance` (Chapter 19) | Bind in 23.11 and 23.12, where a capacitor's value sets the reactance and, with the inductance, the resonant frequency |
| Frequency $f$ and the resonant frequency $f_0$ | `frequency` (Chapter 16) | Bind in 23.11 and 23.12, where frequency is the slider that drives every figure: the axis of the reactance curves and of the resonance curve, the marker that sits on $f_0$, and every readout that writes a frequency. The resonant frequency keeps the frequency hue and is told by its subscript, as root rule 7 asks of a variant |
| Elapsed time $t$, a period $T$, an interval $\Delta t$, the time constants $\tau$ | `time` (Chapter 2) | Bind where a figure has a clock in it: the horizontal axis of every graph against time, the marks at one, two and three time constants in 23.10, and the period of a generator's output |
| Angular velocity $\omega$ | `angular-rate` (Chapter 6) | Bind in 23.5 and 23.6, where the coil's rotation rate is the slider and $\text{emf}_0 = NAB\omega$ is the readout |
| Energy stored in an inductor $E_\text{ind}$, the energy a capacitor holds | `energy` (Chapter 7) | Bind in 23.9, where the stored energy is the section's second result, and in 23.12, where the energy moves back and forth between the two stores of an LC circuit |
| Power $P$, average power $P_\text{ave}$, a transformer's $P_\text{p}$ and $P_\text{s}$ | `power` (Chapter 7) | Bind in 23.6, where a stalled motor's dissipation is the point, in 23.7, where power in equals power out, and in 23.12, where the average power is what the power factor multiplies |
| Velocity $v$ | `velocity` (Chapter 2) | Bind in 23.3, where the rod's speed sets the motional emf, and in 23.4, where the drag falls with the speed |
| Force $F$ | `force` (Chapter 4) | Bind in 23.3 and 23.4, where the magnetic force on an induced current opposes the motion that made it |
| Position, a displacement $\Delta x$, a radius, a separation | `position` (Chapter 2) | Bind where a figure brackets a distance or carries it on a slider: the rod's travel in 23.3 and the bob's displacement in 23.4 |
| The number of turns $N$ and the turns ratio, the area $A$ and its change $\Delta A$, the length $\ell$ of a solenoid or a rod, the width $w$ of a coil, the permeability $\mu_0$, the angle $\theta$, the phase angle $\phi$, the power factor $\cos\phi$ and the fractions 0.632 and 0.368 | Untyped | Ink, including the sliders that set $N$, $A$, $\ell$ and $\theta$, the axis titles and the labels on every frame. The area a rod sweeps is untyped as a quantity and is bracketed in ink; the flux through it is what wears the flux hue |

Four rules of rule 7 bite in this chapter and are written down so that no
section has to decide them twice.

**Flux is not the field.** The single hardest sentence of the chapter is that a
strong magnet held still inside a coil induces nothing, and the single hardest
picture is a loop turned edge-on to a field that has not changed at all. If
$\Phi$ and $B$ shared a hue, every figure in 23.1 would be arguing against its
own colours. So the field lines drawn in space wear the field hue, and the count
of them that passes through a loop — the shaded patch on the loop's face, the
bar on the readout, the number in $\Phi = BA\cos\theta$ — wears the flux hue.
A figure that draws both must make the relation visible: the same lines,
differently coloured where they cross the surface.

**An ohm is an ohm.** Resistance, the two reactances and impedance are one type
and one hue. The reader's task in 23.12 is to see that $R$, $X_L$ and $X_C$ are
three numbers of the same kind that combine into a fourth, and a page that gave
each a hue would teach the opposite. They are told apart by subscript, by label
and by where they stand in the drawing, which is exactly how root rule 7 tells
variants of one type apart. The same holds for the voltages: $V_R$, $V_L$ and
$V_C$ are one hue with three subscripts, because the section's point is that
they are one kind of quantity that does not simply add.

**A device is never tinted.** A coil is ink, a core is ink, a magnet is drawn in
ink with N and S on its ends, a plate is ink, an appliance case is ink and every
wire is ink. What wears a hue is the quantity: the current along the wire, the
field in the space, the flux through the loop, the voltage across the element.
The one exception root rule 7 grants is the element palette, which arises where
a page draws a named particle: the electrons that make a current in 23.3's rod
and 23.4's plate are drawn with `F.el('e-')` where a page draws them at all.

**Two kinds of line on one graph.** Almost every figure of 23.10, 23.11 and
23.12 draws a current and a voltage against the same axis, and the reader must
see which leads which. The two wear their own type hues, current and voltage,
and where a figure draws a third quantity against the same axis — a reactance
against frequency, a power against frequency — it wears its own hue too. Where
two curves of one type must be told apart, as the two resistances of the
resonance curve in Figure 23.48 must, the second is dashed, not recoloured.

A page binds only what it draws, and these are the bindings the twelve pages are
expected to take. 23.1 binds `magnetic-flux`, `magnetic-field` and `voltage`.
23.2 binds `magnetic-flux`, `magnetic-field`, `voltage`, `current` and `time`.
23.3 binds `magnetic-flux`, `magnetic-field`, `voltage`, `current`, `velocity`,
`force` and `position`. 23.4 binds `magnetic-field`, `current`, `force`,
`velocity` and `position`. 23.5 binds `magnetic-flux`, `magnetic-field`,
`voltage`, `angular-rate` and `time`. 23.6 binds `voltage`, `current`,
`resistance`, `power` and `angular-rate`. 23.7 binds `magnetic-flux`, `voltage`,
`current` and `power`. 23.8 binds `voltage`, `current` and `resistance`. 23.9
binds `inductance`, `magnetic-flux`, `voltage`, `current`, `magnetic-field` and
`energy`. 23.10 binds `inductance`, `resistance`, `current`, `voltage` and
`time`. 23.11 binds `inductance`, `capacitance`, `resistance`, `frequency`,
`voltage`, `current` and `time`. 23.12 binds `inductance`, `capacitance`,
`resistance`, `frequency`, `voltage`, `current`, `power`, `time` and `energy`.
A section agent who needs a type this list does not give its page must say so in
the plan and say what draws it.

The categorical palette `F.cat(i)` is expected on three pages only, and never in
a hue the page has bound: the three pendulum bobs of 23.4, solid, slotted and
insulating, which carry no type of their own and must be told apart; the two
resistances of 23.12's resonance curve, if a plan prefers two colours to a
dashed line, which it should not; and the stages of 23.7's power distribution
line, where plant, substation and house are three places and not three
quantities. A colour that is the physical fact arises twice, on the
introduction's two photographs, which are kept as the book prints them.

All canvas colours come from `C(type)` and `PAL`, with the element palette as
the one exception named above. Turning colour off must leave labels, line styles
and arrow directions sufficient to understand every figure: a voltage curve is
then told from a current curve by its dash pattern and its axis label, a field
line from a flux patch by its shape, and every readout stays legible from its
symbols.

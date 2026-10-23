# Chapter 23 colour plan

Prepared 2026-09-15, brought in line with root `RULES.md` item 7 on
2026-10-04. The chapter uses the book's declared categories and the palette
the reader picks, and adds two categories of its own, `magnetic-flux` and
`inductance`. Every category is coloured on every page; the table below says
what wears which, and the rest of this file says how the chapter's figures use
item 7's four ways.

| Quantity | Category | Treatment |
|---|---|---|
| Magnetic flux $\Phi$ and its change $\Delta\Phi$ | `magnetic-flux` (declared here) | The field lines counted through a loop rather than drawn in space, the shaded area a rod sweeps out on its rails, the bar that rises and falls as a loop turns, and every readout that writes $\Phi = BA\cos\theta$, $\text{emf} = -N\Delta\Phi/\Delta t$ or $L = N\Delta\Phi/\Delta I$. A flux is never drawn in the field's hue |
| Self-inductance $L$ and mutual inductance $M$ | `inductance` (declared here) | The coil whose inductance a slider sets, the inductor symbol where a circuit diagram stands it for its henries, and every readout of $L$ or $M$. Mutual inductance wears the same hue as self-inductance |
| Magnetic field $B$ | `magnetic-field` (Chapter 22) | Every field line, every dot and cross, the field a coil raises to oppose a change. The induced and the applied field share the hue and are told apart by label and direction |
| Resistance $R$, reactances $X_L$, $X_C$, impedance $Z$ | `resistance` (Chapter 20) | One category: the ohms beside a resistor, the impedance triangle's sides, every readout of Ohm's law for AC. Where a graph shows one curve per element (the resistor's $R$, the inductor's $X_L$, the capacitor's $X_C$ against frequency) each curve takes its element's referent colour, and $Z$, which is the circuit's, keeps the resistance hue |
| Current $I$, $I_0$, $I_\text{rms}$, $\Delta I$, the coils' $I_1$, $I_2$, a transformer's $I_\text{p}$, $I_\text{s}$, an eddy or leakage current | `current` (Chapter 20) | The arrow along every wire, the loops in an eddy-current plate, the RL circuit's growth and decay curves |
| Emf, voltage, $V_0$, $V_\text{rms}$, $V_\text{p}$, $V_\text{s}$, the element voltages $V_R$, $V_L$, $V_C$ and their peaks | `voltage` (Chapters 19 and 21) | A generator's sinusoid, the rectified pulses, every readout. A back emf is a voltage, told from the driving emf by label and arrow. The element voltages of 23.12 are one category; drawn as one curve per element they take the elements' referent colours and keep their dashes |
| Area $A$, $\Delta A$ | `area` (Chapter 5) | The area of a loop, a coil or a solenoid's cross-section, its slider, and every readout that writes $\Phi = BA\cos\theta$, $\text{emf}_0 = NAB\omega$ or $L = \mu_0N^2A/\ell$ |
| Angle $\theta$, $\theta_1$, $\Delta\theta$, phase angle $\phi$ | `angle` (Chapter 3) | The angle between a field and the perpendicular to a loop, its slider and arc, the angle a generator coil has turned on the axes of 23.5's graphs, and the phase angle on 23.12's impedance triangle |
| Position, a distance, a radius $r$, a width $w$, the length of a rod or a solenoid | `position` (Chapter 2) | The rail separation and the tether's length on their sliders and brackets, a bob's displacement, a solenoid's length and diameter. The book writes the length as $\ell$, which has no macro of its own and stays plain in the maths |
| Capacitance $C$, frequency $f$, $f_0$, time $t$, $\tau$, $T$, angular velocity $\omega$, energy, power, velocity, force, charge, electric field | the book's categories | As before: frequency drives 23.11 and 23.12, time is every clock axis and the marks at whole time constants, $\omega$ is the generator's and motor's speed, energy the inductor's store, power a transformer's and a stalled motor's, velocity and force the rod's and the plate's, charge the capacitor's, the electric field the LC circuit's capacitor |

Ink: the number of turns $N$ and the turns ratio (counts), $\mu_0$ (a constant),
the power factor $\cos\phi$ and the fractions 0.632 and 0.368 (ratings), and
every frame, wire and source that the text does not name.

**Flux is not the field.** A strong magnet held still inside a coil induces
nothing, and a loop turned edge-on to a field that has not changed catches no
flux. If $\Phi$ and $B$ shared a hue, every figure in 23.1 would argue against
its own colours. The field lines drawn in space wear the field hue, and the
count of them that passes through a loop wears the flux hue: the same lines,
differently coloured where they cross the surface.

**An ohm is an ohm.** Resistance, the two reactances and impedance are one
category, and so are $V_R$, $V_L$ and $V_C$; the section's point is that they
are one kind of quantity that combines into a fourth. What tells the
inductor's reactance from the capacitor's is the element it belongs to: the
resistor, the inductor and the capacitor are referents of 23.11 and 23.12, a
curve that is one element's takes that element's colour, and the subscripts R,
L and C of $X_L$, $X_C$, $V_R$, $V_L$, $V_C$ and their peaks are split to the
same colours through their variables rows' `ref`. Every such curve keeps its
dash, so the graphs read with colour off.

**Referents.** The things the text points at are referents and are drawn in
their referent colours through `F.ref`: Faraday's two coils, iron ring, switch
and galvanometer, the bar magnet and its coil, the turning coil, its magnet and
rings, the square loop (23.1); the single loop, the bar magnet and coil (23.2);
the rod, rails and resistor, the tether, shuttle, satellite and ionosphere
(23.3); the three bobs and their magnet, the plate, the balance and its disc,
the can, fitting, bottle, ramp and buried magnet (23.4); the generator coil,
its poles, slip rings and split ring (23.5); the motor and its coils, the lamp,
feeder lines and vacuum cleaner's motor (23.6); the plant, step-up
transformer, line, substation, pole transformer and house, and the primary,
secondary and core (23.7); the live, neutral and earth wires, the breaker, the
case, the appliance, the person, the plug, the GFI's coil and the isolation
transformer (23.8); coil 1 and coil 2 with their galvanometer, the heating
element, the switch, the camera flash's switch, battery and capacitor, and the
solenoid (23.9); the battery, switch, inductor and resistor (23.10); the
inductor, capacitor, resistor and source (23.11); the same four, the wheel,
spring, shock absorber and mass of the analogy, and the two circuits of the
resonance curve (23.12). The subscripts p and s name the primary and the
secondary, and 1 and 2 the two coils of 23.9, and are split to their colours.
Where one section's referents appear on several figures (23.8, and the
mechanical analogy of 23.12), they are all indexed on the first figure so that
no two share a colour on any figure that draws both. A quantity drawn on a
referent keeps its category's hue: the current along the live wire, the field
in a coil, the voltage across an element.

**Two kinds of line on one graph.** Most figures of 23.10, 23.11 and 23.12 draw
a current and a voltage against the same axis, and the reader must see which
leads which. The two wear their own hues; a third quantity on the same axis,
a reactance or a power, wears its own too. The two resistances of Figure
23.48's resonance curve are two circuits, so each wears its circuit's referent
colour and the second is dashed as well.

No figure keeps `F.cat`: the three pendulum bobs of 23.4, the one place the
old plan used it, are referents. The element palette is not used: no figure
draws a named particle. A colour that is the physical fact arises only on the
introduction's two photographs, which are kept as the book prints them; the
insulation colour codes of 23.8 are never drawn, since the section's own note
is that they differ from one region to another.

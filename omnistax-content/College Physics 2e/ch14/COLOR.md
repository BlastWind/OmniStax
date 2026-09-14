# Chapter 14 colour plan

Prepared 2026-09-14. Approved with `config.md`. This chapter uses the book's
declared physical types and the app's selected palette, as root rule 7
requires, and declares no type of its own. No figure hard-codes hues, and
every page binds only the union of the types its own figures actually draw.
The introduction binds none.

| Quantity | Type | Treatment |
|---|---|---|
| Heat $Q$, and its variants $Q_\text{hot}$, $Q_\text{cold}$, $Q_\text{net}$ | `energy` | One hue; heat is energy in transit and wears the hue work and kinetic energy wore in Chapter 7. A bar that states an amount of heat, a wavy arrow that carries it and the $Q$ of every readout are this type. The variants are told apart by their subscripts, never by another hue |
| The rate of heat transfer $Q/t$, in watts | `power` | One hue; a heat current drawn through a slab at its rate, a gauge or bar of watts and the number in watts a readout prints are this type. The fraction itself is written with $Q$ in the energy hue over $t$ in the time hue, so the reader sees a power made of an energy and a time, as Chapter 7 wrote $P = W/t$ |
| Temperature $T$, $T_1$, $T_2$, $T_\text{f}$, $T_\text{i}$, $T'$, $T_\text{hot}$, $T_\text{cold}$, and every temperature change $\Delta T$ | `temperature` (Chapter 13) | One hue, declared by Chapter 13 and used here by name. A temperature bar beside a body, a thermometer's column, the axis of the heating curve, a temperature slider and every $T$ of a readout wear it. A body never wears it: a hot pan and cold water are told by their labels and their bars, not by a red and a blue tint |
| Elapsed time $t$ | `time` | Bind where a figure exposes a clock: two bodies coming to equilibrium, Joule's apparatus, a heat current, a convective loop |
| Work $W$, kinetic and potential energy $\text{KE}$, $\text{PE}$ | `energy` | The same hue as heat, because the argument of 14.1 and of the brakes of 14.2 is that they are the same quantity; told apart by their letters |
| Density $\rho$, in the convection of 14.6 and the hot-air problem of 14.7 | `density` (Chapter 11) | Bind only where a figure states it; a warm parcel of fluid that rises is drawn rising, not tinted |
| Speed $v$ of the wind in Table 14.4 | `velocity` | Bind where a figure carries a wind-speed slider |
| Mass $m$; area $A$; thickness $d$; specific heat $c$, $c_\text{p}$, $c_\text{v}$; latent heats $L_\text{f}$, $L_\text{v}$, $L_\text{s}$, $L$; thermal conductivity $k$; the $R$ factor; emissivity $e$; the Stefan-Boltzmann constant $\sigma$; every percentage and ratio | Untyped | Ink, including the sliders that set them, the choices that pick them from a table and the equation symbols. A material constant follows its material's label into ink |

Three rules of rule 7 bite in this chapter and are written down so that no
section has to decide them twice.

A material constant is ink, and what changes colour when the reader changes
the material is the heat. When the reader picks water in place of copper on
14.4, the bar of heat $Q$ grows by 10.8 in the energy hue and the readout
writes $Q = mc\Delta T$ with $Q$ and $\Delta T$ in their hues and $m$ and $c$
in ink; when the reader picks Styrofoam in place of silver on 14.17, the heat
current through the slab slows to a crawl in the power hue and $k$ stays in
ink beside it. The same holds for $L$ on the heating curve, whose plateaus are
lengths of heat in the energy hue while the coefficient that sets them is
ink, and for $e$ and $\sigma$ in the Stefan-Boltzmann law, where the bars of
emitted and absorbed power carry the colour and the two constants do not. The
case for this is in `exploration.md`.

Heat in an amount and heat at a rate are two types, and a page binds the one
it draws. 14.1, 14.2 and 14.3 are about amounts: a bar of $Q$, the heat a
phase change costs, the heat one body loses and another gains, all `energy`.
14.5, 14.6 and 14.7 are about rates: every law they state is for $Q/t$ in
watts, and the current, the gauge and the number are `power`. A page that
draws both, such as 14.5 where a rate is multiplied by a day to melt a mass
of ice, binds both and the readout shows the multiplication with each side in
its own hue.

A phase and a temperature are told by packing and by bars, never by tint.
14.8's molecules are packed tight, loose and flying, and are drawn as
particles with `F.el()` for the substance the reader picks from Table 14.2
(water by default); the short arrows on them are the book's marks for the
limits of their motion and are drawn as marks, still, since the figure's idea
is an amount of heat and `config.md` keeps 14.8 still. 14.16's molecules on the two sides of a
contact surface are the same particles at two average speeds, not two
colours. The visible band of 14.29's spectrum is a colour that is the physical
fact, drawn as the fact from violet to red; the three curves at 3000 K,
4000 K and 6000 K are instances of one untyped quantity, the intensity, told
apart with `F.cat(i)`, never in a hue the page has bound, and a temperature
slider that replaces the three curves with one moving curve wears the
temperature hue on the slider and the readout alone.

A page binds only what it draws. 14.1 binds energy, temperature and time;
14.2 binds energy and temperature; 14.3 binds energy and temperature; 14.4,
whose one figure sorts three mechanisms and states no quantity, binds nothing
unless its heat arrows are labelled $Q$, in which case energy alone; 14.5
binds power, temperature and, where the ice-box example is drawn, energy and
time; 14.6 binds power, temperature and time, and density and velocity where
a figure states them; 14.7 binds power and temperature, and energy and time
through its readouts, which write every rate as $\kQh/\kt$ under the rule
for the fraction above. No page binds a type merely because the chapter uses
it.

All canvas colours come from `C(type)` and `PAL`. Turning colour off must
leave labels, bar heights, arrow directions and packing sufficient to
understand every figure.

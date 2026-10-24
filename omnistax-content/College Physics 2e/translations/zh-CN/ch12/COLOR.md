# Chapter 12 colour plan

Prepared 2026-09-14, brought under root item 7 on 2026-10-04. The rule is
item 7 and its four ways; the book's `COLOR.md` names the categories. This
file records what the chapter decides that a section should not have to
decide again. No figure hard-codes a hue.

## Categories

Every category is coloured on every page. The ones this chapter meets most:

| Quantity | Category |
|---|---|
| Flow rate $Q$, $Q_1$, $Q_2$, and a branch's share of it | `flow-rate`, told apart by label |
| Viscosity $η$ | `viscosity` |
| Pressure $P$, $P_1$, $P_2$, $P_\text{i}$, $P_\text{o}$, $P_\text{front}$, $P_\text{back}$, a pressure difference, a back pressure | `pressure` |
| Density $ρ$, $ρ_\text{fl}$, $ρ_\text{obj}$ | `density` |
| Speed $v$, $\bar v$, $v_1$, $v_2$, terminal speed $v_\text{t}$ | `velocity` |
| Radii, lengths and heights $r$, $r_1$, $r_2$, $l$, $L$, $R$, $d$, $h$, $Δx$, $x_\text{rms}$ | `position` |
| Areas $A$, $A_1$, $A_2$ | `area` |
| Volume $V$ | `volume` |
| Mass $m$ | `mass` |
| Diffusion constant $D$ | `diffusion-constant` |
| $\tfrac12 ρv^2$ and $ρgh$ | `energy` |

The resistance to flow $R$ of 12.4, the Reynolds numbers $N_\text{R}$ and
$N'_\text{R}$, the branch counts $n_1$, $n_2$, the concentrations $C_1$, $C_2$
and every ratio stay in ink.

The three terms of Bernoulli's equation are not one category. $P$ wears the
pressure hue it wore in Chapter 11; $\tfrac12 ρv^2$ and $ρgh$ are energies per
unit volume and wear the energy hue. The section's argument is that pressure
is energy per unit volume too, and the reader sees it only if the pressure
term arrives in its own colour and is set beside two energies. The bars of the
Bernoulli figures are drawn in those two hues and the total ruled across the
top is drawn in ink, because the total belongs to no one term.

The fluid drawn through a pipe in 12.1 and 12.3 wears the flow-rate hue: it is the stream the
section measures. A tube's radius is a length and wears position, so dragging
it changes two hues, the stream's and the radius's, and the readout of
Poiseuille's law shows $Q$, the pressure difference, $η$, $r$ and $l$ each in
its own.

## Referents

Each section lists its referents in `referents`. The points 1 and 2 of a
tube are referents of the figure that draws them, and the subscripts that
name them are split (12.1: the hose and the nozzle of Example 12.2, the wide
and narrow parts of Figure 12.3; 12.2: the two points of the Bernoulli figure;
12.3: the surface and the outlet of the dam). The cars, wings, plates, tubes,
pumps, vessels, membranes and solutions the figures draw are referents of
their figures, and their walls, outlines and name labels take `F.ref`. A
quantity drawn on a referent keeps its category's hue.

The three tracers of 12.7's random walk are not named one by one in the
text, so they are told apart with `F.cat(i)`.

## Facts and conventions

A molecule drawn in 12.7 is an element and takes `F.el(symbol)`. Water, and
the mercury or water of 12.2's manometer, are drawn in shades of ink.

Turning colour off must leave labels, arrow directions and bar heights
sufficient to understand every figure.

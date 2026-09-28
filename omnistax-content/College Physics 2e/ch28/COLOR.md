# Chapter 28 colour plan

Prepared 2026-09-28 in the chapter's prep pass, beside `config.md`. The chapter
declares no type and hard-codes no hue except the one physical-fact colour below;
every page binds only the types its own figures draw (root rules 7 and 22).

Relativity compares two observers' numbers for one quantity, so the rule that a
variant of a type keeps its hue does most of the work here: proper time and
dilated time are one `time` hue, proper and contracted length one `position`
hue, $u$ and $u'$ one `velocity` hue. The proper value is the variant with the
subscript 0 and is drawn hollow or dashed, as an initial value is in this book;
the two frames are told apart by their labels and by the categorical palette on
the observers, never by a second type hue.

| Quantity | Type | Treatment |
|---|---|---|
| $c$, $v$, $u$, $u'$ | `velocity` | one hue; the wall at $c$ is a dashed line in that hue |
| $\Delta t$, $\Delta t_0$ | `time` | $\Delta t_0$ hollow or dashed |
| $L$, $L_0$, $D$, $s$, $\lambda_{\text{s}}$, $\lambda_{\text{obs}}$ | `position` | $L_0$ hollow or dashed |
| $f_{\text{s}}$, $f_{\text{obs}}$ | `frequency` | 28.4 only |
| $p$ | `momentum` | 28.5 and 28.6 |
| $E$, $E_0$, $\text{KE}_{\text{rel}}$, $\text{KE}_{\text{class}}$, $W_{\text{net}}$ | `energy` | $\text{KE}_{\text{class}}$ dashed beside the relativistic curve |
| $\gamma$, $m$, $\Delta m$, $v/c$ | untyped | ink |

| Section | Types bound |
|---|---|
| intro | none |
| 28.1 | none, or `velocity` if its plan draws a figure |
| 28.2 | `time`, `velocity`, `position` |
| 28.3 | `position`, `velocity`, `time` |
| 28.4 | `velocity`, `position`, `frequency` |
| 28.5 | `momentum`, `velocity` |
| 28.6 | `energy`, `velocity`, `momentum` |

Families of rule 7 used: type hues, bound per page; the categorical palette
`F.cat(i)` for the two observers or frames (A and B, astronaut and Earth-bound
observer, the two twins), never in a bound hue; one physical-fact colour, the
observed light of 28.4's Doppler figure where the wavelength is visible, named in
the plan line. The element palette does not arise: a muon, an electron or a
π-meson is named by its label, and a figure that draws one as a particle uses
`F.el` if the library has the particle, otherwise ink with a label. A ship, a
planet and a star are ink. Colour-off keeps every figure legible from labels,
the frame labels and the caption.

## As built

28.1 binds `velocity`, for its Sim of light from a moving source. 28.2's twins
figure draws `time` alone, with the twins in `F.cat`. The electron of 28.3's
Figure 28.12 is drawn with `F.el('e-')`, the one use of the element palette in
the chapter. 28.4's Doppler Sim draws the observed light in its spectral colour
where the wavelength is visible and in ink outside it, the one physical-fact
colour. Every other section binds the types the table above gives it.

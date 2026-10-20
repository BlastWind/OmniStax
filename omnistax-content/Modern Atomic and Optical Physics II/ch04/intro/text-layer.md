<!-- page 64 -->
Chapter 4
Propagation of light in a
resonant medium
We have now developed a formalism to describe coherent and incoherent
interactions between atoms and light. These techniques will prove useful
in understanding how a resonant light beam propagates through an atomic
cloud. In particular, we have previously derived how the applied field induces
coherences and transitions in the atomic system; if the system is to be self-
consistent, we must also consider the effect of the induced atomic dipole
back on the field.
An atom influences the applied field through its dipole moment
$⟨$ ˆ $d⟩$ = $μρ$ 21 + $μ∗ρ$ 12 $.$
(4.1)
A single atom has a very weak effect on a classical field, but a large ensemble
of atoms can drastically affect light propagation, so we might seek to identify
a macroscopic polarization associated with $N$ atoms in a volume $V$ by
$P$ = $N$
(4.2)
$V$ ( $μρ$ 21 + $μ∗ρ$ 12) $,$
and solve for the density matrix components using the single-atom optical
Bloch equations. However, a large ensemble of atoms may only be treated
using our single-atom formalism if the atoms evolve independently. The as-
sumption of independent atoms is valid provided that
(1) The atoms do not interact strongly on the timescales of the processes
we wish to describe.
(2) Each atom is damped by its own reservoir. More quantitatively, the
atoms must be far enough apart $|ri −rj| > λ$ that we may neglect interfer-
ence from two atoms interacting with the same mode of the reservoir.
<!-- page 65 -->
(3) The applied field is classical.
Mathematically, atoms comprising an atomic ensemble are independent when
the ensemble density matrix may be factorized into a direct product of in-
dividual atomic density matrices,
$N$
$Y$
ˆ $ρensemble$ =
ˆ $ρ$ (1) $⊗. . . ⊗$ ˆ $ρ$ ( $N$ ) $.$
(4.3)
$j$ =1
Since our fields may vary in space as well as time, it is convenient to
define a macroscopic polarization,
$X$
$P$ ( $ri$ ) = $Ni$
( $μρ$ 21( $rj$ ) + $μ∗ρ$ 12( $rj$ )) $,$
(4.4)
$Vi$
$rj∈Vi$
which depends on the total dipole moment of the set of $Ni$ atoms at positions
${rj}$ within a small volume $Vi$ centered at position $ri$ . Using the optical
Bloch equations, we can calculate the polarization for a given field; self-
consistency requires that this polarization then act as a source term in the
Maxwell equations governing light propagation through the atomic cloud:
$∇×$ E
=
$−∂$ B
(4.5)
$∂t$
$$
$$
1
$∂$
$∇×$ B
=
E + 1
P
$.$
(4.6)
$c$ 2
$∂t$
$ε$ 0
In principle, we could now self-consistently calculate the evolution of the
atomic medium and applied light field. In practice, we will typically deal
with nearly monochromatic light fields, for which a considerable simplifica-
tion can be obtained by using the slowly-varying envelope approximation.

<!-- captions -->


<!-- footnotes -->


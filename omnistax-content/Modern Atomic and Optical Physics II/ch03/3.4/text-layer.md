<!-- page 58 -->
3.4
The master equation
3.4.1
Remarks on the generalized master equation
In the previous lecture we derived the equation governing the evolution of an
open system coupled to a Markovian reservoir. In the Schrodinger picture,
this so-called master equation takes the form
$$
$$
∆ˆ $ρS$
$γp$
$†$ ˆ $ρS −$ ˆ $Sp$
$†$ ˆ $ρS$ ˆ $Sp$
=
$−P$
ˆ $Sp$ ˆ $Sp$
+ $h.c.$
∆ $t$
$p$
2  ̄ $n$
$$
$γp$
$†$ ˆ $Sp$ ˆ $ρS −$ ˆ $Sp$ ˆ $ρS$ ˆ $Sp$
$†$
$−P$
ˆ $Sp$
+ $h.c.$
(3.79)
$p$
2 ( ̄ $n$ + 1)
+ 1
$iħ$ [ ˆ $HS,$ ˆ $ρS$ ] $.$
The system time dependence is built into the last term, and we have included
a sum over different interactions with the reservoir. Explicitly, the system-
reservoir interaction takes the form ˆ $HSR$ = $P$
$p$ + $h.c.$ , and each term
$p$ ˆ $Sp$ ˆ $R†$
has its associated rate $γp$ . In order to incorporate multiple system-reservoir
interaction terms, we implicitly make an assumption that the different terms
are incoherent, so that the interference between them vanishes. While this
requirement is satisfied most of the time, one should bear in mind that there
exist cases where such interference is important.
Although Eq. (3.79) allows us to efficiently account for the effects of
the reservoir, this added information comes with a computational price.
Suppose that we are interested in studying the dynamics of an isolated $n$ -
level system.
In the wavefunction approach, evolution of this system is
governed by $n$ differential equations for the state amplitudes ${ci$ ( $t$ ) $}$ . When
the effect of the environment is included, the system must be described by
the $O$ ( $n$ 2) differential equations comprising Eq. (3.79). The large number
of equations can complicate the mathematics, and we will frequently need
more sophisticated tools to extract a solution.
<!-- page 59 -->
One more caveat deserves attention: In our previous derivation, we as-
sumed that the state of the universe was factorizable, i.e.
 ̃ $ρ$ ( $t′$ ) $≈$  ̃ $ρS$ ( $t$ ) $⊗$  ̃ $ρR$ ( $t$ ) $,$
(3.80)
where $t′ −t ≤$ ∆ $t$ . We made this statement with little justification, but we
will now show that our assumption is valid for a reservoir with no memory,
$τc$ = 0.
Suppose that the system and reservoir do not interact until a time $t$ = $ti$ ,
so that for all times prior to $ti$ the universe density operator is factorizable.
At some time $t > ti$ , we may certainly write
 ̃ $ρ$ ( $t$ ) =  ̃ $ρS$ ( $ti$ ) $⊗$  ̃ $ρR$ ( $ti$ ) +  ̃ $ρcorr$ ( $ti, t$ )
(3.81)
where  ̃ $ρcorr$ ( $ti, t$ ) depends on the correlations built up between the system
and the reservoir prior to the time interval $t →t$ + ∆ $t$ for which we cal-
culated the correlations. We will use perturbation theory to estimate the
contributions to ∆ ̃ $ρS$ =  ̃ $ρS$ ( $t$ + ∆ $t$ ) $−$  ̃ $ρS$ ( $t$ ) which we neglected by setting
 ̃ $ρcorr$ ( $ti, t$ ) = 0. To leading order,
$Z t$
 ̃ $ρcorr$ ( $ti, t$ ) $≈$ 1
[  ̃ $HSR$ ( $t′$ ) $,$  ̃ $ρS$ ( $ti$ ) $⊗$  ̃ $ρR$ ( $ti$ )] $,$
(3.82)
$iħ$
$ti$
so that the neglected change in the system density operator is
$Z t$
$Z t$ +∆ $t$
∆ ̃ $ρS ∝$
$dt′$
$dt′′ ⟨$  ̃ $HSR$ ( $t′′$ )  ̃ $HSR$ ( $t′$ ) $⟩$
$.$
(3.83)
$ti$
$t$
$|$
${z$
$}$
$∝δ$ ( $t′′−t′$ )
Recall that the time correlation function for a reservoir with no memory
is a delta function; since the time intervals for integration do not overlap,
the delta function is zero everywhere within the region of integration. The
contributions to ∆ˆ $ρS$ due to  ̃ $ρcorr$ ( $ti, t$ ) thus vanish to leading order (and all
higher orders) for $τc$ = 0. In fact, a more rigorous analysis shows that the
corrections scale as $τ$ 2
$c$ .
We have now shown that a reservoir with no memory has a local inter-
action with the system; that is, it immediately forgets about all previous
correlations and depends only on the current state. This amnesia implies
irreversibility since information is lost (so entropy must increase). For prac-
tical purposes, irreversible vs. reversible dynamics will provide our boundary
between system and environment. Any part of the environment which ex-
hibits time reversibility we will include in the system even if we are not
explicitly interested in its evolution.
<!-- page 60 -->
We have highlighted two situations where the master equation may not
suffice: (1) when there is interference between different interaction terms and
(2) when the reservoir interaction is reversible. A more thorough discussion
of the assumptions and approximations implicit in the master equation may
be found in, e.g., Cohen-Tannoudji et al., “Atom-Photon Interactions”.
3.4.2
Example: The two-level atom
The master equation is frequently used to describe the evolution of a driven
two-level system coupled to a dissipative environment. The coherent inter-
action with the driving field takes the form
ˆ $HS$ = $−ħδ|$ 2 $⟩⟨$ 2 $|$ + $ħ$ Ω $∗|$ 1 $⟩⟨$ 2 $|$ + $ħ$ Ω $|$ 2 $⟩⟨$ 1 $|,$
(3.84)
while the reservoir effects enter the density matrix equation:
∆ˆ $ρS$
=
$−γ$
∆ $t$
2( ̄ $n$ + 1) ( $σ$ 22ˆ $ρS −σ$ 12ˆ $ρSσ$ 21) + $h.c.$
$−γ$
(3.85)
2  ̄ $n$ ( $σ$ 11ˆ $ρS −σ$ 21ˆ $ρSσ$ 12) + $h.c.$
+ 1
$iħ$ [ ˆ $HS,$ ˆ $ρS$ ] $,$
where we have used ˆ $S$ = $|$ 1 $⟩⟨$ 2 $|$ = $σ$ 12 in Eq. (3.79), and $σij$ = $|i⟩⟨j|$ . Taking
the matrix elements $⟨i|$ ∆ˆ $ρS$
∆ $t |j⟩$ =  ̇ $ρij$ yields four differential equations for the
components of the density matrix,
 ̇ $ρ$ 22
=
$−γ$ ( ̄ $n$ + 1) $ρ$ 22 + $γ$  ̄ $nρ$ 11 + $i$ Ω $∗ρ$ 21 $−i$ Ω $ρ$ 12
(3.86)
 ̇ $ρ$ 11
=
$γ$ ( ̄ $n$ + 1) $ρ$ 22 $−γ$  ̄ $nρ$ 11 $−i$ Ω $∗ρ$ 21 + $i$ Ω $ρ$ 12
(3.87)
 ̇ $ρ$ 12
=
$−γ$
(3.88)
2(2 ̄ $n$ + 1) $ρ$ 12 $−iδρ$ 12 $−i$ Ω $∗$ ( $ρ$ 22 $−ρ$ 11)
 ̇ $ρ$ 21
=
$−γ$
(3.89)
2(2 ̄ $n$ + 1) $ρ$ 21 + $iδρ$ 21 + $i$ Ω( $ρ$ 22 $−ρ$ 11) $.$
These equations are known as the “optical Bloch equations.” Note that only
two of these equations are independent, since the evolution equations must
preserve probability, $ρ$ 11 + $ρ$ 22 = Tr[ˆ $ρS$ ] = 1, and hermiticity, $ρ$ 12 = $ρ∗$
21.
Three types of processes contribute to the system evolution described by
Eq. (3.89):
(1) coherent driving $∝$ Ω,
(2) thermal photons $∝γ$  ̄ $n$ , and
(3) spontaneous emission $∝γ$ .
Coherent interactions are characteristic of the ideal two-level system intro-
duced in previous lectures, and come from the system Hamiltonian terms.
<!-- page 61 -->
Thermal photons lead to incoherent transitions in both directions, whereas
spontaneous emission only allows population in $ρ$ 22 to leak into $ρ$ 11:
 ̇ $ρ$ 22
=
$γ$  ̄ $n$ ( $ρ$ 11 $−ρ$ 22) $−γρ$ 22 + $. . .$
(3.90)
 ̇ $ρ$ 11
=
$γ$  ̄ $n$ ( $ρ$ 22 $−ρ$ 11) + $γρ$ 22 + $. . .$
(3.91)
Although incoherent processes can increase and decrease the populations
$ρ$ 11 and $ρ$ 22, they only decrease the off-diagonal terms. The decay rate of
the coherences $γ$ 12 (defined through  ̇ $ρ$ 12 = $−γ$ 12 $ρ$ 12 + $· · ·$ ) is related to the
rate of population decay out of state $|$ 1 $⟩$ , $γ$ 1 = $γ$  ̄ $n$ , and $|$ 2 $⟩$ , $γ$ 2 = $γ$ ( ̄ $n$ + 1),
by
$γ$ 12 = $γ$ 1 + $γ$ 2
= 2 ̄ $n$ + 1
$γ$ = $γ$ 21 $.$
(3.92)
2
2
For multi-level atoms, this relation holds for any two states and their asso-
ciated coherence, and only depends on the rates out of the states, not into
them.
While we see that there is a coherence decay rate associated with popu-
lation decay, in general there also exist processes which decrease the coher-
ences without affecting the populations. These are typically incorporated
phenomenologically into the master equation by setting
$γ$ 12 = $γ$ 21 = $γ$ 1 + $γ$ 2
+ $γd,$
(3.93)
2
where $γd$ is the so-called decoherence or dephasing rate. Such decoherence
can result from a variety of sources including, for example, finite linewidth
of an applied laser field or atom-atom interactions.
3.4.3
Atomic response to a resonant field
We will consider two special cases to gain physical insight into the dynamics
of an atom as it undergoes simultaneous coherent and incoherent pumping.
Weak applied field
For sufficiently small applied fields Ω, the master equation can be treated
perturbatively. Since the populations change by terms $∝$ Ω2, to lowest order
we may set $ρ$ 11 $≈ρ$ (0)
11 + $O$ (Ω2) $, ρ$ 22 $≈ρ$ (0)
22 + $O$ (Ω2) $,$ and consider only the
evolution of the coherences,
 ̇ $ρ$ 21 $≈−$ ( $γ$ 21 $−iδ$ ) $ρ$ 21 + $i$ Ω( $ρ$ (0)
(3.94)
22 $−ρ$ (0)
11 ) $.$
<!-- page 62 -->
Since this equation is now linear in Ω, we may solve it by taking the Fourier
transform of $ρ$ 21 and Ω,
$Z$
$ρ$ 21( $t$ )
=
$d$ ( $δν$ ) $e−iδνtρ$ 12( $δν$ )
(3.95)
$Z$
Ω( $t$ )
=
$d$ ( $δν$ ) $e−iδνt$ Ω( $δν$ ) $.$
(3.96)
With this substitution, we find that in the weak field limit the coherence at
frequency $δν$ is a Lorentzian with effective detuning $δ$ + $δν$ :
22 $−ρ$ (0)
11 )
$ρ$ 21( $δν$ ) = Ω( $δν$ ) $i$ ( $ρ$ (0)
(3.97)
$γ$ 21 $−i$ ( $δ$ + $δν$ ) $.$
This approach may be generalized to multilevel atoms, so that
$i$ ( $ρ$ (0)
$ii −ρ$ (0)
$jj$ )
$ρij$ ( $δν$ ) = Ω $ij$ ( $δν$ )
(3.98)
$γij −i$ ( $δij$ + $δν$ ) $,$
whenever the populations $ρii$ and $ρjj$ are essentially frozen in time.
For
atoms approximately in the ground state ( $ρ$ (0)
11 $≈$ 1 $, ρ$ (0)
22 $≈$ 0), the atomic re-
sponse resembles that of a classical dipole, as the atom acquires a dipole
moment linear in the field strength. On the other hand, for sufficiently large
Ωthe quantized nature of the atom becomes important. In this case the
population in the upper state cannot be neglected and leads to effects like
non-linearity of the atomic response and saturation.
Continuous-wave fields of arbitrary strength
When the applied field is constant in time, we expect that the system will
undergo Rabi oscillations which are damped by the reservoir interaction.
The decay terms drive the system into an equilibrium state after a time
$∝$ 1 $/γ$ 21, and a steady-state description of the system is easily found by
setting the time derivative of its density matrix elements to zero. Solving
for the coherence,
 ̇ $ρ$ 21 = 0 $⇒ρ$ 21 = $i$ Ω( $ρ$ 22 $−ρ$ 11)
(3.99)
$γ$ 21 $−iδ$
we then find the steady state population (for  ̄ $n$ = 0)
$Ropt$
$ρ$ 22 =
$,$
(3.100)
$γ$ + 2 $Ropt$
<!-- page 63 -->
where
2
Ω
$Ropt$ = 2 $γ$ 21
(3.101)
Γ21
and Γ21 = $γ$ 21 $−iδ$ . $Ropt$ acts like an incoherent pumping rate associated
with the applied (coherent) field.
The pumping rate $Ropt$ determines two important limits:
$Ropt ≪γ$
$⇒$
$ρ$ 22 $→$ 0
(3.102)
$Ropt ≫γ$
$⇒$
$ρ$ 22 $→$ 1
(3.103)
2 $.$
In the first case, the coherent field is weak, so that the atom ends up in the
ground state with almost unit probability. More specifically it can be seen
that the population in the excited state is proportional to the field intensity
in this limit ( $ρ$ 22 $∝|$ Ω $|$ 2), and the perturbative weak-field approach is valid.
In the second case the applied field leaves the atom in a statistical mixture
of the ground and excited states with equal weight, and the atomic response
is said to be saturated.
Note that the weak-field limit is sufficient but not necessary to disregard
evolution of the coherences (i.e., to set  ̇ $ρ$ 21 $≈$ 0); it is only required that
$|$ Ω $|$ 2 $≪γ$ 2
21 + $δ$ 2. The solution to $ρ$ 21 given by Eq. (3.99) is analogous to
making an adiabatic approximation that the coherences adiabatically follow
the population difference. Another way of saying this is that in the limit
$|$ Ω $|$ 2 $≪γ$ 2
21 + $δ$ 2, the populations change on a time scale much slower than
the natural decay/oscillation time of the coherence. The resulting equations
for the populations,
 ̇ $ρ$ 22 = $−γρ$ 22 + $Ropt$ ( $ρ$ 11 $−ρ$ 22) with
 ̇ $ρ$ 11 = $−$  ̇ $ρ$ 22 $,$
(3.104)
are known as the “rate equations.” They apply in situations when a coher-
ence $ρ$ 21 is present, but its dynamics are unimportant. For example, the
rate equations can be used to describe an atom interacting with incoherent
radiation, since $γ$ 21 is very large in this case due to dephasing.

<!-- captions -->


<!-- footnotes -->


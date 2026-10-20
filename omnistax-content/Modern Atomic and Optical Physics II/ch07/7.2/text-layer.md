<!-- page 115 -->
7.2
Adiabaticity for the two-level system
Adiabatic evolution can be transparently illustrated by examining a two-
level system with a time-dependent detuning ∆( $t$ ) and Rabi frequency Ω( $t$ ).
Expressed in the time-independent (bare state) basis ${|$ 1 $⟩, |$ 2 $⟩}$ , the Hamil-
tonian can be written
ˆ $H$ ( $t$ )
=
$−ħ$ ∆( $t$ ) $|$ 2 $⟩⟨$ 2 $| −ħ$ Ω( $t$ ) ( $|$ 1 $⟩⟨$ 2 $|$ + $|$ 2 $⟩⟨$ 1 $|$ )
(7.11)
<!-- page 116 -->
$$
$$
0
Ω( $t$ )
=
$−ħ$
$.$
(7.12)
Ω( $t$ )
∆( $t$ )
Diagonalizing the Hamiltonian gives us the instantaneous eigenstates $|±⟩$
and eigenenergies $ε±$ ,
$|$ + $⟩$
=
cos $θ$ ( $t$ ) $|$ 1 $⟩$ + sin $θ$ ( $t$ ) $|$ 2 $⟩$
(7.13)
$|−⟩$
=
sin $θ$ ( $t$ ) $|$ 1 $⟩−$ cos $θ$ ( $t$ ) $|$ 2 $⟩$
(7.14)
$$
$p$
$$
$ħ$
$ε±$ ( $t$ )
=
$−$ ∆( $t$ ) $±$
∆( $t$ )2 + 4Ω( $t$ )2
(7.15)
2
where the mixing angle is
$θ$ ( $t$ ) = $−$ 1
(7.16)
2 arctan 2Ω( $t$ )
∆( $t$ ) $,$
constrained to lie between 0 and $π$ . Note that $|±⟩$ and $ε±$ ( $t$ ) correspond
exactly to a set of time-dependent dressed states and dressed energies.
We wish to examine this system in the adiabatic limit, so we will assume
that ∆and Ωvary slowly enough that the adiabatic condition is fulfilled, or
$p$
$|$  ̇Ω∆ $−$ Ω ̇∆ $|$
$≪$
4Ω2 + ∆2 $.$
(7.17)
4Ω2 + ∆2
7.2.1
Rapid adiabatic passage
Adiabatic passage represents an important application of the adiabatic the-
orem in a two-level system, because it provides a robust method for trans-
ferring population from one bare state to the other. For example, suppose
the two-level system is initially in $|$ 1 $⟩$ , and we seek to transfer all of the pop-
ulation into $|$ 2 $⟩$ , but we cannot precisely control the values of ∆and Ωor
the interaction time $τ$ . With such imprecision, we will be unable to perform
a given Rabi rotation, so we seek a more robust method.
Adiabatic return
Suppose that we tried keeping ∆ $̸$ = 0 constant while sending in a pulse
Ω( $t$ ). Initially, the dressed states would coincide with the bare states, and
if the system adiabatically follows the ground state $|−⟩$ it will evolve into a
superposition of $|$ 1 $⟩$ and $|$ 2 $⟩$ for finite Ω( $t$ ). As Ω( $t$ ) $→$ 0 at the end of the
pulse, however, the system will return to its initial state $|$ 1 $⟩$ (see Fig. (9.3).
<!-- page 117 -->
Adiabatic passage
State transfer is possible when Ω $/$ ∆changes from near $−∞$ to near $∞$ over
the course of the experiment. One way to achieve this goal is to vary ∆( $t$ )
linearly in time, chirping the frequency through resonance while sending in
a pulse Ω( $t$ ). The coupling between the levels leads to an avoided crossing,
so an atom which starts out in $|$ 1 $⟩$ and adiabatically follows the ground state
$|−⟩$ will end up in $|$ 2 $⟩$ with near unit probability after a long time has passed.
7.2.2
Adiabaticity condition for the two-level system
For techniques like rapid adiabatic passage to work, the probability for the
system to transition between eigenstates $|−⟩$ and $|$ + $⟩$ must be small. In the
two-level system, the adiabaticity condition requires that the coupling terms
$⟨$  ̇+ $|−⟩$ =  ̇ $θ$ ( $t$ )
(7.18)
be small compared to the energy splitting $ε$ + $−ε−$ , or
$ħ$  ̇ $θ$ ( $t$ ) $≪|ε$ +( $t$ ) $−ε−$ ( $t$ ) $|.$
(7.19)
The minimum energy difference occurs when ∆sweeps through resonance,
so $ε$ +( $t$ ) $−ε−$ ( $t$ ) $≥$ 2 $ħ$ Ω( $t$ ). Consequently the adiabaticity condition will be
fulfilled whenever the total change in phase $δθ$ is much less than the pulse
area,
$Z ∞$
$Z ∞$
$dt$  ̇ $θ$ ( $t$ ) $≪$
$dt$ 2Ω( $t$ ) = $A.$
(7.20)
$−∞$
$−∞$
Since adiabatic passage requires $δθ$ = $O$ (1), the condition for adiabaticity
can be simply stated as $A ≫$ 1. The minimum time over which the system
will adiabatically follow $|−⟩$ is thus $τ ≈$ 1 $/$ Ω. This time is not constrained by
intrinsic atomic timescales; in particular it can be smaller than the excited
state lifetime. Consequently, the technique may be considered “rapid” even
while satisfying the adiabatic condition.
Exactly solvable system: the Landau-Zener model
This condition is a useful qualitative measure of the validity of the adiabatic
approximation, but we would like to quantify any remaining corrections to
the adiabatic result. Our discussion of adiabaticity has used perturbation
theory, so it is tempting to extend the perturbative analysis to estimate
<!-- page 118 -->
<!-- page 119 -->
loss from the instantaneous eigenstates. For example, we might postulate a
small parameter,
 ̇ $θ$
$ε$ =
(7.21)
$|ε$ + $−ε−|$
and try to expand the population loss in powers of $ε$ . However, we have not
verified that such an expansion is actually valid for this problem.
Examination of an exactly solvable problem provides a rather disturbing
answer. For a system starting out at $t$ = $−∞$ in $|$ 1 $⟩$ with Ω= Ω0 constant
and ∆= $αt$ , Landau and Zener showed that the probability of complete
state transfer to $|$ 2 $⟩$ at large times is
$PLZ$ = 1 $−e−$ 2 $π |$ Ω0 $|$ 2
$|α| .$
(7.22)
Since  ̇ $θ ∼α/$ 2Ω0, the small parameter for this system is $ε ≈α/$ 4Ω2
0, which
yields the non-adiabatic correction:
1
$PLZ −$ 1 $≈e−π$
2
$ε .$
(7.23)
This function is not analytic for small $ε$ , and thus cannot be approximated by
perturbation theory. Consequently more sophisticated methods are required
to attempt a perturbative approach for this lossless system. Surprisingly,
when loss from the excited state is included, the singularity at $ε →$ 0 van-
ishes, and a perturbation series is possible.

<!-- captions -->
7.1: Figure 7.1: A comparison of adiabatic passage and adiabatic return. The time dependent parameters ∆and Ωlead to instantaneous eigenenergies $ε±$ . Assuming that the system follows the instantaneous ground state, it will be in a mixture of states $|$ 1 $⟩$ and $|$ 2 $⟩$ with occupation probabilities $P$ 1 and $P$ 2 respectively. Clearly, adiabatic passage can result in state transfer, whereas adiabatic return leaves the system in its initial state.

<!-- footnotes -->


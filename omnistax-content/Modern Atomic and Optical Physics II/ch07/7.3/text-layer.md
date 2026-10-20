<!-- page 119 -->
7.3
Adiabatic processes in multi-level systems
In previous lectures we have seen how adiabatic processes can lead to in-
teresting phenomena in three-level systems, in particular the adiabatic fol-
lowing of the dark state which leads to EIT. If we concentrate on the most
interesting case of zero two-photon detuning, $δ$ = 0, and assume that the
Rabi frequencies are real, the Hamiltonian for a three-level system coupled
by two applied fields may be written (in the bare state basis)
ˆ $H$ = $−$ ∆ $|$ 3 $⟩⟨$ 3 $| −$ Ω1 ( $|$ 3 $⟩⟨$ 1 $|$ + $|$ 1 $⟩⟨$ 3 $|$ ) $−$ Ω2 ( $|$ 3 $⟩⟨$ 2 $|$ + $|$ 2 $⟩⟨$ 3 $|$ ) $.$
(7.24)
This Hamiltonian is diagonalized by the eigenbasis of dressed states
$|$ Φ+ $⟩$
=
sin $θ$ sin $φ|$ 1 $⟩$ + cos $θ$ sin $φ|$ 2 $⟩$ + cos $φ|$ 3 $⟩$
(7.25)
$|$ Φ0 $⟩$
=
cos $θ|$ 1 $⟩−$ sin $θ|$ 2 $⟩$
(7.26)
$|$ Φ $−⟩$
=
sin $θ$ cos $φ|$ 1 $⟩$ + cos $θ$ cos $φ|$ 2 $⟩−$ sin $φ|$ 3 $⟩,$
(7.27)
<!-- page 120 -->
where
Ω1
tan $θ$
=
(7.28)
Ω2
$p$
$|$ Ω1 $|$ 2 + $|$ Ω2 $|$ 2
tan 2 $φ$
=
$−$
= $−$ Ω
(7.29)
∆
∆ $.$
The corresponding dressed energies are
$$
$p$
$$
1
$ε$ +
=
$−$ ∆+
Ω2 + ∆2
(7.30)
2
$ε$ 0
=
0
(7.31)
$$
$p$
$$
1
$ε−$
=
$−$ ∆ $−$
Ω2 + ∆2
$.$
(7.32)
2
The state $|$ Φ0 $⟩$ corresponds to the dark state $|D⟩$ of the system because it
has no overlap with the excited state $|$ 3 $⟩$ . By manipulating the system to
adiabatically follow this dark state, we can have robust control over the
population amplitudes in $|$ 1 $⟩$ and $|$ 2 $⟩$ while avoiding losses associated with
spontaneous emission from $|$ 3 $⟩$ .
7.3.1
Stimulated Raman adiabatic passage (STIRAP)
The instantaneous eigenstate $|$ Φ0 $⟩$ is a superposition of the lower states $|$ 1 $⟩$
and $|$ 2 $⟩$ with probability amplitudes controlled by the mixing angle tan $θ$ =
Ω1 $/$ Ω2. As we noted earlier, the dark state approaches the two bare states
when one of the applied fields vanishes,
$θ$ = 0
$⇒$
$|$ Φ0 $⟩$ = $|$ 1 $⟩$
(7.33)
$θ$ = $π$
$⇒$
$|$ Φ0 $⟩$ = $−|$ 2 $⟩.$
(7.34)
2
If we change the two fields such that the mixing angle varies slowly from 0 to
$π/$ 2, we can transfer population from $|$ 1 $⟩$ to $|$ 2 $⟩$ without ever populating the
excited state $|$ 3 $⟩$ . The appropriate pulse sequence begins with a pulse on the
unoccupied transition, and is consequently referred to as a “counterintuitive”
pulse sequence. More importantly, the precise shape and timing of the pulses
is not terribly important; all that matters is that the mixing angle be slowly
swept over $π/$ 2. Experiments have verified that STIRAP is an efficient and
robust approach to state transfer, provided that the two-photon detuning
can be kept small. Such adiabatic transfer techniques are particularly useful
in molecular systems where the abundance of electronic, vibrational, and
rotational decay channels makes dynamical control impossible.
<!-- page 121 -->
<!-- page 122 -->
<!-- page 123 -->
7.3.2
Four-level systems
The three-level analysis can be generalized to higher dimensional Hilbert
spaces with similar structure. For example, consider a system composed of
three metastable states ${|$ 1 $⟩, |$ 3 $⟩, |$ 4 $⟩}$ resonantly coupled to an excited state
$|$ 2 $⟩$ by applied fields ${$ Ω1 $,$ Ω3 $,$ Ω4 $}$ . The Hamiltonian for such a system can
be diagonalized, and has two degenerate dark states spanned by
$|$ Φ1 $⟩$
=
cos $θ|$ 1 $⟩−$ sin $θ$ cos $φ|$ 3 $⟩−$ sin $θ$ sin $φ|$ 4 $⟩$
(7.35)
$|$ Φ2 $⟩$
=
sin $φ|$ 3 $⟩−$ cos $φ|$ 4 $⟩,$
(7.36)
where
Ω1
tan $θ$
=
$p$
(7.37)
$|$ Ω3 $|$ 2 + $|$ Ω4 $|$ 2
Ω3
tan $φ$
=
$.$
(7.38)
Ω4
The appearance of two dark states can be qualitatively understood by first
considering Ω1 = 0.
The remaining three-level system can be diagonal-
ized, yielding a dark state $|D$ 13 $⟩$ which is not coupled to the excited state.
<!-- page 124 -->
Turning on Ω4 does not affect $|D$ 34 $⟩$ , and it completes another three-level
system (formed by $|$ 1 $⟩$ and the two bright states from the first three-level
system) which also has a dark state $|D$ 1 $⟩$ . For resonant excitation, these two
dark states will be degenerate since the Hamiltonian contains no detuning
parameters and the dark states do not depend on the applied fields.
Because these two dark states are degenerate, we cannot ignore the nona-
diabatic coupling between them. In fact, we can take advantage of the de-
generacy to control mixing between $|$ Φ1 $⟩$ and $|$ Φ2 $⟩$ , in the process preparing
an arbitrary superposition of the two states. Suppose that initially $θ$ = 0
and the system starts out in $|$ 1 $⟩$ = $|$ Φ1 $⟩$ . As $θ →π/$ 2, the system evolves
into a superposition of $|$ 3 $⟩$ and $|$ 4 $⟩$ determined by the third field Ω4. By
controlling the phase and amplitude of Ω4 (and thus the mixing angle $φ$ ),
one can control the final quantum state $c$ 3 $|$ 3 $⟩$ + $c$ 4 $|$ 4 $⟩$ .
Adiabatic manipulation of a four-level system has been used to experi-
mentally construct a beamsplitter for atoms. As the atoms move through
three spatially separated beams (which are thus pulsed in the frame moving
with the atom), they are adiabatically transferred from their initial state $|$ 1 $⟩$
into a controllable mixture of $|$ 3 $⟩$ and $|$ 4 $⟩$ . The momentum kicks imparted to
an atom are determined by which state it ends up in, so the internal state
of the atom is mapped onto its position. By changing the third field, one
can control and detect which spatial path the atoms follow, verifying the
adiabatic transfer.

<!-- captions -->
7.2: Figure 7.2: A possible pulse sequence to implement STIRAP in a three-level system. The two pulses are timed to smoothly change the mixing angle from 0 to $π/$ 2, resulting in a transfer of population between the lower metastable states.
7.3: Figure 7.3: Experimental observation of STIRAP: (a) Transfer efficiency vs pulse overlap. In this experiment, atoms pass through a pump beam (P = Ω1) and a Stokes beam (S = Ω2). The percentage of atoms which are transferred from state $|$ 1 $⟩$ to $|$ 2 $⟩$ is subsequently measured. Note that the procedure only works for overlapping pulses in the counterintuitive order, but within those constraints it is robust to small changes in pulse shaping. (b) Transferred atoms vs detuning of the Stokes and pump beams. Our analysis was performed for precise $δ$ = 0 two photon resonance, which corresponds to the diagonal line of sharp peaks observed in the transfer efficiency. This shows that although adiabatic passage is insensitive to single-photon detuning, it is actually quite sensitive to the two-photon detuning. 121
7.4: Figure 7.4: The four-level system under consideration. In our calculations we have assumed that all of the applied fields are resonant with the associated atomic transition.

<!-- footnotes -->


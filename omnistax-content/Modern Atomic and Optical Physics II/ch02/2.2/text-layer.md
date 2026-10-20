<!-- page 30 -->
2.2
Bound to Continuum Transitions
The complete basis of states for atomic systems includes not only the dis-
crete bound energy states but also a continuum of higher energy unbound
states. Photons with frequency at or above the photo-ionization threshold
can induce transitions to this continuum, while even sub-threshold interac-
tions can be influenced by energetically proximal unbound states. Exam-
ples of bound to continuum transitions include photoionization of atoms and
photodissociation of ultracold molecules. It is important to understand the
contribution of the continuum states to atom-field dynamics because their
effects are qualitatively different from the Rabi oscillations characteristic of
discrete states.
Mathematically, a continuum of states can be difficult to treat, so we
discretize the unbound states by considering an atom in a box of volume
$L$ 3. As the size of the box approaches infinity, the discrete energy levels
approach the continuum. Here we consider only a single bound state and
a generic continuum of unbound states, denoting the ground state by $|$ 1 $⟩$
and the excited states by $|k⟩$ , each with energy $ħωk$ . An applied field of
frequency $ν$ couples each bound state $|k⟩$ to the bound state $|$ 1 $⟩$ with Rabi
frequency Ω $k$ . The Hamiltonian (in the RWA and rotating frame) is thus
$X$
$X$
ˆ $H$ =
$ħ$ ( $ωk −ν$ ) $|k⟩⟨k| −ħ$
(Ω $k|k⟩⟨$ 1 $|$ + Ω $∗$
(2.42)
$k|$ 1 $⟩⟨k|$ ) $.$
$k$
$k$
We will investigate the dynamics using a trial wavefunction, similar to
how we approached the two-level atom.
Expanding the wavefunction in
terms of the ground state and continuum states,
$X$
$|ψ⟩$ = $c$ 1 $|$ 1 $⟩$ +
$ck|k⟩$
(2.43)
$k$
and substituting into the Schroedinger equation, we obtain the now familiar
equations of motion
$X$
 ̇ $c$ 1
=
$i$
Ω $∗$
$kck$
(2.44)
$k$
<!-- page 31 -->
 ̇ $ck$
=
$iδkck$ + $i$ Ω $kc$ 1
(2.45)
where $δk$ = $ν −ωk$ .
These equations are formidable, and cannot be solved for an arbitrary set
of states $|k⟩$ . We will proceed by formally integrating the second equation,
then making a series of approximations which are valid for a densely spaced
continuum of states spread over a large range of energies. For an atomic
system which starts out in the ground state, $c$ 1 = 1 and $ck$ = 0, formal
integration of the second equation gives
$Z t$
$ck$ ( $t$ ) = $i$ Ω $k$
$c$ 1( $t′$ ) $e−iδk$ ( $t′−t$ ) $dt′.$
(2.46)
0
Substitution into the first equation yields a nonlocal integral equation in-
volving only the ground state amplitude,
$Z t$
$X$
 ̇ $c$ 1( $t$ ) = $−$
$|$ Ω $k|$ 2
$c$ 1( $t′$ ) $e−iδk$ ( $t′−t$ ) $dt′.$
(2.47)
0
$k$
Since the detunings $δk$ are summed over, the exponential will only be appre-
ciably different from zero when $t$ = $t′$ . To lowest order (assuming that the
probability amplitude $c$ 1( $t$ ) is slowly varying), we may set $c$ 1( $t′$ ) = $c$ 1( $t$ ) and
pull it out of the integral. The remaining integral may then be evaluated by
adding an infinitesmal imaginary part to $δk$ ,
$Z t$
$i$ (1 $−e$ ( $iδk−ε$ ) $t$ )
lim
$e−i$ ( $δk−iε$ )( $t′−t$ ) $dt′$ = lim
(2.48)
$ε→$ 0
0
$ε→$ 0
$δk$ + $iε$
and taking the long time limit, so the second term in the numerator vanishes.
Using an identity from complex analysis, the integral becomes
$i$
lim
$,$
(2.49)
$ε→$ 0
$δk$ + $iε$ = $πδ$ ( $δk$ ) + $iP$ 1
$δk$
where $P$ indicates that the principal value should be taken when integrating
over $δk$ . 2
The resulting equation of motion for the ground state probability ampli-
tude includes a population decay at rate $γ$ , and an energy shift ∆ $Stark$ :
$X$
$X$
1
 ̇ $c$ 1 = $−c$ 1( $π$
$|$ Ω $k|$ 2 $δ$ ( $ν −ωk$ )
$−i$
$|$ Ω $k|$ 2 $P$
) $.$
(2.50)
$ν −ωk$
$k$
$k$
$|$
${z$
$}$
$|$
${z$
$}$
$γ/$ 2
∆ $Stark$
<!-- page 32 -->
The amplitude for the ground state evolves simply as $c$ 1( $t$ ) = $c$ 1(0) $e−γt/$ 2+ $i$ ∆ $Starkt$ ,
so the population decays as $p$ 1( $t$ ) = $p$ 1(0) $e−γt$ .
Note that the expression for $γ$ ,
$X$
$γ$ = 2 $π$
$|$ Ω $k|$ 2 $δ$ ( $ν −ωk$ ) $,$
(2.51)
$k$
is precisely the population decay rate one would obtain using Fermi’s Golden
Rule.
Despite this apparent similarity, the relationship between the two
derivations is rather subtle, since Fermi’s Golden Rule arises from first order
perturbation theory whereas our procedure explicitly involves a long time
limit. The resolution to this lies in the fact that setting $t$ = $t′$ in Eq. (2.47)
implies that the continuum states have an effect on the ground state which
is local in time, so the unbound states have no “memory” of earlier config-
urations. In particular, the decay rate for all times must be constant, so
the value at early times (as calculated by e.g. Fermi’s Golden Rule) sets
the decay rate for the system. Furthermore, the perturbative approach is
valid in the sense that the probability to excite any one of the continuum
states is very small, although the ground state population of course changes
dramatically.
The energy shift,
$X$
1
∆ $Stark$ =
$|$ Ω $k|$ 2 $P$
(2.52)
$ν −ωk$
$k$
is due to the AC Stark effect associated with continuum states. The relative
importance of the decay and the energy shift depends on the precise system
under consideration. For applied field frequencies below the photoionization
threshold, the decay vanishes $γ$ = 0, but the continuum states will still have
an effect through the AC Stark shift. Photon frequencies above threshold
lead to decay; moreover, the sign of the AC Stark effect changes with the
sign of the detuning, so the contributions from above and below $δk$ = 0 will
in large part cancel each other. Thus we expect that the energy shift is most
important for sub-threshold illumination whereas the decay terms dominate
above threshold.
For practical problems ∆ $Stark$ is a very sensitive function of the precise
nature of the continuum states, and in many cases it is not explicitly in-
cluded in the analysis of the system. In some important practical cases,
such as the interaction of an atom with the vacuum field considered be-
low, it is a constant (e.g. Lamb shift) that simply leads to an appropriate
renormalization of the atomic energy levels.
<!-- page 33 -->
Disregarding the energy shift (or incorporating it into a renormalized
atomic frequency), the excited state amplitudes $ck$ are given by
$Z t$
$ck$ ( $t$ )
=
$i$ Ω $k$
$e−γt′/$ 2 $e−iδk$ ( $t′−t$ ) $dt′$
(2.53)
0
Ω $k$
=
$i$
(1 $−e−$ ( $γ/$ 2+ $iδk$ ) $t$ ) $eiδkt.$
(2.54)
$γ/$ 2 + $iδk$
In the large time limit, the $ck$ approach the value $i$ Ω $keiδkt/$ ( $γ/$ 2+ $iδk$ ). Phys-
ically, the system has been excited into a superposition of continuum states
$P$
$k ck|k⟩$ which form an outgoing wavepacket propagating away from the
atom. This seemingly irreversible behavior is qualitatively different from the
Rabi oscillations studied previously, illustrating a mechanism by which an
electron may leave the atom, converted to a freely propagating wavepacket.
It is important to note, however, that the formalism presented above does
not preclude reversing the dynamics. In fact, we should be able to time-
reverse the dynamics, since our analysis thus far involves only wavefunc-
tions undergoing unitary evolution. For example, starting with an initial
wavepacket one could calculate the probability of capture into an atomic
bound state. Such calculations are not possible with perturbation theory,
and illustrate the flexibility of this approach (see e.g. homework problem
5).

<!-- captions -->


<!-- footnotes -->
$R |b|$
$R −ε$
$R |b|$
$$
2For example, $P$
1
1
1
$−|a|$
$xdx$ = lim $ε→$ 0
$−|a|$
$xdx$ +
$ε$
$xdx$

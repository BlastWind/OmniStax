<!-- page 124 -->
7.4
Analysis of STIRAP: The condition for adia-
batic following
We have argued qualitatively that the system adiabatically follows the dark
state as a counter-intuitive pulse sequence is applied, and we have found
the conditions for validity of the adiabatic theorem for coherent evolution.
We have not yet quantified how slowly the probe pulse must change for
this simple picture to remain valid in a system that exhibits dephasing and
decay.
Analysis of the adiabaticity condition
To quantitatively analyze non-adiabatic losses, we assume a specific pulse
profile that occurs on a characteristic timescale $τ$ . For instance, suppose
that the two pulses illuminating the atomic cloud have a time dependence
Ω1( $t$ )
=
Ωsin $t$
(7.39)
$τ$
<!-- page 125 -->
<!-- page 126 -->
<!-- page 127 -->
Ω2( $t$ )
=
Ωcos $t$
(7.40)
$τ .$
If the system starts out in $|$ 1 $⟩$ at $t$ = 0, and adiabatically follows the dark
state as the pulses change amplitude, then at $t$ = ( $π/$ 2) $τ$ , the system will
be in $−|$ 2 $⟩$ . We would like to find out the minimum time $τ$ for which the
atomic states can follow the evolution of the field without leaving the dark
state.
In order to incorporate dephasing and decay into our description, we
will use the stochastic wavefunction formulation. To keep things simple, we
will neglect any decay out of $|$ 2 $⟩$ and also neglect any repopulation of lower
states from decay out of $|$ 3 $⟩$ .2 The non-Hermitian Schrodinger equation for
a generic state $|ψ$ ( $t$ )) $⟩$ = $c$ 1( $t$ ) $|$ 1 $⟩$ + $c$ 2( $t$ ) $|$ 2 $⟩$ + $c$ 3( $t$ ) $|$ 3 $⟩$ yields the following
equations of motion for the probability amplitudes:
 ̇ $c$ 1
=
$i$ Ω $∗$
1( $t$ ) $c$ 3
(7.41)
 ̇ $c$ 2
=
$i$ Ω $∗$
2( $t$ ) $c$ 3
(7.42)
 ̇ $c$ 3
=
$−γ$ 13 $c$ 3 + $i$ (Ω1( $t$ ) $c$ 1 + Ω2( $t$ ) $c$ 2) $.$
(7.43)
We will look for a solution of these wave equations in the form
$ci$ = $c$ (0)
+ $c$ (1)
+ $. . .$
(7.44)
$i$
$i$
where each term in the sum represents a higher order correction in powers
of a small parameter $∝$ 1 $/τ$ . The lowest order solution $c$ (0)
is the stationary
$i$
solution and can be found by neglecting all time derivatives in the equations
of motion. The first two equations imply that $c$ (0)
3
= 0, and by simultaneously
 solving the third equation and the normalization condition $⟨ψ|ψ⟩$ = 1
we can find the zeroth order amplitudes:
Ω2
$c$ (0)
=
$p$
(7.45)
1
$|$ Ω1 $|$ 2 + $|$ Ω2 $|$ 2 = cos $t$
$τ$
Ω1
$c$ (0)
=
$−$
$p$
(7.46)
2
$|$ Ω1 $|$ 2 + $|$ Ω2 $|$ 2 = $−$ sin $t$
$τ$
$c$ (0)
=
0 $.$
(7.47)
3
Note that neglecting time derivatives gives us precisely the dark state we
found earlier.
<!-- page 128 -->
Strictly speaking, however, $c$ (0)
and $c$ (0)
do not give an exact solution
1
2
to the wave equations because their time derivatives are nonzero. To first
nonvanishing order in 1 $/τ$ , we must include the effects of time variation in
$c$ (0)
and $c$ (0)
1
2 , yielding a set of equations for the first order corrections:
 ̇ $c$ (0)
=
$i$ Ω $∗$
1 $c$ (1)
(7.48)
1
3
 ̇ $c$ (0)
=
$i$ Ω $∗$
2 $c$ (1)
(7.49)
2
3
$$
$$
0
=
$−γ$ 13 $c$ (1)
+ $i$
Ω1 $c$ (1)
+ Ω2 $c$ (1)
$.$
(7.50)
3
1
2
The population amplitude for the excited state is no longer zero, since
$i$
1
$c$ (1)
=  ̇ $c$ (0)
=
(7.51)
3
$i$ Ω $∗$
Ω $τ .$
1
Substituting the expression for $c$ (1)
into Eq. (7.50), we find
3
$$
$$
$i$
Ω1 $c$ (1)
+ Ω2 $c$ (1)
= $iγ$ 13
(7.52)
1
2
Ω $τ .$
This equation cannot be solved3for $c$ (1)
and $c$ (2)
1
2 ; however, we can immedi-
ately see that these first order corrections $c$ (1)
and $c$ (1)
are both proportional
1
2
to $γ$ 13 $/$ Ω2 $τ$ . The evolution of the atomic state is approximately adiabatic
when these corrections are small, so the adiabaticity condition becomes
$γ$ 13
(7.53)
Ω2 $τ ≪$ 1 $.$
This result illustrates the importance of decay in adiabatic processes, since
this result is quite different from what we found for adiabatic following of a
coherently evolving system.
<!-- page 129 -->
Error due to quantum jumps
In calculating the non-adiabatic corrections to dark state formation, we have
neglected another source of error: quantum jumps. During the characteristic
timescale $τ$ , the probability for the system to undergo a quantum jump is
$Z τ$
$P$ jump = $γ$ 13
$|c$ 3 $|$ 2 = $γ$ 13
(7.56)
0
Ω2 $τ .$
The condition for the validity of the stochastic wavefunction approach us
thus
$P$ jump $≪$ 1 $⇒γ$ 13
(7.57)
Ω2 $τ ≪$ 1 $,$
so the adiabatic approximation and the non-Hermitian evolution used to
derive it are valid in the same situations.
Note that both non-adiabatic corrections to the non-Hermitian wave
function and quantum jumps limit the fidelity of adiabatic passage from $|$ 1 $⟩$
to $−|$ 2 $⟩$ . In particular, the probability to end up in the correct final state
(Ω $τ$ = $π/$ 2) can be explicitly calculated to be
$−πγ$ 13
$ρ$ 22 = $e$
2 $|$ Ω $|$ 2 $τ .$
(7.58)
Unlike the Landau-Zener problem discussed above, this exact solution per-
mits an expansion in the small parameter $γ$ 13 $/$ Ω2 $τ$ . While we cannot find
a perturbative solution for coherent adiabatic processes, such an expansion
can become possible in the presence of decay.
7.4.1
Remarks
The partially-diagonalized basis: an intuitive approach
Our analysis has been carried out using the bare state basis $|$ 1 $⟩, |$ 2 $⟩$ and $|$ 3 $⟩$ .
One could define a time-dependent dressed state basis by fully diagonalizing
the Hamiltonian. In practice, however, this problem is most easily solved
and understood in a partially diagonalized basis composed of the the dark
state $|D⟩$ , the bright state $|B⟩$ , and the excited state $|E⟩$ :
Ω1 $|$ 1 $⟩$ + Ω2 $|$ 2 $⟩$
$|B⟩$
=
$p$
(7.59)
$|$ Ω1 $|$ 2 + $|$ Ω2 $|$ 2
Ω2 $|$ 1 $⟩−$ Ω1 $|$ 2 $⟩$
$|D⟩$
=
$p$
(7.60)
$|$ Ω1 $|$ 2 + $|$ Ω2 $|$ 2
$|E⟩$
=
$|$ 3 $⟩.$
(7.61)
<!-- page 130 -->
By choosing this hybrid basis we have achieved a considerable simplification
of the interaction Hamiltonian,
$p$
ˆ $H$ int = $−$
$|$ Ω1 $|$ 2 + $|$ Ω2 $|$ 2 ( $|B⟩⟨E|$ + $|E⟩⟨B|$ ) $.$
(7.62)
The dark state is not involved in the dynamics, since the excited state only
couples to the bright state superposition of $|$ 1 $⟩$ and $|$ 2 $⟩$ .
Working in this new basis provides us with an intuition for non-adiabatic
$p$
corrections. States $|B⟩$ and $|E⟩$ are coupled by Ω=
$|$ Ω1 $|$ 2 + $|$ Ω2 $|$ 2, while
the finite pulse time induces a weak coupling between the dark and bright
states. The strength of the $|D⟩→|B⟩$ transition is given by
$iħ⟨B| d$
(7.63)
$dt|D⟩$ = $−iħ$ 1
$τ .$
The nonadiabatic coupling acts like a weak field with Rabi frequency of
ΩNA = 1 $/τ$ driving the $|D⟩$ to $|B⟩$ transition. 4
This is precisely the kind of situation encountered for an atom excited
by optical and microwave radiation in a double resonance experiment. The
net effect of Ωand $γ$ 13 is to introduce a finite lifetime of $|B⟩$ , since $|B⟩$ can
be excited to $|E⟩$ which then decays. The escape rate out of $|B⟩$ is on the
order of the optical excitation rate,
$γB$ = Ω2
$.$
(7.64)
$γ$ 13
The atom will remain in the dark state provided that the mixing rate ΩNA
between $|D⟩$ and $|B⟩$ is weaker than the inverse lifetime of $|B⟩$ ,
1
$.$
(7.65)
$τ ≪$ Ω2
$γ$ 13
Here, decay from the bright state helps to force the atoms into the dark state.
By reasoning physically we have arrived at precisely the same adiabaticity
condition we derived mathematically.
Adiabatic passage and EIT
There is an interesting relationship between the condition for adiabatic fol-
lowing and the condition for pulse propagation within an EIT medium. The
<!-- page 131 -->
spectral window for electromagnetically induced transparency allows a probe
pulse to propagate without losses only if all of its spectral components fit
within the dark resonance linewidth ∆ $ω$ , i.e. if the probe pulse duration
is sufficiently long $τ ≫$ 1 $/$ ∆ $ω$ . Since ∆ $ω$ = Ω2 $/γ$ 13, the condition for EIT
pulse transmission corresponds exactly to the adiabatic following condition.
This correspondence underscores the relationship between EIT and adi-
abatic processes. If the pulse enters slowly enough, the atomic system adi-
abatically follows the dark state into a superposition of $|$ 1 $⟩$ and $|$ 2 $⟩$ which
propagates without loss through the medium. As the pulse exits, the atomic
state adiabatically follows the dark state back to $|$ 1 $⟩$ , transferring the atomic
coherence to the transmitted light.
Non-adiabatic dark state preparation
The dark state can also be prepared without adiabatic processes.
For
example, suppose the system started in an incoherent mixture of states,
$ρ$ 11 = $ρ$ 22 = 1 $/$ 2. Since the desired final state is a pure state, no Hamil-
tonian evolution (adiabatic or not) could transform this mixed state into a
dark state.
Nevertheless, the experimental discovery of dark states [Alzelter et al.
Novvo Cirr. 36B, 5/76] was done by monitoring fluorescence from a thermal
sodium vapor cell illuminated by two continuous-wave fields. A magnetic
field gradient along the cell created a spatial gradient of detunings due to
the Zeeman effect. At the precise location along the cell where the Zeeman-
shifted two-photon detuning vanished, a dark stripe appeared in the fluo-
rescence signal. This was interpreted as formation of a dark state – yet the
thermal vapor had started out in a statistical mixture.
This puzzle is easily resolved by analyzing the experiment in the partially
diagonalized basis of bright and dark states. The original mixed state is
a statistical mixture of the bright state and the dark state. Consider the
situation when the CW fields Ω1 and Ω2 are applied such that non-adiabatic
coupling to $|B⟩$ and $|D⟩$ vanishes. Meanwhile, the pair of fields act as an
optical pumping beam, exciting an atom in $|B⟩$ to $|E⟩$ where it either decays
to $|D⟩$ (where it then remains) or $|B⟩$ (from which it gets pumped back to
$|E⟩$ ). Optical pumping in the partially diagonalized basis thus prepares the
system in the dark state by purely incoherent processes.
<!-- page 132 -->
Populations and coherences: The importance of basis
We see from the example of dark state formation that the preparation of
atomic coherence is somehow related to optical pumping. This is not too
surprising because coherence in one basis, (e.g. ${|$ 1 $⟩, |$ 2 $⟩}$ ) is just population
difference in another basis, (e.g. ${|B⟩, |D⟩}$ ).
The relationship between populations and coherences can be illuminated
by the simple example of an atom interacting with linearly polarized light on
a $J$ = 1 to $J′$ = 1 transition. In the absence of an applied magnetic field, we
are free to choose our axis of quantization either parallel or perpendicular
to the light polarization.
Suppose that we choose to quantize the $mJ$ sublevels parallel to the
light polarization. Since symmetry considerations forbid transitions with
∆ $J$ = 0 $,$ ∆ $mJ$ = 0, the light will only couple $mJ$ = $±$ 1 $→m′$
$J$ = $±$ 1, and
any mixed state will be optically pumped into the lower $mJ$ = 0 state.
Now suppose we choose to analyze the same problem with the light po-
larized perpendicularly to the axis of quantization. Any linear polarization
can be decomposed into two circular polarizations, which couple the four
∆ $mJ$ = $±$ 1 transitions. In this mess of levels and transitions, we can iden-
tify a Λ configuration: the $mJ$ = 1 state and the $mJ$ = $−$ 1 state are now
<!-- page 133 -->
both coupled to the same $m′$
$J$ = 0 excited state. Consequently, the system
has a dark state, and the atoms will be optically pumped into a dark super-
postion of $mJ$ = $−$ 1 and $mJ$ = 1 which precisely corresponds to the $mJ$ = 0
state quantized along the polarization axis.
The bottom line of this discussion is that a coherence in one basis is
a population distribution in another basis. Typically, the latter basis will
provide the most physical insight into a complicated problem.
Applications of the dark state
The dark state is an important tool which has been used both to prepare
and manipulate atomic states and to control pulses of light. In addition,
a momentum transfer is associated with the formation of the dark state.
Consequently dark state techniques can also be used to generate superpo-
sitions of momentum states or spatial states. For example, as noted in the
previous lecture, adiabatic passage has been used to create a controllable
atomic beamsplitter.

<!-- captions -->
7.5: Figure 7.5: Pulse sequence for the four-level system. Three fields, S = Ω3 ,C = Ω4, and P = Ω1 are used to controllably transfer atoms from the initial state $|$ 1 $⟩$ to some superposition of $|$ 3 $⟩$ and $|$ 4 $⟩$ . The probability amplitudes in the final state are determined by the timing, phase and power of the control pulse Ω4.
7.6: Figure 7.6: Beamsplitter for four-level atoms (metastable Neon) using adiabatic manipulation techniques. The relevant four levels are illustrated in (a), and the fields are named by their polarization: $π$ = Ω1 $, σ$ + = Ω3 $, σ−$ = Ω4. (b) The atoms travel through the three beams, which are offset by a variable distance. If the atoms end up in $|$ 3 $⟩$ , they receive a momentum kick in the opposite direction than those which end up in $|$ 4 $⟩$ . In the lower two graphs, the spatial distribution of atoms is shown for a variety of pulse sequences.
7.7: Figure 7.7: Linearly polarized light near resonant with a J = 1 to J’ = 1 transition is most easily understood if the axis of quantization is chosen parallel to the axis of polarization. In this first case, the fields will clearly pump the atoms into the $m||$ = 0 state. If we choose to analyze the problem in the perpendicular basis, we must identify the Λ system highlighted in red. The light will pump the populations into the associated dark state superposition of $m⊥$ = $±$ 1, which is exactly equal to the state $m||$ = 0.

<!-- footnotes -->
2This is tantamount to assuming that all decay goes into a fourth state outside of the
system we’re considering.
3Formally, we are seeking a solution to the vector differential equation
 ̇ $v$ = $M$ ( $t/τ$ ) $v$ ( $t$ ) $,$
(7.54)
which we guess is of the form $v$ ( $t$ ) = $v$ (0) + $v$ (1) + $. . .$ , where $v$ (0) satisfies $M$ ( $t/τ$ ) $v$ (0) = 0.
Substituting this result into the differential equation above, we find that
$$
 ̇ $v$ (0) $≈M$ ( $t/τ$ )
$v$ (0) + $v$ (1) $$
$,$
(7.55)
or $v$ (1) = $M −$ 1( $t/τ$ )  ̇ $v$ (0).
Such an expansion fails for the system we are considering,
however, because $M$ is singular and cannot be inverted. Nonetheless, we see that the
expansion does tell us some useful information about how the higher-order correction
scales. To properly solve this system using some kind of adiabatic expansion, one should
adiabatically eliminate the excited state, but solve the resulting equations of motion for
$c$ 1 $,$ 2 exactly.
4Note that our choice of Ω1( $t$ ) $,$ Ω2( $t$ ) as sines and cosines has led us to a constant non-
adiabatic coupling, which makes the mathematics easier. Other functions would also lead
to ΩNA, but in general it would be a function of time.

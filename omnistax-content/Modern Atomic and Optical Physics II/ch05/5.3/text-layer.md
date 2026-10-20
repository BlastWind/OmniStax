<!-- page 97 -->
5.3
Parametric Processes
Parametric processes represent an important category of coherent interac-
tions between atoms and light. In such systems, we are interested primarily
in the propagation and interaction of applied and generated light fields; the
nonlinear atomic response is important only because it mediates interactions
between optical fields. No energy is exchanged between photons and atoms,
but atomic nonlinearities can lead to mixing between applied fields or even
generation of fields at new frequencies. In practice, the nonlinear medium
need not be atomic; in the most general treatment, optical fields impinge on
a “nonlinear black box” which can give birth to higher frequency harmonics
or sum and difference frequencies.
5.3.1
Example: the cascade system
We will first examine how parametric processes in the cascade level config-
uration can be used to generate higher-frequency fields. The situation we
will consider has two fields $E$ 1 and $E$ 2 near resonance with the two-photon
transition $ν$ 1 + $ν$ 2 $≈ω$ 12. By driving this two-photon process, we hope to
induce the atom to emit radiation at frequency $ν$ 1 + $ν$ 2.
From symmetry considerations, one might argue that the $|$ 2 $⟩→|$ 1 $⟩$
transition is dipole forbidden if the two-photon process is dipole-allowed.
Nevertheless, by breaking the associated symmetry (in this case, inversion
symmetry), it is possible to have both single-photon and two-photon dipole
allowed transitions between $|$ 1 $⟩$ and $|$ 2 $⟩$ . Such symmetry breaking can be
accomplished in a variety of ways. The hydrogen atom furnishes a partic-
ularly simple example: if we apply a static electric field to the hydrogen
<!-- page 98 -->
atom, the linear Stark shift mixes the $|$ 2 $s⟩$ and $|$ 2 $p⟩$ levels so that the re-
sulting hybrid state does not have a well-defined parity. Selection rules are
thereby relaxed, so that a far-off-resonant two-photon transition can indeed
induce single-photon transitions back to $|$ 1 $s⟩$ .
Sum frequency generation has an intuitive semiclassical explanation.
Suppose you drive the Stark-shifted Hydrogen atom with two fields with
frequencies $ν$ 1 + $ν$ 2 = $ω$ 1 $s→$ 2 $s$ . The resulting off-diagonal atomic coherence
$ρ$ 12 leads to a polarization which oscillates at the sum frequency $ν$ 1 + $ν$ 2.
From a semiclassical perspective, the oscillating polarization will emit radi-
ation at the sum frequency. Note that the polarization is proportional to
both applied fields
$Pν$ 1+ $ν$ 2 $∝μ$ 12 $E$ 1 $E$ 2 $,$
(5.60)
and we will introduce a nonlinear susceptibility as the proportionality con-
stant
$χ$ (2) = $Pν$ 1+ $ν$ 2
$.$
(5.61)
$ε$ 0 $E$ 1 $E$ 2
Whenever a medium has $χ$ (2) $̸$ = 0, application of two fields can result in
generation of the sum frequency.
<!-- page 99 -->
Non-linear polarization in the cascade level configuration
We will now derive an expression for the nonlinear susceptibility in terms of
atomic system parameters. Taking the limit when the two-photon transition
is far-detuned from the intermediate states, the system can be effectively
treated as a two-level system coupled by a field with Rabi frequency
$X$
Ω1 $i$ Ω2 $i$
$X$
$μ$ 1 $iμ$ 2 $i$
Ωeff=
=
(5.62)
∆ $i$
∆ $iħ$ 2 $E$ 1 $E$ 2 $.$
$i$
$i$
The Stark shifts from the applied fields $E$ 1 and $E$ 2 can be incorporated into
a renormalization of the two-photon detuning $δ$ eff. For ∆ $i, δ$ eff large, the
off-diagonal density matrix components are given by
$ρ$ 21 = $−$ Ωeff
$,$
(5.63)
$δ$ eff
so we can immediately write down the polarization
$X$
$μ$ 1 $iμ$ 2 $i$
$P$ 3 = $N$
$E$ 1 $E$ 2 $.$
(5.64)
$V μ∗ρ$ 21 = $N$
$V μ∗$ 1
$ħ$ 2
$δ$ eff∆ $i$
$i$
The nonlinear susceptibility is thus
1
$X$
$μ$ 1 $iμ$ 2 $i$
$χ$ (2) = $N$
$.$
(5.65)
$V μ∗$
$ε$ 0 $ħ$ 2
$δ$ eff∆ $i$
$i$
5.3.2
Sum frequency generation
The cascade system has provided an illustration of how a medium can gen-
erate a polarization oscillating at the sum frequency of two applied fields.
We now seek to understand how this oscillating polarization gives birth to
a new field. To simplify the analysis we will assume:
(1) Both applied fields are continuous-wave.
(2) All fields propagate along the ˆ $z$ direction.
We can thus write down the total electric field as a sum of three components,
treating the third field on equal footing with the two applied fields:
$E$ = $E$ 1 $ei$ ( $ν$ 1 $z/c−ν$ 1 $t$ ) + $E$ 2 $ei$ ( $ν$ 2 $z/c−ν$ 2 $t$ ) + $E$ 3 $ei$ ( $ν$ 3 $z/c−ν$ 3 $t$ ) + $c.c.$
(5.66)
Note that, in the spirit of the slowly-varying envelope approximation, we
have factored out the rapidly oscillating terms. Using the generalized SVEA,
we will find propagation equations for each of the three slowly-varying am-
plitudes.
<!-- page 100 -->
The evolution equations for the slowly-varying amplitudes include both
the normal linear response of the medium and the effects of the oscillating
polarization $P$ 3. If $E$ 3 is sufficiently weak compared to the two applied fields
$E$ 1 and $E$ 2, then we might expect that the two applied fields will not be
greatly depleted while generating $E$ 3. This is known as the undepleted pump
approximation, since $E$ 1 and $E$ 2 act as pump fields driving the creation of
$E$ 3. When we neglect the nonlinear terms associated with depletion of $E$ 1 $,$ 2
by $E$ 3, the evolution equations for $E$ 1 and $E$ 2 are the same as for a linear
medium,
$∂$
(5.67)
$∂z E$ 1 $,$ 2 = $iν$ 1 $,$ 2
2 $c χ$ 1 $,$ 2 $E$ 1 $,$ 2 $,$
where $χi$ is the linear response of the medium to frequency $νi$ .
The evolution equation for $E$ 3 must include both the linear and nonlinear
response, since sum-frequency generation will occur even if $E$ 3(0) = 0, and
this generated field will subsequently interact nearly linearly with the atoms.
Consequently we find
$∂$
(5.68)
$∂z E$ 3 = $iν$ 3
2 $c χ$ (2) $E$ 1 $E$ 2 + $iν$ 3
2 $c χ$ 3 $E$ 3 $.$
For the far-detuned system under consideration, ∆ $i$ large, we can identify
the dominant terms in the linear susceptibilities:
$N$
1
$X$
$|μ$ 1 $i,$ 2 $i|$ 2
$χ$ 1 $,$ 2
$≈$
(5.69)
$V$
$ε$ 0 $ħ$
∆ $i$
$i$
$N$
1
$|μ$ 12 $|$ 2
$χ$ 3
$≈$
(5.70)
$V$
$ε$ 0 $ħ$
$δ$ eff
(5.71)
In conjunction with the initial conditions $E$ 1(0) $, E$ 2(0) $̸$ = 0 $, E$ 3(0) = 0, we
now have a completely defined problem.
The evolution equations are most easily solved by introducing new vari-
ables  ̃ $Ei$ which absorb the linear terms,
$Ei$ =  ̃ $Eieiνiχiz/$ 2 $c$
(5.72)
so that the propagation equations become
$∂$
 ̃ $E$ 1 $,$ 2
=
0
(5.73)
$∂z$
$∂$
$iν$ 3
 ̃ $E$ 3
=
(5.74)
$∂z$
2 $c χ$ (2)  ̃ $E$ 1  ̃ $E$ 2 $ei$ ∆ $kz,$
<!-- page 101 -->
where
∆ $k$ = $ν$ 1 $χ$ 1
+ $ν$ 2 $χ$ 2
$−ν$ 3 $χ$ 3
(5.75)
2 $c$
2 $c$
2 $c .$
Since $νiχi/$ 2 $c$ = $niνi/c$ = $ki$ is just the wave-vector of the field $Ei$ inside the
medium, ∆ $k$ = $k$ 1 + $k$ 2 $−k$ 3 is simply the difference of the total wavevectors
of all three fields.
Phase-matching
In sum-frequency generation, ∆ $k$ is the most important quantity determin-
ing the growth of $E$ 3. The output field is
$Z L$
$ei$ ∆ $kL −$ 1
$ iν$ 3
$iν$ 3
 ̃ $E$ 3( $L$ ) =
(5.76)
0
2 $c χ$ (2)  ̃ $E$ 1  ̃ $E$ 2 $ei$ ∆ $kz$ =
$i$ ∆ $k$
2 $c χ$ (2)  ̃ $E$ 1  ̃ $E$ 2 $.$
In the situation when ∆ $k$ = 0, the system is said to satisfy the “phase-
matching condition.” This is the most favorable configuration for sum fre-
quency generation because the field grows linearly with distance,
 ̃ $E$ 3( $L$ ) = $iν$ 3
(5.77)
2 $c χ$ (2)  ̃ $E$ 1  ̃ $E$ 2 $L.$
The physical interpretation for this linear field growth comes from examining
the phase velocities of the generated field and the induced polarization.
When ∆ $k$ = 0, the phase velocity of the field $E$ 3 precisely matches the
phase velocity of the polarization $P$ 3, so the polarization always contributes
constructively to the generation of the new field. If the phase velocities are
not matched, ∆ $k̸$ = 0, the phase of the polarization slips out of alignment
after a distance $≈π/$ ∆ $k$ , producing a field which interferes destructively
with the propagating field $E$ 3.
An alternate interpretation for the phase-matching condition invokes
momentum-conservation. The parametric up-conversion involves absorbing
two photons and emitting one, and this process must conserve both energy
$ν$ 3 = $ν$ 1+ $ν$ 2 and momentum, $k$ 3 = $k$ 1+ $k$ 2. For a atomic cloud of finite length
$L$ , the momentum is uncertain to within $≈π/L$ , so for distances less than
the coherence length, ∆ $kL ≪$ 1 the system is phase-matched and the field
grows linearly. Once the field has propagated far enough that ∆ $kL ≫$ 1,
momentum conservation is no longer satisfied, and destructive interference
sets in.
Competing processes
Phase-matching provides an example of so-called competing processes which
reduce the effects of nonlinearities. The linear susceptibility of the medium
<!-- page 102 -->
competes with nonlinear generation, making the outcome for $E$ 3 much smaller
than it could potentially be.
Other effects such as absorption or beam
breakup also diminish the net output nonlinear processes. These competing
processes frequently overwhelm nonlinear effects, and in large part explain
why nonlinearities in practical systems are often so small.
Sum-frequency generation in the cascade system
We will now apply our calculations for the general nonlinear system to the
cascade level configuration, where we can express the output field in terms
of known atomic quantities. By inspecting Eq. (5.76) with ∆ $k̸$ = 0, we see
that after a distance $z$ = $π/$ ∆ $k$ , $E$ 3 achieves its maximal amplitude,
 ̃ $E$ 3( $π$
(5.78)
∆ $k$ ) = $−ν$ 3
$c$ ∆ $kχ$ (2)  ̃ $E$ 1  ̃ $E$ 2 $.$
Since ∆ $k$ is determined by the linear susceptibilities for the system, the
strength of the generated field depends on the ratio of the nonlinear sus-
ceptibility to the linear susceptibilities.
For the far-detuned two-photon
transition (∆ $i$ large), the near-resonant susceptibility $χ$ (1)
dominates ∆ $k$
3
$≈ν$ 3
$c$ ( $n$ 3 $−$ 1) $≈$ 2 $ν$ 3
$c χ$ (1)
3 . In this limit, we can easily express the maximal
<!-- page 103 -->
field amplitude in terms of atomic dipole moments,
$∼χ$ (2)
$z$
$}|$
${$
$X$
$μ$ 1 $iμ$ 2 $i$
$δ$ eff
 ̃ $E$ 3( $π$
$μ∗$
$·$
 ̃ $E$ 1  ̃ $E$ 2 $.$
(5.79)
12
∆ $k$ ) = $−$ 1
2
$δ$ eff∆ $i$
$ħ|μ$ 12 $|$ 2
$i$
$| {z }$
$∼$ 1 $/χ$ (1)
3
As we tune closer to two-photon resonance, $δ$ eff $→$ 0, the nonlinear suscepti-
bility grows, but this growth is perfectly balanced by corresponding growth
in the linear susceptibility; indeed, the two-photon detuning drops out of
the problem.
The overall size of the new field is very small when the system is not
phase-matched. If we choose $E$ 1 $∼E$ 2 $∼E$ , the relative amplitude of the
sum-frequency field is
$E$ 3( $π/$ ∆ $k$ )
$X$
Ω $i$
$∼$
$≪$ 1 $.$
(5.80)
$E$
∆ $i$
$i$
Practical implementation of phase-matching
In view of this result, it is important to consider practical methods to achieve
phase-matching. This goal requires engineering the linear dispersion so that
polarization and sum-frequency field propagate in phase.
In atomic physics, phase-matching has been done by mixing two species
of gas. One species provides the nonlinearity, while the other is introduced
to provide the necessary dispersion to compensate any phase-mismatch. By
carefully adjusting the ratios of the two atoms, phase matching may be
achieved.
Another method frequently used in atomic physics engineers the disper-
sion by using strong nonperturbative fields. For example, EIT-like config-
urations can be used to eliminate the linear susceptibility, so that ∆ $k$ = 0
precisely. A similar system has been used for second harmonic generation
( $ν$ 1 = $ν$ 2) in hydrogen. The strong DC field couples the 2 $s$ and 2 $p$ levels,
acting like a nonperturbative driving field, while the second harmonic $E$ 3
probes the 1 $s$ to 2 $p$ transition. The three-level system composed of 1 $s,$ 2 $s$
and 2 $p$ thus takes on the Λ configuation, allowing EIT propagation for the
second harmonic. [ See K. Hakuta, L. Marmet, & B.P. Stoicheff, PRL 66,
596 (1991)]
While atomic systems are almost the sole source of coherent radiation
in the UV and UUV spectral regions, most practical devices in the vis-
ible spectrum do not use atomics: nonlinear crystals are typically used
<!-- page 104 -->
for sum-frequency generation. Similar phase-matching considerations apply,
but other practical methods for achieving it are employed. For example, non-
symmetric crystals can exhibit birefringence, where different polarizations
can experience different linear susceptibilities which vary with temperature.
Phase-matching can be engineered by carefully choosing the polarizations of
the pump fields and approprately heating the crystal. Angle tuning may also
employed, using the fact that ∆ $k$ is in fact a vector sum of the wave-vectors.
Saturation
When phase-matching is achieved, Eq. (5.76) indicates that the sum-frequency
field grows linearly without bound. From physical grounds, this prediction
cannot be correct, since a finite quantity of power is pumped into the sys-
tem by the applied fields $E$ 1 and $E$ 2. In fact, as $E$ 3 grows, the undepleted
pump approximation eventually breaks down. For parametric processes no
energy is exchanged between the atoms and the optical fields, so (n a lossless
system)
$∂$
$ $
$|E$ 1 $|$ 2 + $|E$ 2 $|$ 2 + $|E$ 3 $|$ 2 $$
= 0 $.$
(5.81)
$∂z$
Consequently we expect saturation of the generated field to occur when $E$ 3
begins to approach the amplitudes of the applied fields $E$ 1 $,$ 2.
Generalization to other parametric processes
We have discussed one specific process in detail: parametric upconversion.
The same physical and mathmatical tools apply to other nonlinear para-
metric processes. For example, rather than applying two red fields which
give birth to a sum-frequency blue field, one could consider generating lower
frequency optical fields by applying a blue field and a red field to generate
the difference frequency. The same evolution equations apply, and phase-
matching considerations will again play an important role.
Third-order nonlinear processes
In all of our analysis, we have assumed non-vanishing dipole couplings on
all transitions $μ$ 12 $, μ$ 1 $i, μ$ 2 $i̸$ = 0, and we noted that this situation arises when
certain symmetries are violated.
In fact, one can show that in systems
with inversion symmetry, the second order nonlinear susceptibility vanishes,
$χ$ (2) = 0, so that the lowest order nonlinear susceptibility is $χ$ (3). The third
<!-- page 105 -->
order susceptibility is defined by
$P$
$χ$ (3) =
$,$
(5.82)
$ε$ 0 $E$ 1 $E$ 2 $E$ 3
where $P$ is the polarization resulting from three applied fields $E$ 1 $,$ 2 $,$ 3. For
example, the Kerr effect is a special case of a third-order nonlinear process
where only one field is present, so $P ∝E|E|$ 2. In addition, one can interpret
the sum-frequency generation in hydrogen as a third-order process. Rather
than invoking symmetry breaking caused by the DC field, one can treat this
static field as the third applied field and use a third-order susceptibility to
analyze the resulting sum-frequency generation.

<!-- captions -->
5.6: Figure 5.6: Left: The cascade level system used for sum-frequency generation. Right: A physical implementation of the cascade level system in the Hydrogen atom. A DC field mixes the $|$ 2 $s⟩$ and $|$ 2 $p⟩$ states so that both the single- and two-photon transitions are dipole allowed. This DC Stark shift breaks the inversion symmetry of the Hydrogen atom, which makes second-order nonlinear processes possible.
5.7: Figure 5.7: When the phase-matching condition is not satisfied, the sum-frequency field only grows for a distance $∼π/$ ∆ $k$ before destructive interference sets in.

<!-- footnotes -->


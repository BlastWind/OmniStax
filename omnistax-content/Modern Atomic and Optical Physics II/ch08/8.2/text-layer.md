<!-- page 136 -->
8.2
Semiclassical description
The interaction of an atom with a plane wave illustrated how the atom
changes its momentum and energy in the process of coherently absorbing
a photon.
Incoherent processes will also have an effect on the motional
state, since spontaneous emission will produce a random distribution of mo-
mentum kicks. Quantum treatment of the electromagnetic field and atomic
momentum states would be required to truly describe such processes. That
level of detail is unnecessary, however, to describe the center of mass motion
in the classical regime. We will consequently use a semiclassical approach
to understand the force the light exerts on the atoms.
The correspondence between classical and quantum dynamics is most
easily seen in the Heisenberg picture, where the commutator of the momen-
tum and the Hamiltonian gives the effective force1:
$d$
(8.9)
$dt$ ˆ $p$ = 1
$iħ$ [ˆ $p,$ ˆ $H$ ] = ˆ $F.$
In terms of the position operator, this force can be represented by
ˆ $F$ = $−$ [ $∇,$ ˆ $H$ (ˆ $r$ )] = $ħ∇$ Ω $|$ 2 $⟩⟨$ 1 $|$ + $ħ∇$ Ω $∗|$ 1 $⟩⟨$ 2 $|.$
(8.10)
We now invoke the idea that our atom is very nearly a classically moving
ball experiencing the average force
$F$ = $⟨$ ˆ $F⟩$ = $ħ∇$ Ω $ρ$ 12 + $ħ∇$ Ω $∗ρ$ 21 $.$
(8.14)
<!-- page 137 -->
Note that the indices are counterintuitive but correct:
$⟨|$ 1 $⟩⟨$ 2 $|⟩$ = Tr[ $ρ|$ 1 $⟩⟨$ 2 $|$ ] = $ρ$ 21 $.$
(8.15)
Since $ρ$ 21 $/$ Ω $∝χ$ is independent of the phase of Ω, it is convenient to write
the force in terms of this ratio:
$ρ$ 12
$$
$$
$F$
=
$ħ$ Ω $∗∇$ Ω
+ $ħ$ Ω $∇$ Ω $∗ρ$ 21
(8.16)
Ω $∗$
Ω
$$
$ρ$ 12
$$
=
$ħ$ 1
+ $iħ|$ Ω $|$ 2 $∇φ$
(8.17)
2 $∇|$ Ω $|$ 2 $ρ$ 12
Ω $∗$ + $ρ$ 21
Ω
Ω $∗−ρ$ 21
Ω
Separating out the real and imaginary parts of the susceptibility, we find
that there are separate contributions from the reactive and dissipative com-
ponents of the atomic response.
$ρ$ 21
$$
$ρ$ 21
$$
$F$ = 2 $ħ|$ Ω $|$ 2 $∇φ$ Im
dissipative
+ $ħ∇|$ Ω $|$ 2Re
$.$
(8.18)
Ω
Ω
$|$
${z$
$}$
$|$
${z$
$}$
reactive
This force is particularly easy to calculate and understand when we can
use the steady state solution of the density matrix equations to solve for
$ρ$ 21. The steady state solution will be valid for timescales $t$ much greater
than the dephasing time 1 $/γ$ 12 or the inverse detuning 1 $/δ$ . For our descrip-
tion of the forces to be valid, the width of the atomic wave packet must be
much less than the optical wavelength, ∆ $r$ (0) $≪λ$ , such that the atom can
resolve the phase of the field. At some later time, the center of mass motion
is approximately given by $r$ ( $t$ ) $∼r$ (0) + $p$ (0) $t/m$ , which has an uncertainty
∆ $r$ ( $t$ ) $∼$ ∆ $r$ (0) + ∆ $p$ (0) $t/m$ . For the force equation to still remain valid at
time $t$ , we must have that ∆ $p$ (0) $t/m≪λ$ , or $k$ ∆ $p$ (0) $t/m≪$ 1. Using the un-
certainty relationship ∆ $r$ (0)∆ $p$ (0) $∼ħ$ and ∆ $r$ (0) $≪λ$ , the limitation on time
can be written $t≪$ (1 $/ωR$ ), where the recoil energy $ħωR$ = ( $ħk$ )2 $/$ 2 $m$ . This
semiclassical force description is then valid in the regime
$ωR≪$ 1 $/t≪$ max( $γ$ 12 $, δ$ ) $.$
(8.19)
When this condition is satisfied, and when the light intensities are small,
we can use $ρ$ 21 $/$ Ω= $i/$ ( $γ$ 12 $−i$ ( $δ −kv$ )) to find the light-induced force and
analyze the physics behind it.
Large detuning: the dipole force
When the incident light is far detuned from atomic resonance, the real part
of the susceptibility dominates and the response is almost purely reactive.
<!-- page 138 -->
In this limit, $ρ$ 21 $/$ Ω= $−$ 1 $/δ$ and
$|$ Ω $|$ 2
$$
$F$ = $−ħ∇$
$.$
(8.20)
$δ$
This type of force is known as the “dipole force”, and it is conservative
because it can be written as the gradient of a potential.
Note that the
potential $V$ eff= $ħ|$ Ω $|$ 2 $/δ$ corresponds to the AC Stark shift induced by the
applied field.
In fact, we can interpret the origin of the dipole force by
examining the atomic energy levels in the dressed state picture. For a far-
off resonance beam, the atoms remain in the ground state, but they can
reduce their potential energy by moving to a region where the AC Stark
shift lowers the ground state energy. The dipole force thus represents the
attraction or repulsion of an atom in a dressed state potential.
The sign of the detuning determines the sign of the dipole force.
In
particular,
$δ <$ 0 $⇒$ atoms attracted to field maxima
$δ >$ 0 $⇒$ atoms attracted to field minima.
Consequently the dipole force can be tailored to attract or repel atoms as
needed. The sign dependence on detuning can also be found from a classical
argument. If we consider the atom as a polarizable classical dipole $d$ in a
polarizing electric field $E$ , its energy is $−E·d$ . Applied fields with frequencies
below the resonance will induce a dipole which oscillates in phase with the
field, yielding a decrease in energy. Excitation above resonance induces a
dipole which is $π$ out of phase with the applied field, yielding an increase
in energy.
Consequently, atoms in red-detuned fields will seek the field
maximum, while atoms in blue-detuned fields will seek the field minimum.
The dipole force dominates only for large detunings, requiring similarly
large powers $|$ Ω $|$ 2 in order to create a tight trap. In this limit, the dipole
force provides an effective method to confine atoms without introducing a
lot of spontaneous emission.
Two important examples of the dipole force have found extensive appli-
cation in atomic physics. The dipole trap is formed by tightly focussing a
red-detuned beam which attracts atoms to the region of maximum intensity.
This simple design has been used to manipulate and study cold atoms and
Bose Einstein condensates. The second important application of the dipole
force is known as the “optical lattice.” Atoms illuminated by a standing
wave are attracted to the nodes or antinodes, spaced by $∼λ/$ 2. A single
standing wave will produce a one dimensional lattice, and by adding or-
thogonal beams higher dimensional lattices can be produced. These optical
<!-- page 139 -->
lattices are approximately equivalent to “atomic crystals”, and can be used
to study phenomena analogous to those in solid-state physics by building a
model crystal out of atoms and lasers.
The dipole force can often be generalized to many states ${|i⟩}$ , with an
effective potential associated with each state,
$X$
$|$ Ω $i|$ 2
$V$ eff= $ħ$
$|i⟩⟨i|.$
(8.21)
$δi$
$i$
This effective potential only incorporates the AC Stark shifts experienced
by the multilevel atom; in general it may be important to take into account
contributions (also of order 1 $/δ$ ) due to two-photon processes between nearly
degenerate atomic levels. In this situation, the internal states ${|i⟩}$ are no
longer good eigenstates, and we would need to rediagonalize the Hamiltonian
to obtain the true dressed state potential.
Plane waves: the dissipative force
An atom illuminated by a plane wave does not experience a dipole force,
since $∇|$ Ω2 $|$ = 0. The dissipative force depends on Im( $ρ$ 21 $/$ Ω), which for low
intensities $|$ Ω $| ≪γ$ is given by
$ρ$ 21
$$
$γ$ 12
Im
$≈$
(8.22)
Ω
$γ$ 2
12 + ( $δ −kv$ )2 $.$
The $kv$ term accounts for the fact that an atom moving with velocity $v$ sees
a Doppler-shifted laser frequency. The dissipative force is thus
2 $γ$ 12 $|$ Ω $|$ 2
F $≈ħ$ k
(8.23)
$γ$ 2
12 + ( $δ −kv$ )2 = $ħ$ k $R$ opt $,$
where $R$ opt is the optical pumping rate. The expression above holds only in
the weak field limit, when $R$ opt $≪γ$ .
The physical intuition behind the dissipative force is straightforward.
The light directs a momentum kick $ħ$ k to the atom each time a photon is
absorbed. When the atom relaxes incoherently to the ground state, it emits
a photon into 4 $π$ , leading to no net change in momentum. Consequently the
motional state changes on average by $ħ$ k every time a photon is absorbed and
then spontaneously emitted. Absorption/re-emission occurs at the optical
pumping rate, so the rate of momentum change must be F = $ħ$ k $Ropt$ . More
generally, following this line of reasoning, the dissipative force F can also be
<!-- page 140 -->
thought of as the change in momentum $ħ$ k per scattering event, multiplied
by the rate of scattering, $γρ$ 22,
F = $ħ$ k $γρ$ 22 $.$
(8.24)
This result can be confirmed directly with a bit of algebra, by rewriting
$ρ$ 21 $/$ Ωin terms of the excited state population.
How large can the dissipative force be? We have seen in previous lectures
that the transition saturates as more and more power is applied. For large
powers,
$ρ$ 21
$$
$γ$ 12
$γ$
Im
=
$,$
(8.25)
Ω
$γ$ 2
$γ$ + 2 $Ropt$
12 + ( $δ −kv$ )2
so the force becomes
$γRopt$
F = $ħ$ k
(8.26)
$γ$ + 2 $Ropt$
In the limit of large powers, Ω $≫γ$ , $Ropt →∞$ , the maximum attainable
dissipative force is set by the atomic spontaneous emission rate,
F max = $ħ$ k $γ$
(8.27)
2 $.$
This limit makes intuitive sense given Eq. (8.24), because the atom cannot
spend more than half of its time in the excited state, and thus achieves a
maximum scattering rate given by $γ/$ 2.
It is instructive to consider typical orders of magnitude for the dissi-
pative force. A single momentum kick $ħk$ will typically change the atomic
velocity by a few centimeters per second. Compared to room temperature
velocities $∼$ 100 $−$ 1000 m/s, this recoil velocity is miniscule. A huge num-
ber of events $∼$ 104 are required to slow a room temperature atom down
to the recoil velocity. For alkali atoms, $γ ∼$ 106 Hz, so the slowing process
will require a few milliseconds, during which the atom will travel about one
meter. These kinds of considerations determine the physical scale of laser
cooling experiments.
For practical experiments, it is important to consider the space and time
dependent velocity of the atoms. In particular, as an atom is slowed by the
dissipative force, it will be Doppler shifted out of resonance with the applied
laser beam. In order to slow a beam of atoms, it is necessary to change
the resonance condition so that a typical atom will always be in resonance
with the applied light during the entire slowing process. In practice, this is
accomplished in two ways: either the applied laser is chirped (its frequency
is swept), or a spatially varying magnetic field adds a Zeeman shift to the
atoms to keep them in resonance as they slow down.

<!-- captions -->


<!-- footnotes -->
1In general, we can derive an identity to evaluate any commutator of the form [ˆ $p,$ ˆ $O$ (ˆ $r$ )].
Working in the position basis, the action of this commutator on any state $|ψ$ ( $r$ ) $⟩$ is given
by
[ˆ $p,$ ˆ $O$ ( $r$ )] $ψ$ ( $r$ )
=
[ $−iħ∇,$ ˆ $O$ ( $r$ )] $ψ$ ( $r$ )
(8.11)
=
$−iħ∇$ ( ˆ $O$ ( $r$ ) $ψ$ ( $r$ )) + $iħ$ ˆ $O$ ( $r$ ) $∇ψ$ ( $r$ )
(8.12)
=
$−iħ$ ( $∇$ ˆ $O$ ( $r$ )) $ψ$ ( $r$ ) $.$
(8.13)
Thus we can write [ˆ $p,$ ˆ $O$ ( $r$ )] = $−iħ∇$ ˆ $O$ ( $r$ ). One can use this identity, for example, to find
the force operator above.

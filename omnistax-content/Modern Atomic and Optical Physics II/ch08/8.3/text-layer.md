<!-- page 141 -->
8.3
Doppler Cooling
We have seen two ways in which photons can exert a force on atoms, in
principle allowing deceleration of an atomic beam. However, the momentum
kicks imparted to the atoms need not necessarily cool the atoms. Cooling
requires the analogue of viscosity, so that the applied fields not only slow the
atoms but also narrow their velocity distribution. In particular, an atomic
ensemble will be cooled if the applied fields slow down hot atoms more
efficiently than cool atoms. Consequently, a cooling force must depend on
the velocity of the atom. The technique of Doppler cooling employs the
velocity-dependent terms in the dissipative force to produce a viscous force
on atoms.
Optical molasses
To understand where the viscosity arises, we will examine the dissipative
force on slowly moving atoms, k $·$ v $≪δ, γ$ 12. Expanding this force in small
powers of the velocity, we find
$$
$$
$F ≈ħ$ k 2 $γ$ 12 $|$ Ω $|$ 2
1 + 2 $δ$ k $·$ v
$,$
(8.28)
$γ$ 2
$γ$ 2
12 + $δ$ 2
12 + $δ$ 2
$|$
${z$
$}$
$R$ 0
opt
where we recognize $R$ 0
opt as the optical excitation rate for atoms with zero
velocity. Two terms arise in Eq. (8.28): the first velocity-independent term
gives a directed momentum kick to the atom while the second term provides
the velocity dependent cooling force. Note that the first term is proportional
to k whereas the second $∝k$ 2, so that only the first term depends on the
sign of k. By applying counterpropagating beams, one might thus hope to
cancel the effects of the first term while retaining the cooling force of the
second term.
Consider an atom illuminated by two beams counterpropagating in the
$±z$ direction. Provided that the optical pumping rate is small, the total
<!-- page 142 -->
force on the atom is just the sum of the forces from each beam, $F$ = $F$ + +
$F−$ . Indeed, the velocity-independent forces will precisely cancel, while the
second term contributes a viscous force
$F$ = $F$ + + $F−$ = $ηmvz$
(8.29)
where m is the mass of the atom and $η$ is the friction coefficient
$δγ$ 12 $|$ Ω $|$ 2
$η$ = 8 $ħk$ 2
(8.30)
$m$
( $γ$ 2
12 + $δ$ 2)2 $.$
Note that the sign of $η$ depends on the sign of the detuning: for $δ <$ 0, the
viscous force will act to cool the atoms, whereas for $δ >$ 0 it will heat them.
The physics behind the Doppler cooling mechanism can be naively ex-
plained using energy conservation.
For $δ <$ 0, the atom absorbs a red-
detuned photon then spontaneously emits a photon resonant with the atomic
transition, so that the atom loses energy with each cycle. Blue-detuned light
increases the atom kinetic energy in a similar fashion. A more honest in-
terpretation must include the Doppler shifts of the atoms, but the result is
similar. When $δ <$ 0, faster atoms are Doppler shifted closer to resonance
with one of the two counterpropagating beams, and thus absorb more light
than slower atoms . When $δ >$ 0, the opposite is true, so the counterpropa-
gating beams tend to heat the sample.
The reader will notice that the cooling force only works in one dimen-
sion. Cooling an atom in three dimensions requires three sets of orthogonal
counterpropagating beams. For small optical pumping rates, the forces are
independent and the above analysis holds in each direction. This three di-
mensional viscous cooling is known as optical molasses.
Maximum value of the friction coefficient
The friction coefficient $η$ is largest when the detuning is close to the deco-
herence rate, i.e., $δ ∼γ$ 12, such that
$R$ 0
opt( $δ$ = 0)
$η$ = $ħk$ 2
$.$
(8.31)
$m$
$γ$ 12
Here, $R$ 0
opt( $δ$ = 0) = 2 $|$ Ω $|$ 2 $/γ$ 12 is the optical pumping rate on resonance.
Although we have derived our previous results in the limit of small applied
powers Ω, we can guess what will happen as the power is increased. The
optical pumping rate will eventually saturate at a value close to the atomic
<!-- page 143 -->
spontaneous emission rate $γ$ . A more careful analysis reveals that the friction
coefficient at large powers
$γ$
$η →ħk$ 2
$.$
(8.32)
8 $m$
$γ$ 12
The largest possible $η$ = $ħk$ 2 $/$ 4 $m$ is thus attained when the atomic transition
is radiatively broadened. This maximal value can be rewritten in terms of
the recoil frequency $ωR$ :
$η$ max = 1
(8.33)
2 $ωR.$
$d$
Since
$dtp$ = $−ηp$ , we find that the atoms lose momentum at a rate $∼ωR$ .
This discovery shows that the dynamical timescales for atomic motion are
$∼$ 1 $/ωR ≫$ 1 $/γ$ 12 $,$ 1 $/δ$ , justifying a posteriori the adiabatic approximation
used to derive the light force.
Since the typical timescale for cooling is
$ωR ∼$ 10 kHz, we see that Doppler cooling can be a fairly rapid process.
Behavior at finite velocity
Close to zero velocity, an atom in a red-detuned molasses experiences a
nearly linear viscous force. As its velocity increases, the friction coefficient
becomes velocity dependent, and we must resort to the full expression for
the Doppler force. In fact, for k $·$ v $≫δ, γ$ 12 the force vanishes. The range
of velocities which are effectively cooled is known as the “capture range”,
and is defined as $−vc < v < vc$ where the critical velocity corresponds to the
maximum force $F$ max = $|F$ ( $±vc$ ) $|$ .
The capture range depends on many parameters, but in certain limits
it has a simple form. When the optical pumping rate is the same size as
the detuning and the dephasing rate, the cooling force is maximized and
the capture range is $∼γ$ 12 $/k$ . A strongly driven system $R$ opt $≥γ$ 12 is power
broadened, so $vc ∼$ Ω $/k$ . Finally, a far-detuned field $δ ≥γ$ 12 leads to a
capture velocity $vc ∼δ/k$ . In all of these situations, the capture velocity
scales roughly as the wavelength multiplied by the dominant rate in the
problem.
The magneto-optical trap (MOT)
Dissipative forces can be used to cool atoms, narrowing their velocity distri-
bution, but they do not provide a confining potential. By combining optical
molasses with a magnetic field gradient, it is possible to simultaneously cool
and trap the atoms.
<!-- page 144 -->
The magnetic field induces Zeeman shifts which can provide a position
dependent detuning. By choosing the counterpropagating beams to have
different circular polarizations, we can ensure that the position dependence
causes atoms to be pushed back toward the center of the trap. Since we
want the different polarizations to couple different atomic transitions, MOT
operation requires a multilevel atom. The simplest possible configuration,
shown in Figure 8.3, uses a $J$ = 0 $→J$ = 1 atomic transition coupled by
two counterpropagating, cross-circularly polarized beams. Applying a linear
magnetic field shifts the three upper atomic levels, so that the dominant force
pushes that atom back towards the center of the trap. Since the Doppler
cooling technique is insensitive to polarization, the MOT simultaneously
localizes and cools the atoms.
An excellent treatment of related subjects can be found in Bill Phillips’
lecture notes from Les Houches LXXII (1999) or in “Laser Cooling and
Trapping” by Metcalf and van der Straten.
The Doppler limit
We have shown how light forces can slow and cool an atomic ensemble,
but we have not yet considered the final temperature attainable by Doppler
<!-- page 145 -->
<!-- page 146 -->
cooling. Our analysis thus far indicates that the energy of the atom will
decrease to zero. Clearly, we have missed something, because in practical
situations one generally discovers a limit to any cooling method.
Qualitatively, we can understand this limit in terms of the momentum
kicks imparted to atoms by spontaneous emission. As each atom radiates
spontaneously into 4 $π$ , it receives a momentum kick in an arbitrary direc-
tion, heating the ensemble. Consequently, we expect that cooling will pro-
ceed until the spontaneous emission heating rate equals the Doppler cooling
rate. Such considerations, however, are beyond the theory we have already
developed, and they motivate a generalized Doppler cooling theory which
includes the heating effects of spontaneous emission.
There are many ways to treat the heating effects of random processes;
we will use the Heisenberg-Langevin approach. Before proceeding into a
calculation of temperature, it is instructive to consider the basic theoretical
ideas behind this approach, since they provide further intuition into atomic
interactions with a coherent source and a radiation bath.

<!-- captions -->
8.1: Figure 8.1: Counterpropagating beams used for Doppler cooling.
8.2: Figure 8.2: Doppler cooling force at finite velocity. For red-detuned beams, atoms with positive velocities experience a negative force and vice versa. The maximum force is experienced by atoms traveling at the critical velocity $±vc$ .
8.3: Figure 8.3: The magneto-optical trap. Top: A typical configuration of red-detuned laser beams and magnetic field. Bottom: Trapping forces for a J=0 $→$ J = 1 atomic transition.

<!-- footnotes -->


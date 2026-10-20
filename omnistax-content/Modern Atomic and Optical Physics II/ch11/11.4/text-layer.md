<!-- page 250 -->
11.4
Atomic interactions
We have seen how trapping and cooling can be combined to bring an atomic
ensemble to quantum degeneracy, where an ideal gas would exhibit Bose
condensation. Real atoms, however, are not an ideal gas, and their interac-
tions play an important role in determining how atomic Bose condensates
behave.
In principle, including atomic interactions in our theory could prove
problematic. However, dilute atomic gases offer an appealing opportunity to
work with extremely low densities $n ∼$ 1012 $−$ 1015 cm $−$ 3 where the atoms are
separated by distances $n−$ 1 $/$ 3 $∼$ 100nm $−$ 1 $μ$ m. In contrast, liquids typically
have a density $n ∼$ 1021 cm $−$ 3 so high that the interatomic spacing $n ∼$ 1 $nm$
is hardly larger than the size of the atoms $r$ 0 $∼$ 1nm set by the tail of the
van der Waals interaction. As a result, the theory for dilute gases is much
simpler than that for liquids because we can identify a small parameter
$n−$ 1 $/$ 3 $r$ 0 in which to perturbatively expand. For example, the alkali atoms
have typical size $r$ 0 $∼$ 1 $−$ 10nm, so $n−$ 1 $/$ 3 $r$ 0 $<$ 0 $.$ 1.
The small parameter $n−$ 1 $/$ 3 $r$ 0 is not, however, quite what we want. In
order to effectively describe scattering processes in a low-density limit, it is
desirable to expand in a different small parameter $kr$ 0 $≪$ 1. Nevertheless,
if the gas is sufficiently cold $T < Tc$ , where $Tc ∼ħ$ 2 $n$ 2 $/$ 3 $/m$ corresponds
<!-- page 251 -->
to the condensation temperature for bosons or the degeneracy temperature
for fermions, then $n−$ 1 $/$ 3 $r$ 0 $≪$ 1 implies $kr$ 0 $≪$ 1. These so-called dilute
quantum gases provide a theoretically tractable system in which to study
atomic interactions.
11.4.1
The van der Waals potential
Interactions between well-separated, neutral, ground-state atoms are domi-
nated by the van der Waals potential. Consider two such atoms separated
by a distance much larger than the Bohr radius of the atom $r ≫a$ 0. At
these large distances, the electrostatic interaction between the atom can be
written as a multipole expansion
$U$ ( $r$ ) = $c$ 1
(11.39)
$r$ + $c$ 2
$r$ 2 + $c$ 3
$r$ 3 + $c$ 4
$r$ 4 + $c$ 5
$r$ 5 + $c$ 6
$r$ 6 + $. . . .$
The first term corresponds to the Coulomb potential, is nonzero only if the
atoms are charged. The second term represents charge-dipole interactions,
with higher orders in r representing higher order interactions. For the alkali
atoms, all of these terms are zero in first order perturbation theory because
the diagonal matrix elements of the dipole, quadrupole, etc. . . operators van-
ish. Second order perturbation theory is required to find the leading order
potential, and the main contribution (for neutral atoms in their ground
states) comes from the dipole-dipole interaction
ˆ $Vd$ ( $r$ ) = d1 $·$ d2
$−$ 3(d1 $·$ r)(d2 $·$ r)
$.$
(11.40)
$r$ 3
$r$ 5
If the energy of the atom in state $|n⟩$ is $En$ , then to leading order in 1 $/r$ ,
the resulting potential is
6
$X$
$|⟨$ 0 $|dz|n⟩|$ 2 $|⟨$ 0 $|dz|n′⟩|$ 2
$U$ ( $r$ )
=
(11.41)
$r$ 6
2 $E$ 0 $−En′ −En$
$n,n′$
$r$ 4
0
=
$−ħ$ 2
(11.42)
2 $μ$
$r$ 6 $,$
where $μ$ = $m$ 1 $m$ 2 $/$ ( $m$ 1 + $m$ 2) is the atomic reduced mass. Note that $E$ 0 $<$
$En̸$ =0, so the second order correction is always negative, so at large distances
the van der Waals potential is attractive. Typical values of $r$ 0 for the al-
kalis are between 1 nm and 10 nm, which is substantially larger than their
physical sizes $∼$ 0 $.$ 1 nm. If the interatomic distance becomes of the order
of $r$ 0, the multipole expansion breaks down, and the potential is no longer
<!-- page 252 -->
necessarily attractive. Moreover, for $r ≫r$ 0, U(r) is negligible compared to
any centrifugal potential. At short distances, electronic exchange dominates
the atomic interactions, producing a strong short-range repulsive potential.
11.4.2
Basic scattering theory
Our analysis of two-body scattering theory will consider only relative motion
between two atoms. This assumption is valid when the center of mass motion
decouples from the relative motion, for instance if the two atoms collide
in a uniform background potential or are confined in a parabolic external
potential. By focussing on relative motion, we can reformulate interatomic
collisions as a single body scattering off a fixed potential $U$ ( $r$ ), where $r$ is
the is the interatomic distance. The only important difference is a change
in the mass from the bare atomic masses $m$ 1 $, m$ 2 to the reduced mass of the
single body $μ$ = $m$ 1 $m$ 2 $/$ ( $m$ 1 + $m$ 2).
The wavefunction for a single body impinging on the potential from
direction ˆ $z$ can be written in the form
$ψk$ (r) = $eikz$ + $ψsc$ (r) $,$
(11.43)
where $ψk$ satisfies the Schroedinger equation
$−ħ$ 2 $∇$ 2
(11.44)
2 $μ ψk$ + $U$ (r) $ψk$ = $ħ$ 2 $k$ 2
2 $μ ψk.$
In the limit that $r →∞$ , the scattered wave approaches an outgoing wave
with some angular dependence
lim
(11.45)
$r→∞ψk$ (r) = $eikz$ + $fk$ ( $θ$ ) $eikr$
$r ,$
where $θ$ is the angle between r and the $z$ axis.
The incoming plane wave portion of the wavefunction can be written in
terms of the spherical harmonics with help from the following useful formula:
$∞$
$X$
$eikz$ =
$il$ (2 $l$ + 1) $Pl$ (cos $θ$ ) $jl$ ( $kr$ ) $,$
(11.46)
$l$ =0
where $jl$ ( $kr$ ) is the spherical Bessel function of order l. In the limit $kr ≫$ 1,
i.e. far away from the scatterer, the Bessel function approaches a sinusoidal
function, so that
$∞$
$$
$X$
2 $l$ + 1
$eikz ≈$
( $−$ 1) $l$ +1 $e−ikr$ + $eikr$
$.$
(11.47)
2 $ik Pl$ (cos $θ$ )1
$r$
$l$ =0
<!-- page 253 -->
The entire wavefunction can thereby be written as a coherent superposition
of incoming and outgoing spherical waves.
Scattering cross-sections
Experiments involving scattering typically measure quantities like the num-
ber of atoms scattered in a certain direction. Consequently it is convenient
to identify the partial scattering cross-section
$dσ$
$.$
(11.48)
$d$ Ω= scattering rate into solid angle dΩ
intensity of incoming beam
Since the numerator has units of 1/time, and the denominator has units of
1/(area $·$ time), the cross-section has units of area, which can be interpreted
as the size of the scattering potential. Expressed in terms of the scattered
wavefunction defined in Eq. (11.45), the partial cross-section is
$dσ$
$,$
(11.49)
$d$ Ω= $|fk$ ( $θ$ ) $|$ 2 $v$ final
$v$ initial
where $v$ final and $v$ initial are the final and initial velocities of the atom. We
will focus on elastic collisions, where $v$ final = $v$ initial.
The total cross-section is found by integrating the partial scattering
cross-section over all solid angles
$Z$
$Z π$
$σ$ =
$d$ Ω $dσ$
$|fk$ ( $θ$ ) $|$ 2 sin $θdθ.$
(11.50)
$d$ Ω= 2 $π$
0
The Born approximation
In order to calculate useful quantities like the cross-section, we need to know
how to write $fk$ ( $θ$ ) in terms of the scattering potential $U$ ( $r$ ). If we knew the
scattered wavefunction $ψk$ (r), we could integrate the Schroedinger equation
to obtain
$Z$
$fk$ ( $θ$ ) = $−μ$
$d$ 3r $′e−i$ k $′·$ r $′U$ (r $′$ ) $ψk$ (r $′$ ) $,$
(11.51)
2 $πħ$ 2
where $θ$ is the angle between the incident wave k and the scattered wave
k $′$ . The Born approximation corresponds to a perturbative expansion in
the potential. In the Born approximation, the incident wave is not much
affected by the scatterer, so that
$ψk$ (r) $≈eikz,$
(11.52)
<!-- page 254 -->
and the partial scattering cross-section is given by the Fourier transform of
the potential:
$Z$
$−μ$
$fk$ ( $θ$ )
=
$d$ 3r $′e−i$ (k $′−$ k) $·$ r $′U$ (r $′$ ) $.$
(11.53)
2 $πħ$ 2
While the Born approximation does not provide a good solution for most
situations, it does provide some useful intuition for cold collisions. In partic-
ular, when the incident particles have low energy, so that $k$ is small relative
to the effective size of the potential $r$ 0, it is valid to expand the exponential
in the first Born approximation,
$Z$
$−μ$
$fk$ ( $θ$ )
$≈$
$d$ 3r $′$ (1 $−i$ (k $′ −$ k) $·$ r $′$ + $· · ·$ ) $U$ (r $′$ ) $.$
(11.54)
2 $πħ$ 2
At low energies, only the first term will contribute, so that there is no angular
dependence in the partial scattering amplitude $fk$ ( $θ$ ). In other words, at low
temperatures the outgoing scattered wave is isotropic.
The partial wave expansion
To arrive at a quantitative description of low-energy scattering, we will make
use of partial wave analysis.
Assuming a spherical interatomic potential
$U$ ( $r$ ), we can expand the wavefunction in terms of the spherical harmonics,
$∞$
$X$
$ψ$ =
$AlPl$ (cos $θ$ ) $Rl$ ( $r$ ) $,$
(11.55)
$l$ =0
where $Pl$ is the $lth$ Legendre polynomial. Substituting $ψ$ into the Schrodinger
equation
$−ħ$ 2 $∇$ 2
(11.56)
2 $μ ψk$ + $U$ (r) $ψk$ = $ħ$ 2 $k$ 2
2 $μ ψk.$
and using $U$ (r) = $U$ ( $r$ ), we get a set of uncoupled equations, one for each
$Rl$ ( $r$ ):
$d$ 2
$d$
$Rl$ ( $r$ ) $−$ 2 $μ$
$dr$ 2 $Rl$ ( $r$ ) + 2
$r$
$drRl$ ( $r$ ) $−l$ ( $l$ + 1)
$r$ 2
$ħ$ 2 $U$ ( $r$ ) $Rl$ ( $r$ ) = $−k$ 2 $Rl$ ( $r$ ) $.$ (11.57)
Due to the short range character of U(r) (since $kr$ 0 $≪$ 1), we can di-
vide space into two regions where different approximations are valid (see
Figure 11.5). Provided we are working in the ultracold limit $kr$ 0 $≪$ 1, the
two regions overlap, and we can match the solutions to find the scattering
amplitude.
<!-- page 255 -->
In region A, $k ≪$ 1 $/r$ so we can neglect the energy term in the Schrodinger
equation. In principle, we can solve this equation to find $R$ ( $A$ )
( $r < r$ 0), and
$l$
this solution will depend on the details of the short-range potential, but not
on the energy $k$ .
In region $B$ , where $r > r$ 0, the effect of the potential is negligible, and
the Schrodinger equation reduces to a free-space Schrodinger equation in
spherical coordinates. The solutions in this region are thus spherical Bessel
functions, and for small distances 1 $> kr > kr$ 0
$R$ ( $B$ )
( $r$ ) = $c$ 1 $rl$ + $c$ 2 $r−$ ( $l$ +1) $.$
(11.58)
$l$
By matching $R$ ( $B$ )
( $r$ ) with $R$ ( $A$ )
( $r$ ) in their simultaneous region of validity, we can obtain the two coefficients $c$ 1 and $c$ 2. Furthermore, since $R$ ( $A$ )
$l$
$l$
( $r$ )
$l$
and $R$ ( $B$ )
( $r <$ 1 $/k$ ) are independent of $k$ , we find that the two coefficients $c$ 1
$l$
and $c$ 2 also do not depend on $k$ . The ratio between the two coefficients can
be estimated qualitatively by arguing that for $r ∼r$ 0 the two terms should
be comparable in magnitude, so
$c$ 2
$∝r$ 2 $l$ +1
$.$
(11.59)
0
$c$ 1
<!-- page 256 -->
The constant of proportionality is usually of order unity, but in special
situations it can be dramatically enhanced.
The spherical Bessel function solutions $R$ ( $B$ )
( $r$ ) have a different asymptotic
$l$
behavior at large $kr ≫$ 1:
$ $
$$
$kr −πl$
2 + $δl$
$R$ ( $B$ )
( $r$ ) $∝$ sin
$∼$ ( $−$ 1) $l$ +1 $e−ikr$ + $eikr$ +2 $iδl$
$,$
(11.60)
$l$
$r$
$r$
where the phase shift $δl$ is determined by the coefficients $c$ 1 and $c$ 2:
$k$ 2 $l$ +1
tan $δl$ = $c$ 2
(11.61)
$c$ 1
(2 $l −$ 1)!!(2 $l$ + 1)!! $.$
The double factorial symbol !! is defined by $n$ !! = $n$ ( $n −$ 2)( $n −$ 4) $. . .$ , with
( $−$ 1)!! = 1 for $l$ = 0. Note from the definition that in the limit of zero
energy $k →$ 0, the phase shift vanishes. This is a kinematic effect, which is
a consequence of the short range potential.
We have seen how to calculate $c$ 1 and $c$ 2 using the short range potential,
and from that derive the phase shift $δl$ . If we can represent $fk$ ( $θ$ ) in terms
of the phase shift, then at least in principle we can derive the scattering
cross section from the interatomic potential energy. Examine Eq. (11.60)
and Eq. (11.45), noting that the plane wave can written as in Eq. (11.47).
By comparing the coefficients in front of $eikr$ and $e−ikr$ , we see that the
scattering amplitude may be written
$∞$
$$
$$
$X$
$fk$ ( $θ$ ) =
$Pl$ (cos $θ$ )2 $l$ + 1
$e$ 2 $iδl −$ 1
$.$
(11.62)
2 $ik$
$l$ =0
In the ultracold limit $kr$ 0 $≪$ 1, the phase shift is small, so tan $δl ≈δl ≈$
$c$ ( $r$ 0 $k$ )2 $l$ +1 where $c$ is a constant of order unity. The scattering amplitude for
partial wave $l$ is then
$ $
$$
$e$ 2 $iδl −$ 1
$fl$ =
$≈δl$
(11.63)
2 $ik$
$k ≈cr$ 0( $r$ 0 $k$ )2 $l.$
At low temperatures, $fl̸$ =0 $≪f$ 0 unless there is a resonance which increases
the value of $c$ . Since such resonances are highly improbable, in the ultracold
limit we may safely neglect all but the s-wave scattering amplitude $f$ 0.
11.4.3
S-wave scattering
S-wave ( $l$ = 0) scattering dominates at low temperatures, so we will discuss
its properties in some detail. In particular, its properties can be entirely
characterized by a single parameter, the s-wave scattering length.
<!-- page 257 -->
The $l$ = 0 radial wavefunction has a particularly simple form for $r$ 0 $<$
$r <$ 1 $/k$ :
$R$ ( $B$ )
( $r$ ) = $c$ 1 + $c$ 2
(11.64)
0
$r ∝$ 1 $−a$
$r ,$
where we identify the s-wave scattering length
$a$ = $−c$ 2
$.$
(11.65)
$c$ 1
The s-wave phase shift can likewise be written in terms of the scattering
length
tan $δ$ 0 = $−ka$
(11.66)
as can the s-wave scattering amplitude
$a$
$f$ 0 = $−$
(11.67)
1 + $ika.$
Note that in the low-energy limit, $f$ 0 $≈−a$ ; this furnishes an alternate
definition of the scattering length:
lim
(11.68)
$k→$ 0 $f$ 0 = $−a.$
However, it is important to remember that when $ka ∼$ 1 the scattering
amplitude will differ from the scattering length.
<!-- page 258 -->
Physical interpretation
To obtain some physical intuition for the s-wave scattering length, we will
consider three examples: a hard sphere, a generic repulsive potential, and a
generic attractive potential. A hard sphere is characterized by a potential
$ ∞$
$$
$r < r$ 0
$UH$ =
$.$
(11.69)
0
$r > r$ 0
Clearly, the radial wavefunction must vanish at the boundary, so the inter-
cept of the wavefunction asymptote must be
$aH$ = $r$ 0 $.$
(11.70)
At low energies, any potential with a positive scattering length therefore
acts like a hard sphere of radius $a$ . For example, a repulsive potential with
a finite height
$ |V$ 0 $|$
$$
$r < r$ 0
$UR$ =
$,$
(11.71)
0
$r > r$ 0
will have a scattering length which is positive but less than $r$ 0:
0 $< aR < r$ 0 $.$
(11.72)
The behaviour of an attractive potential is less obvious. A generic attractive
potential such as
$ −|V$ 0 $|$
$$
$r < r$ 0
$UA$ =
(11.73)
0
$r > r$ 0
can either have a positive or a negative scattering length depending on
the proximity of the highest energy bound state. For a sufficiently shallow
potential that no bound state exists, the scattering length will be negative
$a$ (0)
(11.74)
$A <$ 0 $.$
As the attractive potential gets deeper, eventually a bound state will en-
ter, bringing a node from $r$ = $∞$ into the wavefunction, and changing the
sign of the scattering length. As we will see, the bound state resonances
lead to an enhancement of the scattering length which can be exploited to
experimentally manipulate the strength of atomic interactions.
<!-- page 259 -->
The s-wave pseudopotential
In the ultracold limit $kr$ 0 $≪$ 1, all interatomic potentials with the same
scattering length $a$ are equivalent to the pseudopotential $U$ ( $r$ ) where
$U$ ( $r$ ) $ψ$ ( $r$ ) = 4 $πħ$ 2 $a$
$δ$ 3(r) $∂$
(11.75)
2 $μ$
$∂r$ ( $r · ψ$ ( $r$ )) $.$
In turn, this potential is equivalent to setting a boundary condition on the
wavefunction
$$
$$
lim
1 $−a$
$.$
(11.76)
$r→$ 0 $ψ$ ( $r$ ) $∝$
$r$
The Schrodinger equation for the pseudopotential is
$−ħ$ 2 $∇$ 2
$δ$ 3(r) $∂$
(11.77)
2 $μ ψ$ ( $r$ ) + 4 $πħ$ 2 $a$
2 $μ$
$∂r$ ( $r · ψ$ ( $r$ )) = 0 $,$
and it is simple to verify that $ψ$ ( $r$ ) = 1 $−a/r$ satisfies this equation.
The pseudopotential is useful because it only acts on the regular part
of the wavefunction, ignoring the 1 $/r$ singularity.
For smooth functions
(without any singularities) it acts like a simple delta-function potential
$U$ ( $r$ ) = 4 $πħ$ 2 $a$
$δ$ 3(r) $.$
(11.78)
2 $μ$
<!-- page 260 -->
This is important for first order perturbation theories, where the change in
ground state energy due to interatomic interactions is
$X$
1
4 $πħ$ 2 $a$
∆ $E$ 0 = $⟨φ$ 0 $|$
$U$ ( $rij$ ) $|φ$ 0 $⟩$ = $N$ ( $N −$ 1)
$.$
(11.79)
2
$V$
$m$
$⟨i,j⟩$
This allows one to calculate the chemical potential
$N$
$μ$ = $∂E$ 0
(11.80)
$∂N ≈$ 4 $πħ$ 2 $a$
$m$
$V .$
11.4.4
Particle statistics
Our analysis thus far has assumed that the colliding particles were distin-
guishable, for example different atomic species or atoms of the same species
in different electronic states. In order to apply our analysis to indistinguish-
able particles, we must consider the fact that scattering of identical particles
by angle $θ$ produces the same result as scattering by angle $π$ + $θ$ . We will
consequently need to sum over both possibilities:
$eikr$
$ψk$ ( $r$ ) = $eikz$ + $εe−ikz$
$√$
+ $fk$ ( $θ$ ) + $εfk$ ( $π$ + $θ$ )
$√$
(11.81)
2
2
$r$
Since the two-particle wavefunction must be symmetric or antisymmetric
under particle exchange, $ε$ = +1 for bosons and $−$ 1 for fermions.
Using this expression, we can find the scattering cross-section for iden-
tical particles:
$dσ$
$√$
$|$ 2 $.$
(11.82)
$d$ Ω= $|fk$ ( $θ$ ) + $εfk$ ( $π$ + $θ$ )
2
For even $l$ partial waves, the two amplitudes add for bosons and subtract
for fermions; for odd $l$ partial waves, the amplitudes cancel for bosons and
add for fermions. In particular, identical bosons will see a factor of 2 en-
hancement in their s-wave interaction cross-section, while identical fermions
do not interact at all via the s-wave channel.
11.4.5
Scattering off an atomic ensemble
The formalism for treating two-particle scattering events can be compared
to the quantum-optical problem of light scattering off a single atom. In both
cases, the incident light or matter wave is modified by an outgoing radial (or
<!-- page 261 -->
dipole) wave. Likewise, both situations can be extended to include effects of
many coherent scatterers: each emitted wave adds up in phase to produce a
plane wave, modified from the incident wave by absorption and refraction.
To illustrate this analogy, we will consider a cold particle (or matter
wave) incident on a slab of width $L$ containing a dilute cloud of $N$ cold
atoms, such that their density $n$ satisfies $na$ 3 $<<$ 1. We will assume that
the incident particle has wavevector K = $Kz$ and position r0, and we will
label the positions of the $jth$ scatterer by r j. For this ensemble, $fk$ ( $θ$ ) = $−a$ ,
so the many-body wavefunction may be written as
$X$
$a$
$ψ$ K(r0 $,$ r1 $,$ r2 $, · · ·$ r N)
=
$eiKzx$ 0 $−$
(11.83)
$|$ r0 $−$ r j $|ei|K||$ r0 $−$ r j $|$
$j$
$X$
$a$
=
$eiKz$ 0 $−$
$|$ r0 $−$ r j $|eiK$ ( $r$ 0 $−rj$ ) $/$ 2 $eiK$ ( $z$ 0+ $zj$ ) $/$ 2 $.$
$j$
By tracing over the positions of the scattering particles r1 $,$ r2 $, . . . ,$ r N, we
can obtain the transmitted matter wave
$Z$
$a$
$ψK$ (r0) = $eiKz$ 0 $−n$
$d$ 3r j
(11.84)
$|$ r0 $−$ r j $|eiK$ ( $r$ 0 $−rj$ ) $/$ 2 $eiK$ ( $z$ 0+ $zj$ ) $/$ 2
Far beyond the slab of scatterers, $z$ 0 $≫L$ , the wave is of the form
$ψk$ ( $z$ 0) = $AeiKz$ 0 $,$
(11.85)
where
$A ≈ei$ 4 $πanL/K.$
(11.86)
The slab has produced a phase shift
$δK$ = $−$ 4 $πan$
$,$
(11.87)
$K$
which corresponds to the effective potential energy shift caused by interac-
tions with atoms in the slab. In particular, the change in kinetic energy
while the particle is in the slab is
$ħ$ 2 $K$ 2
$$
$δ$
= 4 $πħ$ 2 $an$
$.$
(11.88)
2 $m$
$m$
This change in kinetic energy corresponds energy cost associated with the
mean-field potential energy in the slab.
<!-- page 262 -->
11.4.6
Resonances
In quantum dilute gases, it is possible to find situations where the scattering
length far exceeds the size of the van der Waals tail $a ≫r$ 0. In this regime,
$ka$
$∼$
1
(11.89)
$kr$ 0
$≪$
1 $,$
(11.90)
so the gas is cold and dilute, but strongly interacting. Liquids are strongly
interacting, but because they are not dilute $kr$ 0 $∼$ 1, the perturbative ex-
pansion in partial waves is invalid, so we must take into account p-wave,
d-wave, etc. . . scattering amplitudes in addition to the s-wave channel. The
cold dilute, strongly interacting gases thus provide a novel system for study-
ing purely s-wave, strong interactions.
One particularly interesting feature of the dilute gases is that it is pos-
sible to find situations where $a ≫r$ 0. This limit corresponds to the s-wave
resonance, where $ka ∼$ 1 but a small parameter $kr$ 0 $≪$ 1 still exists. For
large and positive $a$ , the resonance in the scattering length is connected to
the appearance of a peculiar weakly bound state with radial wavefunction
$R$ (0)
$√$
(11.91)
0 ( $r$ ) = $e−r/a$
2 $πar,$
and energy
$E$ 0 = $−ħ$ 2
(11.92)
2 $μa$ 2 $.$
This corresponds to a bound state of the attractive van der Waals tail with
energy very close to zero.
A number of interesting phenomena arise near this resonance, and it is
possible to form molecules in these weakly bound states.
There are two
methods for molecule formation:
(1) Cool a gas with positive scattering length $a >$ 0 to temperatures
below the binding energy $kBT < E$ 0
(2) Prepare a cold gas with negative scattering length $a <$ 0 and sweep
through the resonance $a →−∞→∞→a >$ 0.
The second method can only be accomplished if we can somehow controllably
manipulate the interatomic potential $U$ ( $r$ ) to change the scattering length.
Feshbach resonances provide one technique for controlling the scattering
length.
<!-- page 263 -->
Feshbach Resonances
Until this point, we have considered scattering of atoms in their ground
state, and have neglected any effects associated with internal states of the
atoms. In reality, we have to take into account other scattering channels,
for example singlet or triplet states of the two atoms. For example, suppose
there are two channels, each with their own effective interatomic potential
$Uo$ ( $r$ ) and $Uc$ ( $r$ ). The higher energy channel is referred to as the “closed”
channel because it presents a higher potential barrier for quasibound states.
Both channels obey a Schrodinger equation, and if there is some small
interaction $g$ between the two channels, their Schrodinger equations are
coupled:
$$
$$
ˆ $ξ$ + $Uo$ ( $r$ ) $−E$
$ψo$ + $gψc$
=
0
(11.93)
$$
$$
ˆ $ξ$ + $Uc$ ( $r$ ) $−E$
$ψc$ + $gψo$
=
0 $,$
(11.94)
where ˆ $ξ$ is the kinetic energy operator. Let $ψm$
$c$
be a complete set of or-
thonormal eigenfunctions of
$$
$$
ˆ $ξ$ + $Uc$ ( $r$ ) $−Em$
$ψm$
(11.95)
$c$ = 0 $,$
<!-- page 264 -->
and expand $ψc$ in terms of them:
$∞$
$X$
$ψc$ =
$αmψm$
$c .$
(11.96)
$m$ =1
Substituting into Eq. (11.94) and taking the the inner product with $ψn$
$c$ yields
the coefficients
$c |g|ψo⟩$
$αn$ = $−⟨ψn$
(11.97)
$En −E .$
Close to resonance, only one of these coefficients $αres$ will have an appreciable
physical effect, so the closed channel wavefunction is approximately given
by
$c$
$|g|ψo⟩$
$ψc$ ( $r$ ) $≈−⟨ψres$
$c$
( $r$ ) $.$
(11.98)
$Eres −E ψres$
We now substitute this expression into Eq. (11.94) to find the effect of the
nearly resonant closed channel on the Schrodinger equation for the open
channel
$$
$$
$c$
$|g|ψo⟩$
ˆ $ξ$ + $Uo$ ( $r$ ) $−E$
$ψo$ ( $r$ ) = $g$ ( $r$ ) $⟨ψres$
( $r$ ) $.$
(11.99)
$c$
$Eres −E ψres$
To solve this equation, we can make use of the homogeneous solution
$$
$$
ˆ $ξ$ + $Uo$ ( $r$ ) $−E$
$χ$ = 0 $→χ$ = 1 $−abg$
(11.100)
$r ,$
where $abg$ is the background scattering length of the open channel in the
absence of any effects from the closed channel. There are many possible
solutions to the inhomogenous equation
$$
$$
ˆ $ξ$ + $Uo$ ( $r$ ) $−E$
$η$ = $g$ ( $r$ ) $ψres$
( $r$ ) $,$
(11.101)
$c$
and we will choose the one which behaves as
$$
$$
$η$ = $A$
1 $−b$
$,$
(11.102)
$r$
where the constants A and b are determined by the potential energy curve
and coupling constant.
The complete solution is a superposition of the
homogeneous and inhomogeneous solution
$ψo$ = $αχ$ + $βη$ = ( $α$ + $βA$ ) $−αabg$ + $βAb$
$,$
(11.103)
$r$
<!-- page 265 -->
which corresponds to an effective scattering length
$a$ = $abg$ + $Ab −abg$
(11.104)
$α$
$β$ + $A ,$
where all of the parameters are known with the exception of $α/β$ . Again
substituting $ψo$ = $αχ$ + $βη$ into the second Schrodinger equation Eq. (11.99),
a bit of algebra allows one to solve for the unknown ratio, yielding the
scattering length:
$$
$$
∆
$z$
$}|$
${$
$$
$$
$$
( $A/abg$ )( $b −abg$ ) $⟨ψres$
$c$
$|g|η⟩$
$$
$a$ = $abg$
$$
$$
(11.105)
$$ 1 +
$Eres$ + $⟨ψres$
$c$
$|g|Aχ −η⟩$
$−E$
$,$
$|$
${z$
$}$
$E∗res$
where the denominator can be rewritten in terms of a shifted resonance
energy. If the different channels correspond to atomic states with differ-
ent magnetic moments, the resonance energy can be shifted by tuning the
magnetic field $E∗$
$res ∝μB$ ( $B −B∗$
0) $.$ For low-energy collisions, as expected in
ultracold atomic gases,
$$
$$
∆
$a$
=
$abg$
1 +
(11.106)
$E∗res −E$
$$
$$
∆
$≈$
$abg$
1 +
$,$
(11.107)
$E∗res$
(11.108)
the scattering length diverges near the critical magnetic field where the
closed channel bound state is resonant with the threshold energy of the
open channel.
Feshbach resonances are typically extremely narrow, with a typical width
of a few Gauss. For the ultracold atoms, the scattering length is well defined
∆ $B ∼$ 10 $G ⇒$ ∆ $∼$ 500 $μ$ K, since the resonance width is much greater than
typical atomic temperatures $∼$ 1 $μ$ K.
One should note that the binding energy of the weakly bound level is
not equal to the energy of the resonance level. Near resonance, this binding
energy takes the form
$ħ$ 2
( $E∗$
$res$ )2
$|E$ 0 $|$ =
(11.109)
2 $μa$ 2 $≈ħ$ 2
2 $μ$
$a$ 2
$bg$ ∆2 $̸$ = $Eres.$
<!-- page 266 -->
11.4.7
Quantum theory of an interacting Bose gas
A weakly interacting, dilute atomic gas can be well described by a Hamil-
tonian which incorporates single-particle terms and two-body interactions,
$N$
$ p$ 2
$$
$X$
$X$
ˆ $H$ =
$i$
+
2 $m$ + $V$ trap( $ri$ )
(11.110)
$V$ int( $ri −rj$ ) $,$
$i$ =1
$i<j$
where $r$ 0 is the typical range of the interaction potential. In cold, dilute
atomic gases where $kr$ 0 $≪$ 1, the interaction potential can be replaced by
the s-wave pseudopotential
$V$ int( $r$ ) $≈$ 4 $πħ$ 2 $a$
$δ$ ( $r$ ) $,$
(11.111)
$m$
$| {z }$
$U$ 0
where all of the properties of the interatomic potential are represented by
one parameter, the scattering length $a$ . In principle, we could now begin to
calculate the ground state and dynamics of the $N$ atoms in the ensemble.
Since the atoms are indistinguishable, however, we would have to be careful
to symmetrize (for bosons) or antisymmetrize (for fermions) our wavefunc-
tions, which becomes quite inconvenient for large numbers of atoms. Instead,
we will rewrite this Hamiltonian in the language of second quantization,
which implicitly incorporates the indistinguishability of the atoms.
<!-- page 267 -->
Second quantization
The second quantization formalism for matter waves resembles closely the
methods used to quantize the electromagnetic field. As for photons, we will
consider a complete set of single-atom states ${|ζ⟩}$ , and define creation and
annihilation operators ˆ $bζ,$ ˆ $b†$
$ζ$ which can add or remove an atom from those
states
ˆ $bζ|ζ⟩$
=
$|$ vac $⟩$
(11.112)
ˆ $b†$
=
$|ζ⟩.$
(11.113)
$ζ|$ vac $⟩$
The statistics of the atoms determine the commutation properties of these
operators.
Bosons:
[ˆ $bζ,$ ˆ $b†$
(11.114)
$ζ′$ ] = $δζ,ζ′$
Fermions:
${$ ˆ $bζ,$ ˆ $b†$
(11.115)
$ζ′}$ = $δζ,ζ′,$
where [ $A, B$ ] = $AB −BA$ is the commutator and ${A, B}$ = $AB$ + $BA$ is the
anticommutator. Since the commutation relations guarantee the symmetry
or anti-symmetry of the resulting wave-functions, this formalism provides a
convenient tool for treating indistinguishable particles.
Many-body states are easily represented in terms of these creation and
annihilation operators acting on the vacuum state. For example, a state $|φ⟩$
with $ni$ atoms in the single-particle state $|ζi⟩$ can be represented by
$Y$
$|φ⟩$ = $|n$ 1 $, n$ 2 $. . .⟩$ =
(ˆ $b†$
(11.116)
$i$ ) $ni|$ vac $⟩.$
$i$
For example, in the case of bosons, field operators are analogous to the
creation and annihilation operators for the electromagnetic field modes:
$p$
ˆ $b†$
=
$nζ$ + 1 $|n$ 1 $, n$ 2 $. . . nζ$ + 1 $, . . .⟩$
(11.117)
$ζ|φ⟩$
$√nζ|n$ 1 $, n$ 2 $. . . nζ −$ 1 $, . . .⟩.$
ˆ $bζ|φ⟩$
=
(11.118)
Although we will concentrate on bosons here, it is worth noting that the
rules for raising and lowering fermion number are similar, but one must
keep track of the negative signs which arise from anticommutation.
One particularly useful basis is the momentum basis, $|$ k $⟩$ , with its asso-
ciated creation and annihilation operators ˆ $b$ k and ˆ $b†$
k. In this case, there is
an exact analogy between bosonic atoms and photons. Moreover, we can
<!-- page 268 -->
take the Fourier transform of these operators to define a real-space operator
for the matter field
1
$X$
ˆ $ψ$ (r) =
$√$
$ei$ k $·$ rˆ $b$ k $,$
(11.119)
$V$
k
where the allowed k-vectors are determined by the boundary conditions at
the edges of the quantization volume $V$ . Using the commutation relation
[ˆ $b$ k $,$ ˆ $b†$
k $′$ ] = $δ$ k $,$ k $′$ and the identity $P$
$k ei$ k $·$ (r $−$ r $′$ ) = $V δ$ (r $−$ r $′$ ), we can find the
commutation rules for ˆ $ψ$ ( $r$ ):
[ ˆ $ψ$ (r) $,$ ˆ $ψ†$ (r $′$ )] = $δ$ (r $−$ r $′$ ) $.$
(11.120)
Physically, ˆ $ψ$ (r) can be interpreted as an operator which annihilates a par-
ticle at position r.
Operators in the second quantization representation
Every atomic observable can be represented in terms of the matter field
creation and annihilation operators. For example, the number operator is
$Z$
$X$
ˆ $N$ =
ˆ $b†$
$d$ 3r ˆ $ψ†$ (r) ˆ $ψ$ (r) $.$
(11.121)
$ζ$ ˆ $bζ$ =
$ζ$
The Hamiltonian in Eq. (11.110) can also be written in terms of ˆ $ψ$ (r):
$Z$
$$ ˆ $p$ 2
$$
ˆ $H$
=
$d$ 3r ˆ $ψ†$ (r)
ˆ $ψ$ (r)
(11.122)
2 $m$ + $V$ trap(r)
$Z$
$Z$
+1
$d$ 3r
$d$ 3r $′$ ˆ $ψ†$ (r) ˆ $ψ†$ (r $′$ ) $Vint$ (r $−$ r $′$ ) ˆ $ψ$ (r $′$ ) ˆ $ψ$ (r) $.$ (11.123)
2
When the interatomic potential can be replaced by the s-wave pseudopoten-
tial, the second term can be considerably simplified, so that the Hamiltonian
becomes
$Z$
$$ ˆ $p$ 2
$$
ˆ $H$ =
$d$ 3r ˆ $ψ†$ (r)
ˆ $ψ†$ (r) ˆ $ψ$ (r)
ˆ $ψ$ (r) $.$
(11.124)
2 $m$ + $V$ trap(r) + $U$ 0
2
Zero temperature non-interacting BEC
It is instructive to consider the ground state at zero temperature in two
types of potentials:
(1) Homogeneous potential
(2) Harmonic oscillator potential
<!-- page 269 -->
The single particle states for these potentials are well known, and at zero
temperature we expect all of the atoms to pile into the ground state. In the
case of the infinite wall square well,
$ψ$ 0( $r$ ) $∼$ sin $πx/L$ sin $πy/L$ sin $πz/L.$
(11.125)
The harmonic oscillator ground state wavefunction is a Gaussian
$$
$$
$x$ 2
$−$
2 $a$ 2 $x$ + $y$ 2
2 $a$ 2 $y$ + $z$ 2
2 $a$ 2 $z$
$φ$ 0( $r$ ) = $e$
(11.126)
$π$ 3 $/$ 4( $axayaz$ )1 $/$ 2 $,$
where ${ax, ay, az}$ are the harmonic oscillator lengths associated with the
$ħ$
trapping frequencies ${ωx, ωy, ωz}$ in each dimension: $a$ 2
$j$ =
$mωj$ . If the atoms
do not interact, then the many-body state can be written as
$|$ Ψ $⟩$ = (ˆ $b†$
(11.127)
0) $N|$ vac $⟩,$
where ˆ $b$ 0 annihilates an atom in the ground state of the appropriate poten-
tial.
Weak interactions: the Gross-Pitaevski equation
If the interactions are sufficiently weak, then we qualitatively expect that
Bose condensation should still occur, with most of the atoms occupying one
quantum state. We now need to determine which state will be macroscopi-
cally occupied.
Using the Hamiltonian given in Eq. (11.124), we can find the Heisenberg
equations of motion for the matter field operator
$$
$$
$iħ∂$
ˆ $ψ$ = [ ˆ $ψ,$ ˆ $H$ ] =
$−ħ$ 2 $∇$ 2
ˆ $ψ.$
(11.128)
$∂t$
2 $m$ + $V$ trap + $U$ 0 ˆ $ψ†$ ˆ $ψ$
This type of nonlinear operator equation is in general quite difficult to solve,
but we can use our physical intuition to find an appropriate approximation.
In particular, since we expect macroscopic occupation of one state, the field
operator should be close to a classical coherent field
ˆ $ψ$ = $ψ$ + $δ$ ˆ $ψ,$
(11.129)
where $⟨δ$ ˆ $ψ⟩$ = 0. When these fluctuations around the mean value are small
$⟨δ$ ˆ $ψ†δ$ ˆ $ψ⟩≪⟨$ ˆ $ψ†$ ˆ $ψ⟩,$
(11.130)
<!-- page 270 -->
the Bose condensate can be well described by a classical nonlinear equation
for $ψ$ , known as the Gross-Pitaevski equation:
$iħ∂ψ$
(11.131)
$∂t$ = $−ħ$ 2
2 $m∇$ 2 $ψ$ + $V$ trap $ψ$ + $U$ 0 $|ψ|$ 2 $ψ.$
The Gross-Pitaeveski equation resembles a Schrodinger equation with a non-
linear term, where $ψ$ acts like the wavefunction for the Bose condensate.
Since $ψ$ acts like a wavefunction, we should be careful about its normal-
ization, which is set by the total number of particles
$Z$
$N$ =
$d$ 3r $|ψ|$ 2 $.$
(11.132)
This normalization condition motivates us to interpret $|ψ$ (r) $|$ 2 as the con-
densate spatial density.
Before proceeding, we note that replacing the operator quantity ˆ $ψ$ by
the c-number quantity $ψ$ is strictly speaking only valid if the atom field
is in a coherent state ˆ $ψ|ψ⟩$ = $ψ|ψ⟩$ .
The matter-wave coherent state is
analogous to the electromagnetic coherent state in the sense that it has a
non-vanishing classical coherence $⟨$ ˆ $ψ⟩$ = $ψ$ , a well-defined phase $∝ψ$ , and a
$R$
$R$
distribution of possible atom numbers centered at $⟨$
$dV$ ˆ $ψ†$ ˆ $ψ⟩$ =
$dV |ψ|$ 2.
Our derivation of the Gross-Pitaevski equation implicitly assumes that the
condensate is in a coherent state with an arbitrary phase (this represents a
so-called symmetry breaking description). The validity of this assumption is
not obvious, but for large atom numbers it provides an excellent description
of condensate dynamics.
The Gross-Pitaevski equation provides an adequate description of most
properties of zero temperature Bose condensates, and it bears a strong re-
semblance to the evolution of the electromagnetic field in a Kerr medium.
The relevant questions for a matter field, however, are rather different than
those for light.
The ground state of a condensate at T=0
The ground state of the electromagnetic field is the vacuum, but matter
behaves rather differently because the total number of atoms is conserved,
resulting in a finite chemical potential. The ground state is a stationary
solution of the Gross-Pitaevski equation with phase evolution
$ψ$ =  ̃ $ψe−iμt/ħ,$
(11.133)
<!-- page 271 -->
where  ̃ $ψ$ obeys
$μ$  ̃ $ψ$ = ( $−ħ$ 2
+ $U$ 0 $|$  ̃ $ψ|$ 2
)  ̃ $ψ.$
(11.134)
2 $m∇$ 2 + $V$ ( $r$ )
$| {z }$
$|$
${z$
$}$
$Emf$
$∼ħωt$
The character of the solution  ̃ $ψ$ is determined by the relative importance
of the kinetic energy terms and the interaction terms. The ratio of the trap
frequency $ħωt$ to the mean-field interaction energy $Emf ∼U$ 0 $N/V$ is
$Emf$
$t$
$≈$ 4 $πNaa$ 2
$∼Na$
$,$
(11.135)
$ħωt$
$V$
$at$
where $a$ is the scattering length and $at$ is the characteristic size of the har-
monic oscillator trap. Note that the number of condensed atoms appears in
the numerator of this expression, so even when the gas is weakly interacting
( $a ≪at$ ) the interactions can still have important effects on the conden-
sate behaviour. When $ħωt ≫Emf$ , the condensate behaves essentially as
a non-interacting gas.
In the opposite limit $ħωt ≪Emf$ (known as the
Thomas-Fermi regime for $U$ 0 $>$ 0) the interactions dominate.
The Thomas-Fermi approximation
When the interactions between atoms are strong and repulsive $U$ 0 $>$ 0, we
can neglect the kinetic energy term. The resulting solution for the mean
field is
$($
$μ−V$ ( $r$ )
for r such that $V$ ( $r$ ) $< μ$
$|$  ̃ $ψ|$ 2 =
$U$ 0
(11.136)
0
for larger r $.$
The chemical potential $μ$ is set by the normalization condition
$Z μ −V$ ( $r$ )
$N$ =
$d$ 3r $.$
(11.137)
$U$ 0
For example, a BEC confined by a harmonic trap has a chemical potential
given by
$$ 15 $Na$
$$ 2 $/$ 5
$μ$ = $ħωt$
$.$
(11.138)
2
$at$
Since we are in the regime of strong interactions, the factor $Na/at ≫$ 1
increases the chemical potential significantly. The size  ̄ $a$ of the condensate
also increases due to interactions,
$$ 15 $Na$
$$ 2 $/$ 5
 ̄ $a$ = $at ·$
$.$
(11.139)
$at$
<!-- page 272 -->
This expansion makes physical sense because it lowers the energy cost of the
repulsive interactions.
The healing length
The Thomas-Fermi approximation works poorly in regions where the atom
density is insufficient to satisfy the assumption that the mean-field energy
overwhelms kinetic energy. In particular, in the vicinity of the walls of the
traps, the kinetic energy can no longer be neglected. For example, consider a
condensate in a box with infinite potential walls. The Thomas-Fermi approx-
imation would predict that $|$  ̃ $ψ|$ 2 = $N/V$ is constant, dropping off suddenly
to zero right at the edges of the box. Physically, this makes no sense: the
wavefunction must be smooth even at the walls because sharp variations in
 ̃ $ψ$ ( $r$ ) exact a high kinetic energy cost. We expect the wavefunction to fall off
smoothly over some characteristic length $ξ$ . This so-called “healing length”
can be estimated by equating the kinetic energy associated with variation
on length $ξ$ with the interaction energy $∼U$ 0 $N/V$ , which results in
1
1
$ξ$ 2 =
(11.140)
8 $πaN/V$ =
8 $πn$ 0 $a.$
As long as the gas is sufficiently dilute $n$ 0 $a$ 3 $≪$ 1, the healing length extends
over many atoms
1
$ξ ≫$
$.$
(11.141)
$n$ 1 $/$ 3
0
When this dilute gas assumption breaks down, the Gross-Pitaevski equation
can no longer provide an adequate description of the condensate. We also
note that the above discussion is valid only for repulsive atoms; we will
find that problems arise for attractive interactions when the kinetic energy
approaches the mean-field energy.

<!-- captions -->
11.5: Figure 11.5: The Schrodinger equation can be approximately solved for small $r$ in region A and for large $r$ in region B. In the ultracold limit $kr$ 0 $≪$ 1 the regions of validity overlap, the two solutions can be matched for $r$ 0 $< r <$ 1 $/k$ .
11.6: Figure 11.6: The scattering length can be visualized as the intercept of the asymptote to the wavefunction in the region $r$ 0 $≪r ≪$ 1 $/k$ .
11.7: Figure 11.7: The wavefunction and scattering length for the hard sphere, the repulsive potential, and the attractive potential
11.8: Figure 11.8: The upper potential corresponds to a “closed” channel, with many unoccupied bound states. The lower or “open” channel corresponds to the initial internal state of the atoms. When a bound state in the closed channel approaches the threshold energy in the open channel, any small coupling between the two channels can have a large effect, leading to dramatic changes in the scattering length in the open channel.
11.9: Figure 11.9: The form of the scattering length in the vicinity of a Feshbach resonance

<!-- footnotes -->


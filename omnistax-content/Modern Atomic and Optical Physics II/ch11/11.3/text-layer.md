<!-- page 238 -->
11.3
Experimental techniques used in Bose con-
densation of atoms
There is an intimate relationship between trapping and cooling in atomic
physics. In order to trap atoms, they must be sufficiently cold; once they
are trapped, it is possible to cool them still further since the trap breaks
their thermal contact with the outside word. Consequently we will begin by
discussing some of the basic considerations behind atom trapping.
11.3.1
Atom-surface interactions
Experiments use magnetic, electric, or gravitational traps to isolate atoms
from their environment. In particular, traps prevent atoms from coming
into contact with solid or liquid surfaces. Atom loss is the primary problem
associated with atom-surface collisions, because atoms have a tendency to
stick to a solid. However, this tendency can vary depending on the type of
atom and the type of surface under consideration.
The effective potential for an atom above a surface will generally support
<!-- page 239 -->
many bound states which can trap the atom. Moreover, solids and liquids
have a huge number of vibrational and rotational modes, so once trapped
near the surface the atom will quickly relax to the ground state of the
potential. At high temperatures $>$ 1 mK, the probability for an atom to
stick is essentially unity. Typical binding energies for different atom-solid
pairs are listed in Table 11.1.
He-NaCl
$∼$
60 $K$
Ne-LiF
$∼$
130 $K$
Kr-graphite
$∼$
1000 $K$
3He-H2
$∼$
10 $K$
H-4He
$∼$
1 $K$
Cs-4He
$∼$
1 $.$ 5 $K$
Once the atom sticks to the surface, it thermalizes with the solid, and
remains stuck to the surface for some characteristic resonance time $τR$ . To
find this resonance time, we will consider the condition for equilibrium: the
number of atoms attaching to the surface must equal the number of atoms
leaving.
If the sticking probability is s, the atomic density is $n$ , and the average
atomic velocity is  ̄ $v$ , the flux onto the surface Φ = (1 $/$ 4) $n$  ̄ $vs$ must match
the rate at which atoms leave the surface $σ/τR$ , where $σ$ is the areal density.
Assuming that the gas and surface are in thermal equilibrium, their chemical
potentials must be equal, and
$σ$
(11.11)
$n$ = $λDBeEB/$ ( $kBT$ ) $,$
where $λDB$ is the DeBroglie wavelength of the atom, $EB$ is the binding
energy to the surface, and $T$ is the temperature of the surface. Substituting
this value for $σ$ , we find the resonance time
$τR$ = 4 $λDB$
$eEB/$ ( $kBT$ ) $.$
(11.12)
 ̄ $vs$
The resonance time is exponentially sensitive to the binding energy, so only
those atom-solid pairs with binding energies smaller than or close to the
temperature will have reasonably small resonance times. As the temperature
of the wall is lowered beneath the binding energy, $τR$ grows. Eventually the
<!-- page 240 -->
atoms begin to pile up on top of the surface, which dramatically changes its
properties. If $L$ is the distance between atoms, in units of the atom diameter
$d$ , then pile-up occurs at temperatures low enough that $L <$ 1.
$T$
$σ$ ( $cm$ ) $−$ 2
$L$ ( $d$ )
10 $K$
1011
$>$ 100
1 $K$
3 1013
2 $−$ 20
0 $.$ 1 $K$
2 1016
$<$ 1
At high areal densities, chemically active atoms will begin to react with
each other, forming molecules which are then permanently lost from the
ensemble of chemically metastable atoms.
If the atoms are not reactive, the material will collect in multiple mono-
layers, and the atom density in the gas phase will be in thermal equilibrium
with the solid phase. The density of gaseous non-reactive atoms is then
simply the vapor pressure of the atomic species at the temperature of the
surface. This observation explains why vacuum chambers attain much lower
pressures after bakeout. Bakeout produces a low ”effective vapor pressure”
because the binding energy of the surface becomes visible to other atoms
impinging on the chamber walls, so they will stick regardless of the vapor
pressure at the chamber temperature.
In principle, it should be possible to use cold chamber walls to cool
atoms, provided that the resonance time is reasonably short at the desired
temperature. In practice, however, there are hardly any species (H on He is
one example) which can be cooled to useful temperatures $∼$ 1 $K$ , and only a
few special pairs which can be cooled below $∼$ 100 $K$ . Consequently, surface
cooling techniques have only ever been employed for the hydrogen atom.
11.3.2
Trap depths
In order to trap an atomic ensemble, the atoms must be sufficiently cold
that they cannot climb up the potential barrier forming the atomic trap.
How cold must they be? The depth of a trap can be expressed in terms of
the highest temperature atoms it can confine, and typical trap depths are
given in Table 11.3.
<!-- page 241 -->
Trap type
Lab field strengths
Trap depth for atoms
Trap depth for molecules
Magnetic
0 $.$ 1 $−$ 4 $T$
60mK $−$ 15K
60mK-10K
Electric
1-100MV/cm
1 $μ$ K-1mK
1 $μ$ K-1K
Gravitational
980cm/s2
0.1 mK/m-10mK/m
0.1 mK/m-10mK/m
11.3.3
Initial Cooling
A variety of methods may be employed to cool the atoms below the trap
depth.
From Table 11.3, one can see that it is indeed possible to cool
hydrogen using a cold He surface to $∼$ 1K and capture it directly in a
magnetic trap. This method, however, is inapplicable to just about every
other atom. Consequently, most experiments which trap cold atoms use a
laser cooling stage prior to switching on the trap.
Laser cooling
We have considered in detail the mechanisms behind Doppler and sub-Doppler
cooling. Experimentally, these are usually implemented in order:
first a combination of Doppler cooling techniques is used to capture atoms
in a magneto-optical trap, then the magnetic trap is switched off to en-
able polarization gradient cooling. Using these techniques, atom densities
of $∼$ 1011cm $−$ 3 and temperatures $∼$ 50 $μ$ K can be achieved in typical alkali
atoms. Nevertheless, to reach Bose condensation, the phase space density
must still be increased by many orders of magnitude. Further cooling is
done by transferring the atoms to a trap without any resonant light fields,
for example a magnetic trap or a far-off-resonant optical dipole force trap.
Buffer gas cooling
Laser cooling has its limitations, since it only works well for atoms with a
cycling transition (and doesn’t work for molecules), and can only produce
cold clouds of at most $∼$ 1010 atoms. For every other species of atom and
molecule, one can actually use a slightly different type of surface cooling.
We have seen that typically an atom will bind to a cold surface for very long
times. Nevertheless, if the chamber contains sufficient cold buffer gas, the
atom can be cooled to the temperature of the buffer gas before it reaches the
<!-- page 242 -->
walls of the chamber. Experimentally, this temperature is set by the required
vapor pressure. For example, a helium buffer gas can cool atoms from 1000K
to $∼$ 1 $K$ while maintaining sufficient vapor pressure that the atomic mean
free path is much less than a typical chamber size. Once the atoms have
been cooled, the buffer gas can be pumped away, and the atoms can be
thermally isolated from the chamber walls by trapping them magnetically.
We note in passing that there also exist pulsed cooling mechanisms, which
slow a pulse of atoms or molecules by timing a series of electrodes so that
the pulse is always travelling up a potential gradient.
11.3.4
Optical and Magnetic traps
The final cooling step must be done in a trap which does not excite atomic
transitions. One possible solution uses the atomic dipole force to confine the
atoms to the focus of a red-detuned laser beam. Experimentally, a powerful
CO2 laser is often employed for this task, as its wavelength $∼$ 10 $μ$ m is far
detuned from most optical transitions.
Magnetic traps use the magnetic dipole interaction to confine atoms
with nonzero angular momentum.
Quantum mechanically, the energy of
an atomic state with magnetic quantum number $mF$ along the axis of a
magnetic field $Bz$ is given by
$H$ = $gF μBmF Bz.$
(11.13)
<!-- page 243 -->
Since Maxwell’s equations forbid static magnetic field maxima, this dipole
force can only be employed for weak-field-seeking states.
In order for atoms to remain confined by a magnetic trap, their spin
must adiabatically follow the magnetic field direction as they move around
the trap. Provided that the angle $θ$ of the magnetic field changes sufficiently
slowly that
$dθ$
= $ω$ Larmor $,$
(11.14)
$dt ≪μBBz$
$ħ$
the atoms will remain in the weak-field seeking state. If the angle of the
magnetic field changes too quickly, spin flips (or “Majorana flops”) will
result, ejecting the atom from the trapped state.
The simplest magnetic trap one might imagine is a quadrupole trap, in
which anti-Helmholtz coils create a magnetic field minimum at their center.
The magnetic field in each direction $i$ = $x, y, z$ is linear: $Bi$ =  ̃ $Bixi$ , with
$P |$  ̃ $Bi|$ = 0. However, such a trap has a vanishing magnetic field at its center,
for which the adiabatic following criterion cannot be satisfied. Consequently
this trap acts as if it had a hole in the center! By changing the location
of the magnetic field zero with time, the hole in the quadrupole trap can
be plugged. The time-orbiting potential (TOP) trap uses a time-averaged
quadrupole field to simulate harmonic confinement for the atoms.
Alternately, one can build a magnetic trap with a nonzero magnetic field
minimum by combining a two-dimensional quadrupole trap with Helmholtz
coils to provide axial confinement. This so-called “Ioffe-Pritchard” trap is
named after the researchers who first employed it to confine plasmas and
atoms, respectively.
Near the center of the trap the potential is nearly
harmonic, with a magnetic field given by
$$
$$
$$
$$
$$
$$
0
$x$
$−xz$
B = $B$ 0
$$
0
$$ + $B$ 1
$$
$−y$
$$ + $B$ 2
$$
$−yz$
$.$
(11.15)
2
$ $
1
0
$z$ 2 $−$ 1
$x$ 2 + $y$ 2 $$
2
11.3.5
Evaporative cooling
Once atoms are confined within a trap, further cooling techniques can be
applied to them. Evaporative cooling has provided the most effective method
for reaching ultracold temperatures, and the only technique for creating
quantum degenerate gases.
The physical mechanism behind evaporative
cooling is very simple: those atoms which ”boil off” the top of the trap must
have more energy than the atoms remaining behind. Once the remaining
atoms re-thermalize, their temperature should go down.
<!-- page 244 -->
History
Evaporative cooling was invented by Harald Hess in the 1980s while work-
ing in the groups of Tom Greytak and Dan Kleppner. The method was
first demonstrated and developed using atomic hydrogen. Around five years
later, it was applied to the alkali metals, and eventually became the standard
method for production of quantum degenerate matter.
Idealized evaporative cooling
In a perfect world where evaporation was the only process affecting the
trapped atoms, evaporative cooling could be used to cool atoms to indefi-
nitely low temperatures simply by waiting long enough. However, the rate
of cooling would decrease with time, so a more effective cooling mechanism
would slowly lower the potential barrier of the atom trap, so that the cooling
rate remains reasonably large (see Figure 11.4).
Alternatively, one can resonantly excite atoms into an untrapped, thus
selecting the hottest atoms to be removed from the trap. By slowly chang-
ing the resonance energy, one can start off ejecting the hottest atoms from
<!-- page 245 -->
the trap, and cut out successively colder and colder atoms until the desired
temperature is reached. Typically this technique is accomplished using RF
coupling between hyperfine levels of the atom. In a magnetic trap, only
weak-field seeking states will be trapped, so resonant excitation of strong-
field seeking states can be used to selectively remove certain atoms. Al-
though all of the atoms have the same hyperfine structure regardless of
their kinetic energy, the magnetic trap induces spatially dependent Zeeman
splittings. Consequently this so-called “RF knife” can be used to cut out
atoms on the edges of the trap, and a slow change in the RF frequency can
sweep the knife closer to the trap center where the colder atoms remain.
Competing processes
Evaporative cooling is not the only process affecting trapped atoms. Three-
body recombination, inelastic scattering, and collisions with background
gas conspire to limit the lifetime of trapped atoms.
Evaporative cooling
must therefore be performed quickly enough that the atoms remain in the
trap throughout the process, but slowly enough that they have time to
rethermalize after the hot atoms have been ejected.
Three-body recombination
Nearly every atom used in trapping experiments is in a metastable state.
Given sufficient time, the alkali atoms will form molecules and eventually
<!-- page 246 -->
metal crystals, and the noble gases are typically trapped in a metastable
hyperfine state. On first sight, this observation is very worrisome, since it
means we are trapping an inherently unstable object. There is, however,
a loophole: In order to relax to their ground (molecular) state, two atoms
require a third body to take away the excess energy and momentum. If the
atom densities are sufficiently low, the probability for three atoms to interact
simultaneously can be quite small. Nevertheless, these considerations limit
usable atomic densities to $∼$ 1015cm $−$ 3.
Inelastic collisions
A magnetic trap only confines certain spin species, so any collision process
which flips the spin of an atom will lead to loss. These so-called “dipolar” or
“inelastic” processes require only two atoms. Luckily, for the alkali metals,
two-body processes do not present much of a problem at low temperatures.
Background gas
Finally, atoms can be lost from the trap due to collisions with background
gas in the vacuum chamber.
Any material adsorbed on the walls of the
chamber can evaporate and knock atoms out of the trap. The alkali atoms
are very sensitive to these processes, and as a result ultra-high vacuum $∼$
10 $−$ 11 $−$ 10 $−$ 12 torr is required for successful evaporative cooling to quantum
degeneracy.
11.3.6
The theory of evaporative cooling
To quantitatively examine how evaporative cooling works, we will assume
a specific model for a magnetic trap, and account for two-body inelastic
processes. If the magnetic trap is built from anti-Helmholtz coils, near the
center we can approximate the trap as a spherical linear potential
$B$ ( $ρ$ ) = $B$ 0
$ρ,$
(11.16)
$ρ$ 0
where $ρ$ is the distance from the center of the trap, $ρ$ 0 is the size of the trap,
and $B$ 0 is the maximum field of the trap. If the atom density at the center
of the trap is $n$ 0, the density distribution in thermal equilibrium is
$n$ ( $ρ$ ) = $n$ 0 $e−μ|B$ ( $ρ$ ) $|/kBT ,$
(11.17)
<!-- page 247 -->
where $μ$ is the magnetic moment of the trapped atom. The total number of
atoms in the trap is thus
$Z$
$N$
=
$d$ 3r $n$ 0 $e−μ|B$ ( $ρ$ ) $|/kBT$
(11.18)
$η$
$Z ρ$ 0
$z$
$}|$
${$
( $μB$ 0 $/kBT$ )( $ρ/ρ$ 0)
=
$dρ$ 4 $πρ$ 2 $n$ 0 $e−$
(11.19)
0
$Z ∞$
4 $πρ$ 3
0
$≈$
$duu$ 2 $e−u$
(11.20)
$η$ 3 $n$ 0
0
0
1
=
6 4 $πρ$ 3
(11.21)
3
$η$ 3 $,$
$| {z }$
$V$ 0
where we have set the upper limit of the integral to $∞$ rather than $ρ$ 0 because
the density of atoms near the edge of the trap is negligibly small when $η >$ 5.
The quantity $V$ 0 represents the geometric volume of the trap, while $η$ 3 is a
compression factor for the density referenced to the density at the bottom
of the trap.
Including two-body processes
Two-body losses must happen at a rate proportional to the square of the
atomic density,
 ̇ $n$ = $−ginn$ 2 $,$
(11.22)
where $gin$ is a rate constant for inelastic processes. In principle $gin$ could
depend on the magnetic field, temperature and so on, but for purposes of
our discussion we shall assume it to be constant. The total loss rate from
the trap due to dipolar relaxation is
$Z$
 ̇ $Nd$
=
$−$
$d$ 3r $ginn$ 2
(11.23)
0 $e−$ 2 $ηρ/ρ$ 0
$Z ρ$ 0
=
$−gin$ 4 $πn$ 2
0
$ρ$ 2 $dρe−$ 2 $ρη/ρ$ 0
(11.24)
0
$ρ$ 3
0
=
$−gin$ 4 $πn$ 2
0
(11.25)
4 $η$ 3
$V$ 0
=
$−$ 6 $ginn$ 2
0
(11.26)
$η$ 3 $·$ 1
8 $.$
Note that a factor of 1 $/$ 8 (relative to Eq. (11.21)) appears in this expression
because of the nonlinear dependence on density.
<!-- page 248 -->
Evaporation itself
The basic idea behind evaporation is that the atoms at the edge of the trap
leave the system and stick to the chamber walls. The flux of atoms hitting
the chamber walls is thus approximately
1
Φ
=
(11.27)
4 $n$  ̄ $vs$
1
=
(11.28)
4 $n$ 0 $e−μB$ 0 $/$ ( $kBT$ ) ̄ $vs,$
where  ̄ $v$ is the average atomic velocity at the edge of the trap and s is the
sticking probability.
We must also account for the thermalization rate Γ of the remaining
atoms, which is governed by the rate of elastic collisions $σel$ within the atom
cloud
Γ $∝n$ 2
0 ̄ $vσel.$
(11.29)
The rate at which atoms evaporate from the cloud is then set by the rate at
which thermalization can refill the pool of hot atoms (which subsequently
evaporate). The evaporation rate is approximately
 ̇ $Nv$ = $−n$ 2
(11.30)
0 ̄ $vσele−ηV$ 0 $η∼$ 1 $.$ 5 $.$
An important dimensionless quantity is the ratio of the evaporative loss to
the inelastic loss,
 ̇ $Nv$
$≈e−ηη$ 4 $.$ 5 $gel$
$.$
(11.31)
 ̇ $Nd$
$gin$
To assemble a full model, we must now consider the average energy of
atoms lost by the trap. The initial average energy is
 ̄ $E$ =  ̄ $K$ +  ̄ $U$ = 9
(11.32)
2 $kBT$
Evaporating atoms will typically have an energy of order the trap threshold
energy plus the thermal energy, or
$Ev$ =  ̄ $K$ +  ̄ $Uv ∼Eth$ + (3 $/$ 2) $kBT,$
(11.33)
while atoms lost due to inelastic collisions will have
$Ed$ =  ̄ $K$ +  ̄ $Ud ∼$ 6 $/$ 2 $kBT.$
(11.34)
Clearly, atoms lost to dipolar relaxation act to heat rather than cool the
sample, and in steady state one expects that the dipolar heating rate should
<!-- page 249 -->
 ̇ $Nv$
match the evaporative cooling rate, or
 ̇ $Nd ∼$ 1. The ratio of the elastic to
inelastic scattering rate therefore becomes crucially important to the success
of evaporative cooling. In many systems, most notably the alkali metals, a
favorable ratio $gin ≪gel$ makes evaporative cooling to quantum degeneracy
possible.
11.3.7
Probing atomic ensembles
The spatial and momentum distribution of cold atomic ensembles can be
probed using near-resonant laser light.
By imaging the shadow that the
atom cloud leaves in a resonant laser beam, one can measure the temperature
and number of atoms without having to collect fluorescence photons.
The atom cloud affects the incident laser beam via its complex index of
refraction,
$r$
$n$
=
1 + 4 $πN$
(11.35)
$V α,$
where $α$ is the polarizability of the atom. Typically, one either measures
the real (refractive) or imaginary (absorptive) parts of the refractive index,
with the latter measurement more common.
Absorptive imaging measures the spatially dependent transmission coef-
ficient for the atomic ensemble,
$t$ = $e−d/$ 2
(11.36)
which scales as the exponential of the optical depth $d$ ,
$d$ = $ncσ$ 0
(11.37)
1 + $δ$ 2 $,$
$R N$
where $nc$ =
$V dz$ is the column density integrated over the line of sight,
$σ$ 0 is the cross-section, and $δ$ = ( $ω −ω$ 0) $/$ (Γ $/$ 2) is the normalized detuning.
Absorptive imaging is typically done on resonance, where there are no re-
fractive effects to distort the image. One problem with absorptive imaging
is that the optical depth of a Bose condensate is huge, of order $d ∼$ 300,
so a trapped condensate will completely absorb resonant light.
Instead,
time-of-flight imaging is used. The atom cloud is released from the trap
and allowed to expand and fall. After a few milliseconds, the atom cloud
has mapped its initial velocity (or momentum) distribution onto the posi-
tion of the particles, allowing absorption imaging of the in-trap momentum
<!-- page 250 -->
distribution. The shape of this momentum distribution allows one to dis-
tinguish the parabolic condensate from the gaussian thermal component of
the atomic cloud.
Off-resonant imaging can be accomplished by measuring the phase
$φ$ = $−δd$
(11.38)
2 $,$
that the atom cloud imprints on the laser beam by interfering the image
with a reference beam (or, in practice, putting an appropriate phase plate
in the beam path). Since the laser is not resonant with the atom cloud, such
imaging can be done in trap; furthermore, very few atoms are excited by
the laser, so “phase-contrast imaging” can be used to take multiple images
of a single condensate.
These imaging techniques provide a quantitative measurement of the
atomic distribution. Recently, it has even been shown that such pictures
can be shot noise limited, with noise set by the finite number of atoms
contributing to each camera pixel.

<!-- captions -->
11.2: Figure 11.2: Buffer gas cooling can be used to prepare any atom or molecule near 1K, sufficiently cold to trap nearly all paramagnetic atoms and molecules.
11.3: Figure 11.3: Evaporative cooling. Only the hottest atoms have enough energy to escape the confining potential of the trap and stick to the walls. When the remaining atoms rethermalize, they attain a lower temperature. By lowering the trap potential, successively colder temperatures can be reached without a significant slowdown in the cooling rate.
11.4: Figure 11.4: One can envision the RF knife as a Landau-Zener process, in which the frequency of the RF field sets the location of the avoided crossing and the magnitude of the RF field sets its width. The RF knife thus effectively acts to limit the trap depth.

<!-- footnotes -->


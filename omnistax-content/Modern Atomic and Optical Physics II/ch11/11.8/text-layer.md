<!-- page 284 -->
11.8
Cold atoms in an optical lattice
Before we discuss recent experimental advances in studying cold atoms in an
optical lattice, we will begin by formulating a general theoretical framework
for analyzing indistinguishable atoms in a periodic potential. Our system of
$N$ atoms at positions ${xi}$ is governed by a general Hamiltonian including
two-particle interactions,
$N$
$ p$ 2
$$
$X$
$X$
1
ˆ $H$ =
$i$
+
(11.177)
2 $m$ + $V$ ( $xi$ )
2 $U$ ( $xi −xj$ ) $,$
$i$ =1
$j̸$ = $i$
where for sufficiently cold atoms the interaction potential may be replaced
by the s-wave pseudopotential,
$U$ ( $xi −xj$ ) = 4 $πħ$ 2 $as$
$δ$ ( $xi −xj$ ) $.$
(11.178)
$m$
In the language of second quantization, where ˆ $ψ†$ (r) creates a boson or
fermion at position r, the Hamiltonian may be written
$Z$
$ p$ 2
$$
ˆ $H$
=
ˆ $ψ†$ (r)
ˆ $ψ$ (r) $d$ 3r
2 $m$ + $V$ ( $x$ )
$Z$
4 $πħ$ 2 $as$
+1
ˆ $ψ†$ (r) ˆ $ψ†$ (r) ˆ $ψ$ (r) ˆ $ψ$ (r) $d$ 3r $.$
(11.179)
2
$m$
For bosons, the field operators obey commutation relations
[ ˆ $ψ$ (r) $,$ ˆ $ψ†$ (r $′$ )] = $δ$ (r $−$ r $′$ )
(11.180)
(11.181)
<!-- page 285 -->
whereas for fermions they obey anticommutation relations
${$ ˆ $ψ$ (r) $,$ ˆ $ψ†$ (r $′$ ) $}$ = $δ$ (r $−$ r $′$ ) $.$
(11.182)
Our previous analysis of Bose condensates replaced the operator ˆ $ψ$ by
a c-number representing the macroscopic wavefunction of the condensate.
This analysis was valid provided that the interactions were not too strong,
i.e. the first term in the Hamiltonian dominated over the second. In an
optical lattice, however, this hierarchy need not be obeyed, and we will need
to go beyond the Gross-Pitaevskii equation to understand how the system
behaves.
11.8.1
Atoms in a periodic potential
Atoms confined to an optical lattice will experience a potential $V$ (r) which
is periodic. Under the assumption of a strong periodic potential, we can
find an approximate form for the Hamiltonian Eq. 11.179 which gives us a
simpler formalism and greater physical intuition for the system.
First, we simplify the periodic potential itself. If the antinodes of the
lattice occur at positions ${$ r $i}$ , then we can write the potential as
$X$
$V$ (r) =
 ̃ $V$ (r $−$ $ri$) $.$
(11.183)
$i$
Near the intensity maxima (or potential energy minima), the atomic mo-
tion will approach that of a harmonic oscillator, so we can approximate the
potential by
 ̃ $V$ (r $−$ $ri$) = $V$ 0 $K$ 2
(11.184)
$L$ (r $−$ $ri$)2 $.$
Each lattice site is a harmonic potential with a characteristic frequency
$r$
$r$
2 $V$ 0 $K$ 2
4 $V$ 0 $ER$
$L$
$νT$ =
=
$,$
(11.185)
$m$
$ħ$ 2
$L$
where $ER$ = $ħ$ 2 $K$ 2
is the recoil energy of the lattice. For sufficiently large
2 $m$
trap depths $V$ 0 $≫ER$ , the atoms will be localized near the potential minima
(this condition is analogous to the Lamb-Dicke limit for ion traps). Each
site will have a set of harmonic oscillator wavefunctions $φn$ (r $−$ r $i$ ) associated
with it, and for sufficiently strong potentials $V$ 0 $≫ER$ there will be very little
overlap between wavefunctions in different wells. Finally, for sufficiently cold
atoms only the ground state $φ$ 0 will be occupied.
<!-- page 286 -->
If there were no interactions between the lattice sites, then the atomic
wavefunction could be expanded in terms of an orthonormal set of harmonic
oscillator wavefunctions on each site, $φn$ (r $−$ r $i$ ). Much as we saw in the case
of the double-well potential, a tunnelling term will hybridize the harmonic
oscillator levels, producing Bloch bands with a width given by the tunnelling
strength and a separation given by the harmonic oscillator energy levels.
To derive the Bloch bands for atoms in a periodic potential, we will
express the field operator as a sum over localized states
$X$
ˆ $ψ$ =
ˆ $biW$ (r $−$ r $i$ ) $,$
(11.186)
$i$
where ˆ $bi$ annihilates a particle at the $ith$ site, and satisfies
[ˆ $bi,$ ˆ $bj$ ] = $δij$
(bosons)
(11.187)
${$ ˆ $bi,$ ˆ $bj}$ = $δij$
(fermions) $.$
(11.188)
Strictly speaking, the expansion in terms of Wannier functions $W$ requires
that they be orthogonal to one another. For our purposes, however, it will
be a good approximation to replace the Wannier functions by the harmonic
oscillator ground state at site r $i$ ,
$X$
ˆ $ψ ≈$
ˆ $biφ$ (r $−$ r $i$ ) $.$
(11.189)
$i$
Taking this as a trial wavefunction and substituting it into the Hamiltonian
yields
$Z$
$ p$ 2
$$
$X$
$H$
=
ˆ $b†$
$φ∗$ (r $−$ r $i$ )
$φ$ (r $−$ r $j$ ) $d$ 3r
$i$ ˆ $bj$
2 $m$ + $V$ (r)
$i,j$
$Z$
4 $πħ$ 2 $as$
$X$
+1
ˆ $b†$
$i$ ˆ $b†$
$j$ ˆ $bk$ ˆ $blφ∗$ (r $−$ r $i$ ) $φ∗$ (r $−$ r $j$ ) $φ$ (r $−$ r $k$ ) $φ$ (r $−$ r $l$ ) $d$ 3r $.$
2
$m$
$i,j,k,l$
Since the overlap between wavefunctions at different sites is very small, we
can calculate the Hamiltonian to leading order in this small parameter.
The leading order for the interaction term occurs for $i$ = $j$ = $k$ = $l$ ,
which means that we are only accounting for interactions between particles
localized to the same site. This so-called “on-site” interaction term is
$Z$
1
4 $πħ$ 2 $as$
$X$
ˆ $H$ int
=
$|φ$ (r $−$ r $i$ ) $|$ 4 $·$ ˆ $b†$
$i$ ˆ $b†$
$i$ ˆ $bi$ ˆ $bi$
2
$m$
$i$
$U$ 0
$X$
=
ˆ $ni$ (ˆ $ni −$ 1) $.$
(11.190)
2
$i$
<!-- page 287 -->
The strength of the onsite interaction is approximately given by the inter-
action energy associated with having two atoms confined to a volume the
size of the harmonic oscillator ground state,
$U$ 0 $∼$ 4 $πasħ$ 2
$.$
(11.191)
$ma$ 3
$HO$
This calculation gives us a simple and physical form for the interaction term
in the Hamiltonian Eq. 11.179.
There are both diagonal (involving only a single site $i$ ) and off-diagonal
(involving two sites $i$ and $j$ ) contributions to the kinetic energy term. The
lattice site potential leads to a harmonic oscillator energy associated with
the $ith$ site occupation, and any additional external potential $V$ trap(r) will
add to the energy of that site. In addition, we will need to keep track of
the lowest order overlap integrals. These occur for nearest-neighbor terms
where $i$ = $j ±$ 1, so that the kinetic energy term becomes
$$
$$
$X$
ˆ $H$ kin
=
$V$ trap(r $i$ ) + $ħνT$
ˆ $b†$
$i$ ˆ $bi$
2
$i$
$$
$Z$
$$
$X$
$−$
$V$ 0
$φ∗$ (r $−$ r $i$ ) $φ$ (r $−$ r $j$ ) $d$ 3r
ˆ $b†$
(11.192)
$i$ ˆ $bj$
$<i,j>$
$X$
$X$
=
$εi$ ˆ $b†$
$ti,j$ ˆ $b†$
(11.193)
$i$ ˆ $bi −$
$i$ ˆ $bj,$
$i$
$<i,j>$
where $< i, j >$ denotes a sum over all nearest neighbors. The first term is the
energy associated with having a particle on lattice site $i$ , whereas the second
term allows atoms to hop from one lattice site to a nearest-neighbor site at
a rate $t$ . Note that the sign of the hopping term is negative. This occurs
because the actual potential for any given lattice site is reduced from its
bare value by the potentials for nearby lattice sites. Treating this difference
in energy in perturbation theory allows tunnelling and reduces the overall
energy of the system.
Putting the kinetic energy and interaction terms together yields a simple
form for the Hamiltonian in terms of creation and annihilation operators for
atoms on each lattice site:
$X$
$X$
$X$
ˆ $H$ =
$εi$ ˆ $b†$
$ti,j$ ˆ $b†$
ˆ $ni$ (ˆ $ni −$ 1) $.$
(11.194)
$i$ ˆ $bi −$
$i$ ˆ $bj$ + $U$ 0
2
$i$
$<i,j>$
$i$
This Hamiltonian is known as the “Hubbard model,” and has been exten-
sively studied in the context of condensed-matter physics.
<!-- page 288 -->
11.8.2
The physics of the Bose-Hubbard model
By loading an Bose condensate into an optical lattice, one can create a
physical implementation of the Bose-Hubbard model where the parameters
$U$ and $t$ can be experimentally adjusted by changing the atomic scattering
length or lattice depth respectively. As we shall see, changing the relative
size of these parameters results in qualitative changes in the ground state of
the system. To elucidate this transition, we will consider the two limiting
cases: $t ≫U$ 0 and $U$ 0 $≫t$ .
The weak lattice: $t ≫U$ 0
When the laser beams forming the optical lattice are weak, the condensate
state is dominated by the hopping term in the Bose-Hubbard Hamiltonian,
$X$
ˆ $H$ kin = $−t$
ˆ $b†$
(11.195)
$i$ ˆ $bj,$
$<ij>$
and the effect of the interaction term is negligible. This kinetic part of the
Hamiltonian can be easily diagonalized by defining annihilation operators
in momentum space,
1
$X$
ˆ $b$ k =
$√$
$e−i$ k $·$ $xiˆ$ $bi$
(11.196)
$N$
$i$
1
$X$
ˆ $bi$ =
$√$
$ei$ k $·$ $xiˆ$ $b$ k
(11.197)
$N$
k
where $N$ is the total number of sites in the lattice. For example, in one
dimension the Hamiltonian would take the form
$X$
$X$
ˆ $H$ kin
=
$−t$
ˆ $b†$
$eiqxi−$ 1 + $eiqxi$ +1 $$
(11.198)
$k$ ˆ $bqe−ikxi  $
$N$
$i$
$k,q$
$X$
=
$−$ 2 $t$
ˆ $b†$
(11.199)
$k$ ˆ $bk$ cos 2 $ka,$
$k$
where $a$ is the spacing between lattice sites. The ground state of the Hamil-
tonian is clearly obtained by putting all of the atoms into the $k$ = 0 state:
$$
$N$
1
$|ψ$ 0 $⟩$
=
$√$
ˆ $b†$
$|$ vac $⟩$
(11.200)
$k$ =0
$N$ !
$!N$
1
1
$X$
=
$√$
$√$
ˆ $b†$
$|$ vac $⟩.$
(11.201)
$i$
$N$ !
$N$
$i$
<!-- page 289 -->
As was the case for the double-well potential, the coherence between neigh-
boring lattice sites is finite, and in the limit of large $N$ the ground state
approaches a coherent state. This state exhibits superfluidity because the
atoms can freely tunnel between lattice sites. However, since the relative
phase between lattice sites is well defined, the atom number fluctuates.
The strong lattice: $t ≪U$ 0
In the opposite limit of a strong optical lattice, atomic hopping between
lattice sites is very weak and the Hamiltonian is dominated by the interaction
term
$X$
ˆ $H$ int = $U$ 0
ˆ $ni$ (ˆ $ni −$ 1) $.$
(11.202)
2
$i$
When the lattice is perfectly occupied, i.e. $N$ atoms occupy $N$ lattice sites,
the lowest energy eigenstate of the system must have one atom in each lattice
site:
$Y$
$|ψ$ 0 $⟩$ =
ˆ $b†$
(11.203)
$i|$ vac $⟩$
$i$
To lowest order in perturbation theory, the effect of hopping is an overall
energy shift arising from virtual processes. This so-called “exchange energy”
reduces the overall energy of each atom by ∆ $E$ = $−$ 2 $t$ 2 $/U$ 0, but does not
affect the ground state of the system. This ground state is known as a “Mott
insulator” because there is no movement of atoms around the lattice; they
are frozen in place. Unlike the $k$ = 0 ground state in the weak lattice, the
number of particles in each lattice site is well defined, so the phase between
them is not.
The Mott insulator to superfluid transition
The ground state of the strong lattice, the Mott insulator, is qualitatively dif-
ferent from the ground state of the weak lattice, the superfluid. By changing
the parameter $t/U$ 0, it is possible to move between these two limits, effecting
a phase transition of the system. This phase transition can happen even at
$T$ = 0 because the state change is driven by quantum (rather than thermal)
fluctuations, so it is known as a “quantum phase transition.”
In order to analyze this phase transition, we will make a number of as-
sumptions. First, we will assume that we are working with a homogeneous
<!-- page 290 -->
system, thus disregarding the effect of a harmonic confining potential. Sec-
ond, we will assume “commensurate” filling
$ν$ = $N$ atoms
= 1 $.$
(11.204)
$N$ sites
Note that with incommensurate filling $ν̸$ = integer, strictly speaking there is
no phase transition, since the extra atoms or holes will delocalize to minimize
their kinetic energy. Finally, we will use a mean-field approach in which we
assume that the state vector is factorizable into a product of lattice site
states,
$Y$
$|ψ$ 0 $⟩$
=
$|φ⟩i$
(11.205)
$i$
$!$
$∞$
$Y$
$X$
(ˆ $b†$
$i$ ) $n$
=
$cn$
$√$
$|$ vac $⟩$
$n$ !
$i$
$n$ =0
$!$
$∞$
$Y$
$X$
=
$cn|ni⟩$
$.$
$i$
$n$ =0
This assumption is not quite valid, since the superfluid ground state is not
quite a product of coherent states, but it will provide a useful qualitative
description of the phase transition.
With this ansatz wavefunction, we can identify two limits: in the Mott
insulator state, each site is singly occupied
$|φ⟩$ (MI)
= $|$ 1 $⟩i,$
(11.206)
$i$
whereas in the superfluid limit, each site occupation corresponds to a coher-
ent state
1
$|φ⟩$ (SF)
= $e−$ 1 $/$ 2 $X$
$√$
$|n⟩i,$
(11.207)
$i$
$n$ !
$n$
with mean occupancy $|α|$ 2 = 1. This state, $|φ⟩$ (SF)
corresponds to the Gross-Pitaevskii
$i$
wavefunction, which approaches a superfluid state in the large-N
limit, similar to the situation with the double-well system. To understand
where the phase transition between superfluid and Mott insulator occurs, we
can examine the energies for the two limiting wavefunctions and see which
is lower in energy. In this simple model, the superfluid state has an energy
$E$ SF = $−t · z ·$ 2 + $U$ 0
(11.208)
2 $,$
<!-- page 291 -->
where $z$ is the number of nearest neighbors, whereas the Mott insulator state
has an energy
$E$ MI = $−$ 2 $t$ 2
$.$
(11.209)
$U$ 0
From this simple analysis, we would predict a phase transition to occur when
$t · z ·$ 4 $∼U$ 0 $.$
(11.210)
Although this model captures the qualitative features of the phase tran-
sition, it underestimates the critical ratio $U$ 0 $/$ ( $t · z$ ). A more careful analysis
takes a variational wavefunction which includes both limits as well as a
transition between them, for example
$|φ⟩i$ = sin $θ$
$√$
$√$
(11.211)
2 $|$ 0 $⟩i$ + cos $θ|$ 1 $⟩i$ + sin $θ$
2 $|$ 2 $⟩i.$
This trial wavefunction works well near the phase transition, and gives
$t · z ·$ 5 $∼U$ 0
(11.212)
as the condition for $θ$ = 0 to be the ground state, which compares well to the
exact value of $U$ 0 $/$ ( $t · z$ ) = 5 $.$ 8. For $ν >$ 1, the criticality condition scales as
$U$ 0 $∼t$  ̇ $ν$ , since tunnelling is enhanced when several particles are in a single
site.
We have seen how the ground state of the system changes as we cross
from a superfluid to Mott insulator state. In addition, the excitations of the
system are qualitatively different on either side of the quantum phase tran-
sition. In the superfluid state, the system exhibits a Bogoliubov spectrum of
excitations; in the Mott insulator state, the excitation spectrum is gapped
because it costs an energy ∆ $ε ∼U$ 0 $−t$ to delocalize a single particle. The
vanishing excitation gap is one distinguishing feature of the quantum phase
transition.
In real experiments, our assumption of commensurate filling requires re-
examination. Since there is an overall harmonic trapping potential holding
the atoms in the optical lattice, the center of the trap should hold a higher
density of atoms than the outer edges. In fact, what happens is that in
the Mott insulator phase the density takes on a ”wedding-cake” structure,
with filling factors $ν$ increasing in steps towards the center of the trap, see
Fig. 11.14.
A series of experiments have observed the superfluid to Mott insulator
transition by observing the interference or lack thereof between atoms in
<!-- page 292 -->
different sites of the lattice potential. The superfluid phase has first order
coherence, so as the atoms expand they interfere, producing an interference
pattern which shows the reciprocal lattice of their periodic trapping poten-
tial. The Mott insulator phase, however, has no first order coherence, so no
periodic pattern is visible in the expansion image. By increasing and then
decreasing $U$ 0 $/t$ , experiments have shown that one can reversibly ramp into
and out of the Mott insulator phase, as shown in Fig. 11.15.
<!-- page 293 -->

<!-- captions -->
11.14: Figure 11.14: Experimental realizations of an optical lattice potential always include an additional harmonic confining potential. In a strongly-interacting system, Mott insulator phases with different filling factor $ν$ occur in different portions of the lattice, with a small region of superfluid (non-integer $ν$ ) phase between them.
11.15: Figure 11.15: Experimental observation of the superfluid to Mott insulator transition [taken from Nature 415, 39 without permission]. (a) Expansion images for different values of $t/U$ 0, with the lattice potential ranging from 0 $Er$ (a) to 20 $Er$ (g). The superfluid phase is associated with the reciprocal lattice pattern forming in the expansion image, while the Mott insulator phase shows no first order coherence. (b) Demonstration that the Mott insulator transition is reversible. The lattice depth is ramped well into the Mott insulator phase and then decreased over a time $t$ . For slow ramp times $t$ , the superfluid phase is regained.

<!-- footnotes -->


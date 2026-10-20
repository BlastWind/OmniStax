<!-- page 44 -->
3.1
The density operator
Although the state of a quantum mechanical system is represented by $|ψ⟩$ , a
vector in Hilbert space, this description does not provide a useful picture for
many practical situations, and certainly cannot treat macroscopic objects.
Any quantum mechanical state can also be represented as a density operator;
moreover, the density operator can describe classical ensembles as well.
Suppose our system can be in one of a number of quantum states $|ψα⟩$
and it occupies each state with some probability $pα$ . The density operator
for the system is
$X$
ˆ $ρ$ =
$pα|ψα⟩⟨ψα|.$
(3.1)
$α$
If there exists a basis in which ˆ $ρ$ = $|φ⟩⟨φ|$ for some state $|φ⟩$ , the system is
said to be in a “pure state”. If such a basis cannot be found, the system
is in a “mixed state”, and has lost some of its purely quantum mechanical
character. Finally, if the off-diagonal elements of the density operator vanish,
the system can be described by a classical ensemble of basis states, and is
called a “statistical mixture”.
From this definition, one can immediately derive several important prop-
erties which any density operator must satisfy:
(1) ˆ $ρ$ = ˆ $ρ†$
(2) Tr[ˆ $ρ$ ] = $P$
$n⟨n|$ ˆ $ρ|n⟩$ = 1 where ${|n⟩}$ form an orthonormal basis
(3) $⟨n|$ ˆ $ρ$ 2 $|m⟩≤⟨n|$ ˆ $ρ|m⟩$ where $|m⟩$ and $|n⟩$ are any pure states
The first is self evident, the second follows from conservation of probability,
and the third is an equality only when the density operator describes a pure
state.
Operator expectation values may be calculated directly from the den-
sity operator. If ˆ $S$ is a system observable, its expectation value should be
calculated in all possible quantum states weighted by their probability of
occupation:
$X$
$⟨$ ˆ $S⟩$
=
$pα⟨ψα|$ ˆ $S|ψα⟩$
(3.2)
$α$
$X$
=
$pα⟨ψα|$ ˆ $S|n⟩⟨n|ψα⟩$
(3.3)
$α,n$
$X$
$!$
$X$
=
$⟨n|$
$pα|ψα⟩⟨ψα|$
ˆ $S|n⟩$
(3.4)
$n$
$α$
$|$
${z$
$}$
ˆ $ρ$
=
Tr[ˆ $ρ$ ˆ $S$ ] $.$
(3.5)
<!-- page 45 -->
By inserting a completeness relation $P$
$n |n⟩⟨n|$ = 1 and rearranging terms,
a considerable simplification is obtained.
In this context, the mathematical meaning of the trace may be unclear.
However, given a basis ${|n⟩}$ , we may write the operators ˆ $S$ and ˆ $ρ$ as matri-
ces, whereby their trace is the usual sum of diagonal elements. The so-called
density matrix has elements $ρn,n′$ such that
$X$
ˆ $ρ$ =
$|n⟩⟨n|$ ˆ $ρ|n′⟩$
$⟨n′|.$
(3.6)
$| {z }$
$n,n′$
$ρn,n′$
These elements have a physical meaning, and there are two cases worth
distinguishing:
(1) Diagonal elements $ρnn$ = $⟨$ ( $|n⟩⟨n|$ ) $⟩$ correspond to the probability of
occupying state $|n⟩$ .
(2) Off-diagonal elements $ρnm$ = $⟨n|ρ|m⟩$ = $⟨$ ( $|m⟩⟨n|$ ) $⟩$ correspond to the
expectation value of the coherence between level $|n⟩$ and $|m⟩$ , e.g. the atomic
dipole operator.
For example, the density operator for a two-level atom may be written as a
2x2 matrix,
ˆ $ρ$ = $ρ$ 11 $|$ 1 $⟩⟨$ 1 $|$ + $ρ$ 12 $|$ 1 $⟩⟨$ 2 $|$ + $ρ$ 21 $|$ 2 $⟩⟨$ 1 $|$ + $ρ$ 22 $|$ 2 $⟩⟨$ 2 $|.$
(3.7)
A pure state $|ψ⟩$ = $c$ 1 $|$ 1 $⟩$ + $c$ 2 $|$ 2 $⟩$ then has a density matrix with $ρij$ = $cic∗$
$j$ .
Pure states thus satisfy
$|ρij|$ 2 = $ρiiρjj.$
(3.8)
By considering the requirement $ρ$ 2 $≤ρ$ , we see that an arbitrary mixed state
only satisfies the inequality
$|ρij|$ 2 $≤ρiiρjj.$
(3.9)
Consequently, for a pure state we have the maximal allowed off-diagonal
components, or the “maximal coherence.”
Example 1: Two-level atom in thermal equilibrium
One example of a mixed state is the two-level atom with transition frequency
$ω$ in thermal equilibrium. In the basis ${|$ 1 $⟩, |$ 2 $⟩}$ its density operator takes
the form
$e−$ ˆ $H/kBT$
ˆ $ρ$
=
(3.10)
Tr[ $e−$ ˆ $H/kBT$ ]
<!-- page 46 -->
$$ 1
$$
1
0
=
(3.11)
1 + $e−ħω/kBT$
0
$e−ħω/kBT$
$ eħω/$ 2 $kBT$
$$
1
0
=
$.$
(3.12)
2 cosh $ħω/$ 2 $kBT$
0
$e−ħω/$ 2 $kBT$
Clearly, the equilibrium population depends on the relative scale of the
atomic transition frequency and the temperature. For instance, at room
temperature $T$ = 300 $K$ , $kBT/$ (2 $πħ$ ) $≈$ 6 $·$ 1012 Hz, which corresponds to
a frequency between microwave and near-infrared. If the atomic transition
frequency is well above this scale, the atom will be in its ground state in
equilibrium; otherwise, it will be in a statistical mixture of ground and
excited states.
Example 2: Radiation field in thermal equilibrium
The density matrix for a thermal radiation field illustrates how the density
operator formalism connects up with statistical mechanics. A single mode
with frequency $νj$ has a density operator
$e−ħνj$ ˆ $a†$
$j$ ˆ $aj/kBT$
ˆ $ρ$ ( $j$ ) =
(3.13)
Tr[ $e−ħνj$ ˆ $a†$
$j$ ˆ $aj/kBT$ ]
with matrix elements between Fock states $|n⟩, |m⟩$
ˆ $ρ$ ( $j$ )
$nm$ = $δnme−ħνjn/kBT $
1 $−e−ħνj/kBT $
$.$
(3.14)
Note that only the diagonal elements are nonzero since the field is a statis-
tical mixture of photon number states. Consequently, the expectation value
for the annihilation operator vanishes,
$X$
$X$
$√$
$⟨$ ˆ $aj⟩$ =
$⟨n|$ ˆ $aj$ ˆ $ρ|n⟩$ =
$ρn$ +1 $,n$
$n$ + 1 = 0 $,$
(3.15)
$n$
$n$
but the average photon number obeys the Bose-Einstein distribution,
$X$
1
 ̄ $nj$ = $⟨$ ˆ $a†$
$ρnn$ =
(3.16)
$j$ ˆ $aj⟩$ =
$e$ ( $ħνj/kBT$ ) $−$ 1 $.$
$n$

<!-- captions -->


<!-- footnotes -->


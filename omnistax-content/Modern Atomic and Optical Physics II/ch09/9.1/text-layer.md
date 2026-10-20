<!-- page 169 -->
9.1
Basic properties of quantum fields
We saw earlier that the electric field can be represented in terms of a set of
quantized harmonic oscillator modes,
$r$
$X$
$$
$$
$ħωk$
ˆE =
ˆ $ak,αei$ (k $·$ r $−ωkt$ ) + $h.c.$
$,$
(9.1)
2 $ε$ 0 $V$ ˆ $εα$
$k,α$
where $ωk$ and ˆ $εα$ are the frequency and polarization of the mode ${k, α}$ .
Note that this expression is in the Heisenberg picture, and has the time de-
pendence of the annihilation operators explicitly written out, so ˆ $ak,α$ above
is the time-dependent annihilation operator evaluated at $t$ = 0. The Hamil-
tonian for such a field can also be expressed in terms of the creation and
annihilation operators,
$Z$
$$
$$
1
ˆ $H$
=
$dV$
$ε$ 0 $E$ 2 + $B$ 2
(9.2)
2
$μ$ 0
$$
$$
$X$
=
$ħωk$
ˆ $a†$
$,$
(9.3)
$k,α$ ˆ $ak,α$ + 1
2
$k,α$
<!-- page 170 -->
and its eigenbasis is formed by the number states or “Fock” states ${|nk,α⟩}$
obeying
ˆ $nk,α|nk,α⟩$ = ˆ $a†$
(9.4)
$k,α$ ˆ $ak,α|nk,α⟩$ = $nk,α|nk,α⟩$
where $nk,α$ is the number of photons in the mode ${k, α}$ .
Many properties of quantum fields can be understood by examining the
evolution of a single mode. Such a description is also quantitatively appro-
priate for atoms interacting with the quantum field of a high finesse cavity,
so we will frequently simplify our discussion by considering only a single
mode.
9.1.1
Thermal states
A single mode field in thermal equilibrium with its environment at temper-
ature $T$ can be described by a density operator
$e−$ ˆ $H/kBT$
ˆ $ρ$ =
$.$
(9.5)
Tr[ $e−$ ˆ $H/kBT$ ]
Expressed in the Fock basis, the density matrix is purely diagonal with
elements
$ρnn$ = $e−nħω/kBT ·$ (1 $−e−ħω/kBT$ )
(9.6)
corresponding to the probability to find $n$ photons in the cavity.
The resulting probability distribution for photon number is known as
the “photon distribution” or “photon statistics”. The thermal state is most
likely to have zero photons in it, and the average number
$X$
1
$n$ =
$nρnn$ =
(9.7)
$eħω/kBT −$ 1
$n$
reflects the fact that photons obey Bose-Einstein statistics with $μ$ = 0. The
expectation value of the electric field vanishes
$⟨$ ˆ $E⟩∝⟨$ ˆ $a⟩$ = 0
(9.8)
because the thermal field is incoherent, and thus has an undefined phase.
Note that photon statistics in a multimode thermal field look very differ-
ent than this single mode example. Whereas each mode in a multimode field
would most likely contain no photons, when one sums over all such modes,
the most likely total photon number will be finite and the distribution looks
more like a Poissonian. For example, sunlight corresponds to a multimode
<!-- page 171 -->
thermal field. In order to probe the photon statistics associated with the
thermal nature of sunlight, it is necessary to design an experiment in which
the sunlight acts as if it were a single-mode field. One way to do this would
be to simultaneously filter the sunlight to a bandwidth ∆ $ω$ and observe the
photon arrival times using a detector which is gated for a time much shorter
than 1 $/$ ∆ $ω$ .
9.1.2
Coherent states
To understand the correspondence between our semi-classical description
and the quantum mechanical approach, it is desirable to find a quantum
state which corresponds to the classical coherent field of a laser. The defining
characteristic of the laser field is a well defined, finite expectation value for
the electric field, so we seek a state $|ψ⟩$ satisfying
$⟨ψ|$ ˆ $E|ψ⟩$ = $E.$
(9.9)
We have seen that the thermal state does not have a finite electric field
expectation value, and the Fock states likewise have vanishing electric field.
Motivated by Eq. (9.9), we will consider an eigenstate $|α⟩$ of the photon
annihilation operator,
ˆ $a|α⟩$ = $α|α⟩.$
(9.10)
This so-called “coherent state” in fact corresponds to classical laser light.
As we hoped, the coherent state has a well-defined expectation value for
the electric field
$r$
$$
$$
$ħω$
$⟨α|$ ˆ $E|α⟩$ =
$αei$ (k $·$ r $−iωt$ ) + $c.c.$
$,$
(9.11)
2 $ε$ 0 $V$
and the average number of photons in the coherent state is
$⟨α|$ ˆ $a†$ ˆ $a|α⟩$ = $|α|$ 2 $.$
(9.12)
The quadrature components
In analogy to the position and momentum operators of the simple harmonic
oscillator, we can introduce the quadrature operators
$$
1
ˆ $x$
=
$√$
ˆ $a$ + ˆ $a†$
(9.13)
2
$$
1
ˆ $p$
=
$√$
ˆ $a −$ ˆ $a†$
$.$
(9.14)
$i$
2
<!-- page 172 -->
The uncertainty in these operators,
1
$⟨δx$ 2 $⟩$
=
(9.15)
2
1
$⟨δp$ 2 $⟩$
=
(9.16)
2 $,$
is the “most classical” we could hope for, since the Heisenberg uncertainty
principle limits $δxδp ≥$ 1 $/$ 2 The quadrature operators have a well defined
physical meaning for the electromagnetic field. The electric field operator
given by Eq. (9.1) can be re-written in terms of the two components
ˆ $E ∝$ ˆ $x$ cos $ωt$ + ˆ $p$ sin $ωt.$
(9.17)
For example, if this electric field is mixed with some other field (referred to
as a “local oscillator”)
$ELO ∼$ cos $ωt,$
(9.18)
then ˆ $x$ would yield the“in phase” component while ˆ $p$ gives the “out of phase”
component.
<!-- page 173 -->
The shift operator
Coherent states can be generated from the vacuum state by the “shift op-
erator”
ˆ $D$ ( $α$ ) = $eα$ ˆ $a†−α∗$ ˆ $a,$
(9.19)
which shifts the state in the plane of ˆ $x$ and ˆ $p$ so that ˆ $D$ ( $α$ ) $|$ 0 $⟩$ = $|α⟩$ . Simi-
larly,
ˆ $D−$ 1( $α$ )ˆ $a$ ˆ $D$ ( $α$ ) = ˆ $a$ + $α.$
(9.20)
To prove Eq. 9.19, we will use the fact that if two operators satisfy [ ˆ $A,$ [ ˆ $A,$ ˆ $B$ ]] =
[ ˆ $B,$ [ ˆ $A,$ ˆ $B$ ]] = 0, then
$A$ + ˆ $B$ = $e$
ˆ
$Ae$
ˆ
ˆ $Be−$ [ ˆ
$A,$ ˆ $B$ ] $/$ 2 $.$
$e$
(9.21)
Consequently, when the shift operator acts on the vacuum, it generates a
coherent state:
ˆ $D$ ( $α$ ) $|$ 0 $⟩$
=
$eα$ ˆ $a†−α∗$ ˆ $a|$ 0 $⟩$
(9.22)
=
$e−|α|$ 2 $/$ 2 $eα$ ˆ $a†e−α∗$ ˆ $a|$ 0 $⟩$
(9.23)
$αn$
=
$e−|α|$ 2 $/$ 2 $X$
$√$
$|n⟩$
(9.24)
$n$ !
$n$
=
$|α⟩.$
(9.25)
Photon statistics in a coherent state
The probability to find $n$ photons in a coherent state follows a Poisson
distribution
$ρnn$ = $e−|α|$ 2 $α$ 2 $n$
(9.26)
$n$ !
which has variance equal to its mean
 ̄ $n$
=
$|α|$ 2
(9.27)
$⟨$ ∆ $n$ 2 $⟩$
=
 ̄ $n$ = $|α|$ 2 $.$
(9.28)
$p$
For strong fields, $n ≫$ 1, the standard deviation
$⟨$ ∆ $n$ 2 $⟩$ is much smaller
than the mean, so the intensity becomes better defined as the coherent field
becomes larger.
<!-- page 174 -->
Classical dipole radiation
The coherent state also corresponds to the field produced by a classical
oscillating dipole. To see this, consider the Hamiltonian for such a dipole,
ˆ $H$ = $−d$ ˆ $E$ = $−d$ 0 cos $ωt$ ˆ $E.$
(9.29)
Moving back to the Schrodinger picture, and working in the RWA and the
rotating frame, the Hamiltonian becomes $−$ ( $d$ 0 $E$ 0 $/$ 2)ˆ $a†$ + $h.c.$ , so that after
a time $t$ the time evolution operator acts as the shift operator:
$|ψ⟩$ = $e−i$ ˆ $Ht/ħ|$ 0 $⟩$ = $eα$ ˆ $a−α∗$ ˆ $a†|$ 0 $⟩$
(9.30)
where $α$ = $id$ 0 $E$ 0 $t/$ 2 $ħ$ .
Generalization to multimode fields
These properties of the coherent state show that they do indeed provide a
quantum description of classical laser light. The coherent states, however,
can also be generalized to multimode situations by taking the direct product
of a coherent state in each mode.
$Y$
$|ψ⟩$ =
$|αk⟩.$
(9.31)
$k$
<!-- page 175 -->
The expectation value of the electric field in this multimode state is
$E$ ( $r, t$ )
=
$⟨ψ|$ ˆ $E|ψ⟩$
(9.32)
$r$
$X$
$ħωk$
=
$ei$ (k $·$ r $−iωkt$ ) + $c.c.$
(9.33)
2 $ε$ 0 $V αk$
$k$
$|$
${z$
$}$
$Ek$
where $Ek$ is the Fourier component of the $kth$ mode of the classical field.
Quasi-probability distributions
Whereas the number states formed a basis for the electromagnetic field, the
coherent states form an overcomplete set. We can prove completeness by
showing that the identity operator is proportional to the sum of all coherent
states:
$Z$
$Z$
$X$
$|α⟩⟨α|d$ 2 $α$
=
$e−|α|$ 2 $αmα∗n$
$√$
$|m⟩⟨n|d$ 2 $α.$
(9.34)
$m$ ! $n$ !
$m,n$
Writing $α$ = $|α|eiφ$ ,
$Z$
$Z ∞$
$X$
1
$|α⟩⟨α|d$ 2 $α$
=
$√$
$d|α| e−|α|$ 2 $|α|m$ + $n$ +1 $×$
$m$ ! $n$ !
0
$m,n$
$Z$ 2 $π$
$dφ ei$ ( $m−n$ ) $φ|m⟩⟨n|$
(9.35)
0
$X$
=
$πn$ ! $δm,n|m⟩⟨n|$
(9.36)
$m,n$
$X$
=
$π$
$|n⟩⟨n|.$
(9.37)
$n$
In other words,
$Z$
1 = 1
$d$ 2 $α|α⟩⟨α|.$
(9.38)
$π$
However, using Eq. (9.24), we can directly verify that different coherent
states are not orthogonal,
$|⟨α|β⟩|$ = $e−$ (1 $/$ 2) $|α−β|$ 2 $,$
(9.39)
so they provide an unnecessarily large set of states for describing an arbitrary
field. The coherent state representation of a density operator ˆ $ρ$ nevertheless
remains useful, and we define the quasi-probability distribution $P$ ( $α$ ) by
$Z$
ˆ $ρ$ =
$P$ ( $α$ ) $|α⟩⟨α|d$ 2 $α.$
(9.40)
<!-- page 176 -->
This quasi-probability distribution has some interesting properties. Firstly,
it acts like a probability distribution when you consider the expectation value
of any normally ordered operator ˆ $O$ :
$Z$
$⟨$ ˆ $O⟩$
=
$P$ ( $α$ ) $⟨α|$ ˆ $O|α⟩d$ 2 $α$
(9.41)
$Z$
=
$P$ ( $α$ ) $O$ ( $α$ ) $d$ 2 $α$
(9.42)
Second, it is worth noting that this distribution always exists, and can be
found using the formula
$Z$
$P$ ( $α$ ) = $e|α|$ 2
$⟨−β|ρ|β⟩e|β|$ 2 $e−βα∗$ + $β∗αd$ 2 $β.$
(9.43)
$π$ 2
This relationship can be derived after a bit of algebra by calculating $⟨−β|ρ|β⟩$ (see,
e.g., Scully and Zubairy, p. 76).
The quasi-probability distribution $P$ ( $α$ ) is not a proper probability dis-
tribution because it can take on negative values. In particular, the negative
values are associated with non-classical properties of the electromagnetic
field, and mark a boundary between quantum and classical states.
Linear optical transformations of coherent states
Linear transformations are defined as effects independent of the incident
light power, and a coherent state will remain a coherent state under a linear
transformation. The simplest examples of linear transformations are phase
shifts and beam splitters. As its name might imply, the phase shift only
changes the phase of a coherent state
$E →Eeiφ ⇒$ ˆ $a →$ ˆ $aeiφ.$
(9.44)
A beamsplitter characterized by a transmission amplitude $t$ and reflec-
tion amplitude $r$ transforms two input electric fields $E$ in
1 $, E$ in
1 into two output
electric field1
$E$ out
1
=
$tE$ in
1 + $irE$ in
2
(9.45)
$E$ out
2
=
$tE$ in
2 + $irE$ in
1 $.$
(9.46)
<!-- page 177 -->
Since these are linear relations, the same must hold true for the photon
annihilation operators:
ˆ $a$ out
1
=
$t$ ˆ $a$ in
1 + $ir$ ˆ $a$ in
2
(9.48)
ˆ $a$ out
2
=
$t$ ˆ $a$ in
2 + $ir$ ˆ $a$ in
1 $.$
(9.49)
Suppose that the inputs are $|α$ 1 $⟩|α$ 2 $⟩$ . The resulting output field obeys
ˆ $a$ out
1 $|α$ 1 $⟩|α$ 2 $⟩$ = ( $tα$ in
1 + $irα$ in
2 ) $|α$ 1 $⟩|α$ 2 $⟩,$
(9.50)
which is thus also a coherent state. The bottom line is that linear optical
operations do not change the quantum statistical properties of coherent
states.
Note that the beam splitter transformation can be viewed as resulting
from a coupling of two simple harmonic oscillators, since
$$ ˆ $a$ 1
$$ out
$$ ˆ $a$ 1
$$ in
= ˆ $U$
(9.51)
ˆ $a$ 2
ˆ $a$ 2
where the unitary operator
ˆ $U$ = $eiθ$ ˆ $a$ 1ˆ $a†$
2+ $iθ$ ˆ $a$ 2ˆ $a†$
1
(9.52)
can be written in terms of a parameter $θ$ related to the transmission and
reflection coefficients.

<!-- captions -->
9.1: Figure 9.1: Any coherent state can be represented by an area in ${$ ˆ $x,$ ˆ $p}$ phase space. The distance to the origin is proportional to the absolute value of the coherent state $|α|$ , while the angle is the argument of $α$ . The uncertainty in $√$ the quadrature operators is represented by a circle with a diameter of 2. $ $ $ $ Note that other textbooks choose to define ˆ $x$ = 1 ˆ $a$ + ˆ $a†$ $,$ ˆ $p$ = 1 ˆ $a −$ ˆ $a†$ , $√$ 2 2 $i$ which gets rid of the 2 factors.
9.2: Figure 9.2: The photon number distribution for a coherent state with $|α|$ 2 = 10.

<!-- footnotes -->
Unitarity of this beamsplitter transformation requires that $|r|$ 2 + $|t|$ 2 = 1, which states that there are no losses due to the beamsplitter, and the less trivial relationship $rt^* - r^*t = 0$. This can be derived by letting $U$ and solving $UU^\dagger = 1$.


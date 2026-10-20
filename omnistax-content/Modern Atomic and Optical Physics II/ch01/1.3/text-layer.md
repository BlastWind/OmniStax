<!-- page 10 -->
1.3
Basic Atomic Physics
The physical systems associated with atomic physics include neutral atoms,
ions, and molecules as well as more modern“artificial atoms” such as quan-
tum dots fabricated in semiconductor heterostructures. The structure of
these systems determines their interaction with applied fields, whether they
be electric, magnetic, oscillating, static, classical, or quantum. These inter-
actions allow us to manipulate the system via applied fields, or, conversely,
use matter to control the electromagnetic fields. Such techniques are at the
heart of atomic physics, but to apply them we must understand the physical
structure of the system under consideration.
1.3.1
Example: the hydrogen atom
One of the simplest systems to consider is hydrogen, which consists of one
electron bound by the Coulomb force to a proton. The energy of the system
is given by
ˆ $H$ = ˆ $p$ 2
(1.14)
2 $m −e$ 2
ˆ $r ,$
<!-- page 11 -->
where ˆ $p$ represents the (operator-valued) electronic momentum and ˆ $r$ repre-
sents the distance between the electron and the proton.
The stationary solutions of Schrodinger’s equation for this system are
of two types. There is an infinite set of discrete bound states with energies
$En$ = $−R∞$
$n$ 2 and a continuum set of unbound states with energies $E >$ 0.
The constant $R∞$ is called Rydberg’s constant; while its numerical value can
be found in any textbook on quantum mechanics, it is a good exercize to
know how to derive an expression for it from basic principles.
To estimate the binding energy $R∞$ , we note that in the ground state
Heisenberg’s inequality is approximately obeyed as an equality. In partic-
ular, the uncertainty in momentum ∆ $p$ and the uncertainty in position ∆ $r$
obey ∆ $p ·$ ∆ $r ∼ħ$ . Since the mean value of the momentum must be zero
for a bound state, we can replace $⟨p$ 2 $⟩$ by ∆ $p$ 2 $∼$ ( $ħ/$ ∆ $r$ )2 in the Hamilto-
nian. Similarly, the average distance $⟨r⟩$ should also be approximately ∆ $r$ ,
yielding an average energy
$ħ$ 2
$E$ =
(1.15)
2 $m$ ∆ $r$ 2 $−e$ 2
∆ $r$
$ħ$ 2
Minimizing the energy with respect to ∆ $r$ , we find ∆ $r ∼$
$me$ 2 , so that the
ground state energy is approximately given by
$E$ 0 = $−R∞∼−me$ 4
(1.16)
2 $ħ$ 2 $.$
In fact, this turns out to be equal to the exact ground state energy for an
infinitely heavy nucleus.
1.3.2
Level degeneracies
Although we have enumerated the energies of the bound states in hydro-
gen, we have not addressed whether or not these states are degenerate. In
particular, suppose that there is an operator ˆ $A$ which commutes with the
Hamiltonian ˆ $H$ , i.e. [ ˆ $A,$ ˆ $H$ ] = 0. We can then find a common set of eigen-
vectors $|En, Al⟩$ such that
ˆ $A|En, Al⟩$
=
$Al|En, Al⟩$
(1.17)
ˆ $H|En, Al⟩$
=
$En|En, Al⟩.$
(1.18)
The energy $En$ is the same for all states $|En, Al⟩$ , and it does not depend
on $Al$ . This level degeneracy is associated with the underlying symmetry
which renders $A$ invariant under Hamiltonian evolution. Consider the effect
<!-- page 12 -->
of the transformation ˆ $S$ ( $a$ ) = $ei$ ˆ
$Aa$ on the eigenstates of ˆ $H$ . If [ ˆ $A,$ ˆ $H$ ] = 0,
the energy levels are invariant under the transformation ˆ $S$ ( $a$ ). Thus we see
that there is a relation between degeneracies and symmetries of the system,
i.e. invariance under some set of unitary transformations.
For the hydrogen atom, the Hamiltonian Eq. (1.14) commutes with the
total angular momentum ˆ $L$ 2 and the z-component of angular momentum
ˆ $Lz$ , as well as with the electron spin angular momentum ˆ $S$ 2 and ˆ $Sz$ , and also
with the nuclear spin angular momentum ˆ $I$ 2 and ˆ $Iz$ .
The energies depend only on the principal quantum number $n$ , and all
angular momentum states $l$ = 0 $, · · · , n −$ 1 with the same principal quantum
number have $n$ are allowed and have the same energy. Similarly, all states
with eigenvalues of the z-component ˆ $Lz$ of angular momentum $lz$ = $−l, · · · , l$
and electron spin and nuclear spin sublevels have the same energy.
Degeneracies are removed, however, in the real hydrogen atom due to
corrections to the Hamiltonian.
1.3.3
Corrections to the hydrogen atom hamiltonian: lifting
of the $L$ degeneracy
Deviations of the potential from 1 $/r$ result in a lifting of the degeneracy
with respect to $l$ .
In multi-electron atoms, inner shell electrons tend to
screen the nuclear charge, so that for fixed principal quantum number $n$ ,
large $l$ states of the valence electrons are less deeply bound than small $l$
states (since electronic states further from the nucleus experience a greater
screening effect). For example in alkali atoms such as Na, with shell structure
(1 $s$ )2(2 $s$ )2(2 $p$ )6(3 $s$ ), the Hamiltonian can be written as ˆ $H$ = $p$ 2
2 $m −e$ 2
$r$ + $V ′$ ( $r$ ),
where $V ′$ ( $r$ ) $→$ 0 as $r →∞$ but $V ′$ ( $r$ ) $̸$ = 0 as $r →$ 0. The energy is now
a function of both the principal quantum number and the total angular
momentum $E$ = $E$ ( $n, l$ ).
It is worth noting, however, that (for a given valence shell configuration)
the effect of the inner electrons decreases as the principal quantum $n$ number
increases. Consequently large-n states have a reduced the energy splitting
between different $l$ states. Very large $n$ states, known as “Rydberg states”,
exhibit nearly hydrogen-like spectra.
1.3.4
Fine structure: lifting of the $J$ degeneracy
Relativistic corrections result in the so-called fine structure splitting of the
energy levels of the hydrogen atom. There are three contributions to the fine
structure, and their net effect on an energy level depends only on its associated
<!-- page 13 -->
 total electronic angular momentum $J$ = $L$ + $S$ . Therefore, relativistic
effects break the degeneracy of each principal level $n$ such that different $J$
values have different energies.
The first contribution to the fine structure is a relativistic correction
to the kinetic energy. The second contribution is referred to as the spin-
orbit term and physically represents the interaction between the intrinsic
magnetic dipole of the electron (i.e., the electron’s spin) and the internal
magnetic field of the atom which is related to the orbital angular momentum
of the electron. The final correction is referred to as the Darwin term, and
is a relativistic correction to the potential energy. The Darwin term acts
only at the origin and thus is only nonzero for $L$ = 0 states.
To illustrate how such relativistic effects can result in the splitting of
levels with different $J$ , we examine the spin-orbit coupling below. For details
on the kinetic energy and Darwin term, one can refer to any introductory
quantum mechanics text.
The interaction energy of the spin-orbit effect is:
$VSL$ = $A$ ˆ $S ·$ ˆ $L.$
(1.19)
$VSL$ commutes with $S$ 2 $, L$ 2 $, J$ 2 and $Jz$ , where ˆ $J$ = ˆ $S$ + ˆ $L$ , so we now label
atomic states by $J$ 2 and $Jz$ rather than by $Lz$ and $Sz$ (which do not commute
with $VSL$ and are thus not good quantum numbers). As an example, consider
sodium (Na). The ground state of Na has zero orbital angular momentum
( $|$ ˆ $L| ≡L$ = 0), and therefore no fine structure since $J$ = $S$ can only take
on one value. For the first excited state ( $L$ = 1), $J$ = 1 + 1 $/$ 2 = 3 $/$ 2 or
$J$ = 1 $−$ 1 $/$ 2 = 1 $/$ 2. What is the energy splitting between the $J$ = 1 $/$ 2 and
$J$ = 3 $/$ 2 states? Using the fact that
ˆ $J ·$ ˆ $J$
=
$J$ 2 = $L$ 2 + $S$ 2 + 2 ˆ $S ·$ ˆ $L$
(1.20)
$⇒$
ˆ $S · L$
=
$J$ 2 $−L$ 2 $−S$ 2 $,$
(1.21)
we have
$VSL$ = $A$ ˆ $S ·$ ˆ $L$ = ( $A/$ 2)( $J$ 2 $−L$ 2 $−S$ 2)
(1.22)
This implies that the energy splitting between the $J$ = 3 $/$ 2 and $J$ = 1 $/$ 2
state is given by
∆ $E$ 3 $/$ 2 $−$ ∆ $E$ 1 $/$ 2 = $A$
2 [(9 $/$ 4 $−$ 1 $/$ 4 $−$ 1) $−$ (1 $/$ 4 $−$ 1 $/$ 4 $−$ 1)] = $A$
2 $·$ 2 = $A.$ (1.23)
Traditionally, the transition from the 3 $S$ 1 $/$ 2 ground state of Na to the 3 $P$ 1 $/$ 2
excited state is called the D1 line whereas the transition from the 3 $S$ 1 $/$ 2
ground state of Na to the 3 $P$ 3 $/$ 2 excited state is called the D2 line.
<!-- page 14 -->
Remark concerning the wavefunctions of hydrogen-like atoms
The wavefunction of a hydrogen-like atom can be written as $ψnlm$ ( $ρ, θ, φ$ ) =
$Rnl$ ( $ρ$ ) $Ylm$ ( $θ, φ$ ) where $Rnl$ ( $ρ$ ) contains the radial dependence, and the angu-
lar dependence is contained in the spherical harmonics
$Ylm$ ( $θ, φ$ ) = $P m$
$l$ (cos $θ$ ) $eimφ,$
(1.24)
where $P m$
$l$ (cos $θ$ ) is the associated Legendre polynomial of degree $l$ and order
$m$ . It is important to remember: (1) as $ρ →$ 0, $Rnl ∼ρl$ , which vanishes
unless $l$ = 0, and (2) under the parity transformation (ˆ $r →−$ ˆ $r$ , i.e., $φ →$
$φ$ + $π$ , $θ →π−θ$ ), $Ylm$ ( $π−θ, φ$ + $π$ ) = ( $−$ 1) $lYlm$ ( $θ, φ$ ). From this and the fact
that the radial function $Rnl$ ( $ρ$ ) is insensitive to the parity transformation,
we see that the parity of the $ψnlm$ wavefunctions is ( $−$ 1) $l$ .
1.3.5
Hyperfine interaction
The interaction of the magnetic dipole of the valence electron with the nu-
clear spin ˆ $I$ is referred to as the hyperfine interaction. The magnetic field
produced by a nucleus with magnetic moment m $N$ is given by
$$ 3n(n $·$ m $N$ ) $−$ m $N$
$$
B(R) = $μ$ 0
+ 8 $π$
$,$
(1.25)
4 $π$
$R$ 3
3 m $Nδ$ (R)
where R is the vector distance from the nucleus and n is the unit vector
in the direction of R. The second term is a strong contact term which is
non-zero only for $l$ = 0 states, whereas the first term is a weaker long-range
( $∼$ 1 $/R$ 3) term which is non-zero for all other $l$ .
The result is that the
hyperfine interaction is generally strongest for $S$ states with small $r$ . The
interaction energy may be approximated as
$VHFS$ = $AHFS$ ˆ $I ·$ ˆ $J$
(1.26)
Taking into account both the fine and hyperfine interactions, the appro-
priate conserved quantum number is the total angular momentum ˆ $F$ given
by
ˆ $F$ = ˆ $I$ + ˆ $S$ + ˆ $L.$
(1.27)
Structure of the alkali ground state
As an example, consider the ground state of hydrogen for which $L$ = 0,
$I$ = 1 $/$ 2, and $S$ = 1 $/$ 2. Since $L$ = 0, $F$ 2 = $I$ 2 + $S$ 2 + 2 ˆ $S ·$ ˆ $I$ , and $HHFS$ =
( $AHFS/$ 2)( $F$ 2 $−I$ 2 $−S$ 2). Allowed values of $F$ = 0 $,$ 1 lead to hyperfine shifts
<!-- page 15 -->
$HHFS$ ( $F$ = 1 $, F$ = 0) = ( $AHFS/$ 4 $, −AHFS/$ 4). The hydrogen ground state
thus has two levels split in energy by $AHFS/$ 2, with $F$ = 0 and 1. Similarly,
one can calculate that the ground states of 23 $Na$ and 87 $Rb$ (for which $L$ = 0,
$I$ = 3 $/$ 2, and $S$ = 1 $/$ 2) consist of two levels $F$ = 1 and $F$ = 2 separated by
3 $AHFS/$ 2.
1.3.6
Interaction with static external magnetic fields
In the presence of a static external magnetic field, the energy levels shift in a
manner referred to as the Zeeman effect. In the $L$ = 0 case, the shift can be
calculated exactly, whereas for $L̸$ = 0 states, approximations are required.
The interaction of a magnetic moment $μ$ in a constant magnetic field B is
given by
$H$ = $−μ ·$ B $,$
(1.28)
where this formula applies to both the electron and the nucleus. If we assume
that the magnetic field is in the ˆ $z$ direction, we have
$H$ = $−μzBz.$
(1.29)
Therefore, for a static field in the ˆ $z$ direction, the energy (Zeeman) shift of
an $L$ = 0 state is given by
$HZ$ = $−μeSZBZ −μNIZBZ,$
(1.30)
where $μe$ = $−gJμB$ , $μN$ = $gIμB$ , $gJ$ is the Lande g-factor associated with
electron spin for an electron bound to a nucleus, $gI$ is the Lande g-factor
associated with nuclear spin, $μB$ is the Bohr magneton, and $μe ≫μN$ .
We can distinguish two cases: (1) strong field in which $mS$ , and $mI$ are
good quantum numbers, and (2) weak field in which case $F$ and $mF$ are
good quantum numbers. In general, we can relate two bases ( $|J, mJ⟩$ and
$|j$ 1 $, j$ 2 $⟩$ , where ˆ $J$ = ˆ $J$ 1 + ˆ $J$ 2 and [ $J$ 1 $, J$ 2] = 0) with so-called Clebsch-Gordon
coefficients $C$ ( $J$ 1 $, J$ 2 $, J$ ; $j$ 1 $, j$ 2 $, mJ$ ) defined by the following equation
$X$
$|J, mJ⟩$
=
$⟨J$ 1 $J$ 2 $j$ 1 $j$ 2 $|JmJ⟩|J$ 1 $J$ 2 $j$ 1 $j$ 2 $⟩$
(1.31)
$j$ 1 $,j$ 2
$X$
$≡$
$C$ ( $J$ 1 $, J$ 2 $, J$ ; $j$ 1 $, j$ 2 $, mJ$ ) $|J$ 1 $J$ 2 $j$ 1 $j$ 2 $⟩.$
(1.32)
$j$ 1 $,j$ 2
The Clebsch-Gordan coefficients can be used to relate the $|F, mF ⟩$ basis
to the $|I, S$ ; $mI, mS⟩$ basis (abbreviated as the $|mI, mS⟩$ ).
For example,
<!-- page 16 -->
letting $J$ 1 = $S$ = 1 $/$ 2, $J$ 2 = $I$ = 1 $/$ 2, and $J$ = $J$ 1 + $J$ 2 = $F$ (we’re assuming
$L$ = 0), we have
$|$ 1 $,$ 1 $⟩$
=
$|$ 1 $/$ 2 $,$ 1 $/$ 2 $⟩$
(1.33)
1
$|$ 1 $,$ 0 $⟩$
=
$√$
(1.34)
2( $|$ 1 $/$ 2 $, −$ 1 $/$ 2 $⟩$ + $| −$ 1 $/$ 2 $,$ 1 $/$ 2 $⟩$ )
1
$|$ 0 $,$ 0 $⟩$
=
$√$
(1.35)
2( $|$ 1 $/$ 2 $, −$ 1 $/$ 2 $⟩−| −$ 1 $/$ 2 $,$ 1 $/$ 2 $⟩$ )
$|$ 1 $, −$ 1 $⟩$
=
$| −$ 1 $/$ 2 $, −$ 1 $/$ 2 $⟩$
(1.36)
We will primarily be concerned with low values of the magnetic field,
where the Zeeman effect can be treated as a perturbation to the fine and hy-
perfine interactions. In this case, we use the $|F, mF ⟩$ basis as our zero-order
wavefunctions, and the Zeeman shift ∆ $EZ$ can be shown to be proportional
to the applied magnetic field according to the relation
∆ $EZ$ = $gF μBmF Bz,$
(1.37)
where $μB$ is the Bohr magneton, $gF$ is the Lande g-factor in the presence of
nuclear spin given by
$F$ ( $F$ + 1) + $J$ ( $J$ + 1) $−I$ ( $I$ + 1)
$gF$ = $gJ$
$.$
(1.38)
2 $F$ ( $F$ + 1)
Simliarly, $gJ$ is the Lande g-factor without considering nuclear spin given by
$gJ$ = 1 + $J$ ( $J$ + 1) + $S$ ( $S$ + 1) $−L$ ( $L$ + 1)
$.$
(1.39)
2 $J$ ( $J$ + 1)
Note: A good reference on these topics is Vanier and Audoin, ”Quantum
Physics of Atomic Frequency Standards.”
1.3.7
Interaction with optical fields
In this section we consider the interaction of isolated neutral atoms with
optical fields.
Such atoms alone have no net charge and no permanent
electric dipole moment. In the presence of a static electric field E, however,
the atoms do develop an electric dipole moment d which can then interact
with the electric field with an interaction energy $U$ given by
$U$ = $−$ d $·$ E $.$
(1.40)
<!-- page 17 -->
In our semi-classical treatment of this interaction, we treat the atom quan-
tum mechanically and therefore consider ˆ $d$ as an operator, but treat the
electromagnetic field classically and so consider E as a vector of complex
numbers.
This dipole interaction has two effects: (1) when the field is
off-resonant with the atomic transitions, the dominant effect is that the
atomic energy levels undergo an energy shift ( $∼E$ 2), (2) when the field is
near-resonant with an atomic transition, the dominant effect is transitions
between atomic levels.
Selection rules
The Hamiltonian for the dipole interaction interaction, can be written in
terms of a complete basis of states ${|a⟩}$ for the atom:
ˆ $H$
=
$−$ ˆd $·$ E
(1.41)
$X$
=
$|a′⟩⟨a|⟨a′|$ ˆd $|a⟩·$ E $.$
(1.42)
$aa′$
Note that the quantum state $|a⟩$ is shorthand for a complete description in
terms of quantum numbers $na, la, sa,$ etc. Transitions are possible between
states $|a⟩$ and $|b⟩$ only when the matrix element
$μa′a ≡⟨a′|$ ˆd $|a⟩̸$ = 0 $.$
(1.43)
There are many restrictions on the states $|a⟩, |a′⟩$ for which $μa′a̸$ = 0;
these are referred to as selection rules. For example, parity arguments re-
strict the possible $L$ values between which transitions are allowed. Since the
scalar quantity
$Z$
$μa′a ∝$
$ψL′ r ψLdV$
(1.44)
is invariant under the parity operation $r →−r$ , $ψL →$ ( $−$ 1) $LψL$ , $μ$ is nonzero
only if ( $−$ 1) $L$ + $L′$ +1 = 1, leading to the selection rule
∆ $L$ = $±$ 1 $.$
(1.45)
Of course, this argument really only implies that ∆ $L$ is odd. To prove that
it must be specifically $±$ 1, one can take the matrix element of both sides of
equation
[ $L$ 2 $,$ [ $L$ 2 $,$ ˆ $r$ ]] = 2 $ħ$ 2(ˆ $rL$ 2 + $L$ 2ˆ $r$ )
(1.46)
between $⟨α′, L′, m′$
$L|$ and $|α, L, mL⟩$ . One can then derive the requirement
∆ $L$ = $±$ 1.
<!-- page 18 -->
The spin argument is simple: since the dipole operator ˆ $d$ = $e$ ˆ $r$ contains
no spin degrees of freedom, we must have
∆ $S$ = 0 $.$
(1.47)
The rules for $J$ and $F$ are given by
∆ $J$
=
$±$ 1 $,$ 0
(1.48)
∆ $F$
=
$±$ 1 $,$ 0 $.$
(1.49)
The exception to these rules is that $J$ = 0 $→J′$ = 0 transitions and $F$ =
0 $→F ′$ = 0 transitions are forbidden, because these transitions imply that
∆ $L$ = 0 as a necessary consequence.
Before moving on to the selection rules for magnetic quantum numbers,
it is useful to consider some practical notes concerning transitions strengths.
In general,
$r$
4 $π$
ˆ $εq ·$ ˆ $r$ =
(1.50)
3 $ρY$ 1 $q$ ( $θ, φ$ ) $,$
where $ρ$ = $|r|$ . Therefore
$⟨a|$ ˆ $εq ·$ ˆ $r|a′⟩$ = radial part $·$ angular part $,$
(1.51)
where the radial part  ̄ $ρ$ sets the size scale and the angular part can be
evaluated using the Wigner-Eckart theorem (see e.g.
Sakurai, ”Modern
Quantum Mechanics”). For example, the radial component for a hydrogen-
like atom undergoing a 1 $S →$ 2 $P$ transition is
$Z$
 ̄ $ρ$
=
$RnlρRn′l$ +1 $dV$
(1.52)
$⇒$  ̄ $ρ$
=
1 $.$ 3 $aB$ (1 $S →$ 2 $P$ )
(1.53)
where $aB$ is the Bohr radius.
In an atom with no fine or hyperfine structure, the angular part of the
transition matrix element is given by
$⟨L′, m′$
$L|Y$ 1 $q|L, mL⟩$ = $⟨YL′m′$
(1.54)
$L|Y$ 1 $q|YL,mL⟩,$
which can be expressed in terms of what are referred to as 3j symbols (see
Vanier or Metcalf), which themselves are related to the Clebsch-Gordan co-
efficients. To determine the angular part for atoms with fine and hyperfine
structure requires the use of Clebsch-Gordan coefficients. For the fine struc-
ture, the energy levels are split by the spin-orbit interaction and so $L$ is no
<!-- page 19 -->
longer a good quantum number but is replaced by $J$ . However, the optical
field still couples only to the orbital angular momentum $L$ of the states. To
calculate the angular matrix element then one must use the Clebsch-Gordan
coefficients to express the $|J, mJ⟩$ states in terms of $|L, mL⟩|S, mS⟩$ states.
One must use a similar procedure (twice) for atoms with hyperfine structure
for which $F$ is the good quantum number (see Metcalf and van der Straten,
”Laser Cooling and Trapping”, for example) .
Now we move on to the selection rules for the magnetic quantum numbers
which are related to the polarization of the incident electric field. We can
write the electric field as a sum of linearly polarized components
E = ˆ $ε$ $xEx$ + ˆ $ε$ $yEy$ + ˆ $ε$ $zEz$ $,$
(1.55)
or as a sum of right and left circularly polarized and ˆ $z$ linearly polarized
components
E = ˆ $ε$ +E+ + ˆ $ε−$ E $−$ + ˆ $ε$ $zEz$ $,$
(1.56)
where
$√$
ˆ $ε±$ = $∓$ (ˆ $εx ± i$ ˆ $εy$ ) $/$
2 $.$
(1.57)
From Eq. 1.54 and knowledge of spherical harmonics, one immediately
sees that the $mL$ selection rules are given by
$σ$ +
light
( $⇒q$ = +1)
$⇒$ ∆ $mL$ = +1
(1.58)
$σ−$
light
( $⇒q$ = $−$ 1)
$⇒$ ∆ $mL$ = $−$ 1
(1.59)
ˆ $z$
light
( $⇒q$ = 0)
$⇒$ ∆ $mL$ = 0 $,$
(1.60)
The same selection rules apply as well for $mJ$ and $mF$ with an additional
restriction. For $J$ = $J′$ , ∆ $mJ$ = 0 with $mJ$ = 0 is forbidden, because
$⟨J, mJ|z|J, mJ⟩∼mJ$
(1.61)
(where $J$ here can stand for $J$ or $F$ ). Note that Eq. 1.61 is true because all
the functions in this matrix element are symmetric about $z$ .

<!-- captions -->


<!-- footnotes -->


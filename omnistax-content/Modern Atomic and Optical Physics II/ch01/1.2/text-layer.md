<!-- page 8 -->
1.2
Review of quantum mechanics
1.2.1
States
We briefly review basic quantum mechanics and some elementary results of
atomic physics.
The most complete knowledge of the system is contained in the state
vector $|ψ⟩$ , which is an element of a Hilbert space $H$ . We can expand the
state vector $|ψ⟩$ in any orthonormal basis ${|n⟩}$ of the Hilbert space,
$X$
$|ψ⟩$ =
$|n⟩⟨n|ψ⟩.$
(1.1)
$n$
For convenience, we write $cn$ = $⟨n|ψ⟩$ for the projection of the state $|ψ⟩$ on
the basis state $|n⟩$ , which gives us the expansion coefficients of the state $|ψ⟩$
in the basis ${|n⟩}$ . The probability of finding the system in the state $|n⟩$ is
then $Pn$ = $|cn|$ 2.
1.2.2
Superpositions - Interference
Quantum mechanics allows for superpositions of states, in particular, for
two states
$X$
$|ψ$ 1 $⟩$
=
$c$ (1)
$n |n⟩$ and
(1.2)
$n$
$X$
$|ψ$ 2 $⟩$
=
$c$ (2)
$n |n⟩,$
(1.3)
$n$
$√$
1
their superposition
2( $|ψ$ 1 $⟩$ + $|ψ$ 2 $⟩$ ) has the unique property that the proba-
bility of being in state $|n⟩$ is not in general given by the sum of probabilities.
Instead it is given by the absolute value of the sum of amplitudes
2
$Pn$ = 1
$c$ (1)
$n$ + $c$ (2)
$n$
= 1
$n$
+ $P$ (2)
$n$ )
(1.4)
2
2( $P$ (1)
This inequality occurs as a result of the interference term between the two
components of state vector, given in this case by $c$ (1) $∗$
$n$
$c$ (2)
$n$ .
1.2.3
Observables
Observables in quantum mechanics are represented by Hermitian operators
acting on states of the Hilbert space. An operator ˆ $O$ is Hermitian when for
any two states $|ψ$ 1 $,$ 2 $⟩$ in the Hilbert space, we have
$⟨ψ$ 1 $|$ ˆ $O|ψ$ 2 $⟩$
=
( $⟨ψ$ 2 $|$ ˆ $O|ψ$ 1 $⟩$ ) $∗.$
(1.5)
<!-- page 9 -->
The expectation value of the observable ˆ $O$ when the system is in state
$|ψ⟩$ is
$⟨$ ˆ $O⟩$
=
$⟨ψ|$ ˆ $O|ψ⟩.$
(1.6)
When the operator ˆ $O$ is diagonal in the basis ${|n⟩}$ , we have
ˆ $O|n⟩$ = $On|n⟩$
(1.7)
$X$
$X$
$⇒⟨$ ˆ $O⟩$ =
$On|cn|$ 2 =
$Onpn$
(1.8)
$n$
$n$
where $On$ denotes the n $th$ eigenvalue of the operator ˆ $O$ . Note that if the
system is in an eigenstate of ˆ $O$ , we always get the same result upon repeated
measurements of the observable ˆ $O$ .
1.2.4
Uncertainty principle
In general operators do no commute, i.e.
[ ˆ $A,$ ˆ $B$ ]
=
$i$ ˆ $C$
(1.9)
so that for ˆ $C̸$ = 0, the operators ˆ $A$ and ˆ $B$ do not have the same eigenstates.
Heisenberg’s uncertainty principle states that for any two operators ˆ $A$
and ˆ $B$ , we have
∆ $A ·$ ∆ $B ≥$ 1
(1.10)
2 $⟨$ [ ˆ $A,$ ˆ $B$ ] $⟩$
$q$
where ∆ $A$ =
$⟨$ ( ˆ $A −⟨$ ˆ $A⟩$ )2 $⟩$ .
1.2.5
Time evolution: Schrodinger’s picture
In non-relativistic quantum mechanics, the dynamics of the system is de-
scribed by Schrodinger’s equation: in Schrodinger’s picture the state vec-
tor describing the state of the system evolves in time, while the operators
describing the observables corresponding to possible measurements on the
system are stationary.
The state vector evolves in time according to
$iħd$
=
ˆ $H|ψ⟩$
(1.11)
$dt|ψ⟩$
where ˆ $H$ is the Hamiltonian of the system.
The stationary solutions of
Schrodinger’s equation are given by $|En⟩$ where ˆ $H|En⟩$ = $En|En⟩$ .
Any
<!-- page 10 -->
state can be expanded in the the basis of eigenstates of ˆ $H$ , and in that
basis the time evolution of the state vector takes a particularly simple form,
namely
$X$
$|ψ$ ( $t$ ) $⟩$
=
$e−iEnt/ħcn|En⟩$
(1.12)
$n$
corresponding to the initial state $|ψ$ (0) $⟩$ with expansion coefficients $cn$ =
$⟨En|ψ$ (0) $⟩$ .
In the basis of its eigenstates, the Hamiltonian is diagonal
ˆ $H$ = $P$
$n |En⟩En⟨En|$ . The time evolution equation can also be formally
integrated to yield the time evolved state $|ψ$ ( $t$ ) $⟩$ = exp[ $−i$ ˆ $Ht/ħ$ ] $|ψ$ (0) $⟩$ =
ˆ $U$ ( $t$ ) $|ψ$ (0) $⟩$ , where ˆ $U$ ( $t$ ) is the time evolution operator.
1.2.6
Time evolution: Heisenberg picture
In Heisenberg’s picture, the state vector describing the initial state of the
system does not evolve in time, rather the observables describing possible
measurements on the system at time $t$ , depend explicitely on time and evolve
according to Heisenberg’s equation of motion
$iħd$
ˆ $O$ ( $t$ )
=
[ ˆ $O,$ ˆ $H$ ] + $iħ∂$ ˆ $O$
(1.13)
$dt$
$∂t .$

<!-- captions -->


<!-- footnotes -->


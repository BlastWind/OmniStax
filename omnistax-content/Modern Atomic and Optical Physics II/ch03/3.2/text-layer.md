<!-- page 46 -->
3.2
System and environment
The density operator formalism is well suited for treating a system composed
of two parts when only one subsystem is relevant. For clarity, we will call the
<!-- page 47 -->
total system the universe, and its component parts are the system and the
environment. The universe can be described by a quantum state $|ψ⟩$ , with
the corresponding density operator ˆ $ρ$ = $|ψ⟩⟨ψ|$ , and in principle we can solve
for the dynamics of the system by first finding how the universe evolves.
Since we are really only interested in the system, we would like to find a
more efficient description which does not require us to calculate precisely
what happens to the environment degrees of freedom.
We proceed by first expanding the total state vector in terms of a product
basis ${|n⟩|e⟩}$ where $|n⟩$ is a state of the system and $|e⟩$ is a state of the
environment, so that
$X$
$|ψ⟩$ =
$|n⟩|e⟩⟨n, e|ψ⟩.$
(3.17)
${n,e}$
Consider the expectation value in this state of an operator ˆ $S$ which acts only
on the system degrees of freedom,
$X$
$⟨$ ˆ $S⟩$
=
$⟨n, e|$ ˆ $S|ψ⟩⟨ψ|n, e⟩$
(3.18)
$n,e$
$X$
$X$
=
$⟨n|$ ˆ $S$ (
$⟨e|ψ⟩⟨ψ|e⟩$ )
$|n⟩$
(3.19)
$n$
$e$
$|$
${z$
$}$
ˆ $ρS$
=
Tr $S$ [ ˆ $S$ ˆ $ρS$ ] $.$
(3.20)
The subscript S (R) on the trace indicates that only the system (reservoir)
states are included in the sum. The second line in the equation above is
true because the operator ˆ $S$ operates only on the system, and thus $⟨e|$ can
be moved past ˆ $S$ . Eq. (3.20) states that the expectation value of a system
operator can always be found in terms of a reduced density operator
ˆ $ρS$ = Tr $R$ [ˆ $ρ$ ] $.$
(3.21)
Note that ˆ $ρS$ has all the properties of a density operator, and can be ex-
pressed as a probabilistic mixture of system states, ˆ $ρS$ = $P$
$α⟩⟨ψS$
$α|$ . In
$α pα|ψS$
general, however, ˆ $ρS$ does not have to describe a pure state, and this reflects
the fact that the system under consideration interacts with the environment,
i.e. it is an open system.

<!-- captions -->


<!-- footnotes -->


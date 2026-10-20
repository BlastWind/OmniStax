<!-- page 226 -->
10.3
Quantum state engineering
We have seen how the internal and motional state of a trapped ion can
be manipulated by applied lasers with a remarkable level of control. As a
potential application for this system, one might inquire whether these these
techniques permit one to engineer an arbitrary motional state
$∞$
$X$
$|ψ⟩$ = $|g⟩⊗$
$cn|n⟩.$
(10.27)
$n$ =0
While the coefficients $cn$ are in principle arbitrary, they could correspond
to a variety of interesting or useful quantum states such as Fock states,
coherent states, squeezed states, or Schrodinger cat states. The ability to
engineer such quantum states is crucial to developing quantum gates based
on an ion trap architecture.
10.3.1
Preparation of an arbitrary motional quantum state
Suppose that we start out with the system in an initial state $|i⟩$ , and we
would like to end up in a state $|f⟩$ . Using laser pulses tuned to the bare
and sideband transitions, we hope to find a series of unitary transformations
<!-- page 227 -->
linking these two states
$|f⟩$ = $UNUN−$ 1 $. . . U$ 2 $U$ 1 $|i⟩.$
(10.28)
Two simple examples
For example, if the ion started out in the ground state $|i⟩$ = $|g⟩⊗|$ 0 $⟩$ , and
we wanted to end up with the ion in state $|f⟩$ = ( $α|g⟩$ + $β|e⟩$ ) $⊗|$ 0 $⟩$ , we need
only apply a laser pulse at the bare resonance frequency for an appropriate
time.
A slightly more complicated transformation involves swapping informa-
tion between the internal and external degrees of freedom
$|i⟩$
=
( $α|g⟩$ + $β|e⟩$ ) $⊗|$ 0 $⟩$
(10.29)
$|f⟩$
=
$|g⟩⊗$ ( $α|$ 0 $⟩$ + $β|$ 1 $⟩$ ) $.$
(10.30)
This transformation can be implemented by tuning the laser to the red
sideband and applying a $π$ pulse.
Procedure
Ultimately, we would like to be able to prepare an arbitrary motional quan-
tum state from, for example, the ground state $|i⟩$ = $|g⟩⊗|$ 0 $⟩$ . If our desired
final state is $|f⟩$ = $|ψ⟩$ (where the coefficients $cn$ are specified), we claim that
it is possible to find a series of unitary transformations linking $|i⟩$ and $|f⟩$ .
To prove this statement, it is convenient to work backwards. Since unitary
transformations are invertible, if we can show how to start in $|f⟩$ and end
up in $|i⟩$ , then the inverse transformation will accomplish the desired task.
Suppose that our initial state has coefficients satisfying $cn$ = 0 for all
$n > N$ , where $N$ is arbitrary but finite. Our procedure works by system-
atically emptying population from the $Nth$ rung of the harmonic oscillator,
then iterating until the entire ionic population is in the ground state. The
required steps are:
(1) Apply the laser on the red sideband, coupling $|g⟩|N⟩→|e⟩|N −$ 1 $⟩$ .
Using our knowledge of the $cn$ , we can apply the laser for the appropriate
time to implement a $π$ -pulse, emptying the population amplitude of $|g⟩|N⟩$
into the initially empty state $|e⟩|N −$ 1 $⟩$ .
(2) Apply the laser on the bare atomic frequency. From the specified $cn$
we can again determine the pulse length which will empty $|e⟩|N −$ 1 $⟩$ into
$|g⟩|N −$ 1 $⟩$ .
(3) Repeat steps (1) and (2) until the entire population is in the ground
<!-- page 228 -->
state.
The inverse of this procedure can then be used to construct an arbitrary
motional quantum state.

<!-- captions -->


<!-- footnotes -->


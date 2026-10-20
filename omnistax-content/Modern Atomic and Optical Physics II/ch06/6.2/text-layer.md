<!-- page 110 -->
6.2
Example: Decay of a two-level atom
As an example of the Monte Carlo Wavefunction method, consider a two
level system which starts out in a pure state $|ψ$ (0) $⟩$ = $a$ 1 $|$ 1 $⟩$ + $a$ 2 $|$ 2 $⟩$ , and
decays at a rate $γ$ so that ˆ $c$ = $|$ 1 $⟩⟨$ 2 $|$ . In a time $δt$ , the probability that the
system jumps out of the superposition state is
$δp$
=
$δtγ⟨ψ|$ ˆ $c†$ ˆ $c|ψ⟩$
(6.22)
=
$δtγ|a$ 2
2 $|.$
(6.23)
Since $δp$ is just the probability to emit a photon while decaying from $|$ 2 $⟩$ to
$|$ 1 $⟩$ , it makes sense that it is equal to the probability to be in the excited
state multiplied by the probability for that excited state to decay. If the
state does not decay, it evolves according to the effective Hamiltonian
ˆ $H$ eff= ∆ $|$ 2 $⟩⟨$ 2 $|$ + $iγ$
(6.24)
2 ˆ $c†$ ˆ $c.$
Solving the effective Schrodinger equation,
$γ$
$$
$d$
$|$ 2 $⟩$
(6.25)
$dt|ψ⟩$ = $−$
2 + $i$ ∆
we may easily find the time-dependent state,
$$
$$
1
$|$  ̃ $ψ$ ( $t$ ) $⟩$ =
$p$
$a$ 1 $|$ 1 $⟩$ + $a$ 2 $e−$ ( $γ/$ 2+ $i$ ∆) $t|$ 2 $⟩$
$.$
(6.26)
$|a$ 2
1 $|$ + $|a$ 2 $|$ 2 $e−γt$
Due to the normalization terms in the denominator, the probability to be in
state $|$ 2 $⟩$ decays more slowly than $e−γt$ ; however, at each step along the way,
there is a finite probability to emit a photon and collapse definitely into the
<!-- page 111 -->
ground state. If one averages over all such trajectories, following the Monte
Carlo algorithm, one can show that the average population in the excited
state does indeed decay as $e−γt$ .
However, this picture has physical meaning beyond the statistical aver-
age, because it provides an answer to Carmichael’s original question: What
happens if the atom does not emit a photon? The above analysis shows
that not detecting a photon is also a measurement on the system, because
it causes the state to evolve in a certain way. Due to the normalization
condition, at long times the system will always end up in $|$ 1 $⟩$ even if it never
emits a photon.
Although the statistical wavefunction approach can provide some intu-
ition and computational power, it is only useful in a small subset of calcula-
tions. In particular, it is advantageous to use the Monte Carlo method for
simulations when
(1) The Hilbert space is so large that density matrix calculations are
impossible
(2) One wishes to incorporate measurement-dependent feedback into the
system. Feedback terms are difficult to incorporate into the master equa-
tion, but trivial to implement in the Monte Carlo Wavefunction algorithm.
In general, however, this is a method of last resort, and should be employed
only if other analytic and numerical techniques fail.

<!-- captions -->


<!-- footnotes -->


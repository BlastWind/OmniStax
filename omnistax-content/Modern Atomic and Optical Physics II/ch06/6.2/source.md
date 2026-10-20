# 6.2 Example: Decay of a two-level atom

<!-- page 110 -->

As an example of the Monte Carlo Wavefunction method, consider a two level system which starts out in a pure state $|\psi(0)\rangle = a_1|1\rangle + a_2|2\rangle$, and decays at a rate $\gamma$ so that $\hat{c} = |1\rangle\langle 2|$. In a time $\delta t$, the probability that the system jumps out of the superposition state is
$$ \delta p = \delta t\gamma\langle\psi|\hat{c}^\dagger\hat{c}|\psi\rangle $$ {eq:6.22}
$$ = \delta t\gamma|a_2^2|. $$ {eq:6.23}

Since $\delta p$ is just the probability to emit a photon while decaying from $|2\rangle$ to $|1\rangle$, it makes sense that it is equal to the probability to be in the excited state multiplied by the probability for that excited state to decay. If the state does not decay, it evolves according to the effective Hamiltonian
$$ \hat{H}_\mathrm{eff} = \Delta|2\rangle\langle 2| + \frac{i\gamma}{2}\hat{c}^\dagger\hat{c}. $$ {eq:6.24}
Solving the effective Schrodinger equation,
$$ \frac{d}{dt}|\psi\rangle = -\left(\frac{\gamma}{2} + i\Delta\right)|2\rangle $$ {eq:6.25}
we may easily find the time-dependent state,
$$ |\tilde{\psi}(t)\rangle = \frac{1}{\sqrt{|a_1^2| + |a_2|^2e^{-\gamma t}}}\left(a_1|1\rangle + a_2e^{-(\gamma/2+i\Delta)t}|2\rangle\right). $$ {eq:6.26}
Due to the normalization terms in the denominator, the probability to be in state $|2\rangle$ decays more slowly than $e^{-\gamma t}$; however, at each step along the way, there is a finite probability to emit a photon and collapse definitely into the ground state. If one averages over all such trajectories, following the Monte Carlo algorithm, one can show that the average population in the excited state does indeed decay as $e^{-\gamma t}$.

<!-- page 111 -->

However, this picture has physical meaning beyond the statistical average, because it provides an answer to Carmichael’s original question: What happens if the atom does not emit a photon? The above analysis shows that *not* detecting a photon is also a measurement on the system, because it causes the state to evolve in a certain way. Due to the normalization condition, at long times the system will always end up in $|1\rangle$ even if it never emits a photon.

Although the statistical wavefunction approach can provide some intuition and computational power, it is only useful in a small subset of calculations. In particular, it is advantageous to use the Monte Carlo method for simulations when

(1) The Hilbert space is so large that density matrix calculations are impossible

(2) One wishes to incorporate measurement-dependent feedback into the system. Feedback terms are difficult to incorporate into the master equation, but trivial to implement in the Monte Carlo Wavefunction algorithm. In general, however, this is a method of last resort, and should be employed only if other analytic and numerical techniques fail.

<!-- notes
- Eq. (6.23) and (6.26): $|a_2^2|$ and $|a_1^2|$ are printed for $|a_2|^2$ and $|a_1|^2$ (the same denominator writes $|a_2|^2$).
- Eq. (6.24): $+\frac{i\gamma}{2}\hat{c}^\dagger\hat{c}$ has the wrong sign; Eq. (6.7) gives $-\frac{i\gamma}{2}\hat{c}^\dagger\hat{c}$, and with $\hbar = 1$ and $i\,d/dt = \hat H_\mathrm{eff}$ only the minus sign yields the decay in Eq. (6.25)-(6.26).
- Eq. (6.25): the right side is printed as $-(\gamma/2 + i\Delta)|2\rangle$; meant is $-(\gamma/2 + i\Delta)|2\rangle\langle 2|\psi\rangle$, i.e. acting on the $|2\rangle$ amplitude only, which is what Eq. (6.26) solves.
- "a two level system": printed without the hyphen, kept.
-->

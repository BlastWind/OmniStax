# 9.2 Interactions between a single-mode radiation field and a two level atom

<!-- page 177 -->

We have seen that linear transformations preserve the properties of coherent classical fields. We will now consider several opposite examples in which nonlinear transformations can dramatically alter the properties of a single mode field. In particular, we will consider the interaction between a single mode of the radiation field and a single two-level atom. Although conceptually simple, the two-level atom provides an intrinsically anharmonic medium which will illustrate the nontrivial dynamics of the quantum field under nonlinear transformations.

<!-- page 178 -->

Experimentally such a system is very difficult to realize. The single mode field must be isolated within a high finesse cavity (either optical or microwave), and a single atom must be confined within this cavity. This field is known as ”cavity quantum electrodynamics”, and recently experimentalists have begun to be able to probe the regime well described by a single mode and single atom.

## 9.2.1 The Jaynes-Cummings model

Initially, we will consider only the coherent interactions between the atom and cavity mode. This analysis neglects the dissipation and decoherence associated with unconfined modes of the radiation bath or decay of the single mode field through the mirrors forming the cavity. The evolution of the atom and field can be solved exactly in this case.

If the atom is resonant with the cavity mode, the Hamiltonian in the rotating frame becomes
$$ \hat{H} = -\hbar g\hat{a}|2\rangle\langle 1| - \hbar g^*\hat{a}^\dagger|1\rangle\langle 2|. $$ {eq:9.53}
The first term in the Hamiltonian permits simultaneous excitation of the atom and absorption of a photon, while the second term describes atomic relaxation to the ground state and emission of a photon.

Suppose the atom starts off in the excited state, and the initial field is an arbitrary superposition of Fock states,
$$ |\psi_0\rangle = |2\rangle_a\otimes\sum_n c_n(0)|n\rangle. $$ {eq:9.54}
The Hamiltonian couples the state $|2\rangle_a|n\rangle$ to the state $|1\rangle_a|n+1\rangle$ and back, so after some time $t$, the system will be in the state
$$ |\psi(t)\rangle = \sum_n c_n^{(1)}(t)|1\rangle_a\otimes|n\rangle + c_n^{(2)}(t)|2\rangle_a\otimes|n\rangle. $$ {eq:9.55}
Since we are considering only coherent evolution, we can use the Schrodinger equation to find the evolution equations for the time-dependent probability amplitudes
$$ \dot{c}_n^{(2)} = ig\sqrt{n+1}c_{n+1}^{(1)} $$ {eq:9.56}
$$ \dot{c}_{n+1}^{(1)} = ig\sqrt{n+1}c_n^{(2)}. $$ {eq:9.57}

<!-- page 179 -->

These equations hold independently for every pair $c_{n+1}^{(1)}, c_n^{(2)}$, so we can easily find the general solution for the probability amplitudes
$$ c_{n+1}^{(1)}(t) = ic_n(0)\sin\left(g\sqrt{n+1}t\right) $$ {eq:9.58}
$$ c_n^{(2)}(t) = c_n(0)\cos\left(g\sqrt{n+1}t\right). $$ {eq:9.59}
Note that even if the atom starts out in some superposition state, the same kinds of manipulations will again give a general solution.

## 9.2.2 Initial vacuum field: vacuum Rabi oscillations

The physics behind the Jaynes-Cummings model is particularly transparent when the radiation field initially starts out in the vacuum state,
$$ |\psi_0\rangle = |2\rangle_a\otimes|0\rangle. $$ {eq:9.60}
In this case, the system only couples to one other state, $|1\rangle_a\otimes|1\rangle$. We can project the Hamiltonian onto these two states to find an effective two-level system with coupling strength $g$:
$$ \hat{H}_\mathrm{eff} = -\hbar g|2\rangle_a|0\rangle\langle 1|_a\langle 1| - \hbar g^*|1\rangle_a|1\rangle\langle 2|_a\langle 0|. $$ {eq:9.61}
Such a system exhibits oscillations at the vacuum Rabi frequency $g$, and its state is described by the wavefunction
$$ |\psi(t)\rangle = \cos gt|2\rangle_a|0\rangle + i\sin gt|1\rangle_a|1\rangle. $$ {eq:9.62}
Unlike classical Rabi oscillations induced by a coherent laser, these dynamics involve Fock states of the radiation field. In particular, after a time $t = \pi/2g$, the system is in an eigenstate of the number operator $\hat{a}^\dagger\hat{a}|\psi\rangle = i\hat{a}^\dagger\hat{a}|1\rangle_a|1\rangle = |\psi\rangle$. We emphasize that the Fock state with exactly one photon is very different coherent states created by a classical current; for example the classical coherence vanishes for the Fock state $\langle\hat{a}\rangle = 0$.

The state evolution may appear similar to the spontaneous emission of a single photon from an excited atom, but there is an important difference. Whereas spontaneous emission produces a single photon wavepacket distributed over an infinite number of free space modes, the vacuum Rabi oscillation produces a single photon in a well defined mode. The emission process is thus fully reversible, and the photon can be reabsorbed by the atom. Such reabsorption was impossible in the Wigner Wiesskopf theory, but it is predicted by this analysis because we have disregarded incoherent interactions. We have implicitly assumed that the vacuum Rabi frequency $g$ is much greater than the rate of dissipation or decoherence. Achieving this so-called “strong coupling regime” presents a substantial challenge to experimentalists.

<!-- page 180 -->

### Initial coherent state field

The system behaves quite differently if the radiation field starts out in a coherent state,
$$ |\psi_0\rangle = |2\rangle_a\otimes|\alpha\rangle. $$ {eq:9.63}
Classically, we would expect to see Rabi oscillations, and we will now examine the quantum limit to such oscillations.

We can represent the coherent state in the general form
$$ |\psi_0\rangle = |2\rangle_a\otimes\sum_n\underbrace{e^{-|\alpha|^2/2}\frac{\alpha^n}{\sqrt{n!}}}_{c_n(0)}|n\rangle, $$ {eq:9.64}
and using the solution for $c_n^{(i)}(t)$ we can write down the general solution for $|\psi\rangle$:
$$ |\psi(t)\rangle = \sum_n e^{-|\alpha|^2/2}\frac{\alpha^n}{\sqrt{n!}}\left(i\sin\left(g\sqrt{n+1}t\right)|1\rangle_a|n+1\rangle + \cos\left(g\sqrt{n+1}t\right)|2\rangle_a|n\rangle\right). $$ {eq:9.65}
One might suppose that the atomic dynamics and field states represented by $|\psi(t)\rangle$ should be dominated by the most heavily weighted Fock states in the sum over $n$. The average photon number in the coherent state is given by $\bar{n} = |\alpha|^2$, and for large $\bar{n}$, the Poisson distribution centered around $n = \bar{n}$ has a narrow width $\Delta n/\bar{n} = 1/\sqrt{\bar{n}}$. The lowest order approximation we can make in Eq. (11.6) is to simply substitute $\sqrt{n+1} \approx \sqrt{\bar{n}}$, which should roughly produce the correct results in the sum above over the range $n\in[\bar{n} - \Delta n, \bar{n} + \Delta n]$. Such a substitution yields
$$ \begin{aligned} |\psi(t)\rangle &\approx \sum_n e^{-|\alpha|^2/2}\frac{\alpha^n}{\sqrt{n!}}\left(i\sin\left(g\sqrt{\bar{n}}t\right)|1\rangle_a|n+1\rangle + \cos\left(g\sqrt{\bar{n}}t\right)|2\rangle_a|n\rangle\right) \\ &\approx \sum_n e^{-|\alpha|^2/2}\frac{\alpha^n}{\sqrt{n!}}\left(i\sin\left(g\sqrt{\bar{n}}t\right)|1\rangle_a|n\rangle + \cos\left(g\sqrt{\bar{n}}t\right)|2\rangle_a|n\rangle\right) \\ &= \left(i\sin\left(g\sqrt{\bar{n}}t\right)|1\rangle_a + \cos\left(g\sqrt{\bar{n}}t\right)|2\rangle_a\right)\otimes|\alpha\rangle. \end{aligned} $$ {eq:9.66}

<!-- page 181 -->

We find that the field remains in a coherent state while the atom cycles between the ground and excited states with period
$$ \tau_\mathrm{Rabi} \sim \frac{1}{g\sqrt{\bar{n}}} \sim \frac{1}{|\alpha|g}. $$ {eq:9.67}
This naive analysis has thus only given us the classical Rabi oscillations, so a more careful treatment is required to find the quantum corrections.

### The quantum limit to Rabi oscillations

Suppose we are interested in the probability for the atom to be in its excited state, which requires summation over all of the Fock states of the field. If we still assume that $\bar{n}$ is large, we can expand in terms of a small quantity $\delta n/\bar{n}$. The phase of the sine and cosine functions is then
$$ \phi_n = g\sqrt{n+1}t \approx g\sqrt{\bar{n} + \delta n}t $$ {eq:9.68}
$$ \approx gt\sqrt{\bar{n}}\left(1 + \frac{\delta n}{2\bar{n}}\right) = gt\sqrt{\bar{n}}\left(\frac{\bar{n} + n}{2\bar{n}}\right). $$ {eq:9.69}
To first order in $\delta n/n$, the phase depends linearly on $n$. This observation allows us to capture the main effect of photon number fluctuations, because it shows that at long times even small $\delta n$ will have a non-negligible contribution to the phase. Qualitatively, these corrections introduce phases into the sum which depend on the precise value of $\delta n$, thereby dephasing the wavepacket.

The photon number fluctuations first become significant when the phase corrections $gt\delta n/\sqrt{\bar{n}}$ approach unity:
$$ \tau_\mathrm{Collapse} \sim \frac{\sqrt{\bar{n}}}{\delta n g} \sim \frac{1}{g}. $$ {eq:9.70}
The different Fock states get out of phase with each other, so the Rabi oscillations damp out. If we evolve for even longer times, however, the Rabi oscillations revive. The revival time,
$$ \tau_\mathrm{Revival} \sim 2\pi\frac{\sqrt{\bar{n}}}{g} \sim 2\frac{\pi|\alpha|}{g}, $$ {eq:9.71}
corresponds to the time required for the phase corrections $gt\sqrt{\bar{n}}\frac{\delta n}{2\bar{n}}$ to equal multiples of $\pi$ for the dominant Fock states (it can be seen that multiples of $\pi$ rather than $2\pi$ are sufficient since the sin and cos terms will cause at most just an overall phase shift). The collapse and revival phenomenon represents a generic feature of many quantum nonlinear systems which are isolated from their environments. In this case, the revival is imperfect, but there exist other nonlinear systems which exhibit complete revivals of oscillations.

<!-- page 182 -->

> FIGURE {fig:9.3} src=../../media/ch09/fig-9-3.png
> caption: Collapse and revival of Rabi oscillations for a cavity field initially in a coherent state with $\alpha = 4$.

The origin of the collapse and revival phenomenon lies in the field evolution. If we let a single-mode coherent field interact with a nonlinear medium (such as a two-level atom), at long times it will not remain in a coherent state. This situation is perhaps made most apparent by using our approximate value for $\phi_n$ to find the state at later times $t > 0$. Using
$$ \phi_n \approx gt\sqrt{\bar{n}}\left(\frac{\bar{n} + n}{2\bar{n}}\right), $$ {eq:9.72}
over the range of relevant $n$ we can write
$$ i\sin(g\sqrt{n+1}t) = \frac{1}{2}\left(e^{i\phi_n} - e^{-i\phi_n}\right) $$ {eq:9.73}
$$ \approx e^{ig\sqrt{\bar{n}}t/2}e^{ignt/2\sqrt{\bar{n}}} - e^{-ig\sqrt{\bar{n}}t/2}e^{-ignt/2\sqrt{\bar{n}}}. $$ {eq:9.74}

<!-- page 183 -->

The ground state contribution to Eq. (11.6) can then be written at arbitrary times as
$$ \sum_n e^{-|\alpha|^2/2}\frac{\alpha^n}{\sqrt{n!}}i\sin g\sqrt{n+1}t|1\rangle_a|n+1\rangle \approx $$ {eq:9.75}
$$ \begin{aligned} &\frac{1}{2}|1\rangle_a\otimes\sum_n e^{-|\alpha|^2/2}\left(e^{ig\sqrt{\bar{n}}t/2}\frac{(\alpha e^{igt/2\sqrt{\bar{n}}})^n}{\sqrt{n!}} - e^{-ig\sqrt{\bar{n}}t/2}\frac{(\alpha e^{-igt/2\sqrt{\bar{n}}})^n}{\sqrt{n!}}\right) = \\ &\frac{1}{2}|1\rangle_a\otimes\sum_n\left(e^{ig\sqrt{\bar{n}}t/2}|\alpha e^{igt/2\sqrt{\bar{n}}}\rangle - e^{-ig\sqrt{\bar{n}}t/2}|\alpha e^{-igt/2\sqrt{\bar{n}}}\rangle\right). \end{aligned} $$ {eq:9.76}
A similar calculation can be done with the excited state term of Eq. (11.6), and yields the total state
$$ |\psi(t)\rangle = \frac{1}{\sqrt{2}}\left(|2\rangle_a|\alpha_+\rangle + |1\rangle_a|\alpha_-\rangle\right) $$ {eq:9.77}
where
$$ |\alpha_+\rangle = \frac{1}{\sqrt{2}}\left(e^{ig\sqrt{\bar{n}}t/2}|\alpha e^{igt/2\sqrt{\bar{n}}}\rangle + e^{-ig\sqrt{\bar{n}}t/2}|\alpha e^{-igt/2\sqrt{\bar{n}}}\rangle\right) $$ {eq:9.78}
$$ |\alpha_-\rangle = \frac{1}{\sqrt{2}}\left(e^{ig\sqrt{\bar{n}}t/2}|\alpha e^{igt/2\sqrt{\bar{n}}}\rangle - e^{-ig\sqrt{\bar{n}}t/2}|\alpha e^{-igt/2\sqrt{\bar{n}}}\rangle\right). $$ {eq:9.79}
The atom and the field are in general no longer factorizable, and the field state is very different from a coherent state.

At time $gt = \pi\sqrt{\bar{n}}\sim g\tau_{Revival}/2$, suppose we measure the internal state of the atom, which in turn projects the field component into either the state $|\alpha_+\rangle$ or $|\alpha_-\rangle$, where $|\alpha_\pm\rangle \sim |\alpha e^{i\pi/2}\rangle\pm e^{-i\pi\bar{n}}|\alpha e^{-i\pi/2}\rangle$. Note that the classical coherence of this state $\langle\hat{a}\rangle \sim e^{-|\alpha|^2}$ is exponentially small for large $\alpha$, but it posesses a higher order quantum coherence. This kind of superpostion state is often called a “Schrodinger cat”: much like the infamous feline, the two superposed states $|\pm i\alpha\rangle$ are macroscopically distinguishable. Consequently this kind of state is very difficult to produce experimentally because it is easily destroyed by decoherence and dissipation. Nonetheless, such techniques have been demonstrated (see, *e.g.*, Phys. Rev. Lett. **94**, 010401 (2005)).

<!-- notes
- Eq. (9.47) stands in footnote 1 of 9.1 (page 177) and is transcribed there; sections.json corrected to list it under 9.1, and text-layer.md's footnote part (that footnote's continuation) removed.
- text-layer.md corrected: the ligature "offin" to "off in" as the page prints it.
- 9.2 ”cavity quantum electrodynamics”: the book's stray opening ”, kept.
- 9.2.2 "is very different coherent states": the book's missing "from", kept.
- 9.2.2 "Wigner Wiesskopf": the book's misspelling of Weisskopf, kept.
- "posesses" and "superpostion": the book's typos, kept.
- "Eq. (11.6)" (four times, pages 180 and 183): a stale citation; meant Eq. (9.65).
- Eq. (9.74): the factor $\frac{1}{2}$ of Eq. (9.73) is dropped; meant $\approx \frac{1}{2}\left(e^{ig\sqrt{\bar{n}}t/2}e^{ignt/2\sqrt{\bar{n}}} - \ldots\right)$.
- Eqs. (9.75)-(9.76): the middle row drops the ket $|n\rangle$ (with $|n+1\rangle$ approximated by $|n\rangle$), and the last row keeps a $\sum_n$ although the sum has already built the coherent states; meant $\frac{1}{2}|1\rangle_a\otimes\left(\ldots\right)$ with no sum. Rows two and three, one number between them, typed as one aligned display under (9.76).
- Eq. (9.66): one number for three rows, typed as one aligned display.
- Figure 9.3's drawn labels give $\tau_\mathrm{Rabi} = 1/g\alpha$ and $\tau_\mathrm{Revival} = \alpha/g$, while Eq. (9.71) gives $\tau_\mathrm{Revival} \sim 2\pi|\alpha|/g$; the figure's revival label drops the $2\pi$.
- "To first order in $\delta n/n$": elsewhere $\delta n/\bar{n}$; kept.
-->

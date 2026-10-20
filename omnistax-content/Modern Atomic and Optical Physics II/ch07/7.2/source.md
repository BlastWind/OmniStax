# 7.2 Adiabaticity for the two-level system

<!-- page 115 -->

Adiabatic evolution can be transparently illustrated by examining a two-level system with a time-dependent detuning $\Delta(t)$ and Rabi frequency $\Omega(t)$. Expressed in the time-independent (bare state) basis $\{|1\rangle, |2\rangle\}$ , the Hamiltonian can be written
$$ \hat{H}(t) = -\hbar\Delta(t)|2\rangle\langle 2| - \hbar\Omega(t)\left(|1\rangle\langle 2| + |2\rangle\langle 1|\right) $$ {eq:7.11}

<!-- page 116 -->

$$ = -\hbar\begin{pmatrix} 0 & \Omega(t) \\ \Omega(t) & \Delta(t) \end{pmatrix}. $$ {eq:7.12}
Diagonalizing the Hamiltonian gives us the instantaneous eigenstates $|\pm\rangle$ and eigenenergies $\epsilon_\pm$,
$$ |+\rangle = \cos\theta(t)|1\rangle + \sin\theta(t)|2\rangle $$ {eq:7.13}
$$ |-\rangle = \sin\theta(t)|1\rangle - \cos\theta(t)|2\rangle $$ {eq:7.14}
$$ \epsilon_\pm(t) = \frac{\hbar}{2}\left(-\Delta(t) \pm \sqrt{\Delta(t)^2 + 4\Omega(t)^2}\right) $$ {eq:7.15}
where the mixing angle is
$$ \theta(t) = -\frac{1}{2}\mathrm{arctan}\,\frac{2\Omega(t)}{\Delta(t)}, $$ {eq:7.16}
constrained to lie between 0 and $\pi$. Note that $|\pm\rangle$ and $\epsilon_\pm(t)$ correspond exactly to a set of time-dependent dressed states and dressed energies.

We wish to examine this system in the adiabatic limit, so we will assume that $\Delta$ and $\Omega$ vary slowly enough that the adiabatic condition is fulfilled, or
$$ \frac{|\dot{\Omega}\Delta - \Omega\dot{\Delta}|}{4\Omega^2 + \Delta^2} \ll \sqrt{4\Omega^2 + \Delta^2}. $$ {eq:7.17}

## 7.2.1 Rapid adiabatic passage

Adiabatic passage represents an important application of the adiabatic theorem in a two-level system, because it provides a robust method for transferring population from one bare state to the other. For example, suppose the two-level system is initially in $|1\rangle$, and we seek to transfer all of the population into $|2\rangle$, but we cannot precisely control the values of $\Delta$ and $\Omega$ or the interaction time $\tau$. With such imprecision, we will be unable to perform a given Rabi rotation, so we seek a more robust method.

### Adiabatic return

Suppose that we tried keeping $\Delta \neq 0$ constant while sending in a pulse $\Omega(t)$. Initially, the dressed states would coincide with the bare states, and if the system adiabatically follows the ground state $|-\rangle$ it will evolve into a superposition of $|1\rangle$ and $|2\rangle$ for finite $\Omega(t)$. As $\Omega(t) \to 0$ at the end of the pulse, however, the system will return to its initial state $|1\rangle$ (see Fig. (9.3).

<!-- page 117 -->

### Adiabatic passage

State transfer is possible when $\Omega/\Delta$ changes from near $-\infty$ to near $\infty$ over the course of the experiment. One way to achieve this goal is to vary $\Delta(t)$ linearly in time, chirping the frequency through resonance while sending in a pulse $\Omega(t)$. The coupling between the levels leads to an avoided crossing, so an atom which starts out in $|1\rangle$ and adiabatically follows the ground state $|-\rangle$ will end up in $|2\rangle$ with near unit probability after a long time has passed.

## 7.2.2 Adiabaticity condition for the two-level system

For techniques like rapid adiabatic passage to work, the probability for the system to transition between eigenstates $|-\rangle$ and $|+\rangle$ must be small. In the two-level system, the adiabaticity condition requires that the coupling terms
$$ \langle\dot{+}|-\rangle = \dot{\theta}(t) $$ {eq:7.18}
be small compared to the energy splitting $\epsilon_+ - \epsilon_-$, or
$$ \hbar\dot{\theta}(t) \ll |\epsilon_+(t) - \epsilon_-(t)|. $$ {eq:7.19}
The minimum energy difference occurs when $\Delta$ sweeps through resonance, so $\epsilon_+(t) - \epsilon_-(t) \geq 2\hbar\Omega(t)$. Consequently the adiabaticity condition will be fulfilled whenever the total change in phase $\delta\theta$ is much less than the pulse area,
$$ \int_{-\infty}^{\infty} dt\dot{\theta}(t) \ll \int_{-\infty}^{\infty} dt 2\Omega(t) = A. $$ {eq:7.20}
Since adiabatic passage requires $\delta\theta = \mathcal{O}(1)$, the condition for adiabaticity can be simply stated as $A \gg 1$. The minimum time over which the system will adiabatically follow $|-\rangle$ is thus $\tau \approx 1/\Omega$. This time is not constrained by intrinsic atomic timescales; in particular it can be smaller than the excited state lifetime. Consequently, the technique may be considered “rapid” even while satisfying the adiabatic condition.

### Exactly solvable system: the Landau-Zener model

This condition is a useful qualitative measure of the validity of the adiabatic approximation, but we would like to quantify any remaining corrections to the adiabatic result. Our discussion of adiabaticity has used perturbation theory, so it is tempting to extend the perturbative analysis to estimate loss from the instantaneous eigenstates. For example, we might postulate a small parameter,

<!-- page 118 -->

> FIGURE {fig:7.1} src=../../media/ch07/fig-7-1.png
> caption: A comparison of adiabatic passage and adiabatic return. The time dependent parameters $\Delta$ and $\Omega$ lead to instantaneous eigenenergies $\epsilon_\pm$. Assuming that the system follows the instantaneous ground state, it will be in a mixture of states $|1\rangle$ and $|2\rangle$ with occupation probabilities $P_1$ and $P_2$ respectively. Clearly, adiabatic passage can result in state transfer, whereas adiabatic return leaves the system in its initial state.

<!-- page 119 -->

$$ \epsilon = \frac{\dot{\theta}}{|\epsilon_+ - \epsilon_-|} $$ {eq:7.21}
and try to expand the population loss in powers of $\epsilon$. However, we have not verified that such an expansion is actually valid for this problem.

Examination of an exactly solvable problem provides a rather disturbing answer. For a system starting out at $t = -\infty$ in $|1\rangle$ with $\Omega = \Omega_0$ constant and $\Delta = \alpha t$, Landau and Zener showed that the probability of complete state transfer to $|2\rangle$ at large times is
$$ P_{LZ} = 1 - e^{-2\pi\frac{|\Omega_0|^2}{|\alpha|}}. $$ {eq:7.22}
Since $\dot{\theta} \sim \alpha/2\Omega_0$, the small parameter for this system is $\epsilon \approx \alpha/4\Omega_0^2$, which yields the non-adiabatic correction:
$$ P_{LZ} - 1 \approx e^{-\frac{\pi}{2}\frac{1}{\epsilon}}. $$ {eq:7.23}
This function is not analytic for small $\epsilon$, and thus cannot be approximated by perturbation theory. Consequently more sophisticated methods are required to attempt a perturbative approach for this lossless system. Surprisingly, when loss from the excited state is included, the singularity at $\epsilon \to 0$ vanishes, and a perturbation series is possible.

<!-- notes
- Adiabatic return: "(see Fig. (9.3)." cites the wrong figure and leaves a parenthesis open; Figure 7.1 is meant. Kept as printed.
- Eq. (7.18): differentiating (7.13) and projecting on (7.14) gives $\langle -|\dot{+}\rangle = -\dot{\theta}$; the book's sign (and bra/ket order) kept. Only the magnitude matters for (7.19).
- "Since $\dot{\theta} \sim \alpha/2\Omega_0$": from (7.16) with $\Delta = \alpha t$, $|\dot{\theta}|$ at resonance is $\alpha/4\Omega_0$. The book's $\alpha/2\Omega_0$ is what makes $\epsilon \approx \alpha/4\Omega_0^2$ and the exponent $\pi/2\epsilon$ in (7.23) agree with (7.22); with $\alpha/4\Omega_0$ one gets $\epsilon \approx \alpha/8\Omega_0^2$ and $e^{-\pi/4\epsilon}$. Kept as printed.
- Eq. (7.23): $P_{LZ} - 1$ is negative; $1 - P_{LZ} = e^{-\frac{\pi}{2}\frac{1}{\epsilon}}$ is meant (and it is exact, not approximate, given (7.22)). Kept.
- Eq. (7.17): placed between the 7.2 opening and 7.2.1 as on the page; its two sides differ in dimension by the factor relating $\dot\theta$ to the splitting, as printed.
- Figure 7.1, Adiabatic Passage panel: the curve labels look swapped; the black curve starting at 1 (the population of $|1\rangle$) is labelled $P_2$ at its end and the red rising curve $P_1$, while the Adiabatic Return panel uses black for $P_1$ and red for $P_2$. The figure is the book's; noted for the builder.
- Figure 7.1 stands alone on page 118, mid-sentence; its marker sits before the display (7.21) that finishes the sentence. The crop is clean.
-->

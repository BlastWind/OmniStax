# 6.1 Formalism

<!-- page 107 -->

The description on which both groups converged begins with the most general form of the master equation,
$$ \frac{d\hat{\rho}_S}{dt} = \frac{1}{i\hbar}[\hat{H}_S, \hat{\rho}_S] + \mathcal{L}(\hat{\rho}_S), $$ {eq:6.1}
where the Liouvillian operator can be expressed as
$$ \mathcal{L}(\hat{\rho}_S) = -\sum_k \frac{\gamma_k}{2}\left(\hat{c}_k^\dagger\hat{c}_k\hat{\rho}_S + \hat{\rho}_S\hat{c}_k^\dagger\hat{c}_k - 2\hat{c}_k\hat{\rho}_S\hat{c}_k^\dagger\right). $$ {eq:6.2}

It can be shown that Eq. (6.1) is the most general form for a master equation allowed by physics, and it has the added advantage that it is notationally compact. Since it is the most general form, it must contain the master equation we derived by assuming a certain kind of environment. To see this, identify the (in principle arbitrary) operators $\hat{c}_k$ with
$$ \hat{c}_{2k} = \sqrt{\bar{n}+1}\hat{S}_k $$ {eq:6.3}
$$ \hat{c}_{2k+1} = \sqrt{\bar{n}}\hat{S}_k^\dagger, $$ {eq:6.4}
in which case both the decay and absorption terms are included in Eq. (6.1).

Combining Eq. (6.1) with the definition for $\mathcal{L}(\hat{\rho}_S)$, and expanding $\hat{\rho}_S = \sum_\alpha p_\alpha|\psi_\alpha\rangle\langle\psi_\alpha|$, we can rewrite the master equation in a suggestive form:
$$ \frac{d\hat{\rho}_S}{dt} = \frac{1}{i\hbar}[\hat{H}_S, \hat{\rho}_S] - \sum_k \frac{\gamma_k}{2}\left(\hat{c}_k^\dagger\hat{c}_k\hat{\rho}_S + \hat{\rho}_S\hat{c}_k^\dagger\hat{c}_k - 2\hat{c}_k\hat{\rho}_S\hat{c}_k^\dagger\right) $$ {eq:6.5}
$$ = \sum_\alpha \left\{ \frac{1}{i\hbar}\left(\hat{H}_S - i\hbar\sum_k \frac{\gamma_k}{2}\hat{c}_k^\dagger\hat{c}_k\right)p_\alpha|\psi_\alpha\rangle\langle\psi_\alpha| - \frac{1}{i\hbar}p_\alpha|\psi_\alpha\rangle\langle\psi_\alpha|\left(\hat{H}_S + i\hbar\sum_k \frac{\gamma_k}{2}\hat{c}_k^\dagger\hat{c}_k\right) + \sum_k p_\alpha\gamma_k\hat{c}_k|\psi_\alpha\rangle\langle\psi_\alpha|\hat{c}_k^\dagger \right\}. $$ {eq:6.6}

The first two terms can be rewritten in terms of an effective Hamiltonian,
$$ \hat{H}_\mathrm{eff} = \hat{H}_S - i\hbar\sum_k \frac{\gamma_k}{2}\hat{c}_k^\dagger\hat{c}_k, $$ {eq:6.7}

<!-- page 108 -->

so that the master equation now reads
$$ \frac{d\hat{\rho}_S}{dt} = \sum_\alpha p_\alpha\left(\frac{1}{i\hbar}\left(\hat{H}_\mathrm{eff}|\psi_\alpha\rangle\langle\psi_\alpha| - |\psi_\alpha\rangle\langle\psi_\alpha|\hat{H}_\mathrm{eff}^\dagger\right) + \sum_k \gamma_k\hat{c}_k|\psi_\alpha\rangle\langle\psi_\alpha|\hat{c}_k^\dagger\right). $$ {eq:6.8}
This form for the first two terms resembles the master equation for a pure state evolving according to $\hat{H}_\mathrm{eff}$; the final term we will interpret as a “quantum jump” operator which changes $|\psi_\alpha\rangle$ into another state $|\phi_{k,\alpha}\rangle = \hat{c}_k|\psi_\alpha\rangle$ with some probability.

The Schrodinger equation corresponding to the first two terms of Eq. (6.8) is
$$ i\hbar\frac{d}{dt}|\psi_\alpha\rangle = \hat{H}_\mathrm{eff}|\psi_\alpha\rangle, $$ {eq:6.9}
and since we are interested in using Eq. (6.8) to describe a stochastic evolution, we will write it in discrete time,
$$ |\psi_\alpha(t+\delta t)\rangle = \left(1 + \frac{\hat{H}_\mathrm{eff}\delta t}{i\hbar}\right)|\psi_\alpha(t)\rangle. $$ {eq:6.10}
Note that $|\tilde{\psi}_\alpha(t+\delta t)\rangle$ is not normalized because the effective Hamiltonian is not Hermitian. To lowest order in the small time $\delta t$,
$$ \langle\psi_\alpha(t+\delta t)|\psi_\alpha(t+\delta t)\rangle = \langle\psi_\alpha|(1 - \frac{\hat{H}_\mathrm{eff}^\dagger\delta t}{i\hbar})(1 + \frac{\hat{H}_\mathrm{eff}\delta t}{i\hbar})|\psi_\alpha\rangle $$ {eq:6.11}
$$ = \langle\psi_\alpha|\left(1 - \frac{\delta t}{i\hbar}(\hat{H}_\mathrm{eff}^\dagger - \hat{H}_\mathrm{eff})\right)|\psi_\alpha\rangle $$ {eq:6.12}
$$ = \langle\psi_\alpha|\left(1 - \delta t\sum_k \gamma_k\hat{c}_k^\dagger\hat{c}_k\right)|\psi_\alpha\rangle. $$ {eq:6.13}
To simplify notation, we define
$$ \delta p_{k,\alpha} = \delta t\gamma_k\langle\psi_\alpha|\hat{c}_k^\dagger\hat{c}_k|\psi_\alpha\rangle $$ {eq:6.14}
$$ \delta p_\alpha = \delta t\sum_k \gamma_k\langle\psi_\alpha|\hat{c}_k^\dagger\hat{c}_k|\psi_\alpha\rangle, $$ {eq:6.15}
so that the norm of the state becomes
$$ \langle\psi_\alpha(t+\delta t)|\psi_\alpha(t+\delta t)\rangle = 1 - \sum_k \delta p_{k,\alpha} = 1 - \delta p_\alpha. $$ {eq:6.16}
We now know the proper normalization for the state at time $t+\delta t$:
$$ |\tilde{\psi}_\alpha(t+\delta t)\rangle = \frac{1 + \hat{H}_\mathrm{eff}\delta t/i\hbar}{\sqrt{1-\delta p_\alpha}}|\psi_\alpha(t)\rangle. $$ {eq:6.17}

<!-- page 109 -->

This normalized state corresponds the state of a system evolving solely under the influence of the first two terms in the master equation, i.e. a system which has never jumped into one of the $|\phi_{k,\alpha}\rangle$.

The “quantum jump” states $|\phi_{k,\alpha}\rangle$ are not normalized either, since
$$ \langle\phi_{k,\alpha}|\phi_{k,\alpha}\rangle = \langle\psi_\alpha|\hat{c}_k^\dagger\hat{c}_k|\psi_\alpha\rangle = \frac{\delta p_{k,\alpha}}{\gamma_k\delta t}. $$ {eq:6.18}
Again, we will define a normalized state
$$ |\tilde{\phi}_{k,\alpha}\rangle = \sqrt{\frac{\gamma_k\delta t}{\delta p_{k,\alpha}}}|\phi_{k,\alpha}\rangle $$ {eq:6.19}
to explicitly keep track of probability conservation.

Like the Schrodinger equation, the master equation may be written for discrete times $\delta t$,
$$ \hat{\rho}_S(t+\delta t) = \sum_\alpha p_\alpha\left(|\psi_\alpha(t+\delta t)\rangle\langle\psi_\alpha(t+\delta t)| + \delta t\sum_k \gamma_k|\phi_{k,\alpha}\rangle\langle\phi_{k,\alpha}|\right), $$ {eq:6.20}
and expressed in terms of the normalized states $|\tilde{\psi}_\alpha(t+\delta t)\rangle$ and $|\tilde{\phi}_{k,\alpha}\rangle$,
$$ \hat{\rho}_S(t+\delta t) = \sum_\alpha p_\alpha\left((1-\delta p_\alpha)|\tilde{\psi}_\alpha(t+\delta t)\rangle\langle\tilde{\psi}_\alpha(t+\delta t)| + \sum_k \delta p_{k,\alpha}|\tilde{\phi}_{k,\alpha}\rangle\langle\tilde{\phi}_{k,\alpha}|\right). $$ {eq:6.21}
By rewriting the master equation in this form, we can use a probability interpretation to gain intuition – and develop numerics – for the resulting system dynamics. Eq. (6.21) has two terms, which lead to two possible outcomes after a time $\delta t$ :

(1) with probability $(1-\delta p_\alpha)$, the system evolves according to $\hat{H}_\mathrm{eff}$, and remains in state $|\tilde{\psi}_\alpha\rangle$.

(2) with probability $\delta p_\alpha$, the system jumps into another state; in particular it jumps into state $|\tilde{\phi}_{k,\alpha}\rangle$ with probability $\delta p_{k,\alpha}$.

This statistical picture of a state vector evolution provides a clear procedure for simulation which only requires computation of the state vector (rather than density matrix) elements. A sample algorithm is summarized in Table (6.1).

<!-- page 110 -->

> TABLE {tab:6.1-1} cols=1
> title: Monte Carlo Procedure
| Table 6.1: **Monte Carlo Procedure** |
| --- |
| (1) Pick initial state $\|\psi_\alpha\rangle$ |
| (2) Pick a random number r |
| (3) For an appropriate time interval $\delta t$, calculate $\delta p_\alpha$. If $\delta p_\alpha < r$, replace $\|\psi_\alpha\rangle$ by $(1 - i\delta t\hat{H}_\mathrm{eff}/\hbar)\|\psi_\alpha\rangle/\sqrt{1-\delta p_\alpha}$. If $\sum_{k=1}^{K}\delta p_{k,\alpha} \leq r < \sum_{k=1}^{K+1}\delta p_{k,\alpha}$, replace $\|\psi_\alpha\rangle$ by $\|\tilde{\phi}_{k,\alpha}\rangle$ |
| (4) Repeat steps (2) and (3) for the desired length of time. |
| (5) Repeat steps (1-4) N times to generate a distribution of outcomes. |
| (6) If necessary, repeat steps (1-5) for all possible initial states $\|\psi_\alpha\rangle$. |
| (7) Density matrix evolution: $\hat{\rho}_S(t) = \sum_\alpha p_\alpha\|\psi_\alpha(t)\rangle\langle\psi_\alpha(t)\|/N$. |

<!-- notes
- The skeleton held two {eq:6.8} slots; the book has one Eq. (6.8), so one slot was dropped.
- Eq. (6.10) and (6.11)-(6.16) write $|\psi_\alpha(t+\delta t)\rangle$ without a tilde, but the next sentence calls it $|\tilde{\psi}_\alpha(t+\delta t)\rangle$ and Eq. (6.17) puts the tilde on the normalized state: the unnormalized state is meant in "Note that", the tilde there is the book's slip.
- "corresponds the state": the book's missing "to", kept.
- Table 6.1 is set as a captioned list on page 110; written as a one-column table whose header row is the printed title line. Pipes inside maths are escaped as \|.
- Table 6.1 step (3): "If $\delta p_\alpha < r$" replaces with the no-jump state, and the jump test with $\sum_{k=1}^{K}\delta p_{k,\alpha} \leq r < \sum_{k=1}^{K+1}$ cannot hold when $r > \delta p_\alpha$; the jump branch needs $r < \delta p_\alpha$, and the sums should start at k=1 with an empty sum for the first channel ($\sum_{k=1}^{K-1} \le r < \sum_{k=1}^{K}$ selecting channel $K$). The jumped state is named $|\tilde\phi_{k,\alpha}\rangle$ where $|\tilde\phi_{K,\alpha}\rangle$ is meant.
- Table 6.1 step (7): $\sum_\alpha p_\alpha|\psi_\alpha(t)\rangle\langle\psi_\alpha(t)|/N$ needs a sum over the N trajectories as well; as printed it sums only over initial states.
-->

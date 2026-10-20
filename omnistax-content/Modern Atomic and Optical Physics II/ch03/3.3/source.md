# 3.3 The dynamics of an open system

<!-- page 47 -->

We will use the density operator as a tool to aid derivation of an efficient description for an open system interacting with its environment. To understand how the reduced density operator evolves in time, consider first its evolution with a Hamiltonian $\hat{H}_S$ acting only on the system:
$$ i\hbar\dot{\hat{\rho}}_S = \sum_\alpha p_\alpha(\underbrace{i\hbar|\dot{\psi}_\alpha^S\rangle}_{\hat{H}_S|\psi_\alpha^S\rangle}\langle\psi_\alpha^S| + |\psi_\alpha^S\rangle\underbrace{i\hbar\langle\dot{\psi}_\alpha^S|}_{-\langle\psi_\alpha^S|\hat{H}_S}) $$ {eq:3.22}
$$ = \frac{1}{i\hbar}[\hat{H}_S, \hat{\rho}_S]. $$ {eq:3.23}
Suppose now that there is some coupling between the system and the environment described by an interaction Hamiltonian $\hat{H}_{SR}$. The dynamics will become quite a bit more involved, since even if the system and environment start out independent of one another, the initial product state $|\psi_S\rangle \otimes |\psi_R\rangle$ will evolve under the influence of $\hat{H}_{SR}$ into a state which cannot in general be factored into independent system and environment states. The system and environment are then said to be entangled.

<!-- page 48 -->

As an illustration we return to the example of an atom spontaneously emitting a photon into the vacuum. If the atom starts out in a superposition state, $|\psi_0\rangle = (c_1|1\rangle + c_2|2\rangle) \otimes |0\rangle$, at time $t$ it will be in a state $|\psi(t)\rangle = c_1|1\rangle \otimes |0\rangle + c_2(t)|2\rangle \otimes |0\rangle + \sum_k c_k(t)|1\rangle \otimes |1_k\rangle$ which can no longer be written as a direct product of atomic and electromagnetic states. The elements of the atomic reduced density matrix can then be calculated in terms of the decay rate $\gamma$:
$$ \hat{\rho}_S = \mathrm{Tr}_R[|\psi(t)\rangle\langle\psi(t)|] $$ {eq:3.24}
$$ = \sum_{n=0}^\infty\sum_k\langle n_k|\psi(t)\rangle\langle\psi(t)|n_k\rangle $$ {eq:3.25}
$$ = \begin{pmatrix} 1 - \rho_{22}(0)e^{-\gamma t} & \rho_{12}(0)e^{-\gamma t/2} \\ \rho_{21}(0)e^{-\gamma t/2} & \rho_{22}(0)e^{-\gamma t} \end{pmatrix}, $$ {eq:3.26}
where $|n_k\rangle$ is a $n$-photon Fock state in mode $k$. Note that the off-diagonal elements decay at half the rate of the excited state population. This is characteristic of interactions which conserve energy.

## 3.3.1 General formalism

The total Hamiltonian may be represented as a sum of three terms,
$$ \hat{H} = \hat{H}_S + \hat{H}_R + \hat{H}_{SR}. $$ {eq:3.27}
The first term only affects system degrees of freedom and the second only affects the reservoir while the third contains products of system operators

<!-- page 49 -->

with reservoir operators. The total density matrix obeys the equation of motion
$$ \dot{\hat{\rho}} = \frac{1}{i\hbar}[\hat{H}, \hat{\rho}] $$ {eq:3.28}
$$ = \frac{1}{i\hbar}[\hat{H}_S + \hat{H}_R + \hat{H}_{SR}, \hat{\rho}], $$ {eq:3.29}
and we may trace over the reservoir degrees of freedom on both sides of the equation to obtain the evolution for the system reduced density operator:
$$ \dot{\hat{\rho}}_S = \mathrm{Tr}_R[\dot{\hat{\rho}}] $$ {eq:3.30}
$$ = \frac{1}{i\hbar}[\hat{H}_S, \hat{\rho}_S] + \frac{1}{i\hbar}\underbrace{\mathrm{Tr}_R[[\hat{H}_R, \hat{\rho}]]}_{=0} + \frac{1}{i\hbar}\mathrm{Tr}_R[[\hat{H}_{SR}, \hat{\rho}]]. $$ {eq:3.31}
Each of the three terms contributes differently. The system Hamiltonian has the same effect it would have in the absence of the reservoir. The reservoir Hamiltonian has no net effect on $\hat{\rho}_S$ because the trace is invariant under cyclic permutations of the reservoir operators, so the commutator must vanish. The interaction Hamiltonian, however, involves both system and reservoir operators and requires special treatment. Although we have obtained the equation of motion as a general result, no further progress can be made without specifying at least some of the properties of the interaction Hamiltonian and the reservoir itself.

## 3.3.2 Properties of the environment

Different environments can have qualitatively different impacts on the system with which they interact. To illustrate typical reservoir properties, we consider the example of a spin in a fluctuating magnetic field, where the interaction Hamiltonian is
$$ \hat{H}_{SR} = \hbar f(t)\hat{S}_z. $$ {eq:3.32}
This Hamiltonian corresponds to an energy splitting $\hbar f(t)$ between the spin states $|1\rangle, |2\rangle$, where $\hat{S}_z = (|2\rangle\langle 2| - |1\rangle\langle 1|)/2$. We will consider the case when $f(t)$ represents a random field. This model is applicable to a variety of physical systems, for example an electron spin in a (randomly fluctuating) bath of nuclear spins. Starting from the Hamiltonian, we can formally derive the operator describing unitary evolution of the spin
$$ \hat{U} = e^{i\int_0^t f(t')dt'\hat{S}_z}, $$ {eq:3.33}

<!-- page 50 -->

from which we can calculate the time dependence of any expectation value. In particular, we will be interested in $\langle\hat{S}_+\rangle$, which correspnds to the off-diagonal element of the spin density matrix ($\hat{S}_+ = |2\rangle\langle 1|$). This operator picks up a phase from the energy splitting in the Hamiltonian, so its time dependence is
$$ \langle\hat{S}_+\rangle = \langle e^{i\int_0^t f(t')dt'}\hat{S}_+(0)\rangle, $$ {eq:3.34}
which depends on the moments of the random variable $f(t)$.

### Random variables

The fluctuating energy splitting $\hbar f(t)$ represents a time dependent random process, also known as a random variable. At each point in time, $f(t)$ is characterized by some probability distribution, and we need to know something about this probability distribution to predict the average effect that $f(t)$ has on the operator we are calculating. In particular, we will want to know the following properties of the probability distribution:

(1) The first moment is the expectation value $\langle f(t)\rangle$. Typically, we will be interested in so-called “stationary processes”, for which $\langle f(t)\rangle = \langle f\rangle$ is constant. We can then define
$$ f(t) = \langle f\rangle + \delta f(t), $$ {eq:3.35}
where $\langle\delta f(t)\rangle = 0$.

(2) The variance of the random process $\langle\delta f(t)\delta f(t')\rangle \neq 0$ describes the typical extent of the deviations of $f(t)$ from its average value.

(3) The correlation time $\tau_c$ represents the timescale on which $f(t)$ changes. It is related to the time dependence of the variance; in particular, the variance $\langle\delta f(t)\delta f(t')\rangle$ is nearly constant for $|t - t'| < \tau_c$.

For arbitrary probability distributions, we would in principle need to specify an infinite number of higher order moments. However, in what follows we will typically deal with “Gaussian” probability distributions. For a Gaussian probability distribution, knowledge of the mean and the variance is sufficient to specify all higher order moments because they factorize pairwise:
$$ \langle\delta f(t_1)\delta f(t_2)\ldots\delta f(t_n)\rangle = \sum\langle\delta f(t_1)\delta f(t_2)\rangle\langle\delta f(t_3)\ldots\rangle, $$ {eq:3.36}

<!-- page 51 -->

where the sum is taken over all distinct groupings into pairwise and single expectation values. In particular, we should notice that for $\langle\delta f\rangle = 0$, all odd-order moments vanish.

### Correlation time

For the example we are considering (the spin in a fluctuating field $f(t)$), we will distinguish two important limits:

(1) $t < \tau_c$

In this case, we examine the system on timescales which are much shorter than the timescale over which the environment changes. Each time that we examine the system (for example, running an experiment on it), we will find that the spin precesses around the $\hat{z}$ axis at a rate $f(t < \tau_c)$ which is random in value but fixed over the duration of the evolution. Every realization will have a different value of $f(t)$, so on average we would find that $\langle\bar{\hat{S}}_+\rangle = 0$. However, this dephasing is in some sense reversible. If you know what $f(t)$ is for each experiment, you can compensate for it. For example, you could perform a spin echo experiment, wherein you reverse the orientation of the spin halfway through its evolution, so that the net precession vanishes. Consequently we refer to this first situation as “reversible evolution.”

(2) $t \gg \tau_c$.

For times long compared to the correlation time, spin echo techniques fail. There is simply no way to recover a history of the evolution and undo the damage done by the fluctuating environment. The ensemble average $\langle\bar{\hat{S}}_+\rangle = 0$ again vanishes, but in a way that is fundamentally irreversible. This situation corresponds to a reservoir which has a short memory time. Such a reservoir is known as a “Markovian environment” because it can be described by a Markov process (a random process with an infinitely short correlation time). In atomic physics and quantum optics, most environments are nearly Markovian, so we will focus on techniques for understanding the effects of a Markovian reservoir.

## 3.3.3 Density operator method for a Markovian reservoir

By limiting the system and reservoir to certain kinds of interactions relevant to atomic physics and quantum optics, we can develop a framework for analyzing open systems. In particular, we will consider environments which have a very short correlation time, so that the system is only influenced by the instantaneous state of the reservoir.

<!-- page 52 -->

Again, we will assume $\hat{H} = \hat{H}_S + \hat{H}_R + \hat{H}_{SR}$. The interaction term $\hat{H}_S R$ is the most relevant part. To focus on it we will work in the interaction picture, which is found by transforming according to the unitary operator
$$ \hat{U} = e^{i(\hat{H}_R + \hat{H}_S)t/\hbar}. $$ {eq:3.37}
In the interaction picture (denoted by tildes), the relevant operators are
$$ \tilde{\rho} = e^{i(\hat{H}_R + \hat{H}_S)t/\hbar}\hat{\rho}e^{-i(\hat{H}_R + \hat{H}_S)t/\hbar} $$ {eq:3.38}
$$ \tilde{H}_{SR} = e^{i(\hat{H}_R + \hat{H}_S)t/\hbar}\hat{H}_{SR}e^{-i(\hat{H}_R + \hat{H}_S)t/\hbar}. $$ {eq:3.39}
The unitary transformation automatically accounts for the free evolution of the system and reservoir, so that the only remaining dynamics are due to the interactions, i.e.
$$ \frac{d}{dt}\tilde{\rho} = \frac{1}{i\hbar}[\tilde{H}_{SR}, \tilde{\rho}]. $$ {eq:3.40}

Our analysis requires that the interaction be a bilinear product of system and reservoir operators,
$$ \hat{H}_{SR} = \hat{S}\hat{R}^\dagger + \hat{R}\hat{S}^\dagger, $$ {eq:3.41}
where $\hat{S}$ ($\hat{R}$) is a general system (reservoir) operator. In practice, the interaction Hamiltonian may have a sum over such terms: the analysis proceeds in exactly the same manner, and the effects may be accounted for by considering each term of the sum separately and summing at the end. In the interaction picture, we will represent the Hamiltonian by
$$ \tilde{H}_{SR} = \hat{S}\hat{F}_R(t)^\dagger + \hat{F}_R(t)\hat{S}^\dagger, $$ {eq:3.42}
where all the time dependence is explicitly included in the reservoir operator $\hat{F}_R(t)$.

For example, consider the Hamiltonian for a single atom interacting with the radiation field in the Schrodinger picture,
$$ \hat{H}_{SR} = \underbrace{-\sum_j\hbar g_j\hat{a}_j}_{\hat{R}}\underbrace{|2\rangle\langle 1|}_{\hat{S}^\dagger} - \sum_j\hbar g_j^*\hat{a}_j^\dagger|1\rangle\langle 2|, $$ {eq:3.43}
where we can identify the system and reservoir operators appropriate to our more general form of the interaction. Likewise, in the interaction picture

<!-- page 53 -->

the Hamiltonian includes the phase factors associated with free evolution of the system and reservoir:
$$ \tilde{H}_{SR} = \underbrace{-\sum_j\hbar g_j\hat{a}_j e^{-i(\nu_j - \omega)t}}_{\hat{F}_R(t)}\underbrace{|2\rangle\langle 1|}_{\hat{S}^\dagger} - \sum_j\hbar g_j^*\hat{a}_j^\dagger e^{i(\nu_j - \omega)t}|1\rangle\langle 2|, $$ {eq:3.44}
and we incorporate these phase factors into the new reservoir operator $\hat{F}_R(t)$.

In addition to the specified form for the interaction given by Eq. (3.42), our analysis requires two assumptions regarding the nature of the reservoir itself, namely

(1) The reservoir is large (so it is not affected by the system)

(2) The reservoir has a broad bandwidth (so its correlation time is very short^[This relationship between bandwidth and correlation time of the reservoir is often, but not always, true. For example, if the system consists of an ensemble of atoms with spatial extent $L$ larger than the optical wavelength $\lambda_0$, and the environment consists of the electromagnetic field, the correlation time $\tau_c \sim L/c$ corresponds to the time it takes for a photon to leave the medium, since a photon released by one atom can be absorbed by another a time $\tau_c$ later.]).

The first assumption indicates that the reservoir state is not significantly affected by its interaction with the system. Consequently for our analysis we may take the reservoir to be in a stationary (time-independent) state, for example a statistical mixture at some temperature T. The second assumption implies that the correlation time $\tau_c \sim (1/\text{bandwidth})$ for the reservoir is short; in particular, we require that $\tau_c$ be much smaller than the typical timescale $\tau_S$ on which the system evolves. These assumptions together constitute the “Born-Markov Approximation”, and a reservoir which satisfies them is called Markovian.

The effect of the reservoir on the system can be simplified by averaging over a timescale $\Delta t$ which is in between the correlation time and characteristic system evolution time, $\tau_c \ll \Delta t \ll \tau_S$. This approach is akin to perturbation theory in $\tau_c/\tau_S$, and will provide equations of motion for the system reduced density operator which are valid for times greater than $\Delta t$.

Starting from Eq. (3.40), we can formally integrate to obtain the density operator at a later time,
$$ \underbrace{\tilde{\rho}(t + \Delta t) - \tilde{\rho}(t)}_{\Delta\tilde{\rho}} = \frac{1}{i\hbar}\int_t^{t+\Delta t}dt'[\tilde{H}_{SR}(t'), \tilde{\rho}(t')]. $$ {eq:3.45}

<!-- page 54 -->

Expanding
$$ \tilde{\rho}(t') \approx \tilde{\rho}(t) + \frac{1}{i\hbar}\int_t^{t'}dt''[\tilde{H}_{SR}(t''), \tilde{\rho}(t'')], $$ {eq:3.46}
(which is valid since $t' - t < \Delta t$), we obtain
$$ \begin{aligned} \Delta\tilde{\rho} = &\tfrac{1}{i\hbar}\textstyle\int_t^{t+\Delta t}dt'[\tilde{H}_{SR}(t'), \tilde{\rho}(t)] \\ &+ \tfrac{1}{(i\hbar)^2}\textstyle\int_t^{t+\Delta t}dt'\int_t^{t'}dt''[\tilde{H}_{SR}(t'), [\tilde{H}_{SR}(t''), \tilde{\rho}(t'')]]. \end{aligned} $$ {eq:3.47}

Now we trace over the reservoir degrees of freedom to find the change in the system reduced density operator over time $\Delta t$,
$$ \begin{aligned} \Delta\tilde{\rho}_S = &\tfrac{1}{i\hbar}\textstyle\int_t^{t+\Delta t}dt'\ \mathrm{Tr}_R[\tilde{H}_{SR}(t'), \tilde{\rho}(t)] \\ &+ \tfrac{1}{(i\hbar)^2}\textstyle\int_t^{t+\Delta t}dt'\int_t^{t'}dt''\ \mathrm{Tr}_R[\tilde{H}_{SR}(t'), [\tilde{H}_{SR}(t''), \tilde{\rho}(t'')]]. \end{aligned} $$ {eq:3.48}

To proceed we must now make yet another assumption: the initial state is factorizable,
$$ \tilde{\rho}(t) = \tilde{\rho}_S(t) \otimes \tilde{\rho}_R(t). $$ {eq:3.49}
For times shortly thereafter, $t < t' < t + \Delta t$, the total density operator is approximately factorizable with some small correction,
$$ \tilde{\rho}(t') \approx \tilde{\rho}_S(t) \otimes \tilde{\rho}_R(t) + \tilde{\rho}_{corr}(t, t'). $$ {eq:3.50}
Provided that $\Delta t \ll \tau_S$, we can neglect $\tilde{\rho}_{corr}$ in the RHS of Eq. (3.48) to leading order, replacing the total density operator by the product of a system and reservoir density operator.^[The Born approximation is actually slightly stronger than this. It states that the reservoir is large enough that the assumption of factorizability is good at all times as far as calculating the system dynamics is concerned.]

Using the explicit forms for $\tilde{H}_{SR}(t)$ and $\tilde{\rho}(t)$, we will now examine the two terms in Eq. (3.48). The first term, $\Delta\tilde{\rho}_S^{(1)}$, has a straightforward effect on the system,
$$ \Delta\tilde{\rho}_S^{(1)} = \frac{1}{i\hbar}\int_t^{t+\Delta t}dt'\ \mathrm{Tr}_R[\hat{S}\hat{F}_R(t')^\dagger + \hat{F}_R(t')\hat{S}^\dagger, \tilde{\rho}_S(t) \otimes \tilde{\rho}_R(t)] $$ {eq:3.51}
$$ = \frac{1}{i\hbar}\int_t^{t+\Delta t}dt'\ [\hat{S}, \tilde{\rho}_S(t)] \otimes \mathrm{Tr}\{\hat{F}_R(t')^\dagger, \tilde{\rho}_R(t)\} - h.c. $$ {eq:3.52}
$$ = \frac{1}{i\hbar}\int_t^{t+\Delta t}dt'\ [\hat{S}, \tilde{\rho}_S(t)] \otimes \langle\hat{F}_R(t')^\dagger\rangle - h.c. $$ {eq:3.53}

<!-- page 55 -->

$$ = \frac{1}{i\hbar}\int_t^{t+\Delta t}dt'\ [\underbrace{\hat{S}\langle\hat{F}_R(t')^\dagger\rangle + \hat{S}^\dagger\langle\hat{F}_R(t')\rangle}_{\hat{H}_S'}, \tilde{\rho}_S(t)]. $$ {eq:3.54}
Since the reservoir is large and does not change much under the influence of the system, $\langle\hat{F}_R(t')^\dagger\rangle$ is essentially a constant. The effect of the first term may thereby be interpreted an addition to the system Hamiltonian, $\hat{H}_S + \hat{H}_S'$. In many cases including the atom-field interaction, $\langle\hat{F}_R(t')^\dagger\rangle = 0$, and the first term vanishes altogether.

The second term, $\Delta\tilde{\rho}_S^{(2)}$, is responsible for the nontrivial effects of the reservoir. Expanding out the commutators of the interaction Hamiltonian $\tilde{H}_{SR}(t) = \hat{F}_R(t)\hat{S}^\dagger + \hat{F}_R(t)^\dagger\hat{S}$, we find
$$ \begin{aligned} \Delta\tilde{\rho}_S^{(2)} = &\frac{1}{(i\hbar)^2}\int_t^{t+\Delta t}dt'\int_t^{t'}dt''\ \mathrm{Tr}_R[\hat{F}_R(t')\hat{S}^\dagger + \hat{F}_R(t')^\dagger\hat{S}, \\ &[\hat{F}_R(t'')\hat{S}^\dagger + \hat{F}_R(t'')^\dagger\hat{S}, \tilde{\rho}(t'')]] \end{aligned} $$ {eq:3.55}
$$ \begin{aligned} \approx &\frac{1}{(i\hbar)^2}\int_t^{t+\Delta t}dt'\int_t^{t'}dt''\ \mathrm{Tr}_R[\hat{F}_R(t')\hat{S}^\dagger + \hat{F}_R(t')^\dagger\hat{S}, \\ &[\hat{F}_R(t'')\hat{S}^\dagger + \hat{F}_R(t'')^\dagger\hat{S}, \tilde{\rho}_S(t)\tilde{\rho}_R(t)]]. \end{aligned} $$ {eq:3.56}
The integrand can be further expanded out to yield
$$ \begin{aligned} &\mathrm{Tr}_R\left\{\left(\hat{F}_R(t')\hat{S}^\dagger + \hat{F}_R(t')^\dagger\hat{S}\right)\left(\hat{F}_R(t'')\hat{S}^\dagger + \hat{F}_R(t'')^\dagger\hat{S}\right)\tilde{\rho}_S(t)\tilde{\rho}_R(t)\right\} \\ -&\mathrm{Tr}_R\left\{\left(\hat{F}_R(t')\hat{S}^\dagger + \hat{F}_R(t')^\dagger\hat{S}\right)\tilde{\rho}_S(t)\tilde{\rho}_R(t)\left(\hat{F}_R(t'')\hat{S}^\dagger + \hat{F}_R(t'')^\dagger\hat{S}\right)\right\} \\ -&\mathrm{Tr}_R\left\{\left(\hat{F}_R(t'')\hat{S}^\dagger + \hat{F}_R(t'')^\dagger\hat{S}\right)\tilde{\rho}_S(t)\tilde{\rho}_R(t)\left(\hat{F}_R(t')\hat{S}^\dagger + \hat{F}_R(t')^\dagger\hat{S}\right)\right\} \\ +&\mathrm{Tr}_R\left\{\tilde{\rho}_S(t)\tilde{\rho}_R(t)\left(\hat{F}_R(t'')\hat{S}^\dagger + \hat{F}_R(t'')^\dagger\hat{S}\right)\left(\hat{F}_R(t')\hat{S}^\dagger + \hat{F}_R(t')^\dagger\hat{S}\right)\right\} \end{aligned} $$ {eq:3.57}
We will evaluate it in terms of two-time correlation functions of the reservoir operators, defined by
$$ g^{--}(t', t'') = \mathrm{Tr}_R[\hat{F}_R(t')\hat{F}_R(t'')\tilde{\rho}_R] = \mathrm{Tr}_R[\hat{F}_R(t'')\tilde{\rho}_R\hat{F}_R(t')] $$ {eq:3.58}
$$ g^{+-}(t', t'') = \mathrm{Tr}_R[\hat{F}_R(t')^\dagger\hat{F}_R(t'')\tilde{\rho}_R] = \mathrm{Tr}_R[\hat{F}_R(t'')\tilde{\rho}_R\hat{F}_R(t')^\dagger] $$ {eq:3.59}
$$ g^{-+}(t', t'') = \mathrm{Tr}_R[\hat{F}_R(t')\hat{F}_R(t'')^\dagger\tilde{\rho}_R] = \mathrm{Tr}_R[\hat{F}_R(t'')^\dagger\tilde{\rho}_R\hat{F}_R(t')] $$ {eq:3.60}
$$ g^{++}(t', t'') = \mathrm{Tr}_R[\hat{F}_R(t')^\dagger\hat{F}_R(t'')^\dagger\tilde{\rho}_R] = \mathrm{Tr}_R[\hat{F}_R(t'')^\dagger\tilde{\rho}_R\hat{F}_R(t')^\dagger], $$ {eq:3.61}
where the second line when we cyclically permute reservoir operators.

<!-- page 56 -->

Expanding out the integrand 3.57, we obtain
$$ \begin{aligned} &g^{--}(t', t'')\hat{S}^\dagger\hat{S}^\dagger\tilde{\rho}_S(t) + g^{-+}(t', t'')\hat{S}^\dagger\hat{S}\tilde{\rho}_S(t) + g^{+-}(t', t'')\hat{S}\hat{S}^\dagger\tilde{\rho}_S(t) + g^{++}(t', t'')\hat{S}\hat{S}\tilde{\rho}_S(t) \\ -&g^{--}(t'', t)\hat{S}^\dagger\tilde{\rho}_S(t)\hat{S}^\dagger - g^{-+}(t'', t')\hat{S}\tilde{\rho}_S(t)\hat{S}^\dagger - g^{+-}(t'', t')\hat{S}^\dagger\tilde{\rho}_S(t)\hat{S} - g^{++}(t'', t')\hat{S}\tilde{\rho}_S(t)\hat{S} \\ -&g^{--}(t', t'')\hat{S}^\dagger\tilde{\rho}_S(t)\hat{S}^\dagger - g^{-+}(t', t'')\hat{S}\tilde{\rho}_S(t)\hat{S}^\dagger - g^{+-}(t', t'')\hat{S}^\dagger\tilde{\rho}_S(t)\hat{S} - g^{++}(t', t'')\hat{S}\tilde{\rho}_S(t)\hat{S} \\ +&g^{--}(t'', t')\tilde{\rho}_S(t)\hat{S}^\dagger\hat{S}^\dagger + g^{-+}(t'', t')\tilde{\rho}_S(t)\hat{S}^\dagger\hat{S} + g^{+-}(t'', t')\tilde{\rho}_S(t)\hat{S}\hat{S}^\dagger + g^{++}(t'', t')\tilde{\rho}_S(t)\hat{S}\hat{S}. \end{aligned} $$ {eq:3.62}

Noting that
$$ g^{--}(t', t'')^* = \mathrm{Tr}_R[\hat{F}_R(t')\hat{F}_R(t'')\tilde{\rho}_R]^\dagger $$ {eq:3.63}
$$ = \mathrm{Tr}_R[\tilde{\rho}_R\hat{F}_R(t'')^\dagger\hat{F}_R(t')^\dagger] $$ {eq:3.64}
$$ = g^{++}(t'', t') $$ {eq:3.65}
and similarly
$$ g^{+-}(t', t'')^* = \mathrm{Tr}_R[\hat{F}_R(t')^\dagger\hat{F}_R(t'')\tilde{\rho}_R]^\dagger $$ {eq:3.66}
$$ = \mathrm{Tr}_R[\tilde{\rho}_R\hat{F}_R(t'')^\dagger\hat{F}_R(t')] $$ {eq:3.67}
$$ = g^{+-}(t'', t'), $$ {eq:3.68}
we can write the integrand 3.62 in a much more compact form:
$$ \begin{aligned} &g^{--}(t', t'')\left(\hat{S}^\dagger\hat{S}^\dagger\tilde{\rho}_S(t) - \hat{S}^\dagger\tilde{\rho}_S(t)\hat{S}^\dagger\right) + g^{-+}(t', t'')\left(\hat{S}^\dagger\hat{S}\tilde{\rho}_S(t) - \hat{S}\tilde{\rho}_S(t)\hat{S}^\dagger\right) \\ +&g^{+-}(t', t'')\left(\hat{S}\hat{S}^\dagger\tilde{\rho}_S(t) - \hat{S}^\dagger\tilde{\rho}_S(t)\hat{S}\right) + g^{++}(t', t'')\left(\hat{S}\hat{S}\tilde{\rho}_S(t) - \hat{S}\tilde{\rho}_S(t)\hat{S}\right) \\ &+h.c. \end{aligned} $$ {eq:3.69}
This gives us the second term in our equation for $\Delta\tilde{\rho}_S$ in terms of the correlation functions:
$$ \begin{aligned} \Delta\tilde{\rho}_S^{(2)} = &\tfrac{1}{(i\hbar)^2}\textstyle\int_t^{t+\Delta t}dt'\int_t^{t'}dt''\Big(g^{--}(t', t'')\left(\hat{S}^\dagger\hat{S}^\dagger\tilde{\rho}_S(t) - \hat{S}^\dagger\tilde{\rho}_S(t)\hat{S}^\dagger\right) \\ &+g^{-+}(t', t'')\left(\hat{S}^\dagger\hat{S}\tilde{\rho}_S(t) - \hat{S}\tilde{\rho}_S(t)\hat{S}^\dagger\right) + g^{+-}(t', t'')\left(\hat{S}\hat{S}^\dagger\tilde{\rho}_S(t) - \hat{S}^\dagger\tilde{\rho}_S(t)\hat{S}\right) \\ &+g^{++}(t', t'')\left(\hat{S}\hat{S}\tilde{\rho}_S(t) - \hat{S}\tilde{\rho}_S(t)\hat{S}\right) + h.c.\Big). \end{aligned} $$ {eq:3.70}

As an example, we can explicitly evaluate one of these correlators for an environment formed by the radiation field, where
$$ g^{+-}(t', t'') = \hbar^2\sum_{j,k}g_j^* g_k\langle\hat{a}_j^\dagger\hat{a}_k\rangle e^{i(\nu_j - \omega)t' - i(\nu_k - \omega)t''}. $$ {eq:3.71}
If the radiation field is in a thermal state,$\langle\hat{a}_j^\dagger\hat{a}_k\rangle = \delta_{jk}\bar{n}_j$, so the correlator becomes
$$ g^{+-}(t', t'') = \hbar^2\sum_j|g_j|^2\bar{n}_j e^{i(\nu_j - \omega)(t' - t'')}. $$ {eq:3.72}

<!-- page 57 -->

The two time correlation function now depends only on the difference in time, $t'' - t' = \tau$, and it is a sharply peaked function of $\tau$ whose width corresponds to the reservoir correlation time $\tau_c$. In the limit that the radiation field volume $V \to \infty$, $\tau_c \to 0$, we recover the Wigner-Weisskopf approximation for which the correlator is a delta function in time. Note that for the radiation field, $g^{--} = g^{++} = 0$, and $g^{-+}$ is the same as $g^{+-}$ with $\langle\hat{a}_j^\dagger\hat{a}_j\rangle$ replaced by $\langle\hat{a}_j\hat{a}_j^\dagger\rangle = \langle\hat{a}_j^\dagger\hat{a}_j\rangle + 1$. Expressed in terms of correlation functions, the second term becomes
$$ \begin{aligned} \Delta\tilde{\rho}_S^{(2)} = &\tfrac{1}{(i\hbar)^2}\textstyle\int_t^{t+\Delta t}dt'\int_t^{t'}dt''\Big\{g^{+-}(t', t'')\left(\hat{S}\hat{S}^\dagger\tilde{\rho}_S - \hat{S}^\dagger\tilde{\rho}_S\hat{S}\right) \\ &+g^{-+}(t', t'')\left(\hat{S}^\dagger\hat{S}\tilde{\rho}_S - \hat{S}\tilde{\rho}_S\hat{S}^\dagger\right)\Big\} + h.c., \end{aligned} $$ {eq:3.73}
where we have neglected contributions from $g^{--}$ and $g^{++}$. The only significant time dependence enters through the sharply-peaked correlation functions. In the case of the radiation field we may evaluate the inner integral using the same procedure performed in the Wigner Weisskopf approximation, obtaining
$$ -\frac{1}{\hbar^2}\int_t^{t'}dt''g^{+-}(t', t'') = -\sum_j\int_t^{t'}dt'\ |g_j|^2\bar{n}_j e^{i(\omega - \nu_j)(t'' - t')} $$ {eq:3.74}
$$ = -\pi\sum_j|g_j|^2\bar{n}_j\delta(\nu_j - \omega) $$ {eq:3.75}
$$ = -\frac{\gamma}{2}\bar{n}(\omega). $$ {eq:3.76}
Here we have neglected the energy shift arising from the principal part of the integral, because that can be incorporated into the bare system Hamiltonian. As mentioned above, the calculation for $g^{-+}$ proceeds in the same manner, yielding
$$ -\frac{1}{\hbar^2}\int_t^{t'}dt''g^{-+}(t', t'') = -\frac{\gamma}{2}(\bar{n}(\omega) + 1). $$ {eq:3.77}
The remaining integral over $t'$ may be approximated by $\Delta t\cdot$ integrand because $\Delta t$ is now small compared to the time variation of the integrand. Dividing through by $\Delta t$, we obtain a time-averaged differential equation for $\tilde{\rho}_S$:
$$ \frac{\Delta\tilde{\rho}_S}{\Delta t} = -\frac{\gamma}{2}\bar{n}(\omega)\left(\hat{S}\hat{S}^\dagger\tilde{\rho}_S - \hat{S}^\dagger\tilde{\rho}_S\hat{S}\right) - \frac{\gamma}{2}(\bar{n}(\omega) + 1)\left(\hat{S}^\dagger\hat{S}\tilde{\rho}_S - \hat{S}\tilde{\rho}_S\hat{S}^\dagger\right) + h.c. $$ {eq:3.78}

<!-- page 58 -->

This result is known as the “master equation”, and it provides an essential tool for studying the evolution of open systems coupled to Markovian reservoirs. This formalism provides a method to properly treat non-unitary behavior in the system of interest. It can be seen, for example, that Eq. (3.78) preserves the trace of the density matrix ($\mathrm{Tr}\ \dot{\rho} = 0$). While Eq. (3.78) describes a two-level atom interacting with a thermal state of the electromagnetic field, we note that it is possible to derive master equations for other types of interactions as well, *e.g.*, a harmonic oscillator interacting with an environment of other harmonic oscillators.

<!-- notes
- text-layer.md corrected: "under-" / "stand" split across the page 47/48 break joined to "understand".
- 3.3.2 "which correspnds to": the book's typo for "corresponds", kept.
- 3.3.3 "The interaction term $\hat{H}_S R$": the R is printed outside the subscript, the book's typo for $\hat{H}_{SR}$, kept.
- After Eq. (3.61), "where the second line when we cyclically permute reservoir operators": a word is missing (meant: "where the second form follows when we cyclically permute"), kept.
- "If the radiation field is in a thermal state,$\langle\ldots\rangle$": no space after the comma, as printed.
- The numbered items under "Random variables" and "Correlation time", and the two reservoir assumptions, are printed as "(1)", "(2)", "(3)" paragraphs, kept so.
- Eq. (3.23): with $i\hbar\dot{\hat{\rho}}_S$ on the left of (3.22), the right side should be $[\hat{H}_S, \hat{\rho}_S]$; the printed $\frac{1}{i\hbar}$ belongs to $\dot{\hat{\rho}}_S$ alone (compare (3.28)).
- Eq. (3.33): for $\hat{H}_{SR} = \hbar f(t)\hat{S}_z$ the evolution operator is $e^{-i\int_0^t f(t')dt'\hat{S}_z}$; the printed sign is +. (3.34)'s phase $e^{+i\int f}$ for $\hat{S}_+$ in the Heisenberg picture agrees with the correct minus sign in $\hat{U}$.
- "Correlation time": the ensemble average is printed with a bar over $\hat{S}_+$ inside the brackets, $\langle\bar{\hat{S}}_+\rangle$, kept.
- Eq. (3.52): "$\mathrm{Tr}\{\hat{F}_R(t')^\dagger, \tilde{\rho}_R(t)\}$" prints a comma (and no subscript R on Tr) where the product $\mathrm{Tr}_R\{\hat{F}_R(t')^\dagger\tilde{\rho}_R(t)\}$ is meant, kept.
- Eq. (3.54): the bracket below the system operator labels it $\hat{H}_S'$; meant as $\hbar$ times that combination, consistent with the commutator prefactor. Kept, not flagged as an error with certainty.
- Eq. (3.62), second row: the first correlator is printed $g^{--}(t'', t)$; meant is $g^{--}(t'', t')$ like the rest of the row.
- Eq. (3.70): the second row runs past the right margin on the page, cut after "$-\hat{S}^\dagger\tilde{\rho}_S$"; it is completed here as "$(t)\hat{S}\right)$" from the identical term in (3.69).
- Eq. (3.74): the integration variable on the right is printed $dt'$; meant is $dt''$ (the integral is over $t''$ from $t$ to $t'$).
- Eq. (3.72) and following: the text says the correlator depends on $t'' - t' = \tau$; (3.72) prints $(t' - t'')$; only the sign convention of $\tau$ differs, kept.
- "Tr $\dot{\rho} = 0$": the book prints $\rho$ without hat or tilde, kept.
-->

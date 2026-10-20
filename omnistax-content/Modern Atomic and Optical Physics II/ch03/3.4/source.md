# 3.4 The master equation

<!-- page 58 -->

## 3.4.1 Remarks on the generalized master equation

In the previous lecture we derived the equation governing the evolution of an open system coupled to a Markovian reservoir. In the Schrodinger picture, this so-called master equation takes the form
$$ \begin{aligned} \tfrac{\Delta\hat{\rho}_S}{\Delta t} = &-\textstyle\sum_p\tfrac{\gamma_p}{2}\bar{n}\left(\hat{S}_p\hat{S}_p^\dagger\hat{\rho}_S - \hat{S}_p^\dagger\hat{\rho}_S\hat{S}_p\right) + h.c. \\ &-\textstyle\sum_p\tfrac{\gamma_p}{2}(\bar{n} + 1)\left(\hat{S}_p^\dagger\hat{S}_p\hat{\rho}_S - \hat{S}_p\hat{\rho}_S\hat{S}_p^\dagger\right) + h.c. \\ &+\tfrac{1}{i\hbar}[\hat{H}_S, \hat{\rho}_S]. \end{aligned} $$ {eq:3.79}
The system time dependence is built into the last term, and we have included a sum over different interactions with the reservoir. Explicitly, the system-reservoir interaction takes the form $\hat{H}_{SR} = \sum_p\hat{S}_p\hat{R}_p^\dagger + h.c.$, and each term has its associated rate $\gamma_p$. In order to incorporate multiple system-reservoir interaction terms, we implicitly make an assumption that the different terms are incoherent, so that the interference between them vanishes. While this requirement is satisfied most of the time, one should bear in mind that there exist cases where such interference is important.

Although Eq. (3.79) allows us to efficiently account for the effects of the reservoir, this added information comes with a computational price. Suppose that we are interested in studying the dynamics of an isolated $n$-level system. In the wavefunction approach, evolution of this system is governed by $n$ differential equations for the state amplitudes $\{c_i(t)\}$. When the effect of the environment is included, the system must be described by the $\mathcal{O}(n^2)$ differential equations comprising Eq. (3.79). The large number of equations can complicate the mathematics, and we will frequently need more sophisticated tools to extract a solution.

<!-- page 59 -->

One more caveat deserves attention: In our previous derivation, we assumed that the state of the universe was factorizable, i.e.
$$ \tilde{\rho}(t') \approx \tilde{\rho}_S(t) \otimes \tilde{\rho}_R(t), $$ {eq:3.80}
where $t' - t \leq \Delta t$. We made this statement with little justification, but we will now show that our assumption is valid for a reservoir with no memory, $\tau_c = 0$.

Suppose that the system and reservoir do not interact until a time $t = t_i$, so that for all times prior to $t_i$ the universe density operator is factorizable. At some time $t > t_i$, we may certainly write
$$ \tilde{\rho}(t) = \tilde{\rho}_S(t_i) \otimes \tilde{\rho}_R(t_i) + \tilde{\rho}_{corr}(t_i, t) $$ {eq:3.81}
where $\tilde{\rho}_{corr}(t_i, t)$ depends on the correlations built up between the system and the reservoir *prior* to the time interval $t \to t + \Delta t$ for which we calculated the correlations. We will use perturbation theory to estimate the contributions to $\Delta\hat{\rho}_S = \tilde{\rho}_S(t + \Delta t) - \tilde{\rho}_S(t)$ which we neglected by setting $\tilde{\rho}_{corr}(t_i, t) = 0$. To leading order,
$$ \tilde{\rho}_{corr}(t_i, t) \approx \frac{1}{i\hbar}\int_{t_i}^t[\tilde{H}_{SR}(t'), \tilde{\rho}_S(t_i) \otimes \tilde{\rho}_R(t_i)], $$ {eq:3.82}
so that the neglected change in the system density operator is
$$ \Delta\tilde{\rho}_S \propto \int_{t_i}^t dt'\int_t^{t+\Delta t}dt''\underbrace{\langle\tilde{H}_{SR}(t'')\tilde{H}_{SR}(t')\rangle}_{\propto\ \delta(t'' - t')}. $$ {eq:3.83}
Recall that the time correlation function for a reservoir with no memory is a delta function; since the time intervals for integration do not overlap, the delta function is zero everywhere within the region of integration. The contributions to $\Delta\hat{\rho}_S$ due to $\tilde{\rho}_{corr}(t_i, t)$ thus vanish to leading order (and all higher orders) for $\tau_c = 0$. In fact, a more rigorous analysis shows that the corrections scale as $\tau_c^2$.

We have now shown that a reservoir with no memory has a local interaction with the system; that is, it immediately forgets about all previous correlations and depends only on the current state. This amnesia implies irreversibility since information is lost (so entropy must increase). For practical purposes, irreversible vs. reversible dynamics will provide our boundary between system and environment. Any part of the environment which exhibits time reversibility we will include in the system even if we are not explicitly interested in its evolution.

<!-- page 60 -->

We have highlighted two situations where the master equation may not suffice: (1) when there is interference between different interaction terms and (2) when the reservoir interaction is reversible. A more thorough discussion of the assumptions and approximations implicit in the master equation may be found in, *e.g.*, Cohen-Tannoudji *et al.*, “Atom-Photon Interactions”.

## 3.4.2 Example: The two-level atom

The master equation is frequently used to describe the evolution of a driven two-level system coupled to a dissipative environment. The coherent interaction with the driving field takes the form
$$ \hat{H}_S = -\hbar\delta|2\rangle\langle 2| + \hbar\Omega^*|1\rangle\langle 2| + \hbar\Omega|2\rangle\langle 1|, $$ {eq:3.84}
while the reservoir effects enter the density matrix equation:
$$ \begin{aligned} \tfrac{\Delta\hat{\rho}_S}{\Delta t} = &-\tfrac{\gamma}{2}(\bar{n} + 1)\left(\sigma_{22}\hat{\rho}_S - \sigma_{12}\hat{\rho}_S\sigma_{21}\right) + h.c. \\ &-\tfrac{\gamma}{2}\bar{n}\left(\sigma_{11}\hat{\rho}_S - \sigma_{21}\hat{\rho}_S\sigma_{12}\right) + h.c. \\ &+\tfrac{1}{i\hbar}[\hat{H}_S, \hat{\rho}_S], \end{aligned} $$ {eq:3.85}
where we have used $\hat{S} = |1\rangle\langle 2| = \sigma_{12}$ in Eq. (3.79), and $\sigma_{ij} = |i\rangle\langle j|$. Taking the matrix elements $\langle i|\frac{\Delta\hat{\rho}_S}{\Delta t}|j\rangle = \dot{\rho}_{ij}$ yields four differential equations for the components of the density matrix,
$$ \dot{\rho}_{22} = -\gamma(\bar{n} + 1)\rho_{22} + \gamma\bar{n}\rho_{11} + i\Omega^*\rho_{21} - i\Omega\rho_{12} $$ {eq:3.86}
$$ \dot{\rho}_{11} = \gamma(\bar{n} + 1)\rho_{22} - \gamma\bar{n}\rho_{11} - i\Omega^*\rho_{21} + i\Omega\rho_{12} $$ {eq:3.87}
$$ \dot{\rho}_{12} = -\frac{\gamma}{2}(2\bar{n} + 1)\rho_{12} - i\delta\rho_{12} - i\Omega^*(\rho_{22} - \rho_{11}) $$ {eq:3.88}
$$ \dot{\rho}_{21} = -\frac{\gamma}{2}(2\bar{n} + 1)\rho_{21} + i\delta\rho_{21} + i\Omega(\rho_{22} - \rho_{11}). $$ {eq:3.89}
These equations are known as the “optical Bloch equations.” Note that only two of these equations are independent, since the evolution equations must preserve probability, $\rho_{11} + \rho_{22} = \mathrm{Tr}[\hat{\rho}_S] = 1$, and hermiticity, $\rho_{12} = \rho_{21}^*$.

Three types of processes contribute to the system evolution described by Eq. (3.89):

(1) coherent driving $\propto \Omega$,

(2) thermal photons $\propto \gamma\bar{n}$, and

(3) spontaneous emission $\propto \gamma$.

Coherent interactions are characteristic of the ideal two-level system introduced in previous lectures, and come from the system Hamiltonian terms.

<!-- page 61 -->

Thermal photons lead to incoherent transitions in *both* directions, whereas spontaneous emission only allows population in $\rho_{22}$ to leak into $\rho_{11}$:
$$ \dot{\rho}_{22} = \gamma\bar{n}(\rho_{11} - \rho_{22}) - \gamma\rho_{22} + \ldots $$ {eq:3.90}
$$ \dot{\rho}_{11} = \gamma\bar{n}(\rho_{22} - \rho_{11}) + \gamma\rho_{22} + \ldots $$ {eq:3.91}

Although incoherent processes can increase and decrease the populations $\rho_{11}$ and $\rho_{22}$, they only decrease the off-diagonal terms. The decay rate of the coherences $\gamma_{12}$ (defined through $\dot{\rho}_{12} = -\gamma_{12}\rho_{12} + \cdots$) is related to the rate of population decay out of state $|1\rangle$, $\gamma_1 = \gamma\bar{n}$, and $|2\rangle$, $\gamma_2 = \gamma(\bar{n} + 1)$, by
$$ \gamma_{12} = \frac{\gamma_1 + \gamma_2}{2} = \frac{2\bar{n} + 1}{2}\gamma = \gamma_{21}. $$ {eq:3.92}
For multi-level atoms, this relation holds for any two states and their associated coherence, and only depends on the rates out of the states, not into them.

While we see that there is a coherence decay rate associated with population decay, in general there also exist processes which decrease the coherences without affecting the populations. These are typically incorporated phenomenologically into the master equation by setting
$$ \gamma_{12} = \gamma_{21} = \frac{\gamma_1 + \gamma_2}{2} + \gamma_d, $$ {eq:3.93}
where $\gamma_d$ is the so-called decoherence or dephasing rate. Such decoherence can result from a variety of sources including, for example, finite linewidth of an applied laser field or atom-atom interactions.

## 3.4.3 Atomic response to a resonant field

We will consider two special cases to gain physical insight into the dynamics of an atom as it undergoes simultaneous coherent and incoherent pumping.

### Weak applied field

For sufficiently small applied fields $\Omega$, the master equation can be treated perturbatively. Since the populations change by terms $\propto \Omega^2$, to lowest order we may set $\rho_{11} \approx \rho_{11}^{(0)} + O(\Omega^2)$, $\rho_{22} \approx \rho_{22}^{(0)} + O(\Omega^2)$, and consider only the evolution of the coherences,
$$ \dot{\rho}_{21} \approx -(\gamma_{21} - i\delta)\rho_{21} + i\Omega(\rho_{22}^{(0)} - \rho_{11}^{(0)}). $$ {eq:3.94}

<!-- page 62 -->

Since this equation is now linear in $\Omega$, we may solve it by taking the Fourier transform of $\rho_{21}$ and $\Omega$,
$$ \rho_{21}(t) = \int d(\delta\nu)e^{-i\delta\nu t}\rho_{12}(\delta\nu) $$ {eq:3.95}
$$ \Omega(t) = \int d(\delta\nu)e^{-i\delta\nu t}\Omega(\delta\nu). $$ {eq:3.96}
With this substitution, we find that in the weak field limit the coherence at frequency $\delta\nu$ is a Lorentzian with effective detuning $\delta + \delta\nu$:
$$ \rho_{21}(\delta\nu) = \Omega(\delta\nu)\frac{i(\rho_{22}^{(0)} - \rho_{11}^{(0)})}{\gamma_{21} - i(\delta + \delta\nu)}. $$ {eq:3.97}
This approach may be generalized to multilevel atoms, so that
$$ \rho_{ij}(\delta\nu) = \Omega_{ij}(\delta\nu)\frac{i(\rho_{ii}^{(0)} - \rho_{jj}^{(0)})}{\gamma_{ij} - i(\delta_{ij} + \delta\nu)}, $$ {eq:3.98}
whenever the populations $\rho_{ii}$ and $\rho_{jj}$ are essentially frozen in time. For atoms approximately in the ground state ($\rho_{11}^{(0)}\approx 1, \rho_{22}^{(0)}\approx 0$), the atomic response resembles that of a classical dipole, as the atom acquires a dipole moment linear in the field strength. On the other hand, for sufficiently large $\Omega$ the quantized nature of the atom becomes important. In this case the population in the upper state cannot be neglected and leads to effects like non-linearity of the atomic response and saturation.

### Continuous-wave fields of arbitrary strength

When the applied field is constant in time, we expect that the system will undergo Rabi oscillations which are damped by the reservoir interaction. The decay terms drive the system into an equilibrium state after a time $\propto 1/\gamma_{21}$, and a steady-state description of the system is easily found by setting the time derivative of its density matrix elements to zero. Solving for the coherence,
$$ \dot{\rho}_{21} = 0 \Rightarrow \rho_{21} = \frac{i\Omega(\rho_{22} - \rho_{11})}{\gamma_{21} - i\delta} $$ {eq:3.99}
we then find the steady state population (for $\bar{n} = 0$)
$$ \rho_{22} = \frac{R_{opt}}{\gamma + 2R_{opt}}, $$ {eq:3.100}

<!-- page 63 -->

where
$$ R_{opt} = 2\gamma_{21}\left|\frac{\Omega}{\Gamma_{21}}\right|^2 $$ {eq:3.101}
and $\Gamma_{21} = \gamma_{21} - i\delta$. $R_{opt}$ acts like an incoherent pumping rate associated with the applied (coherent) field.

The pumping rate $R_{opt}$ determines two important limits:
$$ R_{opt} \ll \gamma \quad \Rightarrow \quad \rho_{22} \to 0 $$ {eq:3.102}
$$ R_{opt} \gg \gamma \quad \Rightarrow \quad \rho_{22} \to \frac{1}{2}. $$ {eq:3.103}
In the first case, the coherent field is weak, so that the atom ends up in the ground state with almost unit probability. More specifically it can be seen that the population in the excited state is proportional to the field intensity in this limit ($\rho_{22} \propto |\Omega|^2$), and the perturbative weak-field approach is valid. In the second case the applied field leaves the atom in a statistical mixture of the ground and excited states with equal weight, and the atomic response is said to be saturated.

Note that the weak-field limit is sufficient but not necessary to disregard evolution of the coherences (*i.e.*, to set $\dot{\rho}_{21} \approx 0$); it is only required that $|\Omega|^2 \ll \gamma_{21}^2 + \delta^2$. The solution to $\rho_{21}$ given by Eq. (3.99) is analogous to making an adiabatic approximation that the coherences adiabatically follow the population difference. Another way of saying this is that in the limit $|\Omega|^2 \ll \gamma_{21}^2 + \delta^2$, the populations change on a time scale much slower than the natural decay/oscillation time of the coherence. The resulting equations for the populations,
$$ \dot{\rho}_{22} = -\gamma\rho_{22} + R_{opt}(\rho_{11} - \rho_{22}) \ \text{ with } \ \dot{\rho}_{11} = -\dot{\rho}_{22}, $$ {eq:3.104}
are known as the “rate equations.” They apply in situations when a coherence $\rho_{21}$ is present, but its dynamics are unimportant. For example, the rate equations can be used to describe an atom interacting with incoherent radiation, since $\gamma_{21}$ is very large in this case due to dephasing.

<!-- notes
- text-layer.md corrected: "$et al.$ ," (the italic words taken as maths) to "et al.,".
- The three process types after Eq. (3.89) are printed as indented "(1)", "(2)", "(3)" lines, kept so.
- "3.4.2 Example: The two-level atom" is a section heading, not wrapped as an example.
- 3.4.1 "$\Delta\hat{\rho}_S = \tilde{\rho}_S(t + \Delta t) - \tilde{\rho}_S(t)$" and "contributions to $\Delta\hat{\rho}_S$": the left side carries a hat where the right side and (3.83) carry tildes, kept.
- Eq. (3.82): the integral is printed without its $dt'$, kept.
- "Three types of processes contribute to the system evolution described by Eq. (3.89)": the processes appear across the whole set (3.86)-(3.89), and spontaneous emission and thermal photons are most visible in the population equations; meant is Eqs. (3.86)-(3.89).
- Eq. (3.95): the transform of $\rho_{21}(t)$ is printed with $\rho_{12}(\delta\nu)$ in the integrand; meant is $\rho_{21}(\delta\nu)$, as (3.97) uses.
- "$O(\Omega^2)$" in the weak-field paragraph is an italic O, while 3.4.1 prints a calligraphic $\mathcal{O}(n^2)$; both kept.
-->

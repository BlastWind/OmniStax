# 9.3 The effects of dissipation on quantum fields

We have seen that linear transformations of coherent states retain their classical nature, but nonlinear interactions lead to highly nontrivial quantum states of the radiation field. Nevertheless, experience tells us that the real world is both nonlinear and classical. To understand how and why this happens, we will have to consider the effects of dissipation on quantum fields.

<!-- page 184 -->

> FIGURE {fig:9.4} src=../../media/ch09/fig-9-4.png
> caption: A phase space depiction of the field state $\sim |i\alpha\rangle - |-i\alpha\rangle$ near $\tau_{Revival}/2$.

The beamsplitter provides an intuitive and simple model for loss. A signal incident on a beamsplitter is attenuated by its transmission amplitude $t$; simultaneously, the vacuum field incident on the other port introduces fluctuations so that the output field is
$$ \hat{a}_\mathrm{out} = t\hat{a}_\mathrm{in} + i\sqrt{1-|t|^2}\hat{b}_\mathrm{vac}. $$ {eq:9.80}
If the signal starts out in a coherent state $|\alpha\rangle$, the transmitted field will also be a coherent state $|t\alpha\rangle$. But this is not true for arbitrary quantum states. For example, an incident Fock state will no longer be in a Fock state after interaction with the beamsplitter.

## 9.3.1 Dynamics of a single mode field in a lossy cavity

We now wish to consider the effects of dissipation on quantum fields in greater detail. For simplicity, we will focus here on single-mode fields such as those in an optical cavity. However, we will treat a more realistic scenario in which the cavity is not perfect but is coupled to the outside world.

The beamsplitter model can be used to understand dissipation in a cavity formed by one partially transmitting mirror. Initially, we will consider only classical loss, and neglect the associated quantum noise.

<!-- page 185 -->

> FIGURE {fig:9.5} src=../../media/ch09/fig-9-5.png
> caption: A beamsplitter model for loss.

> FIGURE {fig:9.6} src=../../media/ch09/fig-9-6.png
> caption: Model used to analyze dissipation in a lossy cavity.

<!-- page 186 -->

### Classical evolution

The classical evolution equation for the intra-cavity field can be found by calculating the change in $E$ during one round trip,
$$ E(t+\Delta t) = tE_\mathrm{in}(t) + rE(t), $$ {eq:9.81}
where $t$ and $r$ are the transmission and reflection coefficients for the left-hand mirror, and $\Delta t = 2L/c$ is the roundtrip time, and $E_\mathrm{in}(t)$ is the field incident on the cavity. Converting this difference equation into a differential equation,
$$ \frac{E(t+\Delta t) - E(t)}{\Delta t} \to \frac{d}{dt}E(t), $$ {eq:9.82}
we find
$$ \frac{d}{dt}E(t) = -\frac{(1-r)c}{2L}E(t) + \frac{tc}{2L}E_\mathrm{in}(t). $$ {eq:9.83}
For a perfect mirror, $r^2 + t^2 = 1$, so we can write the cavity loss rate in the limit $t \ll 1$ as
$$ \kappa = \frac{2c(1-r)}{2L} \approx \frac{t^2 c}{2L}. $$ {eq:9.84}
Here we have used $t^2 = 1 - r^2 \approx 2(1-r)$. The evolution equation then becomes
$$ \frac{d}{dt}E(t) = -\frac{\kappa}{2}E(t) + \sqrt{\frac{\kappa c}{2L}}E_\mathrm{in}(t). $$ {eq:9.85}

The cavity response function can be found by transforming the evolution equation into the Fourier domain. The cavity lineshape is Lorentzian, with width given by the cavity loss rate:
$$ E(\omega) = \frac{\sqrt{\kappa c/2L}}{\kappa/2 - i\omega}E_\mathrm{in}(\omega). $$ {eq:9.86}

The field evolution will be modified by the atomic polarization induced if any medium is present inside the cavity. By projecting Maxwell's equations into the cavity mode (i.e. disregarding terms $\sim dE/dz$ for a slowly varying amplitude), we find that the cavity field evolves as
$$ \frac{d}{dt}E(t) = -\frac{\kappa}{2}E(t) + \sqrt{\frac{\kappa c}{2L}}E_\mathrm{in}(t) + \frac{i\bar{\nu}P}{2\epsilon_0}, $$ {eq:9.87}
where $\bar{\nu}$ is the center frequency of the cavity resonance.

<!-- page 187 -->

The output field is given by the sum of the reflected input field and the transmitted cavity field,
$$ E_\mathrm{out} = -rE_\mathrm{in} + tE. $$ {eq:9.88}
This equation is known as an “input-output relationship”, and a good reference on a semiclassical analysis of electromagnetic fields in a cavity can be found in Sargent, Scully, and Lamb, “Laser Physics”.

## 9.3.2 Quantum mechanical treatment of the cavity mode

We can adapt the classical evolution equation to a quantum description simply by replacing the cavity field $E$ by the cavity photon annihilation operator $\hat{a}$ and accounting for noise associated with the cavity decay rate $\kappa$. If the input field vanishes, then the evolution equation becomes
$$ \frac{d}{dt}\hat{a} = \frac{-\kappa}{2}\hat{a} + \hat{\mathcal{F}}. $$ {eq:9.89}
In principle, we could use the quantum fluctuation-dissipation theorem to determine the properties of the noise operator $\hat{\mathcal{F}}$. Instead, we proceed to highlight the physical origin of the fluctuations by introducing a microscopic model of noise. The noise we are adding in fact looks very much like the input field terms we neglected in Eq. (9.89), where we now account for the exterior vacuum field leaking into the cavity via the partially transmitting mirror.

### Microscopic noise model

Our microscopic noise model will account for interactions between the quantum cavity field and its environment of continuum modes. Imperfect mirrors provide coupling between the cavity and reservoir, since cavity photons can leak out and reservoir photons can leak in. In the interaction picture, the effective Hamiltonian for the system-reservoir interaction can be written
$$ \hat{V}_{SR} = i\hbar\sum_k t_k \hat{a}\hat{a}_k^\dagger e^{-i(\nu-\nu_k)t} + h.c., $$ {eq:9.90}
where $\nu$ is the cavity frequency, $\hat{a}_k$ is a continuum mode of frequency $\nu_k$, and the coupling coefficient $t_k$ between the cavity mode and $\hat{a}_k$ is determined by the transmission properties of the mirrors forming the cavity. When the environment is large and has a broad bandwidth, this interaction Hamiltonian is mathematically equivalent to the model of atomic spontaneous emission considered earlier. To make the connection with our formal approach, we identify the system and reservoir operators
$$ \hat{S} = \hat{a} $$ {eq:9.91}
$$ \hat{R}^\dagger = i\hbar\sum_k t_k \hat{a}_k^\dagger. $$ {eq:9.92}

<!-- page 188 -->

Using the general reservoir theory we developed earlier, we can immediately write down the decay rate and noise operator in terms of microscopically defined quantities.^[For further details, the derivation of the cavity input/output relations was first given in Phys. Rev. A **31**, 3761 (1985) by Gardiner and Collett.] To review briefly, the equation of evolution of the reservoir field can be formally integrated to give, in a properly rotating frame,
$$ a_k(t) = e^{i(\nu-\nu_k)t}a_k(0) + t_k\int_0^t dt'\, e^{i(\nu-\nu_k)(t-t')}a(t'), $$ {eq:9.93}
while substituting this back into the equation of motion for $a(t)$ gives
$$ \dot{a}(t) = -\sum_k t_k e^{i(\nu-\nu_k)t}a_k(0) - |t_k|^2\int_0^t dt'\, a(t')e^{i(\nu-\nu_k)(t-t')}. $$ {eq:9.94}
Making the Wigner-Weisskopf approximation, we find that
$$ \dot{a}(t) \approx -\frac{\kappa}{2}a(t) + \hat{\mathcal{F}}(t), $$ {eq:9.95}
where
$$ \kappa = 2\pi\sum_k |t_k|^2\delta(\nu-\nu_k) = 2\pi|t_k|^2 D(\nu) $$ {eq:9.96}
$$ \hat{\mathcal{F}} = -\sum_k t_k\hat{a}_k(0)e^{i(\nu-\nu_k)t}. $$ {eq:9.97}

Armed with such expressions, we can easily calculate the relevant correlation functions for the noise operator. For example, if the environment is in a thermal state with photon number $n$ at frequency $\nu$,
$$ \langle\hat{\mathcal{F}}(t)\hat{\mathcal{F}}^\dagger(t')\rangle = (n+1)\kappa\delta(t-t') $$ {eq:9.98}
$$ \langle\hat{\mathcal{F}}^\dagger(t)\hat{\mathcal{F}}(t')\rangle = n\kappa\delta(t-t'). $$ {eq:9.99}

The microscopic noise model provides a physical picture for the origin of fluctuations and dissipation. The partially transmitting mirrors allow the cavity field to leak out (leading to decay), but also allow the continuum modes to leak in (leading to noise). Using the relationship $t_k = (\kappa/2\pi D(\nu))^{1/2}$, the noise operator is given by
$$ \hat{\mathcal{F}}(t) = -\sqrt{\frac{\kappa}{D(\nu)}}\hat{E}_\mathrm{in}(t), $$ {eq:9.100}
where we have defined the input field
$$ \hat{E}_\mathrm{in}(t) = \sqrt{\frac{1}{2\pi}}\sum_k e^{i(\nu-\nu_k)t}a_k(0). $$ {eq:9.101}

<!-- page 189 -->

We used a Heisenberg-Langevin method to describe the quantum mechanical cavity evolution, but the master equation provides an equivalent alternative approach. If we again identify the system operator $\hat{S} = \hat{a}$, the system density operator obeys the master equation
$$ \frac{d}{dt}\hat{\rho} = -\frac{\kappa}{2}(n+1)\left(\hat{a}^\dagger\hat{a}\rho - \hat{a}\rho\hat{a}^\dagger\right) - \frac{\kappa}{2}n\left(\rho\hat{a}\hat{a}^\dagger - \hat{a}^\dagger\rho\hat{a}\right) + h.c. $$ {eq:9.102}
which can be used to describe the cavity loss and associated fluctuations.

:::example {ex:9.3-1} Example: Coherent state

Suppose that the cavity field is initially in a coherent state $|\alpha\rangle$, and the radiation bath is initially in the vacuum state. Since a coherent cavity state corresponds to the quantum description of a classical field, one might expect it to remain a classical field as the cavity mode decays. Formally integrating the equation of motion, we find
$$ \hat{a}(t) = e^{-\kappa t/2}\hat{a}(0) + \int_0^t \hat{\mathcal{F}}(t')e^{-\kappa(t-t')/2}dt'. $$ {eq:9.103}
The classical coherence decays exponentially in time, following the electric field amplitude decay
$$ \langle\hat{a}(t)\rangle = e^{-\kappa t/2}\langle\hat{a}(0)\rangle. $$ {eq:9.104}
To verify that we are indeed in a coherent state, we should examine the quadrature components^[More directly, one can examine the initial state $|\alpha\rangle|0\rangle_r$, where $|0\rangle_r$ refers to the reservoir in the vacuum state. It can be readily seen that $$ \hat{a}(t)|\alpha\rangle|0\rangle_r = e^{-\kappa t/2}\alpha|\alpha\rangle|0\rangle_r, $$ {eq:9.105} such that the state at later times corresponds to a coherent state $|\alpha e^{-\kappa t/2}\rangle$.]
$$ \hat{x}(t) = \hat{x}(0)e^{-\kappa t/2} + \int_0^t\left(\frac{\hat{\mathcal{F}}(t') + \hat{\mathcal{F}}^\dagger(t')}{\sqrt{2}}\right)e^{-\kappa(t-t')/2} $$ {eq:9.106}
<!-- page 190 -->
$$ \Rightarrow \langle\delta\hat{x}^2(t)\rangle = \langle\delta\hat{x}^2(0)\rangle e^{-\kappa t} + \frac{1}{2}\left(1 - e^{-\kappa t}\right). $$ {eq:9.107}

Since the coherent state initially has $\langle\delta\hat{x}^2(0)\rangle = 1/2$, $\langle\delta\hat{x}^2(t)\rangle$ remains $1/2$ at all times. A similar calculation for the momentum quadrature component yields the same result, indicating that the cavity mode remains in a coherent state $\langle\delta\hat{x}^2(t)\rangle = \langle\delta\hat{p}^2(t)\rangle = 1/2$ as the system evolves, though the mean number of photons (and thus the coherent state amplitude $\alpha$) decays with time.

:::

### Quantum field evolution

Whereas we found that coherent states retain their classical coherence despite cavity loss, a general quantum state will change character as the cavity field dissipates. Our derivation of the quadrature operators in Eq. (9.107) did not depend on the initial state, so at long times we obtain $\langle\delta\hat{x}^2(t)\rangle = \langle\delta\hat{p}^2(t)\rangle = 1/2$ no matter the initial quadrature components. Consequently initially squeezed quantum states lose their nonclassical coherence properties due to the cavity decay.

In general, a process for generating nonclassical states will have to compete with dissipation. We have seen, for example, that nonclassical states can arise from single-mode light interacting with a nonlinear medium (such as a two-level atom) when we neglect dissipation. When we include both the atom interaction with the unconfined radiation modes and the cavity mode interaction with the continuum, we will find that the resulting dissipation acts to wash out any non-classical correlations.

The appropriate theoretical approach depends on some details of the system under consideration. For example, in the limit of strong fields interacting with many atoms, the dynamics should be nearly classical. It thus makes sense to use the Heisenberg-Langevin approach, which explicitly shows the correspondence to classical dynamics. The interaction with the atoms gives us a driving term in the cavity mode evolution,
$$ \frac{d}{dt}\hat{a} = -\frac{\kappa}{2}\hat{a} + \hat{\mathcal{F}} + i\sum_j g_j^*\hat{\sigma}_{\alpha,\beta}, $$ {eq:9.108}
which describes the quantum mechanical analogue of the polarization of the medium. Such evolution equations are typically nonlinear, and are generally impossible to solve, except for some special cases. As an example, we will consider squeezed light generation.

At the same time, in the situation when only a few photons or a few atoms are present, the stochastic wavefunction approach or master equation often prove more convenient. For example, these types of systems with few photons and atoms arise in quantum state engineering in cavity quantum electrodynamics or with trapped ions.

<!-- page 191 -->

## 9.3.3 Cavity quantum electrodynamics

Cavity quantum electrodynamics (CQED) provides another important example of a system where dissipation and quantum effects both play an important role. Unlike squeezed light generation, which described properties of macroscopic fields interacting with many atoms, CQED typically represents a small system with few photons interacting with a single atom. Our discussion of CQED will thus provide an example of an exact approach to treat small systems.

The physical system under consideration consists of a single two-level atom with levels $|1\rangle$ and $|2\rangle$ coupled to a single-mode cavity at rate $g$. In addition to the coherent evolution we considered in previous lectures, we will also incorporate two dissipative rates: The atom emits into free space modes (other than the cavity mode) at rate $\gamma$, while photons leak out of the cavity at rate $\kappa$.

> FIGURE {fig:9.7} src=../../media/ch09/fig-9-7.png
> caption: The system-reservoir division for cavity quantum electrodynamics. The quantum field in the cavity is treated as part of the total system, and it decays to a reservoir of modes corresponding to the leak out of the cavity. The atom reservoir corresponds to a different set of free space modes, into which the atom can decay directly.

<!-- page 192 -->

### Open vs closed cavities

In practice, it is useful to distinguish two situations. The open cavity regime describes a cavity mode confined in one dimension, with cavity length much greater than the wavelength $L \gg \lambda$. This regime typically occurs for CQED at optical frequencies, where a Fabry-Perot type cavity is employed to confine the light. The spontaneous emission rate $\gamma$ for an atom in an open cavity is close to its free-space decay rate, since it can easily interact with free-space modes unconfined in the two directions orthogonal to the cavity mode.

The closed cavity confines the field in all three spatial dimensions, with length scales close to the wavelength $L \sim \lambda$. Such cavities can be constructed for microwave frequencies, with wavelengths on the order of millimeters to centimeters. An atom in a closed cavity can only interact with a small number of cavity modes, so its spontaneous emission rate can be strongly suppressed relative to the free space emission rate.

### Theoretical formulation

To account for the two dissipation mechanisms $\kappa, \gamma$, we will need to incorporate both types of decay into the master equation
$$ \begin{aligned} \dot{\hat{\rho}} &= -\tfrac{i}{\hbar}[\hat{H},\hat{\rho}] - \tfrac{\kappa}{2}\left(\hat{a}^\dagger\hat{a}\hat{\rho} + \hat{\rho}\hat{a}^\dagger\hat{a} - 2\hat{a}\hat{\rho}\hat{a}^\dagger\right) \\ &\quad - \tfrac{\gamma}{2}\left(\hat{\sigma}_{21}\hat{\sigma}_{12}\hat{\rho} + \hat{\rho}\hat{\sigma}_{21}\hat{\sigma}_{12} - 2\hat{\sigma}_{12}\hat{\rho}\hat{\sigma}_{21}\right). \end{aligned} $$ {eq:9.109}
Note that the density operator here includes both the atom and the cavity mode degrees of freedom since it represents the total system.

The coherent evolution is described by a Jaynes-Cummings Hamiltonian which couples the atomic operators $\hat{\sigma}_{ij}$ to the cavity mode $\hat{a}$
$$ \hat{H} = \hbar\delta\hat{a}^\dagger\hat{a} + \hbar g\hat{a}^\dagger\hat{\sigma}_{12} + \hbar g^*\hat{a}\hat{\sigma}_{21}, $$ {eq:9.110}
where we are working in the frame rotating with the atomic transition frequency $\omega$, and $\delta$ is the detuning of the cavity mode $\delta = \nu - \omega$. Since we want to consider quantum states with few photons in the cavity, the natural basis states for the problem are Fock states of the cavity mode and the bare atomic states:
$$ \{|1\rangle_a|n\rangle, |2\rangle_a|n\rangle\}. $$ {eq:9.111}
Each pair of states $\{|1\rangle_a|n\rangle, |2\rangle_a|n-1\rangle\}$ is coupled with strength $g\sqrt{n}$. But when we add in dissipative mechanisms which couple $\{|1\rangle_a|n\rangle \to \{|1\rangle_a|n-1\rangle$ and $\{|2\rangle_a|n\rangle \to \{|1\rangle_a|n\rangle$, the dynamics will appear more complicated in this basis.

<!-- page 193 -->

### CQED in the dressed state basis

To gain intuition for the dissipative atom-cavity system, it is instructive to transform to the dressed state basis for the Jaynes-Cummings Hamiltonian. Each set of coupled states can be independently diagonalized as illustrated in Figure 9.8, and dissipation introduces coupling between each set.

The simplest experimental method for probing the dressed state manifold is to measure the reflectivity of the atom-cavity system as a function of detuning of the incident light. The external field will probe transitions between the ground state and the low-lying dressed states. Even when the atomic transition is precisely resonant with the cavity mode, the atom-field coupling $g$ will show up as a splitting between peaks in reflectivity. Consequently the dressed-states splitting $g$ is often referred to as the “vacuum Rabi splitting.” Note that the splitting will increase to $g\sqrt{N}$ if there are $N$ atoms in the cavity antinode, an effect known as collective enhancement. Classically, this effect can be understood as a manifestation of atomic dispersion, which shifts the resonant frequency of the cavity by changing the phase shift the light picks up while it circulates.

### Stochastic wavefunction analysis

Suppose that at time $t = 0$ the system starts out in the vacuum state of the cavity and the excited state of the atom, $|2\rangle_a|0\rangle$. As the system evolves, there are only a small number of states to which it can transition. In particular, the possible transitions are:

1. Free space emission couples $|2\rangle_a|0\rangle \to |1\rangle_a|0\rangle$
2. Coherent evolution couples $|2\rangle_a|0\rangle \to |1\rangle_a|1\rangle$
3. Cavity decay couples $|1\rangle_a|1\rangle \to |1\rangle_a|0\rangle$.

We therefore need only account for three states, and the master equation can in principle be solved exactly. We will use the stochastic wavefunction approach which will provide all of the essential elements we need to understand the physical processes involved in the no-jump regime.

In the case where quantum jumps are unimportant, we will consider a wavefunction which incorporates only those states coupled by the Hamiltonian evolution
$$ |\psi\rangle = c_{1,1}|1\rangle_a|1\rangle + c_{2,0}|2\rangle_a|0\rangle. $$ {eq:9.112}
The Hamiltonian evolution equations for the probability amplitudes are
$$ \dot{c}_{1,1} = i\delta c_{1,1} + igc_{2,0} $$ {eq:9.113}
$$ \dot{c}_{2,0} = igc_{1,1}. $$ {eq:9.114}

<!-- page 194 -->

> FIGURE {fig:9.8} src=../../media/ch09/fig-9-8.png
> caption: The dressed-state basis and dissipative couplings. (a) The natural basis corresponds to a ground state and an infinite ladder of independent two-level systems each coupled by $g\sqrt{n}$, where $n$ is the maximum number of photons in the cavity for that pair of states. Each manifold can be exactly diagonalized, leading to the dressed state basis. (b) Atomic decay and cavity loss lead to couplings between the different manifolds, since they allow energy to leave the system. Consequently decays not only introduce an energy width to the dressed states, but also mix the independent dressed state manifolds.

<!-- page 195 -->

Dissipation enters through the non-Hermitian effective Hamiltonian
$$ \hat{H}_{eff} = -i\frac{\kappa}{2}\hat{a}^\dagger\hat{a} - i\frac{\gamma}{2}\hat{\sigma}_{21}\hat{\sigma}_{12}, $$ {eq:9.115}
so the “no-jump” evolution equations become
$$ \dot{c}_{1,1} = -(\frac{\kappa}{2} - i\delta)c_{1,1} + igc_{2,0} $$ {eq:9.116}
$$ \dot{c}_{2,0} = igc_{1,1} - \frac{\gamma}{2}c_{2,0}. $$ {eq:9.117}
In fact, because there is no possibility for reabsorption of lost photons into the system – i.e. the state $|1\rangle_a|0\rangle$ is uncoupled – the non-Hermitian evolution is exact. Examining these equations, we can see that in the limit of strong atom-field coupling $g \gg \gamma, \kappa$, the system exhibits weakly damped Rabi oscillations with the one-photon cavity state. However, many interesting effects can still be observed when $g$ is smaller than one of the dissipative rates.

### Open cavity: the Purcell effect

When the cavity decay rate overwhelms the atom-field coupling, $g < \kappa$, we can employ adiabatic elimination $\dot{c}_{1,1} \approx 0$ because the field mode is overdamped. The probability amplitude of the single-photon state is thus
$$ c_{1,1} = \frac{ig}{\kappa/2 - i\delta}c_{2,0}. $$ {eq:9.118}
The strongly damped cavity field affects the evolution of the atomic state
$$ \dot{c}_{2,0} = -\left(\frac{\gamma}{2} + \frac{\kappa}{2}\frac{g^2}{\kappa^2/4 + \delta^2}\right)c_{2,0} + i\frac{g^2\delta}{\kappa^2/4 + \delta^2}c_{2,0}. $$ {eq:9.119}
The first term shows that the atomic decay rate is modified by its coupling to the overdamped cavity mode, while the second term describes an energy shift which represents a modification of the Lamb shift by the cavity mode. The resulting atomic decay rate can be larger or smaller than the free space spontaneous emission rate depending on the type of cavity involved. For an open cavity, $\gamma \approx \gamma_\text{free space}$, so at zero detuning the atomic decay rate is enhanced
$$ \gamma^\mathrm{open}_\mathrm{eff} = \gamma + 4\frac{g^2}{\kappa}. $$ {eq:9.120}
This increase in the spontaneous emission rate is known as the “Purcell effect.”

<!-- page 196 -->

The physical parameters governing this effect involve the cavity mode volume $V$ and quality factor $Q$:
$$ g = \mu\sqrt{\frac{\nu}{\epsilon_0\hbar V}} $$ {eq:9.121}
$$ \kappa = \frac{\nu}{Q}, $$ {eq:9.122}
where $\nu$ is the cavity mode angular frequency. The cavity decay rate can also be expressed in terms of the cavity finesse F, which is the number of times a photon circulates in the cavity on average before leaking out. The photon lifetime is the finesse multiplied by the round trip time in the cavity
$$ \frac{1}{\kappa} = \frac{L}{\pi c}\cdot F. $$ {eq:9.123}

### The physics of strong coupling

In order to significantly alter the decay rate $\gamma^\mathrm{open}_\mathrm{eff}$ relative to $\gamma$, we need to have a sufficient atom-field coupling
$$ g^2 > \gamma\kappa. $$ {eq:9.124}
When this condition is satisfied, the system is said to be in the “strong coupling regime”. In fact, the figure of merit for strong coupling is independent of atomic parameters because the dipole moment appears both in $g$ and $\gamma$:
$$ \frac{g^2}{\kappa\gamma} \sim \frac{L\lambda^2}{V}\cdot F = \frac{\lambda^2}{d^2}\cdot F, $$ {eq:9.125}
where $d$ is the diameter of the cavity mode. The diffraction limit for a cavity of length $L$ sets $d^2 \sim \lambda L$, so the figure of merit is maximized for small cavities with high reflectivity $r^2 = 1 - t^2$:
$$ \frac{g^2}{\kappa\gamma} \sim \frac{\lambda}{L}\frac{1}{t^2} $$ {eq:9.126}

Physically, when an open cavity is in the strong-coupling regime, an excited atom placed in the cavity transfers its energy to the cavity mode much faster than it emits into $4\pi$, because $g > \gamma$. Since $g < \kappa$, the cavity mode then decays before the atom has time to reabsorb the photon. In effect, the excitation in the atom decays into the photon states leaking from the cavity.

<!-- page 197 -->

We can see another physical picture of the strong-coupling regime if we recognize that the resonant cross-section for the atom is $\sim \lambda^2$. The probability for the atom to interact with a photon before the photon decays from the cavity is
$$ P_\mathrm{interaction} \sim \lambda^2\cdot L\cdot\frac{1}{Ld^2}\cdot F, $$ {eq:9.127}
where $1/Ld^2$ is the atomic density and $F$ is the number of times the photon encounters the atom. This probability is greater than unity in the strong-coupling regime.

### Closed cavity: suppressed decay

An atom confined to a closed cavity cannot emit spontaneously into unconfined modes, so $\gamma = 0$. The effective decay rate is then
$$ \gamma^\mathrm{closed}_\mathrm{eff} = \frac{\kappa}{2}\frac{g^2}{\kappa^2/4 + \delta^2}. $$ {eq:9.128}
When the cavity is far-detuned from the atomic resonance, $\delta \gg \kappa$, the atomic decay rate is strongly suppressed because there is no density of states at the atomic transition energy. This effect has been seen in microwave experiments where the cavity size is on the order of the wavelength $L \sim \lambda$ and the detuning is maximum $\delta = \omega/2$. The decay rate in this regime is
$$ \gamma^\mathrm{closed}_\mathrm{eff} \sim \frac{g^2}{\kappa}\frac{\kappa^2}{\omega^2} \sim \frac{\lambda^3}{V}\frac{\gamma}{Q}. $$ {eq:9.129}
For a closed cavity, $V \sim \lambda^3$, so the decay rate is suppressed by the cavity quality factor.

### Microwave CQED with Rydberg atoms

Compared to optical CQED, microwave CQED offers several advantages. First, closed cavities can be constructed, and furthermore the atomic emission rate $\gamma \propto \omega^3$ is much smaller than at optical frequencies. Since the coupling strength $g \propto \sqrt{\omega}$, by going to lower frequencies one can get substantial improvement in $g/\gamma$. Finally, one can exploit the large dipole moment of Rydberg atoms to engineer a system with a large coupling constant $g$. The transition frequencies of highly excited Rydberg atoms $N \sim 50$ are in the microwave range $\sim$ 10-100 GHz, so the appropriate cavities are about a centimeter in size. Furthermore, the atomic state can be measured by measuring the electric field required to ionize the atoms, providing a convenient mechanism to analyze final atomic states.

<!-- page 198 -->

Lower frequencies also introduce potential problems. A typical Rydberg atom can decay at optical frequencies to a low-lying excited state, which will prevent microwave manipulation. Consequently experiments using Rydberg atoms have to pump them into so-called circular states of maximal angular momentum, where selection rules permit only a single microwave decay channel. The lifetime of circular Rydberg atoms can thus be very long, on the order of a second. Although exciting an atom into an N=50 L=50 state requires 50 microwave photons, groups in Paris and Munich routinely prepare circular Rydberg atoms.

A second problem arises at microwave frequencies because thermal photons cannot be neglected. Microwave cavities are therefore usually constructed from superconducting niobium and cooled to liquid helium temperatures. Additional tricks can also be employed to empty the thermal photons from the cavity by sending in atoms in the ground state to soak up the extra energy. With clever tricks and careful engineering, microwave CQED experiments have demonstrated the highest ratio between coherent evolution and decoherence in the field of quantum state engineering.

### Application: single photons on demand

One potential application for CQED is creation of a source which can be triggered to emit exactly one photon into a wavepacket with well defined frequency, timing, direction, and shape. Such a device would be to Fock states what the laser is to coherent states, but the non-classical nature of Fock states makes its construction considerably more difficult.

One might envision placing a single, excited emitter inside a cavity, and monitoring the leak from the cavity. A single emitter would generically emit a photon into $4\pi$, but the cavity can be used to improve directionality. In the strong-coupling regime, the excited emitter interacts primarily with the cavity mode $\hat{a}$, which subsequently interacts with the free-field modes $\hat{a}_k$ via a the Hamiltonian
$$ \hat{H}_{c-f} = -\hbar\sum_k t_k\hat{a}_k^\dagger\hat{a}e^{i\delta_k t} + h.c. $$ {eq:9.130}
The state of the system, including the continuum modes can be expressed as
$$ |\psi\rangle = c_{2,0}|2\rangle_a|0\rangle|vac\rangle + c_{1,1}|1\rangle_a|1\rangle|vac\rangle + \sum_k c_k|1\rangle_a|0\rangle|1_k\rangle. $$ {eq:9.131}
The physics of this process is precisely that of the bound to free transition, so we can use our results from Wigner-Weisskopf theory find the probability amplitudes for the free-space modes in the long-time limit and the strong-coupling regime:
$$ c_k \sim \frac{t_k g/\kappa}{g^2/\kappa + i\delta_k}. $$ {eq:9.132}
A single-photon wavepacket will be emitted in the direction defined by the cavity mode, with electric field envelope $\sim e^{-(g^2/\kappa)t}$. This system is not yet the ideal single photon source because we cannot control the timing and shape of the pulse. By using a three-level atom, one can control the emitted wavepacket shape.

<!-- page 199 -->

In principle, this single-photon emission process is coherent and thus reversible. For example, if the atom started out in a superposition of the ground and excited states, $(a|1\rangle + b|2\rangle)\otimes|\mathrm{vac}\rangle$, the coherent superposition would be mapped onto the photon mode propagating away from the cavity, so the state would become $|1\rangle\otimes\left(a + b\hat{a}^\dagger\right)|\mathrm{vac}\rangle$. By time reversing the pulse propagation, one could envision subsequently storing this quantum state (encoded in a superposition of orthogonal photon states) back into the atomic state. While ideas of this nature have received considerable theoretical attention, experiments have yet to implement coherent photon release and storage using cavity quantum electrodynamics.

### Measurements of single photon fields

Experimental demonstration of a single photon on demand requires distinguishing small numbers of photons. There exist photo-detectors which can measure single optical photons with high efficiency via an avalanche process which generates a macroscopic pulse of photo-current. Due to dead-time effects, however, it is impossible to distinguish between short ($<$ 100 ns) wavepackets containing multiple photons $|1\rangle, |2\rangle, |3\rangle\ldots$.

To study the nonclassical properties of short pulses, one can employ a Hanbury-Brown-Twiss setup, which splits the signal on a beamsplitter before sending it to two detectors. If a single photon is incident on the beamsplitter, the two detectors never register at the same time. This type of simultaneous detection is an example of a joint probability measurement. A full measurement of the correlations between the two detected signals can be used to obtain the second order correlation function
$$ G^{(2)} = \langle\mathcal{E}^\dagger(r_1,t_1)\mathcal{E}^\dagger(r_2,t_2)\mathcal{E}(r_2,t_2)\mathcal{E}(r_1,t_1\rangle. $$ {eq:9.133}
$G^{(2)}$ factorizes for coherent states, but does not factorize for non-classical states. Consequently it is convenient to define a normalized correlation function
$$ g^{(2)}(t_1 - t_2) = \frac{G^{(2)}}{\langle\mathcal{E}^\dagger(r_1,t_1)\mathcal{E}(r_1,t_1\rangle\langle\mathcal{E}^\dagger(r_2,t_2)\mathcal{E}(r_2,t_2)\rangle}. $$ {eq:9.134}
For example, $g^{(2)}(0)$ is 1 for a coherent state, 2 for a thermal state (photon “bunching”), and 0 for a single photon state (photon “anti-bunching”). Measurements of the second order correlation function are clearly sensitive to a higher order quantum coherence than the classical coherence of a laser beam. Such measurements are useful because non-classical states can exhibit high order correlations, not just the classical coherence $\langle\mathcal{E}^\dagger(r_1,t_1)\mathcal{E}(r_2,t_2)\rangle$.

<!-- page 200 -->

### Reading

Further information on CQED can be obtained in texts by Meystre & Sargent or Yamamoto & Imamoglu or in a recent review by Mabuchi, Doherty Science 298 1372(2002). A discussion of correlation functions in quantum optics can be found in Scully and Zubairy, Quantum Optics, Chapter 4. Recent work on single-photon generation has been reported in Nature 419 594 (2002), PRL 89 067901 (2002) (see comments PRL 90 249801) and Science 290 2282 (2000).

<!-- notes
- Paragraphs running across pages are kept whole, so the page 188, 189 and 200 markers stand before the first new paragraph or heading on those pages ("Using the general reservoir", "We used a Heisenberg-Langevin", "Reading"); the displays 9.91-9.92, 9.100-9.101 and 9.134 above them are on those pages.
- text-layer.md corrected: a stray NUL-math line removed from "cav-/ity" (page 199); caption hyphen splits joined ("electrodynam- ics", "natu- ral", "cav- ity", "en- ergy"); the superscript-line "eff" of $\gamma^\mathrm{open}_\mathrm{eff}$ (page 196) moved before "relative to" where the symbol stands.
- Example: Coherent state ends after the paragraph following Eq. (9.107), where the "Quantum field evolution" heading returns to the general argument. The skeleton's second {eq:9.107} slot under "Quantum field evolution" was the text's reference "Eq. (9.107)", not a display, and is dropped.
- The heading "Open cavity: the Purcell effect" (page 195) was missing from the skeleton and is added.
- The three transitions under "Stochastic wavefunction analysis" are printed "(1)", "(2)", "(3)"; written as a numbered list.
- Eq. (9.105) stands in footnote 3 and is numbered before Eq. (9.106) in the running text, as printed.
- Eq. (9.106) has no integration variable $dt'$ after the integral, as printed; meant $\ldots e^{-\kappa(t-t')/2}dt'$.
- Eq. (9.102) mixes $\hat{\rho}$ (left side) with $\rho$ (right side), as printed.
- Eq. (9.108) sums over atoms $j$ but the atomic operator $\hat{\sigma}_{\alpha,\beta}$ carries no index $j$; meant $\hat{\sigma}^{(j)}_{12}$ (the lowering operator of atom $j$).
- Page 192: "couple $\{|1\rangle_a|n\rangle \to \{|1\rangle_a|n-1\rangle$ and $\{|2\rangle_a|n\rangle \to \{|1\rangle_a|n\rangle$": stray opening braces, as printed.
- Eq. (9.111) lists $\{|1\rangle_a|n\rangle, |2\rangle_a|n\rangle\}$ as the basis; the coupled pairs the next sentence names are $|1\rangle_a|n\rangle, |2\rangle_a|n-1\rangle$ (not an error of the basis itself, but worth a note).
- Page 193: "the dressed-states splitting $g$ is often referred to as the “vacuum Rabi splitting.”": on resonance the dressed states of the one-excitation manifold are split by $2g$ (Figure 9.8(a) itself gives $\sqrt{4g^2+\delta^2}$), so the splitting is $2g$, not $g$; likewise $2g\sqrt{N}$ for $N$ atoms.
- Eqs. (9.113), (9.116): with $\hat{H}$ of Eq. (9.110) ($\hbar\delta\hat{a}^\dagger\hat{a} + \hbar g\hat{a}^\dagger\hat{\sigma}_{12} + \ldots$) the Schrodinger equation gives $\dot{c}_{1,1} = -i\delta c_{1,1} - igc_{2,0}$; the book's signs of $i\delta$ and $ig$ follow a different convention. Taking the book's equations as given, Eq. (9.118) follows, but Eq. (9.119)'s energy-shift term then comes out $-i\,g^2\delta/(\kappa^2/4+\delta^2)$, not $+i$.
- Page 199: the envelope $\sim e^{-(g^2/\kappa)t}$ and the width $g^2/\kappa$ in Eq. (9.132) disagree by a factor 2 with Eq. (9.119)/(9.120), whose amplitude decay at $\delta=0$, $\gamma=0$ is $2g^2/\kappa$ (probability rate $4g^2/\kappa$); stated as $\sim$, so possibly only order of magnitude.
- Page 198 "an N=50 L=50 state": a circular state of principal number $n=50$ has $l = m = 49$ (maximal $l = n-1$); meant N=50, L=49.
- Page 198 "via a the Hamiltonian": the book's typo (stray "a"), kept.
- Page 198 "from Wigner-Weisskopf theory find the probability": missing "to", kept.
- Eqs. (9.133), (9.134): "$\mathcal{E}(r_1,t_1\rangle$" lacks its closing parenthesis, as printed.
- Reading: "Mabuchi, Doherty Science 298 1372(2002)" as printed (no "&" or space before the year).
- Figure 9.4's crop takes in the title "Schrodinger cat" state of the radiation field", which is part of the figure as printed.
-->

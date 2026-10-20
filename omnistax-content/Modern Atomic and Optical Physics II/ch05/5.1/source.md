# 5.1 Raman transitions in the Λ level configuration

<!-- page 83 -->

In the following discussion we will focus on the three-level $\Lambda$ system illustrated in Figure 9.3, in which a single excited state mediates transitions between two lower-energy states. Since the transitions to the excited state are dipole allowed, radiative decay from the excited state must occur relatively quickly. However, transitions from $|2\rangle$ to $|1\rangle$ are dipole forbidden, so the metastable state $|2\rangle$ can have a very long lifetime. Although the radiative decay paths are much faster than the decay rate of the metastable state, it can be important to account for both types of decay to avoid spurious divergences.

## 5.1.1 The Schrodinger equation approach

By identifying the single-photon detunings $\Delta_1$ and $\Delta_2$ and the two-photon detuning $\delta = \Delta_1 - \Delta_2$, we can easily write down the Hamiltonian for this system in the appropriate rotating frame,
$$ \hat{H} = -\Delta_1|3\rangle\langle 3| - \delta|2\rangle\langle 2| - \left(\Omega_1|3\rangle\langle 1| + \Omega_2|3\rangle\langle 2| + \Omega_1^*|1\rangle\langle 3| + \Omega_2^*|2\rangle\langle 3|\right), $$ {eq:5.1}
where we have set the energy of $|1\rangle$ to zero. Neglecting decay terms for the moment, a general state of the form
$$ |\psi\rangle = c_1(t)|1\rangle + c_2(t)|2\rangle + c_3(t)|3\rangle $$ {eq:5.2}

<!-- page 84 -->

> FIGURE {fig:5.2} src=../../media/ch05/fig-5-2.png
> caption: The $\Lambda$ system under consideration, with the single- and two-photon detunings shown. Squiggly lines indicate possible decay paths

obeys the Schrodinger equation for the Hamiltonian, yielding equations of motion for the population amplitudes,
$$ \dot{c}_1 = i\Omega_1^* c_3 $$ {eq:5.3}
$$ \dot{c}_2 = i\delta c_2 + i\Omega_2^* c_3 $$ {eq:5.4}
$$ \dot{c}_3 = i\Delta_1 c_3 + i\Omega_1 c_1 + i\Omega_2 c_2. $$ {eq:5.5}

The $\Lambda$ system has a particularly simple solution for large but similar single photon detunings $\Delta_1 \sim \Delta_2 = \Delta \gg \Omega_1, \Omega_2, \gamma_3, \delta$. Since $\Delta$ is much larger than all other time scales in the problem, to lowest order in $\Omega_{1,2}/\Delta$ the excited state amplitude will be constant, with
$$ c_3 = -\frac{\Omega_1 c_1 + \Omega_2 c_2}{\Delta}. $$ {eq:5.6}
Substituting $c_3$ back into the equations of motion, we obtain the evolution equations for the probability amplitudes of the lower two states:
$$ \dot{c}_1 = -i\frac{|\Omega_1|^2}{\Delta}c_1 - i\frac{\Omega_2\Omega_1^*}{\Delta}c_2 $$ {eq:5.7}
$$ \dot{c}_2 = i(\delta - \frac{|\Omega_2|^2}{\Delta})c_2 - i\frac{\Omega_1\Omega_2^*}{\Delta}c_1. $$ {eq:5.8}

<!-- page 85 -->

This system behaves essentially as though the two levels $|1\rangle$ and $|2\rangle$ were coupled by a field with effective Rabi frequency
$$ \Omega_\mathrm{eff} = -\frac{\Omega_2^*\Omega_1}{\Delta}. $$ {eq:5.9}
By absorbing a photon on transition $\nu_1$ and emitting a photon of frequency $\nu_2$, population can be coherently transferred between the two ground states, leading to a large coherence $\rho_{21} = c_2 c_1^*$. Although we have neglected effects of the upper state decay, the excited state population is strongly suppressed by the large detuning $\Delta$. Consequently, the probability for spontaneous emission is small, and the effective two-level description appears to be a good approximation.

The simple wavefunction approach has given us some intuition for two-photon transitions in an effective two-level system. In many situations, however, it will be necessary to account for the effects of dephasing and decay as well.

## 5.1.2 The density matrix approach

To meticulously account for decay and dephasing, we must resort to the density matrix method. The equation of motion is
$$ \dot{\rho} = \mathcal{L}_{31}(\rho) + \mathcal{L}_{32}(\rho) + i[\hat{H}, \rho], $$ {eq:5.10}
where the Louvillian operators which account separately for decays from $|3\rangle$ to $|2\rangle$ and from $|3\rangle$ to $|1\rangle$ are given by e.g.
$$ \mathcal{L}_{31} = -\frac{\gamma_{3\rightarrow 1}}{2}\left(\sigma_{31}\sigma_{13}\rho - \sigma_{13}\rho\sigma_{31} + h.c.\right). $$ {eq:5.11}
Using the Hamiltonian for the three-level system, we can find the coherent evolution of the density matrix components. The Louvillian operators will account for from $|3\rangle$ to $|1\rangle$ at rate $\gamma$, from $|3\rangle$ to $|2\rangle$ at rate $\tilde{\gamma}$, and from $|2\rangle$ to $|1\rangle$ rate $\gamma'$. The total decay rate out of $|3\rangle$ is $\gamma_3 = \gamma + \tilde{\gamma}$ whereas the total decay rate out of $|2\rangle$ is $\gamma_2 = \gamma'$. Finally, we will incorporate nonradiative decoherence mechanisms by setting the decay rate of a coherence $\rho_{ij}$ to $\gamma_{ij}$. (In the limit of radiative decoherence $\gamma_{ij}$ will be equal to half the sum of the decay rates out of $|i\rangle$ and $|j\rangle$.) The density matrix equations of motion for the lambda system are then
$$ \dot{\rho}_{11} = -i\Omega_1\rho_{13} + i\Omega_1^*\rho_{31} + \gamma\rho_{33} + \gamma'\rho_{22} $$ {eq:5.12}
$$ \dot{\rho}_{22} = -i\Omega_2\rho_{23} + i\Omega_2^*\rho_{32} - \gamma'\rho_{22} + \tilde{\gamma}\rho_{33} $$ {eq:5.13}

<!-- page 86 -->

$$ \dot{\rho}_{21} = -\left(\gamma_{12} - i\delta\right)\rho_{21} + i\Omega_2^*\rho_{31} - i\Omega_1\rho_{23} $$ {eq:5.14}
$$ \dot{\rho}_{31} = -\left(\gamma_{13} - i\Delta\right)\rho_{31} + i\Omega_2\rho_{21} + i\Omega_1\left(\rho_{11} - \rho_{33}\right) $$ {eq:5.15}
$$ \dot{\rho}_{32} = -\left(\gamma_{23} - i(\Delta - \delta)\right)\rho_{32} + i\Omega_2\left(\rho_{22} - \rho_{33}\right) + i\Omega_1\rho_{12}, $$ {eq:5.16}
where $\Delta = \Delta_1$. Note that the remaining equations can be found using $\rho_{ji} = \rho_{ij}^*$ and $\rho_{11} + \rho_{22} + \rho_{33} = 1$. For notational convenience, we will frequently express the phase evolution and decay of the coherences in terms of a complex decay parameter
$$ \Gamma_{12} = \gamma_{12} - i\delta $$ {eq:5.17}
$$ \Gamma_{13} = \gamma_{13} - i\Delta $$ {eq:5.18}
$$ \Gamma_{23} = \gamma_{23} - i(\Delta - \delta). $$ {eq:5.19}
$$ \quad $$ {eq:5.20}

For far-detuned systems $\Delta \gg \Omega_{1,2}$, we can approach this system of equations by using adiabatic elimination to set $\rho_{32} = \rho_{31} = 0$. Nevertheless, the density matrix equations of motion are mathematically cumbersome.

## 5.1.3 The stochastic wavefunction method

The density matrix approach involves painful mathematics, but we can find a clever way around it by using the stochastic wavefunction method to incorporate decays without adding extra degrees of freedom. In particular, we will treat the system using a non-Hermitian Hamiltonian which adds two decay channels to the original Hermitian component,
$$ \hat{H}_\mathrm{eff} = \hat{H} - \frac{i\hbar\gamma_3}{2}|3\rangle\langle 3| - \frac{i\hbar\gamma_2}{2}|2\rangle\langle 2|. $$ {eq:5.21}
We are free to use the Schrodinger equation $i\hbar|\psi\rangle = \hat{H}_\mathrm{eff}|\psi\rangle$ so long as the probability for a quantum jump is small,
$$ P_\mathrm{jump} = \int dt\left(\gamma_2|c_2(t)|^2 + \gamma_3|c_3(t)|^2\right) \ll 1. $$ {eq:5.22}
This constraint is satisfied in two important situations:

(1) If the system starts out in $|1\rangle$ and the probe field is weak, $\Omega_1 \rightarrow 0$, the populations in states $|2\rangle$ and $|3\rangle$ are of order $|\Omega_1|^2$ or higher, so to lowest order in $\Omega_1$ we may neglect quantum jumps.

(2) If the system has finite population in both $|1\rangle$ and $|2\rangle$, quantum jumps are negligible provided that the decay from $|2\rangle$ is slow ($\gamma_2 \rightarrow 0$) and the excited state population is small ($\rho_{33} \rightarrow 0$).

<!-- page 87 -->

The non-Hermitian Schrodinger equation yields the following equations of motion for the stochastic wavefunction amplitudes:
$$ \dot{c}_1 = i\Omega_1^* c_3 $$ {eq:5.23}
$$ \dot{c}_2 = -\underbrace{(\frac{\gamma_2}{2} - i\delta)}_{\Gamma_{12}}c_2 + i\Omega_2^* c_3 $$ {eq:5.24}
$$ \dot{c}_3 = -\underbrace{(\frac{\gamma_3}{2} - i\Delta_1)}_{\Gamma_{13}}c_3 + i\Omega_1 c_1 + i\Omega_2 c_2. $$ {eq:5.25}
These equations may be solved in different regimes using different methods. If $\Omega_1$ is weak and $\Omega_2$ is continuous wave, they may be solved exactly using Fourier transforms. If the applied fields have envelopes which vary slowly in time, adiabatic elimination provides a method for finding an approximate solution. Regardless of the precise mathematical manipulations employed, it is important to always check at the end that the probability for quantum jumps is indeed small.

We will now consider the behavior of the $\Lambda$ system in a few special cases. For a weak probe field $\Omega_1$ and a constant field $\Omega_2$ of arbitrary strength, to zeroth order in $\Omega_1$ a system which starts in $|1\rangle$ will remain in $|1\rangle$, so $c_1(t) \approx 1$. The remaining probability amplitudes can be found by Fourier transforming the equations of motion, so that
$$ \underbrace{(\frac{\gamma_2}{2} - i(\delta - \omega))}_{\Gamma_{12}}c_2 = i\Omega_2^* c_3 $$ {eq:5.26}
$$ \underbrace{(\frac{\gamma_3}{2} - i(\Delta_1 - \omega))}_{\Gamma_{13}}c_3 = i\Omega_1 + i\Omega_2 c_2. $$ {eq:5.27}
Note that the Fourier frequency $\omega$ enters in the same place as the detuning, so we will again make reference to the complex decay rates $\Gamma_{12}$ and $\Gamma_{13}$, bearing in mind that the dependence on frequency is implied. The results for the density matrix components follow easily:
$$ \rho_{11} = |c_1|^2 = 1 $$ {eq:5.28}
$$ \rho_{21} = c_1^* c_2 = -\frac{\Omega_1\Omega_2^*}{\Gamma_{12}\Gamma_{13} + |\Omega_2|^2} $$ {eq:5.29}
$$ \rho_{31} = c_1^* c_3 = i\Omega_1\frac{\Gamma_{12}}{\Gamma_{12}\Gamma_{13} + |\Omega_2|^2}. $$ {eq:5.30}

<!-- page 88 -->

All other density matrix elements are of order $|\Omega_1|^2$ or higher, and consequently may be disregarded. The same results may be obtained directly from the master equation, where in general the complex decay rates would include effects of dephasing as well as decay.

## 5.1.4 Large detuning $\Delta$, weak $\Omega_1$

The three-level system can be considerably simplified in the case of a large single-photon detuning $\Delta$. When the probe is weak, we can characterize the response of the system by the linear susceptibility on the probe transition,
$$ \chi_1 = \frac{|\mu|^2}{\hbar\epsilon_0}\frac{\rho_{31}}{\Omega_1}, $$ {eq:5.31}
which is proportional to
$$ \frac{\rho_{31}}{\Omega_1} = \frac{i}{\Gamma_{13}}\left(\frac{\Gamma_{12}}{\Gamma_{12} + |\Omega_2|^2/\Gamma_{13}}\right) $$ {eq:5.32}
$$ = \frac{i}{\Gamma_{13}}\left(1 - \frac{|\Omega_2|^2/\Gamma_{13}}{\Gamma_{12} + |\Omega_2|^2/\Gamma_{13}}\right). $$ {eq:5.33}
The first term $i/\Gamma_{13}$ contains the single photon physics for a two-level system of $|1\rangle$ and $|3\rangle$ coupled by $\Omega_1$, and appears as a broad resonance at $\nu_1 = \omega_{13}$ with linewidth $\gamma_{13}$. The second term deserves greater care since it describes the effects of two-photon transitions. In the limit that $\Delta \gg \gamma_{13}$, the complex decay rate $\Gamma_{13} \approx -i\Delta$, so the second term becomes
$$ \frac{\rho_{31}}{\Omega_1} - \frac{i}{\Gamma_{13}} \approx \frac{i|\Omega_2|^2/\Delta^2}{\Gamma_{12} + (|\Omega_2|^2/\Delta^2)(\gamma_{13} + i\Delta)} $$ {eq:5.34}
$$ \approx \frac{i|\Omega_2|^2/\Delta^2}{\underbrace{(\gamma_{12}/2) + (\gamma_{13}/2)(|\Omega_2|^2/\Delta^2)}_{\gamma_\mathrm{eff}} - i\underbrace{(\delta - |\Omega_2|^2/\Delta)}_{\delta'}}. $$ {eq:5.35}
The real and complex parts of the denominator correspond to the effective width and detuning of the two-photon resonance. Because we have included decay, the susceptibility remains finite even on resonance $\delta \rightarrow |\Omega_2|^2/\Delta$. The width of the two-photon resonance is set by both the metastable state decoherence $\gamma_{12}$ and a term resulting from excited state decay, $\gamma_{13}|\Omega_2|^2/\Delta^2$, which is strongly suppressed by the large single-photon detuning.

Another important physical effect can be derived from our susceptibility calculation. For a system exactly on resonance, $\delta = |\Omega_2|^2/\Delta$, with no

<!-- page 89 -->

> FIGURE {fig:5.3} src=../../media/ch05/fig-5-3.png
> caption: The imaginary part of the probe beam susceptibility as a function of the probe beam detuning. The absorption of $\Omega_1$ exhibits a double resonance lineshape in the presence of a far-off resonant coupling beam $\Omega_2$. In this calculation, $\gamma_{12} = 0$, so the single-photon and two-photon resonances have the same peak value, but the linewidth of the two-photon peak is significantly narrower.

dephasing $\gamma_{12} = 0, \gamma_{13} = \gamma_3/2$, the susceptibility
$$ \frac{\rho_{31}}{\Omega_1} \sim \frac{2i}{\gamma_3} $$ {eq:5.36}
corresponds to that of a radiatively broadened system. Consequently the system is approaching the unitarity limit, and the cross-section is proportional to the wavelength $\lambda^2$. In this regime, the two-photon peak has the same amplitude as the single-photon resonance.

### Dressed state interpretation

We can obtain insight into the physical origin of this result by examining the system in the dressed state picture. The strong field $\Omega_2$ “dresses” the bare three-level system, so that the eigenstates probed by $\Omega_1$ contain a mixture of states $|2\rangle$ and $|3\rangle$,
$$ |+\rangle \approx |3\rangle - \frac{\Omega_2^*}{\Delta}|2\rangle $$ {eq:5.37}
$$ |-\rangle \approx |2\rangle + \frac{\Omega_2}{\Delta}|3\rangle, $$ {eq:5.38}

<!-- page 90 -->

where we have only kept terms to lowest order in $\Omega_2/\Delta$ because of the large detuning. The single photon resonance corresponds to transitions from the ground state to $|+\rangle$, which is very nearly the excited state $|3\rangle$, and consequently exhibits a linewidth close to the radiative width $\gamma_3$. The observed two-photon Raman transition corresponds to the transition $|1\rangle \rightarrow |-\rangle$. Since $|1\rangle$ is the ground state, the linewidth of the transition is set by the dephasing rate of $|-\rangle$,
$$ \gamma_- \approx \gamma_{12} + \frac{|\Omega_2|^2}{\Delta^2}\gamma_{13}, $$ {eq:5.39}
which precisely corresponds to the result from our mathematical analysis.

## 5.1.5 Large $\Delta$, arbitrary $\Omega_1$: Two-photon Rabi oscillations

Although the linear susceptibility analysis holds only for weak fields $\Omega_1$, it is possible to use the same stochastic Schrodinger equation to predict the effects of two strong fields $\Omega_1$ and $\Omega_2$. Of course, to neglect the quantum jumps we must verify that their probability is small. In the far-detuned regime $\Delta \gg \Omega_{1,2}$, this requirement becomes
$$ \frac{|\Omega_1|^2}{\Delta^2}\gamma_3 t, \frac{|\Omega_2|^2}{\Delta^2}\gamma_3 t \ll 1. $$ {eq:5.40}
For large detunings the excited state can be eliminated, and the three-level system will behave as an effective two-level system coupled by a two-photon transition even when $\Omega_1 \sim \Omega_2$. In particular, the number of completed Rabi oscillations can be large
$$ \left|\frac{\Omega_1\Omega_2^*}{\Delta}\right|t \gg 1, $$ {eq:5.41}
even for times short enough that a quantum jump is unlikely. Since the effective decoherence rate scales as $1/\Delta^2$ while the effective Rabi frequency scales as $1/\Delta$, in principle one can always find a detuning large enough that Rabi oscillations occur faster than dephasing.

## 5.1.6 Remarks

### Generalization to many excited states

Our analysis may also be trivially generalized to include the effects of many excited states. For large detunings, the precise excited state energy levels are unimportant since they do not affect the two-photon detuning. Once we

<!-- page 91 -->

have eliminated the excited states, the $\Lambda$ system will again behave as a two level system with effective Rabi frequency
$$ \Omega_\mathrm{eff} = \sum_i \frac{\Omega_{1i}\Omega_{2i}^*}{\Delta_i}. $$ {eq:5.42}
The Stark shifts and effective decay rates arising from multiple excited states may be calculated in a similar manner.

### The influence of Doppler broadening

Until now, we have implicitly assumed that the three-level atoms under consideration are stationary. If they are free to move, we must incorporate the Doppler shift which results from the atomic velocity $\mathbf{v}$ by changing the detunings
$$ \Delta_1 \rightarrow \Delta_1 - \mathbf{k}_1\cdot\mathbf{v} $$ {eq:5.43}
$$ \Delta_2 \rightarrow \Delta_2 - \mathbf{k}_2\cdot\mathbf{v} $$ {eq:5.44}
$$ \delta \rightarrow \delta - (\mathbf{k}_1 - \mathbf{k}_2)\cdot\mathbf{v}. $$ {eq:5.45}
Changes in the single photon detunings $\Delta_1, \Delta_2$ are unimportant for far-off resonant fields. Moreover, the two-photon detuning can be made almost insensitive to Doppler broadening if the two beams are nearly the same frequency, $\nu_1 \approx \nu_2$, and co-propagating, $\mathbf{k}_1||\mathbf{k}_2$, so that $\mathbf{k}_1 \approx \mathbf{k}_2$.

The Doppler-free two-photon resonance can be understood physically by considering the momentum kicks imparted to the atom. During the Raman process, an atom absorbs a photon $\nu_1$, acquiring momentum $\hbar\mathbf{k}_1$, and subsequently emits a photon $\nu_2$, losing momentum $\hbar\mathbf{k}_2$, so that the total momentum transfer is $\hbar(\mathbf{k}_1 - \mathbf{k}_2)$. Although $\nu_1 \neq \nu_2$, so $|k_1| \neq |k_2|$, their difference can be very small compared to optical frequencies. For example, Doppler effects contribute only $\sim$kHz to the linewidth for a copropagating two-photon transition between hyperfine levels in Rb.

### Phase sensitivity

In the linear susceptibility analysis, we found that $\rho_{31}/\Omega_1$ depended only on $|\Omega_2|^2$, and not on the relative phase of the two fields. This happens because the two-photon coherence $\rho_{21}$ is free to follow the phase of the optical coherences. If the transition between $|1\rangle$ and $|2\rangle$ was dipole allowed, then the relative phase of the three fields coupling the three states would become important.

<!-- page 92 -->

### Cascade and V-type transitions

Other three-level configurations (see Figure 7.3) exhibit similar behavior for large singe-photon detunings. To illustrate where differences can arise, we will examine a far-detuned cascade system. Although the cascade system will also exhibit two-photon resonance features, it differs from the $\Lambda$ system in the following aspects:

(1) The final state $|3\rangle$ often has dipole-allowed spontaneous emission, since transitions to the (lower) intermediate state $|2\rangle$ are dipole allowed. The two-photon resonances will thus typcially be broader. A notable exception to this rule is the 1s $\rightarrow$ 2p $\rightarrow$ 2s transition in atomic Hydrogen, where the final state 2s is metastable and the fields typically applied for two-photon resonance are very far detuned from the 2p state.

(2) The cascade atoms have different Doppler properties, since the Raman transition involves absorbing two photons rather than absorbing one and emitting the other. Consequently, the Doppler shifts cancel for counter-propagating beams, since the different frequency photons will impart momentum kicks in opposite directions to the atom.

<!-- notes
- text-layer.md corrected: captions joined at line-end hyphens ("two- photon" to "two-photon", "func- tion", "sig- nificantly"), "far-offresonant" to "far-off resonant" as the page prints it, and "$γ$ 12" to "$\gamma_{12}$"; the scrambled line order around "ρji = ρ∗ij and" restored before "For notational convenience".
- "illustrated in Figure 9.3": the book's wrong citation, kept; the Λ system is Figure 5.2.
- "(see Figure 7.3)" in Cascade and V-type transitions: the book's wrong citation, kept; meant Figure 5.1.
- "Louvillian" (twice): the book's misspelling of Liouvillian, kept.
- "will account for from |3⟩ to |1⟩ at rate γ": a word (decay) missing in the book, kept; likewise "to |1⟩ rate γ′" lacks "at".
- "singe-photon", "typcially": the book's typos, kept.
- "The real and complex parts of the denominator": imaginary part is meant.
- (5.20): the book prints the number alone on an empty row after (5.19); the slot holds an empty display.
- (5.21) text: "the Schrodinger equation $i\hbar|\psi\rangle = \hat{H}_\mathrm{eff}|\psi\rangle$" is missing the time derivative; meant $i\hbar\frac{d}{dt}|\psi\rangle$.
- (5.24)-(5.27): the brace labels Γ12 and Γ13 sit on γ2/2 − iδ and γ3/2 − iΔ1, whereas (5.17)-(5.18) define Γ12 = γ12 − iδ and Γ13 = γ13 − iΔ (no 1/2); the conventions disagree (γ12 = γ2/2, γ13 = γ3/2 for radiative decay).
- (5.35): the denominator's (γ12/2) + (γ13/2)(|Ω2|²/Δ²) does not follow from (5.34), whose real part is γ12 + γ13|Ω2|²/Δ²; the text and (5.39) use the latter, without the halves.
- 5.1.6 Phase sensitivity: the book's "|k_1| ≠ |k_2|" is set in non-bold k, kept.
- The cascade list items are printed as indented paragraphs numbered (1) and (2), kept as paragraphs.
-->

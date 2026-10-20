# 5.3 Parametric Processes

<!-- page 97 -->

Parametric processes represent an important category of coherent interactions between atoms and light. In such systems, we are interested primarily in the propagation and interaction of applied and generated light fields; the nonlinear atomic response is important only because it mediates interactions between optical fields. No energy is exchanged between photons and atoms, but atomic nonlinearities can lead to mixing between applied fields or even generation of fields at new frequencies. In practice, the nonlinear medium need not be atomic; in the most general treatment, optical fields impinge on a “nonlinear black box” which can give birth to higher frequency harmonics or sum and difference frequencies.

## 5.3.1 Example: the cascade system

We will first examine how parametric processes in the cascade level configuration can be used to generate higher-frequency fields. The situation we will consider has two fields $\mathcal{E}_1$ and $\mathcal{E}_2$ near resonance with the two-photon transition $\nu_1 + \nu_2 \approx \omega_{12}$. By driving this two-photon process, we hope to induce the atom to emit radiation at frequency $\nu_1 + \nu_2$.

From symmetry considerations, one might argue that the $|2\rangle \rightarrow |1\rangle$ transition is dipole forbidden if the two-photon process is dipole-allowed. Nevertheless, by breaking the associated symmetry (in this case, inversion symmetry), it is possible to have both single-photon and two-photon dipole allowed transitions between $|1\rangle$ and $|2\rangle$. Such symmetry breaking can be accomplished in a variety of ways. The hydrogen atom furnishes a particularly simple example: if we apply a static electric field to the hydrogen

<!-- page 98 -->

> FIGURE {fig:5.6} src=../../media/ch05/fig-5-6.png
> caption: Left: The cascade level system used for sum-frequency generation. Right: A physical implementation of the cascade level system in the Hydrogen atom. A DC field mixes the $|2s\rangle$ and $|2p\rangle$ states so that both the single- and two-photon transitions are dipole allowed. This DC Stark shift breaks the inversion symmetry of the Hydrogen atom, which makes second-order nonlinear processes possible.

atom, the linear Stark shift mixes the $|2s\rangle$ and $|2p\rangle$ levels so that the resulting hybrid state does not have a well-defined parity. Selection rules are thereby relaxed, so that a far-off-resonant two-photon transition can indeed induce single-photon transitions back to $|1s\rangle$.

Sum frequency generation has an intuitive semiclassical explanation. Suppose you drive the Stark-shifted Hydrogen atom with two fields with frequencies $\nu_1 + \nu_2 = \omega_{1s\rightarrow 2s}$. The resulting off-diagonal atomic coherence $\rho_{12}$ leads to a polarization which oscillates at the sum frequency $\nu_1 + \nu_2$. From a semiclassical perspective, the oscillating polarization will emit radiation at the sum frequency. Note that the polarization is proportional to both applied fields
$$ P_{\nu_1+\nu_2} \propto \mu_{12}\mathcal{E}_1\mathcal{E}_2, $$ {eq:5.60}
and we will introduce a nonlinear susceptibility as the proportionality constant
$$ \chi^{(2)} = \frac{P_{\nu_1+\nu_2}}{\epsilon_0\mathcal{E}_1\mathcal{E}_2}. $$ {eq:5.61}
Whenever a medium has $\chi^{(2)} \neq 0$, application of two fields can result in generation of the sum frequency.

<!-- page 99 -->

### Non-linear polarization in the cascade level configuration

We will now derive an expression for the nonlinear susceptibility in terms of atomic system parameters. Taking the limit when the two-photon transition is far-detuned from the intermediate states, the system can be effectively treated as a two-level system coupled by a field with Rabi frequency
$$ \Omega_\mathrm{eff} = \sum_i \frac{\Omega_{1i}\Omega_{2i}}{\Delta_i} = \sum_i \frac{\mu_{1i}\mu_{2i}}{\Delta_i\hbar^2}\mathcal{E}_1\mathcal{E}_2. $$ {eq:5.62}
The Stark shifts from the applied fields $\mathcal{E}_1$ and $\mathcal{E}_2$ can be incorporated into a renormalization of the two-photon detuning $\delta_\mathrm{eff}$. For $\Delta_i, \delta_\mathrm{eff}$ large, the off-diagonal density matrix components are given by
$$ \rho_{21} = -\frac{\Omega_\mathrm{eff}}{\delta_\mathrm{eff}}, $$ {eq:5.63}
so we can immediately write down the polarization
$$ P_3 = \frac{N}{V}\mu^*\rho_{21} = \frac{N}{V}\mu^*\frac{1}{\hbar^2}\sum_i \frac{\mu_{1i}\mu_{2i}}{\delta_\mathrm{eff}\Delta_i}\mathcal{E}_1\mathcal{E}_2. $$ {eq:5.64}
The nonlinear susceptibility is thus
$$ \chi^{(2)} = \frac{N}{V}\mu^*\frac{1}{\epsilon_0\hbar^2}\sum_i \frac{\mu_{1i}\mu_{2i}}{\delta_\mathrm{eff}\Delta_i}. $$ {eq:5.65}

## 5.3.2 Sum frequency generation

The cascade system has provided an illustration of how a medium can generate a polarization oscillating at the sum frequency of two applied fields. We now seek to understand how this oscillating polarization gives birth to a new field. To simplify the analysis we will assume:

(1) Both applied fields are continuous-wave.

(2) All fields propagate along the $\hat{z}$ direction.

We can thus write down the total electric field as a sum of three components, treating the third field on equal footing with the two applied fields:
$$ \mathcal{E} = \mathcal{E}_1 e^{i(\nu_1 z/c - \nu_1 t)} + \mathcal{E}_2 e^{i(\nu_2 z/c - \nu_2 t)} + \mathcal{E}_3 e^{i(\nu_3 z/c - \nu_3 t)} + c.c. $$ {eq:5.66}
Note that, in the spirit of the slowly-varying envelope approximation, we have factored out the rapidly oscillating terms. Using the generalized SVEA, we will find propagation equations for each of the three slowly-varying amplitudes.

<!-- page 100 -->

The evolution equations for the slowly-varying amplitudes include both the normal linear response of the medium and the effects of the oscillating polarization $P_3$. If $\mathcal{E}_3$ is sufficiently weak compared to the two applied fields $\mathcal{E}_1$ and $\mathcal{E}_2$, then we might expect that the two applied fields will not be greatly depleted while generating $\mathcal{E}_3$. This is known as the undepleted pump approximation, since $\mathcal{E}_1$ and $\mathcal{E}_2$ act as pump fields driving the creation of $\mathcal{E}_3$. When we neglect the nonlinear terms associated with depletion of $\mathcal{E}_{1,2}$ by $\mathcal{E}_3$, the evolution equations for $\mathcal{E}_1$ and $\mathcal{E}_2$ are the same as for a linear medium,
$$ \frac{\partial}{\partial z}\mathcal{E}_{1,2} = \frac{i\nu_{1,2}}{2c}\chi_{1,2}\mathcal{E}_{1,2}, $$ {eq:5.67}
where $\chi_i$ is the linear response of the medium to frequency $\nu_i$.

The evolution equation for $\mathcal{E}_3$ must include both the linear and nonlinear response, since sum-frequency generation will occur even if $\mathcal{E}_3(0) = 0$, and this generated field will subsequently interact nearly linearly with the atoms. Consequently we find
$$ \frac{\partial}{\partial z}\mathcal{E}_3 = \frac{i\nu_3}{2c}\chi^{(2)}\mathcal{E}_1\mathcal{E}_2 + \frac{i\nu_3}{2c}\chi_3\mathcal{E}_3. $$ {eq:5.68}
For the far-detuned system under consideration, $\Delta_i$ large, we can identify the dominant terms in the linear susceptibilities:
$$ \chi_{1,2} \approx \frac{N}{V}\frac{1}{\epsilon_0\hbar}\sum_i \frac{|\mu_{1i,2i}|^2}{\Delta_i} $$ {eq:5.69}
$$ \chi_3 \approx \frac{N}{V}\frac{1}{\epsilon_0\hbar}\frac{|\mu_{12}|^2}{\delta_\mathrm{eff}} $$ {eq:5.70}
$$ \quad $$ {eq:5.71}

In conjunction with the initial conditions $\mathcal{E}_1(0), \mathcal{E}_2(0) \neq 0, \mathcal{E}_3(0) = 0$, we now have a completely defined problem.

The evolution equations are most easily solved by introducing new variables $\tilde{\mathcal{E}}_i$ which absorb the linear terms,
$$ \mathcal{E}_i = \tilde{\mathcal{E}}_i e^{i\nu_i\chi_i z/2c} $$ {eq:5.72}
so that the propagation equations become
$$ \frac{\partial}{\partial z}\tilde{\mathcal{E}}_{1,2} = 0 $$ {eq:5.73}
$$ \frac{\partial}{\partial z}\tilde{\mathcal{E}}_3 = \frac{i\nu_3}{2c}\chi^{(2)}\tilde{\mathcal{E}}_1\tilde{\mathcal{E}}_2 e^{i\Delta kz}, $$ {eq:5.74}

<!-- page 101 -->

where
$$ \Delta k = \frac{\nu_1\chi_1}{2c} + \frac{\nu_2\chi_2}{2c} - \frac{\nu_3\chi_3}{2c}. $$ {eq:5.75}
Since $\nu_i\chi_i/2c = n_i\nu_i/c = k_i$ is just the wave-vector of the field $\mathcal{E}_i$ inside the medium, $\Delta k = k_1 + k_2 - k_3$ is simply the difference of the total wavevectors of all three fields.

### Phase-matching

In sum-frequency generation, $\Delta k$ is the most important quantity determining the growth of $\mathcal{E}_3$. The output field is
$$ \tilde{\mathcal{E}}_3(L) = \int_0^L \frac{i\nu_3}{2c}\chi^{(2)}\tilde{\mathcal{E}}_1\tilde{\mathcal{E}}_2 e^{i\Delta kz} = \left(\frac{e^{i\Delta kL} - 1}{i\Delta k}\right)\frac{i\nu_3}{2c}\chi^{(2)}\tilde{\mathcal{E}}_1\tilde{\mathcal{E}}_2. $$ {eq:5.76}
In the situation when $\Delta k = 0$, the system is said to satisfy the “phase-matching condition.” This is the most favorable configuration for sum frequency generation because the field grows linearly with distance,
$$ \tilde{\mathcal{E}}_3(L) = \frac{i\nu_3}{2c}\chi^{(2)}\tilde{\mathcal{E}}_1\tilde{\mathcal{E}}_2 L. $$ {eq:5.77}
The physical interpretation for this linear field growth comes from examining the phase velocities of the generated field and the induced polarization. When $\Delta k = 0$, the phase velocity of the field $\mathcal{E}_3$ precisely matches the phase velocity of the polarization $P_3$, so the polarization always contributes constructively to the generation of the new field. If the phase velocities are not matched, $\Delta k \neq 0$, the phase of the polarization slips out of alignment after a distance $\approx \pi/\Delta k$, producing a field which interferes destructively with the propagating field $\mathcal{E}_3$.

An alternate interpretation for the phase-matching condition invokes momentum-conservation. The parametric up-conversion involves absorbing two photons and emitting one, and this process must conserve both energy $\nu_3 = \nu_1 + \nu_2$ and momentum, $k_3 = k_1 + k_2$. For a atomic cloud of finite length $L$, the momentum is uncertain to within $\approx \pi/L$, so for distances less than the coherence length, $\Delta kL \ll 1$ the system is phase-matched and the field grows linearly. Once the field has propagated far enough that $\Delta kL \gg 1$, momentum conservation is no longer satisfied, and destructive interference sets in.

### Competing processes

Phase-matching provides an example of so-called competing processes which reduce the effects of nonlinearities. The linear susceptibility of the medium

<!-- page 102 -->

> FIGURE {fig:5.7} src=../../media/ch05/fig-5-7.png
> caption: When the phase-matching condition is not satisfied, the sum-frequency field only grows for a distance $\sim \pi/\Delta k$ before destructive interference sets in.

competes with nonlinear generation, making the outcome for $\mathcal{E}_3$ much smaller than it could potentially be. Other effects such as absorption or beam breakup also diminish the net output nonlinear processes. These competing processes frequently overwhelm nonlinear effects, and in large part explain why nonlinearities in practical systems are often so small.

### Sum-frequency generation in the cascade system

We will now apply our calculations for the general nonlinear system to the cascade level configuration, where we can express the output field in terms of known atomic quantities. By inspecting Eq. (5.76) with $\Delta k \neq 0$, we see that after a distance $z = \pi/\Delta k$, $\mathcal{E}_3$ achieves its maximal amplitude,
$$ \tilde{\mathcal{E}}_3(\frac{\pi}{\Delta k}) = -\frac{\nu_3}{c\Delta k}\chi^{(2)}\tilde{\mathcal{E}}_1\tilde{\mathcal{E}}_2. $$ {eq:5.78}
Since $\Delta k$ is determined by the linear susceptibilities for the system, the strength of the generated field depends on the ratio of the nonlinear susceptibility to the linear susceptibilities. For the far-detuned two-photon transition ($\Delta_i$ large), the near-resonant susceptibility $\chi_3^{(1)}$ dominates $\Delta k \approx \frac{\nu_3}{c}(n_3 - 1) \approx 2\frac{\nu_3}{c}\chi_3^{(1)}$. In this limit, we can easily express the maximal

<!-- page 103 -->

field amplitude in terms of atomic dipole moments,
$$ \tilde{\mathcal{E}}_3(\frac{\pi}{\Delta k}) = \frac{-1}{2}\overbrace{\mu_{12}^*\sum_i \frac{\mu_{1i}\mu_{2i}}{\delta_\mathrm{eff}\Delta_i}}^{\sim\chi^{(2)}} \cdot \underbrace{\frac{\delta_\mathrm{eff}}{\hbar|\mu_{12}|^2}}_{\sim 1/\chi_3^{(1)}}\tilde{\mathcal{E}}_1\tilde{\mathcal{E}}_2. $$ {eq:5.79}
As we tune closer to two-photon resonance, $\delta_\mathrm{eff} \rightarrow 0$, the nonlinear susceptibility grows, but this growth is perfectly balanced by corresponding growth in the linear susceptibility; indeed, the two-photon detuning drops out of the problem.

The overall size of the new field is very small when the system is not phase-matched. If we choose $\mathcal{E}_1 \sim \mathcal{E}_2 \sim \mathcal{E}$, the relative amplitude of the sum-frequency field is
$$ \frac{\mathcal{E}_3(\pi/\Delta k)}{\mathcal{E}} \sim \sum_i \frac{\Omega_i}{\Delta_i} \ll 1. $$ {eq:5.80}

### Practical implementation of phase-matching

In view of this result, it is important to consider practical methods to achieve phase-matching. This goal requires engineering the linear dispersion so that polarization and sum-frequency field propagate in phase.

In atomic physics, phase-matching has been done by mixing two species of gas. One species provides the nonlinearity, while the other is introduced to provide the necessary dispersion to compensate any phase-mismatch. By carefully adjusting the ratios of the two atoms, phase matching may be achieved.

Another method frequently used in atomic physics engineers the dispersion by using strong nonperturbative fields. For example, EIT-like configurations can be used to eliminate the linear susceptibility, so that $\Delta k = 0$ precisely. A similar system has been used for second harmonic generation ($\nu_1 = \nu_2$) in hydrogen. The strong DC field couples the $2s$ and $2p$ levels, acting like a nonperturbative driving field, while the second harmonic $\mathcal{E}_3$ probes the $1s$ to $2p$ transition. The three-level system composed of $1s, 2s$ and $2p$ thus takes on the $\Lambda$ configuation, allowing EIT propagation for the second harmonic. [ See K. Hakuta, L. Marmet, & B.P. Stoicheff, PRL 66, 596 (1991)]

While atomic systems are almost the sole source of coherent radiation in the UV and UUV spectral regions, most practical devices in the visible spectrum do not use atomics: nonlinear crystals are typically used

<!-- page 104 -->

for sum-frequency generation. Similar phase-matching considerations apply, but other practical methods for achieving it are employed. For example, non-symmetric crystals can exhibit birefringence, where different polarizations can experience different linear susceptibilities which vary with temperature. Phase-matching can be engineered by carefully choosing the polarizations of the pump fields and approprately heating the crystal. Angle tuning may also employed, using the fact that $\Delta k$ is in fact a vector sum of the wave-vectors.

### Saturation

When phase-matching is achieved, Eq. (5.76) indicates that the sum-frequency field grows linearly without bound. From physical grounds, this prediction cannot be correct, since a finite quantity of power is pumped into the system by the applied fields $\mathcal{E}_1$ and $\mathcal{E}_2$. In fact, as $\mathcal{E}_3$ grows, the undepleted pump approximation eventually breaks down. For parametric processes no energy is exchanged between the atoms and the optical fields, so (n a lossless system)
$$ \frac{\partial}{\partial z}\left(|\mathcal{E}_1|^2 + |\mathcal{E}_2|^2 + |\mathcal{E}_3|^2\right) = 0. $$ {eq:5.81}
Consequently we expect saturation of the generated field to occur when $\mathcal{E}_3$ begins to approach the amplitudes of the applied fields $\mathcal{E}_{1,2}$.

### Generalization to other parametric processes

We have discussed one specific process in detail: parametric upconversion. The same physical and mathmatical tools apply to other nonlinear parametric processes. For example, rather than applying two red fields which give birth to a sum-frequency blue field, one could consider generating lower frequency optical fields by applying a blue field and a red field to generate the difference frequency. The same evolution equations apply, and phase-matching considerations will again play an important role.

### Third-order nonlinear processes

In all of our analysis, we have assumed non-vanishing dipole couplings on all transitions $\mu_{12}, \mu_{1i}, \mu_{2i} \neq 0$, and we noted that this situation arises when certain symmetries are violated. In fact, one can show that in systems with inversion symmetry, the second order nonlinear susceptibility vanishes, $\chi^{(2)} = 0$, so that the lowest order nonlinear susceptibility is $\chi^{(3)}$. The third

<!-- page 105 -->

order susceptibility is defined by
$$ \chi^{(3)} = \frac{P}{\epsilon_0\mathcal{E}_1\mathcal{E}_2\mathcal{E}_3}, $$ {eq:5.82}
where $P$ is the polarization resulting from three applied fields $\mathcal{E}_{1,2,3}$. For example, the Kerr effect is a special case of a third-order nonlinear process where only one field is present, so $P \propto \mathcal{E}|\mathcal{E}|^2$. In addition, one can interpret the sum-frequency generation in hydrogen as a third-order process. Rather than invoking symmetry breaking caused by the DC field, one can treat this static field as the third applied field and use a third-order susceptibility to analyze the resulting sum-frequency generation.

<!-- notes
- (5.71): the book prints the number alone on an empty row after (5.70); the slot holds an empty display.
- (5.76): the integral is printed without its $dz$; kept.
- After (5.75): "$\nu_i\chi_i/2c = n_i\nu_i/c = k_i$" is wrong as printed; with $n_i = 1 + \chi_i/2$ (as in 5.2), $\nu_i\chi_i/2c = (n_i - 1)\nu_i/c$, the medium's addition to the wavevector; Δk is the full wavevector mismatch only because the vacuum parts cancel for $\nu_3 = \nu_1 + \nu_2$.
- Before (5.79): "$\Delta k \approx \frac{\nu_3}{c}(n_3 - 1) \approx 2\frac{\nu_3}{c}\chi_3^{(1)}$": with $n_3 - 1 = \chi_3/2$ the last factor should be $\frac{1}{2}$, not 2 (consistent with (5.75)); the $-\frac{1}{2}$ prefactor of (5.79) inherits the slip and would be $-2$.
- "approprately": the book's typo, kept.
- text-layer.md corrected: caption hyphen joins ("genera- tion", "sum- frequency", "inter- ference") and "efflarge" split to "eff large".
- "For a atomic cloud": the book's "a" for "an", kept.
- "diminish the net output nonlinear processes": a word ("of") missing, kept.
- "the Λ configuation", "mathmatical": the book's typos, kept.
- "do not use atomics": as printed (atoms, or atomic media, meant).
- "Angle tuning may also employed": "be" missing, kept.
- "so (n a lossless system)": "n" for "in", kept.
- "UV and UUV spectral regions": as printed; VUV (vacuum ultraviolet) is likely meant.
- Saturation: "Eq. (5.76) indicates that the sum-frequency field grows linearly" kept; the linear growth is written out in (5.77).
- The two assumptions in 5.3.2 are printed as indented lines numbered (1) and (2), kept as paragraphs.
-->

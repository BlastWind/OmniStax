# 4.3 Nonlinear atomic response

<!-- page 74 -->

The perturbative methods used in the linear regime cannot be used to treat strong applied fields. A general approach in the nonlinear regime requires a time-varying solution for the density matrix components as a function of the time-dependent applied field, $\Omega(t)$. As the system complexity increases, such solutions become increasingly difficult to obtain even numerically.

As a special case, we will consider only continuous-wave fields of fixed frequency, and look for the steady-state behavior of the system. To start with, consider a homogeneous ensemble of two-level atoms illuminated by photons with frequency detuned from atomic resonance by $\delta = \bar{\nu} - \omega$. Recall that the steady-state solution for the off-diagonal density matrix components is
$$ \rho_{21} = -i\frac{\Omega}{\gamma_{12} - i\delta}(\rho_{11} - \rho_{22}). $$ {eq:4.53}
For strong fields, we can no longer neglect changes in the atomic populations, so we should substitute (in the steady state)
$$ \rho_{11} - \rho_{22} = \frac{\gamma}{\gamma + 2R_{opt}} $$ {eq:4.54}
where
$$ R_{opt} = \frac{2|\Omega|^2\gamma_{12}}{\gamma_{12}^2 + \delta^2}. $$ {eq:4.55}

We can use the steady state coherence to find the nonlinear susceptibility in the Fourier domain:
$$ \chi_n(\delta) = \frac{\mathcal{P}(\delta)}{\epsilon_0\mathcal{E}(\delta)} $$ {eq:4.56}
$$ = \frac{1}{\epsilon_0\mathcal{E}(\delta)}\frac{N}{V}\mu\rho_{21}(\delta). $$ {eq:4.57}
Proceeding in the same manner as before, we find that
$$ \chi_n(\delta) = \frac{3}{8\pi^2}\frac{N}{V}\lambda^3\frac{i\gamma}{\gamma_{12} - i\delta}\frac{\gamma}{\gamma + 2R_{opt}}. $$ {eq:4.58}

<!-- page 75 -->

Note that, whereas the linear susceptiblity provided a complete solution to all time-dependent linearly propagating fields, the nonlinear susceptiblity $\chi_n(\delta)$ we have just derived is applicable only to continuous wave, steady state solutions. For this special situation we are considering, the susceptibility determines the nonlinear propagation equation for the applied field. Since we are working with continuous wave fields, we may disregard the time derivatives in the wave equation, so the only remaining terms are
$$ \frac{\partial\mathcal{E}}{\partial z} = i\bar{k}\chi_n(\delta)\mathcal{E} $$ {eq:4.59}
$$ = i\bar{k}\left(\frac{3}{8\pi^2}\frac{N}{V}\lambda^3\frac{i\gamma}{\gamma_{12} - i\delta}\frac{\gamma}{\gamma + 2R_{opt}}\right)\mathcal{E}. $$ {eq:4.60}
The nonlinear susceptibility is itself a function of the strength of the applied field $\Omega = \mu\mathcal{E}/\hbar$, which enters through $R_{opt}$. As the applied field grows, $\chi$ is diminished, an effect known as saturating absorption. In the limit of a weak field, $R_{opt} \ll \gamma$, this expression reduces to the linear susceptibility obtained earlier. We will now examine the nonlinear susceptibility in a few special cases.

### Resonant fields

For a perfectly resonant field, $\delta = 0$, the real part of the susceptibility vanishes and the imaginary part becomes
$$ \mathrm{Im}[\chi_n(0)] = \frac{3}{8\pi^2}\frac{N}{V}\lambda^3\frac{\gamma}{\gamma_{12}}\frac{1}{1 + s} $$ {eq:4.61}
where
$$ s = \frac{4|\Omega|^2}{\gamma_{12}\gamma}. $$ {eq:4.62}
When this saturation parameter $s$ is large, $s \gg 1$, the applied field bleaches the medium, and the transmitted power grows nonlinearly as the incident intensity is increased. In this saturated regime, the spatial profile of absorption changes qualitatively from a linear decay in strong fields to the exponential decay characteristic of weak fields.

### Far-detuned fields

It is possible to define a saturation parameter as a function of the detuning,
$$ s = \frac{2R_{opt}}{\gamma}. $$ {eq:4.63}

<!-- page 76 -->

> FIGURE {fig:4.3} src=../../media/ch04/fig-4-3.png
> caption: An incident field with intensity equal to the saturation intensity initially decays linearly with distance. Once the field is sufficiently weak that nonlinear effects are negligible, the intensity decays exponentially.

Since $R_{opt}$ decreases as detuning increases, greater power is required to saturate an off-resonant transition. For very large detunings , $\delta \gg \Omega, \gamma$, the imaginary part of the susceptibility is negligible, with the real part given by
$$ \chi_n \approx -\frac{3}{8\pi^2}\frac{N}{V}\lambda^3\frac{\gamma}{\delta}\left(1 - \frac{4|\Omega|^2\gamma_{12}}{\delta^2\gamma}\right). $$ {eq:4.64}
The refractive index of the medium is determined by $\mathrm{Re}[\chi]$, and consequently depends on the intensity. The physics of an intensity dependent refractive index (known as the Kerr effect) may be captured by defining an index which is linear in intensity, $n = n_0 + n_2 I$. Such effects have important physical consequences, including intensity-dependent phase shifts which are often referred to as “self-phase modulation”. In addition, the medium will act as a lens for a beam with finite transverse extent, since the refractive index is a function of power and thus transverse position, leading to so-called self-focussing or de-focussing.

### Weakly saturated regime

In some situations we will be working with relatively weak fields, and wish only to calculate the leading order corrections to linear propagation. In such cases, it is useful to expand the susceptibility
$$ \chi_n = \chi + \chi^{(3)}|E|^2 + \ldots, $$ {eq:4.65}

<!-- page 77 -->

where $\chi$ is the linear susceptibility and $\chi^{(3)}$ is the next order correction (at least for a system exhibiting inversion symmetry). In terms of the susceptibility for the two-level system, this expansion looks like:
$$ \begin{aligned} \chi_n(\delta) &= \frac{3}{8\pi^2}\frac{N}{V}\lambda^3\frac{i\gamma}{\gamma_{12} - i\delta}\frac{\gamma}{\gamma + 2R_{opt}} \\ &\approx \frac{3}{8\pi^2}\frac{N}{V}\lambda^3\frac{i\gamma}{\gamma_{12} - i\delta}\left(1 - \frac{2R_{opt}}{\gamma}\right) \\ &\approx \frac{3}{8\pi^2}\frac{N}{V}\lambda^3\frac{i\gamma}{\gamma_{12} - i\delta} - \left(\frac{3\lambda^3}{2\pi^2\hbar^2}\frac{N}{V}\frac{i}{\gamma_{12} - i\delta}\frac{|\mu|^2\gamma_{12}}{\gamma_{12}^2 + \delta^2}\right)|E|^2, \end{aligned} $$
where we identify the first term as the linear susceptibility and the second term as the leading nonlinear correction.

### Experimental considerations

For practical purposes, it is useful to estimate the intensity needed to saturate a transition at resonance. In a radiatively broadened system, $\gamma_{12} = \gamma/2$, $R_{opt} = 4|\Omega|^2/\gamma$, so the saturation threshold $s = 1$ corresponds to $8|\Omega|^2 \approx \gamma^2$, or an intensity of a few $\text{mW}/\text{cm}^2$ for the alkali atoms. In a Doppler broadened system, $kv_T \gg \gamma_{12}$, a much larger power is required, since an applied field satisfying $8|\Omega|^2 \approx \gamma^2$ will only saturate a velocity class of atoms. However, in this intermediate regime where a small subset of velocity groups are saturated, nonlinear spectroscopy such as pump-probe or hole-burning experiments may be performed with sub-Doppler resolution.

In practice, real systems can saturate much faster than these calculations would predict because the existence of other atomic levels means that the system doesn’t necessarily decay back into its original state. For instance, consider an atom with two long-lived hyperfine levels and a third excited level. When a field is applied which is resonant with the transition from one of the hyperfine levels to the excited state, most of the atomic population will end up in the other hyperfine level, an effect known as optical pumping. Now saturation of the resonant transition only requires that $R_{opt}$ exceed the (slow) decay between hyperfine levels, making it much easier to saturate. This example illustrates how the two-level model is often not a very good approximation, especially in situations related to nonlinear interactions of atoms with light.

<!-- page 78 -->

## 4.3.1 Saturation spectroscopy

Saturation spectroscopy is an important example of incoherent nonlinear multi-photon interactions. It provides a simple method for probing the natural linewidth of an inhomogenously broadened medium (unlike linear interactions which cannot distinguish between a homogeneously and inhomogeneously broadened resonance). Saturation spectroscopy is typically performed with two counterpropagating beams at the same frequency $\nu$, near resonance with the atomic transition energy $\Delta$. The beams create an electric field profile in the cloud of thermal atoms,
$$ \mathbf{E} = \mathcal{E}_+e^{-i\nu t + ikz} + \mathcal{E}_-e^{-i\nu t - ikz} + c.c, $$ {eq:4.66}
where $\mathcal{E}_+$ represents a strong field in the forward direction and $\mathcal{E}_-$ represents a weak field in the backward direction.

> FIGURE {fig:4.4} src=../../media/ch04/fig-4-4.png
> caption: The forward and backward propagating beams interact with the velocity class of atoms for which they are resonant. The velocity classes begin to overlap as the optical frequency $\nu$ approaches the bare atomic resonance

Due to Doppler shifts in the thermal atoms, these two beams each interact with a certain velocity class. The strong field interacts with atoms satisfying $\nu = \Delta + kv_z$, saturating their transition, while the weak field interacts with atoms Doppler shifted by $\nu = \Delta - kv_z$. For generic detunings, $\nu \neq \Delta$, the two fields do not interact with the same group of atoms. As the frequency approaches the bare atomic resonance, however, $v_z \to 0$ and the two velocity classes begin to overlap. On resonance, both fields interact with stationary atoms. Consequently, we expect that the absorption

<!-- page 79 -->

spectrum for the weak field $\mathcal{E}_-$ will show sharp features near $\nu = \Delta$ due to stationary atoms saturated by the strong field.

> FIGURE {fig:4.5} src=../../media/ch04/fig-4-5.png
> caption: The absorption spectrum for the weak probe in the presence of a counterpropagating strong field of the same frequency.

### The saturated absorption spectrum

The qualitative picture of saturated spectroscopy may be verified quantitatively by calculating the absorption coefficient for the probe beam, $\alpha_- = k\mathrm{Im}[\chi_-] = k\mathrm{Im}[P_-/\epsilon_0\mathcal{E}_-]$. To separate out the forward and backward propagating fields, we decompose the atomic polarization into two running waves in the $\pm\hat{z}$ direction,
$$ P = P_+e^{-i\nu t + ikz} + P_-e^{-i\nu t - ikz} + c.c. $$ {eq:4.67}
In order to account for the inhomogenous Doppler broadening, this total polarization can be further broken down into contributions from atoms with different velocities. A particular velocity group $v_z$ contributes a polarization $P^{(v_z)}$ proportional to the atomic coherence induced by the two counterpropagating beams,
$$ \rho_{21}^{(v_z)} = \underbrace{\rho_{21}^{(v_z)+}}_{\sim\mathcal{E}_+} + \underbrace{\rho_{21}^{(v_z)-}}_{\sim\mathcal{E}_-}. $$ {eq:4.68}

<!-- page 80 -->

Once we have calculated the polarization for the appropriate density $n(v_z)$ of atoms, $P_\pm^{(v_z)} = n(v_z)\mu^*\rho_{21}^{(v_z)\pm}$, we can sum over velocity classes and divide by $\epsilon_0\mathcal{E}_\pm$ to obtain the probe beam susceptibility.

We can use our previous results from analysis of linear interactions to find this coherence $\rho_{21}^{(v_z)-}$ because the probe beam $\mathcal{E}_-$ is weak. In particular, we find
$$ \rho_{21}^{(v_z)-} \approx \frac{i\Omega_-(\rho_{11} - \rho_{22})^{(v_z)}}{\gamma_{12} - i(\delta + kv_z)}, $$ {eq:4.69}
where $\Omega_\pm = \mu\mathcal{E}_\pm/\hbar$. Note that the detuning $\delta = \nu - \omega$ is Doppler shifted due to the atomic velocity along the axis of light propagation. For the probe, atoms propagating to the right see the field at a higher frequency (blueshifted) so the net detuning is $\delta + kv_z$.

Our previous linear analysis required no further calculations because the population distribution $\rho_{11} - \rho_{22}$ was independent of $\Omega_-$ for a sufficiently weak field. To accurately model the nonlinear aspects of saturated absorption spectroscopy, however, we must incorporate the effects of the strong field $|\Omega_+|^2$ on $\rho_{11} - \rho_{22}$. We saw earlier that strong, nonlinear interactions can saturate a transition by redistributing the atomic population:
$$ (\rho_{11} - \rho_{22})^{(v_z)} = \frac{1}{1 + S(\delta - kv_z)}, $$ {eq:4.70}
where the saturation parameter is
$$ S(\delta - kv_z) = \frac{4|\Omega_+|^2(\gamma_{12}/\gamma)}{\gamma_{12}^2 + (\delta - kv_z)^2}. $$ {eq:4.71}
Note that the sign of the Doppler shift is reversed for $\Omega_+$ because it is propagating in the opposite direction to $\Omega_-$. Substituting into Eq. (4.69), we obtain the backward-propagating coherence induced by $\Omega_+$ and $\Omega_-$ in atoms with velocity $v_z$:
$$ \rho_{21}^{(v_z)-} \approx \left(\frac{\gamma_{12}^2 + (\delta - kv_z)^2}{\gamma_{12}^2 + (\delta - kv_z)^2 + 4|\Omega_+|^2(\gamma_{12}/\gamma)}\right)\left(\frac{i\Omega_-}{\gamma_{12} - i(\delta + kv_z)}\right). $$ {eq:4.72}

We are now prepared to calculate the absorption coefficient for the probe beam $\alpha_- = k\ \mathrm{Im}[\chi_-] = k\ \mathrm{Im}[P_-/\epsilon_0\mathcal{E}_-]$ by summing over contributions to the polarization from all atomic velocity classes,
$$ P_- = \int dv_z\mu^*\rho_{21}^{(v_z)-}n(v_z), $$ {eq:4.73}

<!-- page 81 -->

where each velocity class is weighted by the thermal distribution $n(v_z)$.
$$ \chi_- = \frac{|\mu|^2}{\epsilon_0\hbar}\int dv_z n(v_z)\frac{i}{\gamma_{12} - i(\delta + kv_z)}\left(1 - \frac{S(\delta - kv_z)}{1 + S(\delta - kv_z)}\right) $$ {eq:4.74}
The first term describes the usual Doppler-broadened absorption of a weak probe; the second term describes the saturated effect we wish to calculate. By approximating the thermal velocity distribution as constant over the velocities which contribute to the saturated absorption dip, $n(v_z) = n$, we can calculate the integral of the second term in closed form. The resulting expression is rather convoluted, and to elucidate the effects of the strong field we will expand it to lowest order in $\Omega_+$:
$$ \begin{aligned} \chi_- &\approx \frac{|\mu|^2}{\epsilon_0\hbar}\int dv_z n(v_z)\frac{i}{\gamma_{12} - i(\delta + kv_z)}\left(1 - \frac{4|\Omega_+|^2(\gamma_{12}/\gamma)}{\gamma_{12}^2 + (\delta - kv_z)^2}\right) \\ &= \frac{|\mu|^2}{\epsilon_0\hbar}\int dv_z n(v_z)\frac{i\left(\gamma_{12} + i(\delta + kv_z)\right)}{\gamma_{12}^2 + (\delta + kv_z)^2}\left(1 - \frac{4|\Omega_+|^2(\gamma_{12}/\gamma)}{\gamma_{12}^2 + (\delta - kv_z)^2}\right) \end{aligned} $$
The saturated absorption feature is thus given by
$$ \begin{aligned} \mathrm{Im}[\chi_-]_\mathrm{sat} &\approx -\frac{|\mu|^2}{\epsilon_0\hbar}\int dv_z n\frac{\gamma_{12}}{\gamma_{12}^2 + (\delta + kv_z)^2}\frac{4|\Omega_+|^2(\gamma_{12}/\gamma)}{\gamma_{12}^2 + (\delta - kv_z)^2} \\ &= -\frac{|\mu|^2 n}{\epsilon_0\hbar k}\frac{2\pi|\Omega_+|^2(\gamma_{12}/\gamma)}{(\gamma_{12}^2 + \delta^2)}, \end{aligned} $$ {eq:4.75}
where we have used $n(v_z) = n$ and
$$ \int_{-\infty}^{\infty}\frac{1}{1 + (x - a)^2}\frac{1}{1 + (x + a)^2} = \frac{\pi}{2(1 + a^2)}. $$ {eq:4.76}
The expression for the saturated absorption feature, in the limit that $\Omega_+$ is weak and $n(v_z)$ is slowly varying, indicates that we should see a sharp dip in the absorption with a characteristic width given by the Doppler-free linewidth $\gamma_{12}$.

<!-- notes
- Typos kept: "susceptiblity" (twice, page 75); "detunings ," with a space before the comma (page 76); "c.c," for "c.c." in Eq. (4.66); "inhomogenously" and "inhomogenous" (inhomogeneously, inhomogeneous); "saturating absorption" (usually saturable or saturated absorption).
- Eq. (4.75): the book prints one number against the two-row aligned block; kept as one display. The unnumbered weak-saturation expansion (page 77) and the two-row $\chi_-$ expansion (page 81) are aligned displays without numbers.
- Eqs. (4.59)-(4.60): the propagation equation should carry $\frac{i\bar{k}}{2}\chi_n(\delta)\mathcal{E}$, as Eq. (4.32) does; the factor 1/2 is dropped. Kept as printed.
- Eq. (4.53) has $-i\Omega$ in the numerator while Eq. (4.69) for the same linear coherence has $+i\Omega_-$; the sign convention is inconsistent between the two. Kept as printed.
- Eq. (4.76): the integrand lacks its $dx$. Kept as printed.
- Section 4.3.1: $\Delta$ is called the atomic transition "energy" but is used as a frequency ($\nu = \Delta \pm kv_z$).
- Figure 4.4: the panel labels place the strong field at $kv_z = \Delta - \nu$ and the weak field at $kv_z = \nu - \Delta$, the reverse of the text ($\nu = \Delta + kv_z$ for the strong field, so $kv_z = \nu - \Delta$); the titles "$\Delta-\nu>\gamma$" and "$\Delta-\nu<\gamma$" mean $|\Delta - \nu|$.
- Figure 4.4's caption ends without a period, as printed.
-->

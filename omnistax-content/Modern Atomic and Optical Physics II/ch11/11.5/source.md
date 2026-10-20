# 11.5 Excitations in a Bose condensate

We have developed a basic understanding of the ground state wavefunction for a Bose-Einstein condensate; a more complete picture of condensate behaviour requires knowledge of the elementary excitations in a BEC. A description of such excitations will allow us to account for the spectrum of the condensate, thermal effects at finite temperatures, and possible non-classical effects analogous to squeezing of a photon field.

<!-- page 273 -->

## 11.5.1 The Bogoliubov approximation

Our approach is motivated by an analogy to classical coherent beams, where the electric field operator $\hat{\mathcal{E}}$ is well approximated by a c-number $\mathcal{E}$ and some small operator deviation $\delta\hat{\mathcal{E}}$. For matter waves, we will replace the field operator with its average value and some small fluctuations about that average
$$ \hat{\psi} = \psi + \delta\hat{\psi}. $$ {eq:11.142}
We can then linearize the Heisenberg equation for $\hat{\psi}$ in the small quantity $\delta\hat{\psi}$, obtaining a set of linear coupled equations for $\delta\hat{\psi}$ and $\delta\hat{\psi}^\dagger$:
$$ i\hbar\frac{\partial}{\partial t}\delta\hat{\psi} = \left(-\frac{\hbar^2}{2m}\nabla^2 + V(r)\right)\delta\hat{\psi} + U_0\delta\hat{\psi}^\dagger\psi^2 + 2U_0|\psi|^2\delta\hat{\psi}, $$ {eq:11.143}
and similar for the hermitian conjugate.

Since these coupled equations are linear, we can solve them by looking for normal mode solutions. We will define operators $\hat{\alpha}_j$ and $\hat{\alpha}_j{}^\dagger$ which annihilate and create bosonic excitations in the normal mode with frequency $\omega_j$; since the excitations are bosons, their creation and annihilation operators obey Bose statistics $[\hat{\alpha}_j, \hat{\alpha}_k{}^\dagger] = \delta_{jk}$. We can expand $\delta\hat{\psi}$ in terms of the normal modes
$$ \delta\hat{\psi} = e^{-i\mu t/\hbar}\sum_j\left(u_j(r)\hat{\alpha}_j e^{-i\omega_j t} - v_j^*(r)\hat{\alpha}_j^\dagger e^{i\omega_j t}\right), $$ {eq:11.144}
and the field operator will be properly normalized if
$$ |u_j|^2 - |v_j|^2 = 1. $$ {eq:11.145}

When we substitute our expansion for $\delta\hat{\psi}$ into Eq. (11.143), we find that the coefficients for each normal mode are independent, so we obtain a set of equations for each mode $j$. Equating terms $\propto e^{i\omega_j t}$ and $\propto e^{-i\omega_j t}$, we find
$$ \left(-\mu - \hbar\omega_j - \frac{\hbar^2\nabla^2}{2m} + V(r) + 2U_0\tilde{\psi}^2\right)u_j(r) = U_0\tilde{\psi}^2 v_j(r) $$ {eq:11.146}
$$ \left(-\mu + \hbar\omega_j - \frac{\hbar^2\nabla^2}{2m} + V(r) + 2U_0\tilde{\psi}^2\right)v_j(r) = U_0\tilde{\psi}^2 u_j(r), $$ {eq:11.147}
where $\psi = \tilde{\psi}e^{-i\mu t/\hbar}$ and $\tilde{\psi} \in \mathbb{R}$. These time independent equations give the eigenfrequencies $\omega_j$ and eigenmodes $\{u_j, v_j\}$ of excitations in the condensate, and are known as the “Bogoliubov equations”.

<!-- page 274 -->

:::example {ex:11.5-1} Example: homogeneous potential

The Bogoliubov equations are particularly transparent for a condensate in a uniform potential $V(x) = 0$. The Thomas-Fermi approximation gives $\tilde{\psi} = \sqrt{n_0}$, where $n_0$ is the condensate density and $\mu = n_0U_0$ is the chemical potential. Since there is no explicit dependence on position anywhere in the problem, the eigenmodes are most easily obtained in the Fourier domain,
$$ u_j(r) = u_q e^{iqr} $$ {eq:11.148}
$$ v_j(r) = v_q e^{iqr}. $$ {eq:11.149}
The Bogoliubov equations become
$$ \begin{pmatrix} \epsilon_q + n_0U_0 - \hbar\omega_q & -n_0U_0 \\ -n_0U_0 & \epsilon_q + n_0U_0 + \hbar\omega_q \end{pmatrix}\begin{pmatrix} u_q \\ v_q \end{pmatrix} = 0, $$ {eq:11.150}
where $\epsilon_q = \hbar^2q^2/2m$. To find the eigenvalues and eigenmodes associated with excitations in the homogenous condensate, we need only solve this matrix equation. The frequencies $\omega_q$ follow from setting the determinant of the matrix to zero, yielding the dispersion relation
$$ \hbar\omega_q = \sqrt{\epsilon_q^2 + 2n_0U_0\epsilon_q}. $$ {eq:11.151}
Note that we have taken the positive square root because the negative one will not satisfy the normalization condition Eq. (11.145). Due to the presence of interactions, the dispersion relation is qualitatively different from that of a free particle $\hbar\omega_q = \epsilon_q$. In the large-wavenumber and small-wavenumber regimes, the frequency is
$$ \hbar\omega_q = \begin{cases} \epsilon_q + n_0U_0 & \text{large q} \\ \hbar qs & \text{small q,} \end{cases} $$ {eq:11.152}
which correspond to particle-like and sound-like excitations respectively. The sound-like spectrum has an associated sound velocity
$$ s = \sqrt{\frac{n_0U_0}{m}}, $$ {eq:11.153}
and the cross-over between the two regimes occurs near a critical wave-vector
$$ q_c \sim \hbar^{-1}\sqrt{2mn_0U_0} \sim \frac{1}{\xi} \sim \frac{ms}{\sqrt{2}\hbar}. $$ {eq:11.154}

<!-- page 275 -->

> FIGURE {fig:11.10} src=../../media/ch11/fig-11-10.png
> caption: The Bogoliubov excitation spectrum for a condensate confined in a homogeneous potential. Note that in the presence of interactions, a critical velocity must be reached in order to excite the condensate while conserving energy and momentum.

Physically, the long-wavelength excitations correspond to collective excitations of the condensate, and are responsible for the phenomenon of superfluidity. Once the wavelength approaches the inverse healing length, the condensate ceases to behave as a continuum, and single-particle-like excitations dominate.

:::

### Probing the excitation spectrum - under construction

Experiments have measured the excitation spectrum in a gaseous Bose condensate using a Bragg scattering technique. Two lasers with frequencies $\omega_1, \omega_2$ and wavevectors $k_1$ and $k_2$ can interact with the condensate to create excitations when their energy and momentum difference matches the quasiparticle spectrum. Absorption of a photon excites an atom from the condensate, while stimulated emission into the second optical mode de-excites an atom back into the condensate. Adiabatically eliminating the atomic excited states leads to an interaction of the form
$$ \hat{H} \propto \int d^3\mathbf{r}\hat{\psi}^\dagger(\mathbf{r})\hat{\psi}(\mathbf{r})e^{i(\mathbf{k_1} - \mathbf{k_2})\cdot\mathbf{r}}e^{-i(\omega_1 - \omega_2)t}. $$ {eq:11.155}

<!-- page 276 -->

Expanding out $\hat{\psi} = \psi + \delta\hat{\psi}$, and keeping only the terms linear in $\delta\hat{\psi}$, results in terms that can create or annihilate quasiparticles. For a homogeneous potential in one dimension, this interaction includes terms of the form
$$ \hat{H} \propto \int dx\ \tilde{\psi}\sum_q\left(u_q e^{iqx}\hat{\alpha}_q e^{-i\omega_q t} - v_q^* e^{-iqx}\hat{\alpha}_q^\dagger e^{i\omega_q t}\right)e^{i(k_1 - k_2)x}e^{-i(\omega_1 - \omega_2)t}. $$ {eq:11.156}
The integral over $x$ enforces momentum conservation in creation of a quasiparticle at momentum $q = k_1 - k_2$, while the time dependence leads to resonance at $\omega_q = \omega_1 - \omega_2$. Notably this interaction permits Bragg scattering even at zero temperature, where the initial occupation of quasiparticle modes vanishes.

### Superfluidity of repulsive atoms

Superfluidity requires that an object can move slowly through the fluid without experiencing any drag. Since drag is the macroscopic manifestation of excitations in a medium, we will see that the excitation spectrum of a repulsive Bose condensate implies superfluidity. In particular, consider an object moving at velocity $v$ through a Bose condensate. It will only create an excitation if it can resonantly impart its momentum and energy to an elementary excitation:
$$ \Delta p_\mathrm{object} = \hbar q $$ {eq:11.157}
$$ \Delta\epsilon_\mathrm{object} = \omega_q. $$ {eq:11.158}
Kinematics require that $\Delta\epsilon_\mathrm{object} \leq \Delta pv$, so the object can only create an excitation if it is moving faster than some critical velocity
$$ v > v_c = \frac{\epsilon_q}{\hbar q}. $$ {eq:11.159}
This represents the so-called Landau criterion for superfluidity, which states that objects moving slower than the speed of sound do not produce excitations.

## 11.5.2 BEC with attractive interactions

If the interatomic potential is attractive $U_0 < 0$, long-wavelength excitations $q \rightarrow 0$ have an imaginary frequency $\hbar\omega_q$. This implies that the condensate is unstable! Experimentally, however, stable condensates with attractive interactions have been observed. The explanation for the stability lies in the finite number of atoms confined to the trap.

<!-- page 277 -->

If an atomic cloud is localized within a characteristic trap length $a_t$, the minimum wave-vector allowed by the system is of order
$$ q_\mathrm{min} \approx \frac{1}{a_t}, $$ {eq:11.160}
so the excitations in the system have a minimum energy
$$ \hbar\omega_\mathrm{min} = \sqrt{\epsilon_{q_\mathrm{min}}^2 - 2n_0|U_0|\epsilon_{q_\mathrm{min}}}. $$ {eq:11.161}
When this minimum energy is real,
$$ \frac{\hbar^2}{a_t^2m} \geq 4n_0|U_0| = \frac{16\pi\hbar^2N}{mV}|a|, $$ {eq:11.162}
the condensate will be stable despite the attractive interactions. In particular, this implies a maximum number of atoms in the cloud
$$ N_\mathrm{max} \sim \frac{a_t}{|a|}. $$ {eq:11.163}
If condensate size exceeds $N_\mathrm{max}$, the attractive interactions will destabilize it and it will collapse.

## 11.5.3 Observation of BEC

As we mentioned earlier in the chapter, typical experiments probe the cold atom cloud using absorption imaging with near-resonant light. In certain cases, one could image the condensate in the trap, obtaining a spatial profile of the atom cloud. Alternately, by releasing the cold atom cloud from the trap and allowing it to expand for a time $\tau$, the momentum distribution of the atoms $p$ is mapped onto the spatial distribution $r = p\tau/m$. Such expansion images provide a means for distinguishing a cold, thermal atom cloud from a condensate. In a condensate, the momentum distribution follows from the size of the atom cloud $a_c$ and the uncertainty principle,
$$ p_\mathrm{BEC} \sim \frac{\hbar}{a_c}, $$ {eq:11.164}
resulting in a post-expansion spatial distribution
$$ R_\mathrm{BEC} \sim \frac{\hbar t}{a_cm} $$ {eq:11.165}

<!-- page 278 -->

In contrast, a thermal cloud of atoms will have a gaussian distribution of momenta in the trap
$$ P_\mathrm{thermal}(p) \sim e^{-p^2/p_T^2} $$ {eq:11.166}
leading to a gaussian spatial distribution
$$ P_\mathrm{thermal}(R) \sim e^{-R^2/R_T^2}, $$ {eq:11.167}
where $R_T$ and $p_T$ are the distance and momentum scale for an atom cloud at temperature $T$. The two momentum distributions are qualitatively different. By fitting the observed image to a bimodal distribution corresponding to a gaussian thermal cloud and a parabolic condensate, one can accurately calculate the proportion of condensed atoms.

<!-- notes
- The example "Example: homogeneous potential" is closed after the paragraph following Fig. 11.10, before the heading "Probing the excitation spectrum".
- 11.5.1 "homogenous" beside "homogeneous": the book's spelling, kept.
- Eq. (11.143) uses $\psi$ while Eqs. (11.146)-(11.147) use $\tilde{\psi}$ (the stationary amplitude); kept as printed.
- Eq. (11.158) prints $\Delta\epsilon_\mathrm{object} = \omega_q$ without $\hbar$; $\hbar\omega_q$ is meant.
- Eq. (11.159) prints $v_c = \epsilon_q/\hbar q$, the free-particle energy; the Landau criterion meant is $v_c = \min_q \omega_q/q$ (i.e. $\hbar\omega_q/\hbar q$), which equals the sound speed $s$ as the next sentence says.
- Eq. (11.165) uses $t$ for the expansion time the paragraph calls $\tau$; $R_\mathrm{BEC} \sim \hbar\tau/(a_c m)$ is meant.
- Eq. (11.154): $\hbar^{-1}\sqrt{2mn_0U_0} = \sqrt{2}ms/\hbar$, not $ms/(\sqrt{2}\hbar)$; the last expression is off by a factor 2 (only a "$\sim$" estimate).
- The heading "Probing the excitation spectrum - under construction" is the book's, kept.
-->

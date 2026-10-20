# 4.2 Linear optical propagation

<!-- page 68 -->

The simplest possible case of light propagation in a resonant field consists of an applied field sufficiently weak that the atoms only respond to it linearly. We found earlier that when the applied field is weak, perturbation theory may be used to solve exactly for the atomic density matrix components in the Fourier domain. We shall take a similar approach here, where the Fourier components of the polarization may be written in terms of the Fourier components of the off-diagonal elements of the (two-level) atomic density matrix,
$$ \mathcal{P}(\delta\nu) = \frac{N}{V}\mu\rho_{21}(\delta\nu)e^{-i\bar{k}z}. $$ {eq:4.29}
If the atoms respond linearly, the polarization must be proportional to the applied field. The proportionality constant defines the susceptibility,
$$ \chi(\delta\nu) = \frac{\mathcal{P}(\delta\nu)}{\epsilon_0\mathcal{E}(\delta\nu)}. $$ {eq:4.30}
This quantity $\chi$ entirely characterizes the atom-photon interaction in the linear regime, and no further information is needed to find an exact solution.

For plane wave propagation (where transverse effects may be disregarded), the SVEA equation reduces to
$$ \frac{\partial\mathcal{E}}{\partial z} + \frac{1}{c}\frac{\partial\mathcal{E}}{\partial t} = \frac{i\bar{k}}{2\epsilon_0}\mathcal{P}. $$ {eq:4.31}

<!-- page 69 -->

This first order equation may be trivially solved by moving to the Fourier domain,
$$ \frac{\partial\mathcal{E}}{\partial z} = \frac{i\delta\nu}{c}\mathcal{E} + \frac{i\bar{k}}{2}\underbrace{\chi(\delta\nu)\mathcal{E}}_{\propto\mathcal{P}}, $$ {eq:4.32}
where the frequency components of the electric field obey
$$ \mathcal{E}(\delta\nu, z) = \mathcal{E}(\delta\nu, 0)e^{iz(\delta\nu/c + \bar{k}\chi(\delta\nu)/2)}. $$ {eq:4.33}
By transforming back to the time domain, we obtain a general solution for linear propagation,
$$ \mathcal{E}(t, z) = \int d(\delta\nu)e^{-i\delta\nu t}\mathcal{E}(\delta\nu, 0)e^{iz(\delta\nu/c + \bar{k}\chi(\delta\nu)/2)}. $$ {eq:4.34}
This solution tells us that, given the spectrum of the field at some position in space, we can decompose the field into frequency components, propagate each frequency component separately, and then transform back to the time domain to obtain the full solution. Note that we only need $\chi(\delta\nu)$ to solve the linear propagation problem exactly. This expression encompasses three main effects:

(1) Absorption arises from the imaginary part of the susceptibility.

(2) Refraction is caused by the real part of the susceptibility.

(3) Dispersion results from frequency dependence of the susceptibility.

## 4.2.1 Absorption and refraction

The effects of absorption and refraction can be illustrated by considering a resonant, continuous-wave field with a delta function frequency distribution, $\mathcal{E}(\delta\nu) \propto \delta(\delta\nu)$, so that
$$ \mathcal{E}(t, z) = \mathcal{E}e^{i\bar{k}\chi(0)z/2}. $$ {eq:4.35}
In general $\chi$ may be a complex quantity, and its real and imaginary parts have qualitatively different effects on the propagating field. In particular, $\mathrm{Im}[\chi]$ leads to exponential attenuation or amplification of the beam intensity with distance at a rate
$$ \alpha = \bar{k}\ \mathrm{Im}[\chi(0)]. $$ {eq:4.36}
The real component $\mathrm{Re}[\chi]$ shifts the phase of the field linearly with distance, which can be understood as a modification of the wavevector $\bar{k} \to \bar{k} + \bar{k}\mathrm{Re}[\chi]/2$, or a change in the index of refraction
$$ n = 1 + \frac{\mathrm{Re}[\chi(0)]}{2}. $$ {eq:4.37}

<!-- page 70 -->

Note that these formulae are only valid when the slowly varying envelope approximation holds, i.e. $|\mathrm{Im}[\chi(0)]|, |\mathrm{Re}[\chi(0)]| \ll 1$.

## 4.2.2 Dispersion

If the applied field has a finite bandwidth, the frequency dependence of the susceptibility begins to matter. For nearly monochromatic fields, the susceptibility may be expanded around its resonant value,
$$ \chi(\delta\nu) \approx \chi(0) + \frac{d\chi}{d\nu}\delta\nu + \ldots $$ {eq:4.38}
Each term leads to different effects: the first corresponds to refraction, the second to group velocity, the third to group velocity dispersion, and so on. For example, if we keep only the second order terms, we find
$$ \mathcal{E}(t, z) = \int d(\delta\nu)\mathcal{E}(\delta\nu, 0)e^{-i\delta\nu t}e^{iz(\delta\nu/c + \bar{k}(\chi(0) + \frac{d\chi}{d\nu}\delta\nu)/2)} $$ {eq:4.39}
$$ = e^{iz\bar{k}\chi(0)/2}\int d(\delta\nu)\mathcal{E}(\delta\nu, 0)e^{-i\delta\nu(t - z/v_g)} $$ {eq:4.40}
$$ = e^{iz\bar{k}\chi(0)/2}\mathcal{E}(t - z/v_g, z = 0), $$ {eq:4.41}
so the envelope propagates at the so-called group velocity
$$ v_g = \frac{c}{1 + \frac{\bar{\nu}}{2}\frac{d\chi}{d\nu}}. $$ {eq:4.42}

## 4.2.3 Two level systems

Consider light propagation through a dilute gas of identical, noninteracting two-level atoms. In the steady state, we can solve the optical Bloch equations for the off-diagonal density matrix elements to obtain the polarization and thus the susceptibility,
$$ \chi(\delta\nu) = i\frac{N}{V}\frac{\mu^2}{\hbar\epsilon_0}\left(\rho_{11}^0 - \rho_{22}^0\right)\frac{1}{\gamma_{12} - i\delta\nu}. $$ {eq:4.43}
Clearly, the susceptibility exhibits a Lorentzian lineshape with linewidth $\gamma_{12}$. Identifying the dipole moment with the spontaneous emission rate ($\gamma = \frac{\mu^2 k_0^3}{3\pi\epsilon_0\hbar}$ and $k_0 = 2\pi/\lambda$), we can also express the susceptibility as
$$ \chi(\delta\nu) = i\frac{3}{8\pi^2}\frac{N}{V}\lambda^3\left(\rho_{11}^0 - \rho_{22}^0\right)\frac{\gamma}{\gamma_{12} - i\delta\nu}. $$ {eq:4.44}

<!-- page 71 -->

> FIGURE {fig:4.1} src=../../media/ch04/fig-4-1.png
> caption: The real (refractive) and imaginary (absorptive) parts of the susceptibility for a two-level atom near resonance

### Resonant fields

The magnitude of the susceptibility on resonance is
$$ \chi(0) = i\frac{3}{8\pi^2}\frac{N}{V}\lambda^3\frac{\gamma}{\gamma_{12}}. $$ {eq:4.45}
Here we have set $\rho_{11}^0 = 1, \rho_{22}^0 = 0$, since it is in the regime where the upper state is negligibly populated that the atom responds linearly to the field. Since $\chi(0)$ is purely imaginary, there is no refraction on resonance, but there is absorption. The electric field amplitude propagates as
$$ \mathcal{E}(z) = \mathcal{E}(0)e^{(-\mathrm{Im}[\chi(0)] + i\mathrm{Re}[\chi(0)])\bar{k}z/2} $$ {eq:4.46}
and we define the corresponding intensity loss
$$ I(z) = I(0)e^{-N\tilde{\sigma}z/V} $$ {eq:4.47}
in terms of the absorption cross-section
$$ \tilde{\sigma} = \frac{3}{4\pi}\lambda^2\frac{\gamma}{\gamma_{12}} $$ {eq:4.48}
$$ \to \frac{3}{2\pi}\lambda^2 \text{ for purely radiative broadening.} $$ {eq:4.49}
Surprisingly, in the case of radiative broadening the resonant cross section is independent of the atomic dipole moment and depends only on $\lambda^2$; this maximal absorption cross section is known as the “unitary limit”.

<!-- page 72 -->

### Far-detuned fields

Far from resonance, $\delta\nu \gg \gamma_{12}$, the imaginary (absorptive) component $\mathrm{Im}[\chi] \propto 1/\delta\nu^2$ is much smaller than the real (reactive) component $\mathrm{Re}[\chi] \propto 1/\delta\nu$, so the medium is almost entirely refractive and causes little absorption.

## 4.2.4 Line-broadening mechanisms

The existence of the unitary limit shows that different line broadening mechanisms (e.g. radiative vs non-radiative) can have different effects on the behavior of a system. It is particularly important to distinguish between processes which affects every atom equally and processes which broaden the linewidth of an ensemble but not its constituent atoms. The former “homogeneous” linewidth may not be visible in an ensemble exhibiting the latter “inhomogenous” broadening. Two important examples of systems exhibiting inhomogeneous broadening are

(1) Optical emitters (e.g. color centers or quantum dots) in a solid state environment. Local fields have a strong influence on the optical transitions, so each emitter will exhibit different transition strengths and frequencies.

(2) Atoms with a thermal velocity distribution. The Doppler effect shifts their resonant frequency, so each atom interacts differently with applied fields.

### Doppler broadening

To illustrate how inhomogenous broadening affects linear optical propagation, we will examine the Doppler broadened atoms in more detail. In particular, we consider atoms in a thermal gas which are illuminated in the $z$ direction by a field of frequency $\nu$. Each atom experiences an apparent frequency $\nu - kv_z + \mathcal{O}(v^2)$ which is Doppler shifted due to the atomic velocity $v_z$. Equivalently, one can view this as a shift in the atomic resonance frequency $\omega \to \omega + kv_z$. For a Doppler-broadened medium an incident light beam will only be on resonance with a subset of atoms with the appropriate velocity class, but the absorption spectrum will be very broad, with width on order $kv_T$ where $v_T$ is the characteristic velocity corresponding to the atomic temperature. In order to calculate the susceptibility, we will determine the atomic response of each velocity class, and then sum over all velocity classes. The susceptibility is thus approximately
$$ \chi(\delta\nu) \approx \int dv_z\frac{n(v_z)}{\gamma_{12} - i(\delta\nu - kv_z)} $$ {eq:4.50}

<!-- page 73 -->

where the thermal velocity distribution is
$$ n(v_z) = \frac{N}{V}e^{-v_z^2/v_T^2}\frac{1}{\sqrt{\pi}v_T}. $$ {eq:4.51}
The integral in Eq. (4.50) cannot be solved exactly, but we will consider two limiting cases where it can be approximately evaluated. For very cold atoms, $\gamma_{12} \gg kv_T$, there is no inhomogeneous broadening, and the observed ensemble absorption spectrum is Lorentzian, matching the intrinsic atomic linewidth. In the opposite limit, inhomogeneous broadening dominates, and the ensemble spectrum is Gaussian with width $\sim kv_T$. Note that inhomogeneous broadening also reduces the $\delta\nu = 0$ cross section by $\sim\gamma_{12}/kv_T$, so that
$$ \sigma_{inhom.}(0) = \frac{3}{4\pi}\lambda^2\frac{\sqrt{\pi}\gamma}{kv_T}. $$ {eq:4.52}
As a quantitative example, atomic Rb at $T = 300\text{K}$ has an inhomogeneous linewidth of $\sim 500\text{MHz}$, which is far greater than its radiative linewidth of $\gamma \approx 5\text{MHz}$. For a Maxwell-Boltzmann thermal distribution of velocities, the Doppler width scales as the square root of the temperature. By laser cooling atoms (for example in a magneto-optical trap), it is possible to reduce the Doppler broadening to less than the radiative linewidth.

> FIGURE {fig:4.2} src=../../media/ch04/fig-4-2.png
> caption: The absorption spectrum for a Doppler broadened ensemble of atoms is much broader than the absorption spectrum of a single velocity class, which has a linewidth set by the dephasing rate $\gamma_{12}$.

<!-- page 74 -->

In general, however, it is impossible to tell whether an ensemble is homogenously or inhomogeneously broadened with linear measurements. Such properties can be probed only by measuring the nonlinear response of the medium.

<!-- notes
- The conditions (1)-(3) on page 69 and (1)-(2) on page 72 are kept as the book's indented paragraphs.
- Typos kept: "processes which affects every atom" (affect); "inhomogenous" (twice, inhomogeneous); "homogenously" (homogeneously).
- 4.2 first sentence: "light propagation in a resonant field" means a resonant medium. Kept as printed.
- 4.2.2: "if we keep only the second order terms" means keeping terms up to first order in $\delta\nu$ (the first two terms of Eq. (4.38)), which is what Eqs. (4.39)-(4.41) do. Kept as printed.
- Eq. (4.50): the prefactor $i\frac{\mu^2}{\hbar\epsilon_0}$ of Eq. (4.43) is dropped, so it is a proportionality ("approximately"), not the susceptibility itself.
- Rb radiative linewidth "$\gamma \approx 5\text{MHz}$": the D lines have $\gamma/2\pi \approx 6$ MHz (D2 6.07 MHz, D1 5.75 MHz); 5 MHz is a loose round figure. Kept as printed.
-->

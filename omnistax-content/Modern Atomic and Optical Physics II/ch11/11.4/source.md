# 11.4 Atomic interactions

We have seen how trapping and cooling can be combined to bring an atomic ensemble to quantum degeneracy, where an ideal gas would exhibit Bose condensation. Real atoms, however, are not an ideal gas, and their interactions play an important role in determining how atomic Bose condensates behave.

In principle, including atomic interactions in our theory could prove problematic. However, dilute atomic gases offer an appealing opportunity to work with extremely low densities $n \sim 10^{12} - 10^{15}\ \mathrm{cm}^{-3}$ where the atoms are separated by distances $n^{-1/3} \sim 100\mathrm{nm} - 1\mu\mathrm{m}$. In contrast, liquids typically have a density $n \sim 10^{21}\ \mathrm{cm}^{-3}$ so high that the interatomic spacing $n \sim 1nm$ is hardly larger than the size of the atoms $r_0 \sim 1\mathrm{nm}$ set by the tail of the van der Waals interaction. As a result, the theory for dilute gases is much simpler than that for liquids because we can identify a small parameter $n^{-1/3}r_0$ in which to perturbatively expand. For example, the alkali atoms have typical size $r_0 \sim 1 - 10\mathrm{nm}$, so $n^{-1/3}r_0 < 0.1$.

The small parameter $n^{-1/3}r_0$ is not, however, quite what we want. In order to effectively describe scattering processes in a low-density limit, it is desirable to expand in a different small parameter $kr_0 \ll 1$. Nevertheless, if the gas is sufficiently cold $T < T_c$, where $T_c \sim \hbar^2 n^{2/3}/m$ corresponds

<!-- page 251 -->

to the condensation temperature for bosons or the degeneracy temperature for fermions, then $n^{-1/3}r_0 \ll 1$ implies $kr_0 \ll 1$. These so-called dilute quantum gases provide a theoretically tractable system in which to study atomic interactions.

## 11.4.1 The van der Waals potential

Interactions between well-separated, neutral, ground-state atoms are dominated by the van der Waals potential. Consider two such atoms separated by a distance much larger than the Bohr radius of the atom $r \gg a_0$. At these large distances, the electrostatic interaction between the atom can be written as a multipole expansion
$$ U(r) = \frac{c_1}{r} + \frac{c_2}{r^2} + \frac{c_3}{r^3} + \frac{c_4}{r^4} + \frac{c_5}{r^5} + \frac{c_6}{r^6} + \ldots. $$ {eq:11.39}
The first term corresponds to the Coulomb potential, is nonzero only if the atoms are charged. The second term represents charge-dipole interactions, with higher orders in r representing higher order interactions. For the alkali atoms, all of these terms are zero in first order perturbation theory because the diagonal matrix elements of the dipole, quadrupole, etc... operators vanish. Second order perturbation theory is required to find the leading order potential, and the main contribution (for neutral atoms in their ground states) comes from the dipole-dipole interaction
$$ \hat{V}_d(r) = \frac{\mathbf{d_1}\cdot\mathbf{d_2}}{r^3} - 3\frac{(\mathbf{d_1}\cdot\mathbf{r})(\mathbf{d_2}\cdot\mathbf{r})}{r^5}. $$ {eq:11.40}
If the energy of the atom in state $|n\rangle$ is $E_n$, then to leading order in $1/r$, the resulting potential is
$$ U(r) = \frac{6}{r^6}\sum_{n,n'}\frac{|\langle 0|d_z|n\rangle|^2|\langle 0|d_z|n'\rangle|^2}{2E_0 - E_{n'} - E_n} $$ {eq:11.41}
$$ = -\frac{\hbar^2}{2\mu}\frac{r_0^4}{r^6}, $$ {eq:11.42}
where $\mu = m_1m_2/(m_1 + m_2)$ is the atomic reduced mass. Note that $E_0 < E_{n\neq 0}$, so the second order correction is always negative, so at large distances the van der Waals potential is attractive. Typical values of $r_0$ for the alkalis are between 1 nm and 10 nm, which is substantially larger than their physical sizes $\sim 0.1$ nm. If the interatomic distance becomes of the order of $r_0$, the multipole expansion breaks down, and the potential is no longer

<!-- page 252 -->

necessarily attractive. Moreover, for $r \gg r_0$, U(r) is negligible compared to any centrifugal potential. At short distances, electronic exchange dominates the atomic interactions, producing a strong short-range repulsive potential.

## 11.4.2 Basic scattering theory

Our analysis of two-body scattering theory will consider only relative motion between two atoms. This assumption is valid when the center of mass motion decouples from the relative motion, for instance if the two atoms collide in a uniform background potential or are confined in a parabolic external potential. By focussing on relative motion, we can reformulate interatomic collisions as a single body scattering off a fixed potential $U(r)$, where $r$ is the is the interatomic distance. The only important difference is a change in the mass from the bare atomic masses $m_1, m_2$ to the reduced mass of the single body $\mu = m_1m_2/(m_1 + m_2)$.

The wavefunction for a single body impinging on the potential from direction $\hat{z}$ can be written in the form
$$ \psi_k(\mathbf{r}) = e^{ikz} + \psi_{sc}(\mathbf{r}), $$ {eq:11.43}
where $\psi_k$ satisfies the Schroedinger equation
$$ -\frac{\hbar^2\nabla^2}{2\mu}\psi_k + U(\mathbf{r})\psi_k = \frac{\hbar^2k^2}{2\mu}\psi_k. $$ {eq:11.44}
In the limit that $r \to \infty$, the scattered wave approaches an outgoing wave with some angular dependence
$$ \lim _{r\to\infty}\psi_k(\mathbf{r}) = e^{ikz} + f_k(\theta)\frac{e^{ikr}}{r}, $$ {eq:11.45}
where $\theta$ is the angle between $\mathbf{r}$ and the $z$ axis.

The incoming plane wave portion of the wavefunction can be written in terms of the spherical harmonics with help from the following useful formula:
$$ e^{ikz} = \sum_{l=0}^{\infty} i^l(2l+1)P_l(\cos\theta)j_l(kr), $$ {eq:11.46}
where $j_l(kr)$ is the spherical Bessel function of order l. In the limit $kr \gg 1$, i.e. far away from the scatterer, the Bessel function approaches a sinusoidal function, so that
$$ e^{ikz} \approx \sum_{l=0}^{\infty}\frac{2l+1}{2ik}P_l(\cos\theta)\frac{1}{r}\left((-1)^{l+1}e^{-ikr} + e^{ikr}\right). $$ {eq:11.47}

<!-- page 253 -->

The entire wavefunction can thereby be written as a coherent superposition of incoming and outgoing spherical waves.

### Scattering cross-sections

Experiments involving scattering typically measure quantities like the number of atoms scattered in a certain direction. Consequently it is convenient to identify the partial scattering cross-section
$$ \frac{d\sigma}{d\Omega} = \frac{\text{scattering rate into solid angle d}\Omega}{\text{intensity of incoming beam}}. $$ {eq:11.48}
Since the numerator has units of 1/time, and the denominator has units of 1/(area·time), the cross-section has units of area, which can be interpreted as the size of the scattering potential. Expressed in terms of the scattered wavefunction defined in Eq. (11.45), the partial cross-section is
$$ \frac{d\sigma}{d\Omega} = |f_k(\theta)|^2\frac{v_\mathrm{final}}{v_\mathrm{initial}}, $$ {eq:11.49}
where $v_\mathrm{final}$ and $v_\mathrm{initial}$ are the final and initial velocities of the atom. We will focus on elastic collisions, where $v_\mathrm{final} = v_\mathrm{initial}$.

The total cross-section is found by integrating the partial scattering cross-section over all solid angles
$$ \sigma = \int d\Omega\frac{d\sigma}{d\Omega} = 2\pi\int_0^{\pi}|f_k(\theta)|^2\sin\theta d\theta. $$ {eq:11.50}

### The Born approximation

In order to calculate useful quantities like the cross-section, we need to know how to write $f_k(\theta)$ in terms of the scattering potential $U(r)$. If we knew the scattered wavefunction $\psi_k(\mathbf{r})$, we could integrate the Schroedinger equation to obtain
$$ f_k(\theta) = \frac{-\mu}{2\pi\hbar^2}\int d^3\mathbf{r}'e^{-i\mathbf{k}'\cdot\mathbf{r}'}U(\mathbf{r}')\psi_k(\mathbf{r}'), $$ {eq:11.51}
where $\theta$ is the angle between the incident wave $\mathbf{k}$ and the scattered wave $\mathbf{k}'$. The Born approximation corresponds to a perturbative expansion in the potential. In the Born approximation, the incident wave is not much affected by the scatterer, so that
$$ \psi_k(\mathbf{r}) \approx e^{ikz}, $$ {eq:11.52}

<!-- page 254 -->

and the partial scattering cross-section is given by the Fourier transform of the potential:
$$ f_k(\theta) = \frac{-\mu}{2\pi\hbar^2}\int d^3\mathbf{r}'e^{-i(\mathbf{k}'-\mathbf{k})\cdot\mathbf{r}'}U(\mathbf{r}'). $$ {eq:11.53}
While the Born approximation does not provide a good solution for most situations, it does provide some useful intuition for cold collisions. In particular, when the incident particles have low energy, so that $k$ is small relative to the effective size of the potential $r_0$, it is valid to expand the exponential in the first Born approximation,
$$ f_k(\theta) \approx \frac{-\mu}{2\pi\hbar^2}\int d^3\mathbf{r}'(1 - i(\mathbf{k}' - \mathbf{k})\cdot\mathbf{r}' + \cdots)U(\mathbf{r}'). $$ {eq:11.54}
At low energies, only the first term will contribute, so that there is no angular dependence in the partial scattering amplitude $f_k(\theta)$. In other words, at low temperatures the outgoing scattered wave is isotropic.

### The partial wave expansion

To arrive at a quantitative description of low-energy scattering, we will make use of partial wave analysis. Assuming a spherical interatomic potential $U(r)$, we can expand the wavefunction in terms of the spherical harmonics,
$$ \psi = \sum_{l=0}^{\infty}A_lP_l(\cos\theta)R_l(r), $$ {eq:11.55}
where $P_l$ is the $l^{th}$ Legendre polynomial. Substituting $\psi$ into the Schrodinger equation
$$ -\frac{\hbar^2\nabla^2}{2\mu}\psi_k + U(\mathbf{r})\psi_k = \frac{\hbar^2k^2}{2\mu}\psi_k. $$ {eq:11.56}
and using $U(\mathbf{r}) = U(r)$, we get a set of uncoupled equations, one for each $R_l(r)$:
$$ \frac{d^2}{dr^2}R_l(r) + \frac{2}{r}\frac{d}{dr}R_l(r) - \frac{l(l+1)}{r^2}R_l(r) - \frac{2\mu}{\hbar^2}U(r)R_l(r) = -k^2R_l(r). $$ {eq:11.57}

Due to the short range character of U(r) (since $kr_0 \ll 1$), we can divide space into two regions where different approximations are valid (see Figure 11.5). Provided we are working in the ultracold limit $kr_0 \ll 1$, the two regions overlap, and we can match the solutions to find the scattering amplitude.

<!-- page 255 -->

> FIGURE {fig:11.5} src=../../media/ch11/fig-11-5.png
> caption: The Schrodinger equation can be approximately solved for small $r$ in region A and for large $r$ in region B. In the ultracold limit $kr_0 \ll 1$ the regions of validity overlap, the two solutions can be matched for $r_0 < r < 1/k$.

In region A, $k \ll 1/r$ so we can neglect the energy term in the Schrodinger equation. In principle, we can solve this equation to find $R_l^{(A)}(r < r_0)$, and this solution will depend on the details of the short-range potential, but not on the energy $k$.

In region $B$, where $r > r_0$, the effect of the potential is negligible, and the Schrodinger equation reduces to a free-space Schrodinger equation in spherical coordinates. The solutions in this region are thus spherical Bessel functions, and for small distances $1 > kr > kr_0$
$$ R_l^{(B)}(r) = c_1r^l + c_2r^{-(l+1)}. $$ {eq:11.58}

By matching $R_l^{(B)}(r)$ with $R_l^{(A)}(r)$ in their simultaneous region of validity, we can obtain the two coefficients $c_1$ and $c_2$. Furthermore, since $R_l^{(A)}(r)$ and $R_l^{(B)}(r < 1/k)$ are independent of $k$, we find that the two coefficients $c_1$ and $c_2$ also do not depend on $k$. The ratio between the two coefficients can be estimated qualitatively by arguing that for $r \sim r_0$ the two terms should be comparable in magnitude, so
$$ \frac{c_2}{c_1} \propto r_0^{2l+1}. $$ {eq:11.59}

<!-- page 256 -->

The constant of proportionality is usually of order unity, but in special situations it can be dramatically enhanced.

The spherical Bessel function solutions $R_l^{(B)}(r)$ have a different asymptotic behavior at large $kr \gg 1$:
$$ R_l^{(B)}(r) \propto \frac{\sin\left(kr - \frac{\pi l}{2} + \delta_l\right)}{r} \sim \frac{(-1)^{l+1}e^{-ikr} + e^{ikr+2i\delta_l}}{r}, $$ {eq:11.60}
where the phase shift $\delta_l$ is determined by the coefficients $c_1$ and $c_2$:
$$ \tan\delta_l = \frac{c_2}{c_1}\frac{k^{2l+1}}{(2l-1)!!(2l+1)!!}. $$ {eq:11.61}
The double factorial symbol !! is defined by $n!! = n(n-2)(n-4)\ldots$, with $(-1)!! = 1$ for $l = 0$. Note from the definition that in the limit of zero energy $k \to 0$, the phase shift vanishes. This is a kinematic effect, which is a consequence of the short range potential.

We have seen how to calculate $c_1$ and $c_2$ using the short range potential, and from that derive the phase shift $\delta_l$. If we can represent $f_k(\theta)$ in terms of the phase shift, then at least in principle we can derive the scattering cross section from the interatomic potential energy. Examine Eq. (11.60) and Eq. (11.45), noting that the plane wave can written as in Eq. (11.47). By comparing the coefficients in front of $e^{ikr}$ and $e^{-ikr}$, we see that the scattering amplitude may be written
$$ f_k(\theta) = \sum_{l=0}^{\infty}P_l(\cos\theta)\frac{2l+1}{2ik}\left(e^{2i\delta_l} - 1\right). $$ {eq:11.62}
In the ultracold limit $kr_0 \ll 1$, the phase shift is small, so $\tan\delta_l \approx \delta_l \approx c(r_0k)^{2l+1}$ where $c$ is a constant of order unity. The scattering amplitude for partial wave $l$ is then
$$ f_l = \frac{\left(e^{2i\delta_l} - 1\right)}{2ik} \approx \frac{\delta_l}{k} \approx cr_0(r_0k)^{2l}. $$ {eq:11.63}
At low temperatures, $f_{l\neq 0} \ll f_0$ unless there is a resonance which increases the value of $c$. Since such resonances are highly improbable, in the ultracold limit we may safely neglect all but the s-wave scattering amplitude $f_0$.

## 11.4.3 S-wave scattering

S-wave ($l = 0$) scattering dominates at low temperatures, so we will discuss its properties in some detail. In particular, its properties can be entirely characterized by a single parameter, the s-wave scattering length.

<!-- page 257 -->

The $l = 0$ radial wavefunction has a particularly simple form for $r_0 < r < 1/k$:
$$ R_0^{(B)}(r) = c_1 + \frac{c_2}{r} \propto 1 - \frac{a}{r}, $$ {eq:11.64}
where we identify the s-wave scattering length
$$ a = -\frac{c_2}{c_1}. $$ {eq:11.65}
The s-wave phase shift can likewise be written in terms of the scattering length
$$ \tan\delta_0 = -ka $$ {eq:11.66}
as can the s-wave scattering amplitude
$$ f_0 = -\frac{a}{1+ika}. $$ {eq:11.67}
Note that in the low-energy limit, $f_0 \approx -a$; this furnishes an alternate definition of the scattering length:
$$ \lim _{k\to 0}f_0 = -a. $$ {eq:11.68}
However, it is important to remember that when $ka \sim 1$ the scattering amplitude will differ from the scattering length.

> FIGURE {fig:11.6} src=../../media/ch11/fig-11-6.png
> caption: The scattering length can be visualized as the intercept of the asymptote to the wavefunction in the region $r_0 \ll r \ll 1/k$.

<!-- page 258 -->

### Physical interpretation

To obtain some physical intuition for the s-wave scattering length, we will consider three examples: a hard sphere, a generic repulsive potential, and a generic attractive potential. A hard sphere is characterized by a potential
$$ U_H = \left\{\begin{array}{cc} \infty & r < r_0 \\ 0 & r > r_0 \end{array}\right\}. $$ {eq:11.69}
Clearly, the radial wavefunction must vanish at the boundary, so the intercept of the wavefunction asymptote must be
$$ a_H = r_0. $$ {eq:11.70}
At low energies, any potential with a positive scattering length therefore acts like a hard sphere of radius $a$. For example, a repulsive potential with a finite height
$$ U_R = \left\{\begin{array}{cc} |V_0| & r < r_0 \\ 0 & r > r_0 \end{array}\right\}, $$ {eq:11.71}
will have a scattering length which is positive but less than $r_0$:
$$ 0 < a_R < r_0. $$ {eq:11.72}

The behaviour of an attractive potential is less obvious. A generic attractive potential such as
$$ U_A = \left\{\begin{array}{cc} -|V_0| & r < r_0 \\ 0 & r > r_0 \end{array}\right\} $$ {eq:11.73}
can either have a positive or a negative scattering length depending on the proximity of the highest energy bound state. For a sufficiently shallow potential that no bound state exists, the scattering length will be negative
$$ a_A^{(0)} < 0. $$ {eq:11.74}
As the attractive potential gets deeper, eventually a bound state will enter, bringing a node from $r = \infty$ into the wavefunction, and changing the sign of the scattering length. As we will see, the bound state resonances lead to an enhancement of the scattering length which can be exploited to experimentally manipulate the strength of atomic interactions.

<!-- page 259 -->

> FIGURE {fig:11.7} src=../../media/ch11/fig-11-7.png
> caption: The wavefunction and scattering length for the hard sphere, the repulsive potential, and the attractive potential

### The s-wave pseudopotential

In the ultracold limit $kr_0 \ll 1$, all interatomic potentials with the same scattering length $a$ are equivalent to the pseudopotential $U(r)$ where
$$ U(r)\psi(r) = \frac{4\pi\hbar^2a}{2\mu}\delta^3(\mathbf{r})\frac{\partial}{\partial r}\left(r\cdot\psi(r)\right). $$ {eq:11.75}
In turn, this potential is equivalent to setting a boundary condition on the wavefunction
$$ \lim _{r\to 0}\psi(r) \propto \left(1 - \frac{a}{r}\right). $$ {eq:11.76}
The Schrodinger equation for the pseudopotential is
$$ -\frac{\hbar^2\nabla^2}{2\mu}\psi(r) + \frac{4\pi\hbar^2a}{2\mu}\delta^3(\mathbf{r})\frac{\partial}{\partial r}\left(r\cdot\psi(r)\right) = 0, $$ {eq:11.77}
and it is simple to verify that $\psi(r) = 1 - a/r$ satisfies this equation.

The pseudopotential is useful because it only acts on the regular part of the wavefunction, ignoring the $1/r$ singularity. For smooth functions (without any singularities) it acts like a simple delta-function potential
$$ U(r) = \frac{4\pi\hbar^2a}{2\mu}\delta^3(\mathbf{r}). $$ {eq:11.78}

<!-- page 260 -->

This is important for first order perturbation theories, where the change in ground state energy due to interatomic interactions is
$$ \Delta E_0 = \langle\phi_0|\sum_{\langle i,j\rangle}U(r_{ij})|\phi_0\rangle = \frac{N(N-1)}{2}\frac{1}{V}\frac{4\pi\hbar^2a}{m}. $$ {eq:11.79}
This allows one to calculate the chemical potential
$$ \mu = \frac{\partial E_0}{\partial N} \approx \frac{4\pi\hbar^2a}{m}\frac{N}{V}. $$ {eq:11.80}

## 11.4.4 Particle statistics

Our analysis thus far has assumed that the colliding particles were distinguishable, for example different atomic species or atoms of the same species in different electronic states. In order to apply our analysis to indistinguishable particles, we must consider the fact that scattering of identical particles by angle $\theta$ produces the same result as scattering by angle $\pi + \theta$. We will consequently need to sum over both possibilities:
$$ \psi_k(r) = \frac{e^{ikz} + \epsilon e^{-ikz}}{\sqrt{2}} + \frac{f_k(\theta) + \epsilon f_k(\pi + \theta)}{\sqrt{2}}\frac{e^{ikr}}{r} $$ {eq:11.81}
Since the two-particle wavefunction must be symmetric or antisymmetric under particle exchange, $\epsilon = +1$ for bosons and $-1$ for fermions.

Using this expression, we can find the scattering cross-section for identical particles:
$$ \frac{d\sigma}{d\Omega} = |\frac{f_k(\theta) + \epsilon f_k(\pi + \theta)}{\sqrt{2}}|^2. $$ {eq:11.82}
For even $l$ partial waves, the two amplitudes add for bosons and subtract for fermions; for odd $l$ partial waves, the amplitudes cancel for bosons and add for fermions. In particular, identical bosons will see a factor of 2 enhancement in their s-wave interaction cross-section, while identical fermions do not interact at all via the s-wave channel.

## 11.4.5 Scattering off an atomic ensemble

The formalism for treating two-particle scattering events can be compared to the quantum-optical problem of light scattering off a single atom. In both cases, the incident light or matter wave is modified by an outgoing radial (or

<!-- page 261 -->

dipole) wave. Likewise, both situations can be extended to include effects of many coherent scatterers: each emitted wave adds up in phase to produce a plane wave, modified from the incident wave by absorption and refraction.

To illustrate this analogy, we will consider a cold particle (or matter wave) incident on a slab of width $L$ containing a dilute cloud of $N$ cold atoms, such that their density $n$ satisfies $na^3 << 1$. We will assume that the incident particle has wavevector $\mathbf{K} = K_z$ and position $\mathbf{r_0}$, and we will label the positions of the $j^{th}$ scatterer by $\mathbf{r_j}$. For this ensemble, $f_k(\theta) = -a$, so the many-body wavefunction may be written as
$$ \begin{aligned} \psi_\mathbf{K}(\mathbf{r_0}, \mathbf{r_1}, \mathbf{r_2}, \cdots\mathbf{r_N}) &= e^{iK_zx_0} - \sum_j\frac{a}{|\mathbf{r_0} - \mathbf{r_j}|}e^{i|K||\mathbf{r_0} - \mathbf{r_j}|} \\ &= e^{iKz_0} - \sum_j\frac{a}{|\mathbf{r_0} - \mathbf{r_j}|}e^{iK(r_0-r_j)/2}e^{iK(z_0+z_j)/2}. \end{aligned} $$ {eq:11.83}
By tracing over the positions of the scattering particles $\mathbf{r_1}, \mathbf{r_2}, \ldots, \mathbf{r_N}$, we can obtain the transmitted matter wave
$$ \psi_K(\mathbf{r_0}) = e^{iKz_0} - n\int d^3\mathbf{r_j}\frac{a}{|\mathbf{r_0} - \mathbf{r_j}|}e^{iK(r_0-r_j)/2}e^{iK(z_0+z_j)/2} $$ {eq:11.84}
Far beyond the slab of scatterers, $z_0 \gg L$, the wave is of the form
$$ \psi_k(z_0) = Ae^{iKz_0}, $$ {eq:11.85}
where
$$ A \approx e^{i4\pi anL/K}. $$ {eq:11.86}
The slab has produced a phase shift
$$ \delta K = \frac{-4\pi an}{K}, $$ {eq:11.87}
which corresponds to the effective potential energy shift caused by interactions with atoms in the slab. In particular, the change in kinetic energy while the particle is in the slab is
$$ \delta\left(\frac{\hbar^2K^2}{2m}\right) = \frac{4\pi\hbar^2an}{m}. $$ {eq:11.88}
This change in kinetic energy corresponds energy cost associated with the mean-field potential energy in the slab.

<!-- page 262 -->

## 11.4.6 Resonances

In quantum dilute gases, it is possible to find situations where the scattering length far exceeds the size of the van der Waals tail $a \gg r_0$. In this regime,
$$ ka \sim 1 $$ {eq:11.89}
$$ kr_0 \ll 1, $$ {eq:11.90}
so the gas is cold and dilute, but strongly interacting. Liquids are strongly interacting, but because they are not dilute $kr_0 \sim 1$, the perturbative expansion in partial waves is invalid, so we must take into account p-wave, d-wave, etc... scattering amplitudes in addition to the s-wave channel. The cold dilute, strongly interacting gases thus provide a novel system for studying purely s-wave, strong interactions.

One particularly interesting feature of the dilute gases is that it is possible to find situations where $a \gg r_0$. This limit corresponds to the s-wave resonance, where $ka \sim 1$ but a small parameter $kr_0 \ll 1$ still exists. For large and positive $a$, the resonance in the scattering length is connected to the appearance of a peculiar weakly bound state with radial wavefunction
$$ R_0^{(0)}(r) = \frac{e^{-r/a}}{\sqrt{2\pi ar}}, $$ {eq:11.91}
and energy
$$ E_0 = -\frac{\hbar^2}{2\mu a^2}. $$ {eq:11.92}
This corresponds to a bound state of the attractive van der Waals tail with energy very close to zero.

A number of interesting phenomena arise near this resonance, and it is possible to form molecules in these weakly bound states. There are two methods for molecule formation:

1. Cool a gas with positive scattering length $a > 0$ to temperatures below the binding energy $k_BT < E_0$
2. Prepare a cold gas with negative scattering length $a < 0$ and sweep through the resonance $a \to -\infty \to \infty \to a > 0$.

The second method can only be accomplished if we can somehow controllably manipulate the interatomic potential $U(r)$ to change the scattering length. Feshbach resonances provide one technique for controlling the scattering length.

<!-- page 263 -->

### Feshbach Resonances

Until this point, we have considered scattering of atoms in their ground state, and have neglected any effects associated with internal states of the atoms. In reality, we have to take into account other scattering channels, for example singlet or triplet states of the two atoms. For example, suppose there are two channels, each with their own effective interatomic potential $U_o(r)$ and $U_c(r)$. The higher energy channel is referred to as the “closed” channel because it presents a higher potential barrier for quasibound states.

> FIGURE {fig:11.8} src=../../media/ch11/fig-11-8.png
> caption: The upper potential corresponds to a “closed” channel, with many unoccupied bound states. The lower or “open” channel corresponds to the initial internal state of the atoms. When a bound state in the closed channel approaches the threshold energy in the open channel, any small coupling between the two channels can have a large effect, leading to dramatic changes in the scattering length in the open channel.

Both channels obey a Schrodinger equation, and if there is some small interaction $g$ between the two channels, their Schrodinger equations are coupled:
$$ \left(\hat{\xi} + U_o(r) - E\right)\psi_o + g\psi_c = 0 $$ {eq:11.93}
$$ \left(\hat{\xi} + U_c(r) - E\right)\psi_c + g\psi_o = 0, $$ {eq:11.94}
where $\hat{\xi}$ is the kinetic energy operator. Let $\psi_c^m$ be a complete set of orthonormal eigenfunctions of
$$ \left(\hat{\xi} + U_c(r) - E_m\right)\psi_c^m = 0, $$ {eq:11.95}

<!-- page 264 -->

and expand $\psi_c$ in terms of them:
$$ \psi_c = \sum_{m=1}^{\infty}\alpha_m\psi_c^m. $$ {eq:11.96}
Substituting into Eq. (11.94) and taking the the inner product with $\psi_c^n$ yields the coefficients
$$ \alpha_n = -\frac{\langle\psi_c^n|g|\psi_o\rangle}{E_n - E}. $$ {eq:11.97}
Close to resonance, only one of these coefficients $\alpha_{res}$ will have an appreciable physical effect, so the closed channel wavefunction is approximately given by
$$ \psi_c(r) \approx -\frac{\langle\psi_c^{res}|g|\psi_o\rangle}{E_{res} - E}\psi_c^{res}(r). $$ {eq:11.98}
We now substitute this expression into Eq. (11.94) to find the effect of the nearly resonant closed channel on the Schrodinger equation for the open channel
$$ \left(\hat{\xi} + U_o(r) - E\right)\psi_o(r) = g(r)\frac{\langle\psi_c^{res}|g|\psi_o\rangle}{E_{res} - E}\psi_c^{res}(r). $$ {eq:11.99}

To solve this equation, we can make use of the homogeneous solution
$$ \left(\hat{\xi} + U_o(r) - E\right)\chi = 0 \to \chi = 1 - \frac{a_{bg}}{r}, $$ {eq:11.100}
where $a_{bg}$ is the background scattering length of the open channel in the absence of any effects from the closed channel. There are many possible solutions to the inhomogenous equation
$$ \left(\hat{\xi} + U_o(r) - E\right)\eta = g(r)\psi_c^{res}(r), $$ {eq:11.101}
and we will choose the one which behaves as
$$ \eta = A\left(1 - \frac{b}{r}\right), $$ {eq:11.102}
where the constants A and b are determined by the potential energy curve and coupling constant. The complete solution is a superposition of the homogeneous and inhomogeneous solution
$$ \psi_o = \alpha\chi + \beta\eta = (\alpha + \beta A) - \frac{\alpha a_{bg} + \beta Ab}{r}, $$ {eq:11.103}

<!-- page 265 -->

which corresponds to an effective scattering length
$$ a = a_{bg} + A\frac{b - abg}{\frac{\alpha}{\beta} + A}, $$ {eq:11.104}
where all of the parameters are known with the exception of $\alpha/\beta$. Again substituting $\psi_o = \alpha\chi + \beta\eta$ into the second Schrodinger equation Eq. (11.99), a bit of algebra allows one to solve for the unknown ratio, yielding the scattering length:
$$ a = a_{bg}\left(1 + \frac{\overbrace{(A/a_{bg})(b - a_{bg})\langle\psi_c^{res}|g|\eta\rangle}^{\Delta}}{\underbrace{E_{res} + \langle\psi_c^{res}|g|A\chi - \eta\rangle}_{E_{res}^*} - E}\right), $$ {eq:11.105}
where the denominator can be rewritten in terms of a shifted resonance energy. If the different channels correspond to atomic states with different magnetic moments, the resonance energy can be shifted by tuning the magnetic field $E_{res}^* \propto \mu_B(B - B_0^*)$. For low-energy collisions, as expected in ultracold atomic gases,
$$ a = a_{bg}\left(1 + \frac{\Delta}{E_{res}^* - E}\right) $$ {eq:11.106}
$$ \approx a_{bg}\left(1 + \frac{\Delta}{E_{res}^*}\right), $$ {eq:11.107}
$$ \quad $$ {eq:11.108}
the scattering length diverges near the critical magnetic field where the closed channel bound state is resonant with the threshold energy of the open channel.

Feshbach resonances are typically extremely narrow, with a typical width of a few Gauss. For the ultracold atoms, the scattering length is well defined $\Delta B \sim 10G \Rightarrow \Delta \sim 500\mu\mathrm{K}$, since the resonance width is much greater than typical atomic temperatures $\sim 1\mu\mathrm{K}$.

One should note that the binding energy of the weakly bound level is not equal to the energy of the resonance level. Near resonance, this binding energy takes the form
$$ |E_0| = \frac{\hbar^2}{2\mu a^2} \approx \frac{\hbar^2}{2\mu}\frac{(E_{res}^*)^2}{a_{bg}^2\Delta^2} \neq E_{res}. $$ {eq:11.109}

<!-- page 266 -->

> FIGURE {fig:11.9} src=../../media/ch11/fig-11-9.png
> caption: The form of the scattering length in the vicinity of a Feshbach resonance

## 11.4.7 Quantum theory of an interacting Bose gas

A weakly interacting, dilute atomic gas can be well described by a Hamiltonian which incorporates single-particle terms and two-body interactions,
$$ \hat{H} = \sum_{i=1}^{N}\left(\frac{p_i^2}{2m} + V_\mathrm{trap}(r_i)\right) + \sum_{i<j}V_\mathrm{int}(r_i - r_j), $$ {eq:11.110}
where $r_0$ is the typical range of the interaction potential. In cold, dilute atomic gases where $kr_0 \ll 1$, the interaction potential can be replaced by the s-wave pseudopotential
$$ V_\mathrm{int}(r) \approx \underbrace{\frac{4\pi\hbar^2a}{m}}_{U_0}\delta(r), $$ {eq:11.111}
where all of the properties of the interatomic potential are represented by one parameter, the scattering length $a$. In principle, we could now begin to calculate the ground state and dynamics of the $N$ atoms in the ensemble. Since the atoms are indistinguishable, however, we would have to be careful to symmetrize (for bosons) or antisymmetrize (for fermions) our wavefunctions, which becomes quite inconvenient for large numbers of atoms. Instead, we will rewrite this Hamiltonian in the language of second quantization, which implicitly incorporates the indistinguishability of the atoms.

<!-- page 267 -->

### Second quantization

The second quantization formalism for matter waves resembles closely the methods used to quantize the electromagnetic field. As for photons, we will consider a complete set of single-atom states $\{|\zeta\rangle\}$, and define creation and annihilation operators $\hat{b}_\zeta, \hat{b}_\zeta^\dagger$ which can add or remove an atom from those states
$$ \hat{b}_\zeta|\zeta\rangle = |\mathrm{vac}\rangle $$ {eq:11.112}
$$ \hat{b}_\zeta^\dagger|\mathrm{vac}\rangle = |\zeta\rangle. $$ {eq:11.113}
The statistics of the atoms determine the commutation properties of these operators.
$$ \text{Bosons:} \quad [\hat{b}_\zeta, \hat{b}_{\zeta'}^\dagger] = \delta_{\zeta,\zeta'} $$ {eq:11.114}
$$ \text{Fermions:} \quad \{\hat{b}_\zeta, \hat{b}_{\zeta'}^\dagger\} = \delta_{\zeta,\zeta'}, $$ {eq:11.115}
where $[A, B] = AB - BA$ is the commutator and $\{A, B\} = AB + BA$ is the anticommutator. Since the commutation relations guarantee the symmetry or anti-symmetry of the resulting wave-functions, this formalism provides a convenient tool for treating indistinguishable particles.

Many-body states are easily represented in terms of these creation and annihilation operators acting on the vacuum state. For example, a state $|\phi\rangle$ with $n_i$ atoms in the single-particle state $|\zeta_i\rangle$ can be represented by
$$ |\phi\rangle = |n_1, n_2\ldots\rangle = \prod_i(\hat{b}_i^\dagger)^{n_i}|\mathrm{vac}\rangle. $$ {eq:11.116}
For example, in the case of bosons, field operators are analogous to the creation and annihilation operators for the electromagnetic field modes:
$$ \hat{b}_\zeta^\dagger|\phi\rangle = \sqrt{n_\zeta + 1}|n_1, n_2\ldots n_\zeta + 1, \ldots\rangle $$ {eq:11.117}
$$ \hat{b}_\zeta|\phi\rangle = \sqrt{n_\zeta}|n_1, n_2\ldots n_\zeta - 1, \ldots\rangle. $$ {eq:11.118}
Although we will concentrate on bosons here, it is worth noting that the rules for raising and lowering fermion number are similar, but one must keep track of the negative signs which arise from anticommutation.

One particularly useful basis is the momentum basis, $|\mathbf{k}\rangle$, with its associated creation and annihilation operators $\hat{b}_\mathbf{k}$ and $\hat{b}_\mathbf{k}^\dagger$. In this case, there is an exact analogy between bosonic atoms and photons. Moreover, we can

<!-- page 268 -->

take the Fourier transform of these operators to define a real-space operator for the matter field
$$ \hat{\psi}(\mathbf{r}) = \frac{1}{\sqrt{V}}\sum_\mathbf{k}e^{i\mathbf{k}\cdot\mathbf{r}}\hat{b}_\mathbf{k}, $$ {eq:11.119}
where the allowed k-vectors are determined by the boundary conditions at the edges of the quantization volume $V$. Using the commutation relation $[\hat{b}_\mathbf{k}, \hat{b}_{\mathbf{k}'}^\dagger] = \delta_{\mathbf{k},\mathbf{k}'}$ and the identity $\sum_k e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{r}')} = V\delta(\mathbf{r} - \mathbf{r}')$, we can find the commutation rules for $\hat{\psi}(r)$:
$$ [\hat{\psi}(\mathbf{r}), \hat{\psi}^\dagger(\mathbf{r}')] = \delta(\mathbf{r} - \mathbf{r}'). $$ {eq:11.120}
Physically, $\hat{\psi}(\mathbf{r})$ can be interpreted as an operator which annihilates a particle at position $\mathbf{r}$.

### Operators in the second quantization representation

Every atomic observable can be represented in terms of the matter field creation and annihilation operators. For example, the number operator is
$$ \hat{N} = \sum_\zeta\hat{b}_\zeta^\dagger\hat{b}_\zeta = \int d^3\mathbf{r}\hat{\psi}^\dagger(\mathbf{r})\hat{\psi}(\mathbf{r}). $$ {eq:11.121}
The Hamiltonian in Eq. (11.110) can also be written in terms of $\hat{\psi}(\mathbf{r})$:
$$ \hat{H} = \int d^3\mathbf{r}\ \hat{\psi}^\dagger(\mathbf{r})\left(\frac{\hat{p}^2}{2m} + V_\mathrm{trap}(\mathbf{r})\right)\hat{\psi}(\mathbf{r}) $$ {eq:11.122}
$$ + \frac{1}{2}\int d^3\mathbf{r}\int d^3\mathbf{r}'\ \hat{\psi}^\dagger(\mathbf{r})\hat{\psi}^\dagger(\mathbf{r}')V_{int}(\mathrm{r} - \mathrm{r}')\hat{\psi}(\mathbf{r}')\hat{\psi}(\mathbf{r}). $$ {eq:11.123}
When the interatomic potential can be replaced by the s-wave pseudopotential, the second term can be considerably simplified, so that the Hamiltonian becomes
$$ \hat{H} = \int d^3\mathbf{r}\ \hat{\psi}^\dagger(\mathbf{r})\left(\frac{\hat{p}^2}{2m} + V_\mathrm{trap}(\mathbf{r}) + \frac{U_0}{2}\hat{\psi}^\dagger(\mathbf{r})\hat{\psi}(\mathbf{r})\right)\hat{\psi}(\mathbf{r}). $$ {eq:11.124}

### Zero temperature non-interacting BEC

It is instructive to consider the ground state at zero temperature in two types of potentials:

1. Homogeneous potential
2. Harmonic oscillator potential

<!-- page 269 -->

The single particle states for these potentials are well known, and at zero temperature we expect all of the atoms to pile into the ground state. In the case of the infinite wall square well,
$$ \psi_0(r) \sim \sin\pi x/L\sin\pi y/L\sin\pi z/L. $$ {eq:11.125}
The harmonic oscillator ground state wavefunction is a Gaussian
$$ \phi_0(r) = \frac{e^{-\left(\frac{x^2}{2a_x^2} + \frac{y^2}{2a_y^2} + \frac{z^2}{2a_z^2}\right)}}{\pi^{3/4}(a_xa_ya_z)^{1/2}}, $$ {eq:11.126}
where $\{a_x, a_y, a_z\}$ are the harmonic oscillator lengths associated with the trapping frequencies $\{\omega_x, \omega_y, \omega_z\}$ in each dimension: $a_j^2 = \frac{\hbar}{m\omega_j}$. If the atoms do not interact, then the many-body state can be written as
$$ |\Psi\rangle = (\hat{b}_0^\dagger)^N|\mathrm{vac}\rangle, $$ {eq:11.127}
where $\hat{b}_0$ annihilates an atom in the ground state of the appropriate potential.

### Weak interactions: the Gross-Pitaevski equation

If the interactions are sufficiently weak, then we qualitatively expect that Bose condensation should still occur, with most of the atoms occupying one quantum state. We now need to determine which state will be macroscopically occupied.

Using the Hamiltonian given in Eq. (11.124), we can find the Heisenberg equations of motion for the matter field operator
$$ i\hbar\frac{\partial}{\partial t}\hat{\psi} = [\hat{\psi}, \hat{H}] = \left(-\frac{\hbar^2\nabla^2}{2m} + V_\mathrm{trap} + U_0\hat{\psi}^\dagger\hat{\psi}\right)\hat{\psi}. $$ {eq:11.128}
This type of nonlinear operator equation is in general quite difficult to solve, but we can use our physical intuition to find an appropriate approximation. In particular, since we expect macroscopic occupation of one state, the field operator should be close to a classical coherent field
$$ \hat{\psi} = \psi + \delta\hat{\psi}, $$ {eq:11.129}
where $\langle\delta\hat{\psi}\rangle = 0$. When these fluctuations around the mean value are small
$$ \langle\delta\hat{\psi}^\dagger\delta\hat{\psi}\rangle \ll \langle\hat{\psi}^\dagger\hat{\psi}\rangle, $$ {eq:11.130}

<!-- page 270 -->

the Bose condensate can be well described by a classical nonlinear equation for $\psi$, known as the Gross-Pitaevski equation:
$$ i\hbar\frac{\partial\psi}{\partial t} = -\frac{\hbar^2}{2m}\nabla^2\psi + V_\mathrm{trap}\psi + U_0|\psi|^2\psi. $$ {eq:11.131}
The Gross-Pitaeveski equation resembles a Schrodinger equation with a nonlinear term, where $\psi$ acts like the wavefunction for the Bose condensate.

Since $\psi$ acts like a wavefunction, we should be careful about its normalization, which is set by the total number of particles
$$ N = \int d^3\mathbf{r}|\psi|^2. $$ {eq:11.132}
This normalization condition motivates us to interpret $|\psi(\mathbf{r})|^2$ as the condensate spatial density.

Before proceeding, we note that replacing the operator quantity $\hat{\psi}$ by the c-number quantity $\psi$ is strictly speaking only valid if the atom field is in a coherent state $\hat{\psi}|\psi\rangle = \psi|\psi\rangle$. The matter-wave coherent state is analogous to the electromagnetic coherent state in the sense that it has a non-vanishing classical coherence $\langle\hat{\psi}\rangle = \psi$, a well-defined phase $\propto \psi$, and a distribution of possible atom numbers centered at $\langle\int dV\hat{\psi}^\dagger\hat{\psi}\rangle = \int dV|\psi|^2$. Our derivation of the Gross-Pitaevski equation implicitly assumes that the condensate is in a coherent state with an arbitrary phase (this represents a so-called symmetry breaking description). The validity of this assumption is not obvious, but for large atom numbers it provides an excellent description of condensate dynamics.

The Gross-Pitaevski equation provides an adequate description of most properties of zero temperature Bose condensates, and it bears a strong resemblance to the evolution of the electromagnetic field in a Kerr medium. The relevant questions for a matter field, however, are rather different than those for light.

### The ground state of a condensate at T=0

The ground state of the electromagnetic field is the vacuum, but matter behaves rather differently because the total number of atoms is conserved, resulting in a finite chemical potential. The ground state is a stationary solution of the Gross-Pitaevski equation with phase evolution
$$ \psi = \tilde{\psi}e^{-i\mu t/\hbar}, $$ {eq:11.133}

<!-- page 271 -->

where $\tilde{\psi}$ obeys
$$ \mu\tilde{\psi} = (\underbrace{-\frac{\hbar^2}{2m}\nabla^2 + V(r)}_{\sim\hbar\omega_t} + \underbrace{U_0|\tilde{\psi}|^2}_{E_{mf}})\tilde{\psi}. $$ {eq:11.134}

The character of the solution $\tilde{\psi}$ is determined by the relative importance of the kinetic energy terms and the interaction terms. The ratio of the trap frequency $\hbar\omega_t$ to the mean-field interaction energy $E_{mf} \sim U_0N/V$ is
$$ \frac{E_{mf}}{\hbar\omega_t} \approx \frac{4\pi Naa_t^2}{V} \sim \frac{Na}{a_t}, $$ {eq:11.135}
where $a$ is the scattering length and $a_t$ is the characteristic size of the harmonic oscillator trap. Note that the number of condensed atoms appears in the numerator of this expression, so even when the gas is weakly interacting ($a \ll a_t$) the interactions can still have important effects on the condensate behaviour. When $\hbar\omega_t \gg E_{mf}$, the condensate behaves essentially as a non-interacting gas. In the opposite limit $\hbar\omega_t \ll E_{mf}$ (known as the Thomas-Fermi regime for $U_0 > 0$) the interactions dominate.

### The Thomas-Fermi approximation

When the interactions between atoms are strong and repulsive $U_0 > 0$, we can neglect the kinetic energy term. The resulting solution for the mean field is
$$ |\tilde{\psi}|^2 = \left\{\begin{array}{cc} \frac{\mu - V(r)}{U_0} & \text{for r such that } V(r) < \mu \\ 0 & \text{for larger r.} \end{array}\right. $$ {eq:11.136}
The chemical potential $\mu$ is set by the normalization condition
$$ N = \int\frac{\mu - V(r)}{U_0}d^3\mathbf{r}. $$ {eq:11.137}
For example, a BEC confined by a harmonic trap has a chemical potential given by
$$ \mu = \frac{\hbar\omega_t}{2}\left(\frac{15Na}{a_t}\right)^{2/5}. $$ {eq:11.138}
Since we are in the regime of strong interactions, the factor $Na/a_t \gg 1$ increases the chemical potential significantly. The size $\bar{a}$ of the condensate also increases due to interactions,
$$ \bar{a} = a_t\cdot\left(\frac{15Na}{a_t}\right)^{2/5}. $$ {eq:11.139}

<!-- page 272 -->

This expansion makes physical sense because it lowers the energy cost of the repulsive interactions.

### The healing length

The Thomas-Fermi approximation works poorly in regions where the atom density is insufficient to satisfy the assumption that the mean-field energy overwhelms kinetic energy. In particular, in the vicinity of the walls of the traps, the kinetic energy can no longer be neglected. For example, consider a condensate in a box with infinite potential walls. The Thomas-Fermi approximation would predict that $|\tilde{\psi}|^2 = N/V$ is constant, dropping off suddenly to zero right at the edges of the box. Physically, this makes no sense: the wavefunction must be smooth even at the walls because sharp variations in $\tilde{\psi}(r)$ exact a high kinetic energy cost. We expect the wavefunction to fall off smoothly over some characteristic length $\xi$. This so-called “healing length” can be estimated by equating the kinetic energy associated with variation on length $\xi$ with the interaction energy $\sim U_0N/V$, which results in
$$ \xi^2 = \frac{1}{8\pi aN/V} = \frac{1}{8\pi n_0a}. $$ {eq:11.140}
As long as the gas is sufficiently dilute $n_0a^3 \ll 1$, the healing length extends over many atoms
$$ \xi \gg \frac{1}{n_0^{1/3}}. $$ {eq:11.141}
When this dilute gas assumption breaks down, the Gross-Pitaevski equation can no longer provide an adequate description of the condensate. We also note that the above discussion is valid only for repulsive atoms; we will find that problems arise for attractive interactions when the kinetic energy approaches the mean-field energy.

<!-- notes
- Opening: "the interatomic spacing $n \sim 1nm$": the spacing is $n^{-1/3}$; printed so, kept.
- 11.4.1 "the electrostatic interaction between the atom": "atoms" meant; kept. "The first term corresponds to the Coulomb potential, is nonzero only if": the book's grammar, kept.
- 11.4.2 "where $r$ is the is the interatomic distance": doubled words, kept.
- Partial wave expansion: "the plane wave can written": missing "be", kept.
- Eq. (11.91): the radical is printed over $2\pi ar$; the normalized bound state is $e^{-r/a}/(\sqrt{2\pi a}\,r)$.
- 11.4.4 Eqs. (11.81), (11.82) and the text: exchange of identical particles takes $\theta$ to $\pi - \theta$, not $\pi + \theta$; printed so, kept.
- 11.4.5: "$\mathbf{K} = K_z$" means $\mathbf{K} = K\hat{z}$; the first line of Eq. (11.83) prints $e^{iK_zx_0}$ where $e^{iKz_0}$ (as in the second line) is meant. "na^3 << 1" printed with <<, kept.
- 11.4.5 Eqs. (11.86)-(11.88): signs disagree: $A \approx e^{i4\pi anL/K}$ implies $\delta K = +4\pi an/K$, while (11.87) prints $-4\pi an/K$, and a negative $\delta K$ lowers the kinetic energy whereas (11.88) prints a positive shift. For a repulsive $a>0$ the wave inside the slab slows, so $\delta K<0$ and $A$ should carry $e^{-i\ldots}$; (11.88) is the positive mean-field energy cost. The book's factors kept.
- 11.4.5 last sentence: "corresponds energy cost": missing "to", kept.
- Feshbach: Eq. (11.99) says the expression is substituted "into Eq. (11.94)"; it is substituted into the open-channel equation (11.93). Eq. (11.104) prints "abg" without subscript where $a_{bg}$ is meant; kept. "inhomogenous" spelling kept.
- Eq. (11.108): the book prints the number on an empty row; the slot holds `\quad`.
- Second quantization: Eqs. (11.116) and (11.127) omit the normalization $1/\sqrt{n_i!}$ and $1/\sqrt{N!}$; kept.
- 11.4.7: "where $r_0$ is the typical range of the interaction potential" follows Eq. (11.110), in which $r_0$ does not appear; kept.
- "Gross-Pitaevski" is the book's spelling throughout; one "Gross-Pitaeveski" (after Eq. 11.131) is its typo, kept.
- Eq. (11.139): the Thomas-Fermi radius scales as $(15Na/a_t)^{1/5}$, not the printed $2/5$ (the $2/5$ belongs to $\mu$ in (11.138)).
- Eq. (11.111) prints $\delta(r)$ for the three-dimensional delta function; kept.
- The list items "(1) Cool…", "(2) Prepare…" and "(1) Homogeneous potential", "(2) Harmonic oscillator potential" are written as numbered list lines.
- The figure crops for 11.5-11.9 are clean. The duplicate 11.60 slot in the skeleton (from the text's "Eq. (11.60)") was removed.
- The italic S of "S-wave" (11.4.3 opening) and s of "s-wave phase shift" are written upright so the hyphenated word reads whole for checkprose.
- text-layer.md corrected: "offa"/"offan"/"offsuddenly" split to "off a", "off an", "off suddenly"; "valid-/ity" and "asymp-/totic" joined across the interleaved $l$ lines; "cou- pling" joined in caption 11.8; the bold labels "rj", "rN" (and "3rj") in 11.4.5 split to "r j", "r N" since they are maths subscripts; the $V$ trap and $V$ int lines of Eq. (11.110) put in printed order.
-->

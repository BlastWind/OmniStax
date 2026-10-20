# 8.6 Sub-Doppler cooling

<!-- page 158 -->

The final temperature for Doppler cooling, set by the balance of spontaneous emission heating and laser cooling forces, was long believed to represent the fundamental limit to all laser cooling schemes. In the early 1990’s, however, a number of experiments with alkali metals (Na, Rb, Cs) measured temperatures which were ten times smaller than predictions of the Doppler cooling limit. This result was puzzling: the Doppler cooling limit is quite intuitive and reasonable. Moreover, it is based on an assumption of classical atomic motion which is valid for temperatures near $T_D = \hbar\gamma$. Since the deBroglie wavelength of an atom at $T_D \sim 10$ nm is much smaller than the wavelength of the radiation, the atoms do indeed act like classical point particles. However, there is one other assumption which is not necessarily valid: we neglected the multilevel structure of real atoms.

## 8.6.1 Experimental Observations

The explanation for sub-Doppler temperatures was motivated by two experimental observations.

### Polarization gradients

First, it was found that the final temperature of the atomic ensemble depended sensitively on the polarizations of the applied laser beams. The cooling worked particularly well for linearly cross-polarized beams (the “lin$\perp$lin” configuration). In this configuration, the circular polarization of the electric field depends on the position, since
$$ \mathbf{E} = E_0e^{i\nu t}\left(\hat{x}e^{ikz} + i\hat{y}e^{-ikz}\right) + c.c. $$ {eq:8.97}
$$ = E_0e^{i\nu t}\left(\underbrace{(\hat{x} + i\hat{y})}_{\sigma_+}\cos kz + i\underbrace{(\hat{x} - i\hat{y})}_{\sigma_-}\sin kz\right) + c.c. $$ {eq:8.98}
The electric field is the sum of two cross-circularly polarized standing waves which are shifted by $\pi/2$ from one another. An atom moving through such

<!-- page 159 -->

a field would experience a polarization gradient in the incident light. Since polarization gradients have little effect on a two-level atom, the importance of polarization in sub-Doppler cooling indicates that the multilevel atomic structure may play a crucial role.

### Detuning

The second experimental observation concerned the detuning of the applied cooling beams. It was found that sub-Doppler temperatures were particularly easy to obtain in the limit of a large detuning $\delta \gg \gamma$. The main effect of a far-detuned laser beam is an AC Stark shift of the atomic levels, so this experimental result indicated that AC Stark shifts should also play an important role in sub-Doppler cooling.

## 8.6.2 Sisyphus Cooling

The theory underlying sub-Doppler cooling was worked out by Cohen-Tannoudji and collaborators. We will examine their explanation in the context of a specific atomic level configuration: a J = 1/2 $\rightarrow$ J’ = 3/2 transition.

> FIGURE {fig:8.4} src=../../media/ch08/fig-8-4.png
> caption: The level configuration used to explain sub-Doppler cooling. The Clebsch-Gordon coefficients for each transition are given. Note that the $m = \pm 1/2 \rightarrow m = \pm 1/2$ transitions are coupled only by spontaneous emission.

When such an atom is subject to circularly polarized $\sigma_+$ light with Rabi frequency $\Omega$ detuned by $|\delta| \gg |\Omega|$, the main effect it experiences is an AC Stark shift of the ground state levels. Since the Clebsch-Gordon coefficients for the two allowed transitions $m = -1/2 \rightarrow m = 1/2$, $m = 1/2 \rightarrow m = 3/2$

<!-- page 160 -->

are not equal, the AC Stark shift is different for the two ground states:
$$ \Delta^{\sigma_+}_{1/2} = \frac{|\Omega_+|^2}{\delta} $$ {eq:8.99}
$$ \Delta^{\sigma_+}_{-1/2} = \frac{|\Omega_+|^2}{3\delta}. $$ {eq:8.100}
The other polarization $\sigma_-$ has exactly the opposite effect,
$$ \Delta^{\sigma_-}_{1/2} = \frac{|\Omega_-|^2}{3\delta} $$ {eq:8.101}
$$ \Delta^{\sigma_-}_{-1/2} = \frac{|\Omega_-|^2}{\delta}. $$ {eq:8.102}
We found earlier that the lin$\perp$lin configuration leads to two cross-circularly polarized standing waves, so we are interested in spatially dependent Rabi frequencies
$$ \Omega_+ = \Omega\cos kz $$ {eq:8.103}
$$ \Omega_- = \Omega\sin kz. $$ {eq:8.104}
In the far-detuned regime, the effective atom-laser interaction Hamiltonian for the atom moving through such fields is
$$ \hat{H}^\mathrm{eff}_{AL} = \hbar\sum_{m=\pm\frac{1}{2}}(\Delta^{\sigma_+}_m + \Delta^{\sigma_-}_m)|m\rangle\langle m| $$ {eq:8.105}
$$ = \hbar\frac{|\Omega|^2}{\delta}\left(1 - \frac{2}{3}\sin^2 kz\right)|\frac{1}{2}\rangle\langle\frac{1}{2}| $$ {eq:8.106}
$$ \hbar\frac{|\Omega|^2}{\delta}\left(1 - \frac{2}{3}\cos^2 kz\right)| -\frac{1}{2}\rangle\langle -\frac{1}{2}|, $$ {eq:8.107}
where $\delta < 0$ will lead to cooling effects. Recall that in previous lectures we discussed that the applicability of such AC Stark shifted effective potentials is limited to situations where two-photon transitions can be neglected. By choosing our model system and polarizations carefully, we have eliminated any possible $\Lambda$-type configuration. Consequently the effective Hamiltonian provides an adequate description of the level configuration under consideration.

The effective dressed state potential gives rise to a conservative force analogous to the dipole force, which cannot provide cooling. To understand where the sub-Doppler cooling comes from, we must go beyond the AC

<!-- page 161 -->

Stark effect and examine optical pumping. From Figure (8.4), we see that $\sigma_+$ light optically pumps the atom into the $m = 1/2$ state, whereas $\sigma_-$ light pumps it into the $m = -1/2$ state. As the atom moves through the dressed state potential, it is also optically pumped between dressed states by the dominant field at its location. For red-detuned fields, the dominant polarization tends to optically pump the atom into the lower energy dressed state, so that the atom must continually climb up the potential energy curve between optical pumping cycles. Climbing the hills causes the atom to lose some kinetic energy while gaining potential energy; this potential energy is then dumped into the spontaneously emitted photon which pumps the atom into the lower state. This physical mechanism has earned the descriptive name “Sisyphus” cooling.

> FIGURE {fig:8.5} src=../../media/ch08/fig-8-5.png
> caption: The Sisyphus cooling mechanism. As the atom moves through the polarization gradient fields, its internal energy level (illustrated in green) follows the Stark-shifted ground state. In regions where $\sigma_\pm$ light dominates, the atom is optically pumped into the $m = \pm 1/2$ level. For a red-detuned beam, the atom is always optically pumped into the lower energy state, so it must lose kinetic energy with each cycle.

## 8.6.3 Quantitative analysis of sub-Doppler cooling

Although we now understand the physics behind Sisyphus cooling, to verify that it leads to sub-Doppler temperatures we must derive a more quantitative description.

<!-- page 162 -->

### The Sisyphus cooling force

In the limit of large detuning, the relevant motional dynamics must come from the reactive force
$$ F_\mathrm{reactive} = \sum_{m=\pm 1/2}\hbar\nabla(\Delta^{\sigma_+}_m + \Delta^{\sigma_-}_m)|m\rangle\langle m| $$ {eq:8.108}
$$ = \frac{2}{3}\hbar k\frac{|\Omega|^2}{\delta}\sin(2kz)\left(|\frac{1}{2}\rangle\langle\frac{1}{2}| - | -\frac{1}{2}\rangle\langle -\frac{1}{2}|\right). $$ {eq:8.109}
The only remaining unknown is the population difference $\Delta\rho = \left(|\frac{1}{2}\rangle\langle\frac{1}{2}| - | -\frac{1}{2}\rangle\langle -\frac{1}{2}|\right)$.

The first step in finding $\Delta\rho$ is to calculate the relevant optical pumping rates. The Clebsch-Gordon coefficients for $\sigma_+$ light reveal that atoms are pumped out of the $m_g = -1/2$ ground state to the $m_e = 1/2$ excited state at a rate $R^+_\mathrm{opt}/3$, while the probability for an atom to decay from $m_e = 1/2 \rightarrow m_g = 1/2$ is $2/3$. Consequently, the optical pumping rate from $m_g = -1/2$ to $m_g = 1/2$ is $(2/9)R^+_\mathrm{opt} = (2/9)R_\mathrm{opt}\cos^2 kz$, where $R_\mathrm{opt} = |\Omega^2|\gamma/((\gamma/2)^2 + \delta^2)$. A similar calculation holds for $\sigma_-$ light, which optically pumps the atom into the $m_g = -1/2$ state from $m_g = 1/2$ at a rate $(2/9)R_\mathrm{opt}\sin^2 kz$.

Since we have chosen a level configuration which avoids Raman transitions, we can calculate the atomic population without also having to find the coherences. Furthermore, in the spirit of adiabatic elimination we can disregard the excited state population and write down a rate equation for the ground state populations:
$$ \frac{d}{dt}\rho_{\frac{1}{2}\frac{1}{2}} = -\frac{2}{9}R_\mathrm{opt}\sin^2(kz)\rho_{\frac{1}{2}\frac{1}{2}} + \frac{2}{9}R_\mathrm{opt}\cos^2(kz)\rho_{-\frac{1}{2}-\frac{1}{2}} $$ {eq:8.110}
$$ \rho_{\frac{1}{2}\frac{1}{2}} + \rho_{-\frac{1}{2}-\frac{1}{2}} = 1. $$ {eq:8.111}
From these two equations it is straightforward to find the evolution of the population difference,
$$ \frac{d}{dt}\Delta\rho = -\frac{2}{9}R_\mathrm{opt}\left(\Delta\rho - \cos(2kz)\right), $$ {eq:8.112}
which describes a relaxation process at rate
$$ \frac{1}{\tau_P} = \frac{2}{9}R_\mathrm{opt} $$ {eq:8.113}
towards a steady state value
$$ \Delta\rho_{SS} = \cos(2kz). $$ {eq:8.114}

<!-- page 163 -->

It is tempting to use this steady state value to calculate the dissipative force:
$$ F^{SS}_\mathrm{reactive} = \frac{2}{3}\hbar k\frac{|\Omega|^2}{\delta}\sin(2kz)\Delta\rho_{SS} $$ {eq:8.115}
$$ = \frac{1}{3}\hbar k\frac{|\Omega|^2}{\delta}\sin(4kz). $$ {eq:8.116}
The steady state force averages to zero over a few wavelengths , so we clearly have not yet found the dissipative effects we were after. Why didn’t this work? In substituting the steady state population difference, we assumed that the optical pumping rate was much faster than typical timescales of atomic motional dynamics. Unlike Doppler cooling, where there is a well-defined hierarchy of timescales $\gamma \gg \omega_R$, the Sisyphus damping constant $1/\tau_P$ need not be large compared to the rate of momentum change.

In particular, we need to account for the change in atomic position with time $z = vt$. Modifying the rate equation for $\Delta\rho$ to incorporate atomic motion, we find
$$ \frac{d}{dt}\Delta\rho = -\frac{1}{\tau_P}\left(\Delta\rho - \cos(2kvt)\right), $$ {eq:8.117}
so that $\Delta\rho_{SS} = \cos(2kvt)$ is no longer an exact solution. For small velocities, we can solve Eq. (8.117) using an adiabatic expansion procedure, yielding
$$ \Delta\rho \approx \cos(2kvt) - \tau_p\frac{d}{dt}\cos(2kvt) $$ {eq:8.118}
$$ = \cos(2kvt) + 2kv\tau_P\sin(2kvt) $$ {eq:8.119}
$$ \approx \cos 2k(z - v\tau_P). $$ {eq:8.120}
We see immediately that the population difference lags behind the instantaneous steady state value, which happens because it takes some time $\sim \tau_P$ for optical pumping to equilibrate the populations. Moreover, the time delay gives us a contribution to the force which will not average to zero and is proportional to the velocity:
$$ \langle F\rangle = \frac{2}{3}\hbar k\frac{|\Omega|^2}{\delta}\left\langle\sin(2kz)\left(\cos(2kz) + 2kv\tau_p\sin(2kz)\right)\right\rangle $$ {eq:8.121}
$$ = \frac{2}{3}\hbar k^2v\tau_P\frac{|\Omega|^2}{\delta}. $$ {eq:8.122}

Assuming that the velocity does not change over the timescale defined by the optical pumping $\tau_P$, it is possible to solve Eq. (8.117) exactly to find
$$ \Delta\rho = \frac{1}{1 + (v/v_c)^2}\cos(2kz) + \frac{v/v_c}{1 + (v/v_c)^2}\sin(2kz), $$ {eq:8.123}

<!-- page 164 -->

where the capture velocity $v_c$ is given by
$$ v_c = \frac{1}{2k\tau_P} = \frac{\lambda}{18\pi}R_\mathrm{opt}. $$ {eq:8.124}
Substituting into the expression for the dissipative force, and averaging over several wavelengths, we find the average force
$$ \langle F_\mathrm{reactive}\rangle = \frac{1}{3}\hbar k\frac{|\Omega|^2}{\delta}\frac{v/v_c}{1 + (v/v_c)^2} = \eta_Svm. $$ {eq:8.125}
It may appear that the force depends on the AC Stark shift, and indeed the energy lost in each optical pumping cycle is of order $|\Omega|^2/\delta$. Nevertheless, the optical pumping rate also determines the force through $v_c$, and since $v_c \propto R_\mathrm{opt}{\sim}|\Omega|^2\gamma/\delta^2$ (when $|\delta|{\gg}\gamma, \Omega$), for low powers the intensity of the applied fields exactly cancels, so
$$ \eta_S = 3\frac{\hbar k^2}{m}\frac{\delta}{\gamma}\left(\frac{1}{1 + (v/v_c)^2}\right). $$ {eq:8.126}
In particular, for velocities much smaller than $v_c$, the Sisyphus friction coefficient approaches
$$ \eta_S = 3\frac{\hbar k^2}{m}\frac{\delta}{\gamma}. $$ {eq:8.127}
The friction coefficient acts to cool the atoms when $\delta < 0$, whereas blue-detuned fields cause heating.

### Comparison of Doppler and Sisyphus cooling

It is instructive to compare the friction coefficient for Sisyphus cooling $\eta_S$ to that for Doppler cooling $\eta_D$ in the limit of small powers and large detunings:
$$ \eta_D = 8\frac{\hbar k^2}{m}\frac{\gamma_{12}|\Omega|^2}{\delta^3} $$ {eq:8.128}
$$ \eta_S = 3\frac{\hbar k^2}{m\gamma}\delta. $$ {eq:8.129}
The Doppler friction coefficient vanishes as the fields become weaker and farther detuned, whereas the Sisyphus cooling mechanism has no dependence on power, and increases as the applied field becomes farther red-detuned, so in this regime $\eta_S \gg \eta_D$. However, this increased viscosity comes at a cost: although the Sisyphus cooling can be much stronger near zero velocity, its capture velocity is also much smaller than the Doppler capture velocity.

<!-- page 165 -->

> FIGURE {fig:8.6} src=../../media/ch08/fig-8-6.png
> caption: Comparison of Doppler force and Sisyphus force. The Doppler force can cool relatively hot atoms down to the Doppler limit. Only slowly-moving atoms can be cooled by the Sisyphus mechanism, but the Sisyphus friction coefficient (proportional to the slope of the curve at $v = 0$) is much larger, so much lower final temperatures can be reached.

<!-- page 166 -->

### Capture velocity

For relatively weak fields, the Doppler capture velocity is independent of the power $v^D_c \sim \gamma/k, \delta/k$. A careful calculation shows, however, that the Sisyphus capture velocity scales with the AC Stark shift: From Eq. (8.124), the large-detuning limit of the capture velocity is
$$ v^S_c \sim \frac{\lambda}{18\pi}\frac{|\Omega|^2}{\delta^2}\gamma. $$ {eq:8.130}
Thus we find that as $\delta \rightarrow \infty$, the friction coefficient grows, but the capture velocity vanishes.

### Non-adiabaticity in Sisyphus cooling

From our quantitative analysis of Sisyphus cooling, we saw that the cooling force vanishes if the atom follows the instantaneous steady state solution to the density matrix equations. The friction force entered only when we accounted for a time lag, which therefore must be crucial to the Sisyphus mechanism. Physically, if the atomic populations were optically pumped much faster than the atomic velocity, then the atom would not have to lose potential energy to move through the dressed state potential. In particular, if the population distribution adiabatically follows the atomic position, then the atomic population moving uphill loses energy at precisely the same rate as the atomic population moving downhill gains it. Conversely, in the best case scenario for cooling the atom would climb the potential hill so quickly that none of its population could be optically pumped into the lower (accelerating) state.

## 8.6.4 The Sisyphus cooling limit

The limits to Sisyphus cooling are set by the same momentum diffusion process we encountered in Doppler cooling. We found that the momentum kicks caused by spontaneous emission lead to a diffusion rate
$$ D_{sp} = (\hbar k)^2\frac{|\Omega|^2\gamma/2}{(\gamma/2)^2 + \delta^2}. $$ {eq:8.131}

In addition, there is momentum diffusion from fluctuations of the instantaneous dipole force as the atom jumps between $m_s = \pm 1/2$ states, which occurs at the rate $1/\tau_p$. When the fluctuations are averaged over a

<!-- page 167 -->

wavelength,^[see Dalibard and Cohen-Tannoudji, JOSA B, p2023 (1989) for further details.]
$$ D_{dp} = \left\langle 2\hbar^2k^2\frac{\delta^2}{\gamma}\frac{\Omega^2/2}{\delta^2 + (\gamma/2)^2}\sin^4(2kz)\right\rangle = \frac{3(\hbar k)^2\delta^2}{4\gamma}\frac{\Omega^2/2}{\delta^2 + (\gamma/2)^2}. $$ {eq:8.132}
In fact, this second diffusion coefficient dominates for large detuning. Using the Einstein relation and our result for the Sisyphus friction coefficient, we can find the final temperature attained by the atoms in the limit of large detuning:
$$ k_BT_S = \frac{D_{sp} + D_{dp}}{m|\eta_S|} \approx \frac{\hbar|\Omega|^2}{8\delta} $$ {eq:8.133}
This indicates that the lowest temperature is on the order of the depth of the dressed state potential. Once the kinetic energy of the atom becomes so small that the atom cannot make it up the hill, the Sisyphus cooling mechanism ceases to exist.

It may appear that $T_S$ can be reduced to arbitrarily small values simply by letting $|\Omega|^2/\delta \rightarrow 0$. In fact, our analysis breaks down once the atom becomes slow enough that its motion can no longer be treated classically. When the atom is cold enough to be essentially localized within one potential well, its momentum has an uncertainty
$$ \delta p \approx \frac{2\pi\hbar}{\lambda} $$ {eq:8.134}
which sets a lower limit on the atomic energy equal to the recoil energy
$$ E^\mathrm{kinetic}_\mathrm{min} \sim \hbar\omega_R. $$ {eq:8.135}
Typical values for the recoil energy $T_R \approx 2.4\mu$K (Na) or $T_R \approx 0.37\mu$K (Rb) are much smaller than the Doppler limit.

### Other sub-Doppler cooling mechanisms

We have only discussed one of many sub-Doppler cooling schemes as applied to a particular atomic level configuration. The specific features vary, but this model gives a sense for the types of mechanisms employed to reach sub-Doppler temperatures. A good reference for other cooling techniques is “Laser Cooling and Trapping” by Metcalf and van der Straten or Cohen-Tannoudji’s lecture notes in Les Houches LXXII (1999).

Note that the recoil energy does not set an ultimate limit on laser cooling, but to proceed further, we would need to treat the atomic motion quantum

<!-- page 168 -->

mechanically. Laser cooling schemes which go beyond $\omega_R$ are known as “sub-recoil” mechanisms, and they require two-photon transitions or effects such as dark resonances.

Finally, note that we have only considered cooling of free neutral atoms. In many ways, cooling of confined atoms and ions can be much simpler, and will be addressed in subsequent lectures.

<!-- notes
- text-layer.md corrected: "Cohen-/Tannoudji’s" joined across its line break, and Figure 8.6's caption "slowly- moving" to "slowly-moving"; both are real compounds.
- "In the early 1990’s": the first sub-Doppler temperatures were measured in 1988 (Lett et al., PRL 61, 169), with Dalibard and Cohen-Tannoudji's explanation in 1989.
- "$T_D = \hbar\gamma$": by Eqs. (8.95)-(8.96) it is $k_BT_D = \hbar\gamma/2$ (that is $\hbar\gamma_{12}$); $k_B$ and the factor 1/2 are missing.
- "the deBroglie wavelength of an atom at $T_D \sim 10$ nm": the sentence reads as if $T_D$ were 10 nm; the wavelength at $T_D$ is meant to be $\sim 10$ nm (tens of nm for Na and Rb). Kept.
- "Clebsch-Gordon" (here and in Figure 8.4's caption): Clebsch-Gordan, the book's misspelling; kept.
- "J’ = 3/2": an apostrophe for the prime; kept.
- "large detuning $\delta \gg \gamma$": $|\delta| \gg \gamma$ is meant, since cooling needs $\delta < 0$.
- Eq. (8.107) carries no leading "+"; the Hamiltonian is the sum of (8.106) and (8.107), so "+ $\hbar\frac{|\Omega|^2}{\delta}\ldots$" is meant.
- Eq. (8.108): a force is minus the gradient of the potential, $F = -\sum_m \hbar\nabla(\ldots)$; (8.109) as printed agrees with the minus sign, not with (8.108).
- After (8.109): the line "$\Delta\rho = \left(|\frac{1}{2}\rangle\langle\frac{1}{2}| - | -\frac{1}{2}\rangle\langle -\frac{1}{2}|\right)$." runs off the right edge of page 162 in the PDF; its end is taken from the text layer. The population difference is the expectation value of that operator, $\rho_{\frac{1}{2}\frac{1}{2}} - \rho_{-\frac{1}{2}-\frac{1}{2}}$.
- "$R_\mathrm{opt} = |\Omega^2|\gamma/((\gamma/2)^2 + \delta^2)$": $|\Omega|^2$ is meant.
- "averages to zero over a few wavelengths ,": stray space before the comma; kept.
- Eqs. (8.118) and (8.121) print $\tau_p$ (lowercase subscript) beside $\tau_P$, as does "the rate $1/\tau_p$" in 8.6.4; the same time is meant.
- Eq. (8.125) "$= \eta_Svm$": a friction force opposes the motion, $-\eta_S m v$; the sign is carried by $\delta < 0$ here. Kept.
- "the Sisyphus capture velocity scales with the AC Stark shift": by Eq. (8.130) it scales with the optical pumping rate $|\Omega|^2\gamma/\delta^2$, not with the light shift $|\Omega|^2/\delta$.
- "optically pumped much faster than the atomic velocity": compares a rate with a velocity; faster than the time to cross a wavelength is meant. Kept.
- "between $m_s = \pm 1/2$ states": the ground states are written $m_g$ elsewhere; kept.
- Eq. (8.133) "$\approx \hbar|\Omega|^2/(8\delta)$": with $m|\eta_S|$ in the denominator the result is positive, $\hbar|\Omega|^2/(8|\delta|)$; the printed $\delta$ is negative for cooling.
- Footnote 4 opens lowercase "see"; the reference is J. Dalibard and C. Cohen-Tannoudji, JOSA B 6, 2023 (1989).
- "Figure (8.4)": cross-reference kept as printed.
- Figure 8.5 stands at the top of page 161 inside the paragraph "To understand ... beyond the AC / Stark effect"; its marker follows that paragraph.
- Figure 8.6 stands alone on page 165.
-->

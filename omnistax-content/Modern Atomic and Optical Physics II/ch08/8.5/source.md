# 8.5 The Heisenberg-Langevin formalism applied to Doppler cooling

<!-- page 154 -->

## 8.5.1 Momentum diffusion in laser cooling of a two-level atom

We can now apply the Heisenberg-Langevin formalism to address momentum diffusion in the Doppler cooling model. Recall that a plane wave $\Omega e^{ikz}$ exerts a force on the atom that can be expressed as
$$ \hat{F} = -i\hbar k\Omega^*\hat{\sigma}_{12} + h.c. $$ {eq:8.79}
$$ = \langle\hat{F}\rangle + \delta\hat{F}, $$ {eq:8.80}
where we have broken the force down into the average force and the fluctuations about the mean. For the case of an atom in a radiation field bath, $\hat{A} = \hat{\sigma}_{12}, \hat{S} = \hat{\sigma}_{12}$, the Heisenberg-Langevin equation becomes
$$ \frac{d}{dt}\hat{\sigma}_{12} = \frac{i}{\hbar}[\hat{H}_S, \hat{\sigma}_{12}] - \left(\hat{\sigma}_{11} - \hat{\sigma}_{22}\right)\left(\frac{\gamma}{2}\hat{\sigma}_{12} + \hat{f}(t)\right) $$ {eq:8.81}
$$ = \frac{i}{\hbar}[\hat{H}_S, \hat{\sigma}_{12}] - \frac{\gamma}{2}\hat{\sigma}_{12} + \left(\hat{\sigma}_{22} - \hat{\sigma}_{11}\right)\hat{f}(t). $$ {eq:8.82}
The first term contributes only to the average force, which we have already calculated, so we will focus our attention on the second two terms. In particular, we identify the noise force we had previously been missing:
$$ \hat{\mathcal{F}}_{12}(t) = \left(\hat{\sigma}_{22} - \hat{\sigma}_{11}\right)\hat{f}(t). $$ {eq:8.83}
Clearly, the average noise force is zero. For optical transitions where $k_BT \ll \omega$, the radiation field is in a vacuum state $n(\omega) = 0$, and the only nonvanishing second moment of this noise force is
$$ \langle\hat{\mathcal{F}}_{12}(t)\hat{\mathcal{F}}_{12}(t')^\dagger\rangle = \langle\left(\hat{\sigma}_{22} - \hat{\sigma}_{11}\right)^2\hat{f}(t)\hat{f}(t')^\dagger\rangle = \gamma\delta(t-t'). $$ {eq:8.84}

<!-- page 155 -->

Putting the component pieces together, and separating the detuning from the atom-laser interaction $\hat{H}_{AL}$, we find
$$ \frac{d}{dt}\hat{\sigma}_{12} = \frac{i}{\hbar}[\hat{H}_{AL}, \hat{\sigma}_{12}] - (\frac{\gamma}{2} - i\delta)\hat{\sigma}_{12} + \hat{\mathcal{F}}_{12}(t). $$ {eq:8.85}
Since we are interested in processes which are slow compared to $\gamma$, we can disregard the time derivative^[The validity of this approximation is most easily seen by solving exactly in the Fourier domain, where the relevant terms lead to a contribution to the coherence $$ \hat{\sigma}_{12}(\omega) = \frac{\hat{\mathcal{F}}_{12}(\omega)}{\gamma/2 + i(\omega - \delta)}. $$ {eq:8.86} The correlation function for the atomic operator (which appears in the expression for the force) is then $$ \langle\hat{\sigma}_{12}(\omega)\hat{\sigma}_{12}^\dagger(\omega')\rangle = \frac{2D\delta(\omega + \omega')}{(\gamma/2 + i(\omega - \delta))(\gamma/2 - i(\omega' - \delta))}. $$ {eq:8.87} Our approximation of neglecting the time derivative corresponds to neglecting the frequency in the denominator, which should have a negligible contribution at frequencies much lower than $\gamma$.], and easily solve for the atomic coherence
$$ \hat{\sigma}_{12} = \frac{\hat{\mathcal{F}}_{12}(t)}{\gamma/2 - i\delta} + \frac{i}{\hbar(\gamma/2 - i\delta)}[\hat{H}_{AL}, \hat{\sigma}_{12}]. $$ {eq:8.88}
Since the Hamiltonian terms were accounted for in the average force $\langle F\rangle$, the fluctuating force is simply
$$ \delta\hat{F} = -i\hbar k\Omega^*\frac{\hat{\mathcal{F}}_{12}(t)}{\gamma/2 - i\delta} + h.c, $$ {eq:8.89}
Again, this force clearly has zero mean value, and its second moment is proportional to a delta function in time:
$$ \langle\delta\hat{F}(t)\delta\hat{F}(t')\rangle = (\hbar k)^2\frac{|\tilde{\Omega}|^2\gamma}{(\gamma/2)^2 + \delta^2}\delta(t-t'), $$ {eq:8.90}
where $\tilde{\Omega} = 2\Omega$ accounts for the two counterpropagating beams and for contributions to diffusion from absorption as well as spontaneous emission.^[There are two factors of two incorporated here: one comes from adding the force fluctuations from the two counterpropagating beams, neglecting any interference effects (for example by alternating the direction of the beam and considering only the average intensity of each beam.) The second factor of 2 comes from the fact that we have derived here only the diffusion associated with spontaneous emission, and there is an equivalent component associated with absorption. See Bill Phillip’s notes http://cua.mit.edu/8.422_S13/Reading%20Material/phil92_varenna.pdf for further details.]

<!-- page 156 -->

### The diffusion constant

By analogy to the diffusion model of Brownian motion, we can identify the appropriate diffusion constant $2D\delta(t-t') = \langle\delta\hat{F}(t)\delta\hat{F}(t')\rangle$,
$$ D = (\hbar k)^2\frac{|\tilde{\Omega}|^2\gamma/2}{(\gamma/2)^2 + \delta^2} $$ {eq:8.91}
$$ = 2(\hbar k)^2R^0_\mathrm{opt}. $$ {eq:8.92}
The physics behind the diffusion coefficient is quite simple. Momentum diffusion is caused by spontaneous emission events which occur at a rate $R^0_\mathrm{opt} = |\Omega|^2\gamma/(\delta^2 + (\gamma/2)^2)$. This process is effectively like a random walk in momentum space, where the average step size is $\delta p = \hbar k$ and the steps occur at a rate $R^0_{opt}$. Each event changes the momentum by $\hbar k = \delta p$, which has no effect on average, but increases the uncertainty in the momentum. The average root mean squared momentum grows as $\sqrt{\langle p^2\rangle} = \sqrt{Dt}$.

## 8.5.2 The Doppler cooling limit

Since we now know both the diffusion coefficient and the viscosity associated with the dissipative force, we can estimate the final temperature $T_D$ attainable by Doppler cooling by using the Einstein relation. Recall that the friction coefficient,
$$ \eta = \frac{4R_\mathrm{opt}}{m}\frac{\hbar k^2\delta}{\delta^2 + \gamma_{12}^2}, $$ {eq:8.93}
is proportional to the optical pumping rate, which consequently drops out of the expression for the temperature:
$$ k_BT_D = \frac{D}{m\eta} $$ {eq:8.94}
$$ = \frac{\hbar\left(\delta^2 + \gamma_{12}^2\right)}{2\delta}. $$ {eq:8.95}
At the optimal detuning $\delta \approx \gamma_{12}$, the final temperature is simply the linewidth of the excited state
$$ k_BT_D = \hbar\gamma_{12}. $$ {eq:8.96}
For a radiatively broadened system, the final temperature depends only on the spontaneous emission rate! This remarkable and intuitive result was believed for many years to represent the ultimate limit to laser cooling efforts. Typical values for the Doppler limit are around $10^{-3}$K, e.g. 0.25 mK

<!-- page 157 -->

for Na and 0.14 mK for Rb, which is low but still relatively warm compared to the temperatures required for many interesting applications.

From a practical point of view, it may seem strange that atoms in a room-temperature apparatus can be in thermal equilibrium at $\sim$mK temperatures. The resolution to this puzzle is that the atoms are interacting not only with the thermal reservoir of photons, but also with a (zero-temperature) laser. The atomic temperature is a result of interactions with both thermal and highly non-thermal reservoirs.

## 8.5.3 Corrections for a dense sample

The discussion thus far has implicitly assumed that the atoms in the sample are independent. This approximation will fail when the sample becomes dense enough that the atoms start to affect each other. To apply our calculations to such a dense sample, we would need to account for two effects.

### Laser attenuation

An optically thick sample will attenuate any laser beam propagating through it, so the intensity of the cooling beams will diminish with distance into the sample. The associated forces will also acquire a spatial gradient, resulting in an additional dipole force as well as position-dependent cooling.

### Spontaneous photon reabsorption

A more subtle effect emerges when we consider the effects of spontaneous emission from one atom on nearby atoms. If a nearby atom reabsorbs the spontaneously emitted photon, it will receive a momentum kick away from the first atom. Spontaneous photon reabsorption thus leads to an effective repulsive force between atoms. We have been able to neglect these effects in a dilute sample because the spontaneous photon field falls off with distance. The spontaneous photon creates an outgoing spherical wave with intensity $\propto \lambda^2/r^2$, and consequently has little effect on atoms more than a wavelength away. It is possible to derive the resulting force from this kind of qualitative consideration. Alternately, one might try to generalize the Heisenberg-Langevin approach to account for atom-atom scattering events. The source term for the reservoir operator $\hat{R}$ would then involve a sum over all the atoms, so that the Langevin force on one atom depends on the other atoms. The result of this calculation will be a multi-atom Heisenberg-Langevin equation or, alternately, a multi-atom master equation (see, e.g.

<!-- page 158 -->

Gross, Haroche PHYS REP 93 (5): 301-396 1982). Such a generalized theoretical approach is beyond the scope of this course, and the coupled atom dynamics in a dense sample remains a subject of current research (see e.g. Castin, Cirac, and Lewenstein, PRL 80 (24): 5305-5308 1998).

<!-- notes
- The book numbers the footnote displays (8.86) and (8.87) before (8.88) in the text; both stand inside footnote 2.
- text-layer.md corrected: "offwith" (a lost ff ligature space) to "off with"; "Heisenberg-/Langevin" joined across its line break; footnote 3's URL given its printed underscores ("8.422_S13", "phil92_varenna.pdf"), which the text layer read as spaces.
- Footnote 3 "Bill Phillip’s notes": William Phillips' notes is meant (the name is Phillips).
- Eq. (8.89) "+ h.c,": comma for the period of "h.c."; kept.
- "$R^0_{opt}$": the second occurrence prints "opt" in italics, unlike $R^0_\mathrm{opt}$ around it; kept.
- 8.5.1 "$\sqrt{\langle p^2\rangle} = \sqrt{Dt}$": follows the book's Eq. (8.49), which should read $\overline{p^2} = 2Dt$ (see 8.4's notes), so $\sqrt{2Dt}$ is meant.
- Eqs. (8.93)-(8.96) write the decay as $\gamma_{12}$ while (8.90)-(8.92) use $\gamma/2$; the formulas agree only with $\gamma_{12} = \gamma/2$, so (8.96) is $k_BT_D = \hbar\gamma/2$ in the earlier notation. "the final temperature is simply the linewidth of the excited state": half the linewidth $\gamma$ is meant.
- Eq. (8.93): $R_\mathrm{opt}$ without the superscript 0 used in (8.92); kept.
-->

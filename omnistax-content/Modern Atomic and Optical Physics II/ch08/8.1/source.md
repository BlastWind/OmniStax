# 8.1 Incorporating center of mass motion into atom-light interactions

<!-- page 134 -->

In our discussion of atomic motion, we will focus for simplicity on an atom with only two relevant internal levels, $\{|1\rangle, |2\rangle\}$. Denoting the position and momentum of the atom by the operators $\hat{r} = \{\hat{x}, \hat{y}, \hat{z}\}$ and $\hat{p} = \{\hat{p}_x, \hat{p}_y, \hat{p}_z\}$, we can write down the Hamiltonian for a moving atom interacting with laser light with Rabi frequency $\Omega$:
$$ \hat{H} = \hat{H}_F + \hat{H}_{AF} + \frac{\hat{p}^2}{2m} + V(\hat{r}). $$ {eq:8.1}

The free-field Hamiltonian $\hat{H}_F$ accounts for electromagnetic energy density. The atom-field Hamiltonian $\hat{H}_{AF}$ has two components: (1) the atom-reservoir interaction $\hat{H}_{AR}$ leads to spontaneous emission and (2) the atom-laser interaction $\hat{H}_{AL}$ causes transitions between the two atomic levels.

<!-- page 135 -->

In the RWA, the atom-laser interaction may be written
$$ \hat{H}_{AL} = -\hbar\Omega(\hat{r})|2\rangle\langle 1| - \hbar\Omega(\hat{r})^*|1\rangle\langle 2|, $$ {eq:8.2}
where we have explicitly included spatial dependence of the laser amplitude and phase,
$$ \Omega(\hat{r}) = |\Omega(\hat{r})|e^{i\phi(\hat{r})}. $$ {eq:8.3}

### Interactions with a plane wave

The force exerted on an atom by a plane wave furnishes an instructive example of momentum transfer between light and atoms. In the notation introduced above, a running wave has a constant amplitude $|\Omega|$ but spatially varying phase $\phi = \mathbf{k}\cdot\mathbf{r}$. For this analysis we will assume that the external potential $V(\hat{r})$ is negligible over a characteristic distance scale for the problem. The momentum $\hat{p}$ is thus a good quantum number for the atomic motional state, and it is therefore advantageous to rewrite the laser phase operator $e^{i\mathbf{k}\cdot\mathbf{r}}$ in the momentum eigenbasis. Using two completeness relations, we find
$$ e^{ik\cdot\hat{r}} = \int dp \int dp'|p\rangle \underbrace{\langle p|e^{ik\cdot\hat{r}}|p'\rangle}_{\delta(p-(p'+\hbar k))} \langle p'| $$ {eq:8.4}
$$ = \int dp'|p' + \hbar k\rangle\langle p'|. $$ {eq:8.5}
Rewriting the atom-laser Hamiltonian,
$$ \hat{H}_{AL} = -\hbar|\Omega(\hat{r})| \int \left(|2\rangle|p + \hbar k\rangle\langle p|\langle 1| + |1\rangle|p\rangle\langle p + \hbar k|\langle 2|\right) dp, $$ {eq:8.6}
we see immediately that the interaction of light with the atom involves not only the internal state but also the center of mass momentum state. This momentum transfer is known as “atomic recoil.”

Suppose the atom starts out in the state $|p\rangle|1\rangle$. The plane wave light will promote it to the state $|p + \hbar k\rangle|2\rangle$, resulting in Rabi oscillations involving internal and momentum degrees of freedom. If we take into account the motional state of the atom, we find that the energy difference between these two states is not precisely equal to the internal transition energy $\hbar\omega_{12}$. In particular, the resonant frequency of this transition is
$$ \omega_\mathrm{res} = \omega_{12} + \frac{(p + \hbar k)^2}{2m\hbar} - \frac{p^2}{2m\hbar} $$ {eq:8.7}
$$ = \omega_{12} + \frac{pk}{m} + \frac{\hbar k^2}{2m}. $$ {eq:8.8}

<!-- page 136 -->

The two corrections have a simple physical interpretation: the first, $pk/m = vk$ is the Doppler shift, while the second is the recoil energy $\omega_R$ of the photon. Typically, the recoil shifts for alkali atoms are much smaller than the optical relaxation rate, with $\omega_R \sim \gamma/400 \sim 10 - 100\ \text{kHz}$. However, the recoil shift is not so different from the linewidth of two-photon transitions, indicating that interesting effects might arise in laser cooling of multilevel atoms.

<!-- notes
- Eq. (8.4) writes $e^{ik\cdot\hat{r}}$ with $k$ not bold, where the running text writes $e^{i\mathbf{k}\cdot\mathbf{r}}$; kept as printed.
- Page 136 "the recoil energy $\omega_R$ of the photon": $\omega_R = \hbar k^2/2m$ is a frequency (the recoil energy over $\hbar$), and the recoil is the atom's; kept.
- Page 136 "$\omega_R \sim \gamma/400 \sim 10 - 100$ kHz": for alkali atoms ($\gamma/2\pi \approx$ 5–6 MHz) $\gamma/400$ is about 15 kHz and the recoil frequency $\omega_R/2\pi$ is about 2–25 kHz (Cs 2 kHz, Rb 3.8 kHz, Na 25 kHz); the quoted range is high at its top end and the two estimates do not agree across alkalis. Kept as printed.
-->

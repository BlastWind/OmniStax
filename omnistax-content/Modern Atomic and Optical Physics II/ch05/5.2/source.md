# 5.2 Resonant excitation: Electromagnetically induced transparency

<!-- page 92 -->

The $\Lambda$ system examined above in the far-detuned regime exhibits a very different response to resonant excitation. As we bring the single photon detunings to zero $\Delta_1, \Delta_2 \rightarrow 0$, the two-photon resonance approaches the single-photon resonance and begins to broaden. Simultaneously, the AC Stark shifts increase. The overall effects, however, remain the same provided that $\Delta \gg \gamma_{13}, \Omega_{1,2}$. When this condition is no longer satisfied, the system response changes qualitatively (see Figure 5.4).

## 5.2.1 The dark resonance

Consider an experiment where we illuminate the three-level atom with an applied field $\Omega_2$ which is precisely on resonance, $\Delta_2 = 0$. We then sweep the frequency of the probe beam $\Delta_1 = \delta$, and observe how the susceptibility changes as a function of $\Delta_1$. Using the expression we previously derived for the optical coherence on the $\nu_1$ transition,
$$ \frac{\rho_{31}}{\Omega_1} = \frac{i}{\Gamma_{13}}\left(1 - \frac{|\Omega_2|^2/\Gamma_{13}}{\Gamma_{12} + |\Omega_2|^2/\Gamma_{13}}\right), $$ {eq:5.46}

<!-- page 93 -->

> FIGURE {fig:5.4} src=../../media/ch05/fig-5-4.png
> caption: As the detuning $\Delta$ is reduced, the two-photon resonance moves towards the single-photon resonance and broadens. When the the two resonances begin to overlap, the system no longer behaves like a far-detuned system, and qualitatively new effects appear.

we find that the absorption vanishes precisely on resonance $\delta = 0$ (for simplicity, here we ignore various factors of 2 arising from the equations):
$$ \mathrm{Im}[\frac{\rho_{31}}{\Omega_1}] = \frac{\gamma_{12}}{\gamma_{13}\gamma_{12} + |\Omega_2|^2} \rightarrow 0 \text{ as } \gamma_{12} \rightarrow 0. $$ {eq:5.47}
For $\Omega_2 \ll \gamma_{13}$, the width of this absorption dip is $\gamma_{12} + |\Omega_2|^2/\gamma_{13}$, whereas for $\Omega_2 \gg \gamma_{13}$, the width is approximately $\gamma_{12} + |\Omega_2|$. Note that the width of the dip can be very narrow $\ll \gamma_{13}$; this is an indication that two-photon physics is essential to the so-called “dark resonance”. Although the optical coherence $\rho_{31}$ vanishes at zero detuning, the coherence on the forbidden transition, $\rho_{21} \rightarrow -\Omega_1/\Omega_2$, remains finite, indicating that atomic coherence also plays a crucial role in this phenomenon. Far from the resonance condition, the usual far-detuned behavior applies, so we expect the probe to reveal a broad absorption peak with a narrow dark resonance in the center (see Figure 5.5).

### Physical picture of the dark resonance

In the situation when $\Omega_2 \gg \Omega_1$, the dressed state interpretation provides a reasonable description of the physics behind the dark resonance. In this

<!-- page 94 -->

> FIGURE {fig:5.5} src=../../media/ch05/fig-5-5.png
> caption: The real and imaginary part of the probe beam susceptibility are shown under resonant illumination by $\Omega_2$. The absorption dip at zero detuning is known as a dark resonance or electromagnetically induced transparency.

case, the strong resonant field $\Omega_2$ creates two dressed states $|\pm\rangle \propto |2\rangle \pm |3\rangle$, separated in energy by $2\Omega_2$. The weaker probe $\Omega_1$ should then exhibit two peaks corresponding to the transitions to the two dressed states. However, this picture does not provide a good explanation for why the absorption precisely vanishes when the probe field is tuned halfway between the dressed states, and it is not valid for arbitrary $\Omega_{1,2}$.

To gain further intuition for the physics behind the dark resonance, we shall examine the non-Hermitian effective Hamiltonian. If the metastable decoherence rate vanishes, $\gamma_{12} = 0$, and the applied fields are precisely on resonance, $\Delta = \delta = 0$, the effective Hamiltonian becomes
$$ \hat{H}_\mathrm{eff} = -\frac{i\hbar\gamma_3}{2}|3\rangle\langle 3| - (\Omega_1^*|1\rangle\langle 3| + \Omega_2^*|2\rangle\langle 3| + h.c.) $$ {eq:5.48}
$$ = -\frac{i\hbar\gamma_3}{2}|3\rangle\langle 3| - \underbrace{(\Omega_1^*|1\rangle + \Omega_2^*|2\rangle)}_{|B\rangle}\langle 3| - |3\rangle\underbrace{(\Omega_1\langle 1| + \Omega_2\langle 2|)}_{\langle B|}. $$ {eq:5.49}
Note that the excited state $|3\rangle$ only couples to a particular superposition of the lower states, $|B\rangle$. Furthermore, if we can construct a state $|D\rangle$ such that $\langle D|B\rangle = 0$, this new orthogonal superposition will be decoupled from

<!-- page 95 -->

the excited state and thus insensitive to its decay. This so-called dark state,
$$ |D\rangle = \frac{\Omega_2|1\rangle - \Omega_1|2\rangle}{\sqrt{|\Omega_1|^2 + |\Omega_2|^2}} $$ {eq:5.50}
is an eigenstate of the effective Hamiltonian with zero energy:
$$ \hat{H}_\mathrm{eff}|D\rangle = 0. $$ {eq:5.51}
A system in state $|D\rangle$ has vanishing absorption and polarization on the $|1\rangle$ to $|3\rangle$ transition, but finite polarization on the forbidden transition. Quantitatively, the density matrix for the dark state,
$$ \rho = |D\rangle\langle D|, $$ {eq:5.52}
has off-diagonal elements
$$ \rho_{21} = -\frac{\Omega_2^*\Omega_1}{|\Omega_1|^2 + |\Omega_2|^2}. $$ {eq:5.53}
In the limit that $\Omega_1 \ll \Omega_2$, we reproduce our previous result. Consequently, we see that the vanishing absorption on resonance is associated with the production of dark states which are decoupled from both light beams. This can also be viewed as a quantum interference phenomenon, where simultaneous excitations of $|3\rangle$ by $\Omega_1$ and $\Omega_2$ destructively interfere, leaving the excited state unpopulated by the applied fields.

### Dispersive properties of the dark resonance: ”slow light”

Thus far we have considered only the imaginary part of the probe susceptibility in the vicinity of the dark resonance. The real part leads to dispersive effects, since for $\Delta_2 = 0$ and $\delta$ small
$$ \mathrm{Re}[\chi] \propto \mathrm{Re}[\frac{\rho_{31}}{\Omega_1}] \approx \frac{\delta}{|\Omega_2|^2 + \gamma_{12}\gamma_{13}}. $$ {eq:5.54}
In the situation relevant to the dark resonance, the slope of the refractive index $n \propto \mathrm{Re}[\chi]$ can be controlled by changing the intensity of $\Omega_2$. In particular, this slope determines the group velocity since
$$ v_g = \frac{d\omega}{dk} = \frac{c}{n(\omega) + \omega\frac{dn}{d\omega}} $$ {eq:5.55}

<!-- page 96 -->

(where $n(\omega)$ is the index of refraction) and $n(\omega) = 1 + \mathrm{Re}[\chi]/2$. The slope $\frac{dn}{d\omega}$ diverges as $\gamma_{12} \rightarrow 0$ and $\Omega_2 \rightarrow 0$:
$$ v_g \approx \frac{c}{1 + \frac{\gamma_{13}\bar{\nu}3\pi(N/V)(\lambda/2\pi)^3}{|\Omega_2|^2 + \gamma_{13}\gamma_{12}}} $$ {eq:5.56}
so that the group velocity is reduced to zero as $\Omega_2 \rightarrow 0$ (see problem set 3 for a derivation of this formula). Simultaneously, the width $\Delta w$ of the the resonance also vanishes, since
$$ \Delta w \approx \frac{|\Omega_2|^2}{\gamma_{13}} \rightarrow 0. $$ {eq:5.57}
Note that when the linewidth is dynamically reduced while a pulse is travelling through the medium, careful considerations show that the spectrum of the pulse itself is also dynamically reduced. In particular, if the pulse spectrum fits inside the transparency window initially, it fits in the window at all times and no dissipation is taking place (see problem set 3 and references therein for further details).

Since the two-photon resonance can be much narrower than the single-photon linewidth, the group velocity of the probe pulse $\Omega_1$ can be reduced substantially below the speed of light. As resonant probe light enters the medium it compresses by a factor $v_g/c$, then slowly propagates through the atomic cloud, dragging along a spin coherence associated with the dark state. Since absorption vanishes, virtually all of the probe light is transmitted, with a significant delay due to the slow group velocity. This phenomenon is known as “electro-magnetically induced transparency” or “slow light”.

### Preparation of the dark state

Our discussion has not explained how the system is prepared in the dark state. In fact, if the probe light turns on slowly enough, the system will adiabatically follow from the initial state $|1\rangle$ to $|D\rangle$, in essence preparing itself. This phenomenon is an example of stimulated Raman adiabatic passage (STIRAP), whereby slowly varying applied fields can be used to efficiently and robustly manipulate the populations and atomic coherences of a system. Unlike $\pi$ pulses based on Rabi oscillations, which are exquisitely sensitive to pulse amplitude and timing, STIRAP techniques do not depend on the details of pulse shape.

To understand the basic mechanism for dark state formation, consider the asymptotic behavior of the dark state under different applied powers:
$$ \Omega_2 \rightarrow 0, \Omega_1 \text{ fixed} \quad \Rightarrow \quad |D\rangle = -|2\rangle $$ {eq:5.58}

<!-- page 97 -->

$$ \Omega_1 \rightarrow 0, \Omega_2 \text{ fixed} \quad \Rightarrow \quad |D\rangle = |1\rangle. $$ {eq:5.59}
The physics here is fairly obvious, since $|1\rangle$ does not couple to $\Omega_2$ and vice versa. Consequently, if the system starts out in the state $|1\rangle$ illuminated only by $\Omega_2$, it is already in the dark state. By slowly decreasing $\Omega_2$ while increasing $\Omega_1$, the atomic state will adiabatically follow the dark state, finally ending up in $|2\rangle$ when $\Omega_2 = 0$. Since the dark state contains no component of the excited state, and does not couple to the light, the atomic state will be free from dissipation or decoherence from the excited state. Such manipulation is known as a “counter-intuitive pulse sequence,” since the light is initially applied on the transition which is unpopulated.

<!-- notes
- text-layer.md corrected: captions joined at line-end hyphens ("res- onances", "susceptibil- ity") and "∆is" to "∆ is".
- "When the the two resonances" (Figure 5.4 caption) and "the width Δw of the the resonance": the book's doubled words, kept.
- Heading "”slow light”": the book's stray closing quotation mark at the start, kept.
- (5.47): the book's own remark says factors of 2 are dropped; the width estimates after it follow the same simplification.
-->

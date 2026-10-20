# 10.2 Model: An ion in a harmonic trap

<!-- page 219 - text-layer.md corrected: "Lamb-/Dicke" across the page-223 line end joined as "Lamb-Dicke" (the checker otherwise dropped the hyphen); "offusing" (the ff ligature) split to "off using" as printed.
-->

For our purposes, the physics of an ion trap can be understood by approximating the trap by a harmonic oscillator potential.

> FIGURE {fig:10.3} src=../../media/ch10/fig-10-3.png
> caption: Model of an ion confined to a 1D harmonic oscillator trap, subject to laser excitation and spontaneous emission.

The ion can interact with a laser beam, which will couple transitions between internal electronic degrees of freedom. If the internal transition is dipole allowed, the ion will quickly relax, spontaneously emitting a photon. Such transitions can be used for laser cooling the ion into its motional ground state and also for reading out the state of the qubit by observing whether or not it fluoresces. For quantum state engineering, however, it is desirable to have a long-lived metastable state which can be driven on a quadrupole transition. Ions have such metastable states with lifetimes of around a second, and we will focus on these dipole-forbidden transitions where spontaneous emission is negligible. These internal levels are illustrated in Figure 10.4.

<!-- page 220 - text-layer.md corrected: "Lamb-/Dicke" across the page-223 line end joined as "Lamb-Dicke" (the checker otherwise dropped the hyphen); "offusing" (the ff ligature) split to "off using" as printed.
-->

Since the ion is tightly bound by its trap, its motional state also has quantized energy levels. The Hilbert space of the ion can then be understood as a two level system with a harmonic oscillator ladder of Fock states describing its motion. Since we are concerned primarily with quantum state engineering, we will neglect phonon heating effects and assume that the ion can be prepared in its motional ground state. Consequently we are considering a trapped ion which is isolated both from the radiation bath and the phonon reservoir which constitute its environment.

> FIGURE {fig:10.4} src=../../media/ch10/fig-10-4.png
> caption: The internal and external degrees of freedom of an ion in a harmonic oscillator trap. Note that the dipole allowed transition is used for cooling the ion, whereas the dipole forbidden transition is used for encoding information in the ion.

## 10.2.1 The harmonic oscillator potential

The strong Coulomb interaction allows ions to be confined in traps with harmonic oscillator frequency $\nu \sim 10$ MHz. The position and momentum of the ion can be represented in terms of the creation and annihilation operators for a quantum of vibrational energy:
$$ \hat{x} = \sqrt{\frac{\hbar}{2m\nu}}\left(\hat{a} + \hat{a}^\dagger\right) $$ {eq:10.2}
$$ \hat{p} = i\sqrt{\frac{\hbar m\nu}{2}}\left(\hat{a}^\dagger - \hat{a}\right), $$ {eq:10.3}

<!-- page 221 - text-layer.md corrected: "Lamb-/Dicke" across the page-223 line end joined as "Lamb-Dicke" (the checker otherwise dropped the hyphen); "offusing" (the ff ligature) split to "off using" as printed.
-->

and the Hamiltonian for the ionic motion is simply
$$ \hat{H}_\mathrm{motion} = \hbar\nu\hat{a}^\dagger\hat{a}. $$ {eq:10.4}
The characteristic size of the ion wave function in its motional ground state is
$$ a_0 = \sqrt{\frac{\hbar}{2m\nu}}, $$ {eq:10.5}
and for tightly trapped ions this harmonic oscillator length is significantly smaller than optical wavelengths.

## 10.2.2 Internal energy levels

The electronic energy structure can be simply represented by a two-level system with ground state $|g\rangle$ and excited state $|e\rangle$. If we neglect spontaneous emission processes, the Hamiltonian is just
$$ \hat{H}_\mathrm{electronic} = \hbar\omega_{eg}|e\rangle\langle e|. $$ {eq:10.6}
In order to neglect decay from the excited state, we require that the decay rate $\gamma$ be small compared to the inverse of the timescale $\tau$ over which we wish to manipulate the ion. There are two commonly used methods to achieve $\gamma\tau \ll 1$:

(1) Use a metastable state which can be driven on a quadrupole transition.

(2) Use a far-detuned Raman transition to reduce the effective linewidth by $(\Omega/\Delta)^2 \ll 1$.

## 10.2.3 Ion-laser interactions

When the ion absorbs a photon, the associated momentum kick can excite higher vibrational states in the trap. To understand quantitatively where this comes from, consider the electric field associated with a running wave
$$ E_\mathrm{running} = \mathcal{E}e^{i(kx-\omega t)} + c.c. $$ {eq:10.7}
or a standing wave
$$ E_\mathrm{standing} = \mathcal{E}\sin{(kx + \phi)}e^{-i\omega t} + c.c. $$ {eq:10.8}
The interaction of this electric field with the ion occurs at the position of the ion, so we will replace the classical quantity $x$ by the operator quantity $\hat{x}$. The resulting interaction Hamiltonians (in the RWA) are then

<!-- page 222 - text-layer.md corrected: "Lamb-/Dicke" across the page-223 line end joined as "Lamb-Dicke" (the checker otherwise dropped the hyphen); "offusing" (the ff ligature) split to "off using" as printed.
-->

$$ \hat{H}_\mathrm{running} = -\hbar\left(\Omega|e\rangle\langle g|e^{i(k\hat{x}-\omega t)} + h.c\right) $$ {eq:10.9}
$$ \hat{H}_\mathrm{standing} = -\hbar\left(\Omega|e\rangle\langle g|\sin{(k\hat{x} + \phi)}e^{-i\omega t} + h.c\right). $$ {eq:10.10}
The momentum kick imparted to the atom can be seen explicitly if we write the state in the momentum basis, in which the Hamiltonian can induce the transition
$$ |g\rangle|p\rangle \rightarrow |e\rangle e^{ik\hat{x}}|p\rangle = |e\rangle|p + \hbar k\rangle. $$ {eq:10.11}
Consequently we can manipulate the center of mass motion of the ion via laser excitation.

### The Lamb-Dicke parameter

As we have alluded to previously, there are different length scales associated with the laser wavelength and the ion spatial extent. For tight traps, the ratio between them provides a small parameter
$$ \eta = \frac{2\pi a_0}{\lambda} \sim 0.1, $$ {eq:10.12}
and by expanding in this parameter we can highlight the physical processes allowed by the interaction Hamiltonian in the so-called “Lamb-Dicke regime”. We can also interpret the Lamb-Dicke parameter $\eta$ in terms of the recoil energy $\omega_R = \hbar k^2/2m$
$$ \eta = \sqrt{\frac{\omega_R}{\nu}}. $$ {eq:10.13}
Since $\omega_R \sim$ kHz and $\nu \sim 10$ MHz, we can see that $\eta$ can be quite small. Physically, the Lamb-Dicke regime corresponds to the limit when the ion is so tightly bound that the recoil energy of a photon is insufficient to excite a higher vibrational state, so the photon momentum is absorbed by the trap rather than the ion.

In terms of the Lamb-Dicke parameter, the total Hamiltonian in the rotating frame for the running wave is
$$ \hat{H}_r = \hbar\nu\hat{a}^\dagger\hat{a} - \hbar\Delta|e\rangle\langle e| - \hbar\left(\Omega|e\rangle\langle g|e^{i\eta(\hat{a}+\hat{a}^\dagger)} + h.c\right) $$ {eq:10.14}
while the standing wave Hamiltonian is
$$ \hat{H}_s = \hbar\nu\hat{a}^\dagger\hat{a} - \hbar\Delta|e\rangle\langle e| - \hbar\left(\Omega|e\rangle\langle g|\sin\left(\eta(\hat{a} + \hat{a}^\dagger) + \phi\right) + h.c\right). $$ {eq:10.15}

<!-- page 223 - text-layer.md corrected: "Lamb-/Dicke" across the page-223 line end joined as "Lamb-Dicke" (the checker otherwise dropped the hyphen); "offusing" (the ff ligature) split to "off using" as printed.
-->

Note that $\eta$ appears in the exponent or the sine, so expanding in the Lamb-Dicke parameter can provide a significant simplification of these Hamiltonians. In particular, we will see that the resulting dynamics bear a remarkable resemblance to the Jaynes-Cummings Hamiltonian in cavity quantum electrodynamics, with cavity photons replaced by quantized excitations of the ion motional state.

### The bare energy spectrum

Before analyzing the effects of the laser-ion interaction, we should understand the structure of the bare energy levels, which are eigenstates of
$$ \hat{H}_0 = \hbar\nu\hat{a}^\dagger\hat{a} - \hbar\omega_{ge}|e\rangle\langle e|. $$ {eq:10.16}
Since $\omega_{eg} \gg \nu$, the ground and excited states of the electronic structure are well separated, but subdivided into different motional states. In particular, the bare states take the form
$$ \hat{H}_0|g\rangle|n\rangle = \hbar n\nu|g\rangle|n\rangle $$ {eq:10.17}
$$ \hat{H}_0|e\rangle|n\rangle = \hbar(n\nu + \omega_{eg})|e\rangle|n\rangle. $$ {eq:10.18}

### Laser-induced couplings: Running waves

The ion-laser interaction couples the bare energy states of the trapped ion. In the case of a running wave, the matrix elements between the states $|g\rangle|n\rangle$ and $|e\rangle|m\rangle$ are
$$ \langle g|\langle n|\hat{H}|e\rangle|m\rangle = -\hbar\Omega\langle n|e^{i\eta(\hat{a}+\hat{a}^\dagger)}|m\rangle. $$ {eq:10.19}
Expanding the exponent to lowest order in $\eta$, the only nonvanishing matrix elements couple $n$ to $m = n, n+1, n-1$:
$$ \langle g|\langle n|\hat{H}|e\rangle|n\rangle = -\hbar\Omega\left(1 + \mathcal{O}(\eta^2)\right) $$ {eq:10.20}
$$ \langle g|\langle n|\hat{H}|e\rangle|n+1\rangle = -\hbar\Omega\left(\eta\sqrt{n+1} + \mathcal{O}(\eta^3)\right) $$ {eq:10.21}
$$ \langle g|\langle n|\hat{H}|e\rangle|n-1\rangle = -\hbar\Omega\left(\eta\sqrt{n} + \mathcal{O}(\eta^3)\right). $$ {eq:10.22}
Note that in fact the real expansion parameter is $\eta\sqrt{n}$, since we are expanding an exponent of $\eta(\hat{a} + \hat{a}^\dagger)$, and $\hat{a}$ scales as $\sqrt{n}$.

These three matrix elements induce couplings between the internal states and motional states as illustrated in Figure 10.5. By tuning the laser frequency, these three transitions can be addressed individually.

Suppose the laser frequency is tuned to resonance with the bare atomic transition frequency $\omega = \omega_{eg}$. If the power is sufficiently small $\Omega \ll \nu/\eta$, excitation of the sideband transitions is strongly suppressed, so the internal and external degrees of freedom decouple. In this limit, the system is well described by a two-level Hamiltonian
$$ \hat{H} = \hbar\nu\hat{a}^\dagger\hat{a} - \hbar\Delta|e\rangle\langle e| - \hbar\Omega\left(|e\rangle\langle g| + |g\rangle\langle e|\right). $$ {eq:10.23}
Physically, this limit corresponds to a well-localized ion whose momentum distribution is far greater than the recoil momentum imparted by the laser excitation. When the ion absorbs a photon, its energy is insufficient to excite the ion to a higher motional state, and its momentum is imparted to the trap.

<!-- page 224 - text-layer.md corrected: "Lamb-/Dicke" across the page-223 line end joined as "Lamb-Dicke" (the checker otherwise dropped the hyphen); "offusing" (the ff ligature) split to "off using" as printed.
-->

> FIGURE {fig:10.5} src=../../media/ch10/fig-10-5.png
> caption: When the laser is tuned to the bare atomic resonance, the atom cycles between internal states without changing its motional state. By tuning the laser to the blue or the red sideband, different motional states can also be addressed.

If the laser is tuned to the red sideband, the effective dynamics can be described by a Jaynes-Cummings model
$$ \hat{H} = \hbar\nu\hat{a}^\dagger\hat{a} - \hbar\Delta|e\rangle\langle e| - i\hbar\eta\Omega\left(|e\rangle\langle g|\hat{a} + |g\rangle\langle e|\hat{a}^\dagger\right), $$ {eq:10.24}
where the internal transitions are accompanied by creation or annihilation of a phonon. Precisely the same Hamiltonian appears in cavity quantum electrodynamics, so we can apply our intuition from cavity quantum electrodynamics to understand how the trapped ion evolves. Nevertheless, there are some important physical differences between the two systems. The frequency scales for optical photons $\sim$ THz are far greater than those for ion motion $\sim$ MHz. In addition, the vacuum Rabi coupling is replaced by the effective Rabi frequency $g \rightarrow \eta\Omega$. Consequently, the strong coupling regime is significantly easier to attain for ion traps, since one only needs to increase the laser power to increase the coupling strength. Furthermore, the coupling parameter can be switched on and off using the laser, enabling controlled manipulation of the ion internal and motional state.

<!-- page 225 - text-layer.md corrected: "Lamb-/Dicke" across the page-223 line end joined as "Lamb-Dicke" (the checker otherwise dropped the hyphen); "offusing" (the ff ligature) split to "off using" as printed.
-->

Similar considerations apply for blue sideband transitions. In this case, the system obeys an “anti-Jaynes Cummings” Hamiltonian
$$ \hat{H} = \hbar\nu\hat{a}^\dagger\hat{a} - \hbar\Delta|e\rangle\langle e| - i\hbar\eta\Omega\left(|e\rangle\langle g|\hat{a}^\dagger + |g\rangle\langle e|\hat{a}\right), $$ {eq:10.25}
where internal state excitation is accompanied by emission of a phonon and vice versa.

> FIGURE {fig:10.6} src=../../media/ch10/fig-10-6.png
> caption: The transitions induced by a laser tuned to the red or blue sideband. Note that, unlike the vertical transitions, the Rabi frequency for sideband transitions changes as a function of the number of phonons $\sim \eta\Omega\sqrt{n}$.

### Laser-induced couplings: Standing waves

When the ion is illuminated by a standing wave, the phase of the standing wave relative to the ion trap minimum provides another means to manipulate the system. Performing the Lamb-Dicke expansion on the Hamiltonian yields
$$ \hat{H}_s = \hbar\nu\hat{a}^\dagger\hat{a} - \hbar\Delta|e\rangle\langle e| - \hbar\left(\Omega|e\rangle\langle g|\left(\sin\phi + \eta(\hat{a} + \hat{a}^\dagger)\cos\phi + \mathcal{O}(\eta^2)\right) + h.c\right). $$ {eq:10.26}
Similar transitions occur between the bare energy levels, but by setting the phase $\phi = 0$, one can eliminate vertical transitions of the ion.

<!-- page 226 - text-layer.md corrected: "Lamb-/Dicke" across the page-223 line end joined as "Lamb-Dicke" (the checker otherwise dropped the hyphen); "offusing" (the ff ligature) split to "off using" as printed.
-->

## 10.2.4 Sideband cooling

By optically addressing transitions between motional states, it is possible to cool ions into the ground state of the trap. Typically, this is done by applying a laser resonant with the red sideband of an allowed transition. Every excitation cycle decreases the motional energy, while the emission happens into all three possible transitions; on average, this pumps the ions into the ground state of the trap, which is dark to the red-detuned laser.

The rate at which the cooling takes place is set by the fluorescence rate of the ionic excited state $\gamma$. Initially, one would like to have a large fluorescence rate to increase the cooling rate; however, to cool into the ground state requires $\gamma \ll \nu$ so that off-resonant excitation of the direct and blue sideband transitions can be neglected. In practice, the decay rate is often adjusted by choosing a cooling transition which is nominally forbidden. By applying another laser to couple the (forbidden) excited state to a different excited state which has an allowed transition to the ground state, one can control the effective spontaneous emission rate. Using such techniques, experimentalists have cooled ions in to the trap ground state with in excess of 99% efficiency.

<!-- notes
- 10.2.2: the two methods "(1) …" and "(2) …" are printed as indented numbered paragraphs, kept with the book's "(1)", "(2)".
- Eqs. (10.9), (10.10), (10.14), (10.15), (10.26): "h.c" without its final period, as printed.
- Eq. (10.16): printed $-\hbar\omega_{ge}|e\rangle\langle e|$; meant $+\hbar\omega_{eg}|e\rangle\langle e|$, as in Eq. (10.6) and the eigenvalue $\hbar(n\nu+\omega_{eg})$ of Eq. (10.18). Sign and subscript order kept as printed.
- Eqs. (10.24), (10.25): $-i\hbar\eta\Omega(|e\rangle\langle g|\hat{a} + |g\rangle\langle e|\hat{a}^\dagger)$ is not Hermitian with the factor $i$; meant either a relative minus sign, $-i\hbar\eta\Omega(|e\rangle\langle g|\hat{a} - |g\rangle\langle e|\hat{a}^\dagger)$ (the $i$ from expanding $e^{i\eta(\hat{a}+\hat{a}^\dagger)}$), or no $i$. Kept as printed.
- Eqs. (10.12), (10.13) and the text: $\eta \sim 0.1$ but $\omega_R \sim$ kHz and $\nu \sim 10$ MHz give $\eta = \sqrt{\omega_R/\nu} \sim 0.01$; the orders of magnitude are loose (typical $\omega_R/2\pi$ is tens of kHz and $\nu/2\pi$ a few MHz, giving $\eta \sim 0.1$).
- Eq. (10.13) context: $\omega_R = \hbar k^2/2m$ is called the "recoil energy" but is a frequency (the recoil energy over $\hbar$); kept.
- 10.2.3 "The momentum kick imparted to the atom": the book's word for the ion, kept.
- 10.2.4 "cooled ions in to the trap ground state": "in to" for "into", the book's, kept.
- "anti-Jaynes Cummings": the missing hyphen is the book's, kept.
- Figure 10.4 labels the forbidden transition's upper level $|r\rangle$, while the text calls the excited state $|e\rangle$.
- Figure 10.5's caption says "the atom cycles", the book's word for the ion.
- text-layer.md corrected: "Lamb-/Dicke" across the page-223 line end joined as "Lamb-Dicke" (the checker otherwise dropped the hyphen); "offusing" (the ff ligature) split to "off using" as printed.
-->

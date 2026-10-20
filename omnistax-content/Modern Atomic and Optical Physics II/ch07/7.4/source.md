# 7.4 Analysis of STIRAP: The condition for adiabatic following

<!-- page 124 -->

We have argued qualitatively that the system adiabatically follows the dark state as a counter-intuitive pulse sequence is applied, and we have found the conditions for validity of the adiabatic theorem for coherent evolution. We have not yet quantified how slowly the probe pulse must change for this simple picture to remain valid in a system that exhibits dephasing and decay.

### Analysis of the adiabaticity condition

To quantitatively analyze non-adiabatic losses, we assume a specific pulse profile that occurs on a characteristic timescale $\tau$. For instance, suppose that the two pulses illuminating the atomic cloud have a time dependence
$$ \Omega_1(t) = \Omega\sin\frac{t}{\tau} $$ {eq:7.39}

<!-- page 127 -->

$$ \Omega_2(t) = \Omega\cos\frac{t}{\tau}. $$ {eq:7.40}
If the system starts out in $|1\rangle$ at $t = 0$, and adiabatically follows the dark state as the pulses change amplitude, then at $t = (\pi/2)\tau$, the system will be in $-|2\rangle$. We would like to find out the minimum time $\tau$ for which the atomic states can follow the evolution of the field without leaving the dark state.

<!-- page 125 -->

> FIGURE {fig:7.5} src=../../media/ch07/fig-7-5.png
> caption: Pulse sequence for the four-level system. Three fields, S = $\Omega_3$ ,C = $\Omega_4$, and P = $\Omega_1$ are used to controllably transfer atoms from the initial state $|1\rangle$ to some superposition of $|3\rangle$ and $|4\rangle$. The probability amplitudes in the final state are determined by the timing, phase and power of the control pulse $\Omega_4$.

<!-- page 126 -->

> FIGURE {fig:7.6}
> caption: Beamsplitter for four-level atoms (metastable Neon) using adiabatic manipulation techniques. The relevant four levels are illustrated in (a), and the fields are named by their polarization: $\pi = \Omega_1, \sigma^+ = \Omega_3, \sigma^- = \Omega_4$. (b) The atoms travel through the three beams, which are offset by a variable distance. If the atoms end up in $|3\rangle$, they receive a momentum kick in the opposite direction than those which end up in $|4\rangle$. In the lower two graphs, the spatial distribution of atoms is shown for a variety of pulse sequences.

In order to incorporate dephasing and decay into our description, we will use the stochastic wavefunction formulation. To keep things simple, we will neglect any decay out of $|2\rangle$ and also neglect any repopulation of lower states from decay out of $|3\rangle$.^[This is tantamount to assuming that all decay goes into a fourth state outside of the system we're considering.] The non-Hermitian Schrodinger equation for a generic state $|\psi(t))\rangle = c_1(t)|1\rangle + c_2(t)|2\rangle + c_3(t)|3\rangle$ yields the following equations of motion for the probability amplitudes:
$$ \dot{c}_1 = i\Omega_1^*(t)c_3 $$ {eq:7.41}
$$ \dot{c}_2 = i\Omega_2^*(t)c_3 $$ {eq:7.42}
$$ \dot{c}_3 = -\gamma_{13}c_3 + i\left(\Omega_1(t)c_1 + \Omega_2(t)c_2\right). $$ {eq:7.43}
We will look for a solution of these wave equations in the form
$$ c_i = c_i^{(0)} + c_i^{(1)} + \ldots $$ {eq:7.44}
where each term in the sum represents a higher order correction in powers of a small parameter $\propto 1/\tau$. The lowest order solution $c_i^{(0)}$ is the stationary solution and can be found by neglecting all time derivatives in the equations of motion. The first two equations imply that $c_3^{(0)} = 0$, and by simultaneously solving the third equation and the normalization condition $\langle\psi|\psi\rangle = 1$ we can find the zeroth order amplitudes:
$$ c_1^{(0)} = \frac{\Omega_2}{\sqrt{|\Omega_1|^2 + |\Omega_2|^2}} = \cos\frac{t}{\tau} $$ {eq:7.45}
$$ c_2^{(0)} = -\frac{\Omega_1}{\sqrt{|\Omega_1|^2 + |\Omega_2|^2}} = -\sin\frac{t}{\tau} $$ {eq:7.46}
$$ c_3^{(0)} = 0. $$ {eq:7.47}
Note that neglecting time derivatives gives us precisely the dark state we found earlier.

<!-- page 128 -->

Strictly speaking, however, $c_1^{(0)}$ and $c_2^{(0)}$ do not give an exact solution to the wave equations because their time derivatives are nonzero. To first nonvanishing order in $1/\tau$, we must include the effects of time variation in $c_1^{(0)}$ and $c_2^{(0)}$, yielding a set of equations for the first order corrections:
$$ \dot{c}_1^{(0)} = i\Omega_1^* c_3^{(1)} $$ {eq:7.48}
$$ \dot{c}_2^{(0)} = i\Omega_2^* c_3^{(1)} $$ {eq:7.49}
$$ 0 = -\gamma_{13}c_3^{(1)} + i\left(\Omega_1 c_1^{(1)} + \Omega_2 c_2^{(1)}\right). $$ {eq:7.50}
The population amplitude for the excited state is no longer zero, since
$$ c_3^{(1)} = \frac{\dot{c}_1^{(0)}}{i\Omega_1^*} = \frac{i}{\Omega\tau}. $$ {eq:7.51}
Substituting the expression for $c_3^{(1)}$ into Eq. (7.50), we find
$$ i\left(\Omega_1 c_1^{(1)} + \Omega_2 c_2^{(1)}\right) = \frac{i\gamma_{13}}{\Omega\tau}. $$ {eq:7.52}
This equation cannot be solved^[Formally, we are seeking a solution to the vector differential equation $$ \dot{v} = M(t/\tau)v(t), $$ {eq:7.54} which we guess is of the form $v(t) = v^{(0)} + v^{(1)} + \ldots$, where $v^{(0)}$ satisfies $M(t/\tau)v^{(0)} = 0$. Substituting this result into the differential equation above, we find that $$ \dot{v}^{(0)} \approx M(t/\tau)\left(v^{(0)} + v^{(1)}\right), $$ {eq:7.55} or $v^{(1)} = M^{-1}(t/\tau)\dot{v}^{(0)}$. Such an expansion fails for the system we are considering, however, because $M$ is singular and cannot be inverted. Nonetheless, we see that the expansion does tell us some useful information about how the higher-order correction scales. To properly solve this system using some kind of adiabatic expansion, one should adiabatically eliminate the excited state, but solve the resulting equations of motion for $c_{1,2}$ exactly.] for $c_1^{(1)}$ and $c_2^{(2)}$; however, we can immediately see that these first order corrections $c_1^{(1)}$ and $c_2^{(1)}$ are both proportional to $\gamma_{13}/\Omega^2\tau$. The evolution of the atomic state is approximately adiabatic when these corrections are small, so the adiabaticity condition becomes
$$ \frac{\gamma_{13}}{\Omega^2\tau} \ll 1. $$ {eq:7.53}
This result illustrates the importance of decay in adiabatic processes, since this result is quite different from what we found for adiabatic following of a coherently evolving system.

<!-- page 129 -->

### Error due to quantum jumps

In calculating the non-adiabatic corrections to dark state formation, we have neglected another source of error: quantum jumps. During the characteristic timescale $\tau$, the probability for the system to undergo a quantum jump is
$$ P_\mathrm{jump} = \gamma_{13}\int_0^\tau |c_3|^2 = \frac{\gamma_{13}}{\Omega^2\tau}. $$ {eq:7.56}
The condition for the validity of the stochastic wavefunction approach us thus
$$ P_\mathrm{jump} \ll 1 \Rightarrow \frac{\gamma_{13}}{\Omega^2\tau} \ll 1, $$ {eq:7.57}
so the adiabatic approximation and the non-Hermitian evolution used to derive it are valid in the same situations.

Note that both non-adiabatic corrections to the non-Hermitian wave function and quantum jumps limit the fidelity of adiabatic passage from $|1\rangle$ to $-|2\rangle$. In particular, the probability to end up in the correct final state ($\Omega\tau = \pi/2$) can be explicitly calculated to be
$$ \rho_{22} = e^{-\frac{\pi\gamma_{13}}{2|\Omega|^2\tau}}. $$ {eq:7.58}
Unlike the Landau-Zener problem discussed above, this exact solution permits an expansion in the small parameter $\gamma_{13}/\Omega^2\tau$. While we cannot find a perturbative solution for coherent adiabatic processes, such an expansion can become possible in the presence of decay.

## 7.4.1 Remarks

### The partially-diagonalized basis: an intuitive approach

Our analysis has been carried out using the bare state basis $|1\rangle, |2\rangle$ and $|3\rangle$. One could define a time-dependent dressed state basis by fully diagonalizing the Hamiltonian. In practice, however, this problem is most easily solved and understood in a partially diagonalized basis composed of the the dark state $|D\rangle$, the bright state $|B\rangle$, and the excited state $|E\rangle$:
$$ |B\rangle = \frac{\Omega_1|1\rangle + \Omega_2|2\rangle}{\sqrt{|\Omega_1|^2 + |\Omega_2|^2}} $$ {eq:7.59}
$$ |D\rangle = \frac{\Omega_2|1\rangle - \Omega_1|2\rangle}{\sqrt{|\Omega_1|^2 + |\Omega_2|^2}} $$ {eq:7.60}
$$ |E\rangle = |3\rangle. $$ {eq:7.61}

<!-- page 130 -->

By choosing this hybrid basis we have achieved a considerable simplification of the interaction Hamiltonian,
$$ \hat{H}_\mathrm{int} = -\sqrt{|\Omega_1|^2 + |\Omega_2|^2}\left(|B\rangle\langle E| + |E\rangle\langle B|\right). $$ {eq:7.62}
The dark state is not involved in the dynamics, since the excited state only couples to the bright state superposition of $|1\rangle$ and $|2\rangle$.

Working in this new basis provides us with an intuition for non-adiabatic corrections. States $|B\rangle$ and $|E\rangle$ are coupled by $\Omega = \sqrt{|\Omega_1|^2 + |\Omega_2|^2}$, while the finite pulse time induces a weak coupling between the dark and bright states. The strength of the $|D\rangle \to |B\rangle$ transition is given by
$$ i\hbar\langle B|\frac{d}{dt}|D\rangle = -i\hbar\frac{1}{\tau}. $$ {eq:7.63}
The nonadiabatic coupling acts like a weak field with Rabi frequency of $\Omega_\mathrm{NA} = 1/\tau$ driving the $|D\rangle$ to $|B\rangle$ transition.^[Note that our choice of $\Omega_1(t), \Omega_2(t)$ as sines and cosines has led us to a constant non-adiabatic coupling, which makes the mathematics easier. Other functions would also lead to $\Omega_\mathrm{NA}$, but in general it would be a function of time.]

This is precisely the kind of situation encountered for an atom excited by optical and microwave radiation in a double resonance experiment. The net effect of $\Omega$ and $\gamma_{13}$ is to introduce a finite lifetime of $|B\rangle$ , since $|B\rangle$ can be excited to $|E\rangle$ which then decays. The escape rate out of $|B\rangle$ is on the order of the optical excitation rate,
$$ \gamma_B = \frac{\Omega^2}{\gamma_{13}}. $$ {eq:7.64}
The atom will remain in the dark state provided that the mixing rate $\Omega_\mathrm{NA}$ between $|D\rangle$ and $|B\rangle$ is weaker than the inverse lifetime of $|B\rangle$,
$$ \frac{1}{\tau} \ll \frac{\Omega^2}{\gamma_{13}}. $$ {eq:7.65}
Here, decay from the bright state helps to force the atoms into the dark state. By reasoning physically we have arrived at precisely the same adiabaticity condition we derived mathematically.

### Adiabatic passage and EIT

There is an interesting relationship between the condition for adiabatic following and the condition for pulse propagation within an EIT medium. The spectral window for electromagnetically induced transparency allows a probe pulse to propagate without losses only if all of its spectral components fit within the dark resonance linewidth $\Delta\omega$, i.e. if the probe pulse duration is sufficiently long $\tau \gg 1/\Delta\omega$. Since $\Delta\omega = \Omega^2/\gamma_{13}$, the condition for EIT pulse transmission corresponds exactly to the adiabatic following condition.

<!-- page 131 -->

This correspondence underscores the relationship between EIT and adiabatic processes. If the pulse enters slowly enough, the atomic system adiabatically follows the dark state into a superposition of $|1\rangle$ and $|2\rangle$ which propagates without loss through the medium. As the pulse exits, the atomic state adiabatically follows the dark state back to $|1\rangle$, transferring the atomic coherence to the transmitted light.

### Non-adiabatic dark state preparation

The dark state can also be prepared without adiabatic processes. For example, suppose the system started in an incoherent mixture of states, $\rho_{11} = \rho_{22} = 1/2$. Since the desired final state is a pure state, no Hamiltonian evolution (adiabatic or not) could transform this mixed state into a dark state.

Nevertheless, the experimental discovery of dark states [Alzelter *et al.* Novvo Cirr. 36B, 5/76] was done by monitoring fluorescence from a thermal sodium vapor cell illuminated by two continuous-wave fields. A magnetic field gradient along the cell created a spatial gradient of detunings due to the Zeeman effect. At the precise location along the cell where the Zeeman-shifted two-photon detuning vanished, a dark stripe appeared in the fluorescence signal. This was interpreted as formation of a dark state – yet the thermal vapor had started out in a statistical mixture.

This puzzle is easily resolved by analyzing the experiment in the partially diagonalized basis of bright and dark states. The original mixed state is a statistical mixture of the bright state and the dark state. Consider the situation when the CW fields $\Omega_1$ and $\Omega_2$ are applied such that non-adiabatic coupling to $|B\rangle$ and $|D\rangle$ vanishes. Meanwhile, the pair of fields act as an optical pumping beam, exciting an atom in $|B\rangle$ to $|E\rangle$ where it either decays to $|D\rangle$ (where it then remains) or $|B\rangle$ (from which it gets pumped back to $|E\rangle$). Optical pumping in the partially diagonalized basis thus prepares the system in the dark state by purely incoherent processes.

<!-- page 132 -->

### Populations and coherences: The importance of basis

We see from the example of dark state formation that the preparation of atomic coherence is somehow related to optical pumping. This is not too surprising because coherence in one basis, (e.g. $\{|1\rangle, |2\rangle\}$) is just population difference in another basis, (e.g. $\{|B\rangle, |D\rangle\}$).

The relationship between populations and coherences can be illuminated by the simple example of an atom interacting with linearly polarized light on a $J = 1$ to $J' = 1$ transition. In the absence of an applied magnetic field, we are free to choose our axis of quantization either parallel or perpendicular to the light polarization.

> FIGURE {fig:7.7} src=../../media/ch07/fig-7-7.png
> caption: Linearly polarized light near resonant with a J = 1 to J’ = 1 transition is most easily understood if the axis of quantization is chosen parallel to the axis of polarization. In this first case, the fields will clearly pump the atoms into the $m_{||} = 0$ state. If we choose to analyze the problem in the perpendicular basis, we must identify the $\Lambda$ system highlighted in red. The light will pump the populations into the associated dark state superposition of $m_\perp = \pm 1$, which is exactly equal to the state $m_{||} = 0$.

Suppose that we choose to quantize the $m_J$ sublevels parallel to the light polarization. Since symmetry considerations forbid transitions with $\Delta J = 0, \Delta m_J = 0$, the light will only couple $m_J = \pm 1 \to m_J' = \pm 1$, and any mixed state will be optically pumped into the lower $m_J = 0$ state.

Now suppose we choose to analyze the same problem with the light polarized perpendicularly to the axis of quantization. Any linear polarization can be decomposed into two circular polarizations, which couple the four $\Delta m_J = \pm 1$ transitions. In this mess of levels and transitions, we can identify a $\Lambda$ configuration: the $m_J = 1$ state and the $m_J = -1$ state are now

<!-- page 133 -->

both coupled to the same $m_J' = 0$ excited state. Consequently, the system has a dark state, and the atoms will be optically pumped into a dark superpostion of $m_J = -1$ and $m_J = 1$ which precisely corresponds to the $m_J = 0$ state quantized along the polarization axis.

The bottom line of this discussion is that a coherence in one basis is a population distribution in another basis. Typically, the latter basis will provide the most physical insight into a complicated problem.

### Applications of the dark state

The dark state is an important tool which has been used both to prepare and manipulate atomic states and to control pulses of light. In addition, a momentum transfer is associated with the formation of the dark state. Consequently dark state techniques can also be used to generate superpositions of momentum states or spatial states. For example, as noted in the previous lecture, adiabatic passage has been used to create a controllable atomic beamsplitter.

<!-- notes
- Page order: (7.39) ends page 124 and (7.40) opens page 127; Figures 7.5 and 7.6 fill pages 125 and 126 alone. The figures belong to the four-level discussion of 7.3.2 and are placed after the paragraph that follows (7.40); the page comments follow the text.
- "a generic state $|\psi(t))\rangle$": the doubled closing parenthesis is printed so, kept.
- "This equation cannot be solved³for": the page sets no space after the footnote mark; a space is written after the footnote so the words stay apart. "$c_1^{(1)}$ and $c_2^{(2)}$": $c_2^{(2)}$ is the book's typo for $c_2^{(1)}$, kept.
- "the stochastic wavefunction approach us thus": the book's typo for "is thus", kept.
- "composed of the the dark state": the doubled word is the book's, kept.
- "a dark superpostion": the book's typo for "superposition", kept.
- Eq. (7.56): the integral is printed without $dt$, kept.
- Eq. (7.58): "the correct final state ($\Omega\tau = \pi/2$)": the final state is reached at $t = (\pi/2)\tau$ (see after (7.40)); $\Omega\tau$ is not that condition. Kept as printed.
- Citation "[Alzelter *et al.* Novvo Cirr. 36B, 5/76]": the paper is G. Alzetta et al., Nuovo Cimento 36B, 5 (1976); the authors' name and journal are misspelt. Kept as printed.
- "Applications of the dark state": "as noted in the previous lecture": the atomic beamsplitter was described in 7.3.2 of this chapter. Kept.
- "the non-adiabatic coupling to $|B\rangle$ and $|D\rangle$ vanishes": coupling between $|B\rangle$ and $|D\rangle$ is meant. Kept.
- Figure 7.5 caption: the spacing "S = $\Omega_3$ ,C" is the book's, kept.
- text-layer.md corrected: the subscript "3" that split "simultane-/ously" moved before the line so the word joins; Figure 7.6 caption "adia- batic" joined to "adiabatic".
- Figure crops 7.5, 7.6 and 7.7 are clean.
-->

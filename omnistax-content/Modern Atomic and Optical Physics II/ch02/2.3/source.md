# 2.3 Quantized electromagnetic fields

<!-- page 33 -->

Thus far we have considered atomic absorption and emission processes stimulated by the presence of a classical field. However, practical experience tells us that real atoms will decay from an excited state even in the absence of any applied field. Such spontaneous emission processes result from the atom interaction with the vacuum modes of the field; to describe them requires a quantum mechanical treatment of the electromagnetic field.

## 2.3.1 Quantization

We will use a quantization procedure (following e.g. Meystre and Sargent “Elements of Quantum Optics”) which starts with Maxwell’s equations for a free field, i.e. in the absence of any sources. For a free field, Maxwell’s equations can be converted to wave equations for the electric and magnetic fields. Since the wave equation describes classical evolution of a harmonic oscillator, we will quantize the electric field in a manner precisely analogous to the quantization of the harmonic oscillator. In particular, the electric field satisfies the wave equation

<!-- page 34 -->

$$ \nabla^2\mathbf{E} = \frac{1}{c^2}\frac{\partial^2\mathbf{E}}{\partial^2 t}, $$ {eq:2.55}
and the associated magnetic field can be found using
$$ \nabla\times\mathbf{B} = \frac{1}{c^2}\frac{\partial\mathbf{E}}{\partial t}. $$ {eq:2.56}
Note that these formulae and those that follow are written in S.I. units.

Our approach considers a field contained in a large cavity of length $L$ and volume $V$ with periodic boundary conditions. The eigenmodes of such a system are running waves $\propto e^{i\mathbf{k}\cdot\mathbf{r}}$, with allowed wavevectors
$$ k_{\alpha,j}L_\alpha = 2\pi j_\alpha \text{ where } \alpha = \{x, y, z\} \text{ and } j_\alpha = \{\ldots, -2, -1, 1, 2, \ldots\}. $$ {eq:2.57}
Each $\mathbf{k}$-vector can have two possible modes corresponding to the two polarizations orthogonal to $\mathbf{k}$. For notational convenience, we will assume that $\mathbf{k_j}$ has an index $j$ which includes both the mode number and the polarization of the wave. Note that it is possible to expand in terms of any complete set of mode functions. For example, a large cavity with vanishing electric field at the boundary would support sinusoidal modes; for examining laser beam propagation, Hermite-Gaussian modes may be more appropriate.

An arbitrary excitation may be expanded in terms of these spatial modes. In the case of the running wave modes, an $\hat{x}-$polarized field propagating along the $\hat{z}$ axis may be written
$$ E_x(z,t) = \sum_j \underbrace{\sqrt{\frac{\nu_i^2}{\epsilon_0 V}}}_{A_j} q_j(t)e^{ik_jz}, $$ {eq:2.58}
where the time dependence is contained in $q_j(t)$, and $A_j$ is chosen such that $q_j$ will correspond to the position coordinate of a harmonic oscillator. The associated magnetic field is
$$ B_y = \frac{1}{c^2}\sum_j \frac{\dot{q}_j(t)}{k_j}A_je^{ik_jz}. $$ {eq:2.59}

If we had instead chosen to expand in terms of standing waves, the electric and magnetic fields corresponding to an $\hat{x}$-polarized field with $\mathbf{k}||\hat{\mathbf{z}}$ could be written

<!-- page 35 -->

$$ E_x(z,t) = \sum_j \underbrace{\sqrt{\frac{2\nu_j^2}{\epsilon_0 V}}}_{\mathcal{A}_j} q_j\sin k_jz $$ {eq:2.60}
$$ B_y(z,t) = \frac{1}{c^2}\sum_j \frac{\dot{q}_j}{k_j}\mathcal{A}_j\cos k_jz. $$ {eq:2.61}
Note that a slightly different proportionality factor $\mathcal{A}_j \neq A_j$ arises from the normalization of the mode functions.

The quantum mechanical Hamiltonian corresponds to the classical energy within the cavity,
$$ H = \frac{1}{2}\int dV\left(\epsilon_0E^2 + \frac{1}{\mu_0}B^2\right) $$ {eq:2.62}
$$ = \sum_j \frac{\nu_j^2q_j^2}{2} + \frac{\dot{q}_j^2}{2}. $$ {eq:2.63}
There are no cross product terms $q_j\dot{q}_j$ because we expanded in the appropriate eigenbasis; our normalization choice for $A_j$ yields a Hamiltonian analogous to that for a set of harmonic oscillators with position $q_j$, frequency $\nu_j$ and unit mass. Consequently the quantization procedure is identical to the familiar harmonic oscillator quantization, where we identify $q_j$ and $\dot{q}_j$ with non-commuting operators:
$$ q_j \to \hat{q}_j \quad \dot{q}_j \to \hat{p}_j $$ {eq:2.64}
$$ [\hat{q}_j, \hat{p}_{j'}] = i\hbar\delta_{j,j'}. $$ {eq:2.65}

We may also define creation and annihilation operators for excitations of each mode and polarization $j$,
$$ \hat{a}_j = \frac{1}{\sqrt{2\hbar\nu_j}}\left(\nu_j\hat{q}_j + i\hat{p}_j\right) \qquad \hat{q}_j = \sqrt{\frac{\hbar}{2\nu_j}}\left(\hat{a}_j + \hat{a}_j^\dagger\right) $$ {eq:2.66}
$$ \hat{a}_j^\dagger = \frac{1}{\sqrt{2\hbar\nu_j}}\left(\nu_j\hat{q}_j - i\hat{p}_j\right) \qquad \hat{p}_j = -i\sqrt{\frac{\hbar\nu_j}{2}}\left(\hat{a}_j - \hat{a}_j^\dagger\right). $$ {eq:2.67}
The Hamiltonian may thereby be written in a much simpler form
$$ \hat{H} = \frac{1}{2}\sum_j\left(\nu_j^2\hat{q}_j^2 + \hat{p}_j^2\right) $$ {eq:2.68}
$$ = \sum_j \hbar\nu_j\left(\hat{a}_j^\dagger\hat{a}_j + \frac{1}{2}\right). $$ {eq:2.69}

<!-- page 36 -->

In subsequent calculations, we will need to express other operators in terms of the creation and annihilation operators. For example, an electric field with polarization vector $\epsilon_\alpha$ may be expanded in terms of running-wave excitations^[This treatment glosses over some subtlety associated with having complex-valued amplitudes for running waves - these complications also appear in the standing wave treatment if you allow for cosine-like as well as sine-like modes. Careful accounting for the real and imaginary parts of the amplitudes (or the sine and cosine amplitudes) yields the given form, where you will note that $\hat{a}_j$ and $\hat{a}_j^\dagger$ multiply waves traveling in opposite directions.] as
$$ \hat{E_\alpha} = \epsilon_\alpha\sum_j \underbrace{A_j\sqrt{\frac{\hbar}{\nu_j}}}_{\bar{\mathcal{E}}_j}\frac{\left(\hat{a}_je^{i\mathbf{k}_j\cdot\mathbf{r}} + \hat{a}_j^\dagger e^{-i\mathbf{k}_j\cdot\mathbf{r}}\right)}{\sqrt{2}}. $$ {eq:2.70}

An important quantity has emerged from these calculations: $\bar{\mathcal{E}}_j$ is the electric field associated with a single photon of frequency $\nu_j$.
$$ \bar{\mathcal{E}}_j = \sqrt{\frac{\hbar\nu_j}{\epsilon_0 V}} $$ {eq:2.71}
is a figure of merit for any phenomena relying on atomic interactions with a vacuum field – for example, cavity quantum electrodynamics. In fact, $\bar{\mathcal{E}}_j$ may be estimated by equating the quantum mechanical energy of a photon $\hbar\nu_j$ with its classical energy $(1/2)\int dV(\epsilon_0E^2 + B^2/\mu_0) \approx \epsilon_0E^2V$. It is also convenient to divide the electric field into the positive and negative frequency components,
$$ \hat{E}_\alpha = \hat{\mathcal{E}}_\alpha + \hat{\mathcal{E}}_\alpha^\dagger $$ {eq:2.72}
$$ \hat{\mathcal{E}}_\alpha = \epsilon_\alpha\sum_j\sqrt{\frac{\hbar\nu_j}{2\epsilon_0V}}\hat{a}_je^{i\mathbf{k}_j\cdot\mathbf{r}}. $$ {eq:2.73}

## 2.3.2 Atomic interactions with the quantized field

The interaction between an atom and a quantized field appears much the same as the semiclassical interaction. Starting with the dipole Hamiltonian for a two-level atom, we replace $E$ by the corresponding operator, obtaining
$$ \hat{V}_{af} = -\hat{E}\cdot\hat{d} $$ {eq:2.74}
$$ = -\sum_\alpha(\hat{\mathcal{E}}_\alpha + \hat{\mathcal{E}}_\alpha^\dagger)\cdot(\mu_\alpha|2\rangle\langle 1| + \mu_\alpha^*|1\rangle\langle 2|). $$ {eq:2.75}

<!-- page 37 -->

As in the semiclassical analysis, the Hamiltonian contains four terms, which now have a clearer physical picture:

- $\hat{a}^\dagger|1\rangle\langle 2| \Rightarrow$ Atom decays from $|2\rangle$ to $|1\rangle$ and emits a photon
- $\hat{a}|2\rangle\langle 1| \Rightarrow$ Atom is excited from $|1\rangle$ to $|2\rangle$ and absorbs a photon
- $\hat{a}^\dagger|2\rangle\langle 1| \Rightarrow$ Atom is excited from $|1\rangle$ to $|2\rangle$ and emits a photon
- $\hat{a}|1\rangle\langle 2| \Rightarrow$ Atom decays from $|2\rangle$ to $|1\rangle$ and absorbs a photon

For photons near resonance with the atomic transition, the first two processes conserve energy; the second two processes do not conserve energy, and intuition suggests that they may be neglected. In fact, there is a direct correspondence between the RWA and energy conservation: the second two processes are precisely those fast-rotating terms we disregarded previously. To clarify the analogy, consider the time dependence of the annihilation operator $\dot{\hat{a}}_j = -i[\hat{a}_j, \hat{H}]/\hbar = -i\nu_j\hat{a}_j \Rightarrow \hat{a}(t) = \hat{a}(0)e^{-i\nu_jt}$. The annihilation operator is thus identified with the term $\Omega e^{-i\nu t}$ in the semiclassical analysis. Consequently, we may neglect the second two terms under the same conditions for which the RWA is valid.

The explicit form for the energy conserving terms of the atom-field Hamiltonian is
$$ \hat{V}_{af} = -\sum_{j,\alpha}\hbar g_{j,\alpha}|2\rangle\langle 1|\hat{a}_{j,\alpha} + \hbar g_{j,\alpha}^*|1\rangle\langle 2|\hat{a}_{j,\alpha}^\dagger. $$ {eq:2.76}
The coupling constant (given in terms of the atomic dipole moment $\mu_\alpha$ for electric field polarization $\alpha$) is
$$ g_{j,\alpha} = \frac{\mu_\alpha}{\hbar}\sqrt{\frac{\hbar\nu_j}{2\epsilon_0V}}e^{i\mathbf{k}_j\cdot\mathbf{r}}. $$ {eq:2.77}
and $g_{j,\alpha}$ is known as the “single-photon Rabi frequency” because it corresponds to the frequency at which an atom will spontaneously emit and reabsorb a single resonant photon of frequency $\nu_j$. One interesting scenario arises for photons confined to standing wave modes of a cavity. The single photon Rabi frequency then has spatial dependence $\sin\mathbf{k}_j\cdot\mathbf{r}$, so the atom-field coupling constant depends on the position of the atom in the cavity.

## 2.3.3 Remarks about quantization

The quantization procedure and resulting interactions detailed above may appear quite general, but in fact we made an important assumption at the very beginning which will limit their applicability: we considered only the situation with no sources, so we implicitly treated only transverse fields where $\nabla\cdot E = 0$. Longitudinal fields result from charge distributions $\rho$, with $E_L = -\nabla\phi$ and $\nabla^2\phi = 4\pi\rho$, and they do not satisfy a wave equation. For more information on this topic, see e.g. Cohen-Tannoudji *et al.*, ”Atom-Photon Interactions”.

<!-- page 38 -->

By considering only transverse fields, however, we have further avoided the issue of gauge. Since a transverse electric field $E_T$ satisfies the wave equation, we were able to directly quantize it without intermediate recourse to the vector potential $A$. Moreover, by starting with a dipole interaction Hamiltonian $\hat{E}\cdot\hat{d}$, we never needed $A$, and thus never encountered a choice of gauge. In fact, the procedure can be viewed as corresponding to an implicit choice of gauge $\phi = 0$, $\nabla\cdot A = 0$ in our initial decision to only treat transverse fields.

A more general approach may use the canonical Hamiltonian for a particle of mass $m$ and charge $q$ in an electromagnetic field. In this approach, the particle momentum $\hat{p}$ is replaced by the canonical momentum $\hat{p} - q\hat{A}/c$, so the Hamiltonian contains terms like $(\hat{p} - qA/c)^2/2m$. For an appropriate choice of gauge, the $\hat{p}\cdot\hat{A}$ terms imply the dipole interaction $\hat{E}\cdot\hat{d}$. More information on this topic can be found in, for example, Scully and Zubairy “Quantum Optics.”

## 2.3.4 Wigner-Weisskopf theory of spontaneous emission

Armed with the formalism for treating quantized radiation modes, we will now calculate the rate at which an atom spontaneously relaxes to a lower energy state while emitting a photon. In fact, we will find that this problem reduces to something we already know how to treat: the bound to continuum transition.

Suppose a two-level atom starts out in its excited state $|2\rangle$, and the radiation field with which it interacts starts out in the vacuum state $\hat{a}_j|n_j = 0\rangle = 0$. Note that the assumption of an initial vacuum state is not always valid, but it is a good approximation for optical frequencies. By interacting with the quantized electromagnetic field, the atom can make a transition to its ground state $|1\rangle$ while emitting a photon of frequency $\nu_k$, so the field ends up in state $|1_k\rangle$. We need only consider final states of the form $|1\rangle|1_k\rangle = |1, 1_k\rangle$, so we can project the full Hamiltonian
$$ \hat{H} = \hbar\omega|2\rangle\langle 2| + \sum_j\hbar\nu_j\left(\hat{a}_j^\dagger\hat{a}_j + \frac{1}{2}\right) - \sum_j\left(\hbar g_j|2\rangle\langle 1|\hat{a}_j + \hbar g_j^*|1\rangle\langle 2|\hat{a}_j^\dagger\right) $$ {eq:2.78}

<!-- page 39 -->

onto the relevant states $|2, 0\rangle$ and $|1, 1_k\rangle$ to obtain an effective Hamiltonian
$$ \begin{aligned} \hat{H} = {} & \hbar\omega|2,0\rangle\langle 2,0| + \textstyle\sum_k\hbar\nu_k|1,1_k\rangle\langle 1,1_k| \\ & - \textstyle\sum_k\left(\hbar g_k|2,0\rangle\langle 1,1_k| + \hbar g_k^*|1,1_k\rangle\langle 2,0|\right). \end{aligned} $$ {eq:2.79}
Mathematically, this effective Hamiltonian is obtained by taking the matrix elements of the Hamiltonian between the relevant states.

In the limit of closely spaced photon frequencies, the effective Hamiltonian corresponds precisely to a bound-to-continuum transition between the discrete state $|2, 0\rangle$ and the continuum of states $|1, 1_k\rangle$. We have already derived the results:

(1) There is a shift in the energy levels. In the case of atom-field interactions, it is known as the Lamb shift, and since it depends only on the coupling constants $g_j$, it is usually incorporated into a renormalization of the atomic transition frequency $\omega$. The Lamb shift will change, however, if the atom is put into a different environment, for example a cavity, where the density of states and the $g_j$ are different.

(2) The atom decays from the excited state $|2\rangle$ at a rate $\gamma$ given by
$$ \gamma = 2\pi\sum_{\mathbf{k},\alpha}|g_{\mathbf{k},\alpha}|^2\delta(\nu_k - \omega). $$ {eq:2.80}

To put this expression in more usable form, we convert the sum over $k$ to an integral,
$$ \gamma = \frac{V}{(2\pi)^2}\sum_\alpha\int k^2dk\int d\phi\int\sin\theta d\theta|g_{\mathbf{k},\alpha}|^2\delta(\nu_k - \omega). $$ {eq:2.81}

To evaluate the sum over polarizations, we will choose the $\hat{z}$ axis of our integration coordinates to lie along the same direction as $\hat{k}$. In this choice of coordinates, the only allowed polarization vectors lie in the $\hat{x} - \hat{y}$ plane. In particular,
$$ \sum_\alpha|g_{\mathbf{k},\alpha}|^2 = \frac{\nu_k}{2\hbar\epsilon_0V}\sum_{\alpha=x,y}|\mu\cdot\epsilon_\alpha|^2 $$ {eq:2.82}
$$ = \frac{\nu_k}{2\hbar\epsilon_0V}\left(|\mu\sin\theta\cos\phi|^2 + |\mu\sin\theta\sin\phi|^2.\right) $$ {eq:2.83}
Consequently,
$$ \sum_\alpha|g_{\mathbf{k},\alpha}|^2 = |g_k|^2\sin\theta^2, $$ {eq:2.84}

<!-- page 40 -->

where
$$ g_k = \frac{\mu}{\hbar}\sqrt{\frac{\hbar\nu_k}{2\epsilon_0V}}. $$ {eq:2.85}
The angular integration thus yields
$$ \int d\phi\int d\theta\sin\theta\sum_\alpha|g_{\mathbf{k},\alpha}|^2 = 2\pi|g_k|^2\int d\theta\sin^3\theta $$ {eq:2.86}
$$ = \frac{8\pi}{3}|g_k|^2. $$ {eq:2.87}
Substituting back into Eq. (2.81),
$$ \gamma = \frac{2V}{3\pi}\int_0^\infty k^2dk|g_k|^2\delta(\nu_k - \omega) = \frac{2\omega^2V}{3\pi c^3}|g_{k=\omega/c}|^2. $$ {eq:2.88}
Finally, we write the single photon Rabi frequency using Eq. (2.85) to obtain the usual expression for the spontaneous emission rate (also known as the Einstein A coefficient):
$$ \gamma = \frac{\omega^3|\mu|^2}{3\pi\epsilon_0\hbar c^3}. $$ {eq:2.89}
Note that the spontaneous emission rate is proportional to the square of the atomic dipole moment and the cube of the atomic transition frequency. Consequently transitions with big dipole moments and large energy splittings will decay most quickly.

The dynamics which result from the spontaneous emission process are very similar to those discussed for bound to continuum transitions. Unlike the previous situation, however, no transformation to the rotating frame is needed. Since the radiation field and atom are treated on equal footing (with photon energy incorporated into the Hamiltonian), the initial and final states are already near resonance. The transformation to the rotating frame is an artifact of treating the system classically.

We can also explicitly calculate the dynamics: if the system state is given by $|\psi\rangle = c_2|2,0\rangle + \sum_{k,\alpha}c_{k,\alpha}|1, 1_{k,\alpha}\rangle$, the coefficients obey the equations of motion
$$ \dot{c}_2 = -(\gamma/2)c_2 - i\omega c_2 $$ {eq:2.90}
$$ \dot{c}_{k,\alpha} = -i\nu_kc_{k,\alpha} + ig_{k,\alpha}c_2(t), $$ {eq:2.91}
where $\omega$ and $\nu_k$ appear in equivalent positions for the two equations. As we found before, the amplitudes to be in a photon state with polarization $\alpha$ and wavevector $k$ approach
$$ \lim\limits_{t\to\infty}c_{k,\alpha} = \frac{g_{k,\alpha}}{\nu_k - \omega + i\gamma/2}e^{-i\nu_kt} $$ {eq:2.92}

<!-- page 41 -->

in the long-time limit. Now consider an atom which starts out in a superposition of states, $|\psi_0\rangle = c_2^0|2,0\rangle + c_1^0|1,0\rangle$. Since $|1,0\rangle$ does not interact with the field, at time t the system is in state $|\psi(t)\rangle = e^{-\gamma t/2}e^{-i\omega t}c_2^0|2,0\rangle + c_1^0|1,0\rangle + \sum_jc_j(t)|1,1_j\rangle$. In contrast to classical Rabi oscillations, the atomic dipole moment decays in time:
$$ \langle\psi|\hat{d}|\psi\rangle = \mu\langle\psi|1\rangle\langle 2|\psi\rangle + \mu^*\langle\psi|2\rangle\langle 1|\psi\rangle $$ {eq:2.93}
$$ = e^{-\gamma t/2}\left(c_2^0e^{-i\omega t}(c_1^0)^*\mu + c_1^0(c_2^0e^{-i\omega t})^*\mu^*\right) $$ {eq:2.94}
Note that the single photon coefficients $c_j(t)$ do not contribute because the single photon state is orthogonal to the radiation vacuum state. Consequently the system undergoes transitions between atomic levels without an accompanying buildup of atomic coherences.

We can also describe the state of the radiation field generated by spontaneous emission of an atom. In the long time limit, the system state is
$$ |\psi\rangle = |1\rangle\otimes\sum_{k,\alpha}\frac{g_{k,\alpha}}{\nu_k - \omega + i\gamma/2}e^{-i\nu_kt}|1_{k,\alpha}\rangle. $$ {eq:2.95}
We would like to understand the physical photon wavepacket this state describes. Naively, one might try calculating the electric field expectation, but in fact it vanishes
$$ \langle\psi|\hat{E}_\alpha|\psi\rangle = 0 $$ {eq:2.96}
The single photon field $|\psi\rangle$ is not a classical field, so it need not be an eigenstate of the electric field operator. In fancier language, the single photon field does not have the “first order coherence” associated with laser light. Nevertheless, higher order operators such as $\langle\psi|\hat{\mathcal{E}}_\alpha^\dagger\hat{\mathcal{E}}_\alpha|\psi\rangle$ can be nonzero. In particular, when we introduce a complete set of states into the expectation value we find that only the $n = 0$ states contribute (since the positive frequency component $\hat{\mathcal{E}}_\alpha \propto \hat{a}$):
$$ \langle\psi|\hat{\mathcal{E}}_\alpha^\dagger\hat{\mathcal{E}}_\alpha|\psi\rangle = \sum_n\langle\psi|\hat{\mathcal{E}}_\alpha^\dagger|n\rangle\langle n|\hat{\mathcal{E}}_\alpha|\psi\rangle $$ {eq:2.97}
$$ = \langle\psi|\hat{\mathcal{E}}_\alpha^\dagger|0\rangle\langle 0|\hat{\mathcal{E}}_\alpha|\psi\rangle. $$ {eq:2.98}

We can thus identify^[For simplicity, here we consider photons propagating in a one-dimensional system to avoid more complicated expressions involving the vector nature of $\mathbf{k}$ and polarization vectors. The important point is that there is a pole in the complex lower half-plane in Eq. (2.99). To evaluate this integral, we close the contour in the lower half-plane for $t > z/c$ and in the upper half-plane for $t < z/c$, which gives us the step function in the following line. For a more rigorous derivation, see *Scully and Zubairy*, pp. 209-210.]
$$ \langle 0|\hat{\mathcal{E}}_\alpha|\psi\rangle = \sum_k\bar{\mathcal{E}}_k\frac{g_{k,\alpha}}{\nu_k - \omega + i\gamma/2}e^{i(kz - \nu_kt)} $$ {eq:2.99}
$$ \propto \frac{e^{-\gamma(t - z/c)/2}}{z}\Theta(t - z/c) $$ {eq:2.100}

<!-- page 42 -->

with a kind of “wavefunction” for the photon describing a wavepacket outgoing from the initial position of the atom at speed c.

<!-- notes
- 2.3.1 Eq. (2.55) prints $\partial^2 t$ in the denominator where $\partial t^2$ is meant; kept as printed.
- 2.3.1 Eq. (2.58) prints $\nu_i^2$ under the root where $\nu_j^2$ is meant; kept as printed.
- 2.3.1 Eq. (2.70) prints the hat over $E_\alpha$ whole ($\hat{E_\alpha}$), unlike Eq. (2.72); kept.
- 2.3 opening "the atom interaction with the vacuum modes": the book's phrase, kept.
- 2.3.2 the four-term table is set as a two-column display; transcribed as a list, each row "operator ⇒ description".
- 2.3.2 "is $\ldots e^{i\mathbf{k}_j\cdot\mathbf{r}}.$ and $g_{j,\alpha}$": the period ending Eq. (2.77) before "and" is the book's, kept.
- 2.3.3 ”Atom-Photon Interactions”: the book's wrong-way opening quotation mark, kept. Longitudinal-field relation $\nabla^2\phi = 4\pi\rho$ is Gaussian (sign and units) in a section declared S.I.; kept.
- 2.3.4 Eq. (2.81) prints $(2\pi)^2$ where $(2\pi)^3$ is meant for a three-dimensional mode sum; kept as printed.
- 2.3.4 Eq. (2.83) prints the period inside the closing parenthesis; Eq. (2.84) prints $\sin\theta^2$ for $\sin^2\theta$; kept.
- 2.3.4 Eq. (2.79) is one number over two rows; set as one aligned display.
- text-layer.md corrected by hand in three places: the bold "k" of "k-vector" and the bold subscripted "kj" on page 34 were read as words, and "et al." on page 37 sat inside a maths span while "Atom-/Photon" broke across lines; now "$k$-vector", "$kj$", and "et al., ”Atom-Photon".
- No figures in this section. Page 42 holds only the final sentence and footnote 4.
-->

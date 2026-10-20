# 2.1 Atomic Transitions

<!-- page 20 - text-layer.md corrected: "far offresonant" (twice) to "far off resonant" as the page prints it; the stray "$√$" line from the sqrt(2) that split "antisym-/metric" removed so the hyphenated word joins.
-->

In the introductory lecture we have reviewed the somewhat complex level structure of hydrogenic atoms. Selection rules and energy conservation allow us to pick a subset of transitions, so that only a few energy levels are involved in the relevant dynamics. In this lecture we will focus in detail on the simplest atom-field system, namely that in which only two atomic energy levels interact with an applied laser field.

## 2.1.1 The Two-Level Atom

It is valid to approximate an atom as a two-level system when the external field is weak and nearly on resonance with a single atomic transition. In this case only the ground state and the near-resonant excited level will have appreciable probability of occupation. We will label these states $|1\rangle$ and $|2\rangle$ and designate their energy differency by $\hbar\omega$.

We consider the evolution of this system when illuminated by a nearly-monochromatic classical electromagnetic field
$$ \mathbf{E}(\mathbf{r}, t) = \mathcal{E}(\mathbf{r}, t)e^{-i(\nu t - \mathbf{k}\cdot\mathbf{r})} + \mathcal{E}(\mathbf{r}, t)^* e^{i(\nu t - \mathbf{k}\cdot\mathbf{r})}, $$ {eq:2.1}
where the slowly-varying envelope $\mathcal{E}(\mathbf{r}, t)$ varies on a timescale much slower than the optical frequency $\nu \approx \omega$ and a length scale much larger than the optical wavelength $2\pi/|\mathbf{k}|$. This electric field interacts with the atomic dipole, given by an operator $\hat{d} = e\hat{r}$, which may be conveniently represented in terms of the atomic eigenstates and the dipole matrix elements $\mu_{a,b} = \langle a|\hat{d}|b\rangle$:
$$ \begin{aligned} \hat{d} &= \sum_{n,n'} |n'\rangle\langle n|\mu_{n',n} \\ &= |1\rangle\langle 2|\mu_{1,2} + |2\rangle\langle 1|\mu_{2,1}. \end{aligned} $$
In the latter expression, we have truncated the sum to include only the two relevant levels, and have assumed that the atomic eigenstates $|1\rangle$ and $|2\rangle$ do not have an associated permanent electric dipole, i.e. $\langle 1|\hat{d}|1\rangle = \langle 2|\hat{d}|2\rangle = 0$. This is the case for an isolated atomic system which retains its rotational symmetry.

<!-- page 21 - text-layer.md corrected: "far offresonant" (twice) to "far off resonant" as the page prints it; the stray "$√$" line from the sqrt(2) that split "antisym-/metric" removed so the hyphenated word joins.
-->

> FIGURE {fig:2.1} src=../../media/ch02/fig-2-1.png
> caption: The structure of the two-level system. The applied classical field has angular frequency $\nu$, while the atomic levels are separated by energy $\hbar\omega$.

The dynamics of the system are governed by the full Hamiltonian for the two level atom and classical field:
$$ \hat{H} = \hbar\omega|2\rangle\langle 2| - (|1\rangle\langle 2|\mu_{1,2} + |2\rangle\langle 1|\mu_{2,1}) \cdot \left(\mathcal{E}e^{-i\nu t} + \mathcal{E}^* e^{i\nu t}.\right). $$ {eq:2.2}
To obtain the time dependent atomic state, we express the wavefunction in the basis of the eigenstates of the free Hamiltonian
$$ |\psi\rangle = c_1(t)|1\rangle + c_2(t)|2\rangle. $$ {eq:2.3}
Note that the atomic eigenstates are time independent, so the full time dependence of $|\psi\rangle$ is encapsulated by the probability amplitudes $c_1(t), c_2(t)$.

<!-- page 22 - text-layer.md corrected: "far offresonant" (twice) to "far off resonant" as the page prints it; the stray "$√$" line from the sqrt(2) that split "antisym-/metric" removed so the hyphenated word joins.
-->

From the Schroedinger equation
$$ i\hbar\frac{d}{dt}|\psi\rangle = \hat{H}|\psi\rangle, $$ {eq:2.4}
we obtain coupled differential equations for the probability amplitudes:
$$ \begin{aligned} \langle 2|i\hbar\frac{d}{dt}|\psi\rangle = \langle 2|\hat{H}|\psi\rangle \quad &\Rightarrow \quad i\hbar\dot{c}_2(t) = \hbar\omega\, c_2(t) - \left(\mathcal{E}e^{-i\nu t} + \mathcal{E}^* e^{i\nu t}\right)\mu_{21}c_1(t) \\ \langle 1|i\hbar\frac{d}{dt}|\psi\rangle = \langle 1|\hat{H}|\psi\rangle \quad &\Rightarrow \quad i\hbar\dot{c}_1(t) = -\left(\mathcal{E}e^{-i\nu t} + \mathcal{E}^* e^{i\nu t}\right)\mu_{12}c_2(t). \end{aligned} $$

These probability amplitudes $c_1(t)$ and $c_2(t)$ have a time dependent relative phase which evolves quickly in time. By transforming to an appropriate rotating frame, we can eliminate the explicitly time dependent terms in the equations of motion. In particular, we will rewrite the above equations by defining a slowly varying amplitude $\tilde{c}_2(t)$,
$$ c_2(t) = \tilde{c}_2(t)e^{-i\nu t}, $$ {eq:2.5}
so that
$$ i\hbar\dot{\tilde{c}}_2(t) = -\hbar\delta\tilde{c}_2(t) - \left(\mathcal{E} + \mathcal{E}^* e^{2i\nu t}\right)\mu c_1(t) $$ {eq:2.6}
$$ i\hbar\dot{c}_1(t) = -\left(\mathcal{E}e^{-2i\nu t} + \mathcal{E}^*\right)\mu^*\tilde{c}_2(t), $$ {eq:2.7}
where $\mu = \mu_{21}$ and $\delta = \nu - \omega$. These equations can be solved numerically, but are quite difficult to treat analytically. Nevertheless, these equations can be further simplified when we are interested in dynamics on timescales long compared to the optical frequency $\nu$. This is nearly always true for optical fields, where $\nu \sim \text{THz}$; in other situations one must be more careful.

The dynamics we are concerned with occur at frequencies which scale with the Rabi frequency,
$$ \Omega = \mathcal{E}\mu/\hbar, $$ {eq:2.8}
and it makes intuitive sense that the terms which oscillate rapidly would on average have little effect on the atomic populations. More quantitatively, we may make the rotating wave approximation (RWA) and neglect the terms $\propto e^{\pm 2i\nu t}$ under the following circumstances:
$$ \begin{aligned} &\text{(a) The field is near resonance} : \delta \ll \nu, \omega \\ &\text{(b) The field is weak} : \Omega \ll \nu \end{aligned} $$ {eq:2.9}
As we remarked earlier these requirements can be often satisfied for realistic experimental conditions but certainly not always.

<!-- page 23 - text-layer.md corrected: "far offresonant" (twice) to "far off resonant" as the page prints it; the stray "$√$" line from the sqrt(2) that split "antisym-/metric" removed so the hyphenated word joins.
-->

In the RWA, the slowly varying amplitudes then satisfy
$$ \dot{\tilde{c}}_2(t) = i\delta\tilde{c}_2(t) + i\Omega c_1(t) $$ {eq:2.10}
$$ \dot{c}_1(t) = i\Omega^*\tilde{c}_2(t). $$ {eq:2.11}
These equations may be solved exactly, but much insight can be obtained by examining the solutions for two special cases: fields precisely on resonance, and fields far detuned from resonance.

### Resonant field $\delta = 0$

The equations of motion take an especially simple form for $\delta = 0$:
$$ \ddot{c}_1(t) = -|\Omega|^2 c_1(t), \quad \ddot{\tilde{c}}_2(t) = -|\Omega|^2\tilde{c}_2(t), $$ {eq:2.12}
so the amplitudes evolve as sines and cosines. For an atom initially in the $|1\rangle$ state, the population oscillates between the two levels at frequency $\Omega$, with
$$ c_1(t) = \cos|\Omega|t $$ {eq:2.13}
$$ \tilde{c}_2(t) = i\frac{\Omega}{|\Omega|}\sin|\Omega|t. $$ {eq:2.14}
Physically, the absolute values of the amplitudes correspond to the populations of the two levels $p_{1,2} = |c_{1,2}|^2$, which oscillate out of phase. These “Rabi oscillations” correspond to the periodic absorption and stimulated emission of radiation.

Not all quantities of interest vary as slowly as the atomic populations. For example, the instantaneous polarization of the atom may be obtained from the expectation of the dipole moment operator,
$$ \langle\hat{d}\rangle = c_1(t)^* c_2(t)\mu^* + c_1(t)c_2(t)^*\mu. $$ {eq:2.15}
The polarization varies both on the fast timescale $\nu$ at which $c_2(t)$ evolves, and the slower timescale $\Omega$ on which the populations evolve. Note also that there is a phase shift between $\Omega$ and $\langle\hat{d}\rangle$; this will become important when we study the propagation of light in an atomic medium.

The system also has a simple solution even when the applied field amplitude $|\Omega(t)|$ varies with time, In this case, the amplitudes depend on the total area under the applied field. This can be seen by renormalizing the time $d\tau = |\Omega(t)|dt$ or $\tau = \int|\Omega|dt$:
$$ \frac{d}{dt}\tilde{c}_2(t) = i\Omega c_1(t) \quad \rightarrow \quad \frac{d}{d\tau}\tilde{c}_2(\tau) = i(\Omega/|\Omega|)c_1(\tau) $$ {eq:2.16}
$$ \frac{d}{dt}c_1(t) = i\Omega^*\tilde{c}_2(t) \quad \rightarrow \quad \frac{d}{d\tau}c_1(\tau) = i(\Omega^*/|\Omega|)\tilde{c}_2(\tau). $$ {eq:2.17}

<!-- page 24 - text-layer.md corrected: "far offresonant" (twice) to "far off resonant" as the page prints it; the stray "$√$" line from the sqrt(2) that split "antisym-/metric" removed so the hyphenated word joins.
-->

Provided that the pulse is not chirped (so that $\Omega/|\Omega|$ is constant) these equations can be easily solved to find
$$ c_1(t) = \cos\left(\int|\Omega|dt\right) $$ {eq:2.18}
$$ \tilde{c}_2(t) = i\frac{\Omega}{|\Omega|}\sin\left(\int|\Omega|dt\right). $$ {eq:2.19}

### Far-detuned field $\nu \gg \delta \gg \Omega$: adiabatic elimination

The equations of motion may be solved exactly for arbitrary detuning (provided that the RWA is still valid, $\nu \gg \delta$). Nevertheless, it is useful to develop approximation techniques which will prove indispensable as we consider more and more complex systems. Here we will introduce a technique known as “adiabatic elimination”.

Our physical intuition tells us that a field very far from resonance will hardly ever cause transitions to the excited state, i.e. $|c_1(t)| \approx 1, |c_2(t)| \ll 1$. To lowest order, we might consider setting $c_1(t) = 1$, so that
$$ \dot{\tilde{c}}_2 = i\delta\tilde{c}_2 + i\Omega \quad \Rightarrow \tilde{c}_2(t) = \int_0^t i\Omega e^{i\delta(t-t')}dt' $$ {eq:2.20}
$$ = -\frac{\Omega}{\delta}\left(1 - e^{i\delta t}\right). $$ {eq:2.21}
We will see that this is not the best approximation we can make in this situation, but it does give us a sense of the structure of $c_2(t)$. In particular, one term is constant while the other oscillates very rapidly with the (large) detuning $\delta$. Over timescales $t > 1/\delta$ the effect of the rapidly oscillating term should average to zero, so to understand the relevant, slowly evolving dynamics we need only consider the constant term.

The above exercise motivates the concept of adiabatic elimination, in which we disregard the time-varying portion of the amplitude $c_2(t)$ to find the relevant slowly-varying dynamics. More precisely, we are trying to solve the equation $\dot{\tilde{c}}_2 = i\delta\tilde{c}_2 + i\Omega c_1$ for $\tilde{c}_2$ in terms of $c_1$. Since $i\delta\tilde{c}_2$ is very large, the time-varying part of $\tilde{c}_2$ will be dominated by fast oscillations which average to zero, and we can set $\dot{\tilde{c}}_2 \approx 0$. This yields a solution $\tilde{c}_2$ which adiabatically follows the amplitude $c_1$ according to $\tilde{c}_2 = -(\Omega/\delta)c_1$. After substituting the expression for $c_2$ into Eq. (2.10), we find $\dot{c_1} = -i(|\Omega|^2/\delta)c_1$,^[The corrections to this adiabatic following can be obtained by substituting this solution into (2.10), resulting in $\tilde{c}_2 = -(\Omega/\delta)c_1 + (i/\delta)d/dt((\Omega/\delta)c_1) + ....$ This procedure is sometimes called an adiabatic expansion.] so
$$ c_1(t) \approx c_1(0)e^{-i|\Omega|^2 t/\delta}. $$ {eq:2.22}

<!-- page 25 - text-layer.md corrected: "far offresonant" (twice) to "far off resonant" as the page prints it; the stray "$√$" line from the sqrt(2) that split "antisym-/metric" removed so the hyphenated word joins.
-->

The lower state amplitude evolves as if the state energy were shifted by $|\Omega|^2/\delta$, an effect known as the AC Stark shift or the “light shift”. [Note that because we assumed $c_2(t) \approx 0$, we cannot obtain the upper population energy shift from this calculation; to do so requires a similar calculation starting from initial conditions $c_2(0) = 1, c_1(0) = 0$.]

The far off resonant field induces a correction to the energy (and the eigenstates) which scales as $|\Omega|^2/\delta^2$. Consequently our perturbative treatment can only be valid when $\Omega \ll \delta$. This observation offers insight into the second requirement for the validity of the RWA, because the neglected terms act like applied fields detuned $\pm 2\nu$ from the atomic transition frequency. Inclusion of these terms would lead to corrections scaling as $|\Omega|^2/(2\nu)^2$, so to ignore them we require $|\Omega| \ll \nu$.

### Dressed States

An elegant interpretation of the quantum dynamics just described is possible in the basis of the so-called “dressed” atomic states. Such states are important especially in the situations involving the interaction of light with complex systems, where simple solutions are no longer available.

The equations of motion for the slowly varying amplitudes (2.10,2.11) can be viewed as resulting from the effective Hamiltonian
$$ \tilde{H} = -\hbar\delta|\tilde{2}\rangle\langle\tilde{2}| - \hbar(\Omega|\tilde{2}\rangle\langle 1| + \Omega^*|1\rangle\langle\tilde{2}|), $$ {eq:2.23}
which has no explicit time dependence. This corresponds to the original Hamiltonian after making the RWA, written in the rotating frame. This Hamiltonian can be easily diagonalized. The eigenvectors $|\pm\rangle$ are mixtures of the bare atomic states $|1, 2\rangle$, and are known as dressed states; the corresponding eigenenergies are
$$ \epsilon_\pm = \hbar\left(-\frac{\delta}{2} \mp \sqrt{(\frac{\delta}{2})^2 + |\Omega|^2}\right). $$ {eq:2.24}

In a resonant field $\delta = 0$, the dressed states are symmetric and antisymmetric combinations of the bare atomic states, $|\pm\rangle = (|\tilde{1}\rangle \pm |\tilde{2}\rangle)/\sqrt{2}$, where $|\tilde{1}\rangle = (|\Omega|/\Omega)\,|1\rangle$. Their energy separation is twice the Rabi frequency, $2|\Omega|$. The quantum dynamics on resonance can be easily understood in terms of dressed state picture. Specifically, the state $|1\rangle$ is a symmetric superposition of the split states $|\pm\rangle$. As the system evolves in time, the phases of $|\pm\rangle$ rotate in opposing directions, and after a time $t = \pi/2\Omega$, the system is in the antisymmetric superposition of states $|\pm\rangle$ which corresponds exactly to the bare state $|\tilde{2}\rangle$.

<!-- page 26 - text-layer.md corrected: "far offresonant" (twice) to "far off resonant" as the page prints it; the stray "$√$" line from the sqrt(2) that split "antisym-/metric" removed so the hyphenated word joins.
-->

A far off resonant field $\delta \gg \Omega$ leads to dressed states which bear a strong resemblance to the original atomic states, having only a small admixture of the other state. The energies and eigenstates
$$ \epsilon_- = \frac{|\Omega|^2}{\delta} \qquad |-\rangle = |1\rangle - \frac{\Omega}{\delta}|\tilde{2}\rangle $$ {eq:2.25}
$$ \epsilon_+ = -\delta - \frac{|\Omega|^2}{\delta} \qquad |+\rangle = |\tilde{2}\rangle + \frac{\Omega^*}{\delta}|1\rangle $$ {eq:2.26}
are also close to the bare energies and eigenstates.

> FIGURE {fig:2.2} src=../../media/ch02/fig-2-2.png
> caption: (a) Pictorial representation of moving to the rotating frame. In the absence of an applied field, the two atomic levels are split by atomic transition frequency $\omega$. Upon application of a classical field with frequency $\nu$, we move to a frame rotating at frequency $\nu$, in which the state $|\tilde{2}\rangle$ has energy $-\delta = \omega - \nu$. In the rotating wave approximation, these states $|1\rangle$ and $|\tilde{2}\rangle$ are coupled by a static mixing term $\Omega$. (b) The dressed state energy levels (red) are shown as a function of detuning. For reference, the bare state energy levels (dashed, blue) are also shown. The bare states are the eigenstates of the system when no applied field is present ($\Omega = 0$).

### The Bloch sphere picture

We have thus far represented our two-level atom in terms of two complex numbers, $c_1$ and $c_2$, satisfying $|c_1|^2 + |c_2|^2 = 1$. Alternately, the state of the two-level system can be represented as a vector on the unit sphere (see Figure 2.3). A vector pointing in the positive $\hat{z}$ direction is identified with the state $|2\rangle$, while a vector pointing in the negative $\hat{z}$ direction represents the state $|1\rangle$. Vectors in the $\hat{x} - \hat{y}$ plane are superposition states $\left(|1\rangle + e^{i\phi}|2\rangle\right)/\sqrt{2}$. In the Bloch sphere picture, the rotating frame has a particularly nice interpretation: we view the vector from a reference frame which is rotating around the $\hat{z}$ axis at the optical frequency $\nu$.

<!-- page 27 - text-layer.md corrected: "far offresonant" (twice) to "far off resonant" as the page prints it; the stray "$√$" line from the sqrt(2) that split "antisym-/metric" removed so the hyphenated word joins.
-->

> FIGURE {fig:2.3} src=../../media/ch02/fig-2-3.png
> caption: (a) An arbitrary state of a two-level system can be represented as a vector on the unit sphere. Here we are working in the rotating frame. (b) When no external fields are applied, the system precesses at the energy difference (in the rotating frame) between the two states. c) In the presence of a resonant applied field, the state precesses around an axis in the x-y plane whose azimuthal angle is determined by the phase of the applied field.

Interpreting this vector as a magnetic dipole, the dynamics of the system can be seen as resulting from precession around effective magnetic fields. In particular, suppose that $\Omega = 0$. In the bare frame, the vector precesses around the $\hat{z}$ axis at frequency $\omega$. Identifying a “spin” $\{c_1, c_2\}$ with associated spin operators
$$ \hat{S}_z = |2\rangle\langle 2| - |1\rangle\langle 1| $$ {eq:2.27}
$$ \hat{S}_x = |1\rangle\langle 2| + |2\rangle\langle 1| $$ {eq:2.28}
$$ \hat{S}_y = -i|2\rangle\langle 1| + i|1\rangle\langle 2|, $$ {eq:2.29}
we can rewrite the Hamiltonian as an effective magnetic field:
$$ \hat{H} = \hbar\omega|2\rangle\langle 2| \rightarrow \frac{\hbar\omega}{2}\left(1 + \hat{S}_z\right). $$ {eq:2.30}
Moving to the rotating frame,
$$ \hat{H} = -\hbar\delta|\tilde{2}\rangle\langle\tilde{2}| \rightarrow -\frac{\hbar\delta}{2}\left(\hat{S}_z + 1\right). $$ {eq:2.31}

<!-- page 28 - text-layer.md corrected: "far offresonant" (twice) to "far off resonant" as the page prints it; the stray "$√$" line from the sqrt(2) that split "antisym-/metric" removed so the hyphenated word joins.
-->

We can also understand an applied field $\Omega$ as an effective magnetic field. In particular, the effective Hamiltonian of Eq. (2.23) becomes
$$ \hat{H} = -\frac{\hbar\delta}{2}\left(\hat{S}_z + 1\right) - \hbar\left(\mathrm{Re}\,\Omega\right)\hat{\tilde{S}}_x - \hbar\left(\mathrm{Im}\,\Omega^*\right)\hat{\tilde{S}}_y, $$ {eq:2.32}
where $\hat{\tilde{S}}_{x,y}$ is the $\hat{x}, \hat{y}$ component of the spin in the rotating frame. The constant term of Eq. (2.32) can be ignored since it contributes only an overall phase to the system. Working then in the Heisenberg picture, it is a useful exercise to show that the Hamiltonian of Eq. (2.32) leads to the equations of motion
$$ \frac{d}{dt}\tilde{\mathbf{S}} = \boldsymbol{\Omega}(t) \times \tilde{\mathbf{S}}, $$ {eq:2.33}
where the vector $\tilde{\mathbf{S}} = \left\{\tilde{S}_x, \tilde{S}_y, \tilde{S}_z\right\}$ and $\boldsymbol{\Omega}(t) = \{-2\,\mathrm{Re}\,\Omega(t), -2\,\mathrm{Im}\,\Omega^*(t), -\delta\}$. Eq. (2.33) resembles the equation of motion of a magnetic dipole in a magnetic field, and leads to a nice visualization of the dynamics of a two-level system, as illustrated in Fig. 2.3. This Bloch picture remains convenient even when processes like spontaneous emission and dephasing are included in the two-level dynamics.

### Generalization to Multistate Systems

The techniques for treating the two level atom are also applicable to multistate systems where each atomic transition has at most one slowly varying field near resonance. To illustrate how to extend the two-level calculation to multiple levels, we consider an atom with a single ground state $|1\rangle$ and many excited states $|k\rangle$. Each excited state is coupled to $|1\rangle$ by a field with amplitude $\mathcal{E}_k$ and frequency $\nu_k$, while the dipole matrix element for the $k^{th}$ transition is $\hat{d}_{k,1} = \mu_k|k\rangle\langle 1| + \mu_k^*|1\rangle\langle k|$. The interaction between the dipole and field will have four terms, which we truncate to two by applying the RWA to obtain the Hamiltonian
$$ \hat{H}_{RWA} = \sum_k \hbar\omega_k|k\rangle\langle k| - \hbar\sum_k\left(\Omega_k e^{-i\nu_k t}|k\rangle\langle 1| + \Omega_k^* e^{i\nu_k t}|1\rangle\langle k|\right) $$ {eq:2.34}
where $\omega_k$ is the energy of the $k^{th}$ transition and $\Omega_k = \mathcal{E}_k\mu_k/\hbar$.

Although each excited state has a different fast phase evolution, we may nonetheless remove the explicit time dependence from the Hamiltonian by making a unitary transformation represented by the operator
$$ \hat{U} = e^{-i\sum_k \nu_k t|k\rangle\langle k|}. $$ {eq:2.35}

<!-- page 29 - text-layer.md corrected: "far offresonant" (twice) to "far off resonant" as the page prints it; the stray "$√$" line from the sqrt(2) that split "antisym-/metric" removed so the hyphenated word joins.
-->

The state vector $|\psi\rangle$ is expressed in a new basis defined by $\hat{U}|\tilde{\psi}\rangle = |\psi\rangle$. Because $\hat{U}(t)$ depends on time, it will introduce new terms in the Hamiltonian when we move to this new basis. Replacing $|\psi\rangle$ by $\hat{U}|\tilde{\psi}\rangle$ in the Schroedinger equation and expanding the time derivative yields
$$ i\hbar\frac{d}{dt}\left(\hat{U}|\tilde{\psi}\rangle\right) = i\hbar\left(\hat{U}\frac{d}{dt}|\tilde{\psi}\rangle + \left(\frac{dU}{dt}\right)|\tilde{\psi}\rangle\right) = \hat{H}\hat{U}|\tilde{\psi}\rangle. $$ {eq:2.36}
This expression may be written in the familiar form
$$ i\hbar\frac{d}{dt}|\tilde{\psi}\rangle) = \tilde{H}|\tilde{\psi}\rangle $$ {eq:2.37}
by defining the Hamiltonian in the rotating frame,
$$ \tilde{H} = \hat{U}^{-1}\hat{H}\hat{U} - i\hbar\hat{U}^{-1}\frac{dU}{dt}. $$ {eq:2.38}
For the system under consideration, the second term is just $\sum_k \hbar\nu_k|\tilde{k}\rangle\langle\tilde{k}|$, so the new Hamiltonian may be easily found:
$$ \tilde{H} = \sum_k \hbar(\omega_k - \nu_k)|\tilde{k}\rangle\langle\tilde{k}| - \hbar\sum_k\left(\Omega_k|\tilde{k}\rangle\langle\tilde{1}| + \Omega_k^*|\tilde{1}\rangle\langle\tilde{k}|\right). $$ {eq:2.39}

By applying RWA and moving to the frame where each atomic state rotates at the associated optical frequency, we have found a basis where the Hamiltonian is time independent. The same approach will work for multilevel systems with many ground states and many excited states, so long as no atomic transition is linked by more than one applied field. In subsequent calculations, we will usually work in the rotating frame, so for notational convenience the tilde may be dropped.

These techniques break down when two fields are near resonance with a single transition. If we transform to the frame rotating with the frequency of the first field, the Hamiltonian will retain a time dependence associated with the second field. For example, suppose the two level system considered earlier now experiences two applied fields with Rabi frequencies $\Omega_a$ and $\Omega_b$ and optical frequencies $\nu_a$ and $\nu_b$. The equations of motion (in the RWA and rotating frame) now include a term which oscillates with the beatnote frequency $\Delta = \nu_a - \nu_b$:
$$ i\hbar\dot{\tilde{c}}_2(t) = -\hbar\delta\tilde{c}_2(t) - \hbar\left(\Omega_a + \Omega_b e^{i\Delta t}\right)c_1(t) $$ {eq:2.40}
$$ i\hbar\dot{c}_1(t) = -\hbar\left(\Omega_a^* + \Omega_b^* e^{-i\Delta t}\right)\tilde{c}_2(t). $$ {eq:2.41}

<!-- page 30 - text-layer.md corrected: "far offresonant" (twice) to "far off resonant" as the page prints it; the stray "$√$" line from the sqrt(2) that split "antisym-/metric" removed so the hyphenated word joins.
-->

To solve these equations requires expanding the probability amplitudes in a Fourier series $c_i = \sum_n c_i^{(n)}e^{in\Delta t}$, also known as the “Floquet basis”. The different Fourier components are all coupled to each other, so the probability amplitudes evolve with the beatnote and all of its higher harmonics. This simple example illustrates a mechanism underlying nonlinear optics.

<!-- notes
- 2.1.1 "their energy differency": the book's word, kept.
- Resonant field: "varies with time, In this case": the comma before a capital is the book's, kept.
- Dressed States: "in terms of dressed state picture" (no "the"): the book's grammar, kept.
- Eq. (2.2): the stray period inside the bracket, "e^{i\nu t}.)", is printed so and kept.
- Eq. (2.37): the unmatched closing parenthesis in "|\tilde{\psi}\rangle)" is printed so and kept.
- Eqs. (2.36), (2.38): dU/dt is printed without the hat on U, kept.
- Eqs. (2.25), (2.26): the energies are printed without the factor \hbar that (2.24) carries, kept.
- Adiabatic elimination: "substituting the expression for c_2 into Eq. (2.10), we find \dot{c_1} = ...": the result follows from (2.11), the c_1 equation; the book's reference kept. The dot spans c_1 as printed.
- Figures 2.1 and 2.2(a) label the detuning "−δ = ω−ν"; consistent with δ = ν − ω in the text.
- Figure 2.2 and 2.3 placed after the paragraph they follow on the page; 2.3 sits between the Bloch-sphere paragraph and the next. The crops are clean.
- text-layer.md corrected: "far offresonant" (twice) to "far off resonant" as the page prints it; the stray "$√$" line from the sqrt(2) that split "antisym-/metric" removed so the hyphenated word joins.
-->

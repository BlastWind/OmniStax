# 11.8 Cold atoms in an optical lattice

<!-- page 284 -->

Before we discuss recent experimental advances in studying cold atoms in an optical lattice, we will begin by formulating a general theoretical framework for analyzing indistinguishable atoms in a periodic potential. Our system of $N$ atoms at positions $\{x_i\}$ is governed by a general Hamiltonian including two-particle interactions,
$$ \hat{H} = \sum_{i=1}^N\left(\frac{p_i^2}{2m} + V(x_i)\right) + \sum_{j\neq i}\frac{1}{2}U(x_i - x_j), $$ {eq:11.177}
where for sufficiently cold atoms the interaction potential may be replaced by the s-wave pseudopotential,
$$ U(x_i - x_j) = \frac{4\pi\hbar^2a_s}{m}\delta(x_i - x_j). $$ {eq:11.178}
In the language of second quantization, where $\hat{\psi}^\dagger(\mathbf{r})$ creates a boson or fermion at position $\mathbf{r}$, the Hamiltonian may be written
$$ \begin{aligned} \hat{H} &= \int\hat{\psi}^\dagger(\mathbf{r})\left(\frac{p^2}{2m} + V(x)\right)\hat{\psi}(\mathbf{r})d^3\mathbf{r} \\ &+ \frac{1}{2}\frac{4\pi\hbar^2a_s}{m}\int\hat{\psi}^\dagger(\mathbf{r})\hat{\psi}^\dagger(\mathbf{r})\hat{\psi}(\mathbf{r})\hat{\psi}(\mathbf{r})d^3\mathbf{r}. \end{aligned} $$ {eq:11.179}
For bosons, the field operators obey commutation relations
$$ [\hat{\psi}(\mathbf{r}), \hat{\psi}^\dagger(\mathbf{r}')] = \delta(\mathbf{r} - \mathbf{r}') $$ {eq:11.180}
$$ \quad $$ {eq:11.181}

<!-- page 285 -->

whereas for fermions they obey anticommutation relations
$$ \{\hat{\psi}(\mathbf{r}), \hat{\psi}^\dagger(\mathbf{r}')\} = \delta(\mathbf{r} - \mathbf{r}'). $$ {eq:11.182}

Our previous analysis of Bose condensates replaced the operator $\hat{\psi}$ by a c-number representing the macroscopic wavefunction of the condensate. This analysis was valid provided that the interactions were not too strong, i.e. the first term in the Hamiltonian dominated over the second. In an optical lattice, however, this hierarchy need not be obeyed, and we will need to go beyond the Gross-Pitaevskii equation to understand how the system behaves.

## 11.8.1 Atoms in a periodic potential

Atoms confined to an optical lattice will experience a potential $V(\mathbf{r})$ which is periodic. Under the assumption of a strong periodic potential, we can find an approximate form for the Hamiltonian Eq. 11.179 which gives us a simpler formalism and greater physical intuition for the system.

First, we simplify the periodic potential itself. If the antinodes of the lattice occur at positions $\{\mathbf{r}_i\}$, then we can write the potential as
$$ V(\mathbf{r}) = \sum_i\tilde{V}(\mathbf{r} - \mathbf{r_i}). $$ {eq:11.183}
Near the intensity maxima (or potential energy minima), the atomic motion will approach that of a harmonic oscillator, so we can approximate the potential by
$$ \tilde{V}(\mathbf{r} - \mathbf{r_i}) = V_0K_L^2(\mathbf{r} - \mathbf{r_i})^2. $$ {eq:11.184}
Each lattice site is a harmonic potential with a characteristic frequency
$$ \nu_T = \sqrt{\frac{2V_0K_L^2}{m}} = \sqrt{\frac{4V_0E_R}{\hbar^2}}, $$ {eq:11.185}
where $E_R = \frac{\hbar^2K_L^2}{2m}$ is the recoil energy of the lattice. For sufficiently large trap depths $V_0 \gg E_R$, the atoms will be localized near the potential minima (this condition is analogous to the Lamb-Dicke limit for ion traps). Each site will have a set of harmonic oscillator wavefunctions $\phi_n(\mathbf{r} - \mathbf{r}_i)$ associated with it, and for sufficiently strong potentials $V_0 \gg E_R$ there will be very little overlap between wavefunctions in different wells. Finally, for sufficiently cold atoms only the ground state $\phi_0$ will be occupied.

<!-- page 286 -->

If there were no interactions between the lattice sites, then the atomic wavefunction could be expanded in terms of an orthonormal set of harmonic oscillator wavefunctions on each site, $\phi_n(\mathbf{r} - \mathbf{r}_i)$. Much as we saw in the case of the double-well potential, a tunnelling term will hybridize the harmonic oscillator levels, producing Bloch bands with a width given by the tunnelling strength and a separation given by the harmonic oscillator energy levels.

To derive the Bloch bands for atoms in a periodic potential, we will express the field operator as a sum over localized states
$$ \hat{\psi} = \sum_i\hat{b}_iW(\mathbf{r} - \mathbf{r}_i), $$ {eq:11.186}
where $\hat{b}_i$ annihilates a particle at the $i^{th}$ site, and satisfies
$$ [\hat{b}_i, \hat{b}_j] = \delta_{ij} \qquad \text{(bosons)} $$ {eq:11.187}
$$ \{\hat{b}_i, \hat{b}_j\} = \delta_{ij} \qquad \text{(fermions).} $$ {eq:11.188}
Strictly speaking, the expansion in terms of Wannier functions $W$ requires that they be orthogonal to one another. For our purposes, however, it will be a good approximation to replace the Wannier functions by the harmonic oscillator ground state at site $\mathbf{r}_i$,
$$ \hat{\psi} \approx \sum_i\hat{b}_i\phi(\mathbf{r} - \mathbf{r}_i). $$ {eq:11.189}
Taking this as a trial wavefunction and substituting it into the Hamiltonian yields
$$ \begin{aligned} H &= \sum_{i,j}\hat{b}_i^\dagger\hat{b}_j\int\phi^*(\mathbf{r} - \mathbf{r}_i)\left(\frac{p^2}{2m} + V(\mathbf{r})\right)\phi(\mathbf{r} - \mathbf{r}_j)d^3\mathbf{r} \\ &+ \frac{1}{2}\frac{4\pi\hbar^2a_s}{m}\sum_{i,j,k,l}\int\hat{b}_i^\dagger\hat{b}_j^\dagger\hat{b}_k\hat{b}_l\phi^*(\mathbf{r} - \mathbf{r}_i)\phi^*(\mathbf{r} - \mathbf{r}_j)\phi(\mathbf{r} - \mathbf{r}_k)\phi(\mathbf{r} - \mathbf{r}_l)d^3\mathbf{r}. \end{aligned} $$
Since the overlap between wavefunctions at different sites is very small, we can calculate the Hamiltonian to leading order in this small parameter.

The leading order for the interaction term occurs for $i = j = k = l$, which means that we are only accounting for interactions between particles localized to the same site. This so-called “on-site” interaction term is
$$ \begin{aligned} \hat{H}_\mathrm{int} &= \frac{1}{2}\frac{4\pi\hbar^2a_s}{m}\sum_i\int|\phi(\mathbf{r} - \mathbf{r}_i)|^4\cdot\hat{b}_i^\dagger\hat{b}_i^\dagger\hat{b}_i\hat{b}_i \\ &= \frac{U_0}{2}\sum_i\hat{n}_i(\hat{n}_i - 1). \end{aligned} $$ {eq:11.190}

<!-- page 287 -->

The strength of the onsite interaction is approximately given by the interaction energy associated with having two atoms confined to a volume the size of the harmonic oscillator ground state,
$$ U_0 \sim \frac{4\pi a_s\hbar^2}{ma_{HO}^3}. $$ {eq:11.191}
This calculation gives us a simple and physical form for the interaction term in the Hamiltonian Eq. 11.179.

There are both diagonal (involving only a single site $i$) and off-diagonal (involving two sites $i$ and $j$) contributions to the kinetic energy term. The lattice site potential leads to a harmonic oscillator energy associated with the $i^{th}$ site occupation, and any additional external potential $V_\mathrm{trap}(\mathbf{r})$ will add to the energy of that site. In addition, we will need to keep track of the lowest order overlap integrals. These occur for nearest-neighbor terms where $i = j \pm 1$, so that the kinetic energy term becomes
$$ \begin{aligned} \hat{H}_\mathrm{kin} &= \sum_i\left(V_\mathrm{trap}(\mathbf{r}_i) + \frac{\hbar\nu_T}{2}\right)\hat{b}_i^\dagger\hat{b}_i \\ &- \sum_{<i,j>}\left(V_0\int\phi^*(\mathbf{r} - \mathbf{r}_i)\phi(\mathbf{r} - \mathbf{r}_j)d^3\mathbf{r}\right)\hat{b}_i^\dagger\hat{b}_j \end{aligned} $$ {eq:11.192}
$$ = \sum_i\epsilon_i\hat{b}_i^\dagger\hat{b}_i - \sum_{<i,j>}t_{i,j}\hat{b}_i^\dagger\hat{b}_j, $$ {eq:11.193}
where $< i, j >$ denotes a sum over all nearest neighbors. The first term is the energy associated with having a particle on lattice site $i$, whereas the second term allows atoms to hop from one lattice site to a nearest-neighbor site at a rate $t$. Note that the sign of the hopping term is negative. This occurs because the actual potential for any given lattice site is reduced from its bare value by the potentials for nearby lattice sites. Treating this difference in energy in perturbation theory allows tunnelling and reduces the overall energy of the system.

Putting the kinetic energy and interaction terms together yields a simple form for the Hamiltonian in terms of creation and annihilation operators for atoms on each lattice site:
$$ \hat{H} = \sum_i\epsilon_i\hat{b}_i^\dagger\hat{b}_i - \sum_{<i,j>}t_{i,j}\hat{b}_i^\dagger\hat{b}_j + \frac{U_0}{2}\sum_i\hat{n}_i(\hat{n}_i - 1). $$ {eq:11.194}
This Hamiltonian is known as the “Hubbard model,” and has been extensively studied in the context of condensed-matter physics.

<!-- page 288 -->

## 11.8.2 The physics of the Bose-Hubbard model

By loading an Bose condensate into an optical lattice, one can create a physical implementation of the Bose-Hubbard model where the parameters $U$ and $t$ can be experimentally adjusted by changing the atomic scattering length or lattice depth respectively. As we shall see, changing the relative size of these parameters results in qualitative changes in the ground state of the system. To elucidate this transition, we will consider the two limiting cases:$t \gg U_0$ and $U_0 \gg t$.

### The weak lattice: $t \gg U_0$

When the laser beams forming the optical lattice are weak, the condensate state is dominated by the hopping term in the Bose-Hubbard Hamiltonian,
$$ \hat{H}_\mathrm{kin} = -t\sum_{<ij>}\hat{b}_i^\dagger\hat{b}_j, $$ {eq:11.195}
and the effect of the interaction term is negligible. This kinetic part of the Hamiltonian can be easily diagonalized by defining annihilation operators in momentum space,
$$ \hat{b}_\mathbf{k} = \frac{1}{\sqrt{N}}\sum_i e^{-i\mathbf{k}\cdot\mathbf{x_i}}\hat{b}_i $$ {eq:11.196}
$$ \hat{b}_i = \frac{1}{\sqrt{N}}\sum_\mathbf{k}e^{i\mathbf{k}\cdot\mathbf{x_i}}\hat{b}_\mathbf{k} $$ {eq:11.197}
where $N$ is the total number of sites in the lattice. For example, in one dimension the Hamiltonian would take the form
$$ \hat{H}_\mathrm{kin} = -\frac{t}{N}\sum_i\sum_{k,q}\hat{b}_k^\dagger\hat{b}_q e^{-ikx_i}\left(e^{iqx_{i-1}} + e^{iqx_{i+1}}\right) $$ {eq:11.198}
$$ = -2t\sum_k\hat{b}_k^\dagger\hat{b}_k\cos 2ka, $$ {eq:11.199}
where $a$ is the spacing between lattice sites. The ground state of the Hamiltonian is clearly obtained by putting all of the atoms into the $k = 0$ state:
$$ |\psi_0\rangle = \frac{1}{\sqrt{N!}}\left(\hat{b}_{k=0}^\dagger\right)^N|\mathrm{vac}\rangle $$ {eq:11.200}
$$ = \frac{1}{\sqrt{N!}}\left(\frac{1}{\sqrt{N}}\sum_i\hat{b}_i^\dagger\right)^N|\mathrm{vac}\rangle. $$ {eq:11.201}

<!-- page 289 -->

As was the case for the double-well potential, the coherence between neighboring lattice sites is finite, and in the limit of large $N$ the ground state approaches a coherent state. This state exhibits superfluidity because the atoms can freely tunnel between lattice sites. However, since the relative phase between lattice sites is well defined, the atom number fluctuates.

### The strong lattice: $t \ll U_0$

In the opposite limit of a strong optical lattice, atomic hopping between lattice sites is very weak and the Hamiltonian is dominated by the interaction term
$$ \hat{H}_\mathrm{int} = \frac{U_0}{2}\sum_i\hat{n}_i\left(\hat{n}_i - 1\right). $$ {eq:11.202}
When the lattice is perfectly occupied, i.e. $N$ atoms occupy $N$ lattice sites, the lowest energy eigenstate of the system must have one atom in each lattice site:
$$ |\psi_0\rangle = \prod_i\hat{b}_i^\dagger|\mathrm{vac}\rangle $$ {eq:11.203}
To lowest order in perturbation theory, the effect of hopping is an overall energy shift arising from virtual processes. This so-called “exchange energy” reduces the overall energy of each atom by $\Delta E = -2t^2/U_0$, but does not affect the ground state of the system. This ground state is known as a “Mott insulator” because there is no movement of atoms around the lattice; they are frozen in place. Unlike the $k = 0$ ground state in the weak lattice, the number of particles in each lattice site is well defined, so the phase between them is not.

### The Mott insulator to superfluid transition

The ground state of the strong lattice, the Mott insulator, is qualitatively different from the ground state of the weak lattice, the superfluid. By changing the parameter $t/U_0$, it is possible to move between these two limits, effecting a phase transition of the system. This phase transition can happen even at $T = 0$ because the state change is driven by quantum (rather than thermal) fluctuations, so it is known as a “quantum phase transition.”

In order to analyze this phase transition, we will make a number of assumptions. First, we will assume that we are working with a homogeneous system, thus disregarding the effect of a harmonic confining potential. Second, we will assume “commensurate” filling
$$ \nu = \frac{N_\mathrm{atoms}}{N_\mathrm{sites}} = 1. $$ {eq:11.204}
Note that with incommensurate filling $\nu \neq \text{integer}$, strictly speaking there is no phase transition, since the extra atoms or holes will delocalize to minimize their kinetic energy. Finally, we will use a mean-field approach in which we assume that the state vector is factorizable into a product of lattice site states,
$$ \begin{aligned} |\psi_0\rangle &= \prod_i|\phi\rangle_i \\ &= \prod_i\left(\sum_{n=0}^\infty c_n\frac{(\hat{b}_i^\dagger)^n}{\sqrt{n!}}\right)|\mathrm{vac}\rangle \\ &= \prod_i\left(\sum_{n=0}^\infty c_n|n_i\rangle\right). \end{aligned} $$ {eq:11.205}
This assumption is not quite valid, since the superfluid ground state is not quite a product of coherent states, but it will provide a useful qualitative description of the phase transition.

<!-- page 290 -->

With this ansatz wavefunction, we can identify two limits: in the Mott insulator state, each site is singly occupied
$$ |\phi\rangle_i^\mathbf{(MI)} = |1\rangle_i, $$ {eq:11.206}
whereas in the superfluid limit, each site occupation corresponds to a coherent state
$$ |\phi\rangle_i^\mathbf{(SF)} = e^{-1/2}\sum_n\frac{1}{\sqrt{n!}}|n\rangle_i, $$ {eq:11.207}
with mean occupancy $|\alpha|^2 = 1$. This state, $|\phi\rangle_i^\mathbf{(SF)}$ corresponds to the Gross-Pitaevskii wavefunction, which approaches a superfluid state in the large-N limit, similar to the situation with the double-well system. To understand where the phase transition between superfluid and Mott insulator occurs, we can examine the energies for the two limiting wavefunctions and see which is lower in energy. In this simple model, the superfluid state has an energy
$$ E_\mathrm{SF} = -t\cdot z\cdot 2 + \frac{U_0}{2}, $$ {eq:11.208}

<!-- page 291 -->

where $z$ is the number of nearest neighbors, whereas the Mott insulator state has an energy
$$ E_\mathrm{MI} = -\frac{2t^2}{U_0}. $$ {eq:11.209}
From this simple analysis, we would predict a phase transition to occur when
$$ t\cdot z\cdot 4 \sim U_0. $$ {eq:11.210}

Although this model captures the qualitative features of the phase transition, it underestimates the critical ratio $U_0/(t\cdot z)$. A more careful analysis takes a variational wavefunction which includes both limits as well as a transition between them, for example
$$ |\phi\rangle_i = \frac{\sin\theta}{\sqrt{2}}|0\rangle_i + \cos\theta|1\rangle_i + \frac{\sin\theta}{\sqrt{2}}|2\rangle_i. $$ {eq:11.211}
This trial wavefunction works well near the phase transition, and gives
$$ t\cdot z\cdot 5 \sim U_0 $$ {eq:11.212}
as the condition for $\theta = 0$ to be the ground state, which compares well to the exact value of $U_0/(t\cdot z) = 5.8$. For $\nu > 1$, the criticality condition scales as $U_0 \sim t\dot{\nu}$, since tunnelling is enhanced when several particles are in a single site.

We have seen how the ground state of the system changes as we cross from a superfluid to Mott insulator state. In addition, the excitations of the system are qualitatively different on either side of the quantum phase transition. In the superfluid state, the system exhibits a Bogoliubov spectrum of excitations; in the Mott insulator state, the excitation spectrum is gapped because it costs an energy $\Delta\epsilon \sim U_0 - t$ to delocalize a single particle. The vanishing excitation gap is one distinguishing feature of the quantum phase transition.

In real experiments, our assumption of commensurate filling requires reexamination. Since there is an overall harmonic trapping potential holding the atoms in the optical lattice, the center of the trap should hold a higher density of atoms than the outer edges. In fact, what happens is that in the Mott insulator phase the density takes on a ”wedding-cake” structure, with filling factors $\nu$ increasing in steps towards the center of the trap, see Fig. 11.14.

A series of experiments have observed the superfluid to Mott insulator transition by observing the interference or lack thereof between atoms in different sites of the lattice potential. The superfluid phase has first order coherence, so as the atoms expand they interfere, producing an interference pattern which shows the reciprocal lattice of their periodic trapping potential. The Mott insulator phase, however, has no first order coherence, so no periodic pattern is visible in the expansion image. By increasing and then decreasing $U_0/t$, experiments have shown that one can reversibly ramp into and out of the Mott insulator phase, as shown in Fig. 11.15.

<!-- page 292 -->

> FIGURE {fig:11.14} src=../../media/ch11/fig-11-14.png
> caption: Experimental realizations of an optical lattice potential always include an additional harmonic confining potential. In a strongly-interacting system, Mott insulator phases with different filling factor $\nu$ occur in different portions of the lattice, with a small region of superfluid (non-integer $\nu$) phase between them.

<!-- page 293 -->

> FIGURE {fig:11.15} src=../../media/ch11/fig-11-15.png
> caption: Experimental observation of the superfluid to Mott insulator transition [taken from Nature 415, 39 without permission]. (a) Expansion images for different values of $t/U_0$, with the lattice potential ranging from $0E_r$ (a) to $20E_r$ (g). The superfluid phase is associated with the reciprocal lattice pattern forming in the expansion image, while the Mott insulator phase shows no first order coherence. (b) Demonstration that the Mott insulator transition is reversible. The lattice depth is ramped well into the Mott insulator phase and then decreased over a time $t$. For slow ramp times $t$, the superfluid phase is regained.

<!-- notes
- text-layer.md corrected: the bold subscripts "ri" of Eqs. (11.183)-(11.184) and "xi" of Eqs. (11.196)-(11.197), left outside maths and read as words, wrapped in `$…$`; "Gross-/Pitaevskii" on page 290, split by a stray "$i$" line, joined.
- Eq. (11.181) is an empty numbered row in the book (an aligned block whose second row carries only the number); its slot holds `\quad`.
- The paragraph begun before Fig. 11.14 ("A series of experiments…") runs past the figure on page 292; the figure markers are placed after it. Fig. 11.15 (taken from Nature 415, 39 without permission) is transcribed as printed.
- "By loading an Bose condensate": the book's "an", kept. "cases:$t \gg U_0$" without a space, "reexamination" and the stray ”wedding-cake” opening quote are the book's, kept. "Gross-Pitaevskii" here against "Gross-Pitaevski" in 11.7: the book's.
- Eqs. (11.187)-(11.188) print $[\hat{b}_i, \hat{b}_j] = \delta_{ij}$ and $\{\hat{b}_i, \hat{b}_j\} = \delta_{ij}$; $[\hat{b}_i, \hat{b}_j^\dagger]$ and $\{\hat{b}_i, \hat{b}_j^\dagger\}$ are meant.
- Eq. (11.199) prints $\cos 2ka$; Eq. (11.198) with spacing $a$ gives $-2t\sum_k\hat{b}_k^\dagger\hat{b}_k\cos ka$.
- Eqs. (11.200)-(11.201) use $N$ both for atoms (the power) and for sites (the $1/\sqrt{N}$, defined below Eq. 11.197 as the number of sites); kept.
- "$U_0 \sim t\dot{\nu}$": the book prints a dot over $\nu$, apparently for $t\cdot\nu$; kept as printed.
- "the exact value of $U_0/(t\cdot z) = 5.8$": 5.8 is the mean-field value ($2\nu+1+2\sqrt{\nu(\nu+1)}$ for $\nu = 1$); quantum Monte Carlo in 3D gives $U_0/(t\cdot z) \approx 4.9$.
- Fig. 11.15 caption "from $0E_r$ (a) to $20E_r$ (g)": the panels run a to h and the 20 $E_r$ panel in Greiner et al. is (h).
- Fig. 11.15 cites "Nature 415, 39" without the year (2002).
- Eq. (11.185) calls $\nu_T$ a frequency but defines an angular frequency, used as $\hbar\nu_T/2$ in Eq. (11.192); consistent with that use, kept.
-->

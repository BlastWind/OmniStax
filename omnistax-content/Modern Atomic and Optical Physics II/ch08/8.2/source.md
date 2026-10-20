# 8.2 Semiclassical description

<!-- page 136 -->

The interaction of an atom with a plane wave illustrated how the atom changes its momentum and energy in the process of coherently absorbing a photon. Incoherent processes will also have an effect on the motional state, since spontaneous emission will produce a random distribution of momentum kicks. Quantum treatment of the electromagnetic field and atomic momentum states would be required to truly describe such processes. That level of detail is unnecessary, however, to describe the center of mass motion in the classical regime. We will consequently use a semiclassical approach to understand the force the light exerts on the atoms.

The correspondence between classical and quantum dynamics is most easily seen in the Heisenberg picture, where the commutator of the momentum and the Hamiltonian gives the effective force^[In general, we can derive an identity to evaluate any commutator of the form $[\hat{p}, \hat{O}(\hat{r})]$. Working in the position basis, the action of this commutator on any state $|\psi(r)\rangle$ is given by $$ [\hat{p}, \hat{O}(r)]\psi(r) = [-i\hbar\nabla, \hat{O}(r)]\psi(r) $$ {eq:8.11} $$ = -i\hbar\nabla(\hat{O}(r)\psi(r)) + i\hbar\hat{O}(r)\nabla\psi(r) $$ {eq:8.12} $$ = -i\hbar(\nabla\hat{O}(r))\psi(r). $$ {eq:8.13} Thus we can write $[\hat{p}, \hat{O}(r)] = -i\hbar\nabla\hat{O}(r)$. One can use this identity, for example, to find the force operator above.]:
$$ \frac{d}{dt}\hat{p} = \frac{1}{i\hbar}[\hat{p}, \hat{H}] = \hat{F}. $$ {eq:8.9}
In terms of the position operator, this force can be represented by
$$ \hat{F} = -[\nabla, \hat{H}(\hat{r})] = \hbar\nabla\Omega|2\rangle\langle 1| + \hbar\nabla\Omega^*|1\rangle\langle 2|. $$ {eq:8.10}

We now invoke the idea that our atom is very nearly a classically moving ball experiencing the average force
$$ F = \langle\hat{F}\rangle = \hbar\nabla\Omega\rho_{12} + \hbar\nabla\Omega^*\rho_{21}. $$ {eq:8.14}

<!-- page 137 -->

Note that the indices are counterintuitive but correct:
$$ \langle|1\rangle\langle 2|\rangle = \mathrm{Tr}[\rho|1\rangle\langle 2|] = \rho_{21}. $$ {eq:8.15}
Since $\rho_{21}/\Omega \propto \chi$ is independent of the phase of $\Omega$, it is convenient to write the force in terms of this ratio:
$$ F = \hbar\Omega^*\nabla\Omega\left(\frac{\rho_{12}}{\Omega^*}\right) + \hbar\Omega\nabla\Omega^*\left(\frac{\rho_{21}}{\Omega}\right) $$ {eq:8.16}
$$ = \hbar\frac{1}{2}\nabla|\Omega|^2\left(\frac{\rho_{12}}{\Omega^*} + \frac{\rho_{21}}{\Omega}\right) + i\hbar|\Omega|^2\nabla\phi\left(\frac{\rho_{12}}{\Omega^*} - \frac{\rho_{21}}{\Omega}\right) $$ {eq:8.17}
Separating out the real and imaginary parts of the susceptibility, we find that there are separate contributions from the reactive and dissipative components of the atomic response.
$$ F = \underbrace{2\hbar|\Omega|^2\nabla\phi\ \mathrm{Im}\left(\frac{\rho_{21}}{\Omega}\right)}_{\text{dissipative}} + \underbrace{\hbar\nabla|\Omega|^2\mathrm{Re}\left(\frac{\rho_{21}}{\Omega}\right)}_{\text{reactive}}. $$ {eq:8.18}

This force is particularly easy to calculate and understand when we can use the steady state solution of the density matrix equations to solve for $\rho_{21}$. The steady state solution will be valid for timescales $t$ much greater than the dephasing time $1/\gamma_{12}$ or the inverse detuning $1/\delta$. For our description of the forces to be valid, the width of the atomic wave packet must be much less than the optical wavelength, $\Delta r(0) \ll \lambda$, such that the atom can resolve the phase of the field. At some later time, the center of mass motion is approximately given by $r(t) \sim r(0) + p(0)t/m$, which has an uncertainty $\Delta r(t) \sim \Delta r(0) + \Delta p(0)t/m$. For the force equation to still remain valid at time $t$, we must have that $\Delta p(0)t/m \ll \lambda$, or $k\Delta p(0)t/m \ll 1$. Using the uncertainty relationship $\Delta r(0)\Delta p(0) \sim \hbar$ and $\Delta r(0) \ll \lambda$, the limitation on time can be written $t \ll (1/\omega_R)$, where the recoil energy $\hbar\omega_R = (\hbar k)^2/2m$. This semiclassical force description is then valid in the regime
$$ \omega_R \ll 1/t \ll \max(\gamma_{12}, \delta). $$ {eq:8.19}
When this condition is satisfied, and when the light intensities are small, we can use $\rho_{21}/\Omega = i/(\gamma_{12} - i(\delta - kv))$ to find the light-induced force and analyze the physics behind it.

### Large detuning: the dipole force

When the incident light is far detuned from atomic resonance, the real part of the susceptibility dominates and the response is almost purely reactive.

<!-- page 138 -->

In this limit, $\rho_{21}/\Omega = -1/\delta$ and
$$ F = -\hbar\nabla\left(\frac{|\Omega|^2}{\delta}\right). $$ {eq:8.20}
This type of force is known as the “dipole force”, and it is conservative because it can be written as the gradient of a potential. Note that the potential $V_\mathrm{eff} = \hbar|\Omega|^2/\delta$ corresponds to the AC Stark shift induced by the applied field. In fact, we can interpret the origin of the dipole force by examining the atomic energy levels in the dressed state picture. For a far-off resonance beam, the atoms remain in the ground state, but they can reduce their potential energy by moving to a region where the AC Stark shift lowers the ground state energy. The dipole force thus represents the attraction or repulsion of an atom in a dressed state potential.

The sign of the detuning determines the sign of the dipole force. In particular,
$$ \begin{aligned} &\delta < 0 \Rightarrow \text{atoms attracted to field maxima} \\ &\delta > 0 \Rightarrow \text{atoms attracted to field minima.} \end{aligned} $$
Consequently the dipole force can be tailored to attract or repel atoms as needed. The sign dependence on detuning can also be found from a classical argument. If we consider the atom as a polarizable classical dipole $d$ in a polarizing electric field $E$, its energy is $-E\cdot d$. Applied fields with frequencies below the resonance will induce a dipole which oscillates in phase with the field, yielding a decrease in energy. Excitation above resonance induces a dipole which is $\pi$ out of phase with the applied field, yielding an increase in energy. Consequently, atoms in red-detuned fields will seek the field maximum, while atoms in blue-detuned fields will seek the field minimum.

The dipole force dominates only for large detunings, requiring similarly large powers $|\Omega|^2$ in order to create a tight trap. In this limit, the dipole force provides an effective method to confine atoms without introducing a lot of spontaneous emission.

Two important examples of the dipole force have found extensive application in atomic physics. The dipole trap is formed by tightly focussing a red-detuned beam which attracts atoms to the region of maximum intensity. This simple design has been used to manipulate and study cold atoms and Bose Einstein condensates. The second important application of the dipole force is known as the “optical lattice.” Atoms illuminated by a standing wave are attracted to the nodes or antinodes, spaced by $\sim \lambda/2$. A single standing wave will produce a one dimensional lattice, and by adding orthogonal beams higher dimensional lattices can be produced. These optical lattices are approximately equivalent to “atomic crystals”, and can be used to study phenomena analogous to those in solid-state physics by building a model crystal out of atoms and lasers.

<!-- page 139 -->

The dipole force can often be generalized to many states $\{|i\rangle\}$, with an effective potential associated with each state,
$$ V_\mathrm{eff} = \hbar\sum_i \frac{|\Omega_i|^2}{\delta_i}|i\rangle\langle i|. $$ {eq:8.21}
This effective potential only incorporates the AC Stark shifts experienced by the multilevel atom; in general it may be important to take into account contributions (also of order $1/\delta$) due to two-photon processes between nearly degenerate atomic levels. In this situation, the internal states $\{|i\rangle\}$ are no longer good eigenstates, and we would need to rediagonalize the Hamiltonian to obtain the true dressed state potential.

### Plane waves: the dissipative force

An atom illuminated by a plane wave does not experience a dipole force, since $\nabla|\Omega^2| = 0$. The dissipative force depends on $\mathrm{Im}(\rho_{21}/\Omega)$, which for low intensities $|\Omega| \ll \gamma$ is given by
$$ \mathrm{Im}\left(\frac{\rho_{21}}{\Omega}\right) \approx \frac{\gamma_{12}}{\gamma_{12}^2 + (\delta - kv)^2}. $$ {eq:8.22}
The $kv$ term accounts for the fact that an atom moving with velocity $v$ sees a Doppler-shifted laser frequency. The dissipative force is thus
$$ \mathbf{F} \approx \hbar\mathbf{k}\frac{2\gamma_{12}|\Omega|^2}{\gamma_{12}^2 + (\delta - kv)^2} = \hbar\mathbf{k}R_\mathrm{opt}, $$ {eq:8.23}
where $R_\mathrm{opt}$ is the optical pumping rate. The expression above holds only in the weak field limit, when $R_\mathrm{opt} \ll \gamma$.

The physical intuition behind the dissipative force is straightforward. The light directs a momentum kick $\hbar\mathbf{k}$ to the atom each time a photon is absorbed. When the atom relaxes incoherently to the ground state, it emits a photon into $4\pi$, leading to no net change in momentum. Consequently the motional state changes on average by $\hbar\mathbf{k}$ every time a photon is absorbed and then spontaneously emitted. Absorption/re-emission occurs at the optical pumping rate, so the rate of momentum change must be $\mathbf{F} = \hbar\mathbf{k}R_{opt}$. More generally, following this line of reasoning, the dissipative force $\mathbf{F}$ can also be thought of as the change in momentum $\hbar\mathbf{k}$ per scattering event, multiplied by the rate of scattering, $\gamma\rho_{22}$,

<!-- page 140 -->

$$ \mathbf{F} = \hbar\mathbf{k}\gamma\rho_{22}. $$ {eq:8.24}
This result can be confirmed directly with a bit of algebra, by rewriting $\rho_{21}/\Omega$ in terms of the excited state population.

How large can the dissipative force be? We have seen in previous lectures that the transition saturates as more and more power is applied. For large powers,
$$ \mathrm{Im}\left(\frac{\rho_{21}}{\Omega}\right) = \frac{\gamma_{12}}{\gamma_{12}^2 + (\delta - kv)^2}\frac{\gamma}{\gamma + 2R_{opt}}, $$ {eq:8.25}
so the force becomes
$$ \mathbf{F} = \hbar\mathbf{k}\frac{\gamma R_{opt}}{\gamma + 2R_{opt}} $$ {eq:8.26}
In the limit of large powers, $\Omega \gg \gamma$, $R_{opt} \to \infty$, the maximum attainable dissipative force is set by the atomic spontaneous emission rate,
$$ \mathbf{F}_\mathrm{max} = \hbar\mathbf{k}\frac{\gamma}{2}. $$ {eq:8.27}
This limit makes intuitive sense given Eq. (8.24), because the atom cannot spend more than half of its time in the excited state, and thus achieves a maximum scattering rate given by $\gamma/2$.

It is instructive to consider typical orders of magnitude for the dissipative force. A single momentum kick $\hbar k$ will typically change the atomic velocity by a few centimeters per second. Compared to room temperature velocities $\sim 100 - 1000$ m/s, this recoil velocity is miniscule. A huge number of events $\sim 10^4$ are required to slow a room temperature atom down to the recoil velocity. For alkali atoms, $\gamma \sim 10^6$ Hz, so the slowing process will require a few milliseconds, during which the atom will travel about one meter. These kinds of considerations determine the physical scale of laser cooling experiments.

For practical experiments, it is important to consider the space and time dependent velocity of the atoms. In particular, as an atom is slowed by the dissipative force, it will be Doppler shifted out of resonance with the applied laser beam. In order to slow a beam of atoms, it is necessary to change the resonance condition so that a typical atom will always be in resonance with the applied light during the entire slowing process. In practice, this is accomplished in two ways: either the applied laser is chirped (its frequency is swept), or a spatially varying magnetic field adds a Zeeman shift to the atoms to keep them in resonance as they slow down.

<!-- notes
- text-layer.md corrected in three places: the label "dissipative" under Eq. (8.18) moved after "Im" where the page sets it; "offresonance" to "off resonance" as the page prints "far-/off resonance"; "Fmax" to "F max" for the bold F with upright subscript of Eq. (8.27).
- The footnote on "force" holds Eqs. (8.11)-(8.13), so the book numbers Eq. (8.14) straight after (8.10); the order is the book's.
- Page 139 "$\nabla|\Omega^2| = 0$": the book's slip for $\nabla|\Omega|^2 = 0$, kept.
- "miniscule" and "focussing": the book's spellings, kept. "far-off" keeps its hyphen across the line break.
- $R_\mathrm{opt}$ is upright in Eq. (8.23) and its paragraph, italic ($R_{opt}$) from "$\mathbf{F} = \hbar\mathbf{k}R_{opt}$" through Eq. (8.26); kept as printed.
- Page 140 "For alkali atoms, $\gamma \sim 10^6$ Hz, so the slowing process will require a few milliseconds": alkali D-line decay rates are $\gamma \approx 2\pi \times 5$-$10$ MHz, about $3$-$6 \times 10^7$ s$^{-1}$; with $\gamma \sim 10^6$ the $\sim 10^4$ scatterings at $\gamma/2$ would take about 20 ms, not a few. $\gamma \sim 10^7$-$10^8$ s$^{-1}$ is meant. Kept as printed.
- Page 140 "a few centimeters per second" for the recoil velocity holds for light alkalis (Li, Na); for Rb and Cs it is 3-6 mm/s. Kept.
-->

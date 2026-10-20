# 8.3 Doppler Cooling

<!-- page 141 -->

We have seen two ways in which photons can exert a force on atoms, in principle allowing deceleration of an atomic beam. However, the momentum kicks imparted to the atoms need not necessarily cool the atoms. Cooling requires the analogue of viscosity, so that the applied fields not only slow the atoms but also narrow their velocity distribution. In particular, an atomic ensemble will be cooled if the applied fields slow down hot atoms more efficiently than cool atoms. Consequently, a cooling force must depend on the velocity of the atom. The technique of Doppler cooling employs the velocity-dependent terms in the dissipative force to produce a viscous force on atoms.

### Optical molasses

To understand where the viscosity arises, we will examine the dissipative force on slowly moving atoms, $\mathbf{k}\cdot\mathbf{v} \ll \delta, \gamma_{12}$. Expanding this force in small powers of the velocity, we find
$$ F \approx \hbar\mathbf{k}\underbrace{\frac{2\gamma_{12}|\Omega|^2}{\gamma_{12}^2 + \delta^2}}_{R_\mathrm{opt}^0}\left(1 + \frac{2\delta\mathbf{k}\cdot\mathbf{v}}{\gamma_{12}^2 + \delta^2}\right), $$ {eq:8.28}
where we recognize $R_\mathrm{opt}^0$ as the optical excitation rate for atoms with zero velocity. Two terms arise in Eq. (8.28): the first velocity-independent term gives a directed momentum kick to the atom while the second term provides the velocity dependent cooling force. Note that the first term is proportional to $\mathbf{k}$ whereas the second $\propto k^2$, so that only the first term depends on the sign of $\mathbf{k}$. By applying counterpropagating beams, one might thus hope to cancel the effects of the first term while retaining the cooling force of the second term.

> FIGURE {fig:8.1} src=../../media/ch08/fig-8-1.png
> caption: Counterpropagating beams used for Doppler cooling.

Consider an atom illuminated by two beams counterpropagating in the $\pm z$ direction. Provided that the optical pumping rate is small, the total force on the atom is just the sum of the forces from each beam, $F = F_+ + F_-$. Indeed, the velocity-independent forces will precisely cancel, while the second term contributes a viscous force

<!-- page 142 -->

$$ F = F_+ + F_- = \eta m v_z $$ {eq:8.29}
where m is the mass of the atom and $\eta$ is the friction coefficient
$$ \eta = \frac{8\hbar k^2}{m}\frac{\delta\gamma_{12}|\Omega|^2}{(\gamma_{12}^2 + \delta^2)^2}. $$ {eq:8.30}
Note that the sign of $\eta$ depends on the sign of the detuning: for $\delta < 0$, the viscous force will act to cool the atoms, whereas for $\delta > 0$ it will heat them.

The physics behind the Doppler cooling mechanism can be naively explained using energy conservation. For $\delta < 0$, the atom absorbs a red-detuned photon then spontaneously emits a photon resonant with the atomic transition, so that the atom loses energy with each cycle. Blue-detuned light increases the atom kinetic energy in a similar fashion. A more honest interpretation must include the Doppler shifts of the atoms, but the result is similar. When $\delta < 0$, faster atoms are Doppler shifted closer to resonance with one of the two counterpropagating beams, and thus absorb more light than slower atoms . When $\delta > 0$, the opposite is true, so the counterpropagating beams tend to heat the sample.

The reader will notice that the cooling force only works in one dimension. Cooling an atom in three dimensions requires three sets of orthogonal counterpropagating beams. For small optical pumping rates, the forces are independent and the above analysis holds in each direction. This three dimensional viscous cooling is known as optical molasses.

### Maximum value of the friction coefficient

The friction coefficient $\eta$ is largest when the detuning is close to the decoherence rate, *i.e.*, $\delta \sim \gamma_{12}$, such that
$$ \eta = \frac{\hbar k^2}{m}\frac{R_\mathrm{opt}^0(\delta = 0)}{\gamma_{12}}. $$ {eq:8.31}
Here, $R_\mathrm{opt}^0(\delta = 0) = 2|\Omega|^2/\gamma_{12}$ is the optical pumping rate on resonance. Although we have derived our previous results in the limit of small applied powers $\Omega$, we can guess what will happen as the power is increased. The optical pumping rate will eventually saturate at a value close to the atomic spontaneous emission rate $\gamma$. A more careful analysis reveals that the friction coefficient at large powers

<!-- page 143 -->

$$ \eta \to \frac{\hbar k^2}{8m}\frac{\gamma}{\gamma_{12}}. $$ {eq:8.32}
The largest possible $\eta = \hbar k^2/4m$ is thus attained when the atomic transition is radiatively broadened. This maximal value can be rewritten in terms of the recoil frequency $\omega_R$:
$$ \eta_\mathrm{max} = \frac{1}{2}\omega_R. $$ {eq:8.33}
Since $\frac{d}{dt}p = -\eta p$, we find that the atoms lose momentum at a rate $\sim \omega_R$. This discovery shows that the dynamical timescales for atomic motion are $\sim 1/\omega_R \gg 1/\gamma_{12}, 1/\delta$, justifying a posteriori the adiabatic approximation used to derive the light force. Since the typical timescale for cooling is $\omega_R \sim 10$ kHz, we see that Doppler cooling can be a fairly rapid process.

### Behavior at finite velocity

Close to zero velocity, an atom in a red-detuned molasses experiences a nearly linear viscous force. As its velocity increases, the friction coefficient becomes velocity dependent, and we must resort to the full expression for the Doppler force. In fact, for $\mathbf{k}\cdot\mathbf{v} \gg \delta, \gamma_{12}$ the force vanishes. The range of velocities which are effectively cooled is known as the “capture range”, and is defined as $-v_c < v < v_c$ where the critical velocity corresponds to the maximum force $F_\mathrm{max} = |F(\pm v_c)|$.

The capture range depends on many parameters, but in certain limits it has a simple form. When the optical pumping rate is the same size as the detuning and the dephasing rate, the cooling force is maximized and the capture range is $\sim \gamma_{12}/k$. A strongly driven system $R_\mathrm{opt} \geq \gamma_{12}$ is power broadened, so $v_c \sim \Omega/k$. Finally, a far-detuned field $\delta \geq \gamma_{12}$ leads to a capture velocity $v_c \sim \delta/k$. In all of these situations, the capture velocity scales roughly as the wavelength multiplied by the dominant rate in the problem.

### The magneto-optical trap (MOT)

Dissipative forces can be used to cool atoms, narrowing their velocity distribution, but they do not provide a confining potential. By combining optical molasses with a magnetic field gradient, it is possible to simultaneously cool and trap the atoms.

<!-- page 144 -->

> FIGURE {fig:8.2} src=../../media/ch08/fig-8-2.png
> caption: Doppler cooling force at finite velocity. For red-detuned beams, atoms with positive velocities experience a negative force and vice versa. The maximum force is experienced by atoms traveling at the critical velocity $\pm v_c$.

The magnetic field induces Zeeman shifts which can provide a position dependent detuning. By choosing the counterpropagating beams to have different circular polarizations, we can ensure that the position dependence causes atoms to be pushed back toward the center of the trap. Since we want the different polarizations to couple different atomic transitions, MOT operation requires a multilevel atom. The simplest possible configuration, shown in Figure 8.3, uses a $J = 0 \to J = 1$ atomic transition coupled by two counterpropagating, cross-circularly polarized beams. Applying a linear magnetic field shifts the three upper atomic levels, so that the dominant force pushes that atom back towards the center of the trap. Since the Doppler cooling technique is insensitive to polarization, the MOT simultaneously localizes and cools the atoms.

An excellent treatment of related subjects can be found in Bill Phillips’ lecture notes from Les Houches LXXII (1999) or in “Laser Cooling and Trapping” by Metcalf and van der Straten.

### The Doppler limit

We have shown how light forces can slow and cool an atomic ensemble, but we have not yet considered the final temperature attainable by Doppler cooling. Our analysis thus far indicates that the energy of the atom will decrease to zero. Clearly, we have missed something, because in practical situations one generally discovers a limit to any cooling method.

<!-- page 145 -->

> FIGURE {fig:8.3} src=../../media/ch08/fig-8-3.png
> caption: The magneto-optical trap. Top: A typical configuration of red-detuned laser beams and magnetic field. Bottom: Trapping forces for a J=0 $\to$ J = 1 atomic transition.

<!-- page 146 -->

Qualitatively, we can understand this limit in terms of the momentum kicks imparted to atoms by spontaneous emission. As each atom radiates spontaneously into $4\pi$, it receives a momentum kick in an arbitrary direction, heating the ensemble. Consequently, we expect that cooling will proceed until the spontaneous emission heating rate equals the Doppler cooling rate. Such considerations, however, are beyond the theory we have already developed, and they motivate a generalized Doppler cooling theory which includes the heating effects of spontaneous emission.

There are many ways to treat the heating effects of random processes; we will use the Heisenberg-Langevin approach. Before proceeding into a calculation of temperature, it is instructive to consider the basic theoretical ideas behind this approach, since they provide further intuition into atomic interactions with a coherent source and a radiation bath.

<!-- notes
- text-layer.md corrected: Figure 8.3 caption "red- detuned" to "red-detuned", the hyphen joining across the line break as the page sets it.
- Figure 8.3 stands on page 145 inside the paragraph that runs from page 144 to page 146; its marker is placed after that paragraph.
- "than slower atoms .": the space before the period is the book's, kept.
- "pushes that atom back towards the center": the book's slip for "the atom", kept.
- "where m is the mass of the atom": the book sets m upright here; kept as plain text.
- Eqs. (8.29)-(8.30) define $F = \eta m v_z$ with $\eta \propto \delta$, so cooling ($\delta < 0$) means $\eta < 0$; page 143's "$\frac{d}{dt}p = -\eta p$" takes $\eta$ positive for cooling, the opposite sign convention, and Eqs. (8.31)-(8.33) give $|\eta|$. Kept as printed.
- Page 143 "the typical timescale for cooling is $\omega_R \sim 10$ kHz": a rate, not a timescale, is meant; kept.
- 8.3 "the capture velocity scales roughly as the wavelength multiplied by the dominant rate": $v_c \sim \text{rate}/k = \text{rate}\cdot\lambda/2\pi$, so up to $2\pi$; kept.
-->

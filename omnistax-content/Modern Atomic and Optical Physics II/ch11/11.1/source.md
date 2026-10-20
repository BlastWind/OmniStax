# 11.1 Introduction

<!-- page 234 -->

Qualitatively, a gas at high temperature should behave classically, with each atom behaving like a point particle with a well-defined position and momentum. At low temperature, the atoms are best described as matter wavepackets, whose size is set by the deBroglie wavelength
$$ \lambda_\mathrm{dB} = \sqrt{\frac{2\pi\hbar^2}{mk_BT}}. $$ {eq:11.1}

When the atomic wavepackets start to overlap in position, the quantum statistics of the atoms becomes important. A quantitative calculation shows that the transition between primarily classical and primarily quantum mechanical behaviour occurs when the density $n$ and the temperature $T_c$ satisfy
$$ n\ \lambda_\mathrm{dB}(T_c)^3 = \zeta(3/2) \approx 2.612, $$ {eq:11.2}
or
$$ k_BT_c = \frac{2\pi\hbar^2}{m\lambda_{dB}^2} = \frac{2\pi\hbar^2}{m}\left(\frac{n}{2.612}\right)^{2/3}. $$ {eq:11.3}
For Bose atoms below this critical temperature, $0 < T < T_c$, a macroscopic number of atoms will occupy the lowest energy state–even at finite temperature. This so-called Bose condensation will occur only if the atom cloud is both dense and cold, which means that the phase space density must be large.

<!-- page 235 -->

## 11.1.1 Bose-Einstein statistics

Bose-Einstein statistics describe the behaviour of indistinguishable particles with integer spin, and thus determine how an ensemble of $N$ identical Bose atoms with some total energy $E$ will distribute themselves among the possible energy states.

It is worth noting the role that distinguishability plays in determining this distribution. From statistical mechanics, we know that the weight of a certain arrangement of atoms is given by the number of ways that arrangement can be formed – or, in some sense, how random that arrangement is. The distinguishability of particles plays a crucial role in determining this weight. For example, consider 10 particles distributing themselves between two states. When the particles are distinguishable, the statistical weight of the $\{5, 5\}$ arrangement is 252 times greater than the statistical weight of the $\{10, 0\}$ arrangement. When the particles are indistinguishable, the two configurations have equal weight. This illustrates the huge change in statistics obtained upon losing the ability to distinguish particles.

In the grand canonical ensemble, $N$ Bose particles with total energy $E$ will distribute themselves among a set of energy levels $\epsilon_i$ according to the Bose-Einstein distribution,
$$ n_i = \frac{1}{e^{(\epsilon_i - \mu)/k_BT} - 1}, $$ {eq:11.4}
where $n_i$ is the number of particles occupying energy level $\epsilon_i$, and
$$ N = \sum_i n_i $$ {eq:11.5}
$$ E = \sum_i \epsilon_i n_i. $$ {eq:11.6}

<!-- page 236 -->

This set $\{n_i\}$ represents the most random way to distribute the energy $E$ among $N$ atoms occupying the energy states $\{\epsilon_i\}$. At sufficiently low temperature, the most random distribution is obtained by putting a large fraction of the atoms into the ground state $\epsilon_0$ and letting the remaining atoms occupy higher energy states. When converting these summations into integrals, it is therefore important to keep track of the atoms occupying the ground state $\epsilon_0$, so that
$$ N = \frac{1}{e^{(\epsilon_0 - \mu)/k_BT} - 1} + \int\frac{g(\epsilon)}{e^{(\epsilon_i - \mu)/k_BT} - 1}d\epsilon $$ {eq:11.7}
$$ E = \frac{\epsilon_0}{e^{(\epsilon_0 - \mu)/k_BT} - 1} + \int\epsilon\frac{g(\epsilon)}{e^{(\epsilon_i - \mu)/k_BT} - 1}d\epsilon, $$ {eq:11.8}
where $g(\epsilon)$ is the density of states appropriate to the geometry of the problem.

## 11.1.2 BEC in an ideal gas

For non-interacting and unconfined bosons, the textbook treatment outlined above results in a macroscopic ground state occupation number
$$ N_{g.s.} = N\left(1 - \left(\frac{T}{T_c}\right)^{3/2}\right), $$ {eq:11.9}
where $N$ is the total number of atoms and $T_c$ is the condensation temperature. One can also find the temperature dependence for a slightly more realistic scenario when the atoms are confined to a three-dimensional harmonic oscillator trap:
$$ N_{g.s.} = N\left(1 - \left(\frac{T}{T_c}\right)^3\right). $$ {eq:11.10}

In reality, however, even the dilute atomic gases interact, and even weak interactions can have a large effect on the dynamics of the condensate.

<!-- notes
- Eq. (11.3): the subscript of $\lambda_{dB}^2$ is italic here, upright in (11.1) and (11.2); kept as printed.
- Eqs. (11.7) and (11.8): the integrands' exponents read $\epsilon_i$ where the integration variable $\epsilon$ is meant; kept as printed.
- "lowest energy state–even at finite temperature": the book's dash, kept.
-->

# 2.2 Bound to Continuum Transitions

<!-- page 30 -->

The complete basis of states for atomic systems includes not only the discrete bound energy states but also a continuum of higher energy unbound states. Photons with frequency at or above the photo-ionization threshold can induce transitions to this continuum, while even sub-threshold interactions can be influenced by energetically proximal unbound states. Examples of bound to continuum transitions include photoionization of atoms and photodissociation of ultracold molecules. It is important to understand the contribution of the continuum states to atom-field dynamics because their effects are qualitatively different from the Rabi oscillations characteristic of discrete states.

Mathematically, a continuum of states can be difficult to treat, so we discretize the unbound states by considering an atom in a box of volume $L^3$. As the size of the box approaches infinity, the discrete energy levels approach the continuum. Here we consider only a single bound state and a generic continuum of unbound states, denoting the ground state by $|1\rangle$ and the excited states by $|k\rangle$, each with energy $\hbar\omega_k$. An applied field of frequency $\nu$ couples each bound state $|k\rangle$ to the bound state $|1\rangle$ with Rabi frequency $\Omega_k$. The Hamiltonian (in the RWA and rotating frame) is thus

$$ \hat{H} = \sum_k \hbar\left(\omega_k - \nu\right)|k\rangle\langle k| - \hbar\sum_k \left(\Omega_k|k\rangle\langle 1| + \Omega_k^*|1\rangle\langle k|\right). $$ {eq:2.42}

We will investigate the dynamics using a trial wavefunction, similar to how we approached the two-level atom. Expanding the wavefunction in terms of the ground state and continuum states,
$$ |\psi\rangle = c_1|1\rangle + \sum_k c_k|k\rangle $$ {eq:2.43}
and substituting into the Schroedinger equation, we obtain the now familiar equations of motion
$$ \dot{c}_1 = i\sum_k \Omega_k^* c_k $$ {eq:2.44}

<!-- page 31 -->

$$ \dot{c}_k = i\delta_k c_k + i\Omega_k c_1 $$ {eq:2.45}
where $\delta_k = \nu - \omega_k$.

These equations are formidable, and cannot be solved for an arbitrary set of states $|k\rangle$. We will proceed by formally integrating the second equation, then making a series of approximations which are valid for a densely spaced continuum of states spread over a large range of energies. For an atomic system which starts out in the ground state, $c_1 = 1$ and $c_k = 0$, formal integration of the second equation gives
$$ c_k(t) = i\Omega_k\int_0^t c_1(t')e^{-i\delta_k(t'-t)}dt'. $$ {eq:2.46}
Substitution into the first equation yields a nonlocal integral equation involving only the ground state amplitude,
$$ \dot{c}_1(t) = -\sum_k |\Omega_k|^2\int_0^t c_1(t')e^{-i\delta_k(t'-t)}dt'. $$ {eq:2.47}
Since the detunings $\delta_k$ are summed over, the exponential will only be appreciably different from zero when $t = t'$. To lowest order (assuming that the probability amplitude $c_1(t)$ is slowly varying), we may set $c_1(t') = c_1(t)$ and pull it out of the integral. The remaining integral may then be evaluated by adding an infinitesmal imaginary part to $\delta_k$,
$$ \mathop{\mathrm{lim}}\limits_{\epsilon\to 0}\int_0^t e^{-i(\delta_k - i\epsilon)(t'-t)}dt' = \mathop{\mathrm{lim}}\limits_{\epsilon\to 0}\frac{i(1 - e^{(i\delta_k - \epsilon)t})}{\delta_k + i\epsilon} $$ {eq:2.48}
and taking the long time limit, so the second term in the numerator vanishes. Using an identity from complex analysis, the integral becomes
$$ \mathop{\mathrm{lim}}\limits_{\epsilon\to 0}\frac{i}{\delta_k + i\epsilon} = \pi\delta(\delta_k) + i\mathcal{P}\frac{1}{\delta_k}, $$ {eq:2.49}
where $\mathcal{P}$ indicates that the principal value should be taken when integrating over $\delta_k$.^[For example, $\mathcal{P}\int_{-|a|}^{|b|}\frac{1}{x}dx = \mathop{\mathrm{lim}}\limits_{\epsilon\to 0}\left(\int_{-|a|}^{-\epsilon}\frac{1}{x}dx + \int_{\epsilon}^{|b|}\frac{1}{x}dx\right)$]

The resulting equation of motion for the ground state probability amplitude includes a population decay at rate $\gamma$, and an energy shift $\Delta_{Stark}$:
$$ \dot{c}_1 = -c_1(\underbrace{\pi\sum_k |\Omega_k|^2\delta(\nu - \omega_k)}_{\gamma/2} - i\underbrace{\sum_k |\Omega_k|^2\mathcal{P}\frac{1}{\nu - \omega_k}}_{\Delta_{Stark}}). $$ {eq:2.50}

<!-- page 32 -->

The amplitude for the ground state evolves simply as $c_1(t) = c_1(0)e^{-\gamma t/2 + i\Delta_{Stark}t}$, so the population decays as $p_1(t) = p_1(0)e^{-\gamma t}$.

Note that the expression for $\gamma$ ,
$$ \gamma = 2\pi\sum_k |\Omega_k|^2\delta(\nu - \omega_k), $$ {eq:2.51}
is precisely the population decay rate one would obtain using Fermi’s Golden Rule. Despite this apparent similarity, the relationship between the two derivations is rather subtle, since Fermi’s Golden Rule arises from first order perturbation theory whereas our procedure explicitly involves a long time limit. The resolution to this lies in the fact that setting $t = t'$ in Eq. (2.47) implies that the continuum states have an effect on the ground state which is local in time, so the unbound states have no “memory” of earlier configurations. In particular, the decay rate for all times must be constant, so the value at early times (as calculated by e.g. Fermi’s Golden Rule) sets the decay rate for the system. Furthermore, the perturbative approach is valid in the sense that the probability to excite any one of the continuum states is very small, although the ground state population of course changes dramatically.

The energy shift,
$$ \Delta_{Stark} = \sum_k |\Omega_k|^2\mathcal{P}\frac{1}{\nu - \omega_k} $$ {eq:2.52}
is due to the AC Stark effect associated with continuum states. The relative importance of the decay and the energy shift depends on the precise system under consideration. For applied field frequencies below the photoionization threshold, the decay vanishes $\gamma = 0$, but the continuum states will still have an effect through the AC Stark shift. Photon frequencies above threshold lead to decay; moreover, the sign of the AC Stark effect changes with the sign of the detuning, so the contributions from above and below $\delta_k = 0$ will in large part cancel each other. Thus we expect that the energy shift is most important for sub-threshold illumination whereas the decay terms dominate above threshold.

For practical problems $\Delta_{Stark}$ is a very sensitive function of the precise nature of the continuum states, and in many cases it is not explicitly included in the analysis of the system. In some important practical cases, such as the interaction of an atom with the vacuum field considered below, it is a constant (e.g. Lamb shift) that simply leads to an appropriate renormalization of the atomic energy levels.

<!-- page 33 -->

Disregarding the energy shift (or incorporating it into a renormalized atomic frequency), the excited state amplitudes $c_k$ are given by
$$ c_k(t) = i\Omega_k\int_0^t e^{-\gamma t'/2}e^{-i\delta_k(t'-t)}dt' $$ {eq:2.53}
$$ = i\frac{\Omega_k}{\gamma/2 + i\delta_k}(1 - e^{-(\gamma/2 + i\delta_k)t})e^{i\delta_k t}. $$ {eq:2.54}
In the large time limit, the $c_k$ approach the value $i\Omega_k e^{i\delta_k t}/(\gamma/2 + i\delta_k)$. Physically, the system has been excited into a superposition of continuum states $\sum_k c_k|k\rangle$ which form an outgoing wavepacket propagating away from the atom. This seemingly irreversible behavior is qualitatively different from the Rabi oscillations studied previously, illustrating a mechanism by which an electron may leave the atom, converted to a freely propagating wavepacket. It is important to note, however, that the formalism presented above does not preclude reversing the dynamics. In fact, we should be able to time-reverse the dynamics, since our analysis thus far involves only wavefunctions undergoing unitary evolution. For example, starting with an initial wavepacket one could calculate the probability of capture into an atomic bound state. Such calculations are not possible with perturbation theory, and illustrate the flexibility of this approach (see e.g. homework problem 5).

<!-- notes
- "couples each bound state $|k\rangle$ to the bound state $|1\rangle$": the book's slip ($|k\rangle$ is unbound), kept.
- "infinitesmal": the book's typo, kept.
- "Note that the expression for $\gamma$ ,": the space before the comma is the book's, kept.
- Eq. (2.48) as printed: integrating $e^{-i(\delta_k - i\epsilon)(t'-t)}$ from 0 to $t$ gives $i(1 - e^{(i\delta_k + \epsilon)t})/(\delta_k - i\epsilon)$, so the signs of $\epsilon$ (and the claim that the second term vanishes at long times) look misprinted; kept as printed.
- Eq. (2.50): the book prints the outer parentheses unsized, kept.
- The skeleton's second {eq:2.47} slot on page 32 came from the cross-reference "Eq. (2.47)" and was removed.
-->

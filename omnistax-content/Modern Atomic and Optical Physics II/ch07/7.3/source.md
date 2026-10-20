# 7.3 Adiabatic processes in multi-level systems

<!-- page 119 -->

In previous lectures we have seen how adiabatic processes can lead to interesting phenomena in three-level systems, in particular the adiabatic following of the dark state which leads to EIT. If we concentrate on the most interesting case of zero two-photon detuning, $\delta = 0$, and assume that the Rabi frequencies are real, the Hamiltonian for a three-level system coupled by two applied fields may be written (in the bare state basis)
$$ \hat{H} = -\Delta|3\rangle\langle 3| - \Omega_1\left(|3\rangle\langle 1| + |1\rangle\langle 3|\right) - \Omega_2\left(|3\rangle\langle 2| + |2\rangle\langle 3|\right). $$ {eq:7.24}
This Hamiltonian is diagonalized by the eigenbasis of dressed states
$$ |\Phi_+\rangle = \sin\theta\sin\phi|1\rangle + \cos\theta\sin\phi|2\rangle + \cos\phi|3\rangle $$ {eq:7.25}
$$ |\Phi_0\rangle = \cos\theta|1\rangle - \sin\theta|2\rangle $$ {eq:7.26}
$$ |\Phi_-\rangle = \sin\theta\cos\phi|1\rangle + \cos\theta\cos\phi|2\rangle - \sin\phi|3\rangle, $$ {eq:7.27}

<!-- page 120 -->

where
$$ \tan\theta = \frac{\Omega_1}{\Omega_2} $$ {eq:7.28}
$$ \tan 2\phi = -\frac{\sqrt{|\Omega_1|^2 + |\Omega_2|^2}}{\Delta} = -\frac{\Omega}{\Delta}. $$ {eq:7.29}
The corresponding dressed energies are
$$ \epsilon_+ = \frac{1}{2}\left(-\Delta + \sqrt{\Omega^2 + \Delta^2}\right) $$ {eq:7.30}
$$ \epsilon_0 = 0 $$ {eq:7.31}
$$ \epsilon_- = \frac{1}{2}\left(-\Delta - \sqrt{\Omega^2 + \Delta^2}\right). $$ {eq:7.32}
The state $|\Phi_0\rangle$ corresponds to the dark state $|D\rangle$ of the system because it has no overlap with the excited state $|3\rangle$. By manipulating the system to adiabatically follow this dark state, we can have robust control over the population amplitudes in $|1\rangle$ and $|2\rangle$ while avoiding losses associated with spontaneous emission from $|3\rangle$.

## 7.3.1 Stimulated Raman adiabatic passage (STIRAP)

The instantaneous eigenstate $|\Phi_0\rangle$ is a superposition of the lower states $|1\rangle$ and $|2\rangle$ with probability amplitudes controlled by the mixing angle $\tan\theta = \Omega_1/\Omega_2$. As we noted earlier, the dark state approaches the two bare states when one of the applied fields vanishes,
$$ \theta = 0 \quad \Rightarrow \quad |\Phi_0\rangle = |1\rangle $$ {eq:7.33}
$$ \theta = \frac{\pi}{2} \quad \Rightarrow \quad |\Phi_0\rangle = -|2\rangle. $$ {eq:7.34}
If we change the two fields such that the mixing angle varies slowly from 0 to $\pi/2$, we can transfer population from $|1\rangle$ to $|2\rangle$ without ever populating the excited state $|3\rangle$. The appropriate pulse sequence begins with a pulse on the unoccupied transition, and is consequently referred to as a “counterintuitive” pulse sequence. More importantly, the precise shape and timing of the pulses is not terribly important; all that matters is that the mixing angle be slowly swept over $\pi/2$. Experiments have verified that STIRAP is an efficient and robust approach to state transfer, provided that the two-photon detuning can be kept small. Such adiabatic transfer techniques are particularly useful in molecular systems where the abundance of electronic, vibrational, and rotational decay channels makes dynamical control impossible.

<!-- page 121 -->

> FIGURE {fig:7.2} src=../../media/ch07/fig-7-2.png
> caption: A possible pulse sequence to implement STIRAP in a three-level system. The two pulses are timed to smoothly change the mixing angle from 0 to $\pi/2$, resulting in a transfer of population between the lower metastable states.

<!-- page 122 -->

> FIGURE {fig:7.3}
> caption: Experimental observation of STIRAP: (a) Transfer efficiency vs pulse overlap. In this experiment, atoms pass through a pump beam (P = $\Omega_1$) and a Stokes beam (S = $\Omega_2$). The percentage of atoms which are transferred from state $|1\rangle$ to $|2\rangle$ is subsequently measured. Note that the procedure only works for overlapping pulses in the counterintuitive order, but within those constraints it is robust to small changes in pulse shaping. (b) Transferred atoms vs detuning of the Stokes and pump beams. Our analysis was performed for precise $\delta = 0$ two photon resonance, which corresponds to the diagonal line of sharp peaks observed in the transfer efficiency. This shows that although adiabatic passage is insensitive to single-photon detuning, it is actually quite sensitive to the two-photon detuning.

<!-- page 123 -->

## 7.3.2 Four-level systems

The three-level analysis can be generalized to higher dimensional Hilbert spaces with similar structure. For example, consider a system composed of three metastable states $\{|1\rangle, |3\rangle, |4\rangle\}$ resonantly coupled to an excited state $|2\rangle$ by applied fields $\{\Omega_1, \Omega_3, \Omega_4\}$. The Hamiltonian for such a system can be diagonalized, and has two degenerate dark states spanned by
$$ |\Phi_1\rangle = \cos\theta|1\rangle - \sin\theta\cos\phi|3\rangle - \sin\theta\sin\phi|4\rangle $$ {eq:7.35}
$$ |\Phi_2\rangle = \sin\phi|3\rangle - \cos\phi|4\rangle, $$ {eq:7.36}
where
$$ \tan\theta = \frac{\Omega_1}{\sqrt{|\Omega_3|^2 + |\Omega_4|^2}} $$ {eq:7.37}
$$ \tan\phi = \frac{\Omega_3}{\Omega_4}. $$ {eq:7.38}

> FIGURE {fig:7.4} src=../../media/ch07/fig-7-4.png
> caption: The four-level system under consideration. In our calculations we have assumed that all of the applied fields are resonant with the associated atomic transition.

The appearance of two dark states can be qualitatively understood by first considering $\Omega_1 = 0$. The remaining three-level system can be diagonalized, yielding a dark state $|D_{13}\rangle$ which is not coupled to the excited state.

<!-- page 124 -->

Turning on $\Omega_4$ does not affect $|D_{34}\rangle$, and it completes another three-level system (formed by $|1\rangle$ and the two bright states from the first three-level system) which also has a dark state $|D_1\rangle$. For resonant excitation, these two dark states will be degenerate since the Hamiltonian contains no detuning parameters and the dark states do not depend on the applied fields.

Because these two dark states are degenerate, we cannot ignore the nonadiabatic coupling between them. In fact, we can take advantage of the degeneracy to control mixing between $|\Phi_1\rangle$ and $|\Phi_2\rangle$, in the process preparing an arbitrary superposition of the two states. Suppose that initially $\theta = 0$ and the system starts out in $|1\rangle = |\Phi_1\rangle$. As $\theta \to \pi/2$, the system evolves into a superposition of $|3\rangle$ and $|4\rangle$ determined by the third field $\Omega_4$. By controlling the phase and amplitude of $\Omega_4$ (and thus the mixing angle $\phi$), one can control the final quantum state $c_3|3\rangle + c_4|4\rangle$.

Adiabatic manipulation of a four-level system has been used to experimentally construct a beamsplitter for atoms. As the atoms move through three spatially separated beams (which are thus pulsed in the frame moving with the atom), they are adiabatically transferred from their initial state $|1\rangle$ into a controllable mixture of $|3\rangle$ and $|4\rangle$. The momentum kicks imparted to an atom are determined by which state it ends up in, so the internal state of the atom is mapped onto its position. By changing the third field, one can control and detect which spatial path the atoms follow, verifying the adiabatic transfer.

<!-- notes
- Eqs. (7.29)-(7.32): with the couplings $\Omega_{1,2}$ of (7.24) (no factor 1/2), the eigenvalues are $\frac{1}{2}\left(-\Delta \pm \sqrt{4\Omega^2 + \Delta^2}\right)$ and $\tan 2\phi = -2\Omega/\Delta$, as in (7.15) for the two-level case; the book's $\Omega^2$ under the root and $-\Omega/\Delta$ are kept as printed.
- Eq. (7.24) carries no $\hbar$, unlike (7.11); kept.
- Eq. (7.38): for $|\Phi_2\rangle$ of (7.36) and $|\Phi_1\rangle$ of (7.35) to be dark (orthogonal to $\Omega_1|1\rangle + \Omega_3|3\rangle + \Omega_4|4\rangle$) one needs $\tan\phi = \Omega_4/\Omega_3$; the book's $\Omega_3/\Omega_4$ kept. (7.37) is right with that $\phi$.
- 7.3.2: "yielding a dark state $|D_{13}\rangle$" then "Turning on $\Omega_4$ does not affect $|D_{34}\rangle$": with $\Omega_1 = 0$ the remaining system is $|2\rangle$, $|3\rangle$, $|4\rangle$, so the dark state is $|D_{34}\rangle$, and the field turned on next is $\Omega_1$, not $\Omega_4$. Both kept as printed.
- Figure 7.4 labels the excited level $|4\rangle$ (twice $|4\rangle$ in the figure); the text's excited state is $|2\rangle$. The figure is the book's; noted for the builder.
- Figure 7.3's caption runs off the bottom of page 122's image; its last line ("detuning, it is actually quite sensitive to the two-photon detuning.") is taken from the text layer, the visible top of the letters agreeing. The crop is clean; the source figure (an experiment's plots) is reproduced from a paper the book does not cite here.
- Figure 7.3 caption: the skeleton's stray page number "121" dropped.
- text-layer.md corrected: Figure 7.3 caption "corre- sponds" joined to "corresponds".
- Figure 7.4 interrupts the paragraph that runs through (7.38) on page 123; its marker sits after (7.38).
- Figures 7.2 and 7.3 stand alone on pages 121 and 122, after the STIRAP paragraph that ends page 120.
-->

# 10.4 Ion trap quantum computation

<!-- page 228 -->

In previous sections we have seen how it is possible to control both the motional and electronic states of an ion, allowing us to write an arbitrary quantum state. In order to perform nontrivial calculations using ions, we will need a mechanism to link up different ions, and the motional degree of freedom provides a convenient tool.

Multiple ions confined to the same anisotropic trap $\nu_x \ll \nu_y, \nu_z$ repel each other, so in the motional ground state they form a string of ions with each ion spaced by 5-10$\mu$m. The Coulomb repulsion thus provides sufficient separation to spatially resolve individual ions with a focussed laser beam. In addition, the Coulomb interaction couples their motional degrees of freedom. Vibrational modes of the ions can be interpreted as phonons with different frequencies and spatial modes.

## 10.4.1 Two ions in a linear trap

To understand the physics of the linear ion trap, it is instructive to analyze the evolution of two ions at positions $r_1, r_2$ and momenta $p_1, p_2$ confined to the same trap. The ions experience both the harmonic confinement of the trap and Coulomb repulsion, corresponding to
$$ \hat{H}_{motion} = \sum_i\left(\frac{p_i^2}{2m} + \frac{m}{2}\nu^2 r_i^2\right) + \frac{e^2}{4\pi\epsilon_0|r_1 - r_2|}. $$ {eq:10.31}
If the equilibrium positions of the ions are $\langle r_1\rangle = -a/2$ and $\langle r_2\rangle = a/2$, and $r_i = \langle r_i\rangle + x_i$, then we can rewrite these terms to lowest order in $x_i$ as
$$ \hat{H}_{motion} = \sum_i\frac{p_i^2}{2m} + \frac{m\nu^2}{2}\left(x_1^2 + x_2^2 + (x_2 - x_1)^2\right). $$ {eq:10.32}
The normal modes of this system correspond to symmetric and antisymmetric motion of the ions, so considerable simplification can be obtained by working with center of mass and relative coordinates:
$$ X = \frac{1}{\sqrt{2}}(x_1 + x_2) $$ {eq:10.33}

<!-- page 229 -->

> FIGURE {fig:10.7} src=../../media/ch10/fig-10-7.png
> caption: Many ions can be trapped in the same harmonic potential, and they can communicate through collective motional modes.

<!-- page 230 -->

$$ x = \frac{1}{\sqrt{2}}(x_2 - x_1) $$ {eq:10.34}
$$ P = \frac{1}{\sqrt{2}}(p_1 + p_2) $$ {eq:10.35}
$$ p = \frac{1}{\sqrt{2}}(p_2 - p_1), $$ {eq:10.36}
in terms of which
$$ \hat{H}_{motion} = \left(\frac{P^2}{2m} + \frac{m}{2}\nu^2 X^2\right) + \left(\frac{p^2}{2m} + \frac{m}{2}3\nu^2 x^2\right). $$ {eq:10.37}
We find that the two ions vibrate in a center-of-mass mode at frequency $\nu$ and in a stretch mode at frequency $\sqrt{3}\nu$, and we will denote these phonon modes by the annihilation operators $\hat{a}_{cm}$ and $\hat{a}_s$ respectively.

Optical illumination of each ion couples the ions’ internal and motional states via
$$ \hat{H}_{int} = -\sum_i\left(\hbar\Delta_i|e\rangle_{ii}\langle e| + \hbar\Omega_i\left(|e\rangle_{ii}\langle g|e^{ikx_i} + h.c.\right)\right), $$ {eq:10.38}
where any phase offset from the equilibrium position of the ions has been absorbed into $\Omega_i$. Rewriting this interaction in terms of phonon creation and annihilation operators, we find the full Hamiltonian for the system:
$$ \begin{aligned} \hat{H} = {} & \hbar\nu\hat{a}_{cm}^\dagger\hat{a}_{cm} + \hbar\sqrt{3}\nu\hat{a}_s^\dagger\hat{a}_s - \sum_i\hbar\Delta_i|e\rangle_{ii}\langle e| \\ & -\hbar\Omega_1\left(|e\rangle_{11}\langle g|e^{i\eta_{cm}(\hat{a}_{cm}+\hat{a}_{cm}^\dagger)}e^{-i\eta_s(\hat{a}_s+\hat{a}_s^\dagger)} + h.c.\right) \\ & -\hbar\Omega_2\left(|e\rangle_{22}\langle g|e^{i\eta_{cm}(\hat{a}_{cm}+\hat{a}_{cm}^\dagger)}e^{i\eta_s(\hat{a}_s+\hat{a}_s^\dagger)} + h.c.\right). \end{aligned} $$ {eq:10.39}
Note that the two phonon modes may be separately addressed by choosing the appropriate laser detuning.

## 10.4.2 Quantum gates

A quantum computer uses two-level quantum systems to store information. The internal states are interpreted as bit values, $|g\rangle = |0\rangle$ and $|e\rangle = |1\rangle$, and information is encoded in the state $\alpha|0\rangle + \beta|1\rangle$ of the so-called “qubit”. These qubits form the backbone for the quantum computer, providing a memory for quantum states.

By manipulating the qubits, one can perform calculations. In fact, it can be shown that one need only be able to perform a very small number

<!-- page 231 -->

of manipulations to be able to perform all calculations. If one can address each qubit and perform any rotation of its state, then to have universal computation ability one only needs a non-trivial gate which couples any two-qubit pair. One such two-qubit gate is the $\pi$ phase gate, which maps two qubits according to the table
$$ |0\rangle|0\rangle \rightarrow |0\rangle|0\rangle $$ {eq:10.40}
$$ |0\rangle|1\rangle \rightarrow |0\rangle|1\rangle $$ {eq:10.41}
$$ |1\rangle|0\rangle \rightarrow |1\rangle|0\rangle $$ {eq:10.42}
$$ |1\rangle|1\rangle \rightarrow -|1\rangle|1\rangle. $$ {eq:10.43}
The sign of one qubit’s excited state is flipped only if the other qubit is also in the excited state.

Trapped ions provide a possible architecture for a quantum computer. We have seen that single-qubit rotations can be performed by applying laser light resonant with the bare atomic frequency. Furthermore, collective motion of the ions in the trap provides the interaction required to implement a two-qubit gate. We will now show how the phase gate can be implemented between any two ions in a linear ion trap.

### Requirements for the phase gate

As we present it here, the phase gate for trapped ions requires cooling the vibrational modes down to the ground state where no phonons are present. If a product state of the internal states of $N$ ions in the trap is represented by $|x_{N-1}\ldots x_0\rangle_\mathrm{ion}$, then the overall initial state of the system can be written as a superposition of such states
$$ |\psi\rangle = \sum_x c_x|x_{N-1}\ldots x_0\rangle_\mathrm{ion} \otimes |0\rangle_\mathrm{phonon}. $$ {eq:10.44}
In addition to the excited and ground states considered previously, we will also need access to an auxiliary ionic level which is degenerate with the excited state and coupled to the ground state by an orthogonal laser polarization (see Figure 10.8).

### Phase gate procedure

Suppose that we wish to perform the phase gate on the $m^{th}$ and $n^{th}$ ions in the trap. By transferring the quantum state of the $m^{th}$ ion onto the vibrational mode, the bare levels of the $n^{th}$ atom are affected. A single-qubit rotation of the $n^{th}$ atom is then performed conditional on the vibrational state of the trap. Finally, the information stored in the collective mode is transferred back to the state of the $m^{th}$ ion.

<!-- page 232 -->

The precise sequence for the phase gate implementation is described and illustrated in Figure 10.9.

> FIGURE {fig:10.8} src=../../media/ch10/fig-10-8.png
> caption: The four levels used to implement the phase gate. A dipole allowed transition is used to cool the ion, while an auxiliary state is used to implement the phase shift of the qubit states.

<!-- page 233 -->

> FIGURE {fig:10.9} src=../../media/ch10/fig-10-9.png
> caption: A conditional phase gate is implemented in three steps. The first step writes the state of qubit m onto the collective motion of the ions. The second step conditionally changes the phase of the qubit n by applying a $2\pi$ pulse to the auxiliary level, which changes the sign only if the qubit m is in the excited state and qubit n is in the ground state. The third step writes the collective motion back onto qubit m, inducing an overall sign change due to two consecutive $\pi$ pulses. The final state is unchanged unless both qubits were in their excited state, in which case it is multiplied by an overall negative sign.

<!-- notes
- Figure 10.8 stands on page 232 inside the "Phase gate procedure" paragraph that begins on page 231; placed after that paragraph and the next ("The precise sequence …"), which ends the section on page 232.
- Figure 10.7 fills page 229 between Eq. (10.33) and Eq. (10.34) of one aligned block; placed there, before the rest of the block on page 230.
- Eq. (10.31) to (10.39): the subscripts "motion" and "int" are italic in the book, kept so; "ion" and "phonon" in (10.44) are upright.
- "focussed", "5-10$\mu$m" as printed.
- "the $n^{th}$ atom": the book's word for the ion, kept.
- Eq. (10.39): the stretch-mode Lamb-Dicke parameter $\eta_s$ and the signs $\mp$ of its exponent for ions 1 and 2 follow from $x_{1,2} = (X \mp x)/\sqrt{2}$; consistent, noted only because $\eta_{cm}$ and $\eta_s$ are not defined in the text.
- Figure 10.8 labels the qubit's excited state $|r_0\rangle$ and the auxiliary level $|r_1\rangle$ (and Figure 10.9 uses $|r_0,n\rangle$, $|r_1,n\rangle$), while the text calls them $|e\rangle$ and "an auxiliary ionic level".
-->

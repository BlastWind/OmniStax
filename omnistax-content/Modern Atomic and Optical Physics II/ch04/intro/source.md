# Chapter 4 Propagation of light in a resonant medium

<!-- page 64 -->

We have now developed a formalism to describe coherent and incoherent interactions between atoms and light. These techniques will prove useful in understanding how a resonant light beam propagates through an atomic cloud. In particular, we have previously derived how the applied field induces coherences and transitions in the atomic system; if the system is to be self-consistent, we must also consider the effect of the induced atomic dipole back on the field.

An atom influences the applied field through its dipole moment
$$ \langle\hat{d}\rangle = \mu\rho_{21} + \mu^*\rho_{12}. $$ {eq:4.1}
A single atom has a very weak effect on a classical field, but a large ensemble of atoms can drastically affect light propagation, so we might seek to identify a macroscopic polarization associated with $N$ atoms in a volume $V$ by
$$ P = \frac{N}{V}\left(\mu\rho_{21} + \mu^*\rho_{12}\right), $$ {eq:4.2}
and solve for the density matrix components using the single-atom optical Bloch equations. However, a large ensemble of atoms may only be treated using our single-atom formalism if the atoms evolve independently. The assumption of independent atoms is valid provided that

(1) The atoms do not interact strongly on the timescales of the processes we wish to describe.

(2) Each atom is damped by its own reservoir. More quantitatively, the atoms must be far enough apart $|r_i - r_j| > \lambda$ that we may neglect interference from two atoms interacting with the same mode of the reservoir.

<!-- page 65 -->

(3) The applied field is classical.
Mathematically, atoms comprising an atomic ensemble are independent when the ensemble density matrix may be factorized into a direct product of individual atomic density matrices,
$$ \hat{\rho}_{ensemble} = \prod_{j=1}^{N}\hat{\rho}^{(1)} \otimes \ldots \otimes \hat{\rho}^{(N)}. $$ {eq:4.3}

Since our fields may vary in space as well as time, it is convenient to define a macroscopic polarization,
$$ P(r_i) = \frac{N_i}{V_i}\sum_{r_j \in V_i}\left(\mu\rho_{21}(r_j) + \mu^*\rho_{12}(r_j)\right), $$ {eq:4.4}
which depends on the total dipole moment of the set of $N_i$ atoms at positions $\{r_j\}$ within a small volume $V_i$ centered at position $r_i$. Using the optical Bloch equations, we can calculate the polarization for a given field; self-consistency requires that this polarization then act as a source term in the Maxwell equations governing light propagation through the atomic cloud:
$$ \nabla \times \mathbf{E} = -\frac{\partial\mathbf{B}}{\partial t} $$ {eq:4.5}
$$ \nabla \times \mathbf{B} = \frac{1}{c^2}\frac{\partial}{\partial t}\left(\mathbf{E} + \frac{1}{\epsilon_0}\mathbf{P}\right). $$ {eq:4.6}
In principle, we could now self-consistently calculate the evolution of the atomic medium and applied light field. In practice, we will typically deal with nearly monochromatic light fields, for which a considerable simplification can be obtained by using the slowly-varying envelope approximation.

<!-- notes
- The three conditions (1)-(3) are kept as the book's indented paragraphs; (3) runs straight into "Mathematically, ..." with no break, as printed.
- Eq. (4.3): the book writes both a product $\prod_{j=1}^{N}$ and an explicit $\hat{\rho}^{(1)}\otimes\ldots\otimes\hat{\rho}^{(N)}$, so the product sign is redundant; meant $\hat{\rho}_{ensemble} = \bigotimes_{j=1}^{N}\hat{\rho}^{(j)}$. Kept as printed.
- Eq. (4.4): the prefactor $N_i/V_i$ in front of a sum over the $N_i$ atoms counts them twice; meant $\frac{1}{V_i}\sum_{r_j\in V_i}(\ldots)$ (or $\frac{N_i}{V_i}$ times the average). Kept as printed.
-->

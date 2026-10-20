# 11.7 Higher-order coherence of atomic matter waves

<!-- page 281 -->

Quantum states of light often exhibit no first order coherence, but can have higher order coherences. We would like to know whether similar non-classical states can appear in a BEC. In particular, one could inquire whether two condensates must always produce an interference pattern, or whether there are physically important effects which cannot be described by the Gross-Pitaevski equation. Since the atomic interactions introduce nonlinearity into the matter-wave field, it seems possible that such nonlinearities might indeed give rise to non-classical states.

## 11.7.1 Toy model: cold, interacting atoms in a double-well potential

As an example of how non-classical states of matter can arise from atomic interactions, we will consider $N$ cold atoms confined to the double-well potential illustrated in Figure 11.13.

### Noninteracting atoms

If the atoms do not interact, the Hamiltonian for the system includes only the kinetic energy or tunnelling terms:
$$ \hat{H}_\mathrm{kin} = -t\hat{a}_R^\dagger\hat{a}_L - t^*\hat{a}_L^\dagger\hat{a}_R $$ {eq:11.168}

<!-- page 282 -->

> FIGURE {fig:11.13} src=../../media/ch11/fig-11-13.png
> caption: A double-well potential for cold atoms. A finite barrier separates the two localized states, so atoms can tunnel between them at rate $t$. This tunnelling produces two delocalized states: the ground state is a symmetric combination of left and right $|+\rangle = (1/\sqrt{2})\left(|L\rangle + |R\rangle\right)$, and the excited state $|-\rangle = (1/\sqrt{2})\left(|L\rangle - |R\rangle\right)$ is higher in energy by $2t$.

The ground state of the system $|\phi_N\rangle$ has all $N$ atoms in the single-particle symmetric superposition state $|+\rangle$. Defining the annihilation operators for the left and right potential well by $\{\hat{a}_L, \hat{a}_R\}$ respectively, we can write this ground state in second quantization notation
$$ |\phi_N\rangle = \frac{\left(\hat{a}_L^\dagger + \hat{a}_R^\dagger\right)^N}{\sqrt{N!}\cdot 2^{N/2}}|\mathrm{vac}\rangle. $$ {eq:11.169}
This state has a well-defined phase between the particles on the left and the particles on the right, so $\langle\hat{a}_L^\dagger\hat{a}_R\rangle \neq 0$.

In fact, for large $N$ this ground state is very close to a coherent state satisfying
$$ \hat{a}_R|\alpha\rangle = \alpha|\alpha\rangle $$ {eq:11.170}
$$ \hat{a}_L|\alpha\rangle = \alpha|\alpha\rangle, $$ {eq:11.171}
with $|\alpha_R|^2 = |\alpha|^2 = N/2$. This similarity arises because the number uncertainty for the coherent state goes as $1/\sqrt{N}$, and for large $N$ the coherent state will give us an intuitive picture of the system behavior. In particular, if we indeed had two coherent states in the two wells with phases $\phi_R$ and $\phi_L$, this device would correspond to a classical Josephson device, with a kinetic energy given by $E = -(Nt/2)\cos(\phi_R - \phi_L)$. It is worth emphasizing that the correspondence between the classical Josephson device and the quantum double well potential emerges only in the limit of large occupation number $N$.

<!-- page 283 -->

### Strongly interacting atoms

We now consider the opposite limit, where strong repulsive interactions dominate. We can thus neglect the tunnelling terms, so the Hamiltonian can be written as
$$ \hat{H}_\mathrm{int} = U_0\left(\hat{a}_L^\dagger\hat{a}_L^\dagger\hat{a}_L\hat{a}_L + \hat{a}_R^\dagger\hat{a}_R^\dagger\hat{a}_R\hat{a}_R\right), $$ {eq:11.172}
or, in terms of the number occupancy,
$$ \hat{H}_\mathrm{int} = U_0\left(\hat{n}_L(\hat{n}_L - 1) + \hat{n}_R(\hat{n}_R - 1)\right). $$ {eq:11.173}
If $U_0 \gg t$, then $|\phi_N\rangle$ is not a ground state of the multiparticle system, because the potential energy cost associated with the repulsive interaction overwhelms the kinetic energy benefit conferred on the delocalized states. For example, consider two strongly repulsive atoms in the double well potential. The best way to avoid interactions is for each atom to occupy its own well, so the ground state is
$$ |\psi_2\rangle = \hat{a}_L^\dagger\hat{a}_R^\dagger|\mathrm{vac}\rangle. $$ {eq:11.174}
Although each atom pays an energy price of $\sim t$, the huge gain $\sim U_0$ from avoiding interaction more than compensates for the associated increase in kinetic energy. Similarly, in the ground state of the $N-$particle system, the atoms pile up evenly in the two wells, generating a highly non-classical Fock state
$$ |\psi_N\rangle = (\hat{a}_L^\dagger\hat{a}_R^\dagger)^N|\mathrm{vac}\rangle. $$ {eq:11.175}
Such states do not display a first-order interference pattern, and cannot be described by the Gross-Pitaevski equation.

This example shows that creating non-classical states of matter requires a system where interactions are stronger than kinetic energy. However, it is also important to keep losses low, since these act to destroy non-classical coherences. In practice, there are two methods currently employed to produce Fock states of atoms. First, by confining atoms more tightly, for example in an optical lattice, one can decrease the tunnelling rate between different sites, thus decreasing the kinetic energy scale. Second, one can increase the scattering length $a$ using, for example, a Feshbach resonance, to enhance the interactions.

## 11.7.2 Optical lattice potentials

A variety of experiments have used an optical lattice potential to confine atoms or other polarizable objects in one, two, or three-dimensional arrays.

<!-- page 284 -->

The optical lattice is based on the optical dipole force associated with the AC Stark shift from a red-detuned light source, which attracts the polarizable particles to the intensity maxima. Counterpropagating beams produce a standing wave with a period of $\lambda/2$, where $\lambda$ is the wavelength of the red-detuned light source. By combining standing waves in multiple dimensions, one can create a simple cubic lattice with a potential
$$ V(\mathbf{r}) \propto \sin^2\left(\frac{2\pi x}{\lambda}\right) + \sin^2\left(\frac{2\pi y}{\lambda}\right) + \sin^2\left(\frac{2\pi z}{\lambda}\right), $$ {eq:11.176}
plus a confining harmonic potential. The optical lattice potential resembles the double-well potential discussed above in that it can be parameterized by two quantities: the tunnelling rate between lattice sites, and the interaction strength for atoms occupying the same lattice site.

<!-- notes
- Fig. 11.13 stands at the top of page 282; its marker sits there, after Eq. (11.168).
- "Gross-Pitaevski": the book's spelling, kept.
- text-layer.md corrected: "Gross-/Pitaevski" (page 281) and "uncer-/tainty" (split by a stray "$√$" line, page 282) joined on one line; "sep- arates" in the 11.13 caption joined.
- Eqs. (11.170)-(11.171) print the same eigenvalue $\alpha$ for both wells; $\hat{a}_R|\alpha\rangle = \alpha_R|\alpha\rangle$ and $\hat{a}_L|\alpha\rangle = \alpha_L|\alpha\rangle$ are meant (the next line uses $\alpha_R$).
- "number uncertainty for the coherent state goes as $1/\sqrt{N}$": the relative number uncertainty is meant (absolute $\Delta N \sim \sqrt{N}$).
- Josephson energy $E = -(Nt/2)\cos(\phi_R - \phi_L)$: with $|\alpha_{L,R}|^2 = N/2$, Eq. (11.168) gives $E = -Nt\cos(\phi_R - \phi_L)$ for real $t$; the factor 1/2 looks wrong.
- Eq. (11.172) omits the conventional factor 1/2 in $U_0/2$; kept as printed (consistent with Eq. 11.173).
- Eq. (11.175) $(\hat{a}_L^\dagger\hat{a}_R^\dagger)^N|\mathrm{vac}\rangle$ holds $2N$ atoms and is unnormalized; for $N$ atoms $(\hat{a}_L^\dagger\hat{a}_R^\dagger)^{N/2}|\mathrm{vac}\rangle/(N/2)!$ is meant.
-->

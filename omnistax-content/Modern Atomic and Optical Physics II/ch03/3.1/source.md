# 3.1 The density operator

<!-- page 44 -->

Although the state of a quantum mechanical system is represented by $|\psi\rangle$, a vector in Hilbert space, this description does not provide a useful picture for many practical situations, and certainly cannot treat macroscopic objects. Any quantum mechanical state can also be represented as a density operator; moreover, the density operator can describe classical ensembles as well.

Suppose our system can be in one of a number of quantum states $|\psi_\alpha\rangle$ and it occupies each state with some probability $p_\alpha$. The density operator for the system is
$$ \hat{\rho} = \sum_\alpha p_\alpha|\psi_\alpha\rangle\langle\psi_\alpha|. $$ {eq:3.1}
If there exists a basis in which $\hat{\rho} = |\phi\rangle\langle\phi|$ for some state $|\phi\rangle$, the system is said to be in a “pure state”. If such a basis cannot be found, the system is in a “mixed state”, and has lost some of its purely quantum mechanical character. Finally, if the off-diagonal elements of the density operator vanish, the system can be described by a classical ensemble of basis states, and is called a “statistical mixture”.

From this definition, one can immediately derive several important properties which any density operator must satisfy:

(1) $\hat{\rho} = \hat{\rho}^\dagger$

(2) $\mathrm{Tr}[\hat{\rho}] = \sum_n\langle n|\hat{\rho}|n\rangle = 1$ where $\{|n\rangle\}$ form an orthonormal basis

(3) $\langle n|\hat{\rho}^2|m\rangle \leq \langle n|\hat{\rho}|m\rangle$ where $|m\rangle$ and $|n\rangle$ are any pure states

The first is self evident, the second follows from conservation of probability, and the third is an equality only when the density operator describes a pure state.

Operator expectation values may be calculated directly from the density operator. If $\hat{S}$ is a system observable, its expectation value should be calculated in all possible quantum states weighted by their probability of occupation:
$$ \langle\hat{S}\rangle = \sum_\alpha p_\alpha\langle\psi_\alpha|\hat{S}|\psi_\alpha\rangle $$ {eq:3.2}
$$ = \sum_{\alpha,n} p_\alpha\langle\psi_\alpha|\hat{S}|n\rangle\langle n|\psi_\alpha\rangle $$ {eq:3.3}
$$ = \sum_n\langle n|\underbrace{\left(\sum_\alpha p_\alpha|\psi_\alpha\rangle\langle\psi_\alpha|\right)}_{\hat{\rho}}\hat{S}|n\rangle $$ {eq:3.4}
$$ = \mathrm{Tr}[\hat{\rho}\hat{S}]. $$ {eq:3.5}

<!-- page 45 -->

By inserting a completeness relation $\sum_n|n\rangle\langle n| = 1$ and rearranging terms, a considerable simplification is obtained.

In this context, the mathematical meaning of the trace may be unclear. However, given a basis $\{|n\rangle\}$, we may write the operators $\hat{S}$ and $\hat{\rho}$ as matrices, whereby their trace is the usual sum of diagonal elements. The so-called density matrix has elements $\rho_{n,n'}$ such that
$$ \hat{\rho} = \sum_{n,n'}|n\rangle\underbrace{\langle n|\hat{\rho}|n'\rangle}_{\rho_{n,n'}}\langle n'|. $$ {eq:3.6}
These elements have a physical meaning, and there are two cases worth distinguishing:

(1) Diagonal elements $\rho_{nn} = \langle(|n\rangle\langle n|)\rangle$ correspond to the probability of occupying state $|n\rangle$.

(2) Off-diagonal elements $\rho_{nm} = \langle n|\rho|m\rangle = \langle(|m\rangle\langle n|)\rangle$ correspond to the expectation value of the coherence between level $|n\rangle$ and $|m\rangle$, e.g. the atomic dipole operator.

For example, the density operator for a two-level atom may be written as a 2x2 matrix,
$$ \hat{\rho} = \rho_{11}|1\rangle\langle 1| + \rho_{12}|1\rangle\langle 2| + \rho_{21}|2\rangle\langle 1| + \rho_{22}|2\rangle\langle 2|. $$ {eq:3.7}
A pure state $|\psi\rangle = c_1|1\rangle + c_2|2\rangle$ then has a density matrix with $\rho_{ij} = c_i c_j^*$. Pure states thus satisfy
$$ |\rho_{ij}|^2 = \rho_{ii}\rho_{jj}. $$ {eq:3.8}
By considering the requirement $\rho^2 \leq \rho$, we see that an arbitrary mixed state only satisfies the inequality
$$ |\rho_{ij}|^2 \leq \rho_{ii}\rho_{jj}. $$ {eq:3.9}
Consequently, for a pure state we have the maximal allowed off-diagonal components, or the “maximal coherence.”

:::example {ex:3.1-1} Example 1: Two-level atom in thermal equilibrium

One example of a mixed state is the two-level atom with transition frequency $\omega$ in thermal equilibrium. In the basis $\{|1\rangle, |2\rangle\}$ its density operator takes the form
$$ \hat{\rho} = \frac{e^{-\hat{H}/k_B T}}{\mathrm{Tr}[e^{-\hat{H}/k_B T}]} $$ {eq:3.10}

<!-- page 46 -->

$$ = \frac{1}{1 + e^{-\hbar\omega/k_B T}}\begin{pmatrix} 1 & 0 \\ 0 & e^{-\hbar\omega/k_B T} \end{pmatrix} $$ {eq:3.11}
$$ = \frac{1}{2\cosh\hbar\omega/2k_B T}\begin{pmatrix} e^{\hbar\omega/2k_B T} & 0 \\ 0 & e^{-\hbar\omega/2k_B T} \end{pmatrix}. $$ {eq:3.12}
Clearly, the equilibrium population depends on the relative scale of the atomic transition frequency and the temperature. For instance, at room temperature $T = 300K$, $k_B T/(2\pi\hbar) \approx 6 \cdot 10^{12}$ Hz, which corresponds to a frequency between microwave and near-infrared. If the atomic transition frequency is well above this scale, the atom will be in its ground state in equilibrium; otherwise, it will be in a statistical mixture of ground and excited states.

:::

:::example {ex:3.1-2} Example 2: Radiation field in thermal equilibrium

The density matrix for a thermal radiation field illustrates how the density operator formalism connects up with statistical mechanics. A single mode with frequency $\nu_j$ has a density operator
$$ \hat{\rho}^{(j)} = \frac{e^{-\hbar\nu_j\hat{a}_j^\dagger\hat{a}_j/k_B T}}{\mathrm{Tr}[e^{-\hbar\nu_j\hat{a}_j^\dagger\hat{a}_j/k_B T}]} $$ {eq:3.13}
with matrix elements between Fock states $|n\rangle, |m\rangle$
$$ \hat{\rho}^{(j)}_{nm} = \delta_{nm}e^{-\hbar\nu_j n/k_B T}\left(1 - e^{-\hbar\nu_j/k_B T}\right). $$ {eq:3.14}
Note that only the diagonal elements are nonzero since the field is a statistical mixture of photon number states. Consequently, the expectation value for the annihilation operator vanishes,
$$ \langle\hat{a}_j\rangle = \sum_n\langle n|\hat{a}_j\hat{\rho}|n\rangle = \sum_n\rho_{n+1,n}\sqrt{n+1} = 0, $$ {eq:3.15}
but the average photon number obeys the Bose-Einstein distribution,
$$ \bar{n}_j = \langle\hat{a}_j^\dagger\hat{a}_j\rangle = \sum_n\rho_{nn} = \frac{1}{e^{(\hbar\nu_j/k_B T)} - 1}. $$ {eq:3.16}

:::

<!-- notes
- The three numbered properties and the two numbered element cases are printed as indented "(1)", "(2)", "(3)" paragraphs, kept so.
- Property (3), $\langle n|\hat{\rho}^2|m\rangle \leq \langle n|\hat{\rho}|m\rangle$ for any $|m\rangle, |n\rangle$, is wrong as printed: the inequality holds for diagonal elements, $\langle n|\hat{\rho}^2|n\rangle \leq \langle n|\hat{\rho}|n\rangle$ for any state $|n\rangle$ (off-diagonal elements are complex and need not be ordered); purity is $\mathrm{Tr}[\hat{\rho}^2] = 1$.
- Element case (2): "$\rho_{nm} = \langle n|\rho|m\rangle$" prints $\rho$ without its hat, kept.
- Eq. (3.14) prints the hat on the matrix element $\hat{\rho}^{(j)}_{nm}$, kept.
- Eq. (3.16): $\sum_n\rho_{nn}$ is printed; it equals 1. Meant is $\sum_n n\rho_{nn}$.
- "$T = 300K$": the book's unit spacing, kept. $k_B T/h$ at 300 K is $6.25\cdot 10^{12}$ Hz, consistent with "$\approx 6 \cdot 10^{12}$".
- text-layer.md corrected: the two example title lines removed, since checkprose drops a `:::example` line with its title and counted the titles as missing.
- Example 1 ends before the Example 2 heading.
-->

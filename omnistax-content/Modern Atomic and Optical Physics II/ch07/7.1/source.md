# 7.1 The adiabatic theorem for time-dependent Hamiltonians

<!-- page 113 -->

Consider an N-dimensional Hilbert space spanned by an orthonormal basis, $\{|e_1\rangle \ldots |e_N\rangle\}$ whose evolution is governed by a time-dependent Hamiltonian, $\hat{H}(t)$. At any given time $t = t_0$, we can always find the instantaneous eigenstates and eigenvalues of the Hamiltonian $\hat{H}(t_0)$,
$$ \hat{H}(t_0)|\epsilon_k(t_0)\rangle = \epsilon_k(t_0)|\epsilon_k(t_0)\rangle. $$ {eq:7.1}
An arbitrary state may be expanded in the basis of instantaneous eigenstates,
$$ |\psi(t)\rangle = \sum_l c_l(t)|\epsilon_l(t)\rangle, $$ {eq:7.2}
and it obeys the Schrödinger equation $i\hbar|\dot{\psi}(t)\rangle = \hat{H}(t)|\psi(t)\rangle$. For a constant Hamiltonian, a system prepared in an eigenstate will remain in that state; this is in general no longer true for time-dependent Hamiltonians.

<!-- page 114 -->

Expanding the Schrödinger equation, we find that the time dependence of the eigenstates introduces new terms:
$$ i\hbar\sum_l\left(\dot{c}_l(t)|\epsilon_l(t)\rangle + c_l(t)\frac{d}{dt}|\epsilon_l(t)\rangle\right) = \sum_l c_l(t)\epsilon_l(t)|\epsilon_l(t)\rangle. $$ {eq:7.3}
To find the equations of motion for the probability amplitudes $c_k(t)$, we multiply Eq. (7.3) from the left by $\langle\epsilon_k(t)|$, yielding
$$ i\hbar\dot{c}_k(t) = \epsilon_k(t)c_k(t) - i\hbar\sum_l c_l(t)\langle\epsilon_k(t)|\frac{d}{dt}|\epsilon_l(t)\rangle. $$ {eq:7.4}

This set of N coupled differential equations may also be represented in matrix notation, with
$$ \psi(t) = \begin{pmatrix} c_1(t) \\ c_2(t) \\ \vdots \\ c_N(t) \end{pmatrix} \quad \text{and} \quad \hat{H}(t) = \begin{pmatrix} \epsilon_1(t) & & & 0 \\ & \epsilon_2(t) & & \\ & & \ddots & \\ 0 & & & \epsilon_N(t) \end{pmatrix}, $$ {eq:7.5}
whereby Eq. (7.4) becomes
$$ i\hbar\frac{d}{dt}\begin{pmatrix} c_1 \\ c_2 \\ \vdots \\ c_N \end{pmatrix} = \begin{pmatrix} \epsilon_1 & -i\hbar\langle\epsilon_1|\dot{\epsilon}_2\rangle & \ldots & \\ -i\hbar\langle\epsilon_2|\dot{\epsilon}_1\rangle & \epsilon_2 & & \\ \vdots & & \ddots & \\ & & & \epsilon_N \end{pmatrix}\begin{pmatrix} c_1 \\ c_2 \\ \vdots \\ c_N \end{pmatrix}, $$ {eq:7.6}
where the terms are implicitly time dependent for notational simplicity.^[In general, the real part of $\langle\epsilon_k|\dot{\epsilon}_k\rangle$ vanishes, and we will neglect the Berry phase (imaginary component) in this treatment.]

## 7.1.1 The condition for adiabaticity

Suppose the quantum state $|\psi\rangle$ is initially prepared at time $t = 0$ in one of the instantaneous eigenstates $|\epsilon_k(0)\rangle$. The off-diagonal couplings in Eqs. (7.4,7.6) indicate that $|\epsilon_k(t)\rangle$ is not an exact stationary state, but our intuition tells us that it should be approximately stationary for a Hamiltonian which changes very slowly. The situation where $|\epsilon_k(t)\rangle$ is essentially stationary is known as the “adiabatic” limit, and corresponds to off-diagonal terms sufficiently small that negligible population leaks to other states, i.e. $|c_k|^2 \approx 1$.

<!-- page 115 -->

To estimate how small the off-diagonal couplings must be, we use perturbation theory to calculate how a weak coupling $\langle\epsilon_k|\dot{\epsilon}_l\rangle$ affects the state vector. In particular, for non-degenerate eigenstates and for $l \neq k$, the equation of motion for $c_l$ is given by
$$ \dot{c}_l \approx -i(\omega_l - \omega_k)c_l - \langle\epsilon_l|\dot{\epsilon}_k\rangle c_k(t) $$ {eq:7.7}
$$ \approx -i(\omega_l - \omega_k)c_l - \langle\epsilon_l|\dot{\epsilon}_k\rangle\cdot 1. $$ {eq:7.8}
Here we have measured all the energies in reference to $\epsilon_k$. The change induced in $|\psi\rangle$ by this coupling is
$$ |\psi^{(1)}\rangle = -i\hbar\sum_l\frac{\langle\epsilon_l|\dot{\epsilon}_k\rangle|\epsilon_l\rangle}{\epsilon_k - \epsilon_l}. $$ {eq:7.9}
The requirement that $|\epsilon_k(t)\rangle$ be stationary (or $|\psi^{(1)}\rangle = 0$) thus provides our adiabaticity condition,
$$ \hbar\frac{|\langle\epsilon_l|\dot{\epsilon}_k\rangle|}{|\epsilon_k - \epsilon_l|} \ll 1. $$ {eq:7.10}
A Hamiltonian which changes on a timescale $\tau$ will lead to couplings $|\langle\epsilon_l|\dot{\epsilon}_k\rangle| \propto 1/\tau$, so the system does indeed adiabatically follow the instantaneous eigenstates for a slowly varying Hamiltonian.

Note that the adiabatic theorem is formulated for coherent Hamiltonian evolution of the system. For systems which exhibit decay, the adiabatic requirement may be modified from the form exhibited in Eq. (7.10). Even when the adiabaticity condition is satisfied, the neglected diagonal terms may still introduce a phase factor known as a “geometric” or “Berry's” phase. This geometric phase adds to the so-called “dynamical” phase (given by $e^{\{-i/\hbar\int_0^t d\tau\epsilon_k(\tau)\}}$) which comes from the diagonal part of the Schrodinger equation. A detailed discussion of such phases can be found in many modern quantum mechanics books (*e.g.* Sakurai); here we only note that in situations where the dynamical phase vanishes, there is frequently also no geometric phase.

<!-- notes
- Eq. (7.5): the matrix written for $\hat{H}(t)$ is the diagonal one in the instantaneous eigenbasis, as printed.
- Eq. (7.9): the sum over $l$ is printed without the restriction $l \neq k$ the text states before (7.7); kept.
- Eq. (7.7)-(7.8): frequencies $\omega_l$ appear where the surrounding text uses energies $\epsilon_l$ ($\omega_l = \epsilon_l/\hbar$ meant); kept.
- "Schrödinger" with the umlaut on page 113-114, "Schrodinger" without it on page 115, as printed.
- text-layer.md corrected: "Schr ̈odinger" (twice) to "Schrödinger", the split combining umlaut joined.
- Dynamical phase: the exponent is printed in braces, $e^{\{-i/\hbar\int_0^t d\tau\epsilon_k(\tau)\}}$, kept.
-->

# 1.3 Basic Atomic Physics

<!-- page 10 -->

The physical systems associated with atomic physics include neutral atoms, ions, and molecules as well as more modern“artificial atoms” such as quantum dots fabricated in semiconductor heterostructures. The structure of these systems determines their interaction with applied fields, whether they be electric, magnetic, oscillating, static, classical, or quantum. These interactions allow us to manipulate the system via applied fields, or, conversely, use matter to control the electromagnetic fields. Such techniques are at the heart of atomic physics, but to apply them we must understand the physical structure of the system under consideration.

## 1.3.1 Example: the hydrogen atom

One of the simplest systems to consider is hydrogen, which consists of one electron bound by the Coulomb force to a proton. The energy of the system is given by
$$ \hat{H} = \frac{\hat{p}^2}{2m} - \frac{e^2}{\hat{r}}, $$ {eq:1.14}

where $\hat{p}$ represents the (operator-valued) electronic momentum and $\hat{r}$ represents the distance between the electron and the proton.

<!-- page 11 -->

The stationary solutions of Schrodinger’s equation for this system are of two types. There is an infinite set of discrete bound states with energies $E_n = -\frac{R_\infty}{n^2}$ and a continuum set of unbound states with energies $E > 0$. The constant $R_\infty$ is called Rydberg’s constant; while its numerical value can be found in any textbook on quantum mechanics, it is a good exercize to know how to derive an expression for it from basic principles.

To estimate the binding energy $R_\infty$, we note that in the ground state Heisenberg’s inequality is approximately obeyed as an equality. In particular, the uncertainty in momentum $\Delta p$ and the uncertainty in position $\Delta r$ obey $\Delta p \cdot \Delta r \sim \hbar$. Since the mean value of the momentum must be zero for a bound state, we can replace $\langle p^2\rangle$ by $\Delta p^2 \sim (\hbar/\Delta r)^2$ in the Hamiltonian. Similarly, the average distance $\langle r\rangle$ should also be approximately $\Delta r$, yielding an average energy

$$ E = \frac{\hbar^2}{2m\Delta r^2} - \frac{e^2}{\Delta r} $$ {eq:1.15}
Minimizing the energy with respect to $\Delta r$, we find $\Delta r \sim \frac{\hbar^2}{me^2}$, so that the ground state energy is approximately given by
$$ E_0 = -R_\infty \sim -\frac{me^4}{2\hbar^2}. $$ {eq:1.16}
In fact, this turns out to be equal to the exact ground state energy for an infinitely heavy nucleus.

## 1.3.2 Level degeneracies

Although we have enumerated the energies of the bound states in hydrogen, we have not addressed whether or not these states are degenerate. In particular, suppose that there is an operator $\hat{A}$ which commutes with the Hamiltonian $\hat{H}$, i.e. $[\hat{A}, \hat{H}] = 0$. We can then find a common set of eigenvectors $|E_n, A_l\rangle$ such that
$$ \hat{A}|E_n, A_l\rangle = A_l|E_n, A_l\rangle $$ {eq:1.17}
$$ \hat{H}|E_n, A_l\rangle = E_n|E_n, A_l\rangle. $$ {eq:1.18}

The energy $E_n$ is the same for all states $|E_n, A_l\rangle$, and it does not depend on $A_l$. This level degeneracy is associated with the underlying symmetry which renders $A$ invariant under Hamiltonian evolution. Consider the effect of the transformation $\hat{S}(a) = e^{i\hat{A}a}$ on the eigenstates of $\hat{H}$. If $[\hat{A}, \hat{H}] = 0$, the energy levels are invariant under the transformation $\hat{S}(a)$. Thus we see that there is a relation between degeneracies and symmetries of the system, i.e. invariance under some set of unitary transformations.

<!-- page 12 -->

For the hydrogen atom, the Hamiltonian Eq. (1.14) commutes with the total angular momentum $\hat{L}^2$ and the z-component of angular momentum $\hat{L}_z$, as well as with the electron spin angular momentum $\hat{S}^2$ and $\hat{S}_z$, and also with the nuclear spin angular momentum $\hat{I}^2$ and $\hat{I}_z$.

The energies depend only on the principal quantum number $n$, and all angular momentum states $l = 0, \cdots, n-1$ with the same principal quantum number have $n$ are allowed and have the same energy. Similarly, all states with eigenvalues of the z-component $\hat{L}_z$ of angular momentum $l_z = -l, \cdots, l$ and electron spin and nuclear spin sublevels have the same energy.

Degeneracies are removed, however, in the real hydrogen atom due to corrections to the Hamiltonian.

## 1.3.3 Corrections to the hydrogen atom hamiltonian: lifting of the $L$ degeneracy

Deviations of the potential from $1/r$ result in a lifting of the degeneracy with respect to $l$. In multi-electron atoms, inner shell electrons tend to screen the nuclear charge, so that for fixed principal quantum number $n$, large $l$ states of the valence electrons are less deeply bound than small $l$ states (since electronic states further from the nucleus experience a greater screening effect). For example in alkali atoms such as Na, with shell structure $(1s)^2(2s)^2(2p)^6(3s)$, the Hamiltonian can be written as $\hat{H} = \frac{p^2}{2m} - \frac{e^2}{r} + V'(r)$, where $V'(r) \to 0$ as $r \to \infty$ but $V'(r) \neq 0$ as $r \to 0$. The energy is now a function of both the principal quantum number and the total angular momentum $E = E(n, l)$.

It is worth noting, however, that (for a given valence shell configuration) the effect of the inner electrons decreases as the principal quantum $n$ number increases. Consequently large-n states have a reduced the energy splitting between different $l$ states. Very large $n$ states, known as “Rydberg states”, exhibit nearly hydrogen-like spectra.

## 1.3.4 Fine structure: lifting of the $J$ degeneracy

Relativistic corrections result in the so-called fine structure splitting of the energy levels of the hydrogen atom. There are three contributions to the fine structure, and their net effect on an energy level depends only on its associated total electronic angular momentum $J = L + S$. Therefore, relativistic effects break the degeneracy of each principal level $n$ such that different $J$ values have different energies.

<!-- page 13 -->

The first contribution to the fine structure is a relativistic correction to the kinetic energy. The second contribution is referred to as the spin-orbit term and physically represents the interaction between the intrinsic magnetic dipole of the electron (i.e., the electron’s spin) and the internal magnetic field of the atom which is related to the orbital angular momentum of the electron. The final correction is referred to as the Darwin term, and is a relativistic correction to the potential energy. The Darwin term acts only at the origin and thus is only nonzero for $L = 0$ states.

To illustrate how such relativistic effects can result in the splitting of levels with different $J$, we examine the spin-orbit coupling below. For details on the kinetic energy and Darwin term, one can refer to any introductory quantum mechanics text.

The interaction energy of the spin-orbit effect is:
$$ V_{SL} = A\hat{S} \cdot \hat{L}. $$ {eq:1.19}
$V_{SL}$ commutes with $S^2, L^2, J^2$ and $J_z$, where $\hat{J} = \hat{S} + \hat{L}$, so we now label atomic states by $J^2$ and $J_z$ rather than by $L_z$ and $S_z$ (which do not commute with $V_{SL}$ and are thus not good quantum numbers). As an example, consider sodium (Na). The ground state of Na has zero orbital angular momentum ($|\hat{L}| \equiv L = 0$), and therefore no fine structure since $J = S$ can only take on one value. For the first excited state ($L = 1$), $J = 1 + 1/2 = 3/2$ or $J = 1 - 1/2 = 1/2$. What is the energy splitting between the $J = 1/2$ and $J = 3/2$ states? Using the fact that
$$ \hat{J} \cdot \hat{J} = J^2 = L^2 + S^2 + 2\hat{S} \cdot \hat{L} $$ {eq:1.20}
$$ \Rightarrow \hat{S} \cdot L = J^2 - L^2 - S^2, $$ {eq:1.21}
we have
$$ V_{SL} = A\hat{S} \cdot \hat{L} = (A/2)(J^2 - L^2 - S^2) $$ {eq:1.22}
This implies that the energy splitting between the $J = 3/2$ and $J = 1/2$ state is given by
$$ \Delta E_{3/2} - \Delta E_{1/2} = \frac{A}{2}[(9/4 - 1/4 - 1) - (1/4 - 1/4 - 1)] = \frac{A}{2} \cdot 2 = A. $$ {eq:1.23}

Traditionally, the transition from the ${}^3S_{1/2}$ ground state of Na to the ${}^3P_{1/2}$ excited state is called the D1 line whereas the transition from the ${}^3S_{1/2}$ ground state of Na to the ${}^3P_{3/2}$ excited state is called the D2 line.

<!-- page 14 -->

### Remark concerning the wavefunctions of hydrogen-like atoms

The wavefunction of a hydrogen-like atom can be written as $\psi_{nlm}(\rho, \theta, \phi) = R_{nl}(\rho)Y_{lm}(\theta, \phi)$ where $R_{nl}(\rho)$ contains the radial dependence, and the angular dependence is contained in the spherical harmonics
$$ Y_{lm}(\theta, \phi) = P_l^m(\cos\theta)e^{im\phi}, $$ {eq:1.24}
where $P_l^m(\cos\theta)$ is the associated Legendre polynomial of degree $l$ and order $m$. It is important to remember: (1) as $\rho \to 0$, $R_{nl} \sim \rho^l$, which vanishes unless $l = 0$, and (2) under the parity transformation ($\hat{r} \to -\hat{r}$, i.e., $\phi \to \phi + \pi$, $\theta \to \pi - \theta$), $Y_{lm}(\pi - \theta, \phi + \pi) = (-1)^l Y_{lm}(\theta, \phi)$. From this and the fact that the radial function $R_{nl}(\rho)$ is insensitive to the parity transformation, we see that the parity of the $\psi_{nlm}$ wavefunctions is $(-1)^l$.

## 1.3.5 Hyperfine interaction

The interaction of the magnetic dipole of the valence electron with the nuclear spin $\hat{I}$ is referred to as the hyperfine interaction. The magnetic field produced by a nucleus with magnetic moment $\mathbf{m}_N$ is given by
$$ \mathbf{B}(\mathbf{R}) = \frac{\mu_0}{4\pi}\left(\frac{3\mathbf{n}(\mathbf{n} \cdot \mathbf{m}_N) - \mathbf{m}_N}{R^3} + \frac{8\pi}{3}\mathbf{m}_N\delta(\mathbf{R})\right), $$ {eq:1.25}
where $\mathbf{R}$ is the vector distance from the nucleus and $\mathbf{n}$ is the unit vector in the direction of $\mathbf{R}$. The second term is a strong contact term which is non-zero only for $l = 0$ states, whereas the first term is a weaker long-range ($\sim 1/R^3$) term which is non-zero for all other $l$. The result is that the hyperfine interaction is generally strongest for $S$ states with small $r$. The interaction energy may be approximated as
$$ V_{HFS} = A_{HFS}\hat{I} \cdot \hat{J} $$ {eq:1.26}

Taking into account both the fine and hyperfine interactions, the appropriate conserved quantum number is the total angular momentum $\hat{F}$ given by
$$ \hat{F} = \hat{I} + \hat{S} + \hat{L}. $$ {eq:1.27}

### Structure of the alkali ground state

As an example, consider the ground state of hydrogen for which $L = 0$, $I = 1/2$, and $S = 1/2$. Since $L = 0$, $F^2 = I^2 + S^2 + 2\hat{S} \cdot \hat{I}$, and $H_{HFS} = (A_{HFS}/2)(F^2 - I^2 - S^2)$. Allowed values of $F = 0, 1$ lead to hyperfine shifts $H_{HFS}(F = 1, F = 0) = (A_{HFS}/4, -A_{HFS}/4)$. The hydrogen ground state thus has two levels split in energy by $A_{HFS}/2$, with $F = 0$ and 1. Similarly, one can calculate that the ground states of ${}^{23}Na$ and ${}^{87}Rb$ (for which $L = 0$, $I = 3/2$, and $S = 1/2$) consist of two levels $F = 1$ and $F = 2$ separated by $3A_{HFS}/2$.

<!-- page 15 -->

## 1.3.6 Interaction with static external magnetic fields

In the presence of a static external magnetic field, the energy levels shift in a manner referred to as the Zeeman effect. In the $L = 0$ case, the shift can be calculated exactly, whereas for $L \neq 0$ states, approximations are required. The interaction of a magnetic moment $\mu$ in a constant magnetic field $\mathbf{B}$ is given by
$$ H = -\mu \cdot \mathbf{B}, $$ {eq:1.28}
where this formula applies to both the electron and the nucleus. If we assume that the magnetic field is in the $\hat{z}$ direction, we have
$$ H = -\mu_z B_z. $$ {eq:1.29}
Therefore, for a static field in the $\hat{z}$ direction, the energy (Zeeman) shift of an $L = 0$ state is given by
$$ H_Z = -\mu_e S_Z B_Z - \mu_N I_Z B_Z, $$ {eq:1.30}
where $\mu_e = -g_J\mu_B$, $\mu_N = g_I\mu_B$, $g_J$ is the Lande g-factor associated with electron spin for an electron bound to a nucleus, $g_I$ is the Lande g-factor associated with nuclear spin, $\mu_B$ is the Bohr magneton, and $\mu_e \gg \mu_N$.

We can distinguish two cases: (1) strong field in which $m_S$, and $m_I$ are good quantum numbers, and (2) weak field in which case $F$ and $m_F$ are good quantum numbers. In general, we can relate two bases ($|J, m_J\rangle$ and $|j_1, j_2\rangle$, where $\hat{J} = \hat{J}_1 + \hat{J}_2$ and $[J_1, J_2] = 0$) with so-called Clebsch-Gordon coefficients $C(J_1, J_2, J; j_1, j_2, m_J)$ defined by the following equation
$$ |J, m_J\rangle = \sum_{j_1, j_2}\langle J_1J_2j_1j_2|Jm_J\rangle|J_1J_2j_1j_2\rangle $$ {eq:1.31}
$$ \equiv \sum_{j_1, j_2} C(J_1, J_2, J; j_1, j_2, m_J)|J_1J_2j_1j_2\rangle. $$ {eq:1.32}

The Clebsch-Gordan coefficients can be used to relate the $|F, m_F\rangle$ basis to the $|I, S; m_I, m_S\rangle$ basis (abbreviated as the $|m_I, m_S\rangle$). For example, letting $J_1 = S = 1/2$, $J_2 = I = 1/2$, and $J = J_1 + J_2 = F$ (we’re assuming $L = 0$), we have
$$ |1, 1\rangle = |1/2, 1/2\rangle $$ {eq:1.33}
$$ |1, 0\rangle = \frac{1}{\sqrt{2}}(|1/2, -1/2\rangle + |-1/2, 1/2\rangle) $$ {eq:1.34}
$$ |0, 0\rangle = \frac{1}{\sqrt{2}}(|1/2, -1/2\rangle - |-1/2, 1/2\rangle) $$ {eq:1.35}
$$ |1, -1\rangle = |-1/2, -1/2\rangle $$ {eq:1.36}

<!-- page 16 -->

We will primarily be concerned with low values of the magnetic field, where the Zeeman effect can be treated as a perturbation to the fine and hyperfine interactions. In this case, we use the $|F, m_F\rangle$ basis as our zero-order wavefunctions, and the Zeeman shift $\Delta E_Z$ can be shown to be proportional to the applied magnetic field according to the relation
$$ \Delta E_Z = g_F\mu_B m_F B_z, $$ {eq:1.37}
where $\mu_B$ is the Bohr magneton, $g_F$ is the Lande g-factor in the presence of nuclear spin given by
$$ g_F = g_J\frac{F(F+1) + J(J+1) - I(I+1)}{2F(F+1)}. $$ {eq:1.38}
Simliarly, $g_J$ is the Lande g-factor without considering nuclear spin given by
$$ g_J = 1 + \frac{J(J+1) + S(S+1) - L(L+1)}{2J(J+1)}. $$ {eq:1.39}

*Note: A good reference on these topics is Vanier and Audoin, ”Quantum Physics of Atomic Frequency Standards.”*

## 1.3.7 Interaction with optical fields

In this section we consider the interaction of isolated neutral atoms with optical fields. Such atoms alone have no net charge and no permanent electric dipole moment. In the presence of a static electric field $\mathbf{E}$, however, the atoms do develop an electric dipole moment $\mathbf{d}$ which can then interact with the electric field with an interaction energy $U$ given by
$$ U = -\mathbf{d} \cdot \mathbf{E}. $$ {eq:1.40}
In our semi-classical treatment of this interaction, we treat the atom quantum mechanically and therefore consider $\hat{d}$ as an operator, but treat the electromagnetic field classically and so consider $\mathbf{E}$ as a vector of complex numbers. This dipole interaction has two effects: (1) when the field is off-resonant with the atomic transitions, the dominant effect is that the atomic energy levels undergo an energy shift ($\sim E^2$), (2) when the field is near-resonant with an atomic transition, the dominant effect is transitions between atomic levels.

<!-- page 17 -->

### Selection rules

The Hamiltonian for the dipole interaction interaction, can be written in terms of a complete basis of states $\{|a\rangle\}$ for the atom:
$$ \hat{H} = -\hat{\mathbf{d}} \cdot \mathbf{E} $$ {eq:1.41}
$$ = \sum_{aa'}|a'\rangle\langle a|\langle a'|\hat{\mathbf{d}}|a\rangle \cdot \mathbf{E}. $$ {eq:1.42}
Note that the quantum state $|a\rangle$ is shorthand for a complete description in terms of quantum numbers $n_a, l_a, s_a$, etc. Transitions are possible between states $|a\rangle$ and $|b\rangle$ only when the matrix element
$$ \mu_{a'a} \equiv \langle a'|\hat{\mathbf{d}}|a\rangle \neq 0. $$ {eq:1.43}

There are many restrictions on the states $|a\rangle, |a'\rangle$ for which $\mu_{a'a} \neq 0$; these are referred to as selection rules. For example, parity arguments restrict the possible $L$ values between which transitions are allowed. Since the scalar quantity
$$ \mu_{a'a} \propto \int \psi_{L'}\ r\ \psi_L dV $$ {eq:1.44}
is invariant under the parity operation $r \to -r$, $\psi_L \to (-1)^L\psi_L$, $\mu$ is nonzero only if $(-1)^{L+L'+1} = 1$, leading to the selection rule
$$ \Delta L = \pm 1. $$ {eq:1.45}
Of course, this argument really only implies that $\Delta L$ is odd. To prove that it must be specifically $\pm 1$, one can take the matrix element of both sides of equation
$$ [L^2, [L^2, \hat{r}]] = 2\hbar^2(\hat{r}L^2 + L^2\hat{r}) $$ {eq:1.46}
between $\langle\alpha', L', m_L'|$ and $|\alpha, L, m_L\rangle$. One can then derive the requirement $\Delta L = \pm 1$.

<!-- page 18 -->

The spin argument is simple: since the dipole operator $\hat{d} = e\hat{r}$ contains no spin degrees of freedom, we must have
$$ \Delta S = 0. $$ {eq:1.47}
The rules for $J$ and $F$ are given by
$$ \Delta J = \pm 1, 0 $$ {eq:1.48}
$$ \Delta F = \pm 1, 0. $$ {eq:1.49}
The exception to these rules is that $J = 0 \to J' = 0$ transitions and $F = 0 \to F' = 0$ transitions are forbidden, because these transitions imply that $\Delta L = 0$ as a necessary consequence.

Before moving on to the selection rules for magnetic quantum numbers, it is useful to consider some practical notes concerning transitions strengths. In general,
$$ \hat{\epsilon}_q \cdot \hat{r} = \sqrt{\frac{4\pi}{3}}\rho Y_{1q}(\theta, \phi), $$ {eq:1.50}
where $\rho = |r|$. Therefore
$$ \langle a|\hat{\epsilon}_q \cdot \hat{r}|a'\rangle = \text{radial part} \cdot \text{angular part}, $$ {eq:1.51}
where the radial part $\bar{\rho}$ sets the size scale and the angular part can be evaluated using the Wigner-Eckart theorem (see e.g. Sakurai, ”Modern Quantum Mechanics”). For example, the radial component for a hydrogen-like atom undergoing a $1S \to 2P$ transition is
$$ \bar{\rho} = \int R_{nl}\rho R_{n'l+1}dV $$ {eq:1.52}
$$ \Rightarrow \bar{\rho} = 1.3\, a_B(1S \to 2P) $$ {eq:1.53}
where $a_B$ is the Bohr radius.

In an atom with no fine or hyperfine structure, the angular part of the transition matrix element is given by
$$ \langle L', m_L'|Y_{1q}|L, m_L\rangle = \langle Y_{L'm_L'}|Y_{1q}|Y_{L,m_L}\rangle, $$ {eq:1.54}
which can be expressed in terms of what are referred to as 3j symbols (see Vanier or Metcalf), which themselves are related to the Clebsch-Gordan coefficients. To determine the angular part for atoms with fine and hyperfine structure requires the use of Clebsch-Gordan coefficients. For the fine structure, the energy levels are split by the spin-orbit interaction and so $L$ is no longer a good quantum number but is replaced by $J$. However, the optical field still couples only to the orbital angular momentum $L$ of the states. To calculate the angular matrix element then one must use the Clebsch-Gordan coefficients to express the $|J, m_J\rangle$ states in terms of $|L, m_L\rangle|S, m_S\rangle$ states. One must use a similar procedure (twice) for atoms with hyperfine structure for which $F$ is the good quantum number (see Metcalf and van der Straten, ”Laser Cooling and Trapping”, for example) .

<!-- page 19 -->

Now we move on to the selection rules for the magnetic quantum numbers which are related to the polarization of the incident electric field. We can write the electric field as a sum of linearly polarized components
$$ \mathbf{E} = \hat{\epsilon}_\mathbf{x}\mathbf{E}_\mathbf{x} + \hat{\epsilon}_\mathbf{y}\mathbf{E}_\mathbf{y} + \hat{\epsilon}_\mathbf{z}\mathbf{E}_\mathbf{z}, $$ {eq:1.55}
or as a sum of right and left circularly polarized and $\hat{z}$ linearly polarized components
$$ \mathbf{E} = \hat{\epsilon}_+\mathbf{E}_+ + \hat{\epsilon}_-\mathbf{E}_- + \hat{\epsilon}_\mathbf{z}\mathbf{E}_\mathbf{z}, $$ {eq:1.56}
where
$$ \hat{\epsilon}_\pm = \mp(\hat{\epsilon}_x \pm i\hat{\epsilon}_y)/\sqrt{2}. $$ {eq:1.57}

From Eq. 1.54 and knowledge of spherical harmonics, one immediately sees that the $m_L$ selection rules are given by
$$ \sigma^+ \quad \text{light} \quad (\Rightarrow q = +1) \quad \Rightarrow \Delta m_L = +1 $$ {eq:1.58}
$$ \sigma^- \quad \text{light} \quad (\Rightarrow q = -1) \quad \Rightarrow \Delta m_L = -1 $$ {eq:1.59}
$$ \hat{z} \quad \text{light} \quad (\Rightarrow q = 0) \quad \Rightarrow \Delta m_L = 0, $$ {eq:1.60}

The same selection rules apply as well for $m_J$ and $m_F$ with an additional restriction. For $J = J'$, $\Delta m_J = 0$ with $m_J = 0$ is forbidden, because
$$ \langle J, m_J|z|J, m_J\rangle \sim m_J $$ {eq:1.61}
(where $J$ here can stand for $J$ or $F$). Note that Eq. 1.61 is true because all the functions in this matrix element are symmetric about $z$.

<!-- notes
- Opening paragraph "more modern“artificial atoms”": the missing space before the quotation mark is the book's, kept.
- 1.3.1 "exercize": the book's spelling, kept.
- 1.3.2 "have $n$ are allowed": the book's garbled phrase, kept.
- 1.3.3 "principal quantum $n$ number" and "have a reduced the energy splitting": the book's word order and stray "the", kept.
- 1.3.4 Eq. (1.21) prints $\hat{S} \cdot L$ with no hat on $L$ and no factor 2; kept as printed. The term symbols ${}^3S_{1/2}$, ${}^3P_{1/2}$, ${}^3P_{3/2}$ print superscript 3 where the doublet is meant; kept.
- 1.3.6 "Clebsch-Gordon" beside "Clebsch-Gordan", "Simliarly", "Lande" without accent: the book's, kept.
- 1.3.6 the Note on Vanier and Audoin is set in italics in the book; kept as an italic paragraph.
- 1.3.7 "dipole interaction interaction", "transitions strengths", the space before the final period of "for example) .": the book's, kept.
- text-layer.md was corrected by hand in three places the PDF's layer scrambles: the line order around $\hat{S}(a) = e^{i\hat{A}a}$ on page 12, "associ-ated" split across pages 12–13, and the bold subscripts of Eqs. (1.55)–(1.56) read as the words xEx, yEy, zEz.
- Page markers sit before the first block that begins on each page; paragraphs that run over a page break are joined.
- 1.3.7 Eqs. (1.58)-(1.60) are a three-column aligned block in the book; each row is its own display with \quad spacing.
- The Try It: 1.3.1's "it is a good exercize to know how to derive an expression for it" is the inline exercise of config.md; its reveal is Eq. (1.16).
-->

# 9.1 Basic properties of quantum fields

<!-- page 169 -->

We saw earlier that the electric field can be represented in terms of a set of quantized harmonic oscillator modes,
$$ \hat{\mathbf{E}} = \sum_{k,\alpha}\sqrt{\frac{\hbar\omega_k}{2\epsilon_0 V}}\hat{\epsilon}_\alpha\left(\hat{a}_{k,\alpha}e^{i(\mathbf{k}\cdot\mathbf{r} - \omega_k t)} + h.c.\right), $$ {eq:9.1}
where $\omega_k$ and $\hat{\epsilon}_\alpha$ are the frequency and polarization of the mode $\{k, \alpha\}$. Note that this expression is in the Heisenberg picture, and has the time dependence of the annihilation operators explicitly written out, so $\hat{a}_{k,\alpha}$ above is the time-dependent annihilation operator evaluated at $t = 0$. The Hamiltonian for such a field can also be expressed in terms of the creation and annihilation operators,
$$ \hat{H} = \frac{1}{2}\int dV\left(\epsilon_0 E^2 + \frac{B^2}{\mu_0}\right) $$ {eq:9.2}
$$ = \sum_{k,\alpha}\hbar\omega_k\left(\hat{a}^\dagger_{k,\alpha}\hat{a}_{k,\alpha} + \frac{1}{2}\right), $$ {eq:9.3}

<!-- page 170 -->

and its eigenbasis is formed by the number states or “Fock” states $\{|n_{k,\alpha}\rangle\}$ obeying
$$ \hat{n}_{k,\alpha}|n_{k,\alpha}\rangle = \hat{a}^\dagger_{k,\alpha}\hat{a}_{k,\alpha}|n_{k,\alpha}\rangle = n_{k,\alpha}|n_{k,\alpha}\rangle $$ {eq:9.4}
where $n_{k,\alpha}$ is the number of photons in the mode $\{k, \alpha\}$.

Many properties of quantum fields can be understood by examining the evolution of a single mode. Such a description is also quantitatively appropriate for atoms interacting with the quantum field of a high finesse cavity, so we will frequently simplify our discussion by considering only a single mode.

## 9.1.1 Thermal states

A single mode field in thermal equilibrium with its environment at temperature $T$ can be described by a density operator
$$ \hat{\rho} = \frac{e^{-\hat{H}/k_B T}}{\mathrm{Tr}[e^{-\hat{H}/k_B T}]}. $$ {eq:9.5}
Expressed in the Fock basis, the density matrix is purely diagonal with elements
$$ \rho_{nn} = e^{-n\hbar\omega/k_B T}\cdot(1 - e^{-\hbar\omega/k_B T}) $$ {eq:9.6}
corresponding to the probability to find $n$ photons in the cavity.

The resulting probability distribution for photon number is known as the “photon distribution” or “photon statistics”. The thermal state is most likely to have zero photons in it, and the average number
$$ \overline{n} = \sum_n n\rho_{nn} = \frac{1}{e^{\hbar\omega/k_B T} - 1} $$ {eq:9.7}
reflects the fact that photons obey Bose-Einstein statistics with $\mu = 0$. The expectation value of the electric field vanishes
$$ \langle\hat{E}\rangle \propto \langle\hat{a}\rangle = 0 $$ {eq:9.8}
because the thermal field is incoherent, and thus has an undefined phase.

Note that photon statistics in a multimode thermal field look very different than this single mode example. Whereas each mode in a multimode field would most likely contain no photons, when one sums over all such modes, the most likely total photon number will be finite and the distribution looks more like a Poissonian. For example, sunlight corresponds to a multimode thermal field. In order to probe the photon statistics associated with the thermal nature of sunlight, it is necessary to design an experiment in which the sunlight acts as if it were a single-mode field. One way to do this would be to simultaneously filter the sunlight to a bandwidth $\Delta\omega$ and observe the photon arrival times using a detector which is gated for a time much shorter than $1/\Delta\omega$.

<!-- page 171 -->

## 9.1.2 Coherent states

To understand the correspondence between our semi-classical description and the quantum mechanical approach, it is desirable to find a quantum state which corresponds to the classical coherent field of a laser. The defining characteristic of the laser field is a well defined, finite expectation value for the electric field, so we seek a state $|\psi\rangle$ satisfying
$$ \langle\psi|\hat{E}|\psi\rangle = E. $$ {eq:9.9}
We have seen that the thermal state does not have a finite electric field expectation value, and the Fock states likewise have vanishing electric field. Motivated by Eq. (9.9), we will consider an eigenstate $|\alpha\rangle$ of the photon annihilation operator,
$$ \hat{a}|\alpha\rangle = \alpha|\alpha\rangle. $$ {eq:9.10}
This so-called “coherent state” in fact corresponds to classical laser light.

As we hoped, the coherent state has a well-defined expectation value for the electric field
$$ \langle\alpha|\hat{E}|\alpha\rangle = \sqrt{\frac{\hbar\omega}{2\epsilon_0 V}}\left(\alpha e^{i(\mathbf{k}\cdot\mathbf{r} - i\omega t)} + c.c.\right), $$ {eq:9.11}
and the average number of photons in the coherent state is
$$ \langle\alpha|\hat{a}^\dagger\hat{a}|\alpha\rangle = |\alpha|^2. $$ {eq:9.12}

### The quadrature components

In analogy to the position and momentum operators of the simple harmonic oscillator, we can introduce the quadrature operators
$$ \hat{x} = \frac{1}{\sqrt{2}}\left(\hat{a} + \hat{a}^\dagger\right) $$ {eq:9.13}
$$ \hat{p} = \frac{1}{i\sqrt{2}}\left(\hat{a} - \hat{a}^\dagger\right). $$ {eq:9.14}

<!-- page 172 -->

The uncertainty in these operators,
$$ \langle\delta x^2\rangle = \frac{1}{2} $$ {eq:9.15}
$$ \langle\delta p^2\rangle = \frac{1}{2}, $$ {eq:9.16}
is the “most classical” we could hope for, since the Heisenberg uncertainty principle limits $\delta x\delta p \geq 1/2$ The quadrature operators have a well defined physical meaning for the electromagnetic field. The electric field operator given by Eq. (9.1) can be re-written in terms of the two components
$$ \hat{E} \propto \hat{x}\cos\omega t + \hat{p}\sin\omega t. $$ {eq:9.17}
For example, if this electric field is mixed with some other field (referred to as a “local oscillator”)
$$ E_{LO} \sim \cos\omega t, $$ {eq:9.18}
then $\hat{x}$ would yield the“in phase” component while $\hat{p}$ gives the “out of phase” component.

> FIGURE {fig:9.1} src=../../media/ch09/fig-9-1.png
> caption: Any coherent state can be represented by an area in $\{\hat{x}, \hat{p}\}$ phase space. The distance to the origin is proportional to the absolute value of the coherent state $|\alpha|$, while the angle is the argument of $\alpha$. The uncertainty in the quadrature operators is represented by a circle with a diameter of $\sqrt{2}$. Note that other textbooks choose to define $\hat{x} = \frac{1}{2}\left(\hat{a} + \hat{a}^\dagger\right), \hat{p} = \frac{1}{2i}\left(\hat{a} - \hat{a}^\dagger\right)$, which gets rid of the $\sqrt{2}$ factors.

<!-- page 173 -->

### The shift operator

Coherent states can be generated from the vacuum state by the “shift operator”
$$ \hat{D}(\alpha) = e^{\alpha\hat{a}^\dagger - \alpha^*\hat{a}}, $$ {eq:9.19}
which shifts the state in the plane of $\hat{x}$ and $\hat{p}$ so that $\hat{D}(\alpha)|0\rangle = |\alpha\rangle$. Similarly,
$$ \hat{D}^{-1}(\alpha)\hat{a}\hat{D}(\alpha) = \hat{a} + \alpha. $$ {eq:9.20}
To prove Eq. 9.19, we will use the fact that if two operators satisfy $[\hat{A}, [\hat{A}, \hat{B}]] = [\hat{B}, [\hat{A}, \hat{B}]] = 0$, then
$$ e^{\hat{A}+\hat{B}} = e^{\hat{A}}e^{\hat{B}}e^{-[\hat{A},\hat{B}]/2}. $$ {eq:9.21}
Consequently, when the shift operator acts on the vacuum, it generates a coherent state:
$$ \hat{D}(\alpha)|0\rangle = e^{\alpha\hat{a}^\dagger - \alpha^*\hat{a}}|0\rangle $$ {eq:9.22}
$$ = e^{-|\alpha|^2/2}e^{\alpha\hat{a}^\dagger}e^{-\alpha^*\hat{a}}|0\rangle $$ {eq:9.23}
$$ = e^{-|\alpha|^2/2}\sum_n\frac{\alpha^n}{\sqrt{n!}}|n\rangle $$ {eq:9.24}
$$ = |\alpha\rangle. $$ {eq:9.25}

### Photon statistics in a coherent state

The probability to find $n$ photons in a coherent state follows a Poisson distribution
$$ \rho_{nn} = e^{-|\alpha|^2}\frac{\alpha^{2n}}{n!} $$ {eq:9.26}
which has variance equal to its mean
$$ \bar{n} = |\alpha|^2 $$ {eq:9.27}
$$ \langle\Delta n^2\rangle = \bar{n} = |\alpha|^2. $$ {eq:9.28}
For strong fields, $n \gg 1$, the standard deviation $\sqrt{\langle\Delta n^2\rangle}$ is much smaller than the mean, so the intensity becomes better defined as the coherent field becomes larger.

<!-- page 174 -->

> FIGURE {fig:9.2} src=../../media/ch09/fig-9-2.png
> caption: The photon number distribution for a coherent state with $|\alpha|^2 = 10$.

### Classical dipole radiation

The coherent state also corresponds to the field produced by a classical oscillating dipole. To see this, consider the Hamiltonian for such a dipole,
$$ \hat{H} = -d\hat{E} = -d_0\cos\omega t\hat{E}. $$ {eq:9.29}
Moving back to the Schrodinger picture, and working in the RWA and the rotating frame, the Hamiltonian becomes $-(d_0E_0/2)\hat{a}^\dagger + h.c.$, so that after a time $t$ the time evolution operator acts as the shift operator:
$$ |\psi\rangle = e^{-i\hat{H}t/\hbar}|0\rangle = e^{\alpha\hat{a} - \alpha^*\hat{a}^\dagger}|0\rangle $$ {eq:9.30}
where $\alpha = id_0E_0t/2\hbar$.

### Generalization to multimode fields

These properties of the coherent state show that they do indeed provide a quantum description of classical laser light. The coherent states, however, can also be generalized to multimode situations by taking the direct product of a coherent state in each mode.
$$ |\psi\rangle = \prod_k|\alpha_k\rangle. $$ {eq:9.31}

<!-- page 175 -->

The expectation value of the electric field in this multimode state is
$$ E(r, t) = \langle\psi|\hat{E}|\psi\rangle $$ {eq:9.32}
$$ = \sum_k\underbrace{\sqrt{\frac{\hbar\omega_k}{2\epsilon_0 V}}\alpha_k}_{E_k}e^{i(\mathbf{k}\cdot\mathbf{r} - i\omega_k t)} + c.c. $$ {eq:9.33}
where $E_k$ is the Fourier component of the $k^{th}$ mode of the classical field.

### Quasi-probability distributions

Whereas the number states formed a basis for the electromagnetic field, the coherent states form an overcomplete set. We can prove completeness by showing that the identity operator is proportional to the sum of all coherent states:
$$ \int|\alpha\rangle\langle\alpha|d^2\alpha = \sum_{m,n}\int e^{-|\alpha|^2}\frac{\alpha^m\alpha^{*n}}{\sqrt{m!n!}}|m\rangle\langle n|d^2\alpha. $$ {eq:9.34}
Writing $\alpha = |\alpha|e^{i\phi}$,
$$ \begin{aligned} \int|\alpha\rangle\langle\alpha|d^2\alpha &= \sum_{m,n}\frac{1}{\sqrt{m!n!}}\int_0^\infty d|\alpha|\; e^{-|\alpha|^2}|\alpha|^{m+n+1}\times \\ &\int_0^{2\pi}d\phi\; e^{i(m-n)\phi}|m\rangle\langle n| \end{aligned} $$ {eq:9.35}
$$ = \sum_{m,n}\pi n!\delta_{m,n}|m\rangle\langle n| $$ {eq:9.36}
$$ = \pi\sum_n|n\rangle\langle n|. $$ {eq:9.37}
In other words,
$$ 1 = \frac{1}{\pi}\int d^2\alpha|\alpha\rangle\langle\alpha|. $$ {eq:9.38}
However, using Eq. (9.24), we can directly verify that different coherent states are not orthogonal,
$$ |\langle\alpha|\beta\rangle| = e^{-(1/2)|\alpha-\beta|^2}, $$ {eq:9.39}
so they provide an unnecessarily large set of states for describing an arbitrary field. The coherent state representation of a density operator $\hat{\rho}$ nevertheless remains useful, and we define the quasi-probability distribution $P(\alpha)$ by
$$ \hat{\rho} = \int P(\alpha)|\alpha\rangle\langle\alpha|d^2\alpha. $$ {eq:9.40}

<!-- page 176 -->

This quasi-probability distribution has some interesting properties. Firstly, it acts like a probability distribution when you consider the expectation value of any normally ordered operator $\hat{O}$:
$$ \langle\hat{O}\rangle = \int P(\alpha)\langle\alpha|\hat{O}|\alpha\rangle d^2\alpha $$ {eq:9.41}
$$ = \int P(\alpha)O(\alpha)d^2\alpha $$ {eq:9.42}
Second, it is worth noting that this distribution always exists, and can be found using the formula
$$ P(\alpha) = \frac{e^{|\alpha|^2}}{\pi^2}\int\langle-\beta|\rho|\beta\rangle e^{|\beta|^2}e^{-\beta\alpha^* + \beta^*\alpha}d^2\beta. $$ {eq:9.43}
This relationship can be derived after a bit of algebra by calculating $\langle-\beta|\rho|\beta\rangle$ (see *e.g.*, Scully and Zubairy, p. 76).

The quasi-probability distribution $P(\alpha)$ is not a proper probability distribution because it can take on negative values. In particular, the negative values are associated with non-classical properties of the electromagnetic field, and mark a boundary between quantum and classical states.

### Linear optical transformations of coherent states

Linear transformations are defined as effects independent of the incident light power, and a coherent state will remain a coherent state under a linear transformation. The simplest examples of linear transformations are phase shifts and beam splitters. As its name might imply, the phase shift only changes the phase of a coherent state
$$ E \rightarrow Ee^{i\phi} \Rightarrow \hat{a} \rightarrow \hat{a}e^{i\phi}. $$ {eq:9.44}

A beamsplitter characterized by a transmission amplitude $t$ and reflection amplitude $r$ transforms two input electric fields $E_1^\mathrm{in}, E_1^\mathrm{in}$ into two output electric field^[Unitarity of this beamsplitter transformation requires that $|r|^2 + |t|^2 = 1$, which states that there are no losses due to the beamsplitter, and the less trivial relationship $rt^* - r^*t = 0$. This can be derived by letting $$ U = \begin{pmatrix} t & ir \\ ir & t \end{pmatrix}, $$ {eq:9.47} and solving $UU^\dagger = 1$.]
$$ E_1^\mathrm{out} = tE_1^\mathrm{in} + irE_2^\mathrm{in} $$ {eq:9.45}
$$ E_2^\mathrm{out} = tE_2^\mathrm{in} + irE_1^\mathrm{in}. $$ {eq:9.46}

<!-- page 177 -->

Since these are linear relations, the same must hold true for the photon annihilation operators:
$$ \hat{a}_1^\mathrm{out} = t\hat{a}_1^\mathrm{in} + ir\hat{a}_2^\mathrm{in} $$ {eq:9.48}
$$ \hat{a}_2^\mathrm{out} = t\hat{a}_2^\mathrm{in} + ir\hat{a}_1^\mathrm{in}. $$ {eq:9.49}
Suppose that the inputs are $|\alpha_1\rangle|\alpha_2\rangle$. The resulting output field obeys
$$ \hat{a}_1^\mathrm{out}|\alpha_1\rangle|\alpha_2\rangle = (t\alpha_1^\mathrm{in} + ir\alpha_2^\mathrm{in})|\alpha_1\rangle|\alpha_2\rangle, $$ {eq:9.50}
which is thus also a coherent state. The bottom line is that linear optical operations do not change the quantum statistical properties of coherent states.

Note that the beam splitter transformation can be viewed as resulting from a coupling of two simple harmonic oscillators, since
$$ \begin{pmatrix} \hat{a}_1 \\ \hat{a}_2 \end{pmatrix}^\mathrm{out} = \hat{U}\begin{pmatrix} \hat{a}_1 \\ \hat{a}_2 \end{pmatrix}^\mathrm{in} $$ {eq:9.51}
where the unitary operator
$$ \hat{U} = e^{i\theta\hat{a}_1\hat{a}_2^\dagger + i\theta\hat{a}_2\hat{a}_1^\dagger} $$ {eq:9.52}
can be written in terms of a parameter $\theta$ related to the transmission and reflection coefficients.

<!-- notes
- Footnote 1 starts on page 176 and ends on page 177 below the start of 9.2, holding Eq. (9.47); the text layer lacks the footnote entirely, so it is transcribed from the page images. text-layer.md corrected: the footnote's first line, which sat in the body before page 177, moved to the footnotes and completed from the page; sections.json corrected: equation 9.47 moved from 9.2 to 9.1.
- 9.1.2 "limits $\delta x\delta p \geq 1/2$ The quadrature": the book's missing full stop, kept.
- 9.1.2 "the“in phase”": the book's missing space, kept.
- "two input electric fields $E_1^\mathrm{in}, E_1^\mathrm{in}$": the book's typo; meant $E_1^\mathrm{in}, E_2^\mathrm{in}$. "into two output electric field": the book's missing plural, kept.
- Eq. (9.11) and Eq. (9.33): exponent printed $i(\mathbf{k}\cdot\mathbf{r} - i\omega t)$ with a stray $i$; meant $i(\mathbf{k}\cdot\mathbf{r} - \omega t)$ as in Eq. (9.1).
- Eq. (9.26): printed $\alpha^{2n}$; meant $|\alpha|^{2n}$.
- "To prove Eq. 9.19": what is proved with Eq. (9.21) is $\hat{D}(\alpha)|0\rangle = |\alpha\rangle$, Eqs. (9.22)-(9.25); citation kept.
- Eq. (9.30): printed $e^{\alpha\hat{a} - \alpha^*\hat{a}^\dagger}$; with the Hamiltonian $-(d_0E_0/2)\hat{a}^\dagger + h.c.$ and $\alpha = id_0E_0t/2\hbar$ the evolution is $e^{\alpha\hat{a}^\dagger - \alpha^*\hat{a}}$, the shift operator of Eq. (9.19).
- "For strong fields, $n \gg 1$": meant $\bar{n} \gg 1$.
- "the identity operator is proportional to the sum of all coherent states": meant the integral of the projectors $|\alpha\rangle\langle\alpha|$; kept.
- Eq. (9.35): one number for a two-row display, typed as one aligned display.
-->

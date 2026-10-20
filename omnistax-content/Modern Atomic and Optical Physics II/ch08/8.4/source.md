# 8.4 Dissipation and quantum noise: the Heisenberg-Langevin approach

<!-- page 146 -->

The quantum description of random processes is closely related to the theory of random fluctuations in classical statistical mechanics. To motivate subsequent development of the quantum mechanical theory, we will briefly review the classic problem of Brownian motion.

## 8.4.1 Brownian motion

Consider a heavy particle surrounded by a bath of lighter particles. As the heavier particle moves through the cloud, its interactions with the lighter particles produce a viscous drag, slowing it down. However, the heavy particle never quite comes to rest because it is constantly bombarded by random momentum kicks inflicted by the lighter particles. At long times, the heavy particle will approach thermal equilibrium with its bath.

### The Langevin equation

This classic problem of Brownian motion is described mathematically by the Langevin equation, which models the force on the heavy particle as a viscous drag plus a fluctuating “Langevin force”,

<!-- page 147 -->

$$ \frac{d}{dt}p = -\eta p + f(t), $$ {eq:8.34}
where $\eta$ is the friction coefficient and $f(t)$ is the random force due to collisions between the heavy and light particles. On average, the Langevin force vanishes,
$$ \langle f(t)\rangle = 0 $$ {eq:8.35}
and we define its two-time expectation value
$$ \langle f(t)f(t')\rangle = 2Dg(t-t') $$ {eq:8.36}
in terms of a diffusion coefficient $D$ and a second order correlation function $g(t-t')$ which satisfies the normalization condition
$$ \int_{-\infty}^{\infty} g(t-t')dt = 1. $$ {eq:8.37}
Note that the time dependence of $g(t-t')$ is determined by the collision frequency. We will be particularly interested in the situation where the lighter particles collide frequently with the heavy particle, but the effect of each collision is small. The heavy particle will thus lose momentum slowly, but the random force $f(t)$ will fluctuate very quickly. In this rapid-collision limit, we can separate out the two timescales, and the correlation function approaches a delta function
$$ g(t-t') \rightarrow \delta(t-t'). $$ {eq:8.38}

We can find a general solution to the Langevin equation for arbitrary $f(t)$,
$$ p(t) = p(0)e^{-\eta t} + \int_0^t dt' f(t')e^{-\eta(t-t')}. $$ {eq:8.39}
If we average the momentum of the heavy particle over timescales large compared to the collision rate, we find
$$ \overline{p(t)} = \overline{p(0)}e^{-\eta t}, $$ {eq:8.40}
so the average momentum is unaffected by the Langevin force. However, its variance will have contributions from the stochastic momentum kicks. In the rapid collision limit, we can calculate the mean square momentum:

<!-- page 148 -->

$$ \overline{p^2(t)} = \langle\left(p(0)e^{-\eta t} + \int_0^t dt' f(t')e^{-\eta(t-t')}\right)^2\rangle $$ {eq:8.41}
$$ = \overline{p(0)^2}e^{-2\eta t} + \int_0^t\int_0^t dt'dt''\langle f(t')f(t'')\rangle e^{-\eta(t-t')}e^{-\eta(t-t'')} $$ {eq:8.42}
$$ = \overline{p(0)^2}e^{-2\eta t} + \int_0^t\int_0^t dt'dt'' 2D\delta(t'-t'')e^{-\eta(t-t')}e^{-\eta(t-t'')} $$ {eq:8.43}
$$ = \overline{p(0)^2}e^{-2\eta t} + \frac{D}{\eta}\left(1 - e^{-2\eta t}\right). $$ {eq:8.44}
Note that the terms linear in $\langle f(t)\rangle$ vanish because the average Langevin force is zero. This calculation shows that, unlike the average velocity, the mean square momentum is affected by the presence of the diffusion term. For very short times $\eta t \ll 1$, the square momentum simply decays exponentially,
$$ \overline{p(t)^2} \approx \overline{p(0)^2}e^{-2\eta t}. $$ {eq:8.45}
For long times $\eta t \gg 1$, however, the first viscous term is exponentially damped and the Langevin force determines the momentum,
$$ \mathop{\mathrm{lim}}\limits_{t\rightarrow\infty}\overline{p(t)^2} \rightarrow \frac{D}{\eta} $$ {eq:8.46}
In this long-time limit, the kinetic energy
$$ E_\mathrm{kinetic} = \frac{\overline{p^2}}{2m} \rightarrow \frac{D}{2m\eta}. $$ {eq:8.47}

### The Einstein relation

If we can assume that the system approaches thermal equilibrium at such long times, then $E_\mathrm{kinetic} = (1/2)k_BT$ for a one-dimensional system. The resulting equation for the diffusion constant in terms of the temperature and friction coefficient is known as the “Einstein relation”:
$$ D = m\eta k_BT. $$ {eq:8.48}
Physically, the finite equilibrium temperature $T$ is determined by the balance of damping and diffusion. In particular, note that finite temperature dissipation ($\eta$) always leads to fluctuations ($D$). For our application to laser cooling, the Einstein relation will allow us to calculate the temperature that the atoms reach in equilibrium. Using a microscopic description to find a quantum analogue of the fluctuating force $f(t)$, we will be able to predict the lowest attainable temperature.

<!-- page 149 -->

### Random walks

If we make the unphysical assumption that the friction term vanishes $\eta \rightarrow 0$, the heavy particle only receives random kicks from the lighter particles with no dissipation. Its momentum will grow indefinitely,
$$ \overline{p^2} = Dt, $$ {eq:8.49}
and no thermal equilibrium is reached, so the Einstein relation does not hold. This so-called “random walk” problem shows that in the absence of damping a heavy particle will randomly diffuse through the cloud of lighter particles. A good reference for this subject is Cohen-Tannoudji, “Atom-Photon Interactions”.

## 8.4.2 The Heisenberg-Langevin approach

To apply a Langevin approach to the quantum mechanical description of Doppler cooling, we must determine the fluctuations in the system. Our semiclassical analysis averaged over the forces and atomic operators $\hat{F} \rightarrow \langle\hat{F}\rangle, \hat{\sigma}_{\alpha,\beta} \rightarrow \langle\hat{\sigma}_{\alpha,\beta}\rangle$ (where $\hat{\sigma}_{\alpha,\beta} = |\alpha\rangle\langle\beta|$), which immediately gets rid of any associated noise. Clearly, we need to do better.

In principle, we need only return to the Heisenberg equations of motion and avoid taking any expectation values:
$$ \frac{d}{dt}\hat{\sigma}_{\alpha,\beta} = \frac{i}{\hbar}[\hat{H}, \hat{\sigma}_{\alpha,\beta}]. $$ {eq:8.50}
There are two major contributions to the atomic evolution: the Hamiltonian evolution and the coupling to the reservoir operators. We have already accounted for the Hamiltonian contribution, and need only add in the effects of dissipation. In fact, these equations of motion look very similar to the density matrix equations, and it is tempting to account for dissipation by introducing dephasing terms $\dot{\hat{\sigma}}_{\alpha,\beta} \sim -\gamma_{\alpha,\beta}\hat{\sigma}_{\alpha,\beta}$. Unfortunately, this naive approach leads to unphysical results. In particular, such decoherence terms imply that $[\hat{\sigma}_{\beta,\alpha}, \hat{\sigma}_{\alpha,\beta}]$ decays exponentially in time:
$$ \frac{d}{dt}[\hat{\sigma}_{\beta,\alpha}, \hat{\sigma}_{\alpha,\beta}] = [\frac{d}{dt}\hat{\sigma}_{\beta,\alpha}, \hat{\sigma}_{\alpha,\beta}] + [\hat{\sigma}_{\beta,\alpha}, \frac{d}{dt}\hat{\sigma}_{\alpha,\beta}] $$ {eq:8.51}
$$ = -\gamma_{\alpha,\beta}[\hat{\sigma}_{\beta,\alpha}, \hat{\sigma}_{\alpha,\beta}]. $$ {eq:8.52}

Approaching the problem again more carefully, we will consider a generalized system and reservoir evolving according to the Hamiltonian
$$ \hat{H} = \hat{H}_S + \hat{H}_R + \hat{H}_{SR} $$ {eq:8.53}

<!-- page 150 -->

where
$$ \hat{H}_{SR} = -\hat{R}^\dagger\hat{S} - \hat{S}^\dagger\hat{R}. $$ {eq:8.54}
In the case of a two-level atom interacting with modes $\hat{a}_i$ of the radiation field with coupling coefficient $g_i$, the system and reservoir operators are given by
$$ \hat{R} = \sum_j \hbar g_j\hat{a}_j $$ {eq:8.55}
$$ \hat{S} = \hat{\sigma}_{12} = |1\rangle\langle 2|, $$ {eq:8.56}
but in general they may take any form.

We can write down the equation of motion for the evolution of an arbitrary system operator $\hat{A}$:
$$ \frac{d}{dt}\hat{A} = \frac{i}{\hbar}[\hat{H}_S, \hat{A}] + \frac{i}{\hbar}\hat{R}^\dagger[\hat{A}, \hat{S}] + \frac{i}{\hbar}[\hat{A}, \hat{S}^\dagger]\hat{R}. $$ {eq:8.57}
The first term describes the Hamiltonian evolution of the isolated system, while the remaining terms describe the system-bath interaction. For example, if we took $\hat{A} = \hat{\sigma}_{12}, \hat{S} = \hat{\sigma}_{12}$,
$$ \frac{d}{dt}\hat{\sigma}_{12} = \frac{i}{\hbar}[\hat{H}_S, \hat{\sigma}_{12}] + \frac{i}{\hbar}\left(\hat{\sigma}_{11} - \hat{\sigma}_{22}\right)\hat{R}, $$ {eq:8.58}
we would find an equation that looks very similar to the density matrix equation for the atomic coherence, with the coherent field $\Omega$ replaced by the operator quantity $\hat{R}$. This is not so surprising, since $\hat{R}$ acts as a quantum field operator. Note that the system and reservoir operators commute, so the ordering of the last two terms in Eq. (8.57) is arbitrary. Nevertheless, we have chosen this ordering because it highlights the action of $\hat{R}$ on the vacuum state, and will prove useful when we write the reservoir operator $\hat{R}$ in terms of the system operators that influence it.

We next consider the evolution equation for the reservoir operator $\hat{R}$ itself. In the case of the radiation field, $\hat{R} = \sum_j \hbar g_j\hat{a}_j$ and each mode evolves according to
$$ \dot{\hat{a}}_j = \frac{i}{\hbar}[\hat{H}_R + \hat{H}_{SR}, \hat{a}_j] $$ {eq:8.59}
$$ = -i(\nu_j - \omega)\hat{a}_j + ig_j^*\hat{S}. $$ {eq:8.60}
The first term represents the free field evolution in an appropriately chosen rotating frame of reference, whereas the system-reservoir coupling yields a source term for the quantum field, which in turn drives the system. Formally integrating the equations for $\hat{R}$, we find

<!-- page 151 -->

$$ \hat{R}(t) = i\hbar\left(-i\sum_j g_j\hat{a}_j(0)e^{-i(\nu_j-\omega)t} + \int_0^t dt'\sum_j|g_j|^2e^{-i(\nu_j-\omega)(t-t')}\hat{S}(t')\right). $$ {eq:8.61}
This expression is very similar to the equation obeyed by the reservoir operators in Wigner-Weisskopf theory, and we will again make use of the Markov approximation to simplify the equation. If the atomic operator $\hat{S}(t)$ changes slowly in time, and the reservoir bandwidth is very broad, the source term can be approximated by a simple decay,
$$ \int_0^t dt'\sum_j|g_j|^2e^{-i(\nu_j-\omega)(t-t')}\hat{S}(t') \rightarrow \frac{\gamma}{2}\hat{S}(t). $$ {eq:8.62}
In addition to the expected decay terms, however, we also need to consider the free-field evolution term. This so-called “quantum Langevin force,”
$$ \hat{f}(t) = -i\sum_j g_j\hat{a}_j(0)e^{-i(\nu_j-\omega)t}, $$ {eq:8.63}
was missing from our previous naive guess at the effects of the reservoir. The fluctuations associated with $\hat{f}(t)$ will protect the commutator $[\hat{\sigma}_{\beta,\alpha}, \hat{\sigma}_{\alpha,\beta}]$ from the unphysical exponential decay we found earlier.

### The quantum Langevin operator: $\hat{f}(t)$

The physical meaning of the free-field evolution term can be understood by examining its moments. If the reservoir was initially in a thermal state, then $\langle\hat{f}(t)\rangle = 0$, so the average effect of $\hat{f}(t)$ vanishes. As in the case of the classical Langevin force, we find that the second moment does not vanish:
$$ \langle\hat{f}(t)^\dagger\hat{f}(t')\rangle = \sum_{j,j'}g_j^*g_{j'}\langle\hat{a}_j(0)^\dagger\hat{a}_{j'}(0)\rangle e^{i(\nu_j-\omega)t}e^{-i(\nu_{j'}-\omega)t'} $$ {eq:8.64}
$$ = \sum_j|g_j|^2n(\nu_j)e^{-i(\nu_j-\omega)(t'-t)} $$ {eq:8.65}
$$ = n(\omega)\gamma\delta(t-t'), $$ {eq:8.66}
where we have again made use of the Markov approximation in the last line. $\hat{f}$ is an operator so the ordering matters, and a similar calculation yields the second moment for the opposite order:
$$ \langle\hat{f}(t)\hat{f}(t')^\dagger\rangle = \left(n(\omega) + 1\right)\gamma\delta(t-t'). $$ {eq:8.67}

<!-- page 152 -->

Since $\hat{f}$ is an operator with zero average and second-order moment given by a delta-function, we interpret $\hat{f}$ as a quantum Langevin operator.

### The Heisenberg-Langevin equation

Expressed in terms of the decay rate and Langevin force, the reservoir operator may be written
$$ \hat{R}(t) = i\hbar\left(\frac{\gamma}{2}\hat{S}(t) + \hat{f}(t)\right). $$ {eq:8.68}
Substituting back into the equation of motion for the system operator $\hat{A}$, we obtain a general result known as the Heisenberg-Langevin equation:
$$ \frac{d}{dt}\hat{A} = \frac{i}{\hbar}[\hat{H}_S, \hat{A}] + \left(\frac{\gamma}{2}\hat{S}^\dagger + \hat{f}^\dagger\right)[\hat{A}, \hat{S}] - [\hat{A}, \hat{S}^\dagger]\left(\frac{\gamma}{2}\hat{S} + \hat{f}\right). $$ {eq:8.69}
Physically, the Heisenberg-Langevin equation demonstrates that whenever a system has some dissipation $(\gamma/2)\hat{S}$, it will always be accompanied by fluctuations described by the Langevin noise operator $\hat{f}$.

### Comparison to the Master Equation

The Heisenberg-Langevin equation was derived in the Heisenberg picture, whereas the density matrix approach uses the Schrodinger picture. The two descriptions, however, are entirely equivalent.

To illustrate the connection, suppose that we start out in the vacuum state $n(\omega) = 0$, so that $\hat{f}|vac\rangle = 0$. Taking the expectation value for $\hat{A}$ yields
$$ \frac{d}{dt}\langle\hat{A}\rangle = \frac{i}{\hbar}\langle[\hat{H}_S, \hat{A}]\rangle + \frac{\gamma}{2}\left(2\langle\hat{S}^\dagger\hat{A}\hat{S}\rangle - \langle\hat{A}\hat{S}^\dagger\hat{S}\rangle - \langle\hat{S}^\dagger\hat{S}\hat{A}\rangle\right). $$ {eq:8.70}
Since $\langle\sigma_{ij}\rangle = \rho_{ji}$, we can compare this equation term by term to the master equation for an atom in vacuum: they match exactly.

### The quantum fluctuation-dissipation theorem

The Heisenberg-Langevin equations may be written in a compact form
$$ \frac{d}{dt}\hat{A}_\mu = \hat{d}_\mu + \hat{\mathcal{F}}_\mu, $$ {eq:8.71}
where $\mu$ denotes an arbitrary operator, $\hat{d}_\mu$ represents the coherent evolution and decay of that operator (such as one would predict from the density matrix equations of motion), and $\hat{\mathcal{F}}_\mu$ is the quantum Langevin operator with $\langle\hat{\mathcal{F}}_\mu\rangle = 0$ and

<!-- page 153 -->

$$ \langle\hat{\mathcal{F}}_\mu(t)\hat{\mathcal{F}}_\nu(t')\rangle = 2D_{\mu\nu}\delta(t-t'). $$ {eq:8.72}
As we found for the classical Langevin equation, there is a relationship between the noise force and the dissipation included in $\hat{d}_\mu$. In particular, the generalized diffusion coefficient $D_{\mu\nu}$ is uniquely determined by the deterministic evolution of $\hat{d}_\mu$:
$$ 2D_{\mu\nu} = \frac{d}{dt}\langle\hat{A}_\mu\hat{A}_\nu\rangle - \langle\hat{A}_\mu\hat{d}_\nu\rangle - \langle\hat{d}_\mu\hat{A}_\nu\rangle. $$ {eq:8.73}
This “generalized Einstein relation” is the quantum analogue of the equation relating the diffusion coefficient to the temperature and the friction coefficient, and is valid for all systems coupled to Markovian reservoirs.

To prove the quantum fluctuation-dissipation theorem given in Eq. (8.73), consider the quantity
$$ \langle\hat{A}_\mu(t)\hat{\mathcal{F}}_\nu(t)\rangle = \langle\hat{A}_\mu(t-\Delta t)\hat{\mathcal{F}}_\nu(t)\rangle + \int_{t-\Delta t}^t dt'\left(\langle\hat{d}_\mu(t')\hat{\mathcal{F}}_\nu(t)\rangle + \langle\hat{F}_\mu(t')\hat{\mathcal{F}}_\nu(t)\rangle\right). $$ {eq:8.74}
Since $\hat{A}(t-\Delta t)$ is not correlated with $\hat{\mathcal{F}}_\mu(t)$ (by causality), and $\langle\hat{\mathcal{F}}_\nu(t)\rangle = 0$, the first term vanishes. The second term should be small because $\hat{d}_\mu$ is deterministic, so the second term is at most proportional to $\Delta t$. The third term is finite because $\langle\hat{\mathcal{F}}_\mu(t)\hat{\mathcal{F}}_\nu(t')\rangle = 2D_{\mu\nu}\delta(t-t')$; although the delta function argument appears at the endpoint of the region of integration, from our calculations of the Wigner-Weisskopf theory, we can account for the end effects with a factor of $1/2$, so
$$ \langle\hat{A}_\mu(t)\hat{\mathcal{F}}_\nu(t)\rangle = D_{\mu\nu}. $$ {eq:8.75}
A similar calculation shows that
$$ \langle\hat{\mathcal{F}}_\nu(t)\hat{A}_\mu(t)\rangle = D_{\nu\mu}. $$ {eq:8.76}
We now calculate the time derivative of $\langle\hat{A}_\mu(t)\hat{A}_\nu(t)\rangle$,
$$ \frac{d}{dt}\langle\hat{A}_\mu\hat{A}_\nu\rangle = \langle\hat{A}_\mu(d_\nu + \hat{\mathcal{F}}_\nu)\rangle + \langle(d_\mu + \hat{\mathcal{F}}_\mu)\hat{A}_\nu\rangle $$ {eq:8.77}
which immediately gives us the generalized Einstein relation:
$$ \frac{d}{dt}\langle\hat{A}_\mu\hat{A}_\nu\rangle - \langle\hat{A}_\mu\hat{d}_\nu\rangle - \langle\hat{d}_\mu\hat{A}_\nu\rangle = 2\langle\hat{A}_\mu\hat{\mathcal{F}}_\nu\rangle = 2D_{\mu\nu}. $$ {eq:8.78}

<!-- page 154 -->

The generalized Einstein relation conveys a simple physical message: As soon as the deterministic part of the system evolution is given and the reservoir has no memory (i.e. quantum ”white noise”), one can immediately calculate the associated noise terms. The fluctuation-dissipation theorem thus provides a convenient way to derive diffusion coefficients from known system decay and decoherence parameters.

<!-- notes
- text-layer.md corrected: the title's "Heisenberg-/Langevin" and the reference's "Atom-/Photon" joined across their line breaks, which the checker otherwise reads as broken words; both are real compounds.
- 8.4.1 "unlike the average velocity": the text and Eq. (8.40) concern the average momentum; kept as printed.
- Eq. (8.41): the book opens $\langle$ and closes with $\rangle$ around a squared bracket while the left side is an overline average, mixing the two averaging notations; kept as printed.
- Eq. (8.49): with $\eta \rightarrow 0$, (8.44) gives $\overline{p^2} = 2Dt$ (plus $\overline{p(0)^2}$), not $Dt$; the book prints $Dt$.
- Eq. (8.52): from $\dot{\hat{\sigma}}_{\alpha,\beta} \sim -\gamma_{\alpha,\beta}\hat{\sigma}_{\alpha,\beta}$ each of the two terms of (8.51) contributes, giving $-2\gamma_{\alpha,\beta}$ (or $-(\gamma_{\alpha,\beta}+\gamma_{\beta,\alpha})$); the book prints $-\gamma_{\alpha,\beta}$.
- Eqs. (8.55)-(8.56) define modes $\hat{a}_i$, $g_i$ in the text but sum over $j$; kept.
- Eq. (8.70): "Since $\langle\sigma_{ij}\rangle = \rho_{ji}$": $\sigma_{ij}$ printed without the hat used elsewhere; kept.
- Eq. (8.74): the last term prints $\hat{F}_\mu(t')$ (plain $F$) where every other place has $\hat{\mathcal{F}}_\mu$; kept as printed.
- After (8.74): "Since $\hat{A}(t-\Delta t)$ is not correlated with $\hat{\mathcal{F}}_\mu(t)$": the first term pairs $\hat{A}_\mu$ with $\hat{\mathcal{F}}_\nu$, so $\hat{\mathcal{F}}_\nu(t)$ is meant.
- Eq. (8.77): $d_\nu$, $d_\mu$ printed without hats, unlike (8.71) and (8.78); kept.
- Page 154 "quantum ”white noise”": the book's opening quotation mark is a closing one; kept.
-->

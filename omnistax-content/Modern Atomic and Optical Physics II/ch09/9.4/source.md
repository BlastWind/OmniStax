# 9.4 Quantum dynamics in non-linear mixing processes

<!-- page 200 -->

### Linear amplification

We have seen how noise suppresses quantum correlations of a field mode subject to decay. Linear amplification likewise adds noise to the initial state of the field because it always involves spontaneous emission processes. The gain and associated noise of a linear amplifier can be modeled by a gas of inverted two-level atoms or inverted harmonic oscillators. For a gain coefficient $\sigma > 1$, one can derive a very general result:
$$ \hat{a}_\mathrm{out} = \sqrt{\sigma}\hat{a}_\mathrm{in} + \sqrt{\sigma - 1}\hat{b}^\dagger, $$ {eq:9.135}
where the noise operator $\hat{b}^\dagger$ is analogous to vacuum noise, but acts rather differently because it comes from a spontaneous emission process. Like other noise operators, it ensures that the commutation relations for the field operators do not grow or decay with time. The additional noise is related to the quantum no cloning theorem, which states that an arbitrary quantum state cannot be copied. Similarly, we find here that a quantum state cannot be amplified without losing some information due to added noise.

<!-- page 201 -->

## 9.4.1 Nonlinear amplification

We have seen how nonlinear optical phenomena produce non-classical states of light whereas losses act to destroy non-classical correlations. The interplay of these two competing mechanisms can be illustrated by a specific example: the generation of squeezed light. We will first show how a squeezed state can be created by a lossless down-conversion process, and then discuss the effects of losses and noise.

### Degenerate parametric down-conversion

Our semiclassical description of parametric down-conversion described the generation of a pair of fields $\mathcal{E}_1$ and $\mathcal{E}_2$ by a strong pump field $\mathcal{E}_0$, where $\nu_1 + \nu_2 = \nu_0$ and $\Delta k = 0$. Away from atomic resonances, the polarizations which drive $\mathcal{E}_1$ and $\mathcal{E}_2$ include both the linear and nonlinear susceptibilities:
$$ P_1 \sim \frac{\chi^{(2)}}{2}\mathcal{E}_0\mathcal{E}_2^* + \frac{\chi_1}{2}\mathcal{E}_1 $$ {eq:9.136}
$$ P_2 \sim \frac{\chi^{(2)}}{2}\mathcal{E}_0\mathcal{E}_1^* + \frac{\chi_2}{2}\mathcal{E}_2. $$ {eq:9.137}

One method of squeezed light generation uses a degenerate version of parametric down-conversion for fields confined to a cavity. The pump field at frequency $\nu_0$ drives a nonlinear medium inside a cavity whose frequency $\nu_c = \nu_0/2$ determines the frequencies of $\mathcal{E}_1$ and $\mathcal{E}_2$, $\nu_1 = \nu_2 = \nu_c$. Assuming that the polarizations match, the two lower frequency fields are identical $\mathcal{E}_1 = \mathcal{E}_2$. This degenerate version of parametric down-conversion in a cavity is often called a “degenerate optical parametric oscillator” (OPO).

The polarization oscillating at the cavity frequency (which generates the fields $\mathcal{E}_1 = \mathcal{E}_2$) includes effects from both coherences
$$ P = \mu_{31}\rho_{31} + \mu_{23}\rho_{23} $$ {eq:9.138}
$$ \sim \chi^{(2)}\mathcal{E}_0\mathcal{E}_1^* + \frac{\chi_1 + \chi_2}{2}\mathcal{E}_1. $$ {eq:9.139}
The evolution equation for the field $\mathcal{E}_1$ inside the cavity will contain a driving term from this polarization. Under phase-matching conditions,
$$ \frac{\partial\mathcal{E}_1}{\partial t} = i\beta\mathcal{E}_1^* $$ {eq:9.140}
$$ \frac{\partial\mathcal{E}_1^*}{\partial t} = -i\beta^*\mathcal{E}_1, $$ {eq:9.141}
where $\beta$ incorporates the pump power and nonlinear susceptibility into one constant. These equations may appear similar to the propagation of a field in a linear medium, where $\dot{\mathcal{E}} \sim \beta\mathcal{E}$. In this case, however, the field evolves differently than its complex conjugate, so we will need to keep careful track of the phases.

<!-- page 202 -->

> FIGURE {fig:9.9} src=../../media/ch09/fig-9-9.png
> caption: The optical parametric oscillator is formed by atoms with a cascade level configuration inside a cavity with resonance frequency $\nu_c = \nu_0/2$.

### Phase-dependent amplification

Since the phase of $\beta$ is arbitrary (only the relative phase of $\mathcal{E}_1$ and $\beta$ matters), we are free to choose it to be purely imaginary, with $\beta = i\tilde{\beta}$. To decouple the evolution equations, we will work in the normal mode basis $\mathcal{E}_\pm = \mathcal{E}_1 \pm \mathcal{E}_1^*$ where they become
$$ \frac{\partial\mathcal{E}_+}{\partial t} = -\tilde{\beta}\mathcal{E}_+ $$ {eq:9.142}
$$ \frac{\partial\mathcal{E}_-^*}{\partial t} = \tilde{\beta}\mathcal{E}_-. $$ {eq:9.143}
One normal mode is amplified while the other is de-amplified, and the gain depends explicitly on the initial phase of $\mathcal{E}_1$ relative to $\beta \propto \mathcal{E}_0$. When $\mathcal{E}_1$ is real, the field is attenuated for $\tilde{\beta} > 0$ whereas if $\mathcal{E}_1$ is imaginary it is amplified.

<!-- page 203 -->

### Quantum mechanical approach

We would like to be able to convert our classical description of degenerate parametric down-conversion to a quantum mechanical version. The simplest approach would replace the cavity electric field values by the cavity photon annihilation operators $\mathcal{E} \to \hat{a}$. Such a naive substitution is in fact valid for lossless systems described by linear equations of motion, so in this case it turns out to work. However, it is not true in general, and we can use a more rigorous approach to show how the simple case arises.

Our quantum mechanical treatment will describe the generation of macroscopic fields. We will thus use the Heisenberg-Langevin approach, which provides a direct correspondence to the classical description we have already derived. The Hamiltonian governing interactions between the cavity mode and the atoms is
$$ \hat{H} = -\hbar\hat{a}^\dagger\sum_j \left(g_j\hat{\sigma}_{32}^{(j)} + g_j\hat{\sigma}_{13}^{(j)}\right) + h.c., $$ {eq:9.144}
while the pump drive terms are $\hat{H}_{pump} = -\Omega_0\hat{\sigma}_{21} + h.c.$. In the absence of loss from the cavity, the Langevin equation of motion for the field mode $\hat{a}$ is
$$ \frac{d\hat{a}}{dt} = i\sum_j \left(g_j\hat{\sigma}_{32}^{(j)} + g_j\hat{\sigma}_{13}^{(j)}\right). $$ {eq:9.145}
Corresponding equations can also be found for the atomic polarizations. For example, the atomic polarization$\sigma_{13}^{(j)}$ obeys
$$ \dot{\sigma}_{13}^{(j)} = -(\gamma_{13} + i\delta)\hat{\sigma}_{13}^{(j)} - ig_j\hat{a}^\dagger\hat{\sigma}_{12}^{(j)} + ig_j\hat{a}(\hat{\sigma}_{11} - \hat{\sigma}_{33}) - i\Omega_0\hat{\sigma}_{23} + \hat{\mathcal{F}}_{13}, $$ {eq:9.146}
where $\delta$ is the detuning from the intermediate state. If the detunings are sufficiently large, we can neglect the decay of the atoms and the associated noise terms $\gamma_{13} \to 0, \hat{\mathcal{F}}_{13} \to 0$. Furthermore, if the pump field is assumed strong and classical then the operator $\hat{\sigma}_{21}$ is essentially equal to its classical expectation value $\hat{\sigma}_{12} = \Omega_0/\Delta$ (where $\Delta$ is the detuning of the classical pump field from the $|1\rangle \to |2\rangle$ transition). With this value for $\hat{\sigma}_{21}$, the term $-i\Omega_0\hat{\sigma}_{23} \approx -i(|\Omega_0|^2/\Delta)\hat{\sigma}_{13}$ can be eliminated by absorbing it into the definition of $\delta$. Using adiabatic elimination we obtain
$$ \hat{\sigma}_{13}^{(j)} = -\frac{\Omega_0}{\Delta\delta}g_j\hat{a}^\dagger - \frac{g_j\hat{a}}{\delta}. $$ {eq:9.147}
This atomic operator is analogous to the classical expression for the polarization, while $g_j\hat{a}^\dagger$ plays the role of the classical Rabi frequency of the generated fields $\mathcal{E}_1$. The other term in Eq. 9.145 depends on
$$ \hat{\sigma}_{32} \approx \frac{\Omega_0}{\Delta}\hat{\sigma}_{31} \approx -\frac{\Omega_0}{\Delta\delta}g_j\hat{a}^\dagger. $$ {eq:9.148}

<!-- page 204 -->

When the phase-matching condition is fulfilled,
$$ \frac{d\hat{a}}{dt} = -2i\sum_j \frac{\Omega_0}{\Delta\delta}g_j^2\hat{a}^\dagger. $$ {eq:9.149}
The Hermitian conjugate of the field operator appears on the right hand side of the equation, much as the complex conjugate appeared in the classical equations of motion. Note that our system involves a classical pump, linear operator equations, and large detunings, so the Heisenberg-Langevin approach gives precisely the same result we would have obtained from our naive substitution. If the system involved nonlinear operator terms, an ordering ambiguity would arise when going from the classical description to the quantum description.

Identifying the constant of proportionality $\beta^* = -2\sum_j \frac{\Omega_0^*}{\Delta\delta}g_j^2$, we find
$$ \frac{d\hat{a}}{dt} = -i\beta^*\hat{a}^\dagger $$ {eq:9.150}
$$ \frac{d\hat{a}^\dagger}{dt} = i\beta\hat{a}. $$ {eq:9.151}
This set of equations could be derived from an effective Hamiltonian
$$ \hat{H}_\mathrm{eff} = \frac{\hbar}{2}\left(\beta\hat{a}^2 + \beta^*(\hat{a}^\dagger)^2\right). $$ {eq:9.152}
Physically, the effective Hamiltonian describes the absorption or emission of photon pairs, precisely as we would expect for a degenerate down-conversion process. Although we might have guessed its form, we have now derived it from microscopic considerations.

### Non-degenerate parametric down-conversion

By a similar calculation, a non-degenerate parametric down-conversion process obeys the equations of motion
$$ \frac{d\hat{a}_2}{dt} = -i\beta^*\hat{a}_1^\dagger $$ {eq:9.153}
$$ \frac{d\hat{a}_1^\dagger}{dt} = i\beta\hat{a}_2, $$ {eq:9.154}

<!-- page 205 -->

which can be described an effective Hamiltonian
$$ \hat{H}_\mathrm{eff} = \hbar\left(\beta\hat{a}_1\hat{a}_2 + \beta^*\hat{a}_1^\dagger\hat{a}_2^\dagger\right). $$ {eq:9.155}
Here, $\hat{a}_1$ and $\hat{a}_2$ are the two phase-matched field modes which are amplified by the process. As a vacuum field evolves under this effective Hamiltonian, it creates a state
$$ |\psi\rangle = e^{-i\hat{H}_\mathrm{eff}t/\hbar}|\mathrm{vac}\rangle $$ {eq:9.156}
$$ = |\mathrm{vac}\rangle + \xi|1, 1\rangle + \xi^2|2, 2\rangle + \ldots, $$ {eq:9.157}
where $|n, m\rangle = (\hat{a}_1^\dagger)^n(\hat{a}_2^\dagger)^m|\mathrm{vac}\rangle$ and $\xi = -i\beta^* t$. It is useful to distinguish two limits in this process: $\xi < 1$ and $\xi \gg 1$. In the first case, the emission of photons is primarily a spontaneous process, which results in correlated generation of photon pairs. In the second case, stimulated emission plays an important role, and the system can be used as an optical parametric oscillator to generate squeezed states of light.

States generated by non-degenerate parametric down-conversion exhibit correlated photon statistics. While each mode (i.e. after tracing over the other mode) is in a thermal state, with a distribution function (see e.g. Walls & Milburn, 5.2.5)
$$ p(n) = \frac{\tanh^2\xi}{\cosh^2\xi} $$ {eq:9.158}
the difference in photon numbers between the two modes is precisely zero:
$$ \Delta\hat{n}|\psi\rangle = (\hat{n}_1 - \hat{n}_2)|\psi\rangle = 0. $$ {eq:9.159}
This is an example of non-classical photon correlations: the photon number differences are suppressed far below the photon shot-noise limit of $\langle(\hat{n}_1 - \hat{n}_2)^2\rangle = n_1 + n_2$, which is what one would obtain by dividing a beam in half on a beamsplitter.

The correlated photons created in parametric down-conversion have a variety of applications. They can be used for heralded single photon generation by measuring only one of the two modes. Conditioned on a detection event in the first mode, there should be precisely one photon in the second mode. A slightly more complicated application uses some internal property of the modes – for example polarization – to encode an entangled state. In this situation, the resulting state could resemble
$$ |\psi\rangle = |\mathrm{vac}\rangle + \frac{\xi}{\sqrt{2}}\left(|1_H, 1_V\rangle + |1_V, 1_H\rangle\right) + \mathcal{O}(\xi^2). $$ {eq:9.160}

<!-- page 206 -->

Provided that the probability of photon generation $\sim \xi \ll 1$, the system is either in the vacuum or in an entangled two-photon state. As is the case with many single-photon processes, generation of this entangled state is probabilistic. Furthermore, losses inherent in any realistic system will destroy the entangled state. However, by conditioning all subsequent measurements on detection of both photons (a process known as “post-selection”), we can use our state only in the situation where two photons were generated and neither was lost. In this manner one can devise few-photon experiments which tolerate probabilistic processes and are insensitive to loss.

## 9.4.2 Squeezed states

In the situation where $\xi \gg 1$, degenerate parametric down-conversion can lead to the generation of squeezed states. Returning to the situation where $\hat{a}_1 = \hat{a}_2 = \hat{a}$, we will now allow the driving field to have an arbitrary phase $\theta$, so that the gain coefficient becomes
$$ \beta = \tilde{\beta}e^{i(\theta - \pi/2)}. $$ {eq:9.161}
Using this phase to weight the field operators, we define quadrature components of the cavity mode
$$ \hat{x} = \frac{1}{\sqrt{2}}\left(\hat{a}e^{i\theta/2} + \hat{a}^\dagger e^{-i\theta/2}\right) $$ {eq:9.162}
$$ \hat{p} = \frac{1}{\sqrt{2}i}\left(\hat{a}e^{i\theta/2} - \hat{a}^\dagger e^{-i\theta/2}\right), $$ {eq:9.163}
which are “normal modes” of the operator equations of motion
$$ \frac{d\hat{x}}{dt} = \tilde{\beta}\hat{x} $$ {eq:9.164}
$$ \frac{d\hat{p}}{dt} = -\tilde{\beta}\hat{p}. $$ {eq:9.165}
The $x$ quadrature component is amplified for $\tilde{\beta} > 0$, whereas the $p$ component is attenuated:
$$ \hat{x}(t) = \hat{x}(0)e^{\tilde{\beta}t} $$ {eq:9.166}
$$ \hat{p}(t) = \hat{p}(0)e^{-\tilde{\beta}t}. $$ {eq:9.167}
Hence, if the cavity mode starts out in a coherent state, the variance of the quadrature components will change in opposite directions.
$$ \langle\Delta\hat{x}^2\rangle = \frac{1}{2}e^{2\tilde{\beta}t} \to \infty $$ {eq:9.168}

<!-- page 207 -->

$$ \langle\Delta\hat{p}^2\rangle = \frac{1}{2}e^{-2\tilde{\beta}t} \to 0 $$ {eq:9.169}
Note that the field is still in a minimum-uncertainty state, since $\langle\Delta\hat{p}^2\rangle\langle\Delta\hat{x}^2\rangle = 1/4$, but its noise properties are “squeezed” relative to the initial coherent state.

> FIGURE {fig:9.10} src=../../media/ch09/fig-9-10.png
> caption: Phase space representation of the noise in the vacuum state, a coherent state, and a squeezed state.

Mathematically, the squeezed state can be represented by the time evolution operator for the effective Hamiltonian acting on the initial coherent state $|\alpha\rangle$:
$$ |\psi\rangle_{Sq} = e^{-i(\beta^*(\hat{a}^\dagger)^2 + \beta\hat{a}^2)t/2}|\alpha\rangle. $$ {eq:9.170}
This formal definition of a squeezed state allows all of its properties to be calculated. Note that if we started out in the vacuum $\alpha = 0$, the effective Hamiltonian would add and subtract photons in pairs, so the final squeezed state would only contain superpositions of even numbers of photons. Clearly such a state is very different from a coherent state.

## 9.4.3 Effects of loss

Our analysis predicts that as time progresses, one quadrature component of the squeezed state will vanish while the other will diverge. From a practical perspective, we would expect such divergences to be damped out, so it is important to account for decay processes to obtain a realistic description of squeezed light generation.

<!-- page 208 -->

### Squeezed light generation in a damped cavity

We will consider only losses from the cavity, which are the simplest type of noise to incorporate into our analysis. The Langevin equations for the field operators are modified by a decay rate $\kappa$ and an associated noise operator $\hat{\mathcal{F}}$,
$$ \frac{d\hat{a}}{dt} = -i\beta^*\hat{a}^\dagger - \frac{\kappa}{2}\hat{a} + \hat{\mathcal{F}} $$ {eq:9.171}
$$ \frac{d\hat{a}^\dagger}{dt} = i\beta\hat{a} - \frac{\kappa}{2}\hat{a}^\dagger + \hat{\mathcal{F}}^\dagger. $$ {eq:9.172}
The cavity decay corresponds to leakage of photons in and out of the cavity to the outside world through a semi-transparent mirror. The field modes outside the cavity (many modes) now act as the reservoir for the single cavity mode we considered. When the field outside the cavity is initially in the vacuum state $\bar{n} = 0$, the noise operator correlation function is
$$ \langle\hat{\mathcal{F}}(t)\hat{\mathcal{F}}^\dagger(t')\rangle = \kappa\delta(t - t'). $$ {eq:9.173}
Using the normal modes defined in Eq. (9.162) and Eq. (9.163), we can rewrite the Langevin equations
$$ \frac{d\hat{x}}{dt} = -\left(\frac{\kappa}{2} - \tilde{\beta}\right)\hat{x} + \hat{\mathcal{F}}_x $$ {eq:9.174}
$$ \frac{d\hat{p}}{dt} = -\left(\frac{\kappa}{2} + \tilde{\beta}\right)\hat{p} + \hat{\mathcal{F}}_p. $$ {eq:9.175}
where the Hermitian noise operators $\hat{\mathcal{F}}_{x,p}$ are linear combinations of $\hat{\mathcal{F}}$ and $\hat{\mathcal{F}}^\dagger$ analogous to the quadrature operators:
$$ \hat{\mathcal{F}}_x = \frac{1}{\sqrt{2}}\left(\hat{\mathcal{F}}e^{i\theta/2} + \hat{\mathcal{F}}^\dagger e^{-i\theta/2}\right) $$ {eq:9.176}
$$ \hat{\mathcal{F}}_p = \frac{1}{\sqrt{2}i}\left(\hat{\mathcal{F}}e^{i\theta/2} - \hat{\mathcal{F}}^\dagger e^{-i\theta/2}\right), $$ {eq:9.177}
and their correlation functions follow directly from those of $\hat{\mathcal{F}}$, i.e.
$$ \langle\hat{\mathcal{F}}_x(t)\hat{\mathcal{F}}_x(t')\rangle = \langle\hat{\mathcal{F}}_p(t)\hat{\mathcal{F}}_p(t')\rangle = \frac{\kappa}{2}\delta(t - t'). $$ {eq:9.178}

We can formally solve for the time dependent quadrature components
$$ \hat{x}(t) = e^{-(\kappa/2 - \tilde{\beta})t}\hat{x}(0) + \int_0^t dt' e^{-(\kappa/2 - \tilde{\beta})(t - t')}\hat{\mathcal{F}}_x(t') $$ {eq:9.179}
$$ \hat{p}(t) = e^{-(\kappa/2 + \tilde{\beta})t}\hat{p}(0) + \int_0^t dt' e^{-(\kappa/2 + \tilde{\beta})(t - t')}\hat{\mathcal{F}}_p(t'). $$ {eq:9.180}

<!-- page 209 -->

Using the correlation function identities for the noise operators, we can also find the variances
$$ \langle\Delta\hat{x}^2(t)\rangle = \frac{1}{2}e^{-(\kappa/2 - \tilde{\beta})t} + \frac{\kappa}{2}\frac{1 - e^{-(\kappa/2 - \tilde{\beta})t}}{\kappa - 2\tilde{\beta}} $$ {eq:9.181}
$$ \langle\Delta\hat{p}^2(t)\rangle = \frac{1}{2}e^{-(\kappa/2 + \tilde{\beta})t} + \frac{\kappa}{2}\frac{1 - e^{-(\kappa/2 + \tilde{\beta})t}}{\kappa + 2\tilde{\beta}}. $$ {eq:9.182}
In the large-time limit, the uncertainty in $\hat{p}$ approaches an asymptotic but nonzero value
$$ \langle\Delta\hat{p}^2\rangle \to \frac{\kappa}{2(\kappa + 2\tilde{\beta})}, $$ {eq:9.183}
which shows that losses reduce the quantum correlations of the squeezed state.

### Steady state squeezing

When the cavity damping rate far exceeds the squeezing coefficient $\kappa \gg \beta$, both variances approach the classical value of $1/2$. Such strong losses collapse the squeezed state into a classical coherent state. In general, quantum correlations emerge from a balance between nonlinear coherent interactions and dissipation. We would like to identify the steady state result of this competition.

In the strongly pumped regime $\beta > \kappa/2$, however, we run into nonphysical results, because the predicted number of cavity photons grows indefinitely $\langle\hat{a}^\dagger\hat{a}\rangle \to \infty$. Our analysis is inadequate to describe the steady state behavior in this regime, because we have made an undepleted pump approximation. For finite interaction times, this approximation might suffice, but a steady-state solution requires a full treatment which accounts for these corrections using nonlinear operator equations.

Our solution is well-behaved in the intermediate regime $\beta < \kappa/2$, where
$$ \langle\Delta\hat{x}^2\rangle \to \frac{\kappa}{2(\kappa - 2\tilde{\beta})} $$ {eq:9.184}
$$ \langle\Delta\hat{p}^2\rangle \to \frac{\kappa}{2(\kappa + 2\tilde{\beta})}. $$ {eq:9.185}
Note in particular that at the threshold pumping rate $\beta = \kappa/2$, the maximum squeezing is only 50%. This limit arises from the exterior vacuum field which leaks into the cavity at rate $\kappa$, contaminating the non-classical states.

<!-- page 210 -->

### Squeezing in the output field

It might appear from our results thus far that one could only expect to see 50% squeezing in the steady state. Nevertheless, this limitation is not the end of the story. In an experiment, one looks not at the field inside the cavity but at the component which leaks out into the continuum. The output field can be found using the quantum mechanical version of the input-output relations
$$ \text{Classical}: E_\mathrm{out} = -rE_\mathrm{in} + tE_\mathrm{cavity} $$ {eq:9.186}
$$ \text{Quantum}: \hat{E}_\mathrm{out} = -\frac{\hat{\mathcal{F}}}{\sqrt{\kappa}} + \sqrt{\kappa}\hat{a}. $$ {eq:9.187}
Here we clearly see that the noise operator is due to leakage of photons in and out of the cavity. Since the output field is the sum of the reflected portion of the input field as well as the transmitted cavity field, we need to account for interference terms between the two components. We are interested in the continuous-wave regime, so it is convenient to work in the Fourier domain, in which the input-output relation gives us
$$ \hat{E}_\mathrm{out}(\omega) = -\frac{\hat{\mathcal{F}}(\omega)}{\sqrt{\kappa}} + \sqrt{\kappa}\hat{a}(\omega). $$ {eq:9.188}
The momentum quadrature component obeys a similar equation
$$ \hat{P}_\mathrm{out}(\omega) = -\frac{\hat{\mathcal{F}}_p(\omega)}{\sqrt{\kappa}} + \sqrt{\kappa}\hat{P}(\omega). $$ {eq:9.189}
From Eq. (9.175), we know the quadrature component inside the cavity
$$ \hat{P}(\omega) = \frac{\hat{\mathcal{F}}_p(\omega)}{i\omega + (\kappa/2 + \tilde{\beta})}, $$ {eq:9.190}
so we can solve for the external field
$$ \hat{P}_\mathrm{out}(\omega) = \frac{\hat{\mathcal{F}}_p(\omega)}{\sqrt{\kappa}}\left(\frac{\kappa}{i\omega + (\kappa/2 + \tilde{\beta})} - 1\right). $$ {eq:9.191}
In particular, when $\beta \to \kappa/2$ and $\omega \to 0$, the two components interfere destructively and $\hat{P}_\mathrm{out}(0) \to 0$. The output field can thus be perfectly squeezed!

For finite detuning between a Fourier component of the output field and the cavity frequency, the output only partially squeezed. The squeezing has a Lorentizian lineshape with width $\sim \kappa$ (see Figure 9.11). In practical experiments one would look at intermediate frequencies where classical noise can be suppressed and yet finite squeezing is present.

<!-- page 211 -->

> FIGURE {fig:9.11} src=../../media/ch09/fig-9-11.png
> caption: Squeezing in the momentum quadrature component of the output field, relative to the noise of a coherent state (known as the “standard quantum limit”).

### Homodyne detection

Generation of a squeezed state can be assessed only if there is some means for measuring the squeezing. Since the quadrature components oscillate at optical frequencies, direct detection of squeezing is an extremely difficult task. Instead, a technique known as “homodyne detection” is used to transform the signal to lower frequencies where standard electronics can be used.

Homodyne detection employs a strong classical field $\hat{b}_{LO}$ in a coherent state $\bar{\beta}e^{i\phi}$ with the same central frequency as the signal. When this so-called “local oscillator” field is mixed with the signal on a 50/50 beamsplitter, the two output fields are
$$ \hat{a}_\mathrm{out}^{(1)} = \frac{1}{\sqrt{2}}\left(\hat{a} + i\hat{b}_{LO}\right) $$ {eq:9.192}
$$ \hat{a}_\mathrm{out}^{(2)} = \frac{1}{\sqrt{2}}\left(i\hat{a} + \hat{b}_{LO}\right). $$ {eq:9.193}
Photodetectors measure the intensity of the two fields, which is proportional to the number of photons in each arm of the beamsplitter:
$$ (\hat{a}_\mathrm{out}^{(1)})^\dagger\hat{a}_\mathrm{out}^{(1)} = \frac{1}{2}\left(\hat{a}^\dagger\hat{a} + \hat{b}_{LO}^\dagger\hat{b}_{LO}\right) + \frac{i}{2}\left(\hat{a}^\dagger\hat{b}_{LO} - \hat{b}_{LO}^\dagger\hat{a}\right) $$ {eq:9.194}
$$ (\hat{a}_\mathrm{out}^{(2)})^\dagger\hat{a}_\mathrm{out}^{(2)} = \frac{1}{2}\left(\hat{a}^\dagger\hat{a} + \hat{b}_{LO}^\dagger\hat{b}_{LO}\right) - \frac{i}{2}\left(\hat{a}^\dagger\hat{b}_{LO} - \hat{b}_{LO}^\dagger\hat{a}\right). $$ {eq:9.195}

<!-- page 212 -->

> FIGURE {fig:9.12} src=../../media/ch09/fig-9-12.png
> caption: Schematic for homodyne detection of the quantum field $\hat{a}$. A local oscillator $\hat{b}_{LO}$ is mixed with the signal on a beamsplitter, and the two output fields are subtracted to provide a phase-sensitive measurement of the quadrature components of $\hat{a}$.

By measuring the difference current, which is proportional to the difference in photon number, one can eliminate the average number of photons and detect only the beatnote between the signal and the local oscillator:
$$ \hat{n}_- = (\hat{a}_\mathrm{out}^{(1)})^\dagger\hat{a}_\mathrm{out}^{(1)} - (\hat{a}_\mathrm{out}^{(2)})^\dagger\hat{a}_\mathrm{out}^{(2)} $$ {eq:9.196}
$$ = i\left(\hat{a}^\dagger\hat{b}_{LO} - \hat{b}_{LO}^\dagger\hat{a}\right). $$ {eq:9.197}
For an initial state of the signal and local oscillator $|\psi\rangle = |\psi\rangle_a|\beta\rangle$, this difference current provides a measure of the quadrature components of the signal
$$ \langle\hat{n}_-\rangle = \bar{\beta}\langle i\left(\hat{a}^\dagger e^{i\phi} - \hat{a}e^{-i\phi}\right)\rangle = \bar{\beta}\langle P_\phi\rangle $$ {eq:9.198}
$$ \langle\Delta\hat{n}_-^2\rangle \approx \bar{\beta}^2\langle\Delta P_\phi^2\rangle $$ {eq:9.199}
provided that $\bar{\beta} \gg 1$ is large.

### Application to precision measurements

Precision measurements can be quantum mechanically limited by fluctuations in classical laser light. Replacing the laser beam with squeezed light can improve certain measurements, and the potential gain in precision provided the original motivation for investigation of squeezing.

<!-- page 213 -->

> FIGURE {fig:9.13} src=../../media/ch09/fig-9-13.png
> caption: Three methods for measuring a phase shift $\phi$. (a) Using a coherent state, the quadrature variance in $\hat{p}$ sets a minimum value of $\phi$ which can be measured. (b) Using a squeezed state with $\langle\Delta P^2\rangle < 1/2$, a more precise measurement can be made. (c) A similar improvement in precision can be obtained simply by using a larger coherent field, which is considerably easier to create than a squeezed state.

<!-- page 214 -->

Suppose an interferometric measurement required finding the difference in phase between two fields (see Figure 9.13 and Figure 9.14). If the fields have a squeezing parameter $r$, the signal
$$ \Delta P = \langle x\rangle\delta\phi $$ {eq:9.200}
can only be measured to within the noise
$$ \langle\Delta P^2\rangle = \frac{1}{2}e^{-2r}. $$ {eq:9.201}
The minimum phase which can be measured is
$$ \delta\phi_\mathrm{min} \sim \frac{1}{\langle\hat{x}\rangle}e^{-r} \sim \frac{1}{\sqrt{n}}e^{-r}. $$ {eq:9.202}
Clearly a nonzero squeezing parameter offers improvement in the sensitivity of this measurement.

> FIGURE {fig:9.14} src=../../media/ch09/fig-9-14.png
> caption: An experimental configuration for measuring a phase shift $\delta\phi$ using squeezed light to improve the precision (see PRL 59 278 (1987) and PRL 59 2153 (1987).

For example, consider the interferometer illustrated in Figure 9.14. The initial states $\hat{b}_i$ and $\hat{a}_i$ are a coherent state $|\beta\rangle$ and a squeezed vacuum $e^{r/2(\hat{a}^2 - (\hat{a}^\dagger)^2)}|0\rangle$ respectively. After mixing these fields on a beam splitter, a phase shift $\phi = \pi/2 + \delta\phi$ is induced in one of the arms before recombination on a second beamsplitter. Photodetectors measure the difference in photon number in the two output beams of the second beamsplitter,
$$ \hat{n}_- = \hat{b}_f^\dagger\hat{b}_f - \hat{a}_f^\dagger\hat{a}_f $$ {eq:9.203}
$$ = \cos\phi\left(\hat{b}_i^\dagger\hat{b}_i - \hat{a}_i^\dagger\hat{a}_i\right) - i\sin\phi\left(\hat{a}_i^\dagger\hat{b}_i - \hat{b}_i^\dagger\hat{a}_i\right). $$ {eq:9.204}

<!-- page 215 -->

The mean and variance of this quantity give the phase difference $\delta\phi$ and the precision of the measurement
$$ \langle\hat{n}_-\rangle \sim \bar{\beta}\delta\phi\langle\hat{b}_i^\dagger\hat{b}_i\rangle $$ {eq:9.205}
$$ \langle\Delta\hat{n}_-^2\rangle_{(\delta\phi \approx 0)} \sim \bar{\beta}^2\langle\Delta P^2\rangle_a \to 0. $$ {eq:9.206}

Experiments in the late1980’s demonstrated enhancement of interferometric sensitivity using squeezed light. Nevertheless, these ideas never found practical application because (roughly speaking) similar improvements can be made simply by increasing the strength of the coherent input field (see Figure 9.13c). Increasing laser power is considerably easier than generating squeezed light, so the original motivation for squeezed light generation has not proved useful in practice. Note however that highly squeezed states may still find applications, for example in the field of quantum information or for gravity wave detection, where increasing the number of photons is not an option.

### Squeezing in atoms

Many of the concepts we have considered in the context of photonic excitations will translate directly to atomic physics. In particular, it is possible to consider spin squeezing in an atomic ensemble, where the total or “collective” spin is defined as the vector sum of the $N$ individual spins
$$ \mathbf{S} = \sum_i^N S_i. $$ {eq:9.207}
If we consider a spin-polarized sample of $S_i = 1/2$ atoms, the collective spin projection we find $\mathbf{S}_z = N/2$. Although the expectation values of the orthogonal projections vanish, $\langle\mathbf{S}_x\rangle = \langle\mathbf{S}_y\rangle = 0$, their fluctuations do not, since
$$ \langle\mathbf{S}_x^2\rangle = \langle\mathbf{S}_y^2\rangle = \frac{N}{2}. $$ {eq:9.208}

<!-- page 216 -->

This uncertainty in the orthogonal projections is known as the “atom shot noise.” In analogy to squeezed light, however, it is possible to use effective interactions between atoms to squeeze one of the spin projections below this shot noise limit at the expense of increasing fluctuations in the other projection:
$$ \langle\mathbf{S}_x^2\rangle < \frac{N}{2} $$ {eq:9.209}
$$ \langle\mathbf{S}_y^2\rangle > \frac{N}{2}. $$ {eq:9.210}

### Atom-photon correlations

The ideas of probabilistic entanglement generation and post-selection (which we first encountered for parametric downconversion) can also be applied to atom-photon entanglement. As a concrete example, consider the case of N-atom Raman scattering, where
$$ \hat{H} = g\hat{a}^\dagger\sum_i^N S_i^\dagger + g^*\hat{a}\sum_i^N S_i $$ {eq:9.211}
$$ = g\hat{a}^\dagger\mathbf{S}^\dagger + g^*\hat{a}\mathbf{S}. $$ {eq:9.212}
This Hamiltonian bears a remarkable resemblance to the effective Hamiltonian for non-degenerate parametric down-conversion, and it leads to precisely the same sort of probabilistically entangled state. By conditioning on detection of the entangled photon, one can project out the vacuum state and photon loss. This technique could potentially permit entanglement of different atomic ensembles, which has bearing on a number of applications in quantum information science.

<!-- notes
- Typos kept: "the atomic polarization$\sigma_{13}^{(j)}$" (no space, as printed); "which can be described an effective Hamiltonian" (missing "by"); "the output only partially squeezed" (missing "is"); "Lorentizian" for Lorentzian; "late1980's" (no space); Figure 9.14's caption leaves its parenthesis "(see PRL 59 278 (1987) and PRL 59 2153 (1987)." unclosed.
- Eq. (9.146): the left side $\dot{\sigma}_{13}^{(j)}$ is printed without the hat the right side carries; kept.
- Text after (9.146): "the operator $\hat{\sigma}_{21}$ is essentially equal to its classical expectation value $\hat{\sigma}_{12} = \Omega_0/\Delta$": the index is meant to be 21 on both (as the next sentence uses); kept.
- Eq. (9.143): the left side is printed $\partial\mathcal{E}_-^*/\partial t$ while the right side is $\tilde{\beta}\mathcal{E}_-$; meant is $\partial\mathcal{E}_-/\partial t$. Kept.
- Eq. (9.149) carries $\Omega_0$ while the identification after it uses $\Omega_0^*$ for $\beta^*$; one of the two conjugations is inconsistent. Kept.
- Eq. (9.158): the thermal distribution is printed without its $n$ dependence; meant is $p(n) = \tanh^{2n}\xi/\cosh^2\xi$. Kept.
- Eqs. (9.181), (9.182): the exponents should be doubled, $e^{-(\kappa - 2\tilde{\beta})t}$ in both terms (the variance decays at twice the amplitude rate; with $\kappa = 0$ the printed form does not reduce to (9.168)). The long-time limits (9.183)-(9.185) are unaffected. Kept.
- Eq. (9.205): with $\phi = \pi/2 + \delta\phi$, $\langle\hat{n}_-\rangle \approx -\delta\phi\langle\hat{b}_i^\dagger\hat{b}_i\rangle = -\delta\phi\bar{\beta}^2$; the extra factor $\bar{\beta}$ (and the sign) look wrong. Kept.
- Eqs. (9.208)-(9.210): for $N$ spin-1/2 atoms polarized along z, $\langle\mathbf{S}_x^2\rangle = \langle\mathbf{S}_y^2\rangle = N/4$ (with $\hbar = 1$), not $N/2$; the shot-noise limit in (9.209), (9.210) is likewise $N/4$. Kept.
- Figure 9.9 stands at the top of page 202, inside the paragraph that follows (9.141); its marker sits after that paragraph. Figure 9.13 fills page 213 inside the first paragraph of "Application to precision measurements"; its marker sits after that paragraph. Figure 9.12 opens page 212; the "By measuring" paragraph after it is set as a new block.
-->

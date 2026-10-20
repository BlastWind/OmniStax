<!-- page 200 -->
9.4
Quantum dynamics in non-linear mixing pro-
cesses
Linear amplification
We have seen how noise suppresses quantum correlations of a field mode
subject to decay. Linear amplification likewise adds noise to the initial state
of the field because it always involves spontaneous emission processes. The
gain and associated noise of a linear amplifier can be modeled by a gas
of inverted two-level atoms or inverted harmonic oscillators.
For a gain
coefficient $σ >$ 1, one can derive a very general result:
$√$
ˆ $a$ out = $√σ$ ˆ $a$ in +
$σ −$ 1ˆ $b†,$
(9.135)
where the noise operator ˆ $b†$ is analogous to vacuum noise, but acts rather
differently because it comes from a spontaneous emission process. Like other
noise operators, it ensures that the commutation relations for the field op-
erators do not grow or decay with time. The additional noise is related to
the quantum no cloning theorem, which states that an arbitrary quantum
<!-- page 201 -->
state cannot be copied. Similarly, we find here that a quantum state cannot
be amplified without losing some information due to added noise.
9.4.1
Nonlinear amplification
We have seen how nonlinear optical phenomena produce non-classical states
of light whereas losses act to destroy non-classical correlations. The interplay
of these two competing mechanisms can be illustrated by a specific example:
the generation of squeezed light. We will first show how a squeezed state
can be created by a lossless down-conversion process, and then discuss the
effects of losses and noise.
Degenerate parametric down-conversion
Our semiclassical description of parametric down-conversion described the
generation of a pair of fields $E$ 1 and $E$ 2 by a strong pump field $E$ 0, where
$ν$ 1 + $ν$ 2 = $ν$ 0 and ∆ $k$ = 0. Away from atomic resonances, the polarizations
which drive $E$ 1 and $E$ 2 include both the linear and nonlinear susceptibilities:
$χ$ (2)
$P$ 1
$∼$
2 + $χ$ 1
(9.136)
2 $E$ 0 $E∗$
2 $E$ 1
$χ$ (2)
$P$ 2
$∼$
1 + $χ$ 2
(9.137)
2 $E$ 0 $E∗$
2 $E$ 2 $.$
One method of squeezed light generation uses a degenerate version of
parametric down-conversion for fields confined to a cavity. The pump field
at frequency $ν$ 0 drives a nonlinear medium inside a cavity whose frequency
$νc$ = $ν$ 0 $/$ 2 determines the frequencies of $E$ 1 and $E$ 2, $ν$ 1 = $ν$ 2 = $νc$ . Assuming
that the polarizations match, the two lower frequency fields are identical
$E$ 1 = $E$ 2. This degenerate version of parametric down-conversion in a cavity
is often called a “degenerate optical parametric oscillator” (OPO).
The polarization oscillating at the cavity frequency (which generates the
fields $E$ 1 = $E$ 2) includes effects from both coherences
$P$
=
$μ$ 31 $ρ$ 31 + $μ$ 23 $ρ$ 23
(9.138)
$∼$
$χ$ (2) $E$ 0 $E∗$
1 + $χ$ 1 + $χ$ 2
$E$ 1 $.$
(9.139)
2
The evolution equation for the field $E$ 1 inside the cavity will contain a driving
term from this polarization. Under phase-matching conditions,
$∂E$ 1
=
$iβE∗$
1
(9.140)
$∂t$
$∂E∗$
1
=
$−iβ∗E$ 1 $,$
(9.141)
$∂t$
<!-- page 202 -->
where $β$ incorporates the pump power and nonlinear susceptibility into one
constant. These equations may appear similar to the propagation of a field
in a linear medium, where  ̇ $E ∼βE$ . In this case, however, the field evolves
differently than its complex conjugate, so we will need to keep careful track
of the phases.
Phase-dependent amplification
Since the phase of $β$ is arbitrary (only the relative phase of $E$ 1 and $β$ matters),
we are free to choose it to be purely imaginary, with $β$ = $i$  ̃ $β$ . To decouple
the evolution equations, we will work in the normal mode basis $E±$ = $E$ 1 $±E∗$
1
where they become
$∂E$ +
=
$−$  ̃ $βE$ +
(9.142)
$∂t$
$∂E∗$
$−$
=
 ̃ $βE−.$
(9.143)
$∂t$
One normal mode is amplified while the other is de-amplified, and the gain
depends explicitly on the initial phase of $E$ 1 relative to $β ∝E$ 0. When $E$ 1
is real, the field is attenuated for  ̃ $β >$ 0 whereas if $E$ 1 is imaginary it is
amplified.
<!-- page 203 -->
Quantum mechanical approach
We would like to be able to convert our classical description of degenerate
parametric down-conversion to a quantum mechanical version. The simplest
approach would replace the cavity electric field values by the cavity photon
annihilation operators $E →$ ˆ $a$ . Such a naive substitution is in fact valid for
lossless systems described by linear equations of motion, so in this case it
turns out to work. However, it is not true in general, and we can use a more
rigorous approach to show how the simple case arises.
Our quantum mechanical treatment will describe the generation of macro-
scopic fields. We will thus use the Heisenberg-Langevin approach, which
provides a direct correspondence to the classical description we have al-
ready derived. The Hamiltonian governing interactions between the cavity
mode and the atoms is
$$
$$
ˆ $H$ = $−ħ$ ˆ $a† X$
$gj$ ˆ $σ$ ( $j$ )
+ $h.c.,$
(9.144)
32 + $gj$ ˆ $σ$ ( $j$ )
13
$j$
while the pump drive terms are ˆ $Hpump$ = $−$ Ω0ˆ $σ$ 21 + $h.c.$ . In the absence of
loss from the cavity, the Langevin equation of motion for the field mode ˆ $a$
is
$X$
$$
$$
$d$ ˆ $a$
$gj$ ˆ $σ$ ( $j$ )
$.$
(9.145)
32 + $gj$ ˆ $σ$ ( $j$ )
13
$dt$ = $i$
$j$
Corresponding equations can also be found for the atomic polarizations. For
example, the atomic polarization $σ$ ( $j$ )
13 obeys
 ̇ $σ$ ( $j$ )
13 = $−$ ( $γ$ 13 + $iδ$ )ˆ $σ$ ( $j$ )
13 $−igj$ ˆ $a†$ ˆ $σ$ ( $j$ )
12 + $igj$ ˆ $a$ (ˆ $σ$ 11 $−$ ˆ $σ$ 33) $−i$ Ω0ˆ $σ$ 23 + ˆ $F$ 13 $,$ (9.146)
where $δ$ is the detuning from the intermediate state. If the detunings are
sufficiently large, we can neglect the decay of the atoms and the associated
noise terms $γ$ 13 $→$ 0 $,$ ˆ $F$ 13 $→$ 0. Furthermore, if the pump field is assumed
strong and classical then the operator ˆ $σ$ 21 is essentially equal to its classical
expectation value ˆ $σ$ 12 = Ω0 $/$ ∆(where ∆is the detuning of the classical
pump field from the $|$ 1 $⟩→|$ 2 $⟩$ transition).
With this value for ˆ $σ$ 21, the
term $−i$ Ω0ˆ $σ$ 23 $≈−i$ ( $|$ Ω0 $|$ 2 $/$ ∆)ˆ $σ$ 13 can be eliminated by absorbing it into the
definition of $δ$ . Using adiabatic elimination we obtain
ˆ $σ$ ( $j$ )
(9.147)
13 = $−$ Ω0
∆ $δgj$ ˆ $a† −gj$ ˆ $a$
$δ .$
This atomic operator is analogous to the classical expression for the po-
larization, while $gj$ ˆ $a†$ plays the role of the classical Rabi frequency of the
<!-- page 204 -->
generated fields $E$ 1. The other term in Eq. 9.145 depends on
ˆ $σ$ 32 $≈$ Ω0
(9.148)
∆ˆ $σ$ 31 $≈−$ Ω0
∆ $δgj$ ˆ $a†.$
When the phase-matching condition is fulfilled,
$d$ ˆ $a$
$X$
Ω0
$j$ ˆ $a†.$
(9.149)
$dt$ = $−$ 2 $i$
∆ $δg$ 2
$j$
The Hermitian conjugate of the field operator appears on the right hand
side of the equation, much as the complex conjugate appeared in the clas-
sical equations of motion. Note that our system involves a classical pump,
linear operator equations, and large detunings, so the Heisenberg-Langevin
approach gives precisely the same result we would have obtained from our
naive substitution. If the system involved nonlinear operator terms, an or-
dering ambiguity would arise when going from the classical description to
the quantum description.
Ω $∗$
0
Identifying the constant of proportionality $β∗$ = $−$ 2 $P$
$j$
∆ $δg$ 2
$j$ , we find
$d$ ˆ $a$
=
$−iβ∗$ ˆ $a†$
(9.150)
$dt$
$d$ ˆ $a†$
=
$iβ$ ˆ $a.$
(9.151)
$dt$
This set of equations could be derived from an effective Hamiltonian
$$
ˆ $H$ eff= $ħ$
$β$ ˆ $a$ 2 + $β∗$ (ˆ $a†$ )2 $$
$.$
(9.152)
2
Physically, the effective Hamiltonian describes the absorption or emission of
photon pairs, precisely as we would expect for a degenerate down-conversion
process. Although we might have guessed its form, we have now derived it
from microscopic considerations.
Non-degenerate parametric down-conversion
By a similar calculation, a non-degenerate parametric down-conversion pro-
cess obeys the equations of motion
$d$ ˆ $a$ 2
=
$−iβ∗$ ˆ $a†$
(9.153)
1
$dt$
$d$ ˆ $a†$
1
=
$iβ$ ˆ $a$ 2 $,$
(9.154)
$dt$
<!-- page 205 -->
which can be described an effective Hamiltonian
$$
$$
ˆ $H$ eff= $ħ$
$β$ ˆ $a$ 1ˆ $a$ 2 + $β∗$ ˆ $a†$
$.$
(9.155)
1ˆ $a†$
2
Here, ˆ $a$ 1 and ˆ $a$ 2 are the two phase-matched field modes which are amplified
by the process. As a vacuum field evolves under this effective Hamiltonian,
it creates a state
$|ψ⟩$
=
$e−i$ ˆ $H$ eff $t/ħ|$ vac $⟩$
(9.156)
=
$|$ vac $⟩$ + $ξ|$ 1 $,$ 1 $⟩$ + $ξ$ 2 $|$ 2 $,$ 2 $⟩$ + $. . . ,$
(9.157)
where $|n, m⟩$ = (ˆ $a†$
1) $n$ (ˆ $a†$
2) $m|$ vac $⟩$ and $ξ$ = $−iβ∗t$ . It is useful to distinguish
two limits in this process: $ξ <$ 1 and $ξ ≫$ 1. In the first case, the emission
of photons is primarily a spontaneous process, which results in correlated
generation of photon pairs. In the second case, stimulated emission plays
an important role, and the system can be used as an optical parametric
oscillator to generate squeezed states of light.
States generated by non-degenerate parametric down-conversion exhibit
correlated photon statistics. While each mode (i.e. after tracing over the
other mode) is in a thermal state, with a distribution function (see e.g. Walls
& Milburn, 5.2.5)
$p$ ( $n$ ) = tanh2 $ξ$
(9.158)
cosh2 $ξ$
the difference in photon numbers between the two modes is precisely zero:
∆ˆ $n|ψ⟩$ = (ˆ $n$ 1 $−$ ˆ $n$ 2) $|ψ⟩$ = 0 $.$
(9.159)
This is an example of non-classical photon correlations: the photon number
differences are suppressed far below the photon shot-noise limit of $⟨$ (ˆ $n$ 1 $−$ ˆ $n$ 2)2 $⟩$ =
$n$ 1 + $n$ 2, which is what one would obtain by dividing a beam in half on a
beamsplitter.
The correlated photons created in parametric down-conversion have a
variety of applications. They can be used for heralded single photon gener-
ation by measuring only one of the two modes. Conditioned on a detection
event in the first mode, there should be precisely one photon in the second
mode. A slightly more complicated application uses some internal property
of the modes – for example polarization – to encode an entangled state. In
this situation, the resulting state could resemble
$|ψ⟩$ = $|$ vac $⟩$ + $ξ$
$√$
(9.160)
2 ( $|$ 1 $H,$ 1 $V ⟩$ + $|$ 1 $V ,$ 1 $H⟩$ ) + $O$ ( $ξ$ 2) $.$
<!-- page 206 -->
Provided that the probability of photon generation $∼ξ ≪$ 1, the system is
either in the vacuum or in an entangled two-photon state. As is the case with
many single-photon processes, generation of this entangled state is proba-
bilistic. Furthermore, losses inherent in any realistic system will destroy the
entangled state. However, by conditioning all subsequent measurements on
detection of both photons (a process known as “post-selection”), we can use
our state only in the situation where two photons were generated and nei-
ther was lost. In this manner one can devise few-photon experiments which
tolerate probabilistic processes and are insensitive to loss.
9.4.2
Squeezed states
In the situation where $ξ ≫$ 1, degenerate parametric down-conversion can
lead to the generation of squeezed states. Returning to the situation where
ˆ $a$ 1 = ˆ $a$ 2 = ˆ $a$ , we will now allow the driving field to have an arbitrary phase
$θ$ , so that the gain coefficient becomes
$β$ =  ̃ $βei$ ( $θ−π/$ 2) $.$
(9.161)
Using this phase to weight the field operators, we define quadrature compo-
nents of the cavity mode
$$
1
ˆ $x$
=
$√$
ˆ $aeiθ/$ 2 + ˆ $a†e−iθ/$ 2 $$
(9.162)
2
$$
1
ˆ $p$
=
$√$
ˆ $aeiθ/$ 2 $−$ ˆ $a†e−iθ/$ 2 $$
$,$
(9.163)
2 $i$
which are “normal modes” of the operator equations of motion
$d$ ˆ $x$
=
 ̃ $β$ ˆ $x$
(9.164)
$dt$
$d$ ˆ $p$
=
$−$  ̃ $β$ ˆ $p.$
(9.165)
$dt$
The $x$ quadrature component is amplified for  ̃ $β >$ 0, whereas the $p$ compo-
nent is attenuated:
 ̃ $βt$
ˆ $x$ ( $t$ )
=
ˆ $x$ (0) $e$
(9.166)
ˆ $p$ ( $t$ )
=
ˆ $p$ (0) $e−$  ̃ $βt.$
(9.167)
Hence, if the cavity mode starts out in a coherent state, the variance of the
quadrature components will change in opposite directions.
1
$⟨$ ∆ˆ $x$ 2 $⟩$
=
(9.168)
2 $e$ 2 ̃ $βt →∞$
<!-- page 207 -->
1
$⟨$ ∆ˆ $p$ 2 $⟩$
=
(9.169)
2 $e−$ 2 ̃ $βt →$ 0
Note that the field is still in a minimum-uncertainty state, since $⟨$ ∆ˆ $p$ 2 $⟩⟨$ ∆ˆ $x$ 2 $⟩$ =
1 $/$ 4, but its noise properties are “squeezed” relative to the initial coherent
state.
Mathematically, the squeezed state can be represented by the time evo-
lution operator for the effective Hamiltonian acting on the initial coherent
state $|α⟩$ :
$|ψ⟩Sq$ = $e−i$ ( $β∗$ (ˆ $a†$ )2+ $β$ ˆ $a$ 2) $t/$ 2 $|α⟩.$
(9.170)
This formal definition of a squeezed state allows all of its properties to be
calculated. Note that if we started out in the vacuum $α$ = 0, the effective
Hamiltonian would add and subtract photons in pairs, so the final squeezed
state would only contain superpositions of even numbers of photons. Clearly
such a state is very different from a coherent state.
9.4.3
Effects of loss
Our analysis predicts that as time progresses, one quadrature component of
the squeezed state will vanish while the other will diverge. From a practical
perspective, we would expect such divergences to be damped out, so it is
important to account for decay processes to obtain a realistic description of
squeezed light generation.
<!-- page 208 -->
Squeezed light generation in a damped cavity
We will consider only losses from the cavity, which are the simplest type of
noise to incorporate into our analysis. The Langevin equations for the field
operators are modified by a decay rate $κ$ and an associated noise operator
ˆ $F$ ,
$d$ ˆ $a$
=
$−iβ∗$ ˆ $a† −κ$
(9.171)
$dt$
2 ˆ $a$ + ˆ $F$
$d$ ˆ $a†$
=
$iβ$ ˆ $a −κ$
(9.172)
$dt$
2 ˆ $a†$ + ˆ $F†.$
The cavity decay corresponds to leakage of photons in and out of the cavity
to the outside world through a semi-transparent mirror. The field modes
outside the cavity (many modes) now act as the reservoir for the single
cavity mode we considered. When the field outside the cavity is initially in
the vacuum state  ̄ $n$ = 0, the noise operator correlation function is
$⟨$ ˆ $F$ ( $t$ ) ˆ $F†$ ( $t′$ ) $⟩$ = $κδ$ ( $t −t′$ ) $.$
(9.173)
Using the normal modes defined in Eq. (9.162) and Eq. (9.163), we can
rewrite the Langevin equations
$κ$
$$
$d$ ˆ $x$
=
$−$
ˆ $x$ + ˆ $Fx$
(9.174)
$dt$
2 $−$  ̃ $β$
$κ$
$$
$d$ ˆ $p$
=
$−$
ˆ $p$ + ˆ $Fp.$
(9.175)
$dt$
2 +  ̃ $β$
where the Hermitian noise operators ˆ $Fx,p$ are linear combinations of ˆ $F$ and
ˆ $F†$ analogous to the quadrature operators:
$$
1
ˆ $Fx$
=
$√$
ˆ $Feiθ/$ 2 + ˆ $F†e−iθ/$ 2 $$
(9.176)
2
$$
1
ˆ $Fp$
=
$√$
ˆ $Feiθ/$ 2 $−$ ˆ $F†e−iθ/$ 2 $$
$,$
(9.177)
2 $i$
and their correlation functions follow directly from those of ˆ $F$ , i.e.
$⟨$ ˆ $Fx$ ( $t$ ) ˆ $Fx$ ( $t′$ ) $⟩$ = $⟨$ ˆ $Fp$ ( $t$ ) ˆ $Fp$ ( $t′$ ) $⟩$ = $κ$
(9.178)
2 $δ$ ( $t −t′$ ) $.$
We can formally solve for the time dependent quadrature components
$Z t$
ˆ $x$ ( $t$ )
=
$e−$ ( $κ/$ 2 $−$  ̃ $β$ ) $t$ ˆ $x$ (0) +
$dt′e−$ ( $κ/$ 2 $−$  ̃ $β$ )( $t−t′$ ) ˆ $Fx$ ( $t′$ )
(9.179)
0
$Z t$
ˆ $p$ ( $t$ )
=
$e−$ ( $κ/$ 2+ ̃ $β$ ) $t$ ˆ $p$ (0) +
$dt′e−$ ( $κ/$ 2+ ̃ $β$ )( $t−t′$ ) ˆ $Fp$ ( $t′$ ) $.$
(9.180)
0
<!-- page 209 -->
Using the correlation function identities for the noise operators, we can also
find the variances
1
1 $−e−$ ( $κ/$ 2 $−$  ̃ $β$ ) $t$
$⟨$ ∆ˆ $x$ 2( $t$ ) $⟩$
=
(9.181)
2 $e−$ ( $κ/$ 2 $−$  ̃ $β$ ) $t$ + $κ$
2
$κ −$ 2 ̃ $β$
1
1 $−e−$ ( $κ/$ 2+ ̃ $β$ ) $t$
$⟨$ ∆ˆ $p$ 2( $t$ ) $⟩$
=
$.$
(9.182)
2 $e−$ ( $κ/$ 2+ ̃ $β$ ) $t$ + $κ$
2
$κ$ + 2 ̃ $β$
In the large-time limit, the uncertainty in ˆ $p$ approaches an asymptotic but
nonzero value
$κ$
$⟨$ ∆ˆ $p$ 2 $⟩→$
$,$
(9.183)
2( $κ$ + 2 ̃ $β$ )
which shows that losses reduce the quantum correlations of the squeezed
state.
Steady state squeezing
When the cavity damping rate far exceeds the squeezing coefficient $κ ≫β$ ,
both variances approach the classical value of 1 $/$ 2. Such strong losses col-
lapse the squeezed state into a classical coherent state. In general, quantum
correlations emerge from a balance between nonlinear coherent interactions
and dissipation. We would like to identify the steady state result of this
competition.
In the strongly pumped regime $β > κ/$ 2, however, we run into nonphys-
ical results, because the predicted number of cavity photons grows indefi-
nitely $⟨$ ˆ $a†$ ˆ $a⟩→∞$ . Our analysis is inadequate to describe the steady state
behavior in this regime, because we have made an undepleted pump approx-
imation. For finite interaction times, this approximation might suffice, but
a steady-state solution requires a full treatment which accounts for these
corrections using nonlinear operator equations.
Our solution is well-behaved in the intermediate regime $β < κ/$ 2, where
$κ$
$⟨$ ∆ˆ $x$ 2 $⟩$
$→$
(9.184)
2( $κ −$ 2 ̃ $β$ )
$κ$
$⟨$ ∆ˆ $p$ 2 $⟩$
$→$
$.$
(9.185)
2( $κ$ + 2 ̃ $β$ )
Note in particular that at the threshold pumping rate $β$ = $κ/$ 2, the maxi-
mum squeezing is only 50%. This limit arises from the exterior vacuum field
which leaks into the cavity at rate $κ$ , contaminating the non-classical states.
<!-- page 210 -->
Squeezing in the output field
It might appear from our results thus far that one could only expect to see
50% squeezing in the steady state. Nevertheless, this limitation is not the
end of the story. In an experiment, one looks not at the field inside the cavity
but at the component which leaks out into the continuum. The output field
can be found using the quantum mechanical version of the input-output
relations
Classical : $E$ out
=
$−rE$ in + $tE$ cavity
(9.186)
ˆ $F$
Quantum :
ˆ $E$ out
=
$−$
$√κ$ + $√κ$ ˆ $a.$
(9.187)
Here we clearly see that the noise operator is due to leakage of photons in and
out of the cavity. Since the output field is the sum of the reflected portion of
the input field as well as the transmitted cavity field, we need to account for
interference terms between the two components. We are interested in the
continuous-wave regime, so it is convenient to work in the Fourier domain,
in which the input-output relation gives us
ˆ $F$ ( $ω$ )
ˆ $E$ out( $ω$ ) = $−$
$√κ$ + $√κ$ ˆ $a$ ( $ω$ ) $.$
(9.188)
The momentum quadrature component obeys a similar equation
ˆ $Fp$ ( $ω$ )
ˆ $P$ out( $ω$ ) = $−$
$√κ$
+ $√κ$ ˆ $P$ ( $ω$ ) $.$
(9.189)
From Eq. (9.175), we know the quadrature component inside the cavity
ˆ $Fp$ ( $ω$ )
ˆ $P$ ( $ω$ ) =
$,$
(9.190)
$iω$ + ( $κ/$ 2 +  ̃ $β$ )
so we can solve for the external field
$$
$$
ˆ $Fp$ ( $ω$ )
$κ$
ˆ $P$ out( $ω$ ) =
$√κ$
$−$ 1
$.$
(9.191)
$iω$ + ( $κ/$ 2 +  ̃ $β$ )
In particular, when $β →κ/$ 2 and $ω →$ 0, the two components interfere de-
structively and ˆ $P$ out(0) $→$ 0. The output field can thus be perfectly squeezed!
For finite detuning between a Fourier component of the output field and
the cavity frequency, the output only partially squeezed.
The squeezing
has a Lorentizian lineshape with width $∼κ$ (see Figure 9.11). In practical
experiments one would look at intermediate frequencies where classical noise
can be suppressed and yet finite squeezing is present.
<!-- page 211 -->
Homodyne detection
Generation of a squeezed state can be assessed only if there is some means for
measuring the squeezing. Since the quadrature components oscillate at op-
tical frequencies, direct detection of squeezing is an extremely difficult task.
Instead, a technique known as “homodyne detection” is used to transform
the signal to lower frequencies where standard electronics can be used.
Homodyne detection employs a strong classical field ˆ $bLO$ in a coherent
state  ̄ $βeiφ$ with the same central frequency as the signal. When this so-called
“local oscillator” field is mixed with the signal on a 50 $/$ 50 beamsplitter, the
two output fields are
$$
$$
1
ˆ $a$ (1)
=
$√$
ˆ $a$ + $i$ ˆ $bLO$
(9.192)
out
2
$$
$$
1
ˆ $a$ (2)
=
$√$
$i$ ˆ $a$ + ˆ $bLO$
$.$
(9.193)
out
2
Photodetectors measure the intensity of the two fields, which is proportional
to the number of photons in each arm of the beamsplitter:
$$
$$
$$
$$
1
(ˆ $a$ (1)
out) $†$ ˆ $a$ (1)
out
=
ˆ $a†$ ˆ $a$ + ˆ $b†$
+ $i$
ˆ $a†$ ˆ $bLO −$ ˆ $b†$
(9.194)
$LO$ ˆ $bLO$
$LO$ ˆ $a$
2
2
$$
$$
$$
$$
1
(ˆ $a$ (2)
out) $†$ ˆ $a$ (2)
out
=
ˆ $a†$ ˆ $a$ + ˆ $b†$
$−i$
ˆ $a†$ ˆ $bLO −$ ˆ $b†$
$.$
(9.195)
$LO$ ˆ $bLO$
$LO$ ˆ $a$
2
2
<!-- page 212 -->
By measuring the difference current, which is proportional to the difference
in photon number, one can eliminate the average number of photons and
detect only the beatnote between the signal and the local oscillator:
ˆ $n−$
=
(ˆ $a$ (1)
out) $†$ ˆ $a$ (1)
out $−$ (ˆ $a$ (2)
out) $†$ ˆ $a$ (2)
out
(9.196)
$$
$$
=
$i$
ˆ $a†$ ˆ $bLO −$ ˆ $b†$
$.$
(9.197)
$LO$ ˆ $a$
For an initial state of the signal and local oscillator $|ψ⟩$ = $|ψ⟩a|β⟩$ , this
difference current provides a measure of the quadrature components of the
signal
$$
$⟨$ ˆ $n−⟩$
=
 ̄ $β⟨i$
ˆ $a†eiφ −$ ˆ $ae−iφ$
$⟩$ =  ̄ $β⟨Pφ⟩$
(9.198)
$⟨$ ∆ˆ $n$ 2
$≈$
 ̄ $β$ 2 $⟨$ ∆ $P$ 2
(9.199)
$−⟩$
$φ⟩$
provided that  ̄ $β ≫$ 1 is large.
Application to precision measurements
Precision measurements can be quantum mechanically limited by fluctua-
tions in classical laser light. Replacing the laser beam with squeezed light
<!-- page 213 -->
<!-- page 214 -->
can improve certain measurements, and the potential gain in precision pro-
vided the original motivation for investigation of squeezing.
Suppose an interferometric measurement required finding the difference
in phase between two fields (see Figure 9.13 and Figure 9.14). If the fields
have a squeezing parameter $r$ , the signal
∆ $P$ = $⟨x⟩δφ$
(9.200)
can only be measured to within the noise
$⟨$ ∆ $P$ 2 $⟩$ = 1
(9.201)
2 $e−$ 2 $r.$
The minimum phase which can be measured is
1
1
$δφ$ min $∼$
$√ne−r.$
(9.202)
$⟨$ ˆ $x⟩e−r ∼$
Clearly a nonzero squeezing parameter offers improvement in the sensitivity
of this measurement.
For example, consider the interferometer illustrated in Figure 9.14. The
initial states ˆ $bi$ and ˆ $ai$ are a coherent state $|β⟩$ and a squeezed vacuum
$er/$ 2(ˆ $a$ 2 $−$ (ˆ $a†$ )2) $|$ 0 $⟩$ respectively. After mixing these fields on a beam splitter, a
phase shift $φ$ = $π/$ 2+ $δφ$ is induced in one of the arms before recombination
<!-- page 215 -->
on a second beamsplitter. Photodetectors measure the difference in photon
number in the two output beams of the second beamsplitter,
ˆ $n−$
=
ˆ $b†$
(9.203)
$f$ ˆ $bf −$ ˆ $a†$
$f$ ˆ $af$
$$
$$
$$
$$
=
cos $φ$
ˆ $b†$
$−i$ sin $φ$
ˆ $a†$
$.$
(9.204)
$i$ ˆ $bi −$ ˆ $a†$
$i$ ˆ $ai$
$i$ ˆ $bi −$ ˆ $b†$
$i$ ˆ $ai$
The mean and variance of this quantity give the phase difference $δφ$ and the
precision of the measurement
$⟨$ ˆ $n−⟩$
$∼$
 ̄ $βδφ⟨$ ˆ $b†$
(9.205)
$i$ ˆ $bi⟩$
$⟨$ ∆ˆ $n$ 2
$∼$
 ̄ $β$ 2 $⟨$ ∆ $P$ 2 $⟩a →$ 0 $.$
(9.206)
$−⟩$ ( $δφ≈$ 0)
Experiments in the late1980’s demonstrated enhancement of interfero-
metric sensitivity using squeezed light. Nevertheless, these ideas never found
practical application because (roughly speaking) similar improvements can
be made simply by increasing the strength of the coherent input field (see
Figure 9.13c). Increasing laser power is considerably easier than generating
squeezed light, so the original motivation for squeezed light generation has
not proved useful in practice. Note however that highly squeezed states may
still find applications, for example in the field of quantum information or
for gravity wave detection, where increasing the number of photons is not
an option.
Squeezing in atoms
Many of the concepts we have considered in the context of photonic excita-
tions will translate directly to atomic physics. In particular, it is possible to
consider spin squeezing in an atomic ensemble, where the total or “collec-
tive” spin is defined as the vector sum of the $N$ individual spins
$N$
$X$
S =
$Si.$
(9.207)
$i$
If we consider a spin-polarized sample of $Si$ = 1 $/$ 2 atoms, the collective
spin projection we find S $z$ = $N/$ 2. Although the expectation values of the
orthogonal projections vanish, $⟨$ S $x⟩$ = $⟨$ S $y⟩$ = 0, their fluctuations do not,
since
$⟨$ S2
$x⟩$ = $⟨$ S2
$y⟩$ = $N$
(9.208)
2 $.$
<!-- page 216 -->
This uncertainty in the orthogonal projections is known as the “atom shot
noise.” In analogy to squeezed light, however, it is possible to use effective
interactions between atoms to squeeze one of the spin projections below
this shot noise limit at the expense of increasing fluctuations in the other
projection:
$⟨$ S2
$x⟩< N$
(9.209)
2
$⟨$ S2
$y⟩> N$
(9.210)
2 $.$
Atom-photon correlations
The ideas of probabilistic entanglement generation and post-selection (which
we first encountered for parametric downconversion) can also be applied to
atom-photon entanglement.
As a concrete example, consider the case of
N-atom Raman scattering, where
$N$
$N$
$X$
$X$
ˆ $H$
=
$g$ ˆ $a†$
$S†$
$Si$
(9.211)
$i$ + $g∗$ ˆ $a$
$i$
$i$
=
$g$ ˆ $a†$ S $†$ + $g∗$ ˆ $a$ S $.$
(9.212)
This Hamiltonian bears a remarkable resemblance to the effective Hamil-
tonian for non-degenerate parametric down-conversion, and it leads to pre-
cisely the same sort of probabilistically entangled state. By conditioning on
detection of the entangled photon, one can project out the vacuum state
and photon loss. This technique could potentially permit entanglement of
different atomic ensembles, which has bearing on a number of applications
in quantum information science.

<!-- captions -->
9.9: Figure 9.9: The optical parametric oscillator is formed by atoms with a cascade level configuration inside a cavity with resonance frequency $νc$ = $ν$ 0 $/$ 2.
9.10: Figure 9.10: Phase space representation of the noise in the vacuum state, a coherent state, and a squeezed state.
9.11: Figure 9.11: Squeezing in the momentum quadrature component of the output field, relative to the noise of a coherent state (known as the “standard quantum limit”).
9.12: Figure 9.12: Schematic for homodyne detection of the quantum field ˆ $a$ . A local oscillator ˆ $bLO$ is mixed with the signal on a beamsplitter, and the two output fields are subtracted to provide a phase-sensitive measurement of the quadrature components of ˆ $a$ .
9.13: Figure 9.13: Three methods for measuring a phase shift $φ$ . (a) Using a coherent state, the quadrature variance in ˆ $p$ sets a minimum value of $φ$ which can be measured. (b) Using a squeezed state with $⟨$ ∆ $P$ 2 $⟩<$ 1 $/$ 2, a more precise measurement can be made. (c) A similar improvement in precision can be obtained simply by using a larger coherent field, which is considerably easier to create than a squeezed state.
9.14: Figure 9.14: An experimental configuration for measuring a phase shift $δφ$ using squeezed light to improve the precision (see PRL 59 278 (1987) and PRL 59 2153 (1987).

<!-- footnotes -->


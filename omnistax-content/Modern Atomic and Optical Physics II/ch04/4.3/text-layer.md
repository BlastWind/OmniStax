<!-- page 74 -->
4.3
Nonlinear atomic response
The perturbative methods used in the linear regime cannot be used to treat
strong applied fields. A general approach in the nonlinear regime requires
a time-varying solution for the density matrix components as a function of
the time-dependent applied field, Ω( $t$ ). As the system complexity increases,
such solutions become increasingly difficult to obtain even numerically.
As a special case, we will consider only continuous-wave fields of fixed
frequency, and look for the steady-state behavior of the system. To start
with, consider a homogeneous ensemble of two-level atoms illuminated by
photons with frequency detuned from atomic resonance by $δ$ =  ̄ $ν −ω$ . Recall
that the steady-state solution for the off-diagonal density matrix components
is
Ω
$ρ$ 21 = $−i$
(4.53)
$γ$ 12 $−iδ$ ( $ρ$ 11 $−ρ$ 22) $.$
For strong fields, we can no longer neglect changes in the atomic populations,
so we should substitute (in the steady state)
$γ$
$ρ$ 11 $−ρ$ 22 =
(4.54)
$γ$ + 2 $Ropt$
where
$Ropt$ = 2 $|$ Ω $|$ 2 $γ$ 12
(4.55)
$γ$ 2
12 + $δ$ 2 $.$
We can use the steady state coherence to find the nonlinear susceptibility
in the Fourier domain:
$P$ ( $δ$ )
$χn$ ( $δ$ )
=
(4.56)
$ε$ 0 $E$ ( $δ$ )
1
$N$
=
(4.57)
$ε$ 0 $E$ ( $δ$ )
$V μρ$ 21( $δ$ ) $.$
Proceeding in the same manner as before, we find that
3
$N$
$iγ$
$γ$
$χn$ ( $δ$ ) =
$.$
(4.58)
8 $π$ 2
$V λ$ 3
$γ$ 12 $−iδ$
$γ$ + 2 $Ropt$
<!-- page 75 -->
Note that, whereas the linear susceptiblity provided a complete solution
to all time-dependent linearly propagating fields, the nonlinear susceptiblity
$χn$ ( $δ$ ) we have just derived is applicable only to continuous wave, steady state
solutions. For this special situation we are considering, the susceptibility
determines the nonlinear propagation equation for the applied field. Since
we are working with continuous wave fields, we may disregard the time
derivatives in the wave equation, so the only remaining terms are
$∂E$
=
$i$  ̄ $kχn$ ( $δ$ ) $E$
(4.59)
$∂z$
$$ 3
$$
$N$
$iγ$
$γ$
=
$i$  ̄ $k$
$E.$
(4.60)
8 $π$ 2
$V λ$ 3
$γ$ 12 $−iδ$
$γ$ + 2 $Ropt$
The nonlinear susceptibility is itself a function of the strength of the applied
field Ω= $μE/ħ$ , which enters through $Ropt$ . As the applied field grows, $χ$ is
diminished, an effect known as saturating absorption. In the limit of a weak
field, $Ropt ≪γ$ , this expression reduces to the linear susceptibility obtained
earlier. We will now examine the nonlinear susceptibility in a few special
cases.
Resonant fields
For a perfectly resonant field, $δ$ = 0, the real part of the susceptibility
vanishes and the imaginary part becomes
3
$N$
1
Im[ $χn$ (0)] =
(4.61)
8 $π$ 2
$V λ$ 3 $γ$
$γ$ 12
1 + $s$
where
$s$ = 4 $|$ Ω $|$ 2
(4.62)
$γ$ 12 $γ .$
When this saturation parameter $s$ is large, $s ≫$ 1, the applied field bleaches
the medium, and the transmitted power grows nonlinearly as the incident
intensity is increased. In this saturated regime, the spatial profile of ab-
sorption changes qualitatively from a linear decay in strong fields to the
exponential decay characteristic of weak fields.
Far-detuned fields
It is possible to define a saturation parameter as a function of the detuning,
$s$ = 2 $Ropt$
$.$
(4.63)
$γ$
<!-- page 76 -->
Since $Ropt$ decreases as detuning increases, greater power is required to sat-
urate an off-resonant transition. For very large detunings , $δ ≫$ Ω $, γ$ , the
imaginary part of the susceptibility is negligible, with the real part given by
$$
$$
$N$
$χn ≈−$ 3
1 $−$ 4 $|$ Ω $|$ 2 $γ$ 12
$.$
(4.64)
8 $π$ 2
$V λ$ 3 $γ$
$δ$
$δ$ 2 $γ$
The refractive index of the medium is determined by Re[ $χ$ ], and consequently
depends on the intensity. The physics of an intensity dependent refractive
index (known as the Kerr effect) may be captured by defining an index
which is linear in intensity, $n$ = $n$ 0 + $n$ 2 $I$ .
Such effects have important
physical consequences, including intensity-dependent phase shifts which are
often referred to as “self-phase modulation”. In addition, the medium will
act as a lens for a beam with finite transverse extent, since the refractive
index is a function of power and thus transverse position, leading to so-called
self-focussing or de-focussing.
Weakly saturated regime
In some situations we will be working with relatively weak fields, and wish
only to calculate the leading order corrections to linear propagation. In such
cases, it is useful to expand the susceptibility
$χn$ = $χ$ + $χ$ (3) $|E|$ 2 + $. . . ,$
(4.65)
<!-- page 77 -->
where $χ$ is the linear susceptibility and $χ$ (3) is the next order correction (at
least for a system exhibiting inversion symmetry). In terms of the suscepti-
bility for the two-level system, this expansion looks like:
3
$N$
$iγ$
$γ$
$χn$ ( $δ$ )
=
8 $π$ 2
$V λ$ 3
$γ$ 12 $−iδ$
$γ$ + 2 $Ropt$
$$
$$
3
$N$
$iγ$
$≈$
1 $−$ 2 $Ropt$
8 $π$ 2
$V λ$ 3
$γ$ 12 $−iδ$
$γ$
$$ 3 $λ$ 3
$$
3
$N$
$iγ$
$N$
$i$
$|μ|$ 2 $γ$ 12
$≈$
$|E|$ 2 $,$
8 $π$ 2
$V λ$ 3
$γ$ 12 $−iδ −$
2 $π$ 2 $ħ$ 2
$V$
$γ$ 12 $−iδ$
$γ$ 2
12 + $δ$ 2
where we identify the first term as the linear susceptibility and the second
term as the leading nonlinear correction.
Experimental considerations
For practical purposes, it is useful to estimate the intensity needed to satu-
rate a transition at resonance. In a radiatively broadened system, $γ$ 12 = $γ/$ 2,
$Ropt$ = 4 $|$ Ω $|$ 2 $/γ$ , so the saturation threshold $s$ = 1 corresponds to 8 $|$ Ω $|$ 2 $≈γ$ 2,
or an intensity of a few mW/cm2 for the alkali atoms. In a Doppler broad-
ened system, $kvT ≫γ$ 12, a much larger power is required, since an applied
field satisfying 8 $|$ Ω $|$ 2 $≈γ$ 2 will only saturate a velocity class of atoms. How-
ever, in this intermediate regime where a small subset of velocity groups
are saturated, nonlinear spectroscopy such as pump-probe or hole-burning
experiments may be performed with sub-Doppler resolution.
In practice, real systems can saturate much faster than these calculations
would predict because the existence of other atomic levels means that the
system doesn’t necessarily decay back into its original state. For instance,
consider an atom with two long-lived hyperfine levels and a third excited
level. When a field is applied which is resonant with the transition from one
of the hyperfine levels to the excited state, most of the atomic population
will end up in the other hyperfine level, an effect known as optical pumping.
Now saturation of the resonant transition only requires that $Ropt$ exceed the
(slow) decay between hyperfine levels, making it much easier to saturate.
This example illustrates how the two-level model is often not a very good
approximation, especially in situations related to nonlinear interactions of
atoms with light.
<!-- page 78 -->
4.3.1
Saturation spectroscopy
Saturation spectroscopy is an important example of incoherent nonlinear
multi-photon interactions.
It provides a simple method for probing the
natural linewidth of an inhomogenously broadened medium (unlike linear
interactions which cannot distinguish between a homogeneously and inho-
mogeneously broadened resonance).
Saturation spectroscopy is typically
performed with two counterpropagating beams at the same frequency $ν$ ,
near resonance with the atomic transition energy ∆. The beams create an
electric field profile in the cloud of thermal atoms,
E = $E$ + $e−iνt$ + $ikz$ + $E−e−iνt−ikz$ + $c.c,$
(4.66)
where $E$ + represents a strong field in the forward direction and $E−$ represents
a weak field in the backward direction.
Due to Doppler shifts in the thermal atoms, these two beams each in-
teract with a certain velocity class. The strong field interacts with atoms
satisfying $ν$ = ∆+ $kvz$ , saturating their transition, while the weak field in-
teracts with atoms Doppler shifted by $ν$ = ∆ $−kvz$ . For generic detunings,
$ν̸$ = ∆, the two fields do not interact with the same group of atoms. As
the frequency approaches the bare atomic resonance, however, $vz →$ 0 and
the two velocity classes begin to overlap. On resonance, both fields inter-
act with stationary atoms. Consequently, we expect that the absorption
<!-- page 79 -->
spectrum for the weak field $E−$ will show sharp features near $ν$ = ∆due to
stationary atoms saturated by the strong field.
The saturated absorption spectrum
The qualitative picture of saturated spectroscopy may be verified quantita-
tively by calculating the absorption coefficient for the probe beam, $α−$ =
$k$ Im[ $χ−$ ] = $k$ Im[ $P−/ε$ 0 $E−$ ]. To separate out the forward and backward prop-
agating fields, we decompose the atomic polarization into two running waves
in the $±$ ˆ $z$ direction,
$P$ = $P$ + $e−iνt$ + $ikz$ + $P−e−iνt−ikz$ + $c.c.$
(4.67)
In order to account for the inhomogenous Doppler broadening, this total
polarization can be further broken down into contributions from atoms with
different velocities. A particular velocity group $vz$ contributes a polarization
$P$ ( $vz$ ) proportional to the atomic coherence induced by the two counterprop-
agating beams,
$ρ$ ( $vz$ )
= $ρ$ ( $vz$ )+
+ $ρ$ ( $vz$ ) $−$
$.$
(4.68)
21
21
21
$| {z }$
$| {z }$
$∼E$ +
$∼E−$
<!-- page 80 -->
Once we have calculated the polarization for the appropriate density $n$ ( $vz$ )
of atoms, $P$ ( $vz$ )
$±$
= $n$ ( $vz$ ) $μ∗ρ$ ( $vz$ ) $±$
, we can sum over velocity classes and divide
21
by $ε$ 0 $E±$ to obtain the probe beam susceptibility.
We can use our previous results from analysis of linear interactions to
find this coherence $ρ$ ( $vz$ ) $−$
because the probe beam $E−$ is weak. In particular,
21
we find
$ρ$ ( $vz$ ) $−$
$≈i$ Ω $−$ ( $ρ$ 11 $−ρ$ 22)( $vz$ )
(4.69)
21
$γ$ 12 $−i$ ( $δ$ + $kvz$ ) $,$
where Ω $±$ = $μE±/ħ$ . Note that the detuning $δ$ = $ν −ω$ is Doppler shifted
due to the atomic velocity along the axis of light propagation.
For the
probe, atoms propagating to the right see the field at a higher frequency
(blueshifted) so the net detuning is $δ$ + $kvz$ .
Our previous linear analysis required no further calculations because the
population distribution $ρ$ 11 $−ρ$ 22 was independent of Ω $−$ for a sufficiently
weak field. To accurately model the nonlinear aspects of saturated absorp-
tion spectroscopy, however, we must incorporate the effects of the strong
field $|$ Ω+ $|$ 2 on $ρ$ 11 $−ρ$ 22. We saw earlier that strong, nonlinear interactions
can saturate a transition by redistributing the atomic population:
1
( $ρ$ 11 $−ρ$ 22)( $vz$ ) =
(4.70)
1 + $S$ ( $δ −kvz$ ) $,$
where the saturation parameter is
4 $|$ Ω+ $|$ 2( $γ$ 12 $/γ$ )
$S$ ( $δ −kvz$ ) =
(4.71)
$γ$ 2
12 + ( $δ −kvz$ )2 $.$
Note that the sign of the Doppler shift is reversed for Ω+ because it is
propagating in the opposite direction to Ω $−$ . Substituting into Eq. (4.69),
we obtain the backward-propagating coherence induced by Ω+ and Ω $−$ in
atoms with velocity $vz$ :
$$
$ $
$$
$γ$ 2
12 + ( $δ −kvz$ )2
$i$ Ω $−$
$ρ$ ( $vz$ ) $−$
$≈$
$.$ (4.72)
21
$γ$ 2
$γ$ 12 $−i$ ( $δ$ + $kvz$ )
12 + ( $δ −kvz$ )2 + 4 $|$ Ω+ $|$ 2( $γ$ 12 $/γ$ )
We are now prepared to calculate the absorption coefficient for the probe
beam $α−$ = $k$ Im[ $χ−$ ] = $k$ Im[ $P−/ε$ 0 $E−$ ] by summing over contributions to
the polarization from all atomic velocity classes,
$Z$
$P−$ =
$dvzμ∗ρ$ ( $vz$ ) $−$
$n$ ( $vz$ ) $,$
(4.73)
21
<!-- page 81 -->
where each velocity class is weighted by the thermal distribution $n$ ( $vz$ ).
$Z$
$$
$$
$i$
$S$ ( $δ −kvz$ )
$χ−$ = $|μ|$ 2
$dvzn$ ( $vz$ )
1 $−$
(4.74)
$ε$ 0 $ħ$
$γ$ 12 $−i$ ( $δ$ + $kvz$ )
1 + $S$ ( $δ −kvz$ )
The first term describes the usual Doppler-broadened absorption of a weak
probe; the second term describes the saturated effect we wish to calculate.
By approximating the thermal velocity distribution as constant over the
velocities which contribute to the saturated absorption dip, $n$ ( $vz$ ) = $n$ , we
can calculate the integral of the second term in closed form. The resulting
expression is rather convoluted, and to elucidate the effects of the strong
field we will expand it to lowest order in Ω+:
$Z$
$$
$$
$|μ|$ 2
$i$
$χ−$
$≈$
$dvzn$ ( $vz$ )
1 $−$ 4 $|$ Ω+ $|$ 2( $γ$ 12 $/γ$ )
$ε$ 0 $ħ$
$γ$ 12 $−i$ ( $δ$ + $kvz$ )
$γ$ 2
12 + ( $δ −kvz$ )2
$Z$
$$
$$
$|μ|$ 2
=
$dvzn$ ( $vz$ ) $i$ ( $γ$ 12 + $i$ ( $δ$ + $kvz$ ))
1 $−$ 4 $|$ Ω+ $|$ 2( $γ$ 12 $/γ$ )
$ε$ 0 $ħ$
$γ$ 2
$γ$ 2
12 + ( $δ$ + $kvz$ )2
12 + ( $δ −kvz$ )2
The saturated absorption feature is thus given by
$Z$
$γ$ 12
4 $|$ Ω+ $|$ 2( $γ$ 12 $/γ$ )
Im[ $χ−$ ]sat
$≈$
$−|μ|$ 2
$dvzn$
$ε$ 0 $ħ$
$γ$ 2
$γ$ 2
12 + ( $δ$ + $kvz$ )2
12 + ( $δ −kvz$ )2
2 $π|$ Ω+ $|$ 2( $γ$ 12 $/γ$ )
=
$−|μ|$ 2 $n$
$,$
(4.75)
$ε$ 0 $ħk$
( $γ$ 2
12 + $δ$ 2)
where we have used $n$ ( $vz$ ) = $n$ and
$Z ∞$
1
1
$π$
(4.76)
$−∞$
1 + ( $x −a$ )2
1 + ( $x$ + $a$ )2 =
2(1 + $a$ 2) $.$
The expression for the saturated absorption feature, in the limit that Ω+
is weak and $n$ ( $vz$ ) is slowly varying, indicates that we should see a sharp
dip in the absorption with a characteristic width given by the Doppler-free
linewidth $γ$ 12.

<!-- captions -->
4.3: Figure 4.3: An incident field with intensity equal to the saturation intensity initially decays linearly with distance. Once the field is sufficiently weak that nonlinear effects are negligible, the intensity decays exponentially.
4.4: Figure 4.4: The forward and backward propagating beams interact with the velocity class of atoms for which they are resonant. The velocity classes begin to overlap as the optical frequency $ν$ approaches the bare atomic resonance
4.5: Figure 4.5: The absorption spectrum for the weak probe in the presence of a counterpropagating strong field of the same frequency.

<!-- footnotes -->


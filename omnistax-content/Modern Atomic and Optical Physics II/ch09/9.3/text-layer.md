<!-- page 183 -->
9.3
The effects of dissipation on quantum fields
We have seen that linear transformations of coherent states retain their
classical nature, but nonlinear interactions lead to highly nontrivial quantum
states of the radiation field. Nevertheless, experience tells us that the real
<!-- page 184 -->
world is both nonlinear and classical.
To understand how and why this
happens, we will have to consider the effects of dissipation on quantum
fields.
The beamsplitter provides an intuitive and simple model for loss.
A
signal incident on a beamsplitter is attenuated by its transmission amplitude
$t$ ; simultaneously, the vacuum field incident on the other port introduces
fluctuations so that the output field is
$p$
ˆ $a$ out = $t$ ˆ $a$ in + $i$
1 $−|t|$ 2ˆ $b$ vac $.$
(9.80)
If the signal starts out in a coherent state $|α⟩$ , the transmitted field will also
be a coherent state $|tα⟩$ . But this is not true for arbitrary quantum states.
For example, an incident Fock state will no longer be in a Fock state after
interaction with the beamsplitter.
9.3.1
Dynamics of a single mode field in a lossy cavity
We now wish to consider the effects of dissipation on quantum fields in
greater detail. For simplicity, we will focus here on single-mode fields such
as those in an optical cavity. However, we will treat a more realistic scenario
in which the cavity is not perfect but is coupled to the outside world.
The beamsplitter model can be used to understand dissipation in a cavity
formed by one partially transmitting mirror. Initially, we will consider only
classical loss, and neglect the associated quantum noise.
<!-- page 185 -->
<!-- page 186 -->
Classical evolution
The classical evolution equation for the intra-cavity field can be found by
calculating the change in $E$ during one round trip,
$E$ ( $t$ + ∆ $t$ ) = $tE$ in( $t$ ) + $rE$ ( $t$ ) $,$
(9.81)
where $t$ and $r$ are the transmission and reflection coefficients for the left-
hand mirror, and ∆ $t$ = 2 $L/c$ is the roundtrip time, and $E$ in( $t$ ) is the field
incident on the cavity. Converting this difference equation into a differential
equation,
$E$ ( $t$ + ∆ $t$ ) $−E$ ( $t$ )
$→d$
(9.82)
∆ $t$
$dtE$ ( $t$ ) $,$
we find
$d$
$E$ ( $t$ ) + $tc$
(9.83)
$dtE$ ( $t$ ) = $−$ (1 $−r$ ) $c$
2 $L$
2 $LE$ in( $t$ ) $.$
For a perfect mirror, $r$ 2 + $t$ 2 = 1, so we can write the cavity loss rate in the
limit $t ≪$ 1 as
$κ$ = 2 $c$ (1 $−r$ )
$≈t$ 2 $c$
(9.84)
2 $L$
2 $L.$
Here we have used $t$ 2 = 1 $−r$ 2 $≈$ 2(1 $−r$ ).
The evolution equation then
becomes
$r κc$
$d$
(9.85)
$dtE$ ( $t$ ) = $−κ$
2 $E$ ( $t$ ) +
2 $LE$ in( $t$ ) $.$
The cavity response function can be found by transforming the evolution
equation into the Fourier domain. The cavity lineshape is Lorentzian, with
width given by the cavity loss rate:
$p$
$κc/$ 2 $L$
$E$ ( $ω$ ) =
(9.86)
$κ/$ 2 $−iωE$ in( $ω$ ) $.$
The field evolution will be modified by the atomic polarization induced if
any medium is present inside the cavity. By projecting Maxwell’s equations
into the cavity mode (i.e. disregarding terms $∼dE/dz$ for a slowly varying
amplitude), we find that the cavity field evolves as
$r κc$
$d$
$,$
(9.87)
$dtE$ ( $t$ ) = $−κ$
2 $E$ ( $t$ ) +
2 $LE$ in( $t$ ) + $i$  ̄ $νP$
2 $ε$ 0
where  ̄ $ν$ is the center frequency of the cavity resonance.
<!-- page 187 -->
The output field is given by the sum of the reflected input field and the
transmitted cavity field,
$E$ out = $−rE$ in + $tE.$
(9.88)
This equation is known as an “input-output relationship”, and a good ref-
erence on a semiclassical analysis of electromagnetic fields in a cavity can
be found in Sargent, Scully, and Lamb, “Laser Physics”.
9.3.2
Quantum mechanical treatment of the cavity mode
We can adapt the classical evolution equation to a quantum description
simply by replacing the cavity field $E$ by the cavity photon annihilation
operator ˆ $a$ and accounting for noise associated with the cavity decay rate $κ$ .
If the input field vanishes, then the evolution equation becomes
$d$
(9.89)
$dt$ ˆ $a$ = $−κ$
2 ˆ $a$ + ˆ $F.$
In principle, we could use the quantum fluctuation-dissipation theorem to
determine the properties of the noise operator ˆ $F$ . Instead, we proceed to
highlight the physical origin of the fluctuations by introducing a microscopic
model of noise. The noise we are adding in fact looks very much like the
input field terms we neglected in Eq. (9.89), where we now account for the
exterior vacuum field leaking into the cavity via the partially transmitting
mirror.
Microscopic noise model
Our microscopic noise model will account for interactions between the quan-
tum cavity field and its environment of continuum modes. Imperfect mirrors
provide coupling between the cavity and reservoir, since cavity photons can
leak out and reservoir photons can leak in. In the interaction picture, the
effective Hamiltonian for the system-reservoir interaction can be written
$X$
ˆ $VSR$ = $iħ$
$tk$ ˆ $a$ ˆ $a†$
(9.90)
$ke−i$ ( $ν−νk$ ) $t$ + $h.c.,$
$k$
where $ν$ is the cavity frequency, ˆ $ak$ is a continuum mode of frequency $νk$ , and
the coupling coefficient $tk$ between the cavity mode and ˆ $ak$ is determined by
the transmission properties of the mirrors forming the cavity. When the en-
vironment is large and has a broad bandwidth, this interaction Hamiltonian
is mathematically equivalent to the model of atomic spontaneous emission
<!-- page 188 -->
considered earlier. To make the connection with our formal approach, we
identify the system and reservoir operators
ˆ $S$
=
ˆ $a$
(9.91)
$X$
ˆ $R†$
=
$iħ$
$tk$ ˆ $a†$
(9.92)
$k.$
$k$
Using the general reservoir theory we developed earlier, we can immedi-
ately write down the decay rate and noise operator in terms of microscop-
ically defined quantities.2
To review briefly, the equation of evolution of
the reservoir field can be formally integrated to give, in a properly rotating
frame,
$Z t$
$ak$ ( $t$ ) = $ei$ ( $ν−νk$ ) $tak$ (0) + $tk$
$dt′ ei$ ( $ν−νk$ )( $t−t′$ ) $a$ ( $t′$ ) $,$
(9.93)
0
while substituting this back into the equation of motion for $a$ ( $t$ ) gives
$Z t$
$X$
 ̇ $a$ ( $t$ ) = $−$
$tkei$ ( $ν−νk$ ) $tak$ (0) $−|tk|$ 2
$dt′ a$ ( $t′$ ) $ei$ ( $ν−νk$ )( $t−t′$ ) $.$
(9.94)
0
$k$
Making the Wigner-Weisskopf approximation, we find that
 ̇ $a$ ( $t$ ) $≈−κ$
(9.95)
2 $a$ ( $t$ ) + ˆ $F$ ( $t$ ) $,$
where
$X$
$κ$
=
2 $π$
$|tk|$ 2 $δ$ ( $ν −νk$ ) = 2 $π|tk|$ 2 $D$ ( $ν$ )
(9.96)
$k$
$X$
ˆ $F$
=
$−$
$tk$ ˆ $ak$ (0) $ei$ ( $ν−νk$ ) $t.$
(9.97)
$k$
Armed with such expressions, we can easily calculate the relevant corre-
lation functions for the noise operator. For example, if the environment is
in a thermal state with photon number $n$ at frequency $ν$ ,
$⟨$ ˆ $F$ ( $t$ ) ˆ $F†$ ( $t′$ ) $⟩$
=
( $n$ + 1) $κδ$ ( $t −t′$ )
(9.98)
$⟨$ ˆ $F†$ ( $t$ ) ˆ $F$ ( $t′$ ) $⟩$
=
$nκδ$ ( $t −t′$ ) $.$
(9.99)
The microscopic noise model provides a physical picture for the origin
of fluctuations and dissipation.
The partially transmitting mirrors allow
<!-- page 189 -->
the cavity field to leak out (leading to decay), but also allow the con-
tinuum modes to leak in (leading to noise). Using the relationship $tk$ =
( $κ/$ 2 $πD$ ( $ν$ ))1 $/$ 2, the noise operator is given by
$r$
$κ$
ˆ $F$ ( $t$ ) = $−$
ˆ $E$ in( $t$ ) $,$
(9.100)
$D$ ( $ν$ )
where we have defined the input field
$r$
1
$X$
ˆ $E$ in( $t$ ) =
$ei$ ( $ν−νk$ ) $tak$ (0) $.$
(9.101)
2 $π$
$k$
We used a Heisenberg-Langevin method to describe the quantum me-
chanical cavity evolution, but the master equation provides an equivalent
alternative approach. If we again identify the system operator ˆ $S$ = ˆ $a$ , the
system density operator obeys the master equation
$$
$$
$$
$d$
ˆ $a†$ ˆ $aρ −$ ˆ $aρ$ ˆ $a†$
$−κ$
$ρ$ ˆ $a$ ˆ $a† −$ ˆ $a†ρ$ ˆ $a$
+ $h.c.$
(9.102)
$dt$ ˆ $ρ$ = $−κ$
2( $n$ + 1)
2 $n$
which can be used to describe the cavity loss and associated fluctuations.
Example: Coherent state
Suppose that the cavity field is initially in a coherent state $|α⟩$ , and the
radiation bath is initially in the vacuum state. Since a coherent cavity state
corresponds to the quantum description of a classical field, one might expect
it to remain a classical field as the cavity mode decays. Formally integrating
the equation of motion, we find
$Z t$
ˆ $a$ ( $t$ ) = $e−κt/$ 2ˆ $a$ (0) +
ˆ $F$ ( $t′$ ) $e−κ$ ( $t−t′$ ) $/$ 2 $dt′.$
(9.103)
0
The classical coherence decays exponentially in time, following the electric
field amplitude decay
$⟨$ ˆ $a$ ( $t$ ) $⟩$ = $e−κt/$ 2 $⟨$ ˆ $a$ (0) $⟩.$
(9.104)
To verify that we are indeed in a coherent state, we should examine the
quadrature components3
$!$
$Z t$
ˆ $F$ ( $t′$ ) + ˆ $F†$ ( $t′$ )
ˆ $x$ ( $t$ )
=
ˆ $x$ (0) $e−κt/$ 2 +
$√$
$e−κ$ ( $t−t′$ ) $/$ 2(9.106)
0
2
<!-- page 190 -->
$ $
$⇒⟨δ$ ˆ $x$ 2( $t$ ) $⟩$
=
$⟨δ$ ˆ $x$ 2(0) $⟩e−κt$ + 1
1 $−e−κt$
$.$
(9.107)
2
Since the coherent state initially has $⟨δ$ ˆ $x$ 2(0) $⟩$ = 1 $/$ 2, $⟨δ$ ˆ $x$ 2( $t$ ) $⟩$ remains 1 $/$ 2
at all times. A similar calculation for the momentum quadrature component
yields the same result, indicating that the cavity mode remains in a coherent
state $⟨δ$ ˆ $x$ 2( $t$ ) $⟩$ = $⟨δ$ ˆ $p$ 2( $t$ ) $⟩$ = 1 $/$ 2 as the system evolves, though the mean
number of photons (and thus the coherent state amplitude $α$ ) decays with
time.
Quantum field evolution
Whereas we found that coherent states retain their classical coherence de-
spite cavity loss, a general quantum state will change character as the cavity
field dissipates. Our derivation of the quadrature operators in Eq. (9.107)
did not depend on the initial state, so at long times we obtain $⟨δ$ ˆ $x$ 2( $t$ ) $⟩$ =
$⟨δ$ ˆ $p$ 2( $t$ ) $⟩$ = 1 $/$ 2 no matter the initial quadrature components. Consequently
initially squeezed quantum states lose their nonclassical coherence properties
due to the cavity decay.
In general, a process for generating nonclassical states will have to com-
pete with dissipation. We have seen, for example, that nonclassical states
can arise from single-mode light interacting with a nonlinear medium (such
as a two-level atom) when we neglect dissipation. When we include both the
atom interaction with the unconfined radiation modes and the cavity mode
interaction with the continuum, we will find that the resulting dissipation
acts to wash out any non-classical correlations.
The appropriate theoretical approach depends on some details of the
system under consideration. For example, in the limit of strong fields in-
teracting with many atoms, the dynamics should be nearly classical.
It
thus makes sense to use the Heisenberg-Langevin approach, which explicitly
shows the correspondence to classical dynamics. The interaction with the
atoms gives us a driving term in the cavity mode evolution,
$d$
$X$
$g∗$
$j$ ˆ $σα,β,$
(9.108)
$dt$ ˆ $a$ = $−κ$
2 ˆ $a$ + ˆ $F$ + $i$
$j$
which describes the quantum mechanical analogue of the polarization of the
medium. Such evolution equations are typically nonlinear, and are generally
impossible to solve, except for some special cases. As an example, we will
consider squeezed light generation.
At the same time, in the situation when only a few photons or a few
atoms are present, the stochastic wavefunction approach or master equation
<!-- page 191 -->
often prove more convenient. For example, these types of systems with few
photons and atoms arise in quantum state engineering in cavity quantum
electrodynamics or with trapped ions.
9.3.3
Cavity quantum electrodynamics
Cavity quantum electrodynamics (CQED) provides another important ex-
ample of a system where dissipation and quantum effects both play an im-
portant role. Unlike squeezed light generation, which described properties
of macroscopic fields interacting with many atoms, CQED typically repre-
sents a small system with few photons interacting with a single atom. Our
discussion of CQED will thus provide an example of an exact approach to
treat small systems.
The physical system under consideration consists of a single two-level
atom with levels $|$ 1 $⟩$ and $|$ 2 $⟩$ coupled to a single-mode cavity at rate $g$ . In
addition to the coherent evolution we considered in previous lectures, we
will also incorporate two dissipative rates: The atom emits into free space
modes (other than the cavity mode) at rate $γ$ , while photons leak out of the
cavity at rate $κ$ .
<!-- page 192 -->
Open vs closed cavities
In practice, it is useful to distinguish two situations. The open cavity regime
describes a cavity mode confined in one dimension, with cavity length much
greater than the wavelength $L ≫λ$ . This regime typically occurs for CQED
at optical frequencies, where a Fabry-Perot type cavity is employed to con-
fine the light. The spontaneous emission rate $γ$ for an atom in an open
cavity is close to its free-space decay rate, since it can easily interact with
free-space modes unconfined in the two directions orthogonal to the cavity
mode.
The closed cavity confines the field in all three spatial dimensions, with
length scales close to the wavelength $L ∼λ$ . Such cavities can be constructed
for microwave frequencies, with wavelengths on the order of millimeters to
centimeters.
An atom in a closed cavity can only interact with a small
number of cavity modes, so its spontaneous emission rate can be strongly
suppressed relative to the free space emission rate.
Theoretical formulation
To account for the two dissipation mechanisms $κ, γ$ , we will need to incor-
porate both types of decay into the master equation
$ $
ˆ ̇ $ρ$
=
$−i$
ˆ $a†$ ˆ $a$ ˆ $ρ$ + ˆ $ρ$ ˆ $a†$ ˆ $a −$ 2ˆ $a$ ˆ $ρ$ ˆ $a†$
$ħ$ [ ˆ $H,$ ˆ $ρ$ ] $−κ$
2
(9.109)
$−γ$
2 (ˆ $σ$ 21ˆ $σ$ 12ˆ $ρ$ + ˆ $ρ$ ˆ $σ$ 21ˆ $σ$ 12 $−$ 2ˆ $σ$ 12ˆ $ρ$ ˆ $σ$ 21) $.$
Note that the density operator here includes both the atom and the cavity
mode degrees of freedom since it represents the total system.
The coherent evolution is described by a Jaynes-Cummings Hamiltonian
which couples the atomic operators ˆ $σij$ to the cavity mode ˆ $a$
ˆ $H$ = $ħδ$ ˆ $a†$ ˆ $a$ + $ħg$ ˆ $a†$ ˆ $σ$ 12 + $ħg∗$ ˆ $a$ ˆ $σ$ 21 $,$
(9.110)
where we are working in the frame rotating with the atomic transition fre-
quency $ω$ , and $δ$ is the detuning of the cavity mode $δ$ = $ν −ω$ . Since we
want to consider quantum states with few photons in the cavity, the natural
basis states for the problem are Fock states of the cavity mode and the bare
atomic states:
${|$ 1 $⟩a|n⟩, |$ 2 $⟩a|n⟩}.$
(9.111)
Each pair of states ${|$ 1 $⟩a|n⟩, |$ 2 $⟩a|n −$ 1 $⟩}$ is coupled with strength $g√n$ . But
when we add in dissipative mechanisms which couple ${|$ 1 $⟩a|n⟩→{|$ 1 $⟩a|n−$ 1 $⟩$
and ${|$ 2 $⟩a|n⟩→{|$ 1 $⟩a|n⟩$ , the dynamics will appear more complicated in this
basis.
<!-- page 193 -->
CQED in the dressed state basis
To gain intuition for the dissipative atom-cavity system, it is instructive to
transform to the dressed state basis for the Jaynes-Cummings Hamiltonian.
Each set of coupled states can be independently diagonalized as illustrated
in Figure 9.8, and dissipation introduces coupling between each set.
The simplest experimental method for probing the dressed state mani-
fold is to measure the reflectivity of the atom-cavity system as a function
of detuning of the incident light. The external field will probe transitions
between the ground state and the low-lying dressed states. Even when the
atomic transition is precisely resonant with the cavity mode, the atom-field
coupling $g$ will show up as a splitting between peaks in reflectivity. Con-
sequently the dressed-states splitting $g$ is often referred to as the “vacuum
$√$
Rabi splitting.” Note that the splitting will increase to $g$
$N$ if there are $N$
atoms in the cavity antinode, an effect known as collective enhancement.
Classically, this effect can be understood as a manifestation of atomic dis-
persion, which shifts the resonant frequency of the cavity by changing the
phase shift the light picks up while it circulates.
Stochastic wavefunction analysis
Suppose that at time $t$ = 0 the system starts out in the vacuum state of
the cavity and the excited state of the atom, $|$ 2 $⟩a|$ 0 $⟩$ . As the system evolves,
there are only a small number of states to which it can transition. In par-
ticular, the possible transitions are:
(1) Free space emission couples $|$ 2 $⟩a|$ 0 $⟩→|$ 1 $⟩a|$ 0 $⟩$
(2) Coherent evolution couples $|$ 2 $⟩a|$ 0 $⟩→|$ 1 $⟩a|$ 1 $⟩$
(3) Cavity decay couples $|$ 1 $⟩a|$ 1 $⟩→|$ 1 $⟩a|$ 0 $⟩$ .
We therefore need only account for three states, and the master equation
can in principle be solved exactly.
We will use the stochastic wavefunc-
tion approach which will provide all of the essential elements we need to
understand the physical processes involved in the no-jump regime.
In the case where quantum jumps are unimportant, we will consider a
wavefunction which incorporates only those states coupled by the Hamilto-
nian evolution
$|ψ⟩$ = $c$ 1 $,$ 1 $|$ 1 $⟩a|$ 1 $⟩$ + $c$ 2 $,$ 0 $|$ 2 $⟩a|$ 0 $⟩.$
(9.112)
The Hamiltonian evolution equations for the probability amplitudes are
 ̇ $c$ 1 $,$ 1
=
$iδc$ 1 $,$ 1 + $igc$ 2 $,$ 0
(9.113)
 ̇ $c$ 2 $,$ 0
=
$igc$ 1 $,$ 1 $.$
(9.114)
<!-- page 194 -->
<!-- page 195 -->
Dissipation enters through the non-Hermitian effective Hamiltonian
ˆ $Heff$ = $−iκ$
(9.115)
2 ˆ $a†$ ˆ $a −iγ$
2 ˆ $σ$ 21ˆ $σ$ 12 $,$
so the “no-jump” evolution equations become
 ̇ $c$ 1 $,$ 1
=
$−$ ( $κ$
(9.116)
2 $−iδ$ ) $c$ 1 $,$ 1 + $igc$ 2 $,$ 0
 ̇ $c$ 2 $,$ 0
=
$igc$ 1 $,$ 1 $−γ$
(9.117)
2 $c$ 2 $,$ 0 $.$
In fact, because there is no possibility for reabsorption of lost photons into
the system – i.e. the state $|$ 1 $⟩a|$ 0 $⟩$ is uncoupled – the non-Hermitian evolution
is exact. Examining these equations, we can see that in the limit of strong
atom-field coupling $g ≫γ, κ$ , the system exhibits weakly damped Rabi
oscillations with the one-photon cavity state. However, many interesting
effects can still be observed when $g$ is smaller than one of the dissipative
rates.
Open cavity: the Purcell effect
When the cavity decay rate overwhelms the atom-field coupling, $g < κ$ ,
we can employ adiabatic elimination  ̇ $c$ 1 $,$ 1 $≈$ 0 because the field mode is
overdamped. The probability amplitude of the single-photon state is thus
$ig$
$c$ 1 $,$ 1 =
(9.118)
$κ/$ 2 $−iδc$ 2 $,$ 0 $.$
The strongly damped cavity field affects the evolution of the atomic state
$γ$
$$
$g$ 2
$g$ 2 $δ$
 ̇ $c$ 2 $,$ 0 = $−$
$c$ 2 $,$ 0 + $i$
(9.119)
2 + $κ$
2
$κ$ 2 $/$ 4 + $δ$ 2
$κ$ 2 $/$ 4 + $δ$ 2 $c$ 2 $,$ 0 $.$
The first term shows that the atomic decay rate is modified by its coupling
to the overdamped cavity mode, while the second term describes an energy
shift which represents a modification of the Lamb shift by the cavity mode.
The resulting atomic decay rate can be larger or smaller than the free space
spontaneous emission rate depending on the type of cavity involved. For
an open cavity, $γ ≈γ$ free space, so at zero detuning the atomic decay rate is
enhanced
$γ$ open
= $γ$ + 4 $g$ 2
(9.120)
eff
$κ .$
This increase in the spontaneous emission rate is known as the “Purcell
effect.”
<!-- page 196 -->
The physical parameters governing this effect involve the cavity mode
volume $V$ and quality factor $Q$ :
$r$
$ν$
$g$
=
$μ$
(9.121)
$ε$ 0 $ħV$
$ν$
$κ$
=
(9.122)
$Q,$
where $ν$ is the cavity mode angular frequency. The cavity decay rate can
also be expressed in terms of the cavity finesse F, which is the number of
times a photon circulates in the cavity on average before leaking out. The
photon lifetime is the finesse multiplied by the round trip time in the cavity
1
(9.123)
$κ$ = $L$
$πc · F.$
The physics of strong coupling
In order to significantly alter the decay rate $γ$ open
eff
relative to $γ$ , we need to
have a sufficient atom-field coupling
$g$ 2 $> γκ.$
(9.124)
When this condition is satisfied, the system is said to be in the “strong cou-
pling regime”. In fact, the figure of merit for strong coupling is independent
of atomic parameters because the dipole moment appears both in $g$ and $γ$ :
$g$ 2
$· F$ = $λ$ 2
(9.125)
$κγ ∼Lλ$ 2
$V$
$d$ 2 $· F,$
where $d$ is the diameter of the cavity mode.
The diffraction limit for a
cavity of length $L$ sets $d$ 2 $∼λL$ , so the figure of merit is maximized for
small cavities with high reflectivity $r$ 2 = 1 $−t$ 2:
$g$ 2
1
(9.126)
$κγ ∼λ$
$L$
$t$ 2
Physically, when an open cavity is in the strong-coupling regime, an
excited atom placed in the cavity transfers its energy to the cavity mode
much faster than it emits into 4 $π$ , because $g > γ$ . Since $g < κ$ , the cavity
mode then decays before the atom has time to reabsorb the photon.
In
effect, the excitation in the atom decays into the photon states leaking from
the cavity.
<!-- page 197 -->
We can see another physical picture of the strong-coupling regime if
we recognize that the resonant cross-section for the atom is $∼λ$ 2.
The
probability for the atom to interact with a photon before the photon decays
from the cavity is
1
$P$ interaction $∼λ$ 2 $· L ·$
(9.127)
$Ld$ 2 $· F,$
where 1 $/Ld$ 2 is the atomic density and $F$ is the number of times the photon
encounters the atom. This probability is greater than unity in the strong-
coupling regime.
Closed cavity: suppressed decay
An atom confined to a closed cavity cannot emit spontaneously into uncon-
fined modes, so $γ$ = 0. The effective decay rate is then
$g$ 2
$γ$ closed
eff
= $κ$
(9.128)
2
$κ$ 2 $/$ 4 + $δ$ 2 $.$
When the cavity is far-detuned from the atomic resonance, $δ ≫κ$ , the
atomic decay rate is strongly suppressed because there is no density of states
at the atomic transition energy.
This effect has been seen in microwave
experiments where the cavity size is on the order of the wavelength $L ∼λ$
and the detuning is maximum $δ$ = $ω/$ 2. The decay rate in this regime is
$κ$ 2
$γ$
$γ$ closed
eff
$∼g$ 2
(9.129)
$κ$
$ω$ 2 $∼λ$ 3
$V$
$Q.$
For a closed cavity, $V ∼λ$ 3, so the decay rate is suppressed by the cavity
quality factor.
Microwave CQED with Rydberg atoms
Compared to optical CQED, microwave CQED offers several advantages.
First, closed cavities can be constructed, and furthermore the atomic emis-
sion rate $γ ∝ω$ 3 is much smaller than at optical frequencies. Since the cou-
pling strength $g ∝√ω$ , by going to lower frequencies one can get substantial
improvement in $g/γ$ . Finally, one can exploit the large dipole moment of
Rydberg atoms to engineer a system with a large coupling constant $g$ . The
transition frequencies of highly excited Rydberg atoms $N ∼$ 50 are in the
microwave range $∼$ 10-100 GHz, so the appropriate cavities are about a
centimeter in size. Furthermore, the atomic state can be measured by mea-
suring the electric field required to ionize the atoms, providing a convenient
mechanism to analyze final atomic states.
<!-- page 198 -->
Lower frequencies also introduce potential problems. A typical Rydberg
atom can decay at optical frequencies to a low-lying excited state, which will
prevent microwave manipulation. Consequently experiments using Rydberg
atoms have to pump them into so-called circular states of maximal angu-
lar momentum, where selection rules permit only a single microwave decay
channel.
The lifetime of circular Rydberg atoms can thus be very long,
on the order of a second. Although exciting an atom into an N=50 L=50
state requires 50 microwave photons, groups in Paris and Munich routinely
prepare circular Rydberg atoms.
A second problem arises at microwave frequencies because thermal pho-
tons cannot be neglected.
Microwave cavities are therefore usually con-
structed from superconducting niobium and cooled to liquid helium tem-
peratures. Additional tricks can also be employed to empty the thermal
photons from the cavity by sending in atoms in the ground state to soak
up the extra energy. With clever tricks and careful engineering, microwave
CQED experiments have demonstrated the highest ratio between coherent
evolution and decoherence in the field of quantum state engineering.
Application: single photons on demand
One potential application for CQED is creation of a source which can be
triggered to emit exactly one photon into a wavepacket with well defined
frequency, timing, direction, and shape. Such a device would be to Fock
states what the laser is to coherent states, but the non-classical nature of
Fock states makes its construction considerably more difficult.
One might envision placing a single, excited emitter inside a cavity, and
monitoring the leak from the cavity. A single emitter would generically emit
a photon into 4 $π$ , but the cavity can be used to improve directionality. In
the strong-coupling regime, the excited emitter interacts primarily with the
cavity mode ˆ $a$ , which subsequently interacts with the free-field modes ˆ $ak$ via
a the Hamiltonian
$X$
ˆ $Hc−f$ = $−ħ$
$tk$ ˆ $a†$
(9.130)
$k$ ˆ $aeiδkt$ + $h.c.$
$k$
The state of the system, including the continuum modes can be expressed
as
$X$
$|ψ⟩$ = $c$ 2 $,$ 0 $|$ 2 $⟩a|$ 0 $⟩|vac⟩$ + $c$ 1 $,$ 1 $|$ 1 $⟩a|$ 1 $⟩|vac⟩$ +
$ck|$ 1 $⟩a|$ 0 $⟩|$ 1 $k⟩.$
(9.131)
$k$
The physics of this process is precisely that of the bound to free transition,
so we can use our results from Wigner-Weisskopf theory find the probability
<!-- page 199 -->
amplitudes for the free-space modes in the long-time limit and the strong-
coupling regime:
$tkg/κ$
$ck ∼$
$.$
(9.132)
$g$ 2 $/κ$ + $iδk$
A single-photon wavepacket will be emitted in the direction defined by the
cavity mode, with electric field envelope $∼e−$ ( $g$ 2 $/κ$ ) $t$ . This system is not yet
the ideal single photon source because we cannot control the timing and
shape of the pulse. By using a three-level atom, one can control the emitted
wavepacket shape.
In principle, this single-photon emission process is coherent and thus
reversible. For example, if the atom started out in a superposition of the
ground and excited states, ( $a|$ 1 $⟩$ + $b|$ 2 $⟩$ ) $⊗|$ vac $⟩,$ the coherent superposition
would be mapped onto the photon mode propagating away from the cav-
ity, so the state would become $|$ 1 $⟩⊗$
$a$ + $b$ ˆ $a†$
$|$ vac $⟩$ . By time reversing the
pulse propagation, one could envision subsequently storing this quantum
state (encoded in a superposition of orthogonal photon states) back into the
atomic state. While ideas of this nature have received considerable theoret-
ical attention, experiments have yet to implement coherent photon release
and storage using cavity quantum electrodynamics.
Measurements of single photon fields
Experimental demonstration of a single photon on demand requires distin-
guishing small numbers of photons. There exist photo-detectors which can
measure single optical photons with high efficiency via an avalanche process
which generates a macroscopic pulse of photo-current. Due to dead-time
effects, however, it is impossible to distinguish between short ( $<$ 100 ns)
wavepackets containing multiple photons $|$ 1 $⟩, |$ 2 $⟩, |$ 3 $⟩. . .$ .
To study the nonclassical properties of short pulses, one can employ
a Hanbury-Brown-Twiss setup, which splits the signal on a beamsplitter
before sending it to two detectors.
If a single photon is incident on the
beamsplitter, the two detectors never register at the same time. This type
of simultaneous detection is an example of a joint probability measurement.
A full measurement of the correlations between the two detected signals can
be used to obtain the second order correlation function
$G$ (2) = $⟨E†$ ( $r$ 1 $, t$ 1) $E†$ ( $r$ 2 $, t$ 2) $E$ ( $r$ 2 $, t$ 2) $E$ ( $r$ 1 $, t$ 1 $⟩.$
(9.133)
$G$ (2) factorizes for coherent states, but does not factorize for non-classical
states.
Consequently it is convenient to define a normalized correlation
<!-- page 200 -->
function
$G$ (2)
$g$ (2)( $t$ 1 $−t$ 2) =
(9.134)
$⟨E†$ ( $r$ 1 $, t$ 1) $E$ ( $r$ 1 $, t$ 1 $⟩⟨E†$ ( $r$ 2 $, t$ 2) $E$ ( $r$ 2 $, t$ 2) $⟩.$
For example, $g$ (2)(0) is 1 for a coherent state, 2 for a thermal state (pho-
ton “bunching”), and 0 for a single photon state (photon “anti-bunching”).
Measurements of the second order correlation function are clearly sensitive
to a higher order quantum coherence than the classical coherence of a laser
beam. Such measurements are useful because non-classical states can exhibit
high order correlations, not just the classical coherence $⟨E†$ ( $r$ 1 $, t$ 1) $E$ ( $r$ 2 $, t$ 2) $⟩$ .
Reading
Further information on CQED can be obtained in texts by Meystre & Sar-
gent or Yamamoto & Imamoglu or in a recent review by Mabuchi, Doherty
Science 298 1372(2002). A discussion of correlation functions in quantum
optics can be found in Scully and Zubairy, Quantum Optics, Chapter 4. Re-
cent work on single-photon generation has been reported in Nature 419 594
(2002), PRL 89 067901 (2002) (see comments PRL 90 249801) and Science
290 2282 (2000).

<!-- captions -->
9.4: Figure 9.4: A phase space depiction of the field state $∼|iα⟩−| −iα⟩$ near $τRevival/$ 2.
9.5: Figure 9.5: A beamsplitter model for loss.
9.6: Figure 9.6: Model used to analyze dissipation in a lossy cavity.
9.7: Figure 9.7: The system-reservoir division for cavity quantum electrodynamics. The quantum field in the cavity is treated as part of the total system, and it decays to a reservoir of modes corresponding to the leak out of the cavity. The atom reservoir corresponds to a different set of free space modes, into which the atom can decay directly.
9.8: Figure 9.8: The dressed-state basis and dissipative couplings. (a) The natural basis corresponds to a ground state and an infinite ladder of independent two-level systems each coupled by $g√n$ , where $n$ is the maximum number of photons in the cavity for that pair of states. Each manifold can be exactly diagonalized, leading to the dressed state basis. (b) Atomic decay and cavity loss lead to couplings between the different manifolds, since they allow energy to leave the system. Consequently decays not only introduce an energy width to the dressed states, but also mix the independent dressed state manifolds.

<!-- footnotes -->
2For further details, the derivation of the cavity input/output relations was first given
in Phys. Rev. A 31, 3761 (1985) by Gardiner and Collett.
3More directly, one can examine the initial state $|α⟩|$ 0 $⟩r$ , where $|$ 0 $⟩r$ refers to the reser-
voir in the vacuum state. It can be readily seen that
ˆ $a$ ( $t$ ) $|α⟩|$ 0 $⟩r$ = $e−κt/$ 2 $α|α⟩|$ 0 $⟩r,$
(9.105)
such that the state at later times corresponds to a coherent state $|αe−κt/$ 2 $⟩$ .

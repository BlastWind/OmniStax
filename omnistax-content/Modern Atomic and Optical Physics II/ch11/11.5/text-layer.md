<!-- page 272 -->
11.5
Excitations in a Bose condensate
We have developed a basic understanding of the ground state wavefunc-
tion for a Bose-Einstein condensate; a more complete picture of condensate
behaviour requires knowledge of the elementary excitations in a BEC. A de-
scription of such excitations will allow us to account for the spectrum of the
condensate, thermal effects at finite temperatures, and possible non-classical
effects analogous to squeezing of a photon field.
<!-- page 273 -->
11.5.1
The Bogoliubov approximation
Our approach is motivated by an analogy to classical coherent beams, where
the electric field operator ˆ $E$ is well approximated by a c-number $E$ and
some small operator deviation $δ$ ˆ $E$ . For matter waves, we will replace the
field operator with its average value and some small fluctuations about that
average
ˆ $ψ$ = $ψ$ + $δ$ ˆ $ψ.$
(11.142)
We can then linearize the Heisenberg equation for ˆ $ψ$ in the small quantity
$δ$ ˆ $ψ$ , obtaining a set of linear coupled equations for $δ$ ˆ $ψ$ and $δ$ ˆ $ψ†$ :
$$
$$
$iħ∂$
$−ħ$ 2
$δ$ ˆ $ψ$ + $U$ 0 $δ$ ˆ $ψ†ψ$ 2 + 2 $U$ 0 $|ψ|$ 2 $δ$ ˆ $ψ,$
(11.143)
$∂tδ$ ˆ $ψ$ =
2 $m∇$ 2 + $V$ ( $r$ )
and similar for the hermitian conjugate.
Since these coupled equations are linear, we can solve them by looking for
normal mode solutions. We will define operators ˆ $αj$ and ˆ $αj†$ which annihilate
and create bosonic excitations in the normal mode with frequency $ωj$ ; since
the excitations are bosons, their creation and annihilation operators obey
Bose statistics [ ˆ $αj,$ ˆ
$αk†$ ] = $δjk$ . We can expand $δ$ ˆ $ψ$ in terms of the normal
modes
$$
$δ$ ˆ $ψ$ = $e−iμt/ħX$
$uj$ ( $r$ )ˆ $αje−iωjt −v∗$
$j$ ( $r$ )ˆ $α†$
$,$
(11.144)
$jeiωjt$
$j$
and the field operator will be properly normalized if
$|uj|$ 2 $−|vj|$ 2 = 1 $.$
(11.145)
When we substitute our expansion for $δ$ ˆ $ψ$ into Eq. (11.143), we find that
the coefficients for each normal mode are independent, so we obtain a set of
equations for each mode $j$ . Equating terms $∝eiωjt$ and $∝e−iωjt$ , we find
$$
$$
$−μ −ħωj −ħ$ 2 $∇$ 2
$uj$ ( $r$ )
=
$U$ 0  ̃ $ψ$ 2 $vj$ ( $r$ )
(11.146)
2 $m$ + $V$ ( $r$ ) + 2 $U$ 0  ̃ $ψ$ 2
$$
$$
$−μ$ + $ħωj −ħ$ 2 $∇$ 2
$vj$ ( $r$ )
=
$U$ 0  ̃ $ψ$ 2 $uj$ ( $r$ ) $,$ (11.147)
2 $m$ + $V$ ( $r$ ) + 2 $U$ 0  ̃ $ψ$ 2
where $ψ$ =  ̃ $ψe−iμt/ħ$ and  ̃ $ψ ∈R$ . These time independent equations give the
eigenfrequencies $ωj$ and eigenmodes ${uj, vj}$ of excitations in the condensate,
and are known as the “Bogoliubov equations”.
<!-- page 274 -->
Example: homogeneous potential
The Bogoliubov equations are particularly transparent for a condensate in
a uniform potential $V$ ( $x$ ) = 0.
The Thomas-Fermi approximation gives
 ̃ $ψ$ = $√n$ 0, where $n$ 0 is the condensate density and $μ$ = $n$ 0 $U$ 0 is the chemical
potential. Since there is no explicit dependence on position anywhere in the
problem, the eigenmodes are most easily obtained in the Fourier domain,
$uj$ ( $r$ )
=
$uqeiqr$
(11.148)
$vj$ ( $r$ )
=
$vqeiqr.$
(11.149)
The Bogoliubov equations become
$ εq$ + $n$ 0 $U$ 0 $−ħωq$
$  uq$
$$
$−n$ 0 $U$ 0
= 0 $,$
(11.150)
$−n$ 0 $U$ 0
$εq$ + $n$ 0 $U$ 0 + $ħωq$
$vq$
where $εq$ = $ħ$ 2 $q$ 2 $/$ 2 $m$ . To find the eigenvalues and eigenmodes associated
with excitations in the homogenous condensate, we need only solve this
matrix equation. The frequencies $ωq$ follow from setting the determinant of
the matrix to zero, yielding the dispersion relation
$q$
$ħωq$ =
$ε$ 2 $q$ + 2 $n$ 0 $U$ 0 $εq.$
(11.151)
Note that we have taken the positive square root because the negative one
will not satisfy the normalization condition Eq. (11.145). Due to the pres-
ence of interactions, the dispersion relation is qualitatively different from
that of a free particle $ħωq$ = $εq$ .
In the large-wavenumber and small-
wavenumber regimes, the frequency is
$($
$εq$ + $n$ 0 $U$ 0
large q
$ħωq$ =
(11.152)
$ħqs$
small q $,$
which correspond to particle-like and sound-like excitations respectively.
The sound-like spectrum has an associated sound velocity
$r$
$n$ 0 $U$ 0
$s$ =
(11.153)
$m ,$
and the cross-over between the two regimes occurs near a critical wave-vector
$qc ∼ħ−$ 1 $p$
2 $mn$ 0 $U$ 0 $∼$ 1
$√$
(11.154)
$ξ ∼ms$
2 $ħ.$
<!-- page 275 -->
Physically, the long-wavelength excitations correspond to collective ex-
citations of the condensate, and are responsible for the phenomenon of su-
perfluidity. Once the wavelength approaches the inverse healing length, the
condensate ceases to behave as a continuum, and single-particle-like excita-
tions dominate.
Probing the excitation spectrum - under construction
Experiments have measured the excitation spectrum in a gaseous Bose con-
densate using a Bragg scattering technique.
Two lasers with frequencies
$ω$ 1 $, ω$ 2 and wavevectors $k$ 1 and $k$ 2 can interact with the condensate to create
excitations when their energy and momentum difference matches the quasi-
particle spectrum. Absorption of a photon excites an atom from the con-
densate, while stimulated emission into the second optical mode de-excites
an atom back into the condensate. Adiabatically eliminating the atomic
excited states leads to an interaction of the form
$Z$
ˆ $H ∝$
$d$ 3r ˆ $ψ†$ (r) ˆ $ψ$ (r) $ei$ (k1 $−$ k2) $·$ r $e−i$ ( $ω$ 1 $−ω$ 2) $t.$
(11.155)
<!-- page 276 -->
Expanding out ˆ $ψ$ = $ψ$ + $δ$ ˆ $ψ$ , and keeping only the terms linear in $δ$ ˆ $ψ$ , results
in terms that can create or annihilate quasiparticles. For a homogeneous
potential in one dimension, this interaction includes terms of the form
$Z$
$$
$X$
ˆ $H ∝$
$dx$  ̃ $ψ$
$uqeiqx$ ˆ $αqe−iωqt −v∗$
$ei$ ( $k$ 1 $−k$ 2) $xe−i$ ( $ω$ 1 $−ω$ 2) $t.$
$qe−iqx$ ˆ $α†$
$qeiωqt$
$q$
(11.156)
The integral over $x$ enforces momentum conservation in creation of a quasi-
particle at momentum $q$ = $k$ 1 $−k$ 2, while the time dependence leads to
resonance at $ωq$ = $ω$ 1 $−ω$ 2. Notably this interaction permits Bragg scatter-
ing even at zero temperature, where the initial occupation of quasiparticle
modes vanishes.
Superfluidity of repulsive atoms
Superfluidity requires that an object can move slowly through the fluid with-
out experiencing any drag. Since drag is the macroscopic manifestation of
excitations in a medium, we will see that the excitation spectrum of a re-
pulsive Bose condensate implies superfluidity.
In particular, consider an
object moving at velocity $v$ through a Bose condensate. It will only create
an excitation if it can resonantly impart its momentum and energy to an
elementary excitation:
∆ $p$ object
=
$ħq$
(11.157)
∆ $ε$ object
=
$ωq.$
(11.158)
Kinematics require that ∆ $ε$ object $≤$ ∆ $pv$ , so the object can only create an
excitation if it is moving faster than some critical velocity
$v > vc$ = $εq$
(11.159)
$ħq.$
This represents the so-called Landau criterion for superfluidity, which states
that objects moving slower than the speed of sound do not produce excita-
tions.
11.5.2
BEC with attractive interactions
If the interatomic potential is attractive $U$ 0 $<$ 0, long-wavelength excitations
$q →$ 0 have an imaginary frequency $ħωq$ . This implies that the condensate
is unstable!
Experimentally, however, stable condensates with attractive
<!-- page 277 -->
interactions have been observed. The explanation for the stability lies in
the finite number of atoms confined to the trap.
If an atomic cloud is localized within a characteristic trap length $at$ , the
minimum wave-vector allowed by the system is of order
$q$ min $≈$ 1
$,$
(11.160)
$at$
so the excitations in the system have a minimum energy
$q$
$ħω$ min =
$ε$ 2 $q$ min $−$ 2 $n$ 0 $|U$ 0 $|εq$ min $.$
(11.161)
When this minimum energy is real,
$ħ$ 2
$|a|,$
(11.162)
$a$ 2
$mV$
$t m ≥$ 4 $n$ 0 $|U$ 0 $|$ = 16 $πħ$ 2 $N$
the condensate will be stable despite the attractive interactions. In partic-
ular, this implies a maximum number of atoms in the cloud
$N$ max $∼at$
(11.163)
$|a|.$
If condensate size exceeds $N$ max, the attractive interactions will destabilize
it and it will collapse.
11.5.3
Observation of BEC
As we mentioned earlier in the chapter, typical experiments probe the cold
atom cloud using absorption imaging with near-resonant light. In certain
cases, one could image the condensate in the trap, obtaining a spatial profile
of the atom cloud. Alternately, by releasing the cold atom cloud from the
trap and allowing it to expand for a time $τ$ , the momentum distribution of
the atoms $p$ is mapped onto the spatial distribution $r$ = $pτ/m$ . Such expan-
sion images provide a means for distinguishing a cold, thermal atom cloud
from a condensate. In a condensate, the momentum distribution follows
from the size of the atom cloud $ac$ and the uncertainty principle,
$p$ BEC $∼ħ$
$,$
(11.164)
$ac$
resulting in a post-expansion spatial distribution
$ħt$
$R$ BEC $∼$
(11.165)
$acm$
<!-- page 278 -->
In contrast, a thermal cloud of atoms will have a gaussian distribution of
momenta in the trap
$P$ thermal( $p$ ) $∼e−p$ 2 $/p$ 2
$T$
(11.166)
leading to a gaussian spatial distribution
$P$ thermal( $R$ ) $∼e−R$ 2 $/R$ 2
$T ,$
(11.167)
where $RT$ and $pT$ are the distance and momentum scale for an atom cloud at
temperature $T$ . The two momentum distributions are qualitatively different.
By fitting the observed image to a bimodal distribution corresponding to
a gaussian thermal cloud and a parabolic condensate, one can accurately
calculate the proportion of condensed atoms.

<!-- captions -->
11.10: Figure 11.10: The Bogoliubov excitation spectrum for a condensate confined in a homogeneous potential. Note that in the presence of interactions, a critical velocity must be reached in order to excite the condensate while conserving energy and momentum.

<!-- footnotes -->


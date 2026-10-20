<!-- page 47 -->
3.3
The dynamics of an open system
We will use the density operator as a tool to aid derivation of an efficient
description for an open system interacting with its environment. To understand
<!-- page 48 -->
how the reduced density operator evolves in time, consider first its
evolution with a Hamiltonian ˆ $HS$ acting only on the system:
$X$
$iħ$  ̇ˆ $ρS$
=
$pα$ ( $iħ|$  ̇ $ψSα⟩$
$⟨ψS$
$α|$ + $|ψS$
$α⟩iħ⟨$  ̇ $ψSα|$
)
(3.22)
$| {z }$
$| {z }$
$α$
$HS|ψS$
ˆ
$−⟨ψS$
$HS$
$α⟩$
$α|$ ˆ
1
=
(3.23)
$iħ$ [ ˆ $HS,$ ˆ $ρS$ ] $.$
Suppose now that there is some coupling between the system and the envi-
ronment described by an interaction Hamiltonian ˆ $HSR$ . The dynamics will
become quite a bit more involved, since even if the system and environment
start out independent of one another, the initial product state $|ψS⟩⊗|ψR⟩$
will evolve under the influence of ˆ $HSR$ into a state which cannot in general
be factored into independent system and environment states. The system
and environment are then said to be entangled.
As an illustration we return to the example of an atom spontaneously
emitting a photon into the vacuum. If the atom starts out in a superposition
state, $|ψ$ 0 $⟩$ = ( $c$ 1 $|$ 1 $⟩$ + $c$ 2 $|$ 2 $⟩$ ) $⊗|$ 0 $⟩$ , at time $t$ it will be in a state $|ψ$ ( $t$ ) $⟩$ =
$c$ 1 $|$ 1 $⟩⊗|$ 0 $⟩$ + $c$ 2( $t$ ) $|$ 2 $⟩⊗|$ 0 $⟩$ + $P$
$k ck$ ( $t$ ) $|$ 1 $⟩⊗|$ 1 $k⟩$ which can no longer be written
as a direct product of atomic and electromagnetic states. The elements of
the atomic reduced density matrix can then be calculated in terms of the
decay rate $γ$ :
ˆ $ρS$
=
Tr $R$ [ $|ψ$ ( $t$ ) $⟩⟨ψ$ ( $t$ ) $|$ ]
(3.24)
$∞$
$X$
$X$
=
$⟨nk|ψ$ ( $t$ ) $⟩⟨ψ$ ( $t$ ) $|nk⟩$
(3.25)
$n$ =0
$k$
$$ 1 $−ρ$ 22(0) $e−γt$
$$
$ρ$ 12(0) $e−γt/$ 2
=
$,$
(3.26)
$ρ$ 21(0) $e−γt/$ 2
$ρ$ 22(0) $e−γt$
where $|nk⟩$ is a $n$ -photon Fock state in mode $k$ . Note that the off-diagonal
elements decay at half the rate of the excited state population.
This is
characteristic of interactions which conserve energy.
3.3.1
General formalism
The total Hamiltonian may be represented as a sum of three terms,
ˆ $H$ = ˆ $HS$ + ˆ $HR$ + ˆ $HSR.$
(3.27)
The first term only affects system degrees of freedom and the second only
affects the reservoir while the third contains products of system operators
<!-- page 49 -->
with reservoir operators. The total density matrix obeys the equation of
motion
1
 ̇ˆ $ρ$
=
(3.28)
$iħ$ [ ˆ $H,$ ˆ $ρ$ ]
1
=
(3.29)
$iħ$ [ ˆ $HS$ + ˆ $HR$ + ˆ $HSR,$ ˆ $ρ$ ] $,$
and we may trace over the reservoir degrees of freedom on both sides of the
equation to obtain the evolution for the system reduced density operator:
 ̇ˆ $ρS$
=
Tr $R$ [ ̇ˆ $ρ$ ]
(3.30)
1
=
+ 1
(3.31)
$iħ$ [ ˆ $HS,$ ˆ $ρS$ ] + 1
$iħ$ Tr $R$ [[ ˆ $HR,$ ˆ $ρ$ ]]
$|$
${z$
$}$
$iħ$ Tr $R$ [[ ˆ $HSR,$ ˆ $ρ$ ]] $.$
=0
Each of the three terms contributes differently. The system Hamiltonian
has the same effect it would have in the absence of the reservoir.
The
reservoir Hamiltonian has no net effect on ˆ $ρS$ because the trace is invariant
under cyclic permutations of the reservoir operators, so the commutator
must vanish. The interaction Hamiltonian, however, involves both system
and reservoir operators and requires special treatment. Although we have
obtained the equation of motion as a general result, no further progress can
be made without specifying at least some of the properties of the interaction
Hamiltonian and the reservoir itself.
3.3.2
Properties of the environment
Different environments can have qualitatively different impacts on the sys-
tem with which they interact. To illustrate typical reservoir properties, we
consider the example of a spin in a fluctuating magnetic field, where the
interaction Hamiltonian is
ˆ $HSR$ = $ħf$ ( $t$ ) ˆ $Sz.$
(3.32)
This Hamiltonian corresponds to an energy splitting $ħf$ ( $t$ ) between the spin
states $|$ 1 $⟩, |$ 2 $⟩$ , where ˆ $Sz$ = ( $|$ 2 $⟩⟨$ 2 $| −|$ 1 $⟩⟨$ 1 $|$ ) $/$ 2.
We will consider the case
when $f$ ( $t$ ) represents a random field. This model is applicable to a variety
of physical systems, for example an electron spin in a (randomly fluctuating)
bath of nuclear spins. Starting from the Hamiltonian, we can formally derive
the operator describing unitary evolution of the spin
$R t$
ˆ $U$ = $ei$
0 $f$ ( $t′$ ) $dt′$ ˆ $Sz,$
(3.33)
<!-- page 50 -->
from which we can calculate the time dependence of any expectation value.
In particular, we will be interested in $⟨$ ˆ $S$ + $⟩$ , which correspnds to the off-
diagonal element of the spin density matrix ( ˆ $S$ + = $|$ 2 $⟩⟨$ 1 $|$ ). This operator
picks up a phase from the energy splitting in the Hamiltonian, so its time
dependence is
$R t$
$⟨$ ˆ $S$ + $⟩$ = $⟨ei$
0 $f$ ( $t′$ ) $dt′$ ˆ $S$ +(0) $⟩,$
(3.34)
which depends on the moments of the random variable $f$ ( $t$ ).
Random variables
The fluctuating energy splitting $ħf$ ( $t$ ) represents a time dependent random
process, also known as a random variable. At each point in time, $f$ ( $t$ ) is
characterized by some probability distribution, and we need to know some-
thing about this probability distribution to predict the average effect that
$f$ ( $t$ ) has on the operator we are calculating. In particular, we will want to
know the following properties of the probability distribution:
(1) The first moment is the expectation value $⟨f$ ( $t$ ) $⟩$ .
Typically, we will
be interested in so-called “stationary processes”, for which $⟨f$ ( $t$ ) $⟩$ = $⟨f⟩$ is
constant. We can then define
$f$ ( $t$ ) = $⟨f⟩$ + $δf$ ( $t$ ) $,$
(3.35)
where $⟨δf$ ( $t$ ) $⟩$ = 0.
(2) The variance of the random process $⟨δf$ ( $t$ ) $δf$ ( $t′$ ) $⟩̸$ = 0 describes the
typical extent of the deviations of $f$ ( $t$ ) from its average value.
(3) The correlation time $τc$ represents the timescale on which $f$ ( $t$ ) changes.
It is related to the time dependence of the variance; in particular, the vari-
ance $⟨δf$ ( $t$ ) $δf$ ( $t′$ ) $⟩$ is nearly constant for $|t −t′| < τc$ .
For arbitrary probability distributions, we would in principle need to
specify an infinite number of higher order moments. However, in what fol-
lows we will typically deal with “Gaussian” probability distributions. For
a Gaussian probability distribution, knowledge of the mean and the vari-
ance is sufficient to specify all higher order moments because they factorize
pairwise:
$X$
$⟨δf$ ( $t$ 1) $δf$ ( $t$ 2) $. . . δf$ ( $tn$ ) $⟩$ =
$⟨δf$ ( $t$ 1) $δf$ ( $t$ 2) $⟩⟨δf$ ( $t$ 3) $. . .⟩,$
(3.36)
<!-- page 51 -->
where the sum is taken over all distinct groupings into pairwise and single
expectation values. In particular, we should notice that for $⟨δf⟩$ = 0, all
odd-order moments vanish.
Correlation time
For the example we are considering (the spin in a fluctuating field $f$ ( $t$ )), we
will distinguish two important limits:
(1) $t < τc$
In this case, we examine the system on timescales which are much shorter
than the timescale over which the environment changes. Each time that we
examine the system (for example, running an experiment on it), we will find
that the spin precesses around the ˆ $z$ axis at a rate $f$ ( $t < τc$ ) which is random
in value but fixed over the duration of the evolution. Every realization will
have a different value of $f$ ( $t$ ), so on average we would find that $⟨$  ̄ˆ $S$ + $⟩$ = 0.
However, this dephasing is in some sense reversible. If you know what $f$ ( $t$ )
is for each experiment, you can compensate for it. For example, you could
perform a spin echo experiment, wherein you reverse the orientation of the
spin halfway through its evolution, so that the net precession vanishes. Con-
sequently we refer to this first situation as “reversible evolution.”
(2) $t ≫τc$ .
For times long compared to the correlation time, spin echo techniques fail.
There is simply no way to recover a history of the evolution and undo the
damage done by the fluctuating environment. The ensemble average $⟨$  ̄ˆ $S$ + $⟩$ =
0 again vanishes, but in a way that is fundamentally irreversible.
This
situation corresponds to a reservoir which has a short memory time. Such a
reservoir is known as a “Markovian environment” because it can be described
by a Markov process (a random process with an infinitely short correlation
time). In atomic physics and quantum optics, most environments are nearly
Markovian, so we will focus on techniques for understanding the effects of a
Markovian reservoir.
3.3.3
Density operator method for a Markovian reservoir
By limiting the system and reservoir to certain kinds of interactions relevant
to atomic physics and quantum optics, we can develop a framework for
analyzing open systems. In particular, we will consider environments which
have a very short correlation time, so that the system is only influenced by
the instantaneous state of the reservoir.
<!-- page 52 -->
Again, we will assume ˆ $H$ = ˆ $HS$ + ˆ $HR$ + ˆ $HSR$ . The interaction term ˆ $HSR$
is the most relevant part. To focus on it we will work in the interaction
picture, which is found by transforming according to the unitary operator
ˆ $U$ = $ei$ ( ˆ $HR$ + ˆ $HS$ ) $t/ħ.$
(3.37)
In the interaction picture (denoted by tildes), the relevant operators are
 ̃ $ρ$
=
$ei$ ( ˆ $HR$ + ˆ $HS$ ) $t/ħ$ ˆ $ρe−i$ ( ˆ $HR$ + ˆ $HS$ ) $t/ħ$
(3.38)
 ̃ $HSR$
=
$ei$ ( ˆ $HR$ + ˆ $HS$ ) $t/ħ$ ˆ $HSRe−i$ ( ˆ $HR$ + ˆ $HS$ ) $t/ħ.$
(3.39)
The unitary transformation automatically accounts for the free evolution of
the system and reservoir, so that the only remaining dynamics are due to
the interactions, i.e.
$d$
(3.40)
$dt$  ̃ $ρ$ = 1
$iħ$ [  ̃ $HSR,$  ̃ $ρ$ ] $.$
Our analysis requires that the interaction be a bilinear product of system
and reservoir operators,
ˆ $HSR$ = ˆ $S$ ˆ $R†$ + ˆ $R$ ˆ $S†,$
(3.41)
where ˆ $S$ ( ˆ $R$ ) is a general system (reservoir) operator. In practice, the inter-
action Hamiltonian may have a sum over such terms: the analysis proceeds
in exactly the same manner, and the effects may be accounted for by con-
sidering each term of the sum separately and summing at the end. In the
interaction picture, we will represent the Hamiltonian by
 ̃ $HSR$ = ˆ $S$ ˆ $FR$ ( $t$ ) $†$ + ˆ $FR$ ( $t$ ) ˆ $S†,$
(3.42)
where all the time dependence is explicitly included in the reservoir operator
ˆ $FR$ ( $t$ ).
For example, consider the Hamiltonian for a single atom interacting with
the radiation field in the Schrodinger picture,
$X$
$X$
ˆ $HSR$
=
$−$
$ħgj$ ˆ $aj$
$|$ 2 $⟩⟨$ 1 $|$
$−$
$ħg∗$
(3.43)
$j$ ˆ $a†$
$j|$ 1 $⟩⟨$ 2 $|,$
$| {z }$
$j$
$j$
$|$
${z$
$}$
ˆ $S†$
ˆ $R$
where we can identify the system and reservoir operators appropriate to our
more general form of the interaction. Likewise, in the interaction picture
<!-- page 53 -->
the Hamiltonian includes the phase factors associated with free evolution of
the system and reservoir:
$X$
$X$
 ̃ $HSR$
=
$−$
$ħgj$ ˆ $aje−i$ ( $νj−ω$ ) $t$
$|$ 2 $⟩⟨$ 1 $|$
$−$
$ħg∗$
$j$ ˆ $a†$
$jei$ ( $νj−ω$ ) $t|$ 1 $⟩⟨$ 2 $|,$ (3.44)
$| {z }$
$j$
$j$
$|$
${z$
$}$
ˆ $S†$
ˆ $FR$ ( $t$ )
and we incorporate these phase factors into the new reservoir operator ˆ $FR$ ( $t$ ).
In addition to the specified form for the interaction given by Eq. (3.42),
our analysis requires two assumptions regarding the nature of the reservoir
itself, namely
(1) The reservoir is large (so it is not affected by the system)
(2) The reservoir has a broad bandwidth (so its correlation time is very
short1).
The first assumption indicates that the reservoir state is not significantly
affected by its interaction with the system. Consequently for our analysis
we may take the reservoir to be in a stationary (time-independent) state, for
example a statistical mixture at some temperature T. The second assump-
tion implies that the correlation time $τc ∼$ (1 $/$ bandwidth) for the reservoir
is short; in particular, we require that $τc$ be much smaller than the typical
timescale $τS$ on which the system evolves. These assumptions together con-
stitute the “Born-Markov Approximation”, and a reservoir which satisfies
them is called Markovian.
The effect of the reservoir on the system can be simplified by averaging
over a timescale ∆ $t$ which is in between the correlation time and charac-
teristic system evolution time, $τc ≪$ ∆ $t ≪τS$ . This approach is akin to
perturbation theory in $τc/τS$ , and will provide equations of motion for the
system reduced density operator which are valid for times greater than ∆ $t$ .
Starting from Eq. (3.40), we can formally integrate to obtain the density
operator at a later time,
$Z t$ +∆ $t$
 ̃ $ρ$ ( $t$ + ∆ $t$ ) $−$  ̃ $ρ$ ( $t$ )
= 1
$dt′$ [  ̃ $HSR$ ( $t′$ ) $,$  ̃ $ρ$ ( $t′$ )] $.$
(3.45)
$|$
${z$
$}$
$iħ$
$t$
∆ ̃ $ρ$
<!-- page 54 -->
Expanding
$Z t′$
 ̃ $ρ$ ( $t′$ ) $≈$  ̃ $ρ$ ( $t$ ) + 1
$dt′′$ [  ̃ $HSR$ ( $t′′$ ) $,$  ̃ $ρ$ ( $t′′$ )] $,$
(3.46)
$iħ$
$t$
(which is valid since $t′ −t <$ ∆ $t$ ), we obtain
$R t$ +∆ $t$
1
∆ ̃ $ρ$
=
$dt′$ [  ̃ $HSR$ ( $t′$ ) $,$  ̃ $ρ$ ( $t$ )]
$iħ$
$t$
$R t$ +∆ $t$
(3.47)
1
+
$dt′ R t′$
( $iħ$ )2
$t$
$t dt′′$ [  ̃ $HSR$ ( $t′$ ) $,$ [  ̃ $HSR$ ( $t′′$ ) $,$  ̃ $ρ$ ( $t′′$ )]] $.$
Now we trace over the reservoir degrees of freedom to find the change in
the system reduced density operator over time ∆ $t$ ,
$R t$ +∆ $t$
1
∆ ̃ $ρS$
=
$dt′$ Tr $R$ [  ̃ $HSR$ ( $t′$ ) $,$  ̃ $ρ$ ( $t$ )]
$iħ$
$t$
$R t$ +∆ $t$
1
+
$dt′ R t′$
( $iħ$ )2
$t$
$t dt′′$ Tr $R$ [  ̃ $HSR$ ( $t′$ ) $,$ [  ̃ $HSR$ ( $t′′$ ) $,$  ̃ $ρ$ ( $t′′$ )]] $.$
(3.48)
To proceed we must now make yet another assumption: the initial state
is factorizable,
 ̃ $ρ$ ( $t$ ) =  ̃ $ρS$ ( $t$ ) $⊗$  ̃ $ρR$ ( $t$ ) $.$
(3.49)
For times shortly thereafter, $t < t′ < t$ + ∆ $t$ , the total density operator is
approximately factorizable with some small correction,
 ̃ $ρ$ ( $t′$ ) $≈$  ̃ $ρS$ ( $t$ ) $⊗$  ̃ $ρR$ ( $t$ ) +  ̃ $ρcorr$ ( $t, t′$ ) $.$
(3.50)
Provided that ∆ $t ≪τS$ , we can neglect  ̃ $ρcorr$ in the RHS of Eq. (3.48)
to leading order, replacing the total density operator by the product of a
system and reservoir density operator.2
Using the explicit forms for  ̃ $HSR$ ( $t$ ) and  ̃ $ρ$ ( $t$ ), we will now examine the
two terms in Eq. (3.48). The first term, ∆ ̃ $ρ$ (1)
$S$ , has a straightforward effect
on the system,
$Z t$ +∆ $t$
1
∆ ̃ $ρ$ (1)
=
$dt′$ Tr $R$ [ ˆ $S$ ˆ $FR$ ( $t′$ ) $†$ + ˆ $FR$ ( $t′$ ) ˆ $S†,$  ̃ $ρS$ ( $t$ ) $⊗$  ̃ $ρR$ ( $t$ )](3.51)
$S$
$iħ$
$t$
$Z t$ +∆ $t$
1
=
$dt′$ [ ˆ $S,$  ̃ $ρS$ ( $t$ )] $⊗$ Tr $R{$ ˆ $FR$ ( $t′$ ) $†,$  ̃ $ρR$ ( $t$ ) $} −h.c.$ (3.52)
$iħ$
$t$
$Z t$ +∆ $t$
1
=
$dt′$ [ ˆ $S,$  ̃ $ρS$ ( $t$ )] $⊗⟨$ ˆ $FR$ ( $t′$ ) $†⟩−h.c.$
(3.53)
$iħ$
$t$
<!-- page 55 -->
$Z t$ +∆ $t$
1
=
$dt′$ [ ˆ $S⟨$ ˆ $FR$ ( $t′$ ) $†⟩$ + ˆ $S†⟨$ ˆ $FR$ ( $t′$ ) $⟩$
$,$  ̃ $ρS$ ( $t$ )] $.$
(3.54)
$iħ$
$t$
$|$
${z$
$}$
ˆ $H′$
$S$
Since the reservoir is large and does not change much under the influence
of the system, $⟨$ ˆ $FR$ ( $t′$ ) $†⟩$ is essentially a constant.
The effect of the first
term may thereby be interpreted an addition to the system Hamiltonian,
ˆ $HS$ + ˆ $H′$
$S$ . In many cases including the atom-field interaction, $⟨$ ˆ $FR$ ( $t′$ ) $†⟩$ = 0,
and the first term vanishes altogether.
The second term, ∆ ̃ $ρ$ (2)
$S$ , is responsible for the nontrivial effects of the
reservoir. Expanding out the commutators of the interaction Hamiltonian
 ̃ $HSR$ ( $t$ ) = ˆ $FR$ ( $t$ ) ˆ $S†$ + ˆ $FR$ ( $t$ ) $†$ ˆ $S$ , we find
$Z t$ +∆ $t$
$Z t′$
1
∆ ̃ $ρ$ (2)
=
$dt′$
$dt′′$ Tr $R$ [ ˆ $FR$ ( $t′$ ) ˆ $S†$ + ˆ $FR$ ( $t′$ ) $†$ ˆ $S,$
$S$
( $iħ$ )2
$t$
$t$
[ ˆ $FR$ ( $t′′$ ) ˆ $S†$ + ˆ $FR$ ( $t′′$ ) $†$ ˆ $S,$  ̃ $ρ$ ( $t′′$ )]]
(3.55)
$Z t$ +∆ $t$
$Z t′$
1
$≈$
$dt′$
$dt′′$ Tr $R$ [ ˆ $FR$ ( $t′$ ) ˆ $S†$ + ˆ $FR$ ( $t′$ ) $†$ ˆ $S,$
( $iħ$ )2
$t$
$t$
[ ˆ $FR$ ( $t′′$ ) ˆ $S†$ + ˆ $FR$ ( $t′′$ ) $†$ ˆ $S,$  ̃ $ρS$ ( $t$ ) ̃ $ρR$ ( $t$ )]] $.$
(3.56)
The integrand can be further expanded out to yield
$n$
$ $
$$
$o$
Tr $R$
ˆ $FR$ ( $t′$ ) ˆ $S†$ + ˆ $FR$ ( $t′$ ) $†$ ˆ $S$
ˆ $FR$ ( $t′′$ ) ˆ $S†$ + ˆ $FR$ ( $t′′$ ) $†$ ˆ $S$
 ̃ $ρS$ ( $t$ ) ̃ $ρR$ ( $t$ )
$n$
$$
$$
$o$
$−$ Tr $R$
ˆ $FR$ ( $t′$ ) ˆ $S†$ + ˆ $FR$ ( $t′$ ) $†$ ˆ $S$
 ̃ $ρS$ ( $t$ ) ̃ $ρR$ ( $t$ )
ˆ $FR$ ( $t′′$ ) ˆ $S†$ + ˆ $FR$ ( $t′′$ ) $†$ ˆ $S$
$n$
$$
$$
$o$
$−$ Tr $R$
ˆ $FR$ ( $t′′$ ) ˆ $S†$ + ˆ $FR$ ( $t′′$ ) $†$ ˆ $S$
 ̃ $ρS$ ( $t$ ) ̃ $ρR$ ( $t$ )
ˆ $FR$ ( $t′$ ) ˆ $S†$ + ˆ $FR$ ( $t′$ ) $†$ ˆ $S$
$n$
$$
$ $
$o$
+Tr $R$
 ̃ $ρS$ ( $t$ ) ̃ $ρR$ ( $t$ )
ˆ $FR$ ( $t′′$ ) ˆ $S†$ + ˆ $FR$ ( $t′′$ ) $†$ ˆ $S$
ˆ $FR$ ( $t′$ ) ˆ $S†$ + ˆ $FR$ ( $t′$ ) $†$ ˆ $S$
(3.57)
We will evaluate it in terms of two-time correlation functions of the reservoir
operators, defined by
$g−−$ ( $t′, t′′$ ) = Tr $R$ [ ˆ $FR$ ( $t′$ ) ˆ $FR$ ( $t′′$ ) ̃ $ρR$ ] = Tr $R$ [ ˆ $FR$ ( $t′′$ ) ̃ $ρR$ ˆ $FR$ ( $t′$ )]
(3.58)
$g$ + $−$ ( $t′, t′′$ ) = Tr $R$ [ ˆ $FR$ ( $t′$ ) $†$ ˆ $FR$ ( $t′′$ ) ̃ $ρR$ ] = Tr $R$ [ ˆ $FR$ ( $t′′$ ) ̃ $ρR$ ˆ $FR$ ( $t′$ ) $†$ ]
(3.59)
$g−$ +( $t′, t′′$ ) = Tr $R$ [ ˆ $FR$ ( $t′$ ) ˆ $FR$ ( $t′′$ ) $†$  ̃ $ρR$ ] = Tr $R$ [ ˆ $FR$ ( $t′′$ ) $†$  ̃ $ρR$ ˆ $FR$ ( $t′$ )]
(3.60)
$g$ ++( $t′, t′′$ ) = Tr $R$ [ ˆ $FR$ ( $t′$ ) $†$ ˆ $FR$ ( $t′′$ ) $†$  ̃ $ρR$ ] = Tr $R$ [ ˆ $FR$ ( $t′′$ ) $†$  ̃ $ρR$ ˆ $FR$ ( $t′$ ) $†$ ] $,$ (3.61)
where the second line when we cyclically permute reservoir operators.
<!-- page 56 -->
Expanding out the integrand 3.57, we obtain
$g−−$ ( $t′, t′′$ ) ˆ
$S†$ ˆ
$S†$  ̃ $ρS$ ( $t$ ) + $g−$ +( $t′, t′′$ ) ˆ
$S†$ ˆ
$S$  ̃ $ρS$ ( $t$ ) + $g$ + $−$ ( $t′, t′′$ ) ˆ
$S$ ˆ
$S†$  ̃ $ρS$ ( $t$ ) + $g$ ++( $t′, t′′$ ) ˆ
$S$ ˆ
$S$  ̃ $ρS$ ( $t$ )
$−g−−$ ( $t′′, t$ ) ˆ
$S†$  ̃ $ρS$ ( $t$ ) ˆ
$S† −g−$ +( $t′′, t′$ ) ˆ
$S$  ̃ $ρS$ ( $t$ ) ˆ
$S† −g$ + $−$ ( $t′′, t′$ ) ˆ
$S†$  ̃ $ρS$ ( $t$ ) ˆ
$S −g$ ++( $t′′, t′$ ) ˆ
$S$  ̃ $ρS$ ( $t$ ) ˆ
$S$
$−g−−$ ( $t′, t′′$ ) ˆ
$S†$  ̃ $ρS$ ( $t$ ) ˆ
$S† −g−$ +( $t′, t′′$ ) ˆ
$S$  ̃ $ρS$ ( $t$ ) ˆ
$S† −g$ + $−$ ( $t′, t′′$ ) ˆ
$S†$  ̃ $ρS$ ( $t$ ) ˆ
$S −g$ ++( $t′, t′′$ ) ˆ
$S$  ̃ $ρS$ ( $t$ ) ˆ
$S$
+ $g−−$ ( $t′′, t′$ ) ̃ $ρS$ ( $t$ ) ˆ
$S†$ ˆ
$S†$ + $g−$ +( $t′′, t′$ ) ̃ $ρS$ ( $t$ ) ˆ
$S†$ ˆ
$S$ + $g$ + $−$ ( $t′′, t′$ ) ̃ $ρS$ ( $t$ ) ˆ
$S$ ˆ
$S†$ + $g$ ++( $t′′, t′$ ) ̃ $ρS$ ( $t$ ) ˆ
$S$ ˆ
$S.$
(3.62)
Noting that
$g−−$ ( $t′, t′′$ ) $∗$
=
Tr $R$ [ ˆ $FR$ ( $t′$ ) ˆ $FR$ ( $t′′$ ) ̃ $ρR$ ] $†$
(3.63)
=
Tr $R$ [ ̃ $ρR$ ˆ $FR$ ( $t′′$ ) $†$ ˆ $FR$ ( $t′$ ) $†$ ]
(3.64)
=
$g$ ++( $t′′, t′$ )
(3.65)
and similarly
$g$ + $−$ ( $t′, t′′$ ) $∗$
=
Tr $R$ [ ˆ $FR$ ( $t′$ ) $†$ ˆ $FR$ ( $t′′$ ) ̃ $ρR$ ] $†$
(3.66)
=
Tr $R$ [ ̃ $ρR$ ˆ $FR$ ( $t′′$ ) $†$ ˆ $FR$ ( $t′$ )]
(3.67)
=
$g$ + $−$ ( $t′′, t′$ ) $,$
(3.68)
we can write the integrand 3.62 in a much more compact form:
$$
$$
$g−−$ ( $t′, t′′$ )
ˆ $S†$ ˆ $S†$  ̃ $ρS$ ( $t$ ) $−$ ˆ $S†$  ̃ $ρS$ ( $t$ ) ˆ $S†$
+ $g−$ +( $t′, t′′$ )
ˆ $S†$ ˆ $S$  ̃ $ρS$ ( $t$ ) $−$ ˆ $S$  ̃ $ρS$ ( $t$ ) ˆ $S†$
$$
$$
$$
$$
+ $g$ + $−$ ( $t′, t′′$ )
ˆ $S$ ˆ $S†$  ̃ $ρS$ ( $t$ ) $−$ ˆ $S†$  ̃ $ρS$ ( $t$ ) ˆ $S$
+ $g$ ++( $t′, t′′$ )
ˆ $S$ ˆ $S$  ̃ $ρS$ ( $t$ ) $−$ ˆ $S$  ̃ $ρS$ ( $t$ ) ˆ $S$
+ $h.c.$
(3.69)
This gives us the second term in our equation for ∆ ̃ $ρS$ in terms of the
correlation functions:
$$
$R t$ +∆ $t$
1
ˆ $S†$ ˆ $S†$  ̃ $ρS$ ( $t$ ) $−$ ˆ $S†$  ̃ $ρS$ ( $t$ ) ˆ $S†$
∆ ̃ $ρ$ (2)
=
$dt′ R t′$
$g−−$ ( $t′, t′′$ )
$S$
( $iħ$ )2
$t$
$t dt′′$
$$
$$
$$
+ $g−$ +( $t′, t′′$ )
ˆ $S†$ ˆ $S$  ̃ $ρS$ ( $t$ ) $−$ ˆ $S$  ̃ $ρS$ ( $t$ ) ˆ $S†$
+ $g$ + $−$ ( $t′, t′′$ )
ˆ $S$ ˆ $S†$  ̃ $ρS$ ( $t$ ) $−$ ˆ $S†$  ̃ $ρS$ ( $t$ ) ˆ $S$
$$
$$
$$
+ $g$ ++( $t′, t′′$ )
ˆ $S$ ˆ $S$  ̃ $ρS$ ( $t$ ) $−$ ˆ $S$  ̃ $ρS$ ( $t$ ) ˆ $S$
+ $h.c.$
$.$
(3.70)
As an example, we can explicitly evaluate one of these correlators for an
environment formed by the radiation field, where
$g$ + $−$ ( $t′, t′′$ ) = $ħ$ 2 $X$
$g∗$
$j gk⟨$ ˆ $a†$
(3.71)
$j$ ˆ $ak⟩ei$ ( $νj−ω$ ) $t′−i$ ( $νk−ω$ ) $t′′.$
$j,k$
If the radiation field is in a thermal state, $⟨$ ˆ $a†$
$j$ ˆ $ak⟩$ = $δjk$  ̄ $nj$ , so the correlator
becomes
$g$ + $−$ ( $t′, t′′$ ) = $ħ$ 2 $X$
$|gj|$ 2 ̄ $njei$ ( $νj−ω$ )( $t′−t′′$ ) $.$
(3.72)
$j$
<!-- page 57 -->
The two time correlation function now depends only on the difference in
time, $t′′ −t′$ = $τ$ , and it is a sharply peaked function of $τ$ whose width cor-
responds to the reservoir correlation time $τc$ . In the limit that the radiation
field volume $V →∞$ , $τc →$ 0, we recover the Wigner-Weisskopf approxima-
tion for which the correlator is a delta function in time. Note that for the
radiation field, $g−−$ = $g$ ++ = 0, and $g−$ + is the same as $g$ + $−$ with $⟨$ ˆ $a†$
$j$ ˆ $aj⟩$
replaced by $⟨$ ˆ $aj$ ˆ $a†$
$j⟩$ = $⟨$ ˆ $a†$
$j$ ˆ $aj⟩$ +1. Expressed in terms of correlation functions,
the second term becomes
$$
$$
$R t$ +∆ $t$
1
ˆ $S$ ˆ $S†$  ̃ $ρS −$ ˆ $S†$  ̃ $ρS$ ˆ $S$
∆ ̃ $ρ$ (2)
=
$dt′ R t′$
$g$ + $−$ ( $t′, t′′$ )
$S$
( $iħ$ )2
$t$
$t dt′′n$
$$
(3.73)
+ $g−$ +( $t′, t′′$ )
ˆ $S†$ ˆ $S$  ̃ $ρS −$ ˆ $S$  ̃ $ρS$ ˆ $S† o$
+ $h.c.,$
where we have neglected contributions from $g−−$ and $g$ ++. The only signif-
icant time dependence enters through the sharply-peaked correlation func-
tions. In the case of the radiation field we may evaluate the inner integral
using the same procedure performed in the Wigner Weisskopf approxima-
tion, obtaining
$Z t′$
$Z t′$
$X$
$−$ 1
$dt′′g$ + $−$ ( $t′, t′′$ )
=
$−$
$dt′ |gj|$ 2 ̄ $njei$ ( $ω−νj$ )( $t′′−t′$ ) (3.74)
$ħ$ 2
$t$
$t$
$j$
$X$
=
$−π$
$|gj|$ 2 ̄ $njδ$ ( $νj −ω$ )
(3.75)
$j$
=
$−γ$
(3.76)
2  ̄ $n$ ( $ω$ ) $.$
Here we have neglected the energy shift arising from the principal part of the
integral, because that can be incorporated into the bare system Hamiltonian.
As mentioned above, the calculation for $g−$ + proceeds in the same manner,
yielding
$Z t′$
$−$ 1
$dt′′g−$ +( $t′, t′′$ ) = $−γ$
(3.77)
$ħ$ 2
$t$
2( ̄ $n$ ( $ω$ ) + 1) $.$
The remaining integral over $t′$ may be approximated by ∆ $t·$ integrand be-
cause ∆ $t$ is now small compared to the time variation of the integrand.
Dividing through by ∆ $t$ , we obtain a time-averaged differential equation for
 ̃ $ρS$ :
$$
$$
$$
∆ ̃ $ρS$
ˆ $S$ ˆ $S†$  ̃ $ρS −$ ˆ $S†$  ̃ $ρS$ ˆ $S$
$−γ$
ˆ $S†$ ˆ $S$  ̃ $ρS −$ ˆ $S$  ̃ $ρS$ ˆ $S†$
+ $h.c.$
∆ $t$ = $−γ$
2  ̄ $n$ ( $ω$ )
2 ( ̄ $n$ ( $ω$ ) + 1)
(3.78)
<!-- page 58 -->
This result is known as the “master equation”, and it provides an essential
tool for studying the evolution of open systems coupled to Markovian reser-
voirs. This formalism provides a method to properly treat non-unitary be-
havior in the system of interest. It can be seen, for example, that Eq. (3.78)
preserves the trace of the density matrix (Tr  ̇ $ρ$ = 0).
While Eq. (3.78)
describes a two-level atom interacting with a thermal state of the electro-
magnetic field, we note that it is possible to derive master equations for
other types of interactions as well, e.g., a harmonic oscillator interacting
with an environment of other harmonic oscillators.

<!-- captions -->


<!-- footnotes -->
1This relationship between bandwidth and correlation time of the reservoir is often,
but not always, true. For example, if the system consists of an ensemble of atoms with
spatial extent $L$ larger than the optical wavelength $λ$ 0, and the environment consists of
the electromagnetic field, the correlation time $τc∼L/c$ corresponds to the time it takes for
a photon to leave the medium, since a photon released by one atom can be absorbed by
another a time $τc$ later.
2The Born approximation is actually slightly stronger than this. It states that the
reservoir is large enough that the assumption of factorizability is good at all times as far
as calculating the system dynamics is concerned.

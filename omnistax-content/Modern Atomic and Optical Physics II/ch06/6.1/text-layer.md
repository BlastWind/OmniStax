<!-- page 107 -->
6.1
Formalism
The description on which both groups converged begins with the most gen-
eral form of the master equation,
$d$ ˆ $ρS$
(6.1)
$dt$ = 1
$iħ$ [ ˆ $HS,$ ˆ $ρS$ ] + $L$ (ˆ $ρS$ ) $,$
where the Liouvillian operator can be expressed as
$X$
$$
$$
$γk$
$L$ (ˆ $ρS$ ) = $−$
ˆ $c†$
$.$
(6.2)
$k$ ˆ $ck$ ˆ $ρS$ + ˆ $ρS$ ˆ $c†$
$k$ ˆ $ck −$ 2ˆ $ck$ ˆ $ρS$ ˆ $c†$
$k$
2
$k$
It can be shown that Eq. (6.1) is the most general form for a master equation
allowed by physics, and it has the added advantage that it is notationally
compact.
Since it is the most general form, it must contain the master
equation we derived by assuming a certain kind of environment. To see this,
identify the (in principle arbitrary) operators ˆ $ck$ with
$√$
ˆ $c$ 2 $k$
=
 ̄ $n$ + 1 ˆ $Sk$
(6.3)
$√$
ˆ $c$ 2 $k$ +1
=
 ̄ $n$ ˆ $S†$
(6.4)
$k,$
in which case both the decay and absorption terms are included in Eq. (6.1).
Combining Eq. (6.1) with the definition for $L$ (ˆ $ρS$ ), and expanding ˆ $ρS$ =
$P$
$α pα|ψα⟩⟨ψα|$ , we can rewrite the master equation in a suggestive form:
$X$
$$
$$
$d$ ˆ $ρS$
$γk$
= 1
ˆ $c†$
(6.5)
$dt$
$k$ ˆ $ck$ ˆ $ρS$ + ˆ $ρS$ ˆ $c†$
$k$ ˆ $ck −$ 2ˆ $ck$ ˆ $ρS$ ˆ $c†$
$k$
$iħ$ [ ˆ $HS,$ ˆ $ρS$ ] $−$
2
$k$
$n$
$$
$$
$P$
1
ˆ $HS −iħP$
$γk$
=
$pα|ψα⟩⟨ψα|$
$α$
$iħ$
$k$
2 ˆ $c†$
$k$ ˆ $ck$
$$
$$
ˆ $HS$ + $iħP$
$γk$
$−$ 1
(6.6)
$iħpα|ψα⟩⟨ψα|$
$k$
2 ˆ $c†$
$k$ ˆ $ck$
$o$
+ $P$
$.$
$k pαγk$ ˆ $ck|ψα⟩⟨ψα|$ ˆ $c†$
$k$
The first two terms can be rewritten in terms of an effective Hamiltonian,
$X$
$γk$
ˆ $H$ eff= ˆ $HS −iħ$
(6.7)
$k$ ˆ $ck,$
2 ˆ $c†$
$k$
<!-- page 108 -->
so that the master equation now reads
$$
$$
$$
$$
$P$
$d$ ˆ $ρS$
1
ˆ $H$ eff $|ψα⟩⟨ψα| −|ψα⟩⟨ψα|$ ˆ $H†$
=
+ $P$
$.$
$dt$
$α pα$
$iħ$
eff
$k γk$ ˆ $ck|ψα⟩⟨ψα|$ ˆ $c†$
$k$
(6.8)
This form for the first two terms resembles the master equation for a pure
state evolving according to ˆ $H$ eff; the final term we will interpret as a “quan-
tum jump” operator which changes $|ψα⟩$ into another state $|φk,α⟩$ = ˆ $ck|ψα⟩$
with some probability.
The Schrodinger equation corresponding to the first two terms of Eq. (6.8)
is
$iħd$
(6.9)
$dt|ψα⟩$ = ˆ $H$ eff $|ψα⟩,$
and since we are interested in using Eq. (6.8) to describe a stochastic evo-
lution, we will write it in discrete time,
$!$
ˆ $H$ eff $δt$
$|ψα$ ( $t$ + $δt$ ) $⟩$ =
1 +
$|ψα$ ( $t$ ) $⟩.$
(6.10)
$iħ$
Note that $|$  ̃ $ψα$ ( $t$ + $δt$ ) $⟩$ is not normalized because the effective Hamiltonian
is not Hermitian. To lowest order in the small time $δt$ ,
ˆ $H†$
ˆ $H$ eff $δt$
eff $δt$
$⟨ψα$ ( $t$ + $δt$ ) $|ψα$ ( $t$ + $δt$ ) $⟩$
=
$⟨ψα|$ (1 $−$
)(1 +
) $|ψα⟩$ (6.11)
$iħ$
$iħ$
$$
$$
=
$⟨ψα|$
1 $−δt$
$|ψα⟩$
(6.12)
eff $−$ ˆ $H$ eff)
$iħ$ ( ˆ $H†$
$!$
$X$
=
$⟨ψα|$
1 $−δt$
$γk$ ˆ $c†$
$|ψα⟩.$
(6.13)
$k$ ˆ $ck$
$k$
To simplify notation, we define
$δpk,α$
=
$δtγk⟨ψα|$ ˆ $c†$
(6.14)
$k$ ˆ $ck|ψα⟩$
$X$
$δpα$
=
$δt$
$γk⟨ψα|$ ˆ $c†$
(6.15)
$k$ ˆ $ck|ψα⟩,$
$k$
so that the norm of the state becomes
$X$
$⟨ψα$ ( $t$ + $δt$ ) $|ψα$ ( $t$ + $δt$ ) $⟩$ = 1 $−$
$δpk,α$ = 1 $−δpα.$
(6.16)
$k$
We now know the proper normalization for the state at time $t$ + $δt$ :
$|$  ̃ $ψα$ ( $t$ + $δt$ ) $⟩$ = 1 + ˆ $H$ eff $δt/iħ$
$√$ 1 $−δpα$
$|ψα$ ( $t$ ) $⟩.$
(6.17)
<!-- page 109 -->
This normalized state corresponds the state of a system evolving solely under
the influence of the first two terms in the master equation, i.e. a system
which has never jumped into one of the $|φk,α⟩$ .
The “quantum jump” states $|φk,α⟩$ are not normalized either, since
$⟨φk,α|φk,α⟩$ = $⟨ψα|$ ˆ $c†$
(6.18)
$k$ ˆ $ck|ψα⟩$ = $δpk,α$
$γkδt .$
Again, we will define a normalized state
$s$
$γkδt$
$|$  ̃ $φk,α⟩$ =
$|φk,α⟩$
(6.19)
$δpk,α$
to explicitly keep track of probability conservation.
Like the Schrodinger equation, the master equation may be written for
discrete times $δt$ ,
$X$
$$
$X$
$$
ˆ $ρS$ ( $t$ + $δt$ ) =
$pα$
$|ψα$ ( $t$ + $δt$ ) $⟩⟨ψα$ ( $t$ + $δt$ ) $|$ + $δt$
$γk|φk,α⟩⟨φk,α|$
$,$ (6.20)
$α$
$k$
and expressed in terms of the normalized states $|$  ̃ $ψα$ ( $t$ + $δt$ ) $⟩$ and $|$  ̃ $φk,α⟩$ ,
$$
$P$
ˆ $ρS$ ( $t$ + $δt$ )
=
(1 $−δpα$ ) $|$  ̃ $ψα$ ( $t$ + $δt$ ) $⟩⟨$  ̃ $ψα$ ( $t$ + $δt$ ) $|$
$α pα$
$$
(6.21)
+ $P$
$.$
$k δpk,α|$  ̃ $φk,α⟩⟨$  ̃ $φk,α|$
By rewriting the master equation in this form, we can use a probability
interpretation to gain intuition – and develop numerics – for the resulting
system dynamics. Eq. (6.21) has two terms, which lead to two possible out-
comes after a time $δt$ :
(1) with probability (1 $−δpα$ ), the system evolves according to ˆ $H$ eff, and
remains in state $|$  ̃ $ψα⟩$ .
(2) with probability $δpα$ , the system jumps into another state; in partic-
ular it jumps into state $|$  ̃ $φk,α⟩$ with probability $δpk,α$ .
This statistical picture of a state vector evolution provides a clear pro-
cedure for simulation which only requires computation of the state vector
(rather than density matrix) elements. A sample algorithm is summarized
in Table (6.1).
<!-- page 110 -->
Table 6.1: Monte Carlo Procedure
(1) Pick initial state $|ψα⟩$
(2) Pick a random number r
(3) For an appropriate time interval $δt$ , calculate $δpα$ . If $δpα < r$ , replace
$|ψα⟩$ by (1 $−iδt$ ˆ $H$ eff $/ħ$ ) $|ψα⟩/√$ 1 $−δpα$ . If $PK$
$k$ =1 $δpk,α ≤r < PK$ +1
$k$ =1 $δpk,α$ ,
replace $|ψα⟩$ by $|$  ̃ $φk,α⟩$
(4) Repeat steps (2) and (3) for the desired length of time.
(5) Repeat steps (1-4) N times to generate a distribution of outcomes.
(6) If necessary, repeat steps (1-5) for all possible initial states $|ψα⟩.$
(7) Density matrix evolution: ˆ $ρS$ ( $t$ ) = $P$
$α pα|ψα$ ( $t$ ) $⟩⟨ψα$ ( $t$ ) $|/N$ .

<!-- captions -->


<!-- footnotes -->


<!-- page 65 -->
4.1
The slowly-varying envelope approximation
We can rewrite the Maxwell equations (in the absence of unbound charges
and currents) as a wave equation for E: 1
$∂$ 2E
1
$∂$ 2P
$∇$ 2E $−$ 1
(4.10)
$c$ 2
$∂t$ 2 =
$ε$ 0 $c$ 2
$∂t$ 2 $.$
<!-- page 66 -->
The wave equation is second order in time and space, but application
of the slowly varying envelope approximation can reduce it to first order.
An electric field which is nearly monochromatic can be parameterized by an
envelope function and its central frequency  ̄ $ν$ ,
E( $r, t$ ) = $E$ ( $r, t$ ) $ei$  ̄ $kz−i$  ̄ $νt$ + $c.c.,$
(4.11)
where $E$ varies slowly in $z$ and $t$ compared to the optical frequency  ̄ $ν$ and
wavevector  ̄ $k$ =  ̄ $ν/c$ . We also introduce a slowly varying polarization ampli-
tude,
P( $r, t$ ) = $P$ ( $r, t$ ) $ei$  ̄ $kz−i$  ̄ $νt$ + $c.c.$
(4.12)
Substituting these expressions into Eq. (4.10) and keeping only the lowest
order derivatives of the envelopes, we find the evolution equation for the
slowly varying amplitudes,
1
$∂E$
$⊥E$ + $∂E$
$P$
(4.13)
2 $i$  ̄ $k∇$ 2
$∂z$ + 1
$c$
$∂t$ = $i$  ̄ $k$
2 $ε$ 0
The derivation of Eq. (4.13) governing the slowly varying amplitudes is
straightforward. Using the derivatives of the electric field and polarization:
$$
$$
$∇$ 2E
=
$∇$ 2 $E$ + 2 $i$  ̄ $k ∂$
$ei$  ̄ $kz−i$  ̄ $νt$ + $c.c.$
(4.14)
$∂z E −$  ̄ $k$ 2 $E$
$ ∂$ 2
$$
$∂$ 2
=
$ei$  ̄ $kz−i$  ̄ $νt$ + $c.c.$
(4.15)
$∂t$ 2 E
$∂t$ 2 $E −$ 2 $i$  ̄ $ν ∂$
$∂tE −$  ̄ $ν$ 2 $E$
$ ∂$ 2
$$
$∂$ 2
=
$ei$  ̄ $kz−i$  ̄ $νt$ + $c.c.$
(4.16)
$∂t$ 2 P
$∂t$ 2 $P −$ 2 $i$  ̄ $ν ∂$
$∂tP −$  ̄ $ν$ 2 $P$
we substitute into the wave equation to find
$ ∂$ 2
$$
$∇$ 2 $E$ + 2 $i$  ̄ $k ∂$
=
(4.17)
$∂z E −$  ̄ $k$ 2 $E −$ 1
$c$ 2
$∂t$ 2 $E −$ 2 $i$  ̄ $ν ∂$
$∂tE −$  ̄ $ν$ 2 $E$
$ ∂$ 2
$$
1
$.$
(4.18)
$ε$ 0 $c$ 2
$∂t$ 2 $P −$ 2 $i$  ̄ $ν ∂$
$∂tP −$  ̄ $ν$ 2 $P$
<!-- page 67 -->
Taking  ̄ $ν$ = $c$  ̄ $k$ , and noting that in the slowly varying envelope approximation
$|$  ̄ $νP|$
$>>$
$| ∂$
(4.19)
$∂tP|$
$|$  ̄ $νE|$
$>>$
$| ∂$
(4.20)
$∂tE|$
$|$  ̄ $kE|$
$>>$
$| ∂$
(4.21)
$∂z E|,$
(4.22)
the relevant terms reduce to
$∇$ 2
$⊥E$ + 2 $i$  ̄ $k ∂$
(4.23)
$∂z E$ + 1
$c$ 2 2 $i$  ̄ $ν ∂$
$∂tE$ = $−$ 1
$ε$ 0 $c$ 2  ̄ $ν$ 2 $P,$
or
1
$∂$
$⊥E$ + $∂$
$P.$
(4.24)
2 $i$  ̄ $k∇$ 2
$∂z E$ + 1
$c$
$∂tE$ = $i$  ̄ $k$
2 $ε$ 0
Two properties of this equation should be noted:
$∂$ 2
(1) In the first term, $∇$ 2
$⊥$ =
$∂x$ 2 + $∂$ 2
$∂y$ 2 leads to transverse effects such as
focussing or diffraction which cannot in general be neglected. However, for a
plane wave there is no transverse spatial variation so the first term vanishes
and we obtain
$∂$
$∂$
$P.$
(4.25)
$∂z E$ + 1
$c$
$∂tE$ = $i$  ̄ $k$
2 $ε$ 0
(2) The slowly varying polarization $P$ is proportional to the positive-
frequency component of the dipole operator in the rotating frame.
For
example, a two level atom leads to a polarization $P$ = ( $N/V$ ) $μρ$ 21( $z$ ) $e−i$  ̄ $kz$ .
(Note that $ρ$ 21( $z$ ) itself is driven by the local electric field, which contains a
fast phase term $ei$  ̄ $kz$ so that $P$ is in fact slowly varying in space.)
Generalizations of the SVEA
Our derivation of the slowly varying envelope approximation can be gener-
alized to include multiple optical frequencies. To illustrate this idea, we will
consider the example of atomic interactions with an optical frequency comb.
This periodic train of short optical pulses can be represented in the Fourier
domain by a comb of harmonics, so that the electric field may be written
$X$
$E$ =
$En$ ( $z, t$ ) $einkz−iνnt.$
(4.26)
$n$
The spacing between harmonics $νn$ +1 $−νn$ determines the repetition rate of
the pulses, while the bandwidth occupied by the set of harmonics determines
<!-- page 68 -->
the duration of each pulse. Provided that each harmonic has an envelope
$En$ ( $z, t$ ) which varies slowly in space and time, we can use an extension of
the SVEA. Defining the polarization harmonics by
$X$
$P$ =
$Pn$ ( $z, t$ ) $einkz−iνnt,$
(4.27)
$n$
the propagation equation becomes a set of equations for each harmonic com-
ponent
1
$∂$
$⊥En$ + $∂$
$Pn.$
(4.28)
2 $i$  ̄ $k∇$ 2
$∂z En$ + 1
$c$
$∂tEn$ = $i$  ̄ $k$
2 $ε$ 0
This treatment applies to arbitrarily short pulses, since there is no restriction
on the number of harmonics included. Note, however, that in general the
atomic response will act to couple different harmonics, i.e. $Pn$ will depend
on all components $En′$ , so the coupled Maxwell-Bloch equations may be quite
complicated to solve.

<!-- captions -->


<!-- footnotes -->
1Using $∇×$ ( $∇×$ A) = $∇$ ( $∇·$ A) $−∇$ 2A and the curl of Eq. (4.5) we get
$∇×$ ( $∇×$ E)
=
$∇$ ( $∇· E$ ) $−∇$ 2E
(4.7)
$$
$$
$∂$ 2
=
$−$ 1
E + 1
$.$
(4.8)
$c$ 2
$∂t$ 2
$ε$ 0 P
In the absence of unbound charges, $∇·$ E = 0, so we obtain the wave equation
$∂$ 2
1
$∂$ 2
$∇$ 2E $−$ 1
(4.9)
$c$ 2
$∂t$ 2 E =
$ε$ 0 $c$ 2
$∂t$ 2 P $.$

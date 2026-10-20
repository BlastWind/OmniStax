<!-- page 113 -->
7.1
The adiabatic theorem for time-dependent Hamil-
tonians
Consider an N-dimensional Hilbert space spanned by an orthonormal basis,
${|e$ 1 $⟩. . . |eN⟩}$ whose evolution is governed by a time-dependent Hamilto-
nian, ˆ $H$ ( $t$ ). At any given time $t$ = $t$ 0, we can always find the instantaneous
eigenstates and eigenvalues of the Hamiltonian ˆ $H$ ( $t$ 0),
ˆ $H$ ( $t$ 0) $|εk$ ( $t$ 0) $⟩$ = $εk$ ( $t$ 0) $|εk$ ( $t$ 0) $⟩.$
(7.1)
An arbitrary state may be expanded in the basis of instantaneous eigen-
states,
$X$
$|ψ$ ( $t$ ) $⟩$ =
$cl$ ( $t$ ) $|εl$ ( $t$ ) $⟩,$
(7.2)
$l$
and it obeys the Schrödinger equation $iħ|$  ̇ $ψ$ ( $t$ ) $⟩$ = ˆ $H$ ( $t$ ) $|ψ$ ( $t$ ) $⟩$ . For a con-
stant Hamiltonian, a system prepared in an eigenstate will remain in that
state; this is in general no longer true for time-dependent Hamiltonians.
<!-- page 114 -->
Expanding the Schrödinger equation, we find that the time dependence of
the eigenstates introduces new terms:
$$
$$
$X$
$X$
$iħ$
 ̇ $cl$ ( $t$ ) $|εl$ ( $t$ ) $⟩$ + $cl$ ( $t$ ) $d$
=
$cl$ ( $t$ ) $εl$ ( $t$ ) $|εl$ ( $t$ ) $⟩.$
(7.3)
$dt|εl$ ( $t$ ) $⟩$
$l$
$l$
To find the equations of motion for the probability amplitudes $ck$ ( $t$ ), we
multiply Eq. (7.3) from the left by $⟨εk$ ( $t$ ) $|$ , yielding
$X$
$iħ$  ̇ $ck$ ( $t$ ) = $εk$ ( $t$ ) $ck$ ( $t$ ) $−iħ$
$cl$ ( $t$ ) $⟨εk$ ( $t$ ) $| d$
(7.4)
$dt|εl$ ( $t$ ) $⟩.$
$l$
This set of N coupled differential equations may also be represented in
matrix notation, with
$$
$$
$$
$$
$c$ 1( $t$ )
$ε$ 1( $t$ )
0
$$
$c$ 2( $t$ )
$$
$$
$ε$ 2( $t$ )
$$
$$
$$
$$
$$
$ψ$ ( $t$ ) =
and
ˆ $H$ ( $t$ ) =
$$
...
$$
$$
...
$$
$$
$$
$$
$,$ (7.5)
$cN$ ( $t$ )
0
$εN$ ( $t$ )
whereby Eq. (7.4) becomes
$$
$$
$$
$$
$$
$$
$c$ 1
$ε$ 1
$−iħ⟨ε$ 1 $|$  ̇ $ε$ 2 $⟩$
$. . .$
$c$ 1
$$
$c$ 2
$$
$$
$−iħ⟨ε$ 2 $|$  ̇ $ε$ 1 $⟩$
$ε$ 2
$$
$$
$c$ 2
$$
$$
$$
$$
$$
$$
$$
$iħd$
$$
...
$$
$$
...
...
$$
$$
...
$$
(7.6)
$dt$
$$
$$ =
$$
$$
$$
$,$
$cN$
$εN$
$cN$
where the terms are implicitly time dependent for notational simplicity. 1
7.1.1
The condition for adiabaticity
Suppose the quantum state $|ψ⟩$ is initially prepared at time $t$ = 0 in one of the
instantaneous eigenstates $|εk$ (0) $⟩$ . The off-diagonal couplings in Eqs. (7.4,7.6)
indicate that $|εk$ ( $t$ ) $⟩$ is not an exact stationary state, but our intuition tells us
that it should be approximately stationary for a Hamiltonian which changes
very slowly. The situation where $|εk$ ( $t$ ) $⟩$ is essentially stationary is known
as the “adiabatic” limit, and corresponds to off-diagonal terms sufficiently
small that negligible population leaks to other states, i.e. $|ck|$ 2 $≈$ 1.
<!-- page 115 -->
To estimate how small the off-diagonal couplings must be, we use per-
turbation theory to calculate how a weak coupling $⟨εk|$  ̇ $εl⟩$ affects the state
vector. In particular, for non-degenerate eigenstates and for $l̸$ = $k$ , the equa-
tion of motion for $cl$ is given by
 ̇ $cl$
$≈$
$−i$ ( $ωl −ωk$ ) $cl −⟨εl|$  ̇ $εk⟩ck$ ( $t$ )
(7.7)
$≈$
$−i$ ( $ωl −ωk$ ) $cl −⟨εl|$  ̇ $εk⟩·$ 1 $.$
(7.8)
Here we have measured all the energies in reference to $εk$ .
The change
induced in $|ψ⟩$ by this coupling is
$X$
$⟨εl|$  ̇ $εk⟩|εl⟩$
$|ψ$ (1) $⟩$ = $−iħ$
$.$
(7.9)
$εk −εl$
$l$
The requirement that $|εk$ ( $t$ ) $⟩$ be stationary (or $|ψ$ (1) $⟩$ = 0) thus provides our
adiabaticity condition,
$ħ|⟨εl|$  ̇ $εk⟩|$
(7.10)
$|εk −εl| ≪$ 1 $.$
A Hamiltonian which changes on a timescale $τ$ will lead to couplings $|⟨εl|$  ̇ $εk⟩| ∝$
1 $/τ$ , so the system does indeed adiabatically follow the instantaneous eigen-
states for a slowly varying Hamiltonian.
Note that the adiabatic theorem is formulated for coherent Hamiltonian
evolution of the system.
For systems which exhibit decay, the adiabatic
requirement may be modified from the form exhibited in Eq. (7.10). Even
when the adiabaticity condition is satisfied, the neglected diagonal terms
may still introduce a phase factor known as a “geometric” or “Berry’s”
phase. This geometric phase adds to the so-called “dynamical” phase (given
$R t$
by $e{−i/ħ$
0 $dτεk$ ( $τ$ ) $}$ ) which comes from the diagonal part of the Schrodinger
equation. A detailed discussion of such phases can be found in many mod-
ern quantum mechanics books (e.g. Sakurai); here we only note that in
situations where the dynamical phase vanishes, there is frequently also no
geometric phase.

<!-- captions -->


<!-- footnotes -->
1In general, the real part of $⟨εk|$  ̇ $εk⟩$ vanishes, and we will neglect the Berry phase
(imaginary component) in this treatment.

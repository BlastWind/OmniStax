<!-- page 281 -->
11.7
Higher-order coherence of atomic matter waves
Quantum states of light often exhibit no first order coherence, but can have
higher order coherences. We would like to know whether similar non-classical
states can appear in a BEC. In particular, one could inquire whether two
condensates must always produce an interference pattern, or whether there
are physically important effects which cannot be described by the Gross-Pitaevski
equation.
Since the atomic interactions introduce nonlinearity
into the matter-wave field, it seems possible that such nonlinearities might
indeed give rise to non-classical states.
11.7.1
Toy model: cold, interacting atoms in a double-well
potential
As an example of how non-classical states of matter can arise from atomic
interactions, we will consider $N$ cold atoms confined to the double-well po-
tential illustrated in Figure 11.13.
Noninteracting atoms
If the atoms do not interact, the Hamiltonian for the system includes only
the kinetic energy or tunnelling terms:
ˆ $H$ kin = $−t$ ˆ $a†$
(11.168)
$R$ ˆ $aL −t∗$ ˆ $a†$
$L$ ˆ $aR$
<!-- page 282 -->
The ground state of the system $|φN⟩$ has all $N$ atoms in the single-particle
symmetric superposition state $|$ + $⟩$ . Defining the annihilation operators for
the left and right potential well by ${$ ˆ $aL,$ ˆ $aR}$ respectively, we can write this
ground state in second quantization notation
$$
$N$
ˆ $a†$
$L$ + ˆ $a†$
$R$
$|φN⟩$ =
$√$
(11.169)
$N$ ! $·$ 2 $N/$ 2 $|$ vac $⟩.$
This state has a well-defined phase between the particles on the left and the
particles on the right, so $⟨$ ˆ $a†$
$L$ ˆ $aR⟩̸$ = 0.
In fact, for large $N$ this ground state is very close to a coherent state
satisfying
ˆ $aR|α⟩$
=
$α|α⟩$
(11.170)
ˆ $aL|α⟩$
=
$α|α⟩,$
(11.171)
with $|αR|$ 2 = $|α|$ 2 = $N/$ 2. This similarity arises because the number uncertainty
$√$
for the coherent state goes as 1 $/$
$N$ , and for large $N$ the coherent
state will give us an intuitive picture of the system behavior. In particular,
if we indeed had two coherent states in the two wells with phases $φR$ and $φL$ ,
this device would correspond to a classical Josephson device, with a kinetic
energy given by $E$ = $−$ ( $Nt/$ 2) cos( $φR −φL$ ). It is worth emphasizing that
the correspondence between the classical Josephson device and the quantum
double well potential emerges only in the limit of large occupation number
$N$ .
<!-- page 283 -->
Strongly interacting atoms
We now consider the opposite limit, where strong repulsive interactions dom-
inate. We can thus neglect the tunnelling terms, so the Hamiltonian can be
written as
$$
$$
ˆ $H$ int = $U$ 0
ˆ $a†$
$,$
(11.172)
$L$ ˆ $a†$
$L$ ˆ $aL$ ˆ $aL$ + ˆ $a†$
$R$ ˆ $a†$
$R$ ˆ $aR$ ˆ $aR$
or, in terms of the number occupancy,
ˆ $H$ int = $U$ 0 (ˆ $nL$ (ˆ $nL −$ 1) + ˆ $nR$ (ˆ $nR −$ 1)) $.$
(11.173)
If $U$ 0 $≫t$ , then $|φN⟩$ is not a ground state of the multiparticle system,
because the potential energy cost associated with the repulsive interaction
overwhelms the kinetic energy benefit conferred on the delocalized states.
For example, consider two strongly repulsive atoms in the double well po-
tential. The best way to avoid interactions is for each atom to occupy its
own well, so the ground state is
$|ψ$ 2 $⟩$ = ˆ $a†$
(11.174)
$L$ ˆ $a†$
$R|$ vac $⟩.$
Although each atom pays an energy price of $∼t$ , the huge gain $∼U$ 0 from
avoiding interaction more than compensates for the associated increase in
kinetic energy. Similarly, in the ground state of the $N−$ particle system, the
atoms pile up evenly in the two wells, generating a highly non-classical Fock
state
$|ψN⟩$ = (ˆ $a†$
(11.175)
$L$ ˆ $a†$
$R$ ) $N|$ vac $⟩.$
Such states do not display a first-order interference pattern, and cannot be
described by the Gross-Pitaevski equation.
This example shows that creating non-classical states of matter requires
a system where interactions are stronger than kinetic energy. However, it is
also important to keep losses low, since these act to destroy non-classical co-
herences. In practice, there are two methods currently employed to produce
Fock states of atoms. First, by confining atoms more tightly, for example
in an optical lattice, one can decrease the tunnelling rate between different
sites, thus decreasing the kinetic energy scale. Second, one can increase the
scattering length $a$ using, for example, a Feshbach resonance, to enhance
the interactions.
11.7.2
Optical lattice potentials
A variety of experiments have used an optical lattice potential to confine
atoms or other polarizable objects in one, two, or three-dimensional arrays.
<!-- page 284 -->
The optical lattice is based on the optical dipole force associated with the AC
Stark shift from a red-detuned light source, which attracts the polarizable
particles to the intensity maxima. Counterpropagating beams produce a
standing wave with a period of $λ/$ 2, where $λ$ is the wavelength of the red-
detuned light source. By combining standing waves in multiple dimensions,
one can create a simple cubic lattice with a potential
$$ 2 $πx$
$$
$$ 2 $πy$
$$
$$ 2 $πz$
$$
$V$ (r) $∝$ sin2
+ sin2
+ sin2
$,$
(11.176)
$λ$
$λ$
$λ$
plus a confining harmonic potential. The optical lattice potential resembles
the double-well potential discussed above in that it can be parameterized by
two quantities: the tunnelling rate between lattice sites, and the interaction
strength for atoms occupying the same lattice site.

<!-- captions -->
11.13: Figure 11.13: A double-well potential for cold atoms. A finite barrier separates the two localized states, so atoms can tunnel between them at rate $t$ . This tunnelling produces two delocalized states: the ground state is a $√$ symmetric combination of left and right $|$ + $⟩$ = (1 $/$ 2) ( $|L⟩$ + $|R⟩$ ), and the $√$ excited state $|−⟩$ = (1 $/$ 2) ( $|L⟩−|R⟩$ ) is higher in energy by 2 $t$ .

<!-- footnotes -->


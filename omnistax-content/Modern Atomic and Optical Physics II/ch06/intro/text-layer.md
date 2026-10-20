<!-- page 106 -->
Chapter 6
Stochastic Wavefunctions
The master equation is an essential tool for studying the dynamics of a
system interacting with its surroundings. In some situations, however, the
complexity of the system or the subtlety of interpretation has spurred de-
velopment of more sophisticated techniques for solving the master equation.
One such method makes use of random processes to simulate the system
state. We will derive the equations governing the evolution of these stochas-
tic or Monte Carlo wavefunctions, and discuss appropriate applications for
this technique.
The Monte Carlo wavefunction was derived simultaneously in the 1990s
by two groups interested in very different questions. A group of scientists in
France, Dalibard, Castin, and Mølmer, wanted to simulate laser cooling of
atoms quantum mechanically in three dimensions. Their numerical solution
required discretizing space into a grid of 40x40x40 positions; to implement
the master equation on such a space would have required a density matrix
with $O$ (406) $∼$ 109 entries – such calculations are beyond the scope of even
modern computers. However, simulating a wavefunction with $O$ (403) en-
tries is quite feasible. Consequently the group sought to convert the master
equation to something more like the Schrodinger equation.
At the same time, Carmichael was interested in the effect that continuous
monitoring would have on a system. For example, a two-level atom prepared
in an equal superposition of states can decay by emitting a photon; if that
photon is detected, the experimenter knows with certainty that the atom
is in its ground state. But what happens 50% of the time when a photon
is not detected? Certainly, after a long time has passed, the atom must
be in its ground state, but how does that happen?
To study these and
similar questions, Carmichael wanted to incorporate the effects of continous
<!-- page 107 -->
monitoring, and understand how a measurement can cause the system state
to suddenly jump into a different state.

<!-- captions -->


<!-- footnotes -->


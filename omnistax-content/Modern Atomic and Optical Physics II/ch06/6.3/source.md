# 6.3 Non-Hermitian evolution: Summary

<!-- page 111 -->

The stochastic wavefunction method has two fundamental parts: (1) evolution via the effective, non-Hermitian Hamiltonian, and (2) quantum jumps which occur randomly in time. Although the two parts are easily combined in numerical algorithms, only the first can be simply solved by hand. Nevertheless, in the limit that quantum jumps are very improbable, one might hope to accurately model a system using only the non-Hermitian Hamiltonian evolution. The non-Hermitian Hamiltonian has a simple intuitive interpretation: we just include by hand the imaginary parts to the energy, therefore accounting for a finite lifetime. We will often treat a system by solving a non-Hermitian Schrodinger equation and subsequently showing that the integrated probability for a quantum jump is negligible during the time interval under consideration.

For example, consider a two-level system initially in the ground state and illuminated by a weak field $\Omega$. The probability of a quantum jump in this system is $\int dt\gamma\rho_{22} \propto |\Omega|^2$, so to lowest order in the applied field we can neglect quantum jumps and treat the system using the effective Schrodinger equation. For this two-level system, the equations of motion obtained from the non-Hermitian Hamiltonian exactly mirror the master equation except for one term: the increase in $\rho_{11}$ due to decay from the excited state is missing. By adding non-Hermitian terms to the Hamiltonian, we have effectively described loss from the system, but we cannot account for where the lost state ends up. In other words, probability slowly leaks from the system.

<!-- notes
none
-->

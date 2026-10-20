# 1.2 Review of quantum mechanics

<!-- page 8 -->

## 1.2.1 States

We briefly review basic quantum mechanics and some elementary results of atomic physics.

The most complete knowledge of the system is contained in the state vector $|\psi\rangle$, which is an element of a Hilbert space $\mathcal{H}$. We can expand the state vector $|\psi\rangle$ in any orthonormal basis $\{|n\rangle\}$ of the Hilbert space,
$$ |\psi\rangle = \sum_n |n\rangle\langle n|\psi\rangle. $$ {eq:1.1}
For convenience, we write $c_n = \langle n|\psi\rangle$ for the projection of the state $|\psi\rangle$ on the basis state $|n\rangle$, which gives us the expansion coefficients of the state $|\psi\rangle$ in the basis $\{|n\rangle\}$. The probability of finding the system in the state $|n\rangle$ is then $P_n = |c_n|^2$.

## 1.2.2 Superpositions - Interference

Quantum mechanics allows for superpositions of states, in particular, for two states
$$ |\psi_1\rangle = \sum_n c_n^{(1)}|n\rangle \text{ and} $$ {eq:1.2}
$$ |\psi_2\rangle = \sum_n c_n^{(2)}|n\rangle, $$ {eq:1.3}
their superposition $\frac{1}{\sqrt{2}}(|\psi_1\rangle + |\psi_2\rangle)$ has the unique property that the probability of being in state $|n\rangle$ is not in general given by the sum of probabilities. Instead it is given by the absolute value of the sum of *amplitudes*
$$ P_n = \frac{1}{2}\left|c_n^{(1)} + c_n^{(2)}\right|^2 \neq \frac{1}{2}(P_n^{(1)} + P_n^{(2)}) $$ {eq:1.4}
This inequality occurs as a result of the interference term between the two components of state vector, given in this case by $c_n^{(1)*}c_n^{(2)}$.

## 1.2.3 Observables

Observables in quantum mechanics are represented by Hermitian operators acting on states of the Hilbert space. An operator $\hat{O}$ is Hermitian when for any two states $|\psi_{1,2}\rangle$ in the Hilbert space, we have
$$ \langle\psi_1|\hat{O}|\psi_2\rangle = (\langle\psi_2|\hat{O}|\psi_1\rangle)^*. $$ {eq:1.5}

<!-- page 9 -->

The expectation value of the observable $\hat{O}$ when the system is in state $|\psi\rangle$ is
$$ \langle\hat{O}\rangle = \langle\psi|\hat{O}|\psi\rangle. $$ {eq:1.6}

When the operator $\hat{O}$ is diagonal in the basis $\{|n\rangle\}$, we have
$$ \hat{O}|n\rangle = \mathcal{O}_n|n\rangle $$ {eq:1.7}
$$ \Rightarrow \langle\hat{O}\rangle = \sum_n \mathcal{O}_n|c_n|^2 = \sum_n \mathcal{O}_n p_n $$ {eq:1.8}
where $\mathcal{O}_n$ denotes the n$^{th}$ eigenvalue of the operator $\hat{O}$. Note that if the system is in an eigenstate of $\hat{O}$, we always get the same result upon repeated measurements of the observable $\hat{O}$.

## 1.2.4 Uncertainty principle

In general operators do no commute, i.e.
$$ [\hat{A}, \hat{B}] = i\hat{C} $$ {eq:1.9}
so that for $\hat{C} \neq 0$, the operators $\hat{A}$ and $\hat{B}$ do not have the same eigenstates.

Heisenberg’s uncertainty principle states that for any two operators $\hat{A}$ and $\hat{B}$, we have
$$ \Delta A \cdot \Delta B \geq \frac{1}{2}\langle[\hat{A}, \hat{B}]\rangle $$ {eq:1.10}
where $\Delta A = \sqrt{\langle(\hat{A} - \langle\hat{A}\rangle)^2\rangle}$.

## 1.2.5 Time evolution: Schrodinger’s picture

In non-relativistic quantum mechanics, the dynamics of the system is described by Schrodinger’s equation: in Schrodinger’s picture the state vector describing the state of the system evolves in time, while the operators describing the observables corresponding to possible measurements on the system are stationary.

The state vector evolves in time according to
$$ i\hbar\frac{d}{dt}|\psi\rangle = \hat{H}|\psi\rangle $$ {eq:1.11}
where $\hat{H}$ is the Hamiltonian of the system. The stationary solutions of Schrodinger’s equation are given by $|E_n\rangle$ where $\hat{H}|E_n\rangle = E_n|E_n\rangle$. Any state can be expanded in the the basis of eigenstates of $\hat{H}$, and in that basis the time evolution of the state vector takes a particularly simple form, namely

<!-- page 10 -->
$$ |\psi(t)\rangle = \sum_n e^{-iE_nt/\hbar}c_n|E_n\rangle $$ {eq:1.12}
corresponding to the initial state $|\psi(0)\rangle$ with expansion coefficients $c_n = \langle E_n|\psi(0)\rangle$. In the basis of its eigenstates, the Hamiltonian is diagonal $\hat{H} = \sum_n |E_n\rangle E_n\langle E_n|$. The time evolution equation can also be formally integrated to yield the time evolved state $|\psi(t)\rangle = \exp[-i\hat{H}t/\hbar]|\psi(0)\rangle = \hat{U}(t)|\psi(0)\rangle$, where $\hat{U}(t)$ is the time evolution operator.

## 1.2.6 Time evolution: Heisenberg picture

In Heisenberg’s picture, the state vector describing the initial state of the system does not evolve in time, rather the observables describing possible measurements on the system at time $t$, depend explicitely on time and evolve according to Heisenberg’s equation of motion
$$ i\hbar\frac{d}{dt}\hat{O}(t) = [\hat{O}, \hat{H}] + i\hbar\frac{\partial\hat{O}}{\partial t}. $$ {eq:1.13}

<!-- notes
- 1.2.4 "do no commute": the book's typo, kept.
- 1.2.5 "in the the basis": the book's doubled word, kept.
- 1.2.6 "explicitely": the book's spelling, kept.
-->

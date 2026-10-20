# 3.2 System and environment

<!-- page 46 -->

The density operator formalism is well suited for treating a system composed of two parts when only one subsystem is relevant. For clarity, we will call the total system the universe, and its component parts are the system and the environment. The universe can be described by a quantum state $|\psi\rangle$, with the corresponding density operator $\hat{\rho} = |\psi\rangle\langle\psi|$, and in principle we can solve for the dynamics of the system by first finding how the universe evolves. Since we are really only interested in the system, we would like to find a more efficient description which does not require us to calculate precisely what happens to the environment degrees of freedom.

<!-- page 47 -->

We proceed by first expanding the total state vector in terms of a product basis $\{|n\rangle|e\rangle\}$ where $|n\rangle$ is a state of the system and $|e\rangle$ is a state of the environment, so that
$$ |\psi\rangle = \sum_{\{n,e\}}|n\rangle|e\rangle\langle n, e|\psi\rangle. $$ {eq:3.17}
Consider the expectation value in this state of an operator $\hat{S}$ which acts only on the system degrees of freedom,
$$ \langle\hat{S}\rangle = \sum_{n,e}\langle n, e|\hat{S}|\psi\rangle\langle\psi|n, e\rangle $$ {eq:3.18}
$$ = \sum_n\langle n|\hat{S}\,\underbrace{(\sum_e\langle e|\psi\rangle\langle\psi|e\rangle)}_{\hat{\rho}_S}|n\rangle $$ {eq:3.19}
$$ = \mathrm{Tr}_S[\hat{S}\hat{\rho}_S]. $$ {eq:3.20}
The subscript S (R) on the trace indicates that only the system (reservoir) states are included in the sum. The second line in the equation above is true because the operator $\hat{S}$ operates only on the system, and thus $\langle e|$ can be moved past $\hat{S}$. Eq. (3.20) states that the expectation value of a system operator can always be found in terms of a reduced density operator
$$ \hat{\rho}_S = \mathrm{Tr}_R[\hat{\rho}]. $$ {eq:3.21}
Note that $\hat{\rho}_S$ has all the properties of a density operator, and can be expressed as a probabilistic mixture of system states, $\hat{\rho}_S = \sum_\alpha p_\alpha|\psi_\alpha^S\rangle\langle\psi_\alpha^S|$. In general, however, $\hat{\rho}_S$ does not have to describe a pure state, and this reflects the fact that the system under consideration interacts with the environment, i.e. it is an open system.

<!-- notes
- The section's first paragraph is cut from the page-46 image; its words are taken from text-layer.md.
-->

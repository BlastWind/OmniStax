# 4.1 The slowly-varying envelope approximation

<!-- page 65 -->

We can rewrite the Maxwell equations (in the absence of unbound charges and currents) as a wave equation for $\mathbf{E}$:^[Using $\nabla \times (\nabla \times \mathbf{A}) = \nabla(\nabla \cdot \mathbf{A}) - \nabla^2\mathbf{A}$ and the curl of Eq. (4.5) we get $$ \nabla \times (\nabla \times \mathbf{E}) = \nabla(\nabla \cdot \mathcal{E}) - \nabla^2\mathbf{E} $$ {eq:4.7} $$ = -\frac{1}{c^2}\frac{\partial^2}{\partial t^2}\left(\mathbf{E} + \frac{1}{\epsilon_0}\mathbf{P}\right). $$ {eq:4.8} In the absence of unbound charges, $\nabla \cdot \mathbf{E} = 0$, so we obtain the wave equation $$ \nabla^2\mathbf{E} - \frac{1}{c^2}\frac{\partial^2}{\partial t^2}\mathbf{E} = \frac{1}{\epsilon_0 c^2}\frac{\partial^2}{\partial t^2}\mathbf{P}. $$ {eq:4.9}]
$$ \nabla^2\mathbf{E} - \frac{1}{c^2}\frac{\partial^2\mathbf{E}}{\partial t^2} = \frac{1}{\epsilon_0 c^2}\frac{\partial^2\mathbf{P}}{\partial t^2}. $$ {eq:4.10}

<!-- page 66 -->

The wave equation is second order in time and space, but application of the slowly varying envelope approximation can reduce it to first order. An electric field which is nearly monochromatic can be parameterized by an envelope function and its central frequency $\bar{\nu}$,
$$ \mathbf{E}(r, t) = \mathcal{E}(r, t)e^{i\bar{k}z - i\bar{\nu}t} + c.c., $$ {eq:4.11}
where $\mathcal{E}$ varies slowly in $z$ and $t$ compared to the optical frequency $\bar{\nu}$ and wavevector $\bar{k} = \bar{\nu}/c$. We also introduce a slowly varying polarization amplitude,
$$ \mathbf{P}(r, t) = \mathcal{P}(r, t)e^{i\bar{k}z - i\bar{\nu}t} + c.c. $$ {eq:4.12}
Substituting these expressions into Eq. (4.10) and keeping only the lowest order derivatives of the envelopes, we find the evolution equation for the slowly varying amplitudes,
$$ \frac{1}{2i\bar{k}}\nabla_\perp^2\mathcal{E} + \frac{\partial\mathcal{E}}{\partial z} + \frac{1}{c}\frac{\partial\mathcal{E}}{\partial t} = \frac{i\bar{k}}{2\epsilon_0}\mathcal{P} $$ {eq:4.13}

The derivation of Eq. (4.13) governing the slowly varying amplitudes is straightforward. Using the derivatives of the electric field and polarization:
$$ \nabla^2\mathbf{E} = \left(\nabla^2\mathcal{E} + 2i\bar{k}\frac{\partial}{\partial z}\mathcal{E} - \bar{k}^2\mathcal{E}\right)e^{i\bar{k}z - i\bar{\nu}t} + c.c. $$ {eq:4.14}
$$ \frac{\partial^2}{\partial t^2}\mathbf{E} = \left(\frac{\partial^2}{\partial t^2}\mathcal{E} - 2i\bar{\nu}\frac{\partial}{\partial t}\mathcal{E} - \bar{\nu}^2\mathcal{E}\right)e^{i\bar{k}z - i\bar{\nu}t} + c.c. $$ {eq:4.15}
$$ \frac{\partial^2}{\partial t^2}\mathbf{P} = \left(\frac{\partial^2}{\partial t^2}\mathcal{P} - 2i\bar{\nu}\frac{\partial}{\partial t}\mathcal{P} - \bar{\nu}^2\mathcal{P}\right)e^{i\bar{k}z - i\bar{\nu}t} + c.c. $$ {eq:4.16}
we substitute into the wave equation to find
$$ \nabla^2\mathcal{E} + 2i\bar{k}\frac{\partial}{\partial z}\mathcal{E} - \bar{k}^2\mathcal{E} - \frac{1}{c^2}\left(\frac{\partial^2}{\partial t^2}\mathcal{E} - 2i\bar{\nu}\frac{\partial}{\partial t}\mathcal{E} - \bar{\nu}^2\mathcal{E}\right) = $$ {eq:4.17}
$$ \frac{1}{\epsilon_0 c^2}\left(\frac{\partial^2}{\partial t^2}\mathcal{P} - 2i\bar{\nu}\frac{\partial}{\partial t}\mathcal{P} - \bar{\nu}^2\mathcal{P}\right). $$ {eq:4.18}

<!-- page 67 -->

Taking $\bar{\nu} = c\bar{k}$, and noting that in the slowly varying envelope approximation
$$ |\bar{\nu}\mathcal{P}| >> |\frac{\partial}{\partial t}\mathcal{P}| $$ {eq:4.19}
$$ |\bar{\nu}\mathcal{E}| >> |\frac{\partial}{\partial t}\mathcal{E}| $$ {eq:4.20}
$$ |\bar{k}\mathcal{E}| >> |\frac{\partial}{\partial z}\mathcal{E}|, $$ {eq:4.21}
$$ \, $$ {eq:4.22}
the relevant terms reduce to
$$ \nabla_\perp^2\mathcal{E} + 2i\bar{k}\frac{\partial}{\partial z}\mathcal{E} + \frac{1}{c^2}2i\bar{\nu}\frac{\partial}{\partial t}\mathcal{E} = -\frac{1}{\epsilon_0 c^2}\bar{\nu}^2\mathcal{P}, $$ {eq:4.23}
or
$$ \frac{1}{2i\bar{k}}\nabla_\perp^2\mathcal{E} + \frac{\partial}{\partial z}\mathcal{E} + \frac{1}{c}\frac{\partial}{\partial t}\mathcal{E} = \frac{i\bar{k}}{2\epsilon_0}\mathcal{P}. $$ {eq:4.24}

Two properties of this equation should be noted:

(1) In the first term, $\nabla_\perp^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2}$ leads to transverse effects such as focussing or diffraction which cannot in general be neglected. However, for a plane wave there is no transverse spatial variation so the first term vanishes and we obtain
$$ \frac{\partial}{\partial z}\mathcal{E} + \frac{1}{c}\frac{\partial}{\partial t}\mathcal{E} = \frac{i\bar{k}}{2\epsilon_0}\mathcal{P}. $$ {eq:4.25}

(2) The slowly varying polarization $\mathcal{P}$ is proportional to the positive-frequency component of the dipole operator in the rotating frame. For example, a two level atom leads to a polarization $\mathcal{P} = (N/V)\mu\rho_{21}(z)e^{-i\bar{k}z}$. (Note that $\rho_{21}(z)$ itself is driven by the local electric field, which contains a fast phase term $e^{i\bar{k}z}$ so that $\mathcal{P}$ is in fact slowly varying in space.)

### Generalizations of the SVEA

Our derivation of the slowly varying envelope approximation can be generalized to include multiple optical frequencies. To illustrate this idea, we will consider the example of atomic interactions with an optical frequency comb. This periodic train of short optical pulses can be represented in the Fourier domain by a comb of harmonics, so that the electric field may be written
$$ E = \sum_n\mathcal{E}_n(z, t)e^{inkz - i\nu_n t}. $$ {eq:4.26}
The spacing between harmonics $\nu_{n+1} - \nu_n$ determines the repetition rate of the pulses, while the bandwidth occupied by the set of harmonics determines

<!-- page 68 -->

the duration of each pulse. Provided that each harmonic has an envelope $\mathcal{E}_n(z, t)$ which varies slowly in space and time, we can use an extension of the SVEA. Defining the polarization harmonics by
$$ P = \sum_n\mathcal{P}_n(z, t)e^{inkz - i\nu_n t}, $$ {eq:4.27}
the propagation equation becomes a set of equations for each harmonic component
$$ \frac{1}{2i\bar{k}}\nabla_\perp^2\mathcal{E}_n + \frac{\partial}{\partial z}\mathcal{E}_n + \frac{1}{c}\frac{\partial}{\partial t}\mathcal{E}_n = \frac{i\bar{k}}{2\epsilon_0}\mathcal{P}_n. $$ {eq:4.28}
This treatment applies to arbitrarily short pulses, since there is no restriction on the number of harmonics included. Note, however, that in general the atomic response will act to couple different harmonics, i.e. $\mathcal{P}_n$ will depend on all components $\mathcal{E}_{n'}$, so the coupled Maxwell-Bloch equations may be quite complicated to solve.

<!-- notes
- The footnote on "wave equation for E:" runs from page 65 onto page 66; its three numbered displays (4.7)-(4.9) stay inside it, so checkprose reads the {eq:} markers there as added words ("eq eq", "eq"). Its two other complaints are those markers, not text.
- Eq. (4.22) is a number the book prints on an empty line under (4.19)-(4.21); its slot holds a blank display.
- The conditions (1)-(2) on page 67 are kept as the book's indented paragraphs. "focussing" as printed.
- Eq. (4.7): the book writes $\nabla(\nabla \cdot \mathcal{E})$ where $\nabla(\nabla \cdot \mathbf{E})$ is meant (the footnote then sets $\nabla \cdot \mathbf{E} = 0$). Kept as printed.
-->

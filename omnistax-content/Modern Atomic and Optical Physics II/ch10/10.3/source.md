# 10.3 Quantum state engineering

<!-- page 226 -->

We have seen how the internal and motional state of a trapped ion can be manipulated by applied lasers with a remarkable level of control. As a potential application for this system, one might inquire whether these these techniques permit one to engineer an arbitrary motional state
$$ |\psi\rangle = |g\rangle \otimes \sum_{n=0}^{\infty} c_n|n\rangle. $$ {eq:10.27}
While the coefficients $c_n$ are in principle arbitrary, they could correspond to a variety of interesting or useful quantum states such as Fock states, coherent states, squeezed states, or Schrodinger cat states. The ability to engineer such quantum states is crucial to developing quantum gates based on an ion trap architecture.

## 10.3.1 Preparation of an arbitrary motional quantum state

Suppose that we start out with the system in an initial state $|i\rangle$, and we would like to end up in a state $|f\rangle$. Using laser pulses tuned to the bare and sideband transitions, we hope to find a series of unitary transformations linking these two states

<!-- page 227 -->

$$ |f\rangle = U_N U_{N-1}\ldots U_2 U_1|i\rangle. $$ {eq:10.28}

### Two simple examples

For example, if the ion started out in the ground state $|i\rangle = |g\rangle \otimes |0\rangle$, and we wanted to end up with the ion in state $|f\rangle = (\alpha|g\rangle + \beta|e\rangle) \otimes |0\rangle$, we need only apply a laser pulse at the bare resonance frequency for an appropriate time.

A slightly more complicated transformation involves swapping information between the internal and external degrees of freedom
$$ |i\rangle = (\alpha|g\rangle + \beta|e\rangle) \otimes |0\rangle $$ {eq:10.29}
$$ |f\rangle = |g\rangle \otimes (\alpha|0\rangle + \beta|1\rangle). $$ {eq:10.30}
This transformation can be implemented by tuning the laser to the red sideband and applying a $\pi$ pulse.

### Procedure

Ultimately, we would like to be able to prepare an arbitrary motional quantum state from, for example, the ground state $|i\rangle = |g\rangle \otimes |0\rangle$. If our desired final state is $|f\rangle = |\psi\rangle$ (where the coefficients $c_n$ are specified), we claim that it is possible to find a series of unitary transformations linking $|i\rangle$ and $|f\rangle$. To prove this statement, it is convenient to work backwards. Since unitary transformations are invertible, if we can show how to start in $|f\rangle$ and end up in $|i\rangle$, then the inverse transformation will accomplish the desired task.

Suppose that our initial state has coefficients satisfying $c_n = 0$ for all $n > N$, where $N$ is arbitrary but finite. Our procedure works by systematically emptying population from the $N^{th}$ rung of the harmonic oscillator, then iterating until the entire ionic population is in the ground state. The required steps are:

(1) Apply the laser on the red sideband, coupling $|g\rangle|N\rangle \rightarrow |e\rangle|N-1\rangle$. Using our knowledge of the $c_n$, we can apply the laser for the appropriate time to implement a $\pi$-pulse, emptying the population amplitude of $|g\rangle|N\rangle$ into the initially empty state $|e\rangle|N-1\rangle$.

(2) Apply the laser on the bare atomic frequency. From the specified $c_n$ we can again determine the pulse length which will empty $|e\rangle|N-1\rangle$ into $|g\rangle|N-1\rangle$.

(3) Repeat steps (1) and (2) until the entire population is in the ground

<!-- page 228 -->

state.

The inverse of this procedure can then be used to construct an arbitrary motional quantum state.

<!-- notes
- "whether these these techniques": the doubled word is the book's, kept.
- "Schrodinger" without the umlaut, as printed.
- The steps "(1)", "(2)", "(3)" are printed as indented numbered paragraphs, kept with the book's numbers.
- Step (3) breaks across pages 227-228 ("until the entire population is in the ground" / "state."); the page-228 marker sits before "state." where the page begins, splitting the sentence into two blocks.
- The final sentence "The inverse of this procedure …" is printed unindented, as if continuing; set as its own paragraph.
- Step (1): a red-sideband pulse that is a $\pi$-pulse for $|g\rangle|N\rangle \leftrightarrow |e\rangle|N-1\rangle$ also rotates the lower pairs $|g\rangle|n\rangle \leftrightarrow |e\rangle|n-1\rangle$ at their own Rabi frequencies $\eta\Omega\sqrt{n}$, and after step (2) $|e\rangle|N-1\rangle$ no longer starts empty on later rounds; the "Using our knowledge of the $c_n$" clause signals that the pulse areas (and phases) must in general be chosen from the full state, not a fixed $\pi$-pulse (the Law-Eberly procedure). As printed the claim that a $\pi$-pulse empties $|g\rangle|N\rangle$ into an "initially empty" $|e\rangle|N-1\rangle$ holds only on the first round.
- Step (2): to empty $|e\rangle|N-1\rangle$ into $|g\rangle|N-1\rangle$ with a carrier pulse, the pulse's phase as well as its length must be chosen, since $|g\rangle|N-1\rangle$ already holds amplitude.
-->

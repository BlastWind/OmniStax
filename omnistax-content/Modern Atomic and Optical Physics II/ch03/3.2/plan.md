# Plan: 3.2 System and environment

Source: `source.md` (PDF pages 46–47, Eqs. 3.17–3.21, no figures, footnotes, run-in headings or invitations). Planned and built in one go (config: no stops); this plan is left for review after.

## Blocks

One block, `system-and-environment`, no `<h2>` (config: 3.2 has no numbered subsections or run-ins, and the book marks no boundary inside its three paragraphs). Every numbered display is `<div class="equation" id="eq-3-K">` with `\tag{3.K}`; Eqs. 3.18–3.20 are the book's three numbered lines of one display, kept as three divs whose second and third open with "=" (as 3.1's 3.3–3.5), the under-brace naming ρ̂_S kept as `\underbrace`. "Eq. (3.20)" links to `eq-3-20`; "the equation above" and "the second line" stay plain.

## Concepts (2, prep-merged)

| concept | introducing span | uses |
|---|---|---|
| open-system | `universe` ("For clarity, we will call the total system the universe, and its component parts are the system and the environment."); `open` (the closing "i.e. it is an open system") reinforces | density-operator, state-vector (`universe`) |
| reduced-density-operator | `reduced` ("Eq. (3.20) states … reduced density operator") | expectation-value, density-operator-expectation (`reduced`), density-operator (`eq-3-21`), density-operator-properties, pure-and-mixed-states (`open`) |

The intro page quotes “environment” and “reservoir” first but carries no coverage, so open-system is introduced here (prep's call). Form anchors set and merged: `eq-3-21` → `3.2-eq-3-21`, `eq-3-20` → `3.2-eq-3-20`.

Concept spans, judged per mention: "universe" (three times) and every "environment" and "reservoir" (in "(reservoir) states") → open-system, the book's own terms for the parts of the universe; "open system" → open-system; "density operator formalism", "the corresponding density operator" → density-operator; "a quantum state |ψ⟩", "total state vector" → state-vector; "expectation value" (twice) → expectation-value; "reduced density operator" → reduced-density-operator; "all the properties of a density operator" → density-operator-properties; "pure state" → pure-and-mixed-states. Bare: every "system" and "subsystem" (the open-system concept's word is "open system", and "the system" alone is the everyday word), "product basis", "degrees of freedom", "probabilistic mixture of system states" (the book's paraphrase of Eq. 3.1, not the quoted “statistical mixture”, which in 3.1 means a diagonal ρ̂).

## Symbols and variables

`ost meanings` run for each. Rows added to `chapter.json` (chapter 3), section 3.2:

| sym | concept | type | meaning | anchor | note |
|---|---|---|---|---|---|
| rho_S | reduced-density-operator | (state) | The reduced density operator of the system | 3.2-eq-3-21 | 6.1's meaning reused |
| rho_hat | density-operator | (state) | The density operator of the universe, the system and its environment together | 3.2-universe | `redefines`: 3.1's ρ̂ is "the density operator of the system", here the whole universe's |
| psi | state-vector | (state) | The state vector of the universe, the system and its environment together | 3.2-eq-3-17 | `redefines`: everywhere else the system's state |
| S_hat | none | untyped | A system observable | 3.2-eq-3-18 | 3.1's meaning (its plan), reused |

Ink, no macro: the basis kets |n⟩, |e⟩, ⟨n, e|, p_α, Tr_S, Tr_R. |ψ_α^S⟩ uses `\kpsi` with its indices, as 3.1 writes |ψ_α⟩.

## Referents

None: |n⟩ and |e⟩ are generic basis states, and no figure draws a particular level.

## Figures

The book draws none, and config expects none.

### Extra sims (root 15), not built

- Tracing out the environment: a system two-level atom entangled with a two-state environment, |ψ⟩ = cos(θ/2)|1⟩|e₁⟩ + sin(θ/2)|2⟩|e₂⟩, a slider on the overlap ⟨e₁|e₂⟩ from 1 to 0; the reader sees ρ̂_S's Bloch vector shrink from the sphere's surface to its axis as the environment records which level the system is in, |ρ₁₂| = ½ sin θ |⟨e₁|e₂⟩| against ρ₁₁ρ₂₂ in the readout. Value add: variation, the mixedness of Eq. (3.21) that the text only asserts ("does not have to describe a pure state"); it would sit better beside 3.4's Bloch-vector Sim as one of its states than as a second sphere here, so the chapter pass decides.

## Exercises

None (config: the section prints no invitation; neither MIT problem of Chapter 3 maps here).

## Corrections and footnotes

None: the book prints no footnote here, and the equations and prose were checked against the page images (3.18–3.20 are right as printed). The first paragraph's words come from the text layer (transcript note), checked against page 46.

## Lead draft (AI-marked)

> A system that is one part of a larger universe, the rest of which is its environment: how the expectation value of an operator acting on the system alone is found from a reduced density operator, the trace of the universe’s density operator over the environment, and why that operator need not describe a pure state when the system is open.

## Objectives, summary, notes

`objectives`, `summary_html` empty (config); `notes` empty: nothing left out. `ai`: text claude-opus-5-5 · high; figures empty.

## Wanted at chapter level

- If 3.1's agent words its rho_hat or S_hat rows differently from its plan, the 3.2 rows above follow (S_hat should read the same; rho_hat keeps its `redefines`).
- The extra sim above, if picked, belongs with 3.4's Sim.

Chapter pass (2026-10-11): S_hat, H_SR, rho_tilde, tau_c in 3.4 now read as 3.3 (3.4 S_hat no longer `redefines`; 3.3 keeps it against 3.1–3.2); rho_hat and psi keep `redefines` in 3.2 and 3.3; f_t keeps latex `f`; extra sims not picked; 3.4 carries `c-eq-3-84`, the Ω sign convention against 2.1.

## Derivations

- 3.2 reduced density operator, (3.18)–(3.21) · score 1 · built as drv-reduced-density-operator ((3.20) and (3.21)); the "second line" sentence becomes a fact, the citation of (3.20) opens the derivation

# Plan: 4.7 One-dimensional wave equation (we:section)

Source: `source.md`. Status: plan (prep stage one, 2026-10-19); built straight through per config 2. Template: `ch00/0.2`, `ch01/1.9`, and this book's 4.6 for the separation page. Section notes dropped and named in `notes`.

No book subsection but Exercises, Example 4.7.1 (the plucked string), Theorem 4.7.1, equations (4.11)–(4.14), Figures 4.20–4.23 (4.20 the guitar sketch, 4.21 a plot, 4.22 a surface, 4.23 two images of four slices), no footnote, inline Exercises 4.7.1–4.7.2, end Exercises 4.7.3–4.7.8 and 4.7.101–4.7.104 (ten, four keyed).

## Sub-concepts (page headers)

The book prints none; three headers are OmniStax's:
- `the-string` **The vibrating string**: the opening through the side conditions (`sim-plucked-string` at Figure 4.20's place, `p#wave-equation` with `eq-wave` boxed, `p#side-conditions` with `eq-wave-problem`'s pieces).
- `two-problems` **Two problems and their sum**: `p#splitting`, `eq-4-11`, `eq-4-12`, `p#sum`, `eq-4-13`, `p#why-split`, `drv-separation-wave` in place of the display chain for (4.11), Try It 4.7.1, the z problem's displays kept as printed, Try It 4.7.2, Theorem 4.7.1 as `thm-4-7-1` with `eq-4-14` and the boxed `eq-wave-series-solution`, Example 4.7.1 (Figures 4.21–4.23 cite the fold).
- `timbre` **Frequencies and timbre**: `p#guitar-sound`, `p#wave-speed` with `eq-wave-speed`, `p#space-time`, `p#any-timbre`.

## Concepts

Introduced: `wave-equation` (definition; form `eq-wave`) at `p#wave-equation`; `wave-equation-side-conditions` (definition; form `eq-wave-problem`) at `p#side-conditions`; `splitting-the-wave-problem` (skill; forms `eq-wave-w-problem`, `eq-wave-z-problem` at (4.11), (4.12)) at `p#splitting`; `wave-equation-series-solution` (result, Theorem 4.7.1; forms `eq-wave-series-solution`, `eq-wave-separated`, `eq-wave-building-blocks`) at `thm-4-7-1`; `timbre` (definition) at `p#guitar-sound`; `wave-speed-of-a-string` (result; form `eq-wave-speed`) at `p#wave-speed`; `space-time-symmetry-of-the-wave-solution` (idea) at `p#space-time`.
Reinforced: `classes-of-second-order-pdes` (hyperbolic), `heat-equation`, `superposition-for-pdes`, `separation-of-variables-for-pdes`, `separated-heat-equations`, `side-conditions` (4.6), `sine-series` (4.4), `fundamental-frequency`, `overtones`, `spectrum`, `decay-of-fourier-coefficients` (4.2–4.3), `solution-for-complex-conjugate-roots` (2.2, the T equation), `eigenvalues-with-zero-endpoint-values` (4.1).

## Colour and symbols

y, w, z, w_n, z_n, X, T, X_n, T_n, f, g `function` (\ky, \kw, \kz, \kwn, \kzn, \kX, \kT, \kXn, \kTn, \kf, \kg); y_tt, y_xx, y_t, X″, T″, ∂w_n/∂t `derivative` (\kytt, \kyxx, \kyt, \kXdprime, \kTdprime; the partial of w_n plain); λ, λ_n `eigenvalue`; b_n, c_n `sequence`; the frequencies nπa/L and the fundamental πa/L `frequency`; the series `series`; the region 0 < x < L, t > 0 `region`. Ink: x, t, L, a, A, B, n, m, T (tension), ρ. No referents.

## Figures

- `sim-plucked-string` · Figure 4.20 + 4.21 + 4.22 + 4.23 (originals `sps-vibstr.svg`, `wave-pluckedstr.svg`, `wave-pluckedex.svg` width 720, `wave-plucked-t0-t0p4.svg`, `wave-plucked-t0p8-t1p2.svg`) · `wave-equation`, `wave-equation-side-conditions`, `wave-equation-series-solution`, `timbre`, `wave-speed-of-a-string`, `fundamental-frequency`, `overtones` · value add: flow by animation and variation: the string on its guitar (`F.guitar` and `F.guitar.string`, the sketch of Figure 4.20) moving in time under Example 4.7.1's numbers (L = 2, a = 1, the triangle of height 0.1 plucked in the middle, drawn with its height exaggerated ×5 and the factor stated in the readout, rule 28.4); the shape at the book's t = 0, 0.4, 0.8, 1.2 is what the transport reaches (the plateau forming, the inversion), so Figure 4.23 is four frames and 4.22 the history; beside the string the spectrum, bars |c_n| at nπa/L on a frequency axis, the fundamental marked; a choice of how the string starts (plucked at a point, default the middle; struck from rest with y_t = −1, Exercise 4.7.6's dropped instrument), the pluck position p on a slider (0.1 to 0.9 of L, step 0.05, default 0.5: plucking near the bridge sharpens the spectrum, the text's sawtooth remark) and a on a slider (0.5 to 3, step 0.05, default 1: the frequencies scale with a, the tuning peg) · arrows: kinematic (the string's motion) · moving: one period 2L/a of t a loop (4 s at the default) · choice (start), sliders p, a (untyped) · headline "t = 0.40: the top of the pluck has flattened into a plateau from x = 0.6 to 1.4; the fundamental is πa/L = 1.57." · scene above (the string, drawn 2 wide), the spectrum beside it · 2D. Readout: y(x, t) = Σ (0.8/(n²π²)) sin(nπ/2) sin(nπx/2) cos(nπt/2) with the first two terms live and "height ×5".

Book images: the five are originals of the fold. Extra Sims weighed and left out: a 3D surface y(x, t) (Figure 4.22) beside the string: the book rule adds it only where the shape over the (x, t) plane teaches what the motion does not; the pyramid of 4.22 is the four frames of 4.23 stacked, and 4.8's d'Alembert figure explains the shape with its two waves, so the surface is left out (decision for Chen); a sound of the string (no audio); the mode shapes as a choice (the spectrum bars and the pluck slider carry which modes appear; a "mode 3 only" start is not a plucked string).

## Derivations (rule 29)

- Separation for (4.11), from "We try w = X(x)T(t)" through the series for w · printed as equations with words · built as `drv-separation-wave` (eyebrow "Derivation · the wave equation"): facts: the wave equation, the guess XT, the end conditions, the eigenvalues of 4.1, the general solution of T″ + λ_n a²T = 0 (2.2), the condition T(0) = 0, the choice B = L/(nπa), superposition, the sine series of g; nodes: the separated equations, X_n, T_n, w_n and its t-derivative at 0, the series; then a short second branch for z (T′(0) = 0, so B = 0, z_n, the series) and the sum y = w + z as the theorem's form, so the title reads "Derivations · the wave equation" and ends in Theorem 4.7.1's result. Try It 4.7.1 hangs after w's series; Try It 4.7.2 after z's.
- Example 4.7.1's sine series "left to the reader" · a worked integral (c_n = 0.8 sin(nπ/2)/(n²π²)) · not built; the figure's readout carries it.
- a = √(T/ρ) · stated · nothing to build.

## Exercises

- Try It 4.7.1 (inline after w's series): w(x, 0) = 0 since sin(0) = 0 in every term; w_t(x, 0) = Σ b_n sin(nπx/L) cos 0 = g(x). Try It 4.7.2 (inline after z's series): T′(0) = 0 kills the sine, z_n(x, 0) = sin(nπx/L) so z(x, 0) = f, z_t(x, 0) = 0, the ends vanish; checked by substitution.
- End, unkeyed (AI-marked, checked with SymPy): 4.7.3 y = sin(3πx) cos(9πt) + (1/4) sin(6πx) cos(18πt); 4.7.4 y = sin(3πx) cos(6πt) + (1/4) sin(6πx) cos(12πt) + sin(9πx) sin(18πt)/(18π); 4.7.5 c_n = 8b sin(nπ/2)/(n²π²), y = Σ c_n sin(nπx/L) cos(nπat/L); 4.7.6 b_n = 2((−1)ⁿ − 1)/(nπ) = −4/(nπ) for odd n, y = Σ_{odd} −4/(n²π²) sin(nπx) sin(nπt); 4.7.7 T″ + kT′ + n²π²a²T = 0 with T(0) = 1, T′(0) = 0: T_n = e^{−kt/2}(cos ω_n t + (k/(2ω_n)) sin ω_n t), ω_n = √(n²π²a² − k²/4) (real since k < 2πa), y = Σ c_n sin(nπx) T_n(t) with c_n = 2∫₀¹ f(x) sin(nπx) dx; 4.7.8 only the even multiples 2πa/L, 4πa/L, … (sin(nπ/2) = 0 needs n even).
- Keyed 4.7.101–4.7.104 with the book's answers, each checked: 4.7.101 sin x (sin t + cos t) ✓; 4.7.102 ✓ (b₁ = 1, b₂ = 0.1, L/(nπa) = 2/(5nπ)); 4.7.103 ✓ (c_n = 2(−1)^{n+1}/n, frequencies n√2); 4.7.104 sin 2x + t sin x ✓ (T″ = 0). Shapes: `open`.

## Wanted at chapter level

- Anchors: variables y, y_tt, y_xx → `4.7-wave-equation`; y_t, f, g → `4.7-side-conditions`; w, z → `4.7-splitting`; X, T, T″, λ_n, X_n, T_n, w_n → `4.7-drv-separation-wave`; z_n, b_n, c_n → `4.7-thm-4-7-1`. Forms: `eq-wave` → `4.7-wave-equation`; `eq-wave-problem` → `4.7-eq-4-13`; `eq-wave-w-problem` → `4.7-eq-4-11`; `eq-wave-z-problem` → `4.7-eq-4-12`; `eq-wave-separated`, `eq-wave-building-blocks` → `4.7-drv-separation-wave`; `eq-wave-series-solution` → `4.7-thm-4-7-1`; `eq-wave-speed` → `4.7-wave-speed`.
- The symbol w is Chapter 2's (2.1's w = y_p − ỹ_p, \kw), redefined here.

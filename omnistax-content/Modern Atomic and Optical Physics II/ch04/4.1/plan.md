# Plan: 4.1 The slowly-varying envelope approximation

Source: `source.md` (PDF pages 65–68, Eqs. 4.7–4.28, footnote 1 carrying Eqs. 4.7–4.9, no figures, no exercises). Planned and built in one go (config: Chen approved building without stopping); this plan is left for review after.

## Blocks

No numbered subsection (config): the opening block, then the one run-in heading as an `<h2>`.

| id | `<h2>` | holds |
|---|---|---|
| `opening` | none | the wave equation (4.10) and footnote 1, the envelope and carrier (4.11)–(4.12), the propagation equation (4.13) and its derivation (4.14)–(4.24), the two properties (1)–(2) with (4.25) |
| `generalizations` | Generalizations of the SVEA | the frequency comb (4.26)–(4.28) |

Every numbered display is `<div class="equation" id="eq-4-K">` with `\tag{4.K}`. Eqs. (4.17)–(4.18) are one equation the book breaks over two numbered lines: two displays, the first ending on "=". (4.19)–(4.22) are four displays; (4.22) is the book's number on an empty line, kept as a blank display `$$\,\tag{4.22}$$`. Inequalities keep the book's `>>`. Properties (1) and (2) are the book's paragraphs. Citations of (4.10) and (4.13) link to their equations.

Footnote 1 is a `book` row (`footnote-1`), marker after "a wave equation for 𝐄:", its html the book's words with (4.7)–(4.9) as `div.equation` displays inside it. Its "the curl of Eq. (4.5)" stays plain: (4.5) is on the chapter's intro page and a footnote's html is not id-qualified by the build.

## Concepts (10, prep-merged)

The intro page carries no coverage (root 21), so its three concepts are introduced here at their first mention in 4.1.

| concept | introducing span |
|---|---|
| maxwell-equations-with-polarization | `maxwell` ("the Maxwell equations") |
| wave-equation-with-polarization | `wave-equation` ("a wave equation for 𝐄") |
| macroscopic-polarization | `eq-4-10` (𝐏, the source of the wave equation) |
| slowly-varying-envelope-approximation | `svea` ("the slowly varying envelope approximation") |
| slowly-varying-polarization | `sv-polarization` ("a slowly varying polarization amplitude") |
| svea-propagation-equation | `evolution-equation` ("the evolution equation for the slowly varying amplitudes") |
| plane-wave-propagation-equation | `eq-4-25` |
| independent-atoms | `two-level-polarization` (property (2): 𝒫 = (N/V)μρ₂₁, every atom with the single-atom coherence) |
| optical-frequency-comb | `comb` ("an optical frequency comb") |
| multimode-svea | `multimode` ("an extension of the SVEA") |

`uses` rows: slowly-varying-envelope at `envelope`; optical-frequency at `carrier`; two-level-atom, rotating-frame and dipole-matrix-element at `two-level-polarization`. Form anchors set with `ost set`: eq-4-10 … eq-4-28 → `4.1-eq-4-K` (the intro's eq-4-1 … eq-4-6 wait for the chapter pass).

Spans, judged per mention: every "wave equation" naming (4.10)/(4.9) wears `wave-equation-with-polarization`, the footnote's included; "slowly varying envelope approximation" `slowly-varying-envelope-approximation` (not in the heading); "envelope function" and "an envelope 𝓔ₙ(z, t)" `slowly-varying-envelope`; "the optical frequency ν̄" `optical-frequency`; "slowly varying polarization" `slowly-varying-polarization`; "polarization" of "the electric field and polarization" `macroscopic-polarization`; "a two level atom" `two-level-atom`; "the rotating frame" `rotating-frame`; "a comb of harmonics" `optical-frequency-comb`; "the propagation equation" (4.28's) `svea-propagation-equation`; "the coupled Maxwell-Bloch equations" `multimode-svea` (prep put the term there). Plain: "slowly varying amplitudes" in "governing the slowly varying amplitudes" (both envelopes, and `rotating-frame`'s term in another sense), "envelopes", "dipole operator", "local electric field", "plane wave", headings.

## Symbols and variables

`ost meanings` run for each. 4.1 rows: P_pol → macroscopic-polarization (anchor `4.1-eq-4-10`); P_env → slowly-varying-polarization (`4.1-sv-polarization`); E_env → slowly-varying-envelope, the envelope of the propagating field (`4.1-envelope`); E_field typed electric-field, the field propagating through the medium (same quantity as 2.1's, no `redefines`); nu_bar typed frequency, the central frequency (`4.1-envelope`); k_bar typed wavevector, k̄ = ν̄/c (`4.1-carrier`); nu → optical-frequency, the harmonic frequencies νₙ (`4.1-comb`); t, mu, V (the volume holding the N atoms). The unbold E and P of (4.26)–(4.27), the comb's plain k, c, r, z, N and ρ₂₁ stay ink (the book's glyphs, or Chapter 3's).

## Figures

None in the book. Extra sim (root 15), not built: a comb's pulse train beside its spectrum, sliders for the harmonic spacing and the number of harmonics: the reader sees the spacing set the repetition rate and the bandwidth set the pulse length, which the text states in words. It illustrates Fourier pairs more than this section's propagation equation, so it is offered only.

## Exercises

None (config: no MIT 8.422 problem maps to Chapter 4; the section prints no invitation).

## Lead draft (AI-marked)

> How light propagating through a medium of atoms is described: the wave equation with the atoms' polarization as its source, and the slowly-varying envelope approximation, which writes the field and polarization as envelopes on a carrier and gives a propagation equation for the envelope, for a single carrier and for the harmonics of an optical frequency comb.

## Objectives, summary, notes

Empty (book RULES). `notes` empty: nothing is left out.

## Book faults kept verbatim

- "focussing" (config).
- (4.26)–(4.27) write the harmonics' spatial phase e^{inkz} with a k the notes never define; with νₙ = nck it is the n-th harmonic's own wavevector, so no correction, only the one on (4.28) below.
- The footnote's ∇·𝐄 = 0 "in the absence of unbound charges" is the usual transverse-field assumption, not a misprint.

## Corrections

| # | id · attaches to | the book prints | meant |
|---|---|---|---|
| 1 | `c-eq-4-7` · after footnote 1's marker | (4.7) ∇(∇·𝓔), the envelope | ∇(∇·𝐄), which the footnote then sets to zero |
| 2 | `c-eq-4-22` · `eq-4-22` | the number (4.22) on an empty line | no equation is missing |
| 3 | `c-eq-4-28` · `eq-4-28` | k̄ in both coefficients for every harmonic | kₙ = νₙ/c (nk in (4.26)'s notation); with k̄ it holds only while the bandwidth is small beside ν̄, which contradicts "arbitrarily short pulses" |

Correction 1's marker belongs inside footnote 1 after (4.7), but the build places markers only in the text and the summary, so it stands after the footnote's marker in the text.

## Wanted at chapter level

- A correction marker inside a book footnote's html (the app fills markers only in `text.html` and `summary_html`); then `c-eq-4-7` moves after (4.7) in footnote 1.
- A footnote's html is not id-qualified: an in-page `href="#eq-…"` inside one (2.1's footnote 1 links `#eq-2-10`) misses the qualified id `2.1-eq-2-10`. Footnote 1 here links nothing.
- "Eq. (4.5)" in footnote 1 and the intro's equations: a cross-page citation convention to the chapter's intro page.
- Chapter 3: ρ₂₁ in property (2) wants its macro and span (coherence / density matrix), and `independent-atoms` its edge to Chapter 3's density-matrix concept (prep). The intro's three concepts are introduced in 4.1 because an intro page carries no coverage; if the app grows intro coverage they move there.
- "Maxwell-Bloch equations" are a term of `multimode-svea` (prep); once Chapter 3's optical Bloch equations concept is merged, a reviewer may prefer a concept of their own.

## Derivations

- ch04 intro → 4.1 opening, the wave equation (4.5)–(4.10) · score 6 · built as drv-wave-equation: the notes print the work in footnote 1, (4.7)–(4.9), whose result is (4.10); the derivation stands in place of (4.10) and carries the footnote whole, so footnote-1 and its marker are gone; c-eq-4-7 moves into the node note
- 4.1 the slowly-varying envelope equation (4.11)–(4.25) · score 0 (printed block) · built as drv-svea-propagation: (4.14)–(4.16) as three nodes, the substitution (4.17)–(4.18), the reduction (4.23) and (4.13) = (4.24); the definitions (4.11), (4.12) stay in the text and the SVEA conditions (4.19)–(4.21) become fact cards; the empty (4.22) and its correction c-eq-4-22 go with the block. (4.25), the plane-wave case, is one move after the book's own prose: not built

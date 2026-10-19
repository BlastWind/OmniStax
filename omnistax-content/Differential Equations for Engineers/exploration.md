# Exploration: Notes on Diffy Qs, the full-book pass

Written 2026-10-19, before any section was converted for building. The
source of record is the LaTeX at `source/diffyqs/` (a clone of
github.com/jirilebl/diffyqs, edition 6, version 6.11 at git 658bcae,
2026-07-12; the master file already says 6.11), gitignored and read-only.
No PDF is needed: every piece of apparatus is in the `.tex`, and the
answers are collected from the exercises by a TeX box.

What was read: `diffyqs.tex` and `diffyqssetup.sty` in full; the
Introduction chapter in full; the opening, the examples and the exercise
blocks of every section of Chapters 1–8 and Appendix A, the theorems and
the figure environments throughout, Appendix B whole. Proofs and the long
runs of exercises were skimmed. The counts below come from a script over
the `.tex` files.

## The organising units

book → chapters (an unnumbered Introduction, 1–8) and appendices (A, B) →
sections (N.M, 53 in Chapters 0–8, and A.1–A.6) → `\subsection`s (one level, the
last always "Exercises") → examples, theorems and remarks. `\section` is
one section; the Introduction is `\chapter*` but its sections print as
0.1–0.3, so it is Chapter 0 here. There is no chapter introduction: a
chapter opens directly on its first `\section`. There is no chapter
summary and no closing summary; the book ends on Further Reading (a
bibliography), the Solutions to Selected Exercises and the Index.

| Id | Chapter | File | Sections |
|---|---|---|---|
| ch00 | Introduction | ch-intro.tex | 3 |
| ch01 | First-order equations | ch-first-order-ode.tex | 9 |
| ch02 | Higher-order linear ODEs | ch-higher-order-ode.tex | 6 |
| ch03 | Systems of ODEs | ch-systems.tex | 9 |
| ch04 | Fourier series and PDEs | ch-fourier-and-pde.tex | 10 |
| ch05 | More on eigenvalue problems | ch-eigenvalue-probs.tex | 3 |
| ch06 | The Laplace transform | ch-laplace.tex | 5 |
| ch07 | Power-series methods | ch-power-ser.tex | 3 |
| ch08 | Nonlinear systems | ch-nonlin-systems.tex | 5 |
| appA | Appendix A: Linear algebra | ap-linear-algebra.tex | 6 |
| — | Appendix B: Table of Laplace Transforms | ap-laplace-list.tex | 0 (two tables) |

The order is `diffyqs.tex`'s `\input` order, confirmed. The Introduction's
own 0.1, "Notes about these notes", is written to the instructor
(organisation, a chapter-dependency diagram, typical courses, computer
resources, acknowledgments); 0.2 and 0.3 are the first lessons.

## Provenance

A section is traced by its file and its `\label`, which every section
carries on the line after `\section{…}`:

| Section | Label | Section | Label | Section | Label |
|---|---|---|---|---|---|
| 0.1 | notes:section | 3.1 | sec:introtosys | 5.3 | sps:section |
| 0.2 | introde:section | 3.2 | sec:matrix | 6.1 | laplace:section |
| 0.3 | classification:section | 3.3 | linsystems:section | 6.2 | transformsofders:section |
| 1.1 | integralsols:section | 3.4 | eigenmethod:section | 6.3 | convolution:section |
| 1.2 | slopefields:section | 3.5 | sec:twodimaut | 6.4 | diracdelta:section |
| 1.3 | separable:section | 3.6 | sol:section | 6.5 | laplacepde:section |
| 1.4 | intfactor:section | 3.7 | sec:multeigen | 7.1 | powerseries:section |
| 1.5 | substitution:section | 3.8 | sec:matexp | 7.2 | seriessols:section |
| 1.6 | auteq:section | 3.9 | nonhomogsys:section | 7.3 | frobenius:section |
| 1.7 | numer:section | 4.1 | bvp:section | 8.1 | linearization:section |
| 1.8 | exact:section | 4.2 | ts:section | 8.2 | nlinstability:section |
| 1.9 | fopde:section | 4.3 | moreonfourier:section | 8.3 | nlinapps:section |
| 2.1 | solinear:section | 4.4 | sec:scs | 8.4 | limitcycles:section |
| 2.2 | sec:ccsol | 4.5 | appoffourier:section | 8.5 | sec:chaos |
| 2.3 | sec:hol | 4.6 | heateq:section | A.1 | vecsandmaps:section |
| 2.4 | sec:mv | 4.7 | we:section | A.2 | matalg:section |
| 2.5 | sec:nonhom | 4.8 | dalemb:section | A.3 | elim:section |
| 2.6 | forcedo:section | 4.9 | dirich:section | A.4 | subspaces:section |
| | | 4.10 | dirichdisc:section | A.5 | innerproduct:section |
| | | 5.1 | slproblems:section | A.6 | det:section |
| | | 5.2 | sec:appeig | B | laplacelist:appendix |

The label is the section's `module` in `chapter.json`. The publisher's
pages are the HTML edition at `https://www.jirka.org/diffyqs/html/`, named
by PreTeXt from these labels (`%mbx` comments in the source drive that
conversion); since that naming is the converter's, `slug` is left empty
until it is confirmed, and `source_url` names the book's home page. Every
cross-reference is `\ref`, `\eqref` or a `\…ref` macro on a label, so it
resolves to a link with the book's own number.

## Numbering

`book` class. Sections, theorems, examples, remarks and exercises number
within the section: Theorem 1.2.1, Example 2.4.3, Remark 6.4.1,
Exercise 0.2.7. Figures, tables and numbered equations number within the
chapter: Figure 1.3, Table 6.1, equation (4.12); the Introduction's are
0.x. Equations are numbered sparsely (`equation` 73 times against 1577
`equation*`), so the numbers that exist are the ones the prose cites.
Footnotes are marked by symbols (∗, †), restarting per page.

## Where the apparatus sits

Everything is inline in the section; nothing is aggregated per chapter
except the answers, which TeX collects into the back of the book.

- **Section notes**: `\sectionnotes{…}` under each heading, "1 lecture,
  §1.2 in [EP], §1.2 in [BD]", "can safely be skipped". It is instructor
  apparatus: lecture counts and cross-references to Edwards–Penney and
  Boyce–DiPrima.
- **Defined terms**: `\emph{\myindex{…}}` in running prose (403), and
  `\emph{…}\index{…}` where the indexed form differs (195 `\index`). There
  is no glossary and no definition box: a term is defined in the sentence
  that italicises it. The Index is the nearest thing to a glossary.
- **Theorems**: `theorem` (48), usually named in brackets ("Picard's
  theorem on existence and uniqueness", "Poincaré Lemma", "Superposition").
  Proofs are rare and informal, written as prose after the theorem; there
  is no `proof` environment. Most theorems are stated, used and justified
  "by the reader" or by a citation.
- **Examples**: `example` (160), numbered N.M.k, sometimes named. An
  example is a paragraph run, not a problem/solution pair: the problem
  sentence opens it and the working follows with no "Solution" heading.
- **Remarks**: `remark` (3), in 1.4, 6.4 and 6.2.
- **Boxed formulas**: `\mybxbg` and `\mybxsm` (112, 62 of them in
  Appendix A) frame the results to remember: the integrating-factor
  formula, the characteristic roots, d'Alembert's formula, the Fourier
  coefficients. They are the book's own formula list.
- **Inline exercises**: an `exercise` in the running text (62), usually
  "Check that…" or "Verify…", numbered in the same counter as the end
  exercises. None is answered.
- **Exercises**: `\subsection{Exercises}` ends every section but 0.1, 685
  in all. A section's exercises run 1, 2, …, then a note "Exercises with
  numbers 101 and higher have solutions in the back of the book",
  `\setcounter{exercise}{100}`, and 101, 102, …. Every exercise from 101
  carries its `\exsol{…}` right after it (251, exactly the 101+ set);
  none below 101 does. Many exercises have parts in a `tasks` list
  (201 lists), a) b) c).
- **Footnotes** (95): historical notes ("Named after the French
  mathematicians…"), jokes, and links to Wikipedia biographies (29 links).
- **Tables** (9 `tabular`): Euler's method error tables (1.7), Laplace
  transform tables (6.1, 6.2), the classification of critical points (8.2),
  the summary of 2D linear systems (3.5).
- **Citations** `\cite{EP}`, `\cite{BD}`, … (105) point at Further Reading.
- **Further Reading**: a `thebibliography` of 11 books at the end.
- **Appendix B**: a two-column table of 30-odd transforms f(t) → F(s) and
  the Γ, erf, erfc definitions, plus a table of properties.

### Per chapter

| Ch | Sections | Inline ex. | End ex. | Keyed (101+) | Examples | Theorems | Figures |
|---|---|---|---|---|---|---|---|
| 0 | 3 | 3 | 24 | 9 | 2 | 0 | 4 |
| 1 | 9 | 9 | 115 | 43 | 27 | 2 | 21 |
| 2 | 6 | 8 | 82 | 31 | 12 | 10 | 15 |
| 3 | 9 | 13 | 98 | 37 | 24 | 10 | 14 |
| 4 | 10 | 14 | 116 | 42 | 29 | 7 | 32 |
| 5 | 3 | 8 | 19 | 6 | 6 | 4 | 5 |
| 6 | 5 | 5 | 70 | 22 | 24 | 4 | 7 |
| 7 | 3 | 2 | 38 | 13 | 13 | 3 | 4 |
| 8 | 5 | 0 | 43 | 16 | 11 | 2 | 21 |
| A | 6 | 0 | 80 | 32 | 12 | 6 | 7 |
| **all** | **59** | **62** | **685** | **251** | **160** | **48** | **130** |

The 101+ set is a little under 40 % of the end exercises (251 of 685); the
unkeyed 434 are the first block of every section, the ones an instructor
assigns.

### Where exercises and answers live (root rule 9)

Exercises sit at the end of their own section, never aggregated; the
answer to each 101+ exercise sits on the next line of the `.tex`, so
building a section needs no scan beyond the section itself. The printed
book moves the answers to "Solutions to Selected Exercises"; the `.tex`
order is what the builder reads. Answers are terse ("Yes.",
"$y = x^r$ is a solution for $r = 0$ and $r = 2$"), a few give a line of
working.

## Figures

130 figure environments (`myfig`, `mywrapfig`, `mywrapfigsimp`), 128
captions, about 190 images, some figures setting two plots side by side.
There are no photographs. Two kinds:

- **Plots** made in Genius, `.pdf` via `\diffyincludegraphics` (about
  150): solution curves, slope fields, phase portraits, Fourier partial
  sums, Euler steps, damped and forced oscillations, the plucked string at
  several times. Eight are surfaces u(x, t) or u(x, y) over a plane (1.9,
  4.6 twice, 4.7, 4.9, 4.10 twice, 5.3) and two are 3D curves (the Lorenz
  attractor in 8.5). Every plot has alt text in the source, which states
  what it shows.
- **Sketches** drawn in xfig, `.pdf_t` via `\inputpdft` (42): the brine
  tanks, the carts and springs, the pendulum, the RLC circuit, the beam,
  the whirling and the vibrating string, the heat wire, the regions of the
  Dirichlet problems, the linear-algebra arrows, the modelling cycle of
  0.2 and the chapter diagram of 0.1.

Both kinds are the book's sketch figures under root rule 14: a plot is a
picture of a computation the reader can run, so it is drawn live with the
book's equation and numbers as defaults; a sketch of apparatus becomes the
scene the plot's equation describes. A figure an exercise reads from is
rare here (a few in 1.2 and 1.6 ask the reader to sketch, none asks to
read a printed graph).

## The overlap with Calculus

Calculus (id `calculus`) teaches the opening of this book in its Chapters
8 and 17, built in full:

| Calculus | This book |
|---|---|
| 8.1 Basics of Differential Equations | 0.2, 0.3, 1.1 |
| 8.2 Direction Fields and Numerical Methods | 1.2, 1.7 |
| 8.3 Separable Equations | 1.3 |
| 8.4 The Logistic Equation | 1.6 (the logistic equation is its example) |
| 8.5 First-Order Linear Equations | 1.4 |
| 17.1 Second-Order Linear Equations | 2.1, 2.2 |
| 17.2 Nonhomogeneous Linear Equations | 2.5 |
| 17.3 Applications | 2.4, 2.6 (springs, damping, forcing, RLC) |
| 17.4 Series Solutions of Differential Equations | 7.2 (with 7.3's Bessel functions) |
| Ch 10 Power Series | 7.1 |
| Ch 12 Vectors in Space; 15.7's Jacobian | A.1, A.6 |
| Ch 14 partial derivatives; Ch 16 vector fields | 1.8, 1.9, 3.1 |

Lebl's pages stay whole (root rule 11): his treatment is longer, has
existence and uniqueness, substitution, exact equations, autonomous
equations and the PDE side, and his words are the text. The overlap is
taken up three ways: a concept both books state keeps Calculus's id
(`separable-differential-equation`, `integrating-factor`,
`characteristic-equation`, `eulers-method`, `direction-field`, …), so the
concept map joins the two books and mastery in one counts in the other;
where Lebl leans on calculus (an integral, a partial derivative, a Taylor
series, a vector) the prose links the Calculus section that teaches it
rather than repeating it; and where Calculus has a figure Lebl's page
also wants (the direction field with a draggable initial point, Euler's
method beside the true curve, the spring–mass damping slider), the figure
is reused as the library part it already is, with Lebl's equation as the
default.

## What would make this book stunning (root rule 23)

A differential equation is a rule for motion; its solution is the motion.
Lebl's plots are frames of a flow: a few curves on a slope field, a phase
portrait with six trajectories, a string at four instants, a Fourier sum
at three and twenty terms. The page can run the flow itself, and the
reader can put their hand in it.

- **Slope fields (1.2, 1.6, 1.7).** A slope field the reader clicks to
  drop an initial point, whose solution flows out both ways; Picard's
  theorem as the place where two solutions can meet (y′ = 2√|y|) and
  where they cannot. Euler's method stepping beside the true solution as h
  halves, the error table filling in. The autonomous equation's phase line
  beside its slope field, the arrows on the line the slopes of the field.
- **Models (0.2, 1.3, 1.4).** The modelling cycle as a loop around a
  bacteria dish, a cooling cup of coffee, a brine tank whose salt the
  reader watches mix as the inflow concentration changes.
- **Oscillations (2.4, 2.6).** A spring–mass–damper, the scene above and
  the graph below, the damping slider walking it from underdamped through
  critical to overdamped, the envelope e^(−pt) drawn on the decay; the RLC
  circuit the same equation in other letters. Forcing as a hand that
  shakes the spring at ω: the amplitude curve against ω with ω₀ marked,
  beats as ω nears ω₀ undamped, the practical resonance peak as c grows.
- **Linear systems (3.4–3.7).** The 2D phase portrait as the matrix's
  picture: eigenvector lines, trajectories flowing along them; the reader
  moves the trace and determinant and the portrait morphs between source,
  sink, saddle, centre and spirals, the point in the trace–determinant
  plane beside it. Normal modes of two carts and three springs: the carts
  moving, the two mode shapes as choices, a general motion as their sum.
  The matrix exponential as e^(tA) acting on a vector, the vector riding
  the trajectory.
- **Fourier series (4.2–4.5).** Partial sums of the sawtooth and the
  square wave as N rises, each harmonic drawn as a rotating phasor or a
  stacked sine, Gibbs's overshoot staying at 9 % however large N. The odd
  and even extensions of one function. Resonance with a periodic forcing:
  the harmonic that hits the natural frequency lights up.
- **Heat and waves (4.6–4.10, 5.3).** The heat equation on a wire, the
  temperature drawn as colour along the wire and as a curve above it, each
  Fourier mode decaying at its own rate e^(−n²π²kt/L²). The plucked
  string moving, its modes as choices; d'Alembert's two travelling waves
  passing through each other and summing to the string. The Dirichlet
  problem in the disc as a surface over the disc whose boundary the reader
  sets; the underground temperature wave lagging the surface by months.
- **Laplace (6.1–6.4).** f(t) and F(s) side by side, a slider moving a
  shift in t and the transform's e^(−as) factor appearing; the Heaviside
  switch and a rectangular pulse narrowing into a delta while its area
  stays 1; convolution as one function flipped and slid across the other,
  the overlap integral drawn as it grows.
- **Power series (7.1–7.3).** Taylor approximations of sin closing in as
  the degree rises; the radius of convergence as the disc out to the
  nearest singularity in the complex plane; Airy and Bessel solutions
  drawn from their recurrences term by term.
- **Nonlinear systems (8.1–8.5).** The pendulum's phase portrait, the
  pendulum swinging beside the trajectory its state traces, energy as the
  slider that crosses the separatrix from swinging to spinning. Predator
  and prey cycling. Linearization as a zoom on a critical point where the
  nonlinear portrait becomes the linear one. A limit cycle every orbit
  winds onto. The Duffing oscillator's sensitivity: two initial points a
  hair apart, diverging. The Lorenz attractor in 3D, a trajectory drawn as
  it flies, the reader turning it.
- **Linear algebra (A).** A matrix as a mapping of the unit square
  (Figure A.7), the reader editing the entries and watching the square
  shear, its area the determinant; projection as a shadow; Gram–Schmidt
  stepping.

### 3Blue1Brown survey

A survey of 3Blue1Brown's differential-equations lessons (the six-part
series, 2019–2021, and the three Laplace lessons of 2025) was read for
teaching ideas, judged under root rules 15 and 24–26, and mapped to this
book's sections. Only the pedagogical idea is borrowed; every figure is
OmniStax's own, in its house style. Of 28 candidates, 7 survive as
proposed Sims (2 weak), 6 sharpen a book figure that is transformed anyway,
and 15 were rejected.

Proposed Sims, strongest first (rule 15 suggestions; nothing is built
until picked):

1. 3.8: a matrix chosen from a few (rotation, spiral sink, saddle, shear,
   the book's example) flows a grid and the unit square along x′ = Ax; the
   square's corners at time t are the columns of e^{tA}, written live. The
   shear case shows where 3.7's t e^{λt} comes from. 3.8 has no figure.
2. 4.6: the rod as N points, each drifting toward its neighbours' average
   with its rate drawn; raising N reaches the continuous rod, and insulated
   ends show the end slopes flatten at once. Shows where u_xx and u_x = 0
   come from, which the text gives in one sentence.
3. 4.6: the initial profile as one bar per sine (or cosine) mode, each
   decaying as e^{−n²π²kt/L²}; high modes die first while the sum smooths
   toward the first mode, or toward a₀/2 for the insulated wire.
4. 2.2 (complex roots): drag s = a + ib and watch e^{st} move with its
   velocity always s times its position: a circle at a = 0, a spiral
   inward for a < 0, its real part graphed beside as e^{ax}cos bx.
5. 6.3: g flipped and slid under f; the shaded product's area traces
   (f∗g)(t) below, on the book's e^t ∗ t. 6.3 has no figure.
6. (weak) 6.1: f(t)e^{−st} shaded with its area plotted as F(s); pulling s
   toward a sends the area to infinity, the book's "exists for s > a".
7. (weak) 4.2: f(x)cos nx shaded, its signed area giving a_n, and
   cos mx cos nx cancelling for m ≠ n.

Ideas that sharpen required transforms: Figures 8.6–8.7 link the swinging
pendulum to its moving point in the phase plane, with damping; Figures
8.12–8.13 animate two nearby Duffing paths separating; the fold of 4.17–4.19
adds a moving time slice; Figures 4.7–4.8 add a partial-sum count and a
probe that converges to the jump's midpoint; the fold of 2.2–2.6 adds the
characteristic roots moving as damping rises, critical damping a special
value (link Calculus `sim-characteristic-roots`); Figures 2.10–2.11 split
transient from steady periodic and show the phase lag.

Not carried over: the Laplace lessons' complex-s machinery (poles,
analytic continuation, the contour picture) and rotating-vector drawings,
since Lebl keeps s real and has no Fourier transform; narrative examples
(Romeo and Juliet, three bodies) and second derivations; and ideas that only
restate Figures 8.8, 1.13–1.18 or 3.2–3.3 (Calculus `sim-euler` and
`sim-deer-logistic` already cover two). Figure numbers here are counted from
caption order without table captions and are checked against the PDF at
build time.

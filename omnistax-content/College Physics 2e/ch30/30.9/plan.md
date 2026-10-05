# Plan: 30.9 The Pauli Exclusion Principle

Written before the page was built (root rule 5), under `ch30/config.md`, which
replaces the per-section stop with a plan left for review.

## Sub-concepts

The book prints three headers and two worked examples. The general rules
$2(2l+1)$ and $2n^2$ come between the two examples under no header of the book's;
they get one of OmniStax's, in sentence case, since they are the section's two
results and the capacity figure belongs to them.

| Span | Header | What it holds |
|---|---|---|
| `multiple-electron-atoms` | Multiple-Electron Atoms (book) | Atomic number, the exclusion principle and its note, Pauli's portrait (Figure 30.54), the four quantum numbers of a state, the $n = 1$ level, Figure 30.55 |
| `shells-and-subshells` | Shells and Subshells (book) | Shells, subshells, Table 30.2, spectroscopic notation, Figure 30.56 |
| `n-2-shell` | Example 30.5 · How Many Electrons Can Be in This Shell? | The $n = 2$ shell counted state by state, Figure 30.57 |
| `shell-capacity` | The capacity of subshells and shells (OmniStax) | $2(2l+1)$ for a subshell, $2n^2$ for a shell, the capacity sim |
| `n-3-shell` | Example 30.6 · Subshells and Totals for $n = 3$ | $2 + 6 + 10 = 18 = 2(3)^2$ |
| `shell-filling` | Shell Filling and the Periodic Table (book) | Table 30.3, the potassium and rubidium exceptions, Figure 30.58, the groups |

## Concepts

The seven are the prep pass's rows; the page adds none.

| Concept | Introduced in | Also |
|---|---|---|
| `pauli-exclusion-principle` | `multiple-electron-atoms` | reinforced in `shells-and-subshells`, `n-2-shell` |
| `shell`, `subshell`, `shells-and-subshells` | `shells-and-subshells` | reinforced in `n-2-shell`, `n-3-shell` |
| `subshell-capacity`, `shell-capacity` | `shell-capacity` | reinforced in `n-3-shell`; `shell-capacity` used in `shell-filling` |
| `shell-filling-and-the-periodic-table` | `shell-filling` | — |

Earlier concepts used: `atomic-number`, `ionization-energy` (30.3), `identical-particles` (30.2), `quantum-number`, `principal-quantum-number`, `angular-momentum-quantum-number`, `spin-projection-quantum-number`, `allowed-quantum-numbers` (30.8), `intrinsic-spin` (30.7), `probability-cloud` (30.6), `atom` (30.1), `energy` (7.1).

## Types the page binds

None, as `ch30/COLOR.md` says: $n$, $l$, $m_l$, $m_s$, $s$, $Z$ and every count of electrons are untyped and in ink. The text colours the words that name `energy`, `pressure` and `temperature`. Conventions: every electron is `F.el('e-')`. No facts.

Referents (`ch30/COLOR.md`: the subshells of 30.9 are referents where the text names them): `sub-1s`, `sub-2s`, `sub-2p`, `sub-3s`, `sub-3p`, `sub-3d`, `sub-4s`, `sub-4d`, each marked `<span data-ref>` round the math that names it in the prose and the tables, each drawn with `F.ref` in its state lines and its name; the electrons in them keep the element palette. The $4p$ and $4f$ subshells of the capacity sim are named by no sentence and take `F.cat(0)` and `F.cat(1)`; $5s$ is named but drawn by no figure and stays ink.

## Figures

```
sim-shell-filling · Figure 30.55 · pauli-exclusion-principle, shell-filling-and-the-periodic-table · value add: variation by slider (the book draws one, two and three electrons in the n = 1 and n = 2 levels; the slider adds electrons one at a time from hydrogen to calcium, so the reader sees each subshell refuse a third electron in one state, the shells close at helium, neon and argon, and potassium's electron go into 4s while 3d stays empty, the order Table 30.3 lists) and standardisation (each electron's set (n, l, m_l, m_s) is its place in the drawing and its hover name, so no two can share one) · arrows: symbolic (the spin arrows through each electron are the book's notation for m_s = ±1/2) · still: the filling is a sequence of atoms, not a history, so nothing has a clock; the newest electron arrives with a short fade as Z changes · slider: Z (untyped, 1 to 20, step 1, 3 by default, the lithium of the book's allowed arrangements; dashed circles at 2, 10 and 18, helium, neon and argon, the noble gases the text names) · headline: "Lithium, Z = 3: the n = 1 level is full, so the third electron takes (2, 0, 0, +1/2) in 2s." · graph: none; the scene is the levels n = 1 to 4 as the book draws them, one short line per value of m_l, grouped by subshell (1s; 2s, 2p; 3s, 3p, 3d; 4s) · 2D: the states are a list in energy, not an arrangement in space (rule 28.1)
sim-shell-capacity · Sim · subshell-capacity, shell-capacity · value add: variation by choice (n = 1 to 4: each shell adds one subshell with two more values of m_l than the last, so the reader sees 2, 8, 18, 32 built as 2(1 + 3 + 5 + 7)); the boxes stand in columns by m_l, so the rows make a pyramid of n² boxes, the square that fs-id1608615's proof works out by algebra · arrows: symbolic (the spin arrows) · still: a count, with no time in it; a change of n morphs, the rows the two shells share staying put and the new rows arriving staggered · choice: n (untyped, 1, 2, 3, 4; 2 by default, the shell of Example 30.5 that the paragraph above it counts) · headline: "The n = 2 shell has 2 subshells, l = 0 and 1, with 1 and 3 values of m_l." · graph: none · 2D (rule 28.1)
fig-notation · Figure 30.56 · shells-and-subshells · faithful copy: a labelled notation, which variation would not teach (config.md) · arrows: symbolic (pointers) · still · no controls · 2D
fig-n2-states · Figure 30.57 · subshell-capacity, shell-capacity · faithful copy: the table of the n = 2 states printed as an image inside Example 30.5, redrawn as the book sets it, with its braces (config.md) · arrows: none · still · no controls · 2D
```

Labels on `sim-shell-filling`: the frame (the rows $n = 1$ to $4$, the subshell names under each group, which are its axis), the key for spin up and spin down drawn once as the book draws it, and no entity label: the electron that last arrived is ringed, the headline gives its set, and every electron carries hover names with their sets of quantum numbers; an empty state is named by hover too. Labels on `sim-shell-capacity`: the frame (the $m_l$ column heads, the subshell names and their $l$ at the left, $2(2l+1)$ at the right of each row); the electrons are one kind, named by hover with their sets.

The readout of `sim-shell-filling` writes the configuration and its sum, $1s^2\,2s^1\!: Z = 2 + 1 = 3$, true at every $Z$; the note says how full the outer subshell is ("$2s$ holds 1 of its 2 places"). The readout of `sim-shell-capacity` writes $2 + 6 = 8 = 2n^2 = 2(2)^2$; its note is the count of boxes, $1 + 3 = 4 = n^2$ values of $m_l$, which the picture shows as a pyramid.

Widths: 250 for Figure 30.55, 220 for 30.56, 350 for 30.57; 210 and 400 for the photographs.

## Photographs and unnumbered images

| Image | Keep or drop | Why |
|---|---|---|
| `Figure_31_09_01a.jpg` (30.54) | kept, `photo-pauli` | the text points at it ("see Figure 30.54") |
| `Figure_31_09_02a.jpg` (30.55) | original of `sim-shell-filling` | replaced |
| `Figure_31_09_05a.jpg` (30.56) | original of `fig-notation` | faithful copy |
| `Figure_31_09_06a.jpg` (30.57) | original of `fig-n2-states` | faithful copy |
| `Figure_31_09_03a.jpg` (30.58) | kept, `photo-periodic-table` | the text points at it and reads the groups from it |

## Extra simulations considered

- The periodic table lit row by row as the shells fill. Left: Figure 30.58 is kept as printed, and `sim-shell-filling` already shows where each new period begins.

## Exercises

| Kind | In the book | Set here | Left out or moved |
|---|---|---|---|
| Problem | 29 | 4 keyed (`fs-id3386479`, `fs-id1412034`, `fs-id3355596`, `fs-id1608615`) | 10 keyed moved (to 30.2: `fs-id2378469`, `fs-id3188615`, `fs-id3450401`; to 30.3: `fs-id2378650`, `fs-id1985082`, `fs-id3065607`, `exer-00001`; to 30.4: `fs-id3303454`; to 30.5: `fs-id3168724`, `fs-id1545878`); 15 unkeyed left out and named |
| Conceptual question | 2 | 2 (AI suggested approaches) | — |
| AP test prep | 0 | — | — |

## Tables

Table 30.2 Shell and Subshell Symbols (the spanned header and its footnote on $l > 6$) and Table 30.3 Electron Configurations of Elements Hydrogen Through Calcium (the ditto marks kept), each a `div.book-table`.

## Wanted at chapter level

- `eq-subshell-capacity` → 30.9-shell-capacity
- `eq-shell-capacity` → 30.9-shell-capacity
- variables for 30.9: `Z` (`atomic-number`, untyped) → 30.9-multiple-electron-atoms; `m_l`, `m_s`, `s` (untyped, the meanings of 30.8) → 30.9-multiple-electron-atoms
- `ch30/COLOR.md` 30.9 row stands: no type bound; the subshell referents as its prose describes.
- No concept, edge or symbol row needs changing.

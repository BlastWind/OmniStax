# Appendix B — Table of Laplace Transforms: build status

## Done

- `sheets/laplace-table.json` (kind `table`, `generated_by: tool`, source `{"module": "laplacelist:appendix", "appendix": "B"}`), generated from `source/diffyqs/ap-laplace-list.tex` so every cell is the book's LaTeX verbatim. Three tables: `definitions` (5 rows: u, δ named as the appendix names them; Γ, erf, erfc with the book's integrals), `transforms` (30 rows, `$C$` through `$\frac{1}{\sqrt{\pi t}} e^{at} (1+2at)$`), `properties` (13 rows, `$a f(t) + b g(t)$` through the periodic-function rule). All 43 tabular rows of the .tex, in the book's order; the .tex's commented-out rows (`t^2`, `g'''`) are not in the book and not here.
- `book.json` `sheets` row added by hand under `flock /tmp/omnistax-mergebook.lock`, atomically, in mergebook's form; the file diff is that one row only.
- `OMNISTAX_BOOKS=diffyqs npm run --silent check:content`: nothing reported for the sheet or `book.json/sheets`.
- Built and served (port 8104), `/diffyqs/sheets/laplace-table/` opened with Playwright light and dark: renders, 99 KaTeX formulas, 0 KaTeX errors, no page errors. The one console 404 is `/offline-catalog.json`, which the build's offline hook did not write because it failed on `media/ch01/1over1mx.svg` (Chapter 1's figure, not this task).

## Decisions

- The .tex is one tabular broken in two for the PDF page (`%mbxSTARTIGNORE … %mbxENDIGNORE`, header repeated); it is treated as one table and split where the book's content changes, at the first property row. The three tables are therefore the definitions, the transforms and the properties, which is what RULES.md asks for.
- No row numbers: the book prints none, so there is no `number` column (Calculus's tables carry the book's own numbers).
- The book's LaTeX is kept exactly, so `\frac` renders at inline (text-style) size in the cells; Calculus's sheets look larger only because their source carries `\displaystyle`. Prefixing `\displaystyle` would read better but would not be the book's LaTeX; left as is, for Chen to decide.
- The sentence "The function u is the Heaviside function, δ is the Dirac delta function" is kept as the first two rows of the definitions table, in the book's words; no notes were written.

## Next

Nothing for this appendix. If the sheet should be cited from Chapter 6 (Laplace transform), the link is `/diffyqs/sheets/laplace-table/`.

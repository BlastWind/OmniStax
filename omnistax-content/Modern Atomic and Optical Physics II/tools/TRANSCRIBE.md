# Transcribing a section into source.md

The PDF's text layer scrambles every formula, so a section is transcribed from its page images. You turn `chNN/N.M/pages/*.png` into `chNN/N.M/source.md`, the book's words exactly and its maths in LaTeX, in the markers every OmniStax `source.md` uses (`omnistax-content/tools/cnxml2md.py` lists them).

## Steps

1. From the book folder: `python3 tools/convert.py N.M` (skip if `pages/` exists). It writes the page images, `text-layer.md` and, when there is none, a skeleton `source.md` with the headings, figure markers with their captions, and one empty `$$  $$ {eq:N.K}` slot per numbered equation, in page order.
2. Read every PNG in `pages/`, in order, and fill the skeleton from top to bottom: prose and inline maths around the slots, each slot's LaTeX, every unnumbered display, the footnotes. Look at each figure crop named in a `> FIGURE` line once.
3. `python3 tools/checkprose.py N.M`. It lists words missing or added against the text layer, equation and figure numbers without a marker, and empty slots. Settle each one by looking at the page again: the text layer is right about prose words and wrong about maths. Repeat until it exits 0.

## Words

- Verbatim. Never paraphrase, reorder, modernise or correct. A typo, a doubled word, a missing word or odd grammar stays as printed ("do no commute", "explicitely", "the the"), and goes in the notes at the end.
- A word broken by a hyphen at a line end is joined (de-/scribed is described). A real compound keeps its hyphen (non-relativistic). When unsure, search `text-layer.md` or `source/text-layer.txt` for the word written whole.
- Spelling, capitals, quotation marks (“ ” and the book's own stray ”), dashes and accents (Schrodinger without the umlaut) as printed.
- *italic* and **bold** where the book sets them in running text.
- Cross-references stay as printed text: "Eq. (1.4)", "Fig. 2.1", "[taken from Nature 415, 39 without permission]".
- Lists the book prints as items are `- ` or `1. ` lines.

## Blocks

- One paragraph per line. A blank line separates blocks.
- Text that continues a paragraph after a display equation (the book does not indent it, typically "where …" or "so that …") goes on the line straight after the `$$ … $$` line with no blank line between. A new paragraph after a display (indented in the book) has a blank line before it.
- `<!-- page N -->` stays before the first block that begins on PDF page N; the skeleton places them.
- `# N.M Title` opens the file (a chapter introduction opens `# Chapter N Title`). `## N.M.K Title` for a subsection, `### Title` for a bold paragraph heading at the margin; a run-in heading ("**The weak lattice:** the …") is still `### The weak lattice:` on its own line, with its paragraph on the next.
- A figure: the skeleton's two lines, unchanged but for the caption's maths.

```
> FIGURE {fig:2.1} src=../../media/ch02/fig-2-1.png
> caption: The structure of the two-level system. The applied classical field has angular frequency $\nu$, while the atomic levels are separated by energy $\hbar\omega$.
```

  The caption is the book's caption without "Figure N.K:", verbatim, its maths retyped from the image. The marker sits between paragraphs where the figure stands on the page; when it interrupts a paragraph, after that paragraph. If the crop in `media/` cuts the figure or takes in text, say so in the notes.
- An example the book heads in bold ("Example 1: Two-level atom in thermal equilibrium") is a block: `:::example {ex:N.M-K} Example 1: Two-level atom in thermal equilibrium`, its paragraphs, and `:::` on its own line where the example ends, which is the next heading unless the text plainly returns to the general argument before it. K counts the section's examples from 1. A subsection or section titled "Example: …" stays a heading and is not wrapped.
- A footnote is `^[…]` right after the word that carries its mark, the mark's number dropped; its text verbatim, its maths in `$…$`. A display inside a footnote stays inside it on one line: `^[Using … we find $$ … $$ {eq:4.7} and …]`.
- A table, if one appears: `> TABLE {tab:N.M-K} cols=N`, then a markdown table.

## Maths

- Inline `$…$`; display `$$ … $$` on one line, the book's number after it as `{eq:N.K}`. No number, no marker.
- Rows the book numbers separately are separate displays, each with its own marker, even inside one aligned block. A row that begins with "=" or "+" keeps that sign at its start: `$$ = \frac{1}{2}\left(\ldots\right) $$ {eq:3.12}`. Rows sharing one number, or with none, are one display in `\begin{aligned} … \\ … \end{aligned}`, aligned at `&` where the book aligns them.
- KaTeX only: `\hat{O}`, `\hbar`, `|\psi\rangle`, `\langle n|`, `\mathcal{H}`, `\dagger`, `\Delta`, `\Omega`, `\tilde{}`, `\bar{}`, `\vec{}`, `\left( … \right)`, `\begin{pmatrix}`. No `\eqnarray`, `\bra`, `\ket`, `\rm` or macros of your own.
- What the book prints upright inside maths is upright in LaTeX: words and labels in `\text{…}` ("and", "where", "for"), subscript labels in `\mathrm{…}` (`\Gamma_\mathrm{eff}`, `T_\mathrm{D}`), functions by their commands (`\exp`, `\cos`, `\ln`), `\mathrm{Tr}` and `\mathrm{Re}` for trace and real part. checkprose counts these words against the text layer, so an upright word typed in italics shows as missing.
- Every symbol as printed: a hat, tilde, dagger, star, prime, bold vector or subscript is never dropped or added, and a sign is never tidied.
- Punctuation that ends a display goes inside it: `$$ … . $$ {eq:1.6}`.

## Unreadable spots

Never guess. Where a symbol or word cannot be read with certainty at the page's resolution, write `{?: what is unclear}` at that spot (`$\Omega_{?}$` is not allowed; `{?: subscript of Omega, 1 or l}` is) and name it in the notes. checkprose lists every flag; the section is not finished while one stands, and whoever owns the book settles it from the PDF.

## Notes

End the file with one comment listing what the reader of `source.md` must know: the book's typos kept, flags, figure-crop problems, anything placed by judgment (an example's end, a figure moved past a paragraph).

```
<!-- notes
- 1.2.4 "do no commute": the book's typo, kept.
-->
```

Write `none` inside the comment when there is nothing to say.

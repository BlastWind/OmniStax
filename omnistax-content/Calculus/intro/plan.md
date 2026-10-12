# Plan: Preface (m60027)

Source: `source.md`, converted from Volume 1's preface (`convert.py
preface-1`). The book's own introduction (root rule 21.1, config item 3):
one page, Volume 1's preface verbatim; the prefaces of Volumes 2 and 3 are
not built.

The page follows the Chemistry 2e Preface: one `<section id>` per title,
nested as the module nests them, every title an `<h2>` in the book's
words, the welcome paragraph in a `welcome` section, the three volumes'
chapter lists as a bold volume name over a list, and the author and
reviewer lists one name per line with `<br>`. The one link the book
writes, to the Community Hubs, is kept.

The Comprehensive art program prints two unnumbered, uncaptioned images;
they are one `figure` row, `fig-art-program`, served from `media/intro/`
under the bundle's names, for the same reason Chemistry 2e gives.

No Sim: the Preface states no mathematics to transform. The words name
Volume 1 and its own chapter numbers (config item 4 keeps them); the
places that read wrong in the merged book are listed in the build report.

# Tools

From the book folder:

1. `python3 tools/pages.py`: writes `toc.md` and `sections.json`.
2. `python3 tools/convert.py N.M` (or `N.intro`, or `N` for a chapter): writes `chNN/N.M/pages/`, `text-layer.md`, the skeleton `source.md` and `media/chNN/fig-N-K.png`.
3. Transcribe `source.md` from the page images by `tools/TRANSCRIBE.md`.
4. `python3 tools/checkprose.py N.M`: repeat 3 until it exits 0.

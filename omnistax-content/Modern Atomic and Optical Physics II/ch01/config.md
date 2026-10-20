# Config: Modern Atomic and Optical Physics II, Chapter 1

Proposed after the full-book pass and agreed by Chen on 2026-10-11. Each line is a setting and its value.

| Setting | Value |
|---|---|
| Chapter | 1 Preface: Quantum mechanics and atomic physics review; sections 1.1, 1.2, 1.3 |
| Front matter | none: the chapter prints no opening and the book has no `intro/`; 1.1 Introduction is a section page despite the book's "Preface" |
| Unit of work | one section = one page, never folded (root 11) |
| Order and loop | 1.1's plan was reviewed and approved by Chen (2026-10-11); he then asked for the whole chapter in one go: 1.2 and 1.3 are planned and built without stopping, their `plan.md` written before building and left for review after, then the chapter pass |
| Source | `tools/convert.py` then transcription by `tools/TRANSCRIBE.md`, `tools/checkprose.py` clean before planning |
| Headers | the numbered subsections 1.2.1–1.2.6 and 1.3.1–1.3.7 are the `<h2>` blocks under the book's own titles; the run-ins "Remark concerning the wavefunctions" (1.3.4), "Structure of the alkali ground state" (1.3.5) and "Selection rules" (1.3.7) are `<h3>` |
| Prose | verbatim; the book's typos are kept and listed in `plan.md` |
| Objectives, summary | left empty; the book prints neither and nothing is generated |
| Glossary | the terms the book sets in quotation marks at first use become concept `terms`; nothing else is generated |
| Lead | written (root 21), AI-marked |
| Exercises | MIT 8.422 problems are the book's end exercises from the chapters they map to, restated in Lukin's notation, with origin, number and changes shown on the card and AI-marked solutions; none maps to Chapter 1. The 1.3.1 invitation to derive R∞ is an inline `exercise` Try It whose reveal is the result the book states |
| Held | numerical MIT problems or parts with no key, named in `exercise_notes` |
| AI marks | the lead, every Sim head, every MIT solution and every MIT restatement; `ai` records each maker's model and effort (root 17) |
| Figures | Chapter 1 has no numbered figures. Up to two still-tier Sims: a fine and hyperfine ladder for 1.3.3–1.3.5 and Zeeman levels against B for 1.3.6. No moving or 3D tier in this chapter |
| Extra sims | one-line suggestions in each plan (root 15), built only when Chen picks them |
| Concepts and colour | written to the tables section by section; book rows staged in `ch01/book-rows.json` and merged with `ost merge`; `colours:default` rerun after any new type. 29 types kept |
| Red and blue | red and blue detuning and sidebands wear the frequency hue (Chen, 2026-10-11) |
| Wrong citations | the words kept as printed, the link to the intended target, each listed in `plan.md` |

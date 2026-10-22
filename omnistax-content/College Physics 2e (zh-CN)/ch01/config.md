# Config: 大学物理（第2版）, Chapter 1 (translation)

The translation pass of `College Physics 2e` chapter 1 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch01, every page it lists |
| Language | zh-CN |
| Translator | claude-opus-5-5, medium effort |
| Terminology | `glossary.zh-CN.json`, read before the first sentence; a new term is added as pending |
| Fidelity | the source's tone, sentences and content; nothing added or removed except the forced scenarios below |
| Humanizer review | deferred to the owner |

## Forced scenarios

Every place where a faithful translation was impossible as the source stands
(translate.md item 4), one row each; `translation-notes.md` carries the same
entry.

| File | Span or line | What was done | Why |
|---|---|---|---|
| book.json | `types[lens-power].label` | 光焦度 | collision with power 功率 (4.5) |
| book.json | `concepts[approximation].statement` | “粗估” for “guesstimates” | English blend word (4.2) |
| every text.html | figure eyebrows | `Figure N.M`, `Sim` kept | the checker reads them (4.6) |
| every text.html | figure citations | 图 N.M, plain text until the app reads it | the app links only `Figure N.M` (4.6) |

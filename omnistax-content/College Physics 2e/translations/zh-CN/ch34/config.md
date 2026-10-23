# Config: 大学物理（第2版）, Chapter 34 (translation)

The translation pass of `College Physics 2e` chapter 34 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch34, every page it lists |
| Language | zh-CN |
| Translator | claude-sonnet-5-5, medium effort |
| Terminology | `glossary.zh-CN.json`, read before the first sentence; a new term is added as pending |
| Fidelity | the source's tone, sentences and content; nothing added or removed except the forced scenarios below |
| Humanizer review | deferred to the owner |

## Forced scenarios

Every place where a faithful translation was impossible as the source stands
(translate.md item 4), one row each; `translation-notes.md` carries the same
entry.

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch34/34.1/text.html | #large-and-small, first paragraph: “the word galaxy comes from the Greek word galaxias, meaning milky” | written “英文 <em>galaxy</em> 一词来自希腊词 <em>galaxias</em>，意为乳白色的”, the <em> pair kept on the English words | a sentence about English itself (4.3); the Chinese 星系 does not come from the Greek |
| ch34/34.1/text.html | #expansion, second paragraph: “about 50 Mly (50 million light years)” | written “约 50 Mly（5000 万光年）”, the abbreviation kept as printed and the book’s gloss given in 万 | a unit abbreviation with a printed gloss; Mly has no Chinese symbol, and 约 50 百万光年 beside 5000 万光年 would say the same thing twice (4.4) |
| ch34/34.1/text.html; ch34/34.1/figures.js; ch34/34.1/section.json | values in Mly and Gly in prose: “100 Mly away”, “less than 1 Gly”, “10 Gly” (text, referent label, exercise prompts, hints and solutions, the 100 Mly scale label of sim-hubble-expansion) | written in 万/亿: 相距 1 亿光年, 不到 10 亿光年, 约 100 亿光年, 5 亿光年, 200 万光年, 100 万光年, 50 亿光年; the symbols Mly and Gly stay in math, in the answer line “0.30 Gly” and in readouts that count them (百万光年 after a variable number) | units with no Chinese symbol (4.4): the number is regrouped by 万/亿, the quantity is the same |
| ch34/34.2/figures.js | sim-starlight headline: the one ? 'radius' : 'radii' branch | plural branch collapsed to 个太阳半径; the variable `one` is left defined and no longer read | English grammar in figure code (4.1) |
| ch34/34.2/figures.js | sim-black-hole hover names, NAME[p.out] + ', escaping' | the suffix written ，逃逸 as in the glossary row; for the proton the source already reads 'a proton, escaping', so the Chinese reads 逃逸的一个质子，逃逸, the repetition of the source kept | the repetition is the source’s own; nothing added or dropped |
| ch34/34.2/text.html | #black-holes: “the late 1700s” | written 18 世纪末 | a decade/century idiom of English (4.4): 1700s has no Chinese form |
| ch34/34.2/text.html | #general-relativity, paragraph 1: “Einstein’s theory of general relativity” (and the same in #beyond-special-relativity, #light-bent-by-the-sun, #black-holes, #gravitational-waves) | written 广义相对论理论, the relativity span on 广义相对论 and the theory span on 理论 kept as two spans | the term and the word theory collide: 相对论 already contains 论 (4.5, 6.6) |
| ch34/34.3/figures.js | sim-size-scale headlineFor(): ' order' / ' orders' of magnitude; “… across, is …”; “Details of 10⁻¹⁸ m are the smallest yet observed directly” | the plural branch collapsed to 个数量级; the English clause order rebuilt in Chinese order (the description of the object, 直径约 or 大小约 and the value, first, then 比…小/大 N 个数量级); 'across' becomes 直径 for the atom, Earth and universe and 大小 for the person; the last sentence reordered to 10⁻¹⁸ m 的细节是迄今直接观测到的最小细节 | English grammar and word order built in figure code (4.1) |
| ch34/34.3/text.html | #superstring-theory, first words: “Introduced earlier in GUTS: The Unification of Forces” run into “Superstring theory is …” | written as the sentence 前文已在“大统一理论：力的统一”中介绍。 with a full stop and the glossary title of 33.6 | a slip of the source (missing punctuation) that Chinese cannot carry as printed; the wording is kept |
| ch34/34.4/text.html | #evidence, first sentence: “more matter than meets the eye” | rendered for meaning: 物质比眼睛所见的更多 | an English idiom with no Chinese form (4.4) |
| ch34/34.4/text.html | #indirect-dark-matter, last paragraph: “A far cry from the days when …” | rendered for meaning: 这与……的那些日子相去甚远 | an English idiom with no Chinese form (4.4) |
| ch34/34.6/figures.js | sim-critical-temperature topline: the word `rel` ('at' / 'below' / 'above') interpolated into the sentence | replaced by an inline choice 等于/低于 (the 'above' sentence is its own branch, 高于 written in it) | English grammar in figure code (4.1) |
| ch34/34.6/text.html | #unidentified-superconductors: “USOs or unidentified superconducting objects” | written 不明超导物（USO）, the abbreviation kept as letters, the UFO pun carried by 不明 | wordplay and an abbreviation’s letters (4.2, 4.3) |

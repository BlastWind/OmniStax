# Config: 大学物理（第2版）, Chapter 28 (translation)

The translation pass of `College Physics 2e` chapter 28 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch28, every page it lists |
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
| ch28/28.2/figures.js | sim-flash-lamps, heard() (the lines saying which flash A and B have received) | the English phrase assembled from 'the ' + first[0] + ' flash' and ' flash, then the ' + second[0] is written first[0] + '侧闪光' and first[0] + '侧闪光，然后是' + second[0] + '侧闪光'; the side literals 'right' and 'left' became 右 and 左 | English phrase assembled in figure code from word fragments and a trailing clause; the Chinese order and the measure word 侧 cannot be built from the same pieces (4.1) |
| ch28/28.2/figures.js | sim-twins, the bar readout s = 'ages ' + sig(years) + ' y, ' + sig(40 + years) + ' at the return' | written '衰老 ' + sig(years) + ' y，返回时年龄为 ' + sig(40 + years); the trailing literal ' at the return' is gone and the second number is introduced by the phrase before it | the English hangs ‘at the return’ after the second generated number, which Chinese cannot do (the phrase must precede its number); the two generated numbers keep their order (3.3) |
| ch28/28.2/text.html | #twin-paradox, first paragraph: “when she left, she would be 42 upon her return” | written 在她离开时是 40 岁，她在她返回时将是 42 岁, the pronoun 她 repeated | every pronoun span of the source keeps its place in its block (translate.md 5); Chinese would drop the pronoun, and the span count must match |
| ch28/28.3/text.html | #length-contraction, the last sentence before sim-contracted-field (“Special Theory of Relativity”) | the `theory` span wraps 理论 in 狭义相对论这一理论, not the bare word, so that 狭义相对论 is not doubled as 狭义相对论理论 | 相对论 already contains 论; the same resolution as ch01/1.1 (a term and its own name, 4.5) |
| ch28/28.3/section.json | notes: “the link to Relativistic Energy is spelled “Relatavistic”” | the misspelling is kept in English inside the quotation marks; the correctly spelled title is written 相对论能量 (and the link sentence of text.html reads “相对论能量”) | a sentence about English spelling (4.3); the book’s typo has no Chinese equivalent |
| ch28/28.3/text.html, ch28/28.3/figures.js, ch28/28.3/section.json | light years in the prose and in figure strings (“4.300 light years (ly)”, “$\kLo = 4.300$ ly”, “L = … ly”, exercise p3) | written 光年 (number then 光年 with no space; the sim-head’s math run is followed by a space, 4.300 光年); `\text{ly}` inside math and the symbol y for years stay | glossary rows light year / ly render the unit by its name in prose, as ft is 英尺 (4.4); unit symbols inside \text{} are kept |
| ch28/28.4/figures.js | sim-relativistic-doppler, topline (both branches) | the plural branches (radio ? ' arrive' : ' arrives'), (radio ? ' arrive ' : ' arrives ') collapse to the one form 到达时不变 and 到达时的波长为; the words ‘Receding’ / ‘Approaching’ and ‘red’ / ‘blue’ stay as the two meaningful branches (远离 / 接近, 红 / 蓝 + 移), and 远离 / 接近 now follows the generated number | English subject-verb agreement built in figure code (4.1); the participle before the number is moved after it by Chinese word order (3.3) |
| ch28/28.6/section.json | exercises p10, prompt: “1.0 TV (teravolt)”; hint “Through 1.0 TV” | written 1.0 TV（太伏）: the symbol TV is kept as printed and the book’s own gloss is the glossary teravolt 太伏; the hint keeps TV | TV also reads as 电视机 (glossary TV) in Chinese, so the symbol stays and the spelled-out unit name carries the meaning (4.4); sense row TV (teravolt) |
| ch28/28.6/text.html | ex-rest-energy-gram, Solution step 5 and the Discussion (three places): the two spans of “rest mass energy” (rest-mass, energy) | kept apart as 静质量能量 (<span data-concept="rest-mass">静质量</span><span data-concept="energy">能量</span>) instead of the glossary rest mass energy 静能; the plain-text occurrences (exercise p7) read 静能 | the book wraps rest mass and energy in two separate spans, and a span is never dropped or merged (translate.md 5); 静能 cannot be split between them |
| ch28/28.6/text.html | ex-rest-energy-gram, Strategy: “half the mass of a penny” | penny written 一美分硬币, not 便士 | a cultural reference with no Chinese equivalent coin (4.4); the glossary US coin |

# Config: 大学物理（第2版）, Chapter 20 (translation)

The translation pass of `College Physics 2e` chapter 20 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch20, every page it lists |
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
| ch20/20.1/figures.js | sim-simple-circuit headline; sim-drift-count headline | the leading literal “A current of ” dropped: the strings now begin fmt(I, 1) + ' A 的电流从正极流出，通过' + lamp + …, and fmt(I, 1) + ' A 的电流在直径 ' + fmt(D, 3) + ' mm、每立方米有 ' + fmt(ns.v, 3) + ' × 10²⁸ 个自由电荷的导线中，以 …'; the operands keep their order | Chinese word order, with the number leading the sentence; grammar built in code (4.1) |
| ch20/20.1/text.html | #electric-current, last paragraph: “amperes (or amps)” | written 安培（或称“安”）: the colloquial name that the book’s “amps” shows is given as the GB 3100 short name 安 in quotation marks | the glossary row amps gives 安培 and does not use 安 as a running term; here the book names the colloquial form (4.2, 4.4) |
| ch20/20.1/text.html | #conventional-current, ex-electrons-per-second: “the Example 20.1 example” | written 例题 20.1 中所提到的计算器; the doubled word “example” is not repeated | Chinese has no counterpart of “the Example 20.1 example”; no content is dropped |
| ch20/20.1/text.html | #conventional-current: “in the 1700s” | written 18 世纪 | the English decade-of-century form has no Chinese counterpart (4.4) |
| ch20/20.3/text.html | Table 20.1 caption and Table 20.2 caption | the book’s “Resistivities of Various materials” (lowercase materials) and “Tempature Coefficients of Resistivity” (misspelt) are written 各种材料在 20°C 时的电阻率 and 电阻率温度系数, without the slip | a spelling slip and a stray lowercase of English cannot be carried into Chinese (4.3); the slips are named in the section’s notes |
| ch20/20.3/section.json | notes | the two English titles are quoted in English, each with a parenthesis saying what the slip is | a sentence about English itself: a spelling and a case (4.3) |
| ch20/20.4/figures.js | sim-cost-of-lighting lamp(), the line under the bar | money(total) + ' so far' written '累计 ' + money(total) | Chinese word order: the English trailing “so far” cannot follow the number; grammar built in code (4.1) |
| ch20/20.4/section.json | exercises[p11].prompt and .answer.solution; exercises[p17].answer.solution | “100 million TVs” written 1 亿台, “＄3.94 billion/year” written ＄39.4 亿/年 | Chinese counts by 万 and 亿, so the digits change with the unit word while the value is unchanged (4.4) |
| ch20/20.5/text.html, ch20/20.5/section.json | #rms-values, first paragraph after the formulas; summary_html, 5th bullet: “where rms stands for root mean square” | rendered 其中 rms 代表“方均根”（root mean square）, the English kept in parentheses | a sentence about the letters of an English abbreviation (4.3) |
| ch20/20.7/figures.js | sim-action-potential topline | the phase words 'resting', 'depolarizing', 'repolarizing', 'returning to rest', which phase() returns and the code compares, stay as keys; the topline reads them through a lookup object of Chinese phrases (处于静息状态, 正在去极化, 正在复极化, 正在回到静息状态) | English words built into a sentence by code (4.1) |
| ch20/20.7/figures.js | sim-action-potential readout | \text{at} written \text{在}, with \text{时} added after the time unit (在 t = x ms 时) | Chinese puts a particle after the point in time; English grammar built in a readout (4.1) |
| ch20/20.7/figures.js | sim-ecg hover names | the test name.endsWith('node'), which gives the SA and AV node targets a smaller radius, rewritten name.endsWith('结') so that it matches 窦房结 and 房室结 | code that tests an English string the translation replaces (4.1) |
| ch20/20.7/text.html | #electrocardiograms: “They are also abbreviated EKG” | kept with the letters: （它们也缩写为 EKG。） | a sentence about an English abbreviation (4.3) |
| ch20/20.7/figures.js | sim-leads label of the drawn pair (lab.add) and the sim-ecg y-axis label and topline | “lead ” + value written '第 ' + lead.value + ' 导联' (and '第 ' + L + ' 导联电势…'): the number moves inside the term | owner-directed 第 II 导联; the Chinese term wraps the number, grammar built in code (4.1) |
| ch20/20.3/figures.js | sim-mercury-superconductor readout | `\text{at}` written `\text{在}`, with `\text{时}` added after the temperature unit (在 T = x K 时) | Chinese puts a particle after the point; English grammar built in a readout (4.1) |
| ch20/20.5/text.html | #transmission: “in the late 1800s” | written 19 世纪末 | the English decade-of-century form has no Chinese counterpart (4.4) |

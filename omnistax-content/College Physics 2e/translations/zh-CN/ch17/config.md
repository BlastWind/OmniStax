# Config: 大学物理（第2版）, Chapter 17 (translation)

The translation pass of `College Physics 2e` chapter 17 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch17, every page it lists |
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
| ch17/17.2/figures.js | sim-woofer, function `lane`: `name` is both the key of `F.ref` (`'woofer'`, `'tweeter'`) and the displayed word | a constant `SHOWN = { tweeter: '高音扬声器', woofer: '低音扬声器' }` is added and the displayed lane label and the hover name (“the wavefront that left the …”) read `SHOWN[name]`; the key stays English; three lines of code differ from the source | the code uses one English word as an identifier and as reader text at once, so the displayed word cannot be translated in place (4.1) |
| ch17/17.2/figures.js | sim-boundary readout small line: the pieces `sig(V1 / V2)` and `m.label` | the two pieces swap places, 空气中的波长是它在 … 中的波长的 X 倍 (the ratio 倍 follows the medium); one line of code differs from the source | Chinese puts the “times” phrase after the medium, English before it; the concatenation order changes (4.1) |
| ch17/17.3/figures.js | sim-decibel-ladder topline, non-zero branch: “A v2 dB sound is \|diff\| dB above / below a v1 dB sound” | the operands stand in Chinese order, `fmt(v2, 0)` … `fmt(v1, 0)` … 高/低 `fmt(\|diff\|, 0)` dB (the reference sound before the difference); the above / below branch is kept; one line of code differs from the source | Chinese comparison names the reference before the amount; the sentence is assembled in code (4.1) |
| ch17/17.3/figures.js | sim-many-sources, mark label under the ladder (`'all ' + fmt(N, 0)`) | written `'全部 ' + fmt(N, 0) + ' 个'`; the code gains a trailing literal (the measure word 个 follows the numeral); one line of code differs from the source | Chinese needs a measure word after a numeral, and the label is assembled in code (4.1) |
| ch17/17.3/text.html | #intensity, #decibels, #threshold, #pressure-amplitude, #ratios, #pressure-level: sound intensity, sound intensity level, sound pressure level, threshold of hearing | the two source spans stand on the two morphemes of the Chinese compound: `<span sound>声</span><span intensity>强</span>` (声强), `…强</span>级` (声强级), `<span sound>声</span><span pressure>压</span>级` (声压级), and the hearing span on 听 alone in 听阈; no span is dropped, merged or moved to another block | the glossary rows 声强, 声强级, 声压级 and 听阈 are one word each where the source has a span per English word, as in ch03/3.4 分矢量 |
| ch17/17.3/text.html | Table 17.2, row 20 dB, “Whisper at 1 m distance” | written 1 m 远处的耳语 with the distance span on 远 alone | the glossary row fixes 1 m 远处的耳语, which has no word 距离 for the span to wrap, and a span is never dropped (translate.md 5) |
| ch17/17.3/text.html | #ex-twice-as-intense Strategy: “You can solve this problem using of the properties of logarithms” | the book's slip “using of” has no Chinese counterpart and is rendered as 利用对数的性质 | a grammatical typo of the English (as ch01/1.3 cyu3) |
| ch17/17.4/figures.js | sim-two-booms topline (aircraft beyond the observer): the ordinal words `['first', 'second', 'third']` and the order of `dGround`, the ordinal and `tLag` | the ordinal words become the display array `['一', '二', '三']` inside 飞机飞过第…名观察者头顶, and the three operands are written in the Chinese order (the ordinal, then `tLag`, then `dGround`); one line of code differs from the source | English ordinal words built by index in figure code, and the clause order (4.1) |
| ch17/17.4/text.html | #applications, “about 14 billion years” | written 140 亿年, the value unchanged | Chinese counts in 万/亿 and has no word for billion (4.4), as in ch01/1.2 |
| ch17/17.4/text.html | #sonic-boom, “the sound intensity there” | the sound span and the intensity span stand side by side on 声 and 强 inside one data-type span (那里的声强) | the glossary term 声强 is one word where the source has a span per English word, as in 17.3 |
| ch17/17.5/figures.js | sim-noise-cancelling headline: “Z dB below / above the noise alone” | written 比单独的噪声低/高 Z dB, so each `fmt(...)` is preceded by a string in the Chinese order; one line of code differs from the source | Chinese puts a quantity after the comparison word, and the sentence is assembled in code (4.1) |
| ch17/17.5/figures.js | sim-tube-resonance readout, small line: `n === 1 ? 'one-fourth' : n + ' fourths'` and `(n === 1 ? 'fundamental' : 'harmonic number ' + n)` | written `n + '/4'` inside 波长的 … and `(n === 1 ? '是它的基频。' : '对应的谐波次数为 ' + n + '。')`; the operand now follows its string and the fourths branch is gone; one line of code differs from the source | an English plural (“fourths”) and the clause “harmonic number n” built in code (4.1) |
| ch17/17.5/text.html | note “Real-World Applications”, first paragraph: “the driven or forced oscillation” | written 受迫振动 once | the glossary maps both driven oscillation and forced oscillation to 受迫振动, so the pair collapses to one term (4.5) |
| ch17/17.5/text.html | Example 17.5 (a): “air temperature, is 22.0 °C” | the stray comma is not carried into 空气温度为 22.0 °C | the comma is a misprint that would break the Chinese clause; no word is dropped |
| ch17/17.5/text.html | fig-vocal-tract alt: the English vowel sounds “a a a” and “e e e” | kept as letters in 发 a a a 音 / 发 e e e 音 | the passage names English vowel sounds by letter (4.3) |
| ch17/17.6/figures.js | sim-speech-region: `const art = loss === 80 ? 'an' : 'a'` | collapsed to `const art = ''`; the strings keep `art` as an empty operand; one line of code differs from the source | English article built in figure code (4.1) |
| ch17/17.6/text.html | #hearing-loss: “presbycusis” and its gloss “literally ‘old ears’” | written <em>老年性聋（presbycusis）</em>——字面意思是“老年的耳朵”, the English term kept in parentheses | a sentence about the origin of an English (Latin) word (4.3) |
| ch17/17.6/text.html | #equal-loudness, #ear-mechanism: sound intensity level, sound pressure variations; #hearing-loss: hearing threshold | the compounds carry their spans on the morphemes, `<span sound>声</span><span intensity>强</span>级` (and `<span intensity>声强</span>级` where only “intensity level” stands), `<span sound>声</span><span pressure>压</span>变化`, and the hearing span on 听 alone in 听阈; no span is dropped or merged | the glossary words are one word each where the source has a span per English word, as in 17.3 |
| ch17/17.6/text.html | #equal-loudness: “A unit called a phon” | the unit name put in quotation marks, 叫作“方”的单位, the strong span inside the marks | 方 is a one-character word that reads as a measure word, so the quotes mark the name (the glossary note on phon) |
| ch17/17.6/text.html | #loudness-perception: “a trillion” | written 一万亿 (10^12), the value unchanged | Chinese counts in 万/亿 and has no word for trillion (4.4), as in 17.4 |

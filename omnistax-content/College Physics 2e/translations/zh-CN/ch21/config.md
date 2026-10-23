# Config: 大学物理（第2版）, Chapter 21 (translation)

The translation pass of `College Physics 2e` chapter 21 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch21, every page it lists |
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
| ch21/21.1/text.html | #series, #practical, #combinations: “the starter motor”, “the motor” | the span data-concept=electric-motor wraps the whole glossary term 起动机, not 起动 + 电动机 | the glossary fixes starter motor as 起动机, which holds no separate word 电动机 for the electric-motor span to wrap; the span count is kept (3.3) |
| ch21/21.1/section.json | exercises[cq1..cq5].figure.alt: “internal resistance small r” | written 内阻（小写 r） | the English “small r” names the lowercase letter, and Chinese has no case word in that place (4.3) |
| ch21/21.2/figures.js | fig-lead-acid-cell, plates loop, text(ctx, pole, x + 54, 194, …); fig-charge-separation, poles loop, text(ctx, pole, x + (x < 700 ? -54 : 54), T - 42, …) | the printed label became pole === 'anode' ? '阳极' : '阴极' and the key 'anode' / 'cathode', which F.ref(pole) needs, is kept | the English word is both the code key and the label printed (4.1) |
| ch21/21.2/text.html | #animals-as-detectors, “platypuses, and echidnas (spiny anteaters)” | written 鸭嘴兽和针鼹, the parenthesis dropped | the glossary renders both echidnas and spiny anteaters as 针鼹, so the gloss would read 针鼹（针鼹）; the second English name is the same Chinese word (4.2) |
| ch21/21.3/figures.js | sim-two-loop-circuit headline | the plural branches ' are negative, so they run' / ' is negative, so it runs', ‘them’ / ‘it’ and the ‘and’ joining the negative currents collapse to one form, '，其中 ' + back.join('、') + ' 为负，即与为其假定的方向相反。'; the all-positive clause is written '，每一个都为正，所以每个电流都沿其假定的方向流动。' | English grammar assembled in figure code (4.1) |
| ch21/21.6/figures.js | sim-rc-charge-discharge topline, both branches | the operands are taken in a different order: ‘reached V of the E V the source puts out’ is written 达到电源所输出 E V 中的 V, ‘fallen to V of the E V it started with’ is written 从起初的 E V 降到 V | the English clause cannot be kept in sequence; the interpolated values are the same, only the order of the fmt() operands changes (4.1, grammar built in code) |
| ch21/21.6/text.html | #rc-circuits: “the Greek letter tau” | written （希腊字母 tau）, the spoken name tau kept | a sentence about how a symbol is read (4.3), as 1.3 keeps delta |
| ch21/21.6/text.html | #timing: “sino-atrial (SA) node” | written 窦房结（SA 结）, the English abbreviation SA kept in the parenthesis | a sentence about the letters of an English abbreviation (4.3) |
| ch21/21.6/text.html | every “time constant” inside a data-type=time span | the span of concept time wraps 时间 only, in 时间常量 | the term is one word in Chinese, and the span cannot wrap the whole of it without changing what the source tags (3.3) |
| ch21/21.6/text.html | ex-strobe: “Doc Edgerton” | written “Doc”埃杰顿, the nickname kept in the book’s quotation marks | the nickname has no Chinese form (4.4) |

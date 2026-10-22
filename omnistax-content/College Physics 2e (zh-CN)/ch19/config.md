# Config: 大学物理（第2版）, Chapter 19 (translation)

The translation pass of `College Physics 2e` chapter 19 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch19, every page it lists |
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
| ch19/19.1/figures.js | sim-electron-gun topline (start, done and mid-flight branches): `p.article` (“An electron”, “A proton”, “A helium nucleus”) | `p.article` is written as the bare noun (电子, 质子, 氦原子核) and the `.replace('A ', 'The ').replace('An ', 'The ')` that turned the article into “The …” is dropped | English articles built by rule in figure code (4.1) |
| ch19/19.1/figures.js, ch19/19.1/text.html, ch19/19.1/section.json | sim-battery-headlight, the “n_e = … electrons” line and topline; #ex-headlight display math (1.56 × 10^19 electrons); #electron-volt display math (6000 molecules); exercises[p8].answer.solution (electrons per second) | ` electrons` is written ` 个电子`, `\text{electrons}` `\text{个电子}`, `\text{electrons per second}` `\text{个电子每秒}`, `\text{eV per molecule}` `\text{eV 每个分子}` and `\text{molecules}` `\text{个分子}`, the unit-like phrase kept in place inside the math | a Chinese count takes the measure word 个 and there is no plural form (4.1) |
| ch19/19.1/figures.js | sim-electrical-hill topline (mid-flight, positive charge): the operands `pct(s)`, `uJ`, `pct(s)` | the second `pct(s)` now follows `uJ` (“其 U µJ 势能中有 N% 已变成动能”); the string pieces around the operands are rewritten and the operand order of the call changes | the sentence is built in code and Chinese puts the amount of energy before its share (4.1) |
| ch19/19.1/text.html | #electric-potential, “(or simply potential, since electric is understood)” | written （英文中也简称为 potential，因为其中的 electric 不言自明）, the two English words kept in the Chinese sentence; electric potential is 电势 everywhere in the chapter, never a bare 势 | a sentence about how the English term is shortened (4.3): 电势 would make the parenthesis say that the term is shortened to itself, and 势 alone is not a Chinese word for it |
| ch19/19.1/section.json | exercises[cq1].answer.solution, “Voltage is a name taken from the unit, the volt” | written 电压（voltage）这个名称取自单位伏特（volt）, the English words kept in parentheses | a sentence about the origin of an English word (4.3): Chinese 电压 is not formed from 伏特 |
| ch19/19.1/text.html | #ex-electron-speed Strategy and Discussion, #electric-potential-energy: “gravitational force” (three uses) | the force on the electron near the Earth (“neglecting the gravitational force”, “indeed negligible here”) and the force that goes with the gravitational potential energy 重力势能 (“in the absence of dissipative forces such as friction”) are written 重力; the comparison with the electrostatic forces on small particles, which cites Electric Charge and Electric Field, is written 引力 | one English phrase stands for two glossary rows, the Earth’s pull on a body at its surface (force of gravity, weight: 重力) and the attraction between bodies (gravitational force: 引力); the more specific sense takes its own word (4.5) |
| ch19/19.1/text.html | #electron-volt, “electron volts” with the span on “electron” | written <span data-concept="electron">电子</span>伏, the span wrapping 电子 inside the unit name 电子伏 | the source’s span wraps only “electron” of “electron volts” and the Chinese unit name is one word; the span is kept on its first two characters so it is neither dropped nor widened (translate.md 5) |
| ch19/19.3/figures.js | sim-point-charge-potential topline: the operands `fmt(R.v, 2)` and `num(s * Qm.v, 2)` | the two swap places: “距 Q nC 的电荷 R cm 处，电势为 V V，电场为 E N/C。” instead of “R cm from a Q nC charge the potential is V V and the field is E N/C.” | the sentence is built in code and the distance phrase follows the charge it is measured from in Chinese (4.1) |
| ch19/19.3/figures.js | sim-van-de-graaff topline: the leading article of “A D cm sphere held at V kV carries …” | the article is dropped (the string pieces change and `fmt(DIA.v, 1)` now opens the sentence): “D cm 的球保持在 V kV 时，带有 Q µC 的过剩电荷” | an English article built into the string of a sentence assembled in code has no Chinese form (4.1) |
| ch19/19.4/figures.js | sim-equipotential-map, slider label `\text{lines}` | the bare plural noun that names a count is written `\text{线数}` | Chinese has no plural; the same resolution as `\text{电子数}` in 1.1 (4.1) |
| ch19/19.4/figures.js | sim-plate-equipotentials topline: the operands `fmt(gap.v, 1)` and `fmt(V, 0)` of “Across a gap held at V” | the two swap places, so it reads “在保持 V 的 gap 间隙上” in Chinese order | grammar built in code: the participial “Across a gap held at V” has no direct Chinese form (4.1) |
| ch19/19.4/text.html | #conductors-and-grounding, last paragraph, “electric field and potential surfaces” | written 电场和等势面 | Chinese has no term 电势面 and a coined one is not allowed (translate.md 2.1); the book’s potential surfaces are the equipotential surfaces (4.4) |
| ch19/19.4/text.html, book.json concepts[equipotential-lines].statement | #equipotential-map, “The term equipotential is also used as a noun”; the same sentence in the concept | written <em>等势</em>（equipotential）一词也用作名词，指等势线或等势面 in the page, and 等势（equipotential）也可用作名词 in the concept, the English word kept in parentheses (no tag added on the page, so the inline tags of the block are the source’s) | a sentence about the word class of an English term (4.3); 等势 is the glossary’s adjective and Chinese has no noun use to remark on |
| ch19/19.6/text.html | sim-series-parallel sim-head (“The total falls below …”) and #ex-mixed-capacitance Solution (“the total is the sum”): the span on the bare words “The total” / “the total” | the span is written on 总电容 | Chinese does not say 总 alone for a total quantity; the span keeps the meaning and stays in its block (translate.md 5) |
| ch19/19.6/text.html | “voltage source” (sim-head and #parallel): the span on “voltage” | written <span data-type="voltage">电压</span>源, the span wrapping 电压 and 源 standing outside it | the source’s span wraps only “voltage” of “voltage source”; the Chinese compound 电压源 is split so the span is neither dropped nor widened (translate.md 5) |

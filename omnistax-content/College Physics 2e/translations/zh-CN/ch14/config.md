# Config: 大学物理（第2版）, Chapter 14 (translation)

The translation pass of `College Physics 2e` chapter 14 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch14, every page it lists |
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
| ch14/14.1/text.html | #units, “Food calories (given the notation Cal, and sometimes called “big calorie”) are actually kilocalories” | written 食物卡路里（记作 Cal，即“大卡”）实际上就是千卡; “sometimes called” becomes 即 | the glossary rows food calories and big calorie both read 大卡, so the literal 食物大卡（记作 Cal，有时称为“大卡”） would explain the unit by itself; the sentence is about the English names of the unit (4.3, 4.5), and the food Calorie reads 大卡 everywhere else |
| ch14/14.2/figures.js | sim-calorimetry topline and boil note: `'The ' + hot + ' at ' + … + ' and the ' + cold + ' at ' + …`, `'much nearer the '` / `'nearer the '` + `wide`, `' The water would boil first; …'` | `hot` and `cold` are '锅' and '水' (and `wide`); the articles are gone: `hot + '的温度为 ' + … + cold + '的温度为 ' + …`, `'离' + wide + '近得多'` / `'离' + wide + '更近'`; the leading space of the boil note is dropped; three lines of code differ from the source | English articles and a leading space between English sentences, built by code (4.1); the Chinese puts the noun after 离 |
| ch14/14.3/figures.js | sim-phases readout small line: `s.name.charAt(0).toUpperCase() + s.name.slice(1) + ' melts at …'` | dropped to `s.name + …`: the substance name opens the sentence without the capitalisation step; one line of code differs from the source | English capitalisation applied to a string by code (4.1); Chinese has no letter case |
| ch14/14.3/figures.js | sim-ice-soda cube label under the cup and all-melts topline: `cubes === 1 ? ' ice cube, ' : ' ice cubes, '`, `cubes === 1 ? 'One ice cube, ' : cubes + ' ice cubes, '`, `'melt' + (cubes === 1 ? 's' : '')`, `'bring' + (cubes === 1 ? 's' : '')` | each branch collapsed to the one form: `cubes + ' 块冰块，'` in the label and `cubes + ' 块冰块，共 ' + …` in the topline; two lines of code differ from the source | English plural and verb agreement in figure code (4.1) |
| ch14/14.4/section.json | exercises[cyu1].answer.solution: “steams” cold milk | the quoted verb rendered for meaning as “蒸热”, the book’s quotation marks kept | an English coffee-shop idiom (to steam the milk) with no fixed Chinese verb (4.2, 4.4) |
| ch14/14.5/figures.js | sim-slab MAT names and topline: `mat.value.replace(/ \(.*\)$/, '').toLowerCase()` | the material names of MAT are the Chinese names of Table 14.3 (Styrofoam kept, a brand name); the pattern became `/（.*）$/` for the full-width brackets of 木材（低端值，0.08）, `.toLowerCase()` is dropped, and the operand stands after `fmt(D.v, 2)` in the Chinese order; one expression of the topline differs from the source | English lower-casing and an ASCII-bracket pattern work only on English words, and lower-casing would change the brand name Styrofoam (4.1) |
| ch14/14.5/text.html | #ex-ice-box discussion, “about 7.6 lbs” | written 7.6 lb, the symbol, like “7–10 lb” beside it | the plural s of an English abbreviation has no Chinese form; the unit keeps its symbol (4.4) |
| ch14/14.5/section.json | exercises[cq2].figure.caption: “A jellabiya is worn by many men in Egypt.” | written 许多埃及男子穿着 jellabiya, the garment name kept in the original; the alt text describes the robes in Chinese | a name with no standard Chinese rendering (translate.md 2.7) |
| ch14/14.6/figures.js | sim-house-turnover bulb-count label and topline: the ternary 'one bulb of 100 W' / '… bulbs of 100 W', the `bulb${bulbs === 1 ? '' : 's'}` in the topline, and the order of `fmt(m, 0)`, `fmt(dT.v, 1)`, `fmt(ts.v, 2)` in it | the plural branches collapsed to `${bulbs} 个 100 W 灯泡`, and the topline puts `fmt(ts.v, 2)` (the hours) before `fmt(m, 0)` and `fmt(dT.v, 1)`: 每 … h 使 … kg 空气升温 … °C; two lines of code differ from the source | English plural grammar and English clause order assembled in code (4.1) |
| ch14/14.6/figures.js | sim-sweat label above the jug and topline: `fmt(m, 0)` and `fmt(tmin, 0)` | the two operands stand in the other order: `fmt(tmin, 0) + ' min 内 ' + fmt(m, 0) + ' g'` in the label and 内共 in the topline; two lines of code differ from the source | Chinese puts the time before the amount in a phrase built by code (4.1) |
| ch14/14.6/text.html | #natural-convection, “the blood vessels in the skin expand (dilate)” | the English gloss dropped: 扩张 | a synonym gloss of the English verb; Chinese has the one word 扩张 (4.1, as ch02 2.1 “magnitude or size”) |
| ch14/14.6/text.html | Example 14.7 Strategy, “specific heat at constant pressure” | written 比定压热容 with the specific-heat span on 比 and the pressure span on 压 (比 定 压 热容), both spans in the block | the glossary term 比定压热容 holds pressure inside it, and a span is never dropped (translate.md 5) |

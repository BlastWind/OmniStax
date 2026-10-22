# Config: 大学物理（第2版）, Chapter 11 (translation)

The translation pass of `College Physics 2e` chapter 11 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch11, every page it lists |
| Language | zh-CN |
| Translator | claude-sonnet-5-5, medium effort |
| Terminology | `glossary.zh-CN.json`, read before the first sentence; a new term is added as pending |
| Fidelity | the source's tone, sentences and content; nothing added or removed except the forced scenarios below |
| Humanizer review | deferred to the owner |

## Forced scenarios

Every place where a faithful translation was impossible as the source stands
(translate.md item 4), one row each; `translation-notes.md` carries the same
entry.

### ch11/11.2

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch11/11.2/figures.js | sim-identify legend (PHASES.forEach) | the English plural built from the phase key, `p === 'gas' ? 'gases' : p + 's'`, replaced by the lookup `({ solid: '固体', liquid: '液体', gas: '气体' })[p]`; the one line of code that differs from the source | English grammar in figure code (4.1) |
| ch11/11.2/figures.js | sim-identify topline and readout (list of matching substances) | the list joined with ', ' and ' and ' written with 、 and 和; the suffix 'within its range' written （落在其范围内） | English list grammar built in figure code (4.1) |
| ch11/11.2/figures.js | PRETTY (running-text names of substances) | the English article of 'the Earth’s crust' dropped (地壳); the keys of PRETTY, the select defaults ('聚苯乙烯', '花岗岩', '水（4°C）') and the SUBST names `n` are the same translated strings so the lookups still match | English article with no Chinese form (4.1); SUBST.n is both the display name and the lookup key |
| ch11/11.2/figures.js | sim-ton topline, label and readout small line; sim-identify and sim-reservoir toplines and small lines | English clause order rebuilt: 'a cube N m on a side' → '边长 N m 的立方体', 'N kg of X' → 'N kg X', 'N m³ of X' → 'N m³ 的X', 'the pile of X is r times the volume' → 'X那一堆的体积是另一堆的 r 倍' | Chinese word order in sentences assembled by code (4.1) |
| ch11/11.2/text.html | fig-dam caption | 'Over 1 million people' written 超过 100 万人 (the value is unchanged) | Chinese counts in 万/亿 and has no word for million (4.4), as in ch01/1.2 |

### ch11/11.3

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch11/11.3/figures.js | sim-poke topline (draw): the sentence built from fragments and the `like` clause | English 'A push of F N over a contact d mm across, about the point of a needle, makes a pressure of P Pa.' reordered into 一个 F N 的推力压在宽 d mm 的接触处（约为针尖），产生的压强为 P Pa。, the `like` clause turned from commas into a full-width parenthesis | English clause spliced between two fragments by code; Chinese needs the parenthesis and the verb after the clause (4.1) |
| ch11/11.3/section.json | exercises[p3].prompt, end of the math `$3.00\times 10^{9}\ \text{N/m}^2?$` | the source's closing `?` that sits inside the math run is left out of the math (`$3.00\times 10^{9}\ \text{N/m}^2$`); the question closes with ？ at the end of the Chinese sentence | the source sets its sentence-final punctuation inside `$…$`; Chinese word order puts that math mid-sentence, where a stray `?` would be read as part of the quantity (a typographic slip with no Chinese equivalent) |
| ch11/11.3/text.html | Figure 11.5 sim-head | 'A push, force F, on the skin' written 大小为 力 F 的一个推力压在皮肤上: the force and push spans change order within the sentence | Chinese word order (3.3); every span stays in its block with the same multiset |

### ch11/11.4

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch11/11.4/section.json | exercises[p9].prompt, end of the math `$15.0\ \text{cm}^2.$` | the source's closing full stop that sits inside the math run is left out of the math (`$15.0\ \text{cm}^2$`) | the source sets its sentence-final punctuation inside `$…$`; Chinese word order puts that math mid-sentence, where the stop would be read as part of the quantity (a typographic slip with no Chinese equivalent) |

### ch11/11.5

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch11/11.5/figures.js | sim-brakes choice label and topline; sim-hydraulic topline (force branch); sim-brakes hover name of the pedal | the bare plural '\text{wheel cylinders}' written '\text{轮缸数}' with the options 两个/四个; 四/两 followed by the measure word 个 before 轮缸; the leading literal 'A force of ' written '一个 '; the hover name of the pedal ends on N(Fp) so that no literal follows the last operand | Chinese has no plural, needs a measure word after a numeral and a different word order; English grammar built in code (4.1); the parity tool compares the operand skeleton |
| ch11/11.5/text.html | ex-brakes, the sentence citing Applications of Statics, Including Problem-Solving Strategies | the cited chapter title set in “” (“静力学的应用，包括解题策略”) | Chinese marks a cited title; no words added (as in ch10/10.1) |
| ch11/11.5/text.html | sim-hydraulic and sim-brakes sim-heads; hydraulic-forces and hydraulic-work paragraphs | within a sentence the order of spans differs from the source (for example 'moves a smaller distance than the pedal cylinder' written 轮缸比主缸移动较小的距离; the sim-head's 'the force F2 on the right piston' written 右活塞上向上的力 F2) | Chinese word order (3.3); every span stays in its block with the same multiset |

### ch11/11.6

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch11/11.6/figures.js | sim-manometer topline, the out-of-range sentence | the sentence is built as 'The ' + (balloon\|jar) + ' is ' + X + ' kPa ' + (above\|below) + … + H + ' of ' + f.name; the Chinese puts 高/低 before the number (比大气压高 X kPa) and has no leading 'The ', so the code around the strings is reordered: (气球\|罐) + '比大气压' + (高\|低) + ' ' + X + ' kPa，这将支撑 ' + H + ' 高的' + f.name + '…' | English word order of a sentence assembled from ternaries and numbers; Chinese needs the comparison word ahead of the quantity (4.1) |
| ch11/11.6/text.html | #manometer paragraph 1, 'This simple tube is called a manometer' | the defining sentence writes 液柱压强计 where the glossary has 压强计 (also the target of pressure gauge); the other places keep 压强计 | a collision (4.5): the standard translation of manometer is also that of the pressure gauge the same paragraph has just named, so the sentence would define the word by itself; the more specific term takes the qualified form |

### ch11/11.7

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch11/11.7/figures.js | sim-coin nameLine: `near.join(' and ')` | the English list conjunction ' and ' joining the metals within three percent of a density becomes 和; 'three percent' written 3% | English list grammar in figure code (4.1) |
| ch11/11.7/figures.js | fluidPhrase() and the sentences that use it (sim-cylinder, sim-ship, sim-hydrometer, sim-floating headlines and labels) | the English article phrase 'a fluid of density X kg/m³' and the prepositions around it ('In …', 'floats in …', 'denser than …') become '密度为 X kg/m³ 的流体' with 在……中 / 比……密度更大 wrapped around the same variable | English articles and prepositions built around a phrase chosen by code; the code around it is unchanged (4.1) |
| ch11/11.7/figures.js | sim-ship topline (no-cargo branch): the two generated percentages | a literal `' '` operand is put before the generated number (`'是水的密度的' + (… : ' ' + fmt(f * 100, 1) + '%')`, and `'，所以船体的' + (… : ' ' + fmt(f * 100, 1) + '% ') + '浸没在水中。'`) | Chinese sets a space between a Chinese character and a Latin or numeric run, here a number built by code; the added literal is the one difference of code, as in ch11/11.6 |

### ch11/11.8

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch11/11.8/figures.js | sim-slide-wire topline (match branch) | the possessive built in code (`'which is ' + near.n + '’s.'`) became the plain genitive `'，这正是' + near.n + '的值。'` | English possessive 's after a liquid name has no Chinese suffix (4.1) |
| ch11/11.8/figures.js | sim-slide-wire beyond-the-axis note | the list built with ' at ' and ' and ' became `r.n + '（value N/m）'` joined with '和' | the connective words of a generated English list (4.1) |

### ch11/11.9

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch11/11.9/figures.js | sim-body-pressures listOf and the 'where' sentence | the list joiner ', ' + ' and ' collapsed to '、' + '和'; the 'falls within the range of …' clause rewritten '落在…的范围之内。' | English list grammar built in figure code (4.1) |
| ch11/11.9/figures.js | sim-blood-column topline (generic branch) | 'a point d m below/above the heart' written '距心脏 d m 下方/上方的一点', and the direction word (高/低) moved ahead of the number in '比心脏处高/低 X mm Hg' | Chinese word order in a sentence built by code; the English phrase 'X mm Hg higher/lower than' cannot keep the number first (4.1) |
| ch11/11.9/figures.js | sim-eye-force topline | 'A pressure of' written '一个 … 的压强' and the 'range' fragments given Chinese commas | English article and clause fragments assembled in code (4.1) |
| ch11/11.9/text.html | #blood-pressure paragraph 2, '(to almost 0) … (see Figure 11.34)' | the two adjacent parentheticals merged into （降到几乎为 0，见图 11.34） | Chinese does not set two parentheses back to back; nothing dropped |
| ch11/11.9/text.html | #lungs paragraph 2, 'within them Figure 11.36.' | the bare figure citation written （图 11.36） in parentheses | the source citation has no punctuation; Chinese needs a marker to set it off |
| ch11/11.9/text.html | #eye, fig-tonometer caption credit 'DevelopAll at the Wikipedia Project.' | written （来源：DevelopAll（维基百科项目）） | the credit's 'at the' has no Chinese form; the name is kept, the project name translated (4.4) |
| ch11/11.9/text.html | #skeletal paragraph 1, 'such as in the joints..' | the book's double full stop written as one 。 | a typographic slip of the source with no Chinese equivalent |
| ch11/11.9/section.json | objectives[0] 'Explain the concept of pressure the in human body.'; exercises[p18].prompt missing '?' after (a) | rendered as plain 解释人体内压强的概念。 and the question closed with ？ | grammatical slips of the English that have no Chinese equivalent; meaning unchanged |
| ch11/11.9/text.html | #blood-pressure paragraph 2, #eye paragraphs, #lungs, #bladder, sim-heads | within some sentences the order of data-ref, data-type and data-concept spans differs from the source (for example the position span after the heart and person spans; the area span after the eye) | Chinese word order (3.3); every span stays in its own block with the same multiset |

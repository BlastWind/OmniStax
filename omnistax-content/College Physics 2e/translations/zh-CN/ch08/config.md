# Config: 大学物理（第2版）, Chapter 8 (translation)

The translation pass of `College Physics 2e` chapter 8 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch08, every page it lists |
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
| ch08/intro/text.html | first paragraph, sentences 1 and 2: “the term momentum …” and “gaining and maintaining the momentum to win” | written “动量”（momentum） with the English word in parentheses in the first sentence, and 势头（momentum） in the sports and politics sentence, not 动量 | the passage turns on the everyday English use of momentum (translate.md 4.2, 4.3); 动量 is only the physics term and has no everyday sense, so the second sentence takes 势头 with the English kept beside it |
| ch08/8.1/text.html | second-law, first paragraph: “quantity of motion” | written “运动量”, the concept span motion wrapping 运动 only | 运动量 is one Chinese word for the historical name of momentum; the span count must match the source (wording that differs from the concept term, 3.3) |
| ch08/8.1/text.html | second-law, first paragraph: “Newton actually stated his second law of motion” | written 实际上，牛顿正是用动量来表述牛顿第二定律的; the span wraps 牛顿第二定律 | the glossary term for second law of motion is 牛顿第二定律, which already holds Newton’s name, so “his” is absorbed into it; every span is kept (3.3) |
| ch08/8.1/text.html | ex-football Strategy, the equation and the line after it: “which becomes [equation] when only magnitudes are considered” | written 该定义变为 [equation] 只考虑大小时即如此。 | Chinese cannot close a sentence on a bare “when…” clause after a displayed equation; block order and spans are kept (3.3) |
| ch08/8.1/text.html | ex-football Discussion: “the player’s motion is only slightly affected if he catches the ball” | written with the spans in the order player, ball, player, motion | Chinese word order (3.3); every span stays in its block, same multiset |
| ch08/8.1/text.html | ex-tennis, first paragraph: “What is the average force …, assuming that …” | written with the assumptions first (假设……，那么……是多少？) | Chinese word order for a conditional question; the spans stay in their block (3.3) |
| ch08/8.1/text.html | ex-tennis Strategy, Solution and Discussion: “Newton’s second law”, “force of gravity”, “initial and final velocities” | the “Newton’s second law” span wraps only 定律 in 牛顿第二定律; the force span of “force of gravity” wraps 重力; the velocity span of “initial and final velocities” wraps 速度 in 初、末速度 | Chinese compounds absorb the words the source wraps separately; the inner concept span wraps the word that carries its meaning (3.3) |
| ch08/8.1/section.json | summary_html, last bullet: “the change time” | written 变化时间 | the book’s slip (“change time” for “change in time”) is kept as printed (translate.md 3.2) |
| ch08/8.2/text.html | Making Connections: Take-Home Investigation—Hand Movement and Impulse: “a swimmer doing a belly flop” | rendered for meaning as 肚皮拍水 (the swimmer who lands flat on the belly), with 跳水 for the dive | an English idiom for a flat belly-first entry into water with no Chinese idiom of its own (4.4); 8.3 writes the same 肚皮拍水 |
| ch08/8.2/text.html | same box: “catching a ball while ‘giving’ with the ball” | rendered for meaning as 随球“缓冲”, pulling the hands toward the body | an English idiom for yielding with the ball; no equivalent idiom (4.4) |
| ch08/8.3/figures.js | sim-scatter, target label: (mr.v === 1 ? ' electron mass' : ' electron masses') | plural branch collapsed to the one form: the label is '靶，' + whole(mr.v) + ' 倍电子质量'; the branch code is removed, the code around it stays | English plural grammar in figure code (4.1) |
| ch08/8.3/figures.js | sim-probe, pinned label and hover names: “center of mass, X km out, Y km up”, “the front half, W kg·m/s forward” | written '质心，水平距离 X km，高 Y km' and '前半，向前 W kg·m/s' | Chinese word order and no preposition “out/up” to carry; the numbers keep their order (4.1) |
| ch08/8.3/figures.js | sim-collision topline, sim-scatter toplines, sim-center-of-mass toplines: “at X Mm/s”, “The cars are X m apart”, “Car 1” | written 以 X Mm/s 的速率, 两车相距 X m and 1 号车; the numbers stay in the same order | English phrases built around bare numbers need a classifier or a noun after the number in Chinese (4.1, grammar built in code) |
| ch08/8.3/text.html | #two-cars, #conservation, #directions, #subatomic: sentences carrying several data-concept, data-type or data-ref spans (“The only unbalanced force on each car”, “the total momentum of the two-car system”, “the nucleus of an atom”) | the order of spans inside a sentence differs from the source in places; every span stays in its block with the same multiset | Chinese word order (3.3) |
| ch08/8.3/text.html | #recoil, #conservation: cited section titles “Impulse and Linear Momentum and Force”, “Uniform Circular Motion and Gravitation” | written “冲量”和“线动量与力” and “匀速圆周运动与引力”, the concept span wrapping the first words | a cited title takes the book’s “” convention; the span wraps the morpheme that carries the concept (as in ch01/1.2) |
| ch08/8.3/text.html | #directions, Take-Home Investigation (tennis ball and basketball): the book’s “the basketball ball” | rendered as plain 篮球 | a doubled noun of the English with no Chinese equivalent; the meaning is unchanged (the slip is not kept because Chinese cannot print it, 4.4) |
| ch08/8.3/text.html | #directions, Take-Home Investigation (two tennis balls): “a string about a foot long” | written 一根约一英尺长的细绳 | a unit with no SI equivalent takes the target name where the source prints the word (4.4) |
| ch08/8.3/text.html, ch08/8.3/section.json | #conservation and summary_html, the isolated-system definition | the math ends in \text{.} and is followed by no full stop; the words \text{constant} and \text{isolated system} inside the math are written \text{常量} and \text{孤立系统} | the period is part of the source’s math and is kept byte for byte; words inside \text{…} are translated (translate.md 5) |
| ch08/8.3/section.json | exercises[ap1, ap3, ap5].answer.solution: “(d)”, “(b)”, “(c)” | kept as printed | letters of the choice key, not words (translate.md 5) |

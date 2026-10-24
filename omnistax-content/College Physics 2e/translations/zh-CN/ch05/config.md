# Config: 大学物理（第2版）, Chapter 5 (translation)

The translation pass of `College Physics 2e` chapter 5 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch05, every page it lists |
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
| ch05/intro/text.html | second paragraph, Newton’s laws of motion | written 牛顿<span motion>运动</span><span law>定律</span>: the law span and the motion span swap places, both kept in the same block | Chinese word order (3.3); the glossary row Newton’s laws of motion 牛顿运动定律 |
| ch05/intro/text.html | Figure 5.1 alt ('a white plastic cup') and caption ('a cup that has a hard plastic-like inner lining', twice) | 'cup' of the hip prosthesis written 髋臼杯, the clinical name (alt: 一个白色塑料髋臼杯; caption: 嵌入一个髋臼杯，髋臼杯的内衬是…) instead of the 杯形件 first written; the glossary row cup (of a hip prosthesis) | the source says only 'cup', a word that names nothing by itself in Chinese; 髋臼杯 is what medicine calls this part (translate.md 4.4, a reference with no equivalent), decided at the ch05 merge |
| ch05/5.1/figures.js | sim-interface, label of the touching spots | the branch touching === 1 ? 'the surfaces touch at one high spot, drawn heavy' : 'the surfaces touch at ' + touching + ' high spots, drawn heavy' collapsed to the one form '两个表面在 ' + touching + ' 个凸起处相接触，以粗线画出' | English plural grammar in figure code (4.1) |
| ch05/5.1/figures.js | sim-probe, label of the adhering atoms | the branch hold === 1 ? 'one atom of the tip adheres' : hold + ' atoms of the tip adhere' collapsed to the one form '针尖有 ' + hold + ' 个原子黏附' | English plural grammar in figure code (4.1) |
| ch05/5.1/text.html, ch05/5.1/section.json | spans of a block, e.g. #magnitudes ‘magnitude of the frictional force’, ‘the magnitude of the normal force’ | written 摩擦力的大小, 法向力的大小: the force/normal-force span and the magnitude span swap places; both kept in the same block | Chinese word order (3.3) |
| ch05/5.1/text.html, ch05/5.1/figures.js | ‘kinetic friction force’, ‘static friction force’ (#characteristics) and the summary | written 滑动摩擦 + 力 and 静摩擦 + 力 with the kinetic-friction (static-friction) span on 滑动摩擦 (静摩擦) and the force span on the last character 力 | the source wraps the words kinetic friction and force in separate spans; 滑动摩擦力 is one word, so the force span takes its last character, as 合力 does in earlier sections |
| ch05/5.1/text.html | ‘coefficient of kinetic/static friction’ | written 动摩擦因数, 静摩擦因数 (glossary rows), the kinetic-friction (static-friction) span on 动摩擦 (静摩擦) and 因数 outside it | the glossary row coefficient of kinetic friction is 动摩擦因数 (the GB 3102 name) while kinetic friction is 滑动摩擦力; the span cannot wrap 滑动摩擦力 inside 动摩擦因数 |
| ch05/5.2/figures.js | sim-drag TABLE, bluff() and the 'skydiver' test | names written 翼型, 丰田凯美瑞, 福特福克斯, 本田思域, 法拉利Testarossa, 道奇Ram皮卡, 球体, 悍马H2 SUV, 跳伞者（脚朝下）, 自行车, 跳伞者（水平姿势）, 圆形平板, with the same literals changed in bluff()'s name comparisons and the who.indexOf('skydiver') test (now '跳伞者'); the English article 'a/an' of each name dropped | English grammar in figure code (4.1): the table names are both the lookup keys and the displayed names, with the article built into the string |
| ch05/5.2/figures.js | sim-size text for the small body's label | '0.10 times the length, ' written 0.10 × 长度， so the number stays first as in the code | English phrase built from number + words in figure code (4.1); the Chinese 长度的 0.10 倍 would put a string before the number and change the code's concatenation |
| ch05/5.2/figures.js | partOf() (unused helper) | '1 part in ' + n written '1/' + n | English grammar in figure code (4.1) |
| ch05/5.2/text.html | #terminal, Example 5.2 Strategy, 'the force of gravity (the person’s weight)' | written 重力（即人的重力）, each with its own span as in the source | collision (translate.md 4.5): the glossary maps both force of gravity and weight to 重力, so the parenthetical gloss repeats the term |
| ch05/5.2/text.html | #drag, first sentence 'the force of drag' | written 所受的阻力, the force span wrapping 阻力 | collision (translate.md 4.5): 'force of drag' and 'drag force' are both 阻力, so the word 'force' cannot be rendered apart from the term |
| ch05/5.2/text.html | #size, Haldane quote 'a thousand-yard mine shaft' | written 一千码深的矿井, the printed word yard becoming the Chinese name 码 | unit with no SI equivalent, printed as a word (translate.md 4.4) |
| ch05/5.3/text.html | ex-cable Discussion, 'This is quite a stretch' | translated for meaning as 这确实伸长了不少 | English wordplay on 'stretch' (a great stretch of cable and an exaggeration) that works only in English (translate.md 4.2); the passage does not turn on it, so no English is kept in parentheses |
| ch05/5.3/section.json | exercises[p3] prompt and solution, the pencil 'lead' | the quoted “lead” written 铅笔的“铅” (later mentions in the same exercise shortened to “铅”) instead of 笔芯, and 笔芯 nowhere; the glossary row pencil lead | the book's point is that the pencil “lead” is not lead but graphite; Chinese shares the pun (铅笔的“铅”其实是石墨), so it is kept as a pun and no English is put in parentheses (translate.md 4.2); changed from 笔芯 at the ch05 merge |
| ch05/5.3/figures.js | sim-rod, the mode array and its comparison (L206–207, L219) | ['tension','compression'] and mode === 'tension' written ['拉伸','压缩'] and mode === '拉伸' | the mode strings are both the branch key and the displayed caption (4.1) |

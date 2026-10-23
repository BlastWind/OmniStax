# Config: 大学物理（第2版）, Chapter 9 (translation)

The translation pass of `College Physics 2e` chapter 9 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch09, every page it lists |
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
| ch09/9.2/text.html | #ex-seesaw h3 'Example 9.1 · She Saw Torques On A Seesaw' | rendered 例题 9.1 · 跷跷板上的力矩, the pun on 'seesaw' and 'saw' not kept and the English not added in parentheses | wordplay that works only in English (translate.md 4.2); glossary row 'Example 9.1: She Saw Torques On A Seesaw' fixes the Chinese and says the pun cannot be kept |
| ch09/9.2/text.html | #second-condition, “where net means total” and the equation $$\text{net}\;\ktau = 0$$ | the English word net stays in the quoted sentence; in the equations the word prefix is written \text{合力}/\text{合力矩} and only the subscript _{\text{net}} stays English (standing math rule) | a sentence about an English word of the equation (translate.md 4.3); the word the sentence explains is the one still printed in the equation, so it stays English, and the Chinese of net in prose (合力, 合力矩) is named beside it |
| ch09/9.2/text.html | #second-condition, 'counterclockwise (ccw) torques positive and clockwise (cw) torques negative' | the abbreviations (ccw) and (cw) dropped: 把逆时针力矩称为正，把顺时针力矩称为负 | abbreviations of English letters (translate.md 4.3); glossary rows ccw and cw say the Chinese is written out, so an abbreviation in parentheses would repeat the word |
| ch09/9.3/text.html | #types, second paragraph: the photo's “(cg)” | kept as 重心（cg）, the abbreviation in parentheses, and later 'cg' written 重心 | the abbreviation 'cg' is defined in the sentence and printed on the photo's own labels (translate.md 4.3); elsewhere the glossary writes cg out as 重心 |
| ch09/9.3/section.json | exercises[ap2].figure.alt | the figure's own printed labels Width, Depth and 1” kept in English inside the Chinese alt text | they are text in the image, quoted as printed (translate.md 4.3) |
| ch09/9.4/text.html | #unequal, second paragraph: “the direction of the force … reverses its direction” (two data-concept="vector-direction" spans) | written 力的方向就会反转，变成反向, the second span wrapping 向 of 反向 so both spans stay in the block | Chinese does not repeat the noun in “reverses its direction”; the sentence keeps both spans only by this rewording (3.3 span order, 4.4 idiom) |
| ch09/9.4/figures.js | sim-pole headline (beyond branch) and sim-pivot headline: “The cg is X m beyond the left hand”, “The pivot is X m from the right hand” | written 重心在左手外侧 X m 处 and 支点距右手 X m; the number keeps its place after the noun it measures | English phrases built around bare numbers and prepositions (“beyond”, “from”) need a noun or measure after the number in Chinese (4.1, grammar built in code) |
| ch09/9.4/figures.js | sim-pivot, arms[].name with ‘There is no lever arm ’ + name + ‘, so that torque is zero.’ | names written 到右手, 到重力作用点, 到左手 and the sentence 没有 + name + 的力臂，所以该力矩为零。 | the English sentence joins a preposition phrase (“to the right hand”) to “lever arm”; Chinese takes the phrase as a modifier of 力臂 (4.1, grammar built in code) |
| ch09/9.4/text.html | #strategy, Problem-Solving Strategy step 3: “(represented by the equations … and …, depending on the list of known and unknown factors.” (the book never closes the parenthesis) | written 根据已知因素和未知因素的清单，应用平衡条件之一或两者（由方程 … 和 … 表示）来求解问题, the parenthesis closed after 表示 | the Chinese clause order puts “depending on the list of known and unknown factors” before the parenthesis, so the parenthesis holds only the equations and closes there; the book's unclosed parenthesis cannot be kept in this order (3.3) |
| ch09/9.5/text.html | #machines, sentence on the word machine | “机械”（machine）一词来源于希腊语中意为“帮助把事情变得更容易”的一个词: the English word kept in parentheses | a sentence about the origin of an English word (translate.md 4.3) |
| ch09/9.5/figures.js | sim-wheelbarrow hover name of the centre-of-gravity dot | 'center of gravity of ' + (…) became (…) + '的重心': the leading literal moved after the operand | Chinese word order (figure code built from English phrase, 4.1) |
| ch09/9.5/text.html | #lever paragraphs 2-4, #incline sim-head, #pulleys opening paragraph | within a sentence the order of some spans differs from the source (e.g. 力的大小 for 'the magnitude of the force', 距离的垂直分量 for 'the perpendicular components of the distances', 力的方向 for 'direction of the force'); every span stays in its block with the same multiset | Chinese word order |
| ch09/9.6/text.html | p.lead of #biceps, strategy, sim-head of Figure 9.25 and others | within some sentences the order of the data-ref and data-type spans differs from the source, and a data-ref span stands beside (not inside) the data-type span that names its force, e.g. 肱二头肌所施力的大小 with the ref span before the type span | Chinese word order; every span is kept in its own block with the same multiset |
| ch09/9.6/section.json | exercises[p3].prompt | the book's kneecap (the patella) is written 髌骨（膝盖骨）, the glossary's 髌骨 first and the colloquial name in parentheses | the glossary maps both kneecap and patella to 髌骨, so the two English names cannot be told apart in Chinese (4.5-like collision of two English terms with one Chinese term) |

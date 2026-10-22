# Config: 大学物理（第2版）, Chapter 6 (translation)

The translation pass of `College Physics 2e` chapter 6 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch06, every page it lists |
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
| ch06/intro/text.html | second paragraph, Newton’s laws of motion | written 牛顿<span motion>运动</span><span law>定律</span>: the law span and the motion span swap places, both kept in the same block | Chinese word order (3.3); the glossary row Newton’s laws of motion 牛顿运动定律 |
| ch06/6.1/figures.js | sim-omega, level labels on the revolution lines (k === 1 ? '1 revolution' : k + ' revolutions') | plural branch collapsed to the one form k + ' 圈'; the branch code is removed, the loop around it stays | English grammar in figure code (4.1) |
| ch06/6.1/text.html | rotation-angle, first sentence: ‘the CD (compact disc)’ | written 光盘（compact disc，CD） so that the abbreviation’s letters stay beside the glossary word 光盘 | a parenthesis that spells out an English abbreviation (4.3); the glossary rows CD and compact disc are both 光盘 |
| ch06/6.1/text.html, ch06/intro/text.html | linear-angular and directions: ‘linear <span velocity>velocity</span>’, and ‘rotational <span motion>motion</span>’ in circular-motion; in ch06/intro #curved-motion ‘rotational motion’ and ‘translational motion’ (转动, 平动) | the span wraps the whole Chinese term (线速度, 转动), not only the word that translates ‘velocity’ or ‘motion’; where ‘angular and linear velocities’ sits in one <em> the span wraps 角速度和线速度 | Chinese word order and compounding (the glossary terms linear velocity 线速度 and rotational motion 转动 are single words; 3.3) |
| ch06/6.2/text.html | #direction, second paragraph: “centripetal means ‘toward the center’ or ‘center seeking.’” | written “向心”的意思是“朝向中心”或“寻求中心”, with no English in parentheses | a sentence about the meaning of an English word (4.3); 向心 already means “toward the center”, so the gloss stays as printed and the English word is not needed |
| ch06/6.2/text.html | #direction sim-triangles sim-head; #examples sim-curve and sim-centrifuge sim-heads; #magnitude first paragraph and paragraph 3 (‘express the magnitude of the centripetal acceleration’, written 表示向心加速度的大小, the centripetal-acceleration span before the magnitude span) | the order of data-ref / data-type spans differs from the source (e.g. the angle span moved after 它; the two velocities span before the difference span) | Chinese word order (3.3); every span stays in its block, same multiset |
| ch06/6.3/text.html, ch06/6.3/section.json | fig-race-track data-original-caption and figures[fig-race-track].original_caption, ‘(called cutting the corner)’ | written （称为抄近路）, the English idiom not kept in parentheses | an English idiom translated for meaning (4.4); 抄近路 is the Chinese idiom for the same driving line |
| ch06/6.3/text.html | #level-curve (Example 6.4, strategy for (b)) and #ideal-speed (solution), lead-ins ‘Using the first expression for F_c from the equation’, ‘Starting with … we get’ | written 利用方程中 F_c 的第一个表达式 before the display, and 由 … 得到 around the two displays | English lead-in sentences that run into a display equation cannot keep their structure in Chinese; no content added or dropped (3.1) |
| ch06/6.3/text.html | #centripetal-force, #level-curve, #banked, ‘net force’, ‘net external force’ | the force span wraps 合力 (not 力 alone) where the source span wraps only the word force of net force; the span is kept in its block | Chinese has the one word 合力 for net force (glossary), so the span wraps the whole word (as in earlier sections) |
| ch06/6.3/text.html, ch06/6.6/text.html | #centripetal-force, first paragraph, ‘the force of Earth’s gravity on the Moon’; ch06/6.6 #simplicity, ‘that single equation for the gravitational force’ (written 关于<span force>引力</span>的单一方程) | written 地球对月球的引力, the force span wrapping 引力; the word gravity has no span of its own, as in the source | collision (translate.md 4.5): ‘force of gravity’ between bodies is the one word 引力 (glossary rows gravitational force and gravitational attraction), so ‘force’ cannot be rendered apart from the term, as 阻力 in ch05/5.2; the sentence read 地球重力对月球的力 before the ch06 merge |
| ch06/6.3/text.html | #level-curve, #radius, #banked, sim-heads (several sentences) | within some sentences the order of spans differs from the source (e.g. cf before vm in ‘the magnitude of the centripetal force’, friction span before the centripetal-force span in ‘in the absence of friction’); every span is kept in its block with the same multiset | Chinese word order (3.3) |
| ch06/6.3/text.html, ch06/6.3/section.json | coefficient of friction / static coefficient of friction | the friction span wraps 摩擦 in 摩擦因数 and 静摩擦因数, as 5.1 does | the term is one word in Chinese; the span wraps the part that names the concept |
| ch06/6.3/section.json | exercises[p3].answer.hint | ‘meters per second’ written 米每秒, the unit word | unit named in words in the source (translate.md 5: symbols are kept only where the source prints a symbol) |
| ch06/6.4/text.html | #frames, the sentence ending ‘Dynamics: Newton’s Laws of Motion’ (the source prints no full stop before ‘The car is a’) | the chapter title set in “” as “动力学：牛顿运动定律” and a 。 written after it | the source runs two sentences together without a full stop (a typographical slip); Chinese cannot join them, and no words are added (translate.md 4.4); a cited chapter title takes the book’s “” convention (changed from 《》 at the ch06 merge) |
| ch06/6.4/text.html | #centrifugal, ‘<strong> (</strong>not to be confused with … <strong>)</strong>’ | written <strong>（</strong>不要与<span>向心力</span>混淆<strong>）</strong>, the closing parenthesis after 混淆 | Chinese word order puts the verb 混淆 after the object; the two strong marks keep their positions as wrappers of the parentheses (3.3) |
| ch06/6.4/text.html | #frames, #centrifugal, #coriolis, sim-head of sim-merry and sim-centrifuge | order of data-concept / data-ref spans within a sentence differs from the source (e.g. 牛顿<span motion>运动</span><span law>定律</span>; <span particles>粒子</span>的<span inertia>惯性</span>带着<span particles>它们</span>) | Chinese word order (3.3); every span is kept in its block with the same multiset |
| ch06/6.4/figures.js | sim-cyclone panel and topline | ‘Each parcel …’ / ‘so it …’ clause strings written as full Chinese sentences; the leading space of ' The drawing holds four complete turns and no more.' dropped | English sentence joining by spaces has no Chinese form (4.1) |
| ch06/6.4/figures.js | sim-turn headline and sim-merry headline | operands kept in source order but ‘round the bend’ → 转过, ‘the driver … in a straight line’ → 沿直线前进了; ‘across the seat’ folded into the verb phrase | English prepositional phrases built into code strings have no word-for-word Chinese form (4.1) |
| ch06/6.6/figures.js | sim-frames headline (loops branch), lines 339–341 | the four-way English branch ‘not once’ / ‘once’ / ‘twice’ / N + ' times' collapsed to loops + ' 次'; the operand fmt(t - t0, 1) moved before the count (已折返 … 次 after 在最近 … y 内); the words not once, once and twice are written 0 次, 1 次, 2 次 by the same expression | English grammar in figure code (4.1): count words built by rule |
| ch06/6.6/text.html | #parent-mass note, ‘Einstein’s general theory of relativity’ | written 爱因斯坦的广义相对论理论: the relativity span on 相对论 and the theory span on 理论 kept as two spans | collision of the term with its own name (as 4.8): 相对论 already contains 论, the source has both spans in the sentence |

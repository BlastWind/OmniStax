# Config: 大学物理（第2版）, Chapter 10 (translation)

The translation pass of `College Physics 2e` chapter 10 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch10, every page it lists |
| Language | zh-CN |
| Translator | claude-sonnet-5-5, medium effort |
| Terminology | `glossary.zh-CN.json`, read before the first sentence; a new term is added as pending |
| Fidelity | the source's tone, sentences and content; nothing added or removed except the forced scenarios below |
| Humanizer review | deferred to the owner |

## Forced scenarios

Every place where a faithful translation was impossible as the source stands
(translate.md item 4), one row each; `translation-notes.md` carries the same
entry.

### ch10/10.1

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch10/10.1/figures.js | sim-uniform, sim-spin-up, sim-accelerations and sim-motorcycle toplines | openings “After t s” and “At t s” written 经过 t s，… and 在 t s 时…; “is”/“are” agreement and “turns at” rewritten as Chinese clauses with the operands kept in source order | English clause grammar assembled in figure code (4.1) |
| ch10/10.1/figures.js | sim-uniform and sim-accelerations vector labels | “ (arrow shortened)” and “ (shortened)” written （箭头已缩短） and （已缩短） without the leading space | the English space before a parenthetical has no Chinese form (4.1) |
| ch10/10.1/text.html | #uniform-circular-motion, #tangential-acceleration: the cited chapter title Uniform Circular Motion and Gravitation | set as “匀速圆周运动与引力” with the concept span wrapping 匀速圆周运动 only | a cited title takes the book's “” convention; the span wraps the morpheme that carries the concept (as in ch01/1.2, ch08/8.3) |

### ch10/10.2

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch10/10.2/figures.js | sim-fly headline, both branches | “times” (gone round N times) written 圈 (转了 N 圈); no plural or article branch | an English plural noun naming a count (4.1) |
| ch10/10.2/figures.js | sim-reel and sim-fly headlines | operand order of the English clauses follows Chinese word order (“After T s the reel spins at …” becomes 经过 T s，渔线轮以 … 转动); rev stays as the unit symbol | Chinese word order of sentences assembled in code (4.1) |
| ch10/10.2/text.html | #rotational-kinematics, #four-equations, #strategy, #ex-reel, #microwave | within several sentences the order of the data-concept spans differs from the source (不考虑力或质量的运动描述; 以 6.0 转每分转动; 放出处距其转轴的半径为 4.50 cm); every span stays in its block with the same multiset | Chinese word order (3.3) |

### ch10/10.3

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch10/10.3/figures.js | sim-bike-wheel topline, sim-point-mass topline | operands reordered (M, r, F in the bike-wheel done branch; r, m, F in the point-mass sentence) and the sentences recast ('在质量为 M kg 的车轮上，距车轴 r m 处施加 F N 的拉力…') | Chinese word order of sentences assembled in code (4.1) |
| ch10/10.3/figures.js | sim-inertias topline | the a/an article chosen by /^[aeiou]/i collapsed to nothing, the replaced fragments “ (or disk)” and “ (or ring)” written （或圆盘） and （或圆环）, and the sentence recast as '质量为 M kg 的<label>，其转动惯量为 …' | English article built from a regular expression (4.1) |
| ch10/10.3/figures.js | sim-merry-go-round topline | the “who” fragment recast as a clause ending in 时，('有一个 m kg 的孩子坐在距圆心 r m 处时，' / '平台上没有人时，') so that the next sentence follows it | Chinese word order of a sentence assembled in code (4.1) |
| ch10/10.3/section.json | exercises[p11].answer.solution | “> 50,000 gs” written “大于 50,000 g”, the English plural s of the symbol g dropped | English plural of a unit symbol (4.1) |
| ch10/10.3/text.html | point-mass paragraph, the sim-heads of Figures 10.10, 10.11 and 10.13, Solution for (b) and Discussion of Example 10.7 | the order of spans inside a sentence differs from the source (the force span before the point-mass span, cord before pivot, “the total moment of inertia” with its type span) | Chinese word order (3.3) |
| ch10/10.3/text.html | moment-of-inertia paragraph, “a point mass” spans | the mass span inside “a point mass” wraps the whole 质点, and the ref span of “a point mass m” is 一个质点 with the mass span nested around 质点 | 质点 is one word that already contains the mass; the nesting of the source is kept (3.3) |

### ch10/10.4

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch10/10.4/text.html | #rotational-kinetic-energy, the sim-disk-work sim-head, Examples 10.8 and 10.9, the Figure 10.21 sim-head, #rolling, #helicopter (“in time to avoid a crash”, “gravitational energy”) | spans reordered inside their sentences (仅适用于转动的动能定理; 力矩随角度变化的图线下的面积; the person, force and rotation spans before the work span in the problem statements); “enough energy cannot be supplied in time to avoid a crash” written 在避免坠毁所要求的时间内，无法提供足够的能量 with the time span on 时间; “gravitational energy” written 重力势能 with the energy span on 势能 | Chinese word order (3.3); Chinese has no “in time to avoid” construction that keeps the span, and 重力能量 is not Chinese; every span stays in its block |
| ch10/10.4/section.json | exercises[cyu1].answer.solution: “An example of both kinetic and translational kinetic energy” | kept literally as 动能和平动动能 | an error of the book stays (translate.md 3.2); the sentence means rotational and translational kinetic energy |
| ch10/10.4/section.json | exercises[p9].prompt: “by contacting the muscles in the back of the upper leg” | written 通过收缩大腿后侧的肌肉 | the book's “contacting” is a misprint for “contracting”; a literal 接触 would not read (owner item) |
| ch10/10.4/figures.js | sim-disk-work topline (both branches), sim-grindstone topline (at-rest branch), sim-cans-race topline (first branch) | operand order changed: “A force of F N at r m from the axis” written 距转轴 r m 处 F N 的力, “with F N at r m from the axle” written 在距转轴 r m 处用 F N 的力, “h m above the bottom of a θ° incline” written 比 θ° 斜面的底端高 h m | Chinese word order; the English phrases cannot be kept in sequence (4.1) |
| ch10/10.4/figures.js | sim-cans-race topline (done branch) and readout small line | the article in “the ” + l3.name dropped and the clauses written '稀汤随后，速率为 …；' + l3.name + '最后，速率为 …'; the readout line “the ” + l3.name written '到达底端时，' + l3.name + '已把 …' | English article spliced onto a name in code (4.1) |

### ch10/10.5

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch10/10.5/text.html | #ex-lazy-susan, Example 10.12 first sentence: “often called a lazy Susan” | written 常被称为 lazy Susan, the English name kept inside the span | a sentence about what English speakers call the object; the name has no Chinese counterpart besides the description 旋转餐盘 (4.3) |
| ch10/10.5/section.json | exercises[ap5, ap6].figure.caption | the quoted labels of the picture (“Child”, “Top View”, “Moon”, “A”, “B”, “Planet”) left in English inside “” | the caption describes text printed in the source image, which the app serves unchanged for a translation (4.3) |
| ch10/10.5/section.json | exercises[cq13].figure.caption | “rifling” kept in parentheses after 膛线 at its first mention | the sentence explains that the grooves are named after rifles, which works only in English (4.3) |

### ch10/10.6

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch10/10.6/figures.js | sim-percussion bodies[].pivot and the two comparisons b.pivot === 'nail', lab.add(b.pivot, …) | the keys 'nail' and 'hand' of the body table, compared in code and drawn as the pivot label, are written 钉子 and 手 in the table and in both comparisons; the figure ids F.ref('nail') and F.ref('hand') stay | one English word is both a code key and a reader-visible label; translating it in all three places keeps the code's structure and shows the Chinese label (4.1) |
| ch10/10.6/figures.js | sim-percussion topline | “Struck X m from the hand, WHERE, the racquet pulls the hand backward with Y of the ball’s force” written with the strike as the subject of a passive (球拍在离手 X m 处被击中，WHERE，它向后拉手，力是球的力的 Y 倍) | Chinese word order of a sentence assembled in code (4.1) |

### ch10/10.7

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch10/10.7/text.html, ch10/10.7/section.json | #gyroscope second paragraph and summary_html third bullet: “Polaris, the North Star” | written 北极星（Polaris）, the Latin name kept in parentheses | two English names for one star where the glossary has one Chinese name for both; the second name is kept so neither is dropped (4.3) |
| ch10/10.7/section.json, ch10/10.7/text.html | figures[sim-right-hand-rule].original_caption and data-original-caption: “The direction of angular velocity ω size and angular momentum L” | the book's slip (“ω size”) rendered literally as 角速度 ω 大小和角动量 L 的方向 | an error of the book stays (translate.md 3.2) |
| ch10/10.7/text.html | #gyroscope first paragraph (“the direction of the torque is changed, but not its magnitude”), #bike-wheel (“a change in angular momentum $\kL$”) | both slips kept as printed (力矩的方向改变了; 角动量的变化 $\kL$) | an error of the book stays (translate.md 3.2) |
| ch10/10.7/text.html | #right-hand-rule, #torque-direction, #bike-wheel, #gyroscope and the sim-heads of Figures 10.37 to 10.40 | the order of spans inside a sentence differs from the source (角动量的方向, 力矩的方向, 沿力矩的方向) | Chinese word order; every span stays in its block (3.3) |
| ch10/10.7/figures.js | sim-torque-direction topline | “A 50 N push at the rim, 2.0 m from the axis, makes a torque of 100 N·m pointing up out of / down through the platform” rebuilt as '50 N 的推力作用在边缘，距转轴 2.0 m，产生大小为 100 N·m 的力矩，方向向上，指出/向下，穿过平台', the same numbers in the same order | English clause order and a participle built from a branch (4.1) |
| ch10/10.7/figures.js | sim-gyroscope readout: \text{at}\ 30^\circ and \text{at a tilt of}\ 30^\circ | rewritten '\text{在}\ 30^\circ\ \text{时}' and '\text{在倾斜}\ 30^\circ\ \text{时}', the \text{} word split into a prefix and a suffix around the number | Chinese puts 在…时 around the value; English grammar in figure code (4.1) |
| ch10/10.7/figures.js | sim-bike-wheel topline, sim-gyroscope headline and readout small lines | “After 0.40 s of pushing the axis has swung 23° toward her” written 推了 0.40 s 后，转轴已朝向她摆动了 23°; “drawn 6 times slower than life” written 图中画得比实际慢 6 倍; “at one fifth of their true rate” written 以真实转速的五分之一 | Chinese word order around the interpolated numbers (4.1) |

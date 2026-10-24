# Config: 大学物理（第2版）, Chapter 25 (translation)

The translation pass of `College Physics 2e` chapter 25 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch25, every page it lists |
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
| ch25/25.2/figures.js | sim-rough-and-smooth readout small line: the observer counts with the plural branches `st.seenA === 1 ? 'reaches' : 'reach'` and the same for `seenB` | both branches removed; the sentence is one Chinese form (九条光线中有 N 条到达 … 处的观察者) | English grammar in figure code (4.1) |
| ch25/25.2/figures.js | sim-rough-and-smooth readout `\text{…}`: the clause “, tilted N° at the middle patch” (comma written full-width ，), which sits in a template literal nested in the TeX | the words are translated in place (`\text{ 在中间那一小块处${tilt >= 0.5 ? `，倾斜 ${fmt(tilt, 0)}°` : ''}}`); the parity tool reports the line as a code change | words of a readout's `\text{…}` (translate.md 5, figures.js item 4) inside a nested template literal, which the checker reads as code rather than as a changed string |
| ch25/25.3/text.html | #refraction, boxed note “Speed of Light”: “Einstein’s theory of relativity” | written 爱因斯坦的相对论这一理论, the relativity span on 相对论 and the theory span on 理论 | 相对论 already contains 论, so 相对论理论 would double it (as in 1.1 models); both spans stay in their block |
| ch25/25.3/text.html | #speed-of-light and #law-of-refraction: “law of refraction” and “indices of refraction” | written 折射定律 with the refraction span on 折射 and the law span on 定律, and 折射率 with the refraction span on 折射 only and 率 outside it | the glossary terms are single Chinese words, so the two English spans each wrap one morpheme of them; no span of the source is dropped or merged (translate.md 5) |
| ch25/25.3/figures.js | sim-michelson topline: `names[faces] \|\| faces + ' eighths'`, with `names = ['', 'one eighth', 'two eighths']` | `names` holds 八分之一 and 八分之二, the fallback is `'八分之' + faces`, and 圈 follows in the sentence | the English plural built in code (4.1); Chinese says 八分之N圈 |
| ch25/25.4/figures.js | sim-porro-prisms topline: the list of angles joined by `', '` and `' and '` | the separators are `'、'` and `' 和 '` | English grammar in figure code (4.1): the conjunction is built in code |
| ch25/25.4/figures.js | sim-diamond readout small line: “totally reflected N time/times” (`nTotal === 1 ? 'time' : 'times'`) | the branch collapsed to 次 and removed | English grammar in figure code (4.1) |
| ch25/25.5/figures.js | sim-spectrum-index topline: “is seen as ${colorName(L)}”, with `colorName` returning a bare colour word | `colorName` returns the bare Chinese word (紫, 蓝, 绿, 黄, 橙, 红) and the sentence appends 色 (是${colorName(L)}色) | English prints the colour as a bare word in a sentence; Chinese needs 色 after it, and the word is built in code (4.1, as in 26.3) |
| ch25/25.6/text.html | #converging-lens, second paragraph: “The word lens derives from the Latin word for a lentil bean” | written <em>透镜</em>（lens）一词源自拉丁语中表示扁豆的词, the English word kept in parentheses after the emphasised Chinese term | a sentence about an English word and its Latin origin (translate.md 4.3) |
| ch25/25.6/text.html | #lens-power, Example 25.5 Discussion: “It is an unfortunate fact that the word “power” is used for two completely different concepts” | written 令人遗憾的是，英语用“power”一词（功率、光焦度）来表示两个完全不同的概念, the English word kept with both Chinese terms | a sentence about the English word power, which Chinese distinguishes as 功率 and 光焦度 (translate.md 4.3 and 4.5) |
| ch25/25.6/section.json | notes: “the fourth problem-solving step’s “alist” is written “a list”” | written 解题策略第四步中的“alist”写作“a list”, the two English spellings kept | a sentence about English spelling, a misprint of the English edition (translate.md 4.3) |
| ch25/25.6/figures.js | sim-image-by-lens headlines of cases 1 to 3: “… ${m} times as tall” | written 高度是物体的 N 倍 | the English comparison leaves its referent (the object) implicit; Chinese 是…的 N 倍 needs it stated (4.1, grammar built in code) |
| ch25/25.7/text.html | #flat-mirror, #mirror-focal-length, #mirror-cases, #ex-solar-trough: flat, concave, convex, spherical and parabolic mirror, makeup mirror, security mirror, dental mirror | the data-concept="mirror" span wraps only the morpheme that carries “mirror” in the glossary compound (平<面镜>, 凹<面镜>, 凸<面镜>, 球<面镜>, 抛物<面镜>, 安防凸<面镜>, 化妆<镜>, 牙科<口镜>) | the glossary renders each as one Chinese word and the source's span wraps only “mirror”; no span can be dropped or merged (translate.md 5), as 运动<学> in ch02/2.8 |
| ch25/25.7/text.html | #mirror-focal-length, #mirror-cases, #ex-concave-reflector, #ex-convex-mirror: the distance span in “focal distance”, “image distance” and “object distance” | the span wraps only 距 of 焦距, 像距 and 物距 (焦<距>, 像<距>, 物<距>); where the source's span wraps “distance” alone beside the focal-length concept, it wraps the whole 焦距 | the glossary fixes 焦距, 像距 and 物距 as one word each, while the source marks “distance” inside them as its own span |
| ch25/25.7/text.html | #ex-solar-trough, Example 25.10 Strategy: “Part (a) is related to the current topic” | the span data-concept="electric-current" is kept around the word that translates current: <span>当前</span>主题 | the source's span tags the ordinary adjective current (present) as the concept electric-current, a tagging slip; a span is never dropped (translate.md 5), so it wraps the Chinese word that renders current |
| ch25/25.7/text.html | Figure 25.44 caption: “(b) Security mirrors are convex, producing a smaller, upright image” | written （b）安防凸面镜产生较小的正立的像, “are convex” not repeated | the glossary term security mirror is 安防凸面镜, which already says convex, so the predicate would repeat the term's own morpheme (a collision of a term with its predicate, 4.5) |
| ch25/25.7/figures.js | sim-mirror-images toplines of cases 1 to 3: “… ${m} times as tall” | written 像高是物高的 N 倍 | the English comparison leaves its referent (the object) implicit; Chinese needs it stated, and 像高 and 物高 are glossary rows (4.1, grammar built in code) |

# Config: 大学物理（第2版）, Chapter 16 (translation)

The translation pass of `College Physics 2e` chapter 16 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch16, every page it lists |
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
| ch16/16.1/text.html | #hookes-law, first paragraph: “the name was given to this relationship between force and displacement was Hooke’s law” | the book’s garbled clause rendered for its evident meaning: 这种关系有了一个名称，叫作胡克定律 | the English sentence is ungrammatical as printed (two finite verbs); a literal Chinese rendering would be unreadable (3.1, target grammar forces it) |
| ch16/16.1/text.html | #restoring-force, #elastic-energy and the #hookes-law example Discussion: “the net force on it is zero”, “dissipative forces”, “applied force”, “average force”, “frictional forces” | written 所受的合力为零, 耗散力, 外加力, 平均力 and 摩擦力 with the force span wrapping 力 only (in 合力 the concept span sits on 力 inside the type span of 合力) | the source spans wrap the noun force alone; Chinese compounds fuse the adjective and 力 into one word, and a span is never dropped (3.3, as in ch02/2.8 and ch08/8.1) |
| ch16/16.2/figures.js | sim-count headline, not-yet-done branch: `(n === 1 ? ' cycle has' : ' cycles have') + ' been completed so far, in ' + t + ' s'` | the plural branch collapsed to the one Chinese form `'在 t s 内，已完成 n 个循环。'` and the code around it rewritten to match; the done branch keeps its structure and reads `N 个循环用时 t s，频率为每秒 f 个循环。` | English plural grammar built in figure code (4.1) |
| ch16/16.2/figures.js | sim-count counter label: `text(ctx, n === 1 ? 'cycle completed' : 'cycles completed', …)` | the singular/plural pair collapsed to the one form '已完成的循环'; the `n === 1` test is removed | English plural grammar built in figure code (4.1) |
| ch16/16.2/text.html | #frequency: “Note that a vibration can be a single or multiple event, whereas oscillations are usually repetitive …” | vibration and oscillation both read 振动 (the chapter decision), so the contrast is kept by giving the English in parentheses: 一次振动（vibration）…而振动（oscillation）… | a collision of two terms the book distinguishes (4.5); 振荡, the other candidate for oscillation, is excluded by the chapter decision (4.2, 4.3) |
| ch16/16.3/figures.js | sim-shm-xva readout (the line with `\quad\text{at } \kt = …`) | `\text{at }` written `\text{在 }` and `\ \text{时}` appended after the time `\kt = … \text{s}` | the English preposition before a quantity has no Chinese counterpart; the frame 在…时 needs a closing word, and the words inside \text{…} are translated (5) |
| ch16/16.4/figures.js | sim-measure-g counter label: `text(ctx, n === 1 ? 'swing completed' : 'swings completed', …)` | plural branch collapsed to the one form '已完成的摆动'; the `n === 1` test is removed | English plural grammar built in figure code (4.1) |
| ch16/16.4/figures.js | sim-measure-g headline: `n + (n === 1 ? ' swing has' : ' swings have') + ' been completed so far, in …'` | plural branch collapsed; the sentence reads '到目前为止，已完成 ' + n + ' 次摆动，用时 …' with the count inside the Chinese sentence | English plural grammar built in figure code (4.1) |
| ch16/16.7/section.json | notes: the sentence about the glossary’s two-word spelling “over damping” and “under damping” against the text’s “overdamped” and “underdamped” | the English words kept, with the Chinese terms in parentheses | a sentence about English spelling itself (4.3) |
| ch16/16.8/figures.js | sim-resonance legend: `r.label + ' damping'`; choice option labels | the legend line written `r.label + '阻尼'` (弱阻尼, 中阻尼, 强阻尼); the option labels are the bare 弱, 中, 强 under the slider name 阻尼 | English adjective-before-noun built in code; Chinese word order (4.1) |
| ch16/16.8/figures.js | sim-resonance and sim-driven-energy headlines: “swings X cm either way” | written 向两边各摆动 X cm; “The ball is N° behind the finger” kept in order | the idiom “either way” has no fixed Chinese equivalent, translated for meaning (4.4) |
| ch16/16.8/figures.js | sim-driven-energy unit string and slider unit: “J each second” | written 焦耳每秒 (unit word); J in readouts and headlines stays the symbol | a unit string built from an English phrase in a control’s unit field (4.4) |
| ch16/16.8/section.json | exercises[cq1].prompt: “route step” (walk out of step) | written “便步”（不齐步）, the military term with the book’s gloss kept | a military idiom translated for meaning (4.4) |
| ch16/16.8/text.html | #resonance-everywhere, the car suspension sentence: “finely engineered shock absorbers, which ordinarily convert mechanical energy to thermal energy almost as fast as it comes in” | kept as one sentence with the relative clause turned into a main clause with 它们 | Chinese grammar does not carry the long English relative clause (3.1, target grammar forces it) |

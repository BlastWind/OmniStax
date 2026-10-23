# Config: 大学物理（第2版）, Chapter 12 (translation)

The translation pass of `College Physics 2e` chapter 12 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch12, every page it lists |
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
| ch12/12.2/figures.js | sim-bernoulli topline (level, still and non-level branches) | the English “its pressure falls/rises/stays by X” written 压强降低/升高/不变 X (the word `chg` carries 降低/升高/不变), “from A to B” written A 降低到 B / A 升高到 B; the operands reordered in the code (点 2 比点 1 高/低 X m, and the pair of pressures before the verb in the non-level branch) | English verb forms built in code (4.1); the Chinese verb takes the direction word directly and places the comparison and the verb differently. Two lines of code differ from the source |
| ch12/12.2/figures.js | sim-wing-sail topline | the operands interleaved (`a`, `vFast`, `b`, `vSlow` in the order 在机翼上方以 72 m/s、在机翼下方以 60 m/s); the push noun phrase moved after 每平方米受到 N 的; the “higher/lower than” clause written 比…高/低 | English clause order assembled in code (4.1) cannot be kept in Chinese. One line of code differs from the source |
| ch12/12.4/text.html | section laminar-viscosity, second paragraph: “Turbulent flow, or turbulence,” | collapsed to one bold 湍流 (the span of turbulent-flow); the alternative name “turbulence” is not written out | the glossary gives turbulent flow and turbulence the one target 湍流, so the sentence cannot name two words (4.5, a collision of targets) |
| ch12/12.4/figures.js | sim-water-main, label above the houses and topline: `n === 1 ? ' house drawing' : ' houses drawing'`, `n === 1 ? 'house draws' : 'houses draw'` | the plural branches dropped; the label reads n + ' 户用水，每户 20.0 L/min' and the topline '${n} 户用水，使 … 流过干管' | English plural grammar in figure code (4.1). One line of code differs from the source |
| ch12/12.4/figures.js | sim-viscosity-plates topline, fluid labels and hover names: `fl.name.split(',')[0]` | the split character in the literal changed from ',' to '，' (and ', η = ' to '，η = ', ': ' to '：') in the fluid labels and hover names | the code cuts the fluid name before its temperature at the English comma; the translated names (水，20 °C) carry a full-width comma (4.1) |
| ch12/12.5/figures.js | sim-turbulence topline, `stateOf` and the non-uniform branch: “the flow is ” + state with the states “laminar” / “turbulent” / “unstable, X at this moment”; “where plaque narrows the vessel to r mm it is N” | rebuilt as '流动' + state with the states 是层流 / 是湍流 / 不稳定，此时刻为层流或湍流 (the copula moved into the state string) and 在斑块使血管变窄至 r mm 处，雷诺数为 N; the concatenation in `stateOf` is the one line of code that differs from the source | English grammar assembled in figure code (4.1): the copula, the pronoun “it” and the relative “where” have no Chinese counterpart |
| ch12/12.5/figures.js | sim-turbulence FLUIDS names, readout small line and the Q special label: “whole blood at 37 °C”, “… is ” + name + “ in Table 12.1.”, “N_R = N in the narrow part” | written 37 °C 的全血, '… 即表 12.1 中的 ' + name + '。' and 'N_R = N，窄处' | Chinese word order of phrases assembled from parts in code (4.1) |
| ch12/12.5/text.html | #checking-flow Take-Home Experiment: “dividing the total length by the number of breaths” | written 总时长, the concept span length wrapping 时长 | the book says length for a duration of time; Chinese 长度 would name a distance (4.4) |
| ch12/12.6/figures.js | sim-terminal MATS array and the headline built from it | the English article ('An'/'A') of each material is no longer used; the material name is the full noun phrase (冰弹珠, 玻璃弹珠, 铝弹珠, 钢弹珠, 铅弹珠) and the headline is built in Chinese order, '半径为 R mm 的' + noun, with a new constant whoR for the radius phrase; two lines of code differ from the source | English a/an and noun-phrase order in figure code (4.1) |
| ch12/12.6/figures.js | sim-wake and sim-terminal hover names built around `f.name` | the fluid name placed where Chinese needs it ('球，在' + f.name + '中向右运动', f.name + '以 … m/s 的速率流过球') instead of at the end; one trailing concatenation removed from the source line | strings concatenated in English word order in figure code (4.1) |
| ch12/12.6/text.html | Take-Home Experiment eyebrow “Don’t Lose Your Marbles” | 居家实验：别丢了你的弹珠, the idiom “lose your marbles” and its pun on the marble of the experiment carried only by 弹珠, no English in parentheses | wordplay that works only in English (4.2); the glossary row already fixes this rendering |
| ch12/12.7/text.html | section diffusion, first paragraph: “something fishy about the ice cube” | rendered 有点“腥”（fishy） with the English kept in parentheses | wordplay: fishy means both suspicious and smelling of fish, and the next sentences turn on the odor (4.2) |
| ch12/12.7/figures.js | sim-random-walk hover names: “molecule N, X unit from the start” | written '分子 N，距起点 X unit'; the code line is reordered | English phrase order in figure code (4.1). One line of code differs from the source |
| ch12/12.7/figures.js | sim-random-walk TABLE, legend, headline and readout small line; sim-concentration headline and readout; sim-membrane KINDS, legend, headline: “three ” + plural, “N molecules”, “to the right/left”, “small/medium/large molecules”, lists joined with ', ' and ' and ' | written 三个 + the plural string, 'N 个分子', '向' + (diff > 0 ? '右' : '左'), 小分子/中等分子/大分子 (the appended word “molecules” dropped), lists joined with 、 and 和, “times” written 倍 | English plural, article and list grammar built in figure code (4.1); the Chinese measure word and conjunction replace it |

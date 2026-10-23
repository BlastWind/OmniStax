# Config: 大学物理（第2版）, Chapter 31 (translation)

The translation pass of `College Physics 2e` chapter 31 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch31, every page it lists |
| Language | zh-CN |
| Translator | claude-sonnet-5-5, medium effort |
| Terminology | `glossary.zh-CN.json`, read before the first sentence; a new term is added as pending |
| Fidelity | the source's tone, sentences and content; nothing added or removed except the forced scenarios below |
| Humanizer review | deferred to the owner |

## Forced scenarios

Every place where a faithful translation was impossible as the source stands
(translate.md item 4), one row each; `translation-notes.md` carries the same
entry.

### ch31/31.1

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch31/31.1/text.html | #alpha-beta-gamma, first paragraph and the sim-head of sim-rays-in-field: “charge to mass ratio” (an electric-charge span and a mass span) | written 电荷与质量之比, the electric-charge span on 电荷 and the mass span on 质量; the plain occurrence of the next paragraph (“mass and charge-to-mass ratio”) is the glossary 比荷 | the glossary term 比荷 is one word and cannot carry the two spans of the source; a span is never dropped or merged (translate.md 5) |

### ch31/31.2

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch31/31.2/figures.js | sim-geiger-tube, counter label: `count === 1 ? 'count' : 'counts'` | the branch is collapsed to the one form 计数 and the conditional is removed | English singular and plural grammar in figure code (4.1) |
| ch31/31.2/figures.js | sim-photomultiplier topline: `' photoelectron' + (a === 1 ? '' : 's')` | the plural branch is removed; the sentence reads 六个倍增极把 a 个光电子倍增为阳极处的 out 个电子。 | English plural grammar in figure code (4.1) |
| ch31/31.2/figures.js | sim-photomultiplier hover names: `' electron' + (count(s) === 1 ? '' : 's')`, in two places | the plural branch is collapsed to 个电子 in both | English plural grammar in figure code (4.1) |
| ch31/31.2/section.json | notes: the sentence “The quantum come from an α-particle, β-particle, or photon” | kept in English inside “”, as the source’s note quotes it | a slip of English grammar of the source that has no Chinese form, and the note names it (translate.md 4.3) |
| ch31/31.2/text.html | #detecting-radiation, “radiation sickness” (an ionizing-radiation span on radiation) | 放射病 is written with the ionizing-radiation span on 放射 | the glossary row radiation sickness → 放射病 is one word, while the source puts its span on radiation alone |

### ch31/31.3

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch31/31.3/figures.js | sim-nucleus-model legend: `Z + ' proton'/' protons'`, `N + ' neutron'/' neutrons'` | the plural branches are collapsed to the single forms ' 个质子' and ' 个中子' | English plural grammar in figure code (4.1) |
| ch31/31.3/figures.js | sim-nuclide-chart topline: the helper `plural(n, w)` | the helper is removed and the sentence is written with 有 ${Z} 个质子和 ${N} 个中子 | English plural grammar in figure code (4.1) |
| ch31/31.3/text.html, ch31/31.3/section.json | #nucleons (the em “unified atomic mass unit” with the atomic-mass span), #nuclides (“the unified atomic mass unit”) and summary_html | written 原子质量单位 (the strong span on 原子质量, the em around 原子质量单位); the word 统一的 is not written | the authority lists 原子质量单位 and no 统一原子质量单位 (termonline 2026-10-23), so the unit takes the authority’s name (4.4); the same in 31.6 #mass-defect |

### ch31/31.4

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch31/31.4/text.html | #alpha-decay, #pu-239-alpha-energy, #beta-minus-decay, #co-60-beta-energy, #positron-decay, #beta-decay: “parent nucleus”, “parent nuclide”, “daughter nucleus”, “daughter nuclide”, each with a parent or daughter span and a nucleus or nuclide span | 母核 and 子核 are written with the parent (daughter) span on 母 (子) and the nucleus (nuclide) span on 核, the two source spans split over the two morphemes | the glossary renders all four phrases as the one word 母核 or 子核, so no span of the source can be dropped or merged (translate.md 5); as ch03/3.4 splits 分矢量 |
| ch31/31.4/text.html | #decay-energy “Total mass–energy is also conserved”; #beta-minus-decay “most of the decay energy”; #co-60-beta-energy “the decay energy” | 质能 is written 总 + the mass span on 质 + the energy span on 能, and 衰变能量 is written with the decay span on 衰变 and the energy span on 能量 | the glossary fixes 质能 and 衰变能量 as single words while the source marks mass and energy (decay and energy) as separate spans |
| ch31/31.4/text.html | #beta-decay, the sentence on the name of the neutrino: “gave neutrinos their name, meaning little neutral ones” | written 给中微子起了名字（neutrino），意思是“中性的小家伙”, the word neutrino kept in parentheses | a sentence about the origin of an English word (4.3) |
| ch31/31.4/text.html | #electron-family: “where ν is the Greek letter nu” | written 其中 $\nu$ 是希腊字母 nu, the letter’s spoken name kept in Latin letters | a sentence about how a symbol is read; kept as ch01/1.3 keeps delta (4.3) |
| ch31/31.4/text.html | #positron-decay: “a positive electron” and “This is antielectron or positron decay” | written 带正电的电子 (the em wraps 带正电的) and 这就是反电子衰变，即正电子衰变 (the strong spans on 反电子 and 正电子衰变) | the glossary renders positron as 正电子 and antielectron as 反电子, so 正电子 for “positive electron” would name the term by itself (a collision, 4.5) |
| ch31/31.4/section.json | notes, and exercises[p16].answer.solution: the key’s “conversation laws” (for conservation laws) | kept in English inside “conversation laws” in both places | a slip of English spelling that has no Chinese equivalent, and the note names it (4.3) |
| ch31/31.4/section.json | exercises[p8].answer.solution and exercises[p9].answer.solution: `\text{efn : }` | the abbreviation efn (electron family number) is kept as printed inside \text{}, while electron family number in exercises[p7] is 电子轻子数 | the letters of an English abbreviation (4.3) |
| ch31/31.4/text.html | #decay-series, #alpha-decay, #beta-minus-decay, #positron-decay and the sim-head of Figure 31.15 + 31.17 + 31.18: for example “the daughters of β decay have one less neutron and one more proton” | within some sentences the data-concept and data-ref spans stand in a different order from the source (少一个中子、多一个质子); every span stays in its block and the multiset of spans is the same | Chinese word order (3.3) |

### ch31/31.5

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch31/31.5/text.html | #activity, “most radioactive sources” (a radioactive span) | 放射源 is written with the radioactive span on 放射 | the glossary row radioactive source → 放射源 is one word, while the source puts its span on radioactive alone |

### ch31/31.6

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch31/31.6/text.html | #mass-defect: “the unified atomic mass unit u” | written 以原子质量单位 u 表示 (the atomic-mass span on 原子质量, the units span on 单位); 统一的 is not written | as in ch31/31.3: the authority lists no 统一原子质量单位 (4.4) |
| ch31/31.6/figures.js | sim-earth-interior, hover name of an emission: (particle) + (' from ' + I.name or ' from the decay chain of ' + I.name) + ', stopped in the rock' | the same operands in the same order, written as the particle, then 来自 + the name, or 来自 + the name + 的衰变链, then 已在岩石中被阻止; the second branch gains 的 and moves 衰变链 after the name | an English preposition phrase built in code (“from the decay chain of X”) has no Chinese order (4.1); the code around it stays |
| ch31/31.6/figures.js | sim-binding-curve topline, both branches: “P.name holds each of its P.A nucleons by BE/A = bea MeV on average” | the operands bea and P.A are swapped in the concatenation: P.name 平均以 BE/A = bea MeV 束缚它的 P.A 个核子中的每一个 | Chinese word order in a sentence built by code (4.1) |
| ch31/31.6/figures.js | sim-binding-curve readout, small line: “far of the P.A nucleons lie beyond the range of the marked one” | the operands far and P.A are swapped: P.A 个核子中有 far 个落在被标记核子的作用范围之外。 | Chinese word order in a sentence built by code (4.1) |

### ch31/31.7

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch31/31.7/text.html | #tunneling-in-solids, first paragraph: “Scanning tunneling electron microscopes” (a tunneling span and an electron span) | written 扫描隧穿电子显微镜 in this one place, while the figure alt and caption read 扫描隧穿显微镜 (the glossary row) | the source marks tunneling and electron as two spans of one phrase and a span is never dropped, so 电子 stays here (translate.md 5) |

# Config: 大学物理（第2版）, Chapter 32 (translation)

The translation pass of `College Physics 2e` chapter 32 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch32, every page it lists |
| Language | zh-CN |
| Translator | claude-sonnet-5-5, medium effort |
| Terminology | `glossary.zh-CN.json`, read before the first sentence; a new term is added as pending |
| Fidelity | the source's tone, sentences and content; nothing added or removed except the forced scenarios below |
| Humanizer review | deferred to the owner |

## Forced scenarios

Every place where a faithful translation was impossible as the source stands
(translate.md item 4), one row each, one table per page; `translation-notes.md`
carries the same entries. The intro has none.

### ch32/32.1

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch32/32.1/figures.js | sim-anger-camera hover name of the image bars: n + ' count' + (n === 1 ? '' : 's') + ' in this row of the image' | the plural branch collapsed to the one form: the name is '图像这一行中有 ' + n + ' 次计数'; the branch code is removed, the code around it stays | English plural grammar in figure code (4.1) |

### ch32/32.2

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch32/32.2/figures.js | sim-ionization KIND names (γ, x ray, β, proton, α, heavy ion) and the hover name 'the ' + m.name + ', stopped after N μm' and the readout line 'The ' + m.name + ' leaves about … keV in each micrometer …' | the names are written with their class word (γ 射线, X 射线, β 粒子, 质子, α 粒子, 重离子) and the article is dropped: m.name + '，行进 N μm 后停下' and m.name + '在其径迹的每微米上留下约 … keV，…。' | English article built in code (4.1); a Greek letter alone is not a Chinese noun that can take a verb |
| ch32/32.2/figures.js | sim-ionization readout, the comparison with the γ: Number(ratio) + ' times the γ’s 0.3 keV' | the operands are reordered: 'γ 射线的 0.3 keV 的 ' + Number(ratio) + ' 倍' | Chinese word order of a phrase built in code; the parity check shows it as a code replace (4.1) |
| ch32/32.2/figures.js | sim-protection hover name: stuck + ' scattered x rays reached the technician' | written stuck + ' 条散射的 X 射线到达了技师' | a numeral takes a classifier in Chinese, grammar built in code (4.1, as 1.3 sim-ruler) |
| ch32/32.2/text.html, ch32/32.2/section.json | #rbe, first paragraph, and summary_html, fourth bullet: “roentgen equivalent man or rem”, “roentgen equivalent man (rem)” | written 雷姆（rem，即伦琴当量人）, the concept span on 雷姆 | a sentence about the letters of an English abbreviation: the spelled-out name and the abbreviation are both kept (4.3); the glossary row roentgen equivalent man is 雷姆 |
| ch32/32.2/section.json | exercise_notes: “picowave” | written “picowave”（皮波）, the coined English word in quotation marks with the Chinese rendering after it | a coined word whose point is the English pun on wave (4.2) |

### ch32/32.3

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch32/32.3/text.html | #medical-application, first paragraph: “at the level of snake oil” | rendered for meaning as 达到了江湖骗术的程度 | an English idiom for a quack remedy with no Chinese idiom of its own (4.4) |

### ch32/32.4

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch32/32.4/text.html | #free-radicals, last paragraph: “(at least up to a million rad)” | written （至少达到 100 万拉德），the digits changing with the unit word | Chinese counts by 万 and 亿, so 1 million is 100 万 and the value is unchanged (4.4) |

### ch32/32.5

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch32/32.5/figures.js | sim-fusion-curve nameOf and topline: the number word 'two ' placed before a nuclide name when g.n > 1 | written '两个 ' in both places | an English number word built in code; a Chinese numeral takes the classifier 个 (4.1) |
| ch32/32.5/figures.js | sim-coulomb-barrier readout small line: 'Fewer than 1 pair in 100 …' and 'About ' + n + ' pairs in 100 …' | written '不到 1 对' and '约有 ' + n + ' 对'; the plural of pair collapsed to the one measure word 对 | English plural in figure code, and a classifier after the numeral (4.1) |
| ch32/32.5/text.html | #inertial-confinement, first paragraph, and the figcaption of Figure 32.19: “Lawrence Livermore Laboratory (CA)”, “National Ignition Facility (CA)” | (CA) written （加利福尼亚州） | CA is the abbreviation of California, which Chinese does not abbreviate (4.3) |
| ch32/32.5/text.html | #fusion-on-earth, #magnetic-confinement, #fusion-energy-and-power: “ten billion years”, “500 million degrees Celsius”, “2.6 million gallons” | written 一百亿年, 5 亿摄氏度 and 260 万加仑 (the gallon named 加仑) | Chinese counts by 万 and 亿, so the digits change with the unit word while the value is unchanged; a unit with no SI equivalent takes the target name (4.4) |
| ch32/32.5/section.json | exercises[ap1].answer.options[2] and [3]: “… overcome Coulombs repulsion” | written 库仑排斥力, without the slip | the book's typo (Coulombs for Coulomb) has no counterpart in Chinese (4.3) |

### ch32/32.6

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch32/32.6/figures.js | sim-fission-chain, hover name of a bar of the fissions-per-generation graph: n + (n === 1 ? ' fission' : ' fissions') + ' in generation ' + g | the plural branch collapsed and the order changed to '第 ' + g + ' 代共 ' + n + ' 次裂变'; the branch code is removed | English plural grammar in figure code, and Chinese word order (4.1) |
| ch32/32.6/figures.js | sim-reactor, hover name of the power graph: 'the power after ' + N + ' generations: ' + (almost nothing / M times its starting value) | written '经过 ' + N + ' 代后的功率：' + (几乎为零 / 为起始值的 M 倍), the number now inside the phrase | Chinese word order of a phrase built in code; the parity check shows it as a code replace (4.1) |
| ch32/32.6/text.html | #fission, first paragraph: “following TMI and Chernobyl (and now Fukushima Daiichi)” | written 在三哩岛和切尔诺贝利（现在又加上福岛第一核电站）事故之后, the noun 事故 added after the three names | in English the names stand for the accidents by metonymy; Chinese place names alone would read as the places, so the noun is added (4.4) |

### ch32/32.7

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch32/32.7/figures.js | sim-fission-chain hover name: 'neutrons of the chain: generation ' + gi | written '链式反应的中子：第 ' + gi + ' 代'; the number now sits inside the phrase, so the string is split in three | English puts the number last; the Chinese ordinal 第…代 wraps it (4.1) |
| ch32/32.7/figures.js | sim-fission-chain hover name: 'the fireball: ' + s.Y + ' kT released in about ' + Math.round(gF) + ' generations' | the operands are swapped: '火球：约 ' + Math.round(gF) + ' 代中释放了 ' + s.Y + ' kT' | Chinese word order puts the generations before the yield, grammar built in code (4.1, as 14.5) |
| ch32/32.7/figures.js | fig-energy-fractions KINDS and its two uses (legend text, hover name) | each KINDS row gains a display field z ('冲击波', '热能', '瞬发辐射', '缓发辐射'); the legend and the hover name read k.z while n stays the English key of the data tables | the English words n are code keys of PIES and ORDER and cannot be translated in place, so the display string needs a field of its own (4.1) |
| ch32/32.7/figures.js | sim-weapon-yield `tons`: ' tons' and the 'million tons' branch (Y / 1000, one decimal) | ' tons' -> ' 吨'; the 'million tons' branch becomes Y / 10 through grp() in 万吨 (15 million tons = 1500 万吨), the value unchanged | Chinese counts by 万, so million becomes 万 with the digits changed while the value is not; the plural branch collapses (4.1, 4.4) |
| ch32/32.7/figures.js | sim-weapon-yield `who` and headline: 'the 67-MT device' name test; ', the ' + name + ' test\|bomb,'; 'A yield of … is E, the energy of N tons of TNT' | the name test became a test on named.lg; the apposition is written '，即…试验' / '，即…原子弹'; the headline reads '当量 … 为 E，相当于 N 吨 TNT 所具有的能量' | an English article and apposition built in code, and a test on a string the translation replaces (4.1) |
| ch32/32.7/section.json | exercises[p4].answer.solution, (c): “… 10 warheads (overheads)” | the book's slip “overheads” for warheads is rendered 弹头; notes and exercise_notes name the slip as the printed “overheads” with 弹头（warheads） | a misprint has no Chinese form; the evident meaning is kept as in 16.1 (3.2) |
| ch32/32.7/text.html, ch32/32.7/section.json | sim-hbomb sim-head, data-original-caption and original_caption: “a fusion bomb (H-bomb)” | written 氢弹（H 弹）; the glossary row H-bomb 氢弹 is not repeated inside the bracket | the glossary target of H-bomb equals that of fusion bomb, so the bracket would read 氢弹（氢弹）; the letter name H 弹 is kept (4.5) |

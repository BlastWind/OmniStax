# Config: 大学物理（第2版）, Chapter 27 (translation)

The translation pass of `College Physics 2e` chapter 27 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch27, every page it lists |
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
| ch27/27.1/figures.js | sim-wavelength-in-medium readout, the `small` line (colorName) | the display words 'violet', 'blue', … are written with the glossary words 紫, 蓝, 绿, 黄, 橙, 红 and 色 is appended in the sentence (光仍呈…色) | English uses a colour word as a predicate adjective; Chinese needs 色 after the single-character word, and the sentence is built in code (4.1) |
| ch27/27.2/figures.js | sim-doorway light topline: `${fmt(ratio / 1e6, 1)} million times smaller` | written `小 ${fmt(ratio / 1e4, 0)} 万倍`, the value unchanged (million becomes 万) | Chinese counts in 万 and 亿 and has no word for million (4.4) |
| ch27/27.4/figures.js | sim-grating-spectrum topline: the `lines` constant and the `mMax === 1` branch (`${n} lines per centimeter`, 'makes one bright line' / `makes a bright line in each of ${mMax} orders`) | `每厘米 ${n} 条刻线` stands before 的光栅 and the plural 'lines' collapses to the one form 条刻线; the place phrase 在中心两侧 comes first and the one/N branch is kept (只产生一条亮线 / 的 N 个级次中各产生一条亮线) | English plural and word order built in figure code (4.1); Chinese needs the measure word 条 and puts the quantity and the place before what they qualify; the parity tool reports the changed branch as code |
| ch27/27.6/section.json | notes, the problem on laser printer dots | the module's misspelling “Raleigh’s” kept in English inside the Chinese quotation marks | a sentence about how English spells a name (4.3) |
| ch27/27.6/text.html | #hubble-example, the paragraph after the M82 figure: “its light takes 2 million years for its light to reach us” | the repeated 'its light' written once: 其光需要 200 万年才能到达我们这里 | a slip of the English wording that Chinese cannot repeat; the meaning is unchanged (as ch01/1.3) |
| ch27/27.6/text.html, ch27/27.6/section.json | sim-resolving-power data-original-caption and figures[sim-resolving-power].original_caption, part (a): “separated by at distance x and a positioned a distance d away” | rendered 相距 x，并位于距物镜 d 远处 | a grammatical slip of the English with no Chinese equivalent; the meaning is unchanged |
| ch27/27.6/text.html, ch27/27.6/section.json | ex-hubble (the Andromeda distance, the p1 prompt) and the photo-arecibo caption: “2 million light year” | written 200 万光年 (and 200 万年) | Chinese counts in 万, it has no word for million (4.4); the value is unchanged |
| ch27/27.7/figures.js | sim-thin-film topline (FILMS names 'A soap bubble', 'A magnesium fluoride coating', 'An oil film') | the indefinite article of each film name is dropped (肥皂泡, 氟化镁涂层, 油膜) and the name stands after '厚 t nm 的' in the three topline sentences | English grammar in figure code: the names carry 'A' / 'An' because they begin the English sentence (4.1) |
| ch27/27.8/figures.js | sim-rotator, label under the pixel: `fmt(100 * c2, 1) + '% of I₀'` | the concatenation order is reversed: '占 I₀ 的 ' + fmt(100 * c2, 1) + '%' | English puts the percentage before 'of I₀', Chinese puts 占 I₀ 的 before the number (4.1, grammar built in code); the parity tool reports the changed line as code |

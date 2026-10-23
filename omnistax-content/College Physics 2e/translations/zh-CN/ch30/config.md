# Config: 大学物理（第2版）, Chapter 30 (translation)

The translation pass of `College Physics 2e` chapter 30 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch30, every page it lists |
| Language | zh-CN |
| Translator | claude-sonnet-5-5, medium effort |
| Terminology | `glossary.zh-CN.json`, read before the first sentence; a new term is added as pending |
| Fidelity | the source's tone, sentences and content; nothing added or removed except the forced scenarios below |
| Humanizer review | deferred to the owner |

## Forced scenarios

Every place where a faithful translation was impossible as the source stands
(translate.md item 4), one row each; `translation-notes.md` carries the same
entry.

### ch30/30.2

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch30/30.2/figures.js | sim-thomson-tube hover name of the glowing spot and readout note: “the glowing spot, X cm above/below the center” and “The spot lands X cm above/below the center of the screen.”, each built from a prefix, a number, a unit and an above/below ternary | the ternary is placed before the number (亮斑，位于荧光屏中心上方/下方 X cm 处; 亮斑落在荧光屏中心上方/下方 X cm 处。), so the operands of the concatenations are reordered | English word order built in code (4.1) |
| ch30/30.2/figures.js | sim-millikan hover name of the oil drop: the plural branch `' extra electron' + (n > 1 ? 's' : '')` | collapsed to the one form 带有 n 个多余电子; the ternary is removed | English plural grammar in figure code (4.1) |
| ch30/30.2/figures.js | sim-rutherford topline, nucleus model: the singular branch `nB === 1 ? '1 of the n alphas …' : nB + ' of the n alphas …'` | collapsed to the one sentence 到目前为止的 n 个 α 粒子中，有 nB 个朝放射源折回。 | English singular/plural grammar in figure code (4.1) |
| ch30/30.2/figures.js | sim-planetary-model hover name of an electron: “an electron on the [inner\|middle\|outer] orbit, once round in T s of this picture”, an ordinal word array spliced into the sentence | rebuilt with the array first ([内层\|中层\|外层]轨道上的一个电子，在本图中绕一圈用时 T s); the array words are translated | English word order and ordinal words built in code (4.1) |

### ch30/30.3

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch30/30.3/text.html | Bohr's solution paragraph on energy-level diagrams: “display energy states”, with the energy span on “energy” | the energy span wraps the one character 能 of 能态 (`<span data-concept="energy">能</span>态`) | the glossary term 能态 is one Chinese word that holds 能, so the span wraps the character that carries energy; no span is dropped (translate.md 5) |
| ch30/30.3/figures.js | sim-hydrogen-series and sim-bohr-atom: the English ordinal words of `LINES[].word` ('first', 'second' …), the `limit` branch word, the band phrase “in the ${band}” and the series names built as `'Lyman' + ' series'` | the ordinals are the numerals 一…五 inside 第${ord}条, the limit word is the empty string, the band phrase is a ternary (在可见光区, 在紫外区, 在红外区), and the series names are the whole terms 莱曼系, 巴耳末系, 帕邢系 with the ' series' suffix removed from the hover and bracket strings | English ordinal words and noun phrases built by rule in figure code (4.1) |

### ch30/30.4

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch30/30.4/text.html | #x-ray-production, the paragraph on the two processes and the paragraph after sim-x-ray-levels: “bremsstrahlung radiation”, with the spans bremsstrahlung and radiation | written 轫致 and 辐射 as two adjacent spans; the stand-alone span bremsstrahlung stays 轫致辐射, and “braking radiation” is 制动辐射 with the radiation span on 辐射 | the Chinese term 轫致辐射 already contains the word radiation, so the English word pair cannot be two Chinese words; both spans stay in their blocks (translate.md 5) |
| ch30/30.4/text.html | #x-ray-production, first paragraph: “the deceleration of electrons produces x rays” | written 电子减速时产生 X 射线, the deceleration span wrapping 减速 | the glossary term 减速度 names a quantity, so 电子的减速度产生 would have the quantity produce x rays; the verb with 时 keeps the span and the meaning (chapter decision of the ch30 merge) |
| ch30/30.4/text.html | #medical-uses, first paragraph: “it has been made into a familiar verb—to be x-rayed” | written 并且已成为一个人们熟悉的动词——被 X 射线检查（to be x-rayed）, the English kept in parentheses | a sentence about how an English word is used as a verb (4.3) |

### ch30/30.5

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch30/30.5/text.html | #lasers, the paragraph on the name laser: “The name laser is an acronym for light amplification by stimulated emission of radiation” | written with the English phrase kept and glossed 意为“受激辐射光放大”; the stimulated-emission span sits on 受激 and the radiation span on 辐射 | a sentence about an English acronym (4.3); the two spans of the English phrase are kept, so the glossed term is split across them |
| ch30/30.5/text.html | #lasers, the same paragraph: “masers” | written 微波激射器（maser）, the glossary row masers, with the English word in parentheses | the sentence explains the origin of an English word (4.3) |
| ch30/30.5/text.html | #holography, the paragraph on the word hologram: “entire picture” (from the Greek holo, as in holistic) | written 全息图（hologram）…源自希腊语 <em>holo</em>，如 holistic（整体的）一词中的 holo; the em stays on holo | a sentence about the Greek root of English words (4.3) |
| ch30/30.5/text.html | #lasers, Einstein's contribution: “the understanding of stimulated emission of electromagnetic radiation”, with a radiation span and a stimulated-emission span | written 电磁辐射的受激辐射, the radiation span on 辐射 inside 电磁辐射 and the stimulated-emission span on 受激辐射 | Chinese has one word for emission and radiation, so 受激辐射 already contains 辐射; both spans are kept (translate.md 5) |
| ch30/30.5/text.html | photo-ceramic-lion caption: “11<sup>th</sup> century” | written 11<sup>th</sup> 世纪, the English ordinal suffix kept inside the sup | the markup (translate.md 5) keeps the sup and Chinese has no ordinal suffix; the owner may drop the suffix and empty the sup |
| ch30/30.5/figures.js | sim-fluorescence photon hover names and toplines: the band code returned by `bandOf` ('visible', 'ultraviolet', 'infrared') spliced into “an visible photon” and “an emitted … photon”, the topline branches (“A 253-nm photon …”) with `['', '', 'two', 'three']` and “ smaller steps”, and the three note branches (“No level lies E eV above the ground state” …) | a new const `BANDW` maps the band codes to 可见光, 紫外, 红外; the hover names read 一个…光子 and 一个发射出的…光子; the toplines are written number first (253 nm 的光子 …) with `['', '', '两', '三']` and 小步; the note branches are reworded with the same operands in the same order | English article, hyphenated modifier, number word and band word built in figure code (4.1); Chinese word order |
| ch30/30.5/figures.js | sim-laser: the rung hover name `count[k] + ' of the ' + N + ' atoms in the …'` with `NAME[k].toLowerCase()`, the atom hover name `(A.lvl === 2 ? 'second' : 'third')`, and the readout note “st photons were stimulated and ab absorbed” | reordered to N + ' 个原子中有 ' + count[k] + ' 个处于…' with `.toLowerCase()` dropped (NAME holds 基态, 第一亚稳态, 第二能级, 第三能级); the ordinal is 第二 : 第三 inside 处于…能级的原子，即将衰变; the note reads 刺激出 st 个光子，吸收了 ab 个 | English plural, lowercase, ordinal and passive built in figure code (4.1); the measure word 个 is required after a numeral |
| ch30/30.5/figures.js | sim-cd: the band code of `F0.band` ('infrared', 'red', 'violet') spliced into the hover name of the laser and into “A 780-nm infrared laser reads a CD whose tracks are P μm apart”, and the readout “tracks P μm apart, shortest pit Q μm, about G GB” inside `\text{…}` | a new const `BANDZ` maps the codes to 红外, 红光, 紫光; the topline is written number first (780 nm 的红外激光器读取一张光盘，其光道相距 P μm) with F0.name holding 光盘, DVD 光盘, 蓝光光盘; the readout reads `\text{光道间距 } P …`, `\text{最短凹坑 } Q …`, `\text{约 G GB}` | English article and band word built in figure code, and Chinese word order inside `\text` (4.1) |
| ch30/30.5/figures.js | sim-hologram readout (viewing): “the ball appears A° above/below the block”, the above/below ternary after the number | written `\text{球显得在方块上/下方 }` followed by A°; the ternary is placed before the number and the branch is the one character 上/下 | English word order built in code (4.1) |

### ch30/30.6

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch30/30.6/figures.js | sim-orbit-wave headline (topline, fits branch): `n === 1 ? 'one wavelength fits' : n + ' wavelengths fit'` | collapsed to the one form n + ' 个波长' (绕轨道一周恰好有 n 个波长 …); the ternary is removed | English plural grammar in figure code (4.1) |
| ch30/30.6/figures.js | sim-probability-cloud headline (topline): the plural branch `' measurement' + (n === 1 ? '' : 's')` | collapsed to n + ' 次'; the ternary is removed | English plural grammar in figure code (4.1) |

### ch30/30.7

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch30/30.7/figures.js | sim-orbit-in-field topline and `RANK`: “the orbit has the RANK of its five energies”, with RANK 'highest', 'second highest', 'middle', 'second lowest', 'lowest' | `RANK` holds 最高, 次高, 居中, 次低, 最低 and the sentence is rebuilt around it (轨道的能量是它在场中五个能量里 + RANK + 的一个) | a word spliced into a sentence whose Chinese order differs, built in code (4.1) |
| ch30/30.7/figures.js | sim-spin-doublet topline and choice options: the value word `sp.value` ('Spin up' / 'Spin down') spliced into the headline, and the option labels 'up' / 'down' | the value word is chosen by the `up` branch that picks 54.7 or 125.3 (自旋向上 / 自旋向下), and the option labels are 向上 / 向下; the option values stay `up` and `down` | the English value word is spliced into the headline, so the Chinese word is chosen from the branch (4.1) |

### ch30/30.8

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch30/30.8/text.html | #direction-of-angular-momentum, the paragraph after the $L_z$ equation (“其中 $L_z$ 是…”), and #intrinsic-spin, the summary paragraph (“总结一下…”): “angular momentum projection quantum number”, with the angular-momentum span on “angular momentum” | written 磁量子数 with the span `<span data-concept="angular-momentum">磁量子数</span>` wrapping the whole term; no span is dropped or moved | the glossary term 磁量子数 (the standard name of m_l) has no part that names angular momentum, so the angular-momentum span wraps the whole term; wording a longer form would add words the source does not have (translate.md 5) |

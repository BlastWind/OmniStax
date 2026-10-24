# Config: 大学物理（第2版）, Chapter 29 (translation)

The translation pass of `College Physics 2e` chapter 29 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch29, every page it lists |
| Language | zh-CN |
| Translator | claude-sonnet-5-5, medium effort |
| Terminology | `glossary.zh-CN.json`, read before the first sentence; a new term is added as pending |
| Fidelity | the source's tone, sentences and content; nothing added or removed except the forced scenarios below |
| Humanizer review | deferred to the owner |

## Forced scenarios

Every place where a faithful translation was impossible as the source stands
(translate.md item 4), one row each; `translation-notes.md` carries the same
entry.

### ch29/29.1

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch29/29.1/text.html | photo-planck alt: the book’s misspelling “Max Plank” | rendered 马克斯·普朗克, the glossary row Max Planck | a misspelling of an English name has no Chinese equivalent; the person’s standard rendering is used (translate.md 4.3) |

### ch29/29.2

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch29/29.2/text.html | #light-ejects-electrons, first paragraph: “meaning that light (<em>photo</em>) produces electricity” | the Greek prefix kept in English in the parentheses: 意思是光（<em>photo</em>）产生电 | a sentence about the root of an English word (translate.md 4.3) |
| ch29/29.2/figures.js | sim-photoelectric topline, the branch where no electron leaves: “Each E-eV photon carries less than the BE-eV binding energy of M, so no electron leaves.” | the operands of the concatenation stand in another order (M.name before fmt(M.BE, 2)): 每个 E eV 的光子所携带的能量小于 M 的 BE eV 结合能，所以没有电子逸出。 | English sentence frame assembled in figure code; the possessive “of M” becomes 的 before the noun it modifies (4.1) |

### ch29/29.3

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch29/29.3/figures.js | sim-em-spectrum topline | the sentence “A <E> photon of <band> carries …” is written “一个 <E> 的<band>光子带有…”, the band word (bandOf returns 无线电波, 微波, 红外线, 可见光, 紫外线, X 射线, γ 射线) a modifier of 光子, and the two branches carry the whole predicate | Chinese word order of a sentence built from English fragments in code (4.1) |
| ch29/29.3/figures.js | sim-x-ray-tube note (both branches) | the leading literal “The ” is dropped so each branch begins with A.name (铜在 … keV 处的峰出现了 / 铜的峰没有出现), and the closing literals are reworded without the hyphenated “-keV energy” | English article and word order built in code that Chinese lacks (4.1) |
| ch29/29.3/figures.js | sim-x-ray-tube counter text | counted + ' photons counted' is written counted + ' 个光子已被计数', the measure word 个 added | Chinese needs a classifier after a numeral (4.1) |
| ch29/29.3/section.json | exercises[ap2].prompt | the book’s slip “breaking radiation” (for braking radiation) is rendered “制动辐射”, the meaning of bremsstrahlung | a typo of the English that has no Chinese equivalent; the meaning is unchanged (as ch01/1.3 cyu3) |
| ch29/29.3/text.html | #gamma-rays-and-x-rays, #ultraviolet, #visible-light, #x-ray-photon-energy | inside some sentences the order of data-concept and data-type spans differs from the source (photon and energy spans, the maximum-energy span inside data-type energy) | Chinese word order; every span stays in its block with the same multiset (3.3, as ch08/8.3) |

### ch29/29.4

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch29/29.4/figures.js | sim-photon-electron hover name and topline | “a ” + ph.name + “ photon” is rebuilt as “一个 ” + ph.name + “光子” (the article collapsed to 一个, the band phrase placed before 光子); the topline “A … photon and an electron moving at …” is “一个 ” + ph.name + “光子和一个速率为 … 的电子携带相同的动量，…。” | English article and word order built in code (4.1); the PH names are noun phrases such as 4.00 cm 的微波, so 的 cannot follow them |
| ch29/29.4/figures.js | sim-compton topline | “A ” + fmt(E, 0) + “-keV photon …” is rebuilt as “一个 ” + fmt(E, 0) + “ keV 的光子 …” | a hyphenated compound modifier built in code becomes number + unit + 的 (4.1) |

### ch29/29.7

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch29/29.7/figures.js | sim-buildup topline | the plural branch (n === 1 ? who + ' has' : plural + ' have') collapses to the one form n + ' 个' + who + '到达' | English plural grammar in figure code (4.1) |
| ch29/29.7/figures.js | sim-position-momentum topline and the readout small line | the article choice (P.name === 'electron' ? 'an electron' : 'a proton') collapses to the bare name P.name (电子 / 质子); the comparison against the English name is gone and PARTS[].name now holds the Chinese name | English articles a/an have no Chinese form (4.1) |

### ch29/29.8

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch29/29.8/text.html | #ex-dust-recoil question (b) and the #sim-dust-recoil sim-head | the order of data-ref and data-type spans differs from the source (the dust span, the 它 span and the velocity span of (b); the wavelength, mass and photon spans of the sim-head follow the Chinese clause order) | Chinese word order; every span stays in its block with the same multiset (3.3) |
| ch29/29.8/figures.js | sim-dust-recoil hover name and topline (before) | the leading English article literals ('a ', 'A ') become the empty string '' so the concatenation of the code is unchanged | English articles have no Chinese form (4.1) |

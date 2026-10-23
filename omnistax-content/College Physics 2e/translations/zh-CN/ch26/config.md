# Config: 大学物理（第2版）, Chapter 26 (translation)

The translation pass of `College Physics 2e` chapter 26 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch26, every page it lists |
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
| ch26/26.1/text.html | #power-range, Example 26.2 Discussion: “presbyopia (literally, ‘elder eye’)” (the sentence on the lens changes with age) | written 老视（presbyopia，字面意思是“老年的眼”）, the English word kept in parentheses with the span on 老视 | the parenthesis glosses the literal sense of a Greek-derived English word, which 老视 does not spell out (translate.md 4.3) |
| ch26/26.2/text.html, ch26/26.2/section.json | #myopia-and-hyperopia first paragraph and summary_html bullets 1 and 2: “Nearsightedness, or myopia” and “Farsightedness, or hyperopia”; the sim-vision-correction caption (data-original-caption, original_caption): “The nearsighted (myopic) eye” and “The farsighted (hyperopic) eye” | written 近视（myopia） and 远视（hyperopia）: the first English name is Chinese in its span and the second name keeps the English word in parentheses, with both spans and both strong tags kept; in the caption 近视（myopic）眼 and 远视（hyperopic）眼, the parenthetical kept | the glossary rows nearsightedness and myopia (and farsightedness and hyperopia) have one Chinese term, so the book's two English names cannot be told apart in Chinese; the second is kept so that neither is dropped (4.3) |
| ch26/26.3/figures.js | sim-true-color: the ZH table and every headline, label, option and readout built from the keys of LIGHTS and OBJECTS (“white”, “red”, “blue” …), the topline “the X object” / “X light” / “appears X” | a lookup table ZH of the Chinese colour words was added, and the display strings use ZH[key] followed by 色 or 光 (ZH[X]色物体, ZH[X]光, 显得是X色); the keys themselves are unchanged | the English colour keys double as display words in the source (the code prints the key as text), which cannot be translated in place, and Chinese needs 色 or 光 after a bare colour word where English prints it alone (4.1) |
| ch26/26.3/figures.js | sim-cone-sensitivity topline, sim-three-primaries topline and hueName: “seen as yellow” | hueName returns the bare Chinese word (红, 黄, 品红) and the sentence appends 色 (被看成黄色) | English prints the hue as a bare word in a sentence; Chinese needs 色 after it, and the word is built in code (4.1) |
| ch26/26.4/text.html | #compound-microscope: “also referred to as the ocular” | written 英文中也称为 ocular, the English word kept | the glossary renders both eyepiece and ocular as 目镜, so the book's second name for the same part cannot be told apart in Chinese; a sentence about an English name (4.3) |
| ch26/26.4/section.json | exercises[p4].prompt (b): the book's slip “Does moving the objective increase closer to the object increase or decrease the magnification” | rendered as the plain 把物镜移得更靠近物体，会使放大率增大、减小，还是保持不变？ | a grammatical slip of the English with no Chinese equivalent; the meaning is unchanged (4.3) |
| ch26/26.5/text.html | #telescopes-across-the-spectrum: “A current exciting development” and “a current area of research” | the word current (meaning present) is written 目前 and kept inside the data-concept="electric-current" span the source wraps it in | the source's span is a tagging slip on an ordinary adjective; a span is never dropped or merged (translate.md 5), so it wraps the Chinese word that renders current |
| ch26/26.5/text.html | photo-square-kilometre-array alt: “S K A-low array and S K A-mid array”, “seventy to two hundred megahertz” | the spelled-out letters are written SKA-low and SKA-mid, and the number words as digits (70 至 200 兆赫, 200 至 500 兆赫) | letters spelled out for a screen reader have no Chinese counterpart (4.3); the figures are unchanged |
| ch26/26.6/text.html | #coma-and-spherical-aberration: the book's sentence “Such aberrations and can also be an issue with manufactured lenses” | rendered for meaning (这类像差也可能成为人造透镜的一个问题); the notes of 26.6 quote the English sentence | a grammatical slip of the English with no Chinese equivalent (4.3) |
| ch26/26.6/figures.js | sim-chromatic readout: “f = … mm at λ = … nm” | the TeX is reordered to \text{在 }\klam = …\ \text{nm}\text{ 时，}\ \kffoc = …\ \text{mm}: the condition 在 λ = … nm 时 comes first, the Chinese order of a condition and its result; every term of the TeX is kept | the English puts the condition after the result (“at λ = …”), which Chinese word order puts first (a condition before its result); only the words of the readout's \text{…} and their order change, the TeX terms are kept |
| ch26/intro/text.html | fig-coronavirus-tem caption: “crown-like” | rendered 形似皇冠, the sentence kept; 冠状病毒 already holds 冠状, so the reason for the name is clear in Chinese without added words | a sentence about the origin of an English word (coronavirus = crown), translated for meaning (4.3) |

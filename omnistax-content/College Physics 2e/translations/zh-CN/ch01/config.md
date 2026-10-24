# Config: 大学物理（第2版）, Chapter 1 (translation)

The translation pass of `College Physics 2e` chapter 1 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch01, every page it lists |
| Language | zh-CN |
| Translator | claude-opus-5-5, medium effort |
| Terminology | `glossary.zh-CN.json`, read before the first sentence; a new term is added as pending |
| Fidelity | the source's tone, sentences and content; nothing added or removed except the forced scenarios below |
| Humanizer review | deferred to the owner |

## Forced scenarios

Every place where a faithful translation was impossible as the source stands
(translate.md item 4), one row each; `translation-notes.md` carries the same
entry.

| File | Span or line | What was done | Why |
|---|---|---|---|
| book.json | `types[lens-power].label` | 光焦度 | collision with power 功率 (4.5) |
| book.json | `concepts[approximation].statement` | “粗估” for “guesstimates” | English blend word (4.2) |
| every text.html | figure eyebrows | `Figure N.M`, `Sim` kept | the checker reads them (4.6) |
| every text.html | figure citations | 图 N.M, plain text until the app reads it | the app links only `Figure N.M` (4.6) |
| ch01/1.1/figures.js | sim-atom-model | plural branches z === 1 ? ' electron' : ' electrons', ' proton'/' protons', ' electron goes'/' electrons go' and the readout unit '\text{ electron}'/'\text{ electrons}' collapsed to one Chinese form (个电子, 个质子) | English grammar in figure code (4.1) |
| ch01/1.1/figures.js | sim-atom-model | the a/an article chosen by /^[aeiou]/ collapsed to '' (const an = '') | English grammar in figure code (4.1) |
| ch01/1.1/figures.js | sim-atom-model | WORDS written 一, 两, 三 … (两 for two, as Chinese counts with a measure word); the slider label \text{electrons} written \text{电子数} | Chinese has no plural, so the bare plural noun that names a count becomes 电子数 (4.1) |
| ch01/1.1/text.html | classical-modern | The word physics comes from Greek: *物理学*（physics）一词来源于希腊语, the English word kept in parentheses | a sentence about the origin of an English word (4.3) |
| ch01/1.1/text.html | models | the Theory of Evolution and the Theory of Relativity written 进化理论和相对论这两种理论, the second theory span moved onto 这两种理论 | 相对论 already contains 论, so 相对论理论 would double it; the two theory spans and the relativity span are kept (4.5-like collision of the term with its own name) |
| ch01/1.1/text.html | realm, applications, models, classical-modern | within some paragraphs the order of data-concept spans differs from the source (e.g. 光速的约 1% inside data-type velocity, 经典物理学的定律, 物理学定律) | Chinese word order; every span is kept in its block with the same multiset |
| ch01/1.1/figures.js | sim-atom-model shell legend | operands n and SHELL[s] swapped to read 'SHELL 个电子中的 n 个' | Chinese word order |
| ch01/1.2/figures.js | sim-ladder headline (own-prefix branch) | 'a ' + own[1] + 'meter being' collapsed to '1 ' + own[1] + '米为'; the PREFIX display names are the GB 3100 short Chinese prefix names | English article and word built from the prefix name by rule (4.1) |
| ch01/1.2/figures.js | sim-ladder LENGTHS | articles of the label strings ('a proton', 'the Earth') dropped; 'a light year' rendered 1 光年 | English articles have no Chinese form (4.1) |
| ch01/1.2/text.html | base-units / prefixes notes and conversion note (firkin, barleycorn); fig-map alt (cables) | 费尔金（firkin）, 大麦粒（barleycorn）, “链”（cable）: the English unit name kept in parentheses after the Chinese | obscure English units with no fixed Chinese name (4.4) |
| ch01/1.2/text.html | prefixes table row peta; fig-galaxies caption | 30 million years → 3000 万年; 2.4 billion light years → 24 亿光年 | Chinese counts in 万/亿, it has no word for million or billion (4.4); the values are unchanged |
| ch01/1.2/section.json | exercises[p5].answer.parts[].part | part labels 'length in feet', 'length in inches', 'width in feet', 'width in inches' left in English | translate.md 5 lists answer.parts[].part as kept byte for byte, although these four are reader-visible words; orchestrator to decide |
| ch01/1.2/text.html | base-units, sentence on Electric Current, Resistance, and Ohm's Law | the cited chapter title is set in “” | Chinese marks a cited title; no words added |
| ch01/1.2/figures.js | sim-light-meter and sim-drive headlines | operand order changed (T before D; D before pos; leading literal dropped) | Chinese word order |
| ch01/1.3/figures.js | sim-calc, product line ('the product keeps …') | the plural branch n === 1 ? ' significant figure' : ' significant figures' collapsed to the one form '位有效数字' | English plural grammar in figure code (translate.md 4.1) |
| ch01/1.3/figures.js | sim-ruler headline and readout small line; sim-calc 'since … has only N' | the measure word 位 appended after words(n), where the English ends on the bare number word ('…, four.') | Chinese requires a classifier after a numeral (translate.md 4.1, grammar built from English) |
| ch01/1.3/text.html, ch01/1.3/figures.js | #percent-uncertainty, #ex-apples display math; sim-percent readout | \text{unc} in %\,\text{unc} kept as written | an abbreviation of the English word uncertainty used as a symbol in the formula; translating it would change the formula (translate.md 4.3) |
| ch01/1.3/text.html | #uncertainty, “delta $A$” | the spoken name delta of the Greek letter kept | a sentence about how a symbol is read; Chinese readers also say delta (translate.md 4.3) |
| ch01/1.3/text.html, ch01/1.3/section.json | #accuracy-precision, #uncertainty, #ex-apples; exercises cyu3, p3, p13 | U.S. customary units keep their symbols (in., lb, mi) where the book prints a symbol, and take the Chinese names 英寸, 磅, 英里 where it writes the word | units with no Chinese equivalent (translate.md 4.4) |
| ch01/1.3/section.json | exercises[cyu3].prompt | the book's slip 'one bag weighs of 10.2 pounds' rendered as plain 另一个袋子重 10.2 磅 | a grammatical typo of the English that has no Chinese equivalent; the meaning is unchanged |
| ch01/1.3/section.json | exercises[*].answer unit and parts[].part (cyu2, cyu3, p3, p5, p9, p11, p15, p17) | kept in English ('figures', 'pounds', 'beats', 'beats/min', '(a) lowest', 'heart rate', 'volume', 'area', 'uncertainty') | translate.md 5 lists answer.unit and parts[].part as kept; if the app shows them to readers, the owner should decide whether they become translatable |
| ch01/1.3/figures.js | sim-calc sum line | PLACES[dec] moved after the a/b branch | Chinese word order |
| ch01/1.4/figures.js | sim-building | plural and agreement branches collapsed to one Chinese form: ' person'/' persons' (inset label and readout \text{}) to 个人 / \text{人}, ' story'/' stories' (building label and readout \text{}) to 层 / \text{层}, 'is'/'are' in the running headline dropped and n / N.v swapped in the running headline (Chinese word order), and the done headline's N.v === 1 branch ('One story of about …' vs 'N stories of about … each') merged into N.v + ' 层，每层约 … m，楼高约 … m。' | English grammar in figure code (translate.md 4.1) |
| ch01/1.4/text.html, ch01/1.4/figures.js | ex-trillion, sim-trillion | feet, inches, yards, square yards and square inches named in prose as 英尺、英寸、码、平方码、平方英寸 ('feet/inches' to 英尺/英寸, 'converting to feet' to 换算成英尺, 'in square inches' to 以平方英寸计, the sim's 'less than a foot' to 不到一英尺, its sim-head 'in feet' to 以英尺为单位); the symbols in., ft, yd kept as printed in spans, math and figure labels | a unit with no SI equivalent keeps its symbol and takes the target name in prose (translate.md 4.4) |
| ch01/1.4/text.html | approximation, example-trillion | “guesstimates” rendered “粗估” in both places, in the book's quotation marks; 'rough “guesstimates”' kept as 粗略的“粗估”, the adjective kept though 粗估 already carries it | English blend word (translate.md 4.2), as the glossary row guesstimate fixes it |

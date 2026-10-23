# Config: 大学物理（第2版）, Chapter 18 (translation)

The translation pass of `College Physics 2e` chapter 18 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch18, every page it lists |
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
| ch18/18.1/text.html | #static-electricity, “The very word electric derives from the Greek word for amber (electron)” | written “电”（<em>electric</em>）这个词本身就源自希腊语中表示琥珀的词（<em>electron</em>）: the English word kept in parentheses after its Chinese rendering, the Greek word electron kept in Latin spelling inside its concept span | a sentence about the origin of an English word (4.3) |
| ch18/18.1/text.html | #electrons-and-protons, the display equations of the number of protons in 1.00 C | `\text{proton}` and `\text{protons}` both written `\text{个质子}` (`1\ \text{个质子}`, `6.25 \times 10^{18}\ \text{个质子}`) | the singular and plural collapse to one Chinese form, and a count takes the measure word 个 (4.1) |
| ch18/18.1/figures.js | sim-atom tally lines, topline, `WORDS` and `cap()`; sim-rubbing tally and topline | the branches ` proton`/` protons`, ` neutron`/` neutrons`, ` electron`/` electrons` and ` has`/`s have` collapse to ` 个质子`, ` 个中子`, ` 个电子` and 个电子从布移到了琥珀上; `cap(wd(Np))` and `cap(WORDS[n])` are written `wd(Np)` and `WORDS[n]` (Chinese has no capitals); `WORDS` reads 零, 一, 两, 三, 四, 五, 六 (两 for two, “no” written 零) | English plural, verb agreement and capitalisation built in figure code (4.1); a count takes a measure word |
| ch18/18.1/figures.js | sim-rods-and-silk headline and the hover name of the hand | the sentence is rebuilt in Chinese order, “带有 q nC 的玻璃棒挂在细线上，带有 q nC 的丝绸被移到相距 r cm 处：异号电荷，所以棒朝丝绸摆去”, with “toward the X” / “away” written 朝X / 背离它 and 摆去 moved into the headline; the hand name `'a hand holding the ' + X` is written `'握着' + X + '的手'`; like/unlike read 同号/异号; the articles a/the are dropped. One line of code differs from the source (the `name:` expression of the hand spot) | English phrase order built from branches in figure code has no Chinese form (4.1); the hand name needs 的手 after the branch |
| ch18/18.1/figures.js | sim-quarks topline (four branches) | “Two quarks of UP and one of DN add to …” is written “两个 UP 的夸克与一个 DN 的夸克之和为 …”, the three other branches rewritten the same way, and “a whole number of the basic charge” written 元电荷的整数倍 | English clause grammar assembled in figure code (4.1) |
| ch18/18.4/figures.js | sim-force-field topline, ratio branch | “the same way” / “opposite ways” is written as the clause 两个力的方向相同 / 相反, and the number moves after the force on q₂ (“q₂ 所受的力是 q₁ 所受力的 N 倍”) | English adverbial phrase built from a branch in figure code has no Chinese form (4.1) |
| ch18/18.4/figures.js | sim-point-charge-field topline, non-zero branch | “A charge of Q nC makes a field of E N/C at r mm, pointing away from it / towards it, and that field pushes the …” is rewritten as “Q nC 的电荷在 r mm 处产生 E N/C 的电场，方向背离它 / 指向它，这个电场…”; `fmt(r, 2)` now comes before `sci(E, 2)` in the concatenation (one line of code differs from the source), and the three-way branch “test charge / positive test charge along itself / negative test charge against itself” is written 推检验电荷 / 沿自身方向推正检验电荷 / 逆自身方向推负检验电荷 | English clause grammar assembled in figure code; Chinese puts the place before the quantity produced (4.1) |
| ch18/18.4/text.html | #force-field, “Action at a distance” | the term 超距作用 is written 超<span data-concept="distance">距</span>作用, the distance span wrapping 距 only | the glossary term has no free word for distance; the span is kept in its block (translate.md 5, spans are never dropped) |
| ch18/18.4/section.json | notes, last sentence | the book’s own words “electrical field strength” and “electrical force” are kept in English in parentheses after the Chinese terms 电场强度 and 电场力; the source’s “first” and “second” objective ordinals are kept as printed | a sentence about the book’s wording of English terms (4.3) |
| ch18/18.4/section.json | notes, PhET simulation name | “Electric Field of Dreams” kept in English | a pun on the film title Field of Dreams that works only in English (4.2); the glossary keeps PhET names such as Moving Man in English |
| ch18/18.5/figures.js | sim-one-charge topline (“sends out / takes in N lines”) | `WORDS` is written 零, 一, 两, 三 … 十二 (两 for two) and the measure word 条 is appended after `wd(n)`, with a space only when n is a digit string (`(n < WORDS.length ? '' : ' ') + '条线'`); one line of code differs from the source | Chinese requires a classifier after a numeral, and a number word runs into it while digits take a space; grammar built from English in figure code (4.1) |
| ch18/18.6/figures.js | sim-screening topline (“n water molecule(s) take lines”) | the branch `n === 1 ? 'molecule takes one of the 8 lines' : 'molecules take n of the 8 lines'` is collapsed to one form, `${n} 个水分子取走了 ${LINES} 条线中的 ${n} 条` | English singular and plural grammar built in figure code (4.1) |
| ch18/18.7/text.html | #applications, last paragraph: the active (“hot”) electrical wire | rendered 带电（“火线”）的电线, the quotation marks kept | an idiom with no word-for-word equivalent: 火线 is the Chinese name of the live conductor (4.4) |
| ch18/18.7/section.json | summary_html, the item “until static equilibrium is reached”; original_caption of sim-sphere-in-field | static equilibrium is written 静电平衡, not the glossary row static equilibrium 静态平衡; exercises[cq12].prompt and solution, which are about a charge at rest under forces, keep 静态平衡 | a collision (4.5): in this section static equilibrium is the electrostatic equilibrium the section defines, as the glossary note of the 18.7 title row decides |
| ch18/18.7/figures.js | sim-sharp-end topline (case c) | “the N-times sharper end takes N times the concentration the flat end takes” is written 尖了 N 倍的那一端所得的集中程度是平端的 N 倍 | an English hyphenated compound with a comparative has no Chinese form; the word order changes (4.1) |
| ch18/18.7/figures.js | sim-parallel-plates topline and sim-sharp-end topline (case a): “N per cent” | written N%, the value unchanged | the English words per cent have no Chinese word; the symbol is the Chinese usage (4.4) |
| ch18/18.8/text.html | #xerography first paragraph, the Greek roots | 静电复印（xerography）with the English word kept in parentheses; xeros and graphos kept in italics with the Chinese gloss (意为干, 意为书写) | a sentence about the origin of an English word (4.3) |
| ch18/18.8/section.json | summary_html, the item “electric fields in static equilibrium” | static equilibrium is written 静电平衡, not the glossary row static equilibrium 静态平衡 (it read 静态平衡 before the merge) | a collision (4.5): the phrase is the electrostatic equilibrium of the 18.7 title, as in the scenario of 18.7 |
| ch18/18.1/figures.js | sim-atom topline, a new helper `sp` | the topline writes a space between a digit count and 个 (and before it after 和) where `wd()` returns digits (7 to 10 protons, 7 to 12 electrons): `${wd(Np)}${sp(Np)}个质子和${sp(Ne)}${wd(Ne)}${sp(Ne)}个电子`, with `const sp = (n) => (n < WORDS.length ? '' : ' ')` added beside `wd` | a Latin-script number beside a Chinese measure word takes a space; the English source had spaces between words throughout, as 18.5 does for its line count (4.1) |
| ch18/18.6/figures.js | sim-dna tally under the ion | the tally reads `LINES + ' 条线中有 ' + through + ' 条通过'` (8 条线中有 N 条通过), the operands in the opposite order to the source expression | English order of the count and the total has no natural Chinese form (4.1) |

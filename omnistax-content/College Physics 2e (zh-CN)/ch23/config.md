# Config: 大学物理（第2版）, Chapter 23 (translation)

The translation pass of `College Physics 2e` chapter 23 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch23, every page it lists |
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
| ch23/intro/text.html | #can-magnetic-fields-cause-currents, paragraph 1: “emfs (electromotive force)” | written 电动势（emf）, the span on 电动势 kept and the abbreviation kept in parentheses | the sentence gives an abbreviation and its long form, which are one Chinese term (4.3) |
| ch23/intro/text.html | fig-wind-turbines caption credit: “modification of work by Petr Kratochvil” | written （来源：改编自 Petr Kratochvil 的作品）, the name kept | the credit’s wording has no counterpart in the credit label 来源 (4.4); the phrase 改编自 … 的作品 is the chapter’s decision |
| ch23/23.1/figures.js | sim-faraday-ring label “the coil the meter reads, N turn(s)”: (N.v === 1 ? ‘ turn’ : ‘ turns’) | the plural branch collapses to the one measure word 匝; the code around it stays | English plural grammar built in figure code (4.1) |
| ch23/23.1/figures.js | sim-faraday-ring topline and readout: “A single turn carries this flux …” / “Each of the N turns carries this flux, so the emf grows with the number of turns.” | the two branches are kept: 单匝携带这一磁通量 … / ${N} 匝中的每一匝都携带这一磁通量，所以电动势随匝数增大；the operand moves to the front of the second sentence | a plural and distributive phrase (“each of the N turns”) chosen by a ternary in code (4.1); the checker reads the template literal as code |
| ch23/23.1/figures.js | sim-magnet-coil readout: “The coil is moving onto / off the magnet”, “The magnet is moving into / out of the coil” | written 线圈正套向 / 离开磁体, 磁体正进入 / 离开线圈; the ternaries are kept | English prepositions chosen by a ternary in code have no Chinese form; Chinese takes a verb for each (4.1) |
| ch23/23.2/figures.js | sim-faraday topline: ${N === 1 ? ‘carries’ : ‘carry’} and the neighbouring ${N === 1 ? ‘a single turn’ : N + ‘ turns’} | the verb branch collapses to the one form 产生; the turn branch is kept as 单匝 / N 匝, the glossary deciding 单匝 (a single turn) and 一匝导线 (one turn of wire) | English subject-verb agreement built in figure code (4.1) |
| ch23/23.3/figures.js | sim-rod-rails topline (moving branch): “The rod has moved dx m in tau s”; the readout small lines of sim-rod-rails and sim-relative-motion and the topline and readout small lines of sim-tether (“… is the V the rod develops”) | the operands are taken in Chinese order: 杆在 tau s 内运动了 dx m, the time phrase first; 就是杆产生的 V | Chinese word order in strings built from operands in code (4.1) |
| ch23/23.3/figures.js | sim-relative-motion hbracket label: fmt(width) + ‘ m of rail enclosed’ | written ‘所围导轨长度 ’ + fmt(width) + ‘ m’ | the noun phrase comes before its value in Chinese; the English trailing phrase is built in code (4.1) |
| ch23/23.3/text.html | #rod-on-rails, #relative-motion, #earths-field: sentences with several data-ref and data-type spans (the tether, velocity and field spans of the Tethered Satellite sentence; the rod pronoun spans of the Figure 23.10 sim-head) | the order of the spans inside the sentence differs from the source; every span stays in its own block and the multiset is the same | Chinese word order (3.3) |
| ch23/23.3/text.html | #relative-motion, #earths-field, the tether example discussion: “the induced field”, “the Earth’s field” | written 感应磁<场> and 地磁<场>, the force-field span on 场 only | Chinese compounds the word field into 磁场, and the span keeps the concept of the source’s “field” (as the chapter 22 pages write 地磁<场>) (3.3) |
| ch23/23.4/figures.js | sim-eddy-currents-in-a-plate hover name of the plate: ‘the ’ + mC.value + ‘ plate, 12 cm across’ | became ({ solid: ‘实心’, slotted: ‘开槽’, insulating: ‘绝缘’ })[mC.value] + ‘板，宽 12 cm’ | the control value is an English word that the hover name prints, so a word table maps it; English noun phrase built in code (4.1) |
| ch23/23.4/figures.js | sim-eddy-currents-in-a-plate label “I runs counterclockwise / clockwise” | the frame ‘I runs ’ + word became ‘I 沿’ + word + ‘方向流动’; the ccw ternary is kept | English clause assembled from fragments in code (4.1) |
| ch23/23.4/figures.js | sim-eddy-currents-in-a-plate hbracket label “N cm of the plate is in the field” | written ‘板有 ’ + N + ‘ cm 在磁场中’, the number behind a leading word | English word order built in code (4.1) |
| ch23/23.4/figures.js | sim-eddy-currents-in-a-plate topline ‘The plate is ’ + where | the words ‘entering the field’ / ‘leaving the field’ became 正在进入磁场 / 正在离开磁场 behind the frame 板; the comparison keys ‘inside’ and ‘clear’ are kept | English clause assembled from fragments in code (4.1) |
| ch23/23.7/figures.js | sim-power-line topline “Sending P MW at V kV …” | the operands are taken in Chinese order: 以 V kV 输送 P MW, V before P | Chinese word order in a string built from operands in code (4.1) |
| ch23/23.7/text.html | sim-head of Figures 23.26 and 23.27; #how-a-transformer-works: the house and the line; the flux and the primary; the primary and the magnetic field it creates | the order of the spans inside the sentence differs from the source; every span stays in its own block | Chinese word order, a relative clause before its noun (3.3) |
| ch23/23.7/text.html | #how-a-transformer-works: “the field strength” (of the field the core carries) | written 磁场的强度, the force-field span on 场 and the magnetic-field span round the phrase kept | 磁场强度 names H in Chinese, a different quantity from the B the source means (a collision of the kind of 4.5) |
| ch23/23.8/figures.js | sim-three-wire readout \text{A, so the breaker opens} | the words inside the \text{} of the template-literal readout are translated: \text{A，所以断路器断开} | the words of a readout’s \text{} are translated (translate.md 5); the checker reads this template literal as code and lists the line as a code replacement |
| ch23/23.8/figures.js | sim-worn-insulation topline and readout small line: ‘more than’ / ‘still within’, ‘past’ / ‘still under’, ‘opens …’ / ‘holds …’ | the branch words are written as 超过了 / 仍未超过 and 超过了 / 仍低于, with 额定值 before fmt(RATE, 1) and the operands in the source order | English comparison and verb grammar built in code (4.1) |
| ch23/23.8/figures.js | sim-three-wire topline “… from the V supply …” | reshaped as ‘，电源为 V，’ so that the three operands amps(I), fmt(VS, 0) and fmt(rate, 0) stay in the source order | Chinese word order in a string built from operands in code (4.1) |
| ch23/23.8/figures.js | sim-gfi readout small line: ‘interrupts the circuit, whether …’ / ‘lets the circuit stand, …’ | written 会切断电路 / 让电路保持原状 after 所以这个 GFI | English verb agreement built in code (4.1) |
| ch23/23.8/text.html | #three-wire: “earth or ground (hereafter referred to as “earth/ground”)” and “live/hot (hereafter “live/hot”)” | written （以下称为“地”） and 火线，也叫带电导线（以下称为“火线”）; the English slashes are not carried | a sentence about the book’s own shorthand for two English names (4.3); the meaning is kept with the chapter’s terms 地 and 火线 |
| ch23/23.8/text.html | #three-wire, how power is distributed: “power” | written 电力 inside the data-concept power span | the glossary row power (electric supply) is 电力; the physical quantity 功率 would be wrong for the supply of electricity (collision, 4.5) |
| ch23/23.8/text.html | #three-wire and the sim heads: sentences with several spans (the case and appliance spans of the sentence on the protective case; the earth/ground wire and case spans of the third connection) | the order of the spans inside the sentence differs from the source in places; every span stays in its own block | Chinese word order (3.3) |
| ch23/23.8/text.html | #grounded-case: “Current driven by the induced case emf is called a leakage current” | written <em>漏<span>电流</span></em>, the data-concept span on 电流 only inside the <em> | the source span wraps only “current”; the glossary term 漏电流 is one word in Chinese (3.3) |
| ch23/23.11/text.html | #inductors-and-inductive-reactance and #capacitors-and-capacitive-reactance: “… is called the inductive / capacitive reactance, because the inductor / capacitor reacts to impede the current” | translated for meaning with the English verb kept in parentheses: 因为电感器 / 电容器会做出反应（react）以阻碍电流 | the name “reactance” is explained by the English verb “react”; 感抗 and 容抗 carry no such link (4.2, 4.3) |
| ch23/23.1/text.html | #changing-field, paragraph 1: “a magnetic field is produced in the coil on the top part of the iron ring” | written 铁环上方的线圈中产生磁场, the spans in the order iron-ring, top-coil, magnetic-field; every span stays in its own block | Chinese word order, the place before the verb (3.3) |
| ch23/23.6/figures.js | sim-dimming-lights readout small line: “The lamp turns P W into light and heat, against the P_full W it takes at the full V V.” | the operands are taken in Chinese order: 灯把 P W 转化为光和热，而在完整的 V V 下它取用 P_full W，the voltage before the full power | Chinese word order in a string built from operands in code (4.1) |

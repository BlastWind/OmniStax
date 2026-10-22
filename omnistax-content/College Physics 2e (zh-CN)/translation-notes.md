# Translation notes: 大学物理（第2版）

Every forced scenario of the translation of `College Physics 2e` into zh-CN
(`docs/prompts/translate.md` item 4), and anything else the owner should see: one entry per
place, with the file, the span or line, what was done and why.

| File | Span or line | What was done | Why |
|---|---|---|---|
| book.json | `title` | 大学物理（第2版） | No official Chinese edition of OpenStax College Physics exists. 大学物理 is how Chinese names the university general-physics course and its textbooks; the edition is marked （第2版）, the Chinese convention, not `2e`. Owner to confirm; OpenStax University Physics would also render as 大学物理, so a future translation of it will need a distinguishing title. |
| book.json | `concepts` outside chapter 1 | kept in English | The concepts table is copied whole so every id matches the source; only the 34 concepts of sections 1.1–1.4 are translated in the pilot. |
| glossary.zh-CN.json | every row with `"confirm": "termonline"` | term taken from the named published authority | termonline.cn could not be reached from the build environment (DNS failure and proxy 403); each term is to be confirmed there and its entry URL added. |
| book.json | `types[stiffness].label` | 劲度系数 | The book's "force constant" for Hooke's k; 劲度系数 is the Chinese standard name of a spring's k, while 力常量 names the molecular force constant. |
| book.json | `types[lens-power].label` | 光焦度 | Collision (translate.md 4.5): power is 功率; the power of a lens takes the authority's distinct term. |
| glossary.zh-CN.json | English units / imperial system | 英制单位 / 英帝国单位制 | Collision (translate.md 4.5): 英制 alone would name both; the imperial system takes the qualified form. |
| book.json | `concepts[approximation].statement` | “粗估” for “guesstimates” | Forced scenario 4.2: an English blend word, rendered for meaning in the quotation marks the book gives it. |
| ch01 text.html | every figure eyebrow | `Figure N.M` and `Sim` kept | Forced scenario 4.6: the checker matches the eyebrow against its row exactly; the app localises it. |
| ch01 text.html | figure citations in prose | to be written 图 N.M by the section agents | Forced scenario 4.6: the app links only the English `Figure N.M`, so a translated citation stays plain text until the app's link pattern reads 图. |
| book.json | `exercise_kinds[].label` | 理解检测, 习题, 思考题, AP 备考练习 | The book's own labels have no authority; 思考题 (not the literal 概念题) is the established Chinese label for a conceptual question. Owner to confirm. |

## Chapter 1 sections

The forced scenarios the five section translators recorded (folded in from their `glossary-pending.json` files in the 2026-10-22 merge), grouped by section. The intro recorded none.

### ch01/1.1

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch01/1.1/figures.js | sim-atom-model | plural branches z === 1 ? ' electron' : ' electrons', ' proton'/' protons', ' electron goes'/' electrons go' and the readout unit '\text{ electron}'/'\text{ electrons}' collapsed to one Chinese form (个电子, 个质子) | English grammar in figure code (4.1) |
| ch01/1.1/figures.js | sim-atom-model | the a/an article chosen by /^[aeiou]/ collapsed to '' (const an = '') | English grammar in figure code (4.1) |
| ch01/1.1/figures.js | sim-atom-model | WORDS written 一, 两, 三 … (两 for two, as Chinese counts with a measure word); the slider label \text{electrons} written \text{电子数} | Chinese has no plural, so the bare plural noun that names a count becomes 电子数 (4.1) |
| ch01/1.1/text.html | classical-modern | The word physics comes from Greek: *物理学*（physics）一词来源于希腊语, the English word kept in parentheses | a sentence about the origin of an English word (4.3) |
| ch01/1.1/text.html | models | the Theory of Evolution and the Theory of Relativity written 进化理论和相对论这两种理论, the second theory span moved onto 这两种理论 | 相对论 already contains 论, so 相对论理论 would double it; the two theory spans and the relativity span are kept (4.5-like collision of the term with its own name) |
| ch01/1.1/text.html | realm, applications, models, classical-modern | within some paragraphs the order of data-concept spans differs from the source (e.g. 光速的约 1% inside data-type velocity, 经典物理学的定律, 物理学定律) | Chinese word order; every span is kept in its block with the same multiset |
| ch01/1.1/figures.js | sim-atom-model shell legend | operands n and SHELL[s] swapped to read 'SHELL 个电子中的 n 个' | Chinese word order |

### ch01/1.2

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch01/1.2/figures.js | sim-ladder headline (own-prefix branch) | 'a ' + own[1] + 'meter being' collapsed to '1 ' + own[1] + '米为'; the PREFIX display names are the GB 3100 short Chinese prefix names | English article and word built from the prefix name by rule (4.1) |
| ch01/1.2/figures.js | sim-ladder LENGTHS | articles of the label strings ('a proton', 'the Earth') dropped; 'a light year' rendered 1 光年 | English articles have no Chinese form (4.1) |
| ch01/1.2/text.html | base-units / prefixes notes and conversion note (firkin, barleycorn); fig-map alt (cables) | 费尔金（firkin）, 大麦粒（barleycorn）, “链”（cable）: the English unit name kept in parentheses after the Chinese | obscure English units with no fixed Chinese name (4.4) |
| ch01/1.2/text.html | prefixes table row peta; fig-galaxies caption | 30 million years → 3000 万年; 2.4 billion light years → 24 亿光年 | Chinese counts in 万/亿, it has no word for million or billion (4.4); the values are unchanged |
| ch01/1.2/section.json | exercises[p5].answer.parts[].part | part labels 'length in feet', 'length in inches', 'width in feet', 'width in inches' left in English | translate.md 5 lists answer.parts[].part as kept byte for byte, although these four are reader-visible words; orchestrator to decide |
| ch01/1.2/text.html | base-units, sentence on Electric Current, Resistance, and Ohm's Law | the cited chapter title is set in “” | Chinese marks a cited title; no words added |
| ch01/1.2/figures.js | sim-light-meter and sim-drive headlines | operand order changed (T before D; D before pos; leading literal dropped) | Chinese word order |

### ch01/1.3

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch01/1.3/figures.js | sim-calc, product line ('the product keeps …') | the plural branch n === 1 ? ' significant figure' : ' significant figures' collapsed to the one form '位有效数字' | English plural grammar in figure code (translate.md 4.1) |
| ch01/1.3/figures.js | sim-ruler headline and readout small line; sim-calc 'since … has only N' | the measure word 位 appended after words(n), where the English ends on the bare number word ('…, four.') | Chinese requires a classifier after a numeral (translate.md 4.1, grammar built from English) |
| ch01/1.3/text.html, ch01/1.3/figures.js | #percent-uncertainty, #ex-apples display math; sim-percent readout | \text{unc} in %\,\text{unc} kept as written | an abbreviation of the English word uncertainty used as a symbol in the formula; translating it would change the formula (translate.md 4.3) |
| ch01/1.3/text.html | #uncertainty, “delta $A$” | the spoken name delta of the Greek letter kept | a sentence about how a symbol is read; Chinese readers also say delta (translate.md 4.3) |
| ch01/1.3/text.html, ch01/1.3/section.json | #accuracy-precision, #uncertainty, #ex-apples; exercises cyu3, p3, p13 | U.S. customary units keep their symbols (in., lb, mi) where the book prints a symbol, and take the Chinese names 英寸, 磅, 英里 where it writes the word | units with no Chinese equivalent (translate.md 4.4) |
| ch01/1.3/section.json | exercises[cyu3].prompt | the book's slip 'one bag weighs of 10.2 pounds' rendered as plain 另一个袋子重 10.2 磅 | a grammatical typo of the English that has no Chinese equivalent; the meaning is unchanged |
| ch01/1.3/section.json | exercises[*].answer unit and parts[].part (cyu2, cyu3, p3, p5, p9, p11, p15, p17) | kept in English ('figures', 'pounds', 'beats', 'beats/min', '(a) lowest', 'heart rate', 'volume', 'area', 'uncertainty') | translate.md 5 lists answer.unit and parts[].part as kept; if the app shows them to readers, the owner should decide whether they become translatable |
| ch01/1.3/figures.js | sim-calc sum line | PLACES[dec] moved after the a/b branch | Chinese word order |

### ch01/1.4

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch01/1.4/figures.js | sim-building | plural and agreement branches collapsed to one Chinese form: ' person'/' persons' (inset label and readout \text{}) to 个人 / \text{人}, ' story'/' stories' (building label and readout \text{}) to 层 / \text{层}, 'is'/'are' in the running headline dropped and n / N.v swapped in the running headline (Chinese word order), and the done headline's N.v === 1 branch ('One story of about …' vs 'N stories of about … each') merged into N.v + ' 层，每层约 … m，楼高约 … m。' | English grammar in figure code (translate.md 4.1) |
| ch01/1.4/text.html, ch01/1.4/figures.js | ex-trillion, sim-trillion | feet, inches, yards, square yards and square inches named in prose as 英尺、英寸、码、平方码、平方英寸 ('feet/inches' to 英尺/英寸, 'converting to feet' to 换算成英尺, 'in square inches' to 以平方英寸计, the sim's 'less than a foot' to 不到一英尺, its sim-head 'in feet' to 以英尺为单位); the symbols in., ft, yd kept as printed in spans, math and figure labels | a unit with no SI equivalent keeps its symbol and takes the target name in prose (translate.md 4.4) |
| ch01/1.4/text.html | approximation, example-trillion | “guesstimates” rendered “粗估” in both places, in the book's quotation marks; 'rough “guesstimates”' kept as 粗略的“粗估”, the adjective kept though 粗估 already carries it | English blend word (translate.md 4.2), as the glossary row guesstimate fixes it |

## Chapter 2 sections

The forced scenarios the nine page translators recorded (folded in from their `glossary-pending.json` files in the 2026-10-22 merge), grouped by section, after the rows that hold for the whole chapter.

### ch02 (whole chapter)

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch02/2.5/section.json | exercises[p18].answer.solution, `v_{\text{max}}` | `\text{max}` and `\text{min}` kept as written where they are a subscript or label (a translator's `\text{最大}` put back to `\text{max}`); `\text{min}` meaning minutes is a unit and stays too | Chinese textbooks keep max and min as symbol abbreviations, as 1.3 keeps `\text{unc}`; translating one would change the symbol (translate.md 4.3) |
| ch02/2.8/section.json | exercises[cyu1].figure.caption | 'Figure 2.50' written 图 2.50, while the figure eyebrows `Figure N.M` and `Sim` in text.html stay English | an exercise figure caption is a citation of a figure in prose, which is translated (4.6); the eyebrow is chrome the checker matches exactly |
| every ch02 text.html, section.json and figures.js | "at various times", "time equal to zero", initial/final time, "chosen time" | a point in time written 时刻 (初时刻, 末时刻, 选定时刻); the quantity time and the interval stay 时间 and 时间间隔 | Chinese separates 时刻 (an instant) from 时间 (a duration) where English says time for both; the glossary rows instant and time carry the rule |
| every ch02 text.html | boxed-note eyebrows `Misconception Alert`, `Take-Home Experiment` | written 误区提醒 and 居家实验, the glossary rows (also in `建立联系：居家探究——…` and `误区提醒：…` headings) | labels of the book's own apparatus have no authority; they are rendered once and listed for the owner (translate.md 2.6) |

### ch02/intro

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch02/intro/text.html | #motion, paragraph 3, sentence on the origin of 'kinematics' | 运动学 is followed by (kinematics), and “cinema” (电影) and “kinesiology” (研究人体运动的运动机能学) keep the English word with its Chinese gloss | a sentence about English words and their Greek origin (translate.md 4.3) |
| ch02/intro/text.html | #motion, paragraph 3, cited chapter title Two-Dimensional Kinematics | set as “二维运动学” in quotation marks, matching the glossary row for chapter 3's title; 'one-dimensional kinematics' left unquoted as in the source | Chinese marks a cited title; no words added (as in ch01/1.2) |

### ch02/2.1

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch02/2.1/figures.js | sim-displacement topline (non-zero branch) | 'The displacement of ' + who + ' is …' reordered to who + '的位移为 …', and the direction word (dir, now 向右/向左) moved ahead of the number: '…，即向右 2.0 m。' | Chinese word order; the English phrase 'm to the right' cannot be kept in sequence (4.1, grammar built in code) |
| ch02/2.1/figures.js | sim-displacement WHO.pron / who | the pronouns she/he written 她/他 and 'the professor'/'the passenger' written 教授/乘客 | English grammar in figure code (4.1): the strings are spliced into the headline |
| ch02/2.1/figures.js | sim-path x_turn slider label \kx_{\text{turn}} | subscript \text{turn} kept as written | an abbreviation of the English word used as a symbol subscript in the formula; translating it would change the symbol (4.3, as 1.3 \text{unc}) |
| ch02/2.1/text.html | #distance first paragraph, 'magnitude or size of displacement' | magnitude or size written once, 大小 | Chinese 大小 carries both words; a synonym pair has no Chinese pair (4.1 grammar) |
| ch02/2.1/text.html | #distance misconception note, 'displacement and magnitude of displacement' | written <span displacement>位移</span>和<span displacement>位移</span>的<span magnitude>大小</span>, the spans in Chinese order | span order follows Chinese word order; every span of the block is kept |
| ch02/2.1/text.html | #displacement, 'has moved, or has been displaced' | written 已经移动，即已经发生了位移 | the English verb displaced and the noun displacement share a root; Chinese has 位移 only as the noun |

### ch02/2.2

None recorded.

### ch02/2.3

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch02/2.3/figures.js | sim-elapsed-time swing counter | plural branch swings === 1 ? ' swing' : ' swings' collapsed to the one Chinese form '自 t₀ 起已摆动 N 次' | English grammar in figure code (4.1) |
| ch02/2.3/figures.js | sim-segments topline | plural branch n === 1 ? ' interval' : ' intervals' collapsed to the one form ' 个区间'; 'of 1.25 s' becomes '每个区间 1.25 s' | English grammar in figure code (4.1) |
| ch02/2.3/figures.js | sim-elapsed-time headline, sim-average-velocity headline | singular/plural agreement ('is'/'are', 'full swings') dropped; a count takes the measure word 次 | English grammar in figure code (4.1); Chinese needs a classifier after a numeral |
| ch02/2.3/section.json | exercises[p5].answer.parts[].part ('in km/h', 'in m/s') and p7 parts ('(a) average speed', …), answer.unit ('rev/s', 'km/h') | kept in English | translate.md 5 lists answer.parts[].part and answer.unit as kept byte for byte; owner to decide, as for 1.2 and 1.3 |
| ch02/2.3/figures.js | sim-elapsed-time headline (running), sim-average-velocity headline, sim-segments topline, sim-store topline | the interpolated values (fmt(...), signed(...)) appear in a different order from the English because Chinese word order puts the amount before the reference (e.g. '运动在 t0 s 开始之后 τ s'); each value is still used once | Chinese word order in sentences built by code (translate.md 3.1/4.1) |

### ch02/2.4

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch02/2.4/text.html | average-acceleration, first paragraph | 'to accelerate means to speed up' rendered “加速”的意思是变快, and 'The accelerator in a car can in fact cause it to speed up' rendered 汽车的油门确实能使它加速 | The sentence is about the everyday meaning of the English word accelerate, whose root it shares with accelerator; 加速 alone would make the first sentence say that 加速 means 加速, so the gloss uses 变快 (4.2/4.3) |
| ch02/2.4/text.html | vector, sim-turning and cq1 solution: 'it is accelerating' of a car whose direction changes | rendered 具有加速度 (has acceleration), not 在加速 | Collision (4.5): the glossary fixes accelerate and speed up both as 加速, but the book here uses accelerating for any change of velocity, including a pure change of direction, where 在加速 would say the car speeds up |
| ch02/2.4/text.html | subway, 'the shuttle' | rendered 这列往返列车 for 'the shuttle' (a span of data-ref train) | The book calls the subway train a shuttle once; the Chinese keeps the word's sense (4.4, no equivalent in one word) |
| ch02/2.4/figures.js | accelSim subject 'the horse' / 'the train' | the articles built into the subject strings dropped: 这匹马 / 列车 (the subject is spliced into several story() sentences) | English articles have no Chinese form (4.1) |
| ch02/2.4/figures.js | accelSim story(), dirName and the due-west small line | 'to the ' + dirName(a), 'due west/east' and 'westward/eastward' rebuilt as 指向 + 东/西/右/左, 正西/正东 and 向西/向东 in the same branches | Direction phrases assembled from English prepositions and adverbs by code (4.1) |
| ch02/2.4/figures.js | topline / headline openings 'After t s …', 'At t s …', 'In t s …' | each opening that began with an English word before the number is written 经过 t s 后 / 在 t s 时 / 在 t s 内 with a leading string so the code order is kept | English prepositions put the number mid-sentence; Chinese needs a leading word to keep the same concatenation (4.1) |
| ch02/2.4/figures.js | sim-subway-velocity topline, 'P percent of the way along a trip of D km' | written 已完成百分之 P，这趟行程共 D km, the number order of the source kept | English word order 'percent of the way along a trip of' cannot keep the same two numbers in order in one Chinese phrase (4.1) |

### ch02/2.5

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch02/2.5/text.html | Making Connections: Take-Home Experiment—Breaking News (eyebrow) | the pun 'Breaking News' (breaking for braking) rendered 刹车实测, as glossary.zh-CN.json fixes it; the English is not kept in parentheses | wordplay that works only in English (translate.md 4.2); the glossary row had already resolved it |
| ch02/2.5/text.html | #final-velocity, #velocity-squared, #position-quadratic, #ex-dragster, #ex-dragster2, ex-braking (c), the Take-Home Experiment | English units named in prose as 英里 (quarter mile 四分之一英里) and 英里每小时 (miles per hour) where the source writes the word; the symbols mi/h and mi stay where the source prints a symbol | a unit with no SI equivalent keeps its symbol and takes the Chinese name in prose (translate.md 4.4) |

### ch02/2.6

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch02/2.6/figures.js | sim-runner WORDS / times() | 'two times' built from the WORDS array and ' times' written 两倍, 三倍 … (WORDS now holds Chinese numerals, times() appends 倍) | English number words and plural 'times' built in code (4.1) |
| ch02/2.6/figures.js | sim-runner topline | the 'would be at' / 'has reached' / 'about N times what a person can run' branches rewritten as Chinese clauses of the same three cases; 'the runner' written 跑步者 | English clause grammar assembled in figure code (4.1) |

### ch02/2.7

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch02/2.7/text.html | #rock-up, #rock-down, #find-g, sim-heads of Figures 2.38-2.43 | within some sentences the order of data-ref, data-type and data-concept spans differs from the source (e.g. the rock, time and position spans of the Example 2.14 question; the ball, position and time spans of the Figure 2.42 sim-head); the pronoun spans (它, 其) are repeated where Chinese would drop the pronoun | Chinese word order and zero pronouns; every span is kept inside its own block with the same multiset (fidelity, spans never dropped) |

### ch02/2.8

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch02/2.8/text.html | #slopes, y-intercept | <strong><em>y</em>-intercept</strong> written <strong>纵截距（<em>y</em> 截距）</strong> | the glossary fixes y-intercept as 纵截距, which contains no y, yet the markup keeps the <em>y</em> inside the <strong>; the em wraps the letter in a parenthetical alias so no tag is dropped (translate.md 5, markup kept) |
| ch02/2.8/text.html | #x-t note, #v-t, other motion equations | 'other <span data-concept="motion">motion</span> equations' written 其他<span>运动</span>学方程, the span wrapping only 运动 of 运动学方程 | the glossary renders motion equations as 运动学方程; the span of the source cannot be dropped, so it wraps the morpheme that carries the concept (4.5-like) |
| ch02/2.8/figures.js | sim-line headline verb | the branch 'rises '/'falls '/'is level, rising 0.0,' rewritten as '上升 '/'下降 '/'保持水平，上升 0.0' and the sentence reordered to open with 横向增量为 2.0 时，直线… | English clause built from a verb branch with its own commas and a trailing 'for a run of 2.0'; the Chinese clause order differs (4.1) |
| ch02/2.8/figures.js | sim-jet-xt, sim-tangent, sim-jet-top headlines | sentence-initial English strings ('At ', 'Between ', 'After ') rewritten as Chinese time-phrase openers ('在 … s 时', '经过 … s 后'), and the 'a rise of … over a run of …' pair as 纵向增量 … 对应的横向增量 … | English phrase order built into code strings has no Chinese form (4.1) |
| ch02/2.8/section.json | exercises[p3].answer.parts[].part and .unit | '(a) velocity at 10.0 s', '(a) velocity at 30 s', '(b) acceleration at 20 s' left in English | translate.md 5 lists answer.parts[].part as kept byte for byte, although these three are reader-visible words; orchestrator to decide (as for 1.2 and 1.3) |
| ch02/2.8/section.json | exercises[p3].prompt | the book's slip (no '(a)' before 'Using approximate values', 'part a') rendered literally: no （a） label, 'a 部分' | an error of the book stays (translate.md 3.2) |

## Chapter 3 sections

The forced scenarios the six page translators recorded (folded in from their `glossary-pending.json` files in the 2026-10-22 merge), grouped by section.

### ch03/intro

None recorded.

### ch03/3.1

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch03/3.1/figures.js | sim-walk label of the a side, label of the b side | the plural branches e === 1 ? ' block east' : ' blocks east' and n === 1 ? ' block north' : ' blocks north' collapsed to the one form ' 个街区', with 向东/向北 moved before the number | English grammar in figure code (4.1) |
| ch03/3.1/figures.js | sim-walk readout bl() | the branch k === 1 ? '\ \text{block}' : '\ \text{blocks}' collapsed to '\ \text{街区}' | English grammar in figure code (4.1) |
| ch03/3.1/figures.js | sim-walk topline (three branches) | 'N blocks' phrases written N 个街区 with the measure word 个; 'the walker has gone x of the N blocks' written 行人已走了 x 个街区（共 N 个）, the same four numbers in the same order | Chinese needs a measure word after a numeral; grammar assembled by code (4.1) |
| ch03/3.1/text.html | #vectors, #independence | 'Vector Addition and Subtraction: Graphical/Analytical Methods' cited by the glossary titles in quotation marks, the vector-addition span wrapping 矢量的加法 | Chinese marks a cited title; the span wraps the morpheme that carries the concept |
| ch03/3.1/text.html | #independence, paragraph on the stroboscope | the clause 'as they fall' moved to the front (当它们下落时，频闪仪…) so that every span of the source keeps a place | Chinese word order |

### ch03/3.2

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch03/3.2/figures.js | compass() helper (used by the toplines of sim-vector-2d, sim-head-to-tail, sim-walk, sim-order, sim-subtraction, sim-scalar, sim-components) | the literal moved before the number: fmt(a, dec) + '° north of east' became '东偏北 ' + fmt(a, dec) + '°' (and 东偏南 for south) | Chinese word order: the bearing is written 东偏北 29.1°, with the number after the phrase (word order of a string built in code) |
| ch03/3.2/figures.js | sim-head-to-tail stage labels (fmt(e, 0) + ' blocks east', fmt(n, 0) + ' blocks north') | operand order swapped to '向东 ' + fmt(e, 0) + ' 个街区' and '向北 ' + fmt(n, 0) + ' 个街区' | Chinese word order: the direction comes before the count |
| ch03/3.2/figures.js | sim-components stage labels (fmt(ex, 1) + ' blocks east', fmt(no, 1) + ' blocks north') and topline | operand order swapped to '向东 ' + fmt(ex, 1) + ' 个街区' / '向北 ' + fmt(no, 1) + ' 个街区'; the topline now begins with compass(th) and the displacement magnitude follows ('东偏北 29.0°、10.3 个街区的位移，是向东 … 个街区和向北 … 个街区。') | Chinese word order |
| ch03/3.2/figures.js | sim-scalar topline | the leading literal 'Multiplying ' dropped, so the string begins with fmt(A.v, 1) ('27.5 m 乘以 3.0，得到 82.5 m，方向相同：东偏北 66.0°。'); the zero case likewise | Chinese word order: 乘以 follows the operand |
| ch03/3.2/text.html, ch03/3.2/section.json, ch03/3.2/figures.js, ch03/3.3/text.html, ch03/3.3/section.json; ch02/2.4/text.html | every head and tail of a vector (#head-to-tail and the steps, sim-heads of Figures 3.10–3.23, 3.27 and 3.33, original_captions, exercise hints and alts, concepts vector-head and vector-tail; ch02/2.4 sim-head 'tails together') | head of a vector written 矢端 and tail 矢尾; the drawn vector (the arrow) stays 箭头 and the tip of the arrowhead 箭尖; 'this arrow' and 'the first arrow' written 这支箭头 and 第一支箭头 | collision (translate.md 4.5): the glossary target of arrow (a drawn vector) is 箭头, and the textbook target of the head of a vector was also 箭头, so 'arrow … from its head' read ambiguously; the more specific term takes the qualified textbook form 矢端/矢尾, and the rows arrow, head (of a vector), head of a vector, tail and tail of a vector say so |

### ch03/3.3

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch03/3.3/figures.js | bearing() helper (headlines of sim-resultant, sim-add, sim-subtract) | the string built as '29.1° north of east' (value, then ns, then 'of east/west') is rebuilt as '东偏北 29.1°': the direction words come first and the value after; the north/south choice stays as code, due east/west/north/south become 正东/正西/正北/正南 | English word order built by code (translate.md 3.1/4.1); the Chinese compass offset puts the reference direction before the angle |

### ch03/3.4

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch03/3.4/text.html | #projectile, #steps, #recombine, #max-height, #impact, #range, #orbit: sentences carrying several data-concept/data-type/data-ref spans | the order of spans inside a sentence differs from the source (e.g. 'the magnitudes of these vectors' written 这些矢量的大小, 'the angle it makes' moved after the components, 'the final velocity' with its magnitude); every span stays in its own block with the same multiset | Chinese word order (translate.md 3.3) |
| ch03/3.4/text.html | #projectile, last parenthesis: 'the component vectors' | written 分矢量 with the two source spans split over its two morphemes: <span vector-components>分</span><span vector>矢量</span> | the glossary row component notes 分矢量 for the vector itself; no span of the source can be dropped or merged (translate.md 5) |
| ch03/3.4/text.html, ch03/3.4/section.json, ch03/3.4/figures.js | every bare 'range' of a projectile (#range, #orbit, sim-head 3.38/3.39, captions, exercises cq3, p5, p7, p11, p15, p23, p25) | written 射程, the glossary row range (horizontal distance of a projectile); range (a difference of two measured values) stays 极差 and does not occur on this page | collision (translate.md 4.5): the standard translation of range in statistics, 极差, is not the projectile's range; the glossary rows fix the choice |
| ch03/3.4/text.html, ch03/3.4/section.json | fireworks shell (Example 3.4, Figure 3.36, referent shell) and the artillery shell of exercise p9 | fireworks shell written 烟花弹 (glossary row), artillery shell written 炮弹; shell alone (壳层, electron shell) does not occur | collision (translate.md 4.5): the glossary's shell 壳层 is the atomic shell |
| ch03/3.4/text.html, ch03/3.4/section.json | Example 3.5, Figure 3.37, referent rock, exercise text on the volcano | rock written 岩石 throughout (the glossary rows for Example 3.5 and the referent label), not 石块 | collision (translate.md 4.5): the glossary row rock 石块 names a stone; the glossary's own Example 3.5 rows use 岩石 |
| ch03/3.4/section.json | exercises[p19].prompt, 'at her/ his goal' | written 在自己的球门处, the pronoun pair dropped | English gendered pronoun pair with no Chinese form (translate.md 4.1, grammar) |
| ch03/3.4/section.json | exercises[ct1].answer.solution, img alt, 'v sub zero A' | spoken form translated literally: v 下标零 A | the alt text reads a subscript aloud in English; the Chinese reading keeps the same structure (4.3) |
| ch03/3.4/figures.js | sim-orbit landing label, lab.add(sig3(along) + ' km along the surface') | written '沿地表 ' + sig3(along) + ' km', the number moved after the words | Chinese phrase order in a label assembled by code (4.1); the same words, number and unit in the order the Chinese reads, as for the compass labels of 3.5 |

### ch03/3.5

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch03/3.5/figures.js | compass() (used by sim-plane and sim-wind headlines and readouts) | '20.0° west of north', 'due north' and 'in no direction at all' written 北偏西 20.0°, 正北 and 无: base and side words are the Chinese 东/西/南/北, the order base + 偏 + side + angle replaces angle + side + 'of' + base | English compass phrase built from words and a preposition in code (4.1) |
| ch03/3.5/figures.js | windWords() | 'a headwind', 'a tailwind', 'a crosswind' and 'partly … and partly …' written 逆风, 顺风, 侧风 and 一部分是…，一部分是…, with the copula 是 moved into the returned string | English article/adverb grammar built in figure code (4.1) |
| ch03/3.5/figures.js | sim-plane topline and readout small line, sim-wind topline and readout small line | the sentence frames ('The plane points north at … but moves at … , <dir>, relative to the ground', 'its track runs <dir>', 'is the same as / less than / greater than', 'toward <dir>', 'measured from the negative/positive x-axis') reordered into Chinese clauses (…方向为<dir>, 等于/小于/大于, 吹向<dir>, 从 x 轴的负/正方向量起); every interpolated value is still used once | Chinese word order in sentences assembled by code (4.1) |
| ch03/3.5/figures.js | sim-boat topline, lands-off-the-picture label and small line | 'lands X m downstream, off the picture' written 靠岸处在下游 X m，已超出画面; 'straight across from where it set out' / 'X m downstream' written 正好在出发点的对面 / 在出发点的下游 X m 处; 'After t s … is X m downstream of where it set out' written 经过 t s 后，…位于出发点下游 X m 处; 'Pointed N° upstream of straight across' written 船头比正对对岸偏向上游 N° | Direction and position phrases built from English prepositions and adverbs in code (4.1) |
| ch03/3.5/figures.js | sim-wind angleArc label | the label fmt(\|b\|) + '° west of north' / '° east of north' written 北偏西 N° / 北偏东 N° (the number moved after the words) | Chinese compass phrase order (4.1) |
| ch03/3.5/figures.js | sim-components texNote | the \text{} connectors 'Back again', ', and with … the angle is', 'is 180° from … because' written 再返回来：, ，且当…时，角为, 与…相差 180°，因为 inside the same \text{} runs | Chinese word order in a sentence assembled by code (4.1) |
| ch03/3.5/text.html, ch03/3.5/figures.js | \mathbf{v}_{\text{tot}}, \text{boat}, \text{river}, \text{w}, \text{p}; figures.js \kv_{\text{ship}}, \kv_{\text{plane}} | subscripts inside \text{} kept as written | abbreviations and words used as symbol subscripts that the \k macros (symbols table, kept) also print; translating one would change the symbol (4.3, as 2.1 \text{turn}) |
| ch03/3.5/text.html | #relativity, second paragraph, 'his modern theory of relativity' | written 他的<em>近代</em><span relativity>相对论</span>这一<span theory>理论</span>, the two spans kept in that order and the second theory-span set on 这一理论 | 相对论 already contains 论, so 相对论理论 would double it; same resolution as 1.1 (4.5-like collision of the term with its own name) |
| ch03/3.5/text.html | sim-heads of Figures 3.40–3.46, #relativity and #coin paragraphs | within some sentences the order of data-ref, data-type and data-concept spans differs from the source (e.g. the velocity and river spans of the triangle sentence of Figure 3.40; 'while the binoculars are falling' set before 'the same distance forward'; the pronoun spans repeated where Chinese would drop the pronoun) | Chinese word order and zero pronouns; every span is kept inside its own block with the same multiset |
| ch03/3.5/section.json | exercises[p13].answer.solution, exercises[p13].figure.alt | '20.2 billion years' written 202 亿年 and 'three hundred millions of light years' written 三亿光年 | Chinese counts in 万/亿, it has no word for million or billion (4.4); the values are unchanged |
| ch03/3.5/section.json | exercises[p5, p7, p11, p15].answer.parts[].part; exercises[p13].answer.parts[].unit | 'speed', 'angle above the ground', '(a) speed', '(a) angle south of west', 'angle south of west', 'angle north of east', 'km/s per Mly', 'billion years' left in English | translate.md 5 lists answer.parts[].part and answer.unit as kept byte for byte, although these are reader-visible words; owner to decide (as for 1.2, 1.3, 2.3, 2.8) |
| ch03/3.5/figures.js, ch03/3.5/text.html | fig-galaxies labels '300 Mly' etc.; original_caption '(Mly)' | the labels on the canvas are written 300 百万光年 (the glossary row Mly spells the abbreviation out), while the caption keeps '百万光年（Mly）' once and '(MW)' beside 银河系, since the figure image itself prints them | an abbreviation printed in the book's figure; the glossary fixes the spelled-out form for labels the code draws |

## Chapter 4 sections

The forced scenarios the nine page translators recorded (folded in from their `glossary-pending.json` files in the 2026-10-22 merge), grouped by section. The weight and gravity row under ch04/4.3 is the merge's own.

### ch04/intro

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch04/intro/text.html | #observation, last paragraph, 20th century sentence | 20<sup>th</sup> century written 20<sup></sup> 世纪初: the <sup> tag is kept, its English ordinal suffix th is dropped and the tag left empty, so it renders as 20 世纪. Accepted at the ch04 merge | English ordinal suffix with no Chinese form, in a tag the parity check requires (4.1) |

### ch04/4.1

None recorded.

### ch04/4.2

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch04/4.2/figures.js | sim-frictionless headline and readout small line | operand order and sentence frames rebuilt in Chinese order ('On ' + surface + ' the block slides …' to '在' + surface + '上，滑块滑行 … m 后停下'; 'since stopping it would take' to '因为要使它停下需要') | Chinese word order of English sentences built from fragments in figure code (4.1) |
| ch04/4.2/text.html | #first-law, third paragraph | 'due to the net force of friction acting on the object' written 由于物体受到摩擦力这一合力的作用, the friction span on 摩擦力 and the force span on the 力 of 合力 | Chinese has no 'net force of friction' phrase; the force and friction spans are kept in the block with the same multiset (word order) |
| ch04/4.2/text.html | #mass | 'the standard kilogram' written 千克原器, the kilogram span on 千克 alone | the glossary row standard kilogram fixes 千克原器 and the book's span wraps only the word kilogram (4.5-like collision of span and term) |

### ch04/4.3

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch04/4.3/figures.js | sim-sled headline: `(n > 1 ? 'give' : 'gives')` after the rockets-burning phrase | the singular/plural verb branch removed; the sentence is built as WORD[n] + 各 + thrust + 对抗 + friction + 使 2,100 kg 的滑橇获得 + acceleration, with the display array WORD ('One rocket' … 'Four rockets') translated word for word as 一枚火箭 … 四枚火箭 | English grammar in figure code (translate.md 4.1): Chinese verbs do not agree with number |
| ch04/4.3/text.html, ch04/4.3/section.json, ch04/4.4/text.html, ch04/4.4/section.json, ch04/4.5/text.html | #mass-weight and its two notes (4.3), summary_html, cq6 solution and cq10 prompt (4.3), Figure 4.9 caption and ap7 prompt and hint (4.4), #normal-force first sentence (4.5) | weight (the force w = mg) stays 重力. Where the source explains it through 'gravity', 'the gravitational force' or 'the force of gravity', the explanans reads 引力: 重力是作用在物体上的引力的度量; 重力是引力，并且会随各地引力的不同而变化; 进入引力较强或较弱的区域; 这是因为月球上的引力较弱; 'defined as the force of gravity acting on an object of mass m' written as 引力. Where 'gravity' or 'the gravitational force' stands alone for the Earth's pull on a body it reads 重力 (the 4.4 Figure 4.9 caption's w, ap7's 539 N and its hint, the 4.3 cq10 basketball prompt and cq6's rock at the top of its flight, 4.7 p1, 4.8's 'our weight', which were already 重力 and stand). Where it is the interaction between bodies or the fundamental force (4.8's four basic forces, Earth on the Moon, 'gravity holds…', 'such as the gravitational pull', the law of gravity) it stays 引力. In 4.5 'Weight (also called force of gravity)' reads 重力（也称引力）. The everyday word for mass, as in 'mass and weight used interchangeably' and 'weight in kilograms', is 重量 (rows weight (everyday sense), losing weight 减重), and a load is 重物 (row weight (an object used as a load)). The heading rows with 重量 for the force became 重力 (质量与重力, 斜面上的重力, 把重力分解为分量) with old_target. | collision (translate.md 4.5): the authority's 重力 is the Chinese for weight and for the force of gravity, and 引力 for the gravitational force, so a literal rendering explains 重力 by 重力 (circular); the book also calls the Earth's pull on a body, its w, the gravitational force. The rows weight, gravity, force of gravity and gravitational force fix the split, the last one with the note that says where 重力 is meant |

### ch04/4.4

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch04/4.4/figures.js | sim-swimmer, sim-cart, sim-rocket toplines and small line | clauses built by string concatenation reordered or reworded for Chinese (e.g. 'so her 60 kg accelerate at … away from it' to 所以她的 60 kg 以 … 的加速度加速远离池壁; 'On N kg' to 作用于 N kg); every interpolated value kept once in the source order | English clause order built into figure code (translate.md 4.1) |
| ch04/4.4/figures.js | sim-swimmer, sim-cart lb.add and text labels F_{wall on feet}, F_{feet on wall}, F_net, F_floor, F_prof, f; ctl labels \km_{\text{prof}}, \km_{\text{cart}} | force symbols and the subscripts \text{prof} and \text{cart} kept as written, as are the hover names' 'F prof', 'F cart', 'F foot', 'F floor' spoken forms | an abbreviation of the English word used as a symbol subscript; translating it would change the symbol, which the book's macros \kFwallfeet, \kFfeetwall keep in English (translate.md 4.3, as 1.3 \text{unc}) |
| ch04/4.4/section.json, ch04/4.4/text.html | Figure 4.9 caption (original_caption and data-original-caption), ap5 solution, cq5 solution | w, the swimmer's 'gravitational force', written 重力 (w（重力）… 支撑游泳者的重力), the same word the caption uses for her weight; the 引力 first written there was changed at the merge | collision (translate.md 4.5): 'gravitational force' stands alone for the Earth's pull on the swimmer, which is her weight; see the weight and gravity row of ch04/4.3 (the explanans of weight is 引力, the Earth's pull on a body standing alone is 重力) |
| ch04/4.4/section.json | exercises[cq2].prompt | 'the 1940s' written 20 世纪 40 年代 | a decade expression with no word-for-word equivalent (translate.md 4.4) |
| ch04/4.4/text.html, ch04/4.4/section.json | sentences of the sim-heads, #different-systems, #thrust and the Discussions carrying several data-concept/data-type/data-ref spans | the order of spans inside a sentence differs from the source where Chinese word order requires it; every span stays in its own block. Chapter-wide (ch04 review, 2026-10-22): the noun push as a force is 推力 in 4.1, 4.3, 4.4 and 4.5 (row push (force)), 推 only as the verb and in 推或拉; the one place left 推 is 4.4 #sim-swimmer's 她的推的力 ('the force of her push'), where 推力的力 would double the word | Chinese word order and a term collision between push and thrust (translate.md 3.3, 4.5) |
| ch04/4.4/section.json | exercises[p1].answer.parts[].part ('the net external force on the shell', 'the magnitude of the force on the ship') | left in English | translate.md 5 lists answer.parts[].part as kept byte for byte, although these are reader-visible words; owner to decide, as for 1.2, 1.3, 2.3 and 2.8 |

### ch04/4.5

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch04/4.5/text.html | #normal-force, first sentence | 'Weight (also called force of gravity)' written 重力（也称引力）, the force span on 引力 | collision (translate.md 4.5): the glossary maps both weight and force of gravity to 重力, so 'also called' cannot repeat it; the explanans of weight is 引力 (rows weight, force of gravity, gravitational force) |
| ch04/4.5/text.html | #normal-force, 'The word normal means perpendicular to a surface' | written <em>法向</em>（normal）一词的意思是垂直于表面, the English word kept in parentheses | a sentence about an English word (translate.md 4.3); 法向 is the glossary term for normal |
| ch04/4.5/text.html | #tension, 'The word “tension” comes from a Latin word' | written “张力”（tension）一词来自拉丁语中一个意为“拉伸”的词, the English word kept in parentheses | a sentence about the origin of an English word (translate.md 4.3) |
| ch04/4.5/text.html | #tension ('The tension force pulls', 'the tension force in the rope'), #weight-on-incline ('The force of friction') | written 张力这种力, 张力这个力 and 摩擦力这种力, so that the tension (or friction) span and the force span are both kept | the source wraps tension and force (friction and force) as two spans; the Chinese terms 张力 and 摩擦力 already contain 力, so a span cannot be dropped or merged without a carrier word (translate.md 5, as 1.1 相对论) |
| ch04/4.5/text.html | #weight-on-incline, #tension, #tightrope, sim-heads of Figures 4.12, 4.13, 4.14, 4.16 | inside a sentence the order of spans differs from the source (e.g. the weight span before the component span in 平行于斜坡的重力分量, the car and tree spans before the tension span in Figure 4.18's head); every span stays in its own block with the same multiset | Chinese word order (translate.md 3.3) |
| ch04/4.5/text.html | #normal-force 'a mass placed on them', #tension 'a mass', 'the mass' | mass in the sense of a body written 物体 inside the mass span or the hanging-mass ref span, as the glossary row hanging mass 悬挂的物体 does | 质量 would name the quantity, not the body the book calls a mass |
| ch04/4.5/text.html | #large-tension, 'the roped' | the book's typo for 'the rope' written 绳 | a typographical slip of the English with no Chinese equivalent; the ref span is kept |
| ch04/4.5/text.html | #weight-on-incline, #tension, #tightrope, headings and prose | weight (the force w = mg) written 重力 everywhere, including the section heading 斜面上的重力, the Example 4.5 heading 斜面上的重力：一个二维问题 and the note eyebrow 把重力分解为分量 | the glossary row weight is 重力; the three heading rows (and the concept names weight-components-on-incline and mass-versus-weight) were changed from 重量 to 重力 at the ch04 merge, so page and glossary now agree |

### ch04/4.6

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch04/4.6/figures.js | sim-tarzan draw(), text under panel (d): 'the sum ends N N above/below the start' | the trailing English piece ' the start' became an empty string literal '' and the order became number, then branch ('和的终点距起点 N N，位于起点上方/下方'); the branch words stay as the two source branches | English phrase order and the closing noun phrase cannot be kept in Chinese; the code skeleton is unchanged (translate.md item 4.1) |

### ch04/4.7

None recorded.

### ch04/4.8

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch04/4.8/figures.js | sim-strengths FORCE names and headline | the English frame 'The ' + name + ' force is …' collapsed: the names are written 引力, 电磁力, 弱核力, 强核力 (力 inside the name) and the literal 'force' appended in code is dropped | English grammar in figure code (4.1): the article and the noun force are spliced around the name |
| ch04/4.8/figures.js | sim-strengths headline (ratio branches) and bracket label | operands reordered: 'X is 10^e times the Y force' written X + '是' + Y + '的 10^e 倍', 'is 10^e of the' written '的 10^e', and the label '10^e between them' written '两者相差 10^e' | Chinese word order; English 'times the', 'of the' and 'between them' have no counterpart (4.1) |
| ch04/4.8/figures.js | sim-field headline (off-axis branch) | '… and points N° above/below the axis' written '，方向在轴线上方/下方 N°': the above/below word moved ahead of the number | Chinese word order (4.1, grammar built in code) |
| ch04/4.8/figures.js | sim-field unit 'units' and readout \text{units} | the arbitrary unit of the field's charge and force written 单位 | the English word units counts a quantity with no real unit; Chinese 单位 carries it |
| ch04/4.8/text.html | #gravitational-waves, Einstein's general theory of relativity | written 广义相对论理论: the relativity span on 相对论 and the theory span on 理论 kept as two spans | collision of the term with its own name (as 1.1): 相对论 already contains 论, the source has both spans in the sentence |
| ch04/4.8/text.html | #field, 'equations … for force fields surrounding objects' | the force span and the force-field span written on 力 and 场 separately (围绕物体的力场) | the source has two spans, force and fields, and the glossary term 力场 is one word |
| ch04/4.8/text.html | #four-forces, first paragraph, 'Action at a distance' | written 超<span data-concept="distance">距</span>作用: the distance span wraps the character 距 alone, not the whole term 超距作用 | the source wraps only the word distance of 'Action at a distance'; the Chinese term is one word and the span stays on the character that carries the same meaning (added by the 2026-10-22 ch04 review; as 4.2's 千克原器) |

## Chapter 5 sections

The forced scenarios the four page translators recorded (folded in from their `glossary-pending.json` files in the 2026-10-22 merge), grouped by section. The 髋臼杯 row under ch05/intro and the pencil “lead” row under ch05/5.3 are the merge's own.

### ch05/intro

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch05/intro/text.html | second paragraph, Newton’s laws of motion | written 牛顿<span motion>运动</span><span law>定律</span>: the law span and the motion span swap places, both kept in the same block | Chinese word order (3.3); the glossary row Newton’s laws of motion 牛顿运动定律 |
| ch05/intro/text.html | Figure 5.1 alt ('a white plastic cup') and caption ('a cup that has a hard plastic-like inner lining', twice) | 'cup' of the hip prosthesis written 髋臼杯, the clinical name (alt: 一个白色塑料髋臼杯; caption: 嵌入一个髋臼杯，髋臼杯的内衬是…) instead of the 杯形件 first written; the glossary row cup (of a hip prosthesis) | the source says only 'cup', a word that names nothing by itself in Chinese; 髋臼杯 is what medicine calls this part (translate.md 4.4, a reference with no equivalent), decided at the ch05 merge |

### ch05/5.1

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch05/5.1/figures.js | sim-interface, label of the touching spots | the branch touching === 1 ? 'the surfaces touch at one high spot, drawn heavy' : 'the surfaces touch at ' + touching + ' high spots, drawn heavy' collapsed to the one form '两个表面在 ' + touching + ' 个凸起处相接触，以粗线画出' | English plural grammar in figure code (4.1) |
| ch05/5.1/figures.js | sim-probe, label of the adhering atoms | the branch hold === 1 ? 'one atom of the tip adheres' : hold + ' atoms of the tip adhere' collapsed to the one form '针尖有 ' + hold + ' 个原子黏附' | English plural grammar in figure code (4.1) |
| ch05/5.1/text.html, ch05/5.1/section.json | spans of a block, e.g. #magnitudes ‘magnitude of the frictional force’, ‘the magnitude of the normal force’ | written 摩擦力的大小, 法向力的大小: the force/normal-force span and the magnitude span swap places; both kept in the same block | Chinese word order (3.3) |
| ch05/5.1/text.html, ch05/5.1/figures.js | ‘kinetic friction force’, ‘static friction force’ (#characteristics) and the summary | written 滑动摩擦 + 力 and 静摩擦 + 力 with the kinetic-friction (static-friction) span on 滑动摩擦 (静摩擦) and the force span on the last character 力 | the source wraps the words kinetic friction and force in separate spans; 滑动摩擦力 is one word, so the force span takes its last character, as 合力 does in earlier sections |
| ch05/5.1/text.html | ‘coefficient of kinetic/static friction’ | written 动摩擦因数, 静摩擦因数 (glossary rows), the kinetic-friction (static-friction) span on 动摩擦 (静摩擦) and 因数 outside it | the glossary row coefficient of kinetic friction is 动摩擦因数 (the GB 3102 name) while kinetic friction is 滑动摩擦力; the span cannot wrap 滑动摩擦力 inside 动摩擦因数 |

### ch05/5.2

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch05/5.2/figures.js | sim-drag TABLE, bluff() and the 'skydiver' test | names written 翼型, 丰田凯美瑞, 福特福克斯, 本田思域, 法拉利Testarossa, 道奇Ram皮卡, 球体, 悍马H2 SUV, 跳伞者（脚朝下）, 自行车, 跳伞者（水平姿势）, 圆形平板, with the same literals changed in bluff()'s name comparisons and the who.indexOf('skydiver') test (now '跳伞者'); the English article 'a/an' of each name dropped | English grammar in figure code (4.1): the table names are both the lookup keys and the displayed names, with the article built into the string |
| ch05/5.2/figures.js | sim-size text for the small body's label | '0.10 times the length, ' written 0.10 × 长度， so the number stays first as in the code | English phrase built from number + words in figure code (4.1); the Chinese 长度的 0.10 倍 would put a string before the number and change the code's concatenation |
| ch05/5.2/figures.js | partOf() (unused helper) | '1 part in ' + n written '1/' + n | English grammar in figure code (4.1) |
| ch05/5.2/text.html | #terminal, Example 5.2 Strategy, 'the force of gravity (the person’s weight)' | written 重力（即人的重力）, each with its own span as in the source | collision (translate.md 4.5): the glossary maps both force of gravity and weight to 重力, so the parenthetical gloss repeats the term |
| ch05/5.2/text.html | #drag, first sentence 'the force of drag' | written 所受的阻力, the force span wrapping 阻力 | collision (translate.md 4.5): 'force of drag' and 'drag force' are both 阻力, so the word 'force' cannot be rendered apart from the term |
| ch05/5.2/text.html | #size, Haldane quote 'a thousand-yard mine shaft' | written 一千码深的矿井, the printed word yard becoming the Chinese name 码 | unit with no SI equivalent, printed as a word (translate.md 4.4) |

### ch05/5.3

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch05/5.3/text.html | ex-cable Discussion, 'This is quite a stretch' | translated for meaning as 这确实伸长了不少 | English wordplay on 'stretch' (a great stretch of cable and an exaggeration) that works only in English (translate.md 4.2); the passage does not turn on it, so no English is kept in parentheses |
| ch05/5.3/section.json | exercises[p3] prompt and solution, the pencil 'lead' | the quoted “lead” written 铅笔的“铅” (later mentions in the same exercise shortened to “铅”) instead of 笔芯, and 笔芯 nowhere; the glossary row pencil lead | the book's point is that the pencil “lead” is not lead but graphite; Chinese shares the pun (铅笔的“铅”其实是石墨), so it is kept as a pun and no English is put in parentheses (translate.md 4.2); changed from 笔芯 at the ch05 merge |
| ch05/5.3/figures.js | sim-rod, the mode array and its comparison (L206–207, L219) | ['tension','compression'] and mode === 'tension' written ['拉伸','压缩'] and mode === '拉伸' | the mode strings are both the branch key and the displayed caption (4.1) |

## Chapter 6 sections

The forced scenarios the seven page translators recorded (folded in from their `glossary-pending.json` files in the 2026-10-22 merge), grouped by section. The rev/min and rpm of 6.1 problem 7 are kept as the source prints them (they were written 转每分 on the page) and so are no longer a scenario; the 6.4 pressure span, which wrapped 低压 and 高压, now wraps 气压 as the source wraps “pressure”, and is no longer one either. The 引力 row under ch06/6.3 and the “” title in the 6.4 row are the merge's own.

### ch06/intro

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch06/intro/text.html | second paragraph, Newton’s laws of motion | written 牛顿<span motion>运动</span><span law>定律</span>: the law span and the motion span swap places, both kept in the same block | Chinese word order (3.3); the glossary row Newton’s laws of motion 牛顿运动定律 |

### ch06/6.1

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch06/6.1/figures.js | sim-omega, level labels on the revolution lines (k === 1 ? '1 revolution' : k + ' revolutions') | plural branch collapsed to the one form k + ' 圈'; the branch code is removed, the loop around it stays | English grammar in figure code (4.1) |
| ch06/6.1/text.html | rotation-angle, first sentence: ‘the CD (compact disc)’ | written 光盘（compact disc，CD） so that the abbreviation’s letters stay beside the glossary word 光盘 | a parenthesis that spells out an English abbreviation (4.3); the glossary rows CD and compact disc are both 光盘 |
| ch06/6.1/text.html | linear-angular and directions: ‘linear <span velocity>velocity</span>’, and ‘rotational <span motion>motion</span>’ in circular-motion | the span wraps the whole Chinese term (线速度, 转动), not only the word that translates ‘velocity’ or ‘motion’; where ‘angular and linear velocities’ sits in one <em> the span wraps 角速度和线速度 | Chinese word order and compounding (the glossary terms linear velocity 线速度 and rotational motion 转动 are single words; 3.3) |

### ch06/6.2

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch06/6.2/text.html | #direction, second paragraph: “centripetal means ‘toward the center’ or ‘center seeking.’” | written “向心”的意思是“朝向中心”或“寻求中心”, with no English in parentheses | a sentence about the meaning of an English word (4.3); 向心 already means “toward the center”, so the gloss stays as printed and the English word is not needed |
| ch06/6.2/text.html | #direction sim-triangles sim-head; #examples sim-curve and sim-centrifuge sim-heads; #magnitude first paragraph | the order of data-ref / data-type spans differs from the source (e.g. the angle span moved after 它; the two velocities span before the difference span) | Chinese word order (3.3); every span stays in its block, same multiset |

### ch06/6.3

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch06/6.3/text.html, ch06/6.3/section.json | fig-race-track data-original-caption and figures[fig-race-track].original_caption, ‘(called cutting the corner)’ | written （称为抄近路）, the English idiom not kept in parentheses | an English idiom translated for meaning (4.4); 抄近路 is the Chinese idiom for the same driving line |
| ch06/6.3/text.html | #level-curve (Example 6.4, strategy for (b)) and #ideal-speed (solution), lead-ins ‘Using the first expression for F_c from the equation’, ‘Starting with … we get’ | written 利用方程中 F_c 的第一个表达式 before the display, and 由 … 得到 around the two displays | English lead-in sentences that run into a display equation cannot keep their structure in Chinese; no content added or dropped (3.1) |
| ch06/6.3/text.html | #centripetal-force, #level-curve, #banked, ‘net force’, ‘net external force’ | the force span wraps 合力 (not 力 alone) where the source span wraps only the word force of net force; the span is kept in its block | Chinese has the one word 合力 for net force (glossary), so the span wraps the whole word (as in earlier sections) |
| ch06/6.3/text.html | #centripetal-force, first paragraph, ‘the force of Earth’s gravity on the Moon’ | written 地球对月球的引力, the force span wrapping 引力; the word gravity has no span of its own, as in the source | collision (translate.md 4.5): ‘force of gravity’ between bodies is the one word 引力 (glossary rows gravitational force and gravitational attraction), so ‘force’ cannot be rendered apart from the term, as 阻力 in ch05/5.2; the sentence read 地球重力对月球的力 before the ch06 merge |
| ch06/6.3/text.html | #level-curve, #radius, #banked, sim-heads (several sentences) | within some sentences the order of spans differs from the source (e.g. cf before vm in ‘the magnitude of the centripetal force’, friction span before the centripetal-force span in ‘in the absence of friction’); every span is kept in its block with the same multiset | Chinese word order (3.3) |
| ch06/6.3/text.html, ch06/6.3/section.json | coefficient of friction / static coefficient of friction | the friction span wraps 摩擦 in 摩擦因数 and 静摩擦因数, as 5.1 does | the term is one word in Chinese; the span wraps the part that names the concept |
| ch06/6.3/section.json | exercises[p3].answer.hint | ‘meters per second’ written 米每秒, the unit word | unit named in words in the source (translate.md 5: symbols are kept only where the source prints a symbol) |

### ch06/6.4

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch06/6.4/text.html | #frames, the sentence ending ‘Dynamics: Newton’s Laws of Motion’ (the source prints no full stop before ‘The car is a’) | the chapter title set in “” as “动力学：牛顿运动定律” and a 。 written after it | the source runs two sentences together without a full stop (a typographical slip); Chinese cannot join them, and no words are added (translate.md 4.4); a cited chapter title takes the book’s “” convention (changed from 《》 at the ch06 merge) |
| ch06/6.4/text.html | #centrifugal, ‘<strong> (</strong>not to be confused with … <strong>)</strong>’ | written <strong>（</strong>不要与<span>向心力</span>混淆<strong>）</strong>, the closing parenthesis after 混淆 | Chinese word order puts the verb 混淆 after the object; the two strong marks keep their positions as wrappers of the parentheses (3.3) |
| ch06/6.4/text.html | #frames, #centrifugal, #coriolis, sim-head of sim-merry and sim-centrifuge | order of data-concept / data-ref spans within a sentence differs from the source (e.g. 牛顿<span motion>运动</span><span law>定律</span>; <span particles>粒子</span>的<span inertia>惯性</span>带着<span particles>它们</span>) | Chinese word order (3.3); every span is kept in its block with the same multiset |
| ch06/6.4/figures.js | sim-cyclone panel and topline | ‘Each parcel …’ / ‘so it …’ clause strings written as full Chinese sentences; the leading space of ' The drawing holds four complete turns and no more.' dropped | English sentence joining by spaces has no Chinese form (4.1) |
| ch06/6.4/figures.js | sim-turn headline and sim-merry headline | operands kept in source order but ‘round the bend’ → 转过, ‘the driver … in a straight line’ → 沿直线前进了; ‘across the seat’ folded into the verb phrase | English prepositional phrases built into code strings have no word-for-word Chinese form (4.1) |

### ch06/6.5

None recorded.

### ch06/6.6

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch06/6.6/figures.js | sim-frames headline (loops branch) | the four-way English branch ‘not once’ / ‘once’ / ‘twice’ / N + ' times' collapsed to loops + ' 次'; the words not once, once and twice are written 0 次, 1 次, 2 次 by the same expression | English grammar in figure code (4.1): count words built by rule |
| ch06/6.6/text.html | #parent-mass note, ‘Einstein’s general theory of relativity’ | written 爱因斯坦的广义相对论理论: the relativity span on 相对论 and the theory span on 理论 kept as two spans | collision of the term with its own name (as 4.8): 相对论 already contains 论, the source has both spans in the sentence |

## For the owner

1. **`answer.unit` and `answer.parts[].part` stay English.** translate.md 5 lists both as kept byte for byte, so 1.2 (`length in feet`, `length in inches`, `width in feet`, `width in inches`) and 1.3 (`figures`, `pounds`, `beats`, `beats/min`, `(a) lowest`, `heart rate`, `volume`, `area`, `uncertainty`) keep their English words, although a reader may see them beside the answer box. The owner decides whether these become translatable fields; if they do, translate.md 5 and the content check change first, then these strings.
2. **Figure eyebrows and citations.** The eyebrows `Figure N.M` and `Sim` stay English in every section until the app localises them (translate.md 4.6), and the prose cites figures as 图 N.M, which stays plain text: the app's figure-link pattern matches only `Figure N.M` and does not yet read 图 N.M. Recorded once for the book, not per citation.
3. **Glossary decisions of the 2026-10-22 merge** that the owner or termonline should confirm: the photo-credit label 来源 (1.2's 图片来源 changed), heat 热量 everywhere (1.2's subject list changed from 热), speed of light 光速 as the span of the short form beside 真空中的光速, 估读 for reading a scale's last digit beside 估算 (1.3 changed), 扫描隧穿显微镜 and 放射性年代测定. Each row's `note` gives the reason; termonline.cn could not be reached, so each still carries `confirm`.
4. **Glossary decisions of the chapter 2 merge (2026-10-22)** to confirm: 航天员 for astronaut (宇航员 is the everyday word), 起始位置 (starting position) as its own row beside 初位置, 末速率 for final speed, 具有加速度 for "is accelerating" when only the direction changes, 纵截距（*y* 截距） for y-intercept, 误区提醒 and 居家实验 for the apparatus labels, 时刻 for a point in time. In 2.4 the slider subscript `\text{top}` is written `\text{最大}` (the source word is top, not max, so it is not a `\text{max}` symbol). Every new row carries `confirm` until termonline is reachable.
5. **gravity: 重力 or 引力 (judgement, 2026-10-22).** Source "gravity" became 重力 where it is the Earth's (or the Moon's) pull on things near the surface: 2.7 (引力与自由落体运动 heading, the free-fall prose, the hammer-and-feather caption, the sim line) and 3.4 ("gravity is weaker there" on the Moon). It stays 引力 for "gravitational field" (1.1, the ch01 concept rows), "Newton's theory of gravity" (universal gravitation), "from lightning to gravity" (1.1, gravity as a fundamental interaction) and gravitational lensing (1.2).
6. **Glossary decisions of the chapter 4 merge (2026-10-22)** to confirm. Weight and gravity: weight (the force w = mg) is 重力 everywhere, its explanans is 引力, the Earth's pull on a body standing alone is 重力, the pull between bodies and the fundamental force are 引力 (the scenario row under ch04/4.3); the headings 质量与重力, 斜面上的重力 and 把重力分解为分量 and the concept names mass-versus-weight and weight-components-on-incline follow; the everyday weight of mass (重量, 减重) and a load (重物) are rows of their own. Graph axes are 横轴/纵轴 (rows horizontal axis (of a graph), vertical axis (of a graph)) and the spatial axes of a scene stay 水平轴/竖直轴. The noun push as a force is 推力 throughout chapter 4 (row push (force); decided at the 2026-10-22 ch04 review), 推 only the verb; electromagnetism as the interaction is 电磁相互作用 (4.8), 电磁学 the discipline. Where a page differed from an existing row the row won: 外加合力 (not 总外加力), 内部结构 (not 亚结构), 滚动摩擦 (not 滚动摩擦力), and the three physicists' names 罗杰·彭罗斯, 赖因哈德·根策尔, 安德烈娅·盖兹 (not the English). The 20<sup></sup> 世纪 form for "20th century" is accepted (ch04/intro). Every new row carries `confirm` until termonline is reachable.
7. **Glossary decisions of the chapter 5 merge (2026-10-22)** to confirm. Friction: the force is 滑动摩擦力 and 静摩擦力, the magnitudes 滑动摩擦力的大小 and 静摩擦力和滑动摩擦力的大小, while the coefficients keep the GB 3102 names 动摩擦因数 and 静摩擦因数 (note on the row coefficient of kinetic friction). Drag: the coefficient is 阻力系数 (the headings 阻力系数的值 and 阻力系数与物体的形状) and the force is 阻力 (曳力 was the form until 2026-10-22). Pencil lead is 铅笔的“铅” (the pun survives in Chinese), the hip prosthesis cup is 髋臼杯, high spots and peaks of a rough surface are both 凸起处, bodysuits worn by bicyclists, swimmers and runners are 全身紧身服 beside 紧身泳衣 for swimwear, the sled-dog command mush is 冲啊, and the label of a wall in Figure 5.17 is 墙. Each row's `note` gives the reason; termonline.cn could not be reached, so the technical rows carry `confirm`.
8. **Glossary decisions of the chapter 6 merge (2026-10-22)** to confirm. Gravity: the pull between bodies and the fundamental force is 引力 throughout chapter 6 (6.3's first paragraph, 地球对月球的引力; 6.5's opening, Newton, Moon, tide, black-hole and Cavendish passages, its lead, cq1, cq2 and problem 5; the two notes of 6.4 that say where gravity is introduced; the concept and heading 引力与月球的轨道 and 引力作为月球的向心力; the PhET name 引力与轨道（Gravity and Orbits）). 重力 stays for weight, for the Earth's pull on a body at its surface (the feet, the apple, the blood column, the plants), for the named quantity 重力加速度 wherever the source says “the acceleration due to gravity” (also at altitude and at the Moon's distance, as the row says) and for 零重力 and 微重力. Atmospheric pressure is 气压 (row pressure (atmospheric), authority cnterm-atmos, added to `authorities`), written 低气压 and 高气压 with the pressure span on 气压; 低压 stays for the low of a weather system (the LOW label), and 气块, 气旋 and the other weather rows now cite cnterm-atmos (the two 7.7 weather rows, global warming and lightning bolt, still cite termonline for the ch07 pass to settle). Static friction “a responsive force” is 响应式的力 as in 5.1 (6.3's 随需而变的力 changed), separation of two bodies or points is 间距 (6.2's 间隔 changed), and “the same two velocities, laid tail to tail” is 矢尾对矢尾 (it read 首尾相接, which is head to tail). Cited chapter and section titles take “” (《》 in 6.4's text and the 6.1 note changed; bare titles in the chapter intro and in the 6.4 and 6.6 notes quoted). rev/min and rpm stay as the source prints them and 转每分 stands only where the source writes the words (6.1 problem 7 changed). **太阴月** for the 27.3-day “lunar month” of 6.5 problem 5(b) is the book's word and stays; astronomy calls 27.3 d the 恒星月 (sidereal month) and 太阴月 the 29.5-day synodic month, so the owner decides whether the problem reads 恒星月. Answer-part labels and units that stay English as kept fields (the question of item 1): 6.1 p3 `unit` rotations and p7 `in rev/min`; the `part` labels of 6.2 p5, p7, p9, p11, p12 and p13 and of 6.5 p3, p7 and p10. Variants not added as rows because an existing row covers them: Problems and Exercises (row Problems & Exercises 习题), Earth radius (row radius of Earth 地球半径), and the repeated Unreasonable Results and kinetic energy. Every new row carries `confirm` until termonline is reachable.

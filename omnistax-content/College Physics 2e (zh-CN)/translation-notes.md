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

## For the owner

1. **`answer.unit` and `answer.parts[].part` stay English.** translate.md 5 lists both as kept byte for byte, so 1.2 (`length in feet`, `length in inches`, `width in feet`, `width in inches`) and 1.3 (`figures`, `pounds`, `beats`, `beats/min`, `(a) lowest`, `heart rate`, `volume`, `area`, `uncertainty`) keep their English words, although a reader may see them beside the answer box. The owner decides whether these become translatable fields; if they do, translate.md 5 and the content check change first, then these strings.
2. **Figure eyebrows and citations.** The eyebrows `Figure N.M` and `Sim` stay English in every section until the app localises them (translate.md 4.6), and the prose cites figures as 图 N.M, which stays plain text: the app's figure-link pattern matches only `Figure N.M` and does not yet read 图 N.M. Recorded once for the book, not per citation.
3. **Glossary decisions of the 2026-10-22 merge** that the owner or termonline should confirm: the photo-credit label 来源 (1.2's 图片来源 changed), heat 热量 everywhere (1.2's subject list changed from 热), speed of light 光速 as the span of the short form beside 真空中的光速, 估读 for reading a scale's last digit beside 估算 (1.3 changed), 扫描隧穿显微镜 and 放射性年代测定. Each row's `note` gives the reason; termonline.cn could not be reached, so each still carries `confirm`.
4. **Glossary decisions of the chapter 2 merge (2026-10-22)** to confirm: 航天员 for astronaut (宇航员 is the everyday word), 起始位置 (starting position) as its own row beside 初位置, 末速率 for final speed, 具有加速度 for "is accelerating" when only the direction changes, 纵截距（*y* 截距） for y-intercept, 误区提醒 and 居家实验 for the apparatus labels, 时刻 for a point in time. In 2.4 the slider subscript `\text{top}` is written `\text{最大}` (the source word is top, not max, so it is not a `\text{max}` symbol). Every new row carries `confirm` until termonline is reachable.
5. **gravity: 重力 or 引力 (judgement, 2026-10-22).** Source "gravity" became 重力 where it is the Earth's (or the Moon's) pull on things near the surface: 2.7 (引力与自由落体运动 heading, the free-fall prose, the hammer-and-feather caption, the sim line) and 3.4 ("gravity is weaker there" on the Moon). It stays 引力 for "gravitational field" (1.1, the ch01 concept rows), "Newton's theory of gravity" (universal gravitation), "from lightning to gravity" (1.1, gravity as a fundamental interaction) and gravitational lensing (1.2).

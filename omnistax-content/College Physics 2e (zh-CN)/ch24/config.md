# Config: 大学物理（第2版）, Chapter 24 (translation)

The translation pass of `College Physics 2e` chapter 24 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch24, every page it lists |
| Language | zh-CN |
| Translator | claude-sonnet-5-5, medium effort |
| Terminology | `glossary.zh-CN.json`, read before the first sentence; a new term is added as pending |
| Fidelity | the source's tone, sentences and content; nothing added or removed except the forced scenarios below |
| Humanizer review | deferred to the owner |

## Forced scenarios

Every place where a faithful translation was impossible as the source stands
(translate.md item 4), one row each; `translation-notes.md` carries the same
entry.

### ch24/24.1

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch24/24.1/text.html | #maxwell, kinetic theory of gases | the theory span wraps 理论 inside 气体动理论 (气体动<span>理论</span>) | the English span wraps only the word theory; the Chinese term 气体动理论 contains it as a suffix (translate.md 4.5-like term/span collision) |
| ch24/24.1/text.html | #symmetry, Making Connections, 'current attempts' | the electric-current span kept on 当前 (the English adjective current) | the source tags the adjective current as the concept electric-current; the span is kept, never dropped (translate.md 5) |
| ch24/24.1/text.html | #hertz, 1 Hz = 1 cycle/s | \text{cycle/s} written \text{周/s} | the unit word cycle has no symbol; 周 is the established word for a cycle of an oscillation, the glossary cycle 循环 being the thermodynamic cycle (translate.md 4.4) |

### ch24/24.2

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch24/24.2/figures.js | sim-em-wave-3d readout small line | the capitalisation RECNAME[...].charAt(0).toUpperCase() + slice(1) removed and the sentence rebuilt as RECNAME + 位于沿波束 N m 处：verdict。 | English grammar in figure code (4.1): a Chinese clause has no initial capital |
| ch24/24.2/figures.js | sim-antenna-b topline | the branch ' upward' / ' downward' after the current rewritten as （向上） / （向下）, and the clause order changed | English grammar built in code (4.1); Chinese word order |
| ch24/24.2/figures.js | sim-field-ratio topline, compare | 'about N times weaker than the Earth’s own field' / 'about N times the Earth’s own field' written 比地磁场本身弱约 N 倍 / 约为地磁场本身的 N 倍; the topline order 'An electric field of … goes with a magnetic field of …' written '… 的电场与 … 的磁场相伴' | English grammar in figure code (4.1); Chinese word order |
| ch24/24.2/figures.js | sim-antenna-cycle topline, sim-em-wave-3d headline | 'N periods into its cycle' written 已走过 N 个周期 and 'm to the cycle' written 每个周期 N m, a classifier added after the number | Chinese requires a measure word after a numeral (4.1, grammar built from English) |
| ch24/24.2/text.html | #receiving, Take-Home Experiment, 'tear down' | the search words “tear down” rendered “拆解”（tear down）, the English kept in parentheses | the sentence is about the English words typed into a search (4.3) |

### ch24/24.3

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch24/24.3/text.html | radio-tv, the sentence 'The abbreviation AM stands for amplitude modulation' | written 缩写 AM 来自 amplitude modulation，即调幅, the English words kept after 来自 and the strong/span wrapping 调幅 | a sentence about the letters of an English abbreviation (translate.md 4.3) |
| ch24/24.3/text.html | fm-radio, the sentence 'FM stands for frequency modulation' | written FM 来自 frequency modulation，即调频, the English words kept and the strong/span wrapping 调频 | a sentence about the letters of an English abbreviation (4.3) |
| ch24/24.3/text.html | fm-radio, 'VHF (for very high frequency)' and 'UHF (for ultra high frequency)' | written VHF（very high frequency，即甚高频） and UHF（ultra high frequency，即特高频）, the English words kept in the parentheses | the letters of an English abbreviation (4.3) |
| ch24/24.3/text.html | infrared, 'infrared means “below red.”' | written 英文 infrared 的意思是“红之下”, the English word kept | the sentence is about the Latin prefix of the English word; Chinese 红外 means 'outside red' (4.3) |
| ch24/24.3/text.html | ultraviolet, 'Ultraviolet means “above violet.”' | written 英文 ultraviolet 的意思是“紫之上”, the English word kept | the sentence is about the Latin prefix of the English word; Chinese 紫外 means 'outside violet' (4.3) |
| ch24/24.3/text.html | Things Great and Small, last paragraph, '“bremsstrahlung” (German for “braking radiation”)' | written “轫致辐射”（bremsstrahlung，德语，意为“制动辐射”）, the German word kept in the parentheses | the sentence names the German origin of the word (4.3) |
| ch24/24.3/text.html | gamma-rays, 'gamma ray ($\gamma$ ray)' | written γ 射线（$\gamma$ 射线） with the strong and the em kept, so the Chinese repeats the term | the glossary target of gamma ray is already γ 射线 with the Greek letter, so the book's two spellings coincide; markup kept as the source has it |
| ch24/24.3/figures.js | sim-spectrum, BANDS name 'visible' and the test `b.name === 'visible'` | the band name written 可见光 and the test changed to `b.name === '可见光'` | the same string is the displayed band name and the code's identifier for the visible band; translating the name forces the comparison literal to follow (4.1-like: English string used as code) |
| ch24/24.3/figures.js | sim-visible COLOURS names and topline | the seven names written 红, 橙, 黄, 绿, 蓝, 靛, 紫 as the glossary has them; the topline appends 色 after the name ('看到它是' + name + '色') | the name is also the strip label, where the bare character is the glossary form, and the sentence needs the noun 颜色 (4.1) |
| ch24/24.3/figures.js | sim-elf-submarine readout small line | 'k times shorter' / 'k times longer' written 按 k 倍缩小 / 按 k 倍放大 画出 | English comparative 'N times shorter' has no exact Chinese form, and 缩小/放大 N 倍 is the plain scale statement (4.1) |
| ch24/24.3/text.html | #ex-radio-wavelengths, the three worked equations (1530 kHz, 105.1 MHz, 1.90 GHz): \text{cycles/s} | written \text{周/s} | the unit word cycle has no symbol; the same 周 as the hertz in 24.1 (translate.md 4.4) |
| ch24/24.3/figures.js | sim-antenna-length topline | 'n times the height of a person' / 'one part in n of the height of a person' written 是人的身高的 n 倍 / 1/n, the shared phrase 人的身高的 moved out of the two branches | English phrases built in the branches of a conditional; the parity tool therefore reports one 'code replace' line for this topline (4.1) |
| ch24/24.3/text.html | #visible-light, paragraph after Example 24.3, 'Ray optics is the study of such situations' | the ray span wraps 几何光学 (<span data-concept="ray">几何光学</span>研究这类情形), no word for ray inside the span | the glossary target of ray optics is 几何光学, which contains no word for ray, so the span of the concept ray wraps the whole term; same kind as the 气体动<span>理论</span> row (translate.md 4.5-like term/span collision); the sentence is not restructured |
| ch24/24.3/text.html | #visible-light, Take-Home Experiment eyebrow, 'Colors That Match' | written 居家实验：颜色对得上; the pun on match (火柴) is lost, only the sense of colours that agree is kept | wordplay that works only in English (translate.md 4.2) |
| ch24/24.3/text.html | #microwave-heating, paragraph 2, 'a slightly negative charge at one end and a slightly positive charge at one end' | written 一端带少量负电，一端带少量正电, the book's slip (the second 'one end' for 'the other end') kept as printed | an error of the book stays (root item 13); recorded as a source slip, not a forced scenario of translate.md item 4 |

### ch24/24.4

None.

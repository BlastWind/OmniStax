# Config: 大学物理（第2版）, Chapter 33 (translation)

The translation pass of `College Physics 2e` chapter 33 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `College Physics 2e` ch33, every page it lists |
| Language | zh-CN |
| Translator | claude-sonnet-5-5, medium effort |
| Terminology | `glossary.zh-CN.json`, read before the first sentence; a new term is added as pending |
| Fidelity | the source's tone, sentences and content; nothing added or removed except the forced scenarios below |
| Humanizer review | deferred to the owner |

## Forced scenarios

Every place where a faithful translation was impossible as the source stands
(translate.md item 4), one row each; `translation-notes.md` carries the same
entry.

### ch33/33.1

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch33/33.1/figures.js | sim-pion-exchange, nucleon hover names and labels: the English word taken from the identifiers (`'the ' + left`, `label(ctx, left, …)`) | the words come from a display table `WORD = { proton: '质子', neutron: '中子' }`; the identifiers `'proton'` and `'neutron'` stay as the code's state | English words built from code identifiers in figure code (4.1) |
| ch33/33.1/text.html | #pions-and-muons, second paragraph: “The pions, or π-mesons as they are also called” | written π 介子（英文中也称 π-meson）; Chinese has one name, 介子, for both, so the English alias is kept in parentheses | a sentence about English naming (4.3) |
| ch33/33.1/text.html | #pions-and-muons, Rabi's remark “Who ordered that?” | written “这是谁点的菜？” | an English idiom (ordering as at a restaurant) with no fixed Chinese equivalent (4.4) |

### ch33/33.2

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch33/33.2/figures.js | sim-carrier-exchange, `cname` and its two uses (the label of the carrier line and the hover name of the carrier): the English prefix `'virtual ' + cname` | one string `cname = '虚 π⁺'` / `'虚光子'` is used without a prefix; the space after 虚 stays only before the Latin π⁺, as in the glossary rows 虚 π 介子 and 虚 Z⁰ | English word order and the Chinese spacing between 虚 and a Latin symbol cannot be built by prefixing a word to the name (4.1) |

### ch33/33.3

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch33/33.3/figures.js | sim-cyclotron, hover name of the proton: the plural branch `n === 1 ? ' crossing' : ' crossings'` | the branch is removed; the one form `已穿越 n 次` stands | English plural grammar in figure code (4.1) |

### ch33/33.4

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch33/33.4/figures.js | sim-decay-checker, `headlineOf`, broken-number branch: `'The charge'` / `'$tex$'` + `' goes from … to …'` | rebuilt as `'电荷'` / `'$tex$ '` + `'由 … 变为 …'`, the space after the math run written into the code string | an English clause built in figure code; Chinese needs the subject, then 由…变为, and the space belongs between a math run and a Chinese character (4.1, as ch03 `bearing()`) |
| ch33/33.4/text.html | #particle-zoo, second paragraph: “negative energy states for free electrons” | written 自由电子的负<span energy>能</span>态, the span wrapping 能 only and the free-electron span placed before it | the glossary renders energy state as 能态, which cannot hold a whole 能量 span, and the span of the source cannot be dropped (as ch02/2.8 motion equations) |
| ch33/33.4/text.html | #forces-reactions, third paragraph: strangeness is conserved by the strong force, “not conserved by the weak force” | the three `<em>` pieces are kept: `<em>奇异数是</em>不守恒的<em>，在弱力的作用下</em>`; the roman “not conserved” stays between two italic runs | English places “not conserved” between the two italic runs; the usual Chinese order 奇异数在弱力的作用下不守恒 cannot keep the three-piece markup, so the clause is ordered to keep it (translate.md 5, markup kept) |
| ch33/33.4/text.html | #forces-reactions, #hadrons-and-leptons, #mesons-and-baryons, #quantum-numbers-in-two-decays and the sim-annihilation sim-head: sentences that carry several `data-concept` spans | the order of the spans inside a sentence differs from the source in places (decay via the weak force written 其衰变经由弱力发生; “a new physical quantity called baryon number” written 一个新的物理量，称为重子数; the photons/energy pair of the sim-head); every span stays in its own block with the same multiset | Chinese word order (3.3) |

### ch33/33.5

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch33/33.5/figures.js | sim-quark-content topline and the hover name of the hadron: “The <name> <sym> is <comp>, <desc>.”, `'the ' + name`, and the reading `$1-bar` of an antiquark in the composition | the leading articles are dropped (`<name> <sym> 是 <comp>，即<desc>。`, `name + '，' + comp`) and the `-bar` reading becomes `反$1` | English grammar in figure code (4.1) |
| ch33/33.5/figures.js | sim-quark-content, hover name of a quark: the `an `/`a ` branch on the flavor name (`f.name === 'up' ? 'an ' : 'a '`) and `'an anti' + name` | collapsed to `'一个' + (k.anti ? '反' : '') + f.name + '夸克'` | English a/an grammar in figure code (4.1) |
| ch33/33.5/figures.js | fig-three-families, column heading `'Family ' + (i + 1)` | replaced by the array `['第一代', '第二代', '第三代'][i]` | an English ordinal built from a number in figure code (4.1); the glossary rows Family 1 to 3 |
| ch33/33.5/text.html | #fundamental-particles, first paragraph: “an elementary or fundamental particle” | written 基本粒子 once, the strong span on 基本粒子 | collision (4.5): elementary particle and fundamental particle are both 基本粒子 in the glossary, so the pair “elementary or fundamental” cannot be told apart |
| ch33/33.5/text.html | #three-families, second paragraph: “TOE (to stub the pretension of such a theory)” | translated for meaning with the English word explained in parentheses: TOE（toe 意为“脚趾”，取“磕碰”之意，借以挫一挫这种理论的自负） | wordplay on toe and stub that works only in English (4.2) |

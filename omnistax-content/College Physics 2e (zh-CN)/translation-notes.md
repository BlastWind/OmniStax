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

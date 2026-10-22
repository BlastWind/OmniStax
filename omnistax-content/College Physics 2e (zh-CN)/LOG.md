# Log: 大学物理（第2版）

### Pass 1 (2026-10-22): scaffold

The folder was made by `omnistax-content/tools/scaffold_translation.py` from
`College Physics 2e` at commit f639e6d35182498c33a78ca6676868dfe8731a1e, chapters ch01. Nothing is translated yet: every
file is the source's, `book.json` carries `language` zh-CN, `translation_of`
and `translation` (claude-opus-5-5, medium). The humanizer review is deferred to the owner.

### Pass 2 (2026-10-22): glossary and book-level labels

claude-opus-5-5, medium effort. `glossary.zh-CN.json` written with 177 terms harvested from chapter 1 (its concepts, the type and exercise kind labels, the variables' meanings, the chapter, section and boxed-note titles, the figure labels and the key vocabulary of 1.1–1.4). termonline.cn could not be reached from the build environment, so every term is taken from the published authority its row names (物理学名词, 化学名词, GB 3100/3102, JJF 1001, or textbook usage) and carries `"confirm": "termonline"`; the book's own labels carry `"confirm": "owner"`. Written: the title 大学物理（第2版）, all 50 `types[].label`, the four `exercise_kinds[].label` and the chapter title through `scaffold_translation.py labels`; the 34 chapter 1 concepts' `name`, `terms` and `statement`, the four section titles and the eleven variable meanings through `ost set`. The book has no sheets. Sections are untouched: `section.json`, `text.html` and `figures.js` are still the source's. `npm run check:content -- --books college-physics-2e-zh-cn`: no errors, no warnings, 1680 notes (concepts that wait on chapters this book has not added). The humanizer review is deferred to the owner.

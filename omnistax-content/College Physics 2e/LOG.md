# Experiment log: College Physics 2e (OpenStax)

The entries before pass 18 name paths under the old `experiment/` layout,
which the repository no longer has. The book now lives in this folder,
`omnistax-content/College Physics 2e/`, and the app that builds it lives in
`omnistax-web/`. The entries themselves are left as they were written.

Source: OpenStax College Physics 2e, CC BY-NC-SA 4.0 (per the source repo's
collection metadata). PDF: `college-physics-2e_-_WEB.pdf`, 1671 pages, 34
chapters. CNXML source: `osbooks-college-physics-bundle/` (full clone of
github.com/openstax/osbooks-college-physics-bundle, 882MB with media;
gitignored).
Table of contents with PDF page numbers: `toc.md`.

Workflow: inline prompts in chat, one pass at a time. Outputs go under
`ch<NN>/`. Prompts that survive get promoted to `docs/claude/prompts/`.

## 2026-09-05: orientation

- Text extraction (pymupdf) gets prose, headings, figure captions, example
  structure ("Strategy", "Solution", "Discussion"), learning objectives and
  equation numbers cleanly.
- **All equations are lost in text extraction.** They are vector outlines, not
  text and not images. Inline math like $\Delta x$ leaves a blank gap in the
  sentence; display equations leave only their number (e.g. "2.26").
- So a pass that needs math must read the rendered page image. Pages are
  rendered at 110 dpi under `ch02/pages/` (gitignored, regenerate with
  pymupdf). Prose-only passes can use `ch02/text.txt`.
- Alternative source worth remembering: OpenStax publishes the same book as
  HTML/CNXML with MathML. Would give equations for free, but the milestone
  goal is a PDF pipeline, so first try the PDF-only path and see how bad it is.
- Figures are mostly raster images (66 in chapter 2), extractable per page.
- Starting chapter: **Chapter 2, Kinematics** (PDF pages 57 to 118). Has
  definitions, a dense equation section (2.5), worked examples, graphs
  (2.8), PhET simulation callouts (obvious widget candidates), conceptual
  questions and problems with an answer key at PDF page 1607.

## 2026-09-05: switched to the CNXML source

The PDF is a rendering of CNXML files that OpenStax keeps on GitHub. Each
section is one module (`osbooks-college-physics-bundle/modules/m*/index.cnxml`), and
`collections/college-physics-2e.collection.xml` gives chapter order. One
module (2.4 Acceleration, m42100) already has, as explicit tags: 15
`<equation>` in MathML, 9 `<term>`, 4 `<definition>` with `<meaning>`, 7
`<example>` with Strategy/Solution/Discussion, 12 `<exercise>` (typed, e.g.
`check-understanding`), 13 `<figure>` with alt text and media path, 30
`<link>` cross references. This removes most of the extraction problem:
equations, definitions and exercises are already structured. The PDF stays
useful as the visual reference for layout and figures.

Consequence for the milestone: the "pdf -> OmniStax" pipeline is really
"source -> OmniStax", with PDF as the fallback when no structured source exists.
LibreTexts also has an HTML/XML export, so check that before doing PDF work.

## Book structure worth knowing (per chapter)

Chapter outline, intro, numbered sections (each with learning objectives,
boxed strategies, numbered Examples with Strategy/Solution/Discussion,
"Check Your Understanding", PhET callouts), Glossary, Section Summary,
Conceptual Questions, Problems & Exercises. Answer key at the back covers
odd-numbered problems.

## Passes

(append one entry per pass: prompt used, what came out, what to change)

### Pass 1 (2026-09-05): section 2.5 end to end, from CNXML

Prompt (user, paraphrased): Ciechanowski-style single-page explainer for
section 2.5 with slider demos, 3D where appropriate, strict color coding of
variables across prose/equations/figures with a toggle, exercises and a
concept DAG extracted, DAG as a left floater doubling as ToC, formula sheet
and definitions as a right floater.

Outputs in `ch02/2.5/`:
- `source.md`: CNXML converted to markdown+LaTeX by `tools/cnxml2md.py`.
- `concepts.json`: 9 concepts, 3 external prerequisites, prereq edges, a
  "why" per concept, anchor into the page.
- `formulas.json`: 9 variables with color role and unit, 6 equations.
- `exercises.json`: 23 book exercises + 3 AI-generated equation-relationship
  questions. Each has Bloom level, concept set, answer spec (number with 2%
  tolerance, choice, or open), `generated_by` on answers. Remember/Understand
  items carry a `cite` anchor.
- `template.html` + `app.js` -> `tools/build_explainer.py` -> `index.html`.
  Open it locally; KaTeX, three.js and fonts load from CDNs.

What worked:
- CNXML is rich enough that "extraction" of equations, examples and
  exercises is parsing, not AI. AI work is concept DAG, Bloom tags, concept
  tags, "why", equation questions, and deciding which figures become demos.
- Color coding via KaTeX `\htmlClass` macros (`\kx`, `\kvo`, ...) plus CSS
  tokens. One toggle class on `<html>` switches prose, equations, sliders
  and canvas drawings. The macro set is the color standard in code form.
- Replacing the book's sketch figures with demos worked for every figure in
  this section; the photos carried no physics and were dropped.
- Verbatim prose + sans-serif OmniStax additions keeps the tone rule honest and
  visible.

What hurt / to change:
- Book answers only cover odd problems. AI-computed answers had to be
  marked; a checker pass (independent recomputation) is needed before these
  reach learners.
- Bloom tagging is almost all "Apply" for problem sets. The interesting
  Remember/Understand material has to be generated (equation-relationship
  questions), which random.md already anticipated.
- The concept DAG for one section is small (9 nodes). Value will show at
  chapter scale, where a node like "displacement" is shared.
- The DAG nodes labelled by equation read better than labelled by name.
- Widgets were hand-coded (~600 lines of JS for 7 demos). A declarative
  spec should cover: number line, v-t / x-t plot, animated object on a
  strip with arrows, root-finding plot, 3D road scene. Archetypes look
  viable; the 3D scene is the one that resists a spec.
- Decision: local HTML only, no Claude artifacts. They add a share URL and a
  sandbox that blocks CDN stylesheets, nothing OmniStax needs.
- No glossary in this module; definitions came from the notation paragraph.

Next: run the same passes on 2.4 (has `<definition>` tags and 12 exercises
of mixed type) to see what generalizes, then draft `docs/content-format.md`.

### Pass 2 (2026-09-06): concept layer refactor on 2.5

Prompted by: the pass-1 DAG was header-shaped ("Putting Equations
Together" was a node). Headers organize information; concepts organize
knowledge. They are different layers.

Changes:
- `concepts.json` rewritten. Nodes are testable units, justified by a
  definition or by exercises (`evidence` field). 11 headers became 8 nodes:
  1 idea (constant-acceleration model), 5 results (the equations, linked to
  the formula sheet by `eq`), 2 skills (choose the equation; interpret the
  solution physically). "Notation" dropped: nothing tests it, it lives under
  Definitions. Prerequisite edges unchanged in spirit; the four big
  equations now hang off the one idea rather than sitting beside it.
- `coverage` table: every section/example span lists what it introduces,
  uses, reinforces. Spans can map to nothing (notation, summary header).
- Page: Concept map and Contents are separate blocks in the left floater.
  Map rows are derived from kind and depth, not hand-listed. Clicking a
  node pins it: introducing span gets an accent bar, using spans a muted
  bar, and the exercises that test it light up. Exercise concept chips are
  clickable and pin the same way. Scroll-spy drives the TOC from the
  section and the map from the innermost span's coverage.
- Exercises retagged to canonical ids; p10 gained `physical-solution`
  because its answer key says "(b) does not make sense".

What it showed:
- Extracting from exercises first is the right order. Three of the old
  nodes had no exercise behind them; the two skills that survived are the
  ones the book actually tests.
- `kind` is metadata, not structure. The map layout uses it, nothing else
  should yet.
- "Tested by N exercises" per node is a cheap, honest signal of what the
  book cares about: v-from-at 8, v-squared 8, const-a 3, physical-solution 2.

Next: same two passes on 2.4, then see whether chapter-level extraction
(all nine 2.x modules together) produces the same nodes for 2.5.

### Pass 3 (2026-09-06): figure restyle on 2.5

Prompted by: the pass-1 demos were chart-first, small and thin. The user
pointed at an earlier photoelectron-spectroscopy explainer whose figures
read better. Adopted its idiom (see RULES.md, "Figure style"): fixed
1400-unit logical canvas, big type and strokes, scene above graph, ambient
looping animation with a headline readout, a global pause pill, no card
chrome. Per-demo Play buttons and the `animator` helper are gone; one rAF
loop drives every visible figure. Kept: colour coding, dark mode, KaTeX
readouts, the 3D braking scene (now with a distance-bar canvas beneath it,
which is the reading the equation is actually about).

Cost: about 450 lines of demo code rewritten; the primitives (`strip`,
`scale`, `axes`, `nice`, `hbracket`, `vbracket`, `runner`, `car`, `plane`,
`dragster`) are the start of the declarative widget vocabulary the todo
asks for.

Promoted after pass 3: `docs/claude/prompts/interactive-figures.md` (the figure prompt) and `docs/andrew/pipeline-rules.md` (pipeline decisions 1 to 7).

## Pass 4: shell layout (2026-09-06)

The page is now an app shell instead of a three-column article: activity
rails on both edges, sidebars of draggable view boxes, and a document area
with one or two tabbed groups. Text and the problem set are separate
documents opened as tabs; concept map, contents, formulas and definitions
are views that can sit in either sidebar or open as a tab. Settings moved
to a gear popover. Layout is saved in localStorage. Design note:
`docs/claude/shell-layout.md`.

Checks: no console errors; scroll-spy follows the focused group; a concept
chip in the Exercises tab pins the node and reveals the map; a contents
link switches back to the Text tab; split, drag to tab strip, and the
narrow-screen overlay flow all work in headless Chromium.

Left for later: comments (needs a decoration layer), keyboard shortcuts
for group focus, the same document in two groups.

## Pass 5: static site build, chapter-level data (2026-09-06)

The single-page build is replaced by `tools/build_site.py`, which emits
`site/`: per section a full page (`index.html`) and a fragment
(`doc.html`) plus its `figures.js`; per chapter `concepts.json` and
`formulas.json`; a book manifest; and shared assets (shell.css, shell.js,
figlib.js, KaTeX, three.js). Math is pre-rendered at build time with
KaTeX in Node (`tools/prerender_math.js`), so the article reads without
JS and the page paints without a rendering pass. Element ids are
qualified by section at build time (`2.5-notation`), so two sections can
share one DOM. Figures boot against a root element
(`OMNISTAX_FIGURES['2.5'](root, FIG)`); the drawing layer lives in
`shell/figlib.js`. The shell fetches other sections' fragments on demand,
updates the address bar to the focused section's canonical URL, and
restores saved tabs lazily. The old files are in `_old/2.5-single-page/`.

Per the confirmed config, 2.5 lost its three generated relationship
questions and nine problems whose answers were AI-computed; 14 exercises
remain, all with book answers or AI-marked suggested approaches.

Design note: `docs/claude/static-composition.md`.

## Pass 6: section 2.1 Displacement (2026-09-06)

First section built by the agent loop: exploration → config list → plan
→ build. Plan in `ch02/2.1/plan.md`. Five idea nodes (reference frame,
position, displacement, distance, distance traveled); no results or
skills. Three figures: displacement on a line (the professor, with the
passenger as a slider setting), path length vs displacement (the cyclist
from Check Your Understanding, with an odometer), and the book's four
paths for the problems, traced in turn. Seven exercises: the CYU inline
with three parts on one card, one AP item, three conceptual questions
with AI-marked suggested approaches, and problems 1 and 3. Problems 2 and
4 have no keyed answer and were left out.

Converter fix: figures nested inside a paragraph were being flattened to
their caption text; `cnxml2md.py` now emits them as blocks.

Checks: no console errors on either page over http and on 2.1 over
file://; opening 2.5 from the 2.1 page boots its eight figures and moves
the URL; the 2.5 map shows displacement as an other-section node and
clicking it focuses the 2.1 group; split and drag work across sections.

## Pass 7: Astro and Svelte port (2026-09-07)

The DOM shell (one 585-line script) was rewritten as an Astro project with a
Svelte 5 island, in `experiment/app`. The old shell, build script and output
are in `_old/dom-shell/`.

What changed in shape:
- Content is parsed into DTOs with zod at one boundary (`content/schema.ts`);
  the build reads the same `ch02/` sources as before.
- The layout is an immutable value with pure operations (`layout/model.ts`),
  covered by unit tests; the store applies and persists.
- Ids are branded; a tab's content is an ADT (`ItemId`); answers are an ADT
  (`AnswerDTO`) and each type has its own component.
- Book-specific values (colour set, macros, symbols, exercise kinds) moved from
  the shell into `book.json`.
- The figure library is a typed ES module; section figures are unchanged.

Verified in headless Chromium against the served build: default layout, split
right duplicating the active document, closing one copy keeping the other's
typed answer, opening 2.5 from the "+" into the second group with its figures,
the 2.5 map's displacement node pinning and jumping into the 2.1 copy, contents
links and scroll spy, exercise modes, per-figure transport, the three settings
switches, persistence across reload, and the narrow-screen overlay. No console
errors. `astro check` is clean.


## Pass 8: attribution (2026-09-07)

College Physics 2e is CC BY-NC-SA 4.0 (verified against openstax.org; the
book is not plain CC BY). OpenStax asks digital reuse to carry "Access for
free at <page url>" on every page view, and CC 4.0 asks for credit, the
licence, and a note of changes wherever the work is shared. A section is
what gets linked to, so every article gets it.

- `book.json` gained `authors`, `source_url` and `license_url`.
- `content/attribution.ts` is the one place the credit is worded: the
  section's source URL, the footer HTML for both articles (text and
  exercises), and a plain-text citation for metadata. The footer is the
  credit, the "Access for free at" line, and the section's `notes` (what
  was left out).
- Section pages carry `<link rel="license">` and JSON-LD with the authors,
  `isBasedOn` the source page, the licence URL and `creditText`.
- A long-form `/<book>/attribution/` page was built and then removed the
  same day: the footer already carries everything the licence asks for,
  including the copyright notice (© Rice University), so the page was a
  second place to maintain. `LICENSE.md` keeps the content/software split.
- Root `LICENSE.md` separates adapted content (CC BY-NC-SA 4.0) from the
  software (licence not chosen yet).
- The credited figures in 2.1 and 2.5 are all photographs, which are
  dropped, so nothing third-party is carried over; the rule for when one is
  went into RULES.md.

Checked: 20 unit tests, `astro check` clean, build, and a headless pass in
light and dark with no console errors.

## Pass 9: choosing the next chapter, exploring Chapter 16 (2026-09-07)

Asked: which chapter do live figures help most? Counted figures,
equations, examples and exercises per chapter from the CNXML, then judged
each chapter on whether time is its content, whether one slider changes
the kind of thing seen, how many later chapters lean on it, and how well
it fits the strip-and-graph idiom. Chapter 16 Oscillatory Motion and Waves
won on all four; Chapter 3 (projectile motion, relative velocity) was the
runner-up, then 25 (ray optics) and 6 (orbits).

Exploration in `ch16/exploration.md`, module list in `ch16/chapter.json`,
proposed config in `ch16/config.md` (status: awaiting confirmation). 48
figures: 12 photographs dropped, 30 sketches and graphs to replace, 6
exercise figures to copy. Two new hues (force, energy) and two new figure
archetypes (circle with projection, travelling curve on a strip) are the
only additions the chapter asks of the tooling. `book.json` is untouched
until 16.1 is built.

Config confirmed the same day, with one rule change: photographs are no
longer dropped wholesale. A photograph that serves the narrative and the
original text is kept with its caption and credit line (the Tacoma
Narrows bridge in 16.8); decoration is dropped. The plan lists each one.
Changed in the figure prompt, RULES.md and pipeline rule 14.

## Pass 10: section 16.1 Hooke's Law (2026-09-07)

First section of Chapter 16, built by the agent loop: plan in
`ch16/16.1/plan.md`, reviewed, then built. Three blocks (restoring force,
Hooke's law, energy stored in a deformation), four nodes (restoring force,
force constant, Hooke's law, elastic potential energy) with placeholders
for displacement (2.1, which opens the built page), Newton's first law,
work, kinetic and potential energy. Three demos: the plucked ruler (a
cantilever with a force arrow that always points back to equilibrium, a
free-length slider for Check Your Understanding 1, damping, finite so it
has the scrubber), the spring scale (weights hung one at a time, each
plotted on F against x, slope k, the book's 0.100 kg steps and k = 39 N/m
as defaults) and the toy-gun spring (compress, hold, release; the work as
the shaded triangle under the applied-force line, then the dart's speed,
Example 16.2's numbers). Seven exercises: two CYU inline, one AP item,
one conceptual question with an AI-marked approach, problems 1, 3 and 5.

Decisions recorded on the way:
- AP question 1 tests amplitude and period (16.2 and 16.3 ideas) though
  the book puts it in 16.1. Held for the 16.3 page. Rule: an exercise goes
  with the section that introduces what it tests (pipeline rule 12).
- AP questions 2 and 4 and problems 2, 4 and 6 have no keyed answer in
  the CNXML and are left out.
- The car photograph beside Example 16.1 is dropped (decoration); the
  toy-gun figure belongs to Example 16.2, so it became a demo rather than
  a faithful copy.
- Two new hues in `book.json` and RULES.md: force (F, F_app, k) and
  energy (PE_el, KE, W). Sliders for quantities that are not colour-coded
  variables (a length, a damping rate, a mass) use an empty colour class
  and render in ink.
- The spring-scale demo puts its graph beside the scene, not below it:
  the scene is vertical, so the side-by-side squeeze the figure rule
  guards against does not arise. Worth folding into the rule.
- New sprites in the section module: a coil spring, a block, a fixed
  surface (beam, clamp, wall). Candidates for figlib once 16.3 reuses them.

Checks: `astro check` clean, 21 unit tests, build, headless pass in light
and dark with no console errors; one fix pass for three label collisions.
No chapter landing page yet (the config lists one; the app has no
chapter-level page, same as Chapter 2).

## Pass 11: section 16.2 Period and Frequency (2026-09-07)

Plan in `ch16/16.2/plan.md`, approved as proposed, then built. A thin
section: two blocks (periodic motion and the period; frequency as cycles
per unit time, with Example 16.3 and the Check Your Understanding inline
after it), four nodes (periodic motion, period, frequency, and the
reciprocal relation f = 1/T as the result). Two demos: the plucked guitar
string (an undamped vibration with the midpoint's position traced against
time, the pen fixed at the right, one period bracketed between successive
crests, a counting window shaded to show that the count over any window
divided by its length gives the same frequency) and the counted cycles (a
mass on a spring bobbing under a stopwatch, a mark on a time line for each
completed cycle, N and t on the sliders, the AP item's ratio as default).
Eight exercises, all from the book's key: one CYU inline, one AP item with
two parts, six problems. Nothing left out, so the section's `notes` is
empty for the first time.

Decisions recorded on the way:
- The block split falls inside the book's one paragraph, at "A concept
  closely related to period is the frequency of an event." The words are
  untouched; a header goes in. Approved.
- The guitar photograph is kept, the first photograph kept under the
  revised rule 14. New markup for a kept photograph, `figure.photo` with
  an eyebrow carrying the book's figure number and a caption with the
  credit line, and a `.photo` style in `global.css`. The image file is
  copied into `app/public/media/ch16/`; the pipeline convention is that a
  kept photograph goes to `app/public/media/<chapter dir>/` under the
  book's own file name.
- The tire-tread simulation (rule 15) was offered and not picked.
- A steady oscillation runs endlessly: a cycle whose period is Infinity.
  `figlib` now adds the time scrubber only when the motion has a finite
  period, so an endless figure gets the plain transport the config asked
  for. The figure handles reduced motion itself (a still frame with a
  full trace).
- The coil spring, block and fixed-surface sprites moved from 16.1's
  module into `figlib` (`spring`, `block`, `fixed`), since 16.2 reuses
  them; 16.1 now takes them from `F`.
- Two macros added to `book.json`, `\kT` and `\kf`, both in the time hue;
  the RULES.md colour table lists T and f on the time row. The hertz is a
  definition of the unit symbol, not an equation on the sheet.
- The AP item's key writes 1.66 Hz and 0.6 s; kept verbatim, the 2%
  tolerance covers the exact 1.67 Hz. Its two parts are labelled f and T.
- Problems 5 and 6 turn a speed and a spacing into a count per second;
  they are tagged with `average-velocity` (2.3), added as a placeholder.
- `cnxml2md.py` no longer folds a figure, note or equation nested in a
  paragraph onto one line (the 16.1 converter note); 16.1's `source.md`
  was regenerated.

Checks: `astro check` clean, 21 unit tests, build, headless pass in light
and dark with no console errors, the photograph loading, the period demo
without a scrubber and the count demo with one; one fix pass for a
clipped axis title and a label sitting on the string. The 16.1 spring
scale was re-shot to confirm the moved sprites.

## Pass 12: section 16.3 Simple Harmonic Motion (2026-09-07)

Plan in `ch16/16.3/plan.md`, approved as proposed, then built. Three
blocks (simple harmonic motion and its amplitude; the period depends on
mass and stiffness, not on amplitude; the book's own header on the link
to waves), four nodes (simple harmonic motion, amplitude, the period
result T = 2π√(m/k), and one node for x(t), v(t), a(t) together), with
placeholders for instantaneous velocity (2.3), acceleration (2.4) and
Newton's second law (4.3). Four demos, all endless: the block on a
frictionless surface with force and velocity arrows (Fig 16.9); two
identical oscillators released at different amplitudes staying in step,
with T against m below (Example 16.4's car as defaults); the paper strip
(Fig 16.11, with the car's headlight streak of Fig 16.10 folded in); and
the mass on a vertical spring with x, v and a arrows and three stacked
graphs beside it (Fig 16.12). Fourteen exercises: two CYU inline, the AP
item held from 16.1 plus AP question 2, six conceptual questions with
AI-marked approaches, four keyed problems. The skydiver photograph sits
inside problem 9's card.

Decisions recorded on the way:
- The 16.1 AP item on the distance covered in one period (4A) lands
  here, tagged amplitude and period, and demo 1's readout states the
  fact. AP question 4 (energy at the centre of the swing) is held for
  16.5 under pipeline rule 12; this section's notes say so.
- AP questions 1 and 3 and problems 2, 4, 5, 7 and 8 are unkeyed and
  left out, with the two AP graphs and the child's jumper photograph.
- First figure inside an exercise card: `exercises.json` items may carry
  a `figure` (src, alt, caption); the schema and the card render it with
  the `.photo` style. The image goes to `app/public/media/ch16/`.
- The PhET callout ("Masses and Springs") is kept as a note with the
  book's link. The boxed period formulas are a note too.
- Vertical scenes (demos 3 and 4) take their graphs beside them; the
  horizontal ones (demos 1 and 2) stack. The rule was reworded to say so
  earlier in the day.
- Two macros added, `\kX` (position hue) and `\kvmax` (velocity hue);
  the RULES.md colour table lists them.
- The concept map's rows now wrap: eight external prerequisites in one
  row were overlapping. One CSS line in `ConceptMap.svelte`.

Checks: `astro check` clean, 21 unit tests, build, headless pass in light
and dark with no console errors and the skydiver image loading; one fix
pass for a force label on the spring, two clipped axis titles, graph
titles colliding with tick labels, and a displacement label on the
equilibrium line.

## Pass 13: section 16.4 The Simple Pendulum (2026-09-07)

Plan in `ch16/16.4/plan.md`, approved as proposed, then built. Three
blocks split at paragraph boundaries (the restoring force on a pendulum;
for small angles it is a simple harmonic oscillator; the period depends
on length and gravity alone), four nodes (simple pendulum, the
small-angle restoring force, the period T = 2π√(L/g), and measuring g as
the chapter's first skill node), placeholders for tension (4.5) and the
acceleration due to gravity (2.7). Three demos: the forces on the bob
with the true equation of motion integrated live (RK4) and, beside it, F
against s with Hooke's line and the small-angle band shaded; two
pendulums of different length and mass swinging together with T against
L below and a g slider that reaches the Moon; and the ten-swing timing of
the Take-Home Experiment recovering g to five digits, Example 16.5 on
load, finite with the scrubber. Ten exercises: the CYU inline, AP
question 2 as a plain-text choice, the conceptual question with an
AI-marked approach, seven keyed problems. The career note, the Take-Home
Experiment and the Pendulum Lab callout are notes.

Decisions recorded on the way:
- The problem set's opening line (g = 9.80 m/s² unless otherwise
  specified) is a `lead` in `exercises.json`; the loader prerenders its
  math and the Exercises document prints it under its heading. First use
  of the field.
- AP questions 1 and 3 and problems 2, 4, 6, 8, 10 and 12 are unkeyed
  and left out; the section's notes say so.
- Choice options render as plain text, so AP question 2's formulas go in
  as "g = 4π²L/T²" and the like.
- The force demo's readout reports how far θ and sin θ differ at the set
  amplitude and how much longer the true period is than 2π√(L/g), which
  is the large-amplitude point the PhET note raises; the true period is
  computed by the arithmetic-geometric mean.
- Two macros added, `\ks` (position hue) and `\kg` (acceleration hue);
  the RULES.md colour table lists them. θ and L stay in ink.

Checks: `astro check` clean, 21 unit tests, build, headless pass in light
and dark with no console errors; one fix pass for the weight and
along-string labels colliding at small angles and the arc-length label
sitting on the bob, plus a loader edit that had asserted its match
without applying it.

## Pass 14: colour is a function of type (2026-09-07)

Chen asked for the colour coding to be type-driven and scoped, and the
design was agreed in conversation: a hue belongs to a type (a physical
dimension), variants share it by decoration, derived quantities are other
types; a global tier of six types is pinned for the book, every other
type is bound per chapter from a small pool, and a page colours only the
types it binds. No coercions: frequency is not a time and a force
constant is not a force. Recorded as pipeline rule 7, the colour section
of RULES.md, and a note in the figure prompt.

What changed, content:
- `book.json`: `colors` became `types` (label, dimension, and hues for the
  global tier; frequency and stiffness declared without hues) plus
  `chapter_pool` (magenta, olive, teal). Macro classes are named by type
  (`kv-position`, not `kv-x`); `\kf` is frequency and `\kk` is stiffness.
- `ch16/chapter.json` binds frequency to magenta and stiffness to olive.
- `formulas.json` variables carry the type as `color`; k is stiffness, f
  is frequency.
- Every `figures.js` (2.1, 2.5, 16.1 to 16.4) calls `C()` and sets slider
  `cls` by type name; the 16.1 slope label is stiffness.
- Every `section.json` lists in `binds` the types the page colours,
  derived from its figures module (drawn, on a slider, or in a readout).
  16.3 leaves frequency in ink and 16.4 the force constant.

What changed, shell:
- The page emits global hues on the root, chapter bindings scoped to
  `[data-chapter]` (articles and split-out figure roots carry it), one
  class rule per type, and per-article overrides that put unbound types
  in ink. The loader rejects a binding to an unknown type, to a type with
  global hues, or to a hue the pool lacks, and a page bind to an unknown
  type.
- The figure library sets its palette per figure from the chapter the
  figure sits in, cached per chapter and cleared on a redraw.
- The definitions legend lists the global tier plus the focused chapter's
  bound types.

Checks: `astro check` clean, 21 unit tests, build, headless pass over
2.1, 2.5 and 16.1 to 16.4 in light and dark with no console errors, the
computed colours probed on each page (frequency magenta on 16.2 and ink
on 16.3; the force constant olive on 16.1 and 16.3, ink on 16.4, olive
on the formula sheet throughout), and a Chapter 2 article opened beside
16.3 keeping its own scope.

## Pass 15: section 16.5 Energy and the Simple Harmonic Oscillator (2026-09-07)

Plan in `ch16/16.5/plan.md`, approved with one change: ω is coloured now
rather than at 16.6. Two blocks (the energy is conserved; the maximum
speed follows from it), two nodes (the energy result and the speed
result), a placeholder for conservation of energy (7.6). Two demos, both
endless: the block on a spring with kinetic and potential bars against
the total and energy against position below (the parabola, its cap, the
flat total); and Example 16.6's car bouncing on its springs with
velocity against position beside it, the ellipse with v_max at x = 0.
Seven exercises, all keyed: two CYU inline, this section's AP item and
AP question 4 held from 16.3, the conceptual question with an AI-marked
approach, the climber and the Citigroup Center problems.

Decisions recorded on the way:
- ω is one type. The bob's angular velocity (v = Lω) and the angular
  frequency 2π/T have the same dimension, rad/s, so under rule 7 they are
  one type, `angular-rate`, bound by Chapter 16 to teal, the last pool
  hue. Macros `\kw` and `\kwmax`. No demo draws ω, so the car demo's
  readout states ω = 2π/T = √(k/m) and the page binds the type.
- v_max = X√(k/m) has an entry on the 16.5 sheet as well as the 16.3
  one, tied to the speed node; the chapter sheet lists it twice.
- The three pendulum paragraphs the source places inside Example 16.6
  stay inside the example. The letter a there is the pendulum's
  amplitude and is left in ink, since a is acceleration elsewhere.
- Force-constant sliders that carry the car's 6.53×10⁴ N/m now step by
  100 (16.3 and 16.5): a step of 1000 snapped the default to 65000 and
  the readout to 0.850 m/s against the book's 0.852.
- Symbol entries for θ and θ_max so the definitions view sets the
  subscript properly.

Checks: `astro check` clean, 21 unit tests, build, headless pass in light
and dark with no console errors, ω probed teal in the text and present in
the legend; two fix passes for the kinetic-energy label.

## Pass 16: section 16.6 Uniform Circular Motion and SHM (2026-09-07)

Plan in `ch16/16.6/plan.md`, approved as proposed. Two blocks (the
shadow of a ball on a turntable moves in simple harmonic motion; the
speed and the period follow from the circle), one node (the projection
of uniform circular motion is simple harmonic motion, with ω = 2π/T as
its equation), two nodes reinforced (the speed at a position from 16.5,
the period from 16.3), placeholders for uniform circular motion and
angular velocity (6.1). Two demos, both endless: the turntable, with the
shadow drawn as a block on a spring and the trace on paper running
downward as in Fig 16.20 (the circle-with-projection archetype); and the
two similar triangles of Fig 16.19, shaded. The merry-go-round
photograph is kept. Three exercises: the CYU inline and the two keyed
problems; the AP item and problems 2 and 4 are unkeyed and left out.

Checks: `astro check` clean, 21 unit tests, build, headless pass in light
and dark with no console errors, the photograph loading; two fix passes
for the headline under the light bar, a circle too small for its
labels, and a side label against the velocity triangle.

## Pass 17: notes, highlights, and pinned views (2026-09-07)

Chen asked for note-taking (highlight a selection in a colour or add an
annotation, all collected in a notes view that shows the focused page's
notes by default and the whole book on demand) and for a way to keep a
companion view from following the focused document.

Design chosen:
- **Pinning per view.** Every view opens with a scope line, "16.3 ·
  following the page" and a pin. Pinned, the view holds its section and
  shows a picker of the built sections. Chosen over a global freeze
  (holds everything at once) and over turning following off (stale by
  default). Remembered per browser. Implemented as a `scope` store and a
  Svelte context set by the view dispatcher; the five views read their
  section from it instead of from `focus`.
- **Highlights anchored to text.** A selection in an article shows a bar
  with four colours and Note. Anchors are the quote plus 32 characters
  of context each side, pure and tested; the painter indexes the prose
  (skipping figures, controls, photographs, hidden MathML) and wraps
  text nodes in marks. Copies of a document in a second group are
  painted when prepared, while still detached. Clicking a mark reopens
  the bar to recolour, annotate or remove. A noted mark has a dotted
  underline.
- **Notes view.** The scoped section first, then the rest of the book
  folded with an expand-all; each card has the colour dots, the quote
  as a link back to the mark (opening the document if needed), and an
  annotation saved as typed. Stored per book (`omnistax-notes-<id>`).

Checks: `astro check` clean, 25 unit tests (four new for anchoring),
build, and a headless scenario: highlight from a selection, annotate
with focus landing in the view, reload with both marks and the text
kept, pin the notes view and open 16.1 (notes stay on 16.3 while the
other views follow), unpin and expand the rest of the book, split 16.3
right (four marks in two copies), jump to a mark from the view, remove
from the mark's bar. One fix on the way: the painter had skipped
disconnected text nodes and so left copies unpainted.

### Pass 18 (2026-09-10): the content becomes tables, and the book leaves the experiment

Prompted by: the JSON had grown as documents. `concepts.json` held
concepts, edges, coverage and a comment block; `formulas.json` held three
tables; variants were missing fields; the schema stripped unknown keys, so
eight fields had drifted between chapters 2 and 16 without an error, and
no test read the schema against the files.

Changes:
- Three files per level, each a record of scalars and named tables with
  flat rows that refer to each other by id: `book.json` (types in scheme
  order, symbols the macros are derived from, exercise kinds, every
  concept of the book, prerequisite edges), `chapter.json` (sections,
  variables, equations, glossary), `section.json` (figures with the types
  each draws, coverage as one row per span and concept, exercises,
  exercise-to-concept rows). `binds` is derived from the figures, a
  placeholder from whether its section is built, the macro records from
  the symbols table. `place` is an ADT; `condition` on an equation is text
  in the book's words in place of the `constant_a` flag; an exercise the
  book places in another section names its `source_section`. The design
  is `docs/content-tables.md`; the reference, `docs/content-format.md`,
  is generated from the schema, whose every field carries its description
  and whose enumerations are literal unions.
- `npm run check:content`: eight checks over every reference, anchor,
  span, figure, source id, built concept and drawn type; the same checks
  run in the test suite against the book on disk. They found two AP items
  held from a neighbouring section (rule 12) whose source ids were in the
  neighbour's `source.md`, which is what `source_section` now records.
- The migration dropped three coverage notes of chapter 2 that had no
  column: on `2.1-sign`, "the professor and passenger calculations; the
  sign convention itself becomes a node in 2.2"; on `2.5-notation`,
  "convention for t0, x0, v0, listed under Definitions, not a node:
  nothing in the book tests it on its own"; on `2.5-summary`, "the header
  'Putting Equations Together' is narrative; the strategy box inside it
  is where the skill is taught". Section 16.5 bound `angular-rate` through
  its text equations rather than its figures, so both of its demos carry
  it in `draws` to keep the page's colouring; worth a look when 16.5 is
  next touched.
- The book moves to `omnistax-content/College Physics 2e/` with its
  rules, log, tools and media; the app to `omnistax-web/`, which serves a
  book's `media/` at `/media/` in dev and copies it into the build. The
  pipeline rules become the root `RULES.md`, with three new items: every
  book begins with a full-book pass that writes the book's `RULES.md` and
  `tools/` (18), the content is tables and the schema is the reference
  (19), exercise weights (20). This book's `RULES.md` is rewritten to the
  contract of item 18.

Checks: `astro check` clean, 304 unit tests, `check:content` with no
errors, build, a static serve and a dev serve of a section page and a
media file.

### Pass 19 (2026-09-11): Chapter 1, the book's introduction, in one pass

Chen asked for everything before Chapter 2. The Preface (m42955) is
publisher front matter with no place in the book → chapters → sections
model and is not built; the chapter introduction (m42119) is recorded as
`intro_module` and waits for a chapter landing page. What was built is
Chapter 1 in full, `ch01/1.1` to `ch01/1.4`, with `exploration.md`,
`config.md` and a `plan.md` per section written before the section and
left for review after, since the instruction was to build the whole
chapter without the per-section stops of rule 2.

The chapter is qualitative, and the tables and figures show it. Twenty-four
concept nodes went into `book.json` before any section was built (seven
for 1.1: physics, model, theory, law, scientific method, classical and
modern physics; eight for 1.2 from physical quantity to the conversion
skill; eight for 1.3 from accuracy to the two significant-figure rules;
one skill for 1.4), with `average-velocity` (2.3) the one placeholder the
chapter reaches. The chapter sheet has three equations (average speed,
the 80 m conversion, percent uncertainty) and 28 glossary rows. One new
symbol, `c`, joins the velocity type; `A` and `δA` are untyped rows.

Eleven demos, all but two in ink: the planetary atom (1.10, one slider,
the number of electrons); light along a meter stick (1.18) and the drive
home of Example 1.1, the two figures that carry a time and a speed; the
ladder of powers of ten with the prefixes of Table 1.2 and the lengths of
Table 1.3 on it; the bull's-eye of GPS fixes (1.23 and 1.24 folded into
one, with spread and offset sliders); the band A ± δA on a number line
with the bag half as heavy beneath it; the floor whose largest and
smallest outlines show why percents add; a ruler sliding under a stick
with a magnifier on the estimated digit; two sticks summed and multiplied
with the rejected digits muted; the building stacked up story by story
beside a person; and a trillion dollars rising on a football field.
Twenty photographs kept where the text points at them ("See Figure 1.4
and Figure 1.5"), four splash images dropped. The book's three tables are
in the text as `div.book-table` (new style in `global.css`).

Fifty-one exercises: nine Check Your Understanding inline, twelve
conceptual questions with AI-marked approaches, twenty-two keyed
problems; the twenty-three unkeyed problems are left out and named in
each section's notes, and the Salmonella photograph goes with problem 4
of 1.4. The approximation problems' keys are the book's "sample
answers", so they are open answers to compare with rather than numbers
checked to 2%.

Two things learned on the way:
- `\$` inside display math is torn apart by the build, since the
  prerender runs the inline `$…$` pass over the rendered display block
  and KaTeX prints the dollar raw. Dollar amounts in prose are `&#36;`,
  and the one display equation that needs the sign uses a fullwidth `＄`
  in `\text{}`.
- The `open` answer has no `hint` field; a pointer to a table goes in
  `exercise_notes`.

Checks: `check:content` with no errors, 311 unit tests, `astro check`
clean, build, a headless pass over the four pages in light and dark with
no console errors, every photograph loading and every canvas booting; one
fix pass for the ladder's value label sitting on a tick label and a slider
step that snapped the meter demo's 3.34 ns to 3.35.

### Pass 20 (2026-09-11): the rest of Chapter 2, Kinematics, in one pass

Chen asked for Chapters 2 and 3 to be finished in one job without
check-ins, as Chapter 1 was. Chapter 2 had 2.1 and 2.5 standing; this
pass built the other six sections, `ch02/2.2` to `ch02/2.4` and
`ch02/2.6` to `ch02/2.8`, each by its own agent from a `plan.md` written
before the section and left for review after, and then a chapter pass
over the whole of `ch02`. The concept nodes, prerequisite edges, symbols,
variables, equations and glossary rows had gone into `book.json` and
`chapter.json` before any section was built; the chapter pass wrote the
anchors the plans asked for (23 variable rows and 17 equation rows,
`2.3-elapsed-time` to `2.8-v-t`, each checked against the ids of its
section's `text.html`). Twenty-nine concept nodes belong to the six
sections, from `vector` and `scalar` through the six of 2.4 to the
graph-reading skills of 2.8, and 2.5's prerequisites `average-velocity`,
`instantaneous-velocity`, `acceleration` and `acceleration-due-to-gravity`
are built nodes now rather than placeholders.

Twenty-nine demos, twenty-three moving and six still by the test of rule
14: the jet on two coordinate lines; the pendulum over a time line with a
stopwatch; the airplane passenger's walk, once as a straight line and
once cut into intervals whose chords settle onto the tangent; the round
trip to the store with an odometer and its three graphs; the car whose
velocity grows by ā every second; the eleven figures of 2.4, four of them
one shape built by one function for the racehorse and the three subway
sketches, and the whole subway journey on one clock; the runner of 2.6
whose speed crosses what a person can run at 25 s; the hammer and the
feather in air and in a vacuum; the rock thrown up beside its three
graphs, the two rocks that arrive at the same velocity, the strobed drop
that gives g, and the mine shaft with the sound climbing back; and the
five graph figures of 2.8, four of them still because the reader places
points and reads a slope. Two extra simulations earned their place under
rule 15, the car rounding a bend at constant speed (2.4) and the mine
shaft (2.7). Three photographs kept, the Eclipse jet, the São Paulo
subway train and the Air Force jet car; four splash and stock images
dropped. The exercise figures of 2.4 and 2.8 (the cart's graph, the ship's
graphs, the conceptual questions' and problems' graphs) ride on the cards.

Fifty-nine exercises: five Check Your Understanding inline, five AP items,
twenty-eight conceptual questions with AI-marked approaches, twenty-one
keyed problems; twenty-one unkeyed problems left out and named in each
section's notes. The AP item of 2.4 on the book pushed across a table
goes to 2.8 with `source_section`, since it tests deriving one motion
graph from another. Problem 1 of 2.7 sits inline after Example 2.14,
which it repeats with another number.

Learned on the way:
- An AP item without a key is an open answer with an AI-marked approach,
  never a graded choice: 2.2's feather item had been built as a `choice`
  whose `correct` was an AI guess, and the chapter pass rewrote it to the
  shape of 2.5's marble item, with the book's four options in the prompt.
- `$…$` inside a `data-original-caption` attribute is rendered by the math
  prerender and breaks the tag; the `$(+)$` and `$(-)$` of Figure 2.7's
  caption are written plain. The `lead` of `section.json` is not rendered
  either, so a symbol in a lead is a plain letter.
- `tools/cnxml2md.py` kept only the first piece of MathML of an
  `<equation>` that mixes prose with several pieces, which is how some
  keys are written (problem 3 of 2.8); it now writes such an equation as a
  line of text, and 2.8's `source.md` was converted again. No other
  `source.md` of the book changes under the fix.
- `draws` lists what a figure colours, not what it mentions: the
  rock-down demo writes its times in ink and lost `time` from its row.
  2.1's paths figure is a `figure` row now, the kind the schema keeps for
  a faithful copy.

Checks: `check:content` with no errors, 311 unit tests, `astro check`
clean, build, a headless pass over the eight pages of the chapter in
light and dark with no console errors, every image loading, every canvas
booting, a transport on every moving figure and none on the six still
ones, and every inline place filled but 2.5's `position-quadratic`, which
has held no exercise since Pass 6. One fix pass: the endpoint labels of
the four acceleration demos stay inside the graph box instead of sitting
on the last tick label, the two subway strips of Figure 2.18 moved down
from under the headline, and in 2.8 the intercept label rose above a
chosen point near the axis and "slope = a" moved above the velocity line,
clear of the v₀ label under it.

### Pass 21 (2026-09-11): Chapter 3, Two-Dimensional Kinematics, in one pass

The second half of the job Chen set with Pass 20: Chapter 3 in full,
`ch03/3.1` to `ch03/3.5`, each section by its own agent from a `plan.md`
written before the section and left for review after, with
`exploration.md` and `config.md` written before any of them, and then a
chapter pass over the whole of `ch03`. Twenty-two concept nodes, from
`right-triangle-resultant` to `classical-relativity`, and forty symbol
rows had gone into `book.json` before the sections were built, and the
chapter sheet its 32 equations, 53 variable rows and 24 glossary rows;
the chapter pass wrote the anchors the plans asked for on every one of
the variable and equation rows, `3.1-walking` to `3.5-ex-plane`, each
checked against the ids of its section's `text.html`, and set the unit of
3.2's `D` to blocks, which is what the walk in the city is measured in.

Twenty-five demos, fourteen moving and eleven still by the test of rule
14, and two faithful figures for the problems. The walk of 9 blocks east
and 5 north runs through the chapter: a pedestrian and a helicopter race
it in 3.1 while two strobed balls fall side by side; 3.2 draws it as one
arrow under a ruler and a protractor, walks it head to tail, walks the
three legs of Example 3.1 and lays them in any order, compares the dock
with where the sailor ends up, scales a vector by a signed number and
takes the walk apart into its components, every vector picture a still
one; 3.3 is four still pictures of components, a resultant, a sum and a
difference, with the four steps of the method worked below in live
numbers; 3.4 is six flights, the soccer ball with its displacement, the
projectile with its velocity components and their graphs, the fireworks
shell to its apex, the hot rock to the slope with both roots of the
quadratic on a graph, the range with its complementary angle and the arch
of R against θ₀, and a projectile that falls around the Earth from a tower
until it is in orbit; 3.5 is a boat crossing a river and a plane in a
wind, both moving, the velocity triangle and the wind found from the
plane's track, both still, and the binoculars from the mast and the coin
in the airliner seen by two observers each. One extra simulation earned
its place under rule 15, a heading on the boat so the reader can point it
upstream, built as a slider rather than a figure. No photograph kept: the
two the chapter has are splash images. The paths map that the problems
of 3.2 and 3.3 share is built once, in 3.2, and rides on 3.3's card.

Sixty-two exercises: three inline (3.1's AP item on the acceleration of a
thrown ball, 3.5's two shortest conceptual questions), six AP items,
twenty-one conceptual questions with AI-marked approaches, thirty-five
keyed problems, the derivation of the range equation and the Critical
Thinking item of 3.5 among them as open answers to compare with;
thirty-six unkeyed problems left out and named in each section's notes.
Three exercises cross sections under rule 12: both AP items of 3.2 (the
tables of heights) and the Critical Thinking item of 3.5 (two launchers,
the maximum height) are set on 3.4 with `source_section`.

Decided in the chapter pass:
- The three unkeyed AP items (3.1's graph of vertical acceleration, 3.2's
  vertical launch, 3.4's horizontal launch) had been left out by their
  sections; they are open items with the book's options in the prompt
  and an AI-marked approach, as Pass 20 settled for 2.2. The 3.2 item
  goes to 3.4 with its keyed twin rather than staying in 3.2, which
  introduces nothing it tests.
- The Critical Thinking item of 3.5 moves to 3.4, which introduces the
  maximum height; 3.5's plan had left it and said so.
- Three `draws` lists of 3.4 are trimmed to what the figure colours
  (a headline that states the time in ink does not bind time); the page
  binds the same four types as before.
- Evidence lines of twelve Chapter 3 concepts name the problems the pages
  carry rather than the book's unkeyed ones.
- The book prints its problem figures' captions as plain text on the
  card, so a caption with `$…$` in it (3.2's velocities figure) is
  written plain.

Left for a later pass, in `exploration.md`: a vector held fixed while the
axes turn under it, for 3.2's `resolving-vector` and 3.3's problem 9(b).

Checks: `check:content` with no errors, 311 unit tests, `astro check`
clean, build, a headless pass over the five pages in light and dark with
no console errors, every image loading, every canvas booting, a transport
on every moving figure and none on the eleven still ones, and every
inline place filled. One fix pass: the landing-level label of the hot
rock's graph moved from over the negative root to between the two roots.
Noted and not changed: `figlib`'s `fmt` prints a negative number on the
canvas with a hyphen where the book sets a minus sign, in every chapter.

### Pass 22 (2026-09-11): a folded demo keeps every number it replaces

The book draws one scene several times because print cannot move, and
the earlier passes folded such runs into one demo: the walk across the
city, its right triangle and the helicopter's diagonal (Figures 3.3, 3.4
and 3.5) are one `sim-walk`. Until now the demo carried only the first
number of its run, the rest as further originals, and a reference in the
prose to Figure 3.5 stayed plain text, accepted in three plans as the
price of the fold. Chen's design, now root rule 14 and the book's
"Figures" rule: a folded demo reports the fold. Its row keeps its own
`number` and lists the others under `folds`, its eyebrow reads "Figure
3.3 + 3.4 + 3.5", and every one of those numbers in the prose links and
jumps to the one demo.

In the app: `FigureSchema` gains `folds`; `printedNumbers` in
`fragment.ts` joins a row's number and folds in the book's order, numeric
on both parts so 2.9 comes before 2.10, and `figureIds` reads a
`data-figure` of "3.3 + 3.4 + 3.5" as three numbers to the one id, so
`linkFigureRefs` links each; the original block under a demo already read
`dataset.figure`, so it prints the joined form over the book's caption.
`check:content` compares a `<figure data-figure>` against the joined
string, refuses a fold that repeats the row's own number or a number
another figure of the section carries, and gains a third level of
finding: a warning, printed between the errors and the notes, for a
`Figure N.M` the text cites that no row of the book carries, since a
citation into a chapter nobody has built is legitimate and one into a
built chapter is a slip. The book has no warnings left.

Twenty folds, found by reading every row with more than one original
against the CNXML's figure order: 1.23 + 1.24 (the two bull's-eyes);
2.3 + 2.4 (the professor and the passenger); 2.27 + 2.28, 2.31 + 2.32
and 2.33 + 2.34 in 2.5 and 2.38 + 2.39, 2.40 + 2.41 and 2.42 + 2.43 in
2.7, where a "Draw a sketch" strategy figure with an empty caption is
folded into the demo that follows its example; 3.3 + 3.4 + 3.5; 3.8 +
3.9, 3.10 to 3.13, 3.14 to 3.17 and 3.19 to 3.23 in 3.2; 3.24 to 3.26
and 3.28 to 3.32 in 3.3; 3.40 + 3.43 (the boat and the example's
figure); 16.2 + 16.3 (the ruler and its five stages), 16.6 + 16.7 (the
force graph and the toy gun); 16.10 + 16.11 (the bouncing car and the
paper strip); 16.16 + 16.18 (the turntable and the trace on paper). The
brief had guessed that 2.1, 2.5 and 16.1 held sub-figures; the CNXML
shows separate `<figure>` elements with their own numbers, so they are
folds, and the rule's sub-figure case, (a) and (b) under one number, has
no instance in the book so far. The references to Figures 1.24, 3.5,
3.29 to 3.31, 3.43, 16.10 and 16.18 that had stayed plain now link.

Learned: the plans of 2.1, 16.3 and 16.6 numbered the book's figures by
counting CNXML figures, one short in 2.1 and two high in 16.6; the rows
were right and the plans now say so. The build links references in the
running text only, so 3.2's problem 9, whose prompt names Figure 3.23 on
an exercise card, stays plain there. Checks: `check:content` with no
errors and no warnings, 317 unit tests, `astro check` clean, a build, and
a headless pass over 1.3, 2.1, 2.5, 2.7, 3.1, 3.2, 3.3, 3.5, 16.1, 16.3
and 16.6 reading the joined eyebrow on every folded demo, every cited
number linked to the folded demo's id, the original block showing every
image under the joined number, and no console errors.

### Pass 23 (2026-09-11): two labels for an interactive figure, Sim and Figure

The word "Demo" leaves every label the reader sees. An interactive figure
the agent made on its own suggestion, replacing nothing in the book, is a
Sim, and its eyebrow reads "Sim"; one that transforms a book figure is
still a Figure, and its eyebrow reads "Figure" with the book's number or
the joined numbers it folds. A faithful copy and a kept photograph are
Figures as before. The mechanism keeps its name: `kind: "demo"`, the
`.demo` class, the `demo-` id prefix and `F.demo()` are how a figure is
built, not what it is called, and renaming them would touch every
section for nothing.

Twenty-four eyebrows changed from "Demo" to "Sim", every `demo` row with
no number: two each in 1.2, 1.4, 2.3, 2.4, 3.2, 16.2 and 16.4, four in
1.3, and one each in 2.2, 2.5, 2.6, 2.7, 16.3 and 16.5. No other eyebrow
moved. The button under a figure with an original reads "Original" as
before and, while the book's figure is shown, "Live" rather than "Demo",
since such a figure always replaces a book figure and is never a Sim.
The animations switch in Settings says "interactive figure" where its
hint said "demo".

`check:content` gains a rule in `checkFigures`: the first eyebrow inside
every `<figure>` of the text must read what its row says, "Sim" for a
`demo` row with no number, "Figure" and the printed numbers for a `demo`
row with one, "Figure" or "Figure N" for a `figure` row, "Figure N" for a
`photo` row. The rule reads the eyebrow's own text at depth one, so the
3D badge nested in the eyebrow of 2.5's braking figure is not part of the
label. The root `RULES.md` item 14 states the rule in a paragraph of its
own, the figure prompt, `content-tables.md` and this book's `RULES.md`
name the two labels where they had named one, and the schema's
description of `kind` says that `demo` is the mechanism and the label
follows from `number`.

Checks: `check:content` with no errors, 318 unit tests, `astro check`
clean, a build, and a headless pass over 2.5, 2.7, 3.4 and 3.5 in light
and dark reading "Sim" on the two number-less figures and "Figure …" on
every other, the Original button toggling to "Live" and back, every
canvas booting, and no console errors.

### Pass 24 (2026-09-11): the mechanism is a sim, and the word "demo" leaves the repository

Pass 23 left the mechanism its old name. Chen asked for the rename as
well, so that "demo" appears nowhere: the mechanism behind an interactive
figure is a **sim**, a simulation the reader can play with, and the two
labels of pass 23 are unchanged and still follow from `number`. The
schema's `kind` is `sim` where it was `demo`; every figure id `demo-<name>`
is `sim-<name>` (ninety rows across the twenty-three built sections, and
the ids the plans and configs quote); the `.demo` class and `.demo-head`
are `.sim` and `.sim-head` in every `text.html`, in `global.css` and in
every selector the app holds (`voice.ts`, `notes/paint.ts`, `fragment.ts`,
`original.ts`, `fold.ts`, `registry.svelte.ts`, `hover/cards.ts`,
`Hover.svelte`); the drawing layer's `F.demo(root, id, H)` is
`F.sim(root, id, H)`, its `Demo` type is `Sim`, and every `figures.js`
reads `const sim = (id, H) => F.sim(root, id, H)` and calls `sim('sim-…', H)`.
The three faithful copies (`fig-paths` twice, `fig-galaxies`) keep their
`fig-` ids and now carry `class="sim"`, since the sim mechanism draws them.
The docs and rules follow: the figure prompt's template, `content-tables.md`,
the regenerated `content-format.md`, the root `RULES.md` paragraph on the
two labels and this book's `RULES.md` "Files" section.

The change was a whole-word, case-aware substitution over the worktree,
read hunk by hunk afterwards. Two things the script could not see: the
regex literals `\bdemo\b` and `\bdemo-head\b` in `fragment.ts`, where the
`\b` before the word hid it from a whole-word match, and a test that
tried "Demo" as a label the validator must refuse, which now tries
"Animation".

What the reader's browser keeps: `omnistax-hidden-figs` stores qualified
figure ids such as `2.5-demo-avg`, and `omnistax-layout-v5` stores figure
tabs as `fig:2.5/demo-avg`; a layout with one such tab would have been
thrown away whole, since `parseLayout` refuses a group with an unknown
tab. Both are read through a one-line rename at the storage boundary
(`renamedSimId` in `fold.ts`, `renamedSimKeys` in `layout/model.ts`), and
the next save writes the new ids. Those two functions and their tests are
the only places the old prefix survives outside this log.

Checks: `check:content` with no errors, 320 unit tests, `astro check`
clean, a build, and a headless pass over 1.3, 2.5, 3.1, 3.4 and 16.3 in
light and dark: every `figure.sim` boots a canvas, the four still sims of
1.3 have no transport and every moving one has, the Original button sits
on every figure with an original, the references in 3.1 link to
`#3.1-sim-walk`, a figure hidden under its old id comes up hidden under
its new one, and no console errors.

### Pass 25 (2026-09-11): a book image at a sensible size

A kept photograph and the Originals shown under a sim were set to
`width: 100%`, so a 315 × 380 file was stretched to the 740 px column
and the 594 × 1397 jet-car graph of 2.8 ran past the whole viewport.
Chen chose three measures together, and the stylesheet now says all
three for `figure.photo img` and `.sim .original img`: an image is
never upscaled (it sits at its natural size, centred, never wider than
the column); it is never taller than 60vh, width following; and where
the book says how wide it prints the image, that width is honoured on
our column. The book lays its pages out on a 600 px column and the
article is 740 px wide (820 less two 40 px paddings), so one of the
book's pixels is 740 / 600 of ours; `--book-px: 1.2333px` names that in
`global.css`, and an image with a known width is capped at
`min(100%, calc(var(--book-w) * var(--book-px)))`. The exercise cards'
figures share the `photo` class, so they obey the first two measures
too.

The book's width is the `width` attribute of the CNXML `<image>`, which
most figures carry. The figures table keeps it as `widths`: one number
per image the row shows, in the row's order (a photograph's one image,
or the `originals`), empty where the book gives none. The text carries
the same numbers for the browser as the other facts of a row are
carried, `data-width` on a photograph's `<img>` and `data-original-width`
on a figure with originals, comma-separated and aligned with
`data-original`; the validator's new rule `checkWidths` reads both
against the row and refuses a count that does not match the images. The
build writes `--book-w` onto a photograph's `<img>` from `data-width`
(`sizeImages` in `fragment.ts`, so no content file carries a style
attribute), and `original.ts` writes it onto each original image from
`data-original-width` as it makes them. The converter's `FIGURE` block
gains a `> width: 400` line after `alt:` (and a subfigure line
`width=`), for sections converted from here on; the committed
`source.md` files were not reconverted.

A script read every built section's module in the bundle and filled
`widths` and the two attributes: 65 rows got widths and 25 were left
empty. Twenty-three of those carry only a `height` in the CNXML (eight of
1.1's eleven photographs and its atom model, 1.2's three photographs,
1.3's target, three of 3.2's vector figures, 3.3's components, 3.4's
components, fireworks and range, 3.5's coin, 16.3's x-v-a graphs and
16.5's energy transfer), and two carry neither
(`fig-paths` of 3.2 and `fig-galaxies` of 3.5). One bundle file is
named with a space, "Figure 02_01_02.jpg", where the section's copy has
an underscore; the script tries that spelling and 2.1's displacement
figure got its width. A row with several originals is all or nothing,
so 3.2's head-to-tail (two of four) and subtraction (one of five) stay
empty rather than half-set.

Checks: `check:content` with no errors, 322 unit tests, `astro check`
clean, a build, and a headless pass over 1.1, 2.4, 2.7, 2.8 and 3.1 in
light and dark with every Original opened: every image loads, none is
rendered wider than its natural width or its book cap, none is taller
than 540 px of a 900 px viewport (the MRI of 1.1 sits at 315 × 380, the
jet-car graph at 231 × 540, the three originals of 3.1's walk at 400,
200 and 350 book pixels scaled), and no console errors.

### Pass 26 (2026-09-11): the introductions keep their place, and a section's summary is read where it ends

Rule 21 asked for it, and Chen asked for the built chapters to be walked
back over. The book prints an introduction for every chapter and a Preface
for itself, and no chapter-level or book-level summary, so five pages were
built and no `summary/` folder: `intro/` under `ch01`, `ch02`, `ch03` and
`ch16` (the Veil Nebula, the kestrel, the wheelchair tennis player and the
beach fire, each kept as the chapter's Figure N.1 by rule 21) and `intro/`
at the book level for the Preface (forty paragraphs under thirty-two
headers, its one diagram kept). Each is the book's own words with no lead,
no objectives, no exercises and no coverage; the only things left out are
the video-trailer links, named in each page's `notes`.

The app learned the page kind first: `chapter.json` and `book.json` name
their `intro` and `summary` modules and slugs, a page's `section.json`
carries `id: "intro"` and is read by the app as `2.intro` so two chapters'
introductions never collide, the loader, routes, explorer, tab titles,
front page and footer know the new pages, and the validator holds them to
the book's own words (empty tables, an empty lead allowed only there, no
chapter table anchoring into one). A section's `summary_html`, stored since
the first pass and shown nowhere, now renders at the end of its text as a
"Section summary" block before the practise row.

Two things for a later pass: the Preface's diagram is unnumbered and
uncaptioned, and no figure kind fits that (a `photo` row must carry a
number), so it is carried as a `figure` row with the image as its original;
and the Chapter 16 introduction defines `oscillate` and `wave`, which the
chapter glossary does not carry, since a glossary row names a section.

Checks: `check:content` with 4 chapters, 23 sections, 5 introduction pages
and no errors, 339 unit tests, `astro check` clean, a build of 30 pages, a
headless pass over every page in light and dark with no console errors and
every image loading.


### Pass 27 (2026-09-11): Chapters 4, 5, 6, 8 and 9 are built, and Chapter 7 is prepared

Chen asked for the rest of the book to be built by Opus agents in one
job without check-ins, and this pass is what stood when he paused it
with credits running low. The plan and its running record are in
`Plan.md` at the repository root. The process is the three-phase split
of passes 20 and 21 (prep, sections in parallel, chapter pass), with one
change: `book.json` is never edited by hand. A chapter stages its
book-level rows in `book-rows.json` and `tools/mergebook.py merge chNN`
merges them under a lock, refusing duplicate concept ids, symbols,
macros and types across chapters; `mergebook.py log chNN` appends a
staged log pass.

Built whole: Chapter 4 (Dynamics, eight sections), Chapter 5 (Friction,
Drag and Elasticity, three), Chapter 6 (Uniform Circular Motion and
Gravitation, six), Chapter 8 (Linear Momentum and Collisions, seven)
and Chapter 9 (Statics and Torque, six), each with its introduction
page; Chapter 7 (Work, Energy and Energy Resources) is prepared and its
introduction built, and its sections wait. Five types joined the nine:
`stress` and `elastic-modulus` (5.3), `power` (7.7), `momentum` (8.1,
impulse is the same type) and `torque` (9.2, its own type although its
dimension is the joule's). Mass, angle, a scene length and every
dimensionless coefficient stay in ink. One concept moved: the book states
the energy of a stretched spring first in 7.4, so
`elastic-potential-energy` sits there and 16.1 reinforces it.

What the sections taught: statics has no time in it, so every figure of
Chapter 9 is still; a rotor at 200 rad/s is drawn still for the same
reason, since it turns 32 times a second; folds carried the pole
vaulter's three holds (9.18 + 9.19 + 9.20), the pencil on its eraser,
the merry-go-round (6.13 + 6.15), the tides (6.21 + 6.22) and the rough
interface (5.2 + 5.5). AP items trade both ways between 8.4 and 8.5, and
between 9.4 and 9.2 and 9.3. The masculine ordinal the CNXML writes for
degrees has no KaTeX metrics and became `^\circ` inside math. The book
prints Table 4.1 with a weak-force strength its own answer key
contradicts, and it is printed as printed. The converter flattened a
table nested inside a paragraph (only 5.3's Elastic Moduli) and now
emits it; it still drops every table's title, which each chapter's
`exploration.md` carries.

Cut short: the chapter passes of 4, 5 and 6 were stopped mid-way, so
the anchors, cross-section checks and full-chapter headless passes are
still owed for 4, 5, 6, 8 and 9 (each section's `plan.md` lists what it
wants at chapter level); 7.1 to 7.5 are held outside the tree until 7.6
and 7.9, which they take exercises from, are built.

Checks: `check:content` clean with 10 chapters, 53 sections and 11
introduction pages; 348 unit tests; `astro check` clean; a build of 66
pages; a headless pass over all 36 new pages in light and dark with no
console error, every image loading and every canvas booting.


### Pass 28 (2026-09-11): Chapter 7, Work, Energy, and Energy Resources, is built

Chapter 7 was prepared in pass 27 and held there, because 7.1 and 7.2 take
exercises from 7.6 and 7.9 and the validator refuses a `source_section`
that names a section nobody has built. Its nine sections were built in one
wave by nine agents, and this pass is the chapter pass over them: the
wants of the nine plans, the cross-section checks, one reading of every
page and every `figures.js`, and the full checks.

What stands. Nine section pages and the introduction page of pass 27, 43
figure rows over them: 32 sims, of which 19 transform a book figure and 13
are Sims of OmniStax's own, 9 kept photographs and 2 faithful copies that
serve the problems (the skier of 7.5 and the car coasting to the gas
station of 7.6). Every one of the book's numbers, Figure 7.1 to Figure
7.29, is carried by exactly one row, and one fold does the work of two:
the baseball player sliding to a stop on the level and on a 5° slope is
Figure 7.16 + 7.17 with the angle on a slider. 105 exercises, 12 of them
carrying a figure of the book's on their card, and six short conceptual
questions set inline, since the chapter prints no Check Your Understanding
box anywhere. Seven items cross sections with `source_section`, and both
sections' `exercise_notes` say so each time: the rocket payload and the
crane of 7.1 and the Critical Thinking item of 7.9 go to 7.2, the spring
item of 7.1 to 7.4, the pendulum clock of 7.4 to 7.3, and the mule and the
"describe an instance today" item of 7.6 to 7.1.

What the chapter pass wrote. The 125 anchors the nine plans asked for, on
every variable row and every equation row of `chapter.json`, each one a
span or an example of the section's own `text.html`. One symbol: 7.2 asked
whether `F_fr` was worth a row for the single place Example 7.3 spells the
friction force `F_{\text{fr}}` where the rest of the chapter writes `f`,
and it is, since that one occurrence stood in ink among coloured forces
and read as a mistake; the row carries the type `force` and the macro
`\kFfr`, and `book-rows.json` now stages 32 symbols. 7.4's `cq3`, which
asks what mechanical energy has to do with nonconservative forces, now
also tags `nonconservative-force`, a built node since 7.5 stands, with a
weight of 1 because the question is about mechanical energy and only names
the other idea.

What the reading found. Two inline cards had nowhere to render: 7.2's
`cq2` is placed after the span `transfers` and 7.4's `cq1` after
`conservative-forces`, and neither `text.html` carried the
`<div class="exercises" data-place="…">` the other four sections carry, so
both cards were laid out into nothing. Both hosts are in. Table 7.2's
footnote in 7.6 and Table 7.5's in 7.8 were set two different ways, and
both are now the `<p class="tnote">` that Chapter 4 gives Table 4.1's.
`exploration.md` said both Unreasonable Results items of 7.9 were keyed;
only the exercise bicycle is, and the car advertisement is not, so the
file is corrected and agrees with 7.9's `exercise_notes`.

Four figures were fixed after the screenshots. In Figure 7.2 the label
"F cos θ" sat in the same wedge as the angle's arc and its label, and now
stands above the reference line beside "F". In Figure 7.4 the bracket for
the net work drew its label on the dashed line at the starting energy for
the first instants of every loop, and now waits until it is tall enough to
hold it. Figure 7.8 read `√(2(9.80 m/s²)(0.0 m) + (0.00 m/s)²) = 0.4 m/s`
at the top of the hill, because the car stood at the second sample of its
run while the height fallen was printed to one decimal; the car now starts
at the first sample and the height carries two decimals, so the arithmetic
the readout prints is the arithmetic it does. In Figure 7.12 the speed of
the car that takes the dip was written above it, which is where the other
car stands as the two leave together, and now goes below and behind it.

Two colour faults went with them, both in 7.3. The weight of the falling
person was drawn and labelled "mg = 588 N" in the acceleration hue,
although it is a force and the same figure's graph draws the force in the
force hue; and the arrow that shows the cuckoo clock's weight coming down
names no quantity at all, so it is in ink now rather than borrowing a
type's colour. Rule 7 is about what a colour means, and a newton in the
hue of an acceleration says the wrong thing.

What the book's rules gained. One sentence under Files: a dollar sign is
`&#36;` in the prose of `text.html`, but the fullwidth `＄` inside an
exercise's `prompt` or `solution`, because the entity is decoded into a
bare `$` before the math sweep reads the string and the sweep then takes
the rest of the sentence for an equation. 7.7 is the only section of the
chapter with money in it and had already written it that way; every
`section.json` of the chapter was grepped for `&#36;` and `\$` and neither
occurs.

Left as it stands. Figure 7.29, the scatter of energy use against GDP, is
kept as the book prints it, since neither the population nor the gross
domestic product behind it appears anywhere in 7.9. The introduction marks
"Conservation of energy", which the glossary carries under 7.6 as the law
of conservation of energy, and the mark stays where the book puts it.
`PE_el` keeps `\kPE` and plain `PE` keeps `\kPEtot`, and
`elastic-potential-energy` sits at 7.4, where the book first states the
energy of a stretched spring, with 16.1 reinforcing it. The book's own
keys are printed as the book prints them, the dart gun of 7.4 included.

Checks: `check:content` with 10 chapters, 62 sections and 11 introduction
pages and no errors; 361 unit tests; `astro check` clean; a build of 75
pages; and a headless pass over all ten pages of the chapter in light and
dark with no console error, every image loading, every `figure.sim`
booting its canvas, a transport under every moving figure and none under
any still one, every eyebrow reading what its row says, and all six inline
cards rendering in their hosts.


### Pass 29 (2026-09-12): Chapter 5, Further Applications of Newton's Laws, is built

Chapter 5 was prepared in pass 27, its three sections were built by three
agents in one wave, and this pass is the chapter pass over them: the wants
of the three plans, the cross-section checks, one reading of every page
and every `figures.js`, and the full checks. An earlier run of this pass
was interrupted at its headless check, so what it had already written was
read before anything else was changed.

What stands. Three section pages and the introduction page, 23 figure rows
over them: 15 sims, of which 10 transform a book figure and five are Sims
of OmniStax's own, seven kept photographs and one faithful copy that
serves the problems, the block of ice of 5.1's keyed problem 18.
Every one of the book's numbers, Figure 5.1 to Figure 5.18, is carried by
exactly one row, and one fold does the work of two: the crate on the
concrete floor with the interface under its corner magnified is Figure 5.2
+ 5.5, since both drawings say that friction depends on the normal force
and not on the area of the base. 41 exercises, and the chapter prints no
Check Your Understanding box anywhere, so none is set inline. Three items
cross sections with `source_section`, and both sections' `exercise_notes`
say so each time: 5.3's Critical Thinking item on two beads falling
through a fluid goes to 5.2, and the conceptual questions on the soles of
shoes (5.3) and on oil and gasoline on a road in the rain (5.2) both go to
5.1, since each turns on the coefficient of friction that 5.1 introduces
and on nothing its own section teaches. No AP item is held: all four sit
in 5.1 and all four test friction.

What the chapter pass wrote. The 64 anchors the three plans asked for, on
every variable row and every equation row of `chapter.json`, each one a
span or an example of the section's own `text.html`. One equation row was
added, `eq-dv-over-v0`, the fractional change in volume that Example 5.6
solves for and `sim-cube` reads out; `eq-bulk` stays the important
statement of the result. `eq-terminal-balance` now writes its `ktex` with
the book's own macro, `\kFnet = m\kg - \kFD = m\ka = 0`, so the net force
wears the force hue on the formula sheet, and `eq-mu-tan`, the only row of
the chapter without a `ktex`, now carries one, so that the weight in
μ = tan θ is coloured where the two rows above it colour it. No symbol and
no type was added: the two this chapter needed, `stress` and
`elastic-modulus`, were merged in the preparation pass.

What the reading found. The caption of Figure 5.18 said the same squeeze
compresses acetone six times as much as water, where Table 5.3 gives
2.2 × 10⁹ N/m² for water against 0.7 × 10⁹ for acetone and the figure's
own readout says three times; the caption now says three. The caption of
Figure 5.17 said the flex of the nail is drawn many thousands of times
larger than it is, while the figure states the magnification it actually
uses, a few hundred times at the book's numbers; the caption now says
hundreds and points at the number the figure prints. 5.1's `figures.js`
wrote the degree sign as the masculine ordinal the CNXML carries, in the
slope slider's unit and in eight drawn labels, and now writes `°`, as
Chapters 4 and 9 do.

Three decisions the plans asked for, and all three leave the node where it
stands. `friction` stays at 4.3 and `drag-force` at 4.7, where Chapter 4
introduces each in a built section; `hookes-law` and `force-constant` stay
at 16.1, where Chapter 16 built them. Chapter 5 reinforces all four, which
is what its coverage rows already say, and its own 21 nodes rest on them
as prerequisites either way. `elastic-potential-energy` sits at 7.4, as
pass 28 settled it.

Checks: `check:content` with 10 chapters, 62 sections and 11 introduction
pages and no errors; 361 unit tests; `astro check` clean; a build of 75
pages; and a headless pass over all four pages of the chapter in light and
dark with no console error, every image loading, every `figure.sim`
booting its canvas, a transport under each of the six moving figures and
none under any of the ten still ones, every eyebrow reading what its row
says, and all 41 exercises rendering with no KaTeX error.


### Pass 30 (2026-09-12): Chapter 6, Uniform Circular Motion and Gravitation, is built

Chapter 6 was prepared in pass 27, and its six sections were built in one
wave by six agents. This pass is the chapter pass over them: the wants of
the six plans, the cross-section checks, one reading of every page and
every `figures.js`, and the full checks. An earlier run of this pass was
interrupted just before its corrected `book-rows.json` was merged, and the
merge it had staged stands, so this entry covers both halves of the work.

What stands. Six section pages and the introduction page, 35 figure rows
over them: 24 sims, of which 19 transform a book figure and 5 are Sims of
OmniStax's own, 6 kept photographs, and 5 faithful copies that serve the
questions and problems of 6.3. Every one of the book's numbers, Figure 6.1
to Figure 6.28, is carried by exactly one row, and three folds do the work
of six drawings: the turning disc with its two pits is Figure 6.3 + 6.4,
the merry-go-round seen from the ground and from the boards is Figure
6.13 + 6.15, and the spring and neap tides are Figure 6.21 + 6.22. 57
exercises, two of them set inline, since the chapter prints no Check Your
Understanding box anywhere; the rest sit with the problem set. Two items
cross sections with `source_section`, and both sections' `exercise_notes`
say so each time.

What the chapter pass wrote. The 82 anchors the six plans asked for, on
every one of the 48 variable rows and 34 equation rows of `chapter.json`,
each naming a span or an example of its own section's `text.html`. A
variable row for `f_fric`, the friction that is the whole centripetal
force on a level curve, which 6.3 writes as $\kff$ where the book writes
$f$ and which the chapter sheet had no row for. A glossary row for
**uniform circular motion** under 6.1: the chapter introduction defines
the term, no section's own glossary carried it, and 6.1 states it in its
summary and introduces the concept, so the definitions view now finds it.
At book level, 39 concepts with 82 edges, and 13 symbols. Two of those
symbol keys read oddly on purpose and stand: the radius of curvature is
`r_curv` with the macro `\kr`, because Chapter 5 holds an untyped `r`, and
the two orbital periods are `T_orb1` and `T_orb2` with `\kTorbone` and
`\kTorbtwo`, because Chapter 4 holds `T_1` and `T_2` as tensions. The name
of `keplers-third-law` had been written with Chapter 4's two tensions,
which are forces, so the concept map printed the law's two periods in the
force hue; it now reads $\kTorbone^2/\kTorbtwo^2 = \krone^3/\krtwo^3$ and
the periods are in the time hue, as the section's own equation has them.

What the reading decided. Two placements were left open by the plans and
rule 12 settled both. 6.2's problem on the distance Earth has travelled
since its birth is tagged with arc length and rotation angle and worked
from $\Delta s = r\,\Delta\theta$, all of which 6.1 introduces, so it is
set on 6.1's page as `p-earth-orbit` with `source_section: "6.2"`. 6.3's
conceptual question on why you feel thrown away from the centre stays
where it is: it is answered from Newton's first law and the inward push of
the seat, both of which the reader has in 6.3, and 6.4's fictitious force
is a second way of saying the same thing rather than what the question
needs. Two figures went out. The leaning bicycle and the teardrop loop are
drawn for problems 6 and 9, and both problems are unkeyed and left out, so
neither picture had a question left to show; rule 14 keeps a figure of that
kind because it shows the reader exactly what a problem is about, and that
reason had gone. The block that gathers them now counts five pictures, and
their two images are out of `media/ch06/`. Two more decisions were put and
answered: a worked solution that the CNXML carries inside an XML comment is
not the book's key, because the book does not print it, so 6.5's three
unkeyed AP items stay open items with their AI-marked approaches; and the
inertial frame stays Chapter 4's node, defined in 4.5, which 6.4
reinforces rather than redefines.

What the reading found. `sim-radius` listed `angular-rate` in its `draws`
and binds no angular velocity anywhere on the page, so the type is out of
the row and the figure colours only what it draws. Six section files had
picked up British spellings in sentences OmniStax wrote — "centre",
"metre", "travelling", "coloured" — where the book is American throughout
and Chapters 1 to 3 have none; they are swept, and the two places where
the word is the book's own, the alt text of the chapter opener and the
wording of the nail-and-string question, are left as the book has them.
No `[ref:`, `{term:` or `{eq:` marker was left in, no figure number in the
prose lacks a row, no `$` stands in prose where `&#36;` belongs, and the
word "demo" appears nowhere. Every `º` inside math had already gone to
`^\circ`; what is left of the character is in the units, which the sweep of
Chapter 4's pass is taking to `°`, and in prose the book itself prints that
way.

The checks. `npm run check:content`: 10 chapters, 62 sections, 11
introduction or summary pages, no errors. `npm test`: 361 tests, no
failures. `astro check`: 0 errors, 0 warnings. A build into this pass's own
outDir: 75 pages. A headless Playwright pass over all seven pages of the
chapter in light and dark: no console or page error, every image loading,
every `figure.sim` with its canvas, the transport on the sixteen figures that
run a cycle and on no other, and every inline card rendering. The pass
caught one error there: the two dropped figures were still registered in
6.3's `figures.js`, which threw on boot and left the centrifuge below them
unbuilt; the two blocks are out and the page is clean. The figures were
screenshotted at 1400 wide and no label collides.


### Pass 31 (2026-09-12): Chapter 9, Statics and Torque, is built

Chapter 9 was prepared and its six sections built in pass 27, and the
chapter pass over them was still owed. This is that pass: the wants of the
six plans, the cross-section checks, one reading of every page and every
`figures.js`, and the full checks.

What stands. Six section pages and the introduction page, with 29 figure
rows over them: 26 drawn figures, of which 19 transform a book figure, 6
are Sims of OmniStax's own and one is a faithful copy that serves an AP
item, and 3 kept photographs (the Kalbarri rocks that open the chapter, the
man balancing a toy doll, and the three people adjusting their stance).
Every one of the book's numbers, Figure 9.1 to Figure 9.28, is carried by
exactly one row, and four folds do the work of nine drawings: the hockey
stick pushed on one line and off it is Figure 9.4 + 9.5, the pencil on its
eraser upright and leaned twice is Figure 9.10 + 9.11 + 9.12, the pencil on
its point is Figure 9.13 + 9.14, and the pole vaulter's three holds of one
pole are Figure 9.18 + 9.19 + 9.20, each with the displacement on a slider.
Not one figure of the chapter calls `cycle()`: statics has no time in it,
every scene here either stands still or moves at constant velocity, and the
config said so before the sections were built. 51 exercises, 21 problems,
19 conceptual questions and 11 AP items, 14 of them carrying a figure of
the book's on their card and two set inline, since the chapter prints no
Check Your Understanding box anywhere. 154 coverage rows against the 32
concept nodes, 11 glossary terms, and one new type, `torque`, which keeps
its own hue although it shares a dimension with energy.

What the chapter pass wrote. The 75 anchors the six plans asked for, on
every one of the 52 variable rows and all 23 equation rows of
`chapter.json`, each one a span or an example of the section's own
`text.html`. One variable row that did not exist yet, 9.1's `v`, the
constant velocity of a body in dynamic equilibrium, because the section's
two dynamic figures draw the velocity arrow and its crate carries the speed
on a slider, so the page binds the type and the Definitions view should say
what the symbol means there. One symbol: 9.6 asked for the back muscles'
own perpendicular lever arm, which the book writes $r_{\text{b}\perp}$ in
the caption of Figure 9.26 and which two of the section's figures bracket;
the row is `r_bperp` with the type `position` and the macro `\krbperp`, and
`book-rows.json` now stages 27 symbols. Without it the one lever arm the
reader is asked to drag would have been the only one on the page in ink.

One convention was settled for the chapter. `eq-net-force-zero` was written
`\text{net}\;F = 0` with the ktex `\text{net}\;\kF = 0`, while 9.1's text
and its summary print the book's bold vector, `\text{net}\;\mathbf{F} = 0`.
The row now prints the bold and carries no ktex at all, which is what
Chapters 3 and 4 already do for `eq-commutative`, `eq-newton2` and the
rest: where the book sets a quantity in bold because it means the vector,
the row keeps the bold and takes no colour, since a `\k` macro colours the
magnitude and would say something the book does not. The components of
`eq-net-force-axes` are not bold in the book and keep their macros, so the
formula sheet and the text now agree symbol for symbol on both rows.

What the reading found. 9.2 closed on a block headed "The five forces of
the test prep item" whose first sentence began "One of the test prep items
applies five forces…". That is the page talking about its own apparatus
rather than about the physics, which rule 17 does not allow; the heading is
now "Five equal forces about one point" and the paragraph says what the
scene is and what decides the torque each force makes. The figure and the
item are untouched, and the book's own image still travels on the item's
card as well, as 4.7's rescue image does. 9.6's push-up problem kept the
book's four parts and the book's whole key but graded only two of them,
because parts (c) and (d) ask for the work done and the power output and
Chapter 7 was not built when 9.6 was; it is built now, so all four parts
are graded and (c) and (d) are tagged with 7.1's `calculate-work` and 7.7's
`calculate-power` at a weight of 2, the rest of the problem keeping the
section's own concepts. The ordinal `º` the converter carries out of the
CNXML was still standing in 38 places across four sections; every one of
them inside math is now `^\circ` and every one in prose, in a slider unit
or in a canvas label is the degree sign `°`. No dollar sign occurs anywhere
in the chapter, in prose or in an exercise string, so the rule pass 28
added to the book's rules had nothing to correct here.

Three figures were fixed after the screenshots, all of them in 9.6, and all
the same fault: `headline()` does not wrap, so a sentence wider than the
1400-unit canvas is cut off at both ends. The headlines of `sim-posture`,
`sim-lift` and `sim-lever-arm-trade` ran to 2,800, 3,060 and 2,550 units
where the widest one that fits measures about 2,400, and each is shorter
now without losing the live numbers it states. In `sim-lift` the arrow for
the muscle force crossed the label of the weight, which now takes the panel
background the other two force labels already had, and in `sim-posture` the
lever arm of the weight is a bracket one unit wide when the body stands
straight, drawn across the legs with "r⊥ = 0.000 m" on it, so at zero lean
that bracket and its drop lines are left out.

Left as it stands. The one media file of the chapter whose name carries a
space, `Figure 09_S3_03.jpg`, keeps the name the bundle gives it, as the
book's rules ask; it is referenced as `%20` and it loads. The crank's
mechanical advantage is printed as the book prints it, $r_{\text{i}}/r_0$
with the subscript that does not match its own diagram. The empty
`exercises_lead` in 9.1 is left as 7.5, 5.1 and 8.2 leave theirs.

Checks: `check:content` with 10 chapters, 62 sections and 11 introduction
pages and no errors; 361 unit tests; `astro check` clean; a build of 75
pages; and a headless pass over all seven pages of the chapter in light and
dark with no console error, no failed request, every image loading, every
`figure.sim` booting its canvas, no transport under any figure, and every
exercise card rendering.


### Pass 32 (2026-09-12): Chapter 4, Dynamics: Force and Newton's Laws of Motion, is built

Eight section pages and the chapter introduction. Twenty-seven interactive
figures, six of them Sims that replace nothing in the book and twenty-one
transforming a book figure, one of which folds Figures 4.16 and 4.17 into a
single tightrope scene that carries both numbers; one faithful copy, the
unnumbered rescue diagram of 4.7; and six photographs, the dolphin and the
Principia of the introduction, the Golden Gate Bridge of 4.5, and the LHC,
LISA and M87 of 4.8, each with the credit clause the bundle prints. Eighty-five
exercises, seven of them inline, three taken from another section with
`source_section`. Every figure the book numbers from 4.1 to 4.28 is accounted
for, and the ten worked examples run 4.1 to 4.10 in the book's order, with 4.6,
the problem-solving strategy, carrying none of its own, as the book has it.

What the chapter pass wrote. The 76 anchors the eight plans asked for, on all
53 variable rows and all 23 equation rows of `chapter.json`, each one a span or
an example of its own section's `text.html`. Six symbol rows the sections had
asked for and had been writing in plain ink LaTeX for want of a row: `F_hand`
for the hand under the bag of dog food in 4.5, `F_netpar` for the net force
along the slope that Example 4.5 writes six times, and `T_1x`, `T_1y`, `T_2x`
and `T_2y` for the components of the two tensions in the axis equations of 4.7.
`book-rows.json` now stages 31 symbols, and the text of 4.5 and 4.7 uses the
macros in ten places that stood in ink before.

Two conventions were settled. The `ktex` of `eq-newton2-a` is dropped: it set
`\mathbf{a} = \frac{\kFnet}{m}`, a bold ink vector beside a coloured symbol,
which is two conventions in one line. The vector forms of the second law now
stand on the formula sheet in the book's own bold, and `eq-newton2-mag`, the
magnitude form, is the one that carries the macros — the same rule Chapters 3
and 9 settled on for `eq-commutative` and `eq-net-force-zero`. And the ordinal
`º` the converter carries out of the CNXML is gone from the chapter: no
occurrence stood inside math, so all twenty-one of them — three unit strings,
three captions, a hint, a solution, three pieces of evidence and ten slider
units and axis labels — are now the degree sign `°`. The same ordinal was
standing in the `unit` of a variable row in every chapter from 3 to 9,
nineteen rows in all, and those unit strings are now `°` as well; nothing else
in those chapters was touched.

What the reading found. The book's own glossary definition of `friction` reads
"a force past each other of objects that are touching", which drops the words
that make it a definition; the book's summary of the same section prints them,
and the row is now that sentence, "a force that opposes the motion past each
other of objects that are touching". Four headings stood in the book's title
case rather than the book's voice and are now sentence case. The force the
person exerts on the scale in 4.7 stood in ink beside a coloured $\kFs$ and is
now `\kF_{\text{p}}`, as 4.4 writes the forces the book names in words. The one
formula in the prose of 4.8, the weight at Earth's surface, is set in plain ink
$w = mg$: the page's figures draw force and nothing else, so a coloured $w$
beside an ink $g$ would have said two things at once. `sim-tightrope` listed
`acceleration` in its `draws` and colours no such thing; the row is corrected,
and the page still binds the type, because the skier, the incline and the rope
all draw it.

Canvas labels were made to agree with each other. Half the chapter wrote a
subscript with an underscore, `T_L` and `F_hand`, as 16.3 does; the other half
wrote it with a space, `F net` and `F prof`, or ran it together, `Fapp` and
`Fnet`, so that a subscript read as a second word. Every one-word subscript is
now the underscore form, and the unicode subscripts of 4.7's `T₁ₓ` are left as
they are, since they read better still.

Four fixes came out of the screenshots. In 4.5's skier the label of the
parallel component of the weight sat at the midpoint of the shortest of five
arrows leaving one point and was crossed by two of them; it is set beyond its
own arrow now. In 4.3's sled the slider labelled "rockets burning" left its
track no width at 1400 and is "rockets", its aria label unchanged, and the
annotation on the proportional line has moved off the data. 4.5's one panel
title in title case reads like the other panels of the chapter.

Left as it stands. The book's own typographical slips in the running text, the
missing "is" in "the tension in the roped related to the weight" in 4.5 and the
solution to part (c) printed inside the statement of Example 4.5, are the book's
and stay. `friction` stays at 4.3 and `drag-force` at 4.7, where the book
introduces them and not where Chapter 5 reinforces them; `inertial-frame` stays
at 4.5. Table 4.1 stays in the text as the book prints it. 4.7's AP item on a
block sliding on a surface of known coefficient of friction is still left out
and named, since the quantity belongs to a chapter that was not built when the
item was read. The four forces 4.4 names in words get no symbol rows of their
own: they are written `\kF` with the book's subscript and already wear the
force hue.

Checks: `check:content` with 10 chapters, 62 sections and 11 introduction
pages and no errors; 361 unit tests; `astro check` clean with one pre-existing
hint; a build of 75 pages; and a headless pass over all nine pages of the
chapter in light and dark with no console error, no failed request, every image
loading, every `figure.sim` booting its canvas, a transport under each of the
eleven moving figures and under none of the seventeen still ones, every eyebrow
reading what its row says, and every inline exercise host filled.


### Pass 33 (2026-09-12): Chapter 8, Linear Momentum and Collisions, is built

Chapter 8's seven sections and its introduction were written in pass 27, in
one wave of parallel agents that were not allowed to touch `book.json` or
`chapter.json`, and pass 27 was stopped before the chapter pass over them
could run. This is that pass: the wants of the seven plans, the
cross-section checks, one reading of every page and every `figures.js`, and
the full checks.

What stands. Eight pages and 23 figure rows over them: 18 sims, of which 9
transform a book figure and 9 are Sims of OmniStax's own, 2 kept photographs
(the rugby players of the introduction and the space shuttle of 8.7) and 3
faithful copies that serve the test prep items, the two force-against-time
graphs of 8.2 and the position-against-time graph of two carts in 8.3. Every
one of the book's numbers, Figure 8.1 to Figure 8.13, is carried by exactly
one row, and one fold does the work of three: the inelastic collision of two
equal masses, the pair sticking together and the carts with the compressed
spring are Figure 8.7 + 8.8 + 8.9, with the two masses, the two velocities
and the coefficient of restitution on sliders. 106 exercises, 52 of them AP
test prep, 5 set inline, and 295 concept tags over them. Twelve items cross
sections: nine of 8.4's AP items turn on an inelastic collision and are set
in 8.5, three of 8.5's turn on an elastic one and are set in 8.4, and both
sections' `exercise_notes` name every one of them by its source id. Reading
the whole chapter's exercises by source id found 106 distinct items and no
item kept twice.

What the chapter pass wrote. The 121 anchors the seven plans asked for, on
every variable row and every equation row of `chapter.json`, each one a span
or an example of its own section's `text.html`. Three variable rows the plans
asked for: `v` in 8.2, which the impulse sim carries on a slider and states
in its readout; `p_tot` and `KE_intprime` in 8.4, which the elastic-collision
sim draws and states, so that everything the figure names now has a meaning
in the Definitions view. One symbol, `v_cm`, type velocity, macro `\kvcm`:
8.3's centre-of-mass sim divides the total momentum by the total mass and had
been writing the result as plain LaTeX, in ink beside the `\kptot` it came
from; `book-rows.json` now stages 34 symbols. Two wants were declined and the
reason written into the plan under the same heading. 8.4 asked for a row for
the momentum form of the collision equation, and the chapter already carries
it: `eq-p-pair-conserved` of 8.3, where the two-car derivation reaches it, so
a second row would print the same line twice on the formula sheet. 8.6 asked,
optionally, for eight velocity-component symbols; they would colour four
lines of a derivation whose results the section does not keep as rows, and
rule 7 asks that a page colour what it binds.

What the reading found. Two inline cards had nowhere to render: 8.3's `cq2`
is placed after the span `conservation` and 8.5's `cq1` after `inelastic`,
and neither `text.html` carried the `<div class="exercises" data-place="…">`
that 8.1, 8.2 and 8.4 carry, so both cards were laid out into nothing. Both
hosts are in, and all five inline cards now render. Two captions pointed at
themselves: Figure 8.2 said its force was drawn "as in Figure 8.2" and Figure
8.6 that its objects collided "as in Figure 8.6", and the build links a
figure number in prose, so each was a link to the figure the reader was
already looking at. Both clauses are gone.

The book labels 21 of the chapter's exercises "Professional Application", and
the seven sections had written it four different ways: as a `tag` (8.1 and
8.4), in bold at the head of the prompt (8.2 and 8.5), in italics (8.6), as
"Professional Application:" in plain text (8.3), and not at all (8.7, which
dropped all six of its own). The `tag` is right—it is what 16.1 and 16.3 do
with "Engineering Application" and what the field is for—so all 21 now carry
it as a `tag` and no prompt begins with the label. The introduction's
photograph is the only image of the bundle whose file name carries a space,
`Figure 09_00_01.jpg`, written `%20` in the `src`; the copy in `media/ch08/`
is renamed with an underscore, as Chapter 4 renamed its own, and the image
loads. The masculine ordinal the CNXML writes for degrees stood in 27 places
in the chapter: 24 in the slider units, arc labels, an axis label and
headlines of 8.2, 8.3 and 8.6's `figures.js`, two in the angle units of
8.6's answers, and one in the condition of `eq-impulse-at-angle`. None of them was inside math, where the ordinal has no KaTeX
metrics, so all of them are now the degree sign, which is what Chapters 4, 9
and 16 write. No exercise `prompt` or `solution` of the chapter carries a
dollar sign at all, neither `&#36;` nor `\$`, so the fullwidth rule had
nothing to correct here.

Four figure faults went with them, all found by a sweep that wrapped
`fillText` and reported any label drawn outside the canvas while every slider
was driven to both of its ends. 8.6's billiards sim printed a headline that
ran off both edges at its default state, and both of its branches now stop
where the readout takes over. In the same section's Figure 8.10 the label of
the negative bar of the momentum along y was drawn on top of the row's name
"after", because the bar is always the same length; the names moved left. In
8.3's scatter sim the target's label overran the right edge when a light
target was thrown far, and read "1 electron masses" at the bottom of its
slider; the label is held on the canvas and the singular is right. In 8.5's
collision sim two objects given the same velocity never meet and drifted off
the left of the track, taking their labels with them; they are held on it
now.

Left as it stands. `config.md` said the rocket's free-body diagram would be a
still picture; `sim-rocket` burns the fuel away over a finite loop and
carries the transport, and 8.7's plan argues that correctly under rule 14, so
the config line is corrected to say what was built rather than the figure
changed. A `cite` must name an id of the section the exercise is set in, so
only 8.3's two centre-of-mass items cite the sentence that the total momentum
is the momentum of the centre of mass; the six like them in 8.4, 8.5, 8.6 and
8.7 name it in their suggested approaches instead, and all eight are tagged
with 6.5's `center-of-mass`. The book prints `"thrust.”` in 8.7 with one
straight quotation mark and one curly, and it is printed as printed.

Checks: `check:content` with 10 chapters, 62 sections and 11 introduction
pages and no errors; 361 unit tests; `astro check` clean; a build of 75
pages; and a headless pass over all eight pages of the chapter in light and
dark with no console error, every image loading, every `figure.sim` booting
its canvas, a transport under each of the fourteen moving figures and none
under any of the seven still ones, every eyebrow reading what its row says,
all five inline cards rendering in their hosts, and no label drawn outside
any canvas at any position of any slider.

### Pass 34 (2026-09-12): the figure audit, every built chapter

Every interactive figure of the ten built chapters was read against the root
rules as revised through item 28, and the faults were fixed in one pass, chapter
by chapter. The faults that recurred were of a few kinds. Axes and scene scales
that followed the sliders, so that a slider changed the tick labels and nothing
drawn, are fixed once per figure from the slider maxima or from the book's
default state, with a comment stating the range and `pinned()` past the edge.
Bars and arrows normalised to their own totals are on fixed caps. Headlines,
toplines and readout lines that were middle-dot or semicolon chains are single
capitalised sentences, captions no longer cite their own number, and the
spelling is the book's American one. Discrete states that sat on sliders are
choices, and the book's own values (Earth and Moon, the material tables) are
detents. Bodies and regions that carried a type hue as a tint are in ink or
`PAL.soft`. Folds carry every folded caption, prefixed by its number. Entity
labels beyond six, or riding moving things, sit behind a Labels button with
hover names. Two library changes serve every chapter: `text()` draws the part
after an underscore as a subscript, and `ctl()` can disable a slider a held law
has taken over. Nineteen figures had a physics fault and each was corrected as
the audit said (the loop's outward normal force, the tides' Sun inside the
Moon's orbit, the crank's swapped radii, the pulley's unconnected rope, the
torque with the wrong sign, the marble that slid rather than rolled). The
Cavendish balance of 6.5 is remounted on `F.view3d` with snap views, a bounded
orbit and a stated time compression, and the book's rules now name it as the
one apparatus in root rule 28.3's group. Plans were rewritten to what is built
and 2.5, which had none, has one.

Checks: `check:content` clean for both books; 399 unit tests; a build of 99
pages of both books; a headless pass over all 96 section and introduction
pages with the sliders driven to both ends, no console error, every image
loading, every `figure.sim` with its canvas, 137 transports on the moving
figures only, every eyebrow reading Sim or Figure, and no label drawn outside
any canvas. The chapter notes follow.

#### Log note: College Physics 2e, Chapters 1 to 3, figure-audit pass (2026-09-12)

The audit of 2026-09-12 found the same handful of faults running through
every chapter, so this pass worked through Chapters 1, 2 and 3 section by
section, taking the patterns of Part A and the per-figure rows of Part B
together.

Across all three chapters the scales were fixed. Every axis, strip, road,
number line and scene scale that used to follow the sliders now takes a
range chosen once, from the slider maxima where they leave the default
state readable and from the default state where they do not, and each one
says so in a comment. A value that runs past the end of a scale is drawn
against that end and the headline names the true number rather than the
scale stretching to follow it. Where no fixed range could hold both the
default and the extremes, the slider range itself was cut instead: the
subway journey of 2.4, the two rocks of 2.7 and the tangent of 2.8 all
have narrower sliders now, and none of them loses a number the book uses.

Every headline, topline and readout small line in the three chapters is
one or two capitalised sentences. The middle-dot joins are gone, the
semicolon chains are broken into sentences, and the colon-led fragments
are rewritten. The captions no longer cite their own figure number, and
the phrases "the book's" and "as in the passage above" are out of the
prose.

##### Chapter 1

1.1. The planetary model no longer says that a helium nucleus is made of
two protons; it says the nucleus holds them, since the section has not
reached neutrons. The readout, which used to be a constant, now writes
the live count of electrons and protons and the shells that hold them.

1.2. The road from school to home runs a fixed 0 to 40 km with the house
at the end of the trip, so a 2 km errand and a 40 km drive are no longer
drawn the same length, and the velocity arrow takes a fixed length per
kilometre per hour.

1.3. The bull's-eye carries both original captions, written as "(Figure
1.23) … (Figure 1.24) …", so the reader who swaps in the book's images
reads the caption of each. The percent-uncertainty line is fixed at 0 to
11 lb, and the four weekly weights of the example are drawn only while
the average is at 5.1 lb, since away from that they are no longer the
readings of that example. The ruler's smallest division is a choice of
1 cm, 1 mm and 0.1 mm rather than a three-state slider with hand-written
value text, and the American spellings replace the British ones.

1.4. The building is drawn at a scale fixed from the tallest the sliders
allow, and the pile of banknotes on the football field is measured
against a fixed 0 to 40 ft scale, with a taller pile drawn against the
top of it and said to run past. The two sliders of the trillion-dollar
estimate are named for what they set, an amount in trillions of dollars
and the thickness of one stack in inches.

##### Chapter 2

2.1. Displacement is a difference between two positions and has no time
in it, so the figure is still now and carries no transport. A choice of
who moves, the professor against her whiteboard or the passenger against
the cabin of his airplane, sets the book's numbers and draws the right
frame, which is what the fold of 2.3 and 2.4 had promised and not
delivered; both original captions are carried. The book's two "(See
Figure …)" sentences are back in the prose, where they link to the
figure. The map of four paths that serves the problems is a faithful copy
again: all four are drawn at once, with no cycle and no transport, so a
problem about path C can be read without waiting.

2.2. The coordinate figure is still, since which direction is called
positive is a choice and has no time in it, and the pair of axes the book
draws under this number now stands under the two coordinate lines with
+x, −x, +y and −y marked. The small line no longer claims that changing
the positive direction changes the sign of all three numbers, which is
false at the default origin where the starting position is zero.

2.3. The stopwatches all take one turn of the hand over the interval they
time. The interval figure lost its whole-trip slider, which only
restretched the same curve, and keeps the book's 5.0 s. The three graphs
of the round trip gained the third slider the errand beside them already
had, how far back toward home the car drives, so they no longer answer
the same two questions as the figure a paragraph above.

2.4. The four cars write v = v₀ + at with the live numbers for each of
them instead of a static table of signs, and the eight letters that rode
their arrows are behind a Labels button, off by default, with the name of
each car under the pointer. On the bend the average acceleration is drawn
along Δv, which is what this section defines it to be; the centripetal
size, which belongs to Chapter 6, is no longer used. The shaded area
under the acceleration-time curves is gone, since the book does not reach
that result until it works with the equations of motion. The subway
readout carries its conversion factors, so kilometres per hour over
seconds really does come out in metres per second squared, and the train
sprite faces the way it is going.

2.5. The section had no plan file; one is written now, recording what
stands on the page. Figure 2.25 is the jogger's own sketch, so it is
folded into the jogger figure and the notation figure is a Sim. The
airplane stops when its velocity reaches zero and holds there rather than
rolling backwards down the runway, and the headline follows the sign of
the acceleration instead of always saying the arrow shrinks. The braking
bars are both in the position hue, the reaction distance outlined and the
braking distance filled, since both are distances; the two cars are drawn
as cars; and the readout gives the reaction distance and the two totals.
The root before the motion began is a crossed marker rather than a hollow
one, since a hollow marker means an initial value everywhere else on the
page. The photograph of the Space Shuttle, Figure 2.29, is kept beside
the Making Connections note that is about it, with its caption and
credit; the dragster photograph, 2.30, is dropped, and the plan says why.

2.6. The two notes on the velocity graph no longer overprint at short
times, and the caption no longer talks about the passage above it.

2.7. The feather in air settles to a terminal speed and drifts at it
instead of lagging by a fixed share of the drop whatever the gravity, and
both panels say what holds it back and what does not. The acceleration
due to gravity settles on the Moon's 1.67 and Earth's 9.80 on every
slider that carries it. The rock thrown up starts at 1 m/s rather than
zero, so its highest point is never its starting point. The marks the
rock thrown up leaves are spaced so that at most eight are drawn, and
their times are behind a Labels button with the time under the pointer.
The equation written in the corner of the velocity-height graph names
three types at once and is in ink. The falling-ball sliders are coarse
enough to drag and settle on the measurement the example reports. The
speed of sound is no longer a slider, since no value of it moved the
drawing, and the sound's leg of the height-time trace is in the position
hue, dashed, like the fall it follows.

2.8. The jet car's position graph is fixed at 0 to 3800 m, so the
steepness the caption promises now changes with the average velocity, and
the three stacked graphs take ranges fixed from the slider maxima. The
sliders of the top-velocity figure are capped where the plan capped them,
since past 55 s the curve draws nothing new.

##### Chapter 3

3.1. The three sides of the walk carry the letters a, b and c that the
readout uses, so the Pythagorean theorem can be followed on the drawing.

3.2. The order of addition is a dropdown of the six arrangements rather
than a slider reading 1 to 6, each leg is named once on the chosen order,
and the scale is fixed so that the walk never leaves the canvas. The
sailing figure takes a fixed scale too, and its small line explains that
its numbers are computed from the two legs while the example measures its
own drawing with a ruler and a protractor. The map of paths is headed by
what it shows rather than by which problems refer to it.

3.3. The names A, B and R ride the arrows, and at equal angles the three
arrows lie along one line, so those labels go through the drawing layer's
labeller, which steps one out and leaders it when the slot beside its
arrow is taken.

3.4. Within six degrees of 45° the three trajectories share almost one
highest point, so only the chosen angle is named there.

3.5. The width of the river is no longer stated as a fact the example
does not give; it starts at an assumed 25 m and is the reader's to set.
The mast height and the drop height are bound as positions, as the
heights of a drop are in 3.1 and 3.4, and the tower height of 3.4 with
them.

Each chapter's `config.md` gained the rows the audit asked for, on depth,
on fixed scales, on discrete states, on labels and on which photographs
are kept, so that the settings agree with what stands on the pages.

#### Log note: College Physics 2e, Chapters 4 and 5, figure-audit fixes

Written for LOG.md. One block per section, in the book's LOG voice.

##### Chapter 4, section 4.1

The two labels that sit beyond the head of an arrow are now clamped inside the
canvas, so the total force of the three skaters no longer runs off the right
edge when both pushes are set to 80 N, and the total force and the two pushes
carry on the drawing the subscripts the caption uses, which the drawing layer
now renders from a plain underscore. In the spring that is the standard of
force, the standard stretch and the standard force are set in the position and
force hues as decorated variants of those types rather than left in ink beside
their colored neighbors, and the small line says what the relaxed length does
and does not change: it moves where the spring ends, while the reading counts
stretches of one centimeter past that length, so the same stretch always gives
the same reading. Both headlines are one capitalized sentence.

##### Chapter 4, section 4.3

Every scene of the section now has a scale of its own that never moves. The
wagon rolls on ground ruled 0 to 14 m, the lawn mower on 0 to 12 m and the
rocket sled on 0 to 100 m, each with a meter scale under the strip, so a larger
net force really does carry the body farther instead of every run filling the
same span; a run that passes the end holds the body at the last mark and the
headline gives the distance it has really covered. The arrow labels flip back to
the tails of their arrows late in a run, where they used to leave the canvas.
The net force, which is a force, is drawn in the force hue and no longer in the
acceleration hue, and is told from the other forces by the row it stands on
alone beneath the free-body diagram.

How many of the four rockets are burning is a count, so it is a row of buttons
and not a slider. Figure 4.6 now draws the book's part (c), the two identical
one-arrow free-body diagrams that make the basketball and the SUV comparable,
and its two markers go through `pinned()`, so a mass so large or a push so small
that the point falls below the floor of the graph is pinned at that edge with
its value rather than drawn outside the frame. The weight sim's mass runs 0.1 to
2.0 kg with a detent at the 1.0 kg the passage works with, which lets its weight
axis stand fixed at 0 to 24 N and hold every setting instead of clipping
everything above 1.2 kg, and its gravity slider is ticked at the Moon's 1.625
and Earth's 9.80 m/s², the two the section names. The three long headlines wrap
through `topline()`, and all five are capitalized sentences.

##### Chapter 4, section 4.4

The swimmer's pool is ruled 0 to 5 m from the wall at a fixed scale with a meter
scale along it, and her speed is named over the middle of its arrow so that a
hard push no longer carries the words off the left edge; the slider that sets
how long her feet stay on the wall is labeled Δt, since it is the length of the
push and not the clock the headline reads. The rocket's flight is ruled 0 to
80 m from the point of release, and its exhaust plume is drawn in ink: the gas is
a body, and a body never takes a type hue. The professor's cart carried seven
force labels on a scene that crosses the room, two of them sharing an origin at
her hand, so they are now behind a Labels button that is off on load, every
arrow gives its name under the pointer, and the two free-body diagrams below
carry every value as before. The three headlines are sentences and wrap when
they are long.

##### Chapter 4, section 4.5

The skier's loop has no length at all when the friction holds her where she is,
so the transport has nothing to play through and the figure no longer runs a
four-second loop in which nothing moves. The rope's gravity slider steps by
0.005 m/s² and is ticked at the Moon's 1.625 and Earth's 9.80, which it now
lands on exactly; the two sit so far apart that a thumb settling on the nearer
of them would swallow most of the slider, so the ticks mark them and nothing is
snapped. The corner of the cable stops at 60° and the load hangs a clear length
of cable below the second pulley at every angle, so the pulley no longer comes
down onto the load it carries, and a note names the finger tendon and the
bicycle brake cable the book draws under this number and which the scene stands
for. Every headline of the section is a capitalized sentence.

##### Chapter 4, section 4.6

The state the figure is about, the axes turned to lie along the slope, moves
with the slope itself and so cannot be a fixed tick on the track; the axes now
settle onto the slope when the thumb is let go within a degree of it, which is
what a soft detent does for a preset that stands still. The headline is a
sentence.

##### Chapter 4, section 4.7

The bracket that takes the net force out of the applied force on the barge is
drawn in the force hue, since it measures a force, and is told from the drag
beside it by the row it stands on. The lift now draws both of the book's parts:
the person alone is ringed in a dashed boundary on the scene as the system of
interest, and a free-body diagram panel beside the shaft carries the two forces
that are left on him, his weight and the push of the scale. In the rescue
figure the note on the left rope and the name of the burning building are moved
clear of the ropes, so no line is crossed by a word. Every headline of the
section is a capitalized sentence.

##### Chapter 4, section 4.8

Which two of the four basic forces are being compared is a choice among named
states, so force A and force B are two rows of buttons carrying the names, and
the ladder names each force once. In the field figure the two positions of the
test charge are bound as positions and their distances colored, and the force
and the field are stated in the units the figure counts them in, since the
charges here carry no coulombs and the field no newtons per coulomb. The
separation slider of the exchange figure changed nothing the reader could read
off the figure and is gone; the pair stands at the six meters the scene needs.
All three headlines are sentences.

##### Chapter 5, section 5.1

The coefficients that decide whether the crate holds or slides, 0.45 and 0.30,
are the ones the section's own passage gives for this crate on this concrete
floor, and they are now named on the drawing and carried in the readout, so the
branch is never decided by a number the reader cannot see. The breakaway graph
is fixed at 0 to 800 N on both axes, which is the range the crate the figure
opens with works in, rather than at the 3,200 N the sliders can reach; the lines
are clipped to the frame, the live point goes through `pinned()`, a note says
where the break falls when it lies past the right edge, and the arrows on the
scene are drawn against the same 800 N cap. The floor is ruled 0 to 7 m at a
fixed scale. No pair of surfaces slides against more friction than it holds
with, so the coefficient of kinetic friction is never taken larger than the
coefficient of static friction, and the readout says so when the slider is set
past it.

The skier starts from rest only where the slope will accelerate her: where the
friction balances the weight along the slope she is already gliding, at the
2.0 m/s the constant-velocity case is about, and where the friction is the
larger she slides to a stop rather than traveling down at a rate nothing
accounts for. Her five value labels no longer ride her down the slope: the
arrows on the scene give their names under the pointer, and the free-body
diagram beside the slope carries all five forces with their values, which is
where the reader now reads them. In the probe figure the number of atoms of the
tip that adhere follows the normal force one at a time rather than in three
steps, and the headline and the small line say that the lean is drawn in
proportion to the friction and is not a measured angle. The lead to the block of
ice names Problem 18, the one problem of the section that refers to the figure.

##### Chapter 5, section 5.2

The body in the drag figure is now the one its drag coefficient belongs to — a
skydiver, a sphere, a circular flat plate, an airfoil, a bicycle or a road
vehicle — so a skydiver is no longer drawn as a car, and the coefficient slider
is ticked at every value Table 5.2 prints, each of which the hundredth it steps
by lands on exactly. Stokes' law asks that the fluid move smoothly round the
bead, which it does while the Reynolds number is about one or less; the curve is
now greyed past the radius at which that number reaches one, that radius is
marked, and the headline and the small line say that the law no longer holds
there and give the Reynolds number the setting reaches. Every headline of the
section is a capitalized sentence.

##### Chapter 5, section 5.3

The three regions of the deformation graph are banded in ink rather than in the
position and force hues, since a region is not a quantity, and the spring is
drawn against the same fixed 0 to 4 m its graph is ruled to, so a stiffer spring
is drawn stretching less instead of filling the same span at every setting. The
guitar strings stretch at a fixed seven thousand units per meter, whatever the
original length is set to, where the drawing used to rescale itself so that the
length changed nothing. Young's modulus, the shear modulus and the bulk modulus
each carry a tick at every value Table 5.3 prints, two of them named on each
track; naming more crowded the labels into each other. The four marks on the
shear curve the drawing leaves unnamed give their names under the pointer.

In the tendon the body is drawn in ink and the regions of the graph banded in
ink, the tangent follows the slope down through zero in the failure region
rather than lying flat where the curve falls, and the word stress in the readout
is set in the stress hue. Every headline of the section is a capitalized
sentence.

##### Wanted at book level

`stress` has a type in `book.json` and the figures of 5.3 bind it, but the book
gives the quantity no letter of its own and there is no `symbols` row for it, so
the readout of Figure 5.15 writes the word through `\htmlClass{kv-stress}`
rather than through a `\k` macro. A `symbols` row for stress, with the word as
its LaTeX and no macro of its own, would let the readout and any later page
write it the way every other bound quantity is written. The same holds for
strain, which stays untyped and in ink and wants no row.

#### College Physics 2e, Chapter 6: the figure-audit pass

Written for LOG.md. One paragraph per section, plus the two entries the pass
left at chapter and book level.

##### 6.1 Rotation Angle and Angular Velocity

The inner pit of Figure 6.3 + 6.4 was set by a slider in centimeters that the
code then clamped below the outer radius, so over most of its travel the number
the reader set was not the number the drawing used. The slider now carries the
inner pit as a fraction of the outer one, from a tenth to nine tenths, and
nothing has to be clamped. In `sim-omega` the number of revolutions to run was a
count on a slider, which rule 26.1 makes a row of buttons, so it is one now, and
the count stops at three while the angular velocity starts at 2 rad/s, which is
what it takes for the longest run the two controls allow to fit inside axes that
never move: the time axis is fixed at 0 to 10 s and the angle axis at 0 to
20 rad. All four headlines of the section are single sentences.

##### 6.2 Centripetal Acceleration

Figure 6.7 drew the change of velocity from the middle of the arc, where it
points exactly at the center at every separation, so the caption's promise that
it swings round onto the radius as the separation shrinks was never kept. The
difference is now drawn where the object actually is, beside the radius drawn
there, so it stands at half of the separation angle from that radius and swings
onto it as the angle is taken toward zero, which is the section's own argument
that the acceleration is centripetal. The arrow is the change of velocity and
carries the velocity hue, so the figure no longer draws an acceleration and its
`draws` row says so; the centripetal acceleration itself belongs to Figure 6.8,
which draws it. The three headlines of the section are sentences.

##### 6.3 Centripetal Force

A track can push a car but it can never pull one, and below the critical speed
`sim-loop` kept the car glued to the loop and drew the normal force pointing
outward, which is not a thing that happens. The force is now clamped at zero:
the stretch of the loop the car cannot keep contact along is drawn broken, no
normal force is drawn there, the graph flattens on the axis rather than dipping
below it, and the headline and the readout say from what angle the car would
have left the track and how fast it would have to travel to hold the loop all
the way round. The four headlines are sentences. The plan listed the leaning
bicycle and the teardrop loop as built, though the chapter pass struck both when
the problems they serve turned out to have no keyed answer and were left out;
the plan now records that, and names the five exercise figures that were built.

##### 6.4 Fictitious Forces and Non-inertial Frames

The spiral in `sim-cyclone` was drawn from a pitch angle capped at eighty
degrees, so every system larger than about a thousand kilometers drew the same
picture and the radius slider stopped saying anything. Each track is now a
logarithmic spiral whose whole sweep about the low is the angle Earth turns the
parcel through on the way in, so a two-thousand-kilometer system draws twice as
many turns as a thousand-kilometer one; four complete turns is as tight a spiral
as the drawing can hold, and past that the headline says the drawing has stopped
following. The inside of the tube in Figure 6.14 was tinted in the force hue,
which rule 7 keeps off bodies, so it is filled in the page's soft grey and the
hue stays on the two arrows. All four headlines are sentences, and the note
under each hemisphere is a sentence as well.

##### 6.5 Newton's Universal Law of Gravitation

Four things were put right here. The two sliders of Figure 6.19 ran linearly
from a hundredth of an Earth mass to three hundred and twenty of them, so the
Moon, Earth and twice Earth all crowded into the first tenth of the track and
none of them could be reached; both sliders now carry the power of ten of the
ratio, with soft detents on the Moon, on Earth, on twice Earth and on Jupiter,
and the headline and the readout write the mass and the radius themselves. In
the tides of Figure 6.21 + 6.22 the Sun stood inside the Moon's orbit, which is
four hundred times too close: it is now drawn at the edge of the picture along
its true direction, on a line with a break cut out of it, with a note saying
that this one distance is not to scale. The readout of the same figure gave
three accelerations while the arrows above it were forces, so it now writes the
force the Moon exerts on a parcel of water of mass 1.00 kg at the near side, at
Earth's center and at the far side, which is the quantity the arrows draw.

The Cavendish balance of Figure 6.25 was a scene of its own making, with a
hand-rolled drag, no zoom and no way to ask for a viewpoint, ten labels of which
half rode the turning rod, a clock reading the loop's own seconds as though they
were the balance's, and its ink, its scale and its sky written as hex literals.
It is now mounted on the app's viewer, so it carries the same chrome every other
three-dimensional figure of the collection carries: three snap-to-view buttons
for the side the book draws the balance from, a look from above and a look along
the scale, and zoom on the wheel and on two buttons. There is no auto-rotate
button, because a balance standing in a room with a lamp and a scale has a front
and an idle spin would say nothing about it. The orbit is bounded to the pitches
between eight and seventy degrees above the floor, so the bench is never seen
from beneath, and to the yaws within ninety-two degrees of the side the book
draws, which keeps the reader in front of the apparatus where the lamp, the
mirror and the scale all show at once. The labels are tiered as rule 26.7 asks:
only the distance between the centers and the force across it, the two
quantities the readout writes, stay on the drawing, the names of the parts sit
behind a Labels button that is off to begin with, and the pointer names any part
it rests on. The scale now takes the page's grey and the ticks its ink, so both
follow a change of theme, while the wood, the brass, the lead, the lamp's warm
light, the mirror's glass and the grey room the metal reflects keep the colors
those things have. The clock reads the true time at last: the balance swings
freely once in seven minutes, so one drawn swing is that seven minutes, the
scene runs the motion a hundred and seventy-five times faster than life, and the
readout states that factor beside the factor by which the twist is drawn larger
than life. The physics and the scale strip are untouched.

##### 6.6 Satellites and Kepler's Laws

The graph of Figure 6.27 measured the planet's speed against a level it called
the mean speed. That level is the speed a circular orbit of radius a would have,
which is not the mean of the speed over an ellipse; the mean has no elementary
form. The axis, the level and the headline now name the level for what it is,
2*pi*a/T, and the readout says where the planet passes through it. The four
headlines of the section are sentences.

##### At chapter level

The chapter's `config.md` said that no scene of the chapter is
three-dimensional. One is, and the row now records it with the bound on its
orbit, its buttons, its hover names and its Labels button, and with the flat
drawing that stands in where WebGL is missing.

##### At book level

The book's `RULES.md` said that the chapters built so far were planar and that
no 3D was needed. The Figures section now names the one exception and the group
it belongs to: root rule 28.3 asks for a full scene where the apparatus itself
is the explanation, and the Cavendish balance is this book's one member of that
group, its thin fiber, small rod, mirror and thrown beam being an arrangement in
space that a flat drawing would have to lie about. Everything else in the book
stays flat, or, where the book prints it in perspective, is drawn from a locked
view.

#### College Physics 2e, Chapter 7: the figure audit answered

A read-only audit of every built chapter found that a good many of this
chapter's figures rescaled themselves as their sliders moved, so that the
slider changed the tick labels and nothing drawn; that several bars were
measured against their own total, so that raising a force lengthened the bar
and the scale together and left the picture where it was; that the headlines
were chains of clauses joined with a middle dot rather than the sentences the
book writes; and that a few figures said something about the world that is not
so. This pass answers every one of those findings for Chapter 7, section by
section.

##### 7.1 Work: The Scientific Definition

The lawn mower of Figure 7.2 drew a force arrow sixty units long when the
force slider stood at zero, which told the reader that a force was there when
nobody was pushing; below 0.05 N the arrow, its component, its angle and their
labels are now all left out, and the scene says F = 0 N instead. Both
headlines are full sentences in the book's voice, and the small line under the
readout says in words what the force is doing to the mower rather than naming
a lettered part of a printed figure. The ladder of joules runs from a
hundredth of a joule, which is where it has always started, and its caption now
says so.

##### 7.2 Kinetic Energy and the Work-Energy Theorem

The strips under the varying force are labelled with a proper subscript, W_i
over its own d_i. On the roller belt, the applied-force arrow ran off the right
edge of the canvas at the end of every push, because it was drawn at a fixed
length to the newton with no regard for where the package had got to; both
horizontal arrows now share one length to the newton, fixed from the applied
force's own maximum, so that the longest arrow still stops short of the edge
wherever the package is. The graph of kinetic energy against speed was drawn
against an axis taken from the slider maxima, which left the book's own car —
900 kg at 27.8 m/s — filling a fifth of the box; the axis is fixed from that
default state instead, at 0 to 400 kJ, and a heavier or faster body runs off
the top, where the curve stops at the edge and the value is read off a pinned
marker. The two bars beside the curve are measured against the same fixed cap.

##### 7.3 Gravitational Potential Energy

The bar beside the cuckoo clock filled to whatever the sliders made of the
stored energy, so a heavier weight moved the numbers and not the picture; it
is now read against a fixed 39.2 J, the most the two sliders can store, with a
dashed rule across it for what the present winding will reach. The ladder's
zero-level slider reached a metre below the ground, where the line marking the
zero was drawn off the foot of the canvas, and it now stops at −0.4 m. In the
landing, the scene's scale is fixed at 42 units to the metre so that a person
at the top of the longest fall clears the headline band, and the knee-bend
slider carries soft detents at the two landings the section works out, 0.005 m
and 0.500 m, since the graph beside it is a ratio scale and all the interesting
ground lies at its left-hand end. The roller coaster's speed arrow is drawn
behind the car once the car is past the three-quarter mark, so neither the
arrow nor its label leaves the canvas on the last second of the descent. The
marble is a rolling body and not a sliding one, and the readout now says that
a real marble arrives about 15 percent slower than the square root of 2gh
gives; the equation on the page stays the section's own, because a rolling
body's share of its energy belongs to a later chapter.

##### 7.4 Conservative Forces and Potential Energy

Both spring figures were drawn against force axes taken from the slider
maxima, which left the worked example's own spring a sliver a tenth of the box
high. Both are fixed from that default state instead, at 0 to 25 N, with the
frame clipping what it holds and the force read off a pinned marker when a
stiffer spring runs past the top. The guitar string's force constant changed
nothing that could be seen: the string swung at the same rate whatever it was
set to. The rate a string comes back at goes by the square root of its force
constant, and the figure now draws it that way, five seconds to a swing at
800 N/m and sooner when the string is stiffer, with the readout saying both the
swing time and that a real string does this hundreds of times a second.

##### 7.5 Nonconservative Forces

The two erasure bars were each measured against the friction they were drawn
for, so raising the friction raised the scale with the bars; they now share one
fixed cap of 13.6 J. The spring the rock falls onto was tinted in the stiffness
hue, which put a type's colour on a body, and it is drawn in ink now, the hue
staying on the slider and in the readout; the two energy accounts beside the
scenes share one fixed outline of 147 J. The crate on the ramp climbed at a
steady pace even when nobody was pushing it. It now starts at 1.00 m/s and the
net force along the ramp decides the rest: while the push beats friction and
the pull of gravity the crate speeds up over the whole 4.00 m, and when it does
not it slows and stops where its kinetic energy runs out. The four work bars
beside the ramp are drawn on one fixed scale taken from the longest bar the
sliders allow. The sliding player's slope slider carries detents at the two
slopes the section works out, and the drawn track carries the same four metres
the graph does, so the scene no longer rescales with the slide. The cup's plot
is fixed from the default run at 0 to 50 cm rather than at 0 to 150 cm, where
the default occupied a fourteenth of the box, and the drawn table carries that
same half metre. The fold of Figures 7.16 and 7.17 now carries both of the
book's captions, one after the other, so that swapping the original in shows
each drawing under its own words.

##### 7.6 Conservation of Energy

The ladder of Table 7.1 and the chain of the devices of Table 7.2 were reached
by sliding an index over rows of a table, which is a discrete state on a
slider. Each is now a dropdown of the table's own entries by name, the devices
listed with their efficiencies, and the second device's list carries "nothing
further" at its head. The headlines of both, and of the climber's account and
of the car coasting to the gas station, are sentences.

##### 7.7 Power

The three headlines are sentences, and the month's bill no longer opens on a
day counted off with a middle dot.

##### 7.8 Work, Energy, and Power in Humans

The headlines of the food-energy account and of the day's budget are sentences,
and the oxygen is measured in liters, as the rest of the book measures it.

##### 7.9 World Energy Use

The chart of past and projected world energy use opened on 2020, so the
projection the section gives, 812 EJ in 2035, was not on the page when the
figure loaded; it opens on 2035 now, and the plan had said so all along. The
bars of each country's energy told six sources apart by six strengths of the
energy hue, which no reader could match to a key; the six carry no type and no
element of their own, so they now take the categorical palette, and the energy
hue stays on each country's total in exajoules. Two captions and one label said
where a number came from rather than what it is, and they say the number now.

##### Across the chapter

Every headline, topline, canvas note and readout line the chapter writes is a
capitalised full sentence in the book's voice, with no middle-dot joins, no
colon-led fragments and no clause citing the figure it is written on. Every
spelling OmniStax wrote is American: meter, center, liter, traveled, percent.
The `draws` column of every figure row was compared with the types its code
actually colours, and one row was corrected, the crate on the ramp, which now
draws a speed as well. Every figure line of every plan that this pass touched
was rewritten to what is built, with the fixed ranges, the controls, the 2D
term and the labels decision stated, and the chapter's `config.md` records the
new dropdowns and detents, the categorical palette in 7.9, and that every
figure line carries a 2D term because no scene in the chapter has depth in it.

#### Chapter 8, the figure-audit pass

Every figure of the chapter was read against the audit's cross-chapter
patterns and its own row, and the seven sections were corrected in one pass.
Three things were settled for the chapter as a whole. Every scale a figure
draws on is now fixed, stated in a comment beside it, and taken either from
the slider maxima or, where those maxima would leave the book's own state a
sliver, from that state with the extremes pinned; no arrow is normalised to
its own longest value any more, so a slider that changes a quantity changes
the length of the thing that stands for it. Every headline, canvas sentence
and readout line is one capitalised sentence in the book's voice, with the
middle dots and the semicolon chains gone. The chapter's British spellings
are gone with them: colour, centre, metre and per cent are now color, center,
meter and percent throughout the figures, the captions and the plans.

**8.1.** The caption of the momentum figure invites the reader to give the
football as much momentum as the player carries, which the sliders could not
reach, so the player's speed now runs down to a walk and the two momenta can
be made to match. Both bars beneath the lanes are drawn on fixed scales, 560
units at 40 m/s and 900 units at 2,250 kg·m/s, so the football's momentum
reads as the stub beside the player's that Example 8.1 says it is, rather
than as a bar that fills whatever room is left. In the tennis figure the
contact time ran to 40 ms on a graph only 10 ms wide, which took the labels
off the picture; the slider now stops at 10 ms with a detent at the 5.00 ms
of Example 8.2, and the momentum axis is fixed at 0 to 8 kg·m/s, which holds
the example comfortably and pins anything heavier or faster.

**8.2.** The change in momentum the wall gives the billiard ball points away
from the wall, which is the way its arrow was already drawn, and the label
now says so; the force on the wall is still drawn the other way. Every
momentum arrow in the section is on one fixed scale of 83 units per kg·m/s,
chosen so that the largest the sliders can make is the longest the canvas
holds, and nothing is capped. The passenger's momentum arrow and the force
the padding pushes back with are fixed in the same way, from 3,600 kg·m/s
and 180,000 N. The two force-against-time graphs the test prep items are set
on keep their bare "Figure" eyebrow, as the book numbers them not at all,
and their headlines are now sentences.

**8.3.** The caption said the bumpers touched for a tenth of a second where
the figure had them touching for a fifth, and the caption has been brought
to the figure. The bounce of the bumpers is now called $c$, the name the
same quantity carries in 8.5, with detents at 0 and 1. The road is a fixed
ninety-six meters with a scale along it, the farthest the lead car can be
down it after the four seconds of the pass, and the momentum arrows are on a
fixed scale, so both sliders now move something. The probe's sky is fixed at
eighty kilometers by thirty-four, so that a faster launch draws a longer arc
rather than the same arc over again. In the scattering figure the speed of
the electron changed nothing that was drawn, because the ground, the arrows
and the bars were all divided by it; all three are now on fixed scales, and a
faster electron starts further to the left, draws longer arrows and lengthens
every bar. The center of mass is spelled as the book spells it.

**8.4.** The numbers on the two colliding objects sat on the blocks; they now
sit beside them, under the surface, where nothing they cross can hide them.
The momentum arrows are on one fixed scale of 12.5 units per kg·m/s instead
of one that stretched to whichever momentum happened to be the largest. The
two-solutions figure keeps its fixed square of final velocities and loses the
colon from its headline.

**8.5.** The book draws this collision three times and the figure carried all
three, but only the puck and the goalie could be reached from the sliders. A
choice of the three book figures now stands at the head of the controls:
choosing one sets the five sliders to that figure's state and fixes both
graph ranges and both arrow scales from it, so Figure 8.7 is read on −3 to 3
kg·m/s and 5 J, Figure 8.8 on −5 to 15 and 120 J, and Figure 8.9, the two
carts of Example 8.6, on −2 to 2 and 8 J, where the spring adds energy rather
than taking it away. The coefficient $c$ has detents at 0, at 1 and at the
3.08 of Figure 8.9, and the swap shows all three book captions, one after
another, each behind its own number. Both time axes are drawn in the time
hue, which the figure's row now records. In the recoil figure the recoil
velocity of the worked example lay flat against the base line of a plain
scale, so the velocity axis is now in decades like the mass axis, and the
0.0748 m/s of the goalie sits where it can be read.

**8.6.** The speed of the incoming object changed nothing drawn, since every
arrow and every ledger bar was divided by it; all of them are now on fixed
scales. Momentum alone allows pairs of angles that would need energy from
somewhere, and the figure now says so under the scene, stating the internal
kinetic energy before the collision and after it and naming the shortfall
when there is one, which is why the figure's row gains the energy type. The
two momentum labels ride objects that move and crowded at small angles, so
they are behind a Labels button, off by default, with the kind named once
beside the scene and either object's name and momentum under the pointer. In
the billiards figure the energy per unit mass was written "18.0m J", which
reads as millijoules; it now reads plainly as joules for every kilogram of
ball, in the readout and in its small line alike.

**8.7.** The rocket's exhaust was drawn in the velocity hue, which is a body
wearing a type colour; it is ink now, and the hue stays on the exhaust
velocity arrow and its slider. The thrust and the weight are drawn on one
fixed scale, and the momentum bar on its own, so the free-body diagram no
longer rearranges itself as the sliders move.

**Chapter level.** The chapter's `config.md` now says which of the two routes
each exercise image took, since the book's rules settled the question in this
pass: the two force-against-time graphs of 8.2 and the cart graph of 8.3 are
`figure` rows with no number and the eyebrow "Figure", because the prose
beside them introduces the reading their items are set on, while the air-cart
graph of 8.4 and the massive cube of 8.6 travel on the exercise card's own
`figure` field, because each belongs to one item and has to stand on that card
alone. Every plan line of the chapter was rewritten to what is built.

#### College Physics 2e, Chapter 9: the figure audit fixed

A read-only audit of the built book found faults of three kinds in this
chapter — scales that followed their own sliders, discrete states put on
sliders, and headlines that were not sentences — together with a handful of
errors of physics and of the book's own wording. This pass fixes them in the
six sections, rewrites the plan line of every figure it touched to what now
stands, and records in `config.md` which of the two ways of carrying an
exercise image each section used.

**9.1 The First Condition for Equilibrium.** The columns that add the forces
with their signs were drawn to the largest force on show, so that loading the
person with a heavier pack lengthened no bar and changed only the printed
number; each column now runs to a height fixed from its own sliders, 1,600 N
for the person, 2,000 N and 15,680 N for the two axes of the car, and 400 N
and 1,470 N for the crate. The support of the road in Figure 9.3 was labelled
"N s" in the free-body diagram while the scene drew four arrows of a quarter
that size, so the diagram and the column now carry one normal force N, the
four tire arrows are named as a quarter of it each, and the readout says so.
Figures 9.4 and 9.5 are folded into one drawing and now carry both of the
book's captions, each behind its own number. The applied force is written
$F_\text{app}$ on the canvas now that the drawing layer sets subscripts, and
every headline and drawn sentence is one capitalised sentence.

**9.2 The Second Condition for Equilibrium.** The angle in Figure 9.6 ran to
360°, which contradicts the book's own definition of θ as the angle between
the force and the vector from the point of application to the pivot; it now
stops at 180°, and which side of the door the force is applied from — the
book's panel (a) against its panel (d) — is a choice of push or pull, since
that is a state and not a quantity. A pull carries its minus sign into the
equation itself. Figure 9.7 wrote a negative torque as the product of two
positive numbers; the minus sign of the counterclockwise-positive convention
is now written into the equation on both the readout and the panel beside the
stick, and the plan's default of 70° is settled at the built 110°, which is
the angle about pivot A that the book's own drawing shows. The seesaw and the
pivot sim set their subscripts properly, and every headline is a sentence.

**9.3 Stability.** The radius of the sphere in Figure 9.15 was a slider that
moved nothing the figure is about, since the center of gravity of a sphere of
any size lies straight above the point of support, and it is now fixed at
5 cm; the figure's `draws` row is corrected to the one type it colours. The
four torque graphs print a signed torque against an unsigned readout, so each
now carries a key under its lean axis saying which sign carries the body over
and which brings it back. The marble's surface keeps its slider and gains soft
detents on the three shapes the section names, a hill, a flat surface and a
bowl, and the angle its readout takes the sine of is drawn on the scene where
the ball meets the surface. Figures 9.10 to 9.12 and Figures 9.13 and 9.14 are
folds and now carry every one of the book's captions.

**9.4 Applications of Statics.** The pole vaulter's scene was fitted to
whatever the sliders put on the pole, so that moving the center of gravity
moved his hands; it is now drawn to a fixed scale from −0.50 m to 3.30 m,
which holds every position the sliders reach, and the hands stay where they
are. The force arrows and the torque bars were drawn to the largest value on
show and now run to fixed ends, 100 N and 60 N·m, with a line of type saying
so where a value passes them and the labels always giving the true numbers.
The readout of Figure 9.18 stated the first condition, which is not what the
figure is for; its main line is now the second condition taken about the left
hand, as the worked example takes it, and the first condition follows on the
small line. The three holds of the pole are a fold and now carry all three of
the book's captions.

**9.5 Simple Machines.** The five figures set their headlines with a helper of
their own that shrank the type to fit; they now use the library's `topline()`,
which breaks a long sentence over two lines, so that the chapter sets every
headline the same way, and all five are capitalised sentences. Every pair of
bars ran to whichever of the pair was larger, so that a slider changed only
the printed number; each pair now runs to an end fixed from the sliders. In
Figure 9.23 the two radii of the car axle were labelled the way round the
crank labels them, which contradicts the book's sentence that the axle drives
the wheel with its input at the smaller radius; panel (b) now names the small
circle $r_\text{i}$ and the large one $r_\text{o}$, and the mechanical
advantage of 0.083 reads off them. Figure 9.24 put the number of cables on a
slider, drew the single-cable case with its cord tied to the ceiling and
unconnected to the load, and turned the cord through a right angle with no
pulley at the corner; the count is now a choice of one, two, three or four,
and one continuous cord runs through the whole tackle, its legs a sheave's
diameter apart so that each is vertical and tangent to the sheave it runs
onto, with the movable and the fixed sheaves alternating and the dead end tied
to the ceiling when the count is even and to the movable block when it is odd.
At two cables the drawing is the book's own panel (a), and at one it is the
ordinary pulley of Figure 9.23(c).

**9.6 Forces and Torques in Muscles and Joints.** The lean of the upper body
stopped at 60°, which left the 0.350 m lever arm of Example 9.5 out of reach
with the center of gravity 0.400 m up the spine; it now runs to 65° and
carries detents on the upright position and on the 61° that gives the
example's lever arm, and the graph beside it is redrawn to 70° and 8,000 N so
that the whole of the new range is on it. The arrows of the forearm, of the
lift and the three bars that compare the weight supported with the forces in
the muscles and the vertebrae were all drawn to the largest force on show and
now run to fixed ends. Figure 9.25's headline was a chain joined by a middle
dot and is now a sentence; the readout of the lever-arm sim printed a fraction
with nothing above or below it at 90° and now states that $\Delta s$ and
$\Delta L$ are both zero, and its headline no longer tells the reader to look
below the picture. "Centimetres" is "centimeters" and "neighbour" is
"neighbor" throughout the chapter, in captions, in readouts and in one
suggested approach, which is the book's American spelling.

**At chapter level.** `config.md` had one row saying that every figure serving
an exercise was copied into the text as an unnumbered "Figure", which was true
of 9.2 alone: 9.3 and 9.6 leave theirs on the exercise cards, in the `figure`
field of the item that refers to them. The row now records both ways and says
which section used which, as the book's own rules now ask a chapter to do.

#### College Physics 2e, Chapter 16: the figure audit pass (2026-09-12)

Every figure of the chapter was measured against the audit of 2026-09-12 and
against rules 7, 14, 17, 24, 25, 26 and 28. The fault the chapter had in common
was that its axes and its scene scales were read off the sliders each time it
drew, so moving a slider changed the numbers printed along an axis and left the
picture where it was. Every range in the chapter is now fixed, taken from the
slider maxima where the book's own state still reads well there and from that
default state where it does not, stated in a comment beside it, and a value that
leaves the range is pinned at the edge of the graph with its number written
there. The chapter's headlines, which had been middle-dot and colon chains, are
full sentences in the book's voice, and the eight leads that cited their own
figure number no longer do.

16.1 Hooke's Law. The plucked ruler now holds at t = 0 when the reader has asked
for reduced motion, rather than at rest, so the pull, the bracket across it and
the restoring force are all in the still picture the reader is left with. The
spring scale fixes its stretch axis at 0 to 0.50 m and its force axis at 0 to
5 N, both of which the sliders reach but never pass, and draws a fixed 600 units
to the meter in the scene, so a stiffer spring visibly stretches less under the
same load instead of redrawing the same picture under new tick labels; its
canvas is taller to hold the longest stretch, and the load's mass is written
beside the block rather than across it. The stored-energy figure fixes its
deformation axis at 0 to 0.30 m and its force axis at 0 to 30 N, so the line's
slope and the shaded triangle under it now answer both sliders; a spring stiffer
than 100 N/m runs off the top of the scale and its live point is pinned at the
edge with its value. Both folded figures carry a caption for each original, the
ruler's two drawings under Figures 16.2 and 16.3 and the force-against-distance
graph and the toy gun under Figures 16.6 and 16.7, so showing the original no
longer puts two images under one caption.

16.2 Period and Frequency. The vibrating string shows a fixed eight seconds of
trace, which holds the widest counting window the slider reaches with three
seconds of run before it, so lengthening the period stretches the wave rather
than relabelling the ticks beneath it. The counting window itself is shaded in
ink with its edge in the time hue, since a region of a graph is not a typed
quantity. The stopwatch figure draws its time line from 0 to 30 s, the longest
run the elapsed-time slider allows, with the run drawn solid along it, so a
shorter run plainly reaches less far and leaves its marks closer together.

16.3 Simple Harmonic Motion. No block carries its mass written across its body
any longer: the label sits beside the block, and in the two-oscillator figure,
where each row is already named by its amplitude, it is dropped. The period
figure fixes its period axis at 0 to 3 s, which covers the heaviest car on the
softest suspension the sliders allow, so a stiffer suspension now flattens the
curve under the reader's hand. The paper strip runs in seconds rather than in
multiples of the period, a fixed six seconds of trace, which is two full waves
at the slowest setting and twelve at the fastest, so the period slider stretches
the wave instead of leaving every period looking alike. The three graphs of
position, velocity and acceleration show a fixed two seconds of history, about
three periods of the oscillator the book draws, with the position axis at the
amplitude slider's own range and the velocity and acceleration axes set from
that same default state, since the slider maxima would have flattened the book's
own curves to a line; a faster oscillator is drawn clipped with its live points
pinned at the edges. The paper strip's caption now carries both of its
originals, Figures 16.11 and 16.10.

16.4 The Simple Pendulum. Seven labels used to ride the bob and cross one
another as it swung, so under rule 26.7 they are off to begin with behind a
Labels button, and the name of everything drawn, the bob, the string, the arc,
the weight, its two components and the tension, is available under the pointer.
The tension is drawn in the force hue like every other force on the bob, and the
band marking the small angles is shaded in ink rather than in the position hue.
The graph of restoring force against arc length is fixed at plus and minus 2.4 m
and plus and minus 20 N, both read off the slider maxima, so the straight line
of Hooke's law and the true curve keep one frame to part company in as the swing
is widened. The two-pendulum figure fixes its period axis at 0 to 8 s, which
covers the longest pendulum under the weakest gravity the sliders allow, so
weakening gravity lifts the whole curve; its gravity slider carries soft detents
at the two values the section's problems name, 1.63 m/s² on the Moon and
9.80 m/s² on Earth. The figure that measures g draws its time line from 0 to
75 s, so a shorter pendulum plainly finishes its ten swings sooner.

16.5 Energy and the Simple Harmonic Oscillator. The two energy bars were
normalised to their own total, so the force constant and the amplitude changed
only the number printed under them. Both figures now share one fixed energy
scale, 0 to 1.00 J, and one fixed position scale, the amplitude slider's own
range, taken from the state the book draws, where half k X squared is 0.25 J,
since reading the scale off the slider maxima would have left the book's own
bars a sliver; a total above the top of the scale is drawn at the top with its
true value beside it. The maximum-speed figure fixes its velocity axis from that
same default state, so the ellipse changes shape at every setting instead of
looking the same at all of them. Neither the block nor the car body carries its
mass written across it. The two figures' `draws` rows are corrected to the types
the code actually colours: neither draws the angular rate, and the
maximum-speed figure draws no energy.

16.6 Uniform Circular Motion and Simple Harmonic Motion. The turntable's paper
runs down at a fixed rate in seconds rather than in units of the period, so it
always carries a little under four seconds of trace and a longer period plainly
stretches the wave out; its marks are seconds. The lamps above the turntable are
named, and the shadow the ball casts is drawn in ink rather than in the time
hue, since a beam of light is not a time. The similar-triangles figure draws its
circle at a fixed scale in centimeters, so the radius slider grows the circle all
the way along instead of stopping at a cap partway, and its velocity arrow is
drawn on one fixed scale set by the fastest the sliders allow rather than capped
at its own maximum. The turntable's caption carries both of its originals,
Figures 16.16 and 16.18.

Chapter level. The chapter's `config.md` promised that the two AP items of 16.3
that carry images would be copied faithfully as unnumbered exercise figures.
Both items are unkeyed in the source, so under rule 13 they were left out of the
page and their images with them, and the row is corrected to say so. The chapter
has no `figure` row without a number and no bare "Figure" eyebrow; the one book
image an exercise of this chapter refers to, the two skydivers beside problem 9
of 16.3, travels on that exercise card's own `figure` field, which is the second
of the two routes the book's `RULES.md` now records. Each section's `plan.md`
carries a dated note bringing its figure lines to what is built: the ranges now
fixed, the labels on or behind a button, and every figure of the chapter still
flat, with no 3D anywhere in it.


### Pass 35 (2026-09-14): Chapter 10, Rotational Motion and Angular Momentum, is built

Chapter 10 was prepared and its seven sections built in one wave on
2026-09-14, an earlier agent beginning every section and being cut off, and
a second finishing each where the first left it. This is the chapter pass
over them: the wants of the seven plans, the cross-section checks, one
reading of every page and every `figures.js`, and the full checks.

What stands. Seven section pages and the introduction page, with 31 figure
rows over them: 24 drawn figures, of which 21 transform a book figure and 3
are Sims of OmniStax's own (the bicycle wheel spun up and braked in 10.1,
the helicopter's two energies in 10.4, the skater's see-saw of bars in
10.5), and 7 kept photographs (the tornado and the spinning skater that open
the chapter, the worker at the grindstone, the flywheel bus, the rescue
helicopter, the skater's two poses, the bowling ball among the pins). One
fold does the work of two drawings, the point on a circle with its
tangential acceleration alone and then with the centripetal acceleration
beside it, Figure 10.4 + 10.5. This chapter numbers every figure, the ones
inside exercises too, so the numbers run 10.1 to 10.41: 29 on rows, 10 on
the cards of the exercises that refer to them (the four ways off a
merry-go-round on both of the questions that cite it), and two nowhere,
10.15 the motorcycle wheel and 10.36 the skater catching a ball, whose
problems are unkeyed and left out and whose sections' notes say so. Motion
was decided per figure and the chapter has clocks in it: 17 of the 24 drawn
figures call `cycle()` and carry the transport, the 7 that answer their
sliders alone do not, and the precessing gyroscope of 10.7 is the chapter's
one full 3D scene, argued in its plan against root rule 28.3 and mounted on
`F.view3d` with snap views, a bounded pitch and the spin drawn at a stated
fraction of its true rate. 91 exercises: 25 problems, 29 conceptual
questions, 30 AP items and the 7 Check Your Understanding boxes, one per
module and every one set inline where the book prints it; 13 exercises sit
with a section other than the one that printed them, each with
`source_section` and both sections' notes; 44 open items carry an AI-marked
suggested approach and 23 unkeyed problems are left out and named. 182
coverage rows against 33 concept nodes with 115 prerequisite edges, 12
glossary terms, 84 variable rows, 31 equation rows, and three new types,
`angular-acceleration`, `rotational-inertia` and `angular-momentum`, each
because the chapter's figures draw it.

What the chapter pass wrote. The 112 anchors the seven plans asked for, on
every variable and equation row of `chapter.json`, each a span or an example
of its section's own `text.html`, and two variable rows 10.4 wanted, `r_curv`
for the radius of the disk its two figures turn and `R` for the radius of
the rolling cylinder of Example 10.10, both anchored; no symbol row changed.
10.1's third problem, the grindstone slowed by an axe, finds its angular
acceleration through a torque and the moment of inertia of a disk, which
10.3 introduces, so it is set with 10.3 as `p12` with `source_section:
"10.1"`, its hints rewritten and both notes corrected. 10.6's first
conceptual question, the two collisions, was recorded as set with 10.7 and
was set nowhere, since 10.7 prints only the handlebar and the guidance
gyroscope; it is 10.6's own, and it now sits there before the hockey puck
with an AI-marked approach, and 10.6's notes name the handlebar as the one
question 10.7 takes. `ch10/COLOR.md`'s rows for 10.3, 10.4 and 10.6 are
widened to the types the pages draw, `config.md` carries a "What the build
changed" block and `exploration.md` says which five of 10.6's AP items went
to 10.5, which is what the tables held all along.

Two questions the plans left were settled. 10.7 asked whether its $r$, the
distance from the axis to the point of application, should be 9.2's
`r_lever` rather than `r_curv`; it keeps `r_curv`, because 10.3 and 10.6 use
that key for the same meaning and both keys print as $r$ in the position
hue, so the chapter is consistent with itself. 10.7 also asked for an anchor
on its glossary row, and the glossary table has no `anchor` field, so none
is written. Root rule 20's `weights_by` field is likewise not in the schema,
and the AI mark on the 80 weighted rows lives in each section's
`exercise_notes`, as every earlier chapter has it.

What the reading found. Every headline, topline and readout line is a full
sentence, no figure carries a hex colour, no still figure a cycle, no
discrete state a slider, and no ordinal `º` or bare dollar sign stands
anywhere in the chapter. Two leads, 10.2's and 10.3's, carried `$…$` math
with `\k` macros, and the app does not sweep the lead for math, so the raw
LaTeX printed under the title; both are rewritten in words, and the same
fault stands in the leads of 6.5 and 7.4 for a later pass or for the app.
The moment-of-inertia figure of 10.3 wrote its percentages with a space
before the sign, which the book does not, and does not now.

Checks: `check:content` with 13 chapters, 76 sections and 14 introduction
pages and no errors; 405 unit tests; `astro check` clean; a build of 93
pages; and a headless pass over all eight pages of the chapter in light and
dark with no console error, every image loading, every `figure.sim` booting
its canvas, the gyroscope's WebGL scene rendering, every eyebrow reading Sim
or its figure number, the transport on the 17 moving figures only, every
inline Check Your Understanding host rendering its card, and every
end-of-section card rendering, the moved grindstone and the two-collisions
question among them.


### Pass 36 (2026-09-14): Chapter 12, Fluid Dynamics and Its Biological and Medical Applications, is built

Chapter 12 was prepared and its seven sections built in one wave on
2026-09-14, one agent to a section, with Chapter 11 built beside it in the
same checkout. This is the chapter pass over them: the wants of the seven
plans, the cross-section checks, one reading of every page and every
`figures.js`, and the full checks.

What stands. Seven section pages and the introduction page, with 26 figure
rows over them: 24 drawn figures, of which 21 transform a book figure and 3
are Sims of OmniStax's own (the vessel that divides into branches in 12.1,
the three terms of Bernoulli's equation as bars in 12.2, the pump's three
powers in 12.3), and 2 kept photographs (the firefighters that open the
chapter, the smoke that first turns turbulent). Nothing folds: the book's
own pairs and triples, the two tubes and the Prandtl tube, the three
sphere panels, the wing and the sail, are one number each with one image
or two. The chapter numbers its exercise figures too, so the numbers run
12.1 to 12.29: 26 on rows and 6 on the cards of the exercises that refer
to them, the Huka Falls, the Venturi, the perfume bottle, the leaking boot,
the air tube beside the faucet and the sink-drain insert, with no number
left nowhere. Motion was decided per figure, and the chapter is almost
still: 3 of the 24 drawn figures call `cycle()`, the plaque-narrowed artery
whose dye threads break into eddies in 12.5, the wake behind a ball in
12.6, and the random walk of 12.7, whose circle grows as the square root of
the time; the other 21 answer their sliders and carry no transport, and no
figure is a 3D scene, since every flow of the chapter is clearest in
section. 76 exercises: 33 problems, 33 conceptual questions and 10 AP items,
no Check Your Understanding box anywhere in the chapter and so nothing
inline; one problem sits with a section other than the one that printed it,
the steel ball falling through motor oil, set in 12.6 with `source_section`
12.4 and both sections' notes; 38 open items carry an AI-marked suggested
approach and 33 unkeyed problems are left out and named, among them the two
that would have travelled to 12.6 with the ball. 144 coverage rows against
44 concept nodes with 115 prerequisite edges, 22 glossary terms, 71
variable rows, 26 equation rows, two book tables rebuilt by hand (the
coefficients of viscosity, irregular, with its two footnotes on blood; the
diffusion constants), and two new types, `flow-rate` and `viscosity`, each
because the chapter's figures draw it, its sliders carry it and its
readouts state it; pressure and density are Chapter 11's and are used by
name.

What the chapter pass wrote. The 97 anchors the seven plans asked for, on
every variable and equation row of `chapter.json`, each a span of its
section's own `text.html`. One symbol row, `L_len`, LaTeX $L$, untyped and
without a macro, for the plate separation of 12.4 and the characteristic
length of 12.6, because the only `L` in the book was Chapter 10's angular
momentum with the macro `\kL` and the two variables rows named it; both
rows point at `L_len` now, neither page ever wrote `\kL`, and `config.md`,
which had called `L` Chapter 11's row, is corrected. The evidence of
`lift-from-bernoulli` cited the aircraft-wing problem, which is 12.3's; it
names 12.2's figure, its two conceptual questions and its sail problem
instead, through `book-rows.json` and `ost merge`. Two pages had linked a
worked example on another page by hand, 12.2 to Example 12.2 and 12.5 to
Example 12.8, and no other page of the book does: both are plain text now,
the app linking figure numbers and same-page examples as it always has, and
`config.md` records the decision for the chapter. 12.4's notes said three
problems were set in 12.6 when one was and two were left out; they say so.
`config.md` no longer calls Figure 12.12 dropped, since 12.3 built the fire
hose on its ladder with the book's drawing as the original, and it carries
a "What the build changed" block. `exploration.md` gathers the chapter's
four errata, all kept as printed: 12.1's Example 12.3 with $\bar{v}_1$ on
both sides of the branching equation, 12.2's AP item that asks about a lake
its stem never introduces, 12.3's AP key of 12 m/s where the item's numbers
reach about 19, and 12.6's stray `1.00` beside the viscosity of air, which
the prep pass had proposed dropping and the section kept.

Two things are left for Fable. The section builders report that with
twenty-two types declared the scheme lays position, pressure, density and
energy in four magentas that are hard to tell apart, which bites where a
pressure bar stands beside two energy bars and a height bracket, and that
surface tension in Chapter 11 comes out pale; no hue was invented here, the
Bernoulli figures part their segments with an ink rule and label every
value beside the bar, and the note stands in `config.md`. Root rule 20's
`weights_by` field is not in the schema, so no row writes it and the AI mark
on the 71 weighted rows lives in each section's `exercise_notes`, as every
earlier chapter has it.

What the reading found. Every headline, topline and readout line is a full
sentence, no figure carries a hex colour, no still figure a cycle, no
discrete state a slider, no page the word demo, and no ordinal `º` or bare
dollar sign stands anywhere in the chapter. Two captions spoke of the book
where the page should speak of the subject, the circulation's "the
pressures the book gives them" and the wake's "where the book gives a law
for it", and both say the thing itself now. Table 12.1's header wrote
$\eta$ without its macro on a page that binds viscosity, and writes
`\keta`. The branching vessel of 12.1 opened on four branches of 5.0 mm,
whose total cross-section equals the vessel's own, so the page opened on a
headline saying nothing had changed; it opens on six. Four slider lines of
12.4's plan were brought to the ranges the figures were built with.

Checks: `check:content` with 13 chapters, 85 sections and 14 introduction
pages and no errors; 405 unit tests; `astro check` clean; a build of 101
pages; and a headless pass over all eight pages of the chapter in light and
dark with no console error, every image loading, every `figure.sim` booting
its canvas, every eyebrow reading Sim or its figure number, the transport on
the 3 moving figures only, both book tables standing, and every
end-of-section card rendering, the 76 of them with the six exercise images
on their cards and the falling steel ball among 12.6's.


### Pass 37 (2026-09-14): Chapter 11, Fluid Statics, is built

Chapter 11 was prepared and its nine sections built in one wave on
2026-09-14, one agent to a section, and this is the chapter pass over them:
the wants of the nine plans, the cross-section checks, one reading of every
page and every `figures.js`, and the full checks.

What stands. Nine section pages and the introduction page, with 41 figure
rows over them: 33 drawn figures, of which 26 transform a book figure and 7
are Sims of OmniStax's own (Table 11.1 on one density axis and the reservoir
behind the dam in 11.2, the small piston pushed down in 11.5, the block with
two density sliders in 11.7, and the pressures of the body on one axis, the
column of blood in a standing person and the force on the back of the eye in
11.9), and 8 kept photographs, every one of them pointed at by the text.
Two folds do the work of four drawings, the cylinder with its two forces and
the fluid that replaces it (Figure 11.18 + 11.19) and the capillary tube
with its liquids, angles and radii (Figure 11.31 + 11.32), so the numbers
run 11.1 to 11.36 without a gap, and the five tables of the book stay in the
text as tables. Fluid statics has almost no clock in it and the chapter is
almost entirely still: 30 of the 33 drawn figures answer their sliders and
carry no transport, and the three that move have a genuine time in them, the
atoms of the four phases in 11.1, the small balloon emptying into the large
one in 11.8 and the breath in 11.9. Where the book prints a tank, a dam, a
cylinder or a piston in perspective the figure uses a locked view, and no
scene turns. 92 exercises: 48 problems, 39 conceptual questions and 5 AP
items; 4 conceptual questions sit inline as short checks on the passage
they follow, the chapter having no Check Your Understanding box; 7
exercises sit with a section other than the one that printed them, each
with `source_section` and both sections' notes; 43 open items carry an
AI-marked suggested approach and 39 unkeyed problems are left out and named.
175 coverage rows against 46 concept nodes with 117 prerequisite edges, 19
glossary terms, 56 variable rows, 34 equation rows, and three new types,
`pressure`, `density` and `surface-tension`, each because the chapter's
figures draw it and its readouts state it, each kept apart from the type
whose dimension it shares (`stress`, `stiffness`) as rule 7 asks.

What the chapter pass wrote. The 90 anchors the nine plans asked for, on
every variable and equation row of `chapter.json`, each a span of its
section's own `text.html`; the chapter had none, since the validator refuses
an anchor into an unbuilt section. One variable row, `11.8/l`, for the
half-length of the sliding wire, on the untyped symbol `l` that Chapter 12
staged for the length of a tube, as `A`, `h` and `r` are shared; the
equation keeps its plain `2l` and no symbol row was changed. 11.2's inline
question had no host in its `text.html`, so the card never rendered; the
host closes the `identify` span now and the card renders. The eight moves of
the config were checked in both directions: every receiving and giving
section's `exercise_notes` names its item, and 11.9's two notes, which had
counted the −25 atm device among the problems set with 11.8, now say it is
unkeyed and left out of both, which is what 11.8's notes said all along.
`ch11/COLOR.md` is brought into line with the pages: its row for 11.6 is
widened to `force`, which the aneroid gauge draws; its paragraph that put an
arrow field in the pressure hue on Figure 11.18 now names the figures that
do draw one (the tire, the swimmer, the tank and the hydraulic cylinders)
and says the cylinder of 11.7 draws three forces; and its families paragraph
says where `F.el` (11.1 alone) and `F.cat` (11.2's density axis, the three
linings of Figure 11.29) are actually used. `config.md`'s cross-reference
line said the built chapters were linked, and no page of the book links a
cross reference, so it says plain text now; the config carries a "What the
build changed" block for the rest, chief among them that 11.1's Figure 11.2
moves where the Motion line had foreseen no motion for that section.

Three questions the plans left were settled. The discussion of Example 11.8
prints the steel's weight as $m_{\text{s}}w$, a slip for $m_{\text{s}}g$ in
the book itself; the page keeps the book's printing, in ink, with nothing
said, as Pass 32 kept Chapter 4's slips. The key to 11.9's spinal manometer
problem prints part (a) as "13.6 m water" where the problem asks for cm of
water and 10.0 mm Hg is 13.6 cm of water; the card writes centimeters with
the book's number and `exercise_notes` says so. Root rule 20's `weights_by`
field is not in the schema, so the AI mark on the 88 weighted rows lives in
each section's `exercise_notes`, as every earlier chapter has it.

What the reading found. Every headline, topline and readout line is a full
sentence, no still figure carries a cycle, no discrete state sits on a
slider, no ordinal `º`, bare dollar sign or leftover marker stands anywhere
in the chapter, and the only hexes in the figures are the physical fact of
rule 7's third family, mercury's silver, the pale blue of a colourless
liquid and the two reds of blood. Four sentences OmniStax had written spoke
of the book rather than the subject, the first sentence of Figure 11.2's
caption, the last of Figure 11.31 + 11.32's, the representative-values
sentence of Figure 11.29's caption and readout, and the range clause of the
body-pressures Sim's caption, and each is reworded. 11.7's plan said its
cylinder's depth slider ran to 0.80 m in a tank 1.00 m deep; the figure runs
to 0.35 m in a tank 0.60 m deep, and the plan says so now. Every figure's
`draws` row matches the hues its code names or its readout states.

Two things are left for Fable and Chen, since a chapter may not invent a
hue (root rule 22): the scheme gives `pressure` a hue very close to `force`
in both themes, and five sections draw the two side by side; and
`surface-tension` is a pale yellow that is nearly illegible on the light
theme, where 11.8 puts it on two sliders and in every readout. One thing is
left for the app: a concept chip on an exercise card whose concept belongs
to the book but is not reachable from the chapter's own concepts through the
prerequisite edges (11.2's Hooke's law, 11.5's second condition for
equilibrium and mechanical advantage) opens no hover card, because the
chapter's `concepts.json` does not carry it and the practice catalog has not
loaded that chapter; every other chip of the chapter opens its card.

Checks: `check:content` with 13 chapters, 84 sections and 14 introduction
pages and no errors; 405 unit tests; `astro check` clean; a build of 101
pages; and a headless pass over all ten pages of the chapter in light and
dark with no console error, every image loading, every `figure.sim` booting
its canvas, every eyebrow reading Sim or its figure number, the transport on
the three moving figures only, every inline host rendering its card, 11.2's
among them, every book table standing, and the hover card opened on all 46
of the chapter's concepts, 43 from the chips of their exercise cards and 3
from the concept map, each rendering its `why` and `evidence` with no KaTeX
error and no raw `\text` or `\times` left in it.


### Pass 38 (2026-09-14): Chapter 13, Temperature, Kinetic Theory, and the Gas Laws, is built

Chapter 13 was prepared and its six sections built in one wave on
2026-09-14, one agent to a section, with Chapters 14 and 15 built beside it
in the same checkout. This is the chapter pass over them: the wants of the
six plans, the cross-section checks, one reading of every page and every
`figures.js`, and the full checks.

What stands. Six section pages and the introduction page, with 34 figure
rows over them: 25 drawn figures, of which 18 transform a book figure and 7
are Sims of OmniStax's own (the two blocks and the plate of 13.1, the
expanding span, the spilling tank and the sealed tank of 13.2, the escape
graph of 13.4, the two gases sharing a box of 13.5, the humidity curve of
13.6), and 9 kept photographs, the two of the introduction, the four
thermometers of 13.1, the expansion joint and the pothole of 13.2 and the
lunar rover of 13.4. Two figures fold, as `config.md` foresaw: the molecule
at the wall and the box it lives in are one moving scene, "Figure 13.21 +
13.22", and the distribution at one temperature and at two are one graph,
"Figure 13.24 + 13.25". The numbers run 13.1 to 13.33 with three dropped
photographs named in the sections' notes (the fuel gauge, the balloon, the
dew) and one exercise figure, 13.16, on the card of the box that refers to
it; the three unnumbered exercise images travel on their cards the same
way. Motion was decided per figure: 5 of the 25 drawn figures call
`cycle()`, the blocks and the plate coming to one temperature, the tire
whose gauge reads the strikes on its wall, the box whose bar meters the
momentum the wall receives, the liquid and its vapor trading molecules at
equal rates, and the container that is sealed at the start of its loop;
the other 20 answer their sliders and carry no transport, and no figure is
a 3D scene, since every scene of the chapter is a box, a strip, a graph or
a plane. Every molecule drawn anywhere wears the element palette, the
first use of `F.el` in this book, and no body wears a tint for its
temperature. 76 exercises: 37 problems, 22 conceptual questions, 8 AP items
and 9 Check Your Understanding boxes, every box keyed and set inline after
the passage it tests, 13.3's third moved up from after the strategy to the
opening passage it tests; seven problems the book prints at the end of 13.6
range over the chapter, five are set in the sections that introduce what
they test with `source_section` 13.6 and the two unkeyed ones in neither,
and every section's notes say so; 26 open items carry an AI-marked
suggested approach and 35 unkeyed problems are left out and named. 154
coverage rows against 47 concept nodes with 106 prerequisite edges, 33
glossary terms, 61 variable rows, 32 equation rows, five book tables
rebuilt by hand (the conversions, the expansion coefficients with their
three group rows and footnote, the critical points and the triple points
with their two-row headers, the saturation vapor density with its 100 °C
row bold) and two more in exercise prompts, and one new type,
`temperature`, because every figure of the chapter carries it on a slider
and states it in a readout and Chapters 14 and 15 draw it again; its symbol
rows stand beside the taken `T`, `k`, `R`, `N` and `α` with LaTeX of their
own and no macro of Chapter 16's, 4's, 3's or 10's borrowed.

What the chapter pass wrote. The 93 anchors the six plans asked for, on
every variable and equation row of `chapter.json`, each a span of its
section's own `text.html`; the chapter had none, since the validator
refuses an anchor into an unbuilt section. Four evidence rows of 13.2,
through `book-rows.json` and `ost merge`: the worked examples take the
publisher's numbers 13.3, 13.4 and 13.5, since 13.1 prints two, and the
Hong Kong parcel's row says that the tape expanded on a warm day reads the
parcel about ＄17,000 smaller, which is what the key's decrease means.
13.6's `exercise_notes` names each item that left it by its id and the
section it is set in. The `draws` row of Figure 13.12 claimed `position`
and its code names only `temperature`, which is what its plan line says;
the row is narrowed. `ch13/COLOR.md`'s paragraph on what each page binds is
brought into line with the pages: 13.1 binds time on its one moving graph
and 13.2 density on Figure 13.13, while 13.4 does not bind time and 13.5
does not bind density. The book's `COLOR.md` table, which stopped at
Chapter 10, gains the seven types declared since, pressure, density,
surface tension, flow rate, viscosity, entropy and temperature, in the
shape of its existing rows; nothing else in that file was touched, and its
sentence that the element palette does not arise in the book is now untrue
and is left for a book-level pass. `config.md` carries a "What the build
changed" block, chief among its lines that 13.1's blocks-and-plate Sim
moves where the Motion line had foreseen no fourth moving figure, and that
the app prints a graded choice's option strings raw, so 13.4 writes its
subscripts as Unicode. `exploration.md`'s errata gain the caption of
Figure 13.13, which puts the density of water at 4 °C 0.0075% above that
at 2 °C where the figure's own numbers give about 0.003%; the original
caption keeps the book's number and the page's own caption and readout
carry the true ones. The key to 13.5's diver problem, 2.12 × 10⁴ Pa, is
20.9% of 1.013 × 10⁵ Pa where the prompt states 1.01 × 10⁵ N/m²; both pass
the card's tolerance and the section's notes say so.

Three things are left for Fable. No equation row of this chapter carries a
`ktex`, although every chapter from 2 to 16 does; 13.2's plan asked for one
on its five rows and the pass wrote none, because a `ktex` on one section's
rows would colour one page of the formula sheet and not the chapter's, and
whether the chapter's thirty-two rows get one is a decision for the whole
chapter. With twenty-four types declared the scheme gives `pressure` a pale
yellow on the light theme that is nearly illegible on an axis title, a
gauge, a slider and a readout, though it reads well on the dark theme, and
it gives `temperature` and `elastic-modulus` violets that cannot be told
apart where 13.2's sealed tank puts them on neighbouring sliders; no hue
was invented (root rules 7 and 22), every figure labels its values in
words beside the colour, and the scheme is left to the app. Root rule 20's
`weights_by` field is not in the schema, so no row writes it and the AI
mark on the 60 weighted rows lives in each section's `exercise_notes`, as
every earlier chapter has it. A glossary row carries no anchor, so 13.4's
wish for one on "thermal energy" is recorded in its plan and not applied.

What the reading found. Every headline, topline and readout line is a full
sentence, no figure carries a hex colour, no still figure a cycle, no
discrete state a slider (the thirteen solids, six liquids, eight and seven
substances and the gases are dropdowns or segmented choices), no page the
word demo, and no ordinal `º` or bare dollar sign stands anywhere in the
chapter; the one dollar amount of the chapter is the fullwidth ＄ in 13.2's
exercise strings. Two captions of 13.4 opened on a fragment, the
distribution's "The Maxwell-Boltzmann distribution … drawn at two
temperatures" and the escape Sim's "The rms speed … against temperature",
and both are sentences now. Figure 13.28's caption named the set isotherm
"the colored curve", which says nothing with colour off; it names it by
its weight and its label. Every figure's `draws` row matches the hues its
code names or its readout states.

Checks: `check:content` with 16 chapters, 99 sections and 17 introduction
pages and no errors; 405 unit tests; `astro check` clean; a build of 118
pages; and a headless pass over all seven pages of the chapter in light and
dark with no console error, every image loading, every `figure.sim` booting
its canvas, every eyebrow reading Sim or its figure number, the transport
on the 5 moving figures only, all five book tables standing, every inline
host rendering its card, 13.2's with Figure 13.16 on it, every
end-of-section card rendering, the 67 of them with the piston, the
two-temperature graph and the carbon dioxide diagram on their cards, and
the hover card opened from the chips of every exercise on 46 of the
chapter's 47 concepts (absolute zero has no exercise of its own, as its
plan says), each rendering its `why` and `evidence` with no KaTeX error
and no raw macro left in it.


### Pass 39 (2026-09-14): Chapter 15, Thermodynamics, is built

Chapter 15 was prepared and its seven sections built in one wave on
2026-09-14, one agent to a section, and this is the chapter pass over them:
the wants of the seven plans, the cross-section checks, one reading of every
page and every `figures.js`, and the full checks.

What stands. Seven section pages and the introduction page, with 38 figure
rows over them: 33 drawn figures, of which 26 transform 28 book figures (two
folds, the isobaric cylinder with its graph as Figure 15.9 + 15.10 and the
two Otto cycles as Figure 15.18 + 15.19), 5 are Sims of OmniStax's own (the
four simple processes of Table 15.2 from one state in 15.2, the Carnot
efficiency drawn against the hot reservoir temperature in 15.4, the two
coefficients of performance as bars in 15.5, and the coins tossed onto a
histogram and the change in entropy between two macrostates in 15.7), and 2
are faithful copies of the unnumbered loops and parallelogram that 15.2's
exercises read; and 5 kept photographs, every one pointed at by the text or
by a question. The numbers run 15.1 to 15.38 with no gap but the five
splash photographs dropped, and the book's five tables stay in the text as
tables, Table 15.5 beside the problem that points at it. Eight of the drawn
figures have a clock in them and move: the piston of 15.8, the rectangle
walked round in 15.12, the three one-way processes of 15.15, the four
strokes of 15.17, the Otto cycle, the Carnot cycle, the coin tosses, and
the gas dispersing from its corner in 15.38 while its entropy is counted
live; the other 25 answer their sliders, register no cycle and carry no
transport. Every kind of process, every direction of a cycle and every
engine against heat pump is a choice, never a slider. 85 exercises: 32
problems, every one keyed, 37 conceptual questions and 16 AP items, of
which 8 are keyed choices and 8 open; 45 open items carry an AI-marked
suggested approach, 32 unkeyed problems are left out and named, 15.1's
refrigerator item is set in 15.5 with `source_section`, 15.2's unkeyed
engine that needs 15.4 is left out of both and both notes say so, and the
bricks question the book prints in 15.6 and again in 15.7 is kept in both,
each note naming the other. The chapter has no Check Your Understanding
box, so nothing sits inline. 220 coverage rows against 53 concept nodes
with 165 prerequisite edges, 24 glossary terms, 92 variable rows, 31
equation rows, 44 symbol rows, and one new type, `entropy` (J/K), because
15.6's and 15.7's figures draw it as bars, their sliders change it and
their readouts state it, and it is neither the energy nor the temperature
it is the quotient of (rule 7).

What the chapter pass wrote. The 121 anchors the seven plans asked for, on
every variable and equation row of `chapter.json`, each a span of its
section's own `text.html`; the chapter had none, since the validator
refuses an anchor into an unbuilt section. Two variable rows 15.6 asked
for, `T_hprime` and `T_cprime` on its `unavailable-work` span, so the
definitions view lists the intermediate reservoir of Example 15.7 under
both names the book gives it. The errata of `exploration.md` corrected and
extended: the prep pass had read Figure 15.12(b) as printing
1.2 × 10⁵ N/m², and 15.2 found the printed panel reads 2 × 10⁵ and agrees
with Example 15.2, the slip being in the alt text alone; the caption of
Figure 15.26, which names Figure 15.27 where the book means the Carnot
cycle of 15.4, and Example 15.7's $T'_\text{c}$ for the reservoir Figure
15.34 calls $T'_\text{h}$ are recorded beside the lowercase entropy $s$.
`config.md` records, in a "What the build changed" block, that 15.2's
isothermal and adiabatic passage and Figure 15.13 sit inside the
`<example>` element in the CNXML and are set as narrative after Example
15.2's Discussion, words unchanged; that eight figures move where the Motion
line had foreseen three ideas; and which folds and photographs stood.
`ch15/COLOR.md` now carries `time` in its table, bound by 15.7 alone for
the horizontal axis of the entropy graph of Figure 15.38, and says that the
water molecules of Figure 15.35 are the chapter's one use of the element
palette and that the categorical palette is not used. Root rule 20's
`weights_by` field is not in the schema, so the AI mark on the 95 weighted
rows lives in each section's `exercise_notes`, as every earlier chapter has
it, and the rule is left as it stands.

What the reading found. Every headline, topline and readout line is a full
sentence, no still figure carries a cycle, no discrete state sits on a
slider, no ordinal `º`, bare dollar sign, hex colour or leftover marker
stands anywhere in the chapter, and every figure's `draws` row matches the
hues its code names or its readout states. The five strokes of Figure
15.17 had label-headed toplines ("Intake stroke: the intake valve is
open…") and read as sentences now; one phrase of a caption in 15.7 spoke of
the reader and speaks to you; and three fields the app prints as plain
text, the lead of 15.7 and the notes of 15.5 and 15.7, carried math that
rendered as raw dollars and are in words. 15.3's five primed symbols stand
in the tables on the `otto` span though the page writes none of them, the
caption of Figure 15.19 where the book writes them not being shown by the
fold; the plan says so.

Two things are left for Fable and Chen, since a chapter may not invent a
hue (root rule 22), and the headless pass confirms both: the scheme gives
`pressure` a pale yellow that is close to illegible on the light theme,
where it stands on the axis title, ticks and labels of every $PV$ diagram
of the chapter; and `entropy` comes out a pink so near the magenta of
`energy` that 15.6's figures, where an energy arrow stands beside three
entropy bars, tell the two apart by their labels more than by their hues.
The book's `COLOR.md` also still says the element palette does not arise
in the chapters built, and 11.1 and now 15.6 use it.

Checks: `check:content` with 16 chapters, 105 sections and 17 introduction
pages and no errors; 405 unit tests; `astro check` clean; a build of 124
pages; and a headless pass over all eight pages of the chapter in light and
dark with no console error, every image loading, every `figure.sim` booting
its canvas, every eyebrow reading Sim, Figure or its figure number, the
transport on the eight moving figures only, every book table standing, and
no KaTeX error on any page.


### Pass 40 (2026-09-14): Chapter 14, Heat and Heat Transfer Methods, is built

Chapter 14 was prepared and its seven sections built in one wave on
2026-09-14, one agent to a section, and this is the chapter pass over them:
the wants of the seven plans, the cross-section checks, one reading of every
page and every `figures.js`, and the full checks.

What stands. Seven section pages and the introduction page, with 35 figure
rows over them: 20 drawn figures, of which 13 transform a book figure and 7
are Sims of OmniStax's own (the hot pan and the cold water meeting on a
temperature axis in 14.2, the ice cubes melting in a soda in 14.3, the
leaking house drawn as a row of light bulbs, the wind-chill table read as two
thermometers and the sweat that sheds a given power in 14.6, the fourth-power
curve and the person in a room radiating to its walls in 14.7), one faithful
copy (the thermos bottle of 14.4, which its conceptual question asks the
reader to explain part by part) and 14 kept photographs, every one pointed at
by the text or showing the thing its passage is about. One fold does the work
of two drawings, the gravity furnace and the pot on the stove as one
convective loop (Figure 14.21 + 14.22); the numbers run 14.1 to 14.34 with
the gaps the config foresaw, two photographs dropped with unkeyed problems
(14.6, 14.20), one splash image (14.15) and three images that travel on the
cards of the items that refer to them (14.19, 14.27, 14.35); the four tables
of the book stay in the text as tables. Heat is a flow and this chapter moves
more than Chapters 9 to 13 did: six drawn figures have a clock in them, the
two bodies coming to equilibrium and Joule's falling weights in 14.1, the
collisions at a contact surface and the heat current through a slab in 14.5,
and the convective loop and the loops in fur in 14.6, and each registers a
cycle and carries the transport; the fourteen others answer their sliders and
carry none. No scene turns: every figure of the chapter is a body, a slab, a
loop or a graph, and the slab and the blocks of 14.7 use a locked view where
the book prints them in perspective. 86 exercises: 41 problems, 28 conceptual
questions, 10 AP items and 7 Check Your Understanding boxes, one inline on
every page; two Unreasonable Results items sit with 14.2 and 14.5 rather than
the 14.7 that printed them, each with `source_section` and both sections'
notes; 33 open items carry an AI-marked suggested approach, 46 are keyed from
the book, and 40 unkeyed problems are left out and named, the two Construct
Your Own Problem items among them. Two ids the book prints twice (the fan
box in 14.5 and 14.6, the lake problem in 14.2 and 14.6) are kept once each
where they are keyed and named in both sections' notes. 183 coverage rows
against 44 concept nodes with 119 prerequisite edges into Chapters 1, 4, 7,
11, 12, 13 and 16, 18 glossary terms, 52 variable rows, 19 equation rows,
and no new type: heat is `energy`, its rate is `power`, temperature is
Chapter 13's, and the specific heat, the latent heats, the conductivity, the
emissivity and the Stefan-Boltzmann constant stay in ink, the case made in
`exploration.md`. Twenty symbol rows were staged, `Q_heat` (`\kQh`) chief
among them, since the book's `Q` is Chapter 12's flow rate; no existing row
was changed.

What the chapter pass wrote. The 71 anchors the plans asked for, on every
variable and equation row of `chapter.json`, each a span of its section's
own `text.html`; 14.4 has no row to anchor. One variable row dropped, 14.2's
`PE_g`, since the page writes the truck's lost potential energy as $Mgh$ as
the book does and never prints the symbol. The worked examples carry the
publisher's numbers: the CNXML numbers none, the publisher counts nine
through the chapter, and 14.5 had numbered its two 14.6 and 14.7 and 14.7 its
one 14.10; they are Examples 14.5, 14.6 and 14.9 now on the pages, in the
stove-top problem that cites the pan, in the slab's caption and the
balance's, and in the nine concept rows that name them, 14.6's two included,
which had named 14.8 and 14.9 for its own 14.7 and 14.8.
`conduction-rate-scaling`'s evidence says its box is set after the rate
equation it tests, where the book prints it after the pan example. 14.2's
lead carried two pieces of math, and the lead is not swept for math, so it is
rewritten in words. `ch14/COLOR.md` is brought into line with the pages: it
had said the arrows on Figure 14.8's molecules animate where the config keeps
the figure still, and the page follows the config; and its summary line now
says 14.7 binds energy and time through its readouts as well as power and
temperature, under its own rule that a rate is written $\kQh/\kt$. The
config's "What the build changed" block records these, that Figure 14.29 has
one original carrying both panels rather than two, and that its Prose line's
"Errata" section of `exploration.md` had not been written; it is there now,
with 14.2's "27.0 × 10⁴ J", 14.5's "1 g of water melts in one second",
14.6's "is used the body", the axis of Figure 14.9 that reads kJ/kg with
numbers in thousands of kJ/kg, and the two AP items of 14.5 that cite an
experiment this edition does not print. No page writes `\kTf`, Chapter 4's
tension, for a temperature. Root rule 20's `weights_by` field is not in the
schema, so the AI mark on the 94 weighted rows lives in each section's
`exercise_notes`, as every earlier chapter has it.

What the reading found. No leftover marker, ordinal `º`, bare dollar sign,
hex hue that is not the physical fact (the flames of 14.4 and 14.6, the
visible band and the glow of 14.29, the Sun's disc of 14.33) or the word demo
stands anywhere in the chapter; no still figure calls `cycle()`, and every
substance chosen from a table is a choice, never a slider. Four sentences
OmniStax had written spoke of the book or the page rather than the subject,
the caption of Figure 14.29 twice, the glow label under it and the last
sentence of Figure 14.33's caption, and each is reworded; the headline of
Figure 14.16 was a clipped clause with a middle dot and is a sentence now,
and Figure 14.17's ends with a full stop; the caption of Figure 14.14 is
spelled the American way. 14.3's plan said its heating curve ran to 3500
kJ/kg and 140 °C; the figure runs to 3200 kJ/kg and 180 °C, and the plan says
so now. Every figure's `draws` row matches the hues its code names or its
readout states.

Left for Fable and Chen. The book's `RULES.md` still lists twelve built
chapters and twenty-two types; with Chapters 13 and 15 landing in the same
wave it wants 13, 14 and 15 added and `temperature` and `entropy` counted,
which is the orchestrator's edit. The chapter prints four tables of material
constants and Chapter 13 prints coefficients of expansion, and together they
are the sheet the book's rules foresee; each stays in its section's text for
now.

Checks: `check:content` with 16 chapters and no errors; 405 unit tests;
`astro check` clean; a build of 122 pages; and a headless pass over all
eight pages of the chapter in light and dark with no console error, every
image loading, every `figure.sim` booting its canvas, every eyebrow reading
Sim or its figure number, the transport on the six moving figures only,
every inline host rendering its card, every book table standing, and the
hover card opened on all 44 of the chapter's concepts, 40 from the chips of
their exercise cards and 4 from the concept map (the units of heat, the final
temperature of an exchange, the R factor and the spectrum of a radiator),
each rendering its `why` and `evidence` with no KaTeX error and no raw macro
left in it.

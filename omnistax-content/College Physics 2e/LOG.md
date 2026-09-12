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

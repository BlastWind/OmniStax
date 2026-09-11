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

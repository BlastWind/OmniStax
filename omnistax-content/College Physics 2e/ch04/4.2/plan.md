# Plan: 4.2 Newton’s First Law of Motion: Inertia (m42130)

Source: `source.md` (converted from CNXML). Status: built 2026-09-11
without a review stop, on Chen's instruction to finish the book in one
job; the per-section stop of rule 2, the plan review of rule 5 and the
user picks of rule 15 are replaced by this file, written before the
section was built and left for review after, as Chapters 1 to 3 did it.

A thin section: five paragraphs, one boxed statement of the law, no
figure of any kind, no worked example, no equation, one Check Your
Understanding with the book's own answer, two conceptual questions and
no problems. It stays a page of its own (rule 11), as the chapter config
says. No PhET note.

## Sub-concepts (page headers)

The book has one untitled run of text and one titled header, Mass. Page
structure, one block per idea, span ids as the coverage rows name them:

1. `first-law` **A body keeps its velocity unless a net external force
   acts on it** (book: the opening sentences about experience, the boxed
   statement of the law, the note on the verb "remains", and the
   paragraph that reads the law as a statement about causes). The boxed
   statement is a `div.note` with the book's own eyebrow, Newton's First
   Law of Motion.
2. `cause-and-effect` **Friction is the cause of the slowing** (book: the
   paragraph that makes the surface smoother and smoother, from a rough
   floor to talcum powder to lubricating oil to the frictionless surface,
   and then to the air hockey table). The one Sim of the page sits here.
3. `universal-law` **The law holds for everything, from a satellite to
   blood** (book: the paragraph on generally applicable laws, Galileo and
   Newton asking what the cause is, and the Aristotelian answer that is
   true but not useful).
4. `mass` **Mass** (the book's own header: inertia as the property the
   law names, the first law as the law of inertia, the boulder and the
   basketball, mass as the measure of inertia and the quantity of matter,
   mass not varying with location, and the standard kilogram). The Check
   Your Understanding item goes inline at the end of this block, which is
   the passage it tests.

Learning objectives, the section summary and the four glossary terms come
out of the running text into the views. The two conceptual questions go
to the Exercises document.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| newtons-first-law | idea | first-law | the boxed statement; the sliding block argued from rough to frictionless; both conceptual questions rest on it |
| inertia | idea | mass | the definition of inertia, the law of inertia, the boulder and the basketball; conceptual question 1 |
| mass | idea | mass | the definition of mass, the standard kilogram; the Check Your Understanding item; conceptual question 2 |

`first-law` uses `external-force` and `force` (4.1) and
`instantaneous-velocity` (2.3), the three ideas the boxed statement leans
on; `cause-and-effect` reinforces `newtons-first-law` and uses `friction`
(4.3), which the book names here and defines there; `universal-law`
reinforces `newtons-first-law`; `mass` uses `newtons-first-law` and
`fundamental-units` (1.2), which is where the standard kilogram was set.
Conceptual question 2 asks which of weight and mass is the intrinsic
property, so it tags `mass-versus-weight` (4.3) lightly as well.

## Figures

The book prints no figure in this section, so there is nothing to
replace, nothing to copy faithfully for the exercises and no photograph
to keep or drop. Everything below is a Sim under rule 15.

id · replaces · concepts · what moves · sliders · headline · graph · 3D

1. `sim-frictionless` · new, so it is a Sim with no number ·
   newtons-first-law · **moves**: the idea has a time in it, since the
   block slides and loses speed as a clock runs, so the figure runs a
   finite loop of about five real seconds and takes the app's transport
   and its scrubber. A block starts at the left of a 60 m surface with a
   speed you set and slides to the right; the surface slows it at the
   rate you set, and the picture is drawn until the block either stops or
   runs off the right-hand end still moving. The current speed is an
   arrow from the block, the distance covered so far is a bracket under
   it, and the surface names itself at the value chosen: a rough surface,
   a surface dusted with talcum powder, a surface rubbed with oil, and at
   zero a frictionless surface, as on an air hockey table. Below the
   scene, and sharing its clock, a graph of the speed against time whose
   line tilts down to zero on a rough surface and lies flat when the
   friction is gone, which is the first law drawn · $\kvo$ in m/s (2.0 to
   10.0, step 0.5, default 8.0, velocity hue) and $\ka$, the rate at
   which the surface slows the block, in m/s² (0 to 3.0, step 0.1,
   default 2.0, acceleration hue) · while it slides, "the block has
   covered 12.4 m of the surface and is still moving at 4.8 m/s", and at
   the end either "on a rough surface the block slides 16.0 m and stops"
   or "with the friction gone the block leaves the picture at 8.0 m/s,
   and nothing will stop it" · graph below, speed against time · no.
   Readout: $\kv = \kvo - \ka\kt$ with the current numbers, and a small
   line saying how far the block goes as the surface is made smoother.
   Draws velocity, acceleration, time and position.

What the Sim shows that the text cannot (rule 15's test): the paragraph
asks the reader to imagine the surface being made smoother and smoother
and then to extrapolate to a frictionless one, and imagining an
extrapolation is exactly the work a slider does. Dragging the slowing
down to zero and watching the stopping distance run past the end of the
picture while the speed line goes flat is the argument of the section,
carried out rather than described.

Extra simulations considered and left (rule 15):

- A kilogram of cotton balls balanced against a kilogram of gold, with a
  slider for the mass and the two volumes drawn to scale, for the Check
  Your Understanding item. It would show that the same mass can come in
  very different sizes, which the text only states. **Left**: the point
  is one sentence of the answer, and the item already carries the book's
  own answer beside the passage, so the picture would illustrate rather
  than open a view.
- A boulder and a basketball given the same push, to show that the one
  with more inertia changes its motion less. **Left**: the comparison
  needs a force and the relation between force, mass and acceleration,
  which is 4.3's result and not stated here; the figure would teach the
  next section on this page.
- A satellite in orbit, blood leaving the heart and a block on a table
  side by side, for the paragraph on the generality of the law.
  **Left**: three scenes that each say the same thing, and none of them
  shows a quantity the reader can change.

## Exercises

- 1 Check Your Understanding, `cyu1` (which has more mass, a kilogram of
  cotton balls or a kilogram of gold), inline after `mass`, with the
  book's own answer, kept as an open answer to compare with since the
  book answers it in words.
- 2 conceptual questions, both open with AI-written suggested approaches,
  since the book keys no conceptual question: `cq1` (how are inertia and
  mass related) and `cq2` (the relationship between weight and mass, and
  which is intrinsic).
- `cq2` names weight, which 4.3 introduces, but what it asks for is which
  of the two is the unchanging property of a body, and this section is
  where the text says that mass does not vary with location. The reader
  is ready for it here, so it stays, and `exercise_notes` says so.
- No problems and no AP items in the book for this section; nothing is
  left out.
- Nothing held for another section, and nothing taken from another
  section: the chapter's AP items and problems all test force, the second
  law, the third law or the named forces, and none of them turns on
  inertia or mass alone.
- No generated questions: each of the three nodes has a book exercise.
- Weights (rule 20): `cq1` is about inertia and mass together, so both
  keep their full Bloom value; `cq2` is about mass and only touches
  `mass-versus-weight`, which gets weight 1.

## Views

- Formulas: nothing; the section states no equation.
- Definitions: the variables `m` and `v`, and the four glossary terms
  inertia, law of inertia, mass, and Newton's first law of motion.
- Concept map: the three nodes above, resting on `force`,
  `external-force`, `instantaneous-velocity` and `fundamental-units`,
  with `friction` and `mass-versus-weight` (4.3) named but not
  introduced here.

## Colour

The page binds velocity (the speed of the block, its arrow and the
slider), acceleration (the rate at which the surface slows it), time (the
axis the speed is drawn against) and position (the distance the block has
covered). Mass is untyped and stays in ink, as the book's type table
says. No new hue and no new macro: `\kv`, `\kvo`, `\ka`, `\kt` and
`\kdx` are all rows the book already has.

## Wanted at chapter level

- variables `m` → 4.2-mass
- variables `v` → 4.2-first-law
- Nothing else: the section states no equation, so there is no equation
  anchor to write, and the concept, glossary and symbol rows it needs are
  all in place.

### The chapter pass decided

The two variable anchors are written. The conceptual question that names
weight stays here, as the section asked: what it tests is that mass does not
vary with location, and this is where the text says so.

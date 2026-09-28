# Config: College Physics 2e, Chapter 26

Written by the prep agent after exploration (2026-09-28). Status: applied as
proposed on 2026-09-28, on Chen's instruction to finish the book without
check-ins; the per-section stops of rule 2 and the plan reviews of rule 5 are
replaced by a plan file per section, written before the section is built and left
for review after. Each line is a setting and its value. Lines that repeat the
earlier configs are unchanged unless marked.

| Setting | Value |
|---|---|
| Chapter | 26 Vision and Optical Instruments, modules m42478 (introduction), m42482, m42484, m42487, m42491, m42493, m42292 |
| Front matter | the chapter introduction (m42478) is a page of its own in `ch26/intro/`, listed before 26.1 (rule 21), built in the prep pass; it keeps its one photograph, the transmission electron micrograph of SARS-CoV-2 (Figure 26.1) |
| Media file names | the bundle's names carry no space in this chapter; the first edition's chapter number 27 stays in every name (`Figure_27_01_01.jpg`), and the `OSX_CP2e_` prefix is kept where the bundle has it |
| Unit of work | one section = one page; sections never folded (rule 11); 26.6, three figures and one conceptual question once its problems move, stays a page of its own |
| Order | 26.1 to 26.6 in book order, built in parallel by one agent per section |
| Loop | plan file → build → validator, all six sections in one wave; review after |
| Prose | verbatim; objectives, summary, glossary pulled into the tables and views; the boxed notes kept verbatim (Take-Home Experiment: The Pupil in 26.1, Take-Home Experiment: Rods and Cones and Take-Home Experiment: Exploring Color Addition in 26.3, Overall Magnification and Take-Home Experiment: Make a Lens in 26.4); the two numbered steps of 26.3's Rods and Cones experiment kept as the book's numbered list |
| Tables | one: Table 26.1 Refractive Indices Relevant to the Eye in 26.1, kept in the text as a `div.book-table` with the book's eyebrow and title (rule 19) |
| Sub-concept headers | the book's own narrative headers where a module prints them (26.3 prints two), the agent's where it does not (every other section) |
| Figures | a sim per idea or result the section introduces; every drawing of the chapter replaced by a sim with the book's image as its original, except Chandra's nested mirrors (26.26(b)), which are kept as the book's image beside the photograph they share a number with; a photograph kept where the text points at it or it shows the thing the passage is about; each listed in the plan (rule 14) |
| Photographs kept | all of them: 26.1 (rule 21), the LASIK procedure (26.9), the retinal micrograph (26.10(b)), the microscope in use (26.15), the electron microscope (26.21), the bacteria on a grain of sand (26.22), the Australia Telescope Compact Array (26.26(a)) and the artist's impression of the Square Kilometre Array Pathfinder (26.27); the text points at every one of them |
| Folds | judged per section; the strong candidates are 26.1's image on the retina and relaxed and accommodated vision (Figures 26.3 + 26.4), one eye with an object-distance slider, and 26.2's two corrections (Figures 26.6 + 26.7), one eye with a choice of defect and a spectacle toggle, which may also take in 26.5; 26.4's numerical aperture, fiber and immersion (26.17 + 26.18 + 26.19) are separate ideas and fold only if the plan argues it; each plan names every number it folds |
| Sim sliders | whatever is interesting and variable in the idea: the object distance, the power of the eye or of a spectacle lens, the length of the eye, the near and far points, the wavelength of a light and the color of an object, the focal lengths of objective and eyepiece and their separation, the refractive index of an immersion medium and the acceptance angle |
| Motion | none: optics has no clock, and every figure of the chapter is still, answers its sliders, registers no cycle and gets no transport (rule 14) (new) |
| 3D | none (new). Every figure is a planar ray diagram, a graph or a photograph (rule 28.1); the acceptance cones of 26.17(b) and 26.18 are locked views (rule 28.2), since a section through the axis shows the whole of a cone symmetric about it |
| Figures that serve exercises | left on the exercise cards, in the `figure` field of the item that refers to them: the microscope outline of 26.4's AP item `fs-id2589414` and the two telescope outlines of 26.5's AP item `fs-id2542348`. An image belonging to an unkeyed problem that is left out is not copied at all |
| Extra simulations | agent proposes only those that open a view the required figures do not, builds the one or two that clearly earn their place, and says in the plan which were left (rule 15) |
| Colour coding | no new type. The chapter binds `position` for every length (object and image distances, heights, focal lengths, the aperture diameter and the wavelength) and `intensity` for the relative intensity of 26.3's emission spectra if its figure draws that axis; the power of a lens in diopters, every magnification, the angular magnification, the numerical aperture, the $f$-number, every angle and every index are untyped and in ink. Nine symbol rows are staged: `f_obj` (`\kfobj`), `f_eye` (`\kfeye`), `d_objp` (`\kdobjp`) and `d_imgp` (`\kdimgp`) on `position`, and `m_obj`, `m_eye`, `NA`, `α_half` and `θ_prime` untyped. Chapter 25's `f_focal`, `d_obj`, `d_img`, `h_obj`, `h_img`, `P_lens` and `m`, and the book's `D` (`\kD`), `M`, `θ` and `n` are used as they stand |
| Inline exercises | none: the chapter has no Check Your Understanding box in any module |
| Exercises tab | end-of-module problems, conceptual questions, AP test prep |
| Exercise placement | an exercise goes with the section that introduces what it tests, and two items move: 26.6's Critical Thinking microscope problem (`exer-00001`, keyed, empty `type=`, classed `problem`) is set with 26.4 and its Integrated Concepts LASIK ablation problem (`fs-id3069158`, keyed) with 26.2, each with `source_section: "26.6"` and a note in both sections' `exercise_notes`; 26.6 keeps its one conceptual question |
| AP test prep | included; an unkeyed AP item is kept as an open item with its options as the book prints them and an AI-marked suggested approach, never as a graded choice; six of the chapter's eleven AP items are keyed, and the key is read from the CNXML for each |
| PhET interactive links | dropped (Color Vision in 26.3, whose CNXML carries an empty image marker as well), named in the section's `notes` |
| Cross-references to other chapters | plain text, as the chapter pass settled book-wide; the introduction's references to Geometric Optics and Wave Optics and 26.1's to Geometric Optics are plain text unless Chapter 25 is built when the section is; references to sections of Chapter 26 itself (26.6 to 26.2's astigmatism chart) are linked where the target is built |
| Answers to book problems | book answer key only; never generated; the nineteen unkeyed problems are left out and named in the notes, among them 26.5's Construct Your Own Problem item on Galileo's telescope |
| Suggested approaches for open questions | generated, marked AI: all twenty conceptual questions of the chapter and the five unkeyed AP items |
| Generated questions | none; a node with no book exercise of its own is noted in the plan, no question generated. 26.3 has no problems, and 26.6 keeps only its one conceptual question |
| Concept nodes | testable units only; kinds idea/result/skill; canonical ids; 33 nodes written into `book.json` before the sections were built (6 for 26.1, 7 for 26.2, 5 for 26.3, 7 for 26.4, 5 for 26.5, 3 for 26.6) with 71 prerequisite edges into Chapters 24 and 25 and within the chapter |
| Formulas | `ch26/chapter.json`: 11 equations, the stated and named ones important (the power and magnification equations of the eye, the overall magnification, the numerical aperture, the $f$-number and the angular magnification of a telescope) and the worked steps not; 26.2 states no equation of its own and uses 26.1's rows; no anchor on any row, since the validator refuses an anchor into an unbuilt section, and the chapter pass writes them from the section plans |
| Book manifest | `ch26` after `ch25` in `book.json` chapters, merged with `ost merge college-physics-2e 26` |

## What the build changed

| Setting | As built |
|---|---|
| Folds | Figures 26.3 + 26.4 (the eye with an object-distance slider), 26.5 + 26.6 + 26.7 (defect choice and spectacle), 26.17 + 26.19 (the acceptance cone with the immersion medium), 26.23 + 26.24 (the two-lens telescopes) and 26.29 + 26.30 (coma and spherical aberration) are each one sim |
| Colour coding | `intensity` is not bound on 26.3, whose emission spectra draw relative intensity in ink; 26.6 binds `position` for its wavelength, focal length and aperture; 26.5's mirror radius takes Chapter 25's `R_curv` |
| Cross-references | 26.6's reference to the astigmatism chart of Figure 26.8 stays plain text, as every cross-reference to another section does |

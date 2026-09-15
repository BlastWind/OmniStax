# Plan: 20.3 Resistance and Resistivity

Written before the page was built, under `ch20/config.md`, which replaces the
stop of root rule 2 and the review of root rule 5 with a plan file left for
review. The section is the one place in the chapter where a resistance is
worked out from the thing it is made of and the shape it is cut to, and then
from how hot it is.

## Sub-concepts and their spans

The book prints two headers of its own and both are kept as it writes them.
Two further headers are OmniStax's, so that the table of materials and the
temperature dependence of an object's resistance each stand as a block of
their own; the prose under them is the book's, in the book's order.

| span | header | what it carries |
|---|---|---|
| `material-and-shape` | Material and Shape Dependence of Resistance (the book's) | the cylinder, its length and its cross-sectional area, Figure 20.10, the definition of resistivity and $R = \rho L/A$ |
| `resistivity-table` | Conductors, semiconductors, and insulators | the paragraph on the three groups, Table 20.1, the sim that lays the table out on a scale, and Example 20.5 |
| `temperature-variation` | Temperature Variation of Resistance (the book's) | superconductivity and Figure 20.11, $\rho = \rho_0(1 + \alpha\Delta T)$, Table 20.2, the negative coefficients of the semiconductors |
| `resistance-with-temperature` | The resistance of an object with temperature | $R = R_0(1 + \alpha\Delta T)$, the thermistor and Figure 20.12, the sim that graphs it, and Example 20.6 |

## Concept nodes and where each is introduced

All seven are already in `book.json` (the prep pass wrote them) and this page
introduces every one of them.

| concept | introduced in |
|---|---|
| `resistivity` | `material-and-shape` |
| `resistance-of-cylinder` | `material-and-shape` |
| `conductors-semiconductors-insulators` | `resistivity-table` |
| `superconductivity` | `temperature-variation` |
| `temperature-coefficient-of-resistivity` | `temperature-variation` |
| `resistivity-and-temperature` | `temperature-variation` |
| `resistance-and-temperature` | `resistance-with-temperature` |

The page leans on `resistance` and `ohms-law` from 20.2 and on
`charge-carriers` from 20.1 wherever it explains a resistivity by the
collisions the carriers make, and those are `uses` rows.

## Figures

```
sim-cylinder · Figure 20.10 · resistance-of-cylinder, resistivity · value add: variation by slider and standardisation — the book draws one cylinder with L and A lettered and the reader must imagine what happens when either changes, and here both change and the resistance changes with them, the material set from the book's own table · still, because a resistance computed from a shape has no time in it, so no cycle and no transport · sliders: length L (position), diameter D (position); choice: the material, a dropdown of Table 20.1's twenty-eight entries (untyped, a material is a choice and not a hue) · headline: the live length, diameter, material and resistance in one sentence · graph none, the scene is the whole figure · 2D, drawn from a locked view because the book draws the cylinder in perspective (root rule 28.2); the drawing is schematic in its diameter, which the note under it says, since a 0.090 mm filament 4 cm long cannot be drawn on one scale
sim-resistivity-scale · Sim · resistivity, conductors-semiconductors-insulators · value add: intuition — Table 20.1 runs from 1.59 × 10⁻⁸ to 7.5 × 10¹⁷ Ω·m and a column of numbers hides how far apart those are, while a logarithmic scale shows the three groups standing 24 decades apart and the semiconductors sitting between them · still, a table has no clock · choice: the material (the same dropdown), so the reader can find one entry on the scale; slider: the length L of a 1 mm² sample (position), whose resistance the readout gives, so the scale is read as a resistance and not only as a material constant · headline: where the chosen material sits and what a sample of it would measure · graph none, the scale is the drawing · 2D
sim-temperature-resistance · Sim · resistance-and-temperature, temperature-coefficient-of-resistivity, resistivity-and-temperature · value add: variation by slider — R = R₀(1 + αΔT) is a line whose sign and steepness are the material's, and the reader sets the temperature and watches the filament's resistance climb from 0.350 Ω to 4.8 Ω, or watches a semiconductor's fall and manganin's stay where it is · still, a temperature held at a value is not a clock · sliders: the temperature T (temperature), the original resistance R₀ (resistance); choice: the material, a dropdown of Table 20.2's fifteen entries · headline: the material, the temperature, the change from 20 °C and the resistance it gives · graph beside the bar, since resistance against temperature is the idea and the bar only reads one point of it · 2D
sim-mercury-superconductor · Figure 20.11 · superconductivity · value add: variation by slider — the book prints one curve and the whole point of it is a threshold, so the reader drags the sample's temperature through 4.2 K and watches the resistance fall to nothing, with the straight line the resistance would have followed had mercury stayed an ordinary metal drawn dashed below the critical temperature for the contrast the text draws in words · still, a sample held at a temperature has no clock · slider: the temperature T of the sample (temperature) · headline: the temperature and the resistance, and whether the sample is superconducting · graph alone, the graph is the idea · 2D
fig-thermometers · Figure 20.12, photograph · resistance-and-temperature · kept: the passage names the thermistor and the automated measurement of its temperature-dependent resistance, and the photograph shows the instrument the relation is used in, which config.md lists among the six photographs the chapter keeps
```

Images the exercises refer to travel on their cards, as `config.md` settles
for this chapter: `CNX_APPhysics_20_M3_S03_img.jpg`, the four wires of the
second AP item, and `Figure_21_03_04a.jpg`, the rectangular bar of the second
conceptual question. Neither is a figure row. The PhET note "Resistance in a
Wire" is dropped and named in `notes`.

No further simulations are proposed. A fifth figure drawing the lattice the
electrons collide with would repeat 20.1's crowd of free electrons, which
already carries that picture.

## Types the page binds

`resistance`, `position` and `temperature`, which is what `ch20/COLOR.md`
expects of this page. The resistivity $\rho$, the temperature coefficient
$\alpha$, the cross-sectional area $A$ and the length $L$ of the book's own
symbol row stay untyped and in ink; the diameter $D$ is the book's typed
position row and wears that hue. The three groups of Table 20.1 are told
apart on the scale by `F.cat(i)`, never by a bound hue, and no current or
voltage is drawn on this page, so neither type is bound.

## Tables

Two numbered tables, each a `div.book-table` with the book's number as its
eyebrow and the book's own title, its italic group rows kept and its
footnotes kept as the book prints them: Table 20.1 Resistivities of Various
materials at 20 °C, and Table 20.2 Tempature Coefficients of Resistivity.
Both titles are the book's, misspelling and all. The three-row wire table of
the fifth AP item travels inside that item's prompt.

## Exercises

Six AP test prep items, four conceptual questions and sixteen problems, all
at the end of the section; the chapter has no Check Your Understanding box,
so the page hosts no inline exercise.

- Graded as numbers: the two keyed AP items (9.72 × 10⁻⁸ Ω·m and 18 Ω) and
  the seven keyed problems that come to one number, with the eighth, the
  Integrated Concepts item, as a `multi` of its two parts.
- Kept open with the book's own key in the solution: the AP item that asks
  for two of four answers, since a graded choice takes one.
- Kept open with an AI-marked suggested approach: the three unkeyed AP items
  (their options as the book prints them, never a graded choice) and all four
  conceptual questions.
- Left out: the eight problems the book leaves unkeyed, named in `notes`.

## Wanted at chapter level

- `eq-resistance-cylinder` → `20.3-material-and-shape`
- `eq-resistivity-temperature` → `20.3-temperature-variation`
- `eq-resistance-temperature` → `20.3-resistance-with-temperature`
- glossary `20.3/resistivity` → `20.3-material-and-shape`
- glossary `20.3/temperature coefficient of resistivity` → `20.3-temperature-variation`

No concept or symbol fix is wanted: the seven concept rows read correctly
against the built page, and every symbol the section needs is already in
`book.json`.

Applied in the chapter pass of 2026-09-15. The three equation anchors were
written to `ch20/chapter.json`, and the seven variable rows of the section
were anchored as well: $\rho$, $L$ and $\kD$ to `20.3-material-and-shape`,
$\rho_0$, $\alpha$ and $\kdTemp$ to `20.3-temperature-variation`, and
$\kReso$ to `20.3-resistance-with-temperature`.

The two glossary rows cannot be anchored. The `glossary` table has three
fields, `section`, `term` and `definition`, and no `anchor` among them, so
resistivity and the temperature coefficient of resistivity take none; the
app finds the term where the text marks it. `ch20/config.md` now says so
under Anchors.

The pass also found that the section's two worked examples carried the
numbers 20.4 and 20.5, which 20.2 and this section had counted from the
start of their own pages. The book numbers its examples straight through the
chapter, so they are Example 20.5 and Example 20.6, and the pass renumbered
them and every reference to them in the text, the two captions, the
Integrated Concepts problem that redoes one of them, the section's `notes`
and the two concept rows whose evidence cites them.

`ch20/COLOR.md` now says the section binds resistance, position and
temperature and no more: no figure of the section measures a resistance from
a current and a voltage, which the colour plan had allowed for.

The second conceptual question, the rectangular bar, was missing the
unnumbered image `Figure_21_03_04a` its last sentence points at, although
the file had been copied into `media/ch20/`; the pass put it on the card
with the book's alt text and caption.

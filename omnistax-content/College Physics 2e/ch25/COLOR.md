# Chapter 25 colour plan

Prepared 2026-09-15 in the chapter's prep pass, beside `config.md`. This chapter
uses the book's declared types and the app's selected palette, as root rule 7 and
root rule 22 require. It declares no type of its own, hard-codes no hue except
where a hue is a physical fact, and every page binds only the union of the types
its own figures draw.

This chapter colours less than any chapter since Chapter 1, and the reason is
worth stating before the table. Geometric optics is geometry: a ray diagram is
made of straight lines, perpendiculars, angles and surfaces, and an angle, a
count and a dimensionless ratio are untyped in this book and stay in ink. So the
index of refraction, the angle of incidence, the angle of refraction, the
critical angle, the magnification and the power of a lens in diopters are all
ink, and on several pages the whole figure is ink, which is the second half of
root rule 7's test and is allowed. What this chapter does colour is the three
kinds of quantity that carry a dimension: a speed, a distance and, in 25.3's one
moving figure, a time.

| Quantity | Existing type | Treatment |
|---|---|---|
| The speed of light $c$ in a vacuum, and the speed $v$ of light in a material | `velocity` (Chapter 2) | One hue; the slowed speed in a medium keeps it, as it already does in 24.2, and the two are told apart by their symbols and by the medium they are drawn in |
| The focal length $f$, the object and image distances $d_{\text{o}}$ and $d_{\text{i}}$, the object and image heights $h_{\text{o}}$ and $h_{\text{i}}$, the radius of curvature $R$ of a mirror, and the wavelength $\lambda$ | `position` (Chapter 2) | One hue for every measured distance along or across the axis, as a wavelength has worn it since 16.9; a negative distance is told by its sign in the readout and by which side of the lens it is drawn on, never by a second hue |
| The round-trip time of Michelson's measurement, and the period of his rotating mirror | `time` (Chapter 2) | Bound on 25.3 alone, and only on the figure that has a clock in it |
| The index of refraction $n$, $n_1$ and $n_2$; every angle, including $\theta_1$, $\theta_2$, $\theta_{\text{i}}$, $\theta_{\text{r}}$ and $\theta_{\text{c}}$; the magnification $m$; the power $P$ of a lens or mirror in diopters | Untyped | Ink, along with the frame, the surfaces, the lens and mirror outlines, the normals, the rays themselves where they carry no colour of their own, and every label |

Which section binds what:

| Section | Types bound |
|---|---|
| intro | none |
| 25.1 | none; the page is a ray diagram and is wholly in ink |
| 25.2 | none; the law of reflection is an equality of two untyped angles |
| 25.3 | `velocity`, `position`, `time` |
| 25.4 | none by default; `velocity` and `time` only if the plan gives the fiber figure a pulse with a speed and a travel time |
| 25.5 | `position` for the wavelength, `velocity` where the speeds of two colours in one medium are compared |
| 25.6 | `position` |
| 25.7 | `position` |

Of root rule 7's four families this chapter uses three, and one of them does more
work here than anywhere else in the book.

**A colour that is the physical fact.** The colour of light is the chapter's
subject from 25.5 onward, and it is drawn as the fact, not as a type hue. A ray's
colour is its wavelength: a 660 nm ray is drawn red because it is red, a 410 nm
ray violet because it is violet, and the band of Figure 25.21, the fan leaving the
prism of Figure 25.22, the light leaving the drop of Figure 25.23 and the arc of
Figure 25.24 are all painted in true spectral colour. This is root rule 7's third
family and it is the only place in the chapter where a hex literal is written in a
figure, named in the plan line as the rule asks. It follows that a coloured ray is
never a typed thing: the hue says which wavelength the ray is, and the wavelength
slider beside it wears the `position` hue because the number is a length, while
the ray it controls wears the colour that number means. A reader who turns colour
off keeps every spectral ray, since the physical colours survive, and the order of
the fan and its labels carry the lesson on their own.

**Type hues from the scheme, bound per page.** They carry the speeds of 25.3 and
the distances of 25.5, 25.6 and 25.7. In a lens or mirror figure the four distances
$f$, $d_{\text{o}}$, $d_{\text{i}}$ and the two heights share one hue, and the
reader tells them apart by their brackets, their labels and the side of the lens
they are measured on, as rule 7 asks of variants of one type.

**The categorical palette `F.cat(i)`.** It tells apart instances that carry no type
and must be distinguished: ray 1, ray 2 and ray 3 of a ray-tracing figure, the two
media on either side of a surface, the core and the cladding of a fiber, the two
paths from A to B in 25.3's test-prep item. It is never used in a hue the page has
bound, and it is never used on a ray whose colour is its wavelength.

The element palette does not arise in this chapter: nothing in it is an atom, an
ion or a molecule.

A medium is never tinted to say what it is. Water, glass, diamond and air are told
by their labels, by their index written beside them and by the way the ray bends at
the boundary, not by a wash of colour over the region, exactly as a phase and a
temperature are told by shape and packing elsewhere in this book. The one tint any
figure may lay over a region is a faint neutral panel that separates two media, and
it carries no meaning beyond the boundary it makes visible.

The test for one figure is root rule 7's: everything in it with an identity is
coloured, or the whole figure is ink. Several figures of 25.1, 25.2 and 25.4 take
the second branch and are wholly in ink, which is correct rather than unfinished.
Colour-off drops the type hues and keeps the physical and categorical colours, so
every figure must stay legible from its labels, its ray directions and its caption
alone.

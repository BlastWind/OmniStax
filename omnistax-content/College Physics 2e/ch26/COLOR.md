# Chapter 26 colour plan

Prepared 2026-09-28 in the chapter's prep pass, beside `config.md`. This chapter
uses the book's declared types and the app's selected palette, as root rule 7 and
root rule 22 require. It declares no type of its own, hard-codes no hue except
where a hue is a physical fact, and every page binds only the union of the types
its own figures draw.

The chapter follows Chapter 25: optics colours its lengths and little else. The
power of a lens in diopters, every magnification, the angular magnification, the
numerical aperture, the $f$-number, every angle and every index of refraction are
untyped and stay in ink.

| Quantity | Existing type | Treatment |
|---|---|---|
| Object and image distances $d_{\text{o}}$, $d_{\text{i}}$, $d_{\text{o}}'$, $d_{\text{i}}'$; heights $h_{\text{o}}$, $h_{\text{i}}$; focal lengths $f$, $f_{\text{o}}$, $f_{\text{e}}$; the lens-to-retina distance, the near and far points; the aperture diameter $D$; the wavelength $\lambda$ | `position` (Chapter 2) | One hue for every measured length; they are told apart by their brackets, labels and subscripts, and a negative distance by its sign and its side of the lens |
| Relative intensity on the emission spectra of Figure 26.13 | `intensity` (Chapter 17) | Bound on 26.3 only if its figure draws a labelled intensity axis; a relative sensitivity (Figure 26.11) is dimensionless and in ink |
| Power $P$, magnifications $m$, $m_{\text{o}}$, $m_{\text{e}}$, $M$; $\text{NA}$, $f/\#$; angles $\theta$, $\theta'$, $\alpha$; the index $n$ | Untyped | Ink, with the lenses, the eye's outline, the axis, the rays where they carry no colour of their own, and every label |

Which section binds what:

| Section | Types bound |
|---|---|
| intro | none |
| 26.1 | `position` |
| 26.2 | `position` |
| 26.3 | `position` for the wavelength axis; `intensity` only as above |
| 26.4 | `position` |
| 26.5 | `position` |
| 26.6 | `position` for the focal points of each color, if the figure brackets them |

Of root rule 7's four families this chapter uses three.

**A colour that is the physical fact.** 26.3 is about colour itself, and there a
light, a cone's peak, an object's reflected light and a spectrum are drawn in
their true colours; 26.6's violet and red rays and their focal points V and R are
drawn violet and red. This is the only place a hex literal is written in a
figure, named in the plan line. A coloured ray is never a typed thing, and a
reader who turns colour off keeps these colours. The grey strips of Figure 26.14
are grey levels that are the fact the figure shows, and are drawn as greys.

**Type hues from the scheme, bound per page.** `position` carries the lengths of
every ray diagram.

**The categorical palette `F.cat(i)`.** It tells apart instances that carry no type:
the three cone types' curves where they are not drawn in spectral colour, the
four emission spectra of Figure 26.13, the rays traced from the top and bottom of
an object, the objective and eyepiece where the two need telling apart, and the
media of 26.19's three immersion panels. It is never used in a hue the page has
bound, and never on a ray whose colour is its wavelength.

The element palette does not arise. A medium is never tinted to say what it is:
cornea, humors, oil and water are told by their labels and indices, with at most a
faint neutral panel marking a boundary.

The test for one figure is root rule 7's: everything in it with an identity is
coloured, or the whole figure is ink. Colour-off drops the type hues and keeps
the physical and categorical colours, so every figure must stay legible from its
labels, ray directions and caption alone.

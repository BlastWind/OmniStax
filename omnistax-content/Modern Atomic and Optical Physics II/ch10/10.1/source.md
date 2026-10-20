# 10.1 Ion traps

<!-- page 217 -->

Unlike neutral atoms, ions respond very strongly to applied electric fields via the Coulomb force. This allows creation of extremely tight traps. However, because one cannot create a static electric field minimum, an ion cannot be confined using static electric fields. To get around this problem, two solutions have been found, one using magnetic fields and the other using RF electric fields to provide 3D confinement.

The Penning trap uses the cyclotron motion of a charged particle in a magnetic field to confine the ion in two dimensions. The third dimension is confined using charged endcaps as shown in Figure 10.1. The ion orbits the magnetic field lines following the usual cyclotron motion; in addition, the axial confinement associated with the electric field produces motion along the magnetic field; finally, the crossed electric and magnetic fields produce a larger-scale magnetron motion.

The Paul trap provides 3D confinement using high-frequency electric fields to simulate an electric field minimum. To understand how this works, consider a quadrupole electric field with potential
$$ \Phi = \phi_0\left(\alpha x^2 + \beta y^2 + \gamma z^2\right). $$ {eq:10.1}
From LaPlace’s equation, $\alpha + \beta + \gamma = 0$, so choosing $\alpha = -\beta, \gamma = 0$, one can generate a 2D potential which is confining in one direction and repulsive in the other direction. If one now rotates this potential in time, the ion will follow the motion of the trap (the so-called “micromotion” of the ion). In particular, the position of the atom will be 180 degrees out of phase with the trap, so that when the is near the center of the trap it will experience the repulsive potential and when the atom is far from the center of the trap it will experience the confining potential. Averaging over many cycles, the net effect of this oscillating trap is to confine the ion in both dimensions. This effect can be used in three dimensions by adding charged endcaps as illustrated in Figure 10.2.

<!-- page 218 -->

> FIGURE {fig:10.1} src=../../media/ch10/fig-10-1.png
> caption: The Penning trap, with cyclotron and magnetron motion of the ion illustrated below. .

> FIGURE {fig:10.2} src=../../media/ch10/fig-10-2.png
> caption: The Paul trap. .

<!-- notes
- Figures 10.1 and 10.2 stand on page 218 inside the Paul-trap paragraph, which continues on page 219; both placed after that paragraph.
- "LaPlace’s equation": the book's capitalisation of Laplace, kept.
- "so that when the is near the center": a missing word ("the atom" or "the ion"), kept.
- "the position of the atom": the section is about ions; the book's word, kept.
- "If one now rotates this potential in time": a Paul trap oscillates the potential's sign at RF frequency rather than rotating it; kept as printed (the mechanism the paragraph goes on to describe is an oscillation).
- Captions of Figures 10.1 and 10.2: each is followed by a lone "." on its own line in the book, kept as " .".
- Figure 10.1 caption: "illustrated below", but the motion is drawn beside (to the right of) the trap.
- Figure 10.2 is a scanned figure from J. Appl. Phys. 83, No. 10 (15 May 1998), with that journal's own "FIG. 1." caption inside the image; the crop takes in that printed caption.
-->

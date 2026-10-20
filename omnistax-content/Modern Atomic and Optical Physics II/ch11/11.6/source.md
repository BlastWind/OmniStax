# 11.6 First-order coherence of Bose condensates

<!-- page 278 -->

Before delving into quantum states of a BEC, we will consider the classical coherence properties of the condensate, and discuss how they are measured experimentally.

## 11.6.1 Interference of two atomic clouds

Using expansion techniques, one can probe the classical coherence of an atomic cloud. Since the condensate wavefunction $\psi$ has a well-defined (though arbitrary) phase, interference between two such condensates will result in observable fringes in the atom number distribution. These interference fringes are precisely analogous to the interference fringes seen for laser light split into two beams and then recombined, and they correspond to first-order coherence of the atomic matter wave.

Just as incoherent light can exhibit limited interference fringes, first-order coherence can also occur in cold ensembles of uncondensed, thermal atoms. However, in thermal atoms the first-order coherence is only maintained over a distance of roughly the deBroglie wavelength, which corresponds to the size of the thermal atom wavepacket. In contrast, a condensate will exhibit long-range coherence, which extends over the entire condensed atom cloud.

To probe the transition from short-range thermal atom coherence to long range condensate coherence, a series of experiments were carried out using the atomic equivalent of a laser beam (see I. Bloch *et al.*, Nature 403 p166 (2000) for more details). The atom laser beam was created by outcoupling atoms from the trapped hyperfine state into an untrapped state which experiences a magnetic field gradient^[The magnetic field gradient arises because the center of the trap is shifted from the magnetic field minimum by gravity, so the untrapped states have a position-dependent Zeeman energy.]. The frequency of the RF required to drive the atoms from the trapped to untrapped states includes the untrapped state Zeeman shift, and therefore depends on the atoms' position. Application of two RF frequencies thus outcouples atoms from two locations; the two outcoupled beams then interfere as they fall away from the cloud under the influence of gravity. The visibility of the interference fringes provides a measure of the first order coherence between the two outcoupled regions of the cloud. By varying the frequency of the RF fields, one can measure the first order coherence as a function of the distance between the two outcoupled regions. As shown in Figure 11.12, the thermal atom coherence dies off quickly with distance, whereas the coherence of the condensate fraction approaches a flat plateau as the distance increases.

<!-- page 279 -->

> FIGURE {fig:11.11} src=../../media/ch11/fig-11-11.png
> caption: By allowing two classically coherent condensates separated by a distance $\Delta R_s$ to expand and interfere, one can observe fringes spaced by $\Delta R \sim \hbar\tau/\Delta R_s m$. Experiments at MIT (c.f. Andrews *et al.*, Science 275, p637 (2000)) observed these fringes. Two BECs, imaged in trap using phase-contrast imaging, were allowed to expand and interfere, producing interference fringes in the time-of-flight absorption image.

## 11.6.2 Spontaneous symmetry breaking

Experimental observations clearly indicate that two independently prepared Bose condensates will interfere with one another. However, for a long time this was a subject of controversy: if the numbers of atoms in the two condensates, $N_1$ and $N_2$, were precisely known, then how could the two clouds have a well-defined relative phase?

<!-- page 280 -->

> FIGURE {fig:11.12} src=../../media/ch11/fig-11-12.png
> caption: Measurement of the spatial coherence of a trapped Bose gas [figure taken from Nature 403 p166 (2000) without permission]. (a) Position-dependent Zeeman shifts are used to outcouple atoms from two regions in the cloud. (b) The outcoupled atoms interfere as they fall away from the cloud, and the visibility of the interference pattern reveals the degree of first-order coherence between the atomic wavefunctions at the two outcoupled positions. (c) The visibility of the interference fringes as a function of distance for four realizations. A true condensate maintains its coherence to long distances (upper two traces), whereas the thermal atom coherence dies off on a length scale set by the deBroglie wavelength (lower two traces).

<!-- page 281 -->

The establishment of a well-defined relative phase comes about through spontaneous symmetry breaking in the measurement process. As an example, suppose that an atom laser beam is outcoupled from each of the two condensates, and interference of the two atom lasers is measured to determine the relative phase of the two condensates. In order to build up statistics necessary to measure the interference pattern, one must measure atoms without knowing which condensate they came from. When one has detected enough atoms $n$ to measure the phase of the interference pattern, one no longer knows the number of atoms remaining in the two condensates, $N_1 - n_1$ and $N_2 - n_2$, such that $n_1 + n_2 = n$. By projecting the relative phase onto the measured value, one introduces number uncertainty between the condensates.

<!-- notes
- Fig. 11.11 stands on page 279 inside the paragraph "To probe the transition…"; its marker is placed after that paragraph. Fig. 11.12 stands on page 280 inside the first paragraph of 11.6.2; its marker is placed after that paragraph.
- Fig. 11.12 is marked in the book as taken from Nature 403 p166 (2000) without permission; caption transcribed as printed.
- Fig. 11.11 caption cites Andrews et al., Science 275, p637 (2000); that paper appeared in 1997 (Science 275, 637 (1997)).
- text-layer.md corrected: "offquickly" and "offon" to "off quickly" and "off on" as the page prints them; "Position- dependent" and "outcou- pled" in the 11.12 caption joined; "con-/densates" split across the page 280 figure joined as "condensates".
- Fig. 11.11 caption writes the spacing with $\tau$ while the figure's own label writes $\hbar t$; kept as printed.
-->

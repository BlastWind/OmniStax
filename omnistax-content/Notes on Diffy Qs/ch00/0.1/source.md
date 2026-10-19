# 0.1 Notes about these notes {sec:notes-section}

:::note [section-notes]
*Note: A section for the instructor.*
:::

This book originated from my class notes for Math 286 at the [University of Illinois at Urbana-Champaign](https://www.math.uiuc.edu/) (UIUC) in Fall 2008 and Spring 2009. It is a first course on differential equations for engineers. Using this book, I also taught Math 285 at UIUC, Math 20D at [University of California, San Diego](https://www.math.ucsd.edu/) (UCSD), and Math 2233 and 4233 at [Oklahoma State University](https://math.okstate.edu/) (OSU). Normally these courses are taught with Edwards and Penney, *Differential Equations and Boundary Value Problems: Computing and Modeling* [EP](cite:EP), or Boyce and DiPrima’s *Elementary Differential Equations and Boundary Value Problems* [BD](cite:BD), and this book aims to be more or less a drop-in replacement. Other books I used as sources of information and inspiration are E.L. Ince’s classic (and inexpensive) *Ordinary Differential Equations* [I](cite:I), Stanley Farlow’s *Differential Equations and Their Applications* [F](cite:F), now available from Dover, Berg and McGregor’s *Elementary Partial Differential Equations* [BM](cite:BM), and William Trench’s free book *Elementary Differential Equations with Boundary Value Problems* [T](cite:T). See the [Further Reading](ref:further-reading#further-reading) chapter at the end of the book.

## Organization

The organization of this book requires, to some degree, that the chapters be covered in order. Later chapters can be dropped. The dependence of the material covered is roughly:

> IMAGE {img:chapterdiagram} src=../../media/chapterdiagram.svg
> alt: A diagram with 'Introduction' at the top with an arrow to 'Chapter 1' then an arrow to 'Chapter 2', then four arrows to 'Chapter 3', 'Chapter 4', 'Chapter 6', and 'Chapter 7'. 'Chapter 3' has an arrow to 'Chapter 8' and a dotted arrow to 'Chapter 4'. 'Chapter 4' has an arrow to 'Chapter 5' and a dotted arrow to 'Chapter 6'. There is also 'Appendix A' with a dotted arrow to 'Chapter 3'.

There are a few references in chapters [4](ref:4#FS-chapter) and [5](ref:5#SL-chapter) to [chapter 3](ref:3#sys-chapter) (some linear algebra), but these references are not essential and can be skimmed over, so [chapter 3](ref:3#sys-chapter) can safely be dropped, while still covering chapters [4](ref:4#FS-chapter) and [5](ref:5#SL-chapter). [Chapter 6](ref:6#LT-chapter) does not depend on [chapter 4](ref:4#FS-chapter) except that the PDEs section [6.5](ref:6.5#laplacepde-section) makes a few references to [chapter 4](ref:4#FS-chapter), although it could, in theory, be covered separately. The more in-depth [appendix A](ref:A#linalg-appendix) on linear algebra can replace the short review [§3.2](ref:3.2#sec-matrix) for a course that combines linear algebra and ODEs.

## Typical courses

Several different courses can be run with the book. There are the two original one-semester courses at UIUC. Both cover ODEs as well as some PDEs. The first course runs at 4 hours a week (Math 286):

[Introduction](ref:0#intro-chapter) ([0.2](ref:0.2#introde-section)), [chapter 1](ref:1#fo-chapter) ([1.1](ref:1.1#integralsols-section)–[1.7](ref:1.7#numer-section)), [chapter 2](ref:2#ho-chapter), [chapter 3](ref:3#sys-chapter), [chapter 4](ref:4#FS-chapter) ([4.1](ref:4.1#bvp-section)–[4.9](ref:4.9#dirich-section)), [chapter 5](ref:5#SL-chapter) (or [6](ref:6#LT-chapter) or [7](ref:7#ps-chapter) or [8](ref:8#nlin-chapter)).

The second course at UIUC runs 3 hours a week (Math 285):

[Introduction](ref:0#intro-chapter) ([0.2](ref:0.2#introde-section)), [chapter 1](ref:1#fo-chapter) ([1.1](ref:1.1#integralsols-section)–[1.7](ref:1.7#numer-section)), [chapter 2](ref:2#ho-chapter), [chapter 4](ref:4#FS-chapter) ([4.1](ref:4.1#bvp-section)–[4.9](ref:4.9#dirich-section)), and maybe [chapter 5](ref:5#SL-chapter), [6](ref:6#LT-chapter), or [7](ref:7#ps-chapter).

A semester-long course at 3 hours a week that does not cover either systems or PDEs will cover, beyond the introduction, [chapter 1](ref:1#fo-chapter), [chapter 2](ref:2#ho-chapter), [chapter 6](ref:6#LT-chapter), and [chapter 7](ref:7#ps-chapter), (with sections skipped as above). On the other hand, a typical course that covers systems will probably need to skip Laplace and power series and cover [chapter 1](ref:1#fo-chapter), [chapter 2](ref:2#ho-chapter), [chapter 3](ref:3#sys-chapter), and [chapter 8](ref:8#nlin-chapter).

If sections need to be skipped in the beginning, a good core of the sections on single ODEs is: [0.2](ref:0.2#introde-section), [1.1](ref:1.1#integralsols-section)–[1.4](ref:1.4#intfactor-section), [1.6](ref:1.6#auteq-section), [2.1](ref:2.1#solinear-section), [2.2](ref:2.2#sec-ccsol), [2.4](ref:2.4#sec-mv)–[2.6](ref:2.6#forcedo-section).

The complete book can be covered at a reasonably fast pace at approximately 76 lectures (without [appendix A](ref:A#linalg-appendix)) or 86 lectures (with [appendix A](ref:A#linalg-appendix) replacing [§3.2](ref:3.2#sec-matrix)). This is not accounting for exams, review, or time spent in a computer lab. A two-quarter or a two-semester course can be easily run with the material. For example (with some sections perhaps strategically skipped):

Semester 1: [Introduction](ref:0#intro-chapter), [chapter 1](ref:1#fo-chapter), [chapter 2](ref:2#ho-chapter), [chapter 6](ref:6#LT-chapter), [chapter 7](ref:7#ps-chapter).
Semester 2: [Chapter 3](ref:3#sys-chapter), [chapter 8](ref:8#nlin-chapter), [chapter 4](ref:4#FS-chapter), [chapter 5](ref:5#SL-chapter).

A combined course on ODEs with linear algebra can run as:

[Introduction](ref:0#intro-chapter), [chapter 1](ref:1#fo-chapter) ([1.1](ref:1.1#integralsols-section)–[1.7](ref:1.7#numer-section)), [chapter 2](ref:2#ho-chapter), [appendix A](ref:A#linalg-appendix), [chapter 3](ref:3#sys-chapter) (w/o [§3.2](ref:3.2#sec-matrix)), possibly [chapter 8](ref:8#nlin-chapter).

The chapter on the Laplace transform ([chapter 6](ref:6#LT-chapter)), the chapter on Sturm–Liouville ([chapter 5](ref:5#SL-chapter)), the chapter on power series ([chapter 7](ref:7#ps-chapter)), and the chapter on nonlinear systems ([chapter 8](ref:8#nlin-chapter)), are more or less interchangeable and can be treated as “topics”. If [chapter 8](ref:8#nlin-chapter) is covered, it may be best to place it right after [chapter 3](ref:3#sys-chapter), and [chapter 5](ref:5#SL-chapter) is best covered right after [chapter 4](ref:4#FS-chapter). If time is short, the first two sections of [chapter 7](ref:7#ps-chapter) make a reasonable self-contained unit.

## Computer resources

The book’s website <https://www.jirka.org/diffyqs/> or <https://jirilebl.github.io/diffyqs/> contains the following resources:

1. Interactive SAGE demos.
2. Online WeBWorK homeworks (using either your own WeBWorK installation or Edfinity) for most sections, customized for this book.
3. The PDFs of the figures used in this book.
4. YouTube videos and corresponding slides for some sections.

I used IODE{index-entry:IODE software} (<https://publish.illinois.edu/iode-diffeq/>) in the UIUC courses. IODE is a free software package that works with Matlab (proprietary) or Octave (free software). The graphs in the book were made with the Genius{index-entry:Genius software} software (see <https://www.jirka.org/genius.html>).

The LaTeX source of the book is also available for possible modification and customization at GitHub (<https://github.com/jirilebl/diffyqs>).

## Acknowledgments

Firstly, I would like to acknowledge Rick Laugesen. I used his handwritten class notes the first time I taught Math 286. My organization of this book through chapter 5, and the choice of material covered, is heavily influenced by his notes. Many examples and computations are taken from his notes. I am also heavily indebted to Rick for all the advice he has given me, not just on teaching Math 286. For spotting errors and other suggestions, I would also like to acknowledge (in no particular order): John P. D’Angelo, Sean Raleigh, Jessica Robinson, Michael Angelini, Leonardo Gomes, Jeff Winegar, Ian Simon, Thomas Wicklund, Eliot Brenner, Sean Robinson, Jannett Susberry, Dana Al-Quadi, Cesar Alvarez, Cem Bagdatlioglu, Nathan Wong, Alison Shive, Shawn White, Wing Yip Ho, Joanne Shin, Gladys Cruz, Jonathan Gomez, Janelle Louie, Navid Froutan, Grace Victorine, Paul Pearson, Jared Teague, Ziad Adwan, Martin Weilandt, Sönmez Şahutoğlu, Pete Peterson, Thomas Gresham, Prentiss Hyde, Jai Welch, Simon Tse, Andrew Browning, James Choi, Dusty Grundmeier, John Marriott, Jim Kruidenier, Barry Conrad, Wesley Snider, Colton Koop, Sarah Morse, Erik Boczko, Asif Shakeel, Chris Peterson, Nicholas Hu, Paul Seeburger, Jonathan McCormick, David Leep, William Meisel, Shishir Agrawal, Tom Wan, Andres Valloud, Martin Irungu, Justin Corvino, Tai-Peng Tsai, Santiago Mendoza Reyes, Glen Pugh, Michael Tran, Heber Farnsworth, Tamás Zsoldos, Mark Mills, George Ballinger, and probably others I have forgotten. Finally, I would like to acknowledge NSF grants DMS-0900885 and DMS-1362337.

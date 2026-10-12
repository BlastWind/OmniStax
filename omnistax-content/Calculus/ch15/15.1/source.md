# Double Integrals over Rectangular Regions

## Learning Objectives {section:learning-objectives}
- Recognize when a function of two variables is integrable over a rectangular region.
- Recognize and use some of the properties of double integrals.
- Evaluate a double integral over a rectangular region by writing it as an iterated integral.
- Use a double integral to calculate the area of a region, volume under a surface, or average value of a function over a plane region.

In this section we investigate double integrals and show how we can use them to find the volume of a solid over a rectangular region in the $xy$-plane. Many of the properties of double integrals are similar to those we have already discussed for single integrals.

## Volumes and Double Integrals
We begin by considering the space above a rectangular region *R*. Consider a continuous function $f(x,y)\ge 0$ of two variables defined on the closed rectangle *R*:

$R=[a,b]\;\times \;[c,d]=\{(x,y)\in {\mathbb{R}}^{2}|a\le x\le b,c\le y\le d\}$  {eq:fs-id1167793856869}

Here $[a,b]\;\times \;[c,d]$ denotes the Cartesian product of the two closed intervals $[a,b]$ and $[c,d].$ It consists of rectangular pairs $(x,y)$ such that $a\le x\le b$ and $c\le y\le d.$ The graph of $f$ represents a surface above the $xy$-plane with equation $z=f(x,y)$ where $z$ is the height of the surface at the point $(x,y).$ Let $S$ be the solid that lies above $R$ and under the graph of $f$ ([ref:CNX_Calc_Figure_15_01_001]). The base of the solid is the rectangle $R$ in the $xy$-plane. We want to find the volume $V$ of the solid $S.$

> FIGURE {fig:CNX_Calc_Figure_15_01_001} src=../../media/CNX_Calc_Figure_15_01_001.jpg
> alt: In xyz space, there is a surface z = f(x, y). On the x axis, the lines denoting a and b are drawn; on the y axis the lines for c and d are drawn. When the surface is projected onto the xy plane, it forms a rectangle with corners (a, c), (a, d), (b, c), and (b, d).
> caption: The graph of $f(x,y)$ over the rectangle $R$ in the $xy$-plane is a curved surface.

We divide the region $R$ into small rectangles ${R}_{ij},$ each with area $\text{Δ}A$ and with sides $\text{Δ}x$ and $\text{Δ}y$ ([ref:CNX_Calc_Figure_15_01_002]). We do this by dividing the interval $[a,b]$ into $m$ subintervals and dividing the interval $[c,d]$ into $n$ subintervals. Hence $\text{Δ}x=\frac{b-a}{m},$ $\text{Δ}y=\frac{d-c}{n},$ and $\text{Δ}A=\text{Δ}x\text{Δ}y.$

> FIGURE {fig:CNX_Calc_Figure_15_01_002} src=../../media/CNX_Calc_Figure_15_01_002.jpg
> alt: In the xy plane, there is a rectangle with corners (a, c), (a, d), (b, c), and (b, d). Between a and b on the x axis lines are drawn from a, x1, x2, …, xi, …, b with distance Delta x between each line; between c and d on the y axis lines are drawn from c, y1, y2, …, yj, …, d with distance Delta y between each line. Among the resulting subrectangles, the one in the second column and third row up has a point marked (x*23, y*23). The rectangle Rij is marked with upper right corner (xi, yj). Within this rectangle the point (x*ij, y*ij) is marked.
> caption: Rectangle $R$ is divided into small rectangles ${R}_{ij},$ each with area $\text{Δ}A.$

The volume of a thin rectangular box above ${R}_{ij}$ is $f({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A,$ where $({x}_{ij}^{*},{y}_{ij}^{*})$ is an arbitrary sample point in each ${R}_{ij}$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_15_01_003} src=../../media/CNX_Calc_Figure_15_01_003.jpg
> alt: In xyz space, there is a surface z = f(x, y). On the x axis, the lines denoting a and b are drawn; on the y axis the lines for c and d are drawn. When the surface is projected onto the xy plane, it forms a rectangle with corners (a, c), (a, d), (b, c), and (b, d). There are additional squares drawn to correspond to changes of Delta x and Delta y. On the surface, a square is marked and its projection onto the plane is marked as Rij. The average value for this small square is f(x*ij, y*ij).
> caption: A thin rectangular box above ${R}_{ij}$ with height $f({x}_{ij}^{*},{y}_{ij}^{*}).$

Using the same idea for all the subrectangles, we obtain an approximate volume of the solid $S$ as $V\approx {\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A}}.$ This sum is known as a {term:double Riemann sum} and can be used to approximate the value of the volume of the solid. Here the double sum means that for each subrectangle we evaluate the function at the chosen point, multiply by the area of each rectangle, and then add all the results.
As we have seen in the single-variable case, we obtain a better approximation to the actual volume if *m* and *n* become larger.

$V=\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}}}A\;\text{or}\;V=\lim_{\text{Δ}x,\text{Δ}y\to 0}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A.}}$  {eq:fs-id1167793627918}

Note that the sum approaches a limit in either case and the limit is the volume of the solid with the base *R*. Now we are ready to define the double integral.

:::note [definition] Definition
The {term:double integral} of the function $f(x,y)$ over the rectangular region $R$ in the $xy$-plane is defined as

$$ {\displaystyle \iint\limits_{R}f(x,y)dA}=\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({x}_{i}^{*},{y}_{j}^{*})\text{Δ}A}}. $$  {eq:fs-id1167793950178}

:::
If $f(x,y)\ge 0,$ then the volume *V* of the solid *S*, which lies above $R$ in the $xy$-plane and under the graph of *f*, is the double integral of the function $f(x,y)$ over the rectangle $R.$ If the function is ever negative, then the double integral can be considered a “signed” volume in a manner similar to the way we defined net signed area in [The Definite Integral](module:m53631).

:::example {ex:fs-id1167794246571} Setting up a Double Integral and Approximating It by Double Sums

:::exercise {fs-id1167794246574} type= 
PROBLEM:
Consider the function $z=f(x,y)=3{x}^{2}-y$ over the rectangular region $R=[0,2]\;\times \;[0,2]$ ([ref:CNX_Calc_Figure_15_01_004]).
a. Set up a double integral for finding the value of the signed volume of the solid *S* that lies above $R$ and “under” the graph of $f.$
b. Divide *R* into four squares with $m=n=2,$ and choose the sample point as the upper right corner point of each square $(1,1),(2,1),(1,2),$ and $(2,2)$ ([ref:CNX_Calc_Figure_15_01_005]) to approximate the signed volume of the solid *S* that lies above $R$ and “under” the graph of $f.$
c. Divide *R* into four squares with $m=n=2,$ and choose the sample point as the midpoint of each square: $(1\text{/}2,1\text{/}2),(3\text{/}2,1\text{/}2),(1\text{/}2,3\text{/}2),\text{and}\;(3\text{/}2,3\text{/}2)$ to approximate the signed volume.

> FIGURE {fig:CNX_Calc_Figure_15_01_004} src=../../media/CNX_Calc_Figure_15_01_004.jpg
> alt: In xyz space, there is a surface z = f(x, y) = 3x2 minus y. The corners of the surface are given as (0, 0, 0), (2, 0, 12), (0, 2, negative 2), and (2, 2, 10). The surface is parabolic along the x axis.
> caption: The function $z=f(x,y)$ graphed over the rectangular region $R=[0,2]\;\times \;[0,2].$

SOLUTION:
a. As we can see, the function $z=f(x,y)=3{x}^{2}-{y}^{}$ is both above and below the plane. To find the signed volume of *S*, we need to divide the region *R* into small rectangles ${R}_{ij},$ each with area $\text{Δ}A$ and with sides $\text{Δ}x$ and $\text{Δ}y,$ and choose $({x}_{ij}^{*},{y}_{ij}^{*})$ as sample points in each ${R}_{ij}.$ Hence, a double integral is set up as

$V={\displaystyle \iint\limits_{R}(3{x}^{2}-y)dA}=\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} [3{({x}_{ij}^{*})}^{2}-{y}_{ij}^{*}]\text{Δ}A}}.$  {eq:fs-id1167793409693}

b. Approximating the signed volume using a Riemann sum with $m=n=2$ we have $\text{Δ}A=\text{Δ}x\text{Δ}y=1\;\times \;1=1.$ Also, the sample points are (1, 1), (2, 1), (1, 2), and (2, 2) as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_15_01_005} src=../../media/CNX_Calc_Figure_15_01_005.jpg
> alt: On the xy plane, the points (1, 1), (1, 2), (2, 1), and (2, 2) are marked, and these form the upper right corners of four squares marked R11, R12, R21, and R22, respectively. Each square has area Delta A = 1.
> caption: Subrectangles for the rectangular region $R=[0,2]\;\times \;[0,2].$

Hence,

$\begin{array}{ll}V & =\sum_{i=1}^{2} \sum_{j=1}^{2} f({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A \\ & =\sum_{i=1}^{2} (f({x}_{i1}^{*},{y}_{i1}^{*})+f({x}_{i2}^{*},{y}_{i2}^{*}))\text{Δ}A \\ & =f({x}_{11}^{*},{y}_{11}^{*})\text{Δ}A+f({x}_{21}^{*},{y}_{21}^{*})\text{Δ}A+f({x}_{12}^{*},{y}_{12}^{*})\text{Δ}A+f({x}_{22}^{*},{y}_{22}^{*})\text{Δ}A \\ & =f(1,1)(1)+f(2,1)(1)+f(1,2)(1)+f(2,2)(1) \\ & =(3-1)(1)+(12-1)(1)+(3-2)(1)+(12-2)(1) \\ & =2+11+1+10=24\end{array}$  {eq:fs-id1167793366494}

c. Approximating the signed volume using a Riemann sum with $m=n=2,$ we have $\text{Δ}A=\text{Δ}x\text{Δ}y=1\;\times \;1=1.$ In this case the sample points are (1/2, 1/2), (3/2, 1/2), (1/2, 3/2),
and (3/2, 3/2).

Hence

$\begin{array}{ll}V & =\sum_{i=1}^{2} \sum_{j=1}^{2} f({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A \\ & =f({x}_{11}^{*},{y}_{11}^{*})\text{Δ}A+f({x}_{21}^{*},{y}_{21}^{*})\text{Δ}A+f({x}_{12}^{*},{y}_{12}^{*})\text{Δ}A+f({x}_{22}^{*},{y}_{22}^{*})\text{Δ}A \\ & =f(\frac{1}{2},\frac{1}{2})(1)+f(\frac{3}{2},\frac{1}{2})(1)+f(\frac{1}{2},\frac{3}{2})(1)+f(\frac{3}{2},\frac{3}{2})(1) \\ & =(\frac{3}{4}-\frac{1}{2})(1)+(\frac{27}{4}-\frac{1}{2})(1)+(\frac{3}{4}-\frac{3}{2})(1)+(\frac{27}{4}-\frac{3}{2})(1) \\ & =\frac{1}{4}+\frac{25}{4}+(-\frac{3}{4})+\frac{21}{4}=\frac{44}{4}=11\end{array}$  {eq:fs-id1167793912028}

COMMENTARY: Analysis
Notice that the approximate answers differ due to the choices of the sample points. In either case, we are introducing some error because we are using only a few sample points. Thus, we need to investigate how we can achieve an accurate answer.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794324425} type= 
PROBLEM:
Use the same function $z=f(x,y)=3{x}^{2}-{y}^{}$ over the rectangular region $R=[0,2]\;\times \;[0,2].$
Divide *R* into the same four squares with $m=n=2,$ and choose the sample points as the upper left corner point of each square $(0,1),(1,1),(0,2),$ and $(1,2)$ ([ref:CNX_Calc_Figure_15_01_005]) to approximate the signed volume of the solid *S* that lies above $R$ and “under” the graph of $f.$
SOLUTION:
$V={\displaystyle \sum_{i=1}^{2} {\displaystyle \sum_{j=1}^{2} f({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A}}=0$
COMMENTARY: Hint
Follow the steps of the previous example.
:::
:::
Note that we developed the concept of double integral using a rectangular region *R*. This concept can be extended to any general region. However, when a region is not rectangular, the subrectangles may not all fit perfectly into *R*, particularly if the base area is curved. We examine this situation in more detail in the next section, where we study regions that are not always rectangular and subrectangles may not fit perfectly in the region *R*. Also, the heights may not be exact if the surface $z=f(x,y)$ is curved. However, the errors on the sides and the height where the pieces may not fit perfectly within the solid *S* approach 0 as *m* and *n* approach infinity. Also, the double integral of the function $z=f(x,y)$ exists provided that the function $f$ is not too discontinuous. If the function is bounded and continuous over *R* except on a finite number of smooth curves, then the double integral exists and we say that $f$ is integrable over *R*.
Since $\text{Δ}A=\text{Δ}x\text{Δ}y=\text{Δ}y\text{Δ}x,$ we can express $dA$ as $dx\;dy$ or $dy\;dx.$ This means that, when we are using rectangular coordinates, the double integral over a region $R$ denoted by ${\displaystyle \iint\limits_{R}f(x,y)d}A$ can be written as ${\displaystyle \iint\limits_{R}f(x,y)d}x\;dy$ or ${\displaystyle \iint\limits_{R}f(x,y)d}y\;dx.$
Now let’s list some of the properties that can be helpful to compute double integrals.

## Properties of Double Integrals
The properties of double integrals are very helpful when computing them or otherwise working with them. We list here six properties of double integrals. Properties 1 and 2 are referred to as the linearity of the integral, property 3 is the additivity of the integral, property 4 is the monotonicity of the integral, and property 5 is used to find the bounds of the integral. Property 6 is used if $f(x,y)$ is a product of two functions $g(x)$ and $h(y).$

:::note [theorem] Properties of Double Integrals
Assume that the functions $f(x,y)$ and $g(x,y)$ are integrable over the rectangular region *R*; *S* and *T* are subregions of *R*; and assume that *m* and *M* are real numbers.
1. The sum $f(x,y)+g(x,y)$ is integrable and

${\displaystyle \iint\limits_{R}[f(x,y)+g(x,y)]dA=}{\displaystyle \iint\limits_{R}f(x,y)dA+}{\displaystyle \iint\limits_{R}g(x,y)dA.}$  {eq:fs-id1167794005597}

2. If *c* is a constant, then $cf(x,y)$ is integrable and

${\displaystyle \iint\limits_{R}cf(x,y)dA=c}{\displaystyle \iint\limits_{R}f(x,y)dA.}$  {eq:fs-id1167793930163}

3. If $R=S\cup T$ and $S\cap T=\emptyset$ except an overlap on the boundaries, then

${\displaystyle \iint\limits_{R}f(x,y)dA=}{\displaystyle \iint\limits_{S}f(x,y)dA+{\displaystyle \iint\limits_{T}f(x,y)dA}.}$  {eq:fs-id1167793442461}

4. If $f(x,y)\ge g(x,y)$ for $(x,y)$ in $R,$ then

${\displaystyle \iint\limits_{R}f(x,y)dA\ge}{\displaystyle \iint\limits_{R}g(x,y)dA.}$  {eq:fs-id1167793637809}

5. If $m\le f(x,y)\le M,$ then

$m\;\times \;A(R)\le {\displaystyle \iint\limits_{R}f(x,y)dA\le M\;\times \;A(R)}.$  {eq:fs-id1167793281561}

6. In the case where $f(x,y)$ can be factored as a product of a function $g(x)$ of $x$ only and a function $h(y)$ of $y$ only, then over the region $R=\{(x,y)|a\le x\le b,c\le y\le d\},$ the double integral can be written as

${\displaystyle \iint\limits_{R}f(x,y)dA}=({\displaystyle \int_{a}^{b}g(x)dx})({\displaystyle \int_{c}^{d}h(y)dy}).$  {eq:fs-id1167793540011}

:::
These properties are used in the evaluation of double integrals, as we will see later. We will become skilled in using these properties once we become familiar with the computational tools of double integrals. So let’s get to that now.

## Iterated Integrals
So far, we have seen how to set up a double integral and how to obtain an approximate value for it. We can also imagine that evaluating double integrals by using the definition can be a very lengthy process if we choose larger values for $m$ and $n.$ Therefore, we need a practical and convenient technique for computing double integrals. In other words, we need to learn how to compute double integrals without employing the definition that uses limits and double sums.
The basic idea is that the evaluation becomes easier if we can break a double integral into single integrals by integrating first with respect to one variable and then with respect to the other. The key tool we need is called an iterated integral.

:::note [definition] Definition
Assume $a,b,c,$ and $d$ are real numbers. We define an {term:iterated integral} for a function $f(x,y)$ over the rectangular region $R$ $=[a,b]\;\times \;[c,d]$ as
a. 

$$ {\displaystyle \int_{a}^{b} \;{\displaystyle \int_{c}^{d} f(x,y)dy\;dx}}={\displaystyle \int_{a}^{b} [{\displaystyle \int_{c}^{d} f(x,y)dy}]}dx $$  {eq:fs-id1167793432466}

b. 

$$ {\displaystyle \int_{c}^{d} \;{\displaystyle \int_{a}^{b} f(x,y)dx\;dy}}={\displaystyle \int_{c}^{d} [{\displaystyle \int_{a}^{b} f(x,y)dx}]}dy. $$  {eq:fs-id1167793424345}

:::
The notation ${\displaystyle \int_{a}^{b} [{\displaystyle \int_{c}^{d} f(x,y)dy}]}dx$ means that we integrate $f(x,y)$ with respect to *y* while holding *x* constant. Similarly, the notation ${\displaystyle \int_{c}^{d} [{\displaystyle \int_{a}^{b} f(x,y)dx}]}dy$ means that we integrate $f(x,y)$ with respect to *x* while holding *y* constant. The fact that double integrals can be split into iterated integrals is expressed in Fubini’s theorem. Think of this theorem as an essential tool for evaluating double integrals.

:::note [theorem] Fubini’s Theorem
Suppose that $f(x,y)$ is a function of two variables that is continuous over a rectangular region $R=\{(x,y)\in {\mathbb{R}}^{2}|a\le x\le b,\text{c}\le \text{y}\le \text{d}\}.$ Then we see from [ref:CNX_Calc_Figure_15_01_006] that the double integral of $f$ over the region equals an iterated integral,

${\displaystyle \iint\limits_{R}f(x,y)dA=}{\displaystyle \iint\limits_{R}f(x,y)dx\;dy}={\displaystyle \int_{a}^{b} \;{\displaystyle \int_{c}^{d} f(x,y)dy\;dx}}={\displaystyle \int_{c}^{d} \;{\displaystyle \int_{a}^{b} f(x,y)dx\;dy}}.$  {eq:fs-id1167793886697}

More generally, {term:Fubini’s theorem} is true if $f$ is bounded on $R$ and $f$ is discontinuous only on a finite number of continuous curves. In other words, $f$ has to be integrable over $R.$
:::

> FIGURE {fig:CNX_Calc_Figure_15_01_006} src=../../media/CNX_Calc_Figure_15_01_006.jpg
> alt: This figure consists of two figures marked a and b. In figure a, in xyz space, a surface is shown that is given by the function f(x, y). A point x is chosen on the x axis, and at this point, it it written fix x. From this point, a plane is projected perpendicular to the xy plane along the line with value x. This plane is marked Area A(x), and the entire space under the surface is marked V. Similarly, in figure b, in xyz space, a surface is shown that is given by the function f(x, y). A point y is chosen on the y axis, and at this point, it it written fix y. From this point, a plane is projected perpendicular to the xy plane along the line with value y. This plane is marked Area A(y), and the entire space under the surface is marked V.
> caption: (a) Integrating first with respect to $y$ and then with respect to $x$ to find the area $A(x)$ and then the volume *V*; (b) integrating first with respect to $x$ and then with respect to $y$ to find the area $A(y)$ and then the volume *V*.

:::example {ex:fs-id1167793593005} Using Fubini’s Theorem

:::exercise {fs-id1167793593007} type= 
PROBLEM:
Use Fubini’s theorem to compute the double integral ${\displaystyle \iint\limits_{R}f(x,y)dA}$ where $f(x,y)=x$ and $R=[0,2]\;\times \;[0,1].$
SOLUTION:
Fubini’s theorem offers an easier way to evaluate the double integral by the use of an iterated integral. Note how the boundary values of the region *R* become the upper and lower limits of integration.

$\begin{array}{rl}{\displaystyle \iint\limits_{R}f(x,y)dA} & ={\displaystyle \iint\limits_{R}f(x,y)dx\;dy} \\ & ={\displaystyle \int_{y=0}^{y=1}{\displaystyle \int_{x=0}^{x=2}x\;dx\;dy}} \\ & ={\displaystyle \int_{y=0}^{y=1}[{\frac{{x}^{2}}{2}|}_{x=0}^{x=2}]}dy \\ & ={\displaystyle \int_{y=0}^{y=1}2dy={2y|}_{y=0}^{y=1}=2}.\end{array}$  {eq:fs-id1167794076344}

:::
:::
The double integration in this example is simple enough to use Fubini’s theorem directly, allowing us to convert a double integral into an iterated integral. Consequently, we are now ready to convert all double integrals to iterated integrals and demonstrate how the properties listed earlier can help us evaluate double integrals when the function $f(x,y)$ is more complex. Note that the order of integration can be changed (see [ref:fs-id1167793627885]).

:::example {ex:fs-id1167793255662} Illustrating Properties i and ii

:::exercise {fs-id1167793255664} type= 
PROBLEM:
Evaluate the double integral ${\displaystyle \iint\limits_{R}(xy-3x{y}^{2})}dA$ where $R=\{(x,y)|0\le x\le 2,1\le y\le 2\}.$
SOLUTION:
This function has two pieces: one piece is $xy$ and the other is $3x{y}^{2}.$ Also, the second piece has a constant $3.$ Notice how we use properties i and ii to help evaluate the double integral.

$\begin{array}{llll} \\ \\ \\ \\ \;{\displaystyle \iint\limits_{R}(xy-3x{y}^{2})}dA & & & \\ ={\displaystyle \iint\limits_{R}xy}\;dA+{\displaystyle \iint\limits_{R}(−3x{y}^{2})}dA & & & \text{Property i: Integral of a sum is the sum of the integrals.} \\ ={\displaystyle \int_{y=1}^{y=2}{\displaystyle \int_{x=0}^{x=2}xy\;dx\;dy}}-{\displaystyle \int_{y=1}^{y=2}{\displaystyle \int_{x=0}^{x=2}3x{y}^{2}dx\;dy}} & & & \text{Convert double integrals to iterated integrals.} \\ ={\displaystyle \int_{y=1}^{y=2}{(\frac{{x}^{2}}{2}y)|}_{x=0}^{x=2}dy}-3{\displaystyle \int_{y=1}^{y=2}{(\frac{{x}^{2}}{2}{y}^{2})|}_{x=0}^{x=2}dy} & & & \text{Integrate with respect to}\;x,\text{holding}\;y\;\text{constant.} \\ ={\displaystyle \int_{y=1}^{y=2}2y\;dy}-{\displaystyle \int_{y=1}^{y=2}6{y}^{2}dy} & & & \text{Property ii: Placing the constant before the integral.} \\ ={\displaystyle 2\int_{1}^{2}y\;dy}-6{\displaystyle \int_{1}^{2}{y}^{2}dy} & & & \text{Integrate with respect to}\;y. \\ ={2\frac{{y}^{2}}{2}|}_{1}^{2}-{6\frac{{y}^{3}}{3}|}_{1}^{2} & & & \\ ={{y}^{2}|}_{1}^{2}-{2{y}^{3}|}_{1}^{2} & & & \\ =(4-1)-2(8-1) & & & \\ =3-2(7)=3-14=−11.\end{array}$  {eq:fs-id1167793610538}

:::
:::

:::example {ex:fs-id1167793294171} Illustrating Property v.

:::exercise {fs-id1167793294173} type= 
PROBLEM:
Over the region $R=\{(x,y)|1\le x\le 3,1\le y\le 2\},$ we have $2\le {x}^{2}+{y}^{2}\le 13.$ Find a lower and an upper bound for the integral ${\displaystyle \iint\limits_{R}({x}^{2}+{y}^{2})}dA.$
SOLUTION:
For a lower bound, integrate the constant function 2 over the region $R.$ For an upper bound, integrate the constant function 13 over the region $R.$

$\begin{array}{rll}{\displaystyle \int_{1}^{2}{\displaystyle \int_{1}^{3}2dx\;dy}} & = & {\displaystyle \int_{1}^{2}[{2x|}_{1}^{3}]}dy={\displaystyle \int_{1}^{2}2(2)dy}={4y|}_{1}^{2}=4(2-1)=4 \\ {\displaystyle \int_{1}^{2}{\displaystyle \int_{1}^{3}13dx\;dy}} & = & {\displaystyle \int_{1}^{2}[{13x|}_{1}^{3}]}dy={\displaystyle \int_{1}^{2}13(2)dy}={26y|}_{1}^{2}=26(2-1)=26.\end{array}$  {eq:fs-id1167794200492}

Hence, we obtain $4\le {\displaystyle \iint\limits_{R}({x}^{2}+{y}^{2})}dA\le 26.$
:::
:::

:::example {ex:fs-id1167793927722} Illustrating Property vi

:::exercise {fs-id1167793927724} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \iint\limits_{R}{e}^{y}\text{cos}\;x\;dA}$ over the region $R=\{(x,y)|0\le x\le \frac{\pi}{2},0\le y\le 1\}.$
SOLUTION:
This is a great example for property vi because the function $f(x,y)$ is clearly the product of two single-variable functions ${e}^{y}$ and $\text{cos}\;x.$ Thus we can split the integral into two parts and then integrate each one as a single-variable integration problem.

$\begin{array}{rl}{\displaystyle \iint\limits_{R}{e}^{y}\text{cos}\;x\;dA} & ={\displaystyle \int_{0}^{1}{\displaystyle \int_{0}^{\pi \text{/}2}{e}^{y}\text{cos}\;x\;dx\;dy}} \\ & =({\displaystyle \int_{0}^{1}{e}^{y}dy})({\displaystyle \int_{0}^{\pi \text{/}2}\text{cos}\;x\;dx}) \\ & =({{e}^{y}|}_{0}^{1})({\text{sin}\;x|}_{0}^{\pi \text{/}2}) \\ & =e-1.\end{array}$  {eq:fs-id1167793609237}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793570084} type= 
PROBLEM:
a. Use the properties of the double integral and Fubini’s theorem to evaluate the integral

${\displaystyle \int_{0}^{1}{\displaystyle \int_{−1}^{3}(3-x+4y)dy\;dx}}.$  {eq:fs-id1167793617924}

b. Show that $0\le {\displaystyle \iint\limits_{R}\text{sin}\;\pi x\;\text{cos}\;\pi y\;dA\le \frac{1}{32}}$ where $R=[0,\frac{1}{4}]\times [\frac{1}{4},\frac{1}{2}].$
SOLUTION:
a. 26 b. Answers may vary.
COMMENTARY: Hint
Use properties i. and ii. and evaluate the iterated integral, and then use property v.
:::
:::
As we mentioned before, when we are using rectangular coordinates, the double integral over a region $R$ denoted by ${\displaystyle \iint\limits_{R}f(x,y)dA}$ can be written as ${\displaystyle \iint\limits_{R}f(x,y)d}x\;dy$ or ${\displaystyle \iint\limits_{R}f(x,y)d}y\;dx.$ The next example shows that the results are the same regardless of which order of integration we choose.

:::example {ex:fs-id1167793290970} Evaluating an Iterated Integral in Two Ways

:::exercise {fs-id1167793290972} type= 
PROBLEM:
Let’s return to the function $f(x,y)=3{x}^{2}-y$ from [ref:fs-id1167794246571], this time over the rectangular region $R=[0,2]\;\times \;[0,3].$ Use Fubini’s theorem to evaluate ${\displaystyle \iint\limits_{R}f(x,y)dA}$ in two different ways:
a. First integrate with respect to *y* and then with respect to *x*;
b. First integrate with respect to *x* and then with respect to *y*.
SOLUTION:
[ref:CNX_Calc_Figure_15_01_006] shows how the calculation works in two different ways.
a. First integrate with respect to *y* and then integrate with respect to *x*:

$\begin{array}{rl}{\displaystyle \iint\limits_{R}f(x,y)dA} & ={\displaystyle \int_{x=0}^{x=2}{\displaystyle \int_{y=0}^{y=3}(3{x}^{2}-y)dy\;dx}} \\ & ={\displaystyle \int_{x=0}^{x=2}({\displaystyle \int_{y=0}^{y=3} (3{x}^{2}-y)dy})}dx={\displaystyle \int_{x=0}^{x=2}[{3{x}^{2}y-\frac{{y}^{2}}{2}|}_{y=0}^{y=3}]dx} \\ & ={\displaystyle \int_{x=0}^{x=2}(9{x}^{2}-\frac{9}{2})}dx={3{x}^{3}-\frac{9}{2}x|}_{x=0}^{x=2}=15.\end{array}$  {eq:fs-id1167793638844}

b. First integrate with respect to *x* and then integrate with respect to *y*:

$\begin{array}{rl}{\displaystyle \iint\limits_{R}f(x,y)dA} & ={\displaystyle \int_{y=0}^{y=3}{\displaystyle \int_{x=0}^{x=2}(3{x}^{2}-y)dx\;dy}} \\ & ={\displaystyle \int_{y=0}^{y=3}({\displaystyle \int_{x=0}^{x=2}(3{x}^{2}-y)dx})}dy={\displaystyle \int_{y=0}^{y=3}[{{x}^{3}-xy|}_{x=0}^{x=2}]dy} \\ & ={\displaystyle \int_{y=0}^{y=3}(8-2y)dy}={8y-{y}^{2}|}_{y=0}^{y=3}=15.\end{array}$  {eq:fs-id1167793473250}

COMMENTARY: Analysis
With either order of integration, the double integral gives us an answer of 15. We might wish to interpret this answer as a volume in cubic units of the solid $S$ below the function $f(x,y)=3{x}^{2}-y$ over the region $R=[0,2]\;\times \;[0,3].$ However, remember that the interpretation of a double integral as a (non-signed) volume works only when the integrand $f$ is a nonnegative function over the base region $R.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794160224} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{y=−3}^{y=2}{\displaystyle \int_{x=3}^{x=5}(2-3{x}^{2}+{y}^{2})dx\;dy}}.$
SOLUTION:
$-\frac{1340}{3}$
COMMENTARY: Hint
Use Fubini’s theorem.
:::
:::
In the next example we see that it can actually be beneficial to switch the order of integration to make the computation easier. We will come back to this idea several times in this chapter.

:::example {ex:fs-id1167793627885} Switching the Order of Integration

:::exercise {fs-id1167793451018} type= 
PROBLEM:
Consider the double integral ${\displaystyle \iint\limits_{R}x\;\text{sin}(xy)dA}$ over the region $R=\{(x,y)|0\le x\le \pi ,1\le y\le 2\}$ ([ref:CNX_Calc_Figure_15_01_010]).
a. Express the double integral in two different ways.
b. Analyze whether evaluating the double integral in one way is easier than the other and why.
c. Evaluate the integral.

> FIGURE {fig:CNX_Calc_Figure_15_01_010} src=../../media/CNX_Calc_Figure_15_01_007.jpg
> alt: The function z = f(x, y) = x sin(xy) is shown, which starts with z = 0 along the x axis. Then, the function increases roughly as a normal sin function would, but then skews a bit and decreases as x increases after pi/2.
> caption: The function $z=f(x,y)=x\;\text{sin}(xy)$ over the rectangular region $R=[0,\pi ]\;\times \;[1,2].$

SOLUTION:
a. We can express ${\displaystyle \iint\limits_{R}x\;\text{sin}(xy)dA}$ in the following two ways: first by integrating with respect to $y$ and then with respect to $x;$ second by integrating with respect to $x$ and then with respect to $y.$

$\begin{array}{llll} \\ \\ \\ \\ \;{\displaystyle \iint\limits_{R}x\;\text{sin}(xy)dA} & & & \\ ={\displaystyle \int_{x=0}^{x=\pi} \;{\displaystyle \int_{y=1}^{y=2} x\;\text{sin}(xy)dy\;dx}} & & & \text{Integrate first with respect to}\;y. \\ ={\displaystyle \int_{y=1}^{y=2} \;{\displaystyle \int_{x=0}^{x=\pi} x\;\text{sin}(xy)dx\;dy}} & & & \text{Integrate first with respect to}\;x.\end{array}$  {eq:fs-id1167794168729}

b. If we want to integrate with respect to *y* first and then integrate with respect to $x,$ we see that we can use the substitution $u=xy,$ which gives $du=x\;dy.$ Hence the inner integral is simply ${\displaystyle \int \text{sin}\;u}\;du$ and we can change the limits to be functions of *x*,

${\displaystyle \iint\limits_{R}x\;\text{sin}(xy)dA}={\displaystyle \int_{x=0}^{x=\pi} \;{\displaystyle \int_{y=1}^{y=2} x\;\text{sin}(xy)dy\;dx}}={\displaystyle \int_{x=0}^{x=\pi} [{\displaystyle \int_{u=x}^{u=2x} \text{sin}(u)du}]}dx.$  {eq:fs-id1167793618915}

However, integrating with respect to $x$ first and then integrating with respect to $y$ requires integration by parts for the inner integral, with $u=x$ and $dv=\text{sin}(xy)dx.$

Then $du=dx$ and $v=-\frac{\text{cos}(xy)}{y},$ so

${\displaystyle \iint\limits_{R}x\;\text{sin}(xy)dA}={\displaystyle \int_{y=1}^{y=2} \;{\displaystyle \int_{x=0}^{x=\pi} x\;\text{sin}(xy)dx\;dy}}={\displaystyle \int_{y=1}^{y=2} [-{\frac{x\;\text{cos}(xy)}{y}|}_{x=0}^{x=\pi}+\frac{1}{y}{\displaystyle \int_{x=0}^{x=\pi} \text{cos}(xy)dx}]}dy.$  {eq:fs-id1167793630372}

Since the evaluation is getting complicated, we will only do the computation that is easier to do, which is clearly the first method.
c. Evaluate the double integral using the easier way.

$\begin{array}{rl}{\displaystyle \iint\limits_{R}x\;\text{sin}(xy)dA} & ={\displaystyle \int_{x=0}^{x=\pi} \;{\displaystyle \int_{y=1}^{y=2} x\;\text{sin}(xy)dy\;dx}} \\ & ={\displaystyle \int_{x=0}^{x=\pi} [{\displaystyle \int_{u=x}^{u=2x} \text{sin}(u)du}]}dx={\displaystyle \int_{x=0}^{x=\pi} [{\text{−}\text{cos}\;u|}_{u=x}^{u=2x}]}dx={\displaystyle \int_{x=0}^{x=\pi} (\text{−}\text{cos}\;2x+\text{cos}\;x)dx} \\ & ={-\frac{1}{2}\text{sin}\;2x+\text{sin}\;x|}_{x=0}^{x=\pi}=0.\end{array}$  {eq:fs-id1167793928561}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793374983} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \iint\limits_{R}x{e}^{xy}dA}$ where $R=[0,1]\;\times \;[0,\text{ln}\;5].$
SOLUTION:
$\frac{4-\text{ln}\;5}{\text{ln}\;5}$
COMMENTARY: Hint
Integrate with respect to $y$ first.
:::
:::

## Applications of Double Integrals
Double integrals are very useful for finding the area of a region bounded by curves of functions. We describe this situation in more detail in the next section. However, if the region is a rectangular shape, we can find its area by integrating the constant function $f(x,y)=1$ over the region $R.$

:::note [definition] Definition
The area of the region $R$ is given by $A(R)={\displaystyle \iint\limits_{R}1dA}.$
:::
This definition makes sense because using $f(x,y)=1$ and evaluating the integral make it a product of length and width. Let’s check this formula with an example and see how this works.

:::example {ex:fs-id1167793454022} Finding Area Using a Double Integral

:::exercise {fs-id1167793454024} type= 
PROBLEM:
Find the area of the region $R=\{(x,y)|0\le x\le 3,0\le y\le 2\}$ by using a double integral, that is, by integrating 1 over the region $R.$
SOLUTION:
The region is rectangular with length 3 and width 2, so we know that the area is 6. We get the same answer when we use a double integral:

$A(R)={\displaystyle \int_{0}^{2} \;{\displaystyle \int_{0}^{3} 1dx\;dy}}={\displaystyle \int_{0}^{2} [{x|}_{0}^{3}]}dy={\displaystyle \int_{0}^{2} 3dy=3{\displaystyle \int_{0}^{2} dy=3{y|}_{0}^{2}}}=3(2)=6.$  {eq:fs-id1167793641944}

:::
:::
We have already seen how double integrals can be used to find the volume of a solid bounded above by a function $f(x,y)$ over a region $R$ provided $f(x,y)\ge 0$ for all $(x,y)$ in $R.$ Here is another example to illustrate this concept.

:::example {ex:fs-id1167793925030} Volume of an Elliptic Paraboloid

:::exercise {fs-id1167793925032} type= 
PROBLEM:
Find the volume $V$ of the solid $S$ that is bounded by the elliptic paraboloid $2{x}^{2}+{y}^{2}+z=27,$ the planes $x=3$ and $y=3,$ and the three coordinate planes.
SOLUTION:
First notice the graph of the surface $z=27-2{x}^{2}-{y}^{2}$ in [ref:CNX_Calc_Figure_15_01_007](a) and above the square region ${R}_{1}=[−3,3]\;\times \;[−3,3].$ However, we need the volume of the solid bounded by the elliptic paraboloid $2{x}^{2}+{y}^{2}+z=27,$ the planes $x=3$ and $y=3,$ and the three coordinate planes.

> FIGURE {fig:CNX_Calc_Figure_15_01_007} src=../../media/CNX_Calc_Figure_15_01_008.jpg
> alt: This figure consists of two figures marked a and b. In figure a, in xyz space, the surface z = 20 minus 2x2 minus y2 is shown for x and y from negative 3 to positive 3. The shape looks like a sheet that has been pinned at the corners and forced up gently in the middle. In figure b, in xyz space, the surface z = 20 minus 2x2 minus y2 is shown for x and y from 0 to positive 3. The surface is the upper corner of the figure from part a, and below the surface is marked the solid S.
> caption: (a) The surface $z=27-2{x}^{2}-{y}^{2}$ above the square region ${R}_{1}=[−3,3]\;\times \;[−3,3].$ (b) The solid *S* lies under the surface $z=27-2{x}^{2}-{y}^{2}$ above the square region ${R}_{2}=[0,3]\;\times \;[0,3].$

Now let’s look at the graph of the surface in [ref:CNX_Calc_Figure_15_01_007](b). We determine the volume *V* by evaluating the double integral over ${R}_{2}\text{:}$

$\begin{array}{rllll}V & ={\displaystyle \iint\limits_{R}z\;dA=}{\displaystyle \iint\limits_{R}(27-2{x}^{2}-{y}^{2})dA} & & & \\ & ={\displaystyle \int_{y=0}^{y=3} \;{\displaystyle \int_{x=0}^{x=3} (27-2{x}^{2}-{y}^{2})dx\;dy}} & & & \text{Convert to iterated integral.} \\ & ={\displaystyle \int_{y=0}^{y=3} {[27x-\frac{2}{3}{x}^{3}-{y}^{2}x]|}_{x=0}^{x=3}}dy & & & \text{Integrate with respect to}\;x. \\ & ={\displaystyle \int_{y=0}^{y=3} (63-3{y}^{2})dy}=63y-{{y}^{3}|}_{y=0}^{y=3}=162. & & & \end{array}$  {eq:fs-id1167793640059}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793421230} type= 
PROBLEM:
Find the volume of the solid bounded above by the graph of $f(x,y)=xy\;\text{sin}({x}^{2}y)$ and below by the $xy$-plane on the rectangular region $R=[0,1]\;\times \;[0,\pi ].$
SOLUTION:
$\frac{\pi}{2}$
COMMENTARY: Hint
Graph the function, set up the integral, and use an iterated integral.
:::
:::
Recall that we defined the average value of a function of one variable on an interval $[a,b]$ as

${f}_{\text{ave}}=\frac{1}{b-a}{\displaystyle \int_{a}^{b} f(x)dx}.$  {eq:fs-id1167793462425}

Similarly, we can define the average value of a function of two variables over a region *R*. The main difference is that we divide by an area instead of the width of an interval.

:::note [definition] Definition
The average value of a function of two variables over a region $R$ is

$$ {f}_{\text{ave}}=\frac{1}{\text{Area}\;R}{\displaystyle \iint\limits_{R}f(x,y)dA.} $$  {eq:fs-id1167794076409}

:::
In the next example we find the average value of a function over a rectangular region. This is a good example of obtaining useful information for an integration by making individual measurements over a grid, instead of trying to find an algebraic expression for a function.

:::example {ex:fs-id1167793638502} Calculating Average Storm Rainfall

:::exercise {fs-id1167793638505} type= 
PROBLEM:
The weather map in [ref:CNX_Calc_Figure_15_01_008] shows an unusually moist storm system associated with the remnants of Hurricane Karl, which dumped 4–8 inches (100–200 mm) of rain in some parts of the Midwest on September 22–23, 2010. The area of rainfall measured 300 miles east to west and 250 miles north to south. Estimate the average rainfall over the entire area in those two days.

> FIGURE {fig:CNX_Calc_Figure_15_01_008} src=../../media/CNX_Calc_Figure_15_01_009.jpg
> alt: A map of Wisconsin and Minnesota that shows many cities with numbers affixed to them. The highest numbers come in a narrow band, and the map is colored accordingly. The map effectively looks like a contour map, but instead of elevations, it uses these numbers.
> caption: Effects of Hurricane Karl, which dumped 4–8 inches (100–200 mm) of rain in some parts of southwest Wisconsin, southern Minnesota, and southeast South Dakota over a span of 300 miles east to west and 250 miles north to south.

SOLUTION:
Place the origin at the southwest corner of the map so that all the values can be considered as being in the first quadrant and hence all are positive. Now divide the entire map into six rectangles $(m=3\;\text{and}\;n=2),$ as shown in [ref:CNX_Calc_Figure_15_01_009]. Assume $f(x,y)$ denotes the storm rainfall in inches at a point approximately $x$ miles to the east of the origin and *y* miles to the north of the origin. Let $R$ represent the entire area of $250\;\times \;300=75000$ square miles. Then the area of each subrectangle is

$\text{Δ}A=\frac{1}{6}(75,000)=12,500.$  {eq:fs-id1167793626922}

Assume $({x}_{ij}^{*},{y}_{ij}^{*})$ are approximately the midpoints of each subrectangle ${R}_{ij}.$ Note the color-coded region at each of these points, and estimate the rainfall. The rainfall at each of these points can be estimated as:
At $(x{*}_{11},y{*}_{11})$ the rainfall is 0.08.
At $(x{*}_{21},y{*}_{21})$ the rainfall is 0.08.
At $(x{*}_{31},y{*}_{31})$ the rainfall is 0.01.
At $(x{*}_{12},y{*}_{12})$ the rainfall is 1.70.
At $(x{*}_{22},y{*}_{22})$ the rainfall is 1.74.
At $(x{*}_{32},y{*}_{32})$ the rainfall is 3.00.

> FIGURE {fig:CNX_Calc_Figure_15_01_009} src=../../media/CNX_Calc_Figure_15_01_011.jpg
> alt: Another version of the previous storm map, but this time with lines drawn for x = 100, 200, and 300 and for y = 125 and 250. There is a dot in the center of each of the resulting rectangles.
> caption: Storm rainfall with rectangular axes and showing the midpoints of each subrectangle.

According to our definition, the average storm rainfall in the entire area during those two days was

$\begin{array}{ll}{f}_{\text{ave}} & =\frac{1}{\text{Area}\;R}\iint\limits_{R}f(x,y)dx\;dy=\frac{1}{75000}\iint\limits_{R}f(x,y)dx\;dy \\ & \approx \frac{1}{75,000}\sum_{i=1}^{3} \sum_{j=1}^{2} f({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A \\ & \approx \frac{1}{75,000}[f({x}_{11}^{*},{y}_{11}^{*})\text{Δ}A+f({x}_{21}^{*},{y}_{21}^{*})\text{Δ}A \\ & \;+f({x}_{31}^{*},{y}_{31}^{*})\text{Δ}A+f({x}_{12}^{*},{y}_{12}^{*})\text{Δ}A+f({x}_{22}^{*},{y}_{22}^{*})\text{Δ}A+f({x}_{32}^{*},{y}_{32}^{*})\text{Δ}A] \\ & \approx \frac{1}{75,000}[0.08+0.08+0.01+1.70+1.74+3.00]\text{Δ}A \\ & \approx \frac{1}{75,000}[0.08+0.08+0.01+1.70+1.74+3.00]12500 \\ & \approx \frac{5}{30}[0.08+0.08+0.01+1.70+1.74+3.00] \\ & \approx 1.10.\end{array}$  {eq:fs-id1167793423294}

During September 22–23, 2010 this area had an average storm rainfall of approximately 1.10 inches.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793221656} type= 
PROBLEM:
A contour map is shown for a function $f(x,y)$ on the rectangle $R=[−3,6]\;\times \;[−1,4].$

> IMAGE {img:fs-id1167793378508} src=../../media/CNX_Calc_Figure_15_01_010.jpg
> alt: A contour map is shown with the highest point being about 18 and centered near (4, negative 1). From this point, the values decrease to 16, 14, 12, 10, 8, and 6 roughly every 0.5 to 1 distance. The lowest point is negative four near (negative 3, 4). There is a local minimum of 2 near (negative 1, 0).

a. Use the midpoint rule with $m=3$ and $n=2$ to estimate the value of ${\displaystyle \iint\limits_{R}f(x,y)dA}.$
b. Estimate the average value of the function $f(x,y).$
SOLUTION:
Answers to both parts a. and b. may vary.
COMMENTARY: Hint
Divide the region into six rectangles, and use the contour lines to estimate the values for $f(x,y).$
:::
:::

## Key Concepts {section:key-concepts}
- We can use a double Riemann sum to approximate the volume of a solid bounded above by a function of two variables over a rectangular region. By taking the limit, this becomes a double integral representing the volume of the solid.
- Properties of double integral are useful to simplify computation and find bounds on their values.
- We can use Fubini’s theorem to write and evaluate a double integral as an iterated integral.
- Double integrals are used to calculate the area of a region, the volume under a surface, and the average value of a function of two variables over a rectangular region.

## Key Equations {section:key-equations}

> TABLE {tab:eip-550} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Double integral** | ${\displaystyle \iint\limits_{R}f(x,y)dA}=\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A}}$ |
| **Iterated integral** | ${\displaystyle \int_{a}^{b}{\displaystyle \int_{c}^{d}f(x,y)dx\;dy}}={\displaystyle \int_{a}^{b}[{\displaystyle \int_{c}^{d}f(x,y)dy}]}dx$<br> or<br> ${\displaystyle \int_{c}^{d}{\displaystyle \int_{b}^{a}f(x,y)dx\;dy}}={\displaystyle \int_{c}^{d}[{\displaystyle \int_{a}^{b}f(x,y)dx}]}dy$ |
| **Average value of a function of two variables** | ${f}_{\text{ave}}=\frac{1}{\text{Area}\;R}{\displaystyle \iint\limits_{R}f(x,y)dx\;dy}$ |

##  {section:section-exercises}
In the following exercises, use the midpoint rule with $m=4$ and $n=2$ to estimate the volume of the solid bounded by the surface $z=f(x,y),$ the vertical planes $x=1,$ $x=2,$ $y=1,$ and $y=2,$ and the horizontal plane $z=0.$

:::exercise {fs-id1167793952156} type= 
PROBLEM:
$f(x,y)=4x+2y+8xy$
SOLUTION:
27.
:::

:::exercise {fs-id1167793377910} type= 
PROBLEM:
$f(x,y)=16{x}^{2}+\frac{y}{2}$
:::
In the following exercises, estimate $\iint_{R}f(x,y)dA$ by using a Riemann sum with $m=n=2$ and the sample points to be the lower left corners of the subrectangles of the partition.

:::exercise {fs-id1167793380060} type= 
PROBLEM:
$f(x,y)=\text{sin}\;x-\text{cos}\;y,$ $R=[0,\pi ]\;\times \;[0,\pi ]$
SOLUTION:
0.
:::

:::exercise {fs-id1167793373521} type= 
PROBLEM:
$f(x,y)=\text{cos}\;x+\text{cos}\;y,$ $R=[0,\pi ]\;\times \;[0,\frac{\pi}{2}]$
:::

:::exercise {fs-id1167793293640} type= 
PROBLEM:
Use the midpoint rule with $m=n=2$ to estimate ${\displaystyle \iint\limits_{R}f(x,y)dA},$ where the values of the function *f* on $R=[8,10]\;\times \;[9,11]$ are given in the following table.

> TABLE {tab:fs-id1167793553706} cols=6 class=unnumbered irregular
> summary: This table consists of six columns and six rows. The values along the top row are values of y; specifically, they are 9, 9.5, 10, 10.5, and 11. The values down the first column are values of x and they are 8, 8.5, 9, 9.5, and 10. Down the second column the values are 9.8, 9.4, 8.7, 6.7, and 6.8. Down the third column the values are 5, 4.5, 4.6, 6, and 6.4. Down the fourth column the values are 6.7, 8, 6, 4.5, and 5.5. Down the fifth column the values are 5, 5.4, 5.5, 5.4, and 5.7. Down the sixth column the values are 5.6, 3.4, 3.4, 6.7, and 6.8.

|  | {span=5} ***y*** |
| ***x*** | 9 | 9.5 | 10 | 10.5 | 11 |
| 8 | 9.8 | 5 | 6.7 | 5 | 5.6 |
| 8.5 | 9.4 | 4.5 | 8 | 5.4 | 3.4 |
| 9 | 8.7 | 4.6 | 6 | 5.5 | 3.4 |
| 9.5 | 6.7 | 6 | 4.5 | 5.4 | 6.7 |
| 10 | 6.8 | 6.4 | 5.5 | 5.7 | 6.8 |

SOLUTION:
21.3.
:::

:::exercise {fs-id1167793421274} type= 
PROBLEM:
The values of the function *f* on the rectangle $R=[0,2]\;\times \;[7,9]$ are given in the following table. Estimate the double integral ${\displaystyle \iint\limits_{R}f(x,y)dA}$ by using a Riemann sum with $m=n=2.$ Select the sample points to be the upper right corners of the subsquares of *R*.

> TABLE {tab:fs-id1167794024299} cols=4 class=unnumbered
> summary: This table consists of four columns and four rows. The values along the top row are values of y; specifically, they are y0 = 7, y1 = 8, and y2 = 9. The values down the first column are values of x and they are x0 = 0, x1 = 1, and x2 = 2. Down the second column the values are 10.22, 6.73, and 5.62. Down the third column the values are 10.21, 9.75, and 7.83. Down the fourth column the values are 9.85, 9.63, and 8.21.

|  |  |  |  |
| --- | --- | --- | --- |
|  | ${y}_{0}=7$ | ${y}_{1}=8$ | ${y}_{2}=9$ |
| ${x}_{0}=0$ | 10.22 | 10.21 | 9.85 |
| ${x}_{1}=1$ | 6.73 | 9.75 | 9.63 |
| ${x}_{2}=2$ | 5.62 | 7.83 | 8.21 |

:::

:::exercise {fs-id1167793300250} type= 
PROBLEM:
The depth of a children’s 4-ft by 4-ft swimming pool, measured at 1-ft intervals, is given in the following table.
a. Estimate the volume of water in the swimming pool by using a Riemann sum with $m=n=2.$ Select the sample points using the midpoint rule on $R=[0,4]\;\times \;[0,4].$
b. Approximate the average depth of the swimming pool.

> TABLE {tab:fs-id1167793279352} cols=6 class=unnumbered irregular
> summary: This table consists of six columns and six rows. The values along the top row are values of y; specifically, they are 0, 1, 2, 3, and 4. The values down the first column are values of x and they are 0, 1, 2, 3, and 4. Down the second column the values are 1, 1, 1, 1, and 1. Down the third column the values are 1.5, 1.5, 1.5, 1, and 1. Down the fourth column the values are 2, 2, 1.5, 1.5, and 1. Down the fifth column the values are 2.5, 2.5, 2.5, 2, and 1.5. Down the sixth column the values are 3, 3, 3, 2.5, and 2.

|  | {span=5} ***y*** |
| ***x*** | 0 | 1 | 2 | 3 | 4 |
| 0 | 1 | 1.5 | 2 | 2.5 | 3 |
| 1 | 1 | 1.5 | 2 | 2.5 | 3 |
| 2 | 1 | 1.5 | 1.5 | 2.5 | 3 |
| 3 | 1 | 1 | 1.5 | 2 | 2.5 |
| 4 | 1 | 1 | 1 | 1.5 | 2 |

SOLUTION:
a. 28 ${\text{ft}}^{3}$ b. 1.75 ft.
:::

:::exercise {fs-id1167793829197} type= 
PROBLEM:
The depth of a 3-ft by 3-ft hole in the ground, measured at 1-ft intervals, is given in the following table.
a. Estimate the volume of the hole by using a Riemann sum with $m=n=3$ and the sample points to be the upper left corners of the subsquares of *R*.
b. Approximate the average depth of the hole.

> TABLE {tab:fs-id1167794147220} cols=5 class=unnumbered irregular
> summary: This table consists of five columns and five rows. The values along the top row are values of y; specifically, they are 0, 1, 2, 3. The values down the first column are values of x and they are 0, 1, 2, 3. Down the second column the values are 6, 6.5, 6.5, and 6. Down the third column the values are 6.5, 7, 6.7, and 6.5. Down the fourth column the values are 6.4, 7.5, 6.5, and 5. Down the fifth column the values are 6, 6.5, 6, and 5.6.

|  | {span=4} ***y*** |
| ***x*** | 0 | 1 | 2 | 3 |
| 0 | 6 | 6.5 | 6.4 | 6 |
| 1 | 6.5 | 7 | 7.5 | 6.5 |
| 2 | 6.5 | 6.7 | 6.5 | 6 |
| 3 | 6 | 6.5 | 5 | 5.6 |

:::

:::exercise {fs-id1167793571245} type= 
PROBLEM:
The level curves $f(x,y)=k$ of the function *f* are given in the following graph, where *k* is a constant.
a. Apply the midpoint rule with $m=n=2$ to estimate the double integral ${\displaystyle \iint\limits_{R}f(x,y)dA},$ where $R=[0.2,1]\;\times \;[0,0.8].$
b. Estimate the average value of the function *f* on *R*.

> IMAGE {img:fs-id1167794042916} src=../../media/CNX_Calc_Figure_15_01_201.jpg
> alt: A series of curves marked k = negative 1, negative ½, negative ¼, negative 1/8, 0, 1/8, ¼, ½, and 1. The line marked k = 0 serves as an asymptote along the line y = x. The lines originate at (along the y axis) 1, 0.7, 0.5, 0.38, 0, (along the x axis) 0.38, 0.5, 0.7, and 1, with the further out lines curving less dramatically toward the asymptote.

SOLUTION:
a. $0.112$ b. ${f}_{\text{ave}}\simeq 0.175;$ here $f(0.4,0.2)\simeq 0.1,$ $f(0.2,0.6)\simeq −0.2,$ $f(0.8,0.2)\simeq 0.6,$ and $f(0.8,0.6)\simeq 0.2.$
:::

:::exercise {fs-id1167794210521} type= 
PROBLEM:
The level curves $f(x,y)=k$ of the function *f* are given in the following graph, where *k* is a constant.
a. Apply the midpoint rule with $m=n=2$ to estimate the double integral ${\displaystyle \iint\limits_{R}f(x,y)dA},$ where $R=[0.1,0.5]\;\times \;[0.1,0.5].$
b. Estimate the average value of the function *f* on *R*.

> IMAGE {img:fs-id1167793943792} src=../../media/CNX_Calc_Figure_15_01_202.jpg
> alt: A series of quarter circles drawn in the first quadrant marked k = 1/32, 1/16, 1/8, ¼, ½, ¾, and 1. The quarter circles have radii 0. 17, 0.25, 0.35, 0.5, 0.71, 0.87, and 1, respectively.

:::

:::exercise {fs-id1167794324522} type= 
PROBLEM:
The solid lying under the surface $z=\sqrt{4-{y}^{2}}$ and above the rectangular region $R=[0,2]\;\times \;[0,2]$ is illustrated in the following graph. Evaluate the double integral ${\displaystyle \iint\limits_{R}f(x,y)dA},$ where $f(x,y)=\sqrt{4-{y}^{2}},$ by finding the volume of the corresponding solid.

> IMAGE {img:fs-id1167793925173} src=../../media/CNX_Calc_Figure_15_01_203.jpg
> alt: A quarter cylinder with center along the x axis and with radius 2. It has height 2 as shown.

SOLUTION:
$2\pi .$
:::

:::exercise {fs-id1167793925202} type= 
PROBLEM:
The solid lying under the plane $z=y+4$ and above the rectangular region $R=[0,2]\;\times \;[0,4]$ is illustrated in the following graph. Evaluate the double integral ${\displaystyle \iint\limits_{R}f(x,y)dA},$ where $f(x,y)=y+4,$ by finding the volume of the corresponding solid.

> IMAGE {img:fs-id1167793589799} src=../../media/CNX_Calc_Figure_15_01_204.jpg
> alt: In xyz space, a shape is created with sides given by y = 0, x = 0, y = 4, x = 2, z = 0, and the plane the runs from z = 4 along the y axis to z = 8 along the plane formed by y = 4.

:::
In the following exercises, calculate the integrals by interchanging the order of integration.

:::exercise {fs-id1167793589825} type= 
PROBLEM:
${\displaystyle \int_{−1}^{1} ({\displaystyle \int_{−2}^{2} (2x+3y+5)dx})}dy$
SOLUTION:
40.
:::

:::exercise {fs-id1167794054147} type= 
PROBLEM:
${\displaystyle \int_{0}^{2} ({\displaystyle \int_{0}^{1} (x+2{e}^{y}-3)dx})}dy$
:::

:::exercise {fs-id1167793639969} type= 
PROBLEM:
${\displaystyle \int_{1}^{27} ({\displaystyle \int_{1}^{2} (\sqrt[3]{x}+\sqrt[3]{y})}dy)dx}$
SOLUTION:
$\frac{81}{2}+39\sqrt[3]{2}.$
:::

:::exercise {fs-id1167793428876} type= 
PROBLEM:
${\displaystyle \int_{1}^{16} ({\displaystyle \int_{1}^{8} (\sqrt[4]{x}+2\sqrt[3]{y})}dy)dx}$
:::

:::exercise {fs-id1167793502300} type= 
PROBLEM:
${\displaystyle \int_{\text{ln}\;2}^{\text{ln}\;3} ({\displaystyle \int_{0}^{l} {e}^{x+y}dy})}dx$
SOLUTION:
$e-1.$
:::

:::exercise {fs-id1167793299910} type= 
PROBLEM:
${\displaystyle \int_{0}^{2} ({\displaystyle \int_{0}^{1} {3}^{x+y}dy})}dx$
:::

:::exercise {fs-id1167793467402} type= 
PROBLEM:
${\displaystyle \int_{1}^{6} ({\displaystyle \int_{2}^{9} \frac{\sqrt{y}}{{x}^{2}}}dy)}dx$
SOLUTION:
$15-\frac{10\sqrt{2}}{9}.$
:::

:::exercise {fs-id1167793393679} type= 
PROBLEM:
${\displaystyle \int_{1}^{9} ({\displaystyle \int_{4}^{2} \frac{\sqrt{x}}{{y}^{2}}}dy)}dx$
:::
In the following exercises, evaluate the iterated integrals by choosing the order of integration.

:::exercise {fs-id1167793244524} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi} \;{\displaystyle \int_{0}^{\pi \text{/}2} \text{sin}(2x)\text{cos}(3y)}}dx\;dy$
SOLUTION:
0.
:::

:::exercise {fs-id1167793372913} type= 
PROBLEM:
${\displaystyle \int_{\pi \text{/}12}^{\pi \text{/}8} \;{\displaystyle \int_{\pi \text{/}4}^{\pi \text{/}3} [\text{cot}\;x+\text{tan}(2y)]}}dx\;dy$
:::

:::exercise {fs-id1167793938028} type= 
PROBLEM:
${\displaystyle \int_{1}^{e} \;{\displaystyle \int_{1}^{e} [\frac{1}{x}\text{sin}(\text{ln}\;x)+\frac{1}{y}\text{cos}(\text{ln}\;y)]dx\;dy}}$
SOLUTION:
$(e-1)(1+\text{sin}\;1-\text{cos}\;1).$
:::

:::exercise {fs-id1167794094489} type= 
PROBLEM:
${\displaystyle \int_{1}^{e} \;{\displaystyle \int_{1}^{e} \frac{\text{sin}(\text{ln}\;x)\text{cos}(\text{ln}\;y)}{xy}dx\;dy}}$
:::

:::exercise {fs-id1167793776355} type= 
PROBLEM:
${\displaystyle \int_{1}^{2} \;{\displaystyle \int_{1}^{2} (\frac{\text{ln}\;y}{x}+\frac{x}{2y+1})}}dy\;dx$
SOLUTION:
$\frac{3}{4}\text{ln}(\frac{5}{3})+2\;{\text{ln}}^{2}2-\text{ln}\;2.$
:::

:::exercise {fs-id1167793300302} type= 
PROBLEM:
${\displaystyle \int_{1}^{e} \;{\displaystyle \int_{1}^{2} {x}^{2}\text{ln}(x)}}dy\;dx$
:::

:::exercise {fs-id1167793544829} type= 
PROBLEM:
${\displaystyle \int_{1}^{\sqrt{3}} \;{\displaystyle \int_{1}^{2} y\;\text{arctan}(\frac{1}{x})}}dy\;dx$
SOLUTION:
$\frac{1}{8}[(2\sqrt{3}-3)\pi +6\;\text{ln}\;2].$
:::

:::exercise {fs-id1167794222803} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{0}^{1\text{/}2} (\text{arcsin}\;x+\text{arcsin}\;y)}}dy\;dx$
:::

:::exercise {fs-id1167793409400} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{1}^{2} x{e}^{x+4y}}}dy\;dx$
SOLUTION:
$\frac{1}{4}{e}^{4}({e}^{4}-1).$
:::

:::exercise {fs-id1167793568960} type= 
PROBLEM:
${\displaystyle \int_{1}^{2} \;{\displaystyle \int_{0}^{1} x{e}^{x-y}}}dy\;dx$
:::

:::exercise {fs-id1167793228971} type= 
PROBLEM:
${\displaystyle \int_{1}^{e} \;{\displaystyle \int_{1}^{e} (\frac{\text{ln}\;y}{\sqrt{y}}+\frac{\text{ln}\;x}{\sqrt{x}})}}dy\;dx$
SOLUTION:
$4(e-1)(2-\sqrt{e}).$
:::

:::exercise {fs-id1167794296833} type= 
PROBLEM:
${\displaystyle \int_{1}^{e} \;{\displaystyle \int_{1}^{e} (\frac{x\;\text{ln}\;y}{\sqrt{y}}+\frac{y\;\text{ln}\;x}{\sqrt{x}})}}dy\;dx$
:::

:::exercise {fs-id1167793432334} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{1}^{2} (\frac{x}{{x}^{2}+{y}^{2}})}}dy\;dx$
SOLUTION:
$-\frac{\pi}{4}+\text{ln}(\frac{5}{4})-\frac{1}{2}\text{ln}\;2+\text{arctan}\;2.$
:::

:::exercise {fs-id1167794336014} type= 
PROBLEM:
${\displaystyle \int_{0}^{1} \;{\displaystyle \int_{1}^{2} \frac{y}{x+{y}^{2}}}}dy\;dx$
:::
In the following exercises, find the average value of the function over the given rectangles.

:::exercise {fs-id1167794122102} type= 
PROBLEM:
$f(x,y)=\text{−}x+2y,$ $R=[0,1]\;\times \;[0,1]$
SOLUTION:
$\frac{1}{2}.$
:::

:::exercise {fs-id1167793378240} type= 
PROBLEM:
$f(x,y)={x}^{4}+2{y}^{3},$ $R=[1,2]\;\times \;[2,3]$
:::

:::exercise {fs-id1167793480081} type= 
PROBLEM:
$f(x,y)=\text{sinh}\;x+\text{sinh}\;y,$ $R=[0,1]\;\times \;[0,2]$
SOLUTION:
$\frac{1}{2}(2\;\text{cosh}\;1+\text{cosh}\;2-3).$
:::

:::exercise {fs-id1167793417017} type= 
PROBLEM:
$f(x,y)=\text{arctan}(xy),$ $R=[0,1]\;\times \;[0,1]$
:::

:::exercise {fs-id1167793455226} type= 
PROBLEM:
Let *f* and *g* be two continuous functions such that $0\le {m}_{1}\le f(x)\le {M}_{1}$ for any $x\in [a,b]$ and $0\le {m}_{2}\le g(y)\le {M}_{2}$ for any $y\in [c,d].$ Show that the following inequality is true:
${m}_{1}{m}_{2}(b-a)(d-c)\le \int_{a}^{b} \;\int_{c}^{d} f(x)g(y)dy\;dx\le {M}_{1}{M}_{2}(b-a)(d-c).$
:::
In the following exercises, use property v. of double integrals and the answer from the preceding exercise to show that the following inequalities are true.

:::exercise {fs-id1167793626149} type= 
PROBLEM:
$\frac{1}{{e}^{2}}\le {\displaystyle \iint\limits_{R}{e}^{\text{−}{x}^{2}-{y}^{2}}dA}\le 1,$ where $R=[0,1]\;\times \;[0,1]$
:::

:::exercise {fs-id1167793515800} type= 
PROBLEM:
$\frac{{\pi}^{2}}{144}\le {\displaystyle \iint\limits_{R}\text{sin}\;x\;\text{cos}\;y\;dA}\le \frac{{\pi}^{2}}{48},$ where $R=[\frac{\pi}{6},\frac{\pi}{3}]\;\times \;[\frac{\pi}{6},\frac{\pi}{3}]$
:::

:::exercise {fs-id1167793930085} type= 
PROBLEM:
$0\le \iint\limits_{R}{e}^{\text{−}y}\text{cos}\;x\;dA\le {(\frac{\pi}{2})}^{2},$ where $R=[0,\frac{\pi}{2}]\;\times \;[0,\frac{\pi}{2}]$
:::

:::exercise {fs-id1167793933574} type= 
PROBLEM:
$0\le {\displaystyle \iint\limits_{R}(\text{ln}\;x)(\text{ln}\;y)dA}\le {(e-1)}^{2},$ where $R=[1,e]\;\times \;[1,e]$
:::

:::exercise {fs-id1167793298271} type= 
PROBLEM:
Let *f* and *g* be two continuous functions such that $0\le {m}_{1}\le f(x)\le {M}_{1}$ for any $x\in [a,b]$ and $0\le {m}_{2}\le g(y)\le {M}_{2}$ for any $y\in [c,d].$ Show that the following inequality is true:
$({m}_{1}+{m}_{2})(b-a)(d-c)\le {\displaystyle \int_{a}^{b} \;{\displaystyle \int_{c}^{d} [f(x)+g(y)]dy\;dx}}\le ({M}_{1}+{M}_{2})(b-a)(d-c).$
:::
In the following exercises, use property v. of double integrals and the answer from the preceding exercise to show that the following inequalities are true.

:::exercise {fs-id1167793512126} type= 
PROBLEM:
$\frac{2}{e}\le {\displaystyle \iint\limits_{R}({e}^{\text{−}{x}^{2}}+{e}^{\text{−}{y}^{2}})dA}\le 2,$ where $R=[0,1]\;\times \;[0,1]$
:::

:::exercise {fs-id1167793425931} type= 
PROBLEM:
$\frac{{\pi}^{2}}{36}\le {\displaystyle \iint\limits_{R}(\text{sin}\;x+\text{cos}\;y)}dA\le \frac{{\pi}^{2}\sqrt{3}}{36},$ where $R=[\frac{\pi}{6},\frac{\pi}{3}]\;\times \;[\frac{\pi}{6},\frac{\pi}{3}]$
:::

:::exercise {fs-id1167793479214} type= 
PROBLEM:
$\frac{{\pi}^{2}}{4}{e}^{\frac{-\pi}{2}}\le \iint\limits_{R}(\text{cos}\;x+{e}^{-y})dA\le \frac{{\pi}^{2}}{2},$ where $R=[0,\frac{\pi}{2}]\;\times \;[0,\frac{\pi}{2}]$
:::

:::exercise {fs-id1167793711590} type= 
PROBLEM:
$0\le \iint\limits_{R}(\text{ln}x+\text{ln}\;y)dA\le 2{(e-1)}^{2},$ where $R=[1,e]\;\times \;[1,e]$
:::
In the following exercises, the function *f* is given in terms of double integrals.
a. Determine the explicit form of the function *f*.
b. Find the volume of the solid under the surface $z=f(x,y)$ and above the region *R*.
c. Find the average value of the function *f* on *R*.
d. Use a computer algebra system (CAS) to plot $z=f(x,y)$ and $z={f}_{\text{ave}}$ in the same system of coordinates.

:::exercise {fs-id1167794163611} type= 
PROBLEM:
**[T]** $f(x,y)={\displaystyle \int_{0}^{y} \;{\displaystyle \int_{0}^{x} (xs+yt)ds\;dt}},$ where $(x,y)\in R=[0,1]\;\times \;[0,1]$
SOLUTION:
a. $f(x,y)=\frac{1}{2}xy({x}^{2}+{y}^{2})$ b. $V={\displaystyle \int_{0}^{1} \;{\displaystyle \int_{0}^{1} f(x,y)dx\;dy}}=\frac{1}{8}$ c. ${f}_{\text{ave}}=\frac{1}{8};$
d.

> IMAGE {img:fs-id1167794143653} src=../../media/CNX_Calc_Figure_15_01_205.jpg
> alt: In xyz space, a plane is formed at z = 1/8, and there is another shape that starts at the origin, increases through the plane in a line roughly running from (1, 0.25, 0.125) to (0.25, 1, 0.125), and then rapidly increases to (1, 1, 1).

:::

:::exercise {fs-id1167794143668} type= 
PROBLEM:
**[T]** $f(x,y)={\displaystyle \int_{0}^{x} \;{\displaystyle \int_{0}^{y} [\text{cos}(s)+\text{cos}(t)]dt\;ds}},$ where $(x,y)\in R=[0,3]\;\times \;[0,3]$
:::

:::exercise {fs-id1167793569960} type= 
PROBLEM:
Show that if *f* and *g* are continuous on $[a,b]$ and $[c,d],$ respectively, then
${\displaystyle \int_{a}^{b} \;{\displaystyle \int_{c}^{d} [f(x)+g(y)]dy\;dx}}=(d-c){\displaystyle \int_{a}^{b} f(x)dx}$
$\hspace{5em}+{\displaystyle \int_{a}^{b} \;{\displaystyle \int_{c}^{d} g(y)dy}}\;dx=(b-a){\displaystyle \int_{c}^{d} g(y)dy+}{\displaystyle \int_{c}^{d} \;{\displaystyle \int_{a}^{b} f(x)dx}}\;dy.$
:::

:::exercise {fs-id1167793581590} type= 
PROBLEM:
Show that ${\displaystyle \int_{a}^{b} \;{\displaystyle \int_{c}^{d} yf(x)+xg(y)dy\;dx}}=\frac{1}{2}({d}^{2}-{c}^{2})({\displaystyle \int_{a}^{b} f(x)dx})+\frac{1}{2}({b}^{2}-{a}^{2})({\displaystyle \int_{c}^{d} g(y)dy}).$
:::

:::exercise {fs-id1167794145449} type= 
PROBLEM:
**[T]** Consider the function $f(x,y)={e}^{\text{−}{x}^{2}-{y}^{2}},$ where $(x,y)\in R=[−1,1]\;\times \;[−1,1].$
a. Use the midpoint rule with $m=n=2,4\text{,…,}\;10$ to estimate the double integral $I={\displaystyle \iint\limits_{R}{e}^{\text{−}{x}^{2}-{y}^{2}}dA}.$ Round your answers to the nearest hundredths.
b. For $m=n=2,$ find the average value of *f* over the region *R*. Round your answer to the nearest hundredths.
c. Use a CAS to graph in the same coordinate system the solid whose volume is given by ${\displaystyle \iint\limits_{R}{e}^{\text{−}{x}^{2}-{y}^{2}}dA}$ and the plane $z={f}_{\text{ave}}.$
SOLUTION:
a. For $m=n=2,$ $I=4{e}^{−0.5}\approx 2.43$ b. ${f}_{\text{ave}}={e}^{−0.5}\simeq 0.61;$
c.

> IMAGE {img:fs-id1167794127149} src=../../media/CNX_Calc_Figure_15_01_207.jpg
> alt: In xyz space, a plane is formed at z = 0.61, and there is another shape with maximum roughly at (0, 0, 0.92), which decreases along all the sides to the points (plus or minus 1, plus or minus 1, 0.12).

:::

:::exercise {fs-id1167794127165} type= 
PROBLEM:
**[T]** Consider the function $f(x,y)=\text{sin}({x}^{2})\text{cos}({y}^{2}),$ where $(x,y)\in R=[−1,1]\;\times \;[−1,1].$
a. Use the midpoint rule with $m=n=2,4\text{,…,}\;10$ to estimate the double integral $I={\displaystyle \iint\limits_{R}\text{sin}({x}^{2})\text{cos}({y}^{2})dA}.$ Round your answers to the nearest hundredths.
b. For $m=n=2,$ find the average value of *f* over the region *R.* Round your answer to the nearest hundredths.
c. Use a CAS to graph in the same coordinate system the solid whose volume is given by ${\displaystyle \iint\limits_{R}\text{sin}({x}^{2})\text{cos}({y}^{2})dA}$ and the plane $z={f}_{\text{ave}}.$
:::
In the following exercises, the functions ${f}_{n}$ are given, where $n\ge 1$ is a natural number.
a. Find the volume of the solids ${S}_{n}$ under the surfaces $z={f}_{n}(x,y)$ and above the region *R*.
b. Determine the limit of the volumes of the solids ${S}_{n}$ as *n* increases without bound.

:::exercise {fs-id1167793515241} type= 
PROBLEM:
${f}_{n}(x,y)={x}^{n}+{y}^{n}+xy,(x,y)\in R=[0,1]\;\times \;[0,1]$
SOLUTION:
a. $\frac{2}{n+1}+\frac{1}{4}$ b. $\frac{1}{4}$
:::

:::exercise {fs-id1167793293538} type= 
PROBLEM:
${f}_{n}(x,y)=\frac{1}{{x}^{n}}+\frac{1}{{y}^{n}},(x,y)\in R=[1,2]\;\times \;[1,2]$
:::

:::exercise {fs-id1167793928479} type= 
PROBLEM:
Show that the average value of a function *f* on a rectangular region $R=[a,b]\;\times \;[c,d]$ is ${f}_{\text{ave}}\approx \frac{1}{mn}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({x}_{ij}^{*},{y}_{ij}^{*})}},$ where $({x}_{ij}^{*},{y}_{ij}^{*})$ are the sample points of the partition of *R*, where $1\le i\le m$ and $1\le j\le n.$
:::

:::exercise {fs-id1167794126862} type= 
PROBLEM:
Use the midpoint rule with $m=n$ to show that the average value of a function *f* on a rectangular region $R=[a,b]\;\times \;[c,d]$ is approximated by

${f}_{\text{ave}}\approx \frac{1}{{n}^{2}}{\displaystyle \sum_{i,j=1}^{n} f(\frac{1}{2}({x}_{i-1}+{x}_{i}),\frac{1}{2}({y}_{j-1}+{y}_{j}))}.$  {eq:fs-id1167793943759}

:::

:::exercise {fs-id1167793590316} type= 
PROBLEM:
An isotherm map is a chart connecting points having the same temperature at a given time for a given period of time. Use the preceding exercise and apply the midpoint rule with $m=n=2$ to find the average temperature over the region given in the following figure.

> IMAGE {img:fs-id1167793590339} src=../../media/CNX_Calc_Figure_15_01_209.jpg
> alt: A contour map showing surface temperature in degrees Fahrenheit. Given the map, the midpoint rule would give rectangles with values 71, 72, 40, and 43.

SOLUTION:
$56.5\text{°}$ F; here $f({x}_{1}^{*},{y}_{1}^{*})=71,$ $f({x}_{2}^{*},{y}_{1}^{*})=72,$ $f({x}_{1}^{*},{y}_{2}^{*})=40,$ $f({x}_{2}^{*},{y}_{2}^{*})=43,$ where ${x}_{i}^{*}$ and ${y}_{j}^{*}$ are the midpoints of the subintervals of the partitions of $[a,b]$ and $[c,d],$ respectively.
:::

## Glossary
- {def} **double integral**: of the function $f(x,y)$ over the region $R$ in the $xy$-plane is defined as the limit of a double Riemann sum, ${\displaystyle \iint\limits_{R}f(x,y)dA}=\lim_{m,n\to \infty}{\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A.}}$
- {def} **double Riemann sum**: of the function $f(x,y)$ over a rectangular region $R$ is ${\displaystyle \sum_{i=1}^{m} {\displaystyle \sum_{j=1}^{n} f({x}_{ij}^{*},{y}_{ij}^{*})\text{Δ}A}}$ where $R$ is divided into smaller subrectangles ${R}_{ij}$ and $({x}_{ij}^{*},{y}_{ij}^{*})$ is an arbitrary point in ${R}_{ij}$
- {def} **Fubini’s theorem**: if $f(x,y)$ is a function of two variables that is continuous over a rectangular region $R=\{(x,y)\in {\mathbb{R}}^{2}|a\le x\le b,c\le y\le d\},$ then the double integral of $f$ over the region equals an iterated integral, 
  ${\displaystyle \iint\limits_{R}f(x,y)dy\;dx}={\displaystyle \int_{a}^{b}{\displaystyle \int_{c}^{d}f(x,y)dx\;dy}}={\displaystyle \int_{c}^{d}{\displaystyle \int_{a}^{b}f(x,y)dx\;dy}}$
- {def} **iterated integral**: for a function $f(x,y)$ over the region $R$ is

a. ${\displaystyle \int_{a}^{b}{\displaystyle \int_{c}^{d}f(x,y)dx\;dy}}={\displaystyle \int_{a}^{b}[{\displaystyle \int_{c}^{d}f(x,y)dy}]}dx,$
b. ${\displaystyle \int_{c}^{d}{\displaystyle \int_{b}^{a}f(x,y)dx\;dy}}={\displaystyle \int_{c}^{d}[{\displaystyle \int_{a}^{b}f(x,y)dx}]}dy,$

where $a,b,c,$ and $d$ are any real numbers and $R=[a,b]\;\times \;[c,d]$

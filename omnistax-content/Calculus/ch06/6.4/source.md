# Arc Length of a Curve and Surface Area

## Learning Objectives {section:learning-objectives}
- Determine the length of a curve, $y=f(x),$ between two points.
- Determine the length of a curve, $x=g(y),$ between two points.
- Find the surface area of a solid of revolution.

In this section, we use definite integrals to find the arc length of a curve. We can think of {term:arc length} as the distance you would travel if you were walking along the path of the curve. Many real-world applications involve arc length. If a rocket is launched along a parabolic path, we might want to know how far the rocket travels. Or, if a curve on a map represents a road, we might want to know how far we have to drive to reach our destination.
We begin by calculating the arc length of curves defined as functions of $x,$ then we examine the same process for curves defined as functions of $y.$ (The process is identical, with the roles of $x$ and $y$ reversed.) The techniques we use to find arc length can be extended to find the surface area of a surface of revolution, and we close the section with an examination of this concept.

## Arc Length of the Curve *y* = *f*(*x*)
In previous applications of integration, we required the function $f(x)$ to be integrable, or at most continuous. However, for calculating arc length we have a more stringent requirement for $f(x).$ Here, we require $f(x)$ to be differentiable, and furthermore we require its derivative, ${f}^{'}(x),$ to be continuous. Functions like this, which have continuous derivatives, are called {index:*smooth*}. (This property comes up again in later chapters.)
Let $f(x)$ be a smooth function defined over $[a,b].$ We want to calculate the length of the curve from the point $(a,f(a))$ to the point $(b,f(b)).$ We start by using line segments to approximate the length of the curve. For $i=0,\;1,2\text{,…},n,$ let $P=\{{x}_{i}\}$ be a regular partition of $[a,b].$ Then, for $i=1,2\text{,…},n,$ construct a line segment from the point $({x}_{i-1},f({x}_{i-1}))$ to the point $({x}_{i},f({x}_{i})).$ Although it might seem logical to use either horizontal or vertical line segments, we want our line segments to approximate the curve as closely as possible. [ref:CNX_Calc_Figure_06_04_001] depicts this construct for $n=5.$

> FIGURE {fig:CNX_Calc_Figure_06_04_001} src=../../media/CNX_Calc_Figure_06_04_001.jpg
> alt: This figure is a graph in the first quadrant. The curve increases and decreases. It is divided into parts at the points a=xsub0, xsub1, xsub2, xsub3, xsub4, and xsub5=b. Also, there are line segments between the points on the curve.
> caption: We can approximate the length of a curve by adding line segments.

To help us find the length of each line segment, we look at the change in vertical distance as well as the change in horizontal distance over each interval. Because we have used a regular partition, the change in horizontal distance over each interval is given by $\text{Δ}x.$ The change in vertical distance varies from interval to interval, though, so we use $\text{Δ}{y}_{i}=f({x}_{i})-f({x}_{i-1})$ to represent the change in vertical distance over the interval $[{x}_{i-1},{x}_{i}],$ as shown in [ref:CNX_Calc_Figure_06_04_002]. Note that some (or all) $\text{Δ}{y}_{i}$ may be negative.

> FIGURE {fig:CNX_Calc_Figure_06_04_002} src=../../media/CNX_Calc_Figure_06_04_002.jpg
> alt: This figure is a graph. It is a curve above the x-axis beginning at the point f(xsubi-1). The curve ends in the first quadrant at the point f(xsubi). Between the two points on the curve is a line segment. A right triangle is formed with this line segment as the hypotenuse, a horizontal segment with length delta x, and a vertical line segment with length delta y.
> caption: A representative line segment approximates the curve over the interval $[{x}_{i-1},{x}_{i}].$

By the Pythagorean theorem, the length of the line segment is $\sqrt{{(\text{Δ}x)}^{2}+{(\text{Δ}{y}_{i})}^{2}}.$ We can also write this as $\text{Δ}x\sqrt{1+{((\text{Δ}{y}_{i})\text{/}(\text{Δ}x))}^{2}}.$ Now, by the Mean Value Theorem, there is a point ${x}_{i}^{*}\in [{x}_{i-1},{x}_{i}]$ such that ${f}^{'}({x}_{i}^{*})=(\text{Δ}{y}_{i})\text{/}(\text{Δ}x).$ Then the length of the line segment is given by $\text{Δ}x\sqrt{1+{[{f}^{'}({x}_{i}^{*})]}^{2}}.$ Adding up the lengths of all the line segments, we get

$\text{Arc Length}\;\approx {\displaystyle \sum_{i=1}^{n} \sqrt{1+{[{f}^{'}({x}_{i}^{*})]}^{2}}\;\text{Δ}x}.$  {eq:fs-id1167793279503}

This is a Riemann sum. Taking the limit as $n\to \infty ,$ we have

$\text{Arc Length}=\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} \sqrt{1+{[{f}^{'}({x}_{i}^{*})]}^{2}}\;\text{Δ}x}={\displaystyle \int_{a}^{b}\sqrt{1+{[{f}^{'}(x)]}^{2}}}\;dx.$  {eq:fs-id1167793829102}

We summarize these findings in the following theorem.

:::note [theorem] Arc Length for *y* = *f*(*x*)
Let $f(x)$ be a smooth function over the interval $[a,b].$ Then the arc length of the portion of the graph of $f(x)$ from the point $(a,f(a))$ to the point $(b,\;f(b))$ is given by

$$ \text{Arc Length}={\displaystyle \int_{a}^{b}\sqrt{1+{[{f}^{'}(x)]}^{2}}}\;dx. $$  {eq:fs-id1167794043266}

:::
Note that we are integrating an expression involving ${f}^{'}(x),$ so we need to be sure ${f}^{'}(x)$ is integrable. This is why we require $f(x)$ to be smooth. The following example shows how to apply the theorem.

:::example {ex:fs-id1167793940076} Calculating the Arc Length of a Function of *x*

:::exercise {fs-id1167794099909} type= 
PROBLEM:
Let $f(x)=2{x}^{3\text{/}2}.$ Calculate the arc length of the graph of $f(x)$ over the interval $[0,1].$ Round the answer to three decimal places.
SOLUTION:
We have ${f}^{'}(x)=3{x}^{1\text{/}2},$ so ${[{f}^{'}(x)]}^{2}=9x.$ Then, the arc length is

$\begin{array}{rl}\text{Arc Length} & ={\displaystyle \int_{a}^{b}\sqrt{1+{[{f}^{'}(x)]}^{2}}}\;dx \\ & ={\displaystyle \int_{0}^{1}\sqrt{1+9x}}\;dx.\end{array}$  {eq:fs-id1167794212298}

Substitute $u=1+9x.$ Then, $du=9\;dx.$ When $x=0,$ then $u=1,$ and when $x=1,$ then $u=10.$ Thus,

$\begin{array}{rl}\text{Arc Length} & ={\displaystyle \int_{0}^{1}\sqrt{1+9x}}\;dx \\ & =\frac{1}{9}{{\displaystyle \int}}_{0}^{1}\sqrt{1+9x}9dx=\frac{1}{9}{\displaystyle \int_{1}^{10}\sqrt{u}}\;du \\ & ={\frac{1}{9}\cdot \frac{2}{3}{u}^{3\text{/}2}|}_{1}^{10}=\frac{2}{27}[10\sqrt{10}-1]\approx 2.268\;\text{units}.\end{array}$  {eq:fs-id1167793870742}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793984361} type= 
PROBLEM:
Let $f(x)=(4\text{/}3){x}^{3\text{/}2}.$ Calculate the arc length of the graph of $f(x)$ over the interval $[0,1].$ Round the answer to three decimal places.
SOLUTION:
$\frac{1}{6}(5\sqrt{5}-1)\approx 1.697$
COMMENTARY: Hint
Use the process from the previous example. Don’t forget to change the limits of integration.
:::
:::
Although it is nice to have a formula for calculating arc length, this particular theorem can generate expressions that are difficult to integrate. We study some techniques for integration in [Introduction to Techniques of Integration](module:m53654). In some cases, we may have to use a computer or calculator to approximate the value of the integral.

:::example {ex:fs-id1167794071518} Using a Computer or Calculator to Determine the Arc Length of a Function of *x*

:::exercise {fs-id1167794055619} type= 
PROBLEM:
Let $f(x)={x}^{2}.$ Calculate the arc length of the graph of $f(x)$ over the interval $[1,3].$
SOLUTION:
We have ${f}^{'}(x)=2x,$ so ${[{f}^{'}(x)]}^{2}=4{x}^{2}.$ Then the arc length is given by

$\text{Arc Length}={\displaystyle \int_{a}^{b}\sqrt{1+{[{f}^{'}(x)]}^{2}}}\;dx={\displaystyle \int_{1}^{3}\sqrt{1+4{x}^{2}}}\;dx.$  {eq:fs-id1167794122133}

Using a computer to approximate the value of this integral, we get

${\displaystyle \int_{1}^{3}\sqrt{1+4{x}^{2}}}\;dx\approx 8.26815.$  {eq:fs-id1167794025333}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794038452} type= 
PROBLEM:
Let $f(x)=\text{sin}\;x.$ Calculate the arc length of the graph of $f(x)$ over the interval $[0,\pi ].$ Use a computer or calculator to approximate the value of the integral.
SOLUTION:
$\text{Arc Length}\approx 3.8202$
COMMENTARY: Hint
Use the process from the previous example.
:::
:::

## Arc Length of the Curve *x* = *g*(*y*)
We have just seen how to approximate the length of a curve with line segments. If we want to find the arc length of the graph of a function of $y,$ we can repeat the same process, except we partition the $y\text{-axis}$ instead of the $x\text{-axis}.$ [ref:CNX_Calc_Figure_06_04_003] shows a representative line segment.

> FIGURE {fig:CNX_Calc_Figure_06_04_003} src=../../media/CNX_Calc_Figure_06_04_003.jpg
> alt: This figure is a graph. It is a curve to the right of the y-axis beginning at the point g(ysubi-1). The curve ends in the first quadrant at the point g(ysubi). Between the two points on the curve is a line segment. A right triangle is formed with this line segment as the hypotenuse, a horizontal segment with length delta x, and a vertical line segment with length delta y.
> caption: A representative line segment over the interval $[{y}_{i-1},{y}_{i}].$

Then the length of the line segment is $\sqrt{{(\text{Δ}y)}^{2}+{(\text{Δ}{x}_{i})}^{2}},$ which can also be written as $\text{Δ}y\sqrt{1+{((\text{Δ}{x}_{i})\text{/}(\text{Δ}y))}^{2}}.$ If we now follow the same development we did earlier, we get a formula for arc length of a function $x=g(y).$

:::note [theorem] Arc Length for *x* = *g*(*y*)
Let $g(y)$ be a smooth function over a $y$ interval $[c,d].$ Then, the arc length of the graph of $g(y)$ from the point $(g(d),d)$ to the point $(g(c),c)$ is given by

$$ \text{Arc Length}={\displaystyle \int_{c}^{d}\sqrt{1+{[{g}^{'}(y)]}^{2}}}\;dy. $$  {eq:fs-id1167794071093}

:::

:::example {ex:fs-id1167794043530} Calculating the Arc Length of a Function of *y*

:::exercise {fs-id1167793514590} type= 
PROBLEM:
Let $g(y)=3{y}^{3}.$ Calculate the arc length of the graph of $g(y)$ over the interval $[1,2].$
SOLUTION:
We have ${g}^{'}(y)=9{y}^{2},$ so ${[{g}^{'}(y)]}^{2}=81{y}^{4}.$ Then the arc length is

$\text{Arc Length}={\displaystyle \int_{c}^{d}\sqrt{1+{[{g}^{'}(y)]}^{2}}}\;dy={\displaystyle \int_{1}^{2}\sqrt{1+81{y}^{4}}}\;dy.$  {eq:fs-id1167793937228}

Using a computer to approximate the value of this integral, we obtain

${\displaystyle \int_{1}^{2}\sqrt{1+81{y}^{4}}}\;dy\approx 21.0277.$  {eq:fs-id1167793949762}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793950303} type= 
PROBLEM:
Let $g(y)=1\text{/}y.$ Calculate the arc length of the graph of $g(y)$ over the interval $[1,4].$ Use a computer or calculator to approximate the value of the integral.
SOLUTION:
$\text{Arc Length}=3.15018$
COMMENTARY: Hint
Use the process from the previous example.
:::
:::

## Area of a Surface of Revolution
The concepts we used to find the arc length of a curve can be extended to find the surface area of a surface of revolution. {term:Surface area} is the total area of the outer layer of an object. For objects such as cubes or bricks, the surface area of the object is the sum of the areas of all of its faces. For curved surfaces, the situation is a little more complex. Let $f(x)$ be a nonnegative smooth function over the interval $[a,b].$ We wish to find the surface area of the surface of revolution created by revolving the graph of $y=f(x)$ around the $x\text{-axis}$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_04_004} src=../../media/CNX_Calc_Figure_06_04_004.jpg
> alt: This figure has two graphs. The first graph is labeled “a” and is a curve in the first quadrant beginning at the y-axis. The curve is y=f(x). The second graph is labeled “b” and has the same curve y=f(x). There is also a solid surface formed by rotating the curve about the x-axis.
> caption: (a) A curve representing the function $f(x).$ (b) The surface of revolution formed by revolving the graph of $f(x)$ around the $x\text{-axis}.$

As we have done many times before, we are going to partition the interval $[a,b]$ and approximate the surface area by calculating the surface area of simpler shapes. We start by using line segments to approximate the curve, as we did earlier in this section. For $i=0,1,2\text{,…},n,$ let $P=\{{x}_{i}\}$ be a regular partition of $[a,b].$ Then, for $i=1,2\text{,…},n,$ construct a line segment from the point $({x}_{i-1},f({x}_{i-1}))$ to the point $({x}_{i},f({x}_{i})).$ Now, revolve these line segments around the $x\text{-axis}$ to generate an approximation of the surface of revolution as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_04_005} src=../../media/CNX_Calc_Figure_06_04_005.jpg
> alt: This figure has two graphs. The first graph is labeled “a” and is a curve in the first quadrant beginning at the y-axis. The curve is y=f(x). The area under the curve above the x-axis has been divided into regions with vertical lines. The second graph is labeled “b” and has the same curve y=f(x). There is also a solid surface formed by rotating the curve about the x-axis.
> caption: (a) Approximating $f(x)$ with line segments. (b) The surface of revolution formed by revolving the line segments around the $x\text{-axis}.$

Notice that when each line segment is revolved around the axis, it produces a band. These bands are actually pieces of cones (think of an ice cream cone with the pointy end cut off). A piece of a cone like this is called a {term:frustum} of a cone.
To find the surface area of the band, we need to find the lateral surface area, $S,$ of the frustum (the area of just the slanted outside surface of the frustum, not including the areas of the top or bottom faces). Let ${r}_{1}$ and ${r}_{2}$ be the radii of the wide end and the narrow end of the frustum, respectively, and let $l$ be the slant height of the frustum as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_04_006} src=../../media/CNX_Calc_Figure_06_04_006.jpg
> alt: This figure is a graph. It is a frustum of a cone above the x-axis with the y-axis in the center. The radius of the bottom of the frustum is rsub1 and the radius of the top is rsub2. The length of the side is labeled “l”.
> caption: A frustum of a cone can approximate a small part of surface area.

We know the lateral surface area of a cone is given by

$\text{Lateral Surface Area}=\pi rs,$  {eq:fs-id1167793937496}

where $r$ is the radius of the base of the cone and $s$ is the slant height (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_06_04_007} src=../../media/CNX_Calc_Figure_06_04_007.jpg
> alt: This figure is a cone. The cone has radius r, height h, and length of side s.
> caption: The lateral surface area of the cone is given by $\pi rs.$

Since a frustum can be thought of as a piece of a cone, the lateral surface area of the frustum is given by the lateral surface area of the whole cone less the lateral surface area of the smaller cone (the pointy tip) that was cut off (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_06_04_008} src=../../media/CNX_Calc_Figure_06_04_008.jpg
> alt: This figure is a graph. It is a frustum of a cone. The radius of the bottom of the frustum is rsub1 and the radius of the top is rsub2. The length of the side is labeled “l”. There is also the top of a cone with broken lines above the frustum. It has length of side s.
> caption: Calculating the lateral surface area of a frustum of a cone.

The cross-sections of the small cone and the large cone are similar triangles, so we see that

$\frac{{r}_{2}}{{r}_{1}}=\frac{s-l}{s}.$  {eq:fs-id1167793872773}

Solving for $s,$ we get

$\begin{array}{rll}\frac{{r}_{2}}{{r}_{1}} & = & \frac{s-l}{s} \\ {r}_{2}s & = & {r}_{1}(s-l) \\ {r}_{2}s & = & {r}_{1}s-{r}_{1}l \\ {r}_{1}l & = & {r}_{1}s-{r}_{2}s \\ {r}_{1}l & = & ({r}_{1}-{r}_{2})s\end{array}$  {eq:fs-id1167793927765}

Then the lateral surface area (SA) of the frustum is

$\begin{array}{rl}S & =\;\text{(Lateral SA of large cone)}-\text{(Lateral SA of small cone)} \\ & =\pi {r}_{1}s-\pi {r}_{2}(s-l) \\ & =\pi {r}_{1}s-\pi {r}_{2}s+\pi {r}_{2}l \\ & =\pi ({r}_{1}-{r}_{2})s+\pi {r}_{2}l \\ & =\pi {r}_{1}l+\pi {r}_{2}l \\ & =\pi ({r}_{1}+{r}_{2})l.\end{array}$  {eq:fs-id1167793462498}

Let’s now use this formula to calculate the surface area of each of the bands formed by revolving the line segments around the $x\text{-axis}\text{.}$ A representative band is shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_04_009} src=../../media/CNX_Calc_Figure_06_04_009.jpg
> alt: This figure has two graphics. The first is a curve in the first quadrant. Around the x-axis is a frustum of a cone. The edge of the frustum is against the curve. The edge begins at f(xsubi-1) and ends at f(xsubi). The second image is the same curve with the same frustum. the height of the frustum is delta x and the curve is labeled y=f(x).
> caption: A representative band used for determining surface area.

Note that the slant height of this frustum is just the length of the line segment used to generate it. So, applying the surface area formula, we have

$\begin{array}{rl}S & =\pi ({r}_{1}+{r}_{2})l \\ & =\pi (f({x}_{i-1})+f({x}_{i}))\sqrt{\text{Δ}{x}^{2}+{(\text{Δ}{y}_{i})}^{2}} \\ & =\pi (f({x}_{i-1})+f({x}_{i}))\text{Δ}x\sqrt{1+{(\frac{\text{Δ}{y}_{i}}{\text{Δ}x})}^{2}}.\end{array}$  {eq:fs-id1167793547528}

Now, as we did in the development of the arc length formula, we apply the Mean Value Theorem to select ${x}_{i}^{*}\in [{x}_{i-1},{x}_{i}]$ such that ${f}^{'}({x}_{i}^{*})=(\text{Δ}{y}_{i})\text{/}\text{Δ}x.$ This gives us

$S=\pi (f({x}_{i-1})+f({x}_{i}))\text{Δ}x\sqrt{1+{({f}^{'}({x}_{i}^{*}))}^{2}}.$  {eq:fs-id1167794005190}

Furthermore, since $f(x)$ is continuous, by the Intermediate Value Theorem, there is a point ${x}_{i}^{**}\in [{x}_{i-1},{x}_{i}]$ such that $f({x}_{i}^{**})=(1\text{/}2)[f({x}_{i-1})+f({x}_{i})],$ so we get

$S=2\pi f({x}_{i}^{**})\text{Δ}x\sqrt{1+{({f}^{'}({x}_{i}^{*}))}^{2}}.$  {eq:fs-id1167793940341}

Then the approximate surface area of the whole surface of revolution is given by

$\text{Surface Area}\approx \overset{n}{\underset{i=1}{{\displaystyle \sum}}}2\pi f({x}_{i}^{**})\text{Δ}x\sqrt{1+{({f}^{'}({x}_{i}^{*}))}^{2}}.$  {eq:fs-id1167794324593}

This *almost* looks like a Riemann sum, except we have functions evaluated at two different points, ${x}_{i}^{*}$ and ${x}_{i}^{**},$ over the interval $[{x}_{i-1},{x}_{i}].$ Although we do not examine the details here, it turns out that because $f(x)$ is smooth, if we let $n\to \infty ,$ the limit works the same as a Riemann sum even with the two different evaluation points. This makes sense intuitively. Both ${x}_{i}^{*}$ and ${x}_{i}^{**}$ are in the interval $[{x}_{i-1},{x}_{i}],$ so it makes sense that as $n\to \infty ,$ both ${x}_{i}^{*}$ and ${x}_{i}^{**}$ approach $x.$ Those of you who are interested in the details should consult an advanced calculus text.
Taking the limit as $n\to \infty ,$ we get

$\text{Surface Area}=\lim_{n\to \infty}\overset{n}{\underset{i=1}{{\displaystyle \sum}}}2\pi f({x}_{i}^{**})\text{Δ}x\sqrt{1+{({f}^{'}({x}_{i}^{*}))}^{2}}={\displaystyle \int_{a}^{b}(2\pi f(x)\sqrt{1+{({f}^{'}(x))}^{2}})dx}.$  {eq:fs-id1167793964827}

As with arc length, we can conduct a similar development for functions of $y$ to get a formula for the surface area of surfaces of revolution about the $y\text{-axis}.$ These findings are summarized in the following theorem.

:::note [theorem] Surface Area of a Surface of Revolution
Let $f(x)$ be a nonnegative smooth function over the interval $[a,b].$ Then, the surface area of the surface of revolution formed by revolving the graph of $f(x)$ around the *x*-axis is given by

$$ \text{Surface Area}={\displaystyle \int_{a}^{b}(2\pi f(x)\sqrt{1+{({f}^{'}(x))}^{2}})dx}. $$  {eq:fs-id1167794036671}

Similarly, let $g(y)$ be a nonnegative smooth function over the interval $[c,d].$ Then, the surface area of the surface of revolution formed by revolving the graph of $g(y)$ around the $y\text{-axis}$ is given by

$\text{Surface Area}={\displaystyle \int_{c}^{d}(2\pi g(y)\sqrt{1+{({g}^{'}(y))}^{2}})dy}.$  {eq:fs-id1167793287436}

:::

:::example {ex:fs-id1167794126778} Calculating the Surface Area of a Surface of Revolution 1

:::exercise {fs-id1167794126780} type= 
PROBLEM:
Let $f(x)=\sqrt{x}$ over the interval $[1,4].$ Find the surface area of the surface generated by revolving the graph of $f(x)$ around the $x\text{-axis}.$ Round the answer to three decimal places.
SOLUTION:
The graph of $f(x)$ and the surface of rotation are shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_04_010} src=../../media/CNX_Calc_Figure_06_04_010.jpg
> alt: This figure has two graphs. The first is the curve f(x)=squareroot(x). The curve is increasing and begins at the origin. Also on the graph are the vertical lines x=1 and x=4. The second graph is the same function as the first graph. The region between f(x) and the x-axis, bounded by x=1 and x=4 has been rotated around the x-axis to form a surface.
> caption: (a) The graph of $f(x).$ (b) The surface of revolution.

We have $f(x)=\sqrt{x}.$ Then, ${f}^{'}(x)=1\text{/}(2\sqrt{x})$ and ${({f}^{'}(x))}^{2}=1\text{/}(4x).$ Then,

$\begin{array}{rl}\text{Surface Area} & ={\displaystyle \int_{a}^{b}(2\pi f(x)\sqrt{1+{({f}^{'}(x))}^{2}})dx} \\ & ={\displaystyle \int_{1}^{4}(2\pi \sqrt{x}\sqrt{1+\frac{1}{4x}})}dx \\ & ={\displaystyle \int_{1}^{4}(2\pi \sqrt{x+\frac{1}{4}})dx}.\end{array}$  {eq:fs-id1167793500873}

Let $u=x+1\text{/}4.$ Then, $du=dx.$ When $x=1,$ $u=5\text{/}4,$ and when $x=4,$ $u=17\text{/}4.$ This gives us

$\begin{array}{rl}{\displaystyle \int_{1}^{4}(2\pi \sqrt{x+\frac{1}{4}})dx} & ={\displaystyle \int_{5\text{/}4}^{17\text{/}4}2\pi \sqrt{u}}\;du \\ & =2\pi {[\frac{2}{3}{u}^{3\text{/}2}]\;|}_{5\text{/}4}^{17\text{/}4}=\frac{\pi}{6}[17\sqrt{17}-5\sqrt{5}]\approx 30.846.\end{array}$  {eq:fs-id1167793293667}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793369994} type= 
PROBLEM:
Let $f(x)=\sqrt{1-x}$ over the interval $[0,1\text{/}2].$ Find the surface area of the surface generated by revolving the graph of $f(x)$ around the $x\text{-axis}.$ Round the answer to three decimal places.
SOLUTION:
$\frac{\pi}{6}(5\sqrt{5}-3\sqrt{3})\approx 3.133$
COMMENTARY: Hint
Use the process from the previous example.
:::
:::

:::example {ex:fs-id1167793878314} Calculating the Surface Area of a Surface of Revolution 2

:::exercise {fs-id1167794327529} type= 
PROBLEM:
Let $f(x)=y=\sqrt[3]{3x}.$ Consider the portion of the curve where $0\le y\le 2.$ Find the surface area of the surface generated by revolving the graph of $f(x)$ around the $y\text{-axis}.$
SOLUTION:
Notice that we are revolving the curve around the $y\text{-axis},$ and the interval is in terms of $y,$ so we want to rewrite the function as a function of *y*. We get $x=g(y)=(1\text{/}3){y}^{3}.$ The graph of $g(y)$ and the surface of rotation are shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_04_011} src=../../media/CNX_Calc_Figure_06_04_011.jpg
> alt: This figure has two graphs. The first is the curve g(y)=1/3y^3. The curve is increasing and begins at the origin. Also on the graph are the horizontal lines y=0 and y=2. The second graph is the same function as the first graph. The region between g(y) and the y-axis, bounded by y=0 and y=2 has been rotated around the y-axis to form a surface.
> caption: (a) The graph of $g(y).$ (b) The surface of revolution.

We have $g(y)=(1\text{/}3){y}^{3},$ so ${g}^{'}(y)={y}^{2}$ and ${({g}^{'}(y))}^{2}={y}^{4}.$ Then

$\begin{array}{rl}\text{Surface Area} & ={\displaystyle \int_{c}^{d}(2\pi g(y)\sqrt{1+{({g}^{'}(y))}^{2}})dy} \\ & ={\displaystyle \int_{0}^{2}(2\pi (\frac{1}{3}{y}^{3})\sqrt{1+{y}^{4}})}dy \\ & =\frac{2\pi}{3}{\displaystyle \int_{0}^{2}({y}^{3}\sqrt{1+{y}^{4}})}dy.\end{array}$  {eq:fs-id1167794122412}

Let $u={y}^{4}+1.$ Then $du=4{y}^{3}dy.$ When $y=0,$ $u=1,$ and when $y=2,$ $u=17.$ Then

$\begin{array}{rl}\frac{2\pi}{3}{\displaystyle \int_{0}^{2}({y}^{3}\sqrt{1+{y}^{4}})}dy & =\frac{2\pi}{3}{\displaystyle \int_{1}^{17}\frac{1}{4}\sqrt{u}du} \\ & =\frac{\pi}{6}{[\frac{2}{3}{u}^{3\text{/}2}]\;|}_{1}^{17}=\frac{\pi}{9}[{(17)}^{3\text{/}2}-1]\approx 24.118.\end{array}$  {eq:fs-id1167793355001}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793395480} type= 
PROBLEM:
Let $g(y)=\sqrt{9-{y}^{2}}$ over the interval $y\in [0,2].$ Find the surface area of the surface generated by revolving the graph of $g(y)$ around the $y\text{-axis}.$
SOLUTION:
$12\pi$
COMMENTARY: Hint
Use the process from the previous example.
:::
:::

## Key Concepts {section:key-concepts}
- The arc length of a curve can be calculated using a definite integral.
- The arc length is first approximated using line segments, which generates a Riemann sum. Taking a limit then gives us the definite integral formula. The same process can be applied to functions of $y.$
- The concepts used to calculate the arc length can be generalized to find the surface area of a surface of revolution.
- The integrals generated by both the arc length and surface area formulas are often difficult to evaluate. It may be necessary to use a computer or calculator to approximate the values of the integrals.

## Key Equations {section:key-equations}

> TABLE {tab:eip-507} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Arc Length of a Function of *x*** | $\text{Arc Length}={\displaystyle \int_{a}^{b}\sqrt{1+{[{f}^{'}(x)]}^{2}}}\;dx$ |
| **Arc Length of a Function of *y*** | $\text{Arc Length}={\displaystyle \int_{c}^{d}\sqrt{1+{[{g}^{'}(y)]}^{2}}}\;dy$ |
| **Surface Area of a Function of *x*** | $\text{Surface Area}={\displaystyle \int_{a}^{b}(2\pi f(x)\sqrt{1+{({f}^{'}(x))}^{2}})dx}$ |

##  {section:section-exercises}
For the following exercises, find the length of the functions over the given interval.

:::exercise {fs-id1167793950140} type= 
PROBLEM:
$y=5x\;\text{from}\;x=0\;\text{to}\;x=2$
SOLUTION:
$2\sqrt{26}$
:::

:::exercise {fs-id1167793629397} type= 
PROBLEM:
$y=-\frac{1}{2}x+25\;\text{from}\;x=1\;\text{to}\;x=4$
:::

:::exercise {fs-id1167793951675} type= 
PROBLEM:
$x=4y\;\text{from}\;y=−1\;\text{to}\;y=1$
SOLUTION:
$2\sqrt{17}$
:::

:::exercise {fs-id1167793953577} type= 
PROBLEM:
Pick an arbitrary linear function $x=g(y)$ over any interval of your choice $({y}_{1},{y}_{2}).$ Determine the length of the function and then prove the length is correct by using geometry.
:::

:::exercise {fs-id1167794053006} type= 
PROBLEM:
Find the surface area of the volume generated when the curve $y=\sqrt{x}$ revolves around the $x\text{-axis}$ from $(1,1)$ to $(4,2),$ as seen here.

> IMAGE {img:fs-id1167793627423} src=../../media/CNX_Calc_Figure_06_04_201.jpg
> alt: This figure is a surface. It has been formed by rotating the curve y=squareroot(x) about the x-axis. The surface is inside of a cube to show 3-dimensions.

SOLUTION:
$\frac{\pi}{6}(17\sqrt{17}-5\sqrt{5})$
:::

:::exercise {fs-id1167793265929} type= 
PROBLEM:
Find the surface area of the volume generated when the curve $y={x}^{2}$ revolves around the $y\text{-axis}$ from $(1,\;1)$ to $(3,9).$

> IMAGE {img:fs-id1167793883848} src=../../media/CNX_Calc_Figure_06_04_202.jpg
> alt: This figure is a surface. It has an elliptical shape to the top, forming a “bowl”.

:::
For the following exercises, find the lengths of the functions of $x$ over the given interval. If you cannot evaluate the integral exactly, use technology to approximate it.

:::exercise {fs-id1167794333006} type= 
PROBLEM:
$y={x}^{3\text{/}2}$ from $(0,0)\;\text{to}\;(1,1)$
SOLUTION:
$\frac{13\sqrt{13}-8}{27}$
:::

:::exercise {fs-id1167793939562} type= 
PROBLEM:
$y={x}^{2\text{/}3}$ from $(1,1)\;\text{to}\;(8,4)$
:::

:::exercise {fs-id1167793770712} type= 
PROBLEM:
$y=\frac{1}{3}{({x}^{2}+2)}^{3\text{/}2}$ from $x=0\;\text{to}\;x=1$
SOLUTION:
$\frac{4}{3}$
:::

:::exercise {fs-id1167793421359} type= 
PROBLEM:
$y=\frac{1}{3}{({x}^{2}-2)}^{3\text{/}2}$ from $x=2$ to $x=4$
:::

:::exercise {fs-id1167794061033} type= 
PROBLEM:
**[T]** $y={e}^{x}$ on $x=0$ to $x=1$
SOLUTION:
$2.0035$
:::

:::exercise {fs-id1167793544266} type= 
PROBLEM:
$y=\frac{{x}^{3}}{3}+\frac{1}{4x}$ from $x=1\;\text{to}\;x=3$
:::

:::exercise {fs-id1167793568469} type= 
PROBLEM:
$y=\frac{{x}^{4}}{4}+\frac{1}{8{x}^{2}}$ from $x=1\;\text{to}\;x=2$
SOLUTION:
$\frac{123}{32}$
:::

:::exercise {fs-id1167793515093} type= 
PROBLEM:
$y=\frac{2{x}^{3\text{/}2}}{3}-\frac{{x}^{1\text{/}2}}{2}$ from $x=1\;\text{to}\;x=4$
:::

:::exercise {fs-id1167794005187} type= 
PROBLEM:
$y=\frac{1}{27}{(9{x}^{2}+6)}^{3\text{/}2}$ from $x=0\;\text{to}\;x=2$
SOLUTION:
$10$
:::

:::exercise {fs-id1167793562376} type= 
PROBLEM:
**[T]** $y=\text{sin}\;x$ on $x=0\;\text{to}\;x=\pi$
:::
For the following exercises, find the lengths of the functions of $y$ over the given interval. If you cannot evaluate the integral exactly, use technology to approximate it.

:::exercise {fs-id1167793977222} type= 
PROBLEM:
$y=\frac{5-3x}{4}$ from $y=0$ to $y=4$
SOLUTION:
$\frac{20}{3}$
:::

:::exercise {fs-id1167793926076} type= 
PROBLEM:
$x=\frac{1}{2}({e}^{y}+{e}^{\text{−}y})$ from $y=−1\;\text{to}\;y=1$
:::

:::exercise {fs-id1167793959414} type= 
PROBLEM:
$x=5{y}^{3\text{/}2}$ from $y=0$ to $y=1$
SOLUTION:
$\frac{1}{675}(229\sqrt{229}-8)$
:::

:::exercise {fs-id1167794296436} type= 
PROBLEM:
**[T]** $x={y}^{2}$ from $y=0$ to $y=1$
:::

:::exercise {fs-id1167793559163} type= 
PROBLEM:
$x=\sqrt{y}$ from $y=0\;\text{to}\;y=1$
SOLUTION:
$\frac{1}{8}(4\sqrt{5}+\text{ln}(9+4\sqrt{5}))$
:::

:::exercise {fs-id1167793367053} type= 
PROBLEM:
$x=\frac{2}{3}{({y}^{2}+1)}^{3\text{/}2}$ from $y=1$ to $y=3$
:::

:::exercise {fs-id1167793619901} type= 
PROBLEM:
**[T]** $x=\text{tan}\;y$ from $y=0$ to $y=\frac{3}{4}$
SOLUTION:
$1.201$
:::

:::exercise {fs-id1167793616880} type= 
PROBLEM:
**[T]** $x={\text{cos}}^{2}y$ from $y=-\frac{\pi}{2}$ to $y=\frac{\pi}{2}$
:::

:::exercise {fs-id1167794095292} type= 
PROBLEM:
**[T]** $x={4}^{y}$ from $y=0\;\text{to}\;y=2$
SOLUTION:
$15.2341$
:::

:::exercise {fs-id1167793936542} type= 
PROBLEM:
**[T]** $x=\text{ln}(y)$ on $y=\frac{1}{e}$ to $y=e$
:::
For the following exercises, find the surface area of the volume generated when the following curves revolve around the $x\text{-axis}.$ If you cannot evaluate the integral exactly, use your calculator to approximate it.

:::exercise {fs-id1167793245242} type= 
PROBLEM:
$y=\sqrt{x}$ from $x=2$ to $x=6$
SOLUTION:
$\frac{49\pi}{3}$
:::

:::exercise {fs-id1167793932288} type= 
PROBLEM:
$y={x}^{3}$ from $x=0$ to $x=1$
:::

:::exercise {fs-id1167793640459} type= 
PROBLEM:
$y=7x$ from $x=−1\;\text{to}\;x=1$
SOLUTION:
$70\pi \sqrt{2}$
:::

:::exercise {fs-id1167793470758} type= 
PROBLEM:
**[T]** $y=\frac{1}{{x}^{2}}$ from $x=1\;\text{to}\;x=3$
:::

:::exercise {fs-id1167793939907} type= 
PROBLEM:
$y=\sqrt{4-{x}^{2}}$ from $x=0\;\text{to}\;x=2$
SOLUTION:
$8\pi$
:::

:::exercise {fs-id1167793926048} type= 
PROBLEM:
$y=\sqrt{4-{x}^{2}}$ from $x=−1\;\text{to}\;x=1$
:::

:::exercise {fs-id1167794293109} type= 
PROBLEM:
$y=5x$ from $x=1\;\text{to}\;x=5$
SOLUTION:
$120\pi \sqrt{26}$
:::

:::exercise {fs-id1167794075604} type= 
PROBLEM:
**[T]** $y=\text{tan}\;x$ from $x=-\frac{\pi}{4}\;\text{to}\;x=\frac{\pi}{4}$
:::
For the following exercises, find the surface area of the volume generated when the following curves revolve around the $y\text{-axis}\text{.}$ If you cannot evaluate the integral exactly, use your calculator to approximate it.

:::exercise {fs-id1167793632942} type= 
PROBLEM:
$y={x}^{2}$ from $x=0\;\text{to}\;x=2$
SOLUTION:
$\frac{\pi}{6}(17\sqrt{17}-1)$
:::

:::exercise {fs-id1167793541792} type= 
PROBLEM:
$y=\frac{1}{2}{x}^{2}+\frac{1}{2}$ from $x=0\;\text{to}\;x=1$
:::

:::exercise {fs-id1167793640312} type= 
PROBLEM:
$y=x+1$ from $x=0\;\text{to}\;x=3$
SOLUTION:
$9\sqrt{2}\pi$
:::

:::exercise {fs-id1167793829775} type= 
PROBLEM:
**[T]** $y=\frac{1}{x}$ from $x=\frac{1}{2}$ to $x=1$
:::

:::exercise {fs-id1167793541921} type= 
PROBLEM:
$y=\sqrt[3]{x}$ from $x=1\;\text{to}\;x=27$
SOLUTION:
$\frac{10\sqrt{10}\pi}{27}(73\sqrt{73}-1)$
:::

:::exercise {fs-id1167793291601} type= 
PROBLEM:
**[T]** $y=3{x}^{4}$ from $x=0$ to $x=1$
:::

:::exercise {fs-id1167793499132} type= 
PROBLEM:
**[T]** $y=\frac{1}{\sqrt{x}}$ from $x=1$ to $x=3$
SOLUTION:
$25.645$
:::

:::exercise {fs-id1167793477104} type= 
PROBLEM:
**[T]** $y=\text{cos}\;x$ from $x=0$ to $x=\frac{\pi}{2}$
:::

:::exercise {fs-id1167794209472} type= class=material-set-2 
PROBLEM:
The base of a lamp is constructed by revolving a quarter circle $y=\sqrt{2x-{x}^{2}}$ around the $y\text{-axis}$ from $x=1$ to $x=2,$ as seen here. Create an integral for the surface area of this curve and compute it.

> IMAGE {img:fs-id1167793287807} src=../../media/CNX_Calc_Figure_06_04_203.jpg
> alt: This figure is a surface. It is half of a torus created by rotating the curve y=squareroot(2x-x^2) about the x-axis.

SOLUTION:
$\pi (2+\pi )$
:::

:::exercise {fs-id1167793378493} type= class=material-set-2 
PROBLEM:
A light bulb is a sphere with radius $1\text{/}2$ in. with the bottom sliced off to fit exactly onto a cylinder of radius $1\text{/}4$ in. and length $1\text{/}3$ in., as seen here. The sphere is cut off at the bottom to fit exactly onto the cylinder, so the radius of the cut is $1\text{/}4$ in. Find the surface area (not including the top or bottom of the cylinder).

> IMAGE {img:fs-id1167794075552} src=../../media/CNX_Calc_Figure_06_04_204.jpg
> alt: This figure has two images. The first is a sphere on top of a cylinder. The second is a lightbulb.

:::

:::exercise {fs-id1167793276958} type= class=material-set-2 
PROBLEM:
**[T]** A lampshade is constructed by rotating $y=1\text{/}x$ around the $x\text{-axis}$ from $y=1$ to $y=2,$ as seen here. Determine how much material you would need to construct this lampshade—that is, the surface area—accurate to four decimal places.

> IMAGE {img:fs-id1167794222642} src=../../media/CNX_Calc_Figure_06_04_205.jpg
> alt: This figure has two images. The first is similar to a frustum of a cone with edges bending inwards. The second is a lamp shade.

SOLUTION:
$10.5017$
:::

:::exercise {fs-id1167793420602} type= class=material-set-2 
PROBLEM:
**[T]** An anchor drags behind a boat according to the function $y=24{e}^{\text{−}x\text{/}2}-24,$ where $y$ represents the depth beneath the boat and $x$ is the horizontal distance of the anchor from the back of the boat. If the anchor is $23$ ft below the boat, how much rope do you have to pull to reach the anchor? Round your answer to three decimal places.
:::

:::exercise {fs-id1167793956541} type= 
PROBLEM:
**[T]** You are building a bridge that will span $10$ ft. You intend to add decorative rope in the shape of $y=5|\text{sin}((x\pi )\text{/}5)|,$ where $x$ is the distance in feet from one end of the bridge. Find out how much rope you need to buy, measured in a whole number of feet.
SOLUTION:
$24$ ft
:::
For the following exercises, find the exact arc length for the following problems over the given interval.

:::exercise {fs-id1167794223060} type= 
PROBLEM:
$y=\text{ln}(\text{sin}\;x)$ from $x=\pi \text{/}4$ to $x=(3\pi )\text{/}4.$ (*Hint:* Recall trigonometric identities.)
:::

:::exercise {fs-id1167793567062} type= 
PROBLEM:
**[T]** Draw graphs of $y={x}^{2},$ $y={x}^{6},$ and $y={x}^{10}.$ For $y={x}^{n},$ as $n$ increases, formulate a prediction on the arc length from $(0,0)$ to $(1,1).$ Now, compute the lengths of these three functions and determine whether your prediction is correct.
SOLUTION:
$2$
:::

:::exercise {fs-id1167794296106} type= 
PROBLEM:
Compare the lengths of the parabola $x={y}^{2}$ and the line $x=by$ from $(0,0)\;\text{to}\;({b}^{2},b)$ as $b$ increases. What do you notice?
:::

:::exercise {fs-id1167793829159} type= 
PROBLEM:
Solve for the length of $x={y}^{2}$ from $(0,0)\;\text{to}\;(1,1).$ Show that $x=(1\text{/}2){y}^{2}$ from $(0,0)$ to $(2,\;2)$ is twice as long. Graph both functions and explain why this is so.
SOLUTION:
Answers may vary
:::

:::exercise {fs-id1167793547130} type= 
PROBLEM:
**[T]** Which is longer between $(1,\;1)$ and $(2,1\text{/}2)\text{:}$ the hyperbola $y=1\text{/}x$ or the graph of $x+2y=3?$
:::

:::exercise {fs-id1167793355037} type= 
PROBLEM:
Explain why the surface area is infinite when $y=1\text{/}x$ is rotated around the $x\text{-axis}$ for $1\le x<\infty ,$ but the volume is finite.
SOLUTION:
For more information, look up Gabriel’s Horn.
:::

## Glossary
- {def} **arc length**: the arc length of a curve can be thought of as the distance a person would travel along the path of the curve
- {def} **frustum**: a portion of a cone; a frustum is constructed by cutting the cone with a plane parallel to the base
- {def} **surface area**: the surface area of a solid is the total area of the outer layer of the object; for objects such as cubes or bricks, the surface area of the object is the sum of the areas of all of its faces

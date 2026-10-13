# Arc Length and Curvature

## Learning Objectives {section:learning-objectives}
- Determine the length of a particle’s path in space by using the arc-length function.
- Explain the meaning of the curvature of a curve in space and state its formula.
- Describe the meaning of the normal and binormal vectors of a curve in space.

In this section, we study formulas related to curves in both two and three dimensions, and see how they are related to various properties of the same curve. For example, suppose a vector-valued function describes the motion of a particle in space. We would like to determine how far the particle has traveled over a given time interval, which can be described by the arc length of the path it follows. Or, suppose that the vector-valued function describes a road we are building and we want to determine how sharply the road curves at a given point. This is described by the curvature of the function at that point. We explore each of these concepts in this section.

## Arc Length for Vector Functions
We have seen how a vector-valued function describes a curve in either two or three dimensions. Recall [ref:fs-id1167794065177](module:m53850), which states that the formula for the arc length of a curve defined by the parametric functions $x=x(t),y=y(t),{t}_{1}\le t\le {t}_{2}$ is given by

$s={\displaystyle \int_{{t}_{1}}^{{t}_{2}}\sqrt{{({x}^{'}(t))}^{2}+{({y}^{'}(t))}^{2}}dt.}$  {eq:fs-id1169737850660}

In a similar fashion, if we define a smooth curve using a vector-valued function $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j},$ where $a\le t\le b,$ the arc length is given by the formula

$s={\displaystyle \int_{a}^{b}\sqrt{{({f}^{'}(t))}^{2}+{({g}^{'}(t))}^{2}}}dt.$  {eq:fs-id1169737777661}

In three dimensions, if the vector-valued function is described by $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k}$ over the same interval $a\le t\le b,$ the arc length is given by

$s={\displaystyle \int_{a}^{b}\sqrt{{({f}^{'}(t))}^{2}+{({g}^{'}(t))}^{2}+{({h}^{'}(t))}^{2}}}dt.$  {eq:fs-id1169737301182}

:::note [theorem] Arc-Length Formulas
1. *Plane curve*: Given a smooth curve *C* defined by the function $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j},$ where *t* lies within the interval $[a,b],$ the arc length of *C* over the interval is

$$ s={\displaystyle \int_{a}^{b}\sqrt{\;{[{f}^{'}(t)]}^{2}+{[{g}^{'}(t)]}^{2}}}dt={\displaystyle \int_{a}^{b}\| \mathbf{{r}^{'}}(t)\|}\;dt. $$  {eq:fs-id1169738187798}

2. *Space curve*: Given a smooth curve *C* defined by the function $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k},$ where *t* lies within the interval $[a,b],$ the arc length of *C* over the interval is

$$ s={\displaystyle \int_{a}^{b}\sqrt{\;{[{f}^{'}(t)]}^{2}+{[{g}^{'}(t)]}^{2}+{[{h}^{'}(t)]}^{2}}dt}={\displaystyle \int_{a}^{b}\| \mathbf{{r}^{'}}(t)\|}\;dt. $$  {eq:fs-id1169738053435}

:::
The two formulas are very similar; they differ only in the fact that a space curve has three component functions instead of two. Note that the formulas are defined for smooth curves: curves where the vector-valued function $\textbf{r}(t)$ is continuously differentiable with a non-zero derivative. The smoothness condition guarantees that the curve has no cusps (or corners) that could make the formula problematic.

:::example {ex:fs-id1169737840905} Finding the Arc Length

:::exercise {fs-id1169738154816} type= 
PROBLEM:
Calculate the arc length for each of the following vector-valued functions:
a. $\textbf{r}(t)=(3t-2)\;\textbf{i}+(4t+5)\;\textbf{j},1\le t\le 5$
b. $\textbf{r}(t)=\langle t\;\text{cos}\;t,t\;\text{sin}\;t,2t\rangle ,0\le t\le 2\pi$
SOLUTION:
a. Using [ref:fs-id1169738187798], $\mathbf{{r}^{'}}(t)=3\textbf{i}+4\textbf{j},$ so

$\begin{array}{rl}s & ={\displaystyle \int_{a}^{b}\| \mathbf{{r}^{'}}(t)\|}\;dt \\ & ={\displaystyle \int_{a}^{5}\sqrt{{3}^{2}+{4}^{2}}}dt \\ & ={\displaystyle \int_{1}^{5}5\;dt}={5t|}_{1}^{5}=20.\end{array}$  {eq:fs-id1169738889929}

b. Using [ref:fs-id1169738053435], $\mathbf{{r}^{'}}(t)=\langle \text{cos}\;t-t\;\text{sin}\;t,\text{sin}\;t+t\;\text{cos}\;t,2\rangle ,$ so

$\begin{array}{rl}s & ={\displaystyle \int_{a}^{b}\| \mathbf{{r}^{'}}(t)\|}\;dt \\ & ={\displaystyle \int_{0}^{2\pi}\sqrt{{(\text{cos}\;t-t\;\text{sin}\;t)}^{2}+{(\text{sin}\;t+t\;\text{cos}\;t)}^{2}+{2}^{2}}}dt \\ & ={\displaystyle \int_{0}^{2\pi}\sqrt{({\text{cos}}^{2}t-2t\;\text{sin}\;t\;\text{cos}\;t+{t}^{2}{\text{sin}}^{2}t)+({\text{sin}}^{2}t+2t\;\text{sin}\;t\;\text{cos}\;t+{t}^{2}{\text{cos}}^{2}t)+4}\;dt} \\ & ={\displaystyle \int_{0}^{2\pi}\sqrt{{\text{cos}}^{2}t+{\text{sin}}^{2}t+{t}^{2}({\text{cos}}^{2}t+{\text{sin}}^{2}t)+4}\;dt} \\ & ={\displaystyle \int_{0}^{2\pi}\sqrt{{t}^{2}+5}\;dt}.\end{array}$  {eq:fs-id1169739203357}

Here we can use a table integration formula

${\displaystyle \int \sqrt{{u}^{2}+{a}^{2}}\;du}=\frac{u}{2}\sqrt{{u}^{2}+{a}^{2}}+\frac{{a}^{2}}{2}\text{ln}\;|u+\sqrt{{u}^{2}+{a}^{2}}|+C,$  {eq:fs-id1169736741555}

so we obtain

$\begin{array}{rl}{\displaystyle \int_{0}^{2\pi}\sqrt{{t}^{2}+5}\;dt} & =\frac{1}{2}{(t\sqrt{{t}^{2}+5}+5\;\text{ln}\;|t+\sqrt{{t}^{2}+5}|)}_{0}^{2\pi} \\ & =\frac{1}{2}(2\pi \sqrt{4{\pi}^{2}+5}+5\;\text{ln}\;(2\pi +\sqrt{4{\pi}^{2}+5}))-\frac{5}{2}\;\text{ln}\;\sqrt{5} \\ & \approx 25.343.\end{array}$  {eq:fs-id1169739225294}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738188910} type= 
PROBLEM:
Calculate the arc length of the parameterized curve

$\textbf{r}(t)=\langle 2{t}^{2}+1,2{t}^{2}-1,{t}^{3}\rangle ,0\le t\le 3.$  {eq:fs-id1169738187041}

SOLUTION:
$\mathbf{{r}^{'}}(t)=\langle 4t,4t,3{t}^{2}\rangle ,$ so $s=\frac{1}{27}({113}^{3\text{/}2}-{32}^{3\text{/}2})\approx 37.785$
COMMENTARY: Hint
Use [ref:fs-id1169738053435].
:::
:::
We now return to the helix introduced earlier in this chapter. A vector-valued function that describes a helix can be written in the form

$\textbf{r}(t)=R\;\text{cos}(\frac{2\pi Nt}{h})\;\textbf{i}+R\;\text{sin}(\frac{2\pi Nt}{h})\;\textbf{j}+t\;\textbf{k},\;0\le t\le h,$  {eq:fs-id1169737382153}

where *R* represents the radius of the helix, *h* represents the height (distance between two consecutive turns), and the helix completes *N* turns. Let’s derive a formula for the arc length of this helix using [ref:fs-id1169738053435]. First of all,

$\mathbf{{r}^{'}}(t)=-\frac{2\pi NR}{h}\text{sin}(\frac{2\pi Nt}{h})\;\textbf{i}+\frac{2\pi NR}{h}\text{cos}(\frac{2\pi Nt}{h})\;\textbf{j}+\textbf{k}.$  {eq:fs-id1169737297400}

Therefore,

$\begin{array}{rl}s & ={\displaystyle \int_{a}^{b}\| \mathbf{{r}^{'}}(t)\|}\;dt \\ & ={\displaystyle \int_{0}^{h}\sqrt{{(-\frac{2\pi NR}{h}\text{sin}(\frac{2\pi Nt}{h}))}^{2}+{(\frac{2\pi NR}{h}\text{cos}(\frac{2\pi Nt}{h}))}^{2}+{1}^{2}}dt} \\ & ={\displaystyle \int_{0}^{h}\sqrt{\frac{4{\pi}^{2}{N}^{2}{R}^{2}}{{h}^{2}}({\text{sin}}^{2}(\frac{2\pi Nt}{h})+{\text{cos}}^{2}(\frac{2\pi Nt}{h}))+1}}dt \\ & ={\displaystyle \int_{0}^{h}\sqrt{\frac{4{\pi}^{2}{N}^{2}{R}^{2}}{{h}^{2}}+1}}dt \\ & ={[t\sqrt{\frac{4{\pi}^{2}{N}^{2}{R}^{2}}{{h}^{2}}+1}]}_{0}^{h} \\ & =h\sqrt{\frac{4{\pi}^{2}{N}^{2}{R}^{2}+{h}^{2}}{{h}^{2}}} \\ & =\sqrt{4{\pi}^{2}{N}^{2}{R}^{2}+{h}^{2}}.\end{array}$  {eq:fs-id1169738046192}

This gives a formula for the length of a wire needed to form a helix with *N* turns that has radius *R* and height *h.*

## Arc-Length Parameterization
We now have a formula for the arc length of a curve defined by a vector-valued function. Let’s take this one step further and examine what an {term:arc-length function} is.
If a vector-valued function represents the position of a particle in space as a function of time, then the arc-length function measures how far that particle travels as a function of time. The formula for the arc-length function follows directly from the formula for arc length:

$$ s(t)={\displaystyle \int_{a}^{t}\sqrt{{({f}^{'}(u))}^{2}+{({g}^{'}(u))}^{2}+{({h}^{'}(u))}^{2}}}du. $$  {eq:fs-id1169737914271}

If the curve is in two dimensions, then only two terms appear under the square root inside the integral. The reason for using the independent variable *u* is to distinguish between time and the variable of integration. Since $s(t)$ measures distance traveled as a function of time, ${s}^{'}(t)$ measures the speed of the particle at any given time. Since we have a formula for $s(t)$ in [ref:fs-id1169737914271], we can differentiate both sides of the equation:

$\begin{array}{rl}{s}^{'}(t) & =\frac{d}{dt}[{\displaystyle \int_{a}^{t}\sqrt{{({f}^{'}(u))}^{2}+{({g}^{'}(u))}^{2}+{({h}^{'}(u))}^{2}}}du] \\ & =\frac{d}{dt}[{\displaystyle \int_{a}^{t}\| \mathbf{{r}^{'}}(u)\| \;du}] \\ & =\| \mathbf{{r}^{'}}(t)\| .\end{array}$  {eq:fs-id1169738155200}

If we assume that $\textbf{r}(t)$ defines a smooth curve, then the arc length is always increasing, so ${s}^{'}(t)>0$ for $t>a.$ Last, if $\textbf{r}(t)$ is a curve on which $\| \mathbf{{r}^{'}}(t)\| =1$ for all *t*, then

$s(t)={\displaystyle \int_{a}^{t}\| \mathbf{{r}^{'}}(u)\| \;du}={\displaystyle \int_{a}^{t}1\;du}=t-a,$  {eq:fs-id1169737822339}

which means that *t* represents the arc length as long as $a=0.$

:::note [theorem] Arc-Length Function
Let $\textbf{r}(t)$ describe a smooth curve for $t\ge a.$ Then the arc-length function is given by

$$ s(t)={\displaystyle \int_{a}^{t}\| \mathbf{{r}^{'}}(u)\| \;du}. $$  {eq:fs-id1169737151922}

Furthermore, $\frac{ds}{dt}=\| \mathbf{{r}^{'}}(t)\| >0.$ If $\| \mathbf{{r}^{'}}(t)\| =1$ for all $t\ge a,$ then the parameter *t* represents the arc length from the starting point at $t=a.$
:::
A useful application of this theorem is to find an alternative parameterization of a given curve, called an {term:arc-length parameterization}. Recall that any vector-valued function can be reparameterized via a change of variables. For example, if we have a function $\textbf{r}(t)=\langle 3\;\text{cos}\;t,3\;\text{sin}\;t\rangle ,0\le t\le 2\pi$ that parameterizes a circle of radius 3, we can change the parameter from *t* to $4t,$ obtaining a new parameterization $\textbf{r}(t)=\langle 3\;\text{cos}\;4t,3\;\text{sin}\;4t\rangle .$ The new parameterization still defines a circle of radius 3, but now we need only use the values $0\le t\le \pi \text{/}2$ to traverse the circle once.
Suppose that we find the arc-length function $s(t)$ and are able to solve this function for *t* as a function of *s.* We can then reparameterize the original function $\textbf{r}(t)$ by substituting the expression for *t* back into $\textbf{r}(t).$ The vector-valued function is now written in terms of the parameter *s.* Since the variable *s* represents the arc length, we call this an *arc-length parameterization* of the original function $\textbf{r}(t).$ One advantage of finding the arc-length parameterization is that the distance traveled along the curve starting from $s=0$ is now equal to the parameter *s.* The arc-length parameterization also appears in the context of curvature (which we examine later in this section) and line integrals, which we study in the [Introduction to Vector Calculus](module:m54017).

:::example {ex:fs-id1169737497107} Finding an Arc-Length Parameterization

:::exercise {fs-id1169738191466} type= 
PROBLEM:
Find the arc-length parameterization for each of the following curves:
a. $\textbf{r}(t)=4\;\text{cos}\;t\;\textbf{i}+4\;\text{sin}\;t\;\textbf{j},t\ge 0$
b. $\textbf{r}(t)=\langle t+3,\;2t-4,2t\rangle ,t\ge 3$
SOLUTION:
a. First we find the arc-length function using [ref:fs-id1169737151922]:

$\begin{array}{rl}s(t) & ={\displaystyle \int_{a}^{t}\| \mathbf{{r}^{'}}(u)\| \;du} \\ & ={\displaystyle \int_{0}^{t}\| \langle −4\;\text{sin}\;u,4\;\text{cos}\;u\rangle \| \;du} \\ & ={\displaystyle \int_{0}^{t}\sqrt{{(−4\;\text{sin}\;u)}^{2}+{(4\;\text{cos}\;u)}^{2}}\;du} \\ & ={\displaystyle \int_{0}^{t}\sqrt{16\;{\text{sin}}^{2}u+16\;{\text{cos}}^{2}u}\;du} \\ & ={\displaystyle \int_{0}^{t}4\;du}=4t,\end{array}$  {eq:fs-id1169737758152}

which gives the relationship between the arc length *s* and the parameter *t* as $s=4t;$ so, $t=s\text{/}4.$ Next we replace the variable *t* in the original function $\textbf{r}(t)=4\;\text{cos}\;t\;\textbf{i}+4\;\text{sin}\;t\;\textbf{j}$ with the expression $s\text{/}4$ to obtain

$\textbf{r}(t)=4\;\text{cos}(\frac{s}{4})\;\textbf{i}+4\;\text{sin}(\frac{s}{4})\;\textbf{j}\text{.}$  {eq:fs-id1169739165039}

This is the arc-length parameterization of $\textbf{r}(t).$ Since the original restriction on *t* was given by $t\ge 0,$ the restriction on *s* becomes $s\text{/}4\ge 0,$ or $s\ge 0.$
b. The arc-length function is given by [ref:fs-id1169737151922]:

$\begin{array}{rl}s(t) & ={\displaystyle \int_{a}^{t}\| \mathbf{{r}^{'}}(u)\| \;du} \\ & ={\displaystyle \int_{3}^{t}\| \langle 1,2,2\rangle \| \;du} \\ & ={\displaystyle \int_{3}^{t}\sqrt{{1}^{2}+{2}^{2}+{2}^{2}}\;du} \\ & ={\displaystyle \int_{3}^{t}3\;du} \\ & =3t-9.\end{array}$  {eq:fs-id1169736960680}

Therefore, the relationship between the arc length *s* and the parameter *t* is $s=3t-9,$ so $t=\frac{s}{3}+3.$ Substituting this into the original function $\textbf{r}(t)=\langle t+3,\;2t-4,2t\rangle$ yields

$\textbf{r}(s)=\langle (\frac{s}{3}+3)+3,\;2(\frac{s}{3}+3)-4,2(\frac{s}{3}+3)\rangle =\langle \frac{s}{3}+6,\;\frac{2s}{3}+2,\frac{2s}{3}+6\rangle .$  {eq:fs-id1169736588199}

This is an arc-length parameterization of $\textbf{r}(t).$ The original restriction on the parameter $t$ was $t\ge 3,$ so the restriction on *s* is $(s\text{/}3)+3\ge 3,$ or $s\ge 0.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738242941} type= 
PROBLEM:
Find the arc-length function for the helix

$\textbf{r}(t)=\langle 3\;\text{cos}\;t,3\;\text{sin}\;t,4t\rangle ,t\ge 0.$  {eq:fs-id1169738242948}

Then, use the relationship between the arc length and the parameter *t* to find an arc-length parameterization of $\textbf{r}(t).$
SOLUTION:
$s=5t,$ or $t=s\text{/}5.$ Substituting this into $\textbf{r}(t)=\langle 3\;\text{cos}\;t,3\;\text{sin}\;t,4t\rangle$ gives
$\textbf{r}(s)=\langle 3\;\text{cos}(\frac{s}{5}),\;3\;\text{sin}(\frac{s}{5}),\frac{4s}{5}\rangle ,s\ge 0.$
COMMENTARY: Hint
Start by finding the arc-length function.
:::
:::

## Curvature
An important topic related to arc length is curvature. The concept of curvature provides a way to measure how sharply a smooth curve turns. A circle has constant curvature. The smaller the radius of the circle, the greater the curvature.
Think of driving down a road. Suppose the road lies on an arc of a large circle. In this case you would barely have to turn the wheel to stay on the road. Now suppose the radius is smaller. In this case you would need to turn more sharply to stay on the road. In the case of a curve other than a circle, it is often useful first to inscribe a circle to the curve at a given point so that it is tangent to the curve at that point and “hugs” the curve as closely as possible in a neighborhood of the point ([ref:CNX_Calc_Figure_13_03_001]). The curvature of the graph at that point is then defined to be the same as the curvature of the inscribed circle.

> FIGURE {fig:CNX_Calc_Figure_13_03_001} src=../../media/CNX_Calc_Figure_13_03_001.jpg
> alt: This figure is the graph of a curve. The curve rises and falls in the first quadrant. Along the curve, where the curve changes from decreasing to increasing there is a circle. The bottom of the circle curves the same as the graph of the curve. There is also a second smaller circle where the curve goes from increasing to decreasing. Part of the circle falls on the curve. Both circles have the radius r represented.
> caption: The graph represents the curvature of a function $y=f(x).$ The sharper the turn in the graph, the greater the curvature, and the smaller the radius of the inscribed circle.

:::note [definition] Definition
Let *C* be a smooth curve in the plane or in space given by $\textbf{r}(s),$ where $s$ is the arc-length parameter. The {term:curvature} $κ$ at *s* is

$κ=\| \frac{d\;\textbf{T}}{ds}\| =\| \mathbf{{T}^{'}}(s)\| .$  {eq:fs-id1169737825995}

:::

:::note [media-2] 
Visit this [website](http://www.openstax.org/l/20_spacecurve) for more information about the curvature of a space curve.
:::
The formula in the definition of curvature is not very useful in terms of calculation. In particular, recall that $\textbf{T}(t)$ represents the unit tangent vector to a given vector-valued function $\textbf{r}(t),$ and the formula for $\textbf{T}(t)$ is $\textbf{T}(t)=\frac{\mathbf{{r}^{'}}(t)}{\| \mathbf{{r}^{'}}(t)\|}.$ To use the formula for curvature, it is first necessary to express $\textbf{r}(t)$ in terms of the arc-length parameter *s*, then find the unit tangent vector $\textbf{T}(s)$ for the function $\textbf{r}(s),$ then take the derivative of $\textbf{T}(s)$ with respect to *s.* This is a tedious process. Fortunately, there are equivalent formulas for curvature.

:::note [theorem] Alternative Formulas for Curvature
If *C* is a smooth curve given by $\textbf{r}(t),$ then the curvature $κ$ of *C* at *t* is given by

$$ κ=\frac{\| \mathbf{{T}^{'}}(t)\|}{\| \mathbf{{r}^{'}}(t)\|}. $$  {eq:fs-id1169737287184}

If *C* is a three-dimensional curve, then the curvature can be given by the formula

$$ κ=\frac{\| \mathbf{{r}^{'}}(t)\;\times \;\mathbf{{r}^{''}}(t)\|}{{\| \mathbf{{r}^{'}}(t)\|}^{3}}. $$  {eq:fs-id1169738153497}

If *C* is the graph of a function $y=f(x)$ and both ${y}^{'}$ and ${y}^{''}$ exist, then the curvature $κ$ at point $(x,y)$ is given by

$$ κ=\frac{|{y}^{''}|}{{[1+{({y}^{'})}^{2}]}^{3\text{/}2}}. $$  {eq:fs-id1169738200809}

:::

### Proof
The first formula follows directly from the chain rule:

$\frac{d\textbf{T}}{dt}=\frac{d\textbf{T}}{ds}\;\frac{ds}{dt},$  {eq:fs-id1169737836756}

where *s* is the arc length along the curve *C.* Dividing both sides by $ds\text{/}dt,$ and taking the magnitude of both sides gives

$\| \frac{d\textbf{T}}{ds}\| =\| \frac{\mathbf{{T}^{'}}(t)}{\frac{ds}{dt}}\| .$  {eq:fs-id1169737175544}

Since $ds\text{/}dt=\| \mathbf{{r}^{'}}(t)\| ,$ this gives the formula for the curvature $κ$ of a curve *C* in terms of any parameterization of *C*:

$κ=\frac{\| \mathbf{{T}^{'}}(t)\|}{\| \mathbf{{r}^{'}}(t)\|}.$  {eq:fs-id1169738032173}

In the case of a three-dimensional curve, we start with the formulas $\textbf{T}(t)=(\mathbf{{r}^{'}}(t))\text{/}\| \mathbf{{r}^{'}}(t)\|$ and $ds\text{/}dt=\| \mathbf{{r}^{'}}(t)\| .$ Therefore, $\mathbf{{r}^{'}}(t)=(ds\text{/}dt)\;\textbf{T}(t).$ We can take the derivative of this function using the scalar product formula:

$\mathbf{{r}^{''}}(t)=\frac{{d}^{2}s}{d{t}^{2}}\textbf{T}(t)+\frac{ds}{dt}\mathbf{{T}^{'}}(t).$  {eq:fs-id1169737279656}

Using these last two equations we get

$\begin{array}{rl}\mathbf{{r}^{'}}(t)\;\times \;\mathbf{{r}^{''}}(t) & =\frac{ds}{dt}\textbf{T}(t)\;\times \;(\frac{{d}^{2}s}{d{t}^{2}}\textbf{T}(t)+\frac{ds}{dt}\mathbf{{T}^{'}}(t)) \\ & =\frac{ds}{dt}\;\frac{{d}^{2}s}{d{t}^{2}}\textbf{T}(t)\;\times \;\textbf{T}(t)+{(\frac{ds}{dt})}^{2}\textbf{T}(t)\;\times \;\mathbf{{T}^{'}}(t).\end{array}$  {eq:fs-id1169737174680}

Since $\textbf{T}(t)\;\times \;\textbf{T}(t)=\mathbf{0},$ this reduces to

$\mathbf{{r}^{'}}(t)\;\times \;\mathbf{{r}^{''}}(t)={(\frac{ds}{dt})}^{2}\textbf{T}(t)\;\times \;\mathbf{{T}^{'}}(t).$  {eq:fs-id1169737265685}

Because $T(t)$ is a unit vector, $\| T(t)\| =1$ for all values of $t$. So, $T(t)\cdot T(t)=$ ${\| T(t)\|}^{2}=1$.
By [ref:fs-id1169738214420], we have  
$0=\frac{d}{dt}(T(t)⋅T(t))=\mathbf{{T}^{'}}(t)⋅T(t)+T(t)⋅\mathbf{{T}^{'}}(t)=2\mathbf{{T}^{'}}(t)⋅T(t).$  {eq:eq-00001}
  Therefore, $\mathbf{{T}^{'}}⋅T=0$ showing that $T$ and $\mathbf{{T}^{'}}$ are perpendicular. This means that   
$\| T\times \mathbf{{T}^{'}}\| =\| T\| .\| \mathbf{{T}^{'}}\| \text{sin}\frac{\pi}{2}\text{=}\| {T}^{'}\| \text{, so}$  {eq:eq-00002}

$\| {r}^{'}(t)\;\times \;{r}^{''}(t)\| ={(\frac{ds}{dt})}^{2}\| {T}^{'}(t)\| .$  {eq:fs-id1169737364004}

Now we solve this equation for $\| \mathbf{{T}^{'}}(t)\|$ and use the fact that $ds\text{/}dt=\| \mathbf{{r}^{'}}(t)\| \text{:}$

$\| \mathbf{{T}^{'}}(t)\| =\frac{\| \mathbf{{r}^{'}}(t)\;\times \;\mathbf{{r}^{''}}(t)\|}{{\| \mathbf{{r}^{'}}(t)\|}^{2}}.$  {eq:fs-id1169737168750}

Then, we divide both sides by $\| \mathbf{{r}^{'}}(t)\| .$ This gives

$κ=\frac{\| \mathbf{{T}^{'}}(t)\|}{\| \mathbf{{r}^{'}}(t)\|}=\frac{\| \mathbf{{r}^{'}}(t)\;\times \;\mathbf{{r}^{''}}(t)\|}{{\| \mathbf{{r}^{'}}(t)\|}^{3}}.$  {eq:fs-id1169737825902}

This proves [ref:fs-id1169738153497]. To prove [ref:fs-id1169738200809], we start with the assumption that curve *C* is defined by the function $y=f(x).$ Then, we can define $\textbf{r}(t)=x\;\textbf{i}+f(x)\;\textbf{j}+0\;\textbf{k}.$ Using the previous formula for curvature:

$\begin{array}{rl}\mathbf{{r}^{'}}(t) & =\textbf{i}+{f}^{'}(x)\;\textbf{j} \\ \mathbf{{r}^{''}}(t) & ={f}^{''}(x)\;\textbf{j} \\ \mathbf{{r}^{'}}(t)\;\times \;\mathbf{{r}^{''}}(t) & =\left|\begin{array}{lll}\textbf{i} & \textbf{j} & \textbf{k} \\ 1 & {f}^{'}(x) & 0 \\ 0 & {f}^{''}(x) & 0\end{array}\right|={f}^{''}(x)\;\textbf{k}.\end{array}$  {eq:fs-id1169738157871}

Therefore,

$κ=\frac{\| \mathbf{{r}^{'}}(t)\;\times \;\mathbf{{r}^{''}}(t)\|}{{\| \mathbf{{r}^{'}}(t)\|}^{3}}=\frac{|{f}^{''}(x)|}{{(1+[{({f}^{'}(x))}^{2}])}^{3\text{/}2}}.$  {eq:fs-id1169738206278}

□

:::example {ex:fs-id1169737379326} Finding Curvature

:::exercise {fs-id1169737379328} type= 
PROBLEM:
Find the curvature for each of the following curves at the given point:
a. $\textbf{r}(t)=4\;\text{cos}\;t\;\textbf{i}+4\;\text{sin}\;t\;\textbf{j}+3t\;\textbf{k},t=\frac{4\pi}{3}$
b. $f(x)=\sqrt{4x-{x}^{2}},x=2$
SOLUTION:
a. This function describes a helix.

> IMAGE {img:fs-id1169737522890} src=../../media/CNX_Calc_Figure_13_03_002.jpg
> alt: This figure is the graph of a curve in 3 dimensions. The curve is a helix that spirals around the z-axis. It begins below the xy plane and spirals up with orientation.

The curvature of the helix at $t=(4\pi )\text{/}3$ can be found by using [ref:fs-id1169737287184]. First, calculate $\textbf{T}(t)\text{:}$

$\begin{array}{rl}\textbf{T}(t) & =\frac{\mathbf{{r}^{'}}(t)}{\| \mathbf{{r}^{'}}(t)\|} \\ & =\frac{\langle −4\;\text{sin}\;t,4\;\text{cos}\;t,3\rangle}{\sqrt{{(−4\;\text{sin}\;t)}^{2}+{(4\;\text{cos}\;t)}^{2}+{3}^{2}}} \\ & =\langle -\frac{4}{5}\text{sin}\;t,\frac{4}{5}\text{cos}\;t,\frac{3}{5}\rangle .\end{array}$  {eq:fs-id1169737026063}

Next, calculate $\mathbf{{T}^{'}}(t)\text{:}$

$\mathbf{{T}^{'}}(t)=\langle -\frac{4}{5}\text{cos}\;t,-\frac{4}{5}\text{sin}\;t,0\rangle .$  {eq:fs-id1169737012722}

Last, apply [ref:fs-id1169737287184]:

$\begin{array}{rl}κ & =\frac{\| \mathbf{{T}^{'}}(t)\|}{\| \mathbf{{r}^{'}}(t)\|}=\frac{\| \langle -\frac{4}{5}\text{cos}\;t,-\frac{4}{5}\text{sin}\;t,0\rangle \|}{\| \langle −4\;\text{sin}\;t,4\;\text{cos}\;t,3\rangle \|} \\ & =\frac{\sqrt{{(-\frac{4}{5}\text{cos}\;t)}^{2}+{(-\frac{4}{5}\text{sin}\;t)}^{2}+{0}^{2}}}{\sqrt{{(−4\;\text{sin}\;t)}^{2}+{(4\;\text{cos}\;t)}^{2}+{3}^{2}}} \\ & =\frac{4\text{/}5}{5}=\frac{4}{25}.\end{array}$  {eq:fs-id1169736731247}

The curvature of this helix is constant at all points on the helix.
b. This function describes a semicircle.

> IMAGE {img:fs-id1169737204861} src=../../media/CNX_Calc_Figure_13_03_003.jpg
> alt: This figure is the graph of a semicircle. It is in the first quadrant. The semicircle begins at the origin and stops at 4 on the x-axis. The semicircle represents the function f(x) = the square root of (4x-x^2).

To find the curvature of this graph, we must use [ref:fs-id1169738200809]. First, we calculate ${y}^{'}$ and ${y}^{''}\text{:}$

$\begin{array}{rl}y & =\sqrt{4x-{x}^{2}}={(4x-{x}^{2})}^{1\text{/}2} \\ {y}^{'} & =\frac{1}{2}{(4x-{x}^{2})}^{-1\text{/}2}(4-2x)=(2-x){(4x-{x}^{2})}^{-1\text{/}2} \\ {y}^{''} & =-{(4x-{x}^{2})}^{-1\text{/}2}+(2-x)(-\frac{1}{2}){(4x-{x}^{2})}^{-3\text{/}2}(4-2x) \\ & =-\frac{4x-{x}^{2}}{{(4x-{x}^{2})}^{3\text{/}2}}-\frac{{(2-x)}^{2}}{{(4x-{x}^{2})}^{3\text{/}2}} \\ & =\frac{{x}^{2}-4x-(4-4x+{x}^{2})}{{(4x-{x}^{2})}^{3\text{/}2}} \\ & =-\frac{4}{{(4x-{x}^{2})}^{3\text{/}2}}.\end{array}$  {eq:fs-id1169739357142}

Then, we apply [ref:fs-id1169738200809]:

$\begin{array}{rl}κ & =\frac{|{y}^{''}|}{{[1+{({y}^{'})}^{2}]}^{3\text{/}2}} \\ & =\frac{|-\frac{4}{{(4x-{x}^{2})}^{3\text{/}2}}|}{{[1+{((2-x){(4x-{x}^{2})}^{-1\text{/}2})}^{2}]}^{3\text{/}2}}=\frac{|\frac{4}{{(4x-{x}^{2})}^{3\text{/}2}}|}{{[1+\frac{{(2-x)}^{2}}{4x-{x}^{2}}]}^{3\text{/}2}} \\ & =\frac{|\frac{4}{{(4x-{x}^{2})}^{3\text{/}2}}|}{{[\frac{4x-{x}^{2}+{x}^{2}-4x+4}{4x-{x}^{2}}]}^{3\text{/}2}}=|\frac{4}{{(4x-{x}^{2})}^{3\text{/}2}}|\cdot \frac{{(4x-{x}^{2})}^{3\text{/}2}}{8} \\ & =\frac{1}{2}.\end{array}$  {eq:fs-id1169736817141}

The curvature of this circle is equal to the reciprocal of its radius.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169737569232} type= 
PROBLEM:
Find the curvature of the curve defined by the function

$y=3{x}^{2}-2x+4$  {eq:fs-id1169737950320}

at the point $x=2.$
SOLUTION:
$κ=\frac{6}{{101}^{3\text{/}2}}\approx 0.0059$
COMMENTARY: Hint
Use [ref:fs-id1169738200809].
:::
:::

## The Normal and Binormal Vectors
We have seen that the derivative $\mathbf{{r}^{'}}(t)$ of a vector-valued function is a tangent vector to the curve defined by $\textbf{r}(t),$ and the unit tangent vector $\textbf{T}(t)$ can be calculated by dividing $\mathbf{{r}^{'}}(t)$ by its magnitude. When studying motion in three dimensions, two other vectors are useful in describing the motion of a particle along a path in space: the {term:principal unit normal vector} and the {term:binormal vector}.

:::note [definition] Definition
Let *C* be a three-dimensional {term:smooth} curve represented by **r** over an open interval *I.* If $\mathbf{{T}^{'}}(t)≠\mathbf{0},$ then the principal unit normal vector at *t* is defined to be

$$ \textbf{N}(t)=\frac{\mathbf{{T}^{'}}(t)}{\| \mathbf{{T}^{'}}(t)\|}. $$  {eq:fs-id1169737271064}

The binormal vector at *t* is defined as

$$ \textbf{B}(t)=\textbf{T}(t)\;\times \;\textbf{N}(t), $$  {eq:fs-id1169737805867}

where $\textbf{T}(t)$ is the unit tangent vector.
:::
Note that, by definition, the binormal vector is orthogonal to both the unit tangent vector and the normal vector. Furthermore, $\textbf{B}(t)$ is always a unit vector. This can be shown using the formula for the magnitude of a cross product

$\| \textbf{B}(t)\| =\| \textbf{T}(t)\;\times \;\textbf{N}(t)\| =\| \textbf{T}(t)\| \| \textbf{N}(t)\| \text{sin}\;\theta ,$  {eq:fs-id1169737527159}

where $\theta$ is the angle between $\textbf{T}(t)$ and $\textbf{N}(t).$ Since $\textbf{N}(t)$ is the derivative of a unit vector, property (vii) of the derivative of a vector-valued function tells us that $\textbf{T}(t)$ and $\textbf{N}(t)$ are orthogonal to each other, so $\theta =\pi \text{/}2.$ Furthermore, they are both unit vectors, so their magnitude is 1. Therefore, $\| \textbf{T}(t)\| \| \textbf{N}(t)\| \text{sin}\;\theta =(1)(1)\text{sin}(\pi \text{/}2)=1$ and $\textbf{B}(t)$ is a unit vector.
The principal unit normal vector can be challenging to calculate because the unit tangent vector involves a quotient, and this quotient often has a square root in the denominator. In the three-dimensional case, finding the cross product of the unit tangent vector and the unit normal vector can be even more cumbersome. Fortunately, we have alternative formulas for finding these two vectors, and they are presented in [Motion in Space](module:m53930).

:::example {ex:fs-id1169737378570} Finding the Principal Unit Normal Vector and Binormal Vector

:::exercise {fs-id1169737378572} type= 
PROBLEM:
For each of the following vector-valued functions, find the principal unit normal vector. Then, if possible, find the binormal vector.
a. $\textbf{r}(t)=4\;\text{cos}\;t\;\textbf{i}-4\;\text{sin}\;t\;\textbf{j}$
b. $\textbf{r}(t)=(6t+2)\;\textbf{i}+5{t}^{2}\;\textbf{j}-8t\;\textbf{k}$
SOLUTION:
a. This function describes a circle.

> IMAGE {img:fs-id1169737204150} src=../../media/CNX_Calc_Figure_13_03_004.jpg
> alt: This figure is the graph of a circle centered at the origin with radius of 2. The orientation of the circle is clockwise. It represents the vector-valued function r(t) = 4costi – 4 sintj.

To find the principal unit normal vector, we first must find the unit tangent vector $\textbf{T}(t)\text{:}$

$\begin{array}{rl}\textbf{T}(t) & =\frac{\mathbf{{r}^{'}}(t)}{\| \mathbf{{r}^{'}}(t)\|} \\ & =\frac{−4\;\text{sin}\;t\;\textbf{i}-4\;\text{cos}\;t\;\textbf{j}}{\sqrt{{(−4\;\text{sin}\;t)}^{2}+{(−4\;\text{cos}\;t)}^{2}}} \\ & =\frac{−4\;\text{sin}\;t\;\textbf{i}-4\;\text{cos}\;t\;\textbf{j}}{\sqrt{16\;{\text{sin}}^{2}t+16\;{\text{cos}}^{2}t}} \\ & =\frac{−4\;\text{sin}\;t\;\textbf{i}-4\;\text{cos}\;t\;\textbf{j}}{\sqrt{16({\text{sin}}^{2}t+{\text{cos}}^{2}t)}} \\ & =\frac{−4\;\text{sin}\;t\;\textbf{i}-4\;\text{cos}\;t\;\textbf{j}}{4} \\ & =-\text{sin}\;t\;\textbf{i}-\text{cos}\;t\;\textbf{j}.\end{array}$  {eq:fs-id1169739202663}

Next, we use [ref:fs-id1169737271064]:

$\begin{array}{rl}\textbf{N}(t) & =\frac{\mathbf{{T}^{'}}(t)}{\| \mathbf{{T}^{'}}(t)\|} \\ & =\frac{\text{−}\text{cos}\;t\;\textbf{i}+\text{sin}\;t\;\textbf{j}}{\sqrt{{(\text{−}\text{cos}\;t)}^{2}+{(\text{sin}\;t)}^{2}}} \\ & =\frac{\text{−}\text{cos}\;t\;\textbf{i}+\text{sin}\;t\;\textbf{j}}{\sqrt{{\text{cos}}^{2}t+{\text{sin}}^{2}t}} \\ & =-\text{cos}\;t\;\textbf{i}+\text{sin}\;t\;\textbf{j}.\end{array}$  {eq:fs-id1169736594724}

Notice that the unit tangent vector and the principal unit normal vector are orthogonal to each other for all values of *t*:

$\begin{array}{rl}\textbf{T}(t)\cdot \textbf{N}(t) & =\langle \text{−}\text{sin}\;t,-\text{cos}\;t\rangle \cdot \langle \text{−}\text{cos}\;t,\text{sin}\;t\rangle \\ & =\text{sin}\;t\;\text{cos}\;t-\text{cos}\;t\;\text{sin}\;t \\ & =0.\end{array}$  {eq:fs-id1169736724012}

Furthermore, the principal unit normal vector points toward the center of the circle from every point on the circle. Since $\textbf{r}(t)$ defines a curve in two dimensions, we cannot calculate the binormal vector.

> IMAGE {img:fs-id1169737295896} src=../../media/CNX_Calc_Figure_13_03_005.jpg
> alt: This figure is the graph of a circle centered at the origin with radius of 2. The orientation of the circle is clockwise. It represents the vector-valued function r(t) = 4costi – 4 sintj. On the circle in the first quadrant is a vector pointing inward. It is labeled “principal unit normal vector”.

b. This function looks like this:

> IMAGE {img:fs-id1169737295912} src=../../media/CNX_Calc_Figure_13_03_011.jpg
> alt: This figure is a curve in 3 dimensions. It is inside of a box. The box represents the first octant. The curve starts at the bottom right of the box and curves through the box in a parabolic curve to the top.

To find the principal unit normal vector, we first find the unit tangent vector $\textbf{T}(t)\text{:}$

$\begin{array}{rl}\textbf{T}(t) & =\frac{\mathbf{{r}^{'}}(t)}{\| \mathbf{{r}^{'}}(t)\|} \\ & =\frac{6\;\textbf{i}+10t\;\textbf{j}-8\;\textbf{k}}{\sqrt{{6}^{2}+{(10t)}^{2}+{(−8)}^{2}}} \\ & =\frac{6\;\textbf{i}+10t\;\textbf{j}-8\;\textbf{k}}{\sqrt{36+100{t}^{2}+64}} \\ & =\frac{6\;\textbf{i}+10t\;\textbf{j}-8\textbf{k}}{\sqrt{100({t}^{2}+1)}} \\ & =\frac{3\;\textbf{i}+5t\;\textbf{j}-4\textbf{k}}{5\sqrt{{t}^{2}+1}} \\ & =\frac{3}{5}{({t}^{2}+1)}^{-1\text{/}2}\textbf{i}+t{({t}^{2}+1)}^{-1\text{/}2}\textbf{j}-\frac{4}{5}{({t}^{2}+1)}^{-1\text{/}2}\textbf{k}.\end{array}$  {eq:fs-id1169736964635}

Next, we calculate $\mathbf{{T}^{'}}(t)$ and $\| \mathbf{{T}^{'}}(t)\| \text{:}$

$\begin{array}{rl}\mathbf{{T}^{'}}(t) & =\frac{3}{5}(-\frac{1}{2}){({t}^{2}+1)}^{-3\text{/}2}(2t)\;\textbf{i}+({({t}^{2}+1)}^{-1\text{/}2}-t(\frac{1}{2}){({t}^{2}+1)}^{-3\text{/}2}(2t))\;\textbf{j} \\ & \hspace{3em}-\frac{4}{5}(-\frac{1}{2}){({t}^{2}+1)}^{-3\text{/}2}(2t)\;\textbf{k} \\ & =-\frac{3t}{5{({t}^{2}+1)}^{3\text{/}2}}\textbf{i}+\frac{1}{{({t}^{2}+1)}^{3\text{/}2}}\textbf{j}+\frac{4t}{5{({t}^{2}+1)}^{3\text{/}2}}\textbf{k} \\ \| \mathbf{{T}^{'}}(t)\| & =\sqrt{{(-\frac{3t}{5{({t}^{2}+1)}^{3\text{/}2}})}^{2}+{(-\frac{1}{{({t}^{2}+1)}^{3\text{/}2}})}^{2}+{(\frac{4t}{5{({t}^{2}+1)}^{3\text{/}2}})}^{2}} \\ & =\sqrt{\frac{9{t}^{2}}{25{({t}^{2}+1)}^{3}}+\frac{1}{{({t}^{2}+1)}^{3}}+\frac{16{t}^{2}}{25{({t}^{2}+1)}^{3}}} \\ & =\sqrt{\frac{25{t}^{2}+25}{25{({t}^{2}+1)}^{3}}} \\ & =\sqrt{\frac{1}{{({t}^{2}+1)}^{2}}} \\ & =\frac{1}{{t}^{2}+1}.\end{array}$  {eq:fs-id1169736588797}

Therefore, according to [ref:fs-id1169737271064]:

$\begin{array}{rl}\textbf{N}(t) & =\frac{\mathbf{{T}^{'}}(t)}{\| \mathbf{{T}^{'}}(t)\|} \\ & =(-\frac{3t}{5{({t}^{2}+1)}^{3\text{/}2}}\textbf{i}+\frac{1}{{({t}^{2}+1)}^{3\text{/}2}}\textbf{j}+\frac{4t}{5{({t}^{2}+1)}^{3\text{/}2}}\textbf{k})({t}^{2}+1) \\ & =-\frac{3t}{5{({t}^{2}+1)}^{1\text{/}2}}\textbf{i}+\frac{5}{5{({t}^{2}+1)}^{1\text{/}2}}\textbf{j}+\frac{4t}{5{({t}^{2}+1)}^{1\text{/}2}}\textbf{k} \\ & =-\frac{3t\;\textbf{i}-5\textbf{j}-4t\;\textbf{k}}{5\sqrt{{t}^{2}+1}}.\end{array}$  {eq:fs-id1169736834097}

Once again, the unit tangent vector and the principal unit normal vector are orthogonal to each other for all values of *t*:

$\begin{array}{rl}\textbf{T}(t)\cdot \textbf{N}(t) & =(\frac{3\;\textbf{i}+5t\;\textbf{j}-4\textbf{k}}{5\sqrt{{t}^{2}+1}})\cdot (-\frac{3t\;\textbf{i}-5\textbf{j}-4t\;\textbf{k}}{5\sqrt{{t}^{2}+1}}) \\ & =\frac{3(−3t)-5t(−5)-4(4t)}{5\sqrt{{t}^{2}+1}} \\ & =\frac{−9t+25t-16t}{5\sqrt{{t}^{2}+1}} \\ & =0.\end{array}$  {eq:fs-id1169736811686}

Last, since $\textbf{r}(t)$ represents a three-dimensional curve, we can calculate the binormal vector using [ref:fs-id1169738200809]:

$\begin{array}{ll}\text{B}(t) & =\text{T}(t)\;\times \;\text{N}(t) \\ & =\left|\begin{array}{lll}\textbf{i} & \textbf{j} & \textbf{k} \\ \frac{3}{5\sqrt{{t}^{2}+1}} & +\frac{5t}{5\sqrt{{t}^{2}+1}} & -\frac{4}{5\sqrt{{t}^{2}+1}} \\ -\frac{3t}{5\sqrt{{t}^{2}+1}} & +\frac{5}{5\sqrt{{t}^{2}+1}} & \frac{4t}{5\sqrt{{t}^{2}+1}}\end{array}\right| \\ & =((+\frac{5t}{5\sqrt{{t}^{2}+1}})(\frac{4t}{5\sqrt{{t}^{2}+1}})-(-\frac{4}{5\sqrt{{t}^{2}+1}})(+\frac{5}{5\sqrt{{t}^{2}+1}}))\;\text{i} \\ & \;+((\frac{3}{5\sqrt{{t}^{2}+1}})(\frac{4t}{5\sqrt{{t}^{2}+1}})-(-\frac{4}{5\sqrt{{t}^{2}+1}})(-\frac{3t}{5\sqrt{{t}^{2}+1}}))\;\text{j} \\ & \;+((\frac{3}{5\sqrt{{t}^{2}+1}})(+\frac{5}{5\sqrt{{t}^{2}+1}})-(+\frac{5t}{5\sqrt{{t}^{2}+1}})(-\frac{3t}{5\sqrt{{t}^{2}+1}}))\;\text{k} \\ & =(\frac{20{t}^{2}+20}{25({t}^{2}+1)})\;\text{i}+(\frac{−15-15{t}^{2}}{25({t}^{2}+1)})\;\text{k} \\ & =20(\frac{{t}^{2}+1}{25({t}^{2}+1)})\;\text{i+}15(\frac{{t}^{2}+1}{25({t}^{2}+1)})\;\text{k} \\ & =\frac{4}{5}\text{i+}\frac{3}{5}\text{k}.\end{array}$  {eq:fs-id1169736833869}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169737531300} type= 
PROBLEM:
Find the unit normal vector for the vector-valued function $\textbf{r}(t)=({t}^{2}-3t)\;\textbf{i}+(4t+1)\;\textbf{j}$ and evaluate it at $t=2.$
SOLUTION:
$\textbf{N}(2)=\frac{\sqrt{2}}{2}(\textbf{i}-\textbf{j})$
COMMENTARY: Hint
First, find $\textbf{T}(t),$ then use [ref:fs-id1169737914271].
:::
:::
For any smooth curve in three dimensions that is defined by a vector-valued function, we now have formulas for the unit tangent vector **T**, the unit normal vector **N**, and the binormal vector **B**. The unit normal vector and the binormal vector form a plane that is perpendicular to the curve at any point on the curve, called the {term:normal plane}. In addition, these three vectors form a frame of reference in three-dimensional space called the {term:Frenet frame of reference} (also called the **TNB** frame) ([ref:CNX_Calc_Figure_13_03_006]). Last, the plane determined by the vectors **T** and **N** forms the osculating plane of *C* at any point *P* on the curve.

> FIGURE {fig:CNX_Calc_Figure_13_03_006} src=../../media/CNX_Calc_Figure_13_03_006.jpg
> alt: This figure is the graph of a curve increasing and decreasing. Along the curve at 4 different points are 3 vectors at each point. The first vector is labeled “T” and is tangent to the curve at the point. The second vector is labeled “N” and is normal to the curve at the point. The third vector is labeled “B” and is orthogonal to T and N.
> caption: This figure depicts a Frenet frame of reference. At every point *P* on a three-dimensional curve, the unit tangent, unit normal, and binormal vectors form a three-dimensional frame of reference.

Suppose we form a circle in the osculating plane of *C* at point *P* on the curve. Assume that the circle has the same curvature as the curve does at point *P* and let the circle have radius *r.* Then, the curvature of the circle is given by $1\text{/}r.$ We call *r* the {term:radius of curvature} of the curve, and it is equal to the reciprocal of the curvature. If this circle lies on the concave side of the curve and is tangent to the curve at point *P,* then this circle is called the {term:osculating circle} of *C* at *P*, as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_13_03_007} src=../../media/CNX_Calc_Figure_13_03_007.jpg
> alt: This figure is the graph of a curve with a circle in the middle. The bottom of the circle is the same as part of the curve. Inside of the circle is a vector labeled “r”. It starts at point “P” on the circle and points towards the radius. There is also a line segment perpendicular to the radius and tangent to point P.
> caption: In this osculating circle, the circle is tangent to curve *C* at point *P* and shares the same curvature.

:::note [media-2] 
For more information on osculating circles, see this [demonstration](http://www.openstax.org/l/20_OsculCircle1) on curvature and torsion, this [article](http://www.openstax.org/l/20_OsculCircle3) on osculating circles, and this [discussion](http://www.openstax.org/l/20_OsculCircle2) of Serret formulas.
:::
To find the equation of an osculating circle in two dimensions, we need find only the center and radius of the circle.

:::example {ex:fs-id1169738056374} Finding the Equation of an Osculating Circle

:::exercise {fs-id1169738056376} type= 
PROBLEM:
Find an equation of the osculating circle of the curve defined by the function $y={x}^{3}-3x+1$ at $x=1.$
SOLUTION:
[ref:CNX_Calc_Figure_13_03_008] shows the graph of $y={x}^{3}-3x+1.$

> FIGURE {fig:CNX_Calc_Figure_13_03_008} src=../../media/CNX_Calc_Figure_13_03_008.jpg
> alt: This figure is the graph of a cubic function y = x^3-3x+1. The curve increases, reaches a maximum at x=-1, decreases passing through the y-axis at 1, then reaching a minimum at x =1 before increasing again.
> caption: We want to find the osculating circle of this graph at the point where $t=1.$

First, let’s calculate the curvature at $x=1\text{:}$

$κ=\frac{|{f}^{''}(x)|}{{(1+{[{f}^{'}(x)]}^{2})}^{3\text{/}2}}=\frac{|6x|}{{(1+{[3{x}^{2}-3]}^{2})}^{3\text{/}2}}.$  {eq:fs-id1169737389237}

This gives $κ=6.$ Therefore, the radius of the osculating circle is given by $R=\frac{1}{κ}=\frac{1}{6}.$ Next, we then calculate the coordinates of the center of the circle. When $x=1,$ the slope of the tangent line is zero. Therefore, the center of the osculating circle is directly above the point on the graph with coordinates $(1,−1).$ The center is located at $(1,-\frac{5}{6}).$ The formula for a circle with radius *r* and center $(h,k)$ is given by ${(x-h)}^{2}+{(y-k)}^{2}={r}^{2}.$ Therefore, the equation of the osculating circle is ${(x-1)}^{2}+{(y+\frac{5}{6})}^{2}=\frac{1}{36}.$ The graph and its osculating circle appears in the following graph.

> FIGURE {fig:CNX_Calc_Figure_13_03_009} src=../../media/CNX_Calc_Figure_13_03_009.jpg
> alt: This figure is the graph of a cubic function y = x^3-3x+1. The curve increases, reaches a maximum at x=-1, decreases passing through the y-axis at 1, then reaching a minimum at x =1 before increasing again. There is a small circle inside of the bend of the cure at x = 1.
> caption: The osculating circle has radius $R=1\text{/}6.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169737300014} type= 
PROBLEM:
Find an equation of the osculating circle of the curve defined by the vector-valued function $y=2{x}^{2}-4x+5$ at $x=1.$
SOLUTION:
$κ=\frac{4}{{[1+{(4x-4)}^{2}]}^{3\text{/}2}}$
At the point $x=1,$ the curvature is equal to 4. Therefore, the radius of the osculating circle is $\frac{1}{4}.$
A graph of this function appears next:

> IMAGE {img:fs-id1169738250548} src=../../media/CNX_Calc_Figure_13_03_010.jpg
> alt: This figure is the graph of the function y = 2x^2-4x+5. The curve is a parabola opening up with vertex at (1, 3).

The vertex of this parabola is located at the point $(1,3).$ Furthermore, the center of the osculating circle is directly above the vertex. Therefore, the coordinates of the center are $(1,\frac{13}{4}).$ The equation of the osculating circle is
${(x-1)}^{2}+{(y-\frac{13}{4})}^{2}=\frac{1}{16}.$
COMMENTARY: Hint
Use [ref:fs-id1169738200809] to find the curvature of the graph, then draw a graph of the function around $x=1$ to help visualize the circle in relation to the graph.
:::
:::

## Key Concepts {section:key-concepts}
- The arc-length function for a vector-valued function is calculated using the integral formula $s(t)={\displaystyle \int_{a}^{t}\| \mathbf{{r}^{'}}(u)\| \;du}.$ This formula is valid in both two and three dimensions.
- The curvature of a curve at a point in either two or three dimensions is defined to be the curvature of the inscribed circle at that point. The arc-length parameterization is used in the definition of curvature.
- There are several different formulas for curvature. The curvature of a circle is equal to the reciprocal of its radius.
- The principal unit normal vector at *t* is defined to be

$\textbf{N}(t)=\frac{\mathbf{{T}^{'}}(t)}{\| \mathbf{{T}^{'}}(t)\|}.$  {eq:fs-id1169739281103}

- The binormal vector at *t* is defined as $\textbf{B}(t)=\textbf{T}(t)\;\times \;\textbf{N}(t),$ where $\textbf{T}(t)$ is the unit tangent vector.
- The Frenet frame of reference is formed by the unit tangent vector, the principal unit normal vector, and the binormal vector.
- The osculating circle is tangent to a curve at a point and has the same curvature as the tangent curve at that point.

## Key Equations {section:key-equations}

> TABLE {tab:eip-542} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Arc length of space curve** | $s={\displaystyle \int_{a}^{b}\sqrt{\;{[{f}^{'}(t)]}^{2}+{[{g}^{'}(t)]}^{2}+{[{h}^{'}(t)]}^{2}}}\;dt={\displaystyle \int_{a}^{b}\| \mathbf{{r}^{'}}(t)\|}dt$ |
| **Arc-length function** | $s(t)={\displaystyle \int_{a}^{t}\sqrt{{({f}^{'}(u))}^{2}+{({g}^{'}(u))}^{2}+{({h}^{'}(u))}^{2}}}du\;\text{or}\;s(t)={\displaystyle \int_{a}^{t}\| \mathbf{{r}^{'}}(u)\| \;du}$ |
| **Curvature** | $κ=\frac{\| \mathbf{{T}^{'}}(t)\|}{\| \mathbf{{r}^{'}}(t)\|}\;\text{or}\;κ=\frac{\| \mathbf{{r}^{'}}(t)\;\times \;\mathbf{{r}^{''}}(t)\|}{{\| \mathbf{{r}^{'}}(t)\|}^{3}}\;\text{or}\;κ=\frac{|{y}^{''}|}{{[1+{({y}^{'})}^{2}]}^{3\text{/}2}}$ |
| **Principal unit normal vector** | $\textbf{N}(t)=\frac{\mathbf{{T}^{'}}(t)}{\| \mathbf{{T}^{'}}(t)\|}$ |
| **Binormal vector** | $\textbf{B}(t)=\textbf{T}(t)\;\times \;\textbf{N}(t)$ |

##  {section:section-exercises}
Find the arc length of the curve on the given interval.

:::exercise {fs-id1169738079918} type= 
PROBLEM:
$\textbf{r}(t)={t}^{2}\textbf{i}+14t\textbf{j},\;0\le t\le 7.$ This portion of the graph is shown here:

> IMAGE {img:fs-id1169738244690} src=../../media/CNX_Calc_Figure_13_03_203.jpg
> alt: This figure is the graph of a curve beginning at the origin and increasing.

:::

:::exercise {fs-id1169738244710} type= 
PROBLEM:
$\textbf{r}(t)={t}^{2}\textbf{i}+(2{t}^{2}+1)\textbf{j},\;1\le t\le 3$
SOLUTION:
$8\sqrt{5}$
:::

:::exercise {fs-id1169737285182} type= 
PROBLEM:
$\textbf{r}(t)=\langle 2\;\text{sin}\;t,5t,2\;\text{cos}\;t\rangle ,0\le t\le \pi .$ This portion of the graph is shown here:

> IMAGE {img:fs-id1169737248665} src=../../media/CNX_Calc_Figure_13_03_204.jpg
> alt: This figure is the graph of a curve in 3 dimensions. It is inside of a box. The box represents an octant. The curve begins in the upper right corner of the box and bends through the box to the other side.

:::

:::exercise {fs-id1169737248693} type= 
PROBLEM:
$\textbf{r}(t)=\langle {t}^{2}+1,4{t}^{3}+3\rangle ,\;-1\le t\le 0$
SOLUTION:
$\frac{1}{54}({37}^{3\text{/}2}-1)$
:::

:::exercise {fs-id1169738011633} type= 
PROBLEM:
$\textbf{r}(t)=\langle {e}^{\text{−}t}\text{cos}\;t,{e}^{\text{−}t}\text{sin}\;t\rangle$ over the interval $[0,\frac{\pi}{2}].$ Here is the portion of the graph on the indicated interval:

> IMAGE {img:fs-id1169738159270} src=../../media/CNX_Calc_Figure_13_03_205.jpg
> alt: This figure is the graph of a curve in the first quadrant. It begins approximately at 0.20 on the y axis and increases to approximately where x = 0.3. Then the curve decreases, meeting the x-axis at 1.0.

:::

:::exercise {fs-id1169738159327} type= 
PROBLEM:
Find the length of one turn of the helix given by $\textbf{r}(t)=\frac{1}{2}\text{cos}\;t\textbf{i}+\frac{1}{2}\text{sin}\;t\textbf{j}+\sqrt{\frac{3}{4}}\;t\;\textbf{k}.$
SOLUTION:
Length $=2\pi$
:::

:::exercise {fs-id1169738166961} type= 
PROBLEM:
Find the arc length of the vector-valued function $\textbf{r}(t)=-t\textbf{i}+4t\textbf{j}+3t\textbf{k}$ over $[0,1].$
:::

:::exercise {fs-id1169738088757} type= 
PROBLEM:
A particle travels once around a circle with the equation of motion $\textbf{r}(t)=3\;\text{cos}\;t\textbf{i}+3\;\text{sin}\;t\textbf{j}+0\textbf{k}.$ Find the distance traveled around the circle by the particle.
SOLUTION:
$6\pi$
:::

:::exercise {fs-id1169737358750} type= 
PROBLEM:
Set up an integral to find the circumference of the ellipse with the equation $\textbf{r}(t)=\text{cos}\;t\textbf{i}+2\;\text{sin}\;t\textbf{j}+0\textbf{k}.$
:::

:::exercise {fs-id1169738208778} type= 
PROBLEM:
Find the length of the curve $\textbf{r}(t)=\langle \sqrt{2}t,{e}^{t},{e}^{\text{−}t}\rangle$ over the interval $0\le t\le 1.$ The graph is shown here:

> IMAGE {img:fs-id1169737194068} src=../../media/CNX_Calc_Figure_13_03_206.jpg
> alt: This figure is the graph of a curve in 3 dimensions. It is inside of a box. The box represents an octant. The curve begins in the upper left corner of the box and bends through the box to the bottom of the other side.

SOLUTION:
$e-\frac{1}{e}$
:::

:::exercise {fs-id1169737194099} type= 
PROBLEM:
Find the length of the curve $\textbf{r}(t)=\langle 2\;\text{sin}\;t,5t,2\;\text{cos}\;t\rangle$ for $t\in [−10,10].$
:::

:::exercise {fs-id1169738094810} type= 
PROBLEM:
The position function for a particle is $\textbf{r}(t)=a\;\text{cos}(\omega t)\textbf{i}+b\;\text{sin}(\omega t)\textbf{j}.$ Find the unit tangent vector and the unit normal vector at $t=0.$
SOLUTION:
$\textbf{T}(0)=\textbf{j},$ $\textbf{N}(0)=-\textbf{i}$
:::

:::exercise {fs-id1169737253245} type= 
PROBLEM:
Given $\textbf{r}(t)=a\;\text{cos}(\omega t)\textbf{i}+b\;\text{sin}(\omega t)\textbf{j},$ find the binormal vector $\textbf{B}(0).$
:::

:::exercise {fs-id1169738216150} type= 
PROBLEM:
Given $\textbf{r}(t)=\langle 2{e}^{t},{e}^{t}\text{cos}\;t,{e}^{t}\text{sin}\;t\rangle ,$ determine the tangent vector $\textbf{T}(t).$
SOLUTION:
$\textbf{T}(t)=\langle \frac{2}{\sqrt{6}},\frac{\text{cos}\;t-\text{sin}\;t}{\sqrt{6}},\frac{\text{cos}\;t+\text{sin}\;t}{\sqrt{6}}\rangle$
:::

:::exercise {fs-id1169738007810} type= 
PROBLEM:
Given $\textbf{r}(t)=\langle 2{e}^{t},{e}^{t}\text{cos}\;t,{e}^{t}\text{sin}\;t\rangle ,$ determine the unit tangent vector $\textbf{T}(t)$ evaluated at $t=0.$
:::

:::exercise {fs-id1169738253240} type= 
PROBLEM:
Given $\textbf{r}(t)=\langle 2{e}^{t},{e}^{t}\text{cos}\;t,{e}^{t}\text{sin}\;t\rangle ,$ find the unit normal vector $\textbf{N}(t)$ evaluated at $t=0,$ $\textbf{N}(0).$
SOLUTION:
$\text{N}(0)=\langle 0,-\frac{\sqrt{2}}{2},\frac{\sqrt{2}}{2}\rangle$
:::

:::exercise {fs-id1169737512651} type= 
PROBLEM:
Given $\textbf{r}(t)=\langle 2{e}^{t},{e}^{t}\text{cos}\;t,{e}^{t}\text{sin}\;t\rangle ,$ find the unit binormal vector evaluated at $t=0.$
:::

:::exercise {fs-id1169738202647} type= 
PROBLEM:
Given $\textbf{r}(t)=t\textbf{i}+{t}^{2}\textbf{j}+t\textbf{k},$ find the unit tangent vector $\textbf{T}(t).$ The graph is shown here:

> IMAGE {img:fs-id1169738157528} src=../../media/CNX_Calc_Figure_13_03_207.jpg
> alt: This figure is the graph of a curve in 3 dimensions. It is inside of a box. The box represents an octant. The curve begins in the bottom left corner of the box and bends through the box to the upper left side.

SOLUTION:
$\textbf{T}(t)=\frac{1}{\sqrt{4{t}^{2}+2}}<1,2t,1>$
:::

:::exercise {fs-id1169738157604} type= 
PROBLEM:
Find the unit tangent vector $\textbf{T}(t)$ and unit normal vector $\textbf{N}(t)$ at $t=0$ for the plane curve $\textbf{r}(t)=\langle {t}^{3}-4t,5{t}^{2}-2\rangle .$ The graph is shown here:

> IMAGE {img:fs-id1169737213386} src=../../media/CNX_Calc_Figure_13_03_208.jpg
> alt: This figure is the graph of a curve above the x-axis. The curve decreases in the second quadrant, passes through the y-axis at y=20. Then it intersects the origin. The curve loops at the origin, increasing back through y=20 into the first quadrant.

:::

:::exercise {fs-id1169737368054} type= 
PROBLEM:
Find the unit tangent vector $\textbf{T}(t)$ for $\textbf{r}(t)=3t\textbf{i}+5{t}^{2}\textbf{j}+2t\textbf{k}$
SOLUTION:
$\textbf{T}(t)=\frac{1}{\sqrt{100{t}^{2}+13}}(3\textbf{i}+10t\textbf{j}+2\textbf{k})$
:::

:::exercise {fs-id1169737168027} type= 
PROBLEM:
Find the principal normal vector to the curve $\textbf{r}(t)=\langle 6\;\text{cos}\;t,6\;\text{sin}\;t\rangle$ at the point determined by $t=\pi \text{/}3.$
:::

:::exercise {fs-id1169737286125} type= 
PROBLEM:
Find $\textbf{T}(t)$ for the curve $\textbf{r}(t)=({t}^{3}-4t)\;\textbf{i}+(5{t}^{2}-2)\;\textbf{j}.$
SOLUTION:
$\textbf{T}(t)=\frac{1}{\sqrt{9{t}^{4}+76{t}^{2}+16}}([3{t}^{2}-4]\textbf{i}+10t\textbf{j})$
:::

:::exercise {fs-id1169737444980} type= 
PROBLEM:
Find $\textbf{N}(t)$ for the curve $\textbf{r}(t)=({t}^{3}-4t)\;\textbf{i}+(5{t}^{2}-2)\;\textbf{j}.$
:::

:::exercise {fs-id1169737929313} type= 
PROBLEM:
Find the unit normal vector $\textbf{N}(t)$ for $\textbf{r}(t)=\langle 2\;\text{sin}\;t,5t,2\;\text{cos}\;t\rangle .$
SOLUTION:
$\textbf{N}(t)=\langle \text{−}\text{sin}\;t,0,-\text{cos}\;t\rangle$
:::

:::exercise {fs-id1169737826079} type= 
PROBLEM:
Find the unit tangent vector $\textbf{T}(t)$ for $\textbf{r}(t)=\langle 2\;\text{sin}\;t,5t,2\;\text{cos}\;t\rangle .$
:::

:::exercise {fs-id1169737524273} type= 
PROBLEM:
Find the arc-length function $s(t)$ for the line segment given by $\textbf{r}(t)=\langle 3-3t,4t\rangle .$ Write *r* as a parameter of *s.*
SOLUTION:
Arc-length function: $s(t)=5t;$ r as a parameter of *s*: $\textbf{r}(s)=(3-\frac{3s}{5})\;\textbf{i}+\frac{4s}{5}\textbf{j}$
:::

:::exercise {fs-id1169737254508} type= 
PROBLEM:
Parameterize the helix $\textbf{r}(t)=\text{cos}\;t\textbf{i}+\text{sin}\;t\textbf{j}+t\textbf{k}$ using the arc-length parameter *s*, from $t=0.$
:::

:::exercise {fs-id1169737180756} type= 
PROBLEM:
Parameterize the curve using the arc-length parameter *s*, at the point at which $t=0$ for $\textbf{r}(t)={e}^{t}\text{sin}\;t\textbf{i}+{e}^{t}\text{cos}\;t\textbf{j}.$
SOLUTION:
$\textbf{r}(s)=(1+\frac{s}{\sqrt{2}})\;\text{sin}(\text{ln}(1+\frac{s}{\sqrt{2}}))\;\textbf{i}+(1+\frac{s}{\sqrt{2}})\;\text{cos}[\text{ln}(1+\frac{s}{\sqrt{2}})]\textbf{j}$
:::

:::exercise {fs-id1169737538390} type= 
PROBLEM:
Find the curvature of the curve $\textbf{r}(t)=5\;\text{cos}\;t\textbf{i}+4\;\text{sin}\;t\textbf{j}$ at $t=\pi \text{/}3.$ (*Note:* The graph is an ellipse.)

> IMAGE {img:fs-id1169737293994} src=../../media/CNX_Calc_Figure_13_03_209.jpg
> alt: This figure is the graph of an ellipse. The ellipse is oval along the x-axis. It is centered at the origin and intersects the y-axis at -4 and 4.

:::

:::exercise {fs-id1169737294027} type= 
PROBLEM:
Find the *x*-coordinate at which the curvature of the curve $y=1\text{/}x$ is a maximum value.
SOLUTION:
The maximum value of the curvature occurs at $x=1.$
:::

:::exercise {fs-id1169737905593} type= 
PROBLEM:
Find the curvature of the curve $\textbf{r}(t)=5\;\text{cos}\;t\textbf{i}+5\;\text{sin}\;t\textbf{j}.$ Does the curvature depend upon the parameter *t*?
:::

:::exercise {fs-id1169737905683} type= 
PROBLEM:
Find the curvature $κ$ for the curve $y=x-\frac{1}{4}{x}^{2}$ at the point $x=2.$
SOLUTION:
$\frac{1}{2}$
:::

:::exercise {fs-id1169737274792} type= 
PROBLEM:
Find the curvature $κ$ for the curve $y=\frac{1}{3}{x}^{3}$ at the point $x=1.$
:::

:::exercise {fs-id1169737274876} type= 
PROBLEM:
Find the curvature $κ$ of the curve $\textbf{r}(t)=t\textbf{i}+6{t}^{2}\textbf{j}+4t\;\textbf{k}.$ The graph is shown here:

> IMAGE {img:fs-id1169738226165} src=../../media/CNX_Calc_Figure_13_03_210.jpg
> alt: This figure is the graph of a curve in 3 dimensions. It is inside of a box. The box represents an octant. The curve has a parabolic shape in the middle of the box.

SOLUTION:
$κ\approx \frac{49.477}{{(17+144{t}^{2})}^{3\text{/}2}}$
:::

:::exercise {fs-id1169737214887} type= 
PROBLEM:
Find the curvature of $\textbf{r}(t)=\langle 2\;\text{sin}\;t,5t,2\;\text{cos}\;t\rangle .$
:::

:::exercise {fs-id1169737214960} type= 
PROBLEM:
Find the curvature of $\textbf{r}(t)=\sqrt{2}t\textbf{i}+{e}^{t}\textbf{j}+{e}^{\text{−}t}\textbf{k}$ at point $P(0,1,1).$
SOLUTION:
$\frac{1}{2\sqrt{2}}$
:::

:::exercise {fs-id1169737423506} type= 
PROBLEM:
At what point does the curve $y={e}^{x}$ have maximum curvature?
:::

:::exercise {fs-id1169737170342} type= 
PROBLEM:
What happens to the curvature as $x\to \infty$ for the curve $y={e}^{x}?$
SOLUTION:
The curvature approaches zero.
:::

:::exercise {fs-id1169737170380} type= 
PROBLEM:
Find the point of maximum curvature on the curve $y=\text{ln}\;x.$
:::

:::exercise {fs-id1169737170443} type= 
PROBLEM:
Find the equations of the normal plane and the osculating plane of the curve $\textbf{r}(t)=\langle 2\;\text{sin}(3t),t,2\;\text{cos}(3t)\rangle$ at point $(0,\pi ,−2).$
SOLUTION:
$y=6x+\pi$ and $x+6y=6\pi$
:::

:::exercise {fs-id1169737160474} type= 
PROBLEM:
Find equations of the osculating circles of the ellipse $4{y}^{2}+9{x}^{2}=36$ at the points $(2,0)$ and $(0,3).$
:::

:::exercise {fs-id1169737825776} type= 
PROBLEM:
Find the equation for the osculating plane at point $t=\pi \text{/}4$ on the curve $\textbf{r}(t)=\text{cos}(2t)\textbf{i}+\text{sin}(2t)\textbf{j}+t\textbf{k}.$
SOLUTION:
$x+2z=\frac{\pi}{2}$
:::

:::exercise {fs-id1169737368141} type= 
PROBLEM:
Find the radius of curvature of $6y={x}^{3}$ at the point $(2,\frac{4}{3}).$
:::

:::exercise {fs-id1169737368202} type= 
PROBLEM:
Find the curvature at each point $(x,y)$ on the hyperbola $\textbf{r}(t)=\langle a\;\text{cosh}(t),b\;\text{sinh}(t)\rangle .$
SOLUTION:
$\frac{{a}^{4}{b}^{4}}{{({b}^{4}{x}^{2}+{a}^{4}{y}^{2})}^{3\text{/}2}}$
:::

:::exercise {fs-id1169737168660} type= 
PROBLEM:
Calculate the curvature of the circular helix $\textbf{r}(t)=r\;\text{sin}(t)\textbf{i}+r\;\text{cos}(t)\textbf{j}+t\;\textbf{k}.$
:::

:::exercise {fs-id1169737565320} type= 
PROBLEM:
Find the radius of curvature of $y=\text{ln}(x+1)$ at point $(2,\text{ln}\;3).$
SOLUTION:
$\frac{10\sqrt{10}}{3}$
:::

:::exercise {fs-id1169737931502} type= 
PROBLEM:
Find the radius of curvature of the hyperbola $xy=1$ at point $(1,1).$
:::
A particle moves along the plane curve C described by $\textbf{r}(t)=t\textbf{i}+{t}^{2}\textbf{j}.$ Solve the following problems.

:::exercise {fs-id1169737201424} type= 
PROBLEM:
Find the length of the curve over the interval $[0,2].$
SOLUTION:
$\frac{1}{4}ln(\sqrt{17}+4)+\sqrt{17}\approx 4.647$
:::

:::exercise {fs-id1169737201465} type= 
PROBLEM:
Find the curvature of the plane curve at $t=0,1,2.$
:::

:::exercise {fs-id1169738059709} type= 
PROBLEM:
Describe the curvature as *t* increases from $t=0$ to $t=2.$
SOLUTION:
The curvature is decreasing over this interval.
:::
The surface of a large cup is formed by revolving the graph of the function $y=0.25{x}^{1.6}$ from $x=0$ to $x=5$ about the *y*-axis (measured in centimeters).

:::exercise {fs-id1169738059789} type= 
PROBLEM:
**[T]** Use technology to graph the surface.
:::

:::exercise {fs-id1169738133111} type= 
PROBLEM:
Find the curvature $κ$ of the generating curve as a function of *x.*
SOLUTION:
$κ=\frac{6}{{x}^{2\text{/}5}(25+4{x}^{6\text{/}5})}$
:::

:::exercise {fs-id1169738133176} type= 
PROBLEM:
**[T]** Use technology to graph the curvature function.
:::

## Glossary
- {def} **arc-length function**: a function $s(t)$ that describes the arc length of curve *C* as a function of *t*
- {def} **arc-length parameterization**: a reparameterization of a vector-valued function in which the parameter is equal to the arc length
- {def} **binormal vector**: a unit vector orthogonal to the unit tangent vector and the unit normal vector
- {def} **curvature**: the derivative of the unit tangent vector with respect to the arc-length parameter
- {def} **Frenet frame of reference**: (TNB frame) a frame of reference in three-dimensional space formed by the unit tangent vector, the unit normal vector, and the binormal vector
- {def} **normal plane**: a plane that is perpendicular to a curve at any point on the curve
- {def} **osculating circle**: a circle that is tangent to a curve *C* at a point *P* and that shares the same curvature
- {def} **osculating plane**: the plane determined by the unit tangent and the unit normal vector
- {def} **principal unit normal vector**: a vector orthogonal to the unit tangent vector, given by the formula $\frac{\mathbf{{T}^{'}}(t)}{\| \mathbf{{T}^{'}}(t)\|}$
- {def} **radius of curvature**: the reciprocal of the curvature
- {def} **smooth**: curves where the vector-valued function $\textbf{r}(t)$ is differentiable with a non-zero derivative

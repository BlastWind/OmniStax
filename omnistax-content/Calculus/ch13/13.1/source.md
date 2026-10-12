# Vector-Valued Functions and Space Curves

## Learning Objectives {section:learning-objectives}
- Write the general equation of a vector-valued function in component form and unit-vector form.
- Recognize parametric equations for a space curve.
- Describe the shape of a helix and write its equation.
- Define the limit of a vector-valued function.

Our study of vector-valued functions combines ideas from our earlier examination of single-variable calculus with our description of vectors in three dimensions from the preceding chapter. In this section we extend concepts from earlier chapters and also examine new ideas concerning curves in three-dimensional space. These definitions and theorems support the presentation of material in the rest of this chapter and also in the remaining chapters of the text.

## Definition of a Vector-Valued Function
Our first step in studying the calculus of vector-valued functions is to define what exactly a vector-valued function is. We can then look at graphs of vector-valued functions and see how they define curves in both two and three dimensions.

:::note [definition] Definition
A {term:vector-valued function} is a function of the form

$$ \textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}\;\text{or}\;\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k}, $$  {eq:fs-id1169737813537}

where the {term:component functions} *f, g,* and *h*, are real-valued functions of the parameter *t.* Vector-valued functions are also written in the form

$$ \textbf{r}(t)=\langle f(t),g(t)\rangle \;\text{or}\;\textbf{r}(t)=\langle f(t),g(t),h(t)\rangle . $$  {eq:fs-id1169737819432}

In both cases, the first form of the function defines a two-dimensional vector-valued function; the second form describes a three-dimensional vector-valued function.
:::
The parameter *t* can lie between two real numbers: $a\le t\le b.$ Another possibility is that the value of *t* might take on all real numbers. Last, the component functions themselves may have domain restrictions that enforce restrictions on the value of *t.* We often use *t* as a parameter because *t* can represent time.

:::example {ex:fs-id1169737841797} Evaluating Vector-Valued Functions and Determining Domains

:::exercise {fs-id1169737162133} type= 
PROBLEM:
For each of the following vector-valued functions, evaluate $\textbf{r}(0),\;\textbf{r}(\frac{\pi}{2}),\text{and}\;\textbf{r}(\frac{2\pi}{3}).$ Do any of these functions have domain restrictions?
a. $\textbf{r}(t)=4\;\text{cos}\;t\;\textbf{i}+3\;\text{sin}\;t\;\textbf{j}$
b. $\textbf{r}(t)=3\;\text{tan}\;t\;\textbf{i}+4\;\text{sec}\;t\;\textbf{j}+5t\;\textbf{k}$
SOLUTION:
a. To calculate each of the function values, substitute the appropriate value of *t* into the function:

$\begin{array}{rll}\textbf{r}(0) & = & 4\;\text{cos}(0)\;\textbf{i}+3\;\text{sin}(0)\;\textbf{j} \\ & = & 4\;\textbf{i}+0\;\textbf{j}=4\;\textbf{i} \\ \textbf{r}(\frac{\pi}{2}) & = & 4\;\text{cos}(\frac{\pi}{2})\;\textbf{i}+3\;\text{sin}(\frac{\pi}{2})\;\textbf{j} \\ & = & 0\;\textbf{i}+3\;\textbf{j}=3\;\textbf{j} \\ \textbf{r}(\frac{2\pi}{3}) & = & 4\;\text{cos}(\frac{2\pi}{3})\;\textbf{i}+3\;\text{sin}(\frac{2\pi}{3})\;\textbf{j} \\ & = & 4(-\frac{1}{2})\;\textbf{i}+3(\frac{\sqrt{3}}{2})\;\textbf{j}=−2\;\textbf{i}+\frac{3\sqrt{3}}{2}\;\textbf{j}.\end{array}$  {eq:fs-id1169738852803}

To determine whether this function has any domain restrictions, consider the component functions separately. The first component function is $f(t)=4\;\text{cos}\;t$ and the second component function is $g(t)=3\;\text{sin}\;t.$ Neither of these functions has a domain restriction, so the domain of $\textbf{r}(t)=4\;\text{cos}\;t\;\textbf{i}+3\;\text{sin}\;t\;\textbf{j}$ is all real numbers.
b. To calculate each of the function values, substitute the appropriate value of *t* into the function:

$\begin{array}{rll}\;\textbf{r}(0) & = & 3\;\text{tan}(0)\;\textbf{i}+4\;\text{sec}(0)\;\textbf{j}+5(0)\;\textbf{k} \\ & = & 0\;\textbf{i}+4\;\textbf{j}+0\;\textbf{k}=4\;\textbf{j} \\ \;\textbf{r}(\frac{\pi}{2}) & = & 3\;\text{tan}(\frac{\pi}{2})\;\textbf{i}+4\;\text{sec}(\frac{\pi}{2})\;\textbf{j}+5(\frac{\pi}{2})\;\textbf{k},\text{which does not exist} \\ \;\textbf{r}(\frac{2\pi}{3}) & = & 3\;\text{tan}(\frac{2\pi}{3})\;\textbf{i}+4\;\text{sec}(\frac{2\pi}{3})\;\textbf{j}+5(\frac{2\pi}{3})\;\textbf{k} \\ & = & 3(-\sqrt{3})\;\textbf{i}+4(−2)\;\textbf{j}+\frac{10\pi}{3}\;\textbf{k} \\ & = & −3\sqrt{3}\;\textbf{i}-8\;\textbf{j}+\frac{10\pi}{3}\;\textbf{k}.\end{array}$  {eq:fs-id1169739212891}

To determine whether this function has any domain restrictions, consider the component functions separately. The first component function is $f(t)=3\;\text{tan}\;t,$ the second component function is $g(t)=4\;\text{sec}\;t,$ and the third component function is $h(t)=5t.$ The first two functions are not defined for odd multiples of $\pi \text{/}2,$ so the function is not defined for odd multiples of $\pi \text{/}2.$ Therefore, $\text{dom}(\;\textbf{r}(t))=\{t\;|t≠\frac{(2n+1)\pi}{2}\},$ where *n* is any integer.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169737795579} type= 
PROBLEM:
For the vector-valued function $\textbf{r}(t)=({t}^{2}-3t)\;\textbf{i}+(4t+1)\;\textbf{j},$ evaluate $\textbf{r}(0),\;\textbf{r}(1),\text{and}\;\textbf{r}(−4).$ Does this function have any domain restrictions?
SOLUTION:
$\textbf{r}(0)=\textbf{j},\;\textbf{r}(1)=−2\;\textbf{i}+5\;\textbf{j},\;\textbf{r}(−4)=28\;\textbf{i}-15\;\textbf{j}$
The domain of $\textbf{r}(t)=({t}^{2}-3t)\;\textbf{i}+(4t+1)\;\textbf{j}$ is all real numbers.
COMMENTARY: Hint
Substitute the appropriate values of *t* into the function.
:::
:::
[ref:fs-id1169737841797] illustrates an important concept. The domain of a vector-valued function consists of real numbers. The domain can be all real numbers or a subset of the real numbers. The range of a vector-valued function consists of vectors. Each real number in the domain of a vector-valued function is mapped to either a two- or a three-dimensional vector.

## Graphing Vector-Valued Functions
Recall that a plane vector consists of two quantities: direction and magnitude. Given any point in the plane (the {index:*initial point*}), if we move in a specific direction for a specific distance, we arrive at a second point. This represents the {index:*terminal point*} of the vector. We calculate the components of the vector by subtracting the coordinates of the initial point from the coordinates of the terminal point.
A vector is considered to be in {index:*standard position*} if the initial point is located at the origin. When graphing a vector-valued function, we typically graph the vectors in the domain of the function in standard position, because doing so guarantees the uniqueness of the graph. This convention applies to the graphs of three-dimensional vector-valued functions as well. The graph of a vector-valued function of the form $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}$ consists of the set of all $(t,\;\textbf{r}(t)),$ and the path it traces is called a {term:plane curve}. The graph of a vector-valued function of the form $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k}$ consists of the set of all $(t,\;\textbf{r}(t)),$ and the path it traces is called a {term:space curve}. Any representation of a plane curve or space curve using a vector-valued function is called a {term:vector parameterization} of the curve.

:::example {ex:fs-id1169738008664} Graphing a Vector-Valued Function

:::exercise {fs-id1169738126018} type= 
PROBLEM:
Create a graph of each of the following vector-valued functions:
a. The plane curve represented by $\textbf{r}(t)=4\;\text{cos}\;t\;\textbf{i}+3\;\text{sin}\;t\;\textbf{j},$ $0\le t\le 2\pi$
b. The plane curve represented by $\textbf{r}(t)=4\;\text{cos}\;2t\text{i}+3\;\text{sin}\;2\;t\text{j},$ $0\le t\le \pi$
c. The space curve represented by $\text{r}(t)=4\text{cos}\;t\;\text{i}+4\text{sin}\;t\;\text{j}+t\;\text{k},$ $0\le t\le 4\pi$
SOLUTION:
a. As with any graph, we start with a table of values. We then graph each of the vectors in the second column of the table in standard position and connect the terminal points of each vector to form a curve ([ref:CNX_Calc_Figure_13_01_001]). This curve turns out to be an ellipse centered at the origin.

> TABLE {tab:fs-id1169738069805} cols=4
> title: Table of Values for $\textbf{r}(t)=4\;\text{cos}\;t\;\textbf{i}+3\;\text{sin}\;t\;\textbf{j},$ $0\le t\le 2\pi$
> summary: This is a table with two columns. The first column is labeled with “t”. The second column is labeled with the function “r(t)”. There are 9 rows in the table. The first row contains the entries 0 and 4i for the first and the second column. The second row contains the entries pi/4 and 2(the square root of 2)i + 2(the square root of 3)/2 j. The third row contains the entries pi/2 and 3j. The fourth row contains the entries 3pi/4 and -2(the square root of 2)i + 2(the square root of 3)/2 j. The fifth row contains the entries pi and -4i. The sixth row contains the entries 5pi/4 and -2(the square root of 2)i - 2(the square root of 3)/2 j. The seventh row contains the entries 3pi/2 and -3j. The eighth row contains the entries 7pi/4 and 2(the square root of 2)i - 2(the square root of 3)/2 j. The ninth row contains the entries 2pi and 4i.

|  |  |  |  |
| --- | --- | --- | --- |
| *t* | $\textbf{r}(t)$ | *t* | $\textbf{r}(t)$ |
| 0 | $4\;\textbf{i}$ | $\pi$ | $−4\;\textbf{i}$ |
| $\frac{\pi}{4}$ | $2\sqrt{2}\;\textbf{i}+\frac{3\sqrt{2}}{2}\;\textbf{j}$ | $\frac{5\pi}{4}$ | $−2\sqrt{2}\;\textbf{i}-\frac{3\sqrt{2}}{2}\;\textbf{j}$ |
| $\frac{\pi}{2}$ | $3\;\textbf{j}$ | $\frac{3\pi}{2}$ | $−3\;\textbf{j}$ |
| $\frac{3\pi}{4}$ | $−2\sqrt{2}\;\textbf{i}+\frac{3\sqrt{2}}{2}\;\textbf{j}$ | $\frac{7\pi}{4}$ | $2\sqrt{2}\;\textbf{i}-\frac{3\sqrt{2}}{2}\;\textbf{j}$ |
| $2\pi$ | $4\;\textbf{i}$ |  |  |

> FIGURE {fig:CNX_Calc_Figure_13_01_001} src=../../media/CNX_Calc_Figure_13_01_001.jpg
> alt: This figure is a graph of an ellipse centered at the origin. The graph is the vector-valued function r(t)=4cost i + 3sint j. The ellipse has arrows on the curve representing counter-clockwise orientation. There are also line segments inside of the ellipse to the curve at different increments of t. The increments are t=0, t=pi/4, t=pi/2, t=3pi/4.
> caption: The graph of the first vector-valued function is an ellipse.

b. The table of values for $\text{r}(t)=4\text{cos}\;2t\text{i}+3\;\text{sin}\;2\;t\text{j},$ $0\le t\le \pi$ is as follows:

> TABLE {tab:fs-id1169738148681} cols=4
> title: Table of Values for $\text{r}(t)=4\;\text{cos}\;(\text{2}t)\;\text{i}+3\;\text{sin}(2t)\;\text{j},$ $0\le t\le \pi$
> summary: This is a table with two columns. The first column is labeled with “t”. The second column is labeled with the function “r(t)”. There are 9 rows in the table. The first row contains the entries 0 and 4i for the first and the second column. The second row contains the entries pi/4 and 2(the square root of 2)i + 2(the square root of 3)/2 j. The third row contains the entries pi/2 and 3j. The fourth row contains the entries 3pi/4 and -2(the square root of 2)i + 2(the square root of 3)/2 j. The fifth row contains the entries pi and -4i. The sixth row contains the entries 5pi/4 and -2(the square root of 2)i - 2(the square root of 3)/2 j. The seventh row contains the entries 3pi/2 and -3j. The eighth row contains the entries 7pi/4 and 2(the square root of 2)i - 2(the square root of 3)/2 j. The ninth row contains the entries 2pi and 4i.

|  |  |  |  |
| --- | --- | --- | --- |
| *t* | $\textbf{r}(t)$ | *t* | $\textbf{r}(t)$ |
| 0 | $4\;\textbf{i}$ | $\frac{\pi}{2}$ | $−4\;\textbf{i}$ |
| $\frac{\pi}{8}$ | $2\sqrt{2}\;\textbf{i}+\frac{3\sqrt{2}}{2}\;\textbf{j}$ | $\frac{5\pi}{8}$ | $−2\sqrt{2}\;\textbf{i}-\frac{3\sqrt{2}}{2}\;\textbf{j}$ |
| $\frac{\pi}{4}$ | $3\;\textbf{j}$ | $\frac{3\pi}{4}$ | $−3\;\textbf{j}$ |
| $\frac{3\pi}{8}$ | $−2\sqrt{2}\;\textbf{i}+\frac{3\sqrt{2}}{2}\;\textbf{j}$ | $\frac{7\pi}{8}$ | $2\sqrt{2}\;\textbf{i}-\frac{3\sqrt{2}}{2}\;\textbf{j}$ |
|  |  | $\pi$ | $4\;\textbf{i}$ |

The graph of this curve is also an ellipse centered at the origin.

> FIGURE {fig:CNX_Calc_Figure_13_01_002} src=../../media/CNX_Calc_Figure_13_01_002.jpg
> alt: This figure is a graph of an ellipse centered at the origin. The graph is the vector-valued function r(t)=4cost^3 i + 3sint^3 j.
> caption: The graph of the second vector-valued function is also an ellipse.

c. We go through the same procedure for a three-dimensional vector function.

> TABLE {tab:fs-id1169737424002} cols=4
> title: Table of Values for $\text{r}(t)=4\text{cos}\;t\;\text{i}+4\text{sin}\;t\;\text{j}+t\;\text{k},$ $0\le t\le 4\pi$
> summary: This is a table with two columns. The first column is labeled with “t”. The second column is labeled with the function “r(t)”. There are 9 rows in the table. The first row contains the entries 0 and 4i for the first and the second column. The second row contains the entries pi/4 and 2(the square root of 2)i + 2(the square root of 3)/2 j + pi/4 k. The third row contains the entries pi/2 and 3j + pi/2k. The fourth row contains the entries 3pi/4 and -2(the square root of 2)i + 2(the square root of 3)/2 j + 3pi/4 k. The fifth row contains the entries pi and -4i + pik. The sixth row contains the entries 5pi/4 and -2(the square root of 2)i - 2(the square root of 3)/2 j + 5pi/4 k. The seventh row contains the entries 3pi/2 and -3j + 3pi/2 k. The eighth row contains the entries 7pi/4 and 2(the square root of 2)i - 2(the square root of 3)/2 j + 7pi/4 k. The ninth row contains the entries 2pi and 4i +2pik.

|  |  |  |  |
| --- | --- | --- | --- |
| *t* | $\textbf{r}(t)$ | *t* | $\textbf{r}(t)$ |
| 0 | $4\;\textbf{i}$ | $\pi$ | $−4\;\textbf{j}+\pi \;\textbf{k}$ |
| $\frac{\pi}{4}$ | $2\sqrt{2}\;\textbf{i}+2\sqrt{2}\;\textbf{j}+\frac{\pi}{4}\;\textbf{k}$ | $\frac{5\pi}{4}$ | $−2\sqrt{2}\;\textbf{i}-2\sqrt{2}\;\textbf{j}+\frac{5\pi}{4}\;\textbf{k}$ |
| $\frac{\pi}{2}$ | $4\;\textbf{j}+\frac{\pi}{2}\;\textbf{k}$ | $\frac{3\pi}{2}$ | $−4\;\textbf{j}+\frac{3\pi}{2}\;\textbf{k}$ |
| $\frac{3\pi}{4}$ | $−2\sqrt{2}\;\textbf{i}+2\sqrt{2}\;\textbf{j}+\frac{3\pi}{4}\;\textbf{k}$ | $\frac{7\pi}{4}$ | $2\sqrt{2}\;\textbf{i}-2\sqrt{2}\;\textbf{j}+\frac{7\pi}{4}\;\textbf{k}$ |
| $2\pi$ | $4\;\textbf{i}+2\pi \;\textbf{k}$ |  |  |

The values then repeat themselves, except for the fact that the coefficient of k is always increasing ([ref:CNX_Calc_Figure_13_01_003]). This curve is called a {term:helix}. Notice that if the **k** component is eliminated, then the function becomes $\textbf{r}(t)=\text{cos}\;t\;\textbf{i}+\text{sin}\;t\;\textbf{j},$ which is a unit circle centered at the origin.

> FIGURE {fig:CNX_Calc_Figure_13_01_003} src=../../media/CNX_Calc_Figure_13_01_003.jpg
> alt: This figure is the graph of a helix in the 3 dimensional coordinate system. The curve represents the function r(t) = cost i + sint j + tk. The curve spirals in a circular path around the vertical z-axis and has the look of a spring. The arrows on the curve represent orientation.
> caption: The graph of the third vector-valued function is a helix.

:::
:::
You may notice that the graphs in parts a. and b. are identical. This happens because the function describing curve b is a so-called {term:reparameterization} of the function describing curve a. In fact, any curve has an infinite number of reparameterizations; for example, we can replace *t* with $2t$ in any of the three previous curves without changing the shape of the curve. The interval over which *t* is defined may change, but that is all. We return to this idea later in this chapter when we study arc-length parameterization.
As mentioned, the name of the shape of the curve of the graph in [ref:fs-id1169738008664]c. is a {term:helix} ([ref:CNX_Calc_Figure_13_01_003]). The curve resembles a spring, with a circular cross-section looking down along the *z*-axis. It is possible for a helix to be elliptical in cross-section as well. For example, the vector-valued function $\textbf{r}(t)=4\;\text{cos}\;t\;\textbf{i}+3\;\text{sin}\;t\;\textbf{j}+t\;\textbf{k}$ describes an elliptical helix. The projection of this helix into the $x,y\text{-plane}$ is an ellipse. Last, the arrows in the graph of this helix indicate the orientation of the curve as *t* progresses from 0 to $4\pi .$

:::note [checkpoint] 

:::exercise {fs-id1169738149748} type= 
PROBLEM:
Create a graph of the vector-valued function $\textbf{r}(t)=({t}^{2}-1)\;\textbf{i}+(2t-3)\;\textbf{j},$ $0\le t\le 3.$
SOLUTION:

> IMAGE {img:fs-id1169737265728} src=../../media/CNX_Calc_Figure_13_01_004.jpg
> alt: This figure is a graph of the function r(t) = (t^2-1)i + (2t-3)j, for the values of t from 0 to 3. The curve begins in the 3rd quadrant at the ordered pair (-1,-3) and increases up through the 1st quadrant. It is increasing and has arrows on the curve representing orientation to the right.

COMMENTARY: Hint
Start by making a table of values, then graph the vectors for each value of *t*.
:::
:::
At this point, you may notice a similarity between vector-valued functions and parameterized curves. Indeed, given a vector-valued function $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j},$ we can define $x=f(t)$ and $y=g(t).$ If a restriction exists on the values of *t* (for example, *t* is restricted to the interval $[a,b]$ for some constants $a<b),$ then this restriction is enforced on the parameter. The graph of the parameterized function would then agree with the graph of the vector-valued function, except that the vector-valued graph would represent vectors rather than points. Since we can parameterize a curve defined by a function $y=f(x),$ it is also possible to represent an arbitrary plane curve by a vector-valued function.

## Limits and Continuity of a Vector-Valued Function
We now take a look at the {term:limit of a vector-valued function}. This is important to understand to study the calculus of vector-valued functions.

:::note [definition] Definition
A vector-valued function **r** approaches the limit **L** as *t* approaches *a,* written

$\lim_{t\to a}\;\textbf{r}(t)=\textbf{L},$  {eq:fs-id1169737765298}

provided

$\lim_{t\to a}||\;\textbf{r}(t)-\textbf{L}||=0.$  {eq:fs-id1169737490754}

:::
This is a rigorous definition of the limit of a vector-valued function. In practice, we use the following theorem:

:::note [theorem] Limit of a Vector-Valued Function
Let *f, g,* and *h* be functions of *t.* Then the limit of the vector-valued function $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}$ as *t* approaches *a* is given by

$$ \lim_{t\to a}\;\textbf{r}(t)=[\lim_{t\to a}f(t)]\;\textbf{i}+[\lim_{t\to a}g(t)]\;\textbf{j}, $$  {eq:fs-id1169737903941}

provided the limits $\lim_{t\to a}f(t)\;\text{and}\;\lim_{t\to a}g(t)$ exist. Similarly, the limit of the vector-valued function $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k}$**** as *t* approaches *a* is given by

$$ \lim_{t\to a}\;\textbf{r}(t)=[\lim_{t\to a}f(t)]\;\textbf{i}+[\lim_{t\to a}g(t)]\;\textbf{j}+[\lim_{t\to a}h(t)]\;\textbf{k}, $$  {eq:fs-id1169737911304}

provided the limits $\lim_{t\to a}f(t),\;\lim_{t\to a}g(t)\text{and}\;\lim_{t\to a}h(t)$ exist.
:::
In the following example, we show how to calculate the limit of a vector-valued function.

:::example {ex:fs-id1169737282882} Evaluating the Limit of a Vector-Valued Function

:::exercise {fs-id1169738057325} type= 
PROBLEM:
For each of the following vector-valued functions, calculate $\lim_{t\to 3}\;\textbf{r}(t)$ for
a. $\textbf{r}(t)=({t}^{2}-3t+4)\;\textbf{i}+(4t+3)\;\textbf{j}$
b. $\textbf{r}(t)=\frac{2t-4}{t+1}\;\textbf{i}+\frac{t}{{t}^{2}+1}\;\textbf{j}+(4t-3)\;\textbf{k}$
SOLUTION:
a. Use [ref:fs-id1169737903941] and substitute the value $t=3$ into the two component expressions:

$\begin{array}{rl}\lim_{t\to 3}\;\textbf{r}(t) & =\lim_{t\to 3}[({t}^{2}-3t+4)\;\textbf{i}+(4t+3)\;\textbf{j}] \\ & =[\lim_{t\to 3}({t}^{2}-3t+4)]\;\textbf{i}+[\lim_{t\to 3}(4t+3)]\;\textbf{j} \\ & =4\;\textbf{i}+15\;\textbf{j}.\end{array}$  {eq:fs-id1169736843638}

b. Use [ref:fs-id1169737911304] and substitute the value $t=3$ into the three component expressions:

$\begin{array}{rl}\lim_{t\to 3}\;\textbf{r}(t) & =\lim_{t\to 3}(\frac{2t-4}{t+1}\;\textbf{i}+\frac{t}{{t}^{2}+1}\;\textbf{j}+(4t-3)\;\textbf{k}) \\ & =[\lim_{t\to 3}(\frac{2t-4}{t+1})]\;\textbf{i}+[\lim_{t\to 3}(\frac{t}{{t}^{2}+1})]\;\textbf{j}+[\lim_{t\to 3}(4t-3)]\;\textbf{k} \\ & =\frac{1}{2}\;\textbf{i}+\frac{3}{10}\;\textbf{j}+9\;\textbf{k}.\end{array}$  {eq:fs-id1169739102300}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738221963} type= 
PROBLEM:
Calculate $\lim_{t\to −2}\;\textbf{r}(t)$ for the function $\textbf{r}(t)=\sqrt{{t}^{2}-3t-1}\;\textbf{i}+(4t+3)\;\textbf{j}+\text{sin}\;\frac{(t+1)\pi}{2}\;\textbf{k}.$
SOLUTION:
$\lim_{t\to −2}\;\textbf{r}(t)=3\;\textbf{i}-5\;\textbf{j}-\textbf{k}$
COMMENTARY: Hint
Use [ref:fs-id1169737911304] from the preceding theorem.
:::
:::
Now that we know how to calculate the limit of a vector-valued function, we can define continuity at a point for such a function.

:::note [definition] Definition
Let *f, g,* and *h* be functions of *t.* Then, the vector-valued function $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}$ is continuous at point $t=a$ if the following three conditions hold:
1. $\textbf{r}(a)$ exists
2. $\lim_{t\to a}\;\textbf{r}(t)$ exists
3. $\lim_{t\to a}\;\textbf{r}(t)=\textbf{r}(a)$
Similarly, the vector-valued function $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k}$ is continuous at point $t=a$ if the following three conditions hold:
1. $\textbf{r}(a)$ exists
2. $\lim_{t\to a}\;\textbf{r}(t)$ exists
3. $\lim_{t\to a}\;\textbf{r}(t)=\textbf{r}(a)$
:::

## Key Concepts {section:key-concepts}
- A vector-valued function is a function of the form $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}$ or $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k},$ where the component functions *f, g,* and *h* are real-valued functions of the parameter *t*.
- The graph of a vector-valued function of the form $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}$ is called a *plane curve*. The graph of a vector-valued function of the form $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k}$ is called a *space curve*.
- It is possible to represent an arbitrary plane curve by a vector-valued function.
- To calculate the limit of a vector-valued function, calculate the limits of the component functions separately.

## Key Equations {section:key-equations}

> TABLE {tab:eip-540} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Vector-valued function** | $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}\;\text{or}\;\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k},\;\text{or}\;\textbf{r}(t)=\langle f(t),g(t)\rangle \;\text{or}\;\textbf{r}(t)=\langle f(t),g(t),h(t)\rangle$ |
| **Limit of a vector-valued function** | $\lim_{t\to a}\;\textbf{r}(t)=[\lim_{t\to a}f(t)]\;\textbf{i}+[\lim_{t\to a}g(t)]\;\textbf{j}\;\text{or}\;\lim_{t\to a}\;\textbf{r}(t)=[\lim_{t\to a}f(t)]\;\textbf{i}+[\lim_{t\to a}g(t)]\;\textbf{j}+[\lim_{t\to a}h(t)]\;\textbf{k}$ |

##  {section:section-exercises}

:::exercise {fs-id1169737792858} type= 
PROBLEM:
Give the component functions $x=f(t)$ and $y=g(t)$ for the vector-valued function $\textbf{r}(t)=3\;\text{sec}\;t\;\textbf{i}+2\;\text{tan}\;t\;\textbf{j}.$
SOLUTION:
$f(t)=3\;\text{sec}\;t,g(t)=2\;\text{tan}\;t$
:::

:::exercise {fs-id1169737194982} type= 
PROBLEM:
Given $\textbf{r}(t)=3\;\text{sec}\;t\;\textbf{i}+2\;\text{tan}\;t\;\textbf{j},$ find the following values (if possible).
a. $\textbf{r}(\frac{\pi}{4})$
b. $\textbf{r}(\pi )$
c. $\textbf{r}(\frac{\pi}{2})$
:::

:::exercise {fs-id1169737142156} type= 
PROBLEM:
Sketch the curve of the vector-valued function $\textbf{r}(t)=3\;\text{sec}\;t\;\textbf{i}+2\;\text{tan}\;t\;\textbf{j}$ and give the orientation of the curve. Sketch asymptotes as a guide to the graph.
SOLUTION:

> IMAGE {img:fs-id1169738219466} src=../../media/CNX_Calc_Figure_13_01_201.jpg
> alt: This figure is the graph of the function r(t) = 3sect i + 2tant j. The graph has two slant asymptotes. They are diagonal and pass through the origin. The curve has two parts, one to the left of the y-axis with a hyperbolic bend. Also, there is a second part of the curve to the right of the y-axis with a hyperbolic bend. The orientation is represented by arrows on the curve. Both curves have orientation that is rising.

:::

:::exercise {fs-id1169737493382} type= 
PROBLEM:
Evaluate $\lim_{t\to 0}\langle {e}^{t}\;,\frac{\text{sin}\;t}{t}\;,{e}^{\text{−}t}\rangle .$
:::

:::exercise {fs-id1169737300623} type= 
PROBLEM:
Given the vector-valued function $\textbf{r}(t)=\langle \text{cos}\;t,\text{sin}\;t\rangle ,$ find the following values:
a. $\lim_{t\to \frac{\pi}{3}}\;\textbf{r}(t)$
b. $\textbf{r}(\frac{\pi}{3})$
c. Is $\textbf{r}(t)$ continuous at $t=\frac{\pi}{3}?$
d. Graph $\textbf{r}(t).$
SOLUTION:
a. $\langle \frac{1}{2},\frac{\sqrt{3}}{2}\rangle ,$ b. $\langle \frac{1}{2},\frac{\sqrt{3}}{2}\rangle ,$ c. Yes, the limit as *t* approaches $\pi \text{/}3$ is equal to $\textbf{r}(\pi \text{/}3),$ d.

> IMAGE {img:fs-id1169737911259} src=../../media/CNX_Calc_Figure_13_01_202.jpg
> alt: This figure is a graph of a circle centered at the origin. The circle has radius of 1 and has counter-clockwise orientation with arrows representing the orientation.

:::

:::exercise {fs-id1169737177667} type= 
PROBLEM:
Given the vector-valued function $\textbf{r}(t)=\langle t,{t}^{2}+1\rangle ,$ find the following values:
a. $\lim_{t\to −3}\;\textbf{r}(t)$
b. $\textbf{r}(−3)$
c. Is $\textbf{r}(t)$ continuous at $t=−3?$
d. $\textbf{r}(t+2)-\textbf{r}(t)$
:::

:::exercise {fs-id1169737949241} type= 
PROBLEM:
Let $\textbf{r}(t)={e}^{t}\;\textbf{i}+\text{sin}\;t\;\textbf{j}+\text{ln}\;t\;\textbf{k}.$ Find the following values:
a. $\textbf{r}(\frac{\pi}{4})$
b. $\lim_{t\to \pi \text{/}4}\;\textbf{r}(t)$
c. Is $\textbf{r}(t)$ continuous at $t=\frac{\pi}{4}?$
SOLUTION:
a. $\langle {e}^{\pi \text{/}4},\frac{\sqrt{2}}{2},\text{ln}(\frac{\pi}{4})\rangle ;$ b. $\langle {e}^{\pi \text{/}4},\frac{\sqrt{2}}{2},\text{ln}(\frac{\pi}{4})\rangle ;$ c. Yes
:::
Find the limit of the following vector-valued functions at the indicated value of *t*.

:::exercise {fs-id1169738133619} type= 
PROBLEM:
$\lim_{t\to 4}\langle \sqrt{t-3},\frac{\sqrt{t}-2}{t-4},\text{tan}(\frac{\pi}{t})\rangle$
:::

:::exercise {fs-id1169737399708} type= 
PROBLEM:
$\lim_{t\to \pi \text{/}2}\;\textbf{r}(t)$ for $\textbf{r}(t)={e}^{t}\;\textbf{i}+\text{sin}\;t\;\textbf{j}+\text{ln}\;t\;\textbf{k}$
SOLUTION:
$\langle {e}^{\pi \text{/}2},1,\text{ln}(\frac{\pi}{2})\rangle$
:::

:::exercise {fs-id1169737392215} type= 
PROBLEM:
$\lim_{t\to \infty}\langle {e}^{−2t},\frac{2t+3}{3t-1},\text{arctan}(2t)\rangle$
:::

:::exercise {fs-id1169738023210} type= 
PROBLEM:
$\lim_{t\to {e}^{2}}\langle t\;\text{ln}(t),\frac{\text{ln}\;t}{{t}^{2}},\sqrt{\text{ln}\;({t}^{2})}\rangle$
SOLUTION:
$2{e}^{2}\;\textbf{i}+\frac{2}{{e}^{4}}\;\textbf{j}+2\;\textbf{k}$
:::

:::exercise {fs-id1169737910572} type= 
PROBLEM:
$\lim_{t\to \pi \text{/}6}\langle {\text{cos}}^{2}t,{\text{sin}}^{2}t,1\rangle$
:::

:::exercise {fs-id1169737264017} type= 
PROBLEM:
$\lim_{t\to \infty}\;\textbf{r}(t)$ for $\textbf{r}(t)=2{e}^{\text{−}t}\;\textbf{i}+{e}^{\text{−}t}\;\textbf{j}+\text{ln}(t-1)\;\textbf{k}$
SOLUTION:
The limit does not exist because the limit of $\text{ln}(t-1)$ as *t* approaches infinity does not exist.
:::

:::exercise {fs-id1169738028885} type= 
PROBLEM:
Describe the curve defined by the vector-valued function $\textbf{r}(t)=(1+t)\;\textbf{i}+(2+5t)\;\textbf{j}+(−1+6t)\;\textbf{k}.$
:::
Find the domain of the vector-valued functions.

:::exercise {fs-id1169737394656} type= 
PROBLEM:
Domain: $\textbf{r}(t)=\langle {t}^{2},\text{tan}\;t,\text{ln}\;t\rangle$
SOLUTION:
$t>0,t≠(2k+1)\frac{\pi}{2},$ where k is an integer
:::

:::exercise {fs-id1169738080318} type= 
PROBLEM:
Domain: $\textbf{r}(t)=\langle {t}^{2},\sqrt{t-3},\frac{3}{2t+1}\rangle$
:::

:::exercise {fs-id1169737490912} type= 
PROBLEM:
Domain: $\textbf{r}(t)=\langle \text{csc}(t),\frac{1}{\sqrt{t-3}},\text{ln}(t-2)\rangle$
SOLUTION:
$t>3,t≠n\pi ,$ where *n* is an integer
:::
Let $\textbf{r}(t)=\langle \text{cos}\;t,t,\text{sin}\;t\rangle$ and use it to answer the following questions.

:::exercise {fs-id1169737953751} type= 
PROBLEM:
For what values of *t* is $\textbf{r}(t)$ continuous?
:::

:::exercise {fs-id1169737911233} type= 
PROBLEM:
Sketch the graph of $\textbf{r}(t).$
SOLUTION:

> IMAGE {img:fs-id1169737376217} src=../../media/CNX_Calc_Figure_13_01_203.jpg
> alt: This figure has two graphs. The first graph is labeled “cross section” and is a circle centered at the origin with radius of 1. It has counter-clockwise orientation. The section graph is labeled “side view” and is a 3 dimensional helix. The helix has counterclockwise orientation.

:::

:::exercise {fs-id1169738228505} type= 
PROBLEM:
Find the domain of $\textbf{r}(t)=2{e}^{\text{−}t}\;\textbf{i}+{e}^{\text{−}t}\;\textbf{j}+\text{ln}(t-1)\;\textbf{k}.$
:::

:::exercise {fs-id1169738166893} type= 
PROBLEM:
For what values of *t* is $\textbf{r}(t)=2{e}^{\text{−}t}\;\textbf{i}+{e}^{\text{−}t}\;\textbf{j}+\text{ln}(t-1)\;\textbf{k}$ continuous?
SOLUTION:
All *t* such that $t\in (1,\infty )$
:::
Eliminate the parameter *t*, write the equation in Cartesian coordinates, then sketch the graphs of the vector-valued functions.

:::exercise {fs-id1169737364387} type= 
PROBLEM:
$\textbf{r}(t)=2t\;\textbf{i}+{t}^{2}\;\textbf{j}$ (*Hint:* Let $x=2t$ and $y={t}^{2}.$ Solve the first equation for *x* in terms of *t* and substitute this result into the second equation.)
:::

:::exercise {fs-id1169737167230} type= 
PROBLEM:
$\textbf{r}(t)={t}^{3}\;\textbf{i}+2t\;\textbf{j}$
SOLUTION:
$y=2\sqrt[3]{x},$ a variation of the cube-root function

> IMAGE {img:fs-id1169738016067} src=../../media/CNX_Calc_Figure_13_01_205.jpg
> alt: This figure is the graph of y = 2 times the cube root of x. It is an increasing function passing through the origin. The curve becomes more vertical near the origin. It has orientation to the right represented with arrows on the curve.

:::

:::exercise {fs-id1169738016083} type= 
PROBLEM:
$\textbf{r}(t)=2(\text{sinh}\;t)\;\textbf{i}+2(\text{cosh}\;t)\;\textbf{j},t>0$
:::

:::exercise {fs-id1169737950449} type= 
PROBLEM:
$\textbf{r}(t)=3(\text{cos}\;t)\;\textbf{i}+3(\text{sin}\;t)\;\textbf{j}$
SOLUTION:
${x}^{2}+{y}^{2}=9,$ a circle centered at $(0,0)$ with radius 3, and a counterclockwise orientation

> IMAGE {img:fs-id1169738183349} src=../../media/CNX_Calc_Figure_13_01_207.jpg
> alt: This figure is the graph of x^2 + y^2 = 9. It is a circle centered at the origin with radius 3. It has orientation counter-clockwise represented with arrows on the curve.

:::

:::exercise {fs-id1169737460223} type= 
PROBLEM:
$\textbf{r}(t)=\langle 3\;\text{sin}\;t,3\;\text{cos}\;t\rangle$
:::
Use a graphing utility to sketch each of the following vector-valued functions:

:::exercise {fs-id1169737148326} type= 
PROBLEM:
**[T]** $\text{r}(t)=(2\;{\text{cos}}^{2}\;t)\;\text{i}+(2-\sqrt{t})\;\text{j}$
SOLUTION:

> IMAGE {img:fs-id1169737487202} src=../../media/CNX_Calc_Figure_13_01_208.jpg
> alt: This figure is the graph of r(t) = 2cost^2 i + (2 – the square root of t) j. The curve spirals in the first quadrant, touching the y-axis. As the curve gets closer to the x-axis, the spirals become tighter. It has the look of a spring being compressed. The arrows on the curve represent orientation going downward.

:::

:::exercise {fs-id1169738083682} type= 
PROBLEM:
**[T]** $\textbf{r}(t)=\langle {e}^{\text{cos}(3t)},{e}^{\text{−}\text{sin}(t)}\rangle$
:::

:::exercise {fs-id1169737160691} type= 
PROBLEM:
**[T]** $\textbf{r}(t)=\langle 2-\text{sin}(2t),3+2\;\text{cos}\;t\rangle$
SOLUTION:

> IMAGE {img:fs-id1169738079824} src=../../media/CNX_Calc_Figure_13_01_210.jpg
> alt: This figure has two graphs. The first is 3 dimensional and is a curve making a figure eight on its side inside of a box. The box represents the first octant. The second graph is 2 dimensional. It represents the same curve from a “view in the yt plane”. The horizontal axis is labeled “t”. The curve is connected and crosses over itself in the first quadrant resembling a figure eight.

Find a vector-valued function that traces out the given curve in the indicated direction.
:::

:::exercise {fs-id1169738216363} type= 
PROBLEM:
$4{x}^{2}+9{y}^{2}=36;$ clockwise and counterclockwise
:::

:::exercise {fs-id1169737788723} type= 
PROBLEM:
$\textbf{r}(t)=\langle t,{t}^{2}\rangle ;$ from left to right
SOLUTION:
For left to right, $y={x}^{2},$ where t increases
:::

:::exercise {fs-id1169737910147} type= 
PROBLEM:
The line through *P* and *Q* where *P* is $(1,4,−2)$ and *Q* is $(3,9,6)$
:::
Consider the curve described by the vector-valued function $\textbf{r}(t)=(50{e}^{\text{−}t}\text{cos}\;t)\;\textbf{i}+(50{e}^{\text{−}t}\text{sin}\;t)\;\textbf{j}+(5-5{e}^{\text{−}t})\;\textbf{k}.$

:::exercise {fs-id1169738133270} type= 
PROBLEM:
What is the initial point of the path corresponding to $\textbf{r}(0)?$
SOLUTION:
$(50,0,0)$
:::

:::exercise {fs-id1169737778518} type= 
PROBLEM:
What is $\lim_{t\to \infty}\;\textbf{r}(t)?$
:::

:::exercise {fs-id1169737399959} type= 
PROBLEM:
**[T]** Use technology to sketch the curve.
SOLUTION:

> IMAGE {img:fs-id1169738146054} src=../../media/CNX_Calc_Figure_13_01_211.jpg
> alt: This figure is a graph in the 3 dimensional coordinate system. It is a curve starting at the middle of the box and curving towards the upper left corner The box represents an octant of the coordinate system.

:::

:::exercise {fs-id1169738146069} type= 
PROBLEM:
Eliminate the parameter *t* to show that $z=5-\frac{r}{10}$ where ${r}^{2}={x}^{2}+{y}^{2}.$
:::

:::exercise {fs-id1169738188924} type= 
PROBLEM:
**[T]** Let $r(t)=\text{cos}\;t\;\textbf{i}+\text{sin}\;t\;\textbf{j}+0.3\;\text{sin}(2t)\;\textbf{k}.$ Use technology to graph the curve (called the *roller-coaster curve*) over the interval $[0,2\pi ).$ Choose at least two views to determine the peaks and valleys.
SOLUTION:

> IMAGE {img:fs-id1169737490788} src=../../media/CNX_Calc_Figure_13_01_212.jpg
> alt: This figure has two graphs. The first is 3 dimensional and is a connected curve with counter-clockwise orientation inside of a box. The second graph is 3 dimensional. It represents the same curve from different view of the box. From the side of the box the curve is connected and has depth to it.

:::

:::exercise {fs-id1169737490804} type= 
PROBLEM:
**[T]** Use the result of the preceding problem to construct an equation of a roller coaster with a steep drop from the peak and steep incline from the “valley.” Then, use technology to graph the equation.
:::

:::exercise {fs-id1169737270469} type= 
PROBLEM:
Use the results of the preceding two problems to construct an equation of a path of a roller coaster with more than two turning points (peaks and valleys).
SOLUTION:
One possibility is $r(t)=\text{cos}\;t\;\textbf{i}+\text{sin}\;t\;\textbf{j}+\text{sin}(4t)\;\textbf{k}.$ By increasing the coefficient of *t* in the third component, the number of turning points will increase.

> IMAGE {img:fs-id1169737400101} src=../../media/CNX_Calc_Figure_13_01_214.jpg
> alt: This figure is a 3 dimensional graph. It is a connected curve inside of a box. The curve has orientation. As the orientation travels around the curve, it does go up and down in depth.

:::

:::exercise {fs-id1169737400116} type= 
PROBLEM:
a. Graph the curve $\textbf{r}(t)=(4+\text{cos}(18t))\text{cos}(t)\;\textbf{i}+(4+\text{cos}(18t)\text{sin}(t))\;\textbf{j}+0.3\;\text{sin}(18t)\;\textbf{k}$ using two viewing angles of your choice to see the overall shape of the curve.
b. Does the curve resemble a “slinky”?
c. What changes to the equation should be made to increase the number of coils of the slinky?
:::

## Glossary
- {def} **component functions**: the component functions of the vector-valued function $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}$ are $f(t)$ and $g(t),$ and the component functions of the vector-valued function $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k}$ are $f(t),$ $g(t)$ and $h(t)$
- {def} **helix**: a three-dimensional curve in the shape of a spiral
- {def} **limit of a vector-valued function**: a vector-valued function $\textbf{r}(t)$ has a limit **L** as *t* approaches *a* if $\lim_{t\to a}|\;\textbf{r}(t)-\textbf{L}|=0$
- {def} **plane curve**: the set of ordered pairs $(f(t),g(t))$ together with their defining parametric equations $x=f(t)$ and $y=g(t)$
- {def} **reparameterization**: an alternative parameterization of a given vector-valued function
- {def} **space curve**: the set of ordered triples $(f(t),g(t),h(t))$ together with their defining parametric equations $x=f(t),$ $y=g(t)$ and $z=h(t)$
- {def} **vector parameterization**: any representation of a plane or space curve using a vector-valued function
- {def} **vector-valued function**: a function of the form $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}$ or $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k},$ where the component functions *f, g,* and *h* are real-valued functions of the parameter *t*

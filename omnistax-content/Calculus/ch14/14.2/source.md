# Limits and Continuity

## Learning Objectives {section:learning-objectives}
- Calculate the limit of a function of two variables.
- Learn how a function of two variables can approach different values at a boundary point, depending on the path of approach.
- State the conditions for continuity of a function of two variables.
- Verify the continuity of a function of two variables at a point.
- Calculate the limit of a function of three or more variables and verify the continuity of the function at a point.

We have now examined functions of more than one variable and seen how to graph them. In this section, we see how to take the limit of a function of more than one variable, and what it means for a function of more than one variable to be continuous at a point in its domain. It turns out these concepts have aspects that just don’t occur with functions of one variable.

## Limit of a Function of Two Variables
Recall from [The Limit of a Function](module:m53491) the definition of a limit of a function of one variable:
Let $f(x)$ be defined for all $x≠a$ in an open interval containing $a.$ Let $L$ be a real number. Then

$\lim_{x\to a}f(x)=L$  {eq:fs-id1167794055134}

if for every $ε>0,$ there exists a $δ>0,$ such that if $0<|x-a|<δ$ for all $x$ in the domain of $f,$ then

$|f(x)-L|<ε.$  {eq:fs-id1167793263380}

Before we can adapt this definition to define a limit of a function of two variables, we first need to see how to extend the idea of an open interval in one variable to an open interval in two variables.

:::note [definition] Definition
Consider a point $(a,b)\in {\mathbb{R}}^{2}.$ A {term:$δ$ disk} centered at point $(a,b)$ is defined to be an open disk of radius $δ$ centered at point $(a,b)$—that is,

$\{(x,y)\in {\mathbb{R}}^{2}|{(x-a)}^{2}+{(y-b)}^{2}<{δ}^{2}\}$  {eq:fs-id1167794117907}

as shown in the following graph.
:::

> FIGURE {fig:CNX_Calc_Figure_14_02_001} src=../../media/CNX_Calc_Figure_14_02_001.jpg
> alt: On the xy plane, the point (2, 1) is shown, which is the center of a circle of radius δ.
> caption: A $δ$ disk centered around the point $(2,1).$

The idea of a $δ$ disk appears in the definition of the limit of a function of two variables. If $δ$ is small, then all the points $(x,y)$ in the $δ$ disk are close to $(a,b).$ This is completely analogous to $x$ being close to $a$ in the definition of a limit of a function of one variable. In one dimension, we express this restriction as

$a-δ<x<a+δ.$  {eq:fs-id1167793938174}

In more than one dimension, we use a $δ$ disk.

:::note [definition] Definition
Let $f$ be a function of two variables, $x$ and $y.$ The limit of $f(x,y)$ as $(x,y)$ approaches $(a,b)$ is $L,$ written

$\lim_{(x,y)\to (a,b)}f(x,y)=L$  {eq:fs-id1167793277511}

if for each $ε>0$ there exists a small enough $δ>0$ such that for all points $(x,y)$ in a $δ$ disk around $(a,b),$ except possibly for $(a,b)$ itself, the value of $f(x,y)$ is no more than $ε$ away from $L$ ([ref:CNX_Calc_Figure_14_02_002]). Using symbols, we write the following: For any $ε>0,$ there exists a number $δ>0$ such that

$|f(x,y)-L|<ε\;\text{whenever}\;0<\sqrt{{(x-a)}^{2}+{(y-b)}^{2}}<δ.$  {eq:fs-id1167793844303}

:::

> FIGURE {fig:CNX_Calc_Figure_14_02_002} src=../../media/CNX_Calc_Figure_14_02_002.jpg
> alt: In xyz space, a function is drawn with point L. This point L is the center of a circle of radius ॉ, with points L ± ॉ marked. On the xy plane, there is a point (a, b) drawn with a circle of radius δ around it. This is denoted the δ-disk. There are dashed lines up from the δ-disk to make a disk on the function, which is called the image of delta disk. Then there are dashed lines from this disk to the circle around the point L, which is called the ॉ-neighborhood of L.
> caption: The limit of a function involving two variables requires that $f(x,y)$ be within $ε$ of $L$ whenever $(x,y)$ is within $δ$ of $(a,b).$ The smaller the value of $ε,$ the smaller the value of $δ.$

Proving that a limit exists using the definition of a {index:limit of a function of two variables} can be challenging. Instead, we use the following theorem, which gives us shortcuts to finding limits. The formulas in this theorem are an extension of the formulas in the limit laws theorem in [The Limit Laws](module:m53492).

:::note [theorem] Limit laws for functions of two variables
Let $f(x,y)$ and $g(x,y)$ be defined for all $(x,y)≠(a,b)$ in a neighborhood around $(a,b),$ and assume the neighborhood is contained completely inside the domain of $f.$ Assume that $L$ and $M$ are real numbers such that $\lim_{(x,y)\to (a,b)}f(x,y)=L$ and $\lim_{(x,y)\to (a,b)}g(x,y)=M,$ and let $c$ be a constant. Then each of the following statements holds:
**Constant Law:**

$$ \lim_{(x,y)\to (a,b)}c=c $$  {eq:fs-id1167793828158}

**Identity Laws:**

$$ \lim_{(x,y)\to (a,b)}x=a $$  {eq:fs-id1167794097907}

$$ \lim_{(x,y)\to (a,b)}y=b $$  {eq:fs-id1167793629016}

**Sum Law:**

$$ \lim_{(x,y)\to (a,b)}(f(x,y)+g(x,y))=L+M $$  {eq:fs-id1167794069530}

**Difference Law:**

$$ \lim_{(x,y)\to (a,b)}(f(x,y)-g(x,y))=L-M $$  {eq:fs-id1167793848760}

**Constant Multiple Law:**

$$ \lim_{(x,y)\to (a,b)}(cf(x,y))=cL $$  {eq:fs-id1167793444617}

**Product Law:**

$$ \lim_{(x,y)\to (a,b)}(f(x,y)g(x,y))=LM $$  {eq:fs-id1167793380201}

**Quotient Law:**

$$ \lim_{(x,y)\to (a,b)}\frac{f(x,y)}{g(x,y)}=\frac{L}{M}\;\text{for}\;M≠0 $$  {eq:fs-id1167794039759}

**Power Law:**

$$ \lim_{(x,y)\to (a,b)}{(f(x,y))}^{n}={L}^{n} $$  {eq:fs-id1167794039674}

for any positive integer $n.$
**Root Law:**

$$ \lim_{(x,y)\to (a,b)}\sqrt[n]{f(x,y)}=\sqrt[n]{L} $$  {eq:fs-id1167794046214}

for all $L$ if $n$ is odd and positive, and for $L\ge 0$ if $n$ is even and positive provided that $f(x,y)\ge 0$ for all $(x,y)≠(a,b)$ in neighborhood of $(a,b)$.
:::
The proofs of these properties are similar to those for the limits of functions of one variable. We can apply these laws to finding limits of various functions.

:::example {ex:fs-id1167794101556} Finding the Limit of a Function of Two Variables

:::exercise {fs-id1167794096225} type= 
PROBLEM:
Find each of the following limits:
a. $\lim_{(x,y)\to (2,−1)}({x}^{2}-2xy+3{y}^{2}-4x+3y-6)$
b. $\lim_{(x,y)\to (2,−1)}\frac{2x+3y}{4x-3y}$
SOLUTION:
a. First use the sum and difference laws to separate the terms:

                

$\begin{array}{l} \\ \lim_{(x,y)\to (2,−1)}({x}^{2}-2xy+3{y}^{2}-4x+3y-6) \\ =(\lim_{(x,y)\to (2,−1)}{x}^{2})-(\lim_{(x,y)\to (2,−1)}2xy)+(\lim_{(x,y)\to (2,−1)}3{y}^{2})-(\lim_{(x,y)\to (2,−1)}4x) \\ \;+(\lim_{(x,y)\to (2,−1)}3y)-(\lim_{(x,y)\to (2,−1)}6).\end{array}$  {eq:fs-id1167793979678}

                

                Next, use the constant multiple law on the second, third, fourth, and fifth limits:

                

$\begin{array}{l} \\ \\ =(\lim_{(x,y)\to (2,−1)}{x}^{2})-2(\lim_{(x,y)\to (2,−1)}xy)+3(\lim_{(x,y)\to (2,−1)}{y}^{2})-4(\lim_{(x,y)\to (2,−1)}x) \\ \;+3(\lim_{(x,y)\to (2,−1)}y)-\lim_{(x,y)\to (2,−1)}6.\end{array}$  {eq:fs-id1167793262079}

                

                Now, use the power law on the first and third limits, and the product law on the second limit:

                

$\begin{array}{l} \\ \\ \\ ={(\lim_{(x,y)\to (2,−1)}x)}^{2}-2(\lim_{(x,y)\to (2,−1)}x)(\lim_{(x,y)\to (2,−1)}y)+3{(\lim_{(x,y)\to (2,−1)}y)}^{2} \\ \;-4(\lim_{(x,y)\to (2,−1)}x)+3(\lim_{(x,y)\to (2,−1)}y)-\lim_{(x,y)\to (2,−1)}6.\end{array}$  {eq:fs-id1167793888113}

                

                Last, use the identity laws on the first six limits and the constant law on the last limit:

                $\begin{array}{ll}\lim_{(x,y)\to (2,−1)}({x}^{2}-2xy+3{y}^{2}-4x+3y-6) & ={(2)}^{2}-2(2)(−1)+3{(−1)}^{2}-4(2)+3(−1)-6 \\ & =−6.\end{array}$
b. Before applying the quotient law, we need to verify that the limit of the denominator is nonzero. Using the difference law, constant multiple law, and identity law,

                

$\begin{array}{rl}\lim_{(x,y)\to (2,−1)}(4x-3y) & =\lim_{(x,y)\to (2,−1)}4x-\lim_{(x,y)\to (2,−1)}3y \\ & =4(\lim_{(x,y)\to (2,−1)}x)-3(\lim_{(x,y)\to (2,−1)}y) \\ & =4(2)-3(−1)=11.\end{array}$  {eq:fs-id1167793951582}

                

                Since the limit of the denominator is nonzero, the quotient law applies. We now calculate the limit of the numerator using the difference law, constant multiple law, and identity law:

                

$\begin{array}{rl}\lim_{(x,y)\to (2,−1)}(2x+3y) & =\lim_{(x,y)\to (2,−1)}2x+\lim_{(x,y)\to (2,−1)}3y \\ & =2(\lim_{(x,y)\to (2,−1)}x)+3(\lim_{(x,y)\to (2,−1)}y) \\ & =2(2)+3(−1) \\ & =1.\end{array}$  {eq:fs-id1167793948908}

                

                Therefore, according to the quotient law we have

                

$\lim_{(x,y)\to (2,−1)}\frac{2x+3y}{4x-3y}=\frac{\lim_{(x,y)\to (2,−1)}(2x+3y)}{\lim_{(x,y)\to (2,−1)}(4x-3y)}=\frac{1}{11}.$  {eq:fs-id1167793432085}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793240800} type= 
PROBLEM:
Evaluate the following limit:

$\lim_{(x,y)\to (5,−2)}\sqrt[3]{\frac{{x}^{2}-y}{{y}^{2}+x-1}}.$  {eq:fs-id1167793977327}

SOLUTION:
$\lim_{(x,y)\to (5,−2)}\sqrt[3]{\frac{{x}^{2}-y}{{y}^{2}+x-1}}=\frac{3}{2}$
COMMENTARY: Hint
Use the limit laws.
:::
:::
Since we are taking the limit of a function of two variables, the point $(a,b)$ is in ${\mathbb{R}}^{2},$ and it is possible to approach this point from an infinite number of directions. Sometimes when calculating a limit, the answer varies depending on the path taken toward $(a,b).$ If this is the case, then the limit fails to exist. In other words, the limit must be unique, regardless of path taken.

:::example {ex:fs-id1167794293308} Limits That Fail to Exist

:::exercise {fs-id1167794293310} type= 
PROBLEM:
Show that neither of the following limits exist:
a. $\lim_{(x,y)\to (0,0)}\frac{2xy}{3{x}^{2}+{y}^{2}}$
b. $\lim_{(x,y)\to (0,0)}\frac{4x{y}^{2}}{{x}^{2}+3{y}^{4}}$
SOLUTION:
a. The domain of the function $f(x,y)=\frac{2xy}{3{x}^{2}+{y}^{2}}$ consists of all points in the $xy\text{-plane}$ except for the point $(0,0)$ ([ref:CNX_Calc_Figure_14_02_003]). To show that the limit does not exist as $(x,y)$ approaches $(0,0),$ we note that it is impossible to satisfy the definition of a limit of a function of two variables because of the fact that the function takes different values along different lines passing through point $(0,0).$ First, consider the line $y=0$ in the $xy\text{-plane.}$ Substituting $y=0$ into $f(x,y)$ gives

                

$f(x,0)=\frac{2x(0)}{3{x}^{2}+{0}^{2}}=0$  {eq:fs-id1167793939699}

                

                for any value of $x.$ Therefore the value of $f$ remains constant for any point on the $x\text{-axis,}$ and as $y$ approaches zero, the function remains fixed at zero.

                Next, consider the line $y=x.$ Substituting $y=x$ into $f(x,y)$ gives

                

$f(x,x)=\frac{2x(x)}{3{x}^{2}+{x}^{2}}=\frac{2{x}^{2}}{4{x}^{2}}=\frac{1}{2}.$  {eq:fs-id1167793932781}

                

                This is true for any point on the line $y=x.$ If we let $x$ approach zero while staying on this line, the value of the function remains fixed at $\frac{1}{2},$ regardless of how small $x$ is.

                Choose a value for $ε$ that is less than $1\text{/}2$—say, $1\text{/}4.$ Then, no matter how small a $δ$ disk we draw around $(0,0),$ the values of $f(x,y)$ for points inside that $δ$ disk will include both $0$ and $\frac{1}{2}.$ Therefore, the definition of limit at a point is never satisfied and the limit fails to exist.

                

> FIGURE {fig:CNX_Calc_Figure_14_02_003} src=../../media/CNX_Calc_Figure_14_02_003.jpg
> alt: In xyz space, the function f(x, y) = 2xy/(3x2 + y2) is shown, which is a slightly twisted plane, with values of 0 along the line y = 0 and values of ½ along the line y = x.
> caption: Graph of the function $f(x,y)=(2xy)\text{/}(3{x}^{2}+{y}^{2}).$ Along the line $y=0,$ the function is equal to zero; along the line $y=x,$ the function is equal to $\frac{1}{2}.$

                

                In a similar fashion to a., we can approach the origin along any straight line passing through the origin. If we try the $x\text{-axis}$ (i.e., $y=0),$ then the function remains fixed at zero. The same is true for the $y\text{-axis.}$ Suppose we approach the origin along a straight line of slope $k.$ The equation of this line is $y=kx.$ Then the limit becomes

                

$\begin{array}{rl}\lim_{(x,y)\to (0,0)}\frac{4x{y}^{2}}{{x}^{2}+3{y}^{4}} & =\lim_{(x,y)\to (0,0)}\frac{4x{(kx)}^{2}}{{x}^{2}+3{(kx)}^{4}} \\ & =\lim_{(x,y)\to (0,0)}\frac{4{k}^{2}{x}^{3}}{{x}^{2}+3{k}^{4}{x}^{4}} \\ & =\lim_{(x,y)\to (0,0)}\frac{4{k}^{2}x}{1+3{k}^{4}{x}^{2}} \\ & =\frac{\lim_{(x,y)\to (0,0)}(4{k}^{2}x)}{\lim_{(x,y)\to (0,0)}(1+3{k}^{4}{x}^{2})} \\ & =0\end{array}$  {eq:fs-id1167794066296}

                

                regardless of the value of $k.$ It would seem that the limit is equal to zero. What if we chose a curve passing through the origin instead? For example, we can consider the parabola given by the equation $x={y}^{2}.$ Substituting ${y}^{2}$ in place of $x$ in $f(x,y)$ gives

                

$\begin{array}{rl}\lim_{(x,y)\to (0,0)}\frac{4x{y}^{2}}{{x}^{2}+3{y}^{4}} & =\lim_{(x,y)\to (0,0)}\frac{4({y}^{2}){y}^{2}}{{({y}^{2})}^{2}+3{y}^{4}} \\ & =\lim_{(x,y)\to (0,0)}\frac{4{y}^{4}}{{y}^{4}+3{y}^{4}} \\ & =\lim_{(x,y)\to (0,0)}1 \\ & =1.\end{array}$  {eq:fs-id1167794054943}

                

                By the same logic in a., it is impossible to find a $δ$ disk around the origin that satisfies the definition of the limit for any value of $ε<1.$ Therefore, $\lim_{(x,y)\to (0,0)}\frac{4x{y}^{2}}{{x}^{2}+3{y}^{4}}$ does not exist.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794176310} type= 
PROBLEM:
Show that

$\lim_{(x,y)\to (2,1)}\frac{(x-2)(y-1)}{{(x-2)}^{2}+{(y-1)}^{2}}$  {eq:fs-id1167793265540}

does not exist.
SOLUTION:
If $y=k(x-2)+1,$ then $\lim_{(x,y)\to (2,1)}\frac{(x-2)(y-1)}{{(x-2)}^{2}+{(y-1)}^{2}}=\frac{k}{1+{k}^{2}}.$ Since the answer depends on $k,$ the limit fails to exist.
COMMENTARY: Hint
Pick a line with slope $k$ passing through point $(2,1).$
:::
:::

## Interior Points and Boundary Points
To study continuity and differentiability of a function of two or more variables, we first need to learn some new terminology.

:::note [definition] Definition
Let *S* be a subset of ${\mathbb{R}}^{2}$ ([ref:CNX_Calc_Figure_14_02_004]).
1. A point ${P}_{0}$ is called an {term:interior point} of $S$ if there is a $δ$ disk centered around ${P}_{0}$ contained completely in $S.$
2. A point ${P}_{0}$ is called a {term:boundary point} of $S$ if every $δ$ disk centered around ${P}_{0}$ contains points both inside and outside $S.$
:::

> FIGURE {fig:CNX_Calc_Figure_14_02_004} src=../../media/CNX_Calc_Figure_14_02_004.jpg
> alt: On the xy plane, a closed shape is drawn. There is a point (–1, 1) drawn on the inside of the shape, and there is a point (2, 3) drawn on the boundary. Both of these points are the centers of small circles.
> caption: In the set $S$ shown, $(−1,1)$ is an interior point and $(2,3)$ is a boundary point.

:::note [definition] Definition
Let *S* be a subset of ${\mathbb{R}}^{2}$ ([ref:CNX_Calc_Figure_14_02_004]).
1. $S$ is called an {term:open set} if every point of $S$ is an interior point.
2. $S$ is called a {term:closed set} if it contains all its boundary points.
:::
An example of an open set is a $δ$ disk. If we include the boundary of the disk, then it becomes a closed set. A set that contains some, but not all, of its boundary points is neither open nor closed. For example if we include half the boundary of a $δ$ disk but not the other half, then the set is neither open nor closed.

:::note [definition] Definition
Let *S* be a subset of ${\mathbb{R}}^{2}$ ([ref:CNX_Calc_Figure_14_02_004]).
1. An open set $S$ is a {term:connected set} if it cannot be represented as the union of two or more disjoint, nonempty open subsets.
2. A set $S$ is a {term:region} if it is open, connected, and nonempty.
:::
The definition of a limit of a function of two variables requires the $δ$ disk to be contained inside the domain of the function. However, if we wish to find the limit of a function at a boundary point of the domain, the $δ\;\text{disk}$ is not contained inside the domain. By definition, some of the points of the $δ\;\text{disk}$ are inside the domain and some are outside. Therefore, we need only consider points that are inside both the $δ$ disk and the domain of the function. This leads to the definition of the limit of a function at a boundary point.

:::note [definition] Definition
Let $f$ be a function of two variables, $x$ and $y,$ and suppose $(a,b)$ is on the boundary of the domain of $f.$ Then, the limit of $f(x,y)$ as $(x,y)$ approaches $(a,b)$ is $L,$ written

$\lim_{(x,y)\to (a,b)}f(x,y)=L,$  {eq:fs-id1167793983763}

if for any $ε>0,$ there exists a number $δ>0$ such that for any point $(x,y)$ inside the domain of $f$ and within a suitably small distance positive $δ$ of $(a,b),$ the value of $f(x,y)$ is no more than $ε$ away from $L$ ([ref:CNX_Calc_Figure_14_02_002]). Using symbols, we can write: For any $ε>0,$ there exists a number $δ>0$ such that

$|f(x,y)-L|<ε\;\text{whenever}\;0<\sqrt{{(x-a)}^{2}+{(y-b)}^{2}}<δ.$  {eq:fs-id1167793883986}

:::

:::example {ex:fs-id1167793277600} Limit of a Function at a Boundary Point

:::exercise {fs-id1167793277602} type= 
PROBLEM:
Prove $\lim_{(x,y)\to (4,3)}\sqrt{25-{x}^{2}-{y}^{2}}=0.$
SOLUTION:
The domain of the function $f(x,y)=\sqrt{25-{x}^{2}-{y}^{2}}$ is $\{(x,y)\in {\mathbb{R}}^{2}|{x}^{2}+{y}^{2}\le 25\},$ which is a circle of radius $5$ centered at the origin, along with its interior as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_14_02_005} src=../../media/CNX_Calc_Figure_14_02_005.jpg
> alt: A circle with radius 5 centered at the origin with its interior filled in.
> caption: Domain of the function $f(x,y)=\sqrt{25-{x}^{2}-{y}^{2}}.$

We can use the limit laws, which apply to limits at the boundary of domains as well as interior points:

$\begin{array}{rl}\lim_{(x,y)\to (4,3)}\sqrt{25-{x}^{2}-{y}^{2}} & =\sqrt{\lim_{(x,y)\to (4,3)}(25-{x}^{2}-{y}^{2})} \\ & =\sqrt{\lim_{(x,y)\to (4,3)}25-\lim_{(x,y)\to (4,3)}{x}^{2}-\lim_{(x,y)\to (4,3)}{y}^{2}} \\ & =\sqrt{25-{4}^{2}-{3}^{2}} \\ & =0.\end{array}$  {eq:fs-id1167793278480}

See the following graph.

> FIGURE {fig:CNX_Calc_Figure_14_02_006} src=../../media/CNX_Calc_Figure_14_02_006.jpg
> alt: The upper hemisphere in xyz space with radius 5 and center the origin.
> caption: Graph of the function $f(x,y)=\sqrt{25-{x}^{2}-{y}^{2}}.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793928006} type= 
PROBLEM:
Evaluate the following limit:

$\lim_{(x,y)\to (5,−2)}\sqrt{29-{x}^{2}-{y}^{2}}.$  {eq:fs-id1167793932401}

SOLUTION:
$\lim_{(x,y)\to (5,−2)}\sqrt{29-{x}^{2}-{y}^{2}}=0$
COMMENTARY: Hint
Determine the domain of $f(x,y)=\sqrt{29-{x}^{2}-{y}^{2}}.$
:::
:::

## Continuity of Functions of Two Variables
In [Continuity](module:m53489), we defined the continuity of a function of one variable and saw how it relied on the limit of a function of one variable. In particular, three conditions are necessary for $f(x)$ to be continuous at point $x=a\text{:}$
1. $f(a)$ exists.
2. $\lim_{x\to a}f(x)$ exists.
3. $\lim_{x\to a}f(x)=f(a).$
These three conditions are necessary for continuity of a function of two variables as well.

:::note [definition] Definition
A function $f(x,y)$ is continuous at a point $(a,b)$ in its domain if the following conditions are satisfied:
1. $f(a,b)$ exists.
2. $\lim_{(x,y)\to (a,b)}f(x,y)$ exists.
3. $\lim_{(x,y)\to (a,b)}f(x,y)=f(a,b).$
:::

:::example {ex:fs-id1167794091703} Demonstrating Continuity for a Function of Two Variables

:::exercise {fs-id1167794091705} type= 
PROBLEM:
Show that the function $f(x,y)=\frac{3x+2y}{x+y+1}$ is continuous at point $(5,−3).$
SOLUTION:
There are three conditions to be satisfied, per the definition of continuity. In this example, $a=5$ and $b=−3.$
1. $f(a,b)$ exists. This is true because the domain of the function $f$ consists of those ordered pairs for which the denominator is nonzero (i.e., $x+y+1≠0).$ Point $(5,−3)$ satisfies this condition. Furthermore,

                

$f(a,b)=f(5,−3)=\frac{3(5)+2(−3)}{5+(−3)+1}=\frac{15-6}{2+1}=3.$  {eq:fs-id1167793932923}

2. $\lim_{(x,y)\to (a,b)}f(x,y)$ exists. This is also true:

                

$\begin{array}{rl}\lim_{(x,y)\to (a,b)}f(x,y) & =\lim_{(x,y)\to (5,−3)}\frac{3x+2y}{x+y+1} \\ & =\frac{\lim_{(x,y)\to (5,−3)}(3x+2y)}{\lim_{(x,y)\to (5,−3)}(x+y+1)} \\ & =\frac{15-6}{5-3+1} \\ & =3.\end{array}$  {eq:fs-id1167793581505}

3. $\lim_{(x,y)\to (a,b)}f(x,y)=f(a,b).$ This is true because we have just shown that both sides of this equation equal three.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793632752} type= 
PROBLEM:
Show that the function $f(x,y)=\sqrt{26-2{x}^{2}-{y}^{2}}$ is continuous at point $(2,−3).$
SOLUTION:
1. The domain of $f$ contains the ordered pair $(2,−3)$ because $f(a,b)=f(2,−3)=\sqrt{16-2{(2)}^{2}-{(−3)}^{2}}=3$
2. $\lim_{(x,y)\to (a,b)}f(x,y)=3$
3. $\lim_{(x,y)\to (a,b)}f(x,y)=f(a,b)=3$
COMMENTARY: Hint
Use the three-part definition of continuity.
:::
:::
Continuity of a function of any number of variables can also be defined in terms of delta and epsilon. A function of two variables is continuous at a point $({x}_{0},{y}_{0})$ in its domain if for every $ε>0$ there exists a $δ>0$ such that, whenever $\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}<δ$ it is true, $|f(x,y)-f(a,b)|<ε.$ This definition can be combined with the formal definition (that is, the *epsilon–delta definition*) of continuity of a function of one variable to prove the following theorems:

:::note [theorem] The Sum of Continuous Functions Is Continuous
If $f(x,y)$ is continuous at $({x}_{0},{y}_{0}),$ and $g(x,y)$ is continuous at $({x}_{0},{y}_{0}),$ then $f(x,y)+g(x,y)$ is continuous at $({x}_{0},{y}_{0}).$
:::

:::note [theorem] The Product of Continuous Functions Is Continuous
If $g(x)$ is continuous at ${x}_{0}$ and $h(y)$ is continuous at ${y}_{0},$ then $f(x,y)=g(x)h(y)$ is continuous at $({x}_{0},{y}_{0}).$
:::

:::note [theorem] The Composition of Continuous Functions Is Continuous
Let $g$ be a function of two variables from a domain $D\subseteq {\mathbb{R}}^{2}$ to a range $R\subseteq \mathbb{R}.$ Suppose $g$ is continuous at some point $({x}_{0},{y}_{0})\in D$ and define ${z}_{0}=g({x}_{0},{y}_{0}).$ Let $f$ be a function that maps $\mathbb{R}$ to $\mathbb{R}$ such that ${z}_{0}$ is in the domain of $f.$ Last, assume $f$ is continuous at ${z}_{0}.$ Then $f\circ g$ is continuous at $({x}_{0},{y}_{0})$ as shown in the following figure.
:::

> FIGURE {fig:CNX_Calc_Figure_14_02_007} src=../../media/CNX_Calc_Figure_14_02_007.jpg
> alt: A shape is shown labeled the domain of g with point (x, y) inside of it. From the domain of g there is an arrow marked g pointing to the range of g, which is a straight line with point z on it. The range of g is also marked the domain of f. Then there is another arrow marked f from this shape to a line marked range of f.
> caption: The composition of two continuous functions is continuous.

Let’s now use the previous theorems to show continuity of functions in the following examples.

:::example {ex:fs-id1167793510063} More Examples of Continuity of a Function of Two Variables

:::exercise {fs-id1167793510065} type= 
PROBLEM:
Show that the functions $f(x,y)=4{x}^{3}{y}^{2}$ and $g(x,y)=\text{cos}(4{x}^{3}{y}^{2})$ are continuous everywhere.
SOLUTION:
The polynomials $g(x)=4{x}^{3}$ and $h(y)={y}^{2}$ are continuous at every real number, and therefore by the product of continuous functions theorem, $f(x,y)=4{x}^{3}{y}^{2}$ is continuous at every point $(x,y)$ in the $xy\text{-plane.}$ Since $f(x,y)=4{x}^{3}{y}^{2}$ is continuous at every point $(x,y)$ in the $xy\text{-plane}$ and $g(x)=\text{cos}\;x$ is continuous at every real number $x,$ the continuity of the composition of functions tells us that $g(x,y)=\text{cos}(4{x}^{3}{y}^{2})$ is continuous at every point $(x,y)$ in the $xy\text{-plane.}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793443487} type= 
PROBLEM:
Show that the functions $f(x,y)=2{x}^{2}{y}^{3}+3$ and $g(x,y)={(2{x}^{2}{y}^{3}+3)}^{4}$ are continuous everywhere.
SOLUTION:
The polynomials $g(x)=2{x}^{2}$ and $h(y)={y}^{3}$ are continuous at every real number; therefore, by the product of continuous functions theorem, $f(x,y)=2{x}^{2}{y}^{3}$ is continuous at every point $(x,y)$ in the $xy\text{-plane.}$ Furthermore, any constant function is continuous everywhere, so $g(x,y)=3$ is continuous at every point $(x,y)$ in the $xy\text{-plane.}$ Therefore, $f(x,y)=2{x}^{2}{y}^{3}+3$ is continuous at every point $(x,y)$ in the $xy\text{-plane.}$ Last, $h(x)={x}^{4}$ is continuous at every real number $x,$ so by the continuity of composite functions theorem $g(x,y)={(2{x}^{2}{y}^{3}+3)}^{4}$ is continuous at every point $(x,y)$ in the $xy\text{-plane.}$
COMMENTARY: Hint
Use the continuity of the sum, product, and composition of two functions.
:::
:::

## Functions of Three or More Variables
The limit of a function of three or more variables occurs readily in applications. For example, suppose we have a function $f(x,y,z)$ that gives the temperature at a physical location $(x,y,z)$ in three dimensions. Or perhaps a function $g(x,y,z,t)$ can indicate air pressure at a location $(x,y,z)$ at time $t.$ How can we take a limit at a point in ${\mathbb{R}}^{3}?$ What does it mean to be continuous at a point in four dimensions?
The answers to these questions rely on extending the concept of a $δ$ disk into more than two dimensions. Then, the ideas of the limit of a function of three or more variables and the continuity of a function of three or more variables are very similar to the definitions given earlier for a function of two variables.

:::note [definition] Definition
Let $({x}_{0},{y}_{0},{z}_{0})$ be a point in ${\mathbb{R}}^{3}.$ Then, a {term:$δ$ ball} in three dimensions consists of all points in ${\mathbb{R}}^{3}$ lying at a distance of less than $δ$ from $({x}_{0},{y}_{0},{z}_{0})$—that is,

$\{(x,y,z)\in {\mathbb{R}}^{3}|\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}+{(z-{z}_{0})}^{2}}<δ\}.$  {eq:fs-id1167794125868}

To define a $δ$ ball in higher dimensions, add additional terms under the radical to correspond to each additional dimension. For example, given a point $P=({w}_{0},{x}_{0},{y}_{0},{z}_{0})$ in ${\mathbb{R}}^{4},$ a $δ$ ball around $P$ can be described by

$\{(w,x,y,z)\in {\mathbb{R}}^{4}|\sqrt{{(w-{w}_{0})}^{2}+{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}+{(z-{z}_{0})}^{2}}<δ\}.$  {eq:fs-id1167793583906}

:::
To show that a limit of a function of three variables exists at a point $({x}_{0},{y}_{0},{z}_{0}),$ it suffices to show that for any point in a $δ$ ball centered at $({x}_{0},{y}_{0},{z}_{0}),$ the value of the function at that point is arbitrarily close to a fixed value (the limit value). All the limit laws for functions of two variables hold for functions of more than two variables as well.

:::example {ex:fs-id1167793445843} Finding the Limit of a Function of Three Variables

:::exercise {fs-id1167793445845} type= 
PROBLEM:
Find $\lim_{(x,y,z)\to (4,1,−3)}\frac{{x}^{2}y-3z}{2x+5y-z}.$
SOLUTION:
Before we can apply the quotient law, we need to verify that the limit of the denominator is nonzero. Using the difference law, the identity law, and the constant law,

$\begin{array}{rl}\lim_{(x,y,z)\to (4,1,−3)}(2x+5y-z) & =2(\lim_{(x,y,z)\to (4,1,−3)}x)+5(\lim_{(x,y,z)\to (4,1,−3)}y)-(\lim_{(x,y,z)\to (4,1,−3)}z) \\ & =2(4)+5(1)-(−3) \\ & =16.\end{array}$  {eq:fs-id1167793631581}

Since this is nonzero, we next find the limit of the numerator. Using the product law, difference law, constant multiple law, and identity law,

$\begin{array}{rl}\lim_{(x,y,z)\to (4,1,−3)}({x}^{2}y-3z) & ={(\lim_{(x,y,z)\to (4,1,−3)}x)}^{2}(\lim_{(x,y,z)\to (4,1,−3)}y)-3\lim_{(x,y,z)\to (4,1,−3)}z \\ & =({4}^{2})(1)-3(−3) \\ & =16+9 \\ & =25.\end{array}$  {eq:fs-id1167793433747}

Last, applying the quotient law:

$\begin{array}{rl}\lim_{(x,y,z)\to (4,1,−3)}\frac{{x}^{2}y-3z}{2x+5y-z} & =\frac{\lim_{(x,y,z)\to (4,1,−3)}({x}^{2}y-3z)}{\lim_{(x,y,z)\to (4,1,−3)}(2x+5y-z)} \\ & =\frac{25}{16}.\end{array}$  {eq:fs-id1167793642062}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793545605} type= 
PROBLEM:
Find $\lim_{(x,y,z)\to (4,−1,3)}\sqrt{13-{x}^{2}-2{y}^{2}+{z}^{2}}.$
SOLUTION:
$\lim_{(x,y,z)\to (4,−1,3)}\sqrt{13-{x}^{2}-2{y}^{2}+{z}^{2}}=2$
COMMENTARY: Hint
Use the limit laws and the continuity of the composition of functions.
:::
:::

## Key Concepts {section:key-concepts}
- To study limits and continuity for functions of two variables, we use a $δ$ disk centered around a given point.
- A function of several variables has a limit if for any point in a $δ$ ball centered at a point $P,$ the value of the function at that point is arbitrarily close to a fixed value (the limit value).
- The limit laws established for a function of one variable have natural extensions to functions of more than one variable.
- A function of two variables is continuous at a point if the limit exists at that point, the function exists at that point, and the limit and function are equal at that point.

##  {section:section-exercises}
For the following exercises, find the limit of the function.

:::exercise {fs-id1167793928677} type= 
PROBLEM:
$\lim_{(x,y)\to (1,2)}x$
:::

:::exercise {fs-id1167794051779} type= 
PROBLEM:
$\lim_{(x,y)\to (1,2)}\frac{5{x}^{2}y}{{x}^{2}+{y}^{2}}$
SOLUTION:
2.0
:::

:::exercise {fs-id1167793629272} type= 
PROBLEM:
Show that the limit $\lim_{(x,y)\to (0,0)}\frac{5{x}^{2}y}{{x}^{2}+{y}^{2}}$ exists and is the same along the paths: $y\text{-axis}$ and $x\text{-axis,}$ and along $y=x.$
:::
For the following exercises, evaluate the limits at the indicated values of $x\;\text{and}\;y.$ If the limit does not exist, state this and explain why the limit does not exist.

:::exercise {fs-id1167793401408} type= 
PROBLEM:
$\lim_{(x,y)\to (0,0)}\frac{4{x}^{2}+10{y}^{2}+4}{4{x}^{2}-10{y}^{2}+6}$
SOLUTION:
$\frac{2}{3}$
:::

:::exercise {fs-id1167793510117} type= 
PROBLEM:
$\lim_{(x,y)\to (11,13)}\sqrt{\frac{1}{xy}}$
:::

:::exercise {fs-id1167793420492} type= 
PROBLEM:
$\lim_{(x,y)\to (0,1)}\frac{{y}^{2}\text{sin}\;x}{x}$
SOLUTION:
$1$
:::

:::exercise {fs-id1167793369356} type= 
PROBLEM:
$\lim_{(x,y)\to (0,0)}\text{sin}(\frac{{x}^{8}+{y}^{7}}{x-y+10})$
:::

:::exercise {fs-id1167794173094} type= 
PROBLEM:
$\lim_{(x,y)\to (\pi \text{/}4,1)}\frac{y\;\text{tan}\;x}{y+1}$
SOLUTION:
$\frac{1}{2}$
:::

:::exercise {fs-id1167793951216} type= 
PROBLEM:
$\lim_{(x,y)\to (0,\pi \text{/}4)}\frac{\text{sec}\;x+2}{3x-\text{tan}\;y}$
:::

:::exercise {fs-id1167793278147} type= 
PROBLEM:
$\lim_{(x,y)\to (2,5)}(\frac{1}{x}-\frac{5}{y})$
SOLUTION:
$-\frac{1}{2}$
:::

:::exercise {fs-id1167793514722} type= 
PROBLEM:
$\lim_{(x,y)\to (4,4)}x\;\text{ln}\;y$
:::

:::exercise {fs-id1167793465558} type= 
PROBLEM:
$\lim_{(x,y)\to (4,4)}{e}^{\text{−}{x}^{2}-{y}^{2}}$
SOLUTION:
${e}^{−32}$
:::

:::exercise {fs-id1167793640596} type= 
PROBLEM:
$\lim_{(x,y)\to (0,0)}\sqrt{9-{x}^{2}-{y}^{2}}$
:::

:::exercise {fs-id1167793442738} type= 
PROBLEM:
$\lim_{(x,y)\to (1,2)}({x}^{2}{y}^{3}-{x}^{3}{y}^{2}+3x+2y)$
SOLUTION:
$11.0$
:::

:::exercise {fs-id1167794222722} type= 
PROBLEM:
$\lim_{(x,y)\to (\pi ,\pi )}x\;\text{sin}(\frac{x+y}{4})$
:::

:::exercise {fs-id1167794284760} type= 
PROBLEM:
$\lim_{(x,y)\to (0,0)}\frac{xy+1}{{x}^{2}+{y}^{2}+1}$
SOLUTION:
$1.0$
:::

:::exercise {fs-id1167793639825} type= 
PROBLEM:
$\lim_{(x,y)\to (0,0)}\frac{{x}^{2}+{y}^{2}}{\sqrt{{x}^{2}+{y}^{2}+1}-1}$
:::

:::exercise {fs-id1167793279398} type= 
PROBLEM:
$\lim_{(x,y)\to (0,0)}\text{ln}({x}^{2}+{y}^{2})$
SOLUTION:
The limit does not exist because when $x$ and $y$ both approach zero, the function approaches $\text{ln}\;0,$ which is undefined (approaches negative infinity).
:::
For the following exercises, complete the statement.

:::exercise {fs-id1167793932216} type= 
PROBLEM:
A point $({x}_{0},{y}_{0})$ in a plane region $R$ is an interior point of $R$ if _________________.
:::

:::exercise {fs-id1167793586347} type= 
PROBLEM:
A point $({x}_{0},{y}_{0})$ in a plane region $R$ is called a boundary point of $R$ if ___________.
SOLUTION:
every open disk centered at $({x}_{0},{y}_{0})$ contains points inside $R$ and outside $R$
:::
For the following exercises, use algebraic techniques to evaluate the limit.

:::exercise {fs-id1167794327000} type= 
PROBLEM:
$\lim_{(x,y)\to (2,1)}\frac{x-y-1}{\sqrt{x-y}-1}$
:::

:::exercise {fs-id1167794176166} type= 
PROBLEM:
$\lim_{(x,y)\to (0,0)}\frac{{x}^{4}-4{y}^{4}}{{x}^{2}+2{y}^{2}}$
SOLUTION:
$0.0$
:::

:::exercise {fs-id1167793373582} type= 
PROBLEM:
$\lim_{(x,y)\to (0,0)}\frac{{x}^{3}-{y}^{3}}{x-y}$
:::

:::exercise {fs-id1167793543831} type= 
PROBLEM:
$\lim_{(x,y)\to (0,0)}\frac{{x}^{2}-xy}{\sqrt{x}-\sqrt{y}}$
SOLUTION:
$0.00$
:::
For the following exercises, evaluate the limits of the functions of three variables.

:::exercise {fs-id1167793566057} type= 
PROBLEM:
$\lim_{(x,y,z)\to (1,2,3)}\frac{x{z}^{2}-{y}^{2}z}{xyz-1}$
:::

:::exercise {fs-id1167793978789} type= 
PROBLEM:
$\lim_{(x,y,z)\to (0,0,0)}\frac{{x}^{2}-{y}^{2}-{z}^{2}}{{x}^{2}+{y}^{2}-{z}^{2}}$
SOLUTION:
The limit does not exist.
:::
For the following exercises, evaluate the limit of the function by determining the value the function approaches along the indicated paths. If the limit does not exist, explain why not.

:::exercise {fs-id1167793502022} type= 
PROBLEM:
$\lim_{(x,y)\to (0,0)}\frac{xy+{y}^{3}}{{x}^{2}+{y}^{2}}$
a. Along the $x\text{-axis}$ $(y=0)$
b. Along the $y\text{-axis}$ $(x=0)$
c. Along the path $y=2x$
:::

:::exercise {fs-id1167793514670} type= 
PROBLEM:
Evaluate $\lim_{(x,y)\to (0,0)}\frac{xy+{y}^{3}}{{x}^{2}+{y}^{2}}$ using the results of previous problem.
SOLUTION:
The limit does not exist. The function approaches two different values along different paths.
:::

:::exercise {fs-id1167793418283} type= 
PROBLEM:
$\lim_{(x,y)\to (0,0)}\frac{{x}^{2}y}{{x}^{4}+{y}^{2}}$
a. Along the *x*-axis $(y=0)$
b. Along the *y*-axis $(x=0)$
c. Along the path $y={x}^{2}$
:::

:::exercise {fs-id1167793617969} type= 
PROBLEM:
Evaluate $\lim_{(x,y)\to (0,0)}\frac{{x}^{2}y}{{x}^{4}+{y}^{2}}$ using the results of previous problem.
SOLUTION:
The limit does not exist because the function approaches two different values along the paths.
:::
Discuss the continuity of the following functions. Find the largest region in the $xy\text{-plane}$ in which the following functions are continuous.

:::exercise {fs-id1167793589383} type= 
PROBLEM:
$f(x,y)=\text{sin}(xy)$
:::

:::exercise {fs-id1167794155244} type= 
PROBLEM:
$f(x,y)=\text{ln}(x+y)$
SOLUTION:
The function $f$ is continuous in the region $y>\text{−}x.$
:::

:::exercise {fs-id1167793631485} type= 
PROBLEM:
$f(x,y)={e}^{3xy}$
:::

:::exercise {fs-id1167793219336} type= 
PROBLEM:
$f(x,y)=\frac{1}{xy}$
SOLUTION:
The function $f$ is continuous on the set $R={(x,y)|x≠0,y≠0}$
:::
For the following two exercises, determine the region in which the function is continuous. Explain your answer.

:::exercise {fs-id1167793560896} type= 
PROBLEM:
$f(x,y)=\frac{{x}^{2}y}{{x}^{2}+{y}^{2}}$
:::

:::exercise {fs-id1167793957313} type= 
PROBLEM:
$f(x,y)=\frac{\text{sin}({x}^{2}+{y}^{2})}{{x}^{2}+{y}^{2}}$
SOLUTION:
The function is discontinuous at $(0,0)$ since $(0,0)$ is not in the domain.
:::

:::exercise {fs-id1167793417293} type= 
PROBLEM:
Determine whether $f(x,y)$ is continuous at $(0,0)$. $f(x,y)=\{\begin{array}{ll}\frac{{x}^{2}y}{{x}^{2}+{y}^{2}} & \text{if}\;(x,y)≠(0,0) \\ 0 & \text{if}\;(x,y)=(0,0)\end{array}\}$
:::

:::exercise {fs-id1167793432455} type= 
PROBLEM:
Determine whether $g(x,y)=\frac{{x}^{2}-{y}^{2}}{{x}^{2}+{y}^{2}}$ is continuous at $(0,0).$
SOLUTION:
The function is discontinuous at $(0,0).$ The limit at $(0,0)$ fails to exist and $g(0,0)$ does not exist.
:::

:::exercise {fs-id1167793450534} type= 
PROBLEM:
Create a plot using graphing software to determine where the limit does not exist. Find where in the coordinate plane $f(x,y)=\frac{1}{{x}^{2}-y}$ is continuous.
:::

:::exercise {fs-id1167793589645} type= 
PROBLEM:
Determine the region of the $xy\text{-plane}$ in which the function $g(x,y)=\text{arctan}(\frac{x{y}^{2}}{x+y})$ is continuous. Use technology to support your conclusion.
SOLUTION:
Since the function $\text{arctan}\;x$ is continuous over $(\text{−}\infty ,\infty ),$ $g(x,y)=\text{arctan}(\frac{x{y}^{2}}{x+y})$ is continuous where $z=\frac{x{y}^{2}}{x+y}$ is continuous. The inner function $z$ is continuous on all points of the $xy\text{-plane}$ except where $y=\text{−}x.$ Thus, $g(x,y)=\text{arctan}(\frac{x{y}^{2}}{x+y})$ is continuous on all points of the coordinate plane *except* at points at which $y=\text{−}x.$
:::

:::exercise {fs-id1167793504957} type= 
PROBLEM:
Determine the region of the $xy\text{-plane}$ in which $f(x,y)=\text{ln}({x}^{2}+{y}^{2}-1)$ is continuous. Use technology to support your conclusion. (*Hint*: Choose the range of values for $x\;\text{and}\;y$ carefully!)
:::

:::exercise {fs-id1167793605306} type= 
PROBLEM:
At what points in space is $g(x,y,z)={x}^{2}+{y}^{2}-2{z}^{2}$ continuous?
SOLUTION:
All points $P(x,y,z)$ in space
:::

:::exercise {fs-id1167793607588} type= 
PROBLEM:
At what points in space is $g(x,y,z)=\frac{1}{{x}^{2}+{z}^{2}-1}$ continuous?
:::

:::exercise {fs-id1167793285307} type= 
PROBLEM:
Show that $\lim_{(x,y)\to (0,0)}\frac{1}{{x}^{2}+{y}^{2}}$ does not exist at $(0,0)$ by plotting the graph of the function.
SOLUTION:
The graph increases without bound as $x\;\text{and}\;y$ both approach zero.

> IMAGE {img:fs-id1167793627399} src=../../media/CNX_Calc_Figure_14_02_201.jpg
> alt: On xyz space, there is a shape drawn that decreases to 0 as x and y increase or decrease but that increases greatly closer to the origin. It increases to such an extent that the graph is cut off above z = 10, which coincides with a circle of radius 0.6 around (0, 0, 10).

:::

:::exercise {fs-id1167793627415} type= 
PROBLEM:
**[T]** Evaluate $\lim_{(x,y)\to (0,0)}\frac{\text{−}x{y}^{2}}{{x}^{2}+{y}^{4}}$ by plotting the function using a CAS. Determine analytically the limit along the path $x={y}^{2}.$
:::

:::exercise {fs-id1167794172816} type= 
PROBLEM:
**[T]**
a. Use a CAS to draw a contour map of $z=\sqrt{9-{x}^{2}-{y}^{2}}.$
b. What is the name of the geometric shape of the level curves?
c. Give the general equation of the level curves.
d. What is the maximum value of $z?$
e. What is the domain of the function?
f. What is the range of the function?
SOLUTION:
a.

> IMAGE {img:fs-id1167793937394} src=../../media/CNX_Calc_Figure_14_02_203.jpg
> alt: A series of five concentric circles, with radii 3, 2.75, 2.5, 2.2, and 1.75. The areas between the circles are colored, with the darkest color between the circles of radii 3 and 2.75.

b. The level curves are circles centered at $(0,0)$ with radius $9-c.$ c. ${x}^{2}+{y}^{2}=9-c$ d. $z=3$ e. $\{(x,y)\in {\mathbb{R}}^{2}|{x}^{2}+{y}^{2}\le 9\}$ f. $\{z|0\le z\le 3\}$
:::

:::exercise {fs-id1167793543617} type= 
PROBLEM:
*True or False*: If we evaluate $\lim_{(x,y)\to (0,0)}f(x)$ along several paths and each time the limit is $1,$ we can conclude that $\lim_{(x,y)\to (0,0)}f(x)=1.$
:::

:::exercise {fs-id1167793617809} type= 
PROBLEM:
Use polar coordinates to find $\lim_{(x,y)\to (0,0)}\frac{\text{sin}\sqrt{{x}^{2}+{y}^{2}}}{\sqrt{{x}^{2}+{y}^{2}}}.$ You can also find the limit using L’Hôpital’s rule.
SOLUTION:
$1.0$
:::

:::exercise {fs-id1167794067532} type= 
PROBLEM:
Use polar coordinates to find $\lim_{(x,y)\to (0,0)}\text{cos}({x}^{2}+{y}^{2}).$
:::

:::exercise {fs-id1167793927715} type= 
PROBLEM:
Discuss the continuity of $f(g(x,y))$ where $f(t)=1\text{/}t$ and $g(x,y)=2x-5y.$
SOLUTION:
$f(g(x,y))$ is continuous at all points $(x,y)$ that are not on the line $2x-5y=0.$
:::

:::exercise {fs-id1167793387117} type= 
PROBLEM:
Given $f(x,y)={x}^{2}-4y,$ find $\lim_{h\to 0}\frac{f(x+h,y)-f(x,y)}{h}.$
:::

:::exercise {fs-id1167793615277} type= 
PROBLEM:
Given $f(x,y)={x}^{2}-4y,$ find $\lim_{h\to 0}\frac{f(1+h,y)-f(1,y)}{h}.$
SOLUTION:
$2.0$
:::

## Glossary
- {def} **boundary point**: a point ${P}_{0}$ of $R$ is a boundary point if every $δ$ disk centered around ${P}_{0}$ contains points both inside and outside $R$
- {def} **closed set**: a set $S$ that contains all its boundary points
- {def} **connected set**: an open set $S$ that cannot be represented as the union of two or more disjoint, nonempty open subsets
- {def} **$δ$ disk**: an open disk of radius $δ$ centered at point $(a,b)$
- {def} **$δ$ ball**: all points in ${\mathbb{R}}^{3}$ lying at a distance of less than $δ$ from $({x}_{0},{y}_{0},{z}_{0})$
- {def} **interior point**: a point ${P}_{0}$ of $R$ is a boundary point if there is a $δ$ disk centered around ${P}_{0}$ contained completely in $R$
- {def} **open set**: a set $S$ that contains none of its boundary points
- {def} **region**: an open, connected, nonempty subset of ${\mathbb{R}}^{2}$

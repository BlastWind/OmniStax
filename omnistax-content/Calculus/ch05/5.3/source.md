# The Fundamental Theorem of Calculus

## Learning Objectives {section:learning-objectives}
- Describe the meaning of the Mean Value Theorem for Integrals.
- State the meaning of the Fundamental Theorem of Calculus, Part 1.
- Use the Fundamental Theorem of Calculus, Part 1, to evaluate derivatives of integrals.
- State the meaning of the Fundamental Theorem of Calculus, Part 2.
- Use the Fundamental Theorem of Calculus, Part 2, to evaluate definite integrals.
- Explain the relationship between differentiation and integration.

In the previous two sections, we looked at the definite integral and its relationship to the area under the curve of a function. Unfortunately, so far, the only tools we have available to calculate the value of a definite integral are geometric area formulas and limits of Riemann sums, and both approaches are extremely cumbersome. In this section we look at some more powerful and useful techniques for evaluating definite integrals.
These new techniques rely on the relationship between differentiation and integration. This relationship was discovered and explored by both Sir Isaac Newton and Gottfried Wilhelm Leibniz (among others) during the late 1600s and early 1700s, and it is codified in what we now call the {term:Fundamental Theorem of Calculus}, which has two parts that we examine in this section. Its very name indicates how central this theorem is to the entire development of calculus.

:::note [media-2] 
Isaac {index:Newton}’s contributions to mathematics and physics changed the way we look at the world. The relationships he discovered, codified as Newton’s laws and the law of universal gravitation, are still taught as foundational material in physics today, and his calculus has spawned entire fields of mathematics. To learn more, read a [brief biography](http://www.openstax.org/l/20_newtonbio) of Newton with multimedia clips.
:::
Before we get to this crucial theorem, however, let’s examine another important theorem, the Mean Value Theorem for Integrals, which is needed to prove the Fundamental Theorem of Calculus.

## The Mean Value Theorem for Integrals
The {term:Mean Value Theorem for Integrals} states that a continuous function on a closed interval takes on its average value at some point in that interval. The theorem guarantees that if $f(x)$ is continuous, a point *c* exists in an interval $[a,b]$ such that the value of the function at *c* is equal to the average value of $f(x)$ over $[a,b].$ We state this theorem mathematically with the help of the formula for the average value of a function that we presented at the end of the preceding section.

:::note [theorem] The Mean Value Theorem for Integrals
If $f(x)$ is continuous over an interval $[a,b],$ then there is at least one point $c\in [a,b]$ such that

$$ f(c)=\frac{1}{b-a}{\displaystyle \int_{a}^{b}f(x)dx}. $$  {eq:fs-id1170571654721}

This formula can also be stated as

${\displaystyle \int_{a}^{b}f(x)dx}=f(c)(b-a).$  {eq:fs-id1170572110045}

:::

### Proof
Since $f(x)$ is continuous on $[a,b],$ by the extreme value theorem (see [Maxima and Minima](module:m53611)), it assumes minimum and maximum values—*m* and *M*, respectively—on $[a,b].$ Then, for all *x* in $[a,b],$ we have $m\le f(x)\le M.$ Therefore, by the comparison theorem (see [The Definite Integral](module:m53631)), we have

$m(b-a)\le {\displaystyle \int_{a}^{b}f(x)dx}\le M(b-a).$  {eq:fs-id1170572209308}

Dividing by $b-a$ gives us

$m\le \frac{1}{b-a}{\displaystyle \int_{a}^{b}f(x)dx}\le M.$  {eq:fs-id1170572228715}

Since $\frac{1}{b-a}{\displaystyle \int_{a}^{b}f}(x)dx$ is a number between *m* and *M*, and since $f(x)$ is continuous and assumes the values *m* and *M* over $[a,b],$ by the Intermediate Value Theorem (see [Continuity](module:m53489)), there is a number *c* over $[a,b]$ such that

$f(c)=\frac{1}{b-a}{\displaystyle \int_{a}^{b}f(x)dx},$  {eq:fs-id1170572096606}

and the proof is complete.
□

:::example {ex:fs-id1170572141909} Finding the Average Value of a Function

:::exercise {fs-id1170572306320} type= 
PROBLEM:
Find the average value of the function $f(x)=8-2x$ over the interval $[0,4]$ and find *c* such that $f(c)$ equals the average value of the function over $[0,4].$
SOLUTION:
The formula states the mean value of $f(x)$ is given by

$\frac{1}{4-0}{\displaystyle \int_{0}^{4}(8-2x)dx}.$  {eq:fs-id1170571553890}

We can see in [ref:CNX_Calc_Figure_05_03_001] that the function represents a straight line and forms a right triangle bounded by the *x*- and *y*-axes. The area of the triangle is $A=\frac{1}{2}(\text{base})(\text{height}).$ We have

$A=\frac{1}{2}(4)(8)=16.$  {eq:fs-id1170572375674}

The average value is found by multiplying the area by $1\text{/}(4-0).$ Thus, the average value of the function is

$\frac{1}{4}(16)=4.$  {eq:fs-id1170572094543}

Set the average value equal to $f(c)$ and solve for *c*.

$\begin{array}{lll}8-2c & = & 4 \\ c & = & 2\end{array}$  {eq:fs-id1170572558241}

At $c=2,f(2)=4.$

> FIGURE {fig:CNX_Calc_Figure_05_03_001} src=../../media/CNX_Calc_Figure_05_03_002.jpg
> alt: The graph of a decreasing line f(x) = 8 – 2x over [-1,4.5]. The line y=4 is drawn over [0,4], which intersects with the line at (2,4). A line is drawn down from (2,4) to the x axis and from (4,4) to the y axis. The area under y=4 is shaded.
> caption: By the Mean Value Theorem, the continuous function $f(x)$ takes on its average value at *c* at least once over a closed interval.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572481629} type= 
PROBLEM:
Find the average value of the function $f(x)=\frac{x}{2}$ over the interval $[0,6]$ and find *c* such that $f(c)$ equals the average value of the function over $[0,6].$
SOLUTION:
$\text{Average value}=1.5;c=3$
COMMENTARY: Hint
Use the procedures from [ref:fs-id1170572141909] to solve the problem
:::
:::

:::example {ex:fs-id1170572451873} Finding the Point Where a Function Takes on Its Average Value

:::exercise {fs-id1170571654400} type= 
PROBLEM:
Given ${\displaystyle \int_{0}^{3}{x}^{2}dx}=9,$ find *c* such that $f(c)$ equals the average value of $f(x)={x}^{2}$ over $[0,3].$
SOLUTION:
We are looking for the value of *c* such that

$f(c)=\frac{1}{3-0}{\displaystyle \int_{0}^{3}{x}^{2}dx}=\frac{1}{3}(9)=3.$  {eq:fs-id1170572480974}

Replacing $f(c)$ with *c*<sup>2</sup>, we have

$\begin{array}{lll}{c}^{2} & = & 3 \\ c & = & \text{±}\sqrt{3}.\end{array}$  {eq:fs-id1170572167258}

Since $\text{−}\sqrt{3}$ is outside the interval, take only the positive value. Thus, $c=\sqrt{3}$ ([ref:CNX_Calc_Figure_05_03_002]).

> FIGURE {fig:CNX_Calc_Figure_05_03_002} src=../../media/CNX_Calc_Figure_05_03_003.jpg
> alt: A graph of the parabola f(x) = x^2 over [-2, 3]. The area under the curve and above the x axis is shaded, and the point (sqrt(3), 3) is marked.
> caption: Over the interval $[0,3],$ the function $f(x)={x}^{2}$ takes on its average value at $c=\sqrt{3}.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572176911} type= 
PROBLEM:
Given ${\displaystyle \int_{0}^{3}(2{x}^{2}-1)dx}=15,$ find *c* such that $f(c)$ equals the average value of $f(x)=2{x}^{2}-1$ over $[0,3].$
SOLUTION:
$c=\sqrt{3}$
COMMENTARY: Hint
Use the procedures from [ref:fs-id1170572451873] to solve the problem.
:::
:::

## Fundamental Theorem of Calculus Part 1: Integrals and Antiderivatives
As mentioned earlier, the Fundamental Theorem of Calculus is an extremely powerful theorem that establishes the relationship between differentiation and integration, and gives us a way to evaluate definite integrals without using Riemann sums or calculating areas. The theorem is comprised of two parts, the first of which, the {term:Fundamental Theorem of Calculus, Part 1}, is stated here. Part 1 establishes the relationship between differentiation and integration.

:::note [theorem] Fundamental Theorem of Calculus, Part 1
If $f(x)$ is continuous over an interval $[a,b],$ and the function $F(x)$ is defined by

$$ F(x)={\displaystyle \int_{a}^{x}f(t)dt}, $$  {eq:fs-id1170572552076}

then ${F}^{'}\text{(}x)=f(x)$ over $(a,b).$
:::
Before we delve into the proof, a couple of subtleties are worth mentioning here. First, a comment on the notation. Note that we have defined a function, $F(x),$ as the definite integral of another function, $f(t),$ from the point *a* to the point *x*. At first glance, this is confusing, because we have said several times that a definite integral is a number, and here it looks like it’s a function. The key here is to notice that for any particular value of *x*, the definite integral is a number. So the function $F(x)$ returns a number (the value of the definite integral) for each value of *x*.
Second, it is worth commenting on some of the key implications of this theorem. There is a reason it is called the *Fundamental* Theorem of Calculus. Not only does it establish a relationship between integration and differentiation, but also it guarantees that any integrable function has an antiderivative.

### Proof
Applying the definition of the derivative, we have

$\begin{array}{ll} \\ \\ \\ {F}^{'}\text{(}x) & =\lim_{h\to 0}\;\frac{F(x+h)-F(x)}{h} \\ \\ & =\lim_{h\to 0}\;\frac{1}{h}[{\displaystyle \int_{a}^{x+h}f(t)dt}-{\displaystyle \int_{a}^{x}f(t)dt}] \\ & =\lim_{h\to 0}\;\frac{1}{h}[{\displaystyle \int_{a}^{x+h}f(t)dt}+{\displaystyle \int_{x}^{a}f(t)dt}] \\ & =\lim_{h\to 0}\;\frac{1}{h}{\displaystyle \int_{x}^{x+h}f(t)dt}.\end{array}$  {eq:fs-id1170572337215}

Looking carefully at this last expression, we see $\frac{1}{h}{\displaystyle \int_{x}^{x+h}f(t)dt}$ is just the average value of the function $f(x)$ over the interval $[x,x+h].$ Therefore, by [ref:fs-id1170572224851], there is some number *c* in $[x,x+h]$ such that

$\frac{1}{h}{\displaystyle \int_{x}^{x+h}f(x)dx}=f(c).$  {eq:fs-id1170571566095}

In addition, since *c* is between *x* and *x* + *h*, *c* approaches *x* as *h* approaches zero. Also, since $f(x)$ is continuous, we have $\lim_{h\to 0}f(c)=\lim_{c\to x}f(c)=f(x).$ Putting all these pieces together, we have

$\begin{array}{ll} \\ {F}^{'}\text{(}x) & =\lim_{h\to 0}\;\frac{1}{h}{\displaystyle \int_{x}^{x+h}f(x)dx} \\ & =\lim_{h\to 0}f(c) \\ & =f(x),\end{array}$  {eq:fs-id1170572481212}

and the proof is complete.
□

:::example {ex:fs-id1170572601345} Finding a Derivative with the Fundamental Theorem of Calculus

:::exercise {fs-id1170572601347} type= 
PROBLEM:
Use the [ref:fs-id1170571704350] to find the derivative of

$g(x)={\displaystyle \int_{1}^{x}\frac{1}{{t}^{3}+1}dt.}$  {eq:fs-id1170572492494}

SOLUTION:
According to the Fundamental Theorem of Calculus, the derivative is given by

${g}^{'}\text{(}x)=\frac{1}{{x}^{3}+1}.$  {eq:fs-id1170572346820}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572099780} type= 
PROBLEM:
Use the Fundamental Theorem of Calculus, Part 1 to find the derivative of $g(r)={\displaystyle \int_{0}^{r}\sqrt{{x}^{2}+4}dx}.$
SOLUTION:
${g}^{'}\text{(}r)=\sqrt{{r}^{2}+4}$
COMMENTARY: Hint
Follow the procedures from [ref:fs-id1170572601345] to solve the problem.
:::
:::

:::example {ex:fs-id1170572134770} Using the Fundamental Theorem and the Chain Rule to Calculate Derivatives

:::exercise {fs-id1170572512075} type= 
PROBLEM:
Let $F(x)={\displaystyle \int_{1}^{\sqrt{x}}\text{sin}\;tdt}.$ Find ${F}^{'}\text{(}x).$
SOLUTION:
Letting $u(x)=\sqrt{x},$ we have $F(x)={\displaystyle \int_{1}^{u(x)}\text{sin}\;tdt}.$ Thus, by the Fundamental Theorem of Calculus and the chain rule,

$\begin{array}{ll} \\ {F}^{'}\text{(}x) & =\text{sin}(u(x))\frac{du}{dx} \\ & =\text{sin}(u(x))\cdot (\frac{1}{2}{x}^{−1\text{/}2}) \\ & =\frac{\text{sin}\sqrt{x}}{2\sqrt{x}}.\end{array}$  {eq:fs-id1170572452450}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571710609} type= 
PROBLEM:
Let $F(x)={\displaystyle \int_{1}^{{x}^{3}}\text{cos}\;tdt}.$ Find ${F}^{'}\text{(}x).$
SOLUTION:
${F}^{'}\text{(}x)=3{x}^{2}\text{cos}{x}^{3}$
COMMENTARY: Hint
Use the chain rule to solve the problem.
:::
:::

:::example {ex:fs-id1170572228878} Using the Fundamental Theorem of Calculus with Two Variable Limits of Integration

:::exercise {fs-id1170572228880} type= 
PROBLEM:
Let $F(x)={\displaystyle \int_{x}^{2x}{t}^{3}dt}.$ Find ${F}^{'}\text{(}x).$
SOLUTION:
We have $F(x)={\displaystyle \int_{x}^{2x}{t}^{3}dt}.$ Both limits of integration are variable, so we need to split this into two integrals. We get

$\begin{array}{ll} \\ F(x) & ={\displaystyle \int_{x}^{2x}{t}^{3}dt} \\ & ={\displaystyle \int_{x}^{0}{t}^{3}dt}+{\displaystyle \int_{0}^{2x}{t}^{3}dt} \\ & =\text{−}{\displaystyle \int_{0}^{x}{t}^{3}dt}+{\displaystyle \int_{0}^{2x}{t}^{3}dt}.\end{array}$  {eq:fs-id1170572141627}

Differentiating the first term, we obtain

$\frac{d}{dx}[\text{−}{\displaystyle \int_{0}^{x}{t}^{3}dt}]=\text{−}{x}^{3}.$  {eq:fs-id1170572245919}

Differentiating the second term, we first let $u(x)=2x.$ Then,

$\begin{array}{ll} \\ \frac{d}{dx}[{\displaystyle \int_{0}^{2x}{t}^{3}dt}] & =\frac{d}{dx}[{\displaystyle \int_{0}^{u(x)}{t}^{3}dt}] \\ & ={(u(x))}^{3}\frac{du}{dx} \\ & ={(2x)}^{3}\cdot 2 \\ & =16{x}^{3}.\end{array}$  {eq:fs-id1170572168674}

Thus,

$\begin{array}{ll} \\ \\ {F}^{'}\text{(}x) & =\frac{d}{dx}[\text{−}{\displaystyle \int_{0}^{x}{t}^{3}dt}]+\frac{d}{dx}[{\displaystyle \int_{0}^{2x}{t}^{3}dt}] \\ & =\text{−}{x}^{3}+16{x}^{3} \\ & =15{x}^{3}.\end{array}$  {eq:fs-id1170572336986}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572168834} type= 
PROBLEM:
Let $F(x)={\displaystyle \int_{x}^{{x}^{2}}\text{cos}\;tdt}.$ Find ${F}^{'}\text{(}x).$
SOLUTION:
${F}^{'}\text{(}x)=2x\;\text{cos}{x}^{2}-\text{cos}\;x$
COMMENTARY: Hint
Use the procedures from [ref:fs-id1170572228878] to solve the problem.
:::
:::

## Fundamental Theorem of Calculus, Part 2: The Evaluation Theorem
The Fundamental Theorem of Calculus, Part 2, is perhaps the most important theorem in calculus. After tireless efforts by mathematicians for approximately 500 years, new techniques emerged that provided scientists with the necessary tools to explain many phenomena. Using calculus, astronomers could finally determine distances in space and map planetary orbits. Everyday financial problems such as calculating marginal costs or predicting total profit could now be handled with simplicity and accuracy. Engineers could calculate the bending strength of materials or the three-dimensional motion of objects. Our view of the world was forever changed with calculus.
After finding approximate areas by adding the areas of *n* rectangles, the application of this theorem is straightforward by comparison. It almost seems too simple that the area of an entire curved region can be calculated by just evaluating an antiderivative at the first and last endpoints of an interval.

:::note [theorem] The Fundamental Theorem of Calculus, Part 2
If *f* is continuous over the interval $[a,b]$ and $F(x)$ is any antiderivative of $f(x),$ then

$$ {\displaystyle \int_{a}^{b}f(x)dx}=F(b)-F(a). $$  {eq:fs-id1170572230004}

:::
We often see the notation ${F(x)|}_{a}^{b}$ to denote the expression $F(b)-F(a).$ We use this vertical bar and associated limits *a* and *b* to indicate that we should evaluate the function $F(x)$ at the upper limit (in this case, *b*), and subtract the value of the function $F(x)$ evaluated at the lower limit (in this case, *a*).
The {term:Fundamental Theorem of Calculus, Part 2} (also known as the {term:evaluation theorem}) states that if we can find an antiderivative for the integrand, then we can evaluate the definite integral by evaluating the antiderivative at the endpoints of the interval and subtracting.

### Proof
Let $P=\{{x}_{i}\},i=0,1\text{,…,}\;n$ be a regular partition of $[a,b].$ Then, we can write

$\begin{array}{ll}F(b)-F(a) & =F({x}_{n})-F({x}_{0}) \\ & =[F({x}_{n})-F({x}_{n-1})]+[F({x}_{n-1})-F({x}_{n-2})]+\text{…}+[F({x}_{1})-F({x}_{0})] \\ \\ & =\overset{n}{\underset{i=1}{{\displaystyle \sum}}}[F({x}_{i})-F({x}_{i-1})].\end{array}$  {eq:fs-id1170572435583}

Now, we know *F* is an antiderivative of *f* over $[a,b],$ so by the Mean Value Theorem (see [The Mean Value Theorem](module:m53612)) for $i=0,1\text{,…,}\;n$ we can find ${c}_{i}$ in $[{x}_{i-1},{x}_{i}]$ such that

$F({x}_{i})-F({x}_{i-1})={F}^{'}\text{(}{c}_{i})({x}_{i}-{x}_{i-1})=f({c}_{i})\text{Δ}x.$  {eq:fs-id1170572551873}

Then, substituting into the previous equation, we have

$F(b)-F(a)={\displaystyle \sum_{i=1}^{n} f({c}_{i})\text{Δ}x}.$  {eq:fs-id1170571699036}

Taking the limit of both sides as $n\to \infty ,$ we obtain

$\begin{array}{ll} \\ \\ F(b)-F(a) & =\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} f({c}_{i})\text{Δ}x} \\ & ={\displaystyle \int_{a}^{b}f(x)dx}.\end{array}$  {eq:fs-id1170572548857}

□

:::example {ex:fs-id1170571678911} Evaluating an Integral with the Fundamental Theorem of Calculus

:::exercise {fs-id1170571678913} type= 
PROBLEM:
Use [ref:fs-id1170571660076] to evaluate

${\displaystyle \int_{−2}^{2}({t}^{2}-4)dt}.$  {eq:fs-id1170572330418}

SOLUTION:
Recall the power rule for [Antiderivatives](module:m53621):

$\text{If}\;y={x}^{n},{\displaystyle \int {x}^{n}dx}=\frac{{x}^{n+1}}{n+1}+C.$  {eq:fs-id1170572547894}

Use this rule to find the antiderivative of the function and then apply the theorem. We have

$\begin{array}{ll}{\displaystyle \int_{−2}^{2}({t}^{2}-4)dt} & =\frac{{t}^{3}}{3}-{4t|}_{−2}^{2} \\ \\ \\ & =[\frac{{(2)}^{3}}{3}-4(2)]-[\frac{{(−2)}^{3}}{3}-4(−2)] \\ & =(\frac{8}{3}-8)-(-\frac{8}{3}+8) \\ & =\frac{8}{3}-8+\frac{8}{3}-8 \\ & =\frac{16}{3}-16 \\ & =-\frac{32}{3}.\end{array}$  {eq:fs-id1170571719649}

COMMENTARY: Analysis
Notice that we did not include the “+ *C*” term when we wrote the antiderivative. The reason is that, according to the Fundamental Theorem of Calculus, Part 2, *any* antiderivative works. So, for convenience, we chose the antiderivative with $C=0.$ If we had chosen another antiderivative, the constant term would have canceled out. This always happens when evaluating a definite integral.
The region of the area we just calculated is depicted in [ref:CNX_Calc_Figure_05_03_003]. Note that the region between the curve and the *x*-axis is all below the *x*-axis. Area is always positive, but a definite integral can still produce a negative number (a net signed area). For example, if this were a profit function, a negative number indicates the company is operating at a loss over the given interval.

> FIGURE {fig:CNX_Calc_Figure_05_03_003} src=../../media/CNX_Calc_Figure_05_03_004.jpg
> alt: The graph of the parabola f(t) = t^2 – 4 over [-4, 4]. The area above the curve and below the x axis over [-2, 2] is shaded.
> caption: The evaluation of a definite integral can produce a negative value, even though area is always positive.

:::
:::

:::example {ex:fs-id1170571561288} Evaluating a Definite Integral Using the Fundamental Theorem of Calculus, Part 2

:::exercise {fs-id1170571561290} type= 
PROBLEM:
Evaluate the following integral using the Fundamental Theorem of Calculus, Part 2:

${\displaystyle \int_{1}^{9}\frac{x-1}{\sqrt{x}}}dx.$  {eq:fs-id1170572607955}

SOLUTION:
First, eliminate the radical by rewriting the integral using rational exponents. Then, separate the numerator terms by writing each one over the denominator:

${\displaystyle \int_{1}^{9}\frac{x-1}{{x}^{1\text{/}2}}dx}={\displaystyle \int_{1}^{9}(\frac{x}{{x}^{1\text{/}2}}-\frac{1}{{x}^{1\text{/}2}})dx}\text{.}$  {eq:fs-id1170572130394}

Use the properties of exponents to simplify:

${\displaystyle \int_{1}^{9}(\frac{x}{{x}^{1\text{/}2}}-\frac{1}{{x}^{1\text{/}2}})dx}={\displaystyle \int_{1}^{9}({x}^{1\text{/}2}-{x}^{−1\text{/}2})dx}\text{.}$  {eq:fs-id1170572233529}

Now, integrate using the power rule:

$\begin{array}{ll} \\ \\ {\displaystyle \int_{1}^{9}({x}^{1\text{/}2}-{x}^{-1\text{/}2})dx} & ={(\frac{{x}^{3\text{/}2}}{\frac{3}{2}}-\frac{{x}^{1\text{/}2}}{\frac{1}{2}})|}_{1}^{9} \\ \\ & =[\frac{{(9)}^{3\text{/}2}}{\frac{3}{2}}-\frac{{(9)}^{1\text{/}2}}{\frac{1}{2}}]-[\frac{{(1)}^{3\text{/}2}}{\frac{3}{2}}-\frac{{(1)}^{1\text{/}2}}{\frac{1}{2}}] \\ & =[\frac{2}{3}(27)-2(3)]-[\frac{2}{3}(1)-2(1)] \\ & =18-6-\frac{2}{3}+2 \\ & =\frac{40}{3}.\end{array}$  {eq:fs-id1170572563045}

See [ref:CNX_Calc_Figure_05_03_004].

> FIGURE {fig:CNX_Calc_Figure_05_03_004} src=../../media/CNX_Calc_Figure_05_03_005.jpg
> alt: The graph of the function f(x) = (x-1) / sqrt(x) over [0,9]. The area under the graph over [1,9] is shaded.
> caption: The area under the curve from $x=1$ to $x=9$ can be calculated by evaluating a definite integral.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571609445} type= 
PROBLEM:
Use [ref:fs-id1170571660076] to evaluate ${\displaystyle \int_{1}^{2}{x}^{−4}dx}.$
SOLUTION:
$\frac{7}{24}$
COMMENTARY: Hint
Use the power rule.
:::
:::

:::example {ex:fs-id1170571597325} A Roller-Skating Race

:::exercise {fs-id1170571597327} type= 
PROBLEM:
James and Kathy are racing on roller skates. They race along a long, straight track, and whoever has gone the farthest after 5 sec wins a prize. If James can skate at a velocity of $f(t)=5+2t$ ft/sec and Kathy can skate at a velocity of $g(t)=10+\text{cos}(\frac{\pi}{2}t)$ ft/sec, who is going to win the race?
SOLUTION:
We need to integrate both functions over the interval $[0,5]$ and see which value is bigger. For James, we want to calculate

${\displaystyle \int_{0}^{5}(5+2t)dt}.$  {eq:fs-id1170572332632}

Using the power rule, we have

$\begin{array}{ll}{\displaystyle \int_{0}^{5}(5+2t)dt} & ={(5t+{t}^{2})|}_{0}^{5} \\ & =(25+25)=50.\end{array}$  {eq:fs-id1170571758994}

Thus, James has skated 50 ft after 5 sec. Turning now to Kathy, we want to calculate

${\displaystyle \int_{0}^{5}10}+\text{cos}(\frac{\pi}{2}t)dt.$  {eq:fs-id1170571772589}

We know $\text{sin}\;t$ is an antiderivative of $\text{cos}\;t,$ so it is reasonable to expect that an antiderivative of $\text{cos}(\frac{\pi}{2}t)$ would involve $\text{sin}(\frac{\pi}{2}t).$ However, when we differentiate $\text{sin}(\frac{\pi}{2}t),$ we get $\frac{\pi}{2}\text{cos}(\frac{\pi}{2}t)$ as a result of the chain rule, so we have to account for this additional coefficient when we integrate. We obtain

$\begin{array}{ll}{\displaystyle \int_{0}^{5}10}+\text{cos}(\frac{\pi}{2}t)dt & ={(10t+\frac{2}{\pi}\text{sin}(\frac{\pi}{2}t))|}_{0}^{5} \\ & =(50+\frac{2}{\pi})-(0-\frac{2}{\pi}\text{sin}\;0) \\ & \approx 50.6.\end{array}$  {eq:fs-id1170571599308}

Kathy has skated approximately 50.6 ft after 5 sec. Kathy wins, but not by much!
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572368415} type= 
PROBLEM:
Suppose James and Kathy have a rematch, but this time the official stops the contest after only 3 sec. Does this change the outcome?
SOLUTION:
Kathy still wins, but by a much larger margin: James skates 24 ft in 3 sec, but Kathy skates 29.3634 ft in 3 sec.
COMMENTARY: Hint
Change the limits of integration from those in [ref:fs-id1170571597325].
:::
:::

:::note [project] A Parachutist in Free Fall

> FIGURE {fig:CNX_Calc_Figure_05_03_005} src=../../media/CNX_Calc_Figure_05_03_006.jpg
> alt: Two skydivers free falling in the sky.
> caption: Skydivers can adjust the velocity of their dive by changing the position of their body during the free fall. (credit: Jeremy T. Lock)

Julie is an avid {index:skydiver}. She has more than 300 jumps under her belt and has mastered the art of making adjustments to her body position in the air to control how fast she falls. If she arches her back and points her belly toward the ground, she reaches a terminal velocity of approximately 120 mph (176 ft/sec). If, instead, she orients her body with her head straight down, she falls faster, reaching a terminal velocity of 150 mph (220 ft/sec).
Since Julie will be moving (falling) in a downward direction, we assume the downward direction is positive to simplify our calculations. Julie executes her jumps from an altitude of 12,500 ft. After she exits the aircraft, she immediately starts falling at a velocity given by $v(t)=32t.$ She continues to accelerate according to this velocity function until she reaches terminal velocity. After she reaches terminal velocity, her speed remains constant until she pulls her ripcord and slows down to land.
On her first jump of the day, Julie orients herself in the slower “belly down” position (terminal velocity is 176 ft/sec). Using this information, answer the following questions.
1. How long after she exits the aircraft does Julie reach terminal velocity?
2. Based on your answer to question 1, set up an expression involving one or more integrals that represents the distance Julie falls after 30 sec.
3. If Julie pulls her ripcord at an altitude of 3000 ft, how long does she spend in a free fall?
4. Julie pulls her ripcord at 3000 ft. It takes 5 sec for her parachute to open completely and for her to slow down, during which time she falls another 400 ft. After her canopy is fully open, her speed is reduced to 16 ft/sec. Find the total time Julie spends in the air, from the time she leaves the airplane until the time her feet touch the ground.

On Julie’s second jump of the day, she decides she wants to fall a little faster and orients herself in the “head down” position. Her terminal velocity in this position is 220 ft/sec. Answer these questions based on this velocity:
5. How long does it take Julie to reach terminal velocity in this case?
6. Before pulling her ripcord, Julie reorients her body in the “belly down” position so she is not moving quite as fast when her parachute opens. If she begins this maneuver at an altitude of 4000 ft, how long does she spend in a free fall before beginning the reorientation?

Some jumpers wear “{index:wingsuits}” (see [ref:CNX_Calc_Figure_05_03_006]). These suits have fabric panels between the arms and legs and allow the wearer to glide around in a free fall, much like a flying squirrel. (Indeed, the suits are sometimes called “flying squirrel suits.”) When wearing these suits, terminal velocity can be reduced to about 30 mph (44 ft/sec), allowing the wearers a much longer time in the air. Wingsuit flyers still use parachutes to land; although the vertical velocities are within the margin of safety, horizontal velocities can exceed 70 mph, much too fast to land safely.

> FIGURE {fig:CNX_Calc_Figure_05_03_006} src=../../media/CNX_Calc_Figure_05_03_007.jpg
> alt: A person falling in a wingsuit, which works to reduce the vertical velocity of a skydiver’s fall.
> caption: The fabric panels on the arms and legs of a wingsuit work to reduce the vertical velocity of a skydiver’s fall. (credit: Richard Schneider)

Answer the following question based on the velocity in a wingsuit.
1. If Julie dons a wingsuit before her third jump of the day, and she pulls her ripcord at an altitude of 3000 ft, how long does she get to spend gliding around in the air?
:::

## Key Concepts {section:key-concepts}
- The Mean Value Theorem for Integrals states that for a continuous function over a closed interval, there is a value *c* such that $f(c)$ equals the average value of the function. See [ref:fs-id1170572224851].
- The Fundamental Theorem of Calculus, Part 1 shows the relationship between the derivative and the integral. See [ref:fs-id1170571704350].
- The Fundamental Theorem of Calculus, Part 2 is a formula for evaluating a definite integral in terms of an antiderivative of its integrand. The total area under a curve can be found using this formula. See [ref:fs-id1170571660076].

## Key Equations {section:key-equations}

> TABLE {tab:eip-499} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Mean Value Theorem for Integrals** | If $f(x)$ is continuous over an interval $[a,b],$ then there is at least one point $c\in [a,b]$ such that $f(c)=\frac{1}{b-a}{\displaystyle \int_{a}^{b}f(x)dx}.$ |
| **Fundamental Theorem of Calculus Part 1** | If $f(x)$ is continuous over an interval $[a,b],$ and the function $F(x)$ is defined by $F(x)={\displaystyle \int_{a}^{x}f(t)dt},$ then ${F}^{'}\text{(}x)=f(x).$ |
| **Fundamental Theorem of Calculus Part 2** | If *f* is continuous over the interval $[a,b]$ and $F(x)$ is any antiderivative of $f(x),$ then ${\displaystyle \int_{a}^{b}f(x)dx=F(b)-F(a)}.$ |

##  {section:section-exercises}

:::exercise {fs-id1170572338456} type= 
PROBLEM:
Consider two athletes running at variable speeds ${v}_{1}(t)$ and ${v}_{2}(t).$ The runners start and finish a race at exactly the same time. Explain why the two runners must be going the same speed at some point.
:::

:::exercise {fs-id1170572420068} type= 
PROBLEM:
Two mountain climbers start their climb at base camp, taking two different routes, one steeper than the other, and arrive at the peak at exactly the same time. Is it necessarily true that, at some point, both climbers increased in altitude at the same rate?
SOLUTION:
Yes. It is implied by the Mean Value Theorem for Integrals.
:::

:::exercise {fs-id1170572420086} type= 
PROBLEM:
To get on a certain toll road a driver has to take a card that lists the mile entrance point. The card also has a timestamp. When going to pay the toll at the exit, the driver is surprised to receive a speeding ticket along with the toll. Explain how this can happen.
:::

:::exercise {fs-id1170572420106} type= 
PROBLEM:
Set $F(x)={\displaystyle \int_{1}^{x}(1-t)dt}.$ Find ${F}^{'}\text{(}2)$ and the average value of ${F}^{\text{′}}$ over $[1,2].$
SOLUTION:
${F}^{'}\text{(}2)=−1;$ average value of ${F}^{\text{′}}$ over $[1,2]$ is $−1\text{/}2.$
:::
In the following exercises, use the Fundamental Theorem of Calculus, Part 1, to find each derivative.

:::exercise {fs-id1170572379507} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{1}^{x}{e}^{\text{−}{t}^{2}}dt}$
:::

:::exercise {fs-id1170572368653} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{1}^{x}{e}^{\text{cos}\;t}dt}$
SOLUTION:
${e}^{\text{cos}\;x}$
:::

:::exercise {fs-id1170571599636} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{3}^{x}\sqrt{9-{y}^{2}}dy}$
:::

:::exercise {fs-id1170572551781} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{3}^{x}\frac{ds}{\sqrt{16-{s}^{2}}}}$
SOLUTION:
$\frac{1}{\sqrt{16-{x}^{2}}}$
:::

:::exercise {fs-id1170572376458} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{x}^{2x}tdt}$
:::

:::exercise {fs-id1170572376509} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{0}^{\sqrt{x}}tdt}$
SOLUTION:
$\sqrt{x}\frac{d}{dx}\sqrt{x}=\frac{1}{2}$
:::

:::exercise {fs-id1170572163891} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{0}^{\text{sin}\;x}\sqrt{1-{t}^{2}}dt}$
:::

:::exercise {fs-id1170571599727} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{\text{cos}\;x}^{1}\sqrt{1-{t}^{2}}dt}$
SOLUTION:
$\text{−}\sqrt{1-{\text{cos}}^{2}x}\frac{d}{dx}\text{cos}\;x=|\text{sin}\;x|\text{sin}\;x$
:::

:::exercise {fs-id1170572217460} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{1}^{\sqrt{x}}\frac{{t}^{2}}{1+{t}^{4}}dt}$
:::

:::exercise {fs-id1170572621645} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{1}^{{x}^{2}}\frac{\sqrt{t}}{1+t}dt}$
SOLUTION:
$2x\frac{|x|}{1+{x}^{2}}$
:::

:::exercise {fs-id1170571812234} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{0}^{\text{ln}\;x}{e}^{t}dt}$
:::

:::exercise {fs-id1170571547591} type= 
PROBLEM:
$\frac{d}{dx}{\displaystyle \int_{1}^{{e}^{x}}\text{ln}{u}^{2}du}$
SOLUTION:
$\text{ln}({e}^{2x})\frac{d}{dx}{e}^{x}=2x{e}^{x}$
:::

:::exercise {fs-id1170571711375} type= 
PROBLEM:
The graph of $y={\displaystyle \int_{0}^{x}f(t)dt,}$ where *f* is a piecewise constant function, is shown here.

> IMAGE {img:fs-id1170571807200} src=../../media/CNX_Calc_Figure_05_03_202.jpg
> alt: A function with linear segments which goes through the points (0, 0), (1, 3), (2, 2), (3, 0), (4, 3), (5, 3), and (6, 2). The area under the function and above the x axis is shaded.

a. Over which intervals is *f* positive? Over which intervals is it negative? Over which intervals, if any, is it equal to zero?
b. What are the maximum and minimum values of *f*?
c. What is the average value of *f*?
:::

:::exercise {fs-id1170572622509} type= 
PROBLEM:
The graph of $y={\displaystyle \int_{0}^{x}f(t)dt,}$ where *f* is a piecewise constant function, is shown here.

> IMAGE {img:fs-id1170572337817} src=../../media/CNX_Calc_Figure_05_03_203.jpg
> alt: A graph of a function with linear segments that goes through the points (0, 0), (1, -1), (2, 1), (3, 1), (4, -2), (5, -2), and (6, 0). The area over the function but under the x axis over the interval [0, 1.5] and [3.25, 6] is shaded. The area under the function but over the x axis over the interval [1.5, 3.25] is shaded.

a. Over which intervals is *f* positive? Over which intervals is it negative? Over which intervals, if any, is it equal to zero?
b. What are the maximum and minimum values of *f*?
c. What is the average value of *f*?
SOLUTION:
a. *f* is positive over $(1,2)$ and $(5,6),$ negative over $(0,1)$ and $(3,4),$ and zero over $(2,3)$ and $(4,5).$ b. The maximum value is 2 and the minimum is −3. c. The average value is 0.
:::

:::exercise {fs-id1170572274790} type= 
PROBLEM:
The graph of $y={\displaystyle \int_{0}^{x}ℓ(t)dt,}$ where *ℓ* is a piecewise linear function, is shown here.

> IMAGE {img:fs-id1170571733861} src=../../media/CNX_Calc_Figure_05_03_204.jpg
> alt: A graph of a function which goes through the points (0, 0), (1, -1), (2, 1), (3, 3), (4, 3.5), (5, 4), and (6, 2). The area over the function and under the x axis over [0, 1.8] is shaded, and the area under the function and over the x axis is shaded.

a. Over which intervals is *ℓ* positive? Over which intervals is it negative? Over which, if any, is it zero?
b. Over which intervals is *ℓ* increasing? Over which is it decreasing? Over which, if any, is it constant?
c. What is the average value of *ℓ*?
:::

:::exercise {fs-id1170572233935} type= 
PROBLEM:
The graph of $y={\displaystyle \int_{0}^{x}ℓ(t)dt,}$ where *ℓ* is a piecewise linear function, is shown here.

> IMAGE {img:fs-id1170572307236} src=../../media/CNX_Calc_Figure_05_03_205.jpg
> alt: A graph of a function that goes through the points (0, 0), (1, 1), (2, 0), (3, -1), (4.5, 0), (5, 1), and (6, 2). The area under the function and over the x axis over the intervals [0, 2] and [4.5, 6] is shaded. The area over the function and under the x axis over the interval [2, 2.5] is shaded.

a. Over which intervals is *ℓ* positive? Over which intervals is it negative? Over which, if any, is it zero?
b. Over which intervals is *ℓ* increasing? Over which is it decreasing? Over which intervals, if any, is it constant?
c. What is the average value of *ℓ*?
SOLUTION:
a. *ℓ* is positive over $(0,1)$ and $(3,6),$ and negative over $(1,3).$ b. It is increasing over $(0,1)$ and $(3,5),$ and it is constant over $(1,3)$ and $(5,6).$ c. Its average value is $\frac{1}{3}.$
:::
In the following exercises, use a calculator to estimate the area under the curve by computing *T*<sub>10</sub>, the average of the left- and right-endpoint Riemann sums using $N=10$ rectangles. Then, using the Fundamental Theorem of Calculus, Part 2, determine the exact area.

:::exercise {fs-id1170572098854} type= 
PROBLEM:
**[T]** $y={x}^{2}$ over $[0,4]$
:::

:::exercise {fs-id1170572344231} type= 
PROBLEM:
**[T]** $y={x}^{3}+6{x}^{2}+x-5$ over $[−4,2]$
SOLUTION:
${T}_{10}=49.08,{\displaystyle \int_{−4}^{3}({x}^{3}+6{x}^{2}+x-5)dx=48}$
:::

:::exercise {fs-id1170572626556} type= 
PROBLEM:
**[T]** $y=\sqrt{{x}^{3}}$ over $[0,6]$
:::

:::exercise {fs-id1170571699110} type= 
PROBLEM:
**[T]** $y=\sqrt{x}+{x}^{2}$ over $[1,9]$
SOLUTION:
${T}_{10}=260.836,{\displaystyle \int_{1}^{9}(\sqrt{x}+{x}^{2})dx=260}$
:::

:::exercise {fs-id1170572444394} type= 
PROBLEM:
**[T]** ${\displaystyle \int (\text{cos}\;x-\text{sin}\;x)dx}$ over $[0,\pi ]$
:::

:::exercise {fs-id1170572293458} type= 
PROBLEM:
**[T]** ${\displaystyle \int \frac{4}{{x}^{2}}dx}$ over $[1,4]$
SOLUTION:
${T}_{10}=3.058,{\displaystyle \int_{1}^{4}\frac{4}{{x}^{2}}dx=3}$
:::
In the following exercises, evaluate each definite integral using the Fundamental Theorem of Calculus, Part 2.

:::exercise {fs-id1170571613579} type= 
PROBLEM:
${\displaystyle \int_{−1}^{2}({x}^{2}-3x)dx}$
:::

:::exercise {fs-id1170571769554} type= 
PROBLEM:
${\displaystyle \int_{−2}^{3}({x}^{2}+3x-5)dx}$
SOLUTION:
$F(x)=\frac{{x}^{3}}{3}+\frac{3{x}^{2}}{2}-5x,F(3)-F(−2)=-\frac{35}{6}$
:::

:::exercise {fs-id1170572628481} type= 
PROBLEM:
${\displaystyle \int_{−2}^{3}(t+2)(t-3)dt}$
:::

:::exercise {fs-id1170572543704} type= 
PROBLEM:
${\displaystyle \int_{2}^{3}({t}^{2}-9)(4-{t}^{2})dt}$
SOLUTION:
$F(x)=-\frac{{t}^{5}}{5}+\frac{13{t}^{3}}{3}-36t,F(3)-F(2)=\frac{62}{15}$
:::

:::exercise {fs-id1170572184318} type= 
PROBLEM:
${\displaystyle \int_{1}^{2}{x}^{9}dx}$
:::

:::exercise {fs-id1170571653421} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}{x}^{99}dx}$
SOLUTION:
$F(x)=\frac{{x}^{100}}{100},F(1)-F(0)=\frac{1}{100}$
:::

:::exercise {fs-id1170572480544} type= 
PROBLEM:
${\displaystyle \int_{4}^{8}(4{t}^{5\text{/}2}-3{t}^{3\text{/}2})dt}$
:::

:::exercise {fs-id1170571597447} type= 
PROBLEM:
${\displaystyle \int_{1\text{/}4}^{4}({x}^{2}-\frac{1}{{x}^{2}})dx}$
SOLUTION:
$F(x)=\frac{{x}^{3}}{3}+\frac{1}{x},F(4)-F(\frac{1}{4})=\frac{1125}{64}$
:::

:::exercise {fs-id1170572373391} type= 
PROBLEM:
${\displaystyle \int_{1}^{2}\frac{2}{{x}^{3}}dx}$
:::

:::exercise {fs-id1170571733976} type= 
PROBLEM:
${\displaystyle \int_{1}^{4}\frac{1}{2\sqrt{x}}dx}$
SOLUTION:
$F(x)=\sqrt{x},F(4)-F(1)=1$
:::

:::exercise {fs-id1170571649924} type= 
PROBLEM:
${\displaystyle \int_{1}^{4}\frac{2-\sqrt{t}}{{t}^{2}}dt}$
:::

:::exercise {fs-id1170571660199} type= 
PROBLEM:
${\displaystyle \int_{1}^{16}\frac{dt}{{t}^{1\text{/}4}}}$
SOLUTION:
$F(x)=\frac{4}{3}{t}^{3\text{/}4},F(16)-F(1)=\frac{28}{3}$
:::

:::exercise {fs-id1170572274959} type= 
PROBLEM:
${\displaystyle \int_{0}^{2\pi}\text{cos}\;\theta d\theta}$
:::

:::exercise {fs-id1170572510072} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi \text{/}2}\text{sin}\;\theta d\theta}$
SOLUTION:
$F(x)=\text{−}\text{cos}\;x,F(\frac{\pi}{2})-F(0)=1$
:::

:::exercise {fs-id1170571712546} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi \text{/}4}{\text{sec}}^{2}\theta d\theta}$
:::

:::exercise {fs-id1170572419248} type= 
PROBLEM:
$\int_{0}^{\pi \text{/}4}\text{sec}\;\theta \;\text{tan}\;\theta d\theta$
SOLUTION:
$F(x)=\text{sec}\;x,F(\frac{\pi}{4})-F(0)=\sqrt{2}-1$
:::

:::exercise {fs-id1170572443628} type= 
PROBLEM:
${\displaystyle \int_{\pi \text{/}3}^{\pi \text{/}4}\text{csc}\;\theta \;\text{cot}\;\theta d\theta}$
:::

:::exercise {fs-id1170571678801} type= 
PROBLEM:
${\displaystyle \int_{\pi \text{/}4}^{\pi \text{/}2}{\text{csc}}^{2}\theta d\theta}$
SOLUTION:
$F(x)=\text{−}\text{cot}(x),F(\frac{\pi}{2})-F(\frac{\pi}{4})=1$
:::

:::exercise {fs-id1170572601259} type= 
PROBLEM:
${\displaystyle \int_{1}^{2}(\frac{1}{{t}^{2}}-\frac{1}{{t}^{3}})dt}$
:::

:::exercise {fs-id1170571679844} type= 
PROBLEM:
${\displaystyle \int_{−2}^{−1}(\frac{1}{{t}^{2}}-\frac{1}{{t}^{3}})dt}$
SOLUTION:
$F(t)=-\frac{1}{t}+\frac{1}{2{t}^{2}},F(−1)-F(−2)=\frac{7}{8}$
:::
In the following exercises, use the evaluation theorem to express the integral as a function $F(x).$

:::exercise {fs-id1170572415152} type= 
PROBLEM:
${\displaystyle \int_{a}^{x}{t}^{2}dt}$
:::

:::exercise {fs-id1170571638193} type= 
PROBLEM:
${\displaystyle \int_{1}^{x}{e}^{t}dt}$
SOLUTION:
$F(x)={e}^{x}-e$
:::

:::exercise {fs-id1170571638254} type= 
PROBLEM:
${\displaystyle \int_{0}^{x}\text{cos}\;tdt}$
:::

:::exercise {fs-id1170571810891} type= 
PROBLEM:
${\displaystyle \int_{\text{−}x}^{x}\text{sin}\;tdt}$
SOLUTION:
$F(x)=0$
:::
In the following exercises, identify the roots of the integrand to remove absolute values, then evaluate using the Fundamental Theorem of Calculus, Part 2.

:::exercise {fs-id1170571697158} type= 
PROBLEM:
${\displaystyle \int_{−2}^{3}|x|dx}$
:::

:::exercise {fs-id1170571539146} type= 
PROBLEM:
${\displaystyle \int_{−2}^{4}|{t}^{2}-2t-3|dt}$
SOLUTION:
${\displaystyle \int_{−2}^{−1}({t}^{2}-2t-3)dt}-{\displaystyle \int_{−1}^{3}({t}^{2}-2t-3)dt}+{\displaystyle \int_{3}^{4}({t}^{2}-2t-3)dt}=\frac{46}{3}$
:::

:::exercise {fs-id1170572456358} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi}|\text{cos}\;t|dt}$
:::

:::exercise {fs-id1170571580976} type= 
PROBLEM:
${\displaystyle \int_{\text{−}\pi \text{/}2}^{\pi \text{/}2}|\text{sin}\;t|dt}$
SOLUTION:
$\text{−}{\displaystyle \int_{\text{−}\pi \text{/}2}^{0}\text{sin}\;tdt+{\displaystyle \int_{0}^{\pi \text{/}2}\text{sin}\;tdt=2}}$
:::

:::exercise {fs-id1170572396566} type= 
PROBLEM:
Suppose that the number of hours of daylight on a given day in Seattle is modeled by the function $−3.75\;\text{cos}(\frac{\pi t}{6})+12.25,$ with *t* given in months and $t=0$ corresponding to the winter solstice.
a. What is the average number of daylight hours in a year?
b. At which times *t*<sub>1</sub> and *t*<sub>2</sub>, where $0\le {t}_{1}<{t}_{2}<12,$ do the number of daylight hours equal the average number?
c. Write an integral that expresses the total number of daylight hours in Seattle between ${t}_{1}$ and ${t}_{2}.$
d. Compute the mean hours of daylight in Seattle between ${t}_{1}$ and ${t}_{2},$ where $0\le {t}_{1}<{t}_{2}<12,$ and then between ${t}_{2}$ and ${t}_{1},$ and show that the average of the two is equal to the average day length.
:::

:::exercise {fs-id1170572373685} type= 
PROBLEM:
Suppose the rate of gasoline consumption over the course of a year in the United States can be modeled by a sinusoidal function of the form $(11.21-\text{cos}(\frac{\pi t}{6}))\;\times \;{10}^{9}$ gal/mo.
a. What is the average monthly consumption, and for which values of *t* is the rate at time *t* equal to the average rate?
b. What is the number of gallons of gasoline consumed in the United States in a year?
c. Write an integral that expresses the average monthly U.S. gas consumption during the part of the year between the beginning of April $(t=3)$ and the end of September $(t=9\text{).}$
SOLUTION:
a. The average is $11.21\;\times \;{10}^{9}$ since $\text{cos}(\frac{\pi t}{6})$ has period 12 and integral 0 over any period. Consumption is equal to the average when $\text{cos}(\frac{\pi t}{6})=0,$ when $t=3,$ and when $t=9.$ b. Total consumption is the average rate times duration: $11.21\;\times \;12\;\times \;{10}^{9}=1.35\;\times \;{10}^{11}$ c. ${10}^{9}(11.21-\frac{1}{6}{\displaystyle \int_{3}^{9}\text{cos}(\frac{\pi t}{6})dt})={10}^{9}(11.21+\frac{2}{\pi})=11.84x{10}^{9}$
:::

:::exercise {fs-id1170572168742} type= 
PROBLEM:
Explain why, if *f* is continuous over $[a,b],$ there is at least one point $c\in [a,b]$ such that $f(c)=\frac{1}{b-a}{\displaystyle \int_{a}^{b}f(t)dt}.$
:::

:::exercise {fs-id1170572629224} type= 
PROBLEM:
Explain why, if *f* is continuous over $[a,b]$ and is not equal to a constant, there is at least one point $M\in [a,b]$ such that $f(M)>\frac{1}{b-a}{\displaystyle \int_{a}^{b}f(t)dt}$ and at least one point $m\in [a,b]$ such that $f(m)<\frac{1}{b-a}{\displaystyle \int_{a}^{b}f(t)dt}.$
SOLUTION:
If *f* is not constant, then its average is strictly smaller than the maximum and larger than the minimum, which are attained over $[a,b]$ by the extreme value theorem.
:::

:::exercise {fs-id1170572379048} type= 
PROBLEM:
Kepler’s first law states that the planets move in elliptical orbits with the Sun at one focus. The closest point of a planetary orbit to the Sun is called the {index:*perihelion*} (for Earth, it currently occurs around January 3) and the farthest point is called the {index:*aphelion*} (for Earth, it currently occurs around July 4). Kepler’s second law states that planets sweep out equal areas of their elliptical orbits in equal times. Thus, the two arcs indicated in the following figure are swept out in equal times. At what time of year is Earth moving fastest in its orbit? When is it moving slowest?

> IMAGE {img:fs-id1170571571931} src=../../media/CNX_Calc_Figure_05_03_201.jpg
> alt: A horizontal ellipse with one focus marked. Two equal arcs are marked to the direct left of the focus and on the other side of the ellipse. The wedges formed by the focus and the endpoints of both arcs are shaded in blue.

:::

:::exercise {fs-id1170571571954} type= 
PROBLEM:
A point on an ellipse with major axis length 2*a* and minor axis length 2*b* has the coordinates $(a\;\text{cos}\;\theta ,b\;\text{sin}\;\theta ),0\le \theta \le 2\pi .$
a. Show that the distance from this point to the focus at $(\text{−}c,0)$ is $d(\theta )=a+c\;\text{cos}\;\theta ,$ where $c=\sqrt{{a}^{2}-{b}^{2}}.$
b. Use these coordinates to show that the average distance $\bar{d}$ from a point on the ellipse to the focus at $(\text{−}c,0),$ with respect to angle *θ*, is *a*.
SOLUTION:
a. ${d}^{2}\theta ={(a\;\text{cos}\;\theta +c)}^{2}+{b}^{2}{\text{sin}}^{2}\theta ={a}^{2}+{c}^{2}{\text{cos}}^{2}\theta +2ac\;\text{cos}\;\theta ={(a+c\;\text{cos}\;\theta )}^{2};$ b. $\bar{d}=\frac{1}{2\pi}{\displaystyle \int_{0}^{2\pi}(a+c\;\text{cos}\;\theta )d\theta =a}$
:::

:::exercise {fs-id1170571613749} type= 
PROBLEM:
As implied earlier, according to Kepler’s laws, Earth’s orbit is an ellipse with the Sun at one focus. The perihelion for Earth’s orbit around the Sun is 147,098,290 km and the aphelion is 152,098,232 km.
a. By placing the major axis along the *x*-axis, find the average distance from Earth to the Sun.
b. The classic definition of an astronomical unit (AU) is the distance from Earth to the Sun, and its value was computed as the average of the perihelion and aphelion distances. Is this definition justified?
:::

:::exercise {fs-id1170572346991} type= 
PROBLEM:
The force of gravitational attraction between the Sun and a planet is $F(\theta )=\frac{GmM}{{r}^{2}(\theta )},$ where *m* is the mass of the planet, *M* is the mass of the Sun, *G* is a universal constant, and $r(\theta )$ is the distance between the Sun and the planet when the planet is at an angle *θ* with the major axis of its orbit. Assuming that *M*, *m*, and the ellipse parameters *a* and *b* (half-lengths of the major and minor axes) are given, set up—but do not evaluate—an integral that expresses in terms of $G,m,M,a,b$ the average gravitational force between the Sun and the planet.
SOLUTION:
Mean gravitational force = $\frac{GmM}{2\pi}{\displaystyle \int_{0}^{2\pi}\frac{1}{{(a+2\sqrt{{a}^{2}-{b}^{2}}\text{cos}\;\theta )}^{2}}d\theta}.$
:::

:::exercise {fs-id1170572329950} type= 
PROBLEM:
The displacement from rest of a mass attached to a spring satisfies the simple harmonic motion equation $x(t)=A\;\text{cos}(\omega t-ϕ),$ where $ϕ$ is a phase constant, *ω* is the angular frequency, and *A* is the amplitude. Find the average velocity, the average speed (magnitude of velocity), the average displacement, and the average distance from rest (magnitude of displacement) of the mass.
:::

## Glossary
- {def} **fundamental theorem of calculus**: the theorem, central to the entire development of calculus, that establishes the relationship between differentiation and integration
- {def} **fundamental theorem of calculus, part 1**: uses a definite integral to define an antiderivative of a function
- {def} **fundamental theorem of calculus, part 2**: (also, **evaluation theorem**) we can evaluate a definite integral by evaluating the antiderivative of the integrand at the endpoints of the interval and subtracting
- {def} **mean value theorem for integrals**: guarantees that a point *c* exists such that $f(c)$ is equal to the average value of the function

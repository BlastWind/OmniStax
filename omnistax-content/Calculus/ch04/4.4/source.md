# The Mean Value Theorem

## Learning Objectives {section:learning-objectives}
- Explain the meaning of Rolle’s theorem.
- Describe the significance of the Mean Value Theorem.
- State three important consequences of the Mean Value Theorem.

The {term:Mean Value Theorem} is one of the most important theorems in calculus. We look at some of its implications at the end of this section. First, let’s start with a special case of the Mean Value Theorem, called Rolle’s theorem.

## Rolle’s Theorem
Informally, {term:Rolle’s theorem} states that if the outputs of a differentiable function $f$ are equal at the endpoints of an interval, then there must be an interior point $c$ where $f'(c)=0.$ [ref:CNX_Calc_Figure_04_04_001] illustrates this theorem.

> FIGURE {fig:CNX_Calc_Figure_04_04_001} src=../../media/CNX_Calc_Figure_04_04_009.jpg
> alt: The figure is divided into three parts labeled a, b, and c. Figure a shows the first quadrant with values a, c, and b marked on the x-axis. A downward-facing parabola is drawn such that its values at a and b are the same. The point c is the global maximum, and it is noted that f’(c) = 0. Figure b shows the first quadrant with values a, c, and b marked on the x-axis. An upward-facing parabola is drawn such that its values at a and b are the same. The point c is the global minimum, and it is noted that f’(c) = 0. Figure c shows the first quadrant with points a, c1, c2, and b marked on the x-axis. One period of a sine wave is drawn such that its values at a and b are equal. The point c1 is the global maximum, and it is noted that f’(c1) = 0. The point c2 is the global minimum, and it is noted that f’(c2) = 0.
> caption: If a differentiable function *f* satisfies $f(a)=f(b),$ then its derivative must be zero at some point(s) between $a$ and $b.$

:::note [theorem] Rolle’s Theorem
Let $f$ be a continuous function over the closed interval $[a,b]$ and differentiable over the open interval $(a,b)$ such that $f(a)=f(b).$ There then exists at least one $c\in (a,b)$ such that $f'(c)=0.$
:::

### Proof
Let $k=f(a)=f(b).$ We consider three cases:
1. $f(x)=k$ for all $x\in (a,b).$
2. There exists $x\in (a,b)$ such that $f(x)>k.$
3. There exists $x\in (a,b)$ such that $f(x)<k.$
Case 1: If $f(x)=k$ for all $x\in (a,b),$ then $f'(x)=0$ for all $x\in (a,b).$
Case 2: Since $f$ is a continuous function over the closed, bounded interval $[a,b],$ by the extreme value theorem, it has an absolute maximum. Also, since there is a point $x\in (a,b)$ such that $f(x)>k,$ the absolute maximum is greater than $k.$ Therefore, the absolute maximum does not occur at either endpoint. As a result, the absolute maximum must occur at an interior point $c\in (a,b).$ Because $f$ has a maximum at an interior point $c,$ and $f$ is differentiable at $c,$ by Fermat’s theorem, $f'(c)=0.$
Case 3: The case when there exists a point $x\in (a,b)$ such that $f(x)<k$ is analogous to case 2, with maximum replaced by minimum.
□
An important point about Rolle’s theorem is that the differentiability of the function $f$ is critical. If $f$ is not differentiable, even at a single point, the result may not hold. For example, the function $f(x)=|x|-1$ is continuous over $[−1,1]$ and $f(−1)=0=f(1),$ but $f'(c)≠0$ for any $c\in (−1,1)$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_04_04_002} src=../../media/CNX_Calc_Figure_04_04_002.jpg
> alt: The function f(x) = |x| − 1 is graphed. It is shown that f(1) = f(−1), but it is noted that there is no c such that f’(c) = 0.
> caption: Since $f(x)=|x|-1$ is not differentiable at $x=0,$ the conditions of Rolle’s theorem are not satisfied. In fact, the conclusion does not hold here; there is no $c\in (−1,1)$ such that $f'(c)=0.$

Let’s now consider functions that satisfy the conditions of Rolle’s theorem and calculate explicitly the points $c$ where $f'(c)=0.$

:::example {ex:fs-id1165043010693} Using Rolle’s Theorem

:::exercise {fs-id1165042329638} type= 
PROBLEM:
For each of the following functions, verify that the function satisfies the criteria stated in Rolle’s theorem and find all values $c$ in the given interval where $f'(c)=0.$
a. $f(x)={x}^{2}+2x$ over $[−2,0]$
b. $f(x)={x}^{3}-4x$ over $[−2,2]$
SOLUTION:
a. Since $f$ is a polynomial, it is continuous and differentiable everywhere. In addition, $f(−2)=0=f(0).$ Therefore, $f$ satisfies the criteria of Rolle’s theorem. We conclude that there exists at least one value $c\in (−2,0)$ such that $f'(c)=0.$ Since $f'(x)=2x+2=2(x+1),$ we see that $f'(c)=2(c+1)=0$ implies $c=−1$ as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_04_003} src=../../media/CNX_Calc_Figure_04_04_003.jpg
> alt: The function f(x) = x2 +2x is graphed. It is shown that f(0) = f(−2), and a dashed horizontal line is drawn at the absolute minimum at (−1, −1).
> caption: This function is continuous and differentiable over $[−2,0],$ $f'(c)=0$ when $c=−1.$

b. As in part a. $f$ is a polynomial and therefore is continuous and differentiable everywhere. Also, $f(−2)=0=f(2).$ That said, $f$ satisfies the criteria of Rolle’s theorem. Differentiating, we find that $f'(x)=3{x}^{2}-4.$ Therefore, $f'(c)=0$ when $x=\text{±}\frac{2}{\sqrt{3}}.$ Both points are in the interval $[−2,2],$ and, therefore, both points satisfy the conclusion of Rolle’s theorem as shown in the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_04_004} src=../../media/CNX_Calc_Figure_04_04_004.jpg
> alt: The function f(x) = x3 – 4x is graphed. It is obvious that f(2) = f(−2) = f(0). Dashed horizontal lines are drawn at x = ±2/square root of 3, which are the local maximum and minimum.
> caption: For this polynomial over $[−2,2],$ $f'(c)=0$ at $x=\text{±}2\text{/}\sqrt{3}.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042367594} type= 
PROBLEM:
Verify that the function $f(x)=2{x}^{2}-8x+6$ defined over the interval $[1,3]$ satisfies the conditions of Rolle’s theorem. Find all points $c$ guaranteed by Rolle’s theorem.
SOLUTION:
$c=2$
COMMENTARY: Hint
Find all values $c,$ where $f'(c)=0.$
:::
:::

## The Mean Value Theorem and Its Meaning
Rolle’s theorem is a special case of the Mean Value Theorem. In Rolle’s theorem, we consider differentiable functions $f$ defined on a closed interval $[a,b]$ with $f(a)=f(b)$. The Mean Value Theorem generalizes Rolle’s theorem by considering functions that do not necessarily have equal value at the endpoints. Consequently, we can view the Mean Value Theorem as a slanted version of Rolle’s theorem ([ref:CNX_Calc_Figure_04_04_005]). The Mean Value Theorem states that if $f$ is continuous over the closed interval $[a,b]$ and differentiable over the open interval $(a,b),$ then there exists a point $c\in (a,b)$ such that the tangent line to the graph of $f$ at $c$ is parallel to the secant line connecting $(a,f(a))$ and $(b,f(b)).$

> FIGURE {fig:CNX_Calc_Figure_04_04_005} src=../../media/CNX_Calc_Figure_04_04_010.jpg
> alt: A vaguely sinusoidal function y = f(x) is drawn. On the x-axis, a, c1, c2, and b are marked. On the y-axis, f(a) and f(b) are marked. The function f(x) starts at (a, f(a)), decreases to c1, increases to c2, and then decreases to (b, f(b)). A secant line is drawn between (a, f(a)) and (b, f(b)), and it is noted that this line has slope (f(b) – f(a))/(b − a). The tangent lines at c1 and c2 are drawn, and these lines are parallel to the secant line. It is noted that the slopes of these tangent lines are f’(c1) and f’(c2), respectively.
> caption: The Mean Value Theorem says that for a function that meets its conditions, at some point the tangent line has the same slope as the secant line between the ends. For this function, there are two values ${c}_{1}$ and ${c}_{2}$ such that the tangent line to $f$ at ${c}_{1}$ and ${c}_{2}$ has the same slope as the secant line.

:::note [theorem] Mean Value Theorem
Let $f$ be continuous over the closed interval $[a,b]$ and differentiable over the open interval $(a,b).$ Then, there exists at least one point $c\in (a,b)$ such that

$f'(c)=\frac{f(b)-f(a)}{b-a}.$  {eq:fs-id1165043066505}

:::

### Proof
The proof follows from Rolle’s theorem by introducing an appropriate function that satisfies the criteria of Rolle’s theorem. Consider the line connecting $(a,f(a))$ and $(b,f(b)).$ Since the slope of that line is

$\frac{f(b)-f(a)}{b-a}$  {eq:fs-id1165042514053}

and the line passes through the point $(a,f(a)),$ the equation of that line can be written as

$y=\frac{f(b)-f(a)}{b-a}(x-a)+f(a).$  {eq:fs-id1165042326168}

Let $g(x)$ denote the vertical difference between the point $(x,f(x))$ and the point $(x,y)$ on that line. Therefore,

$g(x)=f(x)-[\frac{f(b)-f(a)}{b-a}(x-a)+f(a)]\text{.}$  {eq:fs-id1165043100161}

> FIGURE {fig:CNX_Calc_Figure_04_04_006} src=../../media/CNX_Calc_Figure_04_04_011.jpg
> alt: A vaguely sinusoidal function y = f(x) is drawn. On the x-axis, a and b are marked. On the y-axis, f(a) and f(b) are marked. The function f(x) starts at (a, f(a)), decreases, then increases, and then decreases to (b, f(b)). A secant line is drawn between (a, f(a)) and (b, f(b)), and it is noted that this line has equation y = ((f(b) – f(a))/(b − a)) (x − a) + f(a). A line is drawn between the maximum of f(x) and the secant line and it is marked g(x).
> caption: The value $g(x)$ is the vertical difference between the point $(x,f(x))$ and the point $(x,y)$ on the secant line connecting $(a,f(a))$ and $(b,f(b)).$

Since the graph of $f$ intersects the secant line when $x=a$ and $x=b,$ we see that $g(a)=0=g(b).$ Since $f$ is a differentiable function over $(a,b),$ $g$ is also a differentiable function over $(a,b).$ Furthermore, since $f$ is continuous over $[a,b],$ $g$ is also continuous over $[a,b].$ Therefore, $g$ satisfies the criteria of Rolle’s theorem. Consequently, there exists a point $c\in (a,b)$ such that $g'(c)=0.$ Since

$g'(x)=f'(x)-\frac{f(b)-f(a)}{b-a},$  {eq:fs-id1165042979927}

we see that

$g'(c)=f'(c)-\frac{f(b)-f(a)}{b-a}.$  {eq:fs-id1165042991202}

Since $g'(c)=0,$ we conclude that

$f'(c)=\frac{f(b)-f(a)}{b-a}.$  {eq:fs-id1165042608728}

□

:::example {ex:fs-id1165042979713} Verifying that the Mean Value Theorem Applies

:::exercise {fs-id1165042478873} type= 
PROBLEM:
For $f(x)=\sqrt{x}$ over the interval $[0,9],$ show that $f$ satisfies the hypothesis of the Mean Value Theorem, and therefore there exists at least one value $c\in (0,9)$ such that ${f}^{'}(c)$ is equal to the slope of the line connecting $(0,f(0))$ and $(9,f(9)).$ Find these values $c$ guaranteed by the Mean Value Theorem.
SOLUTION:
We know that $f(x)=\sqrt{x}$ is continuous over $[0,9]$ and differentiable over $(0,9).$ Therefore, $f$ satisfies the hypotheses of the Mean Value Theorem, and there must exist at least one value $c\in (0,9)$ such that ${f}^{'}(c)$ is equal to the slope of the line connecting $(0,f(0))$ and $(9,f(9))$ ([ref:CNX_Calc_Figure_04_04_007]). To determine which value(s) of $c$ are guaranteed, first calculate the derivative of $f.$ The derivative ${f}^{'}(x)=\frac{1}{(2\sqrt{x})}.$ The slope of the line connecting $(0,f(0))$ and $(9,f(9))$ is given by

$\frac{f(9)-f(0)}{9-0}=\frac{\sqrt{9}-\sqrt{0}}{9-0}=\frac{3}{9}=\frac{1}{3}.$  {eq:fs-id1165043251015}

We want to find $c$ such that ${f}^{'}(c)=\frac{1}{3}.$ That is, we want to find $c$ such that

$\frac{1}{2\sqrt{c}}=\frac{1}{3}.$  {eq:fs-id1165042375801}

Solving this equation for $c,$ we obtain $c=\frac{9}{4}.$ At this point, the slope of the tangent line equals the slope of the line joining the endpoints.

> FIGURE {fig:CNX_Calc_Figure_04_04_007} src=../../media/CNX_Calc_Figure_04_04_006.jpg
> alt: The function f(x) = the square root of x is graphed from (0, 0) to (9, 3). There is a secant line drawn from (0, 0) to (9, 3). At point (9/4, 3/2), there is a tangent line that is drawn, and this line is parallel to the secant line.
> caption: The slope of the tangent line at $c=9\text{/}4$ is the same as the slope of the line segment connecting $(0,0)$ and $(9,3).$

:::
:::
One application that helps illustrate the Mean Value Theorem involves velocity. For example, suppose we drive a car for 1 h down a straight road with an average velocity of 45 mph. Let $s(t)$ and $v(t)$ denote the position and velocity of the car, respectively, for $0\le t\le 1$ h. Assuming that the position function $s(t)$ is differentiable, we can apply the Mean Value Theorem to conclude that, at some time $c\in (0,1),$ the speed of the car was exactly

$v(c)={s}^{'}(c)=\frac{s(1)-s(0)}{1-0}=45\;\text{mph}.$  {eq:fs-id1165042647085}

:::example {ex:fs-id1165042332061} Mean Value Theorem and Velocity

:::exercise {fs-id1165042332064} type= 
PROBLEM:
If a rock is dropped from a height of 100 ft, its position $t$ seconds after it is dropped until it hits the ground is given by the function $s(t)=−16{t}^{2}+100.$
a. Determine how long it takes before the rock hits the ground.
b. Find the average velocity ${v}_{\text{avg}}$ of the rock for when the rock is released and the rock hits the ground.
c. Find the time $t$ guaranteed by the Mean Value Theorem when the instantaneous velocity of the rock is ${v}_{\text{avg}}.$
SOLUTION:
a. When the rock hits the ground, its position is $s(t)=0.$ Solving the equation $−16{t}^{2}+100=0$ for $t,$ we find that $t=\text{±}\frac{5}{2}\;\text{sec}.$ Since we are only considering $t\ge 0,$ the ball will hit the ground $\frac{5}{2}$ sec after it is dropped.
b. The average velocity is given by

${v}_{\text{avg}}=\frac{s(5\text{/}2)-s(0)}{5\text{/}2-0}=\frac{0-100}{5\text{/}2}=−40\;\text{ft/sec}.$  {eq:fs-id1165043354673}

c. The instantaneous velocity is given by the derivative of the position function. Therefore, we need to find a time $t$ such that $v(t)={s}^{'}(t)={v}_{\text{avg}}=−40\;\text{ft/sec}.$ Since $s(t)$ is continuous over the interval $[0,5\text{/}2]$ and differentiable over the interval $(0,5\text{/}2),$ by the Mean Value Theorem, there is guaranteed to be a point $c\in (0,5\text{/}2)$ such that

${s}^{'}(c)=\frac{s(5\text{/}2)-s(0)}{5\text{/}2-0}=−40.$  {eq:fs-id1165043390900}

Taking the derivative of the position function $s(t),$ we find that ${s}^{'}(t)=−32t.$ Therefore, the equation reduces to ${s}^{'}(c)=−32c=−40.$ Solving this equation for $c,$ we have $c=\frac{5}{4}.$ Therefore, $\frac{5}{4}$ sec after the rock is dropped, the instantaneous velocity equals the average velocity of the rock during its free fall: $−40$ ft/sec.

> FIGURE {fig:CNX_Calc_Figure_04_04_008} src=../../media/CNX_Calc_Figure_04_04_007.jpg
> alt: The function s(t) = −16t2 + 100 is graphed from (0, 100) to (5/2, 0). There is a secant line drawn from (0, 100) to (5/2, 0). At the point corresponding to t = 5/4, there is a tangent line that is drawn, and this line is parallel to the secant line.
> caption: At time $t=5\text{/}4$ sec, the velocity of the rock is equal to its average velocity from the time it is dropped until it hits the ground.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042707212} type= 
PROBLEM:
Suppose a ball is dropped from a height of 200 ft. Its position at time $t$ is $s(t)=−16{t}^{2}+200.$ Find the time $t$ when the instantaneous velocity of the ball equals its average velocity.
SOLUTION:
$\frac{5}{2\sqrt{2}}$ sec
COMMENTARY: Hint
First, determine how long it takes for the ball to hit the ground. Then, find the average velocity of the ball from the time it is dropped until it hits the ground.
:::
:::

## Corollaries of the Mean Value Theorem
Let’s now look at three corollaries of the Mean Value Theorem. These results have important consequences, which we use in upcoming sections.
At this point, we know the derivative of any constant function is zero. The Mean Value Theorem allows us to conclude that the converse is also true. In particular, if ${f}^{'}(x)=0$ for all $x$ in some interval $I,$ then $f(x)$ is constant over that interval. This result may seem intuitively obvious, but it has important implications that are not obvious, and we discuss them shortly.

:::note [theorem] Corollary 1: Functions with a Derivative of Zero
Let $f$ be differentiable over an interval $I.$ If ${f}^{'}(x)=0$ for all $x\in I,$ then $f(x)=$ constant for all $x\in I.$
:::

### Proof
Since $f$ is differentiable over $I,$ $f$ must be continuous over $I.$ Suppose $f(x)$ is not constant for all $x$ in $I.$ Then there exist $a,b\in I,$ where $a≠b$ and $f(a)≠f(b).$ Choose the notation so that $a<b.$ Therefore,

$\frac{f(b)-f(a)}{b-a}≠0.$  {eq:fs-id1165042708535}

Since $f$ is a differentiable function, by the Mean Value Theorem, there exists $c\in (a,b)$ such that

${f}^{'}(c)=\frac{f(b)-f(a)}{b-a}.$  {eq:fs-id1165042418104}

Therefore, there exists $c\in I$ such that ${f}^{'}(c)≠0,$ which contradicts the assumption that ${f}^{'}(x)=0$ for all $x\in I.$
□
From [ref:fs-id1165042645708], it follows that if two functions have the same derivative, they differ by, at most, a constant.

:::note [theorem] Corollary 2: Constant Difference Theorem
If $f$ and $g$ are differentiable over an interval $I$ and ${f}^{'}(x)={g}^{'}(x)$ for all $x\in I,$ then $f(x)=g(x)+C$ for some constant $C.$
:::

### Proof
Let $h(x)=f(x)-g(x).$ Then, ${h}^{'}(x)={f}^{'}(x)-{g}^{'}(x)=0$ for all $x\in I.$ By Corollary 1, there is a constant $C$ such that $h(x)=C$ for all $x\in I.$ Therefore, $f(x)=g(x)+C$ for all $x\in I.$
□
This fact is important because it means that for a given function $f,$ if there exists a function $F$ such that ${F}^{'}(x)=f(x);$ then, the only other functions that have a derivative equal to $f$ are $F(x)+C$ for some constant $C.$ We discuss this result in more detail later in the chapter.
The third corollary of the Mean Value Theorem discusses when a function is increasing and when it is decreasing. Recall that a function $f$ is increasing over $I$ if $f({x}_{1})<f({x}_{2})$ whenever ${x}_{1}<{x}_{2},$ whereas $f$ is decreasing over $I$ if $f{(x)}_{1}>f({x}_{2})$ whenever ${x}_{1}<{x}_{2}.$ Using the Mean Value Theorem, we can show that if the derivative of a function is positive, then the function is increasing; if the derivative is negative, then the function is decreasing ([ref:CNX_Calc_Figure_04_04_009]). We make use of this fact in the next section, where we show how to use the derivative of a function to locate local maximum and minimum values of the function, and how to determine the shape of the graph.

> FIGURE {fig:CNX_Calc_Figure_04_04_009} src=../../media/CNX_Calc_Figure_04_04_008.jpg
> alt: A vaguely sinusoidal function f(x) is graphed. It increases from somewhere in the second quadrant to (a, f(a)). In this section it is noted that f’ > 0. Then in decreases from (a, f(a)) to (b, f(b)). In this section it is noted that f’ < 0. Finally, it increases to the right of (b, f(b)) and it is noted in this section that f’ > 0.
> caption: If a function has a positive derivative over some interval $I,$ then the function increases over that interval $I;$ if the derivative is negative over some interval $I,$ then the function decreases over that interval $I.$

:::note [theorem] Corollary 3: Increasing and Decreasing Functions
Let $f$ be continuous over the closed interval $[a,b]$ and differentiable over the open interval $(a,b).$
1. If ${f}^{'}(x)>0$ for all $x\in (a,b),$ then $f$ is an increasing function over $[a,b].$
2. If ${f}^{'}(x)<0$ for all $x\in (a,b),$ then $f$ is a decreasing function over $[a,b].$
:::

### Proof
We will prove i.; the proof of ii. is similar. Suppose $f$ is continuous and differentiable over an interval $I$ and $f'(x)>0$ for all $x\in I$. By way of contradiction, suppose that $f$ is not an increasing function on $I$. Then there exist $a$ and $b$ in $I$ such that $a<b$, but $f(a)>f(b)$. Since $f$ is a differentiable function over $I$, the Mean Value Theorem guarantees that there is some value $c\in (a,b)$ such that

${f}^{'}(c)=\frac{f(b)-f(a)}{b-a}.$  {eq:fs-id1165043327400}

Now $a<b$, so $b-a>0$. Because $f(a)>f(b)$, it follows that $f(b)-f(a)<0$. It follows that the quotient of $f(b)-f(a)$ and $b-a$ is negative. So, for c,

${f}^{'}(c)=\frac{f(b)-f(a)}{b-a}<0.$  {eq:fs-id1165042651499}

However, ${f}^{'}(x)>0$ for all $x\in I$ including $c$. This is a contradiction. The assumption that $f$ is not an increasing function on $I$ is false. Therefore, $f$ must be increasing throughout $I$.
□

## Key Concepts {section:key-concepts}
- If $f$ is continuous over $[a,b]$ and differentiable over $(a,b)$ and $f(a)=f(b),$ then there exists a point $c\in (a,b)$ such that ${f}^{'}(c)=0.$ This is Rolle’s theorem.
- If $f$ is continuous over $[a,b]$ and differentiable over $(a,b),$ then there exists a point $c\in (a,b)$ such that

$f'(c)=\frac{f(b)-f(a)}{b-a}.$  {eq:fs-id1165042711722}

This is the Mean Value Theorem.
- If $f'(x)=0$ over an interval $I,$ then $f$ is constant over $I.$
- If two differentiable functions $f$ and $g$ satisfy ${f}^{'}(x)={g}^{'}(x)$ over $I,$ then $f(x)=g(x)+C$ for some constant $C.$
- If ${f}^{'}(x)>0$ over an interval $I,$ then $f$ is increasing over $I.$ If ${f}^{'}(x)<0$ over $I,$ then $f$ is decreasing over $I.$

##  {section:section-exercises}

:::exercise {fs-id1165042711455} type= 
PROBLEM:
Why do you need continuity to apply the Mean Value Theorem? Construct a counterexample.
:::

:::exercise {fs-id1165042617572} type= 
PROBLEM:
Why do you need differentiability to apply the Mean Value Theorem? Find a counterexample.
SOLUTION:
One example is $f(x)=|x|+3,\;−2\le x\le 2$
:::

:::exercise {fs-id1165042617629} type= 
PROBLEM:
When are Rolle’s theorem and the Mean Value Theorem equivalent?
:::

:::exercise {fs-id1165042617672} type= 
PROBLEM:
If you have a function with a discontinuity, is it still possible to have ${f}^{'}(c)(b-a)=f(b)-f(a)?$ Draw such an example or prove why not.
SOLUTION:
Yes, but the Mean Value Theorem still does not apply
:::
For the following exercises, determine over what intervals (if any) the Mean Value Theorem applies. Justify your answer.

:::exercise {fs-id1165042617747} type= 
PROBLEM:
$y=\text{sin}(\pi x)$
:::

:::exercise {fs-id1165043382934} type= 
PROBLEM:
$y=\frac{1}{{x}^{3}}$
SOLUTION:
Any closed interval in $(\text{−}\infty ,0)\text{or}(0,\infty )$
:::

:::exercise {fs-id1165043382996} type= 
PROBLEM:
$y=\sqrt{4-{x}^{2}}$
:::

:::exercise {fs-id1165043383043} type= 
PROBLEM:
$y=\sqrt{{x}^{2}-4}$
SOLUTION:
Any closed interval in $(\text{−}\infty ,−2)\text{or}(2,\infty )$
:::

:::exercise {fs-id1165043383107} type= 
PROBLEM:
$y=\text{ln}(3x-5)$
:::
For the following exercises, graph the functions on a calculator and draw the secant line that connects the endpoints. Estimate the number of points $c$ such that ${f}^{'}(c)(b-a)=f(b)-f(a).$

:::exercise {fs-id1165042525361} type= 
PROBLEM:
**[T]** $y=3{x}^{3}+2x+1$ over $[−1,1]$
SOLUTION:
2 points
:::

:::exercise {fs-id1165042525420} type= 
PROBLEM:
**[T]** $y=\text{tan}(\frac{\pi}{4}x)$ over $[-\frac{3}{2},\frac{3}{2}]$
:::

:::exercise {fs-id1165042525487} type= 
PROBLEM:
**[T]** $y={x}^{2}\text{cos}(\pi x)$ over $[−2,2]$
SOLUTION:
5 points
:::

:::exercise {fs-id1165042525546} type= 
PROBLEM:
**[T]** $y={x}^{6}-\frac{3}{4}{x}^{5}-\frac{9}{8}{x}^{4}+\frac{15}{16}{x}^{3}+\frac{3}{32}{x}^{2}+\frac{3}{16}x+\frac{1}{32}$ over $[−1,1]$
:::
For the following exercises, find all points $0<c<2$ predicted by the Mean Value Theorem satisfying $f(2)-f(0)={f}^{'}(c)(2-0).$

:::exercise {fs-id1165042710334} type= 
PROBLEM:
$f(x)={x}^{3}$
SOLUTION:
$c=\frac{2\sqrt{3}}{3}$
:::

:::exercise {fs-id1165042710384} type= 
PROBLEM:
$f(x)=\text{sin}(\pi x)$
:::

:::exercise {fs-id1165042471092} type= 
PROBLEM:
$f(x)=\text{cos}(2\pi x)$
SOLUTION:
$c=\frac{1}{2},1,\frac{3}{2}$
:::

:::exercise {fs-id1165042471159} type= 
PROBLEM:
$f(x)=1+x+{x}^{2}$
:::

:::exercise {fs-id1165042471210} type= 
PROBLEM:
$f(x)={(x-1)}^{10}$
SOLUTION:
$c=1$
:::

:::exercise {fs-id1165042471266} type= 
PROBLEM:
$f(x)={(x-1)}^{9}$
:::
For the following exercises, show there is no $c$ such that $f(1)-f(−1)={f}^{'}(c)(2).$ Explain why the Mean Value Theorem does not apply over the interval $[−1,1].$

:::exercise {fs-id1165042709925} type= 
PROBLEM:
$f(x)=|x-\frac{1}{2}|$
SOLUTION:
Not differentiable
:::

:::exercise {fs-id1165042709970} type= 
PROBLEM:
$f(x)=\frac{1}{{x}^{2}}$
:::

:::exercise {fs-id1165042710010} type= 
PROBLEM:
$f(x)=\sqrt{|x|}$
SOLUTION:
Not differentiable
:::

:::exercise {fs-id1165042710049} type= 
PROBLEM:
$f(x)=\lfloor x\rfloor$ (*Hint*: This is called the *floor function* and it is defined so that $f(x)$ is the largest integer less than or equal to $x.)$
:::
For the following exercises, determine whether the Mean Value Theorem applies for the functions over the given interval $[a,b].$ Justify your answer.

:::exercise {fs-id1165042710141} type= 
PROBLEM:
$y={e}^{x}$ over $[0,1]$
SOLUTION:
Yes
:::

:::exercise {fs-id1165042407402} type= 
PROBLEM:
$y=\text{ln}(2x+3)$ over $[-\frac{3}{2},0]$
:::

:::exercise {fs-id1165042407476} type= 
PROBLEM:
$f(x)=\text{tan}(2\pi x)$ over $[0,2]$
SOLUTION:
The Mean Value Theorem does not apply since the function is discontinuous at $x=\frac{1}{4},\frac{3}{4},\frac{5}{4},\frac{7}{4}.$
:::

:::exercise {fs-id1165042407573} type= 
PROBLEM:
$y=\sqrt{9-{x}^{2}}$ over $[−3,3]$
:::

:::exercise {fs-id1165042407622} type= 
PROBLEM:
$y=\frac{1}{|x+1|}$ over $[0,3]$
SOLUTION:
Yes
:::

:::exercise {fs-id1165042490982} type= 
PROBLEM:
$y={x}^{3}+2x+1$ over $[0,6]$
:::

:::exercise {fs-id1165042491035} type= 
PROBLEM:
$y=\frac{{x}^{2}+3x+2}{x}$ over $[−1,1]$
SOLUTION:
The Mean Value Theorem does not apply; discontinuous at $x=0.$
:::

:::exercise {fs-id1165042491104} type= 
PROBLEM:
$y=\frac{x}{\text{sin}(\pi x)+1}$ over $[0,1]$
:::

:::exercise {fs-id1165042491162} type= 
PROBLEM:
$y=\text{ln}(x+1)$ over $[0,e-1]$
SOLUTION:
Yes
:::

:::exercise {fs-id1165042491219} type= 
PROBLEM:
$y=x\;\text{sin}(\pi x)$ over $[0,2]$
:::

:::exercise {fs-id1165043262194} type= 
PROBLEM:
$y=5+|x|$ over $[−1,1]$
SOLUTION:
The Mean Value Theorem does not apply; not differentiable at $x=0.$
:::
For the following exercises, consider the roots of the equation.

:::exercise {fs-id1165043262256} type= 
PROBLEM:
Show that the equation $y={x}^{3}+4x+16$ has exactly one real root. What is it?
:::

:::exercise {fs-id1165043262306} type= 
PROBLEM:
Find the conditions for exactly one root (double root) for the equation $y={x}^{2}+bx+c$
SOLUTION:
$b=\text{±}2\sqrt{c}$
:::

:::exercise {fs-id1165043262357} type= 
PROBLEM:
Find the conditions for $y={e}^{x}-b$ to have one root. Is it possible to have more than one root?
:::
For the following exercises, use a calculator to graph the function over the interval $[a,b]$ and graph the secant line from $a$ to $b.$ Use the calculator to estimate all values of $c$ as guaranteed by the Mean Value Theorem. Then, find the exact value of $c,$ if possible, or write the final equation and use a calculator to estimate to four digits.

:::exercise {fs-id1165043262444} type= 
PROBLEM:
**[T]** $y=\text{tan}(\pi x)$ over $[-\frac{1}{4},\frac{1}{4}]$
SOLUTION:
$c=\text{±}\frac{1}{\pi}{\text{cos}}^{−1}(\frac{\sqrt{\pi}}{2}),$ $c=\text{±}0.1533$
:::

:::exercise {fs-id1165043341491} type= 
PROBLEM:
**[T]** $y=\frac{1}{\sqrt{x+1}}$ over $[0,3]$
:::

:::exercise {fs-id1165043341566} type= 
PROBLEM:
**[T]** $y=|{x}^{2}+2x-4|$ over $[−4,0]$
SOLUTION:
The Mean Value Theorem does not apply.
:::

:::exercise {fs-id1165043341630} type= 
PROBLEM:
**[T]** $y=x+\frac{1}{x}$ over $[\frac{1}{2},4]$
:::

:::exercise {fs-id1165043341693} type= 
PROBLEM:
**[T]** $y=\sqrt{x+1}+\frac{1}{{x}^{2}}$ over $[3,8]$
SOLUTION:
$\frac{1}{2\sqrt{c+1}}-\frac{2}{{c}^{3}}=\frac{521}{2880};$ $c=3.133,5.867$
:::

:::exercise {fs-id1165042595266} type= 
PROBLEM:
At 10:17 a.m., you pass a police car at 55 mph that is stopped on the freeway. You pass a second police car at 55 mph at 10:53 a.m., which is located 39 mi from the first police car. If the speed limit is 60 mph, can the police cite you for speeding?
:::

:::exercise {fs-id1165042595286} type= 
PROBLEM:
Two cars drive from one stoplight to the next, leaving at the same time and arriving at the same time. Is there ever a time when they are going the same speed? Prove or disprove.
SOLUTION:
Yes
:::

:::exercise {fs-id1165042595303} type= 
PROBLEM:
Show that $y={\text{sec}}^{2}x$ and $y={\text{tan}}^{2}x$ have the same derivative. What can you say about $y={\text{sec}}^{2}x-{\text{tan}}^{2}x?$
:::

:::exercise {fs-id1165042595379} type= 
PROBLEM:
Show that $y={\text{csc}}^{2}x$ and $y={\text{cot}}^{2}x$ have the same derivative. What can you say about $y={\text{csc}}^{2}x-{\text{cot}}^{2}x?$
SOLUTION:
Let ${s}_{1}(t)$ represent the distance of Car 1 from Stoplight 1 at time $t$. Let ${s}_{2}(t)$ represent the distance of Car 2 from Stoplight 1 at time $t$. Then ${s}_{1}(0)=0={s}_{2}(0)$. Let $t=m$ represent the time that the cars arrive at Stoplight 2. Then ${s}_{1}(m)=d={s}_{2}(m)$ where $d$ is the distance between the stoplights.
Define a new function $f(t)={s}_{1}(t)-{s}_{2}(t)$. Then $f(0)=0=f(m)$. By the Mean Value Theorem, there is a time $0<c<m$ such that

$$ {f}^{'}(c)=\frac{f(m)-f(0)}{m-0}=\frac{0}{m}=0. $$  {eq:eq-00001}

At time c,

$$ {f}^{'}(c)=0 $$  {eq:eq-00002}

$$ {s}_{1}^{'}(c)-{s}_{2}^{'}(c)=0 $$  {eq:eq-00003}

$$ {s}_{1}^{'}(c)={s}_{2}^{'}(c) $$  {eq:eq-00004}

So, at time c, Car 1 and Car 2 are traveling at the same speed.
:::

## Glossary
- {def} **mean value theorem**: if $f$ is continuous over $[a,b]$ and differentiable over $(a,b),$ then there exists $c\in (a,b)$ such that

${f}^{'}(c)=\frac{f(b)-f(a)}{b-a}$  {eq:fs-id1165043183378}

- {def} **rolle’s theorem**: if $f$ is continuous over $[a,b]$ and differentiable over $(a,b),$ and if $f(a)=f(b),$ then there exists $c\in (a,b)$ such that ${f}^{'}(c)=0$

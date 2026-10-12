# The Precise Definition of a Limit

## Learning Objectives {section:learning-objectives}
- Describe the epsilon-delta definition of a limit.
- Apply the epsilon-delta definition to find the limit of a function.
- Describe the epsilon-delta definitions of one-sided limits and infinite limits.
- Use the epsilon-delta definition to prove the limit laws.

By now you have progressed from the very informal definition of a limit in the introduction of this chapter to the intuitive understanding of a limit. At this point, you should have a very strong intuitive sense of what the limit of a function means and how you can find it. In this section, we convert this intuitive idea of a limit into a formal definition using precise mathematical language. The formal definition of a limit is quite possibly one of the most challenging definitions you will encounter early in your study of calculus; however, it is well worth any effort you make to reconcile it with your intuitive notion of a limit. Understanding this definition is the key that opens the door to a better understanding of calculus.

## Quantifying Closeness
Before stating the formal definition of a limit, we must introduce a few preliminary ideas. Recall that the distance between two points *a* and *b* on a number line is given by $|a-b|.$
- The statement $|f(x)-L|<ε$ may be interpreted as: *The distance between $f(x)$ and L is less than ε.*
- The statement $0<|x-a|<δ$ may be interpreted as: $x≠a$ *and the distance between x and a is less than δ.*
It is also important to look at the following equivalences for absolute value:
- The statement $|f(x)-L|<ε$ is equivalent to the statement $L-ε<f(x)<L+ε.$
- The statement $0<|x-a|<δ$ is equivalent to the statement $a-δ<x<a+δ$ and $x≠a.$
With these clarifications, we can state the formal {term:epsilon-delta definition of the limit}.

:::note [definition] Definition
Let $f(x)$ be defined for all $x≠a$ over an open interval containing *a*. Let *L* be a real number. Then

$\lim_{x\to a}f(x)=L$  {eq:fs-id1170571542392}

if, for every $ε>0,$ there exists a $δ>0,$ such that if $0<|x-a|<δ,$ then $|f(x)-L|<ε.$
:::
This definition may seem rather complex from a mathematical point of view, but it becomes easier to understand if we break it down phrase by phrase. The statement itself involves something called a {index:*universal quantifier*} (for every $ε>0\text{),}$ an {index:*existential quantifier*} (there exists a $δ>0\text{),}$ and, last, a {index:*conditional statement*} (if $0<|x-a|<δ,$ then $|f(x)-L|<ε\text{).}$ Let’s take a look at [ref:fs-id1170572305874], which breaks down the definition and translates each part.

> TABLE {tab:fs-id1170572305874} cols=4
> title: Translation of the Epsilon-Delta Definition of the Limit
> summary: A table with two columns and five rows. The first row has the headers “definition” and “translation,” from mathematical symbols to words. The second row has defines “for every epsilon less than 0” as “for every positive distance epsilon from L,” the third row defines “there exists a delta less than 0” as “there is a positive difference delta from a,” and the fourth row defines “if 0 is less than the absolute value of x –a, and that is less than delta, then the absolute value of the function of x minus L is less than epsilon” as “if x is closer than delta to a and x is not equal to a, then the function of x is closer than epsilon to L.”

| Definition | Translation |
| --- | --- | --- | --- |
| 1. For every $ε>0,$ | 1. For every positive distance *ε* from *L*, |
| 2. there exists a $δ>0,$ | 2. There is a positive distance $δ$ from *a*, |
| 3. such that | 3. such that |
| 4. if $0<|x-a|<δ,$ then $|f(x)-L|<ε.$ | 4. if *x* is closer than $δ$ to *a* and $x≠a,$ then $f(x)$ is closer than *ε* to *L*. |

We can get a better handle on this definition by looking at the definition geometrically. [ref:CNX_Calc_Figure_02_05_001] shows possible values of $δ$ for various choices of $ε>0$ for a given function $f(x),$ a number *a*, and a limit *L* at *a*. Notice that as we choose smaller values of *ε* (the distance between the function and the limit), we can always find a $δ$ small enough so that if we have chosen an *x* value within $δ$ of *a*, then the value of $f(x)$ is within *ε* of the limit *L*.

> FIGURE {fig:CNX_Calc_Figure_02_05_001} src=../../media/CNX_Calc_Figure_02_05_001.jpg
> alt: There are three graphs side by side showing possible values of delta, given successively smaller choices of epsilon. Each graph has a decreasing, concave down curve in quadrant one. Each graph has the point (a, L) marked on the curve, where L is the limit of the function at the point where x=a. On either side of L on the y axis, a distance epsilon is marked off  - namely, a line is drawn through the function at y = L + epsilon and L – epsilon. As smaller values of epsilon are chosen going from graph one to graph three, smaller values of delta to the left and right of point a can be found so that if we have chosen an x value within delta of a, then the value of f(x) is within epsilon of the limit L.
> caption: These graphs show possible values of $δ$, given successively smaller choices of *ε*.

:::note [media-2] 
Visit the following applet to experiment with finding values of $δ$ for selected values of *ε*:
- [The epsilon-delta definition of limit](http://www.openstax.org/l/20_epsilondelt)
:::
[ref:fs-id1170572333023] shows how you can use this definition to prove a statement about the limit of a specific function at a specified value.

:::example {ex:fs-id1170572333023} Proving a Statement about the Limit of a Specific Function

:::exercise {fs-id1170572434052} type= 
PROBLEM:
Prove that $\lim_{x\to 1}(2x+1)=3.$
SOLUTION:
Let $ε>0.$
The first part of the definition begins “For every $ε>0\text{.”}$ This means we must prove that whatever follows is true no matter what positive value of *ε* is chosen. By stating “Let $ε>0\text{,”}$ we signal our intent to do so.
Choose $δ=\frac{ε}{2}.$
The definition continues with “there exists a $δ>0.$” The phrase “there exists” in a mathematical statement is always a signal for a scavenger hunt. In other words, we must go and find $δ.$ So, where exactly did $δ=ε\text{/}2$ come from? There are two basic approaches to tracking down $δ.$ One method is purely algebraic and the other is geometric.
We begin by tackling the problem from an algebraic point of view. Since ultimately we want $|(2x+1)-3|<ε,$ we begin by manipulating this expression: $|(2x+1)-3|<ε$ is equivalent to $|2x-2|<ε,$ which in turn is equivalent to $|2||x-1|<ε.$ Last, this is equivalent to $|x-1|<ε\text{/}2.$ Thus, it would seem that $δ=ε\text{/}2$ is appropriate.
We may also find $δ$ through geometric methods. [ref:CNX_Calc_Figure_02_05_002] demonstrates how this is done.

> FIGURE {fig:CNX_Calc_Figure_02_05_002} src=../../media/CNX_Calc_Figure_02_05_002.jpg
> alt: This graph shows how to find delta geometrically. The function 2x + 1 is drawn in red from x=0 to 2. A straight line is drawn at y=3 in green, which intersects the function at (1,3). Two blues lines are drawn at 3 + epsilon and 3 – epsilon, which are graphed here between 5 and 6 and between 0 and 1, respectively. Finally, two pink lines are drawn down from the points of intersection of the function and the blue lines – the taller between 1 and 2, and the shorter between 0 and 1. Since the blue lines and the function intersect, we can solve for x. For the shorter, corresponding to the line y = 3 – epsilon, we have 3 – epsilon = 2x + 1, which simplifies to x = 1 – epsilon / 2. For the taller, corresponding to the line y = 3 + epsilon, we have 3 + epsilon = 2x + 1, which simplifies to x = 1 + epsilon / 2. Delta is the smaller of the two distances between 1 and where the pink lines intersect with the x axis. We have delta is the min of 1 + epsilon / 2 -1 and 1 – (1 – epsilon / 2), which is the min of epsilon / 2 and epsilon / 2, which is simply epsilon / 2.
> caption: This graph shows how we find $δ$ geometrically.

Assume $0<|x-1|<δ.$ When $δ$ has been chosen, our goal is to show that if $0<|x-1|<δ,$ then $|(2x+1)-3|<ε.$ To prove any statement of the form “If this, then that,” we begin by assuming “this” and trying to get “that.”
Thus,
$\begin{array}{lllll}|(2x+1)-3| & =|2x-2| & & & \text{property of absolute value} \\ & =|2(x-1)| \\ & =|2||x-1| & & & |2|=2 \\ & =2|x-1| & & & \\ & <2\cdot δ & & & \text{here’s where we use the assumption that}\;0<|x-1|<δ \\ & =2\cdot \frac{ε}{2}=ε & & & \text{here’s where we use our choice of}\;δ=ε\text{/}2\end{array}$
COMMENTARY: Analysis
In this part of the proof, we started with $|(2x+1)-3|$ and used our assumption $0<|x-1|<δ$ in a key part of the chain of inequalities to get $|(2x+1)-3|$ to be less than *ε*. We could just as easily have manipulated the assumed inequality $0<|x-1|<δ$ to arrive at $|(2x+1)-3|<ε$ as follows:
$\begin{array}{ll}0<|x-1|<δ & ⇒|x-1|<δ \\ & ⇒-δ<x-1<δ \\ & ⇒-\frac{ε}{2}<x-1<\frac{ε}{2} \\ & ⇒-ε<2x-2<ε \\ & ⇒|2x-2|<ε \\ & ⇒|(2x+1)-3|<ε.\end{array}$
Therefore, $\lim_{x\to 1}(2x+1)=3.$ (Having completed the proof, we state what we have accomplished.)
After removing all the remarks, here is a final version of the proof:
Let $ε>0.$
Choose $δ=ε\text{/}2.$
Assume $0<|x-1|<δ.$
Thus,
$\begin{array}{rl}|(2x+1)-3| & =|2x-2| \\ & =|2(x-1)| \\ & =|2||x-1| \\ & =2|x-1| \\ & <2\cdot δ \\ & =2\cdot \frac{ε}{2} \\ & =ε.\end{array}$
Therefore, $\lim_{x\to 1}(2x+1)=3.$
:::
:::
The following Problem-Solving Strategy summarizes the type of proof we worked out in [ref:fs-id1170572333023].

:::note [problem-solving] Proving That $\lim_{x\to a}f(x)=L$ for a Specific Function $f(x)$
1. Let’s begin the proof with the following statement: Let $ε>0.$
2. Next, we need to obtain a value for $δ.$ After we have obtained this value, we make the following statement, filling in the blank with our choice of $δ$: Choose $δ=\text{\_\_\_\_\_\_\_.}$
3. The next statement in the proof should be (at this point, we fill in our given value for *a*):

Assume $0<|x-a|<δ.$
4. Next, based on this assumption, we need to show that $|f(x)-L|<ε,$ where $f(x)$ and *L* are our function $f(x)$ and our limit *L*. At some point, we need to use $0<|x-a|<δ.$
5. We conclude our proof with the statement: Therefore, $\lim_{x\to a}f(x)=L.$
:::

:::example {ex:fs-id1170571597356} Proving a Statement about a Limit

:::exercise {fs-id1170571597358} type= 
PROBLEM:
Complete the proof that $\lim_{x\to −1}(4x+1)=−3$ by filling in the blanks.
Let _____.
Choose $δ=\text{\_\_\_\_\_\_\_.}$
Assume $0<|x-\_\_\_\_\_\_\_\text{|}<δ.$
Thus, $|\text{\_\_\_\_\_\_\_\_}-\text{\_\_\_\_\_\_\_\_}|=\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ε.$
SOLUTION:
We begin by filling in the blanks where the choices are specified by the definition. Thus, we have
Let $ε>0.$
Choose $δ=\text{\_\_\_\_\_\_\_.}$
Assume $0<|x-(−1)|<δ.$ (or equivalently, $0<|x+1|<δ\text{.)}$
Thus, $|(4x+1)-(−3)|=|4x+4|=|4||x+1|<4δ\text{\_\_\_\_\_\_\_}ε.$
Focusing on the final line of the proof, we see that we should choose $δ=\frac{ε}{4}.$
We now complete the final write-up of the proof:
Let $ε>0.$
Choose $δ=\frac{ε}{4}.$
Assume $0<|x-(−1)|<δ$ (or equivalently, $0<|x+1|<δ\text{.)}$
Thus, $|(4x+1)-(−3)|=|4x+4|=|4||x+1|<4δ=4(ε\text{/}4)=ε.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571712678} type= 
PROBLEM:
Complete the proof that $\lim_{x\to 2}(3x-2)=4$ by filling in the blanks.
Let _______.
Choose $δ=\text{\_\_\_\_\_\_\_}.$
Assume $0<|x-\text{\_\_\_\_}|<\text{\_\_\_\_}.$
Thus,
$|\text{\_\_\_\_\_\_\_}-\text{\_\_\_\_}|=\text{\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_}ε.$
Therefore, $\lim_{x\to 2}(3x-2)=4.$
SOLUTION:
Let $ε>0;$ choose $δ=\frac{ε}{3};$ assume $0<|x-2|<δ.$
Thus, $|(3x-2)-4|=|3x-6|=|3|\cdot |x-2|<3\cdot δ=3\cdot (ε\text{/}3)=ε.$
Therefore, $\lim_{x\to 2}3x-2=4.$
COMMENTARY: Hint
Follow the outline in the Problem-Solving Strategy that we worked out in full in [ref:fs-id1170571597356].
:::
:::
In [ref:fs-id1170572333023] and [ref:fs-id1170571597356], the proofs were fairly straightforward, since the functions with which we were working were linear. In [ref:fs-id1170571657118], we see how to modify the proof to accommodate a nonlinear function.

:::example {ex:fs-id1170571657118} Proving a Statement about the Limit of a Specific Function (Geometric Approach)

:::exercise {fs-id1170571657120} type= 
PROBLEM:
Prove that $\lim_{x\to 2}{x}^{2}=4.$
SOLUTION:
1. Let $ε>0.$ The first part of the definition begins “For every $ε>0\text{,”}$ so we must prove that whatever follows is true no matter what positive value of *ε* is chosen. By stating “Let $ε>0\text{,”}$ we signal our intent to do so.
2. Without loss of generality, assume $ε\le 4.$ Two questions present themselves: Why do we want $ε\le 4$ and why is it okay to make this assumption? In answer to the first question: Later on, in the process of solving for $δ,$ we will discover that $δ$ involves the quantity $\sqrt{4-ε}.$ Consequently, we need $ε\le 4.$ In answer to the second question: If we can find $δ>0$ that “works” for $ε\le 4,$ then it will “work” for any $ε>4$ as well. Keep in mind that, although it is always okay to put an upper bound on *ε*, it is never okay to put a lower bound (other than zero) on *ε*.
3. Choose $δ=\text{min}\{2-\sqrt{4-ε},\sqrt{4+ε}-2\}.$ [ref:CNX_Calc_Figure_02_05_003] shows how we made this choice of $δ.$

> FIGURE {fig:CNX_Calc_Figure_02_05_003} src=../../media/CNX_Calc_Figure_02_05_003.jpg
> alt: This graph shows how to find delta geometrically for a given epsilon for the above proof. First, the function f(x) = x^2 is drawn from [-1, 3]. On the y axis, the proposed limit 4 is marked, and the line y=4 is drawn to intersect with the function at (2,4). For a given epsilon, point 4 + epsilon and 4 – epsilon are marked on the y axis above and below 4. Blue lines are drawn from these points to intersect with the function, where pink lines are drawn from the point of intersection to the x axis. These lines land on either side of x=2. Next, we solve for these x values, which have to be positive here. The first is x^2 = 4 – epsilon, which simplifies to x = sqrt(4-epsilon). The next is x^2 = 4 + epsilon, which simplifies to x = sqrt(4 + epsilon). Delta is the smaller of the two distances, so it is the min of (2 – sqrt(4 – epsilon) and sqrt(4 + epsilon) – 2).
> caption: This graph shows how we find δ geometrically for a given ε for the proof in [ref:fs-id1170571657118].

4. We must show: If $0<|x-2|<δ,$ then $|{x}^{2}-4|<ε,$ so we must begin by assuming

$0<|x-2|<δ.$  {eq:fs-id1170572410134}

We don’t really need $0<|x-2|$ (in other words, $x≠2)$ for this proof. Since $0<|x-2|<δ⇒|x-2|<δ,$ it is okay to drop $0<|x-2|.$

$|x-2|<δ.$  {eq:fs-id1170572505537}

Hence,

$-δ<x-2<δ.$  {eq:fs-id1170572130609}

Recall that $δ=\text{min}\{2-\sqrt{4-ε},\sqrt{4+ε}-2\}.$ Thus, $δ\le 2-\sqrt{4-ε}$ and consequently $-(2-\sqrt{4-ε})\le -δ.$ We also use $δ\le \sqrt{4+ε}-2$ here. We might ask at this point: Why did we substitute $2-\sqrt{4-ε}$ for $δ$ on the left-hand side of the inequality and $\sqrt{4+ε}-2$ on the right-hand side of the inequality? If we look at [ref:CNX_Calc_Figure_02_05_003], we see that $2-\sqrt{4-ε}$ corresponds to the distance on the left of 2 on the *x*-axis and $\sqrt{4+ε}-2$ corresponds to the distance on the right. Thus,

$-(2-\sqrt{4-ε})\le -δ<x-2<δ\le \sqrt{4+ε}-2.$  {eq:fs-id1170572436257}

We simplify the expression on the left:

$−2+\sqrt{4-ε}<x-2<\sqrt{4+ε}-2.$  {eq:fs-id1170572444545}

Then, we add 2 to all parts of the inequality:

$\sqrt{4-ε}<x<\sqrt{4+ε}.$  {eq:fs-id1170572550072}

We square all parts of the inequality. It is okay to do so, since all parts of the inequality are positive:

$4-ε<{x}^{2}<4+ε.$  {eq:fs-id1170571591429}

We subtract 4 from all parts of the inequality:

$-ε<{x}^{2}-4<ε.$  {eq:fs-id1170571650014}

Last,

$|{x}^{2}-4|<ε.$  {eq:fs-id1170571650046}

5. Therefore,

$\lim_{x\to 2}{x}^{2}=4.$  {eq:fs-id1170571543518}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572332177} type= 
PROBLEM:
Find δ corresponding to $ε>0$ for a proof that $\lim_{x\to 9}\sqrt{x}=3.$
SOLUTION:
Choose $δ=\text{min}\{9-{(3-ε)}^{2},{(3+ε)}^{2}-9\}.$
COMMENTARY: Hint
Draw a graph similar to the one in [ref:fs-id1170571657118].
:::
:::
The geometric approach to proving that the limit of a function takes on a specific value works quite well for some functions. Also, the insight into the formal definition of the limit that this method provides is invaluable. However, we may also approach limit proofs from a purely algebraic point of view. In many cases, an algebraic approach may not only provide us with additional insight into the definition, it may prove to be simpler as well. Furthermore, an algebraic approach is the primary tool used in proofs of statements about limits. For [ref:fs-id1170571690430], we take on a purely algebraic approach.

:::example {ex:fs-id1170571690430} Proving a Statement about the Limit of a Specific Function (Algebraic Approach)

:::exercise {fs-id1170571690432} type= 
PROBLEM:
Prove that $\lim_{x\to −1}({x}^{2}-2x+3)=6.$
SOLUTION:
Let’s use our outline from the Problem-Solving Strategy:
1. Let $ε>0.$
2. Choose $δ=\text{min}\{1,ε\text{/}5\}.$ This choice of $δ$ may appear odd at first glance, but it was obtained by taking a look at our ultimate desired inequality: $|({x}^{2}-2x+3)-6|<ε.$ This inequality is equivalent to $|x+1|\cdot |x-3|<ε.$ At this point, the temptation simply to choose $δ=\frac{ε}{x-3}$ is very strong. Unfortunately, our choice of $δ$ must depend on *ε* only and no other variable. If we can replace $|x-3|$ by a numerical value, our problem can be resolved. This is the place where assuming $δ\le 1$ comes into play. The choice of $δ\le 1$ here is arbitrary. We could have just as easily used any other positive number. In some proofs, greater care in this choice may be necessary. Now, since $δ\le 1$ and $|x+1|<δ\le 1,$ we are able to show that $|x-3|<5.$ Consequently, $|x+1|\cdot |x-3|<|x+1|\cdot 5.$ At this point we realize that we also need $δ\le ε\text{/}5.$ Thus, we choose $δ=\text{min}\{1,ε\text{/}5\}.$
3. Assume $0<|x+1|<δ.$ Thus,

$|x+1|<1\;\text{and}\;|x+1|<\frac{ε}{5}.$  {eq:fs-id1170571562629}

Since $|x+1|<1,$ we may conclude that $−1<x+1<1.$ Thus, by subtracting 4 from all parts of the inequality, we obtain $−5<x-3<\text{−}3.$ Consequently, $|x-3|<5.$ This gives us

$|({x}^{2}-2x+3)-6|=|x+1|\cdot |x-3|<\frac{ε}{5}\cdot 5=ε.$  {eq:fs-id1170572243051}

Therefore,

$\lim_{x\to −1}({x}^{2}-2x+3)=6.$  {eq:fs-id1170572293364}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572243116} type= 
PROBLEM:
Complete the proof that $\lim_{x\to 1}{x}^{2}=1.$
Let $ε>0;$ choose $δ=\text{min}\{1,ε\text{/}3\};$ assume $0<|x-1|<δ.$
Since $|x-1|<1,$ we may conclude that $−1<x-1<1.$ Thus, $1<x+1<3.$ Hence, $|x+1|<3.$
SOLUTION:
$|{x}^{2}-1|=|x-1|\cdot |x+1|<ε\text{/}3\cdot 3=ε$
COMMENTARY: Hint
Use [ref:fs-id1170571690430] as a guide.
:::
:::
You will find that, in general, the more complex a function, the more likely it is that the algebraic approach is the easiest to apply. The algebraic approach is also more useful in proving statements about limits.

## Proving Limit Laws
We now demonstrate how to use the epsilon-delta definition of a limit to construct a rigorous proof of one of the limit laws. The {term:triangle inequality} is used at a key point of the proof, so we first review this key property of absolute value.

:::note [definition] Definition
The **triangle inequality** states that if *a* and *b* are any real numbers, then $|a+b|\le |a|+|b|.$
:::

### Proof
We prove the following limit law: If $\lim_{x\to a}f(x)=L$ and $\lim_{x\to a}g(x)=M,$ then $\lim_{x\to a}(f(x)+g(x))=L+M.$
Let $ε>0.$
Choose ${δ}_{1}>0$ so that if $0<|x-a|<{δ}_{1},$ then $|f(x)-L|<ε\text{/}2.$
Choose ${δ}_{2}>0$ so that if $0<|x-a|<{δ}_{2},$ then $|g(x)-M|<ε\text{/}2.$
Choose $δ=\text{min}\{{δ}_{1},{δ}_{2}\}.$
Assume $0<|x-a|<δ.$
Thus,

$0<|x-a|<{δ}_{1}\;\text{and}\;0<|x-a|<{δ}_{2}.$  {eq:fs-id1170572163746}

Hence,

$\begin{array}{rl}|(f(x)+g(x))-(L+M)| & =|(f(x)-L)+(g(x)-M)| \\ & \le |f(x)-L|+|g(x)-M| \\ & <\frac{ε}{2}+\frac{ε}{2}=ε.\end{array}$  {eq:fs-id1170571657223}

□
We now explore what it means for a limit not to exist. The limit $\lim_{x\to a}f(x)$ does not exist if there is no real number *L* for which $\lim_{x\to a}f(x)=L.$ Thus, for all real numbers *L*, $\lim_{x\to a}f(x)≠L.$ To understand what this means, we look at each part of the definition of $\lim_{x\to a}f(x)=L$ together with its opposite. A translation of the definition is given in [ref:fs-id1170571696614].

> TABLE {tab:fs-id1170571696614} cols=2
> title: Translation of the Definition of $\lim_{x\to a}f(x)=L$ and its Opposite
> summary: A table with two columns and four rows. The top row contains the headers “definition” and “opposite.” The second row contains the definition “for every epsilon < 0” and the opposite “there exists an epsilon greater than zero so that.” The third row contains the definition “there exists a delta greater than 0, so that” and the opposite “for every delta greater than 0.” The last row contains the definition “if 0 is less than the absolute value of x-a, which is less than delta, then the absolute value of f(x) – L is less than epsilon” and the opposite “there is an x satisfying 0 is less than the absolute value of x – a, which is less than delta, so that the absolute value of f() – L is greater than or equal to epsilon.

| **Definition** | **Opposite** |
| --- | --- |
| 1. For every $ε>0,$ | 1. There exists $ε>0$ so that |
| 2. there exists a $δ>0,$ so that | 2. for every $δ>0,$ |
| 3. if $0<|x-a|<δ,$ then $|f(x)-L|<ε.$ | 3. There is an *x* satisfying $0<|x-a|<δ$ so that $|f(x)-L|\ge ε.$ |

Finally, we may state what it means for a limit not to exist. The limit $\lim_{x\to a}f(x)$ does not exist if for every real number *L*, there exists a real number $ε>0$ so that for all $δ>0,$ there is an *x* satisfying $0<|x-a|<δ,$ so that $|f(x)-L|\ge ε.$ Let’s apply this in [ref:fs-id1170572550055] to show that a limit does not exist.

:::example {ex:fs-id1170572550055} Showing That a Limit Does Not Exist

:::exercise {fs-id1170572559640} type= 
PROBLEM:
Show that $\lim_{x\to 0}\frac{|x|}{x}$ does not exist. The graph of $f(x)=|x|\text{/}x$ is shown here:

> IMAGE {img:fs-id1170572601124} src=../../media/CNX_Calc_Figure_02_05_006.jpg
> alt: A graph of a function with two segments. The first exists for x<0, and it is a line with no slope that ends at the y axis in an open circle at (0,-1). The second exists for x>0, and it is a line with no slope that begins at the y axis in an open circle (1,0).

SOLUTION:
Suppose that *L* is a candidate for a limit. Choose $ε=1\text{/}2.$
Let $δ>0.$ Either $L\ge 0$ or $L<0.$ If $L\ge 0,$ then let $x=-δ\text{/}2.$ Thus,

$|x-0|=|-\frac{δ}{2}-0|=\frac{δ}{2}<δ$  {eq:fs-id1170571733792}

and

$|\frac{|-\frac{δ}{2}|}{-\frac{δ}{2}}-L|=|−1-L|=L+1\ge 1>\frac{1}{2}=ε.$  {eq:fs-id1170572419032}

On the other hand, if $L<0,$ then let $x=δ\text{/}2.$ Thus,

$|x-0|=|\frac{δ}{2}-0|=\frac{δ}{2}<δ$  {eq:fs-id1170572332361}

and

$|\frac{|\frac{δ}{2}|}{\frac{δ}{2}}-L|=|1-L|=|L|+1\ge 1>\frac{1}{2}=ε.$  {eq:fs-id1170572243168}

Thus, for any value of *L*, $\lim_{x\to 0}\frac{|x|}{x}≠L.$
:::
:::

## One-Sided and Infinite Limits
Just as we first gained an intuitive understanding of limits and then moved on to a more rigorous definition of a limit, we now revisit one-sided limits. To do this, we modify the epsilon-delta definition of a limit to give formal epsilon-delta definitions for limits from the right and left at a point. These definitions only require slight modifications from the definition of the limit. In the definition of the limit from the right, the inequality $0<x-a<δ$ replaces $0<|x-a|<δ,$ which ensures that we only consider values of *x* that are greater than (to the right of) *a*. Similarly, in the definition of the limit from the left, the inequality $-δ<x-a<0$ replaces $0<|x-a|<δ,$ which ensures that we only consider values of *x* that are less than (to the left of) *a*.

:::note [definition] Definition
**Limit from the Right:** Let $f(x)$ be defined over an open interval of the form $(a,b)$ where $a<b.$ Then,

$\lim_{x\to {a}^{+}}f(x)=L$  {eq:fs-id1170571597343}

if for every $ε>0,$ there exists a $δ>0$ such that if $0<x-a<δ,$ then $|f(x)-L|<ε.$
**Limit from the Left:** Let $f(x)$ be defined over an open interval of the form $(b,a)$ where $b<a.$ Then,

$\lim_{x\to {a}^{-}}f(x)=L$  {eq:fs-id1170572419122}

if for every $ε>0,$ there exists a $δ>0$ such that if $-δ<x-a<0,$ then $|f(x)-L|<ε.$
:::

:::example {ex:fs-id1170572330921} Proving a Statement about a Limit From the Right

:::exercise {fs-id1170572330924} type= 
PROBLEM:
Prove that $\lim_{x\to {4}^{+}}\sqrt{x-4}=0.$
SOLUTION:
Let $ε>0.$
Choose $δ={ε}^{2}.$ Since we ultimately want $|\sqrt{x-4}-0|<ε,$ we manipulate this inequality to get $\sqrt{x-4}<ε$ or, equivalently, $0<x-4<{ε}^{2},$ making $δ={ε}^{2}$ a clear choice. We may also determine $δ$ geometrically, as shown in [ref:CNX_Calc_Figure_02_05_004].

> FIGURE {fig:CNX_Calc_Figure_02_05_004} src=../../media/CNX_Calc_Figure_02_05_004.jpg
> alt: A graph showing how to find delta for the above proof. The function f(x) = sqrt(x-4) is drawn for x > 4. Since the proposed limit is 0, lines y = 0 + epsilon and y = 0 – epsilon are drawn  in blue. Since only the top blue line corresponding to y = 0 + epsilon intersects the function, one red line is drawn from the point of intersection to the x axis. This x value is found by solving sqrt(x-4) = epsilon, or x = epsilon squared + 4. Delta is then the distance between this point and 4, which is epsilon squared.
> caption: This graph shows how we find δ for the proof in [ref:fs-id1170572330921].

Assume $0<x-4<δ.$ Thus, $0<x-4<{ε}^{2}.$ Hence, $0<\sqrt{x-4}<ε.$ Finally, $|\sqrt{x-4}-0|<ε.$
Therefore, $\lim_{x\to {4}^{+}}\sqrt{x-4}=0.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571711158} type= 
PROBLEM:
Find $δ$ corresponding to *ε* for a proof that $\lim_{x\to {1}^{-}}\sqrt{1-x}=0.$
SOLUTION:
$δ={ε}^{2}$
COMMENTARY: Hint
Sketch the graph and use [ref:fs-id1170572330921] as a solving guide.
:::
:::
We conclude the process of converting our intuitive ideas of various types of limits to rigorous formal definitions by pursuing a formal definition of infinite limits. To have $\lim_{x\to a}f(x)=\text{+}\infty ,$ we want the values of the function $f(x)$ to get larger and larger as *x* approaches *a*. Instead of the requirement that $|f(x)-L|<ε$ for arbitrarily small *ε* when $0<|x-a|<δ$ for small enough $δ,$ we want $f(x)>M$ for arbitrarily large positive *M* when $0<|x-a|<δ$ for small enough $δ.$ [ref:CNX_Calc_Figure_02_05_005] illustrates this idea by showing the value of $δ$ for successively larger values of *M*.

> FIGURE {fig:CNX_Calc_Figure_02_05_005} src=../../media/CNX_Calc_Figure_02_05_005.jpg
> alt: Two graphs side by side. Each graph contains two curves above the x axis separated by an asymptote at x=a. The curves on the left go to infinity as x goes to a and to 0 as x goes to negative infinity. The curves on the right go to infinity as x goes to a and to 0 as x goes to infinity. The first graph has a value M greater than zero marked on the y axis and a horizontal line drawn from there (y=M) to intersect with both curves. Lines are drawn down from the points of intersection to the x axis. Delta is the smaller of the distances between point a and these new spots on the x axis. The same lines are drawn on the second graph, but this M is larger, and the distances from the x axis intersections to point a are smaller.
> caption: These graphs plot values of $δ$ for *M* to show that $\lim_{x\to a}f(x)=\text{+}\infty .$

:::note [definition] Definition
Let $f(x)$ be defined for all $x≠a$ in an open interval containing *a*. Then, we have an infinite limit

$\lim_{x\to a}f(x)=\text{+}\infty$  {eq:fs-id1170571635969}

if for every $M>0,$ there exists $δ>0$ such that if $0<|x-a|<δ,$ then $f(x)>M.$
Let $f(x)$ be defined for all $x≠a$ in an open interval containing *a*. Then, we have a negative infinite limit

$\lim_{x\to a}f(x)=\text{−}\infty$  {eq:fs-id1170571600638}

if for every $M>0,$ there exists $δ>0$ such that if $0<|x-a|<δ,$ then $f(x)<\text{−}M.$
:::

## Key Concepts {section:key-concepts}
- The intuitive notion of a limit may be converted into a rigorous mathematical definition known as the *epsilon-delta definition of the limit*.
- The epsilon-delta definition may be used to prove statements about limits.
- The epsilon-delta definition of a limit may be modified to define one-sided limits.

##  {section:section-exercises}
In the following exercises, write the appropriate $ε$-$δ$ definition for each of the given statements.

:::exercise {fs-id1170572551886} type= 
PROBLEM:
$\lim_{x\to a}f(x)=N$
:::

:::exercise {fs-id1170572233832} type= 
PROBLEM:
$\lim_{t\to b}g(t)=M$
SOLUTION:
For every $ε>0,$ there exists a $δ>0,$ so that if $0<|t-b|<δ,$ then $|g(t)-M|<ε$
:::

:::exercise {fs-id1170571636309} type= 
PROBLEM:
$\lim_{x\to c}h(x)=L$
:::

:::exercise {fs-id1170572294410} type= 
PROBLEM:
$\lim_{x\to a}φ(x)=A$
SOLUTION:
For every $ε>0,$ there exists a $δ>0,$ so that if $0<|x-a|<δ,$ then $|φ(x)-A|<ε$
:::
The following graph of the function *f* satisfies $\lim_{x\to 2}f(x)=2.$ In the following exercises, determine a value of $δ>0$ that satisfies each statement.

> IMAGE {img:fs-id1170571699039} src=../../media/CNX_Calc_Figure_02_05_204.jpg
> alt: A function drawn in quadrant one for x > 0. It is an increasing concave up function, with points approximately (0,0), (1, .5), (2,2), and (3,4).

:::exercise {fs-id1170571699048} type= 
PROBLEM:
If $0<|x-2|<δ,$ then $|f(x)-2|<1.$
:::

:::exercise {fs-id1170572338483} type= 
PROBLEM:
If $0<|x-2|<δ,$ then $|f(x)-2|<0.5.$
SOLUTION:
$δ\le 0.25$
:::
The following graph of the function *f* satisfies $\lim_{x\to 3}f(x)=−1.$ In the following exercises, determine a value of $δ>0$ that satisfies each statement.

> IMAGE {img:fs-id1170572622508} src=../../media/CNX_Calc_Figure_02_05_205.jpg
> alt: A graph of a decreasing linear function, with points (0,2), (1,1), (2,0), (3,-1), (4,-2), and so on for x >= 0.

:::exercise {fs-id1170572624813} type= 
PROBLEM:
If $0<|x-3|<δ,$ then $|f(x)+1|<1.$
:::

:::exercise {fs-id1170571637496} type= 
PROBLEM:
If $0<|x-3|<δ,$ then $|f(x)+1|<2.$
SOLUTION:
$δ\le 2$
:::
The following graph of the function *f* satisfies $\lim_{x\to 3}f(x)=2.$ In the following exercises, for each value of *ε*, find a value of $δ>0$ such that the precise definition of limit holds true.

> IMAGE {img:fs-id1170572618061} src=../../media/CNX_Calc_Figure_02_05_206.jpg
> alt: A graph of an increasing linear function intersecting the x axis at about (2.25, 0) and going through the points (3,2) and, approximately, (1,-5) and (4,5).

:::exercise {fs-id1170572618071} type= 
PROBLEM:
$ε=1.5$
:::

:::exercise {fs-id1170572618102} type= 
PROBLEM:
$ε=3$
SOLUTION:
$δ\le 1$
:::
**[T]** In the following exercises, use a graphing calculator to find a number $δ$ such that the statements hold true.

:::exercise {fs-id1170572601177} type= 
PROBLEM:
$|\text{sin}\;(2x)-\frac{1}{2}|<0.1,$ whenever $|x-\frac{\pi}{12}|<δ$
:::

:::exercise {fs-id1170571599654} type= 
PROBLEM:
$|\sqrt{x-4}-2|<0.1,\;\text{whenever}\;|x-8|<δ$
SOLUTION:
$δ<0.3900$
:::
In the following exercises, use the precise definition of limit to prove the given limits.

:::exercise {fs-id1170572551803} type= 
PROBLEM:
$\lim_{x\to 2}(5x+8)=18$
:::

:::exercise {fs-id1170572448375} type= 
PROBLEM:
$\lim_{x\to 3}\frac{{x}^{2}-9}{x-3}=6$
SOLUTION:
Let $δ=ε.$ If $0<|x-3|<ε,$ then $|x+3-6|=|x-3|<ε.$
:::

:::exercise {fs-id1170571610972} type= 
PROBLEM:
$\lim_{x\to 2}\frac{2{x}^{2}-3x-2}{x-2}=5$
:::

:::exercise {fs-id1170572337116} type= 
PROBLEM:
$\lim_{x\to 0}{x}^{4}=0$
SOLUTION:
Let $δ=\sqrt[4]{ε}.$ If $0<|x|<\sqrt[4]{ε},$ then $|{x}^{4}|={x}^{4}<ε.$
:::

:::exercise {fs-id1170572163828} type= 
PROBLEM:
$\lim_{x\to 2}({x}^{2}+2x)=8$
:::
In the following exercises, use the precise definition of limit to prove the given one-sided limits.

:::exercise {fs-id1170571599727} type= 
PROBLEM:
$\lim_{x\to {5}^{-}}\sqrt{5-x}=0$
SOLUTION:
Let $δ={ε}^{2}.$ If $5-{ε}^{2}<x<5,$ then $|\sqrt{5-x}|=\sqrt{5-x}<ε.$
:::

:::exercise {fs-id1170572217461} type= 
PROBLEM:
$\lim_{x\to {0}^{+}}f(x)=−2,\;\text{where}\;f(x)=\{\begin{array}{l}8x-3,\;\text{if}\;x<0 \\ 4x-2,\;\text{if}\;x\ge 0\end{array}.$
:::

:::exercise {fs-id1170571547600} type= 
PROBLEM:
$\lim_{x\to {1}^{-}}f(x)=3,\;\text{where}\;f(x)=\{\begin{array}{l}5x-2,\;\text{if}\;x<1 \\ 7x-1,\;\text{if}\;x\ge 1\end{array}.$
SOLUTION:
Let $δ=ε\text{/}5.$ If $1-ε\text{/}5<x<1,$ then $|f(x)-3|=5x-5<ε.$
:::
In the following exercises, use the precise definition of limit to prove the given infinite limits.

:::exercise {fs-id1170571733891} type= 
PROBLEM:
$\lim_{x\to 0}\frac{1}{{x}^{2}}=\infty$
:::

:::exercise {fs-id1170572233865} type= 
PROBLEM:
$\lim_{x\to −1}\frac{3}{{(x+1)}^{2}}=\infty$
SOLUTION:
Let $δ=\sqrt{\frac{3}{M}}.$ If $0<|x+1|<\sqrt{\frac{3}{M}},$ then $f(x)=\frac{3}{{(x+1)}^{2}}>M.$
:::

:::exercise {fs-id1170572331909} type= 
PROBLEM:
$\lim_{x\to 2}-\frac{1}{{(x-2)}^{2}}=\text{−}\infty$
:::

:::exercise {fs-id1170571652896} type= 
PROBLEM:
An engineer is using a machine to cut a flat square of Aerogel of area 144 cm<sup>2</sup>. If there is a maximum error tolerance in the area of 8 cm<sup>2</sup>, how accurately must the engineer cut on the side, assuming all sides have the same length? How do these numbers relate to $δ,$ *ε*, *a*, and *L*?
SOLUTION:
The engineer must cut within 0.328 cm of 12 cm on each side; $ε=8,δ=0.328,a=12,L=144$
:::

:::exercise {fs-id1170572551905} type= 
PROBLEM:
Use the precise definition of limit to prove that the following limit does not exist: $\lim_{x\to 1}\frac{|x-1|}{x-1}.$
:::

:::exercise {fs-id1170572626566} type= 
PROBLEM:
Using precise definitions of limits, prove that $\lim_{x\to 0}f(x)$ does not exist, given that $f(x)$ is the ceiling function. (*Hint*: Try any $δ<1\text{.)}$
SOLUTION:
Answers may vary.
:::

:::exercise {fs-id1170571699078} type= 
PROBLEM:
Using precise definitions of limits, prove that $\lim_{x\to 0}f(x)$ does not exist: $f(x)=\{\begin{array}{l}1\;\text{if}\;x\;\text{is rational} \\ 0\;\text{if}\;x\;\text{is irrational}\end{array}.$ (*Hint*: Think about how you can always choose a rational number $0<r<d,$ but $|f(r)-0|=1\text{.)}$
:::

:::exercise {fs-id1170572444404} type= 
PROBLEM:
Using precise definitions of limits, determine $\lim_{x\to 0}f(x)$ for $f(x)=\{\begin{array}{l}x\;\text{if}\;x\;\text{is rational} \\ 0\;\text{if}\;x\;\text{is irrational}\end{array}.$ (*Hint*: Break into two cases, *x* rational and *x* irrational.)
SOLUTION:
0
:::

:::exercise {fs-id1170571661071} type= 
PROBLEM:
Using the function from the previous exercise, use the precise definition of limits to show that $\lim_{x\to a}f(x)$ does not exist for $a≠0.$
:::
For the following exercises, suppose that $\lim_{x\to a}f(x)=L$ and $\lim_{x\to a}g(x)=M$ both exist. Use the precise definition of limits to prove the following limit laws:

:::exercise {fs-id1170571653079} type= 
PROBLEM:
$\lim_{x\to a}(f(x)+g(x))=L+M$
SOLUTION:
$\begin{array}{l}\underset{x\to a}{lim}(f(x))+\underset{x\to a}{lim}(g(x)) \\ =L+M\end{array}$
:::

:::exercise {fs-id1170571613536} type= 
PROBLEM:
$\lim_{x\to a}[cf(x)]=cL$ for any real constant *c* (*Hint*: Consider two cases: $c=0$ and $c≠0\text{.)}$
:::

:::exercise {fs-id1170571712568} type= 
PROBLEM:
$\lim_{x\to a}[f(x)g(x)]=LM.$ (*Hint*: $|f(x)g(x)-LM|=$ $|f(x)g(x)-f(x)M+f(x)M-LM|\le |f(x)||g(x)-M|+|M||f(x)-L|\text{.)}$
SOLUTION:
Answers may vary.
:::

## Chapter Review Exercises {section:review-exercises}
*True or False*. In the following exercises, justify your answer with a proof or a counterexample.

:::exercise {fs-id1170572565358} type= 
PROBLEM:
A function has to be continuous at $x=a$ if the $\lim_{x\to a}f(x)$ exists.
:::

:::exercise {fs-id1170571653946} type= 
PROBLEM:
You can use the quotient rule to evaluate $\lim_{x\to 0}\frac{\text{sin}\;x}{x}.$
SOLUTION:
False
:::

:::exercise {fs-id1170572184294} type= 
PROBLEM:
If there is a vertical asymptote at $x=a$ for the function $f(x),$ then *f* is undefined at the point $x=a.$
:::

:::exercise {fs-id1170572184348} type= 
PROBLEM:
If $\lim_{x\to a}f(x)$ does not exist, then *f* is undefined at the point $x=a.$
SOLUTION:
False. A removable discontinuity is possible.
:::

:::exercise {fs-id1170571597431} type= 
PROBLEM:
Using the graph, find each limit or explain why the limit does not exist.
a. $\lim_{x\to −1}f(x)$
b. $\lim_{x\to 1}f(x)$
c. $\lim_{x\to {0}^{+}}f(x)$
d. $\lim_{x\to 2}f(x)$

> IMAGE {img:fs-id1170572480576} src=../../media/CNX_Calc_Figure_02_05_207.jpg
> alt: A graph of a piecewise function with several segments. The first is a decreasing concave up curve existing for x < -1. It ends at an open circle at (-1, 1). The second is an increasing linear function starting at (-1, -2) and ending at (0,-1). The third is an increasing concave down curve existing from an open circle at (0,0) to an open circle at (1,1). The fourth is a closed circle at (1,-1). The fifth is a line with no slope existing for x > 1, starting at the open circle at (1,1).

:::
In the following exercises, evaluate the limit algebraically or explain why the limit does not exist.

:::exercise {fs-id1170572330123} type= 
PROBLEM:
$\lim_{x\to 2}\frac{2{x}^{2}-3x-2}{x-2}$
SOLUTION:
5
:::

:::exercise {fs-id1170572330182} type= 
PROBLEM:
$\lim_{x\to 0}3{x}^{2}-2x+4$
:::

:::exercise {fs-id1170572373426} type= 
PROBLEM:
$\lim_{x\to 3}\frac{{x}^{3}-2{x}^{2}-1}{3x-2}$
SOLUTION:
$8\text{/}7$
:::

:::exercise {fs-id1170571733984} type= 
PROBLEM:
$\lim_{x\to \pi \text{/}2}\frac{\text{cot}\;x}{\text{cos}\;x}$
:::

:::exercise {fs-id1170571734031} type= 
PROBLEM:
$\lim_{x\to −5}\frac{{x}^{2}+25}{x+5}$
SOLUTION:
DNE
:::

:::exercise {fs-id1170571636182} type= 
PROBLEM:
$\lim_{x\to 2}\frac{3{x}^{2}-2x-8}{{x}^{2}-4}$
:::

:::exercise {fs-id1170572510092} type= 
PROBLEM:
$\lim_{x\to 1}\frac{{x}^{2}-1}{{x}^{3}-1}$
SOLUTION:
$2\text{/}3$
:::

:::exercise {fs-id1170572510154} type= 
PROBLEM:
$\lim_{x\to 1}\frac{{x}^{2}-1}{\sqrt{x}-1}$
:::

:::exercise {fs-id1170572419270} type= 
PROBLEM:
$\lim_{x\to 4}\frac{4-x}{\sqrt{x}-2}$
SOLUTION:
−4;
:::

:::exercise {fs-id1170572601237} type= 
PROBLEM:
$\lim_{x\to 4}\frac{1}{\sqrt{x}-2}$
:::
In the following exercises, use the squeeze theorem to prove the limit.

:::exercise {fs-id1170572601282} type= 
PROBLEM:
$\lim_{x\to 0}{x}^{2}\text{cos}\;(2\pi x)=0$
SOLUTION:
Since $−1\le \text{cos}(2\pi x)\le 1,$ then $-{x}^{2}\le {x}^{2}\text{cos}(2\pi x)\le {x}^{2}.$ Since $\lim_{x\to 0}{x}^{2}=0=\lim_{x\to 0}-{x}^{2},$ it follows that $\lim_{x\to 0}{x}^{2}\text{cos}\;(2\pi x)=0.$
:::

:::exercise {fs-id1170572401275} type= 
PROBLEM:
$\lim_{x\to 0}{x}^{3}\text{sin}\;(\frac{\pi}{x})=0$
:::

:::exercise {fs-id1170571638260} type= 
PROBLEM:
Determine the domain such that the function $f(x)=\sqrt{x-2}+x{e}^{x}$ is continuous over its domain.
SOLUTION:
$[2,\infty ]$
:::
In the following exercises, determine the value of *c* such that the function remains continuous. Draw your resulting function to ensure it is continuous.

:::exercise {fs-id1170571697209} type= 
PROBLEM:
$f(x)=\{\begin{array}{l}{x}^{2}+1,x>c \\ 2x,x\le c\end{array}$
:::

:::exercise {fs-id1170571539172} type= 
PROBLEM:
$f(x)=\{\begin{array}{l}\sqrt{x+1},x>\text{−}1 \\ {x}^{2}+c,x\le -1\end{array}$
SOLUTION:
$c=−1$
:::
In the following exercises, use the precise definition of limit to prove the limit.

:::exercise {fs-id1170572609501} type= 
PROBLEM:
$\lim_{x\to 1}(8x+16)=24$
:::

:::exercise {fs-id1170571710664} type= 
PROBLEM:
$\lim_{x\to 0}{x}^{3}=0$
SOLUTION:
$δ=\sqrt[3]{ε}$
:::

:::exercise {fs-id1170571710715} type= 
PROBLEM:
A ball is thrown into the air and the vertical position is given by $x(t)=−4.9{t}^{2}+25t+5.$ Use the Intermediate Value Theorem to show that the ball must land on the ground sometime between 5 sec and 6 sec after the throw.
:::

:::exercise {fs-id1170572218614} type= 
PROBLEM:
A particle moving along a line has a displacement according to the function $x(t)={t}^{2}-2t+4,$ where *x* is measured in meters and *t* is measured in seconds. Find the average velocity over the time period $t=[0,2].$
SOLUTION:
$0\;\text{m}\text{/}\text{sec}$
:::

:::exercise {fs-id1170572386138} type= 
PROBLEM:
From the previous exercises, estimate the instantaneous velocity at $t=2$ by checking the average velocity within $t=0.01\;\text{sec}\text{.}$
:::

## Glossary
- {def} **epsilon-delta definition of the limit**: $\lim_{x\to a}f(x)=L$ if for every $ε>0,$ there exists a $δ>0$ such that if $0<|x-a|<δ,$ then $|f(x)-L|<ε$
- {def} **triangle inequality**: If *a* and *b* are any real numbers, then $|a+b|\le |a|+|b|$

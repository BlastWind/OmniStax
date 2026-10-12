# Derivatives of Trigonometric Functions

## Learning Objectives {section:learning-objectives}
- Find the derivatives of the sine and cosine function.
- Find the derivatives of the standard trigonometric functions.
- Calculate the higher-order derivatives of the sine and cosine.

One of the most important types of motion in physics is simple harmonic motion, which is associated with such systems as an object with mass oscillating on a spring. Simple harmonic motion can be described by using either sine or cosine functions. In this section we expand our knowledge of derivative formulas to include derivatives of these and other trigonometric functions. We begin with the derivatives of the sine and cosine functions and then use them to obtain formulas for the derivatives of the remaining four trigonometric functions. Being able to calculate the derivatives of the sine and cosine functions will enable us to find the velocity and acceleration of simple harmonic motion.

## Derivatives of the Sine and Cosine Functions
We begin our exploration of the derivative for the sine function by using the formula to make a reasonable guess at its derivative. Recall that for a function $f(x),$

${f}^{'}(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}.$  {eq:fs-id1169739055116}

Consequently, for values of $h$ very close to 0, ${f}^{'}(x)\approx \frac{f(x+h)-f(x)}{h}.$ We see that by using $h=0.01,$

$\frac{d}{dx}(\text{sin}\;x)\approx \frac{\text{sin}\;(x+0.01)-\text{sin}\;x}{0.01}$  {eq:fs-id1169738997799}

By setting $D(x)=\frac{\text{sin}\;(x+0.01)-\text{sin}\;x}{0.01}$ and using a graphing utility, we can get a graph of an approximation to the derivative of $\text{sin}\;x$ ([ref:CNX_Calc_Figure_03_05_001]).

> FIGURE {fig:CNX_Calc_Figure_03_05_001} src=../../media/CNX_Calc_Figure_03_05_001.jpg
> alt: The function D(x) = (sin(x + 0.01) − sin x)/0.01 is graphed. It looks a lot like a cosine curve.
> caption: The graph of the function $D(x)$ looks a lot like a cosine curve.

Upon inspection, the graph of $D(x)$ appears to be very close to the graph of the cosine function. Indeed, we will show that

$\frac{d}{dx}(\text{sin}\;x)=\text{cos}\;x.$  {eq:fs-id1169739009210}

If we were to follow the same steps to approximate the derivative of the cosine function, we would find that

$\frac{d}{dx}(\text{cos}\;x)=\text{−}\text{sin}\;x.$  {eq:fs-id1169738962070}

:::note [theorem] The Derivatives of sin *x* and cos *x*
The derivative of the sine function is the cosine and the derivative of the cosine function is the negative sine.

$$ \frac{d}{dx}(\text{sin}\;x)=\text{cos}\;x $$  {eq:fs-id1169738884040}

$$ \frac{d}{dx}(\text{cos}\;x)=\text{−}\text{sin}\;x $$  {eq:fs-id1169739096692}

:::

### Proof
Because the proofs for $\frac{d}{dx}(\text{sin}\;x)=\text{cos}\;x$ and $\frac{d}{dx}(\text{cos}\;x)=\text{−}\text{sin}\;x$ use similar techniques, we provide only the proof for $\frac{d}{dx}(\text{sin}\;x)=\text{cos}\;x.$ Before beginning, recall two important trigonometric limits we learned in [Introduction to Limits](module:m53483):

$\lim_{h\to 0}\frac{\text{sin}\;h}{h}=1\;\text{and}\;\lim_{h\to 0}\frac{\text{cos}\;h-1}{h}=0.$  {eq:fs-id1169738960853}

The graphs of $y=\frac{(\text{sin}\;h)}{h}$ and $y=\frac{(\text{cos}\;h-1)}{h}$ are shown in [ref:CNX_Calc_Figure_03_05_002].

> FIGURE {fig:CNX_Calc_Figure_03_05_002} src=../../media/CNX_Calc_Figure_03_05_002.jpg
> alt: The function y = (sin h)/h and y = (cos h – 1)/h are graphed. They both have discontinuities on the y-axis.
> caption: These graphs show two important limits needed to establish the derivative formulas for the sine and cosine functions.

We also recall the following trigonometric identity for the sine of the sum of two angles:

$\text{sin}\;(x+h)=\text{sin}\;x\;\text{cos}\;h+\text{cos}\;x\;\text{sin}\;h.$  {eq:fs-id1169739027491}

Now that we have gathered all the necessary equations and identities, we proceed with the proof.

$\begin{array}{rllll}\frac{d}{dx}\;\text{sin}\;x & =\lim_{h\to 0}\frac{\text{sin}\;(x+h)-\text{sin}\;x}{h} & & & \text{Apply the definition}\;\text{of the derivative.} \\ & =\lim_{h\to 0}\frac{\text{sin}\;x\;\text{cos}\;h+\text{cos}\;x\;\text{sin}\;h-\text{sin}\;x}{h} & & & \text{Use trig identity for the sine of the sum of two angles.} \\ & =\lim_{h\to 0}(\frac{\text{sin}\;x\;\text{cos}\;h-\text{sin}\;x}{h}+\frac{\text{cos}\;x\;\text{sin}\;h}{h}) & & & \text{Regroup.} \\ & =\lim_{h\to 0}(\text{sin}\;x(\frac{\text{cos}\;h-1}{h})+\text{cos}\;x(\frac{\text{sin}\;h}{h})) & & & \text{Factor out}\;\text{sin}\;x\;\text{and}\;\text{cos}\;x. \\ & =\text{sin}\;x\cdot 0+\text{cos}\;x\cdot 1 & & & \text{Apply trig limit formulas.} \\ & =\text{cos}\;x & & & \text{Simplify.}\end{array}$  {eq:fs-id1169738881072}

□
[ref:CNX_Calc_Figure_03_05_003] shows the relationship between the graph of $f(x)=\text{sin}\;x$ and its derivative ${f}^{'}(x)=\text{cos}\;x.$ Notice that at the points where $f(x)=\text{sin}\;x$ has a horizontal tangent, its derivative ${f}^{'}(x)=\text{cos}\;x$ takes on the value zero. We also see that where $f(x)=\text{sin}\;x$ is increasing, ${f}^{'}(x)=\text{cos}\;x>0$ and where $f(x)=\text{sin}\;x$ is decreasing, ${f}^{'}(x)=\text{cos}\;x<0.$

> FIGURE {fig:CNX_Calc_Figure_03_05_003} src=../../media/CNX_Calc_Figure_03_05_003.jpg
> alt: The functions f(x) = sin x and f’(x) = cos x are graphed. It is apparent that when f(x) has a maximum or a minimum that f’(x) = 0.
> caption: Where $f(x)$ has a maximum or a minimum, $f'(x)=0$ that is, $f'(x)=0$ where $f(x)$ has a horizontal tangent. These points are noted with dots on the graphs.

:::example {ex:fs-id1169738999233} Differentiating a Function Containing sin *x*

:::exercise {fs-id1169738907624} type= 
PROBLEM:
Find the derivative of $f(x)=5{x}^{3}\text{sin}\;x.$
SOLUTION:
Using the product rule, we have

$\begin{array}{rl}f'(x) & =\frac{d}{dx}(5{x}^{3})\cdot \text{sin}\;x+\frac{d}{dx}(\text{sin}\;x)\cdot 5{x}^{3} \\ & =15{x}^{2}\cdot \text{sin}\;x+\text{cos}\;x\cdot 5{x}^{3}.\end{array}$  {eq:fs-id1169739001004}

After simplifying, we obtain

${f}^{'}(x)=15{x}^{2}\text{sin}\;x+5{x}^{3}\text{cos}\;x.$  {eq:fs-id1169739269866}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739327353} type= 
PROBLEM:
Find the derivative of $f(x)=\text{sin}\;x\;\text{cos}\;x.$
SOLUTION:
${f}^{'}(x)={\text{cos}}^{2}x-{\text{sin}}^{2}x$
COMMENTARY: Hint
Don’t forget to use the product rule.
:::
:::

:::example {ex:fs-id1169738889578} Finding the Derivative of a Function Containing cos *x*

:::exercise {fs-id1169736615213} type= 
PROBLEM:
Find the derivative of $g(x)=\frac{\text{cos}\;x}{4{x}^{2}}.$
SOLUTION:
By applying the quotient rule, we have

${g}^{'}(x)=\frac{(\text{−}\text{sin}\;x)4{x}^{2}-8x(\text{cos}\;x)}{{(4{x}^{2})}^{2}}.$  {eq:fs-id1169738960497}

Simplifying, we obtain

$\begin{array}{rl}{g}^{'}(x) & =\frac{−4{x}^{2}\text{sin}\;x-8x\;\text{cos}\;x}{16{x}^{4}} \\ & =\frac{\text{−}x\;\text{sin}\;x-2\;\text{cos}\;x}{4{x}^{3}}.\end{array}$  {eq:fs-id1169739179211}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738971411} type= 
PROBLEM:
Find the derivative of $f(x)=\frac{x}{\text{cos}\;x}.$
SOLUTION:
$\frac{\text{cos}\;x+x\;\text{sin}\;x}{{\text{cos}}^{2}x}$
COMMENTARY: Hint
Use the quotient rule.
:::
:::

:::example {ex:fs-id1169739220928} An Application to Velocity

:::exercise {fs-id1169739220930} type= 
PROBLEM:
A particle moves along a coordinate axis in such a way that its position at time $t$ is given by $s(t)=2\;\text{sin}\;t-t$ for $0\le t\le 2\pi .$ At what times is the particle at rest?
SOLUTION:
To determine when the particle is at rest, set ${s}^{'}(t)=v(t)=0.$ Begin by finding ${s}^{'}(t).$ We obtain

${s}^{'}(t)=2\;\text{cos}\;t-1,$  {eq:fs-id1169739000177}

so we must solve

$2\;\text{cos}\;t-1=0\;\text{for}\;0\le t\le 2\pi .$  {eq:fs-id1169739188455}

The solutions to this equation are $t=\frac{\pi}{3}$ and $t=\frac{5\pi}{3}.$ Thus the particle is at rest at times $t=\frac{\pi}{3}$ and $t=\frac{5\pi}{3}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739327877} type= 
PROBLEM:
A particle moves along a coordinate axis. Its position at time $t$ is given by $s(t)=\sqrt{3}t+2\;\text{cos}\;t$ for $0\le t\le 2\pi .$ At what times is the particle at rest?
SOLUTION:
$t=\frac{\pi}{3},t=\frac{2\pi}{3}$
COMMENTARY: Hint
Use the previous example as a guide.
:::
:::

## Derivatives of Other Trigonometric Functions
Since the remaining four trigonometric functions may be expressed as quotients involving sine, cosine, or both, we can use the quotient rule to find formulas for their derivatives.

:::example {ex:fs-id1169736589199} The Derivative of the Tangent Function

:::exercise {fs-id1169736589201} type= 
PROBLEM:
Find the derivative of $f(x)=\text{tan}\;x.$
SOLUTION:
Start by expressing $\text{tan}\;x$ as the quotient of $\text{sin}\;x$ and $\text{cos}\;x:$

$f(x)=\text{tan}\;x=\frac{\text{sin}\;x}{\text{cos}\;x}.$  {eq:fs-id1169736655821}

Now apply the quotient rule to obtain

${f}^{'}(x)=\frac{\text{cos}\;x\;\text{cos}\;x-(\text{−}\text{sin}\;x)\text{sin}\;x}{{(\text{cos}\;x)}^{2}}.$  {eq:fs-id1169736615157}

Simplifying, we obtain

${f}^{'}(x)=\frac{{\text{cos}}^{2}x+{\;\text{sin}}^{2}x}{{\text{cos}}^{2}x}.$  {eq:fs-id1169739111154}

Recognizing that ${\text{cos}}^{2}x+{\text{sin}}^{2}x=1,$ by the Pythagorean theorem, we now have

${f}^{'}(x)=\frac{1}{{\text{cos}}^{2}x}.$  {eq:fs-id1169739190112}

Finally, use the identity $\text{sec}\;x=\frac{1}{\text{cos}\;x}$ to obtain

${f}^{'}(x)={\text{sec}}^{2}x.$  {eq:fs-id1169736656627}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739273066} type= 
PROBLEM:
Find the derivative of $f(x)=\text{cot}\;x.$
SOLUTION:
${f}^{'}(x)=\text{−}{\text{csc}}^{2}x$
COMMENTARY: Hint
Rewrite $\text{cot}\;x$ as $\frac{\text{cos}\;x}{\text{sin}\;x}$ and use the quotient rule.
:::
:::
The derivatives of the remaining trigonometric functions may be obtained by using similar techniques. We provide these formulas in the following theorem.

:::note [theorem] Derivatives of $\text{tan}\;x,\text{cot}\;x,\text{sec}\;x,$ and $\text{csc}\;x$
The derivatives of the remaining trigonometric functions are as follows:

$$ \frac{d}{dx}(\text{tan}\;x)={\text{sec}}^{2}x $$  {eq:fs-id1169739299822}

$$ \;\frac{d}{dx}(\text{cot}\;x)=\text{−}{\text{csc}}^{2}x $$  {eq:fs-id1169739301143}

$$ \hspace{1.4em}\frac{d}{dx}(\text{sec}\;x)=\text{sec}\;x\;\text{tan}\;x $$  {eq:fs-id1169739301181}

$$ \hspace{2.2em}\frac{d}{dx}(\text{csc}\;x)=\text{−}\text{csc}\;x\;\text{cot}\;x. $$  {eq:fs-id1169736658480}

:::

:::example {ex:fs-id1169739111296} Finding the Equation of a Tangent Line

:::exercise {fs-id1169739111298} type= 
PROBLEM:
Find the equation of a line tangent to the graph of $f(x)=\text{cot}\;x$ at $x=\frac{\pi}{4}.$
SOLUTION:
To find an equation of the tangent line, we need a point and a slope at that point. To find the point, compute

$f(\frac{\pi}{4})=\text{cot}\;\frac{\pi}{4}=1.$  {eq:fs-id1169736658878}

Thus the tangent line passes through the point $(\frac{\pi}{4},1).$ Next, find the slope by finding the derivative of $f(x)=\text{cot}\;x$ and evaluating it at $\frac{\pi}{4}\text{:}$

${f}^{'}(x)=\text{−}{\text{csc}}^{2}x\;\text{and}\;{f}^{'}(\frac{\pi}{4})=\text{−}{\text{csc}}^{2}(\frac{\pi}{4})=−2.$  {eq:fs-id1169736589231}

Using the point-slope equation of the line, we obtain

$y-1=−2(x-\frac{\pi}{4})$  {eq:fs-id1169739111218}

or equivalently,

$y=−2x+1+\frac{\pi}{2}.$  {eq:fs-id1169739336038}

:::
:::

:::example {ex:fs-id1169736655845} Finding the Derivative of Trigonometric Functions

:::exercise {fs-id1169736655848} type= 
PROBLEM:
Find the derivative of $f(x)=\text{csc}\;x+x\;\text{tan}\;x.$
SOLUTION:
To find this derivative, we must use both the sum rule and the product rule. Using the sum rule, we find

${f}^{'}(x)=\frac{d}{dx}(\text{csc}\;x)+\frac{d}{dx}(x\;\text{tan}\;x).$  {eq:fs-id1169736610100}

In the first term, $\frac{d}{dx}(\text{csc}\;x)=\text{−}\text{csc}\;x\;\text{cot}\;x,$ and by applying the product rule to the second term we obtain

$\frac{d}{dx}(x\;\text{tan}\;x)=(1)(\text{tan}\;x)+({\text{sec}}^{2}x)(x).$  {eq:fs-id1169739182390}

Therefore, we have

${f}^{'}(x)=\text{−}\text{csc}\;x\;\text{cot}\;x+\text{tan}\;x+x\;{\text{sec}}^{2}x.$  {eq:fs-id1169739265938}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739188146} type= 
PROBLEM:
Find the derivative of $f(x)=2\;\text{tan}\;x-3\;\text{cot}\;x.$
SOLUTION:
${f}^{'}(x)=2\;{\text{sec}}^{2}x+3\;{\text{csc}}^{2}x$
COMMENTARY: Hint
Use the rule for differentiating a constant multiple and the rule for differentiating a difference of two functions.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736662630} type= 
PROBLEM:
Find the slope of the line tangent to the graph of $f(x)=\text{tan}\;x$ at $x=\frac{\pi}{6}.$
SOLUTION:
$\frac{4}{3}$
COMMENTARY: Hint
Evaluate the derivative at $x=\frac{\pi}{6}.$
:::
:::

## Higher-Order Derivatives
The higher-order derivatives of $\text{sin}\;x$ and $\text{cos}\;x$ follow a repeating pattern. By following the pattern, we can find any higher-order derivative of $\text{sin}\;x$ and $\text{cos}\;x.$

:::example {ex:fs-id1169739303827} Finding Higher-Order Derivatives of $y=\text{sin}\;x$

:::exercise {fs-id1169739303829} type= 
PROBLEM:
Find the first four derivatives of $y=\text{sin}\;x.$
SOLUTION:
Each step in the chain is straightforward:

$\begin{array}{rll}y & = & \text{sin}\;x \\ \frac{dy}{dx} & = & \text{cos}\;x \\ \frac{{d}^{2}y}{d{x}^{2}} & = & \text{−}\text{sin}\;x \\ \frac{{d}^{3}y}{d{x}^{3}} & = & \text{−}\text{cos}\;x \\ \frac{{d}^{4}y}{d{x}^{4}} & = & \text{sin}\;x.\end{array}$  {eq:fs-id1169739303874}

COMMENTARY: Analysis
Once we recognize the pattern of derivatives, we can find any higher-order derivative by determining the step in the pattern to which it corresponds. For example, every fourth derivative of sin *x* equals sin *x*, so

$\begin{array}{l}\frac{{d}^{4}}{d{x}^{4}}(\text{sin}\;x)=\frac{{d}^{8}}{d{x}^{8}}(\text{sin}\;x)=\frac{{d}^{12}}{d{x}^{12}}(\text{sin}\;x)=\text{…}=\frac{{d}^{4n}}{d{x}^{4n}}(\text{sin}\;x)=\text{sin}\;x \\ \frac{{d}^{5}}{d{x}^{5}}(\text{sin}\;x)=\frac{{d}^{9}}{d{x}^{9}}(\text{sin}\;x)=\frac{{d}^{13}}{d{x}^{13}}(\text{sin}\;x)=\text{…}=\frac{{d}^{4n+1}}{d{x}^{4n+1}}(\text{sin}\;x)=\text{cos}\;x.\end{array}$  {eq:fs-id1169739284998}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739298012} type= 
PROBLEM:
For $y=\text{cos}\;x,$ find $\frac{{d}^{4}y}{d{x}^{4}}.$
SOLUTION:
$\text{cos}\;x$
COMMENTARY: Hint
See the previous example.
:::
:::

:::example {ex:fs-id1169739298086} Using the Pattern for Higher-Order Derivatives of $y=\text{sin}\;x$

:::exercise {fs-id1169739298088} type= 
PROBLEM:
Find $\frac{{d}^{74}}{d{x}^{74}}(\text{sin}\;x).$
SOLUTION:
We can see right away that for the 74th derivative of $\text{sin}\;x,74=4(18)+2,$ so

$\frac{{d}^{74}}{d{x}^{74}}(\text{sin}\;x)=\frac{{d}^{72+2}}{d{x}^{72+2}}(\text{sin}\;x)=\frac{{d}^{2}}{d{x}^{2}}(\text{sin}\;x)=\text{−}\text{sin}\;x.$  {eq:fs-id1169739293692}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736595964} type= 
PROBLEM:
For $y=\text{sin}\;x,$ find $\frac{{d}^{59}}{d{x}^{59}}(\text{sin}\;x).$
SOLUTION:
$\text{−}\text{cos}\;x$
COMMENTARY: Hint
$\frac{{d}^{59}}{d{x}^{59}}(\text{sin}\;x)=\frac{{d}^{4\cdot 14+3}}{d{x}^{4\cdot 14+3}}(\text{sin}\;x)$
:::
:::

:::example {ex:fs-id1169739376125} An Application to Acceleration

:::exercise {fs-id1169739376127} type= 
PROBLEM:
A particle moves along a coordinate axis in such a way that its position at time $t$ is given by $s(t)=2-\text{sin}\;t.$ Find $v(\pi \text{/}4)$ and $a(\pi \text{/}4).$ Compare these values and decide whether the particle is speeding up or slowing down.
SOLUTION:
First find $v(t)={s}^{'}(t)\text{:}$

$v(t)={s}^{'}(t)=\text{−}\text{cos}\;t.$  {eq:fs-id1169739345785}

Thus,

$v(\frac{\pi}{4})=-\frac{1}{\sqrt{2}}.$  {eq:fs-id1169739345832}

Next, find $a(t)={v}^{'}(t).$ Thus, $a(t)={v}^{'}(t)=\text{sin}\;t$ and we have

$a(\frac{\pi}{4})=\frac{1}{\sqrt{2}}.$  {eq:fs-id1169739345937}

Since $v(\frac{\pi}{4})=-\frac{1}{\sqrt{2}}<0$ and $a(\frac{\pi}{4})=\frac{1}{\sqrt{2}}>0,$ we see that velocity and acceleration are acting in opposite directions; that is, the object is being accelerated in the direction opposite to the direction in which it is travelling. Consequently, the particle is slowing down.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739273659} type= 
PROBLEM:
A block attached to a spring is moving vertically. Its position at time $t$ is given by $s(t)=2\;\text{sin}\;t.$ Find $v(\frac{5\pi}{6})$ and $a(\frac{5\pi}{6}).$ Compare these values and decide whether the block is speeding up or slowing down.
SOLUTION:
$v(\frac{5\pi}{6})=\text{−}\sqrt{3}<0$ and $a(\frac{5\pi}{6})=−1<0.$ The block is speeding up.
COMMENTARY: Hint
Use [ref:fs-id1169739376125] as a guide.
:::
:::

## Key Concepts {section:key-concepts}
- We can find the derivatives of sin *x* and cos *x* by using the definition of derivative and the limit formulas found earlier. The results are

$\frac{d}{dx}\;\text{sin}\;x=\text{cos}\;x\;\frac{d}{dx}\;\text{cos}\;x=\text{−}\text{sin}\;x.$  {eq:fs-id1169736589261}

- With these two formulas, we can determine the derivatives of all six basic trigonometric functions.

## Key Equations {section:key-equations}

> TABLE {tab:eip-492} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Derivative of sine function** | $\frac{d}{dx}(\text{sin}\;x)=\text{cos}\;x$ |
| **Derivative of cosine function** | $\frac{d}{dx}(\text{cos}\;x)=\text{−}\text{sin}\;x$ |
| **Derivative of tangent function** | $\frac{d}{dx}(\text{tan}\;x)={\text{sec}}^{2}x$ |
| **Derivative of cotangent function** | $\frac{d}{dx}(\text{cot}\;x)=\text{−}{\text{csc}}^{2}x$ |
| **Derivative of secant function** | $\frac{d}{dx}(\text{sec}\;x)=\text{sec}\;x\;\text{tan}\;x$ |
| **Derivative of cosecant function** | $\frac{d}{dx}(\text{csc}\;x)=\text{−}\text{csc}\;x\;\text{cot}\;x$ |

##  {section:section-exercises}
For the following exercises, find $\frac{dy}{dx}$ for the given functions.

:::exercise {fs-id1169736597649} type= 
PROBLEM:
$y={x}^{2}-\text{sec}\;x+1$
SOLUTION:
$\frac{dy}{dx}=2x-\text{sec}\;x\;\text{tan}\;x$
:::

:::exercise {fs-id1169736597729} type= 
PROBLEM:
$y=3\;\text{csc}\;x+\frac{5}{x}$
:::

:::exercise {fs-id1169736658534} type= 
PROBLEM:
$y={x}^{2}\text{cot}\;x$
SOLUTION:
$\frac{dy}{dx}=2x\;\text{cot}\;x-{x}^{2}{\text{csc}}^{2}x$
:::

:::exercise {fs-id1169736658614} type= 
PROBLEM:
$y=x-{x}^{3}\text{sin}\;x$
:::

:::exercise {fs-id1169739275164} type= 
PROBLEM:
$y=\frac{\text{sec}\;x}{x}$
SOLUTION:
$\frac{dy}{dx}=\frac{x\;\text{sec}\;x\;\text{tan}\;x-\text{sec}\;x}{{x}^{2}}$
:::

:::exercise {fs-id1169739275253} type= 
PROBLEM:
$y=\text{sin}\;x\;\text{tan}\;x$
:::

:::exercise {fs-id1169739303603} type= 
PROBLEM:
$y=(x+\text{cos}\;x)(1-\text{sin}\;x)$
SOLUTION:
$\frac{dy}{dx}=(1-\text{sin}\;x)(1-\text{sin}\;x)-\text{cos}\;x(x+\text{cos}\;x)$
:::

:::exercise {fs-id1169739303738} type= 
PROBLEM:
$y=\frac{\text{tan}\;x}{1-\text{sec}\;x}$
:::

:::exercise {fs-id1169739350812} type= 
PROBLEM:
$y=\frac{1-\text{cot}\;x}{1+\text{cot}\;x}$
SOLUTION:
$\frac{dy}{dx}=\frac{2\;{\text{csc}}^{2}x}{{(1+\text{cot}\;x)}^{2}}$
:::

:::exercise {fs-id1169736593529} type= 
PROBLEM:
$y=\text{cos}\;x(1+\text{csc}\;x)$
:::
For the following exercises, find an equation of the tangent line to each of the given functions at the indicated values of $x.$ Then use a calculator to graph both the function and the tangent line to ensure the equation for the tangent line is correct.

:::exercise {fs-id1169736593674} type= 
PROBLEM:
**[T]** $f(x)=\text{−}\text{sin}\;x,x=0$
SOLUTION:
$y=\text{−}x$

> IMAGE {img:fs-id1169739266655} src=../../media/CNX_Calc_Figure_03_05_201.jpg
> alt: The graph shows negative sin(x) and the straight line T(x) with slope −1 and y intercept 0.

:::

:::exercise {fs-id1169739266669} type= 
PROBLEM:
**[T]** $f(x)=\text{csc}\;x,x=\frac{\pi}{2}$
:::

:::exercise {fs-id1169739266742} type= 
PROBLEM:
**[T]** $f(x)=1+\text{cos}\;x,x=\frac{3\pi}{2}$
SOLUTION:
$y=x+\frac{2-3\pi}{2}$

> IMAGE {img:fs-id1169736655187} src=../../media/CNX_Calc_Figure_03_05_203.jpg
> alt: The graph shows the cosine function shifted up one and has the straight line T(x) with slope 1 and y intercept (2 – 3π)/2.

:::

:::exercise {fs-id1169736655200} type= 
PROBLEM:
**[T]** $f(x)=\text{sec}\;x,x=\frac{\pi}{4}$
:::

:::exercise {fs-id1169736655301} type= 
PROBLEM:
**[T]** $f(x)={x}^{2}-\text{tan}\;x,\;x=0$
SOLUTION:
$y=\text{−}x$

> IMAGE {img:fs-id1169739305478} src=../../media/CNX_Calc_Figure_03_05_205.jpg
> alt: The graph shows the function as starting at (−1, 3), decreasing to the origin, continuing to slowly decrease to about (1, −0.5), at which point it decreases very quickly.

:::

:::exercise {fs-id1169739305492} type= 
PROBLEM:
**[T]** $f(x)=5\;\text{cot}\;x,\;x=\frac{\pi}{4}$
:::
For the following exercises, find $\frac{{d}^{2}y}{d{x}^{2}}$ for the given functions.

:::exercise {fs-id1169739305614} type= 
PROBLEM:
$y=x\;\text{sin}\;x-\text{cos}\;x$
SOLUTION:
$3\;\text{cos}\;x-x\;\text{sin}\;x$
:::

:::exercise {fs-id1169736662308} type= 
PROBLEM:
$y=\text{sin}\;x\;\text{cos}\;x$
:::

:::exercise {fs-id1169736662371} type= 
PROBLEM:
$y=x-\frac{1}{2}\;\text{sin}\;x$
SOLUTION:
$\frac{1}{2}\;\text{sin}\;x$
:::

:::exercise {fs-id1169736662423} type= 
PROBLEM:
$y=\frac{1}{x}+\text{tan}\;x$
:::

:::exercise {fs-id1169739303429} type= 
PROBLEM:
$y=2\;\text{csc}\;x$
SOLUTION:
$2\text{csc}\;x({\text{csc}}^{2}x+{\text{cot}}^{2}x)$
:::

:::exercise {fs-id1169739303516} type= 
PROBLEM:
$y={\text{sec}}^{2}x$
:::

:::exercise {fs-id1169739335809} type= 
PROBLEM:
Find all $x$ values on the graph of $f(x)=−3\;\text{sin}\;x\;\text{cos}\;x$ where the tangent line is horizontal.
SOLUTION:
$\frac{(2n+1)\pi}{4},\text{where}\;n\;\text{is an integer}$
:::

:::exercise {fs-id1169739335906} type= 
PROBLEM:
Find all $x$ values on the graph of $f(x)=x-2\;\text{cos}\;x$ for $0<x<2\pi$ where the tangent line has slope 2.
:::

:::exercise {fs-id1169739335992} type= 
PROBLEM:
Let $f(x)=\text{cot}\;x.$ Determine the points on the graph of $f$ for $0<x<2\pi$ where the tangent line(s) is (are) parallel to the line $y=−2x.$
SOLUTION:
$(\frac{\pi}{4},1),(\frac{3\pi}{4},−1),(\frac{5\pi}{4},1),(\frac{7\pi}{4},-1)$
:::

:::exercise {fs-id1169736613947} type= 
PROBLEM:
**[T]** A mass on a spring bounces up and down in simple harmonic motion, modeled by the function $s(t)=−6\;\text{cos}\;t$ where $s$ is measured in inches and $t$ is measured in seconds. Find the rate at which the spring is oscillating at $t=5$ s.
:::

:::exercise {fs-id1169736614037} type= 
PROBLEM:
Let the position of a swinging pendulum in simple harmonic motion be given by $s(t)=a\;\text{cos}\;t+b\;\text{sin}\;t$ where $a$ and $b$ are constants, $t$ measures time in seconds, and $s$ measures position in centimeters. If the position is 0 cm and the velocity is 3 cm/s when $t=0$, find the values of $a$ and $b$.
SOLUTION:
$a=0,b=3$
:::

:::exercise {fs-id1169739341409} type= 
PROBLEM:
After a diver jumps off a diving board, the edge of the board oscillates with position given by $s(t)=−5\;\text{cos}\;t$ cm at $t$ seconds after the jump.
a. Sketch one period of the position function for $t\ge 0.$
b. Find the velocity function.
c. Sketch one period of the velocity function for $t\ge 0.$
d. Determine the times when the velocity is 0 over one period.
e. Find the acceleration function.
f. Sketch one period of the acceleration function for $t\ge 0.$
:::

:::exercise {fs-id1169739353376} type= 
PROBLEM:
The number of hamburgers sold at a fast-food restaurant in Pasadena, California, is given by $y=10+5\;\text{sin}\;x$ where $y$ is the number of hamburgers sold and $x$ represents the number of hours after the restaurant opened at 11 a.m. until 11 p.m., when the store closes. Find $y'$ and determine the intervals where the number of burgers being sold is increasing.
SOLUTION:
${y}^{'}=5\;\text{cos}\;(x),$ increasing on $(0,\frac{\pi}{2}),(\frac{3\pi}{2},\frac{5\pi}{2}),$ and $(\frac{7\pi}{2},12)$
:::

:::exercise {fs-id1169739307888} type= 
PROBLEM:
**[T]** The amount of rainfall per month in Phoenix, Arizona, can be approximated by $y(t)=0.5+0.3\;\text{cos}\;t,$ where $t$ is months since January. Find ${y}^{'}$ and use a calculator to determine the intervals where the amount of rain falling is decreasing.
:::
For the following exercises, use the quotient rule to derive the given equations.

:::exercise {fs-id1169739264128} type= 
PROBLEM:
$\frac{d}{dx}(\text{cot}\;x)=\text{−}{\text{csc}}^{2}x$
:::

:::exercise {fs-id1169739264176} type= 
PROBLEM:
$\frac{d}{dx}(\text{sec}\;x)=\text{sec}\;x\;\text{tan}\;x$
:::

:::exercise {fs-id1169739264230} type= 
PROBLEM:
$\frac{d}{dx}(\text{csc}\;x)=\text{−}\text{csc}\;x\;\text{cot}\;x$
:::

:::exercise {fs-id1169739264287} type= 
PROBLEM:
Use the definition of derivative and the identity
$\text{cos}\;(x+h)=\text{cos}\;x\;\text{cos}\;h-\text{sin}\;x\;\text{sin}\;h$ to prove that $\frac{d(\text{cos}\;x)}{dx}=\text{−}\text{sin}\;x.$
:::
For the following exercises, find the requested higher-order derivative for the given functions.

:::exercise {fs-id1169739289340} type= 
PROBLEM:
$\frac{{d}^{3}y}{d{x}^{3}}$ of $y=3\;\text{cos}\;x$
SOLUTION:
$3\;\text{sin}\;x$
:::

:::exercise {fs-id1169739289409} type= 
PROBLEM:
$\frac{{d}^{2}y}{d{x}^{2}}$ of $y=3\;\text{sin}\;x+{x}^{2}\text{cos}\;x$
:::

:::exercise {fs-id1169736592467} type= 
PROBLEM:
$\frac{{d}^{4}y}{d{x}^{4}}$ of $y=5\;\text{cos}\;x$
SOLUTION:
$5\;\text{cos}\;x$
:::

:::exercise {fs-id1169736592536} type= 
PROBLEM:
$\frac{{d}^{2}y}{d{x}^{2}}$ of $y=\text{sec}\;x+\text{cot}\;x$
:::

:::exercise {fs-id1169739301937} type= 
PROBLEM:
$\frac{{d}^{3}y}{d{x}^{3}}$ of $y={x}^{10}-\text{sec}\;x$
SOLUTION:
$720{x}^{7}-5\;\text{tan}\;(x){\text{sec}}^{3}(x)-{\text{tan}}^{3}(x)\;\text{sec}\;(x)$
:::

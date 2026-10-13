# The Derivative as a Function

## Learning Objectives {section:learning-objectives}
- Define the derivative function of a given function.
- Graph a derivative function from the graph of a given function.
- State the connection between derivatives and continuity.
- Describe three conditions for when a function does not have a derivative.
- Explain the meaning of a higher-order derivative.

As we have seen, the derivative of a function at a given point gives us the rate of change or slope of the tangent line to the function at that point. If we differentiate a position function at a given time, we obtain the velocity at that time. It seems reasonable to conclude that knowing the derivative of the function at every point would produce valuable information about the behavior of the function. However, the process of finding the derivative at even a handful of values using the techniques of the preceding section would quickly become quite tedious. In this section we define the derivative function and learn a process for finding it.

## Derivative Functions
The derivative function gives the derivative of a function at each point in the domain of the original function for which the derivative is defined. We can formally define a derivative function as follows.

:::note [definition] Definition
Let $f$ be a function. The {term:derivative function}, denoted by ${f}^{'},$ is the function whose domain consists of those values of $x$ such that the following limit exists:

$$ {f}^{'}(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}. $$  {eq:fs-id1169738143059}

:::
A function $f(x)$ is said to be {term:differentiable at $a$} if ${f}^{'}(a)$ exists. More generally, a function is said to be {term:differentiable on $S$} if it is differentiable at every point in an open set $S,$ and a {term:differentiable function} is one in which ${f}^{'}(x)$ exists on its domain.
In the next few examples we use [ref:fs-id1169738143059] to find the derivative of a function.

:::example {ex:fs-id1169737770972} Finding the Derivative of a Square-Root Function

:::exercise {fs-id1169737836812} type= 
PROBLEM:
Find the derivative of $f(x)=\sqrt{x}.$
SOLUTION:
Start directly with the definition of the derivative function. Use [ref:fs-id1169738850293](module:m53495).

$\begin{array}{rllll}{f}^{'}(x) & =\lim_{h\to 0}\frac{\sqrt{x+h}-\sqrt{x}}{h} & & & \begin{array}{l}\text{Substitute}\;f(x+h)=\sqrt{x+h}\;\text{and}\;f(x)=\sqrt{x} \\ \text{into}\;{f}^{'}(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}.\end{array} \\ & =\lim_{h\to 0}\frac{\sqrt{x+h}-\sqrt{x}}{h}\cdot \frac{\sqrt{x+h}+\sqrt{x}}{\sqrt{x+h}+\sqrt{x}} & & & \begin{array}{l}\text{Multiply numerator and denominator by} \\ \sqrt{x+h}+\sqrt{x}\;\text{without distributing in the} \\ \text{denominator.}\end{array} \\ & =\lim_{h\to 0}\frac{h}{h(\sqrt{x+h}+\sqrt{x})} & & & \text{Multiply the numerators and simplify.} \\ & =\lim_{h\to 0}\frac{1}{(\sqrt{x+h}+\sqrt{x})} & & & \text{Cancel the}\;h. \\ & =\frac{1}{2\sqrt{x}} & & & \text{Evaluate the limit.}\end{array}$  {eq:fs-id1169737769941}

:::
:::

:::example {ex:fs-id1169737774001} Finding the Derivative of a Quadratic Function

:::exercise {fs-id1169737946710} type= 
PROBLEM:
Find the derivative of the function $f(x)={x}^{2}-2x.$
SOLUTION:
Follow the same procedure here, but without having to multiply by the conjugate.

$\begin{array}{rllll}{f}^{'}(x) & =\lim_{h\to 0}\frac{({(x+h)}^{2}-2(x+h))-({x}^{2}-2x)}{h} & & & \begin{array}{l}\text{Substitute}\;f(x+h)={(x+h)}^{2}-2(x+h)\;\text{and} \\ f(x)={x}^{2}-2x\;\text{into} \\ {f}^{'}(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}.\end{array} \\ & =\lim_{h\to 0}\frac{{x}^{2}+2xh+{h}^{2}-2x-2h-{x}^{2}+2x}{h} & & & \text{Expand}\;{(x+h)}^{2}-2(x+h). \\ & =\lim_{h\to 0}\frac{2xh-2h+{h}^{2}}{h} & & & \text{Simplify.} \\ & =\lim_{h\to 0}\frac{h(2x-2+h)}{h} & & & \text{Factor out}\;h\;\text{from the numerator.} \\ & =\lim_{h\to 0}(2x-2+h) & & & \text{Cancel the common factor of}\;h. \\ & =2x-2 & & & \text{Evaluate the limit.}\end{array}$  {eq:fs-id1169737946879}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738113327} type= 
PROBLEM:
Find the derivative of $f(x)={x}^{2}.$
SOLUTION:
${f}^{'}(x)=2x$
COMMENTARY: Hint
Use [ref:fs-id1169738143059] and follow the example.
:::
:::
We use a variety of different notations to express the derivative of a function. In [ref:fs-id1169737774001] we showed that if $f(x)={x}^{2}-2x,$ then ${f}^{'}(x)=2x-2.$ If we had expressed this function in the form $y={x}^{2}-2x,$ we could have expressed the derivative as ${y}^{'}=2x-2$ or $\frac{dy}{dx}=2x-2.$ We could have conveyed the same information by writing $\frac{d}{dx}({x}^{2}-2x)=2x-2.$ Thus, for the function $y=f(x),$ each of the following notations represents the derivative of $f(x)\text{:}$

${f}^{'}(x), \;\frac{dy}{dx}, \;{y}^{'}, \;\frac{d}{dx}(f(x)).$  {eq:fs-id1169738144185}

In place of ${f}^{'}(a)$ we may also use $\frac{dy}{dx}\left|\begin{array}{l} \\ {}_{x=a}\end{array}\right.$ Use of the $\frac{dy}{dx}$ notation (called Leibniz notation) is quite common in engineering and physics. To understand this notation better, recall that the derivative of a function at a point is the limit of the slopes of secant lines as the secant lines approach the tangent line. The slopes of these secant lines are often expressed in the form $\frac{\text{Δ}y}{\text{Δ}x}$ where $\text{Δ}y$ is the difference in the $y$ values corresponding to the difference in the $x$ values, which are expressed as $\text{Δ}x$ ([ref:CNX_Calc_Figure_03_02_001]). Thus the derivative, which can be thought of as the instantaneous rate of change of $y$ with respect to $x,$ is expressed as

$\frac{dy}{dx}=\lim_{\text{Δ}x\to 0}\frac{\text{Δ}y}{\text{Δ}x}.$  {eq:fs-id1169738041612}

> FIGURE {fig:CNX_Calc_Figure_03_02_001} src=../../media/CNX_Calc_Figure_03_02_001.jpg
> alt: The function y = f(x) is graphed and it shows up as a curve in the first quadrant. The x-axis is marked with 0, a, and a + Δx. The y-axis is marked with 0, f(a), and f(a) + Δy. There is a straight line crossing y = f(x) at (a, f(a)) and (a + Δx, f(a) + Δy). From the point (a, f(a)), a horizontal line is drawn; from the point (a + Δx, f(a) + Δy), a vertical line is drawn. The distance from (a, f(a)) to (a + Δx, f(a)) is denoted Δx; the distance from (a + Δx, f(a) + Δy) to (a + Δx, f(a)) is denoted Δy.
> caption: The derivative is expressed as $\frac{dy}{dx}=\lim_{\text{Δ}x\to 0}\frac{\text{Δ}y}{\text{Δ}x}.$

## Graphing a Derivative
We have already discussed how to graph a function, so given the equation of a function or the equation of a derivative function, we could graph it. Given both, we would expect to see a correspondence between the graphs of these two functions, since ${f}^{'}(x)$ gives the rate of change of a function $f(x)$ (or slope of the tangent line to $f(x)).$
In [ref:fs-id1169737770972] we found that for $f(x)=\sqrt{x},{f}^{'}(x)=\frac{1}{2\sqrt{x}}.$ If we graph these functions on the same axes, as in [ref:CNX_Calc_Figure_03_02_002], we can use the graphs to understand the relationship between these two functions. First, we notice that $f(x)$ is increasing over its entire domain, which means that the slopes of its tangent lines at all points are positive. Consequently, we expect ${f}^{'}(x)>0$ for all values of $x$ in its domain. Furthermore, as $x$ increases, the slopes of the tangent lines to $f(x)$ are decreasing and we expect to see a corresponding decrease in ${f}^{'}(x).$ We also observe that $f'(0)$ is undefined and that $\lim_{x\to {0}^{+}}{f}^{'}(x)=\text{+}\infty ,$ corresponding to a vertical tangent to $f(x)$ at $0.$

> FIGURE {fig:CNX_Calc_Figure_03_02_002} src=../../media/CNX_Calc_Figure_03_02_002.jpg
> alt: The function f(x) = the square root of x is graphed as is its derivative f’(x) = 1/(2 times the square root of x).
> caption: The derivative ${f}^{'}(x)$ is positive everywhere because the function $f(x)$ is increasing.

In [ref:fs-id1169737774001] we found that for $f(x)={x}^{2}-2x,{f}^{'}(x)=2x-2.$ The graphs of these functions are shown in [ref:CNX_Calc_Figure_03_02_003]. Observe that $f(x)$ is decreasing for $x<1.$ For these same values of $x,{f}^{'}(x)<0.$ For values of $x>1,f(x)$ is increasing and ${f}^{'}(x)>0.$ Also, $f(x)$ has a horizontal tangent at $x=1$ and ${f}^{'}(1)=0.$

> FIGURE {fig:CNX_Calc_Figure_03_02_003} src=../../media/CNX_Calc_Figure_03_02_003.jpg
> alt: The function f(x) = x squared – 2x is graphed as is its derivative f’(x) = 2x − 2.
> caption: The derivative ${f}^{'}(x)<0$ where the function $f(x)$ is decreasing and ${f}^{'}(x)>0$ where $f(x)$ is increasing. The derivative is zero where the function has a horizontal tangent.

:::example {ex:fs-id1169737966982} Sketching a Derivative Using a Function

:::exercise {fs-id1169737966985} type= 
PROBLEM:
Use the following graph of $f(x)$ to sketch a graph of ${f}^{'}(x).$

> IMAGE {img:fs-id1169738045304} src=../../media/CNX_Calc_Figure_03_02_004.jpg
> alt: The function f(x) is roughly sinusoidal, starting at (−4, 3), decreasing to a local minimum at (−2, 2), then increasing to a local maximum at (3, 6), and getting cut off at (7, 2).

SOLUTION:
The solution is shown in the following graph. Observe that $f(x)$ is increasing and ${f}^{'}(x)>0$ on $(-2,3).$ Also, $f(x)$ is decreasing and ${f}^{'}(x)<0$ on $(\text{−}\infty ,−2)$ and on $(3,\text{+}\infty ).$ Also note that $f(x)$ has horizontal tangents at $-2$ and $3,$ and ${f}^{'}(−2)=0$ and ${f}^{'}(3)=0.$

> IMAGE {img:fs-id1169738042183} src=../../media/CNX_Calc_Figure_03_02_005.jpg
> alt: Two functions are graphed here: f(x) and f’(x). The function f(x) is the same as the above graph, that is, roughly sinusoidal, starting at (−4, 3), decreasing to a local minimum at (−2, 2), then increasing to a local maximum at (3, 6), and getting cut off at (7, 2). The function f’(x) is an downward-facing parabola with vertex near (0.5, 1.75), y-intercept (0, 1.5), and x-intercepts (−1.9, 0) and (3, 0).

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738223960} type= 
PROBLEM:
Sketch the graph of $f(x)={x}^{2}-4.$ On what interval is the graph of ${f}^{'}(x)$ above the $x$-axis?
SOLUTION:
$(0,\text{+}\infty )$
COMMENTARY: Hint
The graph of ${f}^{'}(x)$ is positive where $f(x)$ is increasing.
:::
:::

## Derivatives and Continuity
Now that we can graph a derivative, let’s examine the behavior of the graphs. First, we consider the relationship between differentiability and continuity. We will see that if a function is differentiable at a point, it must be continuous there; however, a function that is continuous at a point need not be differentiable at that point. In fact, a function may be continuous at a point and fail to be differentiable at the point for one of several reasons.

:::note [theorem] Differentiability Implies Continuity
Let $f(x)$ be a function and $a$ be in its domain. If $f(x)$ is differentiable at $a,$ then $f$ is continuous at $a.$
:::

### Proof
If $f(x)$ is differentiable at $a,$ then ${f}^{'}(a)$ exists and

${f}^{'}(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}.$  {eq:fs-id1169738220653}

We want to show that $f(x)$ is continuous at $a$ by showing that $\lim_{x\to a}f(x)=f(a).$ Thus,

$\begin{array}{rllll}\lim_{x\to a}f(x) & =\lim_{x\to a}(f(x)-f(a)+f(a)) & & & \\ & =\lim_{x\to a}(\frac{f(x)-f(a)}{x-a}\cdot (x-a)+f(a)) & & & \text{Multiply and divide}\;f(x)-f(a)\;\text{by}\;x-a. \\ & =(\lim_{x\to a}\frac{f(x)-f(a)}{x-a})\cdot (\lim_{x\to a}(x-a))+\lim_{x\to a}f(a) & & & \\ & =f'(a)\cdot 0+f(a) & & & \\ & =f(a). & & & \end{array}$  {eq:fs-id1169738221978}

Therefore, since $f(a)$ is defined and $\lim_{x\to a}f(x)=f(a),$ we conclude that $f$ is continuous at $a.$
□
We have just proven that differentiability implies continuity, but now we consider whether continuity implies differentiability. To determine an answer to this question, we examine the function $f(x)=|x|.$ This function is continuous everywhere; however, ${f}^{'}(0)$ is undefined. This observation leads us to believe that continuity does not imply differentiability. Let’s explore further. For $f(x)=|x|,$

${f}^{'}(0)=\lim_{x\to 0}\frac{f(x)-f(0)}{x-0}=\lim_{x\to 0}\frac{|x|-|0|}{x-0}=\lim_{x\to 0}\frac{|x|}{x}.$  {eq:fs-id1169738223612}

This limit does not exist because

$\lim_{x\to {0}^{-}}\frac{|x|}{x}=−1\;\text{and}\;\lim_{x\to {0}^{+}}\frac{|x|}{x}=1.$  {eq:fs-id1169738216096}

See [ref:CNX_Calc_Figure_03_02_006].

> FIGURE {fig:CNX_Calc_Figure_03_02_006} src=../../media/CNX_Calc_Figure_03_02_006.jpg
> alt: The function f(x) = the absolute value of x is graphed. It consists of two straight line segments: the first follows the equation y = −x and ends at the origin; the second follows the equation y = x and starts at the origin.
> caption: The function $f(x)=|x|$ is continuous at $0$ but is not differentiable at $0.$

Let’s consider some additional situations in which a continuous function fails to be differentiable. Consider the function $f(x)=\sqrt[3]{x}\text{:}$

${f}^{'}(0)=\lim_{x\to 0}\frac{\sqrt[3]{x}-0}{x-0}=\lim_{x\to 0}\frac{1}{\sqrt[3]{{x}^{2}}}=\text{+}\infty .$  {eq:fs-id1169738228211}

Thus ${f}^{'}(0)$ does not exist. A quick look at the graph of $f(x)=\sqrt[3]{x}$ clarifies the situation. The function has a vertical tangent line at $0$ ([ref:CNX_Calc_Figure_03_02_007]).

> FIGURE {fig:CNX_Calc_Figure_03_02_007} src=../../media/CNX_Calc_Figure_03_02_007.jpg
> alt: The function f(x) = the cube root of x is graphed. It has a vertical tangent at x = 0.
> caption: The function $f(x)=\sqrt[3]{x}$ has a vertical tangent at $x=0.$ It is continuous at $0$ but is not differentiable at $0.$

The function $f(x)=\left\{\begin{array}{l}x\;\text{sin}\;(\frac{1}{x})\;\text{if}\;x≠0 \\ 0\;\text{if}\;x=0\end{array}\right.$ also has a derivative that exhibits interesting behavior at $0.$ We see that

${f}^{'}(0)=\lim_{x\to 0}\frac{x\;\text{sin}\;(1\text{/}x)-0}{x-0}=\lim_{x\to 0}\text{sin}\;(\frac{1}{x}).$  {eq:fs-id1169738225665}

This limit does not exist, essentially because the slopes of the secant lines continuously change direction as they approach zero ([ref:CNX_Calc_Figure_03_02_008]).

> FIGURE {fig:CNX_Calc_Figure_03_02_008} src=../../media/CNX_Calc_Figure_03_02_008.jpg
> alt: The function f(x) = x sin (1/2) if x does not equal 0 and f(x) = 0 if x = 0 is graphed. It looks like a rapidly oscillating sinusoidal function with amplitude decreasing to 0 at the origin.
> caption: The function $f(x)=\left\{\begin{array}{l}x\;\text{sin}\;(\frac{1}{x})\;\text{if}\;x≠0 \\ 0\;\text{if}\;x=0\end{array}\right.$ is not differentiable at $0.$

In summary:
1. We observe that if a function is not continuous, it cannot be differentiable, since every differentiable function must be continuous. However, if a function is continuous, it may still fail to be differentiable.
2. We saw that $f(x)=|x|$ failed to be differentiable at $0$ because the limit of the slopes of the tangent lines on the left and right were not the same. Visually, this resulted in a sharp corner on the graph of the function at $0.$ From this we conclude that in order to be differentiable at a point, a function must be “smooth” at that point.
3. As we saw in the example of $f(x)=\sqrt[3]{x},$ a function fails to be differentiable at a point where there is a vertical tangent line.
4. As we saw with $f(x)=\left\{\begin{array}{l}x\;\text{sin}\;(\frac{1}{x})\;\text{if}\;x≠0 \\ 0\;\text{if}\;x=0\end{array}\right.$ a function may fail to be differentiable at a point in more complicated ways as well.

:::example {ex:fs-id1169738218186} A Piecewise Function that is Continuous and Differentiable

:::exercise {fs-id1169738218188} type= 
PROBLEM:
A toy company wants to design a track for a toy car that starts out along a parabolic curve and then converts to a straight line ([ref:CNX_Calc_Figure_03_02_009]). The function that describes the track is to have the form $f(x)=\left\{\begin{array}{l}\frac{1}{10}{x}^{2}+bx+c\;\text{if}\;x<−10 \\ -\frac{1}{4}x+\frac{5}{2}\;\text{if}\;x\ge −10\end{array}\right.$ where $x$ and $f(x)$ are in inches. For the car to move smoothly along the track, the function $f(x)$ must be both continuous and differentiable at $−10.$ Find values of $b$ and $c$ that make $f(x)$ both continuous and differentiable.

> FIGURE {fig:CNX_Calc_Figure_03_02_009} src=../../media/CNX_Calc_Figure_03_02_009.jpg
> alt: A cart is drawn on a line that curves through (−10, 5) to (10, 0) with y-intercept roughly (0, 2).
> caption: For the car to move smoothly along the track, the function must be both continuous and differentiable.

SOLUTION:
For the function to be continuous at $x=−10,\lim_{x\to {−10}^{-}}f(x)=f(−10).$ Thus, since

$\lim_{x\to \text{−}{10}^{-}}f(x)=\frac{1}{10}{(−10)}^{2}-10b+c=10-10b+c$  {eq:fs-id1169737950192}

and $f(−10)=5,$ we must have $10-10b+c=5.$ Equivalently, we have $c=10b-5.$
For the function to be differentiable at $−10,$

${f}^{'}(-10)=\lim_{x\to \text{−}10}\frac{f(x)-f(−10)}{x+10}$  {eq:fs-id1169738219154}

must exist. Since $f(x)$ is defined using different rules on the right and the left, we must evaluate this limit from the right and the left and then set them equal to each other:

$\begin{array}{rllll}\lim_{x\to \text{−}{10}^{-}}\frac{f(x)-f(−10)}{x+10} & =\lim_{x\to \text{−}{10}^{-}}\frac{\frac{1}{10}{x}^{2}+bx+c-5}{x+10} & & & \\ & =\lim_{x\to \text{−}{10}^{-}}\frac{\frac{1}{10}{x}^{2}+bx+(10b-5)-5}{x+10} & & & \text{Substitute}\;c=10b-5. \\ & =\lim_{x\to \text{−}{10}^{-}}\frac{{x}^{2}-100+10bx+100b}{10(x+10)} & & & \text{Multiply numerator and denominator by 10.} \\ & =\lim_{x\to \text{−}{10}^{-}}\frac{(x+10)(x-10+10b)}{10(x+10)} & & & \text{Factor by grouping.} \\ & =b-2. & & & \end{array}$  {eq:fs-id1169738183518}

We also have

$\begin{array}{rl}\lim_{x\to \text{−}{10}^{+}}\frac{f(x)-f(−10)}{x+10} & =\lim_{x\to \text{−}{10}^{+}}\frac{-\frac{1}{4}x+\frac{5}{2}-5}{x+10} \\ & =\lim_{x\to \text{−}{10}^{+}}\frac{\text{−}(x+10)}{4(x+10)} \\ & =-\frac{1}{4}.\end{array}$  {eq:fs-id1169738183173}

This gives us $b-2=-\frac{1}{4}.$ Thus $b=\frac{7}{4}$ and $c=10(\frac{7}{4})-5=\frac{25}{2}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738185319} type= 
PROBLEM:
Find values of $a$ and $b$ that make $f(x)=\left\{\begin{array}{l}ax+b\;\text{if}\;x<3 \\ {x}^{2}\;\text{if}\;x\ge 3\end{array}\right.$ both continuous and differentiable at $3.$
SOLUTION:
$a=6$ and $b=−9$
COMMENTARY: Hint
Use [ref:fs-id1169738218186] as a guide.
:::
:::

## Higher-Order Derivatives
The derivative of a function is itself a function, so we can find the derivative of a derivative. For example, the derivative of a position function is the rate of change of position, or velocity. The derivative of velocity is the rate of change of velocity, which is acceleration. The new function obtained by differentiating the derivative is called the second derivative. Furthermore, we can continue to take derivatives to obtain the third derivative, fourth derivative, and so on. Collectively, these are referred to as {term:higher-order derivatives}. The notation for the higher-order derivatives of $y=f(x)$ can be expressed in any of the following forms:

${f}^{''}(x), \;f''' (x),{f}^{(4)}(x)\text{,…},{f}^{(n)}(x)$  {eq:fs-id1169738214590}

${y}^{''}(x),y''' (x),{y}^{(4)}(x)\text{,…},{y}^{(n)}(x)$  {eq:fs-id1169738221934}

$\frac{{d}^{2}y}{d{x}^{2}},\frac{{d}^{3}y}{d{x}^{3}},\frac{{d}^{4}y}{d{x}^{4}}\text{,…},\frac{{d}^{n}y}{d{x}^{n}}.$  {eq:fs-id1169738218117}

It is interesting to note that the notation for $\frac{{d}^{2}y}{d{x}^{2}}$ may be viewed as an attempt to express $\frac{d}{dx}(\frac{dy}{dx})$ more compactly. Analogously, $\frac{d}{dx}(\frac{d}{dx}(\frac{dy}{dx}))=\frac{d}{dx}(\frac{{d}^{2}y}{d{x}^{2}})=\frac{{d}^{3}y}{d{x}^{3}}.$

:::example {ex:fs-id1169738217346} Finding a Second Derivative

:::exercise {fs-id1169738217348} type= 
PROBLEM:
For $f(x)=2{x}^{2}-3x+1,$ find ${f}^{''}(x).$
SOLUTION:
First find ${f}^{'}(x).$

$\begin{array}{rllll}{f}^{'}(x) & =\lim_{h\to 0}\frac{(2{(x+h)}^{2}-3(x+h)+1)-(2{x}^{2}-3x+1)}{h} & & & \begin{array}{l}\text{Substitute}\;f(x)=2{x}^{2}-3x+1 \\ \text{and} \\ f(x+h)=2{(x+h)}^{2}-3(x+h)+1 \\ \text{into}\;{f}^{'}(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}.\end{array} \\ & =\lim_{h\to 0}\frac{4xh+2{h}^{2}-3h}{h} & & & \text{Simplify the numerator.} \\ & =\lim_{h\to 0}(4x+2h-3) & & & \begin{array}{l}\text{Factor out the}\;h\;\text{in the numerator} \\ \text{and cancel with the}\;h\;\text{in the} \\ \text{denominator.}\end{array} \\ & =4x-3 & & & \text{Take the limit.}\end{array}$  {eq:fs-id1169738219187}

Next, find ${f}^{''}(x)$ by taking the derivative of ${f}^{'}(x)=4x-3.$

$\begin{array}{rllll}{f}^{''}(x) & =\lim_{h\to 0}\frac{{f}^{'}(x+h)-{f}^{'}(x)}{h} & & & \begin{array}{l}\text{Use}\;{f}^{'}(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}\;\text{with}\;{f}^{'}(x)\;\text{in} \\ \text{place of}\;f(x).\end{array} \\ & =\lim_{h\to 0}\frac{(4(x+h)-3)-(4x-3)}{h} & & & \begin{array}{l}\text{Substitute}\;{f}^{'}(x+h)=4(x+h)-3\;\text{and} \\ {f}^{'}(x)=4x-3.\end{array} \\ & =\lim_{h\to 0}4 & & & \text{Simplify.} \\ & =4 & & & \text{Take the limit.}\end{array}$  {eq:fs-id1169738068328}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738187254} type= 
PROBLEM:
Find ${f}^{''}(x)$ for $f(x)={x}^{2}.$
SOLUTION:
${f}^{''}(x)=2$
COMMENTARY: Hint
We found ${f}^{'}(x)=2x$ in a previous checkpoint. Use [ref:fs-id1169738143059] to find the derivative of ${f}^{'}(x)$
:::
:::

:::example {ex:fs-id1169738099443} Finding Acceleration

:::exercise {fs-id1169738099445} type= 
PROBLEM:
The position of a particle along a coordinate axis at time $t$ (in seconds) is given by $s(t)=3{t}^{2}-4t+1$ (in meters). Find the function that describes its acceleration at time $t.$
SOLUTION:
Since $v(t)={s}^{'}(t)$ and $a(t)={v}^{'}(t)={s}^{''}(t),$ we begin by finding the derivative of $s(t):$

$\begin{array}{rl}{s}^{'}(t) & =\lim_{h\to 0}\frac{s(t+h)-s(t)}{h} \\ & =\lim_{h\to 0}\frac{3{(t+h)}^{2}-4(t+h)+1-(3{t}^{2}-4t+1)}{h} \\ & =6t-4.\end{array}$  {eq:fs-id1169737911373}

Next,

$\begin{array}{rl}{s}^{''}(t) & =\lim_{h\to 0}\frac{{s}^{'}(t+h)-{s}^{'}(t)}{h} \\ & =\lim_{h\to 0}\frac{6(t+h)-4-(6t-4)}{h} \\ & =6.\end{array}$  {eq:fs-id1169737950769}

Thus, $a=6{\;\text{m/s}}^{2}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738185149} type= 
PROBLEM:
For $s(t)={t}^{3},$ find $a(t).$
SOLUTION:
$a(t)=6t$
COMMENTARY: Hint
Use [ref:fs-id1169737966982] as a guide.
:::
:::

## Key Concepts {section:key-concepts}
- The derivative of a function $f(x)$ is the function whose value at $x$ is ${f}^{'}(x).$
- The graph of a derivative of a function $f(x)$ is related to the graph of $f(x).$ Where $f(x)$ has a tangent line with positive slope, ${f}^{'}(x)>0.$ Where $f(x)$ has a tangent line with negative slope, ${f}^{'}(x)<0.$ Where $f(x)$ has a horizontal tangent line, ${f}^{'}(x)=0.$
- If a function is differentiable at a point, then it is continuous at that point. A function is not differentiable at a point if it is not continuous at the point, if it has a vertical tangent line at the point, or if the graph has a sharp corner or cusp.
- Higher-order derivatives are derivatives of derivatives, from the second derivative to the $n\text{th}$ derivative.

## Key Equations {section:key-equations}

> TABLE {tab:eip-491} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **The derivative function** | ${f}^{'}(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$ |

##  {section:section-exercises}
For the following exercises, use the definition of a derivative to find ${f}^{'}(x).$

:::exercise {fs-id1169738186716} type= 
PROBLEM:
$f(x)=6$
:::

:::exercise {fs-id1169738186749} type= 
PROBLEM:
$f(x)=2-3x$
SOLUTION:
$−3$
:::

:::exercise {fs-id1169738186790} type= 
PROBLEM:
$f(x)=\frac{2x}{7}+1$
:::

:::exercise {fs-id1169737143572} type= 
PROBLEM:
$f(x)=4{x}^{2}$
SOLUTION:
$8x$
:::

:::exercise {fs-id1169737143614} type= 
PROBLEM:
$f(x)=5x-{x}^{2}$
:::

:::exercise {fs-id1169737143664} type= 
PROBLEM:
$f(x)=\sqrt{2x}$
SOLUTION:
$\frac{1}{\sqrt{2x}}$
:::

:::exercise {fs-id1169738045048} type= 
PROBLEM:
$f(x)=\sqrt{x-6}$
:::

:::exercise {fs-id1169738045101} type= 
PROBLEM:
$f(x)=\frac{9}{x}$
SOLUTION:
$\frac{−9}{{x}^{2}}$
:::

:::exercise {fs-id1169738045147} type= 
PROBLEM:
$f(x)=x+\frac{1}{x}$
:::

:::exercise {fs-id1169738189125} type= 
PROBLEM:
$f(x)=\frac{1}{\sqrt{x}}$
SOLUTION:
$\frac{−1}{2{x}^{3\text{/}2}}$
:::
For the following exercises, use the graph of $y=f(x)$ to sketch the graph of its derivative ${f}^{'}(x).$

:::exercise {fs-id1169738189221} type= 
PROBLEM:

> IMAGE {img:fs-id1169738189229} src=../../media/CNX_Calc_Figure_03_02_201.jpg
> alt: The function f(x) starts at (−2, 20) and decreases to pass through the origin and achieve a local minimum at roughly (0.5, −1). Then, it increases and passes through (1, 0) and achieves a local maximum at (2.25, 2) before decreasing again through (3, 0) to (4, −20).

:::

:::exercise {fs-id1169738189260} type= 
PROBLEM:

> IMAGE {img:fs-id1169738189268} src=../../media/CNX_Calc_Figure_03_02_203.jpg
> alt: The function f(x) starts at (−1.5, 20) and decreases to pass through (0, 10), where it appears to have a derivative of 0. Then it further decreases, passing through (1.7, 0) and achieving a minimum at (3, −17), at which point it increases rapidly through (3.8, 0) to (4, 20).

SOLUTION:

> IMAGE {img:fs-id1169737927607} src=../../media/CNX_Calc_Figure_03_02_204.jpg
> alt: The function starts in the third quadrant and increases to touch the origin, then decreases to a minimum at (2, −16), before increasing through the x axis at x = 3, after which it continues increasing.

:::

:::exercise {fs-id1169737927619} type= 
PROBLEM:

> IMAGE {img:fs-id1169737927627} src=../../media/CNX_Calc_Figure_03_02_205.jpg
> alt: The function f(x) starts at (−2.25, −20) and increases rapidly to pass through (−2, 0) before achieving a local maximum at (−1.4, 8). Then the function decreases to the origin. The graph is symmetric about the y-axis, so the graph increases to (1.4, 8) before decreasing through (2, 0) and heading on down to (2.25, −20).

:::

:::exercise {fs-id1169737927662} type= 
PROBLEM:

> IMAGE {img:fs-id1169737927670} src=../../media/CNX_Calc_Figure_03_02_207.jpg
> alt: The function f(x) starts at (−3, −1) and increases to pass through (−1.5, 0) and achieve a local minimum at (1, 0). Then, it decreases and passes through (1.5, 0) and continues decreasing to (3, −1).

SOLUTION:

> IMAGE {img:fs-id1169737927688} src=../../media/CNX_Calc_Figure_03_02_208.jpg
> alt: The function starts at (−3, 0), increases to a maximum at (−1.5, 1), decreases through the origin and to a minimum at (1.5, −1), and then increases to the x axis at x = 3.

:::
For the following exercises, the given limit represents the derivative of a function $y=f(x)$ at $x=a.$ Find $f(x)$ and $a.$

:::exercise {fs-id1169737927753} type= 
PROBLEM:
$\lim_{h\to 0}\frac{{(1+h)}^{2\text{/}3}-1}{h}$
:::

:::exercise {fs-id1169738217060} type= 
PROBLEM:
$\lim_{h\to 0}\frac{[3{(2+h)}^{2}+2]-14}{h}$
SOLUTION:
$f(x)=3{x}^{2}+2,a=2$
:::

:::exercise {fs-id1169737144209} type= 
PROBLEM:
$\lim_{h\to 0}\frac{\text{cos}\;(\pi +h)+1}{h}$
:::

:::exercise {fs-id1169737144295} type= 
PROBLEM:
$\lim_{h\to 0}\frac{{(2+h)}^{4}-16}{h}$
SOLUTION:
$f(x)={x}^{4},a=2$
:::

:::exercise {fs-id1169737144378} type= 
PROBLEM:
$\lim_{h\to 0}\frac{[2{(3+h)}^{2}-(3+h)]-15}{h}$
:::

:::exercise {fs-id1169737904601} type= 
PROBLEM:
$\lim_{h\to 0}\frac{{e}^{h}-1}{h}$
SOLUTION:
$f(x)={e}^{x},a=0$
:::
For the following functions,
a. sketch the graph and
b. use the definition of a derivative to show that the function is not differentiable at $x=1.$

:::exercise {fs-id1169738071318} type= 
PROBLEM:
$f(x)=\left\{\begin{array}{l}2\sqrt{x},0\le x\le 1 \\ 3x-1,x>1\end{array}\right.$
:::

:::exercise {fs-id1169738071477} type= 
PROBLEM:
$f(x)=\left\{\begin{array}{l}3,x<1 \\ 3x,x\ge 1\end{array}\right.$
SOLUTION:
a.

> IMAGE {img:fs-id1169738191108} src=../../media/CNX_Calc_Figure_03_02_210.jpg
> alt: The function is linear at y = 3 until it reaches (1, 3), at which point it increases as a line with slope 3.

b. $\lim_{h\to {0}^{-}}\frac{f(1+h)-f(1)}{h}=\lim_{h\to {0}^{-}}\frac{3-3}{h}=0$
$\lim_{h\to {0}^{+}}\frac{f(1+h)-f(1)}{h}=\lim_{h\to {0}^{+}}\frac{3(1+h)-3(1)}{h}=\lim_{h\to {0}^{+}}\frac{3h}{h}=3$
$\lim_{h\to {0}^{-}}\frac{f(1+h)-f(1)}{h}≠\lim_{h\to {0}^{+}}\frac{f(1+h)-f(1)}{h}$, so $\lim_{h\to 0}\frac{f(1+h)-f(1)}{h}$ does not exist.
:::

:::exercise {fs-id1169738191183} type= 
PROBLEM:
$f(x)=\left\{\begin{array}{l}-{x}^{2}+2,x\le 1 \\ x,x>1\end{array}\right.$
:::

:::exercise {fs-id1169737954177} type= 
PROBLEM:
$f(x)=\left\{\begin{array}{l}2x,x\le 1 \\ \frac{2}{x},x>1\end{array}\right.$
SOLUTION:
a.

> IMAGE {img:fs-id1169737954245} src=../../media/CNX_Calc_Figure_03_02_212.jpg
> alt: The function starts in the third quadrant as a straight line and passes through the origin with slope 2; then at (1, 2) it decreases convexly as 2/x.

b. $\lim_{h\to {0}^{-}}\frac{f(1+h)-f(1)}{h}=\lim_{h\to {0}^{-}}\frac{2(1+h)-2}{h}=\lim_{h\to {0}^{-}}\frac{2h}{h}=\lim_{h\to {0}^{-}}2=2$
$\begin{array}{rl}\lim_{h\to {0}^{+}}\frac{f(1+h)-f(1)}{h} & =\lim_{h\to {0}^{+}}\frac{\frac{2}{1+h}-\frac{2}{1}}{h} \\ & =\lim_{h\to {0}^{+}}\frac{\frac{2-2(1+h)}{1+h}}{h} \\ & =\lim_{h\to {0}^{+}}\frac{−2h}{h(1+h)} \\ & =\lim_{h\to {0}^{+}}\frac{−2}{1+h} \\ & =−2\end{array}$
$\lim_{h\to {0}^{-}}\frac{f(1+h)-f(1)}{h}≠\lim_{h\to {0}^{+}}\frac{f(1+h)-f(1)}{h}$, so $\lim_{h\to 0}\frac{f(1+h)-f(1)}{h}$ does not exist.
:::
For the following graphs,
a. determine for which values of $x=a$ the $\lim_{x\to a}f(x)$ exists but $f$ is not continuous at $x=a,$ and
b. determine for which values of $x=a$ the function is continuous but not differentiable at $x=a.$

:::exercise {fs-id1169738219549} type= 
PROBLEM:

> IMAGE {img:fs-id1169738219561} src=../../media/CNX_Calc_Figure_03_02_213.jpg
> alt: The function starts at (−6, 2) and increases to a maximum at (−5.3, 4) before stopping at (−4, 3) inclusive. Then it starts again at (−4, −2) before increasing slowly through (−2.25, 0), passing through (−1, 4), hitting a local maximum at (−0.1, 5.3) and decreasing to (2, −1) inclusive. Then it starts again at (2, 5), increases to (2.6, 6), and then decreases to (4.5, −3), with a discontinuity at (4, 2).

:::

:::exercise {fs-id1169737145058} type= 
PROBLEM:

> IMAGE {img:fs-id1169737145069} src=../../media/CNX_Calc_Figure_03_02_214.jpg
> alt: The function starts at (−3, −1) and increases to and stops at a local maximum at (−1, 3) inclusive. Then it starts again at (−1, 1) before increasing quickly to and stopping at a local maximum (0, 4) inclusive. Then it starts again at (0, 3) and decreases linearly to (1, 1), at which point there is a discontinuity and the value of this function at x = 1 is 2. The function continues from (1, 1) and increases linearly to (2, 3.5) before decreasing linearly to (3, 2).

SOLUTION:
a. $x=1,$ b. $x=2$
:::

:::exercise {fs-id1169737145107} type= 
PROBLEM:
Use the graph of $f(x)$ shown to evaluate a. ${f}^{'}(−0.5),$ b. ${f}^{'}(0),$ c. ${f}^{'}(1),$ d. ${f}^{'}(2),$ and e. ${f}^{'}(3),$ if it exists.

> IMAGE {img:fs-id1169737145209} src=../../media/CNX_Calc_Figure_03_02_215.jpg
> alt: The function starts at (−3, 0) and increases linearly to a local maximum at (0, 3). Then it decreases linearly to (2, 1), at which point it increases linearly to (4, 5).

:::
For the following functions, use ${f}^{''}(x)=\lim_{h\to 0}\frac{{f}^{'}(x+h)-{f}^{'}(x)}{h}$ to find ${f}^{''}(x).$

:::exercise {fs-id1169737933547} type= 
PROBLEM:
$f(x)=2-3x$
SOLUTION:
$0$
:::

:::exercise {fs-id1169737933589} type= 
PROBLEM:
$f(x)=4{x}^{2}$
:::

:::exercise {fs-id1169737933630} type= 
PROBLEM:
$f(x)=x+\frac{1}{x}$
SOLUTION:
$\frac{2}{{x}^{3}}$
:::
For the following exercises, use a calculator to graph $f(x).$ Determine the function ${f}^{'}(x),$ then use a calculator to graph ${f}^{'}(x).$

:::exercise {fs-id1169738186974} type= 
PROBLEM:
**[T]** $f(x)=-\frac{5}{x}$
:::

:::exercise {fs-id1169738187055} type= 
PROBLEM:
**[T]** $f(x)=3{x}^{2}+2x+4.$
SOLUTION:
${f}^{'}(x)=6x+2$

> IMAGE {img:fs-id1169738225794} src=../../media/CNX_Calc_Figure_03_02_217.jpg
> alt: The function f(x) is graphed as an upward facing parabola with y intercept 4. The function f’(x) is graphed as a straight line with y intercept 2 and slope 6.

:::

:::exercise {fs-id1169738225808} type= 
PROBLEM:
**[T]** $f(x)=\sqrt{x}+3x$
:::

:::exercise {fs-id1169738225897} type= 
PROBLEM:
**[T]** $f(x)=\frac{1}{\sqrt{2x}}$
SOLUTION:
${f}^{'}(x)=-\frac{1}{{(2x)}^{3\text{/}2}}$

> IMAGE {img:fs-id1169738054400} src=../../media/CNX_Calc_Figure_03_02_219.jpg
> alt: The function f(x) is in the first quadrant and has asymptotes at x = 0 and y = 0. The function f’(x) is in the fourth quadrant and has asymptotes at x = 0 and y = 0.

:::

:::exercise {fs-id1169738054414} type= 
PROBLEM:
**[T]** $f(x)=1+x+\frac{1}{x}$
:::

:::exercise {fs-id1169738054510} type= 
PROBLEM:
**[T]** $f(x)={x}^{3}+1$
SOLUTION:
${f}^{'}(x)=3{x}^{2}$

> IMAGE {img:fs-id1169738054577} src=../../media/CNX_Calc_Figure_03_02_221.jpg
> alt: The function f(x) starts is the graph of the cubic function shifted up by 1. The function f’(x) is the graph of a parabola that is slightly steeper than the normal squared function.

:::
For the following exercises, describe what the two expressions represent in terms of each of the given situations. Be sure to include units.
a. $\frac{f(x+h)-f(x)}{h}$
b. ${f}^{'}(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$

:::exercise {fs-id1169738184787} type= 
PROBLEM:
$P(x)$ denotes the population of a city at time $x$ in years.
:::

:::exercise {fs-id1169738184829} type= 
PROBLEM:
$C(x)$ denotes the total amount of money (in thousands of dollars) spent on concessions by $x$ customers at an amusement park.
SOLUTION:
a. Average rate at which customers spent on concessions in thousands per customer. b. Rate (in thousands per customer) at which $x$ customers spent money on concessions in thousands per customer.
:::

:::exercise {fs-id1169738184870} type= 
PROBLEM:
$R(x)$ denotes the total cost (in thousands of dollars) of manufacturing $x$ clock radios.
:::

:::exercise {fs-id1169738221107} type= 
PROBLEM:
$g(x)$ denotes the grade (in percentage points) received on a test, given $x$ hours of studying.
SOLUTION:
a. Average grade received on the test with an average study time between two values. b. Rate (in percentage points per hour) at which the grade on the test increased or decreased for a given average study time of $x$ hours.
:::

:::exercise {fs-id1169738221148} type= 
PROBLEM:
$B(x)$ denotes the cost (in dollars) of a sociology textbook at university bookstores in the United States in $x$ years since $1990.$
:::

:::exercise {fs-id1169738221202} type= 
PROBLEM:
$p(x)$ denotes atmospheric pressure in Torrs at an altitude of $x$ feet.
SOLUTION:
a. Average change of atmospheric pressure between two different altitudes. b. Rate (torr per foot) at which atmospheric pressure is increasing or decreasing at $x$ feet.
:::

:::exercise {fs-id1169738221240} type= 
PROBLEM:
Sketch the graph of a function $y=f(x)$ with all of the following properties:
a. ${f}^{'}(x)>0$ for $−2\le x<1$
b. ${f}^{'}(2)=0$
c. ${f}^{'}(x)>0$ for $x>2$
d. $f(2)=2$ and $f(0)=1$
e. $\lim_{x\to \text{−}\infty}f(x)=0$ and $\lim_{x\to \infty}f(x)=\infty$
f. ${f}^{'}(1)$ does not exist.
:::

:::exercise {fs-id1169738073277} type= 
PROBLEM:
Suppose temperature $T$ in degrees Fahrenheit at a height $x$ in feet above the ground is given by $y=T(x).$
a. Give a physical interpretation, with units, of ${T}^{'}(x).$
b. If we know that ${T}^{'}(1000)=−0.1,$ explain the physical meaning.
SOLUTION:
a. The rate (in degrees per foot) at which temperature is increasing or decreasing for a given height $x.$ b. The rate of change of temperature as altitude changes at $1000$ feet is $−0.1$ degrees per foot.
:::

:::exercise {fs-id1169738197948} type= 
PROBLEM:
Suppose the total profit of a company is $y=P(x)$ thousand dollars when $x$ units of an item are sold.
a. What does $\frac{P(b)-P(a)}{b-a}$ for $0<a<b$ measure, and what are the units?
b. What does ${P}^{'}(x)$ measure, and what are the units?
c. Suppose that ${P}^{'}(30)=5,$ what is the approximate change in profit if the number of items sold increases from $30\;\text{to}\;31?$
:::

:::exercise {fs-id1169737141464} type= 
PROBLEM:
The graph in the following figure models the number of people $N(t)$ who have come down with the flu $t$ weeks after its initial outbreak in a town with a population of $50,000$ citizens.
a. Describe what ${N}^{'}(t)$ represents and how it behaves as $t$ increases.
b. What does the derivative tell us about how this town is affected by the flu outbreak?

> IMAGE {img:fs-id1169737141534} src=../../media/CNX_Calc_Figure_03_02_223.jpg
> alt: The function starts at (0, 3000) and increases quickly to an asymptote at y = 50000.

SOLUTION:
a. The rate at which the number of people who have come down with the flu is changing $t$ weeks after the initial outbreak. b. The rate is increasing sharply up to the third week, at which point it slows down and then becomes constant.
:::
For the following exercises, use the following table, which shows the height $h$ of the Saturn $\text{V}$ rocket for the Apollo $11$ mission $t$ seconds after launch.

> TABLE {tab:fs-id1169737141583} cols=2 class=unnumbered
> summary: This table has seven rows and two columns. The first row is a header row and it labels each column. The first column header is Time (seconds) and the second column is Height (meters). Under the first column are the values 0, 1, 2, 3, 4, and 5. Under the second column are the values 0, 2, 4, 13, 25, and 32.

| Time (seconds) | Height (meters) |
| --- | --- |
| $0$ | $0$ |
| $1$ | $2$ |
| $2$ | $4$ |
| $3$ | $13$ |
| $4$ | $25$ |
| $5$ | $32$ |

:::exercise {fs-id1169738039225} type= 
PROBLEM:
What is the physical meaning of ${h}^{'}(t)?$ What are the units?
:::

:::exercise {fs-id1169738039259} type= 
PROBLEM:
**[T]** Construct a table of values for ${h}^{'}(t)$ and graph both $h(t)$ and ${h}^{'}(t)$ on the same graph. (*Hint:* for {term:interior points}, estimate both the left limit and right limit and average them. An interior point of an interval I is an element of I which is not an endpoint of I.)
SOLUTION:

> TABLE {tab:fs-id1169738193224} cols=2 class=unnumbered
> summary: This table has seven rows and two columns. The first row is a header row and it labels each column. The first column header is Time (seconds) and the second column is h’(t) (m/s). Under the first column are the values 0, 1, 2, 3, 4, and 5. Under the second column are the values 2, 2, 5.5, 10.5, 9.5, and 7.

| Time (seconds) | ${h}^{'}(t)\;\text{(m/s)}$ |
| --- | --- |
| $0$ | $2$ |
| $1$ | $2$ |
| $2$ | $5.5$ |
| $3$ | $10.5$ |
| $4$ | $9.5$ |
| $5$ | $7$ |

:::

:::exercise {fs-id1169738220747} type= 
PROBLEM:
**[T]** The best linear fit to the data is given by $H(t)=7.229t-4.905,$ where $H$ is the height of the rocket (in meters) and $t$ is the time elapsed since takeoff. From this equation, determine ${H}^{'}(t).$ Graph $H(t)$ with the given data and, on a separate coordinate plane, graph ${H}^{'}(t).$
:::

:::exercise {fs-id1169738220895} type= 
PROBLEM:
**[T]** The best quadratic fit to the data is given by $G(t)=1.429{t}^{2}+0.0857t-0.1429,$ where $G$ is the height of the rocket (in meters) and $t$ is the time elapsed since takeoff. From this equation, determine ${G}^{'}(t).$ Graph $G(t)$ with the given data and, on a separate coordinate plane, graph ${G}^{'}(t).$
SOLUTION:
${G}^{'}(t)=2.858t+0.0857$

> IMAGE {img:fs-id1169737922941} src=../../media/CNX_Calc_Figure_03_02_229.jpg
> alt: This graph has the points (0, 0), (1, 2), (2, 4), (3, 13), (4, 25), and (5, 32). There is a quadratic line fit to the points with y intercept near 0.

> IMAGE {img:fs-id1169737922955} src=../../media/CNX_Calc_Figure_03_02_230.jpg
> alt: This graph has a straight line with y intercept near 0 and slope slightly less than 3.

:::

:::exercise {fs-id1169737922969} type= 
PROBLEM:
**[T]** The best cubic fit to the data is given by $F(t)=0.2037{t}^{3}+2.956{t}^{2}-2.705t+0.4683,$ where $F$ is the height of the rocket (in m) and $t$ is the time elapsed since take off. From this equation, determine ${F}^{'}(t).$ Graph $F(t)$ with the given data and, on a separate coordinate plane, graph ${F}^{'}(t).$ Does the linear, quadratic, or cubic function fit the data best?
:::

:::exercise {fs-id1169738227120} type= 
PROBLEM:
Using the best linear, quadratic, and cubic fits to the data, determine what ${H}^{''}(t),{G}^{''}(t)\;\text{and}\;{F}^{''}(t)$ are. What are the physical meanings of ${H}^{''}(t),{G}^{''}(t)\;\text{and}\;{F}^{''}(t),$ and what are their units?
SOLUTION:
${H}^{''}(t)=0,{G}^{''}(t)=2.858\;\text{and}\;{f}^{''}(t)=1.222t+5.912$ represent the acceleration of the rocket, with units of meters per second squared $({\text{m/s}}^{2}).$
:::

## Glossary
- {def} **derivative function**: gives the derivative of a function at each point in the domain of the original function for which the derivative is defined
- {def} **differentiable at ***a*****: a function for which ${f}^{'}(a)$ exists is differentiable at $a$
- {def} **differentiable on ***S*****: a function for which ${f}^{'}(x)$ exists for each $x$ in the open set $S$ is differentiable on $S$
- {def} **differentiable function**: a function for which ${f}^{'}(x)$ exists is a differentiable function
- {def} **higher-order derivative**: a derivative of a derivative, from the second derivative to the *n*th derivative, is called a higher-order derivative

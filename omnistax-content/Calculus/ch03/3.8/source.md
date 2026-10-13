# Implicit Differentiation

## Learning Objectives {section:learning-objectives}
- Find the derivative of a complicated function by using implicit differentiation.
- Use implicit differentiation to determine the equation of a tangent line.

We have already studied how to find equations of tangent lines to functions and the rate of change of a function at a specific point. In all these cases we had the explicit equation for the function and differentiated these functions explicitly. Suppose instead that we want to determine the equation of a tangent line to an arbitrary curve or the rate of change of an arbitrary curve at a point. In this section, we solve these problems by finding the derivatives of functions that define $y$ implicitly in terms of $x.$

## Implicit Differentiation
In most discussions of math, if the dependent variable $y$ is a function of the independent variable $x,$ we express *y* in terms of $x.$ If this is the case, we say that $y$ is an explicit function of $x.$ For example, when we write the equation $y={x}^{2}+1,$ we are defining *y* explicitly in terms of $x.$ On the other hand, if the relationship between the function $y$ and the variable $x$ is expressed by an equation where $y$ is not expressed entirely in terms of $x,$ we say that the equation defines *y* implicitly in terms of $x.$ For example, the equation $y-{x}^{2}=1$ defines the function $y={x}^{2}+1$ implicitly.
Implicit differentiation allows us to find slopes of tangents to curves that are clearly not functions (they fail the vertical line test). We are using the idea that portions of $y$ are functions that satisfy the given equation, but that $y$ is not actually a function of $x.$
In general, an equation defines a function implicitly if the function satisfies that equation. An equation may define many different functions implicitly. For example, the functions
$y=\sqrt{25-{x}^{2}},y=-\sqrt{25-{x}^{2}},$ and $y=\left\{\begin{array}{l}\sqrt{25-{x}^{2}}\;\text{if}-5<x<0 \\ \text{−}\sqrt{25-{x}^{2}}\;\text{if}\;0<x<25\end{array}\right.,$ which are illustrated in [ref:CNX_Calc_Figure_03_08_001], are just three of the many functions defined implicitly by the equation ${x}^{2}+{y}^{2}=25.$

> FIGURE {fig:CNX_Calc_Figure_03_08_001} src=../../media/CNX_Calc_Figure_03_08_001.jpg
> alt: The circle with radius 5 and center at the origin is graphed fully in one picture. Then, only its segments in quadrants I and II are graphed. Then, only its segments in quadrants III and IV are graphed. Lastly, only its segments in quadrants II and IV are graphed.
> caption: The equation ${x}^{2}+{y}^{2}=25$ defines many functions implicitly.

If we want to find the slope of the line tangent to the graph of ${x}^{2}+{y}^{2}=25$ at the point $(3,4),$ we could evaluate the derivative of the function $y=\sqrt{25-{x}^{2}}$ at $x=3.$ On the other hand, if we want the slope of the tangent line at the point $(3,−4),$ we could use the derivative of $y=\text{−}\sqrt{25-{x}^{2}}.$ However, it is not always easy to solve for a function defined implicitly by an equation. Fortunately, the technique of {term:implicit differentiation} allows us to find the derivative of an implicitly defined function without ever solving for the function explicitly. The process of finding $\frac{dy}{dx}$ using implicit differentiation is described in the following problem-solving strategy.

:::note [problem-solving] Implicit Differentiation
To perform implicit differentiation on an equation that defines a function $y$ implicitly in terms of a variable $x,$ use the following steps:
1. Take the derivative of both sides of the equation. Keep in mind that *y* is a function of *x*. Consequently, whereas $\frac{d}{dx}(\text{sin}\;x)=\text{cos}\;x,\frac{d}{dx}(\text{sin}\;y)=\text{cos}\;y\frac{dy}{dx}$ because we must use the chain rule to differentiate $\text{sin}\;y$ with respect to $x.$
2. Rewrite the equation so that all terms containing $\frac{dy}{dx}$ are on the left and all terms that do not contain $\frac{dy}{dx}$ are on the right.
3. Factor out $\frac{dy}{dx}$ on the left.
4. Solve for $\frac{dy}{dx}$ by dividing both sides of the equation by an appropriate algebraic expression.
:::

:::example {ex:fs-id1169737819953} Using Implicit Differentiation

:::exercise {fs-id1169738015312} type= 
PROBLEM:
Assuming that $y$ is defined implicitly by the equation ${x}^{2}+{y}^{2}=25,$ find $\frac{dy}{dx}.$
SOLUTION:
Follow the steps in the problem-solving strategy.

$\begin{array}{rlllll}\frac{d}{dx}({x}^{2}+{y}^{2}) & = & \frac{d}{dx}(25) & & & \text{Step 1. Differentiate both sides of the equation.} \\ \frac{d}{dx}({x}^{2})+\frac{d}{dx}({y}^{2}) & = & 0 & & & \begin{array}{l}\text{Step 1.1. Use the sum rule on the left.} \\ \text{On the right}\;\frac{d}{dx}(25)=0.\end{array} \\ 2x+2y\frac{dy}{dx} & = & 0 & & & \begin{array}{l}\text{Step 1.2. Take the derivatives, so}\;\frac{d}{dx}({x}^{2})=2x \\ \text{and}\;\frac{d}{dx}({y}^{2})=2y\frac{dy}{dx}.\end{array} \\ 2y\frac{dy}{dx} & = & −2x & & & \begin{array}{l}\text{Step 2. Keep the terms with}\;\frac{dy}{dx}\;\text{on the left.} \\ \text{Move the remaining terms to the right.}\end{array} \\ \frac{dy}{dx} & = & -\frac{x}{y} & & & \begin{array}{l}\text{Step 4. Divide both sides of the equation by} \\ 2y.\;\text{(Step 3 does not apply in this case.)}\end{array}\end{array}$  {eq:fs-id1169737840968}

COMMENTARY: Analysis
Note that the resulting expression for $\frac{dy}{dx}$ is in terms of both the independent variable $x$ and the dependent variable $y.$ Although in some cases it may be possible to express $\frac{dy}{dx}$ in terms of $x$ only, it is generally not possible to do so.
:::
:::

:::example {ex:fs-id1169738068274} Using Implicit Differentiation and the Product Rule

:::exercise {fs-id1169738149878} type= 
PROBLEM:
Assuming that $y$ is defined implicitly by the equation ${x}^{3}\;\text{sin}\;y+y=4x+3,$ find $\frac{dy}{dx}.$
SOLUTION:

$\begin{array}{rlllll}\frac{d}{dx}({x}^{3}\text{sin}\;y+y) & = & \frac{d}{dx}(4x+3) & & & \text{Step 1: Differentiate both sides of the equation.} \\ \frac{d}{dx}({x}^{3}\text{sin}\;y)+\frac{d}{dx}(y) & = & 4 & & & \begin{array}{l}\text{Step 1.1: Apply the sum rule on the left.} \\ \text{On the right,}\;\frac{d}{dx}(4x+3)=4.\end{array} \\ (\frac{d}{dx}({x}^{3})\cdot \text{sin}\;y+\frac{d}{dx}(\text{sin}\;y)\cdot {x}^{3})+\frac{dy}{dx} & = & 4 & & & \begin{array}{l}\text{Step 1.2: Use the product rule to find} \\ \frac{d}{dx}({x}^{3}\text{sin}\;y).\;\text{Observe that}\;\frac{d}{dx}(y)=\frac{dy}{dx}.\end{array} \\ 3{x}^{2}\text{sin}\;y+(\text{cos}\;y\frac{dy}{dx})\cdot {x}^{3}+\frac{dy}{dx} & = & 4 & & & \begin{array}{l}\text{Step 1.3: We know}\;\frac{d}{dx}({x}^{3})=3{x}^{2}.\;\text{Use the} \\ \text{chain rule to obtain}\;\frac{d}{dx}(\text{sin}\;y)=\text{cos}\;y\frac{dy}{dx}.\end{array} \\ {\text{x}}^{3}\text{cos}\;y\frac{dy}{dx}+\frac{dy}{dx} & = & 4-3{x}^{2}\text{sin}\;y & & & \begin{array}{l}\text{Step 2: Keep all terms containing}\;\frac{dy}{dx}\;\text{on the} \\ \text{left. Move all other terms to the right.}\end{array} \\ \frac{dy}{dx}({\text{x}}^{3}\text{cos}\;y+1) & = & 4-3{x}^{2}\text{sin}\;y & & & \text{Step 3: Factor out}\;\frac{dy}{dx}\;\text{on the left.} \\ \frac{dy}{dx} & = & \frac{4-3{x}^{2}\text{sin}\;y}{{x}^{3}\text{cos}\;y+1} & & & \begin{array}{l}\text{Step 4: Solve for}\;\frac{dy}{dx}\;\text{by dividing both sides of} \\ \text{the equation by}\;{\text{x}}^{3}\text{cos}\;y+1.\end{array}\end{array}$  {eq:fs-id1169737814728}

:::
:::

:::example {ex:fs-id1169738217476} Using Implicit Differentiation to Find a Second Derivative

:::exercise {fs-id1169738185350} type= 
PROBLEM:
Find $\frac{{d}^{2}y}{d{x}^{2}}$ if ${x}^{2}+{y}^{2}=25.$
SOLUTION:
In [ref:fs-id1169737819953], we showed that $\frac{dy}{dx}=-\frac{x}{y}.$ We can take the derivative of both sides of this equation to find $\frac{{d}^{2}y}{d{x}^{2}}.$

$\begin{array}{rllll}\frac{{d}^{2}y}{d{x}^{2}} & =\frac{d}{dx}(-\frac{x}{y}) & & & \text{Differentiate both sides of}\;\frac{dy}{dx}=-\frac{x}{y}. \\ & =-\frac{(1\cdot y-x\frac{dy}{dx})}{{y}^{2}} & & & \text{Use the quotient rule to find}\;\frac{d}{dy}(-\frac{x}{y}). \\ & =\frac{\text{−}y+x\frac{dy}{dx}}{{y}^{2}} & & & \text{Simplify.} \\ & =\frac{\text{−}y+x(-\frac{x}{y})}{{y}^{2}} & & & \text{Substitute}\;\frac{dy}{dx}=-\frac{x}{y}. \\ & =\frac{\text{−}{y}^{2}-{x}^{2}}{{y}^{3}} & & & \text{Simplify.}\end{array}$  {eq:fs-id1169737766542}

At this point we have found an expression for $\frac{{d}^{2}y}{d{x}^{2}}.$ If we choose, we can simplify the expression further by recalling that ${x}^{2}+{y}^{2}=25$ and making this substitution in the numerator to obtain $\frac{{d}^{2}y}{d{x}^{2}}=-\frac{25}{{y}^{3}}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738220221} type= 
PROBLEM:
Find $\frac{dy}{dx}$ for $y$ defined implicitly by the equation $4{x}^{5}+\text{tan}\;y={y}^{2}+5x.$
SOLUTION:
$\frac{dy}{dx}=\frac{5-20{x}^{4}}{{\text{sec}}^{2}y-2y}$
COMMENTARY: Hint
Follow the problem solving strategy, remembering to apply the chain rule to differentiate $\text{tan}$ and ${y}^{2}.$
:::
:::

## Finding Tangent Lines Implicitly
Now that we have seen the technique of implicit differentiation, we can apply it to the problem of finding equations of tangent lines to curves described by equations.

:::example {ex:fs-id1169737931601} Finding a Tangent Line to a Circle

:::exercise {fs-id1169737906658} type= 
PROBLEM:
Find an equation of the line tangent to the curve ${x}^{2}+{y}^{2}=25$ at the point $(3,−4).$
SOLUTION:
Although we could find this equation without using implicit differentiation, using that method makes it much easier. In [ref:fs-id1169737819953], we found $\frac{dy}{dx}=-\frac{x}{y}.$
The slope of the tangent line is found by substituting $(3,−4)$ into this expression. Consequently, the slope of the tangent line is $\frac{dy}{dx}\left|\begin{array}{l} \\ {}_{(3,−4)}\end{array}\right.=-\frac{3}{−4}=\frac{3}{4}.$
Using the point $(3,−4)$ and the slope $\frac{3}{4}$ in the point-slope equation of the line, we obtain the equation $y=\frac{3}{4}x-\frac{25}{4}$ ([ref:CNX_Calc_Figure_03_08_002]).

> FIGURE {fig:CNX_Calc_Figure_03_08_002} src=../../media/CNX_Calc_Figure_03_08_002.jpg
> alt: The circle with radius 5 and center at the origin is graphed. A tangent line is drawn through the point (3, −4).
> caption: The line $y=\frac{3}{4}x-\frac{25}{4}$ is tangent to ${x}^{2}+{y}^{2}=25$ at the point (3, −4).

:::
:::

:::example {ex:fs-id1169737142255} Finding the Equation of the Tangent Line to a Curve

:::exercise {fs-id1169737142258} type= 
PROBLEM:
Find an equation of the line tangent to the graph of ${y}^{3}+{x}^{3}-3xy=0$ at the point $(\frac{3}{2},\frac{3}{2})$ ([ref:CNX_Calc_Figure_03_08_003]). This curve is known as the folium (or leaf) of Descartes.

> FIGURE {fig:CNX_Calc_Figure_03_08_003} src=../../media/CNX_Calc_Figure_03_08_003.jpg
> alt: A folium is shown, which is a line that creates a loop that crosses over itself. In this graph, it crosses over itself at (0, 0). Its tangent line from (3/2, 3/2) is shown.
> caption: Finding the tangent line to the {index:folium of Descartes} at $(\frac{3}{2},\frac{3}{2}).$

SOLUTION:
Begin by finding $\frac{dy}{dx}.$

$\begin{array}{rll}\frac{d}{dx}({y}^{3}+{x}^{3}-3xy) & = & \frac{d}{dx}(0) \\ 3{y}^{2}\frac{dy}{dx}+3{x}^{2}-(3y+\frac{dy}{dx}3x) & = & 0 \\ \frac{dy}{dx} & = & \frac{3y-3{x}^{2}}{3{y}^{2}-3x}.\end{array}$  {eq:fs-id1169738185005}

Next, substitute $(\frac{3}{2},\frac{3}{2})$ into $\frac{dy}{dx}=\frac{3y-3{x}^{2}}{3{y}^{2}-3x}$ to find the slope of the tangent line:

$\frac{dy}{dx}\left|\begin{array}{l} \\ {}_{(\frac{3}{2},\frac{3}{2})}\end{array}\right.=−1.$  {eq:fs-id1169738045102}

Finally, substitute into the point-slope equation of the line to obtain

$y=\text{−}x+3.$  {eq:fs-id1169737950856}

:::
:::

:::example {ex:fs-id1169737935216} Applying Implicit Differentiation

:::exercise {fs-id1169737935219} type= 
PROBLEM:
In a simple video game, a rocket travels in an elliptical orbit whose path is described by the equation $4{x}^{2}+25{y}^{2}=100.$ The rocket can fire missiles along lines tangent to its path. The object of the game is to destroy an incoming asteroid traveling along the positive *x*-axis toward $(0,0).$ If the rocket fires a missile when it is located at $(3,\frac{8}{5}),$ where will it intersect the *x*-axis?
SOLUTION:
To solve this problem, we must determine where the line tangent to the graph of
$4{x}^{2}+25{y}^{2}=100$ at $(3,\frac{8}{5})$ intersects the *x*-axis. Begin by finding $\frac{dy}{dx}$ implicitly.
Differentiating, we have

$8x+50y\frac{dy}{dx}=0.$  {eq:fs-id1169737144258}

Solving for $\frac{dy}{dx},$ we have

$\frac{dy}{dx}=-\frac{4x}{25y}.$  {eq:fs-id1169738223546}

The slope of the tangent line is $\frac{dy}{dx}|{}_{(3,\frac{8}{5})}=-\frac{3}{10}.$ The equation of the tangent line is $y=-\frac{3}{10}x+\frac{5}{2}.$ To determine where the line intersects the *x*-axis, solve $0=-\frac{3}{10}x+\frac{5}{2}.$ The solution is $x=\frac{25}{3}.$ The missile intersects the *x*-axis at the point $(\frac{25}{3},0).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738186788} type= 
PROBLEM:
Find an equation of the line tangent to the hyperbola ${x}^{2}-{y}^{2}=16$ at the point $(5,3).$
SOLUTION:
$y=\frac{5}{3}x-\frac{16}{3}$
COMMENTARY: Hint
$\frac{dy}{dx}=\frac{x}{y}$
:::
:::

## Key Concepts {section:key-concepts}
- We use implicit differentiation to find derivatives of implicitly defined functions (functions defined by equations).
- By using implicit differentiation, we can find the equation of a tangent line to the graph of a curve.

##  {section:section-exercises}
For the following exercises, use implicit differentiation to find $\frac{dy}{dx}.$

:::exercise {fs-id1169738212639} type= 
PROBLEM:
${x}^{2}-{y}^{2}=4$
:::

:::exercise {fs-id1169738106195} type= 
PROBLEM:
$6{x}^{2}+3{y}^{2}=12$
SOLUTION:
$\frac{dy}{dx}=\frac{−2x}{y}$
:::

:::exercise {fs-id1169738106257} type= 
PROBLEM:
${x}^{2}y=y-7$
:::

:::exercise {fs-id1169738073286} type= 
PROBLEM:
$3{x}^{3}+9x{y}^{2}=5{x}^{3}$
SOLUTION:
$\frac{dy}{dx}=\frac{x}{3y}-\frac{y}{2x}$
:::

:::exercise {fs-id1169738223350} type= 
PROBLEM:
$xy-\text{cos}\;(xy)=1$
:::

:::exercise {fs-id1169738237485} type= 
PROBLEM:
$y\sqrt{x+4}=xy+8$
SOLUTION:
$\frac{dy}{dx}=\frac{y-\frac{y}{2\sqrt{x+4}}}{\sqrt{x+4}-x}$
:::

:::exercise {fs-id1169738073148} type= 
PROBLEM:
$\text{−}xy-2=\frac{x}{7}$
:::

:::exercise {fs-id1169737911358} type= 
PROBLEM:
$y\;\text{sin}\;(xy)={y}^{2}-2$
SOLUTION:
$\frac{dy}{dx}=\frac{{y}^{2}\text{cos}\;(xy)}{2y-\text{sin}\;(xy)-xy\;\text{cos}\;(xy)}$
:::

:::exercise {fs-id1169738212451} type= 
PROBLEM:
${(xy)}^{2}+3x={y}^{2}$
:::

:::exercise {fs-id1169738187223} type= 
PROBLEM:
${x}^{3}y+x{y}^{3}=−8$
SOLUTION:
$\frac{dy}{dx}=\frac{−3{x}^{2}y-{y}^{3}}{{x}^{3}+3x{y}^{2}}$
:::
For the following exercises, find an equation of the tangent line to the graph of the given equation at the indicated point. Use a calculator or computer software to graph the function and the tangent line.

:::exercise {fs-id1169738184795} type= 
PROBLEM:
**[T]** ${x}^{4}y-x{y}^{3}=−2,(−1,−1)$
:::

:::exercise {fs-id1169738184892} type= 
PROBLEM:
**[T]** ${x}^{2}{y}^{2}+5xy=14,(2,1)$
SOLUTION:

> IMAGE {img:fs-id1169738226145} src=../../media/CNX_Calc_Figure_03_08_202.jpg
> alt: The graph has a crescent in each of the four quadrants. There is a straight line marked T(x) with slope −1/2 and y intercept 2.

$y=\frac{−1}{2}x+2$
:::

:::exercise {fs-id1169738226177} type= 
PROBLEM:
**[T]** $\text{tan}\;(xy)=y,(\frac{\pi}{4},1)$
:::

:::exercise {fs-id1169738238122} type= 
PROBLEM:
**[T]** $x{y}^{2}+\text{sin}\;(\pi y)-2{x}^{2}=10,(2,−3)$
SOLUTION:

> IMAGE {img:fs-id1169738234524} src=../../media/CNX_Calc_Figure_03_08_204.jpg
> alt: The graph has two curves, one in the first quadrant and one in the fourth quadrant. They are symmetric about the x axis. The curve in the first quadrant goes from (0.3, 5) to (1.5, 3.5) to (5, 4). There is a straight line marked T(x) with slope 1/(π + 12) and y intercept −(3π + 38)/(π + 12).

$y=\frac{1}{\pi +12}x-\frac{3\pi +38}{\pi +12}$
:::

:::exercise {fs-id1169738234576} type= 
PROBLEM:
**[T]** $\frac{x}{y}+5x-7=-\frac{3}{4}y,(1,2)$
:::

:::exercise {fs-id1169738221157} type= 
PROBLEM:
**[T]** $xy+\text{sin}\;(x)=1,(\frac{\pi}{2},0)$
SOLUTION:

> IMAGE {img:fs-id1169738221218} src=../../media/CNX_Calc_Figure_03_08_206.jpg
> alt: The graph starts in the third quadrant near (−5, 0), remains near 0 until x = −4, at which point it decreases until it reaches near (0, −5). There is an asymptote at x = 0. The graph begins again near (0, 5) decreases to (1, 0) and then increases a little bit before decreasing to be near (5, 0). There is a straight line marked T(x) that coincides with y = 0.

$y=0$
:::

:::exercise {fs-id1169738221240} type= 
PROBLEM:
**[T]** The graph of a folium of Descartes with equation $2{x}^{3}+2{y}^{3}-9xy=0$ is given in the following graph.

> IMAGE {img:fs-id1169737145046} src=../../media/CNX_Calc_Figure_03_08_207.jpg
> alt: A folium is graphed which has equation 2x3 + 2y3 – 9xy = 0. It crosses over itself at (0, 0).

a. Find an equation of the tangent line at the point $(2,1).$ Graph the tangent line along with the folium.
b. Find an equation of the normal line to the tangent line in a. at the point $(2,1).$
:::

:::exercise {fs-id1169738244350} type= 
PROBLEM:
For the equation ${x}^{2}+2xy-3{y}^{2}=0,$
a. Find an equation of the normal to the tangent line at the point $(1,1).$
b. At what other point does the normal line in a. intersect the graph of the equation?
SOLUTION:
a. $y=\text{−}x+2$ b. $(3,−1)$
:::

:::exercise {fs-id1169738244457} type= 
PROBLEM:
Find all points on the graph of ${y}^{3}-27y={x}^{2}-90$ at which the tangent line is vertical.
:::

:::exercise {fs-id1169738211822} type= 
PROBLEM:
For the equation ${x}^{2}+xy+{y}^{2}=7,$
a. Find the $x$-intercept(s).
b. Find the slope of the tangent line(s) at the *x*-intercept(s).
c. What does the value(s) in b. indicate about the tangent line(s)?
SOLUTION:
a. $(\pm \sqrt{7},0)$ b. $−2$ c. They are parallel since the slope is the same at both intercepts.
:::

:::exercise {fs-id1169738211914} type= 
PROBLEM:
Find an equation of the tangent line to the graph of the equation ${\text{sin}}^{−1}x+{\text{sin}}^{−1}y=\frac{\pi}{6}$ at the point $(0,\frac{1}{2}).$
:::

:::exercise {fs-id1169738201886} type= 
PROBLEM:
Find an equation of the tangent line to the graph of the equation ${\text{tan}}^{−1}(x+y)={x}^{2}+\frac{\pi}{4}$ at the point $(0,1).$
SOLUTION:
$y=\text{−}x+1$
:::

:::exercise {fs-id1169738186907} type= 
PROBLEM:
Find ${y}^{'}$ and ${y}^{''}$ for ${x}^{2}+6xy-2{y}^{2}=3.$
:::

:::exercise {fs-id1169737934269} type= 
PROBLEM:
**[T]** The number of cell phones produced when $x$ dollars is spent on labor and $y$ dollars is spent on capital invested by a manufacturer can be modeled by the equation $60{x}^{3\text{/}4}{y}^{1\text{/}4}=3240.$
a. Find $\frac{dy}{dx}$ and evaluate at the point $(81,16).$
b. Interpret the result of a.
SOLUTION:
a. $−0.5926$ b. When $81 is spent on labor and $16 is spent on capital, the amount spent on capital is decreasing by $0.5926 per $1 spent on labor.
:::

:::exercise {fs-id1169738185040} type= 
PROBLEM:
**[T]** The number of cars produced when $x$ dollars is spent on labor and $y$ dollars is spent on capital invested by a manufacturer can be modeled by the equation $30{x}^{1\text{/}3}{y}^{2\text{/}3}=360.$
(Both $x$ and $y$ are measured in thousands of dollars.)
a. Find $\frac{dy}{dx}$ and evaluate at the point $(27,8).$
b. Interpret the result of a.
:::

:::exercise {fs-id1169738185162} type= 
PROBLEM:
The volume of a right circular cone of radius $x$ and height $y$ is given by $V=\frac{1}{3}\pi {x}^{2}y.$ Suppose that the volume of the cone is a constant. Find $\frac{dy}{dx}$ when $x=4$ and $y=16.$
SOLUTION:
$−8$
:::
For the following exercises, consider a closed rectangular box with a square base with side $x$ and height $y.$

:::exercise {fs-id1169737954174} type= 
PROBLEM:
Find an equation for the surface area of the rectangular box, $S(x,y).$
:::

:::exercise {fs-id1169737954242} type= 
PROBLEM:
If the surface area of the rectangular box is 78 square feet, find $\frac{dy}{dx}$ when $x=3$ feet and $y=5$ feet.
SOLUTION:
$−2.67$
:::
For the following exercises, use implicit differentiation to determine ${y}^{'}.$ Does the answer agree with the formulas we have previously determined?

:::exercise {fs-id1169738071354} type= 
PROBLEM:
$x=\text{sin}\;y$
:::

:::exercise {fs-id1169738071406} type= 
PROBLEM:
$x=\text{cos}\;y$
SOLUTION:
${y}^{'}=-\frac{1}{\sqrt{1-{x}^{2}}}$
:::

:::exercise {fs-id1169738071461} type= 
PROBLEM:
$x=\text{tan}\;y$
:::

## Glossary
- {def} **implicit differentiation**: is a technique for computing $\frac{dy}{dx}$ for a function defined by an equation, accomplished by differentiating both sides of the equation (remembering to treat the variable $y$ as a function) and solving for $\frac{dy}{dx}$

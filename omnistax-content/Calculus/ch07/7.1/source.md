# Integration by Parts

## Learning Objectives {section:learning-objectives}
- Recognize when to use integration by parts.
- Use the integration-by-parts formula to solve integration problems.
- Use the integration-by-parts formula for definite integrals.

By now we have a fairly thorough procedure for how to evaluate many basic integrals. However, although we can integrate ${\displaystyle \int x\;\text{sin}({x}^{2})dx}$ by using the substitution, $u={x}^{2},$ something as simple looking as ${\displaystyle \int x\;\text{sin}\;x\;dx}$ defies us. Many students want to know whether there is a product rule for integration. There isn’t, but there is a technique based on the product rule for differentiation that allows us to exchange one integral for another. We call this technique {term:integration by parts}.

## The Integration-by-Parts Formula
If, $h(x)=f(x)g(x),$ then by using the product rule, we obtain ${h}^{'}(x)={f}^{'}(x)g(x)+{g}^{'}(x)f(x).$ Although at first it may seem counterproductive, let’s now integrate both sides of this equation: ${\displaystyle \int {h}^{'}(x)dx={\displaystyle \int (g(x){f}^{'}(x)+f(x){g}^{'}(x))dx.}}$
This gives us

$h(x)=f(x)g(x)={\displaystyle \int g(x){f}^{'}(x)dx+{\displaystyle \int f(x){g}^{'}(x)dx.}}$  {eq:fs-id1165042041848}

Now we solve for ${\displaystyle \int f(x){g}^{'}(x)dx:}$

${\displaystyle \int f(x){g}^{'}(x)dx=f(x)g(x)-{\displaystyle \int g(x){f}^{'}(x)dx.}}$  {eq:fs-id1165042235539}

By making the substitutions $u=f(x)$ and $v=g(x),$ which in turn make $du={f}^{'}(x)dx$ and $dv={g}^{'}(x)dx,$ we have the more compact form

${\displaystyle \int u\;dv=uv-}{\displaystyle \int v\;du.}$  {eq:fs-id1165041813626}

:::note [theorem] Integration by Parts
Let $u=f(x)$ and $v=g(x)$ be functions with continuous derivatives. Then, the integration-by-parts formula for the integral involving these two functions is:

${\displaystyle \int u\;dv=uv-{\displaystyle \int v\;du}}.$  {eq:fs-id1165042232372} class=numbered

:::
The advantage of using the integration-by-parts formula is that we can use it to exchange one integral for another, possibly easier, integral. The following example illustrates its use.

:::example {ex:fs-id1165041832973} Using Integration by Parts

:::exercise {fs-id1165041816966} type= 
PROBLEM:
Use integration by parts with $u=x$ and $dv=\text{sin}\;x\;dx$ to evaluate ${\displaystyle \int x\;\text{sin}\;x\;dx.}$
SOLUTION:
By choosing $u=x,$ we have $du=1dx.$ Since $dv=\text{sin}\;x\;dx,$ we get $v={\displaystyle \int \text{sin}\;x\;dx=\text{−}\text{cos}\;x.}$ It is handy to keep track of these values as follows:

$\begin{array}{rlllrll}u & = & x & & dv & = & \text{sin}\;x\;dx \\ du & = & 1dx & & v & = & {\displaystyle \int \text{sin}\;x\;dx=\text{−}\text{cos}\;x.}\end{array}$  {eq:fs-id1165041792867}

Applying the integration-by-parts formula results in

$\begin{array}{rlll}{\displaystyle \int x\;\text{sin}\;x\;dx} & =(x)(\text{−}\text{cos}\;x)-{\displaystyle \int (\text{−}\text{cos}\;x)(1dx)} & & \text{Substitute}. \\ & =\text{−}x\;\text{cos}\;x+{\displaystyle \int \text{cos}\;x\;dx} & & \text{Simplify}. \\ & =\text{−}x\;\text{cos}\;x+\text{sin}\;x+C. & & \text{Use}\;{\displaystyle \int \text{cos}\;x\;dx=\text{sin}\;x+C.}\end{array}$  {eq:fs-id1165041985992}

COMMENTARY: Analysis
At this point, there are probably a few items that need clarification. First of all, you may be curious about what would have happened if we had chosen $u=\text{sin}\;x$ and $dv=x.$ If we had done so, then we would have $du=\text{cos}\;xdx$ and $v=\frac{1}{2}{x}^{2}.$ Thus, after applying integration by parts, we have ${{\displaystyle \int}}^{}x\;\text{sin}\;x\;dx=\frac{1}{2}{x}^{2}\text{sin}\;x-{{\displaystyle \int}}^{}\frac{1}{2}{x}^{2}\text{cos}\;x\;dx.$ Unfortunately, with the new integral, we are in no better position than before. It is important to keep in mind that when we apply integration by parts, we may need to try several choices for $u$ and $dv$ before finding a choice that works.
Second, you may wonder why, when we find $v={{\displaystyle \int}}^{}\text{sin}\;x\;dx=\text{−}\text{cos}\;x,$ we do not use $v=\text{−}\text{cos}\;x+K.$ To see that it makes no difference, we can rework the problem using $v=\text{−}\text{cos}\;x+K\text{:}$

$\begin{array}{ll}{{\displaystyle \int}}^{\;}x\;\text{sin}\;x\;dx & =(x)(\text{−}\text{cos}\;x+K)-{{\displaystyle \int}}^{\;}(\text{−}\text{cos}\;x+K)(1dx) \\ & =\text{−}x\;\text{cos}\;x+Kx+{{\displaystyle \int}}^{\;}\text{cos}\;x\;dx-{{\displaystyle \int}}^{\;}Kdx \\ & =\text{−}x\;\text{cos}\;x\;+Kx+\text{sin}\;x-Kx+C \\ & =\text{−}x\;\text{cos}\;x+\text{sin}\;x+C.\end{array}$  {eq:fs-id1165042094536}

As you can see, it makes no difference in the final solution.
Last, we can check to make sure that our antiderivative is correct by differentiating $\text{−}x\;\text{cos}\;x+\text{sin}\;x+C\text{:}$

$\begin{array}{ll}\frac{d}{dx}(\text{−}x\;\text{cos}\;x+\text{sin}\;x+C) & =(−1)\text{cos}\;x+(\text{−}x)(\text{−}\text{sin}\;x)+\text{cos}\;x \\ & =x\;\text{sin}\;x.\end{array}$  {eq:fs-id1165041952373}

Therefore, the antiderivative checks out.
:::
:::

:::note [media-2] 
Watch this [video](http://www.openstax.org/l/20_intbyparts1) and visit this [website](http://www.openstax.org/l/20_intbyparts2) for examples of integration by parts.
:::

:::note [checkpoint] 

:::exercise {fs-id1165042127899} type= 
PROBLEM:
Evaluate ${{\displaystyle \int}}^{}x{e}^{2x}dx$ using the integration-by-parts formula with $u=x$ and $dv={e}^{2x}dx.$
SOLUTION:
${{\displaystyle \int}}^{}x{e}^{2x}dx=\frac{1}{2}x{e}^{2x}-\frac{1}{4}{e}^{2x}+C$
COMMENTARY: Hint
Find $du$ and $v,$ and use the previous example as a guide.
:::
:::
The natural question to ask at this point is: How do we know how to choose $u$ and $dv?$ Sometimes it is a matter of trial and error; however, the acronym LIATE can often help to take some of the guesswork out of our choices. This acronym stands for **L**ogarithmic Functions, **I**nverse Trigonometric Functions, **A**lgebraic Functions, **T**rigonometric Functions, and **E**xponential Functions. This mnemonic serves as an aid in determining an appropriate choice for $u.$
The type of function in the integral that appears first in the list should be our first choice of $u.$ For example, if an integral contains a {index:logarithmic function} and an {index:algebraic function}, we should choose $u$ to be the logarithmic function, because L comes before A in LIATE. The integral in [ref:fs-id1165041832973] has a trigonometric function $\text{(}\text{sin}\;x\text{)}$ and an algebraic function $(x).$ Because A comes before T in LIATE, we chose $u$ to be the algebraic function. When we have chosen $u,$ $dv$ is selected to be the remaining part of the function to be integrated, together with $dx.$
Why does this mnemonic work? Remember that whatever we pick to be $dv$ must be something we can integrate. Since we do not have integration formulas that allow us to integrate simple logarithmic functions and inverse trigonometric functions, it makes sense that they should not be chosen as values for $dv.$ Consequently, they should be at the head of the list as choices for $u.$ Thus, we put LI at the beginning of the mnemonic. (We could just as easily have started with IL, since these two types of functions won’t appear together in an integration-by-parts problem.) The exponential and trigonometric functions are at the end of our list because they are fairly easy to integrate and make good choices for $dv.$ Thus, we have TE at the end of our mnemonic. (We could just as easily have used ET at the end, since when these types of functions appear together it usually doesn’t really matter which one is $u$ and which one is $dv.)$ Algebraic functions are generally easy both to integrate and to differentiate, and they come in the middle of the mnemonic.

:::example {ex:fs-id1165042015633} Using Integration by Parts

:::exercise {fs-id1165042015635} type= 
PROBLEM:
Evaluate ${\displaystyle \int \frac{\text{ln}\;x}{{x}^{3}}dx.}$
SOLUTION:
Begin by rewriting the integral:

${\displaystyle \int \frac{\text{ln}\;x}{{x}^{3}}dx}={{\displaystyle \int}}^{}{x}^{−3}\text{ln}\;x\;dx.$  {eq:fs-id1165042008468}

Since this integral contains the algebraic function ${x}^{−3}$ and the logarithmic function $\text{ln}\;x,$ choose $u=\text{ln}\;x,$ since L comes before A in LIATE. After we have chosen $u=\text{ln}\;x,$ we must choose $dv={x}^{−3}dx.$
Next, since $u=\text{ln}\;x,$ we have $du=\frac{1}{x}dx.$ Also, $v={{\displaystyle \int}}^{}{x}^{−3}dx=-\frac{1}{2}{x}^{−2}.$ Summarizing,

$\begin{array}{rlllrll}u & = & \text{ln}\;x & & dv & = & {x}^{−3}dx \\ du & = & \frac{1}{x}dx & & v & = & {{\displaystyle \int}}^{}{x}^{−3}dx=-\frac{1}{2}{x}^{−2}.\end{array}$  {eq:fs-id1165042109999}

Substituting into the integration-by-parts formula ([ref:fs-id1165042232372]) gives

$\begin{array}{rllll}{\displaystyle \int \frac{\text{ln}\;x}{{x}^{3}}dx} & ={{\displaystyle \int}}^{}{x}^{−3}\text{ln}\;x\;dx=(\text{ln}\;x)(\text{−}\;\frac{1}{2}{x}^{−2})-{{\displaystyle \int}}^{}(\text{−}\;\frac{1}{2}{x}^{−2})(\frac{1}{x}dx) & & & \\ & =-\frac{1}{2}{x}^{−2}\text{ln}\;x+{{\displaystyle \int}}^{}\frac{1}{2}{x}^{−3}dx & & & \text{Simplify}. \\ & =-\frac{1}{2}{x}^{−2}\text{ln}\;x-\frac{1}{4}{x}^{−2}+C & & & \text{Integrate}. \\ & =-\frac{1}{2{x}^{2}}\text{ln}\;x-\frac{1}{4{x}^{2}}+C. & & & \text{Rewrite with positive integers.}\end{array}$  {eq:fs-id1165042128805}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165041899921} type= 
PROBLEM:
Evaluate ${{\displaystyle \int}}^{}x\;\text{ln}\;x\;dx.$
SOLUTION:
$\frac{1}{2}{x}^{2}\text{ln}\;x-\frac{1}{4}{x}^{2}+C$
COMMENTARY: Hint
Use $u=\text{ln}\;x$ and $dv=x\;dx.$
:::
:::
In some cases, as in the next two examples, it may be necessary to apply integration by parts more than once.

:::example {ex:fs-id1165041948192} Applying Integration by Parts More Than Once

:::exercise {fs-id1165041948195} type= 
PROBLEM:
Evaluate ${{\displaystyle \int}}^{}{x}^{2}{e}^{3x}dx.$
SOLUTION:
Using LIATE, choose $u={x}^{2}$ and $dv={e}^{3x}dx.$ Thus, $du=2x\;dx$ and $v={\displaystyle \int {e}^{3x}dx=(\frac{1}{3}){e}^{3x}}.$ Therefore,

$\begin{array}{rlllrll}u & = & {x}^{2} & & dv & = & {e}^{3x}dx \\ du & = & 2x\;dx & & v & = & {\displaystyle \int {e}^{3x}dx=\frac{1}{3}{e}^{3x}}.\end{array}$  {eq:fs-id1165040740033}

Substituting into [ref:fs-id1165042232372] produces

${\displaystyle \int {x}^{2}{e}^{3x}dx}=\frac{1}{3}{x}^{2}{e}^{3x}-{\displaystyle \int \frac{2}{3}x{e}^{3x}dx}.$  {eq:fs-id1165042240117}

We still cannot integrate ${\displaystyle \int \frac{2}{3}x{e}^{3x}dx}$ directly, but the integral now has a lower power on $x.$ We can evaluate this new integral by using integration by parts again. To do this, choose $u=x$ and $dv=\frac{2}{3}{e}^{3x}dx.$ Thus, $du=dx$ and $v={\displaystyle \int (\frac{2}{3}){e}^{3x}dx=(\frac{2}{9}){e}^{3x}}.$ Now we have

$\begin{array}{rlllrll}u & = & x & & dv & = & \frac{2}{3}{e}^{3x}dx \\ du & = & dx & & v & = & {\displaystyle \int \frac{2}{3}{e}^{3x}dx=\frac{2}{9}{e}^{3x}}.\end{array}$  {eq:fs-id1165042002748}

Substituting back into the previous equation yields

${{\displaystyle \int}}^{}{x}^{2}{e}^{3x}dx=\frac{1}{3}{x}^{2}{e}^{3x}-(\frac{2}{9}x{e}^{3x}-{{\displaystyle \int}}^{}\frac{2}{9}{e}^{3x}dx).$  {eq:fs-id1165040757534}

After evaluating the last integral and simplifying, we obtain

${\displaystyle \int {x}^{2}{e}^{3x}dx}=\frac{1}{3}{x}^{2}{e}^{3x}-\frac{2}{9}x{e}^{3x}+\frac{2}{27}{e}^{3x}+C.$  {eq:fs-id1165042110527}

:::
:::

:::example {ex:fs-id1165042132627} Applying Integration by Parts When LIATE Doesn’t Quite Work

:::exercise {fs-id1165042132629} type= 
PROBLEM:
Evaluate ${{\displaystyle \int}}^{}{t}^{3}{e}^{{t}^{2}}dt.$
SOLUTION:
If we use a strict interpretation of the mnemonic LIATE to make our choice of $u,$ we end up with $u={t}^{3}$ and $dv={e}^{{t}^{2}}dt.$ Unfortunately, this choice won’t work because we are unable to evaluate ${{\displaystyle \int}}^{}{e}^{{t}^{2}}dt.$ However, since we can evaluate ${{\displaystyle \int}}^{}t{e}^{{t}^{2}}dt,$ we can try choosing $u={t}^{2}$ and $dv=t{e}^{{t}^{2}}dt.$ With these choices we have

$\begin{array}{rlllrll}u & = & {t}^{2} & & dv & = & t{e}^{{t}^{2}}dt \\ du & = & 2t\;dt & & v & = & {{\displaystyle \int}}^{}t{e}^{{t}^{2}}dt=\frac{1}{2}{e}^{{t}^{2}}.\end{array}$  {eq:fs-id1165040715819}

Thus, we obtain

$\begin{array}{ll}{{\displaystyle \int}}^{\;}{t}^{3}{e}^{{t}^{2}}dt & =\frac{1}{2}{t}^{2}{e}^{{t}^{2}}-{\displaystyle \int \frac{1}{2}{e}^{{t}^{2}}2tdt} \\ & =\frac{1}{2}{t}^{2}{e}^{{t}^{2}}-\frac{1}{2}{e}^{{t}^{2}}+C.\end{array}$  {eq:fs-id1165042013345}

:::
:::

:::example {ex:fs-id1165042035446} Applying Integration by Parts More Than Once

:::exercise {fs-id1165042035448} type= 
PROBLEM:
Evaluate ${{\displaystyle \int}}^{}\text{sin}(\text{ln}\;x)dx.$
SOLUTION:
This integral appears to have only one function—namely, $\text{sin}(\text{ln}\;x)$ —however, we can always use the constant function 1 as the other function. In this example, let’s choose $u=\text{sin}(\text{ln}\;x)$ and $dv=1dx.$ (The decision to use $u=\text{sin}(\text{ln}\;x)$ is easy. We can’t choose $dv=\;\text{sin}(\text{ln}\;x)dx$ because if we could integrate it, we wouldn’t be using integration by parts in the first place!) Consequently, $du=(1\text{/}x)\text{cos}(\text{ln}\;x)dx$ and $v={{\displaystyle \int}}^{}1dx=x.$ After applying integration by parts to the integral and simplifying, we have

${{\displaystyle \int}}^{}\text{sin}(\text{ln}\;x)dx=x\;\text{sin}(\text{ln}\;x)-{{\displaystyle \int}}^{}\text{cos}(\text{ln}\;x)dx.$  {eq:fs-id1165042257200}

Unfortunately, this process leaves us with a new integral that is very similar to the original. However, let’s see what happens when we apply integration by parts again. This time let’s choose $u=\text{cos}(\text{ln}\;x)$ and $dv=1dx,$ making $du=\text{−}(1\text{/}x)\text{sin}(\text{ln}\;x)dx$ and $v={{\displaystyle \int}}^{}1dx=x.$ Substituting, we have

${{\displaystyle \int}}^{}\text{sin}(\text{ln}\;x)dx=x\;\text{sin}(\text{ln}\;x)-(x\;\text{cos}(\text{ln}\;x)-{{\displaystyle \int}}^{}-\text{sin}(\text{ln}\;x)dx).$  {eq:fs-id1165042110131}

After simplifying, we obtain

${{\displaystyle \int}}^{}\text{sin}(\text{ln}\;x)dx=x\;\text{sin}(\text{ln}\;x)-x\;\text{cos}(\text{ln}\;x)-{{\displaystyle \int}}^{}\text{sin}(\text{ln}\;x)dx.$  {eq:fs-id1165040741886}

The last integral is now the same as the original. It may seem that we have simply gone in a circle, but now we can actually evaluate the integral. To see how to do this more clearly, substitute $I={{\displaystyle \int}}^{}\text{sin}(\text{ln}\;x)dx.$ Thus, the equation becomes

$I=x\;\text{sin}(\text{ln}\;x)-x\;\text{cos}(\text{ln}\;x)-I.$  {eq:fs-id1165040742019}

First, add $I$ to both sides of the equation to obtain

$2I=x\;\text{sin}(\text{ln}\;x)-x\;\text{cos}(\text{ln}\;x).$  {eq:fs-id1165040742075}

Next, divide by 2:

$I=\frac{1}{2}x\;\text{sin}(\text{ln}\;x)-\frac{1}{2}x\;\text{cos}(\text{ln}\;x).$  {eq:fs-id1165042266551}

Substituting $I={{\displaystyle \int}}^{}\text{sin}(\text{ln}\;x)dx$ again, we have

${{\displaystyle \int}}^{}\text{sin}(\text{ln}\;x)dx=\frac{1}{2}x\;\text{sin}(\text{ln}\;x)-\frac{1}{2}x\;\text{cos}(\text{ln}\;x).$  {eq:fs-id1165042266641}

From this we see that $(1\text{/}2)x\;\text{sin}(\text{ln}\;x)-(1\text{/}2)x\;\text{cos}(\text{ln}\;x)$ is an antiderivative of $\text{sin}(\text{ln}\;x)dx.$ For the most general antiderivative, add $+C\text{:}$

${{\displaystyle \int}}^{}\text{sin}(\text{ln}\;x)dx=\frac{1}{2}x\;\text{sin}(\text{ln}\;x)-\frac{1}{2}x\;\text{cos}(\text{ln}\;x)+C.$  {eq:fs-id1165042001966}

COMMENTARY: Analysis
If this method feels a little strange at first, we can check the answer by differentiation:

$\begin{array}{l}\frac{d}{dx}(\frac{1}{2}x\;\text{sin}(\text{ln}\;x)-\frac{1}{2}x\;\text{cos}(\text{ln}\;x)) \\ \\ =\frac{1}{2}(\text{sin}(\text{ln}\;x))+\text{cos}(\text{ln}\;x)\cdot \frac{1}{x}\cdot \frac{1}{2}x-(\frac{1}{2}\text{cos}(\text{ln}\;x)-\text{sin}(\text{ln}\;x)\cdot \frac{1}{x}\cdot \frac{1}{2}x) \\ =\text{sin}(\text{ln}\;x).\end{array}$  {eq:fs-id1165042002066}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042295956} type= 
PROBLEM:
Evaluate ${{\displaystyle \int}}^{}{x}^{2}\text{sin}\;x\;dx.$
SOLUTION:
$\text{−}{x}^{2}\text{cos}\;x+2x\;\text{sin}\;x+2\;\text{cos}\;x+C$
COMMENTARY: Hint
This is similar to [ref:fs-id1165041948192].
:::
:::

## Integration by Parts for Definite Integrals
Now that we have used integration by parts successfully to evaluate {index:indefinite integrals}, we turn our attention to definite integrals. The integration technique is really the same, only we add a step to evaluate the integral at the upper and lower limits of integration.

:::note [theorem] Integration by Parts for Definite Integrals
Let $u=f(x)$ and $v=g(x)$ be functions with continuous derivatives on $[a,b].$ Then

${\displaystyle \int_{a}^{b}u\;dv}={uv|}_{a}^{b}-{\displaystyle \int_{a}^{b}v\;du}.$  {eq:fs-id1165042231112} class=numbered

:::

:::example {ex:fs-id1165042231180} Finding the Area of a Region

:::exercise {fs-id1165042231182} type= 
PROBLEM:
Find the area of the region bounded above by the graph of $y={\text{tan}}^{−1}x$ and below by the $x$-axis over the interval $[0,1].$
SOLUTION:
This region is shown in [ref:CNX_Calc_Figure_07_01_001]. To find the area, we must evaluate $\overset{1}{\underset{0}{{\displaystyle \int}}}{\text{tan}}^{−1}x\;dx.$

> FIGURE {fig:CNX_Calc_Figure_07_01_001} src=../../media/CNX_Calc_Figure_07_01_001.jpg
> alt: This figure is the graph of the inverse tangent function. It is an increasing function that passes through the origin. In the first quadrant there is a shaded region under the graph, above the x-axis. The shaded area is bounded to the right at x = 1.
> caption: To find the area of the shaded region, we have to use integration by parts.

For this integral, let’s choose $u={\text{tan}}^{−1}x$ and $dv=dx,$ thereby making $du=\frac{1}{{x}^{2}+1}dx$ and $v=x.$ After applying the integration-by-parts formula ([ref:fs-id1165042231112]) we obtain

$\text{Area}=x\;{\text{tan}}^{−1}{x|}_{0}^{1}-{\displaystyle \int_{0}^{1} \frac{x}{{x}^{2}+1}dx.}$  {eq:fs-id1165042238034}

Use *u*-substitution to obtain

${\displaystyle \int_{0}^{1} \frac{x}{{x}^{2}+1}dx=\frac{1}{2}\text{ln}|{x}^{2}+1{|}_{0}^{1}.}$  {eq:fs-id1165042304286}

Thus,

$\text{Area}=x\;{tan}^{-1}x{{\displaystyle |}}_{0}^{1}-\frac{1}{2}ln|{x}^{2}+1|{|}_{0}^{1}=\frac{\pi}{4}-\frac{1}{2}ln\;2.$  {eq:fs-id1165042304371}

At this point it might not be a bad idea to do a “reality check” on the reasonableness of our solution. Since $\frac{\pi}{4}-\frac{1}{2}\text{ln}\;2\approx 0.4388,$ and from [ref:CNX_Calc_Figure_07_01_001] we expect our area to be slightly less than 0.5, this solution appears to be reasonable.
:::
:::

:::example {ex:fs-id1165042058871} Finding a Volume of Revolution

:::exercise {fs-id1165042058873} type= 
PROBLEM:
Find the volume of the solid obtained by revolving the region bounded by the graph of $f(x)={e}^{\text{−}x},$ the *x*-axis, the *y*-axis, and the line $x=1$ about the *y*-axis.
SOLUTION:
The best option to solving this problem is to use the shell method. Begin by sketching the region to be revolved, along with a typical rectangle (see the following graph).

> FIGURE {fig:CNX_Calc_Figure_07_01_002} src=../../media/CNX_Calc_Figure_07_01_002.jpg
> alt: This figure is the graph of the function e^-x. It is an increasing function on the left side of the y-axis and decreasing on the right side of the y-axis. The curve also comes to a point on the y-axis at y=1. Under the curve there is a shaded rectangle in the first quadrant. There is also a cylinder under the graph, formed by revolving the rectangle around the y-axis.
> caption: We can use the shell method to find a volume of revolution.

To find the volume using shells, we must evaluate $2\pi {\displaystyle \int_{0}^{1}x{e}^{\text{−}x}dx}.$ To do this, let $u=x$ and $dv={e}^{\text{−}x}.$ These choices lead to $du=dx$ and $v={{\displaystyle \int}}^{}{e}^{\text{−}x}=\text{−}{e}^{\text{−}x}.$ Substituting into [ref:fs-id1165042231112], we obtain

$\begin{array}{rlll}\text{Volume} & =2\pi \overset{1}{\underset{0}{{\displaystyle \int}}}x{e}^{\text{−}x}dx=2\pi (\text{−}x{e}^{\text{−}x}{|}_{0}^{1}+\overset{1}{\underset{0}{{\displaystyle \int}}}{e}^{\text{−}x}dx) & & \text{Use integration by parts}. \\ & =−2\pi x{e}^{\text{−}x}{|}_{0}^{1}-2\pi {e}^{\text{−}x}{|}_{0}^{1} & & \text{Evaluate}\;\overset{1}{\underset{0}{{\displaystyle \int}}}{e}^{\text{−}x}dx=\text{−}{e}^{\text{−}x}{|}_{0}^{1}. \\ & =2\pi -\frac{4\pi}{e}. & & \text{Evaluate and simplify}.\end{array}$  {eq:fs-id1165042281368}

COMMENTARY: Analysis
Again, it is a good idea to check the reasonableness of our solution. We observe that the solid has a volume slightly less than that of a cylinder of radius $1$ and height of $1\text{/}e$ added to the volume of a cone of base radius $1$ and height of $1-\frac{1}{e}.$ Consequently, the solid should have a volume a bit less than

$\pi {(1)}^{2}\frac{1}{e}+(\frac{\pi}{3}){(1)}^{2}(1-\frac{1}{e})=\frac{2\pi}{3e}+\frac{\pi}{3}\approx 1.8177.$  {eq:fs-id1165042071470}

Since $2\pi -\frac{4\pi}{e}\approx 1.6603,$ we see that our calculated volume is reasonable.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042299598} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{0}^{\pi \text{/}2}x\;\text{cos}\;x\;dx.}$
SOLUTION:
$\frac{\pi}{2}-1$
COMMENTARY: Hint
Use [ref:fs-id1165042231112] with $u=x$ and $dv=\text{cos}\;x\;dx.$
:::
:::

## Key Concepts {section:key-concepts}
- The integration-by-parts formula allows the exchange of one integral for another, possibly easier, integral.
- Integration by parts applies to both definite and indefinite integrals.

## Key Equations {section:key-equations}

> TABLE {tab:eip-511} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Integration by parts formula** | ${\displaystyle \int u\;dv=uv-{\displaystyle \int v\;du}}$ |
| **Integration by parts for definite integrals** | ${\displaystyle \int_{a}^{b}u\;dv}={uv|}_{a}^{b}-{\displaystyle \int_{a}^{b}v\;du}$ |

##  {section:section-exercises}
In using the technique of integration by parts, you must carefully choose which expression is *u.* For each of the following problems, use the guidelines in this section to choose *u.* Do **not** evaluate the integrals.

:::exercise {fs-id1165040642447} type= 
PROBLEM:
${\displaystyle \int {x}^{3}{e}^{2x}dx}$
SOLUTION:
$u={x}^{3}$
:::

:::exercise {fs-id1165040642500} type= 
PROBLEM:
${\displaystyle \int {x}^{3}\text{ln}(x)dx}$
:::

:::exercise {fs-id1165040642565} type= 
PROBLEM:
${\displaystyle \int {y}^{3}\text{cos}\;ydy}$
SOLUTION:
$u={y}^{3}$
:::

:::exercise {fs-id1165041787435} type= 
PROBLEM:
${\displaystyle \int {x}^{2}\text{arctan}\;x\;dx}$
:::

:::exercise {fs-id1165041787483} type= 
PROBLEM:
${\displaystyle \int {e}^{3x}\text{sin}(2x)dx}$
SOLUTION:
$u=\text{sin}(2x)$
:::
Find the integral by using the simplest method. Not all problems require integration by parts.

:::exercise {fs-id1165041787559} type= 
PROBLEM:
${\displaystyle \int v\;\text{sin}\;vdv}$
:::

:::exercise {fs-id1165041787622} type= 
PROBLEM:
${\displaystyle \int \text{ln}\;x\;dx}$ (*Hint:* ${\displaystyle \int \text{ln}\;x\;dx}$ is equivalent to ${\displaystyle \int 1\cdot \text{ln}(x)dx}.)$
SOLUTION:
$\text{−}x+x\;\text{ln}\;x+C$
:::

:::exercise {fs-id1165041848579} type= 
PROBLEM:
${\displaystyle \int x\;\text{cos}\;x\;dx}$
:::

:::exercise {fs-id1165041848632} type= 
PROBLEM:
${\displaystyle \int {\text{tan}}^{−1}x\;dx}$
SOLUTION:
$x\;{\text{tan}}^{−1}x-\frac{1}{2}\text{ln}(1+{x}^{2})+C$
:::

:::exercise {fs-id1165041848718} type= 
PROBLEM:
${\displaystyle \int {x}^{2}}{e}^{x}dx$
:::

:::exercise {fs-id1165042279525} type= 
PROBLEM:
${\displaystyle \int x\;\text{sin}(2x)dx}$
SOLUTION:
$-\frac{1}{2}x\;\text{cos}(2x)+\frac{1}{4}\text{sin}(2x)+C$
:::

:::exercise {fs-id1165042279619} type= 
PROBLEM:
${\displaystyle \int x{e}^{4x}dx}$
:::

:::exercise {fs-id1165042279694} type= 
PROBLEM:
${\displaystyle \int x{e}^{\text{−}x}dx}$
SOLUTION:
${e}^{\text{−}x}(−1-x)+C$
:::

:::exercise {fs-id1165040739127} type= 
PROBLEM:
${\displaystyle \int x\;\text{cos}\;3x\;dx}$
:::

:::exercise {fs-id1165040739210} type= 
PROBLEM:
${\displaystyle \int {x}^{2}}\text{cos}\;x\;dx$
SOLUTION:
$2x\;\text{cos}\;x+(−2+{x}^{2})\text{sin}\;x+C$
:::

:::exercise {fs-id1165040739285} type= 
PROBLEM:
${\displaystyle \int x\;\text{ln}\;x\;dx}$
:::

:::exercise {fs-id1165042106390} type= 
PROBLEM:
${\displaystyle \int \text{ln}(2x+1)dx}$
SOLUTION:
$\frac{1}{2}(1+2x)(−1+\text{ln}(1+2x))+C$
:::

:::exercise {fs-id1165042106492} type= 
PROBLEM:
${\displaystyle \int {x}^{2}{e}^{4x}}dx$
:::

:::exercise {fs-id1165040696935} type= 
PROBLEM:
${\displaystyle \int {e}^{x}\text{sin}\;x\;dx}$
SOLUTION:
$\frac{1}{2}{e}^{x}(\text{−}\text{cos}\;x+\text{sin}\;x)+C$
:::

:::exercise {fs-id1165040697008} type= 
PROBLEM:
${\displaystyle \int {e}^{x}\text{cos}\;x\;dx}$
:::

:::exercise {fs-id1165040697080} type= 
PROBLEM:
${\displaystyle \int x{e}^{\text{−}{x}^{2}}dx}$
SOLUTION:
$-\frac{{e}^{\text{−}{x}^{2}}}{2}+C$
:::

:::exercise {fs-id1165040697146} type= 
PROBLEM:
${\displaystyle \int {x}^{2}{e}^{\text{−}x}dx}$
:::

:::exercise {fs-id1165042110324} type= 
PROBLEM:
${\displaystyle \int \text{sin}(\text{ln}(2x))dx}$
SOLUTION:
$-\frac{1}{2}x\;\text{cos}[\text{ln}(2x)]+\frac{1}{2}x\;\text{sin}[\text{ln}(2x)]+C$
:::

:::exercise {fs-id1165042110449} type= 
PROBLEM:
${\displaystyle \int cos(\text{ln}\;x)dx}$
:::

:::exercise {fs-id1165042071182} type= 
PROBLEM:
${\displaystyle \int {(\text{ln}\;x)}^{2}dx}$
SOLUTION:
$2x-2x\;\text{ln}\;x+x{(\text{ln}\;x)}^{2}+C$
:::

:::exercise {fs-id1165042071268} type= 
PROBLEM:
${\displaystyle \int \text{ln}({x}^{2})dx}$
:::

:::exercise {fs-id1165042071342} type= 
PROBLEM:
${\displaystyle \int {x}^{2}\text{ln}\;x\;dx}$
SOLUTION:
$(\text{−}\;\frac{{x}^{3}}{9}+\frac{1}{3}{x}^{3}\text{ln}\;x)+C$
:::

:::exercise {fs-id1165042230055} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{−1}x\;dx}$
:::

:::exercise {fs-id1165042230128} type= 
PROBLEM:
${\displaystyle \int {\text{cos}}^{−1}(2x)dx}$
SOLUTION:
$-\frac{1}{2}\sqrt{1-4{x}^{2}}+x\;{\text{cos}}^{−1}(2x)+C$
:::

:::exercise {fs-id1165042273608} type= 
PROBLEM:
${\displaystyle \int x\;\text{arctan}\;x\;dx}$
:::

:::exercise {fs-id1165042273684} type= 
PROBLEM:
${\displaystyle \int {x}^{2}\text{sin}\;x\;dx}$
SOLUTION:
$\text{−}(−2+{x}^{2})\text{cos}\;x+2x\;\text{sin}\;x+C$
:::

:::exercise {fs-id1165042273760} type= 
PROBLEM:
${\displaystyle \int {x}^{3}\text{cos}\;x\;dx}$
:::

:::exercise {fs-id1165042233474} type= 
PROBLEM:
${\displaystyle \int {x}^{3}\text{sin}\;x\;dx}$
SOLUTION:
$\text{−}x(−6+{x}^{2})\text{cos}\;x+3(−2+{x}^{2})\text{sin}\;x+C$
:::

:::exercise {fs-id1165042233567} type= 
PROBLEM:
${\displaystyle \int {x}^{3}{e}^{x}dx}$
:::

:::exercise {fs-id1165042233649} type= 
PROBLEM:
${\displaystyle \int x\;{\text{sec}}^{−1}x\;dx}$
SOLUTION:
$\frac{1}{2}x(\text{−}\sqrt{1-\frac{1}{{x}^{2}}}+x\cdot {\text{sec}}^{−1}x)+C$
:::

:::exercise {fs-id1165040754517} type= 
PROBLEM:
${\displaystyle \int x\;{\text{sec}}^{2}x\;dx}$
:::

:::exercise {fs-id1165040754583} type= 
PROBLEM:
${\displaystyle \int x\;\text{cosh}\;x\;dx}$
SOLUTION:
$\text{−}\text{cosh}\;x+x\;\text{sinh}\;x+C$
:::
Compute the definite integrals. Use a graphing utility to confirm your answers.

:::exercise {fs-id1165040754641} type= 
PROBLEM:
${\displaystyle \int_{1\text{/}e}^{1}\text{ln}\;x\;dx}$
:::

:::exercise {fs-id1165040754696} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}x{e}^{−2x}dx}$ (Express the answer in exact form.)
SOLUTION:
$\frac{1}{4}-\frac{3}{4{\text{e}}^{2}}$
:::

:::exercise {fs-id1165042231980} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}{e}^{\sqrt{x}}dx(\text{let}\;u=\sqrt{x})}$
:::

:::exercise {fs-id1165042232041} type= 
PROBLEM:
${\displaystyle \int_{1}^{e}\text{ln}({x}^{2})dx}$
SOLUTION:
2
:::

:::exercise {fs-id1165042232091} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi}x\;\text{cos}\;x\;dx}$
:::

:::exercise {fs-id1165042232131} type= 
PROBLEM:
${\displaystyle \int_{\text{−}\pi}^{\pi}x\;\text{sin}\;x\;dx}$ (Express the answer in exact form.)
SOLUTION:
$2\pi$
:::

:::exercise {fs-id1165041917951} type= 
PROBLEM:
${\displaystyle \int_{0}^{3}\text{ln}({x}^{2}+1)dx}$ (Express the answer in exact form.)
:::

:::exercise {fs-id1165041918039} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi \text{/}2}{x}^{2}\text{sin}\;x\;dx}$ (Express the answer in exact form.)
SOLUTION:
$−2+\pi$
:::

:::exercise {fs-id1165041918098} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}x{5}^{x}dx}$ (Express the answer using five significant digits.)
:::

:::exercise {fs-id1165041918142} type= 
PROBLEM:
Evaluate ${\displaystyle \int \text{cos}\;x\;\text{ln}(\text{sin}\;x)dx}$
SOLUTION:
$\text{−}\text{sin}(x)+\text{ln}[\text{sin}(x)]\text{sin}\;x+C$
:::
Derive the following formulas using the technique of integration by parts. Assume that *n* is a positive integer. These formulas are called *reduction formulas* because the exponent in the *x* term has been reduced by one in each case. The second integral is simpler than the original integral.

:::exercise {fs-id1165040756812} type= 
PROBLEM:
${\displaystyle \int {x}^{n}{e}^{x}dx={x}^{n}{e}^{x}-n{\displaystyle \int {x}^{n-1}{e}^{x}dx}}$
:::

:::exercise {fs-id1165040756896} type= 
PROBLEM:
${\displaystyle \int {x}^{n}\text{cos}\;x\;dx}={x}^{n}\text{sin}\;x-n{\displaystyle \int {x}^{n-1}\text{sin}\;x\;dx}$
SOLUTION:
Answers vary
:::

:::exercise {fs-id1165040722179} type= 
PROBLEM:
${\displaystyle \int {x}^{n}\text{sin}\;x\;dx}=\underset{\_\_\_\_\_\_}{}$
:::

:::exercise {fs-id1165040722280} type= 
PROBLEM:
Integrate ${\displaystyle \int 2x\sqrt{2x-3}}dx$ using two methods:
a. Using parts, letting $dv=\sqrt{2x-3}\;dx$
b. Substitution, letting $u=2x-3$
SOLUTION:
a. $\frac{2}{5}(1+x){(−3+2x)}^{3\text{/}2}+C$ b. $\frac{2}{5}(1+x){(−3+2x)}^{3\text{/}2}+C$
:::
State whether you would use integration by parts to evaluate the integral. If so, identify *u* and *dv*. If not, describe the technique used to perform the integration without actually doing the problem.

:::exercise {fs-id1165042276367} type= 
PROBLEM:
${\displaystyle \int x\;\text{ln}\;x\;dx}$
:::

:::exercise {fs-id1165042276432} type= 
PROBLEM:
${\displaystyle \int \frac{{\text{ln}}^{2}x}{x}dx}$
SOLUTION:
Do not use integration by parts. Choose *u* to be $\text{ln}\;x,$ and the integral is of the form ${\displaystyle \int {u}^{2}du}.$
:::

:::exercise {fs-id1165042276512} type= 
PROBLEM:
${\displaystyle \int x{e}^{x}dx}$
:::

:::exercise {fs-id1165040741668} type= 
PROBLEM:
${\displaystyle \int x{e}^{{x}^{2}-3}dx}$
SOLUTION:
Do not use integration by parts. Let $u={x}^{2}-3,$ and the integral can be put into the form ${\displaystyle \int {e}^{u}du}.$
:::

:::exercise {fs-id1165040741753} type= 
PROBLEM:
${\displaystyle \int {x}^{2}\text{sin}\;x\;dx}$
:::

:::exercise {fs-id1165040741825} type= 
PROBLEM:
${\displaystyle \int {x}^{2}\text{sin}(3{x}^{3}+2)dx}$
SOLUTION:
Do not use integration by parts. Choose *u* to be $u=3{x}^{3}+2$ and the integral can be put into the form ${\displaystyle \int \text{sin}(u)du}.$
:::
Sketch the region bounded above by the curve, the *x*-axis, and $x=1,$ and find the area of the region. Provide the exact form or round answers to the number of places indicated.

:::exercise {fs-id1165042271731} type= 
PROBLEM:
$y=2x{e}^{\text{−}x}$ (Approximate answer to four decimal places.)
:::

:::exercise {fs-id1165042271779} type= 
PROBLEM:
$y={e}^{\text{−}x}\text{sin}(\pi x)$ (Approximate answer to five decimal places.)
SOLUTION:
The area under graph is 0.39535.

> IMAGE {img:fs-id1165042271823} src=../../media/CNX_Calc_Figure_07_01_202.jpg
> alt: This figure is the graph of y=e^-x sin(pi*x). The curve begins in the third quadrant at x=0.5, increases through the origin, reaches a high point between 0.5 and 0.75, then decreases, passing through x=1.

:::
Find the volume generated by rotating the region bounded by the given curves about the specified line. Express the answers in exact form or approximate to the number of decimal places indicated.

:::exercise {fs-id1165042271843} type= 
PROBLEM:
$y=\text{sin}\;x,y=0,x=2\pi ,x=3\pi$ about the y-axis (Express the answer in exact form.)
:::

:::exercise {fs-id1165040671747} type= 
PROBLEM:
$y={e}^{\text{−}x}$ $y=0,x=−1x=0;$ about $x=1$ (Express the answer in exact form.)
SOLUTION:
$2\pi e$
:::

:::exercise {fs-id1165040671820} type= 
PROBLEM:
A particle moving along a straight line has a velocity of $v(t)={t}^{2}{e}^{\text{−}t}$ after *t* sec. How far does it travel in the first 2 sec? (Assume the units are in feet and express the answer in exact form.)
:::

:::exercise {fs-id1165040671890} type= 
PROBLEM:
Find the area under the graph of $y={\text{sec}}^{3}x$ from $x=0\;\text{to}\;x=1.$ (Round the answer to two significant digits.)
SOLUTION:
2.05
:::

:::exercise {fs-id1165040671943} type= 
PROBLEM:
Find the area between $y=(x-2){e}^{x}$ and the *x-*axis from $x=2$ to $x=5.$ (Express the answer in exact form.)
:::

:::exercise {fs-id1165040665848} type= 
PROBLEM:
Find the area of the region enclosed by the curve $y=x\;\text{cos}\;x$ and the *x*-axis for
$\frac{11\pi}{2}\le x\le \frac{13\pi}{2}.$ (Express the answer in exact form.)
SOLUTION:
$12\pi$
:::

:::exercise {fs-id1165040665920} type= 
PROBLEM:
Find the volume of the solid generated by revolving the region bounded by the curve $y=\text{ln}\;x,$ the *x*-axis, and the vertical line $x={e}^{2}$ about the *x*-axis. (Express the answer in exact form.)
:::

:::exercise {fs-id1165040665996} type= 
PROBLEM:
Find the volume of the solid generated by revolving the region bounded by the curve $y=4\;\text{cos}\;x$ and the *x*-axis, $\frac{\pi}{2}\le x\le \frac{3\pi}{2},$ about the *x*-axis. (Express the answer in exact form.)
SOLUTION:
$8{\pi}^{2}$
:::

:::exercise {fs-id1165040639268} type= 
PROBLEM:
Find the volume of the solid generated by revolving the region in the first quadrant bounded by $y={e}^{x}$ and the *x*-axis, from $x=0$ to $x=\text{ln}(7),$ about the *y-*axis. (Express the answer in exact form.)
:::

## Glossary
- {def} **integration by parts**: a technique of integration that allows the exchange of one integral for another using the formula ${{\displaystyle \int}}^{}u\;dv=uv-{{\displaystyle \int}}^{}v\;du$

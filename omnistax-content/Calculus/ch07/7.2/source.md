# Trigonometric Integrals

## Learning Objectives {section:learning-objectives}
- Solve integration problems involving products and powers of $\text{sin}x$ and $\text{cos}x.$
- Solve integration problems involving products and powers of $\text{tan}x$ and $\text{sec}x.$
- Use reduction formulas to solve trigonometric integrals.

In this section we look at how to integrate a variety of products of trigonometric functions. These integrals are called {term:trigonometric integrals}. They are an important part of the integration technique called *trigonometric substitution*, which is featured in [Trigonometric Substitution](module:m53659). This technique allows us to convert algebraic expressions that we may not be able to integrate into expressions involving trigonometric functions, which we may be able to integrate using the techniques described in this section. In addition, these types of integrals appear frequently when we study polar, cylindrical, and spherical coordinate systems later. Let’s begin our study with products of $\text{sin}\;x$ and $\text{cos}\;x.$

## Integrating Products and Powers of sin*x* and cos*x*
A key idea behind the strategy used to integrate combinations of products and powers of $\text{sin}\;x$ and $\text{cos}\;x$ involves rewriting these expressions as sums and differences of integrals of the form ${\displaystyle \int}{\text{sin}}^{j}x\;\text{cos}\;x\;dx$ or ${\displaystyle \int}{\text{cos}}^{j}x\;\text{sin}\;x\;dx.$ After rewriting these integrals, we evaluate them using *u*-substitution. Before describing the general process in detail, let’s take a look at the following examples.

:::example {ex:fs-id1165043250980} Integrating ${\displaystyle \int}{\text{cos}}^{j}x\;\text{sin}\;x\;dx$

:::exercise {fs-id1165043100234} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{cos}}^{3}x\;\text{sin}\;x\;dx.$
SOLUTION:
Use $u$-substitution and let $u=\text{cos}\;x.$ In this case, $du=\text{−}\text{sin}\;x\;dx.$ Thus,

$\begin{array}{ll}{\displaystyle \int}{\text{cos}}^{3}\;x\;\text{sin}\;x\;dx & =\text{−}{\displaystyle \int}{u}^{3}\;du \\ & =-\frac{1}{4}{u}^{4}+C \\ & =-\frac{1}{4}{\text{cos}}^{4}\;x+C.\end{array}$  {eq:fs-id1165043093877}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043354058} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{sin}}^{4}x\;\text{cos}\;x\;dx.$
SOLUTION:
$\frac{1}{5}{\text{sin}}^{5}x+C$
COMMENTARY: Hint
Let $u=\text{sin}\;x.$
:::
:::

:::example {ex:fs-id1165043281403} A Preliminary Example: Integrating ${\displaystyle \int}{\text{cos}}^{j}x\;{\text{sin}}^{k}x\;dx$ Where *k* is Odd

:::exercise {fs-id1165043257290} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{cos}}^{2}x\;{\text{sin}}^{3}x\;dx.$
SOLUTION:
To convert this integral to integrals of the form ${\displaystyle \int}{\text{cos}}^{j}x\;\text{sin}\;x\;dx,$ rewrite ${\text{sin}}^{3}x={\text{sin}}^{2}x\;\text{sin}\;x$ and make the substitution ${\text{sin}}^{2}x=1-{\text{cos}}^{2}x.$ Thus,

$\begin{array}{lll}\int {\text{cos}}^{2}x\;{\text{sin}}^{3}x\;dx & =\int {\text{cos}}^{2}x(1-{\text{cos}}^{2}x)\text{sin}\;x\;dx & \text{Let}\;u=\text{cos}\;x;\;\text{then}\;du=\text{−}\text{sin}\;x\;dx. \\ & =\text{−}\int {u}^{2}(1-{u}^{2})du & \\ & =\int ({u}^{4}-{u}^{2})du & \\ & =\frac{1}{5}{u}^{5}-\frac{1}{3}{u}^{3}+C & \\ & =\frac{1}{5}{\text{cos}}^{5}x-\frac{1}{3}{\text{cos}}^{3}x+C. & \end{array}$  {eq:fs-id1165042880012}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042980470} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{cos}}^{3}x\;{\text{sin}}^{2}x\;dx.$
SOLUTION:
$\frac{1}{3}{\text{sin}}^{3}x-\frac{1}{5}{\text{sin}}^{5}x+C$
COMMENTARY: Hint
Write ${\text{cos}}^{3}x={\text{cos}}^{2}x\;\text{cos}\;x=(1-{\text{sin}}^{2}x)\text{cos}\;x$ and let $u=\text{sin}\;x.$
:::
:::
In the next example, we see the strategy that must be applied when there are only even powers of $\text{sin}\;x$ and $\text{cos}\;x.$ For integrals of this type, the identities

${\text{sin}}^{2}x=\frac{1}{2}-\frac{1}{2}\text{cos}(2x)=\frac{1-\text{cos}(2x)}{2}$  {eq:fs-id1165043066788}

and

${\text{cos}}^{2}x=\frac{1}{2}+\frac{1}{2}\text{cos}(2x)=\frac{1+\text{cos}(2x)}{2}$  {eq:fs-id1165043331511}

are invaluable. These identities are sometimes known as {index:*power-reducing identities*} and they may be derived from the double-angle identity $\text{cos}(2x)={\text{cos}}^{2}x-{\text{sin}}^{2}x$ and the Pythagorean identity ${\text{cos}}^{2}x+{\text{sin}}^{2}x=1.$

:::example {ex:fs-id1165042936506} Integrating an Even Power of $\text{sin}\;x$

:::exercise {fs-id1165042318645} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{sin}}^{2}x\;dx.$
SOLUTION:
To evaluate this integral, let’s use the trigonometric identity ${\text{sin}}^{2}x=\frac{1}{2}-\frac{1}{2}\text{cos}(2x).$ Thus,

$\begin{array}{ll}{\displaystyle \int}{\text{sin}}^{2}x\;dx & ={\displaystyle \int}(\frac{1}{2}-\frac{1}{2}\text{cos}(2x))dx \\ & =\frac{1}{2}x-\frac{1}{4}\text{sin}(2x)+C.\end{array}$  {eq:fs-id1165043194450}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042989371} type= 
PROBLEM:
Evaluate ${\displaystyle \int {\text{cos}}^{2}x\;dx.}$
SOLUTION:
$\frac{1}{2}x+\frac{1}{4}\text{sin}(2x)+C$
COMMENTARY: Hint

${\text{cos}}^{2}x=\frac{1}{2}+\frac{1}{2}\text{cos}(2x)$  {eq:fs-id1165042375699}

:::
:::
The general process for integrating products of powers of $\text{sin}\;x$ and $\text{cos}\;x$ is summarized in the following set of guidelines.

:::note [problem-solving] Integrating Products and Powers of sin *x* and cos *x*
To integrate ${\displaystyle \int}{\text{cos}}^{j}x\;{\text{sin}}^{k}x\;dx$ use the following strategies:
1. If $k$ is odd, rewrite ${\text{sin}}^{k}x={\text{sin}}^{k-1}x\;\text{sin}\;x$ and use the identity ${\text{sin}}^{2}x=1-{\text{cos}}^{2}x$ to rewrite ${\text{sin}}^{k-1}x$ in terms of $\text{cos}\;x.$ Integrate using the substitution $u=\text{cos}\;x.$ This substitution makes $du=\text{−}\text{sin}\;x\;dx.$
2. If $j$ is odd, rewrite ${\text{cos}}^{j}x={\text{cos}}^{j-1}x\;\text{cos}\;x$ and use the identity ${\text{cos}}^{2}x=1-{\text{sin}}^{2}x$ to rewrite ${\text{cos}}^{j-1}x$ in terms of $\text{sin}\;x.$ Integrate using the substitution $u=\text{sin}\;x.$ This substitution makes $du=\text{cos}\;x\;dx.$ (*Note*: If both $j$ and $k$ are odd, either strategy 1 or strategy 2 may be used.)
3. If both $j$ and $k$ are even, use ${\text{sin}}^{2}x=(1\text{/}2)-(1\text{/}2)\text{cos}(2x)$ and ${\text{cos}}^{2}x=(1\text{/}2)+(1\text{/}2)\text{cos}(2x).$ After applying these formulas, simplify and reapply strategies 1 through 3 as appropriate.
:::

:::example {ex:fs-id1165043272282} Integrating ${\displaystyle \int {\text{cos}}^{j}x\;{\text{sin}}^{k}x\;dx}$ where *k* is Odd

:::exercise {fs-id1165043086427} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{cos}}^{8}x\;{\text{sin}}^{5}x\;dx.$
SOLUTION:
Since the power on $\text{sin}\;x$ is odd, use strategy 1. Thus,

$\begin{array}{rlll}{\displaystyle \int}{\text{cos}}^{8}x\;{\text{sin}}^{5}x\;dx & ={\displaystyle \int}{\text{cos}}^{8}x\;{\text{sin}}^{4}x\;\text{sin}\;x\;dx & & \text{Break off}\;\text{sin}\;x. \\ & ={\displaystyle \int}{\text{cos}}^{8}x{({\text{sin}}^{2}x)}^{2}\text{sin}\;x\;dx & & \text{Rewrite}\;{\text{sin}}^{4}x={({\text{sin}}^{2}x)}^{2}. \\ & ={\displaystyle \int}{\text{cos}}^{8}x{(1-{\text{cos}}^{2}x)}^{2}\text{sin}\;x\;dx & & \text{Substitute}\;{\text{sin}}^{2}x=1-{\text{cos}}^{2}x. \\ & ={\displaystyle \int}{u}^{8}{(1-{u}^{2})}^{2}(\text{−}du) & & \text{Let}\;u=\text{cos}\;x\;\text{and}\;du=\text{−}\text{sin}\;x\;dx. \\ & ={\displaystyle \int}(\text{−}{u}^{8}+2{u}^{10}-{u}^{12})du & & \text{Expand}. \\ & =-\frac{1}{9}{u}^{9}+\frac{2}{11}{u}^{11}-\frac{1}{13}{u}^{13}+C & & \text{Evaluate the integral}. \\ & =-\frac{1}{9}{\text{cos}}^{9}x+\frac{2}{11}{\text{cos}}^{11}x-\frac{1}{13}{\text{cos}}^{13}x+C. & & \text{Substitute}\;u=\text{cos}\;x.\end{array}$  {eq:fs-id1165042349814}

:::
:::

:::example {ex:fs-id1165042707196} Integrating ${\displaystyle \int}{\text{cos}}^{j}x\;{\text{sin}}^{k}x\;dx$ where *k* and *j* are Even

:::exercise {fs-id1165042707198} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{sin}}^{4}x\;dx.$
SOLUTION:
Since the power on $\text{sin}\;x$ is even $(k=4)$ and the power on $\text{cos}\;x$ is even $(j=0),$ we must use strategy 3. Thus,

$\begin{array}{rlll}{\displaystyle \int}{\text{sin}}^{4}x\;dx & ={\displaystyle \int}{({\text{sin}}^{2}x)}^{2}dx & & \text{Rewrite}\;{\text{sin}}^{4}x={({\text{sin}}^{2}x)}^{2}. \\ & ={\displaystyle \int}{(\frac{1}{2}-\frac{1}{2}\text{cos}(2x))}^{2}dx & & \text{Substitute}\;{\text{sin}}^{2}x=\frac{1}{2}-\frac{1}{2}\text{cos}(2x). \\ & ={\displaystyle \int}(\frac{1}{4}-\frac{1}{2}\text{cos}(2x)+\frac{1}{4}{\text{cos}}^{2}(2x))dx & & \text{Expand}\;{(\frac{1}{2}-\frac{1}{2}\text{cos}(2x))}^{2}. \\ & ={\displaystyle \int}(\frac{1}{4}-\frac{1}{2}\text{cos}(2x)+\frac{1}{4}(\frac{1}{2}+\frac{1}{2}\text{cos}(4x))dx. & & \end{array}$  {eq:fs-id1165043089888}

Since ${\text{cos}}^{2}(2x)$ has an even power, substitute ${\text{cos}}^{2}(2x)=\frac{1}{2}+\frac{1}{2}\text{cos}(4x)\text{:}$

$\begin{array}{ll}={\displaystyle \int}(\frac{3}{8}-\frac{1}{2}\text{cos}(2x)+\frac{1}{8}\text{cos}(4x))dx & \text{Simplify}. \\ =\frac{3}{8}x-\frac{1}{4}\text{sin}(2x)+\frac{1}{32}\;\text{sin}(4x)+C & \text{Evaluate the integral}.\end{array}$  {eq:fs-id1165042508466}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042369121} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{cos}}^{3}x\;dx.$
SOLUTION:
$\text{sin}\;x-\frac{1}{3}{\text{sin}}^{3}x+C$
COMMENTARY: Hint
Use strategy 2. Write ${\text{cos}}^{3}x={\text{cos}}^{2}x\;\text{cos}\;x$ and substitute ${\text{cos}}^{2}x=1-{\text{sin}}^{2}x.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165039562346} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{cos}}^{2}(3x)dx.$
SOLUTION:
$\frac{1}{2}x+\frac{1}{12}\;\text{sin}(6x)+C$
COMMENTARY: Hint
Use strategy 3. Substitute ${\text{cos}}^{2}(3x)=\frac{1}{2}+\frac{1}{2}\text{cos}(6x)$
:::
:::
In some areas of physics, such as quantum mechanics, signal processing, and the computation of Fourier series, it is often necessary to integrate products that include $\text{sin}(ax),$ $\text{sin}(bx),$ $\text{cos}(ax),$ and $\text{cos}(bx).$ These integrals are evaluated by applying trigonometric identities, as outlined in the following rule.

:::note [rule] Rule: Integrating Products of Sines and Cosines of Different Angles
To integrate products involving $\text{sin}(ax),$ $\text{sin}(bx),$ $\text{cos}(ax),$ and $\text{cos}(bx),$ use the substitutions

$\;\text{sin}(ax)\text{sin}(bx)=\frac{1}{2}\text{cos}((a-b)x)-\frac{1}{2}\text{cos}((a+b)x)$  {eq:fs-id1165043229277} class=numbered

$\text{sin}(ax)\text{cos}(bx)=\frac{1}{2}\text{sin}((a-b)x)+\frac{1}{2}\text{sin}((a+b)x)$  {eq:fs-id1165042349512} class=numbered

$\;\text{cos}(ax)\text{cos}(bx)=\frac{1}{2}\text{cos}((a-b)x)+\frac{1}{2}\text{cos}((a+b)x)$  {eq:fs-id1165042332192} class=numbered

:::
These formulas may be derived from the sum-of-angle formulas for sine and cosine.

:::example {ex:fs-id1165043094091} Evaluating ${\displaystyle \int \text{sin}(ax)\text{cos}(bx)dx}$

:::exercise {fs-id1165043321357} type= 
PROBLEM:
Evaluate ${\displaystyle \int}\text{sin}(5x)\text{cos}(3x)dx.$
SOLUTION:
Apply the identity $\text{sin}(5x)\text{cos}(3x)=\frac{1}{2}\text{sin}(2x)+\frac{1}{2}\text{sin}(8x).$ Thus,

$\begin{array}{ll}{\displaystyle \int}\text{sin}(5x)\text{cos}(3x)dx & ={\displaystyle \int}\frac{1}{2}\text{sin}(2x)dx+{\displaystyle \int}\frac{1}{2}\text{sin}(8x)dx \\ & =-\frac{1}{4}\text{cos}(2x)-\frac{1}{16}\;\text{cos}(8x)+C.\end{array}$  {eq:fs-id1165042349275}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043094213} type= 
PROBLEM:
Evaluate ${\displaystyle \int}\text{cos}(6x)\text{cos}(5x)dx.$
SOLUTION:
$\frac{1}{2}\text{sin}\;x+\frac{1}{22}\;\text{sin}(11x)+C$
COMMENTARY: Hint
Substitute $\text{cos}(6x)\text{cos}(5x)=\frac{1}{2}\text{cos}\;x+\frac{1}{2}\text{cos}(11x).$
:::
:::

## Integrating Products and Powers of tan*x* and sec*x*
Before discussing the integration of products and powers of $\text{tan}\;x$ and $\text{sec}\;x,$ it is useful to recall the integrals involving $\text{tan}\;x$ and $\text{sec}\;x$ we have already learned:
1. ${\displaystyle \int}{\text{sec}}^{2}x\;dx=\text{tan}\;x+C$
2. ${\displaystyle \int}\text{sec}\;x\;\text{tan}\;x\;dx=\text{sec}\;x+C$
3. ${\displaystyle \int}\text{tan}\;x\;dx=\text{ln}|\text{sec}\;x|+C$
4. ${\displaystyle \int}\text{sec}\;x\;dx=\text{ln}|\text{sec}\;x+\text{tan}\;x|+C.$
For most integrals of products and powers of $\text{tan}\;x$ and $\text{sec}\;x,$ we rewrite the expression we wish to integrate as the sum or difference of integrals of the form ${\displaystyle \int}{\text{tan}}^{j}x\;{\text{sec}}^{2}x\;dx$ or ${\displaystyle \int}{\text{sec}}^{j}x\;\text{tan}\;x\;dx.$ As we see in the following example, we can evaluate these new integrals by using *u*-substitution.

:::example {ex:fs-id1165043183813} Evaluating ${\displaystyle \int}{\text{sec}}^{j}x\;\text{tan}\;x\;dx$

:::exercise {fs-id1165043183815} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{sec}}^{5}x\;\text{tan}\;x\;dx.$
SOLUTION:
Start by rewriting ${\text{sec}}^{5}x\;\text{tan}\;x$ as ${\text{sec}}^{4}x\;\text{sec}\;x\;\text{tan}\;x.$

$\begin{array}{rlll}{\displaystyle \int}{\text{sec}}^{5}x\;\text{tan}\;x\;dx & ={\displaystyle \int}{\text{sec}}^{4}x\;\text{sec}\;x\;\text{tan}\;x\;dx & & \text{Let}\;u=\text{sec}\;x;\;\text{then},\;du=\text{sec}\;x\;\text{tan}\;x\;dx. \\ & ={\displaystyle \int}{u}^{4}du & & \text{Evaluate the integral}. \\ & =\frac{1}{5}{u}^{5}+C & & \text{Substitute}\;\text{sec}\;x=u. \\ & =\frac{1}{5}{\text{sec}}^{5}x+C & & \end{array}$  {eq:fs-id1165043249437}

:::
:::

:::note [media-2] 
You can read some interesting information at this [website](http://www.openstax.org/l/20_intseccube) to learn about a common integral involving the secant.
:::

:::note [checkpoint] 

:::exercise {fs-id1165042708861} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{tan}}^{5}x\;{\text{sec}}^{2}x\;dx.$
SOLUTION:
$\frac{1}{6}{\text{tan}}^{6}x+C$
COMMENTARY: Hint
Let $u=\text{tan}\;x$ and $du={\text{sec}}^{2}x.$
:::
:::
We now take a look at the various strategies for integrating products and powers of $\text{sec}\;x$ and $\text{tan}\;x.$

:::note [problem-solving] Integrating ${\displaystyle \int}{\text{tan}}^{k}x\;{\text{sec}}^{j}x\;dx$
To integrate ${\displaystyle \int}{\text{tan}}^{k}x\;{\text{sec}}^{j}x\;dx,$ use the following strategies:
1. If $j$ is even and $j\ge 2,$ rewrite ${\text{sec}}^{j}x={\text{sec}}^{j-2}x\;{\text{sec}}^{2}x$ and use ${\text{sec}}^{2}x={\text{tan}}^{2}x+1$ to rewrite ${\text{sec}}^{j-2}x$ in terms of $\text{tan}\;x.$ Let $u=\text{tan}\;x$ and $du={\text{sec}}^{2}xdx.$
2. If $k$ is odd and $j\ge 1,$ rewrite ${\text{tan}}^{k}x\;{\text{sec}}^{j}x={\text{tan}}^{k-1}x\;{\text{sec}}^{j-1}x\;\text{sec}\;x\;\text{tan}\;x$ and use ${\text{tan}}^{2}x={\text{sec}}^{2}x-1$ to rewrite ${\text{tan}}^{k-1}x$ in terms of $\text{sec}\;x.$ Let $u=\text{sec}\;x$ and $du=\text{sec}\;x\;\text{tan}\;x\;dx.$ (*Note*: If $j$ is even and $k$ is odd, then either strategy 1 or strategy 2 may be used.)
3. If $k$ is odd where $k\ge 3$ and $j=0,$ rewrite ${\text{tan}}^{k}x={\text{tan}}^{k-2}x\;{\text{tan}}^{2}x={\text{tan}}^{k-2}x({\text{sec}}^{2}x-1)={\text{tan}}^{k-2}x\;{\text{sec}}^{2}x-{\text{tan}}^{k-2}x.$ It may be necessary to repeat this process on the ${\text{tan}}^{k-2}x$ term.
4. If $k$ is even and $j$ is odd, then use ${\text{tan}}^{2}x={\text{sec}}^{2}x-1$ to express ${\text{tan}}^{k}x$ in terms of $\text{sec}\;x.$ Use integration by parts to integrate odd powers of $\text{sec}\;x.$
:::

:::example {ex:fs-id1165042707642} Integrating ${\displaystyle \int}{\text{tan}}^{k}x\;{\text{sec}}^{j}x\;dx$ when $j$ is Even

:::exercise {fs-id1165042707644} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{tan}}^{6}x\;{\text{sec}}^{4}x\;dx.$
SOLUTION:
Since the power on $\text{sec}\;x$ is even, rewrite ${\text{sec}}^{4}x={\text{sec}}^{2}x\;{\text{sec}}^{2}x$ and use ${\text{sec}}^{2}x={\text{tan}}^{2}x+1$ to rewrite the first ${\text{sec}}^{2}x$ in terms of $\text{tan}\;x.$ Thus,

$\begin{array}{rlll}{\displaystyle \int}{\text{tan}}^{6}x\;{\text{sec}}^{4}x\;dx & ={\displaystyle \int}{\text{tan}}^{6}x({\text{tan}}^{2}x+1){\text{sec}}^{2}x\;dx & & \text{Let}\;u=\text{tan}\;x\;\text{and}\;du={\text{sec}}^{2}xdx. \\ & ={\displaystyle \int}{u}^{6}({u}^{2}+1)du & & \text{Expand}. \\ & ={\displaystyle \int}({u}^{8}+{u}^{6})du & & \text{Evaluate the integral}. \\ & =\frac{1}{9}{u}^{9}+\frac{1}{7}{u}^{7}+C & & \text{Substitute}\;\text{tan}\;x=u. \\ & =\frac{1}{9}{\text{tan}}^{9}x+\frac{1}{7}{\text{tan}}^{7}x+C. & & \end{array}$  {eq:fs-id1165043423537}

:::
:::

:::example {ex:fs-id1165042527092} Integrating ${\displaystyle \int}{\text{tan}}^{k}x\;{\text{sec}}^{j}x\;dx$ when $k$ is Odd

:::exercise {fs-id1165042527094} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{tan}}^{5}x\;{\text{sec}}^{3}x\;dx.$
SOLUTION:
Since the power on $\text{tan}\;x$ is odd, begin by rewriting ${\text{tan}}^{5}x\;{\text{sec}}^{3}x={\text{tan}}^{4}x\;{\text{sec}}^{2}x\;\text{sec}\;x\;\text{tan}\;x.$ Thus,

$\begin{array}{rlllll}{\text{tan}}^{5}x\;{\text{sec}}^{3}x & = & {\text{tan}}^{4}x\;{\text{sec}}^{2}x\;\text{sec}\;x\;\text{tan}\;x. & & & \text{Write}\;{\text{tan}}^{4}x={({\text{tan}}^{2}x)}^{2}. \\ {\displaystyle \int}{\text{tan}}^{5}x\;{\text{sec}}^{3}x\;dx & = & {\displaystyle \int}{({\text{tan}}^{2}x)}^{2}{\text{sec}}^{2}x\;\text{sec}\;x\;\text{tan}\;x\;dx & & & \text{Use}\;{\text{tan}}^{2}x={\text{sec}}^{2}x-1. \\ & = & {\displaystyle \int}{({\text{sec}}^{2}x-1)}^{2}{\text{sec}}^{2}x\;\text{sec}\;x\;\text{tan}\;x\;dx & & & \text{Let}\;u=\text{sec}\;x\;\text{and}\;du=\text{sec}\;x\;\text{tan}\;x\;dx. \\ & = & {\displaystyle \int}{({u}^{2}-1)}^{2}{u}^{2}du & & & \text{Expand}. \\ & = & {\displaystyle \int}({u}^{6}-2{u}^{4}+{u}^{2})du & & & \text{Integrate}. \\ & = & \frac{1}{7}{u}^{7}-\frac{2}{5}{u}^{5}+\frac{1}{3}{u}^{3}+C & & & \text{Substitute}\;\text{sec}\;x=u. \\ & = & \frac{1}{7}{\text{sec}}^{7}x-\frac{2}{5}{\text{sec}}^{5}x+\frac{1}{3}{\text{sec}}^{3}x+C. & & & \end{array}$  {eq:fs-id1165042977525}

:::
:::

:::example {ex:fs-id1165043327268} Integrating ${\displaystyle \int}{\text{tan}}^{k}x\;dx$ where $k$ is Odd and $k\ge 3$

:::exercise {fs-id1165043327270} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{tan}}^{3}x\;dx.$
SOLUTION:
Begin by rewriting ${\text{tan}}^{3}x=\text{tan}\;x\;{\text{tan}}^{2}x=\text{tan}\;x({\text{sec}}^{2}x-1)=\text{tan}\;x\;{\text{sec}}^{2}x-\text{tan}\;x.$ Thus,

$\begin{array}{ll}{\displaystyle \int}{\text{tan}}^{3}x\;dx & ={\displaystyle \int}(\text{tan}\;x\;{\text{sec}}^{2}x-\text{tan}\;x)dx \\ & ={\displaystyle \int}\text{tan}\;x\;{\text{sec}}^{2}x\;dx-{\displaystyle \int}\text{tan}\;x\;dx \\ & =\frac{1}{2}{\text{tan}}^{2}x-\text{ln}|\text{sec}\;x|+C.\end{array}$  {eq:fs-id1165042375616}

For the first integral, use the substitution $u=\text{tan}\;x.$ For the second integral, use the formula.
:::
:::

:::example {ex:fs-id1165043311678} Integrating ${\displaystyle \int}{\text{sec}}^{3}x\;dx$

:::exercise {fs-id1165043311680} type= 
PROBLEM:
Integrate ${\displaystyle \int}{\text{sec}}^{3}x\;dx.$
SOLUTION:
This integral requires integration by parts. To begin, let $u=\text{sec}\;x$ and $dv={\text{sec}}^{2}xdx.$ These choices make $du=\text{sec}\;x\;\text{tan}\;x$ and $v=\text{tan}\;x.$ Thus,

$\begin{array}{rlll}{\displaystyle \int}{\text{sec}}^{3}x\;dx & =\text{sec}\;x\;\text{tan}\;x-{\displaystyle \int}\text{tan}\;x\;\text{sec}\;x\;\text{tan}\;x\;dx & & \\ & =\text{sec}\;x\;\text{tan}\;x-{\displaystyle \int}{\text{tan}}^{2}x\;\text{sec}\;x\;dx & & \text{Simplify}. \\ & =\text{sec}\;x\;\text{tan}\;x-{\displaystyle \int}({\text{sec}}^{2}x-1)\text{sec}\;x\;dx & & \text{Substitute}\;{\text{tan}}^{2}x={\text{sec}}^{2}x-1. \\ & =\text{sec}\;x\;\text{tan}\;x+{\displaystyle \int}\text{sec}\;x\;dx-{\displaystyle \int}{\text{sec}}^{3}x\;dx & & \text{Rewrite}. \\ & =\text{sec}\;x\;\text{tan}\;x+\text{ln}|\text{sec}\;x+\text{tan}\;x|-{\displaystyle \int}{\text{sec}}^{3}x\;dx. & & \text{Evaluate}{\displaystyle \int}\text{sec}\;x\;dx.\end{array}$  {eq:fs-id1165043161235}

We now have

${\displaystyle \int}{\text{sec}}^{3}x\;dx=\text{sec}\;x\;\text{tan}\;x+\text{ln}|\text{sec}\;x+\text{tan}\;x|-{\displaystyle \int}{\text{sec}}^{3}x\;dx.$  {eq:fs-id1165043281632}

Since the integral ${\displaystyle \int}{\text{sec}}^{3}x\;dx$ has reappeared on the right-hand side, we can solve for ${\displaystyle \int}{\text{sec}}^{3}x\;dx$ by adding it to both sides. In doing so, we obtain

$2{\displaystyle \int}{\text{sec}}^{3}x\;dx=\text{sec}\;x\;\text{tan}\;x+\text{ln}|\text{sec}\;x+\text{tan}\;x|.$  {eq:fs-id1165043311020}

Dividing by 2, we arrive at

${\displaystyle \int}{\text{sec}}^{3}x\;dx=\frac{1}{2}\text{sec}\;x\;\text{tan}\;x+\frac{1}{2}\text{ln}|\text{sec}\;x+\text{tan}\;x|+C.$  {eq:fs-id1165043348172}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042808799} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{tan}}^{3}x\;{\text{sec}}^{7}x\;dx.$
SOLUTION:
$\frac{1}{9}{\text{sec}}^{9}x-\frac{1}{7}{\text{sec}}^{7}x+C$
:::
:::

## Reduction Formulas
Evaluating ${\displaystyle \int}{\text{sec}}^{n}x\;dx$ for values of $n$ where $n$ is odd requires integration by parts. In addition, we must also know the value of ${\displaystyle \int}{\text{sec}}^{n-2}x\;dx$ to evaluate ${\displaystyle \int}{\text{sec}}^{n}x\;dx.$ The evaluation of ${\displaystyle \int}{\text{tan}}^{n}x\;dx$ also requires being able to integrate ${\displaystyle \int}{\text{tan}}^{n-2}x\;dx.$ To make the process easier, we can derive and apply the following {term:power reduction formulas}. These rules allow us to replace the integral of a power of $\text{sec}\;x$ or $\text{tan}\;x$ with the integral of a lower power of $\text{sec}\;x$ or $\text{tan}\;x.$

:::note [rule] Rule: Reduction Formulas for ${\displaystyle \int}{\text{sec}}^{n}x\;dx$ and ${\displaystyle \int}{\text{tan}}^{n}x\;dx$

$\hspace{4.08em}{\displaystyle \int}{\text{sec}}^{n}x\;dx=\frac{1}{n-1}{\text{sec}}^{n-2}x\;\text{tan}\;x+\frac{n-2}{n-1}{\displaystyle \int}{\text{sec}}^{n-2}x\;dx$  {eq:fs-id1165043276273} class=numbered

${\displaystyle \int}{\text{tan}}^{n}x\;dx=\frac{1}{n-1}{\text{tan}}^{n-1}x-{\displaystyle \int}{\text{tan}}^{n-2}x\;dx$  {eq:fs-id1165039565660} class=numbered

The first power reduction rule may be verified by applying integration by parts. The second may be verified by following the strategy outlined for integrating odd powers of $\text{tan}\;x.$
:::

:::example {ex:fs-id1165042445770} Revisiting ${\displaystyle \int}{\text{sec}}^{3}x\;dx$

:::exercise {fs-id1165042445772} type= 
PROBLEM:
Apply a reduction formula to evaluate ${\displaystyle \int}{\text{sec}}^{3}x\;dx.$
SOLUTION:
By applying the first reduction formula, we obtain

$\begin{array}{ll}{\displaystyle \int}{\text{sec}}^{3}x\;dx & =\frac{1}{2}\text{sec}\;x\;\text{tan}\;x+\frac{1}{2}{\displaystyle \int}\text{sec}\;x\;dx \\ & =\frac{1}{2}\text{sec}\;x\;\text{tan}\;x+\frac{1}{2}\text{ln}|\text{sec}\;x+\text{tan}\;x|+C.\end{array}$  {eq:fs-id1165042977404}

:::
:::

:::example {ex:fs-id1165042599295} Using a Reduction Formula

:::exercise {fs-id1165042599297} type= 
PROBLEM:
Evaluate ${\displaystyle \int}{\text{tan}}^{4}x\;dx.$
SOLUTION:
Applying the reduction formula for ${\displaystyle \int}{\text{tan}}^{4}x\;dx$ we have

$\begin{array}{rlll}{\displaystyle \int}{\text{tan}}^{4}x\;dx & =\frac{1}{3}{\text{tan}}^{3}x-{\displaystyle \int}{\text{tan}}^{2}x\;dx & & \\ & =\frac{1}{3}{\text{tan}}^{3}x-(\text{tan}\;x-{\displaystyle \int}{\text{tan}}^{0}x\;dx) & & \text{Apply the reduction formula to}{\displaystyle \int}{\text{tan}}^{2}x\;dx. \\ & =\frac{1}{3}{\text{tan}}^{3}x-\text{tan}\;x+{\displaystyle \int}1\;dx & & \text{Simplify}. \\ & =\frac{1}{3}{\text{tan}}^{3}x-\text{tan}\;x+x+C. & & \text{Evaluate}{\displaystyle \int}1dx.\end{array}$  {eq:fs-id1165042317197}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043301707} type= 
PROBLEM:
Apply the reduction formula to ${\displaystyle \int}{\text{sec}}^{5}x\;dx.$
SOLUTION:
${\displaystyle \int}{\text{sec}}^{5}x\;dx=\frac{1}{4}{\text{sec}}^{3}x\;\text{tan}\;x+\frac{3}{4}{\displaystyle \int}{\text{sec}}^{3}x$
COMMENTARY: Hint
Use reduction formula 1 and let $n=5.$
:::
:::

## Key Concepts {section:key-concepts}
- Integrals of trigonometric functions can be evaluated by the use of various strategies. These strategies include

1. Applying trigonometric identities to rewrite the integral so that it may be evaluated by *u*-substitution
2. Using integration by parts
3. Applying trigonometric identities to rewrite products of sines and cosines with different arguments as the sum of individual sine and cosine functions
4. Applying reduction formulas

## Key Equations {section:key-equations}
To integrate products involving $\text{sin}(ax),$ $\text{sin}(bx),$ $\text{cos}(ax),$ and $\text{cos}(bx),$ use the substitutions.

> TABLE {tab:eip-512} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Sine Products** | $\text{sin}(ax)\text{sin}(bx)=\frac{1}{2}\text{cos}((a-b)x)-\frac{1}{2}\text{cos}((a+b)x)$ |
| **Sine and Cosine Products** | $\text{sin}(ax)\text{cos}(bx)=\frac{1}{2}\text{sin}((a-b)x)+\frac{1}{2}\text{sin}((a+b)x)$ |
| **Cosine Products** | $\text{cos}(ax)\text{cos}(bx)=\frac{1}{2}\text{cos}((a-b)x)+\frac{1}{2}\text{cos}((a+b)x)$ |
| **Power Reduction Formula** | $\int {\text{sec}}^{n}xdx=\frac{{sec}^{n-2}xtanx}{n-1}+\frac{n-2}{n-1}\int {\text{sec}}^{n-2}x\;dx;n≠1$ |
| **Power Reduction Formula** | ${\displaystyle \int}{\text{tan}}^{n}x\;dx=\frac{1}{n-1}{\text{tan}}^{n-1}x-{\displaystyle \int}{\text{tan}}^{n-2}x\;dx$ |

##  {section:section-exercises}
Fill in the blank to make a true statement.

:::exercise {fs-id1165042466940} type= 
PROBLEM:
${\text{sin}}^{2}x+\_\_\_\_\_\_\_=1$
SOLUTION:
${\text{cos}}^{2}x$
:::

:::exercise {fs-id1165042466992} type= 
PROBLEM:
${\text{sec}}^{2}x-1=\_\_\_\_\_\_\_$
:::
Use an identity to reduce the power of the trigonometric function to a trigonometric function raised to the first power.

:::exercise {fs-id1165042815096} type= 
PROBLEM:
${\text{sin}}^{2}x=\_\_\_\_\_\_\_$
SOLUTION:
$\frac{1-\text{cos}(2x)}{2}$
:::

:::exercise {fs-id1165042659418} type= 
PROBLEM:
${\text{cos}}^{2}x=\_\_\_\_\_\_\_$
:::
Evaluate each of the following integrals by *u*-substitution.

:::exercise {fs-id1165042659489} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{3}x\;\text{cos}\;x\;dx}$
SOLUTION:
$\frac{{\text{sin}}^{4}x}{4}+C$
:::

:::exercise {fs-id1165042467974} type= 
PROBLEM:
${\displaystyle \int \sqrt{\text{cos}\;x}\;\text{sin}\;x\;dx}$
:::

:::exercise {fs-id1165039566778} type= 
PROBLEM:
${\displaystyle \int {\text{tan}}^{5}(2x){\text{sec}}^{2}(2x)dx}$
SOLUTION:
$\frac{1}{12}{\text{tan}}^{6}(2x)+C$
:::

:::exercise {fs-id1165042634849} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{7}(2x)\text{cos}(2x)dx}$
:::

:::exercise {fs-id1165043188506} type= 
PROBLEM:
${\displaystyle \int \text{tan}(\frac{x}{2}){\text{sec}}^{2}(\frac{x}{2})dx}$
SOLUTION:
${\displaystyle (\frac{x}{2})(\frac{x}{2})+{C}_{1}{\text{or sec}}^{2}(\frac{x}{2})+{C}_{2}}$
:::

:::exercise {fs-id1165042977490} type= 
PROBLEM:
${\displaystyle \int {\text{tan}}^{2}x\;{\text{sec}}^{2}x\;dx}$
:::
Compute the following integrals using the guidelines for integrating powers of trigonometric functions. Use a CAS to check the solutions. (*Note*: Some of the problems may be done using techniques of integration learned previously.)

:::exercise {fs-id1165043179948} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{3}x\;dx}$
SOLUTION:
$-\text{cos}x+\frac{1}{3}{\text{cos}}^{3}x+C$
:::

:::exercise {fs-id1165042601915} type= 
PROBLEM:
${\displaystyle \int {\text{cos}}^{3}x\;dx}$
:::

:::exercise {fs-id1165042533152} type= 
PROBLEM:
${\displaystyle \int \text{sin}\;x\;\text{cos}\;x\;dx}$
SOLUTION:
$-\frac{1}{2}{\text{cos}}^{2}x+C$ or $\frac{1}{2}{\text{sin}}^{2}x+C$
:::

:::exercise {fs-id1165039554216} type= 
PROBLEM:
${\displaystyle \int {\text{cos}}^{5}x\;dx}$
:::

:::exercise {fs-id1165039562435} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{5}x\;{\text{cos}}^{2}x\;dx}$
SOLUTION:
$-\frac{1}{3}{\text{cos}}^{3}x+\frac{2}{5}{\text{cos}}^{5}x-\frac{1}{7}{\text{cos}}^{7}x+C$
:::

:::exercise {fs-id1165042640865} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{3}x\;{\text{cos}}^{3}x\;dx}$
:::

:::exercise {fs-id1165042977672} type= 
PROBLEM:
${\displaystyle \int \sqrt{\text{sin}\;x}}\;\text{cos}\;x\;dx$
SOLUTION:
$\frac{2}{3}{(\text{sin}\;x)}^{\frac{3}{2}}+C$
:::

:::exercise {fs-id1165042977754} type= 
PROBLEM:
${\displaystyle \int \sqrt{\text{sin}\;x}}\;{\text{cos}}^{3}x\;dx$
:::

:::exercise {fs-id1165039565954} type= 
PROBLEM:
${\displaystyle \int \text{sec}\;x\;\text{tan}\;x\;dx}$
SOLUTION:
$\text{sec}\;x+C$
:::

:::exercise {fs-id1165039566014} type= 
PROBLEM:
${\displaystyle \int \text{tan}(5x)dx}$
:::

:::exercise {fs-id1165043404330} type= 
PROBLEM:
${\displaystyle \int {\text{tan}}^{2}x\;\text{sec}\;x\;dx}$
SOLUTION:
$\frac{1}{2}\text{sec}\;x\;\text{tan}\;x-\frac{1}{2}\text{ln}(\text{sec}\;x+\text{tan}\;x)+C$
:::

:::exercise {fs-id1165042466689} type= 
PROBLEM:
${\displaystyle \int \text{tan}\;x\;{\text{sec}}^{3}x\;dx}$
:::

:::exercise {fs-id1165042323266} type= 
PROBLEM:
${\displaystyle \int {\text{sec}}^{4}x\;dx}$
SOLUTION:
$\frac{2\;\text{tan}\;x}{3}+\frac{1}{3}\text{sec}{(x)}^{2}\text{tan}\;x$ $=\text{tan}\;x+\frac{{\text{tan}}^{3}x}{3}+C$
:::

:::exercise {fs-id1165042672318} type= 
PROBLEM:
${\displaystyle \int \text{cot}\;x\;dx}$
:::

:::exercise {fs-id1165042672375} type= 
PROBLEM:
${\displaystyle \int \text{csc}\;x\;dx}$
SOLUTION:
$\text{−}\text{ln}|\text{cot}\;x+\text{csc}\;x|+C$
:::

:::exercise {fs-id1165042659338} type= 
PROBLEM:
${\displaystyle \int \frac{{\text{tan}}^{3}x}{\sqrt{\text{sec}\;x}}dx}$
:::
For the following exercises, find a general formula for the integrals.

:::exercise {fs-id1165042659035} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{2}ax\;\text{cos}\;ax\;dx}$
SOLUTION:
$\frac{{\text{sin}}^{3}(ax)}{3a}+C$
:::

:::exercise {fs-id1165042508180} type= 
PROBLEM:
${\displaystyle \int \text{sin}\;ax\;\text{cos}\;ax\;dx.}$
:::
Use the double-angle formulas to evaluate the following integrals.

:::exercise {fs-id1165043310799} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi}{\text{sin}}^{2}x\;dx}$
SOLUTION:
$\frac{\pi}{2}$
:::

:::exercise {fs-id1165043310848} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi}{\text{sin}}^{4}x\;dx}$
:::

:::exercise {fs-id1165043310900} type= 
PROBLEM:
${\displaystyle \int {\text{cos}}^{2}3x\;dx}$
SOLUTION:
$\frac{x}{2}+\frac{1}{12}\;\text{sin}(6x)+C$
:::

:::exercise {fs-id1165042659165} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{2}x\;{\text{cos}}^{2}x\;dx}$
:::

:::exercise {fs-id1165039563290} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{2}x\;dx}+{\displaystyle \int {\text{cos}}^{2}x\;dx}$
SOLUTION:
*$x+C$*
:::

:::exercise {fs-id1165039563361} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{2}x\;{\text{cos}}^{2}(2x)dx}$
:::
For the following exercises, evaluate the definite integrals. Express answers in exact form whenever possible.

:::exercise {fs-id1165042657818} type= 
PROBLEM:
${\displaystyle \int_{0}^{2\pi}\text{cos}\;x\;\text{sin}\;2x\;dx}$
SOLUTION:
0
:::

:::exercise {fs-id1165042657875} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi}\text{sin}\;3x\;\text{sin}\;5x\;dx}$
:::

:::exercise {fs-id1165042657931} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi}\text{cos}(99x)\text{sin}(101x)dx}$
SOLUTION:
0
:::

:::exercise {fs-id1165042390932} type= 
PROBLEM:
${\displaystyle \int_{\text{−}\pi}^{\pi}{\text{cos}}^{2}(3x)dx}$
:::

:::exercise {fs-id1165042390991} type= 
PROBLEM:
${\displaystyle \int_{0}^{2\pi}\text{sin}\;x\;\text{sin}(2x)\text{sin}(3x)dx}$
SOLUTION:
0
:::

:::exercise {fs-id1165042364127} type= 
PROBLEM:
${\displaystyle \int_{0}^{4\pi}\text{cos}(x\text{/}2)\text{sin}}(x\text{/}2)dx$
:::

:::exercise {fs-id1165039521468} type= 
PROBLEM:
${\displaystyle \int_{\pi \text{/}6}^{\pi \text{/}3}\frac{{\text{cos}}^{3}x}{\sqrt{\text{sin}\;x}}dx}$ (Round this answer to three decimal places.)
SOLUTION:
Approximately 0.239
:::

:::exercise {fs-id1165039521536} type= 
PROBLEM:
${\displaystyle \int_{\text{−}\pi \text{/}3}^{\pi \text{/}3}\sqrt{{\text{sec}}^{2}x-1}\;dx}$
:::

:::exercise {fs-id1165043378020} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi \text{/}2}\sqrt{1-\text{cos}(2x)}\;dx}$
SOLUTION:
$\sqrt{2}$
:::

:::exercise {fs-id1165043378087} type= 
PROBLEM:
Find the area of the region bounded by the graphs of the equations $y=\text{sin}\;x,y={\text{sin}}^{3}x,x=0,\text{and}\;x=\frac{\pi}{2}.$
:::

:::exercise {fs-id1165042448062} type= 
PROBLEM:
Find the area of the region bounded by the graphs of the equations $y={\text{cos}}^{2}x,y={\text{sin}}^{2}x,x=-\frac{\pi}{4},\text{and}\;x=\frac{\pi}{4}.$
SOLUTION:
1.0
:::

:::exercise {fs-id1165042668725} type= 
PROBLEM:
A particle moves in a straight line with the velocity function $v(t)=\text{sin}(\omega t){\text{cos}}^{2}(\omega t).$ Find its position function $x=f(t)$ if $f(0)=0.$
:::

:::exercise {fs-id1165042327533} type= 
PROBLEM:
Find the average value of the function $f(x)={\text{sin}}^{2}x\;{\text{cos}}^{3}x$ over the interval $[\text{−}\pi ,\pi ].$
SOLUTION:
0
:::
For the following exercises, solve the differential equations.

:::exercise {fs-id1165042327606} type= 
PROBLEM:
$\frac{dy}{dx}={\text{sin}}^{2}x.$ The curve passes through point $(0,0).$
:::

:::exercise {fs-id1165042627387} type= 
PROBLEM:
$\frac{dy}{d\theta}={\text{sin}}^{4}(\pi \theta )$
SOLUTION:
$\frac{3\theta}{8}-\frac{1}{4\pi}\;\text{sin}(2\pi \theta )+\frac{1}{32\pi}\;\text{sin}(4\pi \theta )+C=f(x)$
:::

:::exercise {fs-id1165042658490} type= 
PROBLEM:
Find the length of the curve $y=\text{ln}(\text{csc}\;x),\frac{\pi}{4}\le x\le \frac{\pi}{2}.$
:::

:::exercise {fs-id1165042660279} type= 
PROBLEM:
Find the length of the curve $y=\text{ln}(\text{sin}\;x),\frac{\pi}{3}\le x\le \frac{\pi}{2}.$
SOLUTION:
$\text{ln}(\sqrt{3})$
:::

:::exercise {fs-id1165042660353} type= 
PROBLEM:
Find the volume generated by revolving the curve $y=\text{cos}(3x)$ about the *x*-axis, $0\le x\le \frac{\pi}{36}.$
:::
For the following exercises, use this information: The inner product of two functions *f* and *g* over $[a,b]$ is defined by $f(x)\cdot g(x)=\langle f,g\rangle ={\displaystyle \int_{a}^{b}f\cdot gdx.}$ Two distinct functions *f* and *g* are said to be orthogonal if $\langle f,g\rangle =0.$

:::exercise {fs-id1165042477378} type= 
PROBLEM:
Show that $\{\text{sin}(2x),\text{cos}(3x)\}$ are orthogonal over the interval $[\text{−}\pi ,\pi ].$
SOLUTION:
${\displaystyle \int_{\text{−}\pi}^{\pi}\text{sin}(2x)\text{cos}(3x)}dx=0$
:::

:::exercise {fs-id1165043311345} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{\text{−}\pi}^{\pi}\text{sin}(mx)\text{cos}(nx)dx}.$
:::

:::exercise {fs-id1165043311416} type= 
PROBLEM:
Integrate ${y}^{'}=\sqrt{\text{tan}\;x}{\text{sec}}^{4}x.$
SOLUTION:
$\sqrt{\text{tan}(x)}(\frac{8\;\text{tan}\;x}{21}+\frac{2}{7}\text{sec}\;{x}^{2}\text{tan}\;x)+C=f(x)$
:::
For each pair of integrals, determine which one is more difficult to evaluate. Explain your reasoning.

:::exercise {fs-id1165042549309} type= 
PROBLEM:
${\displaystyle \int {\text{sin}}^{456}x\;\text{cos}\;x\;dx}$ or ${\displaystyle \int {\text{sin}}^{2}x\;{\text{cos}}^{2}x\;dx}$
:::

:::exercise {fs-id1165042633982} type= 
PROBLEM:
${\displaystyle \int {\text{tan}}^{350}x\;{\text{sec}}^{2}x\;dx}$ or ${\displaystyle \int {\text{tan}}^{350}x\;\text{sec}\;x\;dx}$
SOLUTION:
The second integral is more difficult because the first integral is simply a *u*-substitution type.
:::

## Glossary
- {def} **power reduction formula**: a rule that allows an integral of a power of a trigonometric function to be exchanged for an integral involving a lower power
- {def} **trigonometric integral**: an integral involving powers and products of trigonometric functions

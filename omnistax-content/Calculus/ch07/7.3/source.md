# Trigonometric Substitution

## Learning Objectives {section:learning-objectives}
- Solve integration problems involving the square root of a sum or difference of two squares.

In this section, we explore integrals containing expressions of the form $\sqrt{{a}^{2}-{x}^{2}},$ $\sqrt{{a}^{2}+{x}^{2}},$ and $\sqrt{{x}^{2}-{a}^{2}},$ where the values of $a$ are positive. We have already encountered and evaluated integrals containing some expressions of this type, but many still remain inaccessible. The technique of {term:trigonometric substitution} comes in very handy when evaluating these integrals. This technique uses substitution to rewrite these integrals as trigonometric integrals.

## Integrals Involving $\sqrt{{a}^{2}-{x}^{2}}$
Before developing a general strategy for integrals containing $\sqrt{{a}^{2}-{x}^{2}},$ consider the integral ${\displaystyle \int \sqrt{9-{x}^{2}}}dx.$ This integral cannot be evaluated using any of the techniques we have discussed so far. However, if we make the substitution $x=3\;\text{sin}\;\theta ,$ we have $dx=3\;\text{cos}\;\theta d\theta .$ After substituting into the integral, we have

${\displaystyle \int \sqrt{9-{x}^{2}}\;dx}={{\displaystyle \int}}^{}\sqrt{9-{(3\;\text{sin}\;\theta )}^{2}}3\;\text{cos}\;\theta d\theta .$  {eq:fs-id1165042199492}

After simplifying, we have

${{\displaystyle \int}}^{}\sqrt{9-{x}^{2}}\;dx={{\displaystyle \int}}^{}9\sqrt{1-{\text{sin}}^{2}\theta}\;\text{cos}\;\theta d\theta .$  {eq:fs-id1165042101997}

Letting $1-{\text{sin}}^{2}\theta ={\text{cos}}^{2}\theta ,$ we now have

${{\displaystyle \int}}^{}\sqrt{9-{x}^{2}}\;dx={{\displaystyle \int}}^{}9\sqrt{{\text{cos}}^{2}\theta}\;\text{cos}\;\theta d\theta .$  {eq:fs-id1165040752105}

Assuming that $\text{cos}\;\theta \ge 0,$ we have

${{\displaystyle \int}}^{}\sqrt{9-{x}^{2}}\;dx={{\displaystyle \int}}^{}9\;{\text{cos}}^{2}\theta d\theta .$  {eq:fs-id1165042007513}

At this point, we can evaluate the integral using the techniques developed for integrating powers and products of trigonometric functions. Before completing this example, let’s take a look at the general theory behind this idea.
To evaluate integrals involving $\sqrt{{a}^{2}-{x}^{2}},$ we make the substitution $x=a\;\text{sin}\;\theta$ and $dx=a\;\text{cos}\;\theta .$ To see that this actually makes sense, consider the following argument: The domain of $\sqrt{{a}^{2}-{x}^{2}}$ is $[\text{−}a,a].$ Thus, $\text{−}a\le x\le a.$ Consequently, $−1\le \frac{x}{a}\le 1.$ Since the range of $\text{sin}\;x$ over $[\text{−}(\pi \text{/}2),\pi \text{/}2]$ is $[−1,1],$ there is a unique angle $\theta$ satisfying $\text{−}(\pi \text{/}2)\le \theta \le \pi \text{/}2$ so that $\text{sin}\;\theta =x\text{/}a,$ or equivalently, so that $x=a\;\text{sin}\;\theta .$ If we substitute $x=a\;\text{sin}\;\theta$ into $\sqrt{{a}^{2}-{x}^{2}},$ we get

$\begin{array}{rllll}\sqrt{{a}^{2}-{x}^{2}} & =\sqrt{{a}^{2}-{(a\;\text{sin}\;\theta )}^{2}} & & & \text{Let}\;x=a\;\text{sin}\;\theta \;\text{where}\;-\frac{\pi}{2}\le \theta \le \frac{\pi}{2}.\;\text{Simplify.} \\ & =\sqrt{{a}^{2}-{a}^{2}{\text{sin}}^{2}\theta} & & & \text{Factor out}\;{a}^{2}. \\ & =\sqrt{{a}^{2}(1-{\text{sin}}^{2}\theta )} & & & \text{Substitute}\;1-{\text{sin}}^{2}x={\text{cos}}^{2}x. \\ & =\sqrt{{a}^{2}{\text{cos}}^{2}\theta} & & & \text{Take the square root.} \\ & =|a\;\text{cos}\;\theta | & & & \\ & =a\;\text{cos}\;\theta . & & & \end{array}$  {eq:fs-id1165041762738}

Since $\text{cos}\;\theta \ge 0$ on $-\frac{\pi}{2}\le \theta \le \frac{\pi}{2}$ and $a>0,$ $|a\;\text{cos}\;\theta |=a\;\text{cos}\;\theta .$ We can see, from this discussion, that by making the substitution $x=a\;\text{sin}\;\theta ,$ we are able to convert an integral involving a radical into an integral involving trigonometric functions. After we evaluate the integral, we can convert the solution back to an expression involving $x.$ To see how to do this, let’s begin by assuming that $0<x<a.$ In this case, $0<\theta <\frac{\pi}{2}.$ Since $\text{sin}\;\theta =\frac{x}{a},$ we can draw the reference triangle in [ref:CNX_Calc_Figure_07_03_001] to assist in expressing the values of $\text{cos}\;\theta ,$ $\text{tan}\;\theta ,$ and the remaining trigonometric functions in terms of $x.$ It can be shown that this triangle actually produces the correct values of the trigonometric functions evaluated at $\theta$ for all $\theta$ satisfying $-\frac{\pi}{2}\le \theta \le \frac{\pi}{2}.$ It is useful to observe that the expression $\sqrt{{a}^{2}-{x}^{2}}$ actually appears as the length of one side of the triangle. Last, should $\theta$ appear by itself, we use $\theta ={\text{sin}}^{−1}(\frac{x}{a}).$

> FIGURE {fig:CNX_Calc_Figure_07_03_001} src=../../media/CNX_Calc_Figure_07_03_001.jpg
> alt: This figure is a right triangle. It has an angle labeled theta. This angle is opposite the vertical side. The hypotenuse is labeled a, the vertical leg is labeled x, and the horizontal leg is labeled as the square root of (a^2 – x^2). To the left of the triangle is the equation sin(theta) = x/a.
> caption: A reference triangle can help express the trigonometric functions evaluated at $\theta$ in terms of $x.$

The essential part of this discussion is summarized in the following problem-solving strategy.

:::note [problem-solving] Integrating Expressions Involving $\sqrt{{a}^{2}-{x}^{2}}$
1. It is a good idea to make sure the integral cannot be evaluated easily in another way. For example, although this method can be applied to integrals of the form ${\displaystyle \int \frac{1}{\sqrt{{a}^{2}-{x}^{2}}}dx},$ ${\displaystyle \int \frac{x}{\sqrt{{a}^{2}-{x}^{2}}}dx},$ and ${\displaystyle \int x\sqrt{{a}^{2}-{x}^{2}}\;dx,}$ they can each be integrated directly either by formula or by a simple *u*-substitution.
2. Make the substitution $x=a\;\text{sin}\;\theta$ and $dx=a\;\text{cos}\;\theta d\theta .$ *Note*: This substitution yields $\sqrt{{a}^{2}-{x}^{2}}=a\;\text{cos}\;\theta .$
3. Simplify the expression.
4. Evaluate the integral using techniques from the section on trigonometric integrals.
5. Use the reference triangle from [ref:CNX_Calc_Figure_07_03_001] to rewrite the result in terms of $x.$ You may also need to use some trigonometric identities and the relationship $\theta ={\text{sin}}^{−1}(\frac{x}{a}).$
:::
The following example demonstrates the application of this problem-solving strategy.

:::example {ex:fs-id1165041837235} Integrating an Expression Involving $\sqrt{{a}^{2}-{x}^{2}}$

:::exercise {fs-id1165042128156} type= 
PROBLEM:
Evaluate ${{\displaystyle \int}}^{}\sqrt{9-{x}^{2}}\;dx.$
SOLUTION:
Begin by making the substitutions $x=3\;\text{sin}\;\theta$ and $dx=3\;\text{cos}\;\theta d\theta .$ Since $\text{sin}\;\theta =\frac{x}{3},$ we can construct the reference triangle shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_07_03_002} src=../../media/CNX_Calc_Figure_07_03_002.jpg
> alt: This figure is a right triangle. It has an angle labeled theta. This angle is opposite the vertical side. The hypotenuse is labeled 3, the vertical leg is labeled x, and the horizontal leg is labeled as the square root of (9 – x^2). To the left of the triangle is the equation sin(theta) = x/3.
> caption: A reference triangle can be constructed for [ref:fs-id1165041837235].

Thus,

$\begin{array}{rllll}{{\displaystyle \int}}^{}\sqrt{9-{x}^{2}}\;dx & ={{\displaystyle \int}}^{}\sqrt{9-{(3\;\text{sin}\;\theta )}^{2}}3\;\text{cos}\;\theta d\theta & & & \text{Substitute}\;x=3\;\text{sin}\;\theta \;\text{and}\;dx=3\;\text{cos}\;\theta d\theta . \\ & ={{\displaystyle \int}}^{}\sqrt{9(1-{\text{sin}}^{2}\theta )}3\;\text{cos}\;\theta d\theta & & & \text{Simplify.} \\ & ={{\displaystyle \int}}^{}\sqrt{9\;{\text{cos}}^{2}\theta}3\;\text{cos}\;\theta d\theta & & & \text{Substitute}\;{\text{cos}}^{2}\theta =1-{\text{sin}}^{2}\theta . \\ & ={{\displaystyle \int}}^{}3|\text{cos}\;\theta |3\;\text{cos}\;\theta d\theta & & & \text{Take the square root.} \\ & ={{\displaystyle \int}}^{}9\;{\text{cos}}^{2}\theta d\theta & & & \begin{array}{l}\text{Simplify. Since}\;-\frac{\pi}{2}\le \theta \le \frac{\pi}{2},\;\text{cos}\;\theta \ge 0\;\text{and} \\ |\text{cos}\;\theta |=\text{cos}\;\theta .\end{array} \\ & ={{\displaystyle \int}}^{}9(\frac{1}{2}+\frac{1}{2}\text{cos}(2\theta ))d\theta & & & \begin{array}{l}\text{Use the strategy for integrating an even power} \\ \text{of}\;\text{cos}\;\theta .\end{array} \\ & =\frac{9}{2}\theta +\frac{9}{4}\text{sin}(2\theta )+C & & & \text{Evaluate the integral.} \\ & =\frac{9}{2}\theta +\frac{9}{4}(2\;\text{sin}\;\theta \;\text{cos}\;\theta )+C & & & \text{Substitute}\;\text{sin}(2\theta )=2\;\text{sin}\;\theta \;\text{cos}\;\theta . \\ & =\frac{9}{2}{\text{sin}}^{−1}(\frac{x}{3})+\frac{9}{2}\cdot \frac{x}{3}\cdot \frac{\sqrt{9-{x}^{2}}}{3}+C & & & \begin{array}{l}\text{Substitute}\;{\text{sin}}^{−1}(\frac{x}{3})=\theta \;\text{and}\;\text{sin}\;\theta =\frac{x}{3}.\;\text{Use} \\ \text{the reference triangle to see that} \\ \text{cos}\;\theta =\frac{\sqrt{9-{x}^{2}}}{3}\;\text{and make this substitution.}\end{array} \\ & =\frac{9}{2}{\text{sin}}^{−1}(\frac{x}{3})+\frac{x\sqrt{9-{x}^{2}}}{2}+C. & & & \text{Simplify.}\end{array}$  {eq:fs-id1165041949238}

:::
:::

:::example {ex:fs-id1165042229562} Integrating an Expression Involving $\sqrt{{a}^{2}-{x}^{2}}$

:::exercise {fs-id1165042073728} type= 
PROBLEM:
Evaluate ${\displaystyle \int \frac{\sqrt{4-{x}^{2}}}{x}dx.}$
SOLUTION:
First make the substitutions $x=2\;\text{sin}\;\theta$ and $dx=2\;\text{cos}\;\theta d\theta .$ Since $\text{sin}\;\theta =\frac{x}{2},$ we can construct the reference triangle shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_07_03_003} src=../../media/CNX_Calc_Figure_07_03_003.jpg
> alt: This figure is a right triangle. It has an angle labeled theta. This angle is opposite the vertical side. The vertical leg is labeled x, and the horizontal leg is labeled as the square root of (4 – x^2). To the left of the triangle is the equation sin(theta) = x/2.
> caption: A reference triangle can be constructed for [ref:fs-id1165042229562].

Thus,

$\begin{array}{rllll}{\displaystyle \int \frac{\sqrt{4-{x}^{2}}}{x}dx} & ={\displaystyle \int \frac{\sqrt{4-{(2\;\text{sin}\;\theta )}^{2}}}{2\;\text{sin}\;\theta}2\;\text{cos}\;\theta d\theta} & & & \text{Substitute}\;x=2\;\text{sin}\;\theta \;\text{and}\;dx=2\;\text{cos}\;\theta d\theta . \\ & ={\displaystyle \int \frac{2\;{\text{cos}}^{2}\theta}{\text{sin}\;\theta}d\theta} & & & \text{Substitute}\;{\text{cos}}^{2}\theta =1-{\text{sin}}^{2}\theta \;\text{and simplify.} \\ & ={\displaystyle \int \frac{2(1-{\text{sin}}^{2}\theta )}{\text{sin}\;\theta}d\theta} & & & \text{Substitute}\;{\text{sin}}^{2}\theta =1-{\text{cos}}^{2}\theta . \\ & ={{\displaystyle \int}}^{}(2\;\text{csc}\;\theta -2\;\text{sin}\;\theta )d\theta & & & \begin{array}{l}\text{Separate the numerator, simplify, and use} \\ \text{csc}\;\theta =\frac{1}{\text{sin}\;\theta}.\end{array} \\ & =2\;\text{ln}|\text{csc}\;\theta -\text{cot}\;\theta |+2\;\text{cos}\;\theta +C & & & \text{Evaluate the integral.} \\ & =2\;\text{ln}|\frac{2}{x}-\frac{\sqrt{4-{x}^{2}}}{x}|+\sqrt{4-{x}^{2}}+C. & & & \begin{array}{l}\text{Use the reference triangle to rewrite the} \\ \text{expression in terms of}\;x\;\text{and simplify.}\end{array}\end{array}$  {eq:fs-id1165040697663}

:::
:::
In the next example, we see that we sometimes have a choice of methods.

:::example {ex:fs-id1165042092098} Integrating an Expression Involving $\sqrt{{a}^{2}-{x}^{2}}$ Two Ways

:::exercise {fs-id1165040642691} type= 
PROBLEM:
Evaluate ${{\displaystyle \int}}^{}{x}^{3}\sqrt{1-{x}^{2}}\;dx$ two ways: first by using the substitution $u=1-{x}^{2}$ and then by using a trigonometric substitution.
SOLUTION:
**Method 1**
Let $u=1-{x}^{2}$ and hence ${x}^{2}=1-u.$ Thus, $du=−2x\;dx.$ In this case, the integral becomes

$\begin{array}{rllll}{{\displaystyle \int}}^{}{x}^{3}\sqrt{1-{x}^{2}}\;dx & =-\frac{1}{2}{{\displaystyle \int}}^{}{x}^{2}\sqrt{1-{x}^{2}}(−2x\;dx) & & & \text{Make the substitution.} \\ & =-\frac{1}{2}{{\displaystyle \int}}^{}(1-u)\sqrt{u}\;du & & & \text{Expand the expression.} \\ & =-\frac{1}{2}{\displaystyle \int ({u}^{1\text{/}2}-{u}^{3\text{/}2})du} & & & \text{Evaluate the integral.} \\ & =-\frac{1}{2}(\frac{2}{3}{u}^{3\text{/}2}-\frac{2}{5}{u}^{5\text{/}2})+C & & & \text{Rewrite in terms of}\;x. \\ & =-\frac{1}{3}{(1-{x}^{2})}^{3\text{/}2}+\frac{1}{5}{(1-{x}^{2})}^{5\text{/}2}+C. & & & \end{array}$  {eq:fs-id1165042301844}

**Method 2**
Let $x=\text{sin}\;\theta .$ In this case, $dx=\text{cos}\;\theta d\theta .$ Using this substitution, we have

$\begin{array}{rllll}{{\displaystyle \int}}^{}{x}^{3}\sqrt{1-{x}^{2}}\;dx & ={{\displaystyle \int}}^{}{\text{sin}}^{3}\theta \;{\text{cos}}^{2}\theta d\theta & & & \\ & ={{\displaystyle \int}}^{}(1-{\text{cos}}^{2}\theta ){\text{cos}}^{2}\theta \;\text{sin}\;\theta d\theta & & & \text{Let}\;u=\text{cos}\;\theta .\;\text{Thus,}\;du=\text{−}\text{sin}\;\theta d\theta . \\ & ={{\displaystyle \int}}^{}({u}^{4}-{u}^{2})du & & & \\ & =\frac{1}{5}{u}^{5}-\frac{1}{3}{u}^{3}+C & & & \text{Substitute}\;\text{cos}\;\theta =u. \\ & =\frac{1}{5}{\text{cos}}^{5}\theta -\frac{1}{3}{\text{cos}}^{3}\theta +C & & & \begin{array}{l}\text{Use a reference triangle to see that} \\ \text{cos}\;\theta =\sqrt{1-{x}^{2}}.\end{array} \\ & =\frac{1}{5}{(1-{x}^{2})}^{5\text{/}2}-\frac{1}{3}{(1-{x}^{2})}^{3\text{/}2}+C. & & & \end{array}$  {eq:fs-id1165040793998}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042094004} type= 
PROBLEM:
Rewrite the integral ${\displaystyle \int \frac{{x}^{3}}{\sqrt{25-{x}^{2}}}dx}$ using the appropriate trigonometric substitution (do not evaluate the integral).
SOLUTION:
${{\displaystyle \int}}^{}125\;{\text{sin}}^{3}\theta d\theta$
COMMENTARY: Hint
Substitute $x=5\;\text{sin}\;\theta$ and $dx=5\;\text{cos}\;\theta d\theta .$
:::
:::

## Integrating Expressions Involving $\sqrt{{a}^{2}+{x}^{2}}$
For integrals containing $\sqrt{{a}^{2}+{x}^{2},}$ let’s first consider the domain of this expression. Since $\sqrt{{a}^{2}+{x}^{2}}$ is defined for all real values of $x,$ we restrict our choice to those trigonometric functions that have a range of all real numbers. Thus, our choice is restricted to selecting either $x=a\;\text{tan}\;\theta$ or $x=a\;\text{cot}\;\theta .$ Either of these substitutions would actually work, but the standard substitution is $x=a\;\text{tan}\;\theta$ or, equivalently, $\text{tan}\;\theta =x\text{/}a.$ With this substitution, we make the assumption that $\text{−}(\pi \text{/}2)<\theta <\pi \text{/}2,$ so that we also have $\theta ={\text{tan}}^{−1}(x\text{/}a).$ The procedure for using this substitution is outlined in the following problem-solving strategy.

:::note [problem-solving] Integrating Expressions Involving $\sqrt{{a}^{2}+{x}^{2}}$
1. Check to see whether the integral can be evaluated easily by using another method. In some cases, it is more convenient to use an alternative method.
2. Substitute $x=a\;\text{tan}\;\theta$ and $dx=a\;{\text{sec}}^{2}\theta d\theta .$ This substitution yields

$\sqrt{{a}^{2}+{x}^{2}}=\sqrt{{a}^{2}+{(a\;\text{tan}\;\theta )}^{2}}=\sqrt{{a}^{2}(1+{\text{tan}}^{2}\theta )}=\sqrt{{a}^{2}{\text{sec}}^{2}\theta}=|a\;\text{sec}\;\theta |=a\;\text{sec}\;\theta .$ (Since $-\frac{\pi}{2}<\theta <\frac{\pi}{2}$ and $\text{sec}\;\theta >0$ over this interval, $|a\;\text{sec}\;\theta |=a\;\text{sec}\;\theta .)$
3. Simplify the expression.
4. Evaluate the integral using techniques from the section on trigonometric integrals.
5. Use the reference triangle from [ref:CNX_Calc_Figure_07_03_004] to rewrite the result in terms of $x.$ You may also need to use some trigonometric identities and the relationship $\theta ={\text{tan}}^{−1}(\frac{x}{a}).$ (*Note*: The reference triangle is based on the assumption that $x>0;$ however, the trigonometric ratios produced from the reference triangle are the same as the ratios for which $x\le 0.)$
:::

> FIGURE {fig:CNX_Calc_Figure_07_03_004} src=../../media/CNX_Calc_Figure_07_03_004.jpg
> alt: This figure is a right triangle. It has an angle labeled theta. This angle is opposite the vertical side. The hypotenuse is labeled the square root of (a^2+x^2), the vertical leg is labeled x, and the horizontal leg is labeled a. To the left of the triangle is the equation tan(theta) = x/a.
> caption: A reference triangle can be constructed to express the trigonometric functions evaluated at $\theta$ in terms of $x.$

:::example {ex:fs-id1165042089656} Integrating an Expression Involving $\sqrt{{a}^{2}+{x}^{2}}$

:::exercise {fs-id1165042089658} type= 
PROBLEM:
Evaluate ${\displaystyle \int \frac{dx}{\sqrt{1+{x}^{2}}}}$ and check the solution by differentiating.
SOLUTION:
Begin with the substitution $x=\text{tan}\;\theta$ and $dx={\text{sec}}^{2}\theta d\theta .$ Since $\text{tan}\;\theta =x,$ draw the reference triangle in the following figure.

> FIGURE {fig:CNX_Calc_Figure_07_03_005} src=../../media/CNX_Calc_Figure_07_03_005.jpg
> alt: This figure is a right triangle. It has an angle labeled theta. This angle is opposite the vertical side. The hypotenuse is labeled the square root of (1+x^2), the vertical leg is labeled x, and the horizontal leg is labeled 1. To the left of the triangle is the equation tan(theta) = x/1.
> caption: The reference triangle for [ref:fs-id1165042089656].

Thus,

$\begin{array}{rllll}{\displaystyle \int \frac{dx}{\sqrt{1+{x}^{2}}}} & ={\displaystyle \int \frac{{\text{sec}}^{2}\theta}{\text{sec}\;\theta}d\theta} & & & \begin{array}{l}\text{Substitute}\;x=\text{tan}\;\theta \;\text{and}\;dx={\text{sec}}^{2}\theta d\theta .\;\text{This} \\ \text{substitution makes}\;\sqrt{1+{x}^{2}}=\text{sec}\;\theta .\;\text{Simplify.}\end{array} \\ & ={{\displaystyle \int}}^{}\text{sec}\;\theta d\theta & & & \text{Evaluate the integral.} \\ & =\text{ln}|\text{sec}\;\theta +\text{tan}\;\theta |+C & & & \begin{array}{l}\text{Use the reference triangle to express the result} \\ \text{in terms of}\;x.\end{array} \\ & =\text{ln}|\sqrt{1+{x}^{2}}+x|+C. & & & \end{array}$  {eq:fs-id1165040750684}

To check the solution, differentiate:

$\begin{array}{rl}\frac{d}{dx}(\text{ln}|\sqrt{1+{x}^{2}}+x|) & =\frac{1}{\sqrt{1+{x}^{2}}+x}\cdot (\frac{x}{\sqrt{1+{x}^{2}}}+1) \\ & =\frac{1}{\sqrt{1+{x}^{2}}+x}\cdot \frac{x+\sqrt{1+{x}^{2}}}{\sqrt{1+{x}^{2}}} \\ & =\frac{1}{\sqrt{1+{x}^{2}}}.\end{array}$  {eq:fs-id1165040744518}

Since $\sqrt{1+{x}^{2}}+x>0$ for all values of $x,$ we could rewrite $\text{ln}|\sqrt{1+{x}^{2}}+x|+C=\text{ln}(\sqrt{1+{x}^{2}}+x)+C,$ if desired.
:::
:::

:::example {ex:fs-id1165042301696} Evaluating ${\displaystyle \int \frac{dx}{\sqrt{1+{x}^{2}}}}$ Using a Different Substitution

:::exercise {fs-id1165042301698} type= 
PROBLEM:
Use the substitution $x=\text{sinh}\;\theta$ to evaluate ${\displaystyle \int \frac{dx}{\sqrt{1+{x}^{2}}}.}$
SOLUTION:
Because $\text{sinh}\;\theta$ has a range of all real numbers, and $1+{\text{sinh}}^{2}\theta ={\text{cosh}}^{2}\theta ,$ we may also use the substitution $x=\text{sinh}\;\theta$ to evaluate this integral. In this case, $dx=\text{cosh}\;\theta d\theta .$ Consequently,

$\begin{array}{rllll}{\displaystyle \int \frac{dx}{\sqrt{1+{x}^{2}}}} & ={\displaystyle \int \frac{\text{cosh}\;\theta}{\sqrt{1+{\text{sinh}}^{2}\theta}}d\theta} & & & \begin{array}{l}\text{Substitute}\;x=\text{sinh}\;\theta \;\text{and}\;dx=\text{cosh}\;\theta d\theta . \\ \text{Substitute}\;1+{\text{sinh}}^{2}\theta ={\text{cosh}}^{2}\theta .\end{array} \\ & ={\displaystyle \int \frac{\text{cosh}\;\theta}{\sqrt{{\text{cosh}}^{2}\theta}}d\theta} & & & \sqrt{{\text{cosh}}^{2}\theta}=|\text{cosh}\;\theta | \\ & ={\displaystyle \int \frac{\text{cosh}\;\theta}{|\text{cosh}\;\theta |}d\theta} & & & |\text{cosh}\;\theta |=\text{cosh}\;\theta \;\text{since}\;\text{cosh}\;\theta >0\;\text{for all}\;\theta . \\ & ={\displaystyle \int \frac{\text{cosh}\;\theta}{\text{cosh}\;\theta}d\theta} & & & \text{Simplify.} \\ & ={{\displaystyle \int}}^{}1d\theta & & & \text{Evaluate the integral.} \\ & =\theta +C & & & \text{Since}\;x=\text{sinh}\;\theta ,\;\text{we know}\;\theta ={\text{sinh}}^{−1}x. \\ & ={\text{sinh}}^{−1}x+C. & & & \end{array}$  {eq:fs-id1165042004330}

COMMENTARY: Analysis
This answer looks quite different from the answer obtained using the substitution $x=\text{tan}\;\theta .$ To see that the solutions are the same, set $y={\text{sinh}}^{−1}x.$ Thus, $\text{sinh}\;y=x.$ From this equation we obtain:

$\frac{{e}^{y}-{e}^{\text{−}y}}{2}=x.$  {eq:fs-id1165041843069}

After multiplying both sides by $2{e}^{y}$ and rewriting, this equation becomes:

${e}^{2y}-2x{e}^{y}-1=0.$  {eq:fs-id1165042202678}

Use the quadratic equation to solve for ${e}^{y}\text{:}$

${e}^{y}=\frac{2x\pm \sqrt{4{x}^{2}+4}}{2}.$  {eq:fs-id1165040645138}

Simplifying, we have:

${e}^{y}=x\pm \sqrt{{x}^{2}+1}.$  {eq:fs-id1165040644011}

Since $x-\sqrt{{x}^{2}+1}<0,$ it must be the case that ${e}^{y}=x+\sqrt{{x}^{2}+1}.$ Thus,

$y=\text{ln}(x+\sqrt{{x}^{2}+1}).$  {eq:fs-id1165041921710}

Last, we obtain

${\text{sinh}}^{−1}x=\text{ln}(x+\sqrt{{x}^{2}+1}).$  {eq:fs-id1165042092492}

After we make the final observation that, since $x+\sqrt{{x}^{2}+1}>0,$

$\text{ln}(x+\sqrt{{x}^{2}+1})=\text{ln}|\sqrt{1+{x}^{2}}+x|,$  {eq:fs-id1165040713985}

we see that the two different methods produced equivalent solutions.
:::
:::

:::example {ex:fs-id1165040639551} Finding an Arc Length

:::exercise {fs-id1165040639553} type= 
PROBLEM:
Find the length of the curve $y={x}^{2}$ over the interval $[0,\frac{1}{2}].$
SOLUTION:
Because $\frac{dy}{dx}=2x,$ the arc length is given by

${\displaystyle \int_{0}^{1\text{/}2}\sqrt{1+{(2x)}^{2}}\;dx}={\displaystyle \int_{0}^{1\text{/}2}\sqrt{1+4{x}^{2}}\;dx}.$  {eq:fs-id1165040744954}

To evaluate this integral, use the substitution $x=\frac{1}{2}\text{tan}\;\theta$ and $dx=\frac{1}{2}{\text{sec}}^{2}\theta d\theta .$ We also need to change the limits of integration. If $x=0,$ then $\theta =0$ and if $x=\frac{1}{2},$ then $\theta =\frac{\pi}{4}.$ Thus,

$\begin{array}{rllll}{\displaystyle \int_{0}^{1\text{/}2}\sqrt{1+4{x}^{2}}\;dx} & ={\displaystyle \int_{0}^{\pi \text{/}4}\sqrt{1+{\text{tan}}^{2}\theta}\frac{1}{2}{\text{sec}}^{2}\theta d\theta} & & & \begin{array}{l}\text{After substitution,} \\ \sqrt{1+4{x}^{2}}=\text{tan}\;\theta .\;\text{Substitute} \\ 1+{\text{tan}}^{2}\theta ={\text{sec}}^{2}\theta \;\text{and simplify.}\end{array} \\ & =\frac{1}{2}{\displaystyle \int_{0}^{\pi \text{/}4}{\text{sec}}^{3}\theta d\theta} & & & \begin{array}{l}\text{We derived this integral in the} \\ \text{previous section.}\end{array} \\ & =\frac{1}{2}(\frac{1}{2}\text{sec}\;\theta \;\text{tan}\;\theta +\frac{1}{2}\text{ln}|\text{sec}\;\theta +\text{tan}\;\theta |)|{}_{\begin{array}{l} \\ 0\end{array}}^{\begin{array}{l}\pi \text{/}4 \\ \end{array}} & & & \text{Evaluate and simplify.} \\ & =\frac{1}{4}(\sqrt{2}+\text{ln}(\sqrt{2}+1)). & & & \end{array}$  {eq:fs-id1165040665687}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042041808} type= 
PROBLEM:
Rewrite ${{\displaystyle \int}}^{}{x}^{3}\sqrt{{x}^{2}+4}\;dx$ by using a substitution involving $\text{tan}\;\theta .$
SOLUTION:
${{\displaystyle \int}}^{}32\;{\text{tan}}^{3}\theta \;{\text{sec}}^{3}\theta d\theta$
COMMENTARY: Hint
Use $x=2\;\text{tan}\;\theta$ and $dx=2\;{\text{sec}}^{2}\theta d\theta .$
:::
:::

## Integrating Expressions Involving $\sqrt{{x}^{2}-{a}^{2}}$
The domain of the expression $\sqrt{{x}^{2}-{a}^{2}}$ is $(\text{−}\infty ,\text{−}a]\cup [a,\text{+}\infty ).$ Thus, either $x\le \text{−}a$ or $x\ge a.$ Hence, $\frac{x}{a}\le -1$ or $\frac{x}{a}\ge 1.$ Since these intervals correspond to the range of $\text{sec}\;\theta$ on the set $[0,\frac{\pi}{2})\cup (\frac{\pi}{2},\pi ],$ it makes sense to use the substitution $\text{sec}\;\theta =\frac{x}{a}$ or, equivalently, $x=a\;\text{sec}\;\theta ,$ where $0\le \theta <\frac{\pi}{2}$ or $\frac{\pi}{2}<\theta \le \pi .$ The corresponding substitution for $dx$ is $dx=a\;\text{sec}\;\theta \;\text{tan}\;\theta d\theta .$ The procedure for using this substitution is outlined in the following problem-solving strategy.

:::note [problem-solving] Integrals Involving $\sqrt{{x}^{2}-{a}^{2}}$
1. Check to see whether the integral cannot be evaluated using another method. If so, we may wish to consider applying an alternative technique.
2. Substitute $x=a\;\text{sec}\;\theta$ and $dx=a\;\text{sec}\;\theta \;\text{tan}\;\theta d\theta .$ This substitution yields

$\sqrt{{x}^{2}-{a}^{2}}=\sqrt{{(a\;\text{sec}\;\theta )}^{2}-{a}^{2}}=\sqrt{{a}^{2}({\text{sec}}^{2}\theta -1)}=\sqrt{{a}^{2}{\text{tan}}^{2}\theta}=|a\;\text{tan}\;\theta |.$  {eq:fs-id1165041836430}

For $x\ge a,$ $|a\;\text{tan}\;\theta |=a\;\text{tan}\;\theta$ and for $x\le -a,$ $|a\;\text{tan}\;\theta |=\text{−}a\;\text{tan}\;\theta .$
3. Simplify the expression.
4. Evaluate the integral using techniques from the section on trigonometric integrals.
5. Use the reference triangles from [ref:CNX_Calc_Figure_07_03_006] to rewrite the result in terms of $x.$ You may also need to use some trigonometric identities and the relationship $\theta ={\text{sec}}^{−1}(\frac{x}{a}).$ (*Note*: We need both reference triangles, since the values of some of the trigonometric ratios are different depending on whether $x\ge a$ or $x\le \text{−}a.)$
:::

> FIGURE {fig:CNX_Calc_Figure_07_03_006} src=../../media/CNX_Calc_Figure_07_03_006.jpg
> alt: This figure has two right triangles. The first triangle is in the first quadrant of the xy coordinate system and has an angle labeled theta. This angle is opposite the vertical side. The hypotenuse is labeled x, the vertical leg is labeled the square root of (x^2-a^2), and the horizontal leg is labeled a. The horizontal leg is on the x-axis. To the left of the triangle is the equation sec(theta) = x/a, x>a. There are also the equations sin(theta)= the square root of (x^2-a^2)/x, cos(theta) = a/x, and tan(theta) = the square root of (x^2-a^2)/a. The second triangle is in the second quadrant, with the hypotenuse labeled –x. The horizontal leg is labeled –a and is on the negative x-axis. The vertical leg is labeled the square root of (x^2-a^2). To the right of the triangle is the equation sec(theta) = x/a, x<-a. There are also the equations sin(theta)= the negative square root of (x^2-a^2)/x, cos(theta) = a/x, and tan(theta) = the negative square root of (x^2-a^2)/a.
> caption: Use the appropriate reference triangle to express the trigonometric functions evaluated at $\theta$ in terms of $x.$

:::example {ex:fs-id1165041831016} Finding the Area of a Region

:::exercise {fs-id1165041831018} type= 
PROBLEM:
Find the area of the region between the graph of $f(x)=\sqrt{{x}^{2}-9}$ and the *x*-axis over the interval $[3,5].$
SOLUTION:
First, sketch a rough graph of the region described in the problem, as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_07_03_007} src=../../media/CNX_Calc_Figure_07_03_007.jpg
> alt: This figure is the graph of the function f(x) = the square root of (x^2-9). It is an increasing curve that starts on the x-axis at 3 and is in the first quadrant. Under the curve above the x-axis is a shaded region bounded to the right at x = 5.
> caption: Calculating the area of the shaded region requires evaluating an integral with a trigonometric substitution.

We can see that the area is $A={\displaystyle \int_{3}^{5}\sqrt{{x}^{2}-9}\;dx.}$ To evaluate this definite integral, substitute $x=3\;\text{sec}\;\theta$ and $dx=3\;\text{sec}\;\theta \;\text{tan}\;\theta d\theta .$ We must also change the limits of integration. If $x=3,$ then $3=3\;\text{sec}\;\theta$ and hence $\theta =0.$ If $x=5,$ then $\theta ={\text{sec}}^{−1}(\frac{5}{3}).$ After making these substitutions and simplifying, we have

$\begin{array}{rllll}\text{Area} & ={\displaystyle \int_{3}^{5}\sqrt{{x}^{2}-9}\;dx} & & & \\ & ={\displaystyle \int_{0}^{{\text{sec}}^{−1}(5\text{/}3)}9\;{\text{tan}}^{2}\theta \;\text{sec}\;\theta d\theta} & & & \text{Use}\;{\text{tan}}^{2}\theta =1-{\text{sec}}^{2}\theta . \\ & ={\displaystyle \int_{0}^{{\text{sec}}^{−1}(5\text{/}3)}9({\text{sec}}^{2}\theta -1)\text{sec}\;\theta d\theta} & & & \text{Expand.} \\ & ={\displaystyle \int_{0}^{{\text{sec}}^{−1}(5\text{/}3)}9({\text{sec}}^{3}\theta -\text{sec}\;\theta )d\theta} & & & \text{Evaluate the integral.} \\ & =(\frac{9}{2}\text{ln}|\text{sec}\;\theta +\text{tan}\;\theta |+\frac{9}{2}\text{sec}\;\theta \;\text{tan}\;\theta )-9\;\text{ln}|\text{sec}\;\theta +\text{tan}\;\theta ||{}_{\begin{array}{l} \\ 0\end{array}}^{\begin{array}{l}{\text{sec}}^{−1}(5\text{/}3) \\ \end{array}} & & & \text{Simplify.} \\ & =\frac{9}{2}\text{sec}\;\theta \;\text{tan}\;\theta -\frac{9}{2}\text{ln}|\text{sec}\;\theta +\text{tan}\;\theta ||{}_{\begin{array}{l} \\ 0\end{array}}^{\begin{array}{l}{\text{sec}}^{−1}(5\text{/}3) \\ \end{array}} & & & \begin{array}{l}\text{Evaluate. Use}\;\text{sec}({\text{sec}}^{−1}\frac{5}{3})=\frac{5}{3} \\ \text{and}\;\text{tan}({\text{sec}}^{−1}\frac{5}{3})=\frac{4}{3}.\end{array} \\ & =\frac{9}{2}\cdot \frac{5}{3}\cdot \frac{4}{3}-\frac{9}{2}\text{ln}|\frac{5}{3}+\frac{4}{3}|-(\frac{9}{2}\cdot 1\cdot 0-\frac{9}{2}\text{ln}|1+0|) & & & \\ & =10-\frac{9}{2}\text{ln}\;3. & & & \end{array}$  {eq:fs-id1165040687696}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165041757010} type= 
PROBLEM:
Evaluate ${\displaystyle \int \frac{dx}{\sqrt{{x}^{2}-4}}}.$ Assume that $x>2.$
SOLUTION:
$\text{ln}|\frac{x}{2}+\frac{\sqrt{{x}^{2}-4}}{2}|+C$
COMMENTARY: Hint
Substitute $x=2\;\text{sec}\;\theta$ and $dx=2\;\text{sec}\;\theta \;\text{tan}\;\theta d\theta .$
:::
:::

## Key Concepts {section:key-concepts}
- For integrals involving $\sqrt{{a}^{2}-{x}^{2}},$ use the substitution $x=a\;\text{sin}\;\theta$ and $dx=a\;\text{cos}\;\theta d\theta .$
- For integrals involving $\sqrt{{a}^{2}+{x}^{2}},$ use the substitution $x=a\;\text{tan}\;\theta$ and $dx=a\;{\text{sec}}^{2}\theta d\theta .$
- For integrals involving $\sqrt{{x}^{2}-{a}^{2}},$ substitute $x=a\;\text{sec}\;\theta$ and $dx=a\;\text{sec}\;\theta \;\text{tan}\;\theta d\theta .$

##  {section:section-exercises}
Simplify the following expressions by writing each one using a single trigonometric function.

:::exercise {fs-id1165041889374} type= 
PROBLEM:
$4-4\;{\text{sin}}^{2}\theta$
:::

:::exercise {fs-id1165041926600} type= 
PROBLEM:
$9\;{\text{sec}}^{2}\theta -9$
SOLUTION:
$9\;{\text{tan}}^{2}\theta$
:::

:::exercise {fs-id1165041817317} type= 
PROBLEM:
${a}^{2}+{a}^{2}{\text{tan}}^{2}\theta$
:::

:::exercise {fs-id1165041822391} type= 
PROBLEM:
${a}^{2}+{a}^{2}{\text{sinh}}^{2}\theta$
SOLUTION:
${a}^{2}{\text{cosh}}^{2}\theta$
:::

:::exercise {fs-id1165040795173} type= 
PROBLEM:
$16\;{\text{cosh}}^{2}\theta -16$
:::
Use the technique of completing the square to express each trinomial as the square of a binomial or the square of a binomial plus a constant.

:::exercise {fs-id1165042028245} type= 
PROBLEM:
$4{x}^{2}-4x+1$
SOLUTION:
$4{(x-\frac{1}{2})}^{2}$
:::

:::exercise {fs-id1165040775290} type= 
PROBLEM:
$2{x}^{2}-8x+3$
:::

:::exercise {fs-id1165042088594} type= 
PROBLEM:
$\text{−}{x}^{2}-2x+4$
SOLUTION:
$\text{−}{(x+1)}^{2}+5$
:::
Integrate using the method of trigonometric substitution. Express the final answer in terms of the variable.

:::exercise {fs-id1165041887563} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{\sqrt{4-{x}^{2}}}}$
:::

:::exercise {fs-id1165042018113} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{\sqrt{{x}^{2}-{a}^{2}}}}$
SOLUTION:
$\text{ln}|\frac{\sqrt{{x}^{2}-{a}^{2}}+x}{a}|+C$
:::

:::exercise {fs-id1165042137580} type= 
PROBLEM:
${\displaystyle \int \sqrt{4-{x}^{2}}\;dx}$
:::

:::exercise {fs-id1165042311909} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{\sqrt{1+9{x}^{2}}}}$
SOLUTION:
$\frac{1}{3}\text{ln}|\sqrt{9{x}^{2}+1}+3x|+C$
:::

:::exercise {fs-id1165042107314} type= 
PROBLEM:
${\displaystyle \int \frac{{x}^{2}dx}{\sqrt{1-{x}^{2}}}}$
:::

:::exercise {fs-id1165040646186} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{{x}^{2}\sqrt{1-{x}^{2}}}}$
SOLUTION:
$-\frac{\sqrt{1-{x}^{2}}}{x}+C$
:::

:::exercise {fs-id1165040777086} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{{(1+{x}^{2})}^{2}}}$
:::

:::exercise {fs-id1165041826993} type= 
PROBLEM:
${\displaystyle \int \sqrt{{x}^{2}+9}}dx$
SOLUTION:
$9[\frac{x\sqrt{{x}^{2}+9}}{18}+\frac{1}{2}ln|\frac{\sqrt{{x}^{2}+9}}{3}+\frac{x}{3}|]+C$
:::

:::exercise {fs-id1165042029592} type= 
PROBLEM:
${\displaystyle \int \frac{\sqrt{{x}^{2}-25}}{x}dx}$
:::

:::exercise {fs-id1165040775694} type= 
PROBLEM:
${\displaystyle \int \frac{{\theta}^{3}d\theta}{\sqrt{9-{\theta}^{2}}}}$
SOLUTION:
$-\frac{1}{3}\sqrt{9-{\theta}^{2}}(18+{\theta}^{2})+C$
:::

:::exercise {fs-id1165040778476} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{\sqrt{{x}^{6}-{x}^{2}}}}$
:::

:::exercise {fs-id1165040768885} type= 
PROBLEM:
${\displaystyle \int \sqrt{{x}^{6}-{x}^{8}}}dx$
SOLUTION:
$\frac{(−1+{x}^{2})(2+3{x}^{2})\sqrt{{x}^{6}-{x}^{8}}}{15{x}^{3}}+C$
:::

:::exercise {fs-id1165041980058} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{{(1+{x}^{2})}^{3\text{/}2}}}$
:::

:::exercise {fs-id1165041962860} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{{({x}^{2}-9)}^{3\text{/}2}}}$
SOLUTION:
$-\frac{x}{9\sqrt{−9+{x}^{2}}}+C$
:::

:::exercise {fs-id1165041893004} type= 
PROBLEM:
${\displaystyle \int \frac{\sqrt{1+{x}^{2}}\;dx}{x}}$
:::

:::exercise {fs-id1165041932696} type= 
PROBLEM:
${\displaystyle \int \frac{{x}^{2}dx}{\sqrt{{x}^{2}-1}}}$
SOLUTION:
$\frac{1}{2}(\text{ln}|x+\sqrt{{x}^{2}-1}|+x\sqrt{{x}^{2}-1})+C$
:::

:::exercise {fs-id1165040668879} type= 
PROBLEM:
${\displaystyle \int \frac{{x}^{2}dx}{{x}^{2}+4}}$
:::

:::exercise {fs-id1165042247082} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{{x}^{2}\sqrt{{x}^{2}+1}}}$
SOLUTION:
$-\frac{\sqrt{1+{x}^{2}}}{x}+C$
:::

:::exercise {fs-id1165042035538} type= 
PROBLEM:
${\displaystyle \int \frac{{x}^{2}dx}{\sqrt{1+{x}^{2}}}}$
:::

:::exercise {fs-id1165040669735} type= 
PROBLEM:
$\int {(1-{x}^{2})}^{3\text{/}2}dx$
SOLUTION:
$\frac{1}{8}(x(5-2{x}^{2})\sqrt{1-{x}^{2}}+3\;\text{arcsin}\;x)+C$
:::
In the following exercises, use the substitutions $x=\text{sinh}\;\theta ,\text{cosh}\;\theta ,$ or $\text{tanh}\;\theta .$ Express the final answers in terms of the variable *x.*

:::exercise {fs-id1165042235467} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{\sqrt{{x}^{2}-1}}}$
:::

:::exercise {fs-id1165040668400} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{x\sqrt{1-{x}^{2}}}}$
SOLUTION:
$\text{ln}\;x-\text{ln}|1+\sqrt{1-{x}^{2}}|+C$
:::

:::exercise {fs-id1165040763980} type= 
PROBLEM:
${\displaystyle \int \sqrt{{x}^{2}-1}}dx$
:::

:::exercise {fs-id1165040762399} type= 
PROBLEM:
${\displaystyle \int \frac{\sqrt{{x}^{2}-1}}{{x}^{2}}dx}$
SOLUTION:
$-\frac{\sqrt{−1+{x}^{2}}}{x}+\text{ln}|x+\sqrt{−1+{x}^{2}}|+C$
:::

:::exercise {fs-id1165041955009} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{1-{x}^{2}}}$
:::

:::exercise {fs-id1165042033113} type= 
PROBLEM:
${\displaystyle \int \frac{\sqrt{1+{x}^{2}}}{{x}^{2}}dx}$
SOLUTION:
$-\frac{\sqrt{1+{x}^{2}}}{x}+\text{arcsinh}\;x+C$
:::
Use the technique of completing the square to evaluate the following integrals.

:::exercise {fs-id1165042281395} type= 
PROBLEM:
${\displaystyle \int \frac{1}{{x}^{2}-6x}dx}$
:::

:::exercise {fs-id1165042040096} type= 
PROBLEM:
${\displaystyle \int \frac{1}{{x}^{2}+2x+1}dx}$
SOLUTION:
$-\frac{1}{1+x}+C$
:::

:::exercise {fs-id1165040793868} type= 
PROBLEM:
${\displaystyle \int \frac{1}{\sqrt{\text{−}{x}^{2}+2x+8}}dx}$
:::

:::exercise {fs-id1165040730904} type= 
PROBLEM:
${\displaystyle \int \frac{1}{\sqrt{\text{−}{x}^{2}+10x}}dx}$
SOLUTION:
$\text{arcsin}(\frac{x-5}{5})\text{+}C$
:::

:::exercise {fs-id1165042038809} type= 
PROBLEM:
${\displaystyle \int \frac{1}{\sqrt{{x}^{2}+4x-12}}}dx$
:::

:::exercise {fs-id1165040775633} type= 
PROBLEM:
Evaluate the integral without using calculus: ${\displaystyle \int_{−3}^{3}\sqrt{9-{x}^{2}}\;dx.}$
SOLUTION:
$\frac{9\pi}{2};$ area of a semicircle with radius 3
:::

:::exercise {fs-id1165042280347} type= 
PROBLEM:
Find the area enclosed by the ellipse $\frac{{x}^{2}}{4}+\frac{{y}^{2}}{9}=1.$
:::

:::exercise {fs-id1165040693506} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \int \frac{dx}{\sqrt{1-{x}^{2}}}}$ using two different substitutions. First, let $x=\text{cos}\;\theta$ and evaluate using trigonometric substitution. Second, let $x=\text{sin}\;\theta$ and use trigonometric substitution. Are the answers the same?
SOLUTION:
$\text{arcsin}(x)+C$ is the common answer.
:::

:::exercise {fs-id1165042262087} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \int \frac{dx}{x\sqrt{{x}^{2}-1}}}$ using the substitution $x=\text{sec}\;\theta .$ Next, evaluate the same integral using the substitution $x=\text{csc}\;\theta .$ Show that the results are equivalent.
:::

:::exercise {fs-id1165042040456} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \int \frac{x}{{x}^{2}+1}}dx$ using the form ${\displaystyle \int \frac{1}{u}du}.$ Next, evaluate the same integral using $x=\text{tan}\;\theta .$ Are the results the same?
SOLUTION:
$\frac{1}{2}\text{ln}(1+{x}^{2})+C$ is the result using either method.
:::

:::exercise {fs-id1165040796150} type= 
PROBLEM:
State the method of integration you would use to evaluate the integral ${\displaystyle \int x\sqrt{{x}^{2}+1}\;dx}.$ Why did you choose this method?
:::

:::exercise {fs-id1165040720673} type= 
PROBLEM:
State the method of integration you would use to evaluate the integral ${\displaystyle \int {x}^{2}\sqrt{{x}^{2}-1}\;dx}.$ Why did you choose this method?
SOLUTION:
Use trigonometric substitution. Let $x=\text{sec}(\theta ).$
:::

:::exercise {fs-id1165041825199} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{−1}^{1}\frac{x\;dx}{{x}^{2}+1}}$
:::

:::exercise {fs-id1165040795699} type= 
PROBLEM:
Find the length of the arc of the curve over the specified interval: $y=\text{ln}\;x,[1,5].$ Round the answer to three decimal places.
SOLUTION:
4.367
:::

:::exercise {fs-id1165041908973} type= 
PROBLEM:
Find the surface area of the solid generated by revolving the region bounded by the graphs of $y={x}^{2},y=0,x=0,\text{and}\;x=\sqrt{2}$ about the *x*-axis. (Round the answer to three decimal places).
:::

:::exercise {fs-id1165040745060} type= 
PROBLEM:
The region bounded by the graph of $f(x)=\frac{1}{1+{x}^{2}}$ and the *x*-axis between $x=0$ and $x=1$ is revolved about the *x-*axis. Find the volume of the solid that is generated.
SOLUTION:
$\frac{{\pi}^{2}}{8}+\frac{\pi}{4}$
:::
Solve the initial-value problem for *y* as a function of *x*.

:::exercise {fs-id1165042312716} type= 
PROBLEM:
$({x}^{2}+36)\frac{dy}{dx}=1,y(6)=0$
:::

:::exercise {fs-id1165042093493} type= 
PROBLEM:
$(64-{x}^{2})\frac{dy}{dx}=1,y(0)=3$
SOLUTION:
$y=\frac{1}{16}\text{ln}|\frac{x+8}{x-8}|+3$
:::

:::exercise {fs-id1165040643855} type= 
PROBLEM:
Find the area bounded by $y=\frac{2}{\sqrt{64-4{x}^{2}}},x=0,y=0,\text{and}\;x=2.$
:::

:::exercise {fs-id1165042236343} type= 
PROBLEM:
An oil storage tank can be described as the volume generated by revolving the area bounded by $y=\frac{16}{\sqrt{64+{x}^{2}}},x=0,y=0,x=2$ about the *x*-axis. Find the volume of the tank (in cubic meters).
SOLUTION:
24.6 m<sup>3</sup>
:::

:::exercise {fs-id1165042050284} type= 
PROBLEM:
During each cycle, the velocity *v* (in feet per second) of a robotic welding device is given by $v=2t-\frac{14}{4+{t}^{2}},$ where *t* is time in seconds. Find the expression for the displacement *s* (in feet) as a function of *t* if $s=0$ when $t=0.$
:::

:::exercise {fs-id1165041975788} type= 
PROBLEM:
Find the length of the curve $y=\sqrt{16-{x}^{2}}$ between $x=0$ and $x=2.$
SOLUTION:
$\frac{2\pi}{3}$
:::

## Glossary
- {def} **trigonometric substitution**: an integration technique that converts an algebraic integral containing expressions of the form $\sqrt{{a}^{2}-{x}^{2}},$ $\sqrt{{a}^{2}+{x}^{2}},$ or $\sqrt{{x}^{2}-{a}^{2}}$ into a trigonometric integral

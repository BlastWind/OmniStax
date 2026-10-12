# Linear Approximations and Differentials

## Learning Objectives {section:learning-objectives}
- Describe the linear approximation to a function at a point.
- Write the linearization of a given function.
- Draw a graph that illustrates the use of differentials to approximate the change in a quantity.
- Calculate the relative error and percentage error in using a differential approximation.

We have just seen how derivatives allow us to compare related quantities that are changing over time. In this section, we examine another application of derivatives: the ability to approximate functions locally by linear functions. Linear functions are the easiest functions with which to work, so they provide a useful tool for approximating function values. In addition, the ideas presented in this section are generalized later in the text when we study how to approximate functions by higher-degree polynomials [Introduction to Power Series and Functions](module:m53760).

## Linear Approximation of a Function at a Point
Consider a function $f$ that is differentiable at a point $x=a.$ Recall that the tangent line to the graph of $f$ at $a$ is given by the equation

$y=f(a)+f'(a)(x-a).$  {eq:fs-id1165042965164}

For example, consider the function $f(x)=\frac{1}{x}$ at $a=2.$ Since $f$ is differentiable at $x=2$ and $f'(x)=-\frac{1}{{x}^{2}},$ we see that $f'(2)=-\frac{1}{4}.$ Therefore, the tangent line to the graph of $f$ at $a=2$ is given by the equation

$y=\frac{1}{2}-\frac{1}{4}(x-2).$  {eq:fs-id1165043259941}

[ref:CNX_Calc_Figure_04_02_001](a) shows a graph of $f(x)=\frac{1}{x}$ along with the tangent line to $f$ at $x=2.$ Note that for $x$ near 2, the graph of the tangent line is close to the graph of $f.$ As a result, we can use the equation of the tangent line to approximate $f(x)$ for $x$ near 2. For example, if $x=2.1,$ the $y$ value of the corresponding point on the tangent line is

$y=\frac{1}{2}-\frac{1}{4}(2.1-2)=0.475.$  {eq:fs-id1165043429657}

The actual value of $f(2.1)$ is given by

$f(2.1)=\frac{1}{2.1}\approx 0.47619.$  {eq:fs-id1165043306568}

Therefore, the tangent line gives us a fairly good approximation of $f(2.1)$ ([ref:CNX_Calc_Figure_04_02_001](b)). However, note that for values of $x$ far from 2, the equation of the tangent line does not give us a good approximation. For example, if $x=10,$ the $y$-value of the corresponding point on the tangent line is

$y=\frac{1}{2}-\frac{1}{4}(10-2)=\frac{1}{2}-2=−1.5,$  {eq:fs-id1165042634904}

whereas the value of the function at $x=10$ is $f(10)=0.1.$

> FIGURE {fig:CNX_Calc_Figure_04_02_001} src=../../media/CNX_Calc_Figure_04_02_006.jpg
> alt: This figure has two parts a and b. In figure a, the line f(x) = 1/x is shown with its tangent line at x = 2. In figure b, the area near the tangent point is blown up to show how good of an approximation the tangent is near x = 2.
> caption: (a) The tangent line to $f(x)=1\text{/}x$ at $x=2$ provides a good approximation to $f$ for $x$ near 2. (b) At $x=2.1,$ the value of $y$ on the tangent line to $f(x)=1\text{/}x$ is 0.475. The actual value of $f(2.1)$ is $1\text{/}2.1,$ which is approximately 0.47619.

In general, for a differentiable function $f,$ the equation of the tangent line to $f$ at $x=a$ can be used to approximate $f(x)$ for $x$ near $a.$ Therefore, we can write

$f(x)\approx f(a)+f'(a)(x-a)\;\text{for}\;x\;\text{near}\;a.$  {eq:fs-id1165042333160}

We call the linear function

$$ L(x)=f(a)+f'(a)(x-a) $$  {eq:fs-id1165043306789}

the {term:linear approximation}, or {term:tangent line approximation}, of $f$ at $x=a.$ This function $L$ is also known as the {term:linearization} of $f$ at $x=a.$
To show how useful the linear approximation can be, we look at how to find the linear approximation for $f(x)=\sqrt{x}$ at $x=9.$

:::example {ex:fs-id1165043051419} Linear Approximation of $\sqrt{x}$

:::exercise {fs-id1165043094190} type= 
PROBLEM:
Find the linear approximation of $f(x)=\sqrt{x}$ at $x=9$ and use the approximation to estimate $\sqrt{9.1}.$
SOLUTION:
Since we are looking for the linear approximation at $x=9,$ using [ref:fs-id1165043306789] we know the linear approximation is given by

$L(x)=f(9)+f'(9)(x-9).$  {eq:fs-id1165042880023}

We need to find $f(9)$ and $f'(9).$

$\begin{array}{rll}f(x)=\sqrt{x} & ⇒ & f(9)=\sqrt{9}=3 \\ f'(x)=\frac{1}{2\sqrt{x}} & ⇒ & f'(9)=\frac{1}{2\sqrt{9}}=\frac{1}{6}\end{array}$  {eq:fs-id1165043001328}

Therefore, the linear approximation is given by [ref:CNX_Calc_Figure_04_02_002].

$L(x)=3+\frac{1}{6}(x-9)$  {eq:fs-id1165042370716}

Using the linear approximation, we can estimate $\sqrt{9.1}$ by writing

$\sqrt{9.1}=f(9.1)\approx L(9.1)=3+\frac{1}{6}(9.1-9)\approx 3.0167.$  {eq:fs-id1165042922906}

> FIGURE {fig:CNX_Calc_Figure_04_02_002} src=../../media/CNX_Calc_Figure_04_02_002.jpg
> alt: The function f(x) = the square root of x is shown with its tangent at (9, 3). The tangent appears to be a very good approximation from x = 6 to x = 12.
> caption: The local linear approximation to $f(x)=\sqrt{x}$ at $x=9$ provides an approximation to $f$ for $x$ near 9.

COMMENTARY: Analysis
Using a calculator, the value of $\sqrt{9.1}$ to four decimal places is 3.0166. The value given by the linear approximation, 3.0167, is very close to the value obtained with a calculator, so it appears that using this linear approximation is a good way to estimate $\sqrt{x},$ at least for $x$ near $9.$ At the same time, it may seem odd to use a linear approximation when we can just push a few buttons on a calculator to evaluate $\sqrt{9.1}.$ However, how does the calculator evaluate $\sqrt{9.1}?$ The calculator uses an approximation! In fact, calculators and computers use approximations all the time to evaluate mathematical expressions; they just use higher-degree approximations.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043051505} type= 
PROBLEM:
Find the local linear approximation to $f(x)=\sqrt[3]{x}$ at $x=8.$ Use it to approximate $\sqrt[3]{8.1}$ to five decimal places.
SOLUTION:
$L(x)=2+\frac{1}{12}(x-8);$ 2.00833
COMMENTARY: Hint
$L(x)=f(a)+f'(a)(x-a)$
:::
:::

:::example {ex:fs-id1165043100241} Linear Approximation of $\text{sin}\;x$

:::exercise {fs-id1165042979291} type= 
PROBLEM:
Find the linear approximation of $f(x)=\text{sin}\;x$ at $x=\frac{\pi}{3}$ and use it to approximate $\text{sin}(62\text{°}).$
SOLUTION:
First we note that since $\frac{\pi}{3}$ rad is equivalent to $60\text{°},$ using the linear approximation at $x=\pi \text{/}3$ seems reasonable. The linear approximation is given by

$L(x)=f(\frac{\pi}{3})+f'(\frac{\pi}{3})(x-\frac{\pi}{3}).$  {eq:fs-id1165043090235}

We see that

$\begin{array}{rll}f(x)=\text{sin}\;x & ⇒ & f(\frac{\pi}{3})=\text{sin}(\frac{\pi}{3})=\frac{\sqrt{3}}{2} \\ f'(x)=\text{cos}\;x & ⇒ & f'(\frac{\pi}{3})=\text{cos}(\frac{\pi}{3})=\frac{1}{2}\end{array}$  {eq:fs-id1165043285221}

Therefore, the linear approximation of $f$ at $x=\pi \text{/}3$ is given by [ref:CNX_Calc_Figure_04_02_003].

$L(x)=\frac{\sqrt{3}}{2}+\frac{1}{2}(x-\frac{\pi}{3})$  {eq:fs-id1165042332414}

To estimate $\text{sin}(62\text{°})$ using $L,$ we must first convert $62\text{°}$ to radians. We have $62\text{°}=\frac{62\pi}{180}$ radians, so the estimate for $\text{sin}(62\text{°})$ is given by

$\text{sin}(62\text{°})=f(\frac{62\pi}{180})\approx L(\frac{62\pi}{180})=\frac{\sqrt{3}}{2}+\frac{1}{2}(\frac{62\pi}{180}-\frac{\pi}{3})=\frac{\sqrt{3}}{2}+\frac{1}{2}(\frac{2\pi}{180})=\frac{\sqrt{3}}{2}+\frac{\pi}{180}\approx 0.88348.$  {eq:fs-id1165043013778}

> FIGURE {fig:CNX_Calc_Figure_04_02_003} src=../../media/CNX_Calc_Figure_04_02_003.jpg
> alt: The function f(x) = sin x is shown with its tangent at (π/3, square root of 3 / 2). The tangent appears to be a very good approximation for x near π / 3.
> caption: The linear approximation to $f(x)=\text{sin}\;x$ at $x=\pi \text{/}3$ provides an approximation to $\text{sin}\;x$ for $x$ near $\pi \text{/}3.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043039141} type= 
PROBLEM:
Find the linear approximation for $f(x)=\text{cos}\;x$ at $x=\frac{\pi}{2}.$
SOLUTION:
$L(x)=\text{−}x+\frac{\pi}{2}$
COMMENTARY: Hint
$L(x)=f(a)+f'(a)(x-a)$
:::
:::
Linear approximations may be used in estimating roots and powers. In the next example, we find the linear approximation for $f(x)={(1+x)}^{n}$ at $x=0,$ which can be used to estimate roots and powers for real numbers near 1. The same idea can be extended to a function of the form $f(x)={(m+x)}^{n}$ to estimate roots and powers near a different number $m.$

:::example {ex:fs-id1165043161464} Approximating Roots and Powers

:::exercise {fs-id1165042354636} type= 
PROBLEM:
Find the linear approximation of $f(x)={(1+x)}^{n}$ at $x=0.$ Use this approximation to estimate ${(1.01)}^{3}.$
SOLUTION:
The linear approximation at $x=0$ is given by

$L(x)=f(0)+f'(0)(x-0).$  {eq:fs-id1165042710456}

Because

$\begin{array}{rll}f(x)={(1+x)}^{n} & ⇒ & f(0)=1 \\ f'(x)=n{(1+x)}^{n-1} & ⇒ & f'(0)=n,\end{array}$  {eq:fs-id1165042369140}

the linear approximation is given by [ref:CNX_Calc_Figure_04_02_004](a).

$L(x)=1+n(x-0)=1+nx$  {eq:fs-id1165042925702}

We can approximate ${(1.01)}^{3}$ by evaluating $L(0.01)$ when $n=3.$ We conclude that

${(1.01)}^{3}=f(1.01)\approx L(0.01)=1+3(0.01)=1.03.$  {eq:fs-id1165042966729}

> FIGURE {fig:CNX_Calc_Figure_04_02_004} src=../../media/CNX_Calc_Figure_04_02_007.jpg
> alt: This figure has two parts a and b. In figure a, the line f(x) = (1 + x)3 is shown with its tangent line at (0, 1). In figure b, the area near the tangent point is blown up to show how good of an approximation the tangent is near (0, 1).
> caption: (a) The linear approximation of $f(x)$ at $x=0$ is $L(x).$ (b) The actual value of ${1.01}^{3}$ is 1.030301. The linear approximation of $f(x)$ at $x=0$ estimates ${1.01}^{3}$ to be 1.03.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043192672} type= 
PROBLEM:
Find the linear approximation of $f(x)={(1+x)}^{4}$ at $x=0$ without using the result from the preceding example.
SOLUTION:
$L(x)=1+4x$
COMMENTARY: Hint
$f'(x)=4{(1+x)}^{3}$
:::
:::

## Differentials
We have seen that linear approximations can be used to estimate function values. They can also be used to estimate the amount a function value changes as a result of a small change in the input. To discuss this more formally, we define a related concept: {term:differentials}. Differentials provide us with a way of estimating the amount a function changes as a result of a small change in input values.
When we first looked at derivatives, we used the Leibniz notation $dy\text{/}dx$ to represent the derivative of $y$ with respect to $x.$ Although we used the expressions *dy* and *dx* in this notation, they did not have meaning on their own. Here we see a meaning to the expressions *dy* and *dx*. Suppose $y=f(x)$ is a differentiable function. Let *dx* be an independent variable that can be assigned any nonzero real number, and define the dependent variable $dy$ by

$$ dy=f'(x)dx. $$  {eq:fs-id1165042369661}

It is important to notice that $dy$ is a function of both $x$ and $dx.$ The expressions *dy* and *dx* are called *differentials*. We can divide both sides of [ref:fs-id1165042369661] by $dx,$ which yields

$$ \frac{dy}{dx}=f'(x). $$  {eq:fs-id1165042610583}

This is the familiar expression we have used to denote a derivative. [ref:fs-id1165042369661] is known as the {term:differential form} of [ref:fs-id1165042610583].

:::example {ex:fs-id1165043166548} Computing differentials

:::exercise {fs-id1165043272991} type= 
PROBLEM:
For each of the following functions, find *dy* and evaluate when $x=3$ and $dx=0.1.$
a. $y={x}^{2}+2x$
b. $y=\text{cos}\;x$
SOLUTION:
The key step is calculating the derivative. When we have that, we can obtain *dy* directly.
a. Since $f(x)={x}^{2}+2x,$ we know $f'(x)=2x+2,$ and therefore

$dy=(2x+2)dx.$  {eq:fs-id1165043352057}

When $x=3$ and $dx=0.1,$

$dy=(2\cdot 3+2)(0.1)=0.8.$  {eq:fs-id1165043425324}

b. Since $f(x)=\text{cos}\;x,$ $f'(x)=\text{−}\text{sin}(x).$ This gives us

$dy=\text{−}\text{sin}\;x\;dx.$  {eq:fs-id1165042330818}

When $x=3$ and $dx=0.1,$

$dy=\text{−}\text{sin}(3)(0.1)=−0.1\;\text{sin}(3).$  {eq:fs-id1165042604734}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043395024} type= 
PROBLEM:
For $y={e}^{{x}^{2}},$ find $dy.$
SOLUTION:
$dy=2x{e}^{{x}^{2}}dx$
COMMENTARY: Hint
$dy=f'(x)dx$
:::
:::
We now connect differentials to linear approximations. Differentials can be used to estimate the change in the value of a function resulting from a small change in input values. Consider a function $f$ that is differentiable at point $a.$ Suppose the input $x$ changes by a small amount. We are interested in how much the output $y$ changes. If $x$ changes from $a$ to $a+dx,$ then the change in $x$ is $dx$ (also denoted $\text{Δ}x),$ and the change in $y$ is given by

$\text{Δ}y=f(a+dx)-f(a).$  {eq:fs-id1165043089453}

Instead of calculating the exact change in $y,$ however, it is often easier to approximate the change in $y$ by using a linear approximation. For $x$ near $a,$ $f(x)$ can be approximated by the linear approximation

$L(x)=f(a)+f'(a)(x-a).$  {eq:fs-id1165043318352}

Therefore, if $dx$ is small,

$f(a+dx)\approx L(a+dx)=f(a)+f'(a)(a+dx-a).$  {eq:fs-id1165042925818}

That is,

$f(a+dx)-f(a)\approx L(a+dx)-f(a)=f'(a)dx.$  {eq:fs-id1165042528283}

In other words, the actual change in the function $f$ if $x$ increases from $a$ to $a+dx$ is approximately the difference between $L(a+dx)$ and $f(a),$ where $L(x)$ is the linear approximation of $f$ at $a.$ By definition of $L(x),$ this difference is equal to $f'(a)dx.$ In summary,

$\text{Δ}y=f(a+dx)-f(a)\approx L(a+dx)-f(a)=f'(a)dx=dy.$  {eq:fs-id1165042367953}

Therefore, we can use the differential $dy=f'(a)dx$ to approximate the change in $y$ if $x$ increases from $x=a$ to $x=a+dx.$ We can see this in the following graph.

> FIGURE {fig:CNX_Calc_Figure_04_02_005} src=../../media/CNX_Calc_Figure_04_02_005.jpg
> alt: A function y = f(x) is shown along with its tangent line at (a, f(a)). The tangent line is denoted L(x). The x axis is marked with a and a + dx, with a dashed line showing the distance between a and a + dx as dx. The points (a + dx, f(a + dx)) and (a + dx, L(a + dx)) are marked on the curves for y = f(x) and y = L(x), respectively. The distance between f(a) and L(a + dx) is marked as dy = f’(a) dx, and the distance between f(a) and f(a + dx) is marked as Δy = f(a + dx) – f(a).
> caption: The differential $dy=f'(a)dx$ is used to approximate the actual change in $y$ if $x$ increases from $a$ to $a+dx.$

We now take a look at how to use differentials to approximate the change in the value of the function that results from a small change in the value of the input. Note the calculation with differentials is much simpler than calculating actual values of functions and the result is very close to what we would obtain with the more exact calculation.

:::example {ex:fs-id1165043349128} Approximating Change with Differentials

:::exercise {fs-id1165043349130} type= 
PROBLEM:
Let $y={x}^{2}+2x.$ Compute $\text{Δ}y$ and *dy* at $x=3$ if $dx=0.1.$
SOLUTION:
The actual change in $y$ if $x$ changes from $x=3$ to $x=3.1$ is given by

$\text{Δ}y=f(3.1)-f(3)=[{(3.1)}^{2}+2(3.1)]-[{3}^{2}+2(3)]=0.81.$  {eq:fs-id1165042713824}

The approximate change in $y$ is given by $dy=f'(3)dx.$ Since $f'(x)=2x+2,$ we have

$dy=f'(3)dx=(2(3)+2)(0.1)=0.8.$  {eq:fs-id1165042326840}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042637203} type= 
PROBLEM:
For $y={x}^{2}+2x,$ find $\text{Δ}y$ and $dy$ at $x=3$ if $dx=0.2.$
SOLUTION:
$dy=1.6,$ $\text{Δ}y=1.64$
COMMENTARY: Hint
$dy=f'(3)dx,$ $\text{Δ}y=f(3.2)-f(3)$
:::
:::

## Calculating the Amount of Error
Any type of measurement is prone to a certain amount of error. In many applications, certain quantities are calculated based on measurements. For example, the area of a circle is calculated by measuring the radius of the circle. An error in the measurement of the radius leads to an error in the computed value of the area. Here we examine this type of error and study how differentials can be used to estimate the error.
Consider a function $f$ with an input that is a measured quantity. Suppose the exact value of the measured quantity is $a,$ but the measured value is $a+dx.$ We say the measurement error is *dx* (or $\text{Δ}x).$ As a result, an error occurs in the calculated quantity $f(x).$ This type of error is known as a {term:propagated error} and is given by

$\text{Δ}y=f(a+dx)-f(a).$  {eq:fs-id1165043257818}

Since all measurements are prone to some degree of error, we do not know the exact value of a measured quantity, so we cannot calculate the propagated error exactly. However, given an estimate of the accuracy of a measurement, we can use differentials to approximate the propagated error $\text{Δ}y.$ Specifically, if $f$ is a differentiable function at $a,$ the propagated error is

$\text{Δ}y\approx dy=f'(a)dx.$  {eq:fs-id1165042328497}

Unfortunately, we do not know the exact value $a.$ However, we can use the measured value $a+dx,$ and estimate

$\text{Δ}y\approx dy\approx f'(a+dx)dx.$  {eq:fs-id1165042321245}

In the next example, we look at how differentials can be used to estimate the error in calculating the volume of a box if we assume the measurement of the side length is made with a certain amount of accuracy.

:::example {ex:fs-id1165043397423} Volume of a Cube

:::exercise {fs-id1165043397425} type= 
PROBLEM:
Suppose the side length of a cube is measured to be 5 cm with an accuracy of 0.1 cm.
a. Use differentials to estimate the error in the computed volume of the cube.
b. Compute the volume of the cube if the side length is (i) 4.9 cm and (ii) 5.1 cm to compare the estimated error with the actual potential error.
SOLUTION:
a. The measurement of the side length is accurate to within $\text{±}0.1$ cm. Therefore,

$−0.1\le dx\le 0.1.$  {eq:fs-id1165043087816}

The volume of a cube is given by $V={x}^{3},$ which leads to

$dV=3{x}^{2}dx.$  {eq:fs-id1165042948205}

Using the measured side length of 5 cm, we can estimate that

$−3{(5)}^{2}(0.1)\le dV\le 3{(5)}^{2}(0.1).$  {eq:fs-id1165043391588}

Therefore,

$−7.5\le dV\le 7.5.$  {eq:fs-id1165042965823}

b. If the side length is actually 4.9 cm, then the volume of the cube is

$V(4.9)={(4.9)}^{3}=117.649{\;\text{cm}}^{3}.$  {eq:fs-id1165042931789}

If the side length is actually 5.1 cm, then the volume of the cube is

$V(5.1)={(5.1)}^{3}=132.651{\;\text{cm}}^{3}.$  {eq:fs-id1165042901307}

Therefore, the actual volume of the cube is between 117.649 and 132.651. Since the side length is measured to be 5 cm, the computed volume is $V(5)={5}^{3}=125.$ Therefore, the error in the computed volume is

$117.649-125\le \text{Δ}V\le 132.651-125.$  {eq:fs-id1165042322167}

That is,

$−7.351\le \text{Δ}V\le 7.651.$  {eq:fs-id1165043425273}

We see the estimated error $dV$ is relatively close to the actual potential error in the computed volume.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042708698} type= 
PROBLEM:
Estimate the error in the computed volume of a cube if the side length is measured to be 6 cm with an accuracy of 0.2 cm.
SOLUTION:
The volume measurement is accurate to within $21.6{\;\text{cm}}^{3}.$
COMMENTARY: Hint
$dV=3{x}^{2}dx$
:::
:::
The measurement error *dx* $(\text{=Δ}x)$ and the propagated error $\text{Δ}y$ are absolute errors. We are typically interested in the size of an error relative to the size of the quantity being measured or calculated. Given an absolute error $\text{Δ}q$ for a particular quantity, we define the {term:relative error} as $\frac{\text{Δ}q}{q},$ where $q$ is the actual value of the quantity. The {term:percentage error} is the relative error expressed as a percentage. For example, if we measure the height of a ladder to be 63 in. when the actual height is 62 in., the absolute error is 1 in. but the relative error is $\frac{1}{62}=0.016,$ or $1.6\text{\%}.$ By comparison, if we measure the width of a piece of cardboard to be 8.25 in. when the actual width is 8 in., our absolute error is $\frac{1}{4}$ in., whereas the relative error is $\frac{0.25}{8}=\frac{1}{32},$ or $3.1\text{\%}.$ Therefore, the percentage error in the measurement of the cardboard is larger, even though 0.25 in. is less than 1 in.

:::example {ex:fs-id1165043087612} Relative and Percentage Error

:::exercise {fs-id1165043087614} type= 
PROBLEM:
An astronaut using a camera measures the radius of Earth as 4000 mi with an error of $\text{±}80$ mi. Let’s use differentials to estimate the relative and percentage error of using this radius measurement to calculate the volume of Earth, assuming the planet is a perfect sphere.
SOLUTION:
If the measurement of the radius is accurate to within $\text{±}80,$ we have

$−80\le dr\le 80.$  {eq:fs-id1165042980337}

Since the volume of a sphere is given by $V=(\frac{4}{3})\pi {r}^{3},$ we have

$dV=4\pi {r}^{2}dr.$  {eq:fs-id1165042960149}

Using the measured radius of 4000 mi, we can estimate

$−4\pi {(4000)}^{2}(80)\le dV\le 4\pi {(4000)}^{2}(80).$  {eq:fs-id1165043166554}

To estimate the relative error, consider $\frac{dV}{V}.$ Since we do not know the exact value of the volume $V,$ use the measured radius $r=4000\;\text{mi}$ to estimate $V.$ We obtain $V\approx (\frac{4}{3})\pi {(4000)}^{3}.$ Therefore the relative error satisfies

$\frac{−4\pi {(4000)}^{2}(80)}{4\pi {(4000)}^{3}\text{/}3}\le \frac{dV}{V}\le \frac{4\pi {(4000)}^{2}(80)}{4\pi {(4000)}^{3}\text{/}3},$  {eq:fs-id1165043380581}

which simplifies to

$−0.06\le \frac{dV}{V}\le 0.06.$  {eq:fs-id1165042513675}

The relative error is 0.06 and the percentage error is $6\text{\%}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043315343} type= 
PROBLEM:
Determine the percentage error if the radius of Earth is measured to be 3950 mi with an error of $\text{±}100$ mi.
SOLUTION:
7.6%
COMMENTARY: Hint
Use the fact that $dV=4\pi {r}^{2}dr$ to find $dV\text{/}V.$
:::
:::

## Key Concepts {section:key-concepts}
- A differentiable function $y=f(x)$ can be approximated at $a$ by the linear function

$L(x)=f(a)+f'(a)(x-a).$  {eq:fs-id1165042638768}

- For a function $y=f(x),$ if $x$ changes from $a$ to $a+dx,$ then

$dy=f'(x)dx$  {eq:fs-id1165043309024}

is an approximation for the change in $y.$ The actual change in $y$ is

$\text{Δ}y=f(a+dx)-f(a).$  {eq:fs-id1165042514151}

- A measurement error $dx$ can lead to an error in a calculated quantity $f(x).$ The error in the calculated quantity is known as the *propagated error*. The propagated error can be estimated by

$dy\approx f'(x)dx.$  {eq:fs-id1165042582705}

- To estimate the relative error of a particular quantity $q,$ we estimate $\frac{\text{Δ}q}{q}.$

## Key Equations {section:key-equations}

> TABLE {tab:eip-496} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Linear approximation** | $L(x)=f(a)+f'(a)(x-a)$ |
| **A differential** | $dy=f'(x)dx.$ |

##  {section:section-exercises}

:::exercise {fs-id1165043427582} type= 
PROBLEM:
What is the linear approximation for any generic linear function $y=mx+b?$
:::

:::exercise {fs-id1165043337881} type= 
PROBLEM:
Determine the necessary conditions such that the linear approximation function is constant. Use a graph to prove your result.
SOLUTION:
${f}^{'}(a)=0$
:::

:::exercise {fs-id1165042956294} type= 
PROBLEM:
Explain why the linear approximation becomes less accurate as you increase the distance between $x$ and $a.$ Use a graph to prove your argument.
:::

:::exercise {fs-id1165042517836} type= 
PROBLEM:
When is the linear approximation exact?
SOLUTION:
The linear approximation exact when $y=f(x)$ is linear or constant.
:::
For the following exercises, find the linear approximation $L(x)$ to $y=f(x)$ near $x=a$ for the function.

:::exercise {fs-id1165042390137} type= 
PROBLEM:
$f(x)=x+{x}^{4},a=0$
:::

:::exercise {fs-id1165043187591} type= 
PROBLEM:
$f(x)=\frac{1}{x},a=2$
SOLUTION:
$L(x)=\frac{1}{2}-\frac{1}{4}(x-2)$
:::

:::exercise {fs-id1165042709000} type= 
PROBLEM:
$f(x)=\text{tan}\;x,a=\frac{\pi}{4}$
:::

:::exercise {fs-id1165043354593} type= 
PROBLEM:
$f(x)=\text{sin}\;x,a=\frac{\pi}{2}$
SOLUTION:
$L(x)=1$
:::

:::exercise {fs-id1165043309898} type= 
PROBLEM:
$f(x)=x\;\text{sin}\;x,a=2\pi$
:::

:::exercise {fs-id1165042479002} type= 
PROBLEM:
$f(x)={\text{sin}}^{2}x,a=0$
SOLUTION:
$L(x)=0$
:::
For the following exercises, compute the values given within 0.01 by deciding on the appropriate $f(x)$ and $a,$ and evaluating $L(x)=f(a)+{f}^{'}(a)(x-a).$ Check your answer using a calculator.

:::exercise {fs-id1165043342062} type= 
PROBLEM:
**[T]** ${(2.001)}^{6}$
:::

:::exercise {fs-id1165042555827} type= 
PROBLEM:
**[T]** $\text{sin}(0.02)$
SOLUTION:
0.02
:::

:::exercise {fs-id1165042582997} type= 
PROBLEM:
**[T]** $\text{cos}(0.03)$
:::

:::exercise {fs-id1165042562934} type= 
PROBLEM:
**[T]** ${(15.99)}^{1\text{/}4}$
SOLUTION:
$1.9996875$
:::

:::exercise {fs-id1165042516449} type= 
PROBLEM:
**[T]** $\frac{1}{0.98}$
:::

:::exercise {fs-id1165042516429} type= 
PROBLEM:
**[T]** $\text{sin}(3.14)$
SOLUTION:
$0.001593$
:::
For the following exercises, determine the appropriate $f(x)$ and $a,$ and evaluate $L(x)=f(a)+{f}^{'}(a)(x-a).$ Calculate the numerical error in the linear approximations that follow.

:::exercise {fs-id1165043315361} type= 
PROBLEM:
**[T]** ${(1.01)}^{3}$
:::

:::exercise {fs-id1165042563786} type= 
PROBLEM:
**[T]** $\text{cos}(0.01)$
SOLUTION:
$1;$ error, $~0.00005$
:::

:::exercise {fs-id1165043372988} type= 
PROBLEM:
**[T]** ${(\text{sin}(0.01))}^{2}$
:::

:::exercise {fs-id1165042621397} type= 
PROBLEM:
**[T]** ${(1.01)}^{−3}$
SOLUTION:
$0.97;$ error, $~0.0006$
:::

:::exercise {fs-id1165042639968} type= 
PROBLEM:
**[T]** ${(1+\frac{1}{10})}^{10}$
:::

:::exercise {fs-id1165043309945} type= 
PROBLEM:
**[T]** $\sqrt{8.99}$
SOLUTION:
$3-\frac{1}{600};$ error, $~4.632\;\times \;{10}^{−7}$
:::
For the following exercises, find the differential of the function.

:::exercise {fs-id1165042559103} type= 
PROBLEM:
$y=3{x}^{4}+{x}^{2}-2x+1$
:::

:::exercise {fs-id1165043423603} type= 
PROBLEM:
$y=x\;\text{cos}\;x$
SOLUTION:
$dy=(\text{cos}\;x-x\;\text{sin}\;x)dx$
:::

:::exercise {fs-id1165042520660} type= 
PROBLEM:
$y=\sqrt{1+x}$
:::

:::exercise {fs-id1165042476060} type= 
PROBLEM:
$y=\frac{{x}^{2}+2}{x-1}$
SOLUTION:
$dy=(\frac{{x}^{2}-2x-2}{{(x-1)}^{2}})dx$
:::
For the following exercises, find the differential and evaluate for the given $x$ and $dx.$

:::exercise {fs-id1165043099120} type= 
PROBLEM:
$y=3{x}^{2}-x+6,$ $x=2,$ $dx=0.1$
:::

:::exercise {fs-id1165043373007} type= 
PROBLEM:
$y=\frac{1}{x+1},$ $x=1,$ $dx=0.25$
SOLUTION:
$dy=-\frac{1}{{(x+1)}^{2}}dx,$ $-\frac{1}{16}$
:::

:::exercise {fs-id1165042960014} type= 
PROBLEM:
$y=\text{tan}\;x,$ $x=0,$ $dx=\frac{\pi}{10}$
:::

:::exercise {fs-id1165043423569} type= 
PROBLEM:
$y=\frac{3{x}^{2}+2}{\sqrt{x+1}},$ $x=0,$ $dx=0.1$
SOLUTION:
$dy=\frac{9{x}^{2}+12x-2}{2{(x+1)}^{3\text{/}2}}dx,$ $−0.1$
:::

:::exercise {fs-id1165042705848} type= 
PROBLEM:
$y=\frac{\text{sin}(2x)}{x},$ $x=\pi ,$ $dx=0.25$
:::

:::exercise {fs-id1165043197192} type= 
PROBLEM:
$y={x}^{3}+2x+\frac{1}{x},$ $x=1,$ $dx=0.05$
SOLUTION:
$dy=(3{x}^{2}+2-\frac{1}{{x}^{2}})dx,$ $0.2$
:::
For the following exercises, find the change in volume $dV$ or in surface area $dA.$

:::exercise {fs-id1165043394460} type= 
PROBLEM:
$dV$ if the sides of a cube change from 10 to 10.1.
:::

:::exercise {fs-id1165043308223} type= 
PROBLEM:
$dA$ if the sides of a cube change from $x$ to $x+dx.$
SOLUTION:
$12x\;dx$
:::

:::exercise {fs-id1165043253928} type= 
PROBLEM:
$dA$ if the radius of a sphere changes from $r$ by $dr.$
:::

:::exercise {fs-id1165043353383} type= 
PROBLEM:
$dV$ if the radius of a sphere changes from $r$ by $dr.$
SOLUTION:
$4\pi {r}^{2}dr$
:::

:::exercise {fs-id1165042327314} type= 
PROBLEM:
$dV$ if a circular cylinder with $r=2$ changes height from 3 cm to $3.05\;\text{cm}.$
:::

:::exercise {fs-id1165042550550} type= 
PROBLEM:
$dV$ if a circular cylinder of height 3 changes from $r=2$ to $r=1.9\;\text{cm}.$
SOLUTION:
$−1.2\pi {\;\text{cm}}^{3}$
:::

:::exercise {fs-id1165043348660} type= 
PROBLEM:
A spherical golf ball is measured to have a radius of $5\;\text{mm},$ with a possible measurement error of $0.1\;\text{mm}.$ What is the possible change in volume?
:::

:::exercise {fs-id1165042514755} type= 
PROBLEM:
A pool has a rectangular base of 10 ft by 20 ft and a depth of 6 ft. What is the change in volume if you only fill it up to 5.5 ft?
SOLUTION:
$−100$ ft<sup>3</sup>
:::

:::exercise {fs-id1165043424666} type= 
PROBLEM:
An ice cream cone has height 4 in. and radius 1 in. If the cone is 0.1 in. thick, what is the difference between the volume of the cone, including the shell, and the volume of the ice cream you can fit inside the shell?
:::
For the following exercises, confirm the approximations by using the linear approximation at $x=0.$

:::exercise {fs-id1165042514174} type= 
PROBLEM:
$\sqrt{1-x}\approx 1-\frac{1}{2}x$
:::

:::exercise {fs-id1165043430031} type= 
PROBLEM:
$\frac{1}{\sqrt{1-{x}^{2}}}\approx 1$
:::

:::exercise {fs-id1165043180116} type= 
PROBLEM:
$\sqrt{{c}^{2}+{x}^{2}}\approx c$
:::

## Glossary
- {def} **differential**: the differential $dx$ is an independent variable that can be assigned any nonzero real number; the differential $dy$ is defined to be $dy=f'(x)dx$
- {def} **differential form**: given a differentiable function $y=f'(x),$ the equation $dy=f'(x)dx$ is the differential form of the derivative of $y$ with respect to $x$
- {def} **linear approximation**: the linear function $L(x)=f(a)+f'(a)(x-a)$ is the linear approximation of $f$ at $x=a$
- {def} **percentage error**: the relative error expressed as a percentage
- {def} **propagated error**: the error that results in a calculated quantity $f(x)$ resulting from a measurement error *dx*
- {def} **relative error**: given an absolute error $\text{Δ}q$ for a particular quantity, $\frac{\text{Δ}q}{q}$ is the relative error.
- {def} **tangent line approximation (linearization)**: since the linear approximation of $f$ at $x=a$ is defined using the equation of the tangent line, the linear approximation of $f$ at $x=a$ is also known as the tangent line approximation to $f$ at $x=a$

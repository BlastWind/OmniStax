# Second-Order Linear Equations

## Learning Objectives {section:learning-objectives}
- Recognize homogeneous and nonhomogeneous linear differential equations.
- Determine the characteristic equation of a homogeneous linear equation.
- Use the roots of the characteristic equation to find the solution to a homogeneous linear equation.
- Solve initial-value and boundary-value problems involving linear differential equations.

When working with differential equations, usually the goal is to find a solution. In other words, we want to find a function (or functions) that satisfies the differential equation. The technique we use to find these solutions varies, depending on the form of the differential equation with which we are working. Second-order differential equations have several important characteristics that can help us determine which solution method to use. In this section, we examine some of these characteristics and the associated terminology.

## Homogeneous Linear Equations
Consider the second-order differential equation

$x{y}^{''}+2{x}^{2}{y}^{'}+5{x}^{3}y=0.$  {eq:fs-id1170572451084}

Notice that *y* and its derivatives appear in a relatively simple form. They are multiplied by functions of *x*, but are not raised to any powers themselves, nor are they multiplied together. As discussed in [Introduction to Differential Equations](module:m53696), first-order equations with similar characteristics are said to be linear. The same is true of second-order equations. Also note that all the terms in this differential equation involve either *y* or one of its derivatives. There are no terms involving only functions of *x*. Equations like this, in which every term contains *y* or one of its derivatives, are called homogeneous.
Not all differential equations are homogeneous. Consider the differential equation

$x{y}^{''}+2{x}^{2}{y}^{'}+5{x}^{3}y={x}^{2}.$  {eq:fs-id1170572481054}

The ${x}^{2}$ term on the right side of the equal sign does not contain *y* or any of its derivatives. Therefore, this differential equation is nonhomogeneous.

:::note [definition] Definition
A second-order differential equation is linear if it can be written in the form

$$ {a}_{2}(x){y}^{''}+{a}_{1}(x){y}^{'}+{a}_{0}(x)y=r(x), $$  {eq:fs-id1170572251008}

where ${a}_{2}(x),$ ${a}_{1}(x),$ ${a}_{0}(x),$ and $r(x)$ are real-valued functions and ${a}_{2}(x)$ is not identically zero. If $r(x)\equiv 0$—in other words, if $r(x)=0$ for every value of *x*—the equation is said to be a {term:homogeneous linear equation}. If $r(x)≠0$ for some value of $x,$ the equation is said to be a {term:nonhomogeneous linear equation}.
:::

:::note [media-2] 
Visit this [website](http://www.openstax.org/l/20_Secondord) to study more about second-order linear differential equations.
:::
In linear differential equations, $y$ and its derivatives can be raised only to the first power and they may not be multiplied by one another. Terms involving ${y}^{2}$ or $\sqrt{{y}^{'}}$ make the equation nonlinear. Functions of $y$ and its derivatives, such as $\text{sin}\;y$ or ${e}^{{y}^{'}},$ are similarly prohibited in linear differential equations.
Note that equations may not always be given in standard form (the form shown in the definition). It can be helpful to rewrite them in that form to decide whether they are linear, or whether a linear equation is homogeneous.

:::example {ex:fs-id1170571650370} Classifying Second-Order Equations

:::exercise {fs-id1170572086622} type= 
PROBLEM:
Classify each of the following equations as linear or nonlinear. If the equation is linear, determine further whether it is homogeneous or nonhomogeneous.
a. ${y}^{''}+3{x}^{4}{y}^{'}+{x}^{2}{y}^{2}={x}^{3}$
b. $(\text{sin}\;x){y}^{''}+(\text{cos}\;x){y}^{'}+3y=0$
c. $4{t}^{2}{x}^{''}+3tx{x}^{'}+4x=0$
d. $5{y}^{''}+y=4{x}^{5}$
e. $(\text{cos}\;x){y}^{''}-\text{sin}\;{y}^{'}+(\text{sin}\;x)y-\text{cos}\;x=0$
f. $8t{y}^{''}-6{t}^{2}{y}^{'}+4ty-3{t}^{2}=0$
g. $\text{sin}({x}^{2}){y}^{''}-(\text{cos}\;x){y}^{'}+{x}^{2}y={y}^{'}-3$
h. ${y}^{''}+5x{y}^{'}-3y=\text{cos}\;y$
SOLUTION:
a. This equation is nonlinear because of the ${y}^{2}$ term.
b. This equation is linear. There is no term involving a power or function of $y,$ and the coefficients are all functions of $x\text{.}$ The equation is already written in standard form, and $r(x)$ is identically zero, so the equation is homogeneous.
c. This equation is nonlinear. Note that, in this case, *x* is the dependent variable and *t* is the independent variable. The second term involves the product of $x$ and ${x}^{'},$ so the equation is nonlinear.
d. This equation is linear. Since $r(x)=4{x}^{5},$ the equation is nonhomogeneous.
e. This equation is nonlinear, because of the $\text{sin}\;{y}^{'}$ term.
f. This equation is linear. Rewriting it in standard form gives

$8{t}^{2}{y}^{''}-6{t}^{2}{y}^{'}+4ty=3{t}^{2}.$  {eq:fs-id1170572233488}

With the equation in standard form, we can see that $r(t)=3{t}^{2},$ so the equation is nonhomogeneous.
g. This equation looks like it’s linear, but we should rewrite it in standard form to be sure. We get

$\text{sin}({x}^{2}){y}^{''}-(\text{cos}\;x+1){y}^{'}+{x}^{2}y=−3.$  {eq:fs-id1170572216687}

This equation is, indeed, linear. With $r(x)=−3,$ it is nonhomogeneous.
h. This equation is nonlinear because of the $\text{cos}\;y$ term.
:::
:::

:::note [media-2] 
Visit this [website](http://www.openstax.org/l/20_Secondord2) that discusses second-order differential equations.
:::

:::note [checkpoint] 

:::exercise {fs-id1170572167953} type= 
PROBLEM:
Classify each of the following equations as linear or nonlinear. If the equation is linear, determine further whether it is homogeneous or nonhomogeneous.
a. ${({y}^{''})}^{2}-{y}^{'}+8{x}^{3}y=0$
b. $(\text{sin}\;t){y}^{''}+\text{cos}\;t-3t{y}^{'}=0$
SOLUTION:
a. Nonlinear
b. Linear, nonhomogeneous
COMMENTARY: Hint
Write the equation in standard form if necessary. Check for powers or functions of $y$ and its derivatives.
:::
:::
Later in this section, we will see some techniques for solving specific types of differential equations. Before we get to that, however, let’s get a feel for how solutions to linear differential equations behave. In many cases, solving differential equations depends on making educated guesses about what the solution might look like. Knowing how various types of solutions behave will be helpful.

:::example {ex:fs-id1170572560326} Verifying a Solution

:::exercise {fs-id1170572332134} type= 
PROBLEM:
Consider the linear, homogeneous differential equation

${x}^{2}{y}^{''}-x{y}^{'}-3y=0.$  {eq:fs-id1170572344219}

Looking at this equation, notice that the coefficient functions are polynomials, with higher powers of $x$ associated with higher-order derivatives of $y\text{.}$ Show that $y={x}^{3}$ is a solution to this differential equation.
SOLUTION:
Let $y={x}^{3}.$ Then ${y}^{'}=3{x}^{2}$ and ${y}^{''}=6x\text{.}$ Substituting into the differential equation, we see that

$\begin{array}{rl}{x}^{2}{y}^{''}-xy'-3y & ={x}^{2}(6x)-x(3{x}^{2})-3({x}^{3}) \\ & =6{x}^{3}-3{x}^{3}-3{x}^{3} \\ & =0.\end{array}$  {eq:fs-id1170571543538}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572107186} type= 
PROBLEM:
Show that $y=2{x}^{2}$ is a solution to the differential equation

$\frac{1}{2}{x}^{2}{y}^{''}-x{y}^{'}+y=0.$  {eq:fs-id1170572150551}

COMMENTARY: Hint
Calculate the derivatives and substitute them into the differential equation.
:::
:::
Although simply finding any solution to a differential equation is important, mathematicians and engineers often want to go beyond finding *one* solution to a differential equation to finding *all* solutions to a differential equation. In other words, we want to find a general solution**.** Just as with first-order differential equations, a general solution (or family of solutions) gives the entire set of solutions to a differential equation. An important difference between first-order and second-order equations is that, with second-order equations, we typically need to find two different solutions to the equation to find the general solution. If we find two solutions, then any linear combination of these solutions is also a solution. We state this fact as the following theorem.

:::note [theorem] Superposition Principle
If ${y}_{1}(x)$ and ${y}_{2}(x)$ are solutions to a linear homogeneous differential equation, then the function

$y(x)={c}_{1}{y}_{1}(x)+{c}_{2}{y}_{2}(x),$  {eq:fs-id1170572443602}

where ${c}_{1}$ and ${c}_{2}$ are constants, is also a solution.
:::
The proof of this {index:superposition principle} theorem is left as an exercise.

:::example {ex:fs-id1170572167258} Verifying the Superposition Principle

:::exercise {fs-id1170572114204} type= 
PROBLEM:
Consider the differential equation

${y}^{''}-4{y}^{'}-5y=0.$  {eq:fs-id1170572208610}

Given that ${e}^{\text{−}x}$ and ${e}^{5x}$ are solutions to this differential equation, show that $4{e}^{\text{−}x}+{e}^{5x}$ is a solution.
SOLUTION:
We have

$y(x)=4{e}^{\text{−}x}+{e}^{5x},\;\text{so}\;{y}^{'}(x)=−4{e}^{\text{−}x}+5{e}^{5x}\;\text{and}\;{y}^{''}(x)=4{e}^{\text{−}x}+25{e}^{5x}.$  {eq:fs-id1170571711239}

Then

$\begin{array}{rl}{y}^{''}-4{y}^{'}-5y & =(4{e}^{\text{−}x}+25{e}^{5x})-4(−4{e}^{\text{−}x}+5{e}^{5x})-5(4{e}^{\text{−}x}+{e}^{5x}) \\ & =4{e}^{\text{−}x}+25{e}^{5x}+16{e}^{\text{−}x}-20{e}^{5x}-20{e}^{\text{−}x}-5{e}^{5x} \\ & =0.\end{array}$  {eq:fs-id1170572560041}

Thus, $y(x)=4{e}^{\text{−}x}+{e}^{5x}$ is a solution.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572167175} type= 
PROBLEM:
Consider the differential equation

${y}^{''}+5{y}^{'}+6y=0.$  {eq:fs-id1170572474619}

Given that ${e}^{−2x}$ and ${e}^{−3x}$ are solutions to this differential equation, show that $3{e}^{−2x}+6{e}^{−3x}$ is a solution.
COMMENTARY: Hint
Differentiate the function and substitute into the differential equation.
:::
:::
Unfortunately, to find the general solution to a second-order differential equation, it is not enough to find any two solutions and then combine them. Consider the differential equation

${x}^{''}+7{x}^{'}+12x=0.$  {eq:fs-id1170572089296}

Both ${e}^{−3t}$ and $2{e}^{−3t}$ are solutions (check this). However, $x(t)={c}_{1}{e}^{−3t}+{c}_{2}(2{e}^{−3t})$ is *not* the general solution. This expression does not account for all solutions to the differential equation. In particular, it fails to account for the function ${e}^{−4t},$ which is also a solution to the differential equation.
It turns out that to find the general solution to a second-order differential equation, we must find two linearly independent solutions. We define that terminology here.

:::note [definition] Definition
A set of functions ${f}_{1}(x),{f}_{2}(x\text{),…,}{f}_{n}(x)$ is said to be {term:linearly dependent} if there are constants ${c}_{1},{c}_{2}\text{,…}{c}_{n},$ not all zero, such that ${c}_{1}{f}_{1}(x)+{c}_{2}{f}_{2}(x)+\text{⋯}+{c}_{n}{f}_{n}(x)=0$ for all *x* over the interval of interest. A set of functions that is not linearly dependent is said to be {term:linearly independent}.
:::
In this chapter, we usually test sets of only two functions for linear independence, which allows us to simplify this definition. From a practical perspective, we see that two functions are linearly dependent if either one of them is identically zero or if they are constant multiples of each other.
First we show that if the functions meet the conditions given previously, then they are linearly dependent. If one of the functions is identically zero—say, ${f}_{2}(x)\equiv 0$—then choose ${c}_{1}=0$ and ${c}_{2}=1,$ and the condition for linear dependence is satisfied. If, on the other hand, neither ${f}_{1}(x)$ nor ${f}_{2}(x)$ is identically zero, but ${f}_{1}(x)=C{f}_{2}(x)$ for some constant $C,$ then choose ${c}_{1}=\frac{1}{C}$ and ${c}_{2}=−1,$ and again, the condition is satisfied.
Next, we show that if two functions are linearly dependent, then either one is identically zero or they are constant multiples of one another. Assume ${f}_{1}(x)$ and ${f}_{2}(x)$ are linearly independent. Then, there are constants, ${c}_{1}$ and ${c}_{2},$ not both zero, such that

${c}_{1}{f}_{1}(x)+{c}_{2}{f}_{2}(x)=0$  {eq:fs-id1170571561369}

for all *x* over the interval of interest. Then,

${c}_{1}{f}_{1}(x)=\text{−}{c}_{2}{f}_{2}(x).$  {eq:fs-id1170571781136}

Now, since we stated that ${c}_{1}$ and ${c}_{2}$ can’t both be zero, assume ${c}_{2}≠0.$ Then, there are two cases: either ${c}_{1}=0$ or ${c}_{1}≠0.$ If ${c}_{1}=0,$ then

$\begin{array}{l}0=\text{−}{c}_{2}{f}_{2}(x) \\ 0={f}_{2}(x),\end{array}$  {eq:fs-id1170571674173}

so one of the functions is identically zero. Now suppose ${c}_{1}≠0.$ Then,

${f}_{1}(x)=(-\frac{{c}_{2}}{{c}_{1}}){f}_{2}(x)$  {eq:fs-id1170571554721}

and we see that the functions are constant multiples of one another.

:::note [theorem] Linear Dependence of Two Functions
Two functions, ${f}_{1}(x)$ and ${f}_{2}(x),$ are said to be linearly dependent if either one of them is identically zero or if ${f}_{1}(x)=C{f}_{2}(x)$ for some constant *C* and for all *x* over the interval of interest. Functions that are not linearly dependent are said to be *linearly independent*.
:::

:::example {ex:fs-id1170572630833} Testing for Linear Dependence

:::exercise {fs-id1170572630836} type= 
PROBLEM:
Determine whether the following pairs of functions are linearly dependent or linearly independent.
a. ${f}_{1}(x)={x}^{2},$ ${f}_{2}(x)=5{x}^{2}$
b. ${f}_{1}(x)=\text{sin}\;x,$ ${f}_{2}(x)=\text{cos}\;x$
c. ${f}_{1}(x)={e}^{3x},$ ${f}_{2}(x)={e}^{−3x}$
d. ${f}_{1}(x)=3x,$ ${f}_{2}(x)=3x+1$
SOLUTION:
a. ${f}_{2}(x)=5{f}_{1}(x),$ so the functions are linearly dependent.
b. There is no constant *C* such that ${f}_{1}(x)=C{f}_{2}(x),$ so the functions are linearly independent.
c. There is no constant *C* such that ${f}_{1}(x)=C{f}_{2}(x),$ so the functions are linearly independent. Don’t get confused by the fact that the exponents are constant multiples of each other. With two exponential functions, unless the exponents are equal, the functions are linearly independent.
d. There is no constant *C* such that ${f}_{1}(x)=C{f}_{2}(x),$ so the functions are linearly independent.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572337771} type= 
PROBLEM:
Determine whether the following pairs of functions are linearly dependent or linearly independent: ${f}_{1}(x)={e}^{x},$ ${f}_{2}(x)=3{e}^{3x}.$
SOLUTION:
Linearly independent
COMMENTARY: Hint
Are the functions constant multiples of one another?
:::
:::
If we are able to find two linearly independent solutions to a second-order differential equation, then we can combine them to find the general solution. This result is formally stated in the following theorem.

:::note [theorem] General Solution to a Homogeneous Equation
If ${y}_{1}(x)$ and ${y}_{2}(x)$ are linearly independent solutions to a second-order, linear, homogeneous differential equation, then the general solution is given by

$y(x)={c}_{1}{y}_{1}(x)+{c}_{2}{y}_{2}(x),$  {eq:fs-id1170571679801}

where ${c}_{1}$ and ${c}_{2}$ are constants.
:::
When we say a family of functions is the {index:general solution to a differential equation}, we mean that (1) every expression of that form is a solution and (2) every solution to the differential equation can be written in that form, which makes this theorem extremely powerful. If we can find two linearly independent solutions to a differential equation, we have, effectively, found *all* solutions to the differential equation—quite a remarkable statement. The proof of this theorem is beyond the scope of this text.

:::example {ex:fs-id1170572520528} Writing the General Solution

:::exercise {fs-id1170572520530} type= 
PROBLEM:
If ${y}_{1}(t)={e}^{3t}$ and ${y}_{2}(t)={e}^{−3t}$ are solutions to ${y}^{''}-9y=0,$ what is the general solution?
SOLUTION:
Note that ${y}_{1}$ and ${y}_{2}$ are not constant multiples of one another, so they are linearly independent. Then, the general solution to the differential equation is $y(t)={c}_{1}{e}^{3t}+{c}_{2}{e}^{−3t}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572582067} type= 
PROBLEM:
If ${y}_{1}(x)={e}^{3x}$ and ${y}_{2}(x)=x{e}^{3x}$ are solutions to ${y}^{''}-6{y}^{'}+9y=0,$ what is the general solution?
SOLUTION:
$y(x)={c}_{1}{e}^{3x}+{c}_{2}x{e}^{3x}$
COMMENTARY: Hint
Check for linear independence first.
:::
:::

## Second-Order Equations with Constant Coefficients
Now that we have a better feel for linear differential equations, we are going to concentrate on solving second-order equations of the form

$$ a{y}^{''}+b{y}^{'}+cy=0, $$  {eq:fs-id1170572185074}

where $a,$ $b,$ and $c$ are constants.
Since all the coefficients are constants, the solutions are probably going to be functions with derivatives that are constant multiples of themselves. We need all the terms to cancel out, and if taking a derivative introduces a term that is not a constant multiple of the original function, it is difficult to see how that term cancels out. Exponential functions have derivatives that are constant multiples of the original function, so let’s see what happens when we try a solution of the form $y(x)={e}^{λx},$ where $λ$ (the lowercase Greek letter lambda) is some constant.
If $y(x)={e}^{λx},$ then ${y}^{'}(x)=λ{e}^{λx}$ and ${y}^{''}={λ}^{2}{e}^{λx}.$ Substituting these expressions into [ref:fs-id1170572251008], we get

$\begin{array}{rl}a{y}^{''}+b{y}^{'}+cy & =a({λ}^{2}{e}^{λx})+b(λ{e}^{λx})+c{e}^{λx} \\ & ={e}^{λx}(a{λ}^{2}+bλ+c).\end{array}$  {eq:fs-id1170572236019}

Since ${e}^{λx}$ is never zero, this expression can be equal to zero for all *x* only if

$a{λ}^{2}+bλ+c=0.$  {eq:fs-id1170572386185}

We call this the characteristic equation of the differential equation.

:::note [definition] Definition
The {term:characteristic equation} of the differential equation $a{y}^{''}+b{y}^{'}+cy=0$ is $a{λ}^{2}+bλ+c=0.$
:::
The characteristic equation is very important in finding solutions to differential equations of this form. We can solve the characteristic equation either by factoring or by using the quadratic formula

$λ=\frac{\text{−}b\pm \sqrt{{b}^{2}-4ac}}{2a}.$  {eq:fs-id1170572168775}

This gives three cases. The characteristic equation has (1) distinct real roots; (2) a single, repeated real root; or (3) complex conjugate roots. We consider each of these cases separately.

### Distinct Real Roots
If the characteristic equation has distinct real roots ${λ}_{1}$ and ${λ}_{2},$ then ${e}^{{λ}_{1}x}$ and ${e}^{{λ}_{2}x}$ are linearly independent solutions to [ref:fs-id1170571650370], and the general solution is given by

$y(x)={c}_{1}{e}^{{λ}_{1}x}+{c}_{2}{e}^{{λ}_{2}x},$  {eq:fs-id1170572218586}

where ${c}_{1}$ and ${c}_{2}$ are constants.
For example, the differential equation ${y}^{''}+9{y}^{'}+14y=0$ has the associated characteristic equation ${λ}^{2}+9λ+14=0.$ This factors into $(λ+2)(λ+7)=0,$ which has roots ${λ}_{1}=−2$ and ${λ}_{2}=−7.$ Therefore, the general solution to this differential equation is

$y(x)={c}_{1}{e}^{−2x}+{c}_{2}{e}^{−7x}.$  {eq:fs-id1170572184975}

### Single Repeated Real Root
Things are a little more complicated if the characteristic equation has a repeated real root, $λ\text{.}$ In this case, we know ${e}^{λx}$ is a solution to [ref:fs-id1170572251008], but it is only one solution and we need two linearly independent solutions to determine the general solution. We might be tempted to try a function of the form $k{e}^{λx},$ where *k* is some constant, but it would not be linearly independent of ${e}^{λx}.$ Therefore, let’s try $x{e}^{λx}$ as the second solution. First, note that by the quadratic formula,

$λ=\frac{\text{−}b\pm \sqrt{{b}^{2}-4ac}}{2a}.$  {eq:fs-id1170572562800}

But, $λ$ is a repeated root, so ${b}^{2}-4ac=0$ and $λ=\frac{\text{−}b}{2a}.$ Thus, if $y=x{e}^{λx},$ we have

${y}^{'}={e}^{λx}+λx{e}^{λx}\;\text{and}\;{y}^{''}=2λ{e}^{λx}+{λ}^{2}x{e}^{λx}.$  {eq:fs-id1170571579703}

Substituting these expressions into [ref:fs-id1170572251008], we see that

$\begin{array}{rl}a{y}^{''}+b{y}^{'}+cy & =a(2λ{e}^{λx}+{λ}^{2}x{e}^{λx})+b({e}^{λx}+λx{e}^{λx})+cx{e}^{λx} \\ & =x{e}^{λx}(a{λ}^{2}+bλ+c)+{e}^{λx}(2aλ+b) \\ & =x{e}^{λx}(0)+{e}^{λx}(2a(\frac{\text{−}b}{2a})+b) \\ & =0+{e}^{λx}(0) \\ & =0.\end{array}$  {eq:fs-id1170571629729}

This shows that $x{e}^{λx}$ is a solution to [ref:fs-id1170572251008]. Since ${e}^{λx}$ and $x{e}^{λx}$ are linearly independent, when the characteristic equation has a repeated root $λ,$ the general solution to [ref:fs-id1170572251008] is given by

$y(x)={c}_{1}{e}^{λx}+{c}_{2}x{e}^{λx},$  {eq:fs-id1170571695699}

where ${c}_{1}$ and ${c}_{2}$ are constants.
For example, the differential equation ${y}^{''}+12{y}^{'}+36y=0$ has the associated characteristic equation ${λ}^{2}+12λ+36=0.$ This factors into ${(λ+6)}^{2}=0,$ which has a repeated root $λ=−6.$ Therefore, the general solution to this differential equation is

$y(x)={c}_{1}{e}^{−6x}+{c}_{2}x{e}^{−6x}.$  {eq:fs-id1170571592459}

### Complex Conjugate Roots
The third case we must consider is when ${b}^{2}-4ac<0.$ In this case, when we apply the quadratic formula, we are taking the square root of a negative number. We must use the imaginary number $i=\sqrt{−1}$ to find the roots, which take the form ${λ}_{1}=\alpha +βi$ and ${λ}_{2}=\alpha -βi\text{.}$ The {index:complex number} $\alpha +βi$ is called the *conjugate* of $\alpha -βi\text{.}$ Thus, we see that when ${b}^{2}-4ac<0,$ the roots of our characteristic equation are always {index:complex conjugates}.
This creates a little bit of a problem for us. If we follow the same process we used for distinct real roots—using the roots of the characteristic equation as the coefficients in the exponents of exponential functions—we get the functions ${e}^{(\alpha +βi)x}$ and ${e}^{(\alpha -βi)x}$ as our solutions. However, there are problems with this approach. First, these functions take on complex (imaginary) values, and a complete discussion of such functions is beyond the scope of this text. Second, even if we were comfortable with complex-value functions, in this course we do not address the idea of a derivative for such functions. So, if possible, we’d like to find two linearly independent *real-value* solutions to the differential equation. For purposes of this development, we are going to manipulate and differentiate the functions ${e}^{(\alpha +βi)x}$ and ${e}^{(\alpha -βi)x}$ as if they were real-value functions. For these particular functions, this approach is valid mathematically, but be aware that there are other instances when complex-value functions do not follow the same rules as real-value functions. Those of you interested in a more in-depth discussion of complex-value functions should consult a complex analysis text.
Based on the roots $\alpha \pm βi$ of the characteristic equation, the functions ${e}^{(\alpha +βi)x}$ and ${e}^{(\alpha -βi)x}$ are linearly independent solutions to the differential equation. and the general solution is given by

$y(x)={c}_{1}{e}^{(\alpha +βi)x}+{c}_{2}{e}^{(\alpha -βi)x}.$  {eq:fs-id1170572331260}

Using some smart choices for ${c}_{1}$ and ${c}_{2},$ and a little bit of algebraic manipulation, we can find two linearly independent, real-value solutions to [ref:fs-id1170572251008] and express our general solution in those terms.
We encountered exponential functions with complex exponents earlier. One of the key tools we used to express these exponential functions in terms of sines and cosines was {index:Euler’s formula}, which tells us that

${e}^{i\theta}=\text{cos}\;\theta +i\;\text{sin}\;\theta$  {eq:fs-id1170571700953}

for all real numbers $\theta \text{.}$
Going back to the general solution, we have

$\begin{array}{rl}y(x) & ={c}_{1}{e}^{(\alpha +βi)x}+{c}_{2}{e}^{(\alpha -βi)x} \\ & ={c}_{1}{e}^{\alpha x}{e}^{βix}+{c}_{2}{e}^{\alpha x}{e}^{\text{−}βix} \\ & ={e}^{\alpha x}({c}_{1}{e}^{βix}+{c}_{2}{e}^{\text{−}βix}).\end{array}$  {eq:fs-id1170571700996}

Applying Euler’s formula together with the identities $\text{cos}(\text{−}x)=\text{cos}\;x$ and $\text{sin}(\text{−}x)=\text{−}\text{sin}\;x,$ we get

$\begin{array}{rl}y(x) & ={e}^{\alpha x}[{c}_{1}(\text{cos}\;βx+i\;\text{sin}\;βx)+{c}_{2}(\text{cos}(\text{−}βx)+i\;\text{sin}(\text{−}βx))] \\ & ={e}^{\alpha x}[({c}_{1}+{c}_{2})\text{cos}\;βx+({c}_{1}-{c}_{2})i\;\text{sin}\;βx].\end{array}$  {eq:fs-id1170571613617}

Now, if we choose ${c}_{1}={c}_{2}=\frac{1}{2},$ the second term is zero and we get

$y(x)={e}^{\alpha x}\text{cos}\;βx$  {eq:fs-id1170571736619}

as a real-value solution to [ref:fs-id1170572251008]. Similarly, if we choose ${c}_{1}=\text{−}\frac{i}{2}$ and ${c}_{2}=\frac{i}{2},$ the first term is zero and we get

$y(x)={e}^{\alpha x}\text{sin}\;βx$  {eq:fs-id1170572088600}

as a second, linearly independent, real-value solution to [ref:fs-id1170572251008].
Based on this, we see that if the characteristic equation has complex conjugate roots $\alpha \pm βi,$ then the general solution to [ref:fs-id1170572251008] is given by

$\begin{array}{rl}y(x) & ={c}_{1}{e}^{\alpha x}\text{cos}\;βx+{c}_{2}{e}^{\alpha x}\text{sin}\;βx \\ & ={e}^{\alpha x}({c}_{1}\text{cos}\;βx+{c}_{2}\text{sin}\;βx),\end{array}$  {eq:fs-id1170572088666}

where ${c}_{1}$ and ${c}_{2}$ are constants.
For example, the differential equation ${y}^{''}-2{y}^{'}+5y=0$ has the associated characteristic equation ${λ}^{2}-2λ+5=0.$ By the quadratic formula, the roots of the characteristic equation are $1\pm 2i\text{.}$ Therefore, the general solution to this differential equation is

$y(x)={e}^{x}({c}_{1}\text{cos}\;2x+{c}_{2}\text{sin}\;2x).$  {eq:fs-id1170572330286}

### Summary of Results
We can solve second-order, linear, homogeneous differential equations with constant coefficients by finding the roots of the associated characteristic equation. The form of the general solution varies, depending on whether the characteristic equation has distinct, real roots; a single, repeated real root; or complex conjugate roots. The three cases are summarized in [ref:fs-id1170571769749].

> TABLE {tab:fs-id1170571769749} cols=2
> title: Summary of Characteristic Equation Cases
> summary: This is a table with two columns and three rows. The first column is labeled, “Characteristic Equation Roots;” the second column is labeled, “General Solution to the Differential Equation.” The first row first column contains the statement, “Distinct real roots λ1 and λ2. In the first row second column is the function: y(x) = c1e^λ1x + c2e^λ2x. The second row first column has the statement, “A repeated real root, λ.” The second row second column has the function: y(x) = c1e^λx + c2xe^λx. The third row first column has the statement, “Complex conjugate roots α ± βi. The third row second column has the function: y(x) =e^αx(c1cosβx + c2sinβx).

| Characteristic Equation Roots | General Solution to the Differential Equation |
| --- | --- |
| Distinct real roots, ${λ}_{1}$ and ${λ}_{2}$ | $y(x)={c}_{1}{e}^{{λ}_{1}x}+{c}_{2}{e}^{{λ}_{2}x}$ |
| A repeated real root, $λ$ | $y(x)={c}_{1}{e}^{λx}+{c}_{2}x{e}^{λx}$ |
| Complex conjugate roots $\alpha \pm βi$ | $y(x)={e}^{\alpha x}({c}_{1}\text{cos}\;βx+{c}_{2}\text{sin}\;βx)$ |

:::note [problem-solving] Using the Characteristic Equation to Solve Second-Order Differential Equations with Constant Coefficients
1. Write the differential equation in the form $a{y}^{''}+b{y}^{'}+cy=0.$
2. Find the corresponding characteristic equation $a{λ}^{2}+bλ+c=0.$
3. Either factor the characteristic equation or use the quadratic formula to find the roots.
4. Determine the form of the general solution based on whether the characteristic equation has distinct, real roots; a single, repeated real root; or complex conjugate roots.
:::

:::example {ex:fs-id1170571735178} Solving Second-Order Equations with Constant Coefficients

:::exercise {fs-id1170571735180} type= 
PROBLEM:
Find the general solution to the following differential equations. Give your answers as functions of *x*.
a. ${y}^{''}+3{y}^{'}-4y=0$
b. ${y}^{''}+6{y}^{'}+13y=0$
c. ${y}^{''}+2{y}^{'}+y=0$
d. ${y}^{''}-5{y}^{'}=0$
e. ${y}^{''}-16y=0$
f. ${y}^{''}+16y=0$
SOLUTION:
Note that all these equations are already given in standard form (step 1).
a. The characteristic equation is ${λ}^{2}+3λ-4=0$ (step 2). This factors into $(λ+4)(λ-1)=0,$ so the roots of the characteristic equation are ${λ}_{1}=−4$ and ${λ}_{2}=1$ (step 3). Then the general solution to the differential equation is

$y(x)={c}_{1}{e}^{−4x}+{c}_{2}{e}^{x}\;\text{(step 4)}\text{.}$  {eq:fs-id1170572589239}

b. The characteristic equation is ${λ}^{2}+6λ+13=0$ (step 2). Applying the quadratic formula, we see this equation has complex conjugate roots $−3\pm 2i$ (step 3). Then the general solution to the differential equation is

$y(t)={e}^{−3t}({c}_{1}\text{cos}\;2t+{c}_{2}\text{sin}\;2t)\;\text{(step 4)}\text{.}$  {eq:fs-id1170572296619}

c. The characteristic equation is ${λ}^{2}+2λ+1=0$ (step 2). This factors into ${(λ+1)}^{2}=0,$ so the characteristic equation has a repeated real root $λ=−1$ (step 3). Then the general solution to the differential equation is

$y(t)={c}_{1}{e}^{\text{−}t}+{c}_{2}t{e}^{\text{−}t}\;\text{(step 4).}$  {eq:fs-id1170572468885}

d. The characteristic equation is ${λ}^{2}-5λ$ (step 2). This factors into $λ(λ-5)=0,$ so the roots of the characteristic equation are ${λ}_{1}=0$ and ${λ}_{2}=5$ (step 3). Note that ${e}^{0x}={e}^{0}=1,$ so our first solution is just a constant. Then the general solution to the differential equation is

$y(x)={c}_{1}+{c}_{2}{e}^{5x}\;\text{(step 4)}\text{.}$  {eq:fs-id1170571531346}

e. The characteristic equation is ${λ}^{2}-16=0$ (step 2). This factors into $(λ+4)(λ-4)=0,$ so the roots of the characteristic equation are ${λ}_{1}=4$ and ${λ}_{2}=−4$ (step 3). Then the general solution to the differential equation is

$y(x)={c}_{1}{e}^{4x}+{c}_{2}{e}^{−4x}\;\text{(step 4)}\text{.}$  {eq:fs-id1170572306377}

f. The characteristic equation is ${λ}^{2}+16=0$ (step 2). This has complex conjugate roots $\pm 4i$ (step 3). Note that ${e}^{0x}={e}^{0}=1,$ so the exponential term in our solution is just a constant. Then the general solution to the differential equation is

$y(t)={c}_{1}\text{cos}\;4t+{c}_{2}\text{sin}\;4t\;\text{(step 4)}\text{.}$  {eq:fs-id1170572332697}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572332760} type= 
PROBLEM:
Find the general solution to the following differential equations:
a. ${y}^{''}-2{y}^{'}+10y=0$
b. ${y}^{''}+14{y}^{'}+49y=0$
SOLUTION:
a. $y(x)={e}^{x}({c}_{1}\text{cos}\;3x+{c}_{2}\text{sin}\;3x)$
b. $y(x)={c}_{1}{e}^{−7x}+{c}_{2}x{e}^{−7x}$
COMMENTARY: Hint
Find the roots of the characteristic equation.
:::
:::

## Initial-Value Problems and Boundary-Value Problems
So far, we have been finding general solutions to differential equations. However, differential equations are often used to describe physical systems, and the person studying that physical system usually knows something about the state of that system at one or more points in time. For example, if a constant-coefficient differential equation is representing how far a motorcycle shock absorber is compressed, we might know that the rider is sitting still on his motorcycle at the start of a race, time $t={t}_{0}.$ This means the system is at equilibrium, so $y({t}_{0})=0,$ and the compression of the shock absorber is not changing, so ${y}^{'}({t}_{0})=0.$ With these two initial conditions and the general solution to the differential equation, we can find the *specific* solution to the differential equation that satisfies both initial conditions. This process is known as *solving an initial-value problem*. (Recall that we discussed {index:initial-value problems} in [Introduction to Differential Equations](module:m53696).) Note that second-order equations have two arbitrary constants in the general solution, and therefore we require two initial conditions to find the solution to the initial-value problem.
Sometimes we know the condition of the system at two different times. For example, we might know $y({t}_{0})={y}_{0}$ and $y({t}_{1})={y}_{1}.$ These conditions are called {term:boundary conditions}, and finding the solution to the differential equation that satisfies the boundary conditions is called solving a {term:boundary-value problem}.
Mathematicians, scientists, and engineers are interested in understanding the conditions under which an initial-value problem or a boundary-value problem has a unique solution. Although a complete treatment of this topic is beyond the scope of this text, it is useful to know that, within the context of constant-coefficient, second-order equations, initial-value problems are guaranteed to have a unique solution as long as two initial conditions are provided. Boundary-value problems, however, are not as well behaved. Even when two boundary conditions are known, we may encounter boundary-value problems with unique solutions, many solutions, or no solution at all.

:::example {ex:fs-id1170572624728} Solving an Initial-Value Problem

:::exercise {fs-id1170572624731} type= 
PROBLEM:
Solve the following initial-value problem: ${y}^{''}+3{y}^{'}-4y=0,$ $y(0)=1,$ ${y}^{'}(0)=−9.$
SOLUTION:
We already solved this differential equation in [ref:fs-id1170571735178]a. and found the general solution to be

$y(x)={c}_{1}{e}^{−4x}+{c}_{2}{e}^{x}.$  {eq:fs-id1170571547376}

Then

${y}^{'}(x)=−4{c}_{1}{e}^{−4x}+{c}_{2}{e}^{x}.$  {eq:fs-id1170571547430}

When $x=0,$ we have $y(0)={c}_{1}+{c}_{2}$ and ${y}^{'}(0)=−4{c}_{1}+{c}_{2}.$ Applying the initial conditions, we have

$\begin{array}{rll}{c}_{1}+{c}_{2} & = & 1 \\ −4{c}_{1}+{c}_{2} & = & −9.\end{array}$  {eq:fs-id1170571653807}

Then ${c}_{1}=1-{c}_{2}.$ Substituting this expression into the second equation, we see that

$\begin{array}{rll}−4(1-{c}_{2})+{c}_{2} & = & −9 \\ −4+4{c}_{2}+{c}_{2} & = & −9 \\ 5{c}_{2} & = & −5 \\ {c}_{2} & = & −1.\end{array}$  {eq:fs-id1170572368514}

So, ${c}_{1}=2$ and the solution to the initial-value problem is

$y(x)=2{e}^{−4x}-{e}^{x}.$  {eq:fs-id1170571712871}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571700298} type= 
PROBLEM:
Solve the initial-value problem ${y}^{''}-3{y}^{'}-10y=0,$ $y(0)=0,$ ${y}^{'}(0)=7.$
SOLUTION:
$y(x)=\text{−}{e}^{−2x}+{e}^{5x}$
COMMENTARY: Hint
Use the initial conditions to determine values for ${c}_{1}$ and ${c}_{2}.$
:::
:::

:::example {ex:fs-id1170572307679} Solving an Initial-Value Problem and Graphing the Solution

:::exercise {fs-id1170572307681} type= 
PROBLEM:
Solve the following initial-value problem and graph the solution:

${y}^{''}+6{y}^{'}+13y=0,\;y(0)=0,\;{y}^{'}(0)=2$  {eq:fs-id1170572307692}

SOLUTION:
We already solved this differential equation in [ref:fs-id1170571735178]b. and found the general solution to be

$y(x)={e}^{−3x}({c}_{1}\text{cos}\;2x+{c}_{2}\text{sin}\;2x).$  {eq:fs-id1170572218526}

Then

${y}^{'}(x)={e}^{−3x}(−2{c}_{1}\text{sin}\;2x+2{c}_{2}\text{cos}\;2x)-3{e}^{−3x}({c}_{1}\text{cos}\;2x+{c}_{2}\text{sin}\;2x).$  {eq:fs-id1170572420004}

When $x=0,$ we have $y(0)={c}_{1}$ and ${y}^{'}(0)=2{c}_{2}-3{c}_{1}.$ Applying the initial conditions, we obtain

$\begin{array}{rll}{c}_{1} & = & 0 \\ −3{c}_{1}+2{c}_{2} & = & 2.\end{array}$  {eq:fs-id1170571700244}

Therefore, ${c}_{1}=0,$ ${c}_{2}=1,$ and the solution to the initial value problem is shown in the following graph.

$y={e}^{−3x}\text{sin}\;2x\text{.}$  {eq:fs-id1170571746575}

> IMAGE {img:fs-id1170571746607} src=../../media/CNX_Calc_Figure_17_01_001.jpg
> alt: This figure is a graph of the function y = e^−3x sin 2x. The x axis is scaled in increments of tenths. The y axis is scaled in increments of even tenths. The curve passes through the origin and has a horizontal asymptote of the positive x axis.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572627068} type= 
PROBLEM:
Solve the following initial-value problem and graph the solution: ${y}^{''}-2{y}^{'}+10y=0,y(0)=2,{y}^{'}(0)=−1$
SOLUTION:
$y(x)={e}^{x}(2\;\text{cos}\;3x-\text{sin}\;3x)$

> IMAGE {img:fs-id1170572306890} src=../../media/CNX_Calc_Figure_17_01_002.jpg
> alt: This figure is the graph of y(x) = e^x(2 cos 3x − sin 3x) It has the positive x axis scaled in increments of even tenths. The y axis is scaled in increments of twenty. The graph itself starts at the origin. Its amplitude increases as x increases.

COMMENTARY: Hint
Use the initial conditions to determine values for ${c}_{1}$ and ${c}_{2}.$
:::
:::

:::example {ex:fs-id1170572306933} Initial-Value Problem Representing a Spring-Mass System

:::exercise {fs-id1170572306936} type= 
PROBLEM:
The following initial-value problem models the position of an object with mass attached to a spring. Spring-mass systems are examined in detail in [Applications](module:m54044). The solution to the differential equation gives the position of the mass with respect to a neutral (equilibrium) position (in meters) at any given time. (Note that for spring-mass systems of this type, it is customary to define the downward direction as positive.)

${y}^{''}+2{y}^{'}+y=0,y(0)=1,{y}^{'}(0)=0$  {eq:fs-id1170572306957}

Solve the initial-value problem and graph the solution. What is the position of the mass at time $t=2$ sec? How fast is the mass moving at time $t=1$ sec? In what direction?
SOLUTION:
In [ref:fs-id1170571735178]c. we found the general solution to this differential equation to be

$y(t)={c}_{1}{e}^{\text{−}t}+{c}_{2}t{e}^{\text{−}t}.$  {eq:fs-id1170572223554}

Then

${y}^{'}(t)=\text{−}{c}_{1}{e}^{\text{−}t}+{c}_{2}(\text{−}t{e}^{\text{−}t}+{e}^{\text{−}t}).$  {eq:fs-id1170572489112}

When $t=0,$ we have $y(0)={c}_{1}$ and ${y}^{'}(0)=\text{−}{c}_{1}+{c}_{2}.$ Applying the initial conditions, we obtain

$\begin{array}{rll}{c}_{1} & = & 1 \\ {\text{−}c}_{1}+{c}_{2} & = & 0.\end{array}$  {eq:fs-id1170571646103}

Thus, ${c}_{1}=1,$ ${c}_{2}=1,$ and the solution to the initial value problem is

$y(t)={e}^{\text{−}t}+t{e}^{\text{−}t}.$  {eq:fs-id1170572554244}

This solution is represented in the following graph. At time $t=2,$ the mass is at position $y(2)={e}^{−2}+2{e}^{−2}=3{e}^{−2}\approx 0.406$ m below equilibrium.

> IMAGE {img:fs-id1170571611970} src=../../media/CNX_Calc_Figure_17_01_003.jpg
> alt: This figure is the graph of y(t) = e^−t + te^−t. The horizontal axis is labeled with t and is scaled in increments of even tenths. The y axis is scaled in increments of 0.5. The graph passes through positive one and decreases with a horizontal asymptote of the positive t axis.

To calculate the velocity at time $t=1,$ we need to find the derivative. We have $y(t)={e}^{\text{−}t}+t{e}^{\text{−}t},$ so

${y}^{'}(t)=\text{−}{e}^{\text{−}t}+{e}^{\text{−}t}-t{e}^{\text{−}t}=\text{−}t{e}^{\text{−}t}.$  {eq:fs-id1170571612037}

Then ${y}^{'}(1)=\text{−}{e}^{−1}\approx -0.3679.$ At time $t=1,$ the mass is moving upward at 0.3679 m/sec.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572516870} type= 
PROBLEM:
Suppose the following initial-value problem models the position (in feet) of a mass in a spring-mass system at any given time. Solve the initial-value problem and graph the solution. What is the position of the mass at time $t=0.3$ sec? How fast is it moving at time $t=0.1$ sec? In what direction?

${y}^{''}+14{y}^{'}+49y=0,y(0)=0,{y}^{'}(0)=1$  {eq:fs-id1170572610910}

SOLUTION:
$y(t)=t{e}^{−7t}$

> IMAGE {img:fs-id1170571781015} src=../../media/CNX_Calc_Figure_17_01_004.jpg
> alt: This figure is the graph of y(t) = te^−7t. The horizontal axis is labeled with t and is scaled in increments of tenths. The y axis is scaled in increments of 0.5. The graph passes through the origin and has a horizontal asymptote of the positive t axis.

At time $t=0.3,$ $y(0.3)=0.3{e}^{(−7*0.3)}=0.3{e}^{−2.1}\approx 0.0367.$ The mass is 0.0367 ft below equilibrium. At time $t=0.1,$ ${y}^{'}(0.1)=0.3{e}^{−0.7}\approx 0.1490.$ The mass is moving downward at a speed of 0.1490 ft/sec.
COMMENTARY: Hint
Use the initial conditions to determine values for ${c}_{1}$ and ${c}_{2}.$
:::
:::

:::example {ex:fs-id1170572292379} Solving a Boundary-Value Problem

:::exercise {fs-id1170572292381} type= 
PROBLEM:
In [ref:fs-id1170571735178]f. we solved the differential equation ${y}^{''}+16y=0$ and found the general solution to be $y(t)={c}_{1}\text{cos}\;4t+{c}_{2}\text{sin}\;4t\text{.}$ If possible, solve the boundary-value problem if the boundary conditions are the following:
a. $y(0)=0,$ $y(\frac{\pi}{4})=0$
b. $y(0)=1,$ $y(\frac{\pi}{8})=0$
c. $y(\frac{\pi}{8})=0,$ $y(\frac{3\pi}{8})=2$
SOLUTION:
We have

$y(t)={c}_{1}\text{cos}\;4t+{c}_{2}\text{sin}\;4t\text{.}$  {eq:fs-id1170571781239}

a. Applying the first boundary condition given here, we get $y(0)={c}_{1}=0.$ So the solution is of the form $y(t)={c}_{2}\text{sin}\;4t\text{.}$ When we apply the second boundary condition, though, we get $y(\frac{\pi}{4})={c}_{2}\text{sin}\;(4(\frac{\pi}{4}))={c}_{2}\text{sin}\;\pi =0$ for all values of ${c}_{2}.$ The boundary conditions are not sufficient to determine a value for ${c}_{2},$ so this boundary-value problem has infinitely many solutions. Thus, $y(t)={c}_{2}\text{sin}\;4t$ is a solution for any value of ${c}_{2}.$
b. Applying the first boundary condition given here, we get $y(0)={c}_{1}=1.$ Applying the second boundary condition gives $y(\frac{\pi}{8})={c}_{2}=0,$ so ${c}_{2}=0.$ In this case, we have a unique solution: $y(t)=\text{cos}\;4t\text{.}$
c. Applying the first boundary condition given here, we get $y(\frac{\pi}{8})={c}_{2}=0.$ However, applying the second boundary condition gives $y(\frac{3\pi}{8})=\text{−}{c}_{2}=2,$ so ${c}_{2}=−2.$ We cannot have ${c}_{2}=0=−2,$ so this boundary value problem has no solution.
:::
:::

## Key Concepts {section:key-concepts}
- Second-order differential equations can be classified as linear or nonlinear, homogeneous or nonhomogeneous.
- To find a general solution for a homogeneous second-order differential equation, we must find two linearly independent solutions. If ${y}_{1}(x)$ and ${y}_{2}(x)$ are linearly independent solutions to a second-order, linear, homogeneous differential equation, then the general solution is given by

$y(x)={c}_{1}{y}_{1}(x)+{c}_{2}{y}_{2}(x).$  {eq:fs-id1170571558858}

- To solve homogeneous second-order differential equations with constant coefficients, find the roots of the characteristic equation. The form of the general solution varies depending on whether the characteristic equation has distinct, real roots; a single, repeated real root; or complex conjugate roots.
- Initial conditions or boundary conditions can then be used to find the specific solution to a differential equation that satisfies those conditions, except when there is no solution or infinitely many solutions.

## Key Equations {section:key-equations}

> TABLE {tab:eip-564} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Linear second-order differential equation** | ${a}_{2}(x){y}^{''}+{a}_{1}(x){y}^{'}+{a}_{0}(x)y=r(x)$ |
| **Second-order equation with constant coefficients** | $a{y}^{''}+b{y}^{'}+cy=0$ |

##  {section:section-exercises}
Classify each of the following equations as linear or nonlinear. If the equation is linear, determine whether it is homogeneous or nonhomogeneous.

:::exercise {fs-id1170572604496} type= 
PROBLEM:
${x}^{3}{y}^{''}+(x-1){y}^{'}-8y=0$
SOLUTION:
linear, homogenous
:::

:::exercise {fs-id1170572604555} type= 
PROBLEM:
$(1+{y}^{2}){y}^{''}+x{y}^{'}-3y=\text{cos}\;x$
:::

:::exercise {fs-id1170571543371} type= 
PROBLEM:
$x{y}^{''}+{e}^{y}{y}^{'}=x$
SOLUTION:
nonlinear
:::

:::exercise {fs-id1170571543412} type= 
PROBLEM:
${y}^{''}+\frac{4}{x}{y}^{'}-8xy=5{x}^{2}+1$
:::

:::exercise {fs-id1170572642017} type= 
PROBLEM:
${y}^{''}+(\text{sin}\;x){y}^{'}-xy=4y$
SOLUTION:
linear, homogeneous
:::

:::exercise {fs-id1170572642074} type= 
PROBLEM:
${y}^{''}+(\frac{x+3}{y}){y}^{'}=0$
:::
For each of the following problems, verify that the given function is a solution to the differential equation. Use a graphing utility to graph the particular solutions for several values of *c*<sub>1</sub> and *c*<sub>2</sub>. What do the solutions have in common?

:::exercise {fs-id1170571614582} type= 
PROBLEM:
**[T]**${y}^{''}+2{y}^{'}-3y=0;$ $y(x)={c}_{1}{e}^{x}+{c}_{2}{e}^{−3x}$
:::

:::exercise {fs-id1170571614670} type= 
PROBLEM:
**[T]**${x}^{2}{y}^{''}-2y-3{x}^{2}+1=0;$ $y(x)={c}_{1}{x}^{2}+{c}_{2}{x}^{−1}+{x}^{2}\text{ln}\;(x)+\frac{1}{2}$
:::

:::exercise {fs-id1170572372098} type= 
PROBLEM:
**[T]**${y}^{''}+14{y}^{'}+49y=0;$ $y(x)={c}_{1}{e}^{−7x}+{c}_{2}x{e}^{−7x}$
:::

:::exercise {fs-id1170572268377} type= 
PROBLEM:
**[T]**$6{y}^{''}-49{y}^{'}+8y=0;$ $y(x)={c}_{1}{e}^{x\text{/}6}+{c}_{2}{e}^{8x}$
Find the general solution to the linear differential equation.
:::

:::exercise {fs-id1170572088733} type= 
PROBLEM:
${y}^{''}-3{y}^{'}-10y=0$
SOLUTION:
$y={c}_{1}{e}^{5x}+{c}_{2}{e}^{−2x}$
:::

:::exercise {fs-id1170572309558} type= 
PROBLEM:
${y}^{''}-7{y}^{'}+12y=0$
:::

:::exercise {fs-id1170572309635} type= 
PROBLEM:
${y}^{''}+4{y}^{'}+4y=0$
SOLUTION:
$y={c}_{1}{e}^{−2x}+{c}_{2}x{e}^{−2x}$
:::

:::exercise {fs-id1170572383725} type= 
PROBLEM:
$4{y}^{''}-12{y}^{'}+9y=0$
:::

:::exercise {fs-id1170572334866} type= 
PROBLEM:
$2{y}^{''}-3{y}^{'}-5y=0$
SOLUTION:
$y={c}_{1}{e}^{5x\text{/}2}+{c}_{2}{e}^{\text{−}x}$
:::

:::exercise {fs-id1170572334950} type= 
PROBLEM:
$3{y}^{''}-14{y}^{'}+8y=0$
:::

:::exercise {fs-id1170572582391} type= 
PROBLEM:
${y}^{''}+{y}^{'}+y=0$
SOLUTION:
$y={e}^{\text{−}x\text{/}2}({c}_{1}\text{cos}\;\frac{\sqrt{3}x}{2}+{c}_{2}\text{sin}\;\frac{\sqrt{3}x}{2})$
:::

:::exercise {fs-id1170572560180} type= 
PROBLEM:
$5{y}^{''}+2{y}^{'}+4y=0$
:::

:::exercise {fs-id1170572274637} type= 
PROBLEM:
${y}^{''}-121y=0$
SOLUTION:
$y={c}_{1}{e}^{−11x}+{c}_{2}{e}^{11x}$
:::

:::exercise {fs-id1170572274705} type= 
PROBLEM:
$8{y}^{''}+14{y}^{'}-15y=0$
:::

:::exercise {fs-id1170571557043} type= 
PROBLEM:
${y}^{''}+81y=0$
SOLUTION:
$y={c}_{1}\text{cos}\;9x+{c}_{2}\text{sin}\;9x$
:::

:::exercise {fs-id1170571557115} type= 
PROBLEM:
${y}^{''}-{y}^{'}+11y=0$
:::

:::exercise {fs-id1170572583472} type= 
PROBLEM:
$2{y}^{''}=0$
SOLUTION:
$y={c}_{1}+{c}_{2}x$
:::

:::exercise {fs-id1170572512668} type= 
PROBLEM:
${y}^{''}-6{y}^{'}+9y=0$
:::

:::exercise {fs-id1170572512748} type= 
PROBLEM:
$3{y}^{''}-2{y}^{'}-7y=0$
SOLUTION:
$y={c}_{1}{e}^{((1+\sqrt{22})\text{/}3)x}+{c}_{2}{e}^{((1-\sqrt{22})\text{/}3)x}$
:::

:::exercise {fs-id1170571553821} type= 
PROBLEM:
$4{y}^{''}-10{y}^{'}=0$
:::

:::exercise {fs-id1170572542773} type= 
PROBLEM:
$36\frac{{d}^{2}y}{d{x}^{2}}+12\frac{dy}{dx}+y=0$
SOLUTION:
$y={c}_{1}{e}^{\text{−}x\text{/}6}+{c}_{2}x{e}^{\text{−}x\text{/}6}$
:::

:::exercise {fs-id1170571638071} type= 
PROBLEM:
$25\frac{{d}^{2}y}{d{x}^{2}}-80\frac{dy}{dx}+64y=0$
:::

:::exercise {fs-id1170572388329} type= 
PROBLEM:
$\frac{{d}^{2}y}{d{x}^{2}}-9\frac{dy}{dx}=0$
SOLUTION:
$y={c}_{1}+{c}_{2}{e}^{9x}$
:::

:::exercise {fs-id1170572388411} type= 
PROBLEM:
$4\frac{{d}^{2}y}{d{x}^{2}}+8y=0$
:::
Solve the initial-value problem.

:::exercise {fs-id1170571596269} type= 
PROBLEM:
${y}^{''}+5{y}^{'}+6y=0,\hspace{2em}y(0)=0,\; \;{y}^{'}(0)=−2$
SOLUTION:
$y=−2{e}^{−2x}+2{e}^{−3x}$
:::

:::exercise {fs-id1170572626478} type= 
PROBLEM:
${y}^{''}+2{y}^{'}-8y=0,\hspace{2em}y(0)=5,\; \;{y}^{'}(0)=4$
:::

:::exercise {fs-id1170572557927} type= 
PROBLEM:
${y}^{''}+4y=0,\hspace{4em}y(0)=3,\; \;{y}^{'}(0)=10$
SOLUTION:
$y=3\;\text{cos}\;(2x)+5\;\text{sin}\;(2x)$
:::

:::exercise {fs-id1170572501316} type= 
PROBLEM:
${y}^{''}-18{y}^{'}+81y=0,\hspace{2em}y(0)=1,\; \;{y}^{'}(0)=5$
:::

:::exercise {fs-id1170572304970} type= 
PROBLEM:
${y}^{''}-{y}^{'}-30y=0,\hspace{2em}y(0)=1,\; \;{y}^{'}(0)=−16$
SOLUTION:
$y=\text{−}{e}^{6x}+2{e}^{−5x}$
:::

:::exercise {fs-id1170571790172} type= 
PROBLEM:
$4{y}^{''}+4{y}^{'}-8y=0,\hspace{2em}y(0)=2,\; \;{y}^{'}(0)=1$
:::

:::exercise {fs-id1170571817331} type= 
PROBLEM:
$25{y}^{''}+10{y}^{'}+y=0,\hspace{2em}y(0)=2,\; \;{y}^{'}(0)=1$
SOLUTION:
$y=2{e}^{\text{−}x\text{/}5}+\frac{7}{5}x{e}^{\text{−}x\text{/}5}$
:::

:::exercise {fs-id1170572499617} type= 
PROBLEM:
${y}^{''}+y=0,\hspace{4em}y(\pi )=1,\; \;{y}^{'}(\pi )=−5$
:::
Solve the boundary-value problem, if possible.

:::exercise {fs-id1170571755418} type= 
PROBLEM:
${y}^{''}+{y}^{'}-42y=0,\hspace{2em}y(0)=0,\; \;y(1)=2$
SOLUTION:
$y=(\frac{2}{{e}^{6}-{e}^{−7}}){e}^{6x}-(\frac{2}{{e}^{6}-{e}^{−7}}){e}^{−7x}$
:::

:::exercise {fs-id1170572217354} type= 
PROBLEM:
$9{y}^{''}+y=0,\hspace{4em}y(\frac{3\pi}{2})=6,\; \;y(0)=−8$
:::

:::exercise {fs-id1170571733162} type= 
PROBLEM:
${y}^{''}+10{y}^{'}+34y=0,\hspace{2em}y(0)=6,\; \;y(\pi )=2$
SOLUTION:
No solutions exist.
:::

:::exercise {fs-id1170571733252} type= 
PROBLEM:
${y}^{''}+7{y}^{'}-60y=0,\hspace{2em}y(0)=4,\; \;y(2)=0$
:::

:::exercise {fs-id1170572311082} type= 
PROBLEM:
${y}^{''}-4{y}^{'}+4y=0,\hspace{2em}y(0)=2,\; \;y(1)=−1$
SOLUTION:
$y=2{e}^{2x}-\frac{2{e}^{2}+1}{{e}^{2}}x{e}^{2x}$
:::

:::exercise {fs-id1170571542979} type= 
PROBLEM:
${y}^{''}-5{y}^{'}=0,\hspace{2em}y(0)=3,\; \;y(−1)=2$
:::

:::exercise {fs-id1170572268031} type= 
PROBLEM:
${y}^{''}+9y=0,\hspace{2em}y(0)=4,\; \;y(\frac{\pi}{3})=−4$
SOLUTION:
$y=4\;\text{cos}\;3x+{c}_{2}\text{sin}\;3x,\;\text{infinitely many solutions}$
:::

:::exercise {fs-id1170571778788} type= 
PROBLEM:
$4{y}^{''}+25y=0,\hspace{2em}y(0)=2,\; \;y(2\pi )=−2$
:::

:::exercise {fs-id1170571654026} type= 
PROBLEM:
Find a differential equation with a general solution that is $y={c}_{1}{e}^{x\text{/}5}+{c}_{2}{e}^{−4x}.$
SOLUTION:
$5{y}^{''}+19{y}^{'}-4y=0$
:::

:::exercise {fs-id1170571654111} type= 
PROBLEM:
Find a differential equation with a general solution that is $y={c}_{1}{e}^{x}+{c}_{2}{e}^{−4x\text{/}3}.$
:::
For each of the following differential equations:
a. Solve the initial value problem.
b. **[T]** Use a graphing utility to graph the particular solution.

:::exercise {fs-id1170572417838} type= 
PROBLEM:
${y}^{''}+64y=0;\hspace{2em}y(0)=3,\;{y}^{'}(0)=–24$
SOLUTION:
a. $y=3\;\text{cos}(8x)$
b.

> IMAGE {img:fs-id1170572281067} src=../../media/CNX_Calc_Figure_17_01_201.jpg
> alt: This figure is a periodic graph. It has an amplitude of 3.5. Both the x and y axes are scaled in increments of 1.

:::

:::exercise {fs-id1170572281082} type= 
PROBLEM:
${y}^{''}-2{y}^{'}+10y=0\hspace{2em}y(0)=1,\;{y}^{'}(0)=13$
:::

:::exercise {fs-id1170572388281} type= 
PROBLEM:
${y}^{''}+5{y}^{'}+15y=0\hspace{2em}y(0)=−2,\;{y}^{'}(0)=7$
SOLUTION:
a. $y={e}^{(−5\text{/}2)x}[−2\;\text{cos}\;(\frac{\sqrt{35}}{2}x)+\frac{4\sqrt{35}}{35}\;\text{sin}\;(\frac{\sqrt{35}}{2}x)]$
b.

> IMAGE {img:fs-id1170572567820} src=../../media/CNX_Calc_Figure_17_01_203.jpg
> alt: This figure is a graph of an oscillating function. The amplitude of the graph is decreasing as x increases.

:::

:::exercise {fs-id1170572567835} type= 
PROBLEM:
(Principle of superposition) Prove that if ${y}_{1}(x)$ and ${y}_{2}(x)$ are solutions to a linear homogeneous differential equation, ${y}^{''}+p(x){y}^{'}+q(x)y=0,$ then the function $y(x)={c}_{1}{y}_{1}(x)+{c}_{2}{y}_{2}(x),$ where ${c}_{1}$ and ${c}_{2}$ are constants, is also a solution.
:::

:::exercise {fs-id1170572622303} type= 
PROBLEM:
Prove that if *a, b,* and *c* are positive constants, then all solutions to the second-order linear differential equation $a{y}^{''}+b{y}^{'}+cy=0$ approach zero as $x\to \infty \text{.}$ (*Hint:* Consider three cases: two distinct roots, repeated real roots, and complex conjugate roots.)
:::

## Glossary
- {def} **boundary conditions**: the conditions that give the state of a system at different times, such as the position of a spring-mass system at two different times
- {def} **boundary-value problem**: a differential equation with associated boundary conditions
- {def} **characteristic equation**: the equation $a{λ}^{2}+bλ+c=0$ for the differential equation $a{y}^{''}+b{y}^{'}+cy=0$
- {def} **homogeneous linear equation**: a second-order differential equation that can be written in the form ${a}_{2}(x){y}^{''}+{a}_{1}(x){y}^{'}+{a}_{0}(x)y=r(x),$ but $r(x)=0$ for every value of $x$
- {def} **nonhomogeneous linear equation**: a second-order differential equation that can be written in the form ${a}_{2}(x){y}^{''}+{a}_{1}(x){y}^{'}+{a}_{0}(x)y=r(x),$ but $r(x)≠0$ for some value of $x$
- {def} **linearly dependent**: a set of functions ${f}_{1}(x),{f}_{2}(x)\text{,…,}{f}_{n}(x)$ for which there are constants ${c}_{1},{c}_{2}\text{,…}{c}_{n},$ not all zero, such that ${c}_{1}{f}_{1}(x)+{c}_{2}{f}_{2}(x)+\text{⋯}+{c}_{n}{f}_{n}(x)=0$ for all *x* in the interval of interest
- {def} **linearly independent**: a set of functions ${f}_{1}(x),{f}_{2}(x)\text{,…,}{f}_{n}(x)$ for which there are no constants ${c}_{1},{c}_{2}\text{,…}{c}_{n},$ such that ${c}_{1}{f}_{1}(x)+{c}_{2}{f}_{2}(x)+\text{⋯}+{c}_{n}{f}_{n}(x)=0$ for all *x* in the interval of interest

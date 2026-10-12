# Nonhomogeneous Linear Equations

## Learning Objectives {section:learning-objectives}
- Write the general solution to a nonhomogeneous differential equation.
- Solve a nonhomogeneous differential equation by the method of undetermined coefficients.
- Solve a nonhomogeneous differential equation by the method of variation of parameters.

In this section, we examine how to solve nonhomogeneous differential equations. The terminology and methods are different from those we used for homogeneous equations, so let’s start by defining some new terms.

## General Solution to a Nonhomogeneous Linear Equation
Consider the nonhomogeneous linear differential equation

${a}_{2}(x){y}^{''}+{a}_{1}(x){y}^{'}+{a}_{0}(x)y=r(x).$  {eq:fs-id1170571602112}

The associated homogeneous equation

$$ {a}_{2}(x){y}^{''}+{a}_{1}(x){y}^{'}+{a}_{0}(x)y=0 $$  {eq:fs-id1170572140518}

is called the {term:complementary equation}. We will see that solving the complementary equation is an important step in solving a nonhomogeneous differential equation.

:::note [definition] Definition
A solution ${y}_{p}(x)$ of a differential equation that contains no arbitrary constants is called a {term:particular solution} to the equation.
:::

:::note [theorem] General Solution to a Nonhomogeneous Equation
Let ${y}_{p}(x)$ be any particular solution to the nonhomogeneous linear differential equation

${a}_{2}(x){y}^{''}+{a}_{1}(x){y}^{'}+{a}_{0}(x)y=r(x).$  {eq:fs-id1170571611419}

Also, let ${c}_{1}{y}_{1}(x)+{c}_{2}{y}_{2}(x)$ denote the general solution to the complementary equation. Then, the general solution to the nonhomogeneous equation is given by

$$ y(x)={c}_{1}{y}_{1}(x)+{c}_{2}{y}_{2}(x)+{y}_{p}(x\text{).} $$  {eq:fs-id1170572203905}

:::

### Proof
To prove $y(x)$ is the general solution, we must first show that it solves the differential equation and, second, that any solution to the differential equation can be written in that form. Substituting $y(x)$ into the differential equation, we have

$\begin{array}{rl}{a}_{2}(x){y}^{''}+{a}_{1}(x){y}^{'}+{a}_{0}(x)y & ={a}_{2}(x)({c}_{1}{y}_{1}+{c}_{2}{y}_{2}+{y}_{p})'' +{a}_{1}(x){({c}_{1}{y}_{1}+{c}_{2}{y}_{2}+{y}_{p})}^{'} \\ & \hspace{2em}+{a}_{0}(x)({c}_{1}{y}_{1}+{c}_{2}{y}_{2}+{y}_{p}) \\ & =[{a}_{2}(x)({c}_{1}{y}_{1}+{c}_{2}{y}_{2})'' +{a}_{1}(x){({c}_{1}{y}_{1}+{c}_{2}{y}_{2})}^{'}+{a}_{0}(x)({c}_{1}{y}_{1}+{c}_{2}{y}_{2})] \\ & \hspace{2em}+{a}_{2}(x){y}_{p}'' +{a}_{1}(x){y}_{p}{}^{'}+{a}_{0}(x){y}_{p} \\ & =0+r(x) \\ & =r(x\text{).}\end{array}$  {eq:fs-id1170572136465}

So $y(x)$ is a solution.
Now, let $z(x)$ be any solution to ${a}_{2}(x){y}^{''}+{a}_{1}(x){y}^{'}+{a}_{0}(x)y=r(x).$ Then

$\begin{array}{rl}{a}_{2}(x)(z-{y}_{p})'' +{a}_{1}(x){(z-{y}_{p})}^{'}+{a}_{0}(x)(z-{y}_{p}) & =({a}_{2}(x){z}^{''}+{a}_{1}(x){z}^{'}+{a}_{0}(x)z) \\ & \hspace{2em}-({a}_{2}(x){y}_{p}'' +{a}_{1}(x){y}_{p}{}^{'}+{a}_{0}(x){y}_{p}) \\ & =r(x)-r(x) \\ & =0,\end{array}$  {eq:fs-id1170571728794}

so $z(x)-{y}_{p}(x)$ is a solution to the complementary equation. But, ${c}_{1}{y}_{1}(x)+{c}_{2}{y}_{2}(x)$ is the general solution to the complementary equation, so there are constants ${c}_{1}$ and ${c}_{2}$ such that

$z(x)-{y}_{p}(x)={c}_{1}{y}_{1}(x)+{c}_{2}{y}_{2}(x\text{).}$  {eq:fs-id1170571690480}

Hence, we see that $z(x)={c}_{1}{y}_{1}(x)+{c}_{2}{y}_{2}(x)+{y}_{p}(x\text{).}$
□

:::example {ex:fs-id1170571688159} Verifying the General Solution

:::exercise {fs-id1170572245922} type= 
PROBLEM:
Given that ${y}_{p}(x)=x$ is a particular solution to the differential equation ${y}^{''}+y=x,$ write the general solution and check by verifying that the solution satisfies the equation.
SOLUTION:
The complementary equation is ${y}^{''}+y=0,$ which has the general solution ${c}_{1}\text{cos}\;x+{c}_{2}\text{sin}\;x\text{.}$ So, the general solution to the nonhomogeneous equation is

$y(x)={c}_{1}\text{cos}\;x+{c}_{2}\text{sin}\;x+x\text{.}$  {eq:fs-id1170572510735}

To verify that this is a solution, substitute it into the differential equation. We have

${y}^{'}(x)=\text{−}{c}_{1}\text{sin}\;x+{c}_{2}\text{cos}\;x+1\;\text{and}\;{y}^{''}(x)=\text{−}{c}_{1}\text{cos}\;x-{c}_{2}\text{sin}\;x\text{.}$  {eq:fs-id1170572505352}

Then

$\begin{array}{rl}{y}^{''}(x)+y(x) & =\text{−}{c}_{1}\text{cos}\;x-{c}_{2}\text{sin}\;x+{c}_{1}\text{cos}\;x+{c}_{2}\text{sin}\;x+x \\ & =x\text{.}\end{array}$  {eq:fs-id1170572231841}

So, $y(x)$ is a solution to ${y}^{''}+y=x\text{.}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571613873} type= 
PROBLEM:
Given that ${y}_{p}(x)=−2$ is a particular solution to ${y}^{''}-3{y}^{'}-4y=8,$ write the general solution and verify that the general solution satisfies the equation.
SOLUTION:
$y(x)={c}_{1}{e}^{\text{−}x}+{c}_{2}{e}^{4x}-2$
COMMENTARY: Hint
Find the general solution to the complementary equation.
:::
:::
In the preceding section, we learned how to solve homogeneous equations with constant coefficients. Therefore, for nonhomogeneous equations of the form $a{y}^{''}+b{y}^{'}+cy=r(x),$ we already know how to solve the complementary equation, and the problem boils down to finding a particular solution for the nonhomogeneous equation. We now examine two techniques for this: the method of undetermined coefficients and the method of variation of parameters.

## Undetermined Coefficients
The {term:method of undetermined coefficients} involves making educated guesses about the form of the particular solution based on the form of $r(x\text{).}$ When we take derivatives of polynomials, exponential functions, sines, and cosines, we get polynomials, exponential functions, sines, and cosines. So when $r(x)$ has one of these forms, it is possible that the solution to the nonhomogeneous differential equation might take that same form. Let’s look at some examples to see how this works.

:::example {ex:fs-id1170571680619} Undetermined Coefficients When $r(x)$ Is a Polynomial

:::exercise {fs-id1170572386534} type= 
PROBLEM:
Find the general solution to ${y}^{''}+4{y}^{'}+3y=3x\text{.}$
SOLUTION:
The complementary equation is ${y}^{''}+4{y}^{'}+3y=0,$ with general solution ${c}_{1}{e}^{\text{−}x}+{c}_{2}{e}^{−3x}.$ Since $r(x)=3x,$ the particular solution might have the form ${y}_{p}(x)=Ax+B\text{.}$ If this is the case, then we have ${y}_{p}{}^{'}(x)=A$ and ${y}_{p}'' (x)=0.$ For ${y}_{p}$ to be a solution to the differential equation, we must find values for $A$ and $B$ such that

$\begin{array}{rll}{y}^{''}+4{y}^{'}+3y & = & 3x \\ 0+4(A)+3(Ax+B) & = & 3x \\ 3Ax+(4A+3B) & = & 3x\text{.}\end{array}$  {eq:fs-id1170572174863}

Setting coefficients of like terms equal, we have

$\begin{array}{rll}3A & = & 3 \\ 4A+3B & = & 0.\end{array}$  {eq:fs-id1170572229434}

Then, $A=1$ and $B=-\frac{4}{3},$ so ${y}_{p}(x)=x-\frac{4}{3}$ and the general solution is

$y(x)={c}_{1}{e}^{\text{−}x}+{c}_{2}{e}^{−3x}+x-\frac{4}{3}.$  {eq:fs-id1170571654731}

:::
:::
In [ref:fs-id1170571680619], notice that even though $r(x)$ did not include a constant term, it was necessary for us to include the constant term in our guess. If we had assumed a solution of the form ${y}_{p}=Ax$ (with no constant term), we would not have been able to find a solution. (Verify this!) If the function $r(x)$ is a polynomial, our guess for the particular solution should be a polynomial of the same degree, and it must include all lower-order terms, regardless of whether they are present in $r(x\text{).}$

:::example {ex:fs-id1170572242937} Undetermined Coefficients When $r(x)$ Is an Exponential

:::exercise {fs-id1170571583254} type= 
PROBLEM:
Find the general solution to ${y}^{''}-{y}^{'}-2y=2{e}^{3x}.$
SOLUTION:
The complementary equation is ${y}^{''}-{y}^{'}-2y=0,$ with the general solution ${c}_{1}{e}^{\text{−}x}+{c}_{2}{e}^{2x}.$ Since $r(x)=2{e}^{3x},$ the particular solution might have the form ${y}_{p}(x)=A{e}^{3x}.$ Then, we have ${y}_{p}{}^{'}(x)=3A{e}^{3x}$ and ${y}_{p}'' (x)=9A{e}^{3x}.$ For ${y}_{p}$ to be a solution to the differential equation, we must find a value for $A$ such that

$\begin{array}{rll}{y}^{''}-{y}^{'}-2y & = & 2{e}^{3x} \\ 9A{e}^{3x}-3A{e}^{3x}-2A{e}^{3x} & = & 2{e}^{3x} \\ 4A{e}^{3x} & = & 2{e}^{3x}.\end{array}$  {eq:fs-id1170572141656}

So, $4A=2$ and $A=1\text{/}2.$ Then, ${y}_{p}(x)=(\frac{1}{2}){e}^{3x},$ and the general solution is

$y(x)={c}_{1}{e}^{\text{−}x}+{c}_{2}{e}^{2x}+\frac{1}{2}{e}^{3x}.$  {eq:fs-id1170572333217}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572624269} type= 
PROBLEM:
Find the general solution to ${y}^{''}-4{y}^{'}+4y=7\;\text{sin}\;t-\text{cos}\;t\text{.}$
SOLUTION:
$y(t)={c}_{1}{e}^{2t}+{c}_{2}t{e}^{2t}+\text{sin}\;t+\text{cos}\;t$
COMMENTARY: Hint
Use ${y}_{p}(t)=A\;\text{sin}\;t+B\;\text{cos}\;t$ as a guess for the particular solution.
:::
:::
In the previous checkpoint, $r(x)$ included both sine and cosine terms. However, even if $r(x)$ included a sine term only or a cosine term only, both terms must be present in the guess. The method of undetermined coefficients also works with products of polynomials, exponentials, sines, and cosines. Some of the key forms of $r(x)$ and the associated guesses for ${y}_{p}(x)$ are summarized in [ref:fs-id1170572294713].

> TABLE {tab:fs-id1170572294713} cols=2
> title: Key Forms for the Method of Undetermined Coefficients
> summary: This figure is a table with two columns and ten rows. The first column is labeled, “r(x),” and the second column is labeled, “Initial guess for yp(x).” The first row has, “k (a constant),” in the first column and, “A (a constant),” in the second column. The second row has, “ax + b,” in the first column and, “Ax + B (Note: The guess must include both terms even if b = 0.),” in the second column. The third row has, “ax^2 + bx + c,” in the first column and, “Ax^2 + Bx + C (Note: The guess must include all three terms even if b or c are zero.),” in the second column. The fourth row has, “Higher-order polynomials,” in the first column and, “Polynomial of the same order as r(x),” in the second column. The fifth row has, “ae^λx,” in the first column and, “Ae^λx,” in the second column. The sixth row has, “a cos βx + b sin βx,” in the first column and, “A cos βx + B sin βx (Note: The guess must include both terms even if either a = 0 or b = 0.),” in the second column. The seventh row has, “ae^αx cos βx + be^αx sin βx,” in the first column and, “Ae^αx cos βx + Be^αx sin βx,” in the second column. The eighth row has, “(ax^2 + bx + c)e^λx,” in the first column and, “(Ax^2 + Bx + C)e^λx,” in the second column. The ninth row has, “ (a2x^2 + a1x + a0)cos βx + (b2x^2 + b1x + b0)sin βx,” in the first column and, “(A2x^2 + A1x + A0)cos βx + (B2x^2 + B1x + B0)sin βx,” in the second column. The tenth row has, “ (a2x^2 + a1x + a0)e^αx cos βx + (b2x^2 + b1x + b0)e^αx sin βx,” in the first column and, “(A2x^2 + A1x + A0)e^αx cos βx + (B2x^2 + B1x + B0)e^αx sin βx,” in the second column.

| $r(x)$ | Initial guess for ${y}_{p}(x)$ |
| --- | --- |
| $k$ (a constant) | $A$ (a constant) |
| $ax+b$ | $Ax+B$ (*Note*: The guess must include both terms even if $b=0.$) |
| $a{x}^{2}+bx+c$ | $A{x}^{2}+Bx+C$ (*Note*: The guess must include all three terms even if $b$ or $c$ are zero.) |
| Higher-order polynomials | Polynomial of the same order as $r(x)$ |
| $a{e}^{λx}$ | $A{e}^{λx}$ |
| $a\;\text{cos}\;βx+b\;\text{sin}\;βx$ | $A\;\text{cos}\;βx+B\;\text{sin}\;βx$ (*Note*: The guess must include both terms even if either $a=0$ or $b=0.$) |
| $a{e}^{\alpha x}\text{cos}\;βx+b{e}^{\alpha x}\text{sin}\;βx$ | $A{e}^{\alpha x}\text{cos}\;βx+B{e}^{\alpha x}\text{sin}\;βx$ |
| $(a{x}^{2}+bx+c){e}^{λx}$ | $(A{x}^{2}+Bx+C){e}^{λx}$ |
| $\begin{array}{l}({a}_{2}{x}^{2}+{a}_{1}x+{a}_{0})\;\text{cos}\;βx \\ +({b}_{2}{x}^{2}+{b}_{1}x+{b}_{0})\;\text{sin}\;βx\end{array}$ | $\begin{array}{l}({A}_{2}{x}^{2}+{A}_{1}x+{A}_{0})\;\text{cos}\;βx \\ +({B}_{2}{x}^{2}+{B}_{1}x+{B}_{0})\;\text{sin}\;βx\end{array}$ |
| $\begin{array}{l}({a}_{2}{x}^{2}+{a}_{1}x+{a}_{0}){e}^{\alpha x}\text{cos}\;βx \\ +({b}_{2}{x}^{2}+{b}_{1}x+{b}_{0}){e}^{\alpha x}\text{sin}\;βx\end{array}$ | $\begin{array}{l}({A}_{2}{x}^{2}+{A}_{1}x+{A}_{0}){e}^{\alpha x}\text{cos}\;βx \\ +({B}_{2}{x}^{2}+{B}_{1}x+{B}_{0}){e}^{\alpha x}\text{sin}\;βx\end{array}$ |

Keep in mind that there is a key pitfall to this method. Consider the differential equation ${y}^{''}+5{y}^{'}+6y=3{e}^{−2x}.$ Based on the form of $r(x),$ we guess a particular solution of the form ${y}_{p}(x)=A{e}^{−2x}.$ But when we substitute this expression into the differential equation to find a value for $A,$ we run into a problem. We have

${y}_{p}{}^{'}(x)=−2A{e}^{−2x}$  {eq:fs-id1170572551869}

and

${y}_{p}'' =4A{e}^{−2x},$  {eq:fs-id1170572611806}

so we want

$\begin{array}{rll}{y}^{''}+5{y}^{'}+6y & = & 3{e}^{−2x} \\ 4A{e}^{−2x}+5(−2A{e}^{−2x})+6A{e}^{−2x} & = & 3{e}^{−2x} \\ 4A{e}^{−2x}-10A{e}^{−2x}+6A{e}^{−2x} & = & 3{e}^{−2x} \\ 0 & = & 3{e}^{−2x},\end{array}$  {eq:fs-id1170572593511}

which is not possible.
Looking closely, we see that, in this case, the general solution to the complementary equation is ${c}_{1}{e}^{−2x}+{c}_{2}{e}^{−3x}.$ The exponential function in $r(x)$ is actually a solution to the complementary equation, so, as we just saw, all the terms on the left side of the equation cancel out. We can still use the method of undetermined coefficients in this case, but we have to alter our guess by multiplying it by$x\text{.}$ Using the new guess, ${y}_{p}(x)=Ax{e}^{−2x},$ we have

${y}_{p}{}^{'}(x)=A({e}^{−2x}-2x{e}^{−2x})$  {eq:fs-id1170572247859}

and

${y}_{p}'' (x)=−4A{e}^{−2x}+4Ax{e}^{−2x}.$  {eq:fs-id1170572408342}

Substitution gives

$\begin{array}{rll}{y}^{''}+5{y}^{'}+6y & = & 3{e}^{−2x} \\ (−4A{e}^{−2x}+4Ax{e}^{−2x})+5(A{e}^{−2x}-2Ax{e}^{−2x})+6Ax{e}^{−2x} & = & 3{e}^{−2x} \\ −4A{e}^{−2x}+4Ax{e}^{−2x}+5A{e}^{−2x}-10Ax{e}^{−2x}+6Ax{e}^{−2x} & = & 3{e}^{−2x} \\ A{e}^{−2x} & = & 3{e}^{−2x}.\end{array}$  {eq:fs-id1170572454142}

So, $A=3$ and ${y}_{p}(x)=3x{e}^{−2x}.$ This gives us the following general solution

$y(x)={c}_{1}{e}^{−2x}+{c}_{2}{e}^{−3x}+3x{e}^{−2x}.$  {eq:fs-id1170571635992}

Note that if $x{e}^{−2x}$ were also a solution to the complementary equation, we would have to multiply by $x$ again, and we would try ${y}_{p}(x)=A{x}^{2}{e}^{−2x}.$

:::note [problem-solving] Method of Undetermined Coefficients
1. Solve the complementary equation and write down the general solution.
2. Based on the form of $r(x),$ make an initial guess for ${y}_{p}(x\text{).}$
3. Check whether any term in the guess for ${y}_{p}(x)$ is a solution to the complementary equation. If so, multiply the guess by$x\text{.}$ Repeat this step until there are no terms in ${y}_{p}(x)$ that solve the complementary equation.
4. Substitute ${y}_{p}(x)$ into the differential equation and equate like terms to find values for the unknown coefficients in ${y}_{p}(x\text{).}$
5. Add the general solution to the complementary equation and the particular solution you just found to obtain the general solution to the nonhomogeneous equation.
:::

:::example {ex:fs-id1170571829491} Solving Nonhomogeneous Equations

:::exercise {fs-id1170571829493} type= 
PROBLEM:
Find the general solutions to the following differential equations.
a. ${y}^{''}-9y=−6\;\text{cos}\;3x$
b. ${x}^{''}+2{x}^{'}+x=4{e}^{\text{−}t}$
c. ${y}^{''}-2{y}^{'}+5y=10{x}^{2}-3x-3$
d. ${y}^{''}-3{y}^{'}=−12t$
SOLUTION:
a. The complementary equation is ${y}^{''}-9y=0,$ which has the general solution ${c}_{1}{e}^{3x}+{c}_{2}{e}^{−3x}$ (step 1). Based on the form of $r(x)=−6\;\text{cos}\;3x,$ our initial guess for the particular solution is ${y}_{p}(x)=A\;\text{cos}\;3x+B\;\text{sin}\;3x$ (step 2). None of the terms in ${y}_{p}(x)$ solve the complementary equation, so this is a valid guess (step 3).

Now we want to find values for $A$ and $B,$ so substitute ${y}_{p}$ into the differential equation. We have

${y}_{p}{}^{'}(x)=−3A\;\text{sin}\;3x+3B\;\text{cos}\;3x\;\text{and}\;{y}_{p}'' (x)=−9A\;\text{cos}\;3x-9B\;\text{sin}\;3x,$  {eq:fs-id1170571658769}

so we want to find values of $A$ and $B$ such that

$\begin{array}{rll}{y}^{''}-9y & = & −6\;\text{cos}\;3x \\ −9A\;\text{cos}\;3x-9B\;\text{sin}\;3x-9(A\;\text{cos}\;3x+B\;\text{sin}\;3x) & = & −6\;\text{cos}\;3x \\ −18A\;\text{cos}\;3x-18B\;\text{sin}\;3x & = & −6\;\text{cos}\;3x\text{.}\end{array}$  {eq:fs-id1170572592197}

Therefore,

$\begin{array}{rll}−18A & = & −6 \\ −18B & = & 0.\end{array}$  {eq:fs-id1170572237440}

This gives $A=\frac{1}{3}$ and $B=0,$ so ${y}_{p}(x)=(\frac{1}{3})\;\text{cos}\;3x$ (step 4).

Putting everything together, we have the general solution

$y(x)={c}_{1}{e}^{3x}+{c}_{2}{e}^{−3x}+\frac{1}{3}\;\text{cos}\;3x\text{.}$  {eq:fs-id1170571600654}

b. The complementary equation is ${x}^{''}+2{x}^{'}+x=0,$ which has the general solution ${c}_{1}{e}^{\text{−}t}+{c}_{2}t{e}^{\text{−}t}$ (step 1). Based on the form $r(t)=4{e}^{\text{−}t},$ our initial guess for the particular solution is ${x}_{p}(t)=A{e}^{\text{−}t}$ (step 2). However, we see that this guess solves the complementary equation, so we must multiply by$t,$ which gives a new guess: ${x}_{p}(t)=At{e}^{\text{−}t}$ (step 3). Checking this new guess, we see that it, too, solves the complementary equation, so we must multiply by *t* again, which gives ${x}_{p}(t)=A{t}^{2}{e}^{\text{−}t}$ (step 3 again). Now, checking this guess, we see that ${x}_{p}(t)$ does not solve the complementary equation, so this is a valid guess (step 3 yet again).

We now want to find a value for $A,$ so we substitute ${x}_{p}$ into the differential equation. We have

$\begin{array}{rll}{x}_{p}(t) & = & A{t}^{2}{e}^{\text{−}t},\;\text{so} \\ {x}_{p}{}^{'}(t) & = & 2At{e}^{\text{−}t}-A{t}^{2}{e}^{\text{−}t}\end{array}$  {eq:fs-id1170571823157}

and ${x}_{p}'' (t)=2A{e}^{\text{−}t}-2At{e}^{\text{−}t}-(2At{e}^{\text{−}t}-A{t}^{2}{e}^{\text{−}t})=2A{e}^{\text{−}t}-4At{e}^{\text{−}t}+A{t}^{2}{e}^{\text{−}t}.$

Substituting into the differential equation, we want to find a value of $A$ so that

$\begin{array}{rll}{x}^{''}+2{x}^{'}+x & = & 4{e}^{\text{−}t} \\ 2A{e}^{\text{−}t}-4At{e}^{\text{−}t}+A{t}^{2}{e}^{\text{−}t}+2(2At{e}^{\text{−}t}-A{t}^{2}{e}^{\text{−}t})+A{t}^{2}{e}^{\text{−}t} & = & 4{e}^{\text{−}t} \\ 2A{e}^{\text{−}t} & = & 4{e}^{\text{−}t}.\end{array}$  {eq:fs-id1170571715359}

This gives $A=2,$ so ${x}_{p}(t)=2{t}^{2}{e}^{\text{−}t}$ (step 4). Putting everything together, we have the general solution

$x(t)={c}_{1}{e}^{\text{−}t}+{c}_{2}t{e}^{\text{−}t}+2{t}^{2}{e}^{\text{−}t}.$  {eq:fs-id1170572512290}

c. The complementary equation is ${y}^{''}-2{y}^{'}+5y=0,$ which has the general solution ${c}_{1}{e}^{x}\text{cos}\;2x+{c}_{2}{e}^{x}\text{sin}\;2x$ (step 1). Based on the form $r(x)=10{x}^{2}-3x-3,$ our initial guess for the particular solution is ${y}_{p}(x)=A{x}^{2}+Bx+C$ (step 2). None of the terms in ${y}_{p}(x)$ solve the complementary equation, so this is a valid guess (step 3). We now want to find values for $A,$ $B,$ and $C,$ so we substitute ${y}_{p}$ into the differential equation. We have ${y}_{p}{}^{'}(x)=2Ax+B$ and ${y}_{p}'' (x)=2A,$ so we want to find values of $A,$ $B,$ and $C$ such that

$\begin{array}{rll}{y}^{''}-2{y}^{'}+5y & = & 10{x}^{2}-3x-3 \\ 2A-2(2Ax+B)+5(A{x}^{2}+Bx+C) & = & 10{x}^{2}-3x-3 \\ 5A{x}^{2}+(5B-4A)x+(5C-2B+2A) & = & 10{x}^{2}-3x-3.\end{array}$  {eq:fs-id1170572167504}

Therefore,

$\begin{array}{rll}5A & = & 10 \\ 5B-4A & = & −3 \\ 5C-2B+2A & = & −3.\end{array}$  {eq:fs-id1170572417910}

This gives $A=2,$ $B=1,$ and $C=−1,$ so ${y}_{p}(x)=2{x}^{2}+x-1$ (step 4). Putting everything together, we have the general solution

$y(x)={c}_{1}{e}^{x}\text{cos}\;2x+{c}_{2}{e}^{x}\text{sin}\;2x+2{x}^{2}+x-1.$  {eq:fs-id1170572146979}

d. The complementary equation is ${y}^{''}-3{y}^{'}=0,$ which has the general solution ${c}_{1}{e}^{3t}+{c}_{2}$ (step 1). Based on the form $r(t)=−12t,$ our initial guess for the particular solution is ${y}_{p}(t)=At+B$ (step 2). However, we see that the constant term in this guess solves the complementary equation, so we must multiply by $t,$ which gives a new guess: ${y}_{p}(t)=A{t}^{2}+Bt$ (step 3). Checking this new guess, we see that none of the terms in ${y}_{p}(t)$ solve the complementary equation, so this is a valid guess (step 3 again). We now want to find values for $A$ and $B,$ so we substitute ${y}_{p}$ into the differential equation. We have ${y}_{p}{}^{'}(t)=2At+B$ and ${y}_{p}'' (t)=2A,$ so we want to find values of $A$ and $B$ such that

$\begin{array}{rll}{y}^{''}-3{y}^{'} & = & −12t \\ 2A-3(2At+B) & = & −12t \\ -6At+(2A-3B) & = & −12t\text{.}\end{array}$  {eq:fs-id1170571635304}

Therefore,

$\begin{array}{rll}−6A & = & −12 \\ 2A-3B & = & 0.\end{array}$  {eq:fs-id1170572183880}

This gives $A=2$ and $B=4\text{/}3,$ so ${y}_{p}(t)=2{t}^{2}+(4\text{/}3)t$ (step 4). Putting everything together, we have the general solution

$y(t)={c}_{1}{e}^{3t}+{c}_{2}+2{t}^{2}+\frac{4}{3}t\text{.}$  {eq:fs-id1170571560082}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571715420} type= 
PROBLEM:
Find the general solution to the following differential equations.
a. ${y}^{''}-5{y}^{'}+4y=3{e}^{x}$
b. ${y}^{''}+{y}^{'}-6y=52\;\text{cos}\;2t$
SOLUTION:
a. $y(x)={c}_{1}{e}^{4x}+{c}_{2}{e}^{x}-x{e}^{x}$
b. $y(t)={c}_{1}{e}^{−3t}+{c}_{2}{e}^{2t}-5\;\text{cos}\;2t+\text{sin}\;2t$
COMMENTARY: Hint
Use the problem-solving strategy.
:::
:::

## Variation of Parameters
Sometimes, $r(x)$ is not a combination of polynomials, exponentials, or sines and cosines. When this is the case, the method of undetermined coefficients does not work, and we have to use another approach to find a particular solution to the differential equation. We use an approach called the {term:method of variation of parameters}.
To simplify our calculations a little, we are going to divide the differential equation through by $a,$ so we have a leading coefficient of 1. Then the differential equation has the form

${y}^{''}+p{y}^{'}+qy=r(x),$  {eq:fs-id1170572604296}

where $p$ and $q$ are constants.
If the general solution to the complementary equation is given by ${c}_{1}{y}_{1}(x)+{c}_{2}{y}_{2}(x),$ we are going to look for a particular solution of the form ${y}_{p}(x)=u(x){y}_{1}(x)+v(x){y}_{2}(x\text{).}$ In this case, we use the two linearly independent solutions to the complementary equation to form our particular solution. However, we are assuming the coefficients are functions of *x*, rather than constants. We want to find functions $u(x)$ and $v(x)$ such that ${y}_{p}(x)$ satisfies the differential equation. We have

$\begin{array}{rll}{y}_{p} & = & u{y}_{1}+v{y}_{2} \\ {y}_{p}{}^{'} & = & {u}^{'}{y}_{1}+u{y}_{1}{}^{'}+{v}^{'}{y}_{2}+v{y}_{2}{}^{'} \\ {y}_{p}'' & = & {({u}^{'}{y}_{1}+{v}^{'}{y}_{2})}^{'}+{u}^{'}{y}_{1}{}^{'}+u{y}_{1}'' +{v}^{'}{y}_{2}{}^{'}+v{y}_{2}'' \text{.}\end{array}$  {eq:fs-id1170571642073}

Substituting into the differential equation, we obtain

$\begin{array}{rl}{y}_{p}'' +p{y}_{p}{}^{'}+q{y}_{p} & =[{({u}^{'}{y}_{1}+{v}^{'}{y}_{2})}^{'}+{u}^{'}{y}_{1}{}^{'}+u{y}_{1}'' +{v}^{'}{y}_{2}{}^{'}+v{y}_{2}'' ] \\ & \hspace{2em}+p[{u}^{'}{y}_{1}+u{y}_{1}{}^{'}+{v}^{'}{y}_{2}+v{y}_{2}{}^{'}]+q[u{y}_{1}+v{y}_{2}] \\ & =u[{y}_{1}'' +p{y}_{1}{}^{'}+q{y}_{1}]+v[{y}_{2}'' +p{y}_{2}{}^{'}+q{y}_{2}] \\ & \hspace{2em}+{({u}^{'}{y}_{1}+{v}^{'}{y}_{2})}^{'}+p({u}^{'}{y}_{1}+{v}^{'}{y}_{2})+({u}^{'}{y}_{1}{}^{'}+{v}^{'}{y}_{2}{}^{'}).\end{array}$  {eq:fs-id1170571813798}

Note that ${y}_{1}$ and ${y}_{2}$ are solutions to the complementary equation, so the first two terms are zero. Thus, we have

${({u}^{'}{y}_{1}+{v}^{'}{y}_{2})}^{'}+p({u}^{'}{y}_{1}+{v}^{'}{y}_{2})+({u}^{'}{y}_{1}{}^{'}+{v}^{'}{y}_{2}{}^{'})=r(x\text{).}$  {eq:fs-id1170572185052}

If we simplify this equation by imposing the additional condition ${u}^{'}{y}_{1}+{v}^{'}{y}_{2}=0,$ the first two terms are zero, and this reduces to ${u}^{'}{y}_{1}{}^{'}+{v}^{'}{y}_{2}{}^{'}=r(x\text{).}$ So, with this additional condition, we have a system of two equations in two unknowns:

$\begin{array}{rll}{u}^{'}{y}_{1}+{v}^{'}{y}_{2} & = & 0 \\ {u}^{'}{y}_{1}{}^{'}+{v}^{'}{y}_{2}{}^{'} & = & r(x\text{).}\end{array}$  {eq:fs-id1170571629672}

Solving this system gives us ${u}^{'}$ and ${v}^{'},$ which we can integrate to find *u* and *v*.
Then, ${y}_{p}(x)=u(x){y}_{1}(x)+v(x){y}_{2}(x)$ is a particular solution to the differential equation. Solving this system of equations is sometimes challenging, so let’s take this opportunity to review Cramer’s rule, which allows us to solve the system of equations using determinants.

:::note [rule] Rule: Cramer’s Rule
The system of equations

$\begin{array}{rll}{a}_{1}{z}_{1}+{b}_{1}{z}_{2} & = & {r}_{1} \\ {a}_{2}{z}_{1}+{b}_{2}{z}_{2} & = & {r}_{2}\end{array}$  {eq:fs-id1170572548192}

has a unique solution if and only if the determinant of the coefficients is not zero. In this case, the solution is given by

${z}_{1}=\frac{|\begin{array}{ll}{r}_{1} & {b}_{1} \\ {r}_{2} & {b}_{2}\end{array}|}{|\begin{array}{ll}{a}_{1} & {b}_{1} \\ {a}_{2} & {b}_{2}\end{array}|}\hspace{2em}\text{and}\hspace{2em}{z}_{2}=\frac{|\begin{array}{ll}{a}_{1} & {r}_{1} \\ {a}_{2} & {r}_{2}\end{array}|}{|\begin{array}{ll}{a}_{1} & {b}_{1} \\ {a}_{2} & {b}_{2}\end{array}|}.$  {eq:fs-id1170572387644}

:::

:::example {ex:fs-id1170572504518} Using Cramer’s Rule

:::exercise {fs-id1170572504521} type= 
PROBLEM:
Use Cramer’s rule to solve the following system of equations.

$\begin{array}{rll}{x}^{2}{z}_{1}+2x{z}_{2} & = & 0 \\ {z}_{1}-3{x}^{2}{z}_{2} & = & 2x\end{array}$  {eq:fs-id1170572504533}

SOLUTION:
We have

$\begin{array}{rll} \\ \\ {a}_{1}(x) & = & {x}^{2} \\ {a}_{2}(x) & = & 1 \\ {b}_{1}(x) & = & 2x \\ {b}_{2}(x) & = & −3{x}^{2} \\ {r}_{1}(x) & = & 0 \\ {r}_{2}(x) & = & 2x\text{.}\end{array}$  {eq:fs-id1170572116385}

Then,

$|\begin{array}{ll}{a}_{1} & {b}_{1} \\ {a}_{2} & {b}_{2}\end{array}|=|\begin{array}{ll}{x}^{2} & \;2x \\ 1 & −3{x}^{2}\end{array}|=−3{x}^{4}-2x$  {eq:fs-id1170571748975}

and

$|\begin{array}{ll}{r}_{1} & {b}_{1} \\ {r}_{2} & {b}_{2}\end{array}|=|\begin{array}{ll}0 & \;2x \\ 2x & −3{x}^{2}\end{array}|=0-4{x}^{2}=−4{x}^{2}.$  {eq:fs-id1170572088610}

Thus,

${z}_{1}=\frac{|\begin{array}{ll}{r}_{1} & {b}_{1} \\ {r}_{2} & {b}_{2}\end{array}|}{|\begin{array}{ll}{a}_{1} & {b}_{1} \\ {a}_{2} & {b}_{2}\end{array}|}=\frac{−4{x}^{2}}{−3{x}^{4}-2x}=\frac{4x}{3{x}^{3}+2}.$  {eq:fs-id1170571688226}

In addition,

$|\begin{array}{ll}{a}_{1} & {r}_{1} \\ {a}_{2} & {r}_{2}\end{array}|=|\begin{array}{ll}{x}^{2} & 0 \\ 1 & 2x\end{array}|=2{x}^{3}-0=2{x}^{3}.$  {eq:fs-id1170571611313}

Thus,

${z}_{2}=\frac{|\begin{array}{ll}{a}_{1} & {r}_{1} \\ {a}_{2} & {r}_{2}\end{array}|}{|\begin{array}{ll}{a}_{1} & {b}_{1} \\ {a}_{2} & {b}_{2}\end{array}|}=\frac{2{x}^{3}}{−3{x}^{4}-2x}=\frac{−2{x}^{2}}{3{x}^{3}+2}.$  {eq:fs-id1170572330222}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571553656} type= 
PROBLEM:
Use Cramer’s rule to solve the following system of equations.

$\begin{array}{rll}2x{z}_{1}-3{z}_{2} & = & 0 \\ {x}^{2}{z}_{1}+4x{z}_{2} & = & x+1\end{array}$  {eq:fs-id1170571553665}

SOLUTION:
${z}_{1}=\frac{3x+3}{11{x}^{2}},$ ${z}_{2}=\frac{2x+2}{11x}$
COMMENTARY: Hint
Use the process from the previous example.
:::
:::

:::note [problem-solving] Method of Variation of Parameters
1. Solve the complementary equation and write down the general solution

${c}_{1}{y}_{1}(x)+{c}_{2}{y}_{2}(x\text{).}$  {eq:fs-id1170571789098}

2. Use Cramer’s rule or another suitable technique to find functions ${u}^{'}(x)$ and ${v}^{'}(x)$ satisfying

$\begin{array}{rll}{u}^{'}{y}_{1}+{v}^{'}{y}_{2} & = & 0 \\ {u}^{'}{y}_{1}{}^{'}+{v}^{'}{y}_{2}{}^{'} & = & r(x\text{).}\end{array}$  {eq:fs-id1170572309755}

3. Integrate ${u}^{'}$ and ${v}^{'}$ to find $u(x)$ and $v(x\text{).}$ Then, ${y}_{p}(x)=u(x){y}_{1}(x)+v(x){y}_{2}(x)$ is a particular solution to the equation.
4. Add the general solution to the complementary equation and the particular solution found in step 3 to obtain the general solution to the nonhomogeneous equation.
:::

:::example {ex:fs-id1170571823244} Using the Method of Variation of Parameters

:::exercise {fs-id1170571823246} type= 
PROBLEM:
Find the general solution to the following differential equations.
a. ${y}^{''}-2{y}^{'}+y=\frac{{e}^{t}}{{t}^{2}}$
b. ${y}^{''}+y=3\;{\text{sin}}^{2}x$
SOLUTION:
a. The complementary equation is ${y}^{''}-2{y}^{'}+y=0$ with associated general solution ${c}_{1}{e}^{t}+{c}_{2}t{e}^{t}.$ Therefore, ${y}_{1}(t)={e}^{t}$ and ${y}_{2}(t)=t{e}^{t}.$ Calculating the derivatives, we get ${y}_{1}{}^{'}(t)={e}^{t}$ and ${y}_{2}{}^{'}(t)={e}^{t}+t{e}^{t}$ (step 1). Then, we want to find functions ${u}^{'}(t)$ and ${v}^{'}(t)$ so that

$\begin{array}{rll}{u}^{'}{e}^{t}+{v}^{'}t{e}^{t} & = & 0 \\ {u}^{'}{e}^{t}+{v}^{'}({e}^{t}+t{e}^{t}) & = & \frac{{e}^{t}}{{t}^{2}}.\end{array}$  {eq:fs-id1170572306406}

Applying Cramer’s rule, we have

${u}^{'}=\frac{|\begin{array}{lc}0 & t{e}^{t} \\ \frac{{e}^{t}}{{t}^{2}} & {e}^{t}+t{e}^{t}\end{array}|}{|\begin{array}{lc}{e}^{t} & t{e}^{t} \\ {e}^{t} & {e}^{t}+t{e}^{t}\end{array}|}=\frac{0-t{e}^{t}(\frac{{e}^{t}}{{t}^{2}})}{{e}^{t}({e}^{t}+t{e}^{t})-{e}^{t}t{e}^{t}}=\frac{-\frac{{e}^{2t}}{t}}{{e}^{2t}}=-\frac{1}{t}$  {eq:fs-id1170572598653}

and

${v}^{'}=\frac{|\begin{array}{ll}{e}^{t} & 0 \\ {e}^{t} & \frac{{e}^{t}}{{t}^{2}}\end{array}|}{|\begin{array}{lc}{e}^{t} & t{e}^{t} \\ {e}^{t} & {e}^{t}+t{e}^{t}\end{array}|}=\frac{{e}^{t}(\frac{{e}^{t}}{{t}^{2}})}{{e}^{2t}}=\frac{1}{{t}^{2}}\;\text{(step 2).}$  {eq:fs-id1170572296671}

Integrating, we get

$\begin{array}{l} \\ \\ u=\text{−}{\displaystyle \int \frac{1}{t}dt}=\text{−}\text{ln}|t| \\ v={\displaystyle \int \frac{1}{{t}^{2}}}dt=-\frac{1}{t}\;\text{(step 3).}\end{array}$  {eq:fs-id1170572480438}

Then we have

$\begin{array}{rl}{y}_{p} & =\text{−}{e}^{t}\text{ln}|t|-\frac{1}{t}t{e}^{t} \\ & =\text{−}{e}^{t}\text{ln}|t|-{e}^{t}\;\text{(step 4).}\end{array}$  {eq:fs-id1170572296491}

The ${e}^{t}$ term is a solution to the complementary equation, so we don’t need to carry that term into our general solution explicitly. The general solution is

$y(t)={c}_{1}{e}^{t}+{c}_{2}t{e}^{t}-{e}^{t}\text{ln}|t|\;\text{(step 5).}$  {eq:fs-id1170572624732}

b. The complementary equation is ${y}^{''}+y=0$ with associated general solution ${c}_{1}\text{cos}\;x+{c}_{2}\text{sin}\;x\text{.}$ So, ${y}_{1}(x)=\text{cos}\;x$ and ${y}_{2}(x)=\text{sin}\;x$ (step 1). Then, we want to find functions ${u}^{'}(x)$ and ${v}^{'}(x)$ such that

$\begin{array}{lll}{u}^{'}\text{cos}\;x+{v}^{'}\text{sin}\;x & = & 0 \\ \text{−}{u}^{'}\text{sin}\;x+{v}^{'}\text{cos}\;x & = & 3\;{\text{sin}}^{2}x\text{.}\end{array}$  {eq:fs-id1170571639138}

Applying Cramer’s rule, we have

${u}^{'}=\frac{|\begin{array}{cl}0 & \text{sin}\;x \\ 3\;{\text{sin}}^{2}x & \text{cos}\;x\end{array}|}{|\begin{array}{ll}\text{cos}\;x & \text{sin}\;x \\ \text{−}\text{sin}\;x & \text{cos}\;x\end{array}|}=\frac{0-3\;{\text{sin}}^{3}x}{{\text{cos}}^{2}x+{\text{sin}}^{2}x}=−3\;{\text{sin}}^{3}x$  {eq:fs-id1170571639232}

and

${v}^{'}=\frac{|\begin{array}{lc}\text{cos}\;x & 0 \\ \text{−}\text{sin}\;x & 3\;{\text{sin}}^{2}x\end{array}|}{|\begin{array}{ll}\text{cos}\;x & \text{sin}\;x \\ \text{−}\text{sin}\;x & \text{cos}\;x\end{array}|}=\frac{3\;{\text{sin}}^{2}x\;\text{cos}\;x}{1}=3\;{\text{sin}}^{2}x\;\text{cos}\;x\;\text{(step 2).}$  {eq:fs-id1170572218499}

Integrating first to find *u*, we get

$u={\displaystyle \int −3\;{\text{sin}}^{3}x}dx=−3[\text{−}\frac{1}{3}{\text{sin}}^{2}x\;\text{cos}\;x+\frac{2}{3}{\displaystyle \int \text{sin}\;x}dx]={\text{sin}}^{2}x\;\text{cos}\;x+2\;\text{cos}\;x\text{.}$  {eq:fs-id1170571712858}

Now, we integrate to find *v*. Using substitution (with $w=\text{sin}\;x$), we get

$v={\displaystyle \int 3\;{\text{sin}}^{2}x\;\text{cos}\;xdx}={\displaystyle \int 3}{w}^{2}dw={w}^{3}={\text{sin}}^{3}x\text{.}$  {eq:fs-id1170571700375}

Then,

$\begin{array}{rl}{y}_{p} & =({\text{sin}}^{2}x\;\text{cos}\;x+2\;\text{cos}\;x)\;\text{cos}\;x+({\text{sin}}^{3}x)\;\text{sin}\;x \\ & ={\text{sin}}^{2}x\;{\text{cos}}^{2}x+2\;{\text{cos}}^{2}x+{\text{sin}}^{4}x \\ & =2\;{\text{cos}}^{2}x+{\text{sin}}^{2}x({\text{cos}}^{2}x+{\text{sin}}^{2}x)\hspace{2em}\text{(step 3).} \\ & =2\;{\text{cos}}^{2}x+{\text{sin}}^{2}x \\ & ={\text{cos}}^{2}x+1\end{array}$  {eq:fs-id1170572420062}

The general solution is

$y(x)={c}_{1}\text{cos}\;x+{c}_{2}\text{sin}\;x+1+{\text{cos}}^{2}x\;\text{(step 4).}$  {eq:fs-id1170572223540}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572554229} type= 
PROBLEM:
Find the general solution to the following differential equations.
a. ${y}^{''}+y=\text{sec}\;x$
b. ${x}^{''}-2{x}^{'}+x=\frac{{e}^{t}}{t}$
SOLUTION:
a. $y(x)={c}_{1}\text{cos}\;x+{c}_{2}\text{sin}\;x+\text{cos}\;x\;\text{ln}|\text{cos}\;x|+x\;\text{sin}\;x$
b. $x(t)={c}_{1}{e}^{t}+{c}_{2}t{e}^{t}+t{e}^{t}\text{ln}|t|$
COMMENTARY: Hint
Follow the problem-solving strategy.
:::
:::

## Key Concepts {section:key-concepts}
- To solve a nonhomogeneous linear second-order differential equation, first find the general solution to the complementary equation, then find a particular solution to the nonhomogeneous equation.
- Let ${y}_{p}(x)$ be any particular solution to the nonhomogeneous linear differential equation

${a}_{2}(x){y}^{''}+{a}_{1}(x){y}^{'}+{a}_{0}(x)y=r(x),$  {eq:fs-id1170571531400}

and let ${c}_{1}{y}_{1}(x)+{c}_{2}{y}_{2}(x)$ denote the general solution to the complementary equation. Then, the general solution to the nonhomogeneous equation is given by

$y(x)={c}_{1}{y}_{1}(x)+{c}_{2}{y}_{2}(x)+{y}_{p}(x\text{).}$  {eq:fs-id1170571538273}

- When $r(x)$ is a combination of polynomials, exponential functions, sines, and cosines, use the method of undetermined coefficients to find the particular solution. To use this method, assume a solution in the same form as $r(x),$ multiplying by *x* as necessary until the assumed solution is linearly independent of the general solution to the complementary equation. Then, substitute the assumed solution into the differential equation to find values for the coefficients.
- When $r(x)$ is *not* a combination of polynomials, exponential functions, or sines and cosines, use the method of variation of parameters to find the particular solution. This method involves using Cramer’s rule or another suitable technique to find functions ${u}^{'}(x)$ and ${v}^{'}(x)$ satisfying

$\begin{array}{rll}{u}^{'}{y}_{1}+{v}^{'}{y}_{2} & = & 0 \\ {u}^{'}{y}_{1}{}^{'}+{v}^{'}{y}_{2}{}^{'} & = & r(x\text{).}\end{array}$  {eq:fs-id1170572627076}

Then, ${y}_{p}(x)=u(x){y}_{1}(x)+v(x){y}_{2}(x)$ is a particular solution to the differential equation.

## Key Equations {section:key-equations}

> TABLE {tab:eip-565} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Complementary equation** | ${a}_{2}(x){y}^{''}+{a}_{1}(x){y}^{'}+{a}_{0}(x)y=0$ |
| **General solution to a nonhomogeneous linear differential equation** | $y(x)={c}_{1}{y}_{1}(x)+{c}_{2}{y}_{2}(x)+{y}_{p}(x)$ |

##  {section:section-exercises}
Solve the following equations using the method of undetermined coefficients.

:::exercise {fs-id1170572516777} type= 
PROBLEM:
$2{y}^{''}-5{y}^{'}-12y=6$
:::

:::exercise {fs-id1170572516869} type= 
PROBLEM:
$3{y}^{''}+{y}^{'}-4y=8$
SOLUTION:
$y={c}_{1}{e}^{−4x\text{/}3}+{c}_{2}{e}^{x}-2$
:::

:::exercise {fs-id1170572290271} type= 
PROBLEM:
${y}^{''}-6{y}^{'}+5y={e}^{\text{−}x}$
:::

:::exercise {fs-id1170572373530} type= 
PROBLEM:
${y}^{''}+16y={e}^{−2x}$
SOLUTION:
$y={c}_{1}\text{cos}\;4x+{c}_{2}\text{sin}\;4x+\frac{1}{20}{e}^{−2x}$
:::

:::exercise {fs-id1170572292352} type= 
PROBLEM:
${y}^{''}-4y={x}^{2}+1$
:::

:::exercise {fs-id1170572332661} type= 
PROBLEM:
${y}^{''}-4{y}^{'}+4y=8{x}^{2}+4x$
SOLUTION:
$y={c}_{1}{e}^{2x}+{c}_{2}x{e}^{2x}+2{x}^{2}+5x+4$
:::

:::exercise {fs-id1170572332769} type= 
PROBLEM:
${y}^{''}-2{y}^{'}-3y=\text{sin}\;2x$
:::

:::exercise {fs-id1170572416737} type= 
PROBLEM:
${y}^{''}+2{y}^{'}+y=\text{sin}\;x+\text{cos}\;x$
SOLUTION:
$y={c}_{1}{e}^{\text{−}x}+{c}_{2}x{e}^{\text{−}x}+\frac{1}{2}\;\text{sin}\;x-\frac{1}{2}\;\text{cos}\;x$
:::

:::exercise {fs-id1170571652284} type= 
PROBLEM:
${y}^{''}+9y={e}^{x}\text{cos}\;x$
:::

:::exercise {fs-id1170572443463} type= 
PROBLEM:
${y}^{''}+y=3\;\text{sin}\;2x+x\;\text{cos}\;2x$
SOLUTION:
$y={c}_{1}\text{cos}\;x+{c}_{2}\text{sin}\;x-\frac{1}{3}x\;\text{cos}\;2x-\frac{5}{9}\;\text{sin}\;2x$
:::

:::exercise {fs-id1170571673530} type= 
PROBLEM:
${y}^{''}+3{y}^{'}-28y=10{e}^{4x}$
:::

:::exercise {fs-id1170571673637} type= 
PROBLEM:
${y}^{''}+10{y}^{'}+25y=x{e}^{−5x}+4$
SOLUTION:
$y={c}_{1}{e}^{−5x}+{c}_{2}x{e}^{−5x}+\frac{1}{6}{x}^{3}{e}^{−5x}+\frac{4}{25}$
:::
In each of the following problems,
a. Write the form for the particular solution ${y}_{p}(x)$ for the method of undetermined coefficients.
b. **[T]** Use a computer algebra system to find a particular solution to the given equation.

:::exercise {fs-id1170572604476} type= 
PROBLEM:
${y}^{''}-{y}^{'}-y=x+{e}^{\text{−}x}$
:::

:::exercise {fs-id1170571548589} type= 
PROBLEM:
${y}^{''}-3y={x}^{2}-4x+11$
SOLUTION:
a. ${y}_{p}(x)=A{x}^{2}+Bx+C$
b. ${y}_{p}(x)=-\frac{1}{3}{x}^{2}+\frac{4}{3}x-\frac{35}{9}$
:::

:::exercise {fs-id1170572425145} type= 
PROBLEM:
${y}^{''}-{y}^{'}-4y={e}^{x}\text{cos}\;3x$
:::

:::exercise {fs-id1170572290176} type= 
PROBLEM:
$2{y}^{''}-{y}^{'}+y=({x}^{2}-5x){e}^{\text{−}x}$
SOLUTION:
a. ${y}_{p}(x)=(A{x}^{2}+Bx+C){e}^{\text{−}x}$
b. ${y}_{p}(x)=(\frac{1}{4}{x}^{2}-\frac{5}{8}x-\frac{33}{32}){e}^{\text{−}x}$
:::

:::exercise {fs-id1170572372023} type= 
PROBLEM:
$4{y}^{''}+5{y}^{'}-2y={e}^{2x}+x\;\text{sin}\;x$
:::

:::exercise {fs-id1170572309595} type= 
PROBLEM:
${y}^{''}-{y}^{'}-2y={x}^{2}{e}^{x}\text{sin}\;x$
SOLUTION:
a. ${y}_{p}(x)=(A{x}^{2}+Bx+C){e}^{x}\text{cos}\;x$ $+(D{x}^{2}+Ex+F){e}^{x}\text{sin}\;x$
b. ${y}_{p}(x)=(-\frac{1}{10}{x}^{2}-\frac{11}{25}x-\frac{27}{250}){e}^{x}\text{cos}\;x$ $+(-\frac{3}{10}{x}^{2}+\frac{2}{25}x+\frac{39}{250}){e}^{x}\text{sin}\;x$
:::
Solve the differential equation using either the method of undetermined coefficients or the variation of parameters.

:::exercise {fs-id1170572368535} type= 
PROBLEM:
${y}^{''}+3{y}^{'}-4y=2{e}^{x}$
:::

:::exercise {fs-id1170572560214} type= 
PROBLEM:
${y}^{''}+2{y}^{'}={e}^{3x}$
SOLUTION:
$y={c}_{1}+{c}_{2}{e}^{−2x}+\frac{1}{15}{e}^{3x}$
:::

:::exercise {fs-id1170572306886} type= 
PROBLEM:
${y}^{''}+6{y}^{'}+9y={e}^{\text{−}x}$
:::

:::exercise {fs-id1170572306989} type= 
PROBLEM:
${y}^{''}+2{y}^{'}-8y=6{e}^{2x}$
SOLUTION:
$y={c}_{1}{e}^{2x}+{c}_{2}{e}^{−4x}+x{e}^{2x}$
:::
Solve the differential equation using the method of variation of parameters.

:::exercise {fs-id1170571547443} type= 
PROBLEM:
$4{y}^{''}+y=2\;\text{sin}\;x$
:::

:::exercise {fs-id1170572088761} type= 
PROBLEM:
${y}^{''}-9y=8x$
SOLUTION:
$y={c}_{1}{e}^{3x}+{c}_{2}{e}^{−3x}-\frac{8x}{9}$
:::

:::exercise {fs-id1170572383719} type= 
PROBLEM:
${y}^{''}+y=\text{sec}\;x,\hspace{2em}0<x<\pi \text{/}2$
:::

:::exercise {fs-id1170571600159} type= 
PROBLEM:
${y}^{''}+4y=3\;\text{csc}\;2x,\;0<x<\pi \text{/}2$
SOLUTION:
$y={c}_{1}\text{cos}\;2x+{c}_{2}\text{sin}\;2x-\frac{3}{2}x\;\text{cos}\;2x+\frac{3}{4}\;\text{sin}\;2x\;\text{ln}\;(\text{sin}\;2x)$
:::
Find the unique solution satisfying the differential equation and the initial conditions given, where ${y}_{p}(x)$ is the particular solution.

:::exercise {fs-id1170571781104} type= 
PROBLEM:
${y}^{''}-2{y}^{'}+y=12{e}^{x},$ ${\text{y}}_{p}(x)=6{x}^{2}{e}^{x},$ $y(0)=6,\; \;y'(0)=0$
:::

:::exercise {fs-id1170572605368} type= 
PROBLEM:
${y}^{''}-7{y}^{'}=4x{e}^{7x},$ ${y}_{p}(x)=\frac{2}{7}{x}^{2}{e}^{7x}-\frac{4}{49}x{e}^{7x},$ $y(0)=−1,\; \;y'(0)=0$
SOLUTION:
$y=-\frac{347}{343}+\frac{4}{343}{e}^{7x}+\frac{2}{7}{x}^{2}{e}^{7x}-\frac{4}{49}x{e}^{7x}$
:::

:::exercise {fs-id1170571557112} type= 
PROBLEM:
${y}^{''}+y=\text{cos}\;x-4\;\text{sin}\;x,$ ${y}_{p}(x)=2x\;\text{cos}\;x+\frac{1}{2}x\;\text{sin}\;x,$ $y(0)=8,\; \;y'(0)=−4$
:::

:::exercise {fs-id1170572512708} type= 
PROBLEM:
${y}^{''}-5{y}^{'}={e}^{5x}+8{e}^{−5x},$ ${y}_{p}(x)=\frac{1}{5}x{e}^{5x}+\frac{4}{25}{e}^{−5x},$ $y(0)=−2,\; \;y'(0)=0$
SOLUTION:
$y=-\frac{57}{25}+\frac{3}{25}{e}^{5x}+\frac{1}{5}x{e}^{5x}+\frac{4}{25}{e}^{−5x}$
:::
In each of the following problems, two linearly independent solutions—${y}_{1}$ and ${y}_{2}$—are given that satisfy the corresponding homogeneous equation. Use the method of variation of parameters to find a particular solution to the given nonhomogeneous equation. Assume *x* > 0 in each exercise.

:::exercise {fs-id1170572388390} type= 
PROBLEM:
${x}^{2}{y}^{''}+2x{y}^{'}-2y=3x,$ ${y}_{1}(x)=x,\;{y}_{2}(x)={x}^{−2}$
:::

:::exercise {fs-id1170571640571} type= 
PROBLEM:
${x}^{2}{y}^{''}-2y=10{x}^{2}-1,$ ${y}_{1}(x)={x}^{2},\;{y}_{2}(x)={x}^{−1}$
SOLUTION:
${y}_{p}=\frac{1}{2}+\frac{10}{3}{x}^{2}\text{ln}\;x$
:::

## Glossary
- {def} **complementary equation**: for the nonhomogeneous linear differential equation

${a}_{2}(x){y}^{''}+{a}_{1}(x){y}^{'}+{a}_{0}(x)y=r(x),$  {eq:fs-id1170572626510}

the associated homogeneous equation, called the *complementary equation*, is

${a}_{2}(x){y}^{''}+{a}_{1}(x){y}^{'}+{a}_{0}(x)y=0$  {eq:fs-id1170572557923}

- {def} **method of undetermined coefficients**: a method that involves making a guess about the form of the particular solution, then solving for the coefficients in the guess
- {def} **method of variation of parameters**: a method that involves looking for particular solutions in the form ${y}_{p}(x)=u(x){y}_{1}(x)+v(x){y}_{2}(x),$ where ${y}_{1}$ and ${y}_{2}$ are linearly independent solutions to the complementary equations, and then solving a system of equations to find $u(x)$ and $v(x)$
- {def} **particular solution**: a solution ${y}_{p}(x)$ of a differential equation that contains no arbitrary constants

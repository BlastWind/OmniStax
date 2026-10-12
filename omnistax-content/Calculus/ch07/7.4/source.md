# Partial Fractions

## Learning Objectives {section:learning-objectives}
- Integrate a rational function using the method of partial fractions.
- Recognize simple linear factors in a rational function.
- Recognize repeated linear factors in a rational function.
- Recognize quadratic factors in a rational function.

We have seen some techniques that allow us to integrate specific rational functions. For example, we know that

${\displaystyle \int \frac{du}{u}}=\text{ln}|u|+C\;\text{and}\;{\displaystyle \int \frac{du}{{u}^{2}+{a}^{2}}}=\frac{1}{a}{\text{tan}}^{−1}(\frac{u}{a})+C\text{.}$  {eq:fs-id1165041842105}

However, we do not yet have a technique that allows us to tackle arbitrary quotients of this type. Thus, it is not immediately obvious how to go about evaluating ${\displaystyle \int \frac{3x}{{x}^{2}-x-2}dx.}$ However, we know from material previously developed that

${\displaystyle \int (\frac{1}{x+1}+\frac{2}{x-2})dx=\text{ln}|x+1|+2\;\text{ln}|x-2|+C.}$  {eq:fs-id1165042089867}

In fact, by getting a common denominator, we see that

$\frac{1}{x+1}+\frac{2}{x-2}=\frac{3x}{{x}^{2}-x-2}.$  {eq:fs-id1165040736457}

Consequently,

${\displaystyle \int \frac{3x}{{x}^{2}-x-2}dx}={\displaystyle \int (\frac{1}{x+1}+\frac{2}{x-2})dx}.$  {eq:fs-id1165042275619}

In this section, we examine the method of {term:partial fraction decomposition}, which allows us to decompose {index:rational functions} into sums of simpler, more easily integrated rational functions. Using this method, we can rewrite an expression such as: $\frac{3x}{{x}^{2}-x-2}$ as an expression such as $\frac{1}{x+1}+\frac{2}{x-2}.$
The key to the method of partial fraction decomposition is being able to anticipate the form that the decomposition of a rational function will take. As we shall see, this form is both predictable and highly dependent on the factorization of the denominator of the rational function. It is also extremely important to keep in mind that partial fraction decomposition can be applied to a rational function $\frac{P(x)}{Q(x)}$ only if $\text{deg}(P(x))<\text{deg}(Q(x)).$ In the case when $\text{deg}(P(x))\ge \text{deg}(Q(x)),$ we must first perform long division to rewrite the quotient $\frac{P(x)}{Q(x)}$ in the form $A(x)+\frac{R(x)}{Q(x)},$ where $\text{deg}(R(x))<\text{deg}(Q(x)).$ We then do a partial fraction decomposition on $\frac{R(x)}{Q(x)}.$ The following example, although not requiring partial fraction decomposition, illustrates our approach to integrals of rational functions of the form ${\displaystyle \int \frac{P(x)}{Q(x)}dx,}$ where $\text{deg}(P(x))\ge \text{deg}(Q(x)).$

:::example {ex:fs-id1165042228991} Integrating ${\displaystyle \int \frac{P(x)}{Q(x)}dx,}$ where $\text{deg}(P(x))\ge \text{deg}(Q(x))$

:::exercise {fs-id1165040798304} type= 
PROBLEM:
Evaluate ${\displaystyle \int \frac{{x}^{2}+3x+5}{x+1}dx}.$
SOLUTION:
Since $\text{deg}({x}^{2}+3x+5)\ge \text{deg}(x+1),$ we perform long division to obtain

$\frac{{x}^{2}+3x+5}{x+1}=x+2+\frac{3}{x+1}.$  {eq:fs-id1165040774466}

Thus,

$\begin{array}{rl}{\displaystyle \int \frac{{x}^{2}+3x+5}{x+1}dx} & ={\displaystyle \int (x+2+\frac{3}{x+1})dx} \\ & =\frac{1}{2}{x}^{2}+2x+3\;\text{ln}|x+1|+C.\end{array}$  {eq:fs-id1165042278063}

:::
:::

:::note [media-2] 
Visit this [website](http://www.openstax.org/l/20_polylongdiv) for a review of long division of polynomials.
:::

:::note [checkpoint] 

:::exercise {fs-id1165042281186} type= 
PROBLEM:
Evaluate ${\displaystyle \int \frac{x-3}{x+2}dx.}$
SOLUTION:
$x-5\;\text{ln}|x+2|+C$
COMMENTARY: Hint
Use long division to obtain $\frac{x-3}{x+2}=1-\frac{5}{x+2}.$
:::
:::
To integrate ${\displaystyle \int \frac{P(x)}{Q(x)}dx,}$ where $\text{deg}(P(x))<\text{deg}(Q(x)),$ we must begin by factoring $Q(x).$

## Nonrepeated Linear Factors
If $Q(x)$ can be factored as $({a}_{1}x+{b}_{1})({a}_{2}x+{b}_{2})\text{…}({a}_{n}x+{b}_{n}),$ where each linear factor is distinct, then it is possible to find constants ${A}_{1},{A}_{2}\text{,…}\;{A}_{n}$ satisfying

$\frac{P(x)}{Q(x)}=\frac{{A}_{1}}{{a}_{1}x+{b}_{1}}+\frac{{A}_{2}}{{a}_{2}x+{b}_{2}}+⋯+\frac{{A}_{n}}{{a}_{n}x+{b}_{n}}.$  {eq:fs-id1165042004560}

The proof that such constants exist is beyond the scope of this course.
In this next example, we see how to use partial fractions to integrate a rational function of this type.

:::example {ex:fs-id1165042007126} Partial Fractions with Nonrepeated Linear Factors

:::exercise {fs-id1165040755188} type= 
PROBLEM:
Evaluate ${\displaystyle \int \frac{3x+2}{{x}^{3}-{x}^{2}-2x}dx.}$
SOLUTION:
Since $\text{deg}(3x+2)<\text{deg}({x}^{3}-{x}^{2}-2x),$ we begin by factoring the denominator of $\frac{3x+2}{{x}^{3}-{x}^{2}-2x}.$ We can see that ${x}^{3}-{x}^{2}-2x=x(x-2)(x+1).$ Thus, there are constants $A,$ $B,$ and $C$ satisfying

$\frac{3x+2}{x(x-2)(x+1)}=\frac{A}{x}+\frac{B}{x-2}+\frac{C}{x+1}.$  {eq:fs-id1165040669618}

We must now find these constants. To do so, we begin by getting a common denominator on the right. Thus,

$\frac{3x+2}{x(x-2)(x+1)}=\frac{A(x-2)(x+1)+Bx(x+1)+Cx(x-2)}{x(x-2)(x+1)}.$  {eq:fs-id1165041977500}

Now, we set the numerators equal to each other, obtaining

$$ 3x+2=A(x-2)(x+1)+Bx(x+1)+Cx(x-2). $$  {eq:fs-id1165042002695}

There are two different strategies for finding the coefficients $A,$ $B,$ and $C.$ We refer to these as the {index:*method of equating coefficients*} and the {index:*method of strategic substitution*}.

:::note [rule] Rule: Method of Equating Coefficients
Rewrite [ref:fs-id1165042002695] in the form

$3x+2=(A+B+C){x}^{2}+(\text{−}A+B-2C)x+(−2A).$  {eq:fs-id1165040797991}

Equating coefficients produces the system of equations

$\begin{array}{rll}A+B+C & = & 0 \\ -A+B-2C & = & 3 \\ -2A & = & 2.\end{array}$  {eq:fs-id1165041818055}

To solve this system, we first observe that $−2A=2⇒A=−1.$ Substituting this value into the first two equations gives us the system

$\begin{array}{rll}B+C & = & 1 \\ B-2C & = & 2.\end{array}$  {eq:fs-id1165040757789}

Multiplying the second equation by $−1$ and adding the resulting equation to the first produces

$−3C=1,$  {eq:fs-id1165041843249}

which in turn implies that $C=-\frac{1}{3}.$ Substituting this value into the equation $B+C=1$ yields $B=\frac{4}{3}.$ Thus, solving these equations yields $A=−1,$ $B=\frac{4}{3},$ and $C=-\frac{1}{3}.$
It is important to note that the system produced by this method is consistent if and only if we have set up the decomposition correctly. If the system is inconsistent, there is an error in our decomposition.
:::

:::note [rule] Rule: Method of Strategic Substitution
The method of strategic substitution is based on the assumption that we have set up the decomposition correctly. If the decomposition is set up correctly, then there must be values of $A,$ $B,$ and $C$ that satisfy [ref:fs-id1165042002695] for *all* values of $x.$ That is, this equation must be true for any value of $x$ we care to substitute into it. Therefore, by choosing values of $x$ carefully and substituting them into the equation, we may find $A,$ $B,$ and $C$ easily. For example, if we substitute $x=0,$ the equation reduces to $2=A(−2)(1).$ Solving for $A$ yields $A=−1.$ Next, by substituting $x=2,$ the equation reduces to $8=B(2)(3),$ or equivalently $B=4\text{/}3.$ Last, we substitute $x=−1$ into the equation and obtain $−1=C(−1)(−3).$ Solving, we have $C=-\frac{1}{3}.$
It is important to keep in mind that if we attempt to use this method with a decomposition that has not been set up correctly, we are still able to find values for the constants, but these constants are meaningless. If we do opt to use the method of strategic substitution, then it is a good idea to check the result by recombining the terms algebraically.
:::
Now that we have the values of $A,$ $B,$ and $C,$ we rewrite the original integral:

${\displaystyle \int \frac{3x+2}{{x}^{3}-{x}^{2}-2x}dx}={\displaystyle \int (\text{−}\;\frac{1}{x}+\frac{4}{3}\cdot \frac{1}{(x-2)}-\frac{1}{3}\cdot \frac{1}{(x+1)})}dx.$  {eq:fs-id1165042110103}

Evaluating the integral gives us

${\displaystyle \int \frac{3x+2}{{x}^{3}-{x}^{2}-2x}dx}=\text{−}\text{ln}|x|+\frac{4}{3}\text{ln}|x-2|-\frac{1}{3}\text{ln}|x+1|+C.$  {eq:fs-id1165041985166}

:::
:::
In the next example, we integrate a rational function in which the degree of the numerator is not less than the degree of the denominator.

:::example {ex:fs-id1165042066339} Dividing before Applying Partial Fractions

:::exercise {fs-id1165040797346} type= 
PROBLEM:
Evaluate ${\displaystyle \int \frac{{x}^{2}+3x+1}{{x}^{2}-4}dx.}$
SOLUTION:
Since $\text{degree}({x}^{2}+3x+1)\ge \text{degree}({x}^{2}-4),$ we must perform long division of polynomials. This results in

$\frac{{x}^{2}+3x+1}{{x}^{2}-4}=1+\frac{3x+5}{{x}^{2}-4}.$  {eq:fs-id1165042277396}

Next, we perform partial fraction decomposition on $\frac{3x+5}{{x}^{2}-4}=\frac{3x+5}{(x+2)(x-2)}.$ We have

$\frac{3x+5}{(x-2)(x+2)}=\frac{A}{x-2}+\frac{B}{x+2}.$  {eq:fs-id1165042092094}

Thus,

$3x+5=A(x+2)+B(x-2).$  {eq:fs-id1165042134742}

Solving for $A$ and $B$ using either method, we obtain $A=11\text{/}4$ and $B=1\text{/}4.$
Rewriting the original integral, we have

${\displaystyle \int \frac{{x}^{2}+3x+1}{{x}^{2}-4}dx}={\displaystyle \int (1+\frac{11}{4}\cdot \frac{1}{x-2}+\frac{1}{4}\cdot \frac{1}{x+2})dx.}$  {eq:fs-id1165041840380}

Evaluating the integral produces

${\displaystyle \int \frac{{x}^{2}+3x+1}{{x}^{2}-4}dx}=x+\frac{11}{4}\text{ln}|x-2|+\frac{1}{4}\text{ln}|x+2|+C.$  {eq:fs-id1165042050641}

:::
:::
As we see in the next example, it may be possible to apply the technique of partial fraction decomposition to a nonrational function. The trick is to convert the nonrational function to a rational function through a substitution.

:::example {ex:fs-id1165042003975} Applying Partial Fractions after a Substitution

:::exercise {fs-id1165042003977} type= 
PROBLEM:
Evaluate ${\displaystyle \int \frac{\text{cos}\;x}{{\text{sin}}^{2}x-\text{sin}\;x}dx}.$
SOLUTION:
Let’s begin by letting $u=\text{sin}\;x.$ Consequently, $du=\text{cos}\;x\;dx.$ After making these substitutions, we have

${\displaystyle \int \frac{\text{cos}\;x}{{\text{sin}}^{2}x-\text{sin}\;x}dx}={\displaystyle \int \frac{du}{{u}^{2}-u}}={\displaystyle \int \frac{du}{u(u-1)}.}$  {eq:fs-id1165042035790}

Applying partial fraction decomposition to $1\text{/}u(u-1)$ gives $\frac{1}{u(u-1)}=-\frac{1}{u}+\frac{1}{u-1}.$
Thus,

$\begin{array}{rl}{\displaystyle \int \frac{\text{cos}\;x}{{\text{sin}}^{2}x-\text{sin}\;x}dx} & =\text{−}\text{ln}|u|+\text{ln}|u-1|+C \\ & =\text{−}\text{ln}|\text{sin}\;x|+\text{ln}|\text{sin}\;x-1|+C.\end{array}$  {eq:fs-id1165042126856}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042048892} type= 
PROBLEM:
Evaluate ${\displaystyle \int \frac{x+1}{(x+3)(x-2)}dx}.$
SOLUTION:
$\frac{2}{5}\text{ln}|x+3|+\frac{3}{5}\text{ln}|x-2|+C$
COMMENTARY: Hint
$\frac{x+1}{(x+3)(x-2)}=\frac{A}{x+3}+\frac{B}{x-2}$
:::
:::

## Repeated Linear Factors
For some applications, we need to integrate rational expressions that have denominators with repeated linear factors—that is, rational functions with at least one factor of the form ${(ax+b)}^{n},$ where $n$ is a positive integer greater than or equal to $2.$ If the denominator contains the repeated linear factor ${(ax+b)}^{n},$ then the decomposition must contain

$\frac{{A}_{1}}{ax+b}+\frac{{A}_{2}}{{(ax+b)}^{2}}+⋯+\frac{{A}_{n}}{{(ax+b)}^{n}}.$  {eq:fs-id1165041924064}

As we see in our next example, the basic technique used for solving for the coefficients is the same, but it requires more algebra to determine the numerators of the partial fractions.

:::example {ex:fs-id1165041952248} Partial Fractions with Repeated Linear Factors

:::exercise {fs-id1165041952250} type= 
PROBLEM:
Evaluate ${\displaystyle \int \frac{x-2}{{(2x-1)}^{2}(x-1)}dx.}$
SOLUTION:
We have $\text{degree}(x-2)<\text{degree}({(2x-1)}^{2}(x-1)),$ so we can proceed with the decomposition. Since ${(2x-1)}^{2}$ is a repeated linear factor, include $\frac{A}{2x-1}+\frac{B}{{(2x-1)}^{2}}$ in the decomposition. Thus,

$\frac{x-2}{{(2x-1)}^{2}(x-1)}=\frac{A}{2x-1}+\frac{B}{{(2x-1)}^{2}}+\frac{C}{x-1}.$  {eq:fs-id1165040688174}

After getting a common denominator and equating the numerators, we have

$$ x-2=A(2x-1)(x-1)+B(x-1)+C{(2x-1)}^{2}. $$  {eq:fs-id1165040688639}

We then use the method of equating coefficients to find the values of $A,$ $B,$ and $C.$

$x-2=(2A+4C){x}^{2}+(−3A+B-4C)x+(A-B+C).$  {eq:fs-id1165040758310}

Equating coefficients yields $2A+4C=0,$ $−3A+B-4C=1,$ and $A-B+C=−2.$ Solving this system yields $A=2,$ $B=3,$ and $C=−1.$
Alternatively, we can use the method of strategic substitution. In this case, substituting $x=1$ and $x=1\text{/}2$ into [ref:fs-id1165040688639] easily produces the values $B=3$ and $C=−1.$ At this point, it may seem that we have run out of good choices for $x,$ however, since we already have values for $B$ and $C,$ we can substitute in these values and choose any value for $x$ not previously used. The value $x=0$ is a good option. In this case, we obtain the equation $−2=A(−1)(−1)+3(−1)+(−1){(−1)}^{2}$ or, equivalently, $A=2.$
Now that we have the values for $A,$ $B,$ and $C,$ we rewrite the original integral and evaluate it:

$\begin{array}{rl}{\displaystyle \int \frac{x-2}{{(2x-1)}^{2}(x-1)}dx} & ={\displaystyle \int (\frac{2}{2x-1}+\frac{3}{{(2x-1)}^{2}}-\frac{1}{x-1})dx} \\ & =\text{ln}|2x-1|-\frac{3}{2(2x-1)}-\text{ln}|x-1|+C.\end{array}$  {eq:fs-id1165041837274}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042088545} type= 
PROBLEM:
Set up the partial fraction decomposition for ${\displaystyle \int \frac{x+2}{{(x+3)}^{3}{(x-4)}^{2}}dx.}$ (Do not solve for the coefficients or complete the integration.)
SOLUTION:
$\frac{x+2}{{(x+3)}^{3}{(x-4)}^{2}}=\frac{A}{x+3}+\frac{B}{{(x+3)}^{2}}+\frac{C}{{(x+3)}^{3}}+\frac{D}{(x-4)}+\frac{E}{{(x-4)}^{2}}$
COMMENTARY: Hint
Use the problem-solving method of [ref:fs-id1165041952248] for guidance.
:::
:::

## The General Method
Now that we are beginning to get the idea of how the technique of partial fraction decomposition works, let’s outline the basic method in the following problem-solving strategy.

:::note [problem-solving] Partial Fraction Decomposition
To decompose the rational function $P(x)\text{/}Q(x),$ use the following steps:
1. Make sure that $\text{degree}(P(x))<\text{degree}(Q(x)).$ If not, perform long division of polynomials.
2. Factor $Q(x)$ into the product of linear and irreducible quadratic factors. An irreducible quadratic is a quadratic that has no real zeros.
3. Assuming that $\text{deg}(P(x))<\text{deg}(Q(x)),$ the factors of $Q(x)$ determine the form of the decomposition of $P(x)\text{/}Q(x).$

a. If $Q(x)$ can be factored as $({a}_{1}x+{b}_{1})({a}_{2}x+{b}_{2})\text{…}({a}_{n}x+{b}_{n}),$ where each linear factor is distinct, then it is possible to find constants ${A}_{1},{A}_{2},...{A}_{n}$ satisfying

$\frac{P(x)}{Q(x)}=\frac{{A}_{1}}{{a}_{1}x+{b}_{1}}+\frac{{A}_{2}}{{a}_{2}x+{b}_{2}}+⋯+\frac{{A}_{n}}{{a}_{n}x+{b}_{n}}.$  {eq:fs-id1165041899414}

b. If $Q(x)$ contains the repeated linear factor ${(ax+b)}^{n},$ then the decomposition must contain

$\frac{{A}_{1}}{ax+b}+\frac{{A}_{2}}{{(ax+b)}^{2}}+⋯+\frac{{A}_{n}}{{(ax+b)}^{n}}.$  {eq:fs-id1165040643994}

c. For each irreducible quadratic factor $a{x}^{2}+bx+c$ that $Q(x)$ contains, the decomposition must include

$\frac{Ax+B}{a{x}^{2}+bx+c}.$  {eq:fs-id1165042277015}

d. For each repeated irreducible quadratic factor ${(a{x}^{2}+bx+c)}^{n},$ the decomposition must include

$\frac{{A}_{1}x+{B}_{1}}{a{x}^{2}+bx+c}+\frac{{A}_{2}x+{B}_{2}}{{(a{x}^{2}+bx+c)}^{2}}+⋯+\frac{{A}_{n}x+{B}_{n}}{{(a{x}^{2}+bx+c)}^{n}}.$  {eq:fs-id1165042230430}

e. After the appropriate decomposition is determined, solve for the constants.
f. Last, rewrite the integral in its decomposed form and evaluate it using previously developed techniques or integration formulas.

:::

## Simple Quadratic Factors
Now let’s look at integrating a rational expression in which the denominator contains an irreducible quadratic factor. Recall that the quadratic $a{x}^{2}+bx+c$ is irreducible if $a{x}^{2}+bx+c=0$ has no real zeros—that is, if ${b}^{2}-4ac<0.$

:::example {ex:fs-id1165042096550} Rational Expressions with an Irreducible Quadratic Factor

:::exercise {fs-id1165042096552} type= 
PROBLEM:
Evaluate ${\displaystyle \int \frac{2x-3}{{x}^{3}+x}dx.}$
SOLUTION:
Since $\text{deg}(2x-3)<\text{deg}({x}^{3}+x),$ factor the denominator and proceed with partial fraction decomposition. Since ${x}^{3}+x=x({x}^{2}+1)$ contains the irreducible quadratic factor ${x}^{2}+1,$ include $\frac{Ax+B}{{x}^{2}+1}$ as part of the decomposition, along with $\frac{C}{x}$ for the linear term $x.$ Thus, the decomposition has the form

$\frac{2x-3}{x({x}^{2}+1)}=\frac{Ax+B}{{x}^{2}+1}+\frac{C}{x}.$  {eq:fs-id1165042233088}

After getting a common denominator and equating the numerators, we obtain the equation

$2x-3=(Ax+B)x+C({x}^{2}+1).$  {eq:fs-id1165040745302}

Solving for $A,B,$ and $C,$ we get $A=3,$ $B=2,$ and $C=−3.$
Thus,

$\frac{2x-3}{{x}^{3}+x}=\frac{3x+2}{{x}^{2}+1}-\frac{3}{x}.$  {eq:fs-id1165042273871}

Substituting back into the integral, we obtain

$\begin{array}{rllll}{\displaystyle \int \frac{2x-3}{{x}^{3}+x}dx} & ={\displaystyle \int (\frac{3x+2}{{x}^{2}+1}-\frac{3}{x})dx} & & & \\ & =3{\displaystyle \int \frac{x}{{x}^{2}+1}dx}+2{\displaystyle \int \frac{1}{{x}^{2}+1}dx}-3{\displaystyle \int \frac{1}{x}dx} & & & \text{Split up the integral.} \\ & =\frac{3}{2}\text{ln}|{x}^{2}+1|+2\;{\text{tan}}^{−1}x-3\;\text{ln}|x|+C. & & & \text{Evaluate each integral.}\end{array}$  {eq:fs-id1165040757653}

*Note*: We may rewrite $\text{ln}|{x}^{2}+1|=\text{ln}({x}^{2}+1),$ if we wish to do so, since ${x}^{2}+1>0.$
:::
:::

:::example {ex:fs-id1165042107572} Partial Fractions with an Irreducible Quadratic Factor

:::exercise {fs-id1165042107574} type= 
PROBLEM:
Evaluate ${\displaystyle \int \frac{dx}{{x}^{3}-8}.}$
SOLUTION:
We can start by factoring ${x}^{3}-8=(x-2)({x}^{2}+2x+4).$ We see that the quadratic factor ${x}^{2}+2x+4$ is irreducible since ${2}^{2}-4(1)(4)=−12<0.$ Using the decomposition described in the problem-solving strategy, we get

$\frac{1}{(x-2)({x}^{2}+2x+4)}=\frac{A}{x-2}+\frac{Bx+C}{{x}^{2}+2x+4}.$  {eq:fs-id1165041874053}

After obtaining a common denominator and equating the numerators, this becomes

$1=A({x}^{2}+2x+4)+(Bx+C)(x-2).$  {eq:fs-id1165042238065}

Applying either method, we get $A=\frac{1}{12},B=-\frac{1}{12},\;\text{and}\;C=-\frac{1}{3}.$
Rewriting ${\displaystyle \int \frac{dx}{{x}^{3}-8},}$ we have

${\displaystyle \int \frac{dx}{{x}^{3}-8}}=\frac{1}{12}{\displaystyle \int \frac{1}{x-2}dx}-\frac{1}{12}{\displaystyle \int \frac{x+4}{{x}^{2}+2x+4}dx.}$  {eq:fs-id1165042047720}

We can see that
${\displaystyle \int \frac{1}{x-2}dx}=\text{ln}|x-2|+C,$ but ${\displaystyle \int \frac{x+4}{{x}^{2}+2x+4}dx}$ requires a bit more effort. Let’s begin by completing the square on ${x}^{2}+2x+4$ to obtain

${x}^{2}+2x+4={(x+1)}^{2}+3.$  {eq:fs-id1165040772336}

By letting $u=x+1$ and consequently $du=dx,$ we see that

$\begin{array}{rllll}{\displaystyle \int \frac{x+4}{{x}^{2}+2x+4}dx} & ={\displaystyle \int \frac{x+4}{{(x+1)}^{2}+3}dx} & & & \begin{array}{l}\text{Complete the square on the} \\ \text{denominator.}\end{array} \\ & ={\displaystyle \int \frac{u+3}{{u}^{2}+3}du} & & & \begin{array}{l}\text{Substitute}\;u=x+1,x=u-1, \\ \text{and}\;du=dx.\end{array} \\ & ={\displaystyle \int \frac{u}{{u}^{2}+3}du}+{\displaystyle \int \frac{3}{{u}^{2}+3}du} & & & \text{Split the numerator apart.} \\ & =\frac{1}{2}\text{ln}|{u}^{2}+3|+\frac{3}{\sqrt{3}}{\text{tan}}^{−1}\frac{u}{\sqrt{3}}+C & & & \text{Evaluate each integral.} \\ & =\frac{1}{2}\text{ln}|{x}^{2}+2x+4|+\sqrt{3}{\text{tan}}^{−1}(\frac{x+1}{\sqrt{3}})+C. & & & \begin{array}{l}\text{Rewrite in terms of}\;x\;\text{and} \\ \text{simplify.}\end{array}\end{array}$  {eq:fs-id1165042092238}

Substituting back into the original integral and simplifying gives

${{\displaystyle \int}}^{}\frac{dx}{{x}^{3}-8}=\frac{1}{12}\text{ln}|x-2|-\frac{1}{24}\text{ln}|{x}^{2}+2x+4|-\frac{\sqrt{3}}{12}{\text{tan}}^{−1}(\frac{x+1}{\sqrt{3}})+C.$  {eq:fs-id1165040772130}

Here again, we can drop the absolute value if we wish to do so, since ${x}^{2}+2x+4>0$ for all $x.$
:::
:::

:::example {ex:fs-id1165042311614} Finding a Volume

:::exercise {fs-id1165042088243} type= 
PROBLEM:
Find the volume of the solid of revolution obtained by revolving the region enclosed by the graph of $f(x)=\frac{{x}^{2}}{{({x}^{2}+1)}^{2}}$ and the *x*-axis over the interval $[0,1]$ about the *y*-axis.
SOLUTION:
Let’s begin by sketching the region to be revolved (see [ref:CNX_Calc_Figure_07_04_001]). From the sketch, we see that the shell method is a good choice for solving this problem.

> FIGURE {fig:CNX_Calc_Figure_07_04_001} src=../../media/CNX_Calc_Figure_07_04_001.jpg
> alt: This figure is the graph of the function f(x) = x^2/(x^2+1)^2. It is a curve above the x-axis. It is decreasing in the second quadrant, intersects at the origin, and increases in the first quadrant. Between x = 0 and x = 1, there is shaded area under the curve.
> caption: We can use the shell method to find the volume of revolution obtained by revolving the region shown about the *y*-axis.

The volume is given by

$V=2\pi {\displaystyle \int_{0}^{1}x\cdot \frac{{x}^{2}}{{({x}^{2}+1)}^{2}}dx}=2\pi {\displaystyle \int_{0}^{1}\frac{{x}^{3}}{{({x}^{2}+1)}^{2}}dx.}$  {eq:fs-id1165042311740}

Since $\text{deg}({({x}^{2}+1)}^{2})=4>3=\text{deg}({x}^{3}),$ we can proceed with partial fraction decomposition. Note that ${({x}^{2}+1)}^{2}$ is a repeated irreducible quadratic. Using the decomposition described in the problem-solving strategy, we get

$\frac{{x}^{3}}{{({x}^{2}+1)}^{2}}=\frac{Ax+B}{{x}^{2}+1}+\frac{Cx+D}{{({x}^{2}+1)}^{2}}.$  {eq:fs-id1165041899092}

Finding a common denominator and equating the numerators gives

${x}^{3}=(Ax+B)({x}^{2}+1)+Cx+D.$  {eq:fs-id1165042002716}

Solving, we obtain $A=1,$ $B=0,$ $C=−1,$ and $D=0.$ Substituting back into the integral, we have

$\begin{array}{rl}V & =2\pi {\displaystyle \int_{0}^{1} \frac{{x}^{3}}{{({x}^{2}+1)}^{2}}dx} \\ & =2\pi {\displaystyle \int_{0}^{1} (\frac{x}{{x}^{2}+1}-\frac{x}{{({x}^{2}+1)}^{2}})dx} \\ & =2\pi (\frac{1}{2}\text{ln}({x}^{2}+1)+\frac{1}{2}\cdot \frac{1}{{x}^{2}+1})|{}_{\begin{array}{l} \\ 0\end{array}}^{\begin{array}{l}1 \\ \end{array}} \\ & =\pi (\text{ln}\;2-\frac{1}{2}).\end{array}$  {eq:fs-id1165040743214}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165041926583} type= 
PROBLEM:
Set up the partial fraction decomposition for ${\displaystyle \int \frac{{x}^{2}+3x+1}{(x+2){(x-3)}^{2}{({x}^{2}+4)}^{2}}dx.}$
SOLUTION:
$\frac{{x}^{2}+3x+1}{(x+2){(x-3)}^{2}{({x}^{2}+4)}^{2}}=\frac{A}{x+2}+\frac{B}{x-3}+\frac{C}{{(x-3)}^{2}}+\frac{Dx+E}{{x}^{2}+4}+\frac{Fx+G}{{({x}^{2}+4)}^{2}}$
COMMENTARY: Hint
Use the problem-solving strategy.
:::
:::

## Key Concepts {section:key-concepts}
- Partial fraction decomposition is a technique used to break down a rational function into a sum of simple rational functions that can be integrated using previously learned techniques.
- When applying partial fraction decomposition, we must make sure that the degree of the numerator is less than the degree of the denominator. If not, we need to perform long division before attempting partial fraction decomposition.
- The form the decomposition takes depends on the type of factors in the denominator. The types of factors include nonrepeated linear factors, repeated linear factors, nonrepeated irreducible quadratic factors, and repeated irreducible quadratic factors.

##  {section:section-exercises}
Express the rational function as a sum or difference of two simpler rational expressions.

:::exercise {fs-id1165040775258} type= 
PROBLEM:
$\frac{1}{(x-3)(x-2)}$
:::

:::exercise {fs-id1165042088576} type= 
PROBLEM:
$\frac{{x}^{2}+1}{x(x+1)(x+2)}$
SOLUTION:
$-\frac{2}{x+1}+\frac{5}{2(x+2)}+\frac{1}{2x}$
:::

:::exercise {fs-id1165041815929} type= 
PROBLEM:
$\frac{1}{{x}^{3}-x}$
:::

:::exercise {fs-id1165040726928} type= 
PROBLEM:
$\frac{3x+1}{{x}^{2}}$
SOLUTION:
$\frac{1}{{x}^{2}}+\frac{3}{x}$
:::

:::exercise {fs-id1165042137594} type= 
PROBLEM:
$\frac{3{x}^{2}}{{x}^{2}+1}$ (*Hint:* Use long division first.)
:::

:::exercise {fs-id1165042311902} type= 
PROBLEM:
$\frac{2{x}^{4}}{{x}^{2}-2x}$
SOLUTION:
$2{x}^{2}+4x+8+\frac{16}{x-2}$
:::

:::exercise {fs-id1165042107294} type= 
PROBLEM:
$\frac{1}{(x-1)({x}^{2}+1)}$
:::

:::exercise {fs-id1165042045960} type= 
PROBLEM:
$\frac{1}{{x}^{2}(x-1)}$
SOLUTION:
$-\frac{1}{{x}^{2}}-\frac{1}{x}+\frac{1}{x-1}$
:::

:::exercise {fs-id1165040727790} type= 
PROBLEM:
$\frac{x}{{x}^{2}-4}$
:::

:::exercise {fs-id1165042039159} type= 
PROBLEM:
$\frac{1}{x(x-1)(x-2)(x-3)}$
SOLUTION:
$-\frac{1}{2(x-2)}+\frac{1}{2(x-1)}-\frac{1}{6x}+\frac{1}{6(x-3)}$
:::

:::exercise {fs-id1165042073640} type= 
PROBLEM:
$\frac{1}{{x}^{4}-1}=\frac{1}{(x+1)(x-1)({x}^{2}+1)}$
:::

:::exercise {fs-id1165042225107} type= 
PROBLEM:
$\frac{3{x}^{2}}{{x}^{3}-1}=\frac{3{x}^{2}}{(x-1)({x}^{2}+x+1)}$
SOLUTION:
$\frac{1}{x-1}+\frac{2x+1}{{x}^{2}+x+1}$
:::

:::exercise {fs-id1165040778480} type= 
PROBLEM:
$\frac{2x}{{(x+2)}^{2}}$
:::

:::exercise {fs-id1165040768884} type= 
PROBLEM:
$\frac{3{x}^{4}+{x}^{3}+20{x}^{2}+3x+31}{(x+1){({x}^{2}+4)}^{2}}$
SOLUTION:
$\frac{2}{x+1}+\frac{x}{{x}^{2}+4}-\frac{1}{{({x}^{2}+4)}^{2}}$
:::
Use the method of partial fractions to evaluate each of the following integrals.

:::exercise {fs-id1165042058697} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{(x-3)(x-2)}}$
:::

:::exercise {fs-id1165041892980} type= 
PROBLEM:
${\displaystyle \int \frac{3x}{{x}^{2}+2x-8}dx}$
SOLUTION:
$\text{ln}|x-2|+2\;\text{ln}|x+4|+C$
:::

:::exercise {fs-id1165041932672} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{{x}^{3}-x}}$
:::

:::exercise {fs-id1165040744925} type= 
PROBLEM:
${\displaystyle \int \frac{x}{{x}^{2}-4}dx}$
SOLUTION:
$\frac{1}{2}\text{ln}|4-{x}^{2}|+C$
:::

:::exercise {fs-id1165042247084} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{x(x-1)(x-2)(x-3)}}$
:::

:::exercise {fs-id1165040669725} type= 
PROBLEM:
${\displaystyle \int \frac{2{x}^{2}+4x+22}{{x}^{2}+2x+10}dx}$
SOLUTION:
$2(x+\frac{1}{3}\text{arctan}(\frac{1+x}{3}))+C$
:::

:::exercise {fs-id1165040741416} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{{x}^{2}-5x+6}}$
:::

:::exercise {fs-id1165042235498} type= 
PROBLEM:
${\displaystyle \int \frac{2-x}{{x}^{2}+x}dx}$
SOLUTION:
$2\;\text{ln}|x|-3\;\text{ln}|1+x|+C$
:::

:::exercise {fs-id1165040763937} type= 
PROBLEM:
${\displaystyle \int \frac{2}{{x}^{2}-x-6}dx}$
:::

:::exercise {fs-id1165040762364} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{{x}^{3}-2{x}^{2}-4x+8}}$
SOLUTION:
$\frac{1}{16}(\text{−}\;\frac{4}{−2+x}-\text{ln}|−2+x|+\text{ln}|2+x|)+C$
:::

:::exercise {fs-id1165041954997} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{{x}^{4}-10{x}^{2}+9}}$
:::
Evaluate the following integrals, which have irreducible quadratic factors.

:::exercise {fs-id1165040795642} type= 
PROBLEM:
${\displaystyle \int \frac{2}{(x-4)({x}^{2}+2x+6)}dx}$
SOLUTION:
$\frac{1}{30}(−2\sqrt{5}\;\text{arctan}[\frac{1+x}{\sqrt{5}}]+2\;\text{ln}|−4+x|-\text{ln}|6+2x+{x}^{2}|)+C$
:::

:::exercise {fs-id1165040793858} type= 
PROBLEM:
${\displaystyle \int \frac{{x}^{2}}{{x}^{3}-{x}^{2}+4x-4}dx}$
:::

:::exercise {fs-id1165042038802} type= 
PROBLEM:
${\displaystyle \int \frac{{x}^{3}+6{x}^{2}+3x+6}{{x}^{3}+2{x}^{2}}dx}$
SOLUTION:
$-\frac{3}{x}+4\;\text{ln}|x+2|+x+C$
:::

:::exercise {fs-id1165040729316} type= 
PROBLEM:
${\displaystyle \int \frac{x}{(x-1){({x}^{2}+2x+2)}^{2}}dx}$
:::
Use the method of partial fractions to evaluate the following integrals.

:::exercise {fs-id1165040693544} type= 
PROBLEM:
${\displaystyle \int \frac{3x+4}{({x}^{2}+4)(3-x)}dx}$
SOLUTION:
$\text{−}\text{ln}|3-x|+\frac{1}{2}\text{ln}|{x}^{2}+4|+C$
:::

:::exercise {fs-id1165042271929} type= 
PROBLEM:
${\displaystyle \int \frac{2}{{(x+2)}^{2}(2-x)}dx}$
:::

:::exercise {fs-id1165042040493} type= 
PROBLEM:
${\displaystyle \int \frac{3x+4}{{x}^{3}-2x-4}dx}$ (*Hint:* Use the rational root theorem.)
SOLUTION:
$\text{ln}|x-2|-\frac{1}{2}\text{ln}|{x}^{2}+2x+2|+C$
:::
Use substitution to convert the integrals to integrals of rational functions. Then use partial fractions to evaluate the integrals.

:::exercise {fs-id1165040720679} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\frac{{e}^{x}}{36-{e}^{2x}}dx}$ (Give the exact answer and the decimal equivalent. Round to five decimal places.)
:::

:::exercise {fs-id1165040795696} type= 
PROBLEM:
${\displaystyle \int \frac{{e}^{x}}{{e}^{2x}-{e}^{x}}dx}$
SOLUTION:
$\text{−}x+\text{ln}|1-{e}^{x}|+C$
:::

:::exercise {fs-id1165041909012} type= 
PROBLEM:
${\displaystyle \int \frac{\text{sin}\;x\;dx}{1-{\text{cos}}^{2}x}}$
:::

:::exercise {fs-id1165042236521} type= 
PROBLEM:
${\displaystyle \int \frac{\text{sin}\;x}{{\text{cos}}^{2}x+\text{cos}\;x-6}dx}$
SOLUTION:
$\frac{1}{5}\text{ln}|\frac{\text{cos}\;x+3}{\text{cos}\;x-2}|+C$
:::

:::exercise {fs-id1165042093452} type= 
PROBLEM:
${\displaystyle \int \frac{1-\sqrt{x}}{1+\sqrt{x}}dx}$
:::

:::exercise {fs-id1165040646091} type= 
PROBLEM:
${\displaystyle \int \frac{dt}{{({e}^{t}-{e}^{\text{−}t})}^{2}}}$
SOLUTION:
$\frac{1}{2-2{e}^{2t}}+C$
:::

:::exercise {fs-id1165040643874} type= 
PROBLEM:
${\displaystyle \int \frac{1+{e}^{x}}{1-{e}^{x}}dx}$
:::

:::exercise {fs-id1165042236343} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{1+\sqrt{x+1}}}$
SOLUTION:
$2\sqrt{1+x}-2\;\text{ln}|1+\sqrt{1+x}|+C$
:::

:::exercise {fs-id1165041925129} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{\sqrt{x}+\sqrt[4]{x}}}$
:::

:::exercise {fs-id1165041975773} type= 
PROBLEM:
${\displaystyle \int \frac{\text{cos}\;x}{\text{sin}\;x(1-\text{sin}\;x)}dx}$
SOLUTION:
$\text{ln}|\frac{\text{sin}\;x}{1-\text{sin}\;x}|+C$
:::

:::exercise {fs-id1165041956790} type= 
PROBLEM:
${\displaystyle \int \frac{{e}^{x}}{{({e}^{2x}-4)}^{2}}dx}$
:::

:::exercise {fs-id1165041968999} type= 
PROBLEM:
${\displaystyle \int_{1}^{2} \frac{1}{{x}^{2}\sqrt{4-{x}^{2}}}dx}$
SOLUTION:
$\frac{\sqrt{3}}{4}$
:::

:::exercise {fs-id1165040762143} type= 
PROBLEM:
${\displaystyle \int \frac{1}{2+{e}^{\text{−}x}}dx}$
:::

:::exercise {fs-id1165042293904} type= 
PROBLEM:
${\displaystyle \int \frac{1}{1+{e}^{x}}dx}$
SOLUTION:
$x-\text{ln}(1+{e}^{x})+C$
:::
Use the given substitution to convert the integral to an integral of a rational function, then evaluate.

:::exercise {fs-id1165041831447} type= 
PROBLEM:
${\displaystyle \int \frac{1}{t-\sqrt[3]{t}}dt}\;t={x}^{3}$
:::

:::exercise {fs-id1165040800580} type= 
PROBLEM:
${\displaystyle \int \frac{1}{\sqrt{x}+\sqrt[3]{x}}dx};x={u}^{6}$
SOLUTION:
$6{x}^{1\text{/}6}-3{x}^{1\text{/}3}+2\sqrt{x}-6\;\text{ln}(1+{x}^{1\text{/}6})+C$
:::

:::exercise {fs-id1165042279130} type= 
PROBLEM:
Graph the curve $y=\frac{x}{1+x}$ over the interval $[0,5].$ Then, find the area of the region bounded by the curve, the *x*-axis, and the line $x=4.$

> IMAGE {img:fs-id1165042038949} src=../../media/CNX_Calc_Figure_07_04_201.jpg
> alt: This figure is a graph of the function y = x/(1 + x). The graph is only in the first quadrant. It begins at the origin and increases into the first quadrant. The curve stops at x = 5.

:::

:::exercise {fs-id1165042038980} type= 
PROBLEM:
Find the volume of the solid generated when the region bounded by $y=1\text{/}\sqrt{x(3-x)},$ $y=0,$ $x=1,$ and $x=2$ is revolved about the *x-*axis.
SOLUTION:
$\frac{4}{3}\pi \;\text{arctanh}[\frac{1}{3}]=\frac{1}{3}\pi \;\text{ln}\;4$
:::

:::exercise {fs-id1165041792555} type= 
PROBLEM:
The velocity of a particle moving along a line is a function of time given by $v(t)=\frac{88{t}^{2}}{{t}^{2}+1}.$ Find the distance that the particle has traveled after $t=5$ sec.
:::
Solve the initial-value problem for *x* as a function of *t.*

:::exercise {fs-id1165042011063} type= 
PROBLEM:
$({t}^{2}-7t+12)\frac{dx}{dt}=1,(t>4,x(5)=0)$
SOLUTION:
$x=\text{−}\text{ln}|t-3|+\text{ln}|t-4|+\text{ln}\;2$
:::

:::exercise {fs-id1165040642521} type= 
PROBLEM:
$(t+5)\frac{dx}{dt}={x}^{2}+1,t>\text{−}5,x(1)=\text{tan}\;1$
:::

:::exercise {fs-id1165042035703} type= 
PROBLEM:
$(2{t}^{3}-2{t}^{2}+t-1)\frac{dx}{dt}=3,x(2)=0$
SOLUTION:
$x=\text{ln}|t-1|-\sqrt{2}\;\text{arctan}(\sqrt{2}t)-\frac{1}{2}\text{ln}({t}^{2}+\frac{1}{2})+\sqrt{2}\;\text{arctan}(2\sqrt{2})+\frac{1}{2}\text{ln}\;4.5$
:::

:::exercise {fs-id1165042039117} type= 
PROBLEM:
Find the *x*-coordinate of the centroid of the area bounded by
$y({x}^{2}-9)=1,$ $y=0,x=4,\;\text{and}\;x=5.$ (Round the answer to two decimal places.)
:::

:::exercise {fs-id1165040774145} type= 
PROBLEM:
Find the volume generated by revolving the area bounded by $y=\frac{1}{{x}^{3}+7{x}^{2}+6x}\text{,}\;x=1,x=7,\;\text{and}\;y=0$ about the *y*-axis.
SOLUTION:
$\frac{2}{5}\pi \;\text{ln}\;\frac{28}{13}$
:::

:::exercise {fs-id1165041831483} type= 
PROBLEM:
Find the area bounded by $y=\frac{x-12}{{x}^{2}-8x-20},$ $y=0,x=2,\;\text{and}\;x=4.$ (Round the answer to the nearest hundredth.)
:::

:::exercise {fs-id1165042287453} type= 
PROBLEM:
Evaluate the integral ${\displaystyle \int \frac{dx}{{x}^{3}+1}.}$
SOLUTION:
$\frac{\text{arctan}[\frac{−1+2x}{\sqrt{3}}]}{\sqrt{3}}+\frac{1}{3}\text{ln}|1+x|-\frac{1}{6}\text{ln}|1-x+{x}^{2}|+C$
:::
For the following problems, use the substitutions $\text{tan}(\frac{x}{2})=t,$ $dx=\frac{2}{1+{t}^{2}}dt,$ $\text{sin}\;x=\frac{2t}{1+{t}^{2}},$ and $\text{cos}\;x=\frac{1-{t}^{2}}{1+{t}^{2}}.$

:::exercise {fs-id1165042012036} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{3-5\;\text{sin}\;x}}$
:::

:::exercise {fs-id1165040646251} type= 
PROBLEM:
Find the area under the curve $y=\frac{1}{1+\text{sin}\;x}$ between $x=0$ and $x=\pi .$ (Assume the dimensions are in inches.)
SOLUTION:
2.0 in.<sup>2</sup>
:::

:::exercise {fs-id1165042301988} type= 
PROBLEM:
Given $\text{tan}(\frac{x}{2})=t,$ derive the formulas $dx=\frac{2}{1+{t}^{2}}dt,$ $\text{sin}\;x=\frac{2t}{1+{t}^{2}},$ and $\text{cos}\;x=\frac{1-{t}^{2}}{1+{t}^{2}}.$
:::

:::exercise {fs-id1165040800455} type= 
PROBLEM:
Evaluate ${\displaystyle \int \frac{\sqrt[3]{x-8}}{x}dx}.$
SOLUTION:
$3{(−8+x)}^{1\text{/}3}$
$−2\sqrt{3}\;\text{arctan}[\frac{−1+{(−8+x)}^{1\text{/}3}}{\sqrt{3}}]$
$−2\;\text{ln}[2+{(−8+x)}^{1\text{/}3}]$
$+\text{ln}[4-2{(−8+x)}^{1\text{/}3}+{(−8+x)}^{2\text{/}3}]+C$
:::

## Glossary
- {def} **partial fraction decomposition**: a technique used to break down a rational function into the sum of simple rational functions

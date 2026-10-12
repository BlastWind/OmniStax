# Integrals Involving Exponential and Logarithmic Functions

## Learning Objectives {section:learning-objectives}
- Integrate functions involving exponential functions.
- Integrate functions involving logarithmic functions.

Exponential and logarithmic functions are used to model population growth, cell growth, and financial growth, as well as depreciation, radioactive decay, and resource consumption, to name only a few applications. In this section, we explore integration involving exponential and logarithmic functions.

## Integrals of Exponential Functions
The exponential function is perhaps the most efficient function in terms of the operations of calculus. The exponential function, $y={e}^{x},$ is its own derivative and its own integral.

:::note [rule] Rule: Integrals of Exponential Functions
Exponential functions can be integrated using the following formulas.

$$ \begin{array}{lll}{\displaystyle \int {e}^{x}dx} & = & {e}^{x}+C \\ {\displaystyle \int {a}^{x}dx} & = & \frac{{a}^{x}}{\text{ln}\;a}+C\end{array} $$  {eq:fs-id1170572374424}

:::

:::example {ex:fs-id11705722115180} Finding an Antiderivative of an Exponential Function

:::exercise {fs-id1170572606041} type= 
PROBLEM:
Find the antiderivative of the exponential function *e*<sup>−*x*</sup>.
SOLUTION:
Use substitution, setting $u=\text{−}x,$ and then $du=−1dx.$ Multiply the *du* equation by −1, so you now have $\text{−}du=dx.$ Then,

$\begin{array}{ll}{\displaystyle \int {e}^{\text{−}x}}dx & =\text{−}{\displaystyle \int {e}^{u}du} \\ \\ & =\text{−}{e}^{u}+C \\ & =\text{−}{e}^{\text{−}x}+C.\end{array}$  {eq:fs-id1170572454214}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571655362} type= 
PROBLEM:
Find the antiderivative of the function using substitution: ${x}^{2}{e}^{−2{x}^{3}}.$
SOLUTION:
${\displaystyle \int {x}^{2}{e}^{−2{x}^{3}}dx=-\frac{1}{6}{e}^{−2{x}^{3}}+C}$
COMMENTARY: Hint
Let *u* equal the exponent on *e*.
:::
:::
A common mistake when dealing with exponential expressions is treating the exponent on *e* the same way we treat exponents in polynomial expressions. We cannot use the power rule for the exponent on *e*. This can be especially confusing when we have both exponentials and polynomials in the same expression, as in the previous checkpoint. In these cases, we should always double-check to make sure we’re using the right rules for the functions we’re integrating.

:::example {ex:fs-id1170572209244} Square Root of an Exponential Function

:::exercise {fs-id1170571602248} type= 
PROBLEM:
Find the antiderivative of the exponential function ${e}^{x}\sqrt{1+{e}^{x}}.$
SOLUTION:
First rewrite the problem using a rational exponent:

${\displaystyle \int {e}^{x}\sqrt{1+{e}^{x}}}dx={\displaystyle \int {e}^{x}{(1+{e}^{x})}^{1\text{/}2}dx}.$  {eq:fs-id1170572549246}

Using substitution, choose $u=1+{e}^{x}.$ Then, $du={e}^{x}dx.$ We have ([ref:CNX_Calc_Figure_05_06_001])

${\displaystyle \int {e}^{x}{(1+{e}^{x})}^{1\text{/}2}dx={\displaystyle \int {u}^{1\text{/}2}du}}.$  {eq:fs-id1170572373474}

Then

${\displaystyle \int {u}^{1\text{/}2}du=\frac{{u}^{3\text{/}2}}{3\text{/}2}+C}=\frac{2}{3}{u}^{3\text{/}2}+C=\frac{2}{3}{(1+{e}^{x})}^{3\text{/}2}+C.$  {eq:fs-id1170572560605}

> FIGURE {fig:CNX_Calc_Figure_05_06_001} src=../../media/CNX_Calc_Figure_05_06_001.jpg
> alt: A graph of the function f(x) = e^x * sqrt(1 + e^x), which is an increasing concave up curve, over [-3, 1]. It begins close to the x axis in quadrant two, crosses the y axis at (0, sqrt(2)), and continues to increase rapidly.
> caption: The graph shows an exponential function times the square root of an exponential function.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572451630} type= 
PROBLEM:
Find the antiderivative of ${e}^{x}{(3{e}^{x}-2)}^{2}.$
SOLUTION:
${\displaystyle \int {e}^{x}{(3{e}^{x}-2)}^{2}dx=\frac{1}{9}{(3{e}^{x}-2)}^{3}}$
COMMENTARY: Hint
Let $u=3{e}^{x}-2\;u=3{e}^{x}-2.$
:::
:::

:::example {ex:fs-id1170572168487} Using Substitution with an Exponential Function

:::exercise {fs-id1170572240614} type= 
PROBLEM:
Use substitution to evaluate the indefinite integral ${\displaystyle \int 3{x}^{2}{e}^{2{x}^{3}}dx.}$
SOLUTION:
Here we choose to let *u* equal the expression in the exponent on *e*. Let $u=2{x}^{3}$ and $du=6{x}^{2}dx..$ Again, *du* is off by a constant multiplier; the original function contains a factor of 3*x*<sup>2</sup>, not 6*x*<sup>2</sup>. Multiply both sides of the equation by $\frac{1}{2}$ so that the integrand in *u* equals the integrand in *x*. Thus,

${\displaystyle \int 3{x}^{2}{e}^{2{x}^{3}}}dx=\frac{1}{2}{\displaystyle \int {e}^{u}du}.$  {eq:fs-id1170572470447}

Integrate the expression in *u* and then substitute the original expression in *x* back into the *u* integral:

$\frac{1}{2}{\displaystyle \int {e}^{u}}du=\frac{1}{2}{e}^{u}+C=\frac{1}{2}{e}^{2{x}^{3}}+C.$  {eq:fs-id1170572448333}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572294922} type= 
PROBLEM:
Evaluate the indefinite integral ${\displaystyle \int 2}{x}^{3}{e}^{{x}^{4}}dx.$
SOLUTION:
${\displaystyle \int 2}{x}^{3}{e}^{{x}^{4}}dx=\frac{1}{2}{e}^{{x}^{4}}$
COMMENTARY: Hint
Let $u={x}^{4}.$
:::
:::
As mentioned at the beginning of this section, exponential functions are used in many real-life applications. The number *e* is often associated with compounded or accelerating growth, as we have seen in earlier sections about the derivative. Although the derivative represents a rate of change or a growth rate, the integral represents the total change or the total growth. Let’s look at an example in which integration of an exponential function solves a common business application.
A {index:price–demand function} tells us the relationship between the quantity of a product demanded and the price of the product. In general, price decreases as quantity demanded increases. The marginal price–demand function is the derivative of the price–demand function and it tells us how fast the price changes at a given level of production. These functions are used in business to determine the price–elasticity of demand, and to help companies determine whether changing production levels would be profitable.

:::example {ex:fs-id1170572100406} Finding a Price–Demand Equation

:::exercise {fs-id1170571597871} type= 
PROBLEM:
Find the price–demand equation for a particular brand of toothpaste at a supermarket chain when the demand is 50 tubes per week at $2.35 per tube, given that the marginal price—demand function, ${p}^{'}\text{(}x),$ for *x* number of tubes per week, is given as

$p'(x)=−0.015{e}^{−0.01x}.$  {eq:fs-id1170572141865}

If the supermarket chain sells 100 tubes per week, what price should it set?
SOLUTION:
To find the price–demand equation, integrate the marginal price–demand function. First find the antiderivative, then look at the particulars. Thus,

$\begin{array}{ll} \\ \\ p(x) & ={\displaystyle \int −0.015{e}^{−0.01x}dx} \\ & =−0.015{\displaystyle \int {e}^{−0.01x}}dx.\end{array}$  {eq:fs-id1170572216339}

Using substitution, let $u=−0.01x$ and $du=−0.01dx.$ Then, divide both sides of the *du* equation by −0.01. This gives

$\begin{array}{ll}\frac{−0.015}{−0.01}{\displaystyle \int {e}^{u}du} & =1.5{\displaystyle \int {e}^{u}du} \\ \\ & =1.5{e}^{u}+C \\ & =1.5{e}^{−0.01x}+C.\end{array}$  {eq:fs-id1170572522381}

The next step is to solve for *C*. We know that when the price is $2.35 per tube, the demand is 50 tubes per week. This means

$\begin{array}{ll} \\ \\ p(50) & =1.5{e}^{−0.01(50)}+C \\ & =2.35.\end{array}$  {eq:fs-id1170571704350}

Now, just solve for *C*:

$\begin{array}{ll} \\ C & =2.35-1.5{e}^{−0.5} \\ & =2.35-0.91 \\ & =1.44.\end{array}$  {eq:fs-id1170572415392}

Thus,

$p(x)=1.5{e}^{−0.01x}+1.44.$  {eq:fs-id1170572375703}

If the supermarket sells 100 tubes of toothpaste per week, the price would be

$p(100)=1.5{e}^{−0.01(100)}+1.44=1.5{e}^{−1}+1.44\approx 1.99.$  {eq:fs-id1170571653359}

The supermarket should charge $1.99 per tube if it is selling 100 tubes per week.
:::
:::

:::example {ex:fs-id1170571637964} Evaluating a Definite Integral Involving an Exponential Function

:::exercise {fs-id1170572204890} type= 
PROBLEM:
Evaluate the definite integral ${\displaystyle \int_{1}^{2}{e}^{1-x}dx}.$
SOLUTION:
Again, substitution is the method to use. Let $u=1-x,$ so $du=−1dx$ or $\text{−}du=dx.$ Then ${\displaystyle \int {e}^{1-x}dx=\text{−}{\displaystyle \int {e}^{u}du}}.$ Next, change the limits of integration. Using the equation $u=1-x,$ we have

$\begin{array}{l}u=1-(1)=0 \\ u=1-(2)=−1.\end{array}$  {eq:fs-id1170571652053}

The integral then becomes

$\begin{array}{ll}{\displaystyle \int_{1}^{2}{e}^{1-x}dx} & =\text{−}{\displaystyle \int_{0}^{−1}{e}^{u}du} \\ \\ \\ & ={\displaystyle \int_{−1}^{0}{e}^{u}du} \\ & ={{e}^{u}|}_{−1}^{0} \\ & ={e}^{0}-({e}^{−1}) \\ & =\text{−}{e}^{−1}+1.\end{array}$  {eq:fs-id1170571645665}

See [ref:CNX_Calc_Figure_05_06_002].

> FIGURE {fig:CNX_Calc_Figure_05_06_002} src=../../media/CNX_Calc_Figure_05_06_002.jpg
> alt: A graph of the function f(x) = e^(1-x) over [0, 3]. It crosses the y axis at (0, e) as a decreasing concave up curve and symptotically approaches 0 as x goes to infinity.
> caption: The indicated area can be calculated by evaluating a definite integral using substitution.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571599290} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{0}^{2}{e}^{2x}dx}.$
SOLUTION:
$\frac{1}{2}{\displaystyle \int_{0}^{4}{e}^{u}du=\frac{1}{2}({e}^{4}-1)}$
COMMENTARY: Hint
Let $u=2x.$
:::
:::

:::example {ex:fs-id1170572624841} Growth of Bacteria in a Culture

:::exercise {fs-id1170572624843} type= 
PROBLEM:
Suppose the rate of {index:growth of bacteria} in a Petri dish is given by $q(t)={3}^{t},$ where *t* is given in hours and $q(t)$ is given in thousands of bacteria per hour. If a culture starts with 10,000 bacteria, find a function $Q(t)$ that gives the number of bacteria in the Petri dish at any time *t*. How many bacteria are in the dish after 2 hours?
SOLUTION:
We have

$Q(t)={\displaystyle \int {3}^{t}dt=\frac{{3}^{t}}{\text{ln}\;3}+C.}$  {eq:fs-id1170571699008}

Then, at $t=0$ we have $Q(0)=10=\frac{1}{\text{ln}\;3}+C,$ so $C\approx 9.090$ and we get

$Q(t)=\frac{{3}^{t}}{\text{ln}\;3}+9.090.$  {eq:fs-id1170571775806}

At time $t=2,$ we have

$Q(2)=\frac{{3}^{2}}{\text{ln}\;3}+9.090$  {eq:fs-id1170571698223}

$=17.282.$  {eq:fs-id1170571637497}

After 2 hours, there are 17,282 bacteria in the dish.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571637518} type= 
PROBLEM:
From [ref:fs-id1170572624841], suppose the bacteria grow at a rate of $q(t)={2}^{t}.$ Assume the culture still starts with 10,000 bacteria. Find $Q(t).$ How many bacteria are in the dish after 3 hours?
SOLUTION:
$Q(t)=\frac{{2}^{t}}{\text{ln}\;2}+8.557.$ There are 20,099 bacteria in the dish after 3 hours.
COMMENTARY: Hint
Use the procedure from [ref:fs-id1170572624841] to solve the problem.
:::
:::

:::example {ex:fs-id1170571807209} Fruit Fly Population Growth

:::exercise {fs-id1170571807211} type= 
PROBLEM:
Suppose a population of {index:fruit flies} increases at a rate of $g(t)=2{e}^{0.02t},$ in flies per day. If the initial population of fruit flies is 100 flies, how many flies are in the population after 10 days?
SOLUTION:
Let $G(t)$ represent the number of flies in the population at time *t*. Applying the net change theorem, we have

$\begin{array}{ll} \\ \\ G(10) & =G(0)+{{\displaystyle \int}}_{0}^{10}2{e}^{0.02t}dt \\ & =100+{[\frac{2}{0.02}{e}^{0.02t}]|}_{0}^{10} \\ & =100+{[100{e}^{0.02t}]|}_{0}^{10} \\ & =100+100{e}^{0.2}-100 \\ & \approx 122.\end{array}$  {eq:fs-id1170571712220}

There are 122 flies in the population after 10 days.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572338477} type= 
PROBLEM:
Suppose the rate of growth of the fly population is given by $g(t)={e}^{0.01t},$ and the initial fly population is 100 flies. How many flies are in the population after 15 days?
SOLUTION:
There are 116 flies.
COMMENTARY: Hint
Use the process from [ref:fs-id1170571807209] to solve the problem.
:::
:::

:::example {ex:fs-id1170571653089} Evaluating a Definite Integral Using Substitution

:::exercise {fs-id1170571653091} type= 
PROBLEM:
Evaluate the definite integral using substitution: ${\displaystyle \int_{1}^{2}\frac{{e}^{1\text{/}x}}{{x}^{2}}dx}.$
SOLUTION:
This problem requires some rewriting to simplify applying the properties. First, rewrite the exponent on *e* as a power of *x*, then bring the *x*<sup>2</sup> in the denominator up to the numerator using a negative exponent. We have

${\displaystyle \int_{1}^{2}\frac{{e}^{1\text{/}x}}{{x}^{2}}dx}={\displaystyle \int_{1}^{2}{e}^{{x}^{−1}}{x}^{−2}dx}.$  {eq:fs-id1170572587738}

Let $u={x}^{−1},$ the exponent on *e*. Then

$\begin{array}{rl}du & =\text{−}{x}^{−2}dx \\ -du & ={x}^{−2}dx.\end{array}$  {eq:fs-id1170571636314}

Bringing the negative sign outside the integral sign, the problem now reads

$\text{−}{\displaystyle \int {e}^{u}du}.$  {eq:fs-id1170571599636}

Next, change the limits of integration:

$\begin{array}{l} \\ \\ u={(1)}^{−1}=1 \\ u={(2)}^{−1}=\frac{1}{2}.\end{array}$  {eq:fs-id1170571599666}

Notice that now the limits begin with the larger number, meaning we must multiply by −1 and interchange the limits. Thus,

$\begin{array}{ll} \\ \\ \\ \text{−}{\displaystyle \int_{1}^{1\text{/}2}{e}^{u}du} & ={\displaystyle \int_{1\text{/}2}^{1}{e}^{u}du} \\ & ={e}^{u}{|}_{1\text{/}2}^{1} \\ & =e-{e}^{1\text{/}2} \\ & =e-\sqrt{e}.\end{array}$  {eq:fs-id1170572293466}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572554378} type= 
PROBLEM:
Evaluate the definite integral using substitution: ${\displaystyle \int_{1}^{2}\frac{1}{{x}^{3}}{e}^{4{x}^{−2}}}dx.$
SOLUTION:
${\displaystyle \int_{1}^{2}\frac{1}{{x}^{3}}{e}^{4{x}^{−2}}}dx=\frac{1}{8}[{e}^{4}-e]$
COMMENTARY: Hint
Let $u=4{x}^{−2}.$
:::
:::

## Integrals Involving Logarithmic Functions
Integrating functions of the form $f(x)={x}^{−1}$ result in the absolute value of the natural log function, as shown in the following rule. Integral formulas for other logarithmic functions, such as $f(x)=\text{ln}\;x$ and $f(x)={\text{log}}_{a}x,$ are also included in the rule.

:::note [rule] Rule: Integration Formulas Involving Logarithmic Functions
The following formulas can be used to evaluate integrals involving logarithmic functions.

$$ \begin{array}{rll}{\displaystyle \int {x}^{−1}dx} & = & \text{ln}|x|+C \\ {\displaystyle \int \text{ln}}\;x\;dx & = & x\;\text{ln}\;x-x+C=x(\text{ln}\;x-1)+C \\ {\displaystyle \int {\text{log}}_{a}}x\;dx & = & \frac{x}{\text{ln}\;a}(\text{ln}\;x-1)+C\end{array} $$  {eq:fs-id1170572543666}

:::

:::example {ex:fs-id1170571653392} Finding an Antiderivative Involving $\text{ln}\;x$

:::exercise {fs-id1170571653394} type= 
PROBLEM:
Find the antiderivative of the function $\frac{3}{x-10}.$
SOLUTION:
First factor the 3 outside the integral symbol. Then use the *u*<sup>−1</sup> rule. Thus,

$\begin{array}{ll}{\displaystyle \int \frac{3}{x-10}dx} & =3{\displaystyle \int \frac{1}{x-10}dx} \\ \\ \\ & =3{\displaystyle \int \frac{du}{u}} \\ & =3\;\text{ln}|u|+C \\ & =3\;\text{ln}|x-10|+C,x≠10.\end{array}$  {eq:fs-id1170571653444}

See [ref:CNX_Calc_Figure_05_06_003].

> FIGURE {fig:CNX_Calc_Figure_05_06_003} src=../../media/CNX_Calc_Figure_05_06_003.jpg
> alt: A graph of the function f(x) = 3 / (x – 10). There is an asymptote at x=10. The first segment is a decreasing concave down curve that approaches 0 as x goes to negative infinity and approaches negative infinity as x goes to 10. The second segment is a decreasing concave up curve that approaches infinity as x goes to 10 and approaches 0 as x approaches infinity.
> caption: The domain of this function is $x≠10.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571597476} type= 
PROBLEM:
Find the antiderivative of $\frac{1}{x+2}.$
SOLUTION:
$\text{ln}|x+2|+C$
COMMENTARY: Hint
Follow the pattern from [ref:fs-id1170571653392] to solve the problem.
:::
:::

:::example {ex:fs-id1170572480542} Finding an Antiderivative of a Rational Function

:::exercise {fs-id1170572480545} type= 
PROBLEM:
Find the antiderivative of $\frac{2{x}^{3}+3x}{{x}^{4}+3{x}^{2}}.$
SOLUTION:
This can be rewritten as ${\displaystyle \int (2{x}^{3}+3x){({x}^{4}+3{x}^{2})}^{−1}dx}.$ Use substitution. Let $u={x}^{4}+3{x}^{2},$ then $du=4{x}^{3}+6x.$ Alter *du* by factoring out the 2. Thus,

$\begin{array}{rll} \\ du & = & (4{x}^{3}+6x)dx \\ & = & 2(2{x}^{3}+3x)dx \\ \frac{1}{2}\;du & = & (2{x}^{3}+3x)dx.\end{array}$  {eq:fs-id1170571807881}

Rewrite the integrand in *u*:

${\displaystyle \int (2{x}^{3}+3x){({x}^{4}+3{x}^{2})}^{−1}dx}=\frac{1}{2}{\displaystyle \int {u}^{−1}}du.$  {eq:fs-id1170572331833}

Then we have

$\begin{array}{ll}\frac{1}{2}{\displaystyle \int {u}^{−1}du} & =\frac{1}{2}\text{ln}|u|+C \\ \\ & =\frac{1}{2}\text{ln}|{x}^{4}+3{x}^{2}|+C.\end{array}$  {eq:fs-id1170571733968}

:::
:::

:::example {ex:fs-id1170571649922} Finding an Antiderivative of a Logarithmic Function

:::exercise {fs-id1170571649924} type= 
PROBLEM:
Find the antiderivative of the log function ${\text{log}}_{2}x.$
SOLUTION:
Follow the format in the formula listed in the rule on integration formulas involving logarithmic functions. Based on this format, we have

${\displaystyle \int {\text{log}}_{2}xdx=\frac{x}{\text{ln}\;2}(\text{ln}\;x-1)+C}.$  {eq:fs-id1170571649959}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571660184} type= 
PROBLEM:
Find the antiderivative of ${\text{log}}_{3}x.$
SOLUTION:
$\frac{x}{\text{ln}\;3}(\text{ln}\;x-1)+C$
COMMENTARY: Hint
Follow [ref:fs-id1170571649922] and refer to the rule on integration formulas involving logarithmic functions.
:::
:::
[ref:fs-id1170572274908] is a definite integral of a trigonometric function. With trigonometric functions, we often have to apply a trigonometric property or an identity before we can move forward. Finding the right form of the integrand is usually the key to a smooth integration.

:::example {ex:fs-id1170572274908} Evaluating a Definite Integral

:::exercise {fs-id1170572274910} type= 
PROBLEM:
Find the definite integral of ${\displaystyle \int_{0}^{\pi \text{/}2}\frac{\text{sin}\;x}{1+\text{cos}\;x}dx.}$
SOLUTION:
We need substitution to evaluate this problem. Let $u=1+\text{cos}\;x,,$ so $du=\text{−}\text{sin}\;x\;dx.$ Rewrite the integral in terms of *u*, changing the limits of integration as well. Thus,

$\begin{array}{l}u=1+\text{cos}(0)=2 \\ u=1+\text{cos}(\frac{\pi}{2})=1.\end{array}$  {eq:fs-id1170571636203}

Then

$\begin{array}{ll}{\displaystyle \int_{0}^{\pi \text{/}2}\frac{\text{sin}\;x}{1+\text{cos}\;x}} & =\text{−}{\displaystyle \int_{2}^{1}{u}^{−1}du} \\ \\ \\ & ={\displaystyle \int_{1}^{2}{u}^{−1}du} \\ & ={\text{ln}|u||}_{1}^{2} \\ & =[\text{ln}\;2-\text{ln}\;1] \\ & =\text{ln}\;2.\end{array}$  {eq:fs-id1170572510111}

:::
:::

## Key Concepts {section:key-concepts}
- Exponential and logarithmic functions arise in many real-world applications, especially those involving growth and decay.
- Substitution is often used to evaluate integrals involving exponential functions or logarithms.

## Key Equations {section:key-equations}

> TABLE {tab:eip-502} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Integrals of Exponential Functions** | ${\displaystyle \int {e}^{x}dx={e}^{x}+C}$<br> ${\displaystyle \int {a}^{x}dx=\frac{{a}^{x}}{\text{ln}\;a}+C}$ |
| **Integration Formulas Involving Logarithmic Functions** | ${\displaystyle \int {x}^{−1}dx=\text{ln}|x|+C}$<br> ${\displaystyle \int \text{ln}\;x\;dx=x\;\text{ln}\;x-x+C=x(\text{ln}\;x-1)+C}$<br> ${\displaystyle \int {\text{log}}_{a}\;x\;dx=\frac{x}{\text{ln}\;a}(\text{ln}\;x-1)+C}$ |

##  {section:section-exercises}
In the following exercises, compute each indefinite integral.

:::exercise {fs-id1170571699485} type= 
PROBLEM:
${\displaystyle \int {e}^{2x}}dx$
:::

:::exercise {fs-id1170571678838} type= 
PROBLEM:
${\displaystyle \int {e}^{−3x}}dx$
SOLUTION:
$\frac{−1}{3}{e}^{−3x}+C$
:::

:::exercise {fs-id1170572601241} type= 
PROBLEM:
${\displaystyle \int {2}^{x}}dx$
:::

:::exercise {fs-id1170572601296} type= 
PROBLEM:
${\displaystyle \int {3}^{\text{−}x}}dx$
SOLUTION:
$-\frac{{3}^{\text{−}x}}{\text{ln}\;3}+C$
:::

:::exercise {fs-id1170571679817} type= 
PROBLEM:
${\displaystyle \int \frac{1}{2x}}dx$
:::

:::exercise {fs-id1170572611839} type= 
PROBLEM:
${\displaystyle \int \frac{2}{x}}dx$
SOLUTION:
$2ln|x|+C\text{or}ln({x}^{2})\text{+C}$
:::

:::exercise {fs-id1170572611894} type= 
PROBLEM:
${\displaystyle \int \frac{1}{{x}^{2}}}dx$
:::

:::exercise {fs-id1170572333073} type= 
PROBLEM:
${\displaystyle \int \frac{1}{\sqrt{x}}}dx$
SOLUTION:
$2\sqrt{x}+C$
:::
In the following exercises, find each indefinite integral by using appropriate substitutions.

:::exercise {fs-id1170572333125} type= 
PROBLEM:
${\displaystyle \int \frac{\text{ln}\;x}{x}}dx$
:::

:::exercise {fs-id1170571638228} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{x{(\text{ln}\;x)}^{2}}}$
SOLUTION:
$-\frac{1}{\text{ln}\;x}+C$
:::

:::exercise {fs-id1170571810876} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{x\;\text{ln}\;x}}\;(x>1)$
:::

:::exercise {fs-id1170571697166} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{x\;\text{ln}\;x\;\text{ln}(\text{ln}\;x)}}$
SOLUTION:
$\text{ln}(\text{ln}(\text{ln}\;x))+C$
:::

:::exercise {fs-id1170571539147} type= 
PROBLEM:
${\displaystyle \int \text{tan}\;\theta \;d\theta}$
:::

:::exercise {fs-id1170571539202} type= 
PROBLEM:
${\displaystyle \int \frac{\text{cos}\;x-x\;\text{sin}\;x}{x\;\text{cos}\;x}dx}$
SOLUTION:
$\text{ln}(x\;\text{cos}\;x)+C$
:::

:::exercise {fs-id1170571543268} type= 
PROBLEM:
${\displaystyle \int \frac{\text{ln}(\text{sin}\;x)}{\text{tan}\;x}dx}$
:::

:::exercise {fs-id1170572456410} type= 
PROBLEM:
${\displaystyle \int \text{ln}(\text{cos}\;x)}\text{tan}\;xdx$
SOLUTION:
$-\frac{1}{2}{(\text{ln}(\text{cos}(x)))}^{2}+C$
:::

:::exercise {fs-id1170572396562} type= 
PROBLEM:
${\displaystyle \int x}{e}^{\text{−}{x}^{2}}dx$
:::

:::exercise {fs-id1170571580978} type= 
PROBLEM:
${\displaystyle \int {x}^{2}}{e}^{\text{−}{x}^{3}}dx$
SOLUTION:
$\frac{\text{−}{e}^{\text{−}{x}^{3}}}{3}+C$
:::

:::exercise {fs-id1170572218606} type= 
PROBLEM:
${\displaystyle \int {e}^{\text{sin}\;x}\text{cos}\;xdx}$
:::

:::exercise {fs-id1170572218671} type= 
PROBLEM:
${\displaystyle \int {e}^{\text{tan}\;x}}{\text{sec}}^{2}xdx$
SOLUTION:
${e}^{\text{tan}\;x}+C$
:::

:::exercise {fs-id1170572386168} type= 
PROBLEM:
${\displaystyle \int {e}^{\text{ln}\;x}\frac{dx}{x}}$
:::

:::exercise {fs-id1170572643203} type= 
PROBLEM:
${\displaystyle \int \frac{{e}^{\text{ln}(1-t)}}{1-t}}dt$
SOLUTION:
$t+C$
:::
In the following exercises, verify by differentiation that ${\displaystyle \int \text{ln}}\;x\;dx=x(\text{ln}\;x-1)+C,$ then use appropriate changes of variables to compute the integral.

:::exercise {fs-id1170572373699} type= 
PROBLEM:
$\int x\text{ln}\;xdx$ $\text{(}Hint\text{:}\;\int x\text{ln}\;xdx=\frac{1}{2}\int x\text{ln}({x}^{2})dx)$
:::

:::exercise {fs-id1170571710720} type= 
PROBLEM:
$\int {x}^{2}\text{ln(}{x}^{2})\;dx$
SOLUTION:
$\frac{2}{9}{x}^{3}(\text{ln}({x}^{3})-1)+C$
:::

:::exercise {fs-id1170572399045} type= 
PROBLEM:
${\displaystyle \int \frac{\text{ln}\;x}{{x}^{2}}}dx$ $\text{(}Hint\text{:}\;\text{Set}\;u=\frac{1}{x}\text{.}\text{)}$
:::

:::exercise {fs-id1170572415189} type= 
PROBLEM:
${\displaystyle \int \frac{\text{ln}\;x}{\sqrt{x}}dx}$ $\text{(}Hint\text{:}\;\text{Set}\;u=\sqrt{x}\text{.}\text{)}$
SOLUTION:
$2\sqrt{x}(\text{ln}\;x-2)+C$
:::

:::exercise {fs-id1170572168746} type= 
PROBLEM:
Write an integral to express the area under the graph of $y=\frac{1}{t}$ from $t=1$ to *e<sup>x</sup>* and evaluate the integral.
:::

:::exercise {fs-id1170572629242} type= 
PROBLEM:
Write an integral to express the area under the graph of $y={e}^{t}$ between $t=0$ and $t=\text{ln}\;x,$ and evaluate the integral.
SOLUTION:
${\displaystyle \int_{0}^{\text{ln}\;x}{e}^{t}dt={e}^{t}{|}_{0}^{\text{ln}\;x}={e}^{\text{ln}\;x}-{e}^{0}=x-1}$
:::
In the following exercises, use appropriate substitutions to express the trigonometric integrals in terms of compositions with logarithms.

:::exercise {fs-id1170572569965} type= 
PROBLEM:
${\displaystyle \int \text{tan}(2x)dx}$
:::

:::exercise {fs-id1170571571932} type= 
PROBLEM:
${\displaystyle \int \frac{\text{sin}(3x)-\text{cos}(3x)}{\text{sin}(3x)+\text{cos}(3x)}dx}$
SOLUTION:
$-\frac{1}{3}\text{ln}|\text{sin}(3x)+\text{cos}(3x)|\text{+C}$
:::

:::exercise {fs-id1170572379018} type= 
PROBLEM:
${\displaystyle \int \frac{x\;\text{sin}({x}^{2})}{\text{cos}({x}^{2})}dx}$
:::

:::exercise {fs-id1170571777887} type= 
PROBLEM:
${\displaystyle \int x\;\text{csc}({x}^{2})dx}$
SOLUTION:
$-\frac{1}{2}\text{ln}|\text{csc}({x}^{2})+\text{cot}({x}^{2})|+C$
:::

:::exercise {fs-id1170572310019} type= 
PROBLEM:
${\displaystyle \int \text{ln}(\text{cos}\;x)\text{tan}\;x\;dx}$
:::

:::exercise {fs-id1170571613744} type= 
PROBLEM:
${\displaystyle \int \text{ln}(\text{csc}\;x)\text{cot}\;xdx}$
SOLUTION:
$-\frac{1}{2}{(\text{ln}(\text{csc}\;x))}^{2}+C$
:::

:::exercise {fs-id1170572451363} type= 
PROBLEM:
${\displaystyle \int \frac{{e}^{x}-{e}^{\text{−}x}}{{e}^{x}+{e}^{\text{−}x}}dx}$
:::
In the following exercises, evaluate the definite integral.

:::exercise {fs-id1170572347000} type= 
PROBLEM:
${\displaystyle \int_{1}^{2}\frac{1+2x+{x}^{2}}{3x+3{x}^{2}+{x}^{3}}dx}$
SOLUTION:
$\frac{1}{3}\text{ln}(\frac{26}{7})$
:::

:::exercise {fs-id1170572329945} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi \text{/}4}\text{tan}\;x\;dx}$
:::

:::exercise {fs-id1170572330008} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi \text{/}3}\frac{\text{sin}\;x-\text{cos}\;x}{\text{sin}\;x+\text{cos}\;x}dx}$
SOLUTION:
$\text{ln}(\sqrt{3}-1)$
:::

:::exercise {fs-id1170571613677} type= 
PROBLEM:
${\displaystyle \int_{\pi \text{/}6}^{\pi \text{/}2}\text{csc}\;xdx}$
:::

:::exercise {fs-id1170572434951} type= 
PROBLEM:
${\displaystyle \int_{\pi \text{/}4}^{\pi \text{/}3}\text{cot}\;xdx}$
SOLUTION:
$\frac{1}{2}\text{ln}\;\frac{3}{2}$
:::
In the following exercises, integrate using the indicated substitution.

:::exercise {fs-id1170572412283} type= 
PROBLEM:
${\displaystyle \int \frac{x}{x-100}dx};u=x-100$
:::

:::exercise {fs-id1170572627084} type= 
PROBLEM:
${\displaystyle \int \frac{y-1}{y+1}dy};u=y+1$
SOLUTION:
$y-2\;\text{ln}|y+1|+C$
:::

:::exercise {fs-id1170572627173} type= 
PROBLEM:
${\displaystyle \int \frac{1-{x}^{2}}{3x-{x}^{3}}dx};u=3x-{x}^{3}$
:::

:::exercise {fs-id1170572572338} type= 
PROBLEM:
${\displaystyle \int \frac{\text{sin}\;x+\text{cos}\;x}{\text{sin}\;x-\text{cos}\;x}dx};u=\text{sin}\;x-\text{cos}\;x$
SOLUTION:
$\text{ln}|\text{sin}\;x-\text{cos}\;x|+C$
:::

:::exercise {fs-id1170572129747} type= 
PROBLEM:
${\displaystyle \int {e}^{2x}}\sqrt{1-{e}^{2x}}dx;u={e}^{2x}$
:::

:::exercise {fs-id1170572379189} type= 
PROBLEM:
${\displaystyle \int \text{ln}(x)\frac{\sqrt{1-{(\text{ln}\;x)}^{2}}}{x}dx};u=\text{ln}\;x$
SOLUTION:
$-\frac{1}{3}{(1-(\text{ln}{x)}^{2})}^{3\text{/}2}+C$
:::
In the following exercises, does the right-endpoint approximation overestimate or underestimate the exact area? Calculate the right endpoint estimate *R*<sub>50</sub> and solve for the exact area.

:::exercise {fs-id1170572330236} type= 
PROBLEM:
**[T]** $y={e}^{x}$ over $[0,1]$
:::

:::exercise {fs-id1170572129062} type= 
PROBLEM:
**[T]** $y={e}^{\text{−}x}$ over $[0,1]$
SOLUTION:
Exact solution: $\frac{e-1}{e},{R}_{50}=0.6258.$ Since *f* is decreasing, the right endpoint estimate underestimates the area.
:::

:::exercise {fs-id1170572129147} type= 
PROBLEM:
**[T]** $y=\text{ln}(x)$ over $[1,2]$
:::

:::exercise {fs-id1170572223556} type= 
PROBLEM:
**[T]** $y=\frac{x+1}{{x}^{2}+2x+6}$ over $[0,1]$
SOLUTION:
Exact solution: $\frac{2\;\text{ln}(3)-\text{ln}(6)}{2},{R}_{50}=0.2033.$ Since *f* is increasing, the right endpoint estimate overestimates the area.
:::

:::exercise {fs-id1170571569011} type= 
PROBLEM:
**[T]** $y={2}^{x}$ over $[−1,0]$
:::

:::exercise {fs-id1170572309777} type= 
PROBLEM:
**[T]** $y=\text{−}{2}^{\text{−}x}$ over $[0,1]$
SOLUTION:
Exact solution: $-\frac{1}{\text{ln}(4)},{R}_{50}=−0.7164.$ Since *f* is negative and increasing on the interval, the right-endpoint estimate overestimates the value of the integral, but it underestimates the area of the region (absolute value of the integral).
:::
In the following exercises, $f(x)\ge 0$ for $a\le x\le b.$ Find the area under the graph of $f(x)$ between the given values *a* and *b* by integrating.

:::exercise {fs-id1170572582554} type= 
PROBLEM:
$f(x)=\frac{{\text{log}}_{10}(x)}{x};a=10,b=100$
:::

:::exercise {fs-id1170572582636} type= 
PROBLEM:
$f(x)=\frac{{\text{log}}_{2}(x)}{x};a=32,b=64$
SOLUTION:
$\frac{11}{2}\text{ln}\;2$
:::

:::exercise {fs-id1170572351541} type= 
PROBLEM:
$f(x)={2}^{\text{−}x};a=1,b=2$
:::

:::exercise {fs-id1170571638055} type= 
PROBLEM:
$f(x)={2}^{\text{−}x};a=3,b=4$
SOLUTION:
$\frac{1}{\text{ln}(65,536)}$
:::

:::exercise {fs-id1170571638130} type= 
PROBLEM:
Find the area under the graph of the function $f(x)=x{e}^{\text{−}{x}^{2}}$ between $x=0$ and $x=5.$
:::

:::exercise {fs-id1170571610335} type= 
PROBLEM:
Compute the integral of $f(x)=x{e}^{\text{−}{x}^{2}}$ and find the smallest value of *N* such that the area under the graph $f(x)=x{e}^{\text{−}{x}^{2}}$ between $x=N$ and $x=N+1$ is, at most, 0.01.
SOLUTION:
${\displaystyle \int_{N}^{N+1}x{e}^{\text{−}{x}^{2}}dx=\frac{1}{2}({e}^{\text{−}{N}^{2}}-{e}^{\text{−}{(N+1)}^{2}})}.$ The quantity is less than 0.01 when $N=2.$
:::

:::exercise {fs-id1170572368492} type= 
PROBLEM:
Find the limit, as *N* tends to infinity, of the area under the graph of $f(x)=x{e}^{\text{−}{x}^{2}}$ between $x=0$ and $x=N.$
:::

:::exercise {fs-id1170572448465} type= 
PROBLEM:
Show that ${\displaystyle \int_{a}^{b}\frac{dt}{t}}={\displaystyle \int_{1\text{/}b}^{1\text{/}a}\frac{dt}{t}}$ when $0<a\le b.$
SOLUTION:
${\displaystyle \int_{a}^{b}\frac{dx}{x}}=\text{ln}(b)-\text{ln}(a)=\text{ln}(\frac{1}{a})-\text{ln}(\frac{1}{b})={\displaystyle \int_{1\text{/}b}^{1\text{/}a}\frac{dx}{x}}$
:::

:::exercise {fs-id1170572503285} type= 
PROBLEM:
Suppose that $f(x)>0$ for all *x* and that *f* and *g* are differentiable. Use the identity ${f}^{g}={e}^{g\;\text{ln}\;f}$ and the chain rule to find the derivative of ${f}^{g}.$
:::

:::exercise {fs-id1170572558119} type= 
PROBLEM:
Use the previous exercise to find the antiderivative of $h(x)={x}^{x}(1+\text{ln}\;x)$ and evaluate ${\displaystyle \int_{2}^{3}{x}^{x}(1+\text{ln}\;x)dx}.$
SOLUTION:
23
:::

:::exercise {fs-id1170571814009} type= 
PROBLEM:
Show that if $c>0,$ then the integral of $1\text{/}x$ from *ac* to *bc* $(0<a<b)$ is the same as the integral of $1\text{/}x$ from *a* to *b*.
:::
The following exercises are intended to derive the fundamental properties of the natural log starting from the *definition* $\text{ln}(x)={\displaystyle \int_{1}^{x}\frac{dt}{t}},$ using properties of the definite integral and making no further assumptions.

:::exercise {fs-id1170572307674} type= 
PROBLEM:
Use the identity $\text{ln}(x)={\displaystyle \int_{1}^{x}\frac{dt}{t}}$ to derive the identity $\text{ln}(\frac{1}{x})=\text{−}\text{ln}\;x.$
SOLUTION:
We may assume that $x>1,\text{so}\;\frac{1}{x}<1.$ Then, ${\displaystyle \int_{1}^{1\text{/}x}\frac{dt}{t}}.$ Now make the substitution $u=\frac{1}{t},$ so $du=-\frac{dt}{{t}^{2}}$ and $\frac{du}{u}=-\frac{dt}{t},$ and change endpoints: ${\displaystyle \int_{1}^{1\text{/}x}\frac{dt}{t}}=\text{−}{\displaystyle \int_{1}^{x}\frac{du}{u}}=\text{−}\text{ln}\;x.$
:::

:::exercise {fs-id1170572218470} type= 
PROBLEM:
Use a change of variable in the integral ${\displaystyle \int_{1}^{xy}\frac{1}{t}dt}$ to show that $\text{ln}\;xy=\text{ln}\;x+\text{ln}\;y\;\text{for}\;x,y>0.$
:::

:::exercise {fs-id1170571629695} type= 
PROBLEM:
Use the identity $\text{ln}\;x={\displaystyle \int_{1}^{x}\frac{dt}{t}}$ to show that $\text{ln}(x)$ is an increasing function of *x* on $[0,\infty ),$ and use the previous exercises to show that the range of $\text{ln}(x)$ is $(\text{−}\infty ,\infty ).$ Without any further assumptions, conclude that $\text{ln}(x)$ has an inverse function defined on $(\text{−}\infty ,\infty ).$
SOLUTION:
Answers will vary.
:::

:::exercise {fs-id1170571624156} type= 
PROBLEM:
Pretend, for the moment, that we do not know that ${e}^{x}$ is the inverse function of $\text{ln}(x),$ but keep in mind that $\text{ln}(x)$ has an inverse function defined on $(\text{−}\infty ,\infty ).$ Call it *E*. Use the identity $\text{ln}\;xy=\text{ln}\;x+\text{ln}\;y$ to deduce that $E(a+b)=E(a)E(b)$ for any real numbers *a*, *b*.
:::

:::exercise {fs-id1170572554258} type= 
PROBLEM:
Pretend, for the moment, that we do not know that ${e}^{x}$ is the inverse function of $\text{ln}\;x,$ but keep in mind that $\text{ln}\;x$ has an inverse function defined on $(\text{−}\infty ,\infty ).$ Call it *E*. Show that $E'(t)=E(t).$
SOLUTION:
$x=E(\text{ln}(x)).$ Then, $1=\frac{E'(\text{ln}\;x)}{x}\;\text{or}\;x=E'(\text{ln}\;x).$ Since any number *t* can be written $t=\text{ln}\;x$ for some *x*, and for such *t* we have $x=E(t),$ it follows that for any $t,E'(t)=E(t).$
:::

:::exercise {fs-id1170571612023} type= 
PROBLEM:
The sine integral, defined as $S(x)={\displaystyle \int_{0}^{x}\frac{\text{sin}\;t}{t}dt}$ is an important quantity in engineering. Although it does not have a simple closed formula, it is possible to estimate its behavior for large *x*. Show that for $k\ge 1,|S(2\pi k)-S(2\pi (k+1))|\le \frac{1}{k(2k+1)\pi}.$ $\text{(}Hint\text{:}\;\text{sin}(t+\pi )=\text{−}\text{sin}\;t\text{)}$
:::

:::exercise {fs-id1170572373482} type= 
PROBLEM:
**[T]** The normal distribution in probability is given by $p(x)=\frac{1}{σ\sqrt{2\pi}}{e}^{\text{−}{(x-μ)}^{2}\text{/}2{σ}^{2}},$ where *σ* is the standard deviation and *μ* is the average. The *standard normal distribution* in probability, ${p}_{s},$ corresponds to $μ=0\;\text{and}\;σ=1.$ Compute the right endpoint estimates ${R}_{10}\;\text{and}\;{R}_{100}$ of $\int_{−1}^{1}\frac{1}{\sqrt{2\pi}}{e}^{\text{−}\frac{{x}^{2}}{2}}dx.$
SOLUTION:
${R}_{10}=0.6811,{R}_{100}=0.6827$

> IMAGE {img:fs-id1170571652285} src=../../media/CNX_Calc_Figure_05_06_202.jpg
> alt: A graph of the function f(x) = .5 * ( sqrt(2)*e^(-.5x^2)) / sqrt(pi). It is a downward opening curve that is symmetric across the y axis, crossing at about (0, .4). It approaches 0 as x goes to positive and negative infinity. Between 1 and -1, ten rectangles are drawn for a right endpoint estimate of the area under the curve.

:::

:::exercise {fs-id1170572380098} type= 
PROBLEM:
**[T]** Compute the right endpoint estimates ${R}_{50}\;\text{and}\;{R}_{100}$ of ${\displaystyle \int_{−3}^{5}\frac{1}{2\sqrt{2\pi}}{e}^{\text{−}{(x-1)}^{2}\text{/}8}.}$
:::

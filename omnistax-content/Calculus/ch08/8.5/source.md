# First-Order Linear Equations

## Learning Objectives {section:learning-objectives}
- Write a first-order linear differential equation in standard form.
- Find an integrating factor and use it to solve a first-order linear differential equation.
- Solve applied problems involving first-order linear differential equations.

Earlier, we studied an application of a first-order differential equation that involved solving for the velocity of an object. In particular, if a ball is thrown upward with an initial velocity of ${v}_{0}$ ft/s, then an initial-value problem that describes the velocity of the ball after $t$ seconds is given by

$\frac{dv}{dt}=−32,\;v(0)={v}_{0}.$  {eq:fs-id1170572387982}

This model assumes that the only force acting on the ball is gravity. Now we add to the problem by allowing for the possibility of {index:air resistance} acting on the ball.
Air resistance always acts in the direction opposite to motion. Therefore if an object is rising, air resistance acts in a downward direction. If the object is falling, air resistance acts in an upward direction ([ref:CNX_Calc_Figure_08_05_001]). There is no exact relationship between the velocity of an object and the air resistance acting on it. For very small objects, air resistance is proportional to velocity; that is, the force due to air resistance is numerically equal to some constant $k$ times $v.$ For larger (e.g., baseball-sized) objects, depending on the shape, air resistance can be approximately proportional to the square of the velocity. In fact, air resistance may be proportional to ${v}^{1.5},$ or ${v}^{0.9},$ or some other power of $v.$

> FIGURE {fig:CNX_Calc_Figure_08_05_001} src=../../media/CNX_Calc_Figure_08_05_001.jpg
> alt: A diagram of a baseball with an arrow above it pointing up and an arrow below it pointing down. The upper arrow is labeled “air resistance –kv” and the lower arrow is labeled “g = -9.8 m/sec ^ 2.”
> caption: Forces acting on a moving baseball: gravity acts in a downward direction and air resistance acts in a direction opposite to the direction of motion.

We will work with the linear approximation for air resistance. If we assume $k>0,$ then the expression for the force ${F}_{A}$ due to air resistance is given by ${F}_{A}=\text{−}kv.$ Therefore the sum of the forces acting on the object is equal to the sum of the gravitational force and the force due to air resistance. This, in turn, is equal to the mass of the object multiplied by its acceleration at time $t$ (Newton’s second law). This gives us the differential equation

$m\frac{dv}{dt}=\text{−}kv-mg.$  {eq:fs-id1170572331253}

Finally, we impose an initial condition $v(0)={v}_{0},$ where ${v}_{0}$ is the initial velocity measured in meters per second. This makes $g=9.8{\;\text{m/s}}^{2}.$ The initial-value problem becomes

$$ m\frac{dv}{dt}=\text{−}kv-mg,\;v(0)={v}_{0}. $$  {eq:fs-id1170572593954}

The differential equation in this initial-value problem is an example of a first-order linear differential equation. (Recall that a differential equation is first-order if the highest-order derivative that appears in the equation is $1.)$ In this section, we study first-order linear equations and examine a method for finding a general solution to these types of equations, as well as solving initial-value problems involving them.

:::note [definition] Definition
A first-order differential equation is {term:linear} if it can be written in the form

$$ a(x){y}^{'}+b(x)y=c(x), $$  {eq:fs-id1170572251046}

where $a(x),b(x),$ and $c(x)$ are arbitrary functions of $x.$
:::
Remember that the unknown function $y$ depends on the variable $x;$ that is, $x$ is the independent variable and $y$ is the dependent variable. Some examples of first-order linear differential equations are

$\begin{array}{rll}(3{x}^{2}-4)y'+(x-3)y & = & \text{sin}\;x \\ (\text{sin}\;x)y'-(\text{cos}\;x)y & = & \text{cot}\;x \\ 4xy'+(3\;\text{ln}\;x)y & = & {x}^{3}-4x.\end{array}$  {eq:fs-id1170572480509}

Examples of first-order nonlinear differential equations include

$\begin{array}{rll}{(y')}^{4}-{(y')}^{3} & = & (3x-2)(y+4) \\ 4y'+3{y}^{3} & = & 4x-5 \\ {(y')}^{2} & = & \text{sin}\;y+\text{cos}\;x.\end{array}$  {eq:fs-id1170572208851}

These equations are nonlinear because of terms like ${({y}^{'})}^{4},{y}^{3},$ etc. Due to these terms, it is impossible to put these equations into the same form as [ref:fs-id1170572251046].

## Standard Form
Consider the differential equation

$(3{x}^{2}-4){y}^{'}+(x-3)y=\text{sin}\;x.$  {eq:fs-id1170572228143}

Our main goal in this section is to derive a solution method for equations of this form. It is useful to have the coefficient of ${y}^{'}$ be equal to $1.$ To make this happen, we divide both sides by $3{x}^{2}-4.$

${y}^{'}+(\frac{x-3}{3{x}^{2}-4})\;y=\frac{\text{sin}\;x}{3{x}^{2}-4}$  {eq:fs-id1170572210607}

This is called the {term:standard form} of the differential equation. We will use it later when finding the solution to a general first-order linear differential equation. Returning to [ref:fs-id1170572251046], we can divide both sides of the equation by $a(x).$ This leads to the equation

$$ {y}^{'}+\frac{b(x)}{a(x)}y=\frac{c(x)}{a(x)}. $$  {eq:fs-id1170572151745}

Now define $p(x)=\frac{b(x)}{a(x)}$ and $q(x)=\frac{c(x)}{a(x)}.$ Then [ref:fs-id1170572251046] becomes

$$ {y}^{'}+p(x)y=q(x). $$  {eq:fs-id1170571712108}

We can write any first-order linear differential equation in this form, and this is referred to as the standard form for a first-order linear differential equation.

:::example {ex:fs-id1170572447597} Writing First-Order Linear Equations in Standard Form

:::exercise {fs-id1170572141228} type= 
PROBLEM:
Put each of the following first-order linear differential equations into standard form. Identify $p(x)$ and $q(x)$ for each equation.
a. $y'=3x-4y$
b. $\frac{3xy'}{4y-3}=2$ (here $x≠0)$
c. $y=3y'-4{x}^{2}+5$
SOLUTION:
a. Add $4y$ to both sides:

$y'+4y=3x.$  {eq:fs-id1170571602108}

In this equation, $p(x)=4$ and $q(x)=3x.$
b. Multiply both sides by $4y-3,$ then subtract $8y$ from each side:

$\begin{array}{rll}\frac{3xy'}{4y-3} & = & 2 \\ 3xy' & = & 2(4y-3) \\ 3xy' & = & 8y-6 \\ 3xy'-8y & = & −6.\end{array}$  {eq:fs-id1170571712896}

Finally, divide both sides by $3x$ to make the coefficient of $y'$ equal to $1\text{:}$

$$ y'-\frac{8}{3x}y=-\frac{2}{x}. $$  {eq:eip-id1170800554716}

 This is allowable because in the original statement of this problem we assumed that $x≠0.$ (If $x=0$ then the original equation becomes $0=2,$ which is clearly a false statement.)

In this equation, $p(x)=-\frac{8}{3x}$ and $q(x)=-\frac{2}{x}.$
c. Subtract $y$ from each side and add $4{x}^{2}-5\text{:}$

$3y'-y=4{x}^{2}-5.$  {eq:fs-id1170572373157}

Next divide both sides by $3\text{:}$

$y'-\frac{1}{3}y=\frac{4}{3}{x}^{2}-\frac{5}{3}.$  {eq:fs-id1170571637556}

In this equation, $p(x)=-\frac{1}{3}$ and $q(x)=\frac{4}{3}{x}^{2}-\frac{5}{3}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572331245} type= 
PROBLEM:
Put the equation $\frac{(x+3)y'}{2x-3y-4}=5$ into standard form and identify $p(x)$ and $q(x).$
SOLUTION:
$y'+\frac{15}{x+3}y=\frac{10x-20}{x+3};p(x)=\frac{15}{x+3}$ and $q(x)=\frac{10x-20}{x+3}$
COMMENTARY: Hint
Multiply both sides by the common denominator, then collect all terms involving $y$ on one side.
:::
:::

## Integrating Factors
We now develop a solution technique for any first-order linear differential equation. We start with the standard form of a first-order linear differential equation:

$$ y'+p(x)y=q(x). $$  {eq:fs-id1170572130093}

The first term on the left-hand side of [ref:fs-id1170572151745] is the derivative of the unknown function, and the second term is the product of a known function with the unknown function. This is somewhat reminiscent of the product rule from the [Differentiation Rules](module:m53575) section. If we multiply [ref:fs-id1170571712108] by a yet-to-be-determined function $μ(x),$ then the equation becomes

$$ μ(x){y}^{'}+μ(x)p(x)y=μ(x)q(x). $$  {eq:fs-id1170572449739}

The left-hand side [ref:fs-id1170572130093] can be matched perfectly to the product rule:

$\frac{d}{dx}[f(x)g(x)]={f}^{'}(x)g(x)+f(x){g}^{'}(x).$  {eq:fs-id1170571714376}

Matching term by term gives $y=f(x),g(x)=μ(x),$ and ${g}^{'}(x)=μ(x)p(x).$ Taking the derivative of $g(x)=μ(x)$ and setting it equal to the right-hand side of ${g}^{'}(x)=μ(x)p(x)$ leads to

${μ}^{'}(x)=μ(x)p(x).$  {eq:fs-id1170571832251}

This is a first-order, separable differential equation for $μ(x).$ We know $p(x)$ because it appears in the differential equation we are solving. Separating variables and integrating yields

$\begin{array}{rll}\frac{{μ}^{'}(x)}{μ(x)} & = & p(x) \\ {\displaystyle \int \frac{{μ}^{'}(x)}{μ(x)}}dx & = & {\displaystyle \int p(x)\;dx} \\ \text{ln}|μ(x)| & = & {\displaystyle \int p(x)\;dx}+C \\ {e}^{\text{ln}|μ(x)|} & = & {e}^{{\displaystyle \int p(x)\;dx}+C} \\ |μ(x)| & = & {C}_{1}{e}^{{\displaystyle \int p(x)\;dx}} \\ μ(x) & = & {C}_{2}{e}^{{\displaystyle \int p(x)\;dx}}.\end{array}$  {eq:fs-id1170571564354}

Here ${C}_{2}$ can be an arbitrary (positive or negative) constant. This leads to a general method for solving a first-order linear differential equation. We first multiply both sides of [ref:fs-id1170571712108] by the {term:integrating factor} $μ(x).$ This gives

$$ μ(x){y}^{'}+μ(x)p(x)y=μ(x)q(x). $$  {eq:fs-id1170571789027}

The left-hand side of [ref:fs-id1170571789027] can be rewritten as $\frac{d}{dx}(μ(x)y).$

$$ \frac{d}{dx}(μ(x)y)=μ(x)q(x). $$  {eq:fs-id1170572554001}

Next integrate both sides of [ref:fs-id1170572554001] with respect to $x.$

$$ \begin{array}{rll}{\displaystyle \int \frac{d}{dx}(μ(x)y)\;dx} & = & {\displaystyle \int μ(x)q(x)\;dx} \\ μ(x)y & = & {\displaystyle \int μ(x)q(x)\;dx}.\end{array} $$  {eq:fs-id1170572546914}

Divide both sides of [ref:fs-id1170572546914] by $μ(x)\text{:}$

$$ y=\frac{1}{μ(x)}[{\displaystyle \int μ(x)q(x)\;dx+C}]. $$  {eq:fs-id1170571681325}

Since $μ(x)$ was previously calculated, we are now finished. An important note about the integrating constant $C\text{:}$ It may seem that we are inconsistent in the usage of the integrating constant. However, the integral involving $p(x)$ is necessary in order to find an integrating factor for [ref:fs-id1170572151745]. Only one integrating factor is needed in order to solve the equation; therefore, it is safe to assign a value for $C$ for this integral. We chose $C=0.$ When calculating the integral inside the brackets in [ref:fs-id1170572554001], it is necessary to keep our options open for the value of the integrating constant, because our goal is to find a general family of solutions to [ref:fs-id1170572151745]. This integrating factor guarantees just that.

:::note [problem-solving] Solving a First-order Linear Differential Equation
1. Put the equation into standard form and identify $p(x)$ and $q(x).$
2. Calculate the integrating factor $μ(x)={e}^{{\displaystyle \int p(x)\;dx}}.$
3. Multiply both sides of the differential equation by $μ(x).$
4. Integrate both sides of the equation obtained in step $3,$ and divide both sides by $μ(x).$
5. If there is an initial condition, determine the value of $C.$
:::

:::example {ex:fs-id1170572539811} Solving a First-order Linear Equation

:::exercise {fs-id1170572321365} type= 
PROBLEM:
Find a general solution for the differential equation $xy'+3y=4{x}^{2}-3x.$ Assume $x>0.$
SOLUTION:
1. To put this differential equation into standard form, divide both sides by $x\text{:}$

$y'+\frac{3}{x}y=4x-3.$  {eq:fs-id1170572370908}

Therefore $p(x)=\frac{3}{x}$ and $q(x)=4x-3.$
2. The integrating factor is $μ(x)={e}^{{\displaystyle \int (3\text{/}x)\;dx}}={e}^{3\;\text{ln}\;x}={x}^{3}.$
3. Multiplying both sides of the differential equation by $μ(x)$ gives us

$\begin{array}{rll}{x}^{3}{y}^{'}+{x}^{3}(\frac{3}{x})y & = & {x}^{3}(4x-3) \\ {x}^{3}{y}^{'}+3{x}^{2}y & = & 4{x}^{4}-3{x}^{3} \\ \frac{d}{dx}({x}^{3}y) & = & 4{x}^{4}-3{x}^{3}.\end{array}$  {eq:fs-id1170572116162}

4. Integrate both sides of the equation.

$\begin{array}{rll}{\displaystyle \int \frac{d}{dx}({x}^{3}y)}dx & = & {\displaystyle \int 4{x}^{4}-3{x}^{3}}dx \\ {x}^{3}y & = & \frac{4{x}^{5}}{5}-\frac{3{x}^{4}}{4}+C \\ y & = & \frac{4{x}^{2}}{5}-\frac{3x}{4}+C{x}^{−3}.\end{array}$  {eq:fs-id1170572369225}

5. There is no initial value, so the problem is complete.
COMMENTARY: Analysis
You may have noticed the condition that was imposed on the differential equation; namely, $x>0.$ For any nonzero value of $C,$ the general solution is not defined at $x=0.$ Furthermore, when $x<0,$ the integrating factor changes. The integrating factor is given by [ref:fs-id1170572449739] as $μ(x)={e}^{{\displaystyle \int p(x)}dx}.$ For this $p(x)$ we get

${e}^{{\displaystyle \int p(x)\;dx=}}{e}^{{\displaystyle \int (3\text{/}x)dx}}={e}^{3\;\text{ln}|x|}={|x|}^{3},$  {eq:fs-id1170572505442}

since $x<0.$ The behavior of the general solution changes at $x=0$ largely due to the fact that $p(x)$ is not defined there.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572332858} type= 
PROBLEM:
Find the general solution to the differential equation $(x-2)y'+y=3{x}^{2}+2x.$ Assume $x>2.$
SOLUTION:
$y=\frac{{x}^{3}+{x}^{2}+C}{x-2}$
COMMENTARY: Hint
Use the method outlined in the problem-solving strategy for first-order linear differential equations.
:::
:::
Now we use the same strategy to find the solution to an initial-value problem.

:::example {ex:fs-id1170572611128} A First-order Linear Initial-Value Problem

:::exercise {fs-id1170572611130} type= 
PROBLEM:
Solve the initial-value problem

${y}^{'}+3y=2x-1,\;y(0)=3.$  {eq:fs-id1170571609231}

SOLUTION:
1. This differential equation is already in standard form with $p(x)=3$ and $q(x)=2x-1.$
2. The integrating factor is $μ(x)={e}^{{\displaystyle \int 3dx}}={e}^{3x}.$
3. Multiplying both sides of the differential equation by $μ(x)$ gives

$\begin{array}{rll}{e}^{3x}{y}^{'}+3{e}^{3x}y & = & (2x-1){e}^{3x} \\ \frac{d}{dx}[y{e}^{3x}] & = & (2x-1){e}^{3x}.\end{array}$  {eq:fs-id1170572481493}

Integrate both sides of the equation:

$\begin{array}{rll}{\displaystyle \int \frac{d}{dx}[y{e}^{3x}]dx} & = & {\displaystyle \int (2x-1){e}^{3x}dx} \\ y{e}^{3x} & = & \frac{{e}^{3x}}{3}(2x-1)-{\displaystyle \int \frac{2}{3}{e}^{3x}dx} \\ y{e}^{3x} & = & \frac{{e}^{3x}(2x-1)}{3}-\frac{2{e}^{3x}}{9}+C \\ y & = & \frac{2x-1}{3}-\frac{2}{9}+C{e}^{−3x} \\ y & = & \frac{2x}{3}-\frac{5}{9}+C{e}^{−3x}.\end{array}$  {eq:fs-id1170571593388}

4. Now substitute $x=0$ and $y=3$ into the general solution and solve for $C\text{:}$

$\begin{array}{rll}y & = & \frac{2}{3}x-\frac{5}{9}+C{e}^{−3x} \\ 3 & = & \frac{2}{3}(0)-\frac{5}{9}+C{e}^{−3(0)} \\ 3 & = & -\frac{5}{9}+C \\ C & = & \frac{32}{9}.\end{array}$  {eq:fs-id1170571595426}

Therefore the solution to the initial-value problem is

$y=\frac{2}{3}x-\frac{5}{9}+\frac{32}{9}{e}^{−3x}.$  {eq:fs-id1170572592117}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572505498} type= 
PROBLEM:
Solve the initial-value problem $y'-2y=4x+3\;y(0)=−2.$
SOLUTION:
$y=-2x-\frac{5}{2}+\frac{1}{2}{e}^{2x}$
:::
:::

## Applications of First-order Linear Differential Equations
We look at two different applications of first-order linear differential equations. The first involves air resistance as it relates to objects that are rising or falling; the second involves an electrical circuit. Other applications are numerous, but most are solved in a similar fashion.

### Free fall with air resistance
We discussed air resistance at the beginning of this section. The next example shows how to apply this concept for a ball in vertical motion. Other factors can affect the force of air resistance, such as the size and shape of the object, but we ignore them here.

:::example {ex:fs-id1170571829525} A Ball with Air Resistance

:::exercise {fs-id1170571829527} type= 
PROBLEM:
A racquetball is hit straight upward with an initial velocity of $2$ m/s. The mass of a racquetball is approximately $0.0427$ kg. Air resistance acts on the ball with a force numerically equal to $0.5v,$ where $v$ represents the velocity of the ball at time $t.$
a. Find the velocity of the ball as a function of time.
b. How long does it take for the ball to reach its maximum height?
c. If the ball is hit from an initial height of $1$ meter, how high will it reach?
SOLUTION:
a. The mass $m=0.0427\;\text{kg},k=0.5,$ and $g=9.8{\;\text{m/s}}^{2}.$ The initial velocity is ${v}_{0}=2$ m/s. Therefore the initial-value problem is

$0.0427\frac{dv}{dt}=−0.5v-0.0427(9.8),\;{v}_{0}=2.$  {eq:fs-id1170572379510}

Dividing the differential equation by $0.0427$ gives

$\frac{dv}{dt}=−11.7096v-9.8,\;{v}_{0}=2.$  {eq:fs-id1170572547804}

The differential equation is linear. Using the problem-solving strategy for linear differential equations:

Step 1. Rewrite the differential equation as $\frac{dv}{dt}+11.7096v=−9.8.$ This gives $p(t)=11.7096$ and $q(t)=−9.8$

Step 2. The integrating factor is $μ(t)={e}^{{\displaystyle \int 11.7096dt}}={e}^{11.7096t}.$

Step 3. Multiply the differential equation by $μ(t)\text{:}$

$\begin{array}{rll}{e}^{11.7096t}\frac{dv}{dt}+11.7096v{e}^{11.7096t} & = & −9.8{e}^{11.7096t} \\ \frac{d}{dt}[v{e}^{11.7096t}] & = & −9.8{e}^{11.7096t}.\end{array}$  {eq:fs-id1170572644185}

Step 4. Integrate both sides:

$\begin{array}{rll}{\displaystyle \int \frac{d}{dt}[v{e}^{11.7096t}]}\;dt & = & {\displaystyle \int −9.8{e}^{11.7096t}dt} \\ v{e}^{11.7096t} & = & \frac{−9.8}{11.7096}{e}^{11.7096t}+C \\ v(t) & = & −0.8369+C{e}^{−11.7096t}.\end{array}$  {eq:fs-id1170572415253}

Step 5. Solve for $C$ using the initial condition ${v}_{0}=v(0)=2\text{:}$

$\begin{array}{rll}v(t) & = & −0.8369+C{e}^{−11.7096t} \\ v(0) & = & −0.8369+C{e}^{−11.7096(0)} \\ 2 & = & −0.8369+C \\ C & = & 2.8369.\end{array}$  {eq:fs-id1170572227250}

Therefore the solution to the initial-value problem is $v(t)=2.8369{e}^{−11.7096t}-0.8369.$
b. The ball reaches its maximum height when the velocity is equal to zero. The reason is that when the velocity is positive, it is rising, and when it is negative, it is falling. Therefore when it is zero, it is neither rising nor falling, and is at its maximum height:

$\begin{array}{rll} \\ 2.8369{e}^{−11.7096t}-0.8369 & = & 0 \\ 2.8369{e}^{−11.7096t} & = & 0.8369 \\ {e}^{−11.7096t} & = & \frac{0.8369}{2.8369}\approx 0.295 \\ \text{ln}\;{e}^{−11.7096t} & = & \text{ln}\;0.295\approx -1.221 \\ −11.7096t & = & −1.221 \\ t & \approx & 0.104.\end{array}$  {eq:fs-id1170571553927}

Therefore it takes approximately $0.104$ second to reach maximum height.
c. To find the height of the ball as a function of time, use the fact that the derivative of position is velocity, i.e., if $h(t)$ represents the height at time $t,$ then ${h}^{'}(t)=v(t).$ Because we know $v(t)$ and the initial height, we can form an initial-value problem:

${h}^{'}(t)=2.8369{e}^{−11.7096t}-0.8369,\;h(0)=1.$  {eq:fs-id1170571825011}

Integrating both sides of the differential equation with respect to $t$ gives

$\begin{array}{rll}{\displaystyle \int {h}^{'}(t)\;dt} & = & {\displaystyle \int 2.8369{e}^{−11.7096t}-0.8369}dt \\ h(t) & = & -\frac{2.8369}{11.7096}{e}^{−11.7096t}-0.8369t+C \\ h(t) & = & −0.2423{e}^{−11.7096t}-0.8369t+C.\end{array}$  {eq:fs-id1170571595078}

Solve for $C$ by using the initial condition:

$\begin{array}{rll}h(t) & = & −0.2423{e}^{−11.7096t}-0.8369t+C \\ h(0) & = & −0.2423{e}^{−11.7096(0)}-0.8369(0)+C \\ 1 & = & −0.2423+C \\ C & = & 1.2423.\end{array}$  {eq:fs-id1170572140765}

Therefore

$h(t)=−0.2423{e}^{−11.7096t}-0.8369t+1.2423.$  {eq:fs-id1170572208058}

After $0.104$ second, the height is given by

$h(0.104)=−0.2423{e}^{−11.7096t}-0.8369t+1.2423\approx 1.0836$ meter.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572481767} type= 
PROBLEM:
The weight of a penny is $2.5$ grams (United States Mint, “Coin Specifications,” accessed April 9, 2015, http://www.usmint.gov/about_the_mint/?action=coin_specifications), and the upper observation deck of the Empire State Building is $369$ meters above the street. Since the penny is a small and relatively smooth object, air resistance acting on the penny is actually quite small. We assume the air resistance is numerically equal to $0.0025v.$ Furthermore, the penny is dropped with no initial velocity imparted to it.
a. Set up an initial-value problem that represents the falling penny.
b. Solve the problem for $v(t).$
c. What is the terminal velocity of the penny (i.e., calculate the limit of the velocity as $t$ approaches infinity)?
SOLUTION:
a. $\begin{array}{rll}\frac{dv}{dt} & = & \text{−}v-9.8 \\ v(0) & = & 0\end{array}$
b. $v(t)=9.8({e}^{\text{−}t}-1)$
c. $\lim_{t\to \infty}v(t)=\lim_{t\to \infty}(9.8({e}^{\text{−}t}-1))=−9.8\;\text{m/s}\approx -21.922\;\text{mph}$
COMMENTARY: Hint
Set up the differential equation the same way as [ref:fs-id1170572447597]. Remember to convert from grams to kilograms.
:::
:::

### Electrical Circuits
A source of electromotive force (e.g., a battery or generator) produces a flow of current in a closed circuit, and this current produces a voltage drop across each resistor, inductor, and capacitor in the circuit. Kirchhoff’s Loop Rule states that the sum of the voltage drops across resistors, inductors, and capacitors is equal to the total electromotive force in a closed circuit. We have the following three results:
1. The voltage drop across a resistor is given by

${E}_{R}=Ri,$  {eq:fs-id1170571674169}

where $R$ is a constant of proportionality called the *resistance,* and $i$ is the current.
2. The voltage drop across an inductor is given by

${E}_{L}=L{i}^{'},$  {eq:fs-id1170572375868}

where $L$ is a constant of proportionality called the *inductance*, and $i$ again denotes the current.
3. The voltage drop across a capacitor is given by

${E}_{C}=\frac{1}{C}q,$  {eq:fs-id1170571683191}

where $C$ is a constant of proportionality called the *capacitance*, and $q$ is the instantaneous charge on the capacitor. The relationship between $i$ and $q$ is $i={q}^{'}.$
We use units of volts $(\text{V})$ to measure voltage $E,$ amperes $(\text{A})$ to measure current $i,$ coulombs $(\text{C})$ to measure charge $q,$ ohms $(\text{Ω})$ to measure resistance $R,$ henrys $(\text{H})$ to measure inductance $L,$ and farads $(\text{F})$ to measure capacitance $C.$ Consider the circuit in [ref:CNX_Calc_Figure_08_05_002].

> FIGURE {fig:CNX_Calc_Figure_08_05_002} src=../../media/CNX_Calc_Figure_08_05_003.jpg
> alt: A diagram of an electric circuit in a rectangle. The top has a capacitor C, the left has a voltage generator Vs, the bottom was a resistor R, and the right has an inductor L.
> caption: A typical electric circuit, containing a voltage generator $({V}_{S}),$ capacitor $(C),$ inductor $(L),$ and resistor $(R).$

Applying Kirchhoff’s Loop Rule to this circuit, we let $E$ denote the electromotive force supplied by the voltage generator. Then

${E}_{L}+{E}_{R}+{E}_{C}=E.$  {eq:fs-id1170571733859}

Substituting the expressions for ${E}_{L},{E}_{R},$ and ${E}_{C}$ into this equation, we obtain

$$ L{i}^{'}+Ri+\frac{1}{C}q=E. $$  {eq:fs-id1170572177052}

If there is no capacitor in the circuit, then the equation becomes

$$ L{i}^{'}+Ri=E. $$  {eq:fs-id1170572241891}

This is a first-order differential equation in $i.$ The circuit is referred to as an $LR$ circuit.
Next, suppose there is no inductor in the circuit, but there is a capacitor and a resistor, so $L=0,R≠0,$ and $C≠0.$ Then [ref:fs-id1170571681325] can be rewritten as

$$ R{q}^{'}+\frac{1}{C}q=E, $$  {eq:fs-id1170571653410}

which is a first-order linear differential equation. This is referred to as an {index:*RC* circuit}. In either case, we can set up and solve an initial-value problem.

:::example {ex:fs-id1170571553391} Finding Current in an *RL* Electric Circuit

:::exercise {fs-id1170571553393} type= 
PROBLEM:
A circuit has in series an electromotive force given by $E=50\;\text{sin}\;20t\;\text{V},$ a resistor of $5\text{Ω},$ and an inductor of $0.4\;\text{H}\text{.}$ If the initial current is $0,$ find the current at time $t>0.$
SOLUTION:
We have a resistor and an inductor in the circuit, so we use [ref:fs-id1170572177052]. The voltage drop across the resistor is given by ${E}_{R}=Ri=5i.$ The voltage drop across the inductor is given by ${E}_{L}=L{i}^{'}=0.4{i}^{'}.$ The electromotive force becomes the right-hand side of [ref:fs-id1170572177052]. Therefore [ref:fs-id1170572177052] becomes

$0.4{i}^{'}+5i=50\;\text{sin}\;20t.$  {eq:fs-id1170572146954}

Dividing both sides by $0.4$ gives the equation

${i}^{'}+12.5i=125\;\text{sin}\;20t.$  {eq:fs-id1170571546026}

Since the initial current is 0, this result gives an initial condition of $i(0)=0.$ We can solve this initial-value problem using the five-step strategy for solving first-order differential equations.
Step 1. Rewrite the differential equation as ${i}^{'}+12.5i=125\;\text{sin}\;20t.$ This gives $p(t)=12.5$ and $q(t)=125\;\text{sin}\;20t.$
Step 2. The integrating factor is $μ(t)={e}^{{\displaystyle \int 12.5dt}}={e}^{12.5t}.$
Step 3. Multiply the differential equation by $μ(t)\text{:}$

$\begin{array}{rll}{e}^{12.5t}{i}^{'}+12.5{e}^{12.5t}i & = & 125{e}^{12.5t}\text{sin}\;20t \\ \frac{d}{dt}\;[i{e}^{12.5t}] & = & 125{e}^{12.5t}\text{sin}\;20t.\end{array}$  {eq:fs-id1170572420942}

Step 4. Integrate both sides:

$\begin{array}{rll}{\displaystyle \int \frac{d}{dt}\;[i{e}^{12.5t}]}\;dt & = & {\displaystyle \int 125{e}^{12.5t}\text{sin}\;20t\;dt} \\ i{e}^{12.5t} & = & (\frac{250\;\text{sin}\;20t-400\;\text{cos}\;20t}{89})\;{e}^{12.5t}+C \\ i(t) & = & \frac{250\;\text{sin}\;20t-400\;\text{cos}\;20t}{89}+C{e}^{−12.5t}.\end{array}$  {eq:fs-id1170572375911}

Step 5. Solve for $C$ using the initial condition $v(0)=2\text{:}$

$\begin{array}{rll}i(t) & = & \frac{250\;\text{sin}\;20t-400\;\text{cos}\;20t}{89}+C{e}^{−12.5t} \\ i(0) & = & \frac{250\;\text{sin}\;20(0)-400\;\text{cos}\;20(0)}{89}+C{e}^{−12.5(0)} \\ 0 & = & -\frac{400}{89}+C \\ C & = & \frac{400}{89}.\end{array}$  {eq:fs-id1170572278803}

Therefore the solution to the initial-value problem is $i(t)=\frac{250\;\text{sin}\;20t-400\;\text{cos}\;20t+400{e}^{−12.5t}}{89}=\frac{250\;\text{sin}\;20t-400\;\text{cos}\;20t}{89}+\frac{400{e}^{−12.5t}}{89}.$
The first term can be rewritten as a single cosine function. First, multiply and divide by $\sqrt{{250}^{2}+{400}^{2}}=50\sqrt{89}\text{:}$

$\begin{array}{rl}\frac{250\;\text{sin}\;20t-400\;\text{cos}\;20t}{89} & =\frac{50\sqrt{89}}{89}(\frac{250\;\text{sin}\;20t-400\;\text{cos}\;20t}{50\sqrt{89}}) \\ & =-\frac{50\sqrt{89}}{89}(\frac{8\;\text{cos}\;20t}{\sqrt{89}}-\frac{5\;\text{sin}\;20t}{\sqrt{89}}).\end{array}$  {eq:fs-id1170571591219}

Next, define $φ$ to be an acute angle such that $\text{cos}\;φ=\frac{8}{\sqrt{89}}.$ Then $\text{sin}\;φ=\frac{5}{\sqrt{89}}$ and

$\begin{array}{rl}-\frac{50\sqrt{89}}{89}(\frac{8\;\text{cos}\;20t}{\sqrt{89}}-\frac{5\;\text{sin}\;20t}{\sqrt{89}}) & =-\frac{50\sqrt{89}}{89}\;(\text{cos}\;φ\;\text{cos}\;20t-\text{sin}\;φ\;\text{sin}\;20t) \\ & =-\frac{50\sqrt{89}}{89}\text{cos}(20t+φ).\end{array}$  {eq:fs-id1170572638752}

Therefore the solution can be written as

$i(t)=-\frac{50\sqrt{89}}{89}\;\text{cos}\;(20t+φ)+\frac{400{e}^{−12.5t}}{89}.$  {eq:fs-id1170571814765}

The second term is called the *attenuation* term, because it disappears rapidly as *t* grows larger. The phase shift is given by $φ,$ and the amplitude of the steady-state current is given by $\frac{50\sqrt{89}}{89}.$ The graph of this solution appears in [ref:CNX_Calc_Figure_08_05_003]:

> FIGURE {fig:CNX_Calc_Figure_08_05_003} src=../../media/CNX_Calc_Figure_08_05_004.jpg
> alt: A graph of the given solution over [0, 6] on the x axis. It is an oscillating function, rapidly going from just below -5 to just above 5.
> caption: 

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572375811} type= 
PROBLEM:
A circuit has in series an electromotive force given by $E=20\;\text{sin}\;5t$ V, a capacitor with capacitance $0.02\;\text{F},$ and a resistor of $8\;\text{Ω}.$ If the initial charge is $4\;\text{C},$ find the charge at time $t>0.$
SOLUTION:
Initial-value problem:
$8{q}^{'}+\frac{1}{0.02}q=20\;\text{sin}\;5t,\;q(0)=4$
$q(t)=\frac{10\;\text{sin}\;5t-8\;\text{cos}\;5t+172{e}^{−6.25t}}{41}$
COMMENTARY: Hint
Use [ref:fs-id1170572241891] for an $RC$ circuit to set up an initial-value problem.
:::
:::

## Key Concepts {section:key-concepts}
- Any first-order linear differential equation can be written in the form $y'+p(x)y=q(x).$
- We can use a five-step problem-solving strategy for solving a first-order linear differential equation that may or may not include an initial value.
- Applications of first-order linear differential equations include determining motion of a rising or falling object with air resistance and finding current in an electrical circuit.

## Key Equations {section:key-equations}

> TABLE {tab:eip-519} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **standard form** | $y'+p(x)y=q(x)$ |
| **integrating factor** | $μ(x)={e}^{{\displaystyle \int p(x)\;dx}}$ |

##  {section:section-exercises}
Are the following differential equations linear? Explain your reasoning.

:::exercise {fs-id1170572591375} type= 
PROBLEM:
$\frac{dy}{dx}={x}^{2}y+\text{sin}\;x$
:::

:::exercise {fs-id1170572447491} type= 
PROBLEM:
$\frac{dy}{dt}=ty$
SOLUTION:
Yes
:::

:::exercise {fs-id1170572447527} type= 
PROBLEM:
$\frac{dy}{dt}+{y}^{2}=x$
:::

:::exercise {fs-id1170572587618} type= 
PROBLEM:
$y'={x}^{3}+{e}^{x}$
SOLUTION:
Yes
:::

:::exercise {fs-id1170572449686} type= 
PROBLEM:
$y'=y+{e}^{y}$
:::
Write the following first-order differential equations in standard form.

:::exercise {fs-id1170572449722} type= 
PROBLEM:
$y'={x}^{3}y+\text{sin}\;x$
SOLUTION:
$y'-{x}^{3}y=\text{sin}\;x$
:::

:::exercise {fs-id1170572375969} type= 
PROBLEM:
$y'+3y-\text{ln}\;x=0$
:::

:::exercise {fs-id1170572573687} type= 
PROBLEM:
$\text{−}xy'=(3x+2)y+x{e}^{x}$
SOLUTION:
$y'+\frac{(3x+2)}{x}y=\text{−}{e}^{x}$
:::

:::exercise {fs-id1170572330281} type= 
PROBLEM:
$\frac{dy}{dt}=4y+ty+\text{tan}\;t$
:::

:::exercise {fs-id1170572567913} type= 
PROBLEM:
$\frac{dy}{dt}=yx(x+1)$
SOLUTION:
$\frac{dy}{dt}-yx(x+1)=0$
:::
What are the integrating factors for the following differential equations?

:::exercise {fs-id1170572281909} type= 
PROBLEM:
$y'=xy+3$
:::

:::exercise {fs-id1170571758322} type= 
PROBLEM:
$y'+{e}^{x}y=\text{sin}\;x$
SOLUTION:
${e}^{({e}^{x})}$
:::

:::exercise {fs-id1170572290061} type= 
PROBLEM:
$y'=x\;\text{ln}(x)y+3x$
:::

:::exercise {fs-id1170572290309} type= 
PROBLEM:
$\frac{dy}{dx}=\text{tanh}(x)y+1$
SOLUTION:
$\text{−}\text{ln}(\text{cosh}\;x)$
:::

:::exercise {fs-id1170572401993} type= 
PROBLEM:
$\frac{dy}{dt}+3ty={e}^{t}y$
:::
Solve the following differential equations by using integrating factors.

:::exercise {fs-id1170572410628} type= 
PROBLEM:
$y'=3y+2$
SOLUTION:
$y=C{e}^{3x}-\frac{2}{3}$
:::

:::exercise {fs-id1170572116338} type= 
PROBLEM:
$y'=2y-{x}^{2}$
:::

:::exercise {fs-id1170571780010} type= 
PROBLEM:
$xy'=3y-6{x}^{2}$
SOLUTION:
$y=C{x}^{3}+6{x}^{2}$
:::

:::exercise {fs-id1170572375731} type= 
PROBLEM:
$(x+2)y'=3x+y$
:::

:::exercise {fs-id1170571613598} type= 
PROBLEM:
$y'=3x+xy$
SOLUTION:
$y=C{e}^{{x}^{2}\text{/}2}-3$
:::

:::exercise {fs-id1170571613657} type= 
PROBLEM:
$xy'=x+y$
:::

:::exercise {fs-id1170571639298} type= 
PROBLEM:
$\text{sin}(x)y'=y+2x$
SOLUTION:
$y=C\;\text{tan}(\frac{x}{2})-2x+4\;\text{tan}(\frac{x}{2})\text{ln}(\text{sin}(\frac{x}{2}))$
:::

:::exercise {fs-id1170572284967} type= 
PROBLEM:
$y'=y+{e}^{x}$
:::

:::exercise {fs-id1170572480155} type= 
PROBLEM:
$xy'=3y+{x}^{2}$
SOLUTION:
$y=C{x}^{3}-{x}^{2}$
:::

:::exercise {fs-id1170571606664} type= 
PROBLEM:
$y'+\text{ln}\;x=\frac{y}{x}$
:::
Solve the following differential equations. Use your calculator to draw a family of solutions. Are there certain initial conditions that change the behavior of the solution?

:::exercise {fs-id1170571548292} type= 
PROBLEM:
**[T]** $(x+2)y'=2y-1$
SOLUTION:
$y=C{(x+2)}^{2}+\frac{1}{2}$
:::

:::exercise {fs-id1170572088657} type= 
PROBLEM:
**[T]** $y'=3{e}^{t\text{/}3}-2y$
:::

:::exercise {fs-id1170571809463} type= 
PROBLEM:
**[T]** $xy'+\frac{y}{2}=\text{sin}(3t)$
SOLUTION:
$y=\frac{C}{\sqrt{x}}+2\;\text{sin}(3t)$
:::

:::exercise {fs-id1170571694863} type= 
PROBLEM:
**[T]** $xy'=2\frac{\text{cos}\;x}{x}-3y$
:::

:::exercise {fs-id1170572469686} type= 
PROBLEM:
**[T]** $(x+1)y'=3y+{x}^{2}+2x+1$
SOLUTION:
$y=C{(x+1)}^{3}-{x}^{2}-2x-1$
:::

:::exercise {fs-id1170572294225} type= 
PROBLEM:
**[T]** $\text{sin}(x)y'+\text{cos}(x)y=2x$
:::

:::exercise {fs-id1170571776599} type= 
PROBLEM:
**[T]** $\sqrt{{x}^{2}+1}y'=y+2$
SOLUTION:
$y=C{e}^{{\text{sinh}}^{−1}x}-2$
:::

:::exercise {fs-id1170571532443} type= 
PROBLEM:
**[T]** ${x}^{3}y'+2{x}^{2}y=x+1$
:::
Solve the following initial-value problems by using integrating factors.

:::exercise {fs-id1170572610838} type= 
PROBLEM:
$y'+y=x,y(0)=3$
SOLUTION:
$y=x+4{e}^{–x}-1$
:::

:::exercise {fs-id1170572611763} type= 
PROBLEM:
$y'=y+2{x}^{2},y(0)=0$
:::

:::exercise {fs-id1170572172985} type= 
PROBLEM:
$xy'=y-3{x}^{3},y(1)=0$
SOLUTION:
$y=-\frac{3x}{2}({x}^{2}-1)$
:::

:::exercise {fs-id1170571750493} type= 
PROBLEM:
${x}^{2}y'=xy-\text{ln}\;x,y(1)=1$
:::

:::exercise {fs-id1170571768630} type= 
PROBLEM:
$(1+{x}^{2})y'=y-1,y(0)=0$
SOLUTION:
$y=1-{e}^{{\text{tan}}^{−1}x}$
:::

:::exercise {fs-id1170571821996} type= 
PROBLEM:
$xy'=y+2x\;\text{ln}\;x,y(1)=5$
:::

:::exercise {fs-id1170571539148} type= 
PROBLEM:
$(2+x)y'=y+2+x,y(0)=0$
SOLUTION:
$y=(x+2)\text{ln}\;(\frac{x+2}{2})$
:::

:::exercise {fs-id1170572222188} type= 
PROBLEM:
$y'=xy+2x{e}^{\frac{1}{2}{x}^{2}},y(0)=2$
:::

:::exercise {fs-id1170571565951} type= 
PROBLEM:
$\sqrt{x}y'=y+2x,y(0)=1$
SOLUTION:
$y=2{e}^{2\sqrt{x}}-2x-2\sqrt{x}-1$
:::

:::exercise {fs-id1170572184061} type= 
PROBLEM:
$y'=2y+x{e}^{x},y(0)=−1$
:::

:::exercise {fs-id1170572605479} type= 
PROBLEM:
A falling object of mass $m$ can reach terminal velocity when the drag force is proportional to its velocity, with proportionality constant $k.$ Set up the differential equation and solve for the velocity given an initial velocity of $0.$
SOLUTION:
$v(t)=\frac{gm}{k}(1-{e}^{\text{−}kt\text{/}m})$
:::

:::exercise {fs-id1170572412082} type= 
PROBLEM:
Using your expression from the preceding problem, what is the terminal velocity? (*Hint:* Examine the limiting behavior; does the velocity approach a value?)
:::

:::exercise {fs-id1170571814983} type= 
PROBLEM:
**[T]** Using your equation for terminal velocity, solve for the distance fallen. How long does it take to fall $5000$ meters if the mass is $100$ kilograms, the acceleration due to gravity is $9.8$ m/s<sup>2</sup> and the proportionality constant is $4?$
SOLUTION:
$40.451$ seconds
:::

:::exercise {fs-id1170571815034} type= 
PROBLEM:
A more accurate way to describe terminal velocity is that the drag force is proportional to the square of velocity, with a proportionality constant $k.$ Set up the differential equation and solve for the velocity.
:::

:::exercise {fs-id1170572504560} type= 
PROBLEM:
Using your expression from the preceding problem, what is the terminal velocity? (*Hint:* Examine the limiting behavior: Does the velocity approach a value?)
SOLUTION:
$\sqrt{\frac{gm}{k}}$
:::

:::exercise {fs-id1170571631470} type= 
PROBLEM:
**[T]** Using your equation for terminal velocity, solve for the distance fallen. How long does it take to fall $5000$ meters if the mass is $100$ kilograms, the acceleration due to gravity is $9.8{\;\text{m/s}}^{2}$ and the proportionality constant is $4?$ Does it take more or less time than your initial estimate?
:::
For the following problems, determine how parameter $a$ affects the solution.

:::exercise {fs-id1170572468399} type= 
PROBLEM:
Solve the generic equation $y'=ax+y.$ How does varying $a$ change the behavior?
SOLUTION:
$y=C{e}^{x}-a(x+1)$
:::

:::exercise {fs-id1170572468472} type= 
PROBLEM:
Solve the generic equation $y'=ay+x.$ How does varying $a$ change the behavior?
:::

:::exercise {fs-id1170572176201} type= 
PROBLEM:
Solve the generic equation $y'=ax+xy.$ How does varying $a$ change the behavior?
SOLUTION:
$y=C{e}^{{x}^{2}\text{/}2}-a$
:::

:::exercise {fs-id1170572387691} type= 
PROBLEM:
Solve the generic equation $y'=x+axy.$ How does varying $a$ change the behavior?
:::

:::exercise {fs-id1170571783178} type= 
PROBLEM:
Solve $y'-y={e}^{kt}$ with the initial condition $y(0)=0.$ As $k$ approaches $1,$ what happens to your formula?
SOLUTION:
$y=\frac{{e}^{kt}-{e}^{t}}{k-1}$
:::

## Chapter Review Exercises {section:review-exercises}
*True or False?* Justify your answer with a proof or a counterexample.

:::exercise {fs-id1170572115965} type= 
PROBLEM:
The differential equation $y'=3{x}^{2}y-\text{cos}(x){y}^{''}$ is linear.
:::

:::exercise {fs-id1170572439961} type= 
PROBLEM:
The differential equation $y'=x-y$ is separable.
SOLUTION:
F
:::

:::exercise {fs-id1170572439993} type= 
PROBLEM:
You can explicitly solve all first-order differential equations by separation or by the method of integrating factors.
:::

:::exercise {fs-id1170571526558} type= 
PROBLEM:
You can determine the behavior of all first-order differential equations using directional fields or Euler’s method.
SOLUTION:
T
:::
For the following problems, find the general solution to the differential equations.

:::exercise {fs-id1170571526580} type= 
PROBLEM:
${y}^{'}={x}^{2}+3{e}^{x}-2x$
:::

:::exercise {fs-id1170571776648} type= 
PROBLEM:
$y'={2}^{x}+{\text{cos}}^{−1}x$
SOLUTION:
$y(x)=\frac{{2}^{x}}{\text{ln}(2)}+x\;{\text{cos}}^{−1}x-\sqrt{1-{x}^{2}}+C$
:::

:::exercise {fs-id1170572548229} type= 
PROBLEM:
$y'=y({x}^{2}+1)$
:::

:::exercise {fs-id1170572476629} type= 
PROBLEM:
$y'={e}^{\text{−}y}\text{sin}\;x$
SOLUTION:
$y(x)=\text{ln}(C-\text{cos}\;x)$
:::

:::exercise {fs-id1170572394399} type= 
PROBLEM:
$y'=3x-2y$
:::

:::exercise {fs-id1170572408332} type= 
PROBLEM:
$y'=y\;\text{ln}\;y$
SOLUTION:
$y(x)={e}^{{e}^{C+x}}$
:::
For the following problems, find the solution to the initial value problem.

:::exercise {fs-id1170572353254} type= 
PROBLEM:
$y'=8x-\text{ln}\;x-3{x}^{4},y(1)=5$
:::

:::exercise {fs-id1170572404963} type= 
PROBLEM:
$y'=3x-\text{cos}\;x+2,y(0)=4$
SOLUTION:
$y(x)=4+\frac{3}{2}{x}^{2}+2x-\text{sin}\;x$
:::

:::exercise {fs-id1170572625676} type= 
PROBLEM:
$xy'=y(x-2),y(1)=3$
:::

:::exercise {fs-id1170571731266} type= 
PROBLEM:
$y'=3{y}^{2}(x+\text{cos}\;x),y(0)=−2$
SOLUTION:
$y(x)=-\frac{2}{1+3({x}^{2}+2\;\text{sin}\;x)}$
:::

:::exercise {fs-id1170572296610} type= 
PROBLEM:
$(x-1)y'=y-2,y(0)=0$
:::

:::exercise {fs-id1170572593776} type= 
PROBLEM:
$y'=3y-x+6{x}^{2},y(0)=−1$
SOLUTION:
$y(x)=−2{x}^{2}-2x-\frac{1}{3}-\frac{2}{3}{e}^{3x}$
:::
For the following problems, draw the directional field associated with the differential equation, then solve the differential equation. Draw a sample solution on the directional field.

:::exercise {fs-id1170571715442} type= 
PROBLEM:
$y'=2y-{y}^{2}$
:::

:::exercise {fs-id1170571601346} type= 
PROBLEM:
$y'=\frac{1}{x}+\text{ln}\;x-y,$ for $x>0$
SOLUTION:

> IMAGE {img:fs-id1170571601397} src=../../media/CNX_Calc_Figure_08_05_202.jpg
> alt: A direction field with arrows pointing up and to the right along a logarithmic curve that approaches negative infinity as x goes to zero and increases as x goes to infinity.

$y(x)=C{e}^{\text{−}x}+\text{ln}\;x$
:::
For the following problems, use Euler’s Method with $n=5$ steps over the interval $t=[0,1].$ Then solve the initial-value problem exactly. How close is your Euler’s Method estimate?

:::exercise {fs-id1170572347279} type= 
PROBLEM:
$y'=−4yx,y(0)=1$
:::

:::exercise {fs-id1170572116146} type= 
PROBLEM:
$y'={3}^{x}-2y,y(0)=0$
SOLUTION:
Euler: $0.6939,$ exact solution: $y(x)=\frac{{3}^{x}-{e}^{−2x}}{2+\text{ln}(3)}$
:::
For the following problems, set up and solve the differential equations.

:::exercise {fs-id1170572582674} type= 
PROBLEM:
A car drives along a freeway, accelerating according to $a=5\;\text{sin}(\pi t),$ where $t$ represents time in minutes. Find the velocity at any time $t,$ assuming the car starts with an initial speed of $60$ mph.
:::

:::exercise {fs-id1170572230461} type= 
PROBLEM:
You throw a ball of mass $2$ kilograms into the air with an upward velocity of $8$ m/s. Find exactly the time the ball will remain in the air, assuming that gravity is given by $g=9.8{\;\text{m/s}}^{2}.$
SOLUTION:
$\frac{40}{49}$ second
:::

:::exercise {fs-id1170572230516} type= 
PROBLEM:
You drop a ball with a mass of $5$ kilograms out an airplane window at a height of $5000$ m. How long does it take for the ball to reach the ground?
:::

:::exercise {fs-id1170572179974} type= 
PROBLEM:
You drop the same ball of mass $5$ kilograms out of the same airplane window at the same height, except this time you assume a drag force proportional to the ball’s velocity, using a proportionality constant of $3$ and the ball reaches terminal velocity. Solve for the distance fallen as a function of time. How long does it take the ball to reach the ground?
SOLUTION:
$x(t)=5000+\frac{245}{9}-\frac{49}{3}t-\frac{245}{9}{e}^{\text{−}5\text{/}3t},t=307.8$ seconds
:::

:::exercise {fs-id1170571586043} type= 
PROBLEM:
A drug is administered to a patient every $24$ hours and is cleared at a rate proportional to the amount of drug left in the body, with proportionality constant $0.2.$ If the patient needs a baseline level of $5$ mg to be in the bloodstream at all times, how large should the dose be?
:::

:::exercise {fs-id1170571586096} type= 
PROBLEM:
A $1000$-liter tank contains pure water and a solution of $0.2$ kg salt/L is pumped into the tank at a rate of $1$ L/min and is drained at the same rate. Solve for total amount of salt in the tank at time $t.$
SOLUTION:
$T(t)=200(1-{e}^{\text{−}t\text{/}1000})$
:::

:::exercise {fs-id1170571822214} type= 
PROBLEM:
You boil water to make tea. When you pour the water into your teapot, the temperature is $100\text{°C.}$ After $5$ minutes in your $15\text{°C}$ room, the temperature of the tea is $85\text{°C.}$ Solve the equation to determine the temperatures of the tea at time $t.$ How long must you wait until the tea is at a drinkable temperature $(72\text{°C})?$
:::

:::exercise {fs-id1170571642098} type= 
PROBLEM:
The human population (in thousands) of Nevada in $1950$ was roughly $160.$ If the carrying capacity is estimated at $10$ million individuals, and assuming a growth rate of $2\text{\%}$ per year, develop a logistic growth model and solve for the population in Nevada at any time (use $1950$ as time = 0). What population does your model predict for $2000?$ How close is your prediction to the true value of $1,998,257?$
SOLUTION:
$P(t)=\frac{1600000{e}^{0.02t}}{9840+160{e}^{0.02t}}$
:::

:::exercise {fs-id1170571832364} type= 
PROBLEM:
Repeat the previous problem but use Gompertz growth model. Which is more accurate?
:::

## Glossary
- {def} **integrating factor**: any function $f(x)$ that is multiplied on both sides of a differential equation to make the side involving the unknown function equal to the derivative of a product of two functions
- {def} **linear**: description of a first-order differential equation that can be written in the form $a(x){y}^{'}+b(x)y=c(x)$
- {def} **standard form**: the form of a first-order linear differential equation obtained by writing the differential equation in the form $y'+p(x)y=q(x)$

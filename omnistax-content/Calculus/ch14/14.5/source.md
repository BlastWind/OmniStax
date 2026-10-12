# The Chain Rule

## Learning Objectives {section:learning-objectives}
- State the chain rules for one or two independent variables.
- Use tree diagrams as an aid to understanding the chain rule for several independent and intermediate variables.
- Perform implicit differentiation of a function of two or more variables.

In single-variable calculus, we found that one of the most useful differentiation rules is the chain rule, which allows us to find the derivative of the composition of two functions. The same thing is true for multivariable calculus, but this time we have to deal with more than one form of the chain rule. In this section, we study extensions of the chain rule and learn how to take derivatives of compositions of functions of more than one variable.

## Chain Rules for One or Two Independent Variables
Recall that the chain rule for the derivative of a composite of two functions can be written in the form

$\frac{d}{dx}(f(g(x)))=f'(g(x))g'(x).$  {eq:fs-id1167793852595}

In this equation, both $f(x)$ and $g(x)$ are functions of one variable. Now suppose that $f$ is a function of two variables and $g$ is a function of one variable. Or perhaps they are both functions of two variables, or even more. How would we calculate the derivative in these cases? The following theorem gives us the answer for the case of one independent variable.

:::note [theorem] Chain Rule for One Independent Variable
Suppose that $x=g(t)$ and $y=h(t)$ are differentiable functions of $t$ and $z=f(x,y)$ is a differentiable function of $x\;\text{and}\;y.$ Then $z=f(x(t),y(t))$ is a differentiable function of $t$ and

$$ \frac{dz}{dt}=\frac{\partial z}{\partial x}\cdot \frac{dx}{dt}+\frac{\partial z}{\partial y}\cdot \frac{dy}{dt}, $$  {eq:fs-id1167794005848}

where the ordinary derivatives are evaluated at $t$ and the partial derivatives are evaluated at $(x,y).$
:::

### Proof
The proof of this theorem uses the definition of differentiability of a function of two variables. Suppose that *f* is differentiable at the point $P({x}_{0},{y}_{0}),$ where ${x}_{0}=g({t}_{0})$ and ${y}_{0}=h({t}_{0})$ for a fixed value of ${t}_{0}.$ We wish to prove that $z=f(x(t),y(t))$ is differentiable at $t={t}_{0}$ and that [ref:fs-id1167794005848] holds at that point as well.
Since $f$ is differentiable at $P,$ we know that

$$ z(t)=f(x,y)=f({x}_{0},{y}_{0})+{f}_{x}({x}_{0},{y}_{0})(x-{x}_{0})+{f}_{y}({x}_{0},{y}_{0})(y-{y}_{0})+E(x,y), $$  {eq:fs-id1167793966705}

where $\lim_{(x,y)\to ({x}_{0},{y}_{0})}\frac{E(x,y)}{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}}=0.$ We then subtract ${z}_{0}=f({x}_{0},{y}_{0})$ from both sides of this equation:

$\begin{array}{rl}z(t)-z({t}_{0}) & =f(x(t),y(t))-f(x({t}_{0}),y({t}_{0})) \\ & ={f}_{x}({x}_{0},{y}_{0})(x(t)-x({t}_{0}))+{f}_{y}({x}_{0},{y}_{0})(y(t)-y({t}_{0}))+E(x(t),y(t)).\end{array}$  {eq:fs-id1167793862536}

Next, we divide both sides by $t-{t}_{0}\text{:}$

$\frac{z(t)-z({t}_{0})}{t-{t}_{0}}={f}_{x}({x}_{0},{y}_{0})(\frac{x(t)-x({t}_{0})}{t-{t}_{0}})+{f}_{y}({x}_{0},{y}_{0})(\frac{y(t)-y({t}_{0})}{t-{t}_{0}})+\frac{E(x(t),y(t))}{t-{t}_{0}}.$  {eq:fs-id1167794147324}

Then we take the limit as $t$ approaches ${t}_{0}\text{:}$

$\begin{array}{rl}\lim_{t\to {t}_{0}}\frac{z(t)-z({t}_{0})}{t-{t}_{0}} & ={f}_{x}({x}_{0},{y}_{0})\lim_{t\to {t}_{0}}(\frac{x(t)-x({t}_{0})}{t-{t}_{0}})+{f}_{y}({x}_{0},{y}_{0})\lim_{t\to {t}_{0}}(\frac{y(t)-y({t}_{0})}{t-{t}_{0}}) \\ & \;+\lim_{t\to {t}_{0}}\frac{E(x(t),y(t))}{t-{t}_{0}}.\end{array}$  {eq:fs-id1167794098369}

The left-hand side of this equation is equal to $dz\text{/}dt,$ which leads to

$\frac{dz}{dt}={f}_{x}({x}_{0},{y}_{0})\frac{dx}{dt}+{f}_{y}({x}_{0},{y}_{0})\frac{dy}{dt}+\lim_{t\to {t}_{0}}\frac{E(x(t),y(t))}{t-{t}_{0}}.$  {eq:fs-id1167793261160}

The last term can be rewritten as

$\begin{array}{rl}\lim_{t\to {t}_{0}}\frac{E(x(t),y(t))}{t-{t}_{0}} & =\lim_{t\to {t}_{0}}(\frac{E(x,y)}{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}}\;\frac{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}}{t-{t}_{0}}) \\ & =\lim_{t\to {t}_{0}}(\frac{E(x,y)}{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}})\lim_{t\to {t}_{0}}(\frac{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}}{t-{t}_{0}}).\end{array}$  {eq:fs-id1167794328789}

As $t$ approaches ${t}_{0},$ $(x(t),y(t))$ approaches $(x({t}_{0}),y({t}_{0})),$ so we can rewrite the last product as

$\lim_{(x,y)\to ({x}_{0},{y}_{0})}(\frac{E(x,y)}{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}})\lim_{(x,y)\to ({x}_{0},{y}_{0})}(\frac{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}}{t-{t}_{0}}).$  {eq:fs-id1167794100846}

Since the first limit is equal to zero, we need only show that the second limit is finite:

$\begin{array}{rl}\lim_{(x,y)\to ({x}_{0},{y}_{0})}(\frac{\sqrt{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}}{t-{t}_{0}}) & =\lim_{(x,y)\to ({x}_{0},{y}_{0})}(\sqrt{\frac{{(x-{x}_{0})}^{2}+{(y-{y}_{0})}^{2}}{{(t-{t}_{0})}^{2}}}) \\ & =\lim_{(x,y)\to ({x}_{0},{y}_{0})}(\sqrt{{(\frac{x-{x}_{0}}{t-{t}_{0}})}^{2}+{(\frac{y-{y}_{0}}{t-{t}_{0}})}^{2}}) \\ & =\sqrt{{(\lim_{(x,y)\to ({x}_{0},{y}_{0})}(\frac{x-{x}_{0}}{t-{t}_{0}}))}^{2}+{(\lim_{(x,y)\to ({x}_{0},{y}_{0})}(\frac{y-{y}_{0}}{t-{t}_{0}}))}^{2}}.\end{array}$  {eq:fs-id1167794074214}

Since $x(t)$ and $y(t)$ are both differentiable functions of $t,$ both limits inside the last radical exist. Therefore, this value is finite. This proves the chain rule at $t={t}_{0};$ the rest of the theorem follows from the assumption that all functions are differentiable over their entire domains.
□
Closer examination of [ref:fs-id1167794005848] reveals an interesting pattern. The first term in the equation is $\frac{\partial f}{\partial x}\cdot \frac{dx}{dt}$ and the second term is $\frac{\partial f}{\partial y}\cdot \frac{dy}{dt}.$ Recall that when multiplying fractions, cancelation can be used. If we treat these derivatives as fractions, then each product “simplifies” to something resembling $\partial f\text{/}dt.$ The variables $x\;\text{and}\;y$ that disappear in this simplification are often called {term:intermediate variables}: they are independent variables for the function $f,$ but are dependent variables for the variable $t.$ Two terms appear on the right-hand side of the formula, and $f$ is a function of two variables. This pattern works with functions of more than two variables as well, as we see later in this section.

:::example {ex:fs-id1167793221931} Using the Chain Rule

:::exercise {fs-id1167793949413} type= 
PROBLEM:
Calculate $dz\text{/}dt$ for each of the following functions:
a. $z=f(x,y)=4{x}^{2}+3{y}^{2},x=x(t)=\text{sin}\;t,y=y(t)=\text{cos}\;t$
b. $z=f(x,y)=\sqrt{{x}^{2}-{y}^{2}},x=x(t)={e}^{2t},y=y(t)={e}^{\text{−}t}$
SOLUTION:
a. To use the chain rule, we need four quantities—$\partial z\text{/}\partial x,\partial z\text{/}\partial y,dx\text{/}dt,$ and $dy\text{/}dt\text{:}$

$\begin{array}{llll}\frac{\partial z}{\partial x}=8x & & & \frac{\partial z}{\partial y}=6y \\ \frac{dx}{dt}=\text{cos}\;t & & & \frac{dy}{dt}=\text{−}\text{sin}\;t\end{array}$  {eq:fs-id1167793274171}

Now, we substitute each of these into [ref:fs-id1167794005848]:

$\begin{array}{rl}\frac{dz}{dt} & =\frac{\partial z}{\partial x}\cdot \frac{dx}{dt}+\frac{\partial z}{\partial y}\cdot \frac{dy}{dt} \\ & =(8x)(\text{cos}\;t)+(6y)(\text{−}\text{sin}\;t) \\ & =8x\;\text{cos}\;t-6y\;\text{sin}\;t.\end{array}$  {eq:fs-id1167793263370}

This answer has three variables in it. To reduce it to one variable, use the fact that $x(t)=\text{sin}\;t\;\text{and}\;y(t)=\text{cos}\;t.$ We obtain

$\begin{array}{rl}\frac{dz}{dt} & =8x\;\text{cos}\;t-6y\;\text{sin}\;t \\ & =8(\text{sin}\;t)\text{cos}\;t-6(\text{cos}\;t)\text{sin}\;t \\ & =2\;\text{sin}\;t\;\text{cos}\;t.\end{array}$  {eq:fs-id1167794333380}

This derivative can also be calculated by first substituting $x(t)$ and $y(t)$ into $f(x,y),$ then differentiating with respect to $t\text{:}$

$\begin{array}{rl}z & =f(x,y) \\ & =f(x(t),y(t)) \\ & =4{(x(t))}^{2}+3{(y(t))}^{2} \\ & =4{\text{sin}}^{2}t+3{\text{cos}}^{2}t.\end{array}$  {eq:fs-id1167793959436}

Then

$\begin{array}{rl}\frac{dz}{dt} & =2(4\;\text{sin}\;t)(\text{cos}\;t)+2(3\;\text{cos}\;t)(\text{−}\text{sin}\;t) \\ & =8\;\text{sin}\;t\;\text{cos}\;t-6\;\text{sin}\;t\;\text{cos}\;t \\ & =2\;\text{sin}\;t\;\text{cos}\;t,\end{array}$  {eq:fs-id1167794099726}

which is the same solution. However, it may not always be this easy to differentiate in this form.
b. To use the chain rule, we again need four quantities—$\partial z\text{/}\partial x,\partial z\text{/}dy,dx\text{/}dt,$ and $dy\text{/}dt\text{:}$

$\begin{array}{llll}\frac{\partial z}{\partial x}=\frac{x}{\sqrt{{x}^{2}-{y}^{2}}} & & & \frac{\partial z}{\partial y}=\frac{\text{−}y}{\sqrt{{x}^{2}-{y}^{2}}} \\ \frac{dx}{dt}=2{e}^{2t} & & & \frac{dy}{dt}=\text{−}{e}^{\text{−}t}.\end{array}$  {eq:fs-id1167793957237}

We substitute each of these into [ref:fs-id1167794005848]:

$\begin{array}{rl}\frac{dz}{dt} & =\frac{\partial z}{\partial x}\cdot \frac{dx}{dt}+\frac{\partial z}{\partial y}\cdot \frac{dy}{dt} \\ & =(\frac{x}{\sqrt{{x}^{2}-{y}^{2}}})(2{e}^{2t})+(\frac{\text{−}y}{\sqrt{{x}^{2}-{y}^{2}}})(\text{−}{e}^{\text{−}t}) \\ & =\frac{2x{e}^{2t}+y{e}^{\text{−}t}}{\sqrt{{x}^{2}-{y}^{2}}}.\end{array}$  {eq:fs-id1167793266018}

To reduce this to one variable, we use the fact that $x(t)={e}^{2t}$ and $y(t)={e}^{\text{−}t}.$ Therefore,

$\begin{array}{rl}\frac{dz}{dt} & =\frac{2x{e}^{2t}+y{e}^{\text{−}t}}{\sqrt{{x}^{2}-{y}^{2}}} \\ & =\frac{2({e}^{2t}){e}^{2t}+({e}^{\text{−}t}){e}^{\text{−}t}}{\sqrt{{e}^{4t}-{e}^{−2t}}} \\ & =\frac{2{e}^{4t}+{e}^{−2t}}{\sqrt{{e}^{4t}-{e}^{−2t}}}.\end{array}$  {eq:fs-id1167793831595}

To eliminate negative exponents, we multiply the top by ${e}^{2t}$ and the bottom by $\sqrt{{e}^{4t}}\text{:}$

$\begin{array}{rl}\frac{dz}{dt} & =\frac{2{e}^{4t}+{e}^{−2t}}{\sqrt{{e}^{4t}-{e}^{−2t}}}\cdot \frac{{e}^{2t}}{\sqrt{{e}^{4t}}} \\ & =\frac{2{e}^{6t}+1}{\sqrt{{e}^{8t}-{e}^{2t}}} \\ & =\frac{2{e}^{6t}+1}{\sqrt{{e}^{2t}({e}^{6t}-1)}} \\ & =\frac{2{e}^{6t}+1}{{e}^{t}\sqrt{{e}^{6t}-1}}.\end{array}$  {eq:fs-id1167793944190}

Again, this derivative can also be calculated by first substituting $x(t)$ and $y(t)$ into $f(x,y),$ then differentiating with respect to $t\text{:}$

$\begin{array}{rl}z & =f(x,y) \\ & =f(x(t),y(t)) \\ & =\sqrt{{(x(t))}^{2}-{(y(t))}^{2}} \\ & =\sqrt{{e}^{4t}-{e}^{−2t}} \\ & ={({e}^{4t}-{e}^{−2t})}^{1\text{/}2}.\end{array}$  {eq:fs-id1167794045346}

Then

$\begin{array}{rl}\frac{dz}{dt} & =\frac{1}{2}{({e}^{4t}-{e}^{−2t})}^{\text{−}1\text{/}2}(4{e}^{4t}+2{e}^{−2t}) \\ & =\frac{2{e}^{4t}+{e}^{−2t}}{\sqrt{{e}^{4t}-{e}^{−2t}}}.\end{array}$  {eq:fs-id1167793450645}

This is the same solution.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794290552} type= 
PROBLEM:
Calculate $dz\text{/}dt$ given the following functions. Express the final answer in terms of $t.$

$z=f(x,y)={x}^{2}-3xy+2{y}^{2},x=x(t)=3\;\text{sin}\;2t,y=y(t)=4\;\text{cos}\;2t$  {eq:fs-id1167793244017}

SOLUTION:
$\begin{array}{rl}\frac{dz}{dt} & =\frac{\partial f}{\partial x}\;\frac{dx}{dt}+\frac{\partial f}{\partial y}\;\frac{dy}{dt} \\ & =(2x-3y)(6\;\text{cos}\;2t)+(−3x+4y)(−8\;\text{sin}\;2t) \\ & =−92\;\text{sin}\;2t\;\text{cos}\;2t-72({\text{cos}}^{2}2t-{\text{sin}}^{2}2t) \\ & =−46\;\text{sin}\;4t-72\;\text{cos}\;4t.\end{array}$
COMMENTARY: Hint
Calculate $\partial z\text{/}\partial x,\partial z\text{/}dy,dx\text{/}dt,$ and $dy\text{/}dt,$ then use [ref:fs-id1167794005848].
:::
:::
It is often useful to create a visual representation of [ref:fs-id1167794005848] for the chain rule. This is called a {term:tree diagram} for the chain rule for functions of one variable and it provides a way to remember the formula ([ref:CNX_Calc_Figure_14_05_001]). This diagram can be expanded for functions of more than one variable, as we shall see very shortly.

> FIGURE {fig:CNX_Calc_Figure_14_05_001} src=../../media/CNX_Calc_Figure_14_05_001.jpg
> alt: A diagram that starts with z = f(x, y). Along the first branch, it is written ∂z/∂x, then x = x(t), then dx/dt, then t, and finally it says ∂z/∂x dx/dt. Along the other branch, it is written ∂z/∂y, then y = y(t), then dy/dt, then t, and finally it says ∂z/∂y dy/dt.
> caption: Tree diagram for the case $\frac{dz}{dt}=\frac{\partial z}{\partial x}\cdot \frac{dx}{dt}+\frac{\partial z}{\partial y}\cdot \frac{dy}{dt}.$

In this diagram, the leftmost corner corresponds to $z=f(x,y).$ Since $f$ has two {index:independent variables}, there are two lines coming from this corner. The upper branch corresponds to the variable $x$ and the lower branch corresponds to the variable $y.$ Since each of these variables is then dependent on one variable $t,$ one branch then comes from $x$ and one branch comes from $y.$ Last, each of the branches on the far right has a label that represents the path traveled to reach that branch. The top branch is reached by following the $x$ branch, then the $t$ branch; therefore, it is labeled $(\partial z\text{/}\partial x)\;\times \;(dx\text{/}dt).$ The bottom branch is similar: first the $y$ branch, then the $t$ branch. This branch is labeled $(\partial z\text{/}\partial y)\;\times \;(dy\text{/}dt).$ To get the formula for $dz\text{/}dt,$ add all the terms that appear on the rightmost side of the diagram. This gives us [ref:fs-id1167794005848].
In [ref:fs-id1167794044156], $z=f(x,y)$ is a function of $x\;\text{and}\;y,$ and both $x=g(u,v)$ and $y=h(u,v)$ are functions of the independent variables $u\;\text{and}\;v.$

:::note [theorem] Chain Rule for Two Independent Variables
Suppose $x=g(u,v)$ and $y=h(u,v)$ are differentiable functions of $u$ and $v,$ and $z=f(x,y)$ is a differentiable function of $x\;\text{and}\;y.$ Then, $z=f(g(u,v),h(u,v))$ is a differentiable function of $u\;\text{and}\;v,$ and

$$ \frac{\partial z}{\partial u}=\frac{\partial z}{\partial x}\;\frac{\partial x}{\partial u}+\frac{\partial z}{\partial y}\;\frac{\partial y}{\partial u} $$  {eq:fs-id1167793501898}

and

$$ \frac{\partial z}{\partial v}=\frac{\partial z}{\partial x}\;\frac{\partial x}{\partial v}+\frac{\partial z}{\partial y}\;\frac{\partial y}{\partial v}. $$  {eq:fs-id1167794173384}

:::
We can draw a tree diagram for each of these formulas as well as follows.

> FIGURE {fig:CNX_Calc_Figure_14_05_002} src=../../media/CNX_Calc_Figure_14_05_002.jpg
> alt: A diagram that starts with z = f(x, y). Along the first branch, it is written ∂z/∂x, then x = g(u, v), at which point it breaks into another two branches: the first subbranch says ∂x/∂u, then u, and finally it says ∂z/∂x ∂x/∂u; the second subbranch says ∂x/∂v, then v, and finally it says ∂z/∂x ∂x/∂v. Along the other branch, it is written ∂z/∂y, then y = h(u, v), at which point it breaks into another two branches: the first subbranch says ∂y/∂u, then u, and finally it says ∂z/∂y ∂y/∂u; the second subbranch says ∂y/∂v, then v, and finally it says ∂z/∂y ∂y/∂v.
> caption: Tree diagram for $\frac{\partial z}{\partial u}=\frac{\partial z}{\partial x}\cdot \frac{\partial x}{\partial u}+\frac{\partial z}{\partial y}\cdot \frac{\partial y}{\partial u}$ and $\frac{\partial z}{\partial v}=\frac{\partial z}{\partial x}\cdot \frac{\partial x}{\partial v}+\frac{\partial z}{\partial y}\cdot \frac{\partial y}{\partial v}.$

To derive the formula for $\partial z\text{/}\partial u,$ start from the left side of the diagram, then follow only the branches that end with $u$ and add the terms that appear at the end of those branches. For the formula for $\partial z\text{/}\partial v,$ follow only the branches that end with $v$ and add the terms that appear at the end of those branches.
There is an important difference between these two chain rule theorems. In [ref:fs-id1167793362088], the left-hand side of the formula for the derivative is not a partial derivative, but in [ref:fs-id1167794044156] it is. The reason is that, in [ref:fs-id1167793362088], $z$ is ultimately a function of $t$ alone, whereas in [ref:fs-id1167794044156], $z$ is a function of both $u\;\text{and}\;v.$

:::example {ex:fs-id1167794337339} Using the Chain Rule for Two Variables

:::exercise {fs-id1167794337341} type= 
PROBLEM:
Calculate $\partial z\text{/}\partial u$ and $\partial z\text{/}\partial v$ using the following functions:

$z=f(x,y)=3{x}^{2}-2xy+{y}^{2},x=x(u,v)=3u+2v,y=y(u,v)=4u-v.$  {eq:fs-id1167794069822}

SOLUTION:
To implement the chain rule for two variables, we need six partial derivatives—$\partial z\text{/}\partial x,\partial z\text{/}\partial y,\partial x\text{/}\partial u,\partial x\text{/}\partial v,\partial y\text{/}\partial u,$ and $\partial y\text{/}\partial v\text{:}$

$\begin{array}{llll}\frac{\partial z}{\partial x}=6x-2y & & & \frac{\partial z}{\partial y}=−2x+2y \\ \frac{\partial x}{\partial u}=3 & & & \frac{\partial x}{\partial v}=2 \\ \frac{\partial y}{\partial u}=4 & & & \frac{\partial y}{\partial v}=−1.\end{array}$  {eq:fs-id1167794212336}

To find $\partial z\text{/}\partial u,$ we use [ref:fs-id1167793501898]:

$\begin{array}{rl}\frac{\partial z}{\partial u} & =\frac{\partial z}{\partial x}\frac{\partial x}{\partial u}+\frac{\partial z}{\partial y}\frac{\partial y}{\partial u} \\ & =3(6x-2y)+4(−2x+2y) \\ & =10x+2y.\end{array}$  {eq:fs-id1167794188094}

Next, we substitute $x(u,v)=3u+2v$ and $y(u,v)=4u-v\text{:}$

$\begin{array}{rl}\frac{\partial z}{\partial u} & =10x+2y \\ & =10(3u+2v)+2(4u-v) \\ & =38u+18v.\end{array}$  {eq:fs-id1167793580567}

To find $\partial z\text{/}\partial v,$ we use [ref:fs-id1167794173384]:

$\begin{array}{rl}\frac{\partial z}{\partial v} & =\frac{\partial z}{\partial x}\;\frac{\partial x}{\partial v}+\frac{\partial z}{\partial y}\;\frac{\partial y}{\partial v} \\ & =2(6x-2y)+(−1)(−2x+2y) \\ & =14x-6y.\end{array}$  {eq:fs-id1167793430867}

Then we substitute $x(u,v)=3u+2v$ and $y(u,v)=4u-v\text{:}$

$\begin{array}{rl}\frac{\partial z}{\partial v} & =14x-6y \\ & =14(3u+2v)-6(4u-v) \\ & =18u+34v.\end{array}$  {eq:fs-id1167793395267}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794003174} type= 
PROBLEM:
Calculate $\partial z\text{/}\partial u$ and $\partial z\text{/}\partial v$ given the following functions:

$z=f(x,y)=\frac{2x-y}{x+3y},x(u,v)={e}^{2u}\text{cos}\;3v,y(u,v)={e}^{2u}\text{sin}\;3v.$  {eq:fs-id1167793951283}

SOLUTION:
$\frac{\partial z}{\partial u}=0,\;\frac{\partial z}{\partial v}=\frac{−21}{{(3\;\text{sin}\;3v+\text{cos}\;3v)}^{2}}$
COMMENTARY: Hint
Calculate $\partial z\text{/}\partial x,\partial z\text{/}\partial y,\partial x\text{/}\partial u,\partial x\text{/}\partial v,\partial y\text{/}\partial u,$ and $\partial y\text{/}\partial v,$ then use [ref:fs-id1167793501898] and [ref:fs-id1167794173384].
:::
:::

## The Generalized Chain Rule
Now that we’ve see how to extend the original chain rule to functions of two variables, it is natural to ask: Can we extend the rule to more than two variables? The answer is yes, as the {term:generalized chain rule} states.

:::note [theorem] Generalized Chain Rule
Let $w=f({x}_{1},{x}_{2}\text{,…,}\;{x}_{m})$ be a differentiable function of $m$ independent variables, and for each $i\in \{1\text{,…,}\;m\},$ let ${x}_{i}={x}_{i}({t}_{1},{t}_{2}\text{,…,}\;{t}_{n})$ be a differentiable function of $n$ independent variables. Then

$$ \frac{\partial w}{\partial {t}_{j}}=\frac{\partial w}{\partial {x}_{1}}\;\frac{\partial {x}_{1}}{\partial {t}_{j}}+\frac{\partial w}{\partial {x}_{2}}\;\frac{\partial {x}_{2}}{\partial {t}_{j}}+\text{⋯}+\frac{\partial w}{\partial {x}_{m}}\;\frac{\partial {x}_{m}}{\partial {t}_{j}} $$  {eq:fs-id1167794334635}

for any $j\in \{1,2\text{,…,}\;n\}.$
:::
In the next example we calculate the derivative of a function of three independent variables in which each of the three variables is dependent on two other variables.

:::example {ex:fs-id1167794061796} Using the Generalized Chain Rule

:::exercise {fs-id1167794061798} type= 
PROBLEM:
Calculate $\partial w\text{/}\partial u$ and $\partial w\text{/}\partial v$ using the following functions:

$\begin{array}{rll} \\ w & = & f(x,y,z)=3{x}^{2}-2xy+4{z}^{2} \\ x & = & x(u,v)={e}^{u}\text{sin}\;v \\ y & = & y(u,v)={e}^{u}\text{cos}\;v \\ z & = & z(u,v)={e}^{u}.\end{array}$  {eq:fs-id1167794034893}

SOLUTION:
The formulas for $\partial w\text{/}\partial u$ and $\partial w\text{/}\partial v$ are

$\begin{array}{l}\frac{\partial w}{\partial u}=\frac{\partial w}{\partial x}\cdot \frac{\partial x}{\partial u}+\frac{\partial w}{\partial y}\cdot \frac{\partial y}{\partial u}+\frac{\partial w}{\partial z}\cdot \frac{\partial z}{\partial u} \\ \frac{\partial w}{\partial v}=\frac{\partial w}{\partial x}\cdot \frac{\partial x}{\partial v}+\frac{\partial w}{\partial y}\cdot \frac{\partial y}{\partial v}+\frac{\partial w}{\partial z}\cdot \frac{\partial z}{\partial v}.\end{array}$  {eq:fs-id1167793949169}

Therefore, there are nine different partial derivatives that need to be calculated and substituted. We need to calculate each of them:

$\begin{array}{rllllrllllrll}\frac{\partial w}{\partial x} & = & 6x-2y & & & \frac{\partial w}{\partial y} & = & −2x & & & \frac{\partial w}{\partial z} & = & 8z \\ \frac{\partial x}{\partial u} & = & {e}^{u}\text{sin}\;v & & & \frac{\partial y}{\partial u} & = & {e}^{u}\text{cos}\;v & & & \frac{\partial z}{\partial u} & = & {e}^{u} \\ \frac{\partial x}{\partial v} & = & {e}^{u}\text{cos}\;v & & & \frac{\partial y}{\partial v} & = & \text{−}{e}^{u}\text{sin}\;v & & & \frac{\partial z}{\partial v} & = & 0.\end{array}$  {eq:fs-id1167793258310}

Now, we substitute each of them into the first formula to calculate $\partial w\text{/}\partial u\text{:}$

$\begin{array}{rl}\frac{\partial w}{\partial u} & =\frac{\partial w}{\partial x}\cdot \frac{\partial x}{\partial u}+\frac{\partial w}{\partial y}\cdot \frac{\partial y}{\partial u}+\frac{\partial w}{\partial z}\cdot \frac{\partial z}{\partial u} \\ & =(6x-2y){e}^{u}\text{sin}\;v-2x{e}^{u}\text{cos}\;v+8z{e}^{u},\end{array}$  {eq:fs-id1167794034072}

then substitute $x(u,v)={e}^{u}\text{sin}\;v,y(u,v)={e}^{u}\text{cos}\;v,$ and $z(u,v)={e}^{u}$ into this equation:

$\begin{array}{rl}\frac{\partial w}{\partial u} & =(6x-2y){e}^{u}\text{sin}\;v-2x{e}^{u}\text{cos}\;v+8z{e}^{u} \\ & =(6{e}^{u}\text{sin}\;v-2{e}^{u}\text{cos}\;v){e}^{u}\text{sin}\;v-2({e}^{u}\text{sin}\;v){e}^{u}\text{cos}\;v+8{e}^{2u} \\ & =6{e}^{2u}{\text{sin}}^{2}v-4{e}^{2u}\text{sin}\;v\;\text{cos}\;v+8{e}^{2u} \\ & =2{e}^{2u}(3\;{\text{sin}}^{2}v-2\;\text{sin}\;v\;\text{cos}\;v+4).\end{array}$  {eq:fs-id1167794100912}

Next, we calculate $\partial w\text{/}\partial v\text{:}$

$\begin{array}{rl}\frac{\partial w}{\partial v} & =\frac{\partial w}{\partial x}\cdot \frac{\partial x}{\partial v}+\frac{\partial w}{\partial y}\cdot \frac{\partial y}{\partial v}+\frac{\partial w}{\partial z}\cdot \frac{\partial z}{\partial v} \\ & =(6x-2y){e}^{u}\text{cos}\;v-2x(\text{−}{e}^{u}\text{sin}\;v)+8z(0),\end{array}$  {eq:fs-id1167793871220}

then we substitute $x(u,v)={e}^{u}\text{sin}\;v,y(u,v)={e}^{u}\text{cos}\;v,$ and $z(u,v)={e}^{u}$ into this equation:

$\begin{array}{ll}\frac{\partial w}{\partial v} & =(6x-2y){e}^{u}\text{cos}\;v-2x(\text{−}{e}^{u}\text{sin}\;v) \\ & =(6{e}^{u}\text{sin}\;v-2{e}^{u}\text{cos}\;v){e}^{u}\text{cos}\;v+2({e}^{u}\text{sin}\;v)({e}^{u}\text{sin}\;v) \\ & =2{e}^{2u}{\text{sin}}^{2}v+6{e}^{2u}\text{sin}\;v\;\text{cos}\;v-2{e}^{2u}{\text{cos}}^{2}v \\ & =2{e}^{2u}(v+3\text{sin}\text{sin}v\text{cos}\text{cos}v-v).\end{array}$  {eq:fs-id1167793991316}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793420518} type= 
PROBLEM:
Calculate $\partial w\text{/}\partial u$ and $\partial w\text{/}\partial v$ given the following functions:

$\begin{array}{rll} \\ \\ w & = & f(x,y,z)=\frac{x+2y-4z}{2x-y+3z} \\ x & = & x(u,v)={e}^{2u}\text{cos}\;3v \\ y & = & y(u,v)={e}^{2u}\text{sin}\;3v \\ z & = & z(u,v)={e}^{2u}.\end{array}$  {eq:fs-id1167794051686}

SOLUTION:
$\begin{array}{l}\frac{\partial w}{\partial u}=0 \\ \frac{\partial w}{\partial v}=\frac{15-33\;\text{sin}\;3v+6\;\text{cos}\;3v}{{(3+2\;\text{cos}\;3v-\text{sin}\;3v)}^{2}}\end{array}$
COMMENTARY: Hint
Calculate nine partial derivatives, then use the same formulas from [ref:fs-id1167794061796].
:::
:::

:::example {ex:fs-id1167794061358} Drawing a Tree Diagram

:::exercise {fs-id1167794061360} type= 
PROBLEM:
Create a tree diagram for the case when

$w=f(x,y,z),x=x(t,u,v),y=y(t,u,v),z=z(t,u,v)$  {eq:fs-id1167793268895}

and write out the formulas for the three partial derivatives of $w.$
SOLUTION:
Starting from the left, the function $f$ has three independent variables: $x,y,\text{and}\;z.$ Therefore, three branches must be emanating from the first node. Each of these three branches also has three branches, for each of the variables $t,u,\;\text{and}\;v.$

> FIGURE {fig:CNX_Calc_Figure_14_05_003} src=../../media/CNX_Calc_Figure_14_05_003.jpg
> alt: A diagram that starts with w = f(x, y, z). Along the first branch, it is written ∂w/∂x, then x = x(t, u, v), at which point it breaks into another three subbranches: the first subbranch says t and then ∂w/∂x ∂x/∂t; the second subbranch says u and then ∂w/∂x ∂x/∂u; and the third subbranch says v and then ∂w/∂x ∂x/∂v. Along the second branch, it is written ∂w/∂y, then y = y(t, u, v), at which point it breaks into another three subbranches: the first subbranch says t and then ∂w/∂y ∂y/∂t; the second subbranch says u and then ∂w/∂y ∂y/∂u; and the third subbranch says v and then ∂w/∂y ∂y/∂v. Along the third branch, it is written ∂w/∂z, then z = z(t, u, v), at which point it breaks into another three subbranches: the first subbranch says t and then ∂w/∂z ∂z/∂t; the second subbranch says u and then ∂w/∂z ∂z/∂u; and the third subbranch says v and then ∂w/∂z ∂z/∂v.
> caption: Tree diagram for a function of three variables, each of which is a function of three independent variables.

The three formulas are

$\begin{array}{l}\frac{\partial w}{\partial t}=\frac{\partial w}{\partial x}\;\frac{\partial x}{\partial t}+\frac{\partial w}{\partial y}\;\frac{\partial y}{\partial t}+\frac{\partial w}{\partial z}\;\frac{\partial z}{\partial t} \\ \frac{\partial w}{\partial u}=\frac{\partial w}{\partial x}\;\frac{\partial x}{\partial u}+\frac{\partial w}{\partial y}\;\frac{\partial y}{\partial u}+\frac{\partial w}{\partial z}\;\frac{\partial z}{\partial u} \\ \frac{\partial w}{\partial v}=\frac{\partial w}{\partial x}\;\frac{\partial x}{\partial v}+\frac{\partial w}{\partial y}\;\frac{\partial y}{\partial v}+\frac{\partial w}{\partial z}\;\frac{\partial z}{\partial v}.\end{array}$  {eq:fs-id1167793956572}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793630197} type= 
PROBLEM:
Create a tree diagram for the case when

$w=f(x,y),x=x(t,u,v),y=y(t,u,v)$  {eq:fs-id1167794296875}

and write out the formulas for the three partial derivatives of $w.$
SOLUTION:
$\begin{array}{l}\frac{\partial w}{\partial t}=\frac{\partial w}{\partial x}\;\frac{\partial x}{\partial t}+\frac{\partial w}{\partial y}\;\frac{\partial y}{\partial t} \\ \frac{\partial w}{\partial u}=\frac{\partial w}{\partial x}\;\frac{\partial x}{\partial u}+\frac{\partial w}{\partial y}\;\frac{\partial y}{\partial u} \\ \frac{\partial w}{\partial v}=\frac{\partial w}{\partial x}\;\frac{\partial x}{\partial v}+\frac{\partial w}{\partial y}\;\frac{\partial y}{\partial v}\end{array}$

> IMAGE {img:fs-id1167793514524} src=../../media/CNX_Calc_Figure_14_05_004.jpg
> alt: A diagram that starts with w = f(x, y). Along the first branch, it is written ∂w/∂x, then x = x(t, u, v), at which point it breaks into another three subbranches: the first subbranch says t and then ∂w/∂x ∂x/∂t; the second subbranch says u and then ∂w/∂x ∂x/∂u; and the third subbranch says v and then ∂w/∂x ∂x/∂v. Along the second branch, it is written ∂w/∂y, then y = y(t, u, v), at which point it breaks into another three subbranches: the first subbranch says t and then ∂w/∂y ∂y/∂t; the second subbranch says u and then ∂w/∂y ∂y/∂u; and the third subbranch says v and then ∂w/∂y ∂y/∂v.

COMMENTARY: Hint
Determine the number of branches that emanate from each node in the tree.
:::
:::

## Implicit Differentiation
Recall from [Implicit Differentiation](module:m53585) that {index:implicit differentiation} provides a method for finding $dy\text{/}dx$ when $y$ is defined implicitly as a function of $x.$ The method involves differentiating both sides of the equation defining the function with respect to $x,$ then solving for $dy\text{/}dx.$ Partial derivatives provide an alternative to this method.
Consider the ellipse defined by the equation ${x}^{2}+3{y}^{2}+4y-4=0$ as follows.

> FIGURE {fig:CNX_Calc_Figure_14_05_005} src=../../media/CNX_Calc_Figure_14_05_005.jpg
> alt: An ellipse with center near (0, –0.7), major axis horizontal and of length roughly 4.5, and minor axis of length roughly 3.
> caption: Graph of the ellipse defined by ${x}^{2}+3{y}^{2}+4y-4=0.$

This equation implicitly defines $y$ as a function of $x.$ As such, we can find the derivative $dy\text{/}dx$ using the method of implicit differentiation:

$\begin{array}{rll}\frac{d}{dx}({x}^{2}+3{y}^{2}+4y-4) & = & \frac{d}{dx}(0) \\ 2x+6y\frac{dy}{dx}+4\frac{dy}{dx} & = & 0 \\ (6y+4)\frac{dy}{dx} & = & −2x \\ \frac{dy}{dx} & = & -\frac{x}{3y+2}.\end{array}$  {eq:fs-id1167794290534}

We can also define a function $z=f(x,y)$ by using the left-hand side of the equation defining the ellipse. Then $f(x,y)={x}^{2}+3{y}^{2}+4y-4.$ The ellipse ${x}^{2}+3{y}^{2}+4y-4=0$ can then be described by the equation $f(x,y)=0.$ Using this function and the following theorem gives us an alternative approach to calculating $dy\text{/}dx.$

:::note [theorem] Implicit Differentiation of a Function of Two or More Variables
Suppose the function $z=f(x,y)$ defines $y$ implicitly as a function $y=g(x)$ of $x$ via the equation $f(x,y)=0.$ Then

$$ \frac{dy}{dx}=-\frac{\partial f\text{/}\partial x}{\partial f\text{/}\partial y} $$  {eq:fs-id1167793547437}

provided ${f}_{y}(x,y)≠0.$
If the equation $f(x,y,z)=0$ defines $z$ implicitly as a differentiable function of $x\;\text{and}\;y,$ then

$$ \frac{\partial z}{\partial x}=-\frac{\partial f\text{/}\partial x}{\partial f\text{/}\partial z}\;\text{and}\;\frac{\partial z}{\partial y}=-\frac{\partial f\text{/}\partial y}{\partial f\text{/}\partial z} $$  {eq:fs-id1167794214311}

as long as ${f}_{z}(x,y,z)≠0.$
:::
[ref:fs-id1167793547437] is a direct consequence of [ref:fs-id1167793501898]. In particular, if we assume that $y$ is defined implicitly as a function of $x$ via the equation $f(x,y)=0,$ we can apply the chain rule to find $dy\text{/}dx\text{:}$

$\begin{array}{rll}\frac{d}{dx}f(x,y) & = & \frac{d}{dx}(0) \\ \frac{\partial f}{\partial x}\cdot \frac{dx}{dx}+\frac{\partial f}{\partial y}\cdot \frac{dy}{dx} & = & 0 \\ \frac{\partial f}{\partial x}+\frac{\partial f}{\partial y}\cdot \frac{dy}{dx} & = & 0.\end{array}$  {eq:fs-id1167793951710}

Solving this equation for $dy\text{/}dx$ gives [ref:fs-id1167793547437]. [ref:fs-id1167794214311] can be derived in a similar fashion.
Let’s now return to the problem that we started before the previous theorem. Using [ref:fs-id1167793376409] and the function $f(x,y)={x}^{2}+3{y}^{2}+4y-4,$ we obtain

$\begin{array}{l}\frac{\partial f}{\partial x}=2x \\ \frac{\partial f}{\partial y}=6y+4.\end{array}$  {eq:fs-id1167793637938}

Then [ref:fs-id1167793547437] gives

$\frac{dy}{dx}=-\frac{\partial f\text{/}\partial x}{\partial f\text{/}\partial y}=-\frac{2x}{6y+4}=-\frac{x}{3y+2},$  {eq:fs-id1167793488599}

which is the same result obtained by the earlier use of implicit differentiation.

:::example {ex:fs-id1167793420880} Implicit Differentiation by Partial Derivatives

:::exercise {fs-id1167793420883} type= 
PROBLEM:
a. Calculate $dy\text{/}dx$ if $y$ is defined implicitly as a function of $x$ via the equation $3{x}^{2}-2xy+{y}^{2}+4x-6y-11=0.$ What is the equation of the tangent line to the graph of this curve at point $(2,1)?$
b. Calculate $\partial z\text{/}\partial x$ and $\partial z\text{/}\partial y,$ given ${x}^{2}{e}^{y}-yz{e}^{x}=0.$
SOLUTION:
a. Set $f(x,y)=3{x}^{2}-2xy+{y}^{2}+4x-6y-11=0,$ then calculate ${f}_{x}$ and ${f}_{y}\text{:}$ $\begin{array}{l}{f}_{x}=6x-2y+4 \\ {f}_{y}=−2x+2y-6.\end{array}$

The derivative is given by

$\frac{dy}{dx}=-\frac{\partial f\text{/}\partial x}{\partial f\text{/}\partial y}=-\frac{6x-2y+4}{−2x+2y-6}=\frac{3x-y+2}{x-y+3}.$  {eq:fs-id1167793583329}

The slope of the tangent line at point $(2,1)$ is given by

${\frac{dy}{dx}|}_{(x,y)=(2,1)}=\frac{3(2)-1+2}{2-1+3}=\frac{7}{4}.$  {eq:fs-id1167793616881}

To find an equation of the tangent line, we use the point-slope form ([ref:CNX_Calc_Figure_14_05_006]):

$\begin{array}{rll}y-{y}_{0} & = & m(x-{x}_{0}) \\ y-1 & = & \frac{7}{4}(x-2) \\ y & = & \frac{7}{4}x-\frac{7}{2}+1 \\ y & = & \frac{7}{4}x-\frac{5}{2}.\end{array}$  {eq:fs-id1167793275134}

> FIGURE {fig:CNX_Calc_Figure_14_05_006} src=../../media/CNX_Calc_Figure_14_05_006.jpg
> alt: A rotated ellipse with equation 3x2 – 2xy + y2 + 4x – 6y – 11 = 0 and with tangent at (2, 1). The equation for the tangent is given by y = 7/4 x – 5/2. The ellipse’s major axis is parallel to the tangent line.
> caption: Graph of the rotated ellipse defined by $3{x}^{2}-2xy+{y}^{2}+4x-6y-11=0.$

b. We have $f(x,y,z)={x}^{2}{e}^{y}-yz{e}^{x}.$ Therefore,

$\begin{array}{l}\frac{\partial f}{\partial x}=2x{e}^{y}-yz{e}^{x} \\ \frac{\partial f}{\partial y}={x}^{2}{e}^{y}-z{e}^{x} \\ \frac{\partial f}{\partial z}=\text{−}y{e}^{x}.\end{array}$  {eq:fs-id1167793277396}

Using [ref:fs-id1167794214311],

$\begin{array}{lllllll}\begin{array}{ll}\frac{\partial z}{\partial x} & =-\frac{\partial f\text{/}\partial x}{\partial f\text{/}\partial z} \\ & =-\frac{2x{e}^{y}-yz{e}^{x}}{\text{−}y{e}^{x}} \\ & =\frac{2x{e}^{y}-yz{e}^{x}}{y{e}^{x}}\end{array} & & & \text{and} & & & \begin{array}{ll}\frac{\partial z}{\partial y} & =-\frac{\partial f\text{/}\partial y}{\partial f\text{/}\partial z} \\ & =-\frac{{x}^{2}{e}^{y}-z{e}^{x}}{\text{−}y{e}^{x}} \\ & =\frac{{x}^{2}{e}^{y}-z{e}^{x}}{y{e}^{x}}.\end{array}\end{array}$  {eq:fs-id1167794054989}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793948132} type= 
PROBLEM:
Find $dy\text{/}dx$ if $y$ is defined implicitly as a function of $x$ by the equation ${x}^{2}+xy-{y}^{2}+7x-3y-26=0.$ What is the equation of the tangent line to the graph of this curve at point $(3,−2)?$
SOLUTION:
$\frac{dy}{dx}={\frac{2x+y+7}{2y-x+3}|}_{(3,−2)}=\frac{2(3)+(−2)+7}{2(−2)-(3)+3}=-\frac{11}{4}$
Equation of the tangent line: $y=-\frac{11}{4}x+\frac{25}{4}$
COMMENTARY: Hint
Calculate $\partial f\text{/}dx$ and $\partial f\text{/}dy,$ then use [ref:fs-id1167793547437].
:::
:::

## Key Concepts {section:key-concepts}
- The chain rule for functions of more than one variable involves the partial derivatives with respect to all the independent variables.
- Tree diagrams are useful for deriving formulas for the chain rule for functions of more than one variable, where each independent variable also depends on other variables.

## Key Equations {section:key-equations}

> TABLE {tab:eip-547} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Chain rule, one independent variable** | $\frac{dz}{dt}=\frac{\partial z}{\partial x}\cdot \frac{dx}{dt}+\frac{\partial z}{\partial y}\cdot \frac{dy}{dt}$ |
| **Chain rule, two independent variables** | $\frac{dz}{du}=\frac{\partial z}{\partial x}\frac{\partial x}{\partial u}+\frac{\partial z}{\partial y}\frac{\partial y}{\partial u}$<br> $\frac{dz}{dv}=\frac{\partial z}{\partial x}\frac{\partial x}{\partial v}+\frac{\partial z}{\partial y}\frac{\partial y}{\partial v}$ |
| **Generalized chain rule** | $\frac{\partial w}{\partial {t}_{j}}=\frac{\partial w}{\partial {x}_{1}}\;\frac{\partial {x}_{1}}{\partial {t}_{j}}+\frac{\partial w}{\partial {x}_{2}}\;\frac{\partial {x}_{1}}{\partial {t}_{j}}+\text{⋯}+\frac{\partial w}{\partial {x}_{m}}\;\frac{\partial {x}_{m}}{\partial {t}_{j}}$ |

##  {section:section-exercises}
For the following exercises, use the information provided to solve the problem.

:::exercise {fs-id1167793510314} type= 
PROBLEM:
Let $w(x,y,z)=xy\;\text{cos}\;z,$ where $x=t,y={t}^{2},$ and $z=\text{arcsin}\;t.$ Find $\frac{dw}{dt}.$
SOLUTION:
$\frac{dw}{dt}=\frac{3{t}^{2}-4{t}^{2}}{\sqrt{1-{t}^{2}}}$
:::

:::exercise {fs-id1167794204844} type= 
PROBLEM:
Let $w(t,v)={e}^{tv}$ where $t=r+s$ and $v=rs.$ Find $\frac{\partial w}{\partial r}$ and $\frac{\partial w}{\partial s}.$
:::

:::exercise {fs-id1167793952838} type= 
PROBLEM:
If $w=5{x}^{2}+2{y}^{2},x=−3s+t,$ and $y=s-4t,$ find $\frac{\partial w}{\partial s}$ and $\frac{\partial w}{\partial t}.$
SOLUTION:
$\frac{\partial w}{\partial s}=94s-46t,$ $\frac{\partial w}{\partial t}=–46s+74t$
:::

:::exercise {fs-id1167794051796} type= 
PROBLEM:
If $w=x{y}^{2},x=5\;\text{cos}(2t),$ and $y=5\;\text{sin}(2t),$ find $\frac{dw}{dt}.$
:::

:::exercise {fs-id1167793267247} type= 
PROBLEM:
If $f(x,y)=xy,x=r\;\text{cos}\;\theta ,$ and $y=r\;\text{sin}\;\theta ,$ find $\frac{\partial f}{\partial r}$ and express the answer in terms of $r$ and $\theta .$
SOLUTION:
$\frac{\partial f}{\partial r}=r\;\text{sin}(2\theta )$
:::

:::exercise {fs-id1167793639806} type= 
PROBLEM:
Suppose $f(x,y)=x+y,$ where $x=r\;\text{cos}\;\theta$ and $y=r\;\text{sin}\;\theta .$ Find $\frac{\partial f}{\partial \theta}.$
:::
For the following exercises, find $\frac{df}{dt}$ using the chain rule and direct substitution.

:::exercise {fs-id1167794176177} type= 
PROBLEM:
$f(x,y)={x}^{2}+{y}^{2},$ $x=t,y={t}^{2}$
SOLUTION:
$\frac{df}{dt}=2t+4{t}^{3}$
:::

:::exercise {fs-id1167793957140} type= 
PROBLEM:
$f(x,y)=\sqrt{{x}^{2}+{y}^{2}},y={t}^{2},x=t$
:::

:::exercise {fs-id1167793618049} type= 
PROBLEM:
$f(x,y)=xy,x=1-\sqrt{t},y=1+\sqrt{t}$
SOLUTION:
$\frac{df}{dt}=−1$
:::

:::exercise {fs-id1167793479995} type= 
PROBLEM:
$f(x,y)=\frac{x}{y},x={e}^{t},y=2{e}^{t}$
:::

:::exercise {fs-id1167793419012} type= 
PROBLEM:
$f(x,y)=\text{ln}(x+y),$ $x={e}^{t},y={e}^{t}$
SOLUTION:
$\frac{df}{dt}=1$
:::

:::exercise {fs-id1167793978793} type= 
PROBLEM:
$f(x,y)={x}^{4},$ $x=t,y=t$
:::

:::exercise {fs-id1167794212884} type= 
PROBLEM:
Let $w(x,y,z)={x}^{2}+{y}^{2}+{z}^{2},$ $x=\text{cos}\;t,y=\text{sin}\;t,$ and $z={e}^{t}.$ Express $w$ as a function of $t$ and find $\frac{dw}{dt}$ directly. Then, find $\frac{dw}{dt}$ using the chain rule.
SOLUTION:
$\frac{dw}{dt}=2{e}^{2t}$ in both cases
:::

:::exercise {fs-id1167793263205} type= 
PROBLEM:
Let $z={x}^{2}y,$ where $x={t}^{2}$ and $y={t}^{3}.$ Find $\frac{dz}{dt}.$
:::

:::exercise {fs-id1167794226521} type= 
PROBLEM:
Let $u={e}^{x}\text{sin}\;y,$ where $x=-ln2t$ and $y=\pi t.$ Find $\frac{du}{dt}$ when $x=\text{ln}\;2$ and $y=\frac{\pi}{4}.$
SOLUTION:
$\frac{du}{dt}=\sqrt{2}(\pi -4)$
:::
For the following exercises, find $\frac{dy}{dx}$ using partial derivatives.

:::exercise {fs-id1167793299615} type= 
PROBLEM:
$\text{sin}(6x)+\text{tan}(8y)+5=0$
:::

:::exercise {fs-id1167793617968} type= 
PROBLEM:
${x}^{3}+{y}^{2}x-3=0$
SOLUTION:
$\frac{dy}{dx}=-\frac{3{x}^{2}+{y}^{2}}{2xy}$
:::

:::exercise {fs-id1167793589374} type= 
PROBLEM:
$\text{sin}(x+y)+\text{cos}(x-y)=4$
:::

:::exercise {fs-id1167793280708} type= 
PROBLEM:
${x}^{2}-2xy+{y}^{4}=4$
SOLUTION:
$\frac{dy}{dx}=\frac{y-x}{\text{−}x+2{y}^{3}}$
:::

:::exercise {fs-id1167793252283} type= 
PROBLEM:
$x{e}^{y}+y{e}^{x}-2{x}^{2}y=0$
:::

:::exercise {fs-id1167793498214} type= 
PROBLEM:
${x}^{2\text{/}3}+{y}^{2\text{/}3}={a}^{2\text{/}3}$
SOLUTION:
$\frac{dy}{dx}=\text{−}\sqrt[3]{\frac{y}{x}}$
:::

:::exercise {fs-id1167793424370} type= 
PROBLEM:
$x\;\text{cos}(xy)+y\;\text{cos}\;x=2$
:::

:::exercise {fs-id1167793393729} type= 
PROBLEM:
${e}^{xy}+y{e}^{y}=1$
SOLUTION:
$\frac{dy}{dx}=-\frac{y{e}^{xy}}{x{e}^{xy}+{e}^{y}(1+y)}$
:::

:::exercise {fs-id1167793925836} type= 
PROBLEM:
${x}^{2}{y}^{3}+\text{cos}\;y=0$
:::

:::exercise {fs-id1167793450523} type= 
PROBLEM:
Find $\frac{dz}{dt}$ using the chain rule where $z=3{x}^{2}{y}^{3},x={t}^{4},$ and $y={t}^{2}.$
SOLUTION:
$\frac{dz}{dt}=42{t}^{13}$
:::

:::exercise {fs-id1167793589648} type= 
PROBLEM:
Let $z=3\;\text{cos}\;x-\text{sin}(xy),x=\frac{1}{t},$ and $y=3t.$ Find $\frac{dz}{dt}.$
:::

:::exercise {fs-id1167794137106} type= 
PROBLEM:
Let $z={e}^{1-xy},x={t}^{1\text{/}3},$ and $y={t}^{3}.$ Find $\frac{dz}{dt}.$
SOLUTION:
$\frac{dz}{dt}=-\frac{10}{3}{t}^{7\text{/}3}\;\times \;{e}^{1-{t}^{10\text{/}3}}$
:::

:::exercise {fs-id1167793642024} type= 
PROBLEM:
Find $\frac{dz}{dt}$ by the chain rule where $z={\text{cosh}}^{2}(xy),x=\frac{1}{2}t,$ and $y={e}^{t}.$
:::

:::exercise {fs-id1167793607615} type= 
PROBLEM:
Let $z=\frac{x}{y},x=2\;\text{cos}\;u,$ and $y=3\;\text{sin}\;v.$ Find $\frac{\partial z}{\partial u}$ and $\frac{\partial z}{\partial v}.$
SOLUTION:
$\frac{\partial z}{\partial u}=\frac{−2\;\text{sin}\;u}{3\;\text{sin}\;v}$ and $\frac{\partial z}{\partial v}=\frac{−2\;\text{cos}\;u\;\text{cos}\;v}{3\;{\text{sin}}^{2}v}$
:::

:::exercise {fs-id1167793373659} type= 
PROBLEM:
Let $z={e}^{{x}^{2}y},$ where $x=\sqrt{uv}$ and $y=\frac{1}{v}.$ Find $\frac{\partial z}{\partial u}$ and $\frac{\partial z}{\partial v}.$
:::

:::exercise {fs-id1167794201107} type= 
PROBLEM:
If $z=xy{e}^{x\text{/}y},$ $x=r\;\text{cos}\;\theta ,$ and $y=r\;\text{sin}\;\theta ,$ find $\frac{\partial z}{\partial r}$ and $\frac{\partial z}{\partial \theta}$ when $r=2$ and $\theta =\frac{\pi}{6}.$
SOLUTION:
$\frac{\partial z}{\partial r}=\sqrt{3}{e}^{\sqrt{3}},$ $\frac{\partial z}{\partial \theta}=(2-4\sqrt{3}){e}^{\sqrt{3}}$
:::

:::exercise {fs-id1167794293262} type= 
PROBLEM:
Find $\frac{\partial w}{\partial s}$ if $w=4x+{y}^{2}+{z}^{3},x={e}^{r{s}^{2}},y=\text{ln}(\frac{r+s}{t}),$ and $z=rs{t}^{2}.$
:::

:::exercise {fs-id1167794177140} type= 
PROBLEM:
If $w=\text{sin}(xyz),x=1-3t,y={e}^{1-t},$ and $z=4t,$ find $\frac{\partial w}{\partial t}.$
SOLUTION:
$\frac{\partial w}{\partial t}=(-12t{e}^{1-t}cos((1-3t){e}^{1-t}(-4t))+4t(1-3t){e}^{1-t}cos((1-3t){e}^{1-t}(-4t))-4(1-3t){e}^{1-t}cos((1-3t){e}^{1-t}(-4t))$
:::
For the following exercises, use this information: A function $f(x,y)$ is said to be homogeneous of degree $n$ if $f(tx,ty)={t}^{n}f(x,y).$ For all {index:homogeneous functions} of degree $n,$ the following equation is true: $x\frac{\partial f}{\partial x}+y\frac{\partial f}{\partial y}=nf(x,y).$ Show that the given function is homogeneous and verify that $x\frac{\partial f}{\partial x}+y\frac{\partial f}{\partial y}=nf(x,y).$

:::exercise {fs-id1167793452785} type= 
PROBLEM:
$f(x,y)=3{x}^{2}+{y}^{2}$
:::

:::exercise {fs-id1167794213127} type= 
PROBLEM:
$f(x,y)=\sqrt{{x}^{2}+{y}^{2}}$
SOLUTION:
$f(tx,ty)=\sqrt{{t}^{2}{x}^{2}+{t}^{2}{y}^{2}}={t}^{1}f(x,y),$ $\frac{\partial f}{\partial y}=x\frac{1}{2}{({x}^{2}+{y}^{2})}^{\text{−}1\text{/}2}\;\times \;2x+y\frac{1}{2}{({x}^{2}+{y}^{2})}^{\text{−}1\text{/}2}\;\times \;2y=1f(x,y)$
:::

:::exercise {fs-id1167793636384} type= 
PROBLEM:
$f(x,y)={x}^{2}y-2{y}^{3}$
:::

:::exercise {fs-id1167793992274} type= 
PROBLEM:
The volume of a right circular cylinder is given by $V(x,y)=\pi {x}^{2}y,$ where $x$ is the radius of the cylinder and *y* is the cylinder height. Suppose $x$ and $y$ are functions of $t$ given by $x=\frac{1}{2}t$ and $y=\frac{1}{3}t$ so that $x\;\text{and}\;y$ are both increasing with time. How fast is the volume increasing when $x=2$ and $y=\frac{4}{3}?$
SOLUTION:
$V'=4\pi$
:::

:::exercise {fs-id1167793498830} type= 
PROBLEM:
The pressure $P$ of a gas is related to the volume and temperature by the formula $PV=kT,$ where temperature is expressed in kelvins. Express the pressure of the gas as a function of both $V$ and $T.$ Find $\frac{dP}{dt}$ when $k=1,$ $\frac{dV}{dt}=2$ cm<sup>3</sup>/min, $\frac{dT}{dt}=\frac{1}{2}$ K/min, $V=20$ cm<sup>3</sup>, and $T=20\text{°}\text{F}.$
:::

:::exercise {fs-id1167793544558} type= 
PROBLEM:
The radius of a right circular cone is increasing at $3$ cm/min whereas the height of the cone is decreasing at $2$ cm/min. Find the rate of change of the volume of the cone when the radius is $13$ cm and the height is $18$ cm.
SOLUTION:
$\frac{dV}{dt}=\frac{1066\pi}{3}{\text{cm}}^{3}\text{/}\text{min}$
:::

:::exercise {fs-id1167793358512} type= 
PROBLEM:
The volume of a frustum of a cone is given by the formula $V=\frac{1}{3}\pi z({x}^{2}+{y}^{2}+xy),$ where $x$ is the radius of the smaller circle, $y$ is the radius of the larger circle, and $z$ is the height of the frustum (see figure). Find the rate of change of the volume of this frustum when $x=10\;\text{in}\text{.,}\;y=12\;\text{in.,}\;\text{and}\;z=18\;\text{in}.$ if $\frac{dz}{dt}=-5,\frac{dx}{dt}=1,\frac{dy}{dt}=1$ (all in/min).

> IMAGE {img:fs-id1167794324429} src=../../media/CNX_Calc_Figure_14_05_201.jpg
> alt: A conical frustum (that is, a cone with the pointy end cut off) with height x, larger radius y, and smaller radius x.

:::

:::exercise {fs-id1167793503445} type= 
PROBLEM:
A closed box is in the shape of a rectangular solid with dimensions $x,y,\;\text{and}\;z.$ (Dimensions are in inches.) Suppose each dimension is changing at the rate of $0.5$ in./min. Find the rate of change of the total surface area of the box when $x=2\;\text{in}\text{.,}\;y=3\;\text{in.,}\;\text{and}\;z=1\;\text{in}.$
SOLUTION:
$\frac{dA}{dt}=12\;\text{in}{.}^{2}\text{/}\text{min}$
:::

:::exercise {fs-id1167793449663} type= 
PROBLEM:
The total resistance in a circuit that has three individual resistances represented by $x,y,$ and $z$ is given by the formula $R(x,y,z)=\frac{xyz}{yz+xz+xy}.$ Suppose at a given time the $x$ resistance is $100\text{Ω},$ the *y* resistance is $200\text{Ω},$ and the $z$ resistance is $300\text{Ω}.$ Also, suppose the $x$ resistance is changing at a rate of $2\text{Ω}\text{/}\text{min},$ the $y$ resistance is changing at the rate of $1\text{Ω}\text{/}\text{min},$ and the $z$ resistance has no change. Find the rate of change of the total resistance in this circuit at this time.
:::

:::exercise {fs-id1167793887463} type= 
PROBLEM:
The temperature $T$ at a point $(x,y)$ is $T(x,y)$ and is measured using the Celsius scale. A fly crawls so that its position after $t$ seconds is given by $x=\sqrt{1+t}$ and $y=2+\frac{1}{3}t,$ where $x\;\text{and}\;y$ are measured in centimeters. The temperature function satisfies ${T}_{x}(2,3)=4$ and ${T}_{y}(2,3)=3.$ How fast is the temperature increasing on the fly’s path after $3$ sec?
SOLUTION:
$2\text{°}\text{C/sec}$
:::

:::exercise {fs-id1167793435670} type= 
PROBLEM:
The $x\;\text{and}\;y$ components of a fluid moving in two dimensions are given by the following functions: $u(x,y)=2y$ and $v(x,y)=−2x;$ $x\ge 0;y\ge 0.$ The speed of the fluid at the point $(x,y)$ is $s(x,y)=\sqrt{u{(x,y)}^{2}+v{(x,y)}^{2}}.$ Find $\frac{\partial s}{\partial x}$ and $\frac{\partial s}{\partial y}$ using the chain rule.
:::

:::exercise {fs-id1167793638236} type= 
PROBLEM:
Let $u=u(x,y,z),$ where $x=x(w,t),y=y(w,t),z=z(w,t),w=w(r,s),\text{and}\;t=t(r,s).$ Use a tree diagram and the chain rule to find an expression for $\frac{\partial u}{\partial r}.$
SOLUTION:
$\begin{array}{ll}\frac{\partial u}{\partial r} & =\frac{\partial u}{\partial x}(\frac{\partial x}{\partial w}\;\frac{\partial w}{\partial r}+\frac{\partial x}{\partial t}\;\frac{\partial t}{\partial r})+\frac{\partial u}{\partial y}(\frac{\partial y}{\partial w}\;\frac{\partial w}{\partial r}+\frac{\partial y}{\partial t}\;\frac{\partial t}{\partial r}) \\ & \;+\frac{\partial u}{\partial z}(\frac{\partial z}{\partial w}\;\frac{\partial w}{\partial r}+\frac{\partial z}{\partial t}\;\frac{\partial t}{\partial r})\end{array}$
:::

## Glossary
- {def} **generalized chain rule**: the chain rule extended to functions of more than one independent variable, in which each independent variable may depend on one or more other variables
- {def} **intermediate variable**: given a composition of functions (e.g., $f(x(t),y(t))),$ the intermediate variables are the variables that are independent in the outer function but dependent on other variables as well; in the function $f(x(t),y(t)),$ the variables $x\;\text{and}\;y$ are examples of intermediate variables
- {def} **tree diagram**: illustrates and derives formulas for the generalized chain rule, in which each independent variable is accounted for

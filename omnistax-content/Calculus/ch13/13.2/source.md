# Calculus of Vector-Valued Functions

## Learning Objectives {section:learning-objectives}
- Write an expression for the derivative of a vector-valued function.
- Find the tangent vector at a point for a given position vector.
- Find the unit tangent vector at a point for a given position vector and explain its significance.
- Calculate the definite integral of a vector-valued function.

To study the calculus of vector-valued functions, we follow a similar path to the one we took in studying real-valued functions. First, we define the derivative, then we examine applications of the {index:derivative}, then we move on to defining integrals. However, we will find some interesting new ideas along the way as a result of the vector nature of these functions and the properties of space curves.

## Derivatives of Vector-Valued Functions
Now that we have seen what a vector-valued function is and how to take its limit, the next step is to learn how to differentiate a vector-valued function. The definition of the derivative of a vector-valued function is nearly identical to the definition of a real-valued function of one variable. However, because the range of a vector-valued function consists of vectors, the same is true for the range of the derivative of a vector-valued function.

:::note [definition] Definition
The {term:derivative of a vector-valued function} $\textbf{r}(t)$ is

$$ \mathbf{{r}^{'}}(t)=\lim_{\text{Δ}t\to 0}\frac{\textbf{r}(t+\text{Δ}t)-\textbf{r}(t)}{\text{Δ}t}, $$  {eq:fs-id1169739012267}

provided the limit exists. If $\mathbf{{r}^{'}}(t)$ exists, then **r** is differentiable at *t.* If $\mathbf{{r}^{'}}(t)$ exists for all *t* in an open interval $(a,b),$ then **r** is differentiable over the interval $(a,b).$ For the function to be differentiable over the closed interval $[a,b],$ the following two limits must exist as well:

$\mathbf{{r}^{'}}(a)=\lim_{\text{Δ}t\to {0}^{+}}\frac{\textbf{r}(a+\text{Δ}t)-\textbf{r}(a)}{\text{Δ}t}\;\text{and}\;\mathbf{{r}^{'}}(b)=\lim_{\text{Δ}t\to {0}^{-}}\frac{\textbf{r}(b+\text{Δ}t)-\textbf{r}(b)}{\text{Δ}t}.$  {eq:fs-id1169736958590}

:::
Many of the rules for calculating derivatives of real-valued functions can be applied to calculating the derivatives of vector-valued functions as well. Recall that the derivative of a real-valued function can be interpreted as the slope of a tangent line or the instantaneous rate of change of the function. The derivative of a vector-valued function can be understood to be an instantaneous rate of change as well; for example, when the function represents the position of an object at a given point in time, the derivative represents its velocity at that same point in time.
We now demonstrate taking the derivative of a vector-valued function.

:::example {ex:fs-id1169738904898} Finding the Derivative of a Vector-Valued Function

:::exercise {fs-id1169739004256} type= 
PROBLEM:
Use the definition to calculate the derivative of the function

$\textbf{r}(t)=(3t+4)\;\textbf{i}+({t}^{2}-4t+3)\;\textbf{j}.$  {eq:fs-id1169738850732}

SOLUTION:
Let’s use [ref:fs-id1169739012267]:

$\begin{array}{rl}\mathbf{{r}^{'}}(t) & =\lim_{\text{Δ}t\to 0}\frac{\textbf{r}(t+\text{Δ}t)-\textbf{r}(t)}{\text{Δ}t} \\ & =\lim_{\text{Δ}t\to 0}\frac{[(3(t+\text{Δ}t)+4)\;\textbf{i}+({(t+\text{Δ}t)}^{2}-4(t+\text{Δ}t)+3)\;\textbf{j}]-[(3t+4)\;\textbf{i}+({t}^{2}-4t+3)\;\textbf{j}]}{\text{Δ}t} \\ & =\lim_{\text{Δ}t\to 0}\frac{(3t+3\text{Δ}t+4)\;\textbf{i}-(3t+4)\;\textbf{i}+({t}^{2}+2t\text{Δ}t+{(\text{Δ}t)}^{2}-4t-4\text{Δ}t+3)\;\textbf{j}-({t}^{2}-4t+3)\;\textbf{j}}{\text{Δ}t} \\ & =\lim_{\text{Δ}t\to 0}\frac{(3\text{Δ}t)\;\textbf{i}+(2t\text{Δ}t+{(\text{Δ}t)}^{2}-4\text{Δ}t)\;\textbf{j}}{\text{Δ}t} \\ & =\lim_{\text{Δ}t\to 0}(3\;\textbf{i}+(2t+\text{Δ}t-4)\;\textbf{j}) \\ & =3\;\textbf{i}+(2t-4)\;\textbf{j}.\end{array}$  {eq:fs-id1169739015513}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739231027} type= 
PROBLEM:
Use the definition to calculate the derivative of the function $\textbf{r}(t)=(2{t}^{2}+3)\;\textbf{i}+(5t-6)\;\textbf{j}.$
SOLUTION:
$\mathbf{{r}^{'}}(t)=4t\;\textbf{i}+5\;\textbf{j}$
COMMENTARY: Hint
Use [ref:fs-id1169739012267].
:::
:::
Notice that in the calculations in [ref:fs-id1169738904898], we could also obtain the answer by first calculating the derivative of each component function, then putting these derivatives back into the vector-valued function. This is always true for calculating the derivative of a vector-valued function, whether it is in two or three dimensions. We state this in the following theorem. The proof of this theorem follows directly from the definitions of the limit of a vector-valued function and the derivative of a vector-valued function.

:::note [theorem] Differentiation of Vector-Valued Functions
Let *f, g,* and *h* be differentiable functions of *t.*
1. If $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j},$ then $\mathbf{{r}^{'}}(t)={f}^{'}(t)\;\textbf{i}+{g}^{'}(t)\;\textbf{j}.$
2. If $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k},$ then $\mathbf{{r}^{'}}(t)={f}^{'}(t)\;\textbf{i}+{g}^{'}(t)\;\textbf{j}+{h}^{'}(t)\;\textbf{k}.$
:::

:::example {ex:fs-id1169739020349} Calculating the Derivative of Vector-Valued Functions

:::exercise {fs-id1169739251264} type= 
PROBLEM:
Use [ref:fs-id1169739242722] to calculate the derivative of each of the following functions.
a. $\textbf{r}(t)=(6t+8)\;\textbf{i}+(4{t}^{2}+2t-3)\;\textbf{j}$
b. $\textbf{r}(t)=3\;\text{cos}\;t\;\textbf{i}+4\;\text{sin}\;t\;\textbf{j}$
c. $\textbf{r}(t)={e}^{t}\text{sin}\;t\;\textbf{i}+{e}^{t}\text{cos}\;t\;\textbf{j}-{e}^{2t}\;\textbf{k}$
SOLUTION:
We use [ref:fs-id1169739242722] and what we know about differentiating functions of one variable.
a. The first component of $\textbf{r}(t)=(6t+8)\;\textbf{i}+(4{t}^{2}+2t-3)\;\textbf{j}$ is $f(t)=6t+8.$ The second component is $g(t)=4{t}^{2}+2t-3.$ We have ${f}^{'}(t)=6$ and ${g}^{'}(t)=8t+2,$ so the theorem gives $\mathbf{{r}^{'}}(t)=6\;\textbf{i}+(8t+2)\;\textbf{j}.$
b. The first component is $f(t)=3\;\text{cos}\;t$ and the second component is $g(t)=4\;\text{sin}\;t.$ We have ${f}^{'}(t)=−3\;\text{sin}\;t$ and ${g}^{'}(t)=4\;\text{cos}\;t,$ so we obtain $\mathbf{{r}^{'}}(t)=−3\;\text{sin}\;t\;\textbf{i}+4\;\text{cos}\;t\;\textbf{j}.$
c. The first component of $\textbf{r}(t)={e}^{t}\text{sin}\;t\;\textbf{i}+{e}^{t}\text{cos}\;t\;\textbf{j}-{e}^{2t}\;\textbf{k}$ is $f(t)={e}^{t}\text{sin}\;t,$ the second component is $g(t)={e}^{t}\text{cos}\;t,$ and the third component is $h(t)=-{e}^{2t}.$ We have ${f}^{'}(t)={e}^{t}(\text{sin}\;t+\text{cos}\;t),$ ${g}^{'}(t)={e}^{t}(\text{cos}\;t-\text{sin}\;t),$ and ${h}^{'}(t)=−2{e}^{2t},$ so the theorem gives $\mathbf{{r}^{'}}(t)={e}^{t}(\text{sin}\;t+\text{cos}\;t)\;\textbf{i}+{e}^{t}(\text{cos}\;t-\text{sin}\;t)\;\textbf{j}-2{e}^{2t}\;\textbf{k}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736661364} type= 
PROBLEM:
Calculate the derivative of the function

$\textbf{r}(t)=(t\;\text{ln}\;t)\;\textbf{i}+(5{e}^{t})\;\textbf{j}+(\text{cos}\;t-\text{sin}\;t)\;\textbf{k}.$  {eq:fs-id1169736699099}

SOLUTION:
$\mathbf{{r}^{'}}(t)=(1+\text{ln}\;t)\;\textbf{i}+5{e}^{t}\;\textbf{j}-(\text{sin}\;t+\text{cos}\;t)\;\textbf{k}$
COMMENTARY: Hint
Identify the component functions and use [ref:fs-id1169739242722].
:::
:::
We can extend to vector-valued functions the properties of the derivative that we presented in the [Introduction to Derivatives](module:m53494). In particular, the {index:constant multiple rule}, the {index:sum and difference rules}, the {index:product rule}, and the {index:chain rule} all extend to vector-valued functions. However, in the case of the product rule, there are actually three extensions: (1) for a real-valued function multiplied by a vector-valued function, (2) for the dot product of two vector-valued functions, and (3) for the cross product of two vector-valued functions.

:::note [theorem] Properties of the Derivative of Vector-Valued Functions
Let **r** and **u** be differentiable vector-valued functions of *t*, let *f* be a differentiable real-valued function of *t,* and let *c* be a scalar.

$\begin{array}{llrllll}\text{i.} & & \frac{d}{dt}[c\;\textbf{r}(t)] & = & c\;\mathbf{{r}^{'}}(t) & & \text{Scalar multiple} \\ \text{ii.} & & \frac{d}{dt}[\;\textbf{r}(t)\pm \;\textbf{u}(t)] & = & \mathbf{{r}^{'}}(t)\pm \;\mathbf{{u}^{'}}(t) & & \text{Sum and difference} \\ \text{iii.} & & \frac{d}{dt}[f(t)\;\textbf{u}(t)] & = & {f}^{'}(t)\;\textbf{u}(t)+f(t)\;\mathbf{{u}^{'}}(t) & & \text{Scalar product} \\ \text{iv.} & & \frac{d}{dt}[\;\textbf{r}(t)\cdot \;\textbf{u}(t)] & = & \mathbf{{r}^{'}}(t)\cdot \;\textbf{u}(t)+\;\textbf{r}(t)\cdot \;\mathbf{{u}^{'}}(t) & & \text{Dot product} \\ \text{v.} & & \frac{d}{dt}[\;\textbf{r}(t)\;\times \;\textbf{u}(t)] & = & \mathbf{{r}^{'}}(t)\;\times \;\textbf{u}(t)+\;\textbf{r}(t)\;\times \;\mathbf{{u}^{'}}(t) & & \text{Cross product} \\ \text{vi.} & & \frac{d}{dt}[\;\textbf{r}(f(t))] & = & \mathbf{{r}^{'}}(f(t))\cdot {f}^{'}(t) & & \text{Chain rule} \\ \text{vii.} & & \text{If}\;\textbf{r}(t)\cdot \;\textbf{r}(t) & = & c,\;\text{then}\;\textbf{r}(t)\cdot \;\mathbf{{r}^{'}}(t)=0. & & \end{array}$  {eq:fs-id1169736863566}

:::

### Proof
The proofs of the first two properties follow directly from the definition of the derivative of a vector-valued function. The third property can be derived from the first two properties, along with the product rule from the [Introduction to Derivatives](module:m53494). Let $\textbf{u}(t)=g(t)\;\textbf{i}+h(t)\;\textbf{j}.$ Then

$\begin{array}{rl}\frac{d}{dt}[f(t)\;\textbf{u}(t)] & =\frac{d}{dt}[f(t)(g(t)\;\textbf{i}+h(t)\;\textbf{j})] \\ & =\frac{d}{dt}[f(t)g(t)\;\textbf{i}+f(t)h(t)\;\textbf{j}] \\ & =\frac{d}{dt}[f(t)g(t)]\;\textbf{i}+\frac{d}{dt}[f(t)h(t)]\;\textbf{j} \\ & =({f}^{'}(t)g(t)+f(t){g}^{'}(t))\;\textbf{i}+({f}^{'}(t)h(t)+f(t){h}^{'}(t))\;\textbf{j} \\ & ={f}^{'}(t)\;\textbf{u}(t)+f(t)\;\mathbf{{u}^{'}}(t).\end{array}$  {eq:fs-id1169736851263}

To prove property iv. let $\textbf{r}(t)={f}_{1}(t)\;\textbf{i}+{g}_{1}(t)\;\textbf{j}$ and $\textbf{u}(t)={f}_{2}(t)\;\textbf{i}+{g}_{2}(t)\;\textbf{j}.$ Then

$\begin{array}{rl}\frac{d}{dt}[\;\textbf{r}(t)\cdot \;\textbf{u}(t)] & =\frac{d}{dt}[{f}_{1}(t){f}_{2}(t)+{g}_{1}(t){g}_{2}(t)] \\ & ={f}_{1}{}^{'}(t){f}_{2}(t)+{f}_{1}(t){f}_{2}{}^{'}(t)+{g}_{1}{}^{'}(t){g}_{2}(t)+{g}_{1}(t){g}_{2}{}^{'}(t) \\ & ={f}_{1}{}^{'}(t){f}_{2}(t)+{g}_{1}{}^{'}(t){g}_{2}(t)+{f}_{1}(t){f}_{2}{}^{'}(t)+{g}_{1}(t){g}_{2}{}^{'}(t) \\ & =({f}_{1}{}^{'}\;\textbf{i}+{g}_{1}{}^{'}\;\textbf{j})\cdot ({f}_{2}\;\textbf{i}+{g}_{2}\;\textbf{j})+({f}_{1}\;\textbf{i}+{g}_{1}\;\textbf{j})\cdot ({f}_{2}{}^{'}\;\textbf{i}+{g}_{2}{}^{'}\;\textbf{j}) \\ & =\mathbf{{r}^{'}}(t)\cdot \;\textbf{u}(t)+\;\textbf{r}(t)\cdot \;\mathbf{{u}^{'}}(t).\end{array}$  {eq:fs-id1169738929761}

The proof of property v. is similar to that of property iv. Property vi. can be proved using the chain rule. Last, property vii. follows from property iv:

$\begin{array}{rll}\frac{d}{dt}[\;\textbf{r}(t)\cdot \;\textbf{r}(t)] & = & \frac{d}{dt}[c] \\ \mathbf{{r}^{'}}(t)\cdot \;\textbf{r}(t)+\;\textbf{r}(t)\cdot \;\mathbf{{r}^{'}}(t) & = & 0 \\ 2\;\textbf{r}(t)\cdot \;\mathbf{{r}^{'}}(t) & = & 0 \\ \textbf{r}(t)\cdot \;\mathbf{{r}^{'}}(t) & = & 0.\end{array}$  {eq:fs-id1169736941554}

□
Now for some examples using these properties.

:::example {ex:fs-id1169736876498} Using the Properties of Derivatives of Vector-Valued Functions

:::exercise {fs-id1169736876500} type= 
PROBLEM:
Given the vector-valued functions

$\textbf{r}(t)=(6t+8)\;\textbf{i}+(4{t}^{2}+2t-3)\;\textbf{j}+5t\;\textbf{k}$  {eq:fs-id1169739252882}

and

$\textbf{u}(t)=({t}^{2}-3)\;\textbf{i}+(2t+4)\;\textbf{j}+({t}^{3}-3t)\;\textbf{k},$  {eq:fs-id1169736883275}

calculate each of the following derivatives using the properties of the derivative of vector-valued functions.
a. $\frac{d}{dt}[\;\textbf{r}(t)\cdot \;\textbf{u}(t)]$
b. $\frac{d}{dt}[\;\textbf{u}(t)\;\times \;\mathbf{{u}^{'}}(t)]$
SOLUTION:
a. We have $\mathbf{{r}^{'}}(t)=6\;\textbf{i}+(8t+2)\;\textbf{j}+5\;\textbf{k}$ and $\mathbf{{u}^{'}}(t)=2t\;\textbf{i}+2\;\textbf{j}+(3{t}^{2}-3)\;\textbf{k}.$ Therefore, according to property iv.:

$\begin{array}{rl}\frac{d}{dt}[\;\textbf{r}(t)\cdot \;\textbf{u}(t)] & =\mathbf{{r}^{'}}(t)\cdot \;\textbf{u}(t)+\;\textbf{r}(t)\cdot \;\mathbf{{u}^{'}}(t) \\ & =(6\;\textbf{i}+(8t+2)\;\textbf{j}+5\;\textbf{k})\cdot (({t}^{2}-3)\;\textbf{i}+(2t+4)\;\textbf{j}+({t}^{3}-3t)\;\textbf{k}) \\ & \;+((6t+8)\;\textbf{i}+(4{t}^{2}+2t-3)\;\textbf{j}+5t\;\textbf{k})\cdot (2t\;\textbf{i}+2\;\textbf{j}+(3{t}^{2}-3)\;\textbf{k}) \\ & =6({t}^{2}-3)+(8t+2)(2t+4)+5({t}^{3}-3t) \\ & \;+2t(6t+8)+2(4{t}^{2}+2t-3)+5t(3{t}^{2}-3) \\ & =20{t}^{3}+42{t}^{2}+26t-16.\end{array}$  {eq:fs-id1169739293532}

b. First, we need to adapt property v. for this problem:

$\frac{d}{dt}[\;\textbf{u}(t)\;\times \;\mathbf{{u}^{'}}(t)]=\mathbf{{u}^{'}}(t)\;\times \;\mathbf{{u}^{'}}(t)+\;\textbf{u}(t)\;\times \;\mathbf{\textbf{u}''}(t).$  {eq:fs-id1169738935641}

Recall that the cross product of any vector with itself is zero. Furthermore, $\mathbf{\textbf{u}''}(t)$ represents the second derivative of $\textbf{u}(t)\text{:}$

$\mathbf{\textbf{u}''}(t)=\frac{d}{dt}[\;\mathbf{{u}^{'}}(t)]=\frac{d}{dt}[2t\;\textbf{i}+2\;\textbf{j}+(3{t}^{2}-3)\;\textbf{k}]=2\;\textbf{i}+6t\;\textbf{k}.$  {eq:fs-id1169739182839}

Therefore,

$\begin{array}{rl}\frac{d}{dt}[\;\textbf{u}(t)\;\times \;\mathbf{{u}^{'}}(t)] & =\mathbf{0}+(({t}^{2}-3)\;\textbf{i}+(2t+4)\;\textbf{j}+({t}^{3}-3t)\;\textbf{k})\;\times \;(2\;\textbf{i}+6t\;\textbf{k}) \\ & =|\begin{array}{lll}\textbf{i} & \textbf{j} & \textbf{k} \\ {t}^{2}-3 & 2t+4 & {t}^{3}-3t \\ 2 & 0 & 6t\end{array}| \\ & =6t(2t+4)\;\textbf{i}-(6t({t}^{2}-3)-2({t}^{3}-3t))\;\textbf{j}-2(2t+4)\;\textbf{k} \\ & =(12{t}^{2}+24t)\;\textbf{i}+(12t-4{t}^{3})\;\textbf{j}-(4t+8)\;\textbf{k}.\end{array}$  {eq:fs-id1169739281913}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736878051} type= 
PROBLEM:
Given the vector-valued functions $\textbf{r}(t)=\text{cos}\;t\;\textbf{i}+\text{sin}\;t\;\textbf{j}-{e}^{2t}\;\textbf{k}$ and $\textbf{u}(t)=t\;\textbf{i}+\text{sin}\;t\;\textbf{j}+\text{cos}\;t\;\textbf{k},$ calculate $\frac{d}{dt}[\;\textbf{r}(t)\cdot \;\mathbf{{r}^{'}}(t)]$ and $\frac{d}{dt}[\;\textbf{u}(t)\;\times \;\textbf{r}(t)].$
SOLUTION:
$\frac{d}{dt}[\;\textbf{r}(t)\cdot \;\mathbf{{r}^{'}}(t)]=8{e}^{4t}$
$\begin{array}{l}\frac{d}{dt}[\;\textbf{u}(t)\;\times \;\textbf{r}(t)] \\ =-({e}^{2t}(\text{cos}\;t+2\;\text{sin}\;t)+\text{cos}\;2t)\;\textbf{i}+({e}^{2t}(2t+1)-\text{sin}\;2t)\;\textbf{j}+(t\;\text{cos}\;t+\text{sin}\;t-\text{cos}\;2t)\;\textbf{k}\end{array}$
COMMENTARY: Hint
Follow the same steps as in [ref:fs-id1169736876498].
:::
:::

## Tangent Vectors and Unit Tangent Vectors
Recall from the [Introduction to Derivatives](module:m53494) that the derivative at a point can be interpreted as the slope of the tangent line to the graph at that point. In the case of a vector-valued function, the derivative provides a tangent vector to the curve represented by the function. Consider the vector-valued function $\textbf{r}(t)=\text{cos}\;t\;\textbf{i}+\text{sin}\;t\;\textbf{j}.$ The derivative of this function is $\mathbf{{r}^{'}}(t)=-\text{sin}\;t\;\textbf{i}+\text{cos}\;t\;\textbf{j}.$ If we substitute the value $t=\pi \text{/}6$ into both functions we get

$\textbf{r}(\frac{\pi}{6})=\frac{\sqrt{3}}{2}\;\textbf{i}+\frac{1}{2}\;\textbf{j}\;\text{and}\;\mathbf{{r}^{'}}(\frac{\pi}{6})=-\frac{1}{2}\;\textbf{i}+\frac{\sqrt{3}}{2}\;\textbf{j}.$  {eq:fs-id1169739359361}

The graph of this function appears in [ref:CNX_Calc_Figure_13_02_001], along with the vectors $\textbf{r}(\frac{\pi}{6})$ and $\mathbf{{r}^{'}}(\frac{\pi}{6}).$

> FIGURE {fig:CNX_Calc_Figure_13_02_001} src=../../media/CNX_Calc_Figure_13_02_001.jpg
> alt: This figure is the graph of a circle represented by the vector-valued function r(t) = cost i + sint j. It is a circle centered at the origin with radius of 1, and counter-clockwise orientation. It has a vector from the origin pointing to the curve and labeled r(pi/6). At the same point on the circle there is a tangent vector labeled “r’(pi/6)”.
> caption: The tangent line at a point is calculated from the derivative of the vector-valued function $\textbf{r}(t).$

Notice that the vector $\mathbf{{r}^{'}}(\frac{\pi}{6})$ is tangent to the circle at the point corresponding to $t=\pi \text{/}6.$ This is an example of a {term:tangent vector} to the plane curve defined by $\textbf{r}(t)=\text{cos}\;t\;\textbf{i}+\text{sin}\;t\;\textbf{j}.$

:::note [definition] Definition
Let C be a curve defined by a vector-valued function **r,** and assume that $\mathbf{{r}^{'}}(t)$ exists when $t={t}_{0}.$ A tangent vector **v** at $t={t}_{0}$ is any vector such that, when the tail of the vector is placed at point $\textbf{r}({t}_{0})$ on the graph, vector **v** is tangent to curve *C.* Vector $\mathbf{{r}^{'}}({t}_{0})$ is an example of a tangent vector at point $t={t}_{0}.$ Furthermore, assume that $\mathbf{{r}^{'}}(t)≠\;\mathbf{0}.$ The {term:principal unit tangent vector} at *t* is defined to be

$$ \textbf{T}(t)=\frac{\mathbf{{r}^{'}}(t)}{\| \;\mathbf{{r}^{'}}(t)\|}, $$  {eq:fs-id1169736889687}

provided $\| \;\mathbf{{r}^{'}}(t)\| ≠0.$
:::
The unit tangent vector is exactly what it sounds like: a unit vector that is tangent to the curve. To calculate a unit tangent vector, first find the derivative $\mathbf{{r}^{'}}(t).$ Second, calculate the magnitude of the derivative. The third step is to divide the derivative by its magnitude.

:::example {ex:fs-id1169738935172} Finding a Unit Tangent Vector

:::exercise {fs-id1169738935174} type= 
PROBLEM:
Find the unit tangent vector for each of the following vector-valued functions:
a. $\textbf{r}(t)=\text{cos}\;t\;\textbf{i}+\text{sin}\;t\;\textbf{j}$
b. $\textbf{u}(t)=(3{t}^{2}+2t)\;\textbf{i}+(2-4{t}^{3})\;\textbf{j}+(6t+5)\;\textbf{k}$
SOLUTION:
a. 

$\begin{array}{lrll}\text{First step:} & \mathbf{{r}^{'}}(t) & = & −sin\;t\;\textbf{i}+\text{cos}\;t\;\textbf{j} \\ \text{Second step:} & \| \;\mathbf{{r}^{'}}(t)\| & = & \sqrt{{(\text{−}\text{sin}\;t)}^{2}+{(\text{cos}\;t)}^{2}}=1 \\ \text{Third step:} & \textbf{T}(t) & = & \frac{\mathbf{{r}^{'}}(t)}{\| \;\mathbf{{r}^{'}}(t)\|}=\frac{\text{−sin}\;t\;\textbf{i}+\text{cos}\;t\;\textbf{j}}{1}=\text{−sin}\;t\;\textbf{i}+\text{cos}\;t\;\textbf{j}\end{array}$
b. 

$\begin{array}{lrll}\text{First step:} & \mathbf{{u}^{'}}(t) & = & (6t+2)\;\textbf{i}-12{t}^{2}\;\textbf{j}+6\;\textbf{k} \\ \text{Second step:} & \| \;\mathbf{{u}^{'}}(t)\| & = & \sqrt{{(6t+2)}^{2}+{(−12{t}^{2})}^{2}+{6}^{2}} \\ & & = & \sqrt{144{t}^{4}+36{t}^{2}+24t+40} \\ & & = & 2\sqrt{36{t}^{4}+9{t}^{2}+6t+10} \\ \text{Third step:} & \textbf{T}(t) & = & \frac{\mathbf{{u}^{'}}(t)}{\| \;\mathbf{{u}^{'}}(t)\|}=\frac{(6t+2)\;\textbf{i}-12{t}^{2}\;\textbf{j}+6\;\textbf{k}}{2\sqrt{36{t}^{4}+9{t}^{2}+6t+10}} \\ & & = & \frac{3t+1}{\sqrt{36{t}^{4}+9{t}^{2}+6t+10}}\;\textbf{i}-\frac{6{t}^{2}}{\sqrt{36{t}^{4}+9{t}^{2}+6t+10}}\;\textbf{j}+\frac{3}{\sqrt{36{t}^{4}+9{t}^{2}+6t+10}}\;\textbf{k}\end{array}$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169737014560} type= 
PROBLEM:
Find the unit tangent vector for the vector-valued function

$\textbf{r}(t)=({t}^{2}-3)\;\textbf{i}+(2t+1)\;\textbf{j}+(t-2)\;\textbf{k}.$  {eq:fs-id1169737014567}

SOLUTION:
$\textbf{T}(t)=\frac{2t}{\sqrt{4{t}^{2}+5}}\;\textbf{i}+\frac{2}{\sqrt{4{t}^{2}+5}}\;\textbf{j}+\frac{1}{\sqrt{4{t}^{2}+5}}\;\textbf{k}$
COMMENTARY: Hint
Follow the same steps as in [ref:fs-id1169738935172].
:::
:::

## Integrals of Vector-Valued Functions
We introduced antiderivatives of real-valued functions in [Antiderivatives](module:m53621) and definite integrals of real-valued functions in [The Definite Integral](module:m53631). Each of these concepts can be extended to vector-valued functions. Also, just as we can calculate the derivative of a vector-valued function by differentiating the component functions separately, we can calculate the antiderivative in the same manner. Furthermore, the Fundamental Theorem of Calculus applies to vector-valued functions as well.
The antiderivative of a vector-valued function appears in applications. For example, if a vector-valued function represents the velocity of an object at time *t*, then its antiderivative represents position. Or, if the function represents the acceleration of the object at a given time, then the antiderivative represents its velocity.

:::note [definition] Definition
Let *f, g,* and *h* be integrable real-valued functions over the closed interval $[a,b].$
1. The {term:indefinite integral of a vector-valued function} $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}$ is

$$ {\displaystyle \int [f(t)\;\textbf{i}+g(t)\;\textbf{j}]dt}=[\;{\displaystyle \int f(t)dt}]\;\textbf{i}+[\;{\displaystyle \int g(t)dt}]\;\textbf{j}. $$  {eq:fs-id1169736591974}

The {term:definite integral of a vector-valued function} is

$$ {\displaystyle \int_{a}^{b}[f(t)\;\textbf{i}+g(t)\;\textbf{j}]dt}=[\;{\displaystyle \int_{a}^{b}f(t)dt}]\;\textbf{i}+[\;{\displaystyle \int_{a}^{b}g(t)dt}]\;\textbf{j}. $$  {eq:fs-id1169739062367}

2. The indefinite integral of a vector-valued function $\textbf{r}(t)=f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k}$ is

$$ {\displaystyle \int [f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k}]dt}=[\;{\displaystyle \int f(t)dt}]\;\textbf{i}+[\;{\displaystyle \int g(t)dt}]\;\textbf{j}+[\;{\displaystyle \int h(t)dt}]\;\textbf{k}. $$  {eq:fs-id1169739044371}

The definite integral of the vector-valued function is

$$ {\displaystyle \int_{a}^{b}[f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k}]dt}=[\;{\displaystyle \int_{a}^{b}f(t)dt}]\;\textbf{i}+[\;{\displaystyle \int_{a}^{b}g(t)dt}]\;\textbf{j}+[\;{\displaystyle \int_{a}^{b}h(t)dt}]\;\textbf{k}. $$  {eq:fs-id1169739182212}

:::
Since the indefinite integral of a vector-valued function involves indefinite integrals of the component functions, each of these component integrals contains an integration constant. They can all be different. For example, in the two-dimensional case, we can have

${\displaystyle \int f(t)dt}=F(t)+{C}_{1}\;\text{and}\;{\displaystyle \int g(t)dt}=G(t)+{C}_{2},$  {eq:fs-id1169736882460}

where *F* and *G* are antiderivatives of *f* and *g,* respectively. Then

$\begin{array}{rl}{\displaystyle \int [f(t)\;\textbf{i}+g(t)\;\textbf{j}]dt} & =[\;{\displaystyle \int f(t)dt}]\;\textbf{i}+[\;{\displaystyle \int g(t)dt}]\;\textbf{j} \\ & =(F(t)+{C}_{1})\;\textbf{i}+(G(t)+{C}_{2})\;\textbf{j} \\ & =F(t)\;\textbf{i}+G(t)\;\textbf{j}+{C}_{1}\;\textbf{i}+{C}_{2}\;\textbf{j} \\ & =F(t)\;\textbf{i}+G(t)\;\textbf{j}+\;\textbf{C},\end{array}$  {eq:fs-id1169738973423}

where $\textbf{C}={C}_{1}\;\textbf{i}+{C}_{2}\;\textbf{j}.$ Therefore, the integration constant becomes a constant vector.

:::example {ex:fs-id1169738935680} Integrating Vector-Valued Functions

:::exercise {fs-id1169738935682} type= 
PROBLEM:
Calculate each of the following integrals:
a. ${\displaystyle \int [(3{t}^{2}+2t)\;\textbf{i}+(3t-6)\;\textbf{j}+(6{t}^{3}+5{t}^{2}-4)\;\textbf{k}]}\;dt$
b. ${\displaystyle \int [\langle t,{t}^{2},{t}^{3}\rangle \;\times \;\langle {t}^{3},{t}^{2},t\rangle ]}\;dt$
c. ${\displaystyle \int_{0}^{\pi \text{/}3}[\text{sin}\;2t\;\textbf{i}+\text{tan}\;t\;\textbf{j}+{e}^{−2t}\;\textbf{k}]\;dt}$
SOLUTION:
a. We use the first part of the definition of the integral of a space curve:

$\begin{array}{l}{\displaystyle \int [(3{t}^{2}+2t)\;\textbf{i}+(3t-6)\;\textbf{j}+(6{t}^{3}+5{t}^{2}-4)\;\textbf{k}]}dt \\ \\ \hspace{3em}=[\;{\displaystyle \int 3{t}^{2}+2t\;dt}]\;\textbf{i}+[\;{\displaystyle \int 3t-6}dt]\;\textbf{j}+[\;{\displaystyle \int 6{t}^{3}+5{t}^{2}-4}dt]\;\textbf{k} \\ \hspace{3em}=({t}^{3}+{t}^{2})\;\textbf{i}+(\frac{3}{2}{t}^{2}-6t)\;\textbf{j}+(\frac{3}{2}{t}^{4}+\frac{5}{3}{t}^{3}-4t)\;\textbf{k}+\;\textbf{C}.\end{array}$  {eq:fs-id1169736906380}

b. First calculate $\langle t,{t}^{2},{t}^{3}\rangle \;\times \;\langle {t}^{3},{t}^{2},t\rangle \text{:}$

$\begin{array}{rl}\langle t,{t}^{2},{t}^{3}\rangle \;\times \;\langle {t}^{3},{t}^{2},t\rangle & =|\begin{array}{lll}\textbf{i} & \textbf{j} & \textbf{k} \\ t & {t}^{2} & {t}^{3} \\ {t}^{3} & {t}^{2} & t\end{array}| \\ & =({t}^{2}(t)-{t}^{3}({t}^{2}))\;\textbf{i}-({t}^{2}-{t}^{3}({t}^{3}))\;\textbf{j}+(t({t}^{2})-{t}^{2}({t}^{3}))\;\textbf{k} \\ & =({t}^{3}-{t}^{5})\;\textbf{i}+({t}^{6}-{t}^{2})\;\textbf{j}+({t}^{3}-{t}^{5})\;\textbf{k}.\end{array}$  {eq:fs-id1169739352194}

Next, substitute this back into the integral and integrate:

$\begin{array}{rl}{\displaystyle \int [\langle t,{t}^{2},{t}^{3}\rangle \;\times \;\langle {t}^{3},{t}^{2},t\rangle ]}dt & ={\displaystyle \int ({t}^{3}-{t}^{5})\;\textbf{i}+({t}^{6}-{t}^{2})\;\textbf{j}+({t}^{3}-{t}^{5})\;\textbf{k}\;dt} \\ & =(\frac{{t}^{4}}{4}-\frac{{t}^{6}}{6})\;\textbf{i}+(\frac{{t}^{7}}{7}-\frac{{t}^{3}}{3})\;\textbf{j}+(\frac{{t}^{4}}{4}-\frac{{t}^{6}}{6})\;\textbf{k}+\;\textbf{C}.\end{array}$  {eq:fs-id1169737034472}

c. Use the second part of the definition of the integral of a space curve:

$\begin{array}{l}{\displaystyle \int_{0}^{\pi \text{/}3}[\text{sin}\;2t\;\textbf{i}+\text{tan}\;t\;\textbf{j}+{e}^{−2t}\;\textbf{k}]dt} \\ \\ =[\;{\displaystyle \int_{0}^{\pi \text{/}3}\text{sin}\;2t}dt]\;\textbf{i}+[\;{\displaystyle \int_{0}^{\pi \text{/}3}\text{tan}\;t}dt]\;\textbf{j}+[\;{\displaystyle \int_{0}^{\pi \text{/}3}{e}^{−2t}}dt]\;\textbf{k} \\ ={(-\frac{1}{2}\text{cos}\;2t)|}_{0}^{\pi \text{/}3}\;\textbf{i}-{(\text{ln}(\text{cos}\;t))|}_{0}^{\pi \text{/}3}\;\textbf{j}-{(\frac{1}{2}{e}^{−2t})|}_{0}^{\pi \text{/}3}\;\textbf{k} \\ =(-\frac{1}{2}\text{cos}\;\frac{2\pi}{3}+\frac{1}{2}\text{cos}\;0)\;\textbf{i}-(\text{ln}(\text{cos}\;\frac{\pi}{3})-\text{ln}(\text{cos}\;0))\;\textbf{j}-(\frac{1}{2}{e}^{−2\pi \text{/}3}-\frac{1}{2}{e}^{−2(0)})\;\textbf{k} \\ =(\frac{1}{4}+\frac{1}{2})\;\textbf{i}-(\text{−}\text{ln}\;2)\;\textbf{j}-(\frac{1}{2}{e}^{−2\pi \text{/}3}-\frac{1}{2})\;\textbf{k} \\ =\frac{3}{4}\;\textbf{i}+(\text{ln}\;2)\;\textbf{j}+(\frac{1}{2}-\frac{1}{2}{e}^{−2\pi \text{/}3})\;\textbf{k}.\end{array}$  {eq:fs-id1169736964957}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169736972921} type= 
PROBLEM:
Calculate the following integral:

${\displaystyle \int_{1}^{3}[(2t+4)\;\textbf{i}+(3{t}^{2}-4t)\;\textbf{j}]dt}.$  {eq:fs-id1169739249917}

SOLUTION:
${\displaystyle \int_{1}^{3}[(2t+4)\;\textbf{i}+(3{t}^{2}-4t)\;\textbf{j}]dt}=16\;\textbf{i}+10\;\textbf{j}$
COMMENTARY: Hint
Use the definition of the definite integral of a plane curve.
:::
:::

## Key Concepts {section:key-concepts}
- To calculate the derivative of a vector-valued function, calculate the derivatives of the component functions, then put them back into a new vector-valued function.
- Many of the properties of differentiation from the [Introduction to Derivatives](module:m53494) also apply to vector-valued functions.
- The derivative of a vector-valued function $\textbf{r}(t)$ is also a tangent vector to the curve. The unit tangent vector $\textbf{T}(t)$ is calculated by dividing the derivative of a vector-valued function by its magnitude.
- The antiderivative of a vector-valued function is found by finding the antiderivatives of the component functions, then putting them back together in a vector-valued function.
- The definite integral of a vector-valued function is found by finding the definite integrals of the component functions, then putting them back together in a vector-valued function.

## Key Equations {section:key-equations}

> TABLE {tab:eip-541} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Derivative of a vector-valued function** | $\mathbf{{r}^{'}}(t)=\lim_{\text{Δ}t\to 0}\frac{\textbf{r}(t+\text{Δ}t)-\textbf{r}(t)}{\text{Δ}t}$ |
| **Principal unit tangent vector** | $\textbf{T}(t)=\frac{\mathbf{{r}^{'}}(t)}{\| \;\mathbf{{r}^{'}}(t)\|}$ |
| **Indefinite integral of a vector-valued function** | ${\displaystyle \int [f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k}]dt}=[\;{\displaystyle \int f(t)dt}]\;\textbf{i}+[\;{\displaystyle \int g(t)dt}]\;\textbf{j}+[\;{\displaystyle \int h(t)dt}]\;\textbf{k}$ |
| **Definite integral of a vector-valued function** | ${\displaystyle \int_{a}^{b}[f(t)\;\textbf{i}+g(t)\;\textbf{j}+h(t)\;\textbf{k}]dt}=[\;{\displaystyle \int_{a}^{b}f(t)dt}]\;\textbf{i}+[\;{\displaystyle \int_{a}^{b}g(t)dt}]\;\textbf{j}+[\;{\displaystyle \int_{a}^{b}h(t)dt}]\;\textbf{k}$ |

##  {section:section-exercises}
Compute the derivatives of the vector-valued functions.

:::exercise {fs-id1169736791095} type= 
PROBLEM:
$\textbf{r}(t)={t}^{3}\;\textbf{i}+3{t}^{2}\;\textbf{j}+\frac{{t}^{3}}{6}\;\textbf{k}$
SOLUTION:
$\langle 3{t}^{2},6t,\frac{1}{2}{t}^{2}\rangle$
:::

:::exercise {fs-id1169736814161} type= 
PROBLEM:
$\textbf{r}(t)=\text{sin}(t)\;\textbf{i}+\text{cos}(t)\;\textbf{j}+{e}^{t}\;\textbf{k}$
:::

:::exercise {fs-id1169739066024} type= 
PROBLEM:
$\textbf{r}(t)={e}^{\text{−}t}\;\textbf{i}+\text{sin}(3t)\;\textbf{j}+10\sqrt{t}\;\textbf{k}.$ A sketch of the graph is shown here. Notice the varying periodic nature of the graph.

> IMAGE {img:fs-id1169736960057} src=../../media/CNX_Calc_Figure_13_02_202.jpg
> alt: This figure is a 3 dimensional graph. It is a curve inside of a box. The curve starts at the bottom of the box and spirals around the middle, with upward orientation.

SOLUTION:
$\langle \text{−}{e}^{\text{−}t},3\;\text{cos}(3t),\frac{5}{\sqrt{t}}\rangle$
:::

:::exercise {fs-id1169736883635} type= 
PROBLEM:
$\textbf{r}(t)={e}^{t}\;\textbf{i}+2{e}^{t}\;\textbf{j}+\;\textbf{k}$
:::

:::exercise {fs-id1169736696589} type= 
PROBLEM:
$\textbf{r}(t)=\textbf{i}+\;\textbf{j}+\;\textbf{k}$
SOLUTION:
$\langle 0,0,0\rangle$
:::

:::exercise {fs-id1169736772182} type= 
PROBLEM:
$\textbf{r}(t)=t{e}^{t}\;\textbf{i}+t\;\text{ln}(t)\;\textbf{j}+\text{sin}(3t)\;\textbf{k}$
:::

:::exercise {fs-id1169736725438} type= 
PROBLEM:
$\textbf{r}(t)=\frac{1}{t+1}\;\textbf{i}+\text{arctan}(t)\;\textbf{j}+\text{ln}\;{t}^{3}\;\textbf{k}$
SOLUTION:
$\langle \frac{−1}{{(t+1)}^{2}},\frac{1}{1+{t}^{2}},\frac{3}{t}\rangle$
:::

:::exercise {fs-id1169736644458} type= 
PROBLEM:
$\textbf{r}(t)=\text{tan}(2t)\;\textbf{i}+\text{sec}(2t)\;\textbf{j}+{\text{sin}}^{2}(t)\;\textbf{k}$
:::

:::exercise {fs-id1169737001541} type= 
PROBLEM:
$\textbf{r}(t)=3\;\textbf{i}+4\;\text{sin}(3t)\;\textbf{j}+t\;\text{cos}(t)\;\textbf{k}$
SOLUTION:
$\langle 0,12\;\text{cos}(3t),\text{cos}\;t-t\;\text{sin}\;t\rangle$
:::

:::exercise {fs-id1169736767888} type= 
PROBLEM:
$\textbf{r}(t)={t}^{2}\;\textbf{i}+t{e}^{−2t}\;\textbf{j}-5{e}^{−4t}\;\textbf{k}$
:::
For the following problems, find a tangent vector at the indicated value of *t*.

:::exercise {fs-id1169736699009} type= 
PROBLEM:
$\textbf{r}(t)=t\;\textbf{i}+\text{sin}(2t)\;\textbf{j}+\text{cos}(3t)\;\textbf{k};t=\frac{\pi}{3}$
SOLUTION:
$\langle 1,−1,0\rangle$
:::

:::exercise {fs-id1169736918233} type= 
PROBLEM:
$\textbf{r}(t)=3{t}^{3}\;\textbf{i}+2{t}^{2}\;\textbf{j}+\frac{1}{t}\;\textbf{k};t=1$
:::

:::exercise {fs-id1169736873381} type= 
PROBLEM:
$\textbf{r}(t)=3{e}^{t}\;\textbf{i}+2{e}^{−3t}\;\textbf{j}+4{e}^{2t}\;\textbf{k};$ $t=\text{ln}(2)$
SOLUTION:
$\langle 6,-\frac{3}{4},32\rangle$
:::

:::exercise {fs-id1169736830195} type= 
PROBLEM:
$\textbf{r}(t)=\text{cos}(2t)\;\textbf{i}+2\;\text{sin}\;t\;\textbf{j}+{t}^{2}\;\textbf{k};t=\frac{\pi}{2}$
:::
Find the unit tangent vector for the following parameterized curves.

:::exercise {fs-id1169736592024} type= 
PROBLEM:
$\textbf{r}(t)=6\;\textbf{i}+\text{cos}(3t)\;\textbf{j}+3\;\text{sin}(4t)\;\textbf{k},$ $0\le t<2\pi$ . Two views of this curve are presented here:

> IMAGE {img:fs-id1169736635107} src=../../media/CNX_Calc_Figure_13_02_203.jpg
> alt: This figure has two graphs. The first graph is inside a 3 dimensional box. It has a lattice-look to the graph in the middle of the box, crossing over itself. The second graph is the same as the first, with a different position of the box for a different perspective of the lattice-looking curve.

SOLUTION:
$\frac{1}{\sqrt{9\;{\text{sin}}^{2}(3t)+144\;{\text{cos}}^{2}(4t)}}\langle 0,−3\;\text{sin}(3t),12\;\text{cos}(4t)\rangle$
:::

:::exercise {fs-id1169736881876} type= 
PROBLEM:
$\textbf{r}(t)=\text{cos}\;t\;\textbf{i}+\text{sin}\;t\;\textbf{j}+\text{sin}\;t\;\textbf{k},$ $0\le t<2\pi .$
:::

:::exercise {fs-id1169737019457} type= 
PROBLEM:
$\textbf{r}(t)=3\;\text{cos}(4t)\;\textbf{i}+3\;\text{sin}(4t)\;\textbf{j}+5t\;\textbf{k},1\le t\le 2$
SOLUTION:
$\textbf{T}(t)=\frac{−12}{13}\text{sin}(4t)\;\textbf{i}+\frac{12}{13}\text{cos}(4t)\;\textbf{j}+\frac{5}{13}\;\textbf{k}$
:::

:::exercise {fs-id1169739286352} type= 
PROBLEM:
$\textbf{r}(t)=t\;\textbf{i}+3t\;\textbf{j}+{t}^{2}\;\textbf{k}$
:::
Let $\textbf{r}(t)=t\;\textbf{i}+{t}^{2}\;\textbf{j}-{t}^{4}\;\textbf{k}$ and $\textbf{s}(t)=\text{sin}(t)\;\textbf{i}+{e}^{t}\;\textbf{j}+\text{cos}(t)\;\textbf{k}.$ Here is the graph of the function:

> IMAGE {img:fs-id1169739369093} src=../../media/CNX_Calc_Figure_13_02_204.jpg
> alt: This figure is a 3 dimensional graph. It is inside of a box. The box represents an octant. The curve in the graph starts at the lower left corner of the box and bends upward and out towards the other end of the box.

Find the following.

:::exercise {fs-id1169739369109} type= 
PROBLEM:
$\frac{d}{dt}[\textbf{r}({t}^{2})]$
SOLUTION:
$\langle 2t,4{t}^{3},−8{t}^{7}\rangle$
:::

:::exercise {fs-id1169736647050} type= 
PROBLEM:
$\frac{d}{dt}[{t}^{2}\cdot \textbf{s}(t)]$
:::

:::exercise {fs-id1169736823665} type= 
PROBLEM:
$\frac{d}{dt}[\textbf{r}(t)\cdot \textbf{s}(t)]$
SOLUTION:
$\text{sin}(t)+2t{e}^{t}-4{t}^{3}\text{cos}(t)+t\;\text{cos}(t)+{t}^{2}{e}^{t}+{t}^{4}\text{sin}(t)$
:::

:::exercise {fs-id1169739277751} type= 
PROBLEM:
Compute the first, second, and third derivatives of $\textbf{r}(t)=3t\;\textbf{i}+6\;\text{ln}(t)\;\textbf{j}+5{e}^{−3t}\;\textbf{k}.$
:::

:::exercise {fs-id1169736654118} type= 
PROBLEM:
Find $\textbf{r}'(t)\cdot \;\textbf{r}'' (t)\;\text{for}\;\textbf{r}(t)=−3{t}^{5}\;\textbf{i}+5t\;\textbf{j}+2{t}^{2}\;\textbf{k}.$
SOLUTION:
$900{t}^{7}+16t$
:::

:::exercise {fs-id1169736609815} type= 
PROBLEM:
The acceleration function, initial velocity, and initial position of a particle are
$\textbf{a}(t)=−5\;\text{cos}\;t\;\textbf{i}-5\;\text{sin}\;t\;\textbf{j},\;\textbf{v}(0)=9\;\textbf{i}+2\;\textbf{j},\;\text{and}\;\textbf{r}(0)=5\;\textbf{i}.$
Find $\textbf{v}(t)\;\text{and}\;\textbf{r}(t).$
:::

:::exercise {fs-id1169736983308} type= 
PROBLEM:
The position vector of a particle is $\textbf{r}(t)=5\;\text{sec}(2t)\;\textbf{i}-4\;\text{tan}(t)\;\textbf{j}+7{t}^{2}\;\textbf{k}.$
a. Graph the position function and display a view of the graph that illustrates the asymptotic behavior of the function.
b. Find the velocity as *t* approaches but is not equal to $\pi \text{/}4$ (if it exists).
SOLUTION:
a. 

> IMAGE {img:fs-id1169739302042} src=../../media/CNX_Calc_Figure_13_02_205.jpg
> alt: This figure is a graph of a curve in 3 dimensions. The curve has asymptotes and from the above view, the curve resembles the secant function.

b. Undefined or infinite
:::

:::exercise {fs-id1169739302060} type= 
PROBLEM:
Find the velocity and the speed of a particle with the position function $\textbf{r}(t)=(\frac{2t-1}{2t+1})\;\textbf{i}+\text{ln}(1-4{t}^{2})\;\textbf{j}.$ The speed of a particle is the magnitude of the velocity and is represented by $\| {r}^{'}(t)\| .$
:::
A particle moves on a circular path of radius *b* according to the function $\textbf{r}(t)=b\;\text{cos}(\omega t)\;\textbf{i}+b\;\text{sin}(\omega t)\;\textbf{j},$ where $\omega$ is the angular velocity, $d\theta \text{/}dt.$

> IMAGE {img:fs-id1169739236391} src=../../media/CNX_Calc_Figure_13_02_201.jpg
> alt: This figure is the graph of a circle centered at the origin with radius of 3. The orientation of the circle is counter-clockwise. Also, in the fourth quadrant there are two vectors. The first starts on the circle and terminates at the origin. The second vector is tangent at the same point in the fourth quadrant towards the x-axis.

:::exercise {fs-id1169739236404} type= 
PROBLEM:
Find the velocity function and show that $\textbf{v}(t)$ is always orthogonal to $\textbf{r}(t).$
SOLUTION:
$\textbf{r}'(t)=-b\omega \;\text{sin}(\omega t)\;\textbf{i}+b\omega \;\text{cos}(\omega t)\;\textbf{j}.$ To show orthogonality, note that $\textbf{r}'(t)\cdot \;\textbf{r}(t)=0.$
:::

:::exercise {fs-id1169736959823} type= 
PROBLEM:
Show that the speed of the particle is proportional to the angular velocity.
:::

:::exercise {fs-id1169736957743} type= 
PROBLEM:
Evaluate $\frac{d}{dt}[\;\textbf{u}(t)\;\times \;\mathbf{{u}^{'}}(t)]$ given $\textbf{u}(t)={t}^{2}\;\textbf{i}-2t\;\textbf{j}+\;\textbf{k}.$
SOLUTION:
$0\;\textbf{i}+2\;\textbf{j}+4t\;\textbf{k}$
:::

:::exercise {fs-id1169736720102} type= 
PROBLEM:
Find the antiderivative of $\textbf{r}'(t)=\text{cos}(2t)\;\textbf{i}-2\;\text{sin}\;t\;\textbf{j}+\frac{1}{1+{t}^{2}}\;\textbf{k}$ that satisfies the initial condition $\textbf{r}(0)=3\;\textbf{i}-2\;\textbf{j}+\;\textbf{k}.$
:::

:::exercise {fs-id1169738920696} type= 
PROBLEM:
Evaluate ${\displaystyle \int_{0}^{3}\| t\;\textbf{i}+{t}^{2}\;\textbf{j}\| dt.}$
SOLUTION:
$\frac{1}{3}({10}^{3\text{/}2}-1)$
:::

:::exercise {fs-id1169738993275} type= 
PROBLEM:
An object starts from rest at point $P(1,2,0)$ and moves with an acceleration of $\textbf{a}(t)=\textbf{j}+2\;\textbf{k},$ where $\| \;\textbf{a}(t)\|$ is measured in feet per second per second. Find the location of the object after $t=2$ sec.
:::

:::exercise {fs-id1169736976861} type= 
PROBLEM:
Show that if the speed of a particle traveling along a curve represented by a vector-valued function is constant, then the velocity function is always perpendicular to the acceleration function.
SOLUTION:

$\begin{array}{rll}\| \;\textbf{v}(t)\| & = & k \\ \textbf{v}(t)\cdot \;\textbf{v}(t) & = & k \\ \frac{d}{dt}(\;\textbf{v}(t)\cdot \;\textbf{v}(t)) & = & \frac{d}{dt}k=0 \\ \textbf{v}(t)\cdot \;\textbf{v}'(t)+\;\textbf{v}'(t)\cdot \;\textbf{v}(t) & = & 0 \\ 2\;\textbf{v}(t)\cdot \;\textbf{v}'(t) & = & 0 \\ \textbf{v}(t)\cdot \;\textbf{v}'(t) & = & 0.\end{array}$
The last statement implies that the velocity and acceleration are perpendicular or orthogonal.

:::

:::exercise {fs-id1169739359290} type= 
PROBLEM:
Given $\textbf{r}(t)=t\;\textbf{i}+3t\;\textbf{j}+{t}^{2}\;\textbf{k}$ and $\textbf{u}(t)=4t\;\textbf{i}+{t}^{2}\;\textbf{j}+{t}^{3}\;\textbf{k},$ find $\frac{d}{dt}(\;\textbf{r}(t)\;\times \;\textbf{u}(t)).$
:::

:::exercise {fs-id1169736834990} type= 
PROBLEM:
Given $\textbf{r}(t)=\langle t+\text{cos}\;t,t-\text{sin}\;t\rangle ,$ find the velocity and the speed at any time.
SOLUTION:
$\textbf{v}(t)=\langle 1-\text{sin}\;t,1-\text{cos}\;t\rangle ,$ $\text{speed}\;=\| \;\textbf{v}(t)\| =\sqrt{3-2(\text{sin}\;t+\text{cos}\;t)}$
:::

:::exercise {fs-id1169736677099} type= 
PROBLEM:
Find the velocity vector for the function $\textbf{r}(t)=\langle {e}^{t},{e}^{\text{−}t},0\rangle .$
:::

:::exercise {fs-id1169736731192} type= 
PROBLEM:
Find an equation of the tangent line to the curve $\textbf{r}(t)=\langle {e}^{t},{e}^{\text{−}t},0\rangle$ at $t=0.$
SOLUTION:
$x=t+1,y=-t+1,z=0$
:::

:::exercise {fs-id1169736686320} type= 
PROBLEM:
Describe and sketch the curve represented by the vector-valued function $\textbf{r}(t)=\langle 6t,6t-{t}^{2}\rangle .$
:::

:::exercise {fs-id1169739279896} type= 
PROBLEM:
Locate the highest point on the curve $\textbf{r}(t)=\langle 6t,6t-{t}^{2}\rangle$ and give the value of the function at this point.
SOLUTION:
$\textbf{r}(t)=\langle 18,9\rangle$ at $t=3$
:::
The position vector for a particle is $\textbf{r}(t)=t\;\textbf{i}+{t}^{2}\;\textbf{j}+{t}^{3}\;\textbf{k}.$ The graph is shown here:

> IMAGE {img:fs-id1169736970780} src=../../media/CNX_Calc_Figure_13_02_207.jpg
> alt: This figure is the graph of a curve in 3 dimensions. The curve is inside of a box. The box represents an octant. The curve begins at the bottom of the box to the left and curves upward to the top right corner.

:::exercise {fs-id1169736970791} type= 
PROBLEM:
Find the velocity vector at any time.
:::

:::exercise {fs-id1169736970867} type= 
PROBLEM:
Find the speed of the particle at time $t=2$ sec.
SOLUTION:
$\sqrt{161}$
:::

:::exercise {fs-id1169736963663} type= 
PROBLEM:
Find the acceleration at time $t=2$ sec.
:::
A particle travels along the path of a helix with the equation $\textbf{r}(t)=\text{cos}(t)\;\textbf{i}+\text{sin}(t)\;\textbf{j}+t\;\textbf{k}.$ See the graph presented here:

> IMAGE {img:fs-id1169736917127} src=../../media/CNX_Calc_Figure_13_02_208.jpg
> alt: This figure is the graph of a curve in 3 dimensions. The curve is inside of a box. The box represents an octant. The curve is a helix and begins at the bottom of the box to the right and spirals upward.

Find the following:

:::exercise {fs-id1169736917143} type= 
PROBLEM:
Velocity of the particle at any time
SOLUTION:
$\textbf{v}(t)=\langle \text{−}\text{sin}\;t,\text{cos}\;t,1\rangle$
:::

:::exercise {fs-id1169736858655} type= 
PROBLEM:
Speed of the particle at any time
:::

:::exercise {fs-id1169736858674} type= 
PROBLEM:
Acceleration of the particle at any time
SOLUTION:
$\textbf{a}(t)=-\text{cos}\;t\;\textbf{i}-\text{sin}\;t\;\textbf{j}+0\;\textbf{j}$
:::

:::exercise {fs-id1169736808876} type= 
PROBLEM:
Find the unit tangent vector for the helix.
:::
A particle travels along the path of an ellipse with the equation $\textbf{r}(t)=\text{cos}\;t\;\textbf{i}+2\;\text{sin}\;t\;\textbf{j}+0\;\textbf{k}.$ Find the following:

:::exercise {fs-id1169736851711} type= 
PROBLEM:
Velocity of the particle
SOLUTION:
$\textbf{v}(t)=\langle \text{−}\text{sin}\;t,2\;\text{cos}\;t,0\rangle$
:::

:::exercise {fs-id1169736963800} type= 
PROBLEM:
Speed of the particle at $t=\frac{\pi}{4}$
:::

:::exercise {fs-id1169736963834} type= 
PROBLEM:
Acceleration of the particle at $t=\frac{\pi}{4}$
SOLUTION:
$\textbf{a}(t)=\langle -\frac{\sqrt{2}}{2},-\sqrt{2},0\rangle$
:::
Given the vector-valued function $\textbf{r}(t)=\langle \text{tan}\;t,\text{sec}\;t,0\rangle$ (graph is shown here), find the following:

> IMAGE {img:fs-id1169739176451} src=../../media/CNX_Calc_Figure_13_02_209.jpg
> alt: This figure is the graph of a curve in 3 dimensions. The curve is inside of a box. The box represents an octant. The curve has asymptotes that are the diagonals of the box. The curve is hyperbolic.

:::exercise {fs-id1169739176463} type= 
PROBLEM:
Velocity
:::

:::exercise {fs-id1169736691005} type= 
PROBLEM:
Speed
SOLUTION:
$\| \;\textbf{v}(t)\| =\sqrt{{\text{sec}}^{4}t+{\text{sec}}^{2}t\;{\text{tan}}^{2}t}=\sqrt{{\text{sec}}^{2}t({\text{sec}}^{2}t+{\text{tan}}^{2}t)}$
:::

:::exercise {fs-id1169736692324} type= 
PROBLEM:
Acceleration
:::

:::exercise {fs-id1169736692410} type= 
PROBLEM:
Find the minimum speed of a particle traveling along the curve $\textbf{r}(t)=\langle t+\text{cos}\;t,t-\text{sin}\;t\rangle$ $t\in [0,2\pi ).$
SOLUTION:
$\sqrt{3-2\sqrt{2}}$
:::
Given $\textbf{r}(t)=t\;\textbf{i}+2\;\text{sin}\;t\;\textbf{j}+2\;\text{cos}\;t\;\textbf{k}$ and $\textbf{u}(t)=\frac{1}{t}\;\textbf{i}+2\;\text{sin}\;t\;\textbf{j}+2\;\text{cos}\;t\;\textbf{k},$ find the following:

:::exercise {fs-id1169739347564} type= 
PROBLEM:
$\textbf{r}(t)\;\times \;\textbf{u}(t)$
:::

:::exercise {fs-id1169736966866} type= 
PROBLEM:
$\frac{d}{dt}(\;\textbf{r}(t)\;\times \;\textbf{u}(t))$
SOLUTION:
$\langle 0,2\;\text{sin}\;t(t-\frac{1}{t})-2\;\text{cos}\;t(1+\frac{1}{{t}^{2}}),2\;\text{sin}\;t(1+\frac{1}{{t}^{2}})+2\;\text{cos}\;t(t-\frac{2}{t})\rangle$
:::

:::exercise {fs-id1169736588823} type= 
PROBLEM:
Now, use the product rule for the derivative of the cross product of two vectors and show this result is the same as the answer for the preceding problem.
:::
Find the unit tangent vector **T**(*t*) for the following vector-valued functions.

:::exercise {fs-id1169736588839} type= 
PROBLEM:
$\textbf{r}(t)=\langle t,\frac{1}{t}\rangle .$ The graph is shown here:

> IMAGE {img:fs-id1169739350914} src=../../media/CNX_Calc_Figure_13_02_210.jpg
> alt: This figure is the graph of a hyperbolic curve. The y-axis is a vertical asymptote and the x-axis is the horizontal asymptote.

SOLUTION:
$\textbf{T}(t)=\langle \frac{{t}^{2}}{\sqrt{{t}^{4}+1}},\frac{−1}{\sqrt{{t}^{4}+1}}\rangle$
:::

:::exercise {fs-id1169739165355} type= 
PROBLEM:
$\textbf{r}(t)=\langle t\;\text{cos}\;t,t\;\text{sin}\;t\rangle$
:::

:::exercise {fs-id1169736883333} type= 
PROBLEM:
$\textbf{r}(t)=\langle t+1,2t+1,2t+2\rangle$
SOLUTION:
$\textbf{T}(t)=\frac{1}{3}\langle 1,2,2\rangle$
:::
Evaluate the following integrals:

:::exercise {fs-id1169736626804} type= 
PROBLEM:
${\displaystyle \int ({e}^{t}\;\textbf{i}+\text{sin}\;t\;\textbf{j}+\frac{1}{2t-1}\;\textbf{k})dt}$
:::

:::exercise {fs-id1169736992700} type= 
PROBLEM:
${\displaystyle \int_{0}^{1}\;\textbf{r}(t)dt},$ where $\textbf{r}(t)=\langle \sqrt[3]{t},\frac{1}{t+1},{e}^{\text{−}t}\rangle$
SOLUTION:
$\frac{3}{4}\;\text{i}+ln(2)\;\text{j}+(1-\frac{1}{e})\;\text{k}$
:::

## Glossary
- {def} **definite integral of a vector-valued function**: the vector obtained by calculating the definite integral of each of the component functions of a given vector-valued function, then using the results as the components of the resulting function
- {def} **derivative of a vector-valued function**: the derivative of a vector-valued function $\textbf{r}(t)$ is $\mathbf{{r}^{'}}(t)=\lim_{\text{Δ}t\to 0}\frac{\textbf{r}(t+\text{Δ}t)-\textbf{r}(t)}{\text{Δ}t},$ provided the limit exists
- {def} **indefinite integral of a vector-valued function**: a vector-valued function with a derivative that is equal to a given vector-valued function
- {def} **principal unit tangent vector**: a unit vector tangent to a curve *C*
- {def} **tangent vector**: to $\textbf{r}(t)$ at $t={t}_{0}$ any vector **v** such that, when the tail of the vector is placed at point $\textbf{r}({t}_{0})$ on the graph, vector **v** is tangent to curve *C*

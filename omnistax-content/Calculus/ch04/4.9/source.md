# Newton’s Method

## Learning Objectives {section:learning-objectives}
- Describe the steps of Newton’s method.
- Explain what an iterative process means.
- Recognize when Newton’s method does not work.
- Apply iterative processes to various situations.

In many areas of pure and applied mathematics, we are interested in finding solutions to an equation of the form $f(x)=0.$ For most functions, however, it is difficult—if not impossible—to calculate their zeroes explicitly. In this section, we take a look at a technique that provides a very efficient way of approximating the {index:zeroes of functions}. This technique makes use of tangent line approximations and is behind the method used often by calculators and computers to find zeroes.

## Describing Newton’s Method
Consider the task of finding the solutions of $f(x)=0.$ If $f$ is the first-degree polynomial $f(x)=ax+b,$ then the solution of $f(x)=0$ is given by the formula $x=-\frac{b}{a}.$ If $f$ is the second-degree polynomial $f(x)=a{x}^{2}+bx+c,$ the solutions of $f(x)=0$ can be found by using the quadratic formula. However, for polynomials of degree $3$ or more, finding roots of $f$ becomes more complicated. Although formulas exist for third- and fourth-degree polynomials, they are quite complicated. Also, if $f$ is a polynomial of degree $5$ or greater, it is known that no such formulas exist. For example, consider the function

$f(x)={x}^{5}+8{x}^{4}+4{x}^{3}-2x-7.$  {eq:fs-id1165042548842}

No formula exists that allows us to find the solutions of $f(x)=0.$ Similar difficulties exist for nonpolynomial functions. For example, consider the task of finding solutions of $\text{tan}(x)-x=0.$ No simple formula exists for the solutions of this equation. In cases such as these, we can use Newton’s method to approximate the roots.
{term:Newton’s method} makes use of the following idea to approximate the solutions of $f(x)=0.$ By sketching a graph of $f,$ we can estimate a root of $f(x)=0.$ Let’s call this estimate ${x}_{0}.$ We then draw the tangent line to $f$ at ${x}_{0}.$ If ${f}^{'}({x}_{0})≠0,$ this tangent line intersects the $x$-axis at some point $({x}_{1},0).$ Now let ${x}_{1}$ be the next approximation to the actual root. Typically, ${x}_{1}$ is closer than ${x}_{0}$ to an actual root. Next we draw the tangent line to $f$ at ${x}_{1}.$ If ${f}^{'}({x}_{1})≠0,$ this tangent line also intersects the $x$-axis, producing another approximation, ${x}_{2}.$ We continue in this way, deriving a list of approximations: ${x}_{0},{x}_{1},{x}_{2}\text{,…}.$ Typically, the numbers ${x}_{0},{x}_{1},{x}_{2}\text{,…}$ quickly approach an actual root $x*,$ as shown in the following figure.

> FIGURE {fig:CNX_Calc_Figure_04_09_001} src=../../media/CNX_Calc_Figure_04_09_001.jpg
> alt: This function f(x) is drawn with points (x0, f(x0)), (x1, f(x1)), and (x2, f(x2)) marked on the function. From (x0, f(x0)), a tangent line is drawn, and it strikes the x axis at x1. From (x0, f(x0)), a tangent line is drawn, and it strikes the x axis at x2. If a tangent line were drawn from (x2, f(x2)), it appears that it would come very close to x*, which is the actual root. Each tangent line drawn in this order appears to get closer and closer to x*.
> caption: The approximations ${x}_{0},{x}_{1},{x}_{2}\text{,…}$ approach the actual root $x*.$ The approximations are derived by looking at tangent lines to the graph of $f.$

Now let’s look at how to calculate the approximations ${x}_{0},{x}_{1},{x}_{2}\text{,…}.$ If ${x}_{0}$ is our first approximation, the approximation ${x}_{1}$ is defined by letting $({x}_{1},0)$ be the $x$-intercept of the tangent line to $f$ at ${x}_{0}.$ The equation of this tangent line is given by

$y=f({x}_{0})+{f}^{'}({x}_{0})(x-{x}_{0}).$  {eq:fs-id1165042526516}

Therefore, ${x}_{1}$ must satisfy

$f({x}_{0})+{f}^{'}({x}_{0})({x}_{1}-{x}_{0})=0.$  {eq:fs-id1165043276857}

Solving this equation for ${x}_{1},$ we conclude that

${x}_{1}={x}_{0}-\frac{f({x}_{0})}{f'({x}_{0})}.$  {eq:fs-id1165043021803}

Similarly, the point $({x}_{2},0)$ is the $x$-intercept of the tangent line to $f$ at ${x}_{1}.$ Therefore, ${x}_{2}$ satisfies the equation

${x}_{2}={x}_{1}-\frac{f({x}_{1})}{f'({x}_{1})}.$  {eq:fs-id1165043082009}

In general, for $n>0,{x}_{n}$ satisfies

$$ {x}_{n}={x}_{n-1}-\frac{f({x}_{n-1})}{f'({x}_{n-1})}. $$  {eq:fs-id1165043389758}

Next we see how to make use of this technique to approximate the root of the polynomial $f(x)={x}^{3}-3x+1.$

:::example {ex:fs-id1165043423917} Finding a Root of a Polynomial

:::exercise {fs-id1165042708755} type= 
PROBLEM:
Use Newton’s method to approximate a root of $f(x)={x}^{3}-3x+1$ in the interval $[1,2].$ Let ${x}_{0}=2$ and find ${x}_{1},{x}_{2},{x}_{3},{x}_{4},$ and ${x}_{5}.$
SOLUTION:
From [ref:CNX_Calc_Figure_04_09_002], we see that $f$ has one root over the interval $(1,2).$ Therefore ${x}_{0}=2$ seems like a reasonable first approximation. To find the next approximation, we use [ref:fs-id1165043389758]. Since $f(x)={x}^{3}-3x+1,$ the derivative is ${f}^{'}(x)=3{x}^{2}-3.$ Using [ref:fs-id1165043389758] with $n=1$ (and a calculator that displays $10$ digits), we obtain

${x}_{1}={x}_{0}-\frac{f({x}_{0})}{f'({x}_{0})}=2-\frac{f(2)}{f'(2)}=2-\frac{3}{9}\approx 1.666666667.$  {eq:fs-id1165042946219}

To find the next approximation, ${x}_{2},$ we use [ref:fs-id1165043389758] with $n=2$ and the value of ${x}_{1}$ stored on the calculator. We find that

${x}_{2}={x}_{1}-\frac{f({x}_{1})}{f'({x}_{1})}\approx 1.548611111.$  {eq:fs-id1165042482873}

Continuing in this way, we obtain the following results:

$\begin{array}{l}{x}_{1}\approx 1.666666667 \\ {x}_{2}\approx 1.548611111 \\ {x}_{3}\approx 1.532390162 \\ {x}_{4}\approx 1.532088989 \\ {x}_{5}\approx 1.532088886 \\ {x}_{6}\approx 1.532088886.\end{array}$  {eq:fs-id1165042705837}

We note that we obtained the same value for ${x}_{5}$ and ${x}_{6}.$ Therefore, any subsequent application of Newton’s method will most likely give the same value for ${x}_{n}.$

> FIGURE {fig:CNX_Calc_Figure_04_09_002} src=../../media/CNX_Calc_Figure_04_09_002.jpg
> alt: The function f(x) = x3 – 3x + 1 is drawn. It has roots between −2 and −1, 0 and 1, and 1 and 2.
> caption: The function $f(x)={x}^{3}-3x+1$ has one root over the interval $[1,2].$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043373616} type= 
PROBLEM:
Letting ${x}_{0}=0,$ let’s use Newton’s method to approximate the root of $f(x)={x}^{3}-3x+1$ over the interval $[0,1]$ by calculating ${x}_{1}$ and ${x}_{2}.$
SOLUTION:
${x}_{1}\approx 0.33333333,{x}_{2}\approx 0.347222222$
COMMENTARY: Hint
Use [ref:fs-id1165043389758].
:::
:::
Newton’s method can also be used to approximate square roots. Here we show how to approximate $\sqrt{2}.$ This method can be modified to approximate the square root of any positive number.

:::example {ex:fs-id1165042936506} Finding a Square Root

:::exercise {fs-id1165043182674} type= 
PROBLEM:
Use Newton’s method to approximate $\sqrt{2}$ ([ref:CNX_Calc_Figure_04_09_003]). Let $f(x)={x}^{2}-2,$ let ${x}_{0}=2,$ and calculate ${x}_{1},{x}_{2},{x}_{3},{x}_{4},{x}_{5}.$ (We note that since $f(x)={x}^{2}-2$ has a zero at $\sqrt{2},$ the initial value ${x}_{0}=2$ is a reasonable choice to approximate $\sqrt{2}.)$
SOLUTION:
For $f(x)={x}^{2}-2,{f}^{'}(x)=2x.$ From [ref:fs-id1165043389758], we know that

$\begin{array}{rl}{x}_{n} & ={x}_{n-1}-\frac{f({x}_{n-1})}{f'({x}_{n-1})} \\ & ={x}_{n-1}-\frac{{x}^{2}{}_{n-1}-2}{2{x}_{n-1}} \\ & =\frac{1}{2}{x}_{n-1}+\frac{1}{{x}_{n-1}} \\ & =\frac{1}{2}({x}_{n-1}+\frac{2}{{x}_{n-1}}).\end{array}$  {eq:fs-id1165043010307}

Therefore,

$\begin{array}{l} \\ \\ {x}_{1}=\frac{1}{2}({x}_{0}+\frac{2}{{x}_{0}})=\frac{1}{2}(2+\frac{2}{2})=1.5 \\ {x}_{2}=\frac{1}{2}({x}_{1}+\frac{2}{{x}_{1}})=\frac{1}{2}(1.5+\frac{2}{1.5})\approx 1.416666667.\end{array}$  {eq:fs-id1165042705668}

Continuing in this way, we find that

$\begin{array}{l}{x}_{1}=1.5 \\ {x}_{2}\approx 1.416666667 \\ {x}_{3}\approx 1.414215686 \\ {x}_{4}\approx 1.414213562 \\ {x}_{5}\approx 1.414213562.\end{array}$  {eq:fs-id1165043384502}

Since we obtained the same value for ${x}_{4}$ and ${x}_{5},$ it is unlikely that the value ${x}_{n}$ will change on any subsequent application of Newton’s method. We conclude that $\sqrt{2}\approx 1.414213562.$

> FIGURE {fig:CNX_Calc_Figure_04_09_003} src=../../media/CNX_Calc_Figure_04_09_003.jpg
> alt: The function y = x2 – 2 is drawn. A dashed line comes up from x0 = 2, and a tangent line is drawn down from there. It touches x1 = 1.5, which is near x* = the square root of 2.
> caption: We can use Newton’s method to find $\sqrt{2}.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043211934} type= 
PROBLEM:
Use Newton’s method to approximate $\sqrt{3}$ by letting $f(x)={x}^{2}-3$ and ${x}_{0}=3.$ Find ${x}_{1}$ and ${x}_{2}.$
SOLUTION:
${x}_{1}=2,{x}_{2}=1.75$
COMMENTARY: Hint
For $f(x)={x}^{2}-3,$ [ref:fs-id1165043389758] reduces to ${x}_{n}=\frac{{x}_{n-1}}{2}+\frac{3}{2{x}_{n-1}}.$
:::
:::
When using Newton’s method, each approximation after the initial guess is defined in terms of the previous approximation by using the same formula. In particular, by defining the function $F(x)=x-[\frac{f(x)}{{f}^{'}(x)}],$ we can rewrite [ref:fs-id1165043389758] as ${x}_{n}=F({x}_{n-1}).$ This type of process, where each ${x}_{n}$ is defined in terms of ${x}_{n-1}$ by repeating the same function, is an example of an {term:iterative process}. Shortly, we examine other iterative processes. First, let’s look at the reasons why Newton’s method could fail to find a root.

## Failures of Newton’s Method
Typically, Newton’s method is used to find roots fairly quickly. However, things can go wrong. Some reasons why Newton’s method might fail include the following:
1. At one of the approximations ${x}_{n},$ the derivative ${f}^{'}$ is zero at ${x}_{n},$ but $f({x}_{n})≠0.$ As a result, the tangent line of $f$ at ${x}_{n}$ does not intersect the $x$-axis. Therefore, we cannot continue the iterative process.
2. The approximations ${x}_{0},{x}_{1},{x}_{2}\text{,…}$ may approach a different root. If the function $f$ has more than one root, it is possible that our approximations do not approach the one for which we are looking, but approach a different root (see [ref:CNX_Calc_Figure_04_09_004]). This event most often occurs when we do not choose the approximation ${x}_{0}$ close enough to the desired root.
3. The approximations may fail to approach a root entirely. In [ref:fs-id1165043091063], we provide an example of a function and an initial guess ${x}_{0}$ such that the successive approximations never approach a root because the successive approximations continue to alternate back and forth between two values.

> FIGURE {fig:CNX_Calc_Figure_04_09_004} src=../../media/CNX_Calc_Figure_04_09_004.jpg
> alt: A function is drawn with two roots, labeled root sought and root found. A point x0 is chosen such that when the tangent of x0 is taken, even though it is nearer to the root sought, the tangent points to the root found.
> caption: If the initial guess ${x}_{0}$ is too far from the root sought, it may lead to approximations that approach a different root.

:::example {ex:fs-id1165043091063} When Newton’s Method Fails

:::exercise {fs-id1165042562908} type= 
PROBLEM:
Consider the function $f(x)={x}^{3}-2x+2.$ Let ${x}_{0}=0.$ Show that the sequence ${x}_{1},{x}_{2}\text{,…}$ fails to approach a root of $f.$
SOLUTION:
For $f(x)={x}^{3}-2x+2,$ the derivative is ${f}^{'}(x)=3{x}^{2}-2.$ Therefore,

${x}_{1}={x}_{0}-\frac{f({x}_{0})}{{f}^{'}({x}_{0})}=0-\frac{f(0)}{{f}^{'}(0)}=-\frac{2}{−2}=1.$  {eq:fs-id1165042551991}

In the next step,

${x}_{2}={x}_{1}-\frac{f({x}_{1})}{f'({x}_{1})}=1-\frac{f(1)}{{f}^{'}(1)}=1-\frac{1}{1}=0.$  {eq:fs-id1165043321518}

Consequently, the numbers ${x}_{0},{x}_{1},{x}_{2}\text{,…}$ continue to bounce back and forth between $0$ and $1$ and never get closer to the root of $f$ which is over the interval $[−2,−1]$ (see [ref:CNX_Calc_Figure_04_09_005]). Fortunately, if we choose an initial approximation ${x}_{0}$ closer to the actual root, we can avoid this situation.

> FIGURE {fig:CNX_Calc_Figure_04_09_005} src=../../media/CNX_Calc_Figure_04_09_005.jpg
> alt: The function f(x) = x3 – 2x + 2 is drawn, which has a root between −2 and −1. The tangent from x = 0 goes to x = 1, and the tangent from x = 1 goes to x = 0.
> caption: The approximations continue to alternate between $0\;\text{and}\;1$ and never approach the root of $f.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043428459} type= 
PROBLEM:
For $f(x)={x}^{3}-2x+2,$ let ${x}_{0}=−1.5$ and find ${x}_{1}$ and ${x}_{2}.$
SOLUTION:
${x}_{1}\approx -1.842105263,{x}_{2}\approx -1.772826920$
COMMENTARY: Hint
Use [ref:fs-id1165043389758].
:::
:::
From [ref:fs-id1165043091063], we see that Newton’s method does not always work. However, when it does work, the sequence of approximations approaches the root very quickly. Discussions of how quickly the sequence of approximations approach a root found using Newton’s method are included in texts on numerical analysis.

## Other Iterative Processes
As mentioned earlier, Newton’s method is a type of iterative process. We now look at an example of a different type of iterative process.
Consider a function $F$ and an initial number ${x}_{0}.$ Define the subsequent numbers ${x}_{n}$ by the formula ${x}_{n}=F({x}_{n-1}).$ This process is an iterative process that creates a list of numbers ${x}_{0},{x}_{1},{x}_{2}\text{,…},{x}_{n}\text{,…}.$ This list of numbers may approach a finite number $x*$ as $n$ gets larger, or it may not. In [ref:fs-id1165043210088], we see an example of a function $F$ and an initial guess ${x}_{0}$ such that the resulting list of numbers approaches a finite value.

:::example {ex:fs-id1165043210088} Finding a Limit for an Iterative Process

:::exercise {fs-id1165042710988} type= 
PROBLEM:
Let $F(x)=\frac{1}{2}x+4$ and let ${x}_{0}=0.$ For all $n\ge 1,$ let ${x}_{n}=F({x}_{n-1}).$ Find the values ${x}_{1},{x}_{2},{x}_{3},{x}_{4},{x}_{5}.$ Make a conjecture about what happens to this list of numbers ${x}_{1},{x}_{2},{x}_{3}\text{…},{x}_{n}\text{,…}$ as $n\to \infty .$ If the list of numbers ${x}_{1},{x}_{2},{x}_{3}\text{,…}$ approaches a finite number $x*,$ then $x*$ satisfies $x*=F(x*),$ and $x*$ is called a fixed point of $F.$
SOLUTION:
If ${x}_{0}=0,$ then

$\begin{array}{l} \\ \\ {x}_{1}=\frac{1}{2}(0)+4=4 \\ {x}_{2}=\frac{1}{2}(4)+4=6 \\ {x}_{3}=\frac{1}{2}(6)+4=7 \\ {x}_{4}=\frac{1}{2}(7)+4=7.5 \\ {x}_{5}=\frac{1}{2}(7.5)+4=7.75 \\ {x}_{6}=\frac{1}{2}(7.75)+4=7.875 \\ {x}_{7}=\frac{1}{2}(7.875)+4=7.9375 \\ {x}_{8}=\frac{1}{2}(7.9375)+4=7.96875 \\ {x}_{9}=\frac{1}{2}(7.96875)+4=7.984375.\end{array}$  {eq:fs-id1165042330836}

From this list, we conjecture that the values ${x}_{n}$ approach $8.$
[ref:CNX_Calc_Figure_04_09_006] provides a graphical argument that the values approach $8$ as $n\to \infty .$ Starting at the point $({x}_{0},{x}_{0}),$ we draw a vertical line to the point $({x}_{0},F({x}_{0})).$ The next number in our list is ${x}_{1}=F({x}_{0}).$ We use ${x}_{1}$ to calculate ${x}_{2}.$ Therefore, we draw a horizontal line connecting $({x}_{0},{x}_{1})$ to the point $({x}_{1},{x}_{1})$ on the line $y=x,$ and then draw a vertical line connecting $({x}_{1},{x}_{1})$ to the point $({x}_{1},F({x}_{1})).$ The output $F({x}_{1})$ becomes ${x}_{2}.$ Continuing in this way, we could create an infinite number of line segments. These line segments are trapped between the lines $F(x)=\frac{x}{2}+4$ and $y=x.$ The line segments get closer to the intersection point of these two lines, which occurs when $x=F(x).$ Solving the equation $x=\frac{x}{2}+4,$ we conclude they intersect at $x=8.$ Therefore, our graphical evidence agrees with our numerical evidence that the list of numbers ${x}_{0},{x}_{1},{x}_{2}\text{,…}$ approaches $x*=8$ as $n\to \infty .$

> FIGURE {fig:CNX_Calc_Figure_04_09_006} src=../../media/CNX_Calc_Figure_04_09_006.jpg
> alt: The function F(x) = (1/2)x + 4 is graphed along with y = x. From x0, which appears to be at the origin, a line is drawn to the function F(x) at x1 = F(x0). Then a line is drawn to the right from here to the line y = x, at which point a line is drawn up to x2 = F(x1). Then a line is drawn to the right from here to the line y = x, at which point a line is drawn up to x3 = F(x2). Continuing this process would converge on the two lines’ intersection point at x* = 8.
> caption: This iterative process approaches the value $x*=8.$

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042954798} type= 
PROBLEM:
Consider the function $F(x)=\frac{1}{3}x+6.$ Let ${x}_{0}=0$ and let ${x}_{n}=F({x}_{n-1})$ for $n\ge 2.$ Find ${x}_{1},{x}_{2},{x}_{3},{x}_{4},{x}_{5}.$ Make a conjecture about what happens to the list of numbers ${x}_{1},{x}_{2},{x}_{3}\text{,…}{x}_{n}\text{,…}$ as $n\to \infty .$
SOLUTION:
${x}_{1}=6,{x}_{2}=8,{x}_{3}=\frac{26}{3},{x}_{4}=\frac{80}{9},{x}_{5}=\frac{242}{27};x*=9$
COMMENTARY: Hint
Consider the point where the lines $y=x$ and $y=F(x)$ intersect.
:::
:::

:::note [project] Iterative Processes and Chaos
Iterative processes can yield some very interesting behavior. In this section, we have seen several examples of iterative processes that converge to a fixed point. We also saw in [ref:fs-id1165043091063] that the iterative process bounced back and forth between two values. We call this kind of behavior a $2$-*cycle*. Iterative processes can converge to cycles with various periodicities, such as $2-\text{cycles},\;4-\text{cycles}$ (where the iterative process repeats a sequence of four values), 8-cycles, and so on.
Some iterative processes yield what mathematicians call *chaos*. In this case, the iterative process jumps from value to value in a seemingly random fashion and never converges or settles into a cycle. Although a complete exploration of {index:chaos} is beyond the scope of this text, in this project we look at one of the key properties of a chaotic iterative process: sensitive dependence on initial conditions. This property refers to the concept that small changes in initial conditions can generate drastically different behavior in the iterative process.
Probably the best-known example of chaos is the {index:Mandelbrot set} (see [ref:CNX_Calc_Figure_04_09_007]), named after Benoit Mandelbrot (1924–2010), who investigated its properties and helped popularize the field of chaos theory. The Mandelbrot set is usually generated by computer and shows fascinating details on enlargement, including self-replication of the set. Several colorized versions of the set have been shown in museums and can be found online and in popular books on the subject.

> FIGURE {fig:CNX_Calc_Figure_04_09_007} src=../../media/CNX_Calc_Figure_04_09_007.jpg
> alt: A very complicated and organic looking fractal.
> caption: The Mandelbrot set is a well-known example of a set of points generated by the iterative chaotic behavior of a relatively simple function.

In this project we use the logistic map

$f(x)=rx(1-x),\;\text{where}\;x\in [0,1]\;\text{and}\;r>0$  {eq:fs-id1165042707686}

as the function in our iterative process. The logistic map is a deceptively simple function; but, depending on the value of $r,$ the resulting iterative process displays some very interesting behavior. It can lead to fixed points, cycles, and even chaos.
To visualize the long-term behavior of the iterative process associated with the logistic map, we will use a tool called a *cobweb diagram*. As we did with the iterative process we examined earlier in this section, we first draw a vertical line from the point $({x}_{0},0)$ to the point $({x}_{0},f({x}_{0}))=({x}_{0},{x}_{1}).$ We then draw a horizontal line from that point to the point $({x}_{1},{x}_{1}),$ then draw a vertical line to $({x}_{1},f({x}_{1}))=({x}_{1},{x}_{2}),$ and continue the process until the long-term behavior of the system becomes apparent. [ref:CNX_Calc_Figure_04_09_008] shows the long-term behavior of the logistic map when $r=3.55$ and ${x}_{0}=0.2.$ (The first $100$ iterations are not plotted.) The long-term behavior of this iterative process is an $8$-cycle.

> FIGURE {fig:CNX_Calc_Figure_04_09_008} src=../../media/CNX_Calc_Figure_04_09_008.jpg
> alt: In the first quadrant, f(x) = 3.55x(1 – x) is graphed as is y = x. From some point on the x axis, a line is drawn up to the line y = x, at which point it turns to be horizontal and continues until it touches the outside edge of f(x), at which point it turns again to be vertical until it each the line y = x. This process continues a number of times and creates an interesting series of boxes.
> caption: A cobweb diagram for $f(x)=3.55x(1-x)$ is presented here. The sequence of values results in an $8$-cycle.

1. Let $r=0.5$ and choose ${x}_{0}=0.2.$ Either by hand or by using a computer, calculate the first $10$ values in the sequence. Does the sequence appear to converge? If so, to what value? Does it result in a cycle? If so, what kind of cycle (for example, $2-\text{cycle},\;4-\text{cycle}.)?$
2. What happens when $r=2?$
3. For $r=3.2$ and $r=3.5,$ calculate the first $100$ sequence values. Generate a cobweb diagram for each iterative process. (Several free applets are available online that generate cobweb diagrams for the logistic map.) What is the long-term behavior in each of these cases?
4. Now let $r=4.$ Calculate the first $100$ sequence values and generate a cobweb diagram. What is the long-term behavior in this case?
5. Repeat the process for $r=4,$ but let ${x}_{0}=0.201.$ How does this behavior compare with the behavior for ${x}_{0}=0.2?$
:::

## Key Concepts {section:key-concepts}
- Newton’s method approximates roots of $f(x)=0$ by starting with an initial approximation ${x}_{0},$ then uses tangent lines to the graph of $f$ to create a sequence of approximations ${x}_{1},{x}_{2},{x}_{3}\text{,…}.$
- Typically, Newton’s method is an efficient method for finding a particular root. In certain cases, Newton’s method fails to work because the list of numbers ${x}_{0},{x}_{1},{x}_{2}\text{,…}$ does not approach a finite value or it approaches a value other than the root sought.
- Any process in which a list of numbers ${x}_{0},{x}_{1},{x}_{2}\text{,…}$ is generated by defining an initial number ${x}_{0}$ and defining the subsequent numbers by the equation ${x}_{n}=F({x}_{n-1})$ for some function $F$ is an iterative process. Newton’s method is an example of an iterative process, where the function $F(x)=x-[\frac{f(x)}{{f}^{'}(x)}]$ for a given function $f.$

##  {section:section-exercises}
For the following exercises, write Newton’s formula as ${x}_{n+1}=F({x}_{n})$ for solving $f(x)=0.$

:::exercise {fs-id1165043395265} type= 
PROBLEM:
$f(x)={x}^{2}+1$
:::

:::exercise {fs-id1165042320000} type= 
PROBLEM:
$f(x)={x}^{3}+2x+1$
SOLUTION:
$F({x}_{n})={x}_{n}-\frac{{x}_{n}{}^{3}+2{x}_{n}+1}{3{x}_{n}{}^{2}+2}$
:::

:::exercise {fs-id1165043250239} type= 
PROBLEM:
$f(x)=\text{sin}\;x$
:::

:::exercise {fs-id1165043390900} type= 
PROBLEM:
$f(x)={e}^{x}$
SOLUTION:
$F({x}_{n})={x}_{n}-\frac{{e}^{{x}_{n}}}{{e}^{{x}_{n}}}$
:::

:::exercise {fs-id1165043430597} type= 
PROBLEM:
$f(x)={x}^{3}+3x{e}^{x}$
:::
For the following exercises, solve $f(x)=0$ using the iteration ${x}_{n+1}={x}_{n}-cf({x}_{n}),$ which differs slightly from Newton’s method. Find a $c$ that works and a $c$ that fails to converge, with the exception of $c=0.$

:::exercise {fs-id1165042706893} type= 
PROBLEM:
$f(x)={x}^{2}-4,$ with ${x}_{0}=0$
SOLUTION:
$|c|>0.5$ fails, $|c|\le 0.5$ works
:::

:::exercise {fs-id1165042708723} type= 
PROBLEM:
$f(x)={x}^{2}-4x+3,$ with ${x}_{0}=2$
:::

:::exercise {fs-id1165042710979} type= 
PROBLEM:
What is the value of $\text{“}c\text{”}$ for Newton’s method?
SOLUTION:
$c=\frac{1}{{f}^{'}({x}_{n})}$
:::
For the following exercises, start at
a. ${x}_{0}=0.6$ and
b. ${x}_{0}=2.$
Compute ${x}_{1}$ and ${x}_{2}$ using the specified iterative method.

:::exercise {fs-id1165042330022} type= 
PROBLEM:
${x}_{n+1}={x}_{n}{}^{2}-\frac{1}{2}$
:::

:::exercise {fs-id1165042328680} type= 
PROBLEM:
${x}_{n+1}=2{x}_{n}(1-{x}_{n})$
SOLUTION:
a. ${x}_{1}=\frac{12}{25},{x}_{2}=\frac{312}{625};$ b. ${x}_{1}=−4,{x}_{2}=−40$
:::

:::exercise {fs-id1165042583690} type= 
PROBLEM:
${x}_{n+1}=\sqrt{{x}_{n}}$
:::

:::exercise {fs-id1165043393828} type= 
PROBLEM:
${x}_{n+1}=\frac{1}{\sqrt{{x}_{n}}}$
SOLUTION:
a. ${x}_{1}=1.291,{x}_{2}=0.8801;$ b. ${x}_{1}=0.7071,{x}_{2}=1.189$
:::

:::exercise {fs-id1165043286618} type= 
PROBLEM:
${x}_{n+1}=3{x}_{n}(1-{x}_{n})$
:::

:::exercise {fs-id1165042319140} type= 
PROBLEM:
${x}_{n+1}={x}_{n}{}^{2}+{x}_{n}-2$
SOLUTION:
a. ${x}_{1}=-\frac{26}{25},{x}_{2}=-\frac{1224}{625};$ b. ${x}_{1}=4,{x}_{2}=18$
:::

:::exercise {fs-id1165043131639} type= 
PROBLEM:
${x}_{n+1}=\frac{1}{2}{x}_{n}-1$
:::

:::exercise {fs-id1165043327548} type= 
PROBLEM:
${x}_{n+1}=|{x}_{n}|$
SOLUTION:
a. ${x}_{1}=\frac{6}{10},{x}_{2}=\frac{6}{10};$ b. ${x}_{1}=2,{x}_{2}=2$
:::
For the following exercises, solve to four decimal places using Newton’s method and a computer or calculator. Choose any initial guess ${x}_{0}$ that is not the exact root.

:::exercise {fs-id1165042609041} type= 
PROBLEM:
${x}^{2}-10=0$
:::

:::exercise {fs-id1165043379909} type= 
PROBLEM:
${x}^{4}-100=0$
SOLUTION:
$3.1623\;\text{or}\;-3.1623$
:::

:::exercise {fs-id1165042372001} type= 
PROBLEM:
${x}^{2}-x=0$
:::

:::exercise {fs-id1165043078171} type= 
PROBLEM:
${x}^{3}-x=0$
SOLUTION:
$0,−1\;\text{or}\;1$
:::

:::exercise {fs-id1165043327755} type= 
PROBLEM:
$x+5\;\text{cos}(x)=0$
:::

:::exercise {fs-id1165043298557} type= 
PROBLEM:
$x+\text{tan}(x)=0,$ choose ${x}_{0}\in (-\frac{\pi}{2},\frac{\pi}{2})$
SOLUTION:
$0$
:::

:::exercise {fs-id1165043398519} type= 
PROBLEM:
$\frac{1}{1-x}=2$
:::

:::exercise {fs-id1165042639363} type= 
PROBLEM:
$1+x+{x}^{2}+{x}^{3}+{x}^{4}=2$
SOLUTION:
$0.5188\;\text{or}\;-1.2906$
:::

:::exercise {fs-id1165043395050} type= 
PROBLEM:
${x}^{3}+{(x+1)}^{3}={10}^{3}$
:::

:::exercise {fs-id1165042660241} type= 
PROBLEM:
$x={\text{sin}}^{2}(x)$
SOLUTION:
$0$
:::
For the following exercises, use Newton’s method to find the fixed points of the function where $f(x)=x;$ round to three decimals.

:::exercise {fs-id1165043321501} type= 
PROBLEM:
$\text{sin}\;x$
:::

:::exercise {fs-id1165043194445} type= 
PROBLEM:
$\text{tan}(x)$ on $x=(\frac{\pi}{2},\frac{3\pi}{2})$
SOLUTION:
$4.493$
:::

:::exercise {fs-id1165043276362} type= 
PROBLEM:
${e}^{x}-2$
:::

:::exercise {fs-id1165042705973} type= 
PROBLEM:
$\text{ln}(x)+2$
SOLUTION:
$0.159,3.146$
:::
Newton’s method can be used to find maxima and minima of functions in addition to the roots. In this case apply Newton’s method to the derivative function ${f}^{'}(x)$ to find its roots, instead of the original function. For the following exercises, consider the formulation of the method.

:::exercise {fs-id1165042708278} type= 
PROBLEM:
To find candidates for maxima and minima, we need to find the critical points ${f}^{'}(x)=0.$ Show that to solve for the critical points of a function $f(x),$ Newton’s method is given by ${x}_{n+1}={x}_{n}-\frac{{f}^{'}({x}_{n})}{{f}^{''}({x}_{n})}.$
:::

:::exercise {fs-id1165042318840} type= 
PROBLEM:
What additional restrictions are necessary on the function $f?$
SOLUTION:
We need $f$ to be twice continuously differentiable.
:::
For the following exercises, use Newton’s method to find the location of the local minima and/or maxima of the following functions; round to three decimals.

:::exercise {fs-id1165043425469} type= 
PROBLEM:
Minimum of $f(x)={x}^{2}+2x+4$
:::

:::exercise {fs-id1165043393663} type= 
PROBLEM:
Minimum of $f(x)=3{x}^{3}+2{x}^{2}-16$
SOLUTION:
$x=0$
:::

:::exercise {fs-id1165042709569} type= 
PROBLEM:
Minimum of $f(x)={x}^{2}{e}^{x}$
:::

:::exercise {fs-id1165043327319} type= 
PROBLEM:
Maximum of $f(x)=x+\frac{1}{x}$
SOLUTION:
$x=−1$
:::

:::exercise {fs-id1165042407298} type= 
PROBLEM:
Maximum of $f(x)={x}^{3}+10{x}^{2}+15x-2$
:::

:::exercise {fs-id1165042364609} type= 
PROBLEM:
Maximum of $f(x)=\frac{\sqrt{x}-\sqrt[3]{x}}{x}$
SOLUTION:
$x=5.619$
:::

:::exercise {fs-id1165043431672} type= 
PROBLEM:
Minimum of $f(x)={x}^{2}\text{sin}\;x,$ closest non-zero minimum to $x=0$
:::

:::exercise {fs-id1165043426178} type= 
PROBLEM:
Minimum of $f(x)={x}^{4}+{x}^{3}+3{x}^{2}+12x+6$
SOLUTION:
$x=−1.326$
:::
For the following exercises, use the specified method to solve the equation. If it does not work, explain why it does not work.

:::exercise {fs-id1165043427439} type= 
PROBLEM:
Newton’s method, ${x}^{2}+2=0$
:::

:::exercise {fs-id1165042461106} type= 
PROBLEM:
Newton’s method, $0={e}^{x}$
SOLUTION:
There is no solution to the equation.
:::

:::exercise {fs-id1165042374586} type= 
PROBLEM:
Newton’s method, $0=1+{x}^{2}$ starting at ${x}_{0}=0$
:::

:::exercise {fs-id1165042705923} type= 
PROBLEM:
Solving ${x}_{n+1}=\text{−}{x}_{n}{}^{3}$ starting at ${x}_{0}=−1$
SOLUTION:
It enters a cycle.
:::
For the following exercises, use the {index:secant method}, an alternative iterative method to Newton’s method. The formula is given by

${x}_{n}={x}_{n-1}-f({x}_{n-1})\frac{{x}_{n-1}-{x}_{n-2}}{f({x}_{n-1})-f({x}_{n-2})}.$  {eq:fs-id1165043390951}

:::exercise {fs-id1165043333903} type= 
PROBLEM:
Find a root to $0={x}^{2}-x-3$ accurate to three decimal places.
:::

:::exercise {fs-id1165042450785} type= 
PROBLEM:
Find a root to $0=\text{sin}\;x+3x$ accurate to four decimal places.
SOLUTION:
$0$
:::

:::exercise {fs-id1165043094076} type= 
PROBLEM:
Find a root to $0={e}^{x}-2$ accurate to four decimal places.
:::

:::exercise {fs-id1165043174650} type= 
PROBLEM:
Find a root to $\text{ln}(x+2)=\frac{1}{2}$ accurate to four decimal places.
SOLUTION:
$−0.3513$
:::

:::exercise {fs-id1165043394928} type= 
PROBLEM:
Why would you use the secant method over Newton’s method? What are the necessary restrictions on $f?$
:::
For the following exercises, use both Newton’s method and the secant method to calculate a root for the following equations. Use a calculator or computer to calculate how many iterations of each are needed to reach within three decimal places of the exact answer. For the secant method, use the first guess from Newton’s method.

:::exercise {fs-id1165043251688} type= 
PROBLEM:
$f(x)={x}^{2}+2x+1,{x}_{0}=1$
SOLUTION:
Newton: $11$ iterations, secant: $16$ iterations
:::

:::exercise {fs-id1165042645634} type= 
PROBLEM:
$f(x)={x}^{2},{x}_{0}=1$
:::

:::exercise {fs-id1165043183794} type= 
PROBLEM:
$f(x)=\text{sin}\;x,{x}_{0}=1$
SOLUTION:
Newton: three iterations, secant: six iterations
:::

:::exercise {fs-id1165042632602} type= 
PROBLEM:
$f(x)={e}^{x}-1,{x}_{0}=2$
:::

:::exercise {fs-id1165042545815} type= 
PROBLEM:
$f(x)={x}^{3}+2x+4,{x}_{0}=0$
SOLUTION:
Newton: five iterations, secant: eight iterations
:::
In the following exercises, consider Kepler’s equation regarding planetary orbits, $M=E-ε\;\text{sin}(E),$ where $M$ is the mean anomaly, $E$ is eccentric anomaly, and $ε$ measures eccentricity.

:::exercise {fs-id1165043393688} type= 
PROBLEM:
Use Newton’s method to solve for the eccentric anomaly $E$ when the mean anomaly $M=\frac{\pi}{3}$ and the eccentricity of the orbit $ε=0.25;$ round to three decimals.
:::

:::exercise {fs-id1165042320304} type= 
PROBLEM:
Use Newton’s method to solve for the eccentric anomaly $E$ when the mean anomaly $M=\frac{3\pi}{2}$ and the eccentricity of the orbit $ε=0.8;$ round to three decimals.
SOLUTION:
$E=4.071$
:::
The following two exercises consider a bank investment. The initial investment is $\text{\$}10,000.$ After $25$ years, the investment has tripled to $\text{\$}30,000.$

:::exercise {fs-id1165042710933} type= 
PROBLEM:
Use Newton’s method to determine the interest rate if the interest was compounded annually.
:::

:::exercise {fs-id1165043317181} type= 
PROBLEM:
Use Newton’s method to determine the interest rate if the interest was compounded continuously.
SOLUTION:
$4.394\text{\%}$
:::

:::exercise {fs-id1165043423992} type= 
PROBLEM:
The total cost for printing $x$ books can be given by the equation $C(x)=1000+12x+(\frac{1}{2}){x}^{2\text{/}3}.$ Use Newton’s method to find the break-even point if the printer sells each book for $\text{\$}20.$
:::

## Glossary
- {def} **iterative process**: process in which a list of numbers ${x}_{0},{x}_{1},{x}_{2},{x}_{3}\text{…}$ is generated by starting with a number ${x}_{0}$ and defining ${x}_{n}=F({x}_{n-1})$ for $n\ge 1$
- {def} **Newton’s method**: method for approximating roots of $f(x)=0;$ using an initial guess ${x}_{0};$ each subsequent approximation is defined by the equation ${x}_{n}={x}_{n-1}-\frac{f({x}_{n-1})}{f'({x}_{n-1})}$

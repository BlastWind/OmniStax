# Integration Formulas and the Net Change Theorem

## Learning Objectives {section:learning-objectives}
- Apply the basic integration formulas.
- Explain the significance of the net change theorem.
- Use the net change theorem to solve applied problems.
- Apply the integrals of odd and even functions.

In this section, we use some basic integration formulas studied previously to solve some key applied problems. It is important to note that these formulas are presented in terms of *indefinite* integrals. Although definite and indefinite integrals are closely related, there are some key differences to keep in mind. A definite integral is either a number (when the limits of integration are constants) or a single function (when one or both of the limits of integration are variables). An indefinite integral represents a family of functions, all of which differ by a constant. As you become more familiar with integration, you will get a feel for when to use definite integrals and when to use indefinite integrals. You will naturally select the correct approach for a given problem without thinking too much about it. However, until these concepts are cemented in your mind, think carefully about whether you need a definite integral or an indefinite integral and make sure you are using the proper notation based on your choice.

## Basic Integration Formulas
Recall the integration formulas given in the [ref:fs-id1165043092431](module:m53621)table in Antiderivatives and the rule on properties of definite integrals. Let’s look at a few examples of how to apply these rules.

:::example {ex:fs-id1170571609338} Integrating a Function Using the Power Rule

:::exercise {fs-id1170572506475} type= 
PROBLEM:
Use the power rule to integrate the function ${\displaystyle \int_{1}^{4}\sqrt{t}(1+t)dt}.$
SOLUTION:
The first step is to rewrite the function and simplify it so we can apply the power rule:

$\begin{array}{ll}{\displaystyle \int_{1}^{4}\sqrt{t}(1+t)dt} & ={\displaystyle \int_{1}^{4}{t}^{1\text{/}2}(1+t)dt} \\ \\ & ={\displaystyle \int_{1}^{4}({t}^{1\text{/}2}+{t}^{3\text{/}2})dt}.\end{array}$  {eq:fs-id1170572506256}

Now apply the power rule:

$\begin{array}{ll}{\displaystyle \int_{1}^{4}({t}^{1\text{/}2}+{t}^{3\text{/}2})dt} & ={(\frac{2}{3}{t}^{3\text{/}2}+\frac{2}{5}{t}^{5\text{/}2})|}_{1}^{4} \\ & =[\frac{2}{3}{(4)}^{3\text{/}2}+\frac{2}{5}{(4)}^{5\text{/}2}]-[\frac{2}{3}{(1)}^{3\text{/}2}+\frac{2}{5}{(1)}^{5\text{/}2}] \\ & =\frac{256}{15}.\end{array}$  {eq:fs-id1170572539674}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572512346} type= 
PROBLEM:
Find the definite integral of $f(x)={x}^{2}-3x$ over the interval $[1,3].$
SOLUTION:
$-\frac{10}{3}$
COMMENTARY: Hint
Follow the process from [ref:fs-id1170571609338] to solve the problem.
:::
:::

## The Net Change Theorem
The {term:net change theorem} considers the integral of a {index:*rate of change*}. It says that when a quantity changes, the new value equals the initial value plus the integral of the rate of change of that quantity. The formula can be expressed in two ways. The second is more familiar; it is simply the definite integral.

:::note [theorem] Net Change Theorem
The new value of a changing quantity equals the initial value plus the integral of the rate of change:

$$ \begin{array}{l} \\ \\ F(b)=F(a)+{\displaystyle \int_{a}^{b}F'(x)dx} \\ \text{or} \\ {\displaystyle \int_{a}^{b}F'(x)dx=F(b)-F(a)}.\end{array} $$  {eq:fs-id1170572449540}

:::
Subtracting $F(a)$ from both sides of the first equation yields the second equation. Since they are equivalent formulas, which one we use depends on the application.
The significance of the net change theorem lies in the results. Net change can be applied to area, distance, and volume, to name only a few applications. Net change accounts for negative quantities automatically without having to write more than one integral. To illustrate, let’s apply the net change theorem to a {index:velocity} function in which the result is {index:displacement}.
We looked at a simple example of this in [The Definite Integral](module:m53631). Suppose a car is moving due north (the positive direction) at 40 mph between 2 p.m. and 4 p.m., then the car moves south at 30 mph between 4 p.m. and 5 p.m. We can graph this motion as shown in [ref:CNX_Calc_Figure_05_04_001].

> FIGURE {fig:CNX_Calc_Figure_05_04_001} src=../../media/CNX_Calc_Figure_05_04_002.jpg
> alt: A graph with the x axis marked as t and the y axis marked normally. The lines y=40 and y=-30 are drawn over [2,4] and [4,5], respectively.The areas between the lines and the x axis are shaded.
> caption: The graph shows speed versus time for the given motion of a car.

Just as we did before, we can use definite integrals to calculate the net displacement as well as the total distance traveled. The net displacement is given by

$\begin{array}{ll}{\displaystyle \int_{2}^{5}v}(t)dt & ={\displaystyle \int_{2}^{4}4}0dt+{\displaystyle \int_{4}^{5}}−30dt \\ & =80-30 \\ & =50.\end{array}$  {eq:fs-id1170572371074}

Thus, at 5 p.m. the car is 50 mi north of its starting position. The total distance traveled is given by

$\begin{array}{ll} \\ \\ {{\displaystyle \int}}_{2}^{5}|v(t)|dt & ={\displaystyle \int_{2}^{4}4}0dt+{{\displaystyle \int}}_{4}^{5}30dt \\ & =80+30 \\ & =110.\end{array}$  {eq:fs-id1170572415953}

Therefore, between 2 p.m. and 5 p.m., the car traveled a total of 110 mi.
To summarize, net displacement may include both positive and negative values. In other words, the velocity function accounts for both forward distance and backward distance. To find net displacement, integrate the velocity function over the interval. Total distance traveled, on the other hand, is always positive. To find the total distance traveled by an object, regardless of direction, we need to integrate the absolute value of the velocity function.

:::example {ex:fs-id1170572229863} Finding Net Displacement

:::exercise {fs-id1170571655282} type= 
PROBLEM:
Given a velocity function $v(t)=3t-5$ (in meters per second) for a particle in motion from time $t=0$ to time $t=3,$ find the net displacement of the particle.
SOLUTION:
Applying the net change theorem, we have

$\begin{array}{ll}{\displaystyle \int_{0}^{3}(3t-5)dt} & =\frac{3{t}^{2}}{2}-5t{|}_{0}^{3} \\ \\ & =[\frac{3{(3)}^{2}}{2}-5(3)]-0 \\ & =\frac{27}{2}-15 \\ & =\frac{27}{2}-\frac{30}{2} \\ & =-\frac{3}{2}.\end{array}$  {eq:fs-id1170572451466}

The net displacement is $-\frac{3}{2}$ m ([ref:CNX_Calc_Figure_05_04_002]).

> FIGURE {fig:CNX_Calc_Figure_05_04_002} src=../../media/CNX_Calc_Figure_05_04_003.jpg
> alt: A graph of the line v(t) = 3t – 5, which goes through points (0, -5) and (5/3, 0). The area over the line and under the x axis in the interval [0, 5/3] is shaded. The area under the line and above the x axis in the interval [5/3, 3] is shaded.
> caption: The graph shows velocity versus time for a particle moving with a linear velocity function.

:::
:::

:::example {ex:fs-id1170572247866} Finding the Total Distance Traveled

:::exercise {fs-id1170572510360} type= 
PROBLEM:
Use [ref:fs-id1170572229863] to find the total distance traveled by a particle according to the velocity function $v(t)=3t-5$ m/sec over a time interval $[0,3].$
SOLUTION:
The total distance traveled includes both the positive and the negative values. Therefore, we must integrate the absolute value of the velocity function to find the total distance traveled.
To continue with the example, use two integrals to find the total distance. First, find the *t*-intercept of the function, since that is where the division of the interval occurs. Set the equation equal to zero and solve for *t*. Thus,

$\begin{array}{lll}3t-5 & = & 0 \\ 3t & = & 5 \\ t & = & \frac{5}{3}.\end{array}$  {eq:fs-id1170571809306}

The two subintervals are $[0,\frac{5}{3}]$ and $[\frac{5}{3},3].$ To find the total distance traveled, integrate the absolute value of the function. Since the function is negative over the interval $[0,\frac{5}{3}],$ we have $|v(t)|=\text{−}v(t)$ over that interval. Over $[\frac{5}{3},3],$ the function is positive, so $|v(t)|=v(t).$ Thus, we have

$\begin{array}{ll} \\ \\ {\displaystyle \int_{0}^{3}|v(t)|dt} & ={\displaystyle \int_{0}^{5\text{/}3}\text{−}v(t)dt+{\displaystyle \int_{5\text{/}3}^{3}v}(t)dt} \\ \\ & ={\displaystyle \int_{0}^{5\text{/}3}5}-3tdt+{\displaystyle \int_{5\text{/}3}^{3}3}t-5dt \\ & ={(5t-\frac{3{t}^{2}}{2})|}_{0}^{5\text{/}3}+{(\frac{3{t}^{2}}{2}-5t)|}_{5\text{/}3}^{3} \\ & =[5(\frac{5}{3})-\frac{3{(5\text{/}3)}^{2}}{2}]-0+[\frac{27}{2}-15]-[\frac{3{(5\text{/}3)}^{2}}{2}-\frac{25}{3}] \\ & =\frac{25}{3}-\frac{25}{6}+\frac{27}{2}-15-\frac{25}{6}+\frac{25}{3} \\ & =\frac{41}{6}.\end{array}$  {eq:fs-id1170572208610}

So, the total distance traveled is $\frac{41}{6}$ m.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571734079} type= 
PROBLEM:
Find the net displacement and total distance traveled in meters given the velocity function $f(t)=\frac{1}{2}{e}^{t}-2$ over the interval $[0,2].$
SOLUTION:
Net displacement: $\frac{{e}^{2}-9}{2}\approx -0.8055\;\text{m;}$ total distance traveled: $4\;\text{ln}\;4-7.5+\frac{{e}^{2}}{2}\approx 1.740$ m
COMMENTARY: Hint
Follow the procedures from [ref:fs-id1170572229863] and [ref:fs-id1170572247866]. Note that $f(t)\le 0$ for $t\le \text{ln}\;4,$ and $f(t)\ge 0$ for $t\ge \text{ln}\;4.$
:::
:::

## Applying the Net Change Theorem
The net change theorem can be applied to the flow and consumption of fluids, as shown in [ref:fs-id1170571542385].

:::example {ex:fs-id1170571542385} How Many Gallons of Gasoline Are Consumed?

:::exercise {fs-id1170571542387} type= 
PROBLEM:
If the motor on a motorboat is started at $t=0$ and the boat consumes gasoline at the rate of $5-0.1{t}^{3}$ gal/hr, how much gasoline is used in the first 2 hours?
SOLUTION:
Express the problem as a definite integral, integrate, and evaluate using the Fundamental Theorem of Calculus. The limits of integration are the endpoints of the interval $[0,2].$ We have

$\int_{0}^{2}(5-0.1{t}^{3})dt=(5t-0.1\frac{{t}^{4}}{4}){{|}^{2}}_{0}\;=[5(2)-0.1\frac{{(2)}^{4}}{4}]-0\;=10-0.4\;=9.6$  {eq:fs-id1170572331198}

Thus, the motorboat uses 9.6 gal of gas in 2 hours.
:::
:::

:::example {ex:fs-id1170572420100} Chapter Opener: Iceboats

:::exercise {fs-id1170572420102} type= 
PROBLEM:

> FIGURE {fig:CNX_Calc_Figure_05_04_005} src=../../media/CNX_Calc_Figure_05_01_018.jpg
> alt: An image of an iceboat in action.
> caption: (credit: modification of work by Carter Brown, Flickr)

As we saw at the beginning of the chapter, top {index:iceboat} racers ([ref:CNX_BMath_Figure_05_00_001](module:m53623)) can attain speeds of up to five times the wind speed. Andrew is an intermediate iceboater, though, so he attains speeds equal to only twice the wind speed. Suppose Andrew takes his iceboat out one morning when a light 5-mph breeze has been blowing all morning. As Andrew gets his iceboat set up, though, the wind begins to pick up. During his first half hour of iceboating, the wind speed increases according to the function $v(t)=20t+5.$ For the second half hour of Andrew’s outing, the wind remains steady at 15 mph. In other words, the wind speed is given by

$v(t)=\left\{\begin{array}{lll}20t+5 & \text{for} & 0\le t\le \frac{1}{2} \\ 15 & \text{for} & \frac{1}{2}\le t\le 1.\end{array}\right.$  {eq:fs-id1170571600706}

Recalling that Andrew’s iceboat travels at twice the wind speed, and assuming he moves in a straight line away from his starting point, how far is Andrew from his starting point after 1 hour?
SOLUTION:
To figure out how far Andrew has traveled, we need to integrate his velocity, which is twice the wind speed. Then
Distance $={\displaystyle \int_{0}^{1}2v(t)dt}.$
Substituting the expressions we were given for $v(t),$ we get

$\begin{array}{ll}{\displaystyle \int_{0}^{1}2v(t)dt} & ={\displaystyle \int_{0}^{1\text{/}2}2v(t)dt+{\displaystyle \int_{1\text{/}2}^{1}2v(t)dt}} \\ & ={\displaystyle \int_{0}^{1\text{/}2}2(20t+5)dt+{\displaystyle \int_{1\text{/}2}^{1}2(15)dt}} \\ & ={\displaystyle \int_{0}^{1\text{/}2}(40t+10)dt+{\displaystyle \int_{1\text{/}2}^{1}30dt}} \\ & =[20{t}^{2}+10t]{|}_{0}^{1\text{/}2}+[30t]{|}_{1\text{/}2}^{1} \\ & =(\frac{20}{4}+5)-0+(30-15) \\ & =25.\end{array}$  {eq:fs-id1170572224005}

Andrew is 25 mi from his starting point after 1 hour.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571609271} type= 
PROBLEM:
Suppose that, instead of remaining steady during the second half hour of Andrew’s outing, the wind starts to die down according to the function $v(t)=−10t+20.$ In other words, the wind speed is given by

$v(t)=\left\{\begin{array}{lll}20t+5 & \text{for} & 0\le t\le \frac{1}{2} \\ -10t+15 & \text{for} & \frac{1}{2}\le t\le 1.\end{array}\right.$  {eq:fs-id1170571609306}

Under these conditions, how far from his starting point is Andrew after 1 hour?
SOLUTION:
17.5 mi
COMMENTARY: Hint
Don’t forget that Andrew’s iceboat moves twice as fast as the wind.
:::
:::

## Integrating Even and Odd Functions
We saw in [Functions and Graphs](module:m53472) that an {index:even function} is a function in which $f(\text{−}x)=f(x)$ for all *x* in the domain—that is, the graph of the curve is unchanged when *x* is replaced with −*x*. The graphs of even functions are symmetric about the *y*-axis. An {index:odd function} is one in which $f(\text{−}x)=\text{−}f(x)$ for all *x* in the domain, and the graph of the function is symmetric about the origin.
Integrals of even functions, when the limits of integration are from −*a* to *a*, involve two equal areas, because they are symmetric about the *y*-axis. Integrals of odd functions, when the limits of integration are similarly $[\text{−}a,a],$ evaluate to zero because the areas above and below the *x*-axis are equal.

:::note [rule] Rule: Integrals of Even and Odd Functions
For continuous even functions such that $f(\text{−}x)=f(x),$

${\displaystyle \int_{\text{−}a}^{a}f(x)dx=2{\displaystyle \int_{0}^{a}f(x)dx}}.$  {eq:fs-id1170572587715}

For continuous odd functions such that $f(\text{−}x)=\text{−}f(x),$

${\displaystyle \int_{\text{−}a}^{a}f(x)dx=0}.$  {eq:fs-id1170572380064}

:::

:::example {ex:fs-id1170572624845} Integrating an Even Function

:::exercise {fs-id1170572624847} type= 
PROBLEM:
Integrate the even function ${\displaystyle \int_{−2}^{2}(3{x}^{8}-2)dx}$ and verify that the integration formula for even functions holds.
SOLUTION:
The symmetry appears in the graphs in [ref:CNX_Calc_Figure_05_04_003]. Graph (a) shows the region below the curve and above the *x*-axis. We have to zoom in to this graph by a huge amount to see the region. Graph (b) shows the region above the curve and below the *x*-axis. The signed area of this region is negative. Both views illustrate the symmetry about the *y*-axis of an even function. We have

$\begin{array}{ll}{\displaystyle \int_{−2}^{2}(3{x}^{8}-2)dx} & =(\frac{{x}^{9}}{3}-2x){|}_{−2}^{2} \\ \\ \\ & =[\frac{{(2)}^{9}}{3}-2(2)]-[\frac{{(−2)}^{9}}{3}-2(−2)] \\ & =(\frac{512}{3}-4)-(-\frac{512}{3}+4) \\ & =\frac{1000}{3}.\end{array}$  {eq:fs-id1170572551814}

To verify the integration formula for even functions, we can calculate the integral from 0 to 2 and double it, then check to make sure we get the same answer.

$\begin{array}{ll}{\displaystyle \int_{0}^{2}(3{x}^{8}-2)dx} & =(\frac{{x}^{9}}{3}-2x){|}_{0}^{2} \\ \\ & =\frac{512}{3}-4 \\ & =\frac{500}{3}\end{array}$  {eq:fs-id1170572444219}

Since $2\cdot \frac{500}{3}=\frac{1000}{3},$ we have verified the formula for even functions in this particular example.

> FIGURE {fig:CNX_Calc_Figure_05_04_003} src=../../media/CNX_Calc_Figure_05_04_005.jpg
> alt: Two graphs of the same function f(x) = 3x^8 – 2, side by side. It is symmetric about the y axis, has x-intercepts at (-1,0) and (1,0), and has a y-intercept at (0,-2). The function decreases rapidly as x increases until about -.5, where it levels off at -2. Then, at about .5, it increases rapidly as a mirror image. The first graph is zoomed-out and shows the positive area between the curve and the x axis over [-2,-1] and [1,2]. The second is zoomed-in and shows the negative area between the curve and the x-axis over [-1,1].
> caption: Graph (a) shows the positive area between the curve and the *x*-axis, whereas graph (b) shows the negative area between the curve and the *x*-axis. Both views show the symmetry about the *y*-axis.

:::
:::

:::example {ex:fs-id1170571599733} Integrating an Odd Function

:::exercise {fs-id1170571599735} type= 
PROBLEM:
Evaluate the definite integral of the odd function $−5\;\text{sin}\;x$ over the interval $[\text{−}\pi ,\pi ].$
SOLUTION:
The graph is shown in [ref:CNX_Calc_Figure_05_04_004]. We can see the symmetry about the origin by the positive area above the *x*-axis over $[\text{−}\pi ,0],$ and the negative area below the *x*-axis over $[0,\pi ].$ We have

$\begin{array}{ll}{\displaystyle \int_{\text{−}\pi}^{\pi}−5\;\text{sin}\;xdx} & =−5(\text{−}\text{cos}\;x){|}_{\text{−}\pi}^{\pi} \\ \\ \\ & =5\;\text{cos}\;x{|}_{\text{−}\pi}^{\pi} \\ & =[5\;\text{cos}\;\pi ]-[5\;\text{cos}(\text{−}\pi )] \\ & =−5-(−5) \\ & =0.\end{array}$  {eq:fs-id1170572621622}

> FIGURE {fig:CNX_Calc_Figure_05_04_004} src=../../media/CNX_Calc_Figure_05_04_006.jpg
> alt: A graph of the given function f(x) = -5 sin(x). The area under the function but above the x axis is shaded over [-pi, 0], and the area above the function and under the x axis is shaded over [0, pi].
> caption: The graph shows areas between a curve and the *x*-axis for an odd function.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170572337809} type= 
PROBLEM:
Integrate the function ${\displaystyle \int_{−2}^{2}{x}^{4}dx}.$
SOLUTION:
$\frac{64}{5}$
COMMENTARY: Hint
Integrate an even function.
:::
:::

## Key Concepts {section:key-concepts}
- The net change theorem states that when a quantity changes, the final value equals the initial value plus the integral of the rate of change. Net change can be a positive number, a negative number, or zero.
- The area under an even function over a symmetric interval can be calculated by doubling the area over the positive *x*-axis. For an odd function, the integral over a symmetric interval equals zero, because half the area is negative.

## Key Equations {section:key-equations}

> TABLE {tab:eip-500} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Net Change Theorem** | $F(b)=F(a)+{\displaystyle \int_{a}^{b}F'(x)dx}$ or ${\displaystyle \int_{a}^{b}F'(x)dx=F(b)-F(a)}$ |

##  {section:section-exercises}
Use basic integration formulas to compute the following antiderivatives or definite integrals.

:::exercise {fs-id1170571733932} type= 
PROBLEM:
${\displaystyle \int (\sqrt{x}-\frac{1}{\sqrt{x}})dx}$
SOLUTION:
${\displaystyle \int (\sqrt{x}-\frac{1}{\sqrt{x}})dx}={\displaystyle \int {x}^{1\text{/}2}dx-{\displaystyle \int {x}^{−1\text{/}2}dx}}=\frac{2}{3}{x}^{3\text{/}2}+{C}_{1}-2{x}^{1\text{/}2}+{C}_{2}=\frac{2}{3}{x}^{3\text{/}2}-2{x}^{1\text{/}2}+C$
:::

:::exercise {fs-id1170572233918} type= 
PROBLEM:
${\displaystyle \int ({e}^{2x}-\frac{1}{2}{e}^{x\text{/}2})dx}$
:::

:::exercise {fs-id1170572622517} type= 
PROBLEM:
${\displaystyle \int \frac{dx}{2x}}$
SOLUTION:
${\displaystyle \int \frac{dx}{2x}=\frac{1}{2}\text{ln}|x|+C}$
:::

:::exercise {fs-id1170572334286} type= 
PROBLEM:
${\displaystyle \int \frac{x-1}{{x}^{2}}dx}$
:::

:::exercise {fs-id1170572344266} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi}(\text{sin}\;x-\text{cos}\;x)dx}$
SOLUTION:
${\displaystyle \int_{0}^{\pi}\text{sin}\;xdx-{\displaystyle \int_{0}^{\pi}\text{cos}\;xdx}}=\text{−}\text{cos}\;x{|}_{0}^{\pi}-(\text{sin}\;x){|}_{0}^{\pi}=(\text{−}(−1)+1)-(0-0)=2$
:::

:::exercise {fs-id1170572444357} type= 
PROBLEM:
${\displaystyle \int_{0}^{\pi \text{/}2}(x-\text{sin}\;x)dx}$
:::

:::exercise {fs-id1170572293468} type= 
PROBLEM:
Write an integral that expresses the increase in the perimeter $P(s)$ of a square when its side length *s* increases from 2 units to 4 units and evaluate the integral.
SOLUTION:
$P(s)=4s,$ so $\frac{dP}{ds}=4$ and ${\displaystyle \int_{2}^{4}4ds=8}.$
:::

:::exercise {fs-id1170571613575} type= 
PROBLEM:
Write an integral that quantifies the change in the area $A(s)={s}^{2}$ of a square when the side length doubles from *S* units to 2*S* units and evaluate the integral.
:::

:::exercise {fs-id1170572554393} type= 
PROBLEM:
A regular *N*-gon (an *N*-sided polygon with sides that have equal length *s*, such as a pentagon or hexagon) has perimeter *Ns*. Write an integral that expresses the increase in perimeter of a regular *N*-gon when the length of each side increases from 1 unit to 2 units and evaluate the integral.
SOLUTION:
${\displaystyle \int_{1}^{2}Nds=N}$
:::

:::exercise {fs-id1170572628420} type= 
PROBLEM:
The area of a regular pentagon with side length $a>0$ is *pa*<sup>2</sup> with $p=\frac{1}{4}\sqrt{5(5+2\sqrt{5})}.$ The Pentagon in Washington, DC, has inner sides of length 360 ft and outer sides of length 920 ft. Write an integral to express the area of the roof of the Pentagon according to these dimensions and evaluate this area.
:::

:::exercise {fs-id1170572543692} type= 
PROBLEM:
A dodecahedron is a Platonic solid with a surface that consists of 12 pentagons, each of equal area. By how much does the surface area of a dodecahedron increase as the side length of each pentagon doubles from 1 unit to 2 units?
SOLUTION:
With *p* as in the previous exercise, each of the 12 pentagons increases in area from 2*p* to 4*p* units so the net increase in the area of the dodecahedron is 36*p* units.
:::

:::exercise {fs-id1170572543727} type= 
PROBLEM:
An icosahedron is a Platonic solid with a surface that consists of 20 equilateral triangles. By how much does the surface area of an icosahedron increase as the side length of each triangle doubles from *a* unit to 2*a* units?
:::

:::exercise {fs-id1170572184318} type= 
PROBLEM:
Write an integral that quantifies the change in the area of the surface of a cube when its side length doubles from *s* unit to 2*s* units and evaluate the integral.
SOLUTION:
$18{s}^{2}=6{\displaystyle \int_{s}^{2s}2xdx}$
:::

:::exercise {fs-id1170571653387} type= 
PROBLEM:
Write an integral that quantifies the increase in the volume of a cube when the side length doubles from *s* unit to 2*s* units and evaluate the integral.
:::

:::exercise {fs-id1170571653450} type= 
PROBLEM:
Write an integral that quantifies the increase in the surface area of a sphere as its radius doubles from *R* unit to 2*R* units and evaluate the integral.
SOLUTION:
$12\pi {R}^{2}=8\pi {\displaystyle \int_{R}^{2R}rdr}$
:::

:::exercise {fs-id1170571597447} type= 
PROBLEM:
Write an integral that quantifies the increase in the volume of a sphere as its radius doubles from *R* unit to 2*R* units and evaluate the integral.
:::

:::exercise {fs-id1170572480525} type= 
PROBLEM:
Suppose that a particle moves along a straight line with velocity $v(t)=4-2t,$ where $0\le t\le 2$ (in meters per second). Find the displacement at time *t* and the total distance traveled up to $t=2.$
SOLUTION:
$d(t)={\displaystyle \int_{0}^{t}v(s)ds=4t-{t}^{2}}.$ The total distance is $d(2)=4\;\text{m}\text{.}$
:::

:::exercise {fs-id1170572369345} type= 
PROBLEM:
Suppose that a particle moves along a straight line with velocity defined by $v(t)={t}^{2}-3t-18,$ where $0\le t\le 6$ (in meters per second). Find the displacement at time *t* and the total distance traveled up to $t=6.$
:::

:::exercise {fs-id1170572373389} type= 
PROBLEM:
Suppose that a particle moves along a straight line with velocity defined by $v(t)=|2t-6|,$ where $0\le t\le 6$ (in meters per second). Find the displacement at time *t* and the total distance traveled up to $t=6.$
SOLUTION:
$d(t)={\displaystyle \int_{0}^{t}v(s)ds}.$ For $t<3,d(t)={\displaystyle \int_{0}^{t}(6-2t)dt=6t-{t}^{2}}.$ For $t>3,d(t)=d(3)+{\displaystyle \int_{3}^{t}(2t-6)dt}=9+({t}^{2}-6t){|}_{3}^{6}.$   The total distance is $d(6)=18\;\text{m}\text{.}$
:::

:::exercise {fs-id1170571649968} type= 
PROBLEM:
Suppose that a particle moves along a straight line with acceleration defined by $a(t)=t-3,$ where $0\le t\le 6$ (in meters per second). Find the velocity and displacement at time *t* and the total distance traveled up to $t=6$ if $v(0)=3$ and $d(0)=0.$
:::

:::exercise {fs-id1170572235269} type= 
PROBLEM:
A ball is thrown upward from a height of 1.5 m at an initial speed of 40 m/sec. Acceleration resulting from gravity is −9.8 m/sec<sup>2</sup>. Neglecting air resistance, solve for the velocity $v(t)$ and the height $h(t)$ of the ball *t* seconds after it is thrown and before it returns to the ground.
SOLUTION:
$v(t)=40-9.8t\text{m/sec};h(t)=1.5+40t-4.9{t}^{2}$ m/s
:::

:::exercise {fs-id1170571712591} type= 
PROBLEM:
A ball is thrown upward from a height of 3 m at an initial speed of 60 m/sec. Acceleration resulting from gravity is −9.8 m/sec<sup>2</sup>. Neglecting air resistance, solve for the velocity $v(t)$ and the height $h(t)$ of the ball *t* seconds after it is thrown and before it returns to the ground.
:::

:::exercise {fs-id1170572443658} type= 
PROBLEM:
The area $A(t)$ of a circular shape is growing at a constant rate. If the area increases from 4*π* units to 9*π* units between times $t=2$ and $t=3,$ find the net change in the radius during that time.
SOLUTION:
The net increase is 1 unit.
:::

:::exercise {fs-id1170572419271} type= 
PROBLEM:
A spherical balloon is being inflated at a constant rate. If the volume of the balloon changes from 36*π* in.<sup>3</sup> to 288*π* in.<sup>3</sup> between time $t=30$ and $t=60$ seconds, find the net change in the radius of the balloon during that time.
:::

:::exercise {fs-id1170571699444} type= 
PROBLEM:
Water flows into a conical tank with cross-sectional area *πx*<sup>2</sup> at height *x* and volume $\frac{\pi {x}^{3}}{3}$ up to height *x*. If water flows into the tank at a rate of 1 m<sup>3</sup>/min, find the height of water in the tank after 5 min. Find the change in height between 5 min and 10 min.
SOLUTION:
At $t=5,$ the height of water is $x={(\frac{15}{\pi})}^{1\text{/}3}\;\text{m}\text{.}.$ The net change in height from $t=5$ to $t=10$ is ${(\frac{30}{\pi})}^{1\text{/}3}-{(\frac{15}{\pi})}^{1\text{/}3}$ m.
:::

:::exercise {fs-id1170571679806} type= 
PROBLEM:
A horizontal cylindrical tank has cross-sectional area $A(x)=4(6x-{x}^{2}){m}^{2}$ at height *x* meters above the bottom when $x\le 3.$
a. The volume *V* between heights *a* and *b* is ${\displaystyle \int_{a}^{b}A(x)dx}.$ Find the volume at heights between 2 m and 3 m.
b. Suppose that oil is being pumped into the tank at a rate of 50 L/min. Using the chain rule, $\frac{dx}{dt}=\frac{dx}{dV}\;\frac{dV}{dt},$ at how many meters per minute is the height of oil in the tank changing, expressed in terms of *x*, when the height is at *x* meters?
c. How long does it take to fill the tank to 3 m starting from a fill level of 2 m?
:::

:::exercise {fs-id1170571638194} type= 
PROBLEM:
The following table lists the electrical power in gigawatts—the rate at which energy is consumed—used in a certain city for different hours of the day, in a typical 24-hour period, with hour 1 corresponding to midnight to 1 a.m.

> TABLE {tab:fs-id1170571638210} cols=4 class=unnumbered
> summary: A table with four columns and thirteen rows. The first column has the label “Hour” and the values 1 through 12. The second column has the label “Power” and the values 28, 25, 24, 23, 24, 27, 29, 32, 34, 39, 42, and 46. The third column has the label “Hour” and the values 13 through 24. The fourth column has the label “Power” and the values 48, 49, 49, 50, 50, 50, 46, 43, 42, 40, 37, and 34.

| Hour | Power | Hour | Power |
| --- | --- | --- | --- |
| 1 | 28 | 13 | 48 |
| 2 | 25 | 14 | 49 |
| 3 | 24 | 15 | 49 |
| 4 | 23 | 16 | 50 |
| 5 | 24 | 17 | 50 |
| 6 | 27 | 18 | 50 |
| 7 | 29 | 19 | 46 |
| 8 | 32 | 20 | 43 |
| 9 | 34 | 21 | 42 |
| 10 | 39 | 22 | 40 |
| 11 | 42 | 23 | 37 |
| 12 | 46 | 24 | 34 |

Find the total amount of energy in gigawatt-hours (gW-h) consumed by the city in a typical 24-hour period.
SOLUTION:
The total daily power consumption is estimated as the sum of the hourly power rates, or 911 gW-h.
:::

:::exercise {fs-id1170571543244} type= 
PROBLEM:
The average residential electrical power use (in hundreds of watts) per hour is given in the following table.

> TABLE {tab:fs-id1170571543256} cols=4 class=unnumbered
> summary: A table with four columns and thirteen rows. The first column has the label “Hour” and the values 1 through 12. The second column has the label “Power” and the values 8, 6, 5, 4, 5, 6, 7, 8, 9, 10, 10, and 11. The third column has the label “Hour” and the values 13 through 24. The fourth column has the label “Power” and the values 12, 13, 14, 15, 17, 19, 18, 17, 16, 16, 13, and 11.

| Hour | Power | Hour | Power |
| --- | --- | --- | --- |
| 1 | 8 | 13 | 12 |
| 2 | 6 | 14 | 13 |
| 3 | 5 | 15 | 14 |
| 4 | 4 | 16 | 15 |
| 5 | 5 | 17 | 17 |
| 6 | 6 | 18 | 19 |
| 7 | 7 | 19 | 18 |
| 8 | 8 | 20 | 17 |
| 9 | 9 | 21 | 16 |
| 10 | 10 | 22 | 16 |
| 11 | 10 | 23 | 13 |
| 12 | 11 | 24 | 11 |

a. Compute the average total energy used in a day in kilowatt-hours (kWh).
b. If a ton of coal generates 1842 kWh, how long does it take for an average residence to burn a ton of coal?
c. Explain why the data might fit a plot of the form $p(t)=11.5-7.5\;\text{sin}(\frac{\pi t}{12}).$
:::

:::exercise {fs-id1170572643190} type= 
PROBLEM:
The data in the following table are used to estimate the average power output produced by Peter Sagan for each of the last 18 sec of Stage 1 of the 2012 {index:Tour de France}.

> TABLE {tab:fs-id1170572643212} cols=4
> title: Average Power Output
> caption: *Source*: sportsexercisengineering.com
> summary: A table with ten rows and four columns. The first column contains the label “Second” and the values 1 through 9. The second column contains the label “Watts” and the values 600, 500, 575, 1050, 925, 950, 1050, 950, and 1100. The third column contains the label “Second” and the values 10 through 18. The fourth column contains the label “Watts” and the values 1200, 1170, 1125, 1100, 1075, 1000, 950, 900, and 780.

| Second | Watts | Second | Watts |
| --- | --- | --- | --- |
| 1 | 600 | 10 | 1200 |
| 2 | 500 | 11 | 1170 |
| 3 | 575 | 12 | 1125 |
| 4 | 1050 | 13 | 1100 |
| 5 | 925 | 14 | 1075 |
| 6 | 950 | 15 | 1000 |
| 7 | 1050 | 16 | 950 |
| 8 | 950 | 17 | 900 |
| 9 | 1100 | 18 | 780 |

Estimate the net energy used in kilojoules (kJ), noting that 1W = 1 J/s, and the average power output by Sagan during this time interval.
SOLUTION:
17 kJ
:::

:::exercise {fs-id1170572399033} type= 
PROBLEM:
The data in the following table are used to estimate the average power output produced by Peter Sagan for each 15-min interval of Stage 1 of the 2012 Tour de France.

> TABLE {tab:fs-id1170572399049} cols=4
> title: Average Power Output
> caption: *Source*: sportsexercisengineering.com
> summary: A table with eleven rows and four columns. The first column has the label “Minutes” and the values 15, 30, 45, 60, 75, 90, 105, 120, 135, and 150. The second column has the label “Watts” and the values 200, 180, 190, 230, 240, 210, 210, 220, 210, and 150. The third column has the label “Minutes” and the values 165, 180, 195, 210, 225, 240, 255, 270, 285, and 300. The fourth column has the label “Watts” and the values 170, 220, 140, 225, 170, 210, 200, 220, 250, and 400.

| Minutes | Watts | Minutes | Watts |
| --- | --- | --- | --- |
| 15 | 200 | 165 | 170 |
| 30 | 180 | 180 | 220 |
| 45 | 190 | 195 | 140 |
| 60 | 230 | 210 | 225 |
| 75 | 240 | 225 | 170 |
| 90 | 210 | 240 | 210 |
| 105 | 210 | 255 | 200 |
| 120 | 220 | 270 | 220 |
| 135 | 210 | 285 | 250 |
| 150 | 150 | 300 | 400 |

Estimate the net energy used in kilojoules, noting that 1W = 1 J/s.
:::

:::exercise {fs-id1170571689730} type= class=material-set-2 
PROBLEM:
The distribution of incomes as of 2012 in the United States in $5000 increments is given in the following table. The *k*th row denotes the percentage of households with incomes between $$5000xk$ and $5000xk+4999.$ The row $k=40$ contains all households with income between $200,000 and $250,000.

> TABLE {tab:fs-id1170571689791} cols=8
> title: Income Distributions
> caption: *Source*: http://www.census.gov/prod/2013pubs/p60-245.pdf
> summary: A restructured table with ordered columns, each number sequence from 0 to 40 paired with its corresponding values, organized into 11 rows per column pair, allowing for empty cells at the end as necessary.

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 3.5 | 11 | 3.5 | 21 | 1.5 | 31 | 0.6 |
| 1 | 4.1 | 12 | 3.7 | 22 | 1.4 | 32 | 0.5 |
| 2 | 5.9 | 13 | 3.2 | 23 | 1.3 | 33 | 0.5 |
| 3 | 5.7 | 14 | 3.0 | 24 | 1.3 | 34 | 0.4 |
| 4 | 5.9 | 15 | 2.8 | 25 | 1.1 | 35 | 0.3 |
| 5 | 5.4 | 16 | 2.5 | 26 | 1.0 | 36 | 0.3 |
| 6 | 5.5 | 17 | 2.2 | 27 | 0.75 | 37 | 0.3 |
| 7 | 5.1 | 18 | 2.2 | 28 | 0.8 | 38 | 0.2 |
| 8 | 4.8 | 19 | 1.8 | 29 | 1.0 | 39 | 1.8 |
| 9 | 4.1 | 20 | 2.1 | 30 | 0.6 | 40 | 2.3 |
| 10 | 4.3 |  |  |  |  |  |  |

a. Estimate the percentage of U.S. households in 2012 with incomes less than $55,000.
b. What percentage of households had incomes exceeding $85,000?
c. Plot the data and try to fit its shape to that of a graph of the form $a(x+c){e}^{\text{−}b(x+e)}$ for suitable $a,b,c.$
SOLUTION:
a. 54.3%; b. 27.00%; c. The curve in the following plot is $2.35(t+3){e}^{−0.15(t+3)}.$

> IMAGE {img:fs-id1170572589270} src=../../media/CNX_Calc_Figure_05_04_202.jpg
> alt: A graph of the data and a function approximating the data. The function is a very close approximation.

:::

:::exercise {fs-id1170571661738} type= 
PROBLEM:
Newton’s law of gravity states that the gravitational force exerted by an object of mass *M* and one of mass *m* with centers that are separated by a distance *r* is $F=G\frac{mM}{{r}^{2}},$ with *G* an empirical constant $G=6.67x{10}^{−11}\;{m}^{3}\text{/}(kg\cdot {s}^{2}).$ The work done by a variable force over an interval $[a,b]$ is defined as $W={\displaystyle \int_{a}^{b}F(x)dx}.$ If Earth has mass $5.97219\;\times \;{10}^{24}$ and radius 6371 km, compute the amount of work to elevate a polar weather satellite of mass 1400 kg to its orbiting altitude of 850 km above Earth.
:::

:::exercise {fs-id1170572379119} type= 
PROBLEM:
For a given motor vehicle, the maximum achievable {index:deceleration} from braking is approximately 7 m/sec<sup>2</sup> on dry concrete. On wet asphalt, it is approximately 2.5 m/sec<sup>2</sup>. Given that 1 mph corresponds to 0.447 m/sec, find the total distance that a car travels in meters on dry concrete after the brakes are applied until it comes to a complete stop if the initial velocity is 67 mph (30 m/sec) or if the initial braking velocity is 56 mph (25 m/sec). Find the corresponding distances if the surface is slippery wet asphalt.
SOLUTION:
In dry conditions, with initial velocity ${v}_{0}=30$ m/s, $D=64.3$ and, if ${v}_{0}=25,D=44.64.$ In wet conditions, if ${v}_{0}=30,$ and $D=180$ and if ${v}_{0}=25,D=125.$
:::

:::exercise {fs-id1170571546776} type= 
PROBLEM:
John is a 25-year old man who weighs 160 lb. He burns $500-50t$ calories/hr while riding his bike for *t* hours. If an oatmeal cookie has 55 cal and John eats cookies at a rate of 4*t* calories during the *t*th hour, how many net calories has he lost after 3 hours riding his bike?
:::

:::exercise {fs-id1170571613601} type= 
PROBLEM:
Sandra is a 25-year old woman who weighs 120 lb. She burns $300-50t$ cal/hr while walking on her treadmill. Her caloric intake from drinking Gatorade is 100*t* calories/hour during the *t*th hour. What is her net decrease in calories after walking for 3 hours?
SOLUTION:
225 cal
:::

:::exercise {fs-id1170571613640} type= 
PROBLEM:
A motor vehicle has a maximum efficiency of 33 mpg at a cruising speed of 40 mph. The efficiency drops at a rate of 0.1 mpg/mph between 40 mph and 50 mph, and at a rate of 0.4 mpg/mph between 50 mph and 80 mph. What is the efficiency in miles per gallon if the car is cruising at 50 mph? What is the efficiency in miles per gallon if the car is cruising at 80 mph? If gasoline costs $3.50/gal, what is the cost of fuel to drive 50 mi at 40 mph, at 50 mph, and at 80 mph?
:::

:::exercise {fs-id1170572434960} type= 
PROBLEM:
Although some engines are more efficient at given a horsepower than others, on average, fuel efficiency decreases with horsepower at a rate of $1\text{/}25$ mpg/horsepower. If a typical 50-horsepower engine has an average fuel efficiency of 32 mpg, what is the average fuel efficiency of an engine with the following horsepower: 150, 300, 450?
SOLUTION:
$E(150)=28,E(300)=22,E(450)=16$
:::

:::exercise {fs-id1170572412290} type= 
PROBLEM:
**[T]** The following table lists the 2013 schedule of {index:federal income tax} versus taxable income.

> TABLE {tab:fs-id1170572412313} cols=3
> title: Federal Income Tax Versus Taxable Income
> caption: *Source*: http://www.irs.gov/pub/irs-prior/i1040tt--2013.pdf.
> summary: A table with three columns and eight rows. The first column has the label “Taxable Income Range” and the values $0–$8925, $8925–$36,250, $36,250–$87,850, $87,850–$183,250, $183,250–$398,350, $398,350–$400,000, and > $400,000. The second column has the label “The Tax Is…” and the values 10%, $892.50 + 15%, $4,991.25 + 25%, $1,891.25 + 28%, $44,603.25 + 33%, $115,586.25 + 35%, and $116,163.75 + 39.6%. The third column has the label “…Of the Amount Over” and the values $0, $8925, $36,250, $87,850, $183,250, $398,350, and $400,000.

| Taxable Income Range | The Tax Is … | … Of the Amount Over |
| --- | --- | --- |
| $0–$8925 | 10% | $0 |
| $8925–$36,250 | $892.50 + 15% | $8925 |
| $36,250–$87,850 | $4,991.25 + 25% | $36,250 |
| $87,850–$183,250 | $17,891.25 + 28% | $87,850 |
| $183,250–$398,350 | $44,603.25 + 33% | $183,250 |
| $398,350–$400,000 | $115,586.25 + 35% | $398,350 |
| > $400,000 | $116,163.75 + 39.6% | $400,000 |

Suppose that Steve just received a $10,000 raise. How much of this raise is left after federal taxes if Steve’s salary before receiving the raise was $40,000? If it was $90,000? If it was $385,000?
:::

:::exercise {fs-id1170572627149} type= 
PROBLEM:
**[T]** The following table provides hypothetical data regarding the level of service for a certain highway.

> TABLE {tab:fs-id1170572627169} cols=3
> summary: A table with three columns and seven rows. The first column has the label “Highway Speed Range (mph)” and the values >60, 60-57, 57-54, 54-46, 46-30, and <30. The second column has the label “Vehicles per Hour per Lane” and the values <600, 600-1000, 1000-1500, 1500-1900, 1900-2100, and unstable. The third column has the label “Density Range (vehicles / mi)” and values <10, 10-20, 20-30, 30-45, 45-70, and 70-200.

| Highway Speed Range (mph) | Vehicles per Hour per Lane | Density Range (vehicles/mi) |
| --- | --- | --- |
| > 60 | < 600 | < 10 |
| 60–57 | 600–1000 | 10–20 |
| 57–54 | 1000–1500 | 20–30 |
| 54–46 | 1500–1900 | 30–45 |
| 46–30 | 1900**–**2100 | 45–70 |
| <30 | Unstable | 70–200 |

a. Plot vehicles per hour per lane on the *x*-axis and highway speed on the *y*-axis.
b. Compute the average decrease in speed (in miles per hour) per unit increase in congestion (vehicles per hour per lane) as the latter increases from 600 to 1000, from 1000 to 1500, and from 1500 to 2100. Does the decrease in miles per hour depend linearly on the increase in vehicles per hour per lane?
c. Plot minutes per mile (60 times the reciprocal of miles per hour) as a function of vehicles per hour per lane. Is this function linear?
SOLUTION:
a.

> IMAGE {img:fs-id1170572129741} src=../../media/CNX_Calc_Figure_05_04_203.jpg
> alt: A plot of the given data, which decreases in a roughly concave down manner from 600 to 2200.

b. Between 600 and 1000 the average decrease in vehicles per hour per lane is −0.0075. Between 1000 and 1500 it is −0.006 per vehicles per hour per lane, and between 1500 and 2100 it is −0.04 vehicles per hour per lane. c.

> IMAGE {img:fs-id1170572129760} src=../../media/CNX_Calc_Figure_05_04_204.jpg
> alt: A graph of given data, showing that minutes per mile increases dramatically as wehicles per hour reaches 2000.

The graph is nonlinear, with minutes per mile increasing dramatically as vehicles per hour per lane reach 2000.
:::
For the next two exercises use the data in the following table, which displays {index:bald eagle} populations from 1963 to 2000 in the continental United States.

> TABLE {tab:fs-id1170572129791} cols=2
> title: Population of Breeding Bald Eagle Pairs
> caption: *Source*: http://www.fws.gov/Midwest/eagle/population/chtofprs.html.
> summary: A table with two columns and eight rows. The first column has the label “Year” and the values 1963, 1974, 1981, 1986, 1992, 1996, and 2000. The second column has the label “Population of Breeding Pairs of Bald Eagles” and the values 487, 791, 1188, 1875, 3749, 5094, and 6471.

| Year | Population of Breeding Pairs of Bald Eagles |
| --- | --- |
| 1963 | 487 |
| 1974 | 791 |
| 1981 | 1188 |
| 1986 | 1875 |
| 1992 | 3749 |
| 1996 | 5094 |
| 2000 | 6471 |

:::exercise {fs-id1170572330192} type= 
PROBLEM:
**[T]** The graph below plots the quadratic $p(t)=6.48{t}^{2}-80.3\;1t+585.69$ against the data in preceding table, normalized so that $t=0$ corresponds to 1963. Estimate the average number of bald eagles per year present for the 37 years by computing the average value of *p* over $[0,37].$

> IMAGE {img:fs-id1170572330276} src=../../media/CNX_Calc_Figure_05_04_205.jpg
> alt: A graph of the data and a quadratic function that closely approximates it.

:::

:::exercise {fs-id1170572129132} type= 
PROBLEM:
**[T]** The graph below plots the cubic $p(t)=0.07{t}^{3}+2.42{t}^{2}-25.63t+521.23$ against the data in the preceding table, normalized so that $t=0$ corresponds to 1963. Estimate the average number of bald eagles per year present for the 37 years by computing the average value of *p* over $[0,37].$

> IMAGE {img:fs-id1170572223539} src=../../media/CNX_Calc_Figure_05_04_206.jpg
> alt: A graph of the data and a cubic function that closely approximates it.

SOLUTION:
$\frac{1}{37}{\displaystyle \int_{0}^{37}p(t)dt=}\frac{0.07{(37)}^{3}}{4}+\frac{2.42{(37)}^{2}}{3}-\frac{25.63(37)}{2}+521.23\approx 2037$
:::

:::exercise {fs-id1170571568997} type= 
PROBLEM:
**[T]** Suppose you go on a road trip and record your speed at every half hour, as compiled in the following table. The best quadratic fit to the data is $q(t)=5{x}^{2}-11x+49\text{,}$ shown in the accompanying graph. Integrate *q* to estimate the total distance driven over the 3 hours.

> TABLE {tab:fs-id1170572309735} cols=2 class=unnumbered
> summary: A table with two columns and five rows. The first column has the label “Time (hr)” and the values 0 (start), 1, 2, and 3. The second column has the label “Speed (mph)” and the values 50, 40, 50, and 60.

| Time (hr) | Speed (mph) |
| --- | --- |
| 0 (start) | 50 |
| 1 | 40 |
| 2 | 50 |
| 3 | 60 |

> IMAGE {img:fs-id1170571547400} src=../../media/CNX_Calc_Figure_05_04_207.jpg
> alt: A graph of the data and a curve meant to approximate it.

:::
As a car accelerates, it does not accelerate at a constant rate; rather, the acceleration is variable. For the following exercises, use the following table, which contains the acceleration measured at every second as a driver merges onto a freeway.

> TABLE {tab:fs-id1170571628938} cols=2 class=unnumbered
> summary: A table with two columns and six rows. The first column has the label “Time (sec)” and values 1, 2, 3, 4, and 5. The second column has the label “Acceleration (mph/sec)” and the values 11.2, 10.6, 8.1, 5.4, and 0.

| Time (sec) | Acceleration (mph/sec) |
| --- | --- |
| 1 | 11.2 |
| 2 | 10.6 |
| 3 | 8.1 |
| 4 | 5.4 |
| 5 | 0 |

As a car accelerates, it does not accelerate at a constant rate; rather, the acceleration is variable. For the next three exercises use the following table, which contains the acceleration measured at every second as a driver merges onto a freeway.

> TABLE {tab:table-00001} cols=2

| Time (sec) | Acceleration (mph/sec) |
| --- | --- |
| 1 | 11.2 |
| 2 | 10.6 |
| 3 | 8.1 |
| 4 | 5.4 |
| 5 | 0 |

:::exercise {fs-id1170572582602} type= 
PROBLEM:
**[T]** The accompanying graph plots the best quadratic fit, $a(t)=−0.70{t}^{2}+1.44t+10.44,$ to the data from the preceding table. Compute the average value of $a(t)$ to estimate the average acceleration between $t=0$ and $t=5.$

> IMAGE {img:fs-id1170572351508} src=../../media/CNX_Calc_Figure_05_04_208.jpg
> alt: A graph of the data and a curve that closely approximates the data.

SOLUTION:
Average acceleration is $-\frac{0.7}{3}{t}^{3}+\frac{1.44}{2}{t}^{2}+10.44t{|}_{0}^{5}=-\frac{0.7}{3}({5}^{3})+10.44(5)\approx 41$ mph/s
:::

:::exercise {fs-id1170571638063} type= 
PROBLEM:
**[T]** Using your acceleration equation from the previous exercise, find the corresponding velocity equation. Assuming the initial velocity is 65 mph, find the velocity at time $t=0.$
:::

:::exercise {fs-id1170571610292} type= 
PROBLEM:
**[T]** Using your velocity equation from the previous exercise, find the corresponding distance equation, assuming your initial distance is 0 mi. How far did you travel while you accelerated your car? (*Hint:* You will need to convert time units.)
SOLUTION:
$s(t)=v(t)dt=\int (-\frac{7}{30}{t}^{3}+0.72{t}^{2}+10.44t+23.967)dt=-\frac{7}{120}{t}^{4}+\frac{0.72}{3}{t}^{3}+\frac{10.44}{2}{t}^{2}+23.967t+C=174.24\;\text{feet}$
:::

:::exercise {fs-id1170572448412} type= 
PROBLEM:
**[T]** The number of hamburgers sold at a restaurant throughout the day is given in the following table, with the accompanying graph plotting the best cubic fit to the data, $b(t)=0.12{t}^{3}-2.13{t}^{2}+12.13t+3.91,$ with $t=0$ corresponding to 9 a.m. and $t=12$ corresponding to 9 p.m. Compute the average value of $b(t)$ to estimate the average number of hamburgers sold per hour.

> TABLE {tab:fs-id1170572448506} cols=2 class=unnumbered
> summary: A table with two columns and six rows. The first column has the label “Hours Past Midnight” and values 9, 12, 15, 18, and 21. The second column has the label “No. of Burgers Sold” and values 3, 28, 20, 30, and 45.

| Hours Past Midnight | No. of Burgers Sold |
| --- | --- |
| 9 | 3 |
| 12 | 28 |
| 15 | 20 |
| 18 | 30 |
| 21 | 45 |

> IMAGE {img:fs-id1170572503243} src=../../media/CNX_Calc_Figure_05_04_209.jpg
> alt: A map of the data and a curve meant to approximate the data.

:::

:::exercise {fs-id1170572558028} type= 
PROBLEM:
**[T]** An athlete runs by a motion detector, which records her speed, as displayed in the following table. The best linear fit to this data, $ℓ(t)=−0.068t+5.14\text{,}$ is shown in the accompanying graph. Use the average value of $ℓ(t)$ between $t=0$ and $t=40$ to estimate the runner’s average speed.

> TABLE {tab:fs-id1170572558105} cols=2 class=unnumbered
> summary: A table with two columns and six rows. The first column has the label “Minutes” and the values 0, 10, 20, 30, and 40. The second column has the label “Speed (m/sec)” and the values 5, 4.8, 3.6, 3.0, and 2.5.

| Minutes | Speed (m/sec) |
| --- | --- |
| 0 | 5 |
| 10 | 4.8 |
| 20 | 3.6 |
| 30 | 3.0 |
| 40 | 2.5 |

> IMAGE {img:fs-id1170571814022} src=../../media/CNX_Calc_Figure_05_04_210.jpg
> alt: A graph of the data and a line to approximate the data.

SOLUTION:
$\frac{1}{40}{\displaystyle \int_{0}^{40}(−0.068t+5.14)dt}=-\frac{0.068(40)}{2}+5.14=3.78\text{m/sec}$
:::

## Glossary
- {def} **net change theorem**: if we know the rate of change of a quantity, the net change theorem says the future quantity is equal to the initial quantity plus the integral of the rate of change of the quantity

# The Logistic Equation

## Learning Objectives {section:learning-objectives}
- Describe the concept of environmental carrying capacity in the logistic model of population growth.
- Draw a direction field for a logistic equation and interpret the solution curves.
- Solve a logistic equation and interpret the results.

Differential equations can be used to represent the size of a population as it varies over time. We saw this in an earlier chapter in the section on exponential growth and decay, which is the simplest model. A more realistic model includes other factors that affect the growth of the population. In this section, we study the logistic differential equation and see how it applies to the study of population dynamics in the context of biology.

## Population Growth and Carrying Capacity
To model population growth using a differential equation, we first need to introduce some variables and relevant terms. The variable $t.$ will represent time. The units of time can be hours, days, weeks, months, or even years. Any given problem must specify the units used in that particular problem. The variable $P$ will represent population. Since the population varies over time, it is understood to be a function of time. Therefore we use the notation $P(t)$ for the population as a function of time. If $P(t)$ is a differentiable function, then the first derivative $\frac{dP}{dt}$ represents the instantaneous rate of change of the population as a function of time.
In [Exponential Growth and Decay](module:m53651), we studied the exponential growth and decay of populations and radioactive substances. An example of an exponential growth function is $P(t)={P}_{0}{e}^{rt}.$ In this function, $P(t)$ represents the population at time $t,{P}_{0}$ represents the {term:initial population} (population at time $t=0),$ and the constant $r>0$ is called the {term:growth rate}. [ref:CNX_Calc_Figure_08_04_001] shows a graph of $P(t)=100{e}^{0.03t}.$ Here ${P}_{0}=100$ and $r=0.03.$

> FIGURE {fig:CNX_Calc_Figure_08_04_001} src=../../media/CNX_Calc_Figure_08_04_001.jpg
> alt: A graph of an exponential function p(t) = 100 e ^ (0.03 t). It is an increasing concave up function starting in quadrant 2, crosses the y axis at (0, 100), and increases in quadrant 1.
> caption: An exponential growth model of population.

We can verify that the function $P(t)={P}_{0}{e}^{rt}$ satisfies the initial-value problem

$\frac{dP}{dt}=rP,\;P(0)={P}_{0}.$  {eq:fs-id1170572138153}

This differential equation has an interesting interpretation. The left-hand side represents the rate at which the population increases (or decreases). The right-hand side is equal to a positive constant multiplied by the current population. Therefore the differential equation states that the rate at which the population increases is proportional to the population at that point in time. Furthermore, it states that the constant of proportionality never changes.
One problem with this function is its prediction that as time goes on, the population grows without bound. This is unrealistic in a real-world setting. Various factors limit the rate of growth of a particular population, including birth rate, death rate, food supply, predators, and so on. The growth constant $r$ usually takes into consideration the birth and death rates but none of the other factors, and it can be interpreted as a net (birth minus death) percent growth rate per unit time. A natural question to ask is whether the population growth rate stays constant, or whether it changes over time. Biologists have found that in many biological systems, the population grows until a certain steady-state population is reached. This possibility is not taken into account with exponential growth. However, the concept of carrying capacity allows for the possibility that in a given area, only a certain number of a given organism or animal can thrive without running into resource issues.

:::note [definition] Definition
The {term:carrying capacity} of an organism in a given environment is defined to be the maximum population of that organism that the environment can sustain indefinitely.
:::
We use the variable $K$ to denote the carrying capacity. The growth rate is represented by the variable $r.$ Using these variables, we can define the logistic differential equation.

:::note [definition] Definition
Let $K$ represent the carrying capacity for a particular organism in a given environment, and let $r$ be a real number that represents the growth rate. The function $P(t)$ represents the population of this organism as a function of time $t,$ and the constant ${P}_{0}$ represents the initial population (population of the organism at time $t=0).$ Then the {term:logistic differential equation} is

$$ \frac{dP}{dt}=rP(1-\frac{P}{K}) $$  {eq:fs-id1170571555572}

:::

:::note [media-2] 
See this [website](http://www.openstax.org/l/20_logisticEq) for more information on the logistic equation.
:::
The logistic equation was first published by Pierre Verhulst in $1845.$ This differential equation can be coupled with the initial condition $P(0)={P}_{0}$ to form an initial-value problem for $P(t).$
Suppose that the initial population is small relative to the carrying capacity. Then $\frac{P}{K}$ is small, possibly close to zero. Thus, the quantity in parentheses on the right-hand side of [ref:fs-id1170571555572] is close to $1,$ and the right-hand side of this equation is close to $rP.$ If $r>0,$ then the population grows rapidly, resembling exponential growth.
However, as the population grows, the ratio $\frac{P}{K}$ also grows, because $K$ is constant. If the population remains below the carrying capacity, then $\frac{P}{K}$ is less than $1,$ so $1-\frac{P}{K}>0.$ Therefore the right-hand side of [ref:fs-id1170571555572] is still positive, but the quantity in parentheses gets smaller, and the growth rate decreases as a result. If $P=K$ then the right-hand side is equal to zero, and the population does not change.
Now suppose that the population starts at a value higher than the carrying capacity. Then $\frac{P}{K}>1,$ and $1-\frac{P}{K}<0.$ Then the right-hand side of [ref:fs-id1170571555572] is negative, and the population decreases. As long as $P>K,$ the population decreases. It never actually reaches $K$ because $\frac{dP}{dt}$ will get smaller and smaller, but the population approaches the carrying capacity as $t$ approaches infinity. This analysis can be represented visually by way of a phase line. A {term:phase line} describes the general behavior of a solution to an autonomous differential equation, depending on the initial condition. For the case of a carrying capacity in the logistic equation, the phase line is as shown in [ref:CNX_Calc_Figure_08_04_002].

> FIGURE {fig:CNX_Calc_Figure_08_04_002} src=../../media/CNX_Calc_Figure_08_04_006.jpg
> alt: A diagram of the phase line for the given differential equation. A vertical blue line with arrows on either end has two points marked, at P = K and P = 0, with K > 0. Red arrows point up between 0 and K and down below zero and above K.
> caption: A phase line for the differential equation $\frac{dP}{dt}=rP(1-\frac{P}{K}).$

This phase line shows that when $P$ is less than zero or greater than $K,$ the population decreases over time. When $P$ is between $0$ and $K,$ the population increases over time.

:::example {ex:fs-id1170572203846} Chapter Opener: Examining the Carrying Capacity of a Deer Population

:::exercise {fs-id1170572375702} type= 
PROBLEM:

> FIGURE {fig:fs-id1165043380726} src=../../media/CNX_Calc_Figure_08_04_008.jpg
> alt: This is a photograph of a deer.
> caption: (credit: modification of work by Rachel Kramer, Flickr)

Let’s consider the population of white-tailed deer (*Odocoileus virginianus*) in the state of Kentucky. The Kentucky Department of Fish and Wildlife Resources (KDFWR) sets guidelines for hunting and fishing in the state. Before the hunting season of $2004,$ it estimated a population of $900,000$ deer. Johnson notes: “A deer population that has plenty to eat and is not hunted by humans or other predators will double every three years.” (George Johnson, “The Problem of Exploding Deer Populations Has No Attractive Solutions,” January $12,2001,$ accessed April 9, 2015, http://www.txtwriter.com/onscience/Articles/deerpops.html.) This observation corresponds to a rate of increase $r=\frac{\text{ln}(2)}{3}=0.2311,$ so the approximate growth rate is $23.11\text{\%}$ per year*.* (This assumes that the population grows exponentially, which is reasonable––at least in the short term––with plentiful food supply and no predators.) The KDFWR also reports deer population densities for $32$ counties in Kentucky, the average of which is approximately $27$ deer per square mile. Suppose this is the deer density for the whole state $(39,732$ square miles). The carrying capacity $K$ is $39,732$ square miles times $27$ deer per square mile, or $1,072,764$ deer*.*
a. For this application, we have ${P}_{0}=900,000,K=1,072,764,$ and $r=0.2311.$ Substitute these values into [ref:fs-id1170571555572] and form the initial-value problem.
b. Solve the initial-value problem from part a.
c. According to this model, what will be the population in $3$ years? Recall that the doubling time predicted by Johnson for the deer population was $3$ years. How do these values compare?
d. Suppose the population managed to reach $1,200,000$ deer. What does the logistic equation predict will happen to the population in this scenario?
SOLUTION:
a. The initial value problem is

$\frac{dP}{dt}=0.2311P(1-\frac{P}{1,072,764}),\;P(0)=900,000.$
b. The logistic equation is an autonomous differential equation, so we can use the method of separation of variables.

Step 1: Setting the right-hand side equal to zero gives $P=0$ and $P=1,072,764.$ This means that if the population starts at zero it will never change, and if it starts at the carrying capacity, it will never change.

Step 2: Rewrite the differential equation and multiply both sides by:

$\begin{array}{rll}\frac{dP}{dt} & = & 0.2311P(\frac{1,072,764-P}{1,072,764}) \\ dP & = & 0.2311P(\frac{1,072,764-P}{1,072,764})\;dt.\end{array}$  {eq:fs-id1170572274861}

Divide both sides by $P(1,072,764-P)\text{:}$

$\frac{dP}{P(1,072,764-P)}=\frac{0.2311}{1,072,764}dt.$  {eq:fs-id1170572247794}

Step 3: Integrate both sides of the equation using partial fraction decomposition:

$\begin{array}{rll}{\displaystyle \int \frac{dP}{P(1,072,764-P)}} & = & {\displaystyle \int \frac{0.2311}{1,072,764}dt} \\ \frac{1}{1,072,764}{\displaystyle \int (\frac{1}{P}+\frac{1}{1,072,764-P})\;dP} & = & \frac{0.2311t}{1,072,764}+C \\ \frac{1}{1,072,764}\;(\text{ln}|P|-\text{ln}|1,072,764-P|) & = & \frac{0.2311t}{1,072,764}+C.\end{array}$  {eq:fs-id1170572215770}

Step 4: Multiply both sides by $1,072,764$ and use the quotient rule for logarithms:

$\text{ln}|\frac{P}{1,072,764-P}|=0.2311t+{C}_{1}.$  {eq:fs-id1170572228192}

Here ${C}_{1}=1,072,764C.$ Next exponentiate both sides and eliminate the absolute value:

$\begin{array}{rll}{e}^{\text{ln}|\frac{P}{1,072,764-P}|} & = & {e}^{0.2311t+{C}_{1}} \\ |\frac{P}{1,072,764-P}| & = & {C}_{2}{e}^{0.2311t} \\ \frac{P}{1,072,764-P} & = & {C}_{2}{e}^{0.2311t}.\end{array}$  {eq:fs-id1170572604570}

Here ${C}_{2}={e}^{{C}_{1}}$ but after eliminating the absolute value, it can be negative as well. Now solve for:

$\begin{array}{rll}P & = & {C}_{2}{e}^{0.2311t}(1,072,764-P). \\ P & = & 1,072,764{C}_{2}{e}^{0.2311t}-{C}_{2}P{e}^{0.2311t} \\ P+{C}_{2}P{e}^{0.2311t} & = & 1,072,764{C}_{2}{e}^{0.2311t} \\ P(1+{C}_{2}{e}^{0.2311t}) & = & 1,072,764{C}_{2}{e}^{0.2311t} \\ P(t) & = & \frac{1,072,764{C}_{2}{e}^{0.2311t}}{1+{C}_{2}{e}^{0.2311t}}.\end{array}$  {eq:fs-id1170571595894}

Step 5: To determine the value of ${C}_{2},$ it is actually easier to go back a couple of steps to where ${C}_{2}$ was defined. In particular, use the equation

$\frac{P}{1,072,764-P}={C}_{2}{e}^{0.2311t}.$  {eq:fs-id1170572444582}

The initial condition is $P(0)=900,000.$ Replace $P$ with $900,000$ and $t$ with zero:

$\begin{array}{rll}\frac{P}{1,072,764-P} & = & {C}_{2}{e}^{0.2311t} \\ \frac{900,000}{1,072,764-900,000} & = & {C}_{2}{e}^{0.2311(0)} \\ \frac{900,000}{172,764} & = & {C}_{2} \\ {C}_{2} & = & \frac{25,000}{4,799}\approx 5.209.\end{array}$  {eq:fs-id1170572547637}

Therefore

$\begin{array}{rl}P(t) & =\frac{1,072,764(\frac{25000}{4799})\;{e}^{0.2311t}}{1+(\frac{25000}{4799})\;{e}^{0.2311t}} \\ & =\frac{1,072,764(25000){e}^{0.2311t}}{4799+25000{e}^{0.2311t}}.\end{array}$  {eq:fs-id1170571681024}

Dividing the numerator and denominator by $25,000$ gives

$P(t)=\frac{1,072,764{e}^{0.2311t}}{0.19196+{e}^{0.2311t}}.$  {eq:fs-id1170572250982}

[ref:CNX_Calc_Figure_08_04_004] is a graph of this equation.

> FIGURE {fig:CNX_Calc_Figure_08_04_004} src=../../media/CNX_Calc_Figure_08_04_002.jpg
> alt: A graph of a logistic curve for the deer population with an initial population P_0 of 900,000. The graph begins as an increasing concave up function in quadrant two, changes to an increasing concave down function, crosses the x axis at (0, 900,000), and asymptotically approaches P = 1,072,764 as x goes to infinity.
> caption: Logistic curve for the deer population with an initial population of $900,000$ deer.

c. Using this model we can predict the population in $3$ years.

$P(3)=\frac{1,072,764{e}^{0.2311(3)}}{0.19196+{e}^{0.2311(3)}}\approx 978,830\;\text{deer}$  {eq:fs-id1170571777847}

This is far short of twice the initial population of $900,000.$ Remember that the doubling time is based on the assumption that the growth rate never changes, but the logistic model takes this possibility into account.
d. If the population reached $1,200,000$ deer, then the new initial-value problem would be

$\frac{dP}{dt}=0.2311P(1-\frac{P}{1,072,764}),\;P(0)=1,200,000.$  {eq:fs-id1170571813593}

The general solution to the differential equation would remain the same.

$P(t)=\frac{1,072,764{C}_{2}{e}^{0.2311t}}{1+{C}_{2}{e}^{0.2311t}}$  {eq:fs-id1170571655656}

To determine the value of the constant, return to the equation

$\frac{P}{1,072,764-P}={C}_{2}{e}^{0.2311t}.$  {eq:fs-id1170571771010}

Substituting the values $t=0$ and $P=1,200,000,$ you get

$\begin{array}{rll}{C}_{2}{e}^{0.2311(0)} & = & \frac{1,200,000}{1,072,764-1,200,000} \\ {C}_{2} & = & -\frac{100,000}{10,603}\approx -9.431.\end{array}$  {eq:fs-id1170572226824}

Therefore

$\begin{array}{rl}P(t) & =\frac{1,072,764{C}_{2}{e}^{0.2311t}}{1+{C}_{2}{e}^{0.2311t}} \\ & =\frac{1,072,764(-\frac{100,000}{10,603})\;{e}^{0.2311t}}{1+(-\frac{100,000}{10,603})\;{e}^{0.2311t}} \\ & =-\frac{107,276,400,000{e}^{0.2311t}}{100,000{e}^{0.2311t}-10,603} \\ & \approx \frac{10,117,551{e}^{0.2311t}}{9.43129{e}^{0.2311t}-1}.\end{array}$  {eq:fs-id1170572134608}

This equation is graphed in [ref:CNX_Calc_Figure_08_04_005].

> FIGURE {fig:CNX_Calc_Figure_08_04_005} src=../../media/CNX_Calc_Figure_08_04_003.jpg
> alt: A graph of the logistic curve for an initial population of 1,200,000 deer. The graph is a decreasing concave up function which begins in quadrant two, crosses the y axis at (0, 1,200,000), and asymptotically approaches P = 1,072,764 as x goes to infinity.
> caption: Logistic curve for the deer population with an initial population of $1,200,000$ deer.

:::
:::

## Solving the Logistic Differential Equation
The logistic differential equation is an autonomous differential equation, so we can use separation of variables to find the general solution, as we just did in [ref:fs-id1170572203846].
Step 1: Setting the right-hand side equal to zero leads to $P=0$ and $P=K$ as constant solutions. The first solution indicates that when there are no organisms present, the population will never grow. The second solution indicates that when the population starts at the carrying capacity, it will never change.
Step 2: Rewrite the differential equation in the form

$\frac{dP}{dt}=\frac{rP(K-P)}{K}.$  {eq:fs-id1170571593415}

Then multiply both sides by $dt$ and divide both sides by $P(K-P).$ This leads to

$\frac{dP}{P(K-P)}=\frac{r}{K}dt.$  {eq:fs-id1170572510106}

Multiply both sides of the equation by $K$ and integrate:

${\displaystyle \int \frac{K}{P(K-P)}dP}={\displaystyle \int r}dt.$  {eq:fs-id1170572231848}

The left-hand side of this equation can be integrated using partial fraction decomposition. We leave it to you to verify that

$\frac{K}{P(K-P)}=\frac{1}{P}+\frac{1}{K-P}.$  {eq:fs-id1170572342835}

Then the equation becomes

$\begin{array}{rll}{\displaystyle \int \frac{1}{P}+\frac{1}{K-P}dP} & = & {\displaystyle \int rdt} \\ \text{ln}|P|-\text{ln}|K-P| & = & rt+C \\ \text{ln}|\frac{P}{K-P}| & = & rt+C.\end{array}$  {eq:fs-id1170572169463}

Now exponentiate both sides of the equation to eliminate the natural logarithm:

$\begin{array}{rll}{e}^{\text{ln}|\frac{P}{K-P}|} & = & {e}^{rt+C} \\ |\frac{P}{K-P}| & = & {e}^{C}{e}^{rt}.\end{array}$  {eq:fs-id1170572468509}

We define ${C}_{1}={e}^{c}$ and, noting that $K,P>0$ and $P<K$, so that $\frac{P}{K-P}>0$ we can drop the absolute value sign, so that the equation becomes

$$ \frac{P}{K-P}={C}_{1}{e}^{rt}. $$  {eq:fs-id1170572478804}

To solve this equation for $P(t),$ first multiply both sides by $K-P$ and collect the terms containing $P$ on the left-hand side of the equation:

$\begin{array}{rll}P & = & {C}_{1}{e}^{rt}(K-P) \\ P & = & {C}_{1}K{e}^{rt}-{C}_{1}P{e}^{rt} \\ P+{C}_{1}P{e}^{rt} & = & {C}_{1}K{e}^{rt}.\end{array}$  {eq:fs-id1170572100061}

Next, factor $P$ from the left-hand side and divide both sides by the other factor:

$$ \begin{array}{rll}P(1+{C}_{1}{e}^{rt}) & = & {C}_{1}K{e}^{rt} \\ P(t) & = & \frac{{C}_{1}K{e}^{rt}}{1+{C}_{1}{e}^{rt}}.\end{array} $$  {eq:fs-id1170572624848}

The last step is to determine the value of ${C}_{1}.$ The easiest way to do this is to substitute $t=0$ and ${P}_{0}$ in place of $P$ in [ref:fs-id1170572478804] and solve for ${C}_{1}\text{:}$

$\begin{array}{rll}\frac{P}{K-P} & = & {C}_{1}{e}^{rt} \\ \frac{{P}_{0}}{K-{P}_{0}} & = & {C}_{1}{e}^{r(0)} \\ {C}_{1} & = & \frac{{P}_{0}}{K-{P}_{0}}.\end{array}$  {eq:fs-id1170571637473}

Finally, substitute the expression for ${C}_{1}$ into [ref:fs-id1170572624848]:

$P(t)=\frac{{C}_{1}K{e}^{rt}}{1+{C}_{1}{e}^{rt}}=\frac{\frac{{P}_{0}}{K-{P}_{0}}K{e}^{rt}}{1+\frac{{P}_{0}}{K-{P}_{0}}{e}^{rt}}$  {eq:fs-id1170572176233}

Now multiply the numerator and denominator of the right-hand side by $(K-{P}_{0})$ and simplify:

$\begin{array}{rl}P(t) & =\frac{\frac{{P}_{0}}{K-{P}_{0}}K{e}^{rt}}{1+\frac{{P}_{0}}{K-{P}_{0}}{e}^{rt}} \\ & =\frac{\frac{{P}_{0}}{K-{P}_{0}}K{e}^{rt}}{1+\frac{{P}_{0}}{K-{P}_{0}}{e}^{rt}}\cdot \frac{K-{P}_{0}}{K-{P}_{0}} \\ & =\frac{{P}_{0}K{e}^{rt}}{(K-{P}_{0})+{P}_{0}{e}^{rt}}.\end{array}$  {eq:fs-id1170572150636}

We state this result as a theorem.

:::note [theorem] Solution of the Logistic Differential Equation
Consider the logistic differential equation subject to an initial population of ${P}_{0}$ with carrying capacity $K$ and growth rate $r.$ The solution to the corresponding initial-value problem is given by

$$ P(t)=\frac{{P}_{0}K{e}^{rt}}{(K-{P}_{0})+{P}_{0}{e}^{rt}}. $$  {eq:fs-id1170571597871}

:::
Now that we have the solution to the initial-value problem, we can choose values for ${P}_{0},r,$ and $K$ and study the solution curve. For example, in [ref:fs-id1170572203846] we used the values $r=0.2311,K=1,072,764,$ and an initial population of $900,000$ deer. This leads to the solution

$\begin{array}{rl}P(t) & =\frac{{P}_{0}K{e}^{rt}}{(K-{P}_{0})+{P}_{0}{e}^{rt}} \\ & =\frac{900,000(1,072,764){e}^{0.2311t}}{(1,072,764-900,000)+900,000{e}^{0.2311t}} \\ & =\frac{900,000(1,072,764){e}^{0.2311t}}{172,764+900,000{e}^{0.2311t}}.\end{array}$  {eq:fs-id1170572454271}

Dividing top and bottom by $900,000$ gives

$P(t)=\frac{1,072,764{e}^{0.2311t}}{0.19196+{e}^{0.2311t}}.$  {eq:fs-id1170572212158}

This is the same as the original solution. The graph of this solution is shown again in blue in [ref:CNX_Calc_Figure_08_04_006], superimposed over the graph of the exponential growth model with initial population $900,000$ and growth rate $0.2311$ (appearing in green). The red dashed line represents the carrying capacity, and is a horizontal asymptote for the solution to the logistic equation.

> FIGURE {fig:CNX_Calc_Figure_08_04_006} src=../../media/CNX_Calc_Figure_08_04_004.jpg
> alt: A graph showing exponential and logistic growth for the same initial population of 900,000 organisms and growth rate of 23.11%. Both begin in quadrant two close to the x axis as increasing concave up curves. The exponential growth curve continues to grow, passing P = 1,072,764 while still in quadrant two. The logistic growth curve changes concavity, crosses the x axis at P_0 = 900,000, and asymptotically approaches P = 1,072,764.
> caption: A comparison of exponential versus logistic growth for the same initial population of $900,000$ organisms and growth rate of $23.11\text{\%}.$

Working under the assumption that the population grows according to the logistic differential equation, this graph predicts that approximately $20$ years earlier $(1984),$ the growth of the population was very close to exponential. The net growth rate at that time would have been around $23.1\text{\%}$ per year. As time goes on, the two graphs separate. This happens because the population increases, and the logistic differential equation states that the growth rate decreases as the population increases. At the time the population was measured $(2004),$ it was close to carrying capacity, and the population was starting to level off.
The solution to the logistic differential equation has a point of inflection. To find this point, set the second derivative equal to zero:

$\begin{array}{rll}P(t) & = & \frac{{P}_{0}K{e}^{rt}}{(K-{P}_{0})+{P}_{0}{e}^{rt}} \\ {P}^{'}(t) & = & \frac{r{P}_{0}K(K-{P}_{0}){e}^{rt}}{{((K-{P}_{0})+{P}_{0}{e}^{rt})}^{2}} \\ {P}^{''}(t) & = & \frac{{r}^{2}{P}_{0}K{(K-{P}_{0})}^{2}{e}^{rt}-{r}^{2}{P}_{0}{}^{2}K(K-{P}_{0}){e}^{2rt}}{{((K-{P}_{0})+{P}_{0}{e}^{rt})}^{3}} \\ & = & \frac{{r}^{2}{P}_{0}K(K-{P}_{0}){e}^{rt}((K-{P}_{0})-{P}_{0}{e}^{rt})}{{((K-{P}_{0})+{P}_{0}{e}^{rt})}^{3}}.\end{array}$  {eq:fs-id1170572307551}

Setting the numerator equal to zero,

${r}^{2}{P}_{0}K(K-{P}_{0}){e}^{rt}((K-{P}_{0})-{P}_{0}{e}^{rt})=0.$  {eq:fs-id1170572509015}

As long as ${P}_{0}≠K,$ the entire quantity before and including ${e}^{rt}$ is nonzero, so we can divide it out:

$(K-{P}_{0})-{P}_{0}{e}^{rt}=0.$  {eq:fs-id1170572147551}

Solving for $t,$

$\begin{array}{rll}{P}_{0}{e}^{rt} & = & K-{P}_{0} \\ {e}^{rt} & = & \frac{K-{P}_{0}}{{P}_{0}} \\ \text{ln}\;{e}^{rt} & = & \text{ln}\;\frac{K-{P}_{0}}{{P}_{0}} \\ rt & = & \text{ln}\;\frac{K-{P}_{0}}{{P}_{0}} \\ t & = & \frac{1}{r}\;\text{ln}\;\frac{K-{P}_{0}}{{P}_{0}}.\end{array}$  {eq:fs-id1170572404260}

Notice that if ${P}_{0}>K,$ then this quantity is undefined, and the graph does not have a point of inflection. In the logistic graph, the point of inflection can be seen as the point where the graph changes from concave up to concave down. This is where the “leveling off” starts to occur, because the net growth rate becomes slower as the population starts to approach the carrying capacity.

:::note [checkpoint] 

:::exercise {fs-id1170572604603} type= 
PROBLEM:
A population of rabbits in a meadow is observed to be $200$ rabbits at time $t=0.$ After a month, the rabbit population is observed to have increased by $4\text{\%}.$ Using an initial population of $200$ and a growth rate of $0.04,$ with a carrying capacity of $750$ rabbits,
a. Write the logistic differential equation and initial condition for this model.
b. Draw a slope field for this logistic differential equation, and sketch the solution corresponding to an initial population of $200$ rabbits.
c. Solve the initial-value problem for $P(t).$
d. Use the solution to predict the population after $1$ year.
SOLUTION:
a. $\frac{dP}{dt}=0.04(1-\frac{P}{750}),\;P(0)=200$
b. 

> IMAGE {img:fs-id1170572455347} src=../../media/CNX_Calc_Figure_08_04_005.jpg
> alt: A direction field with horizontal lines on the x axis and y = 15. The other lines are vertical, except for those curving into the x axis and y = 15. A solution is drawn that crosses the y axis at about (0, 4) and asymptotically approaches y = 15.

c. $P(t)=\frac{3000{e}^{.04t}}{11+4{e}^{.04t}}$
d. After $12$ months, the population will be $P(12)\approx 278$ rabbits.
COMMENTARY: Hint
First determine the values of $r,\;K,$ and ${P}_{0}.$ Then create the initial-value problem, draw the direction field, and solve the problem.
:::
:::

:::note [project] Student Project: Logistic Equation with a Threshold Population
An improvement to the logistic model includes a {term:threshold population}. The threshold population is defined to be the minimum population that is necessary for the species to survive. We use the variable $T$ to represent the threshold population. A differential equation that incorporates both the threshold population $T$ and carrying capacity $K$ is

$$ \frac{dP}{dt}=\text{−}rP(1-\frac{P}{K})(1-\frac{P}{T}) $$  {eq:fs-id1170571671426}

where $r$ represents the growth rate, as before.
1. The threshold population is useful to biologists and can be utilized to determine whether a given species should be placed on the endangered list. A group of Australian researchers say they have determined the threshold population for any species to survive: $5000$ adults. (Catherine Clabby, “A Magic Number,” *American Scientist* 98(1): 24, doi:10.1511/2010.82.24. accessed April 9, 2015, http://www.americanscientist.org/issues/pub/a-magic-number). Therefore we use $T=5000$ as the threshold population in this project. Suppose that the environmental carrying capacity in Montana for elk is $25,000.$ Set up [ref:fs-id1170571671426] using the carrying capacity of $25,000$ and threshold population of $5000.$ Assume an annual net growth rate of $18\text{\%}.$
2. Draw the direction field for the differential equation from step $1,$ along with several solutions for different initial populations. What are the constant solutions of the differential equation? What do these solutions correspond to in the original population model (i.e., in a biological context)?
3. What is the limiting population for each initial population you chose in step $2?$ (Hint: use the slope field to see what happens for various initial populations, i.e., look for the horizontal asymptotes of your solutions.)
4. This equation can be solved using the method of separation of variables. However, it is very difficult to get the solution as an explicit function of $t.$ Using an initial population of $18,000$ elk, solve the initial-value problem and express the solution as an implicit function of $t,$ or solve the general initial-value problem, finding a solution in terms of $r,K,T,\text{and}\;{P}_{0}.$
:::

## Key Concepts {section:key-concepts}
- When studying population functions, different assumptions—such as exponential growth, logistic growth, or threshold population—lead to different rates of growth.
- The logistic differential equation incorporates the concept of a carrying capacity. This value is a limiting value on the population for any given environment.
- The logistic differential equation can be solved for any positive growth rate, initial population, and carrying capacity.

## Key Equations {section:key-equations}

> TABLE {tab:eip-518} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Logistic differential equation and initial-value problem** | $\frac{dP}{dt}=rP(1-\frac{P}{K}),\;P(0)={P}_{0}$ |
| **Solution to the logistic differential equation/initial-value problem** | $P(t)=\frac{{P}_{0}K{e}^{rt}}{(K-{P}_{0})+{P}_{0}{e}^{rt}}$ |
| **Threshold population model** | $\frac{dP}{dt}=\text{−}rP(1-\frac{P}{K})(1-\frac{P}{T})$ |

##  {section:section-exercises}
For the following problems, consider the logistic equation in the form $P'=CP-{P}^{2}.$ Draw the directional field and find the stability of the equilibria.

:::exercise {fs-id1170572452453} type= 
PROBLEM:
$C=3$
:::

:::exercise {fs-id1170572547893} type= 
PROBLEM:
$C=0$
SOLUTION:

> IMAGE {img:fs-id1170572130077} src=../../media/CNX_Calc_Figure_08_04_202.jpg
> alt: A direction field with arrows pointing to the right. The arrows are horizontal along the x axis. The arrows point down above the x axis and below the x axis. The further away the arrows are from the x axis, the more vertical the lines become.

$P=0$ semi-stable
:::

:::exercise {fs-id1170572505465} type= 
PROBLEM:
$C=−3$
:::

:::exercise {fs-id1170572480690} type= 
PROBLEM:
Solve the logistic equation for $C=10$ and an initial condition of $P(0)=2.$
SOLUTION:
$P=\frac{10{e}^{10x}}{{e}^{10x}+4}$
:::

:::exercise {fs-id1170571807840} type= 
PROBLEM:
Solve the logistic equation for $C=−10$ and an initial condition of $P(0)=2.$
:::

:::exercise {fs-id1170571775807} type= 
PROBLEM:
A population of deer inside a park has a carrying capacity of $200$ and a growth rate of $2\text{\%}.$ If the initial population is $50$ deer, what is the population of deer at any given time?
SOLUTION:
$P(t)=\frac{10000{e}^{0.02t}}{150+50{e}^{0.02t}}$
:::

:::exercise {fs-id1170571612329} type= 
PROBLEM:
A population of frogs in a pond has a growth rate of $5\text{\%}.$ If the initial population is $1000$ frogs and the carrying capacity is $6000,$ what is the population of frogs at any given time?
:::

:::exercise {fs-id1170571558918} type= 
PROBLEM:
**[T]** Bacteria grow at a rate of $20\text{\%}$ per hour in a petri dish. If there is initially one bacterium and a carrying capacity of $1$ million cells, how long does it take to reach $500,000$ cells?
SOLUTION:
$69$ hours $5$ minutes
:::

:::exercise {fs-id1170572222301} type= 
PROBLEM:
**[T]** Rabbits in a park have an initial population of $10$ and grow at a rate of $4\text{\%}$ per year. If the carrying capacity is $500,$ at what time does the population reach $100$ rabbits?
:::

:::exercise {fs-id1170572420405} type= 
PROBLEM:
**[T]** Two monkeys are placed on an island. After $5$ years, there are $8$ monkeys, and the estimated carrying capacity is $25$ monkeys. When does the population of monkeys reach $16$ monkeys?
SOLUTION:
$8$ years $11$ months
:::

:::exercise {fs-id1170572479560} type= 
PROBLEM:
**[T]** A butterfly sanctuary is built that can hold $2000$ butterflies, and $400$ butterflies are initially moved in. If after $2$ months there are now $800$ butterflies, when does the population get to $1500$ butterflies?
:::
The following problems consider the logistic equation with an added term for depletion, either through death or emigration.

:::exercise {fs-id1170571698875} type= 
PROBLEM:
**[T]** The population of trout in a pond is given by $P'=0.4P(1-\frac{P}{10000})-400,$ where $400$ trout are caught per year. Use your calculator or computer software to draw a directional field and draw a few sample solutions. What do you expect for the behavior?
SOLUTION:

> IMAGE {img:fs-id1170571641840} src=../../media/CNX_Calc_Figure_08_04_204.jpg
> alt: A direction field with arrows down for P < 1,000, pointing up for 1,000 < P < 8,500, and pointing down for P > 8,500. Right above P = 8,500, the arrows point down and to the right.

:::

:::exercise {fs-id1170572206108} type= 
PROBLEM:
In the preceding problem, what are the stabilities of the equilibria $0<{P}_{1}<{P}_{2}?$
:::

:::exercise {fs-id1170572601342} type= 
PROBLEM:
**[T]** For the preceding problem, use software to generate a directional field for the value $f=400.$ What are the stabilities of the equilibria?
SOLUTION:

> IMAGE {img:fs-id1170572342242} src=../../media/CNX_Calc_Figure_08_04_205.jpg
> alt: A direction field with arrows pointing down and to the right. Around y = 4,000, the arrows are more horizontal. The further the arrows are from this line, the more vertical the arrows become.

${P}_{1}$ semi-stable
:::

:::exercise {fs-id1170572217697} type= 
PROBLEM:
**[T]** For the preceding problems, use software to generate a directional field for the value $f=600.$ What are the stabilities of the equilibria?
:::

:::exercise {fs-id1170571599486} type= 
PROBLEM:
**[T]** For the preceding problems, consider the case where a certain number of fish are added to the pond, or $f=−200.$ What are the nonnegative equilibria and their stabilities?
SOLUTION:

> IMAGE {img:fs-id1170571599564} src=../../media/CNX_Calc_Figure_08_04_207.jpg
> alt: A direction field with arrows pointing up for P < 10,000 and arrows pointing down for P > 10,000.

${P}_{2}>0$ stable
:::
It is more likely that the amount of fishing is governed by the current number of fish present, so instead of a constant number of fish being caught, the rate is proportional to the current number of fish present, with proportionality constant $k,$ as
$P'=0.4P(1-\frac{P}{10000})-kP.$

:::exercise {fs-id1170572388176} type= 
PROBLEM:
**[T]** For the previous fishing problem, draw a directional field assuming $k=0.1.$ Draw some solutions that exhibit this behavior. What are the equilibria and what are their stabilities?
:::

:::exercise {fs-id1170572554552} type= 
PROBLEM:
**[T]** Use software or a calculator to draw directional fields for $k=0.4.$ What are the nonnegative equilibria and their stabilities?
SOLUTION:

> IMAGE {img:fs-id1170571637089} src=../../media/CNX_Calc_Figure_08_04_208.jpg
> alt: A direction field with arrows pointing to the right at P = 0. Below 0, the arrows point down and to the right. Above 0, the arrows point down and to the right. The further away from 0, the more vertical the arrows become.

${P}_{1}=0$ is semi-stable
:::

:::exercise {fs-id1170572440081} type= 
PROBLEM:
**[T]** Use software or a calculator to draw directional fields for $k=0.6.$ What are the equilibria and their stabilities?
:::

:::exercise {fs-id1170571592872} type= 
PROBLEM:
Solve this equation, assuming a value of $k=0.05$ and an initial condition of $2000$ fish.
SOLUTION:
$P(t)=\frac{3500}{(4+3{e}^{-035t})}$
:::

:::exercise {fs-id1170571621575} type= 
PROBLEM:
Solve this equation, assuming a value of $k=0.05$ and an initial condition of $5000$ fish.
:::
The following problems add in a minimal threshold value for the species to survive, $T,$ which changes the differential equation to $P'(t)=rP(1-\frac{P}{K})(1-\frac{T}{P}).$

:::exercise {fs-id1170572455069} type= 
PROBLEM:
Draw the directional field of the threshold logistic equation, assuming $K=10,r=0.1,T=2.$ When does the population survive? When does it go extinct?
SOLUTION:

> IMAGE {img:fs-id1170571655991} src=../../media/CNX_Calc_Figure_08_04_210.jpg
> alt: A direction field with arrows pointing horizontally to the right along y = 2 and y = 10. For P < 2, the arrows point down and to the right. For 2 < P < 10, the arrows point up and to the right. For P > 10, the arrows point down and to the right. The further the arrows are from 2 and 10, the steeper they become, and the closer they are from 2 and 10, the more horizontal the arrows become.

:::

:::exercise {fs-id1170572540852} type= 
PROBLEM:
For the preceding problem, solve the logistic threshold equation, assuming the initial condition $P(0)={P}_{0}.$
:::

:::exercise {fs-id1170571609179} type= 
PROBLEM:
Bengal tigers in a conservation park have a carrying capacity of $100$ and need a minimum of $10$ to survive. If they grow in population at a rate of $1\text{\%}$ per year, with an initial population of $15$ tigers, solve for the number of tigers present.
SOLUTION:
$P(t)=\frac{850+500{e}^{0.009t}}{85+5{e}^{0.009t}}$
:::

:::exercise {fs-id1170572593883} type= 
PROBLEM:
A forest containing ring-tailed lemurs in Madagascar has the potential to support $5000$ individuals, and the lemur population grows at a rate of $5\text{\%}$ per year. A minimum of $500$ individuals is needed for the lemurs to survive. Given an initial population of $600$ lemurs, solve for the population of lemurs.
:::

:::exercise {fs-id1170571532520} type= 
PROBLEM:
The population of Florida panthers in the southwestern tip of Florida has an estimated carrying capacity of $250$ and grows at a rate of $0.25\text{\%}$ per year and there must be $25$ for the population to survive. With an initial population of $30$ Florida panthers, how many years will it take to get the Florida panthers off the endangered species list (at least $100)?$
SOLUTION:
$13$ years months
:::
The following questions consider the {index:Gompertz equation}, a modification for logistic growth, which is often used for modeling cancer growth, specifically the number of tumor cells.

:::exercise {fs-id1170572592083} type= 
PROBLEM:
The Gompertz equation is given by $P(t)'=\alpha \;\text{ln}\;(\frac{K}{P(t)})P(t).$ Draw the directional fields for this equation assuming all parameters are positive, and given that $K=1.$
:::

:::exercise {fs-id1170572089817} type= 
PROBLEM:
Assume that for a population, $K=1000$ and $\alpha =0.05.$ Draw the directional field associated with this differential equation and draw a few solutions. What is the behavior of the population?
SOLUTION:

> IMAGE {img:fs-id1170572618275} src=../../media/CNX_Calc_Figure_08_04_212.jpg
> alt: A direction field with arrows pointing down and to the right for P < 0, up for 0 < P < 1,000, and down for P > 1,000. The further the arrows are from P = 0 and P = 1,000, the more vertical they become, and the closer they are, the more horizontal they are.

:::

:::exercise {fs-id1170572451566} type= 
PROBLEM:
Solve the Gompertz equation for generic $\alpha$ and $K$ and $P(0)={P}_{0}.$
:::

:::exercise {fs-id1170572505424} type= 
PROBLEM:
**[T]** The Gompertz equation has been used to model tumor growth in the human body. Starting from one tumor cell on day $1$ and assuming $\alpha =0.1$ and a carrying capacity of $10$ million cells, how long does it take to reach “detection” stage at $5$ million cells?
SOLUTION:
$31.465$ days
:::

:::exercise {fs-id1170571563225} type= 
PROBLEM:
**[T]** It is estimated that the world human population reached $3$ billion people in $1959$ and $6$ billion in $1999.$ Assuming a carrying capacity of $16$ billion humans, write and solve the differential equation for logistic growth, and determine what year the population reached $7$ billion.
:::

:::exercise {fs-id1170571704355} type= 
PROBLEM:
**[T]** It is estimated that the world human population reached $3$ billion people in $1959$ and $6$ billion in $1999.$ Assuming a carrying capacity of $16$ billion humans, write and solve the differential equation for Gompertz growth, and determine what year the population reached $7$ billion. Was logistic growth or Gompertz growth more accurate, considering world population reached $7$ billion on October $31,2011?$
SOLUTION:
September $2008$
:::

:::exercise {fs-id1170572455751} type= 
PROBLEM:
Show that the population grows fastest when it reaches half the carrying capacity for the logistic equation $P'=rP(1-\frac{P}{K}).$
:::

:::exercise {fs-id1170571557226} type= 
PROBLEM:
When does population increase the fastest in the threshold logistic equation $P'(t)=rP(1-\frac{P}{K})(1-\frac{T}{P})?$
SOLUTION:
$\frac{K+T}{2}$
:::

:::exercise {fs-id1170571598386} type= 
PROBLEM:
When does population increase the fastest for the Gompertz equation $P(t)'=\alpha \;\text{ln}\;(\frac{K}{P(t)})P(t)?$
:::
Below is a table of the populations of whooping cranes in the wild from $1940\;\text{to}\;2000.$ The population rebounded from near extinction after conservation efforts began. The following problems consider applying population models to fit the data. Assume a carrying capacity of $10,000$ cranes. Fit the data assuming years since $1940$ (so your initial population at time $0$ would be $22$ cranes).

> TABLE {tab:fs-id1170571715330} cols=2 class=unnumbered
> title: *Source:* https://www.savingcranes.org/images/stories/site_images/conservation/whooping_crane/pdfs/historic_wc_numbers.pdf
> summary: A table with eight rows and two columns. The first column has the label “Year (years since conservation began)” and values 1940 (0), 1950 (10), and so on to 2000 (60), increasingly by 10. The second column has the label “Whooping Crane Population” and the values 22, 31, 36, 57, 91, 159, and 256

| Year (years since conservation began) | Whooping Crane Population |
| --- | --- |
| $1940(0)$ | $22$ |
| $1950(10)$ | $31$ |
| $1960(20)$ | $36$ |
| $1970(30)$ | $57$ |
| $1980(40)$ | $91$ |
| $1990(50)$ | $159$ |
| $2000(60)$ | $256$ |

:::exercise {fs-id1170572468867} type= 
PROBLEM:
Find the equation and parameter $r$ that best fit the data for the logistic equation.
SOLUTION:
$r=0.0405$
:::

:::exercise {fs-id1170571699409} type= 
PROBLEM:
Find the equation and parameters $r$ and $T$ that best fit the data for the threshold logistic equation.
:::

:::exercise {fs-id1170571769920} type= 
PROBLEM:
Find the equation and parameter $\alpha$ that best fit the data for the Gompertz equation.
SOLUTION:
$\alpha =0.0081$
:::

:::exercise {fs-id1170571637502} type= 
PROBLEM:
Graph all three solutions and the data on the same graph. Which model appears to be most accurate?
:::

:::exercise {fs-id1170572242197} type= 
PROBLEM:
Using the three equations found in the previous problems, estimate the population in $2010$ (year $70$ after conservation). The real population measured at that time was $437.$ Which model is most accurate?
SOLUTION:
Logistic: $361,$ Threshold: $436,$ Gompertz: $309.$
:::

## Glossary
- {def} **carrying capacity**: the maximum population of an organism that the environment can sustain indefinitely
- {def} **growth rate**: the constant $r>0$ in the exponential growth function $P(t)={P}_{0}{e}^{rt}$
- {def} **initial population**: the population at time $t=0$
- {def} **logistic differential equation**: a differential equation that incorporates the carrying capacity $K$ and growth rate $r$ into a population model
- {def} **phase line**: a visual representation of the behavior of solutions to an autonomous differential equation subject to various initial conditions
- {def} **threshold population**: the minimum population that is necessary for a species to survive

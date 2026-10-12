# Exponential Growth and Decay

## Learning Objectives {section:learning-objectives}
- Use the exponential growth model in applications, including population growth and compound interest.
- Explain the concept of doubling time.
- Use the exponential decay model in applications, including radioactive decay and Newton’s law of cooling.
- Explain the concept of half-life.

One of the most prevalent applications of exponential functions involves growth and decay models. Exponential growth and decay show up in a host of natural applications. From population growth and continuously compounded interest to radioactive decay and Newton’s law of cooling, exponential functions are ubiquitous in nature. In this section, we examine exponential growth and decay in the context of some of these applications.

## Exponential Growth Model
Many systems exhibit exponential growth. These systems follow a model of the form $y={y}_{0}{e}^{kt},$ where ${y}_{0}$ represents the initial state of the system and $k$ is a positive constant, called the *growth constant*. Notice that in an exponential growth model, we have

$$ {y}^{'}=k{y}_{0}{e}^{kt}=ky. $$  {eq:fs-id1167793543548}

That is, the rate of growth is proportional to the current function value. This is a key feature of exponential growth. [ref:fs-id1167793543548] involves derivatives and is called a *differential equation.* We learn more about differential equations in [Introduction to Differential Equations](module:m53696).

:::note [rule] Rule: Exponential Growth Model
Systems that exhibit {term:exponential growth} increase according to the mathematical model

$y={y}_{0}{e}^{kt},$  {eq:fs-id1167793951818}

where ${y}_{0}$ represents the initial state of the system and $k>0$ is a constant, called the *growth constant*.
:::
{index:Population growth} is a common example of exponential growth. Consider a population of bacteria, for instance. It seems plausible that the rate of population growth would be proportional to the size of the population. After all, the more bacteria there are to reproduce, the faster the population grows. [ref:CNX_Calc_Figure_06_08_001] and [ref:fs-id1167793939650] represent the growth of a population of bacteria with an initial population of $200$ bacteria and a growth constant of $0.02.$ Notice that after only $2$ hours $(120$ minutes), the population is $10$ times its original size!

> FIGURE {fig:CNX_Calc_Figure_06_08_001} src=../../media/CNX_Calc_Figure_06_08_001.jpg
> alt: This figure is a graph. It is the exponential curve for y=200e^0.02t. It is in the first quadrant and an increasing function. It begins on the y-axis.
> caption: An example of exponential growth for bacteria.

> TABLE {tab:fs-id1167793939650} cols=2
> title: Exponential Growth of a Bacterial Population
> summary: This table has two columns. The columns are labeled Time (minutes) and Population size (no. of bacteria). The times start at 10 and increase in increments of 10 minutes up until 120 minutes. The number of bacteria start at 244 and increase to 2205.

| **Time (min)** | **Population Size (no. of bacteria)** |
| --- | --- |
| $10$ | $244$ |
| $20$ | $298$ |
| $30$ | $364$ |
| $40$ | $445$ |
| $50$ | $544$ |
| $60$ | $664$ |
| $70$ | $811$ |
| $80$ | $991$ |
| $90$ | $1210$ |
| $100$ | $1478$ |
| $110$ | $1805$ |
| $120$ | $2205$ |

Note that we are using a continuous function to model what is inherently discrete behavior. At any given time, the real-world population contains a whole number of bacteria, although the model takes on noninteger values. When using exponential growth models, we must always be careful to interpret the function values in the context of the phenomenon we are modeling.

:::example {ex:fs-id1167794022966} Population Growth

:::exercise {fs-id1167793957317} type= 
PROBLEM:
Consider the population of bacteria described earlier. This population grows according to the function $f(t)=200{e}^{0.02t},$ where *t* is measured in minutes. How many bacteria are present in the population after $5$ hours $(300$ minutes)? When does the population reach $100,000$ bacteria?
SOLUTION:
We have $f(t)=200{e}^{0.02t}.$ Then

$f(300)=200{e}^{0.02(300)}\approx 80,686.$  {eq:fs-id1167793375750}

There are $80,686$ bacteria in the population after $5$ hours.
To find when the population reaches $100,000$ bacteria, we solve the equation

$\begin{array}{rll}100,000 & = & 200{e}^{0.02t} \\ 500 & = & {e}^{0.02t} \\ \text{ln}\;500 & = & 0.02t \\ t & = & \frac{\text{ln}\;500}{0.02}\approx 310.73.\end{array}$  {eq:fs-id1167793370770}

The population reaches $100,000$ bacteria after $310.73$ minutes.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793245191} type= 
PROBLEM:
Consider a population of bacteria that grows according to the function $f(t)=500{e}^{0.05t},$ where $t$ is measured in minutes. How many bacteria are present in the population after 4 hours? When does the population reach $100$ million bacteria?
SOLUTION:
There are $81,377,396$ bacteria in the population after $4$ hours. The population reaches $100$ million bacteria after $244.12$ minutes.
COMMENTARY: Hint
Use the process from the previous example.
:::
:::
Let’s now turn our attention to a financial application: {index:compound interest}. Interest that is not compounded is called {index:*simple interest*}. Simple interest is paid once, at the end of the specified time period (usually $1$ year). So, if we put $\text{\$}1000$ in a savings account earning $2\text{\%}$ simple interest per year, then at the end of the year we have

$1000(1+0.02)=\text{\$}1020.$  {eq:fs-id1167793294235}

Compound interest is paid multiple times per year, depending on the compounding period. Therefore, if the bank compounds the interest every $6$ months, it credits half of the year’s interest to the account after $6$ months. During the second half of the year, the account earns interest not only on the initial $\text{\$}1000,$ but also on the interest earned during the first half of the year. Mathematically speaking, at the end of the year, we have

$1000{(1+\frac{0.02}{2})}^{2}=\text{\$}1020.10.$  {eq:fs-id1167794188340}

Similarly, if the interest is compounded every $4$ months, we have

$1000{(1+\frac{0.02}{3})}^{3}=\text{\$}1020.13,$  {eq:fs-id1167794337261}

and if the interest is compounded daily $(365$ times per year), we have $\text{\$}1020.20.$ If we extend this concept, so that the interest is compounded continuously, after $t$ years we have

$1000\lim_{n\to \infty}{(1+\frac{0.02}{n})}^{nt}.$  {eq:fs-id1167794059054}

Now let’s manipulate this expression so that we have an exponential growth function. Recall that the number $e$ can be expressed as a limit:

$e=\lim_{m\to \infty}{(1+\frac{1}{m})}^{m}.$  {eq:fs-id1167794075520}

Based on this, we want the expression inside the parentheses to have the form $(1+1\text{/}m).$ Let $n=0.02m.$ Note that as $n\to \infty ,$ $m\to \infty$ as well. Then we get

$1000\lim_{n\to \infty}{(1+\frac{0.02}{n})}^{nt}=1000\lim_{m\to \infty}{(1+\frac{0.02}{0.02m})}^{0.02mt}=1000{[\lim_{m\to \infty}{(1+\frac{1}{m})}^{m}]}^{0.02t}.$  {eq:fs-id1167794119172}

We recognize the limit inside the brackets as the number $e.$ So, the balance in our bank account after $t$ years is given by $1000{e}^{0.02t}.$ Generalizing this concept, we see that if a bank account with an initial balance of $\text{\$}P$ earns interest at a rate of $r\text{\%},$ compounded continuously, then the balance of the account after $t$ years is

$\text{Balance}=P{e}^{rt}.$  {eq:fs-id1167793257856}

:::example {ex:fs-id1167793879685} Compound Interest

:::exercise {fs-id1167793879688} type= 
PROBLEM:
A 25-year-old student is offered an opportunity to invest some money in a retirement account that pays $5\text{\%}$ annual interest compounded continuously. How much does the student need to invest today to have $\text{\$}1$ million when she retires at age $65?$ What if she could earn $6\text{\%}$ annual interest compounded continuously instead?
SOLUTION:
We have

$\begin{array}{rll}1,000,000 & = & P{e}^{0.05(40)} \\ P & = & 135,335.28.\end{array}$  {eq:fs-id1167793245845}

She must invest $\text{\$}135,335.28$ at $5\text{\%}$ interest.
If, instead, she is able to earn $6\text{\%},$ then the equation becomes

$\begin{array}{rll}1,000,000 & = & P{e}^{0.06(40)} \\ P & = & 90,717.95.\end{array}$  {eq:fs-id1167793952541}

In this case, she needs to invest only $\text{\$}90,717.95.$ This is roughly two-thirds the amount she needs to invest at $5\text{\%}.$ The fact that the interest is compounded continuously greatly magnifies the effect of the $1\text{\%}$ increase in interest rate.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793541183} type= 
PROBLEM:
Suppose instead of investing at age $25$, the student waits until age $35.$ How much would she have to invest at $5\text{\%}?$ At $6\text{\%}?$
SOLUTION:
At $5\text{\%}$ interest, she must invest $\text{\$}223,130.16.$ At $6\text{\%}$ interest, she must invest $\text{\$}165,298.89.$
COMMENTARY: Hint
Use the process from the previous example.
:::
:::
If a quantity grows exponentially, the time it takes for the quantity to double remains constant. In other words, it takes the same amount of time for a population of bacteria to grow from $100$ to $200$ bacteria as it does to grow from $10,000$ to $20,000$ bacteria. This time is called the doubling time. To calculate the doubling time, we want to know when the quantity reaches twice its original size. So we have

$\begin{array}{rll}2{y}_{0} & = & {y}_{0}{e}^{kt} \\ 2 & = & {e}^{kt} \\ \text{ln}\;2 & = & kt \\ t & = & \frac{\text{ln}\;2}{k}.\end{array}$  {eq:fs-id1167793719089}

:::note [definition] Definition
If a quantity grows exponentially, the {term:doubling time} is the amount of time it takes the quantity to double. It is given by

$\text{Doubling time}\;=\frac{\text{ln}\;2}{k}.$  {eq:fs-id1167793281080}

:::

:::example {ex:fs-id1167793294341} Using the Doubling Time

:::exercise {fs-id1167793294343} type= 
PROBLEM:
Assume a population of fish grows exponentially. A pond is stocked initially with $500$ fish. After $6$ months, there are $1000$ fish in the pond. The owner will allow his friends and neighbors to fish on his pond after the fish population reaches $10,000.$ When will the owner’s friends be allowed to fish?
SOLUTION:
We know it takes the population of fish $6$ months to double in size. So, if *t* represents time in months, by the doubling-time formula, we have $6=(\text{ln}\;2)\text{/}k.$ Then, $k=(\text{ln}\;2)\text{/}6.$ Thus, the population is given by $y=500{e}^{((\text{ln}\;2)\text{/}6)t}.$ To figure out when the population reaches $10,000$ fish, we must solve the following equation:

$\begin{array}{rll}10,000 & = & 500{e}^{(\text{ln}\;2\text{/}6)t} \\ 20 & = & {e}^{(\text{ln}\;2\text{/}6)t} \\ \text{ln}\;20 & = & (\frac{\text{ln}\;2}{6})t \\ t & = & \frac{6(\text{ln}\;20)}{\text{ln}\;2}\approx 25.93.\end{array}$  {eq:fs-id1167793937195}

The owner’s friends have to wait $25.93$ months (a little more than $2$ years) to fish in the pond.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793926203} type= 
PROBLEM:
Suppose it takes $9$ months for the fish population in [ref:fs-id1167793294341] to reach $1000$ fish. Under these circumstances, how long do the owner’s friends have to wait?
SOLUTION:
$38.90$ months
COMMENTARY: Hint
Use the process from the previous example.
:::
:::

## Exponential Decay Model
Exponential functions can also be used to model populations that shrink (from disease, for example), or chemical compounds that break down over time. We say that such systems exhibit exponential decay, rather than exponential growth. The model is nearly the same, except there is a negative sign in the exponent. Thus, for some positive constant $k,$ we have $y={y}_{0}{e}^{\text{−}kt}.$
As with exponential growth, there is a differential equation associated with exponential decay. We have

${y}^{'}=\text{−}k{y}_{0}{e}^{\text{−}kt}=\text{−}ky.$  {eq:fs-id1167793948839}

:::note [rule] Rule: Exponential Decay Model
Systems that exhibit {term:exponential decay} behave according to the model

$y={y}_{0}{e}^{\text{−}kt},$  {eq:fs-id1167793619906}

where ${y}_{0}$ represents the initial state of the system and $k>0$ is a constant, called the *decay constant*.
:::
The following figure shows a graph of a representative exponential decay function.

> FIGURE {fig:CNX_Calc_Figure_06_08_002} src=../../media/CNX_Calc_Figure_06_08_002.jpg
> alt: This figure is a graph in the first quadrant. It is a decreasing exponential curve. It begins on the y-axis at 2000 and decreases towards the t-axis.
> caption: An example of exponential decay.

Let’s look at a physical application of exponential decay. {index:Newton’s law of cooling} says that an object cools at a rate proportional to the difference between the temperature of the object and the temperature of the surroundings. In other words, if $T$ represents the temperature of the object and ${T}_{a}$ represents the ambient temperature in a room, then

${T}^{'}=\text{−}k(T-{T}_{a}).$  {eq:fs-id1167794122396}

Note that this is not quite the right model for exponential decay. We want the derivative to be proportional to the function, and this expression has the additional ${T}_{a}$ term. Fortunately, we can make a change of variables that resolves this issue. Let $y(t)=T(t)-{T}_{a}.$ Then ${y}^{'}(t)={T}^{'}(t)-0={T}^{'}(t),$ and our equation becomes

${y}^{'}=\text{−}ky.$  {eq:fs-id1167793510327}

From our previous work, we know this relationship between *y* and its derivative leads to exponential decay. Thus,

$y={y}_{0}{e}^{\text{−}kt},$  {eq:fs-id1167793655314}

and we see that

$\begin{array}{rll}T-{T}_{a} & = & ({T}_{0}-{T}_{a}){e}^{\text{−}kt} \\ T & = & ({T}_{0}-{T}_{a}){e}^{\text{−}kt}+{T}_{a}\end{array}$  {eq:fs-id1167793655287}

where ${T}_{0}$ represents the initial temperature. Let’s apply this formula in the following example.

:::example {ex:fs-id1167793936902} Newton’s Law of Cooling

:::exercise {fs-id1167793936904} type= 
PROBLEM:
According to experienced baristas, the optimal temperature to serve coffee is between $155\text{°}\text{F}$ and $175\text{°}\text{F}.$ Suppose coffee is poured at a temperature of $200\text{°}\text{F},$ and after $2$ minutes in a $70\text{°}\text{F}$ room it has cooled to $180\text{°}\text{F}.$ When is the coffee first cool enough to serve? When is the coffee too cold to serve? Round answers to the nearest half minute.
SOLUTION:
We have

$\begin{array}{rll}T & = & ({T}_{0}-{T}_{a}){e}^{\text{−}kt}+{T}_{a} \\ 180 & = & (200-70){e}^{\text{−}k(2)}+70 \\ 110 & = & 130{e}^{−2k} \\ \frac{11}{13} & = & {e}^{−2k} \\ \text{ln}\;\frac{11}{13} & = & −2k \\ \text{ln}\;11-\text{ln}\;13 & = & −2k \\ k & = & \frac{\text{ln}\;13-\text{ln}\;11}{2}.\end{array}$  {eq:fs-id1167793498799}

Then, the model is

$T=130{e}^{(\frac{\text{ln}\;11-\text{ln}\;13}{2})t}+70.$  {eq:fs-id1167794049093}

The coffee reaches $175\text{°}\text{F}$ when

$\begin{array}{rll}175 & = & 130{e}^{(\frac{\text{ln}\;11-\text{ln}\;13}{2})t}+70 \\ 105 & = & 130{e}^{(\frac{\text{ln}\;11-\text{ln}\;13}{2})t} \\ \frac{21}{26} & = & {e}^{(\frac{\text{ln}\;11-\text{ln}\;13}{2})t} \\ \text{ln}\;\frac{21}{26} & = & \frac{\text{ln}\;11-\text{ln}\;13}{2}t \\ \text{ln}\;21-\text{ln}\;26 & = & \frac{\text{ln}\;11-\text{ln}\;13}{2}t \\ t & = & \frac{2(\text{ln}\;21-\text{ln}\;26)}{\text{ln}\;11-\text{ln}\;13}\approx 2.56.\end{array}$  {eq:fs-id1167793580253}

The coffee can be served about $2.5$ minutes after it is poured. The coffee reaches $155\text{°}\text{F}$ at

$\begin{array}{rll}155 & = & 130{e}^{(\frac{\text{ln}\;11-\text{ln}\;13}{2})t}+70 \\ 85 & = & 130{e}^{(\frac{\text{ln}\;11-\text{ln}\;13}{2})t} \\ \frac{17}{26} & = & {e}^{(\frac{\text{ln}\;11-\text{ln}\;13}{2})t} \\ \text{ln}\;17-\text{ln}\;26 & = & (\frac{\text{ln}\;11-\text{ln}\;13}{2})t \\ t & = & \frac{2(\text{ln}\;17-\text{ln}\;26)}{\text{ln}\;11-\text{ln}\;13}\approx 5.09.\end{array}$  {eq:fs-id1167793541952}

The coffee is too cold to be served about $5$ minutes after it is poured.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793360852} type= 
PROBLEM:
Suppose the room is warmer $(75\text{°}\text{F})$ and, after $2$ minutes, the coffee has cooled only to $185\text{°}\text{F}.$ When is the coffee first cool enough to serve? When is the coffee be too cold to serve? Round answers to the nearest half minute.
SOLUTION:
The coffee is first cool enough to serve about $3.5$ minutes after it is poured. The coffee is too cold to serve about $7$ minutes after it is poured.
COMMENTARY: Hint
Use the process from the previous example.
:::
:::
Just as systems exhibiting exponential growth have a constant doubling time, systems exhibiting exponential decay have a constant half-life. To calculate the half-life, we want to know when the quantity reaches half its original size. Therefore, we have

$\begin{array}{rll}\frac{{y}_{0}}{2} & = & {y}_{0}{e}^{\text{−}kt} \\ \frac{1}{2} & = & {e}^{\text{−}kt} \\ -\text{ln}\;2 & = & \text{−}kt \\ t & = & \frac{\text{ln}\;2}{k}.\end{array}$  {eq:fs-id1167793956510}

*Note*: This is the same expression we came up with for doubling time.

:::note [definition] Definition
If a quantity decays exponentially, the {term:half-life} is the amount of time it takes the quantity to be reduced by half. It is given by

$\text{Half-life}=\frac{\text{ln}\;2}{k}.$  {eq:fs-id1167793546938}

:::

:::example {ex:fs-id1167793607668} Radiocarbon Dating

:::exercise {fs-id1167793607670} type= 
PROBLEM:
One of the most common applications of an exponential decay model is {index:carbon dating}. $\text{Carbon-}14$ decays (emits a radioactive particle) at a regular and consistent exponential rate. Therefore, if we know how much carbon was originally present in an object and how much carbon remains, we can determine the age of the object. The half-life of $\text{carbon-}14$ is approximately $5730$ years—meaning, after that many years, half the material has converted from the original $\text{carbon-}14$ to the new nonradioactive $\text{nitrogen-}14.$ If we have $100$ g $\text{carbon-}14$ today, how much is left in $50$ years? If an artifact that originally contained $100$ g of carbon now contains $10$ g of carbon, how old is it? Round the answer to the nearest hundred years.
SOLUTION:
We have

$\begin{array}{rll}5730 & = & \frac{\text{ln}\;2}{k} \\ k & = & \frac{\text{ln}\;2}{5730}.\end{array}$  {eq:fs-id1167793318481}

So, the model says

$y=100{e}^{\text{−}(\text{ln}\;2\text{/}5730)t}.$  {eq:fs-id1167793929644}

In $50$ years, we have

$\begin{array}{rll}y & = & 100{e}^{\text{−}(\text{ln}\;2\text{/}5730)(50)} \\ & \approx & 99.40.\end{array}$  {eq:fs-id1167793504057}

Therefore, in $50$ years, $99.40$ g of $\text{carbon-}14$ remains.
To determine the age of the artifact, we must solve

$\begin{array}{rll}10 & = & 100{e}^{\text{−}(\text{ln}\;2\text{/}5730)t} \\ \frac{1}{10} & = & {e}^{\text{−}(\text{ln}\;2\text{/}5730)t} \\ t & \approx & 19035.\end{array}$  {eq:fs-id1167793628303}

The artifact is about $19,000$ years old.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793932265} type= 
PROBLEM:
If we have $100$ g of $\text{carbon-}14,$ how much is left after $500$ years? If an artifact that originally contained $100$ g of carbon now contains $20g$ of carbon, how old is it? Round the answer to the nearest hundred years.
SOLUTION:
A total of $94.13$ g of carbon remains. The artifact is approximately $13,300$ years old.
COMMENTARY: Hint
Use the process from the previous example.
:::
:::

## Key Concepts {section:key-concepts}
- Exponential growth and exponential decay are two of the most common applications of exponential functions.
- Systems that exhibit exponential growth follow a model of the form $y={y}_{0}{e}^{kt}.$
- In exponential growth, the rate of growth is proportional to the quantity present. In other words, ${y}^{'}=ky.$
- Systems that exhibit exponential growth have a constant doubling time, which is given by $(\text{ln}\;2)\text{/}k.$
- Systems that exhibit exponential decay follow a model of the form $y={y}_{0}{e}^{\text{−}kt}.$
- Systems that exhibit exponential decay have a constant half-life, which is given by $(\text{ln}\;2)\text{/}k.$

##  {section:section-exercises}
*True or False*? If true, prove it. If false, find the true answer.

:::exercise {fs-id1167793546877} type= 
PROBLEM:
The doubling time for $y={e}^{ct}$ is $(\text{ln}\;(2))\text{/}(\text{ln}\;(c)).$
:::

:::exercise {fs-id1167793367831} type= 
PROBLEM:
If you invest $\text{\$}500,$ an annual rate of interest of $3\text{\%}$ yields more money in the first year than a $2.5\text{\%}$ continuous rate of interest.
SOLUTION:
True
:::

:::exercise {fs-id1167793662431} type= 
PROBLEM:
If you leave a $100\text{°}\text{C}$ pot of tea at room temperature $(25\text{°}\text{C})$ and an identical pot in the refrigerator $(5\text{°}\text{C}),$ with $k=0.02,$ the tea in the refrigerator reaches a drinkable temperature $(70\text{°}\text{C})$ more than $5$ minutes before the tea at room temperature.
:::

:::exercise {fs-id1167793400844} type= 
PROBLEM:
If given a half-life of *t* years, the constant $k$ for $y={e}^{kt}$ is calculated by $k=\text{ln}\;(1\text{/}2)\text{/}t.$
SOLUTION:
True; $k=\frac{\text{ln}\;(2)}{t}$
:::
For the following exercises, use $y={y}_{0}{e}^{kt}.$

:::exercise {fs-id1167793930319} type= 
PROBLEM:
If a culture of bacteria doubles in $3$ hours, how many hours does it take to multiply by $10?$
:::

:::exercise {fs-id1167793287418} type= 
PROBLEM:
If bacteria increase by a factor of $10$ in $10$ hours, how many hours does it take to increase by $100?$
SOLUTION:
$20$ hours
:::

:::exercise {fs-id1167793286982} type= 
PROBLEM:
How old is a skull that contains one-fifth as much radiocarbon as a modern skull? Note that the half-life of radiocarbon is $5730$ years.
:::

:::exercise {fs-id1167793620793} type= 
PROBLEM:
If a relic contains $90\text{\%}$ as much radiocarbon as new material, can it have come from the time of Christ (approximately $2000$ years ago)? Note that the half-life of radiocarbon is $5730$ years.
SOLUTION:
No. The relic is approximately $871$ years old.
:::

:::exercise {fs-id1167793312474} type= 
PROBLEM:
The population of Cairo grew from $5$ million to $10$ million in $20$ years. Use an exponential model to find when the population was $8$ million.
:::

:::exercise {fs-id1167793557838} type= 
PROBLEM:
The populations of New York and Los Angeles are growing at $1\text{\%}$ and $1.4\text{\%}$ a year, respectively. Starting from $8$ million (New York) and $6$ million (Los Angeles), when are the populations equal? Round your answer to a whole number of years.
SOLUTION:
$73$ years
:::

:::exercise {fs-id1167794073084} type= 
PROBLEM:
Suppose the value of $\text{\$}1$ in Japanese yen decreases at $2\text{\%}$ per year. Starting from $\text{\$}1=\text{¥}250,$ when will $\text{\$}1=\text{¥}1?$
:::

:::exercise {fs-id1167793358316} type= 
PROBLEM:
The effect of advertising decays exponentially. If $40\text{\%}$ of the population remembers a new product after $3$ days, how long will $20\text{\%}$ remember it?
SOLUTION:
$5$ days $6$ hours $27$ minutes
:::

:::exercise {fs-id1167793956310} type= 
PROBLEM:
If $y=1000$ at $t=3$ and $y=3000$ at $t=4,$ what was ${y}_{0}$ at $t=0?$
:::

:::exercise {fs-id1167793469807} type= 
PROBLEM:
If $y=100$ at $t=4$ and $y=10$ at $t=8,$ when does $y=1?$
SOLUTION:
$12$
:::

:::exercise {fs-id1167793562215} type= 
PROBLEM:
If a bank offers annual interest of $7.5\text{\%}$ or continuous interest of $7.25\text{\%},$ which has a better annual yield?
:::

:::exercise {fs-id1167793538318} type= 
PROBLEM:
What continuous interest rate has the same yield as an annual rate of $9\text{\%}?$
SOLUTION:
$8.618\text{\%}$
:::

:::exercise {fs-id1167793538348} type= 
PROBLEM:
If you deposit $\text{\$}5000$ at $8\text{\%}$ annual interest, how many years can you withdraw $\text{\$}500$ (starting after the first year) without running out of money?
:::

:::exercise {fs-id1167793553644} type= 
PROBLEM:
You are trying to save $\text{\$}50,000$ in $20$ years for college tuition for your child. If interest is a continuous $10\text{\%},$ how much do you need to invest initially?
SOLUTION:
$\text{\$}6766.76$
:::

:::exercise {fs-id1167793543307} type= 
PROBLEM:
You are cooling a turkey that was taken out of the oven with an internal temperature of $165\text{°}\text{F}.$ After $10$ minutes of resting the turkey in a $70\text{°}\text{F}$ apartment, the temperature has reached $155\text{°}\text{F}\text{.}$ What is the temperature of the turkey $20$ minutes after taking it out of the oven?
:::

:::exercise {fs-id1167793479310} type= 
PROBLEM:
You are trying to thaw some vegetables that are at a temperature of $1\text{°}\text{F}\text{.}$ To thaw vegetables safely, you must put them in the refrigerator, which has an ambient temperature of $44\text{°}\text{F}.$ You check on your vegetables $2$ hours after putting them in the refrigerator to find that they are now $12\text{°}\text{F}\text{.}$ Plot the resulting temperature curve and use it to determine when the vegetables reach $33\text{°}\text{F}\text{.}$
SOLUTION:
$9$ hours $13$ minutes
:::

:::exercise {fs-id1167793541914} type= 
PROBLEM:
You are an archaeologist and are given a bone that is claimed to be from a Tyrannosaurus Rex. You know these dinosaurs lived during the Cretaceous Era $(146$ million years to $65$ million years ago), and you find by radiocarbon dating that there is $0.000001\text{\%}$ the amount of radiocarbon. Is this bone from the Cretaceous?
:::

:::exercise {fs-id1167793931550} type= 
PROBLEM:
The spent fuel of a nuclear reactor contains plutonium-239, which has a half-life of $24,000$ years. If $1$ barrel containing $10\;\text{kg}$ of plutonium-239 is sealed, how many years must pass until only $10g$ of plutonium-239 is left?
SOLUTION:
$239,179$ years
:::
For the next set of exercises, use the following table, which features the world population by decade.

> TABLE {tab:fs-id1167793477090} cols=2 class=unnumbered
> title: *Source*: http://www.factmonster.com/ipka/A0762181.html.
> summary: This is a table with two columns, pairing the years since 1950 with population (millions). The years since 1950 begin at 0 and increase in increments of 10 to 60. The population column begins at 2256 and increases to 6849.

| Years since 1950 | Population (millions) |
| --- | --- |
| $0$ | $2,556$ |
| $10$ | $3,039$ |
| $20$ | $3,706$ |
| $30$ | $4,453$ |
| $40$ | $5,279$ |
| $50$ | $6,083$ |
| $60$ | $6,849$ |

:::exercise {fs-id1167793978418} type= 
PROBLEM:
**[T]** The best-fit exponential curve to the data of the form $P(t)=a{e}^{bt}$ is given by $P(t)=2686{e}^{0.01604t}.$ Use a graphing calculator to graph the data and the exponential curve together.
:::

:::exercise {fs-id1167793281518} type= 
PROBLEM:
**[T]** Find and graph the derivative ${y}^{'}$ of your equation. Where is it increasing and what is the meaning of this increase?
SOLUTION:
$P'(t)=43{e}^{0.01604t}.$ The population is always increasing.
:::

:::exercise {fs-id1167793584527} type= 
PROBLEM:
**[T]** Find and graph the second derivative of your equation. Where is it increasing and what is the meaning of this increase?
:::

:::exercise {fs-id1167794005223} type= 
PROBLEM:
**[T]** Find the predicted date when the population reaches $10$ billion. Using your previous answers about the first and second derivatives, explain why exponential growth is unsuccessful in predicting the future.
SOLUTION:
The population reaches $10$ billion people in $2032.$
:::
For the next set of exercises, use the following table, which shows the population of San Francisco during the 19th century.

> TABLE {tab:fs-id1167793621006} cols=2 class=unnumbered
> title: *Source*: http://www.sfgenealogy.com/sf/history/hgpop.htm.
> summary: This table has two columns. The columns pair the years since 1850 with the population (thousands). The first entry in the years since 1850 column is 0 and increases in increments of 10 to 30. The first entry in the population column is 21 increasing to 234.

| **Years since 1850** | **Population (thousands)** |
| --- | --- |
| $0$ | $21.00$ |
| $10$ | $56.80$ |
| $20$ | $149.5$ |
| $30$ | $234.0$ |

:::exercise {fs-id1167793469794} type= 
PROBLEM:
**[T]** The best-fit exponential curve to the data of the form $P(t)=a{e}^{bt}$ is given by $P(t)=35.26{e}^{0.06407t}.$ Use a graphing calculator to graph the data and the exponential curve together.
:::

:::exercise {fs-id1167794127471} type= 
PROBLEM:
**[T]** Find and graph the derivative ${y}^{'}$ of your equation. Where is it increasing? What is the meaning of this increase? Is there a value where the increase is maximal?
SOLUTION:
$P'(t)=2.259{e}^{0.06407t}.$ The population is always increasing.
:::

:::exercise {fs-id1167794127528} type= 
PROBLEM:
**[T]** Find and graph the second derivative of your equation. Where is it increasing? What is the meaning of this increase?
:::

## Glossary
- {def} **doubling time**: if a quantity grows exponentially, the doubling time is the amount of time it takes the quantity to double, and is given by $(\text{ln}\;2)\text{/}k$
- {def} **exponential decay**: systems that exhibit exponential decay follow a model of the form $y={y}_{0}{e}^{\text{−}kt}$
- {def} **exponential growth**: systems that exhibit exponential growth follow a model of the form $y={y}_{0}{e}^{kt}$
- {def} **half-life**: if a quantity decays exponentially, the half-life is the amount of time it takes the quantity to be reduced by half. It is given by $(\text{ln}\;2)\text{/}k$

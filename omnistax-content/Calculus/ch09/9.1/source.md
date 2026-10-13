# Sequences

## Learning Objectives {section:learning-objectives}
- Find the formula for the general term of a sequence.
- Calculate the limit of a sequence if it exists.
- Determine the convergence or divergence of a given sequence.

In this section, we introduce sequences and define what it means for a sequence to converge or diverge. We show how to find limits of sequences that converge, often by using the properties of limits for functions discussed earlier. We close this section with the Monotone Convergence Theorem, a tool we can use to prove that certain types of sequences converge.

## Terminology of Sequences
To work with this new topic, we need some new terms and definitions. First, an infinite sequence is an ordered list of numbers of the form

${a}_{1},{a}_{2},{a}_{3}\text{,…},{a}_{n}\text{,…}\;\text{.}$  {eq:fs-id1169739062458}

Each of the numbers in the sequence is called a term. The symbol $n$ is called the index variable for the sequence. We use the notation

${\{{a}_{n}\}}_{n=1}^{\infty},\;\text{or simply}\;\{{a}_{n}\},$  {eq:fs-id1169739376228}

to denote this sequence. A similar notation is used for sets, but a sequence is an ordered list, whereas a set is not ordered. Because a particular number ${a}_{n}$ exists for each positive integer $n,$ we can also define a sequence as a function whose domain is the set of positive integers.
Let’s consider the infinite, ordered list

$2,4,8,16,32\text{,…}\;.$  {eq:fs-id1169738936091}

This is a sequence in which the first, second, and third terms are given by ${a}_{1}=2,$ ${a}_{2}=4,$ and ${a}_{3}=8.$ You can probably see that the terms in this sequence have the following pattern:

${a}_{1}={2}^{1},\;{a}_{2}={2}^{2},\;{a}_{3}={2}^{3},\;{a}_{4}={2}^{4},\;\text{and}\;{a}_{5}={2}^{5}.$  {eq:fs-id1169738849565}

Assuming this pattern continues, we can write the $n\text{th}$ term in the sequence by the explicit formula ${a}_{n}={2}^{n}.$ Using this notation, we can write this sequence as

${\{{2}^{n}\}}_{n=1}^{\infty}\;\text{or}\;\{{2}^{n}\}.$  {eq:fs-id1169739307977}

Alternatively, we can describe this sequence in a different way. Since each term is twice the previous term, this sequence can be defined recursively by expressing the $n\text{th}$ term ${a}_{n}$ in terms of the previous term ${a}_{n-1}.$ In particular, we can define this sequence as the sequence $\{{a}_{n}\}$ where ${a}_{1}=2$ and for all $n\ge 2,$ each term ${a}_{n}$ is defined by the {term:recurrence relation}${a}_{n}=2{a}_{n-1}.$

:::note [definition] Definition
An {term:infinite sequence}$\{{a}_{n}\}$ is an ordered list of numbers of the form

${a}_{1},{a}_{2}\text{,…},{a}_{n}\text{,…}\;\text{.}$  {eq:fs-id1169739188460}

The subscript $n$ is called the {term:index variable} of the sequence. Each number ${a}_{n}$ is a {term:term} of the sequence. Sometimes sequences are defined by {term:explicit formulas}, in which case ${a}_{n}=f(n)$ for some function $f(n)$ defined over the positive integers. In other cases, sequences are defined by using a {term:recurrence relation}. In a recurrence relation, one term (or more) of the sequence is given explicitly, and subsequent terms are defined in terms of earlier terms in the sequence.
:::
Note that the index does not have to start at $n=1$ but could start with other integers. For example, a sequence given by the explicit formula ${a}_{n}=f(n)$ could start at $n=0,$ in which case the sequence would be

${a}_{0},{a}_{1},{a}_{2}\text{,…}\;\text{.}$  {eq:fs-id1169739038407}

Similarly, for a sequence defined by a recurrence relation, the term ${a}_{0}$ may be given explicitly, and the terms ${a}_{n}$ for $n\ge 1$ may be defined in terms of ${a}_{n-1}.$ Since a sequence $\{{a}_{n}\}$ has exactly one value for each positive integer $n,$ it can be described as a function whose domain is the set of positive integers. As a result, it makes sense to discuss the graph of a sequence. The graph of a sequence $\{{a}_{n}\}$ consists of all points $(n,{a}_{n})$ for all positive integers $n.$ [ref:CNX_Calc_Figure_09_01_001] shows the graph of $\{{2}^{n}\}.$

> FIGURE {fig:CNX_Calc_Figure_09_01_001} src=../../media/CNX_Calc_Figure_09_01_001.jpg
> alt: A graph in quadrant one containing the following points: (1, 2), (2, 4), (3, 8), (4, 16).
> caption: The plotted points are a graph of the sequence $\{{2}^{n}\}.$

Two types of sequences occur often and are given special names: arithmetic sequences and geometric sequences. In an {term:arithmetic sequence}, the *difference* between every pair of consecutive terms is the same. For example, consider the sequence

$3,7,11,15,19\text{,…}\;\text{.}$  {eq:fs-id1169738824405}

You can see that the difference between every consecutive pair of terms is $4.$ Assuming that this pattern continues, this sequence is an arithmetic sequence. It can be described by using the recurrence relation

$\left\{\begin{array}{l}{a}_{1}=3 \\ {a}_{n}={a}_{n-1}+4\;\text{for}\;n\ge 2.\end{array}\right.$  {eq:fs-id1169739274427}

Note that

$\begin{array}{l}{a}_{2}=3+4 \\ {a}_{3}=3+4+4=3+2\cdot 4 \\ {a}_{4}=3+4+4+4=3+3\cdot 4.\end{array}$  {eq:fs-id1169738891016}

Thus the sequence can also be described using the explicit formula

$\begin{array}{rl}{a}_{n} & =3+4(n-1) \\ & =4n-1.\end{array}$  {eq:fs-id1169739000061}

In general, an arithmetic sequence is any sequence of the form ${a}_{n}=cn+b.$
In a {term:geometric sequence}, the *ratio* of every pair of consecutive terms is the same. For example, consider the sequence

$2,-\frac{2}{3},\frac{2}{9},-\frac{2}{27},\frac{2}{81}\text{,…}\;\text{.}$  {eq:fs-id1169739096795}

We see that the ratio of any term to the preceding term is $-\frac{1}{3}.$ Assuming this pattern continues, this sequence is a geometric sequence. It can be defined recursively as

$\begin{array}{l} \\ {a}_{1}=2 \\ {a}_{n}=-\frac{1}{3}\cdot {a}_{n-1}\;\text{for}\;n\ge 2.\end{array}$  {eq:fs-id1169736655039}

Alternatively, since

$\begin{array}{l} \\ \\ {a}_{2}=-\frac{1}{3}\cdot 2 \\ {a}_{3}=(-\frac{1}{3})(-\frac{1}{3})(2)={(-\frac{1}{3})}^{2}\cdot 2 \\ {a}_{4}=(-\frac{1}{3})(-\frac{1}{3})(-\frac{1}{3})(2)={(-\frac{1}{3})}^{3}\cdot 2,\end{array}$  {eq:fs-id1169739024768}

we see that the sequence can be described by using the explicit formula

${a}_{n}=2{(-\frac{1}{3})}^{n-1}.$  {eq:fs-id1169739109807}

The sequence $\{{2}^{n}\}$ that we discussed earlier is a geometric sequence, where the ratio of any term to the previous term is $2.$ In general, a geometric sequence is any sequence of the form ${a}_{n}=c{r}^{n}.$

:::example {ex:fs-id1169736659986} Finding Explicit Formulas

:::exercise {fs-id1169739234198} type= 
PROBLEM:
For each of the following sequences, find an explicit formula for the $n\text{th}$ term of the sequence.
a. $-\frac{1}{2},\frac{2}{3},-\frac{3}{4},\frac{4}{5},-\frac{5}{6}\text{,…}$
b. $\frac{3}{4},\frac{9}{7},\frac{27}{10},\frac{81}{13},\frac{243}{16}\text{,…}$
SOLUTION:
a. First, note that the sequence is alternating from negative to positive. The odd terms in the sequence are negative, and the even terms are positive. Therefore, the $n\text{th}$ term includes a factor of ${(−1)}^{n}.$ Next, consider the sequence of numerators $\{1,2,3\text{,…}\}$ and the sequence of denominators $\{2,3,4\text{,…}\}.$ We can see that both of these sequences are arithmetic sequences. The $n\text{th}$ term in the sequence of numerators is $n,$ and the $n\text{th}$ term in the sequence of denominators is $n+1.$ Therefore, the sequence can be described by the explicit formula

${a}_{n}=\frac{{(−1)}^{n}n}{n+1}.$  {eq:fs-id1169738993914}

b. The sequence of numerators $3,9,27,81,243\text{,…}$ is a geometric sequence. The numerator of the $n\text{th}$ term is ${3}^{n}$ The sequence of denominators $4,7,10,13,16\text{,…}$ is an arithmetic sequence. The denominator of the $n\text{th}$ term is $4+3(n-1)=3n+1.$ Therefore, we can describe the sequence by the explicit formula ${a}_{n}=\frac{{3}^{n}}{3n+1}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739223015} type= 
PROBLEM:
Find an explicit formula for the $n\text{th}$ term of the sequence $\{\frac{1}{5},-\frac{1}{7},\frac{1}{9},-\frac{1}{11}\text{,…}\}.$
SOLUTION:
${a}_{n}=\frac{{(−1)}^{n+1}}{3+2n}$
COMMENTARY: Hint
The denominators form an arithmetic sequence.
:::
:::

:::example {ex:fs-id1169739010866} Defined by Recurrence Relations

:::exercise {fs-id1169738890687} type= 
PROBLEM:
For each of the following recursively defined sequences, find an explicit formula for the sequence.
a. ${a}_{1}=2,$ ${a}_{n}=−3{a}_{n-1}$ for $n\ge 2$
b. ${a}_{1}=\frac{1}{2},$ ${a}_{n}={a}_{n-1}+{(\frac{1}{2})}^{n}$ for $n\ge 2$
SOLUTION:
a. Writing out the first few terms, we have

$\begin{array}{l}{a}_{1}=2 \\ {a}_{2}=−3{a}_{1}=−3(2) \\ {a}_{3}=−3{a}_{2}={(−3)}^{2}2 \\ {a}_{4}=−3{a}_{3}={(−3)}^{3}2.\end{array}$  {eq:fs-id1169738860999}

In general,

${a}_{n}=2{(−3)}^{n-1}.$  {eq:fs-id1169736709052}

b. Write out the first few terms:

$\begin{array}{l} \\ \\ {a}_{1}=\frac{1}{2} \\ {a}_{2}={a}_{1}+{(\frac{1}{2})}^{2}=\frac{1}{2}+\frac{1}{4}=\frac{3}{4} \\ {a}_{3}={a}_{2}+{(\frac{1}{2})}^{3}=\frac{3}{4}+\frac{1}{8}=\frac{7}{8} \\ {a}_{4}={a}_{3}+{(\frac{1}{2})}^{4}=\frac{7}{8}+\frac{1}{16}=\frac{15}{16}.\end{array}$  {eq:fs-id1169738999519}

From this pattern, we derive the explicit formula

${a}_{n}=\frac{{2}^{n}-1}{{2}^{n}}=1-\frac{1}{{2}^{n}}.$  {eq:fs-id1169739019569}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738936238} type= 
PROBLEM:
Find an explicit formula for the sequence defined recursively such that ${a}_{1}=−4$ and ${a}_{n}={a}_{n-1}+6.$
SOLUTION:
${a}_{n}=6n-10$
COMMENTARY: Hint
This is an arithmetic sequence.
:::
:::

## Limit of a Sequence
A fundamental question that arises regarding infinite sequences is the behavior of the terms as $n$ gets larger. Since a sequence is a function defined on the positive integers, it makes sense to discuss the limit of the terms as $n\to \infty .$ For example, consider the following four sequences and their different behaviors as $n\to \infty$ (see [ref:CNX_Calc_Figure_09_01_002]):
a. $\{1+3n\}=\{4,7,10,13\text{,…}\}.$ The terms $1+3n$ become arbitrarily large as $n\to \infty .$ In this case, we say that $1+3n\to \infty$ as $n\to \infty .$
b. $\{1-{(\frac{1}{2})}^{n}\}=\{\frac{1}{2},\frac{3}{4},\frac{7}{8},\frac{15}{16}\text{,…}\}.$ The terms $1-{(\frac{1}{2})}^{n}\to 1$ as $n\to \infty .$
c. $\{{(−1)}^{n}\}=\{\text{−}1,1,−1,1\text{,…}\}.$ The terms alternate but do not approach one single value as $n\to \infty .$
d. $\{\frac{{(−1)}^{n}}{n}\}=\{−1,\frac{1}{2},-\frac{1}{3},\frac{1}{4}\text{,…}\}.$ The terms alternate for this sequence as well, but $\frac{{(−1)}^{n}}{n}\to 0$ as $n\to \infty .$

> FIGURE {fig:CNX_Calc_Figure_09_01_002} src=../../media/CNX_Calc_Figure_09_01_002.jpg
> alt: Four graphs in quadrants 1 and 4, labeled a through d. The horizontal axis is for the value of n and the vertical axis is for the value of the term a _n. Graph a has points (1, 4), (2, 7), (3, 10), (4, 13), and (5, 16). Graph b has points (1, 1/2), (2, 3/4), (3, 7/8), and (4, 15/16). Graph c has points (1, -1), (2, 1), (3, -1), (4, 1), and (5, -1). Graph d has points (1, -1), (2, 1/2), (3, -1/3), (4, 1/4), and (5, -1/5).
> caption: (a) The terms in the sequence become arbitrarily large as $n\to \infty .$ (b) The terms in the sequence approach $1$ as $n\to \infty .$ (c) The terms in the sequence alternate between $1$ and $−1$ as $n\to \infty .$ (d) The terms in the sequence alternate between positive and negative values but approach $0$ as $n\to \infty .$

From these examples, we see several possibilities for the behavior of the terms of a sequence as $n\to \infty .$ In two of the sequences, the terms approach a finite number as $n\to \infty .$ In the other two sequences, the terms do not. If the terms of a sequence approach a finite number $L$ as $n\to \infty ,$ we say that the sequence is a convergent sequence and the real number $L$ is the limit of the sequence. We can give an informal definition here.

:::note [definition] Definition
Given a sequence $\{{a}_{n}\},$ if the terms ${a}_{n}$ become arbitrarily close to a finite number $L$ as $n$ becomes sufficiently large, we say $\{{a}_{n}\}$ is a {term:convergent sequence} and $L$ is the {term:limit of the sequence}. In this case, we write

$\lim_{n\to \infty}{a}_{n}=L.$  {eq:fs-id1169739190325}

If a sequence $\{{a}_{n}\}$ is not convergent, we say it is a {term:divergent sequence}.
:::
From [ref:CNX_Calc_Figure_09_01_002], we see that the terms in the sequence $\{1-{(\frac{1}{2})}^{n}\}$ are becoming arbitrarily close to $1$ as $n$ becomes very large. We conclude that $\{1-{(\frac{1}{2})}^{n}\}$ is a convergent sequence and its limit is $1.$ In contrast, from [ref:CNX_Calc_Figure_09_01_002], we see that the terms in the sequence $1+3n$ are not approaching a finite number as $n$ becomes larger. We say that $\{1+3n\}$ is a divergent sequence.
In the informal definition for the limit of a sequence, we used the terms “arbitrarily close” and “sufficiently large.” Although these phrases help illustrate the meaning of a converging sequence, they are somewhat vague. To be more precise, we now present the more formal definition of limit for a sequence and show these ideas graphically in [ref:CNX_Calc_Figure_09_01_003].

:::note [definition] Definition
A sequence $\{{a}_{n}\}$ converges to a real number $L$ if for all $ε>0,$ there exists an integer $N$ such that $|{a}_{n}-L|<ε$ if $n\ge N.$ The number $L$ is the limit of the sequence and we write

$\lim_{n\to \infty}{a}_{n}=L\;or\;{a}_{n}\to L.$  {eq:fs-id1169736654659}

In this case, we say the sequence $\{{a}_{n}\}$ is a convergent sequence. If a sequence does not converge, it is a divergent sequence, and we say the limit does not exist.
:::
We remark that the convergence or divergence of a sequence $\{{a}_{n}\}$ depends only on what happens to the terms ${a}_{n}$ as $n\to \infty .$ Therefore, if a finite number of terms ${b}_{1},{b}_{2}\text{,…},{b}_{N}$ are placed before ${a}_{1}$ to create a new sequence

${b}_{1},{b}_{2}\text{,…},{b}_{N},{a}_{1},{a}_{2}\text{,…},$  {eq:fs-id1169739223330}

this new sequence will converge if $\{{a}_{n}\}$ converges and diverge if $\{{a}_{n}\}$ diverges. Further, if the sequence $\{{a}_{n}\}$ converges to $L,$ this new sequence will also converge to $L.$

> FIGURE {fig:CNX_Calc_Figure_09_01_003} src=../../media/CNX_Calc_Figure_09_01_003.jpg
> alt: A graph in quadrant 1 with axes labeled n and a_n instead of x and y, respectively. A positive point N is marked on the n axis. From smallest to largest, points L – epsilon, L, and L + epsilon are marked on the a_n axis, with the same interval epsilon between L and the other two. A blue line y = L is drawn, as are red dotted ones for y = L + epsilon and L – epsilon. Points in quadrant 1 are plotted above and below these lines for x < N. However, past N, the points remain inside the lines y = L + epsilon and L – epsilon, converging on L.
> caption: As $n$ increases, the terms ${a}_{n}$ become closer to $L.$ For values of $n\ge N,$ the distance between each point $(n,{a}_{n})$ and the line $y=L$ is less than $ε.$

As defined above, if a sequence does not converge, it is said to be a divergent sequence. For example, the sequences $\{1+3n\}$ and $\{{(−1)}^{n}\}$ shown in [ref:CNX_Calc_Figure_09_01_003] diverge. However, different sequences can diverge in different ways. The sequence $\{{(−1)}^{n}\}$ diverges because the terms alternate between $1$ and $−1,$ but do not approach one value as $n\to \infty .$ On the other hand, the sequence $\{1+3n\}$ diverges because the terms $1+3n\to \infty$ as $n\to \infty .$ We say the sequence $\{1+3n\}$ diverges to infinity and write $\lim_{n\to \infty}(1+3n)=\infty .$ It is important to recognize that this notation does not imply the limit of the sequence $\{1+3n\}$ exists. The sequence is, in fact, divergent. Writing that the limit is infinity is intended only to provide more information about why the sequence is divergent. A sequence can also diverge to negative infinity. For example, the sequence $\{\text{−}5n+2\}$ diverges to negative infinity because $−5n+2\to \text{−}\infty$ as $n\to \infty .$ We write this as $\lim_{n\to \infty}(−5n+2)=\to \text{−}\infty .$
Because a sequence is a function whose domain is the set of positive integers, we can use properties of limits of functions to determine whether a sequence converges. For example, consider a sequence $\{{a}_{n}\}$ and a related function $f$ defined on all positive real numbers such that $f(n)={a}_{n}$ for all integers $n\ge 1.$ Since the domain of the sequence is a subset of the domain of $f,$ if $\lim_{x\to \infty}f(x)$ exists, then the sequence converges and has the same limit. For example, consider the sequence $\{\frac{1}{n}\}$ and the related function $f(x)=\frac{1}{x}.$ Since the function $f$ defined on all real numbers $x>0$ satisfies $f(x)=\frac{1}{x}\to 0$ as $x\to \infty ,$ the sequence $\{\frac{1}{n}\}$ must satisfy $\frac{1}{n}\to 0$ as $n\to \infty .$

:::note [theorem] Limit of a Sequence Defined by a Function
Consider a sequence $\{{a}_{n}\}$ such that ${a}_{n}=f(n)$ for all $n\ge 1.$ If there exists a real number $L$ such that

$\lim_{x\to \infty}f(x)=L,$  {eq:fs-id1169736845738}

then $\{{a}_{n}\}$ converges and

$\lim_{n\to \infty}{a}_{n}=L.$  {eq:fs-id1169736851317}

:::
We can use this theorem to evaluate $\lim_{n\to \infty}{r}^{n}$ for $0\le r\le 1.$ For example, consider the sequence $\{{(1\text{/}2)}^{n}\}$ and the related exponential function $f(x)={(1\text{/}2)}^{x}.$ Since $\lim_{x\to \infty}{(1\text{/}2)}^{x}=0,$ we conclude that the sequence $\{{(1\text{/}2)}^{n}\}$ converges and its limit is $0.$ Similarly, for any real number $r$ such that $0\le r<1,$ $\lim_{x\to \infty}{r}^{x}=0,$ and therefore the sequence $\{{r}^{n}\}$ converges. On the other hand, if $r=1,$ then $\lim_{x\to \infty}{r}^{x}=1,$ and therefore the limit of the sequence $\{{1}^{n}\}$ is $1.$ If $r>1,$ $\lim_{x\to \infty}{r}^{x}=\infty ,$ and therefore we cannot apply this theorem. However, in this case, just as the function ${r}^{x}$ grows without bound as $n\to \infty ,$ the terms ${r}^{n}$ in the sequence become arbitrarily large as $n\to \infty ,$ and we conclude that the sequence $\{{r}^{n}\}$ diverges to infinity if $r>1.$
We summarize these results regarding the geometric sequence $\{{r}^{n}\}\text{:}$

$\begin{array}{l}{r}^{n}\to 0\;\text{if}\;0<r<1 \\ {r}^{n}\to 1\;\text{if}\;r=1 \\ {r}^{n}\to \infty \;\text{if}\;r>1.\end{array}$  {eq:fs-id1169736851628}

Later in this section we consider the case when $r<0.$
We now consider slightly more complicated sequences. For example, consider the sequence $\{{(2\text{/}3)}^{n}+{(1\text{/}4)}^{n}\}.$ The terms in this sequence are more complicated than other sequences we have discussed, but luckily the limit of this sequence is determined by the limits of the two sequences $\{{(2\text{/}3)}^{n}\}$ and $\{{(1\text{/}4)}^{n}\}.$ As we describe in the following algebraic limit laws, since $\{{(2\text{/}3)}^{n}\}$ and ${\{1\text{/}4)}^{n}\}$ both converge to $0,$ the sequence $\{{(2\text{/}3)}^{n}+{(1\text{/}4)}^{n}\}$ converges to $0+0=0.$ Just as we were able to evaluate a limit involving an algebraic combination of functions $f$ and $g$ by looking at the limits of $f$ and $g$ (see [Introduction to Limits](module:m53483)), we are able to evaluate the limit of a sequence whose terms are algebraic combinations of ${a}_{n}$ and ${b}_{n}$ by evaluating the limits of $\{{a}_{n}\}$ and $\{{b}_{n}\}.$

:::note [theorem] Algebraic Limit Laws
Given sequences $\{{a}_{n}\}$ and $\{{b}_{n}\}$ and any real number $c,$ if there exist constants $A$ and $B$ such that $\lim_{n\to \infty}{a}_{n}=A$ and $\lim_{n\to \infty}{b}_{n}=B,$ then
1. $\lim_{n\to \infty}c=c$
2. $\lim_{n\to \infty}c{a}_{n}=c\lim_{n\to \infty}{a}_{n}=cA$
3. $\lim_{n\to \infty}({a}_{n}\pm {b}_{n})=\lim_{n\to \infty}{a}_{n}\pm \lim_{n\to \infty}{b}_{n}=A\pm B$
4. $\lim_{\text{n}\to \infty}({a}_{n}\cdot {b}_{n})=(\lim_{n\to \infty}{a}_{n})\cdot (\lim_{n\to \infty}{b}_{n})=A\cdot B$
5. $\lim_{n\to \infty}(\frac{{a}_{n}}{{b}_{n}})=\frac{\lim_{n\to \infty}{a}_{n}}{\lim_{n\to \infty}{b}_{n}}=\frac{A}{B},$ provided $B≠0$ and each ${b}_{n}≠0.$
:::

### Proof
We prove part iii.
Let $ϵ>0.$ Since $\lim_{n\to \infty}{a}_{n}=A,$ there exists a constant positive integer ${N}_{1}$ such that $|{a}_{n}-A|<\frac{ε}{2}$ for all $n\ge {N}_{1}.$ Since $\lim_{n\to \infty}{b}_{n}=B,$ there exists a constant ${N}_{2}$ such that $|{b}_{n}-B|<ε\text{/}2$ for all $n\ge {N}_{2}.$ Let $N$ be the larger of ${N}_{1}$ and ${N}_{2}.$ Therefore, for all $n\ge N,$
$|({a}_{n}+{b}_{n})\text{−}(A+B)|\le |{a}_{n}-A|+|{b}_{n}-B|<\frac{ε}{2}+\frac{ε}{2}=ε.$
□
The algebraic limit laws allow us to evaluate limits for many sequences. For example, consider the sequence $\{\frac{1}{{n}^{2}}\}.$ As shown earlier, $\lim_{n\to \infty}1\text{/}n=0.$ Similarly, for any positive integer $k,$ we can conclude that

$\lim_{n\to \infty}\frac{1}{{n}^{k}}=0.$  {eq:fs-id1169739110641}

In the next example, we make use of this fact along with the limit laws to evaluate limits for other sequences.

:::example {ex:fs-id1169739198462} Determining Convergence and Finding Limits

:::exercise {fs-id1169739198465} type= 
PROBLEM:
For each of the following sequences, determine whether or not the sequence converges. If it converges, find its limit.
a. $\{5-\frac{3}{{n}^{2}}\}$
b. $\{\frac{3{n}^{4}-7{n}^{2}+5}{6-4{n}^{4}}\}$
c. $\{\frac{{2}^{n}}{{n}^{2}}\}$
d. $\{{(1+\frac{4}{n})}^{n}\}$
SOLUTION:
a. We know that $1\text{/}n\to 0.$ Using this fact, we conclude that

$\lim_{n\to \infty}\frac{1}{{n}^{2}}=\lim_{n\to \infty}(\frac{1}{n}).\lim_{n\to \infty}(\frac{1}{n})=0.$  {eq:fs-id1169736685730}

Therefore,

$\lim_{n\to \infty}(5-\frac{3}{{n}^{2}})=\lim_{n\to \infty}5-3\lim_{n\to \infty}\frac{1}{{n}^{2}}=5-3\cdot 0=5.$  {eq:fs-id1169736592512}

The sequence converges and its limit is $5.$
b. By factoring ${n}^{4}$ out of the numerator and denominator and using the limit laws above, we have

$\begin{array}{rl}\lim_{n\to \infty}\frac{3{n}^{4}-7{n}^{2}+5}{6-4{n}^{4}} & =\lim_{n\to \infty}\frac{3-\frac{7}{{n}^{2}}+\frac{5}{{n}^{4}}}{\frac{6}{{n}^{4}}-4} \\ & =\frac{\lim_{n\to \infty}(3-\frac{7}{{n}^{2}}+\frac{5}{{n}^{4}})}{\lim_{n\to \infty}(\frac{6}{{n}^{4}}-4)} \\ & =\frac{(\lim_{n\to \infty}(3)\text{−}\lim_{n\to \infty}\frac{7}{{n}^{2}}+\lim_{n\to \infty}\frac{5}{{n}^{4}})}{(\lim_{n\to \infty}\frac{6}{{n}^{4}}-\lim_{n\to \infty}(4))} \\ & =\frac{(\lim_{n\to \infty}(3)\text{−}7\cdot \lim_{n\to \infty}\frac{1}{{n}^{2}}+5\cdot \lim_{n\to \infty}\frac{1}{{n}^{4}})}{(6\cdot \lim_{n\to \infty}\frac{1}{{n}^{4}}-\lim_{n\to \infty}(4))} \\ & =\frac{3-7\cdot 0+5\cdot 0}{6\cdot 0-4}=-\frac{3}{4}.\end{array}$  {eq:fs-id1169736852722}

The sequence converges and its limit is $−3\text{/}4.$
c. Consider the related function $f(x)={2}^{x}\text{/}{x}^{2}$ defined on all real numbers $x>0.$ Since ${2}^{x}\to \infty$ and ${x}^{2}\to \infty$ as $x\to \infty ,$ apply L’Hôpital’s rule and write

$\begin{array}{lllll}\lim_{x\to \infty}\frac{{2}^{x}}{{x}^{2}} & =\lim_{x\to \infty}\frac{{2}^{x}\text{ln}\;2}{2x} & & & \text{Take the derivatives of the numerator and denominator.} \\ & =\lim_{x\to \infty}\frac{{2}^{x}{(\text{ln}\;2)}^{2}}{2} & & & \text{Take the derivatives again.} \\ & =\infty . & & & \end{array}$  {eq:fs-id1169736843724}

We conclude that the sequence diverges.
d. Consider the function $f(x)={(1+\frac{4}{x})}^{x}$ defined on all real numbers $x>0.$ This function has the indeterminate form ${1}^{\infty}$ as $x\to \infty .$ Let

$y=\lim_{x\to \infty}{(1+\frac{4}{x})}^{x}.$  {eq:fs-id1169739077453}

Now taking the natural logarithm of both sides of the equation, we obtain

$\text{ln}(y)=\text{ln}[\lim_{x\to \infty}{(1+\frac{4}{x})}^{x}].$  {eq:fs-id1169739041766}

Since the function $f(x)=\text{ln}\;x$ is continuous on its domain, we can interchange the limit and the natural logarithm. Therefore,

$\text{ln}(y)=\lim_{x\to \infty}[\text{ln}{(1+\frac{4}{x})}^{x}].$  {eq:fs-id1169739041850}

Using properties of logarithms, we write

$\lim_{x\to \infty}[\text{ln}{(1+\frac{4}{x})}^{x}]=\lim_{x\to \infty}x\;\text{ln}(1+\frac{4}{x}).$  {eq:fs-id1169739027115}

Since the right-hand side of this equation has the indeterminate form $\infty \cdot 0,$ rewrite it as a fraction to apply L’Hôpital’s rule. Write

$\lim_{x\to \infty}x\;\text{ln}(1+\frac{4}{x})=\lim_{x\to \infty}\frac{\text{ln}(1+4\text{/}x)}{1\text{/}x}.$  {eq:fs-id1169736850558}

Since the right-hand side is now in the indeterminate form $0\text{/}0,$ we are able to apply L’Hôpital’s rule. We conclude that

$\lim_{x\to \infty}\frac{\text{ln}(1+4\text{/}x)}{1\text{/}x}=\lim_{x\to \infty}\frac{4}{1+4\text{/}x}=4.$  {eq:fs-id1169736741267}

Therefore, $\text{ln}(y)=4$ and $y={e}^{4}.$ Therefore, since $\lim_{x\to \infty}{(1+\frac{4}{x})}^{x}={e}^{4},$ we can conclude that the sequence $\{{(1+\frac{4}{n})}^{n}\}$ converges to ${e}^{4}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739012242} type= 
PROBLEM:
Consider the sequence $\{(5{n}^{2}+1)\text{/}{e}^{n}\}.$ Determine whether or not the sequence converges. If it converges, find its limit.
SOLUTION:
The sequence converges, and its limit is $0.$
COMMENTARY: Hint
Use L’Hôpital’s rule.
:::
:::
Recall that if $f$ is a continuous function at a value $L,$ then $f(x)\to f(L)$ as $x\to L.$ This idea applies to sequences as well. Suppose a sequence ${a}_{n}\to L,$ and a function $f$ is continuous at $L.$ Then $f({a}_{n})\to f(L).$ This property often enables us to find limits for complicated sequences. For example, consider the sequence $\sqrt{5-\frac{3}{{n}^{2}}}.$ From [ref:fs-id1169739198462]a. we know the sequence $5-\frac{3}{{n}^{2}}\to 5.$ Since $\sqrt{x}$ is a continuous function at $x=5,$

$\lim_{n\to \infty}\sqrt{5-\frac{3}{{n}^{2}}}=\sqrt{\lim_{n\to \infty}(5-\frac{3}{{n}^{2}})}=\sqrt{5}.$  {eq:fs-id1169736661324}

:::note [theorem] Continuous Functions Defined on Convergent Sequences
Consider a sequence $\{{a}_{n}\}$ and suppose there exists a real number $L$ such that the sequence $\{{a}_{n}\}$ converges to $L.$ Suppose $f$ is a continuous function at $L.$ Then there exists an integer $N$ such that $f$ is defined at all values ${a}_{n}$ for $n\ge N,$ and the sequence $\{f({a}_{n})\}$ converges to $f(L)$ ([ref:CNX_Calc_Figure_09_01_006]).
:::

### Proof
Let $ϵ>0.$ Since $f$ is continuous at $L,$ there exists $δ>0$ such that $|f(x)-f(L)|<ε$ if $|x-L|<δ.$ Since the sequence $\{{a}_{n}\}$ converges to $L,$ there exists $N$ such that $|{a}_{n}-L|<δ$ for all $n\ge N.$ Therefore, for all $n\ge N,$ $|{a}_{n}-L|<δ,$ which implies $|f({a}_{n})\text{−}f(L)|<ε.$ We conclude that the sequence $\{f({a}_{n})\}$ converges to $f(L).$
□

> FIGURE {fig:CNX_Calc_Figure_09_01_006} src=../../media/CNX_Calc_Figure_09_01_006.jpg
> alt: A graph in quadrant 1 with points (a_1, f(a_1)), (a_3, f(a_3)), (L, f(L)), (a_4, f(a_4)), and (a_2, f(a_2)) connected by smooth curves.
> caption: Because $f$ is a continuous function as the inputs ${a}_{1},{a}_{2},{a}_{3}\text{,…}$ approach $L,$ the outputs $f({a}_{1}),f({a}_{2}),f({a}_{3})\text{,…}$ approach $f(L).$

:::example {ex:fs-id1169739062262} Limits Involving Continuous Functions Defined on Convergent Sequences

:::exercise {fs-id1169739062264} type= 
PROBLEM:
Determine whether the sequence $\{\text{cos}(3\text{/}{n}^{2})\}$ converges. If it converges, find its limit.
SOLUTION:
Since the sequence $\{3\text{/}{n}^{2}\}$ converges to $0$ and $\text{cos}\;x$ is continuous at $x=0,$ we can conclude that the sequence $\{\text{cos}(3\text{/}{n}^{2})\}$ converges and

$\lim_{n\to \infty}\text{cos}(\frac{3}{{n}^{2}})=\text{cos}(0)=1.$  {eq:fs-id1169739062373}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739300565} type= 
PROBLEM:
Determine if the sequence $\{\sqrt{\frac{2n+1}{3n+5}}\}$ converges. If it converges, find its limit.
SOLUTION:
The sequence converges, and its limit is $\sqrt{2\text{/}3}.$
COMMENTARY: Hint
Consider the sequence $\{\frac{2n+1}{3n+5}\}.$
:::
:::
Another theorem involving limits of sequences is an extension of the Squeeze Theorem for limits discussed in [Introduction to Limits](module:m53483).

:::note [theorem] Squeeze Theorem for Sequences
Consider sequences $\{{a}_{n}\},$ $\{{b}_{n}\},$ and $\{{c}_{n}\}.$ Suppose there exists an integer $N$ such that

${a}_{n}\le {b}_{n}\le {c}_{n}\;\text{for all}\;n\ge N.$  {eq:fs-id1169736790784}

If there exists a real number $L$ such that

$\lim_{n\to \infty}{a}_{n}=L=\lim_{n\to \infty}{c}_{n},$  {eq:fs-id1169739209622}

then $\{{b}_{n}\}$ converges and $\lim_{n\to \infty}{b}_{n}=L$ ([ref:CNX_Calc_Figure_09_01_007]).
:::

### Proof
Let $ε>0.$ Since the sequence $\{{a}_{n}\}$ converges to $L,$ there exists an integer ${N}_{1}$ such that $|{a}_{n}-L|<ε$ for all $n\ge {N}_{1}.$ Similarly, since $\{{c}_{n}\}$ converges to $L,$ there exists an integer ${N}_{2}$ such that $|{c}_{n}-L|<ε$ for all $n\ge {N}_{2}.$ By assumption, there exists an integer $N$ such that ${a}_{n}\le {b}_{n}\le {c}_{n}$ for all $n\ge N.$ Let $M$ be the largest of ${N}_{1},{N}_{2},$ and $N.$ We must show that $|{b}_{n}-L|<ε$ for all $n\ge M.$ For all $n\ge M,$

$\text{−}ε<\text{−}|{a}_{n}-L|\le {a}_{n}-L\le {b}_{n}-L\le {c}_{n}-L\le |{c}_{n}-L|<ε.$  {eq:fs-id1169736707656}

Therefore, $\text{−}ε<{b}_{n}-L<ε,$ and we conclude that $|{b}_{n}-L|<ε$ for all $n\ge M,$ and we conclude that the sequence $\{{b}_{n}\}$ converges to $L.$
□

> FIGURE {fig:CNX_Calc_Figure_09_01_007} src=../../media/CNX_Calc_Figure_09_01_007.jpg
> alt: A graph in quadrant 1 with the line y = L and the x axis labeled as the n axis. Points are plotted above and below the line, converging to L as n goes to infinity. Points a_n, b_n, and c_n are plotted at the same n-value. A_n and b_n are above y = L, and c_n is below it.
> caption: Each term ${b}_{n}$ satisfies ${a}_{n}\le {b}_{n}\le {c}_{n}$ and the sequences $\{{a}_{n}\}$ and $\{{c}_{n}\}$ converge to the same limit, so the sequence $\{{b}_{n}\}$ must converge to the same limit as well.

:::example {ex:fs-id1169736700627} Using the Squeeze Theorem

:::exercise {fs-id1169736700629} type= 
PROBLEM:
Use the Squeeze Theorem to find the limit of each of the following sequences.
a. $\{\frac{\text{cos}\;n}{{n}^{2}}\}$
b. $\{{(-\frac{1}{2})}^{n}\}$
SOLUTION:
a. Since $−1\le \text{cos}\;n\le 1$ for all integers $n,$ we have

$-\frac{1}{{n}^{2}}\le \frac{\text{cos}\;n}{{n}^{2}}\le \frac{1}{{n}^{2}}.$  {eq:fs-id1169736851869}

Since $−1\text{/}{n}^{2}\to 0$ and $1\text{/}{n}^{2}\to 0,$ we conclude that $\text{cos}\;n\text{/}{n}^{2}\to 0$ as well.
b. Since

$-\frac{1}{{2}^{n}}\le {(-\frac{1}{2})}^{n}\le \frac{1}{{2}^{n}}$  {eq:fs-id1169736851981}

for all positive integers $n,$ $−1\text{/}{2}^{n}\to 0$ and $1\text{/}{2}^{n}\to 0,$ we can conclude that ${(−1\text{/}2)}^{n}\to 0.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169738920753} type= 
PROBLEM:
Find $\lim_{n\to \infty}\frac{2n-\text{sin}\;n}{n}.$
SOLUTION:
$2$
COMMENTARY: Hint
Use the fact that $−1\le \text{sin}\;n\le 1.$
:::
:::
Using the idea from [ref:fs-id1169736700627]b. we conclude that ${r}^{n}\to 0$ for any real number $r$ such that $−1<r<0.$ If $r<\text{−}1,$ the sequence $\{{r}^{n}\}$ diverges because the terms oscillate and become arbitrarily large in magnitude. If $r=−1,$ the sequence $\{{r}^{n}\}=\{{(−1)}^{n}\}$ diverges, as discussed earlier. Here is a summary of the properties for geometric sequences.

$$ {r}^{n}\to 0\;\text{if}\;|r|<1 $$  {eq:fs-id1169739206861}

$$ {r}^{n}\to 1\;\text{if}\;r=1 $$  {eq:fs-id1169739206892}

$$ {r}^{n}\to \infty \;\text{if}\;r>1 $$  {eq:fs-id1169739206915}

$$ \{{r}^{n}\}\;\text{diverges if}\;r\le \text{−}1 $$  {eq:fs-id1169739206939}

## Bounded Sequences
We now turn our attention to one of the most important theorems involving sequences: the Monotone Convergence Theorem. Before stating the theorem, we need to introduce some terminology and motivation. We begin by defining what it means for a sequence to be bounded.

:::note [definition] Definition
A sequence $\{{a}_{n}\}$ is {term:bounded above} if there exists a real number $M$ such that

${a}_{n}\le M$  {eq:fs-id1169736790140}

for all positive integers $n.$
A sequence $\{{a}_{n}\}$ is {term:bounded below} if there exists a real number $M$ such that

$M\le {a}_{n}$  {eq:fs-id1169736790186}

for all positive integers $n.$
A sequence $\{{a}_{n}\}$ is a {term:bounded sequence} if it is bounded above and bounded below.
If a sequence is not bounded, it is an {term:unbounded sequence}.
:::
For example, the sequence $\{1\text{/}n\}$ is bounded above because $1\text{/}n\le 1$ for all positive integers $n.$ It is also bounded below because $1\text{/}n\ge 0$ for all positive integers *n.* Therefore, $\{1\text{/}n\}$ is a bounded sequence. On the other hand, consider the sequence $\{{2}^{n}\}.$ Because ${2}^{n}\ge 2$ for all $n\ge 1,$ the sequence is bounded below. However, the sequence is not bounded above. Therefore, $\{{2}^{n}\}$ is an unbounded sequence.
We now discuss the relationship between boundedness and convergence. Suppose a sequence $\{{a}_{n}\}$ is unbounded. Then it is not bounded above, or not bounded below, or both. In either case, there are terms ${a}_{n}$ that are arbitrarily large in magnitude as $n$ gets larger. As a result, the sequence $\{{a}_{n}\}$ cannot converge. Therefore, being bounded is a necessary condition for a sequence to converge.

:::note [theorem] Convergent Sequences Are Bounded
If a sequence $\{{a}_{n}\}$ converges, then it is bounded.
:::
Note that a sequence being bounded is not a sufficient condition for a sequence to converge. For example, the sequence $\{{(−1)}^{n}\}$ is bounded, but the sequence diverges because the sequence oscillates between $1$ and $−1$ and never approaches a finite number. We now discuss a sufficient (but not necessary) condition for a bounded sequence to converge.
Consider a bounded sequence $\{{a}_{n}\}.$ Suppose the sequence $\{{a}_{n}\}$ is increasing. That is, ${a}_{1}\le {a}_{2}\le {a}_{3}\text{…}.$ Since the sequence is increasing, the terms are not oscillating. Therefore, there are two possibilities. The sequence could diverge to infinity, or it could converge. However, since the sequence is bounded, it is bounded above and the sequence cannot diverge to infinity. We conclude that $\{{a}_{n}\}$ converges. For example, consider the sequence

$\{\frac{1}{2},\frac{2}{3},\frac{3}{4},\frac{4}{5}\text{,…}\}.$  {eq:fs-id1169739133224}

Since this sequence is increasing and bounded above, it converges. Next, consider the sequence

$\{2,0,3,0,4,0,1,-\frac{1}{2},-\frac{1}{3},-\frac{1}{4}\text{,…}\}.$  {eq:fs-id1169739133274}

Even though the sequence is not increasing for all values of $n,$ we see that $−1\text{/}2<\text{−}1\text{/}3<\text{−}1\text{/}4<\text{⋯}.$ Therefore, starting with the eighth term, ${a}_{8}=−1\text{/}2,$ the sequence is increasing. In this case, we say the sequence is *eventually* increasing. Since the sequence is bounded above, it converges. It is also true that if a sequence is decreasing (or eventually decreasing) and bounded below, it also converges.

:::note [definition] Definition
A sequence $\{{a}_{n}\}$ is increasing for all $n\ge {n}_{0}$ if

${a}_{n}\le {a}_{n+1}\;\text{for all}\;n\ge {n}_{0}.$  {eq:fs-id1169736767089}

A sequence $\{{a}_{n}\}$ is decreasing for all $n\ge {n}_{0}$ if

${a}_{n}\ge {a}_{n+1}\;\text{for all}\;n\ge {n}_{0}.$  {eq:fs-id1169736767163}

A sequence $\{{a}_{n}\}$ is a {term:monotone sequence} for all $n\ge {n}_{0}$ if it is increasing for all $n\ge {n}_{0}$ or decreasing for all $n\ge {n}_{0}.$
:::
We now have the necessary definitions to state the Monotone Convergence Theorem, which gives a sufficient condition for convergence of a sequence.

:::note [theorem] Monotone Convergence Theorem
If $\{{a}_{n}\}$ is a bounded sequence and there exists a positive integer ${n}_{0}$ such that $\{{a}_{n}\}$ is monotone for all $n\ge {n}_{0},$ then $\{{a}_{n}\}$ converges.
:::
The proof of this theorem is beyond the scope of this text. Instead, we provide a graph to show intuitively why this theorem makes sense ([ref:CNX_Calc_Figure_09_01_008]).

> FIGURE {fig:CNX_Calc_Figure_09_01_008} src=../../media/CNX_Calc_Figure_09_01_008.jpg
> alt: A graph in quadrant 1 with the x and y axes labeled n and a_n, respectively. A dotted horizontal is drawn from the a_n axis into quadrant 1. Many points are plotted under the dotted line, increasing in a_n value and converging to the dotted line.
> caption: Since the sequence $\{{a}_{n}\}$ is increasing and bounded above, it must converge.

In the following example, we show how the Monotone Convergence Theorem can be used to prove convergence of a sequence.

:::example {ex:fs-id1169739335796} Using the Monotone Convergence Theorem

:::exercise {fs-id1169739335798} type= 
PROBLEM:
For each of the following sequences, use the Monotone Convergence Theorem to show the sequence converges and find its limit.
a. $\{\frac{{4}^{n}}{n\text{!}}\}$
b. $\{{a}_{n}\}$ defined recursively such that

${a}_{1}=2\;\text{and}\;{a}_{n+1}=\frac{{a}_{n}}{2}+\frac{1}{2{a}_{n}}\;\text{for all}\;n\ge 2.$  {eq:fs-id1169738993786}

SOLUTION:
a. Writing out the first few terms, we see that

$\{\frac{{4}^{n}}{n\text{!}}\}=\{4,8,\frac{32}{3},\frac{32}{3},\frac{128}{15}\text{,…}\}.$  {eq:fs-id1169738993872}

At first, the terms increase. However, after the third term, the terms decrease. In fact, the terms decrease for all $n\ge 3.$ We can show this as follows.

${a}_{n+1}=\frac{{4}^{n+1}}{(n+1)\text{!}}=\frac{4}{n+1}\cdot \frac{{4}^{n}}{n\text{!}}=\frac{4}{n+1}\cdot {a}_{n}\le {a}_{n}\;if\;n\ge 3.$  {eq:fs-id1169739213903}

Therefore, the sequence is decreasing for all $n\ge 3.$ Further, the sequence is bounded below by $0$ because ${4}^{n}\text{/}n\text{!}\ge 0$ for all positive integers $n.$ Therefore, by the Monotone Convergence Theorem, the sequence converges.

To find the limit, we use the fact that the sequence converges and let $L=\lim_{n\to \infty}{a}_{n}.$ Now note this important observation. Consider $\lim_{n\to \infty}{a}_{n+1}.$ Since

$\{{a}_{n+1}\}=\{{a}_{2,}{a}_{3},{a}_{4}\text{,…}\},$  {eq:fs-id1169736790081}

the only difference between the sequences $\{{a}_{n+1}\}$ and $\{{a}_{n}\}$ is that $\{{a}_{n+1}\}$ omits the first term. Since a finite number of terms does not affect the convergence of a sequence,

$\lim_{n\to \infty}{a}_{n+1}=\lim_{n\to \infty}{a}_{n}=L.$  {eq:fs-id1169739110746}

Combining this fact with the equation

${a}_{n+1}=\frac{4}{n+1}{a}_{n}$  {eq:fs-id1169739110806}

and taking the limit of both sides of the equation

$\lim_{n\to \infty}{a}_{n+1}=\lim_{n\to \infty}\frac{4}{n+1}{a}_{n},$  {eq:fs-id1169739195686}

we can conclude that

$L=0\cdot L=0.$  {eq:fs-id1169739195752}

b. Writing out the first several terms,

$\{2,\frac{5}{4},\frac{41}{40},\frac{3281}{3280}\text{,…}\}.$  {eq:fs-id1169739195780}

we can conjecture that the sequence is decreasing and bounded below by $1.$ To show that the sequence is bounded below by $1,$ we can show that

$\frac{{a}_{n}}{2}+\frac{1}{2{a}_{n}}\ge 1.$  {eq:fs-id1169739341340}

To show this, first rewrite

$\frac{{a}_{n}}{2}+\frac{1}{2{a}_{n}}=\frac{{a}_{n}^{2}+1}{2{a}_{n}}.$  {eq:fs-id1169739341380}

Since ${a}_{1}>0$ and ${a}_{2}$ is defined as a sum of positive terms, ${a}_{2}>0.$ Similarly, all terms ${a}_{n}>0.$ Therefore,

$\frac{{a}_{n}^{2}+1}{2{a}_{n}}\ge 1$  {eq:fs-id1169739341490}

if and only if

${a}_{n}^{2}+1\ge 2{a}_{n}.$  {eq:fs-id1169736708125}

Rewriting the inequality ${a}_{n}^{2}+1\ge 2{a}_{n}$ as ${a}_{n}^{2}-2{a}_{n}+1\ge 0,$ and using the fact that

${a}_{n}^{2}-2{a}_{n}+1={({a}_{n}-1)}^{2}\ge 0$  {eq:fs-id1169736708214}

because the square of any real number is nonnegative, we can conclude that

$\frac{{a}_{n}}{2}+\frac{1}{2{a}_{n}}\ge 1.$  {eq:fs-id1169736842868}

To show that the sequence is decreasing, we must show that ${a}_{n+1}\le {a}_{n}$ for all $n\ge 1.$ Since $1\le {a}_{n}^{2},$ it follows that

${a}_{n}^{2}+1\le 2{a}_{n}^{2}.$  {eq:fs-id1169736842957}

Dividing both sides by $2{a}_{n},$ we obtain

$\frac{{a}_{n}}{2}+\frac{1}{2{a}_{n}}\le {a}_{n}.$  {eq:fs-id1169736843005}

Using the definition of ${a}_{n+1},$ we conclude that

${a}_{n+1}=\frac{{a}_{n}}{2}+\frac{1}{2{a}_{n}}\le {a}_{n}.$  {eq:fs-id1169736705845}

Since $\{{a}_{n}\}$ is bounded below and decreasing, by the Monotone Convergence Theorem, it converges.

To find the limit, let $L=\lim_{n\to \infty}{a}_{n}.$ Then using the recurrence relation and the fact that $\lim_{n\to \infty}{a}_{n}=\lim_{n\to \infty}{a}_{n+1},$ we have

$\lim_{n\to \infty}{a}_{n+1}=\lim_{n\to \infty}(\frac{{a}_{n}}{2}+\frac{1}{2{a}_{n}}),$  {eq:fs-id1169736702887}

and therefore

$L=\frac{L}{2}+\frac{1}{2L}.$  {eq:fs-id1169736702967}

Multiplying both sides of this equation by $2L,$ we arrive at the equation

$2{L}^{2}={L}^{2}+1.$  {eq:fs-id1169736703009}

Solving this equation for $L,$ we conclude that ${L}^{2}=1,$ which implies $L=\text{±}1.$ Since all the terms are positive, the limit $L=1.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1169739202292} type= 
PROBLEM:
Consider the sequence $\{{a}_{n}\}$ defined recursively such that ${a}_{1}=1,$ ${a}_{n}={a}_{n-1}\text{/}2.$ Use the Monotone Convergence Theorem to show that this sequence converges and find its limit.
SOLUTION:
$0.$
COMMENTARY: Hint
Show the sequence is decreasing and bounded below.
:::
:::

:::note [project] Fibonacci Numbers
The {index:Fibonacci numbers} are defined recursively by the sequence $\{{F}_{n}\}$ where ${F}_{0}=0,$ ${F}_{1}=1$ and for $n\ge 2,$

${F}_{n}={F}_{n-1}+{F}_{n-2}.$  {eq:fs-id1169739344161}

Here we look at properties of the Fibonacci numbers.
1. Write out the first twenty Fibonacci numbers.
2. Find a closed formula for the Fibonacci sequence by using the following steps.

a. Consider the recursively defined sequence $\{{x}_{n}\}$ where ${x}_{o}=c$ and ${x}_{n+1}=a{x}_{n}.$ Show that this sequence can be described by the closed formula ${x}_{n}=c{a}^{n}$ for all $n\ge 0.$
b. Using the result from part a. as motivation, look for a solution of the equation

${F}_{n}={F}_{n-1}+{F}_{n-2}$  {eq:fs-id1169739344309}

of the form ${F}_{n}=c{λ}^{n}.$ Determine what two values for $λ$ will allow ${F}_{n}$ to satisfy this equation.
c. Consider the two solutions from part b.: ${λ}_{1}$ and ${λ}_{2}.$ Let ${F}_{n}={c}_{1}{λ}_{1}{}^{n}+{c}_{2}{λ}_{2}{}^{n}.$ Use the initial conditions ${F}_{0}$ and ${F}_{1}$ to determine the values for the constants ${c}_{1}$ and ${c}_{2}$ and write the closed formula ${F}_{n}.$

3. Use the answer in 2 c. to show that

$\lim_{n\to \infty}\frac{{F}_{n+1}}{{F}_{n}}=\frac{1+\sqrt{5}}{2}.$  {eq:fs-id1169736856912}

The number $ϕ=(1+\sqrt{5})\text{/}2$ is known as the {index:golden ratio} ([ref:CNX_Calc_Figure_09_01_004] and [ref:CNX_Calc_Figure_09_01_005]).

> FIGURE {fig:CNX_Calc_Figure_09_01_004} src=../../media/CNX_Calc_Figure_09_01_004.jpg
> alt: This is a photo of a sunflower, particularly the curves of the seeds at its middle. The number of spirals in each direction is always a Fibonacci number.
> caption: The seeds in a sunflower exhibit spiral patterns curving to the left and to the right. The number of spirals in each direction is always a Fibonacci number—always. (credit: modification of work by Esdras Calderan, Wikimedia Commons)

> FIGURE {fig:CNX_Calc_Figure_09_01_005} src=../../media/CNX_Calc_Figure_09_01_005.jpg
> alt: This is a photo of the Parthenon, an ancient Greek temple that was designed with the proportions of the Golden Rule. The entire temple’s front side fits perfectly into a rectangle with those proportions, as do the columns, the level between the columns and the roof, and a portion of the trim below the roof.
> caption: The proportion of the golden ratio appears in many famous examples of art and architecture. The ancient Greek temple known as the Parthenon appears to have these proportions, and the ratio appears again in many of the smaller details. (credit: modification of work by TravelingOtter, Flickr)

:::

## Key Concepts {section:key-concepts}
- To determine the convergence of a sequence given by an explicit formula ${a}_{n}=f(n),$ we use the properties of limits for functions.
- If $\{{a}_{n}\}$ and $\{{b}_{n}\}$ are convergent sequences that converge to $A$ and $B,$ respectively, and $c$ is any real number, then the sequence $\{c{a}_{n}\}$ converges to $c\cdot A,$ the sequences $\{{a}_{n}\pm {b}_{n}\}$ converge to $A\pm B,$ the sequence $\{{a}_{n}\cdot {b}_{n}\}$ converges to $A\cdot B,$ and the sequence $\{{a}_{n}\text{/}{b}_{n}\}$ converges to $A\text{/}B,$ provided $B≠0.$
- If a sequence is bounded and monotone, then it converges, but not all convergent sequences are monotone.
- If a sequence is unbounded, it diverges, but not all divergent sequences are unbounded.
- The geometric sequence $\{{r}^{n}\}$ converges if and only if $|r|<1$ or $r=1.$

##  {section:section-exercises}
Find the first six terms of each of the following sequences, starting with $n=1.$

:::exercise {fs-id1169739236365} type= 
PROBLEM:
${a}_{n}=1+{(−1)}^{n}$ for $n\ge 1$
SOLUTION:
${a}_{n}=0$ if $n$ is odd and ${a}_{n}=2$ if $n$ is even
:::

:::exercise {fs-id1169736592245} type= 
PROBLEM:
${a}_{n}={n}^{2}-1$ for $n\ge 1$
:::

:::exercise {fs-id1169736592333} type= 
PROBLEM:
${a}_{1}=1$ and ${a}_{n}={a}_{n-1}+n$ for $n\ge 2$
SOLUTION:
$\{{a}_{n}\}=\{1,3,6,10,15,21\text{,…}\}$
:::

:::exercise {fs-id1169736728776} type= 
PROBLEM:
${a}_{1}=1,$ ${a}_{2}=1$ and ${a}_{n+2}={a}_{n}+{a}_{n+1}$ for $n\ge 1$
:::

:::exercise {fs-id1169736728906} type= 
PROBLEM:
Find an explicit formula for ${a}_{n}$ where ${a}_{1}=1$ and ${a}_{n}={a}_{n-1}+n$ for $n\ge 2.$
SOLUTION:
${a}_{n}=\frac{n(n+1)}{2}$
:::

:::exercise {fs-id1169736720735} type= 
PROBLEM:
Find a formula ${a}_{n}$ for the $n\text{th}$ term of the arithmetic sequence whose first term is ${a}_{1}=1$ such that ${a}_{n+1}-{a}_{n}=17$ for $n\ge 1.$
:::

:::exercise {fs-id1169736659351} type= 
PROBLEM:
Find a formula ${a}_{n}$ for the $n\text{th}$ term of the arithmetic sequence whose first term is ${a}_{1}=−3$ such that ${a}_{n+1}-{a}_{n}=4$ for $n\ge 1.$
SOLUTION:
${a}_{n}=4n-7$
:::

:::exercise {fs-id1169736659450} type= 
PROBLEM:
Find a formula ${a}_{n}$ for the $n\text{th}$ term of the geometric sequence whose first term is ${a}_{1}=1$ such that $\frac{{a}_{n+1}}{{a}_{n}}=10$ for $n\ge 1.$
:::

:::exercise {fs-id1169736725473} type= 
PROBLEM:
Find a formula ${a}_{n}$ for the $n\text{th}$ term of the geometric sequence whose first term is ${a}_{1}=3$ such that $\frac{{a}_{n+1}}{{a}_{n}}=1\text{/}10$ for $n\ge 1.$
SOLUTION:
${a}_{n}={3.10}^{1-n}={30.10}^{\text{−}n}$
:::

:::exercise {fs-id1169736725591} type= 
PROBLEM:
Find an explicit formula for the $n\text{th}$ term of the sequence whose first several terms are $\{0,3,8,15,24,35,48,63,80,99\text{,…}\}.$ (*Hint:* First add one to each term.)
:::

:::exercise {fs-id1169736791974} type= 
PROBLEM:
Find an explicit formula for the $n\text{th}$ term of the sequence satisfying ${a}_{1}=0$ and ${a}_{n}=2{a}_{n-1}+1$ for $n\ge 2.$
SOLUTION:
${a}_{n}={2}^{n-1}-1$
:::
Find a formula for the general term ${a}_{n}$ of each of the following sequences.

:::exercise {fs-id1169736792078} type= 
PROBLEM:
$\{1,0,−1,0,1,0,−1,0\text{,…}\}$ (*Hint:* Find where $\text{sin}\;x$ takes these values)
:::

:::exercise {fs-id1169739095131} type= 
PROBLEM:
$\{1,\text{−}1\text{/}3,1\text{/}5,\text{−}1\text{/}7\text{,…}\}$
SOLUTION:
${a}_{n}=\frac{{(−1)}^{n-1}}{2n-1}$
:::
Find a function $f(n)$ that identifies the $n\text{th}$ term ${a}_{n}$ of the following recursively defined sequences, as ${a}_{n}=f(n).$

:::exercise {fs-id1169736851735} type= 
PROBLEM:
${a}_{1}=1$ and ${a}_{n+1}=\text{−}{a}_{n}$ for $n\ge 1$
:::

:::exercise {fs-id1169736851825} type= 
PROBLEM:
${a}_{1}=2$ and ${a}_{n+1}=2{a}_{n}$ for $n\ge 1$
SOLUTION:
$f(n)={2}^{n}$
:::

:::exercise {fs-id1169736736696} type= 
PROBLEM:
${a}_{1}=1$ and ${a}_{n+1}=(n+1){a}_{n}$ for $n\ge 1$
:::

:::exercise {fs-id1169736736783} type= 
PROBLEM:
${a}_{1}=2$ and ${a}_{n+1}=(n+1){a}_{n}\text{/}2$ for $n\ge 1$
SOLUTION:
$f(n)=n\text{!}\text{/}{2}^{n-2}$
:::

:::exercise {fs-id1169739369097} type= 
PROBLEM:
${a}_{1}=1$ and ${a}_{n+1}={a}_{n}\text{/}{2}^{n}$ for $n\ge 1$
:::
Plot the first $N$ terms of each sequence. State whether the graphical evidence suggests that the sequence converges or diverges.

:::exercise {fs-id1169736605032} type= 
PROBLEM:
**[T]** ${a}_{1}=1,$ ${a}_{2}=2,$ and for $n\ge 2,$ ${a}_{n}=\frac{1}{2}({a}_{n-1}+{a}_{n-2});$ $N=30$
SOLUTION:
Terms oscillate above and below $5\text{/}3$ and appear to converge to $5\text{/}3.$

> IMAGE {img:fs-id1169739094732} src=../../media/CNX_Calc_Figure_09_01_203.jpg
> alt: This is a graph of an oscillating sequence. Terms oscillate above and below 5/3 and seem to converge to 5/3.

:::

:::exercise {fs-id1169739094746} type= 
PROBLEM:
**[T]** ${a}_{1}=1,$ ${a}_{2}=2,$ ${a}_{3}=3$ and for $n\ge 4,$ ${a}_{n}=\frac{1}{3}({a}_{n-1}+{a}_{n-2}+{a}_{n-3}),$ $N=30$
:::

:::exercise {fs-id1169736644109} type= 
PROBLEM:
**[T]** ${a}_{1}=1,$ ${a}_{2}=2,$ and for $n\ge 3,$ ${a}_{n}=\sqrt{{a}_{n-1}{a}_{n-2}};$ $N=30$
SOLUTION:
Terms oscillate above and below $y\approx 1.57...$ and appear to converge to a limit.

> IMAGE {img:fs-id1169736644226} src=../../media/CNX_Calc_Figure_09_01_205.jpg
> alt: This is a graph of the oscillating sequence. Terms oscillate above and below y = 1.57 and seem to converse to 1.57.

:::

:::exercise {fs-id1169736644241} type= 
PROBLEM:
**[T]** ${a}_{1}=1,$ ${a}_{2}=2,$ ${a}_{3}=3,$ and for $n\ge 4,$ ${a}_{n}=\sqrt{{a}_{n-1}{a}_{n-2}{a}_{n-3}};$ $N=30$
:::
Suppose that $\lim_{n\to \infty}{a}_{n}=1,$ $\lim_{n\to \infty}{b}_{n}=−1,$ and $0<\text{−}{b}_{n}<{a}_{n}$ for all $n.$ Evaluate each of the following limits, or state that the limit does not exist, or state that there is not enough information to determine whether the limit exists.

:::exercise {fs-id1169739279051} type= 
PROBLEM:
$\lim_{n\to \infty}(3{a}_{n}-4{b}_{n})$
SOLUTION:
$7$
:::

:::exercise {fs-id1169739279101} type= 
PROBLEM:
$\lim_{n\to \infty}(\frac{1}{2}{b}_{n}-\frac{1}{2}{a}_{n})$
:::

:::exercise {fs-id1169739279160} type= 
PROBLEM:
$\lim_{n\to \infty}\frac{{a}_{n}+{b}_{n}}{{a}_{n}-{b}_{n}}$
SOLUTION:
$0$
:::

:::exercise {fs-id1169736770421} type= 
PROBLEM:
$\lim_{n\to \infty}\frac{{a}_{n}-{b}_{n}}{{a}_{n}+{b}_{n}}$
:::
Find the limit of each of the following sequences, using L’Hôpital’s rule when appropriate.

:::exercise {fs-id1169736770485} type= 
PROBLEM:
$\frac{{n}^{2}}{{2}^{n}}$
SOLUTION:
$0$
:::

:::exercise {fs-id1169736770518} type= 
PROBLEM:
$\frac{{(n-1)}^{2}}{{(n+1)}^{2}}$
:::

:::exercise {fs-id1169736770575} type= 
PROBLEM:
$\frac{\sqrt{n}}{\sqrt{n+1}}$
SOLUTION:
$1$
:::

:::exercise {fs-id1169738894771} type= 
PROBLEM:
${n}^{1\text{/}n}$ (*Hint:* ${n}^{1\text{/}n}={e}^{\frac{1}{n}\;\text{ln}\;n})$
:::
For each of the following sequences, whose $n\text{th}$ terms are indicated, state whether the sequence is bounded and whether it is eventually monotone, increasing, or decreasing.

:::exercise {fs-id1169738894848} type= 
PROBLEM:
$n\text{/}{2}^{n},$ $n\ge 2$
SOLUTION:
bounded, decreasing for $n\ge 2$
:::

:::exercise {fs-id1169738894895} type= 
PROBLEM:
$\text{ln}(1+\frac{1}{n})$
:::

:::exercise {fs-id1169738894931} type= 
PROBLEM:
$\text{sin}\;n$
SOLUTION:
bounded, not monotone
:::

:::exercise {fs-id1169736851001} type= 
PROBLEM:
$\text{cos}({n}^{2})$
:::

:::exercise {fs-id1169736851032} type= 
PROBLEM:
${n}^{1\text{/}n},$ $n\ge 3$
SOLUTION:
bounded, decreasing
:::

:::exercise {fs-id1169736851072} type= 
PROBLEM:
${n}^{−1\text{/}n},$ $n\ge 3$
:::

:::exercise {fs-id1169736851111} type= 
PROBLEM:
$\text{tan}\;n$
SOLUTION:
not monotone, not bounded
:::

:::exercise {fs-id1169736851133} type= 
PROBLEM:
Determine whether the sequence defined as follows has a limit. If it does, find the limit.
${a}_{1}=\sqrt{2},$ ${a}_{2}=\sqrt{2\sqrt{2}},$ ${a}_{3}=\sqrt{2\sqrt{2\sqrt{2}}}$ etc.
:::

:::exercise {fs-id1169739255502} type= 
PROBLEM:
Determine whether the sequence defined as follows has a limit. If it does, find the limit.
${a}_{1}=3,$ ${a}_{n}=\sqrt{2{a}_{n-1}},$ $n=2,3\text{,…}.$
SOLUTION:
${a}_{n}$ is decreasing and bounded below by $2.$ The limit $a$ must satisfy $a=\sqrt{2a}$ so $a=2,$ independent of the initial value.
:::
Use the Squeeze Theorem to find the limit of each of the following sequences.

:::exercise {fs-id1169739255630} type= 
PROBLEM:
$n\;\text{sin}(1\text{/}n)$
:::

:::exercise {fs-id1169739351869} type= 
PROBLEM:
$\frac{\text{cos}(1\text{/}n)-1}{1\text{/}n}$
SOLUTION:
$0$
:::

:::exercise {fs-id1169739351917} type= 
PROBLEM:
${a}_{n}=\frac{n\text{!}}{{n}^{n}}$
:::

:::exercise {fs-id1169739352001} type= 
PROBLEM:
${a}_{n}=\text{sin}\;n\;\text{sin}(1\text{/}n)$
SOLUTION:
$0:|\text{sin}\;x|\le |x|$ and $|\text{sin}\;x|\le 1$ so $-\frac{1}{n}\le {a}_{n}\le \frac{1}{n}).$
:::
For the following sequences, plot the first $25$ terms of the sequence and state whether the graphical evidence suggests that the sequence converges or diverges.

:::exercise {fs-id1169736692428} type= 
PROBLEM:
**[T]** ${a}_{n}=\text{sin}\;n$
:::

:::exercise {fs-id1169736692476} type= 
PROBLEM:
**[T]** ${a}_{n}=\text{cos}\;n$
SOLUTION:
Graph oscillates and suggests no limit.

> IMAGE {img:fs-id1169736692509} src=../../media/CNX_Calc_Figure_09_01_202.jpg
> alt: This is a graph that oscillates between 1 and -1 from 0 to 25 on the x axis. There appears to be no limit.

:::
Determine the limit of the sequence or show that the sequence diverges. If it converges, find its limit.

:::exercise {fs-id1169736692528} type= 
PROBLEM:
${a}_{n}={\text{tan}}^{−1}({n}^{2})$
:::

:::exercise {fs-id1169736776324} type= 
PROBLEM:
${a}_{n}={(2n)}^{1\text{/}n}-{n}^{1\text{/}n}$
SOLUTION:
${n}^{1\text{/}n}\to 1$ and ${2}^{1\text{/}n}\to 1,$ so ${a}_{n}\to 0$
:::

:::exercise {fs-id1169739367079} type= 
PROBLEM:
${a}_{n}=\frac{\text{ln}({n}^{2})}{\text{ln}(2n)}$
:::

:::exercise {fs-id1169736647158} type= 
PROBLEM:
${a}_{n}={(1-\frac{2}{n})}^{n}$
SOLUTION:
Since ${(1+1\text{/}n)}^{n}\to e,$ one has ${(1-2\text{/}n)}^{n}\approx {(1+k)}^{−2k}\to {e}^{−2}$ as $k\to \infty .$
:::

:::exercise {fs-id1169736647312} type= 
PROBLEM:
${a}_{n}=\text{ln}(\frac{n+2}{{n}^{2}-3})$
:::

:::exercise {fs-id1169736768917} type= 
PROBLEM:
${a}_{n}=\frac{{2}^{n}+{3}^{n}}{{4}^{n}}$
SOLUTION:
${2}^{n}+{3}^{n}\le 2\cdot {3}^{n}$ and ${3}^{n}\text{/}{4}^{n}\to 0$ as $n\to \infty ,$ so ${a}_{n}\to 0$ as $n\to \infty .$
:::

:::exercise {fs-id1169739067285} type= 
PROBLEM:
${a}_{n}=\frac{{(1000)}^{n}}{n\text{!}}$
:::

:::exercise {fs-id1169739235544} type= 
PROBLEM:
${a}_{n}=\frac{{(n\text{!})}^{2}}{(2n)\text{!}}$
SOLUTION:
$\frac{{a}_{n+1}}{{a}_{n}}=n\text{!}\text{/}(n+1)(n+2)\text{⋯}\;(2n)$ $=\frac{1\cdot 2\cdot 3\text{⋯}n}{(n+1)(n+2)\text{⋯}\;(2n)}<1\text{/}{2}^{n}.$ In particular, ${a}_{n+1}\text{/}{a}_{n}\le 1\text{/}2,$ so ${a}_{n}\to 0$ as $n\to \infty .$
:::
Newton’s method seeks to approximate a solution $f(x)=0$ that starts with an initial approximation ${x}_{0}$ and successively defines a sequence ${x}_{n+1}={x}_{n}-\frac{f({x}_{n})}{{f}^{'}({x}_{n})}.$ For the given choice of $f$ and ${x}_{0},$ write out the formula for ${x}_{n+1}.$ If the sequence appears to converge, give an exact formula for the solution $x,$ then identify the limit $x$ accurate to four decimal places and the smallest $n$ such that ${x}_{n}$ agrees with $x$ up to four decimal places.

:::exercise {fs-id1169739260381} type= 
PROBLEM:
**[T]** $f(x)={x}^{2}-2,$ ${x}_{0}=1$
:::

:::exercise {fs-id1169739260524} type= 
PROBLEM:
**[T]** $f(x)={(x-1)}^{2}-2,$ ${x}_{0}=2$
SOLUTION:
${x}_{n+1}={x}_{n}-({({x}_{n}-1)}^{2}-2)\text{/}2({x}_{n}-1);$ $x=1+\sqrt{2},$ $x\approx 2.4142,$ $n=5$
:::

:::exercise {fs-id1169739265309} type= 
PROBLEM:
**[T]** $f(x)={e}^{x}-2,$ ${x}_{0}=1$
:::

:::exercise {fs-id1169736590163} type= 
PROBLEM:
**[T]** $f(x)=\text{ln}\;x-1,$ ${x}_{0}=2$
SOLUTION:
${x}_{n+1}={x}_{n}-{x}_{n}(\text{ln}({x}_{n})-1);$ $x=e,$ $x\approx 2.7183,$ $n=5$
:::

:::exercise {fs-id1169736791322} type= 
PROBLEM:
**[T]** Suppose you start with one liter of vinegar and repeatedly remove $0.1\;\text{L,}$ replace with water, mix, and repeat.
a. Find a formula for the concentration after $n$ steps.
b. After how many steps does the mixture contain less than $10\text{\%}$ vinegar?
:::

:::exercise {fs-id1169736791494} type= 
PROBLEM:
**[T]** A lake initially contains $2000$ fish. Suppose that in the absence of predators or other causes of removal, the fish population increases by $6\text{\%}$ each month. However, factoring in all causes, $150$ fish are lost each month.
a. Explain why the fish population after $n$ months is modeled by ${P}_{n}=1.06{P}_{n-1}-150$ with ${P}_{0}=2000.$
b. How many fish will be in the pond after one year?
SOLUTION:
a. Without losses, the population would obey ${P}_{n}=1.06{P}_{n-1}.$ The subtraction of $150$ accounts for fish losses. b. After $12$ months, we have ${P}_{12}\approx 1494.$
:::

:::exercise {fs-id1169739249796} type= 
PROBLEM:
**[T]** A bank account earns $5\text{\%}$ interest compounded monthly. Suppose that $\text{\$}1000$ is initially deposited into the account, but that $\text{\$}10$ is withdrawn each month.
a. Show that the amount in the account after $n$ months is ${A}_{n}=(1+.05\text{/}12){A}_{n-1}-10;$ ${A}_{0}=1000.$
b. How much money will be in the account after $1$ year?
c. Is the amount increasing or decreasing?
d. Suppose that instead of $\text{\$}10,$ a fixed amount $d$ dollars is withdrawn each month. Find a value of $d$ such that the amount in the account after each month remains $\text{\$}1000.$
e. What happens if $d$ is greater than this amount?
:::

:::exercise {fs-id1169736854831} type= 
PROBLEM:
**[T]** A student takes out a college loan of $\text{\$}10,000$ at an annual percentage rate of $6\text{\%},$ compounded monthly.
a. If the student makes payments of $\text{\$}100$ per month, how much does the student owe after $12$ months?
b. After how many months will the loan be paid off?
SOLUTION:
a. The student owes $\text{\$}9383$ after $12$ months. b. The loan will be paid in full after $139$ months or eleven and a half years.
:::

:::exercise {fs-id1169736841737} type= 
PROBLEM:
**[T]** Consider a series combining geometric growth and arithmetic decrease. Let ${a}_{1}=1.$ Fix $a>1$ and $0<b<a.$ Set ${a}_{n+1}=a.{a}_{n}-b.$ Find a formula for ${a}_{n+1}$ in terms of ${a}^{n},$ $a,$ and $b$ and a relationship between $a$ and $b$ such that ${a}_{n}$ converges.
:::

:::exercise {fs-id1169736790431} type= 
PROBLEM:
**[T]** The binary representation $x=0.{b}_{1}{b}_{2}{b}_{3}...$ of a number $x$ between $0$ and $1$ can be defined as follows. Let ${b}_{1}=0$ if $x<1\text{/}2$ and ${b}_{1}=1$ if $1\text{/}2\le x<1.$ Let ${x}_{1}=2x-{b}_{1}.$ Let ${b}_{2}=0$ if ${x}_{1}<1\text{/}2$ and ${b}_{2}=1$ if $1\text{/}2\le x<1.$ Let ${x}_{2}=2{x}_{1}-{b}_{2}$ and in general, ${x}_{n}=2{x}_{n-1}-{b}_{n}$ and ${b}_{n-1}=0$ if ${x}_{n}<1\text{/}2$ and ${b}_{n-1}=1$ if $1\text{/}2\le {x}_{n}<1.$ Find the binary expansion of $1\text{/}3.$
SOLUTION:
${b}_{1}=0,$ ${x}_{1}=2\text{/}3,$ ${b}_{2}=1,$ ${x}_{2}=4\text{/}3-1=1\text{/}3,$ so the pattern repeats, and $1\text{/}3=0.010101\text{…}.$
:::

:::exercise {fs-id1169736845086} type= 
PROBLEM:
**[T]** To find an approximation for $\pi ,$ set ${a}_{0}=\sqrt{2+1},$ ${a}_{1}=\sqrt{2+{a}_{0}},$ and, in general, ${a}_{n+1}=\sqrt{2+{a}_{n}}.$ Finally, set ${p}_{n}={3.2}^{n+1}\sqrt{2-{a}_{n}}.$ Find the first ten terms of ${p}_{n}$ and compare the values to $\pi .$
:::
For the following two exercises, assume that you have access to a computer program or Internet source that can generate a list of zeros and ones of any desired length. Pseudorandom number generators (PRNGs) play an important role in simulating random noise in physical systems by creating sequences of zeros and ones that appear like the result of flipping a coin repeatedly. One of the simplest types of PRNGs recursively defines a random-looking sequence of $N$ integers ${a}_{1},{a}_{2}\text{,…},{a}_{N}$ by fixing two special integers $K$ and $M$ and letting ${a}_{n+1}$ be the remainder after dividing $K.{a}_{n}$ into $M,$ then creates a bit sequence of zeros and ones whose $n\text{th}$ term ${b}_{n}$ is equal to one if ${a}_{n}$ is odd and equal to zero if ${a}_{n}$ is even. If the bits ${b}_{n}$ are pseudorandom, then the behavior of their average $({b}_{1}+{b}_{2}+\text{⋯}+{b}_{N})\text{/}N$ should be similar to behavior of averages of truly randomly generated bits.

:::exercise {fs-id1169739191446} type= 
PROBLEM:
**[T]** Starting with $K=16,807$ and $M=2,147,483,647,$ using ten different starting values of ${a}_{1},$ compute sequences of bits ${b}_{n}$ up to $n=1000,$ and compare their averages to ten such sequences generated by a random bit generator.
SOLUTION:
For the starting values ${a}_{1}=1,$ ${a}_{2}=2\text{,…},$ ${a}_{1}=10,$ the corresponding bit averages calculated by the method indicated are $0.5220,$ $0.5000,$ $0.4960,$ $0.4870,$ $0.4860,$ $0.4680,$ $0.5130,$ $0.5210,$ $0.5040,$ and $0.4840.$ Here is an example of ten corresponding averages of strings of $1000$ bits generated by a random number generator: $0.4880,$ $0.4870,$ $0.5150,$ $0.5490,$ $0.5130,$ $0.5180,$ $0.4860,$ $0.5030,$ $0.5050,$ $0.4980.$ There is no real pattern in either type of average. The random-number-generated averages range between $0.4860$ and $0.5490,$ a range of $0.0630,$ whereas the calculated PRNG bit averages range between $0.4680$ and $0.5220,$ a range of $0.0540.$
:::

:::exercise {fs-id1169739275473} type= 
PROBLEM:
**[T]** Find the first $1000$ digits of $\pi$ using either a computer program or Internet resource. Create a bit sequence ${b}_{n}$ by letting ${b}_{n}=1$ if the $n\text{th}$ digit of $\pi$ is odd and ${b}_{n}=0$ if the $n\text{th}$ digit of $\pi$ is even. Compute the average value of ${b}_{n}$ and the average value of ${d}_{n}=|{b}_{n+1}-{b}_{n}|,$ $n=1\text{,...},999.$ Does the sequence ${b}_{n}$ appear random? Do the differences between successive elements of ${b}_{n}$ appear random?
:::

## Glossary
- {def} **arithmetic sequence**: a sequence in which the difference between every pair of consecutive terms is the same is called an arithmetic sequence
- {def} **bounded above**: a sequence $\{{a}_{n}\}$ is bounded above if there exists a constant $M$ such that ${a}_{n}\le M$ for all positive integers $n$
- {def} **bounded below**: a sequence $\{{a}_{n}\}$ is bounded below if there exists a constant $M$ such that $M\le {a}_{n}$ for all positive integers $n$
- {def} **bounded sequence**: a sequence $\{{a}_{n}\}$ is bounded if there exists a constant $M$ such that $|{a}_{n}|\le M$ for all positive integers $n$
- {def} **convergent sequence**: a convergent sequence is a sequence $\{{a}_{n}\}$ for which there exists a real number $L$ such that ${a}_{n}$ is arbitrarily close to $L$ as long as $n$ is sufficiently large
- {def} **divergent sequence**: a sequence that is not convergent is divergent
- {def} **explicit formula**: a sequence may be defined by an explicit formula such that ${a}_{n}=f(n)$
- {def} **geometric sequence**: a sequence $\{{a}_{n}\}$ in which the ratio ${a}_{n+1}\text{/}{a}_{n}$ is the same for all positive integers $n$ is called a geometric sequence
- {def} **index variable**: the subscript used to define the terms in a sequence is called the index
- {def} **limit of a sequence**: the real number $L$ to which a sequence converges is called the limit of the sequence
- {def} **monotone sequence**: an increasing or decreasing sequence
- {def} **recurrence relation**: a recurrence relation is a relationship in which a term ${a}_{n}$ in a sequence is defined in terms of earlier terms in the sequence
- {def} **sequence**: an ordered list of numbers of the form ${a}_{1},{a}_{2},{a}_{3}\text{,…}$ is a sequence
- {def} **term**: the number ${a}_{n}$ in the sequence $\{{a}_{n}\}$ is called the $n\text{th}$ term of the sequence
- {def} **unbounded sequence**: a sequence that is not bounded is called unbounded

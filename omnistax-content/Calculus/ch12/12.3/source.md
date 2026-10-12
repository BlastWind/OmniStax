# The Dot Product

## Learning Objectives {section:learning-objectives}
- Calculate the dot product of two given vectors.
- Determine whether two given vectors are perpendicular.
- Find the direction cosines of a given vector.
- Explain what is meant by the vector projection of one vector onto another vector, and describe how to compute it.
- Calculate the work done by a given force.

If we apply a force to an object so that the object moves, we say that *work* is done by the force. In [Introduction to Applications of Integration](module:m53638) on integration applications, we looked at a constant force and we assumed the force was applied in the direction of motion of the object. Under those conditions, work can be expressed as the product of the force acting on an object and the distance the object moves. In this chapter, however, we have seen that both force and the motion of an object can be represented by vectors.
In this section, we develop an operation called the *dot product*, which allows us to calculate work in the case when the force vector and the motion vector have different directions. The dot product essentially tells us how much of the force vector is applied in the direction of the motion vector. The dot product can also help us measure the angle formed by a pair of vectors and the position of a vector relative to the coordinate axes. It even provides a simple test to determine whether two vectors meet at a right angle.

## The Dot Product and Its Properties
We have already learned how to add and subtract vectors. In this chapter, we investigate two types of vector multiplication. The first type of vector multiplication is called the dot product, based on the notation we use for it, and it is defined as follows:

:::note [definition] Definition
The {term:dot product} of vectors $\textbf{u}=\langle {u}_{1},{u}_{2},{u}_{3}\rangle$ and $\textbf{v}=\langle {v}_{1},{v}_{2},{v}_{3}\rangle$ is given by the sum of the products of the components

$$ \textbf{u}\cdot \textbf{v}={u}_{1}{v}_{1}+{u}_{2}{v}_{2}+{u}_{3}{v}_{3}. $$  {eq:fs-id1163723335787}

:::
Note that if $\text{u}$ and $\text{v}$ are two-dimensional vectors, we calculate the dot product in a similar fashion. Thus, if $\textbf{u}=\langle {u}_{1},{u}_{2}\rangle$ and $\textbf{v}=\langle {v}_{1},{v}_{2}\rangle ,$ then

$\textbf{u}\cdot \textbf{v}={u}_{1}{v}_{1}+{u}_{2}{v}_{2}.$  {eq:fs-id1163724036465}

When two vectors are combined under addition or subtraction, the result is a vector. When two vectors are combined using the dot product, the result is a scalar. For this reason, the dot product is often called the *scalar product*. It may also be called the *inner product*.

:::example {ex:fs-id1163723341367} Calculating Dot Products

:::exercise {fs-id1163723719540} type= 
PROBLEM:
a. Find the dot product of $\textbf{u}=\langle 3,5,2\rangle$ and $\textbf{v}=\langle −1,3,0\rangle .$
b. Find the scalar product of $\textbf{p}=10\textbf{i}-4\textbf{j}+7\textbf{k}$ and $\textbf{q}=−2\textbf{i}+\textbf{j}+6\textbf{k}.$
SOLUTION:
a. Substitute the vector components into the formula for the dot product:

$\begin{array}{rl}\textbf{u}\cdot \textbf{v} & ={u}_{1}{v}_{1}+{u}_{2}{v}_{2}+{u}_{3}{v}_{3} \\ & =3(−1)+5(3)+2(0)=−3+15+0=12.\end{array}$  {eq:fs-id1163723138109}

b. The calculation is the same if the vectors are written using standard unit vectors. We still have three components for each vector to substitute into the formula for the dot product:

$\begin{array}{rl}\textbf{p}\cdot \textbf{q} & ={u}_{1}{v}_{1}+{u}_{2}{v}_{2}+{u}_{3}{v}_{3} \\ & =10(−2)+(−4)(1)+(7)(6)=−20-4+42=18.\end{array}$  {eq:fs-id1163724072785}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723961258} type= 
PROBLEM:
Find $\textbf{u}\cdot \textbf{v},$ where $\textbf{u}=\langle 2,9,−1\rangle$ and $\textbf{v}=\langle −3,1,−4\rangle .$
SOLUTION:
7
COMMENTARY: Hint
Multiply corresponding components and then add their products.
:::
:::
Like vector addition and subtraction, the dot product has several algebraic properties. We prove three of these properties and leave the rest as exercises.

:::note [theorem] Properties of the Dot Product
Let $\textbf{u},$ $\textbf{v},$ and $\textbf{w}$ be vectors, and let *c* be a scalar.

$\begin{array}{lllrlllll}\text{i.} & & & \textbf{u}\cdot \textbf{v} & = & \textbf{v}\cdot \textbf{u} & & & \text{Commutative property} \\ \text{ii.} & & & \textbf{u}\cdot (\textbf{v}+\textbf{w}) & = & \textbf{u}\cdot \textbf{v}+\textbf{u}\cdot \textbf{w} & & & \text{Distributive property} \\ \text{iii.} & & & c(\textbf{u}\cdot \textbf{v}) & = & (c\textbf{u})\cdot \textbf{v}=\textbf{u}\cdot (c\textbf{v}) & & & \text{Associative property} \\ \text{iv.} & & & \textbf{v}\cdot \textbf{v} & = & {\| \textbf{v}\|}^{2} & & & \text{Property of magnitude}\end{array}$  {eq:fs-id1163724039861}

:::

### Proof
Let $\textbf{u}=\langle {u}_{1},{u}_{2},{u}_{3}\rangle$ and $\textbf{v}=\langle {v}_{1},{v}_{2},{v}_{3}\rangle .$ Then

$\begin{array}{rl}\textbf{u}\cdot \textbf{v} & =\langle {u}_{1},{u}_{2},{u}_{3}\rangle \cdot \langle {v}_{1},{v}_{2},{v}_{3}\rangle \\ & ={u}_{1}{v}_{1}+{u}_{2}{v}_{2}+{u}_{3}{v}_{3} \\ & ={v}_{1}{u}_{1}+{v}_{2}{u}_{2}+{v}_{3}{u}_{3} \\ & =\langle {v}_{1},{v}_{2},{v}_{3}\rangle \cdot \langle {u}_{1},{u}_{2},{u}_{3}\rangle \\ & =\textbf{v}\cdot \textbf{u}.\end{array}$  {eq:fs-id1163723961785}

The associative property looks like the associative property for real-number multiplication, but pay close attention to the difference between scalar and vector objects:

$\begin{array}{rl}c(\textbf{u}\cdot \textbf{v}) & =c({u}_{1}{v}_{1}+{u}_{2}{v}_{2}+{u}_{3}{v}_{3}) \\ & =c({u}_{1}{v}_{1})+c({u}_{2}{v}_{2})+c({u}_{3}{v}_{3}) \\ & =(c{u}_{1}){v}_{1}+(c{u}_{2}){v}_{2}+(c{u}_{3}){v}_{3} \\ & =\langle c{u}_{1},c{u}_{2},c{u}_{3}\rangle \cdot \langle {v}_{1},{v}_{2},{v}_{3}\rangle \\ & =c\langle {u}_{1},{u}_{2},{u}_{3}\rangle \cdot \langle {v}_{1},{v}_{2},{v}_{3}\rangle \\ & =(c\textbf{u})\cdot \textbf{v}.\end{array}$  {eq:fs-id1163724081559}

The proof that $c(\textbf{u}\cdot \textbf{v})=\textbf{u}\cdot (c\textbf{v})$ is similar.
The fourth property shows the relationship between the magnitude of a vector and its dot product with itself:

$\begin{array}{rl}\textbf{v}\cdot \textbf{v} & =\langle {v}_{1},{v}_{2},{v}_{3}\rangle \cdot \langle {v}_{1},{v}_{2},{v}_{3}\rangle \\ & ={({v}_{1})}^{2}+{({v}_{2})}^{2}+{({v}_{3})}^{2} \\ & ={[\sqrt{{({v}_{1})}^{2}+{({v}_{2})}^{2}+{({v}_{3})}^{2}}]}^{2} \\ & ={\| \textbf{v}\|}^{2}.\end{array}$  {eq:fs-id1163723299164}

□
Note that the definition of the dot product yields $\mathbf{0}\cdot \textbf{v}=0.$ By property iv., if $\textbf{v}\cdot \textbf{v}=0,$ then $\textbf{v}=\mathbf{0}.$

:::example {ex:fs-id1163723089891} Using Properties of the Dot Product

:::exercise {fs-id1163723089893} type= 
PROBLEM:
Let $\textbf{a}=\langle 1,2,−3\rangle ,$ $\textbf{b}=\langle 0,2,4\rangle ,$ and $\textbf{c}=\langle 5,−1,3\rangle .$ Find each of the following products.
a. $(\textbf{a}\cdot \textbf{b})\textbf{c}$
b. $\textbf{a}\cdot (2\textbf{c})$
c. ${\| \textbf{b}\|}^{2}$
SOLUTION:
a. Note that this expression asks for the scalar multiple of **c** by $\textbf{a}\cdot \textbf{b}\text{:}$

$\begin{array}{rl}(\textbf{a}\cdot \textbf{b})\textbf{c} & =(\langle 1,2,−3\rangle \cdot \langle 0,2,4\rangle )\langle 5,−1,3\rangle \\ & =(1(0)+2(2)+(−3)(4))\langle 5,−1,3\rangle \\ & =−8\langle 5,−1,3\rangle \\ & =\langle −40,8,−24\rangle .\end{array}$  {eq:fs-id1163723334314}

b. This expression is a dot product of vector **a** and scalar multiple 2**c**:

$\begin{array}{rl}\textbf{a}\cdot (2\textbf{c}) & =2(\textbf{a}\cdot \textbf{c}) \\ & =2(\langle 1,2,−3\rangle \cdot \langle 5,−1,3\rangle ) \\ & =2(1(5)+2(−1)+(−3)(3)) \\ & =2(−6)=−12.\end{array}$  {eq:fs-id1163723334575}

c. Simplifying this expression is a straightforward application of the dot product:

${\| \textbf{b}\|}^{2}=\textbf{b}\cdot \textbf{b}=\langle 0,2,4\rangle \cdot \langle 0,2,4\rangle ={0}^{2}+{2}^{2}+{4}^{2}=0+4+16=20.$  {eq:fs-id1163723306268}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723289021} type= 
PROBLEM:
Find the following products for $\textbf{p}=\langle 7,0,2\rangle ,$ $\textbf{q}=\langle −2,2,−2\rangle ,$ and $\textbf{r}=\langle 0,2,−3\rangle .$
a. $(\textbf{r}\cdot \textbf{p})\textbf{q}$
b. ${\| \textbf{p}\|}^{2}$
SOLUTION:
a. $(\textbf{r}\cdot \textbf{p})\textbf{q}=\langle 12,−12,12\rangle ;$ b. ${\| \textbf{p}\|}^{2}=53$
COMMENTARY: Hint
$\textbf{r}\cdot \textbf{p}$ is a scalar.
:::
:::

## Using the Dot Product to Find the Angle between Two Vectors
When two nonzero vectors are placed in standard position, whether in two dimensions or three dimensions, they form an angle between them ([ref:CNX_Calc_Figure_12_03_001]). The dot product provides a way to find the measure of this angle. This property is a result of the fact that we can express the dot product in terms of the cosine of the angle formed by two vectors.

> FIGURE {fig:CNX_Calc_Figure_12_03_001} src=../../media/CNX_Calc_Figure_12_03_001.jpg
> alt: This figure is two vectors with the same initial point. The first vector is labeled “u,” and the second vector is labeled “v.” The angle between the two vectors is labeled “theta.”
> caption: Let *θ* be the angle between two nonzero vectors $\text{u}$ and $\text{v}$ such that $0\le \theta \le \pi .$

:::note [theorem] Evaluating a Dot Product
The dot product of two vectors is the product of the magnitude of each vector and the cosine of the angle between them:

$$ \textbf{u}\cdot \textbf{v}=\| \textbf{u}\| \| \textbf{v}\| \text{cos}\;\theta . $$  {eq:fs-id1163724054275}

:::

### Proof
Place vectors $\text{u}$ and $\text{v}$ in standard position and consider the vector $\textbf{v}-\textbf{u}$ ([ref:CNX_Calc_Figure_12_03_002]). These three vectors form a triangle with side lengths $\| \textbf{u}\| ,\| \textbf{v}\| ,\;\text{and}\;\| \textbf{v}-\textbf{u}\| .$

> FIGURE {fig:CNX_Calc_Figure_12_03_002} src=../../media/CNX_Calc_Figure_12_03_002.jpg
> alt: This figure is two vectors with the same initial point. The first vector is labeled “u,” and the second vector is labeled “v.” The angle between the two vectors is labeled “theta.” There is also a third vector from the terminal point of vector u to the terminal point of vector v. It is labeled “v – u.”
> caption: The lengths of the sides of the triangle are given by the magnitudes of the vectors that form the triangle.

Recall from trigonometry that the law of cosines describes the relationship among the side lengths of the triangle and the angle *θ*. Applying the law of cosines here gives

${\| \textbf{v}-\textbf{u}\|}^{2}={\| \textbf{u}\|}^{2}+{\| \textbf{v}\|}^{2}-2\| \textbf{u}\| \| \textbf{v}\| \text{cos}\;\theta .$  {eq:fs-id1163724054167}

The dot product provides a way to rewrite the left side of this equation:

$\begin{array}{rl}{\| \textbf{v}-\textbf{u}\|}^{2} & =(\textbf{v}-\textbf{u})\cdot (\textbf{v}-\textbf{u}) \\ & =(\textbf{v}-\textbf{u})\cdot \textbf{v}-(\textbf{v}-\textbf{u})\cdot \textbf{u} \\ & =\textbf{v}\cdot \textbf{v}-\textbf{u}\cdot \textbf{v}-\textbf{v}\cdot \textbf{u}+\textbf{u}\cdot \textbf{u} \\ & =\textbf{v}\cdot \textbf{v}-\textbf{u}\cdot \textbf{v}-\textbf{u}\cdot \textbf{v}+\textbf{u}\cdot \textbf{u} \\ & ={\| \textbf{v}\|}^{2}-2\textbf{u}\cdot \textbf{v}+{\| \textbf{u}\|}^{2}.\end{array}$  {eq:fs-id1163724085761}

Substituting into the law of cosines yields

$\begin{array}{rll}{\| \textbf{v}-\textbf{u}\|}^{2} & = & {\| \textbf{u}\|}^{2}+{\| \textbf{v}\|}^{2}-2\| \textbf{u}\| \| \textbf{v}\| \text{cos}\;\theta \\ {\| \textbf{v}\|}^{2}-2\textbf{u}\cdot \textbf{v}+{\| \textbf{u}\|}^{2} & = & {\| \textbf{u}\|}^{2}+{\| \textbf{v}\|}^{2}-2\| \textbf{u}\| \| \textbf{v}\| \text{cos}\;\theta \\ -2\textbf{u}\cdot \textbf{v} & = & −2\| \textbf{u}\| \| \textbf{v}\| \text{cos}\;\theta \\ \textbf{u}\cdot \textbf{v} & = & \| \textbf{u}\| \| \textbf{v}\| \text{cos}\;\theta .\end{array}$  {eq:fs-id1163724104877}

□
We can use this form of the dot product to find the measure of the angle between two nonzero vectors. The following equation rearranges [ref:fs-id1163723335787] to solve for the cosine of the angle:

$$ \text{cos}\;\theta =\frac{\textbf{u}\cdot \textbf{v}}{\| \textbf{u}\| \| \textbf{v}\|}. $$  {eq:fs-id1163723122506}

Using this equation, we can find the cosine of the angle between two nonzero vectors. Since we are considering the smallest angle between the vectors, we assume $0\text{°}\le \theta \le 180\text{°}$ (or $0\le \theta \le \pi$ if we are working in radians). The inverse cosine is unique over this range, so we are then able to determine the measure of the angle $\theta .$

:::example {ex:fs-id1163724080388} Finding the Angle between Two Vectors

:::exercise {fs-id1163724080390} type= 
PROBLEM:
Find the measure of the angle between each pair of vectors.
a. **i** + **j** + **k** and 2**i** – **j** – 3**k**
b. $\langle 2,5,6\rangle$ and $\langle −2,−4,4\rangle$
SOLUTION:
a. To find the cosine of the angle formed by the two vectors, substitute the components of the vectors into [ref:fs-id1163723122506]:

$\begin{array}{rl}\text{cos}\;\theta & =\frac{(\textbf{i}+\textbf{j}+\textbf{k})\cdot (2\textbf{i}-\textbf{j}-3\textbf{k})}{\| \textbf{i}+\textbf{j}+\textbf{k}\| \cdot \| 2\textbf{i}-\textbf{j}-3\textbf{k}\|} \\ & =\frac{1(2)+(1)(−1)+(1)(−3)}{\sqrt{{1}^{2}+{1}^{2}+{1}^{2}}\;\sqrt{{2}^{2}+{(−1)}^{2}+{(−3)}^{2}}} \\ & =\frac{−2}{\sqrt{3}\;\sqrt{14}}=\frac{−2}{\sqrt{42}}.\end{array}$  {eq:fs-id1163723311058}

Therefore, $\theta =\text{arccos}\;\frac{−2}{\sqrt{42}}$.
b. Start by finding the value of the cosine of the angle between the vectors:

$\begin{array}{rl}\text{cos}\;\theta & =\frac{\langle 2,5,6\rangle \cdot \langle −2,−4,4\rangle}{\| \langle 2,5,6\rangle \| \cdot \| \langle −2,−4,4\rangle \|} \\ & =\frac{2(−2)+(5)(−4)+(6)(4)}{\sqrt{{2}^{2}+{5}^{2}+{6}^{2}}\;\sqrt{{(−2)}^{2}+{(−4)}^{2}+{4}^{2}}} \\ & =\frac{0}{\sqrt{65}\;\sqrt{36}}=0.\end{array}$  {eq:fs-id1163724079328}

Now, $\text{cos}\;\theta =0$ and $0\le \theta \le \pi ,$ so $\theta =\pi \text{/}2.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723077684} type= 
PROBLEM:
Find the measure of the angle, in radians, formed by vectors $\textbf{a}=\langle 1,2,0\rangle$ and $\textbf{b}=\langle 2,4,1\rangle .$ Round to the nearest hundredth.
SOLUTION:
$\theta \approx 0.22$ rad
COMMENTARY: Hint
Use the equation $\text{cos}\;\theta =\frac{\textbf{u}\cdot \textbf{v}}{\| \textbf{u}\| \cdot \| \textbf{v}\|}.$
:::
:::
The angle between two vectors can be acute $(0<\text{cos}\;\theta <1),$ obtuse $(−1<\text{cos}\;\theta <0),$ or straight $(\text{cos}\;\theta =−1).$ If $\text{cos}\;\theta =1,$ then both vectors have the same direction. If $\text{cos}\;\theta =0,$ then the vectors, when placed in standard position, form a right angle ([ref:CNX_Calc_Figure_12_03_003]). We can formalize this result into a theorem regarding orthogonal (perpendicular) vectors.

> FIGURE {fig:CNX_Calc_Figure_12_03_003} src=../../media/CNX_Calc_Figure_12_03_009.jpg
> alt: This figure has 5 images. The first image has two vectors u and v. The angle between these two vectors is theta. Theta is an acute angle. The second image is has two vectors u and v. The angle between these vectors is theta. Theta is an obtuse angle. The third image is vectors u and v in opposite directions. The angle between u and v is a straight angle. The fourth image is u and v in the same direction. The fifth image is u and v with angle theta between them as a right angle.
> caption: (a) An acute angle has $0<\text{cos}\;\theta <1.$ (b) An obtuse angle has $−1<\text{cos}\;\theta <0.$ (c) A straight line has $\text{cos}\;\theta =−1.$ (d) If the vectors have the same direction, $\text{cos}\;\theta =1.$ (e) If the vectors are orthogonal (perpendicular), $\text{cos}\;\theta =0.$

:::note [theorem] Orthogonal Vectors
The nonzero vectors $\text{u}$ and $\text{v}$ are {term:orthogonal vectors} if and only if $\textbf{u}\cdot \textbf{v}=0.$
:::

### Proof
Let $\text{u}$ and $\text{v}$ be nonzero vectors, and let $\theta$ denote the angle between them. First, assume $\textbf{u}\cdot \textbf{v}=0.$ Then

$\| \textbf{u}\| \| \textbf{v}\| \text{cos}\;\theta =0.$  {eq:fs-id1163723295981}

However, $\| \textbf{u}\| ≠0$ and $\| \textbf{v}\| ≠0,$ so we must have $\text{cos}\;\theta =0.$ Hence, $\theta =90\text{°},$ and the vectors are orthogonal.
Now assume $\text{u}$ and $\text{v}$ are orthogonal. Then $\theta =90\text{°}$ and we have

$\textbf{u}\cdot \textbf{v}=\| \textbf{u}\| \| \textbf{v}\| \text{cos}\;\theta =\| \textbf{u}\| \| \textbf{v}\| \text{cos}\;90\text{°}=\| \textbf{u}\| \| \textbf{v}\| (0)=0.$  {eq:fs-id1163723193086}

□
The terms {index:*orthogonal*}, {index:*perpendicular*}, and {index:*normal*} each indicate that mathematical objects are intersecting at right angles. The use of each term is determined mainly by its context. We say that vectors are orthogonal and lines are perpendicular. The term *normal* is used most often when measuring the angle made with a plane or other surface.

:::example {ex:fs-id1163724056700} Identifying Orthogonal Vectors

:::exercise {fs-id1163724056702} type= 
PROBLEM:
Determine whether $\textbf{p}=\langle 1,0,5\rangle$ and $\textbf{q}=\langle 10,3,−2\rangle$ are orthogonal vectors.
SOLUTION:
Using the definition, we need only check the dot product of the vectors:

$\textbf{p}\cdot \textbf{q}=1(10)+(0)(3)+(5)(−2)=10+0-10=0.$  {eq:fs-id1163723140420}

Because $\textbf{p}\cdot \textbf{q}=0,$ the vectors are orthogonal ([ref:CNX_Calc_Figure_12_03_004]).

> FIGURE {fig:CNX_Calc_Figure_12_03_004} src=../../media/CNX_Calc_Figure_12_03_003.jpg
> alt: This figure is the 3-dimensional coordinate system. There are two vectors in standard position. The vectors are labeled “p” and “q.” The angle between the vectors is a right angle.
> caption: Vectors **p** and $\text{q}$ form a right angle when their initial points are aligned.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723145068} type= 
PROBLEM:
For which value of *x* is $\textbf{p}=\langle 2,8,−1\rangle$ orthogonal to $\textbf{q}=\langle x,−1,2\rangle ?$
SOLUTION:
$x=5$
COMMENTARY: Hint
Vectors **p** and $\text{q}$ are orthogonal if and only if $\textbf{p}\cdot \textbf{q}=0.$
:::
:::

:::example {ex:fs-id1163723093504} Measuring the Angle Formed by Two Vectors

:::exercise {fs-id1163723093507} type= 
PROBLEM:
Let $\textbf{v}=\langle 2,3,3\rangle .$ Find the measures of the angles formed by the following vectors.
a. $\text{v}$ and **i**
b. $\text{v}$ and **j**
c. $\text{v}$ and **k**
SOLUTION:
a. Let *α* be the angle formed by $\text{v}$ and **i:**

$\begin{array}{rl}\text{cos}\;\alpha & =\frac{\textbf{v}\cdot \textbf{i}}{\| \textbf{v}\| \cdot \| \textbf{i}\|} \\ & =\frac{\langle 2,3,3\rangle \cdot \langle 1,0,0\rangle}{\sqrt{{2}^{2}+{3}^{2}+{3}^{2}}\;\sqrt{1}} \\ & =\frac{2}{\sqrt{22}}.\end{array}$  {eq:fs-id1163723080260}

$\alpha =\text{arccos}\;\frac{2}{\sqrt{22}}\approx 1.130\;\text{rad}.$  {eq:fs-id1163724052075}

b. Let *β* represent the angle formed by $\text{v}$ and **j**:

$\begin{array}{rl}\text{cos}\;β & =\frac{\textbf{v}\cdot \textbf{j}}{\| \textbf{v}\| \cdot \| \textbf{j}\|} \\ & =\frac{\langle 2,3,3\rangle \cdot \langle 0,1,0\rangle}{\sqrt{{2}^{2}+{3}^{2}+{3}^{2}}\;\sqrt{1}} \\ & =\frac{3}{\sqrt{22}}.\end{array}$  {eq:fs-id1163724052129}

$β=\text{arccos}\;\frac{3}{\sqrt{22}}\approx 0.877\;\text{rad.}$  {eq:fs-id1163723287259}

c. Let *γ* represent the angle formed by $\text{v}$ and **k**:

$\begin{array}{rl}\text{cos}\;γ & =\frac{\textbf{v}\cdot \textbf{k}}{\| \textbf{v}\| \cdot \| \textbf{k}\|} \\ & =\frac{\langle 2,3,3\rangle \cdot \langle 0,0,1\rangle}{\sqrt{{2}^{2}+{3}^{2}+{3}^{2}}\;\sqrt{1}} \\ & =\frac{3}{\sqrt{22}}.\end{array}$  {eq:fs-id1163723277838}

$γ=\text{arccos}\;\frac{3}{\sqrt{22}}\approx 0.877\;\text{rad.}$  {eq:fs-id1163724081599}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163724081639} type= 
PROBLEM:
Let $\textbf{v}=\langle 3,−5,1\rangle .$ Find the measure of the angles formed by each pair of vectors.
a. $\text{v}$ and **i**
b. $\text{v}$ and **j**
c. $\text{v}$ and **k**
SOLUTION:
a. $\alpha \approx 1.04$ rad; b. $β\approx 2.58$ rad; c. $γ\approx 1.40$ rad
COMMENTARY: Hint
$\textbf{i}=\langle 1,0,0\rangle ,$ $\textbf{j}=\langle 0,1,0\rangle ,$ and $\textbf{k}=\langle 0,0,1\rangle$
:::
:::
The angle a vector makes with each of the coordinate axes, called a direction angle, is very important in practical computations, especially in a field such as engineering. For example, in astronautical engineering, the angle at which a rocket is launched must be determined very precisely. A very small error in the angle can lead to the rocket going hundreds of miles off course. Direction angles are often calculated by using the dot product and the cosines of the angles, called the direction cosines. Therefore, we define both these angles and their cosines.

:::note [definition] Definition
The angles formed by a nonzero vector and the coordinate axes are called the {term:direction angles} for the vector ([ref:CNX_Calc_Figure_12_03_005]). The cosines for these angles are called the {term:direction cosines}.
:::

> FIGURE {fig:CNX_Calc_Figure_12_03_005} src=../../media/CNX_Calc_Figure_12_03_004_new.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system. It has the standard unit vectors drawn on axes x, y, and z. There is also a vector drawn in the first octant labeled “v.” The angle between the x-axis and v is labeled “alpha.” The angle between the y-axis and vector v is labeled “beta.” The angle between the z-axis and vector v is labeled “gamma.”
> caption: Angle *α* is formed by vector $\text{v}$ and unit vector **i**. Angle *β* is formed by vector $\text{v}$ and unit vector **j**. Angle *γ* is formed by vector $\text{v}$ and unit vector **k**.

In [ref:fs-id1163723093504], the direction cosines of $\textbf{v}=\langle 2,3,3\rangle$ are $\text{cos}\;\alpha =\frac{2}{\sqrt{22}},$ $\text{cos}\;β=\frac{3}{\sqrt{22}},$ and $\text{cos}\;γ=\frac{3}{\sqrt{22}}.$ The direction angles of $\text{v}$ are $\alpha =1.130\;\text{rad},$ $β=0.877\;\text{rad},$ and $γ=0.877\;\text{rad}.$
So far, we have focused mainly on vectors related to force, movement, and position in three-dimensional physical space. However, vectors are often used in more abstract ways. For example, suppose a fruit vendor sells apples, bananas, and oranges. On a given day, he sells 30 apples, 12 bananas, and 18 oranges. He might use a quantity vector, $\textbf{q}=\langle 30,12,18\rangle ,$ to represent the quantity of fruit he sold that day. Similarly, he might want to use a price vector, $\textbf{p}=\langle 0.50,0.25,1\rangle ,$ to indicate that he sells his apples for 50¢ each, bananas for 25¢ each, and oranges for $1 apiece. In this example, although we could still graph these vectors, we do not interpret them as literal representations of position in the physical world. We are simply using vectors to keep track of particular pieces of information about apples, bananas, and oranges.
This idea might seem a little strange, but if we simply regard vectors as a way to order and store data, we find they can be quite a powerful tool. Going back to the fruit vendor, let’s think about the dot product, $\textbf{q}\cdot \textbf{p}.$ We compute it by multiplying the number of apples sold (30) by the price per apple (50¢), the number of bananas sold by the price per banana, and the number of oranges sold by the price per orange. We then add all these values together. So, in this example, the dot product tells us how much money the fruit vendor had in sales on that particular day.
When we use vectors in this more general way, there is no reason to limit the number of components to three. What if the fruit vendor decides to start selling grapefruit? In that case, he would want to use four-dimensional quantity and price vectors to represent the number of apples, bananas, oranges, and grapefruit sold, and their unit prices. As you might expect, to calculate the dot product of four-dimensional vectors, we simply add the products of the components as before, but the sum has four terms instead of three.

:::example {ex:fs-id1163724036556} Using Vectors in an Economic Context

:::exercise {fs-id1163724036559} type= 
PROBLEM:
AAA Party Supply Store sells invitations, party favors, decorations, and food service items such as paper plates and napkins. When AAA buys its inventory, it pays 25¢ per package for invitations and party favors. Decorations cost AAA 50¢ each, and food service items cost 20¢ per package. AAA sells invitations for $2.50 per package and party favors for $1.50 per package. Decorations sell for $4.50 each and food service items for $1.25 per package.
During the month of May, AAA Party Supply Store sells 1258 invitations, 342 party favors, 2426 decorations, and 1354 food service items. Use vectors and dot products to calculate how much money AAA made in sales during the month of May. How much did the store make in profit?
SOLUTION:
The cost, price, and quantity vectors are

$\begin{array}{l}\textbf{c}=\langle 0.25,0.25,0.50,0.20\rangle \\ \textbf{p}=\langle 2.50,1.50,4.50,1.25\rangle \\ \textbf{q}=\langle 1258,342,2426,1354\rangle .\end{array}$  {eq:fs-id1163724036590}

AAA sales for the month of May can be calculated using the dot product $\textbf{p}\cdot \textbf{q}.$ We have

$\begin{array}{rl}\textbf{p}\cdot \textbf{q} & =\langle 2.50,1.50,4.50,1.25\rangle \cdot \langle 1258,342,2426,1354\rangle \\ & =3145+513+10917+1692.5 \\ & =16267.5.\end{array}$  {eq:fs-id1163724119507}

So, AAA took in $16,267.50 during the month of May.
To calculate the profit, we must first calculate how much AAA paid for the items sold. We use the dot product $\textbf{c}\cdot \textbf{q}$ to get

$\begin{array}{rl}\textbf{c}\cdot \textbf{q} & =\langle 0.25,0.25,0.50,0.20\rangle \cdot \langle 1258,342,2426,1354\rangle \\ & =314.5+85.5+1213+270.8 \\ & =1883.8.\end{array}$  {eq:fs-id1163723284027}

So, AAA paid $1,883.80 for the items they sold. Their profit, then, is given by

$\begin{array}{rl}\textbf{p}\cdot \textbf{q}-\textbf{c}\cdot \textbf{q} & =16267.5-1883.8 \\ & =14383.7.\end{array}$  {eq:fs-id1163723326663}

Therefore, AAA Party Supply Store made $14,383.70 in May.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723326741} type= 
PROBLEM:
On June 1, AAA Party Supply Store decided to increase the price they charge for party favors to $2 per package. They also changed suppliers for their invitations, and are now able to purchase invitations for only 10¢ per package. All their other costs and prices remain the same. If AAA sells 1408 invitations, 147 party favors, 2112 decorations, and 1894 food service items in the month of June, use vectors and dot products to calculate their total sales and profit for June.
SOLUTION:
Sales = $15,685.50; profit = $14,073.15
COMMENTARY: Hint
Use four-dimensional vectors for cost, price, and quantity sold.
:::
:::

## Projections
As we have seen, addition combines two vectors to create a resultant vector. But what if we are given a vector and we need to find its component parts? We use vector projections to perform the opposite process; they can break down a vector into its components. The magnitude of a vector projection is a scalar projection. For example, if a child is pulling the handle of a wagon at a 55° angle, we can use projections to determine how much of the force on the handle is actually moving the wagon forward ([ref:CNX_Calc_Figure_12_03_006]). We return to this example and learn how to solve it after we see how to calculate projections.

> FIGURE {fig:CNX_Calc_Figure_12_03_006} src=../../media/CNX_Calc_Figure_12_03_005.jpg
> alt: This figure is the image of a wagon with a handle. The handle is represented by the vector “F.” The angle between F and the horizontal direction of the wagon is 55 degrees.
> caption: When a child pulls a wagon, only the horizontal component of the force propels the wagon forward.

:::note [definition] Definition
The {term:vector projection} of $\text{v}$ onto $\text{u}$ is the vector labeled proj**<sub>u</sub>v** in [ref:CNX_Calc_Figure_12_03_007]. It has the same initial point as $\text{u}$ and $\text{v}$ and the same direction as $\text{u}$, and represents the component of $\text{v}$ that acts in the direction of $\text{u}$. If $\theta$ represents the angle between $\text{u}$ and $\text{v}$, then, by properties of triangles, we know the length of ${\text{proj}}_{\textbf{u}}\textbf{v}$ is $\| {\text{proj}}_{\textbf{u}}\text{v}\| =\| \text{v}\| \cdot |\text{cos}|\;\theta .$ Note that when the angle $\theta$ between $\textbf{u}$ and $\textbf{v}$ is an obtuse angle, the projection will be in the opposite direction of $\textbf{u}$.  When expressing $\text{cos}\;\theta$ in terms of the dot product, this becomes

$\begin{array}{ll}\| {\text{proj}}_{\textbf{u}}\text{v}\| & =\| \text{v}\| \cdot |\text{cos}|\;\theta \\ & =\| \text{v}\| (\frac{|\text{u}\cdot \text{v}|}{\| \text{u}\| \| \text{v}\|}) \\ & =\frac{|\text{u}\cdot \text{v}|}{\| \text{u}\|}.\end{array}$  {eq:fs-id1163724078799}

We now multiply by a unit vector in the direction of $\text{u}$ to get ${\text{proj}}_{\textbf{u}}\textbf{v}\text{:}$

$$ {\text{proj}}_{\textbf{u}}\textbf{v}=\frac{\textbf{u}\cdot \textbf{v}}{\| \textbf{u}\|}(\frac{1}{\| \textbf{u}\|}\textbf{u})=\frac{\textbf{u}\cdot \textbf{v}}{{\| \textbf{u}\|}^{2}}\textbf{u}. $$  {eq:fs-id1163724077546}

The length of this vector is also known as the {term:scalar projection} of $\text{v}$ onto $\text{u}$ and is denoted by

$$ {\text{comp}}_{\textbf{u}}\text{v}=\frac{\text{u}\cdot \text{v}}{\| \text{u}\|}. $$  {eq:fs-id1163723141410}

:::

> FIGURE {fig:CNX_Calc_Figure_12_03_007} src=../../media/CNX_Calc_Figure_12_03_006.jpg
> alt: This image has a vector labeled “v.” There is also a vector with the same initial point labeled “proj sub u v.” The third vector is from the terminal point of proj sub u v in the same direction labeled “u.” A broken line segment from the initial point of u to the terminal point of v is drawn and is perpendicular to u.
> caption: The projection of $\text{v}$ onto $\text{u}$ shows the component of vector $\text{v}$ in the direction of $\text{u}$.

:::example {ex:fs-id1163724035299} Finding Projections

:::exercise {fs-id1163724035302} type= 
PROBLEM:
Find the projection of $\text{v}$ onto **u.**
a. $\textbf{v}=\langle 3,5,1\rangle$ and $\textbf{u}=\langle −1,4,3\rangle$
b. $\textbf{v}=3\textbf{i}-2\textbf{j}$ and $\textbf{u}=\textbf{i}+6\textbf{j}$
SOLUTION:
a. Substitute the components of $\text{v}$ and $\text{u}$ into the formula for the projection:

$\begin{array}{rl}{\text{proj}}_{\textbf{u}}\textbf{v} & =\frac{\textbf{u}\cdot \textbf{v}}{{\| \textbf{u}\|}^{2}}\textbf{u} \\ & =\frac{\langle −1,4,3\rangle \cdot \langle 3,5,1\rangle}{{\| \langle −1,4,3\rangle \|}^{2}}\langle −1,4,3\rangle \\ & =\frac{−3+20+3}{{(−1)}^{2}+{4}^{2}+{3}^{2}}\langle −1,4,3\rangle \\ & =\frac{20}{26}\langle −1,4,3\rangle \\ & =\langle -\frac{10}{13},\frac{40}{13},\frac{30}{13}\rangle .\end{array}$  {eq:fs-id1163724183251}

b. To find the two-dimensional projection, simply adapt the formula to the two-dimensional case:

$\begin{array}{rl}{\text{proj}}_{\textbf{u}}\textbf{v} & =\frac{\textbf{u}\cdot \textbf{v}}{{\| \textbf{u}\|}^{2}}\textbf{u} \\ & =\frac{(\textbf{i}+6\textbf{j})\cdot (3\textbf{i}-2\textbf{j})}{{\| \textbf{i}+6\textbf{j}\|}^{2}}(\textbf{i}+6\textbf{j}) \\ & =\frac{1(3)+6(−2)}{{1}^{2}+{6}^{2}}(\textbf{i}+6\textbf{j}) \\ & =-\frac{9}{37}(\textbf{i}+6\textbf{j}) \\ & =-\frac{9}{37}\textbf{i}-\frac{54}{37}\textbf{j}.\end{array}$  {eq:fs-id1163723149623}

:::
:::
Sometimes it is useful to decompose vectors—that is, to break a vector apart into a sum. This process is called the {index:*resolution of a vector into components*}. Projections allow us to identify two orthogonal vectors having a desired sum. For example, let $\textbf{v}=\langle 6,−4\rangle$ and let $\textbf{u}=\langle 3,1\rangle .$ We want to decompose the vector $\text{v}$ into orthogonal components such that one of the component vectors has the same direction as $\text{u}$.
We first find the component that has the same direction as $\text{u}$ by projecting $\text{v}$ onto $\text{u}$. Let $\textbf{p}={\text{proj}}_{\textbf{u}}\textbf{v}.$ Then, we have

$\begin{array}{rl}\textbf{p} & =\frac{\textbf{u}\cdot \textbf{v}}{{\| \textbf{u}\|}^{2}}\textbf{u} \\ & =\frac{18-4}{9+1}\textbf{u} \\ & =\frac{7}{5}\textbf{u}=\frac{7}{5}\langle 3,1\rangle =\langle \frac{21}{5},\frac{7}{5}\rangle .\end{array}$  {eq:fs-id1163723311363}

Now consider the vector $\textbf{q}=\textbf{v}-\textbf{p}.$ We have

$\begin{array}{rl}\textbf{q} & =\textbf{v}-\textbf{p} \\ & =\langle 6,−4\rangle -\langle \frac{21}{5},\frac{7}{5}\rangle \\ & =\langle \frac{9}{5},-\frac{27}{5}\rangle .\end{array}$  {eq:fs-id1163724065481}

Clearly, by the way we defined $\text{q}$, we have $\textbf{v}=\textbf{q}+\textbf{p},$ and

$\begin{array}{rl}\textbf{q}\cdot \textbf{p} & =\langle \frac{9}{5},-\frac{27}{5}\rangle \cdot \langle \frac{21}{5},\frac{7}{5}\rangle \\ & =\frac{9(21)}{25}+\frac{−27(7)}{25} \\ & =\frac{189}{25}-\frac{189}{25}=0.\end{array}$  {eq:fs-id1163723199396}

Therefore, $\text{q}$ and **p** are orthogonal.

:::example {ex:fs-id1163724138271} Resolving Vectors into Components

:::exercise {fs-id1163724138273} type= 
PROBLEM:
Express $\textbf{v}=\langle 8,−3,−3\rangle$ as a sum of orthogonal vectors such that one of the vectors has the same direction as $\textbf{u}=\langle 2,3,2\rangle .$
SOLUTION:
Let **p** represent the projection of $\text{v}$ onto $\text{u}$:

$\begin{array}{rl}\textbf{p} & ={\text{proj}}_{\textbf{u}}\textbf{v} \\ & =\frac{\textbf{u}\cdot \textbf{v}}{{\| \textbf{u}\|}^{2}}\textbf{u} \\ & =\frac{\langle 2,3,2\rangle \cdot \langle 8,−3,−3\rangle}{{\| \langle 2,3,2\rangle \|}^{2}}\langle 2,3,2\rangle \\ & =\frac{16-9-6}{{2}^{2}+{3}^{2}+{2}^{2}}\langle 2,3,2\rangle \\ & =\frac{1}{17}\langle 2,3,2\rangle \\ & =\langle \frac{2}{17},\frac{3}{17},\frac{2}{17}\rangle .\end{array}$  {eq:fs-id1163724138366}

Then,

$\textbf{q}=\textbf{v}-\textbf{p}=\langle 8,−3,−3\rangle -\langle \frac{2}{17},\frac{3}{17},\frac{2}{17}\rangle =\langle \frac{134}{17},-\frac{54}{17},-\frac{53}{17}\rangle .$  {eq:fs-id1163724016326}

To check our work, we can use the dot product to verify that **p** and $\text{q}$ are orthogonal vectors:

$\textbf{p}\cdot \textbf{q}=\langle \frac{2}{17},\frac{3}{17},\frac{2}{17}\rangle \cdot \langle \frac{134}{17},-\frac{54}{17},-\frac{53}{17}\rangle =\frac{268}{289}-\frac{162}{289}-\frac{106}{289}=0.$  {eq:fs-id1163723096800}

Then,

$\textbf{v}=\textbf{p}+\textbf{q}=\langle \frac{2}{17},\frac{3}{17},\frac{2}{17}\rangle +\langle \frac{134}{17},-\frac{54}{17},-\frac{53}{17}\rangle .$  {eq:fs-id1163723128025}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723128139} type= 
PROBLEM:
Express $\textbf{v}=5\textbf{i}-\textbf{j}$ as a sum of orthogonal vectors such that one of the vectors has the same direction as $\textbf{u}=4\textbf{i}+2\textbf{j}.$
SOLUTION:
$\textbf{v}=\textbf{p}+\textbf{q},$ where $\textbf{p}=\frac{18}{5}\textbf{i}+\frac{9}{5}\textbf{j}$ and $\textbf{q}=\frac{7}{5}\textbf{i}-\frac{14}{5}\textbf{j}$
COMMENTARY: Hint
Start by finding the projection of $\text{v}$ onto $\text{u}$.
:::
:::

:::example {ex:fs-id1163724164466} Scalar Projection of Velocity

:::exercise {fs-id1163724164468} type= 
PROBLEM:
A container ship leaves port traveling $15\text{°}$ north of east. Its engine generates a speed of 20 knots along that path (see the following figure). In addition, the ocean current moves the ship northeast at a speed of 2 knots. Considering both the engine and the current, how fast is the ship moving in the direction $15\text{°}$ north of east? Round the answer to two decimal places.

> IMAGE {img:fs-id1163723348515} src=../../media/CNX_Calc_Figure_12_03_010.jpg
> alt: This figure is an image of a ship. The ship is at the origin of two perpendicular axes. The horizontal axis is labeled “east.” The second axis is vertical and labeled “north.” From the ship there are two vectors. The first is labeled “v” and has an angle of 15 degrees between the East axis and the vector v. The second vector is labeled “w” and has an angle of 45 degrees between the East axis and the vector w.

SOLUTION:
Let $\text{v}$ be the velocity vector generated by the engine, and let $\text{w}$ be the velocity vector of the current. We already know $\| \textbf{v}\| =20$ along the desired route. We just need to add in the scalar projection of $\text{w}$ onto $\text{v}$. We get

$\begin{array}{rl}{\text{comp}}_{\textbf{v}}\textbf{w} & =\frac{\textbf{v}\cdot \textbf{w}}{\| \textbf{v}\|} \\ & =\frac{\| \textbf{v}\| \| \textbf{w}\| \text{cos}(30\text{°})}{\| \textbf{v}\|} \\ & =\| \textbf{w}\| \text{cos}(30\text{°}) \\ & =2\frac{\sqrt{3}}{2}=\sqrt{3}\approx 1.73\;\text{knots}.\end{array}$  {eq:fs-id1163723348572}

The ship is moving at 21.73 knots in the direction $15\text{°}$ north of east.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163724087494} type= 
PROBLEM:
Repeat the previous example, but assume the ocean current is moving southeast instead of northeast, as shown in the following figure.

> IMAGE {img:fs-id1163724087510} src=../../media/CNX_Calc_Figure_12_03_011.jpg
> alt: This figure is an image of a ship. The ship is at the origin of two perpendicular axes. The horizontal axis is labeled “east.” The second axis is vertical and labeled “north.” From the ship there are two vectors. The first is labeled “v” and has an angle of 15 degrees between the East axis and the vector v. The second vector is labeled “w” and has an angle of 45 degrees between the East axis and the vector w. Vector w is below the East axis in the fourth quadrant.

SOLUTION:
21 knots
COMMENTARY: Hint
Compute the scalar projection of $\text{w}$ onto $\text{v}$.
:::
:::

## Work
Now that we understand dot products, we can see how to apply them to real-life situations. The most common application of the dot product of two vectors is in the calculation of work.
From physics, we know that work is done when an object is moved by a force. When the force is constant and applied in the same direction the object moves, then we define the work done as the product of the force and the distance the object travels: $W=Fd.$ We saw several examples of this type in earlier chapters. Now imagine the direction of the force is different from the direction of motion, as with the example of a child pulling a wagon. To find the work done, we need to multiply the component of the force that acts in the direction of the motion by the magnitude of the displacement. The dot product allows us to do just that. If we represent an applied force by a vector **F** and the displacement of an object by a vector **s**, then the {term:work done by the force} is the dot product of **F** and **s**.

:::note [definition] Definition
When a constant force is applied to an object so the object moves in a straight line from point *P* to point *Q*, the work *W* done by the force **F**, acting at an angle *θ* from the line of motion, is given by

$$ W=\textbf{F}\cdot \vec{PQ}=\| \textbf{F}\| \| \vec{PQ}\| \text{cos}\;\theta . $$  {eq:fs-id1163724120330}

:::
Let’s revisit the problem of the child’s wagon introduced earlier. Suppose a child is pulling a wagon with a force having a magnitude of 8 lb on the handle at an angle of 55°. If the child pulls the wagon 50 ft, find the work done by the force ([ref:CNX_Calc_Figure_12_03_010]).

> FIGURE {fig:CNX_Calc_Figure_12_03_010} src=../../media/CNX_Calc_Figure_12_03_007.jpg
> alt: This figure is an image of a wagon with a handle. The handle is represented with a vector labeled “8 lb.” There is another vector in the horizontal direction from the wagon labeled “50 ft.” The angle between these vectors is 55 degrees.
> caption: The horizontal component of the force is the projection of **F** onto the positive *x*-axis.

We have

$W=\| \textbf{F}\| \| \vec{PQ}\| \text{cos}\;\theta =8(50)(\text{cos}(55\text{°}))\approx 229\;\text{ft}\cdot \text{lb}.$  {eq:fs-id1163723110205}

In U.S. standard units, we measure the magnitude of force $\| \textbf{F}\|$ in pounds. The magnitude of the displacement vector $\| \vec{PQ}\|$ tells us how far the object moved, and it is measured in feet. The customary unit of measure for work, then, is the foot-pound. One foot-pound is the amount of work required to move an object weighing 1 lb a distance of 1 ft straight up. In the metric system, the unit of measure for force is the newton (N), and the unit of measure of magnitude for work is a newton-meter (N·m), or a joule (J).

:::example {ex:fs-id1163723110347} Calculating Work

:::exercise {fs-id1163723110349} type= 
PROBLEM:
A conveyor belt generates a force $\textbf{F}=5\textbf{i}-3\textbf{j}+\textbf{k}$ that moves a suitcase from point $(1,1,1)$ to point $(9,4,7)$ along a straight line. Find the work done by the conveyor belt. The distance is measured in meters and the force is measured in newtons.
SOLUTION:
The displacement vector $\vec{PQ}$ has initial point $(1,1,1)$ and terminal point $(9,4,7)\text{:}$

$\vec{PQ}=\langle 9-1,4-1,7-1\rangle =\langle 8,3,6\rangle =8\textbf{i}+3\textbf{j}+6\textbf{k}.$  {eq:fs-id1163723995447}

Work is the dot product of force and displacement:

$\begin{array}{rl}W & =\textbf{F}\cdot \vec{PQ} \\ & =(5\textbf{i}-3\textbf{j}+\textbf{k})\cdot (8\textbf{i}+3\textbf{j}+6\textbf{k}) \\ & =5(8)+(−3)(3)+1(6) \\ & =37\text{N}\cdot \text{m} \\ & =37\;\text{J}.\end{array}$  {eq:fs-id1163724082267}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723268298} type= 
PROBLEM:
A constant force of 30 lb is applied at an angle of 60° to pull a handcart 10 ft across the ground ([ref:CNX_Calc_Figure_12_03_011]). What is the work done by this force?

> FIGURE {fig:CNX_Calc_Figure_12_03_011} src=../../media/CNX_Calc_Figure_12_03_008.jpg
> alt: This figure is an image of a hand cart with a crate. The vertical handle of the hand cart has two vectors. The first is horizontal to the handle and labeled “s.” The second is from the handle and labeled “F.” The angle between the two vectors is 60 degrees.
> caption: 

SOLUTION:
150 ft-lb
COMMENTARY: Hint
Use the definition of work as the dot product of force and distance.
:::
:::

## Key Concepts {section:key-concepts}
- The dot product, or scalar product, of two vectors $\textbf{u}=\langle {u}_{1},{u}_{2},{u}_{3}\rangle$ and $\textbf{v}=\langle {v}_{1},{v}_{2},{v}_{3}\rangle$ is $\textbf{u}\cdot \textbf{v}={u}_{1}{v}_{1}+{u}_{2}{v}_{2}+{u}_{3}{v}_{3}.$
- The dot product satisfies the following properties:

- $\textbf{u}\cdot \textbf{v}=\textbf{v}\cdot \textbf{u}$
- $\textbf{u}\cdot (\textbf{v}+\textbf{w})=\textbf{u}\cdot \textbf{v}+\textbf{u}\cdot \textbf{w}$
- $c(\textbf{u}\cdot \textbf{v})=(c\textbf{u})\cdot \textbf{v}=\textbf{u}\cdot (c\textbf{v})$
- $\textbf{v}\cdot \textbf{v}={\| \textbf{v}\|}^{2}$

- The dot product of two vectors can be expressed, alternatively, as $\textbf{u}\cdot \textbf{v}=\| \textbf{u}\| \| \textbf{v}\| \text{cos}\;\theta .$ This form of the dot product is useful for finding the measure of the angle formed by two vectors.
- Vectors $\text{u}$ and $\text{v}$ are orthogonal if $\textbf{u}\cdot \textbf{v}=0.$
- The angles formed by a nonzero vector and the coordinate axes are called the *direction angles* for the vector. The cosines of these angles are known as the *direction cosines*.
- The vector projection of $\text{v}$ onto $\text{u}$ is the vector ${\text{proj}}_{\textbf{u}}\textbf{v}=\frac{\textbf{u}\cdot \textbf{v}}{{\| \textbf{u}\|}^{2}}\textbf{u}.$ The magnitude of this vector is known as the *scalar projection* of $\text{v}$ onto $\text{u}$, given by ${\text{comp}}_{\textbf{u}}\textbf{v}=\frac{\textbf{u}\cdot \textbf{v}}{\| \textbf{u}\|}.$
- Work is done when a force is applied to an object, causing displacement. When the force is represented by the vector **F** and the displacement is represented by the vector **s**, then the work done *W* is given by the formula $W=\textbf{F}\cdot s=\| \textbf{F}\| \| \textbf{s}\| \text{cos}\;\theta .$

## Key Equations {section:key-equations}

> TABLE {tab:eip-533} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Dot product of $$u and v** | $\begin{array}{rl}\textbf{u}\cdot \textbf{v} & ={u}_{1}{v}_{1}+{u}_{2}{v}_{2}+{u}_{3}{v}_{3} \\ & =\| \textbf{u}\| \| \textbf{v}\| \text{cos}\;\theta \end{array}$ |
| **Cosine of the angle formed by**$\textbf{u}$ and $\textbf{v}$ | $\text{cos}\;\theta =\frac{\textbf{u}\cdot \textbf{v}}{\| \textbf{u}\| \| \textbf{v}\|}$ |
| **Vector projection of**$\textbf{v}$ onto $\textbf{u}$ | ${\text{proj}}_{\textbf{u}}\textbf{v}=\frac{\textbf{u}\cdot \textbf{v}}{{\| \textbf{u}\|}^{2}}\textbf{u}$ |
| **Scalar projection of**$\textbf{v}$ onto $\textbf{u}$ | ${\text{comp}}_{\textbf{u}}\textbf{v}=\frac{\textbf{u}\cdot \textbf{v}}{\| \textbf{u}\|}$ |
| **Work done by a force F to move an object through displacement vector** $\vec{PQ}$ | $W=\textbf{F}\cdot \vec{PQ}=\| \textbf{F}\| \| \vec{PQ}\| \text{cos}\;\theta$ |

##  {section:section-exercises}
For the following exercises, the vectors $\text{u}$ and $\text{v}$ are given. Calculate the dot product $\textbf{u}\cdot \textbf{v}.$

:::exercise {fs-id1163723222093} type= 
PROBLEM:
$\textbf{u}=\langle 3,0\rangle ,$ $\textbf{v}=\langle 2,2\rangle$
SOLUTION:
6
:::

:::exercise {fs-id1163723222150} type= 
PROBLEM:
$\textbf{u}=\langle 3,−4\rangle ,$ $\textbf{v}=\langle 4,3\rangle$
:::

:::exercise {fs-id1163723222206} type= 
PROBLEM:
$\textbf{u}=\langle 2,2,−1\rangle ,$ $\textbf{v}=\langle −1,2,2\rangle$
SOLUTION:
0
:::

:::exercise {fs-id1163723222271} type= 
PROBLEM:
$\textbf{u}=\langle 4,5,−6\rangle ,$ $\textbf{v}=\langle 0,−2,−3\rangle$
:::
For the following exercises, the vectors **a**, **b**, and **c** are given. Determine the vectors $(\textbf{a}\cdot \text{b})\text{c}$ and $(\textbf{a}\cdot \text{c})\text{b}.$ Express the vectors in component form.

:::exercise {fs-id1163723981530} type= 
PROBLEM:
$\textbf{a}=\langle 2,0,−3\rangle ,$ $\text{b}=\langle −4,−7,1\rangle ,$ $\text{c}=\langle 1,1,−1\rangle$
SOLUTION:
$(\textbf{a}\cdot \text{b})\text{c}=\langle −11,−11,11\rangle ;$ $(\textbf{a}\cdot \text{c})\text{b}=\langle −20,−35,5\rangle$
:::

:::exercise {fs-id1163724080791} type= 
PROBLEM:
$\textbf{a}=\langle 0,1,2\rangle ,$ $\text{b}=\langle −1,0,1\rangle ,$ $\text{c}=\langle 1,0,−1\rangle$
:::

:::exercise {fs-id1163724072554} type= 
PROBLEM:
$\textbf{a}=\textbf{i}+\textbf{j},$ $\text{b}=\textbf{i}-\textbf{k},$ $\text{c}=\textbf{i}-2\textbf{k}$
SOLUTION:
$(\textbf{a}\cdot \text{b})\text{c}=\langle 1,0,−2\rangle ;$ $(\textbf{a}\cdot \text{c})\text{b}=\langle 1,0,−1\rangle$
:::

:::exercise {fs-id1163724072686} type= 
PROBLEM:
$\textbf{a}=\textbf{i}-\textbf{j}+\textbf{k},$ $\text{b}=\textbf{j}+3\textbf{k},$ $\text{c}=\text{−}\textbf{i}+2\text{j}-4\textbf{k}$
:::
For the following exercises, the two-dimensional vectors **a** and **b** are given.
a. Find the measure of the angle $\theta$ between **a** and **b**. Express the answer in radians rounded to two decimal places, if it is not possible to express it exactly.
b. Is $\theta$ an acute angle?

:::exercise {fs-id1163723236608} type= 
PROBLEM:
**[T]** $\textbf{a}=\langle 3,−1\rangle ,$ $\text{b}=\langle −4,0\rangle$
SOLUTION:
a. $\theta =2.82$ rad; b. $\theta$ is not acute.
:::

:::exercise {fs-id1163724018909} type= 
PROBLEM:
**[T]** $\textbf{a}=\langle 2,1\rangle ,$ $\text{b}=\langle −1,3\rangle$
:::

:::exercise {fs-id1163724018983} type= 
PROBLEM:
$\textbf{u}=3\textbf{i},$ $\textbf{v}=4\textbf{i}+4\textbf{j}$
SOLUTION:
a. $\theta =\frac{\pi}{4}$ rad; b. $\theta$ is acute.
:::

:::exercise {fs-id1163724081871} type= 
PROBLEM:
$\textbf{u}=5\text{i},$ $\textbf{v}=−6\textbf{i}+6\textbf{j}$
:::
For the following exercises, find the measure of the angle between the three-dimensional vectors **a** and **b**. Express the answer in radians rounded to two decimal places, if it is not possible to express it exactly.

:::exercise {fs-id1163724081966} type= 
PROBLEM:
$\textbf{a}=\langle 3,−1,2\rangle ,$ $\text{b}=\langle 1,−1,−2\rangle$
SOLUTION:
$\theta =\frac{\pi}{2}$
:::

:::exercise {fs-id1163724082042} type= 
PROBLEM:
$\textbf{a}=\langle 0,−1,−3\rangle ,$ $\text{b}=\langle 2,3,−1\rangle$
:::

:::exercise {fs-id1163723295767} type= 
PROBLEM:
$\textbf{a}=\textbf{i}+\textbf{j},$ $\text{b}=\textbf{j}-\text{k}$
SOLUTION:
$\theta =\frac{\pi}{3}$
:::

:::exercise {fs-id1163723295820} type= 
PROBLEM:
$\textbf{a}=\textbf{i}-2\text{j}+\textbf{k},$ $\text{b}=\textbf{i}+\textbf{j}-2\textbf{k}$
:::

:::exercise {fs-id1163723295888} type= 
PROBLEM:
**[T]** $\textbf{a}=3\textbf{i}-\textbf{j}-2\textbf{k},$ $\text{b}=\textbf{v}+\text{w},$ where $\textbf{v}=−2\textbf{i}-3\textbf{j}+2\textbf{k}$ and $\textbf{w}=\textbf{i}+2\textbf{k}$
SOLUTION:
$\theta =2$ rad
:::

:::exercise {fs-id1163723338487} type= 
PROBLEM:
**[T]** $\textbf{a}=3\textbf{i}-\textbf{j}+2\textbf{k},$ $\text{b}=\textbf{v}-\text{w},$ where $\textbf{v}=2\textbf{i}+\textbf{j}+4\textbf{k}$ and $\textbf{w}=6\textbf{i}+\textbf{j}+2\textbf{k}$
:::
For the following exercises determine whether the given vectors are orthogonal.

:::exercise {fs-id1163724043502} type= 
PROBLEM:
$\textbf{a}=\langle x,y\rangle ,$ $\text{b}=\langle \text{−}y,x\rangle ,$ where *x* and *y* are nonzero real numbers
SOLUTION:
Orthogonal
:::

:::exercise {fs-id1163724043575} type= 
PROBLEM:
$\textbf{a}=\langle x,x\rangle ,$ $\text{b}=\langle \text{−}y,y\rangle ,$ where *x* and *y* are nonzero real numbers
:::

:::exercise {fs-id1163724074641} type= 
PROBLEM:
$\textbf{a}=3\textbf{i}-\textbf{j}-2\textbf{k},$ $\text{b}=−2\textbf{i}-3\text{j}+\text{k}$
SOLUTION:
Not orthogonal
:::

:::exercise {fs-id1163724074700} type= 
PROBLEM:
$\textbf{a}=\textbf{i}-\textbf{j},$ $\text{b}=7\textbf{i}+2\text{j}-\text{k}$
:::

:::exercise {fs-id1163724074750} type= 
PROBLEM:
Find all two-dimensional vectors **a** orthogonal to vector $\text{b}=\langle 3,4\rangle .$ Express the answer in component form.
SOLUTION:
$\textbf{a}=\langle -\frac{4\alpha}{3},\alpha \rangle ,$ where $\alpha ≠0$ is a real number
:::

:::exercise {fs-id1163724074836} type= 
PROBLEM:
Find all two-dimensional vectors **a** orthogonal to vector $\text{b}=\langle 5,−6\rangle .$ Express the answer by using standard unit vectors.
:::

:::exercise {fs-id1163724049590} type= 
PROBLEM:
Determine all three-dimensional vectors $\text{u}$ orthogonal to vector $\textbf{v}=\langle 1,1,0\rangle .$ Express the answer by using standard unit vectors.
SOLUTION:
$\textbf{u}=\text{−}\alpha \textbf{i}+\alpha \text{j}+β\textbf{k},$ where $\alpha$ and $β$ are real numbers such that ${\alpha}^{2}+{β}^{2}≠0$
:::

:::exercise {fs-id1163724049692} type= 
PROBLEM:
Determine all three-dimensional vectors $\text{u}$ orthogonal to vector $\textbf{v}=\textbf{i}-\textbf{j}-\text{k}.$ Express the answer in component form.
:::

:::exercise {fs-id1163723295563} type= 
PROBLEM:
Determine the real number $\alpha$ such that vectors $\textbf{a}=2\textbf{i}+3\text{j}$ and $\text{b}=9\textbf{i}+\alpha \text{j}$ are orthogonal.
SOLUTION:
$\alpha =−6$
:::

:::exercise {fs-id1163723295627} type= 
PROBLEM:
Determine the real number $\alpha$ such that vectors $\textbf{a}=−3\textbf{i}+2\text{j}$ and $\text{b}=2\textbf{i}+\alpha \text{j}$ are orthogonal.
:::

:::exercise {fs-id1163723295694} type= 
PROBLEM:
**[T]** Consider the points $P(4,5)$ and $Q(5,−7).$
a. Determine vectors $\vec{OP}$ and $\vec{OQ}.$ Express the answer by using standard unit vectors.
b. Determine the measure of angle *O* in triangle *OPQ*. Express the answer in degrees rounded to two decimal places.
SOLUTION:
a. $\vec{OP}=4\textbf{i}+5\textbf{j},$ $\vec{OQ}=5\textbf{i}-7\text{j};$ b. $105.8\text{°}$
:::

:::exercise {fs-id1163723093342} type= 
PROBLEM:
**[T]** Consider points $A(1,1),$ $B(2,−7),$ and $C(6,3).$
a. Determine vectors $\vec{BA}$ and $\vec{BC}.$ Express the answer in component form.
b. Determine the measure of angle *B* in triangle *ABC*. Express the answer in degrees rounded to two decimal places.
:::

:::exercise {fs-id1163724066122} type= 
PROBLEM:
Determine the measure of angle *A* in triangle *ABC*, where $A(1,1,8),$ $B(4,−3,−4),$ and $C(−3,1,5).$ Express your answer in degrees rounded to two decimal places.
SOLUTION:
$68.33\text{°}$
:::

:::exercise {fs-id1163724050252} type= 
PROBLEM:
Consider points $P(3,7,−2)$ and $Q(1,1,−3).$ Determine the angle between vectors $\vec{OP}$ and $\vec{OQ}.$ Express the answer in degrees rounded to two decimal places.
:::
For the following exercises, determine which (if any) pairs of the following vectors are orthogonal.

:::exercise {fs-id1163724050364} type= 
PROBLEM:
$\textbf{u}=\langle 3,7,−2\rangle ,$ $\textbf{v}=\langle 5,−3,−3\rangle ,$ $\textbf{w}=\langle 0,1,−1\rangle$
SOLUTION:
$\text{u}$ and $\text{v}$ are orthogonal; $\text{v}$ and $\text{w}$ are orthogonal.
:::

:::exercise {fs-id1163723183767} type= 
PROBLEM:
$\textbf{u}=\textbf{i}-\textbf{k},$ $\textbf{v}=5\text{j}-5\textbf{k},$ $\textbf{w}=10\text{j}$
:::

:::exercise {fs-id1163723183834} type= 
PROBLEM:
Use vectors to show that a parallelogram with equal diagonals is a rectangle.
:::

:::exercise {fs-id1163723183843} type= 
PROBLEM:
Use vectors to show that the diagonals of a rhombus are perpendicular.
:::

:::exercise {fs-id1163723183853} type= 
PROBLEM:
Show that $\textbf{u}\cdot (\textbf{v}+\textbf{w})=\textbf{u}\cdot \textbf{v}+\textbf{u}\cdot \textbf{w}$ is true for any vectors $\text{u}$, $\text{v}$, and $\text{w}$.
:::

:::exercise {fs-id1163723789662} type= 
PROBLEM:
Verify the identity $\textbf{u}\cdot (\textbf{v}+\textbf{w})=\textbf{u}\cdot \textbf{v}+\textbf{u}\cdot \textbf{w}$ for vectors $\textbf{u}=\langle 1,0,4\rangle ,$ $\textbf{v}=\langle −2,3,5\rangle ,$ and $\textbf{w}=\langle 4,−2,6\rangle .$
:::
For the following problems, the vector $\text{u}$ is given.
a. Find the direction cosines for the vector $\text{u}$.
b. Find the direction angles for the vector $\text{u}$ expressed in degrees. (Round the answer to the nearest integer.)

:::exercise {fs-id1163723298913} type= 
PROBLEM:
$\textbf{u}=\langle 2,2,1\rangle$
SOLUTION:
a. $\text{cos}\;\alpha =\frac{2}{3},\text{cos}\;β=\frac{2}{3},$ and $\text{cos}\;γ=\frac{1}{3};$ b. $\alpha =48\text{°},$ $β=48\text{°},$ and $γ=71\text{°}$
:::

:::exercise {fs-id1163723299049} type= 
PROBLEM:
$\textbf{u}=\textbf{i}-2\textbf{j}+2\textbf{k}$
:::

:::exercise {fs-id1163723279490} type= 
PROBLEM:
$\textbf{u}=\langle −1,5,2\rangle$
SOLUTION:
a. $\text{cos}\;\alpha =-\frac{1}{\sqrt{30}},\text{cos}\;β=\frac{5}{\sqrt{30}},$ and $\text{cos}\;γ=\frac{2}{\sqrt{30}};$ b. $\alpha =101\text{°},$ $β=24\text{°},$ and $γ=69\text{°}$
:::

:::exercise {fs-id1163724057663} type= 
PROBLEM:
$\textbf{u}=\langle 2,3,4\rangle$
:::

:::exercise {fs-id1163724057804} type= 
PROBLEM:
Consider $\textbf{u}=\langle a,b,c\rangle$ a nonzero three-dimensional vector. Let $\text{cos}\;\alpha ,$ $\text{cos}\;β,$ and $\text{cos}\;γ$ be the direction cosines of $\text{u}$. Show that ${\text{cos}}^{2}\alpha +{\text{cos}}^{2}β+{\text{cos}}^{2}γ=1.$
:::

:::exercise {fs-id1163723073050} type= 
PROBLEM:
Determine the direction cosines of vector $\textbf{u}=\textbf{i}+2\textbf{j}+2\textbf{k}$ and show they satisfy ${\text{cos}}^{2}\alpha +{\text{cos}}^{2}β+{\text{cos}}^{2}γ=1.$
:::
For the following exercises, the vectors $\text{u}$ and $\text{v}$ are given.
a. Find the vector projection $\text{w}={\text{proj}}_{\textbf{u}}\textbf{v}$ of vector $\text{v}$ onto vector $\text{u}$. Express your answer in component form.
b. Find the scalar projection ${\text{comp}}_{\text{u}}\text{v}$ of vector $\text{v}$ onto vector **u.**

:::exercise {fs-id1163723339482} type= 
PROBLEM:
$\textbf{u}=5\textbf{i}+2\textbf{j},$ $\textbf{v}=2\textbf{i}+3\textbf{j}$
SOLUTION:
a. $\textbf{w}=\langle \frac{80}{29},\frac{32}{29}\rangle ;$ b. ${\text{comp}}_{\text{u}}\text{v}=\frac{16}{\sqrt{29}}$
:::

:::exercise {fs-id1163724138520} type= 
PROBLEM:
$\textbf{u}=\langle −4,7\rangle ,$ $\textbf{v}=\langle 3,5\rangle$
:::

:::exercise {fs-id1163724138634} type= 
PROBLEM:
$\textbf{u}=3\textbf{i}+2\textbf{k},$ $\textbf{v}=2\text{j}+4\textbf{k}$
SOLUTION:
a. $\textbf{w}=\langle \frac{24}{13},0,\frac{16}{13}\rangle ;$ b. ${\text{comp}}_{\text{u}}\text{v}=\frac{8}{\sqrt{13}}$
:::

:::exercise {fs-id1163723171314} type= 
PROBLEM:
$\textbf{u}=\langle 4,4,0\rangle ,$ $\textbf{v}=\langle 0,4,1\rangle$
:::

:::exercise {fs-id1163723171424} type= 
PROBLEM:
Consider the vectors $\textbf{u}=4\textbf{i}-3\textbf{j}$ and $\textbf{v}=3\textbf{i}+2\textbf{j}.$
a. Find the component form of vector $\textbf{w}={\text{proj}}_{\text{u}}\text{v}$ that represents the projection of $\text{v}$ onto $\text{u}$.
b. Write the decomposition $\textbf{v}=\text{w}+\text{q}$ of vector $\text{v}$ into the orthogonal components $\text{w}$ and $\text{q}$, where $\text{w}$ is the projection of $\text{v}$ onto $\text{u}$ and $\text{q}$ is a vector orthogonal to the direction of $\text{u}$.
SOLUTION:
a. $\textbf{w}=\langle \frac{24}{25},-\frac{18}{25}\rangle ;$ b. $\text{q}=\langle \frac{51}{25},\frac{68}{25}\rangle ,$ $\textbf{v}=\text{w}+\text{q}=\langle \frac{24}{25},-\frac{18}{25}\rangle +\langle \frac{51}{25},\frac{68}{25}\rangle$
:::

:::exercise {fs-id1163723995085} type= 
PROBLEM:
Consider vectors $\textbf{u}=2\textbf{i}+4\text{j}$ and $\textbf{v}=4\text{j}+2\textbf{k}.$
a. Find the component form of vector $\textbf{w}={\text{proj}}_{\text{u}}\text{v}$ that represents the projection of $\text{v}$ onto $\text{u}$.
b. Write the decomposition $\textbf{v}=\text{w}+\text{q}$ of vector $\text{v}$ into the orthogonal components $\text{w}$ and $\text{q}$, where $\text{w}$ is the projection of $\text{v}$ onto $\text{u}$ and $\text{q}$ is a vector orthogonal to the direction of $\text{u}$.
:::

:::exercise {fs-id1163723113251} type= 
PROBLEM:
A methane molecule has a carbon atom situated at the origin and four hydrogen atoms located at points $P(1,1,−1),Q(1,−1,1),R(−1,1,1),\;\text{and}\;S(−1,−1,−1)$ (see figure).
a. Find the distance between the hydrogen atoms located at *P* and *R*.
b. Find the angle between vectors $\vec{OS}$ and $\vec{OR}$ that connect the carbon atom with the hydrogen atoms located at *S* and *R*, which is also called the *bond angle*. Express the answer in degrees rounded to two decimal places.

> IMAGE {img:fs-id1163723139879} src=../../media/CNX_Calc_Figure_12_03_012.jpg
> alt: This figure is the 3-dimensional coordinate system. There are four points plotted. The first point is labeled “P(1, 1, -1),” the second point is labeled “Q(1, -1, 1),” the third point is labeled “R(-1, 1, 1),” and the fourth point is labeled “S(-1, -1, -1).” There are line segments from Q to P, P to R and R to P. There are also two vectors in standard position. The first has terminal point of R and the second has terminal point of S. The angle between them is represented with an arc.

SOLUTION:
a. $2\sqrt{2};$ b. $109.47\text{°}$
:::

:::exercise {fs-id1163723139918} type= 
PROBLEM:
**[T]** Find the vectors that join the center of a clock to the hours 1:00, 2:00, and 3:00. Assume the clock is circular with a radius of 1 unit.
:::

:::exercise {fs-id1163723140007} type= 
PROBLEM:
Find the work done by force $\textbf{F}=\langle 5,6,−2\rangle$ (measured in Newtons) that moves a particle from point $P(3,−1,0)$ to point $Q(2,3,1)$ along a straight line (the distance is measured in meters).
SOLUTION:
$17\text{N}\cdot \text{m}$
:::

:::exercise {fs-id1163723326803} type= 
PROBLEM:
**[T]** A sled is pulled by exerting a force of 100 N on a rope that makes an angle of $25\text{°}$ with the horizontal. Find the work done in pulling the sled 40 m. (Round the answer to one decimal place.)
:::

:::exercise {fs-id1163723326842} type= 
PROBLEM:
**[T]** A father is pulling his son on a sled at an angle of $20\text{°}$ with the horizontal with a force of 25 lb (see the following image). He pulls the sled in a straight path of 50 ft. How much work was done by the man pulling the sled? (Round the answer to the nearest integer.)

> IMAGE {img:fs-id1163723326869} src=../../media/CNX_Calc_Figure_12_03_204.jpg
> alt: This figure is an image of a person pulling a child on a sled. The rope for pulling the sled is represented by a vector and labeled “25 lb.” There is an angle between the rope vector and the horizontal ground of 20 degrees.

SOLUTION:
1175 $\text{ft}\cdot \text{lb}$
:::

:::exercise {fs-id1163723326897} type= 
PROBLEM:
**[T]** A car is towed using a force of 1600 N. The rope used to pull the car makes an angle of 25° with the horizontal. Find the work done in towing the car 2 km. Express the answer in joules $(1\text{J}=1\text{N}\cdot \text{m})$ rounded to the nearest integer.
:::

:::exercise {fs-id1163723326938} type= 
PROBLEM:
**[T]** A boat sails north aided by a wind blowing in a direction of $\text{N3}0\text{°}\text{E}$ with a magnitude of 500 lb. How much work is performed by the wind as the boat moves 100 ft? (Round the answer to two decimal places.)
SOLUTION:
W = 43301.27 $\text{ft-lb}$
:::

:::exercise {fs-id1163724053853} type= 
PROBLEM:
Vector $\textbf{p}=\langle 150,225,375\rangle$ represents the price of certain models of bicycles sold by a bicycle shop. Vector $\textbf{n}=\langle 10,7,9\rangle$ represents the number of bicycles sold of each model, respectively. Compute the dot product $\textbf{p}\cdot \textbf{n}$ and state its meaning.
:::

:::exercise {fs-id1163724053972} type= 
PROBLEM:
**[T]** Two forces ${\textbf{F}}_{1}$ and ${\textbf{F}}_{2}$ are represented by vectors with initial points that are at the origin. The first force has a magnitude of 20 lb and the terminal point of the vector is point $P(1,1,0).$ The second force has a magnitude of 40 lb and the terminal point of its vector is point $Q(0,1,1).$ Let **F** be the resultant force of forces ${\textbf{F}}_{1}$ and ${\textbf{F}}_{2}.$
a. Find the magnitude of **F**. (Round the answer to one decimal place.)
b. Find the direction angles of **F**. (Express the answer in degrees rounded to one decimal place.)
SOLUTION:
a. $\| {\textbf{F}}_{1}+{\text{F}}_{2}\| =52.9$ lb; b. The direction angles are $\alpha =74.5\text{°},$ $β=36.7\text{°},$ and $γ=57.7\text{°}.$
:::

:::exercise {fs-id1163723090903} type= 
PROBLEM:
**[T]** Consider $\text{r}(t)=\langle \text{cos}\;t,\text{sin}\;t,2t\rangle$ the position vector of a particle at time $t\in [0,30],$ where the components of **r** are expressed in centimeters and time in seconds. Let $\vec{OP}$ be the position vector of the particle after 1 sec.
a. Show that all vectors $\vec{PQ},$ where $Q(x,y,z)$ is an arbitrary point, orthogonal to the instantaneous velocity vector $\textbf{v}(1)$ of the particle after 1 sec, can be expressed as $\vec{PQ}=\langle x-\text{cos}\;1,y-\text{sin}\;1,z-2\rangle ,$ where $x\;\text{sin}\;1-y\;\text{cos}\;1-2z+4=0.$ The set of point *Q* describes a plane called the *normal plane* to the path of the particle at point *P*.
b. Use a CAS to visualize the instantaneous velocity vector and the normal plane at point *P* along with the path of the particle.
:::

## Glossary
- {def} **direction angles**: the angles formed by a nonzero vector and the coordinate axes
- {def} **direction cosines**: the cosines of the angles formed by a nonzero vector and the coordinate axes
- {def} **dot product or scalar product**: $\textbf{u}\cdot \textbf{v}={u}_{1}{v}_{1}+{u}_{2}{v}_{2}+{u}_{3}{v}_{3}$ where $\textbf{u}=\langle {u}_{1},{u}_{2},{u}_{3}\rangle$ and $\textbf{v}=\langle {v}_{1},{v}_{2},{v}_{3}\rangle$
- {def} **scalar projection**: the magnitude of the vector projection of a vector
- {def} **orthogonal vectors**: vectors that form a right angle when placed in standard position
- {def} **vector projection**: the component of a vector that follows a given direction
- {def} **work done by a force**: work is generally thought of as the amount of energy it takes to move an object; if we represent an applied force by a vector **F** and the displacement of an object by a vector **s**, then the work done by the force is the dot product of **F** and **s**.

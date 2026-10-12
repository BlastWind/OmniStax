# The Cross Product

## Learning Objectives {section:learning-objectives}
- Calculate the cross product of two given vectors.
- Use determinants to calculate a cross product.
- Find a vector orthogonal to two given vectors.
- Determine areas and volumes by using the cross product.
- Calculate the torque of a given force and position vector.

Imagine a mechanic turning a wrench to tighten a bolt. The mechanic applies a force at the end of the wrench. This creates rotation, or torque, which tightens the bolt. We can use vectors to represent the force applied by the mechanic, and the distance (radius) from the bolt to the end of the wrench. Then, we can represent torque by a vector oriented along the axis of rotation. Note that the torque vector is orthogonal to both the force vector and the radius vector.
In this section, we develop an operation called the *cross product,* which allows us to find a vector orthogonal to two given vectors. Calculating torque is an important application of cross products, and we examine torque in more detail later in the section. This material uses a 3 × 3 determinant of the form $|\begin{array}{lll}a & b & c \\ d & e & f \\ g & h & i\end{array}|$, which expands by minors to $a|\begin{array}{ll}e & f \\ h & i\end{array}|-b|\begin{array}{ll}d & f \\ g & i\end{array}|+c|\begin{array}{ll}d & e \\ g & h\end{array}|=a(ei-fh)–b(di-fg)+c(dh-eg).$

## The Cross Product and Its Properties
The dot product is a multiplication of two vectors that results in a scalar. In this section, we introduce a product of two vectors that generates a third vector orthogonal to the first two. Consider how we might find such a vector. Let $\textbf{u}=\langle {u}_{1},{u}_{2},{u}_{3}\rangle$ and $\textbf{v}=\langle {v}_{1},{v}_{2},{v}_{3}\rangle$ be nonzero vectors. We want to find a vector $\textbf{w}=\langle {w}_{1},{w}_{2},{w}_{3}\rangle$ orthogonal to both $\textbf{u}$ and $\textbf{v}$—that is, we want to find $\textbf{w}$ such that $\textbf{u}\cdot \textbf{w}=0$ and $\textbf{v}\cdot \textbf{w}=0.$ Therefore, ${w}_{1},$ ${w}_{2},$ and ${w}_{3}$ must satisfy

$\begin{array}{rll}{u}_{1}{w}_{1}+{u}_{2}{w}_{2}+{u}_{3}{w}_{3} & = & 0 \\ {v}_{1}{w}_{1}+{v}_{2}{w}_{2}+{v}_{3}{w}_{3} & = & 0.\end{array}$  {eq:fs-id1163724042698}

If we multiply the top equation by ${v}_{3}$ and the bottom equation by ${u}_{3}$ and subtract, we can eliminate the variable ${w}_{3},$ which gives

$({u}_{1}{v}_{3}-{v}_{1}{u}_{3}){w}_{1}+({u}_{2}{v}_{3}-{v}_{2}{u}_{3}){w}_{2}=0.$  {eq:fs-id1163723832023}

If we select

$\begin{array}{rll}{w}_{1} & = & {u}_{2}{v}_{3}-{u}_{3}{v}_{2} \\ {w}_{2} & = & \text{−}({u}_{1}{v}_{3}-{u}_{3}{v}_{1}),\end{array}$  {eq:fs-id1163723767231}

we get a possible solution vector. Substituting these values back into the original equations gives

${w}_{3}={u}_{1}{v}_{2}-{u}_{2}{v}_{1}.$  {eq:fs-id1163724072931}

That is, vector

$\textbf{w}=\langle {u}_{2}{v}_{3}-{u}_{3}{v}_{2},\text{−}({u}_{1}{v}_{3}-{u}_{3}{v}_{1}),{u}_{1}{v}_{2}-{u}_{2}{v}_{1}\rangle$  {eq:fs-id1163724018813}

is orthogonal to both $\textbf{u}$ and $\textbf{v},$ which leads us to define the following operation, called the cross product.

:::note [definition] Definition
Let $\textbf{u}=\langle {u}_{1},{u}_{2},{u}_{3}\rangle \;\text{and}\;\textbf{v}=\langle {v}_{1},{v}_{2},{v}_{3}\rangle .$ Then, the {term:cross product} $\textbf{u}\;\times \;\textbf{v}$ is vector

$$ \begin{array}{rl}\textbf{u}\;\times \;\textbf{v} & =({u}_{2}{v}_{3}-{u}_{3}{v}_{2})\textbf{i}-({u}_{1}{v}_{3}-{u}_{3}{v}_{1})\textbf{j}+({u}_{1}{v}_{2}-{u}_{2}{v}_{1})\textbf{k} \\ & =\langle {u}_{2}{v}_{3}-{u}_{3}{v}_{2},\text{−}({u}_{1}{v}_{3}-{u}_{3}{v}_{1}),{u}_{1}{v}_{2}-{u}_{2}{v}_{1}\rangle .\end{array} $$  {eq:fs-id1163723754200}

:::
From the way we have developed $\textbf{u}\;\times \;\textbf{v},$ it should be clear that the cross product is orthogonal to both $\textbf{u}$ and $\textbf{v}.$ However, it never hurts to check. To show that $\textbf{u}\;\times \;\textbf{v}$ is orthogonal to $\textbf{u},$ we calculate the dot product of $\textbf{u}$ and $\textbf{u}\;\times \;\textbf{v}.$

$\begin{array}{rl}\textbf{u}\cdot (\textbf{u}\;\times \;\textbf{v}) & =\langle {u}_{1},{u}_{2},{u}_{3}\rangle \cdot \langle {u}_{2}{v}_{3}-{u}_{3}{v}_{2},\text{−}{u}_{1}{v}_{3}+{u}_{3}{v}_{1},{u}_{1}{v}_{2}-{u}_{2}{v}_{1}\rangle \\ & ={u}_{1}({u}_{2}{v}_{3}-{u}_{3}{v}_{2})+{u}_{2}(\text{−}{u}_{1}{v}_{3}+{u}_{3}{v}_{1})+{u}_{3}({u}_{1}{v}_{2}-{u}_{2}{v}_{1}) \\ & ={u}_{1}{u}_{2}{v}_{3}-{u}_{1}{u}_{3}{v}_{2}-{u}_{1}{u}_{2}{v}_{3}+{u}_{2}{u}_{3}{v}_{1}+{u}_{1}{u}_{3}{v}_{2}-{u}_{2}{u}_{3}{v}_{1} \\ & =({u}_{1}{u}_{2}{v}_{3}-{u}_{1}{u}_{2}{v}_{3})+(\text{−}{u}_{1}{u}_{3}{v}_{2}+{u}_{1}{u}_{3}{v}_{2})+({u}_{2}{u}_{3}{v}_{1}-{u}_{2}{u}_{3}{v}_{1}) \\ & =0\end{array}$  {eq:fs-id1163724060614}

In a similar manner, we can show that the cross product is also orthogonal to $\textbf{v}.$

:::example {ex:fs-id1163723497714} Finding a Cross Product

:::exercise {fs-id1163724054427} type= 
PROBLEM:
Let $\textbf{p}=\langle −1,2,5\rangle \;\text{and}\;\textbf{q}=\langle 4,0,−3\rangle$ ([ref:CNX_Calc_Figure_12_04_011]). Find $\textbf{p}\;\times \;\textbf{q}.$

> FIGURE {fig:CNX_Calc_Figure_12_04_011} src=../../media/CNX_Calc_Figure_12_04_011.jpg
> alt: This figure is the 3-dimensional coordinate system. It has two vectors in standard position. The first vector is labeled “p = <-1, 2, 5>.” The second vector is labeled “q = <4, 0, -3>.”
> caption: Finding a cross product to two given vectors.

SOLUTION:
Substitute the components of the vectors into [ref:fs-id1163723754200]:

$\begin{array}{ll}\text{p}\;\times \;\text{q} & =\langle −1,2,5\rangle \;\times \;\langle 4,0,−3\rangle \\ & =\langle {p}_{2}{q}_{3}-{p}_{3}{q}_{2},-({p}_{1}{q}_{3}-{p}_{3}{q}_{1}),{p}_{1}{q}_{2}-{p}_{2}{q}_{1}\rangle \\ & =\langle {p}_{2}{q}_{3}-{p}_{3}{q}_{2},{p}_{3}{q}_{1}-{p}_{1}{q}_{3},{p}_{1}{q}_{2}-{p}_{2}{q}_{1}\rangle \\ & =\langle 2(−3)-5(0),5(4)-(−1)(−3),(−1)0-2(4)\rangle \\ & =\langle −6,17,−8\rangle .\end{array}$  {eq:fs-id1163723338311}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723757318} type= 
PROBLEM:
Find $\textbf{p}\;\times \;\textbf{q}$ for $\textbf{p}=\langle 5,1,2\rangle$ and $\textbf{q}=\langle −2,0,1\rangle .$ Express the answer using standard unit vectors.
SOLUTION:
$\textbf{i}-9\textbf{j}+2\textbf{k}$
COMMENTARY: Hint
Use the formula $\textbf{u}\;\times \;\textbf{v}=({u}_{2}{v}_{3}-{u}_{3}{v}_{2})\textbf{i}-({u}_{1}{v}_{3}-{u}_{3}{v}_{1})\textbf{j}+({u}_{1}{v}_{2}-{u}_{2}{v}_{1})\textbf{k}.$
:::
:::
Although it may not be obvious from [ref:fs-id1163723754200], the direction of $\textbf{u}\;\times \;\textbf{v}$ is given by the right-hand rule. If we hold the right hand out with the fingers pointing in the direction of $\textbf{u},$ then curl the fingers toward vector $\textbf{v},$ the thumb points in the direction of the cross product, as shown.

> FIGURE {fig:CNX_Calc_Figure_12_04_001} src=../../media/CNX_Calc_Figure_12_04_001.jpg
> alt: This figure has two images. The first image has three vectors with the same initial point. Two of the vectors are labeled “u” and “v.” The angle between u and v is theta. The third vector is perpendicular to u and v. It is labeled “u cross v.” The second image has three vectors. The vectors are labeled “u, v, and u cross v.” “u cross v” is perpendicular to u and v. Also, on the image of these three vectors is a right hand. The fingers are in the direction of u. As the hand is closing, the direction of the closing fingers is the direction of v. The thumb is up and in the direction of “u cross v.”
> caption: The direction of $\textbf{u}\;\times \;\textbf{v}$ is determined by the right-hand rule.

Notice what this means for the direction of $\textbf{v}\;\times \;\textbf{u}.$ If we apply the right-hand rule to $\textbf{v}\;\times \;\textbf{u},$ we start with our fingers pointed in the direction of $\textbf{v},$ then curl our fingers toward the vector $\textbf{u}.$ In this case, the thumb points in the opposite direction of $\textbf{u}\;\times \;\textbf{v}.$ (Try it!)

:::example {ex:fs-id1163723957910} Anticommutativity of the Cross Product

:::exercise {fs-id1163723957912} type= 
PROBLEM:
Let $\textbf{u}=\langle 0,2,1\rangle$ and $\textbf{v}=\langle 3,−1,0\rangle .$ Calculate $\textbf{u}\;\times \;\textbf{v}$ and $\textbf{v}\;\times \;\textbf{u}$ and graph them.

> FIGURE {fig:CNX_Calc_Figure_12_04_012} src=../../media/CNX_Calc_Figure_12_04_012.jpg
> alt: This figure is the 3-dimensional coordinate system. It has two vectors in standard position. The first vector is labeled “u = <0, 2, 1>.” The second vector is labeled “v = <3, -1, 0>.”
> caption: Are the cross products $\textbf{u}\;\times \;\textbf{v}$ and $\textbf{v}\;\times \;\textbf{u}$ in the same direction?

SOLUTION:
We have

$\begin{array}{rll}\textbf{u}\;\times \;\textbf{v} & = & \langle (0+1),\text{−}(0-3),(0-6)\rangle =\langle 1,3,−6\rangle \\ \textbf{v}\;\times \;\textbf{u} & = & \langle (−1-0),\text{−}(3-0),(6-0)\rangle =\langle −1,−3,6\rangle .\end{array}$  {eq:fs-id1163723203968}

We see that, in this case, $\textbf{u}\;\times \;\textbf{v}=\text{−}(\textbf{v}\;\times \;\textbf{u})$ ([ref:CNX_Calc_Figure_12_04_013]). We prove this in general later in this section.

> FIGURE {fig:CNX_Calc_Figure_12_04_013} src=../../media/CNX_Calc_Figure_12_04_013.jpg
> alt: This figure is the 3-dimensional coordinate system. It has two vectors in standard position. The first vector is labeled “u = <0, 2, 1>.” The second vector is labeled “v = <3, -1, 0>.” It also has two vectors that are cross products. The first is “u x v = <1, 3, -6>.” The second is “v x u = <-1, -3, 6>.”
> caption: The cross products $\textbf{u}\;\times \;\textbf{v}$ and $\textbf{v}\;\times \;\textbf{u}$ are both orthogonal to $\textbf{u}$ and $\textbf{v},$ but in opposite directions.

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723145015} type= 
PROBLEM:
Suppose vectors $\textbf{u}$ and $\textbf{v}$ lie in the *xy*-plane (the *z*-component of each vector is zero). Now suppose the *x*- and *y*-components of $\textbf{u}$ and the *y*-component of $\textbf{v}$ are all positive, whereas the *x*-component of $\textbf{v}$ is negative. Assuming the coordinate axes are oriented in the usual positions, in which direction does $\textbf{u}\;\times \;\textbf{v}$ point?
SOLUTION:
Up (the positive *z*-direction)
COMMENTARY: Hint
Remember the right-hand rule.
:::
:::
The cross products of the standard unit vectors $\textbf{i},\textbf{j},$ and $\textbf{k}$ can be useful for simplifying some calculations, so let’s consider these cross products. A straightforward application of the definition shows that

$\textbf{i}\;\times \;\textbf{i}=\textbf{j}\;\times \;\textbf{j}=\textbf{k}\;\times \;\textbf{k}=\mathbf{0}.$  {eq:fs-id1163724035254}

(The cross product of two vectors is a vector, so each of these products results in the zero vector, not the scalar $0.)$ It’s up to you to verify the calculations on your own.
Furthermore, because the cross product of two vectors is orthogonal to each of these vectors, we know that the cross product of $\textbf{i}$ and $\textbf{j}$ is parallel to $\textbf{k}.$ Similarly, the vector product of $\textbf{i}$ and $\textbf{k}$ is parallel to $\textbf{j},$ and the vector product of $\textbf{j}$ and $\textbf{k}$ is parallel to $\textbf{i}.$ We can use the right-hand rule to determine the direction of each product. Then we have

$\begin{array}{rllllrll}\textbf{i}\;\times \;\textbf{j} & = & \textbf{k} & & & \textbf{j}\;\times \;\textbf{i} & = & \text{−}\textbf{k} \\ \textbf{j}\;\times \;\textbf{k} & = & \textbf{i} & & & \textbf{k}\;\times \;\textbf{j} & = & \text{−}\textbf{i} \\ \textbf{k}\;\times \;\textbf{i} & = & \textbf{j} & & & \textbf{i}\;\times \;\textbf{k} & = & \text{−}\textbf{j}.\end{array}$  {eq:fs-id1163724016752}

These formulas come in handy later.

:::example {ex:fs-id1163723519217} Cross Product of Standard Unit Vectors

:::exercise {fs-id1163723519219} type= 
PROBLEM:
Find $\textbf{i}\;\times \;(\textbf{j}\;\times \;\textbf{k}).$
SOLUTION:
We know that $\textbf{j}\;\times \;\textbf{k}=\textbf{i}.$ Therefore, $\textbf{i}\;\times \;(\textbf{j}\;\times \;\textbf{k})=\textbf{i}\;\times \;\textbf{i}=\mathbf{0}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163724116747} type= 
PROBLEM:
Find $(\textbf{i}\;\times \;\textbf{j})\;\times \;(\textbf{k}\;\times \;\textbf{i}).$
SOLUTION:
$\text{−}\textbf{i}$
COMMENTARY: Hint
Remember the right-hand rule.
:::
:::
As we have seen, the dot product is often called the *scalar product* because it results in a scalar. The cross product results in a vector, so it is sometimes called the {term:vector product}. These operations are both versions of vector multiplication, but they have very different properties and applications. Let’s explore some properties of the cross product. We prove only a few of them. Proofs of the other properties are left as exercises.

:::note [theorem] Properties of the Cross Product
Let $\textbf{u},\textbf{v},$ and $\textbf{w}$ be vectors in space, and let $c$ be a scalar.

$\begin{array}{lllrllll}\text{i.} & & & \textbf{u}\;\times \;\textbf{v} & = & \text{−}(\textbf{v}\;\times \;\textbf{u}) & & \text{Anticommutative property} \\ \text{ii.} & & & \textbf{u}\;\times \;(\textbf{v}+\textbf{w}) & = & \textbf{u}\;\times \;\textbf{v}+\textbf{u}\;\times \;\textbf{w} & & \text{Distributive property} \\ \text{iii.} & & & c(\textbf{u}\;\times \;\textbf{v}) & = & (c\textbf{u})\;\times \;\textbf{v}=\textbf{u}\;\times \;(c\textbf{v}) & & \text{Multiplication by a constant} \\ \text{iv.} & & & \textbf{u}\;\times \;\mathbf{0} & = & \mathbf{0}\;\times \;\textbf{u}=\mathbf{0} & & \text{Cross product of the zero vector} \\ \text{v.} & & & \textbf{v}\;\times \;\textbf{v} & = & \mathbf{0} & & \text{Cross product of a vector with itself} \\ \text{vi.} & & & \textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w}) & = & (\textbf{u}\;\times \;\textbf{v})\cdot \textbf{w} & & \text{Scalar triple product}\end{array}$  {eq:fs-id1163724081929}

:::

### Proof
For property $\text{i}.,$ we want to show $\textbf{u}\;\times \;\textbf{v}=\text{−}(\textbf{v}\;\times \;\textbf{u}).$ We have

$\begin{array}{rl}\textbf{u}\;\times \;\textbf{v} & =\langle {u}_{1},{u}_{2},{u}_{3}\rangle \;\times \;\langle {v}_{1},{v}_{2},{v}_{3}\rangle \\ & =\langle {u}_{2}{v}_{3}-{u}_{3}{v}_{2},\text{−}{u}_{1}{v}_{3}+{u}_{3}{v}_{1},{u}_{1}{v}_{2}-{u}_{2}{v}_{1}\rangle \\ & =\text{−}\langle {u}_{3}{v}_{2}-{u}_{2}{v}_{3},\text{−}{u}_{3}{v}_{1}+{u}_{1}{v}_{3},{u}_{2}{v}_{1}-{u}_{1}{v}_{2}\rangle \\ & =\text{−}\langle {v}_{1},{v}_{2},{v}_{3}\rangle \;\times \;\langle {u}_{1},{u}_{2},{u}_{3}\rangle \\ & =\text{−}(\textbf{v}\;\times \;\textbf{u}).\end{array}$  {eq:fs-id1163723525390}

Unlike most operations we’ve seen, the cross product is not commutative. This makes sense if we think about the right-hand rule.
For property $\text{iv}.,$ this follows directly from the definition of the cross product. We have

$\begin{array}{rl}\textbf{u}\;\times \;\mathbf{0} & =\langle {u}_{2}(0)-{u}_{3}(0),\text{−}({u}_{2}(0)-{u}_{3}(0)),{u}_{1}(0)-{u}_{2}(0)\rangle \\ & =\langle 0,0,0\rangle =\mathbf{0}.\end{array}$  {eq:fs-id1163723500108}

Then, by property i., $\mathbf{0}\;\times \;\textbf{u}=\mathbf{0}$ as well. Remember that the dot product of a vector and the zero vector is the *scalar* $0,$ whereas the cross product of a vector with the zero vector is the *vector* $\mathbf{0}.$
Property $\text{vi}.$ looks like the associative property, but note the change in operations:

$\begin{array}{rl}\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w}) & =\textbf{u}\cdot \langle {v}_{2}{w}_{3}-{v}_{3}{w}_{2},\text{−}{v}_{1}{w}_{3}+{v}_{3}{w}_{1},{v}_{1}{w}_{2}-{v}_{2}{w}_{1}\rangle \\ & ={u}_{1}({v}_{2}{w}_{3}-{v}_{3}{w}_{2})+{u}_{2}(\text{−}{v}_{1}{w}_{3}+{v}_{3}{w}_{1})+{u}_{3}({v}_{1}{w}_{2}-{v}_{2}{w}_{1}) \\ & ={u}_{1}{v}_{2}{w}_{3}-{u}_{1}{v}_{3}{w}_{2}-{u}_{2}{v}_{1}{w}_{3}+{u}_{2}{v}_{3}{w}_{1}+{u}_{3}{v}_{1}{w}_{2}-{u}_{3}{v}_{2}{w}_{1} \\ & =({u}_{2}{v}_{3}-{u}_{3}{v}_{2}){w}_{1}+({u}_{3}{v}_{1}-{u}_{1}{v}_{3}){w}_{2}+({u}_{1}{v}_{2}-{u}_{2}{v}_{1}){w}_{3} \\ & =\langle {u}_{2}{v}_{3}-{u}_{3}{v}_{2},{u}_{3}{v}_{1}-{u}_{1}{v}_{3},{u}_{1}{v}_{2}-{u}_{2}{v}_{1}\rangle \cdot \langle {w}_{1},{w}_{2},{w}_{3}\rangle \\ & =(\textbf{u}\;\times \;\textbf{v})\cdot \textbf{w}.\end{array}$  {eq:fs-id1163723525994}

□

:::example {ex:fs-id1163723500201} Using the Properties of the Cross Product

:::exercise {fs-id1163723500203} type= 
PROBLEM:
Use the cross product properties to calculate $(2\textbf{i}\;\times \;3\textbf{j})\;\times \;\textbf{j}.$
SOLUTION:

$\begin{array}{rl}(2\textbf{i}\;\times \;3\textbf{j})\;\times \;\textbf{j} & =2(\textbf{i}\;\times \;3\textbf{j})\;\times \;\textbf{j} \\ & =2(3)(\textbf{i}\;\times \;\textbf{j})\;\times \;\textbf{j} \\ & =(6\textbf{k})\;\times \;\textbf{j} \\ & =6(\textbf{k}\;\times \;\textbf{j}) \\ & =6(\text{−}\textbf{i})=−6\textbf{i}.\end{array}$  {eq:fs-id1163723475524}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723522640} type= 
PROBLEM:
Use the properties of the cross product to calculate $(\textbf{i}\;\times \;\textbf{k})\;\times \;(\textbf{k}\;\times \;\textbf{j}).$
SOLUTION:
$\text{−}\textbf{k}$
COMMENTARY: Hint
$\textbf{u}\;\times \;\textbf{v}=\text{−}(\textbf{v}\;\times \;\textbf{u})$
:::
:::
So far in this section, we have been concerned with the direction of the vector $\textbf{u}\;\times \;\textbf{v},$ but we have not discussed its magnitude. It turns out there is a simple expression for the magnitude of $\textbf{u}\;\times \;\textbf{v}$ involving the magnitudes of $\textbf{u}$ and $\textbf{v},$ and the sine of the angle between them.

:::note [theorem] Magnitude of the Cross Product
Let $\textbf{u}$ and $\textbf{v}$ be vectors, and let $\theta$ be the angle between them. Then, $\| \textbf{u}\;\times \;\textbf{v}\| =\| \textbf{u}\| \cdot \| \textbf{v}\| \cdot \text{sin}\;\theta .$
:::

### Proof
Let $\textbf{u}=\langle {u}_{1},{u}_{2},{u}_{3}\rangle$ and $\textbf{v}=\langle {v}_{1},{v}_{2},{v}_{3}\rangle$ be vectors, and let $\theta$ denote the angle between them. Then

$\begin{array}{rl}{\| \textbf{u}\;\times \;\textbf{v}\|}^{2} & ={({u}_{2}{v}_{3}-{u}_{3}{v}_{2})}^{2}+{({u}_{3}{v}_{1}-{u}_{1}{v}_{3})}^{2}+{({u}_{1}{v}_{2}-{u}_{2}{v}_{1})}^{2} \\ & ={u}_{2}^{2}{v}_{3}^{2}-2{u}_{2}{u}_{3}{v}_{2}{v}_{3}+{u}_{3}^{2}{v}_{2}^{2}+{u}_{3}^{2}{v}_{1}^{2}-2{u}_{1}{u}_{3}{v}_{1}{v}_{3}+{u}_{1}^{2}{v}_{3}^{2}+{u}_{1}^{2}{v}_{2}^{2}-2{u}_{1}{u}_{2}{v}_{1}{v}_{2}+{u}_{2}^{2}{v}_{1}^{2} \\ & ={u}_{1}^{2}{v}_{1}^{2}+{u}_{1}^{2}{v}_{2}^{2}+{u}_{1}^{2}{v}_{3}^{2}+{u}_{2}^{2}{v}_{1}^{2}+{u}_{2}^{2}{v}_{2}^{2}+{u}_{2}^{2}{v}_{3}^{2}+{u}_{3}^{2}{v}_{1}^{2}+{u}_{3}^{2}{v}_{2}^{2}+{u}_{3}^{2}{v}_{3}^{2} \\ & \hspace{2em}-({u}_{1}^{2}{v}_{1}^{2}+{u}_{2}^{2}{v}_{2}^{2}+{u}_{3}^{2}{v}_{3}^{2}+2{u}_{1}{u}_{2}{v}_{1}{v}_{2}+2{u}_{1}{u}_{3}{v}_{1}{v}_{3}+2{u}_{2}{u}_{3}{v}_{2}{v}_{3}) \\ & =({u}_{1}^{2}+{u}_{2}^{2}+{u}_{3}^{2})({v}_{1}^{2}+{v}_{2}^{2}+{v}_{3}^{2})-{({u}_{1}{v}_{1}+{u}_{2}{v}_{2}+{u}_{3}{v}_{3})}^{2} \\ & ={\| \textbf{u}\|}^{2}{\| \textbf{v}\|}^{2}-{(\textbf{u}\cdot \textbf{v})}^{2} \\ & ={\| \textbf{u}\|}^{2}{\| \textbf{v}\|}^{2}-{\| \textbf{u}\|}^{2}{\| \textbf{v}\|}^{2}{\text{cos}}^{2}\theta \\ & ={\| \textbf{u}\|}^{2}{\| \textbf{v}\|}^{2}(1-{\text{cos}}^{2}\theta ) \\ & ={\| \textbf{u}\|}^{2}{\| \textbf{v}\|}^{2}({\text{sin}}^{2}\theta ).\end{array}$  {eq:fs-id1163724072536}

Taking square roots and noting that $\sqrt{{\text{sin}}^{2}\theta}=\text{sin}\;\theta$ for $0\le \theta \le 180\text{°},$ we have the desired result:

$\| \textbf{u}\;\times \;\textbf{v}\| =\| \textbf{u}\| \| \textbf{v}\| \text{sin}\;\theta .$  {eq:fs-id1163724074696}

□
This definition of the cross product allows us to visualize or interpret the product geometrically. It is clear, for example, that the cross product is defined only for vectors in three dimensions, not for vectors in two dimensions. In two dimensions, it is impossible to generate a vector simultaneously orthogonal to two nonparallel vectors.

:::example {ex:fs-id1163724074775} Calculating the Cross Product

:::exercise {fs-id1163724074777} type= 
PROBLEM:
Use [ref:fs-id1163724130388] to find the magnitude of the cross product of $\textbf{u}=\langle 0,4,0\rangle$ and $\textbf{v}=\langle 0,0,−3\rangle .$
SOLUTION:
We have

$\begin{array}{rl}\| \textbf{u}\;\times \;\textbf{v}\| & =\| \textbf{u}\| \cdot \| \textbf{v}\| \cdot \text{sin}\;\theta \\ & =\sqrt{{0}^{2}+{4}^{2}+{0}^{2}}\cdot \sqrt{{0}^{2}+{0}^{2}+{(−3)}^{2}}\cdot \text{sin}\;\frac{\pi}{2} \\ & =4(3)(1)=12.\end{array}$  {eq:fs-id1163724049536}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163724049727} type= 
PROBLEM:
Use [ref:fs-id1163724130388] to find the magnitude of $\textbf{u}\;\times \;\textbf{v},$ where $\textbf{u}=\langle −8,0,0\rangle$ and $\textbf{v}=\langle 0,2,0\rangle .$
SOLUTION:
$16$
COMMENTARY: Hint
Vectors $\textbf{u}$ and $\textbf{v}$ are orthogonal.
:::
:::

## Determinants and the Cross Product
Using [ref:fs-id1163723754200] to find the cross product of two vectors is straightforward, and it presents the cross product in the useful component form. The formula, however, is complicated and difficult to remember. Fortunately, we have an alternative. We can calculate the cross product of two vectors using {term:determinant} notation.
A $2\;\times \;2$ determinant is defined by

$|\begin{array}{ll}{a}_{1} & {a}_{2} \\ {b}_{1} & {b}_{2}\end{array}|={a}_{1}{b}_{2}-{b}_{1}{a}_{2}.$  {eq:fs-id1163723093355}

For example,

$|\begin{array}{lr}3 & −2 \\ 5 & 1\end{array}|=3(1)-5(−2)=3+10=13.$  {eq:fs-id1163724065995}

A $3\;\times \;3$ determinant is defined in terms of $2\;\times \;2$ determinants as follows:

$$ |\begin{array}{lll}{a}_{1} & {a}_{2} & {a}_{3} \\ {b}_{1} & {b}_{2} & {b}_{3} \\ {c}_{1} & {c}_{2} & {c}_{3}\end{array}|={a}_{1}|\begin{array}{ll}{b}_{2} & {b}_{3} \\ {c}_{2} & {c}_{3}\end{array}|-{a}_{2}|\begin{array}{ll}{b}_{1} & {b}_{3} \\ {c}_{1} & {c}_{3}\end{array}|+{a}_{3}|\begin{array}{ll}{b}_{1} & {b}_{2} \\ {c}_{1} & {c}_{2}\end{array}|. $$  {eq:fs-id1163724066100}

[ref:fs-id1163724066100] is referred to as the *expansion of the determinant along the first row*. Notice that the multipliers of each of the $2\;\times \;2$ determinants on the right side of this expression are the entries in the first row of the $3\;\times \;3$ determinant. Furthermore, each of the $2\;\times \;2$ determinants contains the entries from the $3\;\times \;3$ determinant that would remain if you crossed out the row and column containing the multiplier. Thus, for the first term on the right, ${a}_{1}$ is the multiplier, and the $2\;\times \;2$ determinant contains the entries that remain if you cross out the first row and first column of the $3\;\times \;3$ determinant. Similarly, for the second term, the multiplier is ${a}_{2},$ and the $2\;\times \;2$ determinant contains the entries that remain if you cross out the first row and second column of the $3\;\times \;3$ determinant. Notice, however, that the coefficient of the second term is negative. The third term can be calculated in similar fashion.

:::example {ex:fs-id1163723183796} Using Expansion Along the First Row to Compute a $3\;\times \;3$ Determinant

:::exercise {fs-id1163723183798} type= 
PROBLEM:
Evaluate the determinant $|\begin{array}{rrr}2 & 5 & −1 \\ −1 & 1 & 3 \\ −2 & 3 & 4\end{array}|.$
SOLUTION:
We have

$\begin{array}{rl}|\begin{array}{rrr}2 & 5 & −1 \\ −1 & 1 & 3 \\ −2 & 3 & 4\end{array}| & =2|\begin{array}{ll}1 & 3 \\ 3 & 4\end{array}|-5|\begin{array}{ll}−1 & 3 \\ −2 & 4\end{array}|-1|\begin{array}{ll}−1 & 1 \\ −2 & 3\end{array}| \\ & =2(4-9)-5(−4+6)-1(−3+2) \\ & =2(−5)-5(2)-1(−1)=−10-10+1 \\ & =−19.\end{array}$  {eq:fs-id1163723183877}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723298916} type= 
PROBLEM:
Evaluate the determinant $|\begin{array}{rrr}1 & −2 & −1 \\ 3 & 2 & −3 \\ 1 & 5 & 4\end{array}|.$
SOLUTION:
$40$
COMMENTARY: Hint
Expand along the first row. Don’t forget the second term is negative!
:::
:::
Technically, determinants are defined only in terms of arrays of real numbers. However, the determinant notation provides a useful mnemonic device for the cross product formula.

:::note [rule] Rule: Cross Product Calculated by a Determinant
Let $\textbf{u}=\langle {u}_{1},{u}_{2},{u}_{3}\rangle$ and $\textbf{v}=\langle {v}_{1},{v}_{2},{v}_{3}\rangle$ be vectors. Then the cross product $\textbf{u}\;\times \;\textbf{v}$ is given by

$\textbf{u}\;\times \;\textbf{v}=|\begin{array}{lll}\textbf{i} & \textbf{j} & \textbf{k} \\ {u}_{1} & {u}_{2} & {u}_{3} \\ {v}_{1} & {v}_{2} & {v}_{3}\end{array}|=|\begin{array}{ll}{u}_{2} & {u}_{3} \\ {v}_{2} & {v}_{3}\end{array}|\textbf{i}-|\begin{array}{ll}{u}_{1} & {u}_{3} \\ {v}_{1} & {v}_{3}\end{array}|\textbf{j}+|\begin{array}{ll}{u}_{1} & {u}_{2} \\ {v}_{1} & {v}_{2}\end{array}|\textbf{k}.$  {eq:fs-id1163723279404}

:::

:::example {ex:fs-id1163724057695} Using Determinant Notation to find $\textbf{p}\;\times \;\textbf{q}$

:::exercise {fs-id1163724057697} type= 
PROBLEM:
Let $\textbf{p}=\langle −1,2,5\rangle$ and $\textbf{q}=\langle 4,0,−3\rangle .$ Find $\textbf{p}\;\times \;\textbf{q}.$
SOLUTION:
We set up our determinant by putting the standard unit vectors across the first row, the components of $\textbf{u}$ in the second row, and the components of $\textbf{v}$ in the third row. Then, we have

$\begin{array}{rl}\textbf{p}\;\times \;\textbf{q} & =|\begin{array}{rrr}\textbf{i} & \textbf{j} & \textbf{k} \\ −1 & 2 & 5 \\ 4 & 0 & −3\end{array}|=|\begin{array}{rr}2 & 5 \\ 0 & −3\end{array}|\textbf{i}-|\begin{array}{rr}−1 & 5 \\ 4 & −3\end{array}|\textbf{j}+|\begin{array}{rr}−1 & 2 \\ 4 & 0\end{array}|\textbf{k} \\ & =(−6-0)\textbf{i}-(3-20)\textbf{j}+(0-8)\textbf{k} \\ & =−6\textbf{i}+17\textbf{j}-8\textbf{k}.\end{array}$  {eq:fs-id1163724057849}

Notice that this answer confirms the calculation of the cross product in [ref:fs-id1163723497714].
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723314887} type= 
PROBLEM:
Use determinant notation to find $\textbf{a}\;\times \;\textbf{b},$ where $\textbf{a}=\langle 8,2,3\rangle$ and $\textbf{b}=\langle −1,0,4\rangle .$
SOLUTION:
$8\textbf{i}-35\textbf{j}+2\textbf{k}$
COMMENTARY: Hint
Calculate the determinant $|\begin{array}{rrr}\textbf{i} & \textbf{j} & \textbf{k} \\ 8 & 2 & 3 \\ −1 & 0 & 4\end{array}|.$
:::
:::

## Using the Cross Product
The cross product is very useful for several types of calculations, including finding a vector orthogonal to two given vectors, computing areas of triangles and parallelograms, and even determining the volume of the three-dimensional geometric shape made of parallelograms known as a *parallelepiped*. The following examples illustrate these calculations.

:::example {ex:fs-id1163723339486} Finding a Unit Vector Orthogonal to Two Given Vectors

:::exercise {fs-id1163723339488} type= 
PROBLEM:
Let $\textbf{a}=\langle 5,2,−1\rangle$ and $\textbf{b}=\langle 0,−1,4\rangle .$ Find a unit vector orthogonal to both $\textbf{a}$ and $\textbf{b}.$
SOLUTION:
The cross product $\textbf{a}\;\times \;\textbf{b}$ is orthogonal to both vectors $\textbf{a}$ and $\textbf{b}.$ We can calculate it with a determinant:

$\begin{array}{rl}\textbf{a}\;\times \;\textbf{b} & =|\begin{array}{rrr}\textbf{i} & \textbf{j} & \textbf{k} \\ 5 & 2 & −1 \\ 0 & −1 & 4\end{array}|=|\begin{array}{rr}2 & −1 \\ −1 & 4\end{array}|\textbf{i}-|\begin{array}{rr}5 & −1 \\ 0 & 4\end{array}|\textbf{j}+|\begin{array}{rr}5 & 2 \\ 0 & −1\end{array}|\textbf{k} \\ & =(8-1)\textbf{i}-(20-0)\textbf{j}+(−5-0)\textbf{k} \\ & =7\textbf{i}-20\textbf{j}-5\textbf{k}.\end{array}$  {eq:fs-id1163724138548}

Normalize this vector to find a unit vector in the same direction:

$\| \textbf{a}\;\times \;\textbf{b}\| =\sqrt{{(7)}^{2}+{(−20)}^{2}+{(−5)}^{2}}=\sqrt{474}.$  {eq:fs-id1163723341788}

Thus, $\langle \frac{7}{\sqrt{474}},\frac{−20}{\sqrt{474}},\frac{−5}{\sqrt{474}}\rangle$ is a unit vector orthogonal to $\textbf{a}$ and $\textbf{b}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723171375} type= 
PROBLEM:
Find a unit vector orthogonal to both $\textbf{a}$ and $\textbf{b},$ where $\textbf{a}=\langle 4,0,3\rangle$ and $\textbf{b}=\langle 1,1,4\rangle .$
SOLUTION:
$\langle \frac{−3}{\sqrt{194}},\frac{−13}{\sqrt{194}},\frac{4}{\sqrt{194}}\rangle$
COMMENTARY: Hint
Normalize the cross product.
:::
:::
To use the cross product for calculating areas, we state and prove the following theorem.

:::note [theorem] Area of a Parallelogram
If we locate vectors $\textbf{u}$ and $\textbf{v}$ such that they form adjacent sides of a parallelogram, then the area of the parallelogram is given by $\| \textbf{u}\;\times \;\textbf{v}\|$ ([ref:CNX_Calc_Figure_12_04_005]).
:::

> FIGURE {fig:CNX_Calc_Figure_12_04_005} src=../../media/CNX_Calc_Figure_12_04_005.jpg
> alt: This figure is a parallelogram. One side is represented with a vector labeled “v.” The second side, the base, has the same initial point as vector v and is labeled “u.” The angle between u and v is theta. Also, a perpendicular line segment is drawn from the terminal point of v to vector u. It is labeled “|v|sin(theta).”
> caption: The parallelogram with adjacent sides $\textbf{u}$ and $\textbf{v}$ has base $\| \textbf{u}\|$ and height $\| \textbf{v}\| \text{sin}\;\theta .$

### Proof
We show that the magnitude of the cross product is equal to the base times height of the parallelogram.

$\begin{array}{rl}\text{Area of a parallelogram} & =\text{base}\;\times \;\text{height} \\ & =\| \textbf{u}\| (\| \textbf{v}\| \text{sin}\;\theta ) \\ & =\| \textbf{u}\;\times \;\textbf{v}\| \end{array}$  {eq:fs-id1163723995258}

□

:::example {ex:fs-id1163723362004} Finding the Area of a Triangle

:::exercise {fs-id1163723362006} type= 
PROBLEM:
Let $P=(1,0,0),Q=(0,1,0),\;\text{and}\;R=(0,0,1)$ be the vertices of a triangle ([ref:CNX_Calc_Figure_12_04_014]). Find its area.

> FIGURE {fig:CNX_Calc_Figure_12_04_014} src=../../media/CNX_Calc_Figure_12_04_014.jpg
> alt: This figure is the 3-dimensional coordinate system. It has a triangle drawn in the first octant. The vertices of the triangle are points P(1, 0, 0); Q(0, 1, 0); and R(0, 0, 1).
> caption: Finding the area of a triangle by using the cross product.

SOLUTION:
We have $\vec{PQ}=\langle 0-1,1-0,0-0\rangle =\langle −1,1,0\rangle$ and $\vec{PR}=\langle 0-1,0-0,1-0\rangle =\langle −1,0,1\rangle .$ The area of the parallelogram with adjacent sides $\vec{PQ}$ and $\vec{PR}$ is given by $\| \vec{PQ}\;\times \;\vec{PR}\| \text{:}$

$\begin{array}{rll}\vec{PQ}\;\times \;\vec{PR} & = & |\begin{array}{rrr}\textbf{i} & \textbf{j} & \textbf{k} \\ −1 & 1 & 0 \\ −1 & 0 & 1\end{array}|=(1-0)\textbf{i}-(−1-0)\textbf{j}+(0-(−1))\textbf{k}=\textbf{i}+\textbf{j}+\textbf{k} \\ \| \vec{PQ}\;\times \;\vec{PR}\| & = & \| \langle 1,1,1\rangle \| =\sqrt{{1}^{2}+{1}^{2}+{1}^{2}}=\sqrt{3}.\end{array}$  {eq:fs-id1163723113364}

The area of $\text{Δ}PQR$ is half the area of the parallelogram, or $\sqrt{3}\text{/}2.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723499917} type= 
PROBLEM:
Find the area of the parallelogram $PQRS$ with vertices $P(1,1,0),Q(7,1,0),R(9,4,2),$ and $S(3,4,2).$
SOLUTION:
$6\sqrt{13}$
COMMENTARY: Hint
Sketch the parallelogram and identify two vectors that form adjacent sides of the parallelogram.
:::
:::

## The Triple Scalar Product
Because the cross product of two vectors is a vector, it is possible to combine the dot product and the cross product. The dot product of a vector with the cross product of two other vectors is called the triple scalar product because the result is a scalar.

:::note [definition] Definition
The {term:triple scalar product} of vectors $\textbf{u},$ $\textbf{v},$ and $\textbf{w}$ is $\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w}).$
:::

:::note [theorem] Calculating a Triple Scalar Product
The triple scalar product of vectors $\textbf{u}={u}_{1}\textbf{i}+{u}_{2}\textbf{j}+{u}_{3}\textbf{k},$ $\textbf{v}={v}_{1}\textbf{i}+{v}_{2}\textbf{j}+{v}_{3}\textbf{k},$ and $\textbf{w}={w}_{1}\textbf{i}+{w}_{2}\textbf{j}+{w}_{3}\textbf{k}$ is the determinant of the $3\;\times \;3$ matrix formed by the components of the vectors:

$\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w})=|\begin{array}{lll}{u}_{1} & {u}_{2} & {u}_{3} \\ {v}_{1} & {v}_{2} & {v}_{3} \\ {w}_{1} & {w}_{2} & {w}_{3}\end{array}|.$  {eq:fs-id1163724053926}

:::

### Proof
The calculation is straightforward.

$\begin{array}{rl}\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w}) & =\langle {u}_{1},{u}_{2},{u}_{3}\rangle \cdot \langle {v}_{2}{w}_{3}-{v}_{3}{w}_{2},\text{−}{v}_{1}{w}_{3}+{v}_{3}{w}_{1},{v}_{1}{w}_{2}-{v}_{2}{w}_{1}\rangle \\ & ={u}_{1}({v}_{2}{w}_{3}-{v}_{3}{w}_{2})+{u}_{2}(\text{−}{v}_{1}{w}_{3}+{v}_{3}{w}_{1})+{u}_{3}({v}_{1}{w}_{2}-{v}_{2}{w}_{1}) \\ & ={u}_{1}({v}_{2}{w}_{3}-{v}_{3}{w}_{2})-{u}_{2}({v}_{1}{w}_{3}-{v}_{3}{w}_{1})+{u}_{3}({v}_{1}{w}_{2}-{v}_{2}{w}_{1}) \\ & =|\begin{array}{lll}{u}_{1} & {u}_{2} & {u}_{3} \\ {v}_{1} & {v}_{2} & {v}_{3} \\ {w}_{1} & {w}_{2} & {w}_{3}\end{array}|\end{array}$  {eq:fs-id1163723477918}

□

:::example {ex:fs-id1163724066224} Calculating the Triple Scalar Product

:::exercise {fs-id1163724066227} type= 
PROBLEM:
Let $\textbf{u}=\langle 1,3,5\rangle ,\textbf{v}=\langle 2,−1,0\rangle \;\text{and}\;\textbf{w}=\langle −3,0,−1\rangle .$ Calculate the triple scalar product $\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w}).$
SOLUTION:
Apply [ref:fs-id1163723326854] directly:

$\begin{array}{rl}\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w}) & =|\begin{array}{rrr}1 & 3 & 5 \\ 2 & −1 & 0 \\ −3 & 0 & −1\end{array}| \\ & =1|\begin{array}{rr}−1 & 0 \\ 0 & −1\end{array}|-3|\begin{array}{rr}2 & 0 \\ −3 & −1\end{array}|+5|\begin{array}{rr}2 & −1 \\ −3 & 0\end{array}| \\ & =(1-0)-3(−2-0)+5(0-3) \\ & =1+6-15=−8.\end{array}$  {eq:fs-id1163724066385}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723312433} type= 
PROBLEM:
Calculate the triple scalar product $\textbf{a}\cdot (\textbf{b}\;\times \;\textbf{c}),$ where $\textbf{a}=\langle 2,−4,1\rangle ,$ $\textbf{b}=\langle 0,3,−1\rangle ,$ and $\textbf{c}=\langle 5,−3,3\rangle .$
SOLUTION:
$17$
COMMENTARY: Hint
Place the vectors as the rows of a $3\;\times \;3$ matrix, then calculate the determinant.
:::
:::
When we create a matrix from three vectors, we must be careful about the order in which we list the vectors. If we list them in a matrix in one order and then rearrange the rows, the absolute value of the determinant remains unchanged. However, each time two rows switch places, the determinant changes sign:

$|\begin{array}{lll}{a}_{1} & {a}_{2} & {a}_{3} \\ {b}_{1} & {b}_{2} & {b}_{3} \\ {c}_{1} & {c}_{2} & {c}_{3}\end{array}|=d\hspace{2em}|\begin{array}{lll}{b}_{1} & {b}_{2} & {b}_{3} \\ {a}_{1} & {a}_{2} & {a}_{3} \\ {c}_{1} & {c}_{2} & {c}_{3}\end{array}|=\text{−}d\hspace{2em}|\begin{array}{lll}{b}_{1} & {b}_{2} & {b}_{3} \\ {c}_{1} & {c}_{2} & {c}_{3} \\ {a}_{1} & {a}_{2} & {a}_{3}\end{array}|=d\hspace{2em}|\begin{array}{lll}{c}_{1} & {c}_{2} & {c}_{3} \\ {b}_{1} & {b}_{2} & {b}_{3} \\ {a}_{1} & {a}_{2} & {a}_{3}\end{array}|=\text{−}d.$  {eq:fs-id1163724060994}

Verifying this fact is straightforward, but rather messy. Let’s take a look at this with an example:

$\begin{array}{rl}|\begin{array}{rlr}1 & 2 & 1 \\ −2 & 0 & 3 \\ 4 & 1 & −1\end{array}| & =|\begin{array}{lr}0 & 3 \\ 1 & −1\end{array}|-2|\begin{array}{rr}−2 & 3 \\ 4 & −1\end{array}|+|\begin{array}{rl}−2 & 0 \\ 4 & 1\end{array}| \\ & =(0-3)-2(2-12)+(−2-0)=−3+20-2=15.\end{array}$  {eq:fs-id1163724153226}

Switching the top two rows we have

$|\begin{array}{rlr}−2 & 0 & 3 \\ 1 & 2 & 1 \\ 4 & 1 & −1\end{array}|=−2|\begin{array}{lr}2 & 1 \\ 1 & −1\end{array}|+3|\begin{array}{ll}1 & 2 \\ 4 & 1\end{array}|=−2(−2-1)+3(1-8)=6-21=−15.$  {eq:fs-id1163723979963}

Rearranging vectors in the triple products is equivalent to reordering the rows in the matrix of the determinant. Let $\textbf{u}={u}_{1}\textbf{i}+{u}_{2}\textbf{j}+{u}_{3}\textbf{k},$ $\textbf{v}={v}_{1}\textbf{i}+{v}_{2}\textbf{j}+{v}_{3}\textbf{k},$ and $\textbf{w}={w}_{1}\textbf{i}+{w}_{2}\textbf{j}+{w}_{3}\textbf{k}.$ Applying [ref:fs-id1163723326854], we have

$\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w})=|\begin{array}{lll}{u}_{1} & {u}_{2} & {u}_{3} \\ {v}_{1} & {v}_{2} & {v}_{3} \\ {w}_{1} & {w}_{2} & {w}_{3}\end{array}|\;\text{and}\;\textbf{u}\cdot (\textbf{w}\;\times \;\textbf{v})=|\begin{array}{lll}{u}_{1} & {u}_{2} & {u}_{3} \\ {w}_{1} & {w}_{2} & {w}_{3} \\ {v}_{1} & {v}_{2} & {v}_{3}\end{array}|.$  {eq:fs-id1163724062243}

We can obtain the determinant for calculating $\textbf{u}\cdot (\textbf{w}\;\times \;\textbf{v})$ by switching the bottom two rows of $\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w}).$ Therefore, $\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w})=\text{−}\textbf{u}\cdot (\textbf{w}\;\times \;\textbf{v}).$
Following this reasoning and exploring the different ways we can interchange variables in the triple scalar product lead to the following identities:

$\begin{array}{rll}\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w}) & = & \text{−}\textbf{u}\cdot (\textbf{w}\;\times \;\textbf{v}) \\ \textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w}) & = & \textbf{v}\cdot (\textbf{w}\;\times \;\textbf{u})=\textbf{w}\cdot (\textbf{u}\;\times \;\textbf{v}).\end{array}$  {eq:fs-id1163724055686}

Let $\textbf{u}$ and $\textbf{v}$ be two vectors in standard position. If $\textbf{u}$ and $\textbf{v}$ are not scalar multiples of each other, then these vectors form adjacent sides of a parallelogram. We saw in [ref:fs-id1163723995104] that the area of this parallelogram is $\| \textbf{u}\;\times \;\textbf{v}\| .$ Now suppose we add a third vector $\textbf{w}$ that does not lie in the same plane as $\textbf{u}$ and $\textbf{v}$ but still shares the same initial point. Then these vectors form three edges of a {term:parallelepiped}, a three-dimensional prism with six faces that are each parallelograms, as shown in [ref:CNX_Calc_Figure_12_04_008]. The volume of this prism is the product of the figure’s height and the area of its base. The triple scalar product of $\textbf{u},\textbf{v},$ and $\textbf{w}$ provides a simple method for calculating the volume of the parallelepiped defined by these vectors.

:::note [theorem] Volume of a Parallelepiped
The volume of a parallelepiped with adjacent edges given by the vectors $\textbf{u},\textbf{v},\;\text{and}\;\textbf{w}$ is the absolute value of the triple scalar product:

$V=|\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w})|.$  {eq:fs-id1163724035053}

See [ref:CNX_Calc_Figure_12_04_008].
:::
Note that, as the name indicates, the triple scalar product produces a scalar. The volume formula just presented uses the absolute value of a scalar quantity.

> FIGURE {fig:CNX_Calc_Figure_12_04_008} src=../../media/CNX_Calc_Figure_12_04_008.jpg
> alt: This figure is a parallelepided, a three dimensional parallelogram. Three of the sides are represented with vectors. The base has vectors v and w. The vertical side has vector u. All three vectors have the same initial point. A perpendicular vector is drawn from this common point. It is labeled “proj sub (v x w) u.”
> caption: The height of the parallelepiped is given by $\| {\text{proj}}_{\text{v×w}}\textbf{u}\| .$

### Proof
The area of the base of the parallelepiped is given by $\| \textbf{v}\;\times \;\textbf{w}\| .$ The height of the figure is given by $\| {\text{proj}}_{\text{v×w}}\textbf{u}\| .$ The volume of the parallelepiped is the product of the height and the area of the base, so we have

$\begin{array}{rl}V & =\| {\text{proj}}_{\textbf{v}\;\times \;\textbf{w}}\textbf{u}\| \| \textbf{v}\;\times \;\textbf{w}\| \\ & =|\frac{\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w})}{\| \textbf{v}\;\times \;\textbf{w}\|}|\| \textbf{v}\;\times \;\textbf{w}\| \\ & =|\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w})|.\end{array}$  {eq:fs-id1163723290093}

□

:::example {ex:fs-id1163724066558} Calculating the Volume of a Parallelepiped

:::exercise {fs-id1163724066560} type= 
PROBLEM:
Let $\textbf{u}=\langle −1,−2,1\rangle ,\textbf{v}=\langle 4,3,2\rangle ,\;\text{and}\;\textbf{w}=\langle 0,−5,−2\rangle .$ Find the volume of the parallelepiped with adjacent edges $\textbf{u},\textbf{v},\;\text{and}\;\textbf{w}$ ([ref:CNX_Calc_Figure_12_04_015]).

> FIGURE {fig:CNX_Calc_Figure_12_04_015} src=../../media/CNX_Calc_Figure_12_04_015.jpg
> alt: This figure is the 3-dimensional coordinate system. It has three vectors in standard position. The vectors are u = <-1, -2, 1>; v = <4, 3, 2>; and w = <0, -5, -2>.
> caption: 

SOLUTION:
We have

$\begin{array}{rl}\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w}) & =|\begin{array}{rrr}−1 & −2 & 1 \\ 4 & 3 & 2 \\ 0 & −5 & −2\end{array}|=(−1)|\begin{array}{rr}3 & 2 \\ −5 & −2\end{array}|+2|\begin{array}{rr}4 & 2 \\ 0 & −2\end{array}|+|\begin{array}{rr}4 & 3 \\ 0 & −5\end{array}| \\ & =(−1)(−6+10)+2(−8-0)+(−20-0) \\ & =−4-16-20 \\ & =−40.\end{array}$  {eq:fs-id1163724159281}

Thus, the volume of the parallelepiped is $|−40|=40$ units<sup>3</sup>.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723286889} type= 
PROBLEM:
Find the volume of the parallelepiped formed by the vectors $\textbf{a}=3\textbf{i}+4\textbf{j}-\textbf{k},$ $\textbf{b}=2\textbf{i}-\textbf{j}-\textbf{k},$ and $\textbf{c}=3\textbf{j}+\textbf{k}.$
SOLUTION:
$8$ units<sup>3</sup>
COMMENTARY: Hint
Calculate the triple scalar product by finding a determinant.
:::
:::

## Applications of the Cross Product
The cross product appears in many practical applications in mathematics, physics, and engineering. Let’s examine some of these applications here, including the idea of torque, with which we began this section. Other applications show up in later chapters, particularly in our study of vector fields such as gravitational and electromagnetic fields ([Introduction to Vector Calculus](module:m54017)).

:::example {ex:fs-id1163724163707} Using the Triple Scalar Product

:::exercise {fs-id1163724163709} type= 
PROBLEM:
Use the triple scalar product to show that vectors $\textbf{u}=\langle 2,0,5\rangle ,\textbf{v}=\langle 2,2,4\rangle ,\;\text{and}\;\textbf{w}=\langle 1,−1,3\rangle$ are coplanar—that is, show that these vectors lie in the same plane.
SOLUTION:
Start by calculating the triple scalar product to find the volume of the parallelepiped defined by $\textbf{u},\textbf{v},\;\text{and}\;\textbf{w}\text{:}$

$\begin{array}{rl}\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w}) & =|\begin{array}{rrr}2 & 0 & 5 \\ 2 & 2 & 4 \\ 1 & −1 & 3\end{array}| \\ & =[2(2)(3)+(0)(4)(1)+5(2)(−1)]-[5(2)(1)+(2)(4)(−1)+(0)(2)(3)] \\ & =2-2 \\ & =0.\end{array}$  {eq:fs-id1163724182558}

The volume of the parallelepiped is $0$ units<sup>3</sup>, so one of the dimensions must be zero. Therefore, the three vectors all lie in the same plane.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163724130677} type= 
PROBLEM:
Are the vectors $\textbf{a}=\textbf{i}+\textbf{j}-\textbf{k},$ $\textbf{b}=\textbf{i}-\textbf{j}+\textbf{k},$ and $\textbf{c}=\textbf{i}+\textbf{j}+\textbf{k}$ coplanar?
SOLUTION:
No, the triple scalar product is $−4≠0,$ so the three vectors form the adjacent edges of a parallelepiped. They are not coplanar.
COMMENTARY: Hint
Calculate the triple scalar product.
:::
:::

:::example {ex:fs-id1163723475127} Finding an Orthogonal Vector

:::exercise {fs-id1163723475129} type= 
PROBLEM:
Only a single plane can pass through any set of three noncolinear points. Find a vector orthogonal to the plane containing points $P=(9,−3,−2),Q=(1,3,0),$ and $R=(−2,5,0).$
SOLUTION:
The plane must contain vectors $\vec{PQ}$ and $\vec{QR}\text{:}$

$\begin{array}{l}\vec{PQ}=\langle 1-9,3-(−3),0-(−2)\rangle =\langle −8,6,2\rangle \\ \vec{QR}=\langle −2-1,5-3,0-0\rangle =\langle −3,2,0\rangle .\end{array}$  {eq:fs-id1163723475262}

The cross product $\vec{PQ}\;\times \;\vec{QR}$ produces a vector orthogonal to both $\vec{PQ}$ and $\vec{QR}.$ Therefore, the cross product is orthogonal to the plane that contains these two vectors:

$\begin{array}{rl}\vec{PQ}\;\times \;\vec{QR} & =|\begin{array}{rrr}\textbf{i} & \textbf{j} & \textbf{k} \\ -8 & 6 & 2 \\ -3 & 2 & 0\end{array}| \\ & =0\textbf{i}-6\textbf{j}-16\textbf{k}-(−18\textbf{k}+4\textbf{i}+0\textbf{j}) \\ & =−4\textbf{i}-6\textbf{j}+2\textbf{k}.\end{array}$  {eq:fs-id1163724062760}

:::
:::
We have seen how to use the triple scalar product and how to find a vector orthogonal to a plane. Now we apply the cross product to real-world situations.
Sometimes a force causes an object to rotate. For example, turning a screwdriver or a wrench creates this kind of rotational effect, called torque.

:::note [definition] Definition
{term:Torque}, $τ$ (the Greek letter *tau*), measures the tendency of a force to produce rotation about an axis of rotation. Let $\textbf{r}$ be a vector with an initial point located on the axis of rotation and with a terminal point located at the point where the force is applied, and let vector $\textbf{F}$ represent the force. Then torque is equal to the cross product of $\textbf{r}$ and $\textbf{F}\text{:}$

$τ=\textbf{r}\;\times \;\textbf{F}.$  {eq:fs-id1163723149169}

See [ref:CNX_Calc_Figure_12_04_009].
:::

> FIGURE {fig:CNX_Calc_Figure_12_04_009} src=../../media/CNX_Calc_Figure_12_04_009.jpg
> alt: This figure has a vector r from an “axis of rotation”. At the terminal point of r there is a vector labeled “F”. The angle between r and F is theta.
> caption: Torque measures how a force causes an object to rotate.

Think about using a wrench to tighten a bolt. The torque $τ$ applied to the bolt depends on how hard we push the wrench (force) and how far up the handle we apply the force (distance). The torque increases with a greater force on the wrench at a greater distance from the bolt. Common units of torque are the newton-meter or foot-pound. Although torque is dimensionally equivalent to work (it has the same units), the two concepts are distinct. Torque is used specifically in the context of rotation, whereas work typically involves motion along a line.

:::example {ex:fs-id1163723149246} Evaluating Torque

:::exercise {fs-id1163723149248} type= 
PROBLEM:
A bolt is tightened by applying a force of $6$ N to a 0.15-m wrench ([ref:CNX_Calc_Figure_12_04_010]). The angle between the wrench and the force vector is $40\text{°}.$ Find the magnitude of the torque about the center of the bolt. Round the answer to two decimal places.

> FIGURE {fig:CNX_Calc_Figure_12_04_010} src=../../media/CNX_Calc_Figure_12_04_010.jpg
> alt: This figure is the image of an open-end wrench. The length of the wrench is labeled “0.15 m.” The angle the wrench makes with a vertical vector is 40 degrees. The vector is labeled with “6 N.”
> caption: Torque describes the twisting action of the wrench.

SOLUTION:
Substitute the given information into the equation defining torque:

$\| τ\| =\| \textbf{r}\;\times \;\textbf{F}\| =\| \textbf{r}\| \| \textbf{F}\| \text{sin}\;\theta =(0.15\;\text{m})(6\;\text{N})\text{sin}\;40\text{°}\approx 0.58\;\text{N}\cdot \text{m}.$  {eq:fs-id1163723149310}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1163723342520} type= 
PROBLEM:
Calculate the force required to produce $15\;\text{N}\cdot \text{m}$ torque at an angle of $30º$ from a 150-cm rod.
SOLUTION:
$20$ N
COMMENTARY: Hint
$\| \mathbf{τ}\| =15\text{N}\cdot \text{m}$ and $\| \textbf{r}\| =1.5\text{m}$
:::
:::

## Key Concepts {section:key-concepts}
- The cross product $\textbf{u}\;\times \;\textbf{v}$ of two vectors $\textbf{u}=\langle {u}_{1},{u}_{2},{u}_{3}\rangle$ and $\textbf{v}=\langle {v}_{1},{v}_{2},{v}_{3}\rangle$ is a vector orthogonal to both $\textbf{u}$ and $\textbf{v}.$ Its length is given by $\| \textbf{u}\;\times \;\textbf{v}\| =\| \textbf{u}\| \cdot \| \textbf{v}\| \cdot \text{sin}\;\theta ,$ where $\theta$ is the angle between $\textbf{u}$ and $\textbf{v}.$ Its direction is given by the right-hand rule.
- The algebraic formula for calculating the cross product of two vectors,
$\textbf{u}=\langle {u}_{1},{u}_{2},{u}_{3}\rangle \;\text{and}\;\textbf{v}=\langle {v}_{1},{v}_{2},{v}_{3}\rangle ,$ is
$\textbf{u}\;\times \;\textbf{v}=({u}_{2}{v}_{3}-{u}_{3}{v}_{2})\textbf{i}-({u}_{1}{v}_{3}-{u}_{3}{v}_{1})\textbf{j}+({u}_{1}{v}_{2}-{u}_{2}{v}_{1})\textbf{k}.$
- The cross product satisfies the following properties for vectors $\textbf{u},\textbf{v},\;\text{and}\;\textbf{w},$ and scalar $c\text{:}$

- $\textbf{u}\;\times \;\textbf{v}=\text{−}(\textbf{v}\;\times \;\textbf{u})$
- $\textbf{u}\;\times \;(\textbf{v}+\textbf{w})=\textbf{u}\;\times \;\textbf{v}+\textbf{u}\;\times \;\textbf{w}$
- $c(\textbf{u}\;\times \;\textbf{v})=(c\textbf{u})\;\times \;\textbf{v}=\textbf{u}\;\times \;(c\textbf{v})$
- $\textbf{u}\;\times \;\mathbf{0}=\mathbf{0}\;\times \;\textbf{u}=\mathbf{0}$
- $\textbf{v}\;\times \;\textbf{v}=0$
- $\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w})=(\textbf{u}\;\times \;\textbf{v})\cdot \textbf{w}$

- The cross product of vectors $\textbf{u}=\langle {u}_{1},{u}_{2},{u}_{3}\rangle$ and $\textbf{v}=\langle {v}_{1},{v}_{2},{v}_{3}\rangle$ is the determinant $|\begin{array}{lll}\textbf{i} & \textbf{j} & \textbf{k} \\ {u}_{1} & {u}_{2} & {u}_{3} \\ {v}_{1} & {v}_{2} & {v}_{3}\end{array}|.$
- If vectors $\textbf{u}$ and $\textbf{v}$ form adjacent sides of a parallelogram, then the area of the parallelogram is given by $\| \textbf{u}\;\times \;\textbf{v}\| .$
- The triple scalar product of vectors $\textbf{u},$ $\textbf{v},$ and $\textbf{w}$ is $\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w}).$
- The volume of a parallelepiped with adjacent edges given by vectors $\textbf{u},\textbf{v},\;\text{and}\;\textbf{w}$ is $V=|\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w})|.$
- If the triple scalar product of vectors $\textbf{u},\textbf{v},\;\text{and}\;\textbf{w}$ is zero, then the vectors are coplanar. The converse is also true: If the vectors are coplanar, then their triple scalar product is zero.
- The cross product can be used to identify a vector orthogonal to two given vectors or to a plane.
- Torque $τ$ measures the tendency of a force to produce rotation about an axis of rotation. If force $\textbf{F}$ is acting at a distance $\textbf{r}$ from the axis, then torque is equal to the cross product of $\textbf{r}$ and $\textbf{F}\text{:}$ $τ=\textbf{r}\;\times \;\textbf{F}.$

## Key Equations {section:key-equations}

> TABLE {tab:eip-534} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **The cross product of two vectors in terms of the unit vectors** | $\textbf{u}\;\times \;\textbf{v}=({u}_{2}{v}_{3}-{u}_{3}{v}_{2})\textbf{i}-({u}_{1}{v}_{3}-{u}_{3}{v}_{1})\textbf{j}+({u}_{1}{v}_{2}-{u}_{2}{v}_{1})\textbf{k}$ |

##  {section:section-exercises}
For the following exercises, the vectors $\textbf{u}$ and $\textbf{v}$ are given.
a. Find the cross product $\textbf{u}\;\times \;\textbf{v}$ of the vectors $\textbf{u}$ and $\textbf{v}.$ Express the answer in component form.
b. Sketch the vectors $\textbf{u},\textbf{v},$ and $\textbf{u}\;\times \;\textbf{v}.$

:::exercise {fs-id1163723360056} type= 
PROBLEM:
$\textbf{u}=\langle 2,0,0\rangle ,$ $\textbf{v}=\langle 2,2,0\rangle$
SOLUTION:
a. $\textbf{u}\;\times \;\textbf{v}=\langle 0,0,4\rangle ;$
b.

> IMAGE {img:fs-id1163723347448} src=../../media/CNX_Calc_Figure_12_04_206.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system. On the x-axis there is a vector labeled “u.” In the x y-plane there is a vector labeled “v.” On the z-axis there is the vector labeled “u cross v.”

:::

:::exercise {fs-id1163723347460} type= 
PROBLEM:
$\textbf{u}=\langle 3,2,−1\rangle ,$ $\textbf{v}=\langle 1,1,0\rangle$
:::

:::exercise {fs-id1163723348509} type= 
PROBLEM:
$\textbf{u}=2\textbf{i}+3\textbf{j},$ $\textbf{v}=\textbf{j}+2\textbf{k}$
SOLUTION:
a. $\textbf{u}\;\times \;\textbf{v}=\langle 6,−4,2\rangle ;$
b.

> IMAGE {img:fs-id1163723348642} src=../../media/CNX_Calc_Figure_12_04_208.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system and shows three vectors. The first vector is labeled u and has components <2, 3, 0>. The second vector is labeled v and has components <0, 1, 2>.” The third vector is labeled u cross v and has components <6, -4, 2>.”

:::

:::exercise {fs-id1163723348653} type= 
PROBLEM:
$\textbf{u}=2\textbf{j}+3\textbf{k},$ $\textbf{v}=3\textbf{i}+\textbf{k}$
:::

:::exercise {fs-id1163723477690} type= 
PROBLEM:
Simplify $(\textbf{i}\;\times \;\textbf{i}-2\textbf{i}\;\times \;\textbf{j}-4\textbf{i}\;\times \;\textbf{k}+3\textbf{j}\;\times \;\textbf{k})\;\times \;\textbf{i}.$
SOLUTION:
$−2\textbf{j}-4\textbf{k}$
:::

:::exercise {fs-id1163723477857} type= 
PROBLEM:
Simplify $\textbf{j}\;\times \;(\textbf{k}\;\times \;\textbf{j}+2\textbf{j}\;\times \;\textbf{i}-3\textbf{j}\;\times \;\textbf{j}+5\textbf{i}\;\times \;\textbf{k}).$
:::
In the following exercises, vectors $\textbf{u}$ and $\textbf{v}$ are given. Find unit vector $\textbf{w}$ in the direction of the cross product vector $\textbf{u}\;\times \;\textbf{v}.$ Express your answer using standard unit vectors.

:::exercise {fs-id1163723473848} type= 
PROBLEM:
$\textbf{u}=\langle 3,−1,2\rangle ,$ $\textbf{v}=\langle −2,0,1\rangle$
SOLUTION:
$\textbf{w}=-\frac{1}{3\sqrt{6}}\textbf{i}-\frac{7}{3\sqrt{6}}\textbf{j}-\frac{2}{3\sqrt{6}}\textbf{k}$
:::

:::exercise {fs-id1163724155299} type= 
PROBLEM:
$\textbf{u}=\langle 2,6,1\rangle ,$ $\textbf{v}=\langle 3,0,1\rangle$
:::

:::exercise {fs-id1163724155426} type= 
PROBLEM:
$\textbf{u}=\vec{AB},$ $\textbf{v}=\vec{AC},$ where $A(1,0,1),$ $B(1,−1,3),$ and $C(0,0,5)$
SOLUTION:
$\textbf{w}=-\frac{4}{\sqrt{21}}\textbf{i}-\frac{2}{\sqrt{21}}\textbf{j}-\frac{1}{\sqrt{21}}\textbf{k}$
:::

:::exercise {fs-id1163723108561} type= 
PROBLEM:
$\textbf{u}=\vec{OP},$ $\textbf{v}=\vec{PQ},$ where $P(−1,1,0)$ and $Q(0,2,1)$
:::

:::exercise {fs-id1163724161871} type= 
PROBLEM:
Determine the real number $\alpha$ such that $\textbf{u}\;\times \;\textbf{v}$ and $\textbf{i}$ are orthogonal, where $\textbf{u}=3\textbf{i}+\textbf{j}-5\textbf{k}$ and $\textbf{v}=4\textbf{i}-2\textbf{j}+\alpha \textbf{k}.$
SOLUTION:
$\alpha =10$
:::

:::exercise {fs-id1163724162022} type= 
PROBLEM:
Show that $\textbf{u}\;\times \;\textbf{v}$ and $2\textbf{i}-14\textbf{j}+2\textbf{k}$ cannot be orthogonal for any $\alpha$ real number, where $\textbf{u}=\textbf{i}+7\textbf{j}-\textbf{k}$ and $\textbf{v}=\alpha \textbf{i}+5\textbf{j}+\textbf{k}.$
:::

:::exercise {fs-id1163723331453} type= 
PROBLEM:
Show that $\textbf{u}\;\times \;\textbf{v}$ is orthogonal to $\textbf{u}+\textbf{v}$ and $\textbf{u}-\textbf{v},$ where $\textbf{u}$ and $\textbf{v}$ are nonzero vectors.
:::

:::exercise {fs-id1163723331548} type= 
PROBLEM:
Show that $\textbf{v}\;\times \;\textbf{u}$ is orthogonal to $(\textbf{u}\cdot \textbf{v})(\textbf{u}+\textbf{v})+\text{u},$ where $\textbf{u}$ and $\textbf{v}$ are nonzero vectors.
:::

:::exercise {fs-id1163723246484} type= 
PROBLEM:
Calculate the determinant $|\begin{array}{lrr}\textbf{i} & \textbf{j} & \textbf{k} \\ 1 & −1 & 7 \\ 2 & 0 & 3\end{array}|.$
SOLUTION:
$−3\textbf{i}+11\textbf{j}+2\textbf{k}$
:::

:::exercise {fs-id1163723246593} type= 
PROBLEM:
Calculate the determinant $|\begin{array}{lrr}\textbf{i} & \textbf{j} & \textbf{k} \\ 0 & 3 & −4 \\ 1 & 6 & −1\end{array}|.$
:::
For the following exercises, the vectors $\textbf{u}$ and $\textbf{v}$ are given. Use determinant notation to find vector $\textbf{w}$ orthogonal to vectors $\textbf{u}$ and $\textbf{v}.$

:::exercise {fs-id1163723317190} type= 
PROBLEM:
$\textbf{u}=\langle −1,0,{e}^{t}\rangle ,$ $\textbf{v}=\langle 1,{e}^{\text{−}t},0\rangle ,$ where $t$ is a real number
SOLUTION:
$\textbf{w}=\langle −1,{e}^{t},\text{−}{e}^{\text{−}t}\rangle$
:::

:::exercise {fs-id1163723317317} type= 
PROBLEM:
$\textbf{u}=\langle 1,0,x\rangle ,$ $\textbf{v}=\langle \frac{2}{x},1,0\rangle ,$ where $x$ is a nonzero real number
:::

:::exercise {fs-id1163723315218} type= 
PROBLEM:
Find vector $(\textbf{a}-2\text{b})\;\times \;\text{c},$ where $\textbf{a}=|\begin{array}{lrr}\textbf{i} & \textbf{j} & \textbf{k} \\ 2 & −1 & 5 \\ 0 & 1 & 8\end{array}|,$ $\text{b}=|\begin{array}{lrr}\text{i} & \text{j} & \text{k} \\ 0 & 1 & 1 \\ 2 & −1 & −2\end{array}|,$ and $\text{c}=\textbf{i}+\textbf{j}+\text{k}.$
SOLUTION:
$−26\textbf{i}+17\textbf{j}+9\textbf{k}$
:::

:::exercise {fs-id1163723127285} type= 
PROBLEM:
Find vector $\text{c}\;\times \;(\textbf{a}+3\text{b}),$ where $\textbf{a}=|\begin{array}{lll}\textbf{i} & \textbf{j} & \textbf{k} \\ 5 & 0 & 9 \\ 0 & 1 & 0\end{array}|,$ $\text{b}=|\begin{array}{lrr}\textbf{i} & \textbf{j} & \textbf{k} \\ 0 & −1 & 1 \\ 7 & 1 & −1\end{array}|,$ and $\text{c}=\textbf{i}-\textbf{k}.$
:::

:::exercise {fs-id1163724077712} type= 
PROBLEM:
**[T]** Use the cross product $\textbf{u}\;\times \;\textbf{v}$ to find the acute angle between vectors $\textbf{u}$ and $\textbf{v},$ where $\textbf{u}=\textbf{i}+2\textbf{j}$ and $\textbf{v}=\textbf{i}+\textbf{k}.$ Express the answer in degrees rounded to the nearest integer.
SOLUTION:
$72\text{°}$
:::

:::exercise {fs-id1163724077850} type= 
PROBLEM:
**[T]** Use the cross product $\textbf{u}\;\times \;\textbf{v}$ to find the obtuse angle between vectors $\textbf{u}$ and $\textbf{v},$ where $\textbf{u}=\text{−}\textbf{i}+3\textbf{j}+\textbf{k}$ and $\textbf{v}=\textbf{i}-2\textbf{j}.$ Express the answer in degrees rounded to the nearest integer.
:::

:::exercise {fs-id1163723332340} type= 
PROBLEM:
Use the sine and cosine of the angle between two nonzero vectors $\textbf{u}$ and $\textbf{v}$ to prove Lagrange’s identity: ${\| \textbf{u}\;\times \;\textbf{v}\|}^{2}={\| \textbf{u}\|}^{2}{\| \textbf{v}\|}^{2}-{(\textbf{u}\cdot \textbf{v})}^{2}.$
:::

:::exercise {fs-id1163723332471} type= 
PROBLEM:
Verify Lagrange’s identity ${\| \textbf{u}\;\times \;\textbf{v}\|}^{2}={\| \textbf{u}\|}^{2}{\| \textbf{v}\|}^{2}-{(\textbf{u}\cdot \textbf{v})}^{2}$ for vectors $\textbf{u}=\text{−}\textbf{i}+\textbf{j}-2\textbf{k}$ and $\textbf{v}=2\textbf{i}-\textbf{j}.$
:::

:::exercise {fs-id1163723228411} type= 
PROBLEM:
Nonzero vectors $\textbf{u}$ and $\textbf{v}$ are called *collinear* if there exists a nonzero scalar $\alpha$ such that $\textbf{v}=\alpha \textbf{u}.$ Show that $\textbf{u}$ and $\textbf{v}$ are collinear if and only if $\textbf{u}\;\times \;\textbf{v}=\mathbf{0}.$
:::

:::exercise {fs-id1163723479284} type= 
PROBLEM:
Nonzero vectors $\textbf{u}$ and $\textbf{v}$ are called *collinear* if there exists a nonzero scalar $\alpha$ such that $\textbf{v}=\alpha \textbf{u}.$ Show that vectors $\vec{AB}$ and $\vec{AC}$ are collinear, where $A(4,1,0),$ $B(6,5,−2),$ and $C(5,3,−1).$
:::

:::exercise {fs-id1163723479450} type= 
PROBLEM:
Find the area of the parallelogram with adjacent sides $\textbf{u}=\langle 3,2,0\rangle$ and $\textbf{v}=\langle 0,2,1\rangle .$
SOLUTION:
$7$
:::

:::exercise {fs-id1163723479528} type= 
PROBLEM:
Find the area of the parallelogram with adjacent sides $\textbf{u}=\textbf{i}+\textbf{j}$ and $\textbf{v}=\textbf{i}+\textbf{k}.$
:::

:::exercise {fs-id1163723307470} type= 
PROBLEM:
Consider points $A(3,−1,2),B(2,1,5),$ and $C(1,−2,−2).$
a. Find the area of parallelogram $ABCD$ with adjacent sides $\vec{AB}$ and $\vec{AC}.$
b. Find the area of triangle $ABC.$
c. Find the distance from point $A$ to line $BC.$
SOLUTION:
a. $5\sqrt{6};$ b. $\frac{5\sqrt{6}}{2};$ c. $\frac{5\sqrt{6}}{\sqrt{59}}$
:::

:::exercise {fs-id1163724150234} type= 
PROBLEM:
Consider points $A(2,−3,4),B(0,1,2),$ and $C(−1,2,0).$
a. Find the area of parallelogram $ABCD$ with adjacent sides $\vec{AB}$ and $\vec{AC}.$
b. Find the area of triangle $ABC.$
c. Find the distance from point $B$ to line $AC.$
:::
In the following exercises, vectors $\textbf{u},\textbf{v},\text{and}\;\textbf{w}$ are given.
a. Find the triple scalar product $\textbf{u}\cdot (\textbf{v}\;\times \;\text{w}).$
b. Find the volume of the parallelepiped with the adjacent edges $\textbf{u},\textbf{v},\text{and}\;\textbf{w}.$

:::exercise {fs-id1163724154423} type= 
PROBLEM:
$\textbf{u}=\textbf{i}+\textbf{j},$ $\textbf{v}=\textbf{j}+\textbf{k},$ and $\textbf{w}=\textbf{i}+\textbf{k}$
SOLUTION:
a. $2;$ b. $2$
:::

:::exercise {fs-id1163724154532} type= 
PROBLEM:
$\textbf{u}=\langle −3,5,−1\rangle ,$ $\textbf{v}=\langle 0,2,−2\rangle ,$ and $\textbf{w}=\langle 3,1,1\rangle$
:::

:::exercise {fs-id1163724096619} type= 
PROBLEM:
Calculate the triple scalar products $\textbf{v}\cdot (\textbf{u}\;\times \;\text{w})$ and $\textbf{w}\cdot (\textbf{u}\;\times \;\textbf{v}),$ where $\textbf{u}=\langle 1,1,1\rangle ,$ $\textbf{v}=\langle 7,6,9\rangle ,$ and $\textbf{w}=\langle 4,2,7\rangle .$
SOLUTION:
$\textbf{v}\cdot (\textbf{u}\;\times \;\text{w})=−1,$ $\textbf{w}\cdot (\textbf{u}\;\times \;\textbf{v})=1$
:::

:::exercise {fs-id1163723296700} type= 
PROBLEM:
Calculate the triple scalar products $\textbf{w}\cdot (\textbf{v}\;\times \;\textbf{u})$ and $\textbf{u}\cdot (\text{w}\;\times \;\textbf{v}),$ where $\textbf{u}=\langle 4,2,−1\rangle ,$ $\textbf{v}=\langle 2,5,−3\rangle ,$ and $\textbf{w}=\langle 9,5,−10\rangle .$
:::

:::exercise {fs-id1163724066849} type= 
PROBLEM:
Find vectors $\textbf{a},\textbf{b},\;\text{and}\;\textbf{c}$ with a triple scalar product given by the determinant
$|\begin{array}{lll}1 & 2 & 3 \\ 0 & 2 & 5 \\ 8 & 9 & 2\end{array}|.$ Determine their triple scalar product.
SOLUTION:
$\textbf{a}=\langle 1,2,3\rangle ,$ $\text{b}=\langle 0,2,5\rangle ,$ $\text{c}=\langle 8,9,2\rangle ;$ $\textbf{a}\cdot (\text{b}\;\times \;\text{c})=−9$
:::

:::exercise {fs-id1163724075698} type= 
PROBLEM:
The triple scalar product of vectors $\textbf{a},\textbf{b},\;\text{and}\;\textbf{c}$ is given by the determinant
$|\begin{array}{rrr}0 & −2 & 1 \\ 0 & 1 & 4 \\ 1 & −3 & 7\end{array}|.$ Find vector $\textbf{a}-\text{b}+\text{c}.$
:::

:::exercise {fs-id1163724075847} type= 
PROBLEM:
Consider the parallelepiped with edges $OA,OB,$ and $OC,$ where $A(2,1,0),B(1,2,0),$ and $C(0,1,\alpha ).$
a. Find the real number $\alpha >0$ such that the volume of the parallelepiped is $3$ units<sup>3</sup>.
b. For $\alpha =1,$ find the height $h$ from vertex $C$ of the parallelepiped to the plane formed by the edges $OA$ and $OB$.
SOLUTION:
a. $\alpha =1;$ b. $h=1,$

> IMAGE {img:fs-id1163723323433} src=../../media/CNX_Calc_Figure_12_04_210.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system. There is a parallelepided drawn. From the origin there are three vectors to vertices on the parallelepiped. They are vectors to the points A (2, 1, 0); B (1, 2, 0); and C (0, 1, alpha).

:::

:::exercise {fs-id1163723323448} type= 
PROBLEM:
Consider points $A(\alpha ,0,0),B(0,β,0),$ and $C(0,0,γ),$ with $\alpha ,$ $β,$ and $γ$ positive real numbers.
a. Determine the volume of the parallelepiped with adjacent sides $\vec{OA},$ $\vec{OB},$ and $\vec{OC}.$
b. Find the volume of the tetrahedron with vertices $O,A,B,\;\text{and}\;C.$ (*Hint*: The volume of the tetrahedron is $1\text{/}6$ of the volume of the parallelepiped.)
c. Find the distance from the origin to the plane determined by $A,B,\;\text{and}\;C.$ Sketch the parallelepiped and tetrahedron.
:::

:::exercise {fs-id1163724115401} type= 
PROBLEM:
Let $\textbf{u},\textbf{v},\;\text{and}\;\textbf{w}$ be three-dimensional vectors and $c$ be a real number. Prove the following properties of the cross product.
a. $\textbf{u}\;\times \;\textbf{u}=\mathbf{0}$
b. $\textbf{u}\;\times \;(\textbf{v}+\textbf{w})=(\textbf{u}\;\times \;\textbf{v})+(\textbf{u}\;\times \;\textbf{w})$
c. $c(\textbf{u}\;\times \;\textbf{v})=(c\textbf{u})\;\times \;\textbf{v}=\textbf{u}\;\times \;(c\textbf{v})$
d. $\textbf{u}\cdot \mathbf{(}\textbf{u}\;\times \;\textbf{v}\mathbf{)=0}$
:::

:::exercise {fs-id1163723147308} type= 
PROBLEM:
Show that vectors $\textbf{u}=\langle 1,0,−8\rangle ,$ $\textbf{v}=\langle 0,1,6\rangle ,$ and $\textbf{w}=\langle −1,9,3\rangle$ satisfy the following properties of the cross product.
a. $\textbf{u}\;\times \;\textbf{u}=\mathbf{0}$
b. $\textbf{u}\;\times \;(\textbf{v}+\textbf{w})=(\textbf{u}\;\times \;\textbf{v})+(\textbf{u}\;\times \;\textbf{w})$
c. $c(\textbf{u}\;\times \;\textbf{v})=(c\textbf{u})\;\times \;\textbf{v}=\textbf{u}\;\times \;(c\textbf{v})$
d. $\textbf{u}\cdot \mathbf{(}\textbf{u}\;\times \;\textbf{v}\mathbf{)=0}$
:::

:::exercise {fs-id1163723344490} type= 
PROBLEM:
Nonzero vectors $\textbf{u},\textbf{v},\;\text{and}\;\textbf{w}$ are said to be *linearly dependent* if one of the vectors is a linear combination of the other two. For instance, there exist two nonzero real numbers $\alpha$ and $β$ such that $\textbf{w}=\alpha \textbf{u}+β\textbf{v}.$ Otherwise, the vectors are called *linearly independent*. Show that $\textbf{u},\textbf{v},\;\text{and}\;\textbf{w}$ are coplanar if and only if they are linear dependent.
:::

:::exercise {fs-id1163723197479} type= 
PROBLEM:
Consider vectors $\textbf{u}=\langle 1,4,−7\rangle ,$ $\textbf{v}=\langle 2,−1,4\rangle ,$ $\textbf{w}=\langle 0,−9,18\rangle ,$ and $\text{p}=\langle 0,−9,17\rangle .$
a. Show that $\textbf{u},\textbf{v},\;\text{and}\;\textbf{w}$ are coplanar by using their triple scalar product
b. Show that $\textbf{u},\textbf{v},\;\text{and}\;\textbf{w}$ are coplanar, using the definition that there exist two nonzero real numbers $\alpha$ and $β$ such that $\textbf{w}=\alpha \textbf{u}+β\textbf{v}.$
c. Show that $\textbf{u},\textbf{v},\;\text{and}\;\textbf{p}$ are linearly independent—that is, none of the vectors is a linear combination of the other two.
:::

:::exercise {fs-id1163723323772} type= 
PROBLEM:
Consider points $A(0,0,2),$ $B(1,0,2),$ $C(1,1,2),$ and $D(0,1,2).$ Are vectors $\vec{AB},$ $\vec{AC},$ and $\vec{AD}$ linearly dependent (that is, one of the vectors is a linear combination of the other two)?
SOLUTION:
Yes, $\vec{AD}=\alpha \vec{AB}+β\vec{AC},$ where $\alpha =−1$ and $β=1.$
:::

:::exercise {fs-id1163724043045} type= 
PROBLEM:
Show that vectors $\textbf{i}+\textbf{j},$ $\textbf{i}-\textbf{j},$ and $\textbf{i}+\textbf{j}+\textbf{k}$ are linearly independent—that is, there do not exist two nonzero real numbers $\alpha$ and $β$ such that $\textbf{i}+\textbf{j}+\textbf{k}=\alpha (\textbf{i}+\textbf{j})+β(\textbf{i}-\textbf{j}).$
:::

:::exercise {fs-id1163724043208} type= 
PROBLEM:
Let $\textbf{u}=\langle {u}_{1},{u}_{2}\rangle$ and $\textbf{v}=\langle {v}_{1},{v}_{2}\rangle$ be two-dimensional vectors. The cross product of vectors $\textbf{u}$ and $\textbf{v}$ is not defined. However, if the vectors are regarded as the three-dimensional vectors $\tilde{\textbf{u}}=\langle {u}_{1},{u}_{2},0\rangle$ and $\tilde{\textbf{v}}=\langle {v}_{1},{v}_{2},0\rangle ,$ respectively, then, in this case, we can define the cross product of $\tilde{\textbf{u}}$ and $\tilde{\textbf{v}}.$ In particular, in determinant notation, the cross product of $\tilde{\textbf{u}}$ and $\tilde{\textbf{v}}$ is given by

$\tilde{\textbf{u}}\;\times \;\tilde{\textbf{v}}=|\begin{array}{lll}\textbf{i} & \textbf{j} & \textbf{k} \\ {u}_{1} & {u}_{2} & 0 \\ {v}_{1} & {v}_{2} & 0\end{array}|.$  {eq:fs-id1163724181491}

Use this result to compute $(\textbf{i}\text{cos}\;\theta +\textbf{j}\text{sin}\;\theta )\;\times \;(\textbf{i}sin\theta -\textbf{j}cos\theta ),$ where $\theta$ is a real number.
SOLUTION:
$\text{−}\textbf{k}$
:::

:::exercise {fs-id1163723931470} type= 
PROBLEM:
Consider points $P(2,1),$ $Q(4,2),$ and $R(1,2).$
a. Find the area of triangle $P,Q,\;\text{and}\;R.$
b. Determine the distance from point $R$ to the line passing through $P\;\text{and}\;Q.$
:::

:::exercise {fs-id1163724084114} type= 
PROBLEM:
Determine a vector of magnitude $10$ perpendicular to the plane passing through the *x*-axis and point $P(1,2,4).$
SOLUTION:
$\langle 0,\text{±}4\sqrt{5},∓2\sqrt{5}\rangle$
:::

:::exercise {fs-id1163724084193} type= 
PROBLEM:
Determine a unit vector perpendicular to the plane passing through the *z*-axis and point $A(3,1,−2).$
:::

:::exercise {fs-id1163724084276} type= 
PROBLEM:
Consider $\textbf{u}$ and $\textbf{v}$ two three-dimensional vectors. If the magnitude of the cross product vector $\textbf{u}\;\times \;\textbf{v}$ is $k$ times larger than the magnitude of vector $\textbf{u},$ show that the magnitude of $\textbf{v}$ is greater than or equal to $k,$ where $k$ is a natural number.
:::

:::exercise {fs-id1163723343527} type= 
PROBLEM:
**[T]** Assume that the magnitudes of two nonzero vectors $\textbf{u}$ and $\textbf{v}$ are known. The function $f(\theta )=\| \textbf{u}\| \| \textbf{v}\| \text{sin}\;\theta$ defines the magnitude of the cross product vector $\textbf{u}\;\times \;\text{v},$ where $\theta \in [0,\pi ]$ is the angle between $\textbf{u}\;\text{and}\;\textbf{v}.$
a. Graph the function $f.$
b. Find the absolute minimum and maximum of function $f.$ Interpret the results.
c. If $\| \textbf{u}\| =5$ and $\| \textbf{v}\| =2,$ find the angle between $\textbf{u}\;\text{and}\;\textbf{v}$ if the magnitude of their cross product vector is equal to $9.$
:::

:::exercise {fs-id1163724065789} type= 
PROBLEM:
Find all vectors $\textbf{w}=\langle {w}_{1},{w}_{2},{w}_{3}\rangle$ that satisfy the equation $\langle 1,1,1\rangle \;\times \;\textbf{w}=\langle −1,−1,2\rangle .$
SOLUTION:
$\textbf{w}=\langle {w}_{3}-1,{w}_{3}+1,{w}_{3}\rangle ,$ where ${w}_{3}$ is any real number
:::

:::exercise {fs-id1163724067941} type= 
PROBLEM:
Solve the equation $\textbf{w}\;\times \;\langle 1,0,−1\rangle =\langle 3,0,3\rangle ,$ where $\textbf{w}=\langle {w}_{1},{w}_{2},{w}_{3}\rangle$ is a nonzero vector with a magnitude of $3.$
:::

:::exercise {fs-id1163724068087} type= 
PROBLEM:
**[T]** A mechanic uses a 12-in. wrench to turn a bolt. The wrench makes a $30\text{°}$ angle with the horizontal. If the mechanic applies a vertical force of $10$ lb on the wrench handle, what is the magnitude of the torque at point $P$ (see the following figure)? Express the answer in foot-pounds rounded to two decimal places.

> IMAGE {img:fs-id1163724068127} src=../../media/CNX_Calc_Figure_12_04_203.jpg
> alt: This figure is the image of an open-end wrench. The lower portion of the wrench is at point P. The wrench has a length of “12 I n.” The angle the wrench makes with a horizontal line from P is 30 degrees. At the top of the wrench is a downward vertical vector labeled “10 l b.”

SOLUTION:
8.66 ft-lb
:::

:::exercise {fs-id1163723085711} type= 
PROBLEM:
**[T]** A boy applies the brakes on a bicycle by applying a downward force of $20$ lb on the pedal when the 6-in. crank makes a $40\text{°}$ angle with the horizontal (see the following figure). Find the torque at point $P.$ Express your answer in foot-pounds rounded to two decimal places.

> IMAGE {img:fs-id1163723085755} src=../../media/CNX_Calc_Figure_12_04_202.jpg
> alt: This figure shows the pedals, cranks, and chain of a bicycle. The distance along the crank to the top pedal is 6 in. The angle of the crank is 40 degrees with the horizontal, measured toward the rear. The top pedal has a downward vector labeled “20 lb”.

:::

:::exercise {fs-id1163723085773} type= 
PROBLEM:
**[T]** Find the magnitude of the force that needs to be applied to the end of a 20-cm wrench located on the positive direction of the *y*-axis if the force is applied in the direction $\langle 0,1,−2\rangle$ and it produces a $100$ N·m torque to the bolt located at the origin.
SOLUTION:
559 N
:::

:::exercise {fs-id1163723085835} type= 
PROBLEM:
**[T]** What is the magnitude of the force required to be applied to the end of a 1-ft wrench at an angle of $35\text{°}$ to produce a torque of $20$ ft-lbs?
:::

:::exercise {fs-id1163723085877} type= 
PROBLEM:
**[T]** The force vector $\textbf{F}$ acting on a proton with an electric charge of $1.6\;\times \;{10}^{−19}\text{C}$ (in coulombs) moving in a magnetic field $\textbf{B}$ where the velocity vector $\textbf{v}$ is given by $\textbf{F}=1.6\;\times \;{10}^{−19}(\textbf{v}\;\times \;\text{B})$ (here, $\textbf{v}$ is expressed in meters per second, $\textbf{B}$ is in tesla [T], and $\textbf{F}$ is in newtons [N]). Find the force that acts on a proton that moves in the *xy*-plane at velocity $\textbf{v}={10}^{5}\textbf{i}+{10}^{5}\textbf{j}$ (in meters per second) in a magnetic field given by $\text{B}=0.3\textbf{j}.$
SOLUTION:
$\textbf{F}=4.8\;\times \;{10}^{−15}\textbf{k}\;\text{N}$
:::

:::exercise {fs-id1163724036266} type= 
PROBLEM:
**[T]** The force vector $\textbf{F}$ acting on a proton with an electric charge of $1.6\;\times \;{10}^{−19}\text{C}$ moving in a magnetic field $\textbf{B}$ where the velocity vector **v** is given by $\textbf{F}=1.6\;\times \;{10}^{−19}(\textbf{v}\;\times \;\text{B})$ (here, $\textbf{v}$ is expressed in meters per second, $\textbf{B}$ in $\text{T},$ and $\textbf{F}$ in $\text{N}).$ If the magnitude of force $\textbf{F}$ acting on a proton is $5.9\;\times \;{10}^{−17}$ N and the proton is moving at the speed of 300 m/sec in magnetic field $\textbf{B}$ of magnitude 2.4 T, find the angle between velocity vector $\textbf{v}$ of the proton and magnetic field $\textbf{B}.$ Express the answer in degrees rounded to the nearest integer.
:::

:::exercise {fs-id1163723072215} type= 
PROBLEM:
**[T]** Consider $\text{r}(t)=\langle \text{cos}\;t,\text{sin}\;t,2t\rangle$ the position vector of a particle at time $t\in [0,30],$ where the components of $\textbf{r}$ are expressed in centimeters and time in seconds. Let $\vec{OP}$ be the position vector of the particle after $1$ sec.
a. Determine unit vector $\text{B}(t)$ (called the *binormal unit vector*) that has the direction of cross product vector $\textbf{v}(t)\;\times \;\text{a}(t),$ where $\textbf{v}(t)$ and $\textbf{a}(t)$ are the instantaneous velocity vector and, respectively, the acceleration vector of the particle after $t$ seconds.
b. Use a CAS to visualize vectors $\textbf{v}(1),$ $\textbf{a}(1),$ and $\text{B}(1)$ as vectors starting at point $P$ along with the path of the particle.
SOLUTION:
a. $\text{B}(t)=\langle \frac{2\;\text{sin}\;t}{\sqrt{5}},-\frac{2\;\text{cos}\;t}{\sqrt{5}},\frac{1}{\sqrt{5}}\rangle ;$
b.

> IMAGE {img:fs-id1163723307321} src=../../media/CNX_Calc_Figure_12_04_213.jpg
> alt: This figure is the first octant of the 3-dimensional coordinate system. There is a curve sketched that is increasing. On the curve is a point labeled “P.” At P there is a tangent vector to the curve labeled “v(1).” Also from P there is a vector towards the inside of the curve labeled “a(1).” Finally, there is a vector from P labeled “B(1)” pointing towards the z-axis.

:::

:::exercise {fs-id1163723307334} type= 
PROBLEM:
A solar panel is mounted on the roof of a house. The panel may be regarded as positioned at the points of coordinates (in meters) $A(8,0,0),$ $B(8,18,0),$ $C(0,18,8),$ and $D(0,0,8)$ (see the following figure).

> IMAGE {img:fs-id1163723340262} src=../../media/CNX_Calc_Figure_12_04_214.jpg
> alt: This figure shows a rectangular set of solar panels on a roof. The corners are labeled “A, B, C, D.” Also there is a vector drawn from A to D. There is another vector along the bottom of the rectangle from A to B.

a. Find vector $\text{n}=\vec{AB}\;\times \;\vec{AD}$ perpendicular to the surface of the solar panels. Express the answer using standard unit vectors.
b. Assume unit vector $\text{s}=\frac{1}{\sqrt{3}}\textbf{i}+\frac{1}{\sqrt{3}}\textbf{j}+\frac{1}{\sqrt{3}}\textbf{k}$ points toward the Sun at a particular time of the day and the flow of solar energy is $\textbf{F}=900\text{s}$ (in watts per square meter [${\text{W/m}}^{2}$]). Find the predicted amount of electrical power the panel can produce, which is given by the dot product of vectors $\textbf{F}$ and $\textbf{n}$ (expressed in watts).
c. Determine the angle of elevation of the Sun above the solar panel. Express the answer in degrees rounded to the nearest whole number. (*Hint*: The angle between vectors $\textbf{n}$ and $\textbf{s}$ and the angle of elevation are complementary.)
:::

## Glossary
- {def} **cross product**: $\textbf{u}\;\times \;\textbf{v}=({u}_{2}{v}_{3}-{u}_{3}{v}_{2})\textbf{i}-({u}_{1}{v}_{3}-{u}_{3}{v}_{1})\textbf{j}+({u}_{1}{v}_{2}-{u}_{2}{v}_{1})\textbf{k},$ where $\textbf{u}=\langle {u}_{1},{u}_{2},{u}_{3}\rangle$ and $\textbf{v}=\langle {v}_{1},{v}_{2},{v}_{3}\rangle$
- {def} **determinant**: a real number associated with a square matrix
- {def} **parallelepiped**: a three-dimensional prism with six faces that are parallelograms
- {def} **torque**: the effect of a force that causes an object to rotate
- {def} **triple scalar product**: the dot product of a vector with the cross product of two other vectors: $\textbf{u}\cdot (\textbf{v}\;\times \;\textbf{w})$
- {def} **vector product**: the cross product of two vectors

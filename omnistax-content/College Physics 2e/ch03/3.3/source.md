# Vector Addition and Subtraction: Analytical Methods

## Learning Objectives
By the end of this section, you will be able to:
- Understand the rules of vector addition and subtraction using analytical methods.
- Apply analytical methods to determine vertical and horizontal component vectors.
- Apply analytical methods to determine the magnitude and direction of a resultant vector.
{term:Analytical methods} of vector addition and subtraction employ geometry and simple trigonometry rather than the ruler and protractor of graphical methods. Part of the graphical technique is retained, because vectors are still represented by arrows for easy visualization. However, analytical methods are more concise, accurate, and precise than graphical methods, which are limited by the accuracy with which a drawing can be made. Analytical methods are limited only by the accuracy and precision with which physical quantities are known.

## Resolving a Vector into Perpendicular Components
Analytical techniques and right triangles go hand-in-hand in physics because (among other things) motions along perpendicular directions are independent. We very often need to separate a vector into perpendicular components. For example, given a vector like $A$ in [ref:import-auto-id1165298677803], we may wish to find which two perpendicular vectors, ${A}_{x}$ and ${A}_{y}$, add to produce it.

> FIGURE {fig:import-auto-id1165298677803} src=../../media/Figure_03_03_01a.jpg
> alt: In the given figure a dotted vector A sub x is drawn from the origin along the x axis. From the head of the vector A sub x another vector A sub y is drawn in the upward direction. Their resultant vector A is drawn from the tail of the vector A sub x to the head of the vector A sub y at an angle theta from the x axis. On the graph a vector A, inclined at an angle theta with x axis is shown. Therefore vector A is the sum of the vectors A sub x and A sub y.
> caption: The vector $A$, with its tail at the origin of an *x*, *y*-coordinate system, is shown together with its *x*- and *y*-components, ${A}_{x}$ and ${A}_{y}$. These vectors form a right triangle. The analytical relationships among these vectors are summarized below.

${A}_{x}$ and ${A}_{y}$  are defined to be the components of $A$ along the *x*- and *y*-axes. The three vectors $A$, ${A}_{x}$, and ${A}_{y}$ form a right triangle:

$$ {A}_{x}{\text{+ A}}_{y}\text{= A}\text{.} $$  {eq:eip-680}

Note that this relationship between vector components and the resultant vector holds only for vector quantities (which include both magnitude and direction). The relationship does not apply for the magnitudes alone. For example, if ${\text{A}}_{x}=3 m$ east,  ${\text{A}}_{y}=4 m$ north, and  $\text{A}=5 m$ north-east, then it is true that the vectors ${A}_{x}{\text{+ A}}_{y}\text{= A}$. However, it is *not* true that the sum of the magnitudes of the vectors is also equal. That is,

$$ \begin{array}{l}\text{3 m}+\text{4 m}≠\text{5 m} \\ \end{array} $$  {eq:eip-818}

Thus,

$$ {A}_{x}+{A}_{y}≠A $$  {eq:eip-505}

If the vector $A$ is known, then its magnitude $A$ (its length) and its angle  $\theta$ (its direction) are known. To find ${A}_{x}$ and ${A}_{y}$, its *x*- and *y*-components, we use the following relationships for a right triangle.

$$ {A}_{x}=A\;\text{cos}\;\theta $$  {eq:eip-377}

and

$$ {A}_{y}=A\;\text{sin}\;\theta \text{.} $$  {eq:eip-69}

> FIGURE {fig:import-auto-id1165298704788} src=../../media/Figure_03_03_02a.jpg
> alt: ]A dotted vector A sub x whose magnitude is equal to A cosine theta is drawn from the origin along the x axis. From the head of the vector A sub x another vector A sub y whose magnitude is equal to A sine theta is drawn in the upward direction. Their resultant vector A is drawn from the tail of the vector A sub x to the head of the vector A-y at an angle theta from the x axis. Therefore vector A is the sum of the vectors A sub x and A sub y.
> caption: The magnitudes of the vector components ${A}_{x}$ and ${A}_{y}$ can be related to the resultant vector $A$ and the angle  $\theta$ with trigonometric identities. Here we see that ${A}_{x}=A\;\text{cos}\;\theta$ and ${A}_{y}=A\;\text{sin}\;\theta$.

Suppose, for example, that $A$ is the vector representing the total displacement of the person walking in a city considered in [Kinematics in Two Dimensions: An Introduction](module:m42104) and [Vector Addition and Subtraction: Graphical Methods](module:m42127).

> FIGURE {fig:import-auto-id1165298544262} src=../../media/Figure_03_03_03.jpg
> alt: In the given figure a vector A of magnitude ten point three blocks is inclined at an angle twenty nine point one degrees to the positive x axis. The horizontal component A sub x of vector A is equal to A cosine theta which is equal to ten point three blocks multiplied to cosine twenty nine point one degrees which is equal to nine blocks east. Also the vertical component A sub y of vector A is equal to A sin theta is equal to ten point three blocks multiplied to sine twenty nine point one degrees,  which is equal to five point zero blocks north.
> caption: We can use the relationships ${A}_{x}=A\;\text{cos}\;\theta$ and ${A}_{y}=A\;\text{sin}\;\theta$ to determine the magnitude of the horizontal and vertical component vectors in this example.

Then $A=10.3$ blocks and $\theta =29.1º$ , so that   
$$ {A}_{x}=A\;\text{cos}\;\theta =(\text{10.3 blocks})(\text{cos}\;29.1º)=\text{9.0 blocks} $$  {eq:eip-id1646569}
  
$$ {A}_{y}=A\;\text{sin}\;\theta =(\text{10.3 blocks})(\text{sin}\;29.1º)=\text{5.0 blocks}\text{.} $$  {eq:eip-id2495034}

## Calculating a Resultant Vector
If the perpendicular components ${A}_{x}$ and ${A}_{y}$ of a vector $A$ are known, then $A$ can also be found analytically. To find the magnitude $A$ and direction  $\theta$ of a vector from its perpendicular components ${A}_{x}$ and ${A}_{y}$, relative to the *x*-axis, we use the following relationships:

$$ A=\sqrt{{A}_{x}{}^{2}+{A}_{y}{}^{2}} $$  {eq:eip-109}

$$ \theta ={\text{tan}}^{-1}({A}_{y}/{A}_{x})\text{.} $$  {eq:eip-750}

> FIGURE {fig:import-auto-id1165298723894} src=../../media/Figure_03_03_04a.jpg
> alt: Vector A is shown with its horizontal and vertical components A sub x and A sub y respectively. The magnitude of vector A is equal to the square root of A sub x squared plus A sub y squared. The angle theta of the vector A with the x axis is equal to inverse tangent of A sub y over A sub x
> caption: The magnitude and direction of the resultant vector  can be determined once the horizontal and vertical components ${A}_{x}$ and ${A}_{y}$  have been determined.

Note that the equation $A=\sqrt{{A}_{x}^{2}+{A}_{y}^{2}}$ is just the Pythagorean theorem relating the legs of a right triangle to the length of the hypotenuse. For example, if ${A}_{x}$ and ${A}_{y}$ are 9 and 5 blocks, respectively, then $A=\sqrt{{9}^{2}{\text{+5}}^{2}}\text{=10}\text{.}3$ blocks, again consistent with the example of the person walking in a city. Finally, the direction is $\theta ={\text{tan}}^{–1}(\text{5/9})=29.1º$  , as before.

:::note [] Determining Vectors and Vector Components with Analytical Methods

Equations ${A}_{x}=A\;\text{cos}\;\theta$ and ${A}_{y}=A\;\text{sin}\;\theta$ are used to find the perpendicular components of a vector—that is, to go from $A$ and  $\theta$ to ${A}_{x}$ and ${A}_{y}$. Equations $A=\sqrt{{A}_{x}^{2}+{A}_{y}^{2}}$ and $\theta ={\text{tan}}^{\text{–1}}({A}_{y}/{A}_{x})$ are used to find a vector from its perpendicular components—that is, to go from ${A}_{x}$ and ${A}_{y}$ to $A$ and  $\theta$. Both processes are crucial to analytical methods of vector addition and subtraction.
:::

## Adding Vectors Using Analytical Methods
To see how to add vectors using perpendicular components, consider [ref:import-auto-id1165298839640], in which the vectors $A$ and $B$ are added to produce the resultant $R$.

> FIGURE {fig:import-auto-id1165298839640} src=../../media/Figure_03_03_05a.jpg
> alt: Two vectors A and B are shown. The tail of vector B is at the head of vector A and the tail of the vector A is at origin. Both the vectors are in the first quadrant. The resultant R of these two vectors extending from the tail of vector A to the head of vector B is also shown.
> caption: Vectors $A$ and $B$ are two legs of a walk, and $R$ is the resultant or total displacement. You can use analytical methods to determine the magnitude and direction of $R$.

If $A$ and $B$ represent two legs of a walk (two displacements), then $R$ is the total displacement. The person taking the walk ends up at the tip of $R.$ There are many ways to arrive at the same point. In particular, the person could have walked first in the *x*-direction and then in the *y*-direction. Those paths are the *x*- and *y*-components of the resultant, ${R}_{x}$ and ${R}_{y}$. If we know  ${\text{R}}_{x}$ and ${R}_{y}$, we can find  $R$ and  $\theta$ using the equations  $A=\sqrt{{{A}_{x}}^{2}+{{A}_{y}}^{2}}$ and  $\theta ={\text{tan}}^{–1}({A}_{y}/{A}_{x})$. When you use the analytical method of vector addition, you can determine the components or the magnitude and direction of a vector.
***Step 1.***Identify the x- and y-axes that will be used in the problem. Then, find the components of each vector to be added along the chosen perpendicular axes*.* Use the equations ${A}_{x}=A\;\text{cos}\;\theta$ and  ${A}_{y}=A\;\text{sin}\;\theta$ to find the components. In [ref:import-auto-id1165296674934], these components are  ${A}_{x}$,  ${A}_{y}$,  ${B}_{x}$, and  ${B}_{y}$. The angles that vectors $A$ and $B$ make with the *x*-axis are ${\theta}_{\text{A}}$ and ${\theta}_{\text{B}}$, respectively.

> FIGURE {fig:import-auto-id1165296674934} src=../../media/Figure_03_03_06a.jpg
> alt: Two vectors A and B are shown. The tail of the vector B is at the head of vector A and the tail of the vector A is at origin. Both the vectors are in the first quadrant. The resultant R of these two vectors extending from the tail of vector A to the head of vector B is also shown. The horizontal and vertical components of the vectors A and B are shown with the help of dotted lines. The vectors labeled as A sub x and A sub y are the components of vector A, and B sub x and B sub y as the components of vector B..
> caption: To add vectors $A$ and $B$, first determine the horizontal and vertical components of each vector. These are the dotted vectors ${A}_{x}$, ${A}_{y}$, ${B}_{x}$ and  ${\text{B}}_{y}$ shown in the image.

***Step 2.***Find the components of the resultant along each axis by adding the components of the individual vectors along that axis*.* That is, as shown in [ref:import-auto-id1165298866862],

$$ {R}_{x}={A}_{x}+{B}_{x} $$  {eq:eip-284}

and

$$ {R}_{y}={A}_{y}+{B}_{y}\text{.} $$  {eq:eip-92}

> FIGURE {fig:import-auto-id1165298866862} src=../../media/Figure_03_03_07a.jpg
> alt: Two vectors A and B are shown. The tail of vector B is at the head of vector A and the tail of the vector A is at origin. Both the vectors are in the first quadrant. The resultant R of these two vectors extending from the tail of vector A to the head of vector B is also shown. The vectors A and B are resolved into the horizontal and vertical components shown as dotted lines parallel to x axis and y axis respectively. The horizontal components of vector A and vector B are labeled as A sub x and B sub x and the horizontal component of the resultant R is labeled at R sub x and is equal to A sub x plus B sub x. The vertical components of vector A and vector B are labeled as A sub y and B sub y and the vertical components of the resultant R is labeled as R sub y is equal to A sub y plus B sub y.
> caption: The magnitude of the vectors ${A}_{x}$ and ${B}_{x}$ add to give the magnitude ${R}_{x}$ of the resultant vector in the horizontal direction. Similarly, the magnitudes of the vectors ${A}_{y}$ and  ${B}_{y}$ add to give the magnitude ${R}_{y}$ of the resultant vector in the vertical direction.

Components along the same axis, say the *x*-axis, are vectors along the same line and, thus, can be added to one another like ordinary numbers. The same is true for components along the *y*-axis. (For example, a 9-block eastward walk could be taken in two legs, the first 3 blocks east and the second 6 blocks east, for a total of 9, because they are along the same direction.) So resolving vectors into components along common axes makes it easier to add them. Now that the components of $R$ are known, its magnitude and direction can be found.
***Step 3.***To get the magnitude $R$ of the resultant, use the Pythagorean theorem:**

$$ R=\sqrt{{R}_{x}^{2}+{R}_{y}^{2}}\text{.} $$  {eq:eip-960}

***Step 4.***To get the direction of the resultant relative to the *x*-axis:**

$$ \theta ={\text{tan}}^{-1}({R}_{y}/{R}_{x})\text{.} $$  {eq:eip-173}

The following example illustrates this technique for adding vectors using perpendicular components.

:::example {ex:fs-id1608746} Adding Vectors Using Analytical Methods
Add the vector $A$ to the vector $B$ shown in [ref:import-auto-id1165296662297], using perpendicular components along the *x*- and *y*-axes. The *x*- and *y*-axes are along the east–west and north–south directions, respectively. Vector $A$ represents the first leg of a walk in which a person walks $\text{53}\text{.}\text{0 m}$ in a direction $\text{20}\text{.}0\text{º}$ north of east. Vector $B$ represents the second leg, a displacement of $\text{34}\text{.}\text{0 m}$ in a direction $\text{63}\text{.}0\text{º}$ north of east.

> FIGURE {fig:import-auto-id1165296662297} src=../../media/Figure_03_03_08a.jpg
> alt: Two vectors A and B are shown. The tail of the vector A is at origin. Both the vectors are in the first quadrant. Vector A is of magnitude fifty three units and is inclined at an angle of twenty degrees to the horizontal. From the head of the vector A another vector B of magnitude 34 units is drawn and is inclined at angle sixty three degrees with the horizontal. The resultant of two vectors is drawn from the tail of the vector A to the head of the vector B.
> caption: Vector $A$ has magnitude $\text{53}\text{.}\text{0 m}$ and direction $\text{20}\text{.}0º$ north of the *x*-axis. Vector $B$ has magnitude $\text{34}\text{.}\text{0 m}$ and direction $\text{63}\text{.}0\text{º}$ north of the *x*-axis. You can use analytical methods to determine the magnitude and direction of $R$.

**Strategy**
The components of $A$ and $B$ along the *x*- and *y*-axes represent walking due east and due north to get to the same ending point. Once found, they are combined to produce the resultant.
**Solution**
Following the method outlined above, we first find the components of  $A$ and  $B$ along the *x*- and *y*-axes. Note that  $A=53.0 m$,  ${\theta}_{\text{A}}=20.0º$,  $B=34.0 m$, and ${\theta}_{\text{B}}=63.0º$.  We find the *x*-components by using ${A}_{x}=A\;\text{cos}\;\theta$, which gives

$$ \begin{array}{l}{A}_{x} & = & A\;\text{cos}\;{\theta}_{A}=(\text{53.}0 m )(\text{cos 20.0º}) \\ & = & (\text{53.}0 m)(0\text{.940})=\text{49.}8 m\end{array} $$  {eq:eip-253}

and

$$ \begin{array}{l}{B}_{x} & = & B\;\text{cos}\;{\theta}_{B}=(\text{34}\text{.}0 m )(\text{cos 63.0º}) \\ & = & (\text{34}\text{.}0 m )(0\text{.}\text{454})=\text{15}\text{.}4 m\text{.}\end{array} $$  {eq:eip-356}

Similarly, the *y*-components are found using ${A}_{y}=A\;\text{sin}\;{\theta}_{A}$:

$$ \begin{array}{l}{A}_{y} & = & A\;\text{sin}\;{\theta}_{A}=(\text{53}\text{.}0 m )(\text{sin 20.0º}) \\ & = & (\text{53}\text{.}0 m )(0\text{.}\text{342})=\text{18}\text{.}1 m \end{array} $$  {eq:eip-802}

and

$$ \begin{array}{l}{B}_{y} & = & B\;\text{sin}\;{\theta}_{B}=(\text{34}\text{.}0 m )(\text{sin 63}\text{.}0º) \\ & = & (\text{34}\text{.}0 m )(0\text{.}\text{891})=\text{30}\text{.}3 m \text{.}\end{array} $$  {eq:eip-837}

The *x*- and *y*-components of the resultant are thus

$$ {R}_{x}={A}_{x}+{B}_{x}=\text{49}\text{.}8 m +\text{15}\text{.}4 m =\text{65}\text{.}2 m $$  {eq:eip-196}

and

$$ {R}_{y}={A}_{y}+{B}_{y}=\text{18}\text{.}1 m+\text{30}\text{.}3 m=\text{48}\text{.}4 m\text{.} $$  {eq:eip-325}

Now we can find the magnitude of the resultant by using the Pythagorean theorem:

$$ R=\sqrt{{R}_{x}^{2}+{R}_{y}^{2}}=\sqrt{(\text{65}\text{.}2{)}^{2}+(\text{48}\text{.}4{)}^{2}\;\text{m}} $$  {eq:eip-941}

so that

$$ R=81.2 m. $$  {eq:eip-702}

Finally, we find the direction of the resultant:

$$ \theta ={\text{tan}}^{-1}({R}_{y}/{R}_{x})\text{=+}{\text{tan}}^{-1}(\text{48}\text{.}4/\text{65}\text{.}2)\text{.} $$  {eq:eip-713}

Thus,

$$ \theta ={\text{tan}}^{-1}(0\text{.}\text{742})=\text{36}\text{.}6º\text{.} $$  {eq:eip-755}

> FIGURE {fig:import-auto-id1165298804108} src=../../media/Figure_03_03_09a-3f2c.jpg
> alt: The addition of two vectors A and B is shown. Vector A is of magnitude fifty three units and is inclined at an angle of twenty degrees to the horizontal. Vector B is of magnitude thirty four units and is inclined at angle sixty three degrees to the horizontal. The components of vector A are shown as dotted vectors A X is equal to forty nine point eight meter along x axis and A Y is equal to eighteen point one meter along Y axis. The components of vector B are also shown as dotted vectors B X is equal to fifteen point four meter and B Y is equal to thirty point three meter. The horizontal component of the resultant R X is equal to A X plus B X is equal to sixty five point two meter. The vertical component of the resultant R Y is equal to A Y plus B Y is equal to forty eight point four meter. The magnitude of the resultant of two vectors is eighty one point two meters. The direction of the resultant R is in thirty six point six degree from the vector A in anticlockwise direction.
> caption: Using analytical methods, we see that the magnitude of $R$ is $\text{81}\text{.}\text{2 m}$ and its direction is $\text{36}\text{.}6º$ north of east.

**Discussion**
This example illustrates the addition of vectors using perpendicular components. Vector subtraction using perpendicular components is very similar—it is just the addition of a negative vector.
Subtraction of vectors is accomplished by the addition of a negative vector. That is, $A-B≡A+(–B)$. Thus, *the method for the subtraction of vectors using perpendicular components is identical to that for addition*. The components of  $\text{–B}$ are the negatives of the components of  $B$. The *x*- and *y*-components of the resultant $A-\text{B = R}$ are thus

$$ {R}_{x}={A}_{x}+(-{B}_{x}) $$  {eq:eip-772}

and

$$ {R}_{y}={A}_{y}+(-{B}_{y}) $$  {eq:eip-532}

and the rest of the method outlined above is identical to that for addition. (See [ref:import-auto-id1165298841604].)
:::
Analyzing vectors using perpendicular components is very useful in many areas of physics, because perpendicular quantities are often independent of one another. The next module, [Projectile Motion](module:m42042), is one of many in which using perpendicular components helps make the picture clear and simplifies the physics.

> FIGURE {fig:import-auto-id1165298841604} src=../../media/Figure_03_03_10a.jpg
> alt: In this figure, the subtraction of two vectors A and B is shown. A red colored vector A is inclined at an angle theta A to the positive of x axis. From the head of vector A a blue vector negative B is drawn. Vector B is in west of south direction. The resultant of the vector A and vector negative B is shown as a black vector R from the tail of vector A to the head of vector negative B. The resultant R is inclined to x axis at an angle theta below the x axis. The components of the vectors are also shown along the coordinate axes as dotted lines of their respective colors.
> caption: The subtraction of the two vectors shown in [ref:import-auto-id1165298839640]. The components of $\text{–B}$ are the negatives of the components of $B$. The method of subtraction is the same as that for addition.

:::note [interactive] Vector Addition
Learn how to add vectors. Drag vectors onto a graph, change their length and angle, and sum them together. The magnitude, angle, and components of each vector can be displayed in several formats.

:::

## Summary
- The analytical method of vector addition and subtraction involves using the Pythagorean theorem and trigonometric identities to determine the magnitude and direction of a resultant vector.
- The steps to add vectors $A$ and $B$ using the analytical method are as follows:
    Step 1: Determine the coordinate system for the vectors. Then, determine the horizontal and vertical components of each vector using the equations
    

$$ \begin{array}{l}{A}_{x} & = & A\;\text{cos}\;\theta \\ {B}_{x} & = & B\;\text{cos}\;\theta \end{array} $$  {eq:import-auto-id1165298699812}

and
    

$$ \begin{array}{l}{A}_{y} & = & A\;\text{sin}\;\theta \\ {B}_{y} & = & B\;\text{sin}\;\theta \text{.}\end{array} $$  {eq:import-auto-id1165298717989}

Step 2: Add the horizontal and vertical components of each vector to determine the components ${R}_{x}$ and ${R}_{y}$ of the resultant vector, $\text{R}$:

$$ {R}_{x}={A}_{x}+{B}_{x} $$  {eq:import-auto-id1165298564746}

    and
    

$$ {R}_{y}={A}_{y}+{B}_{y.} $$  {eq:import-auto-id1165298586327}

    Step 3: Use the Pythagorean theorem to determine the magnitude, $R$, of the resultant vector $\text{R}$:

$$ R=\sqrt{{R}_{x}^{2}+{R}_{y}^{2}}. $$  {eq:import-auto-id1165298936413}

    Step 4: Use a trigonometric identity to determine the direction, $\theta$, of $\text{R}$:

$$ \theta ={\text{tan}}^{-1}({R}_{y}/{R}_{x}). $$  {eq:import-auto-id1165296245925}

## Conceptual Questions

:::exercise {fs-id1611291} type=conceptual-questions 
PROBLEM:
Suppose you add two vectors $A$ and $B$. What relative direction between them produces the resultant with the greatest magnitude? What is the maximum magnitude? What relative direction between them produces the resultant with the smallest magnitude? What is the minimum magnitude?
:::

:::exercise {fs-id1611340} type=conceptual-questions 
PROBLEM:
Give an example of a nonzero vector that has a component of zero.
:::

:::exercise {fs-id1611347} type=conceptual-questions 
PROBLEM:
Explain why a vector cannot have a component greater than its own magnitude.
:::

:::exercise {fs-id1611354} type=conceptual-questions 
PROBLEM:
If the vectors $A$ and $B$ are perpendicular, what is the component of $A$ along the direction of $B$? What is the component of $B$ along the direction of $A$?
:::

## Problems & Exercises

:::exercise {fs-id1611479} type=problems-exercises 
PROBLEM:
Find the following for path C in [ref:import-auto-id1165298863773]: (a) the total distance traveled and (b) the magnitude and direction of the displacement from start to finish. In this part of the problem, explicitly show how you follow the steps of the analytical method of vector addition. 
> FIGURE {fig:import-auto-id1165298863773} src=../../media/Figure_03_02_20a-b5e9.jpg
> alt: A map of city is shown. The houses are in form of square blocks of side one hundred and twenty meter each. Four paths A B C and D are shown in different colors. The path c shown as blue extends to one block towards north, then five blocks towards east and then two blocks towards south then one block towards west and one block towards north and finally three blocks towards west. It is asked to find out the total distance traveled the magnitude and the direction of the displacement from start to finish for path C.
> caption: The various lines represent paths taken by different people walking in a city. All blocks are 120 m on a side.

SOLUTION:
(a) 1.56 km
(b) 120 m east
:::

:::exercise {fs-id1876099} type=problems-exercises 
PROBLEM:
Find the following for path D in [ref:import-auto-id1165298863773]: (a) the total distance traveled and (b) the magnitude and direction of the displacement from start to finish. In this part of the problem, explicitly show how you follow the steps of the analytical method of vector addition.
:::

:::exercise {fs-id1751204} type=problems-exercises 
PROBLEM:
Find the north and east components of the displacement from San Francisco to Sacramento shown in [ref:import-auto-id1165298797444].  
> FIGURE {fig:import-auto-id1165298797444} src=../../media/Figure_03_02_19a.jpg
> alt: A map of northern California with a circle with a radius of one hundred twenty three kilometers centered on San Francisco. Sacramento lies on the circumference of this circle in a direction forty-five degrees north of east from San Francisco.
> caption: 

SOLUTION:
North-component 87.0 km, east-component 87.0 km
:::

:::exercise {eip-287} type=problems-exercises 
PROBLEM:
Solve the following problem using analytical techniques: Suppose you walk 18.0 m straight west and then 25.0 m straight north. How far are you from your starting point, and what is the compass direction of a line connecting your starting point to your final position? (If you represent the two legs of the walk as vector displacements $A$ and $B$, as in [ref:import-auto-id1165298935750], then this problem asks you to find their sum $R=A+B$.)

> FIGURE {fig:import-auto-id1165298935750} src=../../media/Figure_03_02_21a.jpg
> alt: In the given figure displacement of a person is shown. First movement of the person is shown as vector A from origin along negative x axis. He then turns to his right. His movement is now shown as a vertical vector in north direction. The displacement vector R is also shown. In the question you are asked to find the displacement of the person from the start to finish.
> caption: The two displacements $A$ and $B$ add to give a total displacement $R$ having magnitude $R$ and direction $\theta$.

Note that you can also solve this graphically. Discuss why the analytical technique for solving this problem is potentially more accurate than the graphical technique.
:::

:::exercise {eip-430} type=problems-exercises 
PROBLEM:
Repeat [ref:eip-287] using analytical techniques, but reverse the order of the two legs of the walk and show that you get the same final result. (This problem shows that adding them in reverse order gives the same result—that is, $\text{B + A = A + B}$.)  Discuss how taking another path to reach the same point might help to overcome an obstacle blocking your other path.
SOLUTION:
30.8 m, 35.8 west of north
:::

:::exercise {fs-id1862376} type=problems-exercises 
PROBLEM:
You drive $7\text{.}\text{50 km}$ in a straight line in a direction  $15º$  east of north. (a) Find the distances you would have to drive straight east and then straight north to arrive at the same point. (This determination is equivalent to find the components of the displacement along the east and north directions.) (b) Show that you still arrive at the same point if the east and north legs are reversed in order.
:::

:::exercise {fs-id1629683} type=problems-exercises 
PROBLEM:
Do [ref:eip-287] again using analytical techniques and change the second leg of the walk to $\text{25.0 m}$ straight south. (This is equivalent to subtracting $B$ from $A$ —that is, finding $\text{R}'=\text{A – B}$) (b) Repeat again, but now you first walk $\text{25}\text{.}\text{0 m}$ north and then $\text{18}\text{.}\text{0 m}$ east. (This is equivalent to subtract $A$ from $B$ —that is, to find $A=B+C$. Is that consistent with your result?)
SOLUTION:
(a) $\text{30}\text{.}\text{8 m}$, $\text{54}\text{.}2º$ south of west
(b) $\text{30}\text{.}\text{8 m}$, $\text{54}\text{.}2º$ north of east
:::

:::exercise {fs-id1956316} type=problems-exercises 
PROBLEM:
A new landowner has a triangular piece of flat land she wishes to fence. Starting at the west corner, she measures the first side to be 80.0 m long and the next to be 105 m. These sides are represented as displacement vectors $A$ from $B$ in [ref:eip-id3165265]. She then correctly calculates the length and orientation of the third side $\text{C}$. What is her result?   
> FIGURE {fig:eip-id3165265} src=../../media/Figure_03_03_11a.jpg
> alt: In the given figure the sides of a triangular piece of land are shown in vector form. West corner is at origin. A vector starts from the origin towards south east direction and makes an angle twenty-one degrees with the horizontal. Then from the head of this vector another vector B making an angle eleven degrees with the vertical is drawn upwards. Then another vector C from the head of the vector B to the tail of the initial vector is drawn. The length and orientation of side C is indicated as unknown, represented by a question mark.
> caption: 

:::

:::exercise {fs-id1874820} type=problems-exercises 
PROBLEM:
You fly $\text{32}\text{.}\text{0 km}$ in a straight line in still air in the direction  $35.0º$ south of west. (a) Find the distances you would have to fly straight south and then straight west to arrive at the same point. (This determination is equivalent to finding the components of the displacement along the south and west directions.) (b) Find the distances you would have to fly first in a direction  $45.0º$ south of west and then in a direction  $45.0º$ west of north. These are the components of the displacement along a different set of axes—one rotated  $45º$.
SOLUTION:
18.4 km south, then 26.2 km west(b) 31.5 km at $45.0º$ south of west, then 5.56 km at $45.0º$ west of north
:::

:::exercise {eip-379} type=problems-exercises 
PROBLEM:
A farmer wants to fence off a four-sided plot of flat land. They measure the first three sides, shown as $A,$ $B,$ and $C$ in [ref:import-auto-id1165298543237], and then correctly calculate the length and orientation of the fourth side $D$. What is their result?

> FIGURE {fig:import-auto-id1165298543237} src=../../media/Figure_03_03_12a-2f84.jpg
> alt: A quadrilateral with sides A, B, C, and D. A begins at the end of D and is 4 point seven zero kilometers  at an angle of 7 point 5 degrees south of west. B begins at the end of A and is 2 point four eight kilometers in a direction sixteen degrees west of north. C begins at the end of B and is 3 point zero 2 kilometers in a direction nineteen degrees north of west. D begins at the end of C and runs distance and direction that must be calculated
> caption: 

:::

:::exercise {fs-id1849688} type=problems-exercises 
PROBLEM:
In an attempt to escape his island, Gilligan builds a raft and sets to sea. The wind shifts a great deal during the day, and he is blown along the following straight lines: $2\text{.}\text{50 km}$ $45.0º$  north of west; then  $4\text{.}\text{70 km}$  $60.0º$ south of east; then  $1.30\;\text{km}$   $25.0º$ south of west; then  $5\text{.}\text{10 km}$ straight east; then  $1.70\;\text{km}$  $5.00º$ east of north; then  $7\text{.}\text{20 km}$  $55.0º$ south of west; and finally  $2\text{.}\text{80 km}$  $10.0º$ north of east. What is his final position relative to the island?
SOLUTION:
$7\text{.}\text{34 km}$, $\text{63}\text{.}5º$ south of east
:::

:::exercise {fs-id1955218} type=problems-exercises 
PROBLEM:
Suppose a pilot flies $\text{40}\text{.}\text{0 km}$ in a direction $\text{60º}$ north of east and then flies $\text{30}\text{.}\text{0 km}$ in a direction $\text{15º}$ north of east as shown in [ref:import-auto-id1165298708571]. Find her total distance $R$ from the starting point and the direction $\theta$ of the straight-line path to the final position. Discuss qualitatively how this flight would be altered by a wind from the north and how the effect of the wind would depend on both wind speed and the speed of the plane relative to the air mass.

> FIGURE {fig:import-auto-id1165298708571} src=../../media/Figure_03_03_13a-bbd8.jpg
> alt: A triangle  defined by vectors A, B, and R. A begins at the origin and run forty kilometers in a direction sixty degrees north of east. B begins at the end of A and runs thirty kilometers in a direction fifteen degrees north of east. R is the resultant vector and runs from the origin (the beginning of A) to the end of B for a distance and in a direction theta that need to be calculated.
> caption: 

:::

## Glossary
- {def} **analytical method**: the method of determining the magnitude and direction of a resultant vector using the Pythagorean theorem and trigonometric identities

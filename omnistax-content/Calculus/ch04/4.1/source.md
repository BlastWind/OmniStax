# Related Rates

## Learning Objectives {section:learning-objectives}
- Express changing quantities in terms of derivatives.
- Find relationships among the derivatives in a given problem.
- Use the chain rule to find the rate of change of one quantity that depends on the rate of change of other quantities.

We have seen that for quantities that are changing over time, the rates at which these quantities change are given by derivatives. If two related quantities are changing over time, the rates at which the quantities change are related. For example, if a balloon is being filled with air, both the radius of the balloon and the volume of the balloon are increasing. In this section, we consider several problems in which two or more related quantities are changing and we study how to determine the relationship between the rates of change of these quantities.

## Setting up Related-Rates Problems
In many real-world applications, related quantities are changing with respect to time. For example, if we consider the balloon example again, we can say that the rate of change in the volume, $V,$ is related to the rate of change in the radius, $r.$ In this case, we say that $\frac{dV}{dt}$ and $\frac{dr}{dt}$ are {term:related rates} because *V* is related to *r*. Here we study several examples of related quantities that are changing with respect to time and we look at how to calculate one rate of change given another rate of change.

:::example {ex:fs-id1165042990634} Inflating a Balloon

:::exercise {fs-id1165042978641} type= 
PROBLEM:
A spherical balloon is being filled with air at the constant rate of $2{\;\text{cm}}^{3}\text{/}\text{sec}$ ([ref:CNX_Calc_Figure_04_01_001]). How fast is the radius increasing when the radius is $3\;\text{cm}?$

> FIGURE {fig:CNX_Calc_Figure_04_01_001} src=../../media/CNX_Calc_Figure_04_01_001.jpg
> alt: Three balloons are shown at Times 1, 2, and 3. These balloons increase in volume and radius as time increases.
> caption: As the balloon is being filled with air, both the radius and the volume are increasing with respect to time.

SOLUTION:
The volume of a sphere of radius $r$ centimeters is

$V=\frac{4}{3}\pi {r}^{3}{\text{cm}}^{3}.$  {eq:fs-id1165042990072}

Since the balloon is being filled with air, both the volume and the radius are functions of time. Therefore, $t$ seconds after beginning to fill the balloon with air, the volume of air in the balloon is

$V(t)=\frac{4}{3}\pi {[r(t)]}^{3}{\text{cm}}^{3}.$  {eq:fs-id1165043013475}

Differentiating both sides of this equation with respect to time and applying the chain rule, we see that the rate of change in the volume is related to the rate of change in the radius by the equation

$V'(t)=4\pi {[r(t)]}^{2}{r}^{'}(t).$  {eq:fs-id1165043119522}

The balloon is being filled with air at the constant rate of 2 cm<sup>3</sup>/sec, so $V'(t)=2{\;\text{cm}}^{3}\text{/}\text{sec}.$ Therefore,

$2{\text{cm}}^{3}\text{/}\text{sec}=(4\pi {[r(t)]}^{2}{\text{cm}}^{2})\cdot (r'(t)\text{cm/s})\text{,}$  {eq:fs-id1165043009965}

which implies

$r'(t)=\frac{1}{2\pi {[r(t)]}^{2}}\;\text{cm/sec}.$  {eq:fs-id1165043060683}

When the radius $r=3\;\text{cm,}$

$r'(t)=\frac{1}{18\pi}\;\text{cm/sec}.$  {eq:fs-id1165043035926}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165042966918} type= 
PROBLEM:
What is the instantaneous rate of change of the radius when $r=6\;\text{cm}?$
SOLUTION:
$\frac{1}{72\pi}\;\text{cm/sec},$ or approximately 0.0044 cm/sec
COMMENTARY: Hint
$\frac{dr}{dt}=\frac{1}{2\pi {r}^{2}}$
:::
:::
Before looking at other examples, let’s outline the problem-solving strategy we will be using to solve related-rates problems.

:::note [problem-solving] Solving a Related-Rates Problem
1. Assign symbols to all variables involved in the problem. Draw a figure if applicable.
2. State, in terms of the variables, the information that is given and the rate to be determined.
3. Find an equation relating the variables introduced in step 1.
4. Using the chain rule, differentiate both sides of the equation found in step 3 with respect to the independent variable. This new equation will relate the derivatives.
5. Substitute all known values into the equation from step 4, then solve for the unknown rate of change.
:::
Note that when solving a related-rates problem, it is crucial not to substitute known values too soon. For example, if the value for a changing quantity is substituted into an equation before both sides of the equation are differentiated, then that quantity will behave as a constant and its derivative will not appear in the new equation found in step 4. We examine this potential error in the following example.

## Examples of the Process
Let’s now implement the strategy just described to solve several related-rates problems. The first example involves a plane flying overhead. The relationship we are studying is between the speed of the plane and the rate at which the distance between the plane and a person on the ground is changing.

:::example {ex:fs-id1165043105132} An Airplane Flying at a Constant Elevation

:::exercise {fs-id1165043105134} type= 
PROBLEM:
An airplane is flying overhead at a constant elevation of $4000\;\text{ft}.$ A man is viewing the plane from a position $3000\;\text{ft}$ from the base of a radio tower. The airplane is flying horizontally away from the man. If the plane is flying at the rate of $600\;\text{ft/sec},$ at what rate is the distance between the man and the plane increasing when the plane passes over the radio tower?
SOLUTION:
Step 1. Draw a picture, introducing variables to represent the different quantities involved.

> FIGURE {fig:CNX_Calc_Figure_04_01_002} src=../../media/CNX_Calc_Figure_04_01_002.jpg
> alt: A right triangle is made with a person on the ground, an airplane in the air, and a radio tower at the right angle on the ground. The hypotenuse is s, the distance on the ground between the person and the radio tower is x, and the side opposite the person (that is, the height from the ground to the airplane) is 4000 ft.
> caption: An airplane is flying at a constant height of 4000 ft. The distance between the person and the airplane and the person and the place on the ground directly below the airplane are changing. We denote those quantities with the variables $s$ and $x,$ respectively.

As shown, $x$ denotes the distance between the man and the position on the ground directly below the airplane. The variable $s$ denotes the distance between the man and the plane. Note that both $x$ and $s$ are functions of time. We do not introduce a variable for the height of the plane because it remains at a constant elevation of $4000\;\text{ft}.$ Since an object’s height above the ground is measured as the shortest distance between the object and the ground, the line segment of length 4000 ft is perpendicular to the line segment of length $x$ feet, creating a right triangle.
Step 2. Since $x$ denotes the horizontal distance between the man and the point on the ground below the plane, $dx\text{/}dt$ represents the speed of the plane. We are told the speed of the plane is 600 ft/sec. Therefore, $\frac{dx}{dt}=600$ ft/sec. Since we are asked to find the rate of change in the distance between the man and the plane when the plane is directly above the radio tower, we need to find $ds\text{/}dt$ when $x=3000\;\text{ft}.$
Step 3. From the figure, we can use the {index:Pythagorean theorem} to write an equation relating $x$ and $s\text{:}$

${[x(t)]}^{2}+{4000}^{2}={[s(t)]}^{2}.$  {eq:fs-id1165043106419}

Step 4. Differentiating this equation with respect to time and using the fact that the derivative of a constant is zero, we arrive at the equation

$x\frac{dx}{dt}=s\frac{ds}{dt}.$  {eq:fs-id1165043078488}

Step 5. Find the rate at which the distance between the man and the plane is increasing when the plane is directly over the radio tower. That is, find $\frac{ds}{dt}$ when $x=3000\;\text{ft}.$ Since the speed of the plane is $600\;\text{ft/sec},$ we know that $\frac{dx}{dt}=600\;\text{ft/sec}.$ We are not given an explicit value for $s;$ however, since we are trying to find $\frac{ds}{dt}$ when $x=3000\;\text{ft},$ we can use the Pythagorean theorem to determine the distance $s$ when $x=3000$ and the height is $4000\;\text{ft}.$ Solving the equation

${3000}^{2}+{4000}^{2}={s}^{2}$  {eq:fs-id1165042936348}

for $s,$ we have $s=5000\;\text{ft}$ at the time of interest. Using these values, we conclude that $ds\text{/}dt$ is a solution of the equation

$(3000)(600)=(5000)\cdot \frac{ds}{dt}.$  {eq:fs-id1165042927180}

Therefore,

$\frac{ds}{dt}=\frac{3000\cdot 600}{5000}=360\;\text{ft/sec}.$  {eq:fs-id1165042927234}

*Note*: When solving related-rates problems, it is important not to substitute values for the variables too soon. For example, in step 3, we related the variable quantities $x(t)$ and $s(t)$ by the equation

${[x(t)]}^{2}+{4000}^{2}={[s(t)]}^{2}.$  {eq:fs-id1165042927307}

Since the plane remains at a constant height, it is not necessary to introduce a variable for the height, and we are allowed to use the constant 4000 to denote that quantity. However, the other two quantities are changing. If we mistakenly substituted $x(t)=3000$ into the equation before differentiating, our equation would have been

${3000}^{2}+{4000}^{2}={[s(t)]}^{2}.$  {eq:fs-id1165043116367}

After differentiating, our equation would become

$0=s(t)\frac{ds}{dt}.$  {eq:fs-id1165043116416}

As a result, we would incorrectly conclude that $\frac{ds}{dt}=0.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043116480} type= 
PROBLEM:
What is the speed of the plane if the distance between the person and the plane is increasing at the rate of $300\;\text{ft/sec}?$
SOLUTION:
$500\;\text{ft/sec}$
COMMENTARY: Hint
$\frac{ds}{dt}=300\;\text{ft/sec}$
:::
:::
We now return to the problem involving the rocket launch from the beginning of the chapter.

:::example {ex:fs-id1165043116552} Chapter Opener: A Rocket Launch

:::exercise {fs-id1165043116554} type= 
PROBLEM:

> FIGURE {fig:fs-id1167793475431} src=../../media/CNX_Calc_Figure_04_01_007.jpg
> alt: A photo of a rocket lifting off.
> caption: (credit: modification of work by Steve Jurvetson, Wikimedia Commons)

A rocket is launched so that it rises vertically. A camera is positioned $5000\;\text{ft}$ from the launch pad. When the rocket is $1000\;\text{ft}$ above the launch pad, its velocity is $600\;\text{ft/sec}.$ Find the necessary rate of change of the camera’s angle as a function of time so that it stays focused on the rocket.
SOLUTION:
Step 1. Draw a picture introducing the variables.

> FIGURE {fig:CNX_Calc_Figure_04_01_003} src=../../media/CNX_Calc_Figure_04_01_003.jpg
> alt: A right triangle is formed with a camera at one of the nonright angles and a rocket at the other nonright angle. The angle with the camera has measure θ. The distance from the rocket to the ground is h; note that this is the side opposite the angle with measure θ. The side adjacent to the angle with measure θ is 5000 ft.
> caption: A camera is positioned 5000 ft from the launch pad of the rocket. The height of the rocket and the angle of the camera are changing with respect to time. We denote those quantities with the variables $h$ and $\theta ,$ respectively.

Let $h$ denote the height of the rocket above the launch pad and $\theta$ be the angle between the camera lens and the ground.
Step 2. We are trying to find the rate of change in the angle of the camera with respect to time when the rocket is 1000 ft off the ground. That is, we need to find $\frac{d\theta}{dt}$ when $h=1000\;\text{ft}.$ At that time, we know the velocity of the rocket is $\frac{dh}{dt}=600\;\text{ft/sec}.$
Step 3. Now we need to find an equation relating the two quantities that are changing with respect to time: $h$ and $\theta .$ How can we create such an equation? Using the fact that we have drawn a right triangle, it is natural to think about trigonometric functions. Recall that $\text{tan}\;\theta$ is the ratio of the length of the opposite side of the triangle to the length of the adjacent side. Thus, we have

$\text{tan}\;\theta =\frac{h}{5000}.$  {eq:fs-id1165043135539}

This gives us the equation

$h=5000\;\text{tan}\;\theta .$  {eq:fs-id1165043135563}

Step 4. Differentiating this equation with respect to time $t,$ we obtain

$\frac{dh}{dt}=5000\;{\text{sec}}^{2}\theta \;\frac{d\theta}{dt}.$  {eq:fs-id1165043135593}

Step 5. We want to find $\frac{d\theta}{dt}$ when $h=1000\;\text{ft}.$ At this time, we know that $\frac{dh}{dt}=600\;\text{ft/sec}.$ We need to determine ${\text{sec}}^{2}\theta .$ Recall that $\text{sec}\;\theta$ is the ratio of the length of the hypotenuse to the length of the adjacent side. We know the length of the adjacent side is $5000\;\text{ft}.$ To determine the length of the hypotenuse, we use the Pythagorean theorem, where the length of one leg is $5000\;\text{ft},$ the length of the other leg is $h=1000\;\text{ft},$ and the length of the hypotenuse is $c$ feet as shown in the following figure.

> IMAGE {img:fs-id1165043091120} src=../../media/CNX_Calc_Figure_04_01_005.jpg
> alt: A right triangle has one angle with measure θ. The hypotenuse is c, the side length opposite the angle with measure θ is 1000, and the side adjacent to the angle with measure θ is 5000.

We see that

${1000}^{2}+{5000}^{2}={c}^{2}$  {eq:fs-id1165043091132}

and we conclude that the hypotenuse is

$c=1000\sqrt{26}\;\text{ft}.$  {eq:fs-id1165043091164}

Therefore, when $h=1000,$ we have

${\text{sec}}^{2}\theta ={(\frac{1000\sqrt{26}}{5000})}^{2}=\frac{26}{25}.$  {eq:fs-id1165043091203}

Recall from step 4 that the equation relating $\frac{d\theta}{dt}$ to our known values is

$\frac{dh}{dt}=5000\;{\text{sec}}^{2}\theta \;\frac{d\theta}{dt}.$  {eq:fs-id1165043122103}

When $h=1000\;\text{ft},$ we know that $\frac{dh}{dt}=600\;\text{ft/sec}$ and ${\text{sec}}^{2}\theta =\frac{26}{25}.$ Substituting these values into the previous equation, we arrive at the equation

$600=5000(\frac{26}{25})\frac{d\theta}{dt}\text{.}$  {eq:fs-id1165043122214}

Therefore, $\frac{d\theta}{dt}=\frac{3}{26}\;\text{rad/sec}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043122291} type= 
PROBLEM:
What rate of change is necessary for the elevation angle of the camera if the camera is placed on the ground at a distance of $4000\;\text{ft}$ from the launch pad and the velocity of the rocket is 500 ft/sec when the rocket is $2000\;\text{ft}$ off the ground?
SOLUTION:
$\frac{1}{10}\;\text{rad/sec}$
COMMENTARY: Hint
Find $\frac{d\theta}{dt}$ when $h=2000\;\text{ft}.$ At that time, $\frac{dh}{dt}=500\;\text{ft/sec}.$
:::
:::
In the next example, we consider water draining from a cone-shaped funnel. We compare the rate at which the level of water in the cone is decreasing with the rate at which the volume of water is decreasing.

:::example {ex:fs-id1165043112989} Water Draining from a Funnel

:::exercise {fs-id1165043112991} type= 
PROBLEM:
Water is draining from the bottom of a cone-shaped funnel at the rate of $0.0{3\;\text{ft}}^{3}\text{/sec}.$ The height of the funnel is 2 ft and the radius at the top of the funnel is $1\;\text{ft}.$ At what rate is the height of the water in the funnel changing when the height of the water is $\frac{1}{2}\;\text{ft}?$
SOLUTION:
Step 1: Draw a picture introducing the variables.

> FIGURE {fig:CNX_Calc_Figure_04_01_004} src=../../media/CNX_Calc_Figure_04_01_004.jpg
> alt: A funnel is shown with height 2 and radius 1 at its top. The funnel has water to height h, at which point the radius is r.
> caption: Water is draining from a funnel of height 2 ft and radius 1 ft. The height of the water and the radius of water are changing over time. We denote these quantities with the variables $h$ and $r,$ respectively.

Let $h$ denote the height of the water in the funnel, $r$ denote the radius of the water at its surface, and $V$ denote the volume of the water.
Step 2: We need to determine $\frac{dh}{dt}$ when $h=\frac{1}{2}\;\text{ft}.$ We know that $\frac{dV}{dt}=−0.03\;{\text{ft}}^{3}\text{/sec}.$
Step 3: The volume of water in the cone is

$V=\frac{1}{3}\pi {r}^{2}h.$  {eq:fs-id1165043113163}

From the figure, we see that we have similar triangles. Therefore, the ratio of the sides in the two triangles is the same. Therefore, $\frac{r}{h}=\frac{1}{2}$ or $r=\frac{h}{2}.$ Using this fact, the equation for volume can be simplified to

$V=\frac{1}{3}\pi {(\frac{h}{2})}^{2}h=\frac{\pi}{12}\;{h}^{3}.$  {eq:fs-id1165043106856}

Step 4: Applying the chain rule while differentiating both sides of this equation with respect to time $t,$ we obtain

$\frac{dV}{dt}=\frac{\pi}{4}\;{h}^{2}\frac{dh}{dt}.$  {eq:fs-id1165043106915}

Step 5: We want to find $\frac{dh}{dt}$ when $h=\frac{1}{2}\;\text{ft}.$ Since water is leaving at the rate of $0.0{3\;\text{ft}}^{3}\text{/sec},$ we know that $\frac{dV}{dt}=−0.03{\;\text{ft}}^{3}\text{/sec}.$ Therefore,

$−0.03=\frac{\pi}{4}{(\frac{1}{2})}^{2}\frac{dh}{dt} ,$  {eq:fs-id1165043107050}

which implies

$−0.03=\frac{\pi}{16}\;\frac{dh}{dt}.$  {eq:fs-id1165043107100}

It follows that

$\frac{dh}{dt}=-\frac{0.48}{\pi}=−0.153\;\text{ft/sec}.$  {eq:fs-id1165043098466}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1165043098512} type= 
PROBLEM:
At what rate is the height of the water changing when the height of the water is $\frac{1}{4}\;\text{ft}?$
SOLUTION:
$−0.61\;\text{ft/sec}$
COMMENTARY: Hint
We need to find $\frac{dh}{dt}$ when $h=\frac{1}{4}.$
:::
:::

## Key Concepts {section:key-concepts}
- To solve a related rates problem, first draw a picture that illustrates the relationship between the two or more related quantities that are changing with respect to time.
- In terms of the quantities, state the information given and the rate to be found.
- Find an equation relating the quantities.
- Use differentiation, applying the chain rule as necessary, to find an equation that relates the rates.
- Be sure not to substitute a variable quantity for one of the variables until after finding an equation relating the rates.

##  {section:section-exercises}
For the following exercises, find the quantities for the given equation.

:::exercise {fs-id1165043098631} type= 
PROBLEM:
Find $\frac{dy}{dt}$ at $x=1$ and $y={x}^{2}+3$ if $\frac{dx}{dt}=4.$
SOLUTION:
$8$
:::

:::exercise {fs-id1165043098711} type= 
PROBLEM:
Find $\frac{dx}{dt}$ at $x=−2$ and $y=2{x}^{2}+1$ if $\frac{dy}{dt}=−1.$
:::

:::exercise {fs-id1165043123744} type= 
PROBLEM:
Find $\frac{dz}{dt}$ at $(x,y)=(1,3)$ and ${z}^{2}={x}^{2}+{y}^{2}$ if $\frac{dx}{dt}=4$ and $\frac{dy}{dt}=3.$
SOLUTION:
$\pm \frac{13}{\sqrt{10}}$
:::
For the following exercises, sketch the situation if necessary and used related rates to solve for the quantities.

:::exercise {fs-id1165043123884} type= 
PROBLEM:
**[T]** If two electrical resistors are connected in parallel, the total resistance (measured in ohms, denoted by the Greek capital letter omega, $\text{Ω})$ is given by the equation $\frac{1}{R}=\frac{1}{{R}_{1}}+\frac{1}{{R}_{2}}.$ If ${R}_{1}$ is increasing at a rate of $0.5\;\text{Ω}\text{/}\text{min}$ and ${R}_{2}$ decreases at a rate of $1.1\text{Ω/min},$ at what rate does the total resistance change when ${R}_{1}=20\text{Ω}$ and ${R}_{2}=50\text{Ω}$?
:::

:::exercise {fs-id1165043109828} type= 
PROBLEM:
A 10-ft ladder is leaning against a wall. If the top of the ladder slides down the wall at a rate of 2 ft/sec, how fast is the bottom moving along the ground when the bottom of the ladder is 5 ft from the wall?

> IMAGE {img:fs-id1165043109840} src=../../media/CNX_Calc_Figure_04_01_201.jpg
> alt: A right triangle is formed by a ladder leaning up against a brick wall. The ladder forms the hypotenuse and is 10 ft long. 

SOLUTION:
$2\sqrt{3}$ ft/sec
:::

:::exercise {fs-id1165043109864} type= 
PROBLEM:
A 25-ft ladder is leaning against a wall. If we push the ladder toward the wall at a rate of 1 ft/sec, and the bottom of the ladder is initially $20\;\text{ft}$ away from the wall, how fast does the ladder move up the wall $5\;\text{sec}$ after we start pushing?
:::

:::exercise {fs-id1165043109911} type= 
PROBLEM:
Two airplanes are flying in the air at the same height: airplane *A* is flying east at 250 mi/h and airplane *B* is flying north at $300\;\text{mi/h}.$ If they are both heading to the same airport, located 30 miles east of airplane *A* and 40 miles north of airplane *B*, at what rate is the distance between the airplanes changing?

> IMAGE {img:fs-id1165043109949} src=../../media/CNX_Calc_Figure_04_01_202.jpg
> alt: A right triangle is formed by two airplanes A and B moving perpendicularly to each other. The hypotenuse is the distance between planes A and B. The other sides are extensions of each plane’s path until they meet.

SOLUTION:
The distance is decreasing at $390\;\text{mi/h}.$
:::

:::exercise {fs-id1165043109976} type= 
PROBLEM:
You and a friend are riding your bikes to a restaurant that you think is east; your friend thinks the restaurant is north. You both leave from the same point, with you riding at 16 mph east and your friend riding $12\;\text{mph}$ north. After you traveled $4\;\text{mi,}$ at what rate is the distance between you changing?
:::

:::exercise {fs-id1165043110023} type= 
PROBLEM:
Two buses are driving along parallel freeways that are $5\;\text{mi}$ apart, one heading east and the other heading west. Assuming that each bus drives a constant $55\;\text{mph,}$ find the rate at which the distance between the buses is changing when they are $13\;\text{mi}$ apart, heading toward each other.
SOLUTION:
The distance between them shrinks at a rate of $\frac{1320}{13}\approx 101.5\;\text{mph}.$
:::

:::exercise {fs-id1165043116081} type= 
PROBLEM:
A 6-ft-tall person walks away from a 10-ft lamppost at a constant rate of $3\;\text{ft/sec}.$ What is the rate that the tip of the shadow moves away from the pole when the person is $10\;\text{ft}$ away from the pole?

> IMAGE {img:fs-id1165043116117} src=../../media/CNX_Calc_Figure_04_01_203.jpg
> alt: A lamppost is shown that is 10 ft high. To its right, there is a person who is 6 ft tall. There is a line from the top of the lamppost that touches the top of the person’s head and then continues to the ground. The length from the end of this line to where the lamppost touches the ground is 10 + x. The distance from the lamppost to the person on the ground is 10, and the distance from the person to the end of the line is x.

:::

:::exercise {fs-id1165043116140} type= 
PROBLEM:
Using the previous problem, what is the rate at which the tip of the shadow moves away from the person when the person is 10 ft from the pole?
SOLUTION:
$\frac{9}{2}$ ft/sec
:::

:::exercise {fs-id1165043116165} type= 
PROBLEM:
A 5-ft-tall person walks toward a wall at a rate of 2 ft/sec. A spotlight is located on the ground 40 ft from the wall. How fast does the height of the person’s shadow on the wall change when the person is 10 ft from the wall?
:::

:::exercise {fs-id1165043116192} type= 
PROBLEM:
Using the previous problem, what is the rate at which the shadow changes when the person is 10 ft from the wall, if the person is walking away from the wall at a rate of 2 ft/sec?
SOLUTION:
It grows at a rate $\frac{4}{9}$ ft/sec
:::

:::exercise {fs-id1165043116218} type= 
PROBLEM:
A helicopter starting on the ground is rising directly into the air at a rate of 25 ft/sec. You are running on the ground starting directly under the helicopter at a rate of 10 ft/sec. Find the rate of change of the distance between the helicopter and yourself after 5 sec.
:::

:::exercise {fs-id1165043116258} type= 
PROBLEM:
Using the previous problem, what is the rate at which the distance between you and the helicopter is changing when the helicopter has risen to a height of 60 ft in the air, assuming that, initially, it was 30 ft above you?
SOLUTION:
The distance is increasing at $\frac{(135\sqrt{26})}{26}$ ft/sec
:::
For the following exercises, draw and label diagrams to help solve the related-rates problems.

:::exercise {fs-id1165043116301} type= 
PROBLEM:
The side of a cube increases at a rate of $\frac{1}{2}$ m/sec. Find the rate at which the volume of the cube increases when the side of the cube is 4 m.
:::

:::exercise {fs-id1165043116333} type= 
PROBLEM:
The volume of a cube decreases at a rate of 10 m<sup>3</sup>/s. Find the rate at which the side of the cube changes when the side of the cube is 2 m.
SOLUTION:
$-\frac{5}{6}$ m/sec
:::

:::exercise {fs-id1165043114843} type= 
PROBLEM:
The radius of a circle increases at a rate of $2$ m/sec. Find the rate at which the area of the circle increases when the radius is 5 m.
:::

:::exercise {fs-id1165043114873} type= 
PROBLEM:
The radius of a sphere decreases at a rate of $3$ m/sec. Find the rate at which the surface area decreases when the radius is 10 m.
SOLUTION:
$240\pi$ m<sup>2</sup>/sec
:::

:::exercise {fs-id1165043114903} type= 
PROBLEM:
The radius of a sphere increases at a rate of $1$ m/sec. Find the rate at which the volume increases when the radius is $20$ m.
:::

:::exercise {fs-id1165043114938} type= 
PROBLEM:
The radius of a sphere is increasing at a rate of 9 cm/sec. Find the radius of the sphere when the volume and the radius of the sphere are increasing at the same numerical rate.
SOLUTION:
$\frac{1}{2\sqrt{\pi}}$ cm
:::

:::exercise {fs-id1165043114967} type= 
PROBLEM:
The base of a triangle is shrinking at a rate of 1 cm/min and the height of the triangle is increasing at a rate of 5 cm/min. Find the rate at which the area of the triangle changes when the height is 22 cm and the base is 10 cm.
:::

:::exercise {fs-id1165043114989} type= 
PROBLEM:
A triangle has two constant sides of length 3 ft and 5 ft. The angle between these two sides is increasing at a rate of 0.1 rad/sec. Find the rate at which the area of the triangle is changing when the angle between the two sides is $\pi \text{/}6.$
SOLUTION:
The area is increasing at a rate $\frac{(3\sqrt{3})}{8}\;{\text{ft}}^{2}\text{/sec.}$
:::

:::exercise {fs-id1165043115045} type= 
PROBLEM:
A triangle has a height that is increasing at a rate of 2 cm/sec and its area is increasing at a rate of 4 cm<sup>2</sup>/sec. Find the rate at which the base of the triangle is changing when the height of the triangle is 4 cm and the area is 20 cm<sup>2</sup>.
:::
For the following exercises, consider a right cone that is leaking water. The dimensions of the conical tank are a height of 16 ft and a radius of 5 ft.

:::exercise {fs-id1165043115079} type= 
PROBLEM:
How fast does the depth of the water change when the water is 10 ft high if the cone leaks water at a rate of 10 ft<sup>3</sup>/min?
SOLUTION:
The depth of the water decreases at $\frac{128}{125\pi}$ ft/min.
:::

:::exercise {fs-id1165043115112} type= 
PROBLEM:
Find the rate at which the surface area of the water changes when the water is 10 ft high if the cone leaks water at a rate of 10 ft<sup>3</sup>/min.
:::

:::exercise {fs-id1165043092123} type= 
PROBLEM:
If the water level is decreasing at a rate of 3 in/min when the depth of the water is 8 ft, determine the rate at which water is leaking out of the cone.
SOLUTION:
The volume is decreasing at a rate of $\frac{(25\pi )}{16}{\text{ft}}^{3}\text{/min}.$
:::

:::exercise {fs-id1165043092170} type= 
PROBLEM:
A vertical cylinder is leaking water at a rate of 1 ft<sup>3</sup>/sec. If the cylinder has a height of 10 ft and a radius of 1 ft, at what rate is the height of the water changing when the height is 6 ft?
:::

:::exercise {fs-id1165043092199} type= 
PROBLEM:
A vertical cylinder is leaking water but you are unable to determine at what rate. The cylinder has a height of 2 m and a radius of 2 m. Find the rate at which the water is leaking out of the cylinder if the rate at which the height is decreasing is 10 cm/min when the height is 1 m.
SOLUTION:
The water flows out at rate $\frac{(2\pi )}{5}\;{\text{m}}^{3}\text{/min.}$
:::

:::exercise {fs-id1165043092244} type= 
PROBLEM:
A trough has ends shaped like isosceles triangles, with width 3 m and height 4 m, and the trough is 10 m long. Water is being pumped into the trough at a rate of $5\;{\text{m}}^{3}\text{/min}.$ At what rate does the height of the water change when the water is 1 m deep?

> IMAGE {img:fs-id1165043092271} src=../../media/CNX_Calc_Figure_04_01_204.jpg
> alt: A trough is shown with ends shaped like isosceles triangles. These triangles have width 3 and height 4. The trough is made up of rectangles that are of length 10. There is some water in the trough.

:::

:::exercise {fs-id1165043092297} type= 
PROBLEM:
A tank is shaped like an upside-down square pyramid, with base of 4 m by 4 m and a height of 12 m (see the following figure). How fast does the height increase when the water is 2 m deep if water is being pumped in at a rate of $\frac{2}{3}$ m<sup>3</sup>/sec?

> IMAGE {img:fs-id1165043092315} src=../../media/CNX_Calc_Figure_04_01_205.jpg
> alt: An upside-down square pyramid is shown with square side lengths 4 and height 12. There is an unspecified amount of water inside the shape.

SOLUTION:
$\frac{3}{2}$ m/sec
:::
For the following problems, consider a pool shaped like the bottom half of a sphere, that is being filled at a rate of 25 ft<sup>3</sup>/min. The radius of the pool is 10 ft. The formula for the volume of a partial hemisphere is $V=\frac{πh}{6}(3{r}^{2}+{h}^{2})$ where $h$ is the height of the water and $r$ is the radius of the water.

:::exercise {fs-id1165043092348} type= 
PROBLEM:
Find the rate at which the depth of the water is changing when the water has a depth of 5 ft.
:::

:::exercise {fs-id1165043092375} type= 
PROBLEM:
Find the rate at which the depth of the water is changing when the water has a depth of 1 ft.
SOLUTION:
$\frac{25}{19\pi}$ ft/min
:::

:::exercise {fs-id1165043092403} type= 
PROBLEM:
If the height is increasing at a rate of 1 in./min when the depth of the water is 2 ft, find the rate at which water is being pumped in.
:::

:::exercise {fs-id1165043117974} type= 
PROBLEM:
Gravel is being unloaded from a truck and falls into a pile shaped like a cone at a rate of 10 ft<sup>3</sup>/min. The radius of the cone base is three times the height of the cone. Find the rate at which the height of the gravel changes when the pile has a height of 5 ft.
SOLUTION:
$\frac{2}{45\pi}$ ft/min
:::

:::exercise {fs-id1165043118006} type= 
PROBLEM:
Using a similar setup from the preceding problem, find the rate at which the gravel is being unloaded if the pile is 5 ft high and the height is increasing at a rate of 4 in./min.
:::
For the following exercises, solve the related-rates problems. Consider making a sketch that represents the situation to help you understand each problem.

:::exercise {fs-id1165043118036} type= 
PROBLEM:
You are stationary on the ground and are watching a bird fly horizontally at a rate of $10$ m/sec. The bird is located 40 m above your head. How fast does the angle of elevation change when the horizontal distance between you and the bird is 9 m?
SOLUTION:
The angle decreases at $\frac{400}{1681}\;\text{rad/sec}.$
:::

:::exercise {fs-id1165043118075} type= 
PROBLEM:
You stand 40 ft from a bottle rocket on the ground and watch as it takes off vertically into the air at a rate of 20 ft/sec. Find the rate at which the angle of elevation changes when the rocket is 30 ft in the air.
:::

:::exercise {fs-id1165043118102} type= 
PROBLEM:
A lighthouse, *L*, is on an island 4 mi away from the closest point, *P*, on the beach (see the following image). If the lighthouse light rotates clockwise at a constant rate of 10 revolutions/min, how fast does the beam of light move across the beach 2 mi away from the closest point on the beach?

> IMAGE {img:fs-id1165043118120} src=../../media/CNX_Calc_Figure_04_01_208.jpg
> alt: A right triangle is formed by a lighthouse L, a point P on the shore that is perpendicular to the line from the lighthouse to the shore, and a point 2 miles to the right of the point P. The distance from P to L is 4 miles.

SOLUTION:
$100\pi \text{mi/min}$
:::

:::exercise {fs-id1165043118149} type= 
PROBLEM:
Using the same setup as the previous problem, determine at what rate the beam of light moves across the beach 1 mi away from the closest point on the beach.
:::

:::exercise {fs-id1165043118176} type= 
PROBLEM:
You are walking to a bus stop at a right-angle corner. You move north at a rate of 2 m/sec and are 20 m south of the intersection. The bus travels west at a rate of 10 m/sec away from the intersection – you have missed the bus! What is the rate at which the angle between you and the bus is changing when you are 20 m south of the intersection and the bus is 10 m west of the intersection?
SOLUTION:
The angle is changing at a rate of $\frac{11}{25}\;\text{rad/sec}.$
:::
For the following exercises, refer to the figure of baseball diamond, which has sides of 90 ft.

> IMAGE {img:fs-id1165043118215} src=../../media/CNX_Calc_Figure_04_01_207.jpg
> alt: A baseball field is shown, with the bases labeled Home, 1st, 2nd, and 3rd making a square with side lengths 90 ft.

:::exercise {fs-id1165043118225} type= 
PROBLEM:
**[T]** A batter hits a ball toward third base at 75 ft/sec and runs toward first base at a rate of 24 ft/sec. At what rate does the distance between the ball and the batter change when 2 sec have passed?
:::

:::exercise {fs-id1165043118251} type= 
PROBLEM:
**[T]** A batter hits a ball toward second base at 80 ft/sec and runs toward first base at a rate of 30 ft/sec. At what rate does the distance between the ball and the batter change when the runner has covered one-third of the distance to first base? (*Hint*: Recall the law of cosines.)
SOLUTION:
The distance is increasing at a rate of $62.50$ ft/sec.
:::

:::exercise {fs-id1165043120460} type= 
PROBLEM:
**[T]** A batter hits the ball and runs toward first base at a speed of 22 ft/sec. At what rate does the distance between the runner and second base change when the runner has run 30 ft?
:::

:::exercise {fs-id1165043120487} type= 
PROBLEM:
**[T]** Runners start at first and second base. When the baseball is hit, the runner at first base runs at a speed of 18 ft/sec toward second base and the runner at second base runs at a speed of 20 ft/sec toward third base. How fast is the distance between runners changing 1 sec after the ball is hit?
SOLUTION:
The distance is decreasing at a rate of $11.99$ ft/sec.
:::

## Glossary
- {def} **related rates**: are rates of change associated with two or more related quantities that are changing over time

# Physical Applications

## Learning Objectives {section:learning-objectives}
- Determine the mass of a one-dimensional object from its linear density function.
- Determine the mass of a two-dimensional circular object from its radial density function.
- Calculate the work done by a variable force acting along a line.
- Calculate the work done in pumping a liquid from one height to another.
- Find the hydrostatic force against a submerged vertical plate.

In this section, we examine some physical applications of integration. Let’s begin with a look at calculating mass from a density function. We then turn our attention to work, and close the section with a study of hydrostatic force.

## Mass and Density
We can use integration to develop a formula for calculating mass based on a density function. First we consider a thin rod or wire. Orient the rod so it aligns with the $x\text{-axis,}$ with the left end of the rod at $x=a$ and the right end of the rod at $x=b$ ([ref:CNX_Calc_Figure_06_05_001]). Note that although we depict the rod with some thickness in the figures, for mathematical purposes we assume the rod is thin enough to be treated as a one-dimensional object.

> FIGURE {fig:CNX_Calc_Figure_06_05_001} src=../../media/CNX_Calc_Figure_06_05_001.jpg
> alt: This figure has the x and y axes. On the x-axis is a cylinder, beginning at x=a and ending at x=b.
> caption: We can calculate the mass of a thin rod oriented along the $x\text{-axis}$ by integrating its density function.

If the rod has constant density $ρ,$ given in terms of mass per unit length, then the mass of the rod is just the product of the density and the length of the rod: $(b-a)ρ.$ If the density of the rod is not constant, however, the problem becomes a little more challenging. When the density of the rod varies from point to point, we use a linear {term:density function}, $ρ(x),$ to denote the density of the rod at any point, $x.$ Let $ρ(x)$ be an integrable linear density function. Now, for $i=0,1,2\text{,…},n$ let $P=\{{x}_{i}\}$ be a regular partition of the interval $[a,b],$ and for $i=1,2\text{,…},n$ choose an arbitrary point ${x}_{i}^{*}\in [{x}_{i-1},{x}_{i}].$ [ref:CNX_Calc_Figure_06_05_002] shows a representative segment of the rod.

> FIGURE {fig:CNX_Calc_Figure_06_05_002} src=../../media/CNX_Calc_Figure_06_05_002.jpg
> alt: This figure has the x and y axes. On the x-axis is a cylinder, beginning at x=a and ending at x=b. The cylinder has been divided into segments. One segment in the middle begins at xsub(i-1) and ends at xsubi.
> caption: A representative segment of the rod.

The mass ${m}_{i}$ of the segment of the rod from ${x}_{i-1}$ to ${x}_{i}$ is approximated by

${m}_{i}\approx ρ({x}_{i}^{*})({x}_{i}-{x}_{i-1})=ρ({x}_{i}^{*})\text{Δ}x.$  {eq:fs-id1167793627610}

Adding the masses of all the segments gives us an approximation for the mass of the entire rod:

$m={\displaystyle \sum_{i=1}^{n} {m}_{i}}\approx {\displaystyle \sum_{i=1}^{n} ρ}({x}_{i}^{*})\text{Δ}x.$  {eq:fs-id1167794223035}

This is a Riemann sum. Taking the limit as $n\to \infty ,$ we get an expression for the exact mass of the rod:

$m=\lim_{n\to \infty}\overset{n}{\underset{i=1}{{\displaystyle \sum}}}ρ({x}_{i}^{*})\text{Δ}x={\displaystyle \int_{a}^{b}ρ}(x)dx.$  {eq:fs-id1167794331133}

We state this result in the following theorem.

:::note [theorem] Mass–Density Formula of a One-Dimensional Object
Given a thin rod oriented along the $x\text{-axis}$ over the interval $[a,b],$ let $ρ(x)$ denote a linear density function giving the density of the rod at a point *x* in the interval. Then the mass of the rod is given by

$$ m={\displaystyle \int_{a}^{b}ρ}(x)dx. $$  {eq:fs-id1167794003941}

:::
We apply this theorem in the next example.

:::example {ex:fs-id1167793924292} Calculating Mass from Linear Density

:::exercise {fs-id1167794004815} type= 
PROBLEM:
Consider a thin rod oriented on the *x*-axis over the interval $[\pi \text{/}2,\pi ].$ If the density of the rod is given by $ρ(x)=\text{sin}\;x,$ what is the mass of the rod?
SOLUTION:
Applying [ref:fs-id1167794003941] directly, we have

$m={\displaystyle \int_{a}^{b}ρ}(x)dx={{\displaystyle \int}}_{\pi \text{/}2}^{\pi}\text{sin}\;x\;dx={\text{−}\text{cos}\;x|}_{\pi \text{/}2}^{\pi}=1.$  {eq:fs-id1167793269319}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794136385} type= 
PROBLEM:
Consider a thin rod oriented on the *x*-axis over the interval $[1,3].$ If the density of the rod is given by $ρ(x)=2{x}^{2}+3,$ what is the mass of the rod?
SOLUTION:
$70\text{/}3$
COMMENTARY: Hint
Use the process from the previous example.
:::
:::
We now extend this concept to find the mass of a two-dimensional disk of radius $r.$ As with the rod we looked at in the one-dimensional case, here we assume the disk is thin enough that, for mathematical purposes, we can treat it as a two-dimensional object. We assume the density is given in terms of mass per unit area (called {index:*area density*}), and further assume the density varies only along the disk’s radius (called {index:*radial density*}). We orient the disk in the $xy\text{-plane,}$ with the center at the origin. Then, the density of the disk can be treated as a function of $x,$ denoted $ρ(x).$ We assume $ρ(x)$ is integrable. Because density is a function of $x,$ we partition the interval from $[0,r]$ along the $x\text{-axis}.$ For $i=0,1,2\text{,…},n,$ let $P=\{{x}_{i}\}$ be a regular partition of the interval $[0,r],$ and for $i=1,2\text{,…},n,$ choose an arbitrary point ${x}_{i}^{*}\in [{x}_{i-1},{x}_{i}].$ Now, use the partition to break up the disk into thin (two-dimensional) washers. A disk and a representative washer are depicted in the following figure.

> FIGURE {fig:CNX_Calc_Figure_06_05_003} src=../../media/CNX_Calc_Figure_06_05_003.jpg
> alt: This figure has two images. The first is labeled “a” and is a circle with radius r. The center of the circle is labeled 0. The circle also has the positive x-axis beginning at 0, extending through the circle. The second figure is labeled “b”. It has two concentric circles with center at 0 and the x-axis extending out from 0. The concentric circles form a washer. The width of the washer is from xsub(i-1) to xsubi and is labeled delta x.
> caption: (a) A thin disk in the *xy*-plane. (b) A representative washer.

We now approximate the density and area of the washer to calculate an approximate mass, ${m}_{i}.$ Note that the area of the washer is given by

$\begin{array}{rl}{A}_{i} & =\pi {({x}_{i})}^{2}-\pi {({x}_{i-1})}^{2} \\ & =\pi [{x}_{i}^{2}-{x}_{i-1}^{2}] \\ & =\pi ({x}_{i}+{x}_{i-1})({x}_{i}-{x}_{i-1}) \\ & =\pi ({x}_{i}+{x}_{i-1})\text{Δ}x.\end{array}$  {eq:fs-id1167793787727}

You may recall that we had an expression similar to this when we were computing volumes by shells. As we did there, we use ${x}_{i}^{*}\approx ({x}_{i}+{x}_{i-1})\text{/}2$ to approximate the average radius of the washer. We obtain

${A}_{i}=\pi ({x}_{i}+{x}_{i-1})\text{Δ}x\approx 2\pi {x}_{i}^{*}\text{Δ}x.$  {eq:fs-id1167793266910}

Using $ρ({x}_{i}^{*})$ to approximate the density of the washer, we approximate the mass of the washer by

${m}_{i}\approx 2\pi {x}_{i}^{*}ρ({x}_{i}^{*})\text{Δ}x.$  {eq:fs-id1167793918720}

Adding up the masses of the washers, we see the mass $m$ of the entire disk is approximated by

$m={\displaystyle \sum_{i=1}^{n} {m}_{i}}\approx {\displaystyle \sum_{i=1}^{n} 2}\pi {x}_{i}^{*}ρ({x}_{i}^{*})\text{Δ}x.$  {eq:fs-id1167793384645}

We again recognize this as a Riemann sum, and take the limit as $n\to \infty .$ This gives us

$m=\lim_{n\to \infty}\overset{n}{\underset{i=1}{{\displaystyle \sum}}}2\pi {x}_{i}^{*}ρ({x}_{i}^{*})\text{Δ}x={\displaystyle \int_{0}^{r}2}\pi xρ(x)dx.$  {eq:fs-id1167793930066}

We summarize these findings in the following theorem.

:::note [theorem] Mass–Density Formula of a Circular Object
Let $ρ(x)$ be an integrable function representing the radial density of a disk of radius $r.$ Then the mass of the disk is given by

$$ m={\displaystyle \int_{0}^{r}2}\pi xρ(x)dx. $$  {eq:fs-id1167793469833}

:::

:::example {ex:fs-id1167793912188} Calculating Mass from Radial Density

:::exercise {fs-id1167793912190} type= 
PROBLEM:
Let $ρ(x)=\sqrt{x}$ represent the radial density of a disk. Calculate the mass of a disk of radius 4.
SOLUTION:
Applying the formula, we find

$\begin{array}{rl}m & ={\displaystyle \int_{0}^{r}2}\pi xρ(x)dx \\ & ={\displaystyle \int_{0}^{4}2}\pi x\sqrt{x}dx=2\pi {\displaystyle \int_{0}^{4}{x}^{3\text{/}2}}dx \\ & =2\pi {\frac{2}{5}{x}^{5\text{/}2}|}_{0}^{4}=\frac{4\pi}{5}[32]=\frac{128\pi}{5}.\end{array}$  {eq:fs-id1167793510552}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793563678} type= 
PROBLEM:
Let $ρ(x)=3x+2$ represent the radial density of a disk. Calculate the mass of a disk of radius 2.
SOLUTION:
$24\pi$
COMMENTARY: Hint
Use the process from the previous example.
:::
:::

## Work Done by a Force
We now consider work. In physics, work is related to force, which is often intuitively defined as a push or pull on an object. When a force moves an object, we say the force does work on the object. In other words, work can be thought of as the amount of energy it takes to move an object. According to physics, when we have a constant force, work can be expressed as the product of force and distance.
In the English system, the unit of force is the pound and the unit of distance is the foot, so work is given in foot-pounds. In the metric system, kilograms and meters are used. One newton is the force needed to accelerate $1$ kilogram of mass at the rate of $1$ m/sec<sup>2</sup>. Thus, the most common unit of work is the newton-meter. This same unit is also called the {index:*joule*}. Both are defined as kilograms times meters squared over seconds squared $(\text{kg}\cdot {\text{m}}^{2}\text{/}{\text{s}}^{2}).$
When we have a constant force, things are pretty easy. It is rare, however, for a force to be constant. The work done to compress (or elongate) a spring, for example, varies depending on how far the spring has already been compressed (or stretched). We look at springs in more detail later in this section.
Suppose we have a variable force $F(x)$ that moves an object in a positive direction along the *x*-axis from point $a$ to point $b.$ To calculate the work done, we partition the interval $[a,b]$ and estimate the work done over each subinterval. So, for $i=0,1,2\text{,…},n,$ let $P=\{{x}_{i}\}$ be a regular partition of the interval $[a,b],$ and for $i=1,2\text{,…},n,$ choose an arbitrary point ${x}_{i}^{*}\in [{x}_{i-1},{x}_{i}].$ To calculate the work done to move an object from point ${x}_{i-1}$ to point ${x}_{i},$ we assume the force is roughly constant over the interval, and use $F({x}_{i}^{*})$ to approximate the force. The work done over the interval $[{x}_{i-1},{x}_{i}],$ then, is given by

${W}_{i}\approx F({x}_{i}^{*})({x}_{i}-{x}_{i-1})=F({x}_{i}^{*})\text{Δ}x.$  {eq:fs-id1167794065392}

Therefore, the work done over the interval $[a,b]$ is approximately

$W={\displaystyle \sum_{i=1}^{n} {W}_{i}}\approx {\displaystyle \sum_{i=1}^{n} F}({x}_{i}^{*})\text{Δ}x.$  {eq:fs-id1167794003046}

Taking the limit of this expression as $n\to \infty$ gives us the exact value for work:

$W=\lim_{n\to \infty}{\displaystyle \sum_{i=1}^{n} F}({x}_{i}^{*})\text{Δ}x={\displaystyle \int_{a}^{b}F}(x)dx.$  {eq:fs-id1167794212535}

Thus, we can define work as follows.

:::note [definition] Definition
If a variable force $F(x)$ moves an object in a positive direction along the *x*-axis from point *a* to point *b*, then the {term:work} done on the object is

$$ W={\displaystyle \int_{a}^{b}F}(x)dx. $$  {eq:fs-id1167793879581}

:::
Note that if *F* is constant, the integral evaluates to $F\cdot (b-a)=F\cdot d,$ which is the formula we stated at the beginning of this section.
Now let’s look at the specific example of the work done to compress or elongate a spring. Consider a block attached to a horizontal spring. The block moves back and forth as the spring stretches and compresses. Although in the real world we would have to account for the force of friction between the block and the surface on which it is resting, we ignore friction here and assume the block is resting on a frictionless surface. When the spring is at its natural length (at rest), the system is said to be at equilibrium. In this state, the spring is neither elongated nor compressed, and in this equilibrium position the block does not move until some force is introduced. We orient the system such that $x=0$ corresponds to the equilibrium position (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_06_05_004} src=../../media/CNX_Calc_Figure_06_05_004.jpg
> alt: This figure has three images. The first is the x-axis. On the left is a vertical block. Attached to the block is a spring that ends at the y-axis and has the label x=0. The image is labeled equilibrium. The second image is the same spring that ends before the y-axis. It has x<0 and is labeled compressed. The third image is the same spring that is beyond the y-axis. It has x>0 and is labeled stretched.
> caption: A block attached to a horizontal spring at equilibrium, compressed, and elongated.

According to {term:Hooke’s law}, the force required to compress or stretch a spring from an equilibrium position is given by $F(x)=kx,$ for some constant $k.$ The value of $k$ depends on the physical characteristics of the spring. The constant $k$ is called the {index:*spring constant*} and is always positive. We can use this information to calculate the work done to compress or elongate a spring, as shown in the following example.

:::example {ex:fs-id1167793298896} The Work Required to Stretch or Compress a Spring

:::exercise {fs-id1167794099463} type= 
PROBLEM:
Suppose it takes a force of $10$ N (in the negative direction) to compress a spring $0.2$ m from the equilibrium position. How much work is done to stretch the spring $0.5$ m from the equilibrium position?
SOLUTION:
First find the spring constant, $k.$ When $x=−0.2,$ we know $F(x)=−10,$ so

$\begin{array}{rll}F(x) & = & kx \\ -10 & = & k(−0.2) \\ k & = & 50\end{array}$  {eq:fs-id1167793619889}

and $F(x)=50x.$ Then, to calculate work, we integrate the force function, obtaining

$W={\displaystyle \int_{a}^{b}F}(x)dx={\displaystyle \int_{0}^{0.5}5}0x\;dx={25{x}^{2}|}_{0}^{0.5}=6.25.$  {eq:fs-id1167794038347}

The work done to stretch the spring is $6.25$ J.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793929416} type= 
PROBLEM:
Suppose it takes a force of $8$ lb to stretch a spring $6$ in. from the equilibrium position. How much work is done to stretch the spring $1$ ft from the equilibrium position?
SOLUTION:
$8$ ft-lb
COMMENTARY: Hint
Use the process from the previous example. Be careful with units.
:::
:::

## Work Done in Pumping
Consider the work done to pump water (or some other liquid) out of a tank. Pumping problems are a little more complicated than spring problems because many of the calculations depend on the shape and size of the tank. In addition, instead of being concerned about the work done to move a single mass, we are looking at the work done to move a volume of water, and it takes more work to move the water from the bottom of the tank than it does to move the water from the top of the tank.
We examine the process in the context of a cylindrical tank, then look at a couple of examples using tanks of different shapes. Assume a cylindrical tank of radius $4$ m and height $10$ m is filled to a depth of 8 m. How much work does it take to pump all the water over the top edge of the tank?
The first thing we need to do is define a frame of reference. We let $x$ represent the vertical distance below the top of the tank. That is, we orient the $x\text{-axis}$ vertically, with the origin at the top of the tank and the downward direction being positive (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_06_05_005} src=../../media/CNX_Calc_Figure_06_05_005.jpg
> alt: This figure is a right circular cylinder that is vertical. It represents a tank of water. The radius of the cylinder is 4 m, the height of the cylinder is 10 m. The height of the water inside the cylinder is 8 m. There is also a horizontal line on top of the tank representing the x=0. A line is drawn vertical beside the cylinder with a downward arrow labeled x.
> caption: How much work is needed to empty a tank partially filled with water?

Using this coordinate system, the water extends from $x=2$ to $x=10.$ Therefore, we partition the interval $[2,\;10]$ and look at the work required to lift each individual “layer” of water. So, for $i=0,1,2\text{,…},n,$ let $P=\{{x}_{i}\}$ be a regular partition of the interval $[2,\;10],$ and for $i=1,2\text{,…},n,$ choose an arbitrary point ${x}_{i}^{*}\in [{x}_{i-1},{x}_{i}].$ [ref:CNX_Calc_Figure_06_05_006] shows a representative layer.

> FIGURE {fig:CNX_Calc_Figure_06_05_006} src=../../media/CNX_Calc_Figure_06_05_006.jpg
> alt: This figure is a right circular cylinder representing a tank of water. Inside of the cylinder is a layer of water with thickness delta x. The thickness begins at xsub(i-1) and ends at xsubi.
> caption: A representative layer of water.

In pumping problems, the force required to lift the water to the top of the tank is the force required to overcome gravity, so it is equal to the weight of the water. Given that the weight-density of water is $9800$ N/m<sup>3</sup>, or $62.4$ lb/ft<sup>3</sup>, calculating the volume of each layer gives us the weight. In this case, we have

$V=\pi {(4)}^{2}\text{Δ}x=16\pi \text{Δ}x.$  {eq:fs-id1167793506225}

Then, the force needed to lift each layer is

$F=9800\cdot 16\pi \text{Δ}x=156,800\pi \text{Δ}x.$  {eq:fs-id1167793277650}

Note that this step becomes a little more difficult if we have a noncylindrical tank. We look at a noncylindrical tank in the next example.
We also need to know the distance the water must be lifted. Based on our choice of coordinate systems, we can use ${x}_{i}^{*}$ as an approximation of the distance the layer must be lifted. Then the work to lift the $i\text{th}$ layer of water ${W}_{i}$ is approximately

${W}_{i}\approx 156,800\pi {x}_{i}^{*}\text{Δ}x.$  {eq:fs-id1167794165423}

Adding the work for each layer, we see the approximate work to empty the tank is given by

$W=\overset{n}{\underset{i=1}{{\displaystyle \sum}}}{W}_{i}\approx \overset{n}{\underset{i=1}{{\displaystyle \sum}}}156,800\pi {x}_{i}^{*}\text{Δ}x.$  {eq:fs-id1167793473606}

This is a Riemann sum, so taking the limit as $n\to \infty ,$ we get

$\begin{array}{rl}W & =\lim_{n\to \infty}\overset{n}{\underset{i=1}{{\displaystyle \sum}}}156,800\pi {x}_{i}^{*}\text{Δ}x \\ & =156,800\pi {\displaystyle \int_{2}^{10}x}dx \\ & =156,800\pi {[\frac{{x}^{2}}{2}]\;|}_{2}^{10}=7,526,400\pi \approx 23,644,883.\end{array}$  {eq:fs-id1167793355091}

The work required to empty the tank is approximately 23,650,000 J.
For pumping problems, the calculations vary depending on the shape of the tank or container. The following problem-solving strategy lays out a step-by-step process for solving pumping problems.

:::note [problem-solving] Solving Pumping Problems
1. Sketch a picture of the tank and select an appropriate frame of reference.
2. Calculate the volume of a representative layer of water.
3. Multiply the volume by the weight-density of water to get the force.
4. Calculate the distance the layer of water must be lifted.
5. Multiply the force and distance to get an estimate of the work needed to lift the layer of water.
6. Sum the work required to lift all the layers. This expression is an estimate of the work required to pump out the desired amount of water, and it is in the form of a Riemann sum.
7. Take the limit as $n\to \infty$ and evaluate the resulting integral to get the exact work required to pump out the desired amount of water.
:::
We now apply this problem-solving strategy in an example with a noncylindrical tank.

:::example {ex:fs-id1167793505375} A Pumping Problem with a Noncylindrical Tank

:::exercise {fs-id1167793505377} type= 
PROBLEM:
Assume a tank in the shape of an inverted cone, with height $12$ ft and base radius $4$ ft. The tank is full to start with, and water is pumped over the upper edge of the tank until the height of the water remaining in the tank is $4$ ft. How much work is required to pump out that amount of water?
SOLUTION:
The tank is depicted in [ref:CNX_Calc_Figure_06_05_007]. As we did in the example with the cylindrical tank, we orient the $x\text{-axis}$ vertically, with the origin at the top of the tank and the downward direction being positive (step 1).

> FIGURE {fig:CNX_Calc_Figure_06_05_007} src=../../media/CNX_Calc_Figure_06_05_007.jpg
> alt: This figure is an upside-down cone. The cone has an axis through the center. The top of the cone on the axis is labeled x=0.
> caption: A water tank in the shape of an inverted cone.

The tank starts out full and ends with $4$ ft of water left, so, based on our chosen frame of reference, we need to partition the interval $[0,8].$ Then, for $i=0,1,2\text{,…},n,$ let $P=\{{x}_{i}\}$ be a regular partition of the interval $[0,8],$ and for $i=1,2\text{,…},n,$ choose an arbitrary point ${x}_{i}^{*}\in [{x}_{i-1},{x}_{i}].$ We can approximate the volume of a layer by using a disk, then use similar triangles to find the radius of the disk (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_06_05_008} src=../../media/CNX_Calc_Figure_06_05_008.jpg
> alt: This figure has two images. The first has the x-axis. Below the axis, on a slant is a line segment extending up to the x-axis. Beside the line segment is a horizontal right circular cylinder. The second image has a triangle. The right triangle mirrors the first image with the hypotenuse the line segment in the first image. The top of the triangle is 4 units. the length of the vertical side is 12 units. The vertical side is also divided into two parts; the first is xsubi, the second is 12-xsubi. It is divided at the level where the first image has the cylinder.
> caption: Using similar triangles to express the radius of a disk of water.

From properties of similar triangles, we have

$\begin{array}{rll}\frac{{r}_{i}}{12-{x}_{i}^{*}} & = & \frac{4}{12}=\frac{1}{3} \\ 3{r}_{i} & = & 12-{x}_{i}^{*} \\ {r}_{i} & = & \frac{12-{x}_{i}^{*}}{3} \\ & = & 4-\frac{{x}_{i}^{*}}{3}.\end{array}$  {eq:fs-id1167793221547}

Then the volume of the disk is

${V}_{i}=\pi {(4-\frac{{x}_{i}^{*}}{3})}^{2}\text{Δ}x\;\text{(step 2).}$  {eq:fs-id1167793419287}

The weight-density of water is $62.4$ lb/ft<sup>3</sup>, so the force needed to lift each layer is approximately

${F}_{i}\approx 62.4\pi {(4-\frac{{x}_{i}^{*}}{3})}^{2}\text{Δ}x\;\text{(step 3).}$  {eq:fs-id1167793287436}

Based on the diagram, the distance the water must be lifted is approximately ${x}_{i}^{*}$ feet (step 4), so the approximate work needed to lift the layer is

${W}_{i}\approx 62.4\pi {x}_{i}^{*}{(4-\frac{{x}_{i}^{*}}{3})}^{2}\text{Δ}x\;\text{(step 5).}$  {eq:fs-id1167793929624}

Summing the work required to lift all the layers, we get an approximate value of the total work:

$W=\overset{n}{\underset{i=1}{{\displaystyle \sum}}}{W}_{i}\approx \overset{n}{\underset{i=1}{{\displaystyle \sum}}}62.4\pi {x}_{i}^{*}{(4-\frac{{x}_{i}^{*}}{3})}^{2}\text{Δ}x\;\text{(step 6).}$  {eq:fs-id1167793570048}

Taking the limit as $n\to \infty ,$ we obtain

$\begin{array}{rl}W & =\lim_{n\to \infty}\overset{n}{\underset{i=1}{{\displaystyle \sum}}}62.4\pi {x}_{i}^{*}{(4-\frac{{x}_{i}^{*}}{3})}^{2}\text{Δ}x \\ & ={\displaystyle \int_{0}^{8}62.4\pi x{(4-\frac{x}{3})}^{2}dx} \\ & =62.4\pi {\displaystyle \int_{0}^{8}x(16-\frac{8x}{3}+\frac{{x}^{2}}{9})dx}=62.4\pi {\displaystyle \int_{0}^{8}(16x-\frac{8{x}^{2}}{3}+\frac{{x}^{3}}{9})dx} \\ & =62.4\pi {[8{x}^{2}-\frac{8{x}^{3}}{9}+\frac{{x}^{4}}{36}]\;|}_{0}^{8}=10,649.6\pi \approx 33,456.7.\end{array}$  {eq:fs-id1167793400833}

It takes approximately $33,450$ ft-lb of work to empty the tank to the desired level.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793553742} type= 
PROBLEM:
A tank is in the shape of an inverted cone, with height $10$ ft and base radius 6 ft. The tank is filled to a depth of 8 ft to start with, and water is pumped over the upper edge of the tank until 3 ft of water remain in the tank. How much work is required to pump out that amount of water?
SOLUTION:
Approximately $43,255.2$ ft-lb
COMMENTARY: Hint
Use the process from the previous example.
:::
:::

## Hydrostatic Force and Pressure
In this last section, we look at the force and pressure exerted on an object submerged in a liquid. In the English system, force is measured in pounds. In the metric system, it is measured in newtons. Pressure is force per unit area, so in the English system we have pounds per square foot (or, perhaps more commonly, pounds per square inch, denoted psi). In the metric system we have newtons per square meter, also called {index:*pascals*}.
Let’s begin with the simple case of a plate of area $A$ submerged horizontally in water at a depth *s* ([ref:CNX_Calc_Figure_06_05_009]). Then, the force exerted on the plate is simply the weight of the water above it, which is given by $F=ρAs,$ where $ρ$ is the weight density of water (weight per unit volume). To find the {term:hydrostatic pressure}—that is, the pressure exerted by water on a submerged object—we divide the force by the area. So the pressure is $p=F\text{/}A=ρs.$

> FIGURE {fig:CNX_Calc_Figure_06_05_009} src=../../media/CNX_Calc_Figure_06_05_009.jpg
> alt: This image has a circular plate submerged in water. The plate is labeled A and the depth of the water is labeled s.
> caption: A plate submerged horizontally in water.

By {index:Pascal’s principle}, the pressure at a given depth is the same in all directions, so it does not matter if the plate is submerged horizontally or vertically. So, as long as we know the depth, we know the pressure. We can apply Pascal’s principle to find the force exerted on surfaces, such as dams, that are oriented vertically. We cannot apply the formula $F=ρAs$ directly, because the depth varies from point to point on a vertically oriented surface. So, as we have done many times before, we form a partition, a Riemann sum, and, ultimately, a definite integral to calculate the force.
Suppose a thin plate is submerged in water. We choose our frame of reference such that the *x*-axis is oriented vertically, with the downward direction being positive, and point $x=0$ corresponding to a logical reference point. Let $s(x)$ denote the depth at point *x*. Note we often let $x=0$ correspond to the surface of the water. In this case, depth at any point is simply given by $s(x)=x.$ However, in some cases we may want to select a different reference point for $x=0,$ so we proceed with the development in the more general case. Last, let $w(x)$ denote the width of the plate at the point $x.$
Assume the top edge of the plate is at point $x=a$ and the bottom edge of the plate is at point $x=b.$ Then, for $i=0,1,2\text{,…},n,$ let $P=\{{x}_{i}\}$ be a regular partition of the interval $[a,b],$ and for $i=1,2\text{,…},n,$ choose an arbitrary point ${x}_{i}^{*}\in [{x}_{i-1},{x}_{i}].$ The partition divides the plate into several thin, rectangular strips (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_06_05_010} src=../../media/CNX_Calc_Figure_06_05_010.jpg
> alt: This image is the overhead view of a submerged circular plate. The x-axis is to the side of the plate. The plate’s diameter goes from x=a to x=b. There is a strip in the middle of the plate with thickness of delta x. On the axis this thickness begins at x=xsub(i-1) and ends at x=xsubi. The length of the strip in the plate is labeled w(csubi).
> caption: A thin plate submerged vertically in water.

Let’s now estimate the force on a representative strip. If the strip is thin enough, we can treat it as if it is at a constant depth, $s({x}_{i}^{*}).$ We then have

${F}_{i}=ρAs=ρ[w({x}_{i}^{*})\text{Δ}x]s({x}_{i}^{*}).$  {eq:fs-id1167793952122}

Adding the forces, we get an estimate for the force on the plate:

$F\approx {\displaystyle \sum_{i=1}^{n} {F}_{i}}=\overset{n}{\underset{i=1}{{\displaystyle \sum}}}ρ[w({x}_{i}^{*})\text{Δ}x]s({x}_{i}^{*}).$  {eq:fs-id1167793584539}

This is a Riemann sum, so taking the limit gives us the exact force. We obtain

$$ F=\lim_{n\to \infty}\overset{n}{\underset{i=1}{{\displaystyle \sum}}}ρ[w({x}_{i}^{*})\text{Δ}x]s({x}_{i}^{*})={\displaystyle \int_{a}^{b}ρ}w(x)s(x)dx. $$  {eq:fs-id1167794057937}

Evaluating this integral gives us the force on the plate. We summarize this in the following problem-solving strategy.

:::note [problem-solving] Finding Hydrostatic Force
1. Sketch a picture and select an appropriate frame of reference. (Note that if we select a frame of reference other than the one used earlier, we may have to adjust [ref:fs-id1167794057937] accordingly.)
2. Determine the depth and width functions, $s(x)$ and $w(x).$
3. Determine the weight-density of whatever liquid with which you are working. The weight-density of water is $62.4$ lb/ft<sup>3</sup>, or 9800 N/m<sup>3</sup>.
4. Use the equation to calculate the total force.
:::

:::example {ex:fs-id1167793504251} Finding Hydrostatic Force

:::exercise {fs-id1167793504253} type= 
PROBLEM:
A water trough 15 ft long has ends shaped like inverted isosceles triangles, with base 8 ft and height 3 ft. Find the force on one end of the trough if the trough is full of water.
SOLUTION:
[ref:CNX_Calc_Figure_06_05_011] shows the trough and a more detailed view of one end.

> FIGURE {fig:CNX_Calc_Figure_06_05_011} src=../../media/CNX_Calc_Figure_06_05_011.jpg
> alt: This figure has two images. The first is a water trough with rectangular sides. The length of the trough is 15 feet, the depth is 3 feet, and the width is 8 feet. The second image is a cross section of the trough. It is a triangle. The top has length of 8 feet and the sides have length 5 feet. The altitude is labeled with 3 feet.
> caption: (a) A water trough with a triangular cross-section. (b) Dimensions of one end of the water trough.

Select a frame of reference with the $x\text{-axis}$ oriented vertically and the downward direction being positive. Select the top of the trough as the point corresponding to $x=0$ (step 1). The depth function, then, is $s(x)=x.$ Using similar triangles, we see that $w(x)=8-(8\text{/}3)x$ (step 2). Now, the weight density of water is $62.4$ lb/ft<sup>3</sup> (step 3), so applying [ref:fs-id1167794057937], we obtain

$\begin{array}{rl}F & ={\displaystyle \int_{a}^{b}ρ}w(x)s(x)dx \\ & ={\displaystyle \int_{0}^{3}62.4(8-\frac{8}{3}x)x\;dx}=62.4{\displaystyle \int_{0}^{3}(8x-\frac{8}{3}{x}^{2})dx} \\ & =62.4{[4{x}^{2}-\frac{8}{9}{x}^{3}]\;|}_{0}^{3}=748.8.\end{array}$  {eq:fs-id1167794054206}

The water exerts a force of 748.8 lb on the end of the trough (step 4).
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167793445724} type= 
PROBLEM:
A water trough 12 m long has ends shaped like inverted isosceles triangles, with base 6 m and height 4 m. Find the force on one end of the trough if the trough is full of water.
SOLUTION:
$156,800$ N
COMMENTARY: Hint
Follow the problem-solving strategy and the process from the previous example.
:::
:::

:::example {ex:fs-id1167793421214} Chapter Opener: Finding Hydrostatic Force

:::exercise {fs-id1167793421216} type= 
PROBLEM:
We now return our attention to the {index:Hoover Dam}, mentioned at the beginning of this chapter. The actual dam is arched, rather than flat, but we are going to make some simplifying assumptions to help us with the calculations. Assume the face of the Hoover Dam is shaped like an isosceles trapezoid with lower base $750$ ft, upper base $1250$ ft, and height $750$ ft (see the following figure).

> IMAGE {img:fs-id1167793562324} src=../../media/CNX_Calc_Figure_06_05_012.jpg
> alt: This figure has two images. The first is a picture of a dam. The second image beside the dam is a trapezoidal figure representing the dimensions of the dam. The top is 1250 feet, the bottom is 750 feet. The height is 750 feet.

When the reservoir is full, Lake Mead’s maximum depth is about 530 ft, and the surface of the lake is about 10 ft below the top of the dam (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_06_05_013} src=../../media/CNX_Calc_Figure_06_05_013.jpg
> alt: This figure is a trapezoid with the longer side on top. There is a smaller trapezoid inside the first with height labeled 530 feet. It is also 10 feet below the top of the larger trapezoid.
> caption: A simplified model of the Hoover Dam with assumed dimensions.

a. Find the force on the face of the dam when the reservoir is full.
b. The southwest United States has been experiencing a drought, and the surface of Lake Mead is about 125 ft below where it would be if the reservoir were full. What is the force on the face of the dam under these circumstances?
SOLUTION:
a. We begin by establishing a frame of reference. As usual, we choose to orient the $x\text{-axis}$ vertically, with the downward direction being positive. This time, however, we are going to let $x=0$ represent the top of the dam, rather than the surface of the water. When the reservoir is full, the surface of the water is $10$ ft below the top of the dam, so $s(x)=x-10$ (see the following figure).

> FIGURE {fig:CNX_Calc_Figure_06_05_014} src=../../media/CNX_Calc_Figure_06_05_014.jpg
> alt: This figure is a trapezoid with the longer side on top. There is a smaller trapezoid inside the first with height labeled s(x)=x-10. It represents the depth of the water. It is also 10 feet below the top of the larger trapezoid. The top of the larger trapezoid is at x=0.
> caption: We first choose a frame of reference.

To find the width function, we again turn to similar triangles as shown in the figure below.

> FIGURE {fig:CNX_Calc_Figure_06_05_015} src=../../media/CNX_Calc_Figure_06_05_015.jpg
> alt: This figure has two images. The first is a trapezoid with larger side on the top. The length of the top is divided into 3 measures. The first measure is 250 feet, the second is 750 feet, and the third is 250 feet. The height of the trapezoid is 750 feet. The length of the bottom is 750 feet. Inside of the trapezoid the width is labeled w(x). Inside if one of the triangular sides is the width r. The second image is the same trapezoid. It has the height labeled as 750 feet. Inside the trapezoid it has the height divided into two segments. The first is labeled x, and the second is labeled 750-x. On the side of the trapezoid a triangle has been formed by a vertical line from the bottom side to the top. Inside of the triangle is a horizontal line segment labeled r.
> caption: We use similar triangles to determine a function for the width of the dam. (a) Assumed dimensions of the dam; (b) highlighting the similar triangles.

From the figure, we see that $w(x)=750+2r.$ Using properties of similar triangles, we get $r=250-(1\text{/}3)x.$ Thus,

$w(x)=1250-\frac{2}{3}x\;\text{(step 2).}$  {eq:fs-id1167793543486}

Using a weight-density of $62.4$ lb/ft<sup>3</sup> (step 3) and applying [ref:fs-id1167794057937], we get

$\begin{array}{rl}F & ={\displaystyle \int_{a}^{b}ρ}w(x)s(x)dx \\ & ={\displaystyle \int_{10}^{540}62.4(1250-\frac{2}{3}x)(x-10)dx}=62.4{\displaystyle \int_{10}^{540}-\frac{2}{3}[{x}^{2}-1885x+18750]}dx \\ & =−62.4(\frac{2}{3}){[\frac{{x}^{3}}{3}-\frac{1885{x}^{2}}{2}+18750x]\;|}_{10}^{540}\approx 8,832,245,000\;\text{lb}=4,416,122.5\;\text{t}\text{.}\end{array}$  {eq:fs-id1167793355151}

Note the change from pounds to tons $(2000$ lb = $1$ ton) (step 4).
b. Notice that the drought changes our depth function, $s(x),$ and our limits of integration. We have $s(x)=x-135.$ The lower limit of integration is $135.$ The upper limit remains $540.$ Evaluating the integral, we get

$\begin{array}{rl}F & ={\displaystyle \int_{a}^{b}ρ}w(x)s(x)dx \\ & ={\displaystyle \int_{135}^{540}62.4(1250-\frac{2}{3}x)(x-135)dx} \\ & =−62.4(\frac{2}{3}){\displaystyle \int_{135}^{540}(x-1875)(x-135)dx}=−62.4(\frac{2}{3}){\displaystyle \int_{135}^{540}({x}^{2}-2010x+253125)dx} \\ & =−62.4(\frac{2}{3}){[\frac{{x}^{3}}{3}-1005{x}^{2}+253125x]\;|}_{135}^{540}\approx 5,015,230,000\;\text{lb}=\;2,507,615\;\text{t}\text{.}\end{array}$  {eq:fs-id1167794095323}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1167794138217} type= 
PROBLEM:
When the reservoir is at its average level, the surface of the water is about 50 ft below where it would be if the reservoir were full. What is the force on the face of the dam under these circumstances?
SOLUTION:
Approximately 7,164,520,000 lb or 3,582,260 t
COMMENTARY: Hint
Change the depth function, $s(x),$ and the limits of integration.
:::
:::

:::note [media-2] 
To learn more about Hoover Dam, see this [article](http://www.openstax.org/l/20_HooverDam) published by the History Channel.
:::

## Key Concepts {section:key-concepts}
- Several physical applications of the definite integral are common in engineering and physics.
- Definite integrals can be used to determine the mass of an object if its density function is known.
- Work can also be calculated from integrating a force function, or when counteracting the force of gravity, as in a pumping problem.
- Definite integrals can also be used to calculate the force exerted on an object submerged in a liquid.

## Key Equations {section:key-equations}

> TABLE {tab:eip-508} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Mass of a one-dimensional object** | $m={\displaystyle \int_{a}^{b}ρ}(x)dx$ |
| **Mass of a circular object** | $m={\displaystyle \int_{0}^{r}2}\pi xρ(x)dx$ |
| **Work done on an object** | $W={\displaystyle \int_{a}^{b}F}(x)dx$ |
| **Hydrostatic force on a plate** | $F={\displaystyle \int_{a}^{b}ρ}w(x)s(x)dx$ |

##  {section:section-exercises}
For the following exercises, find the work done.

:::exercise {fs-id1167793718514} type= 
PROBLEM:
Find the work done when a constant force $F=12$ lb moves a chair from $x=0.9$ to $x=1.1$ ft.
:::

:::exercise {fs-id1167793718563} type= 
PROBLEM:
How much work is done when a person lifts a $50$ lb box of comics onto a truck that is $3$ ft off the ground?
SOLUTION:
$150$ ft-lb
:::

:::exercise {fs-id1167793590323} type= 
PROBLEM:
What is the work done lifting a $20$ kg child from the floor to a height of $2$ m? (Note that a mass of$1$ kg weighs $9.8$ N near the surface of the Earth.)
:::

:::exercise {fs-id1167793590363} type= 
PROBLEM:
Find the work done when you push a box along the floor $2$ m, when you apply a constant force of $F=100\;\text{N}.$
SOLUTION:
$200\;\text{J}$
:::

:::exercise {fs-id1167793705306} type= 
PROBLEM:
Compute the work done for a force $F=12\text{/}{x}^{2}$ N from $x=1$ to $x=2$ m.
:::

:::exercise {fs-id1167793274848} type= 
PROBLEM:
What is the work done moving a particle from $x=0$ to $x=1$ m if the force acting on it is $F=3{x}^{2}$ N?
SOLUTION:
$1$ J
:::
For the following exercises, find the mass of the one-dimensional object.

:::exercise {fs-id1167793274905} type= 
PROBLEM:
A wire that is $2$ ft long (starting at $x=0)$ and has a density function of $ρ(x)={x}^{2}+2x$ lb/ft
:::

:::exercise {fs-id1167793280392} type= 
PROBLEM:
A car antenna that is $3$ ft long (starting at $x=0)$ and has a density function of $ρ(x)=3x+2$ lb/ft
SOLUTION:
$\frac{39}{2}$
:::

:::exercise {fs-id1167793724760} type= 
PROBLEM:
A metal rod that is $8$ in. long (starting at $x=0)$ and has a density function of $ρ(x)={e}^{(1\text{/}2)x}$ lb/in.
:::

:::exercise {fs-id1167793630100} type= 
PROBLEM:
A pencil that is $4$ in. long (starting at $x=2)$ and has a density function of $ρ(x)=5\text{/}x$ oz/in.
SOLUTION:
$\text{ln}(243)$
:::

:::exercise {fs-id1167794223650} type= 
PROBLEM:
A ruler that is $12$ in. long (starting at $x=5)$ and has a density function of $ρ(x)=\text{ln}(x)+(1\text{/}2){x}^{2}$ oz/in.
:::
For the following exercises, find the mass of the two-dimensional object that is centered at the origin.

:::exercise {fs-id1167793691537} type= 
PROBLEM:
An oversized hockey puck of radius $2$ in. with density function $ρ(x)={x}^{3}-2x+5$
SOLUTION:
$\frac{332\pi}{15}$
:::

:::exercise {fs-id1167793524568} type= 
PROBLEM:
A frisbee of radius $6$ in. with density function $ρ(x)={e}^{\text{−}x}$
:::

:::exercise {fs-id1167793524640} type= 
PROBLEM:
A plate of radius $10$ in. with density function $ρ(x)=1+\text{cos}(\pi x)$
SOLUTION:
$100\pi$
:::

:::exercise {fs-id1167793941028} type= 
PROBLEM:
A jar lid of radius $3$ in. with density function $ρ(x)=\text{ln}(x+1)$
:::

:::exercise {fs-id1167793244589} type= 
PROBLEM:
A disk of radius $5$ cm with density function $ρ(x)=\sqrt{3x}$
SOLUTION:
$20\pi \sqrt{15}$
:::

:::exercise {fs-id1167793244639} type= 
PROBLEM:
A $12$-in. spring is stretched to $15$ in. by a force of $75$ lb. What is the spring constant?
:::

:::exercise {fs-id1167793255017} type= 
PROBLEM:
A spring has a natural length of $10$ cm. It takes $2$ J to stretch the spring to $15$ cm. How much work would it take to stretch the spring from $15$ cm to $20$ cm?
SOLUTION:
$6$ J
:::

:::exercise {fs-id1167793255062} type= 
PROBLEM:
A $1$-m spring requires $10$ J to stretch the spring to $1.1$ m. How much work would it take to stretch the spring from $1$ m to $1.2$ m?
:::

:::exercise {fs-id1167793545921} type= 
PROBLEM:
A spring requires $5$ J to stretch the spring from $8$ cm to $12$ cm, and an additional $4$ J to stretch the spring from $12$ cm to $14$ cm. What is the natural length of the spring?
SOLUTION:
$5$ cm
:::

:::exercise {fs-id1167793545970} type= 
PROBLEM:
A shock absorber is compressed 1 in. by a weight of 1 t. What is the spring constant?
:::

:::exercise {fs-id1167793630513} type= 
PROBLEM:
A force of $F=20x-{x}^{3}$ N stretches a nonlinear spring by $x$ meters. What work is required to stretch the spring from $x=0$ to $x=2$ m?
SOLUTION:
$36$ J
:::

:::exercise {fs-id1167793630576} type= 
PROBLEM:
Find the work done by winding up a hanging cable of length $100$ ft and weight-density $5$ lb/ft.
:::

:::exercise {fs-id1167793496018} type= 
PROBLEM:
For the cable in the preceding exercise, how much work is done to lift the cable $50$ ft?
SOLUTION:
$18,750$ ft-lb
:::

:::exercise {fs-id1167793496048} type= 
PROBLEM:
For the cable in the preceding exercise, how much additional work is done by hanging a $200$ lb weight at the end of the cable?
:::

:::exercise {fs-id1167793496078} type= 
PROBLEM:
**[T]** A pyramid of height $500$ ft has a square base $800$ ft by $800$ ft. Find the area $A$ at height $h.$ If the rock used to build the pyramid weighs approximately $w=100\;{\text{lb/ft}}^{3},$ how much work did it take to lift all the rock?
SOLUTION:
Weight $=\frac{32}{3}\;\times \;{10}^{9}\;\text{lb}$
Work $=\frac{4}{3}\;\times \;{10}^{12}\;\text{ft-lb}$
:::

:::exercise {fs-id1167793387279} type= 
PROBLEM:
**[T]** For the pyramid in the preceding exercise, assume there were $1000$ workers each working $10$ hours a day, $5$ days a week, $50$ weeks a year. If the workers, on average, lifted 10 100 lb rocks $2$ ft/hr, how long did it take to build the pyramid?
:::

:::exercise {fs-id1167794011556} type= 
PROBLEM:
**[T]** The force of gravity on a mass $m$ is $F=\text{−}((GMm)\text{/}{x}^{2})$ newtons. For a rocket of mass $m=1000\;\text{kg},$ compute the work to lift the rocket from $x=6400$ to $x=6500$ km. State your answers with three significant figures. (*Note*: $G=6.67\;\times \;{10}^{−11}\;{\text{N m}}^{2}\text{/}{\text{kg}}^{2}$ and $M=6\;\times \;{10}^{24}\;\text{kg}\text{.})$
SOLUTION:
$9.71\;\times \;{10}^{8}\;\text{N m}$
:::

:::exercise {fs-id1167793524759} type= 
PROBLEM:
**[T]** For the rocket in the preceding exercise, find the work to lift the rocket from $x=6400$ to $x=\infty .$
:::

:::exercise {fs-id1167793524815} type= 
PROBLEM:
**[T]** A rectangular dam is $40$ ft high and $60$ ft wide. Assume the weight density of water is 62.5 lbs/ft<sup>3</sup>. Compute the total force $F$ on the dam when
a. the surface of the water is at the top of the dam and
b. the surface of the water is halfway down the dam.
SOLUTION:
a. $3,000,000$ lb, b. $750,000$ lbs
:::

:::exercise {fs-id1167793957860} type= 
PROBLEM:
**[T]** Find the work required to pump all the water out of a cylinder that has a circular base of radius $5$ ft and height $200$ ft. Use the fact that the density of water is $62$ lb/ft<sup>3</sup>.
:::

:::exercise {fs-id1167793957904} type= 
PROBLEM:
**[T]** Find the work required to pump all the water out of the cylinder in the preceding exercise if the cylinder is only half full.
SOLUTION:
$23.25\pi$ million ft-lb
:::

:::exercise {fs-id1167794042966} type= 
PROBLEM:
**[T]** How much work is required to pump out a swimming pool if the area of the base is $800$ ft<sup>2</sup>, the water is $4$ ft deep, and the top is $1$ ft above the water level? Assume that the density of water is $62$ lb/ft<sup>3</sup>.
:::

:::exercise {fs-id1167794043019} type= 
PROBLEM:
A cylinder of depth $H$ and cross-sectional area $A$ stands full of water at density $ρ.$ Compute the work to pump all the water to the top.
SOLUTION:
$\frac{Aρ{H}^{2}}{2}$
:::

:::exercise {fs-id1167793975911} type= 
PROBLEM:
For the cylinder in the preceding exercise, compute the work to pump all the water to the top if the cylinder is only half full.
:::

:::exercise {fs-id1167793975946} type= 
PROBLEM:
A cone-shaped tank has a cross-sectional area that increases with its depth: $A=(\pi {r}^{2}{h}^{2})\text{/}{H}^{3}.$ Show that the work to empty it is half the work for a cylinder with the same height and base.
SOLUTION:
Answers may vary
:::

## Glossary
- {def} **density function**: a density function describes how mass is distributed throughout an object; it can be a linear density, expressed in terms of mass per unit length; an area density, expressed in terms of mass per unit area; or a volume density, expressed in terms of mass per unit volume; weight-density is also used to describe weight (rather than mass) per unit volume
- {def} **Hooke’s law**: this law states that the force required to compress (or elongate) a spring is proportional to the distance the spring has been compressed (or stretched) from equilibrium; in other words, $F=kx,$ where $k$ is a constant
- {def} **hydrostatic pressure**: the pressure exerted by water on a submerged object
- {def} **work**: the amount of energy it takes to move an object; in physics, when a force is constant, work is expressed as the product of force and distance

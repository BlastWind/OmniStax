# Applications

## Learning Objectives {section:learning-objectives}
- Solve a second-order differential equation representing simple harmonic motion.
- Solve a second-order differential equation representing damped simple harmonic motion.
- Solve a second-order differential equation representing forced simple harmonic motion.
- Solve a second-order differential equation representing charge and current in an RLC series circuit.

We saw in the chapter introduction that second-order linear differential equations are used to model many situations in physics and engineering. In this section, we look at how this works for systems of an object with mass attached to a vertical spring and an electric circuit containing a resistor, an inductor, and a capacitor connected in series. Models such as these can be used to approximate other more complicated situations; for example, bonds between atoms or molecules are often modeled as springs that vibrate, as described by these same differential equations.

## Simple Harmonic Motion
Consider a mass suspended from a spring attached to a rigid support. (This is commonly called a {index:spring-mass system}.) Gravity is pulling the mass downward and the restoring force of the spring is pulling the mass upward. As shown in [ref:CNX_Calc_Figure_17_03_001], when these two forces are equal, the mass is said to be at the equilibrium position. If the mass is displaced from equilibrium, it oscillates up and down. This behavior can be modeled by a second-order constant-coefficient differential equation.

> FIGURE {fig:CNX_Calc_Figure_17_03_001} src=../../media/CNX_Calc_Figure_17_03_001.jpg
> alt: This figure has three images of springs. The first image is a vertical spring in its natural position with length L attached at the top to a fixed point. The second image shows a vertical spring with a mass m attached to the spring, stretching the spring distance s from L. The spring is in equilibrium. The third image is a vertical spring with mass m attached where the spring is in motion, distance x from equilibrium L + s.
> caption: A spring in its natural position (a), at equilibrium with a mass *m* attached (b), and in oscillatory motion (c).

Let $x(t)$ denote the displacement of the mass from equilibrium. Note that for spring-mass systems of this type, it is customary to adopt the convention that down is positive. Thus, a positive displacement indicates the mass is *below* the equilibrium point, whereas a negative displacement indicates the mass is *above* equilibrium. Displacement is usually given in feet in the English system or meters in the metric system.
Consider the forces acting on the mass. The force of gravity is given by $mg\text{.}$ In the English system, mass is in slugs and the acceleration resulting from gravity is in feet per second squared. The acceleration resulting from gravity is constant, so in the English system, $g=32$ ft/sec<sup>2</sup>. Recall that 1 slug-foot/sec<sup>2</sup> is a pound, so the expression *mg* can be expressed in pounds. Metric system units are kilograms for mass and m/sec<sup>2</sup> for gravitational acceleration. In the metric system, we have $g=9.8$ m/sec<sup>2</sup>.
According to {index:Hooke’s law}, the restoring force of the spring is proportional to the displacement and acts in the opposite direction from the displacement, so the restoring force is given by $\text{−}k(s+x).$ The spring constant is given in pounds per foot in the English system and in newtons per meter in the metric system.
Now, by Newton’s second law, the sum of the forces on the system (gravity plus the restoring force) is equal to mass times acceleration, so we have

$\begin{array}{rl}m{x}^{''} & =\text{−}k(s+x)+mg \\ & =\text{−}ks-kx+mg\text{.}\end{array}$  {eq:fs-id1170571219908}

However, by the way we have defined our equilibrium position, $mg=ks,$ the differential equation becomes

$m{x}^{''}+kx=0.$  {eq:fs-id1170573449396}

It is convenient to rearrange this equation and introduce a new variable, called the {index:angular frequency}, $\omega \text{.}$ Letting $\omega =\sqrt{k\text{/}m},$ we can write the equation as

$$ {x}^{''}+{\omega}^{2}x=0. $$  {eq:fs-id1170571069981}

This differential equation has the general solution

$$ x(t)={c}_{1}\text{cos}\;\omega t+{c}_{2}\text{sin}\;\omega t, $$  {eq:fs-id1170570991733}

which gives the position of the mass at any point in time. The motion of the mass is called {term:simple harmonic motion}. The period of this motion (the time it takes to complete one oscillation) is $T=\frac{2\pi}{\omega}$ and the frequency is $f=\frac{1}{T}=\frac{\omega}{2\pi}$ ([ref:CNX_Calc_Figure_17_03_002]).

> FIGURE {fig:CNX_Calc_Figure_17_03_002} src=../../media/CNX_Calc_Figure_17_03_002.jpg
> alt: This figure is the graph of f(t) = sin 2t. It is a periodic, oscillating graph. The period of the graph is represented with a line pointing from one peak to the next. It is labeled with the period  T = 2π/ω.
> caption: A graph of vertical displacement versus time for simple harmonic motion.

:::example {ex:fs-id1170573278589} Simple Harmonic Motion

:::exercise {fs-id1170573327326} type= 
PROBLEM:
Assume an object weighing 2 lb stretches a spring 6 in. Find the equation of motion if the spring is released from the equilibrium position with an upward velocity of 16 ft/sec. What is the period of the motion?
SOLUTION:
We first need to find the spring constant. We have

$\begin{array}{rll}mg & = & ks \\ 2 & = & k(\frac{1}{2}) \\ k & = & 4.\end{array}$  {eq:fs-id1170573389056}

We also know that weight *W* equals the product of mass *m* and the acceleration due to gravity *g*. In English units, the acceleration due to gravity is 32 ft/sec<sup>2</sup>.

$\begin{array}{rll}W & = & mg \\ 2 & = & m(32) \\ m & = & \frac{1}{16}\end{array}$  {eq:fs-id1170571189378}

Thus, the differential equation representing this system is

$\frac{1}{16}{x}^{''}+4x=0.$  {eq:fs-id1170573362977}

Multiplying through by 16, we get ${x}^{''}+64x=0,$ which can also be written in the form ${x}^{''}+({8}^{2})x=0.$ This equation has the general solution

$x(t)={c}_{1}\text{cos}\;(8t)+{c}_{2}\text{sin}\;(8t).$  {eq:fs-id1170573580471}

The mass was released from the equilibrium position, so $x(0)=0,$ and it had an initial upward velocity of 16 ft/sec, so ${x}^{'}(0)=−16.$ Applying these initial conditions to solve for ${c}_{1}$ and ${c}_{2}.$ gives

$x(t)=−2\;\text{sin}\;8t\text{.}$  {eq:fs-id1170573401573}

The period of this motion is $\frac{2\pi}{8}=\frac{\pi}{4}$ sec.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573236596} type= 
PROBLEM:
A 200-g mass stretches a spring 5 cm. Find the equation of motion of the mass if it is released from rest from a position 10 cm below the equilibrium position. What is the frequency of this motion?
SOLUTION:
$x(t)=0.1\;\text{cos}\;(14t)$ (in meters); frequency is $\frac{14}{2\pi}$ Hz.
COMMENTARY: Hint
First find the spring constant.
:::
:::
Writing the general solution in the form $x(t)={c}_{1}\text{cos}\;(\omega t)+{c}_{2}\text{sin}\;(\omega t)$ has some advantages. It is easy to see the link between the differential equation and the solution, and the period and frequency of motion are evident. This form of the function tells us very little about the amplitude of the motion, however. In some situations, we may prefer to write the solution in the form

$$ x(t)=A\;\text{sin}\;(\omega t+ϕ). $$  {eq:fs-id1170573405218}

Although the link to the differential equation is not as explicit in this case, the period and frequency of motion are still evident. Furthermore, the amplitude of the motion, *A*, is obvious in this form of the function. The constant $ϕ$ is called a *phase shift* and has the effect of shifting the graph of the function to the left or right.
To convert the solution to this form, we want to find the values of *A* and $ϕ$ such that

${c}_{1}\text{cos}\;(\omega t)+{c}_{2}\text{sin}\;(\omega t)=A\;\text{sin}\;(\omega t+ϕ).$  {eq:fs-id1170573425291}

We first apply the trigonometric identity

$\text{sin}(\alpha +β)=\text{sin}\;\alpha \;\text{cos}\;β+\text{cos}\;\alpha \;\text{sin}\;β$  {eq:fs-id1170571285025}

to get

$\begin{array}{rl}{c}_{1}\text{cos}\;(\omega t)+{c}_{2}\text{sin}\;(\omega t) & =A(\text{sin}\;(\omega t)\;\text{cos}\;ϕ+\text{cos}\;(\omega t)\;\text{sin}\;ϕ) \\ & =A\;\text{sin}\;ϕ(\text{cos}\;(\omega t))+A\;\text{cos}\;ϕ(\text{sin}\;(\omega t)).\end{array}$  {eq:fs-id1170573421809}

Thus,

${c}_{1}=A\;\text{sin}\;ϕ\;\text{and}\;{c}_{2}=A\;\text{cos}\;ϕ\text{.}$  {eq:fs-id1170571289022}

If we square both of these equations and add them together, we get

$\begin{array}{rl}{c}_{1}^{2}+{c}_{2}^{2} & ={A}^{2}{\text{sin}}^{2}ϕ+{A}^{2}{\text{cos}}^{2}ϕ \\ & ={A}^{2}({\text{sin}}^{2}ϕ+{\text{cos}}^{2}ϕ) \\ & ={A}^{2}.\end{array}$  {eq:fs-id1170573360285}

Thus,

$A=\sqrt{{c}_{1}^{2}+{c}_{2}^{2}}.$  {eq:fs-id1170573360129}

Now, to find $ϕ,$ go back to the equations for ${c}_{1}$ and ${c}_{2},$ but this time, divide the first equation by the second equation to get

$\begin{array}{rl}\frac{{c}_{1}}{{c}_{2}} & =\frac{A\;\text{sin}\;ϕ}{A\;\text{cos}\;ϕ} \\ & =\text{tan}\;ϕ\text{.}\end{array}$  {eq:fs-id1170573362248}

Then,

$\text{tan}\;ϕ=\frac{{c}_{1}}{{c}_{2}}.$  {eq:fs-id1170573392828}

We summarize this finding in the following theorem.

:::note [theorem] Solution to the Equation for Simple Harmonic Motion
The function $x(t)={c}_{1}\text{cos}\;(\omega t)+{c}_{2}\text{sin}\;(\omega t)$ can be written in the form $x(t)=A\;\text{sin}\;(\omega t+ϕ),$ where $A=\sqrt{{c}_{1}^{2}+{c}_{2}^{2}}$ and $\text{tan}\;ϕ=\frac{{c}_{1}}{{c}_{2}}.$
:::
Note that when using the formula $\text{tan}\;ϕ=\frac{{c}_{1}}{{c}_{2}}$ to find $ϕ,$ we must take care to ensure $ϕ$ is in the right quadrant ([ref:CNX_Calc_Figure_17_03_015]).

> FIGURE {fig:CNX_Calc_Figure_17_03_015} src=../../media/CNX_Calc_Figure_17_03_015.jpg
> alt: This figure is the graph of f(t) = sin 2t. It is a periodic, oscillating graph. The period of the graph is represented with a line pointing from one peak to the next. It is labeled with the period T = 2π/ω. The graph has a phase shift of ϕ/ω so that the sine curve has the value zero to the left of the origin.
> caption: A graph of vertical displacement versus time for simple harmonic motion with a phase change.

:::example {ex:fs-id1170573762487} Expressing the Solution with a Phase Shift

:::exercise {fs-id1170573425704} type= 
PROBLEM:
Express the following functions in the form $A\;\text{sin}\;(\omega t+ϕ).$ What is the frequency of motion? The amplitude?
a. $x(t)=2\;\text{cos}\;(3t)+\text{sin}\;(3t)$
b. $x(t)=3\;\text{cos}\;(2t)-2\;\text{sin}\;(2t)$
SOLUTION:
a. We have

$A=\sqrt{{c}_{1}^{2}+{c}_{2}^{2}}=\sqrt{{2}^{2}+{1}^{2}}=\sqrt{5}$  {eq:fs-id1170573435827}

and

$\text{tan}\;ϕ=\frac{{c}_{1}}{{c}_{2}}=\frac{2}{1}=2.$  {eq:fs-id1170573392636}

Note that both ${c}_{1}$ and ${c}_{2}$ are positive, so $ϕ$ is in the first quadrant. Thus,

$ϕ\approx 1.107\;\text{rad,}$  {eq:fs-id1170571102907}

so we have

$x(t)=2\;\text{cos}\;(3t)+\text{sin}\;(3t)=\sqrt{5}\text{sin}\;(3t+1.107).$  {eq:fs-id1170573267983}

The frequency is $\frac{\omega}{2\pi}=\frac{3}{2\pi}\approx 0.477.$ The amplitude is $\sqrt{5}.$
b. We have

$A=\sqrt{{c}_{1}^{2}+{c}_{2}^{2}}=\sqrt{{3}^{2}+{2}^{2}}=\sqrt{13}$  {eq:fs-id1170573569153}

and

$\text{tan}\;ϕ=\frac{{c}_{1}}{{c}_{2}}=\frac{3}{−2}=-\frac{3}{2}.$  {eq:fs-id1170571169197}

Note that ${c}_{1}$ is positive but ${c}_{2}$ is negative, so $ϕ$ is in the fourth quadrant. Thus,

$ϕ\approx -0.983\;\text{rad,}$  {eq:fs-id1170573287469}

so we have

$\begin{array}{rl}x(t) & =3\;\text{cos}\;(2t)-2\;\text{sin}\;(2t) \\ & =\sqrt{13}\text{sin}\;(2t-0.983).\end{array}$  {eq:fs-id1170573400272}

The frequency is $\frac{\omega}{2\pi}=\frac{2}{2\pi}\approx 0.318.$ The amplitude is $\sqrt{13}.$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573581536} type= 
PROBLEM:
Express the function $x(t)=\text{cos}\;(4t)+4\;\text{sin}\;(4t)$ in the form $A\;\text{sin}\;(\omega t+ϕ).$ What is the frequency of motion? The amplitude?
SOLUTION:
$x(t)=\sqrt{17}\text{sin}\;(4t+0.245),$ $\text{frequency}=\frac{4}{2\pi}\approx 0.637,$ $A=\sqrt{17}$
COMMENTARY: Hint
Use the process from the previous example.
:::
:::

## Damped Vibrations
With the model just described, the motion of the mass continues indefinitely. Clearly, this doesn’t happen in the real world. In the real world, there is almost always some friction in the system, which causes the oscillations to die off slowly—an effect called *damping*. So now let’s look at how to incorporate that damping force into our differential equation.
Physical spring-mass systems almost always have some damping as a result of friction, air resistance, or a physical damper, called a *dashpot* (a pneumatic cylinder; see [ref:CNX_Calc_Figure_17_03_013]).

> FIGURE {fig:CNX_Calc_Figure_17_03_013} src=../../media/CNX_Calc_Figure_17_03_013.jpg
> alt: This figure is a pneumatic cylinder. The cylinder is clear, and the piston can be seen.
> caption: A dashpot is a pneumatic cylinder that dampens the motion of an oscillating system.

Because damping is primarily a friction force, we assume it is proportional to the velocity of the mass and acts in the opposite direction. So the damping force is given by $\text{−}b{x}^{'}$ for some constant $b>0.$ Again applying Newton’s second law, the differential equation becomes

$m{x}^{''}+b{x}^{'}+kx=0.$  {eq:fs-id1170571120492}

Then the associated characteristic equation is

$m{λ}^{2}+bλ+k=0.$  {eq:fs-id1170573551061}

Applying the quadratic formula, we have

$λ=\frac{\text{−}b\pm \sqrt{{b}^{2}-4mk}}{2m}.$  {eq:fs-id1170571033691}

Just as in [Second-Order Linear Equations](module:m54040) we consider three cases, based on whether the characteristic equation has distinct real roots, a repeated real root, or complex conjugate roots.

### Case 1: ${b}^{2}>4mk$
In this case, we say the system is {index:*overdamped*}. The general solution has the form

$x(t)={c}_{1}{e}^{{λ}_{1}t}+{c}_{2}{e}^{{λ}_{2}t},$  {eq:fs-id1170573422269}

where both ${λ}_{1}$ and ${λ}_{2}$ are less than zero. Because the exponents are negative, the displacement decays to zero over time, usually quite quickly. Overdamped systems do not oscillate (no more than one change of direction), but simply move back toward the equilibrium position. [ref:CNX_Calc_Figure_17_03_003] shows what typical overdamped behavior looks like.

> FIGURE {fig:CNX_Calc_Figure_17_03_003} src=../../media/CNX_Calc_Figure_17_03_003.jpg
> alt: This figure has two graphs labeled (a) and (b). The first graph is a decreasing curve with the horizontal axis as a horizontal asymptote. The second graph initially is a decreasing function but becomes increasing below the horizontal axis. Then, the horizontal axis is also a horizontal asymptote.
> caption: Behavior of an overdamped spring-mass system, with no change in direction (a) and only one change in direction (b).

:::example {ex:fs-id1170573412417} Overdamped Spring-Mass System

:::exercise {fs-id1170571431419} type= 
PROBLEM:
A 16-lb mass is attached to a 10-ft spring. When the mass comes to rest in the equilibrium position, the spring measures 15 ft 4 in. The system is immersed in a medium that imparts a damping force equal to $\frac{5}{2}$ times the instantaneous velocity of the mass. Find the equation of motion if the mass is pushed upward from the equilibrium position with an initial upward velocity of 5 ft/sec. What is the position of the mass after 10 sec? Its velocity?
SOLUTION:
The mass stretches the spring 5 ft 4 in., or $\frac{16}{3}$ ft. Thus, $16=(\frac{16}{3})k,$ so $k=3.$ We also have $m=\frac{16}{32}=\frac{1}{2},$ so the differential equation is

$\frac{1}{2}{x}^{''}+\frac{5}{2}{x}^{'}+3x=0.$  {eq:fs-id1170573435954}

Multiplying through by 2 gives ${x}^{''}+5{x}^{'}+6x=0,$ which has the general solution

$x(t)={c}_{1}{e}^{−2t}+{c}_{2}{e}^{−3t}.$  {eq:fs-id1170573494039}

Applying the initial conditions, $x(0)=0$ and ${x}^{'}(0)=−5,$ we get

$x(t)=−5{e}^{−2t}+5{e}^{−3t}.$  {eq:fs-id1170571302152}

After 10 sec the mass is at position

$x(10)=−5{e}^{−20}+5{e}^{−30}\approx -1.0305\;\times \;{10}^{−8}\approx 0,$  {eq:fs-id1170573542360}

so it is, effectively, at the equilibrium position. We have ${x}^{'}(t)=10{e}^{−2t}-15{e}^{−3t},$ so after 10 sec the mass is moving at a velocity of

${x}^{'}(10)=10{e}^{−20}-15{e}^{−30}\approx 2.061\;\times \;{10}^{−8}\approx 0.$  {eq:fs-id1170571284285}

After only 10 sec, the mass is barely moving.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573391017} type= 
PROBLEM:
A 2-kg mass is attached to a spring with spring constant 24 N/m. The system is then immersed in a medium imparting a damping force equal to 16 times the instantaneous velocity of the mass. Find the equation of motion if it is released from rest at a point 40 cm below equilibrium.
SOLUTION:
$x(t)=0.6{e}^{−2t}-0.2{e}^{−6t}$
COMMENTARY: Hint
Follow the process from the previous example.
:::
:::

### Case 2: ${b}^{2}=4mk$
In this case, we say the system is *critically damped*. The general solution has the form

$x(t)={c}_{1}{e}^{{λ}_{1}t}+{c}_{2}t{e}^{{λ}_{1}t},$  {eq:fs-id1170573721516}

where ${λ}_{1}$ is less than zero. The motion of a critically damped system is very similar to that of an overdamped system. It does not oscillate. However, with a critically damped system, if the damping is reduced even a little, oscillatory behavior results. From a practical perspective, physical systems are almost always either overdamped or underdamped (case 3, which we consider next). It is impossible to fine-tune the characteristics of a physical system so that ${b}^{2}$ and $4mk$ are exactly equal. [ref:CNX_Calc_Figure_17_03_004] shows what typical critically damped behavior looks like.

> FIGURE {fig:CNX_Calc_Figure_17_03_004} src=../../media/CNX_Calc_Figure_17_03_004.jpg
> alt: This figure has two graphs labeled (a) and (b). The first graph is in the first quadrant and is a decreasing curve with the horizontal axis as a horizontal asymptote. The second graph initially is a decreasing function but becomes increasing below the horizontal axis. Then, the horizontal axis is also a horizontal asymptote.
> caption: Behavior of a critically damped spring-mass system. The system graphed in part (a) has more damping than the system graphed in part (b).

:::example {ex:fs-id1170571412744} Critically Damped Spring-Mass System

:::exercise {fs-id1170571412747} type= 
PROBLEM:
A 1-kg mass stretches a spring 20 cm. The system is attached to a dashpot that imparts a damping force equal to 14 times the instantaneous velocity of the mass. Find the equation of motion if the mass is released from equilibrium with an upward velocity of 3 m/sec.
SOLUTION:
We have $mg=1(9.8)=0.2k,$ so $k=49.$ Then, the differential equation is

${x}^{''}+14{x}^{'}+49x=0,$  {eq:fs-id1170573424174}

which has general solution

$x(t)={c}_{1}{e}^{−7t}+{c}_{2}t{e}^{−7t}.$  {eq:fs-id1170571160644}

Applying the initial conditions $x(0)=0$ and ${x}^{'}(0)=−3$ gives

$x(t)=−3t{e}^{−7t}.$  {eq:fs-id1170573369030}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170573420229} type= 
PROBLEM:
A 1-lb weight stretches a spring 6 in., and the system is attached to a dashpot that imparts a damping force equal to half the instantaneous velocity of the mass. Find the equation of motion if the mass is released from rest at a point 6 in. below equilibrium.
SOLUTION:
$x(t)=\frac{1}{2}{e}^{−8t}+4t{e}^{−8t}$
COMMENTARY: Hint
First find the spring constant.
:::
:::

### Case 3: ${b}^{2}<4mk$
In this case, we say the system is *underdamped*. The general solution has the form

$x(t)={e}^{\alpha t}({c}_{1}\text{cos}\;(βt)+{c}_{2}\text{sin}\;(βt)),$  {eq:fs-id1170573424608}

where $\alpha$ is less than zero. Underdamped systems do oscillate because of the sine and cosine terms in the solution. However, the exponential term dominates eventually, so the amplitude of the oscillations decreases over time. [ref:CNX_Calc_Figure_17_03_005] shows what typical underdamped behavior looks like.

> FIGURE {fig:CNX_Calc_Figure_17_03_005} src=../../media/CNX_Calc_Figure_17_03_005.jpg
> alt: This figure is an oscillating graph where the amplitude is decreasing. There are red dashed curves at the peaks of the amplitudes showing the pattern of a decreasing amplitude. As t increases, the horizontal axis becomes a horizontal asymptote.
> caption: Behavior of an underdamped spring-mass system.

Note that for all damped systems, $\lim_{t\to \infty}x(t)=0.$ The system always approaches the equilibrium position over time.

:::example {ex:fs-id1170571078755} Underdamped Spring-Mass System

:::exercise {fs-id1170573416901} type= 
PROBLEM:
A 16-lb weight stretches a spring 3.2 ft. Assume the damping force on the system is equal to the instantaneous velocity of the mass. Find the equation of motion if the mass is released from rest at a point 9 in. below equilibrium.
SOLUTION:
We have $k=\frac{16}{3.2}=5$ and $m=\frac{16}{32}=\frac{1}{2},$ so the differential equation is

$\frac{1}{2}{x}^{''}+{x}^{'}+5x=0,\;\text{or}\;{x}^{''}+2{x}^{'}+10x=0.$  {eq:fs-id1170573593964}

This equation has the general solution

$x(t)={e}^{\text{−}t}({c}_{1}\text{cos}\;(3t)+{c}_{2}\text{sin}\;(3t)).$  {eq:fs-id1170573386487}

Applying the initial conditions, $x(0)=\frac{3}{4}$ and ${x}^{'}(0)=0,$ we get

$x(t)={e}^{\text{−}t}(\frac{3}{4}\;\text{cos}\;(3t)+\frac{1}{4}\;\text{sin}\;(3t)).$  {eq:fs-id1170573398529}

:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571483448} type= 
PROBLEM:
A 1-kg mass stretches a spring 49 cm. The system is immersed in a medium that imparts a damping force equal to four times the instantaneous velocity of the mass. Find the equation of motion if the mass is released from rest at a point 24 cm above equilibrium.
SOLUTION:
$x(t)=−0.24{e}^{−2t}\text{cos}\;(4t)-0.12{e}^{−2t}\text{sin}\;(4t)$
COMMENTARY: Hint
First find the spring constant.
:::
:::

:::example {ex:fs-id1170571139655} Chapter Opener: Modeling a Motorcycle Suspension System

:::exercise {fs-id1170571139657} type= 
PROBLEM:

> FIGURE {fig:CNX_Calc_Figure_17_03_017} src=../../media/CNX_Calc_Figure_17_03_017.jpg
> alt: This picture is a shock absorber on a motorcycle.
> caption: (credit: modification of work by nSeika, Flickr)

For motocross riders, the suspension systems on their motorcycles are very important. The off-road courses on which they ride often include jumps, and losing control of the motorcycle when they land could cost them the race.
This suspension system can be modeled as a damped spring-mass system. We define our frame of reference with respect to the frame of the motorcycle. Assume the end of the shock absorber attached to the motorcycle frame is fixed. Then, the “mass” in our spring-mass system is the motorcycle wheel. We measure the position of the wheel with respect to the motorcycle frame. This may seem counterintuitive, since, in many cases, it is actually the motorcycle frame that moves, but this frame of reference preserves the development of the differential equation that was done earlier. As with earlier development, we define the downward direction to be positive.
When the motorcycle is lifted by its frame, the wheel hangs freely and the spring is uncompressed. This is the spring’s natural position. When the motorcycle is placed on the ground and the rider mounts the motorcycle, the spring compresses and the system is in the equilibrium position ([ref:CNX_Calc_Figure_17_03_014]).

> FIGURE {fig:CNX_Calc_Figure_17_03_014} src=../../media/CNX_Calc_Figure_17_03_014.jpg
> alt: This figure has two springs attached above at a fixed point. The first spring is labeled, “Natural Position,” and has an uncompressed spring hanging vertically. The second spring is labeled, “Equilibrium Position,” and has a compressed spring hanging vertically. The vertical difference between the two springs is labeled, “s.”
> caption: We can use a spring-mass system to model a motorcycle suspension.

This system can be modeled using the same differential equation we used before:

$m{x}^{''}+b{x}^{'}+kx=0.$  {eq:fs-id1170571069579}

A motocross motorcycle weighs 204 lb, and we assume a rider weight of 180 lb. When the rider mounts the motorcycle, the suspension compresses 4 in., then comes to rest at equilibrium. The suspension system provides damping equal to 240 times the instantaneous vertical velocity of the motorcycle (and rider).
a. Set up the differential equation that models the behavior of the motorcycle suspension system.
b. We are interested in what happens when the motorcycle lands after taking a jump. Let time $t=0$ denote the time when the motorcycle first contacts the ground. If the motorcycle hits the ground with a velocity of 10 ft/sec downward, find the equation of motion of the motorcycle after the jump.
c. Graph the equation of motion over the first second after the motorcycle hits the ground.
SOLUTION:
a. We have defined equilibrium to be the point where $mg=ks,$ so we have

$\begin{array}{rll}mg & = & ks \\ 384 & = & k(\frac{1}{3}) \\ k & = & 1152.\end{array}$  {eq:fs-id1170573590121}

We also have

$\begin{array}{rll}W & = & mg \\ 384 & = & m(32) \\ m & = & 12.\end{array}$  {eq:fs-id1170571293823}

Therefore, the differential equation that models the behavior of the motorcycle suspension is

$12{x}^{''}+240{x}^{'}+1152x=0.$  {eq:fs-id1170571118642}

Dividing through by 12, we get

${x}^{''}+20{x}^{'}+96x=0.$  {eq:fs-id1170570976304}

b. The differential equation found in part a. has the general solution

$x(t)={c}_{1}{e}^{−8t}+{c}_{2}{e}^{−12t}.$  {eq:fs-id1170571227082}

Now, to determine our initial conditions, we consider the position and velocity of the motorcycle wheel when the wheel first contacts the ground. Since the motorcycle was in the air prior to contacting the ground, the wheel was hanging freely and the spring was uncompressed. Therefore the wheel is 4 in. $(\frac{1}{3}\;\text{ft})$ below the equilibrium position (with respect to the motorcycle frame), and we have $x(0)=\frac{1}{3}.$ According to the problem statement, the motorcycle has a velocity of 10 ft/sec downward when the motorcycle contacts the ground, so ${x}^{'}(0)=10.$ Applying these initial conditions, we get ${c}_{1}=\frac{7}{2}$ and ${c}_{2}=\text{−}(\frac{19}{6}),$ so the equation of motion is

$x(t)=\frac{7}{2}{e}^{−8t}-\frac{19}{6}{e}^{−12t}.$  {eq:fs-id1170573760776}

c. The graph is shown in [ref:CNX_Calc_Figure_17_03_012].

> FIGURE {fig:CNX_Calc_Figure_17_03_012} src=../../media/CNX_Calc_Figure_17_03_012.jpg
> alt: This figure is the graph of the function f(x) = 7/2e^−8t −19/6e^−12t.  The vertical axis is scaled in increments of 0.05, and the horizontal axis is labeled, “t.” It is scaled in increments of tenths. The graph intersects the horizontal axis increasing, reaches a maximum, then decreases. The horizontal axis is a horizontal asymptote.
> caption: Graph of the equation of motion over a time of one second.

:::
:::

:::note [project] Landing Vehicle
NASA is planning a mission to Mars. To save money, engineers have decided to adapt one of the moon landing vehicles for the new mission. However, they are concerned about how the different gravitational forces will affect the suspension system that cushions the craft when it touches down. The acceleration resulting from gravity on the moon is 1.6 m/sec<sup>2</sup>, whereas on Mars it is 3.7 m/sec<sup>2</sup>.
The suspension system on the craft can be modeled as a damped spring-mass system. In this case, the spring is below the moon lander, so the spring is slightly compressed at equilibrium, as shown in [ref:CNX_Calc_Figure_17_03_007].

> FIGURE {fig:CNX_Calc_Figure_17_03_007} src=../../media/CNX_Calc_Figure_17_03_007.jpg
> alt: This figure has three images. The first is a picture of the Mars Lander landing on a surface. The second picture is a diagram of the Mars Lander at touchdown, with an uncompressed spring with length L between the Lander and the landing surface. The third image is a diagram of the Lander in equilibrium position after the Lander has landed. The spring is compressed a distance of s.
> caption: The landing craft suspension can be represented as a damped spring-mass system. (credit “lander”: NASA)

We retain the convention that down is positive. Despite the new orientation, an examination of the forces affecting the lander shows that the same differential equation can be used to model the position of the landing craft relative to equilibrium:

$m{x}^{''}+b{x}^{'}+kx=0,$  {eq:fs-id1170573516106}

where *m* is the mass of the lander, *b* is the damping coefficient, and *k* is the spring constant.
1. The lander has a mass of 15,000 kg and the spring is 2 m long when uncompressed. The lander is designed to compress the spring 0.5 m to reach the equilibrium position under lunar gravity. The dashpot imparts a damping force equal to 48,000 times the instantaneous velocity of the lander. Set up the differential equation that models the motion of the lander when the craft lands on the moon.
2. Let time $t=0$ denote the instant the lander touches down. The rate of descent of the lander can be controlled by the crew, so that it is descending at a rate of 2 m/sec when it touches down. Find the equation of motion of the lander on the moon.
3. If the lander is traveling too fast when it touches down, it could fully compress the spring and “bottom out.” Bottoming out could damage the landing craft and must be avoided at all costs. Graph the equation of motion found in part 2. If the spring is 0.5 m long when fully compressed, will the lander be in danger of bottoming out?
4. Assuming NASA engineers make no adjustments to the spring or the damper, how far does the lander compress the spring to reach the equilibrium position under Martian gravity?
5. If the lander crew uses the same procedures on Mars as on the moon, and keeps the rate of descent to 2 m/sec, will the lander bottom out when it lands on Mars?
6. What adjustments, if any, should the NASA engineers make to use the lander safely on Mars?
:::

## Forced Vibrations
The last case we consider is when an external force acts on the system. In the case of the motorcycle suspension system, for example, the bumps in the road act as an external force acting on the system. Another example is a spring hanging from a support; if the support is set in motion, that motion would be considered an external force on the system. We model these forced systems with the nonhomogeneous differential equation

$$ m{x}^{''}+b{x}^{'}+kx=f(t), $$  {eq:fs-id1170573399103}

where the external force is represented by the $f(t)$ term. As we saw in [Nonhomogeneous Linear Equations](module:m54047), differential equations such as this have solutions of the form

$x(t)={c}_{1}{x}_{1}(t)+{c}_{2}{x}_{2}(t)+{x}_{p}(t),$  {eq:fs-id1170573386623}

where ${c}_{1}{x}_{1}(t)+{c}_{2}{x}_{2}(t)$ is the general solution to the complementary equation and ${x}_{p}(t)$ is a particular solution to the nonhomogeneous equation. If the system is damped, $\lim_{t\to \infty}{c}_{1}{x}_{1}(t)+{c}_{2}{x}_{2}(t)=0.$ Since these terms do not affect the long-term behavior of the system, we call this part of the solution the {index:*transient solution*}**.** The long-term behavior of the system is determined by ${x}_{p}(t),$ so we call this part of the solution the {term:steady-state solution}.

:::note [media-2] 
This [website](http://www.openstax.org/l/20_Oscillations) shows a simulation of forced vibrations.
:::

:::example {ex:fs-id1170571136987} Forced Vibrations

:::exercise {fs-id1170571136990} type= 
PROBLEM:
A mass of 1 slug stretches a spring 2 ft and comes to rest at equilibrium. The system is attached to a dashpot that imparts a damping force equal to eight times the instantaneous velocity of the mass. Find the equation of motion if an external force equal to $f(t)=8\;\text{sin}\;(4t)$ is applied to the system beginning at time $t=0.$ What is the transient solution? What is the steady-state solution?
SOLUTION:
We have $mg=1(32)=2k,$ so $k=16$ and the differential equation is

${x}^{''}+8{x}^{'}+16x=8\;\text{sin}\;(4t).$  {eq:fs-id1170573586148}

The general solution to the complementary equation is

${c}_{1}{e}^{−4t}+{c}_{2}t{e}^{−4t}.$  {eq:fs-id1170570995316}

Assuming a particular solution of the form ${x}_{p}(t)=A\;\text{cos}\;(4t)+B\;\text{sin}\;(4t)$ and using the method of undetermined coefficients, we find ${x}_{p}(t)=-\frac{1}{4}\;\text{cos}\;(4t),$ so

$x(t)={c}_{1}{e}^{−4t}+{c}_{2}t{e}^{−4t}-\frac{1}{4}\;\text{cos}\;(4t).$  {eq:fs-id1170573757948}

At $t=0,$ the mass is at rest in the equilibrium position, so $x(0)={x}^{'}(0)=0.$ Applying these initial conditions to solve for ${c}_{1}$ and ${c}_{2},$ we get

$x(t)=\frac{1}{4}{e}^{−4t}+t{e}^{−4t}-\frac{1}{4}\;\text{cos}\;(4t).$  {eq:fs-id1170571303979}

The transient solution is $\frac{1}{4}{e}^{−4t}+t{e}^{−4t}.$ The steady-state solution is $-\frac{1}{4}\;\text{cos}\;(4t).$
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170571509354} type= 
PROBLEM:
A mass of 2 kg is attached to a spring with constant 32 N/m and comes to rest in the equilibrium position. Beginning at time $t=0,$ an external force equal to$f(t)=68{e}^{−2t}\text{cos}\;(4t)$ is applied to the system. Find the equation of motion if there is no damping. What is the transient solution? What is the steady-state solution?
SOLUTION:
$x(t)=-\frac{1}{2}\;\text{cos}\;(4t)+\frac{9}{4}\;\text{sin}\;(4t)+\frac{1}{2}{e}^{−2t}\text{cos}\;(4t)-2{e}^{−2t}\text{sin}\;(4t)$
$\text{Transient solution:}\;\frac{1}{2}{e}^{−2t}\text{cos}\;(4t)-2{e}^{−2t}\text{sin}\;(4t)$
$\text{Steady-state solution:}\;-\frac{1}{2}\;\text{cos}\;(4t)+\frac{9}{4}\;\text{sin}\;(4t)$
COMMENTARY: Hint
Find the particular solution *before* applying the initial conditions.
:::
:::

:::note [project] Resonance
Consider an undamped system exhibiting simple harmonic motion. In the real world, we never truly have an undamped system; –some damping always occurs. For theoretical purposes, however, we could imagine a spring-mass system contained in a vacuum chamber. With no air resistance, the mass would continue to move up and down indefinitely.
The frequency of the resulting motion, given by $f=\frac{1}{T}=\frac{\omega}{2\pi},$ is called the *natural frequency of the system*. If an external force acting on the system has a frequency close to the natural frequency of the system, a phenomenon called {index:*resonance*} results. The external force reinforces and amplifies the natural motion of the system.
1. Consider the differential equation ${x}^{''}+x=0.$ Find the general solution. What is the natural frequency of the system?
2. Now suppose this system is subjected to an external force given by $f(t)=5\;\text{cos}\;t\text{.}$ Solve the initial-value problem ${x}^{''}+x=5\;\text{cos}\;t,$ $x(0)=0,$ ${x}^{'}(0)=1.$
3. Graph the solution. What happens to the behavior of the system over time?
4. In the real world, there is always some damping. However, if the damping force is weak, and the external force is strong enough, real-world systems can still exhibit resonance. One of the most famous examples of resonance is the collapse of the {index:Tacoma Narrows Bridge} on November 7, 1940. The bridge had exhibited strange behavior ever since it was built. The roadway had a strange “bounce” to it. On the day it collapsed, a strong windstorm caused the roadway to twist and ripple violently. The bridge was unable to withstand these forces and it ultimately collapsed. Experts believe the windstorm exerted forces on the bridge that were very close to its natural frequency, and the resulting resonance ultimately shook the bridge apart.

:::note [media-2] 
This [website](http://www.openstax.org/l/20_TacomaNarrow) contains more information about the collapse of the Tacoma Narrows Bridge.
:::

:::note [media-2] 
During the short time the Tacoma Narrows Bridge stood, it became quite a tourist attraction. Several people were on site the day the bridge collapsed, and one of them caught the collapse on film. Watch the [video](http://www.openstax.org/l/20_TacomaNarro2) to see the collapse.
:::
5. Another real-world example of resonance is a singer shattering a crystal wineglass when she sings just the right note. When someone taps a crystal wineglass or wets a finger and runs it around the rim, a tone can be heard. That note is created by the wineglass vibrating at its natural frequency. If a singer then sings that same note at a high enough volume, the glass shatters as a result of resonance.

:::note [media-2] 
The TV show *Mythbusters* aired an episode on this phenomenon. Adam Savage described the experience. Watch this [video](http://www.openstax.org/l/20_glass2) for his account.
:::
:::

## The *RLC* Series Circuit
Consider an electrical circuit containing a resistor, an inductor, and a capacitor, as shown in [ref:CNX_Calc_Figure_17_03_014]. Such a circuit is called an {term:*RLC* series circuit}. *RLC* circuits are used in many electronic systems, most notably as tuners in AM/FM radios. The tuning knob varies the capacitance of the capacitor, which in turn tunes the radio. Such circuits can be modeled by second-order, constant-coefficient differential equations.
Let $I(t)$ denote the current in the *RLC* circuit and $q(t)$ denote the charge on the capacitor. Furthermore, let *L* denote inductance in henrys (H), *R* denote resistance in ohms $(\text{Ω}),$ and *C* denote capacitance in farads (F). Last, let $E(t)$ denote electric potential in volts (V).
Kirchhoff’s voltage rule states that the sum of the voltage drops around any closed loop must be zero. So, we need to consider the voltage drops across the inductor (denoted ${E}_{L}$), the resistor (denoted ${E}_{R}$), and the capacitor (denoted ${E}_{C}$). Because the *RLC* circuit shown in [ref:CNX_Calc_Figure_17_03_014] includes a voltage source, $E(t),$ which adds voltage to the circuit, we have ${E}_{L}+{E}_{R}+{E}_{C}=E(t).$
We present the formulas below without further development. Those of you interested in the derivation of these formulas should consult a physics text. Using Faraday’s law and Lenz’s law, the voltage drop across an inductor can be shown to be proportional to the instantaneous rate of change of current, with proportionality constant *L*. Thus,

${E}_{L}=L\frac{dI}{dt}.$  {eq:fs-id1170571284146}

Next, according to Ohm’s law, the voltage drop across a resistor is proportional to the current passing through the resistor, with proportionality constant *R*. Therefore,

${E}_{R}=RI\text{.}$  {eq:fs-id1170571118014}

Last, the voltage drop across a capacitor is proportional to the charge, *q*, on the capacitor, with proportionality constant $1\text{/}C.$ Thus,

${E}_{C}=\frac{1}{C}q\text{.}$  {eq:fs-id1170571115021}

Adding these terms together, we get

$L\frac{dI}{dt}+RI+\frac{1}{C}q=E(t).$  {eq:fs-id1170571260224}

Noting that $I=(dq)\text{/}(dt),$ this becomes

$$ L\frac{{d}^{2}q}{d{t}^{2}}+R\frac{dq}{dt}+\frac{1}{C}q=E(t). $$  {eq:fs-id1170571096072}

Mathematically, this system is analogous to the spring-mass systems we have been examining in this section.

> FIGURE {fig:CNX_Calc_Figure_17_03_010} src=../../media/CNX_Calc_Figure_17_03_010.jpg
> alt: This figure is a diagram of a circuit. It has broken lines at the bottom labeled C. On the left side there is an open circle labeled E. The top has diagonal lines labeled R. The right side has little bumps labeled L.
> caption: An *RLC* series circuit can be modeled by the same differential equation as a mass-spring system.

:::example {ex:fs-id1170570974718} The *RLC* Series Circuit

:::exercise {fs-id1170570974720} type= 
PROBLEM:
Find the charge on the capacitor in an *RLC* series circuit where $L=5\text{/}3$ H, $R=10\text{Ω},$ $C=1\text{/}30$ F, and $E(t)=300$ V. Assume the initial charge on the capacitor is 0 C and the initial current is 9 A. What happens to the charge on the capacitor over time?
SOLUTION:
We have

$\begin{array}{rll} \\ \\ L\frac{{d}^{2}q}{d{t}^{2}}+R\frac{dq}{dt}+\frac{1}{C}q & = & E(t) \\ \frac{5}{3}\;\frac{{d}^{2}q}{d{t}^{2}}+10\frac{dq}{dt}+30q & = & 300 \\ \frac{{d}^{2}q}{d{t}^{2}}+6\frac{dq}{dt}+18q & = & 180.\end{array}$  {eq:fs-id1170570995085}

The general solution to the complementary equation is

${e}^{−3t}({c}_{1}\text{cos}\;(3t)+{c}_{2}\text{sin}\;(3t)).$  {eq:fs-id1170571483437}

Assume a particular solution of the form ${q}_{p}=A,$ where $A$ is a constant. Using the method of undetermined coefficients, we find $A=10.$ So,

$q(t)={e}^{−3t}({c}_{1}\text{cos}\;(3t)+{c}_{2}\text{sin}\;(3t))+10.$  {eq:fs-id1170573409279}

Applying the initial conditions $q(0)=0$ and $i(0)=((dq)\text{/}(dt))(0)=9,$ we find ${c}_{1}=−10$ and ${c}_{2}=−7.$ So the charge on the capacitor is

$q(t)=−10{e}^{−3t}\text{cos}\;(3t)-7{e}^{−3t}\text{sin}\;(3t)+10.$  {eq:fs-id1170571046590}

Looking closely at this function, we see the first two terms will decay over time (as a result of the negative exponent in the exponential function). Therefore, the capacitor eventually approaches a steady-state charge of 10 C.
:::
:::

:::note [checkpoint] 

:::exercise {fs-id1170570998340} type= 
PROBLEM:
Find the charge on the capacitor in an *RLC* series circuit where $L=1\text{/}5$ H, $R=2\text{/}5\text{Ω},$ $C=1\text{/}2$ F, and $E(t)=50$ V. Assume the initial charge on the capacitor is 0 C and the initial current is 4 A.
SOLUTION:
$q(t)=−25{e}^{\text{−}t}\text{cos}\;(3t)-7{e}^{\text{−}t}\text{sin}\;(3t)+25$
COMMENTARY: Hint
Remember, ${E}_{L}=L((dI)\text{/}(dt)).$
:::
:::

## Key Concepts {section:key-concepts}
- Second-order constant-coefficient differential equations can be used to model spring-mass systems.
- An examination of the forces on a spring-mass system results in a differential equation of the form

$m{x}^{''}+b{x}^{'}+kx=f(t),$  {eq:fs-id1170573525694}

where $m$ represents the mass, $b$ is the coefficient of the damping force, $k$ is the spring constant, and $f(t)$ represents any net external forces on the system.
- If $b=0,$ there is no damping force acting on the system, and simple harmonic motion results. If $b≠0,$ the behavior of the system depends on whether ${b}^{2}-4mk>0,$ ${b}^{2}-4mk=0,$ or ${b}^{2}-4mk<0.$
- If ${b}^{2}-4mk>0,$ the system is overdamped and does not exhibit oscillatory behavior.
- If ${b}^{2}-4mk=0,$ the system is critically damped. It does not exhibit oscillatory behavior, but any slight reduction in the damping would result in oscillatory behavior.
- If ${b}^{2}-4mk<0,$ the system is underdamped. It exhibits oscillatory behavior, but the amplitude of the oscillations decreases over time.
- If $f(t)≠0,$ the solution to the differential equation is the sum of a transient solution and a steady-state solution. The steady-state solution governs the long-term behavior of the system.
- The charge on the capacitor in an *RLC* series circuit can also be modeled with a second-order constant-coefficient differential equation of the form

$L\frac{{d}^{2}q}{d{t}^{2}}+R\frac{dq}{dt}+\frac{1}{C}q=E(t),$  {eq:fs-id1170571073828}

where *L* is the inductance, *R* is the resistance, *C* is the capacitance, and $E(t)$ is the voltage source.

## Key Equations {section:key-equations}

> TABLE {tab:eip-566} cols=2 class=unnumbered unstyled
> summary: .

|  |  |
| --- | --- |
| **Equation of simple harmonic motion** | ${x}^{''}+{\omega}^{2}x=0$ |
| **Solution for simple harmonic motion** | $x(t)={c}_{1}\text{cos}\;(\omega t)+{c}_{2}\text{sin}\;(\omega t)$ |
| **Alternative form of solution for SHM** | $x(t)=A\;\text{sin}\;(\omega t+ϕ)$ |
| **Forced harmonic motion** | $m{x}^{''}+b{x}^{'}+kx=f(t)$ |
| **Charge in a** ***RLC*** **series circuit** | $L\frac{{d}^{2}q}{d{t}^{2}}+R\frac{dq}{dt}+\frac{1}{C}q=E(t)$ |

##  {section:section-exercises}

:::exercise {fs-id1170571079342} type= 
PROBLEM:
A mass weighing 4 lb stretches a spring 8 in. Find the equation of motion if the spring is released from the equilibrium position with a downward velocity of 12 ft/sec. What is the period and frequency of the motion?
:::

:::exercise {fs-id1170571412194} type= 
PROBLEM:
A mass weighing 2 lb stretches a spring 2 ft. Find the equation of motion if the spring is released from 2 in. below the equilibrium position with an upward velocity of 8 ft/sec. What is the period and frequency of the motion?
SOLUTION:
${x}^{''}+16x=0,$ $x(t)=\frac{1}{6}\;\text{cos}\;(4t)-2\;\text{sin}\;(4t)\text{,}$ period $=\frac{\pi}{2}\;\text{sec},$ frequency $=\frac{2}{\pi}\;\text{Hz}$
:::

:::exercise {fs-id1170571214796} type= 
PROBLEM:
A 100-g mass stretches a spring 0.1 m. Find the equation of motion of the mass if it is released from rest from a position 20 cm below the equilibrium position. What is the frequency of this motion?
:::

:::exercise {fs-id1170571098284} type= 
PROBLEM:
A 400-g mass stretches a spring 5 cm. Find the equation of motion of the mass if it is released from rest from a position 15 cm below the equilibrium position. What is the frequency of this motion?
SOLUTION:
${x}^{''}+196x=0,$ $x(t)=0.15\;\text{cos}\;(14t)\text{,}$ period $=\frac{\pi}{7}\;\text{sec},$ frequency $=\frac{7}{\pi}\;\text{Hz}$
:::

:::exercise {fs-id1170571138041} type= 
PROBLEM:
A block has a mass of 9 kg and is attached to a vertical spring with a spring constant of 0.25 N/m. The block is stretched 0.75 m below its equilibrium position and released.
a. Find the position function $x(t)$ of the block.
b. Find the period and frequency of the vibration.
c. Sketch a graph of $x(t).$
d. At what time does the block first pass through the equilibrium position?
:::

:::exercise {fs-id1170571369053} type= 
PROBLEM:
A block has a mass of 5 kg and is attached to a vertical spring with a spring constant of 20 N/m. The block is released from the equilibrium position with a downward velocity of 10 m/sec.
a. Find the position function $x(t)$ of the block.
b. Find the period and frequency of the vibration.
c. Sketch a graph of $x(t).$
d. At what time does the block first pass through the equilibrium position?
SOLUTION:
a. $x(t)=5\;\text{sin}\;(2t)$
b. period $=\pi \;\text{sec},$ frequency $=\frac{1}{\pi}\;\text{Hz}$
c.

> IMAGE {img:fs-id1170571131588} src=../../media/CNX_Calc_Figure_17_03_202.jpg
> alt: This figure is the graph of a function. It is a periodic function with consistent amplitude. The horizontal axis is labeled in increments of 1. The vertical axis is labeled in increments of 1.5.

d. $t=\frac{\pi}{2}\;\text{sec}$
:::

:::exercise {fs-id1170571066174} type= 
PROBLEM:
A 1-kg mass is attached to a vertical spring with a spring constant of 21 N/m. The resistance in the spring-mass system is equal to 10 times the instantaneous velocity of the mass.
a. Find the equation of motion if the mass is released from a position 2 m below its equilibrium position with a downward velocity of 2 m/sec.
b. Graph the solution and determine whether the motion is overdamped, critically damped, or underdamped.
:::

:::exercise {fs-id1170573739195} type= 
PROBLEM:
An 800-lb weight (25 slugs) is attached to a vertical spring with a spring constant of 226 lb/ft. The system is immersed in a medium that imparts a damping force equal to 10 times the instantaneous velocity of the mass.
a. Find the equation of motion if it is released from a position 20 ft below its equilibrium position with a downward velocity of 41 ft/sec.
b. Graph the solution and determine whether the motion is overdamped, critically damped, or underdamped.
SOLUTION:
a. $x(t)={e}^{\text{−}t\text{/}5}(20\;\text{cos}\;(3t)+15\;\text{sin}\;(3t))$
b. underdamped
:::

:::exercise {fs-id1170571041530} type= 
PROBLEM:
A 9-kg mass is attached to a vertical spring with a spring constant of 16 N/m. The system is immersed in a medium that imparts a damping force equal to 24 times the instantaneous velocity of the mass.
a. Find the equation of motion if it is released from its equilibrium position with an upward velocity of 4 m/sec.
b. Graph the solution and determine whether the motion is overdamped, critically damped, or underdamped.
:::

:::exercise {fs-id1170571021686} type= 
PROBLEM:
A 1-kg mass stretches a spring 61.25 cm. The resistance in the spring-mass system is equal to eight times the instantaneous velocity of the mass.
a. Find the equation of motion if the mass is released from a position 5 m below its equilibrium position with an upward velocity of 10 m/sec.
b. Determine whether the motion is overdamped, critically damped, or underdamped.
SOLUTION:
a. $x(t)={e}^{−4t}(-5cos11.866t-0.834sin11.866t)$
b. underdamped
:::

:::exercise {fs-id1170571041443} type= 
PROBLEM:
A 32-lb weight (1 slug) stretches a vertical spring 128 in. The resistance in the spring-mass system is equal to four times the instantaneous velocity of the mass.
a. Find the equation of motion if it is released from its equilibrium position with a downward velocity of 12 ft/sec.
b. Determine whether the motion is overdamped, critically damped, or underdamped.
:::

:::exercise {fs-id1170571227151} type= 
PROBLEM:
A 64-lb weight is attached to a vertical spring with a spring constant of 4.625 lb/ft. The resistance in the spring-mass system is equal to the instantaneous velocity. The weight is set in motion from a position 1 ft below its equilibrium position with an upward velocity of 2 ft/sec. Is the mass above or below the equilibrium position at the end of $\pi$ sec? By what distance?
SOLUTION:
$x(\pi )=\frac{7{e}^{\text{−}\pi \text{/}4}}{6}$ ft below
:::

:::exercise {fs-id1170571302938} type= 
PROBLEM:
A mass that weighs 8 lb stretches a spring 6 inches. The system is acted on by an external force of $8\;\text{sin}\;8t$ lb. If the mass is pulled down 3 inches and then released, determine the position of the mass at any time.
:::

:::exercise {fs-id1170571027428} type= 
PROBLEM:
A mass that weighs 6 lb stretches a spring 3 in. The system is acted on by an external force of $8\;\text{sin}\;(4t)$ lb. If the mass is pulled down 1 inch and then released, determine the position of the mass at any time.
SOLUTION:
$x(t)=\frac{1}{2}\;\text{cos}\;(8\sqrt{2}t)-\frac{4\sqrt{2}}{21}\text{sin}(8\sqrt{2}t)+\frac{8}{21}\text{sin}(8\sqrt{2}t)$
:::

:::exercise {fs-id1170573541683} type= 
PROBLEM:
Find the charge on the capacitor in an *RLC* series circuit where $L=40$ H, $R=30\text{Ω},$ $C=1\text{/}200$ F, and $E(t)=200$ V. Assume the initial charge on the capacitor is 7 C and the initial current is 0 A.
:::

:::exercise {fs-id1170573535625} type= 
PROBLEM:
Find the charge on the capacitor in an *RLC* series circuit where $L=2$ H, $R=24\text{Ω},$ $C=0.005$ F, and $E(t)=12\;\text{sin}\;10t$ V. Assume the initial charge on the capacitor is 0.001 C and the initial current is 0 A.
SOLUTION:
$q(t)={e}^{−6t}(0.051\;\text{cos}\;(8t)+0.03825\;\text{sin}\;(8t))-\frac{1}{20}\;\text{cos}\;(10t)$
:::

:::exercise {fs-id1170571322031} type= 
PROBLEM:
A series circuit consists of a device where $L=1$ H, $R=20\text{Ω},$ $C=0.002$ F, and $E(t)=12$ V. If the initial charge and current are both zero, find the charge and current at time *t*.
:::

:::exercise {fs-id1170571146379} type= 
PROBLEM:
A series circuit consists of a device where $L=\frac{1}{2}$ H, $R=10\text{Ω},$ $C=\frac{1}{50}$ F, and $E(t)=250$ V. If the initial charge on the capacitor is 0 C and the initial current is 18 A, find the charge and current at time *t*.
SOLUTION:
$q(t)={e}^{−10t}(−32t-5)+5,\; \;I(t)=2{e}^{−10t}(160t+9)$
:::

## Glossary
- {def} ***RLC* series circuit**: a complete electrical path consisting of a resistor, an inductor, and a capacitor; a second-order, constant-coefficient differential equation can be used to model the charge on the capacitor in an *RLC* series circuit
- {def} **simple harmonic motion**: motion described by the equation $x(t)={c}_{1}\text{cos}\;(\omega t)+{c}_{2}\text{sin}\;(\omega t),$ as exhibited by an undamped spring-mass system in which the mass continues to oscillate indefinitely
- {def} **steady-state solution**: a solution to a nonhomogeneous differential equation related to the forcing function; in the long term, the solution approaches the steady-state solution

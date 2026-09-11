# Kinematics in Two Dimensions: An Introduction

## Learning Objectives
By the end of this section, you will be able to:
- Observe that motion in two dimensions consists of horizontal and vertical components.
- Understand the independence of horizontal and vertical vectors in two-dimensional motion.

> FIGURE {fig:import-auto-id1165298608692} src=../../media/Figure_03_01_00.jpg
> alt: A busy traffic intersection in New York showing vehicles moving on the road.
> caption: Walkers and drivers in a city like New York are rarely able to travel in straight lines to reach their destinations. Instead, they must follow roads and sidewalks, making two-dimensional, zigzagged paths. (credit: Margaret W. Carruthers)

## Two-Dimensional Motion: Walking in a City
Suppose you want to walk from one point to another in a city with uniform square blocks, as pictured in [ref:import-auto-id1165296250183].

> FIGURE {fig:import-auto-id1165296250183} src=../../media/Figure_03_01_01.jpg
> alt: An X Y graph with origin at zero zero with x axis labeled nine blocks east and y axis labeled five blocks north. Starting point at the origin and destination at point nine on the x axis and point five on the y axis.
> caption: A pedestrian walks a two-dimensional path between two points in a city. In this scene, all blocks are square and are the same size.

The straight-line path that a helicopter might fly is blocked to you as a pedestrian, and so you are forced to take a two-dimensional path, such as the one shown. You walk 14 blocks in all, 9 east followed by 5 north. What is the straight-line distance?
An old adage states that the shortest distance between two points is a straight line. The two legs of the trip and the straight-line path form a right triangle, and so the Pythagorean theorem, ${a}^{2}\text{+}{b}^{2}\text{=}{c}^{2}$, can be used to find the straight-line distance.

> FIGURE {fig:import-auto-id1165298608693} src=../../media/Figure_03_01_02.jpg
> alt: A right-angled triangle with base labeled a height labeled b and hypotenuse labeled c is shown. Using Pythagorean theorem c is calculated as square root of a squared plus b squared.
> caption: The Pythagorean theorem relates the length of the legs of a right triangle, labeled $a$ and $b$, with the hypotenuse, labeled $c$. The relationship is given by: ${a}^{2}\text{+}{b}^{2}\text{=}{c}^{2}$. This can be rewritten, solving for $c$ : $c\text{=}\sqrt{{a}^{2}\text{+}{b}^{2}}$.

The hypotenuse of the triangle is the straight-line path, and so in this case its length in units of city blocks is $\sqrt{(\text{9 blocks}{)}^{2}\text{+}(\text{5 blocks}{)}^{2}}\text{= 10}\text{.}\text{3 blocks}$, considerably shorter than the 14 blocks you walked. (Note that we are using three significant figures in the answer. Although it appears that “9” and “5” have only one significant digit, they are discrete numbers. In this case “9 blocks” is the same as “9.0 or 9.00 blocks.” We have decided to use three significant figures in the answer in order to show the result more precisely.)

> FIGURE {fig:import-auto-id1165298535408} src=../../media/Figure_03_01_03.jpg
> alt: An X Y graph with origin at zero zero with x-axis labeled nine blocks east and y axis labeled five blocks north. A diagonal vector arrow joining starting point at point zero on x axis and destination at point five on y axis with its direction northeast is shown. A helicopter is flying along the diagonal vector arrow with helicopter path of ten point three blocks. The angle formed by diagonal vector arrow and the x-axis is equal to twenty-nine point one degrees.
> caption: The straight-line path followed by a helicopter between the two points is shorter than the 14 blocks walked by the pedestrian. All blocks are square and the same size.

The fact that the straight-line distance (10.3 blocks) in [ref:import-auto-id1165298535408] is less than the total distance walked (14 blocks) is one example of a general characteristic of vectors. (Recall that {term:vectors} are quantities that have both magnitude and direction.)
As with one-dimensional kinematics, we use arrows to represent vectors. The length of the arrow is proportional to the vector’s magnitude. The arrow’s length is indicated by hash marks in [ref:import-auto-id1165296250183] and [ref:import-auto-id1165298535408]. The arrow points in the same direction as the vector. For two-dimensional motion, the path of an object can be represented with three vectors: one vector shows the straight-line path between the initial and final points of the motion, one vector shows the horizontal component of the motion, and one vector shows the vertical component of the motion. The horizontal and vertical components of the motion add together to give the straight-line path. For example, observe the three vectors in [ref:import-auto-id1165298535408]. The first represents a 9-block displacement east. The second represents a 5-block displacement north. These vectors are added to give the third vector, with a 10.3-block total displacement. The third vector is the straight-line path between the two points. Note that in this example, the vectors that we are adding are perpendicular to each other and thus form a right triangle. This means that we can use the Pythagorean theorem to calculate the magnitude of the total displacement. (Note that we cannot use the Pythagorean theorem to add vectors that are not perpendicular. We will develop techniques for adding vectors having any direction, not just those perpendicular to one another, in [Vector Addition and Subtraction: Graphical Methods](module:m42127) and [Vector Addition and Subtraction: Analytical Methods](module:m42128).)

## The Independence of Perpendicular Motions
The person taking the path shown in [ref:import-auto-id1165298535408] walks east and then north (two perpendicular directions). How far they walk east is only affected by their motion eastward. Similarly, how far they walk north is only affected by their motion northward.

:::note [] Independence of Motion

The horizontal and vertical components of two-dimensional motion are independent of each other. Any motion in the horizontal direction does not affect motion in the vertical direction, and vice versa.
:::
This is true in a simple scenario like that of walking in one direction first, followed by another. It is also true of more complicated motion involving movement in two directions at once. For example, let’s compare the motions of two baseballs. One baseball is dropped from rest. At the same instant, another is thrown horizontally from the same height and follows a curved path. A stroboscope has captured the positions of the balls at fixed time intervals as they fall.

> FIGURE {fig:import-auto-id1165296248287} src=../../media/Figure_03_01_04a.jpg
> alt: Two identical balls one red and another blue are falling. Five positions of the balls during fall are shown. The horizontal velocity vectors for blue ball towards right are of same magnitude for all the positions. The vertical velocity vectors shown downwards for red ball are increasing with each position.
> caption: This shows the motions of two identical balls—one falls from rest, the other has an initial horizontal velocity. Each subsequent position is an equal time interval. Arrows represent horizontal and vertical velocities at each position. The ball on the right has an initial horizontal velocity, while the ball on the left has no horizontal velocity. Despite the difference in horizontal velocities, the vertical velocities and positions are identical for both balls. This shows that the vertical and horizontal motions are independent.

It is remarkable that for each flash of the strobe, the vertical positions of the two balls are the same. This similarity implies that the vertical motion is independent of whether or not the ball is moving horizontally. (Assuming no air resistance, the vertical motion of a falling object is influenced by gravity only, and not by any horizontal forces.) Careful examination of the ball thrown horizontally shows that it travels the same horizontal distance between flashes. This is due to the fact that there are no additional forces on the ball in the horizontal direction after it is thrown. This result means that the horizontal velocity is constant, and affected neither by vertical motion nor by gravity (which is vertical). Note that this case is true only for ideal conditions. In the real world, air resistance will affect the speed of the balls in both directions.
The two-dimensional curved path of the horizontally thrown ball is composed of two independent one-dimensional motions (horizontal and vertical). The key to analyzing such motion, called *projectile motion*, is to *resolve* (break) it into motions along perpendicular directions. Resolving two-dimensional motion into perpendicular components is possible because the components are independent. We shall see how to resolve vectors in [Vector Addition and Subtraction: Graphical Methods](module:m42127) and [Vector Addition and Subtraction: Analytical Methods](module:m42128). We will find such techniques to be useful in many areas of physics.

:::note [interactive] Ladybug Motion 2D
Learn about position, velocity and acceleration vectors. Move the ladybug by setting the position, velocity or acceleration, and see how the vectors change. Choose linear, circular or elliptical motion, and record and playback the motion to analyze the behavior.
[Click to view content](https://openstax.org/l/28ladybugmotion).
:::

## Test Prep for AP Courses

:::exercise {fs-id1421044} type=ap-test-prep 
PROBLEM:
A ball is thrown at an angle of 45 degrees above the horizontal. Which of the following best describes the acceleration of the ball from the instant after it leaves the thrower's hand until the time it hits the ground?
1. Always in the same direction as the motion, initially positive and gradually dropping to zero by the time it hits the ground
2. Initially positive in the upward direction, then zero at maximum height, then negative from there until it hits the ground
3. Always in the opposite direction as the motion, initially positive and gradually dropping to zero by the time it hits the ground
4. Always in the downward direction with the same constant value
SOLUTION:
(d)
:::

:::exercise {fs-id895568} type=ap-test-prep 
PROBLEM:
In an experiment, a student launches a ball with an initial horizontal velocity at an elevation 2 meters above ground. The ball follows a parabolic trajectory until it hits the ground. Which of the following accurately describes the graph of the ball's vertical acceleration versus time (taking the downward direction to be negative)?
1. A negative value that does not change with time
2. A gradually increasing negative value (straight line)
3. An increasing rate of negative values over time (parabolic curve)
4. Zero at all times since the initial motion is horizontal
:::

:::exercise {fs-id1462671} type=ap-test-prep 
PROBLEM:
A student wishes to design an experiment to show that the acceleration of an object is independent of the object's velocity. To do this, ball A is launched horizontally with some initial speed at an elevation 1.5 meters above the ground, ball B is dropped from rest 1.5 meters above the ground, and ball C is launched vertically with some initial speed at an elevation 1.5 meters above the ground. What information would the student need to collect about each ball in order to test the hypothesis?
SOLUTION:
We would need to know the horizontal and vertical positions of each ball at several times.  From that data, we could deduce the velocities over several time intervals and also the accelerations (both horizontal and vertical) for each ball over several time intervals.
:::

## Summary
- The shortest path between any two points is a straight line. In two dimensions, this path can be represented by a vector with horizontal and vertical components.
- The horizontal and vertical components of a vector are independent of one another. Motion in the horizontal direction does not affect motion in the vertical direction, and vice versa.

## Glossary
- {def} **vector**: a quantity that has both magnitude and direction; an arrow used to represent quantities with both magnitude and direction

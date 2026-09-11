# Applications of Statics, Including Problem-Solving Strategies

## Learning Objectives
By the end of this section, you will be able to:
- Discuss the applications of Statics in real life.
- State and discuss various problem-solving strategies in Statics.
Statics can be applied to a variety of situations, ranging from raising a drawbridge to bad posture and back strain. We begin with a discussion of problem-solving strategies specifically used for statics. Since statics is a special case of Newton’s laws, both the general problem-solving strategies and the special strategies for Newton’s laws, discussed in [Problem-Solving Strategies](module:m42076), still apply.

:::note [] Problem-Solving Strategy: Static Equilibrium Situations

1. The first step is to determine whether or not the system is in {term:static equilibrium}. This condition is always the case when the *acceleration of the system is zero and accelerated rotation does not occur*.
2. ****It is particularly important to *draw a free body diagram for the system of interest*. Carefully label all forces, and note their relative magnitudes, directions, and points of application whenever these are known.
3. Solve the problem by applying either or both of the conditions for equilibrium (represented by the equations $\text{net}\;F=0$ and $\text{net}\;τ=0$, depending on the list of known and unknown factors. If the second condition is involved, *choose the pivot point to simplify the solution*. Any pivot point can be chosen, but the most useful ones cause torques by unknown forces to be zero. (Torque is zero if the force is applied at the pivot (then $r=0$), or along a line through the pivot point (then $\theta =0$)). Always choose a convenient coordinate system for projecting forces.
4. *Check the solution to see if it is reasonable* by examining the magnitude, direction, and units of the answer. The importance of this last step never diminishes, although in unfamiliar applications, it is usually more difficult to judge reasonableness. These judgments become progressively easier with experience.
:::
Now let us apply this problem-solving strategy for the pole vaulter shown in the three figures below. The pole is uniform and has a mass of 5.00 kg. In [ref:import-auto-id1240130], the pole’s cg lies halfway between the vaulter’s hands. It seems reasonable that the force exerted by each hand is equal to half the weight of the pole, or 24.5 N. This obviously satisfies the first condition for equilibrium $\text{(net}\;F=0)$ . The second condition $\text{(net}\;τ=\text{0)}$ is also satisfied, as we can see by choosing the cg to be the pivot point. The weight exerts no torque about a pivot point located at the cg, since it is applied at that point and its lever arm is zero. The equal forces exerted by the hands are equidistant from the chosen pivot, and so they exert equal and opposite torques. Similar arguments hold for other systems where supporting forces are exerted symmetrically about the cg. For example, the four legs of a uniform table each support one-fourth of its weight.
In [ref:import-auto-id1240130], a pole vaulter holding a pole with its cg halfway between his hands is shown. Each hand exerts a force equal to half the weight of the pole, ${F}_{R}={F}_{L}=w/2$. (b) The pole vaulter moves the pole to his left, and the forces that the hands exert are no longer equal. See [ref:import-auto-id1240130]. If the pole is held with its cg to the left of the person, then he must push down with his right hand and up with his left. The forces he exerts are larger here because they are in opposite directions and the cg is at a long distance from either hand.
Similar observations can be made using a meter stick held at different locations along its length.

> FIGURE {fig:import-auto-id1240130} src=../../media/Figure_10_04_01a.jpg
> alt: A pole vaulter is standing on the ground holding a pole with his two hands. The center of gravity of the pole is between the hands of the pole vaulter and is near the right hand of the man. The weight W is shown as an arrow downward toward center of gravity. The reactions F sub R and F sub L of the hands of the man are shown with vectors in upward direction. A free body diagram of the situation is shown on the top right side of the figure.
> width: 300
> caption: A pole vaulter holds a pole horizontally with both hands.

> FIGURE {fig:eip-id2351570} src=../../media/Figure_10_04_01b.jpg
> alt: A pole vaulter is standing on the ground holding a pole with his two hands. The center of gravity of the pole is between the hands of the pole vaulter and is near the right hand of the man. The weight W is shown as an arrow downward toward center of gravity. The reactions F sub R and F sub L of the hands of the man are shown with vectors in upward direction. A free body diagram of the situation is shown on the top right side of the figure.
> width: 300
> caption: A pole vaulter is holding a pole horizontally with both hands. The center of gravity is near his right hand.

> FIGURE {fig:eip-id2351577} src=../../media/Figure_10_04_01c.jpg
> alt: A pole vaulter is standing on the ground holding a pole from one side with his two hands. The centre of gravity of the pole is to the left of the pole vaulter. The weight W is shown as an arrow downward at center of gravity. The reaction F sub R is shown with a vector pointing downward from the man’s right hand and F sub L is shown with a vector in upward direction at the location of the man’s left hand. A free body diagram of the situation is shown on the top right side of the figure.
> width: 300
> caption: A pole vaulter is holding a pole horizontally with both hands. The center of gravity is to the left side of the vaulter.

If the pole vaulter holds the pole as shown in [ref:eip-id2351570], the situation is not as simple. The total force he exerts is still equal to the weight of the pole, but it is not evenly divided between his hands. (If ${F}_{L}={F}_{R}$, then the torques about the cg would not be equal since the lever arms are different.) Logically, the right hand should support more weight, since it is closer to the cg. In fact, if the right hand is moved directly under the cg, it will support all the weight. This situation is exactly analogous to two people carrying a load; the one closer to the cg carries more of its weight. Finding the forces ${F}_{L}$ and ${F}_{R}$ is straightforward, as the next example shows.
If the pole vaulter holds the pole from near the end of the pole ([ref:eip-id2351577]), the direction of the force applied by the right hand of the vaulter reverses its direction.

:::example {ex:fs-id2852543} What Force Is Needed to Support a Weight Held Near Its CG?
For the situation shown in [ref:eip-id2351570], calculate: (a) ${F}_{R}$ , the force exerted by the right hand, and (b) ${F}_{L}$, the force exerted by the left hand. The hands are 0.900 m apart, and the cg of the pole is 0.600 m from the left hand.
**Strategy**
[ref:eip-id2351570] includes a free body diagram for the pole, the system of interest. There is not enough information to use the first condition for equilibrium  $\text{(net}\;F=0$), since two of the three forces are unknown and the hand forces cannot be assumed to be equal in this case. There is enough information to use the second condition for equilibrium $\text{(net}\;τ=0\text{)}$ if the pivot point is chosen to be at either hand, thereby making the torque from that hand zero. We choose to locate the pivot at the left hand in this part of the problem, to eliminate the torque from the left hand.
**Solution for (a)**
There are now only two nonzero torques, those from the gravitational force (${τ}_{\text{w}}$) and from the push or pull of the right hand (${τ}_{R}$). Stating the second condition in terms of clockwise and counterclockwise torques,

$$ \text{net}\;{τ}_{\text{cw}}=\text{–net}\;{τ}_{\text{ccw}}\text{.} $$  {eq:fs-id1394625}

or the algebraic sum of the torques is zero.
Here this is

$$ {τ}_{R}={–τ}_{\text{w}} $$  {eq:fs-id2104644}

since the weight of the pole creates a counterclockwise torque and the right hand counters with a clockwise torque. Using the definition of torque, $τ=\text{rF}\;\text{sin}\;\theta$, noting that $\theta =90º$ , and substituting known values, we obtain

$$ (0\text{.}\text{900 m})({F}_{R})=(0.600 m)(mg)\text{.} $$  {eq:fs-id1306091}

Thus,

$$ \begin{array}{l}{F}_{R} & = & (0.667)(\text{5.00 kg})(9.80\;{\text{m/s}}^{2}) \\ & = & \text{32.7 N.}\end{array} $$  {eq:fs-id3549512}

**Solution for (b)**
****The first condition for equilibrium is based on the free body diagram in the figure. This implies that by Newton’s second law:

$$ {F}_{L}+{F}_{R}-\text{mg}=0 $$  {eq:fs-id3514472}

From this we can conclude:

$$ {F}_{L}+{F}_{R}=w=\text{mg} $$  {eq:fs-id1377036}

Solving for ${F}_{L}$, we obtain

$$ \begin{array}{l}{F}_{L} & = & mg-{F}_{R} \\ & = & mg-\text{32}\text{.}7 N \\ & = & (\text{5.00 kg})(\text{9.80}\;{\text{m/s}}^{2})-\text{32.7 N} \\ & = & \text{16.3 N}\end{array} $$  {eq:fs-id1370762}

**Discussion**
**${F}_{L}$** is seen to be exactly half of ${F}_{R}$, as we might have guessed, since ${F}_{L}$ is applied twice as far from the cg as ${F}_{R}$.
:::
If the pole vaulter holds the pole as he might at the start of a run, shown in [ref:eip-id2351577], the forces change again. Both are considerably greater, and one force reverses direction.

:::note [] Take-Home Experiment

This is an experiment to perform while standing in a bus or a train. Stand facing sideways. How do you move your body to readjust the distribution of your mass as the bus accelerates and decelerates? Now stand facing forward. How do you move your body to readjust the distribution of your mass as the bus accelerates and decelerates? Why is it easier and safer to stand facing sideways rather than forward? Note: For your safety (and those around you), make sure you are holding onto something while you carry out this activity!
:::

:::note [interactive] Balancing Act
Play with objects on a teeter totter to learn about balance in [this simulation](https://openstax.org/l/02balanactphet). Test what you've learned by trying the Balance Challenge game.
:::

## Test Prep for AP Courses

:::exercise {fs-id1383310} type=ap-test-prep 
PROBLEM:
A child sits on the end of a playground see-saw. Which of the following values is the most appropriate estimate of the torque created by the child?
1. 6 N•m
2. 60 N•m
3. 600 N•m
4. 6000 N•m
:::

:::exercise {fs-id1362521} type=ap-test-prep 
PROBLEM:
A group of students is stacking a set of identical books, each one overhanging the one below it by 1 inch. They would like to estimate how many books they could place on top of each other before the stack tipped. What information below would they need to know to make this calculation?

> FIGURE {fig:fs-id1439516} src=../../media/Figure 09_S3_03.jpg
> alt: Three rectangles with thick blue borders on the bottom, left, and right side and a think black slightly indented line of the right indicate three books. There are two short black vertical lines going down on the left and right of the bottom book with a double-headed black arrow and the label Width below. On the left side of the bottom book are two short horizontal lines with a black vertical double-headed short arrow labeled Depth. The three books are stacked with the second book offset to the right and the third offset even more to the right on the second book. The edge of the second book is marked with a double-headed arrow marked 1” between a vertical line above the left edge of the bottom book and a vertical line above the left edge of the second book.
> caption: 3 overlapping stacked books.

1. The mass of each book
2. The width of each book
3. The depth of each book
1. I only
2. I and II only
3. I and III only
4. II only
5. I, II, and III
SOLUTION:
(d)
:::

:::exercise {fs-id1743606} type=ap-test-prep 
PROBLEM:
A 10 N board of uniform density is 5 meters long. It is supported on the left by a string bearing a 3 N upward force. In order to prevent the string from breaking, a person must place an upward force of 7 N at a position along the bottom surface of the board. At what distance from its left edge would they need to place this force in order for the board to be in static equilibrium?
1. $\frac{3}{7}$ m
2. $\frac{5}{2}$ m
3. $\frac{25}{7}$ m
4. $\frac{30}{7}$ m
5. 5 m
:::

:::exercise {fs-id1892207} type=ap-test-prep 
PROBLEM:
A bridge is supported by two piers located 20 meters apart. Both the left and right piers provide an upward force on the bridge, labeled **F**_L and **F**_R respectively.
1. If a 1000 kg car comes to rest at a point 5 meters from the left pier, how much force will the bridge provide to the left and right piers?
2. How will **F**_L and **F**_R change as the car drives to the right side of the bridge?
SOLUTION:
1. **F**_L = 7350 N, **F**_R = 2450 N
2. As the car moves to the right side of the bridge, **F**_L will decrease and **F**_R will increase. (At exactly halfway across the bridge, **F**_L and **F**_R will both be 4900 N.)
:::

:::exercise {fs-id1249019} type=ap-test-prep 
PROBLEM:
An object of unknown mass is provided to a student. Without using a scale, design an experimental procedure detailing how the magnitude of this mass could be experimentally found. Your explanation must include the concept of torque and all steps should be provided in an orderly sequence. You may include a labeled diagram of your setup to help in your description. Include enough detail so that another student could carry out your procedure.
:::

## Summary
- Statics can be applied to a variety of situations, ranging from raising a drawbridge to bad posture and back strain. We have discussed the problem-solving strategies specifically useful for statics. Statics is a special case of Newton’s laws, both the general problem-solving strategies and the special strategies for Newton’s laws, discussed in [Problem-Solving Strategies](module:m42076), still apply.

## Conceptual Questions

:::exercise {fs-id820981} type=conceptual-questions 
PROBLEM:
When visiting some countries, you may see a person balancing a load on the head. Explain why the center of mass of the load needs to be directly above the person’s neck vertebrae.
:::

## Problems & Exercises

:::exercise {fs-id1368028} type=problems-exercises 
PROBLEM:
To get up on the roof, a person (mass 70.0 kg) places a 6.00-m aluminum ladder (mass 10.0 kg) against the house on a concrete pad with the base of the ladder 2.00 m from the house. The ladder rests against a plastic rain gutter, which we can assume to be frictionless. Because the gutter is round, the ladder is tangent to it and therefore the normal force by the gutter is perpendicular to the ladder. The center of mass of the ladder is 2.00 m from the bottom, measured parallel to the ladder. The person is standing 3.00 m from the bottom, again measured parallel to the ladder. What are the magnitudes of the forces on the ladder at the top and bottom?

:::

:::exercise {eip-339} type=problems-exercises 
PROBLEM:
In [ref:eip-id2351577], the cg of the pole held by the pole vaulter is 2.00 m from the left hand, and the hands are 0.700 m apart. Calculate the force exerted by (a) his right hand and (b) his left hand. (c) If each hand supports half the weight of the pole in [ref:import-auto-id1240130], show that the second condition for equilibrium  $\text{(net}\;τ=\text{0)}$ is satisfied for a pivot other than the one located at the center of gravity of the pole. Explicitly show how you follow the steps in the Problem-Solving Strategy for static equilibrium described above.
:::

## Glossary
- {def} **static equilibrium**: equilibrium in which the acceleration of the system is zero and accelerated rotation does not occur

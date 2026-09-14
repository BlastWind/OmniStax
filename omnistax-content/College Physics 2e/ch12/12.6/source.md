# Motion of an Object in a Viscous Fluid

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Calculate the Reynolds number for an object moving through a fluid.
- Explain whether the Reynolds number indicates laminar or turbulent flow.
- Describe the conditions under which an object has a terminal speed.
A moving object in a viscous fluid is equivalent to a stationary object in a flowing fluid stream. (For example, when you ride a bicycle at 10 m/s in still air, you feel the air in your face exactly as if you were stationary in a 10-m/s wind.) Flow of the stationary fluid around a moving object may be laminar, turbulent, or a combination of the two. Just as with flow in tubes, it is possible to predict when a moving object creates turbulence. We use another form of the Reynolds number ${N}_{\text{R}}^{'}$, defined for an object moving in a fluid to be

$$ {N}_{\text{R}}^{'}=\frac{ρ\text{vL}}{η}\text{(object in fluid),} $$  {eq:import-auto-id3230050}

where $L$ is a characteristic length of the object (a sphere’s diameter, for example), $ρ$ the fluid density,  $η$ its viscosity, and  $v$ the object’s speed in the fluid. If  ${N}_{\text{R}}^{'}$ is less than about 1, flow around the object can be laminar, particularly if the object has a smooth shape. The transition to turbulent flow occurs for ${N}_{\text{R}}^{'}$ between 1 and about 10, depending on surface roughness and so on. Depending on the surface, there can be a *turbulent wake* behind the object with some laminar flow over its surface. For an  ${N}_{\text{R}}^{'}$ between 10 and  ${\text{10}}^{6}$, the flow may be either laminar or turbulent and may oscillate between the two. For  ${N}_{\text{R}}^{'}$ greater than about  ${\text{10}}^{6}$, the flow is entirely turbulent, even at the surface of the object. (See [ref:import-auto-id3213490].) Laminar flow occurs mostly when the objects in the fluid are small, such as raindrops, pollen, and blood cells in plasma.

:::example {ex:fs-id3384783} Does a Ball Have a Turbulent Wake?
Calculate the Reynolds number ${N}_{\text{R}}^{'}$ for a ball with a 7.40-cm diameter thrown at 40.0 m/s.
**Strategy**
We can use ${N}_{\text{R}}^{'}=\frac{ρ\text{vL}}{η}$ to calculate ${N}_{\text{R}}^{'}$, since all values in it are either given or can be found in tables of density and viscosity.
**Solution**
Substituting values into the equation for ${N}_{\text{R}}^{'}$ yields

$$ \begin{array}{lll}{N}_{R}^{'} & = & \frac{ρ\text{vL}}{η}=\frac{(1\text{.}\text{29}\;{\text{kg/m}}^{3})(\text{40.0 m/s})(\text{0.0740 m})}{1.81\times {\text{10}}^{-5}\;1.00 Pa⋅\text{s}} \\ & = & 2.11\times {\text{10}}^{5}\text{.}\end{array} $$  {eq:import-auto-id694467}

**Discussion**
This value is sufficiently high to imply a turbulent wake. Most large objects, such as airplanes and sailboats, create significant turbulence as they move. As noted before, the Bernoulli principle gives only qualitatively-correct results in such situations.
:::
One of the consequences of viscosity is a resistance force called {term:viscous drag}  ${F}_{\text{V}}$ that is exerted on a moving object. This force typically depends on the object’s speed (in contrast with simple friction). Experiments have shown that for laminar flow (  ${N}_{\text{R}}^{'}$ less than about one) viscous drag is proportional to speed, whereas for ${N}_{\text{R}}^{'}$ between about 10 and  ${\text{10}}^{6}$, viscous drag is proportional to speed squared. (This relationship is a strong dependence and is pertinent to bicycle racing, where even a small headwind causes significantly increased drag on the racer. Cyclists take turns being the leader in the pack for this reason.) For  ${N}_{\text{R}}^{'}$ greater than  ${\text{10}}^{6}$, drag increases dramatically and behaves with greater complexity. For laminar flow around a sphere,  ${F}_{\text{V}}$ is proportional to fluid viscosity  $η$, the object’s characteristic size  $L$, and its speed  $v$. All of which makes sense—the more viscous the fluid and the larger the object, the more drag we expect. Recall Stoke’s law  ${F}_{\text{S}}=6πrηv$. For the special case of a small sphere of radius  $R$ moving slowly in a fluid of viscosity  $η$, the drag force  ${F}_{\text{S}}$ is given by

$$ {F}_{\text{S}}=6πRηv\text{.} $$  {eq:import-auto-id1506814}

> FIGURE {fig:import-auto-id3213490} src=../../media/Figure_13_06_01.jpg
> alt: Part a of the figure shows a sphere moving in a fluid. The fluid lines are shown to move toward the left. The viscous force on the sphere is also toward the left given by F v as shown by the arrow. The flow is shown as laminar as shown by linear bending lines. Part b of the figure shows a sphere moving with higher speed in a fluid. The fluid lines are shown to move toward the left. The viscous force on the sphere is also toward the left given by F v prime as shown by the arrow. The flow is shown as laminar above and below the sphere shown by linear lines of flow and turbulent on left of the sphere shown by curly lines of flow. Part c of the figure shows a sphere still moving with higher speed in a fluid. The fluid lines are shown to move toward the left at the edges of flow away from the sphere. The viscous force on the sphere is also toward the left given by F v double prime as shown by the arrow. The flow is turbulent all around the sphere as shown by curly lines of flow. The viscous drag F v double prime is shown to be still greater by longer length of arrows.
> width: 425
> caption: (a) Motion of this sphere to the right is equivalent to fluid flow to the left. Here the flow is laminar with ${N}_{\text{R}}^{'}$ less than 1. There is a force, called viscous drag ${F}_{\text{V}}$, to the left on the ball due to the fluid’s viscosity. (b) At a higher speed, the flow becomes partially turbulent, creating a wake starting where the flow lines separate from the surface. Pressure in the wake is less than in front of the sphere, because fluid speed is less, creating a net force to the left ${F}_{\text{V}}^{'}$ that is significantly greater than for laminar flow. Here ${N}_{\text{R}}^{'}$ is greater than 10. (c) At much higher speeds, where ${N}_{\text{R}}^{'}$ is greater than ${\text{10}}^{6}$, flow becomes turbulent everywhere on the surface and behind the sphere. Drag increases dramatically.

An interesting consequence of the increase in ${F}_{\text{V}}$ with speed is that an object falling through a fluid will not continue to accelerate indefinitely (as it would if we neglect air resistance, for example). Instead, viscous drag increases, slowing acceleration, until a critical speed, called the {term:terminal speed}, is reached and the acceleration of the object becomes zero. Once this happens, the object continues to fall at constant speed (the terminal speed). This is the case for particles of sand falling in the ocean, cells falling in a centrifuge, and sky divers falling through the air. [ref:import-auto-id1525065] shows some of the factors that affect terminal speed. There is a viscous drag on the object that depends on the viscosity of the fluid and the size of the object. But there is also a buoyant force that depends on the density of the object relative to the fluid. Terminal speed will be greatest for low-viscosity fluids and objects with high densities and small sizes. Thus a skydiver falls more slowly with outspread limbs than when they are in a pike position—head first with hands at their side and legs together.

:::note [] Take-Home Experiment: Don’t Lose Your Marbles

By measuring the terminal speed of a slowly moving sphere in a viscous fluid, one can find the viscosity of that fluid (at that temperature). It can be difficult to find small ball bearings around the house, but a small marble will do. Gather two or three fluids (syrup, motor oil, honey, olive oil, etc.) and a thick, tall clear glass or vase. Drop the marble into the center of the fluid and time its fall (after letting it drop a little to reach its terminal speed). Compare your values for the terminal speed and see if they are inversely proportional to the viscosities as listed in [ref:import-auto-id3073392](module:m42209). Does it make a difference if the marble is dropped near the side of the glass?
:::
Knowledge of terminal speed is useful for estimating sedimentation rates of small particles. We know from watching mud settle out of dirty water that sedimentation is usually a slow process. Centrifuges are used to speed sedimentation by creating accelerated frames in which gravitational acceleration is replaced by centripetal acceleration, which can be much greater, increasing the terminal speed.

> FIGURE {fig:import-auto-id1525065} src=../../media/Figure_13_06_02.jpg
> alt: The figure shows the forces acting on an oval shaped object falling through a viscous fluid. An enlarged view of the object is shown toward the left to analyze the forces in detail. The weight of the object w acts vertically downward. The viscous drag F v and buoyant force F b acts vertically upward. The length of the object is given by L. The density of the object is given by rho obj and density of the fluid by rho fl.
> width: 232
> caption: There are three forces acting on an object falling through a viscous fluid: its weight $w$, the viscous drag ${F}_{\text{V}}$, and the buoyant force ${\text{F}}_{\text{B}}$.

## Section Summary {section:section-summary}
- When an object moves in a fluid, there is a different form of the Reynolds number ${N}_{\text{R}}^{'}=\frac{ρ\text{vL}}{η}\text{(object in fluid),}$ which indicates whether flow is laminar or turbulent.
- For ${N}_{\text{R}}^{'}$ less than about one, flow is laminar.
- For ${N}_{\text{R}}^{'}$ greater than

${\text{10}}^{6}$, flow is entirely turbulent.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1576284} type=conceptual-questions 
PROBLEM:
What direction will a helium balloon move inside a car that is slowing down—toward the front or back? Explain your answer.
:::

:::exercise {fs-id1418508} type=conceptual-questions 
PROBLEM:
Will identical raindrops fall more rapidly in $5º C$ air or $\text{25º C}$ air, neglecting any differences in air density? Explain your answer.
:::

:::exercise {fs-id3068984} type=conceptual-questions 
PROBLEM:
If you took two marbles of different sizes, what would you expect to observe about the relative magnitudes of their terminal velocities?
:::

## Glossary
- {def} **viscous drag**: a resistance force exerted on a moving object, with a nontrivial dependence on velocity
- {def} **terminal speed**: the speed at which the viscous drag of an object falling in a viscous fluid is equal to the other forces acting on the object (such as gravity), so that the acceleration of the object is zero

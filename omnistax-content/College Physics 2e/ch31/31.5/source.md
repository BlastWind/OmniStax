# Half-Life and Activity

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- Define half-life.
- Define dating.
- Calculate age of old objects by radioactive dating.
Unstable nuclei decay. However, some nuclides decay faster than others. For example, radium and polonium, discovered by the Curies, decay faster than uranium. This means they have shorter lifetimes, producing a greater rate of decay. In this section we explore half-life and activity, the quantitative terms for lifetime and rate of decay.

## Half-Life
Why use a term like half-life rather than lifetime? The answer can be found by examining [ref:import-auto-id3418332], which shows how the number of radioactive nuclei in a sample decreases with time. The *time in which half of the original number of nuclei decay* is defined as the {term:half-life}, ${t}_{1/2}$. Half of the remaining nuclei decay in the next half-life. Further, half of that amount decays in the following half-life. Therefore, the number of radioactive nuclei decreases from $N$ to $N/2$ in one half-life, then to $N/4$ in the next, and to $N/8$ in the next, and so on. If $N$ is a large number, then *many* half-lives (not just two) pass before all of the nuclei decay. Nuclear decay is an example of a purely statistical process. A more precise definition of half-life is that *each nucleus has a 50% chance of living for a time equal to one half-life ${t}_{1/2}$*. Thus, if $N$ is reasonably large, half of the original nuclei decay in a time of one half-life. If an individual nucleus makes it through that time, it still has a 50% chance of surviving through another half-life. Even if it happens to make it through hundreds of half-lives, it still has a 50% chance of surviving through one more. The probability of decay is the same no matter when you start counting. This is like random coin flipping. The chance of heads is 50%, no matter what has happened before.

> FIGURE {fig:import-auto-id3418332} src=../../media/Figure_32_05_01a.jpg
> alt: The figure shows a radioactive decay graph of number of nuclides in thousands versus time in multiples of half-life. The number of radioactive nuclei decreases exponentially and finally approaches zero after about ten half-lives.
> width: 300
> caption: Radioactive decay reduces the number of radioactive nuclei over time. In one half-life ${t}_{1/2}$, the number decreases to half of its original value. Half of what remains decay in the next half-life, and half of those in the next, and so on. This is an exponential decay, as seen in the graph of the number of nuclei present as a function of time.

There is a tremendous range in the half-lives of various nuclides, from as short as ${\text{10}}^{-\text{23}}$ s for the most unstable, to more than ${\text{10}}^{\text{16}}$ y for the least unstable, or about 46 orders of magnitude. Nuclides with the shortest half-lives are those for which the nuclear forces are least attractive, an indication of the extent to which the nuclear force can depend on the particular combination of neutrons and protons. The concept of half-life is applicable to other subatomic particles, as will be discussed in [Particle Physics](module:m42669). It is also applicable to the decay of excited states in atoms and nuclei. The following equation gives the quantitative relationship between the original number of nuclei present at time zero (${N}_{0}$) and the number ($N$) at a later time $t$:

$$ N={N}_{0}{e}^{-λt}\text{,} $$  {eq:eip-435}

where $e=\text{2.71828}\text{...}$ is the base of the natural logarithm, and $λ$ is the {term:decay constant} for the nuclide. The shorter the half-life, the larger is the value of $λ$, and the faster the exponential ${e}^{-λt}$ decreases with time. The relationship between the decay constant $λ$ and the half-life ${t}_{1/2}$ is

$$ λ=\frac{ln(2)}{{t}_{1/2}}\approx \frac{0\text{.}\text{693}}{{t}_{1/2}}\text{.} $$  {eq:eip-732}

To see how the number of nuclei declines to half its original value in one half-life, let $t={t}_{1/2}$ in the exponential in the equation $N={N}_{0}{e}^{-λt}$. This gives $N={N}_{0}{e}^{-λt}={N}_{0}{e}^{−0.693}=0.500{N}_{0}$. For integral numbers of half-lives, you can just divide the original number by 2 over and over again, rather than using the exponential relationship. For example, if ten half-lives have passed, we divide $N$ by 2 ten times. This reduces it to $N/\text{1024}$. For an arbitrary time, not just a multiple of the half-life, the exponential relationship must be used.
{term:Radioactive dating} is a clever use of naturally occurring radioactivity. Its most famous application is {term:carbon-14 dating}. Carbon-14 has a half-life of 5730 years and is produced in a nuclear reaction induced when solar neutrinos strike ${}^{\text{14}}N$ in the atmosphere. Radioactive carbon has the same chemistry as stable carbon, and so it mixes into the ecosphere, where it is consumed and becomes part of every living organism. Carbon-14 has an abundance of 1.3 parts per trillion of normal carbon. Thus, if you know the number of carbon nuclei in an object (perhaps determined by mass and Avogadro’s number), you multiply that number by $1\text{.}3×{\text{10}}^{-\text{12}}$ to find the number of ${}^{\text{14}}\text{C}$ nuclei in the object. When an organism dies, carbon exchange with the environment ceases, and ${}^{\text{14}}\text{C}$ is not replenished as it decays. By comparing the abundance of ${}^{\text{14}}\text{C}$ in an artifact, such as mummy wrappings, with the normal abundance in living tissue, it is possible to determine the artifact’s age (or time since death). Carbon-14 dating can be used for biological tissues as old as 50 or 60 thousand years, but is most accurate for younger samples, since the abundance of ${}^{\text{14}}\text{C}$ nuclei in them is greater. Very old biological materials contain no ${}^{\text{14}}\text{C}$ at all. There are instances in which the date of an artifact can be determined by other means, such as historical knowledge or tree-ring counting. These cross-references have confirmed the validity of carbon-14 dating and permitted us to calibrate the technique as well. Carbon-14 dating revolutionized parts of archaeology and is of such importance that it earned the 1960 Nobel Prize in chemistry for its developer, the American chemist Willard Libby (1908–1980).
One of the most famous cases of carbon-14 dating involves the Shroud of Turin, a long piece of fabric purported to be the burial shroud of Jesus (see [ref:import-auto-id2405399]). This relic was first displayed in Turin in 1354 and was denounced as a fraud at that time by a French bishop. Its remarkable negative imprint of an apparently crucified body resembles the then-accepted image of Jesus, and so the shroud was never disregarded completely and remained controversial over the centuries. Carbon-14 dating was not performed on the shroud until 1988, when the process had been refined to the point where only a small amount of material needed to be destroyed. Samples were tested at three independent laboratories, each being given four pieces of cloth, with only one unidentified piece from the shroud, to avoid prejudice. All three laboratories found samples of the shroud contain 92% of the ${}^{\text{14}}\text{C}$ found in living tissues, allowing the shroud to be dated (see [ref:fs-id2653660]).

> FIGURE {fig:import-auto-id2405399} src=../../media/Figure_32_05_02a.jpg
> alt: The figure shows two images of Jesus. Left image is very faint and hardly visible but the right image shows a much clearer picture.
> width: 250
> caption: Part of the Shroud of Turin, which shows a remarkable negative imprint likeness of Jesus complete with evidence of crucifixion wounds. The shroud first surfaced in the 14th century and was only recently carbon-14 dated. It has not been determined how the image was placed on the material. (credit: Butko, Wikimedia Commons)

:::example {ex:fs-id2653660} How Old Is the Shroud of Turin?
Calculate the age of the Shroud of Turin given that the amount of ${}^{\text{14}}\text{C}$ found in it is 92% of that in living tissue.
**Strategy**
Knowing that 92% of the ${}^{\text{14}}\text{C}$ remains means that $N/{N}_{0}=0\text{.}\text{92}$. Therefore, the equation $N={N}_{0}{e}^{-λt}$ can be used to find $λt$. We also know that the half-life of ${}^{\text{14}}\text{C}$ is 5730 y, and so once $λt$ is known, we can use the equation $λ=\frac{0\text{.}\text{693}}{{t}_{1/2}}$ to find $λ$ and then find $t$ as requested. Here, we postulate that the decrease in ${}^{\text{14}}\text{C}$ is solely due to nuclear decay.
**Solution**
Solving the equation $N={N}_{0}{e}^{-λt}$ for $N/{N}_{0}$ gives

$$ \frac{N}{{N}_{0}}={e}^{-λt}\text{.} $$  {eq:eip-110}

Thus,

$$ 0\text{.}\text{92}={e}^{-λt}\text{.} $$  {eq:eip-434}

Taking the natural logarithm of both sides of the equation yields

$$ \text{ln}\;0\text{.}\text{92}=–λt $$  {eq:eip-963}

so that

$$ -0\text{.}\text{0834}=-λt\text{.} $$  {eq:eip-940}

Rearranging to isolate $t$ gives

$$ t=\frac{0\text{.}\text{0834}}{λ}\text{.} $$  {eq:eip-716}

Now, the equation $λ=\frac{0\text{.}\text{693}}{{t}_{1/2}}$ can be used to find $λ$ for ${}^{\text{14}}\text{C}$. Solving for $λ$ and substituting the known half-life gives

$$ λ=\frac{0\text{.}\text{693}}{{t}_{1/2}}=\frac{0\text{.}\text{693}}{\text{5730 y}}\text{.} $$  {eq:eip-838}

We enter this value into the previous equation to find $t$:

$$ t=\frac{0\text{.}\text{0834}}{\frac{0\text{.}\text{693}}{\text{5730 y}}}=\text{690 y.} $$  {eq:eip-995}

**Discussion**
This dates the material in the shroud to 1988–690 = a.d. 1300. Our calculation is only accurate to two digits, so that the year is rounded to 1300. The values obtained at the three independent laboratories gave a weighted average date of a.d. $\text{1320}\pm \text{60}$. The uncertainty is typical of carbon-14 dating and is due to the small amount of ${}^{\text{14}}\text{C}$ in living tissues, the amount of material available, and experimental uncertainties (reduced by having three independent measurements). It is meaningful that the date of the shroud is consistent with the first record of its existence and inconsistent with the period in which Jesus lived.
:::
There are other forms of radioactive dating. Rocks, for example, can sometimes be dated based on the decay of ${}^{\text{238}}\text{U}$. The decay series for ${}^{\text{238}}\text{U}$ ends with ${}^{\text{206}}\text{Pb}$, so that the ratio of these nuclides in a rock is an indication of how long it has been since the rock solidified. The original composition of the rock, such as the absence of lead, must be known with some confidence. However, as with carbon-14 dating, the technique can be verified by a consistent body of knowledge. Since ${}^{\text{238}}\text{U}$ has a half-life of $4\text{.}5\times {\text{10}}^{9}$ y, it is useful for dating only very old materials, showing, for example, that the oldest rocks on Earth solidified about $3\text{.}5\times {\text{10}}^{9}$ years ago.

## Activity, the Rate of Decay
What do we mean when we say a source is highly radioactive? Generally, this means the number of decays per unit time is very high. We define {term:activity}  $R$ to be the {term:rate of decay} expressed in decays per unit time. In equation form, this is

$$ R=\frac{\Delta N}{\Delta t} $$  {eq:eip-674}

where $\text{Δ}N$ is the number of decays that occur in time $\text{Δ}t$. The SI unit for activity is one decay per second and is given the name {term:becquerel} (Bq) in honor of the discoverer of radioactivity. That is,

$$ 1\;\text{Bq}=\text{1 decay/s.} $$  {eq:eip-271}

Activity $R$ is often expressed in other units, such as decays per minute or decays per year. One of the most common units for activity is the {term:curie} (Ci), defined to be the activity of 1 g of ${}^{\text{226}}\text{Ra}$, in honor of Marie Curie’s work with radium. The definition of curie is

$$ \text{1 Ci}=3\text{.}\text{70}\times {\text{10}}^{\text{10}}\;\text{Bq,} $$  {eq:eip-90}

or $3\text{.}\text{70}\times {\text{10}}^{\text{10}}$ decays per second. A curie is a large unit of activity, while a becquerel is a relatively small unit. $\text{1 MBq}=\text{100 microcuries}\;(μ\text{Ci})$. In countries like Australia and New Zealand that adhere more to SI units, most radioactive sources, such as those used in medical diagnostics or in physics laboratories, are labeled in Bq or megabecquerel (MBq).
Intuitively, you would expect the activity of a source to depend on two things: the amount of the radioactive substance present, and its half-life. The greater the number of radioactive nuclei present in the sample, the more will decay per unit of time. The shorter the half-life, the more decays per unit time, for a given number of nuclei. So activity $R$ should be proportional to the number of radioactive nuclei, $N$, and inversely proportional to their half-life, ${t}_{1/2}$. In fact, your intuition is correct. It can be shown that the activity of a source is

$$ R=\frac{0\text{.}\text{693}N}{{t}_{1/2}} $$  {eq:eip-689}

where $N$ is the number of radioactive nuclei present, having half-life ${t}_{1/2}$. This relationship is useful in a variety of calculations, as the next two examples illustrate.

:::example {ex:fs-id3024064} How Great Is the ${}^{\text{14}}\text{C}$ Activity in Living Tissue?
Calculate the activity due to ${}^{\text{14}}\text{C}$ in 1.00 kg of carbon found in a living organism. Express the activity in units of Bq and Ci.
**Strategy**
To find the activity $R$ using the equation $R=\frac{0\text{.}\text{693}N}{{t}_{1/2}}$, we must know $N$ and ${t}_{1/2}$. The half-life of ${}^{\text{14}}\text{C}$ can be found in [Appendix B](module:m42702), and was stated above as 5730 y. To find $N$, we first find the number of ${}^{\text{12}}\text{C}$ nuclei in 1.00 kg of carbon using the concept of a mole. As indicated, we then multiply by $1\text{.}3×{\text{10}}^{-\text{12}}$ (the abundance of ${}^{\text{14}}\text{C}$ in a carbon sample from a living organism) to get the number of ${}^{\text{14}}\text{C}$ nuclei in a living organism.
**Solution**
One mole of carbon has a mass of 12.0 g, since it is nearly pure ${}^{\text{12}}\text{C}$. (A mole has a mass in grams equal in magnitude to $A$ found in the periodic table.) Thus the number of carbon nuclei in a kilogram is

$$ N({}^{12}\text{C})=\frac{6.02\times {\text{10}}^{\text{23}}\;{\text{mol}}^{–1}}{12.0 g/mol}\times \text{(1000 g)}=\text{5.02}\times {\text{10}}^{\text{25}}\text{.} $$  {eq:eip-999}

So the number of ${}^{\text{14}}\text{C}$ nuclei in 1 kg of carbon is

$$ N({}^{\text{14}}\text{C})=(5.02\times {\text{10}}^{\text{25}})(1.3\times {\text{10}}^{\text{−12}})=6.52\times {\text{10}}^{\text{13}}\text{.} $$  {eq:eip-367}

Now the activity $R$ is found using the equation $R=\frac{0\text{.}\text{693}N}{{t}_{1/2}}$.
Entering known values gives

$$ R=\frac{0\text{.}\text{693}(6\text{.}\text{52}×{\text{10}}^{\text{13}})}{\text{5730 y}}=7\text{.}\text{89}×{\text{10}}^{9}\;{\text{y}}^{–1}, $$  {eq:eip-515}

or $7\text{.}\text{89}\times {\text{10}}^{9}$ decays per year. To convert this to the unit Bq, we simply convert years to seconds. Thus,

$$ R=(\text{7.89}×{\text{10}}^{9}\;{\text{y}}^{–1})\frac{1.00 y}{3\text{.}\text{16}×{\text{10}}^{7}\;\text{s}}=\text{250 Bq,} $$  {eq:eip-403}

or 250 decays per second. To express $R$ in curies, we use the definition of a curie,

$$ R=\frac{\text{250 Bq}}{3.7×{\text{10}}^{\text{10}}\;\text{Bq/Ci}}=6.76×{\text{10}}^{-9}\;\text{Ci.} $$  {eq:eip-172}

Thus,

$$ R=6.76\;\text{nCi.} $$  {eq:eip-478}

**Discussion**
Our own bodies contain kilograms of carbon, and it is intriguing to think there are hundreds of ${}^{\text{14}}\text{C}$ decays per second taking place in us. Carbon-14 and other naturally occurring radioactive substances in our bodies contribute to the background radiation we receive. The small number of decays per second found for a kilogram of carbon in this example gives you some idea of how difficult it is to detect ${}^{\text{14}}\text{C}$ in a small sample of material. If there are 250 decays per second in a kilogram, then there are 0.25 decays per second in a gram of carbon in living tissue. To observe this, you must be able to distinguish decays from other forms of radiation, in order to reduce background noise. This becomes more difficult with an old tissue sample, since it contains less ${}^{\text{14}}\text{C}$, and for samples more than 50 thousand years old, it is impossible.
:::
Human-made (or artificial) radioactivity has been produced for decades and has many uses. Some of these include medical therapy for cancer, medical imaging and diagnostics, and food preservation by irradiation. Many applications as well as the biological effects of radiation are explored in [Medical Applications of Nuclear Physics](module:m42649), but it is clear that radiation is hazardous. A number of tragic examples of this exist, one of the most disastrous being the meltdown and fire at the Chernobyl reactor complex in the Ukraine (see [ref:import-auto-id2023857]). Several radioactive isotopes were released in huge quantities, contaminating many thousands of square kilometers and directly affecting hundreds of thousands of people. The most significant releases were of ${}^{\text{131}}\text{I}$, ${}^{\text{90}}\text{Sr}$, ${}^{\text{137}}\text{Cs}$, ${}^{\text{239}}\text{Pu}$, ${}^{\text{238}}\text{U}$, and ${}^{\text{235}}\text{U}$. Estimates are that the total amount of radiation released was about 100 million curies.

## Human and Medical Applications

> FIGURE {fig:import-auto-id2023857} src=../../media/Figure_32_05_03a.jpg
> alt: A person holding a hand held radiation detector near the Chernobyl reactor.
> width: 250
> caption: The Chernobyl reactor. More than 100 people died soon after its meltdown, and there will be thousands of deaths from radiation-induced cancer in the future. While the accident was due to a series of human errors, the cleanup efforts were heroic. Most of the immediate fatalities were firefighters and reactor personnel. (credit: Elena Filatova)

:::example {ex:fs-id3191546} What Mass of ${}^{\text{137}}\text{Cs}$ Escaped Chernobyl?
It is estimated that the Chernobyl disaster released 6.0 MCi of ${}^{\text{137}}\text{Cs}$ into the environment. Calculate the mass of ${}^{\text{137}}\text{Cs}$ released.
**Strategy**
We can calculate the mass released using Avogadro’s number and the concept of a mole if we can first find the number of nuclei $N$ released. Since the activity $R$ is given, and the half-life of ${}^{\text{137}}\text{Cs}$ is found in [Appendix B](module:m42702) to be 30.2 y, we can use the equation $R=\frac{0\text{.}\text{693}N}{{t}_{1/2}}$ to find $N$.
**Solution**
Solving the equation $R=\frac{0\text{.}\text{693}N}{{t}_{1/2}}$ for $N$ gives

$$ N=\frac{{\text{Rt}}_{1/2}}{\text{0.693}}\text{.} $$  {eq:eip-92}

Entering the given values yields

$$ N=\frac{(6.0 MCi)(\text{30}\text{.}2 y)}{0\text{.}\text{693}}\text{.} $$  {eq:eip-702}

Converting curies to becquerels and years to seconds, we get

$$ \begin{array}{lll}N & = & \frac{(6\text{.}0×{\text{10}}^{6}\;\text{Ci})(3\text{.}7×{\text{10}}^{\text{10}}\;\text{Bq/Ci})(\text{30.2 y})(3\text{.}\text{16}×{\text{10}}^{7}\;\text{s/y})}{\text{0.693}} \\ & = & 3\text{.}1\times {\text{10}}^{\text{26}}\text{.}\end{array} $$  {eq:eip-857}

One mole of a nuclide ${}^{A}X$ has a mass of $A$ grams, so that one mole of ${}^{\text{137}}\text{Cs}$ has a mass of 137 g. A mole has $6\text{.}\text{02}\times {\text{10}}^{\text{23}}$ nuclei. Thus the mass of ${}^{\text{137}}\text{Cs}$ released was

$$ \begin{array}{lll}m & = & (\frac{\text{137 g}}{\text{6.02}\times {\text{10}}^{\text{23}}})(3\text{.}1\times {\text{10}}^{\text{26}})=\text{70}\times {\text{10}}^{3}\;\text{g} \\ & = & \text{70 kg.}\end{array} $$  {eq:eip-187}

**Discussion**
While 70 kg of material may not be a very large mass compared to the amount of fuel in a power plant, it is extremely radioactive, since it only has a 30-year half-life. Six megacuries (6.0 MCi) is an extraordinary amount of activity but is only a fraction of what is produced in nuclear reactors. Similar amounts of the other isotopes were also released at Chernobyl. Although the chances of such a disaster may have seemed small, the consequences were extremely severe, requiring greater caution than was used. More will be said about safe reactor design in the next chapter, but it should be noted that more recent reactors have a fundamentally safer design.
:::
Activity $R$ decreases in time, going to half its original value in one half-life, then to one-fourth its original value in the next half-life, and so on. Since $R=\frac{0\text{.}\text{693}N}{{t}_{1/2}}$, the activity decreases as the number of radioactive nuclei decreases. The equation for $R$ as a function of time is found by combining the equations $N={N}_{0}{e}^{-λt}$ and $R=\frac{0\text{.}\text{693}N}{{t}_{1/2}}$, yielding

$$ R={R}_{0}{e}^{-λt}\text{,} $$  {eq:eip-874}

where ${R}_{0}$ is the activity at $t=0$. This equation shows exponential decay of radioactive nuclei. For example, if a source originally has a 1.00-mCi activity, it declines to 0.500 mCi in one half-life, to 0.250 mCi in two half-lives, to 0.125 mCi in three half-lives, and so on. For times other than whole half-lives, the equation $R={R}_{0}{e}^{-λt}$ must be used to find $R$.

:::note [interactive] Alpha Decay

Watch alpha particles escape from a polonium nucleus, causing radioactive alpha decay. See how random decay times relate to the half life.
[Click to view content](https://openstax.org/l/02alphadecay).
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1705205} type=ap-test-prep 
PROBLEM:
A radioactive sample has N atoms initially. After 3 half-lives have elapsed, how many atoms remain?
(a) N/3
(b) N/6
(c) N/8
(d) N/27
:::

:::exercise {fs-id1400928} type=ap-test-prep 
PROBLEM:
When $\text{P}84215\text{o}$ decays, the product is $\text{P}82211\text{b.}$ The half-life of this decay process is 1.78 ms. If the initial sample contains 3.4 x 10<sup>17</sup> parent nuclei, how many are remaining after 35 ms have elapsed? What kind of decay process is this (alpha, beta, or gamma)?
SOLUTION:
This must be alpha decay since 4 nucleons (2 positive charges) are lost from the parent nucleus. The number remaining is found from:
$\text{N}(t)={\text{N}}_{0}e(\frac{-0.693t}{\frac{{t}_{1}}{2}})=3.4\times {10}^{17}e(\frac{-(0.693)(0.035)}{0.00173})$
$\text{N}(t)=4.1\times {10}^{11}$ nuclei
:::

## Section Summary {section:section-summary}
- Half-life ${t}_{1/2}$ is the time in which there is a 50% chance that a nucleus will decay. The number of nuclei $N$ as a function of time is

$$ N={N}_{0}{e}^{-λt}, $$  {eq:eip-693}

where ${N}_{0}$ is the number present at $t=0$, and $λ$ is the decay constant, related to the half-life by

$$ λ=\frac{0\text{.}\text{693}}{{t}_{1/2}}. $$  {eq:eip-705}

- One of the applications of radioactive decay is radioactive dating, in which the age of a material is determined by the amount of radioactive decay that occurs. The rate of decay is called the activity $R$:

$$ R=\frac{\text{Δ}N}{\text{Δ}t}. $$  {eq:eip-723}

- The SI unit for $R$ is the becquerel (Bq), defined by

$$ \text{1 Bq}=\text{1 decay/s.} $$  {eq:eip-822}

- $R$ is also expressed in terms of curies (Ci), where

$$ 1\;\text{Ci}=3\text{.}\text{70}\times {\text{10}}^{\text{10}}\;\text{Bq.} $$  {eq:fs-id1328249}

- The activity $R$ of a source is related to $N$ and ${t}_{1/2}$ by

$$ R=\frac{0\text{.}\text{693}N}{{t}_{1/2}}. $$  {eq:eip-807}

- Since $N$ has an exponential behavior as in the equation $N={N}_{0}{e}^{-λt}$, the activity also has an exponential behavior, given by

$$ R={R}_{0}{e}^{-λt}, $$  {eq:eip-166}

where ${R}_{0}$ is the activity at $t=0$.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id2655147} type=conceptual-questions 
PROBLEM:
In a $3\times {\text{10}}^{9}$-year-old rock that originally contained some ${}^{\text{238}}\text{U}$, which has a half-life of $4.5\times {\text{10}}^{9}$ years, we expect to find some ${}^{\text{238}}\text{U}$ remaining in it. Why are ${}^{\text{226}}\text{Ra}$, ${}^{\text{222}}\text{Rn}$, and ${}^{\text{210}}\text{Po}$ also found in such a rock, even though they have much shorter half-lives (1600 years, 3.8 days, and 138 days, respectively)?
:::

:::exercise {fs-id2404373} type=conceptual-questions 
PROBLEM:
Does the number of radioactive nuclei in a sample decrease to *exactly* half its original value in one half-life? Explain in terms of the statistical nature of radioactive decay.
:::

:::exercise {fs-id1439074} type=conceptual-questions 
PROBLEM:
Radioactivity depends on the nucleus and not the atom or its chemical state. Why, then, is one kilogram of uranium more radioactive than one kilogram of uranium hexafluoride?
:::

:::exercise {fs-id1562211} type=conceptual-questions 
PROBLEM:
Explain how a bound system can have less mass than its components. Why is this not observed classically, say for a building made of bricks?
:::

:::exercise {fs-id3181573} type=conceptual-questions 
PROBLEM:
Spontaneous radioactive decay occurs only when the decay products have less mass than the parent, and it tends to produce a daughter that is more stable than the parent. Explain how this is related to the fact that more tightly bound nuclei are more stable. (Consider the binding energy per nucleon.)
:::

:::exercise {fs-id2621402} type=conceptual-questions 
PROBLEM:
To obtain the most precise value of BE from the equation $\text{BE=}[\text{ZM}({}^{1}\text{H})+{\text{Nm}}_{n}]{c}^{2}-m({}^{A}X){c}^{2}$, we should take into account the binding energy of the electrons in the neutral atoms. Will doing this produce a larger or smaller value for BE? Why is this effect usually negligible?
:::

:::exercise {fs-id1464742} type=conceptual-questions 
PROBLEM:
How does the finite range of the nuclear force relate to the fact that $\text{BE}/A$ is greatest for $A$ near 60?
:::

## Problems & Exercises {section:problems-exercises}
Data from the appendices and the periodic table may be needed for these problems.

:::exercise {fs-id2391582} type=problems-exercises 
PROBLEM:
An old campfire is uncovered during an archaeological dig. Its charcoal is found to contain less than 1/1000 the normal amount of ${}^{\text{14}}\text{C}$. Estimate the minimum age of the charcoal, noting that ${2}^{\text{10}}=\text{1024}$.
SOLUTION:
57,300 y
:::

:::exercise {fs-id3148681} type=problems-exercises 
PROBLEM:
A ${}^{\text{60}}\text{Co}$ source is labeled 4.00 mCi, but its present activity is found to be $1\text{.}\text{85}\times {\text{10}}^{7}$ Bq. (a) What is the present activity in mCi? (b) How long ago did it actually have a 4.00-mCi activity?
:::

:::exercise {fs-id2392383} type=problems-exercises 
PROBLEM:
(a) Calculate the activity $R$ in curies of 1.00 g of ${}^{\text{226}}\text{Ra}$. (b) Discuss why your answer is not exactly 1.00 Ci, given that the curie was originally supposed to be exactly the activity of a gram of radium.
SOLUTION:
(a) 0.988 Ci
(b) The half-life of ${}^{\text{226}}\text{Ra}$ is now better known.
:::

:::exercise {fs-id3081858} type=problems-exercises 
PROBLEM:
Show that the activity of the ${}^{\text{14}}\text{C}$ in 1.00 g of ${}^{\text{12}}\text{C}$ found in living tissue is 0.250 Bq.
:::

:::exercise {fs-id3408229} type=problems-exercises 
PROBLEM:
Mantles for gas lanterns contain thorium, because it forms an oxide that can survive being heated to incandescence for long periods of time. Natural thorium is almost 100% ${}^{\text{232}}\text{Th}$, with a half-life of $1\text{.}\text{405}\times {\text{10}}^{\text{10}}\;\text{y}$. If an average lantern mantle contains 300 mg of thorium, what is its activity?
SOLUTION:
$1.22\times {\text{10}}^{3}\;\text{Bq}$
:::

:::exercise {fs-id3116466} type=problems-exercises 
PROBLEM:
Cow’s milk produced near nuclear reactors can be tested for as little as 1.00 pCi of ${}^{\text{131}}\text{I}$ per liter, to check for possible reactor leakage. What mass of ${}^{\text{131}}\text{I}$ has this activity?
:::

:::exercise {fs-id2070004} type=problems-exercises 
PROBLEM:
(a) Natural potassium contains ${}^{\text{40}}\text{K}$, which has a half-life of $1\text{.}\text{277}\times {\text{10}}^{9}$ y. What mass of ${}^{\text{40}}\text{K}$ in a person would have a decay rate of 4140 Bq? (b) What is the fraction of ${}^{\text{40}}\text{K}$ in natural potassium, given that the person has 140 g in his body? (These numbers are typical for a 70-kg adult.)
SOLUTION:
(a) 16.0 mg
(b) 0.0114%
:::

:::exercise {fs-id2382905} type=problems-exercises 
PROBLEM:
There is more than one isotope of natural uranium. If a researcher isolates 1.00 mg of the relatively scarce ${}^{\text{235}}\text{U}$ and finds this mass to have an activity of 80.0 Bq, what is its half-life in years?
:::

:::exercise {fs-id2011543} type=problems-exercises 
PROBLEM:
${}^{\text{50}}\text{V}$ has one of the longest known radioactive half-lives. In a difficult experiment, a researcher found that the activity of 1.00 kg of ${}^{\text{50}}\text{V}$ is 1.75 Bq. What is the half-life in years?
SOLUTION:
$1.48\times {\text{10}}^{\text{17}}\;\text{y}$
:::

:::exercise {fs-id2653513} type=problems-exercises 
PROBLEM:
You can sometimes find deep red crystal vases in antique stores, called uranium glass because their color was produced by doping the glass with uranium. Look up the natural isotopes of uranium and their half-lives, and calculate the activity of such a vase assuming it has 2.00 g of uranium in it. Neglect the activity of any daughter nuclides.
:::

:::exercise {fs-id2440734} type=problems-exercises 
PROBLEM:
A tree falls in a forest. How many years must pass before the ${}^{\text{14}}\text{C}$ activity in 1.00 g of the tree’s carbon drops to 1.00 decay per hour?
SOLUTION:
$5.6\times {\text{10}}^{4}\;y$
:::

:::exercise {fs-id2617155} type=problems-exercises 
PROBLEM:
What fraction of the ${}^{\text{40}}\text{K}$ that was on Earth when it formed $4\text{.}5\times {\text{10}}^{9}$ years ago is left today?
:::

:::exercise {fs-id1935760} type=problems-exercises 
PROBLEM:
A 5000-Ci ${}^{\text{60}}\text{Co}$ source used for cancer therapy is considered too weak to be useful when its activity falls to 3500 Ci. How long after its manufacture does this happen?
SOLUTION:
2.71 y
:::

:::exercise {fs-id3046854} type=problems-exercises 
PROBLEM:
Natural uranium is 0.7200% ${}^{\text{235}}\text{U}$ and 99.27% ${}^{\text{238}}\text{U}$. What were the percentages of ${}^{\text{235}}\text{U}$ and ${}^{\text{238}}\text{U}$ in natural uranium when Earth formed $4\text{.}5\times {\text{10}}^{9}$ years ago?
:::

:::exercise {fs-id2681183} type=problems-exercises 
PROBLEM:
The ${β}^{-}$ particles emitted in the decay of ${}^{3}\text{H}$ (tritium) interact with matter to create light in a glow-in-the-dark exit sign. At the time of manufacture, such a sign contains 15.0 Ci of ${}^{3}\text{H}$. (a) What is the mass of the tritium? (b) What is its activity 5.00 y after manufacture?
SOLUTION:
(a) 1.56 mg
(b) 11.3 Ci
:::

:::exercise {fs-id3052731} type=problems-exercises 
PROBLEM:
World War II aircraft had instruments with glowing radium-painted dials (see [ref:import-auto-id3209830](module:m42623)). The activity of one such instrument was $1.0\times {\text{10}}^{5}$ Bq when new. (a) What mass of ${}^{\text{226}}\text{Ra}$ was present? (b) After some years, the phosphors on the dials deteriorated chemically, but the radium did not escape. What is the activity of this instrument 57.0 years after it was made?
:::

:::exercise {fs-id2935919} type=problems-exercises 
PROBLEM:
(a) The ${}^{\text{210}}\text{Po}$ source used in a physics laboratory is labeled as having an activity of $1.0\;μ\text{Ci}$ on the date it was prepared. A student measures the radioactivity of this source with a Geiger counter and observes 1500 counts per minute. She notices that the source was prepared 120 days before her lab. What fraction of the decays is she observing with her apparatus? (b) Identify some of the reasons that only a fraction of the $\alpha$ s emitted are observed by the detector.
SOLUTION:
(a) $\text{1.23}\times {\text{10}}^{-3}$
(b) Only part of the emitted radiation goes in the direction of the detector. Only a fraction of that causes a response in the detector. Some of the emitted radiation (mostly $\alpha$ particles) is observed within the source. Some is absorbed within the source, some is absorbed by the detector, and some does not penetrate the detector.
:::

:::exercise {fs-id1429071} type=problems-exercises 
PROBLEM:
Armor-piercing shells with depleted uranium cores are fired by aircraft at tanks. (The high density of the uranium makes them effective.) The uranium is called depleted because it has had its ${}^{\text{235}}\text{U}$ removed for reactor use and is nearly pure ${}^{\text{238}}\text{U}$. Depleted uranium has been erroneously called non-radioactive. To demonstrate that this is wrong: (a) Calculate the activity of 60.0 g of pure ${}^{\text{238}}\text{U}$. (b) Calculate the activity of 60.0 g of natural uranium, neglecting the ${}^{\text{234}}\text{U}$ and all daughter nuclides.
:::

:::exercise {eip-525} type=problems-exercises 
PROBLEM:
The ceramic glaze on a red-orange Fiestaware plate is  ${\text{U}}_{2}{\text{O}}_{3}$ and contains 50.0 grams of  ${}^{238}\text{U}$ , but very little  ${}^{235}\text{U}$. (a) What is the activity of the plate? (b) Calculate the total energy that will be released by the ${}^{238}\text{U}$  decay. (c) If energy is worth 12.0 cents per $\text{kW}⋅\text{h}$, what is the monetary value of the energy emitted? (These plates went out of production some 30 years ago, but are still available as collectibles.)
SOLUTION:
(a) $1.68\times {10}^{-5}\;\text{Ci}$
(b) $8.65\times {10}^{10}\;\text{J}$
(c) $$2.9\times {10}^{3}$
:::

:::exercise {eip-947} type=problems-exercises 
PROBLEM:
Large amounts of depleted uranium (${}^{238}\text{U}$) are available as a by-product of uranium processing for reactor fuel and weapons. Uranium is very dense and makes good counter weights for aircraft. Suppose you have a 4000-kg block of ${}^{238}\text{U}$. (a) Find its activity. (b) How many calories per day are generated by thermalization of the decay energy? (c) Do you think you could detect this as heat? Explain.
:::

:::exercise {eip-660} type=problems-exercises 
PROBLEM:
The *Galileo* space probe was launched on its long journey past several planets in 1989, with an ultimate goal of Jupiter. Its power source is 11.0 kg of  ${}^{238}\text{Pu}$, a by-product of nuclear weapons plutonium production. Electrical energy is generated thermoelectrically from the heat produced when the 5.59-MeV $\alpha$ particles emitted in each decay crash to a halt inside the plutonium and its shielding. The half-life of ${}^{238}\text{Pu}$ is 87.7 years. (a) What was the original activity of the ${}^{238}\text{Pu}$  in becquerel? (b) What power was emitted in kilowatts? (c) What power was emitted 12.0 y after launch? You may neglect any extra energy from daughter nuclides and any losses from escaping  $\gamma$ rays.
SOLUTION:
(a) $6.97\times {10}^{15}\;\text{Bq}$
(b) 6.24 kW
(c) 5.67 kW
:::

:::exercise {eip-575} type=problems-exercises 
PROBLEM:
**Construct Your Own Problem**
Consider the generation of electricity by a radioactive isotope in a space probe, such as described in [ref:eip-660]. Construct a problem in which you calculate the mass of a radioactive isotope you need in order to supply power for a long space flight. Among the things to consider are the isotope chosen, its half-life and decay energy, the power needs of the probe and the length of the flight.
:::

:::exercise {eip-528} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
A nuclear physicist finds $1.0\;μ\text{g}$ of ${}^{236}\text{U}$   in a piece of uranium ore and assumes it is primordial since its half-life is  $2.3\times {10}^{7}\;\text{y}$. (a) Calculate the amount of ${}^{236}\text{U}$that would had to have been on Earth when it formed $4.5\times {10}^{9}\;\text{y}$  ago for $1.0\;μ\text{g}$  to be left today. (b) What is unreasonable about this result? (c) What assumption is responsible?
:::

:::exercise {eip-751} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
(a) Repeat [ref:fs-id3046854] but include the 0.0055% natural abundance of ${}^{234}\text{U}$ with its $2.45\times {10}^{5}\;\text{y}$ half-life. (b) What is unreasonable about this result? (c) What assumption is responsible? (d) Where does the  ${}^{234}\text{U}$ come from if it is not primordial?
:::

:::exercise {eip-68} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
The manufacturer of a smoke alarm decides that the smallest current of  $\alpha$ radiation he can detect is $1.00\;μ\text{A}$. (a) Find the activity in curies of an $\alpha \text{}$  emitter that produces a $1.00\;μ\text{A}$ current of $\alpha$  particles. (b) What is unreasonable about this result? (c) What assumption is responsible?
SOLUTION:
(a) 84.5 Ci
(b) An extremely large activity, many orders of magnitude greater than permitted for home use.
(c) The assumption of $1.00\;\mu \text{A}$ is unreasonably large. Other methods can detect much smaller decay rates.
:::

## Glossary
- {def} **becquerel**: SI unit for rate of decay of a radioactive material
- {def} **half-life**: the time in which there is a 50% chance that a nucleus will decay
- {def} **radioactive dating**: an application of radioactive decay in which the age of a material is determined by the amount of radioactivity of a particular type that occurs
- {def} **decay constant**: quantity that is inversely proportional to the half-life and that is used in equation for number of nuclei as a function of time
- {def} **carbon-14 dating**: a radioactive dating technique based on the radioactivity of carbon-14
- {def} **activity**: the rate of decay for radioactive nuclides
- {def} **rate of decay**: the number of radioactive events per unit time
- {def} **curie**: the activity of 1g of     ${}^{\text{226}}\text{Ra}$, equal to     $\text{3.70}\times {\text{10}}^{\text{10}}\;\text{Bq}$

# Energy Stored in Capacitors

## Learning Objectives {section:learning-objectives}
By the end of this section, you will be able to:
- List some uses of capacitors.
- Express in equation form the energy stored in a capacitor.
- Explain the function of a defibrillator.

## 
Most of us have seen dramatizations in which medical personnel use a {term:defibrillator} to pass an electric current through a patient’s heart to get it to beat normally. (Review [ref:import-auto-id3096543].) Often realistic in detail, the person applying the shock directs another person to “make it 400 joules this time.” The energy delivered by the defibrillator is stored in a capacitor and can be adjusted to fit the situation. SI units of joules are often employed. Less dramatic is the use of capacitors in microelectronics, such as certain handheld calculators, to supply energy when batteries are charged. (See [ref:import-auto-id3096543].) Capacitors are also used to supply energy for flash lamps on cameras.

> FIGURE {fig:import-auto-id3096543} src=../../media/Figure_20_07_01a.jpg
> alt: In an electronic calculator circuit the memory is preserved using large capacitors which store energy when the batteries are charged.
> width: 250
> caption: Energy stored in the large capacitor is used to preserve the memory of an electronic calculator when its batteries are charged. (credit: Kucharek, Wikimedia Commons)

Energy stored in a capacitor is electrical potential energy, and it is thus related to the charge $Q$ and voltage $V$ on the capacitor. We must be careful when applying the equation for electrical potential energy $\text{Δ}\text{PE}=q\text{Δ}V\;$ to a capacitor. Remember that $\text{Δ}\text{PE}$ is the potential energy of a charge *$q$* going through a voltage $\text{Δ}V$. But the capacitor starts with zero voltage and gradually comes up to its full voltage as it is charged. The first charge placed on a capacitor experiences a change in voltage $\text{Δ}V=0$, since the capacitor has zero voltage when uncharged. The final charge placed on a capacitor experiences $\text{Δ}V=V$, since the capacitor now has its full voltage $V$ on it. The average voltage on the capacitor during the charging process is $V/2$, and so the average voltage experienced by the full charge *$q$* is $V/2$. Thus the energy stored in a capacitor, ${E}_{\text{cap}}$, is

$$ {E}_{\text{cap}}=\frac{QV}{2}, $$  {eq:eip-858}

where $Q$ is the charge on a capacitor with a voltage $V$ applied. (Note that the energy is not $\text{QV}$, but $\text{QV}/2$.) Charge and voltage  are related to the capacitance $C$ of a capacitor by $Q=\text{CV}$, and so the expression for ${E}_{\text{cap}}$ can be algebraically manipulated into three equivalent expressions:

$$ {E}_{\text{cap}}=\frac{\text{QV}}{2}=\frac{{\text{CV}}^{2}}{2}=\frac{{Q}^{2}}{2C}, $$  {eq:eip-671}

where $Q$ is the charge and $V$ the voltage on a capacitor $C$. The energy is in joules for a charge in coulombs, voltage in volts, and capacitance in farads.

:::note [] Energy Stored in Capacitors

The energy stored in a capacitor can be expressed in three ways:

$$ {E}_{\text{cap}}=\frac{\text{QV}}{2}=\frac{{\text{CV}}^{2}}{2}=\frac{{Q}^{2}}{2C}, $$  {eq:eip-91}

where $Q$ is the charge, $V$ is the voltage, and $C$ is the capacitance of the capacitor. The energy is in joules for a charge in coulombs, voltage in volts, and capacitance in farads.
:::
In a defibrillator, the delivery of a large charge in a short burst to a set of paddles across a person’s chest can be a lifesaver. The person’s heart attack might have arisen from the onset of fast, irregular beating of the heart—cardiac or ventricular fibrillation. The application of a large shock of electrical energy can terminate the arrhythmia and allow the body’s pacemaker to resume normal patterns. Today it is common for ambulances to carry a defibrillator, which also uses an electrocardiogram to analyze the patient’s heartbeat pattern. Automated external defibrillators (AED) are found in many public places ([ref:import-auto-id1516605]). These are designed to be used by lay persons. The device automatically diagnoses the patient’s heart condition and then applies the shock with appropriate energy and waveform. CPR is recommended in many cases before use of an AED.

> FIGURE {fig:import-auto-id1516605} src=../../media/Figure_20_07_02a.jpg
> alt: Photograph of an automated external defibrillator.
> width: 250
> caption: Automated external defibrillators are found in many public places. These portable units provide verbal instructions for use in the important first few minutes for a person suffering a cardiac attack. (credit: Owain Davies, Wikimedia Commons)

:::example {ex:fs-id2725068} Capacitance in a Heart Defibrillator
A heart defibrillator delivers $4.00\times {\text{10}}^{\text{2}}\;\text{J}$ of energy by discharging a capacitor initially at $1.00\times {\text{10}}^{\text{4}}\;\text{V}$. What is its capacitance?
**Strategy**
We are given ${E}_{\text{cap}}$ and $V$, and we are asked to find the capacitance $C$. Of the three expressions in the equation for ${E}_{\text{cap}}$, the most convenient relationship is

$$ {E}_{\text{cap}}=\frac{{\text{CV}}^{2}}{2}. $$  {eq:eip-254}

**Solution**
Solving this expression for $C$ and entering the given values yields

$$ \begin{array}{lll}C & = & \frac{2{E}_{\text{cap}}}{{V}^{2}}=\frac{2(4\text{.}\text{00}×{\text{10}}^{2}\;\text{J})}{(1\text{.}\text{00}×{\text{10}}^{4}\;\text{V}{)}^{2}}=8\text{.}\text{00}×{\text{10}}^{-6}\;\text{F} \\ & = & \text{8.00 µF.}\end{array} $$  {eq:eip-448}

**Discussion**
This is a fairly large, but manageable, capacitance at $1.00\times {\text{10}}^{\text{4}}\;\text{V}$.
:::

## Test Prep for AP Courses {section:ap-test-prep}

:::exercise {fs-id1679446} type=ap-test-prep 
PROBLEM:
Consider a parallel plate capacitor, with no dielectric material, attached to a battery with a fixed voltage. What happens when a dielectric is inserted into the capacitor?
(a) Nothing changes, except now there is a dielectric in the capacitor.
(b) The energy in the system decreases, making it very easy to move the dielectric in.
(c) You have to do work to move the dielectric, increasing the energy in the system.
(d) The reversed polarity destroys the battery.
SOLUTION:
(c)
:::

:::exercise {fs-id1635118} type=ap-test-prep 
PROBLEM:
Consider a parallel plate capacitor with no dielectric material. It was attached to a battery with a fixed voltage to charge up, but now the battery has been disconnected. What happens to the energy of the system and the dielectric material when a dielectric is inserted into the capacitor?
:::

:::exercise {fs-id1381555} type=ap-test-prep 
PROBLEM:
What happens to the energy stored in a circuit as you increase the number of capacitors connected in parallel? Series?
(a) increases, increases
(b) increases, decreases
(c) decreases, increases
(d) decreases, decreases
SOLUTION:
(b)
:::

:::exercise {fs-id2643905} type=ap-test-prep 
PROBLEM:
What would the capacitance of a capacitor with the same total internal energy as the car battery in Example 19.1 have to be? Can you explain why we use batteries instead of capacitors for this application?
:::

:::exercise {fs-id2646945} type=ap-test-prep 
PROBLEM:
Consider a parallel plate capacitor with metal plates, each of square shape of 1.00 m on a side, separated by 1.00 mm. What is the energy of this capacitor with 3.00×10<sup>3</sup> V applied to it?
(a) 3.98×10<sup>-2</sup> J
(b) 5.08×10<sup>14</sup> J
(c) 1.33×10<sup>-5</sup> J
(d) 1.69×10<sup>11</sup> J
SOLUTION:
(a)
:::

:::exercise {fs-id1222456} type=ap-test-prep 
PROBLEM:
Consider a parallel plate capacitor with metal plates, each of square shape of 1.00 m on a side, separated by 1.00 mm. What is the internal energy stored in this system if the charge on the capacitor is 30.0 µC?
:::

:::exercise {fs-id1368915} type=ap-test-prep 
PROBLEM:
Consider a parallel plate capacitor with metal plates, each of square shape of 1.00 m on a side, separated by 1.00 mm. If the plates grow in area while the voltage is held fixed, the capacitance ___ and the stored energy ___.
(a) decreases, decreases
(b) decreases, increases
(c) increases, decreases
(d) increases, increases
SOLUTION:
(d)
:::

:::exercise {fs-id3530911} type=ap-test-prep 
PROBLEM:
Consider a parallel plate capacitor with metal plates, each of square shape of 1.00 m on a side, separated by 1.00 mm. What happens to the energy of this system if the area of the plates increases while the charge remains fixed?
:::

## Section Summary {section:section-summary}
- Capacitors are used in a variety of devices, including defibrillators, microelectronics such as calculators, and flash lamps, to supply energy.
- The energy stored in a capacitor can be expressed in three ways:
    

$$ {E}_{\text{cap}}=\frac{\text{QV}}{2}=\frac{{\text{CV}}^{2}}{2}=\frac{{Q}^{2}}{2C}, $$  {eq:eip-635}

where
$Q$ is the charge, $V$ is the voltage, and $C$ is the capacitance of the capacitor. The energy is in joules when the charge is in coulombs, voltage is in volts, and capacitance is in farads.

## Conceptual Questions {section:conceptual-questions}

:::exercise {fs-id1579143} type=conceptual-questions 
PROBLEM:
How does the energy contained in a charged capacitor change when a dielectric is inserted, assuming the capacitor is isolated and its charge is constant? Does this imply that work was done?
:::

:::exercise {eip-482} type=conceptual-questions 
PROBLEM:
What happens to the energy stored in a capacitor connected to a battery when a dielectric is inserted? Was work done in the process?
:::

## Problems & Exercises {section:problems-exercises}

:::exercise {eip-838} type=problems-exercises 
PROBLEM:
(a) What is the energy stored in the $\text{10.0}\mu \text{F}$ capacitor of a heart defibrillator charged to $9.00\times {\text{10}}^{\text{3}}\;\text{V}$? (b) Find the amount of stored charge.
SOLUTION:
(a) $\text{405 J}$
(b) $\text{90.0 mC}$
:::

:::exercise {fs-id2657760} type=problems-exercises 
PROBLEM:
In open heart surgery, a much smaller amount of energy will defibrillate the heart. (a) What voltage is applied to the $\text{8.00}\mu \text{F}$  capacitor of a heart defibrillator that stores 40.0 J of energy? (b) Find the amount of stored charge.
SOLUTION:
(a) 3.16 kV
(b) 25.3 mC
:::

:::exercise {fs-id1998705} type=problems-exercises 
PROBLEM:
A $1\text{65 µF}$ capacitor is used in conjunction with a motor. How much energy is stored in it when 119 V is applied?
:::

:::exercise {eip-981} type=problems-exercises 
PROBLEM:
Suppose you have a 9.00 V battery, a $\text{2.00}\mu \text{F}$ capacitor, and a $\text{7.40}\mu \text{F}$  capacitor. (a) Find the charge and energy stored if the capacitors are connected to the battery in series. (b) Do the same for a parallel connection.
SOLUTION:
(a)  $1.42\times {\text{10}}^{\text{−5}}\;\text{C}$,  $6.38\times {\text{10}}^{\text{−5}}\;\text{J}$
(b)  $8.46\times {\text{10}}^{\text{−5}}\;\text{C}$,  $3.81\times {\text{10}}^{\text{−4}}\;\text{J}$
:::

:::exercise {fs-id832930} type=problems-exercises 
PROBLEM:
A nervous physicist worries that the two metal shelves of his wood frame bookcase might obtain a high voltage if charged by static electricity, perhaps produced by friction. (a) What is the capacitance of the empty shelves if they have area $1.00\times {\text{10}}^{\text{2}}\;{\text{m}}^{\text{2}}$ and are 0.200 m apart? (b) What is the voltage between them if opposite charges of magnitude 2.00 nC are placed on them? (c) To show that this voltage poses a small hazard, calculate the energy stored.
SOLUTION:
(a) $4.43\times {\text{10}}^{-\text{9}}\;\text{F}$
(b) $0.452\;\text{V}$
(c) $4.52\times {\text{10}}^{-10}\;\text{J}$
:::

:::exercise {fs-id3152957} type=problems-exercises 
PROBLEM:
Show that for a given dielectric material the maximum energy a parallel plate capacitor can store is directly proportional to the volume of dielectric ($\text{Volume =}\;A\cdot d$). Note that the applied voltage is limited by the dielectric strength.
:::

:::exercise {fs-id1183288} type=problems-exercises 
PROBLEM:
**Construct Your Own Problem**
Consider a heart defibrillator similar to that discussed in [ref:fs-id2725068]. Construct a problem in which you examine the charge stored in the capacitor of a defibrillator as a function of stored energy. Among the things to be considered are the applied voltage and whether it should vary with energy to be delivered, the range of energies involved, and the capacitance of the defibrillator. You may also wish to consider the much smaller energy needed for defibrillation during open-heart surgery as a variation on this problem.
:::

:::exercise {fs-id3088661} type=problems-exercises 
PROBLEM:
**Unreasonable Results**
(a) On a particular day, it takes $9.60\times {\text{10}}^{\text{3}}\;\text{J}$ of electric energy to start a truck’s engine. Calculate the capacitance of a capacitor that could store that amount of energy at 12.0 V. (b) What is unreasonable about this result? (c) Which assumptions are responsible?
SOLUTION:
(a) $\text{133}\;\text{F}$
(b) Such a capacitor would be too large to carry with a truck. The size of the capacitor would be enormous.
(c) It is unreasonable to assume that a capacitor can store the amount of energy needed.
:::

## Glossary
- {def} **defibrillator**: a machine used to provide an electrical shock to a heart attack victim's heart in order to restore the heart's normal rhythmic pattern

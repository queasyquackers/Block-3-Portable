const L115L116 = [
  {
    "id": 1,
    "category": "Pharmacokinetics: Volume of Distribution",
    "questionText": "A 70 kg patient is administered a drug that is >99% bound to plasma proteins. The drug's calculated apparent volume of distribution (Vd) is 1.1 L. What does this low Vd indicate about the drug's distribution?",
    "options": [
      {"text": "The drug is extensively bound to macromolecules in peripheral tissues.", "explanation": "This would result in a very *high* apparent Vd, as the drug would be sequestered outside the plasma."},
      {"text": "The drug is a small, water-soluble molecule that distributes to total body water.", "explanation": "A drug distributing to total body water would have a Vd closer to 42 L, not 1.1 L."},
      {"text": "The drug is retained primarily within the vascular compartment (blood plasma).", "explanation": "Correct. A very low Vd, especially for a highly protein-bound drug, indicates that the drug is largely confined to the plasma compartment."},
      {"text": "The drug is highly lipid-soluble and is sequestered in adipose tissue.", "explanation": "This would result in a very *high* apparent Vd, as seen with drugs like propofol."},
      {"text": "The drug's elimination rate is faster than its distribution rate.", "explanation": "This describes an elimination characteristic, not what the Vd value itself indicates about drug location."}
    ],
    "correctAnswerIndex": 2,
    "slideImagePath": "images/L115L116_p_page-0036.jpg",
    "slideImageDescription": "The slide 'Volume of Distribution ($V_d$)' illustrates the concept with fluid compartments. It states that a drug with a **low** $V_d$ is 'Retained in the vascular compartment'. It specifically notes that this occurs for drugs that are 'Bound to plasma proteins' or have 'Large molecular weight'. The value 1.1 L is very close to the plasma volume, confirming the drug is confined to the vascular space."
  },
  {
    "id": 2,
    "category": "Pharmacokinetics: Volume of Distribution",
    "questionText": "Chloroquine has a volume of distribution (Vd) of approximately 13,000 L. Given that this far exceeds the total body volume, what does this value physically represent?",
    "options": [
      {"text": "The drug is highly hydrophilic and remains in the plasma.", "explanation": "Hydrophilic drugs have low Vd."},
      {"text": "The drug is rapidly eliminated by the kidneys.", "explanation": "Vd determines distribution, not elimination rate directly."},
      {"text": "The drug is extensively sequestered in peripheral tissues (e.g., fat, muscle, liver).", "explanation": "Correct. A very large Vd (> total body water) indicates the drug is highly concentrated in extravascular tissues, leaving very little in the plasma."},
      {"text": "The drug has a very short half-life.", "explanation": "Large Vd often correlates with a *long* half-life (t1/2 = 0.693 * Vd / CL)."},
      {"text": "The calculation must be an error.", "explanation": "Apparent Vd is a theoretical volume, not a real physiological space, so values > body volume are common for tissue-bound drugs."}
    ],
    "correctAnswerIndex": 2,
    "slideImagePath": "images/L115L116_p_page-0036.jpg",
    "slideImageDescription": "The 'Volume of Distribution' slide contrasts low vs. high $V_d$. For a **High** $V_d$, it states the drug is 'Highly distributed into muscle, adipose, and other nonvascular tissues'. It explicitly lists **Chloroquine** (Vd = 13,000 L) as the classic example of a drug that is extensively sequestered in tissues."
  },
  {
    "id": 3,
    "category": "Pharmacokinetics: Clearance",
    "questionText": "The extraction ratio (E) of a drug across the liver is 0.9 (high extraction). What is the primary determinant of the hepatic clearance for this drug?",
    "options": [
      {"text": "Intrinsic enzymatic capacity of the hepatocytes", "explanation": "This is the limiting factor for *low* extraction drugs."},
      {"text": "Fraction of unbound drug in the plasma", "explanation": "This is relevant for low extraction drugs (restrictive clearance)."},
      {"text": "Hepatic blood flow", "explanation": "Correct. For high extraction drugs (E > 0.7), the liver clears almost everything delivered to it. Therefore, clearance is limited only by how fast blood can get to the liver (flow-dependent elimination)."},
      {"text": "Glomerular filtration rate", "explanation": "This determines renal clearance, not hepatic."},
      {"text": "Biliary secretion rate", "explanation": "This is a component of elimination but not the rate-limiting step for high E drugs."}
    ],
    "correctAnswerIndex": 2,
    "slideImagePath": "images/L115L116_p_page-0029.jpg",
    "slideImageDescription": "The slide 'Hepatic Clearance' defines the Extraction Ratio (E). It explains that for drugs with a **High Extraction Ratio** (E > 0.7), clearance approaches liver blood flow. It explicitly states: 'Elimination is **Blood Flow Dependent**'. This confirms that for high E drugs, alterations in blood flow (Q) directly alter clearance."
  },
  {
    "id": 4,
    "category": "Pharmacokinetics: Bioavailability",
    "questionText": "A drug is administered IV and achieves an AUC of 100 mg*h/L. The same dose is administered orally and achieves an AUC of 50 mg*h/L. What is the oral bioavailability (F) of this drug?",
    "options": [
      {"text": "0.25 (25%)", "explanation": "50/100 is 0.5."},
      {"text": "0.5 (50%)", "explanation": "Correct. Bioavailability (F) = AUC(oral) / AUC(IV). F = 50 / 100 = 0.5 or 50%."},
      {"text": "1.0 (100%)", "explanation": "This would imply AUC oral = AUC IV."},
      {"text": "2.0 (200%)", "explanation": "Bioavailability cannot exceed 100%."},
      {"text": "Cannot be determined without the elimination rate constant.", "explanation": "F is determined by the AUC ratio."}
    ],
    "correctAnswerIndex": 1,
    "slideImagePath": "images/L115L116_p_page-0039.jpg",
    "slideImageDescription": "The slide 'Bioavailability (F)' provides the formula: $F = (AUC_{oral} / AUC_{IV}) \\times 100$. It displays a graph comparing the Area Under the Curve (AUC) for IV administration (100% bioavailability) vs. Oral administration (reduced AUC). Using the values from the question in the formula provided on the slide (50/100) yields 0.5 or 50%."
  },
  {
    "id": 5,
    "category": "Pharmacokinetics: First-Pass Effect",
    "questionText": "A drug with a very high hepatic extraction ratio (E) will have a __________ oral bioavailability due to the _________.",
    "options": [
      {"text": "High; Enterohepatic recirculation", "explanation": "Recirculation might increase duration, but high extraction reduces initial F."},
      {"text": "Low; First-pass effect", "explanation": "Correct. High extraction means the liver removes most of the drug on the 'first pass' from the portal vein before it reaches systemic circulation, resulting in low bioavailability."},
      {"text": "High; Saturation of enzymes", "explanation": "High extraction implies enzymes are *not* saturated and are working very efficiently."},
      {"text": "Low; Poor solubility", "explanation": "While solubility affects F, the extraction ratio relates specifically to metabolic removal."},
      {"text": "Variable; Gastric pH", "explanation": "Extraction ratio is a hepatic parameter, not a gastric one."}
    ],
    "correctAnswerIndex": 1,
    "slideImagePath": "images/L115L116_p_page-0029.jpg",
    "slideImageDescription": "The slide on 'Hepatic Clearance' relates Extraction Ratio (E) to the 'First-Pass Effect'. It states that drugs with a **High Extraction Ratio** have a 'High First-Pass Effect', which results in 'Low Bioavailability'. It lists examples like Morphine, Propranolol, and Verapamil, supporting the concept that efficient hepatic removal prevents the drug from reaching systemic circulation orally."
  },
  {
    "id": 6,
    "category": "Pharmacokinetics: Half-Life",
    "questionText": "For a drug following first-order kinetics, the time required to reach steady state (Css) during a continuous infusion is determined *solely* by:",
    "options": [
      {"text": "The infusion rate (k0).", "explanation": "Infusion rate determines the *level* of Css, not the *time* to reach it."},
      {"text": "The loading dose.", "explanation": "A loading dose gets you there instantly, but the *intrinsic* time to steady state is defined by the half-life."},
      {"text": "The elimination half-life (t1/2).", "explanation": "Correct. It takes approximately 4 to 5 half-lives to reach steady state (94-97%), regardless of the dose or infusion rate."},
      {"text": "The bioavailability (F).", "explanation": "Bioavailability affects the effective dose, not the time course."},
      {"text": "The volume of distribution (Vd) only.", "explanation": "Half-life depends on both Vd and Clearance (t1/2 = 0.693 * Vd / CL)."}
    ],
    "correctAnswerIndex": 2,
    "slideImagePath": "images/L115L116_p_page-0060.jpg",
    "slideImageDescription": "The slide 'Time to Reach Steady State' contains a rule of thumb: 'It takes **4-5 half-lives** to reach steady state'. It emphasizes that this time is a function of the elimination half-life ($t_{1/2}$) and is independent of the dosage or frequency of administration, directly answering the question."
  },
  {
    "id": 7,
    "category": "Pharmacokinetics: Loading Dose",
    "questionText": "A physician needs to achieve therapeutic plasma levels of lidocaine (Vd = 77 L) immediately to treat a ventricular arrhythmia. The target concentration is 3 mg/L. What is the appropriate loading dose?",
    "options": [
      {"text": "231 mg", "explanation": "Correct. Loading Dose = Target Concentration x Vd. LD = 3 mg/L x 77 L = 231 mg."},
      {"text": "25 mg", "explanation": "Too low."},
      {"text": "77 mg", "explanation": "This would achieve 1 mg/L."},
      {"text": "150 mg", "explanation": "Too low."},
      {"text": "500 mg", "explanation": "Too high, risk of toxicity."}
    ],
    "correctAnswerIndex": 0,
    "slideImagePath": "images/L115L116_p_page-0072.jpg",
    "slideImageDescription": "The slide 'Loading Dose' provides the formula: **Loading Dose = $Target Concentration \times V_d$**. Applying the values from the question (Target = 3 mg/L, $V_d$ = 77 L) results in $3 \times 77 = 231$ mg. The slide explains this dose is used to 'rapidly achieve the target concentration', matching the clinical scenario."
  },
  {
    "id": 8,
    "category": "Pharmacokinetics: Maintenance Dose",
    "questionText": "A patient is on a maintenance infusion of theophylline. The clearance (CL) of theophylline is 2.8 L/hr. The desired steady-state concentration is 10 mg/L. What is the required maintenance dosing rate (in mg/hr)?",
    "options": [
      {"text": "0.28 mg/hr", "explanation": "Incorrect math."},
      {"text": "3.5 mg/hr", "explanation": "Incorrect math."},
      {"text": "28 mg/hr", "explanation": "Correct. Dosing Rate = Target Concentration x Clearance. Rate = 10 mg/L x 2.8 L/hr = 28 mg/hr."},
      {"text": "280 mg/hr", "explanation": "Incorrect math."},
      {"text": "10 mg/hr", "explanation": "Incorrect math."}
    ],
    "correctAnswerIndex": 2,
    "slideImagePath": "images/L115L116_p_page-0075.jpg",
    "slideImageDescription": "The slide 'Maintenance Dose' presents the formula: **Maintenance Dose = $Clearance (CL) \times Target Concentration (C_{ss})$**. Using the provided numbers (CL = 2.8 L/hr, $C_{ss}$ = 10 mg/L), the calculation is $2.8 \times 10 = 28$ mg/hr. The slide context confirms this calculates the rate needed to replace the amount of drug eliminated."
  },
  {
    "id": 9,
    "category": "Pharmacokinetics: Non-Linear Kinetics",
    "questionText": "Phenytoin exhibits capacity-limited (Michaelis-Menten) elimination. What happens to the clearance (CL) and half-life (t1/2) of phenytoin as the dose is increased and saturation is approached?",
    "options": [
      {"text": "Clearance increases, Half-life decreases.", "explanation": "This would imply faster elimination with higher doses."},
      {"text": "Clearance stays constant, Half-life stays constant.", "explanation": "This describes linear (first-order) kinetics."},
      {"text": "Clearance decreases, Half-life increases.", "explanation": "Correct. As enzymes become saturated, the rate of elimination cannot keep up with the increasing concentration. Clearance (efficiency) drops, and the time to remove the drug (half-life) gets longer and longer."},
      {"text": "Clearance decreases, Half-life decreases.", "explanation": "Mathematically inconsistent."},
      {"text": "Clearance increases, Half-life increases.", "explanation": "Mathematically inconsistent."}
    ],
    "correctAnswerIndex": 2,
    "slideImagePath": "images/L115L116_p_page-0050.jpg",
    "slideImageDescription": "The slide 'Non-Linear Pharmacokinetics' discusses 'Capacity-limited elimination' (Michaelis-Menten). It states that as concentration increases, 'Clearance decreases' and 'Half-life increases'. It specifically lists **Phenytoin**, Ethanol, and Aspirin as examples of drugs following these kinetics, where elimination mechanisms become saturated."
  },
  {
    "id": 10,
    "category": "Pharmacokinetics: Renal Clearance",
    "questionText": "Creatinine clearance (CrCl) is used to estimate GFR. Which formula is commonly used to estimate CrCl from serum creatinine, age, weight, and sex?",
    "options": [
      {"text": "Henderson-Hasselbalch equation", "explanation": "For pH/pKa."},
      {"text": "Michaelis-Menten equation", "explanation": "For enzyme kinetics."},
      {"text": "Cockcroft-Gault equation", "explanation": "Correct. The Cockcroft-Gault equation allows estimation of CrCl (and thus GFR) using readily available clinical variables."},
      {"text": "Fick's Law", "explanation": "For diffusion."},
      {"text": "Nernst equation", "explanation": "For membrane potential."}
    ],
    "correctAnswerIndex": 2,
    "slideImagePath": "images/L115L116_p_page-0087.jpg",
    "slideImageDescription": "The slide 'Estimation of GFR' displays the **Cockcroft-Gault Equation**. It shows the formula: $CrCl = [(140 - age) \times weight] / (72 \times S_{cr})$, with a correction factor for females. The text identifies this as the standard method for estimating Creatinine Clearance in clinical practice."
  },
  {
    "id": 11,
    "category": "Pharmacokinetics: Steady State",
    "questionText": "A patient is taking a drug with a half-life of 12 hours on a regular dosing schedule. They miss three doses and then resume the medication. How long will it take to re-establish the steady-state plasma concentration?",
    "options": [
      {"text": "12 hours (1 half-life)", "explanation": "Insufficient time."},
      {"text": "24 hours (2 half-lives)", "explanation": "Insufficient time."},
      {"text": "48-60 hours (4-5 half-lives)", "explanation": "Correct. The time to reach steady state is always 4-5 half-lives, whether starting from zero or re-accumulating after a washout."},
      {"text": "It depends on the loading dose.", "explanation": "Loading dose affects the starting point, not the kinetic time course."},
      {"text": "Immediately.", "explanation": "Only possible with a bolus, not re-accumulation."}
    ],
    "correctAnswerIndex": 2,
    "slideImagePath": "images/L115L116_p_page-0060.jpg",
    "slideImageDescription": "The slide 'Time to Reach Steady State' states the rule: '4-5 half-lives'. With a half-life of 12 hours, $4 \times 12 = 48$ hours and $5 \times 12 = 60$ hours. Thus, the time required is 48-60 hours. The slide emphasizes that this time is constant for any first-order process."
  },
  {
    "id": 12,
    "category": "Pharmacokinetics: Maintenance Dose",
    "questionText": "For a drug with low oral bioavailability (e.g., F = 0.5), how must the oral maintenance dose compare to the IV maintenance dose to achieve the same plasma concentration?",
    "options": [
      {"text": "Oral dose must be lower.", "explanation": "This would lead to subtherapeutic levels."},
      {"text": "Oral dose must be the same.", "explanation": "This would result in half the plasma level."},
      {"text": "Oral dose must be higher.", "explanation": "Correct. Since only 50% is absorbed (F=0.5), you must administer double the dose orally to get the same amount into the blood as the IV dose (where F=1.0). Formula: Oral Dose = (Target x CL) / F."},
      {"text": "It depends on the volume of distribution.", "explanation": "Maintenance dose depends on Clearance and Bioavailability, not Vd."},
      {"text": "Oral dosing is not possible.", "explanation": "Oral dosing is possible, just requires adjustment."}
    ],
    "correctAnswerIndex": 2,
    "slideImagePath": "images/L115L116_p_page-0075.jpg",
    "slideImageDescription": "The slide 'Maintenance Dose' shows the formula calculation. It includes 'Bioavailability (F)' in the denominator: $Dosing Rate = (Target \times CL) / F$. Because F is in the denominator, a lower F (e.g., <1 for oral) requires a **higher** administered dose to achieve the same target concentration compared to IV (where F=1)."
  },
  {
    "id": 13,
    "category": "Pharmacokinetics: Elimination Kinetics",
    "questionText": "Most drugs used in clinical practice follow first-order elimination kinetics. This means that:",
    "options": [
      {"text": "A constant amount of drug is eliminated per unit time (e.g., 10 mg/hr).", "explanation": "This is Zero-order kinetics."},
      {"text": "The elimination rate is independent of plasma concentration.", "explanation": "This is Zero-order kinetics."},
      {"text": "A constant fraction (percentage) of the drug is eliminated per unit time.", "explanation": "Correct. In first-order kinetics, the rate of elimination is proportional to the concentration. Thus, a constant *fraction* (e.g., 50% every half-life) is removed."},
      {"text": "The half-life changes with the dose.", "explanation": "In first-order kinetics, half-life is constant."},
      {"text": "Elimination mechanisms are saturated.", "explanation": "This describes Zero-order/Non-linear kinetics."}
    ],
    "correctAnswerIndex": 2,
    "slideImagePath": "images/L115L116_p_page-0046.jpg",
    "slideImageDescription": "The slide 'First-Order Elimination' defines the process. It states: 'A constant **fraction** (percentage) of drug is eliminated per unit of time'. It contrasts this with Zero-order where a constant *amount* is eliminated. The graph shows a linear decay on a log scale, characteristic of a constant fractional loss."
  },
  {
    "id": 14,
    "category": "Pharmacokinetics: Therapeutic Drug Monitoring",
    "questionText": "Therapeutic Drug Monitoring (TDM) is most appropriate for drugs with which characteristic?",
    "options": [
      {"text": "A wide therapeutic index.", "explanation": "These are safe and don't need precise monitoring (e.g., penicillin)."},
      {"text": "A linear relationship between dose and effect.", "explanation": "Predictable, less need for monitoring."},
      {"text": "A narrow therapeutic index and high inter-patient variability.", "explanation": "Correct. TDM is essential when the difference between therapeutic and toxic levels is small (narrow TI) and when doses produce unpredictable levels in different people (high variability). Examples: Digoxin, Lithium, Phenytoin."},
      {"text": "Use for a short duration (e.g., 3 days).", "explanation": "TDM is usually for chronic therapy."},
      {"text": "Irreversible binding to receptors.", "explanation": "Plasma levels may not correlate with effect."}
    ],
    "correctAnswerIndex": 2,
    "slideImagePath": "images/L115L116_p_page-0081.jpg",
    "slideImageDescription": "The slide 'Therapeutic Drug Monitoring (TDM)' lists the criteria for its use. It explicitly includes: 'Narrow therapeutic index' and 'Significant pharmacokinetic variability'. It lists classic examples like Digoxin, Aminoglycosides, and Phenytoin, confirming the clinical context."
  },
  {
    "id": 59,
    "category": "Pharmacokinetics: Steady State",
    "questionText": "A patient on a continuous infusion of a drug (half-life = 3 days) reaches steady state. The physician decides to double the infusion rate. How long will it take to reach the *new* higher steady state?",
    "options": [
      {"text": "3 days (1 half-life)", "explanation": "Insufficient."},
      {"text": "6 days (2 half-lives)", "explanation": "Insufficient."},
      {"text": "9 days (3 half-lives)", "explanation": "Insufficient."},
      {"text": "12-15 days (4-5 half-lives)", "explanation": "Correct. The time to reach steady state is a function of the half-life and is independent of the dose. It will take the *same* 4-5 half-lives (4-5 x 3 days = 12-15 days) to reach the *new* steady state."},
      {"text": "It will be reached immediately because the dose was doubled.", "explanation": "The time to reach steady state is *independent* of the dose."}
    ],
    "correctAnswerIndex": 3,
    "slideImagePath": "images/L115L116_p_page-0060.jpg",
    "slideImageDescription": "The slide 'Time to Reach Steady State' emphasizes the rule of '4-5 half-lives'. Crucially, it states this applies 'regardless of the dosage'. Therefore, changing the dose does not change the *time* required to equilibrate to the new level; it still requires 4-5 half-lives."
  },
  {
    "id": 60,
    "category": "Pharmacokinetics: Half-Life",
    "questionText": "A patient is taken to surgery and given a drug that is eliminated by first-order kinetics. The drug's half-life is 2 hours. The surgery is completed, and the drug infusion is stopped at 12:00 PM. Approximately what percentage of the drug will have been eliminated from the body by 8:00 PM?",
    "options": [
      {"text": "50%", "explanation": "50% would be eliminated after 1 half-life (by 2:00 PM)."},
      {"text": "75%", "explanation": "75% would be eliminated after 2 half-lives (by 4:00 PM)."},
      {"text": "87.5%", "explanation": "87.5% would be eliminated after 3 half-lives (by 6:00 PM)."},
      {"text": "94%", "explanation": "Correct. The time from 12:00 PM to 8:00 PM is 8 hours. With a half-life of 2 hours, this represents 4 half-lives. After 4 half-lives, approximately 94% (actually 93.75%) of the drug is eliminated."},
      {"text": "97%", "explanation": "97% corresponds to 5 half-lives (10 hours)."}
    ],
    "correctAnswerIndex": 3,
    "slideImagePath": "images/L115L116_p_page-0058.jpg",
    "slideImageDescription": "The slide 'Elimination Half-Life' provides a table or rule of thumb for clearance. It lists: '1 half-life: 50%', '2 half-lives: 75%', '3 half-lives: 87.5%', and '**4 half-lives: ~94%**'. Calculating 8 hours / 2 hours = 4 half-lives directly maps to the 94% elimination value shown on the slide."
  }
];
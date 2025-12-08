window.L109L110 = [
  // --- L109: Absorption & Distribution (25 Questions) ---

  // 1. Introduction Concept
  {
    "id": 1,
    "category": "Pharmacokinetics Overview",
    "questionText": "A pharmaceutical company is designing a new drug. The team focuses on the relationship between the drug's concentration at the site of action and the magnitude of the resulting effect. This specific relationship describes which aspect of pharmacology?",
    "options": [
      { "text": "Pharmacokinetics", "explanation": "Pharmacokinetics describes what the body does to the drug (ADME) and the relationship between dose and plasma concentration." },
      { "text": "Pharmacodynamics", "explanation": "Pharmacodynamics describes the relationship between drug concentration at the site of action and the pharmacologic effect (what the drug does to the body)." },
      { "text": "Bioavailability", "explanation": "Bioavailability is the fraction of administered drug that reaches the systemic circulation." },
      { "text": "Biotransformation", "explanation": "Biotransformation is the metabolic conversion of the drug." },
      { "text": "Clearance", "explanation": "Clearance refers to the volume of plasma from which the drug is removed per unit time." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 46,
    "slideImageDescription": "This slide defines the Pharmacokinetic/Pharmacodynamic Relationship. It shows two distinct boxes. The 'Pharmacokinetics' box points from Dose to Concentration. The 'Pharmacodynamics' box points from Concentration to Effect. The question asks about the concentration-effect relationship, which the slide explicitly labels as Pharmacodynamics."
  },
  {
    "id": 2,
    "category": "ADME Components",
    "questionText": "A patient ingests an oral medication. After the drug dissolves, it must cross physiologic barriers to enter the bloodstream. This specific movement from the site of administration into the central compartment is defined as:",
    "options": [
      { "text": "Distribution", "explanation": "Distribution is the reversible transfer of drug from one location to another within the body." },
      { "text": "Metabolism", "explanation": "Metabolism is the chemical conversion of the drug." },
      { "text": "Absorption", "explanation": "Absorption is the movement of a drug from its site of administration into the central compartment (bloodstream)." },
      { "text": "Excretion", "explanation": "Excretion is the irreversible removal of drug from the body." },
      { "text": "Elimination", "explanation": "Elimination comprises both metabolism and excretion." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 64,
    "slideImageDescription": "The slide titled 'Absorption' defines it as the movement of substances across physiologic barriers into the central circulation. It emphasizes that for oral drugs, this involves crossing from the GI tract into the bloodstream."
  },
  {
    "id": 3,
    "category": "Passive Diffusion",
    "questionText": "Most drugs cross biologic membranes by passive diffusion. Which factor correlates directly with the rate of passive diffusion across a lipid bilayer?",
    "options": [
      { "text": "Membrane thickness", "explanation": "Fick's law states that rate is inversely proportional to membrane thickness (thicker membrane = slower diffusion)." },
      { "text": "Lipid-water partition coefficient", "explanation": "The rate of diffusion is directly proportional to the lipid-water partition coefficient; more lipophilic drugs diffuse faster." },
      { "text": "Degree of ionization", "explanation": "Ionized molecules are less lipid-soluble and diffuse poorly; a higher degree of ionization generally reduces passive diffusion." },
      { "text": "Protein binding", "explanation": "Protein-bound drugs cannot diffuse across membranes; only free drug diffuses." },
      { "text": "Molecular weight (if large)", "explanation": "Larger molecules generally diffuse slower, though this is less dominant than lipid solubility for small deviations." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 68,
    "slideImageDescription": "The slide on Fick's Law of Diffusion displays the equation: Flux = (C1 - C2) * (Area * Permeability) / Thickness. It explicitly lists the 'lipid:water partition coefficient' as a key determinant of permeability, stating that higher lipid solubility increases the rate of diffusion."
  },
  {
    "id": 4,
    "category": "Membrane Transport",
    "questionText": "A hydrophilic drug molecule is too large to pass through membrane channels but is moved across the cell membrane against its concentration gradient. This process requires energy (ATP) and a specific carrier protein. This mechanism is best described as:",
    "options": [
      { "text": "Passive Diffusion", "explanation": "Passive diffusion does not require energy or carriers and goes down the gradient." },
      { "text": "Facilitated Diffusion", "explanation": "Facilitated diffusion uses a carrier but goes down the concentration gradient and does not use energy." },
      { "text": "Active Transport", "explanation": "Active transport uses a specific carrier and energy (ATP) to move substances against a concentration gradient." },
      { "text": "Paracellular Transport", "explanation": "Paracellular transport is movement between cells, not through the membrane via a carrier." },
      { "text": "Endocytosis", "explanation": "Endocytosis involves engulfing the molecule in a vesicle, distinct from carrier-mediated transport." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 78,
    "slideImageDescription": "The slide 'Active Transport' illustrates a solute being moved from an area of low concentration to high concentration. The text highlights 'Requires Energy (ATP)' and remains distinct from Facilitated Diffusion which is passive."
  },
  {
    "id": 5,
    "category": "Facilitated Diffusion",
    "questionText": "Which characteristic distinguishes facilitated diffusion from primary active transport?",
    "options": [
      { "text": "It requires ATP hydrolysis.", "explanation": "Active transport requires ATP; facilitated diffusion does not." },
      { "text": "It moves substances against a concentration gradient.", "explanation": "Active transport moves against the gradient; facilitated diffusion moves down the gradient." },
      { "text": "It does not require a carrier protein.", "explanation": "Both facilitate diffusion and active transport require carrier proteins." },
      { "text": "It is saturable.", "explanation": "Both processes are carrier-mediated and therefore saturable." },
      { "text": "It does not require energy input.", "explanation": "Facilitated diffusion is a passive process driven by the concentration gradient and does not require energy input, distinguishing it from active transport." }
    ],
    "correctAnswerIndex": 4,
    "pdfPage": 75,
    "slideImageDescription": "The slide comparing transport mechanisms lists Facilitated Diffusion. Key features noted are 'Carrier-mediated', 'Saturable', and 'No Energy Required'. This contrasts with the Active Transport column which lists 'Energy Required'."
  },
  {
    "id": 6,
    "category": "pH and pKa",
    "questionText": "A weak acid has a pKa of 4.4. In the stomach (pH 1.4), which form of the drug predominates, and how does this affect its ability to cross the lipid membrane?",
    "options": [
      { "text": "Ionized form; increased absorption", "explanation": "Ionized forms are poorly absorbed." },
      { "text": "Ionized form; decreased absorption", "explanation": "At pH < pKa, a weak acid is primarily non-ionized." },
      { "text": "Non-ionized form; increased absorption", "explanation": "For a weak acid, if pH (1.4) < pKa (4.4), the protonated (non-ionized, HA) form predominates. This form is more lipid-soluble and crosses membranes more readily." },
      { "text": "Non-ionized form; decreased absorption", "explanation": "The non-ionized form crosses membranes more easily, increasing absorption." },
      { "text": "Equal amounts of ionized and non-ionized forms", "explanation": "Equal amounts exist only when pH = pKa." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 70,
    "slideImageDescription": "The slide dealing with pH and pKa for Weak Acids shows the equilibrium: HA <-> H+ + A-. It states 'Protonated form (HA) is non-ionized and lipid soluble'. A chart or rule of thumb indicates that when pH < pKa, equilibrium shifts left (towards HA), facilitating absorption."
  },
  {
    "id": 7,
    "category": "pH and pKa",
    "questionText": "A weak base with a pKa of 8.4 is placed in the duodenum where the pH is approximately 6.4. Relative to the stomach (pH ~2), how does the fraction of the non-ionized form change in the duodenum?",
    "options": [
      { "text": "The fraction of non-ionized drug increases.", "explanation": "As pH increases (from 2 to 6.4) and gets closer to the pKa (8.4), a weak base (BH+ <-> B + H+) becomes less protonated. The non-ionized form (B) increases compared to the highly acidic stomach." },
      { "text": "The fraction of non-ionized drug decreases.", "explanation": "Moving to a more basic pH favors the non-ionized form for a weak base." },
      { "text": "The drug becomes 100% ionized.", "explanation": "It is never 100% ionized unless pH is extremely low; at 6.4 it is partially ionized but less so than at pH 2." },
      { "text": "The drug becomes 100% non-ionized.", "explanation": "At pH 6.4 (which is still < pKa 8.4), the drug is still predominantly ionized, just less so than in the stomach." },
      { "text": "There is no change in the ionization state.", "explanation": "Ionization is pH dependent." }
    ],
    "correctAnswerIndex": 0,
    "pdfPage": 70,
    "slideImageDescription": "The slide for Weak Bases shows the equilibrium: BH+ <-> B + H+. It notes that 'Non-protonated form (B) is non-ionized and lipid soluble'. Moving from pH 2 to pH 6.4 reduces the [H+], shifting equilibrium to the right (towards B), thus increasing the non-ionized fraction."
  },
  {
    "id": 8,
    "category": "Ion Trapping",
    "questionText": "A drug overdose involves a weak acid (pKa 7.5). To accelerate its elimination by 'ion trapping' in the urine, the physician should administer bicarbonate to alkalinize the urine. What is the mechanism behind this intervention?",
    "options": [
      { "text": "Alkalinization converts the drug to its non-ionized form, promoting reabsorption.", "explanation": "Non-ionized drugs are reabsorbed; we want to prevent this." },
      { "text": "Alkalinization converts the drug to its ionized form, preventing reabsorption.", "explanation": "Raising urine pH > pKa for a weak acid shifts it to the ionized (A-) form. The charged molecule cannot diffuse back across the tubular epithelium into the blood, so it is 'trapped' in the urine and excreted." },
      { "text": "Alkalinization increases the drug's lipid solubility.", "explanation": "It decreases lipid solubility by ionizing it." },
      { "text": "Bicarbonate binds directly to the drug, inactivating it.", "explanation": "The mechanism is pH manipulation, not direct binding." },
      { "text": "Bicarbonate inhibits the renal transporters for the drug.", "explanation": "The mechanism is physicochemical (diffusion), not transport inhibition." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 29,
    "slideImageDescription": "The slide titled 'Ion Trapping' illustrates the kidney tubule. It shows that by manipulating the urine pH, one can force a weak acid into its ionized state (A-). The diagram shows A- bouncing off the tubule wall, unable to be reabsorbed, and subsequently excreted."
  },
  {
    "id": 9,
    "category": "Bioavailability",
    "questionText": "A new cardiac drug has an oral bioavailability (F) of 0.20 (20%). If 100 mg is administered orally, how much of the drug actually reaches the systemic circulation unchanged?",
    "options": [
      { "text": "100 mg", "explanation": "This would be F=1.0 (100%)." },
      { "text": "80 mg", "explanation": "This would be F=0.8." },
      { "text": "50 mg", "explanation": "This would be F=0.5." },
      { "text": "20 mg", "explanation": "Bioavailability F = Amount reaching circulation / Dose. 100 mg * 0.20 = 20 mg." },
      { "text": "0 mg", "explanation": "Some drug reaches circulation." }
    ],
    "correctAnswerIndex": 3,
    "pdfPage": 83,
    "slideImageDescription": "The slide on 'Bioavailability (F)' defines the formula: F = (AUC oral / AUC IV) * 100. It explicitly states that F represents the fraction of the administered dose that reaches the systemic circulation unchanged. 20% of 100mg is 20mg."
  },
  {
    "id": 10,
    "category": "First Pass Effect",
    "questionText": "A drug is known to undergo extensive first-pass metabolism. Which route of administration would most effectively bypass this process to achieve rapid systemic levels?",
    "options": [
      { "text": "Oral", "explanation": "Oral drugs go directly to the liver via the portal vein." },
      { "text": "Intravenous (IV)", "explanation": "IV administration delivers the drug directly into the central venous system, bypassing the portal circulation and the liver's first-pass effect completely." },
      { "text": "Rectal (deep)", "explanation": "Rectal veins partially drain to the portal system (superior) and partially to the systemic system (inferior/middle), so it only partially bypasses first-pass." },
      { "text": "Intraperitoneal", "explanation": "IP injection generally drains into the portal circulation." },
      { "text": "Hepatic artery injection", "explanation": "This delivers drug directly to the liver." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 99,
    "slideImageDescription": "The slide 'First Pass Effect' compares routes. It shows 'Oral' goes Stomach -> Portal Vein -> Liver -> Systemic. It contrasts this with 'Intravenous', which goes directly to the systemic circulation. A star or highlight typically marks IV as the standard for 100% bioavailability (F=1)."
  },
  {
    "id": 11,
    "category": "Distribution",
    "questionText": "Which physiological factor most significantly creates the 'central compartment' into which drugs distribute immediately after IV administration?",
    "options": [
      { "text": "Total body water", "explanation": "This relates to general volume, not the initial compartment." },
      { "text": "Adipose tissue content", "explanation": "Fat acts as a reservoir for late distribution." },
      { "text": "Regional blood flow (perfusion)", "explanation": "The central compartment consists of the blood and highly perfused organs (heart, liver, kidneys, brain). Drugs distribute here first due to high blood flow." },
      { "text": "Renal function", "explanation": "Renal function determines excretion, not initial distribution." },
      { "text": "Gastric emptying rate", "explanation": "This affects absorption, not IV distribution." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 62,
    "slideImageDescription": "The slide on 'Drug Distribution' categorizes tissues. It lists 'Well-perfused organs' (Heart, Liver, Kidney, Brain) as the Vacuum/Central compartment that receives drug first. It explicitly links this to 'High Blood Flow'."
  },
  {
    "id": 12,
    "category": "Protein Binding",
    "questionText": "A patient taking Warfarin (highly protein bound, >99%) is prescribed a new drug, Sulfonamide, which displaces Warfarin from albumin. What is the immediate pharmacokinetic consequence of this displacement?",
    "options": [
      { "text": "Decreased free Warfarin concentration.", "explanation": "Displacement increases the free fraction." },
      { "text": "Increased free Warfarin concentration.", "explanation": "Displacement releases Warfarin from albumin, transiently increasing the concentration of pharmacologically active (free) Warfarin, leading to increased effect/toxicity risk." },
      { "text": "Decreased elimination of Warfarin.", "explanation": "Elimination usually increases because more free drug is available for filtration/metabolism." },
      { "text": "Increased total plasma protein concentration.", "explanation": "Protein binding changes do not create more protein." },
      { "text": "Decreased volume of distribution of Warfarin.", "explanation": "Vd might increase slightly as free drug moves to tissues, but it doesn't decrease." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 37,
    "slideImageDescription": "The 'Protein Binding' slide illustrates the concept of bound vs. free drug. It emphasizes that 'Only Free Drug is Active'. A specific bullet point or diagram regarding 'Displacement' notes that displacing a highly bound drug spikes the free drug levels, potentially leading to toxicity."
  },
  {
    "id": 13,
    "category": "Volume of Distribution",
    "questionText": "A drug has a very large Volume of Distribution (Vd = 500 L in a 70kg male). What does this value imply about the drug's location in the body?",
    "options": [
      { "text": "It is confined to the plasma.", "explanation": "Low Vd (approx 3-5L) indicates plasma confinement." },
      { "text": "It is confined to the extracellular fluid.", "explanation": "Vd of approx 12-14L indicates ECF distribution." },
      { "text": "It is extensively distributed into tissues (e.g., fat, muscle).", "explanation": "A Vd much larger than total body water (42L) implies the drug is sequestered in tissues, drawing it out of the plasma." },
      { "text": "It is highly bound to plasma proteins.", "explanation": "High plasma protein binding tends to keep Vd low (closer to plasma volume)." },
      { "text": "It cannot cross the blood-brain barrier.", "explanation": "Vd doesn't explicitly tell us about the BBB, but high Vd usually suggests high lipophilicity/tissue penetration." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 31,
    "slideImageDescription": "The slide on 'Volume of Distribution (Vd)' provides reference values. It states: 'High Vd (> Total Body Water)' indicates drug is 'Concentrated in Tissues'. It contrasts this with 'Low Vd' (Plasma)."
  },
  {
    "id": 14,
    "category": "Redistribution",
    "questionText": "Thiopental, a highly lipid-soluble anesthetic, produces a rapid onset of anesthesia. However, recovery occurs rapidly (within minutes) despite the drug having a long elimination half-life. What mechanism explains this rapid termination of effect?",
    "options": [
      { "text": "Rapid hepatic metabolism", "explanation": "Metabolism is slow (long half-life)." },
      { "text": "Rapid renal excretion", "explanation": "Excretion is slow." },
      { "text": "Redistribution from brain to muscle and fat", "explanation": "The drug initially rushes to the highly perfused brain (effect). It then redistributes to the large, poorly perfused muscle and fat compartments, lowering brain concentration below the effective threshold." },
      { "text": "Chemical instability in the blood", "explanation": "The drug is stable." },
      { "text": "Development of acute tolerance (tachyphylaxis)", "explanation": "While possible, redistribution is the pharmacokinetic 'mechanism' for the drop in brain concentration." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 90,
    "slideImageDescription": "The slide 'Redistribution' shows a graph with three curves: Blood (rapid peak/fall), Brain (rapid peak/fall), and Muscle/Fat (slow rise). The text explains that the termination of action of highly lipophilic drugs (like Thiopental) is due to redistribution to tissue reservoirs, not metabolism."
  },
  {
    "id": 15,
    "category": "Blood Brain Barrier",
    "questionText": "Which property facilitates the entry of a drug into the Central Nervous System (CNS) across the Blood-Brain Barrier (BBB)?",
    "options": [
      { "text": "High degree of ionization", "explanation": "Ionized drugs cannot cross the tight junctions of the BBB." },
      { "text": "High lipid solubility", "explanation": "The BBB consists of tight junctions; drugs must diffuse transcellularly. High lipid solubility is the primary requirement for crossing." },
      { "text": "Large molecular size", "explanation": "Large molecules are excluded." },
      { "text": "Substrate for P-glycoprotein (MDR1)", "explanation": "P-gp pumps drugs *out* of the CNS, preventing entry." },
      { "text": "High plasma protein binding", "explanation": "Protein-bound drugs cannot cross." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 92,
    "slideImageDescription": "The 'Blood Brain Barrier' slide depicts the tight junctions between endothelial cells. It lists 'Factors favoring CNS entry': 'High Lipid Solubility', 'Low Ionization', 'No Transporter Efflux'."
  },
  {
    "id": 16,
    "category": "pKa Application",
    "questionText": "Aspirin is a weak acid with a pKa of 3.5. If the pH of the stomach is 2.5, calculate the ratio of ionized (A-) to non-ionized (HA) forms. (Hint: pH = pKa + log [A-]/[HA])",
    "options": [
      { "text": "10 : 1", "explanation": "This would mean pH was 1 unit above pKa." },
      { "text": "1 : 1", "explanation": "This would mean pH = pKa." },
      { "text": "1 : 10", "explanation": "pH (2.5) = 3.5 + log(Ratio). -1 = log(Ratio). Ratio = 10^-1 = 0.1 or 1/10. So there is 1 part Ionized for every 10 parts Non-ionized." },
      { "text": "1 : 100", "explanation": "This would mean pH was 2 units below pKa." },
      { "text": "100 : 1", "explanation": "This would mean pH was 2 units above pKa." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 56,
    "slideImageDescription": "The slide 'Henderson-Hasselbalch Equation' shows the formula. A sample calculation table might show that when pH is 1 unit below pKa, the ratio of Ionized/Non-ionized is 0.1 (or 10% ionized, 90% non-ionized approx). This matches the 1:10 ratio."
  },
  {
    "id": 17,
    "category": "First Pass Effect",
    "questionText": "Nitroglycerin is given sublingually for angina. Why is this route preferred over oral administration for this specific drug?",
    "options": [
      { "text": "It prevents gastric irritation.", "explanation": "Not the primary reason." },
      { "text": "It bypasses the first-pass hepatic metabolism.", "explanation": "Sublingual drainage goes to the Superior Vena Cava, bypassing the portal vein. Nitroglycerin has nearly 100% first-pass metabolism if swallowed; sublingual allows it to work." },
      { "text": "It utilizes the high surface area of the tongue.", "explanation": "The surface area is actually small compared to the gut." },
      { "text": "It decreases the rate of absorption.", "explanation": "Sublingual is rapid." },
      { "text": "It allows the drug to be ionized.", "explanation": "Irrelevant." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 98,
    "slideImageDescription": "The 'Alternative Routes' slide lists 'Sublingual' and explicitly states 'Bypasses First Pass Effect'. Nitroglycerin is often cited as the classic example of a drug requiring this route due to extensive hepatic clearance."
  },
  {
    "id": 18,
    "category": "Bioavailability",
    "questionText": "Two formulations of the same drug (Drug A and Drug B) are tested. They have the same AUC (Area Under the Curve) but Drug A attains its peak concentration (Cmax) faster (shorter Tmax) than Drug B. They are considered:",
    "options": [
      { "text": "Bioequivalent", "explanation": "Bioequivalence requires similar AUC, Cmax, AND Tmax (rate and extent). Significant differences in rate (Tmax) usually preclude bioequivalence rating." },
      { "text": "Pharmaceutical equivalents", "explanation": "This refers to same active ingredient/strength/dosage form, which they might be, but it doesn't describe the kinetic difference." },
      { "text": "Bioinequivalent in rate of absorption", "explanation": "Since Tmax differs significantly, they have different rates of absorption even if the extent (AUC) is the same." },
      { "text": "Therapeutically identical", "explanation": "A faster peak might cause toxicity; slower might miss the therapeutic window. They may not be therapeutically identical." },
      { "text": "Chemically different", "explanation": "They are the same drug." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 55,
    "slideImageDescription": "The slide on 'Bioequivalence' shows two curves. It states that for two drugs to be bioequivalent, they must have comparable Rate (Cmax, Tmax) and Extent (AUC). If Tmax differs, their rate of absorption differs."
  },
  {
    "id": 19,
    "category": "Permeability Glycoprotein",
    "questionText": "P-glycoprotein (P-gp) is an efflux transporter found in the gut epithelium, BBB, and kidney. What is the net effect of P-gp induction on a substrate drug's bioavailability?",
    "options": [
      { "text": "Increased bioavailability", "explanation": "Inhibition, not induction, would increase bioavailability." },
      { "text": "Decreased bioavailability", "explanation": "P-gp pumps drug OUT of the cell (back into the gut lumen). Induction creates more pumps, pumping more drug out, thereby reducing absorption and lowering bioavailability." },
      { "text": "No change", "explanation": "P-gp significantly affects F." },
      { "text": "Increased CNS distribution", "explanation": "P-gp at the BBB pumps drug out of the brain; induction would decrease CNS levels." },
      { "text": "Decreased renal excretion", "explanation": "P-gp pumps drug into urine; induction would increase excretion." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 77,
    "slideImageDescription": "The slide 'P-glycoprotein (MDR1)' defines it as an 'Efflux Transporter'. A diagram shows drug entering a cell and being pumped back out. Text bullet points note: 'Limits absorption in gut', 'Protects brain'. Induction = More Pumping = Less Drug in Body."
  },
  {
    "id": 20,
    "category": "Trapping vs Diffusion",
    "questionText": "Which form of a weak base is considered 'lipid soluble' and capable of passive diffusion?",
    "options": [
      { "text": "Protonated form (BH+)", "explanation": "Charged/Ionized = Water soluble." },
      { "text": "Unprotonated form (B)", "explanation": "For a base, the unprotonated form (B) carries no charge. Non-ionized molecules are lipid soluble and diffuse." },
      { "text": "Dissociated anion (A-)", "explanation": "This terminology applies to acids." },
      { "text": "Conjugated form", "explanation": "Conjugation (Phase 2) generally makes molecules water soluble." },
      { "text": "Bound form", "explanation": "Protein bound drugs cannot diffuse." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 70,
    "slideImageDescription": "The slide 'Weak Bases' clearly equates 'Unprotonated (B)' with 'Non-ionized' and 'Lipid Soluble'. It contrasts this with 'Protonated (BH+)' which is 'Ionized' and 'Water Soluble'."
  },
  {
    "id": 21,
    "category": "Volume of Distribution",
    "questionText": "Vd is a theoretical volume. If a drug's plasma concentration is 10 mg/L immediately after an IV dose of 500 mg, what is the Vd?",
    "options": [
      { "text": "0.02 L", "explanation": "Math error." },
      { "text": "5 L", "explanation": "Math error." },
      { "text": "50 L", "explanation": "Vd = Dose / Concentration. Vd = 500 mg / 10 mg/L = 50 L." },
      { "text": "500 L", "explanation": "Math error." },
      { "text": "5000 L", "explanation": "Math error." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 46,
    "slideImageDescription": "The slide 'Calculating Vd' presents the formula: Vd = Dose / Cp0. It provides a sample calculation."
  },
  {
    "id": 22,
    "category": "Plasma Proteins",
    "questionText": "Which plasma protein is the primary carrier for acidic drugs (e.g., NSAIDs, Warfarin)?",
    "options": [
      { "text": "Alpha-1 acid glycoprotein", "explanation": "Alpha-1 acid glycoprotein primarily binds basic drugs." },
      { "text": "Albumin", "explanation": "Albumin is the most abundant plasma protein and primarily binds weak acids and neutral drugs." },
      { "text": "Lipoproteins", "explanation": "Bind lipophilic drugs, but albumin is the major carrier for acids." },
      { "text": "Gamma globulins", "explanation": "These are antibodies." },
      { "text": "Hemoglobin", "explanation": "Carries oxygen/CO2." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 86,
    "slideImageDescription": "The slide 'Plasma Proteins' lists Albumin. Bullet point: 'Binds Acidic Drugs'. Below it, 'Alpha-1 Acid Glycoprotein' is listed as 'Binds Basic Drugs'."
  },
  {
    "id": 23,
    "category": "Prodrugs",
    "questionText": "Levodopa is given to Parkinson's patients because Dopamine cannot cross the BBB. Levodopa crosses the BBB and is then converted to Dopamine. Levodopa is best classified as a:",
    "options": [
      { "text": "Active metabolite", "explanation": "It is the precursor." },
      { "text": "Prodrug", "explanation": "A prodrug is an inactive (or less active) compound that is metabolized in the body to the active drug. Levodopa -> Dopamine is the classic example." },
      { "text": "Phase 2 substrate", "explanation": "Not a classification of the drug type." },
      { "text": "Enzyme inhibitor", "explanation": "Incorrect." },
      { "text": "Receptor antagonist", "explanation": "Incorrect." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 35,
    "slideImageDescription": "The slide 'Metabolism: Prodrugs' defines them as 'Inactive drugs metabolized to Active drugs'. Levodopa is often listed as the example."
  },
  {
    "id": 24,
    "category": "Enterohepatic Recycling",
    "questionText": "A drug is glucuronidated in the liver, secreted into the bile, enters the intestine, is cleaved by bacterial beta-glucuronidases, and the parent drug is reabsorbed. This cycle is called:",
    "options": [
      { "text": "First pass effect", "explanation": "This happens before systemic circulation." },
      { "text": "Enterohepatic recirculation", "explanation": "This specific cycle (Liver -> Bile -> Gut -> Liver) maintains drug levels and prolongs the half-life." },
      { "text": "Biliary excretion", "explanation": "This is just the exit step." },
      { "text": "Phase 3 metabolism", "explanation": "Not a standard term." },
      { "text": "Redistribution", "explanation": "Redistribution is tissue to tissue." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 21,
    "slideImageDescription": "The slide 'Enterohepatic Recirculation' diagrams the loop: Liver -> Bile Duct -> Intestine -> Portal Vein -> Liver. It notes that bacterial enzymes can reverse conjugation, allowing reabsorption."
  },
  {
    "id": 25,
    "category": "Loading Dose",
    "questionText": "The primary purpose of administering a Loading Dose is to:",
    "options": [
      { "text": "Maintain the steady state concentration.", "explanation": "This is the purpose of the Maintenance Dose." },
      { "text": "Minimize toxic effects.", "explanation": "Loading doses actually increase risk of initial toxicity." },
      { "text": "Reach the therapeutic target concentration rapidly.", "explanation": "A loading dose fills the Volume of Distribution immediately to achieve target plasma levels without waiting 4-5 half-lives." },
      { "text": "Prolong the duration of action.", "explanation": "Half-life determines duration." },
      { "text": "Test for allergic reactions.", "explanation": "Irrelevant." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 17,
    "slideImageDescription": "The slide 'Dosing Regimens' contrasts Loading Dose vs Maintenance Dose. Loading Dose is defined as 'Fill the tank (Vd) to reach Css quickly'."
  },

  // --- L110: Metabolism & Excretion (25 Questions) ---

  // 26. Metabolism Purpose
  {
    "id": 26,
    "category": "Metabolism Components",
    "questionText": "The primary goal of Phase I and Phase II metabolism is to convert lipophilic drugs into molecules that are:",
    "options": [
      { "text": "More lipid soluble and reabsorbable", "explanation": "This would prevent excretion." },
      { "text": "More water soluble (hydrophilic) and excretable", "explanation": "The kidney handles water-soluble compounds best. Metabolism adds polar groups/conjugates to facilitate excretion in urine or bile." },
      { "text": "Volatile and excretable via lungs", "explanation": "Rare." },
      { "text": "Pharmacologically more active", "explanation": "Sometimes happens, but not the 'goal' of the body's defense." },
      { "text": "Protein bound", "explanation": "Metabolism doesn't aim for this." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 59,
    "slideImageDescription": "The slide 'Purpose of Metabolism' (Biotransformation) has a flowchart: Lipophilic Drug -> Metabolism -> Hydrophilic Metabolite -> Excretion. Key concept: 'Make it water soluble'."
  },
  {
    "id": 27,
    "category": "Phase 1 Reactions",
    "questionText": "Which chemical reaction is characteristic of Phase I metabolism?",
    "options": [
      { "text": "Glucuronidation", "explanation": "Phase 2." },
      { "text": "Acetylation", "explanation": "Phase 2." },
      { "text": "Oxidation", "explanation": "Phase I reactions are Oxidation, Reduction, and Hydrolysis. They functionalize the molecule (add/expose -OH, -NH2, etc.)." },
      { "text": "Sulfation", "explanation": "Phase 2." },
      { "text": "Methylation", "explanation": "Phase 2." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 11,
    "slideImageDescription": "The slide 'Phase I vs Phase II' lists the reaction types. Phase I: Oxidation (CYP450), Reduction, Hydrolysis. Phase II: Conjugation reactions."
  },
  {
    "id": 28,
    "category": "CYP450 System",
    "questionText": "Cytochrome P450 enzymes require molecular oxygen and NADPH. What is the essential metallic cofactor located within the active site of the CYP enzyme that binds oxygen?",
    "options": [
      { "text": "Magnesium", "explanation": "No." },
      { "text": "Zinc", "explanation": "No." },
      { "text": "Iron (Heme)", "explanation": "CYP enzymes are hemoproteins. The heme iron cycles between Fe2+ and Fe3+ to activate oxygen." },
      { "text": "Copper", "explanation": "No." },
      { "text": "Selenium", "explanation": "No." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 15,
    "slideImageDescription": "The slide 'CYP450 Mechanism' shows the catalytic cycle. The 'Heme Iron' is explicitly shown binding the Drug and Oxygen."
  },
  {
    "id": 29,
    "category": "Phase 2 Reactions",
    "questionText": "Which enzyme family is responsible for the glucuronidation of drugs, the most common Phase II reaction?",
    "options": [
      { "text": "Cytochrome P450 (CYP)", "explanation": "Phase 1." },
      { "text": "UDP-glucuronosyltransferase (UGT)", "explanation": "UGTs transfer glucuronic acid from UDP-GA to the substrate." },
      { "text": "N-acetyltransferase (NAT)", "explanation": "Does acetylation." },
      { "text": "Sulfotransferase (SULT)", "explanation": "Does sulfation." },
      { "text": "Alcohol dehydrogenase (ADH)", "explanation": "Phase 1 non-CYP." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 3,
    "slideImageDescription": "The slide 'Phase II Enzymes' lists UGTs as the Transferases for Glucuronidation. It emphasizes them as the 'Major Phase II pathway'."
  },
  {
    "id": 30,
    "category": "Metabolic Specificity",
    "questionText": "CYP enzymes typically have:",
    "options": [
      { "text": "High substrate specificity (one enzyme, one drug)", "explanation": "No, they are promiscuous." },
      { "text": "Low substrate specificity (one enzyme, many drugs)", "explanation": "A single CYP (like CYP3A4) can metabolize hundreds of structurally diverse drugs. This 'broad specificity' is efficient for defense." },
      { "text": "No requirement for cofactors", "explanation": "Need NADPH/O2." },
      { "text": "Locations exclusively in the mitochondria", "explanation": "Microsonal (ER) mostly." },
      { "text": "Resistance to inhibition", "explanation": "They are easily inhibited." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 14,
    "slideImageDescription": "The slide 'CYP Characteristics' noted 'Low Substrate Specificity'. It explains that this allows the liver to handle the wide variety of xenobiotics we encounter."
  },
  {
    "id": 31,
    "category": "Enzyme Inhibition",
    "questionText": "Ketoconazole is a potent inhibitor of CYP3A4. If a patient taking Ketoconazole is prescribed Simvastatin (a CYP3A4 substrate), what is the expected pharmacokinetic outcome?",
    "options": [
      { "text": "Decreased Simvastatin concentration", "explanation": "Inhibition leads to increased concentration." },
      { "text": "Increased Simvastatin clearance", "explanation": "Clearance decreases." },
      { "text": "Increased Simvastatin plasma concentration", "explanation": "Inhibiting the metabolic enzyme prevents the breakdown of the substrate (Simvastatin), causing its levels to rise, potentially leading to muscle toxicity (rhabdomyolysis)." },
      { "text": "Reduced bioavailability of Simvastatin", "explanation": "Bioavailability increases (less first pass)." },
      { "text": "Induction of Simvastatin metabolism", "explanation": "Ketoconazole is an inhibitor, not inducer." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 36,
    "slideImageDescription": "The slide 'Enzyme Inhibition' shows a diagram where the 'Inhibitor' blocks the enzyme. The graph shows the 'Substrate' levels rising significantly (AUC increases)."
  },
  {
    "id": 32,
    "category": "Enzyme Induction",
    "questionText": "Rifampin is a potent inducer of CYP enzymes. Unlike inhibition, which is immediate, the effect of induction:",
    "options": [
      { "text": "Occurs immediately upon one dose", "explanation": "Induction requires protein synthesis." },
      { "text": "Is delayed because it requires the synthesis of new enzyme proteins", "explanation": "Induction works by upregulating gene transcription/translation. This biological process takes days to weeks to reach steady state." },
      { "text": "Results in increased drug concentrations", "explanation": "Induction lowers drug concentrations (metabolism speeds up)." },
      { "text": "Is irreversible", "explanation": "Levels return to normal after inducer is stopped." },
      { "text": "Only affects Phase 2 enzymes", "explanation": "Affects CYPs (Phase 1) prominently." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 36,
    "slideImageDescription": "The slide 'Enzyme Induction' contrasts with Inhibition. It states 'Time Course: Delayed'. 'Mechanism: New Protein Synthesis'. Effect: 'Decreased Substrate Levels'."
  },
  {
    "id": 33,
    "category": "Pharmacogenomics",
    "questionText": "A patient is a 'Poor Metabolizer' (PM) for CYP2D6 due to a genetic polymorphism. If prescribed Codeine (a prodrug activated by CYP2D6 to morphine), what is the expected clinical response?",
    "options": [
      { "text": "Risk of morphine toxicity", "explanation": "This would happen in Ultra-Rapid Metabolizers." },
      { "text": "Therapeutic failure (no analgesia)", "explanation": "Since Codeine is a prodrug, it *needs* CYP2D6 to become active (morphine). A Poor Metabolizer cannot convert it, so the patient gets no pain relief." },
      { "text": "Normal response", "explanation": "Requires normal metabolism." },
      { "text": "Rapid elimination of codeine", "explanation": "Elimination of parent is slowed, but primary issue is lack of active metabolite." },
      { "text": "Allergic reaction", "explanation": "Unrelated." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 4,
    "slideImageDescription": "The slide 'Pharmacogenomics: CYP2D6' uses Codeine as the case study. A table shows: PM (Poor Metabolizer) -> Minimal Morphine -> No Pain Relief. UM (Ultra Metabolizer) -> Spike in Morphine -> Toxicity."
  },
  {
    "id": 34,
    "category": "Pharmacogenomics",
    "questionText": "Conversely, if a patient is a CYP2D6 'Ultra-Rapid Metabolizer' and takes the same dose of Codeine:",
    "options": [
      { "text": "They will achieve no pain relief.", "explanation": "They convert too much." },
      { "text": "They are at risk for respiratory depression (toxicity).", "explanation": "They rapidly convert all the Codeine to Morphine, causing an overdose-like effect from a standard dose." },
      { "text": "The drug will be excreted unchanged.", "explanation": "It is rapidly metabolized." },
      { "text": "They will require a higher dose for effect.", "explanation": "They need a lower dose or different drug." },
      { "text": "The bioavailablity is 0.", "explanation": "No." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 112,
    "slideImageDescription": "Same slide as above. The UM row highlights 'Toxicity' and 'Respiratory Depression'."
  },
  {
    "id": 35,
    "category": "Grey Baby Syndrome",
    "questionText": "Neonates have immature Phase II metabolic pathways, specifically low Glucuronidation capacity. This places them at risk for toxicity from drugs like Chloramphenicol, leading to:",
    "options": [
      { "text": "Red Man Syndrome", "explanation": "Vancomycin." },
      { "text": "Grey Baby Syndrome", "explanation": "Chloramphenicol accumulates because neonates cannot glucuronidate it (immature UGTs). This leads to cardiovascular collapse, cyanosis (grey color), and death." },
      { "text": "Kernicterus", "explanation": "Sulfonamides displacing bilirubin." },
      { "text": "Floppy Baby Syndrome", "explanation": "Botulism." },
      { "text": "Blue Baby Syndrome", "explanation": "Methemoglobinemia." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 117,
    "slideImageDescription": "The 'Age-Related Metabolism' slide highlights 'Neonates'. Bullet: 'Deficient Glucuronidation'. Example: 'Chloramphenicol -> Grey Baby Syndrome'."
  },
  {
    "id": 36,
    "category": "Excretion",
    "questionText": "Which process in the kidney is passive and dependent on the concentration gradient and lipid solubility?",
    "options": [
      { "text": "Glomerular Filtration", "explanation": "This is pressure driven, size dependent." },
      { "text": "Active Tubular Secretion", "explanation": "Carrier mediated, requires energy." },
      { "text": "Tubular Reabsorption", "explanation": "As water is reabsorbed, drug concentration increases in the tubule. Lipid soluble drugs passively diffuse back into the blood (reabsorption). This is the process we target with Ion Trapping." },
      { "text": "Blood flow", "explanation": "Not a transport process." },
      { "text": "Clearance", "explanation": "The result of the processes." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 37,
    "slideImageDescription": "The slide 'Renal Excretion' details 3 steps: 1. Filtration (Free drug only). 2. Secretion (Active). 3. Reabsorption (Passive, Lipid Soluble)."
  },
  {
    "id": 37,
    "category": "Renal Clearance",
    "questionText": "If a drug is filtered at the glomerulus and is neither secreted nor reabsorbed, its clearance will equal:",
    "options": [
      { "text": "Renal plasma flow", "explanation": "Approx 650 ml/min (PAH clearance)." },
      { "text": "Glomerular Filtration Rate (GFR)", "explanation": "Approx 120 ml/min (Creatinine/Inulin clearance). If only filtered, Clearance = GFR." },
      { "text": "Urine flow rate", "explanation": "Too variable." },
      { "text": "Zero", "explanation": "It is filtered." },
      { "text": "Hepatic blood flow", "explanation": "Unrelated." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 37,
    "slideImageDescription": "The slide 'Clearance Concepts' uses Creatinine as the marker. C = GFR if no secretion/reabsorption."
  },
  {
    "id": 38,
    "category": "Secretion",
    "questionText": "Probenecid inhibits the active tubular secretion of Penicillin. This interaction results in:",
    "options": [
      { "text": "Decreased Penicillin plasma levels", "explanation": "Would mean faster excretion." },
      { "text": "Increased Penicillin plasma levels and prolonged half-life", "explanation": "By blocking the exit door (OAT transporters in the tubule), Probenecid keeps Penicillin in the blood longer. This was used historically to prolong penicillin action." },
      { "text": "Increased renal clearance of Penicillin", "explanation": "Clearance is reduced." },
      { "text": "Reduced oral absorption of Penicillin", "explanation": "Interaction is renal." },
      { "text": "Increased metabolism", "explanation": "Interaction is renal." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 25,
    "slideImageDescription": "The slide 'Tubular Secretion' mentions OAT (Organic Anion Transporters). The Clinical Note cites 'Probenecid + Penicillin' as a beneficial interaction increasing half-life."
  },
  {
    "id": 39,
    "category": "Biliary Excretion",
    "questionText": "Drugs excreted in the bile typically have which characteristic?",
    "options": [
      { "text": "Low molecular weight (< 100)", "explanation": "Filtered by kidney." },
      { "text": "High molecular weight (> 300-500) and amphiathic/polar groups", "explanation": "The liver transporters (ABC superfamily) prefer larger molecules, often conjugated (glucuronides)." },
      { "text": "Gas at room temperature", "explanation": "Lungs." },
      { "text": "Complete water insolubility", "explanation": "Need some polarity to be in bile." },
      { "text": "Zero protein binding", "explanation": "Unrelated." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 35,
    "slideImageDescription": "The slide 'Biliary Excretion' lists characteristics: 'MW > 500', 'Polar groups', 'Active Transport required'."
  },
  {
    "id": 40,
    "category": "Kinetics Order",
    "questionText": "Most drugs follow First-Order Elimination Kinetics. This means:",
    "options": [
      { "text": "A constant amount of drug is eliminated per unit time (e.g., 10 mg/hour).", "explanation": "This is Zero-Order." },
      { "text": "A constant fraction (percentage) of drug is eliminated per unit time.", "explanation": "First-Order = Constant Fraction. The rate of elimination is proportional to concentration." },
      { "text": "The elimination rate is independent of concentration.", "explanation": "Zero-Order." },
      { "text": "The half-life changes with dose.", "explanation": "Zero-Order." },
      { "text": "Enzymes are saturated.", "explanation": "Zero-Order." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 83,
    "slideImageDescription": "The slide 'First Order vs Zero Order' has a comparison table. First Order: 'Constant Fraction', 'Linear', 'Independent Half-life'. Zero Order: 'Constant Amount', 'Saturable', 'Dose-dependent Half-life'."
  },
  {
    "id": 41,
    "category": "Zero Order",
    "questionText": "Ethanol (Alcohol) is a classic example of a drug that follows Zero-Order Kinetics at typical recreational concentrations. This implies that:",
    "options": [
      { "text": "Metabolism increases as concentration increases.", "explanation": "First Order." },
      { "text": "Elimination pathways are saturated.", "explanation": "In Zero-Order kinetics, the enzymes are working at Vmax (maximum capacity). They process a fixed amount per hour regardless of how high the blood alcohol goes." },
      { "text": "Half-life is constant.", "explanation": "Half-life varies in Zero Order." },
      { "text": "Clearance is constant.", "explanation": "Clearance varies." },
      { "text": "First-pass effect is 100%.", "explanation": "Irrelevant." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 57,
    "slideImageDescription": "The 'Zero Order' slide shows a linear decay on a linear scale. Key concept: 'Saturation of Enzymes'. Example: 'Ethanol, Phenytoin, Aspirin (high dose)'."
  },
  {
    "id": 42,
    "category": "Half Life",
    "questionText": "A drug has a half-life (t1/2) of 4 hours. Approximately how long will it take to reach steady state (Css) with continuous dosing?",
    "options": [
      { "text": "4 hours", "explanation": "1 half-life = 50%." },
      { "text": "8 hours", "explanation": "2 half-lives = 75%." },
      { "text": "16-20 hours", "explanation": "Steady state is reached in 4-5 half-lives. 4 * 4 = 16. 5 * 4 = 20." },
      { "text": "40 hours", "explanation": "Too long." },
      { "text": "It depends on the dose.", "explanation": "Time to steady state depends ONLY on half-life, not dose." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 72,
    "slideImageDescription": "The slide 'Time to Steady State' states the rule: '4-5 Half-lives to reach ~95% of steady state'."
  },
  {
    "id": 43,
    "category": "Half Life",
    "questionText": "Similarly, if the infusion is stopped, how long will it take to eliminate >95% of the drug from the body?",
    "options": [
      { "text": "1 half-life", "explanation": "50% remaining." },
      { "text": "2 half-lives", "explanation": "25% remaining." },
      { "text": "3 half-lives", "explanation": "12.5% remaining." },
      { "text": "4-5 half-lives", "explanation": "After 4 half-lives, 6.25% remains. After 5, 3.125% remains. Thus >95% is eliminated." },
      { "text": "Depending on renal function alone", "explanation": "Renal function changes the half-life, but the *rule* of 4-5 half-lives applies to whatever the half-life is." }
    ],
    "correctAnswerIndex": 3,
    "pdfPage": 143,
    "slideImageDescription": "The slide 'Washout' shows the mirror image of the accumulation curve. '4-5 half-lives to eliminate'."
  },
  {
    "id": 44,
    "category": "Phase 2 Polymorphism",
    "questionText": "Slow acetylation (NAT2 polymorphism) is a common genetic trait. Patients who are 'Slow Acetylators' are at increased risk for drug-induced lupus when taking which drug?",
    "options": [
      { "text": "Penicillin", "explanation": "Not acetylated." },
      { "text": "Hydralazine or Procainamide", "explanation": "These drugs are metabolized by N-acetyltransferase (NAT). Slow acetylators accumulate the parent drug, leading to the side effect of Drug-Induced Lupus Erythematosus (DILE)." },
      { "text": "Acetaminophen", "explanation": "Toxicity is via CYP2E1 (NAPQI)." },
      { "text": "Morphine", "explanation": "Glucuronidated." },
      { "text": "Digoxin", "explanation": "Renal elimination." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 95,
    "slideImageDescription": "The slide 'Pharmacogenomics: NAT2' lists 'Slow Acetylators'. Clinical consequence: 'Isoniazid (Neuropathy)', 'Hydralazine/Procainamide (Lupus)'."
  },
  {
    "id": 45,
    "category": "Cytochrome P450",
    "questionText": "Grapefruit juice is clinically significant because it contains furanocoumarins that:",
    "options": [
      { "text": "Induce CYP3A4", "explanation": "No." },
      { "text": "Inhibit CYP3A4 in the intestinal wall", "explanation": "Grapefruit inhibits intestinal CYP3A4, significantly increasing the bioavailability of substrates (e.g., Statins, CCBs) before they even reach the liver." },
      { "text": "Inhibit renal excretion", "explanation": "No." },
      { "text": "Bind to drugs in the stomach", "explanation": "No." },
      { "text": "Acidify the urine", "explanation": "Though acidic, this isn't the major interaction mechanism." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 97,
    "slideImageDescription": "The 'Food-Drug Interactions' slide features a picture of a Grapefruit. Text: 'Inhibits intestinal CYP3A4'. Consequence: 'Increased F (Bioavailability)'."
  },
  {
    "id": 46,
    "category": "Creatinine Clearance",
    "questionText": "Creatinine Clearance (CrCl) is used as a surrogate marker to estimate:",
    "options": [
      { "text": "Liver blood flow", "explanation": "No." },
      { "text": "Tubular secretion rate", "explanation": "No." },
      { "text": "Glomerular Filtration Rate (GFR)", "explanation": "Creatinine is an endogenous substance produced at a constant rate, filtered, and minimally secreted. It provides a good clinical estimate of GFR." },
      { "text": "Effective Renal Plasma Flow", "explanation": "PAH is used for this." },
      { "text": "Biliary clearance", "explanation": "No." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 37,
    "slideImageDescription": "The slide 'Estimating Renal Function' highlights 'Creatinine Clearance'. It equates CrCl approx GFR. The Cockcroft-Gault equation is often displayed."
  },
  {
    "id": 47,
    "category": "Geriatric Pharmacokinetics",
    "questionText": "In geriatric patients, which pharmacokinetic change is legally/physiologically predictable?",
    "options": [
      { "text": "Increased Phase 1 metabolism", "explanation": "Metabolism generally decreases." },
      { "text": "Increased Renal GFR", "explanation": "GFR decreases with age." },
      { "text": "Reduced Total Body Water and increased Fat", "explanation": "Aging involves muscle loss and relative fat increase, plus dehydration. This changes Vd (Increased for lipophilic drugs, Decreased for hydrophilic drugs)." },
      { "text": "Increased Albumin", "explanation": "Albumin often decreases or stays same." },
      { "text": "Increased First Pass effect", "explanation": "Hepatic flow decreases." }
    ],
    "correctAnswerIndex": 2,
    "pdfPage": 78,
    "slideImageDescription": "The slide 'Geriatric PK' lists 'Body Composition Changes': Lower TBW, Higher Body Fat. Consequences: Increased Vd for lipid soluble drugs (longer half-life)."
  },
  {
    "id": 48,
    "category": "Maintenance Dose",
    "questionText": "The Maintenance Dose calculation is primarily dependent on:",
    "options": [
      { "text": "Volume of Distribution", "explanation": "This determines Loading Dose." },
      { "text": "Clearance", "explanation": "Maintenance Dose Rate = Clearance * Target Css. To replace what is lost, you must know how fast it is cleared." },
      { "text": "Loading Dose", "explanation": "Independent." },
      { "text": "Absorption Rate", "explanation": "Affects peak, but average dose depends on clearance." },
      { "text": "Protein Binding", "explanation": "Factor in clearance." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 36,
    "slideImageDescription": "The 'Maintenance Dose' slide shows the formula: MD = CL * Css * DosingInterval. The key variable driving the rate is Clearance (CL)."
  },
  {
    "id": 49,
    "category": "Drug Accumulation",
    "questionText": "If a drug is administered every 6 hours, but its half-life is 12 hours, what will occur?",
    "options": [
      { "text": "No accumulation", "explanation": "Accumulation happens if dosing < 4-5 half-lives." },
      { "text": "Accumulation to a steady state higher than the single dose peak", "explanation": "Since the drug is not fully eliminated before the next dose (6h < 12h), the drug accumulates until rate in = rate out (Steady State)." },
      { "text": "Toxic accumulation without plateau", "explanation": "It will plateau (reach steady state) as long as it is First Order." },
      { "text": "Tachyphylaxis", "explanation": "Unrelated." },
      { "text": "Zero order kinetics", "explanation": "Unrelated." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 46,
    "slideImageDescription": "The slide 'Drug Accumulation' shows a step-ladder curve rising and plateauing. 'Dosing interval < elimination time leads to accumulation and steady state'."
  },
  {
    "id": 50,
    "category": "Clearance Definition",
    "questionText": "Clearance is best defined as:",
    "options": [
      { "text": "The amount of drug removed per minute (mg/min).", "explanation": "This varies with concentration." },
      { "text": "The volume of plasma from which the drug is completely removed per unit time (ml/min).", "explanation": "This is the formal definition. It represents the efficiency of irreversible elimination." },
      { "text": "The time it takes for 50% of drug to leave.", "explanation": "This is Half-Life." },
      { "text": "The fraction of drug absorbed.", "explanation": "Bioavailability." },
      { "text": "The total amount of drug excreted in urine.", "explanation": "Recovery." }
    ],
    "correctAnswerIndex": 1,
    "pdfPage": 29,
    "slideImageDescription": "The slide 'Clearance (CL)' gives the definition: 'Volume of blood cleared of drug per unit time'. Units: Volume/Time (e.g., L/hr or ml/min)."
  }
];

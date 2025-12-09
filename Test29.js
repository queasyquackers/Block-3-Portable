window.L135 = [
  {
    "id": 1,
    "category": "Cross-Sectional Study",
    "questionText": "A researcher sends a survey to 1,000 random residents of a city to determine the prevalence of asthma and pet ownership at that specific moment in time. They find a correlation. The major limitation of this study design preventing the establishment of causality is:",
    "options": [
      {"text": "Recall bias", "explanation": "Incorrect. While possible in surveys, it is not the defining limitation for causality here. This would be the correct answer if the question focused on the accuracy of past exposure reporting in a Case-Control study."},
      {"text": "Lack of temporal relationship", "explanation": "Correct. In a cross-sectional study (snapshot), you don't know if exposure (pet) came before outcome (asthma) or vice versa (maybe asthma patients get rid of pets)."},
      {"text": "Low response rate", "explanation": "Incorrect. This affects generalizability (representativeness). This would be the correct answer if the question asked why the prevalence estimate might not apply to the whole city."},
      {"text": "Selection bias", "explanation": "Incorrect. Random sampling minimizes this. This would be the correct answer if the survey was only sent to pet store customers."},
      {"text": "High cost", "explanation": "Incorrect. Cross-sectional studies are relatively cheap/fast. This would be the correct answer if comparing to a Case Series, but generally studies like Cohort/RCT are the high-cost ones."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Cross-sectional studies evaluate exposure and outcome simultaneously (snapshot), making it impossible to establish temporal sequence (causality) - i.e., did the exposure precede the disease?",
    "pdfPage": 5,
    "slideImageDescription": "The slide 'Cross-Sectional Study' notes: 'You cannot conclude anything about risk or incidence because this was a one-time measurement with no element of time.'"
  },
  {
    "id": 2,
    "category": "Case-Control Design",
    "questionText": "A study identifies 50 patients with a rare form of brain cancer and 50 healthy controls. The researchers interview both groups about their past cell phone usage. The finding is an Odds Ratio of 2.0. Which of the following is the most significant potential bias in this study?",
    "options": [
      {"text": "Loss to follow-up", "explanation": "Incorrect. This is a bias of prospective studies (Cohort/RCT). This would be the correct answer if patients dropped out over time."},
      {"text": "Recall Bias", "explanation": "Correct. Patients with a serious disease ('cases') are more likely to ruminate on and overestimate past exposures compared to healthy controls."},
      {"text": "Lead-time Bias", "explanation": "Incorrect. This is a screening bias. This would be the correct answer if the study evaluated survival time after a new screening test."},
      {"text": "Length Bias", "explanation": "Incorrect. This is a screening bias. This would be the correct answer if the study evaluated a screening program detecting slow-growing cancers."},
      {"text": "Ecological Fallacy", "explanation": "Incorrect. This requires group-level data. This would be the correct answer if the study compared brain cancer rates in countries with high vs low cell phone sales."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Case-Control studies are retrospective and rely on memory, making them highly susceptible to Recall Bias, where cases remember exposures differently than controls.",
    "pdfPage": 42,
    "slideImageDescription": "The slide 'Recall bias' explains that 'People with disease remember or report exposures differently... than those without disease.'"
  },
  {
    "id": 3,
    "category": "Odds Ratio Interpretation",
    "questionText": "A Case-Control study on coffee and Parkinson's Disease (PD) reports an Odds Ratio of 1.3 (95% CI: 0.9 - 1.8). What is the correct interpretation?",
    "options": [
      {"text": "Coffee drinking imposes a 30% increased risk for PD.", "explanation": "Incorrect. This interprets the point estimate (1.3) as significant. This would be the correct answer if the CI was 1.1 - 1.5 (entirely above 1.0)."},
      {"text": "Coffee drinking is protective against PD.", "explanation": "Incorrect. OR > 1 implies risk, not protection. This would be the correct answer if the OR was < 1 (e.g., 0.7)."},
      {"text": "The association is not statistically significant.", "explanation": "Correct. The 95% Confidence Interval (0.9 - 1.8) includes 1.0 (the null value), meaning the result is not statistically significant."},
      {"text": "There is a 95% chance the true OR is 1.3.", "explanation": "Incorrect. The CI means we are 95% confident the true value lies *somewhere* in the usage. This would be the correct answer if... never (common misconception)."},
      {"text": "PD patients are 1.3 times more likely to be coffee drinkers.", "explanation": "Incorrect. While this describes the point estimate, the *correct interpretation* must address the statistical non-significance shown by the CI."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "If a 95% Confidence Interval for a Ratio (OR or RR) includes 1.0, the result is NOT statistically significant (p > 0.05).",
    "pdfPage": 19,
    "slideImageDescription": "The slide 'Statistical Significance' explicitly states: 'IF your CI includes 1, then you automatically will NOT have statistically significant results'."
  },
  {
    "id": 4,
    "category": "Selection Bias",
    "questionText": "An investigator studies the relationship between alcohol and liver disease using patients hospitalized for liver disease as cases and patients hospitalization for trauma as controls. The trauma patients, however, have a much higher rate of alcohol use than the general population. This will result in:",
    "options": [
      {"text": "Overestimation of the association", "explanation": "Incorrect. This would happen if controls had *abnormally low* alcohol use (e.g., Mormons)."},
      {"text": "Underestimation of the association (Bias towards the null)", "explanation": "Correct. Since the control group has artificially high exposure (alcohol -> trauma), the difference between cases and controls shrinks, making alcohol look less risky for liver disease than it actually is."},
      {"text": "Recall bias", "explanation": "Incorrect. This is an information bias. This would be the correct answer if liver patients remembered drinking more than trauma patients."},
      {"text": "Confounding by age", "explanation": "Incorrect. This is a mixing of effects. This would be the correct answer if age was the reason for the association, not the control selection."},
      {"text": "Effect Modification", "explanation": "Incorrect. This is a real difference in effect. This would be the correct answer if alcohol caused liver disease in men but not women."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Selection bias occurs when controls do not represent the exposure distribution of the base population. Using 'unrepresentative' hospital controls (like alcohol-related trauma) can wash out true associations.",
    "pdfPage": 12,
    "slideImageDescription": "The slide 'Disadvantages of hospital controls' notes they 'may not accurately represent the exposure history in the population'."
  },
  {
    "id": 5,
    "category": "Relative Risk Calculation",
    "questionText": "In a cohort study, incidence in the exposed group is 10/100 and incidence in the unexposed is 5/100. What is the Relative Risk?",
    "options": [
      {"text": "0.5", "explanation": "Incorrect. This is 5/10. This would be the correct answer if unexposed incidence was 10/100 and exposed was 5/100 (Preventive)."},
      {"text": "2.0", "explanation": "Correct. RR = Incidence(Exposed) / Incidence(Unexposed) = 0.10 / 0.05 = 2.0."},
      {"text": "5.0", "explanation": "Incorrect. This would be the correct answer if exposed incidence was 25/100."},
      {"text": "0.05", "explanation": "Incorrect. This is the Incidence Difference (Risk Difference). This would be the correct answer if calculating Attributable Risk (0.10 - 0.05)."},
      {"text": "50%", "explanation": "Incorrect. Could represent Attributable Fraction? (RR-1)/RR = 0.5. This would be the correct answer if asking 'What % of cases in the exposed are due to exposure?'"}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Relative Risk (RR) measures the strength of association in cohort studies. RR = I(exp) / I(unexp). RR=2 means exposed are twice as likely to get the disease.",
    "pdfPage": 29,
    "slideImageDescription": "The slide 'Relative Risk: Calculated in a Cohort Study' shows the formula I(exposed) / I(non-exposed)."
  },
  {
    "id": 6,
    "category": "Number Needed to Treat (NNT)",
    "questionText": "A new drug reduces the absolute risk of stroke from 4% (0.04) to 2% (0.02) over 5 years. How many patients need to be treated for 5 years to prevent one stroke?",
    "options": [
      {"text": "20", "explanation": "Incorrect. This would be the correct answer if ARR was 5% (1/0.05)."},
      {"text": "25", "explanation": "Incorrect. This would be the correct answer if ARR was 4% (1/0.04)."},
      {"text": "50", "explanation": "Correct. ARR = 0.04 - 0.02 = 0.02. NNT = 1 / ARR = 1 / 0.02 = 50."},
      {"text": "100", "explanation": "Incorrect. This would be the correct answer if ARR was 1% (1/0.01)."},
      {"text": "200", "explanation": "Incorrect. This would be the correct answer if ARR was 0.5% (1/0.005)."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "NNT is the inverse of the Absolute Risk Reduction (ARR). NNT = 1 / (I_control - I_treatment). It represents the clinical effort required to prevent one bad outcome.",
    "pdfPage": 33,
    "slideImageDescription": "The slide 'Number Needed to Treat (NNT)' shows the formula NNT = 1 / Absolute Risk Reduction."
  },
  {
    "id": 7,
    "category": "Confounding",
    "questionText": "A study finds that lighter carrying lighter matches is associated with lung cancer. However, later analysis reveals that people who carry matches are smokers, and smoking causes lung cancer, not the matches. In this scenario, 'Smoking' is a:",
    "options": [
      {"text": "Effect Modifier", "explanation": "Incorrect. Effect modifier changes the strength of association. This would be the correct answer if matches caused cancer ONLY in smokers."},
      {"text": "Confounder", "explanation": "Correct. A confounder is associated with the exposure (matches) and is a cause of the outcome (cancer), creating a false association."},
      {"text": "Mediator", "explanation": "Incorrect. A mediator is on the causal pathway. This would be the correct answer if Matches -> Smoking -> Cancer (i.e., carrying matches caused you to smoke)."},
      {"text": "Bias", "explanation": "Incorrect. Confounding is a specific type of distortion, distinct from Selection or Information Bias."},
      {"text": "Dependent Variable", "explanation": "Incorrect. This is the Outcome (Cancer)."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "A Confounder is a third variable that distorts the observed relationship between exposure and outcome because it is related to both.",
    "pdfPage": 34,
    "slideImageDescription": "The slide 'Confounding' explains: 'An alternate explanation... What if it is really the scarf (confounder) that protects against colds?'"
  },
  {
    "id": 8,
    "category": "Effect Modification",
    "questionText": "A new drug works very well to prevent heart attacks in men (RR=0.5), but has no effect in women (RR=1.0). This difference in effect by sex is an example of:",
    "options": [
      {"text": "Confounding", "explanation": "Incorrect. Confounding masks the truth; here the difference IS the truth. This would be the correct answer if the overall results were skewed because the study was mostly men."},
      {"text": "Interaction (Effect Modification)", "explanation": "Correct. Effect modification occurs when the magnitude of the effect of an exposure (drug) on an outcome differs depending on the level of a third variable (sex)."},
      {"text": "Selection Bias", "explanation": "Incorrect. This would be the correct answer if women were excluded from the study improperly."},
      {"text": "Recall Bias", "explanation": "Incorrect. This would be the correct answer if men reported their heart attacks differently."},
      {"text": "Measurement Error", "explanation": "Incorrect. This would be the correct answer if the heart attack diagnosis was wrong in women."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Effect Modification (Interaction) is a biological reality to be described, not 'corrected' like confounding. It means the treatment works differently in different groups.",
    "pdfPage": 36,
    "slideImageDescription": "The slide 'Interaction (Effect Modification)' defines it as 'When an exposure behaves differently in different groups' with a male/female example."
  },
  {
    "id": 9,
    "category": "Study Design Selection",
    "questionText": "You are investigating a very rare disease (prevalence 1 in 10,000). You want to identify potential risk factors. The most efficient study design to start with is:",
    "options": [
      {"text": "Prospective Cohort Study", "explanation": "Incorrect. Would need >100,000 people to find enough cases. This would be the correct answer for a Rare Exposure (not Rare Disease)."},
      {"text": "Case-Control Study", "explanation": "Correct. Starts with the disease (Cases). You can easily gather 50 cases from registries without screening millions. Best for rare diseases."},
      {"text": "Randomized Clinical Trial", "explanation": "Incorrect. Unethical/impossible to randomize people to risk factors. This would be the correct answer for testing a Treatment."},
      {"text": "Cross-Sectional Study", "explanation": "Incorrect. Snapshot of 10,000 people would yield 1 case. Useless. This would be the correct answer for high-prevalence conditions (Prevalence Survey)."},
      {"text": "Ecological Study", "explanation": "Incorrect. Good for hypothesis generation but weak evidence. This would be the correct answer if you only had aggregate national data."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Case-Control studies are the design of choice for Rare Diseases because starting with cases avoids the need for massive sample sizes required by cohort studies.",
    "pdfPage": 20,
    "slideImageDescription": "The slide 'Strengths of case-control studies' states: 'Efficient for rare diseases'."
  },
  {
    "id": 10,
    "category": "Cohort Design",
    "questionText": "You want to know if exposure to a specific chemical increases the risk of developing leukemia 20 years later. This chemical is rare. Which design is best?",
    "options": [
      {"text": "Case-Control", "explanation": "Incorrect. Good for rare disease, but for rare EXPOSURE, you might not find enough exposed people in a random group of leukemia cases. This would be the correct answer if the exposure was common."},
      {"text": "Retrospective Cohort Study", "explanation": "Correct. Allows targeting the specific group exposed to the rare chemical in the past and following them forward (historically) to present."},
      {"text": "Cross-Sectional", "explanation": "Incorrect. Cannot establish 20-year temporality. This would be the correct answer for current symptoms."},
      {"text": "Ecological", "explanation": "Incorrect. Too broad. This would be the correct answer for city-wide comparison."},
      {"text": "Case Series", "explanation": "Incorrect. Descriptive only. This would be the correct answer for reporting the first 5 cases."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Cohort studies (especially Retrospective) are efficient for Rare Exposures because you can specifically select the exposed group to follow.",
    "pdfPage": 25,
    "slideImageDescription": "The slide 'Strengths of Cohort Studies' states: 'Efficient for rare exposures'."
  },
  {
    "id": 11,
    "category": "Matching",
    "questionText": "In a Case-Control study of lung cancer, researchers match cases and controls by Age and Gender. The primary purpose of this matching is to:",
    "options": [
      {"text": "Increase generalizability", "explanation": "Incorrect. Matching actually decreases generalizability (results apply only to matching criteria). This would be the correct answer if using random sampling."},
      {"text": "Control for Confounding", "explanation": "Correct. Matching ensures that potential confounders (like age/sex) are equally distributed between cases and controls, preventing them from distorting the results."},
      {"text": "Reduce Selection Bias", "explanation": "Incorrect. Matching is a confounding control method. This would be the correct answer if focusing on recruitment methods."},
      {"text": "Eliminate Recall Bias", "explanation": "Incorrect. Matching doesn't fix memory. This would be the correct answer if verifying exposures with records."},
      {"text": "Increase sample size", "explanation": "Incorrect. It doesn't increase n. This would be the correct answer if multicenter recruitment."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Matching is a technique used in the design phase to control for known confounders (like age and sex) by linking cases to similar controls.",
    "pdfPage": 15,
    "slideImageDescription": "The slide 'Matching in Epidemiology' notes it helps efficiency and power, and implies comparability (controlling differences)."
  },
  {
    "id": 12,
    "category": "Blinding",
    "questionText": "In a double-blind RCT, neither the patient nor the doctor knows who is getting the active drug. This primarily minimizes:",
    "options": [
      {"text": "Confounding", "explanation": "Incorrect. Randomization fixes confounding. This would be the correct answer if asking about the purpose of Random Assignment."},
      {"text": "Selection Bias", "explanation": "Incorrect. Randomization fixes selection bias (at entry). This would be the correct answer if asking about Allocation Concealment."},
      {"text": "Observer/Ascertainment Bias", "explanation": "Correct. Blinding prevents the doctor's or patient's expectations from influencing the reporting or measurement of outcomes."},
      {"text": "Recall Bias", "explanation": "Incorrect. This is usually Retrospective. This would be the correct answer if blinding prevented participants from knowing the hypothesis in a case-control survey (hard to do)."},
      {"text": "Lead-time Bias", "explanation": "Incorrect. Screening bias. This would be the correct answer if identifying early disease."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Blinding prevents Information Bias (specifically Observer Bias) where knowledge of the treatment status affects the assessment of the outcome.",
    "pdfPage": 32,
    "slideImageDescription": "The slide 'Use of Placebo and Blinding' states: 'Purpose of blinding: To avoid bias in ascertainment of outcome'."
  },
  {
    "id": 13,
    "category": "Attributable Risk",
    "questionText": "The incidence of lung cancer in smokers is 20/1000. The incidence in non-smokers is 2/1000.  (20 - 2 = 18). This value (18/1000) represents the:",
    "options": [
      {"text": "Relative Risk", "explanation": "Incorrect. RR is 20/2 = 10. This would be the correct answer if asking for the ratio."},
      {"text": "Attributable Risk (Risk Difference)", "explanation": "Correct. The excess risk difference that can be attributed specifically to the exposure (smoking)."},
      {"text": "Odds Ratio", "explanation": "Incorrect. For case-control. This would be the correct answer if comparing odds."},
      {"text": "Prevalence", "explanation": "Incorrect. This is existing cases. This would be the correct answer if counting all smokers with cancer now."},
      {"text": "Population Attributable Risk", "explanation": "Incorrect. PAR accounts for prevalence of smoking in population. This would be the correct answer if asking 'How much cancer in the WHOLE population is due to smoking?'"}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Attributable Risk (Risk Difference) measures the 'excess' risk due to the exposure. It conveys the public health impact: how many cases could be prevented if the exposure were eliminated?",
    "pdfPage": 28,
    "slideImageDescription": "The slide 'Analysis of cohort studies' defines Attributable Risk = Incidence(exp) - Incidence(unexp)."
  },
  {
    "id": 14,
    "category": "Stratification",
    "questionText": "You find a crude association between Coffee and Cancer. You then separate the data into 'Smokers' and 'Non-Smokers'. In both subgroups, the association between Coffee and Cancer disappears. This indicates that Smoking was:",
    "options": [
      {"text": "An Effect Modifier", "explanation": "Incorrect. In effect modification, the association would be STRONG in one group and WEAK in the other (e.g., Coffee causes cancer in Smokers but not Non-Smokers)."},
      {"text": "A Confounder", "explanation": "Correct. Stratification removed the confusion. The crude association was not real; it was due to the third variable (smoking). When you control for it (stratify), the association vanishes."},
      {"text": "An Independent Variable", "explanation": "Incorrect. General term. This would be the correct answer in any regression."},
      {"text": "A Dependent Variable", "explanation": "Incorrect. The dependent variable is Cancer. This would be the correct answer if studying why people smoke."},
      {"text": "A bias", "explanation": "Incorrect. Confounding is a specific distortion, distinct from bias types like Selection/Information."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Stratification is a method to evaluate Confounding vs Effect Modification. If the association disappears in strata, it was Confounding. If it changes significantly between strata, it is Effect Modification.",
    "pdfPage": 38,
    "slideImageDescription": "The slide 'How would you address interaction and/or confounding?' answers: 'Stratification!'."
  },
  {
    "id": 15,
    "category": "RCT Design",
    "questionText": "Which study design provides the strongest evidence for causality and minimizes known and unknown confounders?",
    "options": [
      {"text": "Cohort Study", "explanation": "Incorrect. Observational. Potentially confounded by unknown factors. This would be the correct answer if RCTs were unethical (best observational evidence)."},
      {"text": "Case-Control Study", "explanation": "Incorrect. Retrospective/prone to bias. This would be the correct answer for finding associations in rare disease, not proving causality."},
      {"text": "Cross-Sectional Study", "explanation": "Incorrect. No temporality. This would be the correct answer for prevalence."},
      {"text": "Randomized Controlled Trial (RCT)", "explanation": "Correct. Randomization theoretically balances all factors (known and unknown) between groups, isolating the intervention as the only difference."},
      {"text": "Case Series", "explanation": "Incorrect. Anecdotal. This would be the correct answer for describing a new disease entity."}
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "Randomization is the only method that controls for UNKNOWN confounders, making RCTs the gold standard for establishing causality.",
    "pdfPage": 31,
    "slideImageDescription": "The slide mentions RCT is the 'gold standard in epidemiology studies'."
  },
  {
    "id": 16,
    "category": "Hospital Controls",
    "questionText": "When selecting hospital controls for a study on Smoking and Pancreatic Cancer, you should AVOID choosing patients admitted for:",
    "options": [
      {"text": "Hernia repair", "explanation": "Incorrect. Likely unrelated to smoking. This would be the correct answer if hernias were caused by smoking."},
      {"text": "Trauma", "explanation": "Incorrect. Often used (Berkson's bias risk aside). This would be the correct answer if alcohol was the exposure (trauma is alcohol-related)."},
      {"text": "Emphysema / COPD", "explanation": "Correct. COPD is caused by smoking. Using them as controls would artificially increase the smoking rate in the control group, masking the association with Pancreatic cancer (Bias towards the null)."},
      {"text": "Appendicitis", "explanation": "Incorrect. Likely unrelated. This would be the correct answer if appendicitis was caused by smoking."},
      {"text": "Food poisoning", "explanation": "Incorrect. Unrelated. This would be the correct answer if smoking prevented food poisoning."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Controls must be selected from the source population independent of exposure. Using controls with diseases related to the exposure (e.g., smoking-related diseases) introduces severe Selection Bias.",
    "pdfPage": 13,
    "slideImageDescription": "The slide 'What illnesses make good hospital controls?' explicitly warns: 'Those illnesses that have no relation to the risk factor(s) under study'."
  },
  {
    "id": 17,
    "category": "Relative Risk Interpretation",
    "questionText": "A Relative Risk of 0.75 indicates:",
    "options": [
      {"text": "25% increased risk", "explanation": "Incorrect. This would be RR = 1.25."},
      {"text": "75% increased risk", "explanation": "Incorrect. This would be RR = 1.75."},
      {"text": "25% reduced risk (protective)", "explanation": "Correct. RR < 1 is protective. (1.0 - 0.75 = 0.25 or 25% reduction)."},
      {"text": "75% reduced risk", "explanation": "Incorrect. This would be RR = 0.25."},
      {"text": "No association", "explanation": "Incorrect. This would be RR = 1.0."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "RR < 1 indicates a protective effect. The Reduction is calculated as (1 - RR). So RR 0.75 means a 25% reduction in risk.",
    "pdfPage": 30,
    "slideImageDescription": "The slide 'Interpreting Relative Risk' states 'Relative Risk < 1 Reduced Risk'."
  },
  {
    "id": 18,
    "category": "Cohort vs Case-Control",
    "questionText": "The major advantage of a Cohort study over a Case-Control study is the ability to:",
    "options": [
      {"text": "Study rare diseases", "explanation": "Incorrect. Case-control is better for rare diseases. This would be the correct answer if asking advantage of Case-Control."},
      {"text": "Calculate true Incidence and Relative Risk", "explanation": "Correct. Cohort studies follow separate denominators (exposed vs unexposed) forward, allowing calculation of true rates (Incidence). Case-Controls start with disease, so you can't calculate incidence."},
      {"text": "Save time and money", "explanation": "Incorrect. Cohort is expensive/slow. This would be the correct answer if asking advantage of Case-Control."},
      {"text": "Avoid loss to follow-up", "explanation": "Incorrect. Cohort has MORE loss to follow up. This would be the correct answer if asking advantage of Cross-Sectional."},
      {"text": "Investigate multiple exposures", "explanation": "Incorrect. Case-Control is better for multiple exposures. This would be the correct answer if asking advantage of Case-Control."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Only Cohort studies (and RCTs) allow for the direct calculation of Incidence Rates because they start with a population at risk and observe new events over time.",
    "pdfPage": 23,
    "slideImageDescription": "The slide 'Definition: ... compared with respect to disease incidence' emphasizes that incidence is the measure in Cohort studies."
  },
  {
    "id": 19,
    "category": "Matching Disadvantage",
    "questionText": "One specific disadvantage of 'Matching' in a case-control study is:",
    "options": [
      {"text": "It increases the sample size required.", "explanation": "Incorrect. Usually improves efficiency. This would be the correct answer if matching criteria were so strict you couldn't find controls (Matching friction)."},
      {"text": "You cannot analyze the effect of the matched variable.", "explanation": "Correct. If you match on Age, cases and controls have the same Age. Therefore, you can no longer study whether Age is a risk factor for the disease."},
      {"text": "It creates confounding.", "explanation": "Incorrect. It REMOVES confounding. This would be the correct answer if you matched on a Mediator (overmatching)."},
      {"text": "It increases recall bias.", "explanation": "Incorrect. Unrelated. This would be the correct answer if matching made participants think harder (unlikely)."},
      {"text": "It is unethical.", "explanation": "Incorrect. It is standard practice."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Once you match on a variable (e.g., smoking), you artifically make the groups identical for that variable, so you can no longer study its association with the disease.",
    "pdfPage": 15,
    "slideImageDescription": "The slide 'Matching in Epidemiology' explicitly states: 'Once a variable is used for matching, no relationship can be discerned between this variable and the disease'."
  },
  {
    "id": 20,
    "category": "Absolute Risk Reduction",
    "questionText": "In the control group, 10% had a heart attack. In the drug group, 6% had a heart attack. What is the Absolute Risk Reduction (ARR)?",
    "options": [
      {"text": "4%", "explanation": "Correct. 10% - 6% = 4% (0.04)."},
      {"text": "60%", "explanation": "Incorrect. Relative Risk = 6/10 = 0.6. This would be the correct answer if calculating Risk Ratio."},
      {"text": "40%", "explanation": "Incorrect. Relative Risk Reduction = (10-6)/10 = 40%. This would be the correct answer if calculating RRR."},
      {"text": "1.6", "explanation": "Incorrect. Inverse. This would be the correct answer if calculating Odds Ratio maybe?"},
      {"text": "25", "explanation": "Incorrect. NNT = 1/0.04 = 25. This would be the correct answer if calculating Number Needed to Treat."}
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "ARR is the simple arithmetic difference between the event rates in the two groups (Control Rate - Treatment Rate).",
    "pdfPage": 33,
    "slideImageDescription": "The slide 'Number Needed to Treat' shows calculation: 'subtract incidence with treatment from incidence without treatment'."
  },
  {
    "id": 21,
    "category": "Case-Control Logic",
    "questionText": "Case-control studies are often described as:",
    "options": [
      {"text": "Prospective", "explanation": "Incorrect. Cohort/RCT. This would be the correct answer if looking forward from exposure."},
      {"text": "Retrospective", "explanation": "Correct. They look BACK in time from outcome (Disease) to exposure."},
      {"text": "Experimental", "explanation": "Incorrect. RCT. This would be the correct answer if you intervened."},
      {"text": "Longitudinal", "explanation": "Incorrect. Cohort. This would be the correct answer if tracking over time."},
      {"text": "Prevalence studies", "explanation": "Incorrect. Cross-sectional. This would be the correct answer if snapshot."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Case-Control studies directionality is always Retrospective: We know the outcome ( Disease / No Disease) and look back to assess Exposure.",
    "pdfPage": 21,
    "slideImageDescription": "The slide 'Weaknesses of case-control studies' lists: 'Vulnerable to bias because of retrospective nature'."
  },
  {
    "id": 22,
    "category": "Interpreting Odds Ratio < 1",
    "questionText": "An Odds Ratio of 0.6 for Exercise and Diabetes means:",
    "options": [
      {"text": "Exercise causes diabetes.", "explanation": "Incorrect. Association does not equal causation, and the direction is wrong (0.6 is < 1). This would be the correct answer if OR > 1 and causality was proven."},
      {"text": "Exercise is associated with lower odds of diabetes.", "explanation": "Correct. OR < 1 implies a protective association."},
      {"text": "Exercise has no effect.", "explanation": "Incorrect. OR = 1. This would be the correct answer if OR was 1.0."},
      {"text": "The result is not significant.", "explanation": "Incorrect. Cannot determine without CI. This would be the correct answer if CI crossed 1.0 (e.g., 0.4 - 1.2)."},
      {"text": "Diabetes causes exercise.", "explanation": "Incorrect. Reverse causality possible in cross-sectional, but 'Exercise and Diabetes' usually implies Exercise -> Diabetes. This would be the correct answer if it was a cross-sectional study finding fit diabetics."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Like Relative Risk, an Odds Ratio < 1 implies a protective effect (lower odds of disease in the exposed group).",
    "pdfPage": 20,
    "slideImageDescription": "OR calculation slide implies the comparison. Similar to RR interpretation."
  },
  {
    "id": 23,
    "category": "Cohort Disadvantage",
    "questionText": "A major logistical weakness of Prospective Cohort Studies is:",
    "options": [
      {"text": "Recall bias", "explanation": "Incorrect. Cohort studies minimizes recall bias (exposure measured before disease). This would be the correct answer for Case-Control."},
      {"text": "Inefficient for common diseases", "explanation": "Incorrect. Good for common diseases. This would be the correct answer for Rare Diseases."},
      {"text": "Cost and time duration", "explanation": "Correct. You have to wait years for the disease to develop in real time. Extremely expensive and slow."},
      {"text": "Cannot calculate incidence", "explanation": "Incorrect. They DO calculate incidence. This would be the correct answer for Case-Control."},
      {"text": "Cannot study multiple outcomes", "explanation": "Incorrect. They ARE good for multiple outcomes. This would be the correct answer for Case-Control (usually)."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Prospective Cohort studies are the most expensive and time-consuming observational design because subjects must be followed forward in real-time, often for decades.",
    "pdfPage": 26,
    "slideImageDescription": "The slide 'Weaknesses of Cohort Studies' lists: 'If prospective, expensive and time consuming'."
  },
  {
    "id": 24,
    "category": "Odds Ratio in Case-Control",
    "questionText": "Why can't you calculate Relative Risk (RR) in a Case-Control study?",
    "options": [
      {"text": "The math is too hard.", "explanation": "Incorrect."},
      {"text": "You don't know the total population at risk (denominators).", "explanation": "Correct. In Case-Control, the investigator sets the number of Cases and Controls arbitrarily (e.g., I choose 50 cases and 50 controls). Therefore, the 'incidence' is artificial and RR cannot be calculated. We use OR instead."},
      {"text": "It is prospective.", "explanation": "Incorrect (it's retrospective)."},
      {"text": "There are no controls.", "explanation": "Incorrect (there are controls)."},
      {"text": "Bias is too high.", "explanation": "Incorrect."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "You cannot calculate Incidence or Relative Risk in a Case-Control study because the proportion of diseased individuals is determined by the investigator, not nature. The Odds Ratio is the appropriate measure.",
    "pdfPage": 16,
    "slideImageDescription": "The slide title 'Odds Ratio: Calculated in Case-Control Studies' stands in contrast to 'Relative Risk: Calculated in a Cohort Study'."
  },
  {
    "id": 25,
    "category": "Matching Variables",
    "questionText": "Which variable should you NEVER match on in a case-control study?",
    "options": [
      {"text": "Age", "explanation": "Incorrect. Common matching variable. This would be the correct answer if Age was the Risk Factor of interest."},
      {"text": "Sex", "explanation": "Incorrect. Common matching variable."},
      {"text": "A variable you think is a risk factor", "explanation": "Correct. If you match on a risk factor, you can no longer study it. If you suspect it causes the disease, matching will hide that association."},
      {"text": "Zip code", "explanation": "Incorrect. Sometimes matched (SES)."},
      {"text": "Hospital of admission", "explanation": "Incorrect. Often matched."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Matching on a potential risk factor makes the cases and controls identical for that factor, preventing you from discovering if it actually IS a risk factor.",
    "pdfPage": 15,
    "slideImageDescription": "The slide 'Matching in Epidemiology' warns: 'Don’t match on anything you think might be a risk factor!'."
  },
  {
    "id": 26,
    "category": "Recall Bias Mechanism",
    "questionText": "Mothers of children with birth defects are more likely to remember every medication they took during pregnancy compared to mothers of healthy children. This creates:",
    "options": [
      {"text": "Selection Bias", "explanation": "Incorrect. This is about participation. This would be the correct answer if mothers of defects were more likely to join the study."},
      {"text": "Recall Bias", "explanation": "Correct. Differential accuracy of recall between cases (mothers of affected kids) and controls. It biases the estimate away from the null (makes risks look bigger)."},
      {"text": "Confounding", "explanation": "Incorrect. This is distortion by a third variable. This would be the correct answer if older mothers had more defects and took more drugs (Age Confounding)."},
      {"text": "Lead-time Bias", "explanation": "Incorrect. Screening bias."},
      {"text": "Observer Bias", "explanation": "Incorrect. This is the interviewer's bias. This would be the correct answer if the researcher probed the sick mothers harder than the healthy ones."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Recall bias is differential: Cases have 'better' or over-active memory/rumination searching for a cause, while controls do not.",
    "pdfPage": 42,
    "slideImageDescription": "The slide 'Recall bias' explains cases 'may remember exposures differently than cases'."
  },
  {
    "id": 27,
    "category": "Confidence Intervals",
    "questionText": "If a study reports a Relative Risk of 2.5 with a p-value of 0.001, the 95% Confidence Interval will:",
    "options": [
      {"text": "Include 0", "explanation": "Incorrect. CI for Ratios (RR/OR) never includes 0. This would be the correct answer for Risk Difference (null=0)."},
      {"text": "Include 1.0", "explanation": "Incorrect. If p < 0.05, the result is significant, so the CI will NOT include the null value (1.0). This would be the correct answer if p = 0.06."},
      {"text": "NOT include 1.0", "explanation": "Correct. Since the result is statistically significant, the range of likely values excludes the null (1.0)."},
      {"text": "Be very wide", "explanation": "Incorrect. p=0.001 implies high precision (or huge effect). This would be the correct answer if Sample Size was small."},
      {"text": "Be negative", "explanation": "Incorrect. Ratios strictly positive."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "There is a direct mathematical relationship between p-values and CIs. If p < 0.05, the 95% CI does NOT cross the null value (1.0 for ratios, 0 for differences).",
    "pdfPage": 19,
    "slideImageDescription": "The slide 'Statistical Significance' notes: 'IF your CI includes 1, then you automatically will NOT have statistically significant results'."
  },
  {
    "id": 28,
    "category": "Bias vs Confounding",
    "questionText": "Unlike Bias, Confounding is:",
    "options": [
      {"text": "An error in study design", "explanation": "Incorrect. Bias is the error/flaw. This would be the correct answer for Bias."},
      {"text": "A property of nature (true relationship)", "explanation": "Correct. Confounding represents real relationships between variables (e.g., Age is related to Cancer and Arthritis). It is not an error, but a nuisance that must be adjusted for to see the 'independent' effect."},
      {"text": "Created by the investigator", "explanation": "Incorrect. Bias is created by the investigator (or method). Confounding exists regardless of the study."},
      {"text": "Fixable during analysis", "explanation": "Incorrect. Both can be addressed in analysis (if measured), but this is not the distinction. This would be the correct answer for Confounding (Stratification) vs Selection Bias (hard to fix)."},
      {"text": "Systematic Error", "explanation": "Incorrect. Bias is systematic error."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Bias is a human/systematic error in the study. Confounding is a real phenomenon in the world (interconnectedness of variables) that we must separate out.",
    "pdfPage": 39,
    "slideImageDescription": "The slide 'Bias' defines it as systematic error. Confounding sections imply it is a mix of effects."
  },
  {
    "id": 29,
    "category": "Bias Definition",
    "questionText": "Bias is defined as:",
    "options": [
      {"text": "Random error", "explanation": "Incorrect. This is Chance/Precision. This would be the correct answer for 'Noise'."},
      {"text": "Systematic error", "explanation": "Correct. Systematic deviation of results form the truth."},
      {"text": "Statistical insignificance", "explanation": "Incorrect."},
      {"text": "Effect modification", "explanation": "Incorrect. Real interaction. This would be the correct answer for 'Interaction'."},
      {"text": "A necessary part of research", "explanation": "Incorrect. Goal is to minimize it."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Bias is systematic error in the design or conduct of a study that leads to an incorrect estimate of association.",
    "pdfPage": 39,
    "slideImageDescription": "The slide 'Bias' defines it as 'systematic error that results in an incorrect (invalid) estimate'."
  },
  {
    "id": 30,
    "category": "2x2 Table Odds",
    "questionText": "In a 2x2 table, the odds of exposure among the CASES is represented by:",
    "options": [
      {"text": "A / A+B", "explanation": "Incorrect. Probability of Exposure. This would be the correct answer for Risk."},
      {"text": "A / C", "explanation": "Correct. Odds of exposure in cases (Diseased group)."},
      {"text": "B / D", "explanation": "Incorrect. Odds of exposure in Controls."},
      {"text": "A / B", "explanation": "Incorrect. Odds of Disease in Exposed."},
      {"text": "C / D", "explanation": "Incorrect. Odds of Disease in Unexposed."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "The Odds of exposure is the number exposed divided by number unexposed. For cases (first column), this is A/C.",
    "pdfPage": 17,
    "slideImageDescription": "The slide 'Analysis of case-control studies' shows the formula derivation where Disease is on Top (Columns) and Exposure is on the Side (Rows). Odds of exposure in cases = A/C."
  },
  {
    "id": 31,
    "category": "Cross Product Ratio",
    "questionText": "The Odds Ratio is also known as the 'Cross-Product Ratio' because it can be calculated as:",
    "options": [
      {"text": "(A + B) / (C + D)", "explanation": "Incorrect. Ratio of totals."},
      {"text": "AD / BC", "explanation": "Correct. Odds Ratio = (A/C) / (B/D) = (A*D) / (B*C). This is the cross-product of the 2x2 table cells."},
      {"text": "AC / BD", "explanation": "Incorrect."},
      {"text": "AB / CD", "explanation": "Incorrect."},
      {"text": "A / Total", "explanation": "Incorrect."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "The Odds Ratio (AD/BC) is a versatile measure of association used in case-control studies.",
    "pdfPage": 17,
    "slideImageDescription": "The slide 'Analysis of case-control studies' clearly shows 'Odds Ratio=[A x D]/[B x C]'."
  },
  {
    "id": 32,
    "category": "Ecological Fallacy",
    "questionText": "A study finds that countries with higher chocolate consumption have more Nobel prizes. Concluding that 'eating chocolate makes you win a Nobel prize' is an error known as:",
    "options": [
      {"text": "Selection Bias", "explanation": "Incorrect. This would be the correct answer if Nobel winners were selected for the study because they eat chocolate."},
      {"text": "Ecological Fallacy", "explanation": "Correct. Making inferences about individuals based on aggregate group (country-level) data. The people eating chocolate might not be the researchers winning prizes; it just reflects rich countries."},
      {"text": "Recall Bias", "explanation": "Incorrect. This would be the correct answer if winners remembered chocolate eating better."},
      {"text": "Lead-time Bias", "explanation": "Incorrect."},
      {"text": "Hawthorne Effect", "explanation": "Incorrect. Behavioral change due to observation. This would be the correct answer if researchers ate chocolate because they knew they were being watched."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "The Ecological Fallacy is the error of assuming that associations found at the group/population level apply to individuals.",
    "pdfPage": 6,
    "slideImageDescription": "Implied by 'Cross-Sectional' limitation discussion and general bias topics (or standard knowledge if not explicit, but Ecologic studies usually covered in design intro)."
  },
  {
    "id": 33,
    "category": "Loss to Follow-up",
    "questionText": "The most significant threat to the validity of a long-term Prospective Cohort Study is:",
    "options": [
      {"text": "Recall bias", "explanation": "Incorrect. This is Case-Control."},
      {"text": "Selection bias at enrollment", "explanation": "Incorrect. Less issue than attrition. This would be the correct answer if the starting group was unrepresentative (external validity issue usually)."},
      {"text": "Loss to Follow-up (Attrition Bias)", "explanation": "Correct. If people drop out of the study over the years (move, die, lose interest) and the drop-out is related to the outcome/exposure, the results become biased."},
      {"text": "Ecological fallacy", "explanation": "Incorrect."},
      {"text": "Length bias", "explanation": "Incorrect."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "In prospective studies, 'Loss to Follow-up' is a critical bias. If >20% of the cohort is lost, validity is severely compromised.",
    "pdfPage": 26,
    "slideImageDescription": "The slide 'Weaknesses of Cohort Studies' mentions 'time consuming', implying the risk of losing people over time."
  },
  {
    "id": 34,
    "category": "Exclusion Criteria",
    "questionText": "In designing a Case-Control study for a new drug, you exclude anyone who has previously taken the drug. This is an example of:",
    "options": [
      {"text": "Matching", "explanation": "Incorrect. Matching pairs people. This would be the correct answer if you found a control who also took the drug for every case."},
      {"text": "Restriction (Inclusion/Exclusion Criteria)", "explanation": "Correct. A method to control for confounding at the design stage by simply forbidding entry to those with the confounder."},
      {"text": "Randomization", "explanation": "Incorrect. This would be the correct answer if you assigned them to take the drug."},
      {"text": "Stratification", "explanation": "Incorrect. Analysis phase. This would be the correct answer if you analyzed prior-users separately."},
      {"text": "Adjustment", "explanation": "Incorrect. Analysis phase."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Restriction is a simple way to control confounding (by eliminating variation in the confounder), but it limits the generalizability (external validity) of the study.",
    "pdfPage": 8,
    "slideImageDescription": "The slide 'Designing a case-control study' mentions 'First you would recruit people who meet your inclusion criteria'."
  },
  {
    "id": 35,
    "category": "Retrospective Cohort vs Case Control",
    "questionText": "The key difference between a Retrospective Cohort Study and a Case-Control Study is:",
    "options": [
      {"text": "Timing (Past vs Future)", "explanation": "Incorrect. Both are retrospective (looking back). This would be the correct answer for Prospective Cohort vs Case Control."},
      {"text": "Sampling (Exposure vs Disease)", "explanation": "Correct. Case-Control samples by Outcome (Cases vs Controls). Retrospective Cohort samples by Exposure (Exposed records vs Unexposed records) and looks for outcome."},
      {"text": "Cost", "explanation": "Incorrect. Both relatively cheap (records)."},
      {"text": "Blinding", "explanation": "Incorrect."},
      {"text": "Bias risk", "explanation": "Incorrect."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "The defining feature is SAMPLING. If you recruit based on Disease status -> Case-Control. If you recruit based on Exposure status -> Cohort (even if you look back in records).",
    "pdfPage": 23,
    "slideImageDescription": "The slide 'COHORT STUDIES' definition: 'groups... that differ according to the extent of exposure... are compared'. Contrast with Case-Control definition (groups with disease)."
  },
  {
    "id": 36,
    "category": "Multiple Outcomes",
    "questionText": "A single study follows examining the effects of Atomic Bomb radiation on Leukemia, Thyroid Cancer, and Solid Tumors. This ability to study one exposure and multiple outcomes is a strength of:",
    "options": [
      {"text": "Case-Control Study", "explanation": "Incorrect. Starts with ONE disease."},
      {"text": "Cohort Study", "explanation": "Correct. Since you start with the Exposure, you can measure as many different outcomes as you want that develop over time."},
      {"text": "Clinical Trial", "explanation": "Incorrect. Usually focused on one efficacy endpoint."},
      {"text": "Cross-Sectional", "explanation": "Incorrect."},
      {"text": "Case Series", "explanation": "Incorrect."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Cohort studies are ideal for exposures that have multiple potential health effects (e.g., Smoking -> Lung Cancer, COPD, Heart Disease).",
    "pdfPage": 25,
    "slideImageDescription": "The slide 'Strengths of Cohort Studies' states: 'Can evaluate multiple effects of an exposure'."
  },
  {
    "id": 37,
    "category": "Multiple Exposures",
    "questionText": "Which study design is best for evaluating multiple different risk factors for a single rare disease?",
    "options": [
      {"text": "Cohort Study", "explanation": "Incorrect. Inefficient for rare disease. This would be the correct answer for Rare Exposure."},
      {"text": "Case-Control Study", "explanation": "Correct. You have the cases (disease). You can survey them about 100 different past exposures to look for associations."},
      {"text": "RCT", "explanation": "Incorrect."},
      {"text": "Ecological", "explanation": "Incorrect."},
      {"text": "Cross-Over", "explanation": "Incorrect."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Case-Control studies are 'Fishing Expeditions': Efficient for calculating associations between one disease and MANY exposures.",
    "pdfPage": 20,
    "slideImageDescription": "The slide 'Strengths of case-control studies' states: 'Can evaluate many risk factors for the same disease'."
  },
  {
    "id": 38,
    "category": "Temporality",
    "questionText": "The only Bradford Hill criteria for causality that is absolutely required (non-negotiable) is:",
    "options": [
      {"text": "Specificity", "explanation": "Incorrect. One cause can have multiple effects (Smoking). This would be the correct answer if specificity was required (it's not)."},
      {"text": "Temporality", "explanation": "Correct. The exposure MUST precede the disease. If the disease came first, the exposure cannot be the cause."},
      {"text": "Biological Plausibility", "explanation": "Incorrect. Helpful but we accepted Cholera cause before knowing bacteria exist. This would be the correct answer if we demanded mechanism."},
      {"text": "Strength of Association", "explanation": "Incorrect. Weak associations can be causal. This would be the correct answer if we ignored small risks."},
      {"text": "Dose-Response", "explanation": "Incorrect. Not always linear. This would be the correct answer if we required a gradient."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Temporality (Cause precedes Effect) is the sine qua non of causality. Without it, causality is impossible.",
    "pdfPage": 5,
    "slideImageDescription": "Implied in Cross-Sectional limits ('no element of time')."
  },
  {
    "id": 39,
    "category": "Interpreting RR=1",
    "questionText": "A study on 'Jellybeans and Acne' finds a Relative Risk of 1.0. This means:",
    "options": [
      {"text": "Jellybeans cause Acne.", "explanation": "Incorrect. RR=1 means no effect."},
      {"text": "Jellybeans cure Acne.", "explanation": "Incorrect."},
      {"text": "There is no association (Null hypothesis is not rejected).", "explanation": "Correct. RR=1.0 means Incidence in Exposed = Incidence in Unexposed. No effect."},
      {"text": "The study was flawed.", "explanation": "Incorrect. Finding no effect is a valid result."},
      {"text": "Acne causes Sugar cravings.", "explanation": "Incorrect. Reverse causality."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "The null value for a Ratio (RR, OR) is 1.0 (indicating numerator = denominator). The null value for a Difference (ARR) is 0.",
    "pdfPage": 30,
    "slideImageDescription": "The slide 'Interpreting Relative Risk' states 'Relative Risk = 1.0  No Risk'."
  },
  {
    "id": 40,
    "category": "CI Width",
    "questionText": "Study A has 100 people. Study B has 10,000 people. Both find an RR of 2.0. Which statement about their Confidence Intervals (CI) is true?",
    "options": [
      {"text": "Study A will have a narrower CI.", "explanation": "Incorrect. Small sample = Wide CI. This would be the correct answer if Study A had 1 million people."},
      {"text": "Study B will have a narrower CI.", "explanation": "Correct. Larger sample size = more precision = narrower confidence interval."},
      {"text": "They will be the same.", "explanation": "Incorrect. Sample size drives width."},
      {"text": "Study B is more biased.", "explanation": "Incorrect. Precision != Validity. This would be the correct answer if Study B had systematic error."},
      {"text": "Study A is more valid.", "explanation": "Incorrect."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Confidence Interval width is a function of sample size (and variance). Larger studies produce precise estimates with narrow CIs.",
    "pdfPage": 2,
    "slideImageDescription": "Implicit in statistical significance discussion."
  },
  {
    "id": 41,
    "category": "Incidence Rate Ratio",
    "questionText": "Relative Risk is also known as:",
    "options": [
      {"text": "Incidence Rate Ratio", "explanation": "Correct. Since RR compares two incidence rates, it is an incidence rate ratio."},
      {"text": "Prevalence Ratio", "explanation": "Incorrect. Cross-sectional. This would be the correct answer for Prevalence Ratio."},
      {"text": "Odds Ratio", "explanation": "Incorrect. Case-control."},
      {"text": "Risk Difference", "explanation": "Incorrect. Subtraction."},
      {"text": "Hazard Ratio", "explanation": "Incorrect. Survival analysis."}
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Relative Risk is fundamentally a ratio of Incidences (I_exp / I_unexp).",
    "pdfPage": 28,
    "slideImageDescription": "The slide 'Relative Risk' defines it as Incidence rate / Incidence rate."
  }
];

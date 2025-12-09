window.L134 = [
  {
    "id": 1,
    "category": "Measures of Disease Frequency",
    "questionText": "A public health official is tracking a new outbreak of a respiratory virus in a town of 10,000 people. On January 1st, 200 people are already infected. Over the course of the year, 400 new cases are diagnosed. Residents are at risk for the entire year unless they are already infected. What is the incidence rate for this population?",
    "options": [
      {"text": "400 / 10,000", "explanation": "Incorrect. This uses the total population as the denominator. This would be the correct answer if no one was infected at the start of the year (Risk = New Cases / Total Population at Risk)."},
      {"text": "400 / 9,800", "explanation": "Correct. Incidence Rate = New Cases / Population at Risk. Population at risk = Total Population (10,000) - Existing Cases (200) = 9,800."},
      {"text": "600 / 10,000", "explanation": "Incorrect. This calculates period prevalence (total cases / total population). This would be the correct answer if the question asked for the Period Prevalence of the disease over the year."},
      {"text": "200 / 9,600", "explanation": "Incorrect. This denominator subtracts new cases from the population at risk, which is not a standard measure. This would be the 'correct' calculation only if asking for the prevalence odds at the start of the year excluding those who would later become infected (unusual)."},
      {"text": "400 / 200", "explanation": "Incorrect. This is a ratio of new cases to existing cases. This would be the correct answer if the question asked for the ratio of incident cases to prevalent cases at baseline."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Incidence rate specifically measures NEW cases developing in a population AT RISK; individuals who already have the disease must be subtracted from the denominator.",
    "pdfPage": 8,
    "slideImageDescription": "The slide defining 'Incidence Rate Calculations' shows the formula: Number of new cases / Total population at risk. It highlights that the denominator must exclude those who already have the disease."
  },
  {
    "id": 2,
    "category": "Prevalence vs. Incidence",
    "questionText": "A new treatment for a chronic fatal disease is introduced. This treatment prevents death but does not cure the disease. What is the expected long-term effect on the prevalence and incidence of this disease?",
    "options": [
      {"text": "Prevalence decreases, Incidence stays the same", "explanation": "Incorrect. Preventing death increases duration, which increases prevalence. This would be the correct answer if the treatment was a CURE (reducing duration)."},
      {"text": "Prevalence increases, Incidence stays the same", "explanation": "Correct. Prevalence increases because the duration of the disease increases (Prevalence = Incidence x Duration), while the rate of new cases (Incidence) is unaffected."},
      {"text": "Prevalence increases, Incidence increases", "explanation": "Incorrect. The treatment does not affect new cases. This would be the correct answer if the treatment also made people more susceptible to contracting the disease again or if there was better reporting/detection (Surveillance Bias)."},
      {"text": "Prevalence stays the same, Incidence decreases", "explanation": "Incorrect. Prevalence changes due to survival. This would be the correct answer if the treatment was a Primary Prevention vaccine (reducing incidence)."},
      {"text": "Prevalence decreases, Incidence decreases", "explanation": "Incorrect. This would be the correct answer if the intervention prevented the disease entirely (Primary Prevention) and cured existing cases."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Prevalence is a function of Incidence and Duration (P = I x D). Interventions that prolong survival without curing the disease increase prevalence by increasing the duration component.",
    "pdfPage": 26,
    "slideImageDescription": "The slide titled 'What can lower prevalence?' (or concepts related to P=IxD) illustrates that death or cure lowers prevalence. Conversely, surviving longer increases the 'basin' of existing cases."
  },
  {
    "id": 3,
    "category": "Hypothesis Testing",
    "questionText": "A researcher conducts a study comparing the efficacy of Drug A vs. Drug B. The resulting p-value is 0.03. Which of the following is the most accurate interpretation of this finding assuming a standard alpha of 0.05?",
    "options": [
      {"text": "There is a 3% chance that Drug A is better than Drug B.", "explanation": "Incorrect. The p-value refers to the data, not the hypothesis. This would be the correct answer if we were using Bayesian statistics to determine the Posterior Probability of the hypothesis."},
      {"text": "There is a 97% probability that the null hypothesis is true.", "explanation": "Incorrect. p-value is not Prob(Null). This would be the correct answer if the p-value was 0.97 (roughly speaking, as 'non-significant', though strictly p-value != probability of null)."},
      {"text": "There is a 3% probability of observing these results (or more extreme) if the null hypothesis were true.", "explanation": "Correct. This is the correct definition of a p-value. Since 0.03 < 0.05, we reject the null hypothesis."},
      {"text": "The results are not statistically significant.", "explanation": "Incorrect. 0.03 < 0.05. This would be the correct answer if the alpha level was set to 0.01 (1%)."},
      {"text": "There is a 3% chance the results are due to bias.", "explanation": "Incorrect. p-values quantify random error (chance), not systematic error. This would be the correct answer if the p-value measured the 'Bias Probability' (which doesn't exist standardly)."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "A p-value measures the probability of obtaining the observed results by chance alone, assuming the null hypothesis is true. It does not measure clinical significance or the probability of the hypothesis itself.",
    "pdfPage": 45,
    "slideImageDescription": "Although not explicitly in the snippet, this concept is foundational. Referencing a generic stats slide or one discussing 'interpretations'."
  },
  {
    "id": 4,
    "category": "Screening Tests",
    "questionText": "A 55-year-old male undergoes a screening test for prostate cancer. The test returns positive. He asks, 'Doctor, what are the chances I actually have the disease?' Which statistical measure corresponds to his question?",
    "options": [
      {"text": "Sensitivity", "explanation": "Incorrect. Sensitivity is Prob(Test+|Disease+). This would be the correct answer if he asked 'If I had cancer, what are the odds this test would find it?'"},
      {"text": "Specificity", "explanation": "Incorrect. Specificity is Prob(Test-|Disease-). This would be the correct answer if he asked 'If I was healthy, what are the odds this test would be negative?'"},
      {"text": "Positive Predictive Value (PPV)", "explanation": "Correct. PPV answers 'Given a positive test, what is the probability of disease?'. This depends on prevalence."},
      {"text": "Negative Predictive Value (NPV)", "explanation": "Incorrect. NPV is Prob(No Disease|Test-). This would be the correct answer if his test result was NEGATIVE and he asked 'Does this mean I'm definitely cancer-free?'"},
      {"text": "Case Fatality Rate", "explanation": "Incorrect. This measures death risk. This would be the correct answer if he asked 'If I have the disease, what are my chances of dying from it?'"}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Patients care most about Predictive Values (PPV/NPV) because they address the probability of disease given a specific test result, whereas Sensitivity/Specificity are properties of the test itself.",
    "pdfPage": 60,
    "slideImageDescription": "The slide 'Back to our case...' explicitly mentions that when a patient asks 'if I test positive, what is the probability I have the disease?', you can tell them about Positive Predictive Value."
  },
  {
    "id": 5,
    "category": "Screening Biases",
    "questionText": "A screening program for breast cancer appears to increase survival time among screened women compared to unscreened women. However, further analysis shows that the screening simply identifies slow-growing, less aggressive tumors more often than aggressive ones. What type of bias is this?",
    "options": [
      {"text": "Lead-time Bias", "explanation": "Incorrect. Lead-time bias is about earlier detection 'adding' time. This would be the correct answer if the survival increase was due to starting the clock earlier, not due to tumor type selection."},
      {"text": "Length Bias", "explanation": "Correct. Screening selectively detects cases with a longer preclinical phase (slower progression), making survival look better."},
      {"text": "Selection Bias", "explanation": "Incorrect. Selection bias usually refers to how participants are chosen. This would be the correct answer if healthy volunteers were compared to sick hospital patients (Berkson's bias) or if the screened group was healthier at baseline (Healthy Worker Effect)."},
      {"text": "Recall Bias", "explanation": "Incorrect. This involves memory inaccuracies. This would be the correct answer in a case-control study if diseased patients remembered exposures better than controls."},
      {"text": "Confounding", "explanation": "Incorrect. While a confounder, this is a specific type of screening bias. This would be the correct answer if 'Smoking' was the reason for the difference, not the screening itself."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Length bias occurs because screening tests are more likely to detect slowly progressing diseases (longer preclinical phase) than rapidly progressive ones, falsely improving apparent survival rates.",
    "pdfPage": 63,
    "slideImageDescription": "The slide titled 'Length Bias' explains that screening can selectively identify cases with a better prognosis (longer length), whereas severe cases might die before screening."
  },
  {
    "id": 6,
    "category": "Case Fatality Rate",
    "questionText": "In an outbreak of a viral hemorrhagic fever, 500 people are infected. Of these, 200 recover fully, 100 develop chronic complications, and 200 die within a month. What is the Case Fatality Rate (CFR)?",
    "options": [
      {"text": "20%", "explanation": "Incorrect. This would be the correct answer if there were 100 deaths out of 500 cases (100/500 = 20%)."},
      {"text": "40%", "explanation": "Correct. CFR = Deaths from disease / Total diagnosed cases. 200 deaths / 500 cases = 0.40 or 40%."},
      {"text": "50%", "explanation": "Incorrect. This would be the correct answer if 250 people died."},
      {"text": "60%", "explanation": "Incorrect. This would be the correct answer if 300 people died."},
      {"text": "100%", "explanation": "Incorrect. This would be the correct answer if everyone infected died (e.g., Rabies without prophylaxis)."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Case Fatality Rate measures the severity of a disease by calculating the proportion of diagnosed cases that result in death.",
    "pdfPage": 21,
    "slideImageDescription": "The slide 'Case-Fatality Rate' defines it as the number of people who die of a disease divided by the number of people who have the disease."
  },
  {
    "id": 7,
    "category": "Study Designs",
    "questionText": "A pharmaceutical company wants to test a new vaccine. They recruit 1,000 participants and randomly assign them to receive either the vaccine or a placebo. They follow both groups for 2 years to see who develops the disease. What study design is this?",
    "options": [
      {"text": "Case-Control Study", "explanation": "Incorrect. Case-control starts with the outcome. This would be the correct answer if they took people WITH the disease and looked back to see if they were vaccinated."},
      {"text": "Retrospective Cohort", "explanation": "Incorrect. This looks back at existing records. This would be the correct answer if they looked at medical records from 1990-1992 to see who got a vaccine and who got sick."},
      {"text": "Randomized Clinical Trial (RCT)", "explanation": "Correct. Random assignment to intervention (exposure) and prospective follow-up makes this an RCT, the gold standard for efficacy."},
      {"text": "Cross-Sectional Study", "explanation": "Incorrect. This is a snapshot. This would be the correct answer if they surveyed 1,000 people today to ask 'Are you vaccinated?' and 'Do you have the disease?' simultaneously."},
      {"text": "Ecological Study", "explanation": "Incorrect. This uses population-level data. This would be the correct answer if they compared vaccination rates in Country A vs Country B and their disease rates."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Randomized Clinical Trials (RCTs) are experimental designs where the investigator assigns the exposure, minimizing confounding and allowing for causal inference.",
    "pdfPage": 39,
    "slideImageDescription": "While the transcript focuses on screening, RCTs are often discussed in the context of testing interventions like vaccines (Primary Prevention slide)."
  },
  {
    "id": 8,
    "category": "Sensitivity Calculation",
    "questionText": "A new rapid strep test is evaluated. In a sample of 200 patients, 100 actually have strep (Gold Standard +). The new test detects 80 of them. What is the Sensitivity of this test?",
    "options": [
      {"text": "20%", "explanation": "Incorrect. This is the False Negative Rate (20 missed / 100 sick). This would be the correct answer if asking for the proportion of missed cases (1 - Sensitivity)."},
      {"text": "40%", "explanation": "Incorrect. This measures general detection relative to total sample. This would be the correct answer if 40 patients out of 100 were detected."},
      {"text": "80%", "explanation": "Correct. Sensitivity = TP / (TP + FN) = 80 / 100 = 80%. It measures the ability to detect the disease when it is present."},
      {"text": "90%", "explanation": "Incorrect. This would be the correct answer if the test detected 90 of the 100 sick patients."},
      {"text": "100%", "explanation": "Incorrect. This would be the correct answer if the test detected ALL 100 sick patients."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Sensitivity is the True Positive Rate: the proportion of actual disease cases that are correctly identified by the test.",
    "pdfPage": 51,
    "slideImageDescription": "The slide titled 'Sensitivity' shows the formula TP/(TP+FN) or (a/a+c) and defines it as the ability to identify correctly all screened individuals who have the disease."
  },
  {
    "id": 9,
    "category": "Specificity Calculation",
    "questionText": "Using the same study of 200 patients: 100 patients do NOT have strep. The test correctly identifies 90 of them as negative. What is the Specificity?",
    "options": [
      {"text": "10%", "explanation": "Incorrect. This is the False Positive Rate (10 false positives / 100 healthy). This would be the correct answer if asking for the False Positive Rate (1 - Specificity)."},
      {"text": "80%", "explanation": "Incorrect. This tracks with the previous question's sensitivity. This would be the correct answer if the test correctly identified 80 of the 100 healthy patients."},
      {"text": "90%", "explanation": "Correct. Specificity = TN / (TN + FP) = 90 / 100 = 90%. It measures the ability to correctly identify those WITHOUT the disease."},
      {"text": "95%", "explanation": "Incorrect. This would be the correct answer if 95 healthy patients were identified as negative."},
      {"text": "50%", "explanation": "Incorrect. This would be the correct answer if the test was random (coin flip) for healthy patients."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Specificity is the True Negative Rate: the proportion of disease-free individuals who are correctly identified as negative by the test.",
    "pdfPage": 51,
    "slideImageDescription": "The slide titled 'Measures of the Validity of Screening Tests' defines Specificity as the ability of the test to identify only non-diseased individuals."
  },
  {
    "id": 10,
    "category": "Validity vs Reliability",
    "questionText": "A blood pressure cuff consistently reads 10 mmHg higher than the actual arterial pressure every time it is used. This instrument is:",
    "options": [
      {"text": "Valid but not Reliable", "explanation": "Incorrect. It is NOT valid because the reading is incorrect (+10 error). This would be the correct answer if the readings scattered widely but averaged out to the correct value (Low Precision, High Accuracy)."},
      {"text": "Reliable but not Valid", "explanation": "Correct. Reliability refers to consistency/repeatability. Validity refers to accuracy. This cuff is consistent (reliable) because it always gives the same +10 error, but inaccurate (not valid)."},
      {"text": "Both Valid and Reliable", "explanation": "Incorrect. It is reliable but not valid. This would be the correct answer if the cuff gave the ACCURATE blood pressure every time."},
      {"text": "Neither Valid nor Reliable", "explanation": "Incorrect. It IS reliable (consistent). This would be the correct answer if the readings were all over the place AND the average was wrong."},
      {"text": "Sensitive but not Specific", "explanation": "Incorrect. These terms apply to binary screening tests, not continuous measurement instruments like BP cuffs."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Reliability is consistency (precision), while Validity is accuracy (truth). A test can be highly reliable (consistent results) but completely invalid (wrong everytime).",
    "pdfPage": 54,
    "slideImageDescription": "The slide 'A screening test that is reliable is not necessarily also valid' highlights the distinction between consistency (reliability) and accuracy (validity)."
  },
  {
    "id": 11,
    "category": "Levels of Prevention",
    "questionText": "A 60-year-old male with a history of myocardial infarction is placed on daily aspirin and a beta-blocker to prevent a second heart attack. What level of prevention does this represent?",
    "options": [
      {"text": "Primary Prevention", "explanation": "Incorrect. Primary prevention prevents the INITIAL event. This would be the correct answer if he had NO history of MI and took aspirin to prevent the first one."},
      {"text": "Secondary Prevention", "explanation": "Incorrect. Secondary prevention detects asymptomatic disease (Screening). This would be the correct answer if he was getting a calcium score or stress test to finding hidden blockage."},
      {"text": "Tertiary Prevention", "explanation": "Correct. Managing an existing disease (post-MI) to prevent complications (2nd MI) or recurrence is Tertiary prevention."},
      {"text": "Quaternary Prevention", "explanation": "Incorrect. This prevents overmedicalization. This would be the correct answer if the doctor decided NOT to prescribe a drug with severe side effects because the risk outweighed the benefit."},
      {"text": "Primordial Prevention", "explanation": "Incorrect. This prevents risk factors. This would be the correct answer if we banned trans-fats in the city to prevent high cholesterol in the population."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Tertiary prevention focuses on reducing the impact of an established disease by preventing complications and restoring function (e.g., rehab, secondary prophylaxis).",
    "pdfPage": 39,
    "slideImageDescription": "The slide 'Disease Prevention' defines Tertiary Prevention as reducing the impact of a disease."
  },
  {
    "id": 12,
    "category": "Incidence Density",
    "questionText": "A study follows 100 nurses for needle-stick injuries. 50 nurses are followed for 2 years, and 50 are followed for 1 year. During this time, 5 injuries occur. What is the incidence density (rate per person-years)?",
    "options": [
      {"text": "5 / 100 person-years", "explanation": "Incorrect. Denominator is 150. This would be the correct answer if all 100 nurses were followed for 1 year."},
      {"text": "5 / 150 person-years", "explanation": "Correct. Person-years = (50 nurses * 2 years) + (50 nurses * 1 year) = 100 + 50 = 150. Rate = 5/150."},
      {"text": "5 / 50 person-years", "explanation": "Incorrect. Denominator is 150. This would be the correct answer if only the first group (50 nurses x 1 yr) was studied."},
      {"text": "10 / 100 person-years", "explanation": "Incorrect. This implies 10 injuries or 100 person-years. This would be the correct answer if 10 injuries occurred over 100 person-years."},
      {"text": "0.05", "explanation": "Incorrect. This is Cumulative Incidence (5/100 nurses). This would be the correct answer if asking for the RISK over the study period, ignoring time contribution differences."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Person-time (Incidence Density) allows for the calculation of rates when participants are followed for unequal periods of time, providing a more precise measure of risk.",
    "pdfPage": 14,
    "slideImageDescription": "The slide 'Person years' illustrates calculating the denominator by summing the time each individual contributed to the study."
  },
  {
    "id": 13,
    "category": "Epidemiologic Triad",
    "questionText": "In the context of the 'Biology of the Disease' for vaccine development, which factor specifically relates to the 'Agent' in the epidemiologic triad?",
    "options": [
      {"text": "Herd Immunity threshold", "explanation": "Incorrect. This relates to the Population (Host). This would be the correct answer if asking about community resistance."},
      {"text": "Mutation rate of the virus", "explanation": "Correct. Characteristics of the pathogen (Agent), such as DNA vs RNA or mutation potential, are critical for vaccine targets."},
      {"text": "Population density", "explanation": "Incorrect. This is an Environmental factor (or Host population characteristic). This would be the correct answer if asking about Environmental determinants of spread."},
      {"text": "Access to healthcare", "explanation": "Incorrect. This is an Environmental/System factor. This would be the correct answer if asking about social determinants of health."},
      {"text": "Genetic susceptibility of the population", "explanation": "Incorrect. This relates to the Host. This would be the correct answer if asking about Host Factors."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Understanding the Agent (pathogen) biology, such as its mutation rate (RNA vs DNA viruses) and antigenicity, is crucial for primary prevention strategies like vaccine development.",
    "pdfPage": 43,
    "slideImageDescription": "The slide 'The Biology of the Disease' lists questions like 'Is it RNA/DNA based?' and 'Does it have a high mutation rate?' which refer to the Agent."
  },
  {
    "id": 14,
    "category": "Screening Suitability",
    "questionText": "Which of the following diseases would be the MOST suitable candidate for a population-based screening program?",
    "options": [
      {"text": "A rare, rapidly fatal disease with no treatment", "explanation": "Incorrect. Screening requires an effective treatment. This would be the correct answer if we just wanted epidemiological data, but for ethical screening, we need to offer help."},
      {"text": "A common disease with a long latent phase and effective early treatment", "explanation": "Correct. Ideal for screening: high prevalence (common), window for detection (latent phase), and benefit from early intervention."},
      {"text": "A common disease that resolves spontaneously without treatment", "explanation": "Incorrect. Screening is unnecessary if the disease cures itself (e.g., common cold). This would be the correct answer if the goal was simply surveillance/tracking."},
      {"text": "A rare disease with a highly invasive confirmation test", "explanation": "Incorrect. The risks of screening/confirmation outweigh benefits if the disease is rare and the test is dangerous. This would be the correct answer if the disease was universally fatal and the test was the ONLY way to save them (high risk/high reward), but generally poor for population screening."},
      {"text": "A disease where symptoms appear immediately upon infection", "explanation": "Incorrect. No 'preclinical' phase means you diagnose it by symptoms, not screening. This would be the correct answer if asking about a disease handled by acute care rather than preventive medicine."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Effective screening requires a 'Suitable Disease': one that is serious, has a high enough prevalence, a long preclinical phase, and an effective treatment available if detected early.",
    "pdfPage": 47,
    "slideImageDescription": "The slide 'Screening' lists requirements: Suitable disease, Suitable test, Suitable screening program. Context implies we need to improve survival/delay onset."
  },
  {
    "id": 15,
    "category": "Lead-time Bias Application",
    "questionText": "A study claims that a new screening test for lung cancer increases 5-year survival rates by 20%. However, total mortality from lung cancer in the screened population remains unchanged compared to the unscreened population. The apparent increase in survival is most likely due to:",
    "options": [
      {"text": "Improved treatment efficacy", "explanation": "Incorrect. Improved treatment would decrease mortality. This would be the correct answer if BOTH survival increased AND mortality decreased."},
      {"text": "Lead-time Bias", "explanation": "Correct. Survival time is calculated from diagnosis. Screening diagnoses earlier, 'adding' time to the survival statistic without actually delaying death."},
      {"text": "Confounding by smoking status", "explanation": "Incorrect. While smoking is a confounder, the discrepancy between survival (up) and mortality (flat) is the hallmark of lead-time bias. This would be the correct answer if the screened group simply smoked less."},
      {"text": "Ecological Fallacy", "explanation": "Incorrect. This involves inferring individual risk from group data. This would be the correct answer if the study made claims about specific patients based only on city-wide averages."},
      {"text": "Type II Error", "explanation": "Incorrect. This is a False Negative error (failing to find a difference). This would be the correct answer if the study claim there was NO difference when there actually was one."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Lead-time bias inflates survival statistics by advancing the time of diagnosis, creating an artifact of longer survival even if the course of the disease and death date remain unchanged.",
    "pdfPage": 62,
    "slideImageDescription": "The slide 'Lead-time Bias' explains that people diagnosed earlier don't necessarily live longer; they just have a longer known duration of disease."
  },
  {
    "id": 16,
    "category": "Herd Immunity",
    "questionText": "A measles outbreak occurs in a community with 85% vaccination coverage. Public health officials aim to increase coverage to 95% to stop transmission. This strategy relies on the principle that:",
    "options": [
      {"text": "Vaccinated individuals can never transmit the virus.", "explanation": "Incorrect. Vaccines are rarely 100% effective (though measles is close). This would be the correct answer if we assumed 'Sterilizing Immunity' was absolute, but the primary population mechanism is blocking transmission chains."},
      {"text": "Reducing the number of susceptible hosts decreases the probability of contact between infected and susceptible individuals.", "explanation": "Correct. This is the mechanism of Herd Immunity. You don't need 100% immunity to stop spread, just enough to break the chain of transmission."},
      {"text": "Vaccination increases the virulence of the pathogen.", "explanation": "Incorrect. This is generally false. This would be the correct answer if discussing 'Vaccine Escape' variants (rare/complex)."},
      {"text": "Unvaccinated individuals develop natural immunity faster.", "explanation": "Incorrect. Unvaccinated individuals are just susceptible. This would be the correct answer if discussing 'Natural Herd Immunity' strategy (letting it rip), which is not the goal here."},
      {"text": "The virus will mutate to a less dangerous form.", "explanation": "Incorrect. Natural viral evolution. This would be the correct answer if discussing the long-term attenuation of syphilis or myxomatosis."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Herd immunity protects the unvaccinated relying on the fact that if a high proportion of the population is immune, the pathogen cannot find enough susceptible hosts to sustain transmission.",
    "pdfPage": 44,
    "slideImageDescription": "The slide 'Herd Immunity' states 'It may not be important to vaccinate 100% of people... transmission as a whole is reduced!'"
  },
  {
    "id": 17,
    "category": "Incubation Period",
    "questionText": "In the 'Fictional Case' of the Senegal illness, some travelers became ill shortly after arrival, while others became ill months later. This variability represents the disease's:",
    "options": [
      {"text": "Virulence", "explanation": "Incorrect. Virulence refers to severity. This would be the correct answer if some died and others had mild symptoms."},
      {"text": "Incubation Period", "explanation": "Correct. The time interval from receipt of infection to onset of clinical illness. Variability here explains the differece in symptom onset."},
      {"text": "Latency", "explanation": "Incorrect. Latency usually refers to the period between infection and infectiousness (or chronic dormancy). This would be the correct answer if discussing Herpes Zoster emerging years later."},
      {"text": "Infectivity", "explanation": "Incorrect. Infectivity refers to the ability to infect a host (R0). This would be the correct answer if asking why some people caught it and others didn't."},
      {"text": "Pathogenicity", "explanation": "Incorrect. Pathogenicity is the ability to cause disease. This would be the correct answer if asking 'Why do 50% of infected people get sick?'."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "The incubation period is the time between exposure to a pathogen and the onset of clinical symptoms; knowing this helps determine isolation and quarantine durations.",
    "pdfPage": 46,
    "slideImageDescription": "The slide 'Incubation Period' defines it as the 'Interval from receipt of infection to onset of clinical illness'."
  },
  {
    "id": 18,
    "category": "Interpreting PPV",
    "questionText": "A screening test has a Sensitivity of 99% and Specificity of 99%. However, when used in a population with a very low disease prevalence (0.1%), a positive test result is still more likely to be a False Positive than a True Positive. This phenomenon highlights that:",
    "options": [
      {"text": "The test is invalid.", "explanation": "Incorrect. The test has excellent validity (99/99). This would be the correct answer if the Sens/Spec were low."},
      {"text": "Sensitivity is the most important metric.", "explanation": "Incorrect. Sensitivity doesn't change with prevalence. This would be the correct answer if the goal was purely case finding regardless of false positives."},
      {"text": "Positive Predictive Value (PPV) is highly dependent on Prevalence.", "explanation": "Correct. Even with a great test, if the disease is rare, most positives will be false positives (low PPV). PPV drops as prevalence drops."},
      {"text": "Specificity should be lower.", "explanation": "Incorrect. Lower specificity would make the problem WORSE (more false positives). This would be the correct answer if... never (you want high spec)."},
      {"text": "Reliability is poor.", "explanation": "Incorrect. Reliability is about consistency. This would be the correct answer if the test gave different results on the same person repeatedly."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Positive Predictive Value (PPV) is directly proportional to disease prevalence. In rare diseases, even highly specific tests can generate more False Positives than True Positives.",
    "pdfPage": 59,
    "slideImageDescription": "The slide discussing 'Back to our case' and PPV emphasizes that PPV is the probability helpful for the patient, and context implies its dependence on the population characteristics."
  },
  {
    "id": 19,
    "category": "Endemic vs Epidemic",
    "questionText": "The mysterious illness is found to be constantly present at low levels in Senegal. However, in the US, it was absent until recently and now shows a spike in cases. The status in Senegal is _____ while the status in the US is _____.",
    "options": [
      {"text": "Epidemic; Endemic", "explanation": "Incorrect. Reverse. Senegal has constant presence (Endemic)."},
      {"text": "Endemic; Epidemic", "explanation": "Correct. Endemic = habitual presence. Epidemic = excess of normal expectancy (which was zero in US)."},
      {"text": "Pandemic; Endemic", "explanation": "Incorrect. Pandemic means global. This would be the correct answer if the Senegal virus was consuming the world while the US just had it normally."},
      {"text": "Endemic; Pandemic", "explanation": "Incorrect. US is one country. This would be the correct answer if the US outbreak spread globally."},
      {"text": "Hyperendemic; Holoendemic", "explanation": "Incorrect. These are intensity descriptors. This would be the correct answer if Senegal had very high constant levels (Hyperendemic) and the US had universal childhood infection (Holoendemic)."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Endemic refers to the constant, habitual presence of a disease in a geography. Epidemic refers to case numbers clearly in excess of normal expectancy.",
    "pdfPage": 31,
    "slideImageDescription": "The slide 'Endemic, Epidemic, Pandemic' defines Endemic as 'Habitual presence' and Epidemic as 'Occurrence... in excess of normal expectancy'."
  },
  {
    "id": 20,
    "category": "Survival Curves",
    "questionText": "To visualize the probability of a patient surviving 5 years after a new cancer diagnosis, considering that patients enter the study at different times and some are lost to follow-up, which method is most appropriate?",
    "options": [
      {"text": "Scatter plot", "explanation": "Incorrect. Used for correlation between two continuous variables. This would be the correct answer if correlating Age vs Survival Time."},
      {"text": "Kaplan-Meier Curve", "explanation": "Correct. Standard method for estimating survival functions from time-to-event data, handling censored data (lost to follow-up)."},
      {"text": "Histogram", "explanation": "Incorrect. Shows distribution of one variable. This would be the correct answer if showing the distribution of 'Age at Diagnosis'."},
      {"text": "Box and whisker plot", "explanation": "Incorrect. Shows median/quartiles. This would be the correct answer if comparing 'Median Survival' between two groups without the time-course element."},
      {"text": "Forest plot", "explanation": "Incorrect. Used in Meta-analysis. This would be the correct answer if combining results from 10 different survival studies."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Kaplan-Meier curves are the standard for visualizing time-to-event data (survival), allowing for the inclusion of censored data (patients who don't reach the endpoint or are lost).",
    "pdfPage": 61,
    "slideImageDescription": "The slide 'SURVIVAL' mentions: 'There are multiple methods to make these curves. One of the most common is the Kaplan Meier curve.'"
  },
  {
    "id": 21,
    "category": "Prevalence Calculation",
    "questionText": "In a nursing home of 100 residents, 20 have hypertension on January 1st. No new cases develop, and no one dies or moves out. What is the point prevalence of hypertension on January 1st?",
    "options": [
      {"text": "10%", "explanation": "Incorrect. This would be the correct answer if there were 10 cases."},
      {"text": "20%", "explanation": "Correct. Prevalence = Cases / Total Population = 20 / 100 = 20%."},
      {"text": "80%", "explanation": "Incorrect. This would be the correct answer if asking for the prevalence of people WITHOUT hypertension (100-20=80)."},
      {"text": "0.2 per person-year", "explanation": "Incorrect. This is an incidence rate. This would be the correct answer if we were calculating the rate of accumulation over time (which is zero here anyway/not applicable to snapshot)."},
      {"text": "Cannot be calculated", "explanation": "Incorrect. All data is present."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Prevalence is a proportion (percentage) reflecting the 'snapshot' burden of disease at a specific time point.",
    "pdfPage": 10,
    "slideImageDescription": "The slide 'Prevalence rate' defines it as: Number of affected persons / Number of persons in the population at that time."
  },
  {
    "id": 22,
    "category": "Primary Prevention",
    "questionText": "A city imposes a tax on sugary beverages to decrease the incidence of obesity and Type 2 diabetes. This policy is an example of:",
    "options": [
      {"text": "Primary Prevention", "explanation": "Correct. Aims to prevent the development of the disease (obesity/diabetes) in healthy people."},
      {"text": "Secondary Prevention", "explanation": "Incorrect. Screening. This would be the correct answer if the city provided free A1c screening to detect early diabetes."},
      {"text": "Tertiary Prevention", "explanation": "Incorrect. This would be the correct answer if the tax revenue funded dialysis centers for people with existing diabetic nephropathy."},
      {"text": "Treatment", "explanation": "Incorrect. Tax is not a treatment. This would be the correct answer if the city provided Insulin."},
      {"text": "Surveillance", "explanation": "Incorrect. This would be the correct answer if the city monitored obesity rates."}
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "Primary prevention targets the pre-pathogenesis phase to prevent the biological onset of disease (e.g., lifestyle modification, immunization).",
    "pdfPage": 39,
    "slideImageDescription": "The slide 'Disease Prevention' (Primary) vs 'What kind of prevention is vaccination?' (Answer: Primary) establishes the concept of preventing initial development."
  },
  {
    "id": 23,
    "category": "Crude vs Specific Rates",
    "questionText": "Florida has a higher crude mortality rate than Alaska. However, when age-adjusted, Alaska's mortality rate is higher. What is the most likely explanation?",
    "options": [
      {"text": "Florida has a better healthcare system.", "explanation": "Incorrect. This doesn't explain the flip. This would be the correct answer if Florida's adjusted rate was much lower solely due to saving lives."},
      {"text": "Florida has an older population.", "explanation": "Correct. Older populations naturally have higher crude death rates. Age-adjustment removes this confounder, revealing the 'true' underlying rate comparison."},
      {"text": "Alaska has more dangerous jobs.", "explanation": "Incorrect. This might explain why Alaska is higher *adjusted*, but doesn't explain why Florida is higher *crude*. This would be the correct answer if asking 'Why is Alaska's adjusted rate high?'"},
      {"text": "Documentation error.", "explanation": "Incorrect. The age effect is a standard epidemiological phenomenon (Simpson's Paradox)."},
      {"text": "Different diseases are endemic.", "explanation": "Incorrect. While true, age structure is the primary driver of crude mortality differences between states like FL and AK."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Crude rates is confounded by population structure (like age). Old populations have high crude mortality. Age-adjusted rates allow for valid comparisons between populations with different age structures.",
    "pdfPage": 35,
    "slideImageDescription": "The slide 'Crude Rates' warns: 'Use crude rates with caution... differences... may be the result of systematic factors (e.g., gender or age distributions).'"
  },
  {
    "id": 24,
    "category": "Screening Ethics",
    "questionText": "A test exists for a fatal neurological genetic disorder that has no cure and manifests at age 40. Screening the general population for this gene is generally controversial because:",
    "options": [
      {"text": "The test is too expensive.", "explanation": "Incorrect. Cost is a hurdle, not the ethical killer. This would be the correct answer if the test worked but bankrupted the system."},
      {"text": "It lacks a 'Suitable Test'.", "explanation": "Incorrect. The test exists. This would be the correct answer if the test was inaccurate."},
      {"text": "It violates the 'Suitable Screening Program' criteria (no benefit from early detection).", "explanation": "Correct. Screening requires that early detection leads to improved survival or quality of life. If there is no treatment, knowing early creates anxiety/morbidity without benefit."},
      {"text": "The prevalence is too high.", "explanation": "Incorrect. High prevalence makes screening MORE efficient. This would be the correct answer if the disease was so common everyone had it anyway."},
      {"text": "Sensitivity is too low.", "explanation": "Incorrect. This would be the correct answer if we missed too many cases."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "A key criterion for screening is that early detection must improve outcomes. Screening for untreatable diseases violates this by causing psychological harm without clinical benefit.",
    "pdfPage": 48,
    "slideImageDescription": "The slide 'Screening' mentions 'Screening can create morbidity and anxiety' and requires a 'Suitable disease' and 'Suitable screening program'."
  },
  {
    "id": 25,
    "category": "Gold Standard",
    "questionText": "To determine the Validity (Sensitivity/Specificity) of a new rapid COVID test, you must compare its results against:",
    "options": [
      {"text": "Clinical symptoms", "explanation": "Incorrect. Symptoms are variable. This would be the correct answer if we were defining a 'Clinical Case Definition', not validating a lab test."},
      {"text": "The Gold Standard Diagnostic Test (e.g., PCR)", "explanation": "Correct. Validity measures are derived from a 2x2 table comparing the Screening Test vs the Gold Standard (Truth)."},
      {"text": "A previous version of the rapid test", "explanation": "Incorrect. This compares reliability/concordance. This would be the correct answer if testing 'Inter-test reliability'."},
      {"text": "Patient self-report", "explanation": "Incorrect. Unreliable. This would be the correct answer if studying 'Patient-Reported Outcomes'."},
      {"text": "Population prevalence", "explanation": "Incorrect. This helps calculate PPV, not Sensitivity/Specificity. This would be the correct answer if checking 'Pre-test probability'."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "The 'Gold Standard' is the best available test that represents the biological 'truth' of disease status, used to calibrate and validate new screening tests.",
    "pdfPage": 50,
    "slideImageDescription": "The slide 'Gold Standard - Diagnostic Test' shows the columns of the 2x2 table labeled 'Present' and 'Absent' based on this standard."
  },
  {
    "id": 26,
    "category": "Reliability",
    "questionText": "Three different doctors measure the same patient's heart rate and get 72, 71, and 73 bpm. A fourth doctor uses a machine that measures it as 95, 95, and 95 bpm. The actual heart rate is 72. The machine is:",
    "options": [
      {"text": "Reliable and Valid", "explanation": "Incorrect. It is wrong (95 vs 72). This would be the correct answer if it read 72, 72, 72."},
      {"text": "Valid but not Reliable", "explanation": "Incorrect. It IS reliable (consistent). This would be the correct answer if it read 72, 60, 85 (Average 72)."},
      {"text": "Reliable but not Valid", "explanation": "Correct. High consistency (95, 95, 95) means high reliability/precision, but low accuracy (real is 72) means low validity."},
      {"text": "Neither", "explanation": "Incorrect. It is reliable. This would be the correct answer if it read 100, 50, 150."},
      {"text": "Sensitive", "explanation": "Incorrect. This concept applies to screening tests (Yes/No), not continuous measurements."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Reliability (Precision) is the ability to produce the same result on repeated trials. It does not ensure correctness (Validity/Accuracy).",
    "pdfPage": 53,
    "slideImageDescription": "The slide 'Reliability' defines it as 'The ability of a measuring instrument to give consistent results on repeated trials'."
  },
  {
    "id": 27,
    "category": "Incidence Calculation",
    "questionText": "1000 people are followed for 5 years. 100 develop the disease. What is the cumulative incidence?",
    "options": [
      {"text": "5%", "explanation": "Incorrect. This would be the correct answer if 50 people developed the disease."},
      {"text": "10%", "explanation": "Correct. 100 cases / 1000 people = 0.10 or 10% over 5 years."},
      {"text": "20%", "explanation": "Incorrect. This would be the correct answer if 200 people developed the disease."},
      {"text": "10 per 1000 person-years", "explanation": "Incorrect. This is an incidence rate density estimate assuming full follow up? (100/(1000*5) = 0.02?). This format describes Incidence Density, not Cumulative Incidence (Risk)."},
      {"text": "0.1 per year", "explanation": "Incorrect. This is a rate. This would be the correct answer if interpreting the 10% over 5 years as an annual average (2% per year)."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Cumulative Incidence is a proportion (risk) calculated as New Cases / Population at Risk at the start of the defined period.",
    "pdfPage": 8,
    "slideImageDescription": "The slide defining Incidence Rate implies the concept of new cases / population. (Note: simple CI usage)."
  },
  {
    "id": 28,
    "category": "Adjusted Rates",
    "questionText": "When comparing cancer mortality between a retirement community and a college town, you must use age-adjusted rates because:",
    "options": [
      {"text": "College students participate in riskier behaviors.", "explanation": "Incorrect. Behavioral differences are what we might want to study, not adjust away (unless confounding). But age is the biggest distorter of *mortality*."},
      {"text": "Retirement communities have better access to care.", "explanation": "Incorrect. Access is a variable, not the structural confounder requiring standard adjustment method."},
      {"text": "Age is a strong confounding variable for cancer mortality.", "explanation": "Correct. Cancer risk increases with age. Since the populations have vastly different age structures, crude rates will misleadingly show higher mortality in the older group solely due to age."},
      {"text": "The populations are too small.", "explanation": "Incorrect. Small populations require statistical power confidence intervals, not age adjustment necessarily (though usually both)."},
      {"text": "Incidence is unknown.", "explanation": "Incorrect. We are comparing mortality."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Standardization (Adjustment) removes the effect of a confounder (like age) to allow for fair comparisons between differing populations.",
    "pdfPage": 37,
    "slideImageDescription": "The slide 'Adjustment for Demographic Factors' states the purpose is to 'eliminate the effects of any differences in age or other factors'."
  },
  {
    "id": 29,
    "category": "Specificity Implication",
    "questionText": "A screening test has 100% Specificity. If a patient tests positive on this test, you can conclude:",
    "options": [
      {"text": "They definitely have the disease.", "explanation": "Correct. 100% Specificity means 0% False Positives. Therefore, a Positive result MUST be a True Positive (SPIN = Specificity Positive rules IN)."},
      {"text": "They definitely do NOT have the disease.", "explanation": "Incorrect. A positive test suggests disease. This would be the correct answer if the test result was NEGATIVE and Sensitivity was 100%."},
      {"text": "The test result is inconclusive.", "explanation": "Incorrect. It's definitive."},
      {"text": "The PPV is low.", "explanation": "Incorrect. PPV is 100% if Specificity is 100% (Cells B is 0)."},
      {"text": "They need a confirmatory test.", "explanation": "Incorrect. A 100% specific test IS the confirmation. This would be the correct answer if the specificity was lower."}
    ],
    "correctAnswerIndex": 0,
    "clinicalPearl": "SpIN: A test with high Specificity, when Positive, helps rule IN the disease (because False Positives are rare/nonexistent).",
    "pdfPage": 51,
    "slideImageDescription": "The slide defining Specificity leads to the logic that if you only identify non-diseased as negative, a positive must be real."
  },
  {
    "id": 30,
    "category": "Sensitivity Implication",
    "questionText": "A screening test has 100% Sensitivity. If a patient tests negative on this test, you can conclude:",
    "options": [
      {"text": "They definitely have the disease.", "explanation": "Incorrect. Negative means no disease. This would be the correct answer if the result was Positive and Specificity was 100%."},
      {"text": "They definitely do NOT have the disease.", "explanation": "Correct. 100% Sensitivity means 0% False Negatives. Therefore, a Negative result MUST be a True Negative (SnOUT = Sensitivity Negative rules OUT)."},
      {"text": "The test is invalid.", "explanation": "Incorrect."},
      {"text": "The specificity must also be high.", "explanation": "Incorrect. You can have high Sens and low Spec."},
      {"text": "The disease is rare.", "explanation": "Incorrect. Unrelated to test properties."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "SnOUT: A test with high Sensitivity, when Negative, helps rule OUT the disease (because False Negatives are rare/nonexistent).",
    "pdfPage": 51,
    "slideImageDescription": "Implicit in the definition of Sensitivity in the 'Measures of Validity' slide."
  },
  {
    "id": 31,
    "category": "Definition of Epidemiology",
    "questionText": "Epidemiology is best defined as the study of the patterns, causes, and effects of health conditions in:",
    "options": [
      {"text": "Individual patients (Case reports)", "explanation": "Incorrect. This is Clinical Medicine. This would be the correct answer if discussing a Case Report or Case Series."},
      {"text": "Laboratory petri dishes (In vitro)", "explanation": "Incorrect. This is Basic Science/Microbiology. This would be the correct answer if discussing cell culture experiments."},
      {"text": "Defined populations", "explanation": "Correct. Epidemiology focuses on population health."},
      {"text": "Hospital administrations", "explanation": "Incorrect. This is Health Administration."},
      {"text": "Animal models", "explanation": "Incorrect. This is In Vivo research."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "Epidemiology is the fundamental science of public health, focusing on disease distribution and determinants in Populations, not individuals.",
    "pdfPage": 3,
    "slideImageDescription": "The slide 'Session Objectives' / 'Definition' defines Epidemiology as the study of... in 'defined populations'."
  },
  {
    "id": 32,
    "category": "Secondary Prevention",
    "questionText": "A 45-year-old woman gets her annual mammogram. She has no symptoms. The goal is to detect potential cancer early to treat it more effectively. This is:",
    "options": [
      {"text": "Primary Prevention", "explanation": "Incorrect. Prevents occurrence. This would be the correct answer if she had a prophylactic mastectomy (Jolie effect) or took Tamoxifen to prevent cancer start."},
      {"text": "Secondary Prevention", "explanation": "Correct. Early detection/screening of asymptomatic disease."},
      {"text": "Tertiary Prevention", "explanation": "Incorrect. Prevents complications. This would be the correct answer if she was being treated for established breast cancer to prevent metastasis."},
      {"text": "Quaternary Prevention", "explanation": "Incorrect. Prevents harm. This would be the correct answer if the doctor advised AGAINST a mammogram because she was 20 years old and low risk."},
      {"text": "Treatment", "explanation": "Incorrect. Mammogram is a test, not a treatment."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Secondary prevention involves screening and early diagnosis to halt the progress of disease in its early, often asymptomatic, stages.",
    "pdfPage": 39,
    "slideImageDescription": "The slide 'Disease Prevention' defines Secondary Prevention as 'Early detection of an existing disease'."
  },
  {
    "id": 33,
    "category": "Interpreting Negative Results",
    "questionText": "A doctor uses a test with low Sensitivity to rule out a dangerous condition like Pulmonary Embolism. This is dangerous because:",
    "options": [
      {"text": "It will generate too many False Positives.", "explanation": "Incorrect. False Positives are annoying, not dangerous in a 'ruled out' sense (they get more tests). High specificity issues."},
      {"text": "It will generate too many False Negatives.", "explanation": "Correct. Low Sensitivity means you miss actual cases (False Negatives). Missing a fatal PE is catastrophic."},
      {"text": "The test is too expensive.", "explanation": "Incorrect."},
      {"text": "The PPV will be too low.", "explanation": "Incorrect. Low sensitivity affects NPV primarily (by increasing FN)."},
      {"text": "It requires invasive procedures.", "explanation": "Incorrect."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "For dangerous, rule-out conditions, you need a High Sensitivity test. Low sensitivity leads to False Negatives, giving patients a false sense of security while the disease progresses.",
    "pdfPage": 51,
    "slideImageDescription": "Implicit in Sensitivity definition (TP/TP+FN). High FN = Low Sens."
  },
  {
    "id": 34,
    "category": "Pandemic Definition",
    "questionText": "The text describes an illness spreading to 'Japan, parts of South America, France and England'. This global spread classifies the event as a:",
    "options": [
      {"text": "Endemic", "explanation": "Incorrect. Localized. This would be the correct answer if it stayed in Senegal."},
      {"text": "Epidemic", "explanation": "Incorrect. Larger than normal but regional. This would be the correct answer if it spread efficiently within one country/region."},
      {"text": "Pandemic", "explanation": "Correct. Worldwide epidemic."},
      {"text": "Sporadic", "explanation": "Incorrect. Irregular. This would be the correct answer if random cases appeared without connection."},
      {"text": "Hyperendemic", "explanation": "Incorrect. High constant level. This would be the correct answer if 80% of Senegal had it always."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "A Pandemic is an epidemic that has spread over several countries or continents, affecting a large number of people.",
    "pdfPage": 31,
    "slideImageDescription": "The slide 'Endemic, Epidemic, Pandemic' defines Pandemic as 'worldwide epidemic'."
  },
  {
    "id": 35,
    "category": "Relationship of I and P",
    "questionText": "If a disease is highly lethal (very short duration), and incidence is constant, the prevalence will be:",
    "options": [
      {"text": "Very High", "explanation": "Incorrect. P = I x D. Small D means small P. This would be the correct answer if the disease was chronic and non-fatal (Long Duration)."},
      {"text": "Relatively Low", "explanation": "Correct. Since Duration is small (death occurs quickly), the 'pool' of prevalence stays small despite new cases."},
      {"text": "Increasing rapidly", "explanation": "Incorrect. I is constant, D is constant -> P is constant."},
      {"text": "Decreasing rapidly", "explanation": "Incorrect. Constant I means maintenance."},
      {"text": "Equal to Sensitivity", "explanation": "Incorrect. Nonsense."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Diseases with short durations (either rapid cure or rapid death) tend to have low prevalence, even if incidence is high.",
    "pdfPage": 12,
    "slideImageDescription": "The slide 'Relationship Between Incidence and Prevalence' relates P to I x D."
  },
  {
    "id": 36,
    "category": "Denominators",
    "questionText": "When calculating the Incidence of uterine cancer, the denominator should NOT include:",
    "options": [
      {"text": "Women over 50", "explanation": "Incorrect. They have a uterus (usually) and are at risk."},
      {"text": "Women who have had a hysterectomy", "explanation": "Correct. They do not have a uterus, so they are not 'at risk' and must be removed from the denominator."},
      {"text": "Women under 20", "explanation": "Incorrect. Low risk, but technically have the organ."},
      {"text": "Women with a history of breast cancer", "explanation": "Incorrect. Still at risk for uterine cancer."},
      {"text": "Women on HRT", "explanation": "Incorrect. Increased risk, definitely in denominator."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "The denominator for incidence must only include the 'Population at Risk'. Individuals who biologically cannot get the disease (e.g., organ removed) must be excluded.",
    "pdfPage": 8,
    "slideImageDescription": "The slide 'Incidence Rate' explicitly lists the example: 'we calculating incidence of uterine cancer, the denominator must include only women, and they should not have had a hysterectomy'."
  },
  {
    "id": 37,
    "category": "Count",
    "questionText": "Reporting '5 cases of Ebola' is a significant epidemiological finding, even without a denominator. This simplest measure is called:",
    "options": [
      {"text": "Incidence Rate", "explanation": "Incorrect. Requires denominator."},
      {"text": "Prevalence Rate", "explanation": "Incorrect. Requires denominator."},
      {"text": "Count", "explanation": "Correct. A simple number of cases. Significant for rare/serious diseases."},
      {"text": "Ratio", "explanation": "Incorrect. Division of two numbers."},
      {"text": "Proportion", "explanation": "Incorrect. Numerator is part of denominator."}
    ],
    "correctAnswerIndex": 2,
    "clinicalPearl": "For very rare or dangerous diseases (like Ebola), a simple 'Count' is sufficient to trigger a public health response.",
    "pdfPage": 6,
    "slideImageDescription": "The slide 'Count' states it is 'Significant for rare diseases... e.g., case of Ebola virus'."
  },
  {
    "id": 38,
    "category": "Ratio vs Rate",
    "questionText": "A 'Rate' differs from a simple 'Ratio' because a Rate always includes:",
    "options": [
      {"text": "A percent sign", "explanation": "Incorrect. Proportion has percent."},
      {"text": "Time in the denominator", "explanation": "Correct. Definition of rate involves change over time."},
      {"text": "A constant multiplier", "explanation": "Incorrect. Used in both."},
      {"text": "Prevalence", "explanation": "Incorrect."},
      {"text": "Incidence", "explanation": "Incorrect."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "A true Rate must imply a time dimension (velocity of disease occurrence), distinguishing it from a simple proportion or ratio.",
    "pdfPage": 7,
    "slideImageDescription": "The slide 'Rate' definition: 'a ratio... in which time forms part of the denominator'."
  },
  {
    "id": 39,
    "category": "2x2 Table Labels",
    "questionText": "In a standard screening 2x2 table, cell 'C' (bottom left) represents:",
    "options": [
      {"text": "True Positives", "explanation": "Incorrect. Cell A (Top Left)."},
      {"text": "False Positives", "explanation": "Incorrect. Cell B (Top Right)."},
      {"text": "True Negatives", "explanation": "Incorrect. Cell D (Bottom Right)."},
      {"text": "False Negatives", "explanation": "Correct. Cell C: Screen Negative but Disease Positive (False Negative)."},
      {"text": "Total Population", "explanation": "Incorrect. A+B+C+D."}
    ],
    "correctAnswerIndex": 3,
    "clinicalPearl": "In a standard 2x2 table (Disease columns, Test rows), False Negatives are those who have the disease (Column 1) but test negative (Row 2).",
    "pdfPage": 50,
    "slideImageDescription": "The slide 'Screening Test Result' 2x2 table visually places False Negative in the C position (Negative Test, Present Disease)."
  },
  {
    "id": 40,
    "category": "Kaplan Meier",
    "questionText": "In a Kaplan-Meier survival curve, the y-axis represents the 'Survival Probability' which:",
    "options": [
      {"text": "Increases over time", "explanation": "Incorrect. Survival can only go down (people die) or stay flat. This would be the correct answer for 'Mortality Risk' (1 - Survival)."},
      {"text": "Starts at 1.0 (100%) and decreases with each death", "explanation": "Correct. Everyone is alive at t=0. The curve steps down at each event."},
      {"text": "Represents the number of patients", "explanation": "Incorrect. Probability (0-1). This would be the correct answer if it was a raw count plot."},
      {"text": "Is always linear", "explanation": "Incorrect. Steps."},
      {"text": "Cannot reach zero", "explanation": "Incorrect. If everyone dies, it hits zero."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Survival curves always start at 100% and step down. They illustrate the cumulative probability of surviving past a certain time point.",
    "pdfPage": 61,
    "slideImageDescription": "The slide 'SURVIVAL' describes calculating probability of surviving year 1, then year 2, etc., implying the product limit method starting from 100%."
  }
];

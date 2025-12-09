window.L134 = [
  {
    "id": 1,
    "category": "Measures of Disease Frequency",
    "questionText": "A public health official is tracking a new outbreak of a respiratory virus in a town of 10,000 people. On January 1st, 200 people are already infected. Over the course of the year, 400 new cases are diagnosed. Residents are at risk for the entire year unless they are already infected. What is the incidence rate for this population?",
    "options": [
      {"text": "400 / 10,000", "explanation": "This uses the total population, not the population at risk."},
      {"text": "400 / 9,800", "explanation": "Incidence Rate = New Cases / Population at Risk. Population at risk = Total Population (10,000) - Existing Cases (200) = 9,800."},
      {"text": "600 / 10,000", "explanation": "This calculates prevalence (total cases) over the total population."},
      {"text": "200 / 9,600", "explanation": "200 / 9,600 is not the primary characteristic or cause of the condition described in this question."},
      {"text": "400 / 200", "explanation": "This compares new cases to existing cases, which is not a standard rate."}
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
      {"text": "Prevalence decreases, Incidence stays the same", "explanation": "Prevalence would increase if people live longer with the disease."},
      {"text": "Prevalence increases, Incidence stays the same", "explanation": "Prevalence increases because the duration of the disease increases (Prevalence = Incidence x Duration), while the rate of new cases (Incidence) is unaffected."},
      {"text": "Prevalence increases, Incidence increases", "explanation": "The treatment does not affect the number of new cases (Incidence)."},
      {"text": "Prevalence stays the same, Incidence decreases", "explanation": "Prevalence would change due to increased survival."},
      {"text": "Prevalence decreases, Incidence decreases", "explanation": "Neither would decrease in this scenario."}
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
      {"text": "There is a 3% chance that Drug A is better than Drug B.", "explanation": "p-value is not the probability of the alternative hypothesis."},
      {"text": "There is a 97% probability that the null hypothesis is true.", "explanation": "p-value does not give the probability of the null itself."},
      {"text": "There is a 3% probability of observing these results (or more extreme) if the null hypothesis were true.", "explanation": "This is the correct definition of a p-value. Since 0.03 < 0.05, we reject the null hypothesis."},
      {"text": "The results are not statistically significant.", "explanation": "0.03 is less than 0.05, so it is significant."},
      {"text": "There is a 3% chance the results are due to bias.", "explanation": "p-value measures chance/random error, not bias."}
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
      {"text": "Sensitivity", "explanation": "Ability to detect disease in those who have it."},
      {"text": "Specificity", "explanation": "Ability to rule out disease in those who don't have it."},
      {"text": "Positive Predictive Value (PPV)", "explanation": "PPV answers 'Given a positive test, what is the probability of disease?'. This depends on prevalence."},
      {"text": "Negative Predictive Value (NPV)", "explanation": "Given a negative test, probability of no disease."},
      {"text": "Case Fatality Rate", "explanation": "Case Fatality Rate is not the primary characteristic or cause of the condition described in this question."}
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
      {"text": "Lead-time Bias", "explanation": "Diagnosis happens earlier, increasing perceived survival time without changing actual mortality."},
      {"text": "Length Bias", "explanation": "Screening selectively detects cases with a longer preclinical phase (slower progression), making survival look better."},
      {"text": "Selection Bias", "explanation": "Selection Bias is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Recall Bias", "explanation": "Recall Bias is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Confounding", "explanation": "Confounding is not the primary characteristic or cause of the condition described in this question."}
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
      {"text": "20%", "explanation": "20% is not the primary characteristic or cause of the condition described in this question."},
      {"text": "40%", "explanation": "CFR = Deaths from disease / Total diagnosed cases. 200 deaths / 500 cases = 0.40 or 40%."},
      {"text": "50%", "explanation": "50% is not the primary characteristic or cause of the condition described in this question."},
      {"text": "60%", "explanation": "60% is not the primary characteristic or cause of the condition described in this question."},
      {"text": "100%", "explanation": "100% is not the primary characteristic or cause of the condition described in this question."}
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
      {"text": "Case-Control Study", "explanation": "Starts with outcome, looks back at exposure."},
      {"text": "Retrospective Cohort", "explanation": "Retrospective Cohort is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Randomized Clinical Trial (RCT)", "explanation": "Random assignment to intervention (exposure) and prospective follow-up makes this an RCT, the gold standard for efficacy."},
      {"text": "Cross-Sectional Study", "explanation": "Cross-Sectional Study is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Ecological Study", "explanation": "Ecological Study is not the primary characteristic or cause of the condition described in this question."}
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
      {"text": "20%", "explanation": "20% is not the primary characteristic or cause of the condition described in this question."},
      {"text": "40%", "explanation": "40% is not the primary characteristic or cause of the condition described in this question."},
      {"text": "80%", "explanation": "Sensitivity = TP / (TP + FN) = 80 / 100 = 80%. It measures the ability to detect the disease when it is present."},
      {"text": "90%", "explanation": "90% is not the primary characteristic or cause of the condition described in this question."},
      {"text": "100%", "explanation": "100% is not the primary characteristic or cause of the condition described in this question."}
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
      {"text": "10%", "explanation": "10% is not the primary characteristic or cause of the condition described in this question."},
      {"text": "80%", "explanation": "80% is not the primary characteristic or cause of the condition described in this question."},
      {"text": "90%", "explanation": "Specificity = TN / (TN + FP) = 90 / 100 = 90%. It measures the ability to correctly identify those WITHOUT the disease."},
      {"text": "95%", "explanation": "95% is not the primary characteristic or cause of the condition described in this question."},
      {"text": "50%", "explanation": "50% is not the primary characteristic or cause of the condition described in this question."}
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
      {"text": "Valid but not Reliable", "explanation": "It is consistent (reliable) but not accurate (valid)."},
      {"text": "Reliable but not Valid", "explanation": "Reliability refers to consistency/repeatability. Validity refers to accuracy. This cuff is consistent (reliable) but inaccurate (not valid)."},
      {"text": "Both Valid and Reliable", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Neither Valid nor Reliable", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Sensitive but not Specific", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."}
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
      {"text": "Primary Prevention", "explanation": "Primary Prevention is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Secondary Prevention", "explanation": "Secondary Prevention is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Tertiary Prevention", "explanation": "Managing an existing disease to prevent complications or recurrence (e.g., post-MI medical management)."},
      {"text": "Quaternary Prevention", "explanation": "Quaternary Prevention is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Primordial Prevention", "explanation": "Primordial Prevention is not the primary characteristic or cause of the condition described in this question."}
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
      {"text": "5 / 100 person-years", "explanation": "5 / 100 person-years is not the primary characteristic or cause of the condition described in this question."},
      {"text": "5 / 150 person-years", "explanation": "Person-years = (50 nurses * 2 years) + (50 nurses * 1 year) = 100 + 50 = 150. Rate = 5/150."},
      {"text": "5 / 50 person-years", "explanation": "5 / 50 person-years is not the primary characteristic or cause of the condition described in this question."},
      {"text": "10 / 100 person-years", "explanation": "10 / 100 person-years is not the primary characteristic or cause of the condition described in this question."},
      {"text": "0.05", "explanation": "0.05 is not the primary characteristic or cause of the condition described in this question."}
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
      {"text": "Herd Immunity threshold", "explanation": "Herd Immunity threshold is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Mutation rate of the virus", "explanation": "Characteristics of the pathogen (Agent), such as DNA vs RNA or mutation potential, are critical for vaccine targets."},
      {"text": "Population density", "explanation": "Population density is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Access to healthcare", "explanation": "Access to healthcare is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Genetic susceptibility of the population", "explanation": "Genetic susceptibility of the population is not the primary characteristic or cause of the condition described in this question."}
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
      {"text": "A rare, rapidly fatal disease with no treatment", "explanation": "Screening offers no benefit if no treatment exists."},
      {"text": "A common disease with a long latent phase and effective early treatment", "explanation": "Ideal for screening: high prevalence (common), window for detection (latent phase), and benefit from early intervention."},
      {"text": "A common disease that resolves spontaneously without treatment", "explanation": "A common disease that resolves spontaneously without treatment is not the primary characteristic or cause of the condition described in this question."},
      {"text": "A rare disease with a highly invasive confirmation test", "explanation": "A rare disease with a highly invasive confirmation test is not the primary characteristic or cause of the condition described in this question."},
      {"text": "A disease where symptoms appear immediately upon infection", "explanation": "Diagnosis happens clinically, no 'screening' phase needed."}
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
      {"text": "Improved treatment efficacy", "explanation": "This describes a different mechanism than the one responsible for the pathophysiology described."},
      {"text": "Lead-time Bias", "explanation": "Survival time is calculated from diagnosis. Screening diagnoses earlier, 'adding' time to the survival statistic without actually delaying death."},
      {"text": "Confounding by smoking status", "explanation": "Possible but lead-time is the classic explanation for this discrepancy."},
      {"text": "Ecological Fallacy", "explanation": "This describes a different mechanism than the one responsible for the pathophysiology described."},
      {"text": "Type II Error", "explanation": "This describes a different mechanism than the one responsible for the pathophysiology described."}
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
      {"text": "Vaccinated individuals can never transmit the virus.", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Reducing the number of susceptible hosts decreases the probability of contact between infected and susceptible individuals.", "explanation": "This is the mechanism of Herd Immunity. You don't need 100% immunity to stop spread, just enough to break the chain of transmission."},
      {"text": "Vaccination increases the virulence of the pathogen.", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Unvaccinated individuals develop natural immunity faster.", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "The virus will mutate to a less dangerous form.", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."}
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
      {"text": "Virulence", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Incubation Period", "explanation": "The time interval from receipt of infection to onset of clinical illness. Variability here explains the differece in symptom onset."},
      {"text": "Latency", "explanation": "Similar, but Incubation is the clinical term for infectious diseases."},
      {"text": "Infectivity", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Pathogenicity", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."}
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
      {"text": "The test is invalid.", "explanation": "The test is valid (high sens/spec)."},
      {"text": "Sensitivity is the most important metric.", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "Positive Predictive Value (PPV) is highly dependent on Prevalence.", "explanation": "Even with a great test, if the disease is rare, most positives will be false positives (low PPV). PPV drops as prevalence drops."},
      {"text": "Specificity should be lower.", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "Reliability is poor.", "explanation": "This marker or finding is associated with different conditions, not the one described here."}
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
      {"text": "Epidemic; Endemic", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Endemic; Epidemic", "explanation": "Endemic = habitual presence. Epidemic = excess of normal expectancy (which was zero in US)."},
      {"text": "Pandemic; Endemic", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Endemic; Pandemic", "explanation": "US is a region, not world."},
      {"text": "Hyperendemic; Holoendemic", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."}
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
      {"text": "Scatter plot", "explanation": "Scatter plot is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Kaplan-Meier Curve", "explanation": "Standard method for estimating survival functions from time-to-event data, handling censored data (lost to follow-up)."},
      {"text": "Histogram", "explanation": "Histogram is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Box and whisker plot", "explanation": "Box and whisker plot is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Forest plot", "explanation": "Forest plot is not the primary characteristic or cause of the condition described in this question."}
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
      {"text": "10%", "explanation": "10% is not the primary characteristic or cause of the condition described in this question."},
      {"text": "20%", "explanation": "Prevalence = Cases / Total Population = 20 / 100 = 20%."},
      {"text": "80%", "explanation": "80% is not the primary characteristic or cause of the condition described in this question."},
      {"text": "0.2 per person-year", "explanation": "This is a rate, not a proportion."},
      {"text": "Cannot be calculated", "explanation": "Cannot be calculated is not the primary characteristic or cause of the condition described in this question."}
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
      {"text": "Primary Prevention", "explanation": "Aims to prevent the development of the disease (obesity/diabetes) in healthy people."},
      {"text": "Secondary Prevention", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Tertiary Prevention", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Treatment", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Surveillance", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."}
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
      {"text": "Florida has a better healthcare system.", "explanation": "Unrelated to the age adjustment logic."},
      {"text": "Florida has an older population.", "explanation": "Older populations naturally have higher crude death rates. Age-adjustment removes this confounder, revealing the 'true' underlying rate comparison."},
      {"text": "Alaska has more dangerous jobs.", "explanation": "Might explain the higher adjusted rate, but the question asks about the discrepancy."},
      {"text": "Documentation error.", "explanation": "Documentation error. is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Different diseases are endemic.", "explanation": "Different diseases are endemic. is not the primary characteristic or cause of the condition described in this question."}
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
      {"text": "The test is too expensive.", "explanation": "Cost is a factor, but not the primary ethical one."},
      {"text": "It lacks a 'Suitable Test'.", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "It violates the 'Suitable Screening Program' criteria (no benefit from early detection).", "explanation": "Screening requires that early detection leads to improved survival or quality of life. If there is no treatment, knowing early creates anxiety/morbidity without benefit."},
      {"text": "The prevalence is too high.", "explanation": "Low prev is usually the issue."},
      {"text": "Sensitivity is too low.", "explanation": "Ethical issue remains even with high sens."}
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
      {"text": "Clinical symptoms", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "The Gold Standard Diagnostic Test (e.g., PCR)", "explanation": "Validity measures are derived from a 2x2 table comparing the Screening Test vs the Gold Standard (Truth)."},
      {"text": "A previous version of the rapid test", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "Patient self-report", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "Population prevalence", "explanation": "This marker or finding is associated with different conditions, not the one described here."}
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
      {"text": "Reliable and Valid", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Valid but not Reliable", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Reliable but not Valid", "explanation": "High consistency (95, 95, 95) means high reliability/precision, but low accuracy (real is 72) means low validity."},
      {"text": "Neither", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Sensitive", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."}
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
      {"text": "5%", "explanation": "5% is not the primary characteristic or cause of the condition described in this question."},
      {"text": "10%", "explanation": "100 cases / 1000 people = 0.10 or 10% over 5 years."},
      {"text": "20%", "explanation": "20% is not the primary characteristic or cause of the condition described in this question."},
      {"text": "10 per 1000 person-years", "explanation": "10 per 1000 person-years is not the primary characteristic or cause of the condition described in this question."},
      {"text": "0.1 per year", "explanation": "0.1 per year is not the primary characteristic or cause of the condition described in this question."}
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
      {"text": "College students participate in riskier behaviors.", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Retirement communities have better access to care.", "explanation": "Confounder, but age is the big one."},
      {"text": "Age is a strong confounding variable for cancer mortality.", "explanation": "Cancer risk increases with age. Since the populations have vastly different age structures, crude rates will misleadingly show higher mortality in the older group solely due to age."},
      {"text": "The populations are too small.", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Incidence is unknown.", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."}
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
      {"text": "They definitely have the disease.", "explanation": "100% Specificity means 0% False Positives. Therefore, a Positive result MUST be a True Positive (SPIN = Specificity Positive rules IN)."},
      {"text": "They definitely do NOT have the disease.", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "The test result is inconclusive.", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "The PPV is low.", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "They need a confirmatory test.", "explanation": "Ideally yes, but statistically it's certain."}
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
      {"text": "They definitely have the disease.", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "They definitely do NOT have the disease.", "explanation": "100% Sensitivity means 0% False Negatives. Therefore, a Negative result MUST be a True Negative (SnOUT = Sensitivity Negative rules OUT)."},
      {"text": "The test is invalid.", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "The specificity must also be high.", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "The disease is rare.", "explanation": "This marker or finding is associated with different conditions, not the one described here."}
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
      {"text": "Individual patients (Case reports)", "explanation": "This describes a different mechanism than the one responsible for the pathophysiology described."},
      {"text": "Laboratory petri dishes (In vitro)", "explanation": "This describes a different mechanism than the one responsible for the pathophysiology described."},
      {"text": "Defined populations", "explanation": "Epidemiology focuses on population health."},
      {"text": "Hospital administrations", "explanation": "This describes a different mechanism than the one responsible for the pathophysiology described."},
      {"text": "Animal models", "explanation": "This describes a different mechanism than the one responsible for the pathophysiology described."}
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
      {"text": "Primary Prevention", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Secondary Prevention", "explanation": "Early detection/screening of asymptomatic disease."},
      {"text": "Tertiary Prevention", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Quaternary Prevention", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Treatment", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."}
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
      {"text": "It will generate too many False Positives.", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "It will generate too many False Negatives.", "explanation": "Low Sensitivity means you miss actual cases (False Negatives). Missing a fatal PE is catastrophic."},
      {"text": "The test is too expensive.", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "The PPV will be too low.", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "It requires invasive procedures.", "explanation": "This marker or finding is associated with different conditions, not the one described here."}
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
      {"text": "Endemic", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Epidemic", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Pandemic", "explanation": "Worldwide epidemic."},
      {"text": "Sporadic", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Hyperendemic", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."}
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
      {"text": "Very High", "explanation": "Short duration lowers prevalence (P ~= I * D)."},
      {"text": "Relatively Low", "explanation": "Since Duration is small (death occurs quickly), the 'pool' of prevalence stays small despite new cases."},
      {"text": "Increasing rapidly", "explanation": "Stable incidence + stable duration = stable prevalence."},
      {"text": "Decreasing rapidly", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Equal to Sensitivity", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."}
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
      {"text": "Women over 50", "explanation": "This value is not correct for the parameter described in this clinical scenario."},
      {"text": "Women who have had a hysterectomy", "explanation": "They do not have a uterus, so they are not 'at risk' and must be removed from the denominator."},
      {"text": "Women under 20", "explanation": "This value is not correct for the parameter described in this clinical scenario."},
      {"text": "Women with a history of breast cancer", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Women on HRT", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."}
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
      {"text": "Incidence Rate", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "Prevalence Rate", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "Count", "explanation": "A simple number of cases. Significant for rare/serious diseases."},
      {"text": "Ratio", "explanation": "This marker or finding is associated with different conditions, not the one described here."},
      {"text": "Proportion", "explanation": "This marker or finding is associated with different conditions, not the one described here."}
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
      {"text": "A percent sign", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Time in the denominator", "explanation": "Definition of rate involves change over time."},
      {"text": "A constant multiplier", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Prevalence", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."},
      {"text": "Incidence", "explanation": "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."}
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
      {"text": "True Positives", "explanation": "A (not the primary mechanism in this scenario)."},
      {"text": "False Positives", "explanation": "B (not the primary mechanism in this scenario)."},
      {"text": "True Negatives", "explanation": "D (not the primary mechanism in this scenario)."},
      {"text": "False Negatives", "explanation": "Cell C: Screen Negative but Disease Positive (False Negative)."},
      {"text": "Total Population", "explanation": "This cell type or cellular mechanism is not primarily involved in this process."}
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
      {"text": "Increases over time", "explanation": "Survival can only go down or stay flat."},
      {"text": "Starts at 1.0 (100%) and decreases with each death", "explanation": "Everyone is alive at t=0. The curve steps down at each event."},
      {"text": "Represents the number of patients", "explanation": "Represents the number of patients is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Is always linear", "explanation": "Is always linear is not the primary characteristic or cause of the condition described in this question."},
      {"text": "Cannot reach zero", "explanation": "Cannot reach zero is not the primary characteristic or cause of the condition described in this question."}
    ],
    "correctAnswerIndex": 1,
    "clinicalPearl": "Survival curves always start at 100% and step down. They illustrate the cumulative probability of surviving past a certain time point.",
    "pdfPage": 61,
    "slideImageDescription": "The slide 'SURVIVAL' describes calculating probability of surviving year 1, then year 2, etc., implying the product limit method starting from 100%."
  }
];

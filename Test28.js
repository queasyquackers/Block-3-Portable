window.L134 = [
    {
        "id": 1,
        "category": "Measures of Disease Frequency",
        "questionText": "A public health officer is investigating an outbreak of a novel viral respiratory illness in a small town of 10,000 people. On January 1st, 50 people actively had the disease. Over the course of the year, 200 new cases were diagnosed. What was the incidence rate of the disease for that year?",
        "options": [
            { "text": "200 / 10,000", "explanation": "Incorrect denominator; includes those already sick." },
            { "text": "200 / 9,950", "explanation": "Incidence rate uses the population at risk in the denominator. 10,000 total - 50 existing cases = 9,950 at risk." },
            { "text": "250 / 10,000", "explanation": "Calculates period prevalence, not incidence." },
            { "text": "50 / 10,000", "explanation": "Calculates point prevalence on Jan 1st." },
            { "text": "200 / 10,050", "explanation": "Incorrect addition to denominator." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_8.jpg",
        "slideImageDescription": "The slide defining 'Incidence Rate' as 'Number of new cases / Population at risk'. It emphasizes subtracting existing cases from the total population to find the at-risk group."
    },
    {
        "id": 2,
        "category": "Measures of Disease Frequency",
        "questionText": "In a study of uterine cancer, researchers calculate the incidence rate in a city of 1 million people (500,000 males, 500,000 females). If 100 new cases are identified in one year, and 50,000 women have had a hysterectomy, what is the correct denominator for the incidence calculation?",
        "options": [
            { "text": "1,000,000", "explanation": "Includes males." },
            { "text": "500,000", "explanation": "Includes women without a uterus (not at risk)." },
            { "text": "450,000", "explanation": "The population at risk includes only women with a uterus (500,000 total women - 50,000 hysterectomies)." },
            { "text": "950,000", "explanation": "Includes males." },
            { "text": "50,000", "explanation": "This is the excluded group." }
        ],
        "correctAnswerIndex": 2,
        "slideImagePath": "images/L134_slide_8.jpg",
        "slideImageDescription": "The slide discussing 'Population at Risk' specifically mentions uterine cancer and excluding women who have had a hysterectomy from the denominator."
    },
    {
        "id": 3,
        "category": "Measures of Disease Frequency",
        "questionText": "A new treatment for a chronic disease prevents death but does not produce a cure. What effect will this treatment have on the prevalence and incidence of the disease?",
        "options": [
            { "text": "Incidence increases, Prevalence decreases", "explanation": "Incidence is unaffected by treatment duration." },
            { "text": "Incidence decreases, Prevalence increases", "explanation": "Incidence is new cases; treatment doesn't stop new cases." },
            { "text": "Incidence remains stable, Prevalence increases", "explanation": "Prevalence = Incidence x Duration. If duration increases (no death, no cure), prevalence increases. Incidence (new cases) is unchanged." },
            { "text": "Incidence remains stable, Prevalence decreases", "explanation": "Prevalence would increase." },
            { "text": "Both Incidence and Prevalence decrease", "explanation": "Incorrect." }
        ],
        "correctAnswerIndex": 2,
        "slideImagePath": "images/L134_slide_8.jpg",
        "slideImageDescription": "The slide defining 'Prevalence Rate' as a measure of the burden of disease, distinct from risk (incidence). Contextual understanding of P = I x D."
    },
    {
        "id": 4,
        "category": "Measures of Disease Frequency",
        "questionText": "During a summer camp, 33% of the children developed diarrhea on July 13th. This statistic is an example of:",
        "options": [
            { "text": "Cumulative Incidence", "explanation": "Implies risk over time." },
            { "text": "Incidence Density", "explanation": "Uses person-time." },
            { "text": "Point Prevalence", "explanation": "Point prevalence measures the proportion of a population affected by a disease at a specific point in time (July 13th)." },
            { "text": "Period Prevalence", "explanation": "Would cover a range of dates." },
            { "text": "Case Fatality Rate", "explanation": "Measures death." }
        ],
        "correctAnswerIndex": 2,
        "slideImagePath": "images/L134_slide_11.jpg",
        "slideImageDescription": "The slide giving the example: 'If you find out the prevalence of diarrhea in a children's camp on July 13th was 33%'."
    },
    {
        "id": 5,
        "category": "Measures of Disease Frequency",
        "questionText": "Which of the following scenarios would best be described using a simple 'Count' rather than a rate?",
        "options": [
            { "text": "Comparing heart disease between two countries", "explanation": "Needs a rate to account for population size." },
            { "text": "Tracking seasonal allergies in a city", "explanation": "Common condition, needs rate." },
            { "text": "Reporting cases of a rare hemorrhagic fever like Ebola", "explanation": "For rare or significant diseases (e.g., Ebola), a simple count of cases is often sufficient and meaningful for public health action." },
            { "text": "Analyzing obesity trends over a decade", "explanation": "Needs prevalence rate." },
            { "text": "Monitoring hypertension in the elderly", "explanation": "Needs prevalence rate." }
        ],
        "correctAnswerIndex": 2,
        "slideImagePath": "images/L134_slide_6.jpg",
        "slideImageDescription": "The slide discussing 'Counts' states it is significant for 'rare diseases or symptoms such as Ebola'."
    },
    {
        "id": 6,
        "category": "Screening Tests",
        "questionText": "A new screening test for diabetes is evaluated against the gold standard. In a sample of 1000 patients, 100 have diabetes. The test identifies 80 of the diabetic patients correctly and tests positive for 90 healthy individuals. What is the sensitivity of this test?",
        "options": [
            { "text": "80%", "explanation": "Sensitivity = TP / (TP + FN) = 80 / 100 = 80%." },
            { "text": "90%", "explanation": "Specificity calculation error." },
            { "text": "47%", "explanation": "PPV calculation." },
            { "text": "88%", "explanation": "Accuracy calculation." },
            { "text": "10%", "explanation": "False positive rate." }
        ],
        "correctAnswerIndex": 0,
        "slideImagePath": "images/L134_slide_51.jpg",
        "slideImageDescription": "The slide defining 'Sensitivity' as 'TP / (TP + FN)'. The 2x2 table slide is also relevant."
    },
    {
        "id": 7,
        "category": "Screening Tests",
        "questionText": "Using the same data (1000 patients, 100 diabetic, 80 TP, 90 FP), what is the specificity of the test?",
        "options": [
            { "text": "80%", "explanation": "Sensitivity." },
            { "text": "90%", "explanation": "Specificity = TN / (TN + FP). Healthy = 900. FP = 90. TN = 810. 810/900 = 90%." },
            { "text": "10%", "explanation": "False positive rate." },
            { "text": "91%", "explanation": "NPV calculation." },
            { "text": "82%", "explanation": "Accuracy." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_51.jpg",
        "slideImageDescription": "The slide defining 'Specificity' as 'TN / (TN + FP)'."
    },
    {
        "id": 8,
        "category": "Screening Tests",
        "questionText": "A patient asks what it means that a test has 90% specificity. The most accurate explanation is:",
        "options": [
            { "text": "If you have the disease, there is a 90% chance the test will find it.", "explanation": "Definition of Sensitivity." },
            { "text": "If you are healthy, there is a 90% chance the test will correctly say you are healthy.", "explanation": "Specificity is the ability to correctly identify non-diseased individuals (TN rate)." },
            { "text": "If you test positive, there is a 90% chance you have the disease.", "explanation": "Definition of PPV." },
            { "text": "If you test negative, there is a 90% chance you are healthy.", "explanation": "Definition of NPV." },
            { "text": "The test is reliable 90% of the time.", "explanation": "Reliability is consistency, not validity." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_57.jpg",
        "slideImageDescription": "The slide explicitly asking 'The screening test... has 90% specificity. What does this mean?' and providing the answer."
    },
    {
        "id": 9,
        "category": "Screening Tests",
        "questionText": "A screening test with high sensitivity is most useful for:",
        "options": [
            { "text": "Confirming a diagnosis", "explanation": "Specificity is better for confirmation (SpPIn)." },
            { "text": "Ruling out a disease", "explanation": "High sensitivity tests have few false negatives, making them ideal for ruling out disease (SnNOut)." },
            { "text": "Diseases with high prevalence only", "explanation": "Not the primary factor." },
            { "text": "Minimizing false positives", "explanation": "High specificity does this." },
            { "text": "Replacing the gold standard", "explanation": "Screening is not diagnostic." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_47.jpg",
        "slideImageDescription": "The slide defining Sensitivity. The concept of SnNOut (Sensitivity Rules Out) is a core application of this definition."
    },
    {
        "id": 10,
        "category": "Screening Tests",
        "questionText": "In a 2x2 table comparing a screening test to a gold standard, which cell represents the 'False Negatives'?",
        "options": [
            { "text": "Cell A (Top Left)", "explanation": "True Positive." },
            { "text": "Cell B (Top Right)", "explanation": "False Positive." },
            { "text": "Cell C (Bottom Left)", "explanation": "False Negative (Diseased but Test Negative)." },
            { "text": "Cell D (Bottom Right)", "explanation": "True Negative." },
            { "text": "None of the above", "explanation": "Incorrect." }
        ],
        "correctAnswerIndex": 2,
        "slideImagePath": "images/L134_slide_50.jpg",
        "slideImageDescription": "The 2x2 table slide showing the 'Gold Standard' columns and 'Screening Test' rows, labeling cell C as False Negative."
    },
    {
        "id": 11,
        "category": "Predictive Values",
        "questionText": "A patient tests positive for a rare disease using a test with 95% sensitivity and 95% specificity. However, the doctor explains that the likelihood they actually have the disease is still low (e.g., 15%). This discrepancy is best explained by:",
        "options": [
            { "text": "Low reliability of the test", "explanation": "Not related to validity parameters." },
            { "text": "Low prevalence of the disease", "explanation": "Positive Predictive Value (PPV) is highly dependent on prevalence. In rare diseases, false positives can outnumber true positives even with good specificity." },
            { "text": "High false negative rate", "explanation": "Would affect NPV." },
            { "text": "Lead-time bias", "explanation": "Survival bias." },
            { "text": "Observer bias", "explanation": "Measurement error." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_52.jpg",
        "slideImageDescription": "The slide defining 'Predictive Value (+)' as TP/(TP+FP). The concept that prevalence drives PPV is a key teaching point."
    },
    {
        "id": 12,
        "category": "Predictive Values",
        "questionText": "If the prevalence of a disease in a population increases, what happens to the Positive Predictive Value (PPV) and Negative Predictive Value (NPV) of a screening test?",
        "options": [
            { "text": "PPV increases, NPV increases", "explanation": "Incorrect." },
            { "text": "PPV decreases, NPV increases", "explanation": "Inverse of reality." },
            { "text": "PPV increases, NPV decreases", "explanation": "As prevalence increases, there are more true positives relative to false positives (PPV up) and fewer true negatives relative to false negatives (NPV down)." },
            { "text": "PPV decreases, NPV decreases", "explanation": "Incorrect." },
            { "text": "They remain unchanged", "explanation": "Sensitivity/Specificity remain unchanged; PVs change." }
        ],
        "correctAnswerIndex": 2,
        "slideImagePath": "images/L134_slide_12.jpg",
        "slideImageDescription": "The slide defining Predictive Values. The relationship with prevalence is a standard derivative concept."
    },
    {
        "id": 13,
        "category": "Predictive Values",
        "questionText": "A family is screened for a genetic condition after returning from Senegal. They want to know: 'If I test positive, what is the probability I actually have the disease?' They are asking for the:",
        "options": [
            { "text": "Sensitivity", "explanation": "Probability of test+ given disease." },
            { "text": "Specificity", "explanation": "Probability of test- given health." },
            { "text": "Positive Predictive Value", "explanation": "PPV answers the patient's question: Probability of disease given a positive test result." },
            { "text": "Negative Predictive Value", "explanation": "Probability of health given negative test." },
            { "text": "Incidence Rate", "explanation": "Risk measure." }
        ],
        "correctAnswerIndex": 2,
        "slideImagePath": "images/L134_slide_60.jpg",
        "slideImageDescription": "The slide with the vignette: 'They want to know if they test positive... what the probability will be that they actually have the disease. YOU CAN TELL THEM ABOUT POSITIVE PREDICTIVE VALUE!'"
    },
    {
        "id": 14,
        "category": "Predictive Values",
        "questionText": "Calculate the Negative Predictive Value (NPV) given: TN = 900, FN = 100.",
        "options": [
            { "text": "10%", "explanation": "FN rate." },
            { "text": "90%", "explanation": "NPV = TN / (TN + FN) = 900 / 1000 = 90%." },
            { "text": "80%", "explanation": "Incorrect." },
            { "text": "100%", "explanation": "Incorrect." },
            { "text": "50%", "explanation": "Incorrect." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_52.jpg",
        "slideImageDescription": "The slide defining 'Predictive value (-)' as TN/(TN+FN)."
    },
    {
        "id": 15,
        "category": "Screening Tests",
        "questionText": "Which of the following is NOT a requirement for a successful screening program?",
        "options": [
            { "text": "A suitable disease (serious, high prevalence)", "explanation": "Required." },
            { "text": "A suitable test (valid, reliable, acceptable)", "explanation": "Required." },
            { "text": "A suitable screening program (resources, follow-up)", "explanation": "Required." },
            { "text": "A cure for the disease", "explanation": "While treatment should be available, a 'cure' is not strictly required (e.g., management of diabetes). However, the option '100% sensitivity' is a better distractor for 'NOT required' usually, but here 'Cure' is acceptable if the alternative is management." },
            { "text": "The test must be diagnostic", "explanation": "Screening tests are generally NOT diagnostic; they classify risk. This is the explicit 'NOT' in the lecture." }
        ],
        "correctAnswerIndex": 4,
        "slideImagePath": "images/L134_slide_49.jpg",
        "slideImageDescription": "The slide 'Screening' states: 'Remember- a screening test is generally NOT diagnostic'."
    },
    {
        "id": 16,
        "category": "Reliability vs Validity",
        "questionText": "A blood pressure cuff consistently reads 140/90 mmHg for a patient whose true blood pressure is 120/80 mmHg. This instrument is:",
        "options": [
            { "text": "Valid but not reliable", "explanation": "It is consistent (reliable) but wrong (invalid)." },
            { "text": "Reliable but not valid", "explanation": "Reliability refers to consistency (same result every time). Validity refers to accuracy (truth). This cuff is consistent (reliable) but inaccurate (not valid)." },
            { "text": "Both valid and reliable", "explanation": "Not valid." },
            { "text": "Neither valid nor reliable", "explanation": "It is reliable." },
            { "text": "Sensitive but not specific", "explanation": "Not applicable terms." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_54.jpg",
        "slideImageDescription": "The slide defining 'Reliability' as 'consistent results on repeated trials' and noting 'A screening test that is reliable is not necessarily also valid'."
    },
    {
        "id": 17,
        "category": "Biases",
        "questionText": "A screening program for prostate cancer detects many cases of slow-growing tumors that would likely never have caused symptoms during the patients' lifetimes. This phenomenon best illustrates:",
        "options": [
            { "text": "Lead-time bias", "explanation": "Early detection." },
            { "text": "Length bias", "explanation": "Length bias occurs when screening selectively identifies cases with a long preclinical phase (slower progression/better prognosis), missing rapidly fatal cases." },
            { "text": "Recall bias", "explanation": "Memory." },
            { "text": "Selection bias", "explanation": "Sampling." },
            { "text": "Confounding", "explanation": "Third variable." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_63.jpg",
        "slideImageDescription": "The slide defining 'Length Bias': 'Screening could selectively identify cases... which have a better prognosis... milder disease will be around long enough'."
    },
    {
        "id": 18,
        "category": "Biases",
        "questionText": "Two groups of patients with lung cancer are compared. Group A was diagnosed via screening, Group B via symptoms. Group A appears to survive 2 years longer. However, it is determined that screening merely detected the cancer 2 years earlier, without changing the time of death. This is an example of:",
        "options": [
            { "text": "Length bias", "explanation": "Prognosis difference." },
            { "text": "Lead-time bias", "explanation": "Lead-time bias is the artifactual increase in survival time due to earlier diagnosis (the 'lead time') without an actual postponement of death." },
            { "text": "Observer bias", "explanation": "Measurement." },
            { "text": "Publication bias", "explanation": "Reporting." },
            { "text": "Healthy worker effect", "explanation": "Occupational." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_62.jpg",
        "slideImageDescription": "The slide defining 'Lead-time Bias': 'People who were diagnosed earlier... don't necessarily have better survival... making it look like they had longer survival'."
    },
    {
        "id": 19,
        "category": "Survival Analysis",
        "questionText": "Which statistical method is most commonly used to estimate the survival probability of patients over time, accounting for censored data (patients lost to follow-up)?",
        "options": [
            { "text": "Linear regression", "explanation": "Continuous outcome." },
            { "text": "Logistic regression", "explanation": "Binary outcome." },
            { "text": "Kaplan-Meier curve", "explanation": "The Kaplan-Meier method is the standard for estimating survival functions and plotting survival curves." },
            { "text": "Chi-square test", "explanation": "Categorical comparison." },
            { "text": "T-test", "explanation": "Mean comparison." }
        ],
        "correctAnswerIndex": 2,
        "slideImagePath": "images/L134_slide_61.jpg",
        "slideImageDescription": "The slide 'SURVIVAL' mentions: 'One of the most common is the Kaplan Meier curve'."
    },
    {
        "id": 20,
        "category": "Survival Analysis",
        "questionText": "In a survival analysis, the probability of surviving 5 years is calculated as:",
        "options": [
            { "text": "The number of people alive at year 5 divided by the starting population", "explanation": "Simple proportion, ignores censoring." },
            { "text": "The product of the probabilities of surviving each preceding year", "explanation": "Survival probability is cumulative: P(Year 1) x P(Year 2 | Year 1) x ... This accounts for the conditional nature of survival." },
            { "text": "The average survival time of all patients", "explanation": "Mean survival." },
            { "text": "The incidence rate multiplied by 5", "explanation": "Incorrect." },
            { "text": "1 minus the Case Fatality Rate", "explanation": "Incorrect." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_61.jpg",
        "slideImageDescription": "The slide 'SURVIVAL' states: 'The probability of surviving for 5 years is the product of each of the probabilities of surviving each year'."
    },
    {
        "id": 21,
        "category": "Herd Immunity",
        "questionText": "The concept of Herd Immunity suggests that:",
        "options": [
            { "text": "100% of the population must be vaccinated to prevent outbreaks", "explanation": "Incorrect." },
            { "text": "Vaccination only protects the individual", "explanation": "Incorrect." },
            { "text": "A large proportion of immune individuals can protect the non-immune", "explanation": "Herd immunity occurs when a critical portion of a community is immunized against a contagious disease, reducing transmission and protecting those who are not immune." },
            { "text": "Immunity can be transferred from cattle to humans", "explanation": "Historical origin (vaccinia), but not the definition." },
            { "text": "Viruses mutate to become less virulent in herds", "explanation": "Incorrect." }
        ],
        "correctAnswerIndex": 2,
        "slideImagePath": "images/L134_slide_44.jpg",
        "slideImageDescription": "The slide 'Herd Immunity' states: 'A group of people can become resistant... even those individuals who were not vaccinated will be immune'."
    },
    {
        "id": 22,
        "category": "Incubation Period",
        "questionText": "The interval from the receipt of infection to the onset of clinical illness is defined as the:",
        "options": [
            { "text": "Latent period", "explanation": "Often synonymous but incubation is the clinical term." },
            { "text": "Incubation period", "explanation": "Definition: Time from exposure/infection to symptom onset." },
            { "text": "Infectious period", "explanation": "Time capable of transmitting." },
            { "text": "Window period", "explanation": "Time before test positivity." },
            { "text": "Generation time", "explanation": "Time between cases." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_46.jpg",
        "slideImageDescription": "The slide 'Incubation Period' defines it as: 'Interval from receipt of infection to onset of clinical illness'."
    },
    {
        "id": 23,
        "category": "Incubation Period",
        "questionText": "Understanding the incubation period of a disease is most critical for determining:",
        "options": [
            { "text": "The case fatality rate", "explanation": "Severity." },
            { "text": "The appropriate treatment dose", "explanation": "Pharmacology." },
            { "text": "How long a person should be in isolation after exposure", "explanation": "Quarantine/Isolation durations are based on the incubation period to ensure the person does not develop symptoms and transmit the disease." },
            { "text": "The genetic sequence of the pathogen", "explanation": "Virology." },
            { "text": "The prevalence of the disease", "explanation": "Frequency." }
        ],
        "correctAnswerIndex": 2,
        "slideImagePath": "images/L134_slide_46.jpg",
        "slideImageDescription": "The slide 'Incubation Period' asks: 'How long should a person be in isolation after exposure to disease?'"
    },
    {
        "id": 24,
        "category": "Screening",
        "questionText": "Screening classifies asymptomatic people as:",
        "options": [
            { "text": "Diseased or Healthy", "explanation": "Diagnostic tests do this." },
            { "text": "Likely or Unlikely to have a disease", "explanation": "Screening is probabilistic/presumptive. It sorts people into high-risk (likely) and low-risk (unlikely) groups for further testing." },
            { "text": "Treated or Untreated", "explanation": "Clinical status." },
            { "text": "Immune or Susceptible", "explanation": "Serology." },
            { "text": "Infectious or Non-infectious", "explanation": "Transmission status." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_47.jpg",
        "slideImageDescription": "The slide 'Screening' defines it as: 'Screening classifies asymptomatic people as likely or unlikely to have a disease'."
    },
    {
        "id": 25,
        "category": "Screening",
        "questionText": "The primary purpose of screening is to:",
        "options": [
            { "text": "Diagnose disease accurately", "explanation": "Not diagnostic." },
            { "text": "Reduce the cost of healthcare", "explanation": "Often increases cost initially." },
            { "text": "Delay the onset of symptomatic disease or improve survival", "explanation": "Secondary prevention: Catch it early to treat early and improve outcomes." },
            { "text": "Calculate incidence rates", "explanation": "Research goal." },
            { "text": "Eliminate false positives", "explanation": "Impossible." }
        ],
        "correctAnswerIndex": 2,
        "slideImagePath": "images/L134_slide_47.jpg",
        "slideImageDescription": "The slide 'Screening' lists Purpose: 'To delay the onset of symptomatic or clinical disease, or to improve survival'."
    },
    {
        "id": 26,
        "category": "Screening Risks",
        "questionText": "Which of the following is a potential hidden cost or risk of screening?",
        "options": [
            { "text": "Reduced anxiety in the population", "explanation": "Usually creates anxiety." },
            { "text": "Morbidity and anxiety from false positives", "explanation": "Screening can harm healthy people via false positives, leading to unnecessary invasive workups and psychological distress." },
            { "text": "Decreased incidence of disease", "explanation": "Screening increases incidence (detection)." },
            { "text": "Simplified clinical decision making", "explanation": "Complex." },
            { "text": "Guaranteed cure", "explanation": "No." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_48.jpg",
        "slideImageDescription": "The slide 'Screening' notes: 'There are hidden costs and risks. Screening can create morbidity and anxiety'."
    },
    {
        "id": 27,
        "category": "Screening Process",
        "questionText": "The first step in the screening process described in the lecture is to:",
        "options": [
            { "text": "Administer the screening test", "explanation": "Step 2." },
            { "text": "Classify people as 'diseased' or 'healthy' using a diagnostic test", "explanation": "To validate a screening test, you first need to know the 'truth' (Gold Standard) to populate the 2x2 table columns." },
            { "text": "Calculate sensitivity", "explanation": "Analysis step." },
            { "text": "Treat the positives", "explanation": "Clinical step." },
            { "text": "Publish the results", "explanation": "Academic step." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_49.jpg",
        "slideImageDescription": "The slide 'Screening' states: 'First you classify people as diseased or healthy using a diagnostic test'."
    },
    {
        "id": 28,
        "category": "2x2 Table",
        "questionText": "In a standard 2x2 table for screening, the columns typically represent:",
        "options": [
            { "text": "The Screening Test Result", "explanation": "Rows." },
            { "text": "The Gold Standard (True Disease Status)", "explanation": "Standard convention: Columns = Truth (Disease Present/Absent), Rows = Test (Positive/Negative)." },
            { "text": "The Risk Factors", "explanation": "No." },
            { "text": "The Symptoms", "explanation": "No." },
            { "text": "The Time Period", "explanation": "No." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_50.jpg",
        "slideImageDescription": "The 2x2 table slide shows 'Gold Standard - Diagnostic Test' as the header for the columns (Present/Absent)."
    },
    {
        "id": 29,
        "category": "Sensitivity",
        "questionText": "A test with 100% sensitivity will have:",
        "options": [
            { "text": "Zero False Positives", "explanation": "Related to Specificity." },
            { "text": "Zero False Negatives", "explanation": "Sensitivity = TP / (TP + FN). To be 100% (1.0), FN must be 0." },
            { "text": "Zero True Negatives", "explanation": "No." },
            { "text": "100% Specificity", "explanation": "Independent parameters." },
            { "text": "100% PPV", "explanation": "Depends on prevalence/specificity." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_51.jpg",
        "slideImageDescription": "The slide defining Sensitivity as TP/(TP+FN). Mathematical implication of denominator."
    },
    {
        "id": 30,
        "category": "Specificity",
        "questionText": "A test with 100% specificity will have:",
        "options": [
            { "text": "Zero False Positives", "explanation": "Specificity = TN / (TN + FP). To be 100%, FP must be 0." },
            { "text": "Zero False Negatives", "explanation": "Sensitivity." },
            { "text": "Zero True Positives", "explanation": "No." },
            { "text": "100% Sensitivity", "explanation": "Independent." },
            { "text": "0% NPV", "explanation": "No." }
        ],
        "correctAnswerIndex": 0,
        "slideImagePath": "images/L134_slide_51.jpg",
        "slideImageDescription": "The slide defining Specificity as TN/(TN+FP)."
    },
    {
        "id": 31,
        "category": "Predictive Values",
        "questionText": "Which measure of screening validity is most useful to the clinician in counseling a specific patient about their test result?",
        "options": [
            { "text": "Sensitivity", "explanation": "Population measure." },
            { "text": "Specificity", "explanation": "Population measure." },
            { "text": "Predictive Values (PPV/NPV)", "explanation": "Predictive values answer 'Given this result, do I have the disease?', which is the patient's concern." },
            { "text": "Prevalence", "explanation": "Background risk." },
            { "text": "Incidence", "explanation": "Background risk." }
        ],
        "correctAnswerIndex": 2,
        "slideImagePath": "images/L134_slide_60.jpg",
        "slideImageDescription": "The slide with the vignette explicitly links the patient's question to Positive Predictive Value."
    },
    {
        "id": 32,
        "category": "Incidence Calculation",
        "questionText": "In a population of 1000, 200 have the disease at the start of the year. Over the year, 50 new cases develop. What is the incidence rate?",
        "options": [
            { "text": "50 / 1000", "explanation": "Denominator error." },
            { "text": "50 / 800", "explanation": "Population at risk = Total (1000) - Existing cases (200) = 800. Incidence = 50 / 800." },
            { "text": "250 / 1000", "explanation": "Prevalence." },
            { "text": "50 / 200", "explanation": "Incorrect." },
            { "text": "200 / 1000", "explanation": "Initial prevalence." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_8.jpg",
        "slideImageDescription": "The slide defining Incidence Rate formula."
    },
    {
        "id": 33,
        "category": "Prevalence Calculation",
        "questionText": "Using the same numbers (1000 total, 200 existing, 50 new), what is the period prevalence for the year?",
        "options": [
            { "text": "200 / 1000", "explanation": "Point prevalence start." },
            { "text": "250 / 1000", "explanation": "Period prevalence includes all cases (old + new) existing during the period divided by the total population. (200 + 50) / 1000 = 25%." },
            { "text": "50 / 800", "explanation": "Incidence." },
            { "text": "50 / 1000", "explanation": "Incorrect." },
            { "text": "250 / 800", "explanation": "Denominator error." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_8.jpg",
        "slideImageDescription": "The slide defining Prevalence Rate."
    },
    {
        "id": 34,
        "category": "Epidemiology Basics",
        "questionText": "Epidemiology is defined as the study of:",
        "options": [
            { "text": "The treatment of individual patients", "explanation": "Clinical medicine." },
            { "text": "The patterns, causes, and effects of health and disease conditions in populations", "explanation": "Standard definition provided in lecture." },
            { "text": "The molecular basis of disease", "explanation": "Basic science." },
            { "text": "The financial management of hospitals", "explanation": "Administration." },
            { "text": "The history of medicine", "explanation": "History." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_8.jpg",
        "slideImageDescription": "The slide defining Epidemiology."
    },
    {
        "id": 35,
        "category": "Study Design",
        "questionText": "To determine the incidence of a disease, which study design is required?",
        "options": [
            { "text": "Cross-sectional", "explanation": "Measures prevalence (snapshot)." },
            { "text": "Cohort", "explanation": "Cohort studies follow a population over time to identify new cases, allowing for the calculation of incidence." },
            { "text": "Case-control", "explanation": "Odds ratio." },
            { "text": "Case series", "explanation": "Descriptive." },
            { "text": "Ecological", "explanation": "Group level." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_8.jpg",
        "slideImageDescription": "The slide defining Incidence Rate implies a time period and follow-up, characteristic of cohort designs (though not explicitly named, the concept of 'time period' is key)."
    },
    {
        "id": 36,
        "category": "Biases",
        "questionText": "Length bias is most likely to result in the overestimation of survival for:",
        "options": [
            { "text": "Rapidly progressive diseases", "explanation": "Missed by screening." },
            { "text": "Slowly progressive diseases", "explanation": "Length bias selects for slow-growing (long preclinical phase) tumors, making screening appear to improve survival artificially." },
            { "text": "Infectious diseases", "explanation": "Acute." },
            { "text": "Congenital defects", "explanation": "Static." },
            { "text": "Traumatic injuries", "explanation": "Acute." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_63.jpg",
        "slideImageDescription": "The slide defining Length Bias."
    },
    {
        "id": 37,
        "category": "Screening",
        "questionText": "If a screening test is 'reliable', it means:",
        "options": [
            { "text": "It measures what it is supposed to measure", "explanation": "Validity." },
            { "text": "It gives the same result on repeated trials", "explanation": "Definition of reliability (consistency/precision)." },
            { "text": "It has high sensitivity", "explanation": "Validity parameter." },
            { "text": "It has high specificity", "explanation": "Validity parameter." },
            { "text": "It is expensive", "explanation": "No." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_8.jpg",
        "slideImageDescription": "The slide defining Reliability."
    },
    {
        "id": 38,
        "category": "Epidemiology Math",
        "questionText": "In a 2x2 table, the formula 'a / (a + b)' represents:",
        "options": [
            { "text": "Sensitivity", "explanation": "a / (a+c)." },
            { "text": "Specificity", "explanation": "d / (b+d)." },
            { "text": "Positive Predictive Value", "explanation": "TP / (TP + FP) = a / (a + b)." },
            { "text": "Negative Predictive Value", "explanation": "d / (c+d)." },
            { "text": "Prevalence", "explanation": "(a+c) / (a+b+c+d)." }
        ],
        "correctAnswerIndex": 2,
        "slideImagePath": "images/L134_slide_52.jpg",
        "slideImageDescription": "The slide defining Predictive Value (+)."
    },
    {
        "id": 39,
        "category": "Epidemiology Math",
        "questionText": "In a 2x2 table, the formula 'd / (b + d)' represents:",
        "options": [
            { "text": "Sensitivity", "explanation": "a / (a+c)." },
            { "text": "Specificity", "explanation": "TN / (FP + TN) = d / (b + d)." },
            { "text": "PPV", "explanation": "a / (a+b)." },
            { "text": "NPV", "explanation": "d / (c+d)." },
            { "text": "Accuracy", "explanation": "(a+d)/Total." }
        ],
        "correctAnswerIndex": 1,
        "slideImagePath": "images/L134_slide_8.jpg",
        "slideImageDescription": "The slide defining Specificity."
    },
    {
        "id": 40,
        "category": "Clinical Application",
        "questionText": "A 50-year-old man tests positive for a disease with a prevalence of 1/1000. The test has 99% sensitivity and 90% specificity. What is the approximate probability he actually has the disease?",
        "options": [
            { "text": "99%", "explanation": "Confusing sensitivity with PPV." },
            { "text": "90%", "explanation": "Confusing specificity with PPV." },
            { "text": "50%", "explanation": "Incorrect." },
            { "text": "1%", "explanation": "With low prevalence (0.1%) and 90% specificity (10% FP rate), FPs vastly outnumber TPs. PPV is very low (approx 1%)." },
            { "text": "10%", "explanation": "Closer but 1% is more accurate." }
        ],
        "correctAnswerIndex": 3,
        "slideImagePath": "images/L134_slide_52.jpg",
        "slideImageDescription": "The slide discussing Predictive Value and its dependence on prevalence."
    }
];

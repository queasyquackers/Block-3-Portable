
// audit_tests.js
// Run this in the browser console to identify data integrity issues.

(function runAudit() {
    console.clear();
    console.log("%cStarting MedStudyOS Data Audit...", "color: #268bd2; font-size: 16px; font-weight: bold;");

    if (!window.testsToLoad) {
        console.error("❌ 'testsToLoad' not found. Ensure config.js is loaded.");
        return;
    }

    let errorCount = 0;
    let warningCount = 0;
    const globalIds = new Set();

    window.testsToLoad.forEach(testObj => {
        const testName = testObj.name;
        const questions = testObj.data;

        if (!questions || !Array.isArray(questions)) {
            console.error(`❌ [${testName}] No data found or not an array.`);
            errorCount++;
            return;
        }

        console.groupCollapsed(`Checking ${testName} (${questions.length} questions)`);

        questions.forEach((q, index) => {
            const qRef = `Q${index + 1} (ID: ${q.id})`;

            // 1. Critical Fields
            if (typeof q.correctAnswerIndex !== 'number') {
                console.error(`❌ [${qRef}] Missing 'correctAnswerIndex'.`);
                errorCount++;
            } else if (q.correctAnswerIndex < 0 || q.correctAnswerIndex >= q.options.length) {
                console.error(`❌ [${qRef}] 'correctAnswerIndex' ${q.correctAnswerIndex} is out of bounds (Options: ${q.options.length}).`);
                errorCount++;
            }

            // 2. Options Integrity
            if (!q.options || q.options.length < 2) {
                console.error(`❌ [${qRef}] Insufficient options.`);
                errorCount++;
            } else {
                q.options.forEach((opt, optIdx) => {
                    const optLabel = String.fromCharCode(65 + optIdx);
                    
                    if (!opt.explanation || opt.explanation.trim() === "") {
                        console.error(`❌ [${qRef}] Option ${optLabel} explanation is empty.`);
                        errorCount++;
                    }
                    
                    if (opt.explanation.includes("Incorrect.") && opt.explanation.length < 15) {
                         console.warn(`⚠️ [${qRef}] Option ${optLabel} explanation seems generic: "${opt.explanation}"`);
                         warningCount++;
                    }

                    // Check for "Incorrect." placeholder without "This would be..." (Rule-out format check)
                    // We only warn here because not all files are migrated
                    // if (opt.explanation.startsWith("Incorrect.") && !opt.explanation.includes("This would be")) {
                    //    console.warn(`⚠️ [${qRef}] Option ${optLabel} missing 'This would be' format.`);
                    // }
                });
            }

            // 3. ID Uniqueness
            if (q.id) {
                const uniqueId = `${testName}_${q.id}`;
                if (globalIds.has(uniqueId)) {
                   console.error(`❌ [${qRef}] Duplicate ID detected across files: ${uniqueId}`);
                   errorCount++;
                }
                globalIds.add(uniqueId);
            }

            // 4. Clinical Pearl
            if (!q.clinicalPearl) {
                 console.warn(`⚠️ [${qRef}] Missing Clinical Pearl.`);
                 warningCount++;
            }
        });

        console.groupEnd();
    });

    console.log(`%cAudit Complete. Errors: ${errorCount}, Warnings: ${warningCount}`, "font-weight: bold; margin-top: 10px;");
    if (errorCount === 0) console.log("%c✅ Data Integrity Healthy!", "color: green; font-weight: bold;");
})();

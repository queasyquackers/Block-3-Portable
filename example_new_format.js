// Example test using the NEW pdfPage format (no image files needed!)
// This demonstrates how future questions can be generated

window.L103_Example = [
    {
        "id": 1,
        "category": "Head & Neck Anatomy",
        "questionText": "A 45-year-old patient presents with difficulty swallowing. During examination, you note weakness of the palatoglossus muscle. Which cranial nerve is most likely affected?",
        "options": [
            { "text": "Trigeminal nerve (CN V)", "explanation": "The trigeminal nerve provides sensory innervation to the face and motor to muscles of mastication, not the palatoglossus." },
            { "text": "Facial nerve (CN VII)", "explanation": "The facial nerve innervates muscles of facial expression and provides taste to anterior 2/3 of tongue, not the palatoglossus." },
            { "text": "Glossopharyngeal nerve (CN IX)", "explanation": "CN IX provides sensory and taste to posterior 1/3 of tongue but does not innervate palatoglossus." },
            { "text": "Vagus nerve (CN X)", "explanation": "The vagus nerve provides motor innervation to all muscles of the soft palate and pharynx, including the palatoglossus muscle." },
            { "text": "Hypoglossal nerve (CN XII)", "explanation": "CN XII innervates intrinsic and most extrinsic muscles of the tongue, but NOT the palatoglossus (which is innervated by CN X)." }
        ],
        "correctAnswerIndex": 3,
        "pdfPage": 25,
        "slideImageDescription": "This slide shows the innervation of the soft palate and pharyngeal muscles. It clearly indicates that the vagus nerve (CN X) provides motor supply to the palatoglossus muscle, distinguishing it from the hypoglossal nerve which supplies other tongue muscles."
    },
    {
        "id": 2,
        "category": "Head & Neck Anatomy",
        "questionText": "A medical student is studying the arterial supply to the face. Which artery is the primary source of blood to the face and scalp?",
        "options": [
            { "text": "Internal carotid artery", "explanation": "The internal carotid supplies the brain, not the face and scalp." },
            { "text": "External carotid artery", "explanation": "The external carotid artery gives rise to the facial artery and other branches that supply the face and scalp, making it the primary source." },
            { "text": "Vertebral artery", "explanation": "The vertebral artery supplies the posterior brain, not the face." },
            { "text": "Subclavian artery", "explanation": "The subclavian gives rise to vertebral artery but does not directly supply the face." },
            { "text": "Maxillary artery only", "explanation": "While the maxillary artery does supply part of the face, it is a branch of the external carotid, which is the primary source." }
        ],
        "correctAnswerIndex": 1,
        "pdfPage": 42,
        "slideImageDescription": "This slide displays a diagram of the external carotid artery and its branches, showing how it bifurcates into various branches including the facial, superficial temporal, and maxillary arteries that supply the face and scalp."
    }
];

/* 
INSTRUCTIONS FOR USING THIS FORMAT:

1. No image extraction needed! Just note the PDF page number
2. The system automatically reads the lecture ID from the test name in config.js
3. For example, if config.js has: { name: "13-H&N Anatomy", data: L103 }
   - The system knows this is L103
   - It looks up L103 in PDF_MAPPING
   - It opens that PDF at the specified pdfPage

4. Benefits:
   - No need to extract and save images
   - Smaller repository size
   - Easier to update questions
   - Direct link to source material
   - Works with multi-part PDFs automatically

5. Backward Compatibility:
   - Old format with slideImagePath still works
   - Can mix old and new formats
   - Gradual migration possible
*/

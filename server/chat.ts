import { Router } from "express";

const router = Router();

// Enhanced medical knowledge base with detailed advice
const medicalKnowledgeBase: Record<string, { advice: string; severity: "low" | "medium" | "high" }> = {
    // Respiratory Issues
    "breathing|breath|respiratory|asthma|shortness": {
        advice: "**Breathing Problems:**\n\n1. **Immediate Steps:**\n   - Sit upright and try to stay calm\n   - Loosen tight clothing\n   - Practice slow, deep breathing\n   - Use your inhaler if you have asthma\n\n2. **When to Seek Help:**\n   - Severe difficulty breathing\n   - Chest pain or pressure\n   - Blue lips or fingernails\n   - Confusion or drowsiness\n\n⚠️ **This could be serious.** If symptoms are severe, seek emergency care immediately.",
        severity: "high"
    },

    // Head & Pain
    "headache|migraine|head pain": {
        advice: "**Headache Relief:**\n\n1. **Home Remedies:**\n   - Rest in a quiet, dark room\n   - Stay well hydrated (drink water)\n   - Apply cold compress to forehead\n   - Avoid bright screens and loud noises\n   - Take over-the-counter pain relief (as directed)\n\n2. **Prevention Tips:**\n   - Maintain regular sleep schedule\n   - Manage stress levels\n   - Avoid trigger foods (caffeine, alcohol)\n   - Stay hydrated throughout the day\n\n3. **See a doctor if:**\n   - Severe or sudden onset\n   - Accompanied by fever, stiff neck, or vision changes\n   - Lasting more than 3 days",
        severity: "medium"
    },

    // Fever & Temperature
    "fever|temperature|hot|chills": {
        advice: "**Managing Fever:**\n\n1. **Treatment:**\n   - Rest and stay hydrated\n   - Take acetaminophen or ibuprofen (as directed)\n   - Use lukewarm sponge bath\n   - Wear light clothing\n   - Monitor temperature regularly\n\n2. **Hydration is Key:**\n   - Drink plenty of water, juice, or broth\n   - Avoid alcohol and caffeine\n\n3. **Seek medical attention if:**\n   - Temperature exceeds 103°F (39.4°C)\n   - Fever lasts more than 3 days\n   - Accompanied by severe symptoms\n   - Infant under 3 months with any fever",
        severity: "medium"
    },

    // Cold & Flu
    "cold|cough|flu|sore throat|congestion|runny nose|sneezing": {
        advice: "**Cold & Flu Care:**\n\n1. **Symptom Relief:**\n   - Get plenty of rest (7-9 hours)\n   - Drink warm fluids (tea, soup, warm water)\n   - Use a humidifier\n   - Gargle with salt water for sore throat\n   - Take over-the-counter medications as needed\n\n2. **Recovery Tips:**\n   - Wash hands frequently\n   - Cover coughs and sneezes\n   - Stay home to avoid spreading\n   - Eat nutritious foods\n\n3. **Duration:**\n   - Most colds resolve in 7-10 days\n   - Consult a doctor if symptoms worsen or persist beyond 10 days",
        severity: "low"
    },

    // Stomach Issues
    "stomach|nausea|vomit|diarrhea|abdominal|belly|digestive": {
        advice: "**Digestive Issues:**\n\n1. **Immediate Care:**\n   - Stay hydrated with clear fluids\n   - Eat bland foods (BRAT diet: Bananas, Rice, Applesauce, Toast)\n   - Avoid dairy, fatty, or spicy foods\n   - Rest your stomach\n\n2. **Hydration:**\n   - Sip water or electrolyte drinks\n   - Avoid alcohol and caffeine\n\n3. **See a doctor if:**\n   - Severe abdominal pain\n   - Blood in vomit or stool\n   - Signs of dehydration\n   - Symptoms last more than 2 days",
        severity: "medium"
    },

    // Pain & Injury
    "pain|ache|hurt|injury|sprain|strain": {
        advice: "**Pain Management:**\n\n1. **R.I.C.E. Method:**\n   - **R**est the affected area\n   - **I**ce for 15-20 minutes every 2-3 hours\n   - **C**ompression with elastic bandage\n   - **E**levate above heart level\n\n2. **Pain Relief:**\n   - Over-the-counter pain medication\n   - Avoid activities that worsen pain\n   - Gentle stretching when appropriate\n\n3. **Seek medical care if:**\n   - Severe or worsening pain\n   - Inability to move the area\n   - Visible deformity\n   - Pain after an accident",
        severity: "medium"
    },

    // Skin Issues
    "rash|skin|itch|allergy|hives": {
        advice: "**Skin Concerns:**\n\n1. **Treatment:**\n   - Keep area clean and dry\n   - Apply cool compress\n   - Use over-the-counter hydrocortisone cream\n   - Take antihistamine for itching\n   - Avoid scratching\n\n2. **Prevention:**\n   - Identify and avoid triggers\n   - Use gentle, fragrance-free products\n   - Moisturize regularly\n\n3. **See a doctor if:**\n   - Rash spreads rapidly\n   - Signs of infection (pus, warmth, red streaks)\n   - Accompanied by fever\n   - Severe itching or pain",
        severity: "low"
    },

    // Sleep Issues
    "sleep|insomnia|tired|fatigue|exhausted": {
        advice: "**Better Sleep:**\n\n1. **Sleep Hygiene:**\n   - Maintain consistent sleep schedule\n   - Create relaxing bedtime routine\n   - Keep bedroom cool, dark, and quiet\n   - Avoid screens 1 hour before bed\n   - Limit caffeine after 2 PM\n\n2. **Relaxation Techniques:**\n   - Deep breathing exercises\n   - Progressive muscle relaxation\n   - Meditation or gentle yoga\n\n3. **Consult a doctor if:**\n   - Chronic insomnia (>3 weeks)\n   - Excessive daytime sleepiness\n   - Snoring or breathing pauses during sleep",
        severity: "low"
    },

    // Anxiety & Stress
    "anxiety|stress|panic|worried|nervous": {
        advice: "**Managing Anxiety:**\n\n1. **Immediate Relief:**\n   - Practice deep breathing (4-7-8 technique)\n   - Ground yourself (5-4-3-2-1 method)\n   - Go for a walk\n   - Talk to someone you trust\n\n2. **Long-term Strategies:**\n   - Regular exercise\n   - Adequate sleep\n   - Limit caffeine and alcohol\n   - Mindfulness or meditation\n   - Journaling\n\n3. **Seek professional help if:**\n   - Anxiety interferes with daily life\n   - Panic attacks\n   - Persistent worry\n   - Physical symptoms (chest pain, dizziness)",
        severity: "medium"
    }
};

// Extract keywords from user message
const extractKeywords = (message: string): string[] => {
    const lowerMessage = message.toLowerCase();
    const keywords: string[] = [];

    for (const pattern in medicalKnowledgeBase) {
        const regex = new RegExp(pattern, 'i');
        if (regex.test(lowerMessage)) {
            keywords.push(pattern);
        }
    }

    return keywords;
};

// Get medical response based on keywords
const getMedicalResponse = (userMessage: string): { response: string; showBooking: boolean } => {
    const keywords = extractKeywords(userMessage);

    if (keywords.length > 0) {
        // Use the first matched keyword pattern
        const matchedPattern = keywords[0];
        const medicalInfo = medicalKnowledgeBase[matchedPattern];

        const response = medicalInfo.advice;
        const showBooking = medicalInfo.severity === "high" || medicalInfo.severity === "medium";

        return { response, showBooking };
    }

    // Check for appointment/booking keywords
    if (/appointment|book|consultation|doctor|schedule/.test(userMessage.toLowerCase())) {
        return {
            response: "**Book a Consultation:**\n\nOur certified doctors are available 24/7 for video consultations. Click the button below to schedule an appointment at your convenience.",
            showBooking: true
        };
    }

    // Default response
    return {
        response: "I understand you have a health concern. While I can provide general information, I recommend consulting with one of our certified doctors for personalized medical advice.\n\nCould you please describe your symptoms in more detail? For example:\n- What symptoms are you experiencing?\n- When did they start?\n- How severe are they?",
        showBooking: true
    };
};

router.post("/", (req, res) => {
    try {
        const { message } = req.body;

        if (!message || typeof message !== "string") {
            return res.status(400).json({ error: "Invalid message format" });
        }

        const { response, showBooking } = getMedicalResponse(message);

        res.json({ response, showBooking });
    } catch (error: any) {
        console.error("Chat API error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
